export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  image: string;
  summary: string;
};

export const SERVICES: Service[] = [
  {
    slug: "repair",
    title: "Repair",
    description: "We fix all faults fast & effectively.",
    icon: "wrench",
    color: "bg-orange-500",
    image: "/images/services/repair.jpg",
    summary:
      "Same-day diagnosis and repair for home and commercial appliances across Nairobi, with genuine parts and a 90-day warranty.",
  },
  {
    slug: "installation",
    title: "Installation",
    description: "Professional installations done right.",
    icon: "settings",
    color: "bg-navy-700",
    image: "/images/services/installation.jpg",
    summary:
      "Safe, code-aware installation for cookers, AC units, laundry appliances, and commercial equipment.",
  },
  {
    slug: "maintenance",
    title: "Preventive Maintenance",
    description: "Keep your appliances running longer.",
    icon: "tool",
    color: "bg-emerald-600",
    image: "/images/services/maintenance.jpg",
    summary:
      "Preventive servicing to reduce breakdowns, improve efficiency, and extend appliance life.",
  },
  {
    slug: "consultation",
    title: "Consultation",
    description: "Expert advice before you buy or upgrade.",
    icon: "message",
    color: "bg-navy-600",
    image: "/images/services/consultation.jpg",
    summary:
      "Honest guidance on repairs vs replacement, sizing, and brand choice before you spend.",
  },
  {
    slug: "recovery",
    title: "Recovery",
    description: "We restore damaged or neglected appliances.",
    icon: "refresh",
    color: "bg-navy-500",
    image: "/images/services/recovery.jpg",
    summary:
      "Deep cleaning, part replacement, and restoration for neglected or flood-damaged units.",
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
