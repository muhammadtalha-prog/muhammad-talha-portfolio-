"use client";
import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import CameraChoreographer from "./CameraChoreographer";
import HeroScene from "./scenes/HeroScene";
import IrstdRadarScene from "./scenes/IrstdRadarScene";
import MaritimeShipScene from "./scenes/MaritimeShipScene";
import MatlabLabScene from "./scenes/MatlabLabScene";
import BikeWorkshopScene from "./scenes/BikeWorkshopScene";
import ProjectsGalleryScene from "./scenes/ProjectsGalleryScene";
import TimelineCorridorScene from "./scenes/TimelineCorridorScene";

export default function MasterCanvas3D() {
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <div className="canvas-3d-container">
      <Canvas
        camera={{ position: [0, 22, 28], fov: 50, near: 0.1, far: 500 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        {/* Global Cinematic Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 20, 15]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ffb700" />

        {/* Global Atmosphere Fog */}
        <fog attach="fog" args={["#06090e", 15, 250]} />

        {/* Camera Choreography Controller */}
        <CameraChoreographer onScrollUpdate={setScrollProgress} />

        <Suspense fallback={null}>
          {/* Section 1: Hero Scene */}
          <HeroScene position={[0, 0, 0]} />

          {/* Section 2: IRSTD Defense Radar Scene */}
          <IrstdRadarScene position={[0, 0, 20]} scrollProgress={scrollProgress} />

          {/* Section 3: Maritime Ship Detection Scene */}
          <MaritimeShipScene position={[0, 0, 40]} />

          {/* Section 4: MATLAB/Simulink Lab Scene */}
          <MatlabLabScene position={[0, 0, 60]} />

          {/* Section 5: Electric Bicycle Workshop Scene */}
          <BikeWorkshopScene position={[0, 0, 80]} />

          {/* Section 6: Projects Gallery Scene */}
          <ProjectsGalleryScene position={[0, 0, 100]} />

          {/* Section 7: Experience Timeline Corridor Scene */}
          <TimelineCorridorScene position={[0, 0, 120]} />
        </Suspense>

        {/* Post-Processing Bloom & Vignette Effects */}
        <EffectComposer disableNormalPass>
          <Bloom
            luminanceThreshold={0.65}
            mipmapBlur
            intensity={1.2}
            radius={0.7}
          />
          <Vignette eskil={false} offset={0.2} darkness={0.8} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
