"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
const steps = [
  ["Discover", "We understand your business, objectives, audience, and requirements."],
  ["Strategize", "We define the project scope, technology, architecture, and implementation plan."],
  ["Design", "We create the visual experience, user flows, and interface designs."],
  ["Develop", "We build the solution using modern technologies and development practices."],
  ["Test", "We validate functionality, responsiveness, performance, and usability."],
  ["Launch", "We deploy the solution and support its successful launch."],
  ["Grow", "We provide ongoing support, optimization, and enhancements."],
];
export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  return (
    <div ref={ref}>
      {/* desktop: horizontal */}
      <ol className="relative hidden grid-cols-7 gap-4 lg:grid">
        <div className="absolute left-0 right-0 top-5 h-px bg-charcoal/15" aria-hidden />
        <motion.div className="absolute left-0 right-0 top-5 h-px origin-left bg-electric" style={{ scaleX: p }} aria-hidden />
        {steps.map(([t, d], i) => (
          <li key={t} className="relative pt-14">
            <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-electric bg-white text-sm font-semibold text-electric">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-lg font-semibold">{t}</h3>
            <p className="mt-2 text-sm leading-6 text-slate">{d}</p>
          </li>
        ))}
      </ol>
      {/* mobile: vertical */}
      <ol className="relative space-y-10 pl-14 lg:hidden">
        <div className="absolute bottom-0 left-5 top-0 w-px bg-charcoal/15" aria-hidden />
        <motion.div className="absolute bottom-0 left-5 top-0 w-px origin-top bg-electric" style={{ scaleY: p }} aria-hidden />
        {steps.map(([t, d], i) => (
          <li key={t} className="relative">
            <span className="absolute -left-14 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-electric bg-white text-sm font-semibold text-electric">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-lg font-semibold">{t}</h3>
            <p className="mt-1 text-sm leading-6 text-slate">{d}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
