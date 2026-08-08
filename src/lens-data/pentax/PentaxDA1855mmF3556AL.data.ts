import type { LensDataInput } from "../../types/optics.js";

/**
 * smc PENTAX-DA 18-55mm F3.5-5.6 AL
 * Patent source: US 7,307,794 B2, Example 1 / Table 1 (Masakazu Saori, Pentax Corporation).
 *
 * Source/modeling notes:
 * - The prescription remains at patent scale. No uniform scaling is applied. The design endpoints are 19.10 and
 *   55.16 mm, while the marketed lens is 18-55 mm.
 * - Patent Table 1 publishes only the wide/tele numerical zoom endpoints. Patent Fig. 37 states that G1 follows a
 *   U-turn path, but the reversal point is not numerically recoverable; continuous two-point interpolation therefore
 *   represents endpoint kinematics only and must not be read as the published intermediate G1 trajectory.
 * - Focus status is CONSTRAINED_RECONSTRUCTION. The patent states that G1 focuses but publishes no close-focus row.
 *   The close values below were code-solved by translating G1 alone to the production 0.25 m MFD, normalized to the
 *   image plane, while G2-G4 and IMG remain fixed at each zoom endpoint.
 * - The fixed diaphragm FS is inserted 0.30 mm before source surface 9. The one and only STO is the patent's variable
 *   diaphragm S, inserted 0.36 mm before source surface 14. Neither diaphragm diameter is published. FS sd is inferred
 *   from representative off-axis bundles; STO sd is initialized from the wide-end paraxial f/3.5 solution and is
 *   dynamically sized from nominalFno by buildLens().
 * - The patent publishes no semi-diameters. All surface sd values are inferred from paraxial/real-ray envelopes, the
 *   patent optical section, and current edge-thickness, rim-slope, shared-band cross-gap, containment, and render-trim
 *   checks. They are modeling values, not source dimensions.
 * - Surface 6* is authored as 6A. The patent's asphere equation already uses the standard conic K convention; K = 0.
 * - The patent gives d-line nd/nu_d only. It does not publish per-element nC, nF, ng, or dPgF, so none are invented.
 *   Glass strings are class/code-level or Unmatched where vendor-specific identity is not defensible.
 */

