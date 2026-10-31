import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/marketing/PageHero";
import { APPLIANCES, getApplianceBySlug } from "@/content/appliances";
import { buildBookUrl } from "@/lib/book-url";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return APPLIANCES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const appliance = getApplianceBySlug(slug);
  if (!appliance) return {};
  return pageMetadata({
    title: `${appliance.name} Repair Nairobi`,
    description: `${appliance.description}. ${appliance.priceHint}. Same-day service.`,
    path: `/appliances/${slug}`,
  });
}

export default async function ApplianceDetailPage({ params }: Props) {
  const { slug } = await params;
  const appliance = getApplianceBySlug(slug);
  if (!appliance) notFound();

  return (
    <>
      <PageHero
        eyebrow="Appliance repair"
        title={`${appliance.name} in Nairobi`}
        description={appliance.description}
        bookParams={{ appliance: appliance.bookValue, step: 2 }}
      />
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={appliance.image}
                alt={appliance.name}
                fill
                className="object-cover"
                sizes="600px"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy-800">Common issues we fix</h2>
              <ul className="mt-3 list-inside list-disc text-sm text-slate-600">
                {appliance.issues.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-600">
                Diagnosis from <strong>KSh 1,500</strong>. {appliance.priceHint} for
                standard repairs — quote before work begins.
              </p>
              <Link
                href={buildBookUrl({ appliance: appliance.bookValue, step: 2 })}
                className="btn-primary mt-6"
              >
                Book {appliance.name.toLowerCase()} repair
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
