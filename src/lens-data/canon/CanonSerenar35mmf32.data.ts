import type { LensDataInput } from "../../types/optics.js";

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
  key: "canon-serenar-35f32",
  maker: "Canon",
  name: "CANON SERENAR 35mm f/3.2",
  subtitle: "US 2,645,975 SOLE EXAMPLE (FIG. 1) — HIROSHI ITO / CANON",
  specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 35.0 mm", "F/3.2 (design F/3.0)", "2ω ≈ 64°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 35,
  focalLengthDesign: 35.0,
  apertureMarketing: 3.2,
  apertureDesign: 3.0,
  lensMounts: ["leica-ltm"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2,645,975",
  patentAuthors: ["Hiroshi Ito"],
  patentAssignees: ["Canon Camera Co., Inc."],
  patentYear: 1953,
  elementCount: 6,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.5891,
      vd: 61.2,
      fl: 52.9,
      glass: "SK5 (Schott)",
      apd: false as const,
      role: "Front collecting positive meniscus; distributes convergence to reduce higher-order SA.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6073,
      vd: 59.5,
      fl: 22.6,
      glass: "K-SK7 (SUMITA catalog equivalent; production supplier unspecified)",
      apd: false as const,
      cemented: "D1",
      role: "Front doublet crown — strongest element; primary convergence before stop.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.5785,
      vd: 41.7,
      fl: -16.2,
      glass: "FL4 (HOYA catalog equivalent; production supplier unspecified)",
      apd: false as const,
      cemented: "D1",
      role: "Front doublet flint — chromatic correction and Petzval field flattening.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5785,
      vd: 41.7,
      fl: -13.5,
      glass: "FL4 (HOYA catalog equivalent; production supplier unspecified)",
      apd: false as const,
      cemented: "D2",
      role: "Rear doublet flint — mirrors L3 for symmetry-based lateral aberration cancellation.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6031,
      vd: 60.7,
      fl: 16.7,
      glass: "BACD14 (HOYA catalog equivalent; production supplier unspecified)",
      apd: false as const,
      cemented: "D2",
      role: "Rear doublet crown — main convergent element in rear half.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6228,
      vd: 56.9,
      fl: 36.4,
      glass: "SK10 (Schott)",
      apd: false as const,
      role: "Rear collecting singlet; asymmetric bending controls distortion at wide field.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 22.257, d: 2.618, nd: 1.5891, elemId: 1, sd: 10.0 }, // L1 front
    { label: "2", R: 74.452, d: 0.702, nd: 1.0, elemId: 0, sd: 10.0 }, // L1 rear → air
    { label: "3", R: 16.034, d: 5.087, nd: 1.6073, elemId: 2, sd: 7.7 }, // L2 front (D1)
    { label: "4", R: -82.887, d: 0.762, nd: 1.5785, elemId: 3, sd: 7.7 }, // L2→L3 junction (D1)
    { label: "5", R: 10.598, d: 3.2, nd: 1.0, elemId: 0, sd: 5.3 }, // L3 rear → air
    { label: "STO", R: 1e15, d: 1.887, nd: 1.0, elemId: 0, sd: 4.1 }, // Aperture stop S (Fig. 1 position; not tabulated)
    { label: "6", R: -10.356, d: 0.702, nd: 1.5785, elemId: 4, sd: 5.4 }, // L4 front (D2)
    { label: "7", R: 32.253, d: 3.651, nd: 1.6031, elemId: 5, sd: 7.6 }, // L4→L5 junction (D2)
    { label: "8", R: -14.078, d: 0.071, nd: 1.0, elemId: 0, sd: 7.6 }, // L5 rear → air
    { label: "9", R: 110.381, d: 2.287, nd: 1.6228, elemId: 6, sd: 9.1 }, // L6 front
    { label: "10", R: -28.31, d: 24.999, nd: 1.0, elemId: 0, sd: 9.1 }, // L6 rear → image (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus — BFD only; close value derived for 1 m object-to-image) ── */
  var: {
    "10": [24.999, 26.316],
  },
  varLabels: [["10", "BF"]],

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

  /* ── Focus configuration ── */
  closeFocusM: 1.0,
  focusDescription:
    "Unit focusing — entire optical assembly translates. The patent publishes no close state; the 1 m keyframe is a derived extension.",

  /* ── Aperture configuration ── */
  nominalFno: 3.0,
  fstopSeries: [3, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
