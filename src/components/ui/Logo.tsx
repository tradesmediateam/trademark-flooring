import Link from "next/link";
import Image from "next/image";
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

  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn("group inline-flex shrink-0 items-center gap-3", className)}
    >
      <Image
        src="/logo/logo-mark.svg"
        alt={site.name}
        width={64}
        height={64}
        priority
        className="h-12 w-12 shrink-0 sm:h-14 sm:w-14"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-lg font-bold tracking-tight sm:text-xl",
            textColor
          )}
        >
          Trademark
        </span>
        <span
          className={cn(
            "ml-[5px] mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.26em] sm:ml-1.5 sm:text-xs",
            subColor
          )}
        >
          Flooring
        </span>
      </span>
    </Link>
  );
}
