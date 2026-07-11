export const SITE = {
  name: "PROfix Appliance Care",
  shortName: "PROfix",
  tagline: "APPLIANCE CARE",
  phone: "0740 405 420",
  phoneHref: "tel:+254740405420",
  whatsapp: "https://wa.me/254740405420",
  email: "info@profixappliancecare.com",
  location: "Nairobi & Surrounding Areas",
  hours: "Mon - Sat: 8:00 AM - 7:00 PM",
  googleRating: 4.8,
  googleReviews: 1200,
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    youtube: "#",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Appliances", href: "#appliances", hasDropdown: true },
  { label: "Packages", href: "#packages", hasDropdown: true },
  { label: "Consultation", href: "#consultation" },
  { label: "Recovery", href: "#recovery" },
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;

export const FEATURES = [
  {
    icon: "clock",
    title: "Same Day Service",
    description: "We are fast & reliable",
  },
  {
    icon: "shield",
    title: "Genuine Parts",
    description: "100% original parts",
  },
  {
    icon: "award",
    title: "Expert Technicians",
    description: "Trained & certified",
  },
  {
    icon: "wallet",
    title: "Affordable Pricing",
    description: "Transparent & fair",
  },
  {
    icon: "badge",
    title: "90 Days Warranty",
    description: "On parts & labour",
  },
  {
    icon: "grid",
    title: "All Major Brands",
    description: "We've got you covered",
  },
] as const;

export const APPLIANCES = [
  {
    name: "Washing Machines",
    description: "Repair, cleaning, installation & more",
    image:
      "https://images.unsplash.com/photo-1626806819282-2caa682b1c99?w=400&h=300&fit=crop",
  },
  {
    name: "Refrigerators & Freezers",
    description: "Cooling, gas refill, compressor repair",
    image:
      "https://images.unsplash.com/photo-1571175443880-fcac74a53627?w=400&h=300&fit=crop",
  },
  {
    name: "Cookers & Ovens",
    description: "Gas, electric & built-in repairs",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
  },
  {
    name: "Dishwashers",
    description: "Leak fixes, pump & motor repair",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b1e1f6b7?w=400&h=300&fit=crop",
  },
  {
    name: "Microwaves",
    description: "Heating, door & control repairs",
    image:
      "https://images.unsplash.com/photo-1585659722983-3f344b1e6e8e?w=400&h=300&fit=crop",
  },
  {
    name: "Dryers",
    description: "Drum, heating & vent issues",
    image:
      "https://images.unsplash.com/photo-1619551330800-9210a6c0a0e0?w=400&h=300&fit=crop",
  },
  {
    name: "Display Chillers",
    description: "Commercial cooling solutions",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=300&fit=crop",
  },
  {
    name: "More Appliances",
    description: "TVs, AC units, water dispensers & more",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
  },
] as const;

export const SERVICES = [
  {
    title: "Repair",
    description: "We fix all faults fast & effectively.",
    icon: "wrench",
    color: "bg-orange-500",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=200&fit=crop",
  },
  {
    title: "Installation",
    description: "Professional installations done right.",
    icon: "settings",
    color: "bg-navy-700",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop",
  },
  {
    title: "Maintenance",
    description: "Keep your appliances running longer.",
    icon: "tool",
    color: "bg-emerald-600",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=200&fit=crop",
  },
  {
    title: "Consultation",
    description: "Expert advice before you buy or upgrade.",
    icon: "message",
    color: "bg-violet-600",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=200&fit=crop",
  },
  {
    title: "Recovery",
    description: "We restore damaged or neglected appliances.",
    icon: "refresh",
    color: "bg-rose-600",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop",
  },
] as const;

export const APPLIANCE_OPTIONS = [
  "Refrigerator",
  "Washing Machine",
  "Cooker / Oven",
  "Dishwasher",
  "Microwave",
  "Dryer",
  "Air Conditioner",
  "Display Chiller",
  "Other",
] as const;

export const BRAND_OPTIONS = [
  "Samsung",
  "LG",
  "Bosch",
  "Whirlpool",
  "Hotpoint",
  "Beko",
  "Haier",
  "Miele",
  "Other",
] as const;

export const ISSUE_OPTIONS = [
  "Not turning on",
  "Not cooling / heating",
  "Leaking water",
  "Strange noise",
  "Installation needed",
  "Maintenance / cleaning",
  "Other",
] as const;
