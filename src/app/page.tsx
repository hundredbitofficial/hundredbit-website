import Link from "next/link";
import Section, { Heading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import HeroVisual from "@/components/HeroVisual";
import ProjectShowcase from "@/components/ProjectShowcase";
import IndustryExplorer from "@/components/IndustryExplorer";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Mockup from "@/components/Mockup";
import { services } from "@/data/services";
import { featuredProjects, visibleProjects } from "@/data/projects";
import { faqs } from "@/data/faq";
import { testimonials, placeholderTestimonials } from "@/data/testimonials";
import { SHOW_PLACEHOLDER_TESTIMONIALS } from "@/data/site";
import { meta } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = meta("Technology That Moves Your Business Forward", "Hundred Bit builds high-performance websites, web applications and custom software for ambitious businesses in India and worldwide.");

const why = [
  ["Business-first thinking", "We understand your business objectives before designing the solution."],
  ["Tailored technology", "Every solution is designed around your requirements rather than forcing your business into a generic template."],
  ["Premium user experiences", "We combine functionality, design, and usability to create digital experiences that stand out."],
  ["Scalable architecture", "We build solutions that can evolve as your business grows."],
  ["Transparent collaboration", "We maintain clear communication throughout the project lifecycle."],
  ["Long-term partnership", "We support your digital journey beyond the initial launch."],
];
const caps = ["Web Development", "Custom Software", "Digital Transformation", "Data & Analytics", "Business Automation"];
const stack: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "Astro", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "Python", "FastAPI", "PHP"],
  Database: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  "Cloud & Deployment": ["AWS", "Vercel", "Cloudflare", "Railway"],
  "Analytics & BI": ["Power BI", "Python", "SQL", "Data Analytics"],
  Integrations: ["Payment Gateways", "WhatsApp", "Email Services", "Google Services", "Third-Party APIs"],
};

