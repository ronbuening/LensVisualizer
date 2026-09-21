import type { LensDataInput } from "../../types/optics.js";

/**
 * Minolta MD 28mm f/2.8 (5/5), modeled from US 4,493,536 Example 1.
 *
 * Source/model mapping:
 * - Patent Example 1 is normalized to f = 100; every prescription length is uniformly scaled by 0.28.
 * - The patent publishes no physical stop. One flat STO is inserted at the midpoint of d4 (between L2 and L3),
 *   and its semi-diameter is calibrated from the parsed model to reproduce the published f/2.8 paraxially.
 *   This is a modeling choice, not independent evidence of the production diaphragm diameter or axial position.
 * - The patent publishes no semi-diameters. Surface SDs below are modeled from exact spherical ray envelopes plus
 *   the current edge-thickness, rim-slope, and shared-gap constraints; they are not source dimensions.
 * - The final r10-to-image spacing is the parsed model's paraxial BFD, 35.75538554189261 mm. The directly scaled
 *   printed L.B. is 35.7504 mm; the small source-precision mismatch remains documented in the dossier.
 * - The patent labels glass coordinates only as N and ν. indexReference: "d" is a catalog-supported inference,
 *   not an explicit U.S.-patent wavelength statement. Supplier identities remain unresolved.
 * - Focus status is NO_INTERNAL_RECONSTRUCTION. The 0.3 m production MFD is metadata only; no close-focus optical
 *   spacing state is invented from it.
 */

const LENS_DATA = {
  key: "minolta-md-28mm-f28-v2",
  maker: "Minolta",
  name: "MINOLTA MD 28mm f/2.8 (5 elements / 5 groups)",
  subtitle: "US 4,493,536 Example 1 — 0.28× model; strong secondary correlation to the later 5/5 MD variant",
  specs: ["5 ELEMENTS / 5 GROUPS", "28.0119 mm MODEL EFL", "f/2.8", "76° PATENT FULL FIELD"],

  focalLengthMarketing: 28,
  focalLengthDesign: 28.011903936175628,
  apertureMarketing: 2.8,
  lensMounts: ["minolta-sr"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,493,536",
  patentAuthors: ["Yoshinobu Kudo"],
  patentAssignees: ["Minolta Camera Co., Ltd."],
  patentYear: 1985,
  elementCount: 5,
  groupCount: 5,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.78831,
      vd: 47.32,
      indexReference: "d",
      fl: -40.18146740978978,
      glass: "S-LAH64 class (coordinate-compatible spectral proxy; native d 1.78831/47.32; supplier/melt unproven)",
      apd: false,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.805,
      vd: 44.53,
      indexReference: "d",
      fl: 26.209615395271985,
      glass: "Unmatched (805445 coordinate; supplier unresolved)",
      apd: false,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.75,
      vd: 25.14,
      indexReference: "d",
      fl: -17.462861261697892,
      glass: "Unmatched (750251 coordinate; supplier unresolved)",
      apd: false,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.77,
      indexReference: "d",
      fl: 31.854754556499355,
      glass: "N-LAF34 class (coordinate-compatible spectral proxy; native d 1.7725/49.77; supplier/melt unproven)",
      apd: false,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 56.47,
      indexReference: "d",
      fl: 47.18197285090249,
      glass: "H-LaK12 class (coordinate-compatible spectral proxy; native d 1.6968/56.47; supplier/melt unproven)",
      apd: false,
    },
  ],

  surfaces: [
    { label: "1", R: 43.5652, d: 1.6772, nd: 1.78831, elemId: 1, sd: 14.0 },
    { label: "2", R: 18.0292, d: 21.3388, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "3", R: 30.2652, d: 7.854, nd: 1.805, elemId: 2, sd: 8.75 },
    { label: "4", R: -61.6, d: 4.0628, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "STO", R: 1e15, d: 4.0628, nd: 1.0, elemId: 0, sd: 6.541810862460941 },
    { label: "5", R: -17.2648, d: 4.3428, nd: 1.75, elemId: 3, sd: 6.1 },
    { label: "6", R: 60.1048, d: 0.798, nd: 1.0, elemId: 0, sd: 6.9 },
    { label: "7", R: -79.4108, d: 2.0804, nd: 1.7725, elemId: 4, sd: 6.9 },
    { label: "8", R: -19.0008, d: 0.084, nd: 1.0, elemId: 0, sd: 7.6 },
    { label: "9", R: -498.5232, d: 2.0776, nd: 1.6968, elemId: 5, sd: 8.0 },
    { label: "10", R: -30.8952, d: 35.75538554189261, nd: 1.0, elemId: 0, sd: 8.2 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [],
  doublets: [],

  closeFocusM: 0.3,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: 0.3 m is production metadata only; US 4,493,536 Example 1 publishes no finite-object spacing state, so the optical model remains at the published infinity prescription.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
