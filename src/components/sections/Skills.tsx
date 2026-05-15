"use client";
import React from "react";
import { motion } from "framer-motion";
import { DATA } from "@/constants/data";

const getIconUrl = (skill: string) => {
  const name = skill.toLowerCase()
    .replace(/\s+/g, '')
    .replace(/\.js/g, 'dotjs')
    .replace(/\+/g, 'plus')
    .replace(/aws/g, 'amazonaws')
    .replace(/postgresql/g, 'postgresql');
    
  // Some manual overrides
  if (name === "react19plus") return "https://cdn.simpleicons.org/react";
  if (name === "javascript(es6plus)") return "https://cdn.simpleicons.org/javascript";
  if (name === "next.js(approuter)") return "https://cdn.simpleicons.org/nextdotjs/white";
  if (name === "sql") return "https://cdn.simpleicons.org/postgresql";

  return `https://cdn.simpleicons.org/${name}`;
};

export const Skills = () => {
  return (
    <section id="stack">
      <div style={{ marginBottom: 100 }}>
        <h2 style={{ fontSize: "clamp(2rem, 10vw, 6rem)", lineHeight: 1, letterSpacing: -2 }}>
          MY <span className="text-accent">STACK</span>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 120 }}>
        {DATA.skills.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 2fr", 
              gap: 40,
              alignItems: "start" 
            }}
          >
            {/* Category Name (Left) */}
            <div>
              <h3 className="font-anton" style={{ 
                fontSize: "clamp(2rem, 5vw, 4rem)", 
                opacity: 0.15,
                lineHeight: 1,
                letterSpacing: 2
              }}>
                {group.category.toUpperCase()}
              </h3>
            </div>

            {/* Skill Cards (Right) */}
            <div className="dim-container skills-grid">
              {group.items.map((skill) => (
                <div 
                  key={skill}
                  className="dim-item"
                  style={{
                    padding: "30px 20px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "16px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 15,
                    transition: "all 0.3s ease"
                  }}
                >
                  <div style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img 
                      src={getIconUrl(skill)} 
                      alt={skill}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      onError={(e) => {
                        // Fallback to text icon if image fails
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.innerHTML = `<div style="font-weight:900; color:var(--accent)">${skill[0]}</div>`;
                      }}
                    />
                  </div>
                  <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: 1, opacity: 0.7 }}>
                    {skill.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
