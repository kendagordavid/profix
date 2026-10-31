import { AppliancesWeHandle } from "@/components/home/AppliancesWeHandle";
import { CoreServices } from "@/components/home/CoreServices";
import { HeroSection } from "@/components/home/HeroSection";
import { LifecycleSection } from "@/components/home/LifecycleSection";
import { ProjectsCta } from "@/components/home/ProjectsCta";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { WhyProfix } from "@/components/home/WhyProfix";
import { PropertySolutions } from "@/components/marketing/PropertySolutions";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div data-reveal>
        <WhoWeServe />
      </div>
      <div data-reveal>
        <CoreServices />
      </div>
      <div data-reveal>
        <AppliancesWeHandle />
      </div>
      <div data-reveal>
        <LifecycleSection />
      </div>
      <div data-reveal>
        <PropertySolutions />
      </div>
      <div data-reveal>
        <WhyProfix />
      </div>
      <div data-reveal>
        <ProjectsCta />
      </div>
    </>
  );
}
