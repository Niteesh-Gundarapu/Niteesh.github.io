"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DATA } from "@/constants/data";
import { Typewriter } from "@/components/ui/Typewriter";

export const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 5%",
      position: "relative",
      overflow: "hidden"
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <div style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 40, height: 1, background: "var(--accent)" }} />
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: 4, color: "var(--accent)" }}>
            CURRENT_STATUS: ACTIVE
          </span>
        </div>

        <Typewriter />

        <div style={{ marginTop: 20 }}>
          <h1 style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            lineHeight: 1.1,
            letterSpacing: -1,
            margin: 0,
            fontWeight: 900,
            textTransform: "uppercase"
          }}>
            <span style={{
              background: "linear-gradient(to bottom, #fff 50%, rgba(255,255,255,0.1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Fullstack
            </span> <br />
            <span style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.3)",
              fontStyle: "italic",
              letterSpacing: 4
            }}>
              Developer
            </span>
          </h1>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginTop: 40,
          flexWrap: "wrap",
          gap: 40
        }}>
          <p style={{ maxWidth: 500, fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.6, letterSpacing: 0.5 }}>
            {DATA.summary}
          </p>

          <div style={{ display: "flex", gap: 20 }}>
            <motion.a
              href="#works"
              whileHover={{ scale: 1.05, background: "white", color: "black" }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "18px 36px",
                border: "1px solid white",
                color: "white",
                textDecoration: "none",
                fontWeight: 700,
                borderRadius: "4px",
                fontSize: "0.9rem",
                letterSpacing: 2,
                transition: "all 0.3s ease"
              }}
            >
              PROJECT_LOGS
            </motion.a>
            <motion.a
              href="#stack"
              style={{
                padding: "18px 36px",
                background: "var(--accent)",
                color: "white",
                textDecoration: "none",
                fontWeight: 700,
                borderRadius: "4px",
                fontSize: "0.9rem",
                letterSpacing: 2
              }}
            >
              TECH_STACK
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
