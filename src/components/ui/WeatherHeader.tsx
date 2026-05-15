"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, CloudRain, Snowflake, Flame, Cloud } from "lucide-react";

export type WeatherState = {
  temp: number;
  condition: string;
  type: "sunny" | "rainy" | "winter" | "hot";
};

export const WeatherHeader = () => {
  const [dateTime, setDateTime] = useState({ time: "", date: "" });
  const [weather, setWeather] = useState<WeatherState>({ 
    temp: 24, 
    condition: "Clear", 
    type: "sunny" 
  });

  useEffect(() => {
    // 1. Time Update
    const updateTime = () => {
      const now = new Date();
      setDateTime({
        time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        date: now.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short' })
      });
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    // 2. Live Weather Fetch (using wttr.in for simplicity/no-key)
    const fetchWeather = async () => {
      try {
        const res = await fetch("https://wttr.in/?format=j1");
        const data = await res.json();
        const temp = parseInt(data.current_condition[0].temp_C);
        const desc = data.current_condition[0].weatherDesc[0].value;
        
        let type: WeatherState["type"] = "sunny";
        if (temp > 30) type = "hot";
        else if (temp < 10) type = "winter";
        else if (desc.toLowerCase().includes("rain")) type = "rainy";

        setWeather({ temp, condition: desc, type });
        
        // Dispatch event for other components (like Hero) to listen
        window.dispatchEvent(new CustomEvent("weatherUpdate", { detail: type }));
      } catch (err) {
        console.error("Weather fetch failed", err);
      }
    };
    fetchWeather();
    const weatherInterval = setInterval(fetchWeather, 600000); // Update every 10 mins

    return () => {
      clearInterval(timeInterval);
      clearInterval(weatherInterval);
    };
  }, []);

  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center", fontSize: "11px", fontWeight: 700 }}>
      {/* Time & Fire */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#ff4d00" }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          <Flame size={14} fill="#ff4d00" />
        </motion.div>
        <span style={{ letterSpacing: 1 }}>{dateTime.time}</span>
        <span style={{ opacity: 0.5, color: "white" }}>|</span>
        <span style={{ color: "white", opacity: 0.7 }}>{dateTime.date.toUpperCase()}</span>
      </div>

      {/* Mini Weather Status */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--accent)" }}>
        {weather.type === "sunny" && <Sun size={14} />}
        {weather.type === "hot" && <Sun size={14} style={{ filter: "drop-shadow(0 0 5px orange)" }} />}
        {weather.type === "winter" && <Snowflake size={14} />}
        {weather.type === "rainy" && <CloudRain size={14} />}
        <span>{weather.temp}°C</span>
        <span style={{ opacity: 0.5, fontSize: "9px" }}>({weather.condition.toUpperCase()})</span>
      </div>
    </div>
  );
};
