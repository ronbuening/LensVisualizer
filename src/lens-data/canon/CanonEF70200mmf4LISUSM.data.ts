import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — CANON EF 70-200mm f/4 L IS USM
 *
 * Source: JP2008070450A, Example 1 (Canon Inc.; Yoshiyuki Taki).
 * Production correlation: strong inference. The embodiment has the production lens's 20 elements / 15 groups,
 * one fluorite-like element, two S-FPL51-like low-dispersion elements, a transverse negative IS group, full-frame
 * image height, and filing/release timing consistent with Canon's November 2006 EF 70-200mm f/4L IS USM.
 *
 * Prescription: unscaled d-line design. The patent's Example-1 header gives f = 72.11-194.29 mm at Fno. 4.1;
 * the variable-spacing table uses zoom control points 72.11, 134.92, and 194.28 mm. Both tele labels are preserved
 * as a source discrepancy; this data file uses the spacing-table control points and does not scale to marketed 70-200 mm.
 *
 * Zoom: d8, d15, and d18 are the three published infinity-focus variable gaps. L2 moves imageward; L3 reverses
 * direction between the middle and tele states; the stop and L4 relay remain fixed because d8 + d15 + d18 =
 * 46.559 mm at every published zoom state.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. Example 1 identifies L2 as the focus group but publishes no finite-focus
 * spacing state. The production 1.2 m MFD is metadata only. Each zoom gap therefore repeats its infinity value at the
 * close-focus endpoint rather than inventing internal travel.
 *
 * Rear image spacing: the patent omits d36. The data uses a fixed 54.495 mm air spacing from surface 36 to IMG,
 * the source-precision-rounded mean of the independently computed Gaussian BFDs for the three rounded zoom rows
 * (54.492664, 54.493981, 54.498014 mm). A fixed rear spacing preserves the patent's fixed L4 / image-plane architecture
 * instead of encoding a spurious ~0.005 mm zoom motion caused by rounded source values.
 *
 * Stop: source surface 19 is SP. Its diameter is not published. The stop radius is derived from the design f-number
 * (published Fno. 4.1) at the wide state and held at every zoom station. A paraxial stop sized to Fno. 4.1 at the
 * wide state predicts F/4.10005 and F/4.10019 at the middle and tele states from the rounded prescription.
 *
 * Semi-diameters: not published. They were inferred from exact spherical sequential rays using the F/4.1 stop,
 * full-field chief rays for patent Y = 21.6 mm, representative 0.6-field bundles, the patent Fig. 1 optical section,
 * and the production 67 mm filter / 76 mm barrel as outer mechanical bounds. The selected SDs were then checked for
 * positive edge thickness, actual rim slope, shared-band cross-gap intrusion at all three zoom states, on-axis
 * containment, representative off-axis containment, and source-section plausibility. No layout control is used to
 * conceal invalid geometry.
 *
 * Glass: patent nd / vd values are retained. Catalog names are equivalence matches, not patent-stated vendors.
 * E7 remains a vendor-unresolved six-digit class; E11 is catalog-matched to OHARA S-LAH55V (code 835427), with
 * nd exact to the patent's six decimals and a +0.01 vd residual. E3 is fluorite (CaF2) by production/prescription
 * correlation. These are catalog/inference labels, not patent-stated vendor or material identities.
 * The patent publishes no per-material nC, nF, ng, or dPgF. Those fields are intentionally not synthesized; confident
 * names and coordinate classes resolve through the project's Sellmeier catalog at the
 * qualified catalog tier without establishing production supplier identities.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-70-200mm-f4l-is-usm",
  maker: "Canon",
  name: "CANON EF 70-200mm f/4 L IS USM",
  subtitle: "JP2008070450A Example 1 — strong production correlation; unscaled patent prescription",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "20 ELEMENTS / 15 GROUPS",
      "70-200mm f/4 (MARKETED)",
      "72.11-194.28mm f/4.1 (PATENT TABLE)",
      "IMAGE STABILIZATION",
    ],
    elementCount: 20,
    groupCount: 15,
    acceptsTeleconverters: true, // Canon lists Extender EF1.4x / EF2x compatibility
    focalLengthMm: { marketing: [70, 200], design: [72.1075600419814, 194.28371615148652] },
    fNumber: { marketing: 4, design: 4.1 },
  },

  source: {
    patentNumber: "JP 2008-070450 A",
    patentYear: 2008,
    authors: ["Yoshiyuki Taki"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L1-1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.23,
      focalLengthMm: 404.506962,
      glass: "S-FSL5 (OHARA) coordinate-compatible surrogate; supplier unspecified",
      role: "Front positive collector in L1.",
    },
    {
      id: 2,
      name: "L1-2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.698947,
      vd: 30.13,
      focalLengthMm: -200.876714,
      glass: "S-TIM35 (OHARA) coordinate-compatible surrogate; supplier unspecified",
      role: "Negative member of the fixed front group L1.",
    },
    {
      id: 3,
      name: "L1-3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: 168.147687,
      glass: "Fluorite (CaF2), inferred",
      apd: "inferred",
      apdNote:
        "Fluorite element inferred from Canon production correlation and compatible catalog dispersion; the patent publishes no partial-dispersion measurement or supplier identity.",
      role: "Fluorite-like low-dispersion positive member in L1.",
    },
    {
      id: 4,
      name: "L1-4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.54,
      focalLengthMm: 142.137286,
      glass: "S-FPL51 (OHARA) coordinate-compatible surrogate; supplier unspecified",
      apd: "inferred",
      apdNote:
        "UD element inferred from Canon production correlation and compatible catalog dispersion; the patent publishes no partial-dispersion measurement or supplier identity.",
      role: "Low-dispersion positive rear member of L1.",
    },
    {
      id: 5,
      name: "L2-1",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.57,
      focalLengthMm: -41.26671,
      glass: "S-LAH65 (OHARA) coordinate-compatible surrogate; supplier unspecified",
      role: "Leading negative element of the L2 zoom/focus group.",
    },
    {
      id: 6,
      name: "L2-2",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.51633,
      vd: 64.14,
      focalLengthMm: -48.837529,
      glass: "S-BSL7 (OHARA) coordinate-compatible surrogate; supplier unspecified",
      role: "Negative component of the cemented pair in L2.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L2-3",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.93,
      focalLengthMm: 42.718657,
      glass: "847239 — high-index flint class (vendor unresolved)",
      role: "Positive high-index partner in the L2 cemented pair.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L2-4",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.800999,
      vd: 34.97,
      focalLengthMm: -110.763788,
      glass: "S-LAM66 (OHARA) coordinate-compatible surrogate; supplier unspecified",
      role: "Rear negative member of L2.",
    },
    {
      id: 9,
      name: "L3-1",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.603112,
      vd: 60.64,
      focalLengthMm: 42.290567,
      glass: "S-BSM14 (OHARA) coordinate-compatible surrogate; supplier unspecified",
      role: "Positive component of the L3 cemented doublet.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L3-2",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.749497,
      vd: 35.3,
      focalLengthMm: -71.292856,
      glass: "S-LAM7 (OHARA) coordinate-compatible surrogate; supplier unspecified",
      role: "Negative component of the positive-power L3 doublet.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "Gf-1",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.834807,
      vd: 42.72,
      focalLengthMm: 61.606667,
      glass: "S-LAH55V (OHARA) coordinate-compatible surrogate; supplier unspecified",
      role: "Front positive element of fixed relay subgroup Gf.",
    },
    {
      id: 12,
      name: "Gf-2",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.749497,
      vd: 35.3,
      focalLengthMm: -40.154438,
      glass: "S-LAM7 (OHARA) coordinate-compatible surrogate; supplier unspecified",
      role: "Negative component of the Gf cemented pair.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "Gf-3",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.496999,
      vd: 81.54,
      focalLengthMm: 44.703071,
      glass: "S-FPL51 (OHARA) coordinate-compatible surrogate; supplier unspecified",
      apd: "inferred",
      apdNote:
        "UD element inferred from Canon production correlation and compatible catalog dispersion; the patent publishes no partial-dispersion measurement or supplier identity.",
      role: "Low-dispersion positive partner closing Gf.",
      cemented: "D3",
    },
    {
      id: 14,
      name: "Gm-1",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.16,
      focalLengthMm: 30.40008,
      glass: "S-LAH60 (OHARA) coordinate-compatible surrogate; supplier unspecified",
      role: "Positive component of the transversely movable IS subgroup Gm.",
      cemented: "D4",
    },
    {
      id: 15,
      name: "Gm-2",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.696797,
      vd: 55.53,
      focalLengthMm: -32.047962,
      glass: "S-LAL14 (OHARA) coordinate-compatible surrogate; supplier unspecified",
      role: "Negative component of the Gm cemented pair.",
      cemented: "D4",
    },
    {
      id: 16,
      name: "Gm-3",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.712995,
      vd: 53.87,
      focalLengthMm: -38.136219,
      glass: "S-LAL8 (OHARA) coordinate-compatible surrogate; supplier unspecified",
      role: "Rear negative member of the net-negative image-stabilization subgroup Gm.",
    },
    {
      id: 17,
      name: "Gr-1",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.23,
      focalLengthMm: 132.360837,
      glass: "S-FSL5 (OHARA) coordinate-compatible surrogate; supplier unspecified",
      role: "Front positive element of fixed rear relay subgroup Gr.",
    },
    {
      id: 18,
      name: "Gr-2",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.23,
      focalLengthMm: 40.029132,
      glass: "S-FSL5 (OHARA) coordinate-compatible surrogate; supplier unspecified",
      role: "Positive component of the Gr cemented pair.",
      cemented: "D5",
    },
    {
      id: 19,
      name: "Gr-3",
      label: "Element 19",
      type: "Negative Meniscus",
      nd: 1.806098,
      vd: 40.92,
      focalLengthMm: -44.309738,
      glass: "S-LAH53 (OHARA) coordinate-compatible surrogate; supplier unspecified",
      role: "Negative component of the Gr cemented pair.",
      cemented: "D5",
    },
    {
      id: 20,
      name: "Gr-4",
      label: "Element 20",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.16,
      focalLengthMm: 164.968928,
      glass: "S-LAH60 (OHARA) coordinate-compatible surrogate; supplier unspecified",
      role: "Final positive relay element before the image space.",
    },
  ],

  surfaces: [
    { label: "1", R: 154.341, d: 3.1, sd: 27.0, medium: 1 },
    { label: "2", R: 705.558, d: 12.82, sd: 26.8 },
    { label: "3", R: 105.33, d: 2.1, sd: 24.5, medium: 2 },
    { label: "4", R: 59.688, d: 0.08, sd: 22.8 },
    { label: "5", R: 60.522, d: 5.53, sd: 22.8, medium: 3 },
    { label: "6", R: 345.333, d: 0.15, sd: 22.6 },
    { label: "7", R: 74.914, d: 5.03, sd: 22.5, medium: 4 },
    { label: "8", R: -1211.194, sd: 22.2 },
    { label: "9", R: -256.017, d: 1.2, sd: 13.4, medium: 5 },
    { label: "10", R: 38.198, d: 4.33, sd: 13.1 },
    { label: "11", R: -63.838, d: 1.25, sd: 13.0, medium: 6 },
    { label: "12", R: 41.958, d: 3.77, sd: 13.08, medium: 7 },
    { label: "13", R: -251.308, d: 1.01, sd: 13.08 },
    { label: "14", R: -69.373, d: 1.25, sd: 13.08, medium: 8 },
    { label: "15", R: -320.653, sd: 13.4 },
    { label: "16", R: 168.691, d: 5.9, sd: 14.1, medium: 9 },
    { label: "17", R: -29.654, d: 1.4, sd: 14.2, medium: 10 },
    { label: "18", R: -67.981, sd: 14.4 },
    { label: "STO", R: "flat", d: 0.34 },
    { label: "20", R: 33.663, d: 3.94, sd: 14.5, medium: 11 },
    { label: "21", R: 92.256, d: 2.5, sd: 14.2 },
    { label: "22", R: 57.192, d: 2.16, sd: 13.7, medium: 12 },
    { label: "23", R: 19.4, d: 6.2, sd: 13.2, medium: 13 },
    { label: "24", R: 136.753, d: 10.83, sd: 12.8 },
    { label: "25", R: 93.769, d: 4.5, sd: 12.8, medium: 14 },
    { label: "26", R: -33.991, d: 1.2, sd: 12.8, medium: 15 },
    { label: "27", R: 66.042, d: 1.98, sd: 11.1 },
    { label: "28", R: -75.562, d: 1.3, sd: 11.1, medium: 16 },
    { label: "29", R: 42.78, d: 3.56, sd: 12.5 },
    { label: "30", R: 207.397, d: 2.55, sd: 13.4, medium: 17 },
    { label: "31", R: -93.288, d: 1.13, sd: 13.4 },
    { label: "32", R: 121.545, d: 7.72, sd: 15, medium: 18 },
    { label: "33", R: -22.762, d: 2.04, sd: 15, medium: 19 },
    { label: "34", R: -65.262, d: 8.73, sd: 15 },
    { label: "35", R: 75.123, d: 2.81, sd: 18, medium: 20 },
    { label: "36", R: 162.66, d: 54.495, sd: 18 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 72.11, label: "Wide" },
      { focalLengthMm: 134.92 },
      { focalLengthMm: 194.28, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 1.2,
    description:
      "NO_INTERNAL_RECONSTRUCTION: JP2008070450A Example 1 identifies L2 (surfaces 9-15) as the focus group but publishes no finite-focus spacing state. The data preserves only the three published infinity zoom states; 1.2 m is Canon production metadata and the zoom gaps repeat their infinity values at the close-focus endpoint.",
  },

  gaps: {
    "8": {
      label: "D8",
      values: [
        [2.379, 2.379],
        [27.438, 27.438],
        [36.489, 36.489],
      ],
    },
    "15": {
      label: "D15",
      values: [
        [33.173, 33.173],
        [16.927, 16.927],
        [1.022, 1.022],
      ],
    },
    "18": {
      label: "D18",
      values: [
        [11.007, 11.007],
        [2.194, 2.194],
        [9.048, 9.048],
      ],
    },
  },

  aperture: { nominalFNumber: 4.1, fStops: [4.1, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "8" },
    { text: "L2 (- / FOCUS)", fromSurface: "9", toSurface: "15" },
    { text: "L3 (+)", fromSurface: "16", toSurface: "18" },
    { text: "Gf (+)", fromSurface: "20", toSurface: "24" },
    { text: "Gm IS (-)", fromSurface: "25", toSurface: "29" },
    { text: "Gr (+)", fromSurface: "30", toSurface: "36" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "16", toSurface: "18" },
    { text: "D3", fromSurface: "22", toSurface: "24" },
    { text: "D4", fromSurface: "25", toSurface: "27" },
    { text: "D5", fromSurface: "32", toSurface: "34" },
  ],

  layout: { yScFill: 0.38 },
} satisfies LensDataV2Input;

export default LENS_DATA;
