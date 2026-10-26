import Link from "next/link";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { industries } from "@/data/industries";
import { meta } from "@/lib/seo";
export const metadata = meta("Industries We Serve", "Websites, software and digital solutions for healthcare, hospitality, retail, jewellery, manufacturing, education, real estate, finance, professional services and startups.", "/industries");
export default function Industries() {
  return (
    <>
      <PageHero title="Technology for Every Industry." text="Different industries face different digital challenges. Here is how we approach each." crumbs={[{ label: "Industries" }]} />
      <Section tone="white">
        {industries.map((n, i) => (
          <article key={n.slug} id={n.slug} className={`grid gap-8 border-t border-charcoal/10 py-14 lg:grid-cols-12 ${i % 2 ? "" : ""}`}>
            <h2 className="text-3xl font-semibold tracking-tight lg:col-span-3">{n.name}</h2>
            <div className="grid gap-8 md:grid-cols-3 lg:col-span-9">
              <div><h3 className="text-sm font-semibold text-electric">Challenge</h3><p className="mt-2 text-slate leading-7">{n.challenge}</p></div>
              <div><h3 className="text-sm font-semibold text-electric">Digital opportunity</h3><p className="mt-2 text-slate leading-7">{n.opportunity}</p></div>
              <div><h3 className="text-sm font-semibold text-electric">Business benefit</h3><p className="mt-2 text-slate leading-7">{n.benefit}</p></div>
              <div className="md:col-span-3"><h3 className="text-sm font-semibold text-electric">Relevant solutions</h3><ul className="mt-3 flex flex-wrap gap-2">{n.solutions.map((s) => <li key={s} className="rounded-full bg-mist px-3 py-1 text-sm text-royal">{s}</li>)}</ul>
                <Link href="/contact" className="mt-5 inline-block text-sm font-semibold text-electric hover:underline">Discuss a {n.name} project →</Link></div>
            </div>
          </article>
        ))}
      </Section>
      <CTA />
    </>
  );
}
