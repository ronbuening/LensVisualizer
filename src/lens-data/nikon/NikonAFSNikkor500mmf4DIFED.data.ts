import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AI AF-S NIKKOR ED 500mm f/4D IF                      ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 5,745,306 A, Example 2 / Fig. 4 / Table 2 (Sato/Nikon). ║
 * ║ Native patent scale: F=490.0 mm; independent EFL=489.960550 mm.          ║
 * ║ 11 elements / 9 air-separated groups; all spherical.                    ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION.                              ║
 * ║ G2 moves 10.8363 mm toward the image under published constraints.        ║
 * ║ The printed close-focus d16=18.4240 mm is retained in the audit but      ║
 * ║ corrected here to 8.4240 mm: this conserves the adjacent G2 gaps and     ║
 * ║ restores the patent's R=5000 mm object-to-image distance.                ║
 * ║                                                                          ║
 * ║ Filters/planes omitted: source surfaces 1-2 (front plane-glass filter),    ║
 * ║ source surface 24 (field stop S2), source surfaces 25-26 (drop-in        ║
 * ║ filter), and prose-only S3. The omitted rear filter path is retained by ║
 * ║ an air-equivalent surface-23-to-image spacing of 160.421965401 mm.        ║
 * ║                                                                          ║
 * ║ Semi-diameters: inferred because Table 2 has no aperture table. The      ║
 * ║ front clear aperture is anchored by condition (12), the G2 front by the  ║
 * ║ published 42.3 mm effective diameter, and the remaining clear apertures  ║
 * ║ are constrained by paraxial marginal/chief rays, Fig. 4 proportions,     ║
 * ║ edge thickness, rim slope, cross-gap clearance, and off-axis clipping.   ║
 * ║ Fig. 4 supports the reduced terminal L3c SDs of 16.5 / 17.0 mm instead    ║
 * ║ of the earlier 20.3 / 20.5 mm estimate.                                   ║
 * ║ gapSagFrac=0.91 is required only by the tight s13-s14 G2 air gap; at     ║
 * ║ h=20.0 mm its spherical-sag intrusion is 3.209551 mm of 3.5400 mm,       ║
 * ║ leaving 0.330449 mm physical rim clearance.                              ║
 * ║                                                                          ║
 * ║ Spectral limitation: Table 2 publishes only nd and νd. nC, nF, ng, and  ║
 * ║ dPgF are therefore intentionally not invented as source values. Glass   ║
 * ║ strings use compatible catalog equivalents without asserting Nikon's    ║
 * ║ production suppliers; two ambiguous coordinates remain unresolved.      ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer correlation source (identity/marketing only):
 * https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af-s_nikkor_ed_500mm_f4d_if/
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-ai-af-s-nikkor-500mm-f4d-if-ed",
  maker: "Nikon",
  name: "NIKON AI AF-S NIKKOR ED 500mm f/4D IF",
  subtitle: "US 5,745,306 A — Example 2 / second embodiment (Fig. 4, Table 2)",
  specs: [
    "11 ELEMENTS / 9 GROUPS",
    "3 ED ELEMENTS",
    "PATENT F=490.0 mm; EFL≈489.961 mm",
    "DESIGN f/4.08",
    "2ω≈5.05°",
    "INTERNAL FOCUS (SOURCE-CORRECTED)",
  ],

  focalLengthMarketing: 500,
  focalLengthDesign: 489.960550314,
  apertureMarketing: 4,
  apertureDesign: 4.08,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 5,745,306 A",
  patentAuthors: ["Susumu Sato"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 1998,
  elementCount: 11,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 — ED",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      fl: 331.037085,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "ED assignment from Nikon's published production positions G1-1, G1-2, and G1-5.",
      role: "Front positive collector; production correlation places an ED element at this position.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 — ED",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      fl: 324.178322,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "ED assignment from Nikon's published production positions G1-1, G1-2, and G1-5.",
      role: "Second positive collector; production correlation places an ED element at this position.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.80218,
      vd: 44.69,
      fl: -283.637464,
      glass: "Unmatched (nd=1.802180, νd=44.69)",
      role: "Negative front-group corrector governed by patent condition (4).",
    },
    {
      id: 4,
      name: "L14a",
      label: "L14a",
      type: "Negative Meniscus",
      nd: 1.65844,
      vd: 50.84,
      fl: -209.181267,
      glass: "J-SSK5 catalog equivalent (patent 658508; production supplier unspecified)",
      role: "Negative first component of the cemented G12/L14 positive group.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L14b",
      label: "L14b — ED",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      fl: 128.727534,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "ED assignment from Nikon's published production positions G1-1, G1-2, and G1-5.",
      role: "Positive second component of G12/L14; production correlation places an ED element here.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L21",
      label: "L21",
      type: "Biconcave Negative",
      nd: 1.772789,
      vd: 49.45,
      fl: -131.631005,
      glass: "773495 class (M-TAF1 catalog-equivalent spectral proxy; production supplier unspecified)",
      role: "First negative element of the translating internal-focus group G2.",
    },
    {
      id: 7,
      name: "L22a",
      label: "L22a",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.82,
      fl: 138.645313,
      glass: "J-SF03 catalog equivalent (patent 847238; production supplier unspecified)",
      role: "Positive meniscus first component of cemented negative element L22.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L22b",
      label: "L22b",
      type: "Biconcave Negative",
      nd: 1.518601,
      vd: 69.98,
      fl: -76.093941,
      glass: "J-PKH1 catalog equivalent (patent 519700; production supplier unspecified)",
      role: "Biconcave second component of cemented negative element L22.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L3a",
      label: "L3a",
      type: "Biconvex Positive",
      nd: 1.518601,
      vd: 69.98,
      fl: 141.624548,
      glass: "J-PKH1 catalog equivalent (patent 519700; production supplier unspecified)",
      role: "First positive element of fixed rear group G3.",
    },
    {
      id: 10,
      name: "L3b",
      label: "L3b",
      type: "Negative Meniscus",
      nd: 1.80454,
      vd: 39.61,
      fl: -130.830757,
      glass: "NBFD3 catalog equivalent (patent 805396; production supplier unspecified)",
      role: "Negative meniscus in fixed rear group G3.",
    },
    {
      id: 11,
      name: "L3c",
      label: "L3c",
      type: "Positive Meniscus",
      nd: 1.518601,
      vd: 69.98,
      fl: 148.544853,
      glass: "J-PKH1 catalog equivalent (patent 519700; production supplier unspecified)",
      role: "Final positive meniscus of fixed rear group G3.",
    },
  ],

  /* ── Surface prescription: active patent surfaces 3–23 ── */
  surfaces: [
    { label: "3", R: 187.7545, d: 15.2, nd: 1.49782, elemId: 1, sd: 61.54 },
    { label: "4", R: -1311.4956, d: 1.8, nd: 1.0, elemId: 0, sd: 60.5 },
    { label: "5", R: 212.8668, d: 14.2, nd: 1.49782, elemId: 2, sd: 60.0 },
    { label: "6", R: -652.4568, d: 1.7, nd: 1.0, elemId: 0, sd: 58.0 },
    { label: "7", R: -612.9315, d: 5.9, nd: 1.80218, elemId: 3, sd: 56.3 },
    { label: "8", R: 363.4033, d: 102.8, nd: 1.0, elemId: 0, sd: 55.5 },
    { label: "9", R: 103.6178, d: 4.9, nd: 1.65844, elemId: 4, sd: 39.0 },
    { label: "10", R: 58.022, d: 15.3, nd: 1.49782, elemId: 5, sd: 38.0 },
    { label: "11", R: 559.6899, d: 39.9396, nd: 1.0, elemId: 0, sd: 37.0 },
    { label: "12", R: -4667.8195, d: 3.0, nd: 1.772789, elemId: 6, sd: 21.15 },
    { label: "13", R: 104.0183, d: 3.54, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "14", R: -158.2754, d: 4.8, nd: 1.84666, elemId: 7, sd: 20.0 },
    { label: "15", R: -68.336, d: 3.0, nd: 1.518601, elemId: 8, sd: 20.0 },
    { label: "16", R: 94.797, d: 19.2602, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "STO", R: 1e15, d: 2.0, nd: 1.0, elemId: 0, sd: 19.7397704763 },
    { label: "18", R: 215.065, d: 5.4, nd: 1.518601, elemId: 9, sd: 20.2 },
    { label: "19", R: -110.5814, d: 1.479, nd: 1.0, elemId: 0, sd: 20.2 },
    { label: "20", R: -67.4745, d: 3.5, nd: 1.80454, elemId: 10, sd: 20.0 },
    { label: "21", R: -192.317, d: 7.4, nd: 1.0, elemId: 0, sd: 20.2 },
    { label: "22", R: -5088.9661, d: 5.9, nd: 1.518601, elemId: 11, sd: 16.5 },
    { label: "23", R: -75.9168, d: 160.421965401, nd: 1.0, elemId: 0, sd: 17.0 },
  ],

  asph: {},

  var: {
    "11": [39.9396, 50.7759],
    "16": [19.2602, 8.424],
  },

  varLabels: [
    ["11", "G1–G2"],
    ["16", "G2–STO"],
  ],

  groups: [
    { text: "G1", fromSurface: "3", toSurface: "11" },
    { text: "G2", fromSurface: "12", toSurface: "16" },
    { text: "G3", fromSurface: "STO", toSurface: "23" },
  ],

  doublets: [
    { text: "L14", fromSurface: "9", toSurface: "11" },
    { text: "L22", fromSurface: "14", toSurface: "16" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 5,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the published G2 mechanism is retained, but the printed close d16=18.4240 mm is corrected to 8.4240 mm under the patent's 10.84 mm single-group travel and R=5000 mm constraints; G2 moves 10.8363 mm toward the image from infinity to 5 m.",

  /* ── Aperture configuration ── */
  nominalFno: 4.08,
  fstopSeries: [4.08, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  maxFstop: 22,

  /* ── Geometry / layout ── */
  gapSagFrac: 0.91,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
