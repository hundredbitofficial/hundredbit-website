import Link from "next/link";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { services } from "@/data/services";
import { meta } from "@/lib/seo";
export const metadata = meta("Software & Web Development Services", "Website development, web applications, custom software, e-commerce, UI/UX design, data analytics, automation and support from Hundred Bit.", "/services");
export default function Services() {
  return (
    <>
      <PageHero title="Digital Solutions Designed Around Your Business." text="Every business has different challenges. We create technology solutions tailored to your objectives, customers, and long-term vision." crumbs={[{ label: "Services" }]} />
      <Section tone="white">
        <div className="space-y-0">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group grid gap-6 border-t border-charcoal/10 py-12 lg:grid-cols-12">
              <h2 className="text-3xl font-semibold tracking-tight lg:col-span-4">{s.title}</h2>
              <div className="lg:col-span-6"><p className="lead">{s.long}</p><ul className="mt-5 flex flex-wrap gap-2">{s.features.map((f) => <li key={f} className="rounded-full bg-mist px-3 py-1 text-sm text-royal">{f}</li>)}</ul></div>
              <p className="font-semibold text-electric lg:col-span-2 lg:text-right">{s.cta} <span className="inline-block transition-transform group-hover:translate-x-1.5">→</span></p>
            </Link>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
