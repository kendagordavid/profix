import {
  CheckCircle2,
  FileText,
  Headset,
  Search,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { WHY_PROFIX } from "@/lib/constants";

const ICON_MAP = {
  search: Search,
  settings: Settings,
  shield: ShieldCheck,
  file: FileText,
  check: CheckCircle2,
  headset: Headset,
} as const;

export function WhyProfix() {
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="text-3xl font-extrabold text-navy-800 sm:text-[2.1rem]">
          Why PROfix?
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Professional. Reliable. Complete.
        </p>

        <ul
          data-stagger
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-0 xl:divide-x xl:divide-slate-200"
        >
          {WHY_PROFIX.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <li key={item.title} className="flex items-center gap-3 xl:px-4 xl:first:pl-0">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-navy-800">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
