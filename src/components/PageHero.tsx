import Link from "next/link";
export default function PageHero({ title, text, crumbs }: { title: string; text?: string; crumbs?: { label: string; href?: string }[] }) {
  return (
    <header className="relative overflow-hidden bg-midnight pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-electric/25 blur-3xl" aria-hidden />
      <div className="wrap relative">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
            <ol className="flex flex-wrap gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              {crumbs.map((c) => (<li key={c.label} className="flex gap-2"><span aria-hidden>/</span>{c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : <span aria-current="page" className="text-white">{c.label}</span>}</li>))}
            </ol>
          </nav>
        )}
        <h1 className="h-section max-w-4xl" style={{ fontSize: "clamp(2.2rem,5vw,4.5rem)" }}>{title}</h1>
        {text && <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">{text}</p>}
      </div>
    </header>
  );
}
