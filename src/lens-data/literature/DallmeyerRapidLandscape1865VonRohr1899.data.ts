/*
DALLMEYER RAPID LANDSCAPE f/11 (von Rohr 1899, Fig. 77)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 178, Fig. 77: "J. H. Dallmeyer: Rapid landscape lens". The text dates the lens to early 1865 as Dallmeyer's
triple landscape lens, "later known as the rapid landscape lens". Quelle: D. van Monckhoven 1. 126, that is van
Monckhoven's Photographische Optik (German edition by A. Martin, Vienna, 1866), p. 126. Tafel IV redraws the lens
at natural size as No. 77 with curves 77a (spherical aberration) and 77b (astigmatism).

Printed by von Rohr: reduced to fD = 100 mm; computed for 1:11.0 and omega = 34 deg; b1 = 10.0 (stop to lens);
r1 = 60.4, r2 = 17.3, r3 = 48.1, r4 = 25.6; d1 = 3.0, d2 = 1.0, d3 = 1.5; nD L1 = 1.521, L2 = 1.581, L3 = 1.514.
The caption states that the stop distance and the thicknesses are taken from the drawing; radii and indices are
not so marked. Text (p. 178): about -3.1 mm spherical aberration at 1:11.04; at 34 deg an astigmatic difference of
about 6.6 mm with a negative field curvature of about 5 mm.

Model additions: radius signs from Fig. 77 and Tafel IV (one cemented crown-flint-crown meniscus behind a front
stop, all four faces concave toward the stop, so every radius is negative). Last gap = computed paraxial back focus
102.898. The rounded table gives EFL 99.387 (-0.61 %), within the rounding of the radii and indices (|r4| = 25.65
alone gives 99.79). Clear radii 10 mm on all four surfaces (heuristic, the package's value, kept): the f/11 axial
beam reaches 4.67 mm and the exact chief ray at the printed 34 deg 8.49 mm, so nothing clips; both drawings show
the lens edge at 10.7-11.1 mm, where L1 runs out to a knife edge (11.10 mm). Stop radius derived from 1:11; f-stop
list added; field limited to the printed omega. Element focal lengths are computed (thick, in air).

Indices are nD only (indexReference "D"): von Rohr prints no dispersion, so the model is monochromatic and no catalog
glass is substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "dallmeyer-rapid-landscape-1865-von-rohr-1899",
  maker: "Dallmeyer",
  name: "DALLMEYER RAPID LANDSCAPE f/11 (von Rohr 1899, Fig. 77)",
  subtitle: "Triple cemented landscape meniscus of 1865 behind a front stop; thicknesses and stop distance from a drawing",
  visible: false,

  catalog: {
    specs: ["3 ELEMENTS / 1 GROUP", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 3,
    groupCount: 1,
    focalLengthMm: { design: 100 },
    fNumber: { design: 11 },
  },
  source: {
    sdSource: "heuristic",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 178, Fig. 77",
      url: "https://www.e-rara.ch/download/pdf/4637858.pdf#page=37",
      after: "D. van Monckhoven",
    },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Old low-index crown",
      type: "Positive Meniscus",
      nd: 1.521,
      indexReference: "D",
      focalLengthMm: 45.5,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Front half of the split crown, concave toward the stop; its deep rear face carries most of the collective power.",
      cemented: "T1",
    },
    {
      id: 2,
      name: "L2",
      label: "Flint",
      type: "Negative Meniscus",
      nd: 1.581,
      indexReference: "D",
      focalLengthMm: -47.1,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Flint meniscus cemented between the two crowns, concave toward the stop; the achromatizing member.",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "Old low-index crown",
      type: "Positive Meniscus",
      nd: 1.514,
      indexReference: "D",
      focalLengthMm: 104.1,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Rear half of the split crown, concave toward the stop; weak collective meniscus behind the flint.",
      cemented: "T1",
    },
  ],
  surfaces: [
    { label: "STO", R: "flat", d: 10 },
    { label: "1", R: -60.4, d: 3, sd: 10, medium: 1 },
    { label: "2", R: -17.3, d: 1, sd: 10, medium: 2 },
    { label: "3", R: -48.1, d: 1.5, sd: 10, medium: 3 },
    { label: "4", R: -25.6, d: 102.898, sd: 10 },
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity only; von Rohr computes the lens for a distant object.",
  },
  aperture: { nominalFNumber: 11, fStops: [11, 16, 22, 32, 45], maxFNumber: 45 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 34 },

  groups: [{ text: "CEMENTED TRIPLET", fromSurface: "1", toSurface: "4" }],
  doublets: [{ text: "T1", fromSurface: "1", toSurface: "4" }],

  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
