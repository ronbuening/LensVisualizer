import type { LensDataInput } from "../../types/optics.js";

/**
 * NIKON AI ZOOM-NIKKOR ED 50-300mm f/4.5
 *
 * Source: US 4,189,213 A, Example 3, Yutaka Iizuka / Nippon Kogaku K.K.
 * Patent prescription: 15 elements in 5 patent groups, all spherical, f = 50.000-295.200 mm, f/4.5.
 * Production correlation: Nikon identifies Yutaka Iizuka as designer of the Ai Zoom Nikkor ED 50-300mm F4.5,
 * released in May 1977, with a fixed first zoom group and ED glass in the second element of that group.
 *
 * Zoom normalization:
 * - Patent variable gaps are d5, d11, and d18.
 * - The published diaphragm lies 2.0 mm ahead of surface 19, so d18 is split into surface 18 -> STO = d18 - 2.0 mm
 *   and STO -> surface 19 = 2.0 mm. This synthetic neutral-air STO is the only added sequential plane.
 * - d5 changes with both zoom and focus; d11 and the normalized surface-18 gap change with zoom only.
 * - No uniform scaling is applied. The design endpoints remain the patent values 50.000 and 295.200 mm; the marketed
 *   50-300mm range is stored separately.
 *
 * Focus status: CONSTRAINED_RECONSTRUCTION.
 * The patent states that focusing moves only the first lens group toward the object. Nikon gives a 2.5 m MFD from the
 * focal plane. Stage-1 code solving gives G1 objectward shifts of 13.184948, 13.175210, and 13.174286 mm at the three
 * zoom positions. In this front-group-anchored sequential model, those shifts are represented by equal increases of d5;
 * G2-G5 and the image plane therefore remain fixed relative to one another. These close-focus values are reconstructed,
 * not patent-published spacing rows.
 *
 * Semi-diameters are modeled clear apertures, not patent-published values. They were derived from the verified physical
 * stop (12.7246 mm semi-diameter), the patent half-field angles, paraxial marginal/chief-ray envelopes at the viewer's
 * representative 0.6 field fraction with +/-0.83 pupil sampling, the patent optical section, and physical edge-thickness,
 * rim-slope, cross-gap, and render-clearance constraints. No layout control is used to conceal invalid geometry.
 *
 * Spectral limitation: Example 3 publishes only nd and vd. It does not publish nC, nF, ng, PgF, or dPgF, so those fields
 * are intentionally not invented. Glass strings retain the patent coordinates while naming coefficient-backed catalog
 * equivalents only where the resolver's coordinate guard passes; none asserts the production supplier.
 */

