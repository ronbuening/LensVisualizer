import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Canon Serenar 28mm f/3.5                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,645,974 (sole example) — Hiroshi Ito / Canon.  ║
 * ║  Modified double-Gauss (Planar-type) wide-angle design.           ║
 * ║  6 elements / 4 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: Unit focusing (entire lens moves).                        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 1.00 (normalized). Paraxial ray trace of the     ║
 * ║    table gives EFL = 1.0046. Scale factor ×27.8688 applied to all ║
 * ║    R and d values so the traced EFL is 28.0 mm (production f).    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS (2026-09-21 audit):                        ║
 * ║    Not listed in patent. Set from an exact meridional trace:      ║
 * ║    every surface passes the f/3.5 axial marginal ray and the      ║
 * ║    full-field chief ray to Y = 21.6 mm (ω = 38°, patent 2ω = 75°) ║
 * ║    with margin, and the element proportions follow Fig. 1        ║
 * ║    (L1 : L2–L3 : L4–L5 : L6 rim heights ≈ 1.21 : 1.00 : 1.08 :    ║
 * ║    1.64). Fig. 1 is schematic (thin gaps exaggerated), so its     ║
 * ║    absolute scale was not used. Off-axis bundles vignette at the  ║
 * ║    outer elements as expected for this design; the d₂ and d₈     ║
 * ║    air gaps open outward and do not constrain the rims.           ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                           ║
 * ║    The stop is neither tabulated nor drawn in Fig. 1. Placed at   ║
 * ║    the center of air gap d₅ (between Groups II and III), the      ║
 * ║    canonical double-Gauss stop location.                          ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                             ║
 * ║    Patent publishes no close-focus state. The 1 m keyframe is a   ║
 * ║    derived unit-focus extension (+0.83 mm) that places the        ║
 * ║    object 1.0 m from the image plane (rangefinder convention).    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-serenar-28f35",
  maker: "Canon",
  name: "CANON SERENAR 28mm f/3.5",
  subtitle: "US 2,645,974 sole example (Fig. 1) — HIROSHI ITO / CANON",

  catalog: {
    lensMounts: ["leica-ltm"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 28.0 mm", "F/3.5", "2ω = 75°", "ALL SPHERICAL"],
    elementCount: 6,
    groupCount: 4,
    /* ── Metadata ── */
    focalLengthMm: { marketing: 28, design: 28.0 },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  source: {
    patentNumber: "US 2,645,974",
    patentYear: 1953,
    authors: ["Hiroshi Ito"],
    assignees: ["Canon Camera Co., Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.5638,
      vd: 60.7,
      focalLengthMm: 38.4,
      glass: "S-BAL41 (OHARA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Front positive collector — gathers wide-angle cone toward stop",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6237,
      vd: 47.0,
      focalLengthMm: 18.4,
      glass: "E-BAF8 (HOYA)",
      apd: false,
      role: "Front doublet positive — primary positive refracting element",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.5955,
      vd: 39.2,
      focalLengthMm: -13.6,
      glass: "E-F8 (HOYA catalog equivalent for patent coordinate; production supplier unspecified)",
      apd: false,
      role: "Front doublet negative — chromatic correction and Gauss waist divergence",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5785,
      vd: 41.7,
      focalLengthMm: -11.2,
      glass: "FL4 (HOYA catalog equivalent; production supplier unspecified; patent 579417)",
      apd: false,
      role: "Rear doublet negative — strongest negative element, Gauss waist",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6204,
      vd: 60.3,
      focalLengthMm: 13.0,
      glass: "N-SK16 (Schott)",
      apd: false,
      role: "Rear doublet positive — redirects diverging beam toward image",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-Convex Positive",
      nd: 1.6204,
      vd: 60.3,
      focalLengthMm: 38.9,
      glass: "N-SK16 (Schott)",
      apd: false,
      role: "Rear positive collector — final convergence to image plane",
    },
  ],

  /* ── Surface prescription ──
   *  Patent US 2,645,974, sole example (table on the specification page, repeated in
   *  claim 5). All radii and thicknesses scaled ×27.8688 from the normalized (f = 1.00)
   *  prescription. Stop placed at center of patent gap d₅ (not tabulated, not drawn).
   */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 16.805, d: 1.895, sd: 5.7, medium: 1 }, // L1 front
    { label: "2", R: 72.32, d: 0.139, sd: 5.4 }, // L1 rear → air
    { label: "3", R: 13.154, d: 2.731, sd: 4.6, medium: 2 }, // L2 front (D1)
    { label: "4", R: -83.606, d: 0.669, sd: 4.0, medium: 3 }, // L2→L3 junction (D1)
    { label: "5", R: 9.002, d: 1.394, sd: 3.6 }, // L3 rear → air
    { label: "STO", R: "flat", d: 1.394 }, // Aperture stop (center of d₅)
    { label: "6", R: -9.225, d: 0.474, sd: 3.7, medium: 4 }, // L4 front (D2)
    { label: "7", R: 22.239, d: 3.456, sd: 4.2, medium: 5 }, // L4→L5 junction (D2)
    { label: "8", R: -11.928, d: 0.111, sd: 4.9 }, // L5 rear → air
    { label: "9", R: "flat", d: 2.508, sd: 7.5, medium: 6 }, // L6 front (flat)
    { label: "10", R: -24.134, sd: 7.5 }, // L6 rear → BFD
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.0,
    description:
      "Unit focusing — entire lens moves as a rigid unit; the 1 m keyframe is a derived extension (patent publishes no close state).",
  },

  /* (moved from var) ── Variable air spacings (unit focus — only BFD changes) ──
   *  Close keyframe is derived (no patent close state): +0.83 mm extension puts the
   *  object 1.0 m from the image plane.
   */
  gaps: { "10": { label: "BF", values: [[22.3, 23.13]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "5" },
    { text: "III", fromSurface: "6", toSurface: "8" },
    { text: "IV", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
