"use client";
import React, { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const SoundToggle = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggle = () => {
    const newState = !isMuted;
    setIsMuted(newState);
    window.dispatchEvent(new CustomEvent("soundToggle", { detail: newState }));
  };

  return (
    <button
      onClick={toggle}
      style={{
        position: "fixed",
        bottom: 30,
        right: 30,
        zIndex: 1000,
        background: isMuted ? "rgba(255,255,255,0.1)" : "var(--accent)",
        border: "none",
        width: 50,
        height: 50,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        cursor: "pointer",
        transition: "all 0.3s ease"
      }}
    >
      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
    </button>
  );
};
