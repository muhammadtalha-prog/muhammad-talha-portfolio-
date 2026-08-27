"use client";
import React, { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export default function CameraChoreographer({ onScrollUpdate }) {
  const { camera } = useThree();
  const currentPos = useRef(new THREE.Vector3(0, 22, 28));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    // Initial drop-in animation (Section 0 intro drop-in: 2.5 - 3.0s)
    gsap.to(currentPos.current, {
      x: 0,
      y: 0,
      z: 9,
      duration: 2.8,
      ease: "power3.out",
    });

    // Scroll-scrubbed camera choreography across the entire document
    const ST = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
      onUpdate: (self) => {
        const p = self.progress; // 0 to 1
        if (onScrollUpdate) onScrollUpdate(p);

        // Calculate continuous scroll trajectory coordinates
        if (p < 0.12) {
          // Section 1: Hero (z: 9 to 15)
          const localP = p / 0.12;
          currentPos.current.x = localP * 1.5;
          currentPos.current.y = 0;
          currentPos.current.z = 9 + localP * 6;
          targetLookAt.current.set(0, 0, 0);
        } else if (p < 0.28) {
          // Section 2: IRSTD Radar (z: 20 base)
          const localP = (p - 0.12) / 0.16;
          currentPos.current.x = Math.sin(localP * Math.PI) * 2.5;
          currentPos.current.y = 1.8 + Math.cos(localP * Math.PI) * 0.8;
          currentPos.current.z = 16 + localP * 9;
          targetLookAt.current.set(0, 0.2, 20);
        } else if (p < 0.42) {
          // Section 3: Maritime Ship Orbit (z: 40 base)
          const localP = (p - 0.28) / 0.14;
          const orbitAngle = localP * Math.PI * 1.2;
          currentPos.current.x = Math.sin(orbitAngle) * 6.5;
          currentPos.current.y = 1.5 + Math.sin(localP * Math.PI) * 1.2;
          currentPos.current.z = 40 + Math.cos(orbitAngle) * 6.5;
          targetLookAt.current.set(0, 0, 40);
        } else if (p < 0.54) {
          // Section 4: MATLAB Lab (z: 60 base)
          const localP = (p - 0.42) / 0.12;
          currentPos.current.x = (localP - 0.5) * 3;
          currentPos.current.y = 0.5;
          currentPos.current.z = 57 + localP * 6;
          targetLookAt.current.set(0, 0, 60);
        } else if (p < 0.66) {
          // Section 5: Electric Bicycle Orbit (z: 80 base)
          const localP = (p - 0.54) / 0.12;
          const bikeAngle = localP * Math.PI;
          currentPos.current.x = Math.cos(bikeAngle) * 5.5;
          currentPos.current.y = 0.8;
          currentPos.current.z = 80 + Math.sin(bikeAngle) * 5.5;
          targetLookAt.current.set(0, -0.4, 80);
        } else if (p < 0.78) {
          // Section 6: Projects Gallery (z: 100 base)
          const localP = (p - 0.66) / 0.12;
          currentPos.current.x = (localP - 0.5) * 8;
          currentPos.current.y = 0;
          currentPos.current.z = 97 + localP * 6;
          targetLookAt.current.set(currentPos.current.x * 0.5, 0, 100);
        } else if (p < 0.88) {
          // Section 7: Timeline Corridor Travel (z: 120 to 135)
          const localP = (p - 0.78) / 0.1;
          currentPos.current.x = Math.sin(localP * Math.PI * 2) * 1.2;
          currentPos.current.y = 0;
          currentPos.current.z = 118 + localP * 16;
          targetLookAt.current.set(0, 0, 140);
        } else {
          // Section 8 - 11: Skills, Certifications, Contact (z: 150 to 200)
          const localP = (p - 0.88) / 0.12;
          currentPos.current.x = 0;
          currentPos.current.y = 0;
          currentPos.current.z = 150 + localP * 50;
          targetLookAt.current.set(0, 0, 150 + localP * 50);
        }
      },
    });

    return () => {
      ST.kill();
    };
  }, [onScrollUpdate]);

  useFrame(() => {
    // Lerp camera position and lookAt smoothly
    camera.position.lerp(currentPos.current, 0.08);
    
    const currentLookAt = new THREE.Vector3();
    camera.getWorldDirection(currentLookAt);
    
    // Smooth lookAt target tracking
    camera.lookAt(targetLookAt.current);
  });

  return null;
}
