import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SAMYANG XP 35mm f/1.2                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: KR 10-2077265 B1, Numerical Example 3 (Samyang Optics). ║
 * ║  Production correlation is inferred from Samyang's official       ║
 * ║  35mm f/1.2, Canon EF, full-frame, 12e/10g specifications.        ║
 * ║  12 elements / 10 groups, 4 aspherical surfaces on 2 elements.    ║
 * ║                                                                    ║
 * ║  Focus status: PUBLISHED.                                         ║
 * ║  G13 is fixed. G23 and G33 move independently objectward from        ║
 * ║  infinity to the patent's nearest / maximum-magnification state.  ║
 * ║  Published endpoint gaps are used directly; no intermediate       ║
 * ║  focus reconstruction is authored. closeFocusM is normalized to   ║
 * ║  the plate-omitted model image plane while preserving the patent  ║
 * ║  near object distance D0 = 175.678043 mm.                         ║
 * ║                                                                    ║
 * ║  Rear reference-plane normalization: patent surfaces 24–25 are    ║
 * ║  a 2.500 mm, nd=1.51680 sensor-side optical plate and are omitted ║
 * ║  from the ordinary lens prescription. Surface 23A therefore uses  ║
 * ║  the paraxially equivalent s23→IMG spacing D3 + 2.5/1.5168 + D4.  ║
 * ║  D5 is not propagated: including it destroys the patent's near    ║
 * ║  imaging/magnification match, so it is retained as source         ║
 * ║  post-IMG/OAL bookkeeping rather than active optical space.       ║
 * ║                                                                    ║
 * ║  Semi-diameters are modeled, not patent-published. They were      ║
 * ║  derived from exact d-line marginal/chief-ray envelopes at both   ║
 * ║  published focus states, checked at the viewer's 0.6-field ray    ║
 * ║  bundle, and cross-checked against patent Fig. 5. Surface 15 was  ║
 * ║  given additional mechanical clearance to preserve the G23 rear    ║
 * ║  silhouette shown in Fig. 5.                                      ║
 * ║                                                                    ║
 * ║  The physical stop diameter is not published. STO.sd is a         ║
 * ║  computed/calibrated modeling value chosen so the infinity        ║
 * ║  paraxial entrance pupil reproduces the patent Fno=1.254.         ║
 * ║                                                                    ║
 * ║  The patent supplies nd/νd only. nC, nF, ng, and dPgF are         ║
 * ║  intentionally omitted rather than inferred from catalog          ║
 * ║  equivalence candidates. Glass labels below are classes/codes,    ║
 * ║  not claims about Samyang's production melts.                     ║
 * ║                                                                    ║
 * ║  Asphere convention: the patent already uses the standard conic   ║
 * ║  constant K in the LensVisualizer sag equation; no conversion.    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * Official product identity/specification sources:
 * https://www.lksamyang.com/en/product/product-view.php?seq=397
 * https://www.lksamyang.com/en/about/notice-view.php?seq=558
 */

