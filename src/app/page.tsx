import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { CompanyOverview } from "@/components/home/CompanyOverview";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { EstimateCta } from "@/components/estimate/EstimateCta";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactSection } from "@/components/home/ContactSection";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: site.tagline,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <ServicesGrid />
      <EstimateCta />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <ContactSection />
    </>
  );
}
