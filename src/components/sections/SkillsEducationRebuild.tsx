"use client";
import React from "react";
import { motion } from "framer-motion";
import { DATA } from "@/constants/data";
import { HUDWindow } from "@/components/ui/HUDWindow";
import { TerminalReveal } from "@/components/ui/TerminalReveal";

export const SkillsEducationRebuild = () => {
  return (
    <section style={{ marginTop: 60, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
      <HUDWindow title="SKILL_MATRIX // CAPABILITIES">
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {DATA.skills.map((group, i) => (
            <div key={i}>
              <div style={{ fontSize: "11px", fontWeight: 800, color: "var(--primary)", marginBottom: 12, opacity: 0.6, letterSpacing: 2 }}>
                {group.category.toUpperCase()}
              </div>
              <TerminalReveal items={group.items} />
            </div>
          ))}
        </div>
      </HUDWindow>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <HUDWindow title="ACADEMIC_RECORDS">
          {DATA.education.map((edu, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--border)", paddingBottom: 16, marginBottom: 16 }}>
              <h3 style={{ fontSize: "14px", color: "var(--primary)" }}>{edu.degree.toUpperCase()}</h3>
              <div style={{ fontSize: "12px", opacity: 0.7 }}>{edu.institution.toUpperCase()}</div>
              <div style={{ fontSize: "11px", opacity: 0.5, marginTop: 4 }}>{edu.period} | CGPA: {edu.details.split("|")[1]}</div>
            </div>
          ))}
        </HUDWindow>

        <HUDWindow title="CERTIFICATION_FLAGS">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {DATA.certifications.map((cert, i) => (
              <div key={i} style={{ 
                fontSize: "10px", 
                padding: "6px 12px", 
                background: "var(--secondary)", 
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: 8
              }}>
                <div style={{ width: 6, height: 6, background: "var(--primary)" }} />
                {cert.toUpperCase()}
              </div>
            ))}
          </div>
        </HUDWindow>
      </div>
    </section>
  );
};
