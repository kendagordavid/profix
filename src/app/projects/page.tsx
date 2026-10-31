import { PageHero } from "@/components/marketing/PageHero";
import { BusinessPanel, DevelopersPanel } from "@/components/marketing/PropertySolutions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Developers & Property Projects",
  description:
    "Appliance specification, sourcing, installation, commissioning and after-sales support for residential and commercial developments in Nairobi.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Appliance solutions from specification to handover"
        description="PROfix partners with developers, landlords and property managers to specify, supply, install and support every appliance in a development."
        bookParams={{ plan: "commercial", step: 1 }}
      />
      <section className="bg-surface-muted py-14 lg:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 lg:px-6">
          <DevelopersPanel />
          <BusinessPanel />
        </div>
      </section>
    </>
  );
}
