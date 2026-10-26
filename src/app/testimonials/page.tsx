import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { testimonials, placeholderTestimonials } from "@/data/testimonials";
import { SHOW_PLACEHOLDER_TESTIMONIALS } from "@/data/site";
import { meta } from "@/lib/seo";
export const metadata = meta("Client Testimonials", "What clients say about working with Hundred Bit.", "/testimonials");
export default function Page() {
  const real = testimonials.filter((t) => t.verified);
  const items = real.length ? real : SHOW_PLACEHOLDER_TESTIMONIALS ? placeholderTestimonials : [];
  return (
    <>
      <PageHero title="Built on Trust. Strengthened by Collaboration." crumbs={[{ label: "Testimonials" }]} />
      <Section tone="white">
        {items.length ? <Testimonials items={items} /> : <p className="lead">Client testimonials will appear here.</p>}
      </Section>
      <CTA />
    </>
  );
}
