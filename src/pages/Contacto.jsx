import React from "react";
import { Helmet, HelmetProvider } from "@dr.pogodin/react-helmet";
export default function Contacto(){
const phone = import.meta.env.VITE_WHATSAPP || '5491161402223';
return (
<>
<Helmet><title>Contacto</title><meta name="description" content="Contactame por WhatsApp o email."/></Helmet>
<section className="mx-auto w-full max-w-3xl px-5 py-10">
<h1 className="h-serif text-3xl font-semibold">Contacto</h1>
<p className="mt-4 text-sumi/75">WhatsApp: <a className="underline" href={`https://wa.me/${phone}?text=${encodeURIComponent('Hola Nicolás, ¿coordinamos una sesión?')}`} target="_blank" rel="noreferrer">{phone}</a></p>
<p className="text-sumi/75">Email: <a className="underline" href="mailto:contacto@nicolasquiroga.com.ar">contacto@nicolasquiroga.com.ar</a></p>
</section>
</>
);
}