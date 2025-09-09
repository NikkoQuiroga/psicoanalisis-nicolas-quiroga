import React, { useEffect, useMemo, useState } from "react";
import useGeo from "../hooks/useGeo.js";
import { buildWhatsAppURL } from "../utils/wa.js";
import { trackWA } from "../analytics/events.js";

const AR_PRICE = 29000; // ARS
const EXT_PRICE = 35;   // USD

export default function AgendaForm() {
  const geo = useGeo();
  const isAR = useMemo(() => geo.cc === "AR", [geo.cc]);

  const [form, setForm] = useState({
    name: "",
    contact: "",
    reason: "",
    urgency: "Esta semana",
    slot: "",
    mode: isAR ? "Online" : "Online",
    canPay: false,
    note: "",
  });

  useEffect(() => {
    setForm((f) => ({ ...f, mode: isAR ? f.mode : "Online" }));
  }, [isAR]);

  const priceLabel = isAR
    ? `$${AR_PRICE.toLocaleString("es-AR")} ARS`
    : `USD ${EXT_PRICE}`;

  function onSubmit(e) {
    e.preventDefault();
    if (!form.canPay) return;
    const url = buildWhatsAppURL({
      data: { ...form, isAR, city: geo.city, country: geo.country, tz: geo.tz },
    });
    trackWA("agenda_form", {
      country: geo.country,
      city: geo.city,
      tz: geo.tz,
      isAR,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="text-sm text-sumi/80 p-3 rounded-xl bg-washi border border-black/5">
        Honorario por sesión: <strong>{priceLabel}</strong>
      </div>

      <label className="grid gap-1 text-sm">
        <span>Nombre</span>
        <input
          className="border rounded px-3 py-2"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </label>

      <label className="grid gap-1 text-sm">
        <span>Email o WhatsApp</span>
        <input
          className="border rounded px-3 py-2"
          required
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
        />
      </label>

      <label className="grid gap-1 text-sm">
        <span>Motivo de consulta</span>
        <select
          className="border rounded px-3 py-2"
          value={form.reason}
          onChange={(e) => setForm({ ...form, reason: e.target.value })}
        >
          <option value="">Elegí una opción</option>
          <option>Ansiedad</option>
          <option>Insomnio</option>
          <option>Relaciones</option>
          <option>Duelo</option>
          <option>Exploración personal</option>
          <option>Otro</option>
        </select>
      </label>

      {isAR && (
        <label className="grid gap-1 text-sm">
          <span>Modalidad</span>
          <select
            className="border rounded px-3 py-2"
            value={form.mode}
            onChange={(e) => setForm({ ...form, mode: e.target.value })}
          >
            <option>Online</option>
            <option>Presencial en Olivos</option>
          </select>
        </label>
      )}

      <fieldset className="grid gap-2 text-sm">
        <legend>Urgencia</legend>
        {["Hoy", "Esta semana", "Este mes"].map((u) => (
          <label key={u} className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="urgency"
              checked={form.urgency === u}
              onChange={() => setForm({ ...form, urgency: u })}
            />{" "}
            {u}
          </label>
        ))}
      </fieldset>

      <label className="grid gap-1 text-sm">
        <span>Franja horaria</span>
        <select
          className="border rounded px-3 py-2"
          value={form.slot}
          onChange={(e) => setForm({ ...form, slot: e.target.value })}
        >
          <option value="">Elegí una opción</option>
          <option>Mañana</option>
          <option>Tarde</option>
          <option>Noche</option>
        </select>
      </label>

      <label className="grid gap-1 text-sm">
        <span>Si querés, contame en 1–2 líneas qué te está pasando</span>
        <textarea
          rows={3}
          className="border rounded px-3 py-2"
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
          placeholder="Opcional"
        />
      </label>

      <label className="mt-1 inline-flex items-start gap-2 text-sm">
        <input
          type="checkbox"
          checked={form.canPay}
          onChange={(e) => setForm({ ...form, canPay: e.target.checked })}
          required
        />
        <span>
          Confirmo que puedo sostener el valor de la sesión:{" "}
          <strong>{priceLabel}</strong>.
        </span>
      </label>

      {!form.canPay && (
        <p className="text-xs text-red-700/80">
          Para coordinar la sesión es necesario poder sostener el valor
          indicado.
        </p>
      )}

      <button
        disabled={!form.canPay}
        className="rounded-2xl px-4 py-3 bg-gold text-sumi hover:bg-gold2 transition-transform duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Abrir WhatsApp y enviar
      </button>
    </form>
  );
}