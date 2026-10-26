"use client";
import { useState } from "react";
export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <h3>
              <button id={`faq-b-${i}`} aria-expanded={isOpen} aria-controls={`faq-p-${i}`} onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium">
                {f.q}
                <span aria-hidden className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-charcoal/15 text-xl transition-transform duration-300 ${isOpen ? "rotate-45 border-electric text-electric" : ""}`}>+</span>
              </button>
            </h3>
            <div id={`faq-p-${i}`} role="region" aria-labelledby={`faq-b-${i}`} className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
              <p className="overflow-hidden text-slate leading-8">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
