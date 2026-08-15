import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — PENTAX HD PENTAX-DA645 28-45mm f/4.5 ED AW SR
 *
 * Data source: JP 2015-87681 A, Numerical Example 1 (RICOH IMAGING COMPANY, LTD.; Tatsuyuki Onozaki).
 * Production correlation: HD PENTAX-DA645 28-45mm F4.5 ED AW SR.
 * Numerical authority: patent Tables 1-4 and independent d-line calculations.
 *
 * Physical construction: 17 lenses / 12 air-separated groups. The sequential model contains 19 material entries
 * because the patent explicitly forms thin synthetic-resin hybrid-asphere layers on physical L11 rear and L44 front.
 * Those two layers are modeled as separate optical media while elementCount retains the physical 17-lens count.
 *
 * Zoom model: patent infinity states at 28.70, 35.00, and 43.87 mm. Surface 9 (d9), STO (source surface 17 / d17),
 * surface 24 (d24), and surface 32 (fB) are zoom-variable. Surface 9 and surface 14 also carry focus motion.
 * G1 moves slightly imageward, G2 and G4 move objectward, and G3 remains fixed to source rounding.
 *
 * Focus status: CONSTRAINED_RECONSTRUCTION. The patent states that positive subgroup G2a moves imageward but gives
 * no close-focus spacing table. A single-translation solve at the production 0.4 m MFD increases d9 and decreases
 * d14 by equal amounts, conserving the G2 envelope. Solved imageward travel is 4.336536 / 4.352598 / 4.497008 mm
 * at wide / middle / tele. The tele paraxial reproduction is 0.206291x, consistent with the marketed 0.21x.
 *
 * Aperture: the patent publishes FNO = 4.6 at all three states but no physical stop diameter. Under the current
 * LensVisualizer convention, nominalFno defines the paraxial entrance pupil and the physical stop opening. STO.sd
 * stores the wide-state paraxial stop radius, 9.1668180344 mm; the corresponding wide/middle/tele radii are
 * 9.166818 / 10.263916 / 11.950362 mm. nominalFno remains the design value 4.6, not marketed f/4.5.
 *
 * Semi-diameters: the patent does not publish clear apertures. Values below are modeling inferences validated with
 * exact meridional Snell traces of axial marginal rays, full-field chief rays, 0.6/0.8-field bundles, the 27.8 mm
 * image height, and the reconstructed 0.4 m close state, plus edge-thickness, actual rim-slope, shared-band
 * cross-gap, and selected-ray containment checks. They are not patent measurements.
 *
 * Aspheres: source surfaces 3 and 29 use the standard LensVisualizer conic convention and are labeled 3A and 29A.
 * No dimensional scaling is applied (s = 1.0); K and all asphere coefficients are transcribed without conversion.
 *
 * Glass/spectral data: prescription nd/vd values remain the patent values. Named OHARA entries are current catalog
 * models selected by cross-vendor coordinate matching; the patent does not establish the production glass
 * supplier. nC/nF/ng/dPgF values on those entries are current OHARA catalog properties. Some patent coordinate
 * pairs admit multiple current OHARA variants, so those line fields belong only to the explicitly selected modeling
 * proxy, not to an inferred production melt. The two synthetic-resin layers remain explicitly Unmatched and carry
 * no invented line-index or partial-dispersion data.
 *
 * Product SR is not modeled because the selected patent publishes no stabilization decenter prescription.
 * No sensor cover, filter, inactive dummy/flare-cutter plane, or mechanical part occurs in Example 1.
 *
 * Manufacturer metadata:
 * https://www.ricoh-imaging.co.jp/english/products/lens/645/wide/hdpentax-da645-28-45/
 * https://news.ricoh-imaging.co.jp/rim_info2/2014/20140805_018974.html
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "hd-pentax-da645-28-45mm-f45-ed-aw-sr",
  maker: "Pentax",
  name: "PENTAX HD DA645 28-45mm f/4.5 ED AW SR",
  subtitle: "JP 2015-87681 A Example 1 — strong HD PENTAX-DA645 28-45mm f/4.5 ED AW SR correlation",
  specs: [
    "17 PHYSICAL LENSES / 12 GROUPS",
    "28-45mm f/4.5 MARKETED",
    "28.699-43.874mm DESIGN",
    "f/4.6 MODELED DESIGN APERTURE",
    "2 HYBRID ASPHERICAL ELEMENTS / 2 ASPHERICAL SURFACES",
    "CONSTRAINED G2a INNER-FOCUS RECONSTRUCTION",
  ],

  focalLengthMarketing: [28, 45],
  focalLengthDesign: [28.699369, 43.87409],
  apertureMarketing: 4.5,
  apertureDesign: 4.6,
  lensMounts: ["pentax-645"],
  imageFormat: "44x33",
  patentNumber: "JP 2015-87681 A",
  patentAuthors: ["Tatsuyuki Onozaki"],
  patentAssignees: ["Ricoh Imaging Company, Ltd."],
  patentYear: 2015,
  elementCount: 17,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11g",
      label: "Lens 11 glass substrate",
      type: "Negative Meniscus Substrate, convex to object",
      nd: 1.7725,
      vd: 49.6,
      fl: -60.434324,
      glass: "S-LAH66N (OHARA catalog model; supplier not established)",
      nC: 1.767792,
      nF: 1.783383,
      ng: 1.791987,
      dPgF: -0.0094,
      cemented: "H1",
      role: "Glass body of physical L11; its rear face carries the thin synthetic-resin hybrid-asphere layer.",
    },
    {
      id: 2,
      name: "L11r",
      label: "Lens 11 hybrid resin layer",
      type: "Bonded Hybrid Asphere Resin Layer",
      nd: 1.52972,
      vd: 42.7,
      fl: -293.835184,
      glass: "Unmatched (synthetic resin hybrid-asphere layer, nd=1.52972, vd=42.7)",
      cemented: "H1",
      role: "Thin resin layer on physical L11; its outer surface 3A is the first patent asphere.",
    },
    {
      id: 3,
      name: "L12",
      label: "Lens 12",
      type: "Negative Meniscus, convex to object",
      nd: 1.788,
      vd: 47.4,
      fl: -89.291319,
      glass: "S-LAH64 (OHARA catalog model; supplier not established)",
      nC: 1.782998,
      nF: 1.799634,
      ng: 1.808882,
      dPgF: -0.0089,
      role: "Second negative meniscus in front negative group G1.",
    },
    {
      id: 4,
      name: "L13",
      label: "Lens 13",
      type: "Biconcave Negative",
      nd: 1.603,
      vd: 65.5,
      fl: -49.84729,
      glass: "S-PHM53 (OHARA catalog model; supplier not established)",
      nC: 1.600189,
      nF: 1.609404,
      ng: 1.614381,
      dPgF: 0.0045,
      role: "Biconcave negative member of G1.",
    },
    {
      id: 5,
      name: "L14",
      label: "Lens 14",
      type: "Biconvex Positive",
      nd: 1.56732,
      vd: 42.8,
      fl: 66.989232,
      glass: "S-TIL26 (OHARA catalog model; supplier not established)",
      nC: 1.563386,
      nF: 1.576636,
      ng: 1.584229,
      dPgF: 0.0009,
      role: "Positive rear member of G1; the patent conditions its g-F partial-dispersion behavior.",
    },
    {
      id: 6,
      name: "L21",
      label: "Lens 21",
      type: "Positive Meniscus, convex to object",
      nd: 1.56732,
      vd: 42.8,
      fl: 121.898744,
      glass: "S-TIL26 (OHARA catalog model; supplier not established)",
      nC: 1.563386,
      nF: 1.576636,
      ng: 1.584229,
      dPgF: 0.0009,
      role: "Front positive meniscus of focus subgroup G2a.",
    },
    {
      id: 7,
      name: "L22",
      label: "Lens 22",
      type: "Negative Meniscus, convex to object",
      nd: 1.8,
      vd: 29.9,
      fl: -45.069349,
      glass: "S-NBH55 (OHARA catalog model; supplier not established)",
      nC: 1.792237,
      nF: 1.819043,
      ng: 1.835172,
      dPgF: 0.0085,
      cemented: "D1",
      role: "Negative member of the cemented L22-L23 pair in translating focus subgroup G2a.",
    },
    {
      id: 8,
      name: "L23",
      label: "Lens 23",
      type: "Biconvex Positive",
      nd: 1.58144,
      vd: 40.7,
      fl: 41.40925,
      glass: "S-TIL25 (OHARA catalog model; supplier not established)",
      nC: 1.577216,
      nF: 1.591486,
      ng: 1.599726,
      dPgF: 0.0019,
      cemented: "D1",
      role: "Positive partner of L22; completes the cemented pair in translating focus subgroup G2a.",
    },
    {
      id: 9,
      name: "L24",
      label: "Lens 24",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 100.629155,
      glass: "S-FPL51 (OHARA catalog model; supplier not established)",
      nC: 1.495136,
      nF: 1.501231,
      ng: 1.504507,
      dPgF: 0.028,
      role: "Single positive G2b element; physical lens 8, one of the production lens's two maker-identified ED positions.",
    },
    {
      id: 10,
      name: "L31",
      label: "Lens 31",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      fl: -27.118155,
      glass: "S-LAH55VS (OHARA catalog model; supplier not established)",
      nC: 1.828988,
      nF: 1.848519,
      ng: 1.859551,
      dPgF: -0.0075,
      cemented: "D2",
      role: "Negative front member of the cemented L31-L32 pair in fixed group G3.",
    },
    {
      id: 11,
      name: "L32",
      label: "Lens 32",
      type: "Biconvex Positive",
      nd: 1.72047,
      vd: 34.7,
      fl: 31.962544,
      glass: "S-NBH 8 (OHARA catalog model; supplier not established)",
      nC: 1.714365,
      nF: 1.735123,
      ng: 1.747234,
      dPgF: -0.0019,
      cemented: "D2",
      role: "Positive partner of L31 in the front cemented pair of fixed group G3.",
    },
    {
      id: 12,
      name: "L33",
      label: "Lens 33",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      fl: -66.632129,
      glass: "S-LAH60 (OHARA catalog model; supplier not established)",
      nC: 1.827376,
      nF: 1.849819,
      ng: 1.862781,
      dPgF: -0.0037,
      role: "Second negative element of fixed group G3.",
    },
    {
      id: 13,
      name: "L34",
      label: "Lens 34",
      type: "Positive Meniscus, convex to object",
      nd: 1.80518,
      vd: 25.4,
      fl: 123.466869,
      glass: "S-TIH 6 (OHARA catalog model; supplier not established)",
      nC: 1.796106,
      nF: 1.827775,
      ng: 1.847286,
      dPgF: 0.0158,
      role: "Positive rear meniscus completing fixed negative group G3.",
    },
    {
      id: 14,
      name: "L41",
      label: "Lens 41",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.2,
      fl: 42.278507,
      glass: "S-LAH60 (OHARA catalog model; supplier not established)",
      nC: 1.827376,
      nF: 1.849819,
      ng: 1.862781,
      dPgF: -0.0037,
      cemented: "T1",
      role: "Positive front member of the cemented L41-L42-L43 triplet in G4a.",
    },
    {
      id: 15,
      name: "L42",
      label: "Lens 42",
      type: "Biconcave Negative",
      nd: 1.8044,
      vd: 39.6,
      fl: -27.164534,
      glass: "S-LAH63Q (OHARA catalog model; supplier not established)",
      nC: 1.798397,
      nF: 1.81872,
      ng: 1.83043,
      dPgF: -0.0012,
      cemented: "T1",
      role: "Negative middle member of the cemented G4a triplet.",
    },
    {
      id: 16,
      name: "L43",
      label: "Lens 43",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 33.327455,
      glass: "S-FPL51 (OHARA catalog model; supplier not established)",
      nC: 1.495136,
      nF: 1.501231,
      ng: 1.504507,
      dPgF: 0.028,
      cemented: "T1",
      role: "Positive rear member of G4a; physical lens 15, the second maker-identified ED position.",
    },
    {
      id: 17,
      name: "L44r",
      label: "Lens 44 hybrid resin layer",
      type: "Bonded Hybrid Asphere Resin Layer",
      nd: 1.52972,
      vd: 42.7,
      fl: 286485671.1,
      glass: "Unmatched (synthetic resin hybrid-asphere layer, nd=1.52972, vd=42.7)",
      cemented: "H2",
      role: "Near-zero-power thin resin layer on physical L44; its object-side surface 29A is the second patent asphere.",
    },
    {
      id: 18,
      name: "L44g",
      label: "Lens 44 glass substrate",
      type: "Biconcave Negative Substrate",
      nd: 1.834,
      vd: 37.2,
      fl: -40.750268,
      glass: "S-LAH60 (OHARA catalog model; supplier not established)",
      nC: 1.827376,
      nF: 1.849819,
      ng: 1.862781,
      dPgF: -0.0037,
      cemented: "H2/D3",
      role: "Glass substrate of physical L44; bonded to the resin layer on its front and cemented to L45 at its rear.",
    },
    {
      id: 19,
      name: "L45",
      label: "Lens 45",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 52.809504,
      glass: "S-FSL 5 (OHARA catalog model; supplier not established)",
      nC: 1.485344,
      nF: 1.492285,
      ng: 1.495964,
      dPgF: 0.0022,
      cemented: "D3",
      role: "Positive rear member of cemented G4b, following the hybrid L44 negative element.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 67.727, d: 2.45, nd: 1.7725, elemId: 1, sd: 25.0 },
    { label: "2", R: 27.2, d: 0.22, nd: 1.52972, elemId: 2, sd: 20.5 },
    { label: "3A", R: 23.089, d: 7.83, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "4", R: 51.924, d: 1.65, nd: 1.788, elemId: 3, sd: 19.0 },
    { label: "5", R: 29.458, d: 9.41, nd: 1.0, elemId: 0, sd: 18.0 },
    { label: "6", R: -81.49, d: 2.2, nd: 1.603, elemId: 4, sd: 16.5 },
    { label: "7", R: 48.108, d: 5.89, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "8", R: 53.263, d: 8.83, nd: 1.56732, elemId: 5, sd: 16.0 },
    { label: "9", R: -124.7, d: 23.915, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "10", R: 53.667, d: 3.82, nd: 1.56732, elemId: 6, sd: 13.5 },
    { label: "11", R: 233.446, d: 2.18, nd: 1.0, elemId: 0, sd: 13.2 },
    { label: "12", R: 136.379, d: 1.5, nd: 1.8, elemId: 7, sd: 13.2 },
    { label: "13", R: 28.377, d: 6.77, nd: 1.58144, elemId: 8, sd: 13.2 },
    { label: "14", R: -144.954, d: 6.288, nd: 1.0, elemId: 0, sd: 13.2 },
    { label: "15", R: 80.815, d: 3.55, nd: 1.497, elemId: 9, sd: 13.3 },
    { label: "16", R: -129.303, d: 1.68, nd: 1.0, elemId: 0, sd: 13.2 },
    { label: "STO", R: 1e15, d: 4.86, nd: 1.0, elemId: 0, sd: 9.1668180344 },
    { label: "18", R: -105.215, d: 1.5, nd: 1.83481, elemId: 10, sd: 12.0 },
    { label: "19", R: 29.032, d: 4.52, nd: 1.72047, elemId: 11, sd: 12.5 },
    { label: "20", R: -104.092, d: 1.27, nd: 1.0, elemId: 0, sd: 12.7 },
    { label: "21", R: -185.193, d: 1.5, nd: 1.834, elemId: 12, sd: 13.0 },
    { label: "22", R: 79.688, d: 0.83, nd: 1.0, elemId: 0, sd: 13.2 },
    { label: "23", R: 65.796, d: 2.17, nd: 1.80518, elemId: 13, sd: 13.6 },
    { label: "24", R: 191.711, d: 22.782, nd: 1.0, elemId: 0, sd: 13.6 },
    { label: "25", R: 35.493, d: 5.48, nd: 1.834, elemId: 14, sd: 18.0 },
    { label: "26", R: -5000.0, d: 1.5, nd: 1.8044, elemId: 15, sd: 18.0 },
    { label: "27", R: 21.95, d: 11.71, nd: 1.497, elemId: 16, sd: 17.2 },
    { label: "28", R: -55.545, d: 0.86, nd: 1.0, elemId: 0, sd: 17.2 },
    { label: "29A", R: -3241.954, d: 0.2, nd: 1.52972, elemId: 17, sd: 17.2 },
    { label: "30", R: -3241.954, d: 1.5, nd: 1.834, elemId: 18, sd: 17.2 },
    { label: "31", R: 34.353, d: 7.59, nd: 1.48749, elemId: 19, sd: 17.2 },
    { label: "32", R: -95.291, d: 65.91, nd: 1.0, elemId: 0, sd: 17.5 },
  ],

  /* Patent paragraph 0048 already uses the standard conic constant K. */
  asph: {
    "3A": {
      K: -1.0,
      A4: 2.782e-6,
      A6: -1.128e-10,
      A8: 2.056e-13,
      A10: -1.99e-15,
      A12: 0.0,
      A14: 0.0,
    },
    "29A": {
      K: 0.0,
      A4: -3.454e-6,
      A6: 9.235e-10,
      A8: -1.297e-12,
      A10: 3.435e-14,
      A12: 0.0,
      A14: 0.0,
    },
  },

  /* ── Published zoom plus constrained focus spacings ── */
  zoomPositions: [28.7, 35.0, 43.87],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  var: {
    "9": [
      [23.915, 28.2515359946],
      [14.684, 19.0365981243],
      [7.308, 11.8050079466],
    ],
    "14": [
      [6.288, 1.9514640054],
      [6.288, 1.9354018757],
      [6.288, 1.7909920534],
    ],
    STO: [
      [4.86, 4.86],
      [9.856, 9.856],
      [17.084, 17.084],
    ],
    "24": [
      [22.782, 22.782],
      [15.198, 15.198],
      [5.82, 5.82],
    ],
    "32": [
      [65.91, 65.91],
      [73.5, 73.5],
      [82.88, 82.88],
    ],
  },
  varLabels: [
    ["9", "d9 / G1-G2a / FOCUS"],
    ["14", "d14 / G2a-G2b / FOCUS"],
    ["STO", "d17 / STO-G3"],
    ["24", "d24 / G3-G4"],
    ["32", "fB / IMAGE SPACING"],
  ],

  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "9" },
    { text: "G2 (+)", fromSurface: "10", toSurface: "16" },
    { text: "G3 (-)", fromSurface: "18", toSurface: "24" },
    { text: "G4 (+)", fromSurface: "25", toSurface: "32" },
  ],
  doublets: [
    { text: "H1", fromSurface: "1", toSurface: "3A" },
    { text: "D1", fromSurface: "12", toSurface: "14" },
    { text: "D2", fromSurface: "18", toSurface: "20" },
    { text: "T1", fromSurface: "25", toSurface: "28" },
    { text: "H2/D3", fromSurface: "29A", toSurface: "32" },
  ],

  closeFocusM: 0.4,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION. Patent paragraph 0052 identifies positive G2a (L21-L23) as the focus group and " +
    "states that it moves imageward, but publishes no close-focus spacing row. A code solve at the production 0.4 m " +
    "MFD translates G2a imageward by 4.336536 / 4.352598 / 4.497008 mm at wide / middle / tele; d9 increases and d14 " +
    "decreases equally, conserving the G2 envelope. The tele paraxial magnification is 0.206291x, consistent with the " +
    "rounded marketed 0.21x. These close states are reconstructed, not patent-published.",

  nominalFno: 4.6,
  fstopSeries: [4.6, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  apertureBlades: 9,
  apertureBladeRoundedness: 1,

  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
