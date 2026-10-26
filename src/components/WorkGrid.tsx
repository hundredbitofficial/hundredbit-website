"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import Mockup from "./Mockup";
import { projectLink, PROJECT_CATEGORIES, type Project } from "@/data/projects";
export default function WorkGrid({ items }: { items: Project[] }) {
  const [cat, setCat] = useState("All");
  const cats = useMemo(() => ["All", ...PROJECT_CATEGORIES.filter((c) => items.some((p) => p.category === c))], [items]);
  const shown = cat === "All" ? items : items.filter((p) => p.category === cat);
  return (
    <>
      <div role="group" aria-label="Filter projects by category" className="mb-12 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition ${cat === c ? "border-electric bg-electric text-white" : "border-charcoal/15 hover:border-electric hover:text-electric"}`}>{c}</button>
        ))}
      </div>
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {shown.map((p) => (
          <article key={p.slug} className="group">
            <Link href={projectLink(p)} aria-label={`${p.title} case study`} className="block transition duration-500 group-hover:-translate-y-1"><Mockup project={p} sizes="(min-width:768px) 50vw, 100vw" /></Link>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-electric">{p.category}</p>
              </div>
              <span className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-royal">{p.status === "live" ? "Live" : p.status === "in-progress" ? "In progress" : "Coming soon"}</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate">{p.description}</p>
            <p className="mt-2 text-xs text-slate">{p.technologies.join(" • ")}</p>
            <div className="mt-4 flex gap-5 text-sm font-semibold">
              {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">Live project</a>}
              <Link href={projectLink(p)} className="hover:text-electric">Case study</Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
