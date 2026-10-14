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
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesBar />
      <HowItWorks />
      <ApplianceCategories />
      <BrandsSection />
      <ServicesSection />
      <LifecycleSection />
      <PackagesSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
      <BlogSection />
      <Footer />
    </>
  );
}
