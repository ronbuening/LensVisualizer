import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON NIKKOR Z 40mm f/2                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2021-189351 A, Example 4 (Table 4, Fig. 7);         ║
 * ║  inventor Keigo Koida (古井田 啓吾), Nikon Corporation.              ║
 * ║  Native patent scale (f = 41.194 mm); no rescaling.                  ║
 * ║  Compact three-group inner-focus prime: G1(+) / S / G2(+) / G3(−).   ║
 * ║  6 elements / 4 components, 2 aspherical surfaces (hybrid resin).    ║
 * ║  Focus: inner focus — G2 translates toward the object by the         ║
 * ║  patent's D4/D10 gaps; G1, stop and G3 fixed.                        ║
 * ║                                                                      ║
 * ║  NOTE ON CLOSE FOCUS:                                                ║
 * ║    Table 4 labels its near state "β = −1/10", but the published      ║
 * ║    D4/D10 values focus at β ≈ −0.033 (paraxial, calculated) and      ║
 * ║    Fig. 8(B) quotes an object height H0 = −656.68 mm for Y = 21.63   ║
 * ║    (β ≈ −0.033). closeFocusM = 1.28 m is the calculated object-to-   ║
 * ║    image distance of the published gaps. The production 0.29 m MFD   ║
 * ║    (0.17×) is not published and is not extrapolated.                 ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS:                                             ║
 * ║    Patent lists no diameters. Values are measured from Fig. 7        ║
 * ║    (300 dpi, scale 12.34 px/mm from the S1–S13 vertex span): G1 rims ║
 * ║    11.0 mm, L21 front concave 8.4 mm inside a flat annulus, L21/L22  ║
 * ║    11.0 mm, resin 8A 11.3 mm, L23 13.5 mm, L31 resin/front 16.4 mm,  ║
 * ║    L31 flat rear face 17.6 mm. STO 8.8 mm = inner end of the Fig. 7   ║
 * ║    stop tick. All clear the f/2.04 axial bundle and the ω = 27.7°    ║
 * ║    chief ray; off-axis bundles vignette at full aperture.            ║
 * ║                                                                      ║
 * ║  NOTE ON COVER GLASS:                                                ║
 * ║    Patent surfaces 14–15 (filter FL, nd = 1.5168, νd = 63.88,        ║
 * ║    d = 1.6 mm) are modeled in `rearPlates` (traced, not drawn) with  ║
 * ║    0.5596 mm to the image. Last gap = patent D13 = 10.5 mm; air-     ║
 * ║    equivalent 10.5 + 1.6/1.5168 + 0.5596 = 12.1145 mm (patent        ║
 * ║    Bf(air) = 12.113; physical Bf 12.66 as printed).                  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-z-40f2",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 40mm f/2",
  subtitle: "JP 2021-189351 A EXAMPLE 4 — NIKON / KOIDA",
  specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 41.2 mm", "F/2.04", "2ω ≈ 55.4°", "2 ASPHERICAL SURFACES (HYBRID COMPOSITE)"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 40,
  focalLengthDesign: 41.2,
  apertureMarketing: 2,
  apertureDesign: 2.04,
  lensMounts: ["nikon-z"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2021-189351 A",
  patentAuthors: ["Keigo Koida"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2021,
  elementCount: 6,
  groupCount: 4,

  /* ── Elements ──
   *  6 glass elements + 2 resin layers = 8 entries.
   *  Nikon counts hybrid composites (glass + resin) as single elements;
   *  elementCount = 6 matches the marketed specification.
   */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.73,
      fl: 27.5,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Front high-index positive (lanthanum dense flint) — dominant converging power in the G1 cemented doublet",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.57,
      fl: -44.1,
      glass: "J-SF1 (HIKARI)",
      apd: false,
      role: "Negative flint — chromatic correction partner in G1 doublet",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L21",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.57,
      fl: -18.9,
      glass: "755276 dense-flint class (catalog identity unresolved)",
      apd: false,
      role: "High-dispersion flint — spherical and chromatic corrector in G2 cemented assembly",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L22",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.6,
      fl: 32.3,
      glass: "J-LASF015 (HIKARI)",
      apd: false,
      role: "High-index positive body of the hybrid composite — primary positive power in the G2 cemented component",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L22r",
      label: "Element 4 (resin)",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.56093,
      vd: 36.64,
      fl: 666.5,
      glass: "UV-curable photopolymer (Nikon)",
      apd: false,
      role: "Aspherical resin layer — primary spherical aberration corrector",
      cemented: "H1",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.73,
      fl: 27.0,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Strongest positive element — concave toward object, high-index meniscus reducing higher-order SA",
    },
    {
      id: 7,
      name: "L31r",
      label: "Element 6 (resin)",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.56093,
      vd: 36.64,
      fl: -284.8,
      glass: "UV-curable photopolymer (Nikon)",
      apd: false,
      role: "Aspherical resin layer — field-dependent aberration corrector (astigmatism, coma)",
      cemented: "H2",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.2,
      fl: -67.9,
      glass: "E-CF6 (HOYA)",
      apd: false,
      role: "Field flattener — negative power lengthens Petzval radius, corrects field curvature",
      cemented: "H2",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    /* G1 — positive cemented doublet (L11 + L12), fixed during focus */
    { label: "1", R: 28.7073, d: 4.9, nd: 1.83481, elemId: 1, sd: 11.0 },
    { label: "2", R: -105.0698, d: 0.9, nd: 1.71736, elemId: 2, sd: 11.0 },
    { label: "3", R: 45.4688, d: 2.45, nd: 1.0, elemId: 0, sd: 10.9 },

    /* Aperture stop — between G1 and G2, fixed during focus */
    { label: "STO", R: 1e15, d: 11.25, nd: 1.0, elemId: 0, sd: 8.8 },

    /* G2 — positive focus group: cemented assembly (L21 + L22 + L22r) + singlet L23 */
    { label: "5", R: -16.5359, d: 0.9, nd: 1.7552, elemId: 3, sd: 8.4 },
    { label: "6", R: 105.5966, d: 4.55, nd: 1.804, elemId: 4, sd: 11.0 },
    { label: "7", R: -33.838, d: 0.1, nd: 1.56093, elemId: 5, sd: 11.0 },
    { label: "8A", R: -31.0626, d: 0.15, nd: 1.0, elemId: 0, sd: 11.3 },
    { label: "9", R: -397.823, d: 6.76, nd: 1.83481, elemId: 6, sd: 13.5 },
    { label: "10", R: -21.5121, d: 13.7904, nd: 1.0, elemId: 0, sd: 13.5 },

    /* G3 — negative field flattener: hybrid composite (L31r + L31), fixed during focus */
    { label: "11A", R: -29.55, d: 0.1, nd: 1.56093, elemId: 7, sd: 16.4 },
    { label: "12", R: -36.3, d: 1.3, nd: 1.51742, elemId: 8, sd: 16.4 },
    { label: "13", R: 1084.4056, d: 10.5, nd: 1.0, elemId: 0, sd: 17.6 }, // D13 — gap to the FL plate
  ],

  /* ── Filter FL (patent surfaces 14–15): traced, not drawn ── */
  rearPlates: [
    {
      label: "FL",
      thicknessMm: 1.6,
      nd: 1.5168,
      vd: 63.88,
      glass: "J-BK7",
      gapAfterMm: 0.5596,
      source: "JP 2021-189351 A, Example 4 Table 4 surfaces 14–15",
    },
  ],

  /* ── Aspherical coefficients ──
   *  Patent conic parameter κ = 1.0000 → K = κ − 1 = 0 (spherical base).
   *  Patent uses polynomial terms through A12; A12 = 0 for surface 8A.
   */
  asph: {
    "8A": {
      K: 0,
      A4: 3.51503e-5,
      A6: 5.19649e-8,
      A8: 2.28989e-10,
      A10: -1.66287e-12,
      A12: 0,
      A14: 0,
    },
    "11A": {
      K: 0,
      A4: 7.47127e-6,
      A6: 2.62883e-8,
      A8: -6.53514e-11,
      A10: 1.25069e-13,
      A12: -2.2897e-17,
      A14: 0,
    },
  },

  /* ── Variable air spacings (inner focus) ──
   *  Patent Table 4 infinity / near-state gaps. G2 translates 1.2085 mm toward
   *  the object; ΔD4 + ΔD10 = −1.2085 + 1.2085 = 0 (constant length).
   *  The near state focuses at 1.28 m object-to-image (β ≈ −0.033, calculated).
   */
  var: {
    STO: [11.25, 10.0415],
    "10": [13.7904, 14.9989],
  },
  varLabels: [
    ["STO", "D4"],
    ["10", "D10"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "3" },
    { text: "G2 (+)", fromSurface: "5", toSurface: "10" },
    { text: "G3 (−)", fromSurface: "11A", toSurface: "13" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "5", toSurface: "8A" },
    { text: "H2", fromSurface: "11A", toSurface: "13" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.28,
  focusDescription:
    "Inner focus (IF): G2 (L21–L23) translates 1.21 mm toward the object to the patent's near state (1.28 m, calculated). G1, aperture stop, and G3 remain fixed.",

  /* ── Aperture configuration ── */
  nominalFno: 2.04,
  fstopSeries: [2.04, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 9,

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
