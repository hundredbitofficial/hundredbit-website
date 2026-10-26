import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: "Hundred Bit designs and develops websites, web applications, custom software and digital solutions that help businesses grow.",
  openGraph: { siteName: SITE.name, type: "website", images: ["/brand/hundredbit-logo.png"] },
  icons: { icon: "/icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
        <JsonLd data={[
          { "@context": "https://schema.org", "@type": "Organization", name: SITE.name, url: SITE.url, logo: `${SITE.url}/brand/hundredbit-logo.png`, slogan: SITE.tagline, ...(SITE.email ? { email: SITE.email } : {}) },
          { "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.url },
        ]} />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
