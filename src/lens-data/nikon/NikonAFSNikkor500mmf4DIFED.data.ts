import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 5,745,306 A, Example 2 / Table 2 / Fig. 4; unscaled source prescription.
 * Production correlation: AF-S500 mm f/4D IF-ED; eleven powered elements in nine groups.
 * Thirteen drawn/traced optical pieces include both printed plane filters. Front S1/S2 is4 mm,
 * nd 1.5168/vd 64.10, followed by the printed1 mm gap; unprinted sd65.5 mm is the full-field/focus beam floor
 *62.2454 mm plus 5%, rounded upward to 0.5 mm. Rear S25/S26 remains2 mm, same source pair, after 45.4 mm,
 * then printed Bf113.7034 mm. Inactive field stops remain folded out. Full S1-to-image track is427.1222 mm.
 * Existing constrained G2 motion10.8363 mm and d16=8.4240 mm source-error treatment remain unchanged.
 * Restored front plate gives full near conjugate4.999986 m versus4.998623 m previously, without changing EFL/BFL.
 * Fig. 4 and nominal beams restore terminal L3c caps 20.1/20.2 mm. G2 retains square 20.0 mm caps: a20.4 mm
 * trial exceeds the existing91% gap policy (3.34021>3.2214 mm); policy radius 20.036616, contact 20.996475 mm.
 * No tolerance was changed. No resolved cap/land break justified an inferred cut or extension.
 * All13 source d-line nd/vd pairs remain. Twelve compatible catalog curves are qualified counterparts;
 * L13 at 1.80218/44.69 stays unresolved rather than forcing one of several broad-compatible neighbors.
 * The source supplies no per-element partial dispersion or C/F/g indices; production suppliers/melts remain unspecified.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-ai-af-s-nikkor-500mm-f4d-if-ed",
  maker: "Nikon",
  name: "NIKON AI AF-S NIKKOR 500mm f/4 D IF-ED",
  subtitle: "US 5,745,306 A — Example 2 / second embodiment (Fig. 4, Table 2)",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "11 ELEMENTS / 9 GROUPS",
      "3 ED ELEMENTS",
      "PATENT F=490.0 mm; EFL≈489.961 mm",
      "DESIGN f/4.08",
      "2ω≈5.05°",
      "INTERNAL FOCUS (SOURCE-CORRECTED)",
    ],
    elementCount: 11,
    groupCount: 9,
    acceptsTeleconverters: true, // Nikon lists this lens as compatible with the AF-S TC-20E III
    focalLengthMm: { marketing: 500, design: 489.960550314 },
    fNumber: { marketing: 4, design: 4.08 },
  },

  source: {
    patentNumber: "US 5,745,306 A",
    example: { label: "Example 2", id: "2" },
    patentYear: 1998,
    authors: ["Susumu Sato"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 — ED",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 331.037085,
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
      focalLengthMm: 324.178322,
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
      focalLengthMm: -283.637464,
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
      focalLengthMm: -209.181267,
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
      focalLengthMm: 128.727534,
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
      focalLengthMm: -131.631005,
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
      focalLengthMm: 138.645313,
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
      focalLengthMm: -76.093941,
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
      focalLengthMm: 141.624548,
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
      focalLengthMm: -130.830757,
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
      focalLengthMm: 148.544853,
      glass: "J-PKH1 catalog equivalent (patent 519700; production supplier unspecified)",
      role: "Final positive meniscus of fixed rear group G3.",
    },
    {
      id: 12,
      name: "F",
      label: "Slip-in filter F",
      type: "Plane-Parallel Plate",
      nd: 1.5168,
      vd: 64.1,
      glass: "J-BK7A",
      role: "Plane-parallel filter plate of the patent prescription (US 5,745,306 A, Example 2 Table 2 surfaces 25–26), in the rear filter holder. The design is computed with it in place, so it is drawn and traced as part of the working system. Semi-diameter is a ray-trace estimate; the source lists none. Not counted in elementCount.",
    },
    {
      id: 13,
      name: "FF",
      label: "Front plane-glass filter",
      type: "Plane-Parallel Plate",
      nd: 1.5168,
      vd: 64.1,
      glass: "J-BK7A catalog-equivalent spectral proxy (source front filter; production supplier unspecified)",
      role: "Printed source surfaces 1–2, restored as a drawn/traced front filter. Excluded from the 11 powered-element catalog count. Its unprinted aperture is inferred from the full-field/focus beam floor plus 5%, rounded upward to 0.5 mm.",
    },
  ],

  /* ── Surface prescription: active patent surfaces 3–23, plus rear filter surfaces 25–26 ── */
  surfaces: [
    // Source front plane-glass filter; unprinted rim inferred from full-field/focus beams.
    { label: "1", R: "flat", d: 4, sd: 65.5, medium: 13 },
    { label: "2", R: "flat", d: 1, sd: 65.5 },
    { label: "3", R: 187.7545, d: 15.2, sd: 61.54, medium: 1 },
    { label: "4", R: -1311.4956, d: 1.8, sd: 60.5 },
    { label: "5", R: 212.8668, d: 14.2, sd: 60.0, medium: 2 },
    { label: "6", R: -652.4568, d: 1.7, sd: 58.0 },
    { label: "7", R: -612.9315, d: 5.9, sd: 56.3, medium: 3 },
    { label: "8", R: 363.4033, d: 102.8, sd: 55.5 },
    { label: "9", R: 103.6178, d: 4.9, sd: 39.0, medium: 4 },
    { label: "10", R: 58.022, d: 15.3, sd: 38.0, medium: 5 },
    { label: "11", R: 559.6899, sd: 37.0 },
    { label: "12", R: -4667.8195, d: 3.0, sd: 21.15, medium: 6 },
    { label: "13", R: 104.0183, d: 3.54, sd: 21.0 },
    { label: "14", R: -158.2754, d: 4.8, sd: 20.0, medium: 7 },
    { label: "15", R: -68.336, d: 3.0, sd: 20.0, medium: 8 },
    { label: "16", R: 94.797, sd: 20.0 },
    { label: "STO", R: "flat", d: 2.0 },
    { label: "18", R: 215.065, d: 5.4, sd: 20.2, medium: 9 },
    { label: "19", R: -110.5814, d: 1.479, sd: 20.2 },
    { label: "20", R: -67.4745, d: 3.5, sd: 20.0, medium: 10 },
    { label: "21", R: -192.317, d: 7.4, sd: 20.2 },
    { label: "22", R: -5088.9661, d: 5.9, sd: 20.1, medium: 11 },
    // Surface 23 → drop-in filter: source d23 40.4 + d24 5.0 (field stop S2 folded out)
    { label: "23", R: -75.9168, d: 45.4, sd: 20.2 },
    // Slip-in filter F (US 5,745,306 A, Example 2 Table 2 surfaces 25–26), drawn as a plane-parallel plate.
    // Its sd is a ray-trace estimate (the source lists none).
    // Gap to the image: Bf 113.7034 at infinity and close focus
    { label: "25", R: "flat", d: 2.0, sd: 20.5, medium: 12 },
    { label: "26", R: "flat", d: 113.7034, sd: 20.5 }, // slip-in filter → image plane
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 5,
    description:
      "CONSTRAINED_RECONSTRUCTION: the published G2 mechanism is retained, but the printed close d16=18.4240 mm is corrected to 8.4240 mm under the patent's 10.84 mm single-group travel and R=5000 mm constraints; G2 moves 10.8363 mm toward the image from infinity to 5 m.",
  },

  gaps: {
    "11": { label: "G1–G2", values: [[39.9396, 50.7759]] },
    "16": { label: "G2–STO", values: [[19.2602, 8.424]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 4.08, fStops: [4.08, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  groups: [
    { text: "G1", fromSurface: "3", toSurface: "11" },
    { text: "G2", fromSurface: "12", toSurface: "16" },
    { text: "G3", fromSurface: "STO", toSurface: "23" },
  ],
  doublets: [
    { text: "L14", fromSurface: "9", toSurface: "11" },
    { text: "L22", fromSurface: "14", toSurface: "16" },
  ],

  layout: { yScFill: 0.42 },

  /* ── Geometry / layout ── */
  checks: { gapSagFrac: 0.91 },
} satisfies LensDataV2Input;

export default LENS_DATA;
