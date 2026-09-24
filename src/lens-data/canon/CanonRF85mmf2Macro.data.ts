import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Canon RF 85mm f/2 Macro IS STM              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2021/0072505 A1, First Numerical Example         ║
 * ║  (Kobayashi, Canon Kabushiki Kaisha), stored at native patent     ║
 * ║  scale (f = 82.45 mm, FNO 2.06, ω = 14.70°, Y = 21.64 mm).         ║
 * ║  Positive-front / negative-rear telephoto-type architecture.      ║
 * ║  12 elements / 11 groups, 0 aspherical surfaces.                  ║
 * ║  Focus: whole front group L1 (surfaces 1–12, incl. stop) moves    ║
 * ║  toward the object; rear group L2 is fixed. The only variable gap ║
 * ║  is the patent's d12, tabulated at infinity, β = −0.02 and        ║
 * ║  β = −0.5 (2.52 / 3.60 / 29.52 mm) — all three kept as keyframes. ║
 * ║  The β = −0.5 state is 346.2 mm object-to-image (calculated),     ║
 * ║  i.e. the production 0.35 m MFD. No cover glass or filter is      ║
 * ║  listed; the last gap is the patent BF 17.60 mm.                  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent publishes no effective diameters. Values are        ║
 * ║    ray-clearance estimates checked against FIG. 1 (profiled at    ║
 * ║    0.0983 mm/px from the S1–S24 vertex span). Stored rims sit     ║
 * ║    within ~15 % of the drawing (front menisci and L11/L12 about   ║
 * ║    7–13 % larger than drawn). The cemented L5/L6 front and        ║
 * ║    junction were raised to the drawn 14.2 mm rim because the      ║
 * ║    f/2.06 axial pencil reaches 13.7 mm at S10 at β = −0.5.        ║
 * ║    STO sd records the real-ray f/2.06 iris radius (13.5 mm).      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-85f2-macro",
  maker: "Canon",
  name: "CANON RF 85mm f/2 Macro IS STM",
  subtitle: "US 2021/0072505 A1 EXAMPLE 1 — CANON / KOBAYASHI",
  specs: ["12 ELEMENTS / 11 GROUPS", "f ≈ 82.45 mm", "F/2.06", "2ω ≈ 29.4°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 85,
  focalLengthDesign: 82.45,
  apertureMarketing: 2.0,
  apertureDesign: 2.06,
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2021/0072505 A1",
  patentAuthors: ["Kana Kobayashi"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2021,
  elementCount: 12,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.6,
      fl: 200.6,
      glass: "S-BSM14 (OHARA)",
      apd: false,
      role: "Front positive meniscus; gentle initial convergence of on-axis beam.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.6,
      fl: 200.8,
      glass: "S-BSM14 (OHARA)",
      apd: false,
      role: "Second positive meniscus; continues convergence. Same glass as L1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      fl: 101.5,
      glass: "S-FPL51 (OHARA) — UD",
      apd: "inferred",
      apdNote:
        "Fluorophosphate crown; strong positive APD (Pg,F above normal line). Canon designates as UD (Ultra-low Dispersion).",
      role: "Primary chromatic corrector; strongest positive power in pre-stop group. Paired with L4 for achromatization and secondary spectrum suppression.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.1,
      fl: -43.7,
      glass: "S-TIM28 (OHARA)",
      apd: false,
      role: "Sole negative element in pre-stop group. Chromatic counterpart to L3; strong negative Petzval and spherical aberration contributions.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -95.1,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Negative component of cemented doublet after stop. High-dispersion flint for chromatic correction of converging post-stop beam.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.4,
      fl: 35.1,
      glass: "TAFD37A (HOYA)",
      apd: false,
      cemented: "D1",
      role: "Positive component of cemented doublet. Second-highest nd in system (1.900); dominant converging power of front group.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.7,
      fl: -45.6,
      glass: "S-NBH8 (OHARA)",
      apd: false,
      role: "First element of fixed rear group (patent element F). Nearly collimates converging beam from front group; suppresses off-axis aberration variation during focus excursion.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.5,
      fl: 85.4,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      role: "Positive power in rear group; maintains Petzval balance. Exact S-LAH65V coordinate (1.80400 / 46.5).",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.9,
      fl: 68.3,
      glass: "E-FDS1 (HOYA)",
      apd: "inferred",
      apdNote:
        "Ultra-high-dispersion dense flint (νd 20.9); such flints lie above the normal Pg,F line. Inferred from the catalog glass — the patent gives no partial-dispersion data. OHARA PBH21 and Schott N-SF66 share the 923209 coordinate.",
      role: "Concave-toward-object positive meniscus; highest index (1.923) and lowest Abbe number in the system. Rear-group chromatic balance element.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      fl: -34.6,
      glass: "S-LAH60 (OHARA)",
      apd: false,
      role: "Strongest negative element in system. Equal-and-opposite radii (R = ±57.965) eliminate shape-dependent coma; functions primarily as Petzval corrector.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      fl: 35.6,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Patent element Gp (positive lens adjacent to Gn). Strongest positive singlet; corrects magnification chromatic aberration and distortion near image plane.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -63.3,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Patent element Gn (negative lens closest to image). Same glass as L5. Field curvature correction and exit-angle control for digital sensor telecentricity.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Front group L1 (positive, moves during focus) ──
    // L1a: pre-stop (L1–L4)
    { label: "1", R: 114.175, d: 3.19, nd: 1.60311, elemId: 1, sd: 22.5 }, // L1 front
    { label: "2", R: 2010.098, d: 0.5, nd: 1.0, elemId: 0, sd: 22.5 }, // L1 rear → air
    { label: "3", R: 61.533, d: 3.2, nd: 1.60311, elemId: 2, sd: 22.0 }, // L2 front
    { label: "4", R: 122.66, d: 6.6, nd: 1.0, elemId: 0, sd: 22.0 }, // L2 rear → air
    { label: "5", R: 42.821, d: 5.01, nd: 1.497, elemId: 3, sd: 20.0 }, // L3 front (UD)
    { label: "6", R: 272.642, d: 7.5, nd: 1.0, elemId: 0, sd: 20.0 }, // L3 rear → air
    { label: "7", R: -147.348, d: 1.3, nd: 1.68893, elemId: 4, sd: 15.0 }, // L4 front
    { label: "8", R: 37.962, d: 4.9, nd: 1.0, elemId: 0, sd: 14.5 }, // L4 rear → air
    // Aperture stop
    { label: "STO", R: 1e15, d: 2.86, nd: 1.0, elemId: 0, sd: 13.5 },
    // L1b: post-stop cemented doublet (L5+L6)
    { label: "10", R: 114.201, d: 1.3, nd: 1.84666, elemId: 5, sd: 14.2 }, // L5 front
    { label: "11", R: 46.967, d: 6.4, nd: 1.90043, elemId: 6, sd: 14.2 }, // L5→L6 junction
    { label: "12", R: -90.592, d: 2.52, nd: 1.0, elemId: 0, sd: 14.2 }, // L6 rear → air (variable)
    // ── Rear group L2 (negative, fixed during focus) ──
    { label: "13", R: -78.073, d: 1.15, nd: 1.72047, elemId: 7, sd: 13.0 }, // L7 front
    { label: "14", R: 57.128, d: 0.49, nd: 1.0, elemId: 0, sd: 12.0 }, // L7 rear → air
    { label: "15", R: 86.252, d: 2.39, nd: 1.804, elemId: 8, sd: 12.5 }, // L8 front
    { label: "16", R: -333.048, d: 2.22, nd: 1.0, elemId: 0, sd: 13.0 }, // L8 rear → air
    { label: "17", R: -284.806, d: 2.58, nd: 1.92286, elemId: 9, sd: 14.0 }, // L9 front
    { label: "18", R: -51.857, d: 0.85, nd: 1.0, elemId: 0, sd: 14.0 }, // L9 rear → air
    { label: "19", R: -57.965, d: 0.94, nd: 1.834, elemId: 10, sd: 14.5 }, // L10 front
    { label: "20", R: 57.965, d: 6.96, nd: 1.0, elemId: 0, sd: 14.5 }, // L10 rear → air
    { label: "21", R: 52.408, d: 9.02, nd: 1.83481, elemId: 11, sd: 21.5 }, // L11 front (Gp)
    { label: "22", R: -63.153, d: 13.69, nd: 1.0, elemId: 0, sd: 21.5 }, // L11 rear → air
    { label: "23", R: -34.104, d: 1.7, nd: 1.84666, elemId: 12, sd: 21.0 }, // L12 front (Gn)
    { label: "24", R: -95.879, d: 17.6, nd: 1.0, elemId: 0, sd: 21.0 }, // L12 rear → BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Published variable air spacings: infinity, β=-0.02, β=-0.5 ── */
  /* β=-0.02 coordinate = closeFocusM / 4.2775 m (calculated object-to-image for that state). */
  focusPositions: [0, 0.0818, 1],
  var: {
    "12": [2.52, 3.6, 29.52],
  },
  varLabels: [["12", "d12"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L1 (FRONT)", fromSurface: "1", toSurface: "12" },
    { text: "L2 (REAR)", fromSurface: "13", toSurface: "24" },
  ],
  doublets: [{ text: "D1", fromSurface: "10", toSurface: "12" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.35,
  focusDescription:
    "Unit focus — entire front group L1 (6 elements, 5 groups + aperture stop) translates toward the object. Rear group L2 (6 elements, 6 groups) fixed. Patent d12 grows 2.52 → 3.60 → 29.52 mm (∞, β = −0.02, β = −0.5): 27.0 mm extension at 0.5×.",

  /* ── Aperture configuration ── */
  nominalFno: 2.06,
  fstopSeries: [2.06, 2.8, 4, 5.6, 8, 11, 16, 22, 29],
  maxFstop: 29,
  apertureBlades: 9,

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
