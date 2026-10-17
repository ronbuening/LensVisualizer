import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * EP 2 321 688 B1, first embodiment, Table 1 / Figure 7 (Iain A. Neil; printed "Ian A. Neil").
 * Research correlation to the Leica / Leitz Summilux-C 18mm T1.4; the production prescription is
 * unconfirmed. The patent states approximately f/1.4. The marketed T1.4 is a transmission stop,
 * so no apertureMarketing f-number is given.
 * 18 elements / 15 air-separated groups. Element names L2–L19 are the patent's own numbering:
 * L1 is its optional flat front filter (S1/S2), omitted here because paragraph 0042 allows
 * "no such filter".
 * Object distances replace that filter's 3 mm of glass and 2 mm of air by the air-equivalent
 * 2 + 3/n_d mm instead of a dummy surface. The conversion is first-order only; the patent's
 * physical object-to-image distances are 1.02 mm longer.
 * All printed R, d, refracting-surface clear half-diameters (sd) and asphere coefficients are
 * kept at scale 1 with the standard (1+K) conic.
 * Glass data are the current OHARA catalog entries for the glasses Table 1 names; the data of
 * the original melts are not published.
 * Focus is PUBLISHED: all three Table 1 spacing states with a fixed image plane; no cam law is
 * reconstructed. F1's 1000010 mm object distance is treated as infinity.
 * Aperture: nominalFno = apertureDesign = 1.3209570317518873 is the f-number of the axial ray
 * through the edge of Table 1's printed 15.80 mm stop half-diameter; the working stop radius is
 * derived from the design f-number. That ray exceeds the printed half-diameters of S17–S21 by
 * 0.07–0.09 mm; the largest axial beam clearing every printed aperture is f/1.328. The patent's
 * approximate f/1.4 and the marketed T1.4 are separate quantities.
 * gapSagFrac 0.9705 is set for this lens because the printed S8–S9 rims use 0.9704668595500715
 * of their air gap, leaving 0.27229555494834123 mm of clearance. No printed value was changed.
 * The printed clear apertures vignette off-axis bundles, so the full stop is not filled at
 * every field and focus state.
 * Semi-diameters: the 33 refracting-surface sd values are Table 1's "Aperture Half Diameter"
 * column, unchanged after comparison with Figure 7 (drawn at focus position F2) and Figures 8a
 * and 8c. The stop's printed 15.80 mm half-diameter is recorded in its comment. The figures give
 * each element a square-cut edge about 1.1–1.8 mm beyond its larger printed half-diameter, with
 * flat annuli on the smaller faces; that mechanical edge is not modeled.
 * With the front filter restored, Table 1's printed apertures and 15.80 mm stop half-diameter
 * reproduce Table 2's relative illumination within 0.2 percentage points at 546.074 nm (full
 * field 44.8 / 47.3 / 51.4 % against 45.0 / 47.3 / 51.5 %), so the printed column is the
 * patent's own beam limit.
 * Source inconsistencies, none of them in the prescription: paragraph 0045 calls L14 a positive
 * meniscus and L17 biconcave where Table 1's radii make L14 biconvex and L17 a negative meniscus;
 * the prose and claim 12 call L19 biconcave although Table 1, Figure 7 and claim 1 show it
 * biconvex; paragraph 0057 gives 37.13 degrees where Figure 11a prints 38.04; Table 2 prints 753
 * for one relative-illumination entry (the trace gives 75.1) and 79.1 for the F2 entry at
 * normalized height 0.65 (the trace gives 71.9). The model uses Table 1 throughout, so these are
 * kept here and in the analysis, not in sourceErrata, which is for contradictions in the table.
 */

