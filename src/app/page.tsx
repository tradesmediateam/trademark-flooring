import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/services";
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
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-900 via-amber-800 to-amber-950">
        {/* Wood texture overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, #8B7355 0px, #8B7355 2px, #A0826D 2px, #A0826D 4px),
              repeating-linear-gradient(0deg, rgba(139, 115, 85, 0.15) 0px, rgba(139, 115, 85, 0.15) 1px, transparent 1px, transparent 2px)
            `,
          }}
        />

        {/* Content */}
        <div className="container relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Trademark Flooring
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-12 opacity-90 max-w-3xl mx-auto">
            Heritage craftsmanship meets modern flooring. Quality installations you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors text-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-900 transition-colors text-lg"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section className="bg-white py-24">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="font-serif text-5xl font-bold text-amber-950 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Professional flooring solutions for every project. From preparation to installation and finishing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col"
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-56 rounded-xl mb-6 overflow-hidden flex items-center justify-center hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="text-gray-400 text-7xl">🏗️</div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-amber-950 mb-3 group-hover:text-amber-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-4 text-amber-900 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-amber-950 text-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-5xl font-bold mb-8">
              Why Trademark Flooring
            </h2>
            <p className="text-lg leading-relaxed mb-12 text-amber-50">
              With heritage roots and modern expertise, Trademark Flooring brings quality craftsmanship to every project. We believe in building relationships with our customers and creating floors that last for generations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-amber-900 bg-opacity-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-serif text-xl font-bold mb-2">Expert Installation</h3>
                <p className="text-amber-100">Precision and attention to detail in every job</p>
              </div>
              <div className="bg-amber-900 bg-opacity-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-serif text-xl font-bold mb-2">Quality Materials</h3>
                <p className="text-amber-100">Only the finest flooring products selected</p>
              </div>
              <div className="bg-amber-900 bg-opacity-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-serif text-xl font-bold mb-2">Heritage Built</h3>
                <p className="text-amber-100">Timeless quality that stands the test of time</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Gallery Preview */}
      <Section className="bg-gray-50 py-24">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="font-serif text-5xl font-bold text-amber-950 mb-4">
              Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              See our beautiful flooring work across all service categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/gallery#${service.slug}`}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 aspect-square rounded-xl mb-4 overflow-hidden flex items-center justify-center hover:shadow-xl transition-all duration-300 border border-gray-300">
                  <div className="text-gray-400 text-6xl">📷</div>
                </div>
                <h3 className="font-serif text-lg font-bold text-amber-950 group-hover:text-amber-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">Add your photos here</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block bg-amber-950 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </Container>
      </Section>

      {/* Contact CTA */}
      <Section className="bg-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-5xl font-bold text-amber-950 mb-6">
              Ready to Transform Your Floors?
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              Contact us today for a free consultation. Let&apos;s discuss your flooring project and create something beautiful together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${site.phone.href}`}
                className="inline-block bg-amber-950 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-900 transition-colors"
              >
                Call Now: {site.phone.display}
              </a>
              <Link
                href="/contact"
                className="inline-block bg-amber-100 text-amber-950 px-8 py-4 rounded-lg font-semibold hover:bg-amber-200 transition-colors"
              >
                Get a Quote Online
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
