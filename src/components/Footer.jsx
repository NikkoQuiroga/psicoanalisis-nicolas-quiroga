import React from "react";
import { Link } from "react-router-dom";


export default function Footer(){
return (
<footer className="border-t border-black/5 bg-white/60">
<div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-6 text-xs text-sumi/70 md:flex-row md:items-center md:justify-between">
<p>© {new Date().getFullYear()} Nicolás Quiroga — Psicología. Confidencialidad y ética profesional.</p>
<nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-sumi/70">
  <Link className="hover:text-sumi" to="/blog">Blog</Link>
  <Link className="hover:text-sumi" to="/legal/politica-de-privacidad">Política de privacidad</Link>
  <Link className="hover:text-sumi" to="/legal/terminos-y-condiciones">Términos y condiciones</Link>
  <Link className="hover:text-sumi" to="/legal/consentimiento-informado">Consentimiento informado</Link>
</nav>
</div>
</footer>
);
}