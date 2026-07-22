import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { EstimateCta } from "@/components/estimate/EstimateCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";
import { getService, getServiceSlugs, services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { serviceAreas } from "@/lib/site";

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
    keywords: [service.title, ...service.applications],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.slug !== service.slug && s.category === service.category)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-grid-slate opacity-[0.12]"
          style={{ backgroundSize: "44px 44px" }}
          aria-hidden="true"
        />
        <div className="container relative py-16 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-400">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink-200">{service.title}</span>
          </nav>

          <div className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white">
            <ServiceIcon name={service.icon} className="h-7 w-7" />
          </div>

          <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-200">
            {service.intro}
          </p>

          <div className="mt-8">
            <Button href="/contact" size="lg">
              Get Your Free In-Home Estimate
            </Button>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-bold text-ink-950">
              What&apos;s included
            </h2>
            <ul className="mt-5 space-y-3">
              {service.scope.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink-600">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-2xl font-bold text-ink-950">
              Where it&apos;s used
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.applications.map((app) => (
                <span
                  key={app}
                  className="rounded-full bg-ink-50 px-3.5 py-1.5 text-sm font-medium text-ink-600"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-7">
              <h2 className="font-display text-xl font-bold text-ink-950">
                Why it matters
              </h2>
              <div className="mt-5 space-y-5">
                {service.benefits.map((b) => (
                  <div key={b.title}>
                    <p className="font-semibold text-ink-900">{b.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-sm text-ink-500">
              Serving {serviceAreas.join(", ")}.
            </p>
          </div>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section className="bg-ink-50/50">
          <h2 className="font-display text-2xl font-bold text-ink-950">
            Related services
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <ServiceIcon name={s.icon} className="h-6 w-6 text-brand-600" />
                <h3 className="mt-3 font-display font-bold text-ink-950">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-500">{s.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Learn more
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <EstimateCta />
    </>
  );
}
