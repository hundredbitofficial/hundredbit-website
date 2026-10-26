"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { posts, POST_CATEGORIES } from "@/data/posts";
export default function Insights() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState("All");
  const list = useMemo(() => posts.filter((p) => (cat === "All" || p.category === cat) && `${p.title} ${p.excerpt}`.toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <>
      <title>Insights | Hundred Bit</title>
      <meta name="description" content="Articles on web development, software, automation and digital transformation from Hundred Bit." />
      <PageHero title="Insights on Building Better Digital Products." crumbs={[{ label: "Insights" }]} />
      <Section tone="white">
        <div className="flex flex-col gap-4 sm:flex-row">
          <label className="sr-only" htmlFor="s">Search articles</label>
          <input id="s" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles" className="w-full rounded-full border border-charcoal/15 px-5 py-3 outline-none focus:border-electric sm:max-w-sm" />
          <label className="sr-only" htmlFor="c">Category</label>
          <select id="c" value={cat} onChange={(e) => setCat(e.target.value)} className="rounded-full border border-charcoal/15 px-5 py-3"><option>All</option>{POST_CATEGORIES.map((c) => <option key={c}>{c}</option>)}</select>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {list.map((p) => (
            <article key={p.slug} className="group border-t border-charcoal/10 pt-6">
              <p className="text-sm text-electric">{p.category}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight"><Link href={`/insights/${p.slug}`} className="hover:text-electric">{p.title}</Link></h2>
              <p className="mt-3 text-slate leading-7">{p.excerpt}</p>
              <p className="mt-4 text-xs text-slate">{new Date(p.date).toLocaleDateString("en-IN", { dateStyle: "medium" })} · {p.readMinutes} min read</p>
            </article>
          ))}
          {!list.length && <p className="text-slate">No articles match. Try a different search or category.</p>}
        </div>
      </Section>
    </>
  );
}
