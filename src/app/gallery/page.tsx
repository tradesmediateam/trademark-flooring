import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { GalleryGrid, type ServiceCover } from "@/components/gallery/GalleryGrid";
import { projects, totalImageCount } from "@/lib/projects";
import { serviceAreas } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Flooring Project Gallery | Trademark Flooring — Vancouver & Lower Mainland",
  description:
    "See real Trademark Flooring projects — self-levelling, hardwood, laminate, vinyl, carpet, and stairs across Vancouver, Burnaby, Richmond, Surrey, Coquitlam, Delta, Langley, and the Lower Mainland.",
  path: "/gallery",
});

/** Provided real photo per service for the filter cards. */
const serviceCovers: ServiceCover[] = [
  { service: "Self-Levelling", src: "/images/gallery/service-cards/self-levelling.jpg", alt: "Self-levelling flooring project by Trademark Flooring" },
  { service: "Hardwood", src: "/images/gallery/service-cards/hardwood.jpg", alt: "Hardwood flooring project by Trademark Flooring" },
  { service: "Laminate", src: "/images/gallery/service-cards/laminate.jpg", alt: "Laminate flooring project by Trademark Flooring" },
  { service: "Vinyl", src: "/images/gallery/service-cards/vinyl.jpg", alt: "Vinyl flooring project by Trademark Flooring" },
  { service: "Carpet", src: "/images/gallery/service-cards/carpet.jpg", alt: "Carpet flooring project by Trademark Flooring" },
  { service: "Stairs", src: "/images/gallery/service-cards/stairs.jpg", alt: "Stairs flooring project by Trademark Flooring" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="heritage-grain border-b border-[#8a5b3b]/10 py-16 text-center md:py-20">
        <p className="text-xs font-bold uppercase tracking-[.24em] text-[#cf692a]">Our work</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-[#633318] md:text-5xl">
          Flooring Project Gallery
        </h1>
        <p className="mx-auto mt-4 max-w-2xl px-6 text-[#776e67]">
          {totalImageCount()}+ photos from real flooring projects across Vancouver, Burnaby,
          Richmond, Surrey, Coquitlam, Delta, Langley, and the Lower Mainland. Tap a service, then
          open any project to see the full set of photos.
        </p>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <p className="mb-8 text-center text-sm font-medium text-[#a9856b]">
            Tap a service to view projects
          </p>
          <GalleryGrid projects={projects} serviceCovers={serviceCovers} />

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

      {/* Areas we serve — subtle local-SEO footer strip */}
      <section className="border-t border-[#8a5b3b]/10 bg-[#faf5ee] py-8">
        <Container>
          <p className="text-center text-sm text-[#8a7b6e]">
            <span className="font-semibold text-[#6b4a2f]">Areas we serve:</span>{" "}
            {serviceAreas.join(", ")}, and the Lower Mainland.
          </p>
        </Container>
      </section>
    </>
  );
}
