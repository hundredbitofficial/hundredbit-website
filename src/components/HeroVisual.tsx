"use client";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function StaticMark() {
  return (
    <svg viewBox="0 0 260 260" className="h-full w-full" role="img" aria-label="Hundred Bit symbol">
      <defs><linearGradient id="hb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1b2a4d" /><stop offset="1" stopColor="#0b1730" /></linearGradient></defs>
      <rect x="40" y="40" width="70" height="70" rx="16" fill="url(#hb)" stroke="#2c4a8f" /><rect x="95" y="95" width="70" height="70" rx="16" fill="url(#hb)" stroke="#2c4a8f" /><rect x="150" y="150" width="70" height="70" rx="16" fill="url(#hb)" stroke="#2c4a8f" />
      <circle cx="190" cy="60" r="28" fill="#145CFF" /><circle cx="70" cy="200" r="28" fill="#145CFF" />
    </svg>
  );
}

const W = 520;
const glass = "rounded-2xl border border-white/15 bg-[#0c1c3a]/75 shadow-[0_30px_80px_-30px_rgba(20,92,255,0.6)] backdrop-blur-md";

function Layer({ sx, sy, depth, className, float, delay = 0, children }: { sx: MotionValue<number>; sy: MotionValue<number>; depth: number; className: string; float: boolean; delay?: number; children: React.ReactNode }) {
  const x = useTransform(sx, (v) => v * depth);
  const y = useTransform(sy, (v) => v * depth);
  return (
    <motion.div style={{ x, y }} className={`absolute ${className}`}>
      <motion.div animate={float ? { y: [0, -9, 0] } : undefined} transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay }}>{children}</motion.div>
    </motion.div>
  );
}

export default function HeroVisual() {
  const outer = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const reduce = !!useReducedMotion();
  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 }), sy = useSpring(my, { stiffness: 60, damping: 18 });
  useEffect(() => {
    const el = outer.current; if (!el) return;
    const ro = new ResizeObserver(() => setScale(Math.min(1, el.clientWidth / W))); ro.observe(el); return () => ro.disconnect();
  }, []);
  const move = (e: React.PointerEvent) => {
    if (reduce || !outer.current) return; const r = outer.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const bars = [38, 58, 46, 74, 62, 96];
  const L = { sx, sy, float: !reduce } as const;
  const d = (n: number) => (reduce ? 0 : n);
  return (
    <div ref={outer} onPointerMove={move} onPointerLeave={() => { mx.set(0); my.set(0); }} className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden" role="img" aria-label="Illustration of a website, analytics dashboard and code editor">
      <div className="absolute inset-0 origin-top-left" style={{ width: W, height: W, transform: `scale(${scale})` }}>
        <div className="absolute left-16 top-20 h-80 w-80 rounded-full bg-electric/25 blur-[90px]" aria-hidden />

        {/* website mockup */}
        <Layer {...L} depth={d(10)} className="left-[60px] top-[100px]">
          <div className={`${glass} relative h-[290px] w-[360px] overflow-hidden`}>
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-white/25" /><span className="h-2 w-2 rounded-full bg-white/25" /><span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="ml-3 rounded-md bg-white/10 px-3 py-0.5 text-[10px] text-white/55">yourbusiness.com</span>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="h-5 w-5 rounded-full bg-electric" /><span className="h-2 w-14 rounded bg-white/40" /></div><div className="flex gap-3"><span className="h-1.5 w-8 rounded bg-white/25" /><span className="h-1.5 w-8 rounded bg-white/25" /><span className="h-1.5 w-8 rounded bg-white/25" /></div></div>
              <div className="mt-6 grid grid-cols-5 gap-4">
                <div className="col-span-3">
                  <div className="h-3 w-full rounded bg-white/85" /><div className="mt-2 h-3 w-4/5 rounded bg-white/85" />
                  <div className="mt-4 h-1.5 w-full rounded bg-white/25" /><div className="mt-2 h-1.5 w-3/4 rounded bg-white/25" />
                  <div className="mt-5 h-8 w-24 rounded-full bg-electric shadow-glow" />
                </div>
                <div className="relative col-span-2 h-28 overflow-hidden rounded-xl bg-gradient-to-br from-electric to-[#0b2a6b]">
                  <span className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/25" /><span className="absolute bottom-3 left-3 h-9 w-9 rounded-lg bg-white/20" /><span className="absolute bottom-8 left-10 h-6 w-6 rounded-md bg-white/30" />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">{[0, 1, 2].map((i) => <div key={i} className="h-14 rounded-xl border border-white/10 bg-white/[0.06]" />)}</div>
            </div>
            {!reduce && <div className="sweep pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />}
          </div>
        </Layer>

        {/* analytics */}
        <Layer {...L} depth={d(22)} delay={1} className="left-[318px] top-[18px]">
          <div className={`${glass} w-[190px] p-4`}>
            <p className="text-[11px] font-medium text-white/60">Analytics</p>
            <div className="mt-3 flex h-20 items-end gap-2">
              {bars.map((h, i) => <motion.span key={i} className="w-full origin-bottom rounded-t bg-gradient-to-t from-electric to-[#6fa0ff]" style={{ height: `${h}%` }} initial={reduce ? false : { scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.8, delay: 0.5 + i * 0.09, ease: [0.22, 1, 0.36, 1] }} />)}
            </div>
            <svg viewBox="0 0 150 30" className="mt-3 w-full" aria-hidden><motion.path d="M0 24 C20 20 30 26 50 15 S85 18 105 9 S135 6 150 2" fill="none" stroke="#9fc0ff" strokeWidth="2" strokeLinecap="round" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, delay: 1, ease: "easeOut" }} /></svg>
          </div>
        </Layer>

        {/* code */}
        <Layer {...L} depth={d(30)} delay={0.5} className="left-0 top-[350px]">
          <div className={`${glass} w-[262px] px-4 py-3.5`}>
            <div className="mb-2 flex gap-1.5"><span className="h-2 w-2 rounded-full bg-[#ff5f57]" /><span className="h-2 w-2 rounded-full bg-[#febc2e]" /><span className="h-2 w-2 rounded-full bg-[#28c840]" /></div>
            <p className="font-mono text-[11px] leading-6 text-white/80">
              <span className="text-[#7ea8ff]">const</span> idea = <span className="text-[#9be7c4]">&quot;your vision&quot;</span>;<br />
              <span className="text-[#7ea8ff]">await</span> hundredBit.<span className="text-[#ffd479]">build</span>(idea);<br />
              <span className="text-white/45">// shipped &amp; supported</span><span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-electric" />
            </p>
          </div>
        </Layer>

        {/* chip */}
        <Layer {...L} depth={d(38)} delay={1.5} className="left-[300px] top-[398px]">
          <div className="flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-charcoal shadow-lift">
            <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" /></span>
            Enquiry received
          </div>
        </Layer>
      </div>
    </div>
  );
}
