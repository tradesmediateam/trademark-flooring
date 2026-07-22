import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Flooring Services | Trademark Flooring Burnaby",
  description: "Professional flooring services in Burnaby: installation, sanding, refinishing, supply. Hardwood, laminate, vinyl, carpet, stairs, mouldings, and more.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-950 text-white">
        <Container>
          <div className="text-center">
            <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto">
              Complete flooring solutions. From preparation to installation and finishing.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.slug}
                className="flex flex-col p-8 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <PhotoPlaceholder rounded="rounded-lg" className="h-48 mb-6" />
                <h3 className="font-serif text-2xl font-bold text-amber-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                >
                  Learn More →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-950 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-amber-100 mb-10 leading-relaxed">
              Contact Trademark Flooring today for a free consultation. Our team is ready to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(604)555-0142"
                className="inline-block bg-white text-amber-950 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
              >
                Call Us Now
              </a>
              <Link
                href="/contact"
                className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
