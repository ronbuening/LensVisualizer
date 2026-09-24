import type { LensDataInput } from "../../types/optics.js";

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
  key: "ricoh-gr-18p3-f2p8",
  maker: "Ricoh",
  name: "RICOH GR LENS 18.3mm f/2.8 (Ricoh GR / GR II)",
  subtitle: "US 2013/0321936 A1 EXAMPLE 3 — OHASHI",
  specs: ["7 ELEMENTS / 5 GROUPS", "f ≈ 18.3 mm", "F/2.8", "2ω ≈ 76.4°", "2 ASPHERICAL SURFACES"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 18.3,
  focalLengthDesign: 18.3,
  apertureMarketing: 2.8,
  apertureDesign: 2.81,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "aps-c",
  patentNumber: "US 2013/0321936 A1",
  patentAuthors: ["Kazuyasu Ohashi"],
  patentAssignees: [], // Front page names inventor Kazuyasu Ohashi as applicant; no organizational assignee printed.
  patentYear: 2013,
  elementCount: 7,
  groupCount: 5,

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 76.4, // patent ω = 38.2° for Y′ = 14.2 mm; rim-limited paraxial estimate would give ≈47.6°
    maxTraceFieldDeg: 38.2,
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
      fl: -27.97,
      glass: "M-FCD1 (HOYA)",
      apd: "inferred" as const,
      dPgF: 0.03218,
      apdNote:
        "Patent Pg,F=0.5388 gives dPgF=+0.03218; APD inferred from the fluorophosphate glass (the patent makes no APD claim); precision glass-molded",
      role: "Front negative element — diverges incoming beam for wide-angle coverage; aspherical rear surface corrects astigmatism and distortion; anomalous dispersion for secondary spectrum correction",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.16,
      fl: -30.54,
      glass: "E-FD8 (HOYA)",
      apd: false,
      dPgF: 0.00751,
      apdNote: "Patent Pg,F=0.5989 gives dPgF=+0.00751 (ordinary dense-flint position, not an APD claim)",
      role: "Front element of Group II — strongly concave front (rear nearly flat, R = +200 mm) forms a biconvex air lens with L1; chromatic counterbalance to L1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -31.29,
      glass: "FDS90 (HOYA)",
      apd: false,
      dPgF: 0.0153,
      apdNote: "Patent Pg,F=0.6191 gives dPgF=+0.01530 (ordinary dense-flint position, not an APD claim)",
      cemented: "D1",
      role: "Negative element of pre-stop cemented doublet — high-dispersion flint provides chromatic correction within doublet",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 8.64,
      glass: "TAFD30 (HOYA)",
      apd: false,
      dPgF: -0.00977,
      cemented: "D1",
      role: "Primary positive element of pre-stop doublet — very high index (nd=1.883) enables compact curvatures; flanks aperture with L5 in approximately-symmetric arrangement",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 6.7,
      glass: "TAFD30 (HOYA)",
      apd: false,
      dPgF: -0.00977,
      cemented: "D2",
      role: "Primary positive element of post-stop doublet — mirrors L4 across the aperture in approximately-symmetric power distribution",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.16,
      fl: -7.62,
      glass: "E-FD8 (HOYA)",
      apd: false,
      dPgF: 0.00751,
      apdNote: "Patent Pg,F=0.5989 gives dPgF=+0.00751 (ordinary dense-flint position); mirrors L2 glass",
      cemented: "D2",
      role: "Negative element of post-stop cemented doublet — mirrors L3 role across the aperture; concave rear surface forms biconvex air lens with L7",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.8208,
      vd: 42.71,
      fl: -240.0,
      glass: "M-TAFD51 (HOYA)",
      apd: false,
      dPgF: -0.00776,
      role: "Weak negative field flattener and exit pupil controller (Group IV) — aspherical rear surface controls chief ray angle at image plane for sensor microlens compatibility; precision glass-molded",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Group I (negative): L1 ──
    { label: "1", R: 816.141, d: 0.8, nd: 1.4971, elemId: 1, sd: 7.0 }, // L1 front (nearly flat)
    { label: "2A", R: 13.666, d: 1.79, nd: 1.0, elemId: 0, sd: 5.8 }, // L1 rear (asph) → air

    // ── Group II (positive): L2 + cemented doublet L3+L4 ──
    { label: "3", R: -23.543, d: 0.8, nd: 1.68893, elemId: 2, sd: 4.8 }, // L2 front
    { label: "4", R: 200.425, d: 0.2, nd: 1.0, elemId: 0, sd: 4.8 }, // L2 rear → air
    { label: "5", R: 15.416, d: 0.8, nd: 1.84666, elemId: 3, sd: 5.0 }, // L3 front
    { label: "6", R: 9.513, d: 2.34, nd: 1.883, elemId: 4, sd: 5.0 }, // L3→L4 cement junction
    { label: "7", R: -34.121, d: 1.5, nd: 1.0, elemId: 0, sd: 5.0 }, // L4 rear → air

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 3.65 }, // patent S08; real-ray f/2.81 iris radius

    // ── Group III (positive): cemented doublet L5+L6 ──
    { label: "9", R: 14.691, d: 2.59, nd: 1.883, elemId: 5, sd: 4.7 }, // L5 front
    { label: "10", R: -9.087, d: 0.89, nd: 1.68893, elemId: 6, sd: 4.7 }, // L5→L6 cement junction
    { label: "11", R: 12.917, d: 1.73, nd: 1.0, elemId: 0, sd: 4.3 }, // L6 rear → air

    // ── Group IV (weak negative): L7 ──
    { label: "12", R: -12.419, d: 1.2, nd: 1.8208, elemId: 7, sd: 5.5 }, // L7 front
    { label: "13A", R: -13.832, d: 12.756, nd: 1.0, elemId: 0, sd: 5.5 }, // L7 rear (asph) → plate F
  ],

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

  /* ── Aspherical coefficients ── */
  asph: {
    "2A": {
      K: 3.80085,
      A4: 1.07069e-4,
      A6: -3.38949e-6,
      A8: 2.19205e-7,
      A10: -5.16455e-9,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: -2.86234,
      A4: 1.49055e-4,
      A6: 4.18583e-6,
      A8: 1.25343e-7,
      A10: -7.88154e-10,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates forward; only BFD changes.
   *  13A is the physical gap to plate F (patent 12.756 mm); the plate and 0.50 mm air follow in
   *  `rearPlates` (air-equivalent BF 12.756 + 1.40 / 1.51680 + 0.50 = 14.179 mm).
   *  The patent tabulates no finite-focus state. The close value is CALCULATED: paraxial unit-focus
   *  extension of 1.302 mm for a 0.30 m object-to-image distance (production normal-mode MFD).
   *  The GR's 0.10 m macro mode is not modeled.
   */
  var: {
    "13A": [12.756, 14.058],
  },
  varLabels: [["13A", "BF"]],

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

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription:
    "Unit focus — the whole lens moves toward the object (patent ¶[0115]). Close state is a calculated 1.30 mm extension for the 0.30 m normal-mode MFD; the 0.10 m macro mode is not modeled.",

  /* ── Aperture configuration ── */
  nominalFno: 2.81,
  apertureBlades: 9,
  fstopSeries: [2.81, 4, 5.6, 8, 11, 16],
  maxFstop: 16,

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
