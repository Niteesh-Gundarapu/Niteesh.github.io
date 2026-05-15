"use client";
import React from "react";
import { motion } from "framer-motion";
import { DATA } from "@/constants/data";
import { HUDWindow } from "@/components/ui/HUDWindow";

export const ExperienceRebuild = () => {
  return (
    <section id="experience" style={{ marginTop: 60 }}>
      <HUDWindow title="SERVICE_RECORD // CAREER_TIMELINE">
        <div style={{ position: "relative", paddingLeft: 40 }}>
          {/* Vertical Line */}
          <div style={{ 
            position: "absolute", 
            left: 0, 
            top: 0, 
            bottom: 0, 
            width: 1, 
            background: "repeating-linear-gradient(to bottom, var(--primary) 0, var(--primary) 5px, transparent 5px, transparent 10px)" 
          }} />

          {DATA.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ marginBottom: 40, position: "relative" }}
            >
              {/* Timeline Dot */}
              <div style={{ 
                position: "absolute", 
                left: -44, 
                top: 0, 
                width: 8, 
                height: 8, 
                background: "var(--primary)", 
                boxShadow: "0 0 10px var(--primary)" 
              }} />

              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <div>
                  <h3 style={{ color: "var(--primary)", fontSize: "1.2rem", fontWeight: 800 }}>{exp.company.toUpperCase()}</h3>
                  <div style={{ fontSize: "11px", fontWeight: 700, opacity: 0.6 }}>{exp.role.toUpperCase()}</div>
                </div>
                <div style={{ fontSize: "12px", opacity: 0.5, fontStyle: "italic" }}>[{exp.period}]</div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {exp.highlights.map((h, j) => (
                  <div key={j} style={{ display: "flex", gap: 12, fontSize: "13px", opacity: 0.8, lineHeight: 1.5 }}>
                    <span style={{ color: "var(--primary)" }}>{`>>`}</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </HUDWindow>
    </section>
  );
};
