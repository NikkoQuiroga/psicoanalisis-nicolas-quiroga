import React from "react";
import { Helmet, HelmetProvider } from "@dr.pogodin/react-helmet";
export default function Gracias(){
return (
<>
<Helmet><title>Gracias — Te escribo por WhatsApp</title></Helmet>
<section className="mx-auto w-full max-w-3xl px-5 py-10 text-center">
<h1 className="h-serif text-3xl font-semibold">¡Gracias!</h1>
<p className="mt-2 text-sumi/75">Te escribí por WhatsApp. Si no lo ves, revisá tus mensajes.</p>
</section>
</>
);
}