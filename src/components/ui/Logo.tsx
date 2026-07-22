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
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <div className="h-12 w-12 shrink-0 transition-transform duration-200 group-hover:scale-105">
        <Image
          src="/logo-heritage.svg"
          alt="Trademark Flooring heritage barn logo"
          width={48}
          height={48}
          priority
          className="w-full h-full"
        />
      </div>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-serif text-lg font-bold tracking-tight",
            textColor
          )}
        >
          Trademark
        </span>
        <span
          className={cn(
            "text-[0.65rem] font-semibold uppercase tracking-[0.28em]",
            subColor
          )}
        >
          Flooring
        </span>
      </span>
    </Link>
  );
}
