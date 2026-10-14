import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PACKAGES } from "@/lib/constants";

export function PackagesSection() {
  return (
    <section id="packages" className="scroll-mt-24 bg-navy-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange-500">
            Developers Project
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy-800 sm:text-[2.1rem]">
            Property &amp; Development Solutions
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            No hidden fees. You get a clear KES quote before any work begins.
            Payment via M-Pesa, cash, or bank transfer after you&apos;re
            satisfied.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.title}
              className={`flex flex-col rounded-xl border bg-white p-6 shadow-sm ${
                pkg.highlighted
                  ? "border-orange-300 ring-2 ring-orange-100"
                  : "border-slate-100"
              }`}
            >
              {pkg.highlighted && (
                <span className="mb-3 inline-block w-fit rounded-full bg-orange-500 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-navy-800">{pkg.title}</h3>
              <p className="mt-1 text-2xl font-extrabold text-orange-500">
                {pkg.price}
              </p>
              <p className="mt-3 text-sm text-slate-600">{pkg.description}</p>
              <ul className="mt-5 flex-1 space-y-2">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="#book"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
                  pkg.highlighted
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-navy-800 text-white hover:bg-navy-900"
                }`}
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
