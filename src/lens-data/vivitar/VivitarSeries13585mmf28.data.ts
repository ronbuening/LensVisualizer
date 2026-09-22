import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VIVITAR SERIES 1 35–85 mm f/2.8 VMC                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,975,089 Table I / Fig. 1 (Ellis I. Betensky /   ║
 * ║  Ponder & Best, Inc., granted Aug. 17, 1976; Certificate of        ║
 * ║  Correction Jan. 25, 1977 fixes only claim 17's "5.93" → 5.98).   ║
 * ║  Table I is printed in mm, "as scaled to a 36–83mm focal length"; ║
 * ║  the prescription is stored native (scale factor 1).               ║
 * ║  12 elements / 9 groups (4 functional groups), all spherical.     ║
 * ║  Zoom: Groups I, II, III move (Group I forward then back);        ║
 * ║  Group IV and the iris are stationary.                             ║
 * ║  Focus: unit focus — all four groups move together (patent col. 4).║
 * ║                                                                    ║
 * ║  Zoom variable gaps (patent footnotes (1)–(3), wide → tele):       ║
 * ║    D6 = 0.47 → 19.48, D9 = 15.94 → 5.01, D12 = 9.33 → 1.19.        ║
 * ║  Table II travels (19.07 / 8.14 mm) and the Fig. 2 cam plot are    ║
 * ║  reproduced by these gaps. Only the two end stations are           ║
 * ║  tabulated, so intermediate motion is linear interpolation.        ║
 * ║  BF (surface 21) is the paraxial back focus of each station        ║
 * ║  (45.82 wide / 46.37 tele — the design is varifocal by 0.55 mm),  ║
 * ║  plus the common unit-focus extension at close focus.              ║
 * ║                                                                    ║
 * ║  NOTE ON EFL DISCREPANCY:                                          ║
 * ║    Table I as printed computes to f = 38.46 / 89.08 mm, BF 45.8,   ║
 * ║    ~7 % longer than the 36–83 mm / BF 40.06 mm the text states.   ║
 * ║    Table III group powers I–III (.0157 / −.0395 / −.0098) match   ║
 * ║    the printed rows, but Group IV computes to .0319 vs the         ║
 * ║    published .0333, so the disagreement sits in the Group IV rows ║
 * ║    and is not a uniform scale error. No single printed value can  ║
 * ║    be corrected to reconcile EFL, BF and FVD at once (the claim   ║
 * ║    tables repeat Table I verbatim), so the table is kept as        ║
 * ║    printed; focalLengthDesign records the computed EFL.            ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Fig. 1 draws the iris symbol between L10 and L11, inside the    ║
 * ║    stationary Group IV, about 0.36 of the way through the 11.53   ║
 * ║    mm R17–R18 gap. That gap is split 4.15 (R17→STO) + 7.38         ║
 * ║    (STO→R18); the split is figure-derived. The f/2.8 marginal ray ║
 * ║    reaches the iris at 11.58 mm at both stations, so one fixed    ║
 * ║    iris gives f/2.8 across the zoom (no zoomApertureModel).       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent lists none. Values are estimated from Fig. 1 (page  ║
 * ║    2 drawing, ≈13.7 px/mm at 300 dpi; L1 449 px → 32.8 mm, L2 391,║
 * ║    L3 358, L4/L5 222, L6/L7 135, L8 142, L9/L10 157, L11 159, L12 ║
 * ║    167 px), cross-checked with a real-ray trace at f/2.8 and       ║
 * ║    Y = 21.6 mm. L3, L4, L7, L8, L9 and L11 are drawn at their     ║
 * ║    knife edges and are stored 0.1–0.4 mm inside the zero-edge     ║
 * ║    height. L5 rear / L6 front are capped (9.2 / 8.5) because the  ║
 * ║    two facing concave bowls would touch at h ≈ 8.9 mm at the      ║
 * ║    tele station's 5.01 mm gap (Fig. 1 shows the L5 rear clear     ║
 * ║    aperture at ≈9 mm with a flat annulus outside it). The 72 mm   ║
 * ║    filter thread of the production lens bounds L1 at ~33 mm.       ║
 * ║    Consequences at the computed 89 mm tele EFL: the f/2.8 axial    ║
 * ║    beam is clipped ~5 % in radius by L6/L7/L8 (effective ≈ f/3);  ║
 * ║    at the patent's nominal 83 mm it fits. At the wide end the     ║
 * ║    full-frame corner chief ray (Y = 21.6) is intercepted by the   ║
 * ║    L4 knife edge and the L5 rear rim; the chief ray clears every   ║
 * ║    surface only to Y ≈ 15–16 mm, so the extreme corners are lit    ║
 * ║    by the lower part of the bundle (heavy mechanical vignetting,  ║
 * ║    a property of the design rather than of these estimates).      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "vivitar-s1-35-85-f28",
  maker: "Vivitar",
  name: "VIVITAR SERIES 1 35-85mm f/2.8 VMC",
  subtitle: "US 3,975,089 Table I — Betensky / Ponder & Best",
  specs: [
    "12 ELEMENTS / 9 GROUPS",
    "f ≈ 38.5–89.1 mm (patent: 36–83 mm)",
    "F/2.8",
    "2ω ≈ 58.7°–27.3°",
    "ALL SPHERICAL",
  ],

  focalLengthMarketing: [35, 85] as [number, number],
  focalLengthDesign: [38.5, 89.1] as [number, number],
  apertureMarketing: 2.8,
  imageFormat: "135-full-frame",
  lensMounts: ["canon-fd", "konica-ar", "m42", "minolta-sr", "nikon-f", "olympus-om", "pentax-k"],
  patentNumber: "US 3,975,089",
  patentAuthors: ["Ellis I. Betensky"],
  patentAssignees: ["Ponder & Best, Inc."],
  patentYear: 1976,
  elementCount: 12,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.805,
      vd: 25.5,
      fl: -89.6,
      glass: "SF6 (Schott)",
      apd: false,
      role: "High-index negative meniscus (concave toward image). Negative Petzval contribution to flatten field.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.531,
      vd: 62.1,
      fl: 68.7,
      glass: "BSC6 (HOYA catalog-equivalent; production supplier unspecified)",
      apd: false,
      role: "Primary positive power in Group I. Exceptionally thick (13.8 mm) for principal-plane control.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.694,
      vd: 53.3,
      fl: 87.7,
      glass: "S-LAL13 (Ohara)",
      apd: false,
      role: "Lanthanum crown meniscus completing Group I positive triplet.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.847,
      vd: 23.8,
      fl: 50.2,
      glass: "SF57 (Schott)",
      apd: false,
      cemented: "D1",
      role: "Ultra-dense flint; individually positive element of Group II variator doublet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.3,
      fl: -16.5,
      glass: "834373 — dense flint (M-NBFD10 catalog match; LaSF5/S-LAH60 class)",
      apd: false,
      cemented: "D1",
      role: "Strongly negative element dominating Group II. R9 (+17.98 mm) is the steepest curvature in the system.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.498,
      vd: 65.1,
      fl: -19.2,
      glass: "BSL3 (OHARA catalog equivalent; production supplier unspecified)",
      apd: false,
      cemented: "D2",
      role: "Low-index crown element of Group III compensator doublet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.785,
      vd: 25.7,
      fl: 24.5,
      glass: "SF11 (Schott)",
      apd: false,
      cemented: "D2",
      role: "Dense flint in reversed crown-flint arrangement; opposes Group II chromatism.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.62,
      vd: 60.3,
      fl: 38.4,
      glass: "SK16 (Schott)",
      apd: false,
      role: "Strongest positive singlet. First element of stationary relay Group IV.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.487,
      vd: 70.4,
      fl: 31.4,
      glass: "FK5 (Schott)",
      apd: false,
      cemented: "D3",
      role: "Fluor crown with near-plano front (R15 ≈ −502 mm). Positive power with minimal chromatic contribution.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.805,
      vd: 25.5,
      fl: -27.8,
      glass: "SF6 (Schott)",
      apd: false,
      cemented: "D3",
      role: "Chromatic corrector for L9. FK5+SF6 pairing yields Δνd = 44.9 — the most aggressive achromat in the system.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.639,
      vd: 45.1,
      fl: 33.9,
      glass: "BAF12 (SUMITA catalog-equivalent; production supplier unspecified)",
      apd: false,
      role: "Strongly asymmetric biconvex behind the iris. Moderate-dispersion barium flint for higher-order chromatic tuning.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.805,
      vd: 25.5,
      fl: -54.9,
      glass: "SF6 (Schott)",
      apd: false,
      role: "Field flattener. High-index SF6 maximizes negative Petzval contribution per unit power. Convex side faces image.",
    },
  ],

  /* ── Surface prescription (US 3,975,089 Table I, mm) ── */
  surfaces: [
    // ── Group I (L1, L2, L3) — moves during zoom ──
    { label: "1", R: 135.72, d: 2.6, nd: 1.805, elemId: 1, sd: 32.5 }, // L1 front
    { label: "2", R: 46.71, d: 2.84, nd: 1.0, elemId: 0, sd: 32.0 }, // L1 rear → air
    { label: "3", R: 46.5, d: 13.8, nd: 1.531, elemId: 2, sd: 28.5 }, // L2 front
    { label: "4", R: -152.15, d: 0.1, nd: 1.0, elemId: 0, sd: 28.5 }, // L2 rear → air
    { label: "5", R: 41.84, d: 6.6, nd: 1.694, elemId: 3, sd: 25.8 }, // L3 front
    { label: "6", R: 125.2, d: 0.47, nd: 1.0, elemId: 0, sd: 25.8 }, // L3 rear → air — var gap (1)

    // ── Group II (L4–L5 cemented) — moves during zoom ──
    { label: "7", R: 140.19, d: 3.1, nd: 1.847, elemId: 4, sd: 15.8 }, // L4 front
    { label: "8", R: -60.45, d: 1.1, nd: 1.834, elemId: 5, sd: 15.8 }, // L4→L5 junction
    { label: "9", R: 17.98, d: 15.94, nd: 1.0, elemId: 0, sd: 9.2 }, // L5 rear → air — var gap (2)

    // ── Group III (L6–L7 cemented) — moves during zoom ──
    { label: "10", R: -16.56, d: 1.0, nd: 1.498, elemId: 6, sd: 8.5 }, // L6 front
    { label: "11", R: 22.97, d: 3.1, nd: 1.785, elemId: 7, sd: 10.4 }, // L6→L7 junction
    { label: "12", R: -112.11, d: 9.33, nd: 1.0, elemId: 0, sd: 10.4 }, // L7 rear → air — var gap (3)

    // ── Group IV (L8, L9–L10, STO, L11, L12) — stationary during zoom ──
    { label: "13", R: 53.32, d: 2.9, nd: 1.62, elemId: 8, sd: 11.3 }, // L8 front
    { label: "14", R: -42.06, d: 2.0, nd: 1.0, elemId: 0, sd: 11.3 }, // L8 rear → air
    { label: "15", R: -502.33, d: 5.0, nd: 1.487, elemId: 9, sd: 11.0 }, // L9 front
    { label: "16", R: -14.89, d: 0.9, nd: 1.805, elemId: 10, sd: 11.0 }, // L9→L10 junction
    { label: "17", R: -45.59, d: 4.15, nd: 1.0, elemId: 0, sd: 11.5 }, // L10 rear → air (patent 11.53 gap, part 1)
    // ── Aperture stop — Fig. 1 iris symbol between L10 and L11; split of the 11.53 mm gap is figure-derived ──
    { label: "STO", R: 1e15, d: 7.38, nd: 1.0, elemId: 0, sd: 11.6 }, // STO → L11 (patent 11.53 gap, part 2)
    { label: "18", R: 125.96, d: 3.5, nd: 1.639, elemId: 11, sd: 11.7 }, // L11 front
    { label: "19", R: -25.9, d: 5.98, nd: 1.0, elemId: 0, sd: 11.7 }, // L11 rear → air
    { label: "20", R: -19.4, d: 1.296, nd: 1.805, elemId: 12, sd: 12.2 }, // L12 front
    { label: "21", R: -35.59, d: 45.82, nd: 1.0, elemId: 0, sd: 12.2 }, // L12 rear → image — var BF
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Zoom positions (patent's stated station focal lengths) ── */
  zoomPositions: [36, 83],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings ──
   *  Zoom: patent footnotes (1) D6, (2) D9, (3) D12 at the wide / tele stations.
   *  Unit focus: the zoom gaps are identical at infinity and close focus.
   *  BF (surface 21): paraxial back focus of each station at infinity (calculated
   *  from Table I), plus a common 11.18 mm whole-lens extension at close focus.
   *  That single extension reproduces the production close-focus data — 0.26 m
   *  object-to-image at 35 mm (m ≈ −0.29, published 1:3) and ≈0.885 m at 85 mm
   *  (published 0.9 m) — see zoomCloseFocusM.
   */
  var: {
    "6": [
      [0.47, 0.47],
      [19.48, 19.48],
    ],
    "9": [
      [15.94, 15.94],
      [5.01, 5.01],
    ],
    "12": [
      [9.33, 9.33],
      [1.19, 1.19],
    ],
    "21": [
      [45.82, 57.0],
      [46.37, 57.55],
    ],
  },

  varLabels: [
    ["6", "D6"],
    ["9", "D9"],
    ["12", "D12"],
    ["21", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I (+)", fromSurface: "1", toSurface: "6" },
    { text: "II (−)", fromSurface: "7", toSurface: "9" },
    { text: "III (−)", fromSurface: "10", toSurface: "12" },
    { text: "IV (+)", fromSurface: "13", toSurface: "21" },
  ],

  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "15", toSurface: "17" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.26,
  zoomCloseFocusM: [0.26, 0.885],
  focusDescription:
    "Unit focus — all four groups move together on the focusing thread (patent col. 4); one push-pull ring zooms and focuses. Close-focus states use a single 11.18 mm extension calculated to reach the production 0.26 m (film plane) at 35 mm; the same extension gives ≈0.885 m at 85 mm (published 0.9 m).",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
