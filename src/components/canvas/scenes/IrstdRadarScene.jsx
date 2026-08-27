"use client";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function IrstdRadarScene({ position = [0, 0, 0], scrollProgress = 0 }) {
  const radarSweepRef = useRef();
  const missileRef = useRef();
  const explosionRef = useRef();
  const reticleRef = useRef();

  // Scroll mapping phases within section (progress 0 to 1):
  // 0.0 - 0.3: Console & reticle locking
  // 0.3 - 0.7: Missile launch & flight along trajectory
  // 0.7 - 1.0: Impact explosion & stats panel trigger

  const lockScale = Math.max(0.6, 2.5 - scrollProgress * 5); // Reticle tightens from scale 2.5 to 0.6
  const missileZ = -5 + Math.min(1, Math.max(0, (scrollProgress - 0.25) / 0.45)) * 14; // Missile flies from z = -5 to z = 9
  const isExploded = scrollProgress > 0.7;
  const explosionScale = isExploded ? (scrollProgress - 0.7) * 8 : 0;

  // Particle explosion geometry
  const explosionParticles = useMemo(() => {
    const count = 120;
    const positions = new Float32Array(count * 3);
    const velocities = [];
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.2;

      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        )
      );
    }
    return { positions, velocities };
  }, []);

  useFrame((state, delta) => {
    if (radarSweepRef.current) {
      radarSweepRef.current.rotation.z -= delta * 2;
    }
    if (reticleRef.current) {
      reticleRef.current.rotation.z += delta * 0.8;
    }
  });

  return (
    <group position={position}>
      {/* Dark Defense Console Platform */}
      <mesh position={[0, -2.5, 0]}>
        <cylinderGeometry args={[4.5, 5, 0.4, 32]} />
        <meshStandardMaterial color="#0c121e" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Glowing Circular Radar Grid Display */}
      <group position={[0, -2.28, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh>
          <ringGeometry args={[0.1, 4.2, 64]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.08} side={THREE.DoubleSide} />
        </mesh>
        
        {/* Concentric radar rings */}
        {[1, 2, 3, 4].map((r) => (
          <mesh key={r}>
            <ringGeometry args={[r - 0.02, r, 64]} />
            <meshBasicMaterial color="#00f0ff" transparent opacity={0.3} side={THREE.DoubleSide} />
          </mesh>
        ))}

        {/* Rotating Radar Sweep Line */}
        <group ref={radarSweepRef}>
          <mesh position={[0, 2, 0.01]}>
            <planeGeometry args={[0.04, 4]} />
            <meshBasicMaterial color="#00f0ff" transparent opacity={0.7} />
          </mesh>
        </group>
      </group>

      {/* Target Dot & Target Reticle */}
      <group position={[1.5, 0.5, 8.5]}>
        {/* Target Dot */}
        <mesh>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial color={isExploded ? "#ff2e55" : "#ffb700"} />
        </mesh>

        {/* Closing Target Lock Reticle Brackets */}
        {!isExploded && (
          <group ref={reticleRef} scale={[lockScale, lockScale, lockScale]}>
            {/* 4 bracket corners */}
            {[[-0.6, 0.6], [0.6, 0.6], [-0.6, -0.6], [0.6, -0.6]].map(([x, y], idx) => (
              <mesh key={idx} position={[x, y, 0]}>
                <boxGeometry args={[0.3, 0.04, 0.04]} />
                <meshBasicMaterial color="#ff2e55" />
              </mesh>
            ))}
          </group>
        )}

        {/* Explosion Burst on Impact */}
        {isExploded && (
          <group scale={[explosionScale, explosionScale, explosionScale]}>
            <mesh>
              <sphereGeometry args={[0.4, 16, 16]} />
              <meshBasicMaterial color="#ff2e55" transparent opacity={0.8} />
            </mesh>
            <points ref={explosionRef}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  args={[explosionParticles.positions, 3]}
                />
              </bufferGeometry>
              <pointsMaterial
                size={0.12}
                color="#ffb700"
                transparent
                opacity={0.9}
              />
            </points>
          </group>
        )}
      </group>

      {/* Missile Projectile & Glowing Trail */}
      {scrollProgress > 0.2 && scrollProgress <= 0.75 && (
        <group position={[1.5, 0.5, missileZ]}>
          {/* Missile Body */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.08, 0.12, 1.2, 16]} />
            <meshStandardMaterial color="#4a5568" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Missile Cone */}
          <mesh position={[0, 0, 0.7]} rotation={[-Math.PI / 2, 0, 0]}>
            <coneGeometry args={[0.08, 0.3, 16]} />
            <meshBasicMaterial color="#ff2e55" />
          </mesh>
          {/* Glowing Thruster Trail */}
          <mesh position={[0, 0, -0.8]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.15, 0.02, 1.5, 16]} />
            <meshBasicMaterial color="#00f0ff" transparent opacity={0.85} />
          </mesh>
        </group>
      )}
    </group>
  );
}
