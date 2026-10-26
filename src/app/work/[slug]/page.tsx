import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import Mockup from "@/components/Mockup";
import CTA from "@/components/CTA";
import { visibleProjects, getProject } from "@/data/projects";
import { meta } from "@/lib/seo";
export const generateStaticParams = () => visibleProjects().map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }: { params: { slug: string } }) { const p = getProject(params.slug); return p ? meta(`${p.title} Case Study`, p.description, `/work/${p.slug}`) : {}; }
export default function Case({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug); if (!p) notFound();
  return (
    <>
      <PageHero title={p.title} text={p.description} crumbs={[{ label: "Our Work", href: "/work" }, { label: p.title }]} />
      <Section tone="white">
        <dl className="grid gap-6 border-b border-charcoal/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {[["Client", p.client], ["Industry", p.industry], ["Category", p.category], ["Status", p.status === "live" ? "Live" : p.status === "in-progress" ? "In progress" : "Coming soon"]].map(([k, v]) => (<div key={k}><dt className="text-sm text-slate">{k}</dt><dd className="mt-1 font-semibold">{v}</dd></div>))}
        </dl>
        <div className="mt-12"><Mockup project={p} priority sizes="100vw" /></div>
        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          <div><h2 className="text-2xl font-semibold">The challenge</h2><p className="mt-4 lead">{p.challenge}</p></div>
          <div><h2 className="text-2xl font-semibold">The solution</h2><p className="mt-4 lead">{p.solution}</p></div>
          <div><h2 className="text-2xl font-semibold">Outcome</h2><p className="mt-4 lead">{p.outcome}</p></div>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div><h2 className="text-2xl font-semibold">Services delivered</h2><ul className="mt-4 flex flex-wrap gap-2">{p.services.map((s) => <li key={s} className="rounded-full bg-mist px-3 py-1 text-sm text-royal">{s}</li>)}</ul></div>
          <div><h2 className="text-2xl font-semibold">Technology</h2><ul className="mt-4 flex flex-wrap gap-2">{p.technologies.map((s) => <li key={s} className="rounded-full border border-charcoal/15 px-3 py-1 text-sm">{s}</li>)}</ul></div>
        </div>
        {p.imageReady && p.gallery.length > 0 && (
          <div className="mt-16"><h2 className="text-2xl font-semibold">Project gallery</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">{p.gallery.map((g, i) => <Image key={g} src={g} alt={`${p.title} screenshot ${i + 1}`} width={1440} height={900} loading="lazy" className="rounded-xl border border-charcoal/10" />)}</div></div>
        )}
        <div className="mt-16 flex flex-wrap gap-4">
          {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Live Website</a>}
          <Link href="/services" className="btn btn-ghost-dark">Explore Related Services</Link>
          <Link href="/contact" className="btn btn-ghost-dark">Start a Similar Project</Link>
        </div>
      </Section>
      <CTA />
    </>
  );
}
