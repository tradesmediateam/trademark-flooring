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
      <section className="relative py-16 bg-gradient-to-b from-amber-900 to-amber-800 text-white">
        <Container>
          <div className="text-center">
            <h1 className="font-serif text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto">
              Professional flooring solutions for every need
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all hover:bg-amber-50"
              >
                <div className="bg-gray-200 h-40 rounded mb-4 flex items-center justify-center">
                  <div className="text-gray-400 text-4xl">📷</div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-amber-950 mb-2 group-hover:text-amber-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
                <span className="inline-block mt-4 text-amber-900 font-semibold text-sm">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-950 text-white">
        <Container>
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation on your flooring project
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-amber-950 px-8 py-3 rounded font-semibold hover:bg-amber-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
