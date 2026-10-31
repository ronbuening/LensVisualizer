import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP2022085382A, Numerical Example3 ¶0036 PDFpp10–11; Fig5/6 PDFp15.
 * Original shape/glass review2026-10-30; historical audit dates retained.
 * Native scale. All source R/d, nine nd/vd pairs, aspheres, stop location and
 * authored BF focus control retained. Source EFL16.48 is separate from computed16.485733.
 * SDs are native Fig5 estimates, not published clear apertures. Resolved S2/S4
 * outer shoulders preserve concave caps8.2/7.0. S3 retained8.1 versus drawn~8.3
 * because full-height trial fails existing .90 cross-gap guard; no guard relaxed.
 * Cemented rims are coextensive where the source draws them, without opaque lands.
 * Source d provenance: ¶0018 PDFp6 defines vd from Fraunhofer Nd/NF/NC;
 * ¶0031 p8/table headings use ndi/vdi; ¶0012 p5 gives d587.56nm/g435.835nm.
 * Positive citations are kept here, outside uncertainty-only indexReferenceNote.
 * Nine qualified spectral proxies include the 2026-10-31 E48R numerical proxy
 * for L8. Its source chemistry/molding/supplier remain unspecified. The original
 * 2026-10-30 removal of21 unsupported C/F/g copies remains unchanged.
 * Source Fig6 field52.9° reaches18.182875mm (84% generic full-frame corner).
 * Source table47.84° agrees with atan(Y/f), but its exact field convention remains
 * an interpretation; no wider field or production digital-correction model added.
 * Existing unit-BF focus is an approximation: Fig5 bracket ends after L8, before
 * L9. No finite source spacings; computed near conjugate125.331mm versus nominal130mm.
 * No source plate, hybrid layer, inferred cut or source exemption is introduced.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-rf-16mm-f28-stm",
  maker: "Canon",
  name: "CANON RF 16mm f/2.8 STM",
  subtitle: "JP 2022-085382 A Example 3 — Canon / Takumi Suzuki",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "9 elements / 7 groups",
      "f = 16.49 mm design / 16 mm marketed",
      "F/2.90 design / f/2.8 marketed",
      "2ω = 105.8° patent trace (Fig. 6) / 108°10′ marketed diagonal",
      "1 aspherical element / 2 aspherical surfaces",
    ],
    elementCount: 9,
    groupCount: 7,
    focalLengthMm: { marketing: 16, design: 16.48 },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "JP 2022-085382 A",
    example: { label: "Numerical Example 3", id: "3" },
    patentYear: 2022,
    authors: ["Takumi Suzuki"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "JP2022085382A claim9 PDFp2 prints 1.1<fGn1/fGn2<3.0, while detailed condition8 ¶0018 PDFp6 prints0.1 and Table1 p13 Example3 gives.76. Preferred condition9a/9b p8 repeats G2R1−G2R1 in the denominator, versus G2R1−G2R2 in base condition9 p6 and Table1 p13. Original wording retained as contradictory; no optical numbers changed.",
      },
      {
        status: "unresolved",
        note: "JP2022085382A Table1 PDFp13 Example3 prints PD16.13 versus literal source spacings16.12mm; average negative Abbe65.44 versus rounded listed pairs65.40, positive37.16 versus listed37.2. Independent source rounding is possible but unproved. Literal R/d/material pairs retained; no fit to aggregate values.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.60311,
      indexReference: "d",
      vd: 60.6,
      focalLengthMm: -25.79,
      glass: "S-BSM14 (OHARA catalog equivalent; production supplier unspecified)",
      role: "First front-group negative meniscus; shares the wide-angle diverging load and limits front-element diameter.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.48749,
      indexReference: "d",
      vd: 70.2,
      focalLengthMm: -33.82,
      glass: "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Second front-group negative meniscus; low-dispersion crown partner to L1 before the positive front-group lens.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.834,
      indexReference: "d",
      vd: 37.2,
      focalLengthMm: 43.79,
      glass: "S-LAH60 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive front-group correction element; moderates the net negative power before the aperture stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.83481,
      indexReference: "d",
      vd: 42.7,
      focalLengthMm: 8.57,
      glass: "S-LAH55VS (OHARA catalog equivalent; production supplier unspecified)",
      role: "Strong positive element at the front of the first rear-group cemented doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.90366,
      indexReference: "d",
      vd: 31.3,
      focalLengthMm: -19.27,
      glass: "S-LAH95 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative partner to L4 at the strong rear-group cemented junction; source material chemistry unidentified.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.68893,
      indexReference: "d",
      vd: 31.1,
      focalLengthMm: -12.94,
      glass: "S-TIM28 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative front element of the second rear-group cemented doublet.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.59282,
      indexReference: "d",
      vd: 68.6,
      focalLengthMm: 20.01,
      glass: "FCD515 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Low-dispersion positive crown partner to L6; the L6/L7 junction supplies the largest Abbe-number split in the rear group.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.5311,
      indexReference: "d",
      vd: 55.9,
      focalLengthMm: 169.46,
      glass: "E48R (published ZEON catalog curve; qualified numerical polymer proxy; source composition and supplier unspecified)",
      role: "Weak positive aspherical element; both surfaces carry source polynomial correction, but chemistry and manufacturing process are unidentified.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.62299,
      indexReference: "d",
      vd: 58.2,
      focalLengthMm: 70.05,
      glass: "S-BSM15 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Rear positive meniscus field-flattening element near the image plane.",
    },
  ],

  surfaces: [
    { label: "1", R: 27.125, d: 1.1, sd: 11.3, medium: 1 },
    { label: "2", R: 9.735, d: 3.67, sd: 8.2, rimExtensionSd: 11.3 },
    { label: "3", R: 30.493, d: 1, sd: 8.1, medium: 2 },
    { label: "4", R: 10.586, d: 3.21, sd: 7, rimExtensionSd: 8.1 },
    { label: "5", R: 40.191, d: 1.71, sd: 6.5, medium: 3 },
    { label: "6", R: -392.36, d: 5.43, sd: 6.5 },
    { label: "STO", R: "flat", d: 1.8 },
    { label: "8", R: 38.857, d: 6.25, sd: 6.4, medium: 4 },
    { label: "9", R: -8.128, d: 0.9, sd: 6.4, medium: 5 },
    { label: "10", R: -16.045, d: 4.69, sd: 6.4 },
    { label: "11", R: -16.526, d: 0.92, sd: 9.4, medium: 6 },
    { label: "12", R: 19.781, d: 5.8, sd: 9.4, medium: 7 },
    { label: "13", R: -26.412, d: 0.91, sd: 9.4 },
    {
      label: "14A",
      R: -50.009,
      d: 2.1,
      sd: 10.7,
      medium: 8,
      asphere: { K: 0, A4: 5.22756e-5, A6: -1.9265e-6, A8: 3.51677e-8, A10: -3.71946e-10, A12: 1.36387e-12, A14: 0 },
    },
    {
      label: "15A",
      R: -32.615,
      d: 6.74,
      sd: 10.7,
      asphere: { K: 0, A4: 1.10438e-4, A6: -1.14287e-6, A8: 2.01498e-8, A10: -1.88642e-10, A12: 6.2866e-13, A14: 0 },
    },
    { label: "16", R: -109.118, d: 4.42, sd: 15.7, medium: 9 },
    { label: "17", R: -31.658, sd: 15.7 },
  ],

  focus: {
    closeFocusM: 0.13,
    description:
      "Patent example is infinity-only. BF close-focus value is a unit-focus visualization approximation from Canon's 0.26× maximum magnification; it is not a published patent spacing.",
  },

  gaps: { "17": { label: "BF", values: [[12.54, 16.83]] } },

  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 108.1667,
    // Fig. 6 plots Example 3 to ω = 52.9°, the real field reaching Y = 18.20 mm; the table's 47.84° is atan(Y/f).
    maxTraceFieldDeg: 52.9,
  },

  groups: [
    { text: "Front group", fromSurface: "1", toSurface: "6" },
    { text: "Rear group", fromSurface: "8", toSurface: "17" },
  ],
  doublets: [
    { text: "D1", fromSurface: "8", toSurface: "10" },
    { text: "D2", fromSurface: "11", toSurface: "13" },
  ],

  layout: { scFill: 0.58, yScFill: 0.48 },
} satisfies LensDataV2Input;

export default LENS_DATA;
