import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://profix-xi.vercel.app";

export function pageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = title.includes(SITE.shortName)
    ? title
    : `${title} | ${SITE.name}`;
  const url = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: "en_KE",
      type: "website",
    },
  };
}

export { siteUrl };
