import type { LensDataInput } from "../../types/optics.js";

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
 * Semi-diameters are the printed clear diameters C/2, including the 14.28 mm stop, except
 * S4, S6, S7, S8 and S12. Their printed C is smaller than the patent's own f/2.07 axial beam
 * and than Figure 1 draws them (S8 prints 29.4 mm, probably 39.4), so they are raised by the
 * least amount that clears the axial beam. C19 is blank; S19 = 16.79 mm is inferred.
 * The 14.28 mm iris gives paraxial f/2.12; nominalFno 2.1306 keeps that physical iris in the
 * engine's real-ray stop sizing.
 *
 * Only the infinity state is published. closeFocusM = 0.8 is the maker's figure; no focus
 * travel is modelled. The filter block 20 in Figure 1 has no prescription and is omitted.
 * Glass: source nd/vd are kept; runtime catalog curves supply qualified spectral proxies.
 * Catalog-computed line indices resolve centrally; the patent publishes nd/vd only.
 * SF1 proxy catalog vd is 29.51 versus printed 29.50; TAF1 is 49.63 versus 49.62.
 */

const LENS_DATA = {
  key: "samyang-135mm-f2-ed-umc",
  name: "SAMYANG 135mm f/2 ED UMC",
  maker: "Samyang",
  sourceErrata: [
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
  subtitle: "KR 101802036 B1 — Example 1",
  specs: ["11 ELEMENTS / 7 GROUPS", "DESIGN f = 130 mm", "DESIGN F/2.07", "ALL-SPHERICAL; 1 ED ELEMENT"],
  focalLengthMarketing: 135,
  focalLengthDesign: 129.99901509008745,
  apertureMarketing: 2,
  apertureDesign: 2.07,
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
  patentNumber: "KR 101802036 B1",
  patentAuthors: ["Jong Young Park", "Hyun Sik Yoon"],
  patentAssignees: ["Samyang Optics Co., Ltd."],
  patentYear: 2017,
  elementCount: 11,
  groupCount: 7,
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L21",
      label: "Element 1 (L21)",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.62,
      fl: 136.512531,
      glass: "TAF1 (Hoya; source Vd 49.62 retained, current catalog 49.63)",
      role: "Front positive meniscus; first air-separated component.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L22",
      label: "Element 2 (L22)",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 92.20472,
      glass: "FCD1 (Hoya)",
      apd: "inferred",
      apdNote: "Inferred from the FCD1 spectral proxy: catalog PgF ≈ 0.53885, ΔPgF ≈ +0.03232. Samyang marks the corresponding second element ED; the patent does not identify anomalous dispersion or a production melt.",
      role: "ED positive member of the net-negative L2-L3 doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L23",
      label: "Element 3 (L23)",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      fl: -53.916806,
      glass: "FDS90 (Hoya)",
      role: "Negative dense-flint member of the L2-L3 doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L24",
      label: "Element 4 (L24)",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      fl: 43.755299,
      glass: "N-SF66 (Schott; source label NSF66_SCHOTT)",
      role: "Positive high-index member of the weakly positive L4-L5 doublet.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L25",
      label: "Element 5 (L25)",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      fl: -40.414512,
      glass: "SF1 (Schott spectral proxy for patent NSF1_SCHOTT; source νd 29.50 retained)",
      role: "Negative partner in the L4-L5 doublet ahead of the stop.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L11",
      label: "Element 6 (L11)",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 52.32,
      fl: 107.556546,
      glass: "TAC6 (Hoya)",
      role: "Positive meniscus immediately behind the stop.",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L12",
      label: "Element 7 (L12)",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      fl: -52.798442,
      glass: "SF1 (Schott spectral proxy for patent NSF1_SCHOTT; source νd 29.50 retained)",
      role: "Air-separated negative element in the rear physical group.",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L13",
      label: "Element 8 (L13)",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      fl: 47.888176,
      glass: "FDS90 (Hoya)",
      role: "Positive member of the net-positive L8-L9 doublet.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      diagramLabel: "L14",
      label: "Element 9 (L14)",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.45,
      fl: -57.007426,
      glass: "FF5 (Hoya)",
      role: "Negative FF5 partner in the L8-L9 doublet.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      diagramLabel: "L15",
      label: "Element 10 (L15)",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      fl: -63.857962,
      glass: "SF1 (Schott spectral proxy for patent NSF1_SCHOTT; source νd 29.50 retained)",
      role: "Negative meniscus member of the final net-positive doublet.",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L11",
      diagramLabel: "L16",
      label: "Element 11 (L16)",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.32,
      fl: 35.674947,
      glass: "TAC6 (Hoya)",
      role: "Positive final element; its rear clear radius is inferred, not published.",
      cemented: "D4",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 88.0,
      d: 8.297,
      nd: 1.7725,
      elemId: 1,
      sd: 32.4,
    },
    {
      label: "2",
      R: 509.786,
      d: 0.1,
      nd: 1.0,
      elemId: 0,
      sd: 31.71,
    },
    {
      label: "3",
      R: 49.582,
      d: 13.695,
      nd: 1.497,
      elemId: 2,
      sd: 28.78,
    },
    {
      label: "4",
      R: -549.424,
      d: 2.8,
      nd: 1.84666,
      elemId: 3,
      sd: 26.4, // source C/2 = 24.4 mm; raised to clear the f/2.07 axial beam (see sourceErrata)
    },
    {
      label: "5",
      R: 49.902,
      d: 1.257,
      nd: 1.0,
      elemId: 0,
      sd: 24.29,
    },
    {
      label: "6",
      R: 50.71,
      d: 11.663,
      nd: 1.92286,
      elemId: 4,
      sd: 23.6, // source C/2 = 23.12 mm; raised to clear the f/2.07 axial beam (see sourceErrata)
    },
    {
      label: "7",
      R: -176.345,
      d: 2.8,
      nd: 1.71736,
      elemId: 5,
      sd: 22.4, // source C/2 = 19.44 mm; raised to clear the f/2.07 axial beam (see sourceErrata)
    },
    {
      label: "8",
      R: 34.926,
      d: 35.316,
      nd: 1.0,
      elemId: 0,
      sd: 19.0, // source C/2 = 14.7 mm; raised to clear the f/2.07 axial beam (see sourceErrata)
    },
    {
      label: "STO",
      R: 1000000000000000.0,
      d: 0.7,
      nd: 1.0,
      elemId: 0,
      sd: 14.28,
    },
    {
      label: "10",
      R: 54.771,
      d: 2.902,
      nd: 1.755,
      elemId: 6,
      sd: 13.95,
    },
    {
      label: "11",
      R: 164.42,
      d: 1.536,
      nd: 1.0,
      elemId: 0,
      sd: 13.92,
    },
    {
      label: "12",
      R: -115.39,
      d: 2.051,
      nd: 1.71736,
      elemId: 7,
      sd: 13.6, // source C/2 = 13.39 mm; raised to clear the f/2.07 axial beam (see sourceErrata)
    },
    {
      label: "13",
      R: 56.801,
      d: 7.421,
      nd: 1.0,
      elemId: 0,
      sd: 14.5,
    },
    {
      label: "14",
      R: 49.916,
      d: 4.294,
      nd: 1.84666,
      elemId: 8,
      sd: 14.58,
    },
    {
      label: "15",
      R: -207.451,
      d: 1.723,
      nd: 1.5927,
      elemId: 9,
      sd: 14.81,
    },
    {
      label: "16",
      R: 40.487,
      d: 4.823,
      nd: 1.0,
      elemId: 0,
      sd: 15.84,
    },
    {
      label: "17",
      R: 133.059,
      d: 1.6,
      nd: 1.71736,
      elemId: 10,
      sd: 16.53,
    },
    {
      label: "18",
      R: 33.906,
      d: 7.667,
      nd: 1.755,
      elemId: 11,
      sd: 16.79, // Published S18 diameter C = 33.58 mm.
    },
    {
      label: "19",
      R: -118.255,
      d: 44.04, // paraxial image distance; Table 1 prints 41.855 mm (see sourceErrata)
      nd: 1.0,
      elemId: 0,
      sd: 16.79, // INFERRED S19 closure only; source C19 is blank.
    },
  ],
  asph: {},
  var: {},
  varLabels: [],
  groups: [
    {
      text: "G2 (FRONT)",
      fromSurface: "1",
      toSurface: "8",
    },
    {
      text: "G1 (REAR)",
      fromSurface: "10",
      toSurface: "19",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "D2",
      fromSurface: "6",
      toSurface: "8",
    },
    {
      text: "D3",
      fromSurface: "14",
      toSurface: "16",
    },
    {
      text: "D4",
      fromSurface: "17",
      toSurface: "19",
    },
  ],
  closeFocusM: 0.8,
  focusDescription:
    "Infinity prescription only. The manufacturer specifies manual floating focus and 0.8 m MFD; the patent gives no quantitative near-focus spacings or stop motion. No internal travel or near-focus performance is modeled.",
  nominalFno: 2.1306317597309254,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  maxFstop: 22,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