// The 2026-09-09 Figure 5 optical-rim audit enlarged the central L7/L8 doublet; rear radii retain ray clearance.
const LENS_DATA = {
  /* ── Identity ── */
  key: "samyang-xp-35mm-f1p2",
  maker: "Samyang",
  name: "SAMYANG XP 35mm f/1.2",
  subtitle: "KR 10-2077265 B1 Example 3 — production-lens correlation inferred from Samyang specifications",
  specs: [
    "12 ELEMENTS / 10 GROUPS",
    "35mm f/1.2 (MARKETED)",
    "COMPUTED EFL 35.961900 mm / F1.254 (PATENT)",
    "2ω = 64.054° (PATENT INFINITY)",
    "2 ASPHERICAL ELEMENTS / 4 ASPHERICAL SURFACES",
    "0.34 m MFD / 0.17× (MARKETED)",
  ],

  focalLengthMarketing: 35,
  focalLengthDesign: 35.96190005986268,
  apertureMarketing: 1.2,
  apertureDesign: 1.254,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "KR 10-2077265 B1",
  patentAuthors: ["Jae Myung Yu", "Hae Jin Lee", "Jung Du Lee", "Moon-Kyung Kim"],
  patentAssignees: ["Samyang Optics Co., Ltd."],
  patentYear: 2020,
  elementCount: 12,
  groupCount: 10,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L13",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -82.917497,
      glass: "847238 — high-index flint class (vendor unspecified)",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L23",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.61,
      fl: -125.127786,
      glass: "497816 — low-dispersion crown class (vendor unspecified)",
      apd: "inferred",
      apdNote: "Samyang’s XP construction marks the second element ED; inferred through the Example 3/product correlation. No patent partial-dispersion measurement or supplier identity is implied.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L33",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.53,
      fl: -59.143577,
      glass: "755275 — dense-flint class (vendor unspecified)",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L43",
      label: "Element 4",
      type: "Plano-Convex Positive",
      nd: 2.001,
      vd: 29.13,
      fl: 72.076923,
      glass: "001291 — very-high-index glass class (vendor unspecified)",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L53",
      label: "Element 5",
      type: "Plano-Convex Positive",
      nd: 1.92286,
      vd: 20.88,
      fl: 106.746419,
      glass: "923209 — dense high-dispersion flint class (vendor unspecified)",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L63",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      fl: 64.670249,
      glass: "835427 — high-index glass class (vendor unspecified)",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L73",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.94,
      fl: 43.428181,
      glass: "713539 — lanthanum crown class (vendor unspecified)",
      cemented: "C1",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L83",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.32,
      fl: -29.46537,
      glass: "728283 — flint class (vendor unspecified)",
      cemented: "C1",
    },
    {
      id: 9,
      name: "L9",
      diagramLabel: "L93",
      label: "Element 9",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.68863,
      vd: 31.19,
      fl: -34.600387,
      glass: "E-FD8 catalog-equivalent (patent coordinates retained; production supplier unspecified)",
    },
    {
      id: 10,
      name: "L10",
      diagramLabel: "L103",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 29.623573,
      glass: "497816 — low-dispersion crown class (vendor unspecified)",
      cemented: "C2",
    },
    {
      id: 11,
      name: "L11",
      diagramLabel: "L113",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.45,
      fl: -36.266196,
      glass: "593354 — flint class (vendor unspecified)",
      cemented: "C2",
    },
    {
      id: 12,
      name: "L12",
      diagramLabel: "L123",
      label: "Element 12",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.85343,
      vd: 40.54,
      fl: 31.658456,
      glass: "L-LAH85V catalog-equivalent (patent coordinates retained; production supplier unspecified)",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 80.62, d: 2.6, nd: 1.84666, elemId: 1, sd: 29.1 },
    { label: "2", R: 36.971, d: 9.613, nd: 1, elemId: 0, sd: 25.6 },
    { label: "3", R: 226.711, d: 2.6, nd: 1.497, elemId: 2, sd: 25 },
    { label: "4", R: 48.616, d: 13.386, nd: 1, elemId: 0, sd: 23.8 },
    { label: "5", R: -52.292, d: 2.6, nd: 1.7552, elemId: 3, sd: 23.5 },
    { label: "6", R: 312.793, d: 1.408, nd: 1, elemId: 0, sd: 25.4 },
    { label: "7", R: 1e15, d: 7.5, nd: 2.001, elemId: 4, sd: 25.7 },
    { label: "8", R: -72.149, d: 0.1, nd: 1, elemId: 0, sd: 26.6 },
    { label: "9", R: 98.512, d: 6, nd: 1.92286, elemId: 5, sd: 28.3 },
    { label: "10", R: 1e15, d: 6.795765, nd: 1, elemId: 0, sd: 28.2 },
    { label: "11", R: 68.013, d: 10, nd: 1.83481, elemId: 6, sd: 27.3 },
    { label: "12", R: -244.282, d: 0.1, nd: 1, elemId: 0, sd: 26.4 },
    { label: "13", R: 68.095, d: 13.21, nd: 1.713, elemId: 7, sd: 26.8 },
    { label: "14", R: -52.201, d: 2.5, nd: 1.72825, elemId: 8, sd: 26.8 },
    { label: "15", R: 37.171, d: 7.732498, nd: 1, elemId: 0, sd: 26.0 },
    { label: "STO", R: 1e15, d: 10.641, nd: 1, elemId: 0, sd: 17.217014504571907 },
    { label: "17A", R: -93.72, d: 2.6, nd: 1.68863, elemId: 9, sd: 14.9 },
    { label: "18A", R: 32.311, d: 0.1, nd: 1, elemId: 0, sd: 16.6 },
    { label: "19", R: 34.334, d: 15.15, nd: 1.497, elemId: 10, sd: 18 },
    { label: "20", R: -22, d: 1.7, nd: 1.5927, elemId: 11, sd: 18 },
    { label: "21", R: 963.293, d: 0.1, nd: 1, elemId: 0, sd: 21.3 },
    { label: "22A", R: 84.314, d: 9.57, nd: 1.85343, elemId: 12, sd: 22 },
    { label: "23A", R: -37.681, d: 38.162369751054854, nd: 1, elemId: 0, sd: 22.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "17A": {
      K: -3.378571,
      A4: -3.752406e-5,
      A6: 1.69201e-7,
      A8: -6.85706e-10,
      A10: 1.390576e-12,
      A12: -1.189133e-15,
      A14: 0,
    },
    "18A": {
      K: -11.59349,
      A4: 1.059712e-5,
      A6: 2.149157e-8,
      A8: -1.09141e-10,
      A10: 1.185565e-13,
      A12: 0,
      A14: 0,
    },
    "22A": {
      K: 3.286256,
      A4: -2.968122e-6,
      A6: -8.169816e-9,
      A8: 3.128738e-11,
      A10: -6.398702e-15,
      A12: -3.487114e-16,
      A14: 1.001273e-18,
      A16: -1.177006e-21,
    },
    "23A": {
      K: -0.4728,
      A4: 1.22411e-6,
      A6: -1.054896e-8,
      A8: 6.441324e-11,
      A10: -2.469135e-13,
      A12: 5.602042e-16,
      A14: -6.187521e-19,
    },
  },

  /* ── Published two-state focus spacings ── */
  var: {
    "10": [6.795765, 1],
    "15": [7.732498, 6.565902],
    "23A": [38.162369751054854, 45.16870875105485],
  },
  varLabels: [
    ["10", "D1 (G13–G23)"],
    ["15", "D2 (G23–STO)"],
    ["23A", "BF (air-equivalent)"],
  ],

  groups: [
    { text: "G13", fromSurface: "1", toSurface: "10" },
    { text: "G23", fromSurface: "11", toSurface: "15" },
    { text: "G33", fromSurface: "17A", toSurface: "23A" },
  ],
  doublets: [
    { text: "C1", fromSurface: "13", toSurface: "15" },
    { text: "C2", fromSurface: "19", toSurface: "21" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3398906537510548,
  focusDescription:
    "Published floating internal focus: G23 and G33 move objectward by 5.796 and 6.962 mm relative to G13. " +
    "G13 is mechanically fixed in the patent. The preserved image-reference spacing adds a 0.044 mm common " +
    "objectward shift in the fixed-image-plane chart. The nearest published state corresponds to about 0.34 m.",

  /* ── Aperture configuration ── */
  nominalFno: 1.254,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 9,

  /* ── Layout tuning ── */
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
