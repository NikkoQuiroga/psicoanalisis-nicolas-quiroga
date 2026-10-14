// Measure contact intent only. Do not send messages or clinical information.
export function trackWA(location, { modality = "unspecified" } = {}) {
  const params = {
    location,
    modality,
    page_path: window.location.pathname,
  };
  try { window.gtag?.("event", "wa_click", params); } catch {}
}
