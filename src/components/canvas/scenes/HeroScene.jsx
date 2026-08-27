"use client";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function HeroScene({ position = [0, 0, 0] }) {
  const globeGroup = useRef();
  const particleGroup = useRef();
  const ringGroup = useRef();

  // Generate neural network nodes and connecting line segments
  const { nodePositions, lineGeometry } = useMemo(() => {
    const nodeCount = 70;
    const radius = 3.5;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      nodes.push(new THREE.Vector3(x, y, z));
    }

    const linePositions = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < 2.3) {
          linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z);
          linePositions.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));

    return {
      nodePositions: nodes,
      lineGeometry: geom,
    };
  }, []);

  // Ambient floating particles
  const particlePositions = useMemo(() => {
    const count = 300;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 30;
      pos[i + 1] = (Math.random() - 0.5) * 30;
      pos[i + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (globeGroup.current) {
      globeGroup.current.rotation.y += delta * 0.15;
      globeGroup.current.rotation.x += delta * 0.05;
    }
    if (ringGroup.current) {
      ringGroup.current.rotation.z -= delta * 0.2;
    }
    if (particleGroup.current) {
      particleGroup.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <group position={position}>
      {/* Central Neural Globe */}
      <group ref={globeGroup}>
        {/* Wireframe inner sphere */}
        <mesh>
          <icosahedronGeometry args={[3.2, 3]} />
          <meshBasicMaterial
            color="#00f0ff"
            wireframe
            transparent
            opacity={0.12}
          />
        </mesh>

        {/* Nodes */}
        {nodePositions.map((pos, idx) => (
          <mesh key={idx} position={pos}>
            <sphereGeometry args={[0.07, 8, 8]} />
            <meshBasicMaterial color={idx % 4 === 0 ? "#ffb700" : "#00f0ff"} />
          </mesh>
        ))}

        {/* Connecting Lines */}
        <lineSegments geometry={lineGeometry}>
          <lineBasicMaterial color="#00f0ff" transparent opacity={0.35} />
        </lineSegments>
      </group>

      {/* Floating HUD Orbital Rings */}
      <group ref={ringGroup}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[5.2, 0.015, 16, 100]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.4} />
        </mesh>
        <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
          <torusGeometry args={[6.5, 0.01, 16, 100]} />
          <meshBasicMaterial color="#ffb700" transparent opacity={0.25} />
        </mesh>
      </group>

      {/* Data Grid Floor */}
      <gridHelper
        args={[60, 60, "#00f0ff", "#0a1f33"]}
        position={[0, -6, 0]}
      />

      {/* Floating Particle Mist */}
      <points ref={particleGroup}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#00f0ff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </group>
  );
}
