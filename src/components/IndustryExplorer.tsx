"use client";
import Link from "next/link";
import { useState } from "react";
import { industries } from "@/data/industries";
export default function IndustryExplorer() {
  const [i, setI] = useState(0); const cur = industries[i];
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div role="tablist" aria-label="Industries" aria-orientation="vertical" className="flex gap-2 overflow-x-auto pb-2 lg:col-span-4 lg:flex-col lg:overflow-visible">
        {industries.map((n, k) => (
          <button key={n.slug} role="tab" id={`ind-t-${k}`} aria-selected={i === k} aria-controls="ind-panel" onClick={() => setI(k)}
            className={`shrink-0 rounded-xl px-5 py-3 text-left text-sm font-medium transition sm:text-base ${i === k ? "bg-electric text-white shadow-glow" : "hover:bg-mist"}`}>{n.name}</button>
        ))}
      </div>
      <div id="ind-panel" role="tabpanel" aria-labelledby={`ind-t-${i}`} className="rounded-3xl bg-mist p-8 sm:p-12 lg:col-span-8">
        <h3 className="text-3xl font-semibold tracking-tight">{cur.name}</h3>
        <p className="mt-4 lead">{cur.summary}</p>
        <p className="mt-8 text-sm font-semibold">Relevant solutions</p>
        <ul className="mt-3 flex flex-wrap gap-2">{cur.solutions.map((s) => <li key={s} className="rounded-full bg-white px-4 py-1.5 text-sm text-royal">{s}</li>)}</ul>
        <Link href="/contact" className="btn btn-primary mt-10">Discuss a {cur.name} project</Link>
      </div>
    </div>
  );
}
