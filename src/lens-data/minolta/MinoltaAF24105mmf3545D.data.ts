import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP 2000-187161 A (Minolta Co., Ltd.; inventor Mamoru Terada), Example 3 (Fig. 3; aberrations Fig. 7): Minolta AF
 * 24-105mm f/3.5-4.5 (D); the later Sony SAL24105 uses the same optical design. The match to the production lens is a
 * qualified correlation: Examples 1-3 all have the production layout (12 elements / 11 groups, an asphere on the
 * front of Gr2 and a double-aspherical negative meniscus at the rear, Gr2 focus); Example 4 has 13 elements. Example 3
 * fits the marketed barrel best: of Examples 1-3, Table 1 gives it the longest wide-angle length (TLW/Y' 5.039,
 * 109.0 mm) and the Gr1 travel closest to the barrel's 39 mm extension from 69 to 108 mm (X1/fW 1.6222, 40.1 mm).
 * Printed and used as printed: all 25 surfaces (R, d, N, ν), including the stop r15 (d15 = 0.900 mm, moving with
 * Gr3, ¶0012) and the 0.010 mm cement layer between L1 and L2 (N 1.51400, ν 42.83); the aspheric surfaces r7, r24 and
 * r25 (ε = 1.0000, so K = 0; ¶0050-0052); d6, d14 and d21 at wide, middle and tele; f = 24.71 / 50.00 / 102.50 mm and
 * FNO 3.60 / 4.10 / 4.60. No scaling.
 * Derived: the patent prints no back focus for any example. BF is the paraxial image distance at each station
 * (36.501 / 53.667 / 63.910 mm). With it the model gives TLW = 109.003 mm and X1 = 40.081 mm, which reproduce Table 1
 * (TLW/Y' 5.039, X1/fW 1.6222) for Y' = 21.633 mm, the 35 mm half-diagonal, which matches Table 1's fW/Y' = 1.142.
 * The cement layer is kept as a drawn 0.010 mm element (C1) so its printed ν stays in the chromatic trace;
 * catalog.elementCount is the 12 lens elements.
 * Stop: no diameter is printed; the engine sizes r15 from the F-number at each station.
 * Semi-diameters are measured from Fig. 3 (0.0854 mm per px at 600 dpi from the r1-r25 vertex spacing; the r2 arc
 * confirms the same vertical scale) and floor-checked by ray trace; none is printed. S8 is held at 10.0 mm, below the
 * figure's 10.3-10.5 mm, so the deep L4 rear face keeps an air gap to L5 at the rim. Fig. 3 draws L4 with a
 * cylindrical edge at about 13.7 mm and a step down to the rear face, so a land (rimExtensionSd 13.8) carries the
 * edge from the 13.8 mm front rim to the rear face's rim sag; it leaves 0.48 mm to the L5 rim and needs
 * checks.gapSagFrac 0.93 (the land takes 5.95 mm of the 6.433 mm d8). L1 is square-cut at 28.8 mm on both faces
 * (r1, r2), past the 26.8 mm rim of the cemented interface r3 and L2, as Fig. 3 draws it. The r24 condition (P4) table (¶0053) runs
 * to y = 9.708 mm; L12 is 10.6 mm as drawn, and its front face (24A) turns back toward the object beyond about
 * h = 8.1 mm. At the 21.63 mm image height the wide-angle corner bundle loses about half its width at the Gr1 rims;
 * that vignetting is kept.
 * Focus: Gr2 focuses (¶0010, ¶0034, claim 6), but no close-focus spacing is printed. The model is infinity-only: both
 * focus rows repeat the infinity spacings and closeFocusM is a far placeholder distance.
 * Glass: the patent gives Nd and νd only. Six elements match five Hoya catalog glasses at the printed nd and within
 * 0.15 in νd (L2 PCD4, L5 TAF1, L8 and L11 BSC7, L9 E-C3, L10 E-FD4). L6 (1.75000/25.14) uses the nearest Hoya row,
 * FF8 (1.75211/25.05, PgF 0.6192), anchored on the printed nd: its partial dispersion puts the traced g-line focus
 * on Fig. 7 within about 0.02 mm at wide and mid and 0.08 mm short at tele, where the νd estimate ran 0.05 / 0.15 /
 * 0.20 mm long. The other five elements and the cement keep the Unmatched form; HOYA M-TAFD305 on L4 was traced and
 * moved the tele g focus further from Fig. 7.
 * Source note: Table 1 prints f1/fW = 3.5605 for Example 3, above the 3.50 upper limit of condition (4), so Example 3
 * falls under claim 3 (condition (1), P4 and a double-aspherical Gr4 lens) rather than claims 1-2. The model gives
 * 3.5604.
 */
const LENS_DATA = {
  schema: 2,
  key: "minolta-af-24-105mm-f3-5-4-5-d",
  maker: "Minolta",
  name: "MINOLTA AF 24-105mm f/3.5-4.5 (D)",
  subtitle: "JP 2000-187161 A, Example 3 — qualified production correlation",
  visible: true,
  catalog: {
    lensMounts: ["sony-a"],
    imageFormat: "135-full-frame",
    specs: [
      "12 ELEMENTS / 11 GROUPS",
      "DESIGN f = 24.71–102.5 mm",
      "DESIGN F/3.6–4.6",
      "3 ASPHERICAL SURFACES / 2 ELEMENTS",
      "INNER FOCUS",
    ],
    elementCount: 12,
    groupCount: 11,
    focalLengthMm: {
      marketing: [24, 105],
      design: [24.71, 102.5],
    },
    fNumber: {
      marketing: 3.5,
      design: 3.6,
    },
    closeFocusM: {
      marketing: 0.5,
    },
  },
  source: {
    patentNumber: "JP 2000-187161 A",
    example: {
      label: "Example 3",
      id: "3",
    },
    patentYear: 2000,
    authors: ["Mamoru Terada"],
    assignees: ["Minolta Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.8335,
      vd: 21.0,
      focalLengthMm: -196.77,
      glass: "Unmatched (1.83350/21.00)",
      role: "High-dispersion flint front meniscus of the Gr1 cemented doublet",
      diagramLabel: "L1",
      cemented: "L1+L2",
    },
    {
      id: 2,
      name: "C1",
      label: "Cement layer",
      type: "Cement Layer",
      nd: 1.514,
      vd: 42.83,
      glass: "Unmatched (patent cement layer; nd=1.51400, νd=42.83)",
      role: "0.010 mm cement layer between L1 and L2, as printed in the patent; not counted as a lens element",
      diagramLabel: "C1",
    },
    {
      id: 3,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.39,
      focalLengthMm: 130.76,
      glass: "PCD4 (HOYA; coordinate equivalent; supplier unconfirmed)",
      role: "Low-dispersion crown partner of the Gr1 cemented doublet",
      diagramLabel: "L2",
      cemented: "L1+L2",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 56.47,
      focalLengthMm: 112.89,
      glass: "Unmatched (1.69680/56.47)",
      role: "Positive meniscus completing the Gr1 front collector",
      diagramLabel: "L3",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.85,
      vd: 40.04,
      focalLengthMm: -19.9,
      glass: "Unmatched (1.85000/40.04)",
      role: "Strong negative front element of the Gr2 focusing group; aspherical front face for distortion",
      diagramLabel: "L4",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.77,
      focalLengthMm: -26.2,
      glass: "TAF1 (HOYA; coordinate equivalent; supplier unconfirmed)",
      role: "Second negative element of Gr2",
      diagramLabel: "L5",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.75,
      vd: 25.14,
      focalLengthMm: 21.76,
      glass: "FF8 (HOYA; nearest catalog row to patent nd 1.75000, νd 25.14; supplier unconfirmed)",
      role: "Dense-flint positive element that color-corrects the negative Gr2",
      diagramLabel: "L6",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.7545,
      vd: 51.57,
      focalLengthMm: -47.37,
      glass: "Unmatched (1.75450/51.57)",
      role: "Rear negative meniscus of Gr2, convex to the image",
      diagramLabel: "L7",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: 34.15,
      glass: "BSC7 (HOYA; coordinate equivalent; supplier unconfirmed)",
      role: "First positive crown of Gr3, just behind the stop",
      diagramLabel: "L8",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 58.96,
      focalLengthMm: 40.94,
      glass: "E-C3 (HOYA; coordinate equivalent; supplier unconfirmed)",
      role: "Second positive crown of Gr3",
      diagramLabel: "L9",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.51,
      focalLengthMm: -27.83,
      glass: "E-FD4 (HOYA; coordinate equivalent; supplier unconfirmed)",
      role: "Dense-flint negative element closing Gr3",
      diagramLabel: "L10",
    },
    {
      id: 12,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: 27.97,
      glass: "BSC7 (HOYA; coordinate equivalent; supplier unconfirmed)",
      role: "Positive crown of the two-element Gr4",
      diagramLabel: "L11",
    },
    {
      id: 13,
      name: "L12",
      label: "Element 12",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.7745,
      vd: 44.46,
      focalLengthMm: -51.68,
      glass: "Unmatched (1.77450/44.46)",
      role: "Double-aspherical rear negative meniscus of Gr4 (condition P4)",
      diagramLabel: "L12",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 197.186,
      d: 2.0,
      sd: 28.8,
      medium: 1,
    },
    {
      label: "2",
      R: 89.123,
      d: 0.01,
      sd: 28.8,
      medium: 2,
    },
    {
      label: "3",
      R: 89.123,
      d: 5.8,
      sd: 26.8,
      medium: 3,
    },
    {
      label: "4",
      R: -844.873,
      d: 0.1,
      sd: 26.8,
    },
    {
      label: "5",
      R: 41.124,
      d: 5.3,
      sd: 24.8,
      medium: 4,
    },
    {
      label: "6",
      R: 81.617,
      sd: 24.8,
    },
    {
      label: "7A",
      R: 142.98,
      d: 1.0,
      sd: 13.8,
      medium: 5,
      asphere: {
        K: 0,
        A4: 1.3112223e-5,
        A6: -4.5618329e-8,
        A8: 6.1980873e-10,
        A10: -3.4820002e-12,
        A12: 8.6768803e-15,
      },
    },
    {
      label: "8",
      R: 15.076,
      d: 6.433,
      sd: 10.0,
      rimExtensionSd: 13.8,
    },
    {
      label: "9",
      R: -26.605,
      d: 1.0,
      sd: 10.5,
      medium: 6,
    },
    {
      label: "10",
      R: 85.91,
      d: 0.2,
      sd: 10.5,
    },
    {
      label: "11",
      R: 40.342,
      d: 3.74,
      sd: 9.2,
      medium: 7,
    },
    {
      label: "12",
      R: -26.314,
      d: 1.475,
      sd: 9.2,
    },
    {
      label: "13",
      R: -16.856,
      d: 1.0,
      sd: 8.8,
      medium: 8,
    },
    {
      label: "14",
      R: -32.718,
      sd: 8.8,
    },
    {
      label: "STO",
      R: "flat",
      d: 0.9,
    },
    {
      label: "16",
      R: 28.272,
      d: 4.029,
      sd: 10,
      medium: 9,
    },
    {
      label: "17",
      R: -44.683,
      d: 0.2,
      sd: 10,
    },
    {
      label: "18",
      R: 33.764,
      d: 3.461,
      sd: 9.9,
      medium: 10,
    },
    {
      label: "19",
      R: -55.081,
      d: 2.025,
      sd: 9.9,
    },
    {
      label: "20",
      R: -24.385,
      d: 1.0,
      sd: 9.7,
      medium: 11,
    },
    {
      label: "21",
      R: 154.819,
      sd: 9.7,
    },
    {
      label: "22",
      R: 29.484,
      d: 5.702,
      sd: 11,
      medium: 12,
    },
    {
      label: "23",
      R: -26.486,
      d: 2.638,
      sd: 11,
    },
    {
      label: "24A",
      R: 29.964,
      d: 1.138,
      sd: 10.6,
      medium: 13,
      asphere: {
        K: 0,
        A4: -0.00016701462,
        A6: 5.8514171e-7,
        A8: -2.671205e-9,
      },
    },
    {
      label: "25A",
      R: 16.852,
      sd: 10.6,
      asphere: {
        K: 0,
        A4: -0.00014652391,
        A6: 6.8705561e-7,
        A8: -2.6388843e-9,
      },
    },
  ],
  zoom: {
    stations: [
      {
        focalLengthMm: 24.71,
        nominalFNumber: 3.6,
        label: "Wide",
      },
      {
        focalLengthMm: 50.0,
        nominalFNumber: 4.1,
        label: "Mid",
      },
      {
        focalLengthMm: 102.5,
        nominalFNumber: 4.6,
        label: "Tele",
      },
    ],
  },
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Inner focus by Gr2, which moves toward the object for close focus (patent ¶0010, ¶0023, ¶0034). The patent prints infinity spacings only, so the model is infinity-only: both focus rows repeat the infinity spacings at all three focal lengths. The marketed 0.5 m minimum focus distance is not modeled.",
  },
  gaps: {
    "6": {
      label: "D6",
      values: [
        [1.9, 1.9],
        [14.386, 14.386],
        [34.324, 34.324],
      ],
    },
    "14": {
      label: "D14",
      values: [
        [15.728, 15.728],
        [6.432, 6.432],
        [0.8, 0.8],
      ],
    },
    "21": {
      label: "D21",
      values: [
        [5.723, 5.723],
        [1.701, 1.701],
        [0.9, 0.9],
      ],
    },
    "25A": {
      label: "BF",
      values: [
        [36.501420288556446, 36.501420288556446],
        [53.66705162442531, 53.66705162442531],
        [63.909798096971905, 63.909798096971905],
      ],
    },
  },
  aperture: {
    fStops: [3.6, 4.1, 4.6, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  groups: [
    {
      text: "Gr1",
      fromSurface: "1",
      toSurface: "6",
    },
    {
      text: "Gr2",
      fromSurface: "7A",
      toSurface: "14",
    },
    {
      text: "Gr3",
      fromSurface: "16",
      toSurface: "21",
    },
    {
      text: "Gr4",
      fromSurface: "22",
      toSurface: "25A",
    },
  ],
  doublets: [
    {
      text: "L1+L2",
      fromSurface: "1",
      toSurface: "4",
    },
  ],
  layout: {
    yScFill: 0.3,
  },
  checks: {
    gapSagFrac: 0.93,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
