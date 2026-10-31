import Link from "next/link";
import { ArrowRight, Building2, Calendar, Construction } from "lucide-react";
import { IllustrationPanel } from "@/components/marketing/PropertySolutions";
import { SERVICES } from "@/content/services";

export function ProjectsCta() {
  return (
    <section className="bg-white pb-16 lg:pb-20">
      <div
        data-stagger
        className="mx-auto grid max-w-7xl gap-5 px-4 lg:grid-cols-3 lg:px-6"
      >
        <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-surface-muted p-6 sm:flex-row lg:flex-col xl:flex-row">
          <div className="sm:w-1/2 lg:w-auto xl:w-1/2">
            <h3 className="text-xl font-extrabold text-navy-800">Our Projects</h3>
            <p className="mt-2 text-sm font-semibold text-orange-500">
              Real projects. Real installations. Real results.
            </p>
            <Link href="/projects" className="btn-navy mt-5 !px-5 !py-2.5 !text-xs">
              View All Projects
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="flex-1 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <IllustrationPanel icon={Building2} className="h-24" />
            <div className="p-3">
              <p className="text-xs font-bold text-navy-800">Residential Developments</p>
              <p className="mt-1 text-[11px] leading-snug text-slate-500">
                Appliance specification, installation, testing &amp; commissioning.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-navy-800 p-7 text-white">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-500/30 blur-3xl"
          />
          <h3 className="relative text-xl font-extrabold">Need help with an appliance?</h3>
          <p className="relative mt-2 text-sm text-slate-300">
            {SERVICES.map((s) => s.title.replace("Preventive ", "")).join(" • ")}
          </p>
          <Link
            href="/book"
            className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-orange-600 transition hover:bg-orange-50"
          >
            <Calendar className="h-4 w-4" />
            Request Appliance Service
          </Link>
        </div>

        <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-surface-muted p-6 sm:flex-row lg:flex-col xl:flex-row">
          <IllustrationPanel icon={Construction} className="h-32 rounded-xl sm:h-auto sm:w-2/5 lg:h-28 lg:w-auto xl:h-auto xl:w-2/5" />
          <div className="flex flex-1 flex-col justify-center">
            <h3 className="text-lg font-extrabold text-navy-800">
              Planning a property development?
            </h3>
            <p className="mt-2 text-sm text-slate-600">Let&apos;s discuss your project.</p>
            <Link href="/projects" className="btn-primary mt-5 w-fit !px-5 !py-2.5 !text-xs">
              <Building2 className="h-3.5 w-3.5" />
              Talk to PROfix Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
