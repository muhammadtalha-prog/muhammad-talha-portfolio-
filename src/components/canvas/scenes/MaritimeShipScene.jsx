"use client";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function MaritimeShipScene({ position = [0, 0, 0] }) {
  const shipGroup = useRef();
  const oceanRef = useRef();
  const hudBoxRef = useRef();

  // Create ocean geometry with animated vertices
  const oceanGeom = useMemo(() => {
    const geom = new THREE.PlaneGeometry(80, 80, 40, 40);
    geom.rotateX(-Math.PI / 2);
    return geom;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Gentle ship bobbing on ocean waves
    if (shipGroup.current) {
      shipGroup.current.position.y = Math.sin(time * 1.2) * 0.15;
      shipGroup.current.rotation.z = Math.cos(time * 0.8) * 0.03;
      shipGroup.current.rotation.x = Math.sin(time * 0.6) * 0.02;
    }

    // Animate ocean surface
    if (oceanRef.current) {
      const pos = oceanRef.current.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const u = pos.getX(i);
        const v = pos.getZ(i);
        const z = Math.sin(u * 0.2 + time) * 0.25 + Math.cos(v * 0.2 + time * 1.5) * 0.25;
        pos.setY(i, z);
      }
      pos.needsUpdate = true;
    }
  });

  return (
    <group position={position}>
      {/* Dynamic Animated Ocean Surface */}
      <mesh ref={oceanRef} geometry={oceanGeom} position={[0, -1.8, 0]}>
        <meshStandardMaterial
          color="#0a192f"
          roughness={0.1}
          metalness={0.8}
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Cargo Ship Model */}
      <group ref={shipGroup} position={[0, -0.5, 0]}>
        {/* Main Cargo Hull */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.2, 1.2, 7.5]} />
          <meshStandardMaterial color="#1a202c" roughness={0.4} metalness={0.7} />
        </mesh>

        {/* Bow (Front pointed section) */}
        <mesh position={[0, 0.1, 4.3]} rotation={[0, 0, 0]}>
          <coneGeometry args={[1.2, 2.2, 4]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} metalness={0.7} />
        </mesh>

        {/* Cargo Containers */}
        {[-1.8, -0.6, 0.6].map((zPos, idx) => (
          <mesh key={idx} position={[0, 0.95, zPos]}>
            <boxGeometry args={[1.8, 0.7, 1.1]} />
            <meshStandardMaterial
              color={idx === 0 ? "#00f0ff" : idx === 1 ? "#ffb700" : "#3b82f6"}
              roughness={0.5}
            />
          </mesh>
        ))}

        {/* Bridge Superstructure (Cabin) */}
        <mesh position={[0, 1.5, 2.2]}>
          <boxGeometry args={[1.6, 1.8, 1.4]} />
          <meshStandardMaterial color="#334155" roughness={0.3} metalness={0.8} />
        </mesh>

        {/* Radar Mast & Antenna */}
        <mesh position={[0, 2.7, 2.2]}>
          <cylinderGeometry args={[0.04, 0.08, 0.8, 8]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>

        {/* YOLO Detection Bounding Box HUD Graphic */}
        <group ref={hudBoxRef} position={[0, 0.8, 0]}>
          {/* Wireframe bounding box */}
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(3.0, 2.6, 9.2)]} />
            <lineBasicMaterial color="#00f0ff" linewidth={2} transparent opacity={0.85} />
          </lineSegments>

          {/* Floating Confidence Badge Anchor Point */}
          <group position={[1.6, 1.4, 4.6]}>
            <mesh>
              <sphereGeometry args={[0.1, 8, 8]} />
              <meshBasicMaterial color="#00f0ff" />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}
