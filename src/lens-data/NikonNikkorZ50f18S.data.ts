import type { LensDataInput } from "../types/optics.js";

// =============================================================================
//  NIKKOR Z 50mm f/1.8 S — Patent WO2019/220618 A1, Example 9
//  Inventors: Saburo Masugi, Tomoyuki Koshima (Nikon Corporation)
//  Filed: 2018-05-18 | Published: 2019-11-21
//  Production design confirmed by: 12E/9G count, 2 asph + 2 ED match,
//  and computed MFD = 400.0 mm = Nikon published 0.4 m.
// =============================================================================

const LENS_DATA = {
  // §1 — Identity
  key: "nikkor-z-50f18s",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 50mm f/1.8 S",
  subtitle: "Patent WO2019/220618 A1 — Example 9",
  specs: ["12 elements / 9 groups", "EFL 51.6 mm", "f/1.85", "2ω = 45.8°", "2 Asph · 2 ED", "MFD 0.4 m"],

  focalLengthMarketing: 50,
  focalLengthDesign: 51.6,
  apertureMarketing: 1.8,
  apertureDesign: 1.85,
  patentYear: 2019,
  elementCount: 12,
  groupCount: 9,

  // §2 — Elements (front-to-rear, one per physical glass element)
  //
  // elemId mapping notes:
  //   Cemented doublets: junction surface carries the rear element's elemId.
  //   Composite L14: the 0.1 mm resin layer (surface 6A) has elemId 0;
  //     the glass body (surface 7) carries elemId 4. The aspherical coefficients
  //     are keyed to surface "6A". See analysis document for inferential basis
  //     of the composite aspherical identification.

  elements: [
    // ── G1: Front group (positive, fixed) ─────────────────────────
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.2,
      fl: -36.15,
      glass: "S-TIH6 class (dense flint)",
      apd: false,
      role: "Front negative corrector. Unusual leading position enables coma correction across the field (patent ¶0054). Forms cemented doublet with L12.",
      cemented: "L11–L12",
    },

    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Pos. Meniscus (convex to obj.)",
      nd: 1.94595,
      vd: 18.0,
      fl: 98.54,
      glass: "S-NPH2 / E-FDS2 (ultra-high-index short flint, nd = 1.946)",
      apd: false,
      role: "Achromatizing partner to L11. Highest refractive index in the system. The large nd difference at the cemented interface creates a powerfully correcting buried surface for chromatic aberration.",
      cemented: "L11–L12",
    },

    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Pos. Meniscus (concave to obj.)",
      nd: 1.72916,
      vd: 54.6,
      fl: 82.18,
      glass: "S-LAL18 class (lanthanum crown)",
      apd: false,
      role: "Positive convergence element. Meniscus shape controls angle of incidence on subsequent surfaces, reducing higher-order spherical aberration.",
    },

    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Pos. Meniscus (Asph, convex to obj.)",
      nd: 1.804,
      vd: 46.6,
      fl: 54.12,
      glass: "S-LAH65V class (lanthanum dense flint, nd = 1.804)",
      apd: false,
      role: "First aspherical element. Object-side aspherical surface (probable composite construction: 0.1 mm resin layer, nd = 1.561, νd = 36.6, on glass substrate). Targets spherical aberration and coma on the converging marginal beam before the stop.",
    },

    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Biconvex Positive (ED)",
      nd: 1.59319,
      vd: 67.9,
      fl: 41.42,
      glass: "S-FPM2 / FCD1 class (ED glass, anomalous partial dispersion)",
      apd: "inferred",
      role: "First ED element. Anomalous partial dispersion corrects both primary and secondary chromatic aberration. Forms cemented doublet with L16 immediately before the aperture stop.",
      cemented: "L15–L16",
      apdNote: "νd = 67.9; anomalous partial dispersion inferred from glass type (fluorophosphate ED class)",
    },

    {
      id: 6,
      name: "L16",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.7,
      fl: -28.59,
      glass: "S-TIH14 class (dense flint)",
      apd: false,
      role: "Achromatizing partner to L15. High-dispersion dense flint paired with ED glass to form the inner chromatic-correcting doublet before the stop.",
      cemented: "L15–L16",
    },

    // ── G2: Focusing group (positive, moves toward object) ───────
    {
      id: 7,
      name: "L21",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.7,
      fl: -35.31,
      glass: "S-TIH14 class (dense flint)",
      apd: false,
      role: "Leading negative element of the focusing group. Patent ¶0024 notes this placement enables field curvature correction that tracks with focus position.",
    },

    {
      id: 8,
      name: "L22",
      label: "Element 8",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.77377,
      vd: 47.2,
      fl: 32.84,
      glass: "S-LAH60 class (lanthanum dense flint, nd = 1.774)",
      apd: false,
      role: "Second aspherical element — double asphere (both surfaces). Primary monochromatic aberration corrector in the focusing group. Image-side surface carries ~75× more aspherical departure than object side. Probable precision glass molded (PGM) element; high-index lanthanum glass minimises mass for fast AF response.",
    },

    {
      id: 9,
      name: "L23",
      label: "Element 9",
      type: "Pos. Meniscus (concave to obj., Super ED)",
      nd: 1.49782,
      vd: 82.6,
      fl: 65.37,
      glass: "S-FPL53 / FCD100 class (super-ED fluorophosphate, νd = 82.6)",
      apd: "inferred",
      role: "Second ED element — super-low-dispersion fluorophosphate. Placement within the focusing group provides chromatic correction that tracks with focus, preventing LoCA degradation at close distances. Thickest element in G2 (6.4 mm).",
      apdNote: "νd = 82.6; among the lowest-dispersion optical glasses commercially available",
    },

    // ── G3: Rear group (negative, fixed) ─────────────────────────
    {
      id: 10,
      name: "L31",
      label: "Element 10",
      type: "Pos. Meniscus (concave to obj.)",
      nd: 1.94595,
      vd: 18.0,
      fl: 103.65,
      glass: "S-NPH2 (ultra-high-index short flint, nd = 1.946)",
      apd: false,
      role: "Positive element of the rear cemented doublet. Same ultra-high-index glass as L12, providing chromatic balance symmetrically across the system. Forms cemented pair with L32 for lateral color correction and field flattening.",
      cemented: "L31–L32",
    },

    {
      id: 11,
      name: "L32",
      label: "Element 11",
      type: "Neg. Meniscus (concave to obj.)",
      nd: 1.64769,
      vd: 33.7,
      fl: -113.52,
      glass: "S-TIH14 class (dense flint)",
      apd: false,
      role: "Negative partner in the rear cemented doublet. The buried surface between L31 and L32 provides fine chromatic tuning independent of monochromatic power.",
      cemented: "L31–L32",
    },

    {
      id: 12,
      name: "L33",
      label: "Element 12",
      type: "Concave-Plano Negative",
      nd: 1.64769,
      vd: 33.7,
      fl: -77.52,
      glass: "S-TIH14 class (dense flint)",
      apd: false,
      role: "Final optical element — field flattener. Plano rear surface simplifies manufacturing. Negative power counteracts Petzval curvature. Close proximity to sensor exploits Z-mount's short flange distance.",
    },
  ],

  // §3 — Surfaces (strict front-to-rear order)
  //
  //  Surface 13 is a virtual (dummy) surface per patent ¶0128.
  //  The thin resin layer at surface 6A (elemId: 0) participates in the ray
  //  trace but is not rendered as a separate element — see §2 notes above.
  //  Semi-diameters estimated from f/1.85 entrance pupil geometry (EP SD ≈ 14 mm)
  //  with 8–12% mechanical clearance.  Sized to ensure positive edge thickness
  //  and smooth SD progression across cemented doublets.
  //  Surfaces 9–11 (L15–L16 doublet) and 14–15 (L21) carry reduced SDs relative
  //  to their mechanical clear aperture: at close focus, G2 travels 7.9 mm toward
  //  the object and the STO→G2 gap shrinks from 10.32 mm to 2.409 mm, so the
  //  strongly-curved rear surface of L16 (R = 21 mm) physically encroaches on
  //  L21's front surface.  The reduced SDs prevent glass interpenetration and
  //  visible diagram overlap at close-focus distances (issue #290).

  surfaces: [
    // ── G1 ────────────────────────────────────────────────────────
    //                  label       R              d       nd       elemId   sd
    { label: "1", R: -48.06457, d: 2.0, nd: 1.6727, elemId: 1, sd: 19.5 }, // L11 front
    { label: "2", R: 50.03333, d: 2.861, nd: 1.94595, elemId: 2, sd: 19.5 }, // L12 front (junction)
    { label: "3", R: 105.0, d: 2.805, nd: 1.0, elemId: 0, sd: 19.5 }, // L12 rear → air
    { label: "4", R: -226.31231, d: 6.827, nd: 1.72916, elemId: 3, sd: 18.9 }, // L13 front
    { label: "5", R: -47.98013, d: 0.644, nd: 1.0, elemId: 0, sd: 19.0 }, // L13 rear → air
    { label: "6A", R: 36.6491, d: 0.1, nd: 1.56093, elemId: 0, sd: 18.5 }, // L14 resin layer (asph)
    { label: "7", R: 36.85687, d: 5.622, nd: 1.804, elemId: 4, sd: 18.5 }, // L14 glass front
    { label: "8", R: 217.9278, d: 0.2, nd: 1.0, elemId: 0, sd: 18.5 }, // L14 rear → air
    { label: "9", R: 28.49361, d: 7.332, nd: 1.59319, elemId: 5, sd: 16.0 }, // L15 front (ED)
    { label: "10", R: -161.37986, d: 1.5, nd: 1.64769, elemId: 6, sd: 13.5 }, // L16 front (junction)
    { label: "11", R: 20.99038, d: 5.164, nd: 1.0, elemId: 0, sd: 12.0 }, // L16 rear → air

    // ── Aperture stop ─────────────────────────────────────────────
    { label: "STO", R: 1e15, d: 10.32, nd: 1.0, elemId: 0, sd: 11.0 }, // stop (D12, variable)

    // ── Virtual surface ───────────────────────────────────────────
    { label: "13", R: 1e15, d: 2.7, nd: 1.0, elemId: 0, sd: 14.5 }, // fixed air space

    // ── G2 (focusing group) ───────────────────────────────────────
    { label: "14", R: -23.41799, d: 1.1, nd: 1.64769, elemId: 7, sd: 13.0 }, // L21 front
    { label: "15", R: 998.77224, d: 0.2, nd: 1.0, elemId: 0, sd: 13.0 }, // L21 rear → air
    { label: "16A", R: 85.12299, d: 5.0, nd: 1.77377, elemId: 8, sd: 16.0 }, // L22 front (asph)
    { label: "17A", R: -35.29338, d: 2.485, nd: 1.0, elemId: 0, sd: 16.0 }, // L22 rear (asph) → air
    { label: "18", R: -73.80381, d: 6.4, nd: 1.49782, elemId: 9, sd: 17.0 }, // L23 front (super ED)
    { label: "19", R: -23.23519, d: 6.356, nd: 1.0, elemId: 0, sd: 17.0 }, // L23 rear → air (D19, var)

    // ── G3 ────────────────────────────────────────────────────────
    { label: "20", R: -177.7544, d: 2.927, nd: 1.94595, elemId: 10, sd: 18.0 }, // L31 front
    { label: "21", R: -63.69645, d: 1.9, nd: 1.64769, elemId: 11, sd: 18.0 }, // L32 front (junction)
    { label: "22", R: -482.01125, d: 2.887, nd: 1.0, elemId: 0, sd: 16.7 }, // L32 rear → air
    { label: "23", R: -50.20764, d: 1.9, nd: 1.64769, elemId: 12, sd: 18.0 }, // L33 front
    { label: "24", R: 1e15, d: 10.5, nd: 1.0, elemId: 0, sd: 18.0 }, // L33 rear → air

    // ── Filter + BFD ──────────────────────────────────────────────
    { label: "25", R: 1e15, d: 1.6, nd: 1.5168, elemId: 0, sd: 18.5 }, // FL front (BK7)
    { label: "26", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 18.5 }, // FL rear → image
  ],

  // §4 — Aspherical coefficients
  //  Patent aspheric equation (¶0061):
  //    X(y) = (y²/R) / [1 + √(1 − (1+κ)y²/R²)] + A4·y⁴ + A6·y⁶ + A8·y⁸ + A10·y¹⁰
  //  Patent lists κ = 1.0 but uses convention where κ represents (1+K); standard K = 0.
  //  Coefficients through A10 only (A12 = A14 = 0).

  asph: {
    "6A": {
      K: 0,
      A4: -4.74106e-7,
      A6: -3.40824e-10,
      A8: 2.15394e-12,
      A10: -1.54492e-15,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: 0,
      A4: -1.95205e-7,
      A6: 1.94342e-8,
      A8: -8.61846e-11,
      A10: -2.07763e-13,
      A12: 0,
      A14: 0,
    },
    "17A": {
      K: 0,
      A4: 1.47643e-5,
      A6: 2.08671e-8,
      A8: 8.44852e-11,
      A10: -6.9321e-13,
      A12: 0,
      A14: 0,
    },
  },

  // §5 — Variable air spacings [d_infinity, d_close_focus]
  //  G2 travels 7.911 mm toward object: D_STO shrinks, D19 expands.
  //  D26 is constant at 1.000 mm (patent lists as variable but values are identical).

  var: {
    STO: [10.32, 2.409],
    19: [6.356, 14.267],
  },

  // §6 — Variable spacing labels (readout order)
  varLabels: [
    ["STO", "STO→G2"],
    ["19", "G2→G3"],
  ],

  // §7 — Group and doublet annotations
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "11" },
    { text: "G2 (+)", fromSurface: "14", toSurface: "19" },
    { text: "G3 (−)", fromSurface: "20", toSurface: "24" },
  ],

  doublets: [
    { text: "L11–L12", fromSurface: "1", toSurface: "3" },
    { text: "L15–L16", fromSurface: "9", toSurface: "11" },
    { text: "L31–L32", fromSurface: "20", toSurface: "22" },
  ],

  // §8 — Focus configuration
  closeFocusM: 0.4,
  focusDescription:
    "Inner focus — G2 (L21 + L22 + L23) translates 7.9 mm toward the object. G1 and G3 remain fixed. Stepping motor (STM) drive.",

  // §9 — Aperture configuration
  nominalFno: 1.85,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16],

  // §10 — Layout tuning (overrides defaults)
  scFill: 0.52,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
