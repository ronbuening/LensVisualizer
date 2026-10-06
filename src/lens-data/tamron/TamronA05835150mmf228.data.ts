import type { LensDataInput } from "../../types/optics.js";
/**
 * JP2023004721A, Numerical Example 1, Figure 1. No prescription scaling or source repair.
 * 21 glass elements / 15 components / five functional groups; five aspheres through A12.
 * Source surface 34 retains nd=1.59270, vd=35.31. Camera-side CG remains physical:
 * rearPlates thickness 2.5 mm, final air 1.0 mm. Supplier/melt identities are unconfirmed.
 * NOTE ON SEMI-DIAMETERS: the patent publishes none. Element rims are estimated from
 * JP2023004721A FIG. 1 (wide end, infinity; PDF page 32, 0.06505 mm/px at 421 dpi) and held
 * to traced clearance; the drawn outer rims agree with FIG. 1 within about 3%. Two concave
 * faces that FIG. 1 ends at a flat mounting annulus stop at the optical extent instead of
 * the outer blank: s7=19.2 mm and s36A=15.2 mm (figure 19.0 and 14.7-15.0 mm). They lie
 * outside every transmitted ray sampled to the corner field (maxima 18.30 and 14.90 mm) and
 * keep the engine-derived half-fields (31.11/17.86/9.58 deg) at or above the source
 * half-fields (30.97/15.37/8.06 deg); s7 now sets the wide value and s36A the middle one.
 * The L19/L20 doublet follows the figure's L19 blank (s33=15.2 mm) with the cemented and
 * rear faces at 14.7 mm, just inside the 14.9 mm radius where L20 closes to a knife edge.
 * The renderer joins unequal front and rear rims with one straight edge, so L4, L7, L9, L12,
 * L14, L15, L19 and L21 show a chamfer where FIG. 1 draws a flat annulus and a cylinder edge.
 * Diagram APD tags: L10 patent-listed (paragraph 0054); L2/L3/L7/L11 inferred LD class.
 * Inferred clear semi-diameters include s15=14.86 mm and s26A=14.41 mm;
 * gapSagFrac=0.932 preserves positive modeled air. Nominal minimum radial headroom is
 * 3.451 micrometres; this is not a manufacturing tolerance or rounding-robustness claim.
 * Re-inferred-iris source-rounding stress can overrun s15 by 2.638 micrometres.
 * The zoom iris schedule is calibrated to printed F-numbers, not measured diameters.
 * PUBLISHED focus: all three infinity and three near test states (~0.8 m object-to-image).
 * These test states are not the production 0.33/0.85 m minimum focus endpoints.
 * Negative G4 alone focuses, with preserved 0.0001 mm tele rounding drift in its gap pair.
 * Existing continuous zoom/focus interpolation is a visualization approximation,
 * not a source-published cam law or a certification of intermediate focus accuracy.
 * Tight physical-iris aiming supports sampled axial edges and corner chiefs.
 * Full off-axis pupil bundles remain vignetted or untraceable in some stress samples.
 * Current finite UI pupil-offset fans can overfill the iris; their clips remain documented.
 * The current infinitesimal-pupil F-number readout differs from exact marginal calibration.
 * No shared viewer correction, full-field throughput claim, or manufacturing safety claim.
 */
