import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  focus reconstruction is authored. closeFocusM is the physical    ║
 * ║  object-to-image distance: patent near D0 = 175.678043 mm plus    ║
 * ║  the physical track to the D3 + plate + D4 image plane.           ║
 * ║                                                                   ║
 * ║  Rear optical plate: patent surfaces 24–25 are a 2.500 mm,        ║
 * ║  nd 1.51680 / νd 64.20 sensor-side plate, modeled in `rearPlates` ║
 * ║  (traced, not drawn). Surface 23A keeps the patent D3 to the      ║
 * ║  plate; the infinity D4 = 0.528568 mm is the plate-to-IMG gap.    ║
 * ║  The close D4 = 0.562472 mm (+0.033904) is carried in the 23A     ║
 * ║  close gap: 42.958030 + 0.033904 = 42.991934 mm, so the printed   ║
 * ║  23A→IMG path is kept and the plate shifts only 0.034 mm.         ║
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
 * ║  The physical stop diameter is not published. The stop radius is  ║
 * ║  derived from the design f-number Fno=1.254 at infinity.          ║
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
  schema: 2,
  key: "samyang-xp-35mm-f1p2",
  maker: "Samyang",
  name: "SAMYANG XP 35mm f/1.2",
  subtitle: "KR 10-2077265 B1 Example 3 — production-lens correlation inferred from Samyang specifications",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "12 ELEMENTS / 10 GROUPS",
      "35mm f/1.2 (MARKETED)",
      "COMPUTED EFL 35.961900 mm / F1.254 (PATENT)",
      "2ω = 64.054° (PATENT INFINITY)",
      "2 ASPHERICAL ELEMENTS / 4 ASPHERICAL SURFACES",
      "0.34 m MFD / 0.17× (MARKETED)",
    ],
    elementCount: 12,
    groupCount: 10,
    focalLengthMm: { marketing: 35, design: 35.96190005986268 },
    fNumber: { marketing: 1.2, design: 1.254 },
  },

  source: {
    patentNumber: "KR 10-2077265 B1",
    patentYear: 2020,
    authors: ["Jae Myung Yu", "Hae Jin Lee", "Jung Du Lee", "Moon-Kyung Kim"],
    assignees: ["Samyang Optics Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -82.917497,
      glass: "847238 — high-index flint class (vendor unspecified)",
      diagramLabel: "L13",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: -125.127786,
      glass: "497816 — low-dispersion crown class (vendor unspecified)",
      apd: "inferred",
      apdNote:
        "Samyang’s XP construction marks the second element ED; inferred through the Example 3/product correlation. No patent partial-dispersion measurement or supplier identity is implied.",
      diagramLabel: "L23",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.53,
      focalLengthMm: -59.143577,
      glass: "755275 — dense-flint class (vendor unspecified)",
      diagramLabel: "L33",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Convex Positive",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: 72.076923,
      glass: "001291 — very-high-index glass class (vendor unspecified)",
      diagramLabel: "L43",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Convex Positive",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: 106.746419,
      glass: "923209 — dense high-dispersion flint class (vendor unspecified)",
      diagramLabel: "L53",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: 64.670249,
      glass: "835427 — high-index glass class (vendor unspecified)",
      diagramLabel: "L63",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.94,
      focalLengthMm: 43.428181,
      glass: "713539 — lanthanum crown class (vendor unspecified)",
      diagramLabel: "L73",
      cemented: "C1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.32,
      focalLengthMm: -29.46537,
      glass: "728283 — flint class (vendor unspecified)",
      diagramLabel: "L83",
      cemented: "C1",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.68863,
      vd: 31.19,
      focalLengthMm: -34.600387,
      glass: "E-FD8 catalog-equivalent (patent coordinates retained; production supplier unspecified)",
      diagramLabel: "L93",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 29.623573,
      glass: "497816 — low-dispersion crown class (vendor unspecified)",
      diagramLabel: "L103",
      cemented: "C2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.45,
      focalLengthMm: -36.266196,
      glass: "593354 — flint class (vendor unspecified)",
      diagramLabel: "L113",
      cemented: "C2",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.85343,
      vd: 40.54,
      focalLengthMm: 31.658456,
      glass: "L-LAH85V catalog-equivalent (patent coordinates retained; production supplier unspecified)",
      diagramLabel: "L123",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 80.62, d: 2.6, sd: 29.1, medium: 1 },
    { label: "2", R: 36.971, d: 9.613, sd: 25.6 },
    { label: "3", R: 226.711, d: 2.6, sd: 25, medium: 2 },
    { label: "4", R: 48.616, d: 13.386, sd: 23.8 },
    { label: "5", R: -52.292, d: 2.6, sd: 23.5, medium: 3 },
    { label: "6", R: 312.793, d: 1.408, sd: 25.4 },
    { label: "7", R: "flat", d: 7.5, sd: 25.7, medium: 4 },
    { label: "8", R: -72.149, d: 0.1, sd: 26.6 },
    { label: "9", R: 98.512, d: 6, sd: 28.3, medium: 5 },
    { label: "10", R: "flat", sd: 28.2 },
    { label: "11", R: 68.013, d: 10, sd: 27.3, medium: 6 },
    { label: "12", R: -244.282, d: 0.1, sd: 26.4 },
    { label: "13", R: 68.095, d: 13.21, sd: 26.8, medium: 7 },
    { label: "14", R: -52.201, d: 2.5, sd: 26.8, medium: 8 },
    { label: "15", R: 37.171, sd: 26.0 },
    { label: "STO", R: "flat", d: 10.641 },
    {
      label: "17A",
      R: -93.72,
      d: 2.6,
      sd: 14.9,
      medium: 9,
      asphere: {
        K: -3.378571,
        A4: -3.752406e-5,
        A6: 1.69201e-7,
        A8: -6.85706e-10,
        A10: 1.390576e-12,
        A12: -1.189133e-15,
        A14: 0,
      },
    },
    {
      label: "18A",
      R: 32.311,
      d: 0.1,
      sd: 16.6,
      asphere: { K: -11.59349, A4: 1.059712e-5, A6: 2.149157e-8, A8: -1.09141e-10, A10: 1.185565e-13, A12: 0, A14: 0 },
    },
    { label: "19", R: 34.334, d: 15.15, sd: 18, medium: 10 },
    { label: "20", R: -22, d: 1.7, sd: 18, medium: 11 },
    { label: "21", R: 963.293, d: 0.1, sd: 21.3 },
    {
      label: "22A",
      R: 84.314,
      d: 9.57,
      sd: 22,
      medium: 12,
      asphere: {
        K: 3.286256,
        A4: -2.968122e-6,
        A6: -8.169816e-9,
        A8: 3.128738e-11,
        A10: -6.398702e-15,
        A12: -3.487114e-16,
        A14: 1.001273e-18,
        A16: -1.177006e-21,
      },
    },
    {
      label: "23A",
      R: -37.681,
      sd: 22.5,
      asphere: {
        K: -0.4728,
        A4: 1.22411e-6,
        A6: -1.054896e-8,
        A8: 6.441324e-11,
        A10: -2.469135e-13,
        A12: 5.602042e-16,
        A14: -6.187521e-19,
      },
    },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.340742447,
    description:
      "Published floating internal focus: G23 and G33 move objectward by 5.796 and 6.962 mm relative to G13. " +
      "G13 is mechanically fixed in the patent. The preserved image-reference spacing adds a 0.044 mm common " +
      "objectward shift in the fixed-image-plane chart. The nearest published state corresponds to about 0.34 m.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Published two-state focus spacings ── */
  gaps: {
    "10": { label: "D1 (G13–G23)", values: [[6.795765, 1]] },
    "15": { label: "D2 (G23–STO)", values: [[7.732498, 6.565902]] },
    "23A": { label: "D3 (L12–plate)", values: [[35.985595, 42.991934]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.254, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 9 },

  /* ── Sensor-side optical plate (patent surfaces 24–25): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 2.5,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 0.528568,
      source: "KR 10-2077265 B1, Example 3 (Table 7 surfaces 24–25; Table 9 D4 at infinity)",
    },
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

  /* ── Layout tuning ── */
  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
