import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getPostBySlug } from "@/content/posts";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="py-12">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <Link href="/blog" className="text-sm font-bold text-orange-500">
          ← All articles
        </Link>
        <p className="mt-4 text-xs font-bold uppercase text-orange-500">{post.category}</p>
        <h1 className="mt-2 text-3xl font-extrabold text-navy-800">{post.title}</h1>
        <p className="mt-2 text-sm text-slate-500">{post.readingMinutes} min read</p>
        <div className="prose prose-slate mt-8 max-w-none space-y-4 text-sm leading-relaxed text-slate-700">
          {post.body.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
