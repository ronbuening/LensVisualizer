// This import is correct for a root-level draft. generate:metadata rewrites it after organization.
import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SAMYANG AF 50mm f/1.4 FE                                      ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: KR 10-1825708 B1, Numerical Example 1 (Samyang Optics).       ║
 * ║ Production correlation: first-generation Samyang AF 50mm F1.4 FE.          ║
 * ║ 9 elements / 8 air-separated groups, 6 aspherical surfaces on 3 elements. ║
 * ║ No uniform scaling: s = 1.0. Design EFL = 51.038626 mm.                    ║
 * ║                                                                            ║
 * ║ Focus — CONSTRAINED_RECONSTRUCTION:                                       ║
 * ║   The patent publishes an inner-focus mechanism in which L7/G2 alone      ║
 * ║   translates while G1 and G3 remain fixed. The published close row also   ║
 * ║   changes an image-side spacing, so it is not copied as a fixed-sensor     ║
 * ║   production state. The close state here is code-solved for the marketed  ║
 * ║   0.45 m MFD, preserving D1 + D2 = 20.32961 mm and the single moving L7.  ║
 * ║                                                                            ║
 * ║ Rear plate:                                                                ║
 * ║   Patent Table 1 S19-S20 optical filter OF (2.5 mm, nd 1.51680, νd 64.20)  ║
 * ║   is modeled in `rearPlates` (traced, not drawn). S18 keeps the printed    ║
 * ║   D3 = 19.5 mm; the plate's gap to IMG is the infinity-row D4 = 1.02158.   ║
 * ║   The close row's D4 = 1.15459 is not used (fixed image plane, see focus). ║
 * ║   Patent D5 is post-IMG bookkeeping and is excluded.                       ║
 * ║                                                                            ║
 * ║ Semi-diameters: the patent does not publish clear apertures. SDs were      ║
 * ║   derived by code from the inferred f/1.44 stop, full on-axis marginal     ║
 * ║   rays, and the current default 0.6-field off-axis bundles in both defined ║
 * ║   focus states, then checked against edge thickness, actual asphere rim    ║
 * ║   slope, shared-band gap intrusion, and the patent optical section.        ║
 * ║                                                                            ║
 * ║ Glass: the patent is vendor-silent. Generic six-digit coordinate classes  ║
 * ║   are used where defensible; unresolved pairs are explicitly Unmatched.    ║
 * ║   The source provides no per-element nC/nF/ng/dPgF values, so none are     ║
 * ║   invented here.                                                           ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "samyang-af-50mm-f1p4-fe",
  maker: "Samyang",
  name: "SAMYANG AF 50mm f/1.4 FE",
  subtitle: "KR 10-1825708 B1 — Numerical Example 1; first-generation AF 50mm F1.4 FE correlation",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "9 ELEMENTS / 8 GROUPS",
      "50mm f/1.4 MARKETED; 51.0386mm f/1.44 DESIGN",
      "47.0° FULL-FRAME FIELD",
      "3 ASPHERICAL ELEMENTS / 6 ASPHERICAL SURFACES",
      "SINGLE-ELEMENT INNER FOCUS",
    ],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: { marketing: 50, design: 51.0386262353 },
    fNumber: { marketing: 1.4, design: 1.44 },
  },

  source: {
    patentNumber: "KR 10-1825708 B1",
    patentYear: 2018,
    authors: ["Jae Myung Ryu", "Hae Jin Lee", "Jung Du Lee"],
    assignees: ["Samyang Optics Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.84,
      focalLengthMm: -72.0458242152,
      glass: "648338 class (vendor not identified by patent)",
      role: "Front negative meniscus; paired with L2 so the first two-element subsystem has net positive power.",
      diagramLabel: "L1-1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 2.00069,
      vd: 25.46,
      focalLengthMm: 36.0920964534,
      glass: "001255 class (vendor not identified by patent)",
      role: "Strong positive element preceding the first asphere; contributes to the positive L1+L2 subsystem.",
      diagramLabel: "L2-1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.684,
      vd: 31.3,
      focalLengthMm: -65.6652064073,
      glass: "Unmatched (684313 class; catalog identity unresolved)",
      role: "Double-aspherical negative meniscus in G1; the patent assigns it astigmatism and field-curvature correction.",
      diagramLabel: "L3-1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.32,
      focalLengthMm: -22.8639834487,
      glass: "728283 class (vendor not identified by patent)",
      role: "Negative member of the cemented L4/L5 pair in the rear half of G1.",
      diagramLabel: "L4-1",
      cemented: "L4/L5",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.46,
      focalLengthMm: 28.2047329172,
      glass: "697555 class (vendor not identified by patent)",
      role: "Positive member of the cemented L4/L5 pair; the cemented pair has weak net negative power.",
      diagramLabel: "L5-1",
      cemented: "L4/L5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 41.8583565647,
      glass: "883408 class (vendor not identified by patent)",
      role: "Positive rear element of fixed group G1 immediately ahead of the aperture stop.",
      diagramLabel: "L6-1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.684,
      vd: 31.3,
      focalLengthMm: -53.4379573057,
      glass: "Unmatched (684313 class; catalog identity unresolved)",
      role: "Single-element negative inner-focus group G2; translates imageward toward close focus.",
      diagramLabel: "L7-1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.6897,
      vd: 52.7,
      focalLengthMm: 35.0654081106,
      glass: "K-VC80-M catalog-equivalent (patent coordinates retained; production supplier unspecified)",
      role: "Double-aspherical positive front element of fixed rear group G3.",
      diagramLabel: "L8-1",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.56883,
      vd: 56.04,
      focalLengthMm: -62.303748989,
      glass: "569560 class (vendor not identified by patent)",
      role: "Rear biconcave element; described by the patent as a field-flattener element near the image side.",
      diagramLabel: "L9-1",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ──
   * Patent convention is the standard conic constant K. All six Example-1 aspheres use K = -1.
   */
  surfaces: [
    { label: "1", R: 206.778, d: 2, sd: 23.4, medium: 1 },
    { label: "2", R: 37.927, d: 0.2, sd: 23 },
    { label: "3", R: 36.117, d: 10.5, sd: 23, medium: 2 },
    { label: "4", R: "flat", d: 0.1, sd: 20.1 },
    {
      label: "5A",
      R: 59.625,
      d: 3,
      sd: 20,
      medium: 3,
      asphere: { K: -1, A4: -3.638351e-6, A6: -3.19132e-9, A8: -4.204817e-12, A10: 6.048832e-15, A12: 0 },
    },
    {
      label: "6A",
      R: 25.094,
      d: 10.781,
      sd: 18.6,
      asphere: { K: -1, A4: 8.780333e-6, A6: 6.142542e-9, A8: 1.134598e-11, A10: -1.127929e-14, A12: 0 },
    },
    { label: "7", R: -39.174, d: 2, sd: 16.1, medium: 4 },
    { label: "8", R: 29.583, d: 12.45, sd: 16.8, medium: 5 },
    { label: "9", R: -48.431, d: 0.1, sd: 18.7 },
    { label: "10", R: 50, d: 7.4, sd: 18.7, medium: 6 },
    { label: "11", R: -131.895, d: 0.6, sd: 18 },
    { label: "STO", R: "flat" },
    {
      label: "13A",
      R: 38,
      d: 2.5,
      sd: 16.6,
      medium: 7,
      asphere: { K: -1, A4: -5.688391e-5, A6: 2.633654e-7, A8: -9.029458e-10, A10: 1.808817e-12, A12: -1.590491e-15 },
    },
    {
      label: "14A",
      R: 18.133,
      sd: 15.6,
      asphere: { K: -1, A4: -5.606567e-5, A6: 3.230809e-7, A8: -1.207755e-9, A10: 2.733286e-12, A12: -2.838987e-15 },
    },
    {
      label: "15A",
      R: 65.226,
      d: 7.5,
      sd: 16.8,
      medium: 8,
      asphere: { K: -1, A4: -5.079978e-7, A6: -1.413043e-9, A8: 1.094572e-11, A10: -1.56112e-14, A12: 0 },
    },
    {
      label: "16A",
      R: -36.632,
      d: 7.539,
      sd: 16.8,
      asphere: { K: -1, A4: 2.189271e-6, A6: -5.682527e-9, A8: 1.737121e-11, A10: -2.077513e-14, A12: 0 },
    },
    { label: "17", R: -123.03, d: 1.5, sd: 14.6, medium: 9 },
    { label: "18", R: 50, d: 19.5, sd: 14.4 }, // patent D3: gap to the filter plate OF
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.45,
    description:
      "Reconstructed inner focus: L7–1/G2 moves imageward while G1 and G3 remain fixed. The modeled close state focuses at the marketed 0.45 m distance with a fixed image plane. The patent’s close row changes an image-side spacing, so this endpoint is calculated rather than directly published.",
  },

  /* (moved from var) ── Variable air spacings: constrained fixed-sensor reconstruction ── */
  gaps: {
    STO: { label: "D1", values: [[2.00178, 8.7967167277]] },
    "14A": { label: "D2", values: [[18.32783, 11.5328932723]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.44, fStops: [1.44, 2, 2.8, 4, 5.6, 8, 11, 16] },

  /* ── Optical filter OF (patent Table 1 surfaces S19–S20): traced, not drawn ── */
  rearPlates: [
    {
      label: "OF",
      thicknessMm: 2.5,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.02158,
      source: "KR 10-1825708 B1, Example 1 Tables 1–2 surfaces S19–S20 (infinity-row D4)",
    },
  ],

  /* ── Patent functional-group and cemented-pair annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "11" },
    { text: "G2 (FOCUS)", fromSurface: "13A", toSurface: "14A" },
    { text: "G3", fromSurface: "15A", toSurface: "18" },
  ],
  doublets: [{ text: "L4/L5", fromSurface: "7", toSurface: "9" }],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
