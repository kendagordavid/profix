import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SERVICES } from "@/content/services";
import { APPLIANCES_WE_HANDLE, FOOTER_COLUMNS, SITE } from "@/lib/constants";

const LINK_COLUMNS = [
  {
    title: "Services",
    links: SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  {
    title: "Appliances",
    links: APPLIANCES_WE_HANDLE.map((a) => ({ label: a.title, href: a.href })),
  },
  ...FOOTER_COLUMNS,
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,1fr)_1.8fr]">
          <div>
            <div className="text-2xl font-extrabold text-white">
              PRO<span className="text-orange-400">fix</span>
            </div>
            <p className="mt-1 text-xs font-semibold tracking-widest text-slate-400">
              APPLIANCE CARE
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              Professional appliance care from installation to recovery.
            </p>
          </div>

          {LINK_COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-bold text-white">{column.title}</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-orange-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-bold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
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
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition hover:text-orange-300"
                >
                  <MessageCircle className="h-4 w-4 text-orange-300" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 [overflow-wrap:anywhere] transition hover:text-orange-300"
                >
                  <Mail className="h-4 w-4 shrink-0 text-orange-300" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
                {SITE.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="font-medium text-orange-300/90">Better Care. Longer Life.</p>
        </div>
      </div>
    </footer>
  );
}
