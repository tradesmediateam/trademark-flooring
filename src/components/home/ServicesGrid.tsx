import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { services } from "@/lib/services";
import type { Service } from "@/lib/services";

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-ink-950">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
        {service.summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
        Learn more
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function ServicesGrid() {
  const preparationServices = services.slice(0, 3);
  const sectorServices = services.slice(3);

  return (
    <Section className="bg-ink-50/50">
      <SectionHeading
        eyebrow="What We Do"
        title="Floor preparation services built for every project type"
        description="From a single-family renovation to a 200-suite tower, we bring the right process and equipment to every slab."
      />

      <div className="mt-14">
        <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-ink-400">
          Core Preparation Services
        </h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {preparationServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-ink-400">
          Sectors We Serve
        </h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {sectorServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </Section>
  );
}
