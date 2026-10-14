import React, { useState } from "react";
import { Clock3, Lock, MessageCircle } from "lucide-react";

export default function AgendaForm({ onlineOnly = false }) {
  const [mode, setMode] = useState("Online");
  const [period, setPeriod] = useState("Mañana");
  const [timing, setTiming] = useState("Próximos días");
  const phone = import.meta.env.VITE_WHATSAPP || "5491161402223";
  const message = [
    "Hola Nicolás, quiero coordinar una primera entrevista.",
    `Modalidad: ${mode}`,
    `Franja preferida: ${period} (hora de Argentina).`,
    `Me gustaría empezar: ${timing}.`,
    "Vi los honorarios: $40.000 ARS por sesión para Argentina / USD 35 para exterior.",
    `Vengo de: ${window.location.pathname}`,
  ].join("\n");

  return (
    <div className="grid min-w-0 gap-4">
      <div className="rounded-2xl border border-black/5 bg-white p-4">
        <p className="flex items-center gap-2 text-sm font-semibold"><Lock className="h-4 w-4 text-moss" /> Un espacio confidencial</p>
        <p className="mt-2 text-sm leading-relaxed text-sumi/70">Contame qué te trae. En la primera entrevista también podés preguntarme cómo trabajo y conversar sobre cómo seguir.</p>
        <p className="mt-3 flex items-center gap-2 text-xs text-sumi/70"><Clock3 className="h-4 w-4" /> 40 minutos · Online{!onlineOnly && " / Olivos"}</p>
        <p className="mt-2 text-xs text-sumi/70">Honorarios por sesión: <strong>$40.000 ARS</strong> para Argentina / <strong>USD 35</strong> para exterior.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Podés dar el primer paso hoy</h3>
        <p className="mt-2 text-sm leading-relaxed text-sumi/70">{onlineOnly ? "Elegí la franja que te resulte cómoda." : "Elegí la modalidad y la franja que te resulte cómoda."} Por WhatsApp vemos qué horarios hay y coordinamos la primera entrevista.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {!onlineOnly && <label className="grid gap-1 text-sm">Modalidad<select value={mode} onChange={event => setMode(event.target.value)} className="rounded-xl border border-black/10 bg-white px-3 py-3"><option>Online</option><option>Presencial en Olivos</option></select></label>}
        <label className="grid gap-1 text-sm">Franja preferida (hora de Argentina)<select value={period} onChange={event => setPeriod(event.target.value)} className="rounded-xl border border-black/10 bg-white px-3 py-3"><option>Mañana</option><option>Tarde</option><option>Noche</option><option>A convenir</option></select></label>
        <label className="grid gap-1 text-sm">¿Cuándo te gustaría empezar?<select value={timing} onChange={event => setTiming(event.target.value)} className="rounded-xl border border-black/10 bg-white px-3 py-3"><option>Próximos días</option><option>La semana que viene</option><option>Quiero consultar primero</option></select></label>
      </div>
      <a href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" data-wa-location="availability_form" data-wa-modality={mode === "Online" ? "online" : "presencial"} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gold px-4 py-3 text-sm font-semibold text-sumi transition hover:bg-gold2 hover:shadow-md"><MessageCircle className="h-4 w-4" /> Consultar primera entrevista</a>
      <p className="text-xs leading-relaxed text-sumi/55">Enviar la consulta no reserva un turno. Este espacio no funciona como guardia ni dispositivo de urgencias. En caso de riesgo inmediato, acudí a una guardia o contactá emergencias.</p>
    </div>
  );
}
