"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DATA } from "@/constants/data";
import { HUDWindow } from "@/components/ui/HUDWindow";
import { AvatarCanvas } from "@/components/ui/Avatar";
import { Terminal } from "lucide-react";

export const HeroRebuild = () => {
  const [lines, setLines] = useState<string[]>([]);
  const bootSequence = [
    "> INITIALIZING SYSTEM_BOOT_v5.0...",
    "> DECRYPTING DOSSIER: NITEESH_GUNDARAPU",
    "> ACCESSING SECURE_DATABASE [OK]",
    "> CONNECTING TO INFOSYS_NODE [OK]",
    "> SCANNING SKILL_MATRIX...",
    "> TARGET_LOCATED: FULL_STACK_ENGINEER",
    "> LOADING INTERFACE..."
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 20, minHeight: "80vh", marginTop: 40 }}>
      {/* Profile Info Window */}
      <HUDWindow title="SUBJECT_PROFILE // CORE_DATA">
        <div style={{ fontSize: "14px", lineHeight: 2 }}>
          <div style={{ marginBottom: 20 }}>
            <span style={{ color: "var(--primary)", opacity: 0.5 }}>NAME:</span> {DATA.name.toUpperCase()}<br />
            <span style={{ color: "var(--primary)", opacity: 0.5 }}>DESIGNATION:</span> {DATA.role.toUpperCase()}<br />
            <span style={{ color: "var(--primary)", opacity: 0.5 }}>LOCATION:</span> {DATA.location.toUpperCase()}<br />
            <span style={{ color: "var(--primary)", opacity: 0.5 }}>STATUS:</span> <span style={{ color: "#27c93f" }}>ACTIVE_DUTY</span>
          </div>

          <div style={{ background: "rgba(204, 255, 0, 0.05)", padding: 20, borderLeft: "4px solid var(--primary)", marginBottom: 24 }}>
            <p style={{ opacity: 0.8, fontSize: "13px" }}>{DATA.summary}</p>
          </div>

          <div style={{ display: "flex", gap: 20 }}>
            <button style={{
              background: "var(--primary)",
              color: "black",
              border: "none",
              padding: "10px 20px",
              fontWeight: 800,
              fontSize: "12px",
              textTransform: "uppercase"
            }}>
              Execute_Hire.exe
            </button>
            <button style={{
              background: "transparent",
              color: "var(--primary)",
              border: "1px solid var(--primary)",
              padding: "10px 20px",
              fontWeight: 800,
              fontSize: "12px",
              textTransform: "uppercase"
            }}>
              Download_Intel.pdf
            </button>
          </div>
        </div>
      </HUDWindow>

      {/* Visual / Terminal Window */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <HUDWindow title="VISUAL_ID // RENDER_3D" height={400}>
          <div style={{ height: "100%", width: "100%", opacity: 0.8 }}>
            <AvatarCanvas />
          </div>
        </HUDWindow>

        <HUDWindow title="SYSTEM_LOG" height={200}>
          <div style={{ fontSize: "12px", color: "var(--primary)", opacity: 0.7, fontFamily: "var(--font-mono)" }}>
            {lines.map((line, i) => (
              <div key={i} style={{ marginBottom: 4 }}>{line}</div>
            ))}
            <div className="cursor-blink" />
          </div>
        </HUDWindow>
      </div>
    </div>
  );
};
