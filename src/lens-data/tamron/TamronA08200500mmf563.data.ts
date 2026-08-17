import type { LensDataInput } from "../../types/optics.js";

/**
 * TAMRON SP AF 200-500mm f/5-6.3 Di LD [IF] (A08)
 * JP 2003-344768 A, Example 1.
 *
 * Source prescription: 13 elements / 10 air-separated groups, all spherical.
 * Patent zoom stations: 200.00 / 300.32 / 490.00 mm.
 * Production correlation: Tamron Model A08, marketed as 200-500mm f/5-6.3.
 *
 * Modeling decisions:
 * - Source surface 1 is an inactive air-air reference plane and is omitted.
 * - Source FS26 is an inactive flare-stop/cutter plane and is omitted.
 * - Because the patent ends D25 at FS26 rather than at IMG, the final authored spacing is s25->IMG.
 *   With L2 fixed, the three raw paraxial image coordinates are averaged to one normalized image plane at
 *   z = 206.4067393783138 mm. This produces state-specific FS26->IMG continuations of 46.49673937831375 /
 *   46.49773937831376 / 46.49773937831375 mm; their mean is 46.49740604498043 mm.
 * - Focus status: CONSTRAINED_RECONSTRUCTION. The patent states that L6 focuses but does not publish
 *   close-focus spacings. L6 alone is translated imageward to the production 2.5 m MOD while the fixed
 *   normalized image plane is preserved. The adjacent D20 + BF sum is conserved at each zoom station.
 * - The common physical stop radius 12.168448200532495 mm is the arithmetic mean of the three radii
 *   independently inverse-derived from the published patent FNO states. nominalFno therefore stores the
 *   modeled values produced by this common stop rather than the rounded source labels 5.160 / 5.722 / 6.250.
 * - Glass vendor identity is underdetermined from patent nd/vd coordinates. The `glass` fields retain
 *   derived six-digit classes only. The source publishes no per-element nC, nF, ng, or dPgF values, so
 *   those fields are intentionally not invented.
 * - Semi-diameters are inferred, not patent-published. The front clear radius is anchored below the
 *   production 86 mm filter diameter, then the remaining group ratios are constrained by patent Fig. 1,
 *   on-axis marginal-ray envelopes across all zoom/focus endpoints, cross-gap sag clearance, and the
 *   current rim-slope/edge-thickness rules. The 13.6 mm L6 rear-pair radius is additionally limited by
 *   the 2.0 mm s22->s23 air gap.
 * - No scaling is applied.
 */

