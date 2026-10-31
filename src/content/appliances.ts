export type Appliance = {
  slug: string;
  name: string;
  description: string;
  image: string;
  bookValue: string;
  priceHint: string;
  issues: string[];
};

export const APPLIANCES: Appliance[] = [
  {
    slug: "washing-machines",
    name: "Washing Machines",
    description: "Repair, cleaning, installation & more",
    image: "/images/appliances/washing-machine.jpg",
    bookValue: "Washing Machine",
    priceHint: "From KSh 3,500",
    issues: ["Not turning on", "Not draining", "Leaking water", "Strange noise"],
  },
  {
    slug: "refrigerators",
    name: "Refrigerators & Freezers",
    description: "Cooling, gas refill, compressor repair",
    image: "/images/appliances/refrigerator.jpg",
    bookValue: "Refrigerator",
    priceHint: "From KSh 3,500",
    issues: ["Not cooling / heating", "Leaking water", "Strange noise", "Not turning on"],
  },
  {
    slug: "cookers-ovens",
    name: "Cookers & Ovens",
    description: "Gas, electric & built-in repairs",
    image: "/images/appliances/cooker-oven.jpg",
    bookValue: "Cooker / Oven",
    priceHint: "From KSh 3,500",
    issues: ["Not heating", "Gas ignition fault", "Not turning on"],
  },
  {
    slug: "dishwashers",
    name: "Dishwashers",
    description: "Leak fixes, pump & motor repair",
    image: "/images/appliances/dishwasher.jpg",
    bookValue: "Dishwasher",
    priceHint: "From KSh 3,500",
    issues: ["Leaking water", "Not draining", "Not cleaning"],
  },
  {
    slug: "microwaves",
    name: "Microwaves",
    description: "Heating, door & control repairs",
    image: "/images/appliances/microwave.jpg",
    bookValue: "Microwave",
    priceHint: "From KSh 1,500",
    issues: ["Not heating", "Not turning on", "Door latch fault"],
  },
  {
    slug: "dryers",
    name: "Dryers",
    description: "Drum, heating & vent issues",
    image: "/images/appliances/dryer.jpg",
    bookValue: "Dryer",
    priceHint: "From KSh 3,500",
    issues: ["Not heating", "Drum not turning", "Strange noise"],
  },
  {
    slug: "display-chillers",
    name: "Display Chillers",
    description: "Commercial cooling solutions",
    image: "/images/appliances/display-chiller.jpg",
    bookValue: "Display Chiller",
    priceHint: "From KSh 5,000",
    issues: ["Not cooling / heating", "Maintenance / cleaning"],
  },
  {
    slug: "air-conditioners",
    name: "Air Conditioners",
    description: "Split units, gas recharge & installation",
    image: "/images/appliances/more-appliances.jpg",
    bookValue: "Air Conditioner",
    priceHint: "From KSh 3,500",
    issues: ["Not cooling / heating", "Installation needed", "Leaking water"],
  },
];

export function getApplianceBySlug(slug: string) {
  return APPLIANCES.find((a) => a.slug === slug);
}
