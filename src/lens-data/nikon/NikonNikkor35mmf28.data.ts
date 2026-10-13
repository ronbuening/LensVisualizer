import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON NEW NIKKOR 35mm f/2.8                                     ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,874,770 A, Example I, Yoshiyuki Shimizu / Nippon Kogaku   ║
 * ║  K.K. Six elements / six air-spaced groups; all spherical.                   ║
 * ║                                                                              ║
 * ║  SCALE: The patent Example I prescription is normalized to f = 100. Every    ║
 * ║  prescription length is uniformly scaled by s = 0.35 to correlate the        ║
 * ║  design with the 35 mm production lens. Indices and Abbe values are          ║
 * ║  unchanged. No aspheric coefficients are present.                            ║
 * ║                                                                              ║
 * ║  IMAGE PLANE: The final d is the Gaussian BFD recomputed from the rounded    ║
 * ║  scaled prescription (37.552305 mm). The linearly scaled printed B.f. is     ║
 * ║  37.551150 mm; the source/model residual is retained in the audit.           ║
 * ║                                                                              ║
 * ║  STOP MODEL: Fig. 1 draws the diaphragm in d6 between L3 and L4 but the      ║
 * ║  patent gives neither a numeric split nor a physical diameter. The scaled    ║
 * ║  6.0277 mm gap is split at its midpoint (3.01385 + 3.01385 mm). The stored   ║
 * ║  stop SD, 7.278 mm, is the radius at which the real axial f/2.8 beam         ║
 * ║  (entrance height 6.250 mm) crosses the stop plane, the same value the       ║
 * ║  application solves from nominalFno. The paraxial equivalent is 7.061 mm.    ║
 * ║  It is not a source measurement of the iris.                                 ║
 * ║                                                                              ║
 * ║  NOTE ON SEMI-DIAMETERS: The patent supplies none. The authored SDs follow   ║
 * ║  the optical rims measured on the patent's Fig. 1 (see the note above        ║
 * ║  LENS_DATA), subject to three limits: the patent's statement that the        ║
 * ║  effective aperture of R1 is at most 0.8 f (SD ≤ 14.0 mm at this scale),     ║
 * ║  the geometry of the narrow L4–L5 air gap (surfaces 8 and 9 meet at 7.40     ║
 * ║  mm; they are held at 7.3 mm with gapSagFrac 0.98), and exact ray            ║
 * ║  clearance. They are modeled clear apertures, not production mechanical      ║
 * ║  dimensions.                                                                 ║
 * ║                                                                              ║
 * ║  FOCUS: Only the infinity prescription is published. `var` and `varLabels`   ║
 * ║  are empty and `closeFocusM = 1e15` marks the lens as infinity-only. The     ║
 * ║  production lens focuses to about 0.3 m and stops down to f/22 (collector    ║
 * ║  references; Nikon's retrospective gives neither); no focus travel is        ║
 * ║  modeled.                                                                    ║
 * ║                                                                              ║
 * ║  GLASS: The patent publishes d-line nd/νd coordinates but no glass names or  ║
 * ║  supplier. Five elements carry catalog-equivalent class labels naming a      ║
 * ║  catalog curve that reproduces the patent coordinate. L5 (1.74443 / 49.4)    ║
 * ║  has no exact catalog match and borrows the dispersion curve of the nearest  ║
 * ║  catalog glass, NBF1 (HOYA; catalog nd 0.0011 lower), while keeping the      ║
 * ║  patent nd/νd. None of the labels asserts the historical Nikon melt or       ║
 * ║  supplier.                                                                   ║
 * ║                                                                              ║
 * ║  PRODUCT CORRELATION: Nikon's own history (NIKKOR — The Thousand and One     ║
 * ║  Nights No. 38) designates the 1975 six-element / six-group lens the "NEW    ║
 * ║  Nikkor 35mm f/2.8". The match of this patent example to that lens is        ║
 * ║  architectural and is not a manufacturer-confirmed patent attribution.       ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

/** Semi-diameters were set from US_3874770_A.pdf, p. 2, Fig. 1 at 400 dpi on 2026-10-05 UTC. The scan is anamorphic
 * (281 × 291 ppi), so the figure gives 27.15 px/mm along the axis and about 26.2 px/mm in height at the 0.35
 * prescription scale. L1 rear, L2, L3 and L6 follow the drawn rims. R1 is capped at the patent's 0.8 f
 * effective-aperture bound (drawn glass rim 14.7 mm). L4 and L5 are drawn 8.3 mm tall with their rims touching, but
 * the prescribed 1.3125 mm air gap closes at 7.40 mm, so the figure is not to scale there: the facing surfaces R8/R9
 * are set to 7.3 mm (just inside contact) and the outer surfaces R7/R10 to 7.6 mm. */
