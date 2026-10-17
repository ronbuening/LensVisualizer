import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** CN118534627A Example 1, Tables 1a-1g, original PDF pp8-10; Figure 1 p17.
 * Literal source R/d/nd/vd and all asphere coefficients, scale 1.
 * Eight powered elements in six air-separated components; source CG retained
 * through rearPlates with physical gaps, per current main source contract.
 * Table 1f prints L8 negative; the unchanged numeric prescription has positive
 * standalone L8 power. Paragraph 0091 D15-to-IMAGE/D11 wording is inconsistent
 * with explicit sequential tables; no S11 motion or source-number repair.
 * Source-rounded nd leaves about 0.2273 mm infinity and 0.2194 mm near paraxial
 * defocus. No optimization, glass substitution, image-plane shift or claim that
 * patent aberration performance is reproduced. Production correlation is inferred.
 * PUBLISHED unit focus: all lenses and STO move 0.96 mm; CG and sensor stay fixed.
 * finiteConjugates uses published 500 mm object-to-first-vertex only. Manufacturer
 * 500 mm sensor-plane MFD is distinct; interpolation is not a published cam law.
 * Semi-diameters are inferred from source Figure 1 and current real-ray/geometry checks; the stop radius
 * is derived from the design f-number. nominalFno calibration is not an independent physical iris
 * measurement.
 * SDs are estimated from Figure 1 (measured at 0.0459 mm/px) and floor-checked by
 * real-ray trace. The L3/L4 cemented junction (surface 6) carries L4's drawn 5.5 mm
 * height, not L3's 7.2 mm block height; the L3 rear annulus is drawn as a taper.
 * Glass classes remain Unmatched; no spectral fields or commercial identity inferred.
 */

