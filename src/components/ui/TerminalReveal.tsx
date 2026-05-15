"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const TerminalReveal = ({ items }: { items: string[] }) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < items.length) {
      const timer = setTimeout(() => {
        setVisibleCount(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, items.length]);

  return (
    <div style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: 1.8 }}>
      {items.slice(0, visibleCount).map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: "flex", gap: 12 }}
        >
          <span style={{ color: "var(--primary)" }}>[OK]</span>
          <span style={{ opacity: 0.8 }}>LOADED_MODULE:</span>
          <span style={{ fontWeight: 800, color: "var(--primary)" }}>{item.toUpperCase()}</span>
        </motion.div>
      ))}
      {visibleCount < items.length && (
        <div style={{ display: "flex", gap: 12 }}>
          <span style={{ color: "var(--primary)" }}>[..]</span>
          <span style={{ opacity: 0.5 }}>LOADING_MODULE...</span>
          <div className="cursor-blink" />
        </div>
      )}
    </div>
  );
};
