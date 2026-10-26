import Link from "next/link";
import { notFound } from "next/navigation";
import Section, { Heading } from "@/components/Section";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Mockup from "@/components/Mockup";
import JsonLd from "@/components/JsonLd";
import Process from "@/components/Process";
import { services, getService } from "@/data/services";
import { visibleProjects, projectLink } from "@/data/projects";
import { meta } from "@/lib/seo";
import { SITE } from "@/data/site";

export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));
export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getService(params.slug); if (!s) return {};
  return meta(`${s.title} Company`, s.short, `/services/${s.slug}`);
}
export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug); if (!s) notFound();
  const related = visibleProjects().filter((p) => s.relatedCategories.includes(p.category)).slice(0, 2);
  return (
    <>
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "Service", name: s.title, description: s.short, provider: { "@type": "Organization", name: SITE.name, url: SITE.url } },
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.url }, { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` }, { "@type": "ListItem", position: 3, name: s.title }] },
      ]} />
      <PageHero title={s.headline} text={s.short} crumbs={[{ label: "Services", href: "/services" }, { label: s.title }]} />
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div><h2 className="h-section">The challenge</h2><ul className="mt-8 space-y-4">{s.challenges.map((c) => <li key={c} className="border-l-2 border-electric pl-4 text-lg text-slate">{c}</li>)}</ul></div>
          <div><h2 className="h-section">The solution</h2><p className="mt-8 lead">{s.long}</p></div>
        </div>
      </Section>
      <Section tone="mist">
        <div className="grid gap-12 lg:grid-cols-2">
          <div><h2 className="text-3xl font-semibold">Features and deliverables</h2><ul className="mt-6 space-y-3">{s.features.map((f) => <li key={f} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-electric" />{f}</li>)}</ul></div>
          <div><h2 className="text-3xl font-semibold">Business benefits</h2><ul className="mt-6 space-y-3">{s.benefits.map((f) => <li key={f} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-electric" />{f}</li>)}</ul>
            <p className="mt-8 text-sm text-slate"><strong className="text-charcoal">Technologies:</strong> {s.tech.join(", ")}</p>
            <p className="mt-2 text-sm text-slate"><strong className="text-charcoal">Relevant industries:</strong> {s.industries.join(", ")}</p></div>
        </div>
      </Section>
      <Section tone="white"><Heading title="How we work" /><div className="mt-14"><Process /></div></Section>
      {related.length > 0 && (
        <Section tone="mist"><Heading title="Related projects" />
          <div className="mt-10 grid gap-10 md:grid-cols-2">{related.map((p) => (<Link key={p.slug} href={projectLink(p)} className="group block"><Mockup project={p} sizes="(min-width:768px) 50vw, 100vw" /><h3 className="mt-4 text-xl font-semibold group-hover:text-electric">{p.title}</h3><p className="text-sm text-slate">{p.description}</p></Link>))}</div>
        </Section>
      )}
      <Section tone="white"><div className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-4"><Heading title={`${s.title} FAQ`} /></div><div className="lg:col-span-8"><FAQ items={s.faq} /></div></div></Section>
      <CTA />
    </>
  );
}