const LENS_DATA = {
  key: "nikon-ai-zoom-nikkor-ed-50-300-f45",
  maker: "Nikon",
  name: "NIKON AI ZOOM-NIKKOR ED 50-300mm f/4.5",
  subtitle: "US 4,189,213 A Example 3 — Yutaka Iizuka / Nippon Kogaku K.K.",
  specs: ["15 ELEMENTS / 5 PATENT GROUPS", "50-300mm", "f/4.5", "ED", "ALL-SPHERICAL"],

  focalLengthMarketing: [50, 300],
  focalLengthDesign: [50.000485, 295.206225],
  apertureMarketing: 4.5,
  apertureDesign: 4.5,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,189,213 A",
  patentAuthors: ["Yutaka Iizuka"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1980,
  elementCount: 15,
  groupCount: 5,

  elements: [
    { id: 1, name: "L1", label: "Element 1", type: "Negative Meniscus", nd: 1.7495, vd: 35.0, fl: -235.721601, glass: "750350 — lanthanum flint class", cemented: "D1" },
    { id: 2, name: "L2", label: "Element 2 (ED)", type: "Biconvex Positive", nd: 1.50032, vd: 81.9, fl: 176.454289, glass: "J-FKH1 catalog equivalent (patent 500819; production supplier unspecified)", apd: "inferred", cemented: "D1", role: "ED positive member of the fixed first zoom group." },
    { id: 3, name: "L3", label: "Element 3", type: "Positive Meniscus", nd: 1.52, vd: 70.1, fl: 214.896736, glass: "J-PKH1 catalog equivalent (patent 520701; production supplier unspecified)" },
    { id: 4, name: "L4", label: "Element 4", type: "Negative Meniscus", nd: 1.713, vd: 53.9, fl: -68.991413, glass: "713539 — lanthanum crown class" },
    { id: 5, name: "L5", label: "Element 5", type: "Positive Meniscus", nd: 1.66998, vd: 39.2, fl: 293.976522, glass: "S-BAH32 catalog equivalent (patent 670392; production supplier unspecified)", cemented: "T1" },
    { id: 6, name: "L6", label: "Element 6", type: "Biconcave Negative", nd: 1.56384, vd: 60.8, fl: -48.195195, glass: "N-SK11 (SCHOTT)", cemented: "T1" },
    { id: 7, name: "L7", label: "Element 7", type: "Positive Meniscus", nd: 1.80518, vd: 25.5, fl: 90.586577, glass: "805255 — dense flint class", cemented: "T1" },
    { id: 8, name: "L8", label: "Element 8", type: "Biconvex Positive", nd: 1.52, vd: 70.1, fl: 118.825949, glass: "J-PKH1 catalog equivalent (patent 520701; production supplier unspecified)" },
    { id: 9, name: "L9", label: "Element 9", type: "Biconvex Positive", nd: 1.52, vd: 70.1, fl: 138.410621, glass: "J-PKH1 catalog equivalent (patent 520701; production supplier unspecified)" },
    { id: 10, name: "L10", label: "Element 10", type: "Biconvex Positive", nd: 1.52, vd: 70.1, fl: 94.740768, glass: "J-PKH1 catalog equivalent (patent 520701; production supplier unspecified)", cemented: "D2" },
    { id: 11, name: "L11", label: "Element 11", type: "Negative Meniscus", nd: 1.80518, vd: 25.5, fl: -107.155018, glass: "805255 — dense flint class", cemented: "D2" },
    { id: 12, name: "L12", label: "Element 12", type: "Biconcave Negative", nd: 1.713, vd: 53.9, fl: -75.00362, glass: "713539 — lanthanum crown class" },
    { id: 13, name: "L13", label: "Element 13", type: "Positive Meniscus", nd: 1.56732, vd: 42.8, fl: 97.060447, glass: "567428 — flint class" },
    { id: 14, name: "L14", label: "Element 14", type: "Negative Meniscus", nd: 1.76684, vd: 46.6, fl: -74.564779, glass: "J-LASFH2 catalog equivalent (patent 767466; production supplier unspecified)" },
    { id: 15, name: "L15", label: "Element 15", type: "Biconvex Positive", nd: 1.51823, vd: 59.0, fl: 91.226815, glass: "S-NSL3 (OHARA)" },
  ],

  surfaces: [
    { label: "1", R: 308.3, d: 2.0, nd: 1.7495, elemId: 1, sd: 45.0 },
    { label: "2", R: 112.0, d: 12.5, nd: 1.50032, elemId: 2, sd: 45.0 },
    { label: "3", R: -401.4, d: 0.2, nd: 1.0, elemId: 0, sd: 44.0 },
    { label: "4", R: 107.8, d: 8.5, nd: 1.52, elemId: 3, sd: 44.0 },
    { label: "5", R: 2970.199, d: 1.879, nd: 1.0, elemId: 0, sd: 42.0 },
    { label: "6", R: 3512.5, d: 2.0, nd: 1.713, elemId: 4, sd: 22.0 },
    { label: "7", R: 48.5, d: 9.6, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "8", R: -62.15, d: 3.5, nd: 1.66998, elemId: 5, sd: 21.0 },
    { label: "9", R: -48.31, d: 2.0, nd: 1.56384, elemId: 6, sd: 22.0 },
    { label: "10", R: 63.04, d: 5.1, nd: 1.80518, elemId: 7, sd: 22.5 },
    { label: "11", R: 447.757, d: 102.313, nd: 1.0, elemId: 0, sd: 22.5 },
    { label: "12", R: 139.6, d: 5.2, nd: 1.52, elemId: 8, sd: 22.5 },
    { label: "13", R: -109.444, d: 0.2, nd: 1.0, elemId: 0, sd: 22.5 },
    { label: "14", R: 109.0, d: 4.5, nd: 1.52, elemId: 9, sd: 22.5 },
    { label: "15", R: -208.886, d: 0.2, nd: 1.0, elemId: 0, sd: 22.0 },
    { label: "16", R: 158.1, d: 6.3, nd: 1.52, elemId: 10, sd: 22.0 },
    { label: "17", R: -70.59, d: 2.0, nd: 1.80518, elemId: 11, sd: 21.0 },
    { label: "18", R: -393.102, d: 1.249, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "STO", R: 1e15, d: 2.0, nd: 1.0, elemId: 0, sd: 12.72462 },
    { label: "19", R: -116.3, d: 2.0, nd: 1.713, elemId: 12, sd: 11.0 },
    { label: "20", R: 99.709, d: 0.963, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "21", R: 33.76, d: 5.2, nd: 1.56732, elemId: 13, sd: 11.5 },
    { label: "22", R: 82.393, d: 54.7, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "23", R: -20.4, d: 2.3, nd: 1.76684, elemId: 14, sd: 12.0 },
    { label: "24", R: -33.267, d: 0.2, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "25", R: 75.25, d: 5.2, nd: 1.51823, elemId: 15, sd: 12.5 },
    { label: "26", R: -124.176, d: 39.732, nd: 1.0, elemId: 0, sd: 12.5 },
  ],

  asph: {},

  zoomPositions: [50.0, 122.458, 295.2],
  zoomLabels: ["Wide", "Tele"],

  var: {
    "5": [
      [1.879, 15.063948],
      [41.998, 55.17321],
      [66.699, 79.873286],
    ],
    "11": [
      [102.313, 102.313],
      [47.342, 47.342],
      [0.629, 0.629],
    ],
    "18": [
      [1.249, 1.249],
      [16.099, 16.099],
      [38.111, 38.111],
    ],
  },

  varLabels: [
    ["5", "D5 / FOCUS"],
    ["11", "D11"],
    ["18", "D18 - 2.0"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6", toSurface: "11" },
    { text: "G3", fromSurface: "12", toSurface: "18" },
    { text: "G4", fromSurface: "19", toSurface: "20" },
    { text: "G5", fromSurface: "21", toSurface: "26" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "T1", fromSurface: "8", toSurface: "11" },
    { text: "D2", fromSurface: "16", toSurface: "18" },
  ],

  closeFocusM: 2.5,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the patent specifies first-group focusing toward the object but gives no close-focus spacing row. Nikon specifies 2.5 m MFD from the focal plane. Code solving moves G1 objectward by 13.184948 / 13.175210 / 13.174286 mm at 50 / 122.458 / 295.2 mm; the sequential model represents this as the corresponding increase in d5 only, leaving G2-G5 and the image plane fixed relative to one another.",

  nominalFno: 4.5,
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.55,
  yScFill: 0.54,
} satisfies LensDataInput;

export default LENS_DATA;
