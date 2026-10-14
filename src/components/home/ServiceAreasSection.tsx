import Link from "next/link";
import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";

export function ServiceAreasSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange-500">
              Service Coverage
            </p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-navy-800 sm:text-[2.1rem]">
              We Serve All of Nairobi
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Same-day appliance repair across Nairobi County and surrounding
              areas. Wherever you are, we come to you.
            </p>
            <Link
              href="#book"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-500 transition hover:text-orange-600"
            >
              <MapPin className="h-4 w-4" />
              Book a repair in your area
            </Link>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-navy-700">
              Nairobi County
            </h3>
            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.nairobi.map((area) => (
                <span
                  key={area}
                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-navy-800"
                >
                  {area}
                </span>
              ))}
            </div>

            <h3 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wide text-navy-700">
              Surrounding Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.surrounding.map((area) => (
                <span
                  key={area}
                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-navy-800"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
