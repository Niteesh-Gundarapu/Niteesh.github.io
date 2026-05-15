"use client";
import React from "react";
import { motion } from "framer-motion";
import { DATA } from "@/constants/data";

export const Experience = () => {
  return (
    <section id="experience" style={{ padding: "100px 5%" }}>
      <div style={{ marginBottom: 60 }}>
        <h2 style={{ fontSize: "clamp(2rem, 8vw, 5rem)", marginBottom: 10 }}>EXPERIENCE</h2>
        <div style={{ width: 100, height: 4, background: "var(--accent)" }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {DATA.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{
              padding: "40px 0",
              borderLeft: "2px solid rgba(255,255,255,0.1)",
              paddingLeft: 40,
              position: "relative"
            }}
          >
            {/* Timeline Dot */}
            <div style={{
              position: "absolute",
              left: -7,
              top: 45,
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "var(--accent)"
            }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 20 }}>
              <div>
                <h3 style={{ fontSize: "1.8rem", color: "white" }}>{exp.company}</h3>
                <div style={{ color: "var(--accent)", fontWeight: 600, fontSize: "1.1rem" }}>{exp.role}</div>
              </div>
              <div style={{ opacity: 0.5, fontWeight: 500 }}>{exp.period}</div>
            </div>

            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              {exp.highlights.map((h, j) => (
                <div key={j} style={{ display: "flex", gap: 15, opacity: 0.7, lineHeight: 1.6 }}>
                  <span style={{ color: "var(--accent)" }}>•</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
