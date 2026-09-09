// This import is correct for a root-level draft. generate:metadata rewrites it after organization.
import type { LensDataInput } from "../../types/optics.js";

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
 * ║ Rear-plane normalization:                                                  ║
 * ║   Patent S19-S20 are an optional generic sensor-side optical-filter plate  ║
 * ║   and are excluded. Their infinity optical path is folded into the S18     ║
 * ║   air-equivalent rear spacing: 19.5 + 2.5/1.51680 + 1.02158 =             ║
 * ║   22.1697867511 mm. Patent D5 is post-IMG bookkeeping and is excluded.     ║
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
  key: "samyang-af-50mm-f1p4-fe",
  maker: "Samyang",
  name: "SAMYANG AF 50mm f/1.4 FE",
  subtitle: "KR 10-1825708 B1 — Numerical Example 1; first-generation AF 50mm F1.4 FE correlation",
  specs: [
    "9 ELEMENTS / 8 GROUPS",
    "50mm f/1.4 MARKETED; 51.0386mm f/1.44 DESIGN",
    "47.0° FULL-FRAME FIELD",
    "3 ASPHERICAL ELEMENTS / 6 ASPHERICAL SURFACES",
    "SINGLE-ELEMENT INNER FOCUS",
  ],

  focalLengthMarketing: 50,
  focalLengthDesign: 51.0386262353,
  apertureMarketing: 1.4,
  apertureDesign: 1.44,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "KR 10-1825708 B1",
  patentAuthors: ["Jae Myung Ryu", "Hae Jin Lee", "Jung Du Lee"],
  patentAssignees: ["Samyang Optics Co., Ltd."],
  patentYear: 2018,
  elementCount: 9,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1-1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.84,
      fl: -72.0458242152,
      glass: "648338 class (vendor not identified by patent)",
      role: "Front negative meniscus; paired with L2 so the first two-element subsystem has net positive power.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2-1",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 2.00069,
      vd: 25.46,
      fl: 36.0920964534,
      glass: "001255 class (vendor not identified by patent)",
      role: "Strong positive element preceding the first asphere; contributes to the positive L1+L2 subsystem.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3-1",
      label: "Element 3",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.684,
      vd: 31.3,
      fl: -65.6652064073,
      glass: "Unmatched (684313 class; catalog identity unresolved)",
      role: "Double-aspherical negative meniscus in G1; the patent assigns it astigmatism and field-curvature correction.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4-1",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.32,
      fl: -22.8639834487,
      glass: "728283 class (vendor not identified by patent)",
      cemented: "L4/L5",
      role: "Negative member of the cemented L4/L5 pair in the rear half of G1.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5-1",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.46,
      fl: 28.2047329172,
      glass: "697555 class (vendor not identified by patent)",
      cemented: "L4/L5",
      role: "Positive member of the cemented L4/L5 pair; the cemented pair has weak net negative power.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6-1",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 41.8583565647,
      glass: "883408 class (vendor not identified by patent)",
      role: "Positive rear element of fixed group G1 immediately ahead of the aperture stop.",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7-1",
      label: "Element 7",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.684,
      vd: 31.3,
      fl: -53.4379573057,
      glass: "Unmatched (684313 class; catalog identity unresolved)",
      role: "Single-element negative inner-focus group G2; translates imageward toward close focus.",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L8-1",
      label: "Element 8",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.6897,
      vd: 52.7,
      fl: 35.0654081106,
      glass: "K-VC80-M catalog-equivalent (patent coordinates retained; production supplier unspecified)",
      role: "Double-aspherical positive front element of fixed rear group G3.",
    },
    {
      id: 9,
      name: "L9",
      diagramLabel: "L9-1",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.56883,
      vd: 56.04,
      fl: -62.303748989,
      glass: "569560 class (vendor not identified by patent)",
      role: "Rear biconcave element; described by the patent as a field-flattener element near the image side.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 206.778, d: 2, nd: 1.64769, elemId: 1, sd: 23.4 },
    { label: "2", R: 37.927, d: 0.2, nd: 1, elemId: 0, sd: 23 },
    { label: "3", R: 36.117, d: 10.5, nd: 2.00069, elemId: 2, sd: 23 },
    { label: "4", R: 1e15, d: 0.1, nd: 1, elemId: 0, sd: 20.1 },
    { label: "5A", R: 59.625, d: 3, nd: 1.684, elemId: 3, sd: 20 },
    { label: "6A", R: 25.094, d: 10.781, nd: 1, elemId: 0, sd: 18.6 },
    { label: "7", R: -39.174, d: 2, nd: 1.72825, elemId: 4, sd: 16.1 },
    { label: "8", R: 29.583, d: 12.45, nd: 1.6968, elemId: 5, sd: 16.8 },
    { label: "9", R: -48.431, d: 0.1, nd: 1, elemId: 0, sd: 18.7 },
    { label: "10", R: 50, d: 7.4, nd: 1.883, elemId: 6, sd: 18.7 },
    { label: "11", R: -131.895, d: 0.6, nd: 1, elemId: 0, sd: 18 },
    { label: "STO", R: 1e15, d: 2.00178, nd: 1, elemId: 0, sd: 16.7425250427 },
    { label: "13A", R: 38, d: 2.5, nd: 1.684, elemId: 7, sd: 16.6 },
    { label: "14A", R: 18.133, d: 18.32783, nd: 1, elemId: 0, sd: 15.6 },
    { label: "15A", R: 65.226, d: 7.5, nd: 1.6897, elemId: 8, sd: 16.8 },
    { label: "16A", R: -36.632, d: 7.539, nd: 1, elemId: 0, sd: 16.8 },
    { label: "17", R: -123.03, d: 1.5, nd: 1.56883, elemId: 9, sd: 14.6 },
    { label: "18", R: 50, d: 22.1697867511, nd: 1, elemId: 0, sd: 14.4 },
  ],

  /* ── Aspherical coefficients ──
   * Patent convention is the standard conic constant K. All six Example-1 aspheres use K = -1.
   */
  asph: {
    "5A": {
      K: -1,
      A4: -3.638351e-6,
      A6: -3.19132e-9,
      A8: -4.204817e-12,
      A10: 6.048832e-15,
      A12: 0,
      A14: 0,
    },
    "6A": {
      K: -1,
      A4: 8.780333e-6,
      A6: 6.142542e-9,
      A8: 1.134598e-11,
      A10: -1.127929e-14,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: -1,
      A4: -5.688391e-5,
      A6: 2.633654e-7,
      A8: -9.029458e-10,
      A10: 1.808817e-12,
      A12: -1.590491e-15,
      A14: 0,
    },
    "14A": {
      K: -1,
      A4: -5.606567e-5,
      A6: 3.230809e-7,
      A8: -1.207755e-9,
      A10: 2.733286e-12,
      A12: -2.838987e-15,
      A14: 0,
    },
    "15A": {
      K: -1,
      A4: -5.079978e-7,
      A6: -1.413043e-9,
      A8: 1.094572e-11,
      A10: -1.56112e-14,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: -1,
      A4: 2.189271e-6,
      A6: -5.682527e-9,
      A8: 1.737121e-11,
      A10: -2.077513e-14,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings: constrained fixed-sensor reconstruction ── */
  var: {
    STO: [2.00178, 8.7967167277],
    "14A": [18.32783, 11.5328932723],
  },
  varLabels: [
    ["STO", "D1"],
    ["14A", "D2"],
  ],

  /* ── Patent functional-group and cemented-pair annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "11" },
    { text: "G2 (FOCUS)", fromSurface: "13A", toSurface: "14A" },
    { text: "G3", fromSurface: "15A", toSurface: "18" },
  ],
  doublets: [{ text: "L4/L5", fromSurface: "7", toSurface: "9" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.45,
  focusDescription:
    "Reconstructed inner focus: L7–1/G2 moves imageward while G1 and G3 remain fixed. The modeled close state focuses at the marketed 0.45 m distance with a fixed image plane. The patent’s close row changes an image-side spacing, so this endpoint is calculated rather than directly published.",

  /* ── Aperture configuration ── */
  nominalFno: 1.44,
  fstopSeries: [1.44, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
