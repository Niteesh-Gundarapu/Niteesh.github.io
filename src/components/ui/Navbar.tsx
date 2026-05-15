"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DATA } from "@/constants/data";
import { WeatherHeader } from "@/components/ui/WeatherHeader";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 80,
        padding: "0 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 1000,
        pointerEvents: "none"
      }}>
        <div style={{ pointerEvents: "auto" }}>
          <span style={{ fontWeight: 700, fontSize: "1.2rem", letterSpacing: 4 }}>{DATA.name.split(" ")[0].toUpperCase()}</span>
        </div>

        <div style={{ pointerEvents: "auto" }}>
          <WeatherHeader />
        </div>

        <button 
          onClick={() => setIsOpen(true)}
          style={{
            pointerEvents: "auto",
            background: "transparent",
            border: "none",
            display: "flex",
            flexDirection: "column",
            gap: 6,
            cursor: "pointer",
            padding: 10
          }}
        >
          <div style={{ width: 30, height: 2, background: "white" }} />
          <div style={{ width: 20, height: 2, background: "white", alignSelf: "flex-end" }} />
        </button>
      </nav>

      {/* Side Rotated Email */}
      <div style={{
        position: "fixed",
        bottom: 100,
        left: "2%",
        transform: "rotate(-90deg) translateX(-50%)",
        transformOrigin: "left center",
        fontSize: "12px",
        letterSpacing: 2,
        opacity: 0.5,
        zIndex: 900
      }}>
        {DATA.email.toUpperCase()}
      </div>

      {/* Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: 500,
              background: "var(--accent)",
              zIndex: 1100,
              padding: "100px 10% 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: 30,
                right: "5%",
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "2rem",
                cursor: "pointer"
              }}
            >
              ✕
            </button>

            <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
              {["Home", "Works", "Stack", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    fontSize: "4rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    color: "white",
                    lineHeight: 1
                  }}
                >
                  {item.toUpperCase()}
                </motion.a>
              ))}
            </div>

            <div style={{ display: "flex", gap: 20, opacity: 0.8 }}>
              <a href={DATA.linkedin} style={{ color: "white", textDecoration: "none" }}>LINKEDIN</a>
              <a href={DATA.github} style={{ color: "white", textDecoration: "none" }}>GITHUB</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
