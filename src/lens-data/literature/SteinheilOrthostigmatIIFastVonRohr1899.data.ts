/*
STEINHEIL ORTHOSTIGMAT TYPE II f/4.02 (von Rohr 1899, Fig. 142)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 383, Fig. 142 "R. Steinheil: Orthostigmat. Typus II.", "Quelle: R. Steinheil. 3." Bibliography entry R. Steinheil
(3.), p. 430: D.R.P. 88 505 of 28 November 1893, used through the excerpt of the English patent in B. J. 1896, 43,
No. 1891, pp. 489-490. Also drawn on Tafel I as No. 142 with curves 142a/142b; history and glasses on pp. 382-384.

Printed by von Rohr: reduced to fD = 100 mm; computed for 1:4.02 and omega = 29 deg; r1 = r8 = 47.9,
r2 = r7 = 117.6, r3 = r6 = 29.7, r4 = r5 = 102.4; d1 = d6 = 4.2, d2 = d5 = 5.2, d3 = d4 = 0.8; b1 = b2 = 5.2 (each
triplet to the central stop); nD L1 = L6 = 1.62356 (baryta flint), L2 = L5 = 1.50786 (borosilicate crown),
L3 = L4 = 1.60304 (ordinary light flint). No value is marked as assumed. The table equals the second example of
D.R.P. 88 505 (f = 476 mm, 1:4) scaled by its computed D-line focal length, 478.38 mm, and rounded to 0.1 mm; 1:4.02
is the patent's semi-aperture X0 = 59.5 mm at that focal length.

Model additions: radius signs from Fig. 142, Tafel I and the patent claim (biconvex outer flint, crown meniscus,
biconcave inner flint, rear triplet mirrored). Last gap = computed paraxial back focus 86.553. The rounded table
traces to EFL 100.163 (+0.16 %); the unrounded patent values give exactly 100. Clear radii: 14 mm on every face are
earlier estimates, kept because the 1:4.02 axial beam passes (12.46 mm at r1) and the chief ray passes the
printed 29 deg with one-sided rim vignetting; Fig. 142 and Tafel I draw each triplet as one cylinder of about
13.3-13.6 mm. Stop at the printed central position, radius derived from 1:4.02; f-stop list added; field limit =
printed 29 deg. Element focal lengths are computed (thick, in air).

Indices are nD only (indexReference "D"): von Rohr's barred nu is (nD - 1)/(nG' - nD), not an Abbe number, so the
model is monochromatic and no catalog glass is substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "steinheil-orthostigmat-ii-fast-1893-von-rohr-1899",
  maker: null,
  name: "STEINHEIL ORTHOSTIGMAT TYPE II f/4.02 (von Rohr 1899, Fig. 142)",
  subtitle: "Fast portrait form of R. Steinheil's 1893 two-triplet patent, reduced by von Rohr",
  visible: false,

  catalog: {
    specs: ["6 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 6,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 4.02 },
  },
  source: {
    sdSource: "heuristic",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 383, Fig. 142",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=139",
      after: "R. Steinheil",
    },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Baryta flint",
      type: "Biconvex Positive",
      nd: 1.62356,
      indexReference: "D",
      focalLengthMm: 55.1,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Outer biconvex collective of the front triplet, a flint of higher index than the crown it encloses.",
      cemented: "T1",
    },
    {
      id: 2,
      name: "L2",
      label: "Borosilicate crown",
      type: "Positive Meniscus",
      nd: 1.50786,
      indexReference: "D",
      focalLengthMm: 76.7,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Low-index middle lens, convex toward the stop; its junctions r2 and r3 carry the anastigmatic correction.",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "Ordinary light flint",
      type: "Biconcave Negative",
      nd: 1.60304,
      indexReference: "D",
      focalLengthMm: -38.1,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Thin biconcave flint next to the stop; its junction r3 with L2 is the deepest curve of the cell.",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L4",
      label: "Ordinary light flint",
      type: "Biconcave Negative",
      nd: 1.60304,
      indexReference: "D",
      focalLengthMm: -38.1,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L3 in the rear triplet: thin biconcave flint next to the stop.",
      cemented: "T2",
    },
    {
      id: 5,
      name: "L5",
      label: "Borosilicate crown",
      type: "Positive Meniscus",
      nd: 1.50786,
      indexReference: "D",
      focalLengthMm: 76.7,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L2: low-index middle lens of the rear triplet, convex toward the stop.",
      cemented: "T2",
    },
    {
      id: 6,
      name: "L6",
      label: "Baryta flint",
      type: "Biconvex Positive",
      nd: 1.62356,
      indexReference: "D",
      focalLengthMm: 55.1,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L1: outer biconvex collective of the rear triplet.",
      cemented: "T2",
    },
  ],
  surfaces: [
    { label: "1", R: 47.9, d: 4.2, sd: 14, medium: 1 },
    { label: "2", R: -117.6, d: 5.2, sd: 14, medium: 2 },
    { label: "3", R: -29.7, d: 0.8, sd: 14, medium: 3 },
    { label: "4", R: 102.4, d: 5.2, sd: 14 },
    { label: "STO", R: "flat", d: 5.2 },
    { label: "5", R: -102.4, d: 0.8, sd: 14, medium: 4 },
    { label: "6", R: 29.7, d: 5.2, sd: 14, medium: 5 },
    { label: "7", R: 117.6, d: 4.2, sd: 14, medium: 6 },
    { label: "8", R: -47.9, d: 86.553, sd: 14 },
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only historical reconstruction; no finite-focus motion.",
  },
  aperture: { nominalFNumber: 4.02, fStops: [4.02, 4.5, 5.6, 8, 11, 16], maxFNumber: 16 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 29 },

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
