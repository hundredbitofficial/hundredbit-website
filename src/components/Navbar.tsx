"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { NAV, waLink } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const path = usePathname();
  useEffect(() => { const on = () => setScrolled(window.scrollY > 40); on(); window.addEventListener("scroll", on, { passive: true }); return () => window.removeEventListener("scroll", on); }, []);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
        <div className={`pointer-events-auto mx-auto flex h-[64px] items-center justify-between rounded-full border border-white/70 px-4 shadow-[0_20px_60px_-20px_rgba(7,17,31,0.55)] backdrop-blur-xl transition-all duration-500 sm:h-[72px] sm:px-7 lg:grid lg:grid-cols-[1fr_auto_1fr] ${scrolled ? "max-w-5xl bg-[#d3e5f4]/95" : "max-w-6xl bg-[#d3e5f4]/80"}`}>
          <div className="justify-self-start"><Logo /></div>
          <nav aria-label="Primary" className="hidden items-center lg:flex" onMouseLeave={() => setHover(null)}>
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} aria-current={active(n.href) ? "page" : undefined} onMouseEnter={() => setHover(n.href)} onFocus={() => setHover(n.href)} onBlur={() => setHover(null)}
                className={`relative rounded-full px-4 py-2 text-[15px] transition-colors ${active(n.href) ? "font-semibold text-navy" : "font-medium text-charcoal/70 hover:text-charcoal"}`}>
                {hover === n.href && <motion.span layoutId="nav-hover" className="absolute inset-0 -z-0 rounded-full bg-white/70" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                <span className="relative">{n.label}</span>
              </Link>
            ))}
          </nav>
          <div className="hidden items-center justify-self-end gap-2 lg:flex">
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[15px] font-semibold text-white transition duration-300 hover:bg-electric">
              Get Started <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
            </Link>
          </div>
          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-charcoal lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">{open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-40 flex flex-col bg-midnight px-6 pb-10 pt-32 text-white lg:hidden"
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.3 }}>
            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-1">
              {NAV.map((n, i) => (
                <motion.div key={n.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                  <Link href={n.href} className={`block py-2 text-4xl font-semibold tracking-tight ${active(n.href) ? "text-electric" : ""}`}>{n.label}</Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="btn btn-primary">Get Started</Link>
              <a href={waLink()} className="btn btn-ghost">WhatsApp Enquiry</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
