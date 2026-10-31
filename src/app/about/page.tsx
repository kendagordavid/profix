import { AboutSection } from "@/components/home/AboutSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "PROfix Appliance Care — Kenya's trusted repair, maintenance, and installation experts serving Nairobi and surrounding areas.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutSection />;
}
