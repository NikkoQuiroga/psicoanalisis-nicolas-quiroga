export function buildWhatsAppURL({ data }){
const phone = import.meta.env.VITE_WHATSAPP || "5491161402223";
const params = new URLSearchParams(window.location.search);
const utm = Object.fromEntries(params.entries());
const lines = [
"Hola Nicolás, quiero coordinar una sesión.",
`Nombre: ${data.name || '-'}`,
`Contacto: ${data.contact || '-'}`,
`Motivo: ${data.reason || '-'}`,
`Urgencia: ${data.urgency || '-'}`,
`Franja: ${data.slot || '-'}`,
`Modalidad: ${data.mode || 'Online'}`,
`Confirmo honorarios: ${data.isAR ? `$${Number(35000).toLocaleString('es-AR')} ARS` : `USD 35`}`,
data.note ? `Nota: ${data.note}` : null,
`Ciudad: ${data.city || '-'}`,
`País: ${data.country || '-'}`,
`TZ: ${data.tz || '-'}`,
`UTM: ${JSON.stringify(utm)}`,
].filter(Boolean);
return `https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`;
}