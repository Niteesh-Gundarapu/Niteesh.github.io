"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync scroll position for animations
    lenis.on('scroll', (e) => {
      // Custom scroll triggers could go here
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
