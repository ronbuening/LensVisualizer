/*
ROSS DOUBLET f/19.4 (von Rohr 1899, Fig. 76)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 177, Fig. 76: "Th. Ross: Doublet". Quelle: H. Schroeder 4. 189, that is Schroeder's Die Elemente der
photographischen Optik (Berlin, 1891), p. 189. Tafel III redraws the lens at natural size as No. 76 with curves 76a
(spherical aberration) and 76b (astigmatism).

Printed by von Rohr: reduced to fD = 100 mm; computed for 1:19.4 and omega = 36 deg; r1 35.8, r2 241.0, r3 62.5,
r4 36.9, r5 15.3, r6 25.7; d1 3.6, d2 1.4, d3 4.8, d4 1.6; b1 5.9 (front cell to stop), b2 10.1 (stop to rear
cell); nD L1 = L3 = 1.516, L2 = L4 = 1.5738. Text results (p. 177): spherical aberration about -0.6 mm at 1:19.4;
astigmatic difference about 10.3 mm at about 36 deg.

Stated by von Rohr as not measured data: "Dicken und Abstände aus der Zeichnung entnommen. Glasarten nach der
Angabe des specifischen Gewichts geschätzt." The thicknesses and distances (d, b) were taken from the drawing, and
the indices were estimated from the stated specific gravity. Both stay as printed.

Model additions: radius signs from Fig. 76 and Tafel III (front cell a biconvex crown cemented to a biconcave
flint, a meniscus convex toward the object; rear cell a crown meniscus cemented to a flint meniscus, concave toward
the stop; the nearly flat cemented face r2 bows toward the image in both drawings, so r2 = -241.0). Last gap = computed
paraxial back focus 89.708; the table gives EFL 99.940 (-0.06 %). Clear radii (heuristic): front cell 10 mm, as
staged; rear cell raised from 10 to 10.9 mm because the 36 deg chief ray crosses r6 at 10.69 mm (10.84 mm in the
engine's chief-ray solve), with all three rear faces at one height as both drawings show the cell. Both drawings
draw the cells to about 12.9 mm, where L3 runs out to a knife edge. Stop radius derived from 1:19.4; f-stop list
added; field limited to the printed omega. Element labels follow the hatching legend of the plates. Element focal
lengths are computed (thick, in air).

Indices are nD only (indexReference "D"): von Rohr prints no dispersion, so the model is monochromatic and no catalog
glass is substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "ross-doublet-1864-von-rohr-1899",
  maker: null,
  name: "ROSS DOUBLET f/19.4 (von Rohr 1899, Fig. 76)",
  subtitle: "Unsymmetrical wide-angle doublet; thicknesses from the drawing, indices from specific gravity",
  visible: false,

  catalog: {
    specs: ["4 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 4,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 19.4 },
  },
  source: {
    sdSource: "heuristic",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 177, Fig. 76",
      after: "H. Schroeder",
    },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Old low-index crown",
      type: "Biconvex Positive",
      nd: 1.516,
      indexReference: "D",
      focalLengthMm: 60.7,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Front collective lens, strongly convex toward the object; carries the front cell's positive power.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Flint",
      type: "Biconcave Negative",
      nd: 1.5738,
      indexReference: "D",
      focalLengthMm: -86.4,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Achromatizing partner of L1 behind a nearly flat cemented face; its rear face is concave toward the stop.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Old low-index crown",
      type: "Positive Meniscus",
      nd: 1.516,
      indexReference: "D",
      focalLengthMm: 47.1,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Thick crown meniscus of the rear cell, concave toward the stop, with a deep cemented face to L4.",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L4",
      label: "Flint",
      type: "Negative Meniscus",
      nd: 1.5738,
      indexReference: "D",
      focalLengthMm: -69.8,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Flint meniscus closing the rear cell, convex toward the image; the achromatizing partner of L3.",
      cemented: "D2",
    },
  ],
  surfaces: [
    { label: "1", R: 35.8, d: 3.6, sd: 10, medium: 1 },
    { label: "2", R: -241, d: 1.4, sd: 10, medium: 2 },
    { label: "3", R: 62.5, d: 5.9, sd: 10 },
    { label: "STO", R: "flat", d: 10.1 },
    { label: "4", R: -36.9, d: 4.8, sd: 10.9, medium: 3 },
    { label: "5", R: -15.3, d: 1.6, sd: 10.9, medium: 4 },
    { label: "6", R: -25.7, d: 89.708, sd: 10.9 },
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only historical reconstruction; no finite-focus motion.",
  },
  aperture: { nominalFNumber: 19.4, fStops: [19.4, 22, 32, 45], maxFNumber: 45 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 36 },

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
