export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingMinutes: number;
  body: string[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "how-to-clean-your-fridge-safely",
    title: "How to Clean Your Fridge Safely",
    excerpt:
      "Regular cleaning prevents bacteria growth and keeps cooling efficient.",
    category: "Fridges",
    readingMinutes: 4,
    body: [
      "Unplug the fridge before cleaning. Wipe shelves with mild detergent and warm water — avoid abrasive pads on plastic.",
      "Clear the drain hole at the back of many fridges; blockages cause water pools under the vegetable drawer.",
      "Dry all surfaces before switching back on. In Nairobi's humidity, leave the door open a few minutes to air out.",
    ],
  },
  {
    slug: "why-not-switch-off-fridge-repeatedly",
    title: "Why You Shouldn't Keep Switching Off Your Fridge",
    excerpt: "Frequent power cycles stress the compressor and waste energy.",
    category: "Fridges",
    readingMinutes: 3,
    body: [
      "Compressors need stable run cycles. Switching off daily for 'savings' often increases wear and food spoilage risk.",
      "Use a quality voltage guard against KPLC surges instead of manual switching.",
      "If leaving home for days, set a higher temperature rather than full shutdown when possible.",
    ],
  },
  {
    slug: "transporting-appliances-the-right-way",
    title: "Transporting Your Appliance the Right Way",
    excerpt: "Protect compressors and drums when moving fridges and washers.",
    category: "Care tips",
    readingMinutes: 4,
    body: [
      "Keep fridges upright. If tilted, wait 4–6 hours before powering on so oil returns to the compressor.",
      "Secure washing machine transit bolts before moving — drum suspension damage is a common costly repair.",
      "Tape loose doors and hoses; Nairobi road vibration loosens fittings quickly.",
    ],
  },
  {
    slug: "fridge-not-cooling-seven-causes",
    title: "Why Your Fridge Isn't Cooling: 7 Common Causes",
    excerpt: "From dirty coils to failing compressors — what to check first.",
    category: "Fridges",
    readingMinutes: 6,
    body: [
      "Check thermostat setting and that the door seals close fully — a gap lets warm air in constantly.",
      "Dirty condenser coils (especially in dusty areas) reduce efficiency; vacuum gently from the back.",
      "If the freezer works but the fridge section is warm, the evaporator fan may be stuck.",
      "Gas leaks, failed compressors, and control boards need a technician — book diagnosis from KSh 1,500.",
    ],
  },
  {
    slug: "washing-machine-leaking-check-first",
    title: "Washing Machine Leaking? Check This First",
    excerpt: "Door seals, hoses, and drain filters cause most leaks.",
    category: "Laundry",
    readingMinutes: 5,
    body: [
      "Inspect the door gasket for mould gaps and the detergent drawer for overflow channels blocked by powder.",
      "Tighten inlet hose connections at the wall and machine — use new washers if they drip when full pressure hits.",
      "Clean the drain filter at the front base; a clogged filter backs water out the door on spin.",
    ],
  },
  {
    slug: "install-ac-nairobi-sizing",
    title: "How to Size and Install an AC in Nairobi",
    excerpt: "BTU basics, placement, and why professional install matters.",
    category: "HVAC",
    readingMinutes: 6,
    body: [
      "Rough guide: 9,000–12,000 BTU for a small bedroom, 18,000+ for open-plan living in Nairobi heat.",
      "Outdoor units need airflow and drainage for condensate — blocked drains drip into walls and cause mould.",
      "PROfix installs split systems with leak testing and secure mounting; book consultation before peak season.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
