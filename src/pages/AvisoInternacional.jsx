import React from "react";
import { Helmet, HelmetProvider } from "@dr.pogodin/react-helmet";
export default function AvisoInternacional(){
return (
<>
<Helmet><title>Aviso internacional</title></Helmet>
<section className="mx-auto w-full max-w-3xl px-5 py-10">
<h1 className="h-serif text-3xl font-semibold">Aviso internacional</h1>
<p className="mt-4 text-sumi/75">Atiendo online desde Argentina. La disponibilidad puede variar según normativas locales de tu país.</p>
</section>
</>
);
}