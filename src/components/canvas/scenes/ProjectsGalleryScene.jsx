"use client";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ProjectsGalleryScene({ position = [0, 0, 0] }) {
  const agentNodesGroup = useRef();
  const handLandmarksRef = useRef();

  // Connected AI Agent Graph Node positions
  const agentNodes = useMemo(() => {
    return [
      { pos: new THREE.Vector3(-1.8, 1.2, 0), label: "Planner", color: "#00f0ff" },
      { pos: new THREE.Vector3(0, 1.8, 0), label: "Coder", color: "#ffb700" },
      { pos: new THREE.Vector3(1.8, 1.2, 0), label: "Reviewer", color: "#00f0ff" },
      { pos: new THREE.Vector3(-0.9, -0.6, 0), label: "Context Bridge", color: "#ff2e55" },
      { pos: new THREE.Vector3(0.9, -0.6, 0), label: "Grok API", color: "#3b82f6" },
    ];
  }, []);

  // Hand gesture tracking landmark points
  const handPoints = useMemo(() => {
    const pts = [
      [0, -1, 0], [0.3, -0.4, 0], [0.6, 0.2, 0], [0.8, 0.7, 0], // Thumb
      [0.2, 0.8, 0], [0.35, 1.4, 0], [0.4, 1.9, 0],             // Index
      [-0.2, 0.8, 0], [-0.25, 1.5, 0], [-0.3, 2.1, 0],           // Middle
      [-0.6, 0.6, 0], [-0.75, 1.3, 0], [-0.8, 1.8, 0],           // Ring
    ];
    return pts.map((p) => new THREE.Vector3(...p));
  }, []);

  useFrame((state, delta) => {
    if (agentNodesGroup.current) {
      agentNodesGroup.current.rotation.y += delta * 0.2;
    }
    if (handLandmarksRef.current) {
      handLandmarksRef.current.rotation.y = Math.sin(state.clock.getElapsedTime()) * 0.3;
    }
  });

  return (
    <group position={position}>
      {/* 6a. Hand Gesture Landmark Rig */}
      <group position={[-5, 0, 0]} ref={handLandmarksRef}>
        <mesh>
          <planeGeometry args={[3.2, 4.0]} />
          <meshBasicMaterial color="#0b101b" transparent opacity={0.8} />
        </mesh>
        {handPoints.map((pt, idx) => (
          <mesh key={idx} position={pt}>
            <sphereGeometry args={[0.08, 12, 12]} />
            <meshBasicMaterial color={idx % 3 === 0 ? "#ffb700" : "#00f0ff"} />
          </mesh>
        ))}
      </group>

      {/* 6b. C++ Systems Terminal Box */}
      <group position={[-1.8, -0.2, 0]}>
        <mesh>
          <boxGeometry args={[3.4, 2.4, 0.1]} />
          <meshStandardMaterial color="#070a0f" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Terminal Header Bar */}
        <mesh position={[0, 1.0, 0.06]}>
          <planeGeometry args={[3.3, 0.3]} />
          <meshBasicMaterial color="#1e293b" />
        </mesh>
        {/* Code Line Simulation */}
        {[-0.4, -0.1, 0.2, 0.5].map((y, i) => (
          <mesh key={i} position={[-0.4 + (i % 2) * 0.3, y, 0.06]}>
            <planeGeometry args={[1.6 - i * 0.2, 0.08]} />
            <meshBasicMaterial color="#00f0ff" transparent opacity={0.7} />
          </mesh>
        ))}
      </group>

      {/* 6c. AI Multi-Agent Network Graph */}
      <group position={[1.8, 0, 0]} ref={agentNodesGroup}>
        {agentNodes.map((node, idx) => (
          <group key={idx} position={node.pos}>
            <mesh>
              <sphereGeometry args={[0.25, 16, 16]} />
              <meshBasicMaterial color={node.color} />
            </mesh>
            <mesh>
              <torusGeometry args={[0.38, 0.02, 16, 32]} />
              <meshBasicMaterial color={node.color} transparent opacity={0.6} />
            </mesh>
          </group>
        ))}
      </group>

      {/* 6d. Embedded Systems FPGA Chip Model */}
      <group position={[5.2, 0, 0]}>
        {/* Chip Body */}
        <mesh>
          <boxGeometry args={[2.5, 2.5, 0.3]} />
          <meshStandardMaterial color="#0f172a" roughness={0.1} metalness={0.95} />
        </mesh>
        {/* Metallic Pins around chip */}
        {[-1.2, 1.2].map((x) =>
          [-1.0, -0.5, 0, 0.5, 1.0].map((y, i) => (
            <mesh key={`${x}-${i}`} position={[x, y, 0]}>
              <boxGeometry args={[0.4, 0.08, 0.08]} />
              <meshStandardMaterial color="#94a3b8" metalness={1.0} />
            </mesh>
          ))
        )}
      </group>
    </group>
  );
}
