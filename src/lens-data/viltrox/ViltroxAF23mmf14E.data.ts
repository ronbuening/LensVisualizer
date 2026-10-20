import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Data source: CN 211826700 U, Example 1 (Tables 1–2, Fig. 1), correlated with the Viltrox AF 23mm F1.4
 * (APS-C; Sony E, Fujifilm X, Canon EF-M and Nikon Z mounts share one construction). The manufacturer does not
 * confirm the patent. 11 elements / 10 groups, all spherical, unscaled (s = 1.0), d-line indices.
 *
 * SOURCE CORRECTION — L12 INDEX (surface 3): Table 1 prints nd 1.85 for L12 with νd 42.72. This file carries
 * nd 1.83. νd 42.72 is the 1.83481 glass class, and Example 3 of the same patent prints that pair as 1.83/42.72.
 * The printed 1.85 gives F1/F = 1.879, below claim 1's lower limit of 1.9 (Table 9 lists 1.93), and puts the
 * infinity paraxial focus 0.873 mm in front of the printed image plane, far outside Fig. 2's ±0.2 mm
 * spherical-aberration plot. With 1.83: F1/F = 1.968, infinity defocus 0.125 mm, and the printed 0.3 m spacings
 * focus an object 0.3 m from the image plane onto the printed image plane (β ≈ −0.10). Recorded in source.errata.
 *
 * FIRST ORDER: model EFL 23.350 mm against the printed 23.44 mm (−0.38%). The patent prints indices to two
 * decimals only; plausible six-digit catalog indices for the same glasses reduce the EFL gap to about −0.1%
 * and the 0.125 mm infinity defocus to about 0.04 mm. The printed indices are kept.
 *
 * FOCUS: Table 2 prints infinity and 0.3 m states. G3 (L31) alone moves toward the image: D1 1.00 → 3.76 mm,
 * D2 4.43 → 1.88 mm. D1 + D2 is 5.43 mm at infinity and 5.64 mm at 0.3 m, although G2 and G4 are fixed; the
 * printed spacings are kept and the 0.21 mm difference is recorded as an unresolved erratum.
 *
 * FIELD CURVES (unresolved erratum): Fig. 3 keeps the tangential field within about 0.1 mm of the axial focus to
 * 31.7°; the printed table traces to −0.75 mm at the edge (−0.88 mm against the image plane), and Fig. 6 shows
 * the same gap at 0.3 m. Single-value changes to d4, d6, d7, R2, R20 or R21 each flatten it, but which one wins
 * depends on the unprinted index decimals, and index shifts of 0.01 or less reproduce Fig. 3 without any R or d
 * change. No value is isolated, so the printed table is kept.
 *
 * SEMI-DIAMETERS / STOP: the patent prints no clear apertures. Element semi-diameters follow Fig. 1, which is
 * drawn to scale (18.42 px/mm at 300 dpi; surface sags fit the printed radii), and are floor-checked by real-ray
 * trace at infinity and at 0.3 m. L15's front face (10.4) and the C1 doublet's rear faces (10.7) sit just above
 * the f/1.4 marginal ray; the other rims keep the earlier values, within 9% of the figure. The stop radius is
 * derived from the design f/1.4.
 * The source GL plate (2.00 mm, nd 1.52, νd 64.2) is traced in rearPlates at its printed gaps.
 * Glass labels stay Unmatched: the patent gives two-decimal nd and νd only, and no nC, nF, ng or dPgF.
 */

