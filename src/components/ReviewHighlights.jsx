import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { reviewProfiles, reviewHighlights } from "../content/testimonials.js";

export default function ReviewHighlights() {
  return <section aria-labelledby="home-reviews" className="border-b border-black/10 bg-white/60">
    <div className="mx-auto max-w-6xl px-5 py-9 md:py-12">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div><p className="home-eyebrow">Opiniones públicas</p><h2 id="home-reviews" className="scroll-mt-28 h-serif mt-2 text-3xl font-semibold">Qué cuentan quienes consultaron.</h2></div>
        <div className="flex flex-wrap gap-3">{reviewProfiles.map(profile => <a key={profile.name} href={profile.href} target="_blank" rel="noreferrer" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm transition hover:border-gold"><span className="flex items-center gap-2 font-semibold"><Star aria-hidden="true" size={15} className="fill-gold text-moss" />{profile.name} · {profile.rating}</span><span className="mt-1 block text-sumi/65">{profile.count} · Ver en la plataforma</span></a>)}</div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">{reviewHighlights.map(review => <figure key={review.name} className="border-l-2 border-gold/60 pl-4"><blockquote className="text-base leading-relaxed text-sumi/85">“{review.quote}”</blockquote><figcaption className="mt-3 text-sm"><span className="font-semibold">{review.name}</span><a href={review.href} target="_blank" rel="noreferrer" className="ml-2 text-sumi/65 underline underline-offset-4">{review.source}</a></figcaption></figure>)}</div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3"><p className="text-xs leading-relaxed text-sumi/60">Fragmentos de reseñas públicas. Cada experiencia es personal.</p><Link to="/testimonios" className="text-sm font-semibold underline underline-offset-4">Leer las opiniones completas</Link></div>
    </div>
  </section>;
}
