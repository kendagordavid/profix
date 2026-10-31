import Link from "next/link";
import { buildBookUrl } from "@/lib/book-url";

export function PageHero({
  eyebrow,
  title,
  description,
  bookParams,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  bookParams?: Parameters<typeof buildBookUrl>[0];
}) {
  return (
    <section className="bg-navy-900 py-14 text-white lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange-300">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 max-w-3xl text-3xl font-extrabold sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          {description}
        </p>
        <Link href={buildBookUrl(bookParams)} className="btn-primary mt-8">
          Book a repair
        </Link>
      </div>
    </section>
  );
}
