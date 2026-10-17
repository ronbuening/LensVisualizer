import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  STOP: Figure 1 places the iris inside D6 but gives no numerical split or ║
 * ║  diameter. Its axial position is modeled at 92.5% of D6 from R6 toward R7 ║
 * ║  (R6→STO = 30.673 mm; STO→R7 = 2.487 mm after scaling), estimated from    ║
 * ║  the rendered patent figure. The stop radius is derived from the design   ║
 * ║  f-number, f/3.5. Therefore the reproduced f/3.5 is a calibration target, ║
 * ║  not independent evidence for an unpublished iris diameter.               ║
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
  schema: 2,
  key: "miranda-auto-ec-200mm-f35",
  maker: "Miranda",
  name: "MIRANDA AUTO EC 200mm f/3.5",
  subtitle: "JP1976-114926 Example 1 — 2× production-correlated scale",

  catalog: {
    lensMounts: ["miranda-bayonet"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 5 GROUPS", "f = 200.28 mm", "f/3.5", "2ω ≈ 12°", "ALL-SPHERICAL"],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: { marketing: 200, design: 200.276737 },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  source: {
    patentNumber: "JP S51-114926 A",
    patentYear: 1976,
    authors: ["Kunio Shimada"],
    assignees: ["Miranda Camera Co., Ltd."],
  },

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
      focalLengthMm: 138.1,
      glass: "KF3 (supplier-neutral catalog proxy)",
      role: "Front positive collector.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.0,
      indexReference: "d",
      focalLengthMm: 106.76,
      glass: "S-BSL7 (supplier-neutral catalog proxy)",
      role: "Second positive element in the front positive block.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.72151,
      vd: 29.2,
      indexReference: "d",
      focalLengthMm: -58.01,
      glass: "S-TIH18 (supplier-neutral catalog proxy)",
      role: "Strong negative element completing the positive-power Ernostar-type front block.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.57501,
      vd: 41.4,
      indexReference: "d",
      focalLengthMm: 135.23,
      glass: "S-TIL27 (supplier-neutral catalog proxy)",
      role: "Positive rear-group element immediately behind the stop.",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.6,
      indexReference: "d",
      focalLengthMm: -30.45,
      glass: "K-LaK14 (proxy for inferred nd=1.69680; patent prints 1.59680)",
      role: "Negative component of the cemented rear doublet; modeled using the disclosed index hypothesis.",
      diagramLabel: "L5",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.60342,
      vd: 38.0,
      indexReference: "d",
      focalLengthMm: 47.3,
      glass: "J-F5 (supplier-neutral catalog proxy)",
      role: "Positive component of the cemented rear doublet.",
      diagramLabel: "L6",
      cemented: "D1",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 94.72, d: 8.08, sd: 29.6, medium: 1 },
    { label: "2", R: -276.2, d: 0.12, sd: 29.6 },
    { label: "3", R: 48.06, d: 9.78, sd: 27.6, medium: 2 },
    { label: "4", R: 349.0, d: 7.32, sd: 27.6 },
    { label: "5", R: -333.0, d: 6.74, sd: 23.1, medium: 3 },
    { label: "6", R: 48.28, d: 30.673, sd: 23.1 },
    // STO position inferred from Figure 1; the two adjacent gaps sum to the scaled D6 = 33.16 mm.
    { label: "STO", R: "flat", d: 2.487 },
    { label: "7", R: -182.0, d: 4.02, sd: 16.6, medium: 4 },
    { label: "8", R: -54.92, d: 25.84, sd: 16.6 },
    { label: "9", R: -40.04, d: 1.34, sd: 12.8, medium: 5 },
    // Cemented L5→L6 interface: downstream element L6 owns the junction medium and elemId.
    { label: "10", R: 45.76, d: 3.52, sd: 13.4, medium: 6 },
    { label: "11", R: -73.64, d: 57.96, sd: 13.4 },
  ],

  focus: {
    closeFocusM: 2.5,
    description:
      "NO_INTERNAL_RECONSTRUCTION — manufacturer MFD is 2.5 m, but JP1976-114926 publishes only one static Example 1 prescription; no internal focus motion is modeled.",
  },

  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [],
  doublets: [{ text: "D1", fromSurface: "9", toSurface: "11" }],

  layout: { yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
