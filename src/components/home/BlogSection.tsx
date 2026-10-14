import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS, SITE } from "@/lib/constants";

export function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-24 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange-500">
            Help &amp; Advice
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy-800 sm:text-[2.1rem]">
            Safety Tips &amp; Insights
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Simple ways to extend your appliance life, save energy, and improve
            food safety — straight from the PROfix experts.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col rounded-xl border border-slate-100 bg-slate-50/50 p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-navy-800 group-hover:text-orange-600">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
              <Link
                href={`${SITE.whatsapp}?text=${encodeURIComponent("Hi PROfix, I have a question about appliance care.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-navy-700 transition group-hover:text-orange-500"
              >
                Ask an Expert
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
