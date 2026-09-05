import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — KONICA HEXANON AR 40mm f/1.8                          ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Patent: JP1979-030821, Example 1 (Fig. 1(A)).                     ║
 * ║  Source prescription is normalized to f = 1 and is uniformly       ║
 * ║  scaled ×40 to the marketed 40 mm lens.                            ║
 * ║  6 elements / 5 groups; all surfaces are spherical.                ║
 * ║                                                                    ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION.                          ║
 * ║  The patent publishes only the infinity state. The production      ║
 * ║  closest taking distance is 0.45 m, but no finite-focus optical    ║
 * ║  spacing is invented here; var remains empty.                      ║
 * ║                                                                    ║
 * ║  Scaling: every patent length is multiplied by 40. There are no    ║
 * ║  aspheres, so no A_p scaling is required; indices and Abbe values  ║
 * ║  remain unchanged. The last-surface d uses the published           ║
 * ║  fB = 0.8464 f, not the slightly different paraxial focus derived  ║
 * ║  from the rounded prescription.                                    ║
 * ║                                                                    ║
 * ║  Stop: the patent places the stop 0.1001 f behind surface 6.       ║
 * ║  Thus d6 is split into 4.004 mm (surface 6→STO) and 4.112 mm       ║
 * ║  (STO→surface 7). STO sd = 8.475971 mm is the code-derived         ║
 * ║  physical stop radius that reproduces the modeled f/1.8 entrance  ║
 * ║  pupil for the rounded Example-1 prescription.                     ║
 * ║                                                                    ║
 * ║  Semi-diameters: the patent does not tabulate clear apertures.     ║
 * ║  Values below were derived from exact spherical ray envelopes      ║
 * ║  through the published stop, checked against Fig. 1(A), and then   ║
 * ║  constrained by edge thickness, actual rim slope, cross-gap sag,  ║
 * ║  off-axis containment, and render-trim policy.                     ║
 * ║  2026-09-05 figure audit: L1 = 13.3 and L6 = 11.3 mm from       ║
 * ║  Fig. 1(A); L1 retains extra margin for the 0.6-field fan.        ║
 * ║                                                                    ║
 * ║  Glass: the patent publishes only d-line nd and νd. Authoritative  ║
 * ║  catalogs contain coordinate-compatible equivalents, but the       ║
 * ║  source names no supplier. Neutral six-digit/class labels are      ║
 * ║  used; nC, nF, ng, and dPgF are intentionally omitted.             ║
 * ║                                                                    ║
 * ║  Product identity source: original Konica FS-1 instruction manual ║
 * ║  (standard lens 40mm f/1.8, 5 groups/6 elements, 0.45 m MFD).     ║
 * ║  Release-context source: KONICA TECHNICAL REPORT Vol. 6 (1993),   ║
 * ║  §8 / Fig. 13, identifying the FS-1 as a 1979 model.              ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "konica-hexanon-ar-40mm-f18",
  maker: "Konica",
  name: "KONICA HEXANON AR 40mm f/1.8",
  subtitle: "JP1979-030821 Example 1 — scaled ×40 from the normalized patent prescription",
  specs: ["6 ELEMENTS / 5 GROUPS", "40 mm", "f/1.8", "2ω = 56° (patent)", "ALL-SPHERICAL"],

  /* ── Marketing, design, taxonomy, and patent metadata ── */
  focalLengthMarketing: 40,
  focalLengthDesign: 39.993816,
  apertureMarketing: 1.8,
  apertureDesign: 1.8,
  lensMounts: ["konica-ar"],
  imageFormat: "135-full-frame",
  patentNumber: "JP1979-030821",
  patentAuthors: ["Toshiko Shimokura"],
  patentAssignees: ["Konishiroku Photo Industry Co., Ltd."],
  patentYear: 1979,
  elementCount: 6,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      diagramLabel: "L1",
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      fl: 73.7107,
      glass: "713539 class (vendor unresolved)",
      role: "Front positive meniscus; first member of the three-element front section.",
    },
    {
      id: 2,
      diagramLabel: "L2",
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.7,
      indexReference: "d",
      fl: -69.0479,
      glass: "581407 class (vendor unresolved)",
      role: "Negative meniscus; its focal length is constrained by the patent conditions.",
    },
    {
      id: 3,
      diagramLabel: "L3",
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.67003,
      vd: 47.3,
      indexReference: "d",
      fl: 123.3969,
      glass: "670473 class (vendor unresolved)",
      role: "Positive meniscus completing the front functional section before the aperture stop.",
    },
    {
      id: 4,
      diagramLabel: "L4",
      name: "L4",
      label: "Element 4",
      type: "Negative, Concave Front",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      fl: -17.5411,
      glass: "755275 class (vendor unresolved)",
      cemented: "D1",
      role: "Negative member of the rear cemented doublet.",
    },
    {
      id: 5,
      diagramLabel: "L5",
      name: "L5",
      label: "Element 5",
      type: "Positive (Near-Plano Front)",
      nd: 1.6779,
      vd: 55.3,
      indexReference: "d",
      fl: 23.1972,
      glass: "678553 class (vendor unresolved)",
      cemented: "D1",
      role: "Positive member of the L4+L5 cemented rear doublet.",
    },
    {
      id: 6,
      diagramLabel: "L6",
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive (Weak Front)",
      nd: 1.883,
      vd: 40.8,
      indexReference: "d",
      fl: 38.5009,
      glass: "883408 class (vendor unresolved)",
      role: "Final positive element of the rear section.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 39.804, d: 2.9, nd: 1.713, elemId: 1, sd: 13.3 },
    { label: "2", R: 159.076, d: 0.096, nd: 1.0, elemId: 0, sd: 13.3 },
    { label: "3", R: 17.096, d: 1.932, nd: 1.58144, elemId: 2, sd: 12.75 },
    { label: "4", R: 11.492, d: 2.124, nd: 1.0, elemId: 0, sd: 10.3427 },
    { label: "5", R: 12.208, d: 3.864, nd: 1.67003, elemId: 3, sd: 10.15 },
    { label: "6", R: 12.504, d: 4.004, nd: 1.0, elemId: 0, sd: 8.74 },
    { label: "STO", R: 1e15, d: 4.112, nd: 1.0, elemId: 0, sd: 8.475971 },
    { label: "7", R: -13.364, d: 0.868, nd: 1.7552, elemId: 4, sd: 8.78 },
    { label: "8", R: 1556.356, d: 5.316, nd: 1.6779, elemId: 5, sd: 11.15 },
    { label: "9", R: -15.864, d: 0.096, nd: 1.0, elemId: 0, sd: 11.4 },
    { label: "10", R: 449.276, d: 2.9, nd: 1.883, elemId: 6, sd: 11.3 },
    { label: "11", R: -36.668, d: 33.856, nd: 1.0, elemId: 0, sd: 11.3 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "FRONT (L1–L3)", fromSurface: "1", toSurface: "6" },
    { text: "REAR (L4–L6)", fromSurface: "7", toSurface: "11" },
  ],
  doublets: [{ text: "D1 (L4+L5)", fromSurface: "7", toSurface: "9" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.45,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — infinity only; production MFD is 0.45 m; no internal focus spacing is modeled.",

  /* ── Aperture configuration ── */
  nominalFno: 1.8,
  fstopSeries: [1.8, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout ── */
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
