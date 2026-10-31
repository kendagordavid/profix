import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/marketing/PageHero";
import { SERVICES, getServiceBySlug } from "@/content/services";
import { buildBookUrl } from "@/lib/book-url";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.title} Services Nairobi`,
    description: service.summary,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow={service.title}
        title={`${service.title} in Nairobi`}
        description={service.summary}
        bookParams={{ service: service.slug, step: 1 }}
      />
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="600px"
              />
            </div>
            <div>
              <p className="text-sm leading-relaxed text-slate-600">
                {service.description} PROfix serves homes, landlords, and businesses
                across Nairobi with transparent KES pricing and a 90-day warranty on
                eligible work.
              </p>
              <Link
                href={buildBookUrl({ service: service.slug, step: 1 })}
                className="btn-primary mt-6"
              >
                Book {service.title.toLowerCase()}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
