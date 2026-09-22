// Canon FD 35mm f/2 S.S.C. (I)
// US Patent 3,748,022 — Akira Tajima (Canon Kabushiki Kaisha), granted 24 July 1973; single numerical embodiment
// 9 elements in 8 groups, reverse telephoto (retrofocus); front surface concave toward the object (R1 < 0)
// Floating focus: the whole lens shifts forward while the air interval D10 between II₁ and II₂ closes
//
// SCALE: the patent is normalized (f = 1, 1:2, 2ω = 64°). Every R and d is multiplied by s = 35.0 and rounded to
// 0.01 mm; semi-diameters are in the same mm scale. There are no aspheres.
// Computed EFL 34.99 mm (patent f = 1 → 35.00 mm); exact chief ray reaches Y = 21.6 mm at ω = 32.1° (patent 32°).
// Surfaces 1–10 reproduce the patent's own group data: φ1 = −0.6575 (patent −0.6575), φ2 = +1.1551 (1.1549),
// D = 0.4763 (0.4762), α = 0.8593 (0.8590).
//
// SOURCE CONFLICT — back focus: the patent prints "back focus = 1.1066" (38.73 mm) in the description and again in
// claim 1, but the tabulated prescription gives a paraxial BFD of 1.0844 (37.96 mm). Rounding cannot explain it:
// perturbing every R and d within its last printed digit only spans 1.079–1.090, and no single-entry change
// restores 1.1066 while keeping f = 1 and the published φ1 / φ2 / D. The table is followed; the conflict is open.
//
// STOP: not tabulated. FIG. 1 draws the iris inside D10, roughly 42 % of the gap behind R10 (figure reading); the
// file keeps its earlier 45 % split (2.43 + 2.96 mm), which is inside the drawing's precision. STO sd 9.6 mm is
// the paraxial f/2 marginal height, and the FIG. 1 iris opening also reads ≈ 9.6 mm at the figure scale. The viewer
// derives its working iris from nominalFno with a real ray (≈ 10.4 mm at f/2).
//
// FOCUS — three keyframes:
//   t = 0      infinity; D10 = 0.1541 → 5.39 mm (patent value).
//   t = 0.769  the patent's close-shot state at magnification 0.118; D10 = 0.1345 → 4.71 mm (patent value). The
//              patent gives no extension; BF 42.56 mm is the calculated paraxial conjugate for m = −0.118
//              (object-to-image 390 mm, hence t = 0.300 / 0.390).
//   t = 1      production MFD 0.3 m (Canon Camera Museum). Calculated, not published: D10 is continued along the
//              patent's "approximately in proportion to the amount of forward shift" rule (ΔD10 / Δshift = −0.149
//              from the two published states) until the object-to-image distance is 300 mm → D10 = 4.40 mm,
//              BF 44.61 mm, m = −0.171, ΔD10 = 2.8 % of f (patent limit 5 %). The museum's 0.194× would need
//              276 mm with this prescription; the patent's 0.2× ceiling corresponds to 271 mm.
//   The split of D10 around the inferred stop keeps a constant ratio — an assumption; the patent does not say
//   which sub-group carries the iris.
//
// NOTE ON SEMI-DIAMETERS: the patent publishes no clear apertures; every sd is an estimate. Basis: front-page
// FIG. 1 (300 dpi raster, ≈ 16.2 px/mm from the 866 px R1–R17 vertex span, clean upper side). Figure rims:
// L1 20.1, L2 flange 17.8 (R4 curve ends at 12.0–13.1), L3 12.1, L4 12.0, L5 11.8, L6 10.3, L7–L8 10.2,
// L9 11.2 mm. The drawing sizes II₁ and the cemented doublet almost exactly at the f/2 real marginal ray
// (12.04 mm at surface 7, 10.27 mm at surface 15), so surfaces 5–10 are set to 12.5 mm and 13–15 to 10.8 mm
// (figure value raised ≈ 0.5 mm so the axial beam clears); L9 follows the figure at 11.2 mm. L1, L2 and L6
// are within 15 % of the figure and keep their earlier estimates. At these rims the meridional full-field
// bundle (ω = 32.1°) passes about 41 % of the f/2 stop diameter.
//
// GLASS: the patent lists N and V only and names no glass or supplier. Labels are current-catalog coordinate
// equivalents, not statements about Canon's melts. L5 and L8 (1.7737 / 49.2, code 774492) have no equivalent in
// the repo catalog. Collector reports describe yellowing, radioactive (thoriated) glass in concave-front FD 35mm
// f/2 lenses; neither the patent nor Canon identifies such a glass, so tying it to L5/L8 is an inference only.

import type { LensDataInput } from "../../types/optics.js";

