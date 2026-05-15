"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Fullstack Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "Software Engineer"
];

export const Typewriter = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[index];
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setSpeed(50);
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, speed]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "clamp(1rem, 3vw, 1.5rem)", fontWeight: 500, minHeight: "2em" }}>
      <span style={{ opacity: 0.6 }}>I AM NITEESH AS</span>
      <span style={{ 
        color: "var(--accent)", 
        fontWeight: 800, 
        textShadow: "0 0 20px rgba(216, 78, 44, 0.4)",
        borderRight: "3px solid var(--accent)",
        paddingRight: "4px",
        animation: "blink 1s infinite"
      }}>
        {displayText.toUpperCase()}
      </span>
      
      <style jsx>{`
        @keyframes blink {
          50% { border-color: transparent; }
        }
      `}</style>
    </div>
  );
};
