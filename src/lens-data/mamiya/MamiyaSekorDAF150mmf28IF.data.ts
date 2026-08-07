import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — MAMIYA SEKOR AF 150mm f/2.8 IF D                           ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2001-183581 A, Example 1 (Mamiya-OP Co., Ltd.; Hideyuki ║
 * ║  Suga).                                                                  ║
 * ║  Production correlation: Mamiya Sekor AF 150mm F2.8 IF D.                ║
 * ║  8 elements / 7 physical groups; all spherical.                          ║
 * ║                                                                            ║
 * ║  SCALING: The patent is normalized to f = 100. Every radius, spacing,      ║
 * ║  semi-diameter, and image-plane distance is scaled uniformly by 1.5.       ║
 * ║  There are no aspheric coefficients to transform.                          ║
 * ║                                                                            ║
 * ║  FOCUS STATUS — CONSTRAINED_RECONSTRUCTION:                               ║
 * ║  The patent publishes a beta-magnitude 0.15 state but not the production  ║
 * ║  1.0 m / 0.19x endpoint. G1 remains fixed. G2 (L4-L7 plus STO) and G3     ║
 * ║  (L8) move objectward. The stored close state was solved with a fixed      ║
 * ║  image plane, the manufacturer 1.0 m MFD measured from the image plane,    ║
 * ║  and the patent terminal movement ratio X2/X3 = 0.7967231325. The solved   ║
 * ║  endpoint gives |beta| = 0.1926159803.                                     ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: The patent does not publish clear apertures. SDs were     ║
 * ║  derived by exact spherical tracing over infinity-to-1.0 m focus,          ║
 * ║  including on-axis marginal rays, the default 0.6-field off-axis fan,      ║
 * ║  full-field chief rays, and reachable half-pupil rays at the 26.5-degree   ║
 * ║  patent field. The 72 mm manufacturer filter diameter bounds the front     ║
 * ║  clear aperture. The G1-G2 rim nesting at close focus is physically clear  ║
 * ║  but tighter than the default 0.90 gap-sag allowance, so gapSagFrac = 0.98 ║
 * ║  is declared and independently checked for positive axial clearance.       ║
 * ║                                                                            ║
 * ║  CATALOG DISPERSION: The patent publishes only Nd and νd. Exact or         ║
 * ║  near-exact current OHARA catalog models were selected independently from ║
 * ║  those coordinates. Their nC, nF, ng, and dPgF values are catalog-derived ║
 * ║  modeling data, not patent values or supplier claims. L7 remains           ║
 * ║  unmatched. No system-level APO claim is encoded.                          ║
 * ║                                                                            ║
 * ║  The file excludes filters, sensor cover glass, dummy planes, and          ║
 * ║  mechanical parts.                                                         ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer source used for marketed fields:
 * https://allphotolenses.com/public/files/pdfs/921a29c96be9a5d809921e415e1871a9.pdf
 *
 * Catalog source used for modeled spectral fields:
 * https://oharacorp.com/glass-catalog/
 */

