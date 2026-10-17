import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — KONICA ZOOM-HEXANON AR 70-150mm f/4                         ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JPS58137812A, Example 1 (Konishiroku Photo Industry Co., Ltd.).   ║
 * ║  Native patent scale, 15 elements / 12 groups, all spherical.              ║
 * ║  Four functional groups with + − + + power; G2 is the variator and G3     ║
 * ║  reverses direction as the compensator. G4 is the stationary master group. ║
 * ║                                                                              ║
 * ║  Zoom variable gaps: D5, D12, D15 (zoom only).                             ║
 * ║  Focus: E12, the plano-concave third lens in G4, translates imageward.      ║
 * ║  The patent publishes this one-DOF mechanism and focus motion to U=1.2 m.   ║
 * ║  The production 0.8 m endpoint is a CONSTRAINED_RECONSTRUCTION solved      ║
 * ║  with the image plane fixed and the original d19+d21 focus-adjacent air     ║
 * ║  space conserved. After inserting the inferred STO, the moving gaps are     ║
 * ║  STO→20 and 21→22.                                                         ║
 * ║                                                                              ║
 * ║  STOP MODELING INFERENCE: Example 1 does not publish an aperture-stop plane ║
 * ║  or diameter. One stationary STO is inserted at the midpoint of the         ║
 * ║  published 4.00 mm s19→s20 air gap (2.00 + 2.00 mm at infinity). The stop   ║
 * ║  radius is derived from the design f-number at each zoom station; the       ║
 * ║  modeled nominalFNumber remains f/4.3. The production marketing aperture    ║
 * ║  remains f/4.0 and is stored separately. The f/4.3 model preserves the      ║
 * ║  current 0.90 cross-gap clearance policy at the tight s9→s10 air lens while ║
 * ║  passing the on-axis marginal ray and full-format chief ray individually at ║
 * ║  every defined state.                                                       ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS: the patent publishes none. Values are modeled from         ║
 * ║  independently traced marginal/chief rays, the relative proportions of      ║
 * ║  patent Figure 1, the production 67 mm maximum diameter / 55 mm filter      ║
 * ║  envelope, and the current edge-thickness/rim-slope/cross-gap rules.         ║
 * ║  A 600-dpi Figure-1 audit reduced L3 to 14.5/14.0 mm and enlarged L13-L15  ║
 * ║  to 10.0/11.2/12.8 mm, correcting front/rear silhouette proportions. SDs  ║
 * ║  are not presented as patent facts.                                         ║
 * ║  L3 was later raised to 16.9/16.3 mm: the figure-reduced rims clipped the   ║
 * ║  traced chief ray to the 24×36 corner at the 97.7 and 146.4 mm states,      ║
 * ║  and the traced floor takes precedence (2026-09-24 field-coverage audit).   ║
 * ║                                                                              ║
 * ║  GLASS: the patent gives d-line nd/νd only. Coordinate-compatible catalog   ║
 * ║  curves are supplier-neutral coefficient proxies; no production identity is ║
 * ║  asserted and nC/nF/ng/dPgF are not copied from the proxy rows.              ║
 * ║                                                                              ║
 * ║  SCALING: none (s = 1.000000).                                               ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "konica-zoom-hexanon-ar-70-150mm-f4",
  maker: "Konica",
  name: "KONICA ZOOM-HEXANON AR 70-150mm f/4",
  subtitle: "JPS58137812A Example 1 — inner-focus +−++ four-group zoom",

  catalog: {
    lensMounts: ["konica-ar"],
    imageFormat: "135-full-frame",
    specs: [
      "15 ELEMENTS / 12 GROUPS",
      "70–150mm f/4 (marketed)",
      "72.164–146.388mm (published design states)",
      "INNER FOCUS",
      "ALL-SPHERICAL",
    ],
    elementCount: 15,
    groupCount: 12,
    focalLengthMm: { marketing: [70, 150], design: [72.06279, 146.196652] },
    fNumber: { marketing: 4, design: 4.3 },
  },

  source: {
    patentNumber: "JP 1983-137812 A",
    patentYear: 1983,
    authors: ["Makoto Sakano", "Norikazu Arai", "Shozo Ishiyama", "Tadashi Kojima", "Hiroshi Miyamae"],
    assignees: ["Konishiroku Photo Industry Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: -134.360553,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      role: "Front element of the positive first zoom group; cemented to L2.",
      diagramLabel: "L1",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.62299,
      vd: 58.2,
      indexReference: "d",
      focalLengthMm: 78.206553,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      role: "Positive member of the front cemented pair.",
      diagramLabel: "L2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.62299,
      vd: 58.2,
      indexReference: "d",
      focalLengthMm: 151.956401,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      role: "Rear singlet of the positive first zoom group.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: 212.134969,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      role: "Front element of the negative variator group.",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: -58.44502,
      glass: "J-LAK14 catalog-equivalent coefficient proxy (patent 697555; production supplier unspecified)",
      role: "Negative singlet in the variator group.",
      diagramLabel: "L5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: -27.092347,
      glass: "J-LAK14 catalog-equivalent coefficient proxy (patent 697555; production supplier unspecified)",
      role: "Negative member of the rear variator cemented pair.",
      diagramLabel: "L6",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: 59.627555,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      role: "Positive member of the rear variator cemented pair.",
      diagramLabel: "L7",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.62299,
      vd: 58.2,
      indexReference: "d",
      focalLengthMm: 45.139881,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      role: "Positive member of the compensator cemented pair.",
      diagramLabel: "L8",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: -113.379504,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      role: "Negative member of the compensator cemented pair.",
      diagramLabel: "L9",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.51112,
      vd: 60.5,
      indexReference: "d",
      focalLengthMm: 59.972652,
      glass: "NSL7 catalog-equivalent coefficient proxy (patent 511605; production supplier unspecified)",
      role: "Front positive element of the stationary master group.",
      diagramLabel: "L10",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.51112,
      vd: 60.5,
      indexReference: "d",
      focalLengthMm: 74.360352,
      glass: "NSL7 catalog-equivalent coefficient proxy (patent 511605; production supplier unspecified)",
      role: "Second positive element of the stationary master group.",
      diagramLabel: "L11",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Plano-Concave Negative",
      nd: 1.71736,
      vd: 29.5,
      indexReference: "d",
      focalLengthMm: -39.268986,
      glass: "SF1 catalog-equivalent coefficient proxy (patent 717295; production supplier unspecified)",
      role: "Inner-focus element; translates imageward for closer focus.",
      diagramLabel: "L12",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.56732,
      vd: 42.8,
      indexReference: "d",
      focalLengthMm: 46.777735,
      glass: "S-TIL26 catalog-equivalent coefficient proxy (patent 567428; production supplier unspecified)",
      role: "Positive relay element behind the focus lens.",
      diagramLabel: "L13",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: -22.704946,
      glass: "J-LASF016 catalog-equivalent coefficient proxy (patent 773496; production supplier unspecified)",
      role: "Strong negative rear-group corrector.",
      diagramLabel: "L14",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.59551,
      vd: 39.2,
      indexReference: "d",
      focalLengthMm: 53.561787,
      glass: "E-F8 catalog-equivalent coefficient proxy (patent 596392; production supplier unspecified)",
      role: "Final positive imaging element.",
      diagramLabel: "L15",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 65.376, d: 1.8, sd: 23.0, medium: 1 },
    { label: "2", R: 40.25, d: 6.2, sd: 22.5, medium: 2 },
    { label: "3", R: 217.791, d: 0.1, sd: 22.0 },
    { label: "4", R: 101.646, d: 3.52, sd: 16.9, medium: 3 },
    { label: "5", R: -1360.521, sd: 16.3 },
    { label: "6", R: -290.812, d: 2.5, sd: 12.5, medium: 4 },
    { label: "7", R: -108.018, d: 2.01, sd: 12.0 },
    { label: "8", R: -164.525, d: 1.0, sd: 10.8, medium: 5 },
    { label: "9", R: 54.256, d: 2.45, sd: 10.3 },
    { label: "10", R: -44.956, d: 1.0, sd: 10.3, medium: 6 },
    { label: "11", R: 32.841, d: 2.55, sd: 10.5, medium: 7 },
    { label: "12", R: 100.338, sd: 10.5 },
    { label: "13", R: 90.734, d: 3.65, sd: 10.8, medium: 8 },
    { label: "14", R: -40.123, d: 1.0, sd: 10.8, medium: 9 },
    { label: "15", R: -72.381, sd: 10.8 },
    { label: "16", R: 24.136, d: 3.87, sd: 11.0, medium: 10 },
    { label: "17", R: 107.365, d: 0.15, sd: 10.5 },
    { label: "18", R: 28.823, d: 3.0, sd: 10.5, medium: 11 },
    { label: "19", R: 115.081, d: 2.0, sd: 9.8 },
    // STO position is a documented modeling inference: midpoint of the published 4.00 mm s19→s20 air gap.
    { label: "STO", R: "flat" },
    { label: "20", R: "flat", d: 1.9, sd: 8.2, medium: 12 },
    { label: "21", R: 28.17, sd: 8.0 },
    { label: "22", R: 52.379, d: 3.8, sd: 10.0, medium: 13 },
    { label: "23", R: -52.379, d: 2.4, sd: 10.0 },
    { label: "24", R: -19.037, d: 1.5, sd: 11.2, medium: 14 },
    { label: "25", R: 230.64, d: 2.4, sd: 11.2 },
    { label: "26", R: 73.097, d: 4.5, sd: 12.8, medium: 15 },
    { label: "27", R: -55.29, d: 38.255, sd: 12.8 },
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom and focus spacings ── */
    stations: [
      { focalLengthMm: 72.164, label: "Wide" },
      { focalLengthMm: 97.746 },
      { focalLengthMm: 146.388, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 0.8,
    description:
      "CONSTRAINED_RECONSTRUCTION: patent-published inner focus moves L12 (s20–s21) imageward; the 0.8 m production endpoint is code-solved with the image plane fixed and adjacent focus air-space conserved. The STO is an inferred stationary midpoint plane in the original 4.00 mm s19–s20 gap.",
  },

  gaps: {
    "5": {
      label: "D5 (ZOOM)",
      values: [
        [3.055, 3.055],
        [14.275, 14.275],
        [24.715, 24.715],
      ],
    },
    "12": {
      label: "D12 (ZOOM)",
      values: [
        [21.968, 21.968],
        [14.466, 14.466],
        [0.3, 0.3],
      ],
    },
    "15": {
      label: "D15 (ZOOM)",
      values: [
        [6.31, 6.31],
        [2.592, 2.592],
        [6.318, 6.318],
      ],
    },
    // From the published base state, E12 shifts 1.223080314 / 2.244087999 / 5.264790649 mm
    // at the 0.8 m reconstructed endpoint.
    STO: {
      label: "FOCUS FRONT",
      values: [
        [2.0, 3.2230803136901507],
        [2.0, 4.244087999394829],
        [2.0, 7.264790648798002],
      ],
    },
    "21": {
      label: "FOCUS REAR",
      values: [
        [15.0, 13.77691968630985],
        [15.0, 12.75591200060517],
        [15.0, 9.735209351201998],
      ],
    },
  },

  aperture: { nominalFNumber: 4.3, fStops: [4.3, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "G1 + FIXED", fromSurface: "1", toSurface: "5" },
    { text: "G2 − VARIATOR", fromSurface: "6", toSurface: "12" },
    { text: "G3 + COMP.", fromSurface: "13", toSurface: "15" },
    { text: "G4 FRONT", fromSurface: "16", toSurface: "19" },
    { text: "L12 − FOCUS", fromSurface: "20", toSurface: "21" },
    { text: "G4 REAR", fromSurface: "22", toSurface: "27" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
  ],

  // Patent semi-diameters are absent; yScFill is only a display scale and is not used to conceal geometry failures.
  layout: { yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
