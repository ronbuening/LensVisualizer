/*
VOIGTLÄNDER PETZVAL LANDSCAPE FIRST FORM f/8.1 (von Rohr 1899, Fig. 101)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 250, Fig. 101: "J. Petzval: Landschaftsobjektiv. 1. Form." The caption names its sources: radii from
Fr. Voigtländer 3, p. 98; glass kinds from J. M. Eder 1, p. 115; lens spacing from Fr. Voigtländer 3, p. 103
(bibliography p. 433: Voigtländer's 1859 polemic against Petzval; p. 411: Eder's Die photographischen Objektive,
1891). History on pp. 248-262. Tafel II redraws the lens at natural size (No. 101) with its curves 101a.

Printed by von Rohr: reduced to fD = 100 mm; computed for 1:8.1 (no field angle printed); r1 = 22.5, r2 = 17.6,
r3 = 185.7, r4 = 53.5, r5 = 31.5, r6 = 78.2, r7 = 22.8 (magnitudes); d1 = 2.5, d2 = 0.6, b1 = 3.7 (front lens to
stop), b2 = 1.2 (stop to L3), d3 = 0.6, b3 = 1.6, last thickness 1.2; nD L1 = L3 = 1.517, L2 = L4 = 1.575.
Assumed by von Rohr: every thickness and distance (footnote "Willkürlich angenommen"). On p. 260 he calls a stop
placed as near the rear lens as possible the favourable position for the oblique pencils.

Model additions: radius signs from Fig. 101 and Tafel II (biconvex crown cemented to a nearly plano-concave flint;
biconcave crown; flint meniscus concave toward the object), confirmed by f = 100 (r3 negative would give f = 63)
and by curves 101a. Last gap = computed paraxial back focus 87.945. EFL 99.106 (-0.89 %, within the reach of the
0.1 mm radius rounding). LSA at 1:8.1 -1.11 mm (curve 101a: about -1.07). Clear radii 6.5 on every surface,
heuristic: the drawings show about 6.9, where L1 reaches a knife edge (6.91 with the assumed 2.5 mm). Stop radius
derived from 1:8.1; f-stop list added. The 30 deg field limit is this model's choice, not von Rohr's: he printed no
field angle for this form and computed the second form (Fig. 103), which has the same spacings and stop, for
30 deg; the chief ray passes here to about 45 deg. Element focal lengths are computed (thick, in air).

Indices are nD only (indexReference "D"): von Rohr prints no dispersion for this lens, so the model is monochromatic
and no catalog glass is substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "petzval-landscape-1840-von-rohr-1899",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER PETZVAL LANDSCAPE FIRST FORM f/8.1 (von Rohr 1899, Fig. 101)",
  subtitle: "Petzval's 1840 calculation, set aside after Voigtländer's trials; thicknesses and spacings assumed by von Rohr",
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
      locator: "p. 250, Fig. 101",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=6",
      after: "Fr. Voigtländer and J. M. Eder",
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
      role: "Biconvex crown of the cemented front lens; carries the collective power of the system.",
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
      role: "Nearly plano-concave flint cemented behind L1; the negative partner of the front achromat.",
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
      role: "Strong negative crown behind the stop; makes the rear pair negative and halves the Petzval sum.",
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
      role: "Flint meniscus concave toward the object; the positive partner of the negative rear pair.",
    },
  ],
  surfaces: [
    { label: "1", R: 22.5, d: 2.5, sd: 6.5, medium: 1 },
    { label: "2", R: -17.6, d: 0.6, sd: 6.5, medium: 2 },
    { label: "3", R: 185.7, d: 3.7, sd: 6.5 },
    { label: "STO", R: "flat", d: 1.2 },
    { label: "4", R: -53.5, d: 0.6, sd: 6.5, medium: 3 },
    { label: "5", R: 31.5, d: 1.6, sd: 6.5 },
    { label: "6", R: -78.2, d: 1.2, sd: 6.5, medium: 4 },
    { label: "7", R: -22.8, d: 87.945, sd: 6.5 },
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity only; von Rohr computes the lens for a distant object.",
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
