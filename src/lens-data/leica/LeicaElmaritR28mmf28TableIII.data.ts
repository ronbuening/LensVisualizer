import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 3,740,120 A, Table III (claim 3). The patent is normalized to f = 1; every radius and axial distance
 * is the printed value scaled uniformly by 28 to millimetres.
 * Production correlation: first-version Leica Elmarit-R 28mm f/2.8 (1970). Table III is the best-supported
 * of the patent's three tables against the patent figure; which table was manufactured is not established.
 * Eight air-spaced spherical singlets. Indices and Abbe numbers are the patent's e-line values (ne, nu-e).
 * The patent names no glass. Each label names the catalog glass that reproduces the printed ne and nu-e
 * (Schott N-FK5, N-BAF10, N-LAK9 and SF56A within 0.000003 and 0.01; HIKARI J-BASF6 within 0.000001 and 0.04)
 * and selects its dispersion curve, anchored at the printed ne; the 1970 supplier and melts are not established.
 * Stop: the patent places the diaphragm in d8 without a dimension. It is set 2.0930 mm behind surface 8
 * (0.70 of d8), following a PhotonsToPhotos reconstruction; the patent figure draws it at 0.72 +/- 0.07 of d8.
 * The stop semi-diameter is set by real-ray tracing of the axial f/2.8 beam.
 * Semi-diameters are not printed. They follow the patent's single drawing, by way of the same PhotonsToPhotos
 * reconstruction and a re-measurement of the 300 dpi page (26.10 px/mm), and are floor-checked by real-ray
 * trace; seven elements agree with the drawing within 2 %. The drawing shows L6 and L7 with square-cut rims
 * (8.47 and 8.97 mm) meeting at the edge. The Table III spheres of surfaces 12 and 13 meet at 8.265 mm, so
 * only one of them can pass that height: surface 13 follows L7's drawn rim (8.82 mm, as surface 14) and
 * surfaces 11 and 12 are both 8.25 mm, which squares L6 against L7 just inside the contact height.
 * gapSagFrac is 1.00 for this lens because that pair is drawn in edge contact (0.99 admits only 8.22 mm).
 * The axial f/2.8 beam and the 38-degree chief ray clear.
 * L1 and L3 are drawn with a flat annular land behind the concave face: outer rims 17.8 and 11.9 mm, the
 * concave spheres ending at about 13.9 and 8.5 mm. Surfaces 2 and 6 store those curve ends (13.85 and 8.3 mm),
 * so the diagram closes each element with a straight edge where the drawing has a step. Neither element can be
 * squared: at the outer rim height the rear spheres have rim slopes of 76.3 and 73.9 degrees (limit 64.2), and
 * front faces cut to the curve-end height block the 38-degree chief ray (15.31 mm on surface 1, 9.62 mm on 5).
 * Diagram labels are the patent's reference signs: elements L_I to L_VIII (LI to LVIII), front lens group FLG
 * (surfaces 1-6, negative) and rear lens group RLG (surfaces 7-16, positive, containing the diaphragm D).
 * Back focus is the printed 1.373 f (38.444 mm); the paraxial value is 38.437 mm.
 * The projection block declares the patent's 76-degree field (38-degree chief rays traced); rays are still
 * clipped by the modeled apertures.
 * The modeled front diameter of 35.38 mm (1.26 f) is slightly above the "smaller than 1.25 f" that the patent
 * text says is possible; no aperture is printed for Table III.
 * Focus: unit focusing. The patent gives one infinity prescription; the 0.30 m state is a calculated
 * whole-lens extension of 3.5947 mm (last gap 42.0387 mm, magnification -0.128), not a printed value.
 * Source note: claim 3 reprints r5 as -2.6916; Table III prints +2.6916 and the printed surface power
 * (+0.1817) agrees with the positive sign. The stated f, back focus and field are reproduced within
 * printed precision.
 * No cover plates or cemented interfaces are modeled.
 */