const LENS_DATA = {
  key: "canon-fd-35-f2",
  name: "CANON FD 35mm f/2 S.S.C. (I)",
  maker: "Canon",
  subtitle: "US 3,748,022 — single numerical embodiment (Tajima, 1973)",
  specs: ["35mm f/2", "9 elements / 8 groups", "Floating focus", "FD mount"],
  focalLengthMarketing: 35,
  focalLengthDesign: 35.0,
  apertureMarketing: 2,
  apertureDesign: 2.0,
  lensMounts: ["canon-fd"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,748,022",
  patentAuthors: ["Akira Tajima"],
  patentAssignees: ["Canon Inc."],
  patentYear: 1973,
  elementCount: 9,
  groupCount: 8,
  focusDescription:
    "Unit focus with floating correction — whole lens shifts forward while air space D10 (II₁–II₂) closes in proportion",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.697,
      vd: 48.5,
      fl: 362.5,
      glass: "S-LAM59 (OHARA catalog equivalent for patent coordinate; production supplier unspecified)",
      role: "Weakly positive meniscus, concave toward the object (R1 < 0) — the concave-front signature of this design",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.0,
      fl: -46.6,
      glass: "S-BSL7 (OHARA catalog equivalent for patent coordinate; production supplier unspecified)",
      role: "Primary diverger of Group I; strongly curved rear surface carries most of the group's negative power",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.70154,
      vd: 41.1,
      fl: -785.2,
      glass: "BASF7 (Sumita coefficient-backed equivalent), 702411",
      role: "Weak negative field corrector at front of Group II₁; nearly concentric meniscus for astigmatism control",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.7,
      vd: 48.0,
      fl: 57.3,
      glass: "S-LAM51 (OHARA)",
      role: "Strong positive in Group II₁; begins convergence of diverged beam",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.7737,
      vd: 49.2,
      fl: 60.9,
      glass: "774492 — dense lanthanum crown (no catalog equivalent; nd=1.7737, νd=49.2)",
      role: "Thick positive meniscus; controls rear principal plane for retrofocus BFD; glass has no current catalog match",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.5,
      fl: -32.1,
      glass: "S-TIH14 (OHARA catalog equivalent for patent coordinate; production supplier unspecified)",
      role: "Strongest negative element; leads Group II₂ after the variable gap; primary chromatic corrector",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      fl: -46.9,
      glass: "S-TIH6 (OHARA catalog equivalent for patent coordinate; production supplier unspecified)",
      cemented: "D1",
      role: "Dense flint in cemented doublet; achromatic corrector paired with L8",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.7737,
      vd: 49.2,
      fl: 30.2,
      glass: "774492 — dense lanthanum crown (no catalog equivalent; nd=1.7737, νd=49.2)",
      cemented: "D1",
      role: "Crown element of cemented doublet; same 1.7737 / 49.2 glass as L5",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.8,
      fl: 53.8,
      glass: "S-LAH53 (OHARA catalog equivalent for patent coordinate; production supplier unspecified)",
      role: "Rear positive element; controls exit pupil and final field flattening",
    },
  ],

  surfaces: [
    // ---- Group I (negative front group) ----
    { label: "1", R: -202.16, d: 3.41, nd: 1.697, elemId: 1, sd: 20.5 },
    { label: "2", R: -113.09, d: 0.1, nd: 1.0, elemId: 0, sd: 19.5 },
    { label: "3", R: 63.56, d: 1.46, nd: 1.51633, elemId: 2, sd: 19.0 },
    { label: "4", R: 17.304, d: 12.12, nd: 1.0, elemId: 0, sd: 14.4 },
    // ---- Group II₁ (rear-front positive) ----
    { label: "5", R: -34.12, d: 3.4, nd: 1.70154, elemId: 3, sd: 12.5 },
    { label: "6", R: -37.87, d: 0.1, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "7", R: 37.52, d: 3.36, nd: 1.7, elemId: 4, sd: 12.5 },
    { label: "8", R: 554.05, d: 1.47, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "9", R: 46.655, d: 10.12, nd: 1.7737, elemId: 5, sd: 12.5 },
    { label: "10", R: 4343.5, d: 2.43, nd: 1.0, elemId: 0, sd: 12.5 },
    // ---- Aperture stop (inferred from FIG. 1, within variable gap D10 = 5.39 mm) ----
    { label: "STO", R: 1e15, d: 2.96, nd: 1.0, elemId: 0, sd: 9.6 },
    // ---- Group II₂ (rear-back positive) ----
    { label: "11", R: -135.7, d: 0.98, nd: 1.76182, elemId: 6, sd: 11.0 },
    { label: "12", R: 29.939, d: 3.17, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "13", R: -40.95, d: 0.98, nd: 1.80518, elemId: 7, sd: 10.8 },
    { label: "14", R: 488.6, d: 4.29, nd: 1.7737, elemId: 8, sd: 10.8 },
    { label: "15", R: -24.46, d: 0.1, nd: 1.0, elemId: 0, sd: 10.8 },
    { label: "16", R: 68.95, d: 2.89, nd: 1.8061, elemId: 9, sd: 11.2 },
    { label: "17", R: -114.73, d: 37.96, nd: 1.0, elemId: 0, sd: 11.2 },
  ],

  asph: {},

  // Keyframes: infinity (patent) · patent close shot m = 0.118 (D10 patent, BF calculated) · 0.3 m MFD (calculated)
  focusPositions: [0, 0.769, 1],
  var: {
    "10": [2.43, 2.12, 1.98],
    STO: [2.96, 2.59, 2.42],
    "17": [37.96, 42.56, 44.61],
  },
  varLabels: [
    ["10", "D10a"],
    ["STO", "D10b"],
    ["17", "BF"],
  ],

  groups: [
    { text: "I (neg)", fromSurface: "1", toSurface: "4" },
    { text: "II₁ (pos)", fromSurface: "5", toSurface: "10" },
    { text: "II₂ (pos)", fromSurface: "11", toSurface: "17" },
  ],
  doublets: [{ text: "D1", fromSurface: "13", toSurface: "15" }],

  closeFocusM: 0.3,
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
  scFill: 0.55,
  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
