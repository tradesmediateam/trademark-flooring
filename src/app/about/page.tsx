import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ValueIcon } from "@/components/ui/Icons";
import { EstimateCta } from "@/components/estimate/EstimateCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { stats, whyChooseUs, testimonials } from "@/lib/content";
import { site, serviceAreas } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { StarIcon } from "@/components/ui/Icons";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: `Learn about Trademark Flooring, Metro Vancouver's concrete floor preparation specialists — self-levelling, grinding, patching, and skim coating since ${site.foundedYear}.`,
  path: "/about",
});

const timeline = [
  {
    year: String(site.foundedYear),
    title: "Trademark Flooring is founded",
    description:
      "Started with a single crew and a commitment to getting concrete substrates right — the unglamorous work that makes every finished floor possible.",
  },
  {
    year: "2015",
    title: "Expansion into commercial & high-rise",
    description:
      "Added pump trucks and ride-on grinders to take on large commercial floor plates and high-rise towers across Metro Vancouver.",
  },
  {
    year: "2020",
    title: "Dust-controlled process across every job",
    description:
      "Standardized HEPA-filtered dust extraction on all grinding work, making us the trusted choice for occupied buildings and finished homes.",
  },
  {
    year: "Today",
    title: "500+ projects and counting",
    description:
      "From custom homes to 200-suite towers, we've prepared millions of square feet of concrete floor across British Columbia.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <Section className="bg-ink-950 text-white" contained={false}>
        <div className="container py-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-400">
            About {site.name}
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Concrete floor preparation specialists, since {site.foundedYear}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-200">
            We exist to solve one problem exceptionally well: getting
            concrete substrates flat, sound, and finish-ready — so the
            flooring that goes on top performs the way it&apos;s supposed to.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-bold text-ink-950">
              Our story
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-500">
              <p>
                Trademark Flooring was founded on a simple observation: most
                flooring failures — lippage, telegraphing, delamination,
                squeaks — don&apos;t come from bad flooring. They come from a
                substrate that was never properly prepared. We built a
                company entirely around fixing that.
              </p>
              <p>
                Today our crews run self-levelling, concrete grinding, floor
                preparation, patching, and skim coating on projects of every
                size, from a single-family renovation in {serviceAreas[0]}{" "}
                to multi-hundred-suite towers across{" "}
                {serviceAreas.slice(1, 4).join(", ")}. What hasn&apos;t changed is
                the standard: every floor gets tested, documented, and
                prepared to spec before we call it done.
              </p>
              <p>
                We work as an extension of the general contractors,
                developers, and flooring installers who hire us — showing up
                on schedule, controlling dust in occupied spaces, and handing
                off a floor the next trade is glad to work on.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-ink-100 bg-ink-50/60 p-6"
                >
                  <p className="font-display text-3xl font-bold text-ink-950">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-sm text-ink-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-ink-50/50">
        <SectionHeading
          eyebrow="Our Journey"
          title="How we got here"
          description="Fifteen-plus years of getting floors right, one project at a time."
        />
        <div className="mx-auto mt-14 max-w-3xl space-y-8 border-l-2 border-ink-100 pl-8">
          {timeline.map((item) => (
            <div key={item.title} className="relative">
              <span className="absolute -left-[2.35rem] top-1 h-4 w-4 rounded-full border-2 border-brand-600 bg-white" />
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                {item.year}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold text-ink-950">
                {item.title}
              </h3>
              <p className="mt-1.5 text-ink-500">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading
          eyebrow="Our Values"
          title="What guides every project"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-ink-100 p-6"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-brand-400">
                <ValueIcon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-ink-50/50">
        <SectionHeading eyebrow="Testimonials" title="Trusted across the industry" />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card"
            >
              <div className="flex gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-brand-500" />
                ))}
              </div>
              <blockquote className="mt-4 text-lg leading-relaxed text-ink-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-ink-950">{t.author}</span>
                <span className="text-ink-400"> · {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <EstimateCta />
    </>
  );
}
