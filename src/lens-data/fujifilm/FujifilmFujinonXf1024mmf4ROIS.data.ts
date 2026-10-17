import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — FUJIFILM FUJINON XF 10-24mm f/4 R OIS                        ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2015/0131163 A1, Example 1 (Taiga Noda / FUJIFILM Corporation). ║
 * ║ Five functional zoom groups with power signs − / + / − / + / +.           ║
 * ║ 14 physical glass elements / 10 air-separated optical components.          ║
 * ║ Eight aspherical surfaces on four physical elements.                        ║
 * ║                                                                              ║
 * ║ ZOOM: published infinity states at 10.33, 15.20, and 23.36 mm.              ║
 * ║ Variable gaps are D8, D14, D17, and D23. G1 reverses direction between      ║
 * ║ the intermediate and telephoto states. G5 is fixed to the image plane.       ║
 * ║                                                                              ║
 * ║ FOCUS: NO_INTERNAL_RECONSTRUCTION. Patent ¶0066 permits L41-only focusing,  ║
 * ║ but Example 1 gives no finite-focus spacing table or travel. Production      ║
 * ║ 0.24 m MFD is retained only as product metadata; the authored var vectors    ║
 * ║ therefore repeat infinity spacing at both focus endpoints.                   ║
 * ║                                                                              ║
 * ║ REAR PLATE: Table 1 plane-parallel member PP (surfaces 26–27: 2.85 mm,       ║
 * ║ nd 1.516798, νd 64.20) is modeled in `rearPlates` (traced, not drawn).       ║
 * ║ Surface 25A keeps the patent's 5.0000 mm gap to PP; PP-to-image is           ║
 * ║ 7.6391 mm. Air-equivalent 5 + 2.85/1.516798 + 7.6391 = 14.5180581737 mm      ║
 * ║ reproduces Table 2 Bf' (in air) = 14.52 mm.                                  ║
 * ║                                                                              ║
 * ║ STOP: Table 2 gives FNo=4.12 at all three zoom states, but Fig. 7 labels     ║
 * ║ the Example-1 telephoto aberration panel FNo=4.55. The model follows the     ║
 * ║ explicit Table-2 state table; the source discrepancy is retained in audit.   ║
 * ║ No diaphragm diameter is published. The stop radius is derived from the      ║
 * ║ design f-number at each zoom station, so agreement with FNo=4.12 is          ║
 * ║ calibration, not measurement.                                                ║
 * ║                                                                              ║
 * ║ SEMI-DIAMETERS: modeled, not patent-published. They were solved from exact   ║
 * ║ meridional ray envelopes using the published aspheres, all three zoom states,║
 * ║ representative interpolated zoom states, the full wide-open pupil at 0 and  ║
 * ║ 0.6× published half-field, plus a full-field edge-image ray. Edge thickness, ║
 * ║ actual rim slope, conic domain, shared-band gap intrusion, and sampled       ║
 * ║ off-axis containment are checked by the Stage-2 dossier verifier.            ║
 * ║ Figure review: Fig. 1 at 600 dpi enlarges G1 toward the optical rims;       ║
 * ║ S2/S3A are capped at 13.7 mm and S4A at 11.2 mm for air-gap clearance.      ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "fujifilm-fujinon-xf-10-24mm-f4-r-ois",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 10-24mm f/4 R OIS",
  subtitle: "US 2015/0131163 A1 Example 1 — high-confidence production correlation",

  catalog: {
    lensMounts: ["fujifilm-x"],
    imageFormat: "aps-c",
    specs: [
      "14 ELEMENTS / 10 GROUPS",
      "10.33–23.36 mm DESIGN RANGE",
      "f/4.12 DESIGN APERTURE",
      "112.0°–61.6° PUBLISHED FULL FIELD",
      "8 ASPHERICAL SURFACES",
    ],
    elementCount: 14,
    groupCount: 10,
    focalLengthMm: { marketing: [10, 24], design: [10.3258082792, 23.3599771477] },
    fNumber: { marketing: 4, design: 4.12 },
  },

  source: {
    patentNumber: "US 2015/0131163 A1",
    patentYear: 2015,
    authors: ["Taiga Noda"],
    assignees: ["Fujifilm Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.754999,
      vd: 52.32,
      indexReference: "d",
      focalLengthMm: -35.720568,
      glass: "755523 — S-YGH51 / S-LAH97 coordinate class (OHARA candidate)",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.74025,
      vd: 49.12,
      indexReference: "d",
      focalLengthMm: -24.998149,
      glass: "Unmatched (740491 coordinate)",
      diagramLabel: "L12",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.592824,
      vd: 68.63,
      indexReference: "d",
      focalLengthMm: -35.351974,
      glass: "593686 — FCD505 coordinate class (HOYA candidate)",
      apd: "inferred",
      apdNote:
        "The coordinate-compatible FCD505 spectral proxy gives ΔPgF ≈ +0.0159; inferred anomalous dispersion, not proof of production glass identity.",
      diagramLabel: "L13",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.882997,
      vd: 40.76,
      indexReference: "d",
      focalLengthMm: 25.310814,
      glass: "883408 — S-LAH58 coordinate class (OHARA candidate)",
      diagramLabel: "L14",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.581029,
      vd: 59.23,
      indexReference: "d",
      focalLengthMm: 38.198302,
      glass: "Unmatched (581592 coordinate)",
      diagramLabel: "L21",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.816,
      vd: 46.62,
      indexReference: "d",
      focalLengthMm: -20.981622,
      glass: "816466 — S-LAH59 coordinate class (OHARA candidate)",
      diagramLabel: "L22",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.733997,
      vd: 51.47,
      indexReference: "d",
      focalLengthMm: 16.668673,
      glass: "734515 — S-LAL59 coordinate class (OHARA candidate)",
      diagramLabel: "L23",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.772499,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: -17.397589,
      glass: "773496 — S-LAH66 coordinate class (OHARA candidate)",
      diagramLabel: "L31",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.54,
      indexReference: "d",
      focalLengthMm: 32.287132,
      glass: "497816 — S-FPL51 coordinate class (OHARA candidate)",
      apd: "inferred",
      apdNote:
        "The coordinate-compatible S-FPL51 spectral proxy gives ΔPgF ≈ +0.0307; inferred anomalous dispersion, not proof of production glass identity.",
      diagramLabel: "L32",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L41",
      label: "Element 10",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.497103,
      vd: 81.56,
      indexReference: "d",
      focalLengthMm: 18.965494,
      glass: "497816 — M-FCD1 coordinate class (HOYA candidate)",
      apd: "inferred",
      apdNote:
        "The coordinate-compatible M-FCD1 spectral proxy gives ΔPgF ≈ +0.0318; inferred anomalous dispersion, not proof of production glass identity.",
      diagramLabel: "L41",
    },
    {
      id: 11,
      name: "L42",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.58,
      indexReference: "d",
      focalLengthMm: -13.947335,
      glass: "804466 coordinate class (S-LAH65V / H-ZLaF50D candidates)",
      diagramLabel: "L42",
      cemented: "T1",
    },
    {
      id: 12,
      name: "L43",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.54,
      indexReference: "d",
      focalLengthMm: 19.440764,
      glass: "497816 — S-FPL51 coordinate class (OHARA candidate)",
      apd: "inferred",
      apdNote:
        "The coordinate-compatible S-FPL51 spectral proxy gives ΔPgF ≈ +0.0307; inferred anomalous dispersion, not proof of production glass identity.",
      diagramLabel: "L43",
      cemented: "T1",
    },
    {
      id: 13,
      name: "L44",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.696797,
      vd: 55.53,
      indexReference: "d",
      focalLengthMm: -44.739409,
      glass: "697555 — S-LAL14 coordinate class (OHARA candidate)",
      diagramLabel: "L44",
      cemented: "T1",
    },
    {
      id: 14,
      name: "L51",
      label: "Element 14",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.6935,
      vd: 53.18,
      indexReference: "d",
      focalLengthMm: 62.677776,
      glass: "694532 — L-LAL13 coordinate class (OHARA candidate)",
      diagramLabel: "L51",
    },
  ],

  surfaces: [
    { label: "1", R: 48.9076, d: 1.7, sd: 20.5, medium: 1 },
    { label: "2", R: 17.1234, d: 4, sd: 13.7 },
    {
      label: "3A",
      R: 35.6783,
      d: 1.5,
      sd: 13.7,
      medium: 2,
      asphere: {
        K: 0,
        A4: 2.584318e-4,
        A6: -3.5980953e-6,
        A8: 2.2978051e-8,
        A10: -4.0438312e-11,
        A12: -9.9545849e-14,
        A5: -7.8805637e-6,
        A7: 1.6095961e-7,
        A9: -1.5416422e-9,
        A11: 5.0566122e-12,
      },
    },
    {
      label: "4A",
      R: 11.9671,
      d: 8.68,
      sd: 11.2,
      asphere: {
        K: -4.298432,
        A4: 5.5484444e-4,
        A6: -4.0404631e-6,
        A8: 4.3385992e-8,
        A10: -2.8487869e-10,
        A12: 5.65287e-13,
        A3: -4.4558881e-6,
        A5: -1.2840395e-5,
        A7: -2.0257653e-7,
        A9: 2.035652e-9,
        A11: -3.3536803e-12,
      },
    },
    { label: "5", R: -39.7818, d: 1.3, sd: 12.8, medium: 3 },
    { label: "6", R: 44.8286, d: 0.1, sd: 12.8 },
    { label: "7", R: 32.2764, d: 4.67, sd: 12.8, medium: 4 },
    { label: "8", R: -67.7357, sd: 12.8 },
    { label: "STO", R: "flat", d: 1.3 },
    {
      label: "10A",
      R: 22.3243,
      d: 3,
      sd: 6.9,
      medium: 5,
      asphere: {
        K: 0,
        A4: 1.9450862e-6,
        A6: 9.2762597e-6,
        A8: -1.3268194e-7,
        A10: -6.2858817e-10,
        A12: 1.4450909e-11,
        A5: -2.6510883e-5,
        A7: -1.0108176e-6,
        A9: 3.3304332e-8,
        A11: -2.6696016e-10,
      },
    },
    {
      label: "11A",
      R: -3623.6878,
      d: 1.3,
      sd: 7.1,
      asphere: {
        K: 0,
        A4: 4.3055171e-5,
        A6: 1.5741695e-5,
        A8: -3.3239681e-7,
        A10: -5.4620266e-10,
        A12: 4.1858983e-11,
        A5: -4.7563942e-5,
        A7: -1.3970041e-6,
        A9: 6.9972366e-8,
        A11: -7.1336476e-10,
      },
    },
    { label: "12", R: 577.6778, d: 0.71, sd: 7.2, medium: 6 },
    { label: "13", R: 16.619, d: 3.8, sd: 7.3, medium: 7 },
    { label: "14", R: -41.8885, sd: 7.4 },
    { label: "15", R: -27.941, d: 0.71, sd: 7.3, medium: 8 },
    { label: "16", R: 26.182, d: 3.06, sd: 7.6, medium: 9 },
    { label: "17", R: -39.844, sd: 7.8 },
    {
      label: "18A",
      R: 18.4297,
      d: 5,
      sd: 9.3,
      medium: 10,
      asphere: {
        K: 0,
        A4: 1.3578295e-5,
        A6: 5.1811411e-7,
        A8: -3.7667873e-8,
        A10: 5.4785448e-10,
        A12: -2.38651e-12,
        A5: -9.1406993e-6,
        A7: 3.2116393e-7,
        A9: -3.113606e-9,
        A11: 8.4337876e-12,
      },
    },
    {
      label: "19A",
      R: -17.5629,
      d: 1.3,
      sd: 9.3,
      asphere: {
        K: 0,
        A4: 8.328714e-5,
        A6: -3.5236718e-6,
        A8: -1.2202069e-9,
        A10: 6.926661e-10,
        A12: -4.4223065e-12,
        A5: 9.4589632e-6,
        A7: 5.8093125e-7,
        A9: -9.8162042e-9,
        A11: 4.324088e-11,
      },
    },
    { label: "20", R: 220.7677, d: 0.91, sd: 8.9, medium: 11 },
    { label: "21", R: 10.652, d: 6.3, sd: 8.6, medium: 12 },
    { label: "22", R: -83.55, d: 1, sd: 8.9, medium: 13 },
    { label: "23", R: 49.9738, sd: 9.3 },
    {
      label: "24A",
      R: 416.7292,
      d: 4,
      sd: 13.9,
      medium: 14,
      asphere: {
        K: 0,
        A4: -1.4524716e-4,
        A6: -3.4384459e-6,
        A8: 1.820492e-8,
        A10: -4.3555141e-11,
        A12: 5.6568011e-14,
        A5: 4.0453268e-5,
        A7: -1.8524677e-8,
        A9: -3.5828397e-10,
        A11: 4.8895266e-13,
      },
    },
    {
      label: "25A",
      R: -48.3381,
      d: 5,
      sd: 14.1,
      asphere: {
        K: 0,
        A4: -1.0149458e-4,
        A6: 1.5504919e-6,
        A8: 2.4336798e-8,
        A10: -1.3035736e-10,
        A12: 1.4069497e-13,
        A5: 1.7019957e-5,
        A7: -4.6722636e-7,
        A9: 1.3179759e-9,
        A11: -1.321871e-13,
      },
    }, // Table 1 gap to PP
  ],

  zoom: {
    stations: [
      { focalLengthMm: 10.33, label: "Wide" },
      { focalLengthMm: 15.2 },
      { focalLengthMm: 23.36, label: "Tele" },
    ],
    // Inferred iris schedule from the published infinity f-numbers; no source diameters.
    apertureModel: "from-nominal-fno",
  },

  focus: {
    closeFocusM: 0.24,
    description:
      "NO_INTERNAL_RECONSTRUCTION: Example 1 publishes infinity-only zoom states. Patent ¶0066 permits L41-only focusing, but no finite-focus L41 travel is given; 0.24 m is production MFD metadata only.",
  },

  gaps: {
    "8": {
      label: "D8",
      values: [
        [25.91, 25.91],
        [12.14, 12.14],
        [1.97, 1.97],
      ],
    },
    "14": {
      label: "D14",
      values: [
        [3.75, 3.75],
        [4.44, 4.44],
        [5.5, 5.5],
      ],
    },
    "17": {
      label: "D17",
      values: [
        [1.97, 1.97],
        [2.14, 2.14],
        [1.9, 1.9],
      ],
    },
    "23": {
      label: "D23",
      values: [
        [2, 2],
        [9.28, 9.28],
        [21.46, 21.46],
      ],
    },
  },

  aperture: { nominalFNumber: 4.12, fStops: [4.12, 5.6, 8, 11, 16] },

  /* ── Plane-parallel member PP (patent Table 1 surfaces 26–27): traced, not drawn ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.85,
      nd: 1.516798,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 7.6391,
      source: "US 2015/0131163 A1, Example 1 Table 1 surfaces 26–27",
    },
  ],

  groups: [
    { text: "G1 (−)", fromSurface: "1", toSurface: "8" },
    { text: "G2 (+)", fromSurface: "10A", toSurface: "14" },
    { text: "G3 (−)", fromSurface: "15", toSurface: "17" },
    { text: "G4 (+)", fromSurface: "18A", toSurface: "23" },
    { text: "G5 (+)", fromSurface: "24A", toSurface: "25A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "12", toSurface: "14" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
    { text: "T1", fromSurface: "20", toSurface: "23" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
