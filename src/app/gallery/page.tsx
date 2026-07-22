import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description:
    "View beautiful flooring projects and installations from Trademark Flooring.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-amber-900 to-amber-800 text-white">
        <Container>
          <div className="text-center">
            <h1 className="font-serif text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto">
              Browse our portfolio of beautiful flooring installations across all services
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Grid by Service */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.slug} id={service.slug} className="group">
                <div className="bg-gray-200 aspect-square rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                  <div className="text-gray-400 text-6xl">📸</div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-amber-950 mb-2 group-hover:text-amber-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <p className="text-gray-400 text-xs">
                  Add photos to this gallery section
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-amber-50 rounded-lg text-center">
            <h2 className="font-serif text-2xl font-bold text-amber-950 mb-2">
              Upload Your Photos
            </h2>
            <p className="text-gray-600 mb-4">
              You can add photos to each service category above. The gallery is ready to display your beautiful work.
            </p>
            <p className="text-sm text-gray-500">
              To add photos: Edit src/lib/projects.ts and add image files to public/images/gallery/
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
