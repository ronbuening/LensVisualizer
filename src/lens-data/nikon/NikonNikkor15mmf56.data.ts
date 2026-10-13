import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON NIKKOR-QD·C AUTO 15mm f/5.6                               ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP S48-71634 A (Tomowaki Takahashi / Nippon Kogaku K.K.),      ║
 * ║  second numerical table, "spherical optical system (reference material)",    ║
 * ║  PDF pp. 3–4 (printed pp. 165–166): f = 15.3, F/5.6, 2ω = 110°, B.f. 38.77.  ║
 * ║  Fourteen elements in twelve groups plus the built-in filter plate F that    ║
 * ║  the table lists between L5 and L6; all surfaces spherical. The patent's     ║
 * ║  own (aspheric) embodiment and its coefficients are not used.                ║
 * ║                                                                              ║
 * ║  PRODUCT CORRELATION: The table is correlated with the 1973 Nikkor-QD·C      ║
 * ║  Auto 15mm f/5.6 (14 elements / 12 groups, 110°, built-in filters) by focal  ║
 * ║  length, aperture, field, construction count, applicant and date. Nikon has  ║
 * ║  not confirmed that this table is the production prescription, and Nikon     ║
 * ║  credits the production design to Ikuo Mori rather than the patent's         ║
 * ║  inventor. Radii, glasses and iris size of the production lens may differ.   ║
 * ║                                                                              ║
 * ║  SCALE: None applied. The table is published at f = 15.3 mm; the computed    ║
 * ║  paraxial EFL is 15.309 mm.                                                  ║
 * ║                                                                              ║
 * ║  IMAGE PLANE: The final d is the patent's printed B.f. = 38.77 mm. The       ║
 * ║  computed paraxial BFD is 38.793 mm; the 0.023 mm difference is consistent   ║
 * ║  with rounding of the tabulated values and is left visible.                  ║
 * ║                                                                              ║
 * ║  FILTER PLATE: The 1.20 mm plate (n = 1.51743, no Abbe number published) is  ║
 * ║  part of the patent table and of the production lens's built-in filter       ║
 * ║  turret, so it is drawn and traced as a Plane-Parallel Plate element. It is  ║
 * ║  not counted in elementCount / groupCount.                                   ║
 * ║                                                                              ║
 * ║  NOTE ON STOP: The patent gives no diaphragm row. The stop is placed at the  ║
 * ║  midpoint of the 1.60 mm air gap between the flat faces r20 and r21 (0.80 +  ║
 * ║  0.80 mm), where Fig. 1 draws the diaphragm. Its semi-diameter is            ║
 * ║  calibrated by exact on-axis ray tracing to F/5.6 (paraxial pupil            ║
 * ║  calculation with the same iris: F/5.50); it is not a published iris size.   ║
 * ║                                                                              ║
 * ║  NOTE ON SEMI-DIAMETERS: The patent lists none. Values follow the element    ║
 * ║  rims of patent Fig. 1 (PDF p. 4, 0.1317 mm/px at the 352 dpi native scan),  ║
 * ║  which draws the aspheric embodiment; its front group L1–L5 and filter       ║
 * ║  share most radii with this table, and its rims agree with the exact chief   ║
 * ║  ray of this table at the 135 corner (ω = 55.3°, Y = 21.65 mm) within about  ║
 * ║  1 mm. Surfaces 1–12 are therefore set to the figure rim or the corner       ║
 * ║  chief-ray height plus 0.1–0.6 mm, whichever is larger. Doublet D1 has       ║
 * ║  different thicknesses in this table and uses one common ray-based rim.      ║
 * ║  Behind the stop the figure is followed where it clears the axial beam; the  ║
 * ║  D2 doublet is drawn narrower than the F/5.6 axial beam and is kept          ║
 * ║  ray-based. All values are modeled clear apertures, not production           ║
 * ║  mechanical dimensions. Two geometry limits are raised because the 110°      ║
 * ║  table needs them: r2 must reach 30.8 mm to pass the corner chief ray        ║
 * ║  (30.77 mm), a 69.9° rim slope (maxRimAngleDeg = 70; Fig. 1 draws the rear   ║
 * ║  of L1 equally deep), and the L1–L2 air gap closes to 0.53 mm at that rim    ║
 * ║  (gapSagFrac = 0.95). Both are the smallest values that keep the corner      ║
 * ║  chief ray unclipped.                                                        ║
 * ║                                                                              ║
 * ║  NOTE ON GLASS: The patent prints n and ν without naming the spectral line   ║
 * ║  or any glass. They are traced as d-line values on that assumption. Catalog  ║
 * ║  names in the glass labels are coordinate-compatible classes that supply a   ║
 * ║  dispersion curve; they do not identify the historical supplier or melt.     ║
 * ║  L9 / L11 (nearest FF5, Δnd −0.002) and L12 (J-SFH2, a modern glass) borrow  ║
 * ║  the nearest catalog curve only. L6, L13 and the filter have no compatible   ║
 * ║  catalog glass and stay Unmatched (Abbe-number dispersion fallback). The     ║
 * ║  unusual indices of L6 and L13 are printed identically in both patent        ║
 * ║  tables and reproduce the printed f and B.f., so they are not misprints.     ║
 * ║                                                                              ║
 * ║  NOTE ON FOCUS: Only the infinity prescription is published. var is empty    ║
 * ║  and closeFocusM = 1e15 marks focus as not modeled; it is not a minimum      ║
 * ║  focus distance. The production lens's 0.3 m close focus and floating        ║
 * ║  correction are not reconstructed.                                           ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-nikkor-15mm-f56",
  maker: "Nikon",
  name: "NIKON NIKKOR-QD·C AUTO 15mm f/5.6",
  subtitle:
    "JP S48-71634 A spherical reference table — production-correlated model (correlation not confirmed by Nikon)",
  specs: ["14 ELEMENTS / 12 GROUPS + BUILT-IN FILTER", "MODELED EFL 15.309 mm", "F/5.6 · 110° FIELD", "ALL-SPHERICAL"],

  focalLengthMarketing: 15,
  focalLengthDesign: 15.309,
  apertureMarketing: 5.6,
  apertureDesign: 5.6,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP S48-71634 A",
  patentAuthors: ["Tomowaki Takahashi"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1973,
  elementCount: 14,
  groupCount: 12,

  /* ── Elements ──
   * nd / vd are the patent's n / ν columns. The patent does not state the spectral line; they are traced as
   * d-line values on that assumption (see indexReferenceNote). Catalog names in `glass` are coordinate-compatible
   * classes used for dispersion only, not supplier identifications.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element L1",
      type: "Negative Meniscus",
      nd: 1.78764,
      vd: 47.5,
      indexReferenceNote: "Patent n/ν spectral line not stated; values are traced as d-line on that assumption.",
      fl: -143.38605684816815,
      glass:
        "788475 — lanthanum dense flint, LaSF014 class (nearest J-LASF014 HIKARI / TAF4 HOYA, Δnd +0.0004; supplier unconfirmed)",
      role: "Front negative meniscus; opens the diverging front group and sets the front diameter for the 110° field.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element L2",
      type: "Positive Meniscus",
      nd: 1.71341,
      vd: 53.9,
      indexReferenceNote: "Patent n/ν spectral line not stated; values are traced as d-line on that assumption.",
      fl: 93.19418695841442,
      glass:
        "713539 — lanthanum crown, LaK8 class (nearest J-LAK8 HIKARI / LAC8 HOYA, Δnd −0.0004; supplier unconfirmed)",
      role: "Thick positive meniscus inside the diverging front group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element L3",
      type: "Negative Meniscus",
      nd: 1.6932,
      vd: 53.5,
      indexReferenceNote: "Patent n/ν spectral line not stated; values are traced as d-line on that assumption.",
      fl: -67.90550460774206,
      glass:
        "693535 — lanthanum crown, LaK13 class (nearest LAC13 HOYA / S-LAL13 OHARA, Δnd +0.0003; supplier unconfirmed)",
      role: "Second negative meniscus of the front group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element L4",
      type: "Negative Meniscus",
      nd: 1.6932,
      vd: 53.5,
      indexReferenceNote: "Patent n/ν spectral line not stated; values are traced as d-line on that assumption.",
      fl: -57.56568154518863,
      glass:
        "693535 — lanthanum crown, LaK13 class (nearest LAC13 HOYA / S-LAL13 OHARA, Δnd +0.0003; supplier unconfirmed)",
      role: "Third negative meniscus of the front group; spherical in this table (the patent's own embodiment makes its front surface aspheric).",
    },
    {
      id: 5,
      name: "L5",
      label: "Element L5",
      type: "Negative Meniscus",
      nd: 1.69684,
      vd: 55.6,
      indexReferenceNote: "Patent n/ν spectral line not stated; values are traced as d-line on that assumption.",
      fl: -63.72963386448068,
      glass:
        "697556 — lanthanum crown, LaK14 class (J-LAK14 HIKARI / S-LAL14 OHARA coordinate-compatible; supplier unconfirmed)",
      role: "Last negative meniscus of the front group, directly ahead of the built-in filter.",
    },
    {
      id: 6,
      name: "F",
      label: "Built-in filter",
      type: "Plane-Parallel Plate",
      nd: 1.51743,
      indexReferenceNote: "Patent n/ν spectral line not stated; values are traced as d-line on that assumption.",
      glass: "Unmatched (filter glass; Abbe number not published)",
      role: "Built-in filter plate listed in the patent table; not counted among the 14 elements / 12 groups.",
    },
    {
      id: 7,
      name: "L6",
      label: "Element L6",
      type: "Biconcave Negative",
      nd: 1.84131,
      vd: 43.3,
      indexReferenceNote: "Patent n/ν spectral line not stated; values are traced as d-line on that assumption.",
      fl: -15.756286396747374,
      glass: "Unmatched (841433 lanthanum dense flint coordinate; no coordinate-compatible catalog glass)",
      cemented: "D1",
      role: "Thin negative front member of cemented doublet D1.",
    },
    {
      id: 8,
      name: "L7",
      label: "Element L7",
      type: "Biconvex Positive",
      nd: 1.548,
      vd: 45.9,
      indexReferenceNote: "Patent n/ν spectral line not stated; values are traced as d-line on that assumption.",
      fl: 16.704838914558806,
      glass:
        "548459 — extra-light flint, LLF1 class (J-LLF1 HIKARI / LLF1 SCHOTT coordinate-compatible; supplier unconfirmed)",
      cemented: "D1",
      role: "Thick positive rear member of cemented doublet D1.",
    },
    {
      id: 9,
      name: "L8",
      label: "Element L8",
      type: "Negative Meniscus",
      nd: 1.69684,
      vd: 55.6,
      indexReferenceNote: "Patent n/ν spectral line not stated; values are traced as d-line on that assumption.",
      fl: -23.313610610885714,
      glass:
        "697556 — lanthanum crown, LaK14 class (J-LAK14 HIKARI / S-LAL14 OHARA coordinate-compatible; supplier unconfirmed)",
      role: "Air-spaced negative meniscus between the two cemented doublets.",
    },
    {
      id: 10,
      name: "L9",
      label: "Element L9",
      type: "Biconvex Positive",
      nd: 1.59483,
      vd: 35.6,
      indexReferenceNote: "Patent n/ν spectral line not stated; values are traced as d-line on that assumption.",
      fl: 11.329126352489267,
      glass: "595356 — flint (nearest FF5 HOYA, Δnd −0.0021; not a period identification, supplier unconfirmed)",
      cemented: "D2",
      role: "Positive front member of cemented doublet D2, ahead of the stop.",
    },
    {
      id: 11,
      name: "L10",
      label: "Element L10",
      type: "Plano-Concave",
      nd: 1.5916,
      vd: 58.2,
      indexReferenceNote: "Patent n/ν spectral line not stated; values are traced as d-line on that assumption.",
      fl: -21.12914131169682,
      glass: "592582 — dense barium crown, SK13/BaCD13 class (nearest BACD13 HOYA, Δnd +0.0002; supplier unconfirmed)",
      cemented: "D2",
      role: "Plano-concave rear member of cemented doublet D2; its flat face looks at the stop.",
    },
    {
      id: 12,
      name: "L11",
      label: "Element L11",
      type: "Plano-Convex",
      nd: 1.59508,
      vd: 35.6,
      indexReferenceNote: "Patent n/ν spectral line not stated; values are traced as d-line on that assumption.",
      fl: 20.098138065469993,
      glass: "595356 — flint (nearest FF5 HOYA, Δnd −0.0024; not a period identification, supplier unconfirmed)",
      role: "Thick plano-convex positive element directly behind the stop.",
    },
    {
      id: 13,
      name: "L12",
      label: "Element L12",
      type: "Biconcave Negative",
      nd: 1.86142,
      vd: 23.1,
      indexReferenceNote: "Patent n/ν spectral line not stated; values are traced as d-line on that assumption.",
      fl: -11.012497635516699,
      glass:
        "861231 — dense flint (nearest J-SFH2 HIKARI, Δnd −0.0007; modern coordinate-compatible curve, not a period glass; supplier unconfirmed)",
      role: "Strong biconcave negative element of the lowest Abbe number in the table.",
    },
    {
      id: 14,
      name: "L13",
      label: "Element L13",
      type: "Positive Meniscus",
      nd: 1.44772,
      vd: 67.2,
      indexReferenceNote: "Patent n/ν spectral line not stated; values are traced as d-line on that assumption.",
      fl: 25.61578241982477,
      glass: "Unmatched (448672 low-index crown coordinate; no coordinate-compatible catalog glass)",
      role: "Positive meniscus of unusually low index in the rear converging group.",
    },
    {
      id: 15,
      name: "L14",
      label: "Element L14",
      type: "Biconvex Positive",
      nd: 1.50976,
      vd: 63.4,
      indexReferenceNote: "Patent n/ν spectral line not stated; values are traced as d-line on that assumption.",
      fl: 43.763632491274464,
      glass: "510634 — borosilicate crown, BK1 class (nearest BK1 SUMITA, Δnd +0.0003; supplier unconfirmed)",
      role: "Final biconvex positive element.",
    },
  ],

  /* ── Surface prescription ──
   * Patent rows r1–r28 at the patent's own scale. The patent's 1.60 mm gap d20 between the two flat faces r20 and
   * r21 holds the diaphragm; it is stored as 0.80 mm before STO + 0.80 mm after STO.
   */
  surfaces: [
    { label: "1", R: 48.15, d: 3.1, nd: 1.78764, elemId: 1, sd: 39 },
    { label: "2", R: 32.8, d: 10.3, nd: 1.0, elemId: 0, sd: 30.8 },
    { label: "3", R: 46.24, d: 9.5, nd: 1.71341, elemId: 2, sd: 31 },
    { label: "4", R: 138.86, d: 0.1, nd: 1.0, elemId: 0, sd: 30.6 },
    { label: "5", R: 28, d: 1, nd: 1.6932, elemId: 3, sd: 19 },
    { label: "6", R: 17.3, d: 4.4, nd: 1.0, elemId: 0, sd: 15.2 },
    { label: "7", R: 22.9, d: 1, nd: 1.6932, elemId: 4, sd: 14.3 },
    { label: "8", R: 14.29, d: 3.2, nd: 1.0, elemId: 0, sd: 11.9 },
    { label: "9", R: 18.7, d: 1, nd: 1.69684, elemId: 5, sd: 11.2 },
    { label: "10", R: 12.87, d: 6.3, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "11", R: 1e15, d: 1.2, nd: 1.51743, elemId: 6, sd: 9.7 },
    { label: "12", R: 1e15, d: 0.7, nd: 1.0, elemId: 0, sd: 9.7 },
    { label: "13", R: -449.32, d: 0.8, nd: 1.84131, elemId: 7, sd: 8 },
    { label: "14", R: 13.67, d: 12, nd: 1.548, elemId: 8, sd: 8 },
    { label: "15", R: -19.1, d: 0.1, nd: 1.0, elemId: 0, sd: 8 },
    { label: "16", R: 20.31, d: 0.8, nd: 1.69684, elemId: 9, sd: 5 },
    { label: "17", R: 8.88, d: 2.5, nd: 1.0, elemId: 0, sd: 4.6 },
    { label: "18", R: 13.4, d: 2.8, nd: 1.59483, elemId: 10, sd: 4.5 },
    { label: "19", R: -12.5, d: 1.3, nd: 1.5916, elemId: 11, sd: 4.5 },
    { label: "20", R: 1e15, d: 0.8, nd: 1.0, elemId: 0, sd: 4.5 },
    { label: "STO", R: 1e15, d: 0.8, nd: 1.0, elemId: 0, sd: 3.3269935993387194 },
    { label: "21", R: 1e15, d: 6.1, nd: 1.59508, elemId: 12, sd: 4.3 },
    { label: "22", R: -11.96, d: 0.9, nd: 1.0, elemId: 0, sd: 4.8 },
    { label: "23", R: -13.4, d: 1.8, nd: 1.86142, elemId: 13, sd: 4.9 },
    { label: "24", R: 34.5, d: 0.6, nd: 1.0, elemId: 0, sd: 5.4 },
    { label: "25", R: -190.05, d: 2.5, nd: 1.44772, elemId: 14, sd: 5.5 },
    { label: "26", R: -10.86, d: 0.1, nd: 1.0, elemId: 0, sd: 5.9 },
    { label: "27", R: 315.5, d: 5.7, nd: 1.50976, elemId: 15, sd: 7.6 },
    { label: "28", R: -23.86, d: 38.77, nd: 1.0, elemId: 0, sd: 7.8 },
  ],

  asph: {},

  var: {},
  varLabels: [],

  groups: [
    { text: "FRONT DIVERGING", fromSurface: "1", toSurface: "10" },
    { text: "PRE-STOP", fromSurface: "13", toSurface: "20" },
    { text: "POST-STOP", fromSurface: "21", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "13", toSurface: "15" },
    { text: "D2", fromSurface: "18", toSurface: "20" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1e15,
  focusDescription:
    "Infinity prescription only. The production lens focuses to 0.3 m with a floating close-range correction, but the patent publishes no focusing gaps, so focus travel is not modeled.",

  /* ── Aperture configuration ── */
  nominalFno: 5.6,
  fstopSeries: [5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Geometry limits ── see NOTE ON SEMI-DIAMETERS */
  maxRimAngleDeg: 70,
  gapSagFrac: 0.95,

  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
