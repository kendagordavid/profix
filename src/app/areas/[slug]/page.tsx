import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/marketing/PageHero";
import { AREAS, getAreaBySlug } from "@/content/areas";
import { buildBookUrl } from "@/lib/book-url";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return pageMetadata({
    title: `Appliance Repair ${area.name}`,
    description: `Same-day appliance repair in ${area.name}, Nairobi. Fridges, washers, AC, and more.`,
    path: `/areas/${slug}`,
  });
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  return (
    <>
      <PageHero
        eyebrow="Service area"
        title={`Appliance repair in ${area.name}`}
        description={
          area.sameDay
            ? "Same-day visits available for most standard repairs."
            : "Next-day service typical — a call-out fee may apply, confirmed before dispatch."
        }
        bookParams={{ step: 3 }}
      />
      <section className="py-12 text-center">
        <Link href={buildBookUrl({ step: 3 })} className="btn-primary">
          Book a visit in {area.name}
        </Link>
      </section>
    </>
  );
}
