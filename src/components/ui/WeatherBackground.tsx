import React, { useMemo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type WeatherType = "sunny" | "rainy" | "winter" | "hot";

export const WeatherBackground = ({ type }: { type: WeatherType }) => {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const handleFlash = () => {
      setFlash(true);
      setTimeout(() => setFlash(false), 200);
    };
    window.addEventListener("thunderFlash", handleFlash);
    return () => window.removeEventListener("thunderFlash", handleFlash);
  }, []);

  const drops = useMemo(() => Array.from({ length: 150 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    duration: 0.5 + Math.random() * 0.5
  })), []);

  const flakes = useMemo(() => Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4
  })), []);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 10 }}>
      {/* Thunder Flash */}
      <AnimatePresence>
        {flash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, background: "white", zIndex: 100 }}
          />
        )}
      </AnimatePresence>

      {/* Rainy Effect */}
      {type === "rainy" && (
        <div className="rain-container">
          {drops.map((drop) => (
            <div 
              key={drop.id} 
              className="rain-drop" 
              style={{ left: drop.left, animationDelay: `${drop.delay}s`, animationDuration: `${drop.duration}s` }} 
            />
          ))}
        </div>
      )}

      {/* Winter / Snow Effect */}
      {type === "winter" && (
        <div className="snow-container">
          {flakes.map((flake) => (
            <div 
              key={flake.id} 
              className="snow-flake" 
              style={{ left: flake.left, animationDelay: `${flake.delay}s`, animationDuration: `${flake.duration}s` }} 
            />
          ))}
        </div>
      )}

      {/* Hot / Sunny Effect (Heat Waves) */}
      {(type === "hot" || type === "sunny") && (
        <div className="heat-container">
          <motion.div
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ 
              position: "absolute", 
              inset: 0, 
              background: "radial-gradient(circle at 50% 0%, rgba(255,100,0,0.1) 0%, transparent 70%)" 
            }}
          />
        </div>
      )}

      <style jsx>{`
        .rain-drop {
          position: absolute;
          width: 1px;
          height: 40px;
          background: linear-gradient(transparent, rgba(255,255,255,0.3));
          top: -100px;
          animation: rain linear infinite;
        }
        @keyframes rain {
          to { transform: translateY(110vh); }
        }

        .snow-flake {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          top: -10px;
          opacity: 0.5;
          animation: snow linear infinite;
        }
        @keyframes snow {
          to { transform: translateY(110vh) translateX(20px); }
        }

        .heat-container {
          filter: blur(40px);
        }
      `}</style>
    </div>
  );
};
