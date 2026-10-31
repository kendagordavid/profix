import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LIFECYCLE_STEPS: { label: string; href: string }[] = [
  { label: "Consult", href: "/services/consultation" },
  { label: "Install", href: "/services/installation" },
  { label: "Maintain", href: "/services/maintenance" },
  { label: "Repair", href: "/services/repair" },
  { label: "Recover", href: "/services/recovery" },
  { label: "Replace", href: "/services/consultation" },
];

export function LifecycleSection() {
  return (
    <section
      aria-label="The PROfix appliance lifecycle"
      className="bg-navy-900 py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
          The PROfix Appliance Lifecycle
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-0">
          {LIFECYCLE_STEPS.map((step, index) => (
            <div key={step.label} className="flex items-center">
              <Link
                href={step.href}
                className="flex flex-col items-center px-2 sm:px-4"
              >
                <div
                  style={{ animationDelay: `${index}s` }}
                  className="animate-step-glow flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-xs font-bold text-white transition hover:border-orange-400 hover:bg-white/20 sm:h-16 sm:w-16 sm:text-sm"
                >
                  {step.label}
                </div>
              </Link>
              {index < LIFECYCLE_STEPS.length - 1 && (
                <ArrowRight
                  style={{ animationDelay: `${index * 0.2}s` }}
                  className="animate-arrow-nudge hidden h-5 w-5 shrink-0 text-white/50 sm:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
