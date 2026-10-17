import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Samyang 135mm F2.0 ED UMC: KR 101802036 B1, sole Example 1 (Table 1, Figure 1).
 * Eleven elements in seven groups; eighteen spherical refracting surfaces; L2 is the ED element.
 * The maker's construction drawing matches this layout, including the ED position; the
 * radii, glasses and coatings of the production lens are not confirmed.
 *
 * Native table, unscaled: it traces to f = 130.0 mm, as paragraph 0114 states, while the
 * Figure 2 MTF legends read f = 135 F2 (the marketed specification).
 * Image gap: Table 1 prints Bf = 41.855 mm, but the prescription focuses 44.04 mm behind
 * S19 (d-line paraxial 44.042 mm); the model uses 44.04 mm and treats the print as a misprint.
 *
 * Lens-surface semi-diameters are the printed clear diameters C/2, except S4, S6, S7, S8 and
 * S12. Their printed C is smaller than the patent's own f/2.07 axial beam and than Figure 1
 * draws them (S8 prints 29.4 mm, probably 39.4), so they are raised by the least amount that
 * clears the axial beam. C19 is blank; S19 = 16.79 mm is inferred. Table 1 prints C = 28.56 mm
 * at the stop: its 14.28 mm radius gives paraxial f/2.12. nominalFno 2.1306 comes from its
 * exact-ray calibration; the engine derives the stop radius from that design f-number.
 *
 * Only the infinity state is published. closeFocusM = 0.8 is the maker's figure; no focus
 * travel is modelled. The filter block 20 in Figure 1 has no prescription and is omitted.
 * Glass: source nd/vd are kept; runtime catalog curves supply qualified spectral proxies.
 * Catalog-computed line indices resolve centrally; the patent publishes nd/vd only.
 * SF1 proxy catalog vd is 29.51 versus printed 29.50; TAF1 is 49.63 versus 49.62.
 */

