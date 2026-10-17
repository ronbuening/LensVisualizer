import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Canon Serenar 35mm f/3.2                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,645,975 sole illustrative embodiment (Fig. 1;     ║
 * ║  table in col. 3, repeated in claim 5), Hiroshi Ito / Canon.         ║
 * ║  Modified double-Gauss wide-angle, 6 elements / 4 groups.            ║
 * ║  All-spherical, 0 aspherical surfaces. Patent: F:3.0, 2ω = 64°.      ║
 * ║  Focus: Unit focusing (entire lens translates).                      ║
 * ║                                                                      ║
 * ║  NOTE ON SCALING:                                                    ║
 * ║    Patent at f=1.0 (computed EFL = 0.9825).                          ║
 * ║    All R, d, sd values scaled ×35.623 to f ≈ 35.0 mm production.     ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS (2026-09-23 audit):                          ║
 * ║    Not listed in patent. Measured from Fig. 1, which is drawn        ║
 * ║    to scale (vertex crossings give 21.5 px/mm at 300 dpi, the        ║
 * ║    same for d₁, d₅ and r₁→r₁₀, and the drawn sags of r₅/r₆ match     ║
 * ║    R at that scale): L1 ≈ 9.9, L2–L3 ≈ 7.7, L4–L5 ≈ 7.6, L6 ≈ 9.1    ║
 * ║    (knife edge) mm; the stop-facing concaves r₅ / r₆ end at          ║
 * ║    ≈ 5.3 / 5.4 mm where the drawing bevels out to the rim. An        ║
 * ║    exact trace at Y = 21.6 mm (ω = 32°) passes the f/3.0 axial       ║
 * ║    beam and the full-field chief ray at every surface; corner        ║
 * ║    bundles vignette at L1/L2 and L6 as in a period wide-angle.       ║
 * ║                                                                      ║
 * ║  NOTE ON STOP POSITION:                                              ║
 * ║    The patent names the stop S and draws it in Fig. 1 but does       ║
 * ║    not tabulate it. Placed where Fig. 1 draws it: 3.20 mm behind     ║
 * ║    r₅ and 1.887 mm ahead of r₆ (0.63 of d₅), between the bevelled    ║
 * ║    r₅ / r₆ rims (drawn 1.74 / 0.51 mm from the bars; model 1.78 /    ║
 * ║    0.37 mm).                                                         ║
 * ║                                                                      ║
 * ║  NOTE ON FOCUS:                                                      ║
 * ║    The patent publishes no close-focus state or mechanism. The       ║
 * ║    1 m keyframe (production MFD) is a derived unit-focus             ║
 * ║    extension: BF +1.317 mm puts the object 1.000 m from the image.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-serenar-35f32",
  maker: "Canon",
  name: "CANON SERENAR 35mm f/3.2",
  subtitle: "US 2,645,975 SOLE EXAMPLE (FIG. 1) — HIROSHI ITO / CANON",

  catalog: {
    lensMounts: ["leica-ltm"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 35.0 mm", "F/3.2 (design F/3.0)", "2ω ≈ 64°", "ALL SPHERICAL"],
    elementCount: 6,
    groupCount: 4,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 35, design: 35.0 },
    fNumber: { marketing: 3.2, design: 3.0 },
  },

  source: {
    patentNumber: "US 2,645,975",
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
      nd: 1.5891,
      vd: 61.2,
      focalLengthMm: 52.9,
      glass: "SK5 (Schott)",
      apd: false,
      role: "Front collecting positive meniscus; distributes convergence to reduce higher-order SA.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6073,
      vd: 59.5,
      focalLengthMm: 22.6,
      glass: "K-SK7 (SUMITA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Front doublet crown — strongest element; primary convergence before stop.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.5785,
      vd: 41.7,
      focalLengthMm: -16.2,
      glass: "FL4 (HOYA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Front doublet flint — chromatic correction and Petzval field flattening.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5785,
      vd: 41.7,
      focalLengthMm: -13.5,
      glass: "FL4 (HOYA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Rear doublet flint — mirrors L3 for symmetry-based lateral aberration cancellation.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6031,
      vd: 60.7,
      focalLengthMm: 16.7,
      glass: "BACD14 (HOYA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Rear doublet crown — main convergent element in rear half.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6228,
      vd: 56.9,
      focalLengthMm: 36.4,
      glass: "SK10 (Schott)",
      apd: false,
      role: "Rear collecting singlet; asymmetric bending controls distortion at wide field.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 22.257, d: 2.618, sd: 10.0, medium: 1 }, // L1 front
    { label: "2", R: 74.452, d: 0.702, sd: 10.0 }, // L1 rear → air
    { label: "3", R: 16.034, d: 5.087, sd: 7.7, medium: 2 }, // L2 front (D1)
    { label: "4", R: -82.887, d: 0.762, sd: 7.7, medium: 3 }, // L2→L3 junction (D1)
    { label: "5", R: 10.598, d: 3.2, sd: 5.3 }, // L3 rear → air
    { label: "STO", R: "flat", d: 1.887 }, // Aperture stop S (Fig. 1 position; not tabulated)
    { label: "6", R: -10.356, d: 0.702, sd: 5.4, medium: 4 }, // L4 front (D2)
    { label: "7", R: 32.253, d: 3.651, sd: 7.6, medium: 5 }, // L4→L5 junction (D2)
    { label: "8", R: -14.078, d: 0.071, sd: 7.6 }, // L5 rear → air
    { label: "9", R: 110.381, d: 2.287, sd: 9.1, medium: 6 }, // L6 front
    { label: "10", R: -28.31, sd: 9.1 }, // L6 rear → image (BFD)
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.0,
    description:
      "Unit focusing — entire optical assembly translates. The patent publishes no close state; the 1 m keyframe is a derived extension.",
  },

  /* (moved from var) ── Variable air spacings (unit focus — BFD only; close value derived for 1 m object-to-image) ── */
  gaps: { "10": { label: "BF", values: [[24.999, 26.316]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 3.0, fStops: [3, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2 (D1)", fromSurface: "3", toSurface: "5" },
    { text: "G3 (D2)", fromSurface: "6", toSurface: "8" },
    { text: "G4", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.45 },
} satisfies LensDataV2Input;

export default LENS_DATA;
