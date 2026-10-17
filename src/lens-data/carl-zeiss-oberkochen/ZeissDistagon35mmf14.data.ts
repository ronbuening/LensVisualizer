import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CARL ZEISS DISTAGON T* 35mm f/1.4            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * Data source: US 3,915,558 Example 8 (Erhard Glatzel / Carl Zeiss Stiftung),
 * the f/1.4 achromatized embodiment drawn schematically in FIGS. 4 and 4a.
 * 9 elements / 8 groups, 1 aspherical surface (front of component 5).
 *
 * NOTE ON SCALING:
 *   The patent table is normalized to F = 1.0000. Every R, d, sd and the
 *   back focus are scaled uniformly by s = 36.5 (production focal length as
 *   quoted in the analysis); A4 is divided by s³. Paraxial EFL at this
 *   scale = 36.499 mm, BFD = 35.975 mm (patent s' = 0.98567F → 35.977 mm).
 *
 * NOTE ON THE STOP:
 *   The table gives only the diaphragm space S4 = 0.23576F = CS (8.605 mm).
 *   FIGS. 4 and 4a both draw the diaphragm about 0.69 of the way from the
 *   L4 rear vertex to the L5 front vertex, so the model splits CS as
 *   5.9 + 2.705 mm (inferred from the schematic figures, not tabulated).
 *   This also keeps the stop plane behind the L4 rear-surface rim (5.54 mm
 *   sag at its 17.5 mm rim).
 *
 * NOTE ON FOCUS:
 *   The patent publishes infinity data only. The production lens has
 *   close-range (floating) correction, but its travel is not disclosed, so
 *   the model uses a calculated unit-focus extension: the whole lens moves
 *   7.083 mm forward for a 0.3 m object-to-image distance (β ≈ −0.194).
 *
 * NOTE ON SEMI-DIAMETERS:
 *   The patent publishes no diameters and states its drawings are not to
 *   scale. SDs are set from an exact f/1.4 axial and 31.1° full-field
 *   meridional trace; FIG. 4 is used only for relative proportions (rear
 *   member ≈ 0.6 of the front element). The L5 rear / L6 front air lens
 *   closes to ≈ 0.016 mm at the 13.80 mm f/1.4 marginal-ray height, so
 *   those rims sit at 13.8 mm with gapSagFrac: 1. Front element SDs are
 *   retained estimates (capped by the 67 mm filter thread).
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "zeiss-distagon-35f14",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS DISTAGON T* 35mm f/1.4",
  subtitle: "US 3,915,558 EXAMPLE 8 — CARL ZEISS STIFTUNG / GLATZEL",

  catalog: {
    lensMounts: ["contax-yashica"],
    imageFormat: "135-full-frame",
    specs: ["9 ELEMENTS / 8 GROUPS", "f ≈ 36.5 mm", "F/1.4", "2ω ≈ 62°", "1 ASPHERICAL SURFACE"],
    elementCount: 9,
    groupCount: 8,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: 35, design: 36.5 },
    fNumber: { marketing: 1.4 },
  },

  source: {
    patentNumber: "US 3,915,558",
    patentYear: 1975,
    authors: ["Erhard Glatzel"],
    assignees: ["Carl-Zeiss-Stiftung"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5827,
      vd: 46.5,
      focalLengthMm: -65.6,
      glass:
        "BAF3 catalog equivalent (583/465 barium-flint class; J-BAF3 spectral row; production supplier unspecified)",
      apd: false,
      role: "Front negative diverger — expands the beam to establish the retrofocus geometry. Meniscus convex toward the object, strongly concave toward the image.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.5481,
      vd: 45.8,
      focalLengthMm: -222.6,
      glass: "LLF1 catalog equivalent (Schott 548/458; production supplier unspecified)",
      apd: false,
      role: "Secondary weak negative meniscus, convex toward the object — shares the front-group negative power with L1 for higher-order aberration control.",
    },
    {
      id: 3,
      name: "L3a",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: 60.1,
      glass: "N-LAK8 catalog equivalent (historical LaK8 family; production supplier unspecified)",
      apd: false,
      role: "Dominant positive converger — front element of split component III, carrying strongest positive power in the system.",
    },
    {
      id: 4,
      name: "L3b",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: 111.9,
      glass: "N-LAK8 catalog equivalent (historical LaK8 family; production supplier unspecified)",
      apd: false,
      role: "Rear element of split component III — air-spaced from L3a to create ray-height separation for off-axis aberration correction.",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: 258.6,
      glass: "N-LAK8 catalog equivalent (historical LaK8 family; production supplier unspecified)",
      apd: false,
      role: "Von Hoegh meniscus (component M) — weak positive meniscus convex toward front, provides astigmatism and field curvature control.",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 6",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.5481,
      vd: 45.8,
      focalLengthMm: -64.3,
      glass: "LLF1 catalog equivalent (Schott 548/458; production supplier unspecified)",
      apd: false,
      role: "First element of rear member — aspherical front surface corrects zonal spherical aberration at f/1.4. Low-index glass per claim 1 conditions (f) and (g).",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.8467,
      vd: 23.8,
      focalLengthMm: -27.4,
      glass: "SF57 catalog equivalent (Schott 847/238 class; production supplier unspecified)",
      apd: false,
      role: "Achromatic flint — high-dispersion element of the cemented doublet, provides primary chromatic correction in the rear member.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.7883,
      vd: 47.4,
      focalLengthMm: 27.1,
      glass: "N-LAF21 catalog equivalent (historical LaF21 788/474 family; production supplier unspecified)",
      apd: false,
      role: "Achromatic crown — low-dispersion positive element of the cemented doublet. Cemented to L6 to avoid total internal reflection at f/1.4.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.7883,
      vd: 47.4,
      focalLengthMm: 59.7,
      glass: "N-LAF21 catalog equivalent (historical LaF21 788/474 family; production supplier unspecified)",
      apd: false,
      role: "Final positive converger — nearly plano-convex, bends rays to final convergence and sets the long back focus (s′/F = 0.986).",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ──
   *  Patent sag form: P(H) = c₁H² + c₂H⁴  (c₃=c₄=c₅=0)
   *  where c₁ = 1/(2R), c₂ = −7.9340850×10⁻¹ (normalized F=1).
   *  Converted to standard conic+polynomial with K=0 (spherical base curve):
   *    A₄ = c₂ − 1/(8R³) = −0.7930 (normalized) → −1.631×10⁻⁵ mm⁻³ (scaled)
   */
  surfaces: [
    { label: "1", R: 304.136, d: 2.309, sd: 28.5, medium: 1 }, // L1 front
    { label: "2", R: 33.876, d: 11.919, sd: 28.0 }, // L1 rear → air
    { label: "3", R: 48.549, d: 3.374, sd: 25.0, medium: 2 }, // L2 front
    { label: "4", R: 33.876, d: 12.23, sd: 24.5 }, // L2 rear → air (α)
    { label: "5", R: 47.508, d: 6.778, sd: 22.0, medium: 3 }, // L3a front
    { label: "6", R: -411.465, d: 3.032, sd: 21.5 }, // L3a rear → air
    { label: "7", R: -1736.122, d: 4.92, sd: 21.5, medium: 4 }, // L3b front
    { label: "8", R: -76.387, d: 0.05, sd: 21.0 }, // L3b rear → air (S3b = 0.00138F = 0.0504)
    { label: "9", R: 28.503, d: 6.708, sd: 20.5, medium: 5 }, // L4 front (meniscus)
    { label: "10", R: 30.412, d: 5.9, sd: 17.5 }, // L4 rear → CS (S4 = 8.605 split 5.9 + 2.705)
    { label: "STO", R: "flat", d: 2.705 }, // Aperture stop (position from FIGS. 4/4a proportion)
    { label: "11A", R: -252.215, d: 2.47, sd: 15.3, medium: 6, asphere: { K: 0, A4: -1.6308e-5, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 } }, // L5 front (ASPHERICAL)
    { label: "12", R: 41.139, d: 4.659, sd: 13.8 }, // L5 rear → air (rims meet L6 at f/1.4 marginal)
    { label: "13", R: -43.267, d: 1.617, sd: 13.8, medium: 7 }, // L6 front
    { label: "14", R: 51.053, d: 7.27, sd: 15.0, medium: 8 }, // L6–L7 cement junction
    { label: "15", R: -34.368, d: 0.623, sd: 15.5 }, // L7 rear → air
    { label: "16", R: 322.113, d: 3.846, sd: 15.5, medium: 9 }, // L8 front
    { label: "17", R: -54.857, sd: 15.0 }, // L8 rear → BFD
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.3,
    description:
      "Calculated unit focus: the whole lens extends 7.08 mm for 0.3 m. The patent gives infinity data only; the production floating close-range correction is not modeled.",
  },

  /* (moved from var) ── Variable air spacings ──
   *  Patent provides infinity-focus data only. The production lens has
   *  floating close-range correction, but no close-focus spacings are
   *  published, so the model uses a calculated unit-focus extension:
   *  35.977 → 43.06 mm puts the object 300.0 mm from the image plane.
   */
  gaps: { "17": { label: "BF", values: [[35.977, 43.06]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.4, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (V)", fromSurface: "1", toSurface: "10" },
    { text: "REAR (H)", fromSurface: "11A", toSurface: "17" },
  ],
  doublets: [{ text: "D1", fromSurface: "13", toSurface: "15" }],

  layout: { scFill: 0.48, yScFill: 0.36 },

  /* ── Layout tuning ── */
  checks: {
    gapSagFrac: 1, // L5 rear / L6 front rims meet (≈0.016 mm clearance) at the 13.80 mm f/1.4 marginal-ray height
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
