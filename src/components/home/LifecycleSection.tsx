import { ArrowRight } from "lucide-react";

const LIFECYCLE_STEPS = [
  "Consult",
  "Install",
  "Maintain",
  "Repair",
  "Recover",
  "Replace",
] as const;

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
            <div key={step} className="flex items-center">
              <div className="flex flex-col items-center px-2 sm:px-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-xs font-bold text-white sm:h-16 sm:w-16 sm:text-sm">
                  {step}
                </div>
              </div>
              {index < LIFECYCLE_STEPS.length - 1 && (
                <ArrowRight
                  className="hidden h-5 w-5 shrink-0 text-white/50 sm:block"
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
