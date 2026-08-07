/**
 * Static SVG generator for the spherical-aberration article figures.
 *
 * The article markdown references /diagrams/spherical-aberration/*.svg; in the app those paths are
 * substituted with the themed React components, so the static files only serve direct URL hits
 * (feeds, social embeds, hotlinks). Each file embeds the dark and light renders of the same
 * component and switches between them with a prefers-color-scheme media query, so the fallback can
 * never drift from the inline diagrams. Modeled on the mount-SVG report generator: deterministic
 * output, clean diffs.
 *
 * Regenerate: `npm run generate:sa-figure-svgs`
 */
import { describe, expect, it } from "vitest";
import { mkdirSync, writeFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import type { ComponentType } from "react";
import CausticDiagram from "../../../../src/components/diagram/sphericalAberration/CausticDiagram.js";
import ThreeDescriptionsDiagram from "../../../../src/components/diagram/sphericalAberration/ThreeDescriptionsDiagram.js";
import ZonalCurvesDiagram from "../../../../src/components/diagram/sphericalAberration/ZonalCurvesDiagram.js";
import CoreHaloDiagram from "../../../../src/components/diagram/sphericalAberration/CoreHaloDiagram.js";
import ApertureSweepDiagram from "../../../../src/components/diagram/sphericalAberration/ApertureSweepDiagram.js";
import FrontRearDefocusDiagram from "../../../../src/components/diagram/sphericalAberration/FrontRearDefocusDiagram.js";
import SpherochromatismDiagram from "../../../../src/components/diagram/sphericalAberration/SpherochromatismDiagram.js";
import LensBendingDiagram from "../../../../src/components/diagram/sphericalAberration/LensBendingDiagram.js";
import DesignGoalsDiagram from "../../../../src/components/diagram/sphericalAberration/DesignGoalsDiagram.js";

const OUT_DIR = "public/diagrams/spherical-aberration";

const FIGURES: ReadonlyArray<[string, ComponentType<{ isDark: boolean }>]> = [
  ["01-caustic", CausticDiagram],
  ["02-three-descriptions", ThreeDescriptionsDiagram],
  ["03-zonal-curves", ZonalCurvesDiagram],
  ["04-core-halo", CoreHaloDiagram],
  ["05-aperture-sweep", ApertureSweepDiagram],
  ["06-front-rear-defocus", FrontRearDefocusDiagram],
  ["07-spherochromatism", SpherochromatismDiagram],
  ["08-lens-bending", LensBendingDiagram],
  ["09-design-goals", DesignGoalsDiagram],
];

interface RenderedSvg {
  viewBox: string;
  ariaLabel: string;
  inner: string;
}

function splitSvg(markup: string, themePrefix: string): RenderedSvg {
  const viewBox = /viewBox="([^"]+)"/.exec(markup)?.[1];
  const ariaLabel = /aria-label="([^"]+)"/.exec(markup)?.[1];
  const inner = /^<svg[^>]*>([\s\S]*)<\/svg>$/.exec(markup)?.[1];
  if (!viewBox || !ariaLabel || inner === undefined) throw new Error("unexpected diagram SVG markup");
  // Namespace gradient ids so the dark and light copies inside one document cannot collide.
  const namespaced = inner.replace(/(url\(#|id=")(sa\d{2}-)/g, `$1${themePrefix}-$2`);
  return { viewBox, ariaLabel, inner: namespaced };
}

function buildStaticSvg(Diagram: ComponentType<{ isDark: boolean }>): string {
  const dark = splitSvg(renderToStaticMarkup(<Diagram isDark />), "dark");
  const light = splitSvg(renderToStaticMarkup(<Diagram isDark={false} />), "light");
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${dark.viewBox}" width="100%" height="auto" role="img" aria-label="${dark.ariaLabel}">`,
    `  <!-- Generated from src/components/diagram/sphericalAberration/ by npm run generate:sa-figure-svgs; do not edit by hand. -->`,
    `  <style>`,
    `    .sa-light { display: none; }`,
    `    @media (prefers-color-scheme: light) {`,
    `      .sa-dark { display: none; }`,
    `      .sa-light { display: inline; }`,
    `    }`,
    `  </style>`,
    `  <g class="sa-dark">${dark.inner}</g>`,
    `  <g class="sa-light">${light.inner}</g>`,
    `</svg>`,
    ``,
  ].join("\n");
}

describe("spherical-aberration static figure SVGs", () => {
  it("emits a theme-switching static SVG per figure", () => {
    mkdirSync(OUT_DIR, { recursive: true });
    for (const [name, Diagram] of FIGURES) {
      const svg = buildStaticSvg(Diagram);
      expect(svg).toContain(`class="sa-dark"`);
      expect(svg).toContain(`class="sa-light"`);
      expect(svg).toContain("prefers-color-scheme: light");
      // Both renders must carry the shared background so each theme is complete on its own.
      expect(svg).toContain("#12151e");
      expect(svg).toContain("#eff2f8");
      writeFileSync(`${OUT_DIR}/${name}.svg`, svg);
    }
  });
});
