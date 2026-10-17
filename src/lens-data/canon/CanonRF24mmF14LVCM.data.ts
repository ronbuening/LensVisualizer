import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON RF 24mm f/1.4 L VCM                                  ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP 2025-15010 A, Numerical Example 3.                          ║
 * ║  Correlation target: production Canon RF24mm F1.4 L VCM.                ║
 * ║  Patent model: 15 elements / 11 air-separated components, grouped into  ║
 * ║  five functional lens groups; 2 aspherical surfaces; no scaling.        ║
 * ║                                                                            ║
 * ║  Focus status: PUBLISHED. L2 moves imageward and L4 moves objectward.    ║
 * ║  The source publishes four focus rows:                                   ║
 * ║    β=0.00:   d9=1.20, d11=8.91, d15=6.78, d22=1.85 mm                  ║
 * ║    β=-0.022: d9=1.69, d11=8.41, d15=6.40, d22=2.23 mm                  ║
 * ║    β=-0.10:  d9=3.37, d11=6.73, d15=5.08, d22=3.55 mm                  ║
 * ║    β=-0.17:  d9=4.82, d11=5.28, d15=3.91, d22=4.73 mm                  ║
 * ║  All four published rows are stored as exact focus keyframes. Motion    ║
 * ║  between them is piecewise-linear visualization.                        ║
 * ║                                                                            ║
 * ║  The patent prints f=24.72 mm and Fno=1.46. The rounded prescription     ║
 * ║  independently computes EFL=24.713123 mm at infinity. Marketing remains ║
 * ║  separate at 24 mm / f/1.4. nominalFno=1.46 controls pupil geometry.     ║
 * ║                                                                            ║
 * ║  Patent GB surfaces 28-29 are a separate optical block/filter equivalent ║
 * ║  and are excluded. Their optical effect is normalized to a 15.18 mm      ║
 * ║  air-equivalent spacing from surface 27 to IMG, preserving patent BF/TL. ║
 * ║                                                                            ║
 * ║  Semi-diameters are modeling values, not patent clear apertures. The     ║
 * ║  patent publishes none. They were derived from the patent Fig. 5 section ║
 * ║  and calibrated stop/pupil geometry, then checked with exact meridional  ║
 * ║  ray envelopes in all four published focus states plus edge thickness,   ║
 * ║  actual rim slope, shared-gap intrusion, conic limits, and render-trim   ║
 * ║  proxies. A 600 dpi Figure 5 audit refined the cemented E9/E10 rim from  ║
 * ║  13.5 to 11.7 mm. The stop radius is derived from the design f-number    ║
 * ║  (F/1.46) and is therefore inferred rather than independently published. ║
 * ║                                                                            ║
 * ║  Glass note: the patent supplies nd and νd only. All 15 elements use    ║
 * ║  coordinate-compatible catalog-equivalent Sellmeier curves, with labels ║
 * ║  explicitly preserving unresolved production suppliers. No patent       ║
 * ║  nC/nF/ng/dPgF values are invented.                                      ║
 * ║                                                                            ║
 * ║  The patent permits optional lateral L3 stabilization, but Canon lists   ║
 * ║  optical IS as not provided on the production lens. No IS motion is      ║
 * ║  authored. Patent Table 1's BF/f=0.47 is retained only in the audit;     ║
 * ║  published BF/f=15.18/24.72=0.61408.                                    ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf-24mm-f14-l-vcm",
  maker: "Canon",
  name: "CANON RF 24mm f/1.4 L VCM",
  subtitle: "JP 2025-15010 A — Numerical Example 3; production correlation to RF24mm F1.4 L VCM",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "15 ELEMENTS / 11 GROUPS",
      "24mm f/1.4 (MARKETED)",
      "EXAMPLE 3: 24.72mm f/1.46",
      "2 ASPHERICAL SURFACES",
      "PUBLISHED TWO-GROUP INTERNAL FOCUS",
    ],
    elementCount: 15,
    groupCount: 11,
    focalLengthMm: { marketing: 24, design: 24.713123 },
    fNumber: { marketing: 1.4, design: 1.46 },
  },

  source: {
    patentNumber: "JP 2025-15010 A",
    patentYear: 2025,
    authors: ["Kenji Shinohara", "Yuki Matsuba"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.59349,
      vd: 67.0,
      focalLengthMm: -52.148246,
      glass: "J-PSKH4 catalog equivalent (patent 593670; production supplier unspecified)",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.54814,
      vd: 45.8,
      focalLengthMm: -35.631525,
      glass: "LLF1 catalog equivalent (patent 548458; production supplier unspecified)",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.76385,
      vd: 48.5,
      focalLengthMm: 24.869542,
      glass: "S-LAH96 catalog equivalent (patent 764485; production supplier unspecified)",
      cemented: "D1",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: -57.252937,
      glass: "S-NBH56 catalog equivalent (patent 855248; production supplier unspecified)",
      cemented: "D1",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 2.00069,
      vd: 25.5,
      focalLengthMm: 43.795312,
      glass: "TAFD40L-W catalog equivalent (patent 001255; production supplier unspecified)",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.3,
      focalLengthMm: -167.877978,
      glass: "E-F2 catalog equivalent (patent 620363; production supplier unspecified)",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.76385,
      vd: 48.5,
      focalLengthMm: 27.259062,
      glass: "S-LAH96 catalog equivalent (patent 764485; production supplier unspecified)",
      cemented: "D2",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.72047,
      vd: 34.7,
      focalLengthMm: -33.678789,
      glass: "N-KZFS8 catalog equivalent (patent 720347; production supplier unspecified)",
      cemented: "D2",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 55.175782,
      glass: "H-FK61 catalog equivalent (patent 497816; production supplier unspecified)",
      apd: "inferred",
      apdNote: "First of the two patent 1.497/81.5 elements correlated with Canon's published two-UD production count.",
      role: "First product-correlated UD element in the moving positive L4 group.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.7,
      focalLengthMm: -20.214523,
      glass: "NBFD29 catalog equivalent (patent 770297; production supplier unspecified)",
      cemented: "D3",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 39.737184,
      glass: "H-FK61 catalog equivalent (patent 497816; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Second of the two patent 1.497/81.5 elements correlated with Canon's published two-UD production count.",
      role: "Second product-correlated UD element in the moving positive L4 group.",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.804,
      vd: 46.5,
      focalLengthMm: 37.876794,
      glass: "TAF3D catalog equivalent (patent 804465; production supplier unspecified)",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.9,
      focalLengthMm: 53.875285,
      glass: "N-SF66 catalog equivalent (patent 923209; production supplier unspecified)",
      cemented: "D4",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.7,
      focalLengthMm: -36.93535,
      glass: "NBFD29 catalog equivalent (patent 770297; production supplier unspecified)",
      cemented: "D4",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.65412,
      vd: 39.7,
      focalLengthMm: -170.525195,
      glass: "N-KZFS5 catalog equivalent (patent 654397; production supplier unspecified)",
    },
  ],

  /* ── Surfaces, object to image ── */
  /* (moved from asph) ── Aspheres: standard LensVisualizer K convention; K=0 is spherical base ── */
  surfaces: [
    { label: "1", R: 72.288, d: 1.3, sd: 19.1, medium: 1 },
    { label: "2", R: 21.526, d: 13.44, sd: 19.1 },
    { label: "3", R: -29.716, d: 1.22, sd: 15.5, medium: 2 },
    { label: "4", R: 57.813, d: 3.61, sd: 15.5 },
    { label: "5", R: 84.776, d: 10.56, sd: 16.0, medium: 3 },
    { label: "6", R: -23.162, d: 1.3, sd: 16.0, medium: 4 },
    { label: "7", R: -45.112, d: 0.19, sd: 16.0 },
    { label: "8", R: 60.45, d: 4.94, sd: 16.0, medium: 5 },
    { label: "9", R: -152.845, sd: 16.0 },
    { label: "10", R: 147.08, d: 1.49, sd: 15.4, medium: 6 },
    { label: "11", R: 60.717, sd: 15.4 },
    { label: "STO", R: "flat", d: 1.99 },
    { label: "13", R: 1242.125, d: 7.29, sd: 13.5, medium: 7 },
    { label: "14", R: -21.123, d: 1.09, sd: 13.5, medium: 8 },
    { label: "15", R: -166.674, sd: 13.5 },
    { label: "16", R: -33.613, d: 5.21, sd: 11.7, medium: 9 },
    { label: "17", R: -15.879, d: 1.0, sd: 11.7, medium: 10 },
    { label: "18", R: 834.948, d: 1.99, sd: 11.7 },
    { label: "19", R: 49.688, d: 8.75, sd: 17.1, medium: 11 },
    { label: "20", R: -30.861, d: 0.2, sd: 17.1 },
    {
      label: "21A",
      R: 80.138,
      d: 7.0,
      sd: 17.2,
      medium: 12,
      asphere: { K: 0, A4: -7.6813e-6, A6: -9.12882e-10, A8: 2.65012e-11, A10: -7.89662e-14, A12: 1.31928e-16, A14: 0 },
    },
    {
      label: "22A",
      R: -47.206,
      sd: 17.2,
      asphere: { K: 0, A4: 4.42473e-6, A6: -2.12367e-9, A8: 3.53558e-11, A10: -6.57718e-14, A12: 1.35297e-16, A14: 0 },
    },
    { label: "23", R: 130.745, d: 4.3, sd: 16.5, medium: 13 },
    { label: "24", R: -78.962, d: 1.25, sd: 16.5, medium: 14 },
    { label: "25", R: 44.799, d: 4.93, sd: 15.6 },
    { label: "26", R: -80.385, d: 1.2, sd: 15.6, medium: 15 },
    { label: "27", R: -289.464, d: 15.18, sd: 15.6 },
  ],

  focus: {
    closeFocusM: 0.24,
    /* ── Published focus keyframes ── */
    keyframes: [0, 0.20297806853366232, 0.7062890432451783, 1],
    description:
      "PUBLISHED — L2 moves imageward and L4 moves objectward. The infinity, β=-0.022, β=-0.10, and β=-0.17 patent rows are exact focus keyframes.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2, 3],
  },

  gaps: {
    "9": { label: "D9", values: [[1.2, 1.69, 3.37, 4.82]] },
    "11": { label: "D11", values: [[8.91, 8.41, 6.73, 5.28]] },
    "15": { label: "D15", values: [[6.78, 6.4, 5.08, 3.91]] },
    "22A": { label: "D22", values: [[1.85, 2.23, 3.55, 4.73]] },
  },

  aperture: { nominalFNumber: 1.46, fStops: [1.46, 2, 2.8, 4, 5.6, 8, 11, 16] },

  /* ── Patent functional groups and cemented components ── */
  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "9" },
    { text: "L2 (-) IMAGEWARD FOCUS", fromSurface: "10", toSurface: "11" },
    { text: "L3 (+)", fromSurface: "STO", toSurface: "15" },
    { text: "L4 (+) OBJECTWARD FOCUS", fromSurface: "16", toSurface: "22A" },
    { text: "L5 (-)", fromSurface: "23", toSurface: "27" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
  ],

  layout: { scFill: 0.58, yScFill: 0.62 },
} satisfies LensDataV2Input;

export default LENS_DATA;
