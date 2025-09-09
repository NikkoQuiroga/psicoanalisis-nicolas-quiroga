// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto w-full max-w-3xl px-5 py-10 text-center">
      <h1 className="h-serif text-3xl font-semibold">Página no encontrada</h1>
      <p className="mt-2 text-sumi/75">Volvé al inicio.</p>
      <Link
        to="/"
        className="mt-4 inline-block rounded-full bg-gold px-4 py-2 text-sumi hover:bg-gold2"
      >
        Inicio
      </Link>
    </section>
  );
}
