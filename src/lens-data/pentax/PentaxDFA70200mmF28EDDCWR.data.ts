import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — PENTAX HD D FA* 70-200mm f/2.8 ED DC AW                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2016/0103303 A1, Numerical Embodiment 1 (Masakazu Saori /       ║
 * ║ Ricoh Imaging Company, Ltd.). The production correlation is strong but      ║
 * ║ remains an inference; the patent does not name the commercial lens.          ║
 * ║                                                                              ║
 * ║ Published prescription: 19 elements / 15 air-spaced physical groups,        ║
 * ║ organized as five functional groups with positive-negative-positive-         ║
 * ║ negative-positive power. No aspherical surfaces and no scaling are used.     ║
 * ║ The marketed product is specified as 19 elements / 16 groups; that one-      ║
 * ║ group construction difference is retained as a production-correlation limit. ║
 * ║ The 72.06-194.00 mm patent range is retained; 70-200 mm is marketing data.   ║
 * ║                                                                              ║
 * ║ Zoom: G1 and G5/STO remain fixed relative to the image plane. G2, G3, and   ║
 * ║ G4 move imageward. Variable gaps 7 and 22 are zoom-only; gaps 15 and 20     ║
 * ║ vary with zoom and focus. The three published zoom stations contain no       ║
 * ║ movement reversal.                                                           ║
 * ║                                                                              ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent publishes G3 motion     ║
 * ║ imageward but no finite-object spacing table. Close-focus pairs were solved  ║
 * ║ at the official 1.2 m MFD, preserving G3-only translation and d15+d20 at    ║
 * ║ each zoom station. The reconstruction is disclosed in focusDescription.      ║
 * ║                                                                              ║
 * ║ Back-focus discrepancy: Table 2 publishes fB = 37.79 mm, but the             ║
 * ║ prescription gives Gaussian BFL ≈ 48.26 mm and L minus the S1-S35 track =    ║
 * ║ 48.29 mm. The modeled S35-to-image spacing is therefore 48.29 mm; the raw    ║
 * ║ 37.79 mm value is retained only in the audit as an unresolved reference-     ║
 * ║ plane/source contradiction.                                                  ║
 * ║                                                                              ║
 * ║ Surface 18 uses R = -195.611 mm, verified from the rendered patent table;    ║
 * ║ -1956.11 is an OCR error.                                                     ║
 * ║                                                                              ║
 * ║ Semi-diameters are modeled, not patent-published. They were derived by exact ║
 * ║ spherical meridional tracing across all three zoom stations, including       ║
 * ║ on-axis marginal rays to an inferred 18.472651 mm paraxial stop radius (the  ║
 * ║ earlier SD-inference input), the default 0.6-field off-axis fan, full-field  ║
 * ║ chief rays, and on-axis 1.2 m focus. Conservative clearance was added and    ║
 * ║ the progression was silhouette-tuned against Fig. 1. Two extreme             ║
 * ║ opposite-side tele pupil samples are naturally vignetted. The runtime stop   ║
 * ║ radius is derived from the design f-number at wide, 18.759 mm, and held at   ║
 * ║ every station.                                                               ║
 * ║                                                                              ║
 * ║ Glass names and nC/nF/ng/dPgF are current OHARA catalog matches to the       ║
 * ║ patent nd/νd pairs; the patent itself publishes only nd and νd.              ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "pentax-hd-d-fa-star-70-200mm-f28-ed-dc-aw",
  maker: "Pentax",
  name: "PENTAX HD D FA* 70-200mm f/2.8 ED DC AW",
  subtitle: "US 2016/0103303 A1 — Numerical Embodiment 1; strong production correlation",

  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "135-full-frame",
    specs: [
      "19 ELEMENTS / 15 GROUPS (PATENT)",
      "19 ELEMENTS / 16 GROUPS (MARKETED)",
      "70-200mm f/2.8 (MARKETED)",
      "72.06-194.00mm f/2.9 (PATENT)",
      "43.28mm IMAGE CIRCLE",
      "ALL-SPHERICAL INTERNAL ZOOM",
    ],
    elementCount: 19,
    groupCount: 15,
    focalLengthMm: { marketing: [70, 200], design: [72.0411, 193.9339] },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "US 2016/0103303 A1",
    patentYear: 2016,
    authors: ["Masakazu Saori"],
    assignees: ["Ricoh Imaging Company, Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus, concave to image",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -138.9130716,
      glass: "S-LAH60 (OHARA)",
      role: "Negative front meniscus of G1; moderates front-group power and off-axis aberrations.",
      cemented: "D1",
      dPgF: -0.0037,
      nC: 1.82738,
      nF: 1.84982,
      ng: 1.86278,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus, convex to object",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 224.913491936,
      glass: "S-FPL51 (OHARA)",
      role: "Low-dispersion positive partner in the front cemented doublet.",
      cemented: "D1",
      dPgF: 0.028,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 95,
      focalLengthMm: 169.216421705,
      glass: "S-FPL53 (OHARA)",
      role: "Very-low-dispersion positive collector in G1.",
      dPgF: 0.0461,
      nC: 1.43733,
      nF: 1.44195,
      ng: 1.44442,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus, convex to object",
      nd: 1.59522,
      vd: 67.7,
      focalLengthMm: 191.642648468,
      glass: "S-FPM2 (OHARA)",
      role: "Rear positive meniscus completing the fixed positive first group.",
      dPgF: 0.0123,
      nC: 1.59255,
      nF: 1.60134,
      ng: 1.60612,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus, convex to image",
      nd: 1.90366,
      vd: 31.3,
      focalLengthMm: 70.577567346,
      glass: "S-LAH95 (OHARA)",
      role: "High-index positive lead element of the negative variator G2.",
      cemented: "D2",
      dPgF: 0.0055,
      nC: 1.89528,
      nF: 1.92411,
      ng: 1.9413,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.816,
      vd: 46.6,
      focalLengthMm: -35.848704964,
      glass: "S-LAH59 (OHARA)",
      role: "Strong negative member of the first G2 cemented pair.",
      cemented: "D2",
      dPgF: -0.0092,
      nC: 1.81075,
      nF: 1.82825,
      ng: 1.838,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.59522,
      vd: 67.7,
      focalLengthMm: -57.511535696,
      glass: "S-FPM2 (OHARA)",
      role: "Low-dispersion negative member in the second G2 cemented pair.",
      cemented: "D3",
      dPgF: 0.0123,
      nC: 1.59255,
      nF: 1.60134,
      ng: 1.60612,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.5,
      focalLengthMm: 51.397109458,
      glass: "S-TIH6 (OHARA)",
      role: "High-dispersion positive partner balancing the second G2 doublet.",
      cemented: "D3",
      dPgF: 0.0158,
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -59.111894742,
      glass: "S-LAH55V (OHARA)",
      role: "Rear negative singlet completing the moving variator G2.",
      dPgF: -0.0075,
      nC: 1.82898,
      nF: 1.84852,
      ng: 1.85956,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: 60.949826315,
      glass: "S-LAH65V (OHARA)",
      role: "Positive lead element of the G3 compensator and focusing group.",
      dPgF: -0.0088,
      nC: 1.79882,
      nF: 1.81608,
      ng: 1.82569,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus, convex to image",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 122.964106877,
      glass: "S-FPL51 (OHARA)",
      role: "Low-dispersion positive member of the G3 cemented pair.",
      cemented: "D4",
      dPgF: 0.028,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus, convex to image",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -109.779040898,
      glass: "S-TIH53W (OHARA)",
      role: "High-dispersion negative partner controlling G3 chromatic power.",
      cemented: "D4",
      dPgF: 0.0175,
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus, convex to image",
      nd: 1.6134,
      vd: 44.3,
      focalLengthMm: -205.119115672,
      glass: "S-NBM51 (OHARA)",
      role: "Weak negative fourth group moving between G3 and the fixed rear group.",
      dPgF: -0.0065,
      nC: 1.60925,
      nF: 1.62311,
      ng: 1.63091,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.7,
      focalLengthMm: 58.498902335,
      glass: "S-FPM2 (OHARA)",
      role: "Front positive collector of the fixed fifth group immediately behind the stop.",
      dPgF: 0.0123,
      nC: 1.59255,
      nF: 1.60134,
      ng: 1.60612,
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Positive Meniscus, convex to object",
      nd: 1.43875,
      vd: 95,
      focalLengthMm: 109.291142823,
      glass: "S-FPL53 (OHARA)",
      role: "Very-low-dispersion positive meniscus in the front half of G5.",
      dPgF: 0.0461,
      nC: 1.43733,
      nF: 1.44195,
      ng: 1.44442,
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.7859,
      vd: 44.2,
      focalLengthMm: -38.076407648,
      glass: "S-LAH51 (OHARA)",
      role: "Strong negative singlet balancing the first two positive G5 elements.",
      dPgF: -0.0069,
      nC: 1.78058,
      nF: 1.79836,
      ng: 1.80838,
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.7,
      focalLengthMm: 71.59361307,
      glass: "S-FPM2 (OHARA)",
      role: "Intermediate positive element governed by the patent's G5 conditions.",
      dPgF: 0.0123,
      nC: 1.59255,
      nF: 1.60134,
      ng: 1.60612,
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Negative Meniscus, convex to image",
      nd: 1.816,
      vd: 46.6,
      focalLengthMm: -49.267670984,
      glass: "S-LAH59 (OHARA)",
      role: "Rear negative meniscus contributing field and lateral-color correction.",
      dPgF: -0.0092,
      nC: 1.81075,
      nF: 1.82825,
      ng: 1.838,
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Positive Meniscus, convex to image",
      nd: 1.90366,
      vd: 31.3,
      focalLengthMm: 92.714462335,
      glass: "S-LAH95 (OHARA)",
      role: "High-index positive rear meniscus completing the fixed relay group.",
      dPgF: 0.0055,
      nC: 1.89528,
      nF: 1.92411,
      ng: 1.9413,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 298.927, d: 2.3, sd: 34.5, medium: 1 },
    { label: "2", R: 83.202, d: 8.48, sd: 34.5, medium: 2 },
    { label: "3", R: 314.408, d: 0.5, sd: 34.5 },
    { label: "4", R: 99.969, d: 11.13, sd: 34, medium: 3 },
    { label: "5", R: -278.717, d: 0.2, sd: 34 },
    { label: "6", R: 86.058, d: 7.57, sd: 32.5, medium: 4 },
    { label: "7", R: 338.946, sd: 32.5 },
    { label: "8", R: -820.899, d: 4.99, sd: 20.3, medium: 5 },
    { label: "9", R: -59.351, d: 1.2, sd: 20.3, medium: 6 },
    { label: "10", R: 58.207, d: 4.98, sd: 18.5 },
    { label: "11", R: -125.863, d: 1.33, sd: 18.6, medium: 7 },
    { label: "12", R: 47.206, d: 6.16, sd: 18.6, medium: 8 },
    { label: "13", R: -316.015, d: 2.47, sd: 18.6 },
    { label: "14", R: -63.999, d: 1.1, sd: 18.4, medium: 9 },
    { label: "15", R: 217.234, sd: 18.5 },
    { label: "16", R: 182.634, d: 5.83, sd: 21, medium: 10 },
    { label: "17", R: -66.021, d: 0.2, sd: 21 },
    { label: "18", R: -195.611, d: 5.35, sd: 20.5, medium: 11 },
    { label: "19", R: -46.988, d: 1.3, sd: 20.5, medium: 12 },
    { label: "20", R: -96.235, sd: 20.5 },
    { label: "21", R: -56.165, d: 1.4, sd: 18.8, medium: 13 },
    { label: "22", R: -102.414, sd: 18.8 },
    { label: "STO", R: "flat", d: 1.2 },
    { label: "24", R: 35.843, d: 8.25, sd: 18.7, medium: 14 },
    { label: "25", R: -1114.899, d: 2.65, sd: 18.7 },
    { label: "26", R: 33.094, d: 4.97, sd: 16, medium: 15 },
    { label: "27", R: 101.917, d: 1.75, sd: 16 },
    { label: "28", R: -407.374, d: 1.3, sd: 15, medium: 16 },
    { label: "29", R: 32.342, d: 14.77, sd: 15 },
    { label: "30", R: 84.103, d: 5.95, sd: 14.7, medium: 17 },
    { label: "31", R: -84.103, d: 11.77, sd: 14.7 },
    { label: "32", R: -29.143, d: 1.3, sd: 13.6, medium: 18 },
    { label: "33", R: -108.062, d: 0.2, sd: 13.6 },
    { label: "34", R: -341.779, d: 3.47, sd: 13.9, medium: 19 },
    { label: "35", R: -67.612, d: 48.29, sd: 13.9 },
  ],

  zoom: {
    stations: [{ focalLengthMm: 72.06, label: "Wide" }, { focalLengthMm: 100 }, { focalLengthMm: 194, label: "Tele" }],
    apertureModel: "fixed-iris",
  },

  /* ── Focus and aperture ── */
  focus: {
    closeFocusM: 1.2,
    description:
      "CONSTRAINED_RECONSTRUCTION: G3 alone translates toward the image at closer focus. " +
      "At 1.2 m from the fixed image plane, the solved G3 shifts are 3.287999 mm (72.06 mm), " +
      "5.615212 mm (100 mm), and 15.514881 mm (194 mm); d15+d20 is conserved at each zoom station. " +
      "The patent publishes the direction and mechanism but no finite-focus spacing table.",
  },

  /* (moved from var) ── Zoom and focus spacings ── */
  gaps: {
    "7": {
      label: "D7 (G1-G2)",
      values: [
        [3.3, 3.3],
        [20.97, 20.97],
        [43.94, 43.94],
      ],
    },
    "15": {
      label: "D15 (G2-G3)",
      values: [
        [27.09, 30.377998579],
        [21.74, 27.355211665],
        [4, 19.514881344],
      ],
    },
    "20": {
      label: "D20 (G3-G4)",
      values: [
        [8.58, 5.292001421],
        [10.89, 5.274788335],
        [20.96, 5.445118656],
      ],
    },
    "22": {
      label: "D22 (G4-STO)",
      values: [
        [31.73, 31.73],
        [17.09, 17.09],
        [1.8, 1.8],
      ],
    },
  },

  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  /* ── Group annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "7" },
    { text: "G2 (-)", fromSurface: "8", toSurface: "15" },
    { text: "G3 (+ / FOCUS)", fromSurface: "16", toSurface: "20" },
    { text: "G4 (-)", fromSurface: "21", toSurface: "22" },
    { text: "G5 (+)", fromSurface: "24", toSurface: "35" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "11", toSurface: "13" },
    { text: "D4", fromSurface: "18", toSurface: "20" },
  ],

  /* ── Layout ── */
  layout: { yScFill: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
