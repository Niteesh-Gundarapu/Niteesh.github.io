"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { WeatherWidget } from "@/components/ui/WeatherWidget";
import { WeatherBackground, WeatherType } from "@/components/ui/WeatherBackground";
import { AudioEngine } from "@/components/ui/AudioEngine";
import { useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [weatherType, setWeatherType] = useState<WeatherType>("sunny");

  useEffect(() => {
    const handleUpdate = (e: any) => setWeatherType(e.detail);
    window.addEventListener("weatherUpdate", handleUpdate);
    return () => window.removeEventListener("weatherUpdate", handleUpdate);
  }, []);

  return (
    <main>
      {/* Background Layers */}
      <ParticleBackground />
      <WeatherBackground type={weatherType} />
      <div className="glow-overlay" />
      <div className="noise" />

      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <SmoothScroll>
          <AudioEngine weatherType={weatherType} />
          <CustomCursor />
          <Navbar />
          <WeatherWidget />
          
          <div style={{ position: "relative", zIndex: 1 }}>
            <Hero />
            <div className="divider" style={{ opacity: 0.05 }} />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </div>
        </SmoothScroll>
      )}
    </main>
  );
}
