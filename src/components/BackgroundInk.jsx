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
            "radial-gradient(60% 40% at 10% 10%, #5B6B4A 0%, transparent 35%), radial-gradient(45% 35% at 90% 10%, #B48B7D 0%, transparent 35%), radial-gradient(30% 25% at 20% 80%, #BFA06A 0%, transparent 30%)",
          mixBlendMode: "multiply",
          filter: "saturate(0.8)",
        }}
      />
    </motion.div>
  );
}
