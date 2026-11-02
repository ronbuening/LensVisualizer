import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2025/0389929 A1, Numerical Example 2; Canon Inc. / Takahiro Saito.
 * Original source follow-up 2026-10-30. Prescription PDF pp. 28–30; Fig. 3 p. 4;
 * Fig. 4A/B p. 5; Tables 1–2 pp. 38–39; spectral definition paragraph 0174 p. 26.
 * The 16 modeled media form 11 air-separated groups, including a source-listed
 * 0.70 mm high-partial layer. Its BR/organic identity and the production 15/11
 * count are qualified product correlations, not proof of chemistry or process.
 * All R/d, three aspheres, stop rule and published complementary focus gaps
 * remain source-literal. Six Table 2 Abbe values add consistent printed precision.
 * Four absolute theta values are converted to the engine normal; the paper's
 * own conditional residuals remain evidence in notes rather than engine dPgF.
 * Thirteen compatible catalog curves are qualified spectral proxies. G9, G10
 * and G16 remain unresolved; no supplier, melt, chemistry or cure is established.
 *
 * Fig. 3 is a native 2560×3300 raster at about 300 ppi. Rotated active-span scale
 * is about 16.38 px/mm, with practical ±0.7 mm rim uncertainty. Corrected caps
 * and two cap-preserving free-end shoulders follow its optical ink, excluding
 * leaders, stop strokes and brackets. S2 clear 16.5 stays below the source-like
 * 17.65 trial because its physical gap/guard fails; outer height is 22.65.
 * That shoulder's axial wall is cap-anchored, not an exact source piston.
 * All curved bonded caps and the high-partial layer stay connected; no opaque
 * interface land, disconnected layer wing, source plate or inferred cut is added.
 *
 * Source f 20.60/F1.46 and evaluated image height 18.90 remain distinct from the
 * computed d-line EFL 20.597916 and generic 21.65 mm format corner. The adopted
 * rear cap 16.55 limits generic infinity coverage to 98.209%; source-height chiefs
 * clear. Finite source table reference is disputed: printed first-object 300.024
 * versus literal-gap Gaussian first-object 182.490667/object-to-image 299.990667.
 * Preserve the published focus schedule; no refitting or source correction.
 * Current iris 12.993901 gives paraxial F1.46 versus real collimated1.525873.
 * See the analysis/audit for actual finite, angular, pupil and source limits.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-rf-20mm-f14-l-vcm",
  maker: "Canon",
  name: "CANON RF 20mm f/1.4 L VCM",
  subtitle: "US 2025/0389929 A1 Example 2 — Canon / Saito",
  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "Official: 15 elements / 11 groups; source high-partial layer modeled separately",
      "Patent Example 2: 16 optical members / 11 groups",
      "f = 20.60 mm source design, 20 mm marketed",
      "F/1.46 design, f/1.4 marketed",
      "3 aspherical surfaces on 2 elements; production GMo correlation",
      "Inner focus L2; official MFD 0.20 m",
    ],
    elementCount: 16,
    groupCount: 11,
    focalLengthMm: {
      marketing: 20,
      design: 20.6,
    },
    fNumber: {
      marketing: 1.4,
      design: 1.46,
    },
  },
  source: {
    patentNumber: "US 2025/0389929 A1",
    example: {
      label: "Numerical Example 2",
      id: "2",
    },
    patentYear: 2025,
    authors: ["Takahiro Saito"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Numerical Example 2 (PDF p. 29 / printed p. 12) prints first surface from object plane=300.024 mm at magnification -0.1. The literal source gaps give Gaussian first-object distance 182.490667 mm and object-to-image 299.990667 mm, magnification -0.100014. A literal 300.024 mm first-object distance instead needs image gap 17.701874 mm and gives magnification -0.062793. Keep all printed source gaps; reference-plane cause is unresolved.",
      },
      {
        status: "unresolved",
        note: "Paragraph 0136 (PDF p. 24 / printed p. 7) calls L1 and L2 stationary after describing L2 motion. Abstract, paragraph 0032 and Claim 1 identify L1 and L3 as stationary. Literal group boundaries and source focus gaps are retained.",
      },
    ],
  },
  elements: [
    {
      id: 1,
      name: "G1",
      label: "G1",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.6,
      focalLengthMm: -53.14,
      glass:
        "S-BSM14 (OHARA) (compatible spectral proxy; historical supplier, melt, chemistry and process unspecified)",
      role: "Outermost negative meniscus in the three-negative-front wide-angle section.",
      indexReference: "d",
    },
    {
      id: 2,
      name: "G2",
      label: "G2",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: -83.73,
      glass:
        "J-SK12 (Hikari) (compatible spectral proxy; historical supplier, melt, chemistry and process unspecified)",
      role: "Aspherical negative meniscus; source shape is established, GMo process is a production correlation.",
      indexReference: "d",
    },
    {
      id: 3,
      name: "G3",
      label: "G3 low-dispersion",
      type: "Negative Meniscus",
      nd: 1.43875,
      vd: 94.66,
      focalLengthMm: -70.04,
      glass:
        "S-FPL55 (OHARA) (compatible spectral proxy; historical supplier, melt, chemistry and process unspecified)",
      role: "Low-dispersion negative meniscus; Super UD is a production correlation, catalog chemistry is unproved.",
      indexReference: "d",
    },
    {
      id: 4,
      name: "G4",
      label: "G4",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.3,
      focalLengthMm: 24.46,
      glass:
        "N-LAK33B (Schott catalog-equivalent to patent 755523; supplier not identified) (compatible spectral proxy; historical supplier, melt, chemistry and process unspecified)",
      role: "High-index positive component of the first cemented achromat; catalog chemistry is unproved.",
      cemented: "D1",
      indexReference: "d",
    },
    {
      id: 5,
      name: "G5",
      label: "G5",
      type: "Negative Meniscus",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: -42.84,
      glass:
        "S-NBH56 (OHARA) (compatible spectral proxy; historical supplier, melt, chemistry and process unspecified)",
      apd: "patent",
      apdNote:
        "Original Example 2 single-lens data PDF pp. 29–30 and Table 2 p. 39: absolute theta gF 0.6122, engine dPgF 0.0101136; source own-normal conditional residual is distinct. Paragraphs 0079/0115 explicitly discuss anomalous partial dispersion; supplier/chemistry unspecified.",
      role: "Negative achromatizing partner satisfying the published chromatic conditions; catalog chemistry is unproved.",
      cemented: "D1",
      dPgF: 0.0101136,
      indexReference: "d",
    },
    {
      id: 6,
      name: "G6",
      label: "G6",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.4,
      focalLengthMm: 40.12,
      glass: "TAFD37A (Hoya) (compatible spectral proxy; historical supplier, melt, chemistry and process unspecified)",
      role: "Strong high-index biconvex positive element in L1.",
      indexReference: "d",
    },
    {
      id: 7,
      name: "G7",
      label: "G7",
      type: "Negative Meniscus",
      nd: 1.54072,
      vd: 47.2,
      focalLengthMm: -129.29,
      glass: "S-TIL2 (OHARA) (compatible spectral proxy; historical supplier, melt, chemistry and process unspecified)",
      role: "Weak negative meniscus immediately before the aperture stop.",
      indexReference: "d",
    },
    {
      id: 8,
      name: "G8",
      label: "G8",
      type: "Biconvex Positive",
      nd: 2.00069,
      vd: 25.5,
      focalLengthMm: 51.55,
      glass:
        "TAFD40-W (Hoya) (compatible spectral proxy; historical supplier, melt, chemistry and process unspecified)",
      role: "Ultra-high-index positive component of the BR-containing cemented triplet.",
      cemented: "D2",
      indexReference: "d",
    },
    {
      id: 9,
      name: "G9",
      label: "G9 high-partial layer",
      type: "Positive Meniscus",
      nd: 1.5706,
      vd: 20.08,
      focalLengthMm: 304.54,
      glass:
        "Unmatched (anonymous high-partial medium; nd1.57060, nu d20.08; BR production correlation only; chemistry, cure and supplier unspecified)",
      apd: "patent",
      apdNote:
        "Original Example 2 single-lens data PDF pp. 29–30 and Table 2 p. 39: absolute theta gF 0.7782, engine dPgF 0.16817456; source own-normal conditional residual is distinct. Paragraphs 0079/0115 explicitly discuss anomalous partial dispersion; supplier/chemistry unspecified.",
      role: "Thin bonded high-partial medium in the selected prescription; BR organic identity is a production correlation, not established chemistry.",
      cemented: "D2",
      dPgF: 0.16817456,
      indexReference: "d",
    },
    {
      id: 10,
      name: "G10",
      label: "G10",
      type: "Biconcave Negative",
      nd: 1.66565,
      vd: 35.64,
      focalLengthMm: -53.51,
      glass:
        "Unmatched (anonymous patent medium; H-ZBaF4 rejected by published partial mismatch; supplier, melt and chemistry unspecified)",
      apd: "patent",
      apdNote:
        "Original Example 2 single-lens data PDF pp. 29–30 and Table 2 p. 39: absolute theta gF 0.5824, engine dPgF -0.00145352; source own-normal conditional residual is distinct. Paragraphs 0079/0115 explicitly discuss anomalous partial dispersion; supplier/chemistry unspecified.",
      role: "Negative achromatizing component of the BR-containing triplet.",
      cemented: "D2",
      dPgF: -0.00145352,
      indexReference: "d",
    },
    {
      id: 11,
      name: "G11",
      label: "G11 low-dispersion",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.65,
      focalLengthMm: 61.63,
      glass:
        "J-FK01A (Hikari) (compatible spectral proxy; historical supplier, melt, chemistry and process unspecified)",
      role: "Low-dispersion positive component at the front of the moving focus group.",
      cemented: "D3",
      indexReference: "d",
    },
    {
      id: 12,
      name: "G12",
      label: "G12",
      type: "Negative Meniscus",
      nd: 1.77047,
      vd: 29.74,
      focalLengthMm: -25.49,
      glass: "NBFD29 (Hoya) (compatible spectral proxy; historical supplier, melt, chemistry and process unspecified)",
      apd: "patent",
      apdNote:
        "Original Example 2 single-lens data PDF pp. 29–30 and Table 2 p. 39: absolute theta gF 0.5951, engine dPgF 0.00132268; source own-normal conditional residual is distinct. Paragraphs 0079/0115 explicitly discuss anomalous partial dispersion; supplier/chemistry unspecified.",
      role: "High-dispersion negative partner in the moving focus-group doublet.",
      cemented: "D3",
      dPgF: 0.00132268,
      indexReference: "d",
    },
    {
      id: 13,
      name: "G13",
      label: "G13 low-dispersion",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.65,
      focalLengthMm: 38.67,
      glass:
        "J-FK01A (Hikari) (compatible spectral proxy; historical supplier, melt, chemistry and process unspecified)",
      role: "Second low-dispersion positive element in L2; production UD correlation only.",
      indexReference: "d",
    },
    {
      id: 14,
      name: "G14",
      label: "G14 double asphere",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.804,
      vd: 46.5,
      focalLengthMm: 42.45,
      glass:
        "S-LAH65VS (OHARA) (compatible spectral proxy; historical supplier, melt, chemistry and process unspecified)",
      role: "Double-aspheric positive element; GMo process and catalog chemistry are not source-established.",
      indexReference: "d",
    },
    {
      id: 15,
      name: "G15",
      label: "G15",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      focalLengthMm: 46.39,
      glass: "FCD515 (Hoya) (compatible spectral proxy; historical supplier, melt, chemistry and process unspecified)",
      role: "Positive component of the rear negative field-flattening doublet; catalog chemistry is unproved.",
      cemented: "D4",
      indexReference: "d",
    },
    {
      id: 16,
      name: "G16",
      label: "G16",
      type: "Biconcave Negative",
      nd: 1.66565,
      vd: 35.6,
      focalLengthMm: -29.75,
      glass:
        "Unmatched (anonymous patent medium; H-ZBaF4 rejected by published partial mismatch; supplier, melt and chemistry unspecified)",
      role: "Dominant negative component of L3.",
      cemented: "D4",
      indexReference: "d",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 52.423,
      d: 1.4,
      sd: 22.65,
      medium: 1,
    },
    {
      label: "2",
      R: 19.691,
      d: 5.03,
      sd: 16.5,
      rimExtensionSd: 22.65,
    },
    {
      label: "3",
      R: 29.399,
      d: 2,
      sd: 17.65,
      medium: 2,
    },
    {
      label: "4A",
      R: 17.89,
      d: 16.43,
      sd: 15.6,
      asphere: {
        K: -4.88704,
        A4: 0.0000985206,
        A6: -4.60796e-7,
        A8: 2.61477e-9,
        A10: -1.06987e-11,
        A12: 2.6268e-14,
        A14: -2.76184e-17,
      },
      rimExtensionSd: 17.65,
    },
    {
      label: "5",
      R: -23.409,
      d: 1.2,
      sd: 14.05,
      medium: 3,
    },
    {
      label: "6",
      R: -99.819,
      d: 0.5,
      sd: 14.05,
    },
    {
      label: "7",
      R: 167.077,
      d: 8.86,
      sd: 15.55,
      medium: 4,
    },
    {
      label: "8",
      R: -20.287,
      d: 1.05,
      sd: 15.55,
      medium: 5,
    },
    {
      label: "9",
      R: -46.575,
      d: 0.25,
      sd: 15.55,
    },
    {
      label: "10",
      R: 70.946,
      d: 5.42,
      sd: 16.35,
      medium: 6,
    },
    {
      label: "11",
      R: -70.946,
      d: 0.96,
      sd: 16.35,
    },
    {
      label: "12",
      R: 184.489,
      d: 1.1,
      sd: 15.55,
      medium: 7,
    },
    {
      label: "13",
      R: 50.592,
      d: 4.99,
      sd: 15.55,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.18,
    },
    {
      label: "15",
      R: 124.113,
      d: 3.8,
      sd: 14.3,
      medium: 8,
    },
    {
      label: "16",
      R: -86.925,
      d: 0.7,
      sd: 14.3,
      medium: 9,
    },
    {
      label: "17",
      R: -58.11,
      d: 1.1,
      sd: 14.3,
      medium: 10,
    },
    {
      label: "18",
      R: 92.703,
      sd: 14.3,
    },
    {
      label: "19",
      R: -31.832,
      d: 5.02,
      sd: 12.75,
      medium: 11,
    },
    {
      label: "20",
      R: -16.428,
      d: 1,
      sd: 12.75,
      medium: 12,
    },
    {
      label: "21",
      R: -103.188,
      d: 0.2,
      sd: 12.75,
    },
    {
      label: "22",
      R: 40.261,
      d: 8.11,
      sd: 15.25,
      medium: 13,
    },
    {
      label: "23",
      R: -34.315,
      d: 2.75,
      sd: 15.25,
    },
    {
      label: "24A",
      R: 87.489,
      d: 5.76,
      sd: 16.55,
      medium: 14,
      asphere: {
        K: 0,
        A4: -0.00000828107,
        A6: 7.81678e-9,
        A8: -5.60781e-11,
        A10: 2.06771e-13,
        A12: -4.03084e-16,
      },
    },
    {
      label: "25A",
      R: -54.32,
      sd: 16.55,
      asphere: {
        K: 0,
        A4: 0.00000609726,
        A6: 5.11495e-9,
        A8: -1.22444e-11,
        A10: 1.38078e-13,
        A12: -2.89951e-16,
      },
    },
    {
      label: "26",
      R: 326.711,
      d: 6.95,
      sd: 16.55,
      medium: 15,
    },
    {
      label: "27",
      R: -29.793,
      d: 1.05,
      sd: 16.55,
      medium: 16,
    },
    {
      label: "28",
      R: 59.878,
      d: 18.44,
      sd: 16.55,
    },
  ],
  focus: {
    closeFocusM: 0.2,
    description: "Inner focus by positive L2; patent tabulates 1.61 mm objectward travel from infinity to β=-0.1.",
    published: [1],
  },
  gaps: {
    "18": {
      label: "D18 / L1-L2",
      values: [[9.05, 7.44]],
    },
    "25A": {
      label: "D25 / L2-L3",
      values: [[2.2, 3.81]],
    },
  },
  aperture: {
    nominalFNumber: 1.46,
    fStops: [1.46, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
    blades: 11,
  },
  groups: [
    {
      text: "L1",
      fromSurface: "1",
      toSurface: "18",
    },
    {
      text: "L2 focus",
      fromSurface: "19",
      toSurface: "25A",
    },
    {
      text: "L3",
      fromSurface: "26",
      toSurface: "28",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "7",
      toSurface: "9",
    },
    {
      text: "D2 high-partial layer",
      fromSurface: "15",
      toSurface: "18",
    },
    {
      text: "D3",
      fromSurface: "19",
      toSurface: "21",
    },
    {
      text: "D4",
      fromSurface: "26",
      toSurface: "28",
    },
  ],
  layout: {
    scFill: 0.68,
    yScFill: 0.58,
  },
  rays: {
    offAxisFieldFrac: 0.55,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
