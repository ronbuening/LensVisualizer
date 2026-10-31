import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * 2026-10-31 reference-field follow-up: positive d-line provenance belongs in this header
 * and the sidecars, not indexReferenceNote (reserved for uncertain source reference).
 * JP 2000-284174 A, Numerical Example 1: numerical rows/zoom gaps PDF p.6;
 * Fig.1 wide section p.8 and corresponding Figs.2–4 pp.8–9. No scaling.
 * Source shape/glass review 2026-10-30; unchanged source geometry/constraints reuse
 * the actual 2026-10-08 audit. Original images are 1656×2339 at200 ppi;
 * older 600 dpi views were upsampling. Native section scale≈3.8 px/mm, ±0.8 mm rim uncertainty.
 *
 * All 16 literal d-line pairs are confirmed by explicit paragraph 0056/p.5 and retained.
 * Compatible catalog curves are qualified spectral proxies; they do not establish historical
 * supplier, melt, chemistry or the production fluorite/UD allocation. No printed C/F/g,
 * relative partial or source APD values exist. Three production-correlated tags remain inferred.
 * No source hybrid, filter, rear plate, asphere or diffractive layer is prescribed.
 *
 * R1/R2 clear caps 26/25.6→27/27 follow the native first blank and relative heights. All
 * other clear caps, R/d, stop position, fixed-iris rule, focus/zoom cams and default 0.90
 * gap guard are unchanged. No resolved new shoulder/cut is supported. Near-contact R4/R5
 * and R13/R14 prevent full-height block trials; no opaque interface or flat land is invented.
 * Catalog design focal endpoints now quote printed 71.92/194.57 mm, separately from
 * literal computed 71.901018/194.540481 mm; this metadata correction changes no optical control.
 *
 * The shared paraxial stop rule now gives fixed iris 14.258975720 mm; older 14.375 mm
 * real-ray calibration prose is historical. Current aperture census is f/4.1000,4.0999,4.3240.
 * The tele exact f/4.1 ray exceeds the literal R4/R5 contact radius; source.errata remains
 * unresolved, including the possible one-decimal aperture interpretation. No prescription tuning.
 * Reconstructed finite focus and linear zoom are not continuously focus preserving.
 * 1365 states have 21840 connected finite closed SVG contours and zero hidden trim;
 * source fidelity, sampled clearance and production correlation remain separate conclusions.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-70-200mm-f4-l-usm",
  maker: "Canon",
  name: "CANON EF 70-200mm f/4 L USM",
  subtitle: "JP2000284174A Example 1 — constrained L1b close-focus reconstruction",
  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "16 ELEMENTS / 13 GROUPS",
      "70-200mm f/4 (MARKETED)",
      "71.92-194.57mm f/4.1 (PATENT)",
      "1 FLUORITE + 2 UD (PRODUCTION)",
      "INNER FOCUS",
    ],
    elementCount: 16,
    groupCount: 13,
    acceptsTeleconverters: true,
    focalLengthMm: {
      marketing: [70, 200],
      design: [71.92, 194.57],
    },
    fNumber: {
      marketing: 4,
      design: 4.1,
    },
  },
  source: {
    patentNumber: "JP 2000-284174 A",
    example: {
      label: "Numerical Example 1",
      id: "1",
    },
    patentYear: 2000,
    authors: ["Akihiro Nishio"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Numerical Example 1 (PDF p.6) states FNo4.1 at tele, but literal R4=58.007, R5=59.256 and D4=0.10 mm geometrically meet near radius22.1518 mm, below the approximately22.30 mm required by the exact full f/4.1 axial ray. The one-decimal label admits an f/4.128–4.15 interpretation, but no unique source correction or production stop is established. Retain source R/d and f/4.1; current inferred21 mm caps and default0.90 gap guard limit the aperture census to f/4.324. No radius, gap, iris or tolerance is fitted to hide this constraint.",
      },
    ],
  },
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      focalLengthMm: 504.97860448150544,
      glass: "S-FSL5 spectral proxy (source supplier and melt unspecified)",
      role: "L1a fixed front positive singlet.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.721507,
      vd: 29.2,
      indexReference: "d",
      focalLengthMm: -232.7745541646512,
      glass: "S-TIH18 spectral proxy (source supplier and melt unspecified)",
      role: "First element of the translating L1b focus subgroup.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.43387,
      vd: 95.1,
      indexReference: "d",
      focalLengthMm: 185.1837114353476,
      glass: "CaF2 spectral proxy (source supplier and melt unspecified)",
      apd: "inferred",
      apdNote:
        "Fluorite element inferred from Canon production correlation and compatible catalog dispersion; the patent publishes no partial-dispersion measurement or supplier identity.",
      role: "Fluorite-correlated positive element in L1b.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      indexReference: "d",
      focalLengthMm: 151.5526516535952,
      glass: "S-FPL51 spectral proxy (source supplier and melt unspecified)",
      apd: "inferred",
      apdNote:
        "UD element inferred from Canon production correlation and compatible catalog dispersion; the patent publishes no partial-dispersion measurement or supplier identity.",
      role: "Low-dispersion positive element completing L1b.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      focalLengthMm: -40.04080045244512,
      glass: "J-LASF015 spectral proxy (source supplier and melt unspecified)",
      role: "Front negative element of variator L2.",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      focalLengthMm: -48.772065290787715,
      glass: "S-BSL7 spectral proxy (source supplier and melt unspecified)",
      role: "Negative member of the L2 cemented pair.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.846658,
      vd: 23.9,
      indexReference: "d",
      focalLengthMm: 44.06754209338408,
      glass: "S-TIH53WN spectral proxy (source supplier and melt unspecified)",
      role: "Positive high-index member of the L2 cemented pair.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 35,
      indexReference: "d",
      focalLengthMm: -123.02931910317324,
      glass: "LAFN7 spectral proxy (source supplier and melt unspecified)",
      role: "Rear negative singlet of variator L2.",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.622992,
      vd: 58.2,
      indexReference: "d",
      focalLengthMm: 42.10619768711282,
      glass: "S-BSM15 spectral proxy (source supplier and melt unspecified)",
      role: "Positive member of compensator L3.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.762001,
      vd: 40.1,
      indexReference: "d",
      focalLengthMm: -69.68168623172724,
      glass: "S-LAM55 spectral proxy (source supplier and melt unspecified)",
      role: "Negative member of compensator L3.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.603112,
      vd: 60.6,
      indexReference: "d",
      focalLengthMm: 62.58129794709216,
      glass: "S-BSM14 spectral proxy (source supplier and melt unspecified)",
      role: "Front positive singlet of fixed relay L4.",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      indexReference: "d",
      focalLengthMm: 62.25992084324545,
      glass: "S-FPL51 spectral proxy (source supplier and melt unspecified)",
      apd: "inferred",
      apdNote:
        "UD element inferred from Canon production correlation and compatible catalog dispersion; the patent publishes no partial-dispersion measurement or supplier identity.",
      role: "Low-dispersion positive member of the relay cemented pair.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.804398,
      vd: 39.6,
      indexReference: "d",
      focalLengthMm: -40.06897146924538,
      glass: "J-LASF013 spectral proxy (source supplier and melt unspecified)",
      role: "Negative high-index member of the relay cemented pair.",
      cemented: "D3",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.603112,
      vd: 60.6,
      indexReference: "d",
      focalLengthMm: 117.6441505848965,
      glass: "S-BSM14 spectral proxy (source supplier and melt unspecified)",
      role: "Positive relay singlet.",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.696797,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: -75.16362790775038,
      glass: "S-LAL14 spectral proxy (source supplier and melt unspecified)",
      role: "Rear negative relay singlet.",
    },
    {
      id: 16,
      name: "E16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.592701,
      vd: 35.3,
      indexReference: "d",
      focalLengthMm: 208.66537800636974,
      glass: "S-FTM16 spectral proxy (source supplier and melt unspecified)",
      role: "Final positive relay singlet.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 175.317,
      d: 3.7,
      sd: 27,
      medium: 1,
    },
    {
      label: "2",
      R: 604.892,
      sd: 27,
    },
    {
      label: "3",
      R: 89.957,
      d: 2.1,
      sd: 25.8,
      medium: 2,
    },
    {
      label: "4",
      R: 58.007,
      d: 0.1,
      sd: 21,
    },
    {
      label: "5",
      R: 59.256,
      d: 5.3,
      sd: 21,
      medium: 3,
    },
    {
      label: "6",
      R: 219.639,
      d: 0.15,
      sd: 25.8,
    },
    {
      label: "7",
      R: 81.599,
      d: 4.9,
      sd: 24.2,
      medium: 4,
    },
    {
      label: "8",
      R: -959.561,
      sd: 24.2,
    },
    {
      label: "9",
      R: -191.294,
      d: 1.4,
      sd: 14,
      medium: 5,
    },
    {
      label: "10",
      R: 38.833,
      d: 4.44,
      sd: 13.8,
    },
    {
      label: "11",
      R: -70.462,
      d: 1.4,
      sd: 13.2,
      medium: 6,
    },
    {
      label: "12",
      R: 39.453,
      d: 3.6,
      sd: 13.2,
      medium: 7,
    },
    {
      label: "13",
      R: -658.192,
      d: 1,
      sd: 12.8,
    },
    {
      label: "14",
      R: -81.31,
      d: 1.4,
      sd: 12.8,
      medium: 8,
    },
    {
      label: "15",
      R: -692.9,
      sd: 14,
    },
    {
      label: "16",
      R: 196.499,
      d: 5.6,
      sd: 15,
      medium: 9,
    },
    {
      label: "17",
      R: -29.942,
      d: 1.5,
      sd: 15,
      medium: 10,
    },
    {
      label: "18",
      R: -70.147,
      sd: 15,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.2,
    },
    {
      label: "20",
      R: 39.066,
      d: 4.6,
      sd: 15,
      medium: 11,
    },
    {
      label: "21",
      R: -1065.561,
      d: 0.2,
      sd: 15,
    },
    {
      label: "22",
      R: 37.556,
      d: 4.8,
      sd: 14.8,
      medium: 12,
    },
    {
      label: "23",
      R: -168.276,
      d: 2.03,
      sd: 14,
      medium: 13,
    },
    {
      label: "24",
      R: 40.082,
      d: 30.56,
      sd: 13.5,
    },
    {
      label: "25",
      R: 215.146,
      d: 3.5,
      sd: 15.3,
      medium: 14,
    },
    {
      label: "26",
      R: -105.218,
      d: 10.18,
      sd: 15.3,
    },
    {
      label: "27",
      R: -27.22,
      d: 1.6,
      sd: 15.8,
      medium: 15,
    },
    {
      label: "28",
      R: -58.044,
      d: 0.15,
      sd: 15.8,
    },
    {
      label: "29",
      R: 187.477,
      d: 3,
      sd: 16.4,
      medium: 16,
    },
    {
      label: "30",
      R: -361.255,
      d: 53.13085583884338,
      sd: 16.4,
    },
  ],
  zoom: {
    stations: [
      {
        focalLengthMm: 71.92,
        label: "Wide",
      },
      {
        focalLengthMm: 118.29,
      },
      {
        focalLengthMm: 194.57,
        label: "Tele",
      },
    ],
    apertureModel: "fixed-iris",
  },
  focus: {
    closeFocusM: 1.2,
    description:
      "CONSTRAINED_RECONSTRUCTION: patent-published inner focus translates L1b (R3-R8) rigidly objectward. Close-focus D2/D8 endpoints are code-solved at Canon's 1.2 m MFD with the fixed common image plane; D2 decreases by the same amount D8 increases. D15 and D18 are zoom-only.",
  },
  gaps: {
    "2": {
      label: "D2 / L1b FRONT",
      values: [
        [14.82, 1.2774233042763932],
        [14.82, 1.2852889334020894],
        [14.82, 1.2877302598412754],
      ],
    },
    "8": {
      label: "D8 / L1b REAR",
      values: [
        [1.9, 15.442576695723607],
        [25.6, 39.134711066597916],
        [41.25, 54.782269740158725],
      ],
    },
    "15": {
      label: "D15",
      values: [
        [25.57, 25.57],
        [17.09, 17.09],
        [1.11, 1.11],
      ],
    },
    "18": {
      label: "D18",
      values: [
        [19, 19],
        [3.78, 3.78],
        [4.11, 4.11],
      ],
    },
  },
  aperture: {
    nominalFNumber: 4.1,
    fStops: [4.1, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
    blades: 8,
  },
  groups: [
    {
      text: "L1a FIXED",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "L1b FOCUS",
      fromSurface: "3",
      toSurface: "8",
    },
    {
      text: "L2",
      fromSurface: "9",
      toSurface: "15",
    },
    {
      text: "L3",
      fromSurface: "16",
      toSurface: "18",
    },
    {
      text: "L4",
      fromSurface: "20",
      toSurface: "30",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "11",
      toSurface: "13",
    },
    {
      text: "D2",
      fromSurface: "16",
      toSurface: "18",
    },
    {
      text: "D3",
      fromSurface: "22",
      toSurface: "24",
    },
  ],
  layout: {
    yScFill: 0.42,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
