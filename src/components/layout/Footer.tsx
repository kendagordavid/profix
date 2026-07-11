import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer id="contact" className="bg-navy-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-2xl font-extrabold text-white">
              PRO<span className="text-orange-400">fix</span>
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
              {["Services", "Appliances", "About Us", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="transition hover:text-orange-400"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["Repair", "Installation", "Maintenance", "Consultation", "Recovery"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#services" className="transition hover:text-orange-400">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                {SITE.location}
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2 transition hover:text-orange-400"
                >
                  <Phone className="h-4 w-4 text-orange-400" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 transition hover:text-orange-400"
                >
                  <Mail className="h-4 w-4 text-orange-400" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
