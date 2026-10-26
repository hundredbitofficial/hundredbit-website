export type Project = {
  slug: string; title: string; client: string; category: string; industry: string;
  description: string; featured: boolean; status: "live" | "in-progress" | "coming-soon";
  technologies: string[]; services: string[];
  coverImage: string; mobileImage?: string; gallery: string[];
  imageReady: boolean; // flip to true after adding real screenshots to /public/projects/<folder>/
  liveUrl?: string; caseStudyUrl?: string; hidden?: boolean;
  challenge: string; solution: string; outcome: string; timeline?: string;
};

export const PROJECT_CATEGORIES = ["Websites", "Web Applications", "E-commerce", "Custom Software", "UI/UX Design", "Data Analytics"] as const;

// To add a project: append an object here, drop screenshots in /public/projects/<folder>/, set imageReady: true.
export const projects: Project[] = [
  {
    slug: "tarini925", title: "Tarini925", client: "Tarini925", category: "E-commerce", industry: "Jewellery / E-commerce",
    description: "A digital jewellery experience designed to showcase elegant silver jewellery and create a premium online brand presence.",
    featured: true, status: "live", technologies: ["Web", "E-commerce"], services: ["Website Development", "E-commerce Development", "UI/UX Design"],
    coverImage: "/projects/tarini925/desktop.png", mobileImage: "/projects/tarini925/mobile.png", gallery: [], imageReady: true,
    liveUrl: "https://tarini925.com/",
    challenge: "A jewellery brand needs its pieces to look as refined online as they do in person, while keeping browsing simple.",
    solution: "A clean, product-led experience that gives the jewellery room to stand out and presents the brand with a premium tone.",
    outcome: "The website is live at tarini925.com. Add verified results here once the client approves sharing them.",
  },
  {
    slug: "kssb-global", title: "KSSB Global", client: "KSSB Global", category: "Websites", industry: "Corporate / Business Services",
    description: "A corporate digital experience designed to present the brand, communicate its business offerings, and establish a professional online presence.",
    featured: true, status: "live", technologies: ["Web", "Corporate Website"], services: ["Website Development", "UI/UX Design"],
    coverImage: "/projects/kssb-global/desktop.png", mobileImage: "/projects/kssb-global/mobile.png", gallery: [], imageReady: true,
    liveUrl: "https://kssbglobal.com/",
    challenge: "A business needed a credible online home that explains clearly what it does to prospective partners and customers.",
    solution: "A structured corporate website presenting the company, its offerings and its contact paths in a professional, easy-to-scan layout.",
    outcome: "The website is live at kssbglobal.com. Add verified results here once the client approves sharing them.",
  },
  {
    slug: "thara-thai-spa", title: "Thara Thai Spa", client: "Thara Thai Spa", category: "Websites", industry: "Wellness / Hospitality",
    description: "A premium digital experience for a wellness brand, designed to communicate its services, atmosphere, and customer experience.",
    featured: true, status: "in-progress", technologies: ["Web"], services: ["Website Development", "UI/UX Design"],
    coverImage: "/projects/thara-thai-spa/desktop.png", gallery: [], imageReady: true,
    liveUrl: undefined, // TODO: add the verified live URL and set status to "live"
    challenge: "A wellness brand needs its calm, premium atmosphere to come through online and make enquiries effortless.",
    solution: "An atmosphere-led website presenting treatments, ambience and contact options with generous space and soft styling.",
    outcome: "Update this section with verified launch details once the project is live.",
  },
  {
    slug: "pg-management-system", title: "PG Management System", client: "Client project", category: "Custom Software", industry: "Real Estate / Property Management",
    description: "A management solution designed to simplify resident management, room allocation, payment tracking, and administrative operations.",
    featured: true, status: "in-progress", technologies: ["Web Application", "Database"], services: ["Custom Software Development", "Web Application Development", "Business Automation"],
    coverImage: "/projects/pg-management/dashboard.png",
    gallery: ["/projects/pg-management/residents.png", "/projects/pg-management/payments.png", "/projects/pg-management/reports.png"],
    imageReady: true,
    challenge: "Running a paying-guest property involves residents, rooms, rent collection and reporting, often tracked across notebooks and spreadsheets.",
    solution: "One system for resident records, room allocation, payment tracking and administrative reports, designed around how property owners actually work.",
    outcome: "Update with the verified project state, demo URL and any approved results.",
  },
  // Empty slots for future projects: fill in and remove `hidden`.
  { slug: "future-project-1", title: "Future Project", client: "", category: "Websites", industry: "", description: "", featured: false, status: "coming-soon", technologies: [], services: [], coverImage: "", gallery: [], imageReady: false, hidden: true, challenge: "", solution: "", outcome: "" },
  { slug: "future-project-2", title: "Future Project", client: "", category: "Web Applications", industry: "", description: "", featured: false, status: "coming-soon", technologies: [], services: [], coverImage: "", gallery: [], imageReady: false, hidden: true, challenge: "", solution: "", outcome: "" },
];
export const visibleProjects = () => projects.filter((p) => !p.hidden);
export const featuredProjects = () => visibleProjects().filter((p) => p.featured);
export const getProject = (slug: string) => visibleProjects().find((p) => p.slug === slug);
export const projectLink = (p: Project) => p.caseStudyUrl ?? `/work/${p.slug}`;
