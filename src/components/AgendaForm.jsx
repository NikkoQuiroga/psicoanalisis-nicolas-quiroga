import React, { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Lock,
  MapPin,
  MessageCircle,
} from "lucide-react";
import useGeo from "../hooks/useGeo.js";
import { buildWhatsAppURL } from "../utils/wa.js";
import { trackWA } from "../analytics/events.js";

const AR_PRICE = 40000;
const EXT_PRICE = 35;

const SESSION_MINUTES = 40;
const START_HOUR = 8;
const END_HOUR = 21;
const DAYS_TO_SHOW = 6;

const blockedHoursByWeekday = {
  1: [19, 20],
  2: [8, 9, 10, 19, 20],
  3: [17, 18, 19, 20],
  4: [8, 9, 10, 19, 20],
  5: [17, 18, 19, 20, 21],
};

const weekdayLabels = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const monthLabels = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const reasons = [
  "Sobrepensamiento",
  "Ansiedad o angustia",
  "Insomnio",
  "Autoexigencia",
  "Dificultad para decidir",
  "Algo que se repite",
];

function buildUpcomingSlots() {
  const today = new Date();
  const slots = [];
  const cursor = new Date(today);
  cursor.setHours(0, 0, 0, 0);

  while (slots.length < DAYS_TO_SHOW) {
    const weekday = cursor.getDay();
    const isWeekday = weekday >= 1 && weekday <= 5;

    if (isWeekday) {
      const blockedHours = blockedHoursByWeekday[weekday] || [];
      const isToday = cursor.toDateString() === today.toDateString();
      const times = [];

      for (let hour = START_HOUR; hour <= END_HOUR; hour += 1) {
        if (blockedHours.includes(hour)) continue;
        if (isToday && hour <= today.getHours() + 1) continue;
        times.push(`${String(hour).padStart(2, "0")}:00`);
      }

      if (times.length) {
        const dayNumber = String(cursor.getDate()).padStart(2, "0");
        const month = monthLabels[cursor.getMonth()];
        const shortMonth = month.slice(0, 3);
        slots.push({
          key: cursor.toISOString().slice(0, 10),
          day: weekdayLabels[weekday],
          date: dayNumber,
          month,
          label: `${Number(dayNumber)} ${shortMonth}`,
          times,
        });
      }
    }

    cursor.setDate(cursor.getDate() + 1);
  }

  return slots;
}

export default function AgendaForm() {
  const geo = useGeo();
  const isAR = useMemo(() => geo.cc === "AR", [geo.cc]);
  const priceLabel = isAR
    ? `$${AR_PRICE.toLocaleString("es-AR")} ARS`
    : `USD ${EXT_PRICE}`;
  const upcomingSlots = useMemo(() => buildUpcomingSlots(), []);

  const [selectedDayKey, setSelectedDayKey] = useState(upcomingSlots[0]?.key || "");
  const selectedDay = upcomingSlots.find((slot) => slot.key === selectedDayKey) || upcomingSlots[0];
  const [selectedTime, setSelectedTime] = useState(selectedDay?.times[0] || "");
  const [mode, setMode] = useState(isAR ? "Online" : "Online");
  const [reason, setReason] = useState(reasons[0]);

  useEffect(() => {
    if (!selectedDay) return;
    if (!selectedDay.times.includes(selectedTime)) {
      setSelectedTime(selectedDay.times[0]);
    }
  }, [selectedDay, selectedTime]);

  function openWhatsApp() {
    const url = buildWhatsAppURL({
      data: {
        name: "",
        age: "",
        contact: "",
        reason,
        urgency: "Esta semana",
        slot: `${selectedDay.day} ${selectedDay.label} · ${selectedTime}`,
        mode,
        risk: "No informado",
        canPay: true,
        note: "Vengo desde la agenda visual del sitio.",
        isAR,
        city: geo.city,
        country: geo.country,
        tz: geo.tz,
      },
    });

    trackWA("agenda_calendar", {
      country: geo.country,
      city: geo.city,
      tz: geo.tz,
      isAR,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="grid w-full min-w-0 gap-4">
      <div className="grid gap-3 rounded-2xl border border-black/5 bg-white p-4">
        <div className="flex items-start gap-2 text-xs leading-relaxed text-sumi/75">
          <Lock className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
          <span>
            <strong className="text-sumi/90">Reserva absoluta.</strong> Todo lo que
            compartás ahora y en sesión es confidencial.
          </span>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-sumi/70">
          <span className="inline-flex items-center gap-1 rounded-full bg-washi px-3 py-1">
            <Clock3 className="h-3.5 w-3.5" />
            {SESSION_MINUTES} minutos
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-washi px-3 py-1">
            <MapPin className="h-3.5 w-3.5" />
            Online / Olivos
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-washi px-3 py-1">
            Honorario: <strong>{priceLabel}</strong>
          </span>
        </div>
      </div>

      <div className="grid gap-2">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <CalendarDays className="h-4 w-4 text-gold" />
          Próximos turnos disponibles
        </div>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {upcomingSlots.map((slot) => {
            const active = selectedDay.key === slot.key;
            return (
              <button
                key={slot.key}
                type="button"
                onClick={() => {
                  setSelectedDayKey(slot.key);
                  setSelectedTime(slot.times[0]);
                }}
                className={`rounded-2xl border p-3 text-left transition ${
                  active
                    ? "border-sumi bg-sumi text-white"
                    : "border-black/10 bg-white text-sumi hover:border-gold/60"
                }`}
              >
                <span className="block text-[11px] uppercase tracking-[0.16em] opacity-60">
                  {slot.day}
                </span>
                <span className="mt-1 block text-2xl font-semibold leading-none">
                  {slot.date}
                </span>
                <span className="mt-1 block text-xs opacity-70">{slot.month}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-2">
        <p className="text-sm font-semibold">Horarios para {selectedDay.label}</p>
        <div className="flex flex-wrap gap-2">
          {selectedDay.times.map((time) => {
            const active = selectedTime === time;
            return (
              <button
                key={time}
                type="button"
                onClick={() => setSelectedTime(time)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                  active
                    ? "border-gold bg-gold text-sumi"
                    : "border-black/10 bg-white text-sumi/75 hover:border-gold/60"
                }`}
              >
                {active && <CheckCircle2 className="h-4 w-4" />}
                {time}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span>Motivo principal</span>
          <select
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
          >
            {reasons.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          <span>Modalidad</span>
          <select
            value={mode}
            onChange={(event) => setMode(event.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
          >
            <option>Online</option>
            {isAR && <option>Presencial en Olivos</option>}
          </select>
        </label>
      </div>

      <button
        type="button"
        onClick={openWhatsApp}
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gold px-4 py-3 text-sm font-semibold text-sumi transition hover:bg-gold2 hover:shadow-md"
      >
        <MessageCircle className="h-4 w-4" />
        Consultar este turno por WhatsApp
      </button>

      <p className="text-xs leading-relaxed text-sumi/55">
        Este espacio no funciona como guardia ni dispositivo de urgencias. En caso
        de riesgo inmediato, acudí a una guardia o contactá emergencias.
      </p>
    </div>
  );
}
