"use client";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function MatlabLabScene({ position = [0, 0, 0] }) {
  const waveformRef = useRef();

  // Waveform plot points
  const waveformPositions = useMemo(() => {
    const count = 80;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (i / count) * 3 - 1.5;
      const y = Math.sin(i * 0.4) * 0.4 + (Math.random() - 0.5) * 0.1;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = 0;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (waveformRef.current) {
      const pos = waveformRef.current.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = Math.sin(x * 4 + time * 5) * 0.4 + Math.sin(x * 12 + time * 10) * 0.1;
        pos.setY(i, y);
      }
      pos.needsUpdate = true;
    }
  });

  return (
    <group position={position}>
      {/* Dark Engineering Desk Base */}
      <mesh position={[0, -2, 0]}>
        <boxGeometry args={[8, 0.3, 4]} />
        <meshStandardMaterial color="#0f172a" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* Main Curved Workstation Monitor Frame */}
      <group position={[0, 0, -0.5]}>
        {/* Monitor Bezel */}
        <mesh>
          <boxGeometry args={[5.2, 3.2, 0.15]} />
          <meshStandardMaterial color="#1e293b" roughness={0.2} metalness={0.9} />
        </mesh>

        {/* Glowing Display Screen */}
        <mesh position={[0, 0, 0.08]}>
          <planeGeometry args={[5.0, 3.0]} />
          <meshBasicMaterial color="#0a1322" />
        </mesh>

        {/* Screen Content: Simulink Block Diagram Nodes */}
        {[[-1.5, 0.6], [0, 0.6], [1.5, 0.6], [-0.8, -0.6], [1.0, -0.6]].map(([x, y], idx) => (
          <group key={idx} position={[x, y, 0.1]}>
            <mesh>
              <planeGeometry args={[0.9, 0.5]} />
              <meshBasicMaterial color={idx % 2 === 0 ? "#00f0ff" : "#ffb700"} transparent opacity={0.3} />
            </mesh>
            <mesh>
              <ringGeometry args={[0.2, 0.22, 16]} />
              <meshBasicMaterial color="#00f0ff" />
            </mesh>
          </group>
        ))}

        {/* Connection Wires between Simulink blocks */}
        <lineSegments position={[0, 0, 0.11]}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[
                new Float32Array([
                  -1.05, 0.6, 0,  -0.45, 0.6, 0,
                  0.45, 0.6, 0,   1.05, 0.6, 0,
                  -0.8, 0.35, 0,  -0.8, -0.35, 0,
                  -0.35, -0.6, 0, 0.55, -0.6, 0
                ]),
                3
              ]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#00f0ff" transparent opacity={0.8} />
        </lineSegments>

        {/* Animated Oscilloscope Waveform Line */}
        <group position={[0, -0.2, 0.12]}>
          <line ref={waveformRef}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[waveformPositions, 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#00f0ff" linewidth={2} />
          </line>
        </group>
      </group>

      {/* Monitor Stand Base */}
      <mesh position={[0, -1.3, -0.4]}>
        <cylinderGeometry args={[0.3, 0.5, 1.2, 16]} />
        <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}
