import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Lens data - NIKON AF-S VR ZOOM-NIKKOR 200-400mm f/4 G IF-ED
 *
 * Source: US 2005/0157403 A1, Example 1 (Susumu Sato / Nikon Corporation).
 * Production correlation: Nikon's original 2003 AF-S VR Zoom-Nikkor 200-400mm f/4G IF-ED.
 * Prescription: 24 active glass elements / 17 groups; all spherical; d-line nd/vd data.
 *
 * Source corrections retained from the Stage-1 audit:
 * - Infinity/tele d7 is printed as -54.90581 mm; modeled as +54.90581 mm because the published focusing mechanism
 *   and independent paraxial recovery of the 392 mm state require the positive sign.
 * - Infinity d26 is omitted; the published close-focus d26 values are reused because the patent states that only G1m
 *   focuses, making d26 a zoom-only spacing. The filled values independently recover the published EFL/BFL states.
 *
 * Focus status: PUBLISHED. G1m (L15-L17) translates imageward by 17.49408 mm from infinity to the published 2 m state;
 * d7 + d12 remains 78.75748 mm. G2 and G3 provide zoom motion. G4m shifts transversely for VR; that decenter is a
 * source fact but is not an authored axial var state in the ordinary sequential prescription.
 *
 * Rear filter: source surfaces 44-45 (rear-inserting filter BFL, 2.00 mm, nd=1.51680, vd=64.12) are drawn as a
 * plane-parallel plate element and traced by every analysis. Surface 43 stores the printed 3.00 mm gap to the filter
 * and the plate carries the printed Bf = 91.16781 mm (identical at every zoom and focus state) to the image plane.
 * The air-equivalent rear spacing 3.00 + 2.00/1.51680 + 91.16781 = 95.48637540084388 mm is unchanged. The plate's
 * semi-diameter is a ray-trace estimate (the source lists none) and it is not counted in `elementCount`.
 *
 * Field stop S2 is retained as an optically neutral clear-aperture plane because the patent explicitly places a field
 * stop between G4f and G4m. Its sd=17.90 mm is inferred from the full-field (Y=21.60 mm) paraxial envelope at S2
 * (maximum 17.826 mm), rather than treated as an opaque blocker.
 *
 * Semi-diameters: the patent publishes group maximum effective diameters d1=102.10, d1r=55.86, d4f=38.49, and
 * d4m=27.83 mm. Those values anchor G1, G1r, G4f, and G4m. Remaining SDs are derived from the 204/300/392 mm
 * marginal/chief-ray envelopes, Fig. 1 proportions, cemented-interface continuity, and geometry constraints. A local
 * gapSagFrac=0.95 is used because the source G2 geometry at surfaces 19-20 leaves a positive ~0.212 mm rim gap at the
 * on-axis modeled aperture; the default 0.90 clearance policy would artificially vignette the published f/4.08 state.
 * No layout control is used to conceal invalid geometry.
 *
 * Glass labels use coefficient-backed catalog equivalents where the nd/vd coordinate is compatible; production
 * suppliers remain unproven. The patent does not publish per-element nC/nF/ng or dPgF, so those fields are
 * intentionally absent. The four production-correlated ED positions are tagged APD-inferred for the viewer without
 * asserting a particular production melt or quantitative dPgF value.
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-afs-vr-200400f4g-if-ed",
  maker: "Nikon",
  name: "NIKON AF-S VR ZOOM-NIKKOR 200-400mm f/4 G IF-ED",
  subtitle: "US 2005/0157403 A1 Example 1 - Susumu Sato / Nikon Corporation",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "24 ELEMENTS / 17 GROUPS",
      "200-400mm f/4 (MARKETED)",
      "204-392mm F/4.08 (EXAMPLE 1)",
      "4 ED ELEMENTS (PRODUCTION SPEC)",
      "VR / INTERNAL FOCUS",
    ],
    elementCount: 24,
    groupCount: 17,
    acceptsTeleconverters: true, // Nikon lists this lens as compatible with the AF-S TC-20E III
    focalLengthMm: { marketing: [200, 400], design: [204, 392] },
    fNumber: { marketing: 4, design: 4.08 },
  },

  source: {
    patentNumber: "US 2005/0157403 A1",
    patentYear: 2005,
    authors: ["Susumu Sato"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.80384,
      vd: 33.89,
      focalLengthMm: -243.479577,
      glass: "E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified)",
      role: "Negative meniscus at the object side of the fixed positive G1f front group.",
      diagramLabel: "L11",
      cemented: "D11",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.56,
      focalLengthMm: 216.992431,
      glass: "498826 - low-dispersion crown class (vendor identity unproven)",
      apd: "inferred",
      apdNote: "Production-correlated ED element; the patent publishes nd/vd only.",
      role: "Positive partner of the L11/L12 cemented unit in G1f.",
      diagramLabel: "L12",
      cemented: "D11",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.56,
      focalLengthMm: 349.31747,
      glass: "498826 - low-dispersion crown class (vendor identity unproven)",
      apd: "inferred",
      apdNote: "Production-correlated ED element; the patent publishes nd/vd only.",
      role: "Positive low-dispersion meniscus in the fixed G1f front group.",
      diagramLabel: "L13",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.56,
      focalLengthMm: 335.580445,
      glass: "498826 - low-dispersion crown class (vendor identity unproven)",
      apd: "inferred",
      apdNote: "Production-correlated ED element; the patent publishes nd/vd only.",
      role: "Rear positive low-dispersion meniscus of the fixed G1f front group.",
      diagramLabel: "L14",
    },
    {
      id: 5,
      name: "L15",
      label: "L15",
      type: "Biconcave Negative",
      nd: 1.788,
      vd: 47.38,
      focalLengthMm: -120.621502,
      glass: "788474/475 - lanthanum glass class",
      role: "Front negative element of the translating G1m internal-focus group.",
      diagramLabel: "L15",
    },
    {
      id: 6,
      name: "L16",
      label: "L16",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 399.785181,
      glass: "847238 - dense-flint class",
      role: "Positive meniscus in the rear cemented pair of the translating G1m focus group.",
      diagramLabel: "L16",
      cemented: "D16",
    },
    {
      id: 7,
      name: "L17",
      label: "L17",
      type: "Biconcave Negative",
      nd: 1.603,
      vd: 65.47,
      focalLengthMm: -197.423539,
      glass: "603655 - phosphate-crown class",
      role: "Negative partner of L16; completes the negative-power G1m focus group.",
      diagramLabel: "L17",
      cemented: "D16",
    },
    {
      id: 8,
      name: "L18",
      label: "L18",
      type: "Positive Meniscus",
      nd: 1.8044,
      vd: 39.59,
      focalLengthMm: 168.079064,
      glass: "804396 - lanthanum glass class",
      role: "Fixed positive rear subgroup G1r.",
      diagramLabel: "L18",
    },
    {
      id: 9,
      name: "L21",
      label: "L21",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.52,
      focalLengthMm: -130.817897,
      glass: "697555 - lanthanum-crown class",
      role: "Front negative element of the negative-power G2 zoom variator.",
      diagramLabel: "L21",
    },
    {
      id: 10,
      name: "L22",
      label: "L22",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 86.627258,
      glass: "847238 - dense-flint class",
      role: "Positive element in the cemented negative unit of G2.",
      diagramLabel: "L22",
      cemented: "D22",
    },
    {
      id: 11,
      name: "L23",
      label: "L23",
      type: "Biconcave Negative",
      nd: 1.64,
      vd: 60.09,
      focalLengthMm: -81.586031,
      glass: "S-BSM81 catalog equivalent (patent 640601; production supplier unspecified)",
      role: "Negative partner of L22 in the cemented G2 unit.",
      diagramLabel: "L23",
      cemented: "D22",
    },
    {
      id: 12,
      name: "L24",
      label: "L24",
      type: "Negative Meniscus",
      nd: 1.64,
      vd: 60.09,
      focalLengthMm: -106.07107,
      glass: "S-BSM81 catalog equivalent (patent 640601; production supplier unspecified)",
      role: "Rear negative meniscus of the G2 zoom variator.",
      diagramLabel: "L24",
    },
    {
      id: 13,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.603,
      vd: 65.47,
      focalLengthMm: 290.746714,
      glass: "603655 - phosphate-crown class",
      role: "Front positive element of the positive-power G3 zoom compensator.",
      diagramLabel: "L31",
    },
    {
      id: 14,
      name: "L32",
      label: "L32",
      type: "Biconvex Positive",
      nd: 1.603,
      vd: 65.47,
      focalLengthMm: 81.270386,
      glass: "603655 - phosphate-crown class",
      role: "Positive element of the rear cemented pair in G3.",
      diagramLabel: "L32",
      cemented: "D32",
    },
    {
      id: 15,
      name: "L33",
      label: "L33",
      type: "Negative Meniscus",
      nd: 1.79504,
      vd: 28.55,
      focalLengthMm: -137.442119,
      glass: "J-LAFH3 catalog equivalent (patent 795286; production supplier unspecified)",
      role: "Negative partner of L32; completes the positive-power G3 compensator.",
      diagramLabel: "L33",
      cemented: "D32",
    },
    {
      id: 16,
      name: "L41",
      label: "L41",
      type: "Negative Meniscus",
      nd: 1.80384,
      vd: 33.89,
      focalLengthMm: -325.627594,
      glass: "E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified)",
      role: "Negative meniscus at the front of the fixed positive G4f relay group.",
      diagramLabel: "L41",
      cemented: "D41",
    },
    {
      id: 17,
      name: "L42",
      label: "L42",
      type: "Biconvex Positive",
      nd: 1.603,
      vd: 65.47,
      focalLengthMm: 123.586975,
      glass: "603655 - phosphate-crown class",
      role: "Positive partner of L41 in the cemented G4f unit.",
      diagramLabel: "L42",
      cemented: "D41",
    },
    {
      id: 18,
      name: "L43",
      label: "L43",
      type: "Positive Meniscus",
      nd: 1.603,
      vd: 65.47,
      focalLengthMm: 196.423716,
      glass: "603655 - phosphate-crown class",
      role: "Rear positive meniscus of G4f, immediately ahead of the published field stop S2.",
      diagramLabel: "L43",
    },
    {
      id: 19,
      name: "L44",
      label: "L44",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 73.470703,
      glass: "847238 - dense-flint class",
      role: "Positive element in the cemented front pair of the negative-power G4m VR group.",
      diagramLabel: "L44",
      cemented: "D44",
    },
    {
      id: 20,
      name: "L45",
      label: "L45",
      type: "Biconcave Negative",
      nd: 1.741,
      vd: 52.67,
      focalLengthMm: -42.80982,
      glass: "741527/528 - lanthanum-crown class",
      role: "Negative partner of L44 in the transversely shifting G4m vibration-reduction group.",
      diagramLabel: "L45",
      cemented: "D44",
    },
    {
      id: 21,
      name: "L46",
      label: "L46",
      type: "Biconcave Negative",
      nd: 1.741,
      vd: 52.67,
      focalLengthMm: -120.264566,
      glass: "741527/528 - lanthanum-crown class",
      role: "Rear negative element of G4m; the complete subgroup shifts transversely for VR.",
      diagramLabel: "L46",
    },
    {
      id: 22,
      name: "L47",
      label: "L47",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.56,
      focalLengthMm: 139.311163,
      glass: "498826 - low-dispersion crown class (vendor identity unproven)",
      apd: "inferred",
      apdNote: "Production-correlated ED element; the patent publishes nd/vd only.",
      role: "Front positive element of the fixed G4r rear relay.",
      diagramLabel: "L47",
    },
    {
      id: 23,
      name: "L48",
      label: "L48",
      type: "Biconvex Positive",
      nd: 1.64,
      vd: 60.09,
      focalLengthMm: 51.658281,
      glass: "S-BSM81 catalog equivalent (patent 640601; production supplier unspecified)",
      role: "Positive element in the final cemented positive relay unit.",
      diagramLabel: "L48",
      cemented: "D48",
    },
    {
      id: 24,
      name: "L49",
      label: "L49",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -66.168729,
      glass: "847238 - dense-flint class",
      role: "Negative partner of L48 and final active glass element before the rear filter plate.",
      diagramLabel: "L49",
      cemented: "D48",
    },
    {
      id: 25,
      name: "BFL",
      label: "Slip-in filter BFL",
      type: "Plane-Parallel Plate",
      nd: 1.5168,
      vd: 64.12,
      glass: "J-BK7A",
      role: "Plane-parallel filter plate of the patent prescription (US 2005/0157403 A1, Example 1 Table 1 surfaces 44–45), in the rear filter holder. The design is computed with it in place, so it is drawn and traced as part of the working system. Semi-diameter is a ray-trace estimate; the source lists none. Not counted in elementCount.",
    },
  ],

  surfaces: [
    { label: "1", R: 370.787, d: 5.3, sd: 51.05, medium: 1 },
    { label: "2", R: 127.285, d: 16, sd: 51.05, medium: 2 },
    { label: "3", R: -684.01, d: 0.2, sd: 50.8 },
    { label: "4", R: 141.046, d: 9.5, sd: 50, medium: 3 },
    { label: "5", R: 729.91, d: 0.2, sd: 49.5 },
    { label: "6", R: 158.558, d: 9.5, sd: 49, medium: 4 },
    { label: "7", R: 3054, sd: 47.5 },
    { label: "8", R: -294.108, d: 2.9, sd: 30, medium: 5 },
    { label: "9", R: 141.046, d: 9, sd: 29.5 },
    { label: "10", R: -452.783, d: 4, sd: 29, medium: 6 },
    { label: "11", R: -194.473, d: 2.9, sd: 29, medium: 7 },
    { label: "12", R: 308.66, sd: 28.5 },
    { label: "13", R: -674.36, d: 5.4, sd: 27.93, medium: 8 },
    { label: "14", R: -113.025, sd: 27.93 },
    { label: "15", R: 699.21, d: 1.9, sd: 23.5, medium: 9 },
    { label: "16", R: 80.551, d: 2.05, sd: 18.05 },
    { label: "17", R: 749.83, d: 4.5, sd: 18.05, medium: 10 },
    { label: "18", R: -81.072, d: 1.9, sd: 18.05, medium: 11 },
    { label: "19", R: 148.037, d: 3.94, sd: 17.85 },
    { label: "20", R: -61.497, d: 1.9, sd: 17.85, medium: 12 },
    { label: "21", R: -661.36, sd: 18.2 },
    { label: "22", R: 349.981, d: 3.5, sd: 23, medium: 13 },
    { label: "23", R: -349.981, d: 0.5, sd: 23 },
    { label: "24", R: 623.77, d: 6, sd: 23, medium: 14 },
    { label: "25", R: -52.992, d: 1.9, sd: 23, medium: 15 },
    { label: "26", R: -104.522, sd: 23 },
    { label: "STO", R: "flat", d: 1 },
    { label: "28", R: 119.718, d: 2, sd: 19.245, medium: 16 },
    { label: "29", R: 81.535, d: 4.5, sd: 19.245, medium: 17 },
    { label: "30", R: -848.55, d: 0.1, sd: 19.15 },
    { label: "31", R: 68.648, d: 4, sd: 19, medium: 18 },
    { label: "32", R: 159.707, d: 22, sd: 18.5 },
    { label: "S2", R: "flat", d: 2.27, sd: 17.9 },
    { label: "34", R: 440.216, d: 3.3, sd: 13.915, medium: 19 },
    { label: "35", R: -72.192, d: 1.6, sd: 13.915, medium: 20 },
    { label: "36", R: 57.121, d: 4.5, sd: 13.6 },
    { label: "37", R: -462.274, d: 1.6, sd: 13.6, medium: 21 },
    { label: "38", R: 110.561, d: 4.86, sd: 13.5 },
    { label: "39", R: 286.107, d: 4, sd: 19.5, medium: 22 },
    { label: "40", R: -91.116, d: 0.1, sd: 20 },
    { label: "41", R: 64.829, d: 6.5, sd: 19.8, medium: 23 },
    { label: "42", R: -64.829, d: 1.7, sd: 19.8, medium: 24 },
    { label: "43", R: 417.363, d: 3, sd: 19.8 }, // gap to the BFL filter plate
    // Slip-in filter BFL (US 2005/0157403 A1, Example 1 Table 1 surfaces 44–45), drawn as a plane-parallel plate.
    // Its sd is a ray-trace estimate (the source lists none).
    { label: "44", R: "flat", d: 2, sd: 19.5, medium: 25 },
    { label: "45", R: "flat", d: 91.16781, sd: 19.5 }, // slip-in filter → image plane
  ],

  zoom: {
    // (moved from publishedStations) The close-focus row is source-tabulated.
    stations: [
      { focalLengthMm: 204, label: "Wide", published: true, publishedFocus: [1] },
      { focalLengthMm: 300, published: true, publishedFocus: [1] },
      { focalLengthMm: 392, label: "Tele", published: true, publishedFocus: [1] },
    ],
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 2,
    description:
      "PUBLISHED internal focus: G1m (L15-L17) translates 17.49408 mm imageward from infinity to the patent's 2 m state; G2/G3 zoom gaps are published. G4m VR decenter is transverse and is not represented as an axial var state.",
  },

  gaps: {
    "7": {
      label: "D7 / G1m front",
      values: [
        [54.90581, 72.39989],
        [54.90581, 72.39989],
        [54.90581, 72.39989],
      ],
    },
    "12": {
      label: "D12 / G1m rear",
      values: [
        [23.85167, 6.35759],
        [23.85167, 6.35759],
        [23.85167, 6.35759],
      ],
    },
    "14": {
      label: "D14 / G2 front",
      values: [
        [5.84488, 5.84488],
        [38.5913, 38.5913],
        [54.82963, 54.82963],
      ],
    },
    "21": {
      label: "D21 / G3 front",
      values: [
        [29.27185, 29.27185],
        [15.53993, 15.53993],
        [2.41844, 2.41844],
      ],
    },
    "26": {
      label: "D26 / S1 front",
      values: [
        [25.24955, 25.24955],
        [6.23504, 6.23504],
        [3.1182, 3.1182],
      ],
    },
  },

  aperture: { nominalFNumber: 4.08, fStops: [4.08, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "14" },
    { text: "G2", fromSurface: "15", toSurface: "21" },
    { text: "G3", fromSurface: "22", toSurface: "26" },
    { text: "G4", fromSurface: "28", toSurface: "43" },
  ],
  doublets: [
    { text: "D11", fromSurface: "1", toSurface: "3" },
    { text: "D16", fromSurface: "10", toSurface: "12" },
    { text: "D22", fromSurface: "17", toSurface: "19" },
    { text: "D32", fromSurface: "24", toSurface: "26" },
    { text: "D41", fromSurface: "28", toSurface: "30" },
    { text: "D44", fromSurface: "34", toSurface: "36" },
    { text: "D48", fromSurface: "41", toSurface: "43" },
  ],

  layout: { yScFill: 0.32 },

  checks: { gapSagFrac: 0.95 },
} satisfies LensDataV2Input;

export default LENS_DATA;
