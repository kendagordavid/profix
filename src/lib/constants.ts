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
    image: "/images/appliances/washing-machine.jpg",
  },
  {
    name: "Refrigerators & Freezers",
    description: "Cooling, gas refill, compressor repair",
    image: "/images/appliances/refrigerator.jpg",
  },
  {
    name: "Cookers & Ovens",
    description: "Gas, electric & built-in repairs",
    image: "/images/appliances/cooker-oven.jpg",
  },
  {
    name: "Dishwashers",
    description: "Leak fixes, pump & motor repair",
    image: "/images/appliances/dishwasher.jpg",
  },
  {
    name: "Microwaves",
    description: "Heating, door & control repairs",
    image: "/images/appliances/microwave.jpg",
  },
  {
    name: "Dryers",
    description: "Drum, heating & vent issues",
    image: "/images/appliances/dryer.jpg",
  },
  {
    name: "Display Chillers",
    description: "Commercial cooling solutions",
    image: "/images/appliances/display-chiller.jpg",
  },
  {
    name: "More Appliances",
    description: "TVs, AC units, water dispensers & more",
    image: "/images/appliances/more-appliances.jpg",
  },
] as const;

export const SERVICES = [
  {
    title: "Repair",
    description: "We fix all faults fast & effectively.",
    icon: "wrench",
    color: "bg-orange-500",
    image: "/images/services/repair.jpg",
  },
  {
    title: "Installation",
    description: "Professional installations done right.",
    icon: "settings",
    color: "bg-navy-700",
    image: "/images/services/installation.jpg",
  },
  {
    title: "Maintenance",
    description: "Keep your appliances running longer.",
    icon: "tool",
    color: "bg-emerald-600",
    image: "/images/services/maintenance.jpg",
  },
  {
    title: "Consultation",
    description: "Expert advice before you buy or upgrade.",
    icon: "message",
    color: "bg-violet-600",
    image: "/images/services/consultation.jpg",
  },
  {
    title: "Recovery",
    description: "We restore damaged or neglected appliances.",
    icon: "refresh",
    color: "bg-rose-600",
    image: "/images/services/recovery.jpg",
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
