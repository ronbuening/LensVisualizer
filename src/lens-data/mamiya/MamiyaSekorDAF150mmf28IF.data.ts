import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  1.0 m / 0.19x endpoint. Both states are stored as focus keyframes. G1    ║
 * ║  remains fixed. G2 (L4-L7 plus STO) and G3                                ║
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
 * ║  unmatched. L1's APD tag is inferred from S-FPL51 catalog data; no          ║
 * ║  system-level APO claim is encoded.                                        ║
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
  schema: 2,
  key: "mamiya-sekor-af-150mm-f28-if-d",
  maker: "Mamiya",
  name: "MAMIYA SEKOR AF 150mm f/2.8 IF D",
  subtitle: "JP 2001-183581 A Example 1 — 1.5x scale; constrained 1.0 m focus reconstruction",

  catalog: {
    lensMounts: ["mamiya-645"],
    imageFormat: "645",
    specs: ["8 ELEMENTS / 7 GROUPS", "f = 149.790 mm (DESIGN)", "F/2.88 (DESIGN)", "2ω = 26.5°", "INNER FOCUS"],
    elementCount: 8,
    groupCount: 7,
    focalLengthMm: { marketing: 150, design: 149.790260628 },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "JP 2001-183581 A",
    patentYear: 2001,
    authors: ["Hideyuki Suga"],
    assignees: ["Mamiya-OP Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.496999,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: 148.791678,
      glass: "S-FPL51 (OHARA catalog model; supplier not established)",
      apd: "inferred",
      apdNote:
        "S-FPL51 catalog-equivalent ED fluorophosphate; dPgF = +0.0280 from the catalog model, " + "not the patent.",
      role: "Front positive collector in the fixed G1 group.",
      dPgF: 0.028,
      nC: 1.495136,
      nF: 1.501231,
      ng: 1.504507,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.33,
      indexReference: "d",
      focalLengthMm: 159.155971,
      glass: "S-PHM52 (OHARA catalog model; supplier not established)",
      role: "Second positive component of the fixed G1 group.",
      dPgF: 0.0051,
      nC: 1.615036,
      nF: 1.624794,
      ng: 1.630103,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.613397,
      vd: 44.27,
      indexReference: "d",
      focalLengthMm: -78.597895,
      glass: "S-NBM51 (OHARA catalog model; supplier not established)",
      role: "Negative rear component completing the fixed G1 group.",
      dPgF: -0.0065,
      nC: 1.609248,
      nF: 1.623105,
      ng: 1.630911,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.33,
      indexReference: "d",
      focalLengthMm: 256.309491,
      glass: "S-PHM52 (OHARA catalog model; supplier not established)",
      role: "Positive front component of the moving G2 focus group.",
      dPgF: 0.0051,
      nC: 1.615036,
      nF: 1.624794,
      ng: 1.630103,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.720467,
      vd: 34.73,
      indexReference: "d",
      focalLengthMm: -50.978525,
      glass: "S-NBH8 (OHARA catalog model; supplier not established)",
      role: "Negative component immediately behind the aperture stop in G2.",
      dPgF: -0.0019,
      nC: 1.714365,
      nF: 1.735123,
      ng: 1.747234,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.03,
      indexReference: "d",
      focalLengthMm: -72.565378,
      glass: "S-TIM5 (OHARA catalog model; supplier not established)",
      role: "Negative front component of the cemented L6-L7 pair in G2.",
      cemented: "D1",
      dPgF: 0.0036,
      nC: 1.598748,
      nF: 1.614616,
      ng: 1.623875,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.806098,
      vd: 40.34,
      indexReference: "d",
      focalLengthMm: 37.8925,
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
      focalLengthMm: 170.870353,
      glass: "S-LAH66N (OHARA catalog model; supplier not established)",
      role: "Positive rear G3 element moving independently during inner focus.",
      dPgF: -0.0094,
      nC: 1.767792,
      nF: 1.783383,
      ng: 1.791987,
    },
  ],

  surfaces: [
    { label: "1", R: 61.3371, d: 9.1035, sd: 34.5, medium: 1 },
    { label: "2", R: 341.9175, d: 0.5055, sd: 34.3 },
    { label: "3", R: 50.84955, d: 9.1035, sd: 30.0, medium: 2 },
    { label: "4", R: 98.076, d: 5.139, sd: 28.0 },
    { label: "5", R: 146.88405, d: 2.832, sd: 25.2, medium: 3 },
    { label: "6", R: 36.03165, sd: 21.2 },
    { label: "7", R: 81.0042, d: 4.0455, sd: 16.7, medium: 4 },
    { label: "8", R: 162.6234, d: 3.834, sd: 16.4 },
    { label: "STO", R: "flat", d: 5.574 },
    { label: "10", R: -48.14175, d: 2.0235, sd: 15.8, medium: 5 },
    { label: "11", R: 157.647, d: 2.124, sd: 16.0 },
    { label: "12", R: -111.34905, d: 2.0985, sd: 16.1, medium: 6 },
    { label: "13", R: 72.6783, d: 6.6765, sd: 17.2, medium: 7 },
    { label: "14", R: -50.52885, sd: 17.4 },
    { label: "15", R: 188.7405, d: 4.956, sd: 17.3, medium: 8 },
    { label: "16", R: -434.0265, sd: 17.4 },
  ],

  focus: {
    closeFocusM: 1.0,
    keyframes: [0, 0.8252868364271783, 1],
    description:
      "CONSTRAINED_RECONSTRUCTION: G1 is fixed; G2 (L4-L7 plus STO) and G3 (L8) move objectward. " +
      "The patent-published |beta| = 0.15 state and the reconstructed 1.0 m endpoint are exact keyframes. " +
      "The endpoint preserves the fixed image plane and patent terminal X2/X3 = 0.7967231325, yielding " +
      "|beta| = 0.1926159803.",
    // (moved from publishedStations) The intermediate focus row is source-tabulated; the close endpoint is reconstructed.
    published: [1],
  },

  gaps: {
    "6": { label: "D6", values: [[29.334, 7.8165, 2.415407479]] },
    "14": { label: "D14", values: [[7.587, 2.097, 0.718958966]] },
    "16": { label: "BF", values: [[87.456314928, 114.463815, 121.242948483]] },
  },

  aperture: { nominalFNumber: 2.88, fStops: [2.88, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "7", toSurface: "14" },
    { text: "G3", fromSurface: "15", toSurface: "16" },
  ],
  doublets: [{ text: "D1", fromSurface: "12", toSurface: "14" }],

  layout: { yScFill: 0.42 },

  checks: { gapSagFrac: 0.98 },
} satisfies LensDataV2Input;

export default LENS_DATA;
