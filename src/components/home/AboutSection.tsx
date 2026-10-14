import Link from "next/link";
import { ArrowRight, Shield, Users, Wrench } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-navy-900 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange-400">
              About PROfix
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-[2.1rem]">
              Kenya&apos;s Trusted Appliance Care Experts
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                At <strong className="text-white">PROfix Appliance Care</strong>,
                we specialise in repair, maintenance, installation, and recovery
                for home and commercial appliances across Kenya.
              </p>
              <p>
                Our mission is simple — dependable service, transparent
                communication, and long-lasting solutions. Most equipment fails
                not from age, but from poor handling or neglected maintenance.
                That&apos;s why we combine expert repair with client education,
                showing you how to care for your appliances for better
                performance and energy efficiency.
              </p>
              <p>
                Whether restoring cooling, improving food safety, or preventing
                future breakdowns, our team ensures peace of mind through
                professional service and genuine parts.
              </p>
            </div>
            <Link
              href="#book"
              className="btn-primary mt-8"
            >
              Book a Service
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
            {[
              {
                icon: Wrench,
                title: "Expert Repairs",
                text: "Certified technicians for every major appliance brand.",
              },
              {
                icon: Shield,
                title: "Genuine Parts",
                text: "Original components backed by a 90-day warranty.",
              },
              {
                icon: Users,
                title: "Client Education",
                text: "We teach you how to maintain appliances for longer life.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
