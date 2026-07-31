import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║     LENS DATA — VOIGTLÄNDER PORTRAIT HELIAR 75mm f/1.8            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2026-120386 A, Example 2 (Cosina / Moriyama).     ║
 * ║  All-spherical positive-negative-positive soft-focus design.       ║
 * ║  6 elements / 3 cemented groups, 0 aspherical surfaces.           ║
 * ║  Focus status: PUBLISHED — unit focus; all groups translate.       ║
 * ║                                                                    ║
 * ║  NOTE ON ABERRATION CONTROL:                                       ║
 * ║    Patent states PLUS / SHARP / MINUS use U3 = 5.730 / 8.730 /    ║
 * ║    11.730 mm. The production ring reverses that source order:      ║
 * ║    OVER / SHARP / UNDER maps to −1 / 0 / +1 and U3 = 11.730 /    ║
 * ║    8.730 / 5.730 mm. No refocus path is invented.                  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent omits clear apertures. Group SDs are measured from   ║
 * ║    Fig. 5 (18.7 / 15.0 / 13.2 mm), then checked with exact         ║
 * ║    marginal/chief-ray bundles and current geometry constraints.    ║
 * ║    The air-stop SD is inferred from the sharp-state paraxial       ║
 * ║    F/1.858 pupil model.                                            ║
 * ║                                                                    ║
 * ║  NOTE ON SPECTRAL DATA:                                            ║
 * ║    The patent publishes d-line nd/νd only. Vendor-neutral six-     ║
 * ║    digit classes are used; nC, nF, ng, and dPgF are not invented. ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes only the active optical design.    ║
 * ║    Sensor glass, filters, dummy planes, and mechanics are omitted. ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "voigtlander-portrait-heliar-75f18",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER PORTRAIT HELIAR 75mm f/1.8",
  subtitle: "JP 2026-120386 A, EXAMPLE 2 — COSINA / TATSUYA MORIYAMA",
  specs: [
    "6 ELEMENTS / 3 GROUPS",
    "75 mm marketing · 73.356 mm sharp-state EFL",
    "F/1.8 marketing · F/1.858 design",
    "2ω = 33.18° · 135 FULL FRAME",
    "ALL SPHERICAL · UNIT FOCUS · S.A. CONTROL",
  ],
  focalLengthMarketing: 75,
  focalLengthDesign: 73.355535,
  apertureMarketing: 1.8,
  apertureDesign: 1.858,
  lensMounts: ["sony-fe", "nikon-z", "canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2026-120386 A",
  patentAuthors: ["Tatsuya Moriyama"],
  patentAssignees: ["Cosina Co., Ltd."],
  patentYear: 2026,
  elementCount: 6,
  groupCount: 3,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 33.18,
    maxTraceFieldDeg: 16.59,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L4f",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 38.863947,
      glass: "883408 — high-index lanthanum glass class (vendor unresolved)",
      apd: false,
      cemented: "G1",
      role: "Front positive member of the G1 cemented doublet.",
    },
    {
      id: 2,
      name: "L4r",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      fl: -106.839291,
      glass: "847238 — very-dense-flint class (vendor unresolved)",
      apd: false,
      cemented: "G1",
      role: "Negative chromatic partner completing the positive G1 doublet.",
    },
    {
      id: 3,
      name: "L5f",
      label: "Element 3",
      type: "Positive Meniscus, convex to image",
      nd: 1.80518,
      vd: 25.46,
      fl: 64.434685,
      glass: "805255 — dense-flint class (vendor unresolved)",
      apd: false,
      cemented: "G2",
      role: "Positive front member of the net-negative movable-control doublet G2.",
    },
    {
      id: 4,
      name: "L5r",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.84,
      fl: -22.116992,
      glass: "648338 — dense-flint class (vendor unresolved)",
      apd: false,
      cemented: "G2",
      role: "Strong negative rear member setting the net-negative power of G2.",
    },
    {
      id: 5,
      name: "L6f",
      label: "Element 5",
      type: "Negative Meniscus, convex to object",
      nd: 1.78472,
      vd: 25.72,
      fl: -51.83896,
      glass: "785257 — dense-flint class (vendor unresolved)",
      apd: false,
      cemented: "G3",
      role: "Negative front member of the rear positive cemented doublet.",
    },
    {
      id: 6,
      name: "L6r",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 23.184192,
      glass: "883408 — high-index lanthanum glass class (vendor unresolved)",
      apd: false,
      cemented: "G3",
      role: "Strong positive rear member completing G3 and the image-side relay.",
    },
  ],

  /* ── Surface prescription: patent Example 2, sharp/infinity base ── */
  surfaces: [
    { label: "1", R: 45.111, d: 9.0, nd: 1.883, elemId: 1, sd: 18.7 },
    { label: "2", R: -130.0, d: 2.5, nd: 1.84666, elemId: 2, sd: 18.7 },
    { label: "3", R: 300.0, d: 8.73, nd: 1.0, elemId: 0, sd: 18.7 },
    { label: "4", R: -60.111, d: 8.0, nd: 1.80518, elemId: 3, sd: 15.0 },
    { label: "5", R: -29.5, d: 5.2, nd: 1.64769, elemId: 4, sd: 15.0 },
    { label: "6", R: 29.777, d: 4.0, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "STO", R: 1e15, d: 2.6, nd: 1.0, elemId: 0, sd: 13.246083 },
    { label: "8", R: 75.555, d: 2.55, nd: 1.78472, elemId: 5, sd: 13.2 },
    { label: "9", R: 26.05, d: 9.0, nd: 1.883, elemId: 6, sd: 13.2 },
    { label: "10", R: -80.111, d: 47.08, nd: 1.0, elemId: 0, sd: 13.2 },
  ],

  asph: {},

  /* ── Published unit-focus movement ── */
  var: {
    "10": [47.08, 57.0],
  },
  varLabels: [["10", "BF"]],

  /* ── Published independent spherical-aberration control ── */
  aberrationControl: {
    label: "S.A.",
    description:
      "Production ring order: OVER maps to patent MINUS at U3=11.730 mm, SHARP uses U3=8.730 mm, " +
      "and UNDER maps to patent PLUS at U3=5.730 mm. Refocus remains independent.",
    minLabel: "OVER",
    centerLabel: "SHARP",
    maxLabel: "UNDER",
    step: 0.001,
    var: {
      "3": [11.73, 8.73, 5.73],
    },
    varLabels: [["3", "U3"]],
  },

  /* ── Group and cemented-doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "3" },
    { text: "G2 (−)", fromSurface: "4", toSurface: "6" },
    { text: "G3 (+)", fromSurface: "8", toSurface: "10" },
  ],
  doublets: [
    { text: "L4", fromSurface: "1", toSurface: "3" },
    { text: "L5", fromSurface: "4", toSurface: "6" },
    { text: "L6", fromSurface: "8", toSurface: "10" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.70008,
  focusDescription:
    "PUBLISHED unit focus — the complete optical assembly translates; BF changes from 47.08 mm at infinity to " +
    "57.00 mm at the 0.70008 m image-plane-referenced close state. The independent S.A. control requires refocusing.",

  /* ── Aperture configuration ── */
  nominalFno: 1.858,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11],
  maxFstop: 11,
  apertureBlades: 9,

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
