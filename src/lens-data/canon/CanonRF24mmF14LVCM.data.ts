import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP2025015010A, Numerical Example3 ¶0089 PDFpp15–16; Fig5/6 PDFp27.
 * Original shape/glass review2026-10-30, retaining historical Aug20 dates.
 * Native423ppi figures; earlier600dpi measurements are ~1.42× upsampling.
 * All active lens R/d,15 source nd/vd pairs, aspheres, stop and four source
 * focus rows retained. Catalog design24.72 is printed, computedEFL24.713123 separate.
 * Camera-side GB sourceS28–29 restored through rearPlates: D27=13.52,t1mm,
 * nd1.51633/vd64.1,air1mm. Source printed BF15.18 is rounded air-equivalent;
 * physical image plane118.51 is .34mm behind the old rounded fold118.17.
 * All16 media have explicit d provenance;16 compatible curves are qualified
 * proxies, not historical supplier/melt/chemistry. No numerical C/F/g/partials
 * published or invented; Table1 nu4p81.54 is an Abbe aggregate, not partial dispersion.
 * S2 clear cap16.0/outer19.1 follows the resolved native shoulder.
 * D3 S16–18 common12.2 is a modeled finite-beam floor, not a measured patent
 * dimension: old native reference~11.67 (current estimate11.4–11.7,±.16–.24mm).
 * The literal source near beta row reproduces-.17 within its print bin; at
 * unchanged canonical iris it reachesS18=12.133954, clipping old11.7.
 * No R/d, iris, guard or cam fitted.67focus samples include4 source rows;
 * collimated geometry census and Gaussian finite-object supplement are separate.
 * Both pass axial/chiefs after the inferred rim raise, with0 hidden trim.
 * Source far beta print-bin, field/plot and BF/f contradictions remain unresolved;
 * generic full-frame field reaches~89%, optical IS unmodeled, production correlation inferred.
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
    focalLengthMm: { marketing: 24, design: 24.72 },
    fNumber: { marketing: 1.4, design: 1.46 },
  },

  source: {
    patentNumber: "JP 2025-15010 A",
    example: { label: "Numerical Example 3", id: "3" },
    patentYear: 2025,
    authors: ["Kenji Shinohara", "Yuki Matsuba"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "JP2025015010A Table1 PDFp22 Example3 prints BF/f=.47, versus numerical table p15 BF15.18/f24.72=.61408 and literal plate's reduced rear distance15.179487mm. Original physical plate/gaps retained; source ratio discrepancy has no uniquely established numerical replacement in the original.",
      },
      {
        status: "unresolved",
        note: "JP2025015010A Example3 p15 prints field37.14°, Fig6A/B PDFp27 labels omega37.6°. Native Fig6A distortion reads about−13.2±.4%, while literal modeled d-chief at37.6° gives−10.94%. Source R/d/aspheres/materials retained; field convention/plot correlation is unresolved, no fit.",
      },
      {
        status: "unresolved",
        note: "JP2025015010A p15 far focus beta−.022 gives modeled Gaussian−.0226777 from literal spacings and physical GB, outside its±.0005 print bin. Middle−.1004845 and near−.1707554 remain inside printed−.10/−.17±.005 bins. No object-distance plane is published; inferred conjugates and source beta labels stay distinct, with no spacing/cam correction.",
      },
    ],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.59349,
      indexReference: "d",
      indexReferenceNote:
        "JP2025015010A ¶0082 PDFp12 defines nd at d587.6nm and vd using F486.1/C656.3nm; source also names g435.8nm, without numerical C/F/g/partial data.",
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
      indexReference: "d",
      indexReferenceNote:
        "JP2025015010A ¶0082 PDFp12 defines nd at d587.6nm and vd using F486.1/C656.3nm; source also names g435.8nm, without numerical C/F/g/partial data.",
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
      indexReference: "d",
      indexReferenceNote:
        "JP2025015010A ¶0082 PDFp12 defines nd at d587.6nm and vd using F486.1/C656.3nm; source also names g435.8nm, without numerical C/F/g/partial data.",
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
      indexReference: "d",
      indexReferenceNote:
        "JP2025015010A ¶0082 PDFp12 defines nd at d587.6nm and vd using F486.1/C656.3nm; source also names g435.8nm, without numerical C/F/g/partial data.",
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
      indexReference: "d",
      indexReferenceNote:
        "JP2025015010A ¶0082 PDFp12 defines nd at d587.6nm and vd using F486.1/C656.3nm; source also names g435.8nm, without numerical C/F/g/partial data.",
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
      indexReference: "d",
      indexReferenceNote:
        "JP2025015010A ¶0082 PDFp12 defines nd at d587.6nm and vd using F486.1/C656.3nm; source also names g435.8nm, without numerical C/F/g/partial data.",
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
      indexReference: "d",
      indexReferenceNote:
        "JP2025015010A ¶0082 PDFp12 defines nd at d587.6nm and vd using F486.1/C656.3nm; source also names g435.8nm, without numerical C/F/g/partial data.",
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
      indexReference: "d",
      indexReferenceNote:
        "JP2025015010A ¶0082 PDFp12 defines nd at d587.6nm and vd using F486.1/C656.3nm; source also names g435.8nm, without numerical C/F/g/partial data.",
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
      indexReference: "d",
      indexReferenceNote:
        "JP2025015010A ¶0082 PDFp12 defines nd at d587.6nm and vd using F486.1/C656.3nm; source also names g435.8nm, without numerical C/F/g/partial data.",
      vd: 81.5,
      focalLengthMm: 55.175782,
      glass: "H-FK61 catalog equivalent (source 497815, compatible catalog 497816; production supplier unspecified)",
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
      indexReference: "d",
      indexReferenceNote:
        "JP2025015010A ¶0082 PDFp12 defines nd at d587.6nm and vd using F486.1/C656.3nm; source also names g435.8nm, without numerical C/F/g/partial data.",
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
      indexReference: "d",
      indexReferenceNote:
        "JP2025015010A ¶0082 PDFp12 defines nd at d587.6nm and vd using F486.1/C656.3nm; source also names g435.8nm, without numerical C/F/g/partial data.",
      vd: 81.5,
      focalLengthMm: 39.737184,
      glass: "H-FK61 catalog equivalent (source 497815, compatible catalog 497816; production supplier unspecified)",
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
      indexReference: "d",
      indexReferenceNote:
        "JP2025015010A ¶0082 PDFp12 defines nd at d587.6nm and vd using F486.1/C656.3nm; source also names g435.8nm, without numerical C/F/g/partial data.",
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
      indexReference: "d",
      indexReferenceNote:
        "JP2025015010A ¶0082 PDFp12 defines nd at d587.6nm and vd using F486.1/C656.3nm; source also names g435.8nm, without numerical C/F/g/partial data.",
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
      indexReference: "d",
      indexReferenceNote:
        "JP2025015010A ¶0082 PDFp12 defines nd at d587.6nm and vd using F486.1/C656.3nm; source also names g435.8nm, without numerical C/F/g/partial data.",
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
      indexReference: "d",
      indexReferenceNote:
        "JP2025015010A ¶0082 PDFp12 defines nd at d587.6nm and vd using F486.1/C656.3nm; source also names g435.8nm, without numerical C/F/g/partial data.",
      vd: 39.7,
      focalLengthMm: -170.525195,
      glass: "N-KZFS5 catalog equivalent (patent 654397; production supplier unspecified)",
    },
  ],

  /* ── Surfaces, object to image ── */
  /* (moved from asph) ── Aspheres: standard LensVisualizer K convention; K=0 is spherical base ── */
  surfaces: [
    { label: "1", R: 72.288, d: 1.3, sd: 19.1, medium: 1 },
    { label: "2", R: 21.526, d: 13.44, sd: 16, rimExtensionSd: 19.1 },
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
    { label: "16", R: -33.613, d: 5.21, sd: 12.2, medium: 9 },
    { label: "17", R: -15.879, d: 1.0, sd: 12.2, medium: 10 },
    { label: "18", R: 834.948, d: 1.99, sd: 12.2 },
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
    { label: "27", R: -289.464, d: 13.52, sd: 15.6 },
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

  rearPlates: [
    {
      label: "GB",
      thicknessMm: 1,
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      glass: "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      gapAfterMm: 1,
      source:
        "JP2025015010A Numerical Example3 ¶0089 PDFp15 source S28–29: t1mm, nd1.51633/vd64.1, physical D27=13.52mm, trailing air1mm. Camera-side optical block defined¶0017 p5, not lens-holder filter. No plate diameter is printed; source d reference¶0082 p12, no numerical partials. Qualified compatible curve, material and supplier unidentified.",
    },
  ],

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
