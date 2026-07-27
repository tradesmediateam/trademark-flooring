import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import {
  projects,
  galleryServices,
  galleryCities,
  totalImageCount,
} from "@/lib/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Flooring Project Gallery — Vancouver, Burnaby & the Lower Mainland | Trademark Flooring",
  description:
    "Browse real Trademark Flooring projects — self-levelling, hardwood, laminate, vinyl, carpet, and stairs across Vancouver, Burnaby, Richmond, Surrey, Coquitlam, Delta, Langley, and the Lower Mainland.",
  path: "/gallery",
});

export default function GalleryPage() {
  const services = [...galleryServices];
  const cities = galleryCities();

  return (
    <>
      <section className="heritage-grain border-b border-[#8a5b3b]/10 py-16 text-center md:py-20">
        <p className="text-xs font-bold uppercase tracking-[.24em] text-[#cf692a]">Our work</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-[#633318] md:text-5xl">
          Flooring Project Gallery
        </h1>
        <p className="mx-auto mt-4 max-w-2xl px-6 text-[#776e67]">
          {totalImageCount()}+ photos from real flooring projects across Vancouver, Burnaby,
          Richmond, Surrey, Coquitlam, Delta, Langley, and the Lower Mainland. Filter by service
          or city, then tap any project to see the full set of photos.
        </p>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <GalleryGrid projects={projects} services={services} cities={cities} />

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center bg-[#cf6728] px-8 text-sm font-bold uppercase tracking-[.12em] text-white hover:bg-[#a94e1d]"
            >
              Free in-home estimate
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
