import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — MIRANDA AUTO EC 200mm f/3.5                                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP1976-114926, Example 1 (Miranda Camera Co., Ltd.).         ║
 * ║  Six elements in five groups; all surfaces are spherical.                 ║
 * ║  Focus: NO_INTERNAL_RECONSTRUCTION. The patent publishes one static state. ║
 * ║                                                                            ║
 * ║  SCALING: The patent example is normalized to f = 100. All radii, axial   ║
 * ║  spacings, semi-diameters, and the image-plane coordinate are scaled ×2.  ║
 * ║  There are no aspherical coefficients to transform.                       ║
 * ║                                                                            ║
 * ║  SOURCE CORRECTION: Example 1 prints N5 = 1.59680. The implemented model  ║
 * ║  uses N5 = 1.69680 because the raw value contradicts the patent's EFL,    ║
 * ║  BFD, and Petzval result, while 1.69680 restores all three and matches a   ║
 * ║  known 697556 lanthanum-crown coordinate. The raw 1.59680 is preserved in ║
 * ║  the Stage 2 evidence/audit dossier and is not silently overwritten.       ║
 * ║                                                                            ║
 * ║  STOP: Figure 1 places the iris inside D6 but gives no numerical split or  ║
 * ║  diameter. Its axial position is modeled at 92.5% of D6 from R6 toward R7 ║
 * ║  (R6→STO = 30.673 mm; STO→R7 = 2.487 mm after scaling), estimated from    ║
 * ║  the rendered patent figure. The physical stop SD is calibrated so the    ║
 * ║  paraxial entrance pupil gives f/3.5. Therefore the reproduced f/3.5 is a ║
 * ║  calibration target, not independent evidence for an unpublished iris     ║
 * ║  diameter.                                                                 ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: The patent publishes none. Modeled SDs clear the complete ║
 * ║  on-axis f/3.5 bundle and the current default off-axis pupil samples at    ║
 * ║  ±3.6°. A stricter supplemental ±0.83/±0.50/±0.17 pupil set also clears.  ║
 * ║  Current edge-thickness, rim-slope, and shared-gap checks pass. At the     ║
 * ║  full 6° field, extreme pupil zones are mechanically vignetted; the chief ║
 * ║  ray and representative surviving pupil zones remain contained.           ║
 * ║                                                                            ║
 * ║  PRODUCT CORRELATION: The 2× model is strongly correlated with the        ║
 * ║  Miranda Auto EC 200mm f/3.5, but the patent-to-production attribution is ║
 * ║  not manufacturer-confirmed. The current taxonomy has no Miranda mount ID,║
 * ║  so lensMounts is intentionally omitted.                                  ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "miranda-auto-ec-200mm-f35",
  maker: "Miranda",
  name: "MIRANDA AUTO EC 200mm f/3.5",
  subtitle: "JP1976-114926 Example 1 — 2× production-correlated scale",
  specs: ["6 ELEMENTS / 5 GROUPS", "f = 200.28 mm", "f/3.5", "2ω ≈ 12°", "ALL-SPHERICAL"],

  focalLengthMarketing: 200,
  focalLengthDesign: 200.276737,
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  imageFormat: "135-full-frame",
  patentNumber: "JP S51-114926 A",
  patentAuthors: ["Kunio Shimada"],
  patentAssignees: ["Miranda Camera Co., Ltd."],
  patentYear: 1976,
  elementCount: 6,
  groupCount: 5,

  /* ── Physical glass elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.51454,
      vd: 54.6,
      indexReference: "d",
      fl: 138.1,
      glass: "KF3 — supplier-neutral catalog proxy; patent nd/vd retained, production identity unproven",
      role: "Front positive collector.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.0,
      indexReference: "d",
      fl: 106.76,
      glass: "S-BSL7 — supplier-neutral catalog proxy; patent nd/vd retained, production identity unproven",
      role: "Second positive element in the front positive block.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.72151,
      vd: 29.2,
      indexReference: "d",
      fl: -58.01,
      glass: "S-TIH18 — supplier-neutral catalog proxy; patent nd/vd retained, production identity unproven",
      role: "Strong negative element completing the positive-power Ernostar-type front block.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.57501,
      vd: 41.4,
      indexReference: "d",
      fl: 135.23,
      glass: "S-TIL27 — supplier-neutral catalog proxy; patent nd/vd retained, production identity unproven",
      role: "Positive rear-group element immediately behind the stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.6,
      indexReference: "d",
      fl: -30.45,
      glass: "K-LaK14 — proxy for the disclosed inferred 1.69680/55.6 correction, not the printed 1.59680; production identity unproven",
      cemented: "D1",
      role: "Negative component of the cemented rear doublet; corrected source index.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.60342,
      vd: 38.0,
      indexReference: "d",
      fl: 47.3,
      glass: "J-F5 — supplier-neutral catalog proxy; patent nd/vd retained, production identity unproven",
      cemented: "D1",
      role: "Positive component of the cemented rear doublet.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 94.72, d: 8.08, nd: 1.51454, elemId: 1, sd: 29.6 },
    { label: "2", R: -276.2, d: 0.12, nd: 1.0, elemId: 0, sd: 29.6 },
    { label: "3", R: 48.06, d: 9.78, nd: 1.51633, elemId: 2, sd: 27.6 },
    { label: "4", R: 349.0, d: 7.32, nd: 1.0, elemId: 0, sd: 27.6 },
    { label: "5", R: -333.0, d: 6.74, nd: 1.72151, elemId: 3, sd: 23.1 },
    { label: "6", R: 48.28, d: 30.673, nd: 1.0, elemId: 0, sd: 23.1 },
    // STO position inferred from Figure 1; the two adjacent gaps sum to the scaled D6 = 33.16 mm.
    { label: "STO", R: 1e15, d: 2.487, nd: 1.0, elemId: 0, sd: 15.310159 },
    { label: "7", R: -182.0, d: 4.02, nd: 1.57501, elemId: 4, sd: 16.6 },
    { label: "8", R: -54.92, d: 25.84, nd: 1.0, elemId: 0, sd: 16.6 },
    { label: "9", R: -40.04, d: 1.34, nd: 1.6968, elemId: 5, sd: 12.8 },
    // Cemented L5→L6 interface: downstream element L6 owns the junction medium and elemId.
    { label: "10", R: 45.76, d: 3.52, nd: 1.60342, elemId: 6, sd: 13.4 },
    { label: "11", R: -73.64, d: 57.96, nd: 1.0, elemId: 0, sd: 13.4 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [],
  doublets: [{ text: "D1", fromSurface: "9", toSurface: "11" }],

  closeFocusM: 2.5,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — manufacturer MFD is 2.5 m, but JP1976-114926 publishes only one static Example 1 prescription; no internal focus motion is modeled.",

  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
