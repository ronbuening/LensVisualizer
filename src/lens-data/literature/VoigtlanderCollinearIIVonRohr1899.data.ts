/*
VOIGTLÄNDER COLLINEAR TYPE II f/6.9 (von Rohr 1899, Fig. 144)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 385, Fig. 144: "D. Kaempfer: Collinear, Typus II". Quelle: D. Kaempfer 2, which von Rohr's bibliography (p. 416)
lists as D.R.P. 90 482 of 22 May 1895, Voigtländer & Sohn in Braunschweig, "auf das Collinear, Typus II".
Discussion on pp. 385-386. Not the Collinear sold as Series II (1:6.3), which was Collinear Typus I (p. 384).

Printed by von Rohr: reduced to fD = 100 mm; computed for 1:6.9 and omega = 30 1/2 deg; r1 = r8 = 32.6,
r2 = r7 = 11.0, r3 = r6 = 14.5, r4 = r5 = 41.1; d1 = d6 = 1.3, d2 = d5 = 1.8, d3 = d4 = 3.0; b1 = b2 = 3.3 (cell to
stop on each side); nD L1 = L6 = 1.5682, L2 = L5 = 1.5262, L3 = L4 = 1.6112. Glass names and barred-nu figures on
p. 386: heaviest baryta crown H (nu-bar 44.8), high-dispersion crown N (39.8), baryta light flint M (38.2); the cell
is of type +H, -/+N, -M. Text results (p. 386): spherical correction for about 1:7, zones about -0.6 mm, field
curvature unfavourable. Von Rohr marks no value as assumed: the table is his reduction of the patent example.

Model additions: radius signs from Fig. 144 (three menisci per cell, all concave toward the central stop) and from
the patent text (a low-index positive middle meniscus between a positive and a negative meniscus of higher index).
Last gap = computed paraxial back focus 91.890. EFL 99.885 (-0.11 %, table rounding). Clear radii 8.0 on every
surface are the package's heuristic values, kept: the f/6.9 axial beam (7.24 at r1) passes and the chief ray passes
the printed 30.5 deg. Fig. 144 draws the cells to about 9.2 mm, where L2 nearly reaches its knife edge (9.37 mm).
Stop radius derived from 1:6.9; f-stop list added; field limited to the printed omega. Element focal lengths are
computed (thick, in air).

Indices are nD only (indexReference "D"): von Rohr's nu-bar is (nD - 1)/(nG' - nD), a photographic blue figure, not
an Abbe number, so the model is monochromatic and no catalog glass is substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "voigtlander-collinear-ii-1895-von-rohr-1899",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER COLLINEAR TYPE II f/6.9 (von Rohr 1899, Fig. 144)",
  subtitle: "Kaempfer's three-meniscus doublet of 1895 reduced from its patent; no introduction known to von Rohr",
  visible: false,

  catalog: {
    specs: ["6 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 6,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 6.9 },
  },
  source: {
    sdSource: "heuristic",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 385, Fig. 144",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=141",
      after: "D. Kaempfer",
    },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Baryta light flint",
      type: "Negative Meniscus",
      nd: 1.5682,
      indexReference: "D",
      focalLengthMm: -29.9,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Outer negative meniscus of the front triplet, concave toward the stop; most dispersive glass of the cell.",
      cemented: "T1",
    },
    {
      id: 2,
      name: "L2",
      label: "High-dispersion crown",
      type: "Positive Meniscus",
      nd: 1.5262,
      indexReference: "D",
      focalLengthMm: 73.6,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Low-index positive middle meniscus between the higher-index lenses; nearly a knife edge at the rim.",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "Heaviest baryta crown",
      type: "Positive Meniscus",
      nd: 1.6112,
      indexReference: "D",
      focalLengthMm: 35.2,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "High-index positive meniscus next to the stop; carries most of the cell's collective power.",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L4",
      label: "Heaviest baryta crown",
      type: "Positive Meniscus",
      nd: 1.6112,
      indexReference: "D",
      focalLengthMm: 35.2,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L3: high-index positive meniscus next to the stop in the rear triplet.",
      cemented: "T2",
    },
    {
      id: 5,
      name: "L5",
      label: "High-dispersion crown",
      type: "Positive Meniscus",
      nd: 1.5262,
      indexReference: "D",
      focalLengthMm: 73.6,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L2: low-index positive middle meniscus of the rear triplet.",
      cemented: "T2",
    },
    {
      id: 6,
      name: "L6",
      label: "Baryta light flint",
      type: "Negative Meniscus",
      nd: 1.5682,
      indexReference: "D",
      focalLengthMm: -29.9,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L1: outer negative meniscus of the rear triplet.",
      cemented: "T2",
    },
  ],
  surfaces: [
    { label: "1", R: 32.6, d: 1.3, sd: 8, medium: 1 },
    { label: "2", R: 11, d: 1.8, sd: 8, medium: 2 },
    { label: "3", R: 14.5, d: 3, sd: 8, medium: 3 },
    { label: "4", R: 41.1, d: 3.3, sd: 8 },
    { label: "STO", R: "flat", d: 3.3 },
    { label: "5", R: -41.1, d: 3, sd: 8, medium: 4 },
    { label: "6", R: -14.5, d: 1.8, sd: 8, medium: 5 },
    { label: "7", R: -11, d: 1.3, sd: 8, medium: 6 },
    { label: "8", R: -32.6, d: 91.89, sd: 8 },
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only historical reconstruction; no finite-focus motion.",
  },
  aperture: { nominalFNumber: 6.9, fStops: [6.9, 8, 11, 16], maxFNumber: 16 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 30.5 },

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
