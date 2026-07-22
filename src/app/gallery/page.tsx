import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Flooring Gallery | Trademark Flooring Project Photos",
  description: "See our flooring projects in action. Gallery of professional installations, sanding, refinishing, and supply work by Trademark Flooring.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-950 text-white">
        <Container>
          <div className="text-center">
            <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">Project Gallery</h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto">
              Professional flooring installations across all service categories.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Sections by Service */}
      <section className="py-20 bg-white">
        <Container>
          {services.map((service, index) => (
            <article key={service.slug} id={service.slug} className={`mb-20 ${index !== services.length - 1 ? "pb-20 border-b border-gray-200" : ""}`}>
              {/* Service Header */}
              <div className="mb-12">
                <h2 className="font-serif text-4xl font-bold text-amber-950 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl">
                  {service.description}
                </p>
              </div>

              {/* Photo Grid Placeholder */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <PhotoPlaceholder
                    key={item}
                    label={`${service.title} · Photo ${item}`}
                    className="aspect-square"
                  />
                ))}
              </div>
            </article>
          ))}

          {/* Instructions Card */}
          <div className="mt-20 p-10 bg-orange-50 rounded-xl border-2 border-orange-200 text-center">
            <h3 className="font-serif text-2xl font-bold text-amber-950 mb-3">
              Ready to Add Your Photos?
            </h3>
            <p className="text-gray-700 mb-4">
              Upload your project photos for each service category to showcase your beautiful flooring work.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Contact Us About Photos
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
