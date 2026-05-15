"use client";
import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Grid = () => {
  const meshRef = useRef<THREE.Points>(null!);
  
  const count = 50;
  const [positions, step] = useMemo(() => {
    const positions = new Float32Array(count * count * 3);
    const step = 0.5;
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const x = (i - count / 2) * step;
        const y = (j - count / 2) * step;
        const z = 0;
        positions.set([x, y, z], (i * count + j) * 3);
      }
    }
    return [positions, step];
  }, []);

  useFrame((state) => {
    const { mouse } = state;
    const time = state.clock.getElapsedTime();
    
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const index = (i * count + j) * 3;
        const x = positions[index];
        const y = positions[index + 1];
        
        // Calculate distance from mouse
        const dx = x - mouse.x * 10;
        const dy = y - mouse.y * 10;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Wave + Mouse distortion
        const z = Math.sin(dist * 0.5 - time * 2) * 0.2 + (dist < 2 ? (2 - dist) * 0.5 : 0);
        
        meshRef.current.geometry.attributes.position.setZ(i * count + j, z);
      }
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ccff00" transparent opacity={0.3} />
    </points>
  );
};

export const BackgroundGrid = () => {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Grid />
      </Canvas>
    </div>
  );
};
