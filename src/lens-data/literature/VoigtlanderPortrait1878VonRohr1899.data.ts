/*
VOIGTLÄNDER CEMENTED-REAR PETZVAL PORTRAIT f/3.5 (von Rohr 1899, Fig. 107)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 276, Fig. 107 "Fr. von Voigtländer: Modifikation des Petzval-Objektivs", also drawn on Tafel I as No. 107 with
curves 107a/107b. Radii from Fr. von Voigtländer (bibliography entry 2: D.R.P. 5761 of 14 November 1878, "auf ein
Portraitobjektiv mit verkitteter Hinterlinse"); distances of the lenses and the stop from J. M. Eder (Die
photographischen Objektive, 1891, p. 125). Text pp. 276, 315-316 and 319: the Voigtländer firm introduced this
portrait objective with a cemented rear lens in 1878 and replaced it in 1885.

Printed by von Rohr: reduced to fD = 100 mm; computed for 1:3.5 and omega = 12 deg; r1 = 64.7, r2 = 52.3,
r3 = 579.4, r4 = infinity, r5 = 24.1, r6 = 64.7; d1 = 5.3, d2 = 3.9, b1 = 22.2 (front cell to stop), b2 = 29.0 (stop
to rear cell), d3 = 7.7, d4 = 3.9; nD L1 = L3 = 1.536, L2 = L4 = 1.602. Footnotes: d1-d4 "Willkuerlich angenommen"
(arbitrarily assumed); b1, b2 "Nach der von J. M. Eder angegebenen Figur bestimmt" (determined from Eder's figure).
Text results (pp. 315-316): spherical aberration not far behind Petzval's; meridional field flat within about 12 deg;
sagittal astigmatic difference about 1.5 mm at 12 deg.

Model additions: radius signs from Fig. 107, Tafel I and the patent's convex/concave signs (biconvex crown cemented to
a biconcave flint; a plano-convex crown cemented to a flint meniscus concave toward the object). Glass order as von
Rohr prints and hatches it (crown first in the rear pair); Eder and the patent text name D crown and C flint, which with
these radii gives EFL 78.9 instead of 100. Last gap = computed paraxial back focus 60.288. EFL 100.062 (+0.06 %,
table rounding). Clear radius 17 mm on every surface is an earlier modelling envelope, kept: it passes the exact
f/3.5 axial ray (14.29 mm at r1) and the 12 deg chief ray (9.49 mm at r6), and sits 2-3 % inside the cells drawn in
Fig. 107 and Tafel I (17.3-17.45 mm), where L1 comes to a knife edge. Stop radius derived from 1:3.5; f-stop list
added; field limited to the printed omega. Element focal lengths are computed (thick, in air).

Indices are nD only (indexReference "D"): Eder and the patent give a "mean" index for one crown and one flint, von Rohr
tabulates them as nD and prints no dispersion figure, so the model is monochromatic and no catalog glass is
substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "voigtlander-portrait-1878-von-rohr-1899",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER CEMENTED-REAR PETZVAL PORTRAIT f/3.5 (von Rohr 1899, Fig. 107)",
  subtitle: "Voigtländer's 1878 modification of the Petzval portrait objective; thicknesses assumed by von Rohr",
  catalog: {
    specs: ["4 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 4,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 3.5 },
  },
  source: {
    sdSource: "heuristic",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 276, Fig. 107",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=32",
      after: "Fr. von Voigtländer (radii), J. M. Eder (lens and stop distances)",
    },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Old low-index crown",
      type: "Biconvex Positive",
      nd: 1.536,
      indexReference: "D",
      focalLengthMm: 54.8,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Collective lens of the front achromat; its front face r1 has the same curvature as the last face r6.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Flint",
      type: "Biconcave Negative",
      nd: 1.602,
      indexReference: "D",
      focalLengthMm: -79.5,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Achromatizing flint of the front cell, cemented to L1; nearly flat rear face toward the stop.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Old low-index crown",
      type: "Plano-convex Positive",
      nd: 1.536,
      indexReference: "D",
      focalLengthMm: 45.0,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Collective lens of the rear cell; flat front face, strong convex face cemented to L4.",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L4",
      label: "Flint",
      type: "Negative Meniscus",
      nd: 1.602,
      indexReference: "D",
      focalLengthMm: -66.2,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Flint meniscus concave toward the object, cemented to L3 in place of Petzval's air-spaced rear pair.",
      cemented: "D2",
    },
  ],
  surfaces: [
    { label: "1", R: 64.7, d: 5.3, sd: 17, medium: 1 },
    { label: "2", R: -52.3, d: 3.9, sd: 17, medium: 2 },
    { label: "3", R: 579.4, d: 22.2, sd: 17 },
    { label: "STO", R: "flat", d: 29 },
    { label: "4", R: "flat", d: 7.7, sd: 17, medium: 3 },
    { label: "5", R: -24.1, d: 3.9, sd: 17, medium: 4 },
    { label: "6", R: -64.7, d: 60.288, sd: 17 },
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only historical reconstruction; no finite-focus motion.",
  },
  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 12 },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "3" },
    { text: "REAR", fromSurface: "4", toSurface: "6" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "4", toSurface: "6" },
  ],

  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
