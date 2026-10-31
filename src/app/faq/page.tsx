import { FAQSection } from "@/components/home/FAQSection";
import { PageHero } from "@/components/marketing/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers about PROfix appliance repair in Nairobi — pricing, warranty, areas served, M-Pesa payment, and same-day service.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Frequently asked questions"
        description="Straight answers about how we work, what we charge, and where we serve."
      />
      <FAQSection />
    </>
  );
}