const LENS_DATA = {
  schema: 2,
  key: "elmarit-r-28f28",
  maker: "Leica",
  name: "LEICA ELMARIT-R 28mm f/2.8",
  subtitle: "US 3,740,120 A, Table III — qualified production correlation",

  catalog: {
    lensMounts: ["leica-r"],
    imageFormat: "135-full-frame",
    specs: ["8 ELEMENTS / 8 GROUPS", "DESIGN f = 28.00 mm", "DESIGN F/2.8", "ALL SPHERICAL", "UNIT FOCUS"],
    elementCount: 8,
    groupCount: 8,
    focalLengthMm: { marketing: 28, design: 27.99883069375396 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 3,740,120 A",
    patentYear: 1973,
    authors: ["Rudolf Rühl"],
    assignees: ["Ernst Leitz GmbH"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.48914,
      vd: 70.22,
      indexReference: "e",
      focalLengthMm: -95.38291343579559,
      glass: "N-FK5 (Schott catalog equivalent of FK5; patent ne 1.48914 / νe 70.22; production supplier unspecified)",
      apd: false,
      role: "Object-facing negative meniscus of the net-negative front group.",
      diagramLabel: "LI",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.67133,
      vd: 41.64,
      indexReference: "e",
      focalLengthMm: 70.96767856606199,
      glass:
        "J-BASF6 (HIKARI catalog equivalent of BaSF6, catalog νe 41.60; patent ne 1.67133 / νe 41.64; production supplier unspecified)",
      apd: false,
      role: "Biconvex positive element between the two front negative menisci.",
      diagramLabel: "LII",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.48914,
      vd: 70.22,
      indexReference: "e",
      focalLengthMm: -30.28555772571423,
      glass: "N-FK5 (Schott catalog equivalent of FK5; patent ne 1.48914 / νe 70.22; production supplier unspecified)",
      apd: false,
      role: "Second object-facing negative meniscus, followed by the main air separation.",
      diagramLabel: "LIII",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.67341,
      vd: 46.82,
      indexReference: "e",
      focalLengthMm: 72.54205969182219,
      glass:
        "N-BAF10 (Schott catalog equivalent of BaF10; patent ne 1.67341 / νe 46.82; production supplier unspecified)",
      apd: false,
      role: "Positive meniscus before the diaphragm, concave toward the stop.",
      diagramLabel: "LIV",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.69401,
      vd: 54.48,
      indexReference: "e",
      focalLengthMm: 37.71400985024495,
      glass:
        "N-LAK9 (Schott catalog equivalent of LaK9; patent ne 1.69401 / νe 54.48; production supplier unspecified)",
      apd: false,
      role: "Biconvex positive element immediately after the diaphragm.",
      diagramLabel: "LV",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7918,
      vd: 25.87,
      indexReference: "e",
      focalLengthMm: -23.473293899087828,
      glass: "SF56A (Schott catalog equivalent of SF56; patent ne 1.7918 / νe 25.87; production supplier unspecified)",
      apd: false,
      role: "Biconcave negative element between the two positive rear subgroups.",
      diagramLabel: "LVI",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.69401,
      vd: 54.48,
      indexReference: "e",
      focalLengthMm: 55.84698001437243,
      glass:
        "N-LAK9 (Schott catalog equivalent of LaK9; patent ne 1.69401 / νe 54.48; production supplier unspecified)",
      apd: false,
      role: "Image-side positive meniscus, concave toward the diaphragm.",
      diagramLabel: "LVII",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.69401,
      vd: 54.48,
      indexReference: "e",
      focalLengthMm: 32.36958575857208,
      glass:
        "N-LAK9 (Schott catalog equivalent of LaK9; patent ne 1.69401 / νe 54.48; production supplier unspecified)",
      apd: false,
      role: "Rear biconvex positive element completing the second positive subgroup.",
      diagramLabel: "LVIII",
    },
  ],

  surfaces: [
    { label: "1", R: 31.2704, d: 2.6264, sd: 17.69, medium: 1 },
    { label: "2", R: 18.2056, d: 6.496, sd: 13.85 },
    { label: "3", R: 70.3752, d: 2.9764, sd: 13.77, medium: 2 },
    { label: "4", R: -144.9868, d: 0.1008, sd: 13.77 },
    { label: "5", R: 75.3648, d: 1.8452, sd: 11.8, medium: 3 },
    { label: "6", R: 12.2808, d: 9.324, sd: 8.3 },
    { label: "7", R: 22.582, d: 6.9972, sd: 7.79, medium: 4 },
    { label: "8", R: 36.7584, d: 2.093, sd: 7.79 },
    { label: "STO", R: "flat", d: 0.9142 },
    { label: "9", R: 60.0908, d: 3.7604, sd: 7.79, medium: 5 },
    { label: "10", R: -45.1836, d: 2.9484, sd: 7.79 },
    { label: "11", R: -32.0208, d: 1.1032, sd: 8.25, medium: 6 },
    { label: "12", R: 44.9736, d: 1.6044, sd: 8.25 },
    { label: "13", R: -41.1516, d: 2.2064, sd: 8.82, medium: 7 },
    { label: "14", R: -20.398, d: 0.1008, sd: 8.82 },
    { label: "15", R: 117.3928, d: 2.9988, sd: 10.61, medium: 8 },
    { label: "16", R: -27.4904, sd: 10.61 },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "Unit focusing — the whole optical assembly moves forward; the 0.30 m extension (3.59 mm) is calculated, not printed.",
  },

  gaps: { "16": { label: "BF", values: [[38.444, 42.0387]] } },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  projection: { kind: "rectilinear", fullFieldDeg: 76, maxTraceFieldDeg: 38 },

  groups: [
    { text: "FLG (−)", fromSurface: "1", toSurface: "6" },
    { text: "RLG (+)", fromSurface: "7", toSurface: "16" },
  ],
  doublets: [],

  layout: { yScFill: 0.3 },

  checks: { gapSagFrac: 1 },
} satisfies LensDataV2Input;

export default LENS_DATA;
