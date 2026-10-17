import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — KONICA HEXANON AR 135mm f/3.5                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JPS54-55423A Example 1 (Konishiroku Photo Industry). ║
 * ║  Four-element / four-group all-spherical telephoto objective.      ║
 * ║  Production correlation: late KONICA HEXANON AR 135mm f/3.5.      ║
 * ║  Focus: NO_INTERNAL_RECONSTRUCTION. The patent publishes only     ║
 * ║  the infinity state; production MFD = 1.5 m is metadata only.     ║
 * ║                                                                    ║
 * ║  SCALING: the patent prescription is normalized to f = 1. All     ║
 * ║  dimensional prescription values are scaled uniformly ×135.      ║
 * ║  There are no aspheres, so no A_p scaling is required.            ║
 * ║                                                                    ║
 * ║  IMAGE-PLANE CLOSURE: the patent prints fB = 0.438 f, but the     ║
 * ║  rounded Example 1 surface table computes BFD = 0.438166595 f.    ║
 * ║  Surface 8 therefore uses d = 59.152490 mm so the modeled IMG     ║
 * ║  plane is at the paraxial infinity focus. The source fB value is  ║
 * ║  retained in the audit; no patent surface value was altered.      ║
 * ║                                                                    ║
 * ║  STOP: the patent places the stop 0.067 f behind surface 6. The   ║
 * ║  original d6 = 0.2296 f air gap is split into 9.045 mm to STO and ║
 * ║  21.951 mm from STO to surface 7. The stop radius is derived from ║
 * ║  the design f-number, modeled f/3.5.                              ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: the patent does not publish clear apertures.     ║
 * ║  Glass SDs are inferred from the published optical section,       ║
 * ║  paraxial/exact marginal and chief rays, the 55 mm production     ║
 * ║  filter constraint, and current edge/slope/cross-gap rules.       ║
 * ║  Every default off-axis fan ray at 0.6 × 9° is contained.         ║
 * ║  2026-09-05: L4 enlarged to 13.2 mm from the Fig. 1 rim.         ║
 * ║                                                                    ║
 * ║  GLASS: the patent gives d-line nd/νd only and no vendor names.    ║
 * ║  Generic six-digit/class annotations are used. nC/nF/ng/dPgF are ║
 * ║  intentionally omitted because no source-verified line data are  ║
 * ║  available for the unresolved vendor identities.                  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */
// Manufacturer product metadata: Konica Autoreflex T4 manual, pp. 3 and 77.
// https://butkus.org/chinon/konica/konica_t4/konica_T4_multi-language.pdf

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "konica-hexanon-ar-135mm-f3-5",
  maker: "Konica",
  name: "KONICA HEXANON AR 135mm f/3.5",
  subtitle: "JPS54-55423A Example 1 — scaled ×135; late-production 135mm f/3.5 correlation",

  catalog: {
    lensMounts: ["konica-ar"],
    imageFormat: "135-full-frame",
    specs: ["4 ELEMENTS / 4 GROUPS", "135mm f/3.5", "18° ANGLE OF VIEW", "1.5 m MFD", "55 mm FILTER"],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: { marketing: 135, design: 134.9888190497 },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  source: {
    patentNumber: "JP 1979-055423 A",
    patentYear: 1979,
    authors: ["Toshiko Shimokura"],
    assignees: ["Konishiroku Photo Industry Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      focalLengthMm: 101.545031,
      glass: "516641 — crown class (vendor unresolved)",
      apd: false,
      role: "Front positive collector; the strong object-side curvature supplies the first positive power.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      focalLengthMm: 91.768928,
      glass: "516641 — crown class (vendor unresolved)",
      apd: false,
      role: "Second positive meniscus; together with L1 it forms the strong positive front section.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7618,
      vd: 27.1,
      indexReference: "d",
      focalLengthMm: -32.814296,
      glass: "762271 — dense-flint class (vendor unresolved)",
      apd: false,
      role: "Strong negative meniscus providing the principal negative power of the telephoto layout.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: 113.29065,
      glass: "805254 — dense-flint class (vendor unresolved)",
      apd: false,
      role: "Rear positive meniscus that reconverges the beam after the large negative-group separation.",
      diagramLabel: "L4",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 47.844, d: 5.4945, sd: 21.3, medium: 1 },
    { label: "2", R: 525.5145, d: 0.999, sd: 21.3 },
    { label: "3", R: 32.886, d: 5.4945, sd: 20.1, medium: 2 },
    { label: "4", R: 101.3715, d: 13.7025, sd: 20.1 },
    { label: "5", R: 607.6215, d: 1.998, sd: 13.0, medium: 3 },
    { label: "6", R: 23.976, d: 9.045, sd: 13.0 },
    { label: "STO", R: "flat", d: 21.951 },
    { label: "7", R: 69.282, d: 2.997, sd: 13.2, medium: 4 },
    { label: "8", R: 282.528, d: 59.1524902896, sd: 13.2 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.5,
    description:
      "NO_INTERNAL_RECONSTRUCTION: JPS54-55423A Example 1 publishes only the infinity optical state. The production 1.5 m minimum focus distance is catalog metadata; no focus spacing is modeled.",
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [],
  doublets: [],

  /* ── Layout ── */
  layout: { yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
