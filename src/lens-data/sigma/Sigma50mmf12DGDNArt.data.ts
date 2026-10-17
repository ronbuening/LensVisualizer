import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP 2025-124346 A, Numerical Example 1. 17 elements / 12 groups.
 * Construction correlation with Sigma 50mm F1.2 DG DN Art; factory prescription unconfirmed.
 * LIMITED FIXED-IRIS MODEL: source near F/1.38 is retained as UNREPRODUCED.
 * Source focus spacings are preserved; no focus-dependent iris law is implemented.
 * Inferred S21 clear radius is 19.0 mm (formerly 18.7 mm); all other prescription values unchanged.
 * Actual current-pupil/default-tracking normal fans have no axial or first cement clips.
 * Wider physical-pupil tests still first-clip at cement S14. Full-pupil finite/off-axis
 * performance and all-azimuth clearance are NOT certified. Post-clip paths are not transmission.
 * Native d-line prescription; no scaling, omissions, invented plates or coefficient orders.
 * Focus PUBLISHED: infinity and source 395 mm test state. Intermediate movement is linear only.
 * Other clear apertures inferred from Figure 1 and ray/geometry checks; stop radius derived
 * from the design f-number f/1.24 at infinity (entrance-pupil radius EFL/(2*1.24)),
 * not a published physical diameter.
 * NOTE ON SEMI-DIAMETERS: estimated from JP 2025-124346 A FIG. 1 (PDF p24) rim heights plus
 * traced clearance; none is source-tabulated. 2026-10-06 figure pass: S28 clear radius
 * 17.5 -> 14.7mm, where the drawn rear bowl of L16 ends (its flat outer annulus is not
 * modeled). No other semi-diameter changed: S2, S11 and S20 keep their outer-rim heights
 * and S29A/S30A stay 15.7mm. Normal-fan and wider-pupil S14 results above are unchanged.
 * 2026-10-06 final review: no semi-diameter changed. The concave faces FIG. 1 draws with a
 * flat annulus (S2, S11, S13, S20) keep the outer-rim height so each element has a square
 * edge; L16 is the one chamfer (S27 17.5 / S28 14.7mm). S22/S23 stay 19.4mm against the
 * drawn 18.6-18.7mm: 18.7mm puts normal-fan first clips on cement S22. S29A/S30A stay
 * 15.7mm against the drawn 16.4mm rim (S30A curve end about 15.2mm): S30A sets the engine
 * half-field estimate, 24.58 deg against the patent's 23.95 deg, and 16.4mm raises it.
 * DIAGRAM LABELS: FIG. 1 names only G2asp (L3), Lp (L10), the air lens AL (S28-S29A gap),
 * stop S and groups G1-G5; L1-L17 and D1-D5 are this file's sequential names.
 * L10 PgF normal-line conversion: patent 0.046934 -> runtime dPgF 0.04951936.
 * Catalog glass names are coordinate equivalents, not identified factory suppliers.
 */
