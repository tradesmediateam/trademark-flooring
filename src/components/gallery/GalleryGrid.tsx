"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectSector } from "@/lib/projects";
import { projectSectors } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

const ALL = "All Projects" as const;
type Filter = typeof ALL | ProjectSector;

/**
 * Client-side filterable grid. Designed to comfortably scale: filtering is a
 * cheap in-memory operation, and swapping in pagination or "load more" later
 * only touches this component — project data and cards don't change.
 */
export function GalleryGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>(ALL);

  const filters: Filter[] = [ALL, ...projectSectors];

  const filtered = useMemo(
    () =>
      filter === ALL ? projects : projects.filter((p) => p.sector === filter),
    [projects, filter]
  );

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filter projects by sector"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              filter === f
                ? "bg-ink-950 text-white"
                : "bg-ink-50 text-ink-600 hover:bg-ink-100"
            )}
            aria-pressed={filter === f}
          >
            {f}
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
          No projects in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}
