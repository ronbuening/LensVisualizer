import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — MINOLTA AF 80-200mm f/2.8 APO                                ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP1989-039542, Example 1 (Minolta Co., Ltd.).                ║
 * ║  Production correlation: Minolta AF Zoom 80-200mm F2.8 / code 2589.       ║
 * ║  16 elements / 13 air-separated groups; all spherical; no scale applied.  ║
 * ║                                                                            ║
 * ║  Zoom: patent gaps D7, D14, and D19 at 82 / 140 / 195 mm.                 ║
 * ║  Group II moves imageward; Group III reverses after the mid position;      ║
 * ║  Group IV is fixed to source precision and the lens-stack track is         ║
 * ║  effectively constant.                                                     ║
 * ║                                                                            ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION. Minolta's service material      ║
 * ║  identifies front focus by Group I and a 1.8 m MFD. The data model keeps   ║
 * ║  the front vertex fixed and increases D7, which is optically equivalent    ║
 * ║  up to a global axial translation. Close-focus D7 values were re-solved    ║
 * ║  from the final arrays with a fixed image plane and 1.8 m image-plane      ║
 * ║  distance; they are not patent-published spacings.                         ║
 * ║                                                                            ║
 * ║  Stop inference: the patent has no numerical stop row. The Minolta AF      ║
 * ║  Zoom 80-200mm F2.8 service manual (codes 2589-100 / 2589-600) depicts     ║
 * ║  the diaphragm inside Group IV between L13 and L14, and its diaphragm      ║
 * ║  adjustment instructions specify a 2.4 mm minimum-side aperture. Patent    ║
 * ║  d23 = 23.30 mm is split at the code-solved STO station, where the 82 mm   ║
 * ║  paraxial pupil magnification makes a 2.4 mm stop correspond to f/32. The  ║
 * ║  stop radius is derived from the design f-number and held at every zoom    ║
 * ║  station; the axial split remains inferred.                                ║
 * ║                                                                            ║
 * ║  Image plane: the patent has no BFD row. r29.d = 41.793578 mm is the       ║
 * ║  independently computed 82 mm-state BFD and is held fixed; mid/tele        ║
 * ║  paraxial image-station residuals are below 0.002 mm and arise from source ║
 * ║  rounding.                                                                  ║
 * ║                                                                            ║
 * ║  Semi-diameters: not published numerically. They are inferred from exact   ║
 * ║  spherical marginal-ray checks, paraxial chief-ray/full-frame checks, the  ║
 * ║  patent optical section, the reconstructed 1.8 m state, and current        ║
 * ║  edge-thickness / rim-slope / shared-band cross-gap rules.                 ║
 * ║  Group II (surfaces 8-14) is sized by the f/2.88 on-axis ray at 195 mm,    ║
 * ║  each rim at that ray height rounded up to 0.1 mm. Fig. 1 draws the group  ║
 * ║  as one square block of about 18.5-19.0 mm half-height whose concave       ║
 * ║  faces meet their neighbours just inside its edge. L7 (11/12, 18.5 mm)     ║
 * ║  and L8 (13/14, 19.0 mm, the higher face) carry square rims. Surfaces 9    ║
 * ║  and 10 stay at their 17.9 mm ray height: their spheres meet at 18.19 mm,  ║
 * ║  below the square values 18.8 and 18.5 mm, so L5 (18.8 / 17.9 mm) and L6   ║
 * ║  (17.9 / 18.5 mm) are stepped.                                             ║
 * ║  gapSagFrac = 0.97 admits the two near-contact pairs: 9/10 (L5 rear, L6    ║
 * ║  front) uses 96.8 % of the 5.67 mm gap with 0.184 mm rim clearance;        ║
 * ║  12/13 (L7 rear, L8 front) uses 94.8 % of the 2.42 mm gap with 0.126 mm.   ║
 * ║                                                                            ║
 * ║  Glass: the patent publishes only nd and νd. No per-element nC, nF, ng,   ║
 * ║  or dPgF data are available, so those fields are deliberately omitted.     ║
 * ║  Compatible catalog curves are used without asserting production vendor.  ║
 * ║  Rows outside the compatibility guard stay explicitly unmatched.          ║
 * ║                                                                            ║
 * ║  Source normalization: patent r19 = 0.000 is a plane and is stored as      ║
 * ║  R = 1e15. Patent condition (7) prints +0.101; independent substitution    ║
 * ║  gives -0.101609585. That source error does not alter the prescription.     ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "minolta-af-80-200mm-f28-apo",
  maker: "Minolta",
  name: "MINOLTA AF 80-200mm f/2.8 APO",
  subtitle: "JP1989-039542 Example 1 — correlated to Minolta AF Zoom 80-200mm F2.8 (2589)",

  catalog: {
    lensMounts: ["sony-a"],
    imageFormat: "135-full-frame",
    specs: ["16 ELEMENTS / 13 GROUPS", "DESIGN 82-195mm", "F/2.88 DESIGN", "FRONT FOCUS", "ALL-SPHERICAL"],
    elementCount: 16,
    groupCount: 13,
    focalLengthMm: { marketing: [80, 200], design: [82, 195] },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "JP 1989-039542 A",
    patentYear: 1989,
    authors: ["Hisashi Tokumaru", "Masakuni Tai"],
    assignees: ["Minolta Camera Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.1,
      focalLengthMm: 398.329737,
      glass: "S-FSL5 (OHARA catalog equivalent; patent 487701; production supplier unspecified)",
      role: "First positive member of the front focusing group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.1,
      focalLengthMm: 398.329737,
      glass: "S-FSL5 (OHARA catalog equivalent; patent 487701; production supplier unspecified)",
      role: "Second positive member of the front focusing group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.74,
      vd: 31.7,
      focalLengthMm: -123.241254,
      glass: "740317 class (vendor unresolved)",
      role: "Negative member of the front-group cemented pair.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.7,
      focalLengthMm: 84.290414,
      glass: "603607 class (vendor unresolved)",
      role: "Positive member completing the front-group cemented pair.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.60311,
      vd: 60.7,
      focalLengthMm: -64.52493,
      glass: "603607 class (vendor unresolved)",
      role: "Front negative member of the second zoom group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.60311,
      vd: 60.7,
      focalLengthMm: -46.020576,
      glass: "603607 class (vendor unresolved)",
      role: "Negative member of the second-group cemented pair.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.75,
      vd: 25.1,
      focalLengthMm: 54.783874,
      glass: "FF8 (HOYA catalog equivalent; patent 750251; production supplier unspecified)",
      role: "Positive high-index member of the second-group cemented pair.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: -109.01076,
      glass: "694532 class (vendor unresolved)",
      role: "Rear negative member of the second zoom group.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 88.291882,
      glass: "773496 class (vendor unresolved)",
      role: "Front positive member of the third zoom group.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.1,
      focalLengthMm: 76.567714,
      glass: "S-FSL5 (OHARA catalog equivalent; patent 487701; production supplier unspecified)",
      role: "Positive member of the third-group cemented pair.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Plano-Concave Negative",
      nd: 1.74,
      vd: 31.7,
      focalLengthMm: -76.824324,
      glass: "740317 class (vendor unresolved)",
      role: "Negative plano-concave member completing the third group.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.4931,
      vd: 83.6,
      focalLengthMm: 65.271203,
      glass: "Unmatched (493836 Minolta AD/ED fluorophosphate; no compatible public coefficient row)",
      apd: "inferred",
      apdNote:
        "AD/APD status is inferred from the exact 493836 Minolta glass family; this patent publishes only nd and νd, so no numeric dPgF is borrowed.",
      role: "Strong positive front member of the fixed fourth group.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      focalLengthMm: -107.804685,
      glass: "755275 class (vendor unresolved)",
      role: "Negative member of the fixed fourth group.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.71736,
      vd: 29.5,
      focalLengthMm: 146.478864,
      glass: "717295 class (vendor unresolved)",
      role: "Positive meniscus in the fixed rear group.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -58.615443,
      glass: "834372 class (vendor unresolved)",
      role: "Strong negative meniscus near the rear of the fixed group.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.68893,
      vd: 31.1,
      focalLengthMm: 96.3227,
      glass: "689311 class (vendor unresolved)",
      role: "Final positive element before the modeled image plane.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 120.0, d: 4.8, sd: 35.5, medium: 1 },
    { label: "2", R: 310.0, d: 0.2, sd: 35.5 },
    { label: "3", R: 120.0, d: 4.8, sd: 35.0, medium: 2 },
    { label: "4", R: 310.0, d: 0.2, sd: 35.0 },
    { label: "5", R: 112.8, d: 2.25, sd: 34.0, medium: 3 },
    { label: "6", R: 50.0, d: 13.25, sd: 33.0, medium: 4 },
    { label: "7", R: 2736.05, sd: 33.0 },
    // 8-14 (Group II): rims sized by the f/2.88 on-axis ray at 195 mm, rounded up to 0.1 mm. 8: ray 18.717 mm
    { label: "8", R: -279.86, d: 1.3, sd: 18.8, medium: 5 },
    // 9 and 10: rays 17.850 / 17.851 mm. Their spheres meet at 18.19 mm, below the square values 18.8 and 18.5, so the
    // two faces cannot both carry them and both stay at the ray height (L5 18.8 / 17.9, L6 17.9 / 18.5); they take
    // 0.9676 of the 5.67 mm gap between them (gapSagFrac 0.97)
    { label: "9", R: 45.28, d: 5.67, sd: 17.9 },
    { label: "10", R: -90.0, d: 1.3, sd: 17.9, medium: 6 },
    // 11 and 12 (L7): rays 18.447 / 18.496 mm, one square rim
    { label: "11", R: 40.35, d: 6.15, sd: 18.5, medium: 7 },
    { label: "12", R: 2100.0, d: 2.42, sd: 18.5 },
    // 13 and 14 (L8): rays 18.503 / 18.974 mm, one square rim at the higher face; 12 and 13 take 0.9480 of the
    // 2.42 mm gap between them
    { label: "13", R: -78.442, d: 1.3, sd: 19.0, medium: 8 },
    { label: "14", R: 2100.0, sd: 19.0 },
    { label: "15", R: 384.91, d: 4.2, sd: 20.5, medium: 9 },
    { label: "16", R: -82.5, d: 0.15, sd: 20.5 },
    { label: "17", R: 104.3, d: 7.0, sd: 20.5, medium: 10 },
    { label: "18", R: -56.85, d: 1.35, sd: 20.5, medium: 11 },
    { label: "19", R: "flat", sd: 20.5 },
    { label: "20", R: 38.6, d: 8.25, sd: 20.0, medium: 12 },
    { label: "21", R: -180.0, d: 7.46, sd: 20.0 },
    { label: "22", R: -93.2, d: 1.35, sd: 17.0, medium: 13 },
    { label: "23", R: 647.815, d: 13.934190046639, sd: 17.0 },
    { label: "STO", R: "flat", d: 9.365809953361 },
    { label: "24", R: -811.55, d: 3.5, sd: 16.0, medium: 14 },
    { label: "25", R: -93.2, d: 18.1, sd: 16.0 },
    { label: "26", R: -26.0, d: 1.35, sd: 16.0, medium: 15 },
    { label: "27", R: -56.85, d: 0.15, sd: 16.0 },
    { label: "28", R: 104.3, d: 3.4, sd: 16.0, medium: 16 },
    { label: "29", R: -180.0, d: 41.793578, sd: 16.0 },
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom and focus movement ── */
    stations: [{ focalLengthMm: 82, label: "82mm" }, { focalLengthMm: 140 }, { focalLengthMm: 195, label: "195mm" }],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.8,
    description:
      "CONSTRAINED_RECONSTRUCTION: front focus by patent Group I / production first lens group. The modeled first vertex is fixed and D7 increases by 9.3584-9.3592 mm at 1.8 m; Groups II-IV and the rear image spacing otherwise retain their infinity-focus geometry. MFD is referenced to the modeled image plane.",
  },

  gaps: {
    "7": {
      label: "D7 — ZOOM + FRONT FOCUS",
      values: [
        [3.461, 12.819425797714],
        [28.879, 38.238221860473],
        [39.015, 48.374098871419],
      ],
    },
    "14": {
      label: "D14 — ZOOM",
      values: [
        [25.308, 25.308],
        [12.822, 12.822],
        [0.982, 0.982],
      ],
    },
    "19": {
      label: "D19 — ZOOM",
      values: [
        [13.988, 13.988],
        [1.055, 1.055],
        [2.759, 2.759],
      ],
    },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.88, fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32 },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "7" },
    { text: "II", fromSurface: "8", toSurface: "14" },
    { text: "III", fromSurface: "15", toSurface: "19" },
    { text: "IV", fromSurface: "20", toSurface: "29" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "17", toSurface: "19" },
  ],

  layout: { yScFill: 0.3 },

  /* ── Layout ── */
  // Surfaces 9 and 10 (L5 rear, L6 front) take 0.9676 of the 5.670 mm d9 air gap at 17.9 mm; 12 and 13 take 0.9480
  checks: { gapSagFrac: 0.97 },
} satisfies LensDataV2Input;

export default LENS_DATA;
