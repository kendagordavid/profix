import Link from "next/link";
import {
  Briefcase,
  Building,
  Building2,
  Home,
  Landmark,
  User,
  UtensilsCrossed,
} from "lucide-react";
import { WHO_WE_SERVE } from "@/lib/constants";

const ICON_MAP = {
  home: Home,
  user: User,
  building: Building,
  briefcase: Briefcase,
  utensils: UtensilsCrossed,
  landmark: Landmark,
  buildings: Building2,
} as const;

export function WhoWeServe() {
  return (
    <section className="bg-surface-muted py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="text-3xl font-extrabold text-navy-800 sm:text-[2.1rem]">
          Who We Serve
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Professional appliance care for every need.
        </p>

        <div
          data-stagger
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7 lg:gap-4"
        >
          {WHO_WE_SERVE.map((audience) => {
            const Icon = ICON_MAP[audience.icon];
            return (
              <Link
                key={audience.label}
                href={audience.href}
                className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
              >
                <Icon className="h-9 w-9 text-orange-500 transition group-hover:scale-110" />
                <span className="text-sm font-bold leading-snug text-navy-800">
                  {audience.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
