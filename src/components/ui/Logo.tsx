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
  const textColor = variant === "light" ? "text-white" : "text-amber-950";
  const subColor = variant === "light" ? "text-amber-100" : "text-amber-700";
  const barColor = variant === "light" ? "bg-amber-100" : "bg-amber-600";

  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      {/* Accent bar */}
      <span
        className={cn(
          "h-9 w-1 rounded-full transition-transform duration-200 group-hover:scale-y-110",
          barColor
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-xl font-bold tracking-tight sm:text-2xl",
            textColor
          )}
        >
          Trademark
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.34em] sm:text-[0.7rem]",
            subColor
          )}
        >
          Flooring
        </span>
      </span>
    </Link>
  );
}
