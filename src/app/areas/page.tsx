import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { AREAS } from "@/content/areas";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Service Areas",
  description: "Appliance repair across Nairobi County and Kiambu, Ruiru, Thika Road, Syokimau, and more.",
  path: "/areas",
});

export default function AreasPage() {
  const nairobi = AREAS.filter((a) => a.zone === "nairobi");
  const surrounding = AREAS.filter((a) => a.zone === "surrounding");

  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="We serve all of Nairobi"
        description="Same-day service in most central areas. We come to your home or business."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="text-sm font-bold uppercase text-navy-700">Nairobi County</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {nairobi.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-navy-800 hover:border-orange-300"
              >
                {a.name}
              </Link>
            ))}
          </div>
          <h2 className="mt-8 text-sm font-bold uppercase text-navy-700">Surrounding</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {surrounding.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-navy-800 hover:border-orange-300"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
