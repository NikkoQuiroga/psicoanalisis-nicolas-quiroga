import React, { useEffect, useMemo, useState } from "react";
import useGeo from "../hooks/useGeo.js";
import { buildWhatsAppURL } from "../utils/wa.js";
import { trackWA } from "../analytics/events.js";

const AR_PRICE = 40000; // ARS
const EXT_PRICE = 35;   // USD

export default function AgendaForm() {
  const geo = useGeo();
  const isAR = useMemo(() => geo.cc === "AR", [geo.cc]);

  const [form, setForm] = useState({
    name: "",
    age: "",
    contact: "",
    reason: "",
    urgency: "Esta semana",
    slot: "",
    mode: isAR ? "Online" : "Online",
    risk: "No",
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
    <form onSubmit={onSubmit} className="grid w-full min-w-0 gap-3">
      <div className="flex w-full min-w-0 items-start gap-2 rounded-xl border border-black/5 bg-white p-3 text-xs leading-relaxed text-sumi/75">
        <span className="text-sm shrink-0">🔒</span>
        <span className="min-w-0">
          <strong className="text-sumi/90">Reserva absoluta.</strong>{" "}
          Todo lo que compartás —ahora y en sesión— es estrictamente confidencial. No se comparte con terceros bajo ninguna circunstancia.
        </span>
      </div>
      <div className="w-full min-w-0 rounded-xl border border-black/5 bg-washi p-3 text-sm text-sumi/80">
        Honorario por sesión: <strong>{priceLabel}</strong>
      </div>

      <label className="grid min-w-0 gap-1 text-sm">
        <span>Nombre</span>
        <input
          className="w-full min-w-0 rounded border px-3 py-2"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </label>

      <label className="grid min-w-0 gap-1 text-sm">
        <span>Edad</span>
        <input
          className="w-full min-w-0 rounded border px-3 py-2"
          inputMode="numeric"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
      </label>

      <label className="grid min-w-0 gap-1 text-sm">
        <span>Email o WhatsApp</span>
        <input
          className="w-full min-w-0 rounded border px-3 py-2"
          required
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
        />
      </label>

      <label className="grid min-w-0 gap-1 text-sm">
        <span>Motivo de consulta</span>
        <select
          className="w-full min-w-0 rounded border px-3 py-2"
          value={form.reason}
          onChange={(e) => setForm({ ...form, reason: e.target.value })}
        >
          <option value="">Elegí una opción</option>
          <option>Sobrepensamiento o no poder apagar la cabeza</option>
          <option>Ansiedad o angustia</option>
          <option>Insomnio por pensamientos</option>
          <option>Autoexigencia o perfeccionismo</option>
          <option>Dificultad para decidir</option>
          <option>Desgaste laboral o burnout</option>
          <option>Algo que se repite aunque ya lo entendí</option>
          <option>Duelo o pérdida</option>
          <option>Vínculos o relaciones</option>
          <option>Inhibición o bloqueo</option>
          <option>Otro</option>
        </select>
      </label>

      {isAR && (
        <label className="grid min-w-0 gap-1 text-sm">
          <span>Modalidad</span>
          <select
            className="w-full min-w-0 rounded border px-3 py-2"
            value={form.mode}
            onChange={(e) => setForm({ ...form, mode: e.target.value })}
          >
            <option>Online</option>
            <option>Presencial en Olivos</option>
          </select>
        </label>
      )}

      <fieldset className="grid min-w-0 gap-2 text-sm">
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

      <fieldset className="grid min-w-0 gap-2 rounded-xl border border-black/5 bg-white/70 p-3 text-sm">
        <legend className="px-1">¿Estás atravesando una urgencia o riesgo actual de hacerte daño?</legend>
        {["No", "Sí"].map((value) => (
          <label key={value} className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="risk"
              checked={form.risk === value}
              onChange={() => setForm({ ...form, risk: value })}
            />{" "}
            {value}
          </label>
        ))}
      </fieldset>

      {form.risk === "Sí" && (
        <div className="rounded-xl border border-red-900/20 bg-red-50 p-3 text-xs leading-relaxed text-red-900">
          Este espacio no funciona como guardia ni dispositivo de urgencias. En caso de riesgo inmediato,
          acudí a una guardia, llamá a emergencias o contactá servicios locales de asistencia en crisis.
        </div>
      )}

      <label className="grid min-w-0 gap-1 text-sm">
        <span>Franja horaria</span>
        <select
          className="w-full min-w-0 rounded border px-3 py-2"
          value={form.slot}
          onChange={(e) => setForm({ ...form, slot: e.target.value })}
        >
          <option value="">Elegí una opción</option>
          <option>Mañana</option>
          <option>Tarde</option>
          <option>Noche</option>
        </select>
      </label>

      <label className="grid min-w-0 gap-1 text-sm">
        <span>Si querés, contame en 1–2 líneas qué te está pasando</span>
        <textarea
          rows={3}
          className="w-full min-w-0 rounded border px-3 py-2"
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
