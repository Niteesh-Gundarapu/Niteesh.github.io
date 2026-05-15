"use client";
import React from "react";
import { motion } from "framer-motion";

const tech = [
  "React", "Next.js", "TypeScript", "Node.js", "FastAPI", "Python", 
  "PostgreSQL", "AWS", "Docker", "GitHub Actions", "OpenAI", "Tailwind"
];

export const TechMarquee = () => {
  return (
    <div style={{ 
      width: "100%", 
      overflow: "hidden", 
      background: "rgba(168, 85, 247, 0.05)", 
      padding: "20px 0",
      borderTop: "1px solid var(--glass-border)",
      borderBottom: "1px solid var(--glass-border)"
    }}>
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 60, whiteSpace: "nowrap", width: "fit-content" }}
      >
        {[...tech, ...tech, ...tech].map((item, i) => (
          <span 
            key={i} 
            style={{ 
              fontSize: "1.2rem", 
              fontWeight: 800, 
              opacity: 0.3, 
              letterSpacing: 2,
              textTransform: "uppercase"
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
