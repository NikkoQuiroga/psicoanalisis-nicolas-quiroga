import React, { useEffect, useRef, useState } from "react";

// A decorative accent: no video request on mobile, reduced motion or data saving.
export default function InkVideo() {
  const host = useRef(null);
  const [visible, setVisible] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const screen = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const connection = navigator.connection;
    const update = () => setAllowed(screen.matches && !connection?.saveData && !["slow-2g", "2g", "3g"].includes(connection?.effectiveType));
    update();
    screen.addEventListener("change", update);
    connection?.addEventListener?.("change", update);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(host.current);
    return () => {
      observer.disconnect();
      screen.removeEventListener("change", update);
      connection?.removeEventListener?.("change", update);
    };
  }, []);
  const play = allowed && visible && !paused;
  return <div ref={host} className="ink-accent">
    {play && <video aria-hidden="true" tabIndex={-1} autoPlay loop muted playsInline preload="none" width="640" height="360" src="/media/suminagashi-loop.mp4" />}
    {allowed && visible && <button type="button" className="ink-toggle" onClick={() => setPaused(value => !value)} aria-pressed={paused}>{paused ? "Activar movimiento" : "Pausar movimiento"}</button>}
  </div>;
}
