import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — FUJIFILM FUJINON XF 18-135mm f/3.5-5.6 R LM OIS WR            ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 9,651,761 B2, Example 1 (FUJIFILM Corporation; Ori / Cho).      ║
 * ║ Patent design: 16 elements / 12 air-separated groups, six functional       ║
 * ║ zoom groups G1-G6, and eight aspherical surfaces on four elements.         ║
 * ║ Production identity: FUJIFILM XF18-135mmF3.5-5.6 R LM OIS WR.              ║
 * ║                                                                            ║
 * ║ ZOOM / FOCUS                                                               ║
 * ║   Published infinity zoom states: 18.50 / 49.19 / 130.78 mm.              ║
 * ║   Zoom-only gaps: D5, D22, D27.                                            ║
 * ║   Zoom + focus gaps: D11 and D13 around G3 (L31).                          ║
 * ║   No reversal occurs among the three published zoom stations.              ║
 * ║   Focus status: CONSTRAINED_RECONSTRUCTION. The patent states that G3      ║
 * ║   alone moves objectward for closer focus but publishes no finite-focus    ║
 * ║   spacing table. Close-focus pairs below were code-solved at 0.45 m from   ║
 * ║   the physical sensor plane, conserving D11 + D13 at every zoom station.   ║
 * ║                                                                            ║
 * ║ NORMALIZATION / SCALING                                                    ║
 * ║   No uniform scale is applied.                                             ║
 * ║   Patent PP (surfaces 30–31; 2.85 mm, nd=1.5168, νd=64.2) represents       ║
 * ║   cover/filter/prism optics. It is modeled physically in `rearPlates`      ║
 * ║   (traced, not drawn): d29 = 2.000 mm to PP, then 16.080 mm to image.      ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS / STOP                                                      ║
 * ║   The patent publishes no clear-aperture table. SDs are inferred from      ║
 * ║   exact meridional traces across all three zoom stations: full wide-open   ║
 * ║   pupil on axis and at 60% field, max-field chief rays, and reconstructed  ║
 * ║   0.45 m close-focus rays through 60% of the APS-C half-diagonal. Nominal  ║
 * ║   8% clearance was added where geometry allowed; surface 8 is constrained  ║
 * ║   by the 7A→8 cross-gap clearance.                                         ║
 * ║   Fig. 1 (600 dpi) refines S25/S26/S27 to 9.4/9.6/9.9 mm.
 * ║   The patent gives FNo but no physical iris diameter. The stop radius is   ║
 * ║   derived from the design f-number at each zoom station; station           ║
 * ║   nominalFNumber values supply the exact per-zoom modeled f-numbers.       ║
 * ║                                                                            ║
 * ║ ASPHERES / GLASS                                                           ║
 * ║   Patent KA=1 converts to project K=0 on all aspheres. Odd radial powers   ║
 * ║   A3-A19 are intentional. Rendered Table 4 visually verifies surface 24     ║
 * ║   A20 as +1.4631615E−19; machine-extracted text can omit the leading 1.     ║
 * ║   Glass names are catalog-coordinate matches/classes, not undocumented     ║
 * ║   melt-vendor claims. The patent publishes no per-element nC/nF/ng/dPgF;   ║
 * ║   therefore those fields are not invented. Catalog-resolvable names may    ║
 * ║   obtain Sellmeier dispersion from the project catalog at runtime.         ║
 * ║                                                                            ║
 * ║ Manufacturer sources:                                                      ║
 * ║   https://www.fujifilm-x.com/en-us/products/lenses/xf18-135mmf35-56-r-lm-ois-wr/
 * ║   https://dl.fujifilm-x.com/support/manual/lenses/lens_xf18-135_manual_03.pdf
 * ║   https://mall-jp.fujifilm.com/shop/g/g16432853/                            ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "fujifilm-fujinon-xf-18-135mm-f35-56-r-lm-ois-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 18-135mm f/3.5-5.6 R LM OIS WR",
  subtitle: "US 9,651,761 B2 Example 1 — production correlation; unscaled patent prescription",

  catalog: {
    lensMounts: ["fujifilm-x"],
    imageFormat: "aps-c",
    specs: [
      "16 ELEMENTS / 12 GROUPS",
      "MARKETED 18-135 mm f/3.5-5.6",
      "PATENT DESIGN 18.50-130.78 mm f/3.61-5.81",
      "4 ASPHERICAL ELEMENTS / 8 ASPHERICAL SURFACES",
      "INNER FOCUS • OIS",
    ],
    elementCount: 16,
    groupCount: 12,
    focalLengthMm: { marketing: [18, 135], design: [18.5, 130.78] },
    fNumber: { marketing: 3.5, design: 3.61 },
  },

  source: {
    patentNumber: "US 9,651,761 B2",
    patentYear: 2017,
    authors: ["Tetsuya Ori", "Michio Cho"],
    assignees: ["Fujifilm Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: -147.481888784,
      glass: "923209 — high-index flint class (N-SF66/FDS1 coordinate)",
      apd: "inferred",
      apdNote:
        "Compatible N-SF66 catalog curve has ΔPgF ≈ +0.031; inferred optical class only, not a patent APD designation or supplier identification.",
      role: "G1 front negative meniscus; cemented to L12.",
      diagramLabel: "L11",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Plano-Convex Positive",
      nd: 1.59282,
      vd: 68.63,
      focalLengthMm: 104.500522924,
      glass: "FCD505 (HOYA)",
      role: "G1 positive element; HOYA FCD505 match (current catalog νd differs from the patent by 0.01).",
      diagramLabel: "L12",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 52.32,
      focalLengthMm: 95.669341367,
      glass: "755523 — lanthanum crown class",
      role: "G1 rear positive element.",
      diagramLabel: "L13",
    },
    {
      id: 4,
      name: "L21",
      label: "L21",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.85135,
      vd: 40.23,
      focalLengthMm: -19.913718913,
      glass: "M-TAFD305 (catalog equivalent; supplier unresolved)",
      role: "G2 front negative element; both faces aspherical.",
      diagramLabel: "L21",
    },
    {
      id: 5,
      name: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.73,
      focalLengthMm: -24.579756994,
      glass: "835427 — lanthanum glass class (S-LAH55V coordinates)",
      role: "G2 biconcave negative element.",
      diagramLabel: "L22",
    },
    {
      id: 6,
      name: "L23",
      label: "L23",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: 20.249667126,
      glass: "923209 — high-index flint class (N-SF66/FDS1 coordinate)",
      apd: "inferred",
      apdNote:
        "Compatible N-SF66 catalog curve has ΔPgF ≈ +0.031; inferred optical class only, not a patent APD designation or supplier identification.",
      role: "G2 rear positive element.",
      diagramLabel: "L23",
    },
    {
      id: 7,
      name: "L31",
      label: "L31",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.79839,
      vd: 45.28,
      focalLengthMm: -38.757643627,
      glass: "Unmatched (798453; nd=1.79839, νd=45.28)",
      role: "G3 single-element inner-focus group; both faces aspherical.",
      diagramLabel: "L31",
    },
    {
      id: 8,
      name: "L41",
      label: "L41",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.56867,
      vd: 58.5,
      focalLengthMm: 30.138472969,
      glass: "Unmatched (569585; nd=1.56867, νd=58.50)",
      role: "G4A front positive element; both faces aspherical.",
      diagramLabel: "L41",
    },
    {
      id: 9,
      name: "L42",
      label: "L42",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 26.564491015,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote:
        "Compatible S-FPL51 catalog curve has ΔPgF ≈ +0.031; inferred optical class only, not a patent APD designation or supplier identification.",
      role: "G4A positive element; cemented to L43; catalog coordinate match only.",
      diagramLabel: "L42",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L43",
      label: "L43",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: -32.376552576,
      glass: "923209 — high-index flint class (N-SF66/FDS1 coordinate)",
      apd: "inferred",
      apdNote:
        "Compatible N-SF66 catalog curve has ΔPgF ≈ +0.031; inferred optical class only, not a patent APD designation or supplier identification.",
      role: "G4A negative element cemented to L42.",
      diagramLabel: "L43",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L44",
      label: "L44",
      type: "Positive Meniscus",
      nd: 2.00069,
      vd: 25.46,
      focalLengthMm: 33.812402285,
      glass: "001255 — high-index flint class (TAFD40 coordinates)",
      role: "G4B positive element; cemented to L45; OIS subgroup.",
      diagramLabel: "L44",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L45",
      label: "L45",
      type: "Biconcave Negative",
      nd: 1.673,
      vd: 38.15,
      focalLengthMm: -19.462678564,
      glass: "673382 — dense flint class (S-NBH52 coordinates)",
      role: "G4B negative element; cemented to L44; OIS subgroup.",
      diagramLabel: "L45",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L51",
      label: "L51",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.6663,
      vd: 55.16,
      focalLengthMm: 21.602615843,
      glass: "Unmatched (666552; nd=1.66630, νd=55.16)",
      role: "G5A biconvex positive element; both faces aspherical.",
      diagramLabel: "L51",
    },
    {
      id: 14,
      name: "L52",
      label: "L52",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.76,
      focalLengthMm: -18.347056475,
      glass: "S-LAH58 (OHARA)",
      role: "G5B biconcave element; cemented to L53; catalog coordinate match only.",
      diagramLabel: "L52",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L53",
      label: "L53",
      type: "Biconvex Positive",
      nd: 1.72825,
      vd: 28.46,
      focalLengthMm: 45.835931465,
      glass: "S-TIH10 (OHARA)",
      role: "G5B biconvex element; cemented to L52; catalog coordinate match only.",
      diagramLabel: "L53",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L61",
      label: "L61",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.23,
      focalLengthMm: 192.520546765,
      glass: "S-FSL5 (OHARA)",
      role: "G6 fixed rear positive element; catalog coordinate match only.",
      diagramLabel: "L61",
    },
  ],

  surfaces: [
    { label: "1", R: 115.12193, d: 1.61, sd: 23.9, medium: 1 },
    { label: "2", R: 61.95, d: 5.4, sd: 22.4, medium: 2 },
    { label: "3", R: "flat", d: 0.1, sd: 22.2 },
    { label: "4", R: 50.33009, d: 4.0, sd: 21.6, medium: 3 },
    { label: "5", R: 160.32074, sd: 21.3 },
    {
      label: "6A",
      R: 870.65893,
      d: 1.25,
      sd: 14.8,
      medium: 4,
      asphere: {
        K: 0,
        A4: 0.00010879994,
        A6: -1.0759633e-06,
        A8: 4.4147811e-09,
        A10: -1.6729044e-11,
        A12: 3.6090358e-15,
        A14: 2.1746094e-16,
        A16: 1.5033988e-19,
        A18: -4.5240895e-21,
        A20: 2.1242397e-23,
        A3: -3.3258659e-05,
        A5: -4.7885502e-06,
        A7: 6.1277394e-08,
        A9: -3.4318863e-11,
        A11: -9.9458644e-13,
        A13: 2.0883127e-15,
        A15: 1.1722253e-17,
        A17: -4.0529382e-20,
        A19: -1.9098322e-22,
      },
    },
    {
      label: "7A",
      R: 16.61875,
      d: 5.892,
      sd: 11.3,
      asphere: {
        K: 0,
        A4: 0.00010274592,
        A6: 4.2461037e-09,
        A8: 3.6932216e-09,
        A10: -1.4923235e-11,
        A12: -1.1009805e-12,
        A14: 2.3398595e-15,
        A16: 2.2479475e-17,
        A18: -3.273636e-19,
        A20: 3.6292592e-21,
        A3: -1.3257457e-06,
        A5: -3.8403367e-06,
        A7: -1.0911228e-07,
        A9: 9.9033512e-10,
        A11: 7.5628602e-12,
        A13: -4.1239435e-14,
        A15: 4.1733591e-16,
        A17: -8.7519908e-19,
        A19: -3.0000033e-20,
      },
    },
    { label: "8", R: -47.83544, d: 0.85, sd: 10.25, medium: 5 },
    { label: "9", R: 36.22386, d: 0.44, sd: 10.6 },
    { label: "10", R: 28.76033, d: 4.58, sd: 10.7, medium: 6 },
    { label: "11", R: -49.28002, sd: 10.3 },
    {
      label: "12A",
      R: -36.68885,
      d: 1.0,
      sd: 8.5,
      medium: 7,
      asphere: {
        K: 0,
        A4: -3.1477418e-05,
        A6: 1.3471177e-06,
        A8: -1.1914342e-09,
        A10: 2.7859801e-10,
        A12: 4.7688895e-13,
        A14: -1.5438437e-14,
        A16: -2.3652804e-16,
        A18: 6.8754879e-18,
        A20: -1.3017061e-19,
        A3: -0.00025716568,
        A5: -5.8230201e-07,
        A7: -6.6131579e-08,
        A9: -2.4884705e-09,
        A11: 9.3821157e-12,
        A13: -3.7218163e-14,
        A15: -2.1576117e-15,
        A17: -2.0527067e-17,
        A19: 1.2534597e-18,
      },
    },
    {
      label: "13A",
      R: 199.99995,
      sd: 8.4,
      asphere: {
        K: 0,
        A4: -3.5725409e-05,
        A6: 4.3156603e-07,
        A8: -2.7142956e-09,
        A10: -1.1766821e-10,
        A12: 2.4935568e-12,
        A14: 8.7246413e-15,
        A16: -2.7329827e-16,
        A18: -6.9614104e-17,
        A20: -9.1035356e-19,
        A3: -0.00024949403,
        A5: 2.1839917e-06,
        A7: 4.689015e-08,
        A9: -1.3765897e-09,
        A11: 9.5832042e-12,
        A13: 2.8498926e-13,
        A15: 6.5806925e-16,
        A17: -1.7352286e-16,
        A19: 1.7448607e-17,
      },
    },
    {
      label: "14A",
      R: 17.31958,
      d: 4.0,
      sd: 8.4,
      medium: 8,
      asphere: {
        K: 0,
        A4: 7.5611598e-06,
        A6: 1.3986681e-06,
        A8: -6.2990664e-09,
        A10: 3.5819503e-11,
        A12: -5.7183112e-13,
        A14: 3.2149749e-14,
        A16: -1.533712e-17,
        A18: -3.1323886e-17,
        A20: -4.0881988e-19,
        A3: -2.5260169e-05,
        A5: -8.867925e-06,
        A7: -3.8239999e-08,
        A9: -1.6339604e-11,
        A11: -8.8035859e-12,
        A13: 8.6147165e-14,
        A15: 3.9749647e-15,
        A17: -1.4810442e-16,
        A19: 7.9878135e-18,
      },
    },
    {
      label: "15A",
      R: -1504.88688,
      d: 1.3,
      sd: 8.2,
      asphere: {
        K: 0,
        A4: 3.5024607e-05,
        A6: 2.0048636e-06,
        A8: -2.7593537e-08,
        A10: 9.7508883e-11,
        A12: 3.2754768e-12,
        A14: -3.6779862e-14,
        A16: -5.7196441e-16,
        A18: 9.2927985e-18,
        A20: -4.2439516e-19,
        A3: -3.2153387e-05,
        A5: -1.4415764e-05,
        A7: 8.5395147e-08,
        A9: -1.5824477e-09,
        A11: 2.7671017e-11,
        A13: 4.6387406e-14,
        A15: -6.2819774e-15,
        A17: -2.6177942e-17,
        A19: 4.4727344e-18,
      },
    },
    { label: "STO", R: "flat", d: 2.8 }, // patent surface 16; radius derived from the design f-number at each zoom station
    { label: "17", R: 25.706, d: 4.1, sd: 8.1, medium: 9 },
    { label: "18", R: -25.706, d: 0.7, sd: 7.9, medium: 10 },
    { label: "19", R: -186.46145, d: 2.0, sd: 7.9 },
    { label: "20", R: -46.12744, d: 2.11, sd: 7.8, medium: 11 },
    { label: "21", R: -19.965, d: 1.0, sd: 7.9, medium: 12 },
    { label: "22", R: 38.85149, sd: 7.9 },
    {
      label: "23A",
      R: 24.81745,
      d: 5.0,
      sd: 8.3,
      medium: 13,
      asphere: {
        K: 0,
        A4: -3.0748443e-06,
        A6: 5.3530373e-07,
        A8: -6.5293589e-09,
        A10: -2.8251173e-10,
        A12: 4.561189e-12,
        A14: 1.7771658e-15,
        A16: -8.9926075e-16,
        A18: -3.1031128e-17,
        A20: -1.0768819e-18,
        A3: -3.5430903e-05,
        A5: -7.949826e-06,
        A7: 9.9676262e-08,
        A9: -1.1113069e-09,
        A11: 1.2613768e-11,
        A13: 4.4996069e-13,
        A15: -4.9618221e-15,
        A17: -2.2844918e-16,
        A19: 1.6555816e-17,
      },
    },
    {
      label: "24A",
      R: -31.50917,
      d: 4.0,
      sd: 8.2,
      asphere: {
        K: 0,
        A4: 3.4605942e-05,
        A6: -1.5966209e-07,
        A8: 3.996505e-09,
        A10: 1.3092306e-10,
        A12: -1.9602695e-12,
        A14: 1.2366695e-14,
        A16: 2.7200359e-16,
        A18: -1.8700513e-18,
        A20: 1.4631615e-19, // visually verified from rendered patent Table 4
        A3: -3.8587863e-05,
        A5: -2.2352878e-06,
        A7: 2.711544e-08,
        A9: -1.1028928e-09,
        A11: -4.5416954e-12,
        A13: -1.185521e-13,
        A15: 3.9780095e-15,
        A17: -1.6159957e-17,
        A19: -1.5981389e-18,
      },
    },
    { label: "25", R: -24.21079, d: 1.51, sd: 9.4, medium: 14 },
    { label: "26", R: 50.397, d: 2.99, sd: 9.6, medium: 15 },
    { label: "27", R: -96.38585, sd: 9.9 },
    { label: "28", R: -99.96628, d: 2.57, sd: 12.7, medium: 16 },
    { label: "29", R: -48.81415, d: 2.0, sd: 13.0 }, // patent d29 to the PP plate
  ],

  zoom: {
    stations: [
      { focalLengthMm: 18.5, nominalFNumber: 3.61, label: "Wide" },
      { focalLengthMm: 49.19, nominalFNumber: 4.73 },
      { focalLengthMm: 130.78, nominalFNumber: 5.81, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 0.45,
    description:
      "CONSTRAINED_RECONSTRUCTION: G3 (L31) alone translates objectward. At each zoom station DD11 decreases and DD13 increases by the same amount, conserving DD11 + DD13. The close state is code-solved to the FUJIFILM 0.45 m macro minimum focus distance measured from the physical sensor plane; the patent publishes infinity-focus zoom rows only.",
  },

  gaps: {
    "5": {
      label: "DD5",
      values: [
        [0.698, 0.698],
        [18.892, 18.892],
        [35.203, 35.203],
      ],
    },
    "11": {
      label: "DD11 / FOCUS FRONT",
      values: [
        [3.091, 1.941319389390416],
        [4.902, 2.6166264974853135],
        [8.085, 2.4362401501695414],
      ],
    },
    "13A": {
      label: "DD13 / FOCUS REAR",
      values: [
        [20.999, 22.14868061060958],
        [9.091, 11.376373502514685],
        [0.956, 6.60475984983046],
      ],
    },
    "22": {
      label: "DD22",
      values: [
        [4.0, 4.0],
        [2.524, 2.524],
        [1.922, 1.922],
      ],
    },
    "27": {
      label: "DD27",
      values: [
        [2.0, 2.0],
        [22.476, 22.476],
        [44.781, 44.781],
      ],
    },
  },

  aperture: { fStops: [4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  /* ── Optical member PP (patent surfaces 30–31): traced, not drawn ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.85,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 16.08,
      source: "US 9,651,761 B2, Example 1 Table 1 surfaces 30–31",
    },
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "6A", toSurface: "11" },
    { text: "G3 (−) FOCUS", fromSurface: "12A", toSurface: "13A" },
    { text: "G4 (+)", fromSurface: "14A", toSurface: "22" },
    { text: "G5 (+)", fromSurface: "23A", toSurface: "27" },
    { text: "G6 (+)", fromSurface: "28", toSurface: "29" },
  ],
  doublets: [
    { text: "L11+L12", fromSurface: "1", toSurface: "3" },
    { text: "L42+L43", fromSurface: "17", toSurface: "19" },
    { text: "L44+L45", fromSurface: "20", toSurface: "22" },
    { text: "L52+L53", fromSurface: "25", toSurface: "27" },
  ],

  layout: { yScFill: 0.36 },
} satisfies LensDataV2Input;

export default LENS_DATA;
