import type { LensDataInput } from "../../types/optics.js";

/**
 * SIGMA 35mm F1.4 DG DN | Art
 *
 * Source patent: JP 2022-33487 A — Numerical Example 1 (Sigma Corporation,
 * inventor Ryo Shioda, filed 17 Aug 2020, published 2 Mar 2022).
 *
 * Production lens identity established by convergent evidence: 15 elements /
 * 11 groups, 2 aspherical surfaces (S7 on L4 front, S25 on L14 front), 4
 * anomalous-partial-dispersion crowns (FLD=L2, ELD=L7, SLD=L8, SLD=L11),
 * single-element focus group (L9). See companion .analysis.md for full
 * verification record (paraxial trace, group focals, conditional expressions,
 * focus-throw conservation — all reproducing the patent prescription to
 * < 0.005 mm).
 *
 * Patent-prescription headline values (Numerical Example 1, infinity focus):
 *   EFL          33.72 mm   (production marketed 35 mm)
 *   F-number     1.46       (production marketed 1.4)
 *   Image height 21.63 mm   (full-frame diagonal/2)
 *   Half field   33.89°     (2ω = 67.78°)
 *   Total length 123.95 mm  (S1 to image plane)
 *   Back focus   20.9607 mm (S27 to image plane)
 * Filter thread (manufacturer): 67 mm.
 *
 * F-number convention: nominalFno = 1.4 (manufacturer-published value, takes
 * precedence per project policy). Patent's design F/1.46 (apertureDesign)
 * yields a slightly smaller marginal-ray cone; semi-diameters in this file
 * are sized for F/1.4 marginal-ray heights to keep the renderer's marginal
 * ray inside every element.
 *
 * Close-focus state: Sigma publishes MFD = 0.30 m. The patent tabulates only
 * one finite-focus state (subject distance 1.47 m). The close-focus var
 * values below are computed by extrapolating the same patent prescription to
 * MFD = 0.30 m (object-to-image plane distance), solving via brentq for the
 * L9 throw that places an on-axis object's image at the constant BF =
 * 20.9607 mm. Result: throw = +6.864 mm, giving d15 = 10.8551 mm and d17 =
 * 5.1830 mm (sum d15 + d17 = 16.0381 mm conserved). All other surfaces and
 * gaps are identical to the infinity prescription. The patent's tabulated
 * 1.47 m state corresponds to throw = +0.9051 mm (~13% of the production
 * lens's full L9 travel). See analysis §5.3 for derivation.
 *
 * Conic constant convention: standard ISO (K = κ − 1, where κ is the conic
 * parameter). Patent specifies K = 0 for both aspheres, so the base is a
 * sphere in either convention. No reinterpretation needed.
 *
 * Aspheric polynomial form: even-order only (A4 through A16). The patent's
 * general form (paragraph [0100]) admits odd orders A3, A5, ..., A15, but
 * Example 1's tabulated data has all odd-order coefficients zero. Renderer's
 * even-order form is used directly with no refit.
 *
 * Cement layers: folded into preceding-element thickness with no 0.01 mm air
 * layer (per project convention). Doublets D1 (L4–L5), D2 (L6–L7), D3
 * (L10–L11), D4 (L14–L15).
 *
 * elemId assignments follow LENS_DATA_SPEC: each element's *front* surface
 * carries its elemId; junction surfaces in cemented groups carry the *next*
 * element's elemId; air-side rear surfaces and the STO carry elemId: 0.
 */

