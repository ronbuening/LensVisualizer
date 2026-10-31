import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Original shape/glass review 2026-10-30: US 2012/0013996 A 1, First Embodiment, Table 1 PDF pp.16–17;
 * matching wide/tele Fig.1 PDF p.2/sheet 1. Native pages are 2560×3300 at 300 ppi; about 10.4 px/mm.
 * Practical figure uncertainty ±1.1 mm at the large front blank, ±0.6 mm in the relay; magnification adds no resolution.
 * All 27 source rows,14 media,three cemented interfaces,the asphere,SS/STO and source gaps were inspected.
 *
 * Nine cap changes and four external shoulders follow the source outlines without bonded-interface lands.
 * Critical retained source-aperture limitation: printed S2 sd 17.075 gives 81.1° slope versus unchanged 64.2° guard;
 * printed S5 sd 13.55 fails pair 4–5 gap allowance 5.796 mm. Adopted 15.5/13.5 stay unchanged; no tolerance is raised.
 * S2 rimExtensionSd 30.935 improves height but its land is 4.976321 mm forward of the literal-cap shoulder position.
 * Source 87.5° chiefs require S2 heights 17.022620/16.812584/16.621198 and clip at adopted 15.5. No source-edge clearance is claimed.
 * L12's type follows finite source R 23; no R/d, asphere, SS, iris rule, source zoom gap or reconstructed focus cam changes.
 *
 * Explicit d-reference pairs and source g/F/d/C wavelengths are checked. Fourteen curves remain qualified spectral proxies,
 * not historical chemistry/supplier/melt proof. The genuine group partials+.019/+.028 on the engine normal line are retained
 * in the notes with the reused 2026-10-08 review date. The original never uniquely maps them to L2/L3/L13: their three
 * per-position dPgF fields are removed and APD tags become inferred. No individual source C/F/g indices are printed.
 * No hybrid/resin, separate cement medium, filter or rear plate is supplied by this numerical example.
 *
 * Source field metadata is 175° full/87.5° half at all three stations; 180° is qualified product coverage only.
 * Catalog design 8.05/15.14 copies the source; projection focal scales remain the prior computed runtime references.
 * Surface/image-circle checks and 65 infinity aperture samples pass. Generic field audit skips fisheyes; vector checks
 * clear 0/30/60° bundles but fail 975 of 1560 higher-field seeds. The source 87.5° edge is restricted, not validated.
 * Each of two 65×21 finite axial sweeps traces 132405 rays without clipping/failures; finite off-axis coverage is not certified.
 * All 1365 renders have 14 finite connected contours and zero trimming. Interpolation can leave−0.892829 mm infinity defocus.
 * Source fidelity, sampled runtime clearance and production correlation are separate; no inferred cut is authored.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-8-15mm-f4l-fisheye-usm",
  maker: "Canon",
  name: "CANON EF 8-15mm f/4 L Fisheye USM",
  subtitle: "US 2012/0013996 A1 Example 1 — Canon / Okumura",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "14 elements / 11 groups",
      "8-15 mm marketed; 8.05-15.14 mm design",
      "f/4 marketed; F/4.12 patent design",
      "175° full field (source); 180° marketed coverage",
      "1 aspherical surface (source); molded-glass production correlation",
    ],
    elementCount: 14,
    groupCount: 11,
    focalLengthMm: { marketing: [8, 15], design: [8.05, 15.14] },
    fNumber: { marketing: 4, design: 4.12 },
  },

  source: {
    patentNumber: "US 2012/0013996 A1",
    example: { label: "Embodiment 1", id: "1" },
    patentYear: 2012,
    authors: ["Tetsuichiro Okumura"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -31.04,
      glass: "S-LAH65V (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      apd: false,
      role: "Large high-index negative meniscus at the front of L11; establishes the fisheye front-group power and accepts the extreme off-axis bundle.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.59282,
      vd: 68.6,
      focalLengthMm: -43.98,
      glass: "FCD505 / FCD515 class (HOYA) spectral proxy (historical material, supplier and melt unspecified)",
      apd: "inferred",
      apdNote:
        "Original Table 4 publishes group condition (5) +0.019 for one or more negative lenses behind the first meniscus; it does not identify this numbered position. APD/low-dispersion placement is inferred, with no per-lens partial override or historical chemistry claim.",
      role: "High-Abbe negative in L11; inferred APD-position association to the published group condition, without historical chemistry identification.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.59282,
      vd: 68.6,
      focalLengthMm: -38.48,
      glass: "FCD505 / FCD515 class (HOYA) spectral proxy (historical material, supplier and melt unspecified)",
      apd: "inferred",
      apdNote:
        "Qualified high-Abbe/proxy association only. The original publishes one group condition (5) +0.019 without unique position mapping; same nd/vd does not prove a shared historical material or per-lens partial.",
      role: "Second high-Abbe negative in L11; works with L4 to balance lateral color. Its source-partial placement remains inferred.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 23.82,
      glass: "S-TIH6 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      apd: false,
      role: "Strong high-dispersion positive lens at the rear of fixed subunit L11; achromatizing partner for the anomalous low-dispersion negative lenses before it.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.85135,
      vd: 40.1,
      focalLengthMm: -37.94,
      glass: "M-TAFD305 (HOYA) spectral proxy (historical material, supplier and melt unspecified)",
      apd: false,
      role: "Single-element L12 inner-focus group. The front surface is the design's sole asphere and moves with the focus group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 33.85,
      glass: "S-LAH58 (OHARA) / TAFD33 class spectral proxy (historical material, supplier and melt unspecified)",
      apd: false,
      role: "First powered element of L2, immediately behind the supplemental stop; starts the positive relay after the negative front unit.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: -13.62,
      glass: "S-LAH58 (OHARA) / TAFD33 class spectral proxy (historical material, supplier and melt unspecified)",
      apd: false,
      role: "Negative member of the first cemented achromat after the aperture stop.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 58.9,
      focalLengthMm: 24.59,
      glass: "S-NSL3 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      apd: false,
      role: "Positive crown member of D1; pairs with L7 for axial color and spherical correction near the stop.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 24.03,
      glass: "S-FSL5 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      apd: false,
      role: "Low-index, low-dispersion positive member of the second cemented doublet in L2.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: -26.4,
      glass: "S-LAH58 (OHARA) / TAFD33 class spectral proxy (historical material, supplier and melt unspecified)",
      apd: false,
      role: "High-index negative member of D2; leaves the cemented pair with only weak net positive power.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.3,
      focalLengthMm: 35.46,
      glass: "S-FTM16 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      apd: false,
      role: "Medium-index short-flint positive singlet in the rear relay; contributes positive power and chromatic balance between the doublet groups.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -33.83,
      glass: "S-LAH60V (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      apd: false,
      role: "High-index negative member paired with the rear high-Abbe positive; source R23 is weakly curved, not flat.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 31.96,
      glass: "S-FPL51 (OHARA) / FCD1 class spectral proxy (historical material, supplier and melt unspecified)",
      apd: "inferred",
      apdNote:
        "Original Table 4 publishes group condition (6) +0.028 for one or more positive lenses in L2; assignment to this high-Abbe body is inferred, not a source per-position partial or historical chemistry identification.",
      role: "High-Abbe positive candidate for the rear group APD condition; per-position evidence is inferred. Cemented directly to L12.",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 178.8,
      glass: "S-FSL5 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      apd: false,
      role: "Weak rear positive meniscus / field-flattening element before the long back-focus space.",
    },
  ],

  surfaces: [
    { label: "1", R: 59.84, d: 2.5, sd: 30.935, medium: 1 },
    { label: "2", R: 17.282, d: 14.64, sd: 15.5, rimExtensionSd: 30.935 },
    { label: "3", R: 129.723, d: 1.61, sd: 16.295, medium: 2 },
    { label: "4", R: 21.61, d: 6.44, sd: 13.695, rimExtensionSd: 16.295 },
    { label: "5", R: -86.935, d: 1.36, sd: 13.5, medium: 3 },
    { label: "6", R: 31.102, d: 0.15, sd: 12.92, rimExtensionSd: 13.5 },
    { label: "7", R: 22.525, d: 7.45, sd: 13.035, medium: 4 },
    { label: "8", R: -110.226, sd: 12.36, rimExtensionSd: 13.035 },
    {
      label: "9A",
      R: -31.089,
      d: 1.2,
      sd: 8.9,
      medium: 5,
      asphere: { K: 0, A4: -6.64162e-6, A6: 2.58871e-8, A8: -8.99837e-10, A10: 1.12233e-11, A12: -5.07106e-14 },
    },
    { label: "10", R: -844.34, sd: 8.9 },
    { label: "SS", R: "flat", d: 1.46, sd: 5.13 },
    { label: "12", R: 43.413, d: 1.62, sd: 5.435, medium: 6 },
    { label: "13", R: -94.26, d: 1.85, sd: 5.47 },
    // US 2012/0013996 A1, First Embodiment Table 1, surface 14: printed effective
    // diameter 10.95 mm at the stop.
    { label: "STO", R: "flat", d: 1.7 },
    { label: "15", R: -19.292, d: 0.75, sd: 6.155, medium: 7 },
    { label: "16", R: 32.493, d: 3.22, sd: 6.155, medium: 8 },
    { label: "17", R: -20.261, d: 0.2, sd: 6.155 },
    { label: "18", R: 194.716, d: 4.25, sd: 6.98, medium: 9 },
    { label: "19", R: -12.377, d: 0.8, sd: 6.98, medium: 10 },
    { label: "20", R: -27.182, d: 0.2, sd: 6.98 },
    { label: "21", R: 712.893, d: 3.28, sd: 7.935, medium: 11 },
    { label: "22", R: -21.62, d: 0.35, sd: 7.935 },
    { label: "23", R: -60941.798, d: 0.93, sd: 9.35, medium: 12 },
    { label: "24", R: 28.231, d: 4.77, sd: 9.35, medium: 13 },
    { label: "25", R: -34.279, d: 0.2, sd: 9.35 },
    { label: "26", R: -80910.795, d: 1.68, sd: 9.935, medium: 14 },
    { label: "27", R: -87.072, sd: 9.935 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 8.05, label: "8 mm" },
      { focalLengthMm: 11.85 },
      { focalLengthMm: 15.14, label: "15 mm" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.15,
    description:
      "Inner focus by translating L12 (element L5, surfaces 9A-10). Close-focus D8/D10 values are paraxial estimates to the official 0.15 m MFD because the patent publishes infinity zoom spacings only.",
  },

  gaps: {
    "8": {
      label: "D8 focus gap",
      values: [
        [5.82, 2.400255],
        [5.82, 2.600216],
        [5.82, 2.375037],
      ],
    },
    "10": {
      label: "D10 zoom/focus gap",
      values: [
        [20.89, 24.309745],
        [9.25, 12.469784],
        [3.89, 7.334963],
      ],
    },
    "27": {
      label: "BF",
      values: [
        [40.25, 40.25],
        [49.58, 49.58],
        [57.66, 57.66],
      ],
    },
  },

  aperture: { nominalFNumber: 4.12, fStops: [4.12, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  projection: {
    kind: "fisheye-equisolid",
    focalLengthMm: [8.05249, 11.85145, 15.14066],
    fullFieldDeg: [175, 175, 175],
    imageCircleMm: [22.3, 33.54, 43.28],
    maxTraceFieldDeg: [87.5, 87.5, 87.5],
  },

  groups: [
    { text: "L1 negative", fromSurface: "1", toSurface: "10" },
    { text: "L12 focus", fromSurface: "9A", toSurface: "10" },
    { text: "L2 positive", fromSurface: "SS", toSurface: "27" },
  ],
  doublets: [
    { text: "D1", fromSurface: "15", toSurface: "17" },
    { text: "D2", fromSurface: "18", toSurface: "20" },
    { text: "D3", fromSurface: "23", toSurface: "25" },
  ],

  layout: { scFill: 0.58, yScFill: 0.72 },
} satisfies LensDataV2Input;

export default LENS_DATA;
