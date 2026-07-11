import { ApplianceCategories } from "@/components/home/ApplianceCategories";
import { FeaturesBar } from "@/components/home/FeaturesBar";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesBar />
      <ApplianceCategories />
      <ServicesSection />
      <Footer />
    </>
  );
}
