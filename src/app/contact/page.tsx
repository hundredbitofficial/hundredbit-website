import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { SITE, waLink } from "@/data/site";
import { meta } from "@/lib/seo";
export const metadata = meta("Contact Hundred Bit", "Tell us about your project. Hundred Bit will explore how we can help.", "/contact");
export default function Contact() {
  return (
    <>
      <PageHero title="Let's Build Something Exceptional." text="Have an idea, a business challenge, or a project in mind? Tell us about it. We'd love to explore how Hundred Bit can help." crumbs={[{ label: "Contact" }]} />
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8"><ContactForm /></div>
          <aside className="space-y-6 lg:col-span-4">
            <h2 className="text-xl font-semibold">Prefer to talk directly?</h2>
            <a href={waLink()} className="btn btn-primary">WhatsApp Enquiry</a>
            <ul className="space-y-2 text-slate">
              {SITE.email && <li><a href={`mailto:${SITE.email}`} className="hover:text-electric">{SITE.email}</a></li>}
              {SITE.phone && <li><a href={`tel:${SITE.phone}`} className="hover:text-electric">{SITE.phone}</a></li>}
              {SITE.location && <li>{SITE.location}</li>}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
