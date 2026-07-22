import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Logo({
  className,
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/logo/logo-mark.svg"
        alt={site.name}
        width={64}
        height={64}
        priority
        className="h-14 w-14 sm:h-16 sm:w-16"
      />
    </Link>
  );
}
