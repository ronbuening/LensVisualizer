import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VIVITAR SERIES 1 35–85 mm f/2.8 VMC                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,975,089 Table I / Fig. 1 (Ellis I. Betensky /   ║
 * ║  Ponder & Best, Inc., granted Aug. 17, 1976). The Certificate of   ║
 * ║  Correction of Jan. 25, 1977 touches one table value, claim 17's   ║
 * ║  "5.93" → 5.98; its other items are a formula and a claim          ║
 * ║  dependency.                                                       ║
 * ║  Table I is printed in mm, "as scaled to a 36–83mm focal length"; ║
 * ║  the prescription is stored native (scale factor 1).               ║
 * ║  12 elements / 9 groups (4 functional groups), all spherical.     ║
 * ║  Zoom: Groups I, II, III move (Group I forward then back);        ║
 * ║  Group IV and the iris are stationary.                             ║
 * ║  Focus: unit focus — all four groups move together (patent col. 4).║
 * ║                                                                    ║
 * ║  Zoom variable gaps (patent footnotes (1)–(3), wide → tele):       ║
 * ║    D6 = 0.47 → 19.48, D9 = 15.94 → 5.01, D12 = 9.33 → 1.19.        ║
 * ║  Table II's Group II / III travels (19.07 / 8.14 mm) and the ends  ║
 * ║  of their Fig. 2 curves are reproduced by these gaps; the Group I  ║
 * ║  curve plots about 0.7 mm above the R6–R13 distance. Only the two  ║
 * ║  end stations are tabulated, so intermediate motion is linear      ║
 * ║  interpolation.                                                    ║
 * ║  BF (surface 21) is the paraxial back focus of each station        ║
 * ║  (45.82 wide / 46.37 tele — the design is varifocal by 0.55 mm),  ║
 * ║  plus the common unit-focus extension at close focus.              ║
 * ║                                                                    ║
 * ║  NOTE ON EFL DISCREPANCY (sourceErrata: unresolved):               ║
 * ║    Every row of Table I matches this file, and so do the copies in ║
 * ║    claims 7, 8 and 17 (claim 17 as corrected), except that claim 8 ║
 * ║    prints R21 as −35.95.                                           ║
 * ║    As printed the table computes to f = 38.46 / 89.08 mm, BF 45.82 ║
 * ║    / 46.37 mm and a front-vertex distance of 138.9 / 139.4 mm; the ║
 * ║    text states 36–83 mm, 40.06 mm and 133.7 / 135.7 mm. Computed   ║
 * ║    group powers against Table III: I .0158 (.0157), II −.0395      ║
 * ║    (−.0395), III −.0100 (−.0098), I–III −.0306 (−.0301), IV .0319  ║
 * ║    (.0333), whole lens at wide .0260 (.0277). Nearly all of the    ║
 * ║    focal-length gap comes from Group IV, and it is not a uniform   ║
 * ║    scale error: Table II's Group II / III travels follow from the  ║
 * ║    printed gaps.                                                   ║
 * ║    No single Group IV radius, thickness or index reproduces f, BF  ║
 * ║    and the Group IV power together, and claim 8's R21 moves f      ║
 * ║    further off (38.86 / 90.02 mm). The patent has no aberration    ║
 * ║    plots and no second example, and the printed rows satisfy every ║
 * ║    claimed condition, so the table is kept as printed;             ║
 * ║    focalLengthDesign records the computed EFL.                     ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Fig. 1 draws the iris symbol between L10 and L11, inside the    ║
 * ║    stationary Group IV, about 0.36 of the way through the 11.53   ║
 * ║    mm R17–R18 gap. That gap is split 4.15 (R17→STO) + 7.38         ║
 * ║    (STO→R18); the split is figure-derived. The f/2.8 marginal ray ║
 * ║    reaches the iris at 11.58 mm at both stations, so one fixed    ║
 * ║    iris gives f/2.8 across the zoom (zoomApertureModel fixed).    ║
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
  schema: 2,
  key: "vivitar-s1-35-85-f28",
  maker: "Vivitar",
  name: "VIVITAR SERIES 1 35-85mm f/2.8 VMC",
  subtitle: "US 3,975,089 Table I — Betensky / Ponder & Best",

  catalog: {
    lensMounts: ["canon-fd", "konica-ar", "m42", "minolta-sr", "nikon-f", "olympus-om", "pentax-k"],
    imageFormat: "135-full-frame",
    specs: [
      "12 ELEMENTS / 9 GROUPS",
      "f ≈ 38.5–89.1 mm (patent: 36–83 mm)",
      "F/2.8",
      "2ω ≈ 58.7°–27.3°",
      "ALL SPHERICAL",
    ],
    elementCount: 12,
    groupCount: 9,
    focalLengthMm: { marketing: [35, 85], design: [38.5, 89.1] },
    fNumber: { marketing: 2.8 },
  },

  source: {
    patentNumber: "US 3,975,089",
    patentYear: 1976,
    authors: ["Ellis I. Betensky"],
    assignees: ["Ponder & Best, Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Table I as printed computes to f = 38.46 / 89.08 mm and a back focus of 45.82 mm; the text states 36–83 mm and 40.06 mm. Group IV computes to a power of 0.0319 against Table III's .0333. The claim copies of the table carry the same Group IV rows (claim 17 as corrected by the Certificate), apart from claim 8's R21 of −35.95, which moves f further off, and no single Group IV value reproduces the stated focal lengths, back focus and group power together.",
      },
    ],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.805,
      vd: 25.5,
      focalLengthMm: -89.6,
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
      focalLengthMm: 68.7,
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
      focalLengthMm: 87.7,
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
      focalLengthMm: 50.2,
      glass: "SF57 (Schott)",
      apd: false,
      role: "Ultra-dense flint; individually positive element of Group II variator doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.3,
      focalLengthMm: -16.5,
      glass: "834373 — dense flint (M-NBFD10 catalog match; LaSF5/S-LAH60 class)",
      apd: false,
      role: "Strongly negative element dominating Group II. R9 (+17.98 mm) is the steepest curvature in the system.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.498,
      vd: 65.1,
      focalLengthMm: -19.2,
      glass: "BSL3 (OHARA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Low-index crown element of Group III compensator doublet.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.785,
      vd: 25.7,
      focalLengthMm: 24.5,
      glass: "SF11 (Schott)",
      apd: false,
      role: "Dense flint in reversed crown-flint arrangement; opposes Group II chromatism.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.62,
      vd: 60.3,
      focalLengthMm: 38.4,
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
      focalLengthMm: 31.4,
      glass: "FK5 (Schott)",
      apd: false,
      role: "Fluor crown with near-plano front (R15 ≈ −502 mm). Positive power with minimal chromatic contribution.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.805,
      vd: 25.5,
      focalLengthMm: -27.8,
      glass: "SF6 (Schott)",
      apd: false,
      role: "Chromatic corrector for L9. FK5+SF6 pairing yields Δνd = 44.9 — the most aggressive achromat in the system.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.639,
      vd: 45.1,
      focalLengthMm: 33.9,
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
      focalLengthMm: -54.9,
      glass: "SF6 (Schott)",
      apd: false,
      role: "Field flattener. High-index SF6 maximizes negative Petzval contribution per unit power. Convex side faces image.",
    },
  ],

  /* ── Surface prescription (US 3,975,089 Table I, mm) ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // ── Group I (L1, L2, L3) — moves during zoom ──
    { label: "1", R: 135.72, d: 2.6, sd: 32.5, medium: 1 }, // L1 front
    { label: "2", R: 46.71, d: 2.84, sd: 32.0 }, // L1 rear → air
    { label: "3", R: 46.5, d: 13.8, sd: 28.5, medium: 2 }, // L2 front
    { label: "4", R: -152.15, d: 0.1, sd: 28.5 }, // L2 rear → air
    { label: "5", R: 41.84, d: 6.6, sd: 25.8, medium: 3 }, // L3 front
    { label: "6", R: 125.2, sd: 25.8 }, // L3 rear → air — var gap (1)

    // ── Group II (L4–L5 cemented) — moves during zoom ──
    { label: "7", R: 140.19, d: 3.1, sd: 15.8, medium: 4 }, // L4 front
    { label: "8", R: -60.45, d: 1.1, sd: 15.8, medium: 5 }, // L4→L5 junction
    { label: "9", R: 17.98, sd: 9.2 }, // L5 rear → air — var gap (2)

    // ── Group III (L6–L7 cemented) — moves during zoom ──
    { label: "10", R: -16.56, d: 1.0, sd: 8.5, medium: 6 }, // L6 front
    { label: "11", R: 22.97, d: 3.1, sd: 10.4, medium: 7 }, // L6→L7 junction
    { label: "12", R: -112.11, sd: 10.4 }, // L7 rear → air — var gap (3)

    // ── Group IV (L8, L9–L10, STO, L11, L12) — stationary during zoom ──
    { label: "13", R: 53.32, d: 2.9, sd: 11.3, medium: 8 }, // L8 front
    { label: "14", R: -42.06, d: 2.0, sd: 11.3 }, // L8 rear → air
    { label: "15", R: -502.33, d: 5.0, sd: 11.0, medium: 9 }, // L9 front
    { label: "16", R: -14.89, d: 0.9, sd: 11.0, medium: 10 }, // L9→L10 junction
    { label: "17", R: -45.59, d: 4.15, sd: 11.5 }, // L10 rear → air (patent 11.53 gap, part 1)
    // ── Aperture stop — Fig. 1 iris symbol between L10 and L11; split of the 11.53 mm gap is figure-derived ──
    { label: "STO", R: "flat", d: 7.38 }, // STO → L11 (patent 11.53 gap, part 2)
    { label: "18", R: 125.96, d: 3.5, sd: 11.7, medium: 11 }, // L11 front
    { label: "19", R: -25.9, d: 5.98, sd: 11.7 }, // L11 rear → air
    { label: "20", R: -19.4, d: 1.296, sd: 12.2, medium: 12 }, // L12 front
    { label: "21", R: -35.59, sd: 12.2 }, // L12 rear → image — var BF
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom positions (patent's stated station focal lengths) ── */
    stations: [
      { focalLengthMm: 36, closeFocusM: 0.26, label: "Wide" },
      { focalLengthMm: 83, closeFocusM: 0.885, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.26,
    description:
      "Unit focus — all four groups move together on the focusing thread (patent col. 4); one push-pull ring zooms and focuses. Close-focus states use a single 11.18 mm extension calculated to reach the production 0.26 m (film plane) at 35 mm; the same extension gives ≈0.885 m at 85 mm (published 0.9 m).",
  },

  /* (moved from var) ── Variable air spacings ──
   *  Zoom: patent footnotes (1) D6, (2) D9, (3) D12 at the wide / tele stations.
   *  Unit focus: the zoom gaps are identical at infinity and close focus.
   *  BF (surface 21): paraxial back focus of each station at infinity (calculated
   *  from Table I), plus a common 11.18 mm whole-lens extension at close focus.
   *  That single extension reproduces the production close-focus data — 0.26 m
   *  object-to-image at 35 mm (m ≈ −0.29, published 1:3) and ≈0.885 m at 85 mm
   *  (published 0.9 m) — see zoomCloseFocusM.
   */
  gaps: {
    "6": {
      label: "D6",
      values: [
        [0.47, 0.47],
        [19.48, 19.48],
      ],
    },
    "9": {
      label: "D9",
      values: [
        [15.94, 15.94],
        [5.01, 5.01],
      ],
    },
    "12": {
      label: "D12",
      values: [
        [9.33, 9.33],
        [1.19, 1.19],
      ],
    },
    "21": {
      label: "BF",
      values: [
        [45.82, 57.0],
        [46.37, 57.55],
      ],
    },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16] },

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

  /* ── Layout tuning ── */
  layout: { scFill: 0.48, yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
