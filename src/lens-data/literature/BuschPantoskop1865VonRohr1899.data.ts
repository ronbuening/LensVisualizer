/*
BUSCH PANTOSKOP f/30.4 (von Rohr 1899, Fig. 108)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 281, Fig. 108: "E. Busch: Pantoskop". Quelle: J. M. Eder 1. 144, that is Eder's Die photographischen Objektive
(Halle, 1891), p. 144. Discussion on pp. 280-281; Tafel III redraws the lens at natural size as No. 108 with curves
108a (spherical aberration) and 108b (astigmatism).

Printed by von Rohr: reduced to fD = 100 mm; computed for 1:30.4 and omega = 49 deg; r1 = r6 = 7.45,
r2 = r5 = 10.39, r3 = r4 = 7.63; d1 = d4 = 1.74, d2 = d3 = 0.19; b1 = b2 = 6.2 (cell to stop on each side);
nD L1 = L4 = 1.5331, L2 = L3 = 1.6079. A footnote marks 1.5331 as his correction of an obvious misprint in Eder,
so it is the book's own value. Text result (p. 281): spherical aberration -6.1 mm at 1:30.4. No glass names and no
value marked as assumed.

Model additions: radius signs from Fig. 108 and Tafel III (each cell a thick crown meniscus outside, cemented to a
thin flint meniscus, both convex toward the object in front and concave toward the stop; the rear cell mirrors the
front). Last gap = computed paraxial back focus 91.070. The rounded table gives EFL 100.245 (+0.245 %), within the
rounding of r1 or r3. Clear radii 6.4 on every surface (heuristic): the package's 6.0 blocked the exact chief ray
from 44.5 deg (it crosses r1 and r6 at 6.38 mm at 49 deg), so all six were raised to keep each cell at one height as
both drawings show it; the drawings draw the cells to 6.5-6.7 mm and the crowns reach a knife edge at 6.70 mm.
Stop radius derived from 1:30.4; f-stop list added; field limited to the printed omega. Element focal lengths are
computed (thick, in air).

Indices are nD only (indexReference "D"): von Rohr prints no dispersion, so the model is monochromatic and no catalog
glass is substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "busch-pantoskop-1865-von-rohr-1899",
  maker: "Busch",
  name: "BUSCH PANTOSKOP f/30.4 (von Rohr 1899, Fig. 108)",
  subtitle: "Two deep crown-flint menisci about a central stop; Busch's 1865 modification of the globe lens",
  visible: false,

  catalog: {
    specs: ["4 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 4,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 30.4 },
  },
  source: {
    sdSource: "heuristic",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 281, Fig. 108",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=37",
      after: "J. M. Eder",
    },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Old low-index crown",
      type: "Positive Meniscus",
      nd: 1.5331,
      indexReference: "D",
      focalLengthMm: 41.0,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Thick outer meniscus of the front cell, convex toward the object; carries the cell's collective power.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Flint",
      type: "Negative Meniscus",
      nd: 1.6079,
      indexReference: "D",
      focalLengthMm: -48.5,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Thin inner meniscus of the front cell, concave toward the stop; the achromatizing partner of L1.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Flint",
      type: "Negative Meniscus",
      nd: 1.6079,
      indexReference: "D",
      focalLengthMm: -48.5,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L2 in the rear cell: thin meniscus concave toward the stop.",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L4",
      label: "Old low-index crown",
      type: "Positive Meniscus",
      nd: 1.5331,
      indexReference: "D",
      focalLengthMm: 41.0,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L1: thick outer meniscus of the rear cell, convex toward the image.",
      cemented: "D2",
    },
  ],
  surfaces: [
    { label: "1", R: 7.45, d: 1.74, sd: 6.4, medium: 1 },
    { label: "2", R: 10.39, d: 0.19, sd: 6.4, medium: 2 },
    { label: "3", R: 7.63, d: 6.2, sd: 6.4 },
    { label: "STO", R: "flat", d: 6.2 },
    { label: "4", R: -7.63, d: 0.19, sd: 6.4, medium: 3 },
    { label: "5", R: -10.39, d: 1.74, sd: 6.4, medium: 4 },
    { label: "6", R: -7.45, d: 91.07, sd: 6.4 },
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only historical reconstruction; no finite-focus motion.",
  },
  aperture: { nominalFNumber: 30.4, fStops: [30.4, 40, 56, 64], maxFNumber: 64 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 49 },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "3" },
    { text: "REAR", fromSurface: "4", toSurface: "6" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "4", toSurface: "6" },
  ],

  layout: { yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
