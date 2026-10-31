import Link from "next/link";
import { ArrowRight, Building2, Home, Store, UtensilsCrossed } from "lucide-react";
import { WHO_WE_SERVE } from "@/lib/constants";

const ICON_MAP = {
  home: Home,
  building: Building2,
  utensils: UtensilsCrossed,
  store: Store,
} as const;

export function WhoWeServe() {
  return (
    <section className="bg-surface-muted py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange-500">
            Who We Serve
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy-800 sm:text-[2.1rem]">
            Appliance Care for Every Space
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            From family kitchens to busy restaurant lines, PROfix keeps homes and
            businesses across Nairobi running.
          </p>
        </div>

        <div data-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHO_WE_SERVE.map((audience) => {
            const Icon = ICON_MAP[audience.icon];
            return (
              <Link
                key={audience.title}
                href={audience.href}
                className="group flex flex-col rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-navy-800">{audience.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {audience.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {audience.examples.map((example) => (
                    <li
                      key={example}
                      className="rounded-full bg-navy-50 px-2.5 py-1 text-[11px] font-semibold text-navy-600"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-bold text-orange-500">
                  {audience.cta}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
