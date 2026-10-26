import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { services } from "@/data/services";
import { visibleProjects } from "@/data/projects";
import { posts } from "@/data/posts";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = ["", "/about", "/services", "/industries", "/work", "/insights", "/testimonials", "/contact", "/privacy-policy", "/terms-and-conditions"];
  return [...base, ...services.map((s) => `/services/${s.slug}`), ...visibleProjects().map((p) => `/work/${p.slug}`), ...posts.map((p) => `/insights/${p.slug}`)]
    .map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date() }));
}
