import type { SVGProps } from "react";
import type { ServiceIconName } from "@/lib/services";

type Props = { name: ServiceIconName } & SVGProps<SVGSVGElement>;

const svg = (props: SVGProps<SVGSVGElement>) => ({
  width: 28,
  height: 28,
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

const paths: Record<ServiceIconName, React.ReactNode> = {
  // Self-levelling — level bubble
  level: (
    <>
      <rect x="4" y="12" width="24" height="8" rx="1.5" />
      <circle cx="16" cy="16" r="2.2" />
      <path d="M12 16h1M19 16h1" />
      <path d="M4 24h24" />
    </>
  ),
  // Concrete grinding — rotating disc
  grind: (
    <>
      <circle cx="16" cy="16" r="9" />
      <circle cx="16" cy="16" r="3" />
      <path d="M16 7v3M16 22v3M7 16h3M22 16h3" />
      <path d="m10 10 2 2M22 22l-2-2M22 10l-2 2M10 22l2-2" />
    </>
  ),
  // Floor preparation — trowel
  prep: (
    <>
      <path d="M6 20 20 6l6 6L12 26l-6-6Z" />
      <path d="m18 8 6 6" />
      <path d="M4 28h12" />
    </>
  ),
  // Patching — filled crack
  patch: (
    <>
      <path d="M4 22h24" />
      <path d="M10 22c1-4 2-6 4-8s3-4 2-8" />
      <path d="M16 6c2 4 1 7-1 9" />
      <circle cx="21" cy="12" r="1" fill="currentColor" />
      <circle cx="9" cy="16" r="1" fill="currentColor" />
    </>
  ),
  // Skim coating — smooth blade + surface
  skim: (
    <>
      <path d="M5 18h22" />
      <path d="M7 18c2-2 5-2 9-2s7 0 9 2" />
      <rect x="12" y="5" width="8" height="4" rx="1" />
      <path d="M16 9v5" />
    </>
  ),
  // Residential — house
  residential: (
    <>
      <path d="M5 15 16 6l11 9" />
      <path d="M8 13v11h16V13" />
      <path d="M14 24v-6h4v6" />
    </>
  ),
  // Commercial — storefront
  commercial: (
    <>
      <path d="M5 12h22l-1.5-5h-19L5 12Z" />
      <path d="M6 12v14h20V12" />
      <path d="M12 26v-8h8v8" />
    </>
  ),
  // High-rise — tall tower
  highrise: (
    <>
      <rect x="10" y="4" width="12" height="24" rx="1" />
      <path d="M13 8h2M17 8h2M13 12h2M17 12h2M13 16h2M17 16h2M13 20h2M17 20h2" />
      <path d="M6 28h20" />
    </>
  ),
  // Low-rise — wide building
  lowrise: (
    <>
      <rect x="5" y="12" width="22" height="14" rx="1" />
      <path d="M9 16h2M15 16h2M21 16h2M9 20h2M15 20h2M21 20h2" />
      <path d="M11 8h10v4" />
      <path d="M4 26h24" />
    </>
  ),
  // Multi-family — building blocks
  multifamily: (
    <>
      <rect x="4" y="14" width="10" height="12" rx="1" />
      <rect x="16" y="8" width="12" height="18" rx="1" />
      <path d="M7 18h1M10 18h1M7 22h1M10 22h1" />
      <path d="M19 12h2M24 12h2M19 16h2M24 16h2M19 20h2M24 20h2" />
      <path d="M2 26h28" />
    </>
  ),
};

export function ServiceIcon({ name, ...props }: Props) {
  return <svg {...svg(props)}>{paths[name]}</svg>;
}
