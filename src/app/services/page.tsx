import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { EstimateCta } from "@/components/estimate/EstimateCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { preparationServices, sectorServices } from "@/lib/services";
import type { Service } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { serviceAreas } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Flooring Preparation Services",
  description:
    "Self-levelling, concrete grinding, floor preparation, patching, and skim coating for residential, commercial, high-rise, low-rise, and multi-family projects across Metro Vancouver.",
  path: "/services",
});

function ServiceRow({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex items-start gap-5 rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
    >
      <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <h3 className="font-display text-lg font-bold text-ink-950">
          {service.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
          {service.summary}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
          View details
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <Section className="bg-ink-950 text-white" contained={false}>
        <div className="container py-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-400">
            Our Services
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Flooring preparation services for every project
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-200">
            From dead-flat self-levelling to precision grinding and patching,
            we prepare concrete substrates across {serviceAreas.slice(0, 3).join(", ")}, and the rest of Metro Vancouver — for
            residential, commercial, high-rise, low-rise, and multi-family
            projects.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading
          eyebrow="Core Preparation Services"
          title="The building blocks of a finish-ready floor"
          align="left"
          className="mx-0 max-w-2xl"
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {preparationServices.map((service) => (
            <ServiceRow key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section className="bg-ink-50/50">
        <SectionHeading
          eyebrow="Sectors We Serve"
          title="Prep experience across every building type"
          align="left"
          className="mx-0 max-w-2xl"
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {sectorServices.map((service) => (
            <ServiceRow key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <EstimateCta />
    </>
  );
}
