import React from "react";
import { Quote } from "lucide-react";
export default function TestimonialCard({quote,name,meta}){
return (
<figure className="relative overflow-hidden rounded-2xl border border-black/5 bg-white/60 p-5 shadow-sm transition hover:shadow-md">
<Quote className="absolute -top-3 -left-3 w-8 h-8 text-gold/70"/>
<blockquote className="text-sm text-sumi/90 italic leading-relaxed">{quote}</blockquote>
<figcaption className="mt-4 flex items-center justify-between text-xs text-sumi/70">
<span className="font-medium">{name}</span>
<span>{meta}</span>
</figcaption>
</figure>
);
}