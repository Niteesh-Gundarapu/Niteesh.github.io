"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Snowflake } from "lucide-react";

export const WeatherWidget = () => {
  const [type, setType] = useState<"sunny" | "rainy" | "winter" | "hot">("sunny");

  useEffect(() => {
    const handleUpdate = (e: any) => setType(e.detail);
    window.addEventListener("weatherUpdate", handleUpdate);
    return () => window.removeEventListener("weatherUpdate", handleUpdate);
  }, []);

  return (
    <div style={{ position: "fixed", top: 100, right: "5%", zIndex: 1000, pointerEvents: "none" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={type}
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0, opacity: 0, rotate: 180 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{ position: "relative", width: 80, height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {/* Main Visual */}
          <div style={{ position: "relative" }}>
            {type === "hot" || type === "sunny" ? (
              <>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: "absolute",
                    inset: -20,
                    background: "radial-gradient(circle, orange 0%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(10px)"
                  }}
                />
                <Sun size={48} color="orange" strokeWidth={3} />
              </>
            ) : (
              <>
                <motion.div
                  animate={{ y: [0, 5, 0], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    position: "absolute",
                    inset: -20,
                    background: "radial-gradient(circle, cyan 0%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(10px)"
                  }}
                />
                <Snowflake size={48} color="#00f2ff" strokeWidth={2} />
              </>
            )}
          </div>

          {/* Decorative Particles for the widget */}
          {type === "hot" && (
            <motion.div
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ position: "absolute", top: -10, right: -10, color: "orange", fontSize: "10px" }}
            >
              🔥
            </motion.div>
          )}
          {type === "winter" && (
            <motion.div
              animate={{ y: [0, 20], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ position: "absolute", bottom: -10, left: 20, color: "white", fontSize: "12px" }}
            >
              ❄️
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
