import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";
import { SERVICE_ICONS } from "@/components/home/service-icons";
import { SERVICES } from "@/content/services";
import { SITE } from "@/lib/constants";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 overflow-hidden lg:left-[38%]">
        <Image
          src="/images/hero/technician-hero.jpg"
          alt="PROfix technician at work"
          fill
          priority
          className="animate-ken-burns object-cover object-[70%_center]"
          sizes="(min-width: 1024px) 62vw, 100vw"
        />
        <div className="absolute inset-0 bg-navy-900/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-navy-900 lg:via-navy-900/30 lg:to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
        <div className="max-w-[600px]">
          <h1 className="animate-in text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.25rem]">
            Professional appliance care from installation to{" "}
            <span className="text-orange-400">recovery.</span>
          </h1>

          <p
            style={{ "--delay": "120ms" } as React.CSSProperties}
            className="animate-in mt-5 max-w-lg text-base leading-relaxed text-slate-200"
          >
            We repair, install, maintain and give new life to your appliances —
            at home, at work and across your property developments.
          </p>

          <ul
            style={{ "--delay": "240ms" } as React.CSSProperties}
            className="animate-in mt-7 flex flex-wrap gap-x-4 gap-y-3"
          >
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon] ?? Wrench;
              return (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-2 text-sm font-semibold text-white"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 transition group-hover:border-orange-400 group-hover:bg-orange-500">
                      <Icon className="h-4 w-4" />
                    </span>
                    {service.title.replace("Preventive ", "")}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            style={{ "--delay": "360ms" } as React.CSSProperties}
            className="animate-in mt-8 flex flex-wrap gap-3"
          >
            <Link href="/book" className="btn-primary shadow-lg shadow-orange-500/25">
              Request Appliance Service
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Developers &amp; Projects
            </Link>
          </div>

          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--delay": "480ms" } as React.CSSProperties}
            className="animate-in mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-white"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            Call or WhatsApp {SITE.phone}
          </a>
        </div>
      </div>

      <p
        aria-hidden="true"
        style={{ "--delay": "700ms" } as React.CSSProperties}
        className="animate-in absolute bottom-8 right-10 hidden -rotate-6 text-right font-script text-3xl leading-tight text-white drop-shadow-lg lg:block xl:text-4xl"
      >
        Your appliances.
        <br />
        Our expertise.
      </p>
    </section>
  );
}
