import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  RefreshCw,
  Settings,
  Wrench,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const SERVICE_ICONS = {
  wrench: Wrench,
  settings: Settings,
  tool: Wrench,
  message: MessageSquare,
  refresh: RefreshCw,
} as const;

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-12">
          <div className="lg:pt-2">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange-500">
              Our Specialized Services
            </p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-navy-800 sm:text-[2.1rem]">
              More Than Just Repairs
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              From emergency fixes to preventive care, PROfix delivers end-to-end
              appliance solutions for homes and businesses across Kenya.
            </p>
            <Link
              href="#services"
              className="btn-navy mt-6 px-5"
            >
              Explore All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {SERVICES.map((service) => {
              const Icon =
                SERVICE_ICONS[service.icon as keyof typeof SERVICE_ICONS] ??
                Wrench;
              return (
                <div
                  key={service.title}
                  id={service.id}
                  className="group scroll-mt-24 flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="p-4 pb-2">
                    <div
                      className={`${service.color} mb-3 flex h-10 w-10 items-center justify-center rounded-lg shadow-sm`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-navy-800">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                      {service.description}
                    </p>
                    <Link
                      href="#book"
                      className="mt-2.5 flex items-center gap-1 text-[11px] font-bold text-navy-600 transition group-hover:text-orange-500"
                    >
                      Learn More
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                  <div className="relative mt-auto h-20 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} service`}
                      fill
                      className="object-cover"
                      sizes="180px"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
