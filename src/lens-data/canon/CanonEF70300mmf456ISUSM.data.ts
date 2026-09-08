import type { LensDataInput } from "../../types/optics.js";

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
 * ║ Stop model: the patent publishes the stop location but not its diameter. ║
 * ║ A constant physical stop semi-diameter of 12.4665706 mm was solved by    ║
 * ║ exact spherical Snell tracing and least-squares agreement to the rounded ║
 * ║ patent endpoint FNo values 4.1 and 5.9. The exact modeled nominalFno     ║
 * ║ values below control LensVisualizer stop/pupil geometry.                  ║
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
  key: "canon-ef-70-300mm-f4-56-is-usm",
  maker: "Canon",
  name: "CANON EF 70-300mm f/4-5.6 IS USM",
  subtitle: "JP 2007-003600 A — Numerical Example 1",
  specs: [
    "15 elements / 10 groups",
    "Patent design: 72.4-290.0 mm",
    "Production: 70-300mm f/4-5.6",
    "All spherical",
    "L2 image-stabilization unit",
  ],

  focalLengthMarketing: [70, 300],
  focalLengthDesign: [72.398908, 289.976889],
  apertureMarketing: 4,
  apertureDesign: 4.1,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2007-003600 A",
  patentAuthors: ["Takashi Shirasuna"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2007,
  elementCount: 15,
  groupCount: 10,

  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — Numerical Example 1 publishes infinity-focus zoom spacings only. The production 1.5 m closest-focus distance is retained as metadata, but all authored focus pairs are identical so no internal finite-focus motion is invented.",

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      diagramLabel: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 35.3,
      fl: -119.349664,
      glass: "750353 — high-index flint class (vendor unresolved)",
      cemented: "D1",
      role: "Negative member of the front L1 cemented pair; patent condition (1) selects νd < 40 for this member.",
    },
    {
      id: 2,
      name: "E2",
      diagramLabel: "E2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 124.554169,
      glass: "487702 — low-dispersion crown class (vendor unresolved)",
      cemented: "D1",
      role: "Positive high-Abbe partner in the nearly afocal front cemented pair.",
    },
    {
      id: 3,
      name: "E3",
      diagramLabel: "E3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      fl: 124.536377,
      glass: "516641 — borosilicate crown class (vendor unresolved)",
      role: "Positive singlet completing the positive L1 zoom unit.",
    },
    {
      id: 4,
      name: "E4",
      diagramLabel: "E4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 53.9,
      fl: -61.632442,
      glass: "713539 — lanthanum crown class (vendor unresolved)",
      role: "Front negative singlet of L2, the fixed negative zoom and stabilization unit.",
    },
    {
      id: 5,
      name: "E5",
      diagramLabel: "E5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.60311,
      vd: 60.6,
      fl: -40.685066,
      glass: "603606 — dense crown class (vendor unresolved)",
      cemented: "D2",
      role: "Strong negative member of the L2 cemented pair.",
    },
    {
      id: 6,
      name: "E6",
      diagramLabel: "E6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.9,
      fl: 62.076583,
      glass: "847239 — high-index flint class (vendor unresolved)",
      cemented: "D2",
      role: "High-index positive member that partially offsets E5 while retaining net negative L2 power.",
    },
    {
      id: 7,
      name: "E7",
      diagramLabel: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 67.445221,
      glass: "497815 — low-dispersion fluorophosphate / ED class (vendor unresolved)",
      // Canon documents one UD element; placement follows the unique 81.5-Abbe position.
      // This is a production-correlated tag, not patent-published partial dispersion.
      apd: "inferred",
      role: "Low-dispersion positive singlet at the front of positive L3.",
    },
    {
      id: 8,
      name: "E8",
      diagramLabel: "E8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 61.907161,
      glass: "487702 — low-dispersion crown class (vendor unresolved)",
      cemented: "D3",
      role: "Positive crown member of the rear L3 cemented pair.",
    },
    {
      id: 9,
      name: "E9",
      diagramLabel: "E9",
      label: "Element 9",
      type: "Plano-Concave Negative",
      nd: 1.834,
      vd: 37.2,
      fl: -71.436451,
      glass: "834372 — lanthanum flint class (vendor unresolved)",
      cemented: "D3",
      role: "Negative high-index partner ending L3 with a planar rear surface ahead of the stop.",
    },
    {
      id: 10,
      name: "E10",
      diagramLabel: "E10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      fl: -199.236163,
      glass: "516641 — borosilicate crown class (vendor unresolved)",
      role: "Weak negative singlet forming fixed L4 immediately behind the stop.",
    },
    {
      id: 11,
      name: "E11",
      diagramLabel: "E11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.6,
      fl: 52.451196,
      glass: "603606 — dense crown class (vendor unresolved)",
      cemented: "D4",
      role: "Strong positive front member of the L5 cemented pair.",
    },
    {
      id: 12,
      name: "E12",
      diagramLabel: "E12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: -102.209888,
      glass: "805254 — dense flint class (vendor unresolved)",
      cemented: "D4",
      role: "High-index negative partner in L5, forming a net positive cemented pair with E11.",
    },
    {
      id: 13,
      name: "E13",
      diagramLabel: "E13",
      label: "Element 13",
      type: "Plano-Convex Positive",
      nd: 1.58913,
      vd: 61.1,
      fl: 107.251371,
      glass: "S-BAL35 — catalog-equivalent barium crown for patent 589611 (production supplier unspecified)",
      role: "Positive singlet completing the positive L5 zoom unit.",
    },
    {
      id: 14,
      name: "E14",
      diagramLabel: "E14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      fl: -28.88727,
      glass: "773496 — high-index lanthanum class (vendor unresolved)",
      cemented: "D5",
      role: "Strong negative front member of the final L6 cemented pair.",
    },
    {
      id: 15,
      name: "E15",
      diagramLabel: "E15",
      label: "Element 15",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: 69.668843,
      glass: "805254 — dense flint class (vendor unresolved)",
      cemented: "D5",
      role: "Positive high-index partner; the D5 pair remains net negative and forms L6.",
    },
  ],

  // Fig. 1 (p. 16), inspected at 600 dpi: L6 optical rims are about 13.5 mm.
  // Use a common 13.4 mm clear rim; all source states retain edge and gap clearance.
  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 275.795, d: 2.6, nd: 1.7495, elemId: 1, sd: 28.5 },
    { label: "2", R: 67.272, d: 6.85, nd: 1.48749, elemId: 2, sd: 27.7 },
    { label: "3", R: -602.521, d: 0.2, nd: 1.0, elemId: 0, sd: 27.7 },
    { label: "4", R: 84.363, d: 6.15, nd: 1.51633, elemId: 3, sd: 27.3 },
    { label: "5", R: -263.696, d: 5.14, nd: 1.0, elemId: 0, sd: 27.3 },
    { label: "6", R: -137.771, d: 1.4, nd: 1.713, elemId: 4, sd: 13.2 },
    { label: "7", R: 64.798, d: 3.64, nd: 1.0, elemId: 0, sd: 12.6 },
    { label: "8", R: -41.27, d: 1.1, nd: 1.60311, elemId: 5, sd: 12.6 },
    { label: "9", R: 61.128, d: 2.9, nd: 1.84666, elemId: 6, sd: 13.4 },
    { label: "10", R: -366.719, d: 30.37, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "11", R: 60.128, d: 4.6, nd: 1.497, elemId: 7, sd: 14.1 },
    { label: "12", R: -73.825, d: 0.2, nd: 1.0, elemId: 0, sd: 14.1 },
    { label: "13", R: 59.578, d: 4.7, nd: 1.48749, elemId: 8, sd: 13.8 },
    { label: "14", R: -59.578, d: 1.5, nd: 1.834, elemId: 9, sd: 13.6 },
    { label: "15", R: 1e15, d: 4.4, nd: 1.0, elemId: 0, sd: 13.4 },
    { label: "STO", R: 1e15, d: 4.31, nd: 1.0, elemId: 0, sd: 12.4665706 },
    { label: "17", R: -55.58, d: 2.8, nd: 1.51633, elemId: 10, sd: 12.6 },
    { label: "18", R: -122.975, d: 23.91, nd: 1.0, elemId: 0, sd: 12.6 },
    { label: "19", R: 155.0, d: 4.4, nd: 1.60311, elemId: 11, sd: 12.8 },
    { label: "20", R: -39.321, d: 1.8, nd: 1.80518, elemId: 12, sd: 12.8 },
    { label: "21", R: -76.835, d: 0.2, nd: 1.0, elemId: 0, sd: 12.9 },
    { label: "22", R: 63.185, d: 2.8, nd: 1.58913, elemId: 13, sd: 12.9 },
    { label: "23", R: 1e15, d: 19.91, nd: 1.0, elemId: 0, sd: 12.7 },
    { label: "24", R: -47.006, d: 1.5, nd: 1.7725, elemId: 14, sd: 13.4 },
    { label: "25", R: 43.075, d: 2.9, nd: 1.80518, elemId: 15, sd: 13.4 },
    { label: "26", R: 180.0, d: 42.530264, nd: 1.0, elemId: 0, sd: 13.4 },
  ],

  asph: {},

  /* ── Zoom and focus ── */
  zoomPositions: [72.4, 134.99, 290.0],
  zoomStep: 0.004,
  zoomLabels: ["72.4 mm", "290 mm"],
  nominalFno: [4.0333081, 4.74696994, 5.94591516],
  closeFocusM: 1.5,
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  apertureBlades: 8,

  var: {
    "5": [
      [5.14, 5.14],
      [35.87, 35.87],
      [59.54, 59.54],
    ],
    "10": [
      [30.37, 30.37],
      [20.07, 20.07],
      [2.86, 2.86],
    ],
    STO: [
      [4.31, 4.31],
      [14.62, 14.62],
      [31.82, 31.82],
    ],
    "18": [
      [23.91, 23.91],
      [17.65, 17.65],
      [16.93, 16.93],
    ],
    "23": [
      [19.91, 19.91],
      [14.64, 14.64],
      [3.38, 3.38],
    ],
    "26": [
      [42.530264, 42.530264],
      [54.062915, 54.062915],
      [66.02394, 66.02394],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["10", "D10"],
    ["STO", "D16"],
    ["18", "D18"],
    ["23", "D23"],
    ["26", "BF (reconstructed)"],
  ],

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

  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