const LENS_DATA = {
  schema: 2,
  key: "thypoch-ksana-21mm-f35",
  maker: "Thypoch",
  name: "THYPOCH KSANA 21mm f/3.5 ASPH.",
  subtitle: "CN 118534627 A Example 1; construction-correlated production association",

  catalog: {
    lensMounts: ["leica-m"],
    imageFormat: "135-full-frame",
    imageCircleMm: 43.2,
    specs: ["8 ELEMENTS / 6 GROUPS", "DESIGN f = 21.73 mm", "DESIGN F/3.5", "2 ASPHERICAL SURFACES / 1 ELEMENT"],
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: { marketing: 21, design: 21.726120732330592 },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  source: {
    patentNumber: "CN 118534627 A",
    patentYear: 2024,
    authors: ["Kuang Jian", "Ouyang Xia", "Ye Bo", "Li Zenghui", "Liu Xiaojuan"],
    assignees: ["Shenzhen Dongzheng Optical Technology Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: -33.252411286,
      glass: "Unmatched (low-dispersion crown)",
      apd: "inferred",
      apdNote:
        "ED class inferred from the source-rounded nd=1.50 and νd=81.60; Thypoch marks this position ED. The patent publishes no partial-dispersion data.",
      role: "Front negative meniscus, convex toward object.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 2.0,
      vd: 25.43,
      indexReference: "d",
      focalLengthMm: 36.895130099,
      glass: "Unmatched (high-index flint)",
      role: "Positive high-index meniscus in G1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.75,
      vd: 25.05,
      indexReference: "d",
      focalLengthMm: -10.587383712,
      glass: "Unmatched (dense flint)",
      role: "Negative front member of cemented D1.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.88,
      vd: 39.22,
      indexReference: "d",
      focalLengthMm: 11.236295039,
      glass: "Unmatched (lanthanum flint)",
      role: "Positive rear member of cemented D1.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 2.0,
      vd: 25.43,
      indexReference: "d",
      focalLengthMm: 24.536189596,
      glass: "Unmatched (high-index flint)",
      role: "High-index positive singlet behind the central stop.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.73,
      vd: 54.68,
      indexReference: "d",
      focalLengthMm: 13.970101688,
      glass: "Unmatched (high-index crown)",
      role: "Positive front member of cemented D2; manufacturer ED marking is not a patent-glass identity.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.7,
      vd: 30.05,
      indexReference: "d",
      focalLengthMm: -11.250976139,
      glass: "Unmatched (dense flint)",
      role: "Negative rear member of cemented D2.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.59,
      vd: 61.25,
      indexReference: "d",
      focalLengthMm: 179.280914296,
      glass: "Unmatched (crown)",
      role: "Rear aspheric meniscus; positive standalone power from literal Table 1a, despite Table 1f negative sign.",
    },
  ],

  surfaces: [
    { label: "1", R: 30.29, d: 1.39, sd: 11.6, medium: 1 },
    { label: "2", R: 10.57, d: 5.02, sd: 9.5 },
    { label: "3", R: 35.37, d: 3.26, sd: 8.1, medium: 2 },
    { label: "4", R: 816.22, d: 1.19, sd: 8.1 },
    { label: "5", R: -26.03, d: 4.22, sd: 7.2, medium: 3 },
    { label: "6", R: 12.22, d: 3.08, sd: 5.5, medium: 4 },
    { label: "7", R: -45.7, d: 2.83, sd: 5.5 },
    { label: "STO", R: "flat", d: 2.34 },
    { label: "9", R: 38.82, d: 2.03, sd: 5.2, medium: 5 },
    { label: "10", R: -64.94, d: 1.22, sd: 5.2 },
    { label: "11", R: 60.42, d: 3.49, sd: 6.2, medium: 6 },
    { label: "12", R: -11.97, d: 0.89, sd: 6.5, medium: 7 },
    { label: "13", R: 23.73, d: 1.77, sd: 6.5 },
    {
      label: "14A",
      R: -34.84,
      d: 2.05,
      sd: 7.7,
      medium: 8,
      asphere: { K: -3.99, A4: 7.26e-5, A6: -8.31e-7, A8: 2.76e-8, A10: -1.31e-9, A12: 1.13e-11, A14: 0, A16: 0 },
    },
    {
      label: "15A",
      R: -26.78,
      sd: 7.7,
      asphere: { K: 7.19, A4: 0.000254, A6: -1.36e-7, A8: 2.98e-8, A10: -8.18e-10, A12: 6.44e-12, A14: 0, A16: 0 },
    },
  ],

  focus: {
    closeFocusM: 0.5538,
    description:
      "PUBLISHED: unit focus. G1, the stop and G2 move together 0.96 mm toward the object (D15 16.71 to 17.67 mm); the cover glass and image plane stay fixed. The patent's near state is 500 mm from the object to the first lens vertex, which is 0.554 m from object to image with the 53.80 mm near track. The manufacturer's 0.5 m minimum is measured from the sensor plane and is a different reference. Positions between the two published states are interpolated by the app, not a published cam law. The two-decimal source indices leave a small residual defocus at both states.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 500,
        distanceReference: "first-surface",
        source:
          "CN118534627A Example1, Table 1a object D0 to S1 and Table1b D0=0.5m/D15=17.67mm, original PDFp8. Source-rounded residual defocus retained.",
      },
    ],
    published: [1],
  },

  gaps: { "15A": { label: "D15", values: [[16.71, 17.67]] } },

  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  rearPlates: [
    {
      label: "CG",
      thicknessMm: 0.85,
      nd: 1.52,
      vd: 64.2,
      indexReference: "d",
      gapAfterMm: 0.5,
      source:
        "CN118534627A Example1 Table 1a S16/S17, PDFp8; camera sensor protective plate per paragraph0077. D15 is physical lens-to-plate gap.",
    },
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "7" },
    { text: "G2 (+)", fromSurface: "9", toSurface: "15A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "11", toSurface: "13" },
  ],

  layout: { yScFill: 0.38 },
} satisfies LensDataV2Input;

export default LENS_DATA;
