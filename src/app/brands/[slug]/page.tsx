import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/marketing/PageHero";
import { BRANDS, getBrandBySlug } from "@/content/brands";
import { buildBookUrl } from "@/lib/book-url";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};
  return pageMetadata({
    title: `${brand.name} Appliance Repair Nairobi`,
    description: `Certified ${brand.name} appliance repair — genuine parts, 90-day warranty, same-day service.`,
    path: `/brands/${slug}`,
  });
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  return (
    <>
      <PageHero
        eyebrow="Brand service"
        title={`${brand.name} repair specialists`}
        description={`We service ${brand.name} fridges, laundry, cooking, and cooling equipment across Nairobi. Independent repair — not affiliated with the manufacturer.`}
        bookParams={{ brand: brand.name, step: 2 }}
      />
      <section className="py-12 text-center">
        <Link
          href={buildBookUrl({ brand: brand.name, step: 2 })}
          className="btn-primary"
        >
          Book {brand.name} repair
        </Link>
      </section>
    </>
  );
}
