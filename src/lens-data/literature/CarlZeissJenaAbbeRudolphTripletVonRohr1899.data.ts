/*
CARL ZEISS JENA ABBE–RUDOLPH TRIPLET f/7.2 (von Rohr 1899, Fig. 125)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 357, Fig. 125: "E. Abbe und P. Rudolph: Symmetrisches Triplet (achromatisch)". Quelle: Angaben des Verfassers
(von Rohr's own data, no earlier publication named). Design work at the Zeiss workshop, 1888/89 (p. 358).

Printed by von Rohr: reduced to fD = 100 mm; computed for 1:7.2 and omega = 26 1/2 deg; r1 = r8 = 26.2,
r2 = r7 = 39.2, r3 = r6 = 235, r4 = r5 = 14.0; d1 = d5 = 3.4, d2 = d4 = 1.1, d3 = 5.7; b1 = b2 + b3 = 4.3 with
b2 = 0.8 (cemented group to stop) and b3 = 3.5 (stop to L5); nD L1 = L5 = 1.51660, L2 = L4 = 1.56760,
L3 = 1.50846. No glass names and no dispersion figures are printed for this lens. Von Rohr marks no value as assumed.
Text checks: longitudinal SA does not exceed -0.4 mm (p. 357); astigmatic difference nearly 6 mm at about 26 deg
with a concave field (p. 358).

Model additions: radius signs read from Fig. 125 (L1 and L5 menisci concave toward the stop, middle lens drawn as a
square block with a biconvex core); last gap = computed paraxial back focus 90.238; clear radii 10 / 8 / 10 kept from
the package as heuristic values (Fig. 125 draws about 11.9 / 8.5 / 11.9; neither the axial beam nor the chief ray at
26.5 deg is clipped by the narrower rims); stop radius derived from 1:7.2; f-stop list; field limited to the printed
omega. Element focal lengths are computed (thick, in air).

Indices are nD only (indexReference "D"): von Rohr prints no dispersion for this lens, so the model is
monochromatic and no catalog glass is substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-abbe-rudolph-triplet-1888-von-rohr-1899",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA ABBE–RUDOLPH TRIPLET f/7.2 (von Rohr 1899, Fig. 125)",
  subtitle: "Achromatic symmetrical form, 1888/89; data supplied by von Rohr",
  visible: false,
  catalog: {
    specs: ["5 ELEMENTS / 3 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 5,
    groupCount: 3,
    focalLengthMm: { design: 100 },
    fNumber: { design: 7.2 },
  },
  source: {
    sdSource: "heuristic",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 357, Fig. 125",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=113",
    },
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front collective lens",
      type: "Positive Meniscus",
      nd: 1.5166,
      indexReference: "D",
      focalLengthMm: 140.4,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Front single lens, convex to the object; one of the two collective lenses of Abbe's plan.",
    },
    {
      id: 2,
      name: "L2",
      label: "Middle lens, front shell",
      type: "Negative Meniscus",
      nd: 1.5676,
      indexReference: "D",
      focalLengthMm: -26.3,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Front shell of the cemented middle lens; nearly flat outer face, strongly curved junction with L3.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Middle lens, biconvex core",
      type: "Biconvex Positive",
      nd: 1.50846,
      indexReference: "D",
      focalLengthMm: 14.8,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Lowest-index core of the cemented middle lens; both junctions r = 14 face higher-index shells.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Middle lens, rear shell",
      type: "Negative Meniscus",
      nd: 1.5676,
      indexReference: "D",
      focalLengthMm: -26.3,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Rear shell of the cemented middle lens, mirror image of L2.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Rear collective lens",
      type: "Positive Meniscus",
      nd: 1.5166,
      indexReference: "D",
      focalLengthMm: 140.4,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Rear single lens, concave to the stop; mirror image of L1.",
    },
  ],
  surfaces: [
    { label: "1", R: 26.2, d: 3.4, sd: 10, medium: 1 },
    { label: "2", R: 39.2, d: 4.3, sd: 10 },
    { label: "3", R: 235, d: 1.1, sd: 8, medium: 2 },
    { label: "4", R: 14, d: 5.7, sd: 8, medium: 3 },
    { label: "5", R: -14, d: 1.1, sd: 8, medium: 4 },
    { label: "6", R: -235, d: 0.8, sd: 8 },
    { label: "STO", R: "flat", d: 3.5 },
    { label: "7", R: -39.2, d: 3.4, sd: 10, medium: 5 },
    { label: "8", R: -26.2, d: 90.238, sd: 10 },
  ],
  focus: { closeFocusM: 1e15, description: "Infinity only; von Rohr gives the design for a distant object." },
  aperture: { nominalFNumber: 7.2, fStops: [7.2, 8, 11, 16], maxFNumber: 16 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 26.5 },
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "2" },
    { text: "G2 (−)", fromSurface: "3", toSurface: "6" },
    { text: "G3 (+)", fromSurface: "7", toSurface: "8" },
  ],
  doublets: [{ text: "D1", fromSurface: "3", toSurface: "6" }],
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
