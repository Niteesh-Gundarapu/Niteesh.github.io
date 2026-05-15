"use client";
import React, { useEffect, useRef, useState } from "react";

export const AudioEngine = ({ weatherType }: { weatherType: string }) => {
  const rainRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Sync with global sound toggle
    const handleToggle = (e: any) => setIsMuted(e.detail);
    window.addEventListener("soundToggle", handleToggle);
    
    // Create Audio object
    if (!rainRef.current) {
      rainRef.current = new Audio("https://www.soundjay.com/nature/rain-01.mp3");
      rainRef.current.loop = true;
      rainRef.current.volume = 0.5;
    }

    const playRain = () => {
      if (weatherType === "rainy" && !isMuted) {
        rainRef.current?.play().catch(console.error);
      } else {
        rainRef.current?.pause();
      }
    };

    playRain();

    // Thunder Logic
    let thunderTimer: NodeJS.Timeout;
    if (weatherType === "rainy" && !isMuted) {
      const playThunder = () => {
        const thunder = new Audio("https://www.soundjay.com/nature/thunder-01.mp3");
        thunder.volume = 0.3;
        thunder.play().catch(console.error);
        
        // Dispatch visual flash event
        window.dispatchEvent(new CustomEvent("thunderFlash"));
        
        thunderTimer = setTimeout(playThunder, 10000 + Math.random() * 20000);
      };
      thunderTimer = setTimeout(playThunder, 5000);
    }

    return () => {
      window.removeEventListener("soundToggle", handleToggle);
      rainRef.current?.pause();
      clearTimeout(thunderTimer);
    };
  }, [weatherType, isMuted]);

  return null;
};
