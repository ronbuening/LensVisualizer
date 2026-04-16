/**
 * HeroSection — site hero with name, tagline, and description.
 */

import type { Theme } from "../../types/theme.js";
import useMediaQuery from "../../utils/useMediaQuery.js";

interface HeroSectionProps {
  theme: Theme;
}

export default function HeroSection({ theme: t }: HeroSectionProps) {
  const isWide = useMediaQuery("(min-width: 720px)");

  return (
    <section style={{ textAlign: "center", padding: isWide ? "3rem 1rem 2rem" : "2rem 0.5rem 1.5rem" }}>
      <h1
        style={{
          fontSize: isWide ? "2.25rem" : "1.75rem",
          fontWeight: 700,
          color: t.title,
          margin: "0 0 0.5rem",
          letterSpacing: "-0.02em",
        }}
      >
        Optical Bench
      </h1>
      <p
        style={{
          fontSize: isWide ? "1rem" : "0.875rem",
          color: t.subtitle,
          margin: "0 0 1.25rem",
          letterSpacing: "0.04em",
          fontWeight: 500,
        }}
      >
        Interactive Camera Lens Cross-Section Visualizer
      </p>
      <p
        style={{
          fontSize: isWide ? "0.85rem" : "0.8rem",
          color: t.muted,
          maxWidth: 560,
          margin: "0 auto",
          lineHeight: 1.6,
        }}
      >
        Explore real camera lens designs built from optical patent data. Trace rays through multi-element systems,
        adjust focus and aperture in real time, inspect individual elements, 
        and analyze chromatic aberrations.
      </p>
    </section>
  );
}