const LENS_DATA = {
  key: "tamron-a08-200500mm-f563",
  maker: "Tamron",
  name: "TAMRON SP AF 200-500mm f/5-6.3 Di LD [IF]",
  subtitle: "JP 2003-344768 A Example 1 — production correlation to Model A08",
  specs: [
    "13 ELEMENTS / 10 GROUPS",
    "200-500mm f/5-6.3",
    "2 LD ELEMENTS",
    "2.5 m MOD",
    "ALL SPHERICAL",
  ],

  focalLengthMarketing: [200, 500],
  focalLengthDesign: [199.99821226743703, 489.9881461818403],
  lensMounts: ["canon-ef", "nikon-f", "sony-a"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2003-344768 A",
  patentAuthors: ["Akio Arakawa"],
  patentAssignees: ["Tamron Co., Ltd."],
  patentYear: 2003,
  elementCount: 13,
  groupCount: 10,

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      fl: 569.7368777352702,
      glass: "487702 class (vendor underdetermined)",
      role: "Positive front collector in functional group L1.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      indexReference: "d",
      fl: -318.7816940015765,
      glass: "834372 class (vendor underdetermined)",
      cemented: "J1",
      role: "Negative high-index component of the front L1 cemented pair.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      fl: 189.54509530408723,
      glass: "497816 class (vendor underdetermined)",
      apd: "inferred",
      apdNote:
        "Production construction identifies two LD elements; the two 1.497/81.6 positions in this correlated patent design reproduce that count.",
      cemented: "J1",
      role: "Positive low-dispersion-class component completing the L1 cemented pair.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      fl: -68.14012787851085,
      glass: "773496 class (vendor underdetermined)",
      role: "Strong negative component of variator group L2.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      fl: 139.69740834169932,
      glass: "805254 class (vendor underdetermined)",
      role: "Positive component within the net-negative L2 variator group.",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      fl: -226.37802321629317,
      glass: "805254 class (vendor underdetermined)",
      role: "Negative front component of positive compensator group L3.",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.2,
      indexReference: "d",
      fl: 94.6359065886705,
      glass: "589612 class (vendor underdetermined)",
      role: "Positive rear component establishing the net-positive L3 power.",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      fl: 234.17522193790853,
      glass: "497816 class (vendor underdetermined)",
      apd: "inferred",
      apdNote:
        "Production construction identifies two LD elements; the two 1.497/81.6 positions in this correlated patent design reproduce that count.",
      role: "Low-dispersion-class positive element at the front of group L4.",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      fl: 90.31973645856388,
      glass: "516641 class (vendor underdetermined)",
      cemented: "J2",
      role: "Positive component of the L4 cemented correction pair.",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      indexReference: "d",
      fl: -120.50193660707082,
      glass: "834372 class (vendor underdetermined)",
      cemented: "J2",
      role: "Negative high-index component completing the net-positive L4 pair.",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      fl: -91.69297547684816,
      glass: "773496 class (vendor underdetermined)",
      role: "Negative front element of rear focus group L6.",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      fl: -66.04221064193162,
      glass: "697555 class (vendor underdetermined)",
      cemented: "J3",
      role: "Negative component of the rear L6 cemented pair.",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      fl: 81.58236756666899,
      glass: "755275 class (vendor underdetermined)",
      cemented: "J3",
      role: "Positive high-dispersion component completing the net-negative L6 pair.",
    },
  ],

  surfaces: [
    { label: "2", R: 204.6832, d: 6, nd: 1.48749, elemId: 1, sd: 41 },
    { label: "3", R: 770.6605, d: 0.2, nd: 1, elemId: 0, sd: 41 },
    { label: "4", R: 161.7932, d: 2.5, nd: 1.834, elemId: 2, sd: 40.5 },
    { label: "5", R: 99.8761, d: 10, nd: 1.497, elemId: 3, sd: 40.5 },
    { label: "6", R: -1603.6079, d: 41.918, nd: 1, elemId: 0, sd: 40.5 },
    { label: "7", R: -90.7862, d: 2, nd: 1.7725, elemId: 4, sd: 20 },
    { label: "8", R: 126.4736, d: 2.5, nd: 1, elemId: 0, sd: 20 },
    { label: "9", R: 137.6303, d: 4, nd: 1.80518, elemId: 5, sd: 20 },
    { label: "10", R: -607.5925, d: 47.791, nd: 1, elemId: 0, sd: 20 },
    { label: "11", R: -3581.5637, d: 1.5, nd: 1.80518, elemId: 6, sd: 20 },
    { label: "12", R: 192.0848, d: 2, nd: 1, elemId: 0, sd: 20 },
    { label: "13", R: 142.8949, d: 6, nd: 1.58913, elemId: 7, sd: 20 },
    { label: "14", R: -90, d: 5.551, nd: 1, elemId: 0, sd: 20 },
    { label: "15", R: 161.6276, d: 4, nd: 1.497, elemId: 8, sd: 19.5 },
    { label: "16", R: -412.3662, d: 0.2, nd: 1, elemId: 0, sd: 19.5 },
    { label: "17", R: 108.7455, d: 5, nd: 1.51633, elemId: 9, sd: 19.2 },
    { label: "18", R: -80.3714, d: 1.8, nd: 1.834, elemId: 10, sd: 19.2 },
    { label: "19", R: -405.3952, d: 20.876, nd: 1, elemId: 0, sd: 19.2 },
    { label: "STO", R: 1e15, d: 19.704, nd: 1, elemId: 0, sd: 12.168448200532495 },
    { label: "21", R: 120, d: 1.8, nd: 1.7725, elemId: 11, sd: 14.5 },
    { label: "22", R: 44.2501, d: 2, nd: 1, elemId: 0, sd: 13.6 },
    { label: "23", R: 239.2721, d: 1.8, nd: 1.6968, elemId: 12, sd: 13.6 },
    { label: "24", R: 38.4761, d: 3, nd: 1.7552, elemId: 13, sd: 13.6 },
    { label: "25", R: 99.0289, d: 74.88473937831375, nd: 1, elemId: 0, sd: 13.6 },
  ],

  asph: {},

  var: {
    "6": [
      [41.918, 41.918],
      [78.367, 78.367],
      [135.377, 135.377],
    ],
    "10": [
      [47.791, 47.791],
      [23.119, 23.119],
      [10.588, 10.588],
    ],
    "14": [
      [5.551, 5.551],
      [20.159, 20.159],
      [19.389, 19.389],
    ],
    "19": [
      [20.876, 20.876],
      [14.993, 14.993],
      [3.352, 3.352],
    ],
    STO: [
      [19.704, 24.866784527562892],
      [12.87, 21.085044299743466],
      [2.181, 16.166910728278484],
    ],
    "25": [
      [74.88473937831375, 69.72195485075086],
      [97.66573937831376, 89.45069507857029],
      [133.29673937831376, 119.31082865003528],
    ],
  },

  varLabels: [
    ["6", "D6"],
    ["10", "D10"],
    ["14", "D14"],
    ["19", "D19"],
    ["STO", "D20 / L6 focus"],
    ["25", "BF"],
  ],

  zoomPositions: [200, 300.32, 490],
  zoomLabels: ["200mm", "490mm"],

  groups: [
    { text: "L1", fromSurface: "2", toSurface: "6" },
    { text: "L2", fromSurface: "7", toSurface: "10" },
    { text: "L3", fromSurface: "11", toSurface: "14" },
    { text: "L4", fromSurface: "15", toSurface: "19" },
    { text: "L6", fromSurface: "21", toSurface: "25" },
  ],

  doublets: [
    { text: "J1", fromSurface: "4", toSurface: "6" },
    { text: "J2", fromSurface: "17", toSurface: "19" },
    { text: "J3", fromSurface: "23", toSurface: "25" },
  ],

  closeFocusM: 2.5,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: patent-specified rear group L6 translates imageward; close pairs are " +
    "code-solved at the production 2.5 m MOD with the normalized image plane fixed and D20 + BF conserved.",

  nominalFno: [5.165510882857218, 5.726845528563873, 6.2380323447524],
  fstopSeries: [5.6, 6.3, 8, 11, 16, 22, 32],
  apertureBlades: 9,
  maxFstop: 32,

  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
