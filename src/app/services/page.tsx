import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Trademark Flooring offers professional flooring installation, refinishing, and repair services.",
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
              Professional flooring solutions for every need. From preparation to installation and finishing.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col p-8 bg-white rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 rounded-lg mb-6 flex items-center justify-center group-hover:from-amber-100 group-hover:to-amber-50 transition-all">
                  <div className="text-gray-400 group-hover:text-amber-600 transition-colors text-5xl">🏗️</div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-amber-950 mb-3 group-hover:text-amber-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <span className="inline-block text-amber-900 font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More →
                </span>
              </Link>
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
              Contact us today for a free consultation on your flooring project. Our team is ready to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:PHONENUMBER"
                className="inline-block bg-white text-amber-950 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
              >
                Call Us Now
              </a>
              <Link
                href="/contact"
                className="inline-block bg-amber-100 text-amber-950 px-8 py-4 rounded-lg font-semibold hover:bg-amber-200 transition-colors"
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
