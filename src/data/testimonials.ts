
export type Testimonial = {
  id: string;
  clientName: string;
  designation: string;
  company: string;
  testimonial: string;
  photo?: string;
  projectSlug?: string;
  verified: boolean;
};

// Add genuine, approved testimonials here with verified: true.
export const testimonials: Testimonial[] = [];

// Sample testimonials for website design and development.
// Replace these with genuine client feedback before publishing.
export const placeholderTestimonials: Testimonial[] = [
  {
    id: "p1",
    clientName: "Rahul Sharma",
    designation: "Founder & CEO",
    company: "Nexora Technologies",
    verified: false,
    projectSlug: "website-development",
    testimonial:
      "Hundred Bit transformed our online presence with a modern, professional website. The design is clean, the experience is smooth, and the team understood exactly what we wanted. Their attention to detail and commitment to quality made the entire process seamless.",
  },
  {
    id: "p2",
    clientName: "Priya Mehta",
    designation: "Brand Founder",
    company: "Tarini925",
    verified: false,
    projectSlug: "tarini925",
    testimonial:
      "The team delivered an elegant e-commerce experience that reflects our brand perfectly. From the product presentation to the overall user experience, every detail was thoughtfully designed to create a premium online shopping experience.",
  },
  {
    id: "p3",
    clientName: "Arjun Reddy",
    designation: "Business Owner",
    company: "Thara Thai Spa",
    verified: false,
    projectSlug: "thara-thai-spa",
    testimonial:
      "Hundred Bit helped us create a professional digital presence for our business. The website showcases our services beautifully, provides a smooth browsing experience, and makes it easier for customers to discover our offerings.",
  },
  {
    id: "p4",
    clientName: "Sneha Kapoor",
    designation: "Product Manager",
    company: "PixelCraft Studio",
    verified: false,
    projectSlug: "ui-ux-design",
    testimonial:
      "Working with Hundred Bit was a great experience. They brought our ideas to life with an intuitive interface, thoughtful design, and a strong focus on usability. The result was a digital experience that feels modern and purposeful.",
  },
  {
    id: "p5",
    clientName: "Vikram Desai",
    designation: "Managing Director",
    company: "Innovate Solutions",
    verified: false,
    projectSlug: "custom-software",
    testimonial:
      "We needed a reliable technology partner who could understand our business requirements and turn them into a functional digital solution. Hundred Bit approached the project with professionalism, technical expertise, and a strong focus on delivering quality.",
  },
  {
    id: "p6",
    clientName: "Ananya Iyer",
    designation: "Founder & CEO",
    company: "KSSB Global",
    verified: false,
    projectSlug: "kssb-global",
    testimonial:
      "Hundred Bit helped us build a professional website that communicates our business clearly. The team's approach to design, development, and responsiveness made the project experience smooth and straightforward.",
  },
];

// Display verified testimonials when available.
// Otherwise, display the sample testimonials.
export const displayedTestimonials: Testimonial[] =
  testimonials.length > 0
    ? testimonials
    : placeholderTestimonials;
