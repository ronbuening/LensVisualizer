import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 70-300mm f/4-5.6 IS USM                           ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 2007-003600 A, Numerical Example 1.                          ║
 * ║ 15 elements / 10 physical air-separated groups; all spherical.          ║
 * ║ Production correlation: Canon EF70-300mm f/4-5.6 IS USM.                ║
 * ║                                                                            ║
 * ║ Scale: 1:1. Patent flat radii r15, r16, and r23 are normalized from      ║
 * ║ R=0.000 to the repository flat sentinel R=1e15.                          ║
 * ║                                                                            ║
 * ║ Zoom: d5, d10, d16 (STO), d18, and d23 are patent-published infinity    ║
 * ║ spacings at 72.40, 134.99, and 290.00 mm. Patent r26 is explicitly      ║
 * ║ followed by a variable d26, but its spacing-table row is omitted; d26    ║
 * ║ below is a paraxial infinity-focus reconstruction of that missing row.    ║
 * ║                                                                            ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. Example 1 publishes no finite  ║
 * ║ focus states or mechanism-constrained focus table. Every focus pair is   ║
 * ║ therefore identical; the production 1.5 m MFD is metadata only.          ║
 * ║                                                                            ║
 * ║ Stop model: the patent publishes the stop location but not its diameter.   ║
 * ║ The stop radius is derived from the design f-number (the wide station's    ║
 * ║ nominalFNumber) and held at every zoom station. The station f-numbers are  ║
 * ║ exact traced values of one constant stop fitted by spherical Snell tracing ║
 * ║ and least squares to the patent's rounded FNo 4.1 and 5.9; they control    ║
 * ║ LensVisualizer stop/pupil geometry.                                        ║
 * ║                                                                            ║
 * ║ Semi-diameters: not published. They are inferred from exact full-pupil   ║
 * ║ axial rays, 0.6-field off-axis bundles, the patent Fig. 1 silhouette,    ║
 * ║ the production 58 mm filter constraint, and current edge/rim/gap rules.  ║
 * ║                                                                            ║
 * ║ Glass: the patent names no vendor. Glass strings are coordinate-derived  ║
 * ║ six-digit classes, not vendor identities. The patent does not publish    ║
 * ║ project-compatible nC/nF/ng/dPgF values; none are invented here.          ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-70-300mm-f4-56-is-usm",
  maker: "Canon",
  name: "CANON EF 70-300mm f/4-5.6 IS USM",
  subtitle: "JP 2007-003600 A — Numerical Example 1",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "15 elements / 10 groups",
      "Patent design: 72.4-290.0 mm",
      "Production: 70-300mm f/4-5.6",
      "All spherical",
      "L2 image-stabilization unit",
    ],
    elementCount: 15,
    groupCount: 10,
    focalLengthMm: { marketing: [70, 300], design: [72.398908, 289.976889] },
    fNumber: { marketing: 4, design: 4.1 },
  },

  source: {
    patentNumber: "JP 2007-003600 A",
    patentYear: 2007,
    authors: ["Takashi Shirasuna"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 35.3,
      focalLengthMm: -119.349664,
      glass: "750353 — high-index flint class (vendor unresolved)",
      role: "Negative member of the front L1 cemented pair; patent condition (1) selects νd < 40 for this member.",
      diagramLabel: "E1",
      cemented: "D1",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 124.554169,
      glass: "487702 — low-dispersion crown class (vendor unresolved)",
      role: "Positive high-Abbe partner in the nearly afocal front cemented pair.",
      diagramLabel: "E2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      focalLengthMm: 124.536377,
      glass: "516641 — borosilicate crown class (vendor unresolved)",
      role: "Positive singlet completing the positive L1 zoom unit.",
      diagramLabel: "E3",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: -61.632442,
      glass: "713539 — lanthanum crown class (vendor unresolved)",
      role: "Front negative singlet of L2, the fixed negative zoom and stabilization unit.",
      diagramLabel: "E4",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.60311,
      vd: 60.6,
      focalLengthMm: -40.685066,
      glass: "603606 — dense crown class (vendor unresolved)",
      role: "Strong negative member of the L2 cemented pair.",
      diagramLabel: "E5",
      cemented: "D2",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 62.076583,
      glass: "847239 — high-index flint class (vendor unresolved)",
      role: "High-index positive member that partially offsets E5 while retaining net negative L2 power.",
      diagramLabel: "E6",
      cemented: "D2",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 67.445221,
      glass: "497815 — low-dispersion fluorophosphate / ED class (vendor unresolved)",
      // Canon documents one UD element; placement follows the unique 81.5-Abbe position.
      // This is a production-correlated tag, not patent-published partial dispersion.
      apd: "inferred",
      role: "Low-dispersion positive singlet at the front of positive L3.",
      diagramLabel: "E7",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 61.907161,
      glass: "487702 — low-dispersion crown class (vendor unresolved)",
      role: "Positive crown member of the rear L3 cemented pair.",
      diagramLabel: "E8",
      cemented: "D3",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Plano-Concave Negative",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -71.436451,
      glass: "834372 — lanthanum flint class (vendor unresolved)",
      role: "Negative high-index partner ending L3 with a planar rear surface ahead of the stop.",
      diagramLabel: "E9",
      cemented: "D3",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      focalLengthMm: -199.236163,
      glass: "516641 — borosilicate crown class (vendor unresolved)",
      role: "Weak negative singlet forming fixed L4 immediately behind the stop.",
      diagramLabel: "E10",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.6,
      focalLengthMm: 52.451196,
      glass: "603606 — dense crown class (vendor unresolved)",
      role: "Strong positive front member of the L5 cemented pair.",
      diagramLabel: "E11",
      cemented: "D4",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -102.209888,
      glass: "805254 — dense flint class (vendor unresolved)",
      role: "High-index negative partner in L5, forming a net positive cemented pair with E11.",
      diagramLabel: "E12",
      cemented: "D4",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Plano-Convex Positive",
      nd: 1.58913,
      vd: 61.1,
      focalLengthMm: 107.251371,
      glass: "S-BAL35 — catalog-equivalent barium crown for patent 589611 (production supplier unspecified)",
      role: "Positive singlet completing the positive L5 zoom unit.",
      diagramLabel: "E13",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -28.88727,
      glass: "773496 — high-index lanthanum class (vendor unresolved)",
      role: "Strong negative front member of the final L6 cemented pair.",
      diagramLabel: "E14",
      cemented: "D5",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 69.668843,
      glass: "805254 — dense flint class (vendor unresolved)",
      role: "Positive high-index partner; the D5 pair remains net negative and forms L6.",
      diagramLabel: "E15",
      cemented: "D5",
    },
  ],

  // Live Fig. 1 review: shared L3 rear-doublet and L5 rims avoid artificial taper.
  // Fig. 1 (p. 16), inspected at 600 dpi: L6 optical rims are about 13.5 mm.
  // Use a common 13.4 mm clear rim; all source states retain edge and gap clearance.
  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 275.795, d: 2.6, sd: 28.5, medium: 1 },
    { label: "2", R: 67.272, d: 6.85, sd: 27.7, medium: 2 },
    { label: "3", R: -602.521, d: 0.2, sd: 27.7 },
    { label: "4", R: 84.363, d: 6.15, sd: 27.3, medium: 3 },
    { label: "5", R: -263.696, sd: 27.3 },
    { label: "6", R: -137.771, d: 1.4, sd: 13.2, medium: 4 },
    { label: "7", R: 64.798, d: 3.64, sd: 12.6 },
    { label: "8", R: -41.27, d: 1.1, sd: 12.6, medium: 5 },
    { label: "9", R: 61.128, d: 2.9, sd: 13.4, medium: 6 },
    { label: "10", R: -366.719, sd: 13.5 },
    { label: "11", R: 60.128, d: 4.6, sd: 14.1, medium: 7 },
    { label: "12", R: -73.825, d: 0.2, sd: 14.1 },
    { label: "13", R: 59.578, d: 4.7, sd: 14.1, medium: 8 },
    { label: "14", R: -59.578, d: 1.5, sd: 14.1, medium: 9 },
    { label: "15", R: "flat", d: 4.4, sd: 14.1 },
    { label: "STO", R: "flat" },
    { label: "17", R: -55.58, d: 2.8, sd: 12.6, medium: 10 },
    { label: "18", R: -122.975, sd: 12.6 },
    { label: "19", R: 155.0, d: 4.4, sd: 13.4, medium: 11 },
    { label: "20", R: -39.321, d: 1.8, sd: 13.4, medium: 12 },
    { label: "21", R: -76.835, d: 0.2, sd: 13.4 },
    { label: "22", R: 63.185, d: 2.8, sd: 13.4, medium: 13 },
    { label: "23", R: "flat", sd: 13.4 },
    { label: "24", R: -47.006, d: 1.5, sd: 13.4, medium: 14 },
    { label: "25", R: 43.075, d: 2.9, sd: 13.4, medium: 15 },
    { label: "26", R: 180.0, sd: 13.4 },
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom and focus ── */
    stations: [
      { focalLengthMm: 72.4, nominalFNumber: 4.0333081, label: "72.4 mm" },
      { focalLengthMm: 134.99, nominalFNumber: 4.74696994 },
      { focalLengthMm: 290.0, nominalFNumber: 5.94591516, label: "290 mm" },
    ],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  focus: {
    closeFocusM: 1.5,
    description:
      "Focus travel is unavailable: the patent publishes infinity-focus zoom states only. The 1.5 m limit is a production specification; no internal focus motion is modeled.",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [5.14, 5.14],
        [35.87, 35.87],
        [59.54, 59.54],
      ],
    },
    "10": {
      label: "D10",
      values: [
        [30.37, 30.37],
        [20.07, 20.07],
        [2.86, 2.86],
      ],
    },
    STO: {
      label: "D16",
      values: [
        [4.31, 4.31],
        [14.62, 14.62],
        [31.82, 31.82],
      ],
    },
    "18": {
      label: "D18",
      values: [
        [23.91, 23.91],
        [17.65, 17.65],
        [16.93, 16.93],
      ],
    },
    "23": {
      label: "D23",
      values: [
        [19.91, 19.91],
        [14.64, 14.64],
        [3.38, 3.38],
      ],
    },
    "26": {
      label: "BF (reconstructed)",
      values: [
        [42.530264, 42.530264],
        [54.062915, 54.062915],
        [66.02394, 66.02394],
      ],
    },
  },

  aperture: { fStops: [4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

  /* ── Functional patent units and cemented pairs ── */
  groups: [
    { text: "L1", fromSurface: "1", toSurface: "5" },
    { text: "L2 / IS", fromSurface: "6", toSurface: "10" },
    { text: "L3", fromSurface: "11", toSurface: "15" },
    { text: "L4", fromSurface: "17", toSurface: "18" },
    { text: "L5", fromSurface: "19", toSurface: "23" },
    { text: "L6", fromSurface: "24", toSurface: "26" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
    { text: "D5", fromSurface: "24", toSurface: "26" },
  ],

  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
