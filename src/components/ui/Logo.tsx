import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  /** "dark" for light backgrounds, "light" for dark backgrounds. */
  variant?: "dark" | "light";
}) {
  const textColor = variant === "light" ? "text-white" : "text-ink-950";
  const subColor = variant === "light" ? "text-ink-200" : "text-ink-400";

  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-600 text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
        <svg
          width="22"
          height="22"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 22h24" />
          <path d="M7 22V10l9-4 9 4v12" />
          <path d="M12 22v-6h8v6" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            textColor
          )}
        >
          Trademark
        </span>
        <span
          className={cn(
            "text-[0.7rem] font-semibold uppercase tracking-[0.2em]",
            subColor
          )}
        >
          Flooring
        </span>
      </span>
    </Link>
  );
}
