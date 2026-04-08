import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — FUJIFILM FUJINON XF 90mm f/2 R LM WR        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2016/0274335 A1 Example 1 (Kawamura / Fujifilm). ║
 * ║  Three-group inner-focus telephoto for APS-C mirrorless.           ║
 * ║  11 elements / 8 groups, 0 aspherical surfaces, 3 ED elements.    ║
 * ║  Focus: Inner focus — G2 (cemented doublet) moves toward image.   ║
 * ║                                                                    ║
 * ║  NOTE ON R1 (OCR CORRECTION):                                      ║
 * ║    Patent Table 1 surface 1 reads "134,542.19" in US-format OCR.  ║
 * ║    The comma is a thousands separator, yielding R ≈ 135 m (flat). ║
 * ║    However, paraxial EFL with R1 = 134542 gives ~107 mm, far from ║
 * ║    the patent-stated f = 87.495. Using R1 = 134.54219 recovers    ║
 * ║    EFL = 87.50 and all seven conditional formulae. The decimal     ║
 * ║    point was corrupted to a comma during OCR. R1 = 134.54219.     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. Estimated by combined      ║
 * ║    marginal + chief ray trace at the design f-number (f/2.06)     ║
 * ║    and full field angle (ω = 9.2°), with ~8% mechanical clearance.║
 * ║    Constrained by 62 mm filter thread, positive edge thickness,   ║
 * ║    cemented-pair matching, and sd/|R| < 0.90.                     ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent Table 1 includes a parallel plate PP (S21–S22,           ║
 * ║    nd = 1.51633, d = 2.850 mm). Excluded from surfaces array;     ║
 * ║    its optical path length is folded into the BFD (last surface   ║
 * ║    d = patent Bf = 24.663 mm, air-converted).                     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-xf90f2",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 90mm f/2 R LM WR",
  subtitle: "US 2016/0274335 A1 EXAMPLE 1 — FUJIFILM / KAWAMURA",
  specs: [
    "11 ELEMENTS / 8 GROUPS",
    "f ≈ 87.5 mm (marketed 90 mm)",
    "F/2.06 (marketed F/2.0)",
    "2ω ≈ 18.4°",
    "3 ED ELEMENTS",
    "ALL SPHERICAL",
  ],

  focalLengthMarketing: 90,
  focalLengthDesign: 87.5,
  apertureMarketing: 2.0,
  apertureDesign: 2.06,
  patentYear: 2016,
  elementCount: 11,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.14,
      fl: 182.1,
      glass: "S-BSL7 (OHARA)",
      apd: false,
      role: "Weak front positive — begins converging beam with low spherical contribution",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 114.9,
      glass: "FCD1 (HOYA)",
      apd: "inferred",
      apdNote: "ΔθgF ≈ +0.032, fluorophosphate crown — strongest ED element in design",
      role: "Primary ED element — corrects longitudinal chromatic aberration in G1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.73,
      fl: 67.1,
      glass: "S-FPM2 (OHARA)",
      apd: "inferred",
      apdNote: "ΔθgF ≈ +0.014, phosphate crown — moderate anomalous dispersion",
      cemented: "D1",
      role: "Strongest G1 positive — bulk of front group convergence; cemented to L14",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7495,
      vd: 35.33,
      fl: -58.8,
      glass: "S-NBH53 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "High-dispersion corrector — achromatizes G1 at cemented junction with L13",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 18.9,
      fl: 123.9,
      glass: "S-NPH2 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Ultra-high-index focus group positive — achromatizes G2 with L22",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.63854,
      vd: 55.38,
      fl: -34.9,
      glass: "S-BAM4 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Focus group negative — dominant diverging power of inner-focus G2",
    },
    {
      id: 7,
      name: "L31",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.59522,
      vd: 67.73,
      fl: 140.2,
      glass: "S-FPM2 (OHARA)",
      apd: "inferred",
      apdNote: "ΔθgF ≈ +0.014 — same ED glass as L13; third ED element",
      role: "Third ED element — corrects lateral color and secondary spectrum in rear group",
    },
    {
      id: 8,
      name: "L32",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      fl: 31.9,
      glass: "S-LAH55VS (OHARA)",
      apd: false,
      cemented: "D3",
      role: "Strongest positive in entire lens — main relay element; cemented to L33",
    },
    {
      id: 9,
      name: "L33",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.1,
      fl: -27.9,
      glass: "S-TIM22 (OHARA)",
      apd: false,
      cemented: "D3",
      role: "High-dispersion corrector — achromatizes G31 doublet with L32",
    },
    {
      id: 10,
      name: "L34",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.87,
      fl: 41.5,
      glass: "S-LAM60 (OHARA)",
      apd: false,
      role: "G32 singlet — corrects field curvature and astigmatism at large off-axis offset",
    },
    {
      id: 11,
      name: "L35",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.43,
      fl: -72.4,
      glass: "S-NSL3 (OHARA)",
      apd: false,
      role: "G33 field flattener — directs off-axis rays for telecentricity; shortens total track",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: Front objective (positive, f ≈ +70.4 mm) ──
    { label: "1", R: 134.54219, d: 4.55, nd: 1.51633, elemId: 1, sd: 27.0 }, // L11 front
    { label: "2", R: -308.4824, d: 0.52, nd: 1.0, elemId: 0, sd: 27.0 }, // L11 rear → air
    { label: "3", R: 57.11452, d: 6.05, nd: 1.497, elemId: 2, sd: 24.5 }, // L12 front (ED)
    { label: "4", R: 1e15, d: 0.18, nd: 1.0, elemId: 0, sd: 23.5 }, // L12 rear (flat) → air
    { label: "5", R: 54.95203, d: 7.01, nd: 1.59522, elemId: 3, sd: 22.5 }, // L13 front (cemented D1)
    { label: "6", R: -138.92, d: 3.0, nd: 1.7495, elemId: 4, sd: 22.5 }, // L13→L14 junction
    { label: "7", R: 65.12954, d: 8.05, nd: 1.0, elemId: 0, sd: 22.5 }, // L14 rear → air

    // ── Aperture stop (fixed between G1 and G2) ──
    { label: "STO", R: 1e15, d: 4.6, nd: 1.0, elemId: 0, sd: 14.2 },

    // ── G2: Inner-focus group (negative, f ≈ −48.1 mm) ──
    { label: "9", R: -99.96703, d: 2.61, nd: 1.92286, elemId: 5, sd: 14.5 }, // L21 front (cemented D2)
    { label: "10", R: -53.995, d: 1.49, nd: 1.63854, elemId: 6, sd: 14.5 }, // L21→L22 junction
    { label: "11", R: 38.38332, d: 18.753, nd: 1.0, elemId: 0, sd: 14.5 }, // L22 rear → air

    // ── G3: Rear relay (positive, f ≈ +57.5 mm) ──
    // Sub-group G31 (positive): L31 + [L32+L33 cemented]
    { label: "12", R: -299.93361, d: 2.8, nd: 1.59522, elemId: 7, sd: 16.5 }, // L31 front (ED)
    { label: "13", R: -65.51447, d: 0.25, nd: 1.0, elemId: 0, sd: 16.0 }, // L31 rear → air
    { label: "14", R: 65.03027, d: 6.51, nd: 1.83481, elemId: 8, sd: 16.0 }, // L32 front (cemented D3)
    { label: "15", R: -43.003, d: 1.35, nd: 1.6727, elemId: 9, sd: 16.0 }, // L32→L33 junction
    { label: "16", R: 33.7544, d: 9.18, nd: 1.0, elemId: 0, sd: 16.0 }, // L33 rear → air

    // Sub-group G32 (positive): L34
    { label: "17", R: 39.82254, d: 6.4, nd: 1.713, elemId: 10, sd: 16.0 }, // L34 front
    { label: "18", R: -107.03524, d: 5.75, nd: 1.0, elemId: 0, sd: 15.5 }, // L34 rear → air

    // Sub-group G33 (negative): L35
    { label: "19", R: -75.1706, d: 1.35, nd: 1.51742, elemId: 11, sd: 13.5 }, // L35 front
    { label: "20", R: 75.1706, d: 24.663, nd: 1.0, elemId: 0, sd: 13.5 }, // L35 rear → image (BFD, air-equiv.)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (inner focus) ──
   *  G2 moves 8.096 mm toward image from infinity to 0.6 m.
   *  Total gap (DD[8] + DD[11]) is constant at 23.353 mm.
   */
  var: {
    STO: [4.6, 12.696], // stop to G2 front
    "11": [18.753, 10.657], // G2 rear to G3 front
  },
  varLabels: [
    ["STO", "D(St)"],
    ["11", "BF₂"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "7" },
    { text: "G2 (−) ← Focus", fromSurface: "9", toSurface: "11" },
    { text: "G3 (+)", fromSurface: "12", toSurface: "20" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.6,
  focusDescription: "Inner focus — G2 cemented doublet (L21+L22) moves 8.1 mm toward image. Quad Linear Motor drive.",

  /* ── Aperture configuration ── */
  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
