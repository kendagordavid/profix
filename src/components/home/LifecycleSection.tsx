import { Fragment } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Recycle,
  Repeat,
  Settings,
  Users,
  Wrench,
} from "lucide-react";
import { LIFECYCLE } from "@/lib/constants";

const ICON_MAP = {
  users: Users,
  settings: Settings,
  calendar: CalendarCheck,
  wrench: Wrench,
  recycle: Recycle,
  replace: Repeat,
} as const;

export function LifecycleSection() {
  return (
    <section
      aria-label="The PROfix appliance lifecycle"
      className="relative overflow-hidden bg-navy-900 py-14 lg:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-white">
              The PROfix Appliance Lifecycle
            </h2>
            <p className="mt-3 text-sm font-semibold text-slate-300">
              One appliance. Every stage of its life.
            </p>
          </div>

          <ol data-stagger className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:flex lg:items-start lg:justify-between">
            {LIFECYCLE.map((step, index) => {
              const Icon = ICON_MAP[step.icon];
              return (
                <Fragment key={step.label}>
                  {index > 0 && (
                    <li aria-hidden="true" className="hidden pt-7 lg:block">
                      <ArrowRight
                        style={{ animationDelay: `${index * 0.2}s` }}
                        className="animate-arrow-nudge h-5 w-5 text-white/60"
                      />
                    </li>
                  )}
                  <li className="lg:w-28">
                    <Link
                      href={step.href}
                      className="group flex flex-col items-center text-center"
                    >
                      <span
                        style={{ animationDelay: `${index}s` }}
                        className="animate-step-glow flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-white/30 bg-white text-orange-500 transition group-hover:scale-105"
                      >
                        <Icon className="h-8 w-8" />
                      </span>
                      <span className="mt-3 text-base font-bold text-white">
                        {step.label}
                      </span>
                      <span className="mt-1 text-xs leading-snug text-slate-300">
                        {step.description}
                      </span>
                    </Link>
                  </li>
                </Fragment>
              );
            })}
          </ol>
        </div>

        <div className="mt-10 flex items-center gap-4 text-center text-sm font-semibold text-slate-200">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-orange-400/60" />
          PROfix manages the appliance throughout its useful life.
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-orange-400/60" />
        </div>
      </div>
    </section>
  );
}
