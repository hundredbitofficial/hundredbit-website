
"use client";

import { useState } from "react";
import type { Testimonial } from "@/data/testimonials";

export default function Testimonials({
  items,
  dark = false,
}: {
  items: Testimonial[];
  dark?: boolean;
}) {
  const [i, setI] = useState(0);

  if (!items.length) return null;

  const t = items[i];
  const placeholder = !t.verified;

  const btn = `flex h-11 w-11 items-center justify-center rounded-full border transition ${
    dark
      ? "border-white/25 hover:bg-white/10"
      : "border-charcoal/20 hover:border-electric hover:text-electric"
  }`;

  return (
    <figure
      aria-roledescription="carousel"
      className="relative"
    >
      <span
        aria-hidden
        className="block text-[7rem] font-semibold leading-none text-electric"
      >
        “
      </span>

      <blockquote
        className="-mt-8 max-w-4xl text-2xl font-medium leading-snug sm:text-4xl"
        aria-live="polite"
      >
        {t.testimonial}
      </blockquote>

      <figcaption className="mt-8">
        <p className="font-semibold">
          {t.clientName}
        </p>

        <p className={dark ? "text-white/60" : "text-slate"}>
          {t.designation}, {t.company}
        </p>

        {placeholder && (
          <p className="mt-3 inline-block rounded-full border border-electric/50 px-3 py-1 text-xs text-electric">
            Placeholder — not a real client testimonial
          </p>
        )}
      </figcaption>

      {items.length > 1 && (
        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            className={btn}
            aria-label="Previous testimonial"
            onClick={() =>
              setI((i - 1 + items.length) % items.length)
            }
          >
            ←
          </button>

          <button
            type="button"
            className={btn}
            aria-label="Next testimonial"
            onClick={() =>
              setI((i + 1) % items.length)
            }
          >
            →
          </button>

          <span
            className={`ml-2 text-sm ${
              dark ? "text-white/60" : "text-slate"
            }`}
          >
            {i + 1} / {items.length}
          </span>
        </div>
      )}
    </figure>
  );
}