const LENS_DATA = {
  schema: 2,
  key: "leica-summilux-c-18mm-t14",
  maker: "Leica",
  name: "LEICA SUMMILUX-C 18mm T1.4",
  subtitle: "EP 2 321 688 B1, First Embodiment — research correlation; production prescription unconfirmed",

  catalog: {
    lensMounts: ["arri-pl"],
    imageFormat: "35mm-cinema",
    imageCircleMm: 28,
    specs: [
      "18 ELEMENTS / 15 GROUPS",
      "DESIGN f ≈ 18 mm",
      "PATENT ≈ F/1.4; PRINTED 15.80 mm IRIS TRACES F/1.32",
      "MARKETED T1.4 (TRANSMISSION STOP)",
      "2 ASPHERICAL SURFACES / 2 ELEMENTS",
    ],
    elementCount: 18,
    groupCount: 15,
    focalLengthMm: { marketing: 18, design: 18.25803440789957 },
    fNumber: { design: 1.3209570317518873 },
  },

  source: {
    patentNumber: "EP 2 321 688 B1",
    patentYear: 2020,
    authors: ["Iain A. Neil"], // printed "NEIL, Ian, A." on the B1 front page; catalog spelling
    assignees: ["Ernst Leitz Wetzlar GmbH"],
  },

  elements: [
    {
      id: 1,
      name: "L2",
      label: "Element 1 (L2)",
      type: "Biconvex Positive",
      nd: 1.740998869812986,
      vd: 52.63650193598829,
      indexReference: "d",
      focalLengthMm: 376.00577089349554,
      glass: "S-LAL61 (OHARA)",
      apdNote:
        "ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Weak positive front element of the fixed sub-group G1a.",
      diagramLabel: "L2",
      dPgF: -0.00852893662738019,
    },
    {
      id: 2,
      name: "L3",
      label: "Element 2 (L3)",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.4969992887025918,
      vd: 81.54588757562219,
      indexReference: "d",
      focalLengthMm: -119.74337503775803,
      glass: "S-FPL51 (OHARA)",
      apd: "patent",
      apdNote:
        "Paragraph 0046 of EP 2 321 688 B1 names this element's glass, S-FPL51, as an abnormal-dispersion glass. ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Negative meniscus of the fixed sub-group G1a; its rear surface is the first asphere.",
      diagramLabel: "L3",
      dPgF: 0.030819721893589058,
    },
    {
      id: 3,
      name: "L4",
      label: "Element 3 (L4)",
      type: "Biconcave Negative",
      nd: 1.7439968484379726,
      vd: 44.78643058214332,
      indexReference: "d",
      focalLengthMm: -27.77245453890973,
      glass: "S-LAM2 (OHARA)",
      apdNote:
        "ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Strong negative element that opens the moving sub-group G1b.",
      diagramLabel: "L4",
      dPgF: -0.0028958963843203067,
    },
    {
      id: 4,
      name: "L5",
      label: "Element 4 (L5)",
      type: "Positive Meniscus",
      nd: 1.8051807136112414,
      vd: 25.425362844563985,
      indexReference: "d",
      focalLengthMm: 110.73832264893859,
      glass: "S-TIH6 (OHARA)",
      apdNote:
        "ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Positive dense-flint meniscus of G1b, directly behind L4.",
      diagramLabel: "L5",
      dPgF: 0.015096328332417808,
    },
    {
      id: 5,
      name: "L6",
      label: "Element 5 (L6)",
      type: "Biconcave Negative",
      nd: 1.4387504366578638,
      vd: 94.94602453260312,
      indexReference: "d",
      focalLengthMm: -48.78345797312347,
      glass: "S-FPL53 (OHARA)",
      apd: "patent",
      apdNote:
        "Paragraph 0046 of EP 2 321 688 B1 names this element's glass, S-FPL53, as an abnormal-dispersion glass. ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Negative low-dispersion element of G1b.",
      diagramLabel: "L6",
      dPgF: 0.05020438775637859,
    },
    {
      id: 6,
      name: "L7",
      label: "Element 6 (L7)",
      type: "Biconvex Positive",
      nd: 1.7495043865944548,
      vd: 35.33247970551533,
      indexReference: "d",
      focalLengthMm: 51.87539682965142,
      glass: "S-NBH51 (OHARA)",
      apdNote:
        "ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Strongest positive singlet of G1b.",
      diagramLabel: "L7",
      dPgF: -0.0025090345377279943,
    },
    {
      id: 7,
      name: "L8",
      label: "Element 7 (L8)",
      type: "Biconvex Positive",
      nd: 1.882996976508819,
      vd: 40.765107034512226,
      indexReference: "d",
      focalLengthMm: 109.88611560085475,
      glass: "S-LAH58 (OHARA)",
      apdNote:
        "ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Positive high-index element of G1b, ahead of the group's widest air space.",
      diagramLabel: "L8",
      dPgF: -0.008469185412159463,
    },
    {
      id: 8,
      name: "L9",
      label: "Element 8 (L9)",
      type: "Positive Meniscus",
      nd: 1.4387504366578638,
      vd: 94.94602453260312,
      indexReference: "d",
      focalLengthMm: 88.24645174540872,
      glass: "S-FPL53 (OHARA)",
      apd: "patent",
      apdNote:
        "Paragraph 0046 of EP 2 321 688 B1 names this element's glass, S-FPL53, as an abnormal-dispersion glass. ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Positive low-dispersion meniscus of G1b, ahead of cemented doublet D1.",
      diagramLabel: "L9",
      dPgF: 0.05020438775637859,
    },
    {
      id: 9,
      name: "L10",
      label: "Element 9 (L10)",
      type: "Positive Meniscus",
      nd: 1.6179999100059148,
      vd: 63.33350376632158,
      indexReference: "d",
      focalLengthMm: 66.22947666344729,
      glass: "S-PHM52 (OHARA)",
      apdNote:
        "ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Positive front element of cemented doublet D1 at the rear of G1b.",
      diagramLabel: "L10",
      cemented: "D1",
      dPgF: 0.006845473865652818,
    },
    {
      id: 10,
      name: "L11",
      label: "Element 10 (L11)",
      type: "Negative Meniscus",
      nd: 1.8009987892914918,
      vd: 34.96740317025149,
      indexReference: "d",
      focalLengthMm: -49.04016232355233,
      glass: "S-LAM66 (OHARA)",
      apdNote:
        "ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Negative rear element of cemented doublet D1, facing the stop.",
      diagramLabel: "L11",
      cemented: "D1",
      dPgF: 0.0014115533217575749,
    },
    {
      id: 11,
      name: "L12",
      label: "Element 11 (L12)",
      type: "Biconcave Negative",
      nd: 1.7495043865944548,
      vd: 35.33247970551533,
      indexReference: "d",
      focalLengthMm: -41.391921574891114,
      glass: "S-NBH51 (OHARA)",
      apdNote:
        "ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Negative element directly behind the stop; first element of the moving group G2.",
      diagramLabel: "L12",
      dPgF: -0.0025090345377279943,
    },
    {
      id: 12,
      name: "L13",
      label: "Element 12 (L13)",
      type: "Biconvex Positive",
      nd: 1.4387504366578638,
      vd: 94.94602453260312,
      indexReference: "d",
      focalLengthMm: 96.79585426319893,
      glass: "S-FPL53 (OHARA)",
      apd: "patent",
      apdNote:
        "Paragraph 0046 of EP 2 321 688 B1 names this element's glass, S-FPL53, as an abnormal-dispersion glass. ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Positive low-dispersion singlet of G2.",
      diagramLabel: "L13",
      dPgF: 0.05020438775637859,
    },
    {
      id: 13,
      name: "L14",
      label: "Element 13 (L14)",
      type: "Biconvex Positive",
      nd: 1.4387504366578638,
      vd: 94.94602453260312,
      indexReference: "d",
      focalLengthMm: 42.27173430793739,
      glass: "S-FPL53 (OHARA)",
      apd: "patent",
      apdNote:
        "Paragraph 0046 of EP 2 321 688 B1 names this element's glass, S-FPL53, as an abnormal-dispersion glass. ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Positive low-dispersion front element of cemented doublet D2.",
      diagramLabel: "L14",
      cemented: "D2",
      dPgF: 0.05020438775637859,
    },
    {
      id: 14,
      name: "L15",
      label: "Element 14 (L15)",
      type: "Negative Meniscus",
      nd: 1.8159998391054324,
      vd: 46.620560774577335,
      indexReference: "d",
      focalLengthMm: -169.52309525526877,
      glass: "S-LAH59 (OHARA)",
      apdNote:
        "ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Negative meniscus rear element of cemented doublet D2.",
      diagramLabel: "L15",
      cemented: "D2",
      dPgF: -0.008590661934366195,
    },
    {
      id: 15,
      name: "L16",
      label: "Element 15 (L16)",
      type: "Positive Meniscus",
      nd: 1.4387504366578638,
      vd: 94.94602453260312,
      indexReference: "d",
      focalLengthMm: 79.83888546636922,
      glass: "S-FPL53 (OHARA)",
      apd: "patent",
      apdNote:
        "Paragraph 0046 of EP 2 321 688 B1 names this element's glass, S-FPL53, as an abnormal-dispersion glass. ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Positive low-dispersion front element of cemented doublet D3.",
      diagramLabel: "L16",
      cemented: "D3",
      dPgF: 0.05020438775637859,
    },
    {
      id: 16,
      name: "L17",
      label: "Element 16 (L17)",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.7495043865944548,
      vd: 35.33247970551533,
      indexReference: "d",
      focalLengthMm: -34.42268104692358,
      glass: "S-NBH51 (OHARA)",
      apdNote:
        "ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Negative rear element of cemented doublet D3; its rear surface is the second asphere.",
      diagramLabel: "L17",
      cemented: "D3",
      dPgF: -0.0025090345377279943,
    },
    {
      id: 17,
      name: "L18",
      label: "Element 17 (L18)",
      type: "Biconvex Positive",
      nd: 1.8080946694804287,
      vd: 22.760816562108356,
      indexReference: "d",
      focalLengthMm: 88.04593514748984,
      glass: "S-NPH1 (OHARA)",
      apd: "patent",
      apdNote:
        "Claim 10 of EP 2 321 688 B1 states that this element has abnormal partial dispersion; paragraph 0046 names its glass, S-NPH1, as the dense flint that compensates secondary dispersion. ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Positive very dense flint singlet of G2; offsets secondary dispersion from the rest of the lens.",
      diagramLabel: "L18",
      dPgF: 0.025187215464019475,
    },
    {
      id: 18,
      name: "L19",
      label: "Element 18 (L19)",
      type: "Biconvex Positive",
      nd: 1.6179999100059148,
      vd: 63.33350376632158,
      indexReference: "d",
      focalLengthMm: 54.29467398640478,
      glass: "S-PHM52 (OHARA)",
      apdNote:
        "ΔPgF is from the current OHARA catalog indices for this glass, measured from the line 0.6438 − 0.001682·νd; the data of the original melt are not published.",
      role: "Positive rear singlet of G2, the last element before the image.",
      diagramLabel: "L19",
      dPgF: 0.006845473865652818,
    },
  ],

  surfaces: [
    { label: "3", R: 743.582, d: 5.319, sd: 38.13, medium: 1 },
    { label: "4", R: -444.221, d: 0.1, sd: 37.07 },
    { label: "5", R: 84.191, d: 4.628, sd: 30.1, medium: 2 },
    {
      label: "6A",
      R: 34.23,
      sd: 26.45,
      asphere: {
        K: 0.2145,
        A4: -9.422e-6,
        A6: -1.178e-8,
        A8: 6.305e-12,
        A10: -6.072e-15,
        A12: 1.659e-17,
        A14: -1.548e-20,
      },
    },
    { label: "7", R: -348.149, d: 2.143, sd: 22.9, medium: 3 },
    { label: "8", R: 22.024, d: 9.22, sd: 17.47 },
    { label: "9", R: -456.055, d: 3.639, sd: 17.47, medium: 4 },
    { label: "10", R: -74.848, d: 4.227, sd: 17.51 },
    { label: "11", R: -28.133, d: 1.797, sd: 17.48, medium: 5 },
    { label: "12", R: 91.226, d: 5.106, sd: 18.79 },
    { label: "13", R: 64.263, d: 8.107, sd: 20.79, medium: 6 },
    { label: "14", R: -93.119, d: 0.1, sd: 20.81 },
    { label: "15", R: 158.09, d: 4.196, sd: 20.21, medium: 7 },
    { label: "16", R: -248.087, d: 15.761, sd: 19.9 },
    { label: "17", R: -2854.002, d: 5.16, sd: 15.96, medium: 8 },
    { label: "18", R: -38.221, d: 0.1, sd: 15.92 },
    { label: "19", R: -44.742, d: 5.784, sd: 15.74, medium: 9 },
    { label: "20", R: -22.431, d: 1.594, sd: 15.74, medium: 10 },
    { label: "21", R: -53.944, sd: 16.28 },
    // EP 2 321 688 B1 Table 1 prints a 15.80 mm aperture half-diameter at the stop.
    { label: "STO", R: "flat", d: 4.365 },
    { label: "23", R: -38.945, d: 1.546, sd: 15.73, medium: 11 },
    { label: "24", R: 155.115, d: 0.1, sd: 16.57 },
    { label: "25", R: 75.043, d: 5.488, sd: 16.99, medium: 12 },
    { label: "26", R: -95.658, d: 0.1, sd: 17.31 },
    { label: "27", R: 77.145, d: 13.271, sd: 17.88, medium: 13 },
    { label: "28", R: -23.136, d: 2.193, sd: 17.95, medium: 14 },
    { label: "29", R: -28.966, d: 0.1, sd: 18.89 },
    { label: "30", R: -52.538, d: 8.684, sd: 17.91, medium: 15 },
    { label: "31", R: -22.076, d: 3.258, sd: 17.78, medium: 16 },
    {
      label: "32A",
      R: -162.615,
      d: 0.1,
      sd: 20.05,
      asphere: { K: 0, A4: 6.314e-6, A6: 1.691e-9, A8: -2.004e-12, A10: 2.24381e-15, A12: -1.305e-17, A14: 1.259e-20 },
    },
    { label: "33", R: 348.045, d: 4.777, sd: 20.42, medium: 17 },
    { label: "34", R: -88.883, d: 0.1, sd: 20.75 },
    { label: "35", R: 271.963, d: 9.721, sd: 21.27, medium: 18 },
    { label: "36", R: -37.754, sd: 21.41 },
  ],

  focus: {
    closeFocusM: 0.34155146125108476,
    keyframes: [0, 0.6417107065300492, 1],
    description:
      "PUBLISHED three-state floating focus (Table 1, F1/F2/F3). The front sub-group G1a is fixed. From infinity to the nearest printed state, G1b moves 1.657 mm toward the image and G2, which carries the iris, moves 1.777 mm toward the object (0.699 mm and 0.899 mm at the middle state); the image plane stays fixed. Displayed distances replace the patent's optional front filter by its air-equivalent thickness: 341.6 mm and 532.3 mm from object to image, against 342.6 mm and 533.3 mm with the filter in place. The patent text quotes the same two states from its first surface instead, as about 15 cm and 34 cm. Positions between the printed states are interpolated. The marketed close focus (0.35 m to 0.5 m depending on the listing) is not the patent's near state.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 532.2514612510848,
        distanceReference: "image-plane",
        source:
          "EP 2 321 688 B1, Table 1, focus position F2: printed gaps; object distance with the optional front filter replaced by its air-equivalent thickness.",
      },
      {
        zoomStation: 0,
        keyframe: 2,
        objectDistanceMm: 341.5514612510848,
        distanceReference: "image-plane",
        source:
          "EP 2 321 688 B1, Table 1, focus position F3: printed gaps; object distance with the optional front filter replaced by its air-equivalent thickness.",
      },
    ],
    published: [1, 2],
  },

  gaps: {
    "6A": { label: "D(G1a–G1b)", values: [[7.955, 8.654, 9.612]] },
    "21": { label: "D(G1b–STO)", values: [[4.734, 3.136, 1.3]] },
    "36": { label: "BF", values: [[44.8, 45.699, 46.577]] },
  },

  aperture: { nominalFNumber: 1.3209570317518873, fStops: [1.3209570317518873, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "G1a FIXED", fromSurface: "3", toSurface: "6A" },
    { text: "G1b FOCUS", fromSurface: "7", toSurface: "21" },
    { text: "G2 FOCUS", fromSurface: "STO", toSurface: "36" },
  ],
  doublets: [
    { text: "D1", fromSurface: "19", toSurface: "21" },
    { text: "D2", fromSurface: "27", toSurface: "29" },
    { text: "D3", fromSurface: "30", toSurface: "32A" },
  ],

  layout: { yScFill: 0.3 },

  checks: { gapSagFrac: 0.9705 },
} satisfies LensDataV2Input;

export default LENS_DATA;
