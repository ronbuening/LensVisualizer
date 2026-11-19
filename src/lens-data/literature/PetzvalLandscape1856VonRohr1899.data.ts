/*
PETZVAL LANDSCAPE SECOND FORM f/8.1 (von Rohr 1899, Fig. 103)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 258, Fig. 103 "J. Petzval: Landschaftsobjektiv. 2. Form". The caption prints no table of its own: "Radien, Dicken
und Abstände siehe unter Figur 101; nur L3 ist umgekehrt", so the numbers are those printed under Fig. 101 (p. 250,
the first form) with the negative lens L3 turned round. Quelle: Fr. Voigtländer 3. 103, that is Voigtländer's
pamphlet against Petzval (Braunschweig, 1859), p. 103, which reprints the patent bearing Petzval's signature.
Discussion on pp. 258-262; Tafel II redraws the lens as No. 103 with curves 103a and 103b.

Printed by von Rohr: reduced to fD = 100 mm; computed for 1:8.1 and omega = 30 deg; under Fig. 101 the magnitudes
r1 = 22.5, r2 = 17.6, r3 = 185.7, r4 = 53.5, r5 = 31.5, r6 = 78.2, r7 = 22.8 (here r4 and r5 change places);
d1 = 2.5, d2 = 0.6, d3 = 0.6 and 1.2 for L4; b1 = 3.7 (front pair to stop), b2 = 1.2 (stop to L3), b3 = 1.6;
nD L1 = L3 = 1.517, L2 = L4 = 1.575. Every thickness and distance carries the footnote "Willkürlich angenommen"
(arbitrarily assumed). Von Rohr says he could not find the final data of Petzval's landscape lens and believes he
does not have them (pp. 260-261): this form is his trial of the 1856 lens, not a production prescription.

Model additions: radius signs from Fig. 103 and Tafel II (biconvex crown cemented to a biconcave flint with an
almost flat rear face; biconcave crown L3 with its deeper face toward the stop; positive flint meniscus L4 concave
toward the stop). Swapping the rear glasses would give f = 165, so the printed glass order stands. Last gap =
computed paraxial back focus 88.195. The rounded table traces to EFL 99.115 (-0.89 %), within the 0.1 mm rounding
of r1 and r7; the exact trace reproduces von Rohr's curves 103a and 103b to within 0.03-0.10 mm. Clear radii 6.5 on
every surface are the package's estimate (heuristic), kept under the least-change rule: the f/8.1 axial beam passes
and the chief ray passes at 30 deg with ordinary vignetting (44-49 % of one half of the pencil at r1-r2). Fig. 103 and
Tafel II draw the front pair at about 6.6-6.7 mm but the rear lenses at only 4.5-4.7 mm, less than the 5.4-5.5 mm the
1:8.1 axial beam needs there, so the drawing does not set the rear rims. Stop radius derived from 1:8.1; f-stop list
added; field limited to the printed 30 deg. Element focal lengths are computed (thick, in air).

Indices are nD only (indexReference "D"): von Rohr prints no dispersion for these glasses, so the model is
monochromatic and no catalog glass is substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "petzval-landscape-1856-von-rohr-1899",
  maker: null,
  name: "PETZVAL LANDSCAPE SECOND FORM f/8.1 (von Rohr 1899, Fig. 103)",
  subtitle: "The 1856 landscape lens as von Rohr tried it: the 1840 data with the negative lens reversed",
  catalog: {
    specs: ["4 ELEMENTS / 3 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: { design: 100 },
    fNumber: { design: 8.1 },
  },
  source: {
    sdSource: "heuristic",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 258, Fig. 103 (data under Fig. 101, p. 250)",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=14",
      after: "Fr. Voigtländer",
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
      focalLengthMm: 19.5,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Collective crown of the cemented front achromat; its deeper face (r2) is the junction with the flint.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Flint",
      type: "Biconcave Negative",
      nd: 1.575,
      indexReference: "D",
      focalLengthMm: -27.9,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Dispersive flint of the front pair, rear face almost flat; the pair is a +59.3 mm front member.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Old low-index crown",
      type: "Biconcave Negative",
      nd: 1.517,
      indexReference: "D",
      focalLengthMm: -38.3,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Negative lens 1.2 mm behind the stop, deeper face (r4) toward the stop: reversed against Fig. 101.",
    },
    {
      id: 4,
      name: "L4",
      label: "Flint",
      type: "Positive Meniscus",
      nd: 1.575,
      indexReference: "D",
      focalLengthMm: 55.5,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Positive meniscus concave toward the stop; with L3 it forms the weakly negative rear member (-148 mm).",
    },
  ],
  surfaces: [
    { label: "1", R: 22.5, d: 2.5, sd: 6.5, medium: 1 },
    { label: "2", R: -17.6, d: 0.6, sd: 6.5, medium: 2 },
    { label: "3", R: 185.7, d: 3.7, sd: 6.5 },
    { label: "STO", R: "flat", d: 1.2 },
    { label: "4", R: -31.5, d: 0.6, sd: 6.5, medium: 3 },
    { label: "5", R: 53.5, d: 1.6, sd: 6.5 },
    { label: "6", R: -78.2, d: 1.2, sd: 6.5, medium: 4 },
    { label: "7", R: -22.8, d: 88.195, sd: 6.5 },
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only historical reconstruction; no finite-focus motion.",
  },
  aperture: { nominalFNumber: 8.1, fStops: [8.1, 11, 16, 22, 32], maxFNumber: 32 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 30 },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "3" },
    { text: "REAR", fromSurface: "4", toSurface: "7" },
  ],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],

  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