const LENS_DATA = {
  key: "pentax-da-18-55mm-f35-56-al",
  name: "PENTAX SMC DA 18-55mm f/3.5-5.6 AL",
  maker: "Pentax",
  subtitle: "US 7,307,794 B2 Example 1 — source-scale prescription; production correlation inferred",
  specs: [
    "12 ELEMENTS / 9 GROUPS",
    "18-55mm f/3.5-5.6 (marketing)",
    "Design f = 19.10-55.16 mm",
    "2ω = 75.8°-28.6°",
    "1 ASPHERICAL SURFACE",
    "0.25 m MFD",
  ],
  focalLengthMarketing: [18, 55],
  focalLengthDesign: [19.101867217653, 55.144894547704],
  lensMounts: ["pentax-k"],
  imageFormat: "aps-c",
  patentNumber: "US 7,307,794 B2",
  patentAuthors: ["Masakazu Saori"],
  patentAssignees: ["Pentax Corporation"],
  patentYear: 2007,
  elementCount: 12,
  groupCount: 9,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.7,
      fl: -37.583545,
      glass: "603607 class (SK/BACD family; patent vendor unspecified)",
      role: "G1 front negative meniscus, convex toward the object.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Negative Meniscus",
      nd: 1.62299,
      vd: 58.2,
      fl: -60.031924,
      glass: "623582 class (OHARA S-BSM15 optical position; patent vendor unspecified)",
      role: "Second negative meniscus of G1, convex toward the object.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Neg. Meniscus (1x Asph)",
      nd: 1.52538,
      vd: 56.3,
      fl: -416.939523,
      glass: "Unmatched (nd=1.52538, vd=56.3; code position 525563)",
      role: "Weak negative G1 meniscus; rear surface 6A is the sole asphere.",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: 88.65643,
      glass: "847238 class (dense-flint family; patent vendor unspecified)",
      role: "Positive rear meniscus of G1, convex toward the object.",
    },
    {
      id: 5,
      name: "L21",
      label: "L21",
      type: "Biconvex Positive",
      nd: 1.51601,
      vd: 49.9,
      fl: 50.315205,
      glass: "Unmatched (nd=1.51601, vd=49.9; code position 516499)",
      role: "Front positive singlet of G2.",
    },
    {
      id: 6,
      name: "L22",
      label: "L22",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 25.808039,
      glass: "487702 class (OHARA S-FSL5 optical position; patent vendor unspecified)",
      role: "Positive member of the cemented G2 doublet.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L23",
      label: "L23",
      type: "Negative Meniscus",
      nd: 1.84333,
      vd: 24.2,
      fl: -48.034943,
      glass: "Unmatched (nd=1.84333, vd=24.2; code position 843242)",
      role: "Negative member of the cemented G2 doublet.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L31",
      label: "L31",
      type: "Positive Meniscus",
      nd: 1.847,
      vd: 24,
      fl: 30.552708,
      glass: "847240 class (nearest current family 847238; patent vendor unspecified)",
      role: "Positive meniscus of the cemented negative G3, convex toward the image.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L32",
      label: "L32",
      type: "Biconcave Negative",
      nd: 1.77249,
      vd: 49.4,
      fl: -14.678009,
      glass: "773496 class (lanthanum-flint family; patent vendor unspecified)",
      role: "Negative member of the cemented G3.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L41",
      label: "L41",
      type: "Biconvex Positive",
      nd: 1.64118,
      vd: 58.9,
      fl: 33.558291,
      glass: "Unmatched (nd=1.64118, vd=58.9; code position 641589)",
      role: "Front positive singlet of G4.",
    },
    {
      id: 11,
      name: "L42",
      label: "L42",
      type: "Biconvex Positive",
      nd: 1.51601,
      vd: 50.6,
      fl: 25.742972,
      glass: "Unmatched (nd=1.51601, vd=50.6; code position 516506)",
      role: "Positive member of the weakly positive cemented G4 doublet.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L43",
      label: "L43",
      type: "Negative Meniscus",
      nd: 1.75589,
      vd: 28.8,
      fl: -25.379033,
      glass: "756288 class (nearest current dense-flint family 755275/276; patent vendor unspecified)",
      role: "Final negative meniscus of G4, convex toward the image.",
      cemented: "D3",
    },
  ],

  surfaces: [
    { label: "1", R: 106.359, d: 1.3, nd: 1.60311, elemId: 1, sd: 16.5 },
    { label: "2", R: 18.599, d: 5.46, nd: 1, elemId: 0, sd: 16.5 },
    { label: "3", R: 46.313, d: 1.2, nd: 1.62299, elemId: 2, sd: 14.6 },
    { label: "4", R: 20.485, d: 0.55, nd: 1, elemId: 0, sd: 14.6 },
    { label: "5", R: 21.692, d: 2.2, nd: 1.52538, elemId: 3, sd: 14.4 },
    { label: "6A", R: 19.048, d: 2.6, nd: 1, elemId: 0, sd: 14.4 },
    { label: "7", R: 30.674, d: 2.75, nd: 1.84666, elemId: 4, sd: 14.4 },
    { label: "8", R: 49.739, d: 25.78, nd: 1, elemId: 0, sd: 14.4 },
    { label: "FS", R: 1e15, d: 0.3, nd: 1, elemId: 0, sd: 8.7 },
    { label: "9", R: 86.921, d: 3.01, nd: 1.51601, elemId: 5, sd: 8.8 },
    { label: "10", R: -36.585, d: 0.2, nd: 1, elemId: 0, sd: 8.8 },
    { label: "11", R: 19.624, d: 3.72, nd: 1.48749, elemId: 6, sd: 8.8 },
    { label: "12", R: -32.878, d: 1, nd: 1.84333, elemId: 7, sd: 8.8 },
    { label: "13", R: -176.955, d: 3, nd: 1, elemId: 0, sd: 8.8 },
    { label: "STO", R: 1e15, d: 0.36, nd: 1, elemId: 0, sd: 5.465711834747 },
    { label: "14", R: -42.791, d: 2.13, nd: 1.847, elemId: 8, sd: 6.2 },
    { label: "15", R: -16.494, d: 1, nd: 1.77249, elemId: 9, sd: 6.2 },
    { label: "16", R: 37.235, d: 15.4, nd: 1, elemId: 0, sd: 6.2 },
    { label: "17", R: 268.822, d: 3.03, nd: 1.64118, elemId: 10, sd: 10.4 },
    { label: "18", R: -23.286, d: 0.1, nd: 1, elemId: 0, sd: 10.4 },
    { label: "19", R: 59.669, d: 4.46, nd: 1.51601, elemId: 11, sd: 10 },
    { label: "20", R: -16.653, d: 1, nd: 1.75589, elemId: 12, sd: 10 },
    { label: "21", R: -129.497, d: 37.71, nd: 1, elemId: 0, sd: 10 },
  ],

  asph: {
    "6A": {
      K: 0,
      A4: -3.2236e-5,
      A6: -7.1389e-8,
      A8: 8.8889e-11,
      A10: -7.2416e-13,
      A12: 0,
      A14: 0,
    },
  },

  zoomPositions: [19.1, 55.16],
  zoomLabels: ["Wide", "Tele"],
  zoomStep: 0.004,
  var: {
    "8": [
      [25.78, 30.370938662249],
      [2.7, 7.232077277384],
    ],
    "13": [
      [3, 3],
      [15.9, 15.9],
    ],
    "16": [
      [15.4, 15.4],
      [2.5, 2.5],
    ],
    "21": [
      [37.71, 37.71],
      [58.13, 58.13],
    ],
  },
  varLabels: [
    ["8", "G1-FS"],
    ["13", "G2-STO"],
    ["16", "G3-G4"],
    ["21", "BF"],
  ],

  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "8" },
    { text: "G2 (+)", fromSurface: "9", toSurface: "13" },
    { text: "G3 (-)", fromSurface: "14", toSurface: "16" },
    { text: "G4 (+)", fromSurface: "17", toSurface: "21" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
    { text: "D3", fromSurface: "19", toSurface: "21" },
  ],

  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the patent focuses with G1 but publishes no close-focus row. At each zoom endpoint, " +
    "only G1 is translated objectward to a 0.25 m image-plane-referenced object distance; " +
    "G2-G4 and IMG remain fixed. " +
    "Solved G1 travel is 4.590939 mm at wide and 4.532077 mm at tele.",
  closeFocusM: 0.25,
  nominalFno: [3.5, 5.7],
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 6,
  yScFill: 0.25,
} satisfies LensDataInput;

export default LENS_DATA;
