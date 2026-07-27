"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

const ALL = "All" as const;

/**
 * Client-side filterable grid. Filters projects by service and by city — both
 * cheap in-memory operations that scale comfortably to hundreds of projects.
 */
export function GalleryGrid({
  projects,
  services,
  cities,
}: {
  projects: Project[];
  services: string[];
  cities: string[];
}) {
  const [service, setService] = useState<string>(ALL);
  const [city, setCity] = useState<string>(ALL);

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (service === ALL || p.services.includes(service)) &&
          (city === ALL || p.location === city)
      ),
    [projects, service, city]
  );

  const chip = (active: boolean) =>
    cn(
      "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
      active
        ? "bg-ink-950 text-white"
        : "bg-ink-50 text-ink-600 hover:bg-ink-100"
    );

  return (
    <div>
      {/* Service filter */}
      <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by service">
        {[ALL, ...services].map((s) => (
          <button key={s} type="button" onClick={() => setService(s)} className={chip(service === s)} aria-pressed={service === s}>
            {s === ALL ? "All Services" : s}
          </button>
        ))}
      </div>

      {/* City filter */}
      <div className="mt-3 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by city">
        {[ALL, ...cities].map((c) => (
          <button key={c} type="button" onClick={() => setCity(c)} className={chip(city === c)} aria-pressed={city === c}>
            {c === ALL ? "All Cities" : c}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-ink-500">
          No projects match those filters yet — try a different combination.
        </p>
      )}
    </div>
  );
}
