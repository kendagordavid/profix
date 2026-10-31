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
  yearsInBusiness: 5,
  jobsCompleted: 2000,
  brandsServiced: 40,
  // Leave a profile URL empty to hide its icon.
  social: {
    facebook: "",
    instagram: "",
    tiktok: "",
    youtube: "",
  },
} as const;

export const APPLIANCES_WE_HANDLE = [
  {
    title: "Refrigeration",
    image: "/images/appliances/refrigerator.jpg",
    items: ["Refrigerators", "Freezers", "Fridge-freezers", "Display chillers"],
    href: "/appliances/refrigerators",
  },
  {
    title: "Residential Air Conditioning",
    image: null,
    items: ["Split ACs", "Inverter split ACs", "Window ACs", "Portable ACs", "Multi-split systems"],
    href: "/appliances/air-conditioners",
  },
  {
    title: "Washing & Drying",
    image: "/images/appliances/washing-machine.jpg",
    items: ["Washing machines", "Dryers", "Washer-dryers"],
    href: "/appliances/washing-machines",
  },
  {
    title: "Cooking",
    image: "/images/appliances/cooker-oven.jpg",
    items: ["Cookers", "Ovens", "Hobs"],
    href: "/appliances/cookers-ovens",
  },
  {
    title: "Cleaning",
    image: "/images/appliances/dishwasher.jpg",
    items: ["Dishwashers"],
    href: "/appliances/dishwashers",
  },
  {
    title: "Other Appliances",
    image: "/images/appliances/microwave.jpg",
    items: ["Microwaves", "Water dispensers", "Other supported"],
    href: "/appliances",
  },
  {
    title: "Commercial Appliances",
    image: "/images/appliances/display-chiller.jpg",
    items: ["Commercial refrigeration", "Commercial AC & HVAC", "Commercial cooking", "Commercial laundry"],
    href: "/commercial",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What appliances does PROfix repair?",
    answer:
      "We repair refrigerators, washing machines, cookers, ovens, dishwashers, microwaves, dryers, air conditioners, display chillers, and more — for both homes and businesses across Kenya.",
  },
  {
    question: "Which areas in Nairobi do you serve?",
    answer:
      "We cover all of Nairobi County including Westlands, Karen, Kilimani, Lavington, Parklands, Eastleigh, South C, Langata, Kileleshwa, Kasarani, Roysambu, Embakasi, Buruburu, Rongai, and surrounding areas in Kiambu and Machakos.",
  },
  {
    question: "How quickly can a technician arrive?",
    answer:
      "We offer same-day service for most repairs in Nairobi. In many areas, a technician can arrive within 2–4 hours of booking. Call or WhatsApp us to confirm availability.",
  },
  {
    question: "How much does appliance repair cost?",
    answer:
      "Costs vary by appliance and fault. Typical repairs range from KSh 1,500 to KSh 12,000. We diagnose the fault and give you a transparent quote before any work begins — no obligation to proceed.",
  },
  {
    question: "Do you use genuine spare parts?",
    answer:
      "Yes. PROfix uses genuine OEM and original spare parts for all repairs, ensuring durability and optimal performance after every job.",
  },
  {
    question: "Is there a warranty on repairs?",
    answer:
      "All repairs come with a 90-day warranty on both parts and labour. Commercial maintenance plans offer extended coverage for businesses.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept M-Pesa, cash, and bank transfer. Payment is made after the repair is complete and you are fully satisfied with the work.",
  },
  {
    question: "Do you offer maintenance plans for businesses?",
    answer:
      "Yes. We offer annual maintenance contracts for restaurants, hotels, and commercial clients — covering routine servicing, priority call-outs, and discounted repair rates. Contact us for a custom quote.",
  },
  {
    question: "Are your technicians certified?",
    answer:
      "All PROfix technicians are trained, certified, and experienced in appliance repair, with ongoing training on new models and technologies.",
  },
  {
    question: "Can you repair appliances outside Nairobi?",
    answer:
      "Yes. We also serve Kiambu, Ruiru, Ruaka, Thika Road, Syokimau, Kitengela, and parts of Machakos. A call-out fee may apply outside central Nairobi — we confirm it with you before dispatch.",
  },
] as const;

