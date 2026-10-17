import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * NIKON AI ZOOM-NIKKOR 50-300mm f/4.5 ED
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
 * Stop: the patent prints F/4.5 for the whole range and at each FIG. 6 station, and no stop diameter. The stop
 * radius is derived from the design f-number. The former paraxial f/4.5 calibration required
 * 12.72440 / 12.72462 / 12.72475 mm at the three states, consistent with one fixed iris. The engine opens the iris
 * to the real-ray f/4.5 radius at 50 mm, 12.7356 mm, and holds it through the zoom: wide open, the on-axis beam
 * traces f/4.50, f/4.51, and f/4.49 at 50, 122.458, and 295.2 mm, with the iris the limiter at each station.
 *
 * Semi-diameters are modeled clear apertures, not patent-published values. They are derived from that stop, the patent
 * half-field angles, paraxial marginal/chief-ray envelopes at the viewer's representative 0.6 field fraction with
 * +/-0.83 pupil sampling, the patent optical section, and physical edge-thickness, rim-slope, cross-gap, and
 * render-clearance constraints. The G1 and G5 rims are normalized against the G2/G3 silhouette in Example 3's FIG. 3 so
 * the rendered group-height progression follows the source drawing. Surfaces 19 and 20 (L12, 2.0 mm behind the stop)
 * both carry 12.6 mm, one square-cut rim as FIG. 3 draws it. The f/4.5 on-axis marginal ray reaches 12.533 mm at
 * surface 19 and 12.360 mm at surface 20 at 122.458 mm, the station that needs most; both faces take the higher of
 * the two, rounded up to 0.1 mm. FIG. 3 draws L12 level with L13 and a little taller than this value, about
 * 13.0-13.7 mm on its vertex scales. No layout control is used to conceal invalid geometry.
 *
 * Spectral limitation: Example 3 publishes only nd and vd. It does not publish nC, nF, ng, PgF, or dPgF, so those
 * fields are intentionally not invented. Glass strings retain the patent coordinates while naming coefficient-backed
 * catalog equivalents only where the resolver's coordinate guard passes; none asserts the production supplier.
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-ai-zoom-nikkor-ed-50-300-f45",
  maker: "Nikon",
  name: "NIKON AI ZOOM-NIKKOR 50-300mm f/4.5 ED",
  subtitle: "US 4,189,213 A Example 3 — Yutaka Iizuka / Nippon Kogaku K.K.",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["15 ELEMENTS / 5 PATENT GROUPS", "50-300mm", "f/4.5", "ED", "ALL-SPHERICAL"],
    elementCount: 15,
    groupCount: 5,
    focalLengthMm: { marketing: [50, 300], design: [50.000485, 295.206225] },
    fNumber: { marketing: 4.5, design: 4.5 },
  },

  source: {
    patentNumber: "US 4,189,213 A",
    patentYear: 1980,
    authors: ["Yutaka Iizuka"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 35.0,
      focalLengthMm: -235.721601,
      glass: "H-LaF4 catalog equivalent (patent 750350; production supplier unspecified)",
      diagramLabel: "L1",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2 (ED)",
      type: "Biconvex Positive",
      nd: 1.50032,
      vd: 81.9,
      focalLengthMm: 176.454289,
      glass: "J-FKH1 catalog equivalent (patent 500819; production supplier unspecified)",
      apd: "inferred",
      role: "ED positive member of the fixed first zoom group.",
      diagramLabel: "L2 / ED",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.52,
      vd: 70.1,
      focalLengthMm: 214.896736,
      glass: "J-PKH1 catalog equivalent (patent 520701; production supplier unspecified)",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: -68.991413,
      glass: "LAC8 catalog equivalent (patent 713539; production supplier unspecified)",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.66998,
      vd: 39.2,
      focalLengthMm: 293.976522,
      glass: "S-BAH32 catalog equivalent (patent 670392; production supplier unspecified)",
      diagramLabel: "L5",
      cemented: "T1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.56384,
      vd: 60.8,
      focalLengthMm: -48.195195,
      glass: "N-SK11 catalog equivalent (patent 564608; production supplier unspecified)",
      diagramLabel: "L6",
      cemented: "T1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.5,
      focalLengthMm: 90.586577,
      glass: "J-SF6 catalog equivalent (patent 805255; production supplier unspecified)",
      diagramLabel: "L7",
      cemented: "T1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.52,
      vd: 70.1,
      focalLengthMm: 118.825949,
      glass: "J-PKH1 catalog equivalent (patent 520701; production supplier unspecified)",
      diagramLabel: "L8",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.52,
      vd: 70.1,
      focalLengthMm: 138.410621,
      glass: "J-PKH1 catalog equivalent (patent 520701; production supplier unspecified)",
      diagramLabel: "L9",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.52,
      vd: 70.1,
      focalLengthMm: 94.740768,
      glass: "J-PKH1 catalog equivalent (patent 520701; production supplier unspecified)",
      diagramLabel: "L10",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.5,
      focalLengthMm: -107.155018,
      glass: "J-SF6 catalog equivalent (patent 805255; production supplier unspecified)",
      diagramLabel: "L11",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: -75.00362,
      glass: "LAC8 catalog equivalent (patent 713539; production supplier unspecified)",
      diagramLabel: "L12",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.56732,
      vd: 42.8,
      focalLengthMm: 97.060447,
      glass: "S-TIL26 catalog equivalent (patent 567428; production supplier unspecified)",
      diagramLabel: "L13",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.76684,
      vd: 46.6,
      focalLengthMm: -74.564779,
      glass: "J-LASFH2 catalog equivalent (patent 767466; production supplier unspecified)",
      diagramLabel: "L14",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 59.0,
      focalLengthMm: 91.226815,
      glass: "S-NSL3 catalog equivalent (patent 518590; production supplier unspecified)",
      diagramLabel: "L15",
    },
  ],

  surfaces: [
    { label: "1", R: 308.3, d: 2.0, sd: 35.0, medium: 1 },
    { label: "2", R: 112.0, d: 12.5, sd: 35.0, medium: 2 },
    { label: "3", R: -401.4, d: 0.2, sd: 34.0 },
    { label: "4", R: 107.8, d: 8.5, sd: 34.0, medium: 3 },
    { label: "5", R: 2970.199, sd: 33.0 },
    { label: "6", R: 3512.5, d: 2.0, sd: 22.0, medium: 4 },
    { label: "7", R: 48.5, d: 9.6, sd: 21.0 },
    { label: "8", R: -62.15, d: 3.5, sd: 21.0, medium: 5 },
    { label: "9", R: -48.31, d: 2.0, sd: 22.0, medium: 6 },
    { label: "10", R: 63.04, d: 5.1, sd: 22.5, medium: 7 },
    { label: "11", R: 447.757, sd: 22.5 },
    { label: "12", R: 139.6, d: 5.2, sd: 22.5, medium: 8 },
    { label: "13", R: -109.444, d: 0.2, sd: 22.5 },
    { label: "14", R: 109.0, d: 4.5, sd: 22.5, medium: 9 },
    { label: "15", R: -208.886, d: 0.2, sd: 22.0 },
    { label: "16", R: 158.1, d: 6.3, sd: 22.0, medium: 10 },
    { label: "17", R: -70.59, d: 2.0, sd: 21.0, medium: 11 },
    { label: "18", R: -393.102, sd: 20.5 },
    { label: "STO", R: "flat", d: 2.0 },
    { label: "19", R: -116.3, d: 2.0, sd: 12.6, medium: 12 },
    { label: "20", R: 99.709, d: 0.963, sd: 12.6 },
    { label: "21", R: 33.76, d: 5.2, sd: 14.0, medium: 13 },
    { label: "22", R: 82.393, d: 54.7, sd: 14.0 },
    { label: "23", R: -20.4, d: 2.3, sd: 15.5, medium: 14 },
    { label: "24", R: -33.267, d: 0.2, sd: 15.5 },
    { label: "25", R: 75.25, d: 5.2, sd: 15.5, medium: 15 },
    { label: "26", R: -124.176, d: 39.732, sd: 15.5 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 50.0, label: "Wide" },
      { focalLengthMm: 122.458 },
      { focalLengthMm: 295.2, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 2.5,
    description:
      "CONSTRAINED_RECONSTRUCTION: the patent specifies first-group focusing toward the object but gives no close-focus spacing row. Nikon specifies 2.5 m MFD from the focal plane. Code solving moves G1 objectward by 13.184948 / 13.175210 / 13.174286 mm at 50 / 122.458 / 295.2 mm; the sequential model represents this as the corresponding increase in d5 only, leaving G2-G5 and the image plane fixed relative to one another.",
  },

  gaps: {
    "5": {
      label: "D5 / FOCUS",
      values: [
        [1.879, 15.063948],
        [41.998, 55.17321],
        [66.699, 79.873286],
      ],
    },
    "11": {
      label: "D11",
      values: [
        [102.313, 102.313],
        [47.342, 47.342],
        [0.629, 0.629],
      ],
    },
    "18": {
      label: "D18 - 2.0",
      values: [
        [1.249, 1.249],
        [16.099, 16.099],
        [38.111, 38.111],
      ],
    },
  },

  aperture: { nominalFNumber: 4.5, fStops: [4.5, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "G1 (+) / FOCUS → OBJ", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−) / ZOOM → IMG", fromSurface: "6", toSurface: "11" },
    { text: "G3 (+) / ZOOM → OBJ", fromSurface: "12", toSurface: "18" },
    { text: "G4 (−) / FIXED", fromSurface: "19", toSurface: "20" },
    { text: "G5 (+) / FIXED", fromSurface: "21", toSurface: "26" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "T1", fromSurface: "8", toSurface: "11" },
    { text: "D2", fromSurface: "16", toSurface: "18" },
  ],

  layout: { scFill: 0.55, yScFill: 0.54 },
} satisfies LensDataV2Input;

export default LENS_DATA;
