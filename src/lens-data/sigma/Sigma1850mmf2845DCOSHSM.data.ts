import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP 2010-211056 A, Example 1 (Table 1, Figure 1), filed 2009-03-11. JP 2010-211102 A, filed 2009-03-12 by the same
 * inventor, prints the same Example 1 and names element L3a (surfaces 11-12, element L6 here) as the stabilizing
 * element, shifted +/-0.5 mm across the axis. Probable production correlation with the SIGMA 18-50mm f/2.8-4.5 DC OS
 * HSM, not a confirmed factory prescription.
 *
 * Printed: R, d, nd, vd; the aspheres on surfaces 3, 12 and 30 (patent k is K here; A, B, C, D are A4, A6, A8, A10);
 * d5, d10, d18, d24 and d32 at f = 18.60, 27.99 and 48.32 mm, the three published zoom stations. Surface 12 prints no
 * C or D, as in all six examples of the patent; those terms are unused and are zero here.
 * Derived: the gap from flare-cut plane S33 to the image. The patent labels it Fb and prints no value. It is the
 * computed back focus, 38.529, 38.531 and 38.536 mm at the three stations, which agree within 6.4 micrometres as a
 * plane fixed to the image should. No total length is printed.
 * Inferred: the zoom stations between the printed ones (a numerical path, not a published cam) and every semi-diameter.
 * The patent prints infinity focus only, so the focus pairs repeat. The stabilizing shift is not modeled.
 * Semi-diameters are estimated from Figure 1 of JP 2010-211056 A (wide end, 6.19 px/mm along the axis, 6.24 across) and
 * floor-checked by real-ray trace. L1 to L5 and L10 to L12 follow the figure. rimExtensionSd draws the figure's lands on
 * L3, L4, L5, L10 and L11. S7 and S8 end at 14.2 mm, which the end rays of the lateral-aberration Figure 4 need. The rims
 * of L6 to L9 and L13 to L16 and flare-cut planes S13 and S33 stand above Figure 1 (L6 9.9, L7/L8 9.4, L9 9.2, L13 9.4,
 * L14/L15 9.9, L16 10.4 mm; tick openings 8.4 and 9.1 mm, tick ends 10.8 and 11.5 mm): the drawn sizes cut the corner to
 * about half, so each is the smallest two-decimal rim that keeps the zoom nodes within 3 points of the ray-estimated
 * clear apertures. 29 of 2063 field samples stay above that, worst 3.7 points at 29.8 degrees at 24.47 mm, which raising
 * any one of these rims barely moves. L1's rear flange has no land: S2 is a cemented junction, so the outline runs
 * straight from the S1 rim to the S2 rim.
 * S21 and S22 end at 6.05 mm, which passes the stated axial beam at every station, and come within 0.07 mm at the rim
 * without crossing; S7 and S8 come within 0.10 mm. checks.gapSagFrac 0.95 is the smallest two-decimal value that admits
 * both pairs.
 * The stop radius comes from the design f-number at each station under the stop rule (paraxial EPD = F/N): 6.43, 6.41
 * and 6.40 mm at the printed stations. It is not a measured diaphragm. S29 is a plane glass surface, not a stop.
 * Glass: nd and vd stay as printed; catalog equivalents supply the spectral curves. HOYA curves reproduce the printed
 * four-decimal vd of TAF1, FDS90, FC5 and TAC8 to 0.0001. L6 (moulded) takes M-BACD5N as a proxy, and the two resin
 * layers stay Unmatched with a g-line partial from JP 2019-211703 A. Surface labels follow the patent's numbering.
 */

