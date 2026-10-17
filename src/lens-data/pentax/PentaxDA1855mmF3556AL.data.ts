import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 *   from representative off-axis bundles; the STO radius is derived from the design f-number at each zoom station,
 *   f/3.5 at wide.
 * - The patent publishes no semi-diameters. All surface sd values are inferred from paraxial/real-ray envelopes, the
 *   patent optical section, and current edge-thickness, rim-slope, shared-band cross-gap, containment, and render-trim
 *   checks. They are modeling values, not source dimensions.
 * - Surface 6* is authored as 6A. The patent's asphere equation already uses the standard conic K convention; K = 0.
 * - The patent gives d-line nd/nu_d only. It does not publish per-element nC, nF, ng, or dPgF, so none are invented.
 *   Glass strings are class/code-level or Unmatched where vendor-specific identity is not defensible.
 */

const LENS_DATA = {
  schema: 2,
  key: "pentax-da-18-55mm-f35-56-al",
  maker: "Pentax",
  name: "PENTAX SMC DA 18-55mm f/3.5-5.6 AL",
  subtitle: "US 7,307,794 B2 Example 1 — source-scale prescription; production correlation inferred",

  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "aps-c",
    specs: [
      "12 ELEMENTS / 9 GROUPS",
      "18-55mm f/3.5-5.6 (marketing)",
      "Design f = 19.10-55.16 mm",
      "2ω = 75.8°-28.6°",
      "1 ASPHERICAL SURFACE",
      "0.25 m MFD",
    ],
    elementCount: 12,
    groupCount: 9,
    focalLengthMm: { marketing: [18, 55], design: [19.101867217653, 55.144894547704] },
  },

  source: {
    patentNumber: "US 7,307,794 B2",
    patentYear: 2007,
    authors: ["Masakazu Saori"],
    assignees: ["Pentax Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.7,
      focalLengthMm: -37.583545,
      glass: "603607 class (SK/BACD family; patent vendor unspecified)",
      role: "G1 front negative meniscus, convex toward the object.",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Negative Meniscus",
      nd: 1.62299,
      vd: 58.2,
      focalLengthMm: -60.031924,
      glass: "623582 class (OHARA S-BSM15 optical position; patent vendor unspecified)",
      role: "Second negative meniscus of G1, convex toward the object.",
      diagramLabel: "L12",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Neg. Meniscus (1x Asph)",
      nd: 1.52538,
      vd: 56.3,
      focalLengthMm: -416.939523,
      glass: "Unmatched (nd=1.52538, vd=56.3; code position 525563)",
      role: "Weak negative G1 meniscus; rear surface 6A is the sole asphere.",
      diagramLabel: "L13",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 88.65643,
      glass: "847238 class (dense-flint family; patent vendor unspecified)",
      role: "Positive rear meniscus of G1, convex toward the object.",
      diagramLabel: "L14",
    },
    {
      id: 5,
      name: "L21",
      label: "L21",
      type: "Biconvex Positive",
      nd: 1.51601,
      vd: 49.9,
      focalLengthMm: 50.315205,
      glass: "Unmatched (nd=1.51601, vd=49.9; code position 516499)",
      role: "Front positive singlet of G2.",
      diagramLabel: "L21",
    },
    {
      id: 6,
      name: "L22",
      label: "L22",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 25.808039,
      glass: "487702 class (OHARA S-FSL5 optical position; patent vendor unspecified)",
      role: "Positive member of the cemented G2 doublet.",
      diagramLabel: "L22",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L23",
      label: "L23",
      type: "Negative Meniscus",
      nd: 1.84333,
      vd: 24.2,
      focalLengthMm: -48.034943,
      glass: "Unmatched (nd=1.84333, vd=24.2; code position 843242)",
      role: "Negative member of the cemented G2 doublet.",
      diagramLabel: "L23",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L31",
      label: "L31",
      type: "Positive Meniscus",
      nd: 1.847,
      vd: 24,
      focalLengthMm: 30.552708,
      glass: "847240 class (nearest current family 847238; patent vendor unspecified)",
      role: "Positive meniscus of the cemented negative G3, convex toward the image.",
      diagramLabel: "L31",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L32",
      label: "L32",
      type: "Biconcave Negative",
      nd: 1.77249,
      vd: 49.4,
      focalLengthMm: -14.678009,
      glass: "773496 class (lanthanum-flint family; patent vendor unspecified)",
      role: "Negative member of the cemented G3.",
      diagramLabel: "L32",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L41",
      label: "L41",
      type: "Biconvex Positive",
      nd: 1.64118,
      vd: 58.9,
      focalLengthMm: 33.558291,
      glass: "Unmatched (nd=1.64118, vd=58.9; code position 641589)",
      role: "Front positive singlet of G4.",
      diagramLabel: "L41",
    },
    {
      id: 11,
      name: "L42",
      label: "L42",
      type: "Biconvex Positive",
      nd: 1.51601,
      vd: 50.6,
      focalLengthMm: 25.742972,
      glass: "Unmatched (nd=1.51601, vd=50.6; code position 516506)",
      role: "Positive member of the weakly positive cemented G4 doublet.",
      diagramLabel: "L42",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L43",
      label: "L43",
      type: "Negative Meniscus",
      nd: 1.75589,
      vd: 28.8,
      focalLengthMm: -25.379033,
      glass: "756288 class (nearest current dense-flint family 755275/276; patent vendor unspecified)",
      role: "Final negative meniscus of G4, convex toward the image.",
      diagramLabel: "L43",
      cemented: "D3",
    },
  ],

  surfaces: [
    { label: "1", R: 106.359, d: 1.3, sd: 16.5, medium: 1 },
    { label: "2", R: 18.599, d: 5.46, sd: 16.5 },
    { label: "3", R: 46.313, d: 1.2, sd: 14.6, medium: 2 },
    { label: "4", R: 20.485, d: 0.55, sd: 14.6 },
    { label: "5", R: 21.692, d: 2.2, sd: 14.4, medium: 3 },
    {
      label: "6A",
      R: 19.048,
      d: 2.6,
      sd: 14.4,
      asphere: { K: 0, A4: -3.2236e-5, A6: -7.1389e-8, A8: 8.8889e-11, A10: -7.2416e-13, A12: 0, A14: 0 },
    },
    { label: "7", R: 30.674, d: 2.75, sd: 14.4, medium: 4 },
    { label: "8", R: 49.739, sd: 14.4 },
    { label: "FS", R: "flat", d: 0.3, sd: 8.7 },
    { label: "9", R: 86.921, d: 3.01, sd: 8.8, medium: 5 },
    { label: "10", R: -36.585, d: 0.2, sd: 8.8 },
    { label: "11", R: 19.624, d: 3.72, sd: 8.8, medium: 6 },
    { label: "12", R: -32.878, d: 1, sd: 8.8, medium: 7 },
    { label: "13", R: -176.955, sd: 8.8 },
    { label: "STO", R: "flat", d: 0.36 },
    { label: "14", R: -42.791, d: 2.13, sd: 6.2, medium: 8 },
    { label: "15", R: -16.494, d: 1, sd: 6.2, medium: 9 },
    { label: "16", R: 37.235, sd: 6.2 },
    { label: "17", R: 268.822, d: 3.03, sd: 10.4, medium: 10 },
    { label: "18", R: -23.286, d: 0.1, sd: 10.4 },
    { label: "19", R: 59.669, d: 4.46, sd: 10, medium: 11 },
    { label: "20", R: -16.653, d: 1, sd: 10, medium: 12 },
    { label: "21", R: -129.497, sd: 10 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 19.1, nominalFNumber: 3.5, label: "Wide" },
      { focalLengthMm: 55.16, nominalFNumber: 5.7, label: "Tele" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.25,
    description:
      "CONSTRAINED_RECONSTRUCTION: the patent focuses with G1 but publishes no close-focus row. At each zoom endpoint, " +
      "only G1 is translated objectward to a 0.25 m image-plane-referenced object distance; " +
      "G2-G4 and IMG remain fixed. " +
      "Solved G1 travel is 4.590939 mm at wide and 4.532077 mm at tele.",
  },

  gaps: {
    "8": {
      label: "G1-FS",
      values: [
        [25.78, 30.370938662249],
        [2.7, 7.232077277384],
      ],
    },
    "13": {
      label: "G2-STO",
      values: [
        [3, 3],
        [15.9, 15.9],
      ],
    },
    "16": {
      label: "G3-G4",
      values: [
        [15.4, 15.4],
        [2.5, 2.5],
      ],
    },
    "21": {
      label: "BF",
      values: [
        [37.71, 37.71],
        [58.13, 58.13],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 6 },

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

  layout: { yScFill: 0.25 },
} satisfies LensDataV2Input;

export default LENS_DATA;
