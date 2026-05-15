"use client";
import React from "react";
import { motion } from "framer-motion";
import { DATA } from "@/constants/data";
import { Award, GraduationCap } from "lucide-react";

export const CertsEducation = () => {
  return (
    <section className="section-padding">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>
        <div>
          <h2 style={{ fontSize: "2rem", marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
            <Award color="var(--primary)" /> Certifications
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {DATA.certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass"
                style={{ padding: "16px 24px", borderRadius: 16, fontSize: "0.95rem", fontWeight: 500 }}
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: "2rem", marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
            <GraduationCap color="var(--primary)" /> Education
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {DATA.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass"
                style={{ padding: 24, borderRadius: 20 }}
              >
                <h3 style={{ fontSize: "1.1rem", marginBottom: 4 }}>{edu.degree}</h3>
                <p style={{ color: "var(--primary)", fontSize: "0.9rem", fontWeight: 600, marginBottom: 8 }}>{edu.institution}</p>
                <div style={{ display: "flex", justifyContent: "space-between", opacity: 0.6, fontSize: "0.85rem" }}>
                  <span>{edu.period}</span>
                  <span>{edu.details.split("|")[1]}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
