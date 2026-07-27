import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Flooring Project Gallery Burnaby BC | Trademark Flooring",
  description: "Explore Trademark Flooring project categories including self-levelling, hardwood, laminate, vinyl, stairs, mouldings, and flooring installation in Burnaby, BC.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <section className="heritage-grain border-b border-[#8a5b3b]/10 py-16 text-center md:py-20">
        <p className="text-xs font-bold uppercase tracking-[.24em] text-[#cf692a]">Our work</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-[#633318] md:text-5xl">Flooring Project Gallery</h1>
        <p className="mx-auto mt-4 max-w-2xl text-[#776e67]">A preview of the preparation, installation, and finishing services available in Burnaby and Metro Vancouver.</p>
      </section>

      <section className="heritage-grain py-16 md:py-24">
        <Container>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group relative aspect-[4/3] overflow-hidden bg-[#4a2919]">
                <div className="walnut-grain absolute inset-0 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="text-xs font-bold tracking-[.22em] text-[#efa56e]">0{index + 1}</span>
                  <h2 className="mt-2 font-serif text-2xl font-bold">{service.title}</h2>
                  <p className="mt-2 text-sm text-white/75">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link href="/contact" className="inline-flex min-h-12 items-center bg-[#cf6728] px-8 text-sm font-bold uppercase tracking-[.12em] text-white hover:bg-[#a94e1d]">Free in-home estimate</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
