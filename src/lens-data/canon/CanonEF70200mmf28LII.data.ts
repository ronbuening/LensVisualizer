import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Original source: US 2009/0296231 A1, Numerical Embodiment 2, paragraph 0114, PDF p. 20 (printed 6).
 * Unit-data continuation: PDF p. 21; corresponding wide-end Fig. 4: PDF p. 5 / sheet 4. Review date 2026-10-30.
 * Native bitmap 2560×3300 at 300 ppi, about 9.05 px/mm; practical rim uncertainty ±0.4 mm, up to ±0.5 at near-contact
 * cap/shoulder junctions. Reading crops add no native resolution. Every source row/medium/interface was inspected.
 * All 43 source R/d rows, 23 literal d-reference pairs, stop, aperture and four zoom-gap schedules at three published stations are retained.
 * The existing gapSagFrac 0.97 stays unchanged; no inferred cut or beam-exempt source flag is added.
 *
 * Thirty cap corrections and 14 resolved outer shoulders follow the original optical rims. Each rimExtensionSd
 * preserves the optical cap; no opaque land is placed at the four cemented interfaces. Source R/d prevents full
 * blank-height optical caps across seven close air pairs; retained cap-plus-shoulder geometry stays connected.
 * Three shape-class labels are corrected from the actual source radius signs without changing a radius.
 *
 * Paragraph 0078 defines g/F/d/C Fraunhofer indices and 0111 explicitly identifies numerical indices/Abbe numbers
 * relative to d. All 23 catalog curves remain qualified proxies, not historical supplier/melt/chemistry identification.
 * Sixty-six catalog-copied nC/nF/ng fields are removed. Table 1 gives theta-gF 0.539 for PR L5 and N2 L7; only those
 * two receive genuine source-derived dPgF +0.032283 and source APD tags. The other four old APD tags become inferred.
 * Generic source discussion of fluorite does not identify L11's chemistry; its CaF2 curve is a qualified proxy.
 *
 * All 65 sampled zoom states pass project aperture/field coverage; the three published states remain distinct from
 * illustrative interpolation. Linear gap interpolation can leave 3.094639 mm image-plane defocus, with source gaps unchanged.
 * All 1365 sampled zoom/focus-control renders have 23 finite connected paths and zero hidden trimming. Focus is a geometry
 * no-op: published 1.5 m aberration plots provide no finite spacing table, and 1.2 m is retained product metadata only.
 * A 65-zoom, three-field, 97-pupil census clears all axial bundles and chiefs. 1,012 off-axis first-surface noBracket entries
 * intersect the unrestricted sphere outside its clear cap; no inside-cap/interior miss is unexplained.
 * Source fidelity, sampled runtime clearance and production correlation are separate; moved IS/converter clearance is unverified.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-70-200mm-f28l-is-ii-usm",
  maker: "Canon",
  name: "CANON EF 70-200mm f/2.8 L IS II USM",
  subtitle: "US 2009/0296231 A1 — Numerical Embodiment 2",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "23 elements / 19 groups",
      "Patent f = 72.14-193.97 mm",
      "Patent FNO = 2.9; marketed f/2.8",
      "2ω = 33.4°-12.7°",
      "1 fluorite + 5 UD (production count; source mapping inferred)",
      "All spherical",
    ],
    elementCount: 23,
    groupCount: 19,
    acceptsTeleconverters: true, // Canon lists Extender EF1.4x / EF2x compatibility
    focalLengthMm: { marketing: [70, 200], design: [72.14, 193.97] },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "US 2009/0296231 A1",
    example: { label: "Numerical Embodiment 2", id: "2" },
    patentYear: 2009,
    authors: ["Takashi Shirasuna"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 35.3,
      focalLengthMm: -251.9,
      glass: "S-NBH51 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "Front negative meniscus; high-dispersion partner for the following UD positive elements.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 194.5,
      glass: "S-FPL51 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      apd: "inferred",
      apdNote:
        "Qualified production UD/compatible-proxy association; the original maps published extraordinary-dispersion evidence only to PR L5 and N2 L7. Same nd/nu-d does not prove historical chemistry or a per-lens theta-gF value here.",
      role: "UD front-group positive power and primary/secondary spectrum correction.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 226.7,
      glass: "S-FPL51 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      apd: "inferred",
      apdNote:
        "Qualified production UD/compatible-proxy association; the original maps published extraordinary-dispersion evidence only to PR L5 and N2 L7. Same nd/nu-d does not prove historical chemistry or a per-lens theta-gF value here.",
      role: "Rear positive member of the fixed L1F front subunit.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -384.0,
      glass: "S-TIH6 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "Negative flint member of the moving L1R focus subunit.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5 / PR lens",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 102.0,
      glass: "S-FPL51 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      apd: "patent",
      dPgF: 0.032283,
      apdNote:
        "Original paragraphs 0070/0073 explicitly identify L5 PR and L7 N2 as extraordinary-dispersion glass; Table 1 Embodiment 2 gives theta-gF=0.539 with nu-d=81.5. Repository-normal-line dPgF=+0.032283; source theta is rounded to 0.001, not a catalog-derived override.",
      role: "Positive extraordinary-dispersion PR lens in the movable focus subunit.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -41.3,
      glass: "S-LAH65V (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "First strong negative element of the L2 variator.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7 / N2 lens",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: -51.0,
      glass: "S-FPL51 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      apd: "patent",
      dPgF: 0.032283,
      apdNote:
        "Original paragraphs 0070/0073 explicitly identify L5 PR and L7 N2 as extraordinary-dispersion glass; Table 1 Embodiment 2 gives theta-gF=0.539 with nu-d=81.5. Repository-normal-line dPgF=+0.032283; source theta is rounded to 0.001, not a catalog-derived override.",
      role: "Negative extraordinary-dispersion N2 element in L2; cemented to L8.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 48.5,
      glass: "S-TIH53 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "Dense positive flint member of the L2 cemented doublet.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: -82.0,
      glass: "S-LAL14 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "Final negative element of the L2 variator.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.6779,
      vd: 55.3,
      focalLengthMm: 89.9,
      glass: "S-LAL12 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "First positive element of the L3 compensator group.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11 / high-Abbe positive",
      type: "Positive Meniscus",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: 97.4,
      glass: "Fluorite (CaF2 spectral proxy; historical material, supplier and melt unspecified)",
      apd: "inferred",
      apdNote:
        "Qualified production fluorite and CaF2-proxy association; the original discusses fluorite generically but does not identify L11 as a fluorite or publish its line indices/partial dispersion.",
      role: "High-Abbe positive element in L3; qualified production fluorite association, with source historical chemistry unresolved.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 35.0,
      focalLengthMm: -107.0,
      glass: "S-LAM66 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "Negative flint member closing the L3 compensator group.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: 96.6,
      glass: "S-LAH65V (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "First positive relay element immediately behind the aperture stop.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 166.4,
      glass: "S-LAH66 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "Weak positive relay element near the stop.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.74,
      vd: 28.3,
      focalLengthMm: -50.8,
      glass: "S-TIH3 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "Negative flint member of the first L4 cemented doublet.",
      cemented: "D2",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 57.5,
      glass: "S-FPL51 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      apd: "inferred",
      apdNote:
        "Qualified production UD/compatible-proxy association; the original maps published extraordinary-dispersion evidence only to PR L5 and N2 L7. Same nd/nu-d does not prove historical chemistry or a per-lens theta-gF value here.",
      role: "Positive UD member of the first L4 cemented doublet.",
      cemented: "D2",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 66.6,
      glass: "S-TIH6 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "Positive dense flint member of the second L4 cemented doublet.",
      cemented: "D3",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconcave Negative",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: -39.2,
      glass: "S-BAL42 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "Negative barium-crown member of the second L4 cemented doublet.",
      cemented: "D3",
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.8,
      focalLengthMm: -89.6,
      glass: "S-LAM2 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "Negative rear-relay singlet for field and oblique-aberration control.",
    },
    {
      id: 20,
      name: "L20",
      label: "Element 20",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: 70.9,
      glass: "S-LAH65V (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "Positive rear-relay imaging element.",
    },
    {
      id: 21,
      name: "L21",
      label: "Element 21",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 52.5,
      glass: "S-FSL5 (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "Positive high-Abbe crown member of the final cemented doublet.",
      cemented: "D4",
    },
    {
      id: 22,
      name: "L22",
      label: "Element 22",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -39.5,
      glass: "S-LAH60V (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "Negative high-index member of the final cemented doublet.",
      cemented: "D4",
    },
    {
      id: 23,
      name: "L23",
      label: "Element 23",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: 131.8,
      glass: "S-LAH60V (OHARA) spectral proxy (historical material, supplier and melt unspecified)",
      role: "Final positive relay element and field-side corrector.",
    },
  ],

  surfaces: [
    { label: "1", R: 314.575, d: 2.8, sd: 37.0, medium: 1 },
    { label: "2", R: 117.542, d: 0.96, sd: 35.1, rimExtensionSd: 37 },
    { label: "3", R: 141.139, d: 8.36, sd: 35.1, rimExtensionSd: 36, medium: 2 },
    { label: "4", R: -300.657, d: 0.15, sd: 36 },
    { label: "5", R: 75.124, d: 6.81, sd: 34, medium: 3 },
    { label: "6", R: 218.609, sd: 34 },
    { label: "7", R: 51.382, d: 2.3, sd: 27.3, medium: 4 },
    { label: "8", R: 43.18, d: 1.43, sd: 25.1, rimExtensionSd: 27.3 },
    { label: "9", R: 50.611, d: 8.6, sd: 25.1, rimExtensionSd: 25.6, medium: 5 },
    { label: "10", R: 33115.608, sd: 25.6 },
    { label: "11", R: -1003.993, d: 1.4, sd: 18, medium: 6 },
    { label: "12", R: 34.333, d: 5.79, sd: 15.7, rimExtensionSd: 18 },
    { label: "13", R: -81.909, d: 1.4, sd: 15.7, rimExtensionSd: 16.7, medium: 7 },
    { label: "14", R: 36.914, d: 5.39, sd: 16.7, medium: 8 },
    { label: "15", R: 341.176, d: 2.84, sd: 16.3, rimExtensionSd: 16.7 },
    { label: "16", R: -57.998, d: 1.4, sd: 16.3, rimExtensionSd: 17.4, medium: 9 },
    { label: "17", R: 3742.48, sd: 17.4 },
    { label: "18", R: 169.934, d: 4.88, sd: 18.3, medium: 10 },
    { label: "19", R: -93.961, d: 0.15, sd: 18.3 },
    { label: "20", R: 594.797, d: 6.28, sd: 18.1, medium: 11 },
    { label: "21", R: -45.332, d: 0.09, sd: 17.35, rimExtensionSd: 18.1 },
    { label: "22", R: -44.317, d: 1.6, sd: 17.34, rimExtensionSd: 18.1, medium: 12 },
    { label: "23", R: -93.196, sd: 18.1 },
    { label: "STO", R: "flat", d: 0.4 },
    { label: "25", R: 52.86, d: 3.55, sd: 18.4, medium: 13 },
    { label: "26", R: 160.464, d: 0.2, sd: 18.4 },
    { label: "27", R: 51.23, d: 3.52, sd: 17.3, medium: 14 },
    { label: "28", R: 82.622, d: 1.7, sd: 16.5, rimExtensionSd: 17.3 },
    { label: "29", R: 4742.17, d: 1.6, sd: 16.5, rimExtensionSd: 16.8, medium: 15 },
    { label: "30", R: 37.278, d: 7.58, sd: 16.8, medium: 16 },
    { label: "31", R: -114.057, d: 3.2, sd: 16.8 },
    { label: "32", R: 205.849, d: 3.65, sd: 15.4, medium: 17 },
    { label: "33", R: -72.004, d: 1.4, sd: 15.4, medium: 18 },
    { label: "34", R: 33.673, d: 4.87, sd: 14.0, rimExtensionSd: 15.4 },
    { label: "35", R: -69.3, d: 1.4, sd: 13.3, rimExtensionSd: 15.4, medium: 19 },
    { label: "36", R: 1788.356, d: 3.46, sd: 15.4 },
    { label: "37", R: 181.747, d: 3.83, sd: 16.8, medium: 20 },
    { label: "38", R: -82.196, d: 3.16, sd: 16.8 },
    { label: "39", R: 265.558, d: 8.91, sd: 18.2, medium: 21 },
    { label: "40", R: -27.996, d: 2.0, sd: 18.2, medium: 22 },
    { label: "41", R: -193.24, d: 5.0, sd: 18.2 },
    { label: "42", R: 81.384, d: 3.31, sd: 20, medium: 23 },
    { label: "43", R: 307.388, d: 54.1, sd: 20 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 72.14, label: "Wide" },
      { focalLengthMm: 135.0 },
      { focalLengthMm: 193.97, label: "Tele" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 1.2,
    description:
      "Inner-focus design using the L1R subunit (L4-L5). US 2009/0296231 A1 does not tabulate close-focus spacings for Numerical Embodiment 2, so the data file models infinity-focus zoom kinematics only.",
  },

  gaps: {
    "6": {
      label: "D6",
      values: [
        [10.68, 10.68],
        [26.38, 26.38],
        [33.38, 33.38],
      ],
    },
    "10": {
      label: "D10",
      values: [
        [1.58, 1.58],
        [13.38, 13.38],
        [17.34, 17.34],
      ],
    },
    "17": {
      label: "D17",
      values: [
        [28.81, 28.81],
        [14.37, 14.37],
        [1.08, 1.08],
      ],
    },
    "23": {
      label: "D23",
      values: [
        [18.32, 18.32],
        [5.25, 5.25],
        [7.59, 7.59],
      ],
    },
  },

  aperture: {
    nominalFNumber: 2.9,
    fStops: [2.9, 4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
    blades: 8,
    bladeRoundedness: 1,
  },

  groups: [
    { text: "L1F", fromSurface: "1", toSurface: "6" },
    { text: "L1R", fromSurface: "7", toSurface: "10" },
    { text: "L2", fromSurface: "11", toSurface: "17" },
    { text: "L3", fromSurface: "18", toSurface: "23" },
    { text: "L4", fromSurface: "25", toSurface: "43" },
  ],
  doublets: [
    { text: "D1", fromSurface: "13", toSurface: "15" },
    { text: "D2", fromSurface: "29", toSurface: "31" },
    { text: "D3", fromSurface: "32", toSurface: "34" },
    { text: "D4", fromSurface: "39", toSurface: "41" },
  ],

  layout: { scFill: 0.76, yScFill: 0.34 },

  checks: {
    gapSagFrac: 0.97, // air pairs 12/13, 15/16, 21/22, 28/29 at the f/2.9 ray height; see header
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
