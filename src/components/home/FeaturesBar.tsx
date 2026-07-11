import {
  Award,
  BadgeCheck,
  Clock,
  Grid3x3,
  Shield,
  Wallet,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";

const ICON_MAP = {
  clock: Clock,
  shield: Shield,
  award: Award,
  wallet: Wallet,
  badge: BadgeCheck,
  grid: Grid3x3,
} as const;

export function FeaturesBar() {
  return (
    <section className="border-y border-slate-100 bg-white py-7 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid grid-cols-2 divide-x-0 divide-y divide-slate-100 sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-6 lg:divide-x">
          {FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center px-3 py-3 text-center sm:py-0"
              >
                <div className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-orange-500 ring-4 ring-orange-50/50">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-[13px] font-bold text-navy-800">
                  {feature.title}
                </h3>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
