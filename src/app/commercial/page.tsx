import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { buildBookUrl } from "@/lib/book-url";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Commercial & Property Solutions",
  description:
    "Appliance care for developers, landlords, hotels, and restaurants in Nairobi — maintenance plans and priority call-outs.",
  path: "/commercial",
});

const OFFERS = [
  "Annual maintenance from KSh 10,000/year",
  "Priority same-day response for covered sites",
  "Display chillers, kitchen lines, and laundry equipment",
  "Single point of contact for multi-unit properties",
  "Transparent reporting for property managers",
];

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title="Business & property solutions"
        description="Developers, landlords, and hospitality teams rely on PROfix for installation, maintenance, and fast repairs at scale."
        bookParams={{ plan: "commercial", step: 1 }}
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <ul className="space-y-3">
            {OFFERS.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate-700">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500">
            Managing 5+ units? Ask about custom service agreements and portfolio pricing.
          </p>
          <Link href={buildBookUrl({ plan: "commercial" })} className="btn-primary mt-8">
            Discuss your project
          </Link>
        </div>
      </section>
    </>
  );
}
