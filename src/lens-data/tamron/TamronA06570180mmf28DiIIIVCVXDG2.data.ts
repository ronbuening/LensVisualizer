/*
A065-only approved exception: gapSagFrac=0.94, with inferred SDs
13/14/27/28A/29A = 14.25/14.21/14.54/14.90/14.92 mm.
Only air gap 13–14 may exceed the ordinary 0.90 fraction; all other air gaps retain the ordinary 0.90 limit.
The tight gap retains 0.255102 mm of geometric air. Source values and inferred iris model are unchanged.
JP2025033505A Numerical Example 1. Source values at native scale, no marketing normalization.
20 physical elements / 15 air groups; 21 material entries retain the 0.2000 mm resin on L20.
Camera cover surfaces 38–39 retained physically in rearPlates; source s37 gap is 17.2805 mm.
Five aspherical surfaces; rendered equation is standard (1+k), K=k, A14=0 padding.
Source 850 mm finite states preserved at all three zoom stations, including measured paraxial defocus.
G4 is the inner-focus doublet; G3/G4 zoom positions reverse. Continuous linear interpolation is a UI
approximation, not a published cam law. VC subgroup L12–L13 is centered, without invented lateral motion.
SDs are estimated from JP2025033505A FIG. 1 (PDF p. 34, wide end at infinity) proportions and exact ray/geometry
checks, not mechanical dimensions. The 2026-10-06 figure re-measurements (13.861 px/mm at the 318 dpi native raster;
rims read on both sides at line centres, the elements being centred 2 px off the drawn axis) put every drawn outer
rim except L20's within 2 % of that element's larger stored SD. The final review then set two figure-led rims.
L20 follows the drawn hybrid outline: FIG. 1 ends the concave resin face at a flat seat (35A at 14.55 mm, junction 36
at 14.8 mm, stroke edge 15.0 mm) and carries the rear face to 17.03 mm. 35A/36 = 15.0 mm is the smallest 0.1 mm
value outside every transmitted ray sampled to the corner (maxima 14.90 / 14.92 mm) and 37 = 17.0 mm is the drawn
rim; all three were 16.4 mm, the last 0.1 mm step with positive resin thickness. The resin is now 0.143034573 mm
thick at its rim. Surface 36, not 37, now bounds the engine half-fields: 18.3348 / 11.3124 / 7.6777 deg (were
18.3256 / 11.2159 / 7.6308). L6's nearly flat front face 10 = 15.5 mm equals its rear (was 14.95 mm); the 9-10
shared band stays 14.95 mm. The renderer joins unequal rims with a straight edge, so the drawn seats of L5, L8, L10
and L20 appear as chamfers.
The iris schedule is inferred from published F-numbers, not published diaphragm radii.
Glass labels are coordinate-equivalent catalog classes (HOYA; HIKARI for 1.61266/44.46 and 1.85108/40.12),
not manufacturer/melt identity; the resin stays unmatched and no nC/nF/ng/dPgF is inferred.
This is a research construction correlation, not a manufacturer-confirmed production prescription.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "tamron-a065-70-180mm-f28-di-iii-vc-vxd-g2",
  maker: "Tamron",
  name: "TAMRON 70-180mm f/2.8 Di III VC VXD G2",
  subtitle: "JP 2025-033505 A — Numerical Example 1; research construction correlation",

  catalog: {
    lensMounts: ["sony-fe", "nikon-z"],
    imageFormat: "135-full-frame",
    specs: [
      "20 ELEMENTS / 15 GROUPS",
      "DESIGN f = 72.07–174.65 mm",
      "DESIGN F/2.91",
      "5 ASPHERICAL SURFACES / 3 ELEMENTS",
      "1 XLD + 3 LD (INFERRED)",
    ],
    elementCount: 20,
    groupCount: 15,
    focalLengthMm: { marketing: [70, 180], design: [72.06720166247909, 174.65423913998802] },
    fNumber: { marketing: 2.8, design: 2.9104 },
  },

  source: {
    patentNumber: "JP 2025-033505 A",
    patentYear: 2025,
    authors: ["Hisayuki Yamanaka"],
    assignees: ["Tamron Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.27,
      focalLengthMm: -226.681344,
      glass: "NBFD15-W (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "G1 (P): negative meniscus cemented in front of L2 (doublet D1).",
      diagramLabel: "L1",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 161.214496,
      glass: "FCD1 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "LD-class inference from the coordinate-compatible FCD1 curve (catalogue ΔPgF ≈ +0.031); counted among Tamron's three LD elements by construction match. The patent prints only Nd and νd and names no special glass.",
      role: "G1 (P): biconvex positive member of cemented doublet D1.",
      diagramLabel: "L2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 198.671738,
      glass: "FCD100 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "XLD-class inference from the coordinate-compatible FCD100 curve (catalogue ΔPgF ≈ +0.050); taken as Tamron's single XLD element by construction match. The patent prints only Nd and νd and names no special glass.",
      role: "G1 (P): separate positive meniscus closing the front group.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Positive Meniscus",
      nd: 1.85883,
      vd: 30.0,
      focalLengthMm: 60.123659,
      glass: "NBFD30 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "G2 (M1): leading positive meniscus of the negative second group.",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Negative Meniscus",
      nd: 1.755,
      vd: 52.32,
      focalLengthMm: -35.464462,
      glass: "TAC6L (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "G2 (M1): first negative meniscus, with the strongly curved rear face.",
      diagramLabel: "L5",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: -78.900439,
      glass: "TAC8 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "G2 (M1): second negative meniscus, nearly flat front face.",
      diagramLabel: "L6",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 59.229709,
      glass: "FDS90-SG (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "G2 (M1): positive meniscus ahead of the tight 13–14 air gap.",
      diagramLabel: "L7",
    },
    {
      id: 8,
      name: "L8",
      label: "L8",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.46,
      focalLengthMm: -53.859163,
      glass: "TAFD40L-W (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "G2 (M1): negative meniscus, concave toward the object, closing the group.",
      diagramLabel: "L8",
    },
    {
      id: 9,
      name: "L9",
      label: "L9",
      type: "Positive Meniscus",
      nd: 1.7433,
      vd: 49.22,
      focalLengthMm: 54.470229,
      glass: "NBF1 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "G3 (M2): positive meniscus directly behind the aperture stop S.",
      diagramLabel: "L9",
    },
    {
      id: 10,
      name: "L10",
      label: "L10",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.46,
      focalLengthMm: -39.418811,
      glass: "TAFD40L-W (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "G3 (M2): negative meniscus cemented in front of L11 (doublet D2).",
      diagramLabel: "L10",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "L11",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 37.145466,
      glass: "FCD515 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "LD-class inference from the coordinate-compatible FCD515 curve (catalogue ΔPgF ≈ +0.016); counted among Tamron's three LD elements by construction match. The patent prints only Nd and νd and names no special glass.",
      role: "G3 (M2): positive meniscus of cemented doublet D2.",
      diagramLabel: "L11",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L12",
      label: "L12",
      type: "Biconcave Negative",
      nd: 1.61266,
      vd: 44.46,
      focalLengthMm: -34.481017,
      glass: "J-KZFH1 (HIKARI coordinate-equivalent class; supplier unconfirmed)",
      role: "G3 (M2): biconcave front member of the cemented vibration-compensation subgroup V (doublet D3), which the patent shifts perpendicular to the axis.",
      diagramLabel: "L12",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.85451,
      vd: 25.15,
      focalLengthMm: 65.515749,
      glass: "NBFD25 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "G3 (M2): positive meniscus of the vibration-compensation subgroup V (doublet D3).",
      diagramLabel: "L13",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L14",
      label: "L14",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 26.911271,
      glass: "FCD515 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "LD-class inference from the coordinate-compatible FCD515 curve (catalogue ΔPgF ≈ +0.016); counted among Tamron's three LD elements by construction match. The patent prints only Nd and νd and names no special glass.",
      role: "G3 (M2): biconvex positive member of cemented doublet D4.",
      diagramLabel: "L14",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L15",
      label: "L15",
      type: "Biconcave Negative",
      nd: 1.8707,
      vd: 40.73,
      focalLengthMm: -26.163938,
      glass: "TAFD32 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "G3 (M2): biconcave negative member of cemented doublet D4.",
      diagramLabel: "L15",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L16",
      label: "L16",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.85108,
      vd: 40.12,
      focalLengthMm: 33.14334,
      glass: "Q-LASFH58S (HIKARI coordinate-equivalent class; supplier unconfirmed)",
      role: "G3 (M2): biconvex element with both faces aspherical; the patent calls it a glass-molded asphere.",
      diagramLabel: "L16",
    },
    {
      id: 17,
      name: "L17",
      label: "L17",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: 80.218113,
      glass: "E-FDS1-W (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "G4 (F): biconvex front member of the cemented focusing doublet D5, which moves toward the image for near focus.",
      diagramLabel: "L17",
      cemented: "D5",
    },
    {
      id: 18,
      name: "L18",
      label: "L18",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: -30.813379,
      glass: "TAC8 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "G4 (F): biconcave rear member of the cemented focusing doublet D5.",
      diagramLabel: "L18",
      cemented: "D5",
    },
    {
      id: 19,
      name: "L19",
      label: "L19",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58313,
      vd: 59.46,
      focalLengthMm: 68.321068,
      glass: "M-BACD12 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "G5 (R): biconvex element with both faces aspherical, in the rear group that stays fixed during zoom.",
      diagramLabel: "L19",
    },
    {
      id: 20,
      name: "L20r",
      label: "L20 resin",
      type: "Negative Meniscus (1× Asph, resin)",
      nd: 1.5361,
      vd: 41.21,
      focalLengthMm: -505.512786,
      glass: "Unmatched (hybrid resin; no compatible HOYA coordinate)",
      role: "G5 (R): 0.2 mm aspherical resin layer bonded to the object side of L20 (hybrid asphere H1); not a separate lens.",
      diagramLabel: "L20r",
      cemented: "H1",
    },
    {
      id: 21,
      name: "L20",
      label: "L20 substrate",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.31,
      focalLengthMm: -53.132439,
      glass: "TAFD25L (HOYA coordinate-equivalent class; supplier unconfirmed)",
      role: "G5 (R): glass substrate of the hybrid aspherical negative meniscus L20, concave toward the object.",
      diagramLabel: "L20",
      cemented: "H1",
    },
  ],

  surfaces: [
    { label: "1", R: 155.5198, d: 1.5, sd: 32, medium: 1 },
    { label: "2", R: 83.6531, d: 7.1965, sd: 32, medium: 2 },
    { label: "3", R: -1844.7834, d: 0.2, sd: 32 },
    { label: "4", R: 73.3988, d: 6.9834, sd: 31, medium: 3 },
    { label: "5", R: 461.0825, sd: 31 },
    { label: "6", R: 47.5905, d: 4.6723, sd: 18.8, medium: 4 },
    { label: "7", R: 579.8823, d: 0.7769, sd: 18.8 },
    { label: "8", R: 195.9849, d: 1.2, sd: 17.4, medium: 5 },
    { label: "9", R: 23.4952, d: 5.8813, sd: 14.95 },
    { label: "10", R: 952.5687, d: 1.0, sd: 15.5, medium: 6 },
    { label: "11", R: 54.2303, d: 0.2, sd: 15.5 },
    { label: "12", R: 33.1087, d: 3.6676, sd: 15.8, medium: 7 },
    { label: "13", R: 92.4947, d: 3.7917, sd: 14.25 },
    { label: "14", R: -42.622, d: 1.0, sd: 14.21, medium: 8 },
    { label: "15", R: -206.1433, sd: 15.8 },
    { label: "STO", R: "flat", d: 1.0 },
    { label: "17", R: 38.511, d: 4.9076, sd: 17, medium: 9 },
    { label: "18", R: 745.9337, d: 0.9873, sd: 17 },
    { label: "19", R: 44.9383, d: 1.0, sd: 16.2, medium: 10 },
    { label: "20", R: 20.7729, d: 6.9899, sd: 15.5, medium: 11 },
    { label: "21", R: 320.7119, d: 3.1443, sd: 15.5 },
    { label: "22", R: -110.539, d: 0.9, sd: 15, medium: 12 },
    { label: "23", R: 26.197, d: 3.2065, sd: 15, medium: 13 },
    { label: "24", R: 46.4599, d: 1.35, sd: 15 },
    { label: "25", R: 43.7334, d: 8.0145, sd: 14.5, medium: 14 },
    { label: "26", R: -23.4024, d: 1.1, sd: 14.5, medium: 15 },
    { label: "27", R: 876.6337, d: 1.5574, sd: 14.54 },
    {
      label: "28A",
      R: 68.9746,
      d: 4.7794,
      sd: 14.9,
      medium: 16,
      asphere: { K: 0, A4: -6.97969e-06, A6: -2.19527e-09, A8: 1.07027e-11, A10: -4.77707e-14, A12: 0, A14: 0 },
    },
    {
      label: "29A",
      R: -46.2047,
      sd: 14.92,
      asphere: { K: 0, A4: 2.77578e-07, A6: -6.55276e-09, A8: 9.34354e-12, A10: -4.50201e-14, A12: 0, A14: 0 },
    },
    { label: "30", R: 1529.6006, d: 2.3821, sd: 13.1, medium: 17 },
    { label: "31", R: -77.7371, d: 0.8, sd: 13.1, medium: 18 },
    { label: "32", R: 31.7386, sd: 13.1 },
    {
      label: "33A",
      R: 107.0583,
      d: 4.9111,
      sd: 16.5,
      medium: 19,
      asphere: { K: 0, A4: 7.58265e-06, A6: -7.72695e-09, A8: 8.97112e-11, A10: -1.49928e-13, A12: 0, A14: 0 },
    },
    {
      label: "34A",
      R: -62.381,
      d: 15.4427,
      sd: 16.5,
      asphere: { K: 0, A4: 4.65516e-06, A6: -1.27998e-08, A8: 1.10482e-10, A10: -2.0207e-13, A12: 0, A14: 0 },
    },
    {
      label: "35A",
      R: -22.0,
      d: 0.2,
      sd: 15,
      medium: 20,
      asphere: { K: 0, A4: 1.14513e-05, A6: 1.2741e-09, A8: 6.82309e-11, A10: -1.12878e-13, A12: 0, A14: 0 },
    },
    { label: "36", R: -24.0197, d: 1.7, sd: 15, medium: 21 },
    { label: "37", R: -49.68, d: 17.2805, sd: 17 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 72.0664, nominalFNumber: 2.9104 },
      { focalLengthMm: 120.0114, nominalFNumber: 2.9109 },
      { focalLengthMm: 174.6514, nominalFNumber: 2.9103 },
    ],
  },

  focus: {
    closeFocusM: 0.85,
    keyframes: [0, 1],
    description:
      "Inner focus by G4 (patent group F, cemented L17–L18): it moves toward the image from infinity to the published 0.85 m object-to-image states, by 2.27 / 6.46 / 12.67 mm at wide / middle / tele. Interpolated paths are not a factory cam law. Production 0.3 m wide-end spacings are unavailable.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 678,
        distanceReference: "first-surface",
        source:
          "JP2025033505A Example 1 Tables 1, 3 and 4, source 850 mm finite configurations; nonzero paraxial defocus retained.",
      },
      {
        zoomStation: 1,
        keyframe: 1,
        objectDistanceMm: 660.9517,
        distanceReference: "first-surface",
        source:
          "JP2025033505A Example 1 Tables 1, 3 and 4, source 850 mm finite configurations; nonzero paraxial defocus retained.",
      },
      {
        zoomStation: 2,
        keyframe: 1,
        objectDistanceMm: 652.1316,
        distanceReference: "first-surface",
        source:
          "JP2025033505A Example 1 Tables 1, 3 and 4, source 850 mm finite configurations; nonzero paraxial defocus retained.",
      },
    ],
  },

  gaps: {
    "5": {
      label: "D(5)",
      values: [
        [2.0014, 2.0014],
        [35.8998, 35.8998],
        [53.1842, 53.1842],
      ],
    },
    "15": {
      label: "D(15)",
      values: [
        [27.1298, 27.1298],
        [12.8263, 12.8263],
        [2.0, 2.0],
      ],
    },
    "29A": {
      label: "D(29)",
      values: [
        [5.1074, 7.3781],
        [5.4809, 11.9435],
        [2.4998, 15.174],
      ],
    },
    "32": {
      label: "D(32)",
      values: [
        [14.5385, 12.2679],
        [11.6183, 5.1557],
        [16.9614, 4.2873],
      ],
    },
  },

  aperture: { fStops: [2.9104, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  rearPlates: [
    {
      label: "CG",
      thicknessMm: 2.5,
      nd: 1.5168,
      vd: 64.2,
      glass: "BSC7 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      gapAfterMm: 1,
      source: "JP2025033505A Example 1 Table 1, surfaces 38–39; paragraph 0107 identifies camera cover glass.",
    },
  ],

  groups: [
    { text: "G1 (P)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (M1)", fromSurface: "6", toSurface: "15" },
    { text: "G3 (M2)", fromSurface: "STO", toSurface: "29A" },
    { text: "G4 (F)", fromSurface: "30", toSurface: "32" },
    { text: "G5 (R)", fromSurface: "33A", toSurface: "37" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "19", toSurface: "21" },
    { text: "D3 (V)", fromSurface: "22", toSurface: "24" },
    { text: "D4", fromSurface: "25", toSurface: "27" },
    { text: "D5", fromSurface: "30", toSurface: "32" },
    { text: "H1", fromSurface: "35A", toSurface: "37" },
  ],

  layout: { yScFill: 0.65 },

  checks: { gapSagFrac: 0.94 },
} satisfies LensDataV2Input;

export default LENS_DATA;
