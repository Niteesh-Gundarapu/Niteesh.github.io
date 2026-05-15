"use client";
import React from "react";
import { motion } from "framer-motion";
import { X, Minus, Square } from "lucide-react";

interface HUDWindowProps {
  title: string;
  children: React.ReactNode;
  width?: string | number;
  height?: string | number;
}

export const HUDWindow = ({ title, children, width = "100%", height = "auto" }: HUDWindowProps) => {
  const constraintsRef = React.useRef(null);

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="hud-box"
      style={{
        width,
        height,
        marginBottom: 40,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        borderRadius: "4px 4px 0 0",
        zIndex: 10
      }}
    >
      <div className="corners" />
      
      {/* Title Bar */}
      <div style={{
        height: 32,
        background: "rgba(204, 255, 0, 0.1)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 12px",
        fontSize: "10px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "1px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f56" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ffbd2e" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#27c93f" }} />
          </div>
          <span>{title}</span>
        </div>
        <div style={{ opacity: 0.5 }}>ACCESS_LEVEL: 04</div>
      </div>

      {/* Content */}
      <div style={{ padding: 24, flex: 1, position: "relative" }}>
        {children}
      </div>
    </motion.div>
  );
};
