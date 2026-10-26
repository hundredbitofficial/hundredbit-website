import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import JsonLd from "@/components/JsonLd";
import { posts, getPost } from "@/data/posts";
import { meta } from "@/lib/seo";
import { SITE } from "@/data/site";
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }: { params: { slug: string } }) { const p = getPost(params.slug); return p ? meta(p.title, p.excerpt, `/insights/${p.slug}`) : {}; }
export default function Post({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug); if (!p) notFound();
  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 2);
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: p.title, description: p.excerpt, datePublished: p.date, author: { "@type": "Organization", name: p.author }, publisher: { "@type": "Organization", name: SITE.name }, mainEntityOfPage: `${SITE.url}/insights/${p.slug}` }} />
      <PageHero title={p.title} text={`${p.category} · ${new Date(p.date).toLocaleDateString("en-IN", { dateStyle: "long" })} · ${p.readMinutes} min read`} crumbs={[{ label: "Insights", href: "/insights" }, { label: p.title }]} />
      <Section tone="white"><article className="mx-auto max-w-2xl space-y-6 text-lg leading-9 text-charcoal/85">{p.body.map((t, i) => <p key={i}>{t}</p>)}</article>
        <div className="mx-auto mt-16 max-w-2xl border-t border-charcoal/10 pt-8"><h2 className="font-semibold">Related articles</h2><ul className="mt-3 space-y-2">{related.map((r) => <li key={r.slug}><Link className="text-electric hover:underline" href={`/insights/${r.slug}`}>{r.title}</Link></li>)}</ul></div>
      </Section>
    </>
  );
}
