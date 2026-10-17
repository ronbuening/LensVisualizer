import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF FISHEYE-NIKKOR 16mm f/2.8 D                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 5,434,713 A, Example 1 / First Embodiment (Haruo Sato). ║
 * ║ Production identity: Nikon's official lens history and product     ║
 * ║ specifications. The patent prescription supplies the exact design. ║
 * ║ 8 elements / 5 groups; 0 aspherical surfaces; no uniform scaling.  ║
 * ║                                                                    ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION.                          ║
 * ║ The patent's beta = -1/30 row calibrates a two-group floating      ║
 * ║ mechanism. The production 0.25 m endpoint is code-solved with      ║
 * ║ X2/X1 = 0.6 and predicts -0.09719x, consistent with Nikon's 0.10x. ║
 * ║ The stop is treated as fixed; this is inferred from Fig. 1 and     ║
 * ║ Nikon's cross-section, not explicitly dimensioned by the patent.   ║
 * ║                                                                    ║
 * ║ Filter: patent surfaces 14-15 form a 1.20 mm plate at nd = 1.51680 ║
 * ║ behind the last element. The patent calls it a filter that may be  ║
 * ║ placed anywhere in the system or left out without affecting the    ║
 * ║ basic performance, so it is not modeled. The rear image spacing is ║
 * ║ the filter-absent back focus: 0.88 mm + 1.20/1.51680 mm + Bf.      ║
 * ║                                                                    ║
 * ║ Stop model: Nikon's official cross-section maps the stop to        ║
 * ║ 6.47 mm after surface 7 within the 10.9883 mm infinity gap. The    ║
 * ║ stop radius is derived from the design f-number, f/2.9.            ║
 * ║                                                                    ║
 * ║ Projection model: the patent does not name a projection law.      ║
 * ║ Exact chief-ray tracing identifies equisolid as the closest        ║
 * ║ available LensVisualizer taxonomy; this is a modeling inference,   ║
 * ║ not a source claim. The traced full-frame diagonal is about 180°.  ║
 * ║                                                                    ║
 * ║ Semi-diameters: inferred from Nikon's official cross-section and   ║
 * ║ patent Fig. 1, then checked against exact on/off-axis footprints.  ║
 * ║ The rear four components were widened to match the published       ║
 * ║ silhouette while retaining physical rim, edge, and gap clearance.  ║
 * ║ Surface 2 remains rim-limited. No layout control conceals invalid  ║
 * ║ geometry; maxRimAngleDeg = 72 and gapSagFrac = 0.92 are required.  ║
 * ║                                                                    ║
 * ║ Spectral limit: the patent gives only nd and vd. nC, nF, ng, and   ║
 * ║ dPgF are therefore not authored; no APO/APD claim is made.         ║
 * ║                                                                    ║
 * ║ Source discrepancies retained in the audit: Table 1 alpha         ║
 * ║ (-0.3893) conflicts with Claim 13 (-0.3898), and Condition (4)    ║
 * ║ reverses np and nn. Independent calculation supports -0.3898 and  ║
 * ║ the numerical intent nn - np = +0.2661.                            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-af-fisheye-nikkor-16mm-f28d",
  maker: "Nikon",
  name: "NIKON AF FISHEYE-NIKKOR 16mm f/2.8 D",
  subtitle: "US 5,434,713 A — Example 1 / First Embodiment; strong production correlation",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "8 ELEMENTS / 5 GROUPS",
      "DESIGN EFL 15.66855 mm",
      "f/2.9 MODEL / f/2.8 MARKETED",
      "180° DIAGONAL FISHEYE",
      "CRC FLOATING FOCUS TO 0.25 m",
      "ALL-SPHERICAL",
    ],
    elementCount: 8,
    groupCount: 5,
    focalLengthMm: { marketing: 16, design: 15.668548765471446 },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "US 5,434,713 A",
    patentYear: 1995,
    authors: ["Haruo Sato"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus, convex to object",
      nd: 1.64,
      vd: 60,
      indexReference: "d",
      focalLengthMm: -30.715,
      glass: "J-LAK01 (Hikari catalog equivalent to patent 640600; production supplier unspecified)",
      apd: false,
      role: "Large front negative meniscus for 180-degree acceptance and negative distortion.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus, convex to object",
      nd: 1.62041,
      vd: 60.1,
      indexReference: "d",
      focalLengthMm: -27.0464,
      glass: "620601 — SK16/BSM16 crown class (vendor unassigned)",
      apd: false,
      role: "Second negative meniscus; continues the front-group angular compression.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L31",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.62588,
      vd: 35.7,
      indexReference: "d",
      focalLengthMm: 17.7508,
      glass: "626357 — F1/TIM1 flint class (vendor unassigned)",
      apd: false,
      role: "Positive member of the front cemented doublet.",
      diagramLabel: "L31",
      cemented: "L3",
    },
    {
      id: 4,
      name: "L32",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.79668,
      vd: 45.4,
      indexReference: "d",
      focalLengthMm: -38.2342,
      glass: "J-LASF017 (Hikari catalog equivalent to patent 797454; production supplier unspecified)",
      apd: false,
      role: "High-index negative member of the front cemented doublet.",
      diagramLabel: "L32",
      cemented: "L3",
    },
    {
      id: 5,
      name: "L41",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.8,
      indexReference: "d",
      focalLengthMm: -31.7113,
      glass: "581408 — FL5/TIL25 flint class (vendor unassigned)",
      apd: false,
      role: "Negative member of the first rear cemented doublet.",
      diagramLabel: "L41",
      cemented: "L4",
    },
    {
      id: 6,
      name: "L42",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 58.9,
      indexReference: "d",
      focalLengthMm: 22.2475,
      glass: "J-K3 (Hikari catalog equivalent to patent 518589; production supplier unspecified)",
      apd: false,
      role: "Positive member of the first rear cemented doublet.",
      diagramLabel: "L42",
      cemented: "L4",
    },
    {
      id: 7,
      name: "L51",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.5186,
      vd: 70,
      indexReference: "d",
      focalLengthMm: 27.0297,
      glass: "J-PKH1 (Hikari catalog equivalent to patent 519700; production supplier unspecified)",
      apd: false,
      role: "Low-dispersion positive member of the rearmost cemented doublet.",
      diagramLabel: "L51",
      cemented: "L5",
    },
    {
      id: 8,
      name: "L52",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.7847,
      vd: 26.1,
      indexReference: "d",
      focalLengthMm: -47.6671,
      glass: "785261 — dense-flint class (nearest J-SFS3/S-TIH23)",
      apd: false,
      role: "Dense-flint negative member of the rearmost cemented doublet.",
      diagramLabel: "L52",
      cemented: "L5",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 69.258, d: 1.7, sd: 26, medium: 1 },
    { label: "2", R: 15.165, d: 10.25, sd: 14.3 },
    { label: "3", R: 130.505, d: 1.7, sd: 18, medium: 2 },
    { label: "4", R: 14.794, d: 4, sd: 12 },
    { label: "5", R: 32.412, d: 8, sd: 11, medium: 3 },
    { label: "6", R: -15.298, d: 9, sd: 11, medium: 4 },
    // Stop position inferred from Nikon's official production cross-section.
    { label: "7", R: -38.75, sd: 7.9 },
    { label: "STO", R: "flat" },
    { label: "8", R: -81.004, d: 1.2, sd: 10, medium: 5 },
    { label: "9", R: 24.002, d: 5, sd: 10, medium: 6 },
    { label: "10", R: -20.609, d: 0.1, sd: 10 },
    { label: "11", R: 46.733, d: 5.5, sd: 11.1, medium: 7 },
    { label: "12", R: -19.219, d: 1.3, sd: 11.5, medium: 8 },
    // Optional patent filter left out; d is the filter-absent back focus, 0.88 mm + 1.20/1.51680 mm + Bf.
    { label: "13", R: -40.706, sd: 12.2 },
  ],

  focus: {
    closeFocusM: 0.25,
    /* ── Variable air spacings ──
     * Base values are infinity focus. The patent beta=-1/30 calibration and the
     * 0.25 m CONSTRAINED_RECONSTRUCTION are stored as exact keyframes.
     */
    keyframes: [0, 0.44646544064147803, 1],
    description:
      "Fixed-stop CRC focus: the patent beta=-1/30 calibration and constrained 0.25 m endpoint are exact keyframes; G1 and G2 move objectward at X2/X1 approximately 0.6.",
    // (moved from publishedStations) The intermediate focus row is source-tabulated; the close endpoint is reconstructed.
    published: [1],
  },

  gaps: {
    "7": { label: "G1–STO", values: [[6.47, 7.2576, 8.755470452006371]] },
    STO: { label: "STO–G2", values: [[4.5183, 4.0457, 3.147017728796178]] },
    "13": { label: "BF (AIR-EQ)", values: [[40.2685392405, 40.7411392405, 41.63982151171015]] },
  },

  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  projection: {
    kind: "fisheye-equisolid",
    focalLengthMm: 15.668548765471446,
    fullFieldDeg: 180,
    imageCircleMm: 43.2666,
    maxTraceFieldDeg: 90,
  },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "7" },
    { text: "G2", fromSurface: "8", toSurface: "13" },
  ],
  doublets: [
    { text: "L3", fromSurface: "5", toSurface: "7" },
    { text: "L4", fromSurface: "8", toSurface: "10" },
    { text: "L5", fromSurface: "11", toSurface: "13" },
  ],

  layout: { yScFill: 0.72 },

  checks: { gapSagFrac: 0.92, maxRimAngleDeg: 72 },
} satisfies LensDataV2Input;

export default LENS_DATA;
