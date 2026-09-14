import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║                         LENS DATA — MINOLTA AF 20mm f/2.8                                          ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Patent source: JP 1987-249119 A, Example 4 (Minolta Camera Co., Ltd.; Tetsuya Arimoto).           ║
 * ║  Patent prescription: f = 100.0, FNO = 2.8, all-spherical inverse-telephoto wide angle.            ║
 * ║  Production normalization: uniform scale ×0.2 to the 20 mm A-mount production model.               ║
 * ║  Active optics: 10 elements / 9 air-separated groups; L9+L10 are cemented at surface 18.           ║
 * ║                                                                                                      ║
 * ║  FOCUS STATUS — CONSTRAINED_RECONSTRUCTION                                                         ║
 * ║  The patent fixes Gf and translates the complete Gr rear group toward the object for close focus.   ║
 * ║  The production 0.25 m endpoint is solved with that single mechanism DOF and a fixed image plane:  ║
 * ║    D4: 9.349000000 → 6.411157394 mm; rear-group travel = 2.937842606 mm.                            ║
 * ║    BF: 35.829815933 → 38.767658539 mm, preserving the fixed image-plane station.                    ║
 * ║  The patent-published β = 0.1 state (D4 = 7.0094 mm after scaling) is stored as a focus keyframe.   ║
 * ║                                                                                                      ║
 * ║  STOP MODEL                                                                                          ║
 * ║  Figure 10 locates the physical stop in the d12 air gap between r12 and r13 but gives no coordinate ║
 * ║  or diameter. The source gap is preserved exactly and split at its midpoint: 1.5761 + 1.5761 mm.    ║
 * ║  STO.sd = 6.459872574 mm is solved from the published f/2.8 at that inferred stop station.          ║
 * ║  This stop coordinate and diameter are modeling inferences, not patent-tabulated values.            ║
 * ║                                                                                                      ║
 * ║  SEMI-DIAMETERS                                                                                     ║
 * ║  The patent publishes no clear-aperture heights. SDs below were inferred from exact spherical ray   ║
 * ║  envelopes at infinity and the reconstructed 0.25 m state, including on-axis marginal rays, the    ║
 * ║  0.6×47° off-axis bundle, and available full-field chief/marginal rays. They were then checked for  ║
 * ║  positive edge thickness, actual spherical rim slope, cross-gap intrusion, and state-wise ray       ║
 * ║  containment. No layout control is used to conceal an invalid optical aperture.                     ║
 * ║                                                                                                      ║
 * ║  IMAGE PLANE / SCALING                                                                              ║
 * ║  Example 4 does not tabulate an image-plane surface. The infinity r19→IMG distance is the paraxial  ║
 * ║  BFD independently solved from the scaled prescription. All R, d, sd, and image-plane distances are ║
 * ║  scaled ×0.2; indices and Abbe values are unchanged. There are no asphere coefficients to transform.║
 * ║                                                                                                      ║
 * ║  GLASS DISCIPLINE                                                                                   ║
 * ║  The patent provides only Nd and νd. No nC, nF, ng, PgF, or dPgF values are authored. Exact/near-  ║
 * ║  exact public-catalog coordinate equivalents are coefficient proxies only; unresolved glasses retain ║
 * ║  six-digit coordinate classes rather than speculative supplier identities.                           ║
 * ║                                                                                                      ║
 * ║  SOURCE DISCREPANCIES                                                                               ║
 * ║  The listed Example-4 intervals sum to 287.157 patent units although the patent prints Σd=287.156. ║
 * ║  Every listed interval is preserved. The patent's printed f1/f and |f2|/f summaries also disagree  ║
 * ║  with independent thick-lens values, but both inequalities still pass; no prescription value is    ║
 * ║  altered to force those summaries.                                                                  ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "minolta-af-20mm-f28",
  maker: "Minolta",
  name: "MINOLTA AF 20mm f/2.8",
  subtitle: "JP 1987-249119 A Example 4 — 0.2× production-scaled patent model",
  specs: ["10 ELEMENTS / 9 GROUPS", "20mm", "f/2.8", "94°", "REAR FOCUS"],

  focalLengthMarketing: 20,
  focalLengthDesign: 19.99986,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["sony-a"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 1987-249119 A",
  patentAuthors: ["Tetsuya Arimoto"],
  patentAssignees: ["Minolta Camera Co., Ltd."],
  patentYear: 1987,
  elementCount: 10,
  groupCount: 9,

  // Patent Fig. 11 and the production specification both give 94° full field on 35 mm.
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 94,
    maxTraceFieldDeg: 47,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: 260.847995,
      glass: "BSC7 (Hoya; exact coordinate equivalent, patent vendor unresolved)",
      role: "Weak positive front meniscus in the divergent front functional group Gf.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.618,
      vd: 63.45,
      fl: -47.482699,
      glass: "PCD4 coefficient proxy (supplier unspecified; patent 618635)",
      role: "Strong negative front meniscus completing the divergent front group Gf.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 56.47,
      fl: -28.542051,
      glass: "H-LaK12 coefficient proxy (supplier unspecified; patent 697565)",
      role: "First element of the translating rear group Gr; negative power ahead of the internal stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Convex Positive",
      nd: 1.683,
      vd: 31.52,
      fl: 168.097511,
      glass: "683315 — flint class (catalog unresolved)",
      role: "Weak positive element in the pre-stop portion of Gr.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.7856,
      vd: 42.81,
      fl: -27.593404,
      glass: "NBFD11 coefficient proxy (supplier unspecified; patent 786428)",
      role: "Negative pre-stop meniscus contributing strong local aberration balance in Gr.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.05,
      fl: 15.841755,
      glass: "S-LAH60 coefficient proxy (supplier unspecified; patent 834371)",
      role: "Strong positive biconvex element immediately before the aperture-stop gap.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.83,
      fl: -36.410699,
      glass: "SF57 (Schott; exact coordinate equivalent, patent vendor unresolved)",
      role: "Dense-flint negative element immediately behind the stop.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.45,
      fl: 32.048601,
      glass: "PCD4 coefficient proxy (supplier unspecified; patent 618635)",
      role: "Positive post-stop meniscus in the translating rear group.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.05,
      fl: -29.699386,
      glass: "S-LAH60 coefficient proxy (supplier unspecified; patent 834371)",
      cemented: "D1",
      role: "Negative front component of the cemented rear pair D1.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.51728,
      vd: 69.68,
      fl: 22.684972,
      glass: "PCS1 (Hoya; near-exact coordinate equivalent, patent vendor unresolved)",
      cemented: "D1",
      role: "Positive rear component of D1; the isolated cemented pair has positive net air-to-air power.",
    },
  ],

  surfaces: [
    { label: "1", R: 87.667, d: 4.8794, nd: 1.5168, elemId: 1, sd: 25.5 },
    { label: "2", R: 245.951, d: 0.1172, nd: 1.0, elemId: 0, sd: 23.4 },
    { label: "3", R: 24.9896, d: 1.9518, nd: 1.618, elemId: 2, sd: 16.0 },
    { label: "4", R: 13.0936, d: 9.349, nd: 1.0, elemId: 0, sd: 11.65 },
    { label: "5", R: 30.5308, d: 1.2686, nd: 1.6968, elemId: 3, sd: 9.2 },
    { label: "6", R: 11.8376, d: 3.9036, nd: 1.0, elemId: 0, sd: 8.2 },
    { label: "7", R: 1e15, d: 3.9036, nd: 1.683, elemId: 4, sd: 8.2 },
    { label: "8", R: -114.8106, d: 0.322, nd: 1.0, elemId: 0, sd: 8.15 },
    { label: "9", R: 43.1772, d: 1.171, nd: 1.7856, elemId: 5, sd: 8.05 },
    { label: "10", R: 14.2596, d: 1.6298, nd: 1.0, elemId: 0, sd: 7.75 },
    { label: "11", R: 21.1242, d: 9.7588, nd: 1.834, elemId: 6, sd: 8.0 },
    { label: "12", R: -27.8636, d: 1.5761, nd: 1.0, elemId: 0, sd: 7.75 },
    // STO position inferred from Figure 10 by midpoint-splitting the published d12 air gap.
    { label: "STO", R: 1e15, d: 1.5761, nd: 1.0, elemId: 0, sd: 6.459872574 },
    { label: "13", R: -142.1088, d: 3.9036, nd: 1.84666, elemId: 7, sd: 7.4 },
    { label: "14", R: 39.8632, d: 1.7566, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "15", R: -126.1296, d: 2.635, nd: 1.618, elemId: 8, sd: 9.0 },
    { label: "16", R: -17.2546, d: 0.1172, nd: 1.0, elemId: 0, sd: 9.2 },
    { label: "17", R: 108.993, d: 1.4638, nd: 1.834, elemId: 9, sd: 10.3 },
    // Cemented L9→L10 junction: downstream element L10 owns the junction surface.
    { label: "18", R: 20.0594, d: 6.1482, nd: 1.51728, elemId: 10, sd: 10.75 },
    // Infinity r19→IMG spacing is the independently solved scaled paraxial BFD.
    { label: "19", R: -25.3204, d: 35.829815933, nd: 1.0, elemId: 0, sd: 11.1 },
  ],

  asph: {},

  focusPositions: [0, 0.8669314286221126, 1],
  var: {
    "4": [9.349, 7.0094, 6.411157394],
    "19": [35.829815933, 38.169415933, 38.767658539],
  },

  varLabels: [
    ["4", "D4"],
    ["19", "BF"],
  ],

  groups: [
    { text: "Gf", fromSurface: "1", toSurface: "4" },
    { text: "Gr", fromSurface: "5", toSurface: "19" },
  ],

  doublets: [{ text: "D1", fromSurface: "17", toSurface: "19" }],

  closeFocusM: 0.25,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the complete rear group Gr translates toward the object with the patent-published beta=0.1 state stored exactly before the reconstructed 0.25 m endpoint. D4 and r19-to-IMG change by equal and opposite amounts to keep the image plane fixed.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
