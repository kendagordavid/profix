import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange-500">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy-800 sm:text-[2.1rem]">
            Booked in Minutes. Fixed Same Day.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Getting your appliance repaired across Nairobi is simple — no
            guesswork, no hidden fees.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((step) => (
            <div
              key={step.step}
              className="relative rounded-xl border border-slate-100 bg-slate-50/50 p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-extrabold text-white">
                {step.step}
              </div>
              <h3 className="text-base font-bold text-navy-800">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#book"
            className="btn-primary"
          >
            Start Your Booking
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
