import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * JP2014089365A Numerical Example 1, Ryo Shioda / Sigma Corporation.
 * All source radii, thicknesses, nd/vd and five aspheres retained; no scaling.
 * 17 elements / 12 air-separated groups; K_source = K_model = 0.
 * PUBLISHED focus: all three zoom stations and both source focus states retained.
 * finiteConjugates certifies only the three published close endpoints, d0=111.5 mm
 * from the first surface; interpolated stations are not source-certified for finite MTF.
 * Interpolated slider states are not a recovered cam law. No source plate is omitted.
 * NOTE ON SEMI-DIAMETERS: estimated from supporting grant JP5952167B2 FIG. 1 (PDF p26, wide end, infinity)
 * plus traced clearance; none is a published clear aperture. The drawing is axially true to the prescription
 * (7.056 px/mm at 600 dpi) but about 1.093x taller, so heights use a curvature-calibrated vertical scale.
 * Figure-fitted 2026-10-06: 1A 26.3, 3A 21.1, 5-7 19.7, 9/10 18.3, G2 rims (11-13, 15-17) 20.0, 19 13.3,
 * 21-23 14.1, 24/25 14.9, 26/27 15.1, 29A/30A 15.3. The renderer joins unequal rims with a straight edge, so a
 * curve is carried to the element rim where the figure draws a square block and nothing forbids it (21, 29A).
 * Held below the drawn rim: 2 (19.7), 4 (18), 20 (12.3) and 28 (13.9) by the cross-gap rule (28 and 29A meet at
 * 14.26 mm); 8 (17.0; the figure ends that curve near 15.4 at a flat annulus) because a larger front lets the
 * default off-axis fan clip first at cemented surface 9; 14A (18.6) by its slope reversal at 18.6445 mm, so the
 * f/1.86 tele axial marginal ray (18.70 mm there) loses its outer 0.10 mm. Those six faces draw as chamfers;
 * the figure has flat annuli on five of them and carries 14A to the rim. A-publication supplies every
 * prescription number.
 * NOTE ON STOP: position is published surface18; radius is derived from the design f-number f/1.86 (actual runtime
 * uses an exact marginal ray). f-number agreement is not independent iris-size evidence.
 * Glass classes indicate coordinate-compatible catalogs, not actual suppliers/melts.
 * No source nC/nF/ng/PgF/dPgF is available; no APO claim is made. apd "inferred" marks the FCD1- and
 * FCD505-coordinate elements L3, L7, L10, L14, L15, the five SLD positions of Sigma's construction diagram.
 * Exact production prescription identity remains manufacturer-unconfirmed.
 */
