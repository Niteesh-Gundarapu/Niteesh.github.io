"use client";
import React from "react";
import { motion } from "framer-motion";
import { DATA } from "@/constants/data";
import { HUDWindow } from "@/components/ui/HUDWindow";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FileCode, Globe, Shield } from "lucide-react";

export const ProjectsRebuild = () => {
  return (
    <section id="work" style={{ marginTop: 60 }}>
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "1.5rem", color: "var(--primary)" }}>[ MISSION_REPORTS ]</h2>
        <p style={{ opacity: 0.5, fontSize: "12px" }}>Archived records of successful platform deployments and architectural executions.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 20 }}>
        {DATA.projects.map((project, i) => (
          <ProjectCard 
            key={i}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
};
