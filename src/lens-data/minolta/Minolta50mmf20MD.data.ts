import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — MINOLTA MD 50mm f/2                                          ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US Patent 4,444,473, Example 5 (Yoshinobu Kudo / Minolta).   ║
 * ║  Six elements in five groups; all spherical.                               ║
 * ║  Production attribution is a strong correlation, not manufacturer-confirmed║
 * ║  provenance for Example 5.                                                  ║
 * ║                                                                              ║
 * ║  SCALE: the patent is normalized to f=100. Every prescription length is     ║
 * ║  scaled ×0.5. The rounded prescription computes EFL ≈ 50.010484655 mm.      ║
 * ║                                                                              ║
 * ║  STOP: the patent publishes FNo=2.0 but no stop plane or diameter. FIG. 9   ║
 * ║  leaves the central d6 air gap undimensioned internally. This model places  ║
 * ║  STO at the axial midpoint of d6, splitting the scaled 11.355 mm gap into   ║
 * ║  5.6775 + 5.6775 mm. STO sd=8.8005010383 mm is calibrated from the parsed  ║
 * ║  prescription to a paraxial entrance-pupil radius of 12.5026211637 mm, so   ║
 * ║  the modeled f-number is 2.0. That match is calibration to the published    ║
 * ║  FNo, not independent evidence for a physical diaphragm diameter.           ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS: the patent publishes none. These are modeled clear radii.  ║
 * ║  They contain the full on-axis f/2 pupil and the current visible off-axis    ║
 * ║  sample at 0.60 × 23° = 13.8° with the default ±0.75 pupil fractions, with ║
 * ║  approximately 0.27–0.40 mm ray clearance. The full 23° chief ray is also   ║
 * ║  contained. They are not claimed as production mechanical clear apertures.  ║
 * ║                                                                              ║
 * ║  FOCUS: NO_INTERNAL_RECONSTRUCTION. The 0.45 m product MFD is retained as   ║
 * ║  metadata only; no internal spacing law is invented.                        ║
 * ║                                                                              ║
 * ║  INDEX REFERENCE: d-line nd/νd is a catalog-supported inference because the ║
 * ║  patent labels only N and V. No nC/nF/ng/dPgF fields are source-supported.  ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "minolta-md-50f2",
  maker: "Minolta",
  name: "MINOLTA MD 50mm f/2",
  subtitle: "US 4,444,473 — Example 5; ×0.5 scaled production correlation",
  specs: ["6 ELEMENTS / 5 GROUPS", "50 mm f/2", "PATENT 2ω = 46°", "ALL-SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 50,
  focalLengthDesign: 50.01048465488426,
  apertureMarketing: 2,
  apertureDesign: 2,
  lensMounts: ["minolta-sr"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,444,473",
  patentAuthors: ["Yoshinobu Kudo"],
  patentAssignees: ["Minolta Camera Co., Ltd."],
  patentYear: 1984,
  elementCount: 6,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.3,
      indexReference: "d",
      fl: 58.54762202530402,
      glass: "720503 — lanthanum-crown coordinate class (supplier unresolved)",
      role: "Front positive meniscus of the modified Gauss system.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.3,
      indexReference: "d",
      fl: 58.82738749819431,
      glass: "720503 — lanthanum-crown coordinate class (supplier unresolved)",
      role: "Second positive meniscus ahead of the central negative element.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.683,
      vd: 32.1,
      indexReference: "d",
      fl: -28.57503966078423,
      glass: "Unmatched (683321 coordinate; supplier unresolved)",
      role: "Negative third element bordering the patent-defined L2/L3 air lens.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6545,
      vd: 33.9,
      indexReference: "d",
      fl: -22.138720329924645,
      glass: "SF9 — coordinate-compatible dense-flint spectral proxy; supplier unspecified",
      role: "Negative front member of the cemented fourth unit.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 52.1,
      indexReference: "d",
      fl: 26.487813122917306,
      glass: "Unmatched (720521 coordinate; supplier unresolved)",
      role: "Positive rear member of the cemented fourth unit.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-Convex Positive",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      fl: 51.478494623655905,
      glass: "744449 — lanthanum-flint coordinate class (supplier unresolved)",
      role: "Rear positive element with a plane object-side surface.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 36.865, d: 4.015, nd: 1.72, elemId: 1, sd: 14 },
    { label: "2", R: 280.41, d: 0.16, nd: 1, elemId: 0, sd: 13.5 },
    { label: "3", R: 19.66, d: 4.295, nd: 1.72, elemId: 2, sd: 11.8 },
    { label: "4", R: 33.335, d: 0.95, nd: 1, elemId: 0, sd: 10.8 },
    { label: "5", R: 54.965, d: 1.53, nd: 1.683, elemId: 3, sd: 10.7 },
    { label: "6", R: 14.24, d: 5.6775, nd: 1, elemId: 0, sd: 9.3 },
    { label: "STO", R: 1e15, d: 5.6775, nd: 1, elemId: 0, sd: 8.800501038341343 },
    { label: "7", R: -15.985, d: 2.18, nd: 1.6545, elemId: 4, sd: 8.8 },
    { label: "8", R: 163.265, d: 4.4, nd: 1.72, elemId: 5, sd: 9.8 },
    { label: "9", R: -21.35, d: 0.16, nd: 1, elemId: 0, sd: 10.4 },
    { label: "10", R: 1e15, d: 2.855, nd: 1.744, elemId: 6, sd: 11.1 },
    { label: "11", R: -38.3, d: 36.005, nd: 1, elemId: 0, sd: 11.3 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.45,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — static scaled Example 5; marketed 0.45 m MFD only, with no internal focus law.",

  /* ── Aperture configuration ── */
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout tuning ── */
  yScFill: 0.36,
} satisfies LensDataInput;

export default LENS_DATA;
