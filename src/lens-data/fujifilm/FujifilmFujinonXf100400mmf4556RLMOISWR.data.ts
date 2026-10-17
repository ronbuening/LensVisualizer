import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * FUJIFILM FUJINON XF 100-400mm f/4.5-5.6 R LM OIS WR
 *
 * Source prescription: US 2017/0090170 A1, Example 1, d-line (587.6 nm).
 * Production correlation is an inference: the patent does not name the XF100-400 product.
 * No uniform scaling is applied (s = 1).
 *
 * The patent's sensor-side optical member PP (surfaces 37-39: two cemented plane plates, 2.150 mm
 * nd 1.54763 / vd 54.99 and 0.700 mm nd 1.49784 / vd 54.95, then 1.000 mm air to the image) is modeled in
 * `rearPlates` (traced, not drawn). Surface 36 stores the physical Table 3 DD[36] gap to the first plate:
 * 36.048 / 28.853 / 29.788 mm. The air-equivalent BF is 38.904561 / 31.709561 / 32.644561 mm.
 *
 * Focus status: CONSTRAINED_RECONSTRUCTION. The patent publishes infinity-focus zoom spacings but no
 * close-focus table. G5 alone is translated imageward to the maker's 1.75 m minimum focus distance,
 * conserving D29 + D34 at each zoom state. The close-focus pairs below are project reconstructions, not
 * patent-published spacings. They were re-solved on 2026-09-23 with PP traced physically, so an object 1.75 m
 * in front of the image plane is in paraxial focus on the stored image plane at every zoom state.
 *
 * Stop size: the patent does not publish a physical stop diameter. The three published f/F No. pairs
 * imply paraxial stop semi-diameters of 9.045284, 9.045848, and 9.074770 mm. The station nominalFNumber
 * values are the exact modeled F-numbers that one fixed stop at their arithmetic mean produced at the
 * three authored infinity zoom states, not the rounded patent or production f/4.5-5.6 labels. The
 * engine derives the stop radius from the design f-number at wide and holds it at every zoom station.
 *
 * Semi-diameters are inferred, not source-published. They were sized from exact on-axis marginal rays,
 * the default 0.6-field off-axis fan, the patent optical section, and the production 77 mm filter / 94.8 mm
 * barrel envelope. The S11-S12 air gap is the binding cross-gap clearance and intentionally limits those
 * two clear radii. All authored infinity/close states pass independent edge-thickness, actual rim-slope,
 * cross-gap, and off-axis containment checks.
 *
 * 2026-09-11 rim review: Fig. 1 at 600 dpi supports larger L3A, L4A, G5 and L6A.
 * G5 is capped at 8.3 mm by the S31-S32 air gap; L4B retains its clearance-limited rim,
 * while the second figure review expands L4C-D to 9.8 mm within the edge-thickness limit.
 *
 * Glass strings are coordinate-class/equivalent assignments only; the patent names no supplier.
 * Patent Table 1 theta_gF values are retained as dPgF; C/d/F use compatible catalog curves.
 * Positive departures >= 0.01 receive patent-backed APD tags. Absolute line indices are not published.
 *
 * Zoom-only variable gaps: D5, D13, D22/STO, D36/BF.
 * Zoom + focus gaps: D29, D34.
 * Reversing source gaps across the three infinity zoom states: D22, D29, D36.
 */
