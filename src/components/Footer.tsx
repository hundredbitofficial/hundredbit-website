import Link from "next/link";
import Logo from "./Logo";
import { NAV, SITE } from "@/data/site";
import { services } from "@/data/services";
export default function Footer() {
  const socials = Object.entries(SITE.social).filter(([, v]) => v);
  return (
    <footer className="bg-navy text-white/70">
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-7">{SITE.tagline}</p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold text-white">Quick links</h2>
          <ul className="space-y-2 text-sm">{NAV.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold text-white">Services</h2>
          <ul className="space-y-2 text-sm">{services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-white">{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold text-white">Contact</h2>
          <ul className="space-y-2 text-sm">
            {SITE.email && <li>Email: <a className="hover:text-white" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>}
            {SITE.phone && <li>Phone: <a className="hover:text-white" href={`tel:${SITE.phone}`}>{SITE.phone}</a></li>}
            {SITE.whatsapp && <li>WhatsApp: <a className="hover:text-white" href={`https://wa.me/${SITE.whatsapp}`}>+{SITE.whatsapp}</a></li>}
            {SITE.location && <li>{SITE.location}</li>}
            {!SITE.email && !SITE.phone && !SITE.whatsapp && <li><Link href="/contact" className="hover:text-white">Send us an enquiry</Link></li>}
          </ul>
          {socials.length > 0 && <ul className="mt-5 flex gap-4 text-sm">{socials.map(([k, v]) => <li key={k}><a href={v} target="_blank" rel="noopener noreferrer" className="hover:text-white">{k}</a></li>)}</ul>}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>© 2026 Hundred Bit. All rights reserved.</p>
          <p className="flex gap-5"><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link><Link href="/terms-and-conditions" className="hover:text-white">Terms and Conditions</Link></p>
        </div>
      </div>
    </footer>
  );
}
