import React from "react";

export default function DownloadInstructivo({ variant = "solid", className = "" }) {
  const href = "/docs/instructivo-psicoterapia-nicolas-quiroga.pdf";

  function track() {
    try {
      window.gtag && window.gtag("event", "download_instructivo", {
        file_name: "instructivo-psicoterapia-nicolas-quiroga.pdf",
        file_type: "application/pdf",
        location: window.location.pathname,
      });
    } catch {}
    try {
      window.fbq && window.fbq("trackCustom", "DownloadInstructivo", {
        file_name: "instructivo-psicoterapia-nicolas-quiroga.pdf",
        location: window.location.pathname,
      });
    } catch {}
  }

  const base = "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm transition";
  const solid = "bg-gold text-sumi hover:bg-gold2";
  const ghost = "border border-black/5 bg-white/70 hover:bg-white";

  return (
    <a
      href={href}
      download
      onClick={track}
      className={`${base} ${variant === "solid" ? solid : ghost} ${className}`}
    >
      Descargar instructivo (PDF)
    </a>
  );
}