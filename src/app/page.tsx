import { AboutSection } from "@/components/home/AboutSection";
import { ApplianceCategories } from "@/components/home/ApplianceCategories";
import { BlogSection } from "@/components/home/BlogSection";
import { BrandsSection } from "@/components/home/BrandsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FeaturesBar } from "@/components/home/FeaturesBar";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { LifecycleSection } from "@/components/home/LifecycleSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { ServiceAreasSection } from "@/components/home/ServiceAreasSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsBar } from "@/components/home/StatsBar";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhoWeServe } from "@/components/home/WhoWeServe";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div data-reveal>
        <WhoWeServe />
      </div>
      <div data-reveal>
        <StatsBar />
      </div>
      <div data-reveal>
        <FeaturesBar />
      </div>
      <div data-reveal>
        <HowItWorks />
      </div>
      <div data-reveal>
        <ApplianceCategories />
      </div>
      <div data-reveal>
        <BrandsSection />
      </div>
      <div data-reveal>
        <ServicesSection />
      </div>
      <div data-reveal>
        <LifecycleSection />
      </div>
      <div data-reveal>
        <PackagesSection />
      </div>
      <div data-reveal>
        <ServiceAreasSection />
      </div>
      <div data-reveal>
        <TestimonialsSection />
      </div>
      <div data-reveal>
        <AboutSection />
      </div>
      <div data-reveal>
        <FAQSection />
      </div>
      <div data-reveal>
        <BlogSection />
      </div>
    </>
  );
}
