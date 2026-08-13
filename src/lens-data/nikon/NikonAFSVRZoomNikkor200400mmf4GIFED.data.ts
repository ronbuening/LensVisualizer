import type { LensDataInput } from "../../types/optics.js";

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
 * Rear normalization: source filter surfaces 44-45 (2.00 mm, nd=1.51680) are excluded. Surface 43 therefore uses the
 * air-equivalent rear spacing 3.00 + 2.00/1.51680 + 91.16781 = 95.48637540084388 mm to the image plane.
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
 * suppliers remain unproven. The patent does not publish
 * per-element nC/nF/ng or dPgF, so those fields are intentionally absent and no anomalous-partial-dispersion claim is
 * encoded from nd/vd alone.
 */

const LENS_DATA = {
  key: "nikon-afs-vr-200400f4g-if-ed",
  maker: "Nikon",
  name: "NIKON AF-S VR ZOOM-NIKKOR 200-400mm f/4 G IF-ED",
  subtitle: "US 2005/0157403 A1 Example 1 - Susumu Sato / Nikon Corporation",
  specs: [
    "24 ELEMENTS / 17 GROUPS",
    "200-400mm f/4 (MARKETED)",
    "204-392mm F/4.08 (EXAMPLE 1)",
    "4 ED ELEMENTS (PRODUCTION SPEC)",
    "VR / INTERNAL FOCUS",
  ],

  focalLengthMarketing: [200, 400],
  focalLengthDesign: [204, 392],
  apertureMarketing: 4,
  apertureDesign: 4.08,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2005/0157403 A1",
  patentAuthors: ["Susumu Sato"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2005,
  elementCount: 24,
  groupCount: 17,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.80384,
      vd: 33.89,
      fl: -243.479577,
      glass: "E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified)",
      cemented: "D11",
      role: "Negative meniscus at the object side of the fixed positive G1f front group.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.56,
      fl: 216.992431,
      glass: "498826 - low-dispersion crown class (vendor identity unproven)",
      cemented: "D11",
      role: "Positive partner of the L11/L12 cemented unit in G1f.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.56,
      fl: 349.31747,
      glass: "498826 - low-dispersion crown class (vendor identity unproven)",
      role: "Positive low-dispersion meniscus in the fixed G1f front group.",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.56,
      fl: 335.580445,
      glass: "498826 - low-dispersion crown class (vendor identity unproven)",
      role: "Rear positive low-dispersion meniscus of the fixed G1f front group.",
    },
    {
      id: 5,
      name: "L15",
      label: "L15",
      type: "Biconcave Negative",
      nd: 1.788,
      vd: 47.38,
      fl: -120.621502,
      glass: "788474/475 - lanthanum glass class",
      role: "Front negative element of the translating G1m internal-focus group.",
    },
    {
      id: 6,
      name: "L16",
      label: "L16",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: 399.785181,
      glass: "847238 - dense-flint class",
      cemented: "D16",
      role: "Positive meniscus in the rear cemented pair of the translating G1m focus group.",
    },
    {
      id: 7,
      name: "L17",
      label: "L17",
      type: "Biconcave Negative",
      nd: 1.603,
      vd: 65.47,
      fl: -197.423539,
      glass: "603655 - phosphate-crown class",
      cemented: "D16",
      role: "Negative partner of L16; completes the negative-power G1m focus group.",
    },
    {
      id: 8,
      name: "L18",
      label: "L18",
      type: "Positive Meniscus",
      nd: 1.8044,
      vd: 39.59,
      fl: 168.079064,
      glass: "804396 - lanthanum glass class",
      role: "Fixed positive rear subgroup G1r.",
    },
    {
      id: 9,
      name: "L21",
      label: "L21",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.52,
      fl: -130.817897,
      glass: "697555 - lanthanum-crown class",
      role: "Front negative element of the negative-power G2 zoom variator.",
    },
    {
      id: 10,
      name: "L22",
      label: "L22",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      fl: 86.627258,
      glass: "847238 - dense-flint class",
      cemented: "D22",
      role: "Positive element in the cemented negative unit of G2.",
    },
    {
      id: 11,
      name: "L23",
      label: "L23",
      type: "Biconcave Negative",
      nd: 1.64,
      vd: 60.09,
      fl: -81.586031,
      glass: "S-BSM81 catalog equivalent (patent 640601; production supplier unspecified)",
      cemented: "D22",
      role: "Negative partner of L22 in the cemented G2 unit.",
    },
    {
      id: 12,
      name: "L24",
      label: "L24",
      type: "Negative Meniscus",
      nd: 1.64,
      vd: 60.09,
      fl: -106.07107,
      glass: "S-BSM81 catalog equivalent (patent 640601; production supplier unspecified)",
      role: "Rear negative meniscus of the G2 zoom variator.",
    },
    {
      id: 13,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.603,
      vd: 65.47,
      fl: 290.746714,
      glass: "603655 - phosphate-crown class",
      role: "Front positive element of the positive-power G3 zoom compensator.",
    },
    {
      id: 14,
      name: "L32",
      label: "L32",
      type: "Biconvex Positive",
      nd: 1.603,
      vd: 65.47,
      fl: 81.270386,
      glass: "603655 - phosphate-crown class",
      cemented: "D32",
      role: "Positive element of the rear cemented pair in G3.",
    },
    {
      id: 15,
      name: "L33",
      label: "L33",
      type: "Negative Meniscus",
      nd: 1.79504,
      vd: 28.55,
      fl: -137.442119,
      glass: "J-LAFH3 catalog equivalent (patent 795286; production supplier unspecified)",
      cemented: "D32",
      role: "Negative partner of L32; completes the positive-power G3 compensator.",
    },
    {
      id: 16,
      name: "L41",
      label: "L41",
      type: "Negative Meniscus",
      nd: 1.80384,
      vd: 33.89,
      fl: -325.627594,
      glass: "E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified)",
      cemented: "D41",
      role: "Negative meniscus at the front of the fixed positive G4f relay group.",
    },
    {
      id: 17,
      name: "L42",
      label: "L42",
      type: "Biconvex Positive",
      nd: 1.603,
      vd: 65.47,
      fl: 123.586975,
      glass: "603655 - phosphate-crown class",
      cemented: "D41",
      role: "Positive partner of L41 in the cemented G4f unit.",
    },
    {
      id: 18,
      name: "L43",
      label: "L43",
      type: "Positive Meniscus",
      nd: 1.603,
      vd: 65.47,
      fl: 196.423716,
      glass: "603655 - phosphate-crown class",
      role: "Rear positive meniscus of G4f, immediately ahead of the published field stop S2.",
    },
    {
      id: 19,
      name: "L44",
      label: "L44",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      fl: 73.470703,
      glass: "847238 - dense-flint class",
      cemented: "D44",
      role: "Positive element in the cemented front pair of the negative-power G4m VR group.",
    },
    {
      id: 20,
      name: "L45",
      label: "L45",
      type: "Biconcave Negative",
      nd: 1.741,
      vd: 52.67,
      fl: -42.80982,
      glass: "741527/528 - lanthanum-crown class",
      cemented: "D44",
      role: "Negative partner of L44 in the transversely shifting G4m vibration-reduction group.",
    },
    {
      id: 21,
      name: "L46",
      label: "L46",
      type: "Biconcave Negative",
      nd: 1.741,
      vd: 52.67,
      fl: -120.264566,
      glass: "741527/528 - lanthanum-crown class",
      role: "Rear negative element of G4m; the complete subgroup shifts transversely for VR.",
    },
    {
      id: 22,
      name: "L47",
      label: "L47",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.56,
      fl: 139.311163,
      glass: "498826 - low-dispersion crown class (vendor identity unproven)",
      role: "Front positive element of the fixed G4r rear relay.",
    },
    {
      id: 23,
      name: "L48",
      label: "L48",
      type: "Biconvex Positive",
      nd: 1.64,
      vd: 60.09,
      fl: 51.658281,
      glass: "S-BSM81 catalog equivalent (patent 640601; production supplier unspecified)",
      cemented: "D48",
      role: "Positive element in the final cemented positive relay unit.",
    },
    {
      id: 24,
      name: "L49",
      label: "L49",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      fl: -66.168729,
      glass: "847238 - dense-flint class",
      cemented: "D48",
      role: "Negative partner of L48 and final active glass element before the normalized rear image spacing.",
    },
  ],

  surfaces: [
    { label: "1", R: 370.787, d: 5.3, nd: 1.80384, elemId: 1, sd: 51.05 },
    { label: "2", R: 127.285, d: 16, nd: 1.49782, elemId: 2, sd: 51.05 },
    { label: "3", R: -684.01, d: 0.2, nd: 1, elemId: 0, sd: 50.8 },
    { label: "4", R: 141.046, d: 9.5, nd: 1.49782, elemId: 3, sd: 50 },
    { label: "5", R: 729.91, d: 0.2, nd: 1, elemId: 0, sd: 49.5 },
    { label: "6", R: 158.558, d: 9.5, nd: 1.49782, elemId: 4, sd: 49 },
    { label: "7", R: 3054, d: 54.90581, nd: 1, elemId: 0, sd: 47.5 },
    { label: "8", R: -294.108, d: 2.9, nd: 1.788, elemId: 5, sd: 30 },
    { label: "9", R: 141.046, d: 9, nd: 1, elemId: 0, sd: 29.5 },
    { label: "10", R: -452.783, d: 4, nd: 1.84666, elemId: 6, sd: 29 },
    { label: "11", R: -194.473, d: 2.9, nd: 1.603, elemId: 7, sd: 29 },
    { label: "12", R: 308.66, d: 23.85167, nd: 1, elemId: 0, sd: 28.5 },
    { label: "13", R: -674.36, d: 5.4, nd: 1.8044, elemId: 8, sd: 27.93 },
    { label: "14", R: -113.025, d: 5.84488, nd: 1, elemId: 0, sd: 27.93 },
    { label: "15", R: 699.21, d: 1.9, nd: 1.6968, elemId: 9, sd: 23.5 },
    { label: "16", R: 80.551, d: 2.05, nd: 1, elemId: 0, sd: 18.05 },
    { label: "17", R: 749.83, d: 4.5, nd: 1.84666, elemId: 10, sd: 18.05 },
    { label: "18", R: -81.072, d: 1.9, nd: 1.64, elemId: 11, sd: 18.05 },
    { label: "19", R: 148.037, d: 3.94, nd: 1, elemId: 0, sd: 17.85 },
    { label: "20", R: -61.497, d: 1.9, nd: 1.64, elemId: 12, sd: 17.85 },
    { label: "21", R: -661.36, d: 29.27185, nd: 1, elemId: 0, sd: 18.2 },
    { label: "22", R: 349.981, d: 3.5, nd: 1.603, elemId: 13, sd: 23 },
    { label: "23", R: -349.981, d: 0.5, nd: 1, elemId: 0, sd: 23 },
    { label: "24", R: 623.77, d: 6, nd: 1.603, elemId: 14, sd: 23 },
    { label: "25", R: -52.992, d: 1.9, nd: 1.79504, elemId: 15, sd: 23 },
    { label: "26", R: -104.522, d: 25.24955, nd: 1, elemId: 0, sd: 23 },
    { label: "STO", R: 1e15, d: 1, nd: 1, elemId: 0, sd: 19.12567431 },
    { label: "28", R: 119.718, d: 2, nd: 1.80384, elemId: 16, sd: 19.245 },
    { label: "29", R: 81.535, d: 4.5, nd: 1.603, elemId: 17, sd: 19.245 },
    { label: "30", R: -848.55, d: 0.1, nd: 1, elemId: 0, sd: 19.15 },
    { label: "31", R: 68.648, d: 4, nd: 1.603, elemId: 18, sd: 19 },
    { label: "32", R: 159.707, d: 22, nd: 1, elemId: 0, sd: 18.5 },
    { label: "S2", R: 1e15, d: 2.27, nd: 1, elemId: 0, sd: 17.9 },
    { label: "34", R: 440.216, d: 3.3, nd: 1.84666, elemId: 19, sd: 13.915 },
    { label: "35", R: -72.192, d: 1.6, nd: 1.741, elemId: 20, sd: 13.915 },
    { label: "36", R: 57.121, d: 4.5, nd: 1, elemId: 0, sd: 13.6 },
    { label: "37", R: -462.274, d: 1.6, nd: 1.741, elemId: 21, sd: 13.6 },
    { label: "38", R: 110.561, d: 4.86, nd: 1, elemId: 0, sd: 13.5 },
    { label: "39", R: 286.107, d: 4, nd: 1.49782, elemId: 22, sd: 19.5 },
    { label: "40", R: -91.116, d: 0.1, nd: 1, elemId: 0, sd: 20 },
    { label: "41", R: 64.829, d: 6.5, nd: 1.64, elemId: 23, sd: 19.8 },
    { label: "42", R: -64.829, d: 1.7, nd: 1.84666, elemId: 24, sd: 19.8 },
    { label: "43", R: 417.363, d: 95.48637540084388, nd: 1, elemId: 0, sd: 19.8 },
  ],

  asph: {},

  zoomPositions: [204, 300, 392],
  zoomLabels: ["Wide", "Tele"],

  var: {
    "7": [
      [54.90581, 72.39989],
      [54.90581, 72.39989],
      [54.90581, 72.39989],
    ],
    "12": [
      [23.85167, 6.35759],
      [23.85167, 6.35759],
      [23.85167, 6.35759],
    ],
    "14": [
      [5.84488, 5.84488],
      [38.5913, 38.5913],
      [54.82963, 54.82963],
    ],
    "21": [
      [29.27185, 29.27185],
      [15.53993, 15.53993],
      [2.41844, 2.41844],
    ],
    "26": [
      [25.24955, 25.24955],
      [6.23504, 6.23504],
      [3.1182, 3.1182],
    ],
  },

  varLabels: [
    ["7", "D7 / G1m front"],
    ["12", "D12 / G1m rear"],
    ["14", "D14 / G2 front"],
    ["21", "D21 / G3 front"],
    ["26", "D26 / S1 front"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "14" },
    { text: "G2", fromSurface: "15", toSurface: "21" },
    { text: "G3", fromSurface: "22", toSurface: "26" },
    { text: "G4", fromSurface: "28", toSurface: "43" },
  ],

  doublets: [
    { text: "L11+L12", fromSurface: "1", toSurface: "3" },
    { text: "L16+L17", fromSurface: "10", toSurface: "12" },
    { text: "L22+L23", fromSurface: "17", toSurface: "19" },
    { text: "L32+L33", fromSurface: "24", toSurface: "26" },
    { text: "L41+L42", fromSurface: "28", toSurface: "30" },
    { text: "L44+L45", fromSurface: "34", toSurface: "36" },
    { text: "L48+L49", fromSurface: "41", toSurface: "43" },
  ],

  closeFocusM: 2,
  focusDescription:
    "PUBLISHED internal focus: G1m (L15-L17) translates 17.49408 mm imageward from infinity to the patent's 2 m state; G2/G3 zoom gaps are published. G4m VR decenter is transverse and is not represented as an axial var state.",

  nominalFno: 4.08,
  fstopSeries: [4.08, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  apertureBlades: 9,

  gapSagFrac: 0.95,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
