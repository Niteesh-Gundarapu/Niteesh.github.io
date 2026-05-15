"use client";
import React from "react";
import { motion } from "framer-motion";
import { DATA } from "@/constants/data";

export const Contact = () => {
  return (
    <footer id="contact" style={{ padding: "150px 5% 50px", textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <p style={{ fontSize: "1.2rem", letterSpacing: 4, opacity: 0.5, marginBottom: 20 }}>GET IN TOUCH</p>
        
        <a 
          href={`mailto:${DATA.email}`}
          className="font-anton"
          style={{
            fontSize: "clamp(2rem, 12vw, 8rem)",
            color: "white",
            textDecoration: "none",
            display: "block",
            lineHeight: 1,
            transition: "color 0.3s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
        >
          {DATA.email.toUpperCase()}
        </a>

        <div style={{ 
          marginTop: 100, 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: 40,
          opacity: 0.5,
          fontSize: "14px"
        }}>
          <div>© 2026 {DATA.name.toUpperCase()}</div>
          <div style={{ display: "flex", gap: 30 }}>
            <a href={DATA.linkedin} style={{ color: "white", textDecoration: "none" }}>LINKEDIN</a>
            <a href={DATA.github} style={{ color: "white", textDecoration: "none" }}>GITHUB</a>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: "transparent",
              border: "1px solid white",
              color: "white",
              padding: "10px 20px",
              borderRadius: "30px",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: 700
            }}
          >
            BACK TO TOP ↑
          </button>
        </div>
      </motion.div>
    </footer>
  );
};
