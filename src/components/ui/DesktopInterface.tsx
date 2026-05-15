"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
import { motion } from "framer-motion";
import { Wifi, Battery, Search, ShieldCheck, Terminal, Cpu, Layout, User, Mail, Link as LinkIcon, Command } from "lucide-react";

const WindowContext = createContext({
  zIndexMap: {} as Record<string, number>,
  bringToFront: (id: string) => {},
});

export const useWindow = () => useContext(WindowContext);

export const DesktopInterface = ({ children }: { children: React.ReactNode }) => {
  const [time, setTime] = useState("");
  const [zIndexMap, setZIndexMap] = useState<Record<string, number>>({});
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const bringToFront = (id: string) => {
    const maxZ = Math.max(0, ...Object.values(zIndexMap)) + 1;
    setZIndexMap(prev => ({ ...prev, [id]: maxZ }));
    setActiveWindow(id);
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const dockApps = [
    { id: "terminal", icon: <Terminal size={20} />, label: "Terminal" },
    { id: "monitor", icon: <Cpu size={20} />, label: "System Monitor" },
    { id: "projects", icon: <Layout size={20} />, label: "Mission Archives" },
    { id: "profile", icon: <User size={20} />, label: "Dossier" },
    { id: "search", icon: <Search size={20} />, label: "Search" },
    { id: "contact", icon: <Mail size={20} />, label: "Secure Channel" }
  ];

  return (
    <WindowContext.Provider value={{ zIndexMap, bringToFront }}>
      <div style={{ height: "100vh", display: "flex", flexDirection: "column", position: "relative", background: "#000" }}>
        {/* Top Menu Bar */}
        <motion.nav
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="glass"
          style={{
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
            borderBottom: "1px solid var(--border)",
            fontSize: "11px",
            fontWeight: 700,
            zIndex: 1000
          }}
        >
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <ShieldCheck size={14} color="var(--primary)" />
              <span style={{ fontWeight: 900, letterSpacing: "1px" }}>CYBER_OS</span>
            </div>
            <div style={{ display: "flex", gap: 16, opacity: 0.6 }}>
              <span>DOSSIER</span>
              <span>MISSION</span>
              <span>NETWORK</span>
              <span>ENCRYPT</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Wifi size={12} />
              <Battery size={12} />
            </div>
            <span style={{ color: "var(--primary)" }}>{time}</span>
          </div>
        </motion.nav>

        {/* Desktop Content */}
        <div style={{ flex: 1, position: "relative", overflow: "auto", padding: "40px" }}>
          {children}
        </div>

        {/* Bottom Dock */}
        <div style={{
          position: "fixed",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          height: 60,
          background: "rgba(10, 10, 10, 0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          gap: 4,
          zIndex: 1000
        }}>
          {dockApps.map((app) => (
            <div key={app.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <motion.div
                whileHover={{ y: -10, scale: 1.1 }}
                onClick={() => bringToFront(app.id)}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 0.2s",
                  background: activeWindow === app.id ? "rgba(204, 255, 0, 0.1)" : "transparent"
                }}
              >
                {app.icon}
              </motion.div>
              {/* Active Indicator Dot */}
              <div style={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: activeWindow === app.id ? "var(--primary)" : "rgba(255,255,255,0.2)",
                marginTop: 2
              }} />
            </div>
          ))}
        </div>
      </div>
    </WindowContext.Provider>
  );
};
