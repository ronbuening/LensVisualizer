import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  5.6775 + 5.6775 mm. The stop radius is derived from the design f-number.   ║
 * ║  The former paraxial calibration gave an entrance-pupil radius of           ║
 * ║  12.5026211637 mm and modeled f/2.0. That match is calibration to the       ║
 * ║  published FNo, not independent evidence for a physical diaphragm diameter. ║
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
  schema: 2,
  key: "minolta-md-50f2",
  maker: "Minolta",
  name: "MINOLTA MD 50mm f/2",
  subtitle: "US 4,444,473 — Example 5; ×0.5 scaled production correlation",

  catalog: {
    lensMounts: ["minolta-sr"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 5 GROUPS", "50 mm f/2", "PATENT 2ω = 46°", "ALL-SPHERICAL"],
    elementCount: 6,
    groupCount: 5,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 50, design: 50.01048465488426 },
    fNumber: { marketing: 2, design: 2 },
  },

  source: {
    patentNumber: "US 4,444,473",
    patentYear: 1984,
    authors: ["Yoshinobu Kudo"],
    assignees: ["Minolta Camera Co., Ltd."],
  },

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
      focalLengthMm: 58.54762202530402,
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
      focalLengthMm: 58.82738749819431,
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
      focalLengthMm: -28.57503966078423,
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
      focalLengthMm: -22.138720329924645,
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
      focalLengthMm: 26.487813122917306,
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
      focalLengthMm: 51.478494623655905,
      glass: "744449 — lanthanum-flint coordinate class (supplier unresolved)",
      role: "Rear positive element with a plane object-side surface.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 36.865, d: 4.015, sd: 14, medium: 1 },
    { label: "2", R: 280.41, d: 0.16, sd: 13.5 },
    { label: "3", R: 19.66, d: 4.295, sd: 11.8, medium: 2 },
    { label: "4", R: 33.335, d: 0.95, sd: 10.8 },
    { label: "5", R: 54.965, d: 1.53, sd: 10.7, medium: 3 },
    { label: "6", R: 14.24, d: 5.6775, sd: 9.3 },
    { label: "STO", R: "flat", d: 5.6775 },
    { label: "7", R: -15.985, d: 2.18, sd: 8.8, medium: 4 },
    { label: "8", R: 163.265, d: 4.4, sd: 9.8, medium: 5 },
    { label: "9", R: -21.35, d: 0.16, sd: 10.4 },
    { label: "10", R: "flat", d: 2.855, sd: 11.1, medium: 6 },
    { label: "11", R: -38.3, d: 36.005, sd: 11.3 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.45,
    description:
      "NO_INTERNAL_RECONSTRUCTION — static scaled Example 5; marketed 0.45 m MFD only, with no internal focus law.",
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2, fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.36 },
} satisfies LensDataV2Input;

export default LENS_DATA;
