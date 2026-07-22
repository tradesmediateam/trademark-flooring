import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Trademark Flooring | Professional Flooring Contractors in Burnaby | Installation & Supply",
  description: "Trademark Flooring - Expert flooring contractors in Burnaby since 2007. Professional installation, sanding, refinishing, and supply services for hardwood, laminate, vinyl, carpet, stairs, and more.",
  path: "/",
});

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Trademark Flooring",
    "image": "/logo-heritage.svg",
    "description": "Professional flooring contractors in Burnaby providing installation, supply, sanding, and refinishing services since 2007",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Burnaby",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "telephone": "(604) 555-0142",
    "email": "contact@trademarflooring.ca",
    "foundingDate": "2007",
    "areaServed": ["Burnaby", "British Columbia", "Metro Vancouver"],
    "serviceType": ["Flooring Installation", "Hardwood Flooring", "Laminate Flooring", "Vinyl Flooring", "Carpet Installation", "Stairs Installation", "Mouldings Installation", "Self-Levelling Concrete"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section
        className="relative py-32 md:py-48 text-white overflow-hidden"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, #6B4423 0px, #6B4423 10px, #8B5A2B 10px, #8B5A2B 20px),
            repeating-linear-gradient(-45deg, #8B5A2B 0px, #8B5A2B 10px, #6B4423 10px, #6B4423 20px)
          `,
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0, 0 0'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Decorative barn shape */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full fill-orange-400">
            <polygon points="100,20 180,80 180,180 20,180 20,80" />
            <polygon points="100,20 180,80 100,120 20,80" fill="currentColor" />
          </svg>
        </div>

        <Container>
          <div className="relative z-10 max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Quality Flooring Contractors Since 2007
            </h1>
            <p className="text-xl md:text-2xl font-light mb-10 text-amber-50 leading-relaxed">
              Trademark Flooring - Burnaby's trusted flooring experts. Professional installation, sanding, refinishing, and supply. We handle every project with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-bold text-lg rounded transition-colors"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="inline-block bg-white hover:bg-gray-100 text-amber-900 px-8 py-4 font-bold text-lg rounded transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mb-16">
            <h2 className="font-serif text-4xl font-bold text-amber-900 mb-2 relative inline-block">
              Our Services
              <div className="absolute bottom-0 left-0 w-20 h-1 bg-orange-500"></div>
            </h2>
            <p className="text-gray-600 text-lg mt-4">Professional flooring solutions for every need</p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <article key={service.slug} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                {/* Image Circle */}
                <div className="flex-shrink-0 w-64 h-64">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-6xl shadow-lg">
                    🏗️
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-serif text-3xl font-bold text-amber-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block text-orange-500 font-bold hover:text-orange-600 transition-colors text-lg"
                  >
                    Learn More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Heritage Message Section */}
      <section
        className="relative py-20 text-white text-center"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, #5C3D2E 0px, #5C3D2E 10px, #7A5230 10px, #7A5230 20px),
            repeating-linear-gradient(-45deg, #7A5230 0px, #7A5230 10px, #5C3D2E 10px, #5C3D2E 20px)
          `,
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0, 0 0'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <Container>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Built on Quality & Trust
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-amber-50">
              Since 2007, Trademark Flooring has been Burnaby's go-to flooring contractor. We combine expert craftsmanship with quality materials to create floors that last. Whether you need installation, sanding, refinishing, or supply - we&apos;ve got you covered.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-bold text-lg rounded transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </Container>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="mb-16">
            <h2 className="font-serif text-4xl font-bold text-amber-900 mb-2 relative inline-block">
              Project Gallery
              <div className="absolute bottom-0 left-0 w-20 h-1 bg-orange-500"></div>
            </h2>
            <p className="text-gray-600 text-lg mt-4">See our flooring work in action</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/gallery#${service.slug}`}
                className="group"
              >
                <div className="bg-gray-300 aspect-square rounded-lg mb-4 overflow-hidden flex items-center justify-center hover:shadow-xl transition-shadow">
                  <div className="text-gray-500 text-6xl">📸</div>
                </div>
                <h3 className="font-serif text-lg font-bold text-amber-900 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-bold transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
