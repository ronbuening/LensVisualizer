import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — ZEISS BIOGON 21mm f/4.5
 *
 * Data source: US 2,721,499 Example 2 (Ludwig Bertele; no assignee printed), the f/4.5 example of three
 * f = 100 mm examples (Fig. 2). Quasi-symmetric five-component wide-angle: 8 elements / 5 groups, all spherical.
 * The patent names no product; Example 2 is the example whose aperture matches the Contax rangefinder Biogon
 * 21mm f/4.5, and it is used here as that lens's reconstruction.
 * Focus: unit focusing (entire lens translates); the close-focus back-focus extension is calculated, not published.
 *
 * NOTE ON SCALING:
 *   The patent table is normalized to f = 100 mm. All R, d and sd values are scaled uniformly by s = 0.21 to the
 *   21 mm production focal length. With the table read as printed (r2 = +52.63, L5 nD = 1.56993) the paraxial EFL
 *   is 100.06 mm at patent scale and 21.01 mm stored; paraxial BFD 10.37 mm stored (49.36 mm at patent scale).
 *   The 2026-09-23 audit corrected two earlier transcription errors (r2 had been read as +62.63 and L5 nD as
 *   1.56093), which had produced the old 90.55 mm / 19.0 mm EFL discrepancy.
 *
 * NOTE ON SEMI-DIAMETERS:
 *   The patent publishes no diameters. SDs are measured from the Fig. 2 section (scale from its vertex spacing and
 *   L8 thickness, about 40 px/mm at 600 dpi at the stored scale): L1 ≈ 11.9, L2 ≈ 10.6, L3 ≈ 6.0, L4/L5 rims ≈ 4.2,
 *   L7 ≈ 6.4, L8 ≈ 11.0 mm. S2 (8.5) is held by the L1/L2 air-gap sag, S12 (7.5) by the sd/|R| 0.90 rim limit;
 *   the real full-field chief ray (ω = 45.7°) clears every surface. STO sd is the engine-derived f/4.5 iris
 *   radius (2.95 mm); the stop sits at the centre of l3, as drawn in Fig. 2 (the table does not locate it).
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "zeiss-biogon-21-f45",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS BIOGON 21mm f/4.5",
  subtitle: "US 2,721,499 EXAMPLE 2 — LUDWIG BERTELE",
  specs: ["8 ELEMENTS / 5 GROUPS", "f = 21.0 mm (design)", "F/4.5", "2ω ≈ 91.4°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 21,
  focalLengthDesign: 21.0,
  apertureMarketing: 4.5,
  // apertureDesign omitted — matches marketing
  lensMounts: ["contax-rf"],
  imageFormat: "135-full-frame",
  // Patent: "image angle of about 90°". The exact real chief ray reaches the 21.6 mm corner at ω = 45.7°, while
  // the paraxial chief-ray estimate stops near 37° at the steep L1 rear surface, so the traced coverage is declared.
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 91.4,
    maxTraceFieldDeg: 45.7,
  },
  patentNumber: "US 2,721,499",
  patentAuthors: ["Ludwig Bertele"],
  patentAssignees: [],
  patentYear: 1955,
  elementCount: 8,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5038,
      vd: 66.7,
      fl: -43.3,
      glass: "PC1 (HOYA catalog equivalent; production supplier unspecified; patent 504667)",
      apd: false,
      role: "Front field lens — steers oblique ray bundles toward central groups",
      cemented: undefined,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.48697,
      vd: 70.3,
      fl: -41.3,
      glass: "FK5 fluor crown class (487/703; catalog equivalent, production supplier unspecified)",
      apd: false,
      role: "Second field lens — continues oblique beam steering with low lateral color",
      cemented: undefined,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7205,
      vd: 50.3,
      fl: -22.4,
      glass: "721503 LaK10 class; J-LAK10 catalog spectral proxy (production supplier unspecified)",
      apd: false,
      role: "Front element of Component C — gradually bends oblique rays before the positive core",
      cemented: "Ja",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.60739,
      vd: 59.5,
      fl: 7.9,
      glass: "K-SK7 (Sumita)",
      apd: false,
      role: "Rear element of Component C — primary convergent power of front positive group",
      cemented: "Ja",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.56993,
      vd: 57.5,
      fl: -10.0,
      glass: "570575 — BaK-type barium crown (no exact catalog match)",
      apd: false,
      role: "Front element of Component D — negative power for achromatic balancing",
      cemented: "Jb",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.625,
      vd: 53.3,
      fl: 5.6,
      glass: "625533 — SSK-type dense crown (no exact catalog match)",
      apd: false,
      role: "Central element of Component D — primary convergent power of rear positive group",
      cemented: "Jb",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.71966,
      vd: 29.3,
      fl: -17.6,
      glass: "SF1 dense flint (720/293)",
      apd: false,
      role: "Rear element of Component D — only flint glass; achromatic correction of triplet",
      cemented: "Jb",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.642,
      vd: 58.1,
      fl: -23.0,
      glass: "LaK/SK crown (642/581)",
      apd: false,
      role: "Rear field-flattening meniscus — Petzval correction and quasi-symmetric distortion control",
      cemented: undefined,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 22.9194, d: 0.777, nd: 1.5038, elemId: 1, sd: 11.9 }, // L1 front
    { label: "2", R: 11.0523, d: 2.772, nd: 1.0, elemId: 0, sd: 8.5 }, // L1 rear → air (l₁)
    { label: "3", R: 23.1525, d: 0.777, nd: 1.48697, elemId: 2, sd: 10.5 }, // L2 front
    { label: "4", R: 10.6512, d: 7.35, nd: 1.0, elemId: 0, sd: 7.35 }, // L2 rear → air (l₂)
    { label: "5", R: 11.8104, d: 6.153, nd: 1.7205, elemId: 3, sd: 6.0 }, // L3 front (Comp C)
    { label: "6", R: 5.3277, d: 2.793, nd: 1.60739, elemId: 4, sd: 4.41 }, // L3/L4 junction
    { label: "7", R: -40.9332, d: 0.4935, nd: 1.0, elemId: 0, sd: 4.1 }, // L4 rear → air
    { label: "STO", R: 1e15, d: 0.4935, nd: 1.0, elemId: 0, sd: 2.95 }, // Aperture stop (centre of l₃; Fig. 2 position)
    { label: "8", R: -53.067, d: 0.588, nd: 1.56993, elemId: 5, sd: 4.1 }, // L5 front (Comp D)
    { label: "9", R: 6.4239, d: 4.977, nd: 1.625, elemId: 6, sd: 3.78 }, // L5/L6 junction
    { label: "10", R: -5.3571, d: 3.822, nd: 1.71966, elemId: 7, sd: 4.62 }, // L6/L7 junction
    { label: "11", R: -12.0498, d: 8.19, nd: 1.0, elemId: 0, sd: 6.4 }, // L7 rear → air (l₄)
    { label: "12", R: -8.4315, d: 2.058, nd: 1.642, elemId: 8, sd: 7.5 }, // L8 front (Comp E)
    { label: "13", R: -21.5544, d: 10.3656, nd: 1.0, elemId: 0, sd: 11.0 }, // L8 rear → image (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ── */
  var: {
    "13": [10.3656, 10.8913], // [d_infinity, d_close_focus_0.9m] — calculated unit-focus extension
  },

  varLabels: [["13", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "A", fromSurface: "1", toSurface: "2" },
    { text: "B", fromSurface: "3", toSurface: "4" },
    { text: "C", fromSurface: "5", toSurface: "7" },
    { text: "D", fromSurface: "8", toSurface: "11" },
    { text: "E", fromSurface: "12", toSurface: "13" },
  ],

  doublets: [
    { text: "Ja", fromSurface: "5", toSurface: "7" },
    { text: "Jb", fromSurface: "8", toSurface: "11" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.9,
  focusDescription: "Unit focus — entire lens translates axially.",

  /* ── Aperture configuration ── */
  nominalFno: 4.5,
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
