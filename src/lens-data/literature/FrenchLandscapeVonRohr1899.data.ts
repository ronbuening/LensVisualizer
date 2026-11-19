/*
FRENCH LANDSCAPE f/12.1 (von Rohr 1899, Fig. 54)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 94, Fig. 54: "Französische Landschaftslinse (nach É. Français). Quelle: J. M. Eder 1. 57." Eder 1 is cited after
Die photographischen Objektive (Halle: W. Knapp, 1891), whose p. 57 describes Français's single landscape lens
(bibliography p. 411). On p. 93 von Rohr takes this lens as the representative of the cemented flint-in-front single
lens of the first Daguerre cameras, whose construction he calls only imperfectly known. Tafel IV redraws it at
natural size (No. 54) with the curves 54a (spherical aberration) and 54b (astigmatism).

Printed by von Rohr: reduced to fD = 100 mm; computed for 1:12.1 and omega = 27 1/2 deg; front stop b1 = 18.1;
r1 = 80.3, r2 = 77.2, r3 = 28.0 (magnitudes); d1 = 1.3, d2 = 3.1; nD L1 = 1.613, L2 = 1.516. Text: longitudinal
spherical aberration about -1.9 mm at 1:14; astigmatic difference over 10 mm at 25 deg.
Marked by von Rohr: b1 "somewhat reduced here with regard to the field"; d1 and d2 "taken from the figure"; both nD
"roughly estimated from the stated specific gravity", the glasses chosen from the old silicate series.

Model additions: radius signs from Fig. 54, Tafel IV and the text (biconcave flint in front, its weaker face toward
the stop, cemented to a biconvex crown); last gap = computed paraxial back focus 102.648. EFL 100.209 (+0.21 %,
within the 0.1 mm rounding of r3). Clear radii 10.25 on all three faces, raised from the package's 10.0 to clear the
chief ray at the printed 27.5 deg (10.22 at r3); both drawings show the lens at about 10.7-10.8 mm, and the doublet
is drawn square-edged at one height. Stop radius derived from 1:12.1; f-stop list added. Element focal lengths are
computed (thick, in air).

Indices are nD only (indexReference "D"): von Rohr prints no dispersion for this lens, so the model is monochromatic
and no catalog glass is substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "french-landscape-von-rohr-1899",
  maker: null,
  name: "FRENCH LANDSCAPE f/12.1 (von Rohr 1899, Fig. 54)",
  subtitle: "Français's lens as von Rohr's type of the Chevalier form; thicknesses from a drawing, nD from density",
  catalog: {
    specs: ["2 ELEMENTS / 1 GROUP", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 2,
    groupCount: 1,
    focalLengthMm: { design: 100 },
    fNumber: { design: 12.1 },
  },
  source: {
    sdSource: "heuristic",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 94, Fig. 54",
      url: "https://www.e-rara.ch/download/pdf/4637856.pdf#page=3",
      after: "J. M. Eder",
    },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Old silicate flint",
      type: "Biconcave Negative",
      nd: 1.613,
      indexReference: "D",
      focalLengthMm: -64.0,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Front flint, its weaker face toward the stop; the negative partner of the achromat.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Old silicate crown",
      type: "Biconvex Positive",
      nd: 1.516,
      indexReference: "D",
      focalLengthMm: 40.2,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Rear crown with the steep r3 facing the image; carries the collective power.",
      cemented: "D1",
    },
  ],
  surfaces: [
    { label: "STO", R: "flat", d: 18.1 },
    { label: "1", R: -80.3, d: 1.3, sd: 10.25, medium: 1 },
    { label: "2", R: 77.2, d: 3.1, sd: 10.25, medium: 2 },
    { label: "3", R: -28, d: 102.648, sd: 10.25 },
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity only: von Rohr computes the lens for a distant object; no focusing movement is modelled.",
  },
  aperture: { nominalFNumber: 12.1, fStops: [12.1, 14, 16, 22, 32], maxFNumber: 32 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 27.5 },

  groups: [{ text: "DOUBLET", fromSurface: "1", toSurface: "3" }],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],

  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
