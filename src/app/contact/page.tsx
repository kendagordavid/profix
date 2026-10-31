import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Call ${SITE.phone}, WhatsApp, or email ${SITE.email}. Mon–Sat 8 AM–7 PM. Same-day appliance repair in Nairobi.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're here to help"
        description="Most requests get a callback within 15 minutes during business hours. Same-day visits across much of Nairobi."
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:px-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-navy-800">Get in touch</h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <a href={SITE.phoneHref} className="font-semibold text-navy-800">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                {SITE.location}
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-orange-500" />
                {SITE.hours}
              </li>
            </ul>
            <Link href="/book" className="btn-primary mt-6">
              Book online
            </Link>
          </div>
          <div className="rounded-xl bg-navy-50 p-6 text-sm text-slate-700">
            <h2 className="font-bold text-navy-800">Response promise</h2>
            <p className="mt-3 leading-relaxed">
              We aim to confirm same-day slots within 2–4 hours in central Nairobi
              (Westlands, Kilimani, Karen, Parklands, and nearby). Surrounding
              counties may be next-day — we&apos;ll always confirm before dispatch.
            </p>
            <p className="mt-3">Payment: M-Pesa, cash, or bank transfer after the job.</p>
          </div>
        </div>
      </section>
    </>
  );
}
