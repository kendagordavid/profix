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
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    youtube: "#",
  },
} as const;

export const STATS = [
  { value: `${SITE.yearsInBusiness}+`, label: "Years Experience" },
  { value: `${SITE.jobsCompleted.toLocaleString()}+`, label: "Jobs Completed" },
  { value: "90 Days", label: "Repair Warranty" },
  { value: `${SITE.brandsServiced}+`, label: "Brands Served" },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Tell Us the Problem",
    description:
      "Select your appliance, brand, and issue — or message us on WhatsApp. Takes under a minute.",
  },
  {
    step: 2,
    title: "Get a Transparent Quote",
    description:
      "We assess the fault and give you a clear price in KES before any work begins. No surprises.",
  },
  {
    step: 3,
    title: "We Come to You",
    description:
      "A certified technician arrives at your home or business anywhere in Nairobi, usually same day.",
  },
  {
    step: 4,
    title: "Fixed & Guaranteed",
    description:
      "We repair with genuine parts, test everything, and back the job with a 90-day warranty.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "PROfix fixed my Samsung washing machine the same day. The technician was professional, explained everything clearly, and the price was fair.",
    name: "Grace Wanjiku",
    area: "Westlands, Nairobi",
    initials: "GW",
  },
  {
    quote:
      "My LG fridge stopped cooling and they came within three hours. Compressor replaced and it's been perfect for months. Highly recommended!",
    name: "David Otieno",
    area: "Kilimani, Nairobi",
    initials: "DO",
  },
  {
    quote:
      "Their technician showed me how to clean and handle my fridge properly. I've saved on power and avoided constant repairs since.",
    name: "Faith Mwangi",
    area: "Karen, Nairobi",
    initials: "FM",
  },
  {
    quote:
      "Called PROfix for a leaking dishwasher. Same-afternoon visit, faulty seal replaced, everything tested. Excellent work!",
    name: "Peter Kamau",
    area: "Lavington, Nairobi",
    initials: "PK",
  },
  {
    quote:
      "Used PROfix twice — washing machine and oven. Both times fast, professional, and affordable. My go-to in Nairobi.",
    name: "Naomi Muthoni",
    area: "Parklands, Nairobi",
    initials: "NM",
  },
  {
    quote:
      "Prompt, trustworthy, and friendly. They repaired my Bosch washer that had been making a terrible noise. Quiet as new now.",
    name: "James Njoroge",
    area: "Kasarani, Nairobi",
    initials: "JN",
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
      "Costs vary by appliance and fault. Typical repairs range from KSh 1,500 to KSh 12,000. We provide a free diagnosis and transparent quote before any work begins — no obligation.",
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
      "Yes. We also serve Kiambu, Ruiru, Ruaka, Thika Road, Syokimau, and parts of Kajiado and Machakos counties.",
  },
] as const;

export const BRANDS = [
  "Samsung",
  "LG",
  "Bosch",
  "Whirlpool",
  "Hotpoint",
  "Beko",
  "Haier",
  "Miele",
  "Hisense",
  "Ariston",
  "Electrolux",
  "Indesit",
] as const;

export const SERVICE_AREAS = {
  nairobi: [
    "Westlands",
    "Karen",
    "Kilimani",
    "Lavington",
    "Parklands",
    "Eastleigh",
    "South C",
    "Langata",
    "Kileleshwa",
    "Kasarani",
    "Roysambu",
    "Embakasi",
    "Buruburu",
    "Rongai",
    "Ngong Road",
    "Industrial Area",
  ],
  surrounding: [
    "Kiambu",
    "Ruiru",
    "Ruaka",
    "Thika Road",
    "Syokimau",
    "Kitengela",
    "Machakos",
  ],
} as const;

export const PACKAGES = [
  {
    title: "Diagnosis & Quote",
    price: "From KSh 1,500",
    description: "Free fault assessment with a transparent quote before any work begins.",
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

export const BLOG_POSTS = [
  {
    title: "How to Clean Your Fridge Safely",
    excerpt:
      "Regular cleaning prevents bacteria growth and keeps cooling efficient. Always unplug first, use mild detergent, and dry before switching back on.",
  },
  {
    title: "Why You Shouldn't Keep Switching Off Your Fridge",
    excerpt:
      "Turning your fridge off repeatedly can damage the compressor and waste more energy. Keep it steady and use voltage protection.",
  },
  {
    title: "Transporting Your Appliance the Right Way",
    excerpt:
      "Always keep your fridge upright when moving it. Wait at least 4–6 hours before turning it on after transportation to protect the compressor.",
  },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Appliances", href: "#appliances" },
  { label: "Developers Project", href: "#packages" },
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Appliances", href: "#appliances", hasDropdown: true },
  { label: "Developers Project", href: "#packages", hasDropdown: true },
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
    id: "repair",
    description: "We fix all faults fast & effectively.",
    icon: "wrench",
    color: "bg-orange-500",
    image: "/images/services/repair.jpg",
  },
  {
    title: "Installation",
    id: "installation",
    description: "Professional installations done right.",
    icon: "settings",
    color: "bg-navy-700",
    image: "/images/services/installation.jpg",
  },
  {
    title: "Maintenance",
    id: "maintenance",
    description: "Keep your appliances running longer.",
    icon: "tool",
    color: "bg-emerald-600",
    image: "/images/services/maintenance.jpg",
  },
  {
    title: "Consultation",
    id: "consultation",
    description: "Expert advice before you buy or upgrade.",
    icon: "message",
    color: "bg-navy-600",
    image: "/images/services/consultation.jpg",
  },
  {
    title: "Recovery",
    id: "recovery",
    description: "We restore damaged or neglected appliances.",
    icon: "refresh",
    color: "bg-navy-500",
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
