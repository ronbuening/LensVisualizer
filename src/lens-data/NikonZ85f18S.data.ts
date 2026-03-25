import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON NIKKOR Z 85mm f/1.8 S                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP2020-173366A Example 3 (Konica Minolta / Nikon).   ║
 * ║  Positive–negative–positive–negative telephoto, all-spherical.     ║
 * ║  12 elements / 8 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: floating inner focus — Gr2 (image-ward) + Gr3 (object-     ║
 * ║         ward), with fixed stop between them.                       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Values estimated via paraxial         ║
 * ║    marginal + chief ray trace at f/1.85, 2ω = 29.26°, with       ║
 * ║    ~8% mechanical clearance on marginal heights and 65% of         ║
 * ║    chief ray height for off-axis contribution (allowing ~35%       ║
 * ║    vignetting at full field corners). All elements verified for    ║
 * ║    positive edge thickness and SD/R < 0.90.                       ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent surfaces 22–23 (nd = 1.51680, νd = 64.20, d = 1.6 mm)  ║
 * ║    represent the sensor cover glass / filter stack. These are      ║
 * ║    excluded; the last surface's d includes the cover glass         ║
 * ║    thickness + back focus (11.000 + 1.600 + 0.920 = 13.520 mm).  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-z-85f18s",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 85mm f/1.8 S",
  subtitle: "JP2020-173366A EXAMPLE 3 — KONICA MINOLTA / NIKON",
  specs: [
    "12 ELEMENTS / 8 GROUPS",
    "f ≈ 83.0 mm (patent) · 85 mm (production)",
    "F/1.85 (patent) · F/1.8 (production)",
    "2ω ≈ 29.26° (patent) · 28°30′ (production)",
    "ALL SPHERICAL · 2 ED ELEMENTS",
  ],

  /* ── Elements ──
   *  12 glass elements, front to rear.
   *  Gr1 (positive, fixed): L11, L12, L13+L14 cemented doublet
   *  Gr2 (negative, focus): L21+L22 cemented doublet — moves toward image
   *  Gr3 (positive, focus): L31 singlet — moves toward object
   *  Gr4 (negative, fixed): L41+L42 cemented doublet, L43+L44 cemented doublet, L45 singlet
   */
  elements: [
    // ── Group 1 — Front positive group (fixed) ──
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.62,
      fl: 139.5,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Front positive element. High-index lanthanum crown provides moderate converging power with gentle curvatures at the largest beam diameter.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.55032,
      vd: 75.5,
      fl: 114.2,
      glass: "Fluorophosphate crown (ED)",
      apd: "inferred",
      apdNote: "νd = 75.50 — fluorophosphate FK/FPL family, above Nikon ED threshold",
      role: "First ED element. Low-dispersion meniscus contributes positive power with minimal chromatic contribution for axial color correction.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 91.6,
      glass: "S-FPL51 (OHARA)",
      apd: "patent",
      apdNote: "S-FPL51: PgF = 0.5385, dPgF = +0.032 — strong anomalous partial dispersion",
      cemented: "D1",
      role: "Second ED element. S-FPL51 provides the primary secondary spectrum correction. Cemented with L14 to form the Gr1 achromatic doublet.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.85025,
      vd: 30.05,
      fl: -64.7,
      glass: "Dense flint (code 850301)",
      apd: false,
      cemented: "D1",
      role: "Flint partner in the Gr1 achromatic doublet. High dispersion complements L13's anomalous dispersion for secondary spectrum correction.",
    },
    // ── Group 2 — Negative focus group (moves image-ward) ──
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      fl: 76.6,
      glass: "S-NPH2 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Extreme-dispersion positive element in the Gr2 focus doublet. High nd/low νd enables strong power in a compact, lightweight element for AF speed.",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.01,
      fl: -36.7,
      glass: "Flint (code 603380)",
      apd: false,
      cemented: "D2",
      role: "Dominant negative power in Gr2. Achromatizes the focus doublet to minimize chromatic shift during focusing.",
    },
    // ── Group 3 — Positive focus group (moves object-ward) ──
    {
      id: 7,
      name: "L31",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67.0,
      fl: 67.9,
      glass: "Phosphate crown (nearest: S-FPM2, OHARA)",
      apd: false,
      role: "Single-element positive focus group. Low-dispersion crown creates chromatic lever arm against L21 for focus-invariant color correction.",
    },
    // ── Group 4 — Rear negative group (fixed) ──
    {
      id: 8,
      name: "L41",
      label: "Element 8",
      type: "Plano-Convex Positive",
      nd: 1.91082,
      vd: 35.25,
      fl: 48.0,
      glass: "Ultra-high-index La dense flint (code 911353)",
      apd: false,
      cemented: "D3",
      role: "Ultra-high-index element with flat front face. Strong positive power from a single curved surface enables compact Gr4 architecture.",
    },
    {
      id: 9,
      name: "L42",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.17,
      fl: -38.8,
      glass: "Dense flint (code 673322)",
      apd: false,
      cemented: "D3",
      role: "Negative partner in first Gr4 doublet (net FL ≈ −206 mm). Begins field-flattening divergence for Petzval correction.",
    },
    {
      id: 10,
      name: "L43",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.8485,
      vd: 43.79,
      fl: 71.0,
      glass: "Lanthanum crown (code 849438)",
      apd: false,
      cemented: "D4",
      role: "Positive element in second Gr4 doublet (net FL ≈ +122.7 mm). Sub-corrector controlling coma and field curvature within the negative rear group.",
    },
    {
      id: 11,
      name: "L44",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.01,
      fl: -164.3,
      glass: "Flint (code 603380, same as L22)",
      apd: false,
      cemented: "D4",
      role: "Chromatic corrector within the positive L43+L44 doublet. Weak negative power fine-tunes color balance without altering convergence significantly.",
    },
    {
      id: 12,
      name: "L45",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.72,
      fl: -111.5,
      glass: "Dense flint (nearest: Schott SF2)",
      apd: false,
      role: "Final element, concave to object. Narrows beam within Gr4 and increases off-axis ray incidence angle for near-telecentric exit pupil geometry.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent surfaces 1–21 (cover glass excluded).
   *  Stop (surface 11 in patent) is between Gr2 and Gr3, fixed during focus.
   *  All surfaces spherical — no aspherical surfaces in EX3.
   */
  surfaces: [
    // ── Gr1: Front positive group (fixed) ──
    { label: "1", R: 120.814, d: 4.94, nd: 1.7725, elemId: 1, sd: 27.0 }, // L11 front
    { label: "2", R: -1000.0, d: 0.25, nd: 1.0, elemId: 0, sd: 26.5 }, // L11 rear → air
    { label: "3", R: 42.061, d: 6.12, nd: 1.55032, elemId: 2, sd: 25.0 }, // L12 front
    { label: "4", R: 127.231, d: 0.5, nd: 1.0, elemId: 0, sd: 23.0 }, // L12 rear → air
    { label: "5", R: 62.742, d: 6.56, nd: 1.497, elemId: 3, sd: 23.0 }, // L13 front
    { label: "6", R: -165.753, d: 1.4, nd: 1.85025, elemId: 4, sd: 20.5 }, // L13→L14 junction
    { label: "7", R: 82.262, d: 6.182, nd: 1.0, elemId: 0, sd: 20.5 }, // L14 rear → air (var)

    // ── Gr2: Negative focus group — cemented doublet (moves image-ward) ──
    { label: "8", R: 438.032, d: 3.21, nd: 1.92286, elemId: 5, sd: 17.0 }, // L21 front
    { label: "9", R: -84.265, d: 1.13, nd: 1.60342, elemId: 6, sd: 16.0 }, // L21→L22 junction
    { label: "10", R: 30.06, d: 13.284, nd: 1.0, elemId: 0, sd: 16.0 }, // L22 rear → air (var)

    // ── Aperture stop (fixed between Gr2 and Gr3) ──
    { label: "STO", R: 1e15, d: 11.915, nd: 1.0, elemId: 0, sd: 13.4 },

    // ── Gr3: Positive focus group — singlet (moves object-ward) ──
    { label: "12", R: 54.757, d: 4.1, nd: 1.59349, elemId: 7, sd: 14.0 }, // L31 front
    { label: "13", R: -152.958, d: 2.059, nd: 1.0, elemId: 0, sd: 14.0 }, // L31 rear → air (var)

    // ── Gr4: Rear negative group (fixed) ──
    // D3: L41+L42 cemented doublet (net FL ≈ −206 mm)
    { label: "14", R: 1e15, d: 6.5, nd: 1.91082, elemId: 8, sd: 14.0 }, // L41 front (flat)
    { label: "15", R: -43.69, d: 2.02, nd: 1.6727, elemId: 9, sd: 14.0 }, // L41→L42 junction
    { label: "16", R: 64.869, d: 4.9, nd: 1.0, elemId: 0, sd: 14.0 }, // L42 rear → air
    // D4: L43+L44 cemented doublet (net FL ≈ +122.7 mm)
    { label: "17", R: 70.537, d: 8.2, nd: 1.8485, elemId: 10, sd: 14.0 }, // L43 front
    { label: "18", R: -411.688, d: 4.5, nd: 1.60342, elemId: 11, sd: 14.0 }, // L43→L44 junction
    { label: "19", R: 130.583, d: 8.121, nd: 1.0, elemId: 0, sd: 13.5 }, // L44 rear → air
    // L45 singlet
    { label: "20", R: -35.4045, d: 1.4, nd: 1.64769, elemId: 12, sd: 13.0 }, // L45 front
    { label: "21", R: -69.4719, d: 13.52, nd: 1.0, elemId: 0, sd: 13.0 }, // L45 rear → image (incl. cover glass path)
  ],

  /* ── Aspherical coefficients ──
   *  EX3 is an all-spherical design — no aspherical surfaces.
   */
  asph: {},

  /* ── Variable air spacings (floating inner focus) ──
   *  Four gaps change during focus. Gr1, stop, and Gr4 are fixed;
   *  the total of d7 + d10 + d11 + d13 is conserved (≈ 33.44 mm).
   *
   *  Gr2 (L21+L22) moves +3.838 mm toward image (d7↑, d10↓).
   *  Gr3 (L31) moves −6.762 mm toward object (d11↓, d13↑).
   *  Stop is fixed between Gr2 and Gr3.
   *
   *  Close focus: 0.8 m (object plane to image plane).
   */
  var: {
    7: [6.182, 10.02],
    10: [13.284, 9.445],
    STO: [11.915, 5.153],
    13: [2.059, 8.821],
  },

  varLabels: [
    ["7", "D7"],
    ["10", "D10"],
    ["STO", "D11"],
    ["13", "BF"],
  ],

  /* ── Group annotations ── */
  groups: [
    { text: "Gr1 (+)", fromSurface: "1", toSurface: "7" },
    { text: "Gr2 (−)", fromSurface: "8", toSurface: "10" },
    { text: "Gr3 (+)", fromSurface: "12", toSurface: "13" },
    { text: "Gr4 (−)", fromSurface: "14", toSurface: "21" },
  ],

  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
    { text: "D4", fromSurface: "17", toSurface: "19" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.8,
  focusDescription:
    "Floating inner focus: Gr2 (cemented doublet, 2 elements) moves toward image; " +
    "Gr3 (singlet) moves toward object. Two independent stepping motors (Nikon Multi-Focus System). " +
    "D2Gr/D3Gr = −0.57; Gr2 travel = +3.84 mm, Gr3 travel = −6.76 mm.",

  /* ── Aperture configuration ── */
  nominalFno: 1.8,
  fstopSeries: [1.8, 2, 2.5, 2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
