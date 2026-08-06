import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S FISHEYE NIKKOR 8-15mm f/3.5-4.5E ED              ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP 2017-068114 A, Example 1 (Nikon Corporation).                 ║
 * ║  Exact 1:1 transcription of the patent embodiment: 18 elements in         ║
 * ║  13 air-spaced components, 32 optical surfaces, and one asphere.           ║
 * ║  The product assignment is approximate; Example 1 is not asserted to be   ║
 * ║  the 15-element production prescription.                                  ║
 * ║                                                                            ║
 * ║  Zoom: D1 at surface 10 and BF at surface 32 vary with zoom. D1 and D2    ║
 * ║  also vary with the patent-published close-focus states. G1 reverses       ║
 * ║  between the middle and tele positions; G2 moves monotonically objectward. ║
 * ║  Focus status: PUBLISHED. The complete G2A sub-group (L21–L24) moves      ║
 * ║  imageward for near focus while the stop remains fixed to the image plane. ║
 * ║                                                                            ║
 * ║  No scaling was applied. Patent Kpat = 1 converts to project K = 0 at      ║
 * ║  surface 3A; the polynomial coefficients are unchanged.                    ║
 * ║                                                                            ║
 * ║  Semi-diameters are modeled clear apertures, not manufacturing diameters.  ║
 * ║  They were derived from exact meridional ray envelopes at all W/M/T       ║
 * ║  infinity and published close states, including the vignetting-limited     ║
 * ║  0.60-field sampling used by the renderer, then checked against Figure 1.  ║
 * ║  Surface 12/13 uses the source-limited clear band: the 1.000 mm air gap   ║
 * ║  retains 0.000151 mm axial clearance at sd = 5.5882 mm, so gapSagFrac is  ║
 * ║  explicitly 1.0 rather than the shared 0.9 default.                        ║
 * ║                                                                            ║
 * ║  Source correction: BF is modeled from surface 32 to IMG. Paragraph 0084  ║
 * ║  says surface 31, but the prescription and published total tracks close    ║
 * ║  only when the variable BF follows surface 32.                             ║
 * ║                                                                            ║
 * ║  The generic camera OLPF, sensor cover glass, filters, inactive planes,    ║
 * ║  and mechanical parts are excluded.                                       ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-af-s-fisheye-nikkor-8-15mm-f35-45e-ed",
  maker: "Nikon",
  name: "NIKON AF-S FISHEYE NIKKOR 8-15mm f/3.5-4.5E ED",
  subtitle: "JP 2017-068114 A Example 1 — approximate product correlation; not the production prescription",
  specs: [
    "18 ELEMENTS / 13 GROUPS — PATENT EXAMPLE",
    "8.17997–15.45007mm DESIGN",
    "f/3.56351–4.67681 DESIGN",
    "178.284°–175.002° FULL FIELD",
    "1 ASPHERICAL SURFACE",
    "PUBLISHED INTERNAL FOCUS",
  ],

  focalLengthMarketing: [8, 15],
  focalLengthDesign: [8.17997, 15.45007],
  // The scalar aperture metadata records the wide-end values; nominalFno below
  // carries the exact W/M/T design sequence for the variable-aperture zoom.
  apertureMarketing: 3.5,
  apertureDesign: 3.56351,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2017-068114 A",
  patentAuthors: ["Tetsushi Miwa", "Hiroshi Yamamoto", "Haruo Sato"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2017,
  elementCount: 18,
  groupCount: 13,

  projection: {
    kind: "fisheye-equisolid",
    focalLengthMm: [8.17997, 11.8498, 15.45007],
    fullFieldDeg: [178.28426, 177.69916, 175.00154],
    imageCircleMm: [22.4, 33.0, 43.2],
    maxTraceFieldDeg: [89.14213, 88.84958, 87.50077],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "L11 — Front negative meniscus",
      type: "Negative Meniscus, convex to object",
      nd: 1.72916,
      vd: 54.61,
      fl: -34.335301,
      glass: "J-LAK18 (HIKARI)",
      apd: false,
      role: "Front field-compressing element of negative group G1.",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "L12 — Aspherical negative meniscus",
      type: "Neg. Meniscus (1× Asph), convex to object",
      nd: 1.59201,
      vd: 67.05,
      fl: -50.379098,
      glass: "592670 — low-dispersion crown class (closest M-PCD51, HOYA; vendor unproven)",
      apd: false,
      role: "Aspherical negative element in G1; surface 3A carries the sole asphere.",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "L13 — Biconcave negative",
      type: "Biconcave Negative",
      nd: 1.59319,
      vd: 67.9,
      fl: -30.321059,
      glass: "J-PSKH1 (HIKARI)",
      apd: false,
      role: "Negative element in the front zoom group.",
    },
    {
      id: 4,
      name: "L14",
      diagramLabel: "L14",
      label: "L14 — Positive meniscus",
      type: "Positive Meniscus, convex to object",
      nd: 1.80518,
      vd: 25.45,
      fl: 30.005674,
      glass: "J-SF6 (HIKARI)",
      apd: false,
      role: "Positive compensating element within negative group G1.",
    },
    {
      id: 5,
      name: "L15",
      diagramLabel: "L15",
      label: "L15 — Rear biconcave negative",
      type: "Biconcave Negative",
      nd: 1.59319,
      vd: 67.9,
      fl: -53.785155,
      glass: "J-PSKH1 (HIKARI)",
      apd: false,
      role: "Rear negative element of G1 before the variable D1 gap.",
    },
    {
      id: 6,
      name: "L21",
      diagramLabel: "L21",
      label: "L21 — Positive meniscus",
      type: "Positive Meniscus, convex to object",
      nd: 1.744,
      vd: 44.81,
      fl: 61.260606,
      glass: "J-LAF2 (HIKARI)",
      apd: false,
      role: "First element of the translating G2A focus sub-group.",
    },
    {
      id: 7,
      name: "L22",
      diagramLabel: "L22",
      label: "L22 — Negative meniscus",
      type: "Negative Meniscus, concave to object",
      nd: 1.883,
      vd: 40.66,
      fl: -153.69939,
      glass: "J-LASF08A class (HIKARI)",
      apd: false,
      role: "Weak negative component in the translating G2A focus sub-group.",
    },
    {
      id: 8,
      name: "L23",
      diagramLabel: "L23",
      label: "L23 — Biconcave negative",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.66,
      fl: -13.270741,
      glass: "J-LASF08A class (HIKARI)",
      apd: false,
      role: "Negative member of the cemented G2A doublet.",
      cemented: "L23/L24",
    },
    {
      id: 9,
      name: "L24",
      diagramLabel: "L24",
      label: "L24 — Biconvex positive",
      type: "Biconvex Positive",
      nd: 1.67003,
      vd: 47.14,
      fl: 11.728183,
      glass: "J-BAF10 (HIKARI)",
      apd: false,
      role: "Positive member of the cemented G2A doublet; G2A ends at surface 17.",
      cemented: "L23/L24",
    },
    {
      id: 10,
      name: "L25",
      diagramLabel: "L25",
      label: "L25 — Negative meniscus",
      type: "Negative Meniscus, concave to object",
      nd: 1.883,
      vd: 40.66,
      fl: -20.754214,
      glass: "J-LASF08A class (HIKARI)",
      apd: false,
      role: "Negative front member of the first G2B cemented doublet.",
      cemented: "L25/L26",
    },
    {
      id: 11,
      name: "L26",
      diagramLabel: "L26",
      label: "L26 — Positive meniscus",
      type: "Positive Meniscus, concave to object",
      nd: 1.51823,
      vd: 58.82,
      fl: 34.245571,
      glass: "J-K3 (HIKARI)",
      apd: false,
      role: "Positive rear member of the first G2B cemented doublet.",
      cemented: "L25/L26",
    },
    {
      id: 12,
      name: "L27",
      diagramLabel: "L27",
      label: "L27 — Biconvex positive",
      type: "Biconvex Positive",
      nd: 1.60342,
      vd: 38.03,
      fl: 15.137405,
      glass: "J-F5 (HIKARI)",
      apd: false,
      role: "Positive front member of the second G2B cemented doublet.",
      cemented: "L27/L28",
    },
    {
      id: 13,
      name: "L28",
      diagramLabel: "L28",
      label: "L28 — Negative meniscus",
      type: "Negative Meniscus, concave to object",
      nd: 1.883,
      vd: 40.66,
      fl: -45.226735,
      glass: "J-LASF08A class (HIKARI)",
      apd: false,
      role: "Negative rear member of the second G2B cemented doublet.",
      cemented: "L27/L28",
    },
    {
      id: 14,
      name: "L29",
      diagramLabel: "L29",
      label: "L29 — Biconcave negative",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.66,
      fl: -15.336887,
      glass: "J-LASF08A class (HIKARI)",
      apd: false,
      role: "Negative front member of the third G2B cemented doublet.",
      cemented: "L29/L210",
    },
    {
      id: 15,
      name: "L210",
      diagramLabel: "L210",
      label: "L210 — Positive meniscus",
      type: "Positive Meniscus, convex to object",
      nd: 1.49782,
      vd: 82.57,
      fl: 36.340381,
      glass: "J-FKH1 (HIKARI)",
      apd: false,
      role: "Low-dispersion positive rear member of the third G2B cemented doublet.",
      cemented: "L29/L210",
    },
    {
      id: 16,
      name: "L211",
      diagramLabel: "L211",
      label: "L211 — Negative meniscus",
      type: "Negative Meniscus, convex to object",
      nd: 1.883,
      vd: 40.66,
      fl: -39.928495,
      glass: "J-LASF08A class (HIKARI)",
      apd: false,
      role: "Negative front member of the fourth G2B cemented doublet.",
      cemented: "L211/L212",
    },
    {
      id: 17,
      name: "L212",
      diagramLabel: "L212",
      label: "L212 — Biconvex positive",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 26.968738,
      glass: "J-FKH1 (HIKARI)",
      apd: false,
      role: "Low-dispersion positive rear member of the fourth G2B cemented doublet.",
      cemented: "L211/L212",
    },
    {
      id: 18,
      name: "L213",
      diagramLabel: "L213",
      label: "L213 — Final biconvex positive",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.45,
      fl: 121.283297,
      glass: "487704 — fluor-crown class (closest FC5, HOYA; vendor unproven)",
      apd: false,
      role: "Final positive singlet preceding the corrected BF spacing.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 69.9791, d: 2.5992, nd: 1.72916, elemId: 1, sd: 18.9 },
    { label: "2", R: 18.1503, d: 11.9964, nd: 1.0, elemId: 0, sd: 14.15 },
    { label: "3A", R: 59.7861, d: 1.6095, nd: 1.59201, elemId: 2, sd: 10.7 },
    { label: "4", R: 19.6992, d: 6.698, nd: 1.0, elemId: 0, sd: 9.55 },
    { label: "5", R: -180.3004, d: 1.3596, nd: 1.59319, elemId: 3, sd: 8.35 },
    { label: "6", R: 20.0353, d: 1.9994, nd: 1.0, elemId: 0, sd: 7.9 },
    { label: "7", R: 22.6462, d: 5.9982, nd: 1.80518, elemId: 4, sd: 7.9 },
    { label: "8", R: 318.7364, d: 2.9186, nd: 1.0, elemId: 0, sd: 7.15 },
    { label: "9", R: -36.6413, d: 1.1996, nd: 1.59319, elemId: 5, sd: 6.5 },
    { label: "10", R: 249.8233, d: 18.71674, nd: 1.0, elemId: 0, sd: 6.3 },
    { label: "11", R: 42.6063, d: 1.8695, nd: 1.744, elemId: 6, sd: 6.05 },
    { label: "12", R: 641.2576, d: 1.0, nd: 1.0, elemId: 0, sd: 5.5882 },
    { label: "13", R: -16.4939, d: 0.8, nd: 1.883, elemId: 7, sd: 5.5882 },
    { label: "14", R: -19.2028, d: 2.0, nd: 1.0, elemId: 0, sd: 5.9 },
    { label: "15", R: -66.7649, d: 0.8, nd: 1.883, elemId: 8, sd: 5.4 },
    { label: "16", R: 14.2924, d: 3.4, nd: 1.67003, elemId: 9, sd: 5.45 },
    { label: "17", R: -15.7897, d: 3.48126, nd: 1.0, elemId: 0, sd: 5.65 },
    { label: "STO", R: 1e15, d: 2.05, nd: 1.0, elemId: 0, sd: 5.30556536232814 },
    { label: "19", R: -9.5349, d: 0.8, nd: 1.883, elemId: 10, sd: 5.65 },
    { label: "20", R: -20.6586, d: 2.75, nd: 1.51823, elemId: 11, sd: 6.45 },
    { label: "21", R: -9.98, d: 0.2, nd: 1.0, elemId: 0, sd: 7.0 },
    { label: "22", R: 20.8047, d: 4.87, nd: 1.60342, elemId: 12, sd: 8.7 },
    { label: "23", R: -14.8489, d: 0.7, nd: 1.883, elemId: 13, sd: 8.75 },
    { label: "24", R: -24.1607, d: 0.2, nd: 1.0, elemId: 0, sd: 8.95 },
    { label: "25", R: -58.0012, d: 0.7, nd: 1.883, elemId: 14, sd: 8.85 },
    { label: "26", R: 17.7676, d: 2.8, nd: 1.49782, elemId: 15, sd: 8.9 },
    { label: "27", R: 941.9509, d: 0.5, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "28", R: 68.2847, d: 0.7, nd: 1.883, elemId: 16, sd: 9.3 },
    { label: "29", R: 23.1398, d: 4.35, nd: 1.49782, elemId: 17, sd: 9.45 },
    { label: "30", R: -29.9823, d: 0.2175, nd: 1.0, elemId: 0, sd: 9.65 },
    { label: "31", R: 225.0, d: 1.7, nd: 1.48749, elemId: 18, sd: 9.95 },
    { label: "32", R: -80.0, d: 38.05242, nd: 1.0, elemId: 0, sd: 10.05 },
  ],

  asph: {
    "3A": {
      K: 0.0,
      A4: 2.04342e-6,
      A6: -1.19834e-8,
      A8: -1.95003e-11,
      A10: 0.0,
      A12: 0.0,
      A14: 0.0,
    },
  },

  /* ── Published zoom and focus states ── */
  zoomPositions: [8.17997, 11.8498, 15.45007],
  zoomStep: 0.004,
  zoomLabels: ["WIDE 8.18mm", "TELE 15.45mm"],
  var: {
    "10": [
      [18.71674, 19.24919],
      [7.35774, 7.69258],
      [1.45774, 1.71937],
    ],
    "17": [
      [3.48126, 2.94882],
      [3.48126, 3.14643],
      [3.48126, 3.21963],
    ],
    "32": [
      [38.05242, 38.05242],
      [47.30267, 47.30267],
      [56.37761, 56.37761],
    ],
  },
  varLabels: [
    ["10", "D1 — G1/G2 + focus-side gap"],
    ["17", "D2 — focus-to-stop gap"],
    ["32", "BF — surface 32 to IMG"],
  ],

  groups: [
    { text: "G1 (−)", fromSurface: "1", toSurface: "10" },
    { text: "G2A / G2F (+)", fromSurface: "11", toSurface: "17" },
    { text: "G2B (+)", fromSurface: "19", toSurface: "32" },
  ],
  doublets: [],

  closeFocusM: 0.3524603,
  focusDescription:
    "PUBLISHED: G2A (L21–L24) translates imageward. The patent close rows use β = −0.03333 and " +
    "object distances from the focal plane of 0.352460, 0.461387, and 0.573028 m at W/M/T; they do not " +
    "represent the production lens's 0.16 m MFD.",

  nominalFno: [3.56351, 4.12559, 4.67681],
  fstopSeries: [3.5, 4, 4.5, 5.6, 8, 11, 16],

  // Source geometry nearly closes the surface 12/13 air gap at the accepted clear band.
  gapSagFrac: 1.0,
  yScFill: 0.52,
} satisfies LensDataInput;

export default LENS_DATA;
