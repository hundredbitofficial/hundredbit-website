export const SITE = {
  name: "Hundred Bit",
  tagline: "Technology That Moves Your Business Forward.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hundredbit.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  location: process.env.NEXT_PUBLIC_LOCATION ?? "",
  social: {
    LinkedIn: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
    Instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    GitHub: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
  } as Record<string, string>,
};
export const WA_MESSAGE = "Hello Hundred Bit, I would like to discuss a project. Please let me know how we can get started.";
export const waLink = () => SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(WA_MESSAGE)}` : "/contact";

export const NAV = [
  { label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" }, { label: "Our Work", href: "/work" },
  { label: "Insights", href: "/insights" }, { label: "Contact", href: "/contact" },
];
// Set to false to hide the testimonial section until genuine, approved feedback is added.
export const SHOW_PLACEHOLDER_TESTIMONIALS = true;
