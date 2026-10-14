"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { APPLIANCES } from "@/lib/constants";

export function ApplianceCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 260;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="appliances" className="scroll-mt-24 bg-navy-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange-500">
              We Service &amp; Repair All Major Appliances
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy-800 sm:text-[2.1rem]">
              What Can We Help You With?
            </h2>
          </div>
          <Link
            href="#appliances"
            className="flex items-center gap-1 text-sm font-bold text-navy-700 transition hover:text-orange-500"
          >
            View All Appliances
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute -left-4 top-[45%] z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-700 shadow-lg transition hover:bg-slate-50 lg:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="no-scrollbar flex gap-4 overflow-x-auto pb-1"
          >
            {APPLIANCES.map((appliance) => (
              <Link
                key={appliance.name}
                href="#book"
                className="group relative min-w-[190px] flex-shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:min-w-[210px]"
              >
                <div className="relative h-28 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={appliance.image}
                    alt={appliance.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="210px"
                  />
                </div>
                <div className="p-4 pb-10">
                  <h3 className="text-sm font-bold text-navy-800 group-hover:text-orange-600">
                    {appliance.name}
                  </h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                    {appliance.description}
                  </p>
                </div>
                <div className="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition group-hover:bg-orange-500 group-hover:text-white">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute -right-4 top-[45%] z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-700 shadow-lg transition hover:bg-slate-50 lg:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
