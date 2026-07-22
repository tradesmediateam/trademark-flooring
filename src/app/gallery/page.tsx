import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { EstimateCta } from "@/components/estimate/EstimateCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { projects, totalImageCount } from "@/lib/projects";
import { buildMetadata } from "@/lib/seo";
import { serviceAreas } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Project Gallery",
  description:
    "Browse residential, commercial, high-rise, low-rise, and multi-family floor preparation projects completed by Trademark Flooring across Metro Vancouver.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />

      <Section className="bg-ink-950 text-white" contained={false}>
        <div className="container py-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-400">
            Project Gallery
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {projects.length}+ projects across {serviceAreas.slice(0, 3).join(", ")} & beyond
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-200">
            A look at our self-levelling, grinding, and floor preparation
            work across residential, commercial, high-rise, low-rise, and
            multi-family projects. {totalImageCount()}+ photos and counting.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <GalleryGrid projects={projects} />
      </Section>

      <EstimateCta showForm={false} />
    </>
  );
}
