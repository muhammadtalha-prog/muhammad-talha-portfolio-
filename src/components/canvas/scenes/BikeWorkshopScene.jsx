"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function BikeWorkshopScene({ position = [0, 0, 0] }) {
  const bikeGroup = useRef();
  const frontWheelRef = useRef();
  const rearWheelRef = useRef();

  useFrame((state, delta) => {
    if (frontWheelRef.current && rearWheelRef.current) {
      frontWheelRef.current.rotation.z -= delta * 0.5;
      rearWheelRef.current.rotation.z -= delta * 0.5;
    }
  });

  return (
    <group position={position}>
      {/* Spotlight Overhead Accent */}
      <spotLight
        position={[0, 8, 4]}
        angle={0.6}
        penumbra={0.8}
        intensity={2.5}
        color="#00f0ff"
      />

      {/* Workshop Grid Floor */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#0b101b" roughness={0.7} metalness={0.5} />
      </mesh>

      {/* 3D Electric Bicycle Assembly */}
      <group ref={bikeGroup} position={[0, -0.6, 0]}>
        {/* Main Diamond Frame (Carbon Fiber style) */}
        {/* Top Tube */}
        <mesh position={[-0.4, 0.4, 0]} rotation={[0, 0, -Math.PI / 8]}>
          <cylinderGeometry args={[0.07, 0.07, 2.2, 16]} />
          <meshStandardMaterial color="#1f2937" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Down Tube */}
        <mesh position={[-0.3, -0.2, 0]} rotation={[0, 0, Math.PI / 5]}>
          <cylinderGeometry args={[0.09, 0.09, 2.4, 16]} />
          <meshStandardMaterial color="#111827" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Seat Tube */}
        <mesh position={[-1.2, 0.1, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 2.0, 16]} />
          <meshStandardMaterial color="#1f2937" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Electric Battery Pack Enclosure (Cyan Glow Outline) */}
        <mesh position={[-0.5, 0.0, 0]}>
          <boxGeometry args={[1.1, 0.45, 0.28]} />
          <meshStandardMaterial color="#00f0ff" roughness={0.3} metalness={0.8} />
        </mesh>

        {/* Seat / Saddle */}
        <mesh position={[-1.25, 1.15, 0]}>
          <boxGeometry args={[0.6, 0.12, 0.35]} />
          <meshStandardMaterial color="#111827" roughness={0.8} />
        </mesh>

        {/* Front Fork & Handlebars */}
        <group position={[0.7, 0.5, 0]}>
          <mesh rotation={[0, 0, -Math.PI / 12]}>
            <cylinderGeometry args={[0.06, 0.06, 2.2, 16]} />
            <meshStandardMaterial color="#4b5563" metalness={0.9} />
          </mesh>
          {/* Handlebar crossbar */}
          <mesh position={[0.1, 1.0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 1.4, 16]} />
            <meshStandardMaterial color="#9ca3af" metalness={0.9} />
          </mesh>
        </group>

        {/* Front Wheel */}
        <group ref={frontWheelRef} position={[1.1, -0.6, 0]}>
          {/* Tire */}
          <mesh>
            <torusGeometry args={[1.0, 0.12, 16, 32]} />
            <meshStandardMaterial color="#111827" roughness={0.9} />
          </mesh>
          {/* Rim */}
          <mesh>
            <torusGeometry args={[0.9, 0.03, 16, 32]} />
            <meshBasicMaterial color="#00f0ff" />
          </mesh>
          {/* Spokes */}
          {[0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4].map((rot, i) => (
            <mesh key={i} rotation={[0, 0, rot]}>
              <boxGeometry args={[1.8, 0.015, 0.015]} />
              <meshBasicMaterial color="#475569" />
            </mesh>
          ))}
        </group>

        {/* Rear Wheel & Electric Hub Motor */}
        <group ref={rearWheelRef} position={[-1.4, -0.6, 0]}>
          {/* Tire */}
          <mesh>
            <torusGeometry args={[1.0, 0.12, 16, 32]} />
            <meshStandardMaterial color="#111827" roughness={0.9} />
          </mesh>
          {/* Rim */}
          <mesh>
            <torusGeometry args={[0.9, 0.03, 16, 32]} />
            <meshBasicMaterial color="#ffb700" />
          </mesh>
          {/* Heavy Rear Hub Motor */}
          <mesh>
            <cylinderGeometry args={[0.45, 0.45, 0.35, 32]} />
            <meshStandardMaterial color="#1e293b" metalness={0.95} roughness={0.1} />
          </mesh>
        </group>
      </group>
    </group>
  );
}
