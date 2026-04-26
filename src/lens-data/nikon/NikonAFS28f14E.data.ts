import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON AF-S NIKKOR 28mm f/1.4E ED                 ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP2017-227799A Example 1 (Konica Minolta / Nikon).       ║
 * ║  Positive-positive 2-group wide-angle for F-mount SLR.                 ║
 * ║  14 elements / 11 groups, 4 aspherical surfaces (3 elements).          ║
 * ║  Focus: Rear-group (Gr2) unit focus — Gr2 moves toward object.         ║
 * ║                                                                        ║
 * ║  NOTE ON ELEMENT COUNT:                                                ║
 * ║    The patent counts L12 (glass substrate + UV-curing resin layer)     ║
 * ║    as one element (compound aspherical lens, resin ≤1 mm).  The data   ║
 * ║    file models it as two element entries (id 2 = glass, id 3 = resin)  ║
 * ║    to represent the glass-resin junction surface.  Total element       ║
 * ║    entries: 15.  Patent element count: 14.                             ║
 * ║                                                                        ║
 * ║  NOTE ON SEMI-DIAMETERS:                                               ║
 * ║    SDs estimated from paraxial marginal + chief ray trace at full      ║
 * ║    field (2ω = 75.42°) with ~8% mechanical clearance, then rebalanced  ║
 * ║    surface-by-surface against the patent / Nikon construction-diagram  ║
 * ║    silhouette. Patent does not list semi-diameters. L11 front         ║
 * ║    (S1 = 33 mm) remains consistent with the 77 mm filter-thread spec. ║
 * ║    Mid- and rear-group SDs taper more aggressively than the raw        ║
 * ║    clearance estimate to match the published profile while preserving  ║
 * ║    validation margins and modest natural vignetting at f/1.4.         ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-afs-28f14e",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 28mm f/1.4E ED",
  subtitle: "JP2017-227799A EX1 — Konica Minolta / Nikon",
  specs: [
    "14 ELEMENTS / 11 GROUPS",
    "f ≈ 28.4 mm",
    "F/1.45",
    "2ω ≈ 75.4°",
    "4 ASPHERICAL SURFACES (3 ELEMENTS)",
    "2 ED ELEMENTS (S-FPM2)",
  ],

  focalLengthMarketing: 28,
  focalLengthDesign: 28.4,
  apertureMarketing: 1.4,
  apertureDesign: 1.45,
  patentYear: 2017,
  elementCount: 14,
  groupCount: 11,

  /* ── Elements ──
   *  15 entries for 14 patent elements (L12 compound asphere = 2 entries).
   *  Glass identifications: inferential, matched by nd/νd against OHARA catalog.
   */
  elements: [
    // ── Group 1 (Gr1): Front group, fixed during focus ──
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.68893,
      vd: 31.2,
      fl: -74.6,
      glass: "S-TIH18 (OHARA)",
      apd: false,
      role: "Front negative meniscus, convex to object. First of the double-negative entry pair — gently bends wide-angle rays inward to begin the retrofocal beam divergence. Meniscus shape minimizes angle of incidence on the front surface.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2 (glass)",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.9,
      fl: -67.3,
      glass: "S-BAL42 (OHARA)",
      apd: false,
      cemented: "L12c",
      role: "Glass substrate of the compound aspherical element. Convex-to-object meniscus continuing the beam divergence. Rear surface bonds to the UV-curing resin layer.",
    },
    {
      id: 3,
      name: "L12r",
      label: "Element 2 (resin)",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.5138,
      vd: 53.0,
      fl: -367.5,
      glass: "UV-curing resin (composite)",
      apd: false,
      cemented: "L12c",
      role: "Thin resin layer (0.05 mm center thickness) forming the aspherical image-side surface (S5A, K = −1.81). Provides primary correction of distortion and field curvature across the 75° field. Compound L12 focal length ≈ −57 mm.",
    },
    {
      id: 4,
      name: "L13",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      fl: 86.2,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Strong positive element in very high-dispersion glass. Partially cancels negative distortion of L11–L12 and converges the diverging beam. The very high index (nd = 1.847) keeps curvatures mild despite strong power, reducing spherical aberration. Satisfies patent condition (6): Nd13 > 1.8.",
    },
    {
      id: 5,
      name: "L14",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.56883,
      vd: 56.0,
      fl: -60.83,
      glass: "S-BAL2 (OHARA)",
      apd: false,
      cemented: "LS",
      role: "Negative component of the L14/L15 field-flattening cemented doublet (LS). Contributes negative Petzval sum to flatten the image surface. Power governed by condition (1): φ14/φ = −0.47.",
    },
    {
      id: 6,
      name: "L15",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 112.04,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "LS",
      role: "Positive component of cemented doublet LS. High index (nd = 1.883) keeps the cemented-interface curvature gentle. Governed by condition (2): φ15/φ = +0.25. Doublet composite: f = −137.4 mm. Satisfies condition (4): Nd15 > 1.8.",
    },
    {
      id: 7,
      name: "L16",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 54.29,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Terminal positive element of Gr1 (f₁ᵢ = 54.29 mm). Converges beam to reduce ray heights entering Gr2, enabling compact focus group. Drives Gr1 toward afocal condition (f₁ = +151 mm), stabilizing aberration across the focus range.",
    },

    // ── Group 2 (Gr2): Rear group, moves as unit for focus ──
    {
      id: 8,
      name: "L21",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      fl: 93.9,
      glass: "S-LAL14 (OHARA)",
      apd: false,
      role: "First element of Gr2. Gently converges beam entering the rear group, sharing positive power burden with L22 to minimize spherical aberration.",
    },
    {
      id: 9,
      name: "L22",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      fl: 93.8,
      glass: "S-LAL61 (OHARA)",
      apd: false,
      role: "Second positive element continuing gradual convergence. Together with L21, delivers the initial positive power of Gr2 with minimal higher-order aberration.",
    },
    {
      id: 10,
      name: "L23",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      fl: 56.2,
      glass: "S-FPM2 (OHARA)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ +0.014 (fluorophosphate ED glass)",
      cemented: "D1",
      role: "First of two ED elements. Pre-stop positive component of the achromatic cemented pair with L24. Anomalous partial dispersion corrects secondary spectrum in axial chromatic aberration.",
    },
    {
      id: 11,
      name: "L24",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.3,
      fl: -25.2,
      glass: "S-TIH14 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Negative flint in the pre-stop achromatic pair. Partial dispersion near the normal line (ΔPgF = 0.0007, condition 5), ensuring minimal secondary spectrum at the stop where marginal ray height is smallest.",
    },
    // [Aperture Stop between L24 and L25]
    {
      id: 12,
      name: "L25",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.3,
      fl: -19.8,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Negative flint in the post-stop achromatic pair, mirroring L24's role on the object side. This symmetry around the stop inherently cancels odd-order aberrations.",
    },
    {
      id: 13,
      name: "L26",
      label: "Element 12",
      type: "Biconvex Pos. (1× Asph)",
      nd: 1.8322,
      vd: 40.1,
      fl: 41.8,
      glass: "S-LAH60V (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Positive element with aspherical image-side surface (S23A). Fine-tunes spherical aberration in the converging post-stop beam. Part of the L25/L26 cemented pair mirroring L23/L24.",
    },
    {
      id: 14,
      name: "L27",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      fl: 33.6,
      glass: "S-FPM2 (OHARA)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ +0.014 (fluorophosphate ED glass, same as L23)",
      role: "Second ED element — same glass as L23. Positioned symmetrically opposite L23 relative to the stop, corrects lateral chromatic aberration where chief ray height is significant. Strongest positive element in Gr2.",
    },
    {
      id: 15,
      name: "L28",
      label: "Element 14",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.6935,
      vd: 53.2,
      fl: 99.8,
      glass: "S-LAL8 (OHARA)",
      apd: false,
      role: "Final element before image. Both surfaces aspherical — S26A has the largest departure in the design (−653 µm at rim); S27A uses an oblate ellipsoidal base (K = +1.61). Corrects coma and field curvature at the image periphery.",
    },
  ],

  /* ── Surface prescription ──
   *  27 surfaces + STO, front to rear.  Patent surface numbering i=1..27.
   *  Sign convention: R > 0 = center of curvature to the RIGHT.
   *
   *  Compound asphere L12: modeled as cemented doublet (glass + resin).
   *    Surface 3 = L12 glass front (elemId: 2)
   *    Surface 4 = glass→resin junction (elemId: 3, nd = resin)
   *    Surface 5A = resin rear → air (elemId: 0, aspherical)
   */
  surfaces: [
    // ── Gr1: Front group (fixed) ──
    { label: "1", R: 70.017, d: 2.5, nd: 1.68893, elemId: 1, sd: 33.0 }, // L11 front
    { label: "2", R: 29.64, d: 10.58, nd: 1.0, elemId: 0, sd: 24.3 }, // L11 rear → air (sd<0.9×R to avoid TIR)
    { label: "3", R: 94.105, d: 2.4, nd: 1.713, elemId: 2, sd: 29.2 }, // L12 glass front
    { label: "4", R: 31.773, d: 0.05, nd: 1.5138, elemId: 3, sd: 24.0 }, // L12 glass→resin junction
    { label: "5A", R: 27.197, d: 9.49, nd: 1.0, elemId: 0, sd: 21.8 }, // L12 resin rear → air (asph; sd<0.9×R)
    { label: "6", R: 164.736, d: 4.94, nd: 1.84666, elemId: 4, sd: 26.2 }, // L13 front
    { label: "7", R: -131.025, d: 4.85, nd: 1.0, elemId: 0, sd: 26.0 }, // L13 rear → air
    { label: "8", R: -46.832, d: 2.15, nd: 1.56883, elemId: 5, sd: 23.9 }, // L14 front (LS doublet)
    { label: "9", R: 134.737, d: 4.17, nd: 1.883, elemId: 6, sd: 24.0 }, // L14→L15 cemented junction
    { label: "10", R: -366.912, d: 3.03, nd: 1.0, elemId: 0, sd: 23.5 }, // L15 rear → air
    { label: "11", R: 70.316, d: 7.09, nd: 1.7725, elemId: 7, sd: 23.1 }, // L16 front
    { label: "12", R: -99.338, d: 7.7, nd: 1.0, elemId: 0, sd: 21.7 }, // L16 rear → air [VARIABLE: Gr1→Gr2]

    // ── Gr2: Rear group (focusing, moves as unit toward object) ──
    { label: "13", R: 55.349, d: 4.2, nd: 1.72916, elemId: 8, sd: 20.9 }, // L21 front
    { label: "14", R: 289.177, d: 0.15, nd: 1.0, elemId: 0, sd: 19.8 }, // L21 rear → air
    { label: "15", R: 111.31, d: 4.0, nd: 1.6968, elemId: 9, sd: 19.4 }, // L22 front
    { label: "16", R: -158.345, d: 0.15, nd: 1.0, elemId: 0, sd: 18.6 }, // L22 rear → air
    { label: "17", R: 322.096, d: 5.79, nd: 1.59282, elemId: 10, sd: 18.1 }, // L23 front (ED, D1 doublet)
    { label: "18", R: -37.124, d: 1.5, nd: 1.738, elemId: 11, sd: 16.2 }, // L23→L24 cemented junction
    { label: "19", R: 37.221, d: 5.6, nd: 1.0, elemId: 0, sd: 15.5 }, // L24 rear → air

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 5.78, nd: 1.0, elemId: 0, sd: 9.5 }, // ST — patent surface i=20

    // ── Gr2 continued (post-stop) ──
    { label: "21", R: -24.127, d: 1.3, nd: 1.8061, elemId: 12, sd: 14.6 }, // L25 front (D2 doublet)
    { label: "22", R: 47.257, d: 5.35, nd: 1.8322, elemId: 13, sd: 15.1 }, // L25→L26 cemented junction
    { label: "23A", R: -131.725, d: 0.3, nd: 1.0, elemId: 0, sd: 15.9 }, // L26 rear → air (asph)
    { label: "24", R: 64.397, d: 8.98, nd: 1.59282, elemId: 14, sd: 17.0 }, // L27 front (ED)
    { label: "25", R: -28.781, d: 0.15, nd: 1.0, elemId: 0, sd: 17.2 }, // L27 rear → air
    { label: "26A", R: -280.388, d: 3.71, nd: 1.6935, elemId: 15, sd: 17.2 }, // L28 front (asph)
    { label: "27A", R: -55.502, d: 38.47, nd: 1.0, elemId: 0, sd: 16.4 }, // L28 rear → image (asph) [VARIABLE: BF]
  ],

  /* ── Aspherical coefficients ──
   *  4 aspherical surfaces on 3 elements.
   *  Sag: Z(h) = (h²/R)/[1+√(1−(1+K)(h/R)²)] + A4·h⁴ + A6·h⁶ + ...
   */
  asph: {
    "5A": {
      K: -1.81201,
      A4: 5.0791e-6,
      A6: -6.20262e-9,
      A8: 1.15776e-11,
      A10: -2.04179e-14,
      A12: 1.909e-17,
      A14: 0,
    },
    "23A": {
      K: 0,
      A4: 3.38686e-6,
      A6: -1.03975e-9,
      A8: 5.14761e-11,
      A10: 1.18111e-14,
      A12: -1.1141e-16,
      A14: 0,
    },
    "26A": {
      K: 0,
      A4: -1.45264e-5,
      A6: -2.74974e-8,
      A8: 4.08509e-11,
      A10: -1.2205e-13,
      A12: 2.18038e-15,
      A14: -3.26e-18,
    },
    "27A": {
      K: 1.61294,
      A4: -4.86948e-6,
      A6: -2.36249e-8,
      A8: 7.19463e-11,
      A10: -3.12054e-13,
      A12: 2.11838e-15,
      A14: -2.42e-18,
    },
  },

  /* ── Variable air spacings (rear-group unit focus) ──
   *  Gr2 translates as rigid unit toward object for close focus.
   *  D12: Gr1→Gr2 air gap (decreases as Gr2 moves forward)
   *  D27A: Back focal distance (increases as Gr2 moves forward)
   *  Total track change: +0.02 mm (effectively constant length).
   */
  var: {
    "12": [7.7, 1.42],
    "27A": [38.47, 44.77],
  },
  varLabels: [
    ["12", "D12"],
    ["27A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "Gr1 (+)", fromSurface: "1", toSurface: "12" },
    { text: "Gr2 (+)", fromSurface: "13", toSurface: "27A" },
  ],
  doublets: [
    { text: "L12c", fromSurface: "3", toSurface: "5A" },
    { text: "LS", fromSurface: "8", toSurface: "10" },
    { text: "D1", fromSurface: "17", toSurface: "19" },
    { text: "D2", fromSurface: "21", toSurface: "23A" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.28,
  focusDescription:
    "Rear-group unit focus: Gr2 (8 elements, L21–L28 + stop) translates 6.28 mm toward the object. Gr1 fixed. Constant barrel length.",

  /* ── Aperture configuration ── */
  nominalFno: 1.45,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  maxFstop: 16,

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
