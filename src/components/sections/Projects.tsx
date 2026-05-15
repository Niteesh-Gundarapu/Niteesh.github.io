"use client";
import React from "react";
import { motion } from "framer-motion";
import { DATA } from "@/constants/data";

export const Projects = () => {
  return (
    <section id="works" style={{ padding: "150px 5%" }}>
      <div style={{ marginBottom: 80 }}>
        <h2 style={{ fontSize: "clamp(2rem, 8vw, 5rem)", marginBottom: 10 }}>PROJECTS</h2>
        <div style={{ width: 100, height: 4, background: "var(--accent)" }} />
      </div>

      <div className="dim-container project-list">
        {DATA.projects.map((project, i) => (
          <motion.div
            key={i}
            className="dim-item project-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{
              padding: "60px 0",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer"
            }}
          >
            <div style={{ display: "flex", gap: 30, alignItems: "flex-start" }}>
              <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--accent)", marginTop: 10 }}>
                _{String(i + 1).padStart(2, "0")}.
              </span>
              <div>
                <h3 style={{ fontSize: "clamp(1.5rem, 5vw, 3.5rem)", marginBottom: 10 }}>{project.title.toUpperCase()}</h3>
                <div style={{ display: "flex", gap: 15, flexWrap: "wrap" }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{ fontSize: "14px", opacity: 0.5 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div style={{ 
              width: 50, 
              height: 50, 
              borderRadius: "50%", 
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px"
            }}>
              ↗
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
