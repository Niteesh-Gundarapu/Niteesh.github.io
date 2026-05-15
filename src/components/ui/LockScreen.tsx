"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Terminal, Lock, Cpu, Search, Mail, Link as LinkIcon, Command } from "lucide-react";
import { DATA } from "@/constants/data";

export const LockScreen = ({ onEnter }: { onEnter: () => void }) => {
  const [bootStatus, setBootStatus] = useState("SYSTEM_LOCKED");
  const [isDecrypting, setIsDecrypting] = useState(false);

  const handleEnter = () => {
    setIsDecrypting(true);
    setBootStatus("DECRYPTING_BIO_HASH...");
    setTimeout(() => {
      setBootStatus("AUTHORIZATION_GRANTED");
      setTimeout(onEnter, 1000);
    }, 1500);
  };

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)"
      }}
    >
      <div className="scanlines" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hud-box"
        style={{
          width: 450,
          padding: 40,
          textAlign: "center",
          background: "rgba(0,0,0,0.8)"
        }}
      >
        <div className="corners" />
        <div style={{ marginBottom: 32 }}>
          <motion.div
            animate={isDecrypting ? { rotate: 360 } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ display: "inline-block", color: "var(--primary)" }}
          >
            {isDecrypting ? <Cpu size={48} /> : <Lock size={48} />}
          </motion.div>
        </div>

        <h2 style={{ fontSize: "14px", letterSpacing: "4px", marginBottom: 8, color: "var(--primary)" }}>
          {bootStatus}
        </h2>
        <div style={{ fontSize: "10px", opacity: 0.5, marginBottom: 40 }}>
          INTEL_SYS_NODE: {DATA.name.split(" ")[0].toUpperCase()}_WS_01
        </div>

        {!isDecrypting ? (
          <motion.button
            whileHover={{ scale: 1.05, background: "var(--primary)", color: "black" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEnter}
            style={{
              width: "100%",
              padding: "16px",
              background: "transparent",
              border: "1px solid var(--primary)",
              color: "var(--primary)",
              fontWeight: 800,
              fontSize: "12px",
              letterSpacing: "2px",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            ENTER SYSTEM
          </motion.button>
        ) : (
          <div style={{ width: "100%", height: 2, background: "rgba(204, 255, 0, 0.1)", position: "relative" }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
              style={{ height: "100%", background: "var(--primary)", boxShadow: "0 0 15px var(--primary)" }}
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};
