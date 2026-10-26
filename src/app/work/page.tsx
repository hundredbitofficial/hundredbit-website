import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import WorkGrid from "@/components/WorkGrid";
import CTA from "@/components/CTA";
import { visibleProjects } from "@/data/projects";
import { meta } from "@/lib/seo";
export const metadata = meta("Our Work", "Selected websites, web applications and software projects delivered by Hundred Bit.", "/work");
export default function Work() {
  return (
    <>
      <PageHero title="Selected Work. Meaningful Digital Experiences." crumbs={[{ label: "Our Work" }]} />
      <Section tone="white"><WorkGrid items={visibleProjects()} /></Section>
      <CTA />
    </>
  );
}