const LENS_DATA = {
  "key": "tamron-35-150mm-f2-28-di-iii-vxd-a058",
  "maker": "Tamron",
  "name": "TAMRON 35-150mm f/2-2.8 Di III VXD (A058)",
  "subtitle": "JP 2023-004721 A, Numerical Example 1; construction-correlated production lens",
  "specs": [
    "21 ELEMENTS / 15 GROUPS",
    "DESIGN f = 36.03–145.53 mm",
    "DESIGN F/2.06–2.91",
    "5 ASPHERICAL SURFACES / 3 ELEMENTS"
  ],
  "focalLengthMarketing": [
    35,
    150
  ],
  "focalLengthDesign": [
    36.0267,
    145.5296
  ],
  "apertureMarketing": 2,
  "apertureDesign": 2.0604,
  "lensMounts": [
    "sony-fe",
    "nikon-z"
  ],
  "imageFormat": "135-full-frame",
  "patentNumber": "JP 2023-004721 A",
  "patentAuthors": [
    "Hisayuki Yamanaka"
  ],
  "patentAssignees": [
    "Tamron Co., Ltd."
  ],
  "patentYear": 2023,
  "elementCount": 21,
  "groupCount": 15,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.91082,
      "vd": 35.25,
      "fl": -230.38983074,
      "glass": "TAFD35L (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Front negative meniscus of G1, convex to the object; cemented to L2 (D1).",
      "cemented": "D1"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "fl": 145.47039055,
      "glass": "FCD1 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "LD-class inference from the coordinate-compatible FCD1 curve (catalogue ΔPgF ≈ +0.031); the patent prints only nd and νd for this element and names no special glass. One of four such elements (L2, L3, L7, L11), matching Tamron's count of four LD elements.",
      "role": "Biconvex low-dispersion positive member of D1; the cemented pair is net positive.",
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "fl": 225.29470062,
      "glass": "FCD1 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "LD-class inference from the coordinate-compatible FCD1 curve (catalogue ΔPgF ≈ +0.031); the patent prints only nd and νd for this element and names no special glass. One of four such elements (L2, L3, L7, L11), matching Tamron's count of four LD elements.",
      "role": "Positive meniscus, convex to the object, completing positive G1."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.8707,
      "vd": 40.73,
      "fl": -51.08492885,
      "glass": "TAFD32 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Front negative meniscus of the negative zoom group G2, convex to the object."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.80518,
      "vd": 25.46,
      "fl": 85.49319857,
      "glass": "FD60-W (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Air-spaced biconvex positive element within negative G2."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.8707,
      "vd": 40.73,
      "fl": -85.78709186,
      "glass": "TAFD32 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Biconcave negative element of G2 ahead of the L7/L8 doublet."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconcave Negative",
      "nd": 1.59282,
      "vd": 68.62,
      "fl": -34.74317692,
      "glass": "FCD515 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "LD-class inference from the coordinate-compatible FCD515 curve (catalogue ΔPgF ≈ +0.016); the patent prints only nd and νd for this element and names no special glass. One of four such elements (L2, L3, L7, L11), matching Tamron's count of four LD elements.",
      "role": "Low-dispersion biconcave member of cemented doublet D2 in G2.",
      "cemented": "D2"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.91082,
      "vd": 35.25,
      "fl": 37.43176914,
      "glass": "TAFD35L (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Biconvex positive member of D2; the cemented pair is weakly negative.",
      "cemented": "D2"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.72916,
      "vd": 54.67,
      "fl": -117.50700909,
      "glass": "TAC8 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Rear negative meniscus of G2, concave to the object, ahead of the variable gap to the stop."
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Positive Meniscus",
      "nd": 1.92286,
      "vd": 20.88,
      "fl": 59.89711651,
      "glass": "E-FDS1-W (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "apd": "patent",
      "dPgF": 0.03033631999999986,
      "apdNote": "Patent paragraph 0054 identifies anomalous partial dispersion; native departure 0.0313 converted to engine baseline.",
      "role": "Positive lens P at the front of G3 (M): high-dispersion positive meniscus bound by patent conditions (5) and (6)."
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Positive Meniscus",
      "nd": 1.59282,
      "vd": 68.62,
      "fl": 91.26216451,
      "glass": "FCD515 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "LD-class inference from the coordinate-compatible FCD515 curve (catalogue ΔPgF ≈ +0.016); the patent prints only nd and νd for this element and names no special glass. One of four such elements (L2, L3, L7, L11), matching Tamron's count of four LD elements.",
      "role": "Second positive meniscus of G3 (M), convex to the object."
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.78,
      "fl": -29.25627529,
      "glass": "FDS90-SG (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Front negative meniscus of cemented triplet T1; its junction with L13 is the first divergent cemented surface.",
      "cemented": "T1"
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "type": "Biconvex Positive",
      "nd": 1.618,
      "vd": 63.39,
      "fl": 21.08370196,
      "glass": "PCD4 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Thick biconvex centre of T1, between the two divergent cemented surfaces.",
      "cemented": "T1"
    },
    {
      "id": 14,
      "name": "L14",
      "label": "Element 14",
      "type": "Biconcave Negative",
      "nd": 1.90366,
      "vd": 31.31,
      "fl": -26.79245738,
      "glass": "TAFD25L (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Biconcave rear member of T1; its junction with L13 is the second divergent cemented surface.",
      "cemented": "T1"
    },
    {
      "id": 15,
      "name": "L15",
      "label": "Element 15",
      "type": "Negative Meniscus (1× Asph)",
      "nd": 1.80625,
      "vd": 40.91,
      "fl": -140.49570288,
      "glass": "L-LAH53 (OHARA coordinate equivalent; supplier unconfirmed)",
      "role": "Glass-molded negative meniscus, concave to the object, with an aspheric object-side face; follows the negative air lens behind T1."
    },
    {
      "id": 16,
      "name": "L16",
      "label": "Element 16",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.77377,
      "vd": 47.17,
      "fl": 26.65996173,
      "glass": "M-TAF401 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Glass-molded biconvex positive element with both faces aspheric; closes G3 (M)."
    },
    {
      "id": 17,
      "name": "L17",
      "label": "Element 17",
      "type": "Biconvex Positive",
      "nd": 1.92286,
      "vd": 20.88,
      "fl": 53.93651064,
      "glass": "E-FDS1-W (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Biconvex positive member of the cemented focus doublet G4 (F).",
      "cemented": "D3"
    },
    {
      "id": 18,
      "name": "L18",
      "label": "Element 18",
      "type": "Biconcave Negative",
      "nd": 1.801,
      "vd": 34.97,
      "fl": -26.75221007,
      "glass": "S-LAM66 (OHARA coordinate equivalent; supplier unconfirmed)",
      "role": "Biconcave negative member of G4 (F); the net-negative doublet moves toward the image for close focus.",
      "cemented": "D3"
    },
    {
      "id": 19,
      "name": "L19",
      "label": "Element 19",
      "type": "Negative Meniscus",
      "nd": 1.91082,
      "vd": 35.25,
      "fl": -32.0294572,
      "glass": "TAFD35L (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Front negative meniscus of G5 (R), convex to the object; cemented to L20 (D4).",
      "cemented": "D4"
    },
    {
      "id": 20,
      "name": "L20",
      "label": "Element 20",
      "type": "Biconvex Positive",
      "nd": 1.5927,
      "vd": 35.31,
      "fl": 24.28419944,
      "glass": "S-FTM16 (OHARA coordinate equivalent; supplier unconfirmed)",
      "role": "Biconvex positive member of D4; the cemented pair is net positive.",
      "cemented": "D4"
    },
    {
      "id": 21,
      "name": "L21",
      "label": "Element 21",
      "type": "Negative Meniscus (2× Asph)",
      "nd": 1.6935,
      "vd": 53.18,
      "fl": -48.29528143,
      "glass": "L-LAL13 (OHARA coordinate equivalent; supplier unconfirmed)",
      "role": "Glass-molded rear negative meniscus, concave to the object, with both faces aspheric; makes G5 (R) net negative."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 192.4282,
      "d": 1.5,
      "nd": 1.91082,
      "elemId": 1,
      "sd": 37
    },
    {
      "label": "2",
      "R": 100.0065,
      "d": 10.0532,
      "nd": 1.497,
      "elemId": 2,
      "sd": 37
    },
    {
      "label": "3",
      "R": -252.2417,
      "d": 0.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 37
    },
    {
      "label": "4",
      "R": 71.5654,
      "d": 6.565,
      "nd": 1.497,
      "elemId": 3,
      "sd": 33.5
    },
    {
      "label": "5",
      "R": 192.2789,
      "d": 1.0,
      "nd": 1.0,
      "elemId": 0,
      "sd": 33.5
    },
    {
      "label": "6",
      "R": 83.7631,
      "d": 1.5,
      "nd": 1.8707,
      "elemId": 4,
      "sd": 23.5
    },
    {
      "label": "7",
      "R": 28.8102,
      "d": 8.6177,
      "nd": 1.0,
      "elemId": 0,
      "sd": 19.2
    },
    {
      "label": "8",
      "R": 520.2462,
      "d": 4.1099,
      "nd": 1.80518,
      "elemId": 5,
      "sd": 19
    },
    {
      "label": "9",
      "R": -79.0552,
      "d": 0.4606,
      "nd": 1.0,
      "elemId": 0,
      "sd": 19
    },
    {
      "label": "10",
      "R": -180.0295,
      "d": 1.2,
      "nd": 1.8707,
      "elemId": 6,
      "sd": 17
    },
    {
      "label": "11",
      "R": 128.0584,
      "d": 4.0554,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17
    },
    {
      "label": "12",
      "R": -37.245,
      "d": 1.2,
      "nd": 1.59282,
      "elemId": 7,
      "sd": 14.2
    },
    {
      "label": "13",
      "R": 46.6295,
      "d": 5.0613,
      "nd": 1.91082,
      "elemId": 8,
      "sd": 16.5
    },
    {
      "label": "14",
      "R": -120.2559,
      "d": 1.9148,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16.5
    },
    {
      "label": "15",
      "R": -42.1599,
      "d": 1.2,
      "nd": 1.72916,
      "elemId": 9,
      "sd": 14.86
    },
    {
      "label": "16",
      "R": -83.997,
      "d": 34.1032,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16.5
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 1.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17.6
    },
    {
      "label": "18",
      "R": 38.6389,
      "d": 5.2507,
      "nd": 1.92286,
      "elemId": 10,
      "sd": 20
    },
    {
      "label": "19",
      "R": 120.0,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 20
    },
    {
      "label": "20",
      "R": 35.4374,
      "d": 5.0901,
      "nd": 1.59282,
      "elemId": 11,
      "sd": 19
    },
    {
      "label": "21",
      "R": 97.2289,
      "d": 0.4,
      "nd": 1.0,
      "elemId": 0,
      "sd": 19
    },
    {
      "label": "22",
      "R": 96.5811,
      "d": 1.3,
      "nd": 1.84666,
      "elemId": 12,
      "sd": 18.5
    },
    {
      "label": "23",
      "R": 19.5924,
      "d": 13.115,
      "nd": 1.618,
      "elemId": 13,
      "sd": 15.8
    },
    {
      "label": "24",
      "R": -28.9537,
      "d": 1.3,
      "nd": 1.90366,
      "elemId": 14,
      "sd": 15.8
    },
    {
      "label": "25",
      "R": 150.9663,
      "d": 2.2521,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16.5
    },
    {
      "label": "26A",
      "R": -112.3666,
      "d": 1.5,
      "nd": 1.80625,
      "elemId": 15,
      "sd": 14.41
    },
    {
      "label": "27",
      "R": -14100.5277,
      "d": 0.2067,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16
    },
    {
      "label": "28A",
      "R": 40.344,
      "d": 7.2282,
      "nd": 1.77377,
      "elemId": 16,
      "sd": 16.5
    },
    {
      "label": "29A",
      "R": -38.9138,
      "d": 2.2957,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16.5
    },
    {
      "label": "30",
      "R": 105.0374,
      "d": 3.0753,
      "nd": 1.92286,
      "elemId": 17,
      "sd": 13.5
    },
    {
      "label": "31",
      "R": -93.2811,
      "d": 0.9,
      "nd": 1.801,
      "elemId": 18,
      "sd": 13.5
    },
    {
      "label": "32",
      "R": 27.9385,
      "d": 9.3997,
      "nd": 1.0,
      "elemId": 0,
      "sd": 13.5
    },
    {
      "label": "33",
      "R": 55.5333,
      "d": 1.2,
      "nd": 1.91082,
      "elemId": 19,
      "sd": 15.2
    },
    {
      "label": "34",
      "R": 18.9288,
      "d": 9.5794,
      "nd": 1.5927,
      "elemId": 20,
      "sd": 14.7
    },
    {
      "label": "35",
      "R": -48.7564,
      "d": 6.1999,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14.7
    },
    {
      "label": "36A",
      "R": -23.1657,
      "d": 1.8,
      "nd": 1.6935,
      "elemId": 21,
      "sd": 15.2
    },
    {
      "label": "37A",
      "R": -77.5216,
      "d": 13.5,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17.5
    }
  ],
  "rearPlates": [
    {
      "label": "CG",
      "thicknessMm": 2.5,
      "nd": 1.5168,
      "vd": 64.2,
      "glass": "BSC7 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "gapAfterMm": 1.0,
      "source": "JP2023004721A Example1 paragraph0071 and source surfaces38–39"
    }
  ],
  "asph": {
    "26A": {
      "K": -4.7618,
      "A4": -1.12558e-05,
      "A6": -5.41558e-09,
      "A8": 2.44928e-11,
      "A10": 6.66569e-15,
      "A12": -8.0014e-17,
      "A14": 0.0
    },
    "28A": {
      "K": -2.2576,
      "A4": -4.43682e-06,
      "A6": -2.17277e-09,
      "A8": -1.47235e-11,
      "A10": 7.75635e-14,
      "A12": -1.53877e-16,
      "A14": 0.0
    },
    "29A": {
      "K": 0.0,
      "A4": -1.98686e-06,
      "A6": 3.48149e-09,
      "A8": -1.33604e-11,
      "A10": 6.20532e-14,
      "A12": -1.57248e-16,
      "A14": 0.0
    },
    "36A": {
      "K": -0.5742,
      "A4": 3.8299e-06,
      "A6": 1.75904e-08,
      "A8": -4.02738e-10,
      "A10": 1.60174e-12,
      "A12": -2.66841e-15,
      "A14": 0.0
    },
    "37A": {
      "K": 0.0,
      "A4": -6.60728e-06,
      "A6": -1.46925e-09,
      "A8": -2.17773e-10,
      "A10": 7.57891e-13,
      "A12": -1.17814e-15,
      "A14": 0.0
    }
  },
  "var": {
    "5": [
      [
        1.0,
        1.0
      ],
      [
        29.0327,
        29.0327
      ],
      [
        59.7393,
        59.7393
      ]
    ],
    "16": [
      [
        34.1032,
        34.1032
      ],
      [
        11.6612,
        11.6612
      ],
      [
        1.3,
        1.3
      ]
    ],
    "29A": [
      [
        2.2957,
        3.1957
      ],
      [
        5.3936,
        8.3197
      ],
      [
        3.4962,
        11.9612
      ]
    ],
    "32": [
      [
        9.3997,
        8.4997
      ],
      [
        9.8819,
        6.9558
      ],
      [
        13.0383,
        4.5732
      ]
    ],
    "37A": [
      [
        13.5,
        13.5
      ],
      [
        19.5839,
        19.5839
      ],
      [
        23.5011,
        23.5011
      ]
    ]
  },
  "varLabels": [
    [
      "5",
      "D5"
    ],
    [
      "16",
      "D16"
    ],
    [
      "29A",
      "D29"
    ],
    [
      "32",
      "D32"
    ],
    [
      "37A",
      "D37"
    ]
  ],
  "focusPositions": [
    0,
    1
  ],
  "zoomPositions": [
    36.0267,
    74.9717,
    145.5296
  ],
  "zoomApertureModel": "from-nominal-fno",
  "nominalFno": [
    2.0604,
    2.609,
    2.9089
  ],
  "closeFocusM": 0.8,
  "zoomCloseFocusM": [
    0.8000001,
    0.8,
    0.8
  ],
  "finiteConjugates": [
    {
      "focusT": 1,
      "zoomT": 0.0,
      "objectDistanceMm": 626.8162,
      "distanceReference": "first-surface",
      "source": "JP2023004721A Example1 paragraphs0083 variable spacings, PDF pages16–17"
    },
    {
      "focusT": 1,
      "zoomT": 0.5,
      "objectDistanceMm": 611.5614,
      "distanceReference": "first-surface",
      "source": "JP2023004721A Example1 paragraphs0083 variable spacings, PDF pages16–17"
    },
    {
      "focusT": 1,
      "zoomT": 1.0,
      "objectDistanceMm": 586.0399,
      "distanceReference": "first-surface",
      "source": "JP2023004721A Example1 paragraphs0083 variable spacings, PDF pages16–17"
    }
  ],
  "focusDescription": "PUBLISHED source test states at approximately 0.8 m object-to-image: negative G4 (L17/L18) shifts imageward 0.9000/2.9261/8.4650 mm at wide/mid/tele. Linear interpolation is unverified; these endpoints are not marketed MFD.",
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "5"
    },
    {
      "text": "G2",
      "fromSurface": "6",
      "toSurface": "16"
    },
    {
      "text": "G3 (M)",
      "fromSurface": "18",
      "toSurface": "29A"
    },
    {
      "text": "G4 (F)",
      "fromSurface": "30",
      "toSurface": "32"
    },
    {
      "text": "G5 (R)",
      "fromSurface": "33",
      "toSurface": "37A"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "1",
      "toSurface": "3"
    },
    {
      "text": "D2",
      "fromSurface": "12",
      "toSurface": "14"
    },
    {
      "text": "T1",
      "fromSurface": "22",
      "toSurface": "25"
    },
    {
      "text": "D3",
      "fromSurface": "30",
      "toSurface": "32"
    },
    {
      "text": "D4",
      "fromSurface": "33",
      "toSurface": "35"
    }
  ],
  "fstopSeries": [
    2.0604,
    2.8,
    4,
    5.6,
    8,
    11,
    16
  ],
  "apertureBlades": 9,
  "yScFill": 0.34,
  "gapSagFrac": 0.932
} satisfies LensDataInput;
export default LENS_DATA;
