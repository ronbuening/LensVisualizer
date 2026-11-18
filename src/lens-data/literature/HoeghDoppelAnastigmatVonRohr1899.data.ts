/*
VON HÖEGH DOPPEL-ANASTIGMAT f/8 (von Rohr 1899, Fig. 138)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 376, Fig. 138: "E. von Höegh: Doppel-Anastigmat". Quelle: E. von Höegh 2, which von Rohr's bibliography (p. 415)
lists as D.R.P. 74 437 of 20 Dec. 1892, granted to C. P. Goerz, Schöneberg bei Berlin. Discussion on pp. 375-377.

Printed by von Rohr: reduced to fD = 100 mm; computed for 1:8.0 and omega = 36 deg; r1 = r8 = 19.1, r2 = r7 = 22.7,
r3 = r6 = 8.3, r4 = r5 = 20.5; d1 = d6 = 3.1, d2 = d5 = 0.8, d3 = d4 = 1.9; b1 = b2 = 2.3 (cell to stop on each
side); nD L1 = L6 = 1.61310, L2 = L5 = 1.56804, L3 = L4 = 1.51497. Glass names and barred-nu figures on p. 375:
soft silicate crown N (nu-bar 44.2), baryta light flint M (41.2), heavy barium silicate crown H (44.7). Text
results (p. 376): spherical correction complete for about 1:7.8, zone not quite -1.0 mm; astigmatism strictly
corrected at omega = 30 deg. Von Rohr marks no value as assumed: the table is his reduction of the patent example
to f = 100, rounded to 0.1 mm.

Model additions: radius signs from Fig. 138 and from von Rohr's description of the cell (high-index biconvex lens,
medium-index negative middle lens, low-index collective meniscus next to the stop); the rear cell mirrors the front.
Last gap = computed paraxial back focus 91.289. The rounded table gives EFL 98.44 (-1.56 %); the residual is the
0.1 mm rounding of r3, r4, d1 and d2 (the patent values divided by 2.4 give EFL 100.1). Printed r2 = 22.7 against
the patent's 22.64 is kept as printed; it moves the EFL by +0.1 %. Clear radii 6.2 on every surface are kept from
the package as heuristic values: L3/L4 run to a knife edge at about 6.3 mm, the f/8 axial beam passes, and the chief
ray passes the printed 36 deg (with heavy rim vignetting). Fig. 138 draws the outer lenses to about 7.6 mm. Stop
radius derived from 1:8; f-stop list added; field limited to the printed omega. Element focal lengths are computed
(thick, in air).

Indices are nD only (indexReference "D"): von Rohr's nu-bar is (nD - 1)/(nG' - nD), a photographic blue figure, not
an Abbe number, so the model is monochromatic and no catalog glass is substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "hoegh-doppel-anastigmat-1892-von-rohr-1899",
  maker: null,
  name: "VON HÖEGH DOPPEL-ANASTIGMAT f/8 (von Rohr 1899, Fig. 138)",
  subtitle: "Two cemented triplets about a central stop; patent example of 1892 reduced by von Rohr",
  visible: false,

  catalog: {
    specs: ["6 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 6,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 8 },
  },
  source: {
    sdSource: "heuristic",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 376, Fig. 138",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=132",
      after: "E. von Höegh, D.R.P. 74 437 (1892)",
    },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Heavy barium silicate crown",
      type: "Biconvex Positive",
      nd: 1.6131,
      indexReference: "D",
      focalLengthMm: 17.4,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Outer high-index collective of the front triplet; with L2 it forms the 'new achromat' of the cell.",
      cemented: "T1",
    },
    {
      id: 2,
      name: "L2",
      label: "Baryta light flint",
      type: "Biconcave Negative",
      nd: 1.56804,
      indexReference: "D",
      focalLengthMm: -10.6,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Medium-index negative middle lens; flint partner of both L1 and L3, carrying the strong junction r3.",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "Soft silicate crown",
      type: "Positive Meniscus",
      nd: 1.51497,
      indexReference: "D",
      focalLengthMm: 25.7,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Low-index collective meniscus next to the stop, concave toward it; with L2 the 'old achromat'.",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L4",
      label: "Soft silicate crown",
      type: "Positive Meniscus",
      nd: 1.51497,
      indexReference: "D",
      focalLengthMm: 25.7,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L3 in the rear triplet: low-index collective meniscus concave toward the stop.",
      cemented: "T2",
    },
    {
      id: 5,
      name: "L5",
      label: "Baryta light flint",
      type: "Biconcave Negative",
      nd: 1.56804,
      indexReference: "D",
      focalLengthMm: -10.6,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L2: medium-index negative middle lens of the rear triplet.",
      cemented: "T2",
    },
    {
      id: 6,
      name: "L6",
      label: "Heavy barium silicate crown",
      type: "Biconvex Positive",
      nd: 1.6131,
      indexReference: "D",
      focalLengthMm: 17.4,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L1: outer high-index collective of the rear triplet.",
      cemented: "T2",
    },
  ],
  surfaces: [
    { label: "1", R: 19.1, d: 3.1, sd: 6.2, medium: 1 },
    { label: "2", R: -22.7, d: 0.8, sd: 6.2, medium: 2 },
    { label: "3", R: 8.3, d: 1.9, sd: 6.2, medium: 3 },
    { label: "4", R: 20.5, d: 2.3, sd: 6.2 },
    { label: "STO", R: "flat", d: 2.3 },
    { label: "5", R: -20.5, d: 1.9, sd: 6.2, medium: 4 },
    { label: "6", R: -8.3, d: 0.8, sd: 6.2, medium: 5 },
    { label: "7", R: 22.7, d: 3.1, sd: 6.2, medium: 6 },
    { label: "8", R: -19.1, d: 91.289, sd: 6.2 },
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only historical reconstruction; no finite-focus motion.",
  },
  aperture: { nominalFNumber: 8, fStops: [8, 11, 16, 22], maxFNumber: 22 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 36 },

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
