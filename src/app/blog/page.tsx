import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { POSTS } from "@/content/posts";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Help & Advice",
  description: "Appliance care tips from PROfix — fridges, laundry, AC, and more for Nairobi homes.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge centre"
        title="Safety tips & insights"
        description="Practical guidance to extend appliance life and know when to call a pro."
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-6">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <span className="text-xs font-bold uppercase text-orange-500">
                {post.category}
              </span>
              <h2 className="mt-2 text-lg font-bold text-navy-800">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <p className="mt-3 text-xs text-slate-400">{post.readingMinutes} min read</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