const LENS_DATA = {
  "schema": 2,
  "key": "sigma-18-50mm-f28-45-dc-os-hsm",
  "maker": "Sigma",
  "name": "SIGMA 18-50mm f/2.8-4.5 DC OS HSM",
  "subtitle": "JP 2010-211056 A, Example 1 — probable production correlation",
  "catalog": {
    "lensMounts": [
      "sigma-sa",
      "canon-ef",
      "nikon-f",
      "pentax-k",
      "sony-a"
    ],
    "imageFormat": "aps-c",
    "imageCircleMm": 28.4,
    "specs": [
      "16 ELEMENTS / 12 GROUPS",
      "DESIGN f = 18.60–48.32 mm",
      "DESIGN F/2.92–4.49",
      "3 ASPHERICAL SURFACES / 3 ELEMENTS",
      "INNER ZOOM / INNER FOCUS"
    ],
    "elementCount": 16,
    "groupCount": 12,
    "focalLengthMm": {
      "marketing": [
        18,
        50
      ],
      "design": [
        18.6,
        48.32
      ]
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.92
    }
  },
  "source": {
    "patentNumber": "JP 2010-211056 A",
    example: {"label": "Example 1", "id": "1"},
    "patentYear": 2010,
    "authors": [
      "Kenta Fujita"
    ],
    "assignees": [
      "Sigma Corporation"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "diagramLabel": "L1",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.6243,
      "indexReference": "d",
      "focalLengthMm": -63.45254623085152,
      "glass": "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      "cemented": "H1",
      "role": "Front negative meniscus of fixed G1; its rear face carries the thin resin layer."
    },
    {
      "id": 2,
      "name": "R1",
      "label": "Element 1 resin layer",
      "diagramLabel": "R1",
      "type": "Hybrid Aspheric Resin Layer (1× Asph)",
      "nd": 1.5184,
      "vd": 52.0743,
      "indexReference": "d",
      "focalLengthMm": -516.7821979029443,
      "glass": "Unmatched (hybrid optical resin; catalog identity unpublished)",
      "dPgF": -0.002411,
      "apdNote": "Later-patent spectral proxy: JP 2019-211703 A Example 2, also a Sigma filing, prints PgF 0.5538 for its 1.51840/52.10 aspherical resin (four-decimal rounding ±0.00005). JP 2010-211056 A prints nd and νd only, and matching coordinates do not establish the same resin or cure. dPgF −0.002411 is derived against 0.6438 − 0.001682νd; its last digits are arithmetic, not source precision. No anomalous-material classification is claimed.",
      "cemented": "H1",
      "role": "Thin layer bonded to Element 1, taken as resin, as the patent states no material; its air-side surface 3A is the front asphere, for wide-angle distortion."
    },
    {
      "id": 3,
      "name": "L2",
      "label": "Element 2",
      "diagramLabel": "L2",
      "type": "Biconvex Positive",
      "nd": 1.8466,
      "vd": 23.7848,
      "indexReference": "d",
      "focalLengthMm": 129.20134464842747,
      "glass": "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Biconvex positive closing fixed G1; the negative-positive order helps distortion without enlarging the front element."
    },
    {
      "id": 4,
      "name": "L3",
      "label": "Element 3",
      "diagramLabel": "L3",
      "type": "Biconcave Negative",
      "nd": 1.7725,
      "vd": 49.6243,
      "indexReference": "d",
      "focalLengthMm": -97.8500313733255,
      "glass": "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Biconcave first element of G2, the negative group that moves for focus."
    },
    {
      "id": 5,
      "name": "L4",
      "label": "Element 4",
      "diagramLabel": "L4",
      "type": "Biconcave Negative",
      "nd": 1.7292,
      "vd": 54.6735,
      "indexReference": "d",
      "focalLengthMm": -36.35071980045285,
      "glass": "TAC8 (HOYA catalog equivalent; production supplier unspecified)",
      "cemented": "C1",
      "role": "Biconcave crown of the G2 cemented doublet, carrying most of that group's negative power."
    },
    {
      "id": 6,
      "name": "L5",
      "label": "Element 5",
      "diagramLabel": "L5",
      "type": "Positive Meniscus",
      "nd": 1.8466,
      "vd": 23.7848,
      "indexReference": "d",
      "focalLengthMm": 69.64411743426885,
      "glass": "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      "cemented": "C1",
      "role": "High-dispersion positive meniscus cemented to Element 4, the colour partner in G2."
    },
    {
      "id": 7,
      "name": "L6",
      "label": "Element 6",
      "diagramLabel": "L6",
      "type": "Positive Meniscus (1× Asph)",
      "nd": 1.5876,
      "vd": 61.0842,
      "indexReference": "d",
      "focalLengthMm": 79.38040340300878,
      "glass": "M-BACD5N (HOYA moulding glass, coordinate proxy; patent nd=1.5876, νd=61.08; production supplier unspecified)",
      "role": "Aspheric first element of G3 (rear surface 12A); JP 2010-211102 A shifts it across the axis as the stabilizing element."
    },
    {
      "id": 8,
      "name": "L7",
      "label": "Element 7",
      "diagramLabel": "L7",
      "type": "Negative Meniscus",
      "nd": 1.8466,
      "vd": 23.7848,
      "indexReference": "d",
      "focalLengthMm": -40.464485034138164,
      "glass": "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      "cemented": "C2",
      "role": "Negative high-dispersion meniscus leading the G3 cemented doublet."
    },
    {
      "id": 9,
      "name": "L8",
      "label": "Element 8",
      "diagramLabel": "L8",
      "type": "Positive Meniscus",
      "nd": 1.7725,
      "vd": 49.6243,
      "indexReference": "d",
      "focalLengthMm": 25.915080937172952,
      "glass": "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      "cemented": "C2",
      "role": "Strong high-index positive cemented to Element 7; the main power of G3."
    },
    {
      "id": 10,
      "name": "L9",
      "label": "Element 9",
      "diagramLabel": "L9",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.6084,
      "indexReference": "d",
      "apd": "inferred",
      "apdNote": "HOYA FCD1 coordinate match (νd 81.6); Sigma's construction diagram marks this position SLD. The patent states no dispersion class.",
      "focalLengthMm": 49.780733564814454,
      "glass": "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Low-dispersion positive closing G3 just ahead of the stop; one of the two SLD positions."
    },
    {
      "id": 11,
      "name": "L10",
      "label": "Element 10",
      "diagramLabel": "L10",
      "type": "Biconcave Negative",
      "nd": 1.7725,
      "vd": 49.6243,
      "indexReference": "d",
      "focalLengthMm": -26.731760065147775,
      "glass": "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Biconcave first element of negative G4, just behind the stop."
    },
    {
      "id": 12,
      "name": "L11",
      "label": "Element 11",
      "diagramLabel": "L11",
      "type": "Biconcave Negative",
      "nd": 1.7725,
      "vd": 49.6243,
      "indexReference": "d",
      "focalLengthMm": -15.771456082622795,
      "glass": "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      "cemented": "C3",
      "role": "Strong biconcave negative of the G4 cemented doublet."
    },
    {
      "id": 13,
      "name": "L12",
      "label": "Element 12",
      "diagramLabel": "L12",
      "type": "Biconvex Positive",
      "nd": 1.8466,
      "vd": 23.7848,
      "indexReference": "d",
      "focalLengthMm": 23.544851474152374,
      "glass": "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      "cemented": "C3",
      "role": "High-dispersion biconvex cemented to Element 11, the colour partner in G4."
    },
    {
      "id": 14,
      "name": "L13",
      "label": "Element 13",
      "diagramLabel": "L13",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.6084,
      "indexReference": "d",
      "apd": "inferred",
      "apdNote": "HOYA FCD1 coordinate match (νd 81.6); Sigma's construction diagram marks this position SLD. The patent states no dispersion class.",
      "focalLengthMm": 29.108386233269897,
      "glass": "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Low-dispersion biconvex first element of G5; the second SLD position."
    },
    {
      "id": 15,
      "name": "L14",
      "label": "Element 14",
      "diagramLabel": "L14",
      "type": "Positive Meniscus",
      "nd": 1.7725,
      "vd": 49.6243,
      "indexReference": "d",
      "focalLengthMm": 69.3301865808726,
      "glass": "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      "cemented": "C4",
      "role": "Positive meniscus leading the G5 cemented doublet."
    },
    {
      "id": 16,
      "name": "L15",
      "label": "Element 15",
      "diagramLabel": "L15",
      "type": "Plano-Concave Negative",
      "nd": 1.8466,
      "vd": 23.7848,
      "indexReference": "d",
      "focalLengthMm": -45.67682494684621,
      "glass": "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      "cemented": "C4",
      "role": "High-dispersion negative cemented to Element 14, with a flat rear face; the colour partner in G5."
    },
    {
      "id": 17,
      "name": "R2",
      "label": "Element 16 resin layer",
      "diagramLabel": "R2",
      "type": "Hybrid Aspheric Resin Layer (1× Asph)",
      "nd": 1.5184,
      "vd": 52.0743,
      "indexReference": "d",
      "focalLengthMm": 302.07356219467147,
      "glass": "Unmatched (hybrid optical resin; catalog identity unpublished)",
      "dPgF": -0.002411,
      "apdNote": "Later-patent spectral proxy: JP 2019-211703 A Example 2, also a Sigma filing, prints PgF 0.5538 for its 1.51840/52.10 aspherical resin (four-decimal rounding ±0.00005). JP 2010-211056 A prints nd and νd only, and matching coordinates do not establish the same resin or cure. dPgF −0.002411 is derived against 0.6438 − 0.001682νd; its last digits are arithmetic, not source precision. No anomalous-material classification is claimed.",
      "cemented": "H2",
      "role": "Thin layer bonded to the front of Element 16, taken as resin, as the patent states no material; its air-side surface 30A is the rear asphere, for coma and astigmatism."
    },
    {
      "id": 18,
      "name": "L16",
      "label": "Element 16",
      "diagramLabel": "L16",
      "type": "Positive Meniscus",
      "nd": 1.4875,
      "vd": 70.4412,
      "indexReference": "d",
      "focalLengthMm": 96.2595695147173,
      "glass": "FC5 (HOYA catalog equivalent; production supplier unspecified)",
      "cemented": "H2",
      "role": "Last positive meniscus of G5, carrying the resin layer on its front face."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 89.7,
      "sd": 25,
      "medium": 1,
      "d": 1.6
    },
    {
      "label": "2",
      "R": 31.45,
      "sd": 21.55111076893464,
      "medium": 2,
      "d": 0.15
    },
    {
      "label": "3A",
      "R": 28.1,
      "sd": 21.55111076893464,
      "asphere": {
        "K": 0.0986,
        "A4": -0.0000049775,
        "A6": -9.5217e-9,
        "A8": 1.3566e-11,
        "A10": -2.459e-14
      },
      "d": 7.81
    },
    {
      "label": "4",
      "R": 218,
      "sd": 20.98057,
      "medium": 3,
      "d": 3.32
    },
    {
      "label": "5",
      "R": -218,
      "sd": 20.98057
    },
    {
      "label": "6",
      "R": -319.6,
      "sd": 15.9,
      "medium": 4,
      "d": 1
    },
    {
      "label": "7",
      "R": 99.14,
      "sd": 14.2,
      "rimExtensionSd": 15.9,
      "d": 2.04
    },
    {
      "label": "8",
      "R": -110.75,
      "sd": 14.2,
      "rimExtensionSd": 15.2,
      "medium": 5,
      "d": 1
    },
    {
      "label": "9",
      "R": 34.98,
      "sd": 15.2,
      "medium": 6,
      "d": 3.1
    },
    {
      "label": "10",
      "R": 82.51,
      "sd": 13.820638917635607,
      "rimExtensionSd": 15.2
    },
    {
      "label": "11",
      "R": -433.69,
      "sd": 11.3,
      "medium": 7,
      "d": 2.38
    },
    {
      "label": "12A",
      "R": -42.2,
      "sd": 11.3,
      "asphere": {
        "K": -1.1922,
        "A4": -0.0000028679,
        "A6": -2.0403e-9,
        "A8": 0,
        "A10": 0
      },
      "d": 0.05
    },
    {
      "label": "13",
      "R": "flat",
      "sd": 10.93,
      "d": 0.45
    },
    {
      "label": "14",
      "R": 46.5,
      "sd": 10.78,
      "medium": 8,
      "d": 0.85
    },
    {
      "label": "15",
      "R": 19.56,
      "sd": 10.78,
      "medium": 9,
      "d": 3.6
    },
    {
      "label": "16",
      "R": 784,
      "sd": 10.78,
      "d": 0.15
    },
    {
      "label": "17",
      "R": 21,
      "sd": 9.94,
      "medium": 10,
      "d": 3.18
    },
    {
      "label": "18",
      "R": 131.9,
      "sd": 9.94
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.3
    },
    {
      "label": "20",
      "R": -61.33,
      "sd": 6.9,
      "medium": 11,
      "d": 0.8
    },
    {
      "label": "21",
      "R": 31.31,
      "sd": 6.05,
      "rimExtensionSd": 6.9,
      "d": 1.42
    },
    {
      "label": "22",
      "R": -24.54,
      "sd": 6.05,
      "rimExtensionSd": 7.4,
      "medium": 12,
      "d": 0.8
    },
    {
      "label": "23",
      "R": 24.54,
      "sd": 7.4,
      "medium": 13,
      "d": 2.53
    },
    {
      "label": "24",
      "R": -101.16,
      "sd": 7.4
    },
    {
      "label": "25",
      "R": 32.7,
      "sd": 10.7,
      "medium": 14,
      "d": 4.69
    },
    {
      "label": "26",
      "R": -24.71,
      "sd": 10.7,
      "d": 0.15
    },
    {
      "label": "27",
      "R": -135.9,
      "sd": 10.75,
      "medium": 15,
      "d": 2.05
    },
    {
      "label": "28",
      "R": -38.67,
      "sd": 10.75,
      "medium": 16,
      "d": 0.85
    },
    {
      "label": "29",
      "R": "flat",
      "sd": 10.75,
      "d": 1.57
    },
    {
      "label": "30A",
      "R": -1000,
      "sd": 11.1,
      "asphere": {
        "K": 0,
        "A4": -0.000032971,
        "A6": -4.1422e-8,
        "A8": -2.3153e-10,
        "A10": 3.6395e-13
      },
      "medium": 17,
      "d": 0.15
    },
    {
      "label": "31",
      "R": -135.4,
      "sd": 11.1,
      "medium": 18,
      "d": 2.86
    },
    {
      "label": "32",
      "R": -35.09,
      "sd": 11.1
    },
    {
      "label": "33",
      "R": "flat",
      "sd": 11.5
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 18.6,
        "nominalFNumber": 2.92,
        "published": true,
        "label": "Wide"
      },
      {
        "focalLengthMm": 18.937955062440608,
        "nominalFNumber": 2.9392,
        "published": false
      },
      {
        "focalLengthMm": 19.279267361178018,
        "nominalFNumber": 2.9584,
        "published": false
      },
      {
        "focalLengthMm": 19.62345447497126,
        "nominalFNumber": 2.9776,
        "published": false
      },
      {
        "focalLengthMm": 19.970531445623923,
        "nominalFNumber": 2.9968,
        "published": false
      },
      {
        "focalLengthMm": 20.320518047887536,
        "nominalFNumber": 3.016,
        "published": false
      },
      {
        "focalLengthMm": 20.67343829260536,
        "nominalFNumber": 3.0351999999999997,
        "published": false
      },
      {
        "focalLengthMm": 21.029319996066842,
        "nominalFNumber": 3.0544,
        "published": false
      },
      {
        "focalLengthMm": 21.38819440553654,
        "nominalFNumber": 3.0736,
        "published": false
      },
      {
        "focalLengthMm": 21.750095872626066,
        "nominalFNumber": 3.0928,
        "published": false
      },
      {
        "focalLengthMm": 22.115061567561092,
        "nominalFNumber": 3.112,
        "published": false
      },
      {
        "focalLengthMm": 22.48313122852813,
        "nominalFNumber": 3.1312,
        "published": false
      },
      {
        "focalLengthMm": 22.85434694121149,
        "nominalFNumber": 3.1504,
        "published": false
      },
      {
        "focalLengthMm": 23.22875294439752,
        "nominalFNumber": 3.1696,
        "published": false
      },
      {
        "focalLengthMm": 23.606395458153802,
        "nominalFNumber": 3.1887999999999996,
        "published": false
      },
      {
        "focalLengthMm": 23.98732253161737,
        "nominalFNumber": 3.208,
        "published": false
      },
      {
        "focalLengthMm": 24.371583907863435,
        "nominalFNumber": 3.2272,
        "published": false
      },
      {
        "focalLengthMm": 24.759230903693105,
        "nominalFNumber": 3.2464,
        "published": false
      },
      {
        "focalLengthMm": 25.150316302485347,
        "nominalFNumber": 3.2656,
        "published": false
      },
      {
        "focalLengthMm": 25.544894258519694,
        "nominalFNumber": 3.2848,
        "published": false
      },
      {
        "focalLengthMm": 25.943020211392586,
        "nominalFNumber": 3.3040000000000003,
        "published": false
      },
      {
        "focalLengthMm": 26.34475080933916,
        "nominalFNumber": 3.3232,
        "published": false
      },
      {
        "focalLengthMm": 26.750143840427167,
        "nominalFNumber": 3.3424,
        "published": false
      },
      {
        "focalLengthMm": 27.159258170727924,
        "nominalFNumber": 3.3616,
        "published": false
      },
      {
        "focalLengthMm": 27.572153688681652,
        "nominalFNumber": 3.3808,
        "published": false
      },
      {
        "focalLengthMm": 27.99,
        "nominalFNumber": 3.4,
        "published": true
      },
      {
        "focalLengthMm": 28.667711317447964,
        "nominalFNumber": 3.4436,
        "published": false
      },
      {
        "focalLengthMm": 29.355875783724738,
        "nominalFNumber": 3.4872,
        "published": false
      },
      {
        "focalLengthMm": 30.053600023382323,
        "nominalFNumber": 3.5308,
        "published": false
      },
      {
        "focalLengthMm": 30.76110566689771,
        "nominalFNumber": 3.5744,
        "published": false
      },
      {
        "focalLengthMm": 31.478620248190886,
        "nominalFNumber": 3.618,
        "published": false
      },
      {
        "focalLengthMm": 32.206376902096515,
        "nominalFNumber": 3.6616,
        "published": false
      },
      {
        "focalLengthMm": 32.94461410836843,
        "nominalFNumber": 3.7052,
        "published": false
      },
      {
        "focalLengthMm": 33.693575475285314,
        "nominalFNumber": 3.7488,
        "published": false
      },
      {
        "focalLengthMm": 34.45350955710381,
        "nominalFNumber": 3.7924,
        "published": false
      },
      {
        "focalLengthMm": 35.224669700572626,
        "nominalFNumber": 3.8359999999999994,
        "published": false
      },
      {
        "focalLengthMm": 36.00731391649677,
        "nominalFNumber": 3.8796,
        "published": false
      },
      {
        "focalLengthMm": 36.80170477299535,
        "nominalFNumber": 3.9232000000000005,
        "published": false
      },
      {
        "focalLengthMm": 37.60810930761553,
        "nominalFNumber": 3.9668,
        "published": false
      },
      {
        "focalLengthMm": 38.42679895591509,
        "nominalFNumber": 4.0104,
        "published": false
      },
      {
        "focalLengthMm": 39.25804949447882,
        "nominalFNumber": 4.054,
        "published": false
      },
      {
        "focalLengthMm": 40.102140996650014,
        "nominalFNumber": 4.0976,
        "published": false
      },
      {
        "focalLengthMm": 40.959357799501745,
        "nominalFNumber": 4.1411999999999995,
        "published": false
      },
      {
        "focalLengthMm": 41.82998848079218,
        "nominalFNumber": 4.1848,
        "published": false
      },
      {
        "focalLengthMm": 42.71432584483042,
        "nominalFNumber": 4.228400000000001,
        "published": false
      },
      {
        "focalLengthMm": 43.612666916322354,
        "nominalFNumber": 4.272,
        "published": false
      },
      {
        "focalLengthMm": 44.525312941406135,
        "nominalFNumber": 4.315600000000001,
        "published": false
      },
      {
        "focalLengthMm": 45.45256939518929,
        "nominalFNumber": 4.3591999999999995,
        "published": false
      },
      {
        "focalLengthMm": 46.39474599519647,
        "nominalFNumber": 4.4028,
        "published": false
      },
      {
        "focalLengthMm": 47.35215672021696,
        "nominalFNumber": 4.446400000000001,
        "published": false
      },
      {
        "focalLengthMm": 48.32,
        "nominalFNumber": 4.49,
        "published": true,
        "label": "Tele"
      }
    ],
    "step": 0.005
  },
  "focus": {
    "closeFocusM": 0.3,
    "description": "G2 moves toward the object for near focus, but the patent prints infinity focus only, so the model stays at infinity and the focus control does not change the optics. The 0.3 m close-focus figure is Sigma's specification. Spacings are printed at 18.60, 27.99 and 48.32 mm; those between are inferred, not a published cam. The optical stabilizer shift is not modeled.",
    "step": 1
  },
  "gaps": {
    "5": {
      "label": "d5",
      "values": [
        [
          7.59,
          7.59
        ],
        [
          8.125775132570329,
          8.125775132570329
        ],
        [
          8.626243216959306,
          8.626243216959306
        ],
        [
          9.093537652302503,
          9.093537652302503
        ],
        [
          9.52962421895672,
          9.52962421895672
        ],
        [
          9.936317327287911,
          9.936317327287911
        ],
        [
          10.315294405725545,
          10.315294405725545
        ],
        [
          10.668108672745376,
          10.668108672745376
        ],
        [
          10.996200501225964,
          10.996200501225964
        ],
        [
          11.30090755335627,
          11.30090755335627
        ],
        [
          11.583473838872662,
          11.583473838872662
        ],
        [
          11.845057828026693,
          11.845057828026693
        ],
        [
          12.086739732620067,
          12.086739732620067
        ],
        [
          12.309528053139802,
          12.309528053139802
        ],
        [
          12.514365477010141,
          12.514365477010141
        ],
        [
          12.70213420188376,
          12.70213420188376
        ],
        [
          12.87366074840391,
          12.87366074840391
        ],
        [
          13.029720318734075,
          13.029720318734075
        ],
        [
          13.171040750152745,
          13.171040750152745
        ],
        [
          13.29830610698457,
          13.29830610698457
        ],
        [
          13.412159948920797,
          13.412159948920797
        ],
        [
          13.513208309274667,
          13.513208309274667
        ],
        [
          13.602022412790399,
          13.602022412790399
        ],
        [
          13.679141159220686,
          13.679141159220686
        ],
        [
          13.74507339590697,
          13.74507339590697
        ],
        [
          13.8003,
          13.8003
        ],
        [
          13.79430987815749,
          13.79430987815749
        ],
        [
          13.759289797925572,
          13.759289797925572
        ],
        [
          13.697135333854614,
          13.697135333854614
        ],
        [
          13.60958493820491,
          13.60958493820491
        ],
        [
          13.498236060889667,
          13.498236060889667
        ],
        [
          13.36455931350865,
          13.36455931350865
        ],
        [
          13.209910948883804,
          13.209910948883804
        ],
        [
          13.035543885288904,
          13.035543885288904
        ],
        [
          12.842617469599627,
          12.842617469599627
        ],
        [
          12.632206144524657,
          12.632206144524657
        ],
        [
          12.405307160810302,
          12.405307160810302
        ],
        [
          12.162847455000238,
          12.162847455000238
        ],
        [
          11.905689796241981,
          11.905689796241981
        ],
        [
          11.634638291238256,
          11.634638291238256
        ],
        [
          11.350443324245987,
          11.350443324245987
        ],
        [
          11.053805998693713,
          11.053805998693713
        ],
        [
          10.745382138177385,
          10.745382138177385
        ],
        [
          10.425785897085493,
          10.425785897085493
        ],
        [
          10.095593024672965,
          10.095593024672965
        ],
        [
          9.755343820877709,
          9.755343820877709
        ],
        [
          9.405545817429449,
          9.405545817429449
        ],
        [
          9.046676213698305,
          9.046676213698305
        ],
        [
          8.679184093188582,
          8.679184093188582
        ],
        [
          8.303492443511235,
          8.303492443511235
        ],
        [
          7.92,
          7.92
        ]
      ]
    },
    "10": {
      "label": "d10",
      "values": [
        [
          24.8,
          24.8
        ],
        [
          24.00402886742967,
          24.00402886742967
        ],
        [
          23.243364783040697,
          23.243364783040697
        ],
        [
          22.515874347697498,
          22.515874347697498
        ],
        [
          21.819591781043282,
          21.819591781043282
        ],
        [
          21.152702672712092,
          21.152702672712092
        ],
        [
          20.51352959427446,
          20.51352959427446
        ],
        [
          19.900519327254624,
          19.900519327254624
        ],
        [
          19.312231498774032,
          19.312231498774032
        ],
        [
          18.747328446643728,
          18.747328446643728
        ],
        [
          18.20456616112734,
          18.20456616112734
        ],
        [
          17.68278617197331,
          17.68278617197331
        ],
        [
          17.18090826737993,
          17.18090826737993
        ],
        [
          16.6979239468602,
          16.6979239468602
        ],
        [
          16.23289052298986,
          16.23289052298986
        ],
        [
          15.78492579811624,
          15.78492579811624
        ],
        [
          15.353203251596089,
          15.353203251596089
        ],
        [
          14.936947681265924,
          14.936947681265924
        ],
        [
          14.535431249847255,
          14.535431249847255
        ],
        [
          14.147969893015429,
          14.147969893015429
        ],
        [
          13.773920051079202,
          13.773920051079202
        ],
        [
          13.412675690725333,
          13.412675690725333
        ],
        [
          13.063665587209602,
          13.063665587209602
        ],
        [
          12.726350840779313,
          12.726350840779313
        ],
        [
          12.400222604093027,
          12.400222604093027
        ],
        [
          12.0848,
          12.0848
        ],
        [
          11.547446121842508,
          11.547446121842508
        ],
        [
          11.039122202074427,
          11.039122202074427
        ],
        [
          10.557932666145383,
          10.557932666145383
        ],
        [
          10.102139061795091,
          10.102139061795091
        ],
        [
          9.670143939110334,
          9.670143939110334
        ],
        [
          9.26047668649135,
          9.26047668649135
        ],
        [
          8.871781051116194,
          8.871781051116194
        ],
        [
          8.502804114711093,
          8.502804114711093
        ],
        [
          8.152386530400372,
          8.152386530400372
        ],
        [
          7.819453855475343,
          7.819453855475343
        ],
        [
          7.503008839189697,
          7.503008839189697
        ],
        [
          7.202124544999762,
          7.202124544999762
        ],
        [
          6.915938203758017,
          6.915938203758017
        ],
        [
          6.643645708761742,
          6.643645708761742
        ],
        [
          6.3844966757540105,
          6.3844966757540105
        ],
        [
          6.137790001306287,
          6.137790001306287
        ],
        [
          5.902869861822614,
          5.902869861822614
        ],
        [
          5.679122102914508,
          5.679122102914508
        ],
        [
          5.465970975327035,
          5.465970975327035
        ],
        [
          5.262876179122291,
          5.262876179122291
        ],
        [
          5.069330182570552,
          5.069330182570552
        ],
        [
          4.884855786301697,
          4.884855786301697
        ],
        [
          4.70900390681142,
          4.70900390681142
        ],
        [
          4.541351556488765,
          4.541351556488765
        ],
        [
          4.3815,
          4.3815
        ]
      ]
    },
    "18": {
      "label": "d18",
      "values": [
        [
          1.7,
          1.7
        ],
        [
          1.8284159999999998,
          1.8284159999999998
        ],
        [
          1.9568320000000001,
          1.9568320000000001
        ],
        [
          2.085248,
          2.085248
        ],
        [
          2.213664,
          2.213664
        ],
        [
          2.34208,
          2.34208
        ],
        [
          2.470496,
          2.470496
        ],
        [
          2.5989120000000003,
          2.5989120000000003
        ],
        [
          2.727328,
          2.727328
        ],
        [
          2.855744,
          2.855744
        ],
        [
          2.98416,
          2.98416
        ],
        [
          3.1125760000000002,
          3.1125760000000002
        ],
        [
          3.240992,
          3.240992
        ],
        [
          3.369408,
          3.369408
        ],
        [
          3.497824,
          3.497824
        ],
        [
          3.62624,
          3.62624
        ],
        [
          3.754656,
          3.754656
        ],
        [
          3.8830720000000003,
          3.8830720000000003
        ],
        [
          4.011488,
          4.011488
        ],
        [
          4.1399040000000005,
          4.1399040000000005
        ],
        [
          4.26832,
          4.26832
        ],
        [
          4.396736,
          4.396736
        ],
        [
          4.525152,
          4.525152
        ],
        [
          4.653568000000001,
          4.653568000000001
        ],
        [
          4.781984,
          4.781984
        ],
        [
          4.9104,
          4.9104
        ],
        [
          5.066784,
          5.066784
        ],
        [
          5.223168,
          5.223168
        ],
        [
          5.379552,
          5.379552
        ],
        [
          5.5359359999999995,
          5.5359359999999995
        ],
        [
          5.69232,
          5.69232
        ],
        [
          5.848704,
          5.848704
        ],
        [
          6.005088000000001,
          6.005088000000001
        ],
        [
          6.161472,
          6.161472
        ],
        [
          6.317856000000001,
          6.317856000000001
        ],
        [
          6.47424,
          6.47424
        ],
        [
          6.630624,
          6.630624
        ],
        [
          6.787008,
          6.787008
        ],
        [
          6.943392,
          6.943392
        ],
        [
          7.099776,
          7.099776
        ],
        [
          7.25616,
          7.25616
        ],
        [
          7.412544,
          7.412544
        ],
        [
          7.568928,
          7.568928
        ],
        [
          7.725312,
          7.725312
        ],
        [
          7.881696000000001,
          7.881696000000001
        ],
        [
          8.03808,
          8.03808
        ],
        [
          8.194464,
          8.194464
        ],
        [
          8.350848000000001,
          8.350848000000001
        ],
        [
          8.507232,
          8.507232
        ],
        [
          8.663616000000001,
          8.663616000000001
        ],
        [
          8.82,
          8.82
        ]
      ]
    },
    "24": {
      "label": "d24",
      "values": [
        [
          7.62,
          7.62
        ],
        [
          7.491584,
          7.491584
        ],
        [
          7.363168000000001,
          7.363168000000001
        ],
        [
          7.234752,
          7.234752
        ],
        [
          7.106336000000001,
          7.106336000000001
        ],
        [
          6.97792,
          6.97792
        ],
        [
          6.849504,
          6.849504
        ],
        [
          6.721088,
          6.721088
        ],
        [
          6.592671999999999,
          6.592671999999999
        ],
        [
          6.464256000000001,
          6.464256000000001
        ],
        [
          6.33584,
          6.33584
        ],
        [
          6.207424000000001,
          6.207424000000001
        ],
        [
          6.079008,
          6.079008
        ],
        [
          5.950592,
          5.950592
        ],
        [
          5.822176000000001,
          5.822176000000001
        ],
        [
          5.69376,
          5.69376
        ],
        [
          5.565344,
          5.565344
        ],
        [
          5.436928,
          5.436928
        ],
        [
          5.308512,
          5.308512
        ],
        [
          5.180096,
          5.180096
        ],
        [
          5.051679999999999,
          5.051679999999999
        ],
        [
          4.923264,
          4.923264
        ],
        [
          4.794848,
          4.794848
        ],
        [
          4.6664319999999995,
          4.6664319999999995
        ],
        [
          4.538016,
          4.538016
        ],
        [
          4.4096,
          4.4096
        ],
        [
          4.253216,
          4.253216
        ],
        [
          4.096832,
          4.096832
        ],
        [
          3.940448,
          3.940448
        ],
        [
          3.7840640000000008,
          3.7840640000000008
        ],
        [
          3.6276800000000002,
          3.6276800000000002
        ],
        [
          3.471296,
          3.471296
        ],
        [
          3.314912,
          3.314912
        ],
        [
          3.158528,
          3.158528
        ],
        [
          3.002144,
          3.002144
        ],
        [
          2.8457600000000003,
          2.8457600000000003
        ],
        [
          2.689376,
          2.689376
        ],
        [
          2.532992,
          2.532992
        ],
        [
          2.376608,
          2.376608
        ],
        [
          2.220224,
          2.220224
        ],
        [
          2.06384,
          2.06384
        ],
        [
          1.9074560000000003,
          1.9074560000000003
        ],
        [
          1.7510720000000002,
          1.7510720000000002
        ],
        [
          1.594688,
          1.594688
        ],
        [
          1.438304,
          1.438304
        ],
        [
          1.28192,
          1.28192
        ],
        [
          1.1255359999999999,
          1.1255359999999999
        ],
        [
          0.9691520000000005,
          0.9691520000000005
        ],
        [
          0.8127680000000003,
          0.8127680000000003
        ],
        [
          0.6563840000000001,
          0.6563840000000001
        ],
        [
          0.5,
          0.5
        ]
      ]
    },
    "32": {
      "label": "d32",
      "values": [
        [
          0,
          0
        ],
        [
          0.26019200000000003,
          0.26019200000000003
        ],
        [
          0.5203840000000001,
          0.5203840000000001
        ],
        [
          0.780576,
          0.780576
        ],
        [
          1.0407680000000001,
          1.0407680000000001
        ],
        [
          1.3009600000000001,
          1.3009600000000001
        ],
        [
          1.561152,
          1.561152
        ],
        [
          1.8213440000000003,
          1.8213440000000003
        ],
        [
          2.0815360000000003,
          2.0815360000000003
        ],
        [
          2.3417280000000003,
          2.3417280000000003
        ],
        [
          2.6019200000000002,
          2.6019200000000002
        ],
        [
          2.862112,
          2.862112
        ],
        [
          3.122304,
          3.122304
        ],
        [
          3.382496,
          3.382496
        ],
        [
          3.6426880000000006,
          3.6426880000000006
        ],
        [
          3.90288,
          3.90288
        ],
        [
          4.1630720000000005,
          4.1630720000000005
        ],
        [
          4.4232640000000005,
          4.4232640000000005
        ],
        [
          4.6834560000000005,
          4.6834560000000005
        ],
        [
          4.9436480000000005,
          4.9436480000000005
        ],
        [
          5.2038400000000005,
          5.2038400000000005
        ],
        [
          5.4640320000000004,
          5.4640320000000004
        ],
        [
          5.724224,
          5.724224
        ],
        [
          5.984416,
          5.984416
        ],
        [
          6.244608,
          6.244608
        ],
        [
          6.5048,
          6.5048
        ],
        [
          7.048144000000001,
          7.048144000000001
        ],
        [
          7.591488000000001,
          7.591488000000001
        ],
        [
          8.134832000000001,
          8.134832000000001
        ],
        [
          8.678175999999999,
          8.678175999999999
        ],
        [
          9.22152,
          9.22152
        ],
        [
          9.764864,
          9.764864
        ],
        [
          10.308208,
          10.308208
        ],
        [
          10.851552000000002,
          10.851552000000002
        ],
        [
          11.394896000000003,
          11.394896000000003
        ],
        [
          11.93824,
          11.93824
        ],
        [
          12.481583999999998,
          12.481583999999998
        ],
        [
          13.024928,
          13.024928
        ],
        [
          13.568272,
          13.568272
        ],
        [
          14.111616000000001,
          14.111616000000001
        ],
        [
          14.65496,
          14.65496
        ],
        [
          15.198304,
          15.198304
        ],
        [
          15.741647999999998,
          15.741647999999998
        ],
        [
          16.284992,
          16.284992
        ],
        [
          16.828336,
          16.828336
        ],
        [
          17.37168,
          17.37168
        ],
        [
          17.915024000000003,
          17.915024000000003
        ],
        [
          18.458367999999997,
          18.458367999999997
        ],
        [
          19.001711999999998,
          19.001711999999998
        ],
        [
          19.545056,
          19.545056
        ],
        [
          20.0884,
          20.0884
        ]
      ]
    },
    "33": {
      "label": "BF",
      "values": [
        [
          38.52922540243389,
          38.52922540243389
        ],
        [
          38.52928258792333,
          38.52928258792333
        ],
        [
          38.52933977341278,
          38.52933977341278
        ],
        [
          38.529396958902225,
          38.529396958902225
        ],
        [
          38.529454144391664,
          38.529454144391664
        ],
        [
          38.52951132988112,
          38.52951132988112
        ],
        [
          38.52956851537056,
          38.52956851537056
        ],
        [
          38.52962570086001,
          38.52962570086001
        ],
        [
          38.52968288634945,
          38.52968288634945
        ],
        [
          38.5297400718389,
          38.5297400718389
        ],
        [
          38.52979725732834,
          38.52979725732834
        ],
        [
          38.52985444281779,
          38.52985444281779
        ],
        [
          38.52991162830723,
          38.52991162830723
        ],
        [
          38.529968813796685,
          38.529968813796685
        ],
        [
          38.530025999286124,
          38.530025999286124
        ],
        [
          38.53008318477558,
          38.53008318477558
        ],
        [
          38.530140370265016,
          38.530140370265016
        ],
        [
          38.53019755575446,
          38.53019755575446
        ],
        [
          38.53025474124391,
          38.53025474124391
        ],
        [
          38.530311926733354,
          38.530311926733354
        ],
        [
          38.5303691122228,
          38.5303691122228
        ],
        [
          38.530426297712246,
          38.530426297712246
        ],
        [
          38.5304834832017,
          38.5304834832017
        ],
        [
          38.530540668691145,
          38.530540668691145
        ],
        [
          38.530597854180584,
          38.530597854180584
        ],
        [
          38.53065503967003,
          38.53065503967003
        ],
        [
          38.53085242368089,
          38.53085242368089
        ],
        [
          38.531049807691744,
          38.531049807691744
        ],
        [
          38.531247191702604,
          38.531247191702604
        ],
        [
          38.531444575713465,
          38.531444575713465
        ],
        [
          38.53164195972432,
          38.53164195972432
        ],
        [
          38.53183934373518,
          38.53183934373518
        ],
        [
          38.53203672774604,
          38.53203672774604
        ],
        [
          38.53223411175689,
          38.53223411175689
        ],
        [
          38.53243149576775,
          38.53243149576775
        ],
        [
          38.53262887977861,
          38.53262887977861
        ],
        [
          38.532826263789474,
          38.532826263789474
        ],
        [
          38.53302364780033,
          38.53302364780033
        ],
        [
          38.53322103181119,
          38.53322103181119
        ],
        [
          38.53341841582204,
          38.53341841582204
        ],
        [
          38.5336157998329,
          38.5336157998329
        ],
        [
          38.53381318384376,
          38.53381318384376
        ],
        [
          38.53401056785462,
          38.53401056785462
        ],
        [
          38.534207951865476,
          38.534207951865476
        ],
        [
          38.534405335876336,
          38.534405335876336
        ],
        [
          38.53460271988719,
          38.53460271988719
        ],
        [
          38.53480010389805,
          38.53480010389805
        ],
        [
          38.53499748790891,
          38.53499748790891
        ],
        [
          38.53519487191977,
          38.53519487191977
        ],
        [
          38.535392255930624,
          38.535392255930624
        ],
        [
          38.535589639941485,
          38.535589639941485
        ]
      ]
    }
  },
  "aperture": {
    "fStops": [
      2.92,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
  },
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "5"
    },
    {
      "text": "G2",
      "fromSurface": "6",
      "toSurface": "10"
    },
    {
      "text": "G3",
      "fromSurface": "11",
      "toSurface": "18"
    },
    {
      "text": "G4",
      "fromSurface": "STO",
      "toSurface": "24"
    },
    {
      "text": "G5",
      "fromSurface": "25",
      "toSurface": "32"
    }
  ],
  "doublets": [
    {
      "text": "H1",
      "fromSurface": "1",
      "toSurface": "3A"
    },
    {
      "text": "C1",
      "fromSurface": "8",
      "toSurface": "10"
    },
    {
      "text": "C2",
      "fromSurface": "14",
      "toSurface": "16"
    },
    {
      "text": "C3",
      "fromSurface": "22",
      "toSurface": "24"
    },
    {
      "text": "C4",
      "fromSurface": "27",
      "toSurface": "29"
    },
    {
      "text": "H2",
      "fromSurface": "30A",
      "toSurface": "32"
    }
  ],
  "checks": {
    "gapSagFrac": 0.95
  },
  "layout": {
    "yScFill": 0.66
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
