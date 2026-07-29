import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundInk() {
  const { scrollYProgress } = useScroll();
  const darkness = useTransform(scrollYProgress, [0, 1], [0.13, 0.2]);
  return (
    <motion.div aria-hidden className="pointer-events-none fixed inset-0 z-0" style={{ opacity: darkness }}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(241,233,220,0.82), rgba(241,233,220,0.96)), url('/media/suminagashi-tinta-pensamiento.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "soft-light",
          filter: "saturate(0.65) contrast(0.86)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 36% at 12% 16%, rgba(214,92,57,0.28) 0%, transparent 54%), radial-gradient(42% 34% at 84% 10%, rgba(197,160,114,0.26) 0%, transparent 58%), radial-gradient(40% 30% at 18% 82%, rgba(79,52,32,0.18) 0%, transparent 60%)",
          mixBlendMode: "multiply",
        }}
      />
    </motion.div>
  );
}