const LENS_DATA = {
  schema: 2,
  key: "sigma-50mm-f12-dg-dn-art",
  maker: "Sigma",
  name: "SIGMA 50mm f/1.2 DG DN | Art",
  subtitle: "JP 2025-124346 A Example 1 — Sigma / Yuki Ueda; construction correlation",

  catalog: {
    lensMounts: ["l-mount", "sony-fe"],
    imageFormat: "135-full-frame",
    imageCircleMm: 43.26,
    specs: [
      "17 ELEMENTS / 12 GROUPS",
      "DESIGN f = 48.27 mm",
      "DESIGN F/1.24",
      "2ω = 47.90°",
      "6 ASPHERICAL SURFACES / 4 ELEMENTS",
    ],
    elementCount: 17,
    groupCount: 12,
    focalLengthMm: { marketing: 50, design: 48.27 },
    fNumber: { marketing: 1.2, design: 1.24 },
  },

  source: {
    patentNumber: "JP 2025-124346 A",
    patentYear: 2025,
    authors: ["Yuki Ueda"],
    assignees: ["Sigma Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.15,
      indexReference: "d",
      focalLengthMm: -75.791007,
      glass: "E-CF6 (HOYA equivalent)",
      role: "Element in G1; power is standalone in air, not an isolated in-situ aberration contribution.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      indexReference: "d",
      focalLengthMm: 67.814991,
      glass: "TAFD55-W (HOYA equivalent)",
      role: "Element in G1; power is standalone in air, not an isolated in-situ aberration contribution.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.7645,
      vd: 49.09,
      indexReference: "d",
      focalLengthMm: 76.308057,
      glass: "L-LAH91 (OHARA equivalent)",
      role: "Patent G2asp, the object-side aspheric positive lens of focus group G2; power is standalone in air, not an isolated in-situ aberration contribution.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.45,
      indexReference: "d",
      focalLengthMm: -158.898069,
      glass: "FF5 (HOYA equivalent)",
      role: "Element in focus group G2, cemented behind G2asp; power is standalone in air, not an isolated in-situ aberration contribution.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Positive Meniscus",
      nd: 2.001,
      vd: 29.13,
      indexReference: "d",
      focalLengthMm: 124.403997,
      glass: "TAFD55-W (HOYA equivalent)",
      role: "Element in G3; power is standalone in air, not an isolated in-situ aberration contribution.",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.45,
      indexReference: "d",
      focalLengthMm: -51.958065,
      glass: "FF5 (HOYA equivalent)",
      role: "Element in G3; power is standalone in air, not an isolated in-situ aberration contribution.",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Biconcave Negative",
      nd: 1.85451,
      vd: 25.15,
      indexReference: "d",
      focalLengthMm: -32.600191,
      glass: "NBFD25 (HOYA equivalent)",
      role: "Element in G3; power is standalone in air, not an isolated in-situ aberration contribution.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "L8",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.32,
      indexReference: "d",
      focalLengthMm: 34.466978,
      glass: "TAC6L (HOYA equivalent)",
      role: "Element in G3; power is standalone in air, not an isolated in-situ aberration contribution.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "L9",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.7645,
      vd: 49.09,
      indexReference: "d",
      focalLengthMm: 58.219219,
      glass: "L-LAH91 (OHARA equivalent)",
      role: "Element in G3; power is standalone in air, not an isolated in-situ aberration contribution.",
    },
    {
      id: 10,
      name: "L10",
      label: "L10",
      type: "Positive Meniscus",
      nd: 1.98612,
      vd: 16.48,
      indexReference: "d",
      focalLengthMm: 58.937234,
      glass: "FDS16-W (HOYA equivalent)",
      apd: "patent",
      apdNote:
        "Patent Lp: condition (2) bounds its anomalous partial dispersion. Patent PgF=0.6656; source-normal-line deviation 0.046934; runtime Schott-normal-line deviation 0.04951936. No measured line indices published.",
      role: "Patent Lp, the high-index positive lens of G3 governed by conditions (2) and (3); power is standalone in air, not an isolated in-situ aberration contribution.",
      cemented: "D3",
      dPgF: 0.04951936,
    },
    {
      id: 11,
      name: "L11",
      label: "L11",
      type: "Biconcave Negative",
      nd: 1.85451,
      vd: 25.15,
      indexReference: "d",
      focalLengthMm: -36.985567,
      glass: "NBFD25 (HOYA equivalent)",
      role: "Element in G3; power is standalone in air, not an isolated in-situ aberration contribution.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "L12",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.32,
      indexReference: "d",
      focalLengthMm: 38.073644,
      glass: "TAC6L (HOYA equivalent)",
      role: "Element in focus group G4; power is standalone in air, not an isolated in-situ aberration contribution.",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.85451,
      vd: 25.15,
      indexReference: "d",
      focalLengthMm: -52.708953,
      glass: "NBFD25 (HOYA equivalent)",
      role: "Element in focus group G4; power is standalone in air, not an isolated in-situ aberration contribution.",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "L14",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.8061,
      vd: 40.73,
      indexReference: "d",
      focalLengthMm: 53.567056,
      glass: "NBFD13 (HOYA equivalent)",
      role: "Element in focus group G4; power is standalone in air, not an isolated in-situ aberration contribution.",
    },
    {
      id: 15,
      name: "L15",
      label: "L15",
      type: "Biconvex Positive",
      nd: 2.00069,
      vd: 25.46,
      indexReference: "d",
      focalLengthMm: 53.976274,
      glass: "TAFD40L-W (HOYA equivalent)",
      role: "Element in G5; power is standalone in air, not an isolated in-situ aberration contribution.",
      cemented: "D5",
    },
    {
      id: 16,
      name: "L16",
      label: "L16",
      type: "Biconcave Negative",
      nd: 1.61396,
      vd: 44.29,
      indexReference: "d",
      focalLengthMm: -32.818488,
      glass: "LAF45 (HOYA equivalent)",
      role: "Element in G5; its rear surface is the object side of the patent's air lens AL. Standalone power in air, not an isolated in-situ aberration contribution.",
      cemented: "D5",
    },
    {
      id: 17,
      name: "L17",
      label: "L17",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.85135,
      vd: 40.1,
      indexReference: "d",
      focalLengthMm: -165.837958,
      glass: "M-TAFD305 (HOYA equivalent)",
      role: "Element in G5; its front surface is the image side of the patent's air lens AL. Standalone power in air, not an isolated in-situ aberration contribution.",
    },
  ],

  surfaces: [
    { label: "1", R: -107.51, d: 1.0, sd: 26.7, medium: 1 },
    { label: "2", R: 61.93, d: 2.47, sd: 26.7 },
    { label: "3", R: 78.33, d: 6.05, sd: 25.4, medium: 2 },
    { label: "4", R: -489.3, sd: 25.4 },
    {
      label: "5A",
      R: 88.26,
      d: 5.0,
      sd: 21,
      medium: 3,
      asphere: { K: 0, A4: -2.1774e-06, A6: -8.5908e-10, A8: -3.9991e-13, A10: 4.2419e-16, A12: 0, A14: 0 },
    },
    { label: "6", R: -167.85, d: 1.0, sd: 21, medium: 4 },
    { label: "7", R: 215.05, sd: 21 },
    { label: "8", R: -287.49, d: 2.97, sd: 20.2, medium: 5 },
    { label: "9", R: -87.34, d: 0.97, sd: 20.2 },
    { label: "10", R: -125.88, d: 1.0, sd: 19.6, medium: 6 },
    { label: "11", R: 40.89, d: 6.66, sd: 19.6 },
    { label: "STO", R: "flat", d: 3.3 },
    { label: "13", R: -97.6, d: 1.01, sd: 20.8, medium: 7 },
    { label: "14", R: 39.17, d: 10.58, sd: 20.8, medium: 8 },
    { label: "15", R: -68.52, d: 0.2, sd: 20.8 },
    {
      label: "16A",
      R: 61.71,
      d: 7.47,
      sd: 21.3,
      medium: 9,
      asphere: { K: 0, A4: -6.4826e-07, A6: 7.1294e-10, A8: -6.6137e-13, A10: 4.5967e-16, A12: 0, A14: 0 },
    },
    {
      label: "17A",
      R: -151.3,
      d: 0.4,
      sd: 21.3,
      asphere: { K: 0, A4: -4.3597e-07, A6: 3.0441e-10, A8: -7.5013e-13, A10: 5.3928e-16, A12: 0, A14: 0 },
    },
    { label: "18", R: -487.97, d: 5.04, sd: 20.6, medium: 10 },
    { label: "19", R: -52.2, d: 1.0, sd: 20.6, medium: 11 },
    { label: "20", R: 80.81, sd: 20.6 },
    { label: "21", R: 63.1, d: 7.94, sd: 19.0, medium: 12 },
    { label: "22", R: -49.94, d: 1.0, sd: 19.4, medium: 13 },
    { label: "23", R: 463.31, d: 0.15, sd: 19.4 },
    {
      label: "24A",
      R: 96.76,
      d: 5.31,
      sd: 18.4,
      medium: 14,
      asphere: { K: 0, A4: -2.7523e-06, A6: -8.3384e-10, A8: 3.371e-13, A10: 0, A12: 0, A14: 0 },
    },
    { label: "25", R: -76.07, sd: 18.4 },
    { label: "26", R: 128.54, d: 4.69, sd: 17.5, medium: 15 },
    { label: "27", R: -91.46, d: 1.0, sd: 17.5, medium: 16 },
    { label: "28", R: 25.95, d: 6.26, sd: 14.7 },
    {
      label: "29A",
      R: -300.0,
      d: 1.0,
      sd: 15.7,
      medium: 17,
      asphere: { K: 0, A4: 4.0914e-06, A6: -2.8321e-08, A8: 1.7934e-10, A10: -7.1336e-13, A12: 1.3086e-15, A14: -8.762e-19 },
    },
    {
      label: "30A",
      R: 267.11,
      d: 17.4116,
      sd: 15.7,
      asphere: { K: 0, A4: 1.0591e-05, A6: -2.7395e-08, A8: 2.2115e-10, A10: -8.8172e-13, A12: 1.8537e-15, A14: -1.5758e-18 },
    },
  ],

  focus: {
    closeFocusM: 0.3947586,
    keyframes: [0, 1],
    description:
      "Published infinity and 395 mm test state (394.7586 mm from source spacings). G2/G4 move objectward 6.60/4.13 mm; linear intermediate movement is approximate. Limited fixed-iris model: near F/1.38 remains unreproduced. S21 clear radius 19.0 mm is inferred. Wider physical-pupil rays first clip at cement S14; full-pupil performance is not certified. Production MFD is 0.4 m.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 271.377,
        distanceReference: "first-surface",
        source:
          "JP 2025-124346 A Numerical Example1, PDF pp15–16, d0 and all four finite-focus spacings; 395mm rounded state label.",
      },
    ],
  },

  gaps: {
    "4": { label: "D4", values: [[9.35, 2.75]] },
    "7": { label: "D7", values: [[4.31, 10.91]] },
    "20": { label: "D20", values: [[6.69, 2.56]] },
    "25": { label: "D25", values: [[2.15, 6.28]] },
  },

  aperture: { nominalFNumber: 1.24, fStops: [1.24, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16], maxFNumber: 16 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "4" },
    { text: "G2", fromSurface: "5A", toSurface: "7" },
    { text: "G3", fromSurface: "8", toSurface: "20" },
    { text: "G4", fromSurface: "21", toSurface: "25" },
    { text: "G5", fromSurface: "26", toSurface: "30A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5A", toSurface: "7" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "D4", fromSurface: "21", toSurface: "23" },
    { text: "D5", fromSurface: "26", toSurface: "28" },
  ],

  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