const LENS_DATA = {
  schema: 2,
  key: "viltrox-af-23mm-f14",
  maker: "Viltrox",
  name: "VILTROX AF 23mm f/1.4",
  subtitle: "CN 211826700 U, Example 1 — qualified production correlation",

  catalog: {
    lensMounts: ["sony-fe", "fujifilm-x", "canon-ef-m", "nikon-z"],
    imageFormat: "aps-c",
    specs: ["11 ELEMENTS / 10 GROUPS", "DESIGN f = 23.44 mm", "DESIGN F/1.4", "ALL SPHERICAL", "INTERNAL FOCUS"],
    elementCount: 11,
    groupCount: 10,
    focalLengthMm: { marketing: 23, design: 23.44 },
    fNumber: { marketing: 1.4, design: 1.4 },
  },

  source: {
    patentNumber: "CN 211826700 U",
    patentYear: 2020,
    authors: ["Liu Ruijun", "Chen Baofeng"],
    assignees: ["Shenzhen Leiying Photoelectric Technology Co., Ltd."],
    errata: [
      {
        status: "corrected",
        surface: "3",
        field: "nd",
        printed: 1.85,
        applied: 1.83,
        evidence: ["sibling-example", "claims", "aberration-figure"],
        note: "L12's νd 42.72 is the 1.83481 class, which Example 3 prints as 1.83/42.72. The printed 1.85 gives F1/F = 1.879, below claim 1's limit of 1.9 (Table 9: 1.93), and an infinity focus 0.873 mm in front of the image plane, outside Fig. 2's ±0.2 mm plot; 1.83 gives F1/F = 1.968 and 0.125 mm.",
      },
      {
        status: "unresolved",
        note: "Table 2 moves only G3, yet D1 + D2 is 5.43 mm at infinity and 5.64 mm at 0.3 m. The printed spacings are kept.",
      },
      {
        status: "unresolved",
        note: "Fig. 3 keeps the tangential field within about 0.1 mm of the axial focus out to 31.7°, but the printed table traces to −0.75 mm at the field edge; Fig. 6 (0.3 m) shows the same gap. Several single R or d changes in G1 or G4 flatten the curve, the best one depends on the unprinted index decimals, and index shifts of 0.01 or less alone reproduce Fig. 3. No single value is isolated; the printed values are kept.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.88,
      vd: 40.79,
      indexReference: "d",
      focalLengthMm: -32.51744301194437,
      glass: "Unmatched (nd 1.88, νd 40.79; coarse patent coordinates)",
      apd: false,
      role: "High-index negative front meniscus of the fixed first group; narrows the bundle passed to the rear elements.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.83, // Source erratum: Table 1 prints 1.85; see header and source.errata.
      vd: 42.72,
      indexReference: "d",
      focalLengthMm: 39.15639834907696,
      glass: "Unmatched (printed nd 1.85 corrected to 1.83, νd 42.72; coarse patent coordinates)",
      apd: false,
      role: "First positive element of the fixed first group, behind the front negative meniscus.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.85,
      vd: 36.59,
      indexReference: "d",
      focalLengthMm: 65.28293389191657,
      glass: "Unmatched (nd 1.85, νd 36.59; coarse patent coordinates)",
      apd: false,
      role: "High-index positive meniscus, convex to the object, adding power to the first group.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.51,
      vd: 81.59,
      indexReference: "d",
      focalLengthMm: 157.75827511396315,
      glass: "Unmatched (nd 1.51, νd 81.59; coarse patent coordinates)",
      apd: "patent",
      apdNote:
        "The patent (¶0028) specifies ultra-low-dispersion material for the fourth and fifth lenses of G1; Viltrox lists two ED elements. νd 81.59 fits a fluorophosphate ED glass; partial dispersion is unpublished.",
      role: "Weak low-dispersion positive meniscus that offsets the first group's longitudinal color.",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.48,
      vd: 70.44,
      indexReference: "d",
      focalLengthMm: -70.02853752813387,
      glass: "Unmatched (nd 1.48, νd 70.44; coarse patent coordinates)",
      apd: "patent",
      apdNote:
        "The patent (¶0028) specifies ultra-low-dispersion material for the fourth and fifth lenses of G1; Viltrox lists two ED elements. νd 70.44 fits a low-dispersion crown; partial dispersion is unpublished.",
      role: "Low-dispersion negative meniscus ending the first group just ahead of the stop.",
    },
    {
      id: 6,
      name: "L21",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.85,
      vd: 23.78,
      indexReference: "d",
      focalLengthMm: -10.745320362414462,
      glass: "Unmatched (nd 1.85, νd 23.78; coarse patent coordinates)",
      apd: false,
      role: "Dense-flint negative half of the cemented doublet behind the stop.",
      cemented: "C1",
    },
    {
      id: 7,
      name: "L22",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.73,
      vd: 54.67,
      indexReference: "d",
      focalLengthMm: 16.414252477306437,
      glass: "Unmatched (nd 1.73, νd 54.67; coarse patent coordinates)",
      apd: false,
      role: "Lanthanum-crown positive half of the cemented doublet; with Element 6 it forms a weak negative, achromatizing pair.",
      cemented: "C1",
    },
    {
      id: 8,
      name: "L23",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.93,
      vd: 20.88,
      indexReference: "d",
      focalLengthMm: 28.992155902364747,
      glass: "Unmatched (nd 1.93, νd 20.88; coarse patent coordinates)",
      apd: false,
      role: "Very high-index positive element that supplies most of the fixed second group's power.",
    },
    {
      id: 9,
      name: "L31",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.75,
      vd: 28.3,
      indexReference: "d",
      focalLengthMm: -41.31224966322406,
      glass: "Unmatched (nd 1.75, νd 28.30; coarse patent coordinates)",
      apd: false,
      role: "Single-element focusing group G3; moves toward the image for closer subjects.",
    },
    {
      id: 10,
      name: "L41",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.73,
      vd: 54.67,
      indexReference: "d",
      focalLengthMm: 20.992152082684616,
      glass: "Unmatched (nd 1.73, νd 54.67; coarse patent coordinates)",
      apd: false,
      role: "Strong positive element of the fixed rear group.",
    },
    {
      id: 11,
      name: "L42",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.85,
      vd: 23.78,
      indexReference: "d",
      focalLengthMm: -39.75513771243058,
      glass: "Unmatched (nd 1.85, νd 23.78; coarse patent coordinates)",
      apd: false,
      role: "Dense-flint negative meniscus closing the rear group, concave to the object.",
    },
  ],

  surfaces: [
    { label: "1", R: 105.5, d: 1, sd: 15.7, medium: 1 },
    { label: "2", R: 22.41, d: 15.36, sd: 15.7 },
    { label: "3", R: 68.64, d: 4.06, sd: 14.4, medium: 2 },
    { label: "4", R: -60.07, d: 0.1, sd: 14.4 },
    { label: "5", R: 23.25, d: 2.98, sd: 13.95, medium: 3 },
    { label: "6", R: 37.66, d: 3.54, sd: 13.5 },
    { label: "7", R: -126.69, d: 2.31, sd: 13.2, medium: 4 },
    { label: "8", R: -49.51, d: 0.11, sd: 13 },
    { label: "9", R: 21.54, d: 1, sd: 10.4, medium: 5 },
    { label: "10", R: 12.93, d: 5.74, sd: 10.1 },
    { label: "STO", R: "flat", d: 4.99 },
    { label: "12", R: -13.17, d: 1, sd: 8.9, medium: 6 },
    { label: "13", R: 30.84, d: 6.55, sd: 10.7, medium: 7 },
    { label: "14", R: -17.84, d: 0.1, sd: 10.7 },
    { label: "15", R: 51.8, d: 3.58, sd: 11.3, medium: 8 },
    { label: "16", R: -54.36, sd: 11.3 },
    { label: "17", R: 65.81, d: 0.7, sd: 10, medium: 9 },
    { label: "18", R: 20.97, sd: 10 },
    { label: "19", R: 30.99, d: 8.03, sd: 12.8, medium: 10 },
    { label: "20", R: -27, d: 0.91, sd: 12.8 },
    { label: "21", R: -25.97, d: 1, sd: 12.8, medium: 11 },
    { label: "22", R: -114.18, d: 14.29, sd: 12.8 },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "PUBLISHED — single-element internal focus: the negative G3 meniscus (Element 9) moves toward the image as " +
      "focus shortens from infinity to the patent's 0.3 m state, which matches the marketed minimum focus distance " +
      "(D1 1.00 → 3.76 mm; D2 4.43 → 1.88 mm). The printed D1 + D2 grows by 0.21 mm although G2 and G4 are fixed; " +
      "the printed spacings are kept.",
    published: [1],
  },

  gaps: { "16": { label: "D1", values: [[1.0, 3.76]] }, "18": { label: "D2", values: [[4.43, 1.88]] } },

  aperture: { nominalFNumber: 1.4, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 9 },

  rearPlates: [
    {
      label: "GL",
      thicknessMm: 2,
      nd: 1.52,
      vd: 64.2,
      gapAfterMm: 1,
      source: "CN 211826700 U, Example 1 Table 1, surfaces 23–24",
    },
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "10" },
    { text: "G2", fromSurface: "12", toSurface: "16" },
    { text: "G3", fromSurface: "17", toSurface: "18" },
    { text: "G4", fromSurface: "19", toSurface: "22" },
  ],
  doublets: [{ text: "C1", fromSurface: "12", toSurface: "14" }],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