const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-nikkor-35mm-f28",
  maker: "Nikon",
  name: "NIKON NEW NIKKOR 35mm f/2.8",
  subtitle: "US 3,874,770 A Example I — 0.35× scaled production-correlated model",
  specs: ["6 ELEMENTS / 6 GROUPS", "MODELED EFL 35.001 mm", "F/2.8", "62° FIELD", "ALL-SPHERICAL"],

  focalLengthMarketing: 35,
  focalLengthDesign: 35.0005,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,874,770 A",
  patentAuthors: ["Yoshiyuki Shimizu"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1975,
  elementCount: 6,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.51454,
      vd: 54.6,
      indexReference: "d",
      fl: -42.710850915744,
      glass: "515546 — crown flint, KF3 class (KF3 SUMITA coordinate-compatible; supplier unconfirmed)",
      role: "Front negative meniscus (patent lens F) that provides the retrofocus divergence.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      fl: 1184.4870053732664,
      glass:
        "517642 — borosilicate crown, BK7 class (J-BK7A HIKARI / N-BK7 SCHOTT coordinate-compatible; supplier unconfirmed)",
      role: "Thick, weakly positive meniscus (patent lens E) that lengthens the back focus.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      fl: 25.094679974373104,
      glass:
        "713539 — lanthanum crown, LaK8 class (J-LAK8 HIKARI / LAC8 HOYA coordinate-compatible; supplier unconfirmed)",
      role: "Thick biconvex positive (patent lens A) immediately ahead of the diaphragm.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      indexReference: "d",
      fl: -18.936347903761547,
      glass: "717295 — dense flint, SF1 class (J-SF1 HIKARI / SF1 SCHOTT coordinate-compatible; supplier unconfirmed)",
      role: "Biconcave dense-flint negative (patent lens B) directly behind the diaphragm.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.74443,
      vd: 49.4,
      indexReference: "d",
      fl: 36.80134938391843,
      glass: "744494 — lanthanum flint (nearest NBF1 HOYA / S-LAM60 OHARA, Δnd −0.0011; supplier unconfirmed)",
      role: "Positive meniscus (patent lens C), concave toward the diaphragm.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      fl: 63.7481855168902,
      glass:
        "620603 — dense barium crown, SK16 class (J-SK16 HIKARI / S-BSM16 OHARA coordinate-compatible; supplier unconfirmed)",
      role: "Rear biconvex positive (patent lens D).",
    },
  ],

  /* ── Surface prescription ──
   * Source d6 = 17.222 becomes 6.0277 mm after scaling and is preserved as
   * 3.01385 mm before STO + 3.01385 mm after STO.
   */
  surfaces: [
    { label: "1", R: 46.66655, d: 1.9446, nd: 1.51454, elemId: 1, sd: 14.0 },
    { label: "2", R: 14.72905, d: 7.7777, nd: 1.0, elemId: 0, sd: 11.4 },
    { label: "3", R: -90.41655, d: 9.7223, nd: 1.5168, elemId: 2, sd: 11.2 },
    { label: "4", R: -81.66655, d: 0.0973, nd: 1.0, elemId: 0, sd: 11.2 },
    { label: "5", R: 25.5696, d: 13.125, nd: 1.713, elemId: 3, sd: 9.9 },
    { label: "6", R: -46.86115, d: 3.01385, nd: 1.0, elemId: 0, sd: 9.9 },
    { label: "STO", R: 1e15, d: 3.01385, nd: 1.0, elemId: 0, sd: 7.278 },
    { label: "7", R: -20.6598, d: 1.45845, nd: 1.71736, elemId: 4, sd: 7.6 },
    { label: "8", R: 40.83345, d: 1.3125, nd: 1.0, elemId: 0, sd: 7.3 },
    { label: "9", R: -43.26385, d: 2.625, nd: 1.74443, elemId: 5, sd: 7.3 },
    { label: "10", R: -17.20845, d: 0.0973, nd: 1.0, elemId: 0, sd: 7.6 },
    { label: "11", R: 97.2223, d: 2.4304, nd: 1.62041, elemId: 6, sd: 9.3 },
    { label: "12", R: -66.03415, d: 37.55230544567957, nd: 1.0, elemId: 0, sd: 9.3 },
  ],

  asph: {},

  var: {},
  varLabels: [],

  groups: [],
  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 1e15,
  focusDescription:
    "Infinity prescription only. The patent publishes no focusing data, so no focus movement is modelled and no minimum focus distance is specified.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22, // production minimum aperture

  /* ── Layout tuning ── */
  // Fig. 1 draws L4 and L5 rim to rim: surfaces 8 and 9 meet at a 7.40 mm height, so their 7.3 mm rims leave
  // 0.034 mm of the 1.3125 mm air gap. 0.98 admits that near-contact pair without changing the patent spacing.
  gapSagFrac: 0.98,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
