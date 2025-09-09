import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Section({ id, className = "", children, ...props }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  return (
    <section id={id} ref={ref} className={`snap-start ${className}`} {...props}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
