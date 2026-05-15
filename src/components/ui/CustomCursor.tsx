"use client";
import React, { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const mouseX = useSpring(0, { stiffness: 400, damping: 40 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 40 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      id="cursor-follower"
      style={{
        x: mouseX,
        y: mouseY,
      }}
    >
      <div id="cursor-dot" />
    </motion.div>
  );
};
