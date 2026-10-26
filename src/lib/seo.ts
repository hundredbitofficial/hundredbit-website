import type { Metadata } from "next";
import { SITE } from "@/data/site";
export function meta(title: string, description: string, path = "/"): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title, description, alternates: { canonical: url },
    openGraph: { title: `${title} | ${SITE.name}`, description, url, siteName: SITE.name, type: "website", images: [{ url: "/brand/hundredbit-logo.png", width: 1024, height: 1024 }] },
    twitter: { card: "summary_large_image", title: `${title} | ${SITE.name}`, description },
  };
}
