export type Area = {
  slug: string;
  name: string;
  zone: "nairobi" | "surrounding";
  sameDay: boolean;
};

function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

const NAIROBI = [
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
] as const;

const SURROUNDING = [
  "Kiambu",
  "Ruiru",
  "Ruaka",
  "Thika Road",
  "Syokimau",
  "Kitengela",
  "Machakos",
] as const;

export const AREAS: Area[] = [
  ...NAIROBI.map((name) => ({
    slug: toSlug(name),
    name,
    zone: "nairobi" as const,
    sameDay: true,
  })),
  ...SURROUNDING.map((name) => ({
    slug: toSlug(name),
    name,
    zone: "surrounding" as const,
    sameDay: false,
  })),
];

export function getAreaBySlug(slug: string) {
  return AREAS.find((a) => a.slug === slug);
}