const LENS_DATA = {
  schema: 2,
  key: "samyang-135mm-f2-ed-umc",
  maker: "Samyang",
  name: "SAMYANG 135mm f/2 ED UMC",
  subtitle: "KR 101802036 B1 — Example 1",

  catalog: {
    lensMounts: [
      "canon-ef",
      "nikon-f",
      "pentax-k",
      "sony-a",
      "canon-ef-m",
      "fujifilm-x",
      "samsung-nx",
      "sony-fe",
      "micro-four-thirds",
    ],
    imageFormat: "135-full-frame",
    specs: ["11 ELEMENTS / 7 GROUPS", "DESIGN f = 130 mm", "DESIGN F/2.07", "ALL-SPHERICAL; 1 ED ELEMENT"],
    elementCount: 11,
    groupCount: 7,
    focalLengthMm: { marketing: 135, design: 129.99901509008745 },
    fNumber: { marketing: 2, design: 2.07 },
  },

  source: {
    patentNumber: "KR 101802036 B1",
    patentYear: 2017,
    authors: ["Jong Young Park", "Hyun Sik Yoon"],
    assignees: ["Samyang Optics Co., Ltd."],
    errata: [
      {
        status: "unresolved",
        note: "Table 1 and paragraph 0113 print Bf 41.855 mm, but the prescription focuses 44.04 mm behind S19. The model uses 44.04 mm and treats the printed value as a misprint.",
      },
      {
        status: "unresolved",
        note: "Paragraph 0114 prints F = 130 and Fno 2.07, and the table traces to f = 130.0 mm; the Figure 2 MTF legends read f = 135 F2, the marketed specification. The native table is kept unscaled.",
      },
      {
        status: "unresolved",
        note: "Table 1 prints clear diameters for S4, S6, S7, S8 and S12 that are smaller than the patent's own f/2.07 axial beam and than Figure 1 draws them (S8: 29.4 mm printed, about 38 mm needed; probably a misprint for 39.4). Those five rims are raised by the least amount that clears the axial beam; every other rim is the printed C/2.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1 (L21)",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: 136.512531,
      glass: "TAF1 (Hoya; source Vd 49.62 retained, current catalog 49.63)",
      role: "Front positive meniscus; first air-separated component.",
      diagramLabel: "L21",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2 (L22)",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 92.20472,
      glass: "FCD1 (Hoya)",
      apd: "inferred",
      apdNote:
        "Inferred from the FCD1 spectral proxy: catalog PgF ≈ 0.53885, ΔPgF ≈ +0.03232. Samyang marks the corresponding second element ED; the patent does not identify anomalous dispersion or a production melt.",
      role: "ED positive member of the net-negative L2-L3 doublet.",
      diagramLabel: "L22",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3 (L23)",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -53.916806,
      glass: "FDS90 (Hoya)",
      role: "Negative dense-flint member of the L2-L3 doublet.",
      diagramLabel: "L23",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4 (L24)",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: 43.755299,
      glass: "N-SF66 (Schott; source label NSF66_SCHOTT)",
      role: "Positive high-index member of the weakly positive L4-L5 doublet.",
      diagramLabel: "L24",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5 (L25)",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      focalLengthMm: -40.414512,
      glass: "SF1 (Schott spectral proxy for patent NSF1_SCHOTT; source νd 29.50 retained)",
      role: "Negative partner in the L4-L5 doublet ahead of the stop.",
      diagramLabel: "L25",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6 (L11)",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 52.32,
      focalLengthMm: 107.556546,
      glass: "TAC6 (Hoya)",
      role: "Positive meniscus immediately behind the stop.",
      diagramLabel: "L11",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7 (L12)",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      focalLengthMm: -52.798442,
      glass: "SF1 (Schott spectral proxy for patent NSF1_SCHOTT; source νd 29.50 retained)",
      role: "Air-separated negative element in the rear physical group.",
      diagramLabel: "L12",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8 (L13)",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 47.888176,
      glass: "FDS90 (Hoya)",
      role: "Positive member of the net-positive L8-L9 doublet.",
      diagramLabel: "L13",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9 (L14)",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.45,
      focalLengthMm: -57.007426,
      glass: "FF5 (Hoya)",
      role: "Negative FF5 partner in the L8-L9 doublet.",
      diagramLabel: "L14",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10 (L15)",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      focalLengthMm: -63.857962,
      glass: "SF1 (Schott spectral proxy for patent NSF1_SCHOTT; source νd 29.50 retained)",
      role: "Negative meniscus member of the final net-positive doublet.",
      diagramLabel: "L15",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11 (L16)",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.32,
      focalLengthMm: 35.674947,
      glass: "TAC6 (Hoya)",
      role: "Positive final element; its rear clear radius is inferred, not published.",
      diagramLabel: "L16",
      cemented: "D4",
    },
  ],

  surfaces: [
    { label: "1", R: 88.0, d: 8.297, sd: 32.4, medium: 1 },
    { label: "2", R: 509.786, d: 0.1, sd: 31.71 },
    { label: "3", R: 49.582, d: 13.695, sd: 28.78, medium: 2 },
    {
      label: "4",
      R: -549.424,
      d: 2.8,
      sd: 26.4, // source C/2 = 24.4 mm; raised to clear the f/2.07 axial beam (see sourceErrata)
      medium: 3,
    },
    { label: "5", R: 49.902, d: 1.257, sd: 24.29 },
    {
      label: "6",
      R: 50.71,
      d: 11.663,
      sd: 23.6, // source C/2 = 23.12 mm; raised to clear the f/2.07 axial beam (see sourceErrata)
      medium: 4,
    },
    {
      label: "7",
      R: -176.345,
      d: 2.8,
      sd: 22.4, // source C/2 = 19.44 mm; raised to clear the f/2.07 axial beam (see sourceErrata)
      medium: 5,
    },
    {
      label: "8",
      R: 34.926,
      d: 35.316,
      sd: 19.0, // source C/2 = 14.7 mm; raised to clear the f/2.07 axial beam (see sourceErrata)
    },
    // Patent KR 101802036 B1, Example 1 Table 1, prints C = 28.56 mm clear diameter at the stop.
    { label: "STO", R: "flat", d: 0.7 },
    { label: "10", R: 54.771, d: 2.902, sd: 13.95, medium: 6 },
    { label: "11", R: 164.42, d: 1.536, sd: 13.92 },
    {
      label: "12",
      R: -115.39,
      d: 2.051,
      sd: 13.6, // source C/2 = 13.39 mm; raised to clear the f/2.07 axial beam (see sourceErrata)
      medium: 7,
    },
    { label: "13", R: 56.801, d: 7.421, sd: 14.5 },
    { label: "14", R: 49.916, d: 4.294, sd: 14.58, medium: 8 },
    { label: "15", R: -207.451, d: 1.723, sd: 14.81, medium: 9 },
    { label: "16", R: 40.487, d: 4.823, sd: 15.84 },
    { label: "17", R: 133.059, d: 1.6, sd: 16.53, medium: 10 },
    {
      label: "18",
      R: 33.906,
      d: 7.667,
      sd: 16.79, // Published S18 diameter C = 33.58 mm.
      medium: 11,
    },
    {
      label: "19",
      R: -118.255,
      d: 44.04, // paraxial image distance; Table 1 prints 41.855 mm (see sourceErrata)
      sd: 16.79, // INFERRED S19 closure only; source C19 is blank.
    },
  ],

  focus: {
    closeFocusM: 0.8,
    description:
      "Infinity prescription only. The manufacturer specifies manual floating focus and 0.8 m MFD; the patent gives no quantitative near-focus spacings or stop motion. No internal travel or near-focus performance is modeled.",
  },

  aperture: { nominalFNumber: 2.1306317597309254, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  groups: [
    { text: "G2 (FRONT)", fromSurface: "1", toSurface: "8" },
    { text: "G1 (REAR)", fromSurface: "10", toSurface: "19" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
    { text: "D4", fromSurface: "17", toSurface: "19" },
  ],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