const LENS_DATA = {
  schema: 2,
  key: "sigma-18-35-f18-dc-hsm-art",
  maker: "Sigma",
  name: "SIGMA 18-35mm f/1.8 DC HSM | Art",
  subtitle: "JP 2014-89365 A Numerical Example 1; production correlation unconfirmed",

  catalog: {
    lensMounts: ["sigma-sa", "canon-ef", "nikon-f", "pentax-k", "sony-a"],
    imageFormat: "aps-c",
    imageCircleMm: 28.4,
    specs: [
      "17 ELEMENTS / 12 GROUPS",
      "DESIGN f = 18.60–33.78 mm",
      "DESIGN F/1.86",
      "5 ASPHERICAL SURFACES / 4 ELEMENTS",
    ],
    elementCount: 17,
    groupCount: 12,
    focalLengthMm: { marketing: [18, 35], design: [18.601515422467557, 33.77892644338183] },
    fNumber: { marketing: 1.8, design: 1.86 },
  },

  source: {
    patentNumber: "JP 2014-89365 A",
    patentYear: 2014,
    authors: ["Ryo Shioda"],
    assignees: ["Sigma Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.772501,
      vd: 49.47,
      focalLengthMm: -41.64048866117594,
      glass: "M-TAF1 (HOYA catalog equivalent; supplier unconfirmed)",
      role: "Front negative meniscus of G1A",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.772501,
      vd: 49.47,
      focalLengthMm: -238.53547822437528,
      glass: "M-TAF1 (HOYA catalog equivalent; supplier unconfirmed)",
      role: "Second negative meniscus of G1A",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.496997,
      vd: 81.61,
      focalLengthMm: -70.6467552345233,
      glass: "FCD1 (HOYA catalog equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "FCD1 / S-FPL51-class fluorophosphate crown inferred from nd/vd; one of the five SLD positions in Sigma's construction diagram. The patent publishes no partial dispersion.",
      role: "Negative member of G1A cemented doublet",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.910822,
      vd: 35.25,
      focalLengthMm: 45.390664721407845,
      glass: "TAFD35 (HOYA catalog equivalent; supplier unconfirmed)",
      role: "Positive member of G1A cemented doublet",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.62588,
      vd: 35.74,
      focalLengthMm: -39.657013514313505,
      glass: "E-F1 (HOYA catalog equivalent; supplier unconfirmed)",
      role: "Negative member of translating G1B focus doublet",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: 69.7074304491198,
      glass: "TAFD55 (HOYA catalog equivalent; supplier unconfirmed)",
      role: "Positive member of translating G1B focus doublet",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.592824,
      vd: 68.62,
      focalLengthMm: 73.43747924795352,
      glass: "FCD505 (HOYA catalog equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "FCD505-class fluorophosphate crown inferred from nd/vd; one of the five SLD positions in Sigma's construction diagram. The patent publishes no partial dispersion.",
      role: "First positive singlet of G2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.592014,
      vd: 67.02,
      focalLengthMm: 116.04332436150689,
      glass: "M-PCD51 (HOYA catalog equivalent; supplier unconfirmed)",
      role: "Second positive singlet of G2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.62588,
      vd: 35.74,
      focalLengthMm: -47.13872609448132,
      glass: "E-F1 (HOYA catalog equivalent; supplier unconfirmed)",
      role: "Negative member of G2 cemented doublet",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.592824,
      vd: 68.62,
      focalLengthMm: 37.11935996109328,
      glass: "FCD505 (HOYA catalog equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "FCD505-class fluorophosphate crown inferred from nd/vd; one of the five SLD positions in Sigma's construction diagram. The patent publishes no partial dispersion.",
      role: "Positive member of G2 cemented doublet",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.81,
      focalLengthMm: -41.26749980957452,
      glass: "TAFD30 (HOYA catalog equivalent; supplier unconfirmed)",
      role: "Negative singlet of G3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.81,
      focalLengthMm: -33.96065522726634,
      glass: "TAFD30 (HOYA catalog equivalent; supplier unconfirmed)",
      role: "Negative member of G3 cemented doublet",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.846663,
      vd: 23.78,
      focalLengthMm: 32.41357678807236,
      glass: "FDS90 (HOYA catalog equivalent; supplier unconfirmed)",
      role: "Positive member of G3 cemented doublet",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.592824,
      vd: 68.62,
      focalLengthMm: 51.90189384334206,
      glass: "FCD505 (HOYA catalog equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "FCD505-class fluorophosphate crown inferred from nd/vd; one of the five SLD positions in Sigma's construction diagram. The patent publishes no partial dispersion.",
      role: "First positive singlet of G4",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.592824,
      vd: 68.62,
      focalLengthMm: 56.50978750377593,
      glass: "FCD505 (HOYA catalog equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "FCD505-class fluorophosphate crown inferred from nd/vd; one of the five SLD positions in Sigma's construction diagram. The patent publishes no partial dispersion.",
      role: "Positive member of G4 cemented doublet",
      cemented: "D5",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.32,
      focalLengthMm: -33.25603884203684,
      glass: "E-FD10 (HOYA catalog equivalent; supplier unconfirmed)",
      role: "Negative member of G4 cemented doublet",
      cemented: "D5",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.592014,
      vd: 67.02,
      focalLengthMm: 52.89922552584327,
      glass: "M-PCD51 (HOYA catalog equivalent; supplier unconfirmed)",
      role: "Double-aspheric positive rear singlet of G4",
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: 120.7191,
      d: 2.5509,
      sd: 26.3,
      medium: 1,
      asphere: { K: 0, A4: 1.03451e-05, A6: -1.27202e-08, A8: 2.05215e-11, A10: -1.96261e-14, A12: 1.10511e-17, A14: 0 },
    },
    { label: "2", R: 25.1654, d: 6.6841, sd: 19.7 },
    {
      label: "3A",
      R: 46.087,
      d: 1.8,
      sd: 21.1,
      medium: 2,
      asphere: { K: 0, A4: -6.85012e-06, A6: 4.35386e-09, A8: 1.44463e-12, A10: -2.05685e-14, A12: 0, A14: 0 },
    },
    { label: "4", R: 36.2389, d: 6.8331, sd: 18 },
    { label: "5", R: -120.863, d: 1.3, sd: 19.7, medium: 3 },
    { label: "6", R: 49.6643, d: 6.2827, sd: 19.7, medium: 4 },
    { label: "7", R: -231.8638, sd: 19.7 },
    { label: "8", R: -41.6754, d: 1.0, sd: 17, medium: 5 },
    { label: "9", R: 61.9382, d: 3.9456, sd: 18.3, medium: 6 },
    { label: "10", R: 533.7643, sd: 18.3 },
    { label: "11", R: 83.3333, d: 5.8519, sd: 20, medium: 7 },
    { label: "12", R: -88.7772, d: 0.15, sd: 20 },
    { label: "13", R: 101.7274, d: 4.1642, sd: 20, medium: 8 },
    {
      label: "14A",
      R: -208.3744,
      d: 1.2631,
      sd: 18.6,
      asphere: { K: 0, A4: 3.14234e-06, A6: 5.54133e-10, A8: 1.95897e-13, A10: -2.18362e-16, A12: 2.19082e-19, A14: 0 },
    },
    { label: "15", R: -218.434, d: 1.2, sd: 20, medium: 9 },
    { label: "16", R: 34.1825, d: 11.473, sd: 20, medium: 10 },
    { label: "17", R: -54.0541, sd: 20 },
    { label: "STO", R: "flat", d: 4.0516 },
    { label: "19", R: -42.8265, d: 1.0, sd: 13.3, medium: 11 },
    { label: "20", R: 246.9982, d: 1.2877, sd: 12.3 },
    { label: "21", R: -90.4816, d: 1.0, sd: 14.1, medium: 12 },
    { label: "22", R: 45.0845, d: 6.3331, sd: 14.1, medium: 13 },
    { label: "23", R: -65.6186, sd: 14.1 },
    { label: "24", R: 66.5586, d: 5.2037, sd: 14.9, medium: 14 },
    { label: "25", R: -55.5556, d: 0.7186, sd: 14.9 },
    { label: "26", R: 96.7931, d: 5.0907, sd: 15.1, medium: 15 },
    { label: "27", R: -50.229, d: 1.0, sd: 15.1, medium: 16 },
    { label: "28", R: 47.1616, d: 0.539, sd: 13.9 },
    {
      label: "29A",
      R: 51.4166,
      d: 5.2229,
      sd: 15.3,
      medium: 17,
      asphere: { K: 0, A4: -3.4422e-06, A6: -1.30154e-08, A8: -2.18115e-11, A10: 2.94095e-13, A12: -2.27675e-15, A14: 0 },
    },
    {
      label: "30A",
      R: -77.0861,
      sd: 15.3,
      asphere: { K: 0, A4: 1.05505e-06, A6: -1.49903e-08, A8: -5.09164e-13, A10: 1.94265e-13, A12: -1.99038e-15, A14: 0 },
    },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 18.6, closeFocusM: 0.2799999, label: "Wide" },
      { focalLengthMm: 26.02, closeFocusM: 0.2800001 },
      { focalLengthMm: 33.78, closeFocusM: 0.2800012, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 0.2799999,
    keyframes: [0, 1],
    description:
      "PUBLISHED: G1B (L5–L6) moves objectward; all infinity/111.5000 mm first-vertex object-distance states retained at three zoom stations. closeFocusM uses object-to-image distance. Intermediate slider spacing is linear interpolation, not a recovered cam law. Tiny printed BF/total-track variations are retained.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 111.5,
        distanceReference: "first-surface",
        source:
          "JP2014089365A Numerical Example 1, PDF p16 / printed p15, paragraph0091 variable-spacing table: d0=111.5000 mm at this published close-focus zoom station; all source gap/BF values retained.",
      },
      {
        zoomStation: 1,
        keyframe: 1,
        objectDistanceMm: 111.5,
        distanceReference: "first-surface",
        source:
          "JP2014089365A Numerical Example 1, PDF p16 / printed p15, paragraph0091 variable-spacing table: d0=111.5000 mm at this published close-focus zoom station; all source gap/BF values retained.",
      },
      {
        zoomStation: 2,
        keyframe: 1,
        objectDistanceMm: 111.5,
        distanceReference: "first-surface",
        source:
          "JP2014089365A Numerical Example 1, PDF p16 / printed p15, paragraph0091 variable-spacing table: d0=111.5000 mm at this published close-focus zoom station; all source gap/BF values retained.",
      },
    ],
  },

  gaps: {
    "7": {
      label: "D7",
      values: [
        [12.3772, 4.6883],
        [12.3772, 4.6895],
        [12.3772, 4.69],
      ],
    },
    "10": {
      label: "D10",
      values: [
        [16.9843, 24.6732],
        [6.7136, 14.3989],
        [1.5, 9.1871],
      ],
    },
    "17": {
      label: "D17",
      values: [
        [1.0, 1.0],
        [14.7583, 14.7583],
        [27.5708, 27.5708],
      ],
    },
    "23": {
      label: "D23",
      values: [
        [13.6327, 13.6327],
        [9.4046, 9.4046],
        [1.2, 1.2],
      ],
    },
    "30A": {
      label: "BF",
      values: [
        [38.56, 38.5598],
        [39.3005, 39.3029],
        [39.9062, 39.9074],
      ],
    },
  },

  aperture: { nominalFNumber: 1.86, fStops: [1.86, 2, 2.8, 4, 5.6, 8, 11, 16], maxFNumber: 16, blades: 9 },

  groups: [
    { text: "G1A", fromSurface: "1A", toSurface: "7" },
    { text: "G1B", fromSurface: "8", toSurface: "10" },
    { text: "G2", fromSurface: "11", toSurface: "17" },
    { text: "G3", fromSurface: "STO", toSurface: "23" },
    { text: "G4", fromSurface: "24", toSurface: "30A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "15", toSurface: "17" },
    { text: "D4", fromSurface: "21", toSurface: "23" },
    { text: "D5", fromSurface: "26", toSurface: "28" },
  ],

  layout: { scFill: 0.55, yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
