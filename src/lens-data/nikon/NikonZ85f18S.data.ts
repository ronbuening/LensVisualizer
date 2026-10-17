import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** JP2020-173366A Example 3, Figure 3 (PDF pp.16–17 and20).
 * R/d/nd/vd are the original numerical rows; all surfaces are spherical.
 * Rims are inferred from the optical outline at600dpi, not listed clear apertures.
 * PT surfaces 22–23 (1.6 mm, nd 1.51680, νd 64.20) are modeled in `rearPlates`
 * (traced, not drawn): d21 = 11.000 mm to PT, bf 0.92 mm after it.
 * Source summaries FL 83.00 and TL 111.35 disagree with the numerical table, which traces to
 * EFL 82.222 and a 110.811 mm track. The cause is not isolated, so every printed value is kept and
 * the contradiction is an unresolved `sourceErrata` entry; see analysis.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikkor-z-85f18s",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 85mm f/1.8 S",
  subtitle: "JP2020-173366A EXAMPLE 3 — KONICA MINOLTA / NIKON",

  catalog: {
    lensMounts: ["nikon-z"],
    imageFormat: "135-full-frame",
    specs: [
      "12 ELEMENTS / 8 GROUPS",
      "f = 83.0 mm (source summary)",
      "F/1.85 (patent)",
      "2ω = 29.26° (patent)",
      "ALL SPHERICAL · PATENT EXAMPLE 3",
    ],
    elementCount: 12,
    groupCount: 8,
    focalLengthMm: { marketing: 85, design: 83.0 },
    fNumber: { marketing: 1.8, design: 1.85 },
  },

  source: {
    patentNumber: "JP 2020-173366 A",
    patentYear: 2020,
    authors: ["Ryosuke Imajima", "Takakazu Hirose", "Daisuke Tanahashi", "Yasushi Yamamoto", "Mami Muratani"],
    assignees: ["Konica Minolta, Inc.", "Nikon Corporation"],
    errata: [
      {
        status: "unresolved",
        note: "The printed Example 3 table traces to f = 82.22 mm and a total length of 110.81 mm; the patent states 83.00 mm and 111.35 mm.",
      },
    ],
  },

  /* ── Elements ──
   *  12 glass elements, front to rear.
   *  Gr1 (positive, fixed): L11, L12, L13+L14 cemented doublet
   *  Gr2 (negative, focus): L21+L22 cemented doublet — moves toward image
   *  Gr3 (positive, focus): L31 singlet — moves toward object
   *  Gr4 (negative, fixed): L41+L42 cemented doublet, L43+L44 cemented doublet, L45 singlet
   */
  elements: [
    // ── Group 1 — Front positive group (fixed) ──
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: 139.8,
      glass: "S-LAH66 (OHARA, inferred coordinate counterpart)",
      apd: false,
      role: "Front positive singlet in fixed Gr1.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.55032,
      vd: 75.5,
      focalLengthMm: 111.3,
      glass: "FCD705 (HOYA, inferred coordinate counterpart)",
      apd: false,
      role: "Low-dispersion positive singlet in Gr1; commercial composition and branded ED identity are not specified.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 92.5,
      glass: "S-FPL51 (OHARA, inferred coordinate counterpart)",
      apd: false,
      role: "Low-dispersion positive partner in cemented Gr1 pair; its catalog match does not establish patent-listed anomalous dispersion.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.85025,
      vd: 30.05,
      focalLengthMm: -64.5,
      glass: "H-ZLaF76 (CDGM, inferred coordinate counterpart)",
      apd: false,
      role: "Negative partner in the Gr1 cemented pair.",
      cemented: "D1",
    },
    // ── Group 2 — Negative focus group (moves image-ward) ──
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: 76.8,
      glass: "PBH21 (OHARA, inferred coordinate counterpart)",
      apd: false,
      role: "Positive, high-dispersion member of the moving negative Gr2 doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.01,
      focalLengthMm: -36.6,
      glass: "J-F5 (Hikari, inferred coordinate counterpart)",
      apd: false,
      role: "Negative member of the moving Gr2 doublet; shares source coordinates with L44.",
      cemented: "D2",
    },
    // ── Group 3 — Positive focus group (moves object-ward) ──
    {
      id: 7,
      name: "L31",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67.0,
      focalLengthMm: 68.4,
      glass: "J-PSKH4 (Hikari, inferred coordinate counterpart)",
      apd: false,
      role: "Positive singlet Gr3 moves objectward, opposite to Gr2.",
    },
    // ── Group 4 — Rear negative group (fixed) ──
    {
      id: 8,
      name: "L41",
      label: "Element 8",
      type: "Plano-Convex Positive",
      nd: 1.91082,
      vd: 35.25,
      focalLengthMm: 48,
      glass: "TAFD35 (HOYA, inferred coordinate counterpart)",
      apd: false,
      role: "Plano-convex positive member of the first Gr4 doublet.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L42",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.17,
      focalLengthMm: -38.5,
      glass: "H-ZF2 (CDGM, inferred coordinate counterpart)",
      apd: false,
      role: "Negative member of the first Gr4 doublet. Numerical R16 is finite despite the source prose calling this plano-concave.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L43",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.8485,
      vd: 43.79,
      focalLengthMm: 71.5,
      glass: "J-LASFH22 (Hikari, inferred coordinate counterpart)",
      apd: false,
      role: "Positive member of the second Gr4 doublet.",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L44",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.01,
      focalLengthMm: -163.8,
      glass: "J-F5 (Hikari, inferred coordinate counterpart)",
      apd: false,
      role: "Negative member of the second Gr4 doublet; shares source coordinates with L22.",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L45",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.72,
      focalLengthMm: -113.3,
      glass: "SF2 (Schott, inferred coordinate counterpart)",
      apd: false,
      role: "Rear negative meniscus, concave toward object; it is the last modeled glass element.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent surfaces 1–21; plate PT (22–23) follows in `rearPlates`.
   *  Stop (surface 11 in patent) is between Gr2 and Gr3, fixed during focus.
   *  All surfaces spherical — no aspherical surfaces in EX3.
   */
  /* (moved from asph) ── Aspherical coefficients ──
   *  EX3 is an all-spherical design — no aspherical surfaces.
   */
  surfaces: [
    // ── Gr1: Front positive group (fixed) ──
    { label: "1", R: 120.814, d: 4.94, sd: 28, medium: 1 }, // L11 front
    { label: "2", R: -1000.0, d: 0.25, sd: 28 }, // L11 rear → air
    { label: "3", R: 42.061, d: 6.12, sd: 24, medium: 2 }, // L12 front
    { label: "4", R: 127.231, d: 0.5, sd: 24 }, // L12 rear → air
    { label: "5", R: 62.742, d: 6.56, sd: 22, medium: 3 }, // L13 front
    { label: "6", R: -165.753, d: 1.4, sd: 22, medium: 4 }, // L13→L14 junction
    { label: "7", R: 82.262, sd: 22 }, // L14 rear → air (var)

    // ── Gr2: Negative focus group — cemented doublet (moves image-ward) ──
    { label: "8", R: 438.032, d: 3.21, sd: 17.9, medium: 5 }, // L21 front
    { label: "9", R: -84.265, d: 1.13, sd: 17.9, medium: 6 }, // L21→L22 junction
    { label: "10", R: 30.06, sd: 17.9 }, // L22 rear → air (var)

    // ── Aperture stop (fixed between Gr2 and Gr3) ──
    { label: "STO", R: "flat" },

    // ── Gr3: Positive focus group — singlet (moves object-ward) ──
    { label: "12", R: 54.757, d: 4.1, sd: 15.4, medium: 7 }, // L31 front
    { label: "13", R: -152.958, sd: 15.4 }, // L31 rear → air (var)

    // ── Gr4: Rear negative group (fixed) ──
    // D3: L41+L42 cemented doublet
    { label: "14", R: "flat", d: 6.5, sd: 16.4, medium: 8 }, // L41 front (flat)
    { label: "15", R: -43.69, d: 2.02, sd: 16.4, medium: 9 }, // L41→L42 junction
    { label: "16", R: 64.869, d: 4.9, sd: 16.4 }, // L42 rear → air
    // D4: L43+L44 cemented doublet
    { label: "17", R: 70.537, d: 8.2, sd: 17.9, medium: 10 }, // L43 front
    { label: "18", R: -411.688, d: 4.5, sd: 17.9, medium: 11 }, // L43→L44 junction
    { label: "19", R: 130.583, d: 8.121, sd: 17.9 }, // L44 rear → air
    // L45 singlet
    { label: "20", R: -35.4045, d: 1.4, sd: 19.2, medium: 12 }, // L45 front
    { label: "21", R: -69.4719, d: 11.0, sd: 19.2 }, // L45 rear → air, gap to the PT plate
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.8,
    description:
      "Source POS2 is 0.8 m object-to-image: Gr2 moves imageward 3.838 mm and Gr3 objectward 6.762 mm. Gr1, stop and Gr4 are fixed (0.001 mm table rounding). Intermediate motion is interpolated; the rounded prescription gives about 0.803 m at POS2.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (floating inner focus) ──
   *  Four gaps change during focus. Gr1, stop, and Gr4 are fixed;
   *  the total of d7 + d10 + d11 + d13 is conserved (≈ 33.44 mm).
   *
   *  Gr2 (L21+L22) moves +3.838 mm toward image (d7↑, d10↓).
   *  Gr3 (L31) moves −6.762 mm toward object (d11↓, d13↑).
   *  Stop is fixed between Gr2 and Gr3.
   *
   *  Close focus: 0.8 m (object plane to image plane).
   */
  gaps: {
    "7": { label: "D7", values: [[6.182, 10.02]] },
    "10": { label: "D10", values: [[13.284, 9.445]] },
    STO: { label: "D11", values: [[11.915, 5.153]] },
    "13": { label: "D13", values: [[2.059, 8.821]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.85, fStops: [1.85, 2, 2.5, 2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16] },

  /* ── Parallel plate PT (patent surfaces 22–23): traced, not drawn ── */
  rearPlates: [
    {
      label: "PT",
      thicknessMm: 1.6,
      nd: 1.5168,
      vd: 64.2,
      glass: "J-BK7A",
      gapAfterMm: 0.92,
      source: "JP 2020-173366 A, Example 3 surfaces 22–23 and bf (PDF p. 17)",
    },
  ],

  /* ── Group annotations ── */
  groups: [
    { text: "Gr1 (+)", fromSurface: "1", toSurface: "7" },
    { text: "Gr2 (−)", fromSurface: "8", toSurface: "10" },
    { text: "Gr3 (+)", fromSurface: "12", toSurface: "13" },
    { text: "Gr4 (−)", fromSurface: "14", toSurface: "21" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
    { text: "D4", fromSurface: "17", toSurface: "19" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
