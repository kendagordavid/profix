import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { APPLIANCES } from "@/content/appliances";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Appliances We Repair",
  description:
    "Fridges, washing machines, cookers, AC units, dishwashers and more — repaired across Nairobi.",
  path: "/appliances",
});

export default function AppliancesPage() {
  return (
    <>
      <PageHero
        eyebrow="Appliances"
        title="What can we help you with?"
        description="Same-day service for major home and commercial appliances. Genuine parts and certified technicians."
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
          {APPLIANCES.map((a) => (
            <Link
              key={a.slug}
              href={`/appliances/${a.slug}`}
              className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-32">
                <Image src={a.image} alt={a.name} fill className="object-cover" sizes="280px" />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-navy-800">{a.name}</h2>
                <p className="mt-1 text-xs text-slate-500">{a.priceHint}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
