import { PackagesSection } from "@/components/home/PackagesSection";
import { PageHero } from "@/components/marketing/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pricing",
  description:
    "Transparent appliance repair pricing in Nairobi — diagnosis from KSh 1,500, standard repair from KSh 3,500, commercial plans from KSh 10,000/year.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple, fair packages"
        description="No hidden fees. M-Pesa, cash, or bank transfer after you're satisfied. Clear diagnosis and quote before any work begins."
      />
      <PackagesSection showIntro={false} />
    </>
  );
}
