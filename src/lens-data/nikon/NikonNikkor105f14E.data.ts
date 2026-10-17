import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON AF-S NIKKOR 105mm f/1.4 E ED           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO2019/116563 A1 Example 3 (Nikon / Yamashita).     ║
 * ║  Three-group telephoto prime with APD glass for secondary          ║
 * ║  spectrum correction. All-spherical design. "3D High Fidelity."   ║
 * ║  14 elements / 9 groups, 0 aspherical surfaces.                   ║
 * ║  Focus: Inner focus — G2 cemented doublet translates axially.     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Values estimated from paraxial        ║
 * ║    marginal + chief ray trace scaled to f/1.45 EP, with 12%       ║
 * ║    mechanical margin for singletons (5% for cemented surfaces),   ║
 * ║    capped at 82mm filter-thread physical limit.                    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikkor-105-f14e-ed",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 105mm f/1.4 E ED",
  subtitle: "WO2019/116563 A1 Example 3 — Nikon / Yamashita, Ito et al.",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["14 ELEMENTS / 9 GROUPS", "f = 102.148 mm", "F/1.45", "2ω = 23.842°", "ALL SPHERICAL"],
    elementCount: 14,
    groupCount: 9,
    focalLengthMm: { marketing: 105, design: 102.148 },
    fNumber: { marketing: 1.4, design: 1.45 },
  },

  source: {
    patentNumber: "WO 2019/116563 A1",
    patentYear: 2019,
    authors: [
      "Masashi Yamashita",
      "Tomoki Ito",
      "Hiroshi Yabumoto",
      "Hiroshi Yamamoto",
      "Satoshi Miwa",
      "Keisuke Tsubonoya",
      "Ayumu Makida",
      "Takeru Uehara",
    ],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Pos. Meniscus, convex to obj",
      nd: 1.59349,
      vd: 67.0,
      focalLengthMm: 398.6,
      glass: "S-FPM2 equiv. (Ohara); catalog equivalent, production supplier unspecified",
      apd: "patent",
      apdNote: "Table 3 θgF = 0.537; partial dispersion retained from the patent.",
      role: "Gentle beam convergence with minimal aberration. Nearly plano rear surface.",
      dPgF: 0.537 - (0.6438 - 0.001682 * 67.0),
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive (ED)",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 177.1,
      glass: "S-FPL51 (Ohara); catalog equivalent, production supplier unspecified",
      apd: "patent",
      apdNote: "Table 3 θgF = 0.539; partial dispersion retained from the patent.",
      role: "Primary positive power. Axial chromatic & secondary spectrum correction.",
      dPgF: 0.539 - (0.6438 - 0.001682 * 81.61),
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconvex Positive (ED)",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 111.7,
      glass: "S-FPL51 (Ohara); catalog equivalent, production supplier unspecified",
      apd: "patent",
      apdNote: "Table 3 θgF = 0.539; partial dispersion retained from the patent.",
      role: "Cemented ED positive — strong convergence, achromatized by L14.",
      cemented: "D1",
      dPgF: 0.539 - (0.6438 - 0.001682 * 81.61),
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.71,
      focalLengthMm: -143.3,
      glass: "S-NBH8 (Ohara); catalog equivalent, production supplier unspecified",
      apd: false,
      apdNote: "Table 3 θgF = 0.583; partial dispersion retained from the patent.",
      role: "Achromatic flint partner to L13. First-order color correction of G1 beam.",
      cemented: "D1",
      dPgF: 0.583 - (0.6438 - 0.001682 * 34.71),
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Pos. Meniscus, concave to obj",
      nd: 1.6594,
      vd: 26.87,
      focalLengthMm: 216.9,
      glass: "Unmatched APD medium (patent optical constants; supplier unspecified)",
      apd: "patent",
      apdNote: "Table 3 θgF = 0.633; partial dispersion retained from the patent.",
      role: "PATENT INNOVATION. High-dispersion APD positive for secondary spectrum correction. Core of patent claims.",
      cemented: "D2",
      dPgF: 0.633 - (0.6438 - 0.001682 * 26.87),
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 63.88,
      focalLengthMm: -57.2,
      glass: "S-BSL7 (Ohara) / N-BK7 equiv.; catalog equivalent, production supplier unspecified",
      apd: false,
      apdNote: "Table 3 θgF = 0.536; partial dispersion retained from the patent.",
      role: "Strongly diverging. Provides negative G2 group power; chromatic balance to L21.",
      cemented: "D2",
      dPgF: 0.536 - (0.6438 - 0.001682 * 63.88),
    },
    {
      id: 7,
      name: "L31",
      label: "Element 7",
      type: "Biconvex Positive (near-plano R)",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: 59.0,
      glass: "S-LAH79 equiv. (Ohara); catalog equivalent, production supplier unspecified",
      apd: false,
      apdNote: "Table 3 θgF = 0.599; partial dispersion retained from the patent.",
      role: "High-power convergence in ultra-high-index glass. Low Petzval per unit power.",
      dPgF: 0.599 - (0.6438 - 0.001682 * 29.13),
    },
    {
      id: 8,
      name: "L32",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.52,
      focalLengthMm: 50.9,
      glass: "S-LAL14 (Ohara); catalog equivalent, production supplier unspecified",
      apd: false,
      apdNote: "Table 3 θgF = 0.543; partial dispersion retained from the patent.",
      role: "Pre-stop positive. Spherical and chromatic correction.",
      cemented: "D3",
      dPgF: 0.543 - (0.6438 - 0.001682 * 55.52),
    },
    {
      id: 9,
      name: "L33",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.57,
      focalLengthMm: -25.8,
      glass: "J-SF1 catalog spectral proxy (patent dPgF retained; production supplier unspecified)",
      apd: "patent",
      apdNote: "Table 3 θgF = 0.604; partial dispersion retained from the patent.",
      role: "Pre-stop negative. Petzval correction and higher-order spherical aberration.",
      cemented: "D3",
      dPgF: 0.604 - (0.6438 - 0.001682 * 29.57),
    },
    {
      id: 10,
      name: "L34",
      label: "Element 10",
      type: "Biconvex Positive (ED)",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 80.1,
      glass: "S-FPL51 (Ohara); catalog equivalent, production supplier unspecified",
      apd: "patent",
      apdNote: "Table 3 θgF = 0.539; partial dispersion retained from the patent.",
      role: "Post-stop ED element. Primarily lateral chromatic & secondary spectrum for off-axis fields.",
      dPgF: 0.539 - (0.6438 - 0.001682 * 81.61),
    },
    {
      id: 11,
      name: "L35",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.71,
      focalLengthMm: -24.8,
      glass: "S-NBH8 (Ohara); catalog equivalent, production supplier unspecified",
      apd: false,
      apdNote: "Table 3 θgF = 0.583; partial dispersion retained from the patent.",
      role: "Thin negative. Petzval sum correction, field flattening.",
      cemented: "D4",
      dPgF: 0.583 - (0.6438 - 0.001682 * 34.71),
    },
    {
      id: 12,
      name: "L36",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.76684,
      vd: 46.78,
      focalLengthMm: 29.0,
      glass: "S-LAH96 (Ohara); catalog equivalent, production supplier unspecified",
      apd: false,
      apdNote: "Table 3 θgF = 0.558; partial dispersion retained from the patent.",
      role: "Strong positive power for final convergence; higher-order spherical correction.",
      cemented: "D4",
      dPgF: 0.558 - (0.6438 - 0.001682 * 46.78),
    },
    {
      id: 13,
      name: "L37",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.98,
      focalLengthMm: -51.1,
      glass: "E-FL5 (HOYA); catalog equivalent, production supplier unspecified",
      apd: false,
      apdNote: "Table 3 θgF = 0.576; partial dispersion retained from the patent.",
      role: "Final negative. Residual Petzval correction, field flattening, distortion control.",
      cemented: "D5",
      dPgF: 0.576 - (0.6438 - 0.001682 * 40.98),
    },
    {
      id: 14,
      name: "L38",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: 36.9,
      glass: "S-LAH79 equiv. (Ohara); catalog equivalent, production supplier unspecified",
      apd: false,
      apdNote: "Table 3 θgF = 0.599; partial dispersion retained from the patent.",
      role: "Final positive in ultra-high-index glass. Brings beam to focus; low Petzval per unit power.",
      cemented: "D5",
      dPgF: 0.599 - (0.6438 - 0.001682 * 29.13),
    },
  ],

  /* ── Surface prescription ──
   *  24 surfaces total: 14 glass elements + stop + air interfaces.
   *  Surface labels follow patent surface numbering (1–24).
   *  Stop is between surfaces 15 and 17 (patent surface 16).
   *
   *  Cemented doublet convention:
   *    Junction surface carries the second element's elemId.
   *    Its nd = the second element's glass index (medium after the junction).
   *    The second element's rear surface uses elemId: 0 (air interface).
   */
  /* (moved from asph) ── Aspherical coefficients ──
   *  Example 3 is an all-spherical design. No aspherical surfaces.
   */
  surfaces: [
    /* ── G1: Front Positive Group ── */
    // L11 — Pos. meniscus, convex to object (near-plano rear)
    { label: "1", R: 228.1479, d: 4.915, sd: 39.4, medium: 1 },
    { label: "2", R: 6415.6205, d: 0.1, sd: 39.1 },
    // L12 — Biconvex positive (ED glass, S-FPL51)
    { label: "3", R: 98.0319, d: 9.004, sd: 39.1, medium: 2 },
    { label: "4", R: -860.7055, d: 0.1, sd: 37.3 },
    // L13+L14 cemented doublet (ED + lanthanum flint)
    { label: "5", R: 70.0561, d: 11.648, sd: 30.5, medium: 3 },
    { label: "6", R: -266.9895, d: 3.5, sd: 30.8, medium: 4 }, // junction → L14 glass
    { label: "7", R: 168.2737, sd: 29.7 }, // L14 rear → air (D7, variable)

    /* ── G2: Focusing Group (Negative) ── */
    // L21+L22 cemented doublet (APD glass + borosilicate crown)
    { label: "8", R: -156.9444, d: 4.0, sd: 26.6, medium: 5 },
    { label: "9", R: -74.8277, d: 2.5, sd: 25.9, medium: 6 }, // junction → L22 glass
    { label: "10", R: 48.8369, sd: 25.4 }, // L22 rear → air (D10, variable)

    /* ── G3: Rear Positive Group ── */
    // L31 — Biconvex positive (ultra-high-index, nd ≈ 2.001)
    { label: "11", R: 59.4115, d: 7.084, sd: 25.8, medium: 7 },
    { label: "12", R: -9603.9985, d: 0.1, sd: 24.0 },
    // L32+L33 cemented doublet (lanthanum crown + specialty flint)
    { label: "13", R: 101.9988, d: 8.889, sd: 23.5, medium: 8 },
    { label: "14", R: -54.3899, d: 1.8, sd: 22.5, medium: 9 }, // junction → L33 glass
    { label: "15", R: 28.023, d: 5.843, sd: 18.6 }, // L33 rear → air

    // Aperture stop
    { label: "STO", R: "flat", d: 1.6 },

    // L34 — Biconvex positive (ED glass, S-FPL51)
    { label: "17", R: 118.55, d: 5.54, sd: 18.6, medium: 10 },
    { label: "18", R: -59.9736, d: 0.1, sd: 17.7 },
    // L35+L36 cemented doublet (lanthanum flint + lanthanum heavy flint)
    { label: "19", R: -74.139, d: 1.6, sd: 16.6, medium: 11 },
    { label: "20", R: 23.5612, d: 8.119, sd: 16.4, medium: 12 }, // junction → L36 glass
    { label: "21", R: -400.5055, d: 2.828, sd: 14.5 }, // L36 rear → air
    // L37+L38 cemented doublet (titanium flint + ultra-high-index)
    { label: "22", R: -39.0208, d: 1.6, sd: 15.6, medium: 13 },
    { label: "23", R: 124.0696, d: 5.332, sd: 15.6, medium: 14 }, // junction → L38 glass
    { label: "24", R: -52.6359, d: 39.632, sd: 15.3 }, // L38 rear → BF
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.0,
    description:
      "Inner focus (IF). G2 cemented doublet (L21+L22) translates 12 mm toward the image side from infinity to the patent close station (β = −0.132, approximately 1 m). G1 and G3 fixed. Lens does not change external length.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (focus mechanism) ──
   *  Inner focus: G2 (L21+L22) translates toward image for close focus.
   *  D7 (G1→G2) increases, D10 (G2→G3) decreases by equal amounts.
   *  G1 and G3 remain fixed relative to the image plane.
   */
  gaps: {
    "7": { label: "D7 (G1–G2)", values: [[7.956, 19.956]] }, // G1→G2 air gap: infinity → close
    "10": { label: "D10 (G2–G3)", values: [[17.029, 5.029]] }, // G2→G3 air gap: infinity → close
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.45, fStops: [1.45, 1.8, 2, 2.5, 2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "7" },
    { text: "G2 (−)", fromSurface: "8", toSurface: "10" },
    { text: "G3 (+)", fromSurface: "11", toSurface: "24" },
  ],
  doublets: [
    { text: "D1 (ED+flint)", fromSurface: "5", toSurface: "7" },
    { text: "D2 (APD+crown)", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
    { text: "D5", fromSurface: "22", toSurface: "24" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.55, yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
