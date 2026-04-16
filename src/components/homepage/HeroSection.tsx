/**
 * HeroSection — site hero with name, tagline, and description.
 */

import type { Theme } from "../../types/theme.js";
import useMediaQuery from "../../utils/useMediaQuery.js";

interface HeroSectionProps {
  theme: Theme;
  brandMarkSrc: string;
  useDarkBrandFrame: boolean;
}

export default function HeroSection({ theme: t, brandMarkSrc, useDarkBrandFrame }: HeroSectionProps) {
  const isWide = useMediaQuery("(min-width: 720px)");

  return (
    <section style={{ padding: isWide ? "3rem 1rem 2rem" : "2rem 0.5rem 1.5rem" }}>
      <div
        style={
          isWide
            ? {
                display: "grid",
                gridTemplateColumns: "minmax(220px, 300px) minmax(0, 1.5fr)",
                gap: "2rem",
                alignItems: "center",
              }
            : { textAlign: "center" }
        }
      >
        <div
          style={{
            margin: isWide ? 0 : "1.5rem auto 0",
            maxWidth: isWide ? "100%" : 320,
            padding: isWide ? "1.05rem" : "0.9rem",
            borderRadius: 14,
            border: `1px solid ${t.panelBorder}`,
            background: useDarkBrandFrame
              ? "linear-gradient(180deg, rgba(10,14,20,0.98), rgba(6,9,14,0.96))"
              : "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(244,246,249,0.96))",
            boxShadow: useDarkBrandFrame
              ? "0 18px 36px rgba(0,0,0,0.28)"
              : "0 18px 36px rgba(20,28,40,0.08)",
          }}
        >
          <img
            src={brandMarkSrc}
            alt="Optical Bench lens mark"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        <div style={{ textAlign: isWide ? "left" : "center" }}>
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
              maxWidth: isWide ? 560 : 600,
              margin: isWide ? 0 : "0 auto",
              lineHeight: 1.6,
            }}
          >
            Explore real camera lens designs built from optical patent data. Trace rays through multi-element
            systems, adjust focus and aperture in real time, inspect individual elements, and analyze chromatic
            aberrations.
          </p>
        </div>
      </div>
    </section>
  );
}
