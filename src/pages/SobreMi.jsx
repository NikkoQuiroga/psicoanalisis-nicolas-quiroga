import React from "react";
import { Helmet, HelmetProvider } from "@dr.pogodin/react-helmet";
export default function SobreMi(){
return (
<>
<Helmet><title>Sobre mí — Nicolás Quiroga</title><meta name="description" content="Perfil profesional, formación y enfoque."/></Helmet>
<section className="mx-auto w-full max-w-3xl px-5 py-10">
<h1 className="h-serif text-3xl font-semibold">Sobre mí</h1>
<p className="mt-4 text-sumi/75">Lic. en Psicología (UBA). Psicoanálisis (ALEF). Mindfulness. Logoterapia. Estudios de cultura japonesa. Integro escucha lacaniana con recursos basados en evidencia cuando hace falta.</p>
</section>
</>
);
}