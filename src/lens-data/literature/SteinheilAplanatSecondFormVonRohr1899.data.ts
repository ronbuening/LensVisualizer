/*
STEINHEIL APLANAT SECOND FORM f/7.7 (von Rohr 1899, Fig. 111)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 298, Fig. 111: "A. Steinheil: Aplanat, 2. Form". Quelle: J. M. Eder 1. 73, that is Eder's Die photographischen
Objektive (Halle, 1891), p. 73. Discussion on pp. 297-298; the 1866 Aplanat and its patent on pp. 294-297.

Printed by von Rohr: reduced to fD = 100 mm; computed for 1:7.7 and omega = 30 deg; r1 = r6 = 26.3, r2 = r5 = 11.0,
r3 = r4 = 38.3; d1 = d4 = 1.05, d2 = d3 = 2.0; b1 = b2 = 9.0 (cell to stop on each side); nD L1 = L4 = 1.61912,
L2 = L3 = 1.58027. No glass names; the text (p. 296) describes the Aplanat as pairs of flint menisci with the
higher-index glass outside, and gives only the ratio of the two glasses' yellow-violet dispersions, 1.244 for this
form. Text results (pp. 297-298): spherical correction at 1:9.1 with a zonal residual of about -0.12 mm; at 30 deg
the meridional field meets the focal plane and the astigmatic difference is 7 mm. Von Rohr marks no value as
assumed: the table is his reduction of Eder's data to f = 100, rounded to 0.1 mm (d1 to 0.01 mm).

Model additions: radius signs from Fig. 111, Tafel II No. 111 and the text (each cell a negative outer meniscus
cemented to a positive inner meniscus, both convex toward the object in front and concave toward the stop; the
rear cell mirrors the front). Last gap = computed paraxial back focus 87.125. The rounded table gives EFL 99.437
(-0.56 %), within the rounding of r1 and r2. Clear radii 6.85 on every surface (heuristic): the package's 6.8 just
blocked the exact chief ray at the printed 30 deg (6.824 at r1 and r6), so all six were raised to keep the square
cells drawn in Fig. 111 at one height; both drawings show the cells to about 7.9 mm and L2/L3 reach a knife edge at
7.20 mm with the printed radii. Stop radius derived from 1:7.7; f-stop list added; field limited to the printed
omega. Element focal lengths are computed (thick, in air).

Indices are nD only (indexReference "D"): von Rohr prints no dispersion for either glass, only their ratio, so the
model is monochromatic and no catalog glass is substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "steinheil-aplanat-second-form-von-rohr-1899",
  maker: null,
  name: "STEINHEIL APLANAT SECOND FORM f/7.7 (von Rohr 1899, Fig. 111)",
  subtitle: "Two cemented flint pairs about a central stop; undated later form of the 1866 Aplanat",
  visible: false,

  catalog: {
    specs: ["4 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 4,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 7.7 },
  },
  source: {
    sdSource: "heuristic",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 298, Fig. 111",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=54",
      after: "J. M. Eder",
    },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Higher-index flint",
      type: "Negative Meniscus",
      nd: 1.61912,
      indexReference: "D",
      focalLengthMm: -31.4,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Outer meniscus of the front cell, convex toward the object; the higher-index flint placed outside.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Lower-index flint",
      type: "Positive Meniscus",
      nd: 1.58027,
      indexReference: "D",
      focalLengthMm: 25.9,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Inner collective meniscus of the front cell, concave toward the stop; joined to L1 at the deep r2.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Lower-index flint",
      type: "Positive Meniscus",
      nd: 1.58027,
      indexReference: "D",
      focalLengthMm: 25.9,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L2 in the rear cell: collective meniscus concave toward the stop.",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L4",
      label: "Higher-index flint",
      type: "Negative Meniscus",
      nd: 1.61912,
      indexReference: "D",
      focalLengthMm: -31.4,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L1: outer meniscus of the rear cell, convex toward the image.",
      cemented: "D2",
    },
  ],
  surfaces: [
    { label: "1", R: 26.3, d: 1.05, sd: 6.85, medium: 1 },
    { label: "2", R: 11, d: 2, sd: 6.85, medium: 2 },
    { label: "3", R: 38.3, d: 9, sd: 6.85 },
    { label: "STO", R: "flat", d: 9 },
    { label: "4", R: -38.3, d: 2, sd: 6.85, medium: 3 },
    { label: "5", R: -11, d: 1.05, sd: 6.85, medium: 4 },
    { label: "6", R: -26.3, d: 87.125, sd: 6.85 },
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only historical reconstruction; no finite-focus motion.",
  },
  aperture: { nominalFNumber: 7.7, fStops: [7.7, 9.1, 11, 16, 22, 32], maxFNumber: 32 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 30 },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "3" },
    { text: "REAR", fromSurface: "4", toSurface: "6" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "4", toSurface: "6" },
  ],

  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
