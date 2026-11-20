/*
VOIGTLÄNDER PETZVAL PORTRAIT f/3.4 (von Rohr 1899, Fig. 100)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 250, Fig. 100 "J. Petzval: Portraitobjektiv", also drawn on Tafel I as No. 100 with curves 100a/100b. The caption
names four sources: radii from Fr. Voigtländer (his 1859 pamphlet, bibliography 3, p. 98), lens separation from
J. Petzval (Wiener Sitzungsberichte 1857, bibliography 6, p. 54), glass from J. M. Eder (1891, bibliography 1, p. 115)
and stop distance from B. S. F. 1858 (Petzval's letter to P. Pretsch). Discussion on pp. 248-255: Petzval computed the
type by mid-1840 and gave its manufacture to Fr. Voigtländer in Vienna; it was announced before the end of 1840.

Printed by von Rohr: reduced to fD = 100 mm; computed for 1:3.4 and omega = 12 deg; r1 = 52.9, r2 = 41.4,
r3 = 436.2, r4 = 104.8, r5 = 36.8, r6 = 45.5, r7 = 149.5; d1 = 5.8, d2 = 1.5, b1 = b2 = 23.3 (front cell to stop,
stop to rear cell), d3 = 2.2, b3 = 0.7, d4 = 3.6; nD L1 = L4 = 1.517, L2 = L3 = 1.575. Footnote: d1-d4 and b3
"willkuerlich angenommen" (arbitrarily assumed). Text results (p. 253): longitudinal aberration at most about -0.21 mm
at 1:3.4, marginal focal length about 0.6 mm short, astigmatic difference about 3.4 mm at the largest obliquity.

Model additions: radius signs from Fig. 100 and Tafel I (biconvex crown cemented to a biconcave flint whose nearly flat
rear face r3 is concave toward the image, which alone gives f = 100; a negative meniscus and a biconvex crown behind
the stop, separated by a thin air meniscus). Last gap = computed paraxial back focus 58.576. EFL 99.927 (-0.07 %,
table rounding). Clear radii 15.5 (front cell) and 14.5 (rear cell) are the package's heuristic values, kept: the
exact f/3.4 axial ray needs 14.70 at r1, and the chief ray passes the printed 12 deg. Fig. 100 and Tafel I draw the
front cell to about 14.3-14.4 mm and the rear cell to about 14.2-14.3 mm (the 1840 lens, f = 149 mm with 40.6 and
42.9 mm lens diameters, scales to 13.6 and 14.4 mm). Stop radius derived from 1:3.4; f-stop list added; field
limited to the printed omega. Element focal lengths are computed (thick, in air).

Indices are nD only (indexReference "D"): von Rohr prints no dispersion figure for this lens, and his nu-bar elsewhere
is (nD - 1)/(nG' - nD), not an Abbe number, so the model is monochromatic and no catalog glass is substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "voigtlander-petzval-portrait-1840-von-rohr-1899",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER PETZVAL PORTRAIT f/3.4 (von Rohr 1899, Fig. 100)",
  subtitle: "Petzval's 1840 portrait objective; thicknesses and rear air gap assumed by von Rohr",
  catalog: {
    specs: ["4 ELEMENTS / 3 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: { design: 100 },
    fNumber: { design: 3.4 },
  },
  source: {
    sdSource: "heuristic",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 250, Fig. 100",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=6",
      after: "Fr. Voigtländer (radii), J. Petzval (lens separation), J. M. Eder (glass), B. S. F. 1858 (stop distance)",
    },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Old low-index crown",
      type: "Biconvex Positive",
      nd: 1.517,
      indexReference: "D",
      focalLengthMm: 45.9,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Collective lens of the front achromat; carries most of the system's power.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Flint",
      type: "Biconcave Negative",
      nd: 1.575,
      indexReference: "D",
      focalLengthMm: -65.7,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Achromatizing flint of the front cell, cemented to L1; nearly flat rear face.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Flint",
      type: "Negative Meniscus",
      nd: 1.575,
      indexReference: "D",
      focalLengthMm: -99.8,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Dispersive meniscus of the rear cell, concave toward the image; makes the axial beam nearly parallel in the thin air space.",
    },
    {
      id: 4,
      name: "L4",
      label: "Old low-index crown",
      type: "Biconvex Positive",
      nd: 1.517,
      indexReference: "D",
      focalLengthMm: 67.9,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Collective lens of the rear cell, separated from L3 by a 0.7 mm air meniscus.",
    },
  ],
  surfaces: [
    { label: "1", R: 52.9, d: 5.8, sd: 15.5, medium: 1 },
    { label: "2", R: -41.4, d: 1.5, sd: 15.5, medium: 2 },
    { label: "3", R: 436.2, d: 23.3, sd: 15.5 },
    { label: "STO", R: "flat", d: 23.3 },
    { label: "4", R: 104.8, d: 2.2, sd: 14.5, medium: 3 },
    { label: "5", R: 36.8, d: 0.7, sd: 14.5 },
    { label: "6", R: 45.5, d: 3.6, sd: 14.5, medium: 4 },
    { label: "7", R: -149.5, d: 58.576, sd: 14.5 },
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity only; von Rohr computes the lens for a distant object.",
  },
  aperture: { nominalFNumber: 3.4, fStops: [3.4, 4, 5.6, 8, 11, 16], maxFNumber: 16 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 12 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "4", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "7" },
  ],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],

  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
