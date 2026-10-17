import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║          LENS DATA — SONY FE 50-150mm f/2 GM                             ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2025/220324 A1, Example 1 (Sony Group Corporation).      ║
 * ║  Strong production correlation to the FE 50-150mm F2 GM, but neither the   ║
 * ║  patent nor Sony product material examined here confirms that Example 1    ║
 * ║  is the production prescription.                                            ║
 * ║                                                                            ║
 * ║  Patent design: 19 physical elements, 17 air-separated groups, 7 zoom      ║
 * ║  motion groups, and 7 aspherical surfaces. No dimensional scaling.         ║
 * ║  Internal zoom: G1, G4, and G7 remain fixed. Published floating focus:      ║
 * ║  G5 moves imageward and G6 moves objectward.                               ║
 * ║                                                                            ║
 * ║  Published variable gaps: d6, d14, d16, d26, d29, d31.                    ║
 * ║  Zoom-only gaps: d6, d14, d16. Focus + zoom gaps: d26, d29, d31.          ║
 * ║  All six Wide/Mid/Tele × infinity/close states come directly from Table 3. ║
 * ║  Focus status: PUBLISHED. No internal focus state was reconstructed.        ║
 * ║                                                                            ║
 * ║  Semi-diameters: refracting-surface SDs use the patent effective diameter  ║
 * ║  φ_i / 2. These are source effective/clear apertures, not claimed measured ║
 * ║  manufactured rim diameters.                                               ║
 * ║                                                                            ║
 * ║  Stop: Table 1 prints φ17 = 42.00 mm for the stop surface and Table 2      ║
 * ║  prints Fno 2.06 at Wide, Mid, and Tele. The wide-open iris is traced per  ║
 * ║  station from that f-number: the real f/2.06 marginal ray crosses the stop ║
 * ║  at 20.879 / 21.001 / 20.887 mm, and the Mid radius matches φ17 / 2. An    ║
 * ║  iris held at the Wide radius gives f/2.07 at Mid. The patent does not     ║
 * ║  state how the opening behaves in zooming; these radii are calculated      ║
 * ║  from the printed f-numbers, not a published iris schedule.                ║
 * ║  Traced on axis: Wide f/2.060, limited by the iris; Mid f/2.060, limited   ║
 * ║  by the surface 23 rim (the f/2.06 ray exceeds φ23 / 2 by 2.8 µm); Tele    ║
 * ║  f/2.061, limited by the surface 10 rim (5.4 µm over φ10 / 2). The printed ║
 * ║  φ17 / 2 = 21.00 mm does not size the traced iris.                         ║
 * ║                                                                            ║
 * ║  Geometry policy: gapSagFrac = 0.98 is a per-lens override required by the ║
 * ║  published effective apertures. The tightest printed source geometry is    ║
 * ║  surfaces 2→3 (intrusion fraction ≈ 0.968944, still positive clearance).   ║
 * ║  The default 0.90 would reject source-required aperture geometry.           ║
 * ║                                                                            ║
 * ║  Glass labels are vendor-neutral six-digit d-line coordinate classes.      ║
 * ║  Catalog coordinate matches do not establish the actual supplier or melt,  ║
 * ║  so no vendor Sellmeier or unsupported line-index data is authored here.   ║
 * ║                                                                            ║
 * ║  Table 4 surface 16 A10 is blank in the source. The modeled absent term is ║
 * ║  numerical zero; the raw blank remains preserved in evidence.json.         ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "sony-fe-50-150mm-f2-gm",
  maker: "Sony",
  name: "SONY FE 50-150mm f/2 GM",
  subtitle: "WO 2025/220324 A1 Example 1 — strong production correlation; not manufacturer-confirmed",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "19 ELEMENTS / 17 GROUPS",
      "DESIGN 51.50-145.50 mm",
      "DESIGN f/2.06",
      "INTERNAL ZOOM / FLOATING FOCUS",
      "7 ASPHERICAL SURFACES",
    ],
    elementCount: 19,
    groupCount: 17,
    focalLengthMm: { marketing: [50, 150], design: [51.490659, 145.523015] },
    fNumber: { marketing: 2, design: 2.06 },
  },

  source: {
    patentNumber: "WO 2025/220324 A1",
    patentYear: 2025,
    authors: ["Hiroo Juri", "Naoto Kikuchi", "Hiraku Iwaya"],
    assignees: ["Sony Group Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element E1",
      type: "Negative Meniscus, convex to object",
      nd: 1.8061,
      vd: 33.3,
      indexReference: "d",
      focalLengthMm: -306.490279,
      glass: "806333 class (supplier unproven)",
      diagramLabel: "E1",
    },
    {
      id: 2,
      name: "E2",
      label: "Element E2",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      indexReference: "d",
      focalLengthMm: 176.725587,
      glass: "437951 class (supplier unproven)",
      diagramLabel: "E2",
    },
    {
      id: 3,
      name: "E3",
      label: "Element E3",
      type: "Positive Meniscus, convex to object",
      nd: 1.437,
      vd: 95.1,
      indexReference: "d",
      focalLengthMm: 189.241322,
      glass: "437951 class (supplier unproven)",
      diagramLabel: "E3",
    },
    {
      id: 4,
      name: "E4",
      label: "Element E4",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.76802,
      vd: 49.2,
      indexReference: "d",
      focalLengthMm: -65.59412,
      glass: "768492 class (supplier unproven)",
      diagramLabel: "E4",
    },
    {
      id: 5,
      name: "E5",
      label: "Element E5",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.7,
      indexReference: "d",
      focalLengthMm: -67.657604,
      glass: "729547 class (supplier unproven)",
      diagramLabel: "E5",
    },
    {
      id: 6,
      name: "E6",
      label: "Element E6",
      type: "Biconvex Positive",
      nd: 1.9011,
      vd: 27.1,
      indexReference: "d",
      focalLengthMm: 60.790077,
      glass: "NBFD27 — coordinate-compatible spectral proxy (supplier unresolved)",
      diagramLabel: "E6",
    },
    {
      id: 7,
      name: "E7",
      label: "Element E7",
      type: "Negative Meniscus, convex to image",
      nd: 1.55032,
      vd: 75.5,
      indexReference: "d",
      focalLengthMm: -120.585845,
      glass: "550755 class (supplier unproven)",
      diagramLabel: "E7",
    },
    {
      id: 8,
      name: "E8",
      label: "Element E8",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.6935,
      vd: 53.2,
      indexReference: "d",
      focalLengthMm: 70.078778,
      glass: "694532 class (supplier unproven)",
      diagramLabel: "E8",
    },
    {
      id: 9,
      name: "E9",
      label: "Element E9",
      type: "Biconcave Negative",
      nd: 1.95375,
      vd: 32.3,
      indexReference: "d",
      focalLengthMm: -66.250082,
      glass: "954323 class (supplier unproven)",
      diagramLabel: "E9",
    },
    {
      id: 10,
      name: "E10",
      label: "Element E10",
      type: "Biconvex Positive",
      nd: 1.76385,
      vd: 48.5,
      indexReference: "d",
      focalLengthMm: 53.136028,
      glass: "764485 class (supplier unproven)",
      diagramLabel: "E10",
    },
    {
      id: 11,
      name: "E11",
      label: "Element E11",
      type: "Negative Meniscus, convex to object",
      nd: 1.76634,
      vd: 35.8,
      indexReference: "d",
      focalLengthMm: -49.521916,
      glass: "S-NBH59 — coordinate-compatible spectral proxy (supplier unproven)",
      diagramLabel: "E11",
      cemented: "D1",
    },
    {
      id: 12,
      name: "E12",
      label: "Element E12",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: 51.643212,
      glass: "497816 class (supplier unproven)",
      diagramLabel: "E12",
      cemented: "D1",
    },
    {
      id: 13,
      name: "E13",
      label: "Element E13",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      indexReference: "d",
      focalLengthMm: 81.01079,
      glass: "593686 class (supplier unproven)",
      diagramLabel: "E13",
    },
    {
      id: 14,
      name: "E14",
      label: "Element E14",
      type: "Biconvex Positive",
      nd: 1.86966,
      vd: 20,
      indexReference: "d",
      focalLengthMm: 103.931167,
      glass: "870200 class (supplier unproven)",
      diagramLabel: "E14",
      cemented: "D2",
    },
    {
      id: 15,
      name: "E15",
      label: "Element E15",
      type: "Biconcave Negative",
      nd: 1.6134,
      vd: 44.3,
      indexReference: "d",
      focalLengthMm: -39.98301,
      glass: "613443 class (supplier unproven)",
      diagramLabel: "E15",
      cemented: "D2",
    },
    {
      id: 16,
      name: "E16",
      label: "Element E16",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.59245,
      vd: 66.9,
      indexReference: "d",
      focalLengthMm: 50.868972,
      glass: "M-PCD51 — coordinate-compatible spectral proxy (supplier unproven)",
      diagramLabel: "E16",
    },
    {
      id: 17,
      name: "E17",
      label: "Element E17",
      type: "Positive Meniscus, convex to image",
      nd: 1.64769,
      vd: 33.8,
      indexReference: "d",
      focalLengthMm: 119.025665,
      glass: "648338 class (supplier unproven)",
      diagramLabel: "E17",
    },
    {
      id: 18,
      name: "E18",
      label: "Element E18",
      type: "Negative Meniscus, convex to image (2× Asph)",
      nd: 1.76802,
      vd: 49.2,
      indexReference: "d",
      focalLengthMm: -55.447393,
      glass: "768492 class (supplier unproven)",
      diagramLabel: "E18",
    },
    {
      id: 19,
      name: "E19",
      label: "Element E19",
      type: "Negative Meniscus, convex to image",
      nd: 1.95375,
      vd: 32.3,
      indexReference: "d",
      focalLengthMm: -58.511675,
      glass: "954323 class (supplier unproven)",
      diagramLabel: "E19",
    },
  ],

  surfaces: [
    { label: "1", R: 131.467, d: 2.4, sd: 37.9, medium: 1 },
    { label: "2", R: 85.108, d: 0.15, sd: 36.73 },
    { label: "3", R: 86.472, d: 10.98, sd: 36.73, medium: 2 },
    { label: "4", R: -694.616, d: 0.2, sd: 36.45 },
    { label: "5", R: 72.826, d: 9.27, sd: 34.155, medium: 3 },
    { label: "6", R: 586.426, sd: 33.6 },
    {
      label: "7A",
      R: 197.7,
      d: 1.5,
      sd: 22.6,
      medium: 4,
      asphere: { K: 0, A4: 2.59621e-7, A6: 3.37007e-9, A8: -5.22943e-12, A10: 3.91332e-15 },
    },
    {
      label: "8A",
      R: 40.015,
      d: 7.23,
      sd: 20.01,
      asphere: { K: 1.31207, A4: -2.69533e-6, A6: 2.6002e-10, A8: -3.28969e-12, A10: -6.66692e-15 },
    },
    { label: "9", R: -142.385, d: 1.35, sd: 19.885, medium: 5 },
    { label: "10", R: 75.79, d: 0.47, sd: 19.17 },
    { label: "11", R: 64.236, d: 5.3, sd: 19.545, medium: 6 },
    { label: "12", R: -357.484, d: 9.07, sd: 19.605 },
    { label: "13", R: -40.223, d: 1.25, sd: 19.46, medium: 7 },
    { label: "14", R: -103.248, sd: 20.215 },
    {
      label: "15A",
      R: 69.114,
      d: 6.64,
      sd: 21.34,
      medium: 8,
      asphere: { K: 0, A4: -1.3048e-6, A6: -2.50533e-10, A8: -1.11346e-12, A10: -5.07252e-16 },
    },
    {
      label: "16A",
      R: -157.293,
      sd: 21.325,
      // (moved from asph["16A"].A10) Table 4 source cell is blank; modeled absent coefficient = 0.
      asphere: { K: 0, A4: 1.49176e-6, A6: -2.79527e-10, A8: -1.098e-12, A10: 0 },
    },
    // Patent Table 1 row 17(STO) prints φ17 = 42.00 mm (φ17 / 2 = 21.00 mm).
    // The wide-open iris is traced per station from nominalFno and is not read from this row.
    { label: "STO", R: "flat", d: 1.64 },
    { label: "18", R: -372.93, d: 1.45, sd: 20.925, medium: 9 },
    { label: "19", R: 76.22, d: 3.12, sd: 20.885 },
    { label: "20", R: 52.368, d: 8.59, sd: 22.32, medium: 10 },
    { label: "21", R: -167.616, d: 0.2, sd: 22.19 },
    { label: "22", R: 97.405, d: 1.3, sd: 21.305, medium: 11 },
    { label: "23", R: 27.152, d: 11.35, sd: 19.67, medium: 12 },
    { label: "24", R: -404.077, d: 0.2, sd: 19.45 },
    { label: "25", R: 66.046, d: 5.56, sd: 18.895, medium: 13 },
    { label: "26", R: -170.492, sd: 18.515 },
    { label: "27", R: 149.766, d: 3.05, sd: 16.325, medium: 14 },
    { label: "28", R: -225.801, d: 1.1, sd: 15.9, medium: 15 },
    { label: "29", R: 27.565, sd: 14.1 },
    { label: "30", R: 228.881, d: 7.61, sd: 17.735, medium: 16 },
    {
      label: "31A",
      R: -34.278,
      sd: 18.005,
      asphere: { K: 0, A4: 1.78822e-5, A6: -2.79519e-8, A8: 5.0713e-11, A10: -4.65343e-14 },
    },
    { label: "32", R: -122.754, d: 4.51, sd: 17.655, medium: 17 },
    { label: "33", R: -48.037, d: 0.3, sd: 17.68 },
    {
      label: "34A",
      R: -39.372,
      d: 1.41,
      sd: 17.52,
      medium: 18,
      asphere: { K: 0, A4: 1.55693e-5, A6: -2.74386e-8, A8: 5.95406e-11, A10: -5.11049e-14 },
    },
    {
      label: "35A",
      R: -529.998,
      d: 7.16,
      sd: 17.455,
      asphere: { K: 0, A4: -6.90678e-6, A6: -7.75637e-10, A8: 3.27399e-12, A10: -1.99728e-14 },
    },
    { label: "36", R: -28.268, d: 1.2, sd: 16.965, medium: 19 },
    { label: "37", R: -58.473, d: 15.51, sd: 18 },
  ],

  zoom: {
    // (moved from publishedStations) The close-focus row is source-tabulated.
    stations: [
      { focalLengthMm: 51.5, closeFocusM: 0.397, label: "Wide", published: true, publishedFocus: [1] },
      { focalLengthMm: 88.98, closeFocusM: 0.521, published: true, publishedFocus: [1] },
      { focalLengthMm: 145.5, closeFocusM: 0.746, label: "Tele", published: true, publishedFocus: [1] },
    ],
  },

  focus: {
    closeFocusM: 0.397,
    description:
      "Published two-group floating focus: G5 moves imageward and G6 moves objectward. The authored close states are the patent Table 3 values at 0.397 m, 0.521 m, and 0.746 m for Wide/Mid/Tele; no internal focus reconstruction is used.",
  },

  gaps: {
    "6": {
      label: "d6 — G1/G2",
      values: [
        [1, 1],
        [28.25, 28.25],
        [48.3, 48.3],
      ],
    },
    "14": {
      label: "d14 — G2/G3",
      values: [
        [46.8, 46.8],
        [21.25, 21.25],
        [1.1, 1.1],
      ],
    },
    "16A": {
      label: "d16 — G3/STO",
      values: [
        [4.03, 4.03],
        [2.33, 2.33],
        [2.43, 2.43],
      ],
    },
    "26": {
      label: "d26 — G4/G5",
      values: [
        [2.4, 6.14],
        [4.81, 12.42],
        [2.49, 15.63],
      ],
    },
    "29": {
      label: "d29 — G5/G6",
      values: [
        [22.72, 17.74],
        [20.23, 11.05],
        [22.77, 7.67],
      ],
    },
    "31A": {
      label: "d31 — G6/G7",
      values: [
        [2.15, 3.38],
        [2.22, 3.79],
        [2, 3.97],
      ],
    },
  },

  aperture: { nominalFNumber: 2.06, fStops: [2.06, 2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "7A", toSurface: "14" },
    { text: "G3", fromSurface: "15A", toSurface: "16A" },
    { text: "G4", fromSurface: "STO", toSurface: "26" },
    { text: "G5", fromSurface: "27", toSurface: "29" },
    { text: "G6", fromSurface: "30", toSurface: "31A" },
    { text: "G7", fromSurface: "32", toSurface: "37" },
  ],
  doublets: [
    { text: "D1", fromSurface: "22", toSurface: "24" },
    { text: "D2", fromSurface: "27", toSurface: "29" },
  ],

  layout: { yScFill: 0.4 },

  checks: { gapSagFrac: 0.98 },
} satisfies LensDataV2Input;

export default LENS_DATA;
