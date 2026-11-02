import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF-S 18–55mm IS — US 2007/0058265 A1, Numerical Example 2.
 * Original shape/glass review: 2026-10-30. Prescription PDF pp. 24–25,
 * Fig. 4 PDF p. 5 / sheet 4; native raster is 300 ppi, not an upsampled scan.
 * Four optical units, 11 elements / 9 groups, two cemented pairs and one asphere.
 * All source R/d, asphere and existing zoom/focus gap schedules are preserved.
 *
 * Clear caps and four outer shoulders follow optical rims in the native figure.
 * Source clear diameters are not printed; height uncertainty and rejected full
 * cap trials are recorded in the audit. S4 clear 12.2 is retained below its
 * steep spherical guard; its supported outer 17.2 shoulder preserves aperture.
 * S19A/S20 retain clear 8.0 across the printed 0.03 mm gap; larger clear caps
 * physically overlap. Outer shoulders improve the blank contour without
 * claiming to restore a larger optical aperture. No inferred cut is added.
 *
 * Source-stated focal labels are 18.69 / 32.08 / 53.27 mm. Published endpoint
 * apertures are f/3.63 and f/5.86, correcting the old production-label targets.
 * The retained middle f/4.5 target is an unpublished reconstruction. Existing
 * computed infinity image gaps and the front-group 0.25 m focus reconstruction
 * remain unchanged; no source finite-focus table or physical iris is published.
 *
 * Paragraph 0116 (PDF p. 23, printed 6) explicitly defines N/nu at the d-ray.
 * Eleven compatible catalog curves are qualified spectral proxies, with no
 * historical supplier, melt or chemistry identified. N10 uses the published
 * POLYCARB numerical proxy (2026-10-31); its +0.00241 catalog nd difference
 * does not establish source polycarbonate. The source publishes no
 * position-specific C/F/g indices, partial dispersion or
 * APD values; no unsupported per-lens spectral override is added.
 *
 * Table 1 condition 5 is 0.59 versus literal 0.659544, and condition 9's printed
 * fw/f4 label/value is inconsistent (literal 0.434343, inverse 2.302328 versus 2.30).
 * These source definition/table issues are qualified without changing optics.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-efs-18-55mm-f35-56-is",
  maker: "Canon",
  name: "CANON EF-S 18-55mm f/3.5-5.6 IS",
  subtitle: "US 2007/0058265 A1 — Numerical Example 2",

  catalog: {
    lensMounts: ["canon-ef-s"],
    imageFormat: "aps-c",
    specs: [
      "11 elements / 9 groups",
      "Patent f = 18.69–53.27 mm",
      "Patent Fno = 3.63-5.86",
      "2ω = 72.2°-28.7°",
      "1 aspherical surface",
      "single-lens IS unit",
    ],
    elementCount: 11,
    groupCount: 9,
    focalLengthMm: { marketing: [18, 55], design: [18.69, 53.27] },
    fNumber: { marketing: 3.5, design: 3.63 },
  },

  source: {
    patentNumber: "US 2007/0058265 A1",
    example: { label: "Numerical Example 2", id: "2" },
    patentYear: 2007,
    authors: ["Takeshi Nishimura"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Table 1 (PDF p. 26, printed p. 9) lists condition (5)=0.59 for Example 2, while its printed Vp=70.2, Vn=23.9 and V2A=70.2 (PDF p. 24) give (Vp-Vn)/V2A=0.659544. The broad condition still holds; no Abbe value is changed to match the table.",
      },
      {
        status: "unresolved",
        note: "Condition (9) in paragraph 0092 (PDF p. 22), preferred form in paragraph 0114 (PDF p. 23), and Table 1 (PDF p. 26) print fw/f4, while Example 2's table value 2.30 matches the inverse f4/fw=2.302328. Literal fw/f4=0.434343 with source fw=18.69 and computed f4=43.030515 mm. The formula/label discrepancy is retained without altering the numerical prescription.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      focalLengthMm: 164.052,
      glass: "S-BSL7 (OHARA compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Weak front positive meniscus that moderates the entrance bundle before the negative front-group lenses.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.622992,
      vd: 58.2,
      indexReference: "d",
      focalLengthMm: -29.41,
      glass: "S-BSM15 (OHARA compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Primary negative-power lens in the retrofocus front group.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.622992,
      vd: 58.2,
      indexReference: "d",
      focalLengthMm: -34.932,
      glass: "S-BSM15 (OHARA compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Second negative front-group lens, sharing the wide-angle divergence with L12.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.805181,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: 45.305,
      glass: "S-TIH6 (OHARA compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "High-index, high-dispersion positive element that trims front-group chromatic and monochromatic aberrations.",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5 / L2A IS unit",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      focalLengthMm: 78.625,
      glass: "S-FSL5 (OHARA compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Single positive image-stabilizing lens displaced perpendicular to the optical axis.",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      indexReference: "d",
      focalLengthMm: -60.003,
      glass: "S-TIH53 (OHARA compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "High-index, high-dispersion member of the positive L2B achromatizing doublet.",
      cemented: "L2B",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      focalLengthMm: 21.949,
      glass: "S-FSL5 (OHARA compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Low-dispersion positive crown component of the L2B cemented doublet.",
      cemented: "L2B",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.639799,
      vd: 34.5,
      indexReference: "d",
      focalLengthMm: -13.711,
      glass: "S-TIM27 (OHARA compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Strong negative component of the third-group compensator doublet.",
      cemented: "L3",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.784723,
      vd: 25.7,
      indexReference: "d",
      focalLengthMm: 21.969,
      glass: "S-TIH11 (OHARA compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "High-index, high-dispersion positive member paired with L31 in the net-negative compensator group.",
      cemented: "L3",
    },
    {
      id: 10,
      name: "L41",
      label: "Element 10",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.58306,
      vd: 30.2,
      indexReference: "d",
      focalLengthMm: -211.974,
      glass: "POLYCARB (published MISC catalog; qualified numerical polymer proxy; source chemistry and supplier unspecified)",
      role: "Weak negative optical element carrying the sole asphere on its rear face; historical material is unidentified.",
    },
    {
      id: 11,
      name: "L42",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      focalLengthMm: 36.394,
      glass: "S-FSL5 (OHARA compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Rear positive relay/field lens with strong rear convergence toward the image plane.",
    },
  ],

  surfaces: [
    { label: "1", R: 80.198, d: 3.4, sd: 20.3, medium: 1 },
    { label: "2", R: 1485.52, d: 0.15, sd: 19.0, rimExtensionSd: 20.3 },
    { label: "3", R: 74.916, d: 1.6, sd: 17.2, medium: 2 },
    { label: "4", R: 14.601, d: 7.99, sd: 12.2, rimExtensionSd: 17.2 },
    { label: "5", R: -141.698, d: 1.2, sd: 12.6, medium: 3 },
    { label: "6", R: 25.795, d: 0.15, sd: 12.6 },
    { label: "7", R: 21.179, d: 3.4, sd: 12.6, medium: 4 },
    { label: "8", R: 46.88, sd: 12.6 },
    { label: "9", R: -302.692, d: 1.9, sd: 7.1, medium: 5 },
    { label: "10", R: -34.091, d: 4.2, sd: 7.1 },
    { label: "11", R: 16.673, d: 0.8, sd: 7.5, medium: 6 },
    { label: "12", R: 12.277, d: 4.5, sd: 7.5, medium: 7 },
    { label: "13", R: -73.294, d: 1.0, sd: 7.5 },
    { label: "STO", R: "flat" },
    { label: "15", R: -29.161, d: 0.75, sd: 6.5, medium: 8 },
    { label: "16", R: 12.672, d: 2.6, sd: 6.5, medium: 9 },
    { label: "17", R: 43.512, sd: 6.5 },
    { label: "18", R: -96.235, d: 1.5, sd: 8.5, medium: 10 },
    {
      label: "19A",
      R: -437.245,
      d: 0.03,
      sd: 8.0,
      rimExtensionSd: 8.5,
      asphere: { K: 0, A4: 3.76648e-5, A6: 3.00374e-8, A8: 7.60709e-10, A10: -8.99719e-12, A12: 0 },
    },
    { label: "20", R: 417.34, d: 3.8, sd: 8.0, rimExtensionSd: 9.0, medium: 11 },
    { label: "21", R: -18.474, sd: 9.0 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 18.69, nominalFNumber: 3.63, label: "18 mm" },
      // The source tabulates this geometry but gives no middle F-number.
      // Retain the existing unpublished middle target rather than invent source evidence.
      { focalLengthMm: 32.08, nominalFNumber: 4.5 },
      { focalLengthMm: 53.27, nominalFNumber: 5.86, label: "55 mm" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.25,
    description:
      "Front-group focusing: Group 1 translates objectward for close focus. Close-focus D8 values are paraxially inferred from the official 0.25 m MFD because the patent provides infinity-focus zoom spacings only.",
  },

  gaps: {
    "8": {
      label: "D8 / focus",
      values: [
        [33.62, 38.243622193],
        [13.53, 17.916075104],
        [3.23, 7.872280536],
      ],
    },
    STO: {
      label: "D14",
      values: [
        [3.3, 3.3],
        [6.19, 6.19],
        [8.96, 8.96],
      ],
    },
    "17": {
      label: "D17",
      values: [
        [7.34, 7.34],
        [4.45, 4.45],
        [1.68, 1.68],
      ],
    },
    "21": {
      label: "BF",
      values: [
        [35.265626831, 35.265626831],
        [46.875312338, 46.875312338],
        [66.283929333, 66.283929333],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 5.6, 8, 11, 16, 22, 32, 36], maxFNumber: 36, blades: 6, bladeRoundedness: 0.6 },

  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "8" },
    { text: "G2 / IS (+)", fromSurface: "9", toSurface: "13" },
    { text: "G3 (-)", fromSurface: "15", toSurface: "17" },
    { text: "G4 (+)", fromSurface: "18", toSurface: "21" },
  ],
  doublets: [
    { text: "L2B", fromSurface: "11", toSurface: "13" },
    { text: "L3", fromSurface: "15", toSurface: "17" },
  ],

  layout: { scFill: 0.72, yScFill: 0.68 },
} satisfies LensDataV2Input;

export default LENS_DATA;
