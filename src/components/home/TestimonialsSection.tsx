import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="bg-navy-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange-500">
            Customer Reviews
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy-800 sm:text-[2.1rem]">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-sm text-slate-600">
            Trusted by hundreds of Nairobi households and businesses for fast,
            reliable appliance repair.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex flex-col rounded-xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-800 text-xs font-bold text-white"
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>
                <div>
                  <cite className="not-italic text-sm font-bold text-navy-800">
                    {testimonial.name}
                  </cite>
                  <p className="text-xs text-slate-500">{testimonial.area}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