export const PACKAGES = [
  {
    title: "Diagnosis & Quote",
    price: "From KSh 1,500",
    description: "On-site fault assessment with a transparent quote before any work begins.",
    features: ["On-site diagnosis", "Clear KES pricing", "No obligation to proceed"],
    highlighted: false,
  },
  {
    title: "Standard Repair",
    price: "From KSh 3,500",
    description: "Full repair with genuine parts and our 90-day parts & labour warranty.",
    features: ["Genuine spare parts", "90-day warranty", "Same-day service"],
    highlighted: true,
  },
  {
    title: "Commercial Care Plan",
    price: "From KSh 10,000/yr",
    description: "Annual maintenance for businesses — priority call-outs and discounted rates.",
    features: ["Scheduled servicing", "Priority response", "Discounted repairs"],
    highlighted: false,
  },
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

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Appliances", href: "/appliances" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Knowledge Centre", href: "/blog" },
] as const;

export const WHO_WE_SERVE = [
  { icon: "home", label: "Homes & Individuals", href: "/book" },
  { icon: "user", label: "Landlords", href: "/commercial" },
  { icon: "building", label: "Property Managers", href: "/commercial" },
  { icon: "briefcase", label: "Businesses", href: "/commercial" },
  { icon: "utensils", label: "Hotels & Restaurants", href: "/commercial" },
  { icon: "landmark", label: "Offices & Institutions", href: "/commercial" },
  { icon: "buildings", label: "Developers & Projects", href: "/projects" },
] as const;

export const LIFECYCLE = [
  { icon: "users", label: "Consult", description: "Choose the right appliance.", href: "/services/consultation" },
  { icon: "settings", label: "Install", description: "Install correctly and safely.", href: "/services/installation" },
  { icon: "calendar", label: "Maintain", description: "Keep it operating reliably.", href: "/services/maintenance" },
  { icon: "wrench", label: "Repair", description: "Diagnose and restore faults.", href: "/services/repair" },
  { icon: "recycle", label: "Recover", description: "Repair, restore, reuse or recover.", href: "/services/recovery" },
  { icon: "replace", label: "Replace", description: "When recovery is no longer practical.", href: "/services/consultation" },
] as const;

export const DEVELOPER_SERVICES = [
  "Consultation & specification",
  "Sourcing & delivery coordination",
  "Installation & testing",
  "Commissioning & handover",
  "After-sales support",
] as const;

export const PROJECT_TYPES = [
  "Apartments",
  "Gated communities",
  "Serviced apartments",
  "Hotels",
  "Furnished developments",
  "Offices",
  "Institutions",
] as const;

export const PROJECT_WORKFLOW = [
  "Specify",
  "Source",
  "Deliver",
  "Install",
  "Test",
  "Commission",
  "Handover",
  "After-Sales",
] as const;

export const BUSINESS_SERVICES = [
  "Multi-appliance maintenance",
  "Inspections & scheduled servicing",
  "Emergency repairs",
  "Installation & replacement",
  "Recovery & asset records",
  "Service documentation",
  "Maintenance contracts",
] as const;

export const BUSINESS_AUDIENCES = [
  { icon: "user", label: "Landlords" },
  { icon: "building", label: "Property managers" },
  { icon: "utensils", label: "Hotels & restaurants" },
  { icon: "briefcase", label: "Offices" },
  { icon: "landmark", label: "Institutions" },
  { icon: "store", label: "Businesses" },
] as const;

export const WHY_PROFIX = [
  { icon: "search", title: "Technical Diagnosis", description: "We find the real problem." },
  { icon: "settings", title: "Professional Installation", description: "Safe and verified." },
  { icon: "shield", title: "Multi-Brand Capability", description: "All major brands." },
  { icon: "file", title: "Documented Service", description: "Full service records." },
  { icon: "check", title: "Preventive Approach", description: "Fix before it fails." },
  { icon: "headset", title: "After-Sales Support", description: "We're with you." },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Projects",
    links: [
      { label: "Developers", href: "/projects" },
      { label: "Property Managers", href: "/commercial" },
      { label: "Business Solutions", href: "/commercial" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Knowledge Centre", href: "/blog" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;