const LENS_DATA = {
  schema: 2,
  key: "fujifilm-fujinon-xf-100-400mm-f45-56-r-lm-ois-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 100-400mm f/4.5-5.6 R LM OIS WR",
  subtitle: "US 2017/0090170 A1, Example 1 - unscaled patent prescription; production correlation inferred",

  catalog: {
    lensMounts: ["fujifilm-x"],
    imageFormat: "aps-c",
    specs: ["100-400mm", "f/4.5-5.6", "21 elements / 14 groups", "1.75 m MFD", "9-blade rounded diaphragm"],
    elementCount: 21,
    groupCount: 14,
    acceptsTeleconverters: true, // XF1.4X TC WR and XF2X TC WR per Fujifilm's compatibility charts
    focalLengthMm: { marketing: [100, 400], design: [102.8630940707373, 387.82147419839845] },
    fNumber: { marketing: 4.5 },
  },

  source: {
    patentNumber: "US 2017/0090170 A1",
    patentYear: 2017,
    authors: ["Taiga Noda"],
    assignees: ["Fujifilm Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1A",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      indexReference: "d",
      focalLengthMm: -216.078143,
      glass: "S-LAH55V class (OHARA coordinate equivalent; patent vendor unspecified)",
      apdNote:
        "Patent theta_gF = 0.56486; dPgF = -0.00708496 from the project normal line. No production supplier identification.",
      role: "Front negative G1 corrector; patent assigns chromatic and spherical-aberration correction to L1A.",
      diagramLabel: "L1A",
      cemented: "D1",
      dPgF: -0.00708496,
    },
    {
      id: 2,
      name: "L1B",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      focalLengthMm: 187.165023,
      glass: "S-FPL51 class (OHARA coordinate equivalent; patent vendor unspecified)",
      apd: "patent",
      apdNote:
        "Patent theta_gF = 0.53748; dPgF = +0.03083028 from the project normal line. No production supplier identification.",
      role: "Positive member of the front G1 cemented pair.",
      diagramLabel: "L1B",
      cemented: "D1",
      dPgF: 0.03083028,
    },
    {
      id: 3,
      name: "L1C",
      label: "Element 3",
      type: "Plano-Convex Positive",
      nd: 1.43875,
      vd: 94.66,
      indexReference: "d",
      focalLengthMm: 220.225573,
      glass: "S-FPL55 class (OHARA coordinate equivalent; historical vendor identity unproven)",
      apd: "patent",
      apdNote:
        "Patent theta_gF = 0.53402; dPgF = +0.04943812 from the project normal line. No production supplier identification.",
      role: "Rear positive G1 collector using the lowest-dispersion coordinate in the prescription.",
      diagramLabel: "L1C",
      dPgF: 0.04943812,
    },
    {
      id: 4,
      name: "L2A",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.60562,
      vd: 43.71,
      indexReference: "d",
      focalLengthMm: 77.622309,
      glass: "S-BAM4 class (OHARA coordinate equivalent; patent vendor unspecified)",
      apdNote:
        "Patent theta_gF = 0.57214; dPgF = +0.00186022 from the project normal line. No production supplier identification.",
      role: "Positive member of G2F, the front cemented variator pair.",
      diagramLabel: "L2A",
      cemented: "D2",
      dPgF: 0.00186022,
    },
    {
      id: 5,
      name: "L2B",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.755,
      vd: 52.32,
      indexReference: "d",
      focalLengthMm: -101.272986,
      glass: "S-YGH51 class (OHARA historical coordinate equivalent; patent vendor unspecified)",
      apdNote:
        "Patent theta_gF = 0.54765; dPgF = -0.00814776 from the project normal line. No production supplier identification.",
      role: "Negative member of G2F; cemented to L2A for chromatic control during zooming.",
      diagramLabel: "L2B",
      cemented: "D2",
      dPgF: -0.00814776,
    },
    {
      id: 6,
      name: "L2C",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.59522,
      vd: 67.73,
      indexReference: "d",
      focalLengthMm: -36.473279,
      glass: "S-FPM2 class (OHARA coordinate equivalent; patent vendor unspecified)",
      apd: "patent",
      apdNote:
        "Patent theta_gF = 0.54426; dPgF = +0.01438186 from the project normal line. No production supplier identification.",
      role: "Negative front member of G2R; part of the patent's image-stabilizing sub-group.",
      diagramLabel: "L2C",
      cemented: "D3",
      dPgF: 0.01438186,
    },
    {
      id: 7,
      name: "L2D",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.7847,
      vd: 26.29,
      indexReference: "d",
      focalLengthMm: 67.438928,
      glass: "S-TIH23 class (OHARA coordinate equivalent; patent vendor unspecified)",
      apd: "patent",
      apdNote:
        "Patent theta_gF = 0.61360; dPgF = +0.01401978 from the project normal line. No production supplier identification.",
      role: "Positive cemented partner in G2R / OIS sub-group.",
      diagramLabel: "L2D",
      cemented: "D3",
      dPgF: 0.01401978,
    },
    {
      id: 8,
      name: "L2E",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.816,
      vd: 46.62,
      indexReference: "d",
      focalLengthMm: -62.251147,
      glass: "S-LAH59 class (OHARA coordinate equivalent; patent vendor unspecified)",
      apdNote:
        "Patent theta_gF = 0.55682; dPgF = -0.00856516 from the project normal line. No production supplier identification.",
      role: "Negative G2R singlet distributing negative variator power.",
      diagramLabel: "L2E",
      dPgF: -0.00856516,
    },
    {
      id: 9,
      name: "L3A",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.13,
      indexReference: "d",
      focalLengthMm: 47.377306,
      glass: "S-BAL35 class (OHARA coordinate equivalent; patent vendor unspecified)",
      apdNote:
        "Patent theta_gF = 0.54067; dPgF = -0.00030934 from the project normal line. No production supplier identification.",
      role: "Positive G3 singlet ahead of the two cemented correction pairs.",
      diagramLabel: "L3A",
      dPgF: -0.00030934,
    },
    {
      id: 10,
      name: "L3B",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      focalLengthMm: 37.395117,
      glass: "S-FPL51 class (OHARA coordinate equivalent; patent vendor unspecified)",
      apd: "patent",
      apdNote:
        "Patent theta_gF = 0.53748; dPgF = +0.03083028 from the project normal line. No production supplier identification.",
      role: "Positive member of the first G3 cemented correction pair.",
      diagramLabel: "L3B",
      cemented: "D4",
      dPgF: 0.03083028,
    },
    {
      id: 11,
      name: "L3C",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.90043,
      vd: 37.37,
      indexReference: "d",
      focalLengthMm: -29.633053,
      glass: "TAFD37 class (HOYA coordinate equivalent; patent vendor unspecified)",
      apdNote:
        "Patent theta_gF = 0.57720; dPgF = -0.00374366 from the project normal line. No production supplier identification.",
      role: "High-index negative partner of the first G3 cemented pair.",
      diagramLabel: "L3C",
      cemented: "D4",
      dPgF: -0.00374366,
    },
    {
      id: 12,
      name: "L3D",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.58267,
      vd: 46.42,
      indexReference: "d",
      focalLengthMm: 25.851192,
      glass: "S-BAM3 class (OHARA coordinate equivalent; patent vendor unspecified)",
      apdNote:
        "Patent theta_gF = 0.56716; dPgF = +0.00143844 from the project normal line. No production supplier identification.",
      role: "Positive member of the second G3 cemented correction pair.",
      diagramLabel: "L3D",
      cemented: "D5",
      dPgF: 0.00143844,
    },
    {
      id: 13,
      name: "L3E",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.43,
      indexReference: "d",
      focalLengthMm: -23.501991,
      glass: "S-NSL36 class (OHARA coordinate equivalent; patent vendor unspecified)",
      apdNote:
        "Patent theta_gF = 0.55649; dPgF = +0.00087726 from the project normal line. No production supplier identification.",
      role: "Negative partner of the second G3 cemented pair immediately ahead of the stop.",
      diagramLabel: "L3E",
      cemented: "D5",
      dPgF: 0.00087726,
    },
    {
      id: 14,
      name: "L4A",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      focalLengthMm: 54.010085,
      glass: "S-FPL51 class (OHARA coordinate equivalent; patent vendor unspecified)",
      apd: "patent",
      apdNote:
        "Patent theta_gF = 0.53748; dPgF = +0.03083028 from the project normal line. No production supplier identification.",
      role: "Front positive member of G4.",
      diagramLabel: "L4A",
      dPgF: 0.03083028,
    },
    {
      id: 15,
      name: "L4B",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      indexReference: "d",
      focalLengthMm: -53.36569,
      glass: "S-LAH55V class (OHARA coordinate equivalent; patent vendor unspecified)",
      apdNote:
        "Patent theta_gF = 0.56486; dPgF = -0.00708496 from the project normal line. No production supplier identification.",
      role: "Negative G4 meniscus balancing the positive relay group.",
      diagramLabel: "L4B",
      dPgF: -0.00708496,
    },
    {
      id: 16,
      name: "L4C",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.697,
      vd: 48.52,
      indexReference: "d",
      focalLengthMm: -62.319784,
      glass: "S-LAM59 class (OHARA coordinate equivalent; patent vendor unspecified)",
      apdNote:
        "Patent theta_gF = 0.55889; dPgF = -0.00329936 from the project normal line. No production supplier identification.",
      role: "Negative front member of the rear G4 cemented pair.",
      diagramLabel: "L4C",
      cemented: "D6",
      dPgF: -0.00329936,
    },
    {
      id: 17,
      name: "L4D",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.43,
      indexReference: "d",
      focalLengthMm: 27.830373,
      glass: "S-NSL36 class (OHARA coordinate equivalent; patent vendor unspecified)",
      apdNote:
        "Patent theta_gF = 0.55649; dPgF = +0.00087726 from the project normal line. No production supplier identification.",
      role: "Positive rear member of the G4 cemented pair.",
      diagramLabel: "L4D",
      cemented: "D6",
      dPgF: 0.00087726,
    },
    {
      id: 18,
      name: "L5A",
      label: "Element 18",
      type: "Negative Meniscus",
      nd: 1.618,
      vd: 63.33,
      indexReference: "d",
      focalLengthMm: -32.409035,
      glass: "S-PHM52 class (OHARA coordinate equivalent; patent vendor unspecified)",
      apdNote:
        "Patent theta_gF = 0.54414; dPgF = +0.00686106 from the project normal line. No production supplier identification.",
      role: "Front negative element of the translating G5 focus group.",
      diagramLabel: "L5A",
      dPgF: 0.00686106,
    },
    {
      id: 19,
      name: "L5B",
      label: "Element 19",
      type: "Plano-Concave Negative",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      focalLengthMm: -29.997988,
      glass: "S-FPL51 class (OHARA coordinate equivalent; patent vendor unspecified)",
      apd: "patent",
      apdNote:
        "Patent theta_gF = 0.53748; dPgF = +0.03083028 from the project normal line. No production supplier identification.",
      role: "Negative front member of the rear G5 cemented pair.",
      diagramLabel: "L5B",
      cemented: "D7",
      dPgF: 0.03083028,
    },
    {
      id: 20,
      name: "L5C",
      label: "Element 20",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 53.2,
      indexReference: "d",
      focalLengthMm: 28.508291,
      glass: "L-LAL13 class (OHARA coordinate equivalent; patent vendor unspecified)",
      apdNote:
        "Patent theta_gF = 0.54731; dPgF = -0.00700760 from the project normal line. No production supplier identification.",
      role: "Positive cemented partner completing the G5 focus group.",
      diagramLabel: "L5C",
      cemented: "D7",
      dPgF: -0.0070076,
    },
    {
      id: 21,
      name: "L6A",
      label: "Element 21",
      type: "Positive Meniscus",
      nd: 1.54072,
      vd: 47.23,
      indexReference: "d",
      focalLengthMm: 114.37664,
      glass: "S-TIL2 class (OHARA coordinate equivalent; patent vendor unspecified)",
      apdNote:
        "Patent theta_gF = 0.56511; dPgF = +0.00075086 from the project normal line. No production supplier identification.",
      role: "Positive sixth-group relay reducing peripheral incidence angle at the image plane.",
      diagramLabel: "L6A",
      dPgF: 0.00075086,
    },
  ],

  surfaces: [
    { label: "1", R: 269.48203, d: 2.22, sd: 38.0, medium: 1 },
    { label: "2", R: 107.65, d: 8.45, sd: 38.0, medium: 2 },
    { label: "3", R: -666.67333, d: 0.15, sd: 38.0 },
    { label: "4", R: 96.62397, d: 7.95, sd: 37.2, medium: 3 },
    { label: "5", R: "flat", sd: 37.2 },
    { label: "6", R: -208.6923, d: 3.69, sd: 13.9, medium: 4 },
    { label: "7", R: -38.623, d: 1.0, sd: 13.9, medium: 5 },
    { label: "8", R: -78.9165, d: 2.3, sd: 13.9 },
    { label: "9", R: -167.21335, d: 1.01, sd: 13.0, medium: 6 },
    { label: "10", R: 25.005, d: 3.09, sd: 13.0, medium: 7 },
    { label: "11", R: 44.82826, d: 2.87, sd: 11.7 },
    { label: "12", R: -69.05525, d: 1.0, sd: 11.7, medium: 8 },
    { label: "13", R: 193.37055, sd: 12.3 },
    { label: "14", R: 71.43178, d: 5.72, sd: 15.9, medium: 9 },
    { label: "15", R: -44.45211, d: 0.15, sd: 15.9 },
    { label: "16", R: 39.58695, d: 6.53, sd: 14.8, medium: 10 },
    { label: "17", R: -33.114, d: 1.0, sd: 14.8, medium: 11 },
    { label: "18", R: 139.34617, d: 0.18, sd: 14.8 },
    { label: "19", R: 28.837, d: 6.7, sd: 13.2, medium: 12 },
    { label: "20", R: -28.837, d: 1.0, sd: 13.2, medium: 13 },
    { label: "21", R: 21.27628, d: 2.78, sd: 13.2 },
    { label: "STO", R: "flat" },
    { label: "23", R: 49.78064, d: 4.67, sd: 11.5, medium: 14 },
    { label: "24", R: -56.44194, d: 0.33, sd: 11.5 },
    { label: "25", R: -40.48697, d: 1.0, sd: 8.7, medium: 15 },
    { label: "26", R: -448.89591, d: 0.17, sd: 8.7 },
    { label: "27", R: 40.52272, d: 1.01, sd: 9.8, medium: 16 },
    { label: "28", R: 20.75, d: 4.3, sd: 9.8, medium: 17 },
    { label: "29", R: -43.73001, sd: 9.8 },
    { label: "30", R: 92.4472, d: 1.0, sd: 8.3, medium: 18 },
    { label: "31", R: 16.39421, d: 2.63, sd: 8.3 },
    { label: "32", R: "flat", d: 1.01, sd: 8.3, medium: 19 },
    { label: "33", R: 14.909, d: 4.45, sd: 8.3, medium: 20 },
    { label: "34", R: 53.2203, sd: 8.3 },
    { label: "35", R: -249.66626, d: 2.91, sd: 14.2, medium: 21 },
    { label: "36", R: -49.77001, sd: 14.2 }, // DD[36] — gap to the PP plates
  ],

  zoom: {
    stations: [
      { focalLengthMm: 102.873, nominalFNumber: 4.614445088540655, label: "Wide" },
      { focalLengthMm: 178.159, nominalFNumber: 4.784521400670022 },
      { focalLengthMm: 387.872, nominalFNumber: 5.791672588725861, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 1.75,
    description:
      "CONSTRAINED_RECONSTRUCTION: G5 alone moves imageward to 1.75 m; D29 increases and D34 decreases by equal amounts at each zoom state. Close-focus spacings are code-solved for a 1.75 m object-to-image distance with the PP rear plates traced physically, not patent-published.",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [47.912, 47.912],
        [84.375, 84.375],
        [109.566, 109.566],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [28.893, 28.893],
        [19.144, 19.144],
        [1.765, 1.765],
      ],
    },
    STO: {
      label: "D22",
      values: [
        [11.359, 11.359],
        [7.991, 7.991],
        [24.28, 24.28],
      ],
    },
    "29": {
      label: "D29",
      values: [
        [7.202, 8.792362435881087],
        [7.574, 11.676068221060385],
        [2.343, 17.202735007397106],
      ],
    },
    "34": {
      label: "D34",
      values: [
        [5.165, 3.5746375641189134],
        [17.208, 13.105931778939613],
        [27.898, 13.038264992602894],
      ],
    },
    "36": {
      label: "BF",
      values: [
        [36.048, 36.048],
        [28.853, 28.853],
        [29.788, 29.788],
      ],
    },
  },

  aperture: { fStops: [4.5, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  /* ── Optical member PP (patent surfaces 37–39): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 2.15,
      nd: 1.54763,
      vd: 54.99,
      glass: "N-BALF5",
      dPgF: 0.00098318,
      gapAfterMm: 0,
      source: "US 2017/0090170 A1, Example 1 Table 1 surfaces 37–38 (PP, first plate; theta_gF 0.55229)",
    },
    {
      thicknessMm: 0.7,
      nd: 1.49784,
      vd: 54.95,
      dPgF: -0.0017841,
      gapAfterMm: 1.0,
      source: "US 2017/0090170 A1, Example 1 Table 1 surfaces 38–39 (PP, second plate; theta_gF 0.54959)",
    },
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6", toSurface: "13" },
    { text: "G3", fromSurface: "14", toSurface: "21" },
    { text: "G4", fromSurface: "23", toSurface: "29" },
    { text: "G5", fromSurface: "30", toSurface: "34" },
    { text: "G6", fromSurface: "35", toSurface: "36" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "9", toSurface: "11" },
    { text: "D4", fromSurface: "16", toSurface: "18" },
    { text: "D5", fromSurface: "19", toSurface: "21" },
    { text: "D6", fromSurface: "27", toSurface: "29" },
    { text: "D7", fromSurface: "32", toSurface: "34" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
