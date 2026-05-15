"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Capsule, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const InteractiveAvatar = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    // Calculate rotation based on mouse position
    const x = (state.mouse.x * Math.PI) / 8;
    const y = (state.mouse.y * Math.PI) / 8;
    
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x, 0.1);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y, 0.1);
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Head */}
        <mesh position={[0, 0.8, 0]}>
          <Sphere args={[0.6, 64, 64]}>
            <MeshDistortMaterial
              color="#a855f7"
              distort={0.3}
              speed={2}
              roughness={0.1}
              metalness={0.8}
            />
          </Sphere>
          
          {/* Eyes */}
          <mesh position={[0.2, 0.1, 0.5]}>
            <Sphere args={[0.08, 32, 32]}>
              <meshStandardMaterial color="white" emissive="#ffffff" emissiveIntensity={0.5} />
            </Sphere>
          </mesh>
          <mesh position={[-0.2, 0.1, 0.5]}>
            <Sphere args={[0.08, 32, 32]}>
              <meshStandardMaterial color="white" emissive="#ffffff" emissiveIntensity={0.5} />
            </Sphere>
          </mesh>
        </mesh>

        {/* Body */}
        <mesh position={[0, -0.5, 0]}>
          <Capsule args={[0.5, 1.2, 4, 32]}>
            <meshStandardMaterial 
              color="#3b82f6" 
              roughness={0.2} 
              metalness={0.5}
              transparent
              opacity={0.8}
            />
          </Capsule>
        </mesh>
      </Float>
      
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#a855f7" />
      <pointLight position={[-10, -10, 10]} intensity={1} color="#3b82f6" />
      <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
    </group>
  );
};

export const AvatarCanvas = () => {
  return (
    <div style={{ width: "100%", height: "100%", cursor: "none" }}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <InteractiveAvatar />
      </Canvas>
    </div>
  );
};
