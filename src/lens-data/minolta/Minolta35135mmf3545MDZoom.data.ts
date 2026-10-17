import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — MINOLTA MD ZOOM 35-135mm f/3.5-4.5                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 5,249,079 A, Table 4 (the single worked numerical      ║
 * ║  embodiment). Four-unit +/−/+/+ all-spherical                      ║
 * ║  zoom, 14 elements / 12 air-separated groups.                      ║
 * ║                                                                      ║
 * ║  PUBLISHED ZOOM STATES: d5, d13, and d19 are copied from Table 4.  ║
 * ║  No finite-focus spacing state is published. focusDescription      ║
 * ║  therefore records NO_INTERNAL_RECONSTRUCTION; closeFocusM is       ║
 * ║  product metadata only and does not drive any invented focus gap.   ║
 * ║                                                                      ║
 * ║  IMAGE PLANE NORMALIZATION: Table 4 ends at r27 and does not        ║
 * ║  publish r27-to-image distance. Surface 27 therefore uses the       ║
 * ║  independently computed d-line paraxial infinity-focus BFD at the   ║
 * ║  two published zoom endpoints: 53.268774 mm and 78.369634 mm.       ║
 * ║  Continuous interpolation between those endpoints is a viewer       ║
 * ║  interpolation, not a source-published zoom cam.                    ║
 * ║                                                                      ║
 * ║  STOP: r14 is the published diaphragm location. Its physical size   ║
 * ║  is not published. The stop radius is derived from the design       ║
 * ║  f-number and held at every zoom station; it is not independent     ║
 * ║  evidence of a manufactured iris diameter. Station nominalFNumber   ║
 * ║  values retain the modeled f-numbers from the former mean-radius    ║
 * ║  calibration to the source f-numbers at wide and tele.              ║
 * ║                                                                      ║
 * ║  SEMI-DIAMETERS: no numerical apertures are published. Values are   ║
 * ║  modeled from exact meridional ray envelopes at the two source      ║
 * ║  states plus representative 25/50/75% interpolated zoom states,     ║
 * ║  using the default 60%-field fan and mechanical clearance where     ║
 * ║  geometry permits. r11/r12 and r23/r24 are reduced to satisfy the   ║
 * ║  current shared-band cross-gap rule. The outer ±0.75 off-axis fan   ║
 * ║  is consequently vignetted slightly at r23/r24 from wide through   ║
 * ║  mid zoom; chief and inner fan rays remain contained.               ║
 * ║  r6 = 11.8 mm follows the drawn G4 outline in US 5,249,079 Fig. 1   ║
 * ║  (about 12.0 mm at 0.087 mm/px) and clears the wide-station corner  ║
 * ║  chief ray (10.38 mm), which the earlier 10.3 mm value blocked. The ║
 * ║  other drawn rims agree with the modeled set within about 10%.      ║
 * ║                                                                      ║
 * ║  The patent's G8 circular-orbit decenter/tilt stabilization motion  ║
 * ║  is not representable by the ordinary centered LensDataInput path;  ║
 * ║  this file models G8 at its centered nominal position only.          ║
 * ║                                                                      ║
 * ║  Production correlation is strong at the centered optical-formula  ║
 * ║  level but is not manufacturer-confirmed patent attribution: the   ║
 * ║  production MD lens predates the patent and lacks this stabilization║
 * ║  mechanism.                                                         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "minolta-md-zoom-35-135mm-f35-45",
  maker: "Minolta",
  name: "MINOLTA MD ZOOM 35-135mm f/3.5-4.5",
  subtitle: "US 5,249,079 A — Table 4 (sole numerical embodiment); centered-formula correlation",

  catalog: {
    lensMounts: ["minolta-sr"],
    imageFormat: "135-full-frame",
    specs: ["14 ELEMENTS / 12 GROUPS", "35-135mm f/3.5-4.5", "4-GROUP ZOOM", "ALL-SPHERICAL"],
    elementCount: 14,
    groupCount: 12,
    focalLengthMm: { marketing: [35, 135], design: [35.958411, 131.527694] },
    fNumber: {
      marketing: 3.5,
      design: 3.608, // Table 4 printed F-number at the wide end (3.608-4.56)
    },
  },

  source: {
    patentNumber: "US 5,249,079 A",
    patentYear: 1993,
    authors: ["Hiromu Umeda"],
    assignees: ["Minolta Camera Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "N1",
      label: "Element N1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.43,
      indexReference: "d",
      focalLengthMm: -95.874843,
      glass: "805254 — dense flint class",
      role: "Front member of L1; cemented to N2.",
      diagramLabel: "N1",
      cemented: "D1",
    },
    {
      id: 2,
      name: "N2",
      label: "Element N2",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      focalLengthMm: 84.709955,
      glass: "517642 — borosilicate crown class",
      role: "Positive crown partner in the front cemented pair of L1.",
      diagramLabel: "N2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "N3",
      label: "Element N3",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.77,
      indexReference: "d",
      focalLengthMm: 77.140188,
      glass: "772498 — lanthanum flint class (N-LAF34 / TAF1 catalog equivalent)",
      role: "Rear positive member of L1.",
      diagramLabel: "N3",
    },
    {
      id: 4,
      name: "N4",
      label: "Element N4",
      type: "Negative Meniscus",
      nd: 1.7545,
      vd: 51.57,
      indexReference: "d",
      focalLengthMm: -25.163456,
      glass: "755516 — lanthanum crown class (S-YGH51 / TAC6 close equivalent, Δnd +0.0005, Δνd +0.75)",
      role: "Strong negative front member of L2.",
      diagramLabel: "N4",
    },
    {
      id: 5,
      name: "N5",
      label: "Element N5",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 56.47,
      indexReference: "d",
      focalLengthMm: -43.382918,
      glass: "697565 — lanthanum-crown class (H-LaK12 catalog equivalent)",
      role: "Second negative member of L2.",
      diagramLabel: "N5",
    },
    {
      id: 6,
      name: "N6",
      label: "Element N6",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: 31.22622,
      glass: "847238 — dense flint class",
      role: "High-index positive member in L2.",
      diagramLabel: "N6",
    },
    {
      id: 7,
      name: "N7",
      label: "Element N7",
      type: "Biconcave Negative",
      nd: 1.618,
      vd: 63.39,
      indexReference: "d",
      focalLengthMm: -43.991909,
      glass: "618634 — dense phosphate crown class",
      role: "Rear negative member of L2 immediately before the diaphragm gap.",
      diagramLabel: "N7",
    },
    {
      id: 8,
      name: "N8",
      label: "Element N8 / deflecting G8",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      focalLengthMm: 63.943872,
      glass: "517642 — borosilicate crown class",
      role: "Patent deflecting element G8, modeled here only in its centered nominal position.",
      diagramLabel: "G8",
    },
    {
      id: 9,
      name: "N9",
      label: "Element N9",
      type: "Biconvex Positive",
      nd: 1.54072,
      vd: 47.2,
      indexReference: "d",
      focalLengthMm: 33.743452,
      glass: "541472 — light flint class",
      role: "Positive member of the rear cemented pair in L3.",
      diagramLabel: "N9",
      cemented: "D2",
    },
    {
      id: 10,
      name: "N10",
      label: "Element N10",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.51,
      indexReference: "d",
      focalLengthMm: -40.476348,
      glass: "755275 — dense flint class",
      role: "Negative flint partner in the L3 cemented pair.",
      diagramLabel: "N10",
      cemented: "D2",
    },
    {
      id: 11,
      name: "N11",
      label: "Element N11",
      type: "Positive Meniscus",
      nd: 1.60342,
      vd: 38,
      indexReference: "d",
      focalLengthMm: 63.387917,
      glass: "603380 — flint class",
      role: "Front positive member of L4.",
      diagramLabel: "N11",
    },
    {
      id: 12,
      name: "N12",
      label: "Element N12",
      type: "Biconcave Negative",
      nd: 1.80741,
      vd: 31.59,
      indexReference: "d",
      focalLengthMm: -27.458178,
      glass:
        "Unmatched (807316 lanthanum dense flint; coordinate of discontinued Schott LaSF8, no public dispersion coefficients)",
      role: "Strong negative member of L4.",
      diagramLabel: "N12",
    },
    {
      id: 13,
      name: "N13",
      label: "Element N13",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      focalLengthMm: 67.536731,
      glass: "517642 — borosilicate crown class",
      role: "Positive crown member in the rear portion of L4.",
      diagramLabel: "N13",
    },
    {
      id: 14,
      name: "N14",
      label: "Element N14",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.2,
      indexReference: "d",
      focalLengthMm: 60.810083,
      glass: "517522 — crown-flint class",
      role: "Final positive element of L4.",
      diagramLabel: "N14",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 155.12197, d: 2.2, sd: 22.2, medium: 1 },
    { label: "2", R: 51.21901, d: 7.1, sd: 21.6, medium: 2 },
    { label: "3", R: -287.11129, d: 0.15, sd: 21.4 },
    { label: "4", R: 50.297, d: 4.5, sd: 20.8, medium: 3 },
    { label: "5", R: 309.92376, sd: 20.4 },
    { label: "6", R: 100.68405, d: 1.3, sd: 11.8, medium: 4 },
    { label: "7", R: 15.885, d: 4.15, sd: 9.1 },
    { label: "8", R: -96.119, d: 1.2, sd: 8.9, medium: 5 },
    { label: "9", R: 44.324, d: 0.15, sd: 9.1 },
    { label: "10", R: 24.656, d: 2.7, sd: 9.4, medium: 6 },
    { label: "11", R: 347.43575, d: 1.6, sd: 8.7 },
    { label: "12", R: -30.049, d: 1.1, sd: 8.7, medium: 7 },
    { label: "13", R: 289.4356, sd: 9.3 },
    { label: "STO", R: "flat", d: 1.24 },
    { label: "15", R: 88.90098, d: 2.4, sd: 10.5, medium: 8 },
    { label: "16", R: -52.114, d: 0.15, sd: 10.6 },
    { label: "17", R: 35.739, d: 4.2, sd: 10.8, medium: 9 },
    { label: "18", R: -35.739, d: 1.2, sd: 10.7, medium: 10 },
    { label: "19", R: 214.30806, sd: 10.7 },
    { label: "20", R: 33.161, d: 3.18, sd: 10.7, medium: 11 },
    { label: "21", R: 240.2691, d: 7.47, sd: 10.6 },
    { label: "22", R: -85.75998, d: 4.55, sd: 10.4, medium: 12 },
    { label: "23", R: 30.608, d: 1.94, sd: 9.45 },
    { label: "24", R: -196.06305, d: 3, sd: 9.45, medium: 13 },
    { label: "25", R: -29.783, d: 0.2, sd: 11.2 },
    { label: "26", R: 38.452, d: 4.2, sd: 12, medium: 14 },
    { label: "27", R: -166.695, sd: 12.1 },
  ],

  zoom: {
    /* (moved from zoomPositions) Zoom-only source gaps plus the calculated image-plane normalization. */
    stations: [
      { focalLengthMm: 35.9, nominalFNumber: 3.610666, label: "Wide" },
      { focalLengthMm: 131.5, nominalFNumber: 4.55663, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 1.5,
    description:
      "NO_INTERNAL_RECONSTRUCTION — US 5,249,079 publishes zoom spacings only. The 1.5 m close-focus value is product metadata; no finite-focus or macro internal motion is synthesized in this model.",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [0.823, 0.823],
        [27.032, 27.032],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [18.996, 18.996],
        [1.1, 1.1],
      ],
    },
    "19": {
      label: "D19",
      values: [
        [9.041, 9.041],
        [0.728, 0.728],
      ],
    },
    "27": {
      label: "BF",
      values: [
        [53.268774, 53.268774],
        [78.369634, 78.369634],
      ],
    },
  },

  aperture: {
    fStops: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22],
    maxFNumber: 22, // production minimum aperture per the MINOLTA Manual Lens List (A min 22); the patent publishes none
  },

  /* The patent places diaphragm E inside L3 (d14 is fixed, d13 varies), so L3 starts at the stop. */
  groups: [
    { text: "L1", fromSurface: "1", toSurface: "5" },
    { text: "L2", fromSurface: "6", toSurface: "13" },
    { text: "L3", fromSurface: "STO", toSurface: "19" },
    { text: "L4", fromSurface: "20", toSurface: "27" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
  ],

  layout: { yScFill: 0.36 },
} satisfies LensDataV2Input;

export default LENS_DATA;
