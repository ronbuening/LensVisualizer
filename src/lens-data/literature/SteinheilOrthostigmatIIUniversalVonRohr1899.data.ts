/*
STEINHEIL ORTHOSTIGMAT TYPE II f/6 (von Rohr 1899, Fig. 143)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 383, Fig. 143 "R. Steinheil: Orthostigmat. Typus II.", also drawn on Tafel II as No. 143 with curves 143a/143b.
"Quelle: R. Steinheil. 3." is von Rohr's bibliography entry (p. 430): D.R.P. 88 505 of 28 Nov. 1893, used through
the abstract of the English patent "Steinheil's improvements in lenses" (B. J. 1896, 43, No. 1891, 489-490).
Discussion on pp. 382-384; p. 384 names this slower form the universal lens and gives its glasses.

Printed by von Rohr: reduced to fD = 100 mm; computed for 1:6.0 and omega = 28 deg; r1 = r8 = 35.0, r2 = r7 = 28.3,
r3 = r6 = 15.8, r4 = r5 = 41.0; d1 = d6 = 4.1, d2 = d5 = 5.1, d3 = d4 = 0.8; b1 = b2 = 5.06 (cell to stop on each
side); nD L1 = L6 = 1.61003, L2 = L5 = 1.51874, L3 = L4 = 1.56370. Glass names and nu-bar figures on p. 384:
heaviest baryta crown H (nu-bar 44.6), crown with high dispersion N (41.6), baryta light flint M (39.2). Text
results: spherical correction reached for about 1:6, zones not more than about -0.5 mm; the meridional field is more
curved than the sagittal. No value is marked as assumed: the table is the patent's first example (f = 493 mm, 1:6.2)
reduced to f = 100 and rounded to 0.1 mm.

Model additions: radius signs from Fig. 143 and the patent claim (biconvex outer lens, positive meniscus in the
middle, biconcave lens next to the stop; rear cell mirrored). Last gap = computed paraxial back focus 85.498. The
rounded table gives EFL 99.587 (-0.41 %); the unrounded patent values scaled to f = 100 give 100.000, so the residual
is rounding. Clear radii 10 on every surface are kept from the package as heuristic values: Fig. 143, drawn at natural
size, ends both cells square at 10.0-10.2 mm; the f/6 axial beam (8.30 mm at r1) passes and the chief ray passes the
printed 28 deg with ordinary rim vignetting. Stop radius derived from 1:6; f-stop list added; field limited to the
printed omega. Element focal lengths are computed (thick, in air).

Indices are nD only (indexReference "D"): von Rohr's nu-bar is (nD - 1)/(nG' - nD), a photographic blue figure, not
an Abbe number, and the patent prints nF without nC, so the model is monochromatic and no catalog glass is
substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "steinheil-orthostigmat-ii-universal-1893-von-rohr-1899",
  maker: null,
  name: "STEINHEIL ORTHOSTIGMAT TYPE II f/6 (von Rohr 1899, Fig. 143)",
  subtitle: "Universal form: two cemented triplets about a central stop; patent example of 1893 reduced by von Rohr",
  visible: false,

  catalog: {
    specs: ["6 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 6,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 6 },
  },
  source: {
    sdSource: "heuristic",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 383, Fig. 143",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=139",
      after: "R. Steinheil",
    },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Heaviest baryta crown",
      type: "Biconvex Positive",
      nd: 1.61003,
      indexReference: "D",
      focalLengthMm: 26.3,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Outer high-index collective of the front triplet; its rear face r2 is the collective cemented surface.",
      cemented: "T1",
    },
    {
      id: 2,
      name: "L2",
      label: "High-dispersion crown",
      type: "Positive Meniscus",
      nd: 1.51874,
      indexReference: "D",
      focalLengthMm: 60.5,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Low-index positive meniscus enclosed by L1 and L3, convex toward the stop; the patent's middle lens.",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "Baryta light flint",
      type: "Biconcave Negative",
      nd: 1.5637,
      indexReference: "D",
      focalLengthMm: -20.1,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Medium-index biconcave lens next to the stop; its front face r3 is the dispersive cemented surface.",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L4",
      label: "Baryta light flint",
      type: "Biconcave Negative",
      nd: 1.5637,
      indexReference: "D",
      focalLengthMm: -20.1,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L3 in the rear triplet: biconcave lens next to the stop.",
      cemented: "T2",
    },
    {
      id: 5,
      name: "L5",
      label: "High-dispersion crown",
      type: "Positive Meniscus",
      nd: 1.51874,
      indexReference: "D",
      focalLengthMm: 60.5,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L2: low-index positive meniscus of the rear triplet, convex toward the stop.",
      cemented: "T2",
    },
    {
      id: 6,
      name: "L6",
      label: "Heaviest baryta crown",
      type: "Biconvex Positive",
      nd: 1.61003,
      indexReference: "D",
      focalLengthMm: 26.3,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L1: outer high-index collective of the rear triplet.",
      cemented: "T2",
    },
  ],
  surfaces: [
    { label: "1", R: 35, d: 4.1, sd: 10, medium: 1 },
    { label: "2", R: -28.3, d: 5.1, sd: 10, medium: 2 },
    { label: "3", R: -15.8, d: 0.8, sd: 10, medium: 3 },
    { label: "4", R: 41, d: 5.06, sd: 10 },
    { label: "STO", R: "flat", d: 5.06 },
    { label: "5", R: -41, d: 0.8, sd: 10, medium: 4 },
    { label: "6", R: 15.8, d: 5.1, sd: 10, medium: 5 },
    { label: "7", R: 28.3, d: 4.1, sd: 10, medium: 6 },
    { label: "8", R: -35, d: 85.498, sd: 10 },
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only historical reconstruction; no finite-focus motion.",
  },
  aperture: { nominalFNumber: 6, fStops: [6, 8, 11, 16], maxFNumber: 16 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 28 },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "4" },
    { text: "REAR", fromSurface: "5", toSurface: "8" },
  ],
  doublets: [
    { text: "T1", fromSurface: "1", toSurface: "4" },
    { text: "T2", fromSurface: "5", toSurface: "8" },
  ],

  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
