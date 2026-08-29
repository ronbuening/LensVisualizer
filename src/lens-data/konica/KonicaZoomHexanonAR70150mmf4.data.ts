import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — KONICA ZOOM-HEXANON AR 70–150mm f/4                         ║
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
 * ║  STOP MODELING INFERENCE: Example 1 does not publish an aperture-stop       ║
 * ║  plane or diameter. One stationary STO is inserted at the midpoint of the   ║
 * ║  published 4.00 mm s19→s20 air gap (2.00 + 2.00 mm at infinity). Its       ║
 * ║  semi-diameter is calibrated to the validated geometric model, whose        ║
 * ║  nominalFno is f/4.3. The production marketing aperture remains f/4.0 and   ║
 * ║  is stored separately. The f/4.3 model preserves the current 0.90 cross-gap ║
 * ║  clearance policy at the tight s9→s10 air lens while passing the on-axis   ║
 * ║  marginal ray and full-format chief ray individually at every defined state.║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS: the patent publishes none. Values are modeled from         ║
 * ║  independently traced marginal/chief rays, the relative proportions of      ║
 * ║  patent Figure 1, the production 67 mm maximum diameter / 55 mm filter      ║
 * ║  envelope, and the current edge-thickness/rim-slope/cross-gap rules.         ║
 * ║  A 600-dpi Figure-1 audit reduced L3 to 14.5/14.0 mm and enlarged L13-L15  ║
 * ║  to 10.0/11.2/12.8 mm, correcting front/rear silhouette proportions. SDs  ║
 * ║  are not presented as patent facts.                                         ║
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
  key: "konica-zoom-hexanon-ar-70-150mm-f4",
  maker: "Konica",
  name: "KONICA ZOOM-HEXANON AR 70–150mm f/4",
  subtitle: "JPS58137812A Example 1 — inner-focus +−++ four-group zoom",
  specs: [
    "15 ELEMENTS / 12 GROUPS",
    "70–150mm f/4 (marketed)",
    "72.164–146.388mm (published design states)",
    "INNER FOCUS",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: [70, 150],
  focalLengthDesign: [72.06279, 146.196286],
  apertureMarketing: 4,
  apertureDesign: 4.3,
  lensMounts: ["konica-ar"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 1983-137812 A",
  patentAuthors: ["Makoto Sakano", "Norikazu Arai", "Shozo Ishiyama", "Tadashi Kojima", "Hiroshi Miyamae"],
  patentAssignees: ["Konishiroku Photo Industry Co., Ltd."],
  patentYear: 1983,
  elementCount: 15,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      diagramLabel: "L1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      fl: -134.360553,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      cemented: "D1",
      role: "Front element of the positive first zoom group; cemented to L2.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      diagramLabel: "L2",
      type: "Positive Meniscus",
      nd: 1.62299,
      vd: 58.2,
      indexReference: "d",
      fl: 78.206553,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      cemented: "D1",
      role: "Positive member of the front cemented pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      diagramLabel: "L3",
      type: "Biconvex Positive",
      nd: 1.62299,
      vd: 58.2,
      indexReference: "d",
      fl: 151.956401,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      role: "Rear singlet of the positive first zoom group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      diagramLabel: "L4",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      fl: 212.134969,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      role: "Front element of the negative variator group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      diagramLabel: "L5",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      fl: -58.44502,
      glass: "J-LAK14 catalog-equivalent coefficient proxy (patent 697555; production supplier unspecified)",
      role: "Negative singlet in the variator group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      diagramLabel: "L6",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      fl: -27.092347,
      glass: "J-LAK14 catalog-equivalent coefficient proxy (patent 697555; production supplier unspecified)",
      cemented: "D2",
      role: "Negative member of the rear variator cemented pair.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      diagramLabel: "L7",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      fl: 59.627555,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      cemented: "D2",
      role: "Positive member of the rear variator cemented pair.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      diagramLabel: "L8",
      type: "Biconvex Positive",
      nd: 1.62299,
      vd: 58.2,
      indexReference: "d",
      fl: 45.139881,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      cemented: "D3",
      role: "Positive member of the compensator cemented pair.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      diagramLabel: "L9",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      fl: -113.379504,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      cemented: "D3",
      role: "Negative member of the compensator cemented pair.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      diagramLabel: "L10",
      type: "Positive Meniscus",
      nd: 1.51112,
      vd: 60.5,
      indexReference: "d",
      fl: 59.972652,
      glass: "NSL7 catalog-equivalent coefficient proxy (patent 511605; production supplier unspecified)",
      role: "Front positive element of the stationary master group.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      diagramLabel: "L11",
      type: "Positive Meniscus",
      nd: 1.51112,
      vd: 60.5,
      indexReference: "d",
      fl: 74.360352,
      glass: "NSL7 catalog-equivalent coefficient proxy (patent 511605; production supplier unspecified)",
      role: "Second positive element of the stationary master group.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      diagramLabel: "L12",
      type: "Plano-Concave Negative",
      nd: 1.71736,
      vd: 29.5,
      indexReference: "d",
      fl: -39.268986,
      glass: "SF1 catalog-equivalent coefficient proxy (patent 717295; production supplier unspecified)",
      role: "Inner-focus element; translates imageward for closer focus.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      diagramLabel: "L13",
      type: "Biconvex Positive",
      nd: 1.56732,
      vd: 42.8,
      indexReference: "d",
      fl: 46.777735,
      glass: "S-TIL26 catalog-equivalent coefficient proxy (patent 567428; production supplier unspecified)",
      role: "Positive relay element behind the focus lens.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      diagramLabel: "L14",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      fl: -22.704946,
      glass: "J-LASF016 catalog-equivalent coefficient proxy (patent 773496; production supplier unspecified)",
      role: "Strong negative rear-group corrector.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      diagramLabel: "L15",
      type: "Biconvex Positive",
      nd: 1.59551,
      vd: 39.2,
      indexReference: "d",
      fl: 53.561787,
      glass: "E-F8 catalog-equivalent coefficient proxy (patent 596392; production supplier unspecified)",
      role: "Final positive imaging element.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 65.376, d: 1.8, nd: 1.80518, elemId: 1, sd: 23.0 },
    { label: "2", R: 40.25, d: 6.2, nd: 1.62299, elemId: 2, sd: 22.5 },
    { label: "3", R: 217.791, d: 0.1, nd: 1.0, elemId: 0, sd: 22.0 },
    { label: "4", R: 101.646, d: 3.52, nd: 1.62299, elemId: 3, sd: 14.5 },
    { label: "5", R: -1360.521, d: 3.055, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "6", R: -290.812, d: 2.5, nd: 1.80518, elemId: 4, sd: 12.5 },
    { label: "7", R: -108.018, d: 2.01, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "8", R: -164.525, d: 1.0, nd: 1.6968, elemId: 5, sd: 10.8 },
    { label: "9", R: 54.256, d: 2.45, nd: 1.0, elemId: 0, sd: 10.3 },
    { label: "10", R: -44.956, d: 1.0, nd: 1.6968, elemId: 6, sd: 10.3 },
    { label: "11", R: 32.841, d: 2.55, nd: 1.80518, elemId: 7, sd: 10.5 },
    { label: "12", R: 100.338, d: 21.968, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "13", R: 90.734, d: 3.65, nd: 1.62299, elemId: 8, sd: 10.8 },
    { label: "14", R: -40.123, d: 1.0, nd: 1.80518, elemId: 9, sd: 10.8 },
    { label: "15", R: -72.381, d: 6.31, nd: 1.0, elemId: 0, sd: 10.8 },
    { label: "16", R: 24.136, d: 3.87, nd: 1.51112, elemId: 10, sd: 11.0 },
    { label: "17", R: 107.365, d: 0.15, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "18", R: 28.823, d: 3.0, nd: 1.51112, elemId: 11, sd: 10.5 },
    { label: "19", R: 115.081, d: 2.0, nd: 1.0, elemId: 0, sd: 9.8 },
    // STO position is a documented modeling inference: midpoint of the published 4.00 mm s19→s20 air gap.
    { label: "STO", R: 1e15, d: 2.0, nd: 1.0, elemId: 0, sd: 8.511342052 },
    { label: "20", R: 1e15, d: 1.9, nd: 1.71736, elemId: 12, sd: 8.2 },
    { label: "21", R: 28.17, d: 15.0, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "22", R: 52.379, d: 3.8, nd: 1.56732, elemId: 13, sd: 10.0 },
    { label: "23", R: -52.379, d: 2.4, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "24", R: -19.037, d: 1.5, nd: 1.7725, elemId: 14, sd: 11.2 },
    { label: "25", R: 230.64, d: 2.4, nd: 1.0, elemId: 0, sd: 11.2 },
    { label: "26", R: 73.097, d: 4.5, nd: 1.59551, elemId: 15, sd: 12.8 },
    { label: "27", R: -55.29, d: 38.255, nd: 1.0, elemId: 0, sd: 12.8 },
  ],

  asph: {},

  /* ── Zoom and focus spacings ── */
  zoomPositions: [72.164, 97.746, 146.388],
  zoomLabels: ["Wide", "Tele"],
  var: {
    "5": [
      [3.055, 3.055],
      [14.275, 14.275],
      [24.715, 24.715],
    ],
    "12": [
      [21.968, 21.968],
      [14.468, 14.468],
      [0.3, 0.3],
    ],
    "15": [
      [6.31, 6.31],
      [2.592, 2.592],
      [6.31, 6.31],
    ],
    // From the published base state, E12 shifts 1.223080314 / 2.244087999 / 5.264790649 mm
    // at the 0.8 m reconstructed endpoint.
    "STO": [
      [2.0, 3.2230803136901507],
      [2.0, 4.244087999394829],
      [2.0, 7.264790648798002],
    ],
    "21": [
      [15.0, 13.77691968630985],
      [15.0, 12.75591200060517],
      [15.0, 9.735209351201998],
    ],
  },
  varLabels: [
    ["5", "D5 (ZOOM)"],
    ["12", "D12 (ZOOM)"],
    ["15", "D15 (ZOOM)"],
    ["STO", "FOCUS FRONT"],
    ["21", "FOCUS REAR"],
  ],

  groups: [
    { text: "G1 + FIXED", fromSurface: "1", toSurface: "5" },
    { text: "G2 − VARIATOR", fromSurface: "6", toSurface: "12" },
    { text: "G3 + COMPENSATOR", fromSurface: "13", toSurface: "15" },
    { text: "G4 + FIXED FRONT", fromSurface: "16", toSurface: "19" },
    { text: "L12 − IMAGEWARD FOCUS", fromSurface: "20", toSurface: "21" },
    { text: "G4 + FIXED REAR", fromSurface: "22", toSurface: "27" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
  ],

  closeFocusM: 0.8,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: patent-published inner focus moves L12 (s20–s21) imageward; the 0.8 m production endpoint is code-solved with the image plane fixed and adjacent focus air-space conserved. The STO is an inferred stationary midpoint plane in the original 4.00 mm s19–s20 gap.",

  nominalFno: 4.3,
  fstopSeries: [4.3, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  // Patent semi-diameters are absent; yScFill is only a display scale and is not used to conceal geometry failures.
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
