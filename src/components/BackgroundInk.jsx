import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundInk() {
  const { scrollYProgress } = useScroll();
  const darkness = useTransform(scrollYProgress, [0, 1], [0.06, 0.16]);
  return (
    <motion.div aria-hidden className="pointer-events-none fixed inset-0 z-0" style={{ opacity: darkness }}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 40% at 12% 12%, #278E87 0%, transparent 35%), radial-gradient(45% 35% at 88% 12%, #E3C3B5 0%, transparent 35%), radial-gradient(32% 26% at 20% 78%, #1F4F6E 0%, transparent 32%)",
          mixBlendMode: "soft-light",
          filter: "saturate(0.9)",
        }}
      />
    </motion.div>
  );
}
