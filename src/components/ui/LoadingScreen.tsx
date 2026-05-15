"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#d84e2c",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Josefin Sans', sans-serif"
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: "5rem", color: "white", fontWeight: 700, letterSpacing: 10 }}
      >
        H! THERE 
        I'M NITEESH
      </motion.h1>
      
      {/* Percentage in background */}
      <div style={{
        position: "absolute",
        bottom: 50,
        right: 50,
        fontSize: "10rem",
        fontWeight: 900,
        opacity: 0.1,
        color: "white"
      }}>
        {progress}%
      </div>
    </motion.div>
  );
};
