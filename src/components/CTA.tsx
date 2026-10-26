import Link from "next/link";
import { StaticMark } from "./HeroVisual";
export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-electric via-royal to-navy py-24 text-white sm:py-32">
      <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
      <div className="absolute -right-10 top-1/2 hidden h-[26rem] w-[26rem] -translate-y-1/2 opacity-30 md:block" aria-hidden><StaticMark /></div>
      <div className="wrap relative">
        <h2 className="h-section max-w-3xl">Your Next Big Idea Deserves Better Technology.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">Let&apos;s create something exceptional. Tell us what you&apos;re building, and we&apos;ll help you turn your vision into a digital reality.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="btn bg-white text-electric hover:-translate-y-0.5">Start a Project</Link>
          <Link href="/contact" className="btn btn-ghost">Talk to Our Team</Link>
        </div>
      </div>
    </section>
  );
}
