export type Testimonial = {
  id: string; clientName: string; designation: string; company: string; testimonial: string;
  photo?: string; projectSlug?: string; verified: boolean;
};
// Add genuine, approved testimonials here with verified: true.
export const testimonials: Testimonial[] = [];

// Clearly labelled design placeholders, shown only while there are no verified testimonials.
export const placeholderTestimonials: Testimonial[] = [
  { id: "p1", clientName: "[Client Name]", designation: "[Designation]", company: "[Company Name]", verified: false,
    testimonial: "[Add genuine client feedback describing the project experience, communication, and quality of delivery.]" },
  { id: "p2", clientName: "[Client Name]", designation: "[Designation]", company: "[Company Name]", verified: false,
    testimonial: "[Add genuine client feedback describing how the delivered solution supported their business objectives.]" },
  { id: "p3", clientName: "[Client Name]", designation: "[Designation]", company: "[Company Name]", verified: false,
    testimonial: "[Add genuine client feedback describing the quality of the design, development, and collaboration.]" },
];
