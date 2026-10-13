import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — FUJINON XF 56mm F1.2 R (2014 original, 11 elements / 8 groups; the 2022 XF 56mm F1.2 R WR is a
 * different 13-element design and is not described here)
 *
 * Data source: US 2015/0212302 A1 Example 3 (Takashi Suzuki / FUJIFILM Corporation), Tables 7–9, FIG. 3, FIG. 8.
 * Modified Gaussian, 11 elements / 8 groups, 2 aspherical surfaces (both faces of L21). Patent scale is kept
 * native: Table 8 gives f = 56.98, BF = 16.53 (air-equivalent), 2ω = 28.0°, Fno = 1.25. The rounded Table 7 rows
 * reproduce EFL 56.991 / BFD 16.532 mm (calculated).
 *
 * FOCUS: ¶0050 — G1, the stop and L25 stay fixed to the image plane; L21 plus the cemented triplet L22–L24 move
 *   toward the object (FIG. 3 arrow). The patent publishes NO close-state spacing. The close-focus gaps below are
 *   calculated: a paraxial solve for a 0.700 m object-to-image distance (production MFD; object 619.8 mm ahead of
 *   surface 1 plus the 80.19 mm air-equivalent track) gives 6.90 mm of travel. With PP modeled physically the track
 *   is 81.14 mm, so the same object sits 0.701 m from the image plane. The earlier 6.20 mm value focused an object
 *   0.70 m from surface 1, i.e. 0.78 m from the image plane.
 *
 * NOTE ON ASPHERICAL SURFACES:
 *   Patent formula (A), ¶0062: Zd = C·h²/{1 + (1 − K·C²·h²)^½} + ΣAm·h^m, m = 3…20. This is Fujifilm's KA form
 *   (no "1 +" inside the root), so the standard conic is K = K_patent − 1. Table 9 prints K = 0.0000000E+00 for
 *   both surfaces, which under formula (A) is a parabolic base: stored K = −1 (same reading as the other Suzuki
 *   patents in this folder — XF 35mm F1.4 R, X100 23 mm, X70 18.5 mm). Base-conic difference against a sphere is
 *   only 3.1 µm (S14) / 0.2 µm (S13) at h = 10 mm, but the two readings differ in on-axis correction: with the
 *   patent's plate PP restored, K = −1 gives −0.008 mm of longitudinal spherical aberration at full aperture and
 *   K = 0 gives +0.032 mm; FIG. 8 draws the d-line within about −0.005 mm of the axis (calculated check).
 *   A3–A20 are transcribed exactly from Table 9.
 *   The 18-term polynomial is only usable inside the design aperture: surface 13's slope peaks near h = 10.05 mm
 *   and the profile reverses by h ≈ 10.75 mm, so L21's front face is capped at sd = 10.0 mm (rear 10.4 mm, the
 *   height at which a ray leaving surface 13 at 10.0 mm exits the diverging element).
 *
 * NOTE ON SEMI-DIAMETERS:
 *   The patent lists no effective diameters. FIG. 3 (sheet 2, 300 dpi scan) is drawn to scale: 14.775 px/mm from
 *   20 vertex crossings (surface 1 → Sim 1198 px = 81.1 mm against 81.14 mm with the plate), and its G1 rims sit
 *   1–4 % above the calculated f/1.25 axial marginal ray. Figure rims (mm): L11 23.8, L12 22.5, L13 19.5, L14 17.1,
 *   L15 16.4, L16 14.35, L21 10.7, L22 11.5, L23 13.7, L24 13.9–14.0, L25 14.1.
 *   Figure-based values: surfaces 1–2 (was 27.5, +15.5 %), 17–20 (was 11.5; blocked the Y = 14.2 mm chief ray,
 *   which needs 11.57 / 11.72 mm on surfaces 19 / 20), 15 (11.5, equal to the drawn L22 front rim). Surface 16
 *   keeps 11.5: the drawn 13.7 mm is the triplet's mounting edge and exceeds the hemisphere of R = −13.865.
 *   Ray-trace-based values: surface 10 raised 14.0 → 14.3 (f/1.25 axial ray needs 14.24; 14.4 would exceed the
 *   90 % sag limit of the 2.96 mm gap to surface 9); surfaces 13A/14A raised 6.0 → 10.0 / 10.4 (infinity axial
 *   ray needs 9.22 / 9.41, chief ray 6.32 / 7.12; figure 10.7 is outside the usable polynomial range). At the
 *   calculated 0.7 m state the full f/1.25 iris would need about 11.0 mm on surface 13, so the model lets L21
 *   trim the axial beam there (stop-plane height ≈ 10.35 of 11.39 mm); production behaviour is unknown.
 *   Surfaces 3–9 and 11 keep the earlier marginal + chief ray estimates; they are 4–13 % above the figure, inside
 *   the measurement/tolerance band. STO 11.3 mm is the paraxial f/1.25 iris radius (real-ray 11.39 mm).
 *
 * NOTE ON COVER GLASS:
 *   Table 7 rows 21–22 list the plate PP (d = 2.80, nd = 1.51680, νd = 64.2) 10.00 mm behind L25 and print no
 *   plate-to-image distance. PP is modeled in `rearPlates` (N-BK7, traced, not drawn); surface 20 stores the
 *   printed 10.00 mm gap. The 4.684 mm of air behind the plate is derived, not printed: Table 8 air-equivalent
 *   BF 16.53 − 10.00 − 2.80/1.5168 = 4.684 mm, so the paraxial image plane is unchanged.
 *
 * NOTE ON GLASS: the patent names no glasses. Labels are catalog equivalents of the Table 7 nd/νd pairs. θgF
 *   (0.5375) is printed only on the L13 row — the L1p lens of conditions (3)/(4), Table 16 value 0.0280.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujinon-xf56f12r",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 56mm f/1.2 R",
  subtitle: "US 2015/0212302 A1 Example 3 — Fujifilm / Suzuki",
  specs: ["11 ELEMENTS / 8 GROUPS", "f = 56.98 mm", "F/1.25", "2ω = 28.0°", "2 ASPHERICAL SURFACES"],

  focalLengthMarketing: 56,
  focalLengthDesign: 56.98,
  apertureMarketing: 1.2,
  apertureDesign: 1.25,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 2015/0212302 A1",
  patentAuthors: ["Takashi Suzuki"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2015,
  elementCount: 11,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: 385.2,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Weak positive collector; gentle pre-convergence of incoming beam",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: 78.7,
      glass: "S-FPL51 (OHARA) — ED",
      apd: "inferred",
      apdNote: "Same nd/νd pair as L13 (S-FPL51 class); the patent prints θgF only on the L13 row",
      role: "First low-dispersion element; primary positive power in G1 with minimal chromatic contribution",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: 139.8,
      glass: "S-FPL51 (OHARA) — ED",
      apd: "patent",
      apdNote: "Table 7 θgF = 0.5375; L1p of conditions (3)/(4), Table 16 value 0.0280; dPgF = +0.0310 (calculated)",
      dPgF: 0.03095,
      role: "Second low-dispersion element; the patent's L1p lens for secondary-spectrum correction (¶0052)",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 66.4,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "High-index positive element in achromatizing doublet D1",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.75211,
      vd: 25.1,
      fl: -90.4,
      glass: "FF8 (HOYA fluor flint)",
      apd: false,
      cemented: "D1",
      role: "Dense flint corrector in doublet D1; chromatic correction via dispersion contrast",
    },
    {
      id: 6,
      name: "L16",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.673,
      vd: 38.2,
      fl: -29.1,
      glass: "S-NBH52 (OHARA)",
      apd: false,
      role: "Strong negative meniscus; Gaussian-type spherical aberration corrector and Petzval flattener",
    },
    {
      id: 7,
      name: "L21",
      label: "Element 7",
      type: "Biconcave Neg. (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: -91.1,
      glass: "L-BAL42 (OHARA) — PGM",
      apd: false,
      role: "Molded double-asphere; corrects spherical aberration post-stop without strong concave surface",
    },
    {
      id: 8,
      name: "L22",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 16.6,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "T1",
      role: "Front positive of cemented triplet; convex-to-image meniscus redirects converging beam",
    },
    {
      id: 9,
      name: "L23",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.6668,
      vd: 33.0,
      fl: -14.0,
      glass: "H-ZF39 (CDGM catalog equivalent; production supplier unspecified)",
      apd: false,
      cemented: "T1",
      role: "Central negative of triplet; chromatic and spherical aberration corrector",
    },
    {
      id: 10,
      name: "L24",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 22.7,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "T1",
      role: "Rear positive of triplet; shares aberration-correction burden with L22",
    },
    {
      id: 11,
      name: "L25",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 297.6,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Weak positive rear lens, fixed during focusing to limit focus-induced change of spherical aberration and field curvature (¶0050)",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 163.41, d: 2.59, nd: 1.48749, elemId: 1, sd: 23.8 },
    { label: "2", R: 1252.6, d: 0.15, nd: 1.0, elemId: 0, sd: 23.8 },
    { label: "3", R: 32.582, d: 9.16, nd: 1.497, elemId: 2, sd: 23.5 },
    { label: "4", R: 177.38, d: 0.15, nd: 1.0, elemId: 0, sd: 23.5 },
    { label: "5", R: 31.661, d: 4.54, nd: 1.497, elemId: 3, sd: 21.0 },
    { label: "6", R: 55.403, d: 0.4, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "7", R: 28.432, d: 3.99, nd: 1.883, elemId: 4, sd: 18.5 },
    { label: "8", R: 51.536, d: 1.3, nd: 1.75211, elemId: 5, sd: 18.5 },
    { label: "9", R: 28.992, d: 2.96, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "10", R: 89.503, d: 1.21, nd: 1.673, elemId: 6, sd: 14.3 },
    { label: "11", R: 15.974, d: 6.22, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "STO", R: 1e15, d: 11.59, nd: 1.0, elemId: 0, sd: 11.3 },
    { label: "13A", R: -187.802, d: 1.5, nd: 1.58313, elemId: 7, sd: 10.0 },
    { label: "14A", R: 74.266, d: 0.39, nd: 1.0, elemId: 0, sd: 10.4 },
    { label: "15", R: -193.91, d: 6.96, nd: 1.883, elemId: 8, sd: 11.5 },
    { label: "16", R: -13.865, d: 1.21, nd: 1.6668, elemId: 9, sd: 11.5 },
    { label: "17", R: 29.688, d: 6.63, nd: 1.883, elemId: 10, sd: 13.7 },
    { label: "18", R: -55.427, d: 0.9, nd: 1.0, elemId: 0, sd: 13.9 },
    { label: "19", R: 289.87, d: 1.81, nd: 1.48749, elemId: 11, sd: 14.1 },
    { label: "20", R: -289.87, d: 10.0, nd: 1.0, elemId: 0, sd: 14.1 }, // Table 7 d20: gap to the plate PP
  ],

  /* ── Cover plate PP (patent Table 7 surfaces 21–22): traced, not drawn ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.8,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 4.684,
      source:
        "US 2015/0212302 A1, Example 3 Table 7 surfaces 21–22; gap to image derived, not printed (Table 8 BF 16.53 − 10.00 − 2.80/1.5168)",
    },
  ],

  /* ── Aspherical coefficients ──
   *  Exact patent Table 9 odd/even coefficients A3–A20. Patent K = 0 under formula (A) √(1 − K·C²h²) → K = −1.
   */
  asph: {
    "13A": {
      K: -1,
      A3: 3.8393566e-4,
      A4: -6.2592552e-4,
      A5: 1.477835e-4,
      A6: -1.4352983e-5,
      A7: -4.3588543e-6,
      A8: 1.1550101e-6,
      A9: -8.1701706e-9,
      A10: -2.0799721e-8,
      A11: 1.8896154e-9,
      A12: -7.7228059e-11,
      A13: -3.5277023e-12,
      A14: 5.6690635e-12,
      A15: -7.1519452e-13,
      A16: -3.4765348e-14,
      A17: 9.49641e-15,
      A18: -1.8369342e-16,
      A19: -3.5656606e-17,
      A20: 1.5813241e-18,
    },
    "14A": {
      K: -1,
      A3: 3.2574414e-4,
      A4: -5.1485989e-4,
      A5: 1.1258987e-4,
      A6: -1.045219e-5,
      A7: -3.6580954e-6,
      A8: 1.2413561e-6,
      A9: -8.9862297e-8,
      A10: -1.9808269e-8,
      A11: 4.6427534e-9,
      A12: -2.0450812e-10,
      A13: -4.804073e-11,
      A14: 6.9487622e-12,
      A15: -5.5600157e-14,
      A16: -5.2312313e-14,
      A17: 3.3641818e-15,
      A18: 6.5265695e-17,
      A19: -1.2833819e-17,
      A20: 3.4385862e-19,
    },
  },

  /* ── Variable air spacings (inner focus) ──
   *  G1, stop and L25 fixed to image plane. Moving group: L21 + L22 + L23 + L24 (¶0050).
   *  Infinity column = Table 7. Close column is CALCULATED (no patent close state): paraxial travel 6.90 mm for a
   *  0.700 m object-to-image distance.
   */
  var: {
    STO: [11.59, 4.69],
    "18": [0.9, 7.8],
  },
  varLabels: [
    ["STO", "D12"],
    ["18", "D18"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "11" },
    { text: "G2 (+)", fromSurface: "13A", toSurface: "20" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "T1", fromSurface: "15", toSurface: "18" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.7,
  focusDescription:
    "Inner focus — L21 through L24 move toward the object; G1, stop and L25 fixed. Close-focus travel (6.90 mm to 0.7 m) is calculated; the patent publishes none.",

  /* ── Aperture configuration ── */
  nominalFno: 1.25,
  fstopSeries: [1.25, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  maxFstop: 16,
  apertureBlades: 7,
  apertureBladeRoundedness: 0.7,

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
