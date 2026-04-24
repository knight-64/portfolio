"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      glow.style.left = e.clientX - 50 + "px";
      glow.style.top = e.clientY - 50 + "px";
      glow.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      glow.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed w-24 h-24 pointer-events-none z-50 transition-opacity duration-300"
      style={{
        background: "radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)",
        filter: "blur(20px)",
        opacity: 0,
      }}
    />
  );
}
