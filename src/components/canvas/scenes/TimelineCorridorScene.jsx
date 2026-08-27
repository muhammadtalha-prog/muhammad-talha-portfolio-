"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function TimelineCorridorScene({ position = [0, 0, 0] }) {
  const waypointsGroup = useRef();

  useFrame((state, delta) => {
    if (waypointsGroup.current) {
      waypointsGroup.current.children.forEach((child, i) => {
        child.rotation.z += delta * (0.3 + i * 0.1);
      });
    }
  });

  return (
    <group position={position}>
      {/* Timeline Waypoint Frames along Z corridor */}
      <group ref={waypointsGroup}>
        {[0, -6, -12].map((z, idx) => (
          <group key={idx} position={[0, 0, z]}>
            {/* Outer Hexagon Frame */}
            <mesh>
              <torusGeometry args={[3.2, 0.04, 16, 6]} />
              <meshBasicMaterial color={idx === 0 ? "#00f0ff" : idx === 1 ? "#ffb700" : "#ff2e55"} />
            </mesh>
            {/* Inner Ring */}
            <mesh>
              <torusGeometry args={[2.8, 0.02, 16, 32]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Connecting Laser Guide Lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array([
                -3.2, 0, 0,  -3.2, 0, -14,
                 3.2, 0, 0,   3.2, 0, -14,
                 0, 3.2, 0,   0, 3.2, -14,
                 0, -3.2, 0,  0, -3.2, -14
              ]),
              3
            ]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00f0ff" transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
}
