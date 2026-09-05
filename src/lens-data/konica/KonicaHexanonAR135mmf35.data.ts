import type { LensDataInput } from "../../types/optics.js";

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
 * ║  STOP: the patent places the stop 0.067 f behind surface 6.       ║
 * ║  The original d6 = 0.2296 f air gap is split into 9.045 mm to    ║
 * ║  STO and 21.951 mm from STO to surface 7. Stop SD is solved from ║
 * ║  the modeled f/3.5 entrance pupil: 10.165538 mm.                  ║
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
  key: "konica-hexanon-ar-135mm-f3-5",
  maker: "Konica",
  name: "KONICA HEXANON AR 135mm f/3.5",
  subtitle: "JPS54-55423A Example 1 — scaled ×135; late-production 135mm f/3.5 correlation",
  specs: ["4 ELEMENTS / 4 GROUPS", "135mm f/3.5", "18° ANGLE OF VIEW", "1.5 m MFD", "55 mm FILTER"],

  focalLengthMarketing: 135,
  focalLengthDesign: 134.9888190497,
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["konica-ar"],
  imageFormat: "135-full-frame",
  patentNumber: "JP1979-055423 A",
  patentAuthors: ["Toshiko Shimokura"],
  patentAssignees: ["Konishiroku Photo Industry Co., Ltd."],
  patentYear: 1979,
  elementCount: 4,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      diagramLabel: "L1",
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      fl: 101.545031,
      glass: "516641 — crown class (vendor unresolved)",
      apd: false,
      role: "Front positive collector; the strong object-side curvature supplies the first positive power.",
    },
    {
      id: 2,
      diagramLabel: "L2",
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      fl: 91.768928,
      glass: "516641 — crown class (vendor unresolved)",
      apd: false,
      role: "Second positive meniscus; together with L1 it forms the strong positive front section.",
    },
    {
      id: 3,
      diagramLabel: "L3",
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7618,
      vd: 27.1,
      indexReference: "d",
      fl: -32.814296,
      glass: "762271 — dense-flint class (vendor unresolved)",
      apd: false,
      role: "Strong negative meniscus providing the principal negative power of the telephoto layout.",
    },
    {
      id: 4,
      diagramLabel: "L4",
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      fl: 113.29065,
      glass: "805254 — dense-flint class (vendor unresolved)",
      apd: false,
      role: "Rear positive meniscus that reconverges the beam after the large negative-group separation.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 47.844, d: 5.4945, nd: 1.51633, elemId: 1, sd: 21.3 },
    { label: "2", R: 525.5145, d: 0.999, nd: 1.0, elemId: 0, sd: 21.3 },
    { label: "3", R: 32.886, d: 5.4945, nd: 1.51633, elemId: 2, sd: 20.1 },
    { label: "4", R: 101.3715, d: 13.7025, nd: 1.0, elemId: 0, sd: 20.1 },
    { label: "5", R: 607.6215, d: 1.998, nd: 1.7618, elemId: 3, sd: 13.0 },
    { label: "6", R: 23.976, d: 9.045, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "STO", R: 1e15, d: 21.951, nd: 1.0, elemId: 0, sd: 10.1655384488 },
    { label: "7", R: 69.282, d: 2.997, nd: 1.80518, elemId: 4, sd: 13.2 },
    { label: "8", R: 282.528, d: 59.1524902896, nd: 1.0, elemId: 0, sd: 13.2 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [],
  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 1.5,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: JPS54-55423A Example 1 publishes only the infinity optical state. The production 1.5 m minimum focus distance is catalog metadata; no focus spacing is modeled.",

  /* ── Aperture configuration ── */
  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout ── */
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
