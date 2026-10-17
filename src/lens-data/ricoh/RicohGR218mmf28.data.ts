import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — RICOH GR 18.3mm f/2.8                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2013/0321936 A1 Example 3 (Kazuyasu Ohashi),      ║
 * ║  table ¶[0136], aspheres ¶[0137]–[0138], FIG. 3. Native scale      ║
 * ║  (f = 18.30, F = 2.81, ω = 38.2°, Y′ = 14.2 mm).                   ║
 * ║  Approximately-symmetric wide-angle prime for APS-C compact.       ║
 * ║  7 elements / 5 groups, 2 aspherical surfaces (S2, S13).           ║
 * ║  Focus: unit focusing (patent ¶[0115]); no finite-focus table.     ║
 * ║                                                                    ║
 * ║  Production: Ricoh GR (2013), Ricoh GR II (2015). The example-to-  ║
 * ║  product attribution is inferred (f = 18.30, 7/5, two aspherics).  ║
 * ║  Patent filed May 31, 2013 · Priority JP 2012-127431 (Jun 4 2012) ║
 * ║                                                                    ║
 * ║  ASPHERE NOTE: S2 A8 is +2.19205e-7 as printed. (An earlier        ║
 * ║    transcription carried −2.19205e-7, which traces to ≈0.69 mm of  ║
 * ║    undercorrected spherical aberration at f/2.81; the printed sign ║
 * ║    gives ≈0.003 mm and ≈1.5 % barrel distortion at full field.)    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Not listed in patent. Estimates checked against an exact real-  ║
 * ║    ray trace at Y′ = 14.2 mm (chief ray ω = 38.05°) and FIG. 3     ║
 * ║    (31.36 px/mm at 300 dpi). 2A is trimmed to 5.8 mm (full-field   ║
 * ║    bundle 5.42 mm; rim slope 48° instead of 64° at 6.1 mm). L2 is  ║
 * ║    4.8 mm because the L1–L2 air lens closes near h ≈ 5.05 mm; 13A  ║
 * ║    is 5.5 mm, inside its sag turnover at 5.58 mm. FIG. 3 draws L2, ║
 * ║    D1, D2 and L7 at ≈5.2–5.9 mm but its air-lens outlines do not   ║
 * ║    follow the tabulated sags. Corner bundle is vignetted by L2.    ║
 * ║                                                                    ║
 * ║  Cover glass: patent parallel flat plate F (surface 14 "FILTER",   ║
 * ║    1.40 mm, nd 1.51680, νd 64.20) is modeled in `rearPlates`       ║
 * ║    (traced, not drawn). S13 keeps the patent's 12.756 mm gap to    ║
 * ║    the plate; 0.50 mm plate-to-image from ¶[0045] ("approx.        ║
 * ║    0.5 mm"; surface 15 D is not tabulated).                        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "ricoh-gr-18p3-f2p8",
  maker: "Ricoh",
  name: "RICOH GR LENS 18.3mm f/2.8 (Ricoh GR / GR II)",
  subtitle: "US 2013/0321936 A1 EXAMPLE 3 — OHASHI",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "aps-c",
    specs: ["7 ELEMENTS / 5 GROUPS", "f ≈ 18.3 mm", "F/2.8", "2ω ≈ 76.4°", "2 ASPHERICAL SURFACES"],
    elementCount: 7,
    groupCount: 5,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 18.3, design: 18.3 },
    fNumber: { marketing: 2.8, design: 2.81 },
  },

  source: {
    patentNumber: "US 2013/0321936 A1",
    patentYear: 2013,
    authors: ["Kazuyasu Ohashi"],
    // A1 front page omits an organization; same-application assignment recorded 2013-05-31.
    // Source and reel/frame 030523/0446 are documented in the companion analysis.
    assignees: ["Ricoh Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.4971,
      vd: 81.56,
      focalLengthMm: -27.97,
      glass: "M-FCD1 (HOYA)",
      apd: "inferred",
      apdNote:
        "Patent Pg,F=0.5388 gives dPgF=+0.03218; APD inferred from the fluorophosphate glass (the patent makes no APD claim); precision glass-molded",
      role: "Front negative element — diverges incoming beam for wide-angle coverage; aspherical rear surface corrects astigmatism and distortion; anomalous dispersion for secondary spectrum correction",
      dPgF: 0.03218,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.16,
      focalLengthMm: -30.54,
      glass: "E-FD8 (HOYA)",
      apd: false,
      apdNote: "Patent Pg,F=0.5989 gives dPgF=+0.00751 (ordinary dense-flint position, not an APD claim)",
      role: "Front element of Group II — strongly concave front (rear nearly flat, R = +200 mm) forms a biconvex air lens with L1; chromatic counterbalance to L1",
      dPgF: 0.00751,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -31.29,
      glass: "FDS90 (HOYA)",
      apd: false,
      apdNote: "Patent Pg,F=0.6191 gives dPgF=+0.01530 (ordinary dense-flint position, not an APD claim)",
      role: "Negative element of pre-stop cemented doublet — high-dispersion flint provides chromatic correction within doublet",
      cemented: "D1",
      dPgF: 0.0153,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 8.64,
      glass: "TAFD30 (HOYA)",
      apd: false,
      role: "Primary positive element of pre-stop doublet — very high index (nd=1.883) enables compact curvatures; flanks aperture with L5 in approximately-symmetric arrangement",
      cemented: "D1",
      dPgF: -0.00977,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 6.7,
      glass: "TAFD30 (HOYA)",
      apd: false,
      role: "Primary positive element of post-stop doublet — mirrors L4 across the aperture in approximately-symmetric power distribution",
      cemented: "D2",
      dPgF: -0.00977,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.16,
      focalLengthMm: -7.62,
      glass: "E-FD8 (HOYA)",
      apd: false,
      apdNote: "Patent Pg,F=0.5989 gives dPgF=+0.00751 (ordinary dense-flint position); mirrors L2 glass",
      role: "Negative element of post-stop cemented doublet — mirrors L3 role across the aperture; concave rear surface forms biconvex air lens with L7",
      cemented: "D2",
      dPgF: 0.00751,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.8208,
      vd: 42.71,
      focalLengthMm: -240.0,
      glass: "M-TAFD51 (HOYA)",
      apd: false,
      role: "Weak negative field flattener and exit pupil controller (Group IV) — aspherical rear surface controls chief ray angle at image plane for sensor microlens compatibility; precision glass-molded",
      dPgF: -0.00776,
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // ── Group I (negative): L1 ──
    { label: "1", R: 816.141, d: 0.8, sd: 7.0, medium: 1 }, // L1 front (nearly flat)
    {
      label: "2A",
      R: 13.666,
      d: 1.79,
      sd: 5.8,
      asphere: { K: 3.80085, A4: 1.07069e-4, A6: -3.38949e-6, A8: 2.19205e-7, A10: -5.16455e-9, A12: 0, A14: 0 },
    }, // L1 rear (asph) → air

    // ── Group II (positive): L2 + cemented doublet L3+L4 ──
    { label: "3", R: -23.543, d: 0.8, sd: 4.8, medium: 2 }, // L2 front
    { label: "4", R: 200.425, d: 0.2, sd: 4.8 }, // L2 rear → air
    { label: "5", R: 15.416, d: 0.8, sd: 5.0, medium: 3 }, // L3 front
    { label: "6", R: 9.513, d: 2.34, sd: 5.0, medium: 4 }, // L3→L4 cement junction
    { label: "7", R: -34.121, d: 1.5, sd: 5.0 }, // L4 rear → air

    // ── Aperture stop ──
    { label: "STO", R: "flat", d: 1.0 }, // patent S08; radius derived from the design f-number

    // ── Group III (positive): cemented doublet L5+L6 ──
    { label: "9", R: 14.691, d: 2.59, sd: 4.7, medium: 5 }, // L5 front
    { label: "10", R: -9.087, d: 0.89, sd: 4.7, medium: 6 }, // L5→L6 cement junction
    { label: "11", R: 12.917, d: 1.73, sd: 4.3 }, // L6 rear → air

    // ── Group IV (weak negative): L7 ──
    { label: "12", R: -12.419, d: 1.2, sd: 5.5, medium: 7 }, // L7 front
    {
      label: "13A",
      R: -13.832,
      sd: 5.5,
      asphere: { K: -2.86234, A4: 1.49055e-4, A6: 4.18583e-6, A8: 1.25343e-7, A10: -7.88154e-10, A12: 0, A14: 0 },
    }, // L7 rear (asph) → plate F
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.3,
    description:
      "Unit focus — the whole lens moves toward the object (patent ¶[0115]). Close state is a calculated 1.30 mm extension for the 0.30 m normal-mode MFD; the 0.10 m macro mode is not modeled.",
  },

  /* (moved from var) ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates forward; only BFD changes.
   *  13A is the physical gap to plate F (patent 12.756 mm); the plate and 0.50 mm air follow in
   *  `rearPlates` (air-equivalent BF 12.756 + 1.40 / 1.51680 + 0.50 = 14.179 mm).
   *  The patent tabulates no finite-focus state. The close value is CALCULATED: paraxial unit-focus
   *  extension of 1.302 mm for a 0.30 m object-to-image distance (production normal-mode MFD).
   *  The GR's 0.10 m macro mode is not modeled.
   */
  gaps: { "13A": { label: "BF", values: [[12.756, 14.058]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.81, fStops: [2.81, 4, 5.6, 8, 11, 16], maxFNumber: 16, blades: 9 },

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 76.4, // patent ω = 38.2° for Y′ = 14.2 mm; rim-limited paraxial estimate would give ≈47.6°
    maxTraceFieldDeg: 38.2,
  },

  /* ── Parallel flat plate F (patent surfaces 14–15): traced, not drawn ── */
  rearPlates: [
    {
      label: "F",
      thicknessMm: 1.4,
      nd: 1.5168,
      vd: 64.2,
      glass: "BSC7 (HOYA)",
      gapAfterMm: 0.5,
      source: "US 2013/0321936 A1, Example 3 ¶[0136] surfaces 14–15; 0.5 mm to image from ¶[0045]",
    },
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I (neg)", fromSurface: "1", toSurface: "2A" },
    { text: "II (pos)", fromSurface: "3", toSurface: "7" },
    { text: "III (pos)", fromSurface: "9", toSurface: "11" },
    { text: "IV (weak)", fromSurface: "12", toSurface: "13A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.55, yScFill: 0.38 },
} satisfies LensDataV2Input;

export default LENS_DATA;
