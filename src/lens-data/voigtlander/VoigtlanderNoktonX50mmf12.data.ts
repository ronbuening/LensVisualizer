import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VOIGTLÄNDER NOKTON 50mm f/1.2 X-Mount                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2025-58577 A, Example 1 (Cosina / Shibata).      ║
 * ║  Table 1 (page 9) transcribed at patent scale: f = 48.5 mm,       ║
 * ║  F1.23, ω = 16.28°, TTL 65.00 mm, BF 12.57 mm; paraxial trace     ║
 * ║  reproduces EFL 48.48 / BF 12.56 / TTL 64.99 mm.                  ║
 * ║  All-spherical Sonnar-type design for Fujifilm X (APS-C).         ║
 * ║  9 elements / 8 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: Unit focusing (entire lens extends). Table 1 publishes    ║
 * ║  one finite state: ZD0 = 369.5 mm, ZD18 = 19.36 mm, i.e. 441.3 mm ║
 * ║  object-to-image (0.44 m); production spec is 0.45 m.             ║
 * ║  Aperture: nominalFno is the patent F1.23 (marketing f/1.2);      ║
 * ║  the engine derives the iris (10.66 mm radius) from it.           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS (2026-09-21 figure audit):                 ║
 * ║    The patent prints no effective-diameter column. Values are     ║
 * ║    estimates anchored to (a) the patent's marginal-ray radii      ║
 * ║    Hh = 19.75 mm at i=1 and Hs = 10.54 mm at i=10, which the     ║
 * ║    real f/1.23 trace reproduces (19.71 / 10.52 mm), (b) the       ║
 * ║    exact-trace requirement that every surface clear that ray,    ║
 * ║    and (c) rim positions measured on FIG. 1 (page 16, 400 dpi,   ║
 * ║    18.64 px/mm from the 18 vertex crossings): L11 21.3, L12      ║
 * ║    20.2, L13 18.5, L14 15.8, L15 13.5, J21 11.9, L31 10.9,       ║
 * ║    L32 11.6 mm. S6–S9 were enlarged (15.5/13.5/13.0/12.0 →       ║
 * ║    18.5/15.8/13.3/13.5) because the stored values clipped the    ║
 * ║    f/1.23 axial ray (16.07/14.41/13.01/12.21 mm needed) and the  ║
 * ║    figure draws those curves out to the values now stored. S8   ║
 * ║    and S10 stop where FIG. 1 shows their curves meeting the flat  ║
 * ║    mounting annuli (≈13.0–13.3 and ≈11.0 mm); the drawn flanges  ║
 * ║    beyond that are mechanical blank, not glass. STO sd records   ║
 * ║    the f/1.23 iris radius (FIG. 1 draws the opening at ≈10.6 mm). ║
 * ║    Remaining surfaces sit within ~8 % of the figure and were     ║
 * ║    left unchanged.                                                ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "voigtlander-nokton-x-50f12",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER NOKTON 50mm f/1.2 X-Mount",
  subtitle: "JP 2025-58577 A EXAMPLE 1 — COSINA / SHIBATA",
  specs: ["9 ELEMENTS / 8 GROUPS", "f ≈ 48.5 mm", "F/1.23", "2ω ≈ 32.6°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 50,
  focalLengthDesign: 48.5,
  apertureMarketing: 1.2,
  apertureDesign: 1.23,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "JP 2025-58577 A",
  patentAuthors: ["Yuki Shibata"],
  patentAssignees: ["Cosina Co., Ltd."],
  patentYear: 2025,
  elementCount: 9,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: 117.9,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Front positive meniscus; begins gradual beam convergence",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: 155.0,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Second positive meniscus; continues gradual convergence",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: 50.8,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Strongest G1 positive; primary beam compression element",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.74077,
      vd: 27.74,
      fl: -64.7,
      glass: "S-TIH13 (OHARA)",
      apd: false,
      role: "Negative meniscus; spherical aberration overcorrector and chromatic balancer",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.76182,
      vd: 26.58,
      fl: -27.1,
      glass: "S-TIH14 (OHARA)",
      apd: false,
      role: "Strong negative; positions rear principal point forward for short TTL",
    },
    {
      id: 6,
      name: "L21",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.80809,
      vd: 22.76,
      fl: -54.2,
      glass: "S-NPH1 (OHARA)",
      apd: false,
      cemented: "J21",
      role: "Cemented doublet front; high-dispersion element for chromatic correction",
    },
    {
      id: 7,
      name: "L22",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.37,
      fl: 24.9,
      glass: "TAFD37A (HOYA)",
      apd: "inferred",
      apdNote:
        "Patent lists nd/νd only. Catalog equivalent for the 1.90043/37.37 pair (Hoya lists TAFD37 at 37.37 and TAFD37A at 37.38); catalog PgF 0.5767 sits ≈0.004 below the normal line. APD attribution rests on Cosina's product literature (two anomalous-partial-dispersion elements), not on the glass name — Hoya's TAFD prefix denotes tantalum dense flint.",
      cemented: "J21",
      role: "Cemented doublet rear; strongest single element, APD glass #1 (inferred)",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.37,
      fl: 28.6,
      glass: "TAFD37A (HOYA)",
      apd: "inferred",
      apdNote:
        "Patent lists nd/νd only. Same catalog equivalent as L22; APD attribution rests on Cosina's product literature, not on the glass name (Hoya TAFD = tantalum dense flint).",
      role: "Near plano-convex; final convergence toward image, APD glass #2 (inferred)",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.65412,
      vd: 39.68,
      fl: -43.7,
      glass: "S-NBH5 (OHARA)",
      apd: "inferred",
      apdNote:
        "Patent lists nd/νd only; S-NBH5 is the exact 1.65412/39.68 catalog match (Schott N-KZFS5 at 39.70 is the equivalent). KZFS/NBH-class flint with negative ΔPgF (catalog PgF 0.5735).",
      role: "Field flattener; KZFS/NBH anomalous flint counteracts Petzval curvature near image plane",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 53.73, d: 4.26, nd: 1.72916, elemId: 1, sd: 21.0 },
    { label: "2", R: 138.48, d: 0.15, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "3", R: 36.67, d: 3.67, nd: 1.72916, elemId: 2, sd: 20.0 },
    { label: "4", R: 52.0, d: 0.3, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "5", R: 26.68, d: 6.51, nd: 1.72916, elemId: 3, sd: 18.5 },
    { label: "6", R: 85.5, d: 2.98, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "7", R: 204.14, d: 1.4, nd: 1.74077, elemId: 4, sd: 15.8 },
    { label: "8", R: 38.68, d: 2.24, nd: 1.0, elemId: 0, sd: 13.3 },
    { label: "9", R: 47.82, d: 1.2, nd: 1.76182, elemId: 5, sd: 13.5 },
    { label: "10", R: 14.26, d: 7.54, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "STO", R: 1e15, d: 1.15, nd: 1.0, elemId: 0, sd: 10.7 },
    { label: "12", R: 66.0, d: 1.1, nd: 1.80809, elemId: 6, sd: 11.0 },
    { label: "13", R: 26.13, d: 4.83, nd: 1.90043, elemId: 7, sd: 11.0 },
    { label: "14", R: -145.01, d: 7.09, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "15", R: 2707.72, d: 3.83, nd: 1.90043, elemId: 8, sd: 11.5 },
    { label: "16", R: -25.97, d: 2.97, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "17", R: -26.07, d: 1.2, nd: 1.65412, elemId: 9, sd: 11.0 },
    { label: "18", R: -300.0, d: 12.57, nd: 1.0, elemId: 0, sd: 11.0 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus — BFD only) ── */
  var: {
    "18": [12.57, 19.36],
  },
  varLabels: [["18", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (Gf)", fromSurface: "1", toSurface: "10" },
    { text: "G2", fromSurface: "12", toSurface: "14" },
    { text: "G3", fromSurface: "15", toSurface: "18" },
  ],
  doublets: [{ text: "J21", fromSurface: "12", toSurface: "14" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.44,
  focusDescription:
    "Unit focusing (entire optical assembly extends toward the object). The close endpoint is the patent's tabulated state (ZD0 = 369.5 mm from surface 1, BF 19.36 mm, 441.3 mm object-to-image); the production specification is 0.45 m.",

  /* ── Aperture configuration ── */
  nominalFno: 1.23,
  fstopSeries: [1.23, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
