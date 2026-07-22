import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title:
    "Trademark Flooring | Professional Flooring Contractors in Burnaby | Installation & Supply",
  description:
    "Trademark Flooring — expert flooring contractors in Burnaby since 2007. Professional installation, sanding, refinishing, and supply for hardwood, laminate, vinyl, carpet, stairs, and more.",
  path: "/",
});

/** Small uppercase label used above section headings. */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
      <span className="h-px w-6 bg-brand-500" />
      {children}
    </span>
  );
}

const trustPoints = [
  "Supply & install or install-only",
  "Serving Metro Vancouver since 2007",
  "Residential & commercial projects",
];

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Trademark Flooring",
    image: "/logo-heritage.svg",
    description:
      "Professional flooring contractors in Burnaby providing installation, supply, sanding, and refinishing services since 2007",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Burnaby",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    telephone: site.phone.display,
    email: site.email,
    foundingDate: "2007",
    areaServed: ["Burnaby", "British Columbia", "Metro Vancouver"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-[#241812]">
        {/* Warm depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3a2416] via-[#241812] to-[#160d08]" />
        {/* Subtle floorboard planks */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0) 1px, rgba(255,255,255,0) 76px, rgba(255,255,255,0.9) 77px)",
          }}
        />
        {/* Soft glow */}
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />

        <Container>
          <div className="relative z-10 max-w-3xl py-24 md:py-36">
            <Eyebrow>Flooring Contractors · Burnaby · Since 2007</Eyebrow>
            <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
              Floors done right,
              <br />
              <span className="text-brand-400">the first time.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-amber-100/80">
              Trademark Flooring is Burnaby&apos;s trusted flooring contractor —
              expert installation, supply, and finishing for hardwood, vinyl,
              laminate, carpet, stairs and more.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Get a Free Quote
                <ArrowRightIcon className="h-5 w-5" />
              </Button>
              <Button href={telHref} size="lg" variant="white">
                Call {site.phone.display}
              </Button>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-2">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="inline-flex items-center gap-2 text-sm text-amber-100/70"
                >
                  <CheckIcon className="h-4 w-4 text-brand-400" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ========================== SERVICES ========================== */}
      <Section className="bg-white">
        <div className="mb-16 max-w-2xl">
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-bold text-ink-950 sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Complete flooring solutions — from subfloor preparation to the final
            finished surface.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className={`flex flex-col items-center gap-8 md:gap-14 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full max-w-sm shrink-0 md:w-72">
                <PhotoPlaceholder
                  rounded="rounded-2xl"
                  className="aspect-[4/3] shadow-card"
                />
              </div>
              <div className="flex-1">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 font-serif text-sm font-bold text-brand-700">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink-950 sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-500">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-700 transition-all hover:gap-2.5 hover:text-brand-800"
                >
                  Learn more
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ======================== WHY CHOOSE US ======================== */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0) 1px, rgba(255,255,255,0) 76px, rgba(255,255,255,0.9) 77px)",
          }}
        />
        <Container>
          <div className="relative z-10 py-20 lg:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Built on Trust</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
                Craftsmanship that lasts
              </h2>
              <p className="mt-4 text-lg text-amber-100/70">
                Since 2007 we&apos;ve combined skilled craftsmanship with quality
                materials to create floors built to last for generations.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Expert Installation",
                  body: "Precision and attention to detail on every single job.",
                },
                {
                  title: "Quality Materials",
                  body: "We work only with flooring products built to perform.",
                },
                {
                  title: "Reliable Service",
                  body: "On time, on budget, and standing behind our work.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/20 text-brand-400">
                    <CheckIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-amber-100/60">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================= GALLERY ========================= */}
      <Section className="bg-brand-50/60">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Our Work</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-bold text-ink-950 sm:text-5xl">
            Project Gallery
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            A look at the quality we bring to every flooring category.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {services.slice(0, 8).map((service) => (
            <Link
              key={service.slug}
              href={`/gallery#${service.slug}`}
              className="group"
            >
              <PhotoPlaceholder
                rounded="rounded-xl"
                className="aspect-square transition-shadow group-hover:shadow-card-hover"
              />
              <h3 className="mt-3 font-serif text-base font-bold text-ink-900 transition-colors group-hover:text-brand-700">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Button href="/gallery" variant="secondary" size="lg">
            View Full Gallery
            <ArrowRightIcon className="h-5 w-5" />
          </Button>
        </div>
      </Section>

      {/* =========================== CTA =========================== */}
      <Section className="bg-white">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3a2416] to-[#160d08] px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
              Ready to transform your floors?
            </h2>
            <p className="mt-4 text-lg text-amber-100/80">
              Get in touch for a free, no-obligation quote. We&apos;d love to help
              with your next project.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Request a Quote
              </Button>
              <Button href={telHref} size="lg" variant="white">
                Call {site.phone.display}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