export const sigmaDgDnA35mmF14Data = {
  /* ── Identity ── */
  key: "sigma-35-f14-dgdn-art",
  maker: "Sigma",
  name: "SIGMA 35mm F1.4 DG DN | Art",
  subtitle: "JP 2022-33487 A Example 1 — Sigma / Shioda",
  specs: ["15 ELEMENTS / 11 GROUPS", "f ≈ 33.72 mm (35 mm marketed)", "F/1.4", "2ω ≈ 67.78°", "2 ASPHERICAL SURFACES"],

  /* ── Patent / production metadata ── */
  focalLengthMarketing: 35,
  focalLengthDesign: 33.72,
  apertureMarketing: 1.4,
  apertureDesign: 1.46,
  patentYear: 2022,
  elementCount: 15,
  groupCount: 11,

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription:
    "Inner focus by single-element negative middle group (L9), driven by stepping motor; lens length is fixed during focus and the front element does not rotate.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning (yScFill required, no default) ── */
  yScFill: 0.3,

  /* ── Surface prescription ──
   * 27 optical surfaces, image plane excluded.
   *   R       radius of curvature in mm; 1e15 = flat (the STO).
   *   d       thickness to next surface in mm (or BF for the last surface).
   *   nd      d-line refractive index of the medium *after* this surface;
   *           1.0 = air.
   *   elemId  binds glass-entry surfaces to their element (1..15) and is 0
   *           for every air-side surface and for the STO.
   *   sd      semi-diameter (half clear aperture) in mm. Initial SDs were
   *           solved by an iterative marginal-plus-chief-ray paraxial trace at
   *           F/1.4, then conservatively rebalanced against Sigma's published
   *           optical-section diagram so L1 reads as the largest front
   *           collector, the L2-L8 block steps down, L9 remains visibly
   *           compact, and the final aspheric doublet rises slightly again.
   *           All values are validated against edge-thickness ≥ 0.4 mm and
   *           cross-gap rim sag intrusion ≤ 85% of the centre-axis gap.
   *
   * Surface labels follow patent numbering. Aspherical surfaces use the "A"
   * suffix per project convention; the aperture stop is labeled "STO".
   * Variable gaps (d15 = STO-to-S16, d17 = S17-to-S18) carry their infinity
   * values here; close-focus values appear in the var object below. */
  surfaces: [
    // GFA — L1..L5
    { label: "1", R: 305.0235, d: 2.2, nd: 1.48749, elemId: 1, sd: 22.0 },
    { label: "2", R: 24.7212, d: 14.4681, nd: 1.0, elemId: 0, sd: 21.6 },
    { label: "3", R: -50.0835, d: 1.5, nd: 1.437, elemId: 2, sd: 19.2 },
    { label: "4", R: 76.0889, d: 0.63, nd: 1.0, elemId: 0, sd: 18.9 },
    { label: "5", R: 59.3842, d: 6.8109, nd: 1.881, elemId: 3, sd: 19.6 },
    { label: "6", R: -134.6441, d: 3.9968, nd: 1.0, elemId: 0, sd: 19.2 },
    // L4/L5 cemented doublet (D1); S7 aspherical
    { label: "7A", R: 240.5313, d: 6.4886, nd: 1.7725, elemId: 4, sd: 18.9 },
    { label: "8", R: -43.7781, d: 1.0, nd: 1.5927, elemId: 5, sd: 18.4 },
    { label: "9", R: 58.963, d: 1.1632, nd: 1.0, elemId: 0, sd: 18.1 },

    // GFB — L6..L8
    // L6/L7 cemented doublet (D2)
    { label: "10", R: 46.0805, d: 1.0, nd: 1.6134, elemId: 6, sd: 17.4 },
    { label: "11", R: 25.4742, d: 10.9986, nd: 1.4586, elemId: 7, sd: 18.6 },
    { label: "12", R: -128.5813, d: 0.15, nd: 1.0, elemId: 0, sd: 18.4 },
    { label: "13", R: 54.1975, d: 7.3991, nd: 1.55032, elemId: 8, sd: 18.7 },
    { label: "14", R: -69.1018, d: 1.05, nd: 1.0, elemId: 0, sd: 18.0 },

    // Aperture stop — between L8 and L9, at the GFB / GM boundary
    { label: "STO", R: 1e15, d: 3.9908, nd: 1.0, elemId: 0, sd: 16.22 },

    // GM — L9 (focus element, single biconcave)
    { label: "16", R: -201.4141, d: 0.9, nd: 1.48749, elemId: 9, sd: 13.6 },
    { label: "17", R: 26.6994, d: 12.0473, nd: 1.0, elemId: 0, sd: 13.5 },

    // GRA — L10..L12
    // L10/L11 cemented doublet (D3)
    { label: "18", R: 37.4241, d: 0.85, nd: 1.85451, elemId: 10, sd: 14.8 },
    { label: "19", R: 23.7169, d: 7.4401, nd: 1.55032, elemId: 11, sd: 15.4 },
    { label: "20", R: -202.1596, d: 0.15, nd: 1.0, elemId: 0, sd: 15.2 },
    { label: "21", R: 44.6216, d: 6.0412, nd: 1.95375, elemId: 12, sd: 14.8 },
    { label: "22", R: -81.3192, d: 0.3285, nd: 1.0, elemId: 0, sd: 14.6 },

    // GRB — L13..L15
    { label: "23", R: -163.446, d: 0.9, nd: 1.6134, elemId: 13, sd: 13.8 },
    { label: "24", R: 22.8329, d: 4.026, nd: 1.0, elemId: 0, sd: 13.6 },
    // L14/L15 cemented doublet (D4); S25 aspherical
    { label: "25A", R: 54.8915, d: 6.5602, nd: 1.7725, elemId: 14, sd: 15.0 },
    { label: "26", R: -42.0436, d: 0.9, nd: 1.77047, elemId: 15, sd: 13.9 },
    { label: "27", R: 76.9936, d: 20.9607, nd: 1.0, elemId: 0, sd: 13.2 },
  ],

  /* ── Aspheric coefficients ──
   * Even-order polynomial: z(h) = c·h²/(1 + √(1 − (1+K)·c²·h²)) + Σ A2i·h^(2i)
   * K = 0 means the base is a sphere; A4..A16 are the polynomial departure.
   * Patent's general form admits A3..A15 odd orders, but Example 1 uses none. */
  asph: {
    "7A": {
      K: 0,
      A4: -3.04814e-6,
      A6: 6.39807e-10,
      A8: 4.52327e-13,
      A10: -1.6076e-14,
      A12: 7.81018e-17,
      A14: -1.3303e-19,
      A16: 8.3289e-23,
    },
    "25A": {
      K: 0,
      A4: -4.06671e-6,
      A6: 6.92529e-10,
      A8: -6.11485e-11,
      A10: 6.42866e-13,
      A12: -3.52967e-15,
      A14: 8.54521e-18,
      A16: -6.58266e-21,
    },
  },

  /* ── Variable air gaps ──
   * Each entry [d_inf, d_close] gives the gap at the infinity-focus state
   * and at the close-focus state (closeFocusM = 0.30 m). Sum of the two
   * variable gaps is invariant: d15 + d17 = 16.0381 mm in both states
   * (rigid translation of L9 toward the image plane). */
  var: {
    STO: [3.9908, 10.8551],
    "17": [12.0473, 5.183],
  },

  varLabels: [
    ["STO", "D15"],
    ["17", "D17"],
  ],

  /* ── Functional sub-groups ──
   * Group focal lengths (computed independently against patent to < 0.005 mm,
   * recorded in the analysis): GFA = -83.96, GFB = +37.31, GM = -48.30,
   * GRA = +23.48, GRB = -37.50 mm. The patent's two top-level groups are
   * GF = +34.53 (GFA + GFB) and GR = +45.13 (GRA + GRB). Numbers are kept
   * here as comments because AnnotationData has no focal-length field. */
  groups: [
    { text: "GFA", fromSurface: "1", toSurface: "9" },
    { text: "GFB", fromSurface: "10", toSurface: "14" },
    { text: "GM", fromSurface: "16", toSurface: "17" },
    { text: "GRA", fromSurface: "18", toSurface: "22" },
    { text: "GRB", fromSurface: "23", toSurface: "27" },
  ],

  /* ── Cemented doublets ──
   * fromSurface/toSurface are the outermost (air-facing) surfaces of each
   * cemented group; the cement junction is the surface immediately interior
   * to the front face (S8 in D1, S11 in D2, S19 in D3, S26 in D4) and is
   * identified in the surfaces array by an elemId that jumps to the second
   * element of the pair. */
  doublets: [
    { text: "D1", fromSurface: "7A", toSurface: "9" }, // L4/L5
    { text: "D2", fromSurface: "10", toSurface: "12" }, // L6/L7
    { text: "D3", fromSurface: "18", toSurface: "20" }, // L10/L11
    { text: "D4", fromSurface: "25A", toSurface: "27" }, // L14/L15
  ],

  /* ── Element registry ──
   * label and type are required for inspector display; nd is required and
   * matches the entry-surface refractive index of each element. vd, fl,
   * glass populate the inspector's chromatic-data column. apd: "patent" for
   * the four anomalous-partial-dispersion crowns that Sigma flags as F-/E-
   * /S-LD elements (FLD = L2, ELD = L7, SLD = L8 and L11); other elements
   * are flagged false even when ΔθgF is mildly anomalous, to keep apd
   * aligned with Sigma's marketing taxonomy. dPgF values are computed from
   * the patent's published θgF on the same Schott normal line used in the
   * analysis. cemented tags pair members of each doublet to their group
   * label. */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.44,
      fl: -55.3,
      glass: "HOYA FC5 (487/704)",
      apd: false,
      dPgF: 0.0091,
      role: "Front collector, convex to object; FK-class crown chosen for low mass and mild lateral-CA contribution.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.437,
      vd: 95.1,
      fl: -68.9,
      glass: "HOYA FCD100 (437/951)",
      apd: "patent",
      dPgF: 0.0565,
      role: "FLD — extreme anomalous-dispersion crown; primary load-bearer for lateral-CA correction in GFA.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.881,
      vd: 40.14,
      fl: 47.6,
      glass: "HOYA TAFD33 (881/401)",
      apd: false,
      dPgF: -0.006,
      role: "Strong front-group converger; high index keeps element thin and reduces GFA Petzval contribution.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.7725,
      vd: 49.5,
      fl: 48.4,
      glass: "HOYA M-TAF105 (773/495)",
      apd: false,
      dPgF: -0.0073,
      cemented: "D1",
      role: "Aspherical front of D1 doublet; S7 carries the bulk of front-group high-order spherical-aberration correction.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.45,
      fl: -42.2,
      glass: "Heavy flint, code 593/355 (vendor uncertain)",
      apd: false,
      dPgF: 0.0081,
      cemented: "D1",
      role: "Cemented partner of L4; balances axial CA within the front sub-group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.6134,
      vd: 44.27,
      fl: -94.6,
      glass: "OHARA S-NBM51 (613/443)",
      apd: false,
      dPgF: -0.0053,
      cemented: "D2",
      role: "Negative front of D2, convex to object; offsets L7's strongly positive ΔθgF across the cement junction.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.4586,
      vd: 90.19,
      fl: 47.4,
      glass: "HOYA FCD10A (459/902)",
      apd: "patent",
      dPgF: 0.0492,
      cemented: "D2",
      role: "ELD — anomalous-dispersion crown; cancels secondary spectrum of the D2 cemented pair.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.55032,
      vd: 75.5,
      fl: 56.4,
      glass: "HOYA FCD705 (550/755)",
      apd: "patent",
      dPgF: 0.0276,
      role: "SLD — final converger before the stop; with L7 raises GFB-positive ΔθgF average to +0.0384.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.44,
      fl: -48.3,
      glass: "HOYA FC5 (487/704)",
      apd: false,
      dPgF: 0.0091,
      role: "Sole element of GM — the focus group; FK-class glass chosen for minimum mass on the moving cam.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.85451,
      vd: 25.15,
      fl: -78.0,
      glass: "HOYA NBFD25 (854/252)",
      apd: false,
      dPgF: 0.0072,
      cemented: "D3",
      role: "Achromatising flint of D3, convex to object; very low νd typical for image-side achromats in fast normal-class designs.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.55032,
      vd: 75.5,
      fl: 39.0,
      glass: "HOYA FCD705 (550/755)",
      apd: "patent",
      dPgF: 0.0276,
      cemented: "D3",
      role: "SLD #2 — anomalous-dispersion converger of D3; image-side counterpart to L8.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.95375,
      vd: 32.32,
      fl: 30.9,
      glass: "HOYA TAFD45 / OHARA S-LAH98 (953/323)",
      apd: false,
      dPgF: -0.0001,
      role: "Highest-index lens in the system; carries strong positive power with minimum Petzval contribution.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.6134,
      vd: 44.27,
      fl: -32.6,
      glass: "OHARA S-NBM51 (613/443)",
      apd: false,
      dPgF: -0.0053,
      role: "Entry of GRB; begins back-focus shortening with weak negative power.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.7725,
      vd: 49.5,
      fl: 31.8,
      glass: "HOYA M-TAF105 (773/495)",
      apd: false,
      dPgF: -0.0073,
      cemented: "D4",
      role: "Aspherical front of D4; S25 balances residual SA + coma in the post-stop diverging cone.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.74,
      fl: -35.2,
      glass: "Dense flint, code 770/297 (no exact catalog match)",
      apd: false,
      dPgF: 0.0003,
      cemented: "D4",
      role: "Rear element of the lens; high-index biconcave finishing the back-focus shortening function of GRB.",
    },
  ],
} satisfies LensDataInput;

export default sigmaDgDnA35mmF14Data;