export default function Home() {
  const feats = featuredProjects();
  const t = testimonials.filter((x) => x.verified);
  const tItems = t.length ? t : SHOW_PLACEHOLDER_TESTIMONIALS ? placeholderTestimonials : [];
  return (
    <>
      <JsonLd data={services.map((s) => ({ "@context": "https://schema.org", "@type": "Service", name: s.title, description: s.short, provider: { "@type": "Organization", name: "Hundred Bit" } }))} />
      {/* HERO — dark cinematic */}
      <section className="relative overflow-hidden bg-midnight pb-20 pt-32 text-white sm:pt-40 lg:pb-28">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div className="absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-electric/20 blur-[120px]" aria-hidden />
        <div className="wrap relative grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.22em] text-electric sm:text-sm">INDEPENDENT DIGITAL SOLUTIONS &amp; TECHNOLOGY PARTNER</p>
            <h1 className="h-hero mt-6">Technology That Moves Your Business Forward.</h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">From high-performance websites to intelligent software solutions, Hundred Bit helps ambitious businesses transform ideas into powerful digital experiences.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">Start Your Project</Link>
              <Link href="/work" className="btn btn-ghost">Explore Our Work</Link>
            </div>
            <p className="mt-10 text-sm text-white/50">Websites. Software. Digital Experiences. Built for Growth.</p>
          </div>
          <div className="lg:col-span-5"><HeroVisual /></div>
        </div>
      </section>

      {/* TRUST */}
      <Section tone="white">
        <Reveal><Heading title="Your Vision. Our Technology. One Powerful Outcome." text="We partner with businesses to create digital solutions that solve real problems, improve operations, and unlock new opportunities." /></Reveal>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-5">
          {caps.map((c) => (<li key={c} className="bg-white p-7"><span className="mb-5 block h-2 w-8 rounded-full bg-electric" /><p className="font-semibold">{c}</p></li>))}
        </ul>
      </Section>

      {/* ABOUT */}
      <Section tone="mist">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="h-section">More Than Developers. Your Technology Partners.</h2>
            <div className="mt-6 space-y-4 lead">
              <p>At Hundred Bit, we believe technology should do more than simply exist. It should create meaningful business value.</p>
              <p>We work with businesses to understand their goals, identify opportunities, and build digital solutions that are functional, scalable, and thoughtfully designed.</p>
              <p>From the first idea to deployment and ongoing support, we focus on delivering technology that makes a difference.</p>
            </div>
            <Link href="/about" className="btn btn-primary mt-8">Discover Hundred Bit</Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="[transform:perspective(1400px)_rotateY(-8deg)_rotateX(3deg)]"><Mockup project={visibleProjects()[1]} /></div>
              <div className="absolute -bottom-8 -left-4 hidden w-40 sm:block [transform:perspective(1000px)_rotateY(10deg)]"><Mockup project={visibleProjects()[0]} sizes="160px" /></div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* SERVICES */}
      <Section tone="white">
        <Reveal><Heading title="Digital Solutions Designed Around Your Business." text="Every business has different challenges. We create technology solutions tailored to your objectives, customers, and long-term vision." /></Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-2 md:grid-cols-2">
          {services.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group relative block border-t border-charcoal/10 py-9 transition hover:bg-mist/60 md:px-4">
              <span className="absolute left-0 top-0 h-px w-0 bg-electric transition-all duration-500 group-hover:w-full" />
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 max-w-md text-slate leading-7">{s.short}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-royal">{s.features.slice(0, 4).map((f) => <li key={f}>{f}</li>)}</ul>
                  <p className="mt-5 text-sm font-semibold text-electric">{s.cta} <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span></p>
                </div>
                <span className="text-4xl font-semibold text-charcoal/10 transition group-hover:text-electric/30" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section tone="mist" id="projects">
        <Reveal><Heading title="Digital Experiences We've Brought to Life." text="Explore selected projects where technology, design, and business objectives come together." /></Reveal>
        <div className="mt-16"><ProjectShowcase items={feats} /></div>
        <Link href="/work" className="btn btn-ghost-dark mt-20">See all work</Link>
      </Section>

      {/* WHY */}
      <Section tone="navy">
        <Reveal><Heading dark title="Built Around Your Business. Designed for What's Next." /></Reveal>
        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {why.map(([t, d]) => (<div key={t} className="border-l border-electric/50 pl-6"><h3 className="text-xl font-semibold">{t}</h3><p className="mt-3 leading-7 text-white/65">{d}</p></div>))}
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section tone="white">
        <Reveal><Heading title="Technology for Every Industry." text="Select an industry to see the kind of solutions we build." /></Reveal>
        <div className="mt-12"><IndustryExplorer /></div>
      </Section>

      {/* PROCESS */}
      <Section tone="mist">
        <Reveal><Heading title="From First Conversation to Final Launch." /></Reveal>
        <div className="mt-16"><Process /></div>
      </Section>

      {/* STACK */}
      <Section tone="white">
        <Reveal><Heading title="Modern Technology. Reliable Foundations." text="We select technologies based on the needs of your project, prioritizing performance, maintainability, security, and scalability." /></Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {Object.entries(stack).map(([k, v]) => (
            <div key={k}>
              <h3 className="text-sm font-semibold text-slate">{k}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">{v.map((x) => <li key={x} className="rounded-full border border-charcoal/12 px-4 py-1.5 text-sm transition hover:border-electric hover:text-electric">{x}</li>)}</ul>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      {tItems.length > 0 && (
        <Section tone="navy">
          <Reveal><Heading dark title="Trusted Through Collaboration. Remembered for Results." text="Every successful project begins with a strong partnership." /></Reveal>
          <div className="mt-12"><Testimonials items={tItems} dark /></div>
        </Section>
      )}

      {/* FAQ */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><Heading title="Questions Before We Build Something Great?" /></div>
          <div className="lg:col-span-8"><FAQ items={faqs} /></div>
        </div>
      </Section>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />

      <CTA />
    </>
  );
}
