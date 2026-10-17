import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF MICRO-NIKKOR 200mm f/4 D IF-ED                                                        ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 5,402,268, Example 1 (Wataru Tatsuno / Nikon Corporation).                                ║
 * ║ Prescription: 13 elements / 8 air-separated physical groups; 4 functional focus groups (+ / + / - / +).   ║
 * ║ All 21 patent refracting surfaces are spherical. No scaling is applied.                                    ║
 * ║                                                                                                              ║
 * ║ Focus status: PUBLISHED. All three source rows are exact focus keyframes. G1's d5 spacing follows the       ║
 * ║ published 6.6432 → 14.2044 → 6.6432 mm excursion, preserving its mid-focus reversal.                        ║
 * ║                                                                                                              ║
 * ║ STO MODELING INFERENCE: the patent publishes no aperture-stop plane or stop diameter. STO is placed at the  ║
 * ║ midpoint of the infinity d8 air gap, 2.57025 mm after S8, and is held fixed relative to fixed group G2.     ║
 * ║ The source d8 spacing is therefore S8.d + STO.d. The stop radius is derived from the design f-number.       ║
 * ║ The original paraxial calibration used an infinity entrance-pupil radius of EFL/(2*4.0), giving modeled     ║
 * ║ f/4.0000 at the verified EFL.                                                                               ║
 * ║                                                                                                              ║
 * ║ SEMI-DIAMETER MODELING INFERENCE: the patent publishes none. SDs were derived from paraxial marginal/chief  ║
 * ║ rays at the published infinity, beta=-0.5, and beta=-1 states, then constrained by Nikon's production       ║
 * ║ optical-section proportions and by edge-thickness, actual-rim-slope, shared-gap-intrusion, and visible      ║
 * ║ off-axis containment checks. Full-pupil corner rays are permitted to vignette at exterior element rims;     ║
 * ║ the default rendered 0.6-field / 0.75-pupil fan remains contained in all three published source states.     ║
 * ║                                                                                                              ║
 * ║ GLASS: the patent gives d-line nd/nu_d only and no manufacturer identities or line indices. Compatible      ║
 * ║ coefficient-backed catalog glasses are used as spectral models without claiming Nikon's production vendor. ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
 *
 * Production metadata sources:
 * - Nikon Imaging Japan specifications:
 *   https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af_micro-nikkor_200mm_f4d_if-ed/spec.html
 * - Nikon USA overview/specifications:
 *   https://www.nikonusa.com/p/af-micro-nikkor-200mm-f4d-if-ed/1989/overview
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-af-micro-nikkor-200mm-f4d",
  maker: "Nikon",
  name: "NIKON AF MICRO-NIKKOR 200mm f/4 D IF-ED",
  subtitle: "US 5,402,268 Example 1 — Wataru Tatsuno / Nikon Corporation",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["13 ELEMENTS / 8 GROUPS", "f = 200.1457 mm", "F/4.0", "2ω = 12.33°", "ALL SPHERICAL"],
    elementCount: 13,
    groupCount: 8,
    focalLengthMm: { marketing: 200, design: 200.145720214 },
    fNumber: { marketing: 4 },
  },

  source: {
    patentNumber: "US 5,402,268",
    patentYear: 1995,
    authors: ["Wataru Tatsuno"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus (convex to object)",
      nd: 1.80384,
      vd: 33.9,
      indexReference: "d",
      focalLengthMm: -189.502331,
      glass: "E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified)",
      role: "Negative front member of the positive G1 cemented doublet L1.",
      diagramLabel: "L11",
      cemented: "L1",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      indexReference: "d",
      focalLengthMm: 122.468927,
      glass: "J-FKH1 catalog equivalent (patent 498826; production supplier unspecified)",
      role: "Positive ED-class rear member of cemented L1; one of the two production-diagram ED positions.",
      diagramLabel: "L12",
      cemented: "L1",
    },
    {
      id: 3,
      name: "L2",
      label: "L2",
      type: "Positive Meniscus (convex to object)",
      nd: 1.49782,
      vd: 82.6,
      indexReference: "d",
      focalLengthMm: 171.464632,
      glass: "J-FKH1 catalog equivalent (patent 498826; production supplier unspecified)",
      role: "Positive ED-class singlet completing G1; the second production-diagram ED position.",
      diagramLabel: "L2",
    },
    {
      id: 4,
      name: "L31",
      label: "L31",
      type: "Negative Meniscus (convex to object)",
      nd: 1.79631,
      vd: 40.9,
      indexReference: "d",
      focalLengthMm: -104.311476,
      glass: "NBFD2 catalog equivalent (patent 796409; production supplier unspecified)",
      role: "Negative front member of the positive fixed G2 cemented doublet L3.",
      diagramLabel: "L31",
      cemented: "L3",
    },
    {
      id: 5,
      name: "L32",
      label: "L32",
      type: "Positive Meniscus (convex to object)",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      focalLengthMm: 71.679576,
      glass: "J-SK14 catalog equivalent (patent 603607; production supplier unspecified)",
      role: "Positive rear member of fixed G2 cemented doublet L3.",
      diagramLabel: "L32",
      cemented: "L3",
    },
    {
      id: 6,
      name: "L41",
      label: "L41",
      type: "Negative Meniscus (convex to object)",
      nd: 1.6228,
      vd: 57.0,
      indexReference: "d",
      focalLengthMm: -60.320053,
      glass: "S-BSM10 catalog equivalent (patent 623570; production supplier unspecified)",
      role: "Negative front member of the first negative cemented doublet in moving G3.",
      diagramLabel: "L41",
      cemented: "L4",
    },
    {
      id: 7,
      name: "L42",
      label: "L42",
      type: "Positive Meniscus (convex to object)",
      nd: 1.80384,
      vd: 33.9,
      indexReference: "d",
      focalLengthMm: 73.492675,
      glass: "E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified)",
      role: "Positive rear member of the first negative cemented doublet in moving G3.",
      diagramLabel: "L42",
      cemented: "L4",
    },
    {
      id: 8,
      name: "L51",
      label: "L51",
      type: "Positive Meniscus (convex to image)",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: 160.184962,
      glass: "S-TIH6 catalog equivalent (patent 805254; production supplier unspecified)",
      role: "Positive front member of the second negative cemented doublet in moving G3.",
      diagramLabel: "L51",
      cemented: "L5",
    },
    {
      id: 9,
      name: "L52",
      label: "L52",
      type: "Biconcave Negative",
      nd: 1.62041,
      vd: 60.1,
      indexReference: "d",
      focalLengthMm: -42.921845,
      glass: "J-SK16 catalog equivalent (patent 620601; production supplier unspecified)",
      role: "Negative rear member that makes cemented L5 and functional group G3 strongly negative.",
      diagramLabel: "L52",
      cemented: "L5",
    },
    {
      id: 10,
      name: "L61",
      label: "L61",
      type: "Negative Meniscus (convex to object)",
      nd: 1.68893,
      vd: 31.1,
      indexReference: "d",
      focalLengthMm: -107.274379,
      glass: "S-TIM28 catalog equivalent (patent 689311; production supplier unspecified)",
      role: "Negative front member of the positive fixed-G4 cemented doublet L6.",
      diagramLabel: "L61",
      cemented: "L6",
    },
    {
      id: 11,
      name: "L62",
      label: "L62",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.1,
      indexReference: "d",
      focalLengthMm: 52.477312,
      glass: "J-SK16 catalog equivalent (patent 620601; production supplier unspecified)",
      role: "Positive rear member of the positive fixed-G4 cemented doublet L6.",
      diagramLabel: "L62",
      cemented: "L6",
    },
    {
      id: 12,
      name: "L7",
      label: "L7",
      type: "Negative Meniscus (convex to image)",
      nd: 1.77279,
      vd: 49.4,
      indexReference: "d",
      focalLengthMm: -113.254745,
      glass: "M-TAF1 catalog equivalent (patent 773494; production supplier unspecified)",
      role: "Negative singlet in the long rear section of fixed G4.",
      diagramLabel: "L7",
    },
    {
      id: 13,
      name: "L8",
      label: "L8",
      type: "Positive Meniscus (convex to object)",
      nd: 1.54814,
      vd: 45.9,
      indexReference: "d",
      focalLengthMm: 176.972875,
      glass: "E-FEL1 catalog equivalent (patent 548459; production supplier unspecified)",
      role: "Final positive singlet of fixed G4 ahead of the published back focus.",
      diagramLabel: "L8",
    },
  ],

  /* ── Surface prescription ──
   * Original patent labels are retained for all 21 refracting surfaces. The inferred STO splits source d8:
   * S8.d = 2.57025 mm (fixed) and STO.d = d8 - 2.57025 mm (variable).
   */
  surfaces: [
    { label: "1", R: 197.971, d: 2.5, sd: 27.5, medium: 1 },
    { label: "2", R: 85.604, d: 7.0, sd: 27.5, medium: 2 },
    { label: "3", R: -206.085, d: 0.3, sd: 27.5 },
    { label: "4", R: 71.626, d: 6.0, sd: 29.0, medium: 3 },
    { label: "5", R: 432.817, sd: 29.0 },
    { label: "6", R: 79.137, d: 2.5, sd: 25.0, medium: 4 },
    { label: "7", R: 39.959, d: 8.8, sd: 25.0, medium: 5 },
    { label: "8", R: 484.258, d: 2.57025, sd: 25.0 },
    { label: "STO", R: "flat" },
    { label: "9", R: 196.475, d: 2.0, sd: 20.5, medium: 6 },
    { label: "10", R: 31.414, d: 5.0, sd: 20.5, medium: 7 },
    { label: "11", R: 62.33, d: 3.7, sd: 20.5 },
    { label: "12", R: -105.523, d: 4.0, sd: 16.0, medium: 8 },
    { label: "13", R: -59.02, d: 2.0, sd: 17.0, medium: 9 },
    { label: "14", R: 49.151, sd: 17.0 },
    { label: "15", R: 1213.454, d: 2.0, sd: 18.0, medium: 10 },
    { label: "16", R: 69.615, d: 6.0, sd: 18.0, medium: 11 },
    { label: "17", R: -59.143, d: 46.5, sd: 18.0 },
    { label: "18", R: -72.715, d: 2.5, sd: 19.0, medium: 12 },
    { label: "19", R: -436.246, d: 0.4, sd: 19.0 },
    { label: "20", R: 86.92, d: 6.0, sd: 19.0, medium: 13 },
    { label: "21", R: 815.561, d: 58.9638, sd: 19.0 },
  ],

  focus: {
    closeFocusM: 0.5,
    /* ── Published focus keyframes ──
     * Source d8 = S8.d + STO.d, so total d8 is 5.1405 mm at infinity and 37.1142 mm at 1:1.
     * The published beta=-0.5000 state is retained in the audit: d5=14.2044, d8=17.7426, d14=32.5222 mm.
     */
    keyframes: [0, 0.7028911318620283, 1],
    description:
      "PUBLISHED focus keyframes from US 5,402,268 Example 1. G3 moves imageward while G2/G4 remain fixed; source d8 is represented as fixed S8.d plus variable STO.d. G1 reverses at beta=-0.5, where d5 reaches 14.2044 mm before returning to 6.6432 mm at 1:1. STO placement is inferred, not patent-published.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    "5": { label: "D5", values: [[6.6432, 14.2044, 6.6432]] },
    STO: { label: "D8", values: [[2.57025, 15.17235, 34.54395]] },
    "14": { label: "D14", values: [[45.1242, 32.5222, 13.1506]] },
  },

  aperture: { nominalFNumber: 4.0, fStops: [4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (+)", fromSurface: "6", toSurface: "8" },
    { text: "G3 (-)", fromSurface: "9", toSurface: "14" },
    { text: "G4 (+)", fromSurface: "15", toSurface: "21" },
  ],
  doublets: [
    { text: "L1", fromSurface: "1", toSurface: "3" },
    { text: "L3", fromSurface: "6", toSurface: "8" },
    { text: "L4", fromSurface: "9", toSurface: "11" },
    { text: "L5", fromSurface: "12", toSurface: "14" },
    { text: "L6", fromSurface: "15", toSurface: "17" },
  ],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
