import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 5,717,527, Embodiment 6 (Table 7, Fig. 36). Kept at the patent's scale.
 * All 33 surface rows and the six wide, middle and telephoto states follow the printed prescription. S20
 * opens into air. The stop is S23, 1 mm ahead of L13, and moves with the rear assembly. Its diameter is
 * calculated from the published f-numbers because the patent gives no iris diameter.
 *
 * The five front elements advance 34.55051 mm to focus at 0.37 m. The next four elements stay put. To zoom
 * toward telephoto, the negative variator moves toward the image and the rear assembly moves forward.
 * Fig. 36 calls the first two assemblies G11 and G12, together G1. The diagram uses Nikon's four-assembly labels.
 *
 * Clear radii follow the rims drawn in Fig. 36 and Nikon's Tale 18 section as closely as the spherical surfaces
 * and printed gaps allow. S2 and S6 retain drawn lands. S3/S4 and S20/S21 use smaller shared radii for gap
 * clearance. The full iris clears on axis from infinity to 0.37 m throughout the zoom range.
 *
 * The drawing, construction and L8 ED placement tie this example to the production lens. The exact factory
 * prescription and glass identities are unverified. Only L14 and L16 use catalog dispersion curves.
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-af-zoom-micro-70-180mm-f45-56d",
  maker: "Nikon",
  name: "NIKON AF ZOOM-MICRO NIKKOR 70-180mm f/4.5-5.6 D ED",
  subtitle: "US 5,717,527, Embodiment 6 (Table 7) — Nikon / Shibayama",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "18 ELEMENTS / 14 GROUPS",
      "DESIGN f = 72.05–174.60 mm",
      "DESIGN F/4.45–5.81",
      "1 ED ELEMENT",
      "ALL SPHERICAL",
      "0.37 m MINIMUM FOCUS",
      "62 mm FILTER THREAD",
    ],
    elementCount: 18,
    groupCount: 14,
    focalLengthMm: { marketing: [70, 180], design: [72.05204, 174.6] },
    fNumber: { marketing: 4.5, design: 4.45 },
    closeFocusM: { marketing: 0.37 },
  },

  source: {
    patentNumber: "US 5,717,527",
    example: { label: "Embodiment 6", id: "6" },
    sdSource: "figure-measured",
    patentYear: 1998,
    authors: ["Atsushi Shibayama"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7847,
      vd: 26.05,
      focalLengthMm: -115.4,
      glass: "Unmatched (785261 dense flint)",
      role: "Front negative meniscus of the focusing assembly.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.80458,
      vd: 25.5,
      focalLengthMm: 63.0,
      glass: "Unmatched (805255 dense flint)",
      role: "Positive lens behind L1 in the front part of the focusing assembly.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.64,
      vd: 60.03,
      focalLengthMm: -85.8,
      glass: "Unmatched (640600 crown)",
      role: "Negative meniscus in the rear part of the focusing assembly.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.80384,
      vd: 33.89,
      focalLengthMm: -75.3,
      glass: "Unmatched (804339 high-index glass, dispersion unverified)",
      role: "Second negative meniscus in the rear part of the focusing assembly.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.74001,
      vd: 28.19,
      focalLengthMm: 160.2,
      glass: "Unmatched (740282 dense flint)",
      role: "Weak positive meniscus behind L3 and L4.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.77278,
      vd: 49.45,
      focalLengthMm: 84.8,
      glass: "Unmatched (773495 high-index crown)",
      role: "First positive lens in the stationary second assembly.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.74,
      vd: 28.19,
      focalLengthMm: -73.0,
      glass: "Unmatched (740282 dense flint)",
      role: "Negative member of the first cemented doublet.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 61.9,
      glass: "Unmatched (498825 ED-class glass)",
      apd: "inferred",
      apdNote:
        "Nikon’s Tale 18, Fig. 1 identifies L8 as ED. Table 7 gives νd = 82.52 and gives no partial-dispersion value.",
      role: "ED-class positive member of the first cemented doublet.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.64,
      vd: 60.03,
      focalLengthMm: 184.0,
      glass: "Unmatched (640600 crown)",
      role: "Positive meniscus at the rear of the second assembly.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.77278,
      vd: 49.45,
      focalLengthMm: -38.5,
      glass: "Unmatched (773495 high-index crown)",
      role: "Biconcave member of the negative variator doublet.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.80458,
      vd: 25.5,
      focalLengthMm: 52.6,
      glass: "Unmatched (805255 dense flint)",
      role: "Positive member of the negative variator doublet.",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.6,
      focalLengthMm: -64.0,
      glass: "Unmatched (697556 lanthanum crown, dispersion unverified)",
      role: "Negative singlet immediately ahead of the variable gap to the stop.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.64,
      vd: 60.03,
      focalLengthMm: 72.7,
      glass: "Unmatched (640600 crown)",
      role: "Positive singlet immediately behind the stop.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.41,
      focalLengthMm: 35.1,
      glass: "N-FK5 (Schott, catalog optical equivalent)",
      role: "Front positive member of the rear cemented triplet.",
      cemented: "T1",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.80384,
      vd: 33.89,
      focalLengthMm: -23.5,
      glass: "Unmatched (804339 high-index glass, dispersion unverified)",
      role: "Negative center member of the rear cemented triplet.",
      cemented: "T1",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.41,
      focalLengthMm: 110.5,
      glass: "N-FK5 (Schott, catalog optical equivalent)",
      role: "Rear positive member of the rear cemented triplet.",
      cemented: "T1",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.74,
      vd: 28.19,
      focalLengthMm: 49.8,
      glass: "Unmatched (740282 dense flint)",
      role: "Positive singlet behind the triplet.",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Negative Meniscus",
      nd: 1.79668,
      vd: 45.37,
      focalLengthMm: -40.6,
      glass: "Unmatched (797454 high-index glass)",
      role: "Final negative meniscus.",
    },
  ],

  surfaces: [
    { label: "1", R: 89.0624, d: 2.5, sd: 27.4, medium: 1 },
    { label: "2", R: 44.3511, d: 3.6, sd: 26.1, rimExtensionSd: 27.4 },
    { label: "3", R: 78.0116, d: 8.2, sd: 23.9, medium: 2 },
    { label: "4", R: -138.0643, d: 0.1, sd: 23.9 },
    { label: "5", R: 206.1362, d: 1.8, sd: 23.1, medium: 3 },
    { label: "6", R: 43.1948, d: 10.1, sd: 20.5, rimExtensionSd: 23.1 },
    { label: "7", R: -49.195, d: 1.8, sd: 19.8, medium: 4 },
    { label: "8", R: -267.1119, d: 0.1, sd: 20.2 },
    { label: "9", R: 80.6103, d: 3.7, sd: 20.2, medium: 5 },
    { label: "10", R: 246.9456, sd: 20.2 },
    { label: "11", R: 84.8796, d: 4.5, sd: 19.6, medium: 6 },
    { label: "12", R: -280.3481, d: 0.1, sd: 19.6 },
    { label: "13", R: 101.6075, d: 1.8, sd: 19.6, medium: 7 },
    { label: "14", R: 34.993, d: 7.6, sd: 18.8, medium: 8 },
    { label: "15", R: -238.623, d: 0.1, sd: 18.8 },
    { label: "16", R: 72.6182, d: 3.5, sd: 18.2, medium: 9 },
    { label: "17", R: 185.8599, sd: 18.2 },
    { label: "18", R: -1893.6103, d: 1.4, sd: 13.8, medium: 10 },
    { label: "19", R: 30.249, d: 3.9, sd: 13.2, medium: 11 },
    { label: "20", R: 99.9829, d: 1.8, sd: 12.34 },
    { label: "21", R: -89.5, d: 1.4, sd: 12.34, medium: 12 },
    { label: "22", R: 89.5, sd: 13.2 },
    { label: "STO", R: "flat", d: 1.0 },
    { label: "24", R: 147.69, d: 3.2, sd: 13.4, medium: 13 },
    { label: "25", R: -67.3328, d: 0.1, sd: 13.4 },
    { label: "26", R: 29.1657, d: 7.1, sd: 12.9, medium: 14 },
    { label: "27", R: -38.135, d: 1.4, sd: 12.9, medium: 15 },
    { label: "28", R: 38.135, d: 3.1, sd: 12.9, medium: 16 },
    { label: "29", R: 127.1342, d: 15.6, sd: 12.0 },
    { label: "30", R: 411.4923, d: 3.7, sd: 12.8, medium: 17 },
    { label: "31", R: -40.2846, d: 15.65, sd: 12.8 },
    { label: "32", R: -24.4631, d: 1.4, sd: 11.9, medium: 18 },
    { label: "33", R: -102.6504, sd: 11.9 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 72.05204, nominalFNumber: 4.45, label: "72.05 mm", published: true, publishedFocus: [1] },
      { focalLengthMm: 105.0, nominalFNumber: 5.01, label: "105 mm", published: true, publishedFocus: [1] },
      { focalLengthMm: 174.6, nominalFNumber: 5.81, label: "174.60 mm", published: true, publishedFocus: [1] },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.37,
    description:
      "The five front elements move forward together by 34.55 mm to focus at 0.37 m throughout the zoom range.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 370,
        distanceReference: "image-plane",
        source:
          "US 5,717,527, Embodiment 6, Table 7, PDF p.68, closest photographing at the wide angle end: R 370.00000 mm.",
      },
      {
        zoomStation: 1,
        keyframe: 1,
        objectDistanceMm: 370,
        distanceReference: "image-plane",
        source:
          "US 5,717,527, Embodiment 6, Table 7, PDF p.68, closest photographing at the intermediate position: R 370.00000 mm.",
      },
      {
        zoomStation: 2,
        keyframe: 1,
        objectDistanceMm: 370,
        distanceReference: "image-plane",
        source:
          "US 5,717,527, Embodiment 6, Table 7, PDF p.68, closest photographing at the telephoto end: R 370.00000 mm.",
      },
    ],
  },

  gaps: {
    "10": {
      label: "D10 / Focus",
      values: [
        [2.63, 37.18051],
        [2.63, 37.18051],
        [2.63, 37.18051],
      ],
    },
    "17": {
      label: "D17",
      values: [
        [2.7, 2.7],
        [10.73027, 10.73027],
        [20.52761, 20.52761],
      ],
    },
    "22": {
      label: "D22",
      values: [
        [43.91, 43.91],
        [26.44398, 26.44398],
        [2.65425, 2.65425],
      ],
    },
    "33": {
      label: "B.f.",
      values: [
        [50.62048, 50.62048],
        [60.05622, 60.05622],
        [74.04862, 74.04862],
      ],
    },
  },

  aperture: { fStops: [4.5, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  groups: [
    { text: "G1 focus (−)", fromSurface: "1", toSurface: "10" },
    { text: "G2 relay (+)", fromSurface: "11", toSurface: "17" },
    { text: "G3 variator (−)", fromSurface: "18", toSurface: "22" },
    { text: "G4 compensator (+)", fromSurface: "24", toSurface: "33" },
  ],
  doublets: [
    { text: "D1", fromSurface: "13", toSurface: "15" },
    { text: "D2", fromSurface: "18", toSurface: "20" },
    { text: "T1", fromSurface: "26", toSurface: "29" },
  ],

  layout: { svgW: 1180, svgH: 500, scFill: 0.72, yScFill: 0.72, maxAspectRatio: 2.1 },
} satisfies LensDataV2Input;

export default LENS_DATA;
