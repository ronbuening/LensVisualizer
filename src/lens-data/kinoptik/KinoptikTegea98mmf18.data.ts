import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — KINOPTIK TEGEA 9.8mm f/1.8                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,037,426, Example 2 / Table 2 (Edgard Hugues).  ║
 * ║  Production correlation: strong circumstantial, not manufacturer- ║
 * ║  confirmed as the exact TEGEA production prescription.            ║
 * ║  9 elements / 6 air-separated groups, 1 aspherical surface.      ║
 * ║  Focus: NO_INTERNAL_RECONSTRUCTION. Production literature gives  ║
 * ║  infinity to 9 in; no finite-focus patent spacing state exists.  ║
 * ║                                                                    ║
 * ║  NO SCALING: Table 2 dimensions are retained at s = 1.           ║
 * ║                                                                    ║
 * ║  STOP: axial position is published (3.00 mm behind L12 rear).     ║
 * ║  Physical stop diameter is not published. STO sd is calibrated    ║
 * ║  from the parsed prescription so the paraxial entrance pupil      ║
 * ║  gives the patent's f/2 model. That f/2 agreement is therefore    ║
 * ║  calibration, not independent evidence for a physical diaphragm.  ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: not published. Modeled from exact meridional ray ║
 * ║  geometry using the parsed prescription: on-axis full aperture,   ║
 * ║  ±33° default off-axis fan, and ±55° published-field chief rays,  ║
 * ║  then approximately 8% clearance and conservative shared cemented ║
 * ║  apertures. Figure 2 review enlarged surfaces 3–5 and 10–15,     ║
 * ║  capped where literal drawing rims would cross optical surfaces.║
 * ║                                                                    ║
 * ║  IMAGE PLANE: source rear spacing 21.841 mm is preserved. The     ║
 * ║  computed Gaussian BFD is a distinct quantity (~22.378 mm).       ║
 * ║                                                                    ║
 * ║  GLASS: patent nd/νd values are retained at the d line. Generic   ║
 * ║  class/Unmatched labels avoid asserting historical supplier melts ║
 * ║  or importing unsupported line-index/partial-dispersion data.     ║
 * ║                                                                    ║
 * ║  FORMAT: manufacturer 22×16 mm cine coverage; full-frame use has ║
 * ║  slight vignetting. Historical mounts remain uncatalogued.       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "kinoptik-tegea-98mm-f18",
  maker: "Kinoptik",
  name: "KINOPTIK TEGEA 9.8mm f/1.8",
  subtitle: "US 3,037,426 Example 2 — 9.759 mm f/2 patent design; strong circumstantial TEGEA correlation",
  specs: [
    "27.20 mm FORMAT DIAGONAL",
    "9 ELEMENTS / 6 GROUPS",
    "MODEL EFL ≈ 9.784 mm; PATENT f = 9.759 mm",
    "MODEL f/2; MARKETED f/1.8",
    "2ω = 110° (PATENT)",
    "1 ASPHERICAL SURFACE",
  ],

  imageFormat: "35mm-cinema",
  focalLengthMarketing: 9.8,
  focalLengthDesign: 9.784066724,
  apertureMarketing: 1.8,
  apertureDesign: 2,
  patentNumber: "US 3,037,426",
  patentAuthors: ["Edgard Hugues"],
  patentAssignees: ["Les Appareils de Precision Kinoptik"],
  patentYear: 1962,
  elementCount: 9,
  groupCount: 6,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 110,
    maxTraceFieldDeg: 55,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L7",
      diagramLabel: "L7",
      label: "Element L7",
      type: "Plano-Parabolic Negative (1× Asph)",
      nd: 1.69153,
      vd: 54,
      indexReference: "d",
      fl: -21.691032927,
      glass: "N-LAK9-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Negative front system; the patent assigns the first system the principal wide-field distortion-correction role.",
    },
    {
      id: 2,
      name: "L8",
      diagramLabel: "L8",
      label: "Element L8",
      type: "Biconvex Positive",
      nd: 1.68129,
      vd: 32,
      indexReference: "d",
      fl: 51.768215339,
      glass: "Unmatched (nd=1.68129, vd=32.0; dense-flint region)",
      apd: false,
      role: "Front component of the cemented positive second system.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L9",
      diagramLabel: "L9",
      label: "Element L9",
      type: "Negative Meniscus",
      nd: 1.674,
      vd: 56,
      indexReference: "d",
      fl: -128.325269515,
      glass: "Unmatched (nd=1.67400, vd=56.0)",
      apd: false,
      role: "Rear component of the cemented positive second system.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L10",
      diagramLabel: "L10",
      label: "Element L10",
      type: "Biconvex Positive",
      nd: 1.4635,
      vd: 65.4,
      indexReference: "d",
      fl: 25.976676053,
      glass: "FK3-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Front positive component of the cemented triplet within system III.",
      cemented: "C2",
    },
    {
      id: 5,
      name: "L11",
      diagramLabel: "L11",
      label: "Element L11",
      type: "Biconcave Negative",
      nd: 1.7235,
      vd: 37.9,
      indexReference: "d",
      fl: -14.809175827,
      glass: "S-BAH28-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Negative middle component of the cemented triplet within system III.",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L12",
      diagramLabel: "L12",
      label: "Element L12",
      type: "Plano-Convex Positive",
      nd: 1.4635,
      vd: 65.4,
      indexReference: "d",
      fl: 34.778856526,
      glass: "FK3-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Rear positive component of the cemented triplet; the published diaphragm follows this element by 3.00 mm.",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L13",
      diagramLabel: "L13",
      label: "Element L13",
      type: "Biconvex Positive",
      nd: 1.5135,
      vd: 59,
      indexReference: "d",
      fl: 61.136565271,
      glass: "NSL7-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Air-separated positive component of system III behind the stop.",
    },
    {
      id: 8,
      name: "L14",
      diagramLabel: "L14",
      label: "Element L14",
      type: "Negative Meniscus",
      nd: 1.762,
      vd: 27,
      indexReference: "d",
      fl: -88.80066493,
      glass: "PBH25-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Air-separated negative meniscus in the rear part of system III.",
    },
    {
      id: 9,
      name: "L15",
      diagramLabel: "L15",
      label: "Element L15",
      type: "Biconvex Positive",
      nd: 1.5135,
      vd: 59,
      indexReference: "d",
      fl: 41.282170468,
      glass: "NSL7-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Final positive element of system III ahead of the published image plane.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 1e15, d: 5.09, nd: 1.69153, elemId: 1, sd: 39.1 },
    { label: "2A", R: 15, d: 59.09, nd: 1, elemId: 0, sd: 25.2 },
    { label: "3", R: 190, d: 12, nd: 1.68129, elemId: 2, sd: 26 },
    { label: "4", R: -42.2, d: 2, nd: 1.674, elemId: 3, sd: 26 },
    { label: "5", R: -83.98, d: 43.46, nd: 1, elemId: 0, sd: 26 },
    { label: "6", R: 17.98, d: 5.29, nd: 1.4635, elemId: 4, sd: 10.2 },
    { label: "7", R: -33.05, d: 1.32, nd: 1.7235, elemId: 5, sd: 10.2 },
    { label: "8", R: 16.12, d: 3.97, nd: 1.4635, elemId: 6, sd: 10.2 },
    { label: "9", R: 1e15, d: 3, nd: 1, elemId: 0, sd: 10.2 },
    { label: "STO", R: 1e15, d: 2.97, nd: 1, elemId: 0, sd: 8.486179352 },
    { label: "10", R: 60.02, d: 5.3, nd: 1.5135, elemId: 7, sd: 12 },
    { label: "11", R: -63.85, d: 6.62, nd: 1, elemId: 0, sd: 12 },
    { label: "12", R: 20.1, d: 0.86, nd: 1.762, elemId: 8, sd: 12 },
    { label: "13", R: 15.21, d: 5.46, nd: 1, elemId: 0, sd: 12 },
    { label: "14", R: 23.96, d: 2.68, nd: 1.5135, elemId: 9, sd: 10.3 },
    { label: "15", R: -176.94, d: 21.841, nd: 1, elemId: 0, sd: 10.3 },
  ],

  asph: {
    "2A": {
      K: -1,
      A4: 0,
      A6: 0,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  var: {},
  varLabels: [],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2A" },
    { text: "II", fromSurface: "3", toSurface: "5" },
    { text: "III", fromSurface: "6", toSurface: "15" },
  ],
  doublets: [
    { text: "L8+L9", fromSurface: "3", toSurface: "5" },
    { text: "L10+L11+L12", fromSurface: "6", toSurface: "9" },
  ],

  /* Production close-focus value is metadata only; no finite-focus optical movement is reconstructed. */
  closeFocusM: 0.2286,
  focusDescription: "Not modeled; the patent supplies only the infinity prescription.",

  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
