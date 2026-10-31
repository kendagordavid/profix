export type Brand = {
  slug: string;
  name: string;
};

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

const BRAND_NAMES = [
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

export const BRANDS: Brand[] = BRAND_NAMES.map((name) => ({
  slug: slugify(name),
  name,
}));

export function getBrandBySlug(slug: string) {
  return BRANDS.find((b) => b.slug === slug);
}
