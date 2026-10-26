import Section, { Heading } from "@/components/Section";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { meta } from "@/lib/seo";
export const metadata = meta("About Hundred Bit", "Hundred Bit is a technology partner helping businesses turn ideas into meaningful digital solutions.", "/about");
const values = ["Innovation", "Integrity", "Quality", "Collaboration", "Customer Focus", "Continuous Improvement"];
const approach = [["Understanding the business", "We start with your goals, customers and constraints."], ["Designing the right solution", "Structure, flows and interface shaped around real use."], ["Building with quality", "Modern, maintainable code that is tested before it ships."], ["Delivering with transparency", "Clear updates and no surprises."], ["Supporting long-term growth", "Maintenance and improvements after launch."]];
export default function About() {
  return (
    <>
      <PageHero title="Building Digital Experiences That Move Businesses Forward." text="Hundred Bit is a technology partner focused on helping businesses transform ideas into meaningful digital solutions." crumbs={[{ label: "About" }]} />
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12">
          <h2 className="h-section lg:col-span-5">Our story</h2>
          <div className="space-y-5 lead lg:col-span-7">
            <p>Hundred Bit was built around a simple belief: technology should create value.</p>
            <p>We bring together development, design, and business thinking to help organizations solve challenges, improve operations, and build stronger digital experiences.</p>
            <p>Our approach combines thoughtful planning, modern technology, and a commitment to quality.</p>
            <p>We believe every business deserves digital solutions that are built around its goals.</p>
          </div>
        </div>
      </Section>
      <Section tone="mist">
        <div className="grid gap-12 md:grid-cols-2">
          <div><h2 className="text-3xl font-semibold">Our mission</h2><p className="mt-4 lead">To empower businesses through innovative, reliable, and thoughtfully designed technology solutions.</p></div>
          <div><h2 className="text-3xl font-semibold">Our vision</h2><p className="mt-4 lead">To become a trusted technology partner for businesses seeking meaningful digital transformation.</p></div>
        </div>
      </Section>
      <Section tone="navy">
        <Heading dark title="Our values" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{values.map((v) => <li key={v} className="border-t border-electric/60 pt-5 text-xl font-semibold">{v}</li>)}</ul>
      </Section>
      <Section tone="white">
        <Heading title="Our approach" />
        <ol className="mt-12 grid gap-8 md:grid-cols-5">{approach.map(([t, d], i) => (<li key={t}><span className="text-sm font-semibold text-electric">Step {i + 1}</span><h3 className="mt-2 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm leading-6 text-slate">{d}</p></li>))}</ol>
      </Section>
      <CTA />
    </>
  );
}
