import type { Metadata } from "next";
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
      <section className="relative py-20 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-950 text-white">
        <Container>
          <div className="text-center">
            <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4">Gallery</h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto">
              Beautiful flooring installations from Trademark Flooring. Browse our work across all service categories.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Sections by Service */}
      <section className="py-20 bg-white">
        <Container>
          {services.map((service, index) => (
            <div key={service.slug} id={service.slug} className={`mb-20 ${index !== services.length - 1 ? "pb-20 border-b border-gray-200" : ""}`}>
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
                  <div
                    key={item}
                    className="bg-gradient-to-br from-gray-100 to-gray-200 aspect-square rounded-xl overflow-hidden flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-amber-300 transition-colors"
                  >
                    <div className="text-center">
                      <div className="text-5xl mb-3">📷</div>
                      <p className="text-gray-500 text-sm">Add your photos here</p>
                      <p className="text-gray-400 text-xs mt-1">Image {item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Instructions Card */}
          <div className="mt-20 p-10 bg-amber-50 rounded-xl border-2 border-amber-200 text-center">
            <h3 className="font-serif text-2xl font-bold text-amber-950 mb-3">
              Ready to Add Your Photos?
            </h3>
            <p className="text-gray-700 mb-4">
              You can upload your photos for each service category. The gallery is ready to showcase your beautiful flooring work.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-amber-950 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors"
            >
              Contact Us About Photos
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
