import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║                 LENS DATA — CANON 50mm f/2.8                      ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 2,838,978, sole numerical example (Jiro Mukai).       ║
 * ║  Four elements / three groups; all seven refracting surfaces are   ║
 * ║  spherical.                                                        ║
 * ║                                                                    ║
 * ║  SCALE: The patent is normalized to f=1. Radii, thicknesses,       ║
 * ║  spaces, and inferred semi-diameters are converted ×50. The        ║
 * ║  independently traced EFL is 50.049915 mm.                         ║
 * ║                                                                    ║
 * ║  STOP: The patent states F:2.8 but gives no iris position or       ║
 * ║  diameter. STO is an implementation inference in d4, 2.000 mm     ║
 * ║  behind surface 4 and 1.050 mm before surface 5. Its               ║
 * ║  6.938427 mm semi-diameter is solved paraxially for f/2.8.         ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: The patent omits clear apertures. Values follow    ║
 * ║  the near-uniform element heights drawn in Fig. 1 while clearing   ║
 * ║  the wide-open on-axis bundle and satisfying rim, edge-thickness,  ║
 * ║  element-ratio, and signed cross-gap sag limits. They are not       ║
 * ║  production dimensions or a full-field no-vignetting claim.        ║
 * ║                                                                    ║
 * ║  FOCUS: The patent publishes only one infinity prescription. BF    ║
 * ║  is a conditional rigid-cell paraxial model using Canon's 1.0 m    ║
 * ║  closest-focus specification, not a production-mechanism claim.    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-s-50mm-f2-8",
  maker: "Canon",
  name: "CANON 50mm f/2.8",
  subtitle: "US 2,838,978 — sole numerical example; Canon S 50mm f/2.8 family",
  specs: ["4 ELEMENTS / 3 GROUPS", "EFL 50.0499 mm", "F/2.8", "FULL FIELD 46°", "ALL SPHERICAL"],

  focalLengthMarketing: 50,
  focalLengthDesign: 50.049915,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  // Canon describes the S system as a screw mount; the project taxonomy maps M39 screw mount to leica-ltm.
  lensMounts: ["leica-ltm"],
  imageFormat: "135-full-frame",
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 46,
    maxTraceFieldDeg: 23,
  },
  patentNumber: "US 2,838,978",
  patentAuthors: ["Jiro Mukai"],
  patentAssignees: ["Canon Camera Co., Inc."],
  patentYear: 1958,
  elementCount: 4,
  groupCount: 3,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6583,
      vd: 57.3,
      fl: 29.891974,
      glass: "K-LaK11 (Sumita; 658573 exact coordinate equivalent, original Canon melt not identified)",
      role: "Front positive collector; paired with L4 in the patent's positive-element mean-index condition.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.593,
      vd: 34.3,
      fl: -18.254041,
      glass: "Unmatched (593/343 medium-index flint; nearest public catalog coordinates are non-unique)",
      role: "Strong negative middle component with the stronger concavity toward the image.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.5111,
      vd: 60.6,
      fl: -34.044218,
      glass: "NSL7 (OHARA; 511605 close coordinate equivalent to patent 511606, original Canon melt not identified)",
      role: "Negative front member of the cemented rear component; standalone focal length is diagnostic only.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.691,
      vd: 54.8,
      fl: 16.429628,
      glass: "K-LaK9 (Sumita; 691548 exact coordinate equivalent, original Canon melt not identified)",
      role: "Positive rear member; with L3 forms a +29.014507 mm air-to-air cemented component.",
      cemented: "D1",
    },
  ],

  /* ── Surfaces, object to image ── */
  surfaces: [
    { label: "1", R: 18.95, d: 4.85, nd: 1.6583, elemId: 1, sd: 12.0 },
    { label: "2", R: 460.25, d: 3.6, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "3", R: -37.05, d: 1.35, nd: 1.593, elemId: 2, sd: 10.5 },
    { label: "4", R: 15.5, d: 2.0, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "STO", R: 1e15, d: 1.05, nd: 1.0, elemId: 0, sd: 6.938427449301 },
    { label: "5", R: 1e15, d: 1.05, nd: 1.5111, elemId: 3, sd: 10.5 },
    { label: "6", R: 17.4, d: 6.8, nd: 1.691, elemId: 4, sd: 10.5 },
    { label: "7", R: -27.45, d: 39.542365701133, nd: 1.0, elemId: 0, sd: 10.5 },
  ],

  asph: {},

  /* Conditional rigid-cell focus model; only final image-space distance changes. */
  var: {
    "7": [39.542365701133, 42.337731889886],
  },
  varLabels: [["7", "BF"]],
  focusDescription:
    "Conditional rigid-cell paraxial model to Canon's published 1.0 m closest focus; production mechanism not stated in the patent.",

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "7" },
  ],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  closeFocusM: 1.0,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],
  scFill: 0.62,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
