import type { LensDataInput } from "../../types/optics.js";

/**
 * Samsung 20mm f/2.8 — US 2012/0056976 A1, Example 1.
 *
 * The six-element, four-group prescription is transcribed without dimensional scaling. The patent headline values are
 * EFL = 20.2634 mm and Fno = 2.8563; independent paraxial tracing of the rounded table gives EFL =
 * 20.2897673385 mm. `focalLengthDesign` stores that modeled result.
 *
 * Patent surfaces S12–S15 are two plane-parallel rear filters/cover plates. They are excluded from the ordinary
 * sequential model. Their raw air-equivalent S11-to-image spacings are 24.6988945148 mm at infinity,
 * 25.0358945148 mm at the published intermediate state, and 28.3458945148 mm at the near state. A uniform
 * +0.0282349802 mm paraxial closure correction, caused by the rounded published prescription, is applied to the
 * authored final gap. The resulting infinity and near endpoints are 24.7271294949 and 28.3741294949 mm; the published
 * 0.337 mm and 3.647 mm unit-focus travels are unchanged.
 *
 * The patent does not publish the stop diameter or clear apertures. The physical stop semi-diameter is inferred from
 * the independently computed EFL and the published f/2.8563, giving 4.4144348388 mm. Every surface semi-diameter is
 * likewise model-derived and was checked by exact meridional tracing, positive edge thickness, actual rim slope,
 * shared-band cross-gap intrusion, conic validity, off-axis containment, and render-trim limits. None is a
 * source value.
 *
 * A 2026-08-04 Figure 1 audit found every hand-read element rim within the repository's 25% change threshold, so the
 * inferred semi-diameters remain unchanged. The patent publishes only nd and vd. No nC, nF, ng, or dPgF fields are
 * authored; compatible catalog curves are optical equivalents, not claims about Samsung's production supplier.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "samsung-nx-20mm-f28",
  maker: "Samsung",
  name: "SAMSUNG 20mm f/2.8",
  subtitle: "US 2012/0056976 A1 Example 1 — strong production correlation; no scaling",
  specs: [
    "6 ELEMENTS / 4 GROUPS",
    "20.2898 mm MODELED EFL",
    "f/2.8563 MODELED APERTURE",
    "75.0786° PUBLISHED FULL FIELD",
    "1 ASPHERICAL SURFACE",
    "PUBLISHED UNIT FOCUS",
  ],

  focalLengthMarketing: 20,
  focalLengthDesign: 20.28976733848623,
  apertureMarketing: 2.8,
  apertureDesign: 2.8563,
  lensMounts: ["samsung-nx"],
  imageFormat: "aps-c",
  patentNumber: "US 2012/0056976 A1",
  patentAuthors: ["Yong-jae Lee", "Young-woo Park"],
  patentAssignees: ["Samsung Electronics Co., Ltd."],
  patentYear: 2012,
  elementCount: 6,
  groupCount: 4,

  // The patent's full field exceeds the production diagonal angle because the design carries barrel distortion.
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 75.0786,
    maxTraceFieldDeg: 37.5393,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7433,
      vd: 49.2,
      fl: -25.4313538323,
      glass: "NBF1 catalog equivalent; production supplier unspecified",
      role: "Negative front meniscus of the patent's first negative-power group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.51823,
      vd: 59,
      fl: -18.0472218841,
      glass: "E-C3 catalog equivalent; production supplier unspecified",
      cemented: "D1",
      role: "Negative crown component of the front cemented pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 14.0600182205,
      glass: "S-LAH58 catalog equivalent; production supplier unspecified",
      cemented: "D1",
      role: "Positive high-index component that leaves the front cemented pair weakly positive in isolation.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      fl: 9.06430130429,
      glass: "N-LASF44 catalog equivalent; production supplier unspecified",
      cemented: "D2",
      role: "Strong positive component immediately behind the stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.1,
      fl: -9.82641738909,
      glass: "E-FD15 catalog equivalent; production supplier unspecified",
      cemented: "D2",
      role: "Strong negative flint partner in the rear cemented pair.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus (1× Asph)",
      nd: 1.68997,
      vd: 53,
      fl: 27.8176292707,
      glass: "K-VC80-M catalog equivalent (patent coordinate; production supplier unspecified)",
      role: "Positive rear meniscus; its image-side surface is the design's sole asphere.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 14.28, d: 1.3, nd: 1.7433, elemId: 1, sd: 7.8 },
    { label: "2", R: 7.819, d: 3.82, nd: 1, elemId: 0, sd: 5.85 },
    { label: "3", R: -22.5, d: 0.8, nd: 1.51823, elemId: 2, sd: 6 },
    { label: "4", R: 16.2, d: 2.67, nd: 1.883, elemId: 3, sd: 5.9 },
    { label: "5", R: -49.03, d: 2.39, nd: 1, elemId: 0, sd: 5.8 },
    { label: "STO", R: 1e15, d: 4.05, nd: 1, elemId: 0, sd: 4.414434838836392 },
    { label: "7", R: 24.1, d: 4.4, nd: 1.8042, elemId: 4, sd: 7.1 },
    { label: "8", R: -9.6, d: 1, nd: 1.69895, elemId: 5, sd: 7.1 },
    { label: "9", R: 25.17, d: 1.74, nd: 1, elemId: 0, sd: 7.8 },
    { label: "10", R: -105, d: 2.74, nd: 1.68997, elemId: 6, sd: 7.9 },
    { label: "11A", R: -16.4, d: 24.72712949493723, nd: 1, elemId: 0, sd: 8.4 },
  ],

  /* ── Asphere ── */
  asph: {
    "11A": {
      K: -1,
      A4: 3.28982e-5,
      A6: 9.45759e-8,
      A8: 5.80525e-9,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Published unit focus with uniform paraxial closure ── */
  var: {
    "11A": [24.72712949493723, 28.37412949493723],
  },
  varLabels: [["11A", "BF"]],
  focusDescription:
    "PUBLISHED unit focus: all six elements translate together by 3.647 mm toward the object from infinity to " +
    "0.17 m. The omitted rear plates are represented by an air-equivalent final spacing with a disclosed uniform " +
    "+0.028235 mm paraxial closure correction.",

  /* ── Visual annotations ── */
  groups: [
    { text: "G1 (−)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (+)", fromSurface: "7", toSurface: "11A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "7", toSurface: "9" },
  ],

  /* ── Aperture and display ── */
  closeFocusM: 0.17,
  nominalFno: 2.8563,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 7,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
