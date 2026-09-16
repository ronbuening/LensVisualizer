import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — ALBERT SCHACHT S-TRAVENAR 135mm f/2.8                                 ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: Swiss Patent CH 479 879, Example 1 (Ludwig Bertele; Jürgen Bertele).       ║
 * ║ Patent example normalized at F = 100 mm; every dimensional prescription value      ║
 * ║ is uniformly scaled ×1.35 to the patent's stated 13.5 cm / 24×36 mm form.          ║
 * ║ Four elements / four air-spaced groups; all eight refracting surfaces are spherical.║
 * ║                                                                                      ║
 * ║ STOP MODEL: The patent drawing places the iris in l3 between r6 and r7 but gives   ║
 * ║ no dimension. The model places STO at 40% of the scaled l3 gap after r6, preserving ║
 * ║ l3 = 20.52 mm. STO sd is calibrated so the modeled infinity state is f/2.8.        ║
 * ║ Agreement with f/2.8 is therefore a calibration target, not independent evidence    ║
 * ║ for an unpublished production diaphragm diameter.                                  ║
 * ║                                                                                      ║
 * ║ SEMI-DIAMETERS: No patent SDs are published. The authored SDs are modeled values   ║
 * ║ checked against exact meridional ray sampling and the patent optical section, then  ║
 * ║ checked for edge thickness, actual spherical rim slope, and shared-gap intrusion.   ║
 * ║ Production computeElementRenderDiagnostics() remains an integration-only check.      ║
 * ║                                                                                      ║
 * ║ FOCUS: NO_INTERNAL_RECONSTRUCTION. The patent supplies only one optical state and   ║
 * ║ no authoritative exact-product minimum focus distance has been established. The      ║
 * ║ closeFocusM is an infinity sentinel for this static model, not a product MFD.      ║
 * ║                                                                                      ║
 * ║ PRODUCT CORRELATION: Strong research attribution to the S-Travenar 2,8/135, but no ║
 * ║ manufacturer source located explicitly links CH 479 879 Example 1 to that product.  ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "schacht-s-travenar-135f28",
  maker: "Schacht",
  name: "SCHACHT S-TRAVENAR 135mm f/2.8",
  subtitle: "CH 479 879 Example 1 — 1.35× normalized research correlation",
  specs: [
    "4 ELEMENTS / 4 GROUPS",
    "135 mm f/2.8 marketed",
    "f = 135.0119 mm modeled",
    "24×36 mm; patent field ≈ ±10°",
    "ALL-SPHERICAL",
  ],

  /* ── Marketing / design metadata ── */
  focalLengthMarketing: 135,
  focalLengthDesign: 135.01185447986737,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["m42", "exakta"],
  imageFormat: "135-full-frame",
  patentNumber: "CH 479 879",
  patentAuthors: ["Ludwig Bertele", "Jürgen Bertele"],
  patentAssignees: [],
  patentYear: 1969,
  elementCount: 4,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Positive Element",
      nd: 1.52054,
      vd: 69.7,
      indexReference: "d",
      fl: 133.77975749120597,
      glass: "521697 — phosphate crown (J-PKH1 compatible dispersion proxy; supplier unconfirmed)",
      apd: false,
      role: "Front positive collector; standalone thick-element power is positive.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      fl: 110.83744821384943,
      glass: "620603 — SK16/BSM16 class (supplier unconfirmed)",
      apd: false,
      role: "Positive meniscus curved toward L1, following the patent architecture.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.72151,
      vd: 29.2,
      indexReference: "d",
      fl: -46.933722669846766,
      glass: "722292 — dense flint (catalog-equivalent S-TIH18; supplier unconfirmed)",
      apd: false,
      role: "Strong negative element; its more strongly curved surface faces the image side.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.72825,
      vd: 28.4,
      indexReference: "d",
      fl: 146.44047394276146,
      glass: "728284 — SF10-class dense flint (supplier unconfirmed)",
      apd: false,
      role: "Rear positive element completing the positive-positive-negative-positive power sequence.",
    },
  ],

  /* ── Surface prescription ──
   * Source r1…r8 values and spacings are uniformly scaled ×1.35.
   * STO is the only inserted plane and merely splits the source l3 air gap.
   */
  surfaces: [
    { label: "1", R: 63.0045, d: 5.994, nd: 1.52054, elemId: 1, sd: 27.2 },
    { label: "2", R: 639.9, d: 0.1485, nd: 1.0, elemId: 0, sd: 27.2 },
    { label: "3", R: 46.467, d: 18.2925, nd: 1.62041, elemId: 2, sd: 27.5 },
    { label: "4", R: 121.7025, d: 1.6065, nd: 1.0, elemId: 0, sd: 27.5 },
    { label: "5", R: 360.045, d: 10.395, nd: 1.72151, elemId: 3, sd: 22.6 },
    { label: "6", R: 30.5775, d: 8.208, nd: 1.0, elemId: 0, sd: 22.6 },
    // Figure-based inference: STO at 40% of source l3 after r6; l3 total remains 20.52 mm.
    { label: "STO", R: 1e15, d: 12.312, nd: 1.0, elemId: 0, sd: 13.714051421967275 },
    { label: "7", R: 179.955, d: 3.996, nd: 1.72825, elemId: 4, sd: 18.5 },
    { label: "8", R: -259.335, d: 68.445, nd: 1.0, elemId: 0, sd: 18.5 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [],
  doublets: [],

  /* ── Focus configuration ── */
  // closeFocusM is intentionally omitted: no authoritative exact-product MFD has been established.
  // Static-model sentinel; no source-backed production minimum focus distance is known.
  closeFocusM: 1e15,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — one patent prescription state only; no internal focus motion is modeled.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout ── */
  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