const LENS_DATA = {
  key: "mamiya-sekor-af-150mm-f28-if-d",
  maker: "Mamiya",
  name: "MAMIYA SEKOR AF 150mm f/2.8 IF D",
  subtitle: "JP 2001-183581 A Example 1 — 1.5x scale; constrained 1.0 m focus reconstruction",
  specs: ["8 ELEMENTS / 7 GROUPS", "f = 149.790 mm (DESIGN)", "F/2.88 (DESIGN)", "2ω = 26.5°", "INNER FOCUS"],

  focalLengthMarketing: 150,
  focalLengthDesign: 149.790260628,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["mamiya-645"],
  imageFormat: "645",
  patentNumber: "JP 2001-183581 A",
  patentAuthors: ["Hideyuki Suga"],
  patentAssignees: ["Mamiya-OP Co., Ltd."],
  patentYear: 2001,
  elementCount: 8,
  groupCount: 7,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.496999,
      vd: 81.61,
      indexReference: "d",
      fl: 148.791678,
      glass: "S-FPL51 (OHARA catalog model; supplier not established)",
      nC: 1.495136,
      nF: 1.501231,
      ng: 1.504507,
      dPgF: 0.028,
      role: "Front positive collector in the fixed G1 group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.33,
      indexReference: "d",
      fl: 159.155971,
      glass: "S-PHM52 (OHARA catalog model; supplier not established)",
      nC: 1.615036,
      nF: 1.624794,
      ng: 1.630103,
      dPgF: 0.0051,
      role: "Second positive component of the fixed G1 group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.613397,
      vd: 44.27,
      indexReference: "d",
      fl: -78.597895,
      glass: "S-NBM51 (OHARA catalog model; supplier not established)",
      nC: 1.609248,
      nF: 1.623105,
      ng: 1.630911,
      dPgF: -0.0065,
      role: "Negative rear component completing the fixed G1 group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.33,
      indexReference: "d",
      fl: 256.309491,
      glass: "S-PHM52 (OHARA catalog model; supplier not established)",
      nC: 1.615036,
      nF: 1.624794,
      ng: 1.630103,
      dPgF: 0.0051,
      role: "Positive front component of the moving G2 focus group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.720467,
      vd: 34.73,
      indexReference: "d",
      fl: -50.978525,
      glass: "S-NBH8 (OHARA catalog model; supplier not established)",
      nC: 1.714365,
      nF: 1.735123,
      ng: 1.747234,
      dPgF: -0.0019,
      role: "Negative component immediately behind the aperture stop in G2.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.03,
      indexReference: "d",
      fl: -72.565378,
      glass: "S-TIM5 (OHARA catalog model; supplier not established)",
      nC: 1.598748,
      nF: 1.614616,
      ng: 1.623875,
      dPgF: 0.0036,
      role: "Negative front component of the cemented L6-L7 pair in G2.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.806098,
      vd: 40.34,
      indexReference: "d",
      fl: 37.8925,
      glass: "Unmatched (nd=1.806098, νd=40.34; no exact current catalog identity)",
      role: "Positive rear component of the cemented L6-L7 pair in G2.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.772499,
      vd: 49.6,
      indexReference: "d",
      fl: 170.870353,
      glass: "S-LAH66N (OHARA catalog model; supplier not established)",
      nC: 1.767792,
      nF: 1.783383,
      ng: 1.791987,
      dPgF: -0.0094,
      role: "Positive rear G3 element moving independently during inner focus.",
    },
  ],

  surfaces: [
    { label: "1", R: 61.3371, d: 9.1035, nd: 1.496999, elemId: 1, sd: 34.5 },
    { label: "2", R: 341.9175, d: 0.5055, nd: 1.0, elemId: 0, sd: 34.3 },
    { label: "3", R: 50.84955, d: 9.1035, nd: 1.618, elemId: 2, sd: 30.0 },
    { label: "4", R: 98.076, d: 5.139, nd: 1.0, elemId: 0, sd: 28.0 },
    { label: "5", R: 146.88405, d: 2.832, nd: 1.613397, elemId: 3, sd: 25.2 },
    { label: "6", R: 36.03165, d: 29.334, nd: 1.0, elemId: 0, sd: 21.2 },
    { label: "7", R: 81.0042, d: 4.0455, nd: 1.618, elemId: 4, sd: 16.7 },
    { label: "8", R: 162.6234, d: 3.834, nd: 1.0, elemId: 0, sd: 16.4 },
    { label: "STO", R: 1e15, d: 5.574, nd: 1.0, elemId: 0, sd: 15.777551265 },
    { label: "10", R: -48.14175, d: 2.0235, nd: 1.720467, elemId: 5, sd: 15.8 },
    { label: "11", R: 157.647, d: 2.124, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "12", R: -111.34905, d: 2.0985, nd: 1.60342, elemId: 6, sd: 16.1 },
    { label: "13", R: 72.6783, d: 6.6765, nd: 1.806098, elemId: 7, sd: 17.2 },
    { label: "14", R: -50.52885, d: 7.587, nd: 1.0, elemId: 0, sd: 17.4 },
    { label: "15", R: 188.7405, d: 4.956, nd: 1.772499, elemId: 8, sd: 17.3 },
    { label: "16", R: -434.0265, d: 87.456314928, nd: 1.0, elemId: 0, sd: 17.4 },
  ],

  asph: {},

  var: {
    "6": [29.334, 2.415407479],
    "14": [7.587, 0.718958966],
    "16": [87.456314928, 121.242948483],
  },

  varLabels: [
    ["6", "D6"],
    ["14", "D14"],
    ["16", "BF"],
  ],

  groups: [
    { text: "G1 (FIXED)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (FOCUS)", fromSurface: "7", toSurface: "14" },
    { text: "G3 (FOCUS)", fromSurface: "15", toSurface: "16" },
  ],

  doublets: [{ text: "D1", fromSurface: "12", toSurface: "14" }],

  closeFocusM: 1.0,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: G1 is fixed; G2 (L4-L7 plus STO) and G3 (L8) move objectward. " +
    "The 1.0 m endpoint preserves the fixed image plane and patent terminal X2/X3 = 0.7967231325, yielding " +
    "|beta| = 0.1926159803. The patent-published |beta| = 0.15 state is not stored as the production endpoint.",

  nominalFno: 2.88,
  fstopSeries: [2.88, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  gapSagFrac: 0.98,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
