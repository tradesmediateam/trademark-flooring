import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
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
      {/* Hero Section with Wood Background */}
      <section className="relative h-screen min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900">
        {/* Wood texture background */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, #8B7355 0px, #8B7355 2px, #9D8B7E 2px, #9D8B7E 4px),
              repeating-linear-gradient(0deg, rgba(139, 115, 85, 0.1) 0px, rgba(139, 115, 85, 0.1) 1px, transparent 1px, transparent 2px)
            `,
          }}
        />

        {/* Content */}
        <div className="container relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4 tracking-tight leading-tight">
            We Make Floors Beautiful
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-8 opacity-95 max-w-2xl mx-auto">
            Heritage quality flooring for your home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-amber-900 px-8 py-3 rounded font-semibold hover:bg-amber-50 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-amber-900 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section className="bg-white">
        <Container>
          <div className="mb-16">
            <h2 className="font-serif text-4xl font-bold text-center text-amber-950 mb-4">
              Services
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg">
              Complete flooring solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group"
              >
                <div className="bg-gray-100 h-48 rounded-lg mb-4 overflow-hidden flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-gray-400 text-6xl">📷</div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-amber-950 mb-2 group-hover:text-amber-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Heritage Message Section */}
      <Section className="bg-amber-950 text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Flooring Crafted to Last
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-amber-50">
              At Trademark Flooring, we believe your floors tell the story of your home.
              Whether you're preserving the character of a heritage home or creating lasting
              beauty in a new space, we bring expertise, quality materials, and meticulous
              craftsmanship to every project.
            </p>
            <p className="text-lg leading-relaxed text-amber-50">
              Your floors deserve the best. Let us show you the Trademark Flooring difference.
            </p>
          </div>
        </Container>
      </Section>

      {/* Gallery Preview */}
      <Section className="bg-gray-50">
        <Container>
          <div className="mb-12">
            <h2 className="font-serif text-4xl font-bold text-center text-amber-950 mb-4">
              Gallery
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg">
              Beautiful flooring work from our recent projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/gallery#${service.slug}`}
                className="group"
              >
                <div className="bg-gray-300 aspect-square rounded-lg mb-3 overflow-hidden flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-gray-500 text-5xl">📸</div>
                </div>
                <h3 className="font-serif text-lg font-bold text-amber-950 group-hover:text-amber-900 transition-colors">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-block bg-amber-950 text-white px-8 py-3 rounded font-semibold hover:bg-amber-900 transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </Container>
      </Section>

      {/* Contact CTA */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-amber-950 mb-4">
              Ready to Transform Your Floors?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Get in touch with us today to discuss your flooring project and receive a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${site.phone.href}`}
                className="inline-block bg-amber-950 text-white px-8 py-3 rounded font-semibold hover:bg-amber-900 transition-colors"
              >
                {site.phone.display}
              </a>
              <Link
                href="/contact"
                className="inline-block bg-amber-100 text-amber-950 px-8 py-3 rounded font-semibold hover:bg-amber-200 transition-colors"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
