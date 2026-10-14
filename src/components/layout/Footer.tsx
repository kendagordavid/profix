import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_QUICK_LINKS, SERVICES, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-navy-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-2xl font-extrabold text-white">
              PRO<span className="text-orange-300">fix</span>
            </div>
            <p className="mt-1 text-xs font-semibold tracking-widest text-slate-400">
              APPLIANCE CARE
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              Kenya&apos;s trusted appliance repair, maintenance, and installation
              experts. Fast, reliable, and affordable.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {FOOTER_QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-orange-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <Link
                    href={`#${service.id}`}
                    className="transition hover:text-orange-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
                {SITE.location}
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2 transition hover:text-orange-300"
                >
                  <Phone className="h-4 w-4 text-orange-300" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 transition hover:text-orange-300"
                >
                  <Mail className="h-4 w-4 text-orange-300" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="font-medium text-orange-300/90">
            Better Care. Longer Life.
          </p>
        </div>
      </div>
    </footer>
  );
}
