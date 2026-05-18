import { useEffect, useState } from "react";

export default function useGeo() {
  // Asume Argentina por defecto — la mayoría de las visitas son locales.
  // Solo cambia a internacional si la API confirma explícitamente otro país.
  const [geo, setGeo] = useState({
    loading: false,
    country: "Argentina",
    city: null,
    tz: typeof Intl !== "undefined"
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : "America/Argentina/Buenos_Aires",
    cc: "AR",
  });

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("https://ipapi.co/json/");
        const j = await r.json();
        if (j.country_code) {
          setGeo({
            loading: false,
            country: j.country_name,
            city: j.city,
            tz: j.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
            cc: j.country_code,
          });
        }
        // Si no hay country_code válido, mantiene el default AR
      } catch {
        // API falló → mantiene el default AR
      }
    })();
  }, []);

  return geo;
}
