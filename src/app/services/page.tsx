import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { SERVICES } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Appliance Services",
  description:
    "Repair, installation, maintenance, consultation and recovery for homes and businesses in Nairobi.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="More than just repairs"
        description="End-to-end appliance care — from emergency fixes to preventive maintenance and commercial plans."
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-6">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-36 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-bold text-navy-800">{service.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-orange-500">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
