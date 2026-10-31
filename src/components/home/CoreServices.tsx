import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";
import { SERVICE_ICONS } from "@/components/home/service-icons";
import { SERVICES } from "@/content/services";

export function CoreServices() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-navy-800 sm:text-[2.1rem]">
              Our 5 Core Services
            </h2>
            <p className="mt-2 text-sm font-semibold text-orange-500">
              Complete appliance care. One trusted partner.
            </p>
          </div>
          <Link
            href="/services"
            className="flex shrink-0 items-center gap-1.5 text-sm font-bold text-orange-500 transition hover:text-orange-600"
          >
            Explore all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div
          data-stagger
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon] ?? Wrench;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-navy-800">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-bold text-orange-500">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
