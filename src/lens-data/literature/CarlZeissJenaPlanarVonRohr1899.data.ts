/*
CARL ZEISS JENA PLANAR f/3.3 (von Rohr 1899, Fig. 146)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 391, Fig. 146 "P. Rudolph: Planar", also drawn on Tafel I as No. 146 with its curves 146a/146b. "Quelle: Angaben
des Verfassers": the table is von Rohr's own data, not taken from an earlier publication. Discussion on pp. 389-391;
von Rohr credits the Planar to P. Rudolph (1896) and its fast form to the Series Ia of Carl Zeiss.

Printed by von Rohr: reduced to fD = 100 mm; computed for 1:3.3 and omega = 25 deg; r1 = 32.0, r10 = 33.9,
r2 = r9 = 144.1, r3 = 37.6, r8 = 32.6, r4 = r7 = 45.5, r5 = r6 = 20.5; d1 = d6 = 5.0, d2 = d5 = 5.3, d3 = d4 = 2.7;
b1 = b4 = 0.27, b2 = b3 = 5.9 (cemented pair to stop); nD L1 = L6 = 1.56785, L2 = L5 = 1.56768, L3 = L4 = 1.57087.
The halves are not mirror images: r1/r10 and r3/r8 differ in print, and only the printed pairs give f = 100. No
value is marked as assumed. The handwriting, colouring and glass-code guesses on the e-rara scan of p. 391 are a later
reader's notes, not part of the print; the clean Tafel I drawing and the printed hatching legend confirm the figure.

Model additions: radius signs from Fig. 146 and Tafel I (outer menisci convex outward, biconvex crown cemented to a
biconcave flint whose deep face is concave toward the stop, rear half mirrored). Last gap = computed paraxial back
focus 80.532. The rounded table traces to EFL 99.545 (-0.46 %), within the 0.1 mm rounding of the radii. Clear
radii: 16 (outer lenses) and 13.8 (inner faces) are the package's estimates and agree with Tafel I to about 0.2 mm,
except the concave stop-side faces, which the figure ends at about 12.1 mm with a flat land; r3 and r4 are raised to
14.4 so the f/3.3 axial beam the engine's iris admits (14.33 / 14.28 mm there) passes, which matches the drawn
14.3 mm rim of L2/L3. Stop radius derived from 1:3.3; f-stop list added; field limited to the printed 25 deg, where
the chief ray passes with ordinary rim vignetting. Element focal lengths are computed (thick, in air).

Indices are nD only (indexReference "D"): von Rohr prints no dispersion figure for this lens, so the model is
monochromatic and no catalog glass is substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-planar-1896-von-rohr-1899",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA PLANAR f/3.3 (von Rohr 1899, Fig. 146)",
  subtitle: "Portrait form of Rudolph's Planar from von Rohr's own data; halves not quite symmetric",
  catalog: {
    specs: ["6 ELEMENTS / 4 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: { design: 100 },
    fNumber: { design: 3.3 },
  },
  source: {
    sdSource: "heuristic",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 391, Fig. 146",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=147",
    },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "New high-index crown",
      type: "Positive Meniscus",
      nd: 1.56785,
      indexReference: "D",
      focalLengthMm: 71.3,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Outer collective meniscus of the front half, convex toward the object.",
    },
    {
      id: 2,
      name: "L2",
      label: "New high-index crown",
      type: "Biconvex Positive",
      nd: 1.56768,
      indexReference: "D",
      focalLengthMm: 37.1,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Positive lens of the front cemented pair; almost the index of L3, so the junction r4 has nearly no power.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Flint",
      type: "Biconcave Negative",
      nd: 1.57087,
      indexReference: "D",
      focalLengthMm: -24.4,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Negative lens of the front pair; its deep face r5, concave toward the stop, flattens the field.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Flint",
      type: "Biconcave Negative",
      nd: 1.57087,
      indexReference: "D",
      focalLengthMm: -24.4,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L3 in the rear pair: deep face r6 concave toward the stop.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "New high-index crown",
      type: "Biconvex Positive",
      nd: 1.56768,
      indexReference: "D",
      focalLengthMm: 34.3,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Positive lens of the rear pair; its outer face r8 = 32.6 is stronger than r3 = 37.6 in front.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "New high-index crown",
      type: "Positive Meniscus",
      nd: 1.56785,
      indexReference: "D",
      focalLengthMm: 76.8,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Outer collective meniscus of the rear half, convex toward the image (r10 = 33.9 against r1 = 32.0).",
    },
  ],
  surfaces: [
    { label: "1", R: 32, d: 5, sd: 16, medium: 1 },
    { label: "2", R: 144.1, d: 0.27, sd: 16 },
    { label: "3", R: 37.6, d: 5.3, sd: 14.4, medium: 2 },
    { label: "4", R: -45.5, d: 2.7, sd: 14.4, medium: 3 },
    { label: "5", R: 20.5, d: 5.9, sd: 13.8 },
    { label: "STO", R: "flat", d: 5.9 },
    { label: "6", R: -20.5, d: 2.7, sd: 13.8, medium: 4 },
    { label: "7", R: 45.5, d: 5.3, sd: 13.8, medium: 5 },
    { label: "8", R: -32.6, d: 0.27, sd: 13.8 },
    { label: "9", R: -144.1, d: 5, sd: 16, medium: 6 },
    { label: "10", R: -33.9, d: 80.532, sd: 16 },
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity only; von Rohr computes the lens for a distant object.",
  },
  aperture: { nominalFNumber: 3.3, fStops: [3.3, 4, 5.6, 8, 11, 16], maxFNumber: 16 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 25 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "8" },
    { text: "G4", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
