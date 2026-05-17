import { useEffect, useState } from "react";

function tzIsAR() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone.startsWith("America/Argentina");
  } catch {
    return false;
  }
}

export default function useGeo() {
  const [geo, setGeo] = useState({
    loading: true,
    country: null,
    city: null,
    tz: typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : null,
    cc: tzIsAR() ? "AR" : null, // respuesta inmediata basada en timezone, sin esperar la API
  });

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("https://ipapi.co/json/");
        const j = await r.json();
        setGeo({
          loading: false,
          country: j.country_name,
          city: j.city,
          tz: j.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
          cc: j.country_code,
        });
      } catch {
        // API falló: usar timezone como fallback definitivo
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setGeo({
          loading: false,
          country: null,
          city: null,
          tz,
          cc: tz.startsWith("America/Argentina") ? "AR" : null,
        });
      }
    })();
  }, []);

  return geo;
}
