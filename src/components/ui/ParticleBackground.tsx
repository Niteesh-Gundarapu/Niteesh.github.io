"use client";
import React, { useEffect, useState, useRef } from "react";

export const ParticleBackground = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; opacity: number }[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const newStars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2
    }));
    setStars(newStars);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div id="particles-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            transform: `translate(${mousePos.x * (star.size / 2)}px, ${mousePos.y * (star.size / 2)}px)`,
            transition: "transform 0.1s ease-out"
          }}
        />
      ))}
    </div>
  );
};
