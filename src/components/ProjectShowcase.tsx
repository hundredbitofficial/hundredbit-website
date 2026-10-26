"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Mockup from "./Mockup";
import { projectLink, type Project } from "@/data/projects";

function Arrow() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>; }

export function ctaLabel(p: Project) { return p.slug === "tarini925" || p.slug === "kssb-global" ? "View Live Project" : p.slug === "thara-thai-spa" ? "View Project" : "Explore Project"; }

export default function ProjectShowcase({ items }: { items: Project[] }) {
  const reduce = useReducedMotion();
  return (
    <div className="space-y-24 sm:space-y-32">
      {items.map((p, i) => {
        const href = p.liveUrl ?? projectLink(p); const ext = !!p.liveUrl;
        return (
          <article key={p.slug} className={`group grid items-center gap-10 lg:grid-cols-12 ${i % 2 ? "" : ""}`}>
            <motion.div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`} initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }} whileInView={{ clipPath: "inset(0 0 0% 0)" }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <div className={`transition duration-500 [transform-style:preserve-3d] lg:group-hover:[transform:perspective(1400px)_rotateY(${i % 2 ? "" : "-"}3deg)_scale(1.015)]`}>
                <Mockup project={p} priority={i === 0} />
              </div>
            </motion.div>
            <div className={`lg:col-span-5 ${i % 2 ? "lg:order-1 lg:pr-8" : "lg:pl-8"}`}>
              <p className="text-sm font-medium text-electric">{p.industry || p.category}</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{p.title}</h3>
              <p className="mt-4 lead">{p.description}</p>
              <p className="mt-4 text-sm text-slate">{p.services.join(", ")}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={href} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="btn btn-primary">{ctaLabel(p)}<Arrow /></Link>
                {ext && <Link href={projectLink(p)} className="btn btn-ghost-dark">Case study</Link>}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
