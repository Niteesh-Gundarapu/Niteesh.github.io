"use client";
import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
}

export const ProjectCard = ({ title, description, tech }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      style={{
        position: "relative",
        background: "rgba(10,10,10,0.8)",
        border: "1px solid var(--border)",
        overflow: "hidden",
        cursor: "pointer"
      }}
    >
      {/* Grid Overlay / Image Placeholder */}
      <div style={{ height: 200, position: "relative", background: "#111", overflow: "hidden" }}>
        {/* Animated Grid Lines */}
        <div style={{ 
          position: "absolute", 
          inset: 0, 
          backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.2
        }} />
        
        {/* Placeholder "Image" that transitions */}
        <motion.div
          variants={{
            initial: { scale: 1, filter: "grayscale(100%) brightness(0.5)" },
            hover: { scale: 1.1, filter: "grayscale(0%) brightness(1)" }
          }}
          transition={{ duration: 0.4 }}
          style={{ 
            height: "100%", 
            width: "100%", 
            background: "linear-gradient(45deg, #1a1a1a, #0a0a0a)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <span style={{ fontSize: "10px", opacity: 0.3, letterSpacing: 4 }}>ENCRYPTED_MEDIA_DATA</span>
        </motion.div>

        {/* Hover Highlight */}
        <motion.div
          variants={{
            initial: { x: "-100%" },
            hover: { x: "100%" }
          }}
          transition={{ duration: 0.6 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, transparent, rgba(204, 255, 0, 0.1), transparent)",
            zIndex: 2
          }}
        />
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <h3 style={{ fontSize: "14px", color: "var(--primary)", fontWeight: 800 }}>{title.toUpperCase()}</h3>
          <span style={{ fontSize: "9px", padding: "2px 6px", background: "var(--primary)", color: "black", fontWeight: 900 }}>MISSION_COMPLETE</span>
        </div>
        
        <p style={{ fontSize: "12px", opacity: 0.6, lineHeight: 1.6, marginBottom: 16 }}>
          {description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {tech.map((t) => (
            <span key={t} style={{ fontSize: "9px", padding: "2px 6px", border: "1px solid var(--border)", opacity: 0.8 }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
