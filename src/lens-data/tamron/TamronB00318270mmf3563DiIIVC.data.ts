import type { LensDataInput } from "../../types/optics.js";

/*
 * Tamron AF 18-270mm f/3.5-6.3 Di II VC (Model B003)
 *
 * Data source: JP 2010-044103 A (Tamron; A. Arakawa, Y. Muramatsu), the sole numerical
 * embodiment (¶0019-0022, Figure 1). Production correlation by construction and special-element
 * positions, not factory confirmation. Radii, thicknesses, indices and aspheric coefficients are
 * unchanged and unscaled. The patent's conic parameter A = 1 corresponds to K = 0. The blank index
 * after surface 35 is read as air; surface 15 is the flat aperture stop. No cover glass is listed.
 *
 * Construction: 18 glass elements in 13 groups (matches Tamron). Surfaces 6, 24 and 28 are 0.2 mm
 * aspherical resin layers on glass substrates (Tamron's three hybrid aspheres); each is a separate
 * medium cemented to its substrate (L4r/L4g, L13r/L13g, L15r/L15g), so the elements array has 21
 * entries while elementCount is 18. LD (L2, L11) and AD (L3) tags follow Tamron's diagram; the
 * glass strings are d-line code classes, as the patent names no glass supplier, and dispersion
 * beyond the d line comes from coordinate-compatible catalog glasses.
 *
 * Zoom: the patent tabulates D5, D14, D27 and BF at f = 18.40 / 71.10 / 264.21 mm (zoom stations
 * 0, 6 and 12, listed in publishedStations). Linear interpolation between those three rows alone
 * left the image up to 13.5 mm out of focus. Ten intermediate stations are therefore solved, not
 * published: groups 1, 3 and 4 follow a quadratic in log focal length through the three printed
 * positions, and group 2 (the patent's focusing group) is solved for paraxial focus on the fixed
 * image plane, at focal lengths spaced evenly in log f. Remaining interpolation defocus between
 * stations is at most 0.92 mm (near 240 mm; below 0.25 mm up to about 125 mm). These are
 * calculated first-order states, not cam data.
 *
 * Focus: infinity only. The patent focuses with LG2 but prints no near-focus spacings; closeFocusM
 * records Tamron's 0.49 m minimum focus distance only.
 *
 * Aperture: the stop diameter is not published. zoomApertureModel "from-nominal-fno" sizes the
 * iris to the patent's F/3.50 / 5.24 / 6.32 at the printed stations, giving radii of 8.096 /
 * 8.092 / 8.100 mm, close to one fixed iris; the solved stations carry the f-numbers (rounded to
 * 0.01) that radius gives, so the modeled iris stays within 8.087-8.102 mm across the zoom.
 *
 * Semi-diameters are inferred from ray clearance and the patent figure, not published. Figure 1
 * is captioned as the telephoto end, but its group spacings match the wide-angle column.
 * The first doublet uses 29.0/28.5/28.5 mm rims and the next singlet 27.0 mm, following
 * the drawing's descending front outline; all other inferred rims retain ray clearance.
 * Stabilization (lateral shift of the LG3 rear doublet) is not simulated.
 */

const LENS_DATA = {
  "key": "tamron-b003-18-270mm-f35-63-di-ii-vc",
  "maker": "Tamron",
  "name": "TAMRON AF 18-270mm f/3.5-6.3 Di II VC LD ASPHERICAL [IF] MACRO (B003)",
  "subtitle": "JP 2010-044103 A, sole embodiment — B003 production correlation",
  "specs": [
    "18 ELEMENTS / 13 GROUPS",
    "DESIGN f = 18.40–264.21 mm",
    "DESIGN F/3.50–6.32",
    "3 ASPHERICAL SURFACES / 3 ELEMENTS",
    "INNER FOCUS / VC"
  ],
  "focalLengthMarketing": [
    18,
    270
  ],
  "focalLengthDesign": [
    18.400111741695014,
    264.2141460018767
  ],
  "apertureMarketing": 3.5,
  "apertureDesign": 3.5,
  "lensMounts": [
    "canon-ef",
    "nikon-f"
  ],
  "imageFormat": "aps-c",
  "imageCircleMm": 29,
  "patentNumber": "JP 2010-044103 A",
  "patentAuthors": [
    "Akio Arakawa",
    "Yuichi Muramatsu"
  ],
  "patentAssignees": [
    "Tamron Co., Ltd."
  ],
  "patentYear": 2010,
  "elementCount": 18,
  "groupCount": 13,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "diagramLabel": "1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.78,
      "indexReference": "d",
      "fl": -272.5376420288011,
      "glass": "847238 - dense-flint class",
      "role": "High-dispersion negative front element of the cemented doublet in the positive first group",
      "cemented": "C1"
    },
    {
      "id": 2,
      "name": "L2",
      "diagramLabel": "2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "fl": 127.62477870672112,
      "glass": "497816 - fluor-crown class (LD)",
      "apd": "inferred",
      "apdNote": "Tamron marks this position as LD glass; the patent's nd/νd fit a 497816 fluor-crown, whose catalog equivalent gives ΔPgF ≈ +0.031. The patent prints nd and νd only.",
      "role": "Low-dispersion positive rear element of the front cemented doublet; controls tele-end lateral color",
      "cemented": "C1"
    },
    {
      "id": 3,
      "name": "L3",
      "diagramLabel": "3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.618,
      "vd": 63.39,
      "indexReference": "d",
      "fl": 192.23207086599433,
      "glass": "618634 - phosphate-crown class (AD)",
      "apd": "inferred",
      "apdNote": "Tamron marks this position as AD (anomalous dispersion) glass; the patent's nd/νd fit a 618634 phosphate crown, whose catalog equivalent gives ΔPgF ≈ +0.007. The patent prints nd and νd only.",
      "role": "Positive meniscus completing the first group; its higher index keeps the front diameter small"
    },
    {
      "id": 4,
      "name": "L4r",
      "diagramLabel": "4r",
      "label": "Element 4 resin layer",
      "type": "Hybrid Resin Layer (1× Asph)",
      "nd": 1.5146,
      "vd": 49.96,
      "indexReference": "d",
      "fl": -2313.8432243303505,
      "glass": "Unmatched (hybrid asphere resin/polymer, nd=1.51460, vd=49.96)",
      "role": "Thin aspherical resin layer on the object side of the second group's front negative meniscus",
      "cemented": "C6"
    },
    {
      "id": 5,
      "name": "L4g",
      "diagramLabel": "4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.804,
      "vd": 46.58,
      "indexReference": "d",
      "fl": -22.60830032898472,
      "glass": "804466 - lanthanum-flint class",
      "role": "Glass substrate of the hybrid aspherical front negative meniscus of the second (variator and focusing) group",
      "cemented": "C6"
    },
    {
      "id": 6,
      "name": "L5",
      "diagramLabel": "5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.804,
      "vd": 46.58,
      "indexReference": "d",
      "fl": -24.788250970637556,
      "glass": "804466 - lanthanum-flint class",
      "role": "Biconcave negative element in the middle of the second group"
    },
    {
      "id": 7,
      "name": "L6",
      "diagramLabel": "6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.84666,
      "vd": 23.78,
      "indexReference": "d",
      "fl": 20.857258800034177,
      "glass": "847238 - dense-flint class",
      "role": "High-dispersion positive element that corrects the color of the net-negative second group"
    },
    {
      "id": 8,
      "name": "L7",
      "diagramLabel": "7",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.883,
      "vd": 40.78,
      "indexReference": "d",
      "fl": -32.340580802715664,
      "glass": "883408 - high-index lanthanum-flint class",
      "role": "Rear negative meniscus of the second group, facing the aperture stop"
    },
    {
      "id": 9,
      "name": "L8",
      "diagramLabel": "8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.78,
      "indexReference": "d",
      "fl": -112.29061293573646,
      "glass": "847238 - dense-flint class",
      "role": "Negative front element of the first cemented doublet in the third group's positive front subgroup, just behind the stop",
      "cemented": "C16"
    },
    {
      "id": 10,
      "name": "L9",
      "diagramLabel": "9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.21,
      "indexReference": "d",
      "fl": 53.105612034871555,
      "glass": "487702 - fluor-crown class",
      "role": "Positive rear element of the first cemented doublet in the third group",
      "cemented": "C16"
    },
    {
      "id": 11,
      "name": "L10",
      "diagramLabel": "10",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.21,
      "indexReference": "d",
      "fl": 52.196827349123545,
      "glass": "487702 - fluor-crown class",
      "role": "Positive singlet in the third group's front subgroup"
    },
    {
      "id": 12,
      "name": "L11",
      "diagramLabel": "11",
      "label": "Element 11",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "fl": 52.294939512904,
      "glass": "497816 - fluor-crown class (LD)",
      "apd": "inferred",
      "apdNote": "Tamron marks this position as LD glass; the patent's nd/νd fit a 497816 fluor-crown, whose catalog equivalent gives ΔPgF ≈ +0.031. The patent prints nd and νd only.",
      "role": "Low-dispersion positive front element of the second cemented doublet in the third group; the νd > 80 positive lens of claim 4",
      "cemented": "C21"
    },
    {
      "id": 13,
      "name": "L12",
      "diagramLabel": "12",
      "label": "Element 12",
      "type": "Negative Meniscus",
      "nd": 1.834,
      "vd": 37.17,
      "indexReference": "d",
      "fl": -93.90979711616399,
      "glass": "834372 - lanthanum-flint class",
      "role": "Negative rear element of the second cemented doublet, closing the third group's positive front subgroup",
      "cemented": "C21"
    },
    {
      "id": 14,
      "name": "L13r",
      "diagramLabel": "13r",
      "label": "Element 13 resin layer",
      "type": "Hybrid Resin Layer (1× Asph)",
      "nd": 1.5361,
      "vd": 41.2,
      "indexReference": "d",
      "fl": 84900.59574051666,
      "glass": "Unmatched (hybrid asphere resin/polymer, nd=1.53610, vd=41.20)",
      "role": "Thin aspherical resin layer on the object side of the stabilizing (VC) doublet",
      "cemented": "C24"
    },
    {
      "id": 15,
      "name": "L13g",
      "diagramLabel": "13",
      "label": "Element 13",
      "type": "Biconcave Negative",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d",
      "fl": -27.294140646993178,
      "glass": "772496 - lanthanum-flint class",
      "role": "Glass substrate of the hybrid aspherical biconcave element, front of the negative VC doublet that shifts across the axis for stabilization",
      "cemented": "C24"
    },
    {
      "id": 16,
      "name": "L14",
      "diagramLabel": "14",
      "label": "Element 14",
      "type": "Positive Meniscus",
      "nd": 1.8081,
      "vd": 22.8,
      "indexReference": "d",
      "fl": 80.68952205331259,
      "glass": "808228 - dense-flint class",
      "role": "High-dispersion positive meniscus that color-corrects the negative VC doublet",
      "cemented": "C24"
    },
    {
      "id": 17,
      "name": "L15r",
      "diagramLabel": "15r",
      "label": "Element 15 resin layer",
      "type": "Hybrid Resin Layer (1× Asph)",
      "nd": 1.5146,
      "vd": 49.96,
      "indexReference": "d",
      "fl": 61211.83564657008,
      "glass": "Unmatched (hybrid asphere resin/polymer, nd=1.51460, vd=49.96)",
      "role": "Thin aspherical resin layer on the object side of the fourth group's front positive element",
      "cemented": "C28"
    },
    {
      "id": 18,
      "name": "L15g",
      "diagramLabel": "15",
      "label": "Element 15",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.21,
      "indexReference": "d",
      "fl": 38.10648098215678,
      "glass": "487702 - fluor-crown class",
      "role": "Glass substrate of the hybrid aspherical biconvex front element of the positive fourth group",
      "cemented": "C28"
    },
    {
      "id": 19,
      "name": "L16",
      "diagramLabel": "16",
      "label": "Element 16",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.21,
      "indexReference": "d",
      "fl": 53.09821288840888,
      "glass": "487702 - fluor-crown class",
      "role": "Positive front element of the net-negative cemented doublet in the fourth group",
      "cemented": "C31"
    },
    {
      "id": 20,
      "name": "L17",
      "diagramLabel": "17",
      "label": "Element 17",
      "type": "Biconcave Negative",
      "nd": 1.804,
      "vd": 46.58,
      "indexReference": "d",
      "fl": -23.828975417024772,
      "glass": "804466 - lanthanum-flint class",
      "role": "Biconcave negative rear element of the fourth group's cemented doublet",
      "cemented": "C31"
    },
    {
      "id": 21,
      "name": "L18",
      "diagramLabel": "18",
      "label": "Element 18",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.21,
      "indexReference": "d",
      "fl": 61.10074708746458,
      "glass": "487702 - fluor-crown class",
      "role": "Final positive element of the fourth group"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 94.3524,
      "d": 1.5,
      "nd": 1.84666,
      "elemId": 1,
      "sd": 29.0
    },
    {
      "label": "2",
      "R": 66.4807,
      "d": 8.0,
      "nd": 1.497,
      "elemId": 2,
      "sd": 28.5
    },
    {
      "label": "3",
      "R": -1326.8193,
      "d": 0.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 28.5
    },
    {
      "label": "4",
      "R": 72.3127,
      "d": 4.5,
      "nd": 1.618,
      "elemId": 3,
      "sd": 27.0
    },
    {
      "label": "5",
      "R": 180.4067,
      "d": 2.058,
      "nd": 1.0,
      "elemId": 0,
      "sd": 27.0
    },
    {
      "label": "6A",
      "R": 90.3327,
      "d": 0.2,
      "nd": 1.5146,
      "elemId": 4,
      "sd": 14.5
    },
    {
      "label": "7",
      "R": 83.8997,
      "d": 1.2,
      "nd": 1.804,
      "elemId": 5,
      "sd": 14.5
    },
    {
      "label": "8",
      "R": 14.845,
      "d": 6.4,
      "nd": 1.0,
      "elemId": 0,
      "sd": 13.0
    },
    {
      "label": "9",
      "R": -34.8049,
      "d": 1.0,
      "nd": 1.804,
      "elemId": 6,
      "sd": 10.0
    },
    {
      "label": "10",
      "R": 47.2288,
      "d": 0.8,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10.0
    },
    {
      "label": "11",
      "R": 34.7194,
      "d": 4.8,
      "nd": 1.84666,
      "elemId": 7,
      "sd": 10.5
    },
    {
      "label": "12",
      "R": -33.6597,
      "d": 1.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10.5
    },
    {
      "label": "13",
      "R": -25.046,
      "d": 1.0,
      "nd": 1.883,
      "elemId": 8,
      "sd": 10.5
    },
    {
      "label": "14",
      "R": -207.5416,
      "d": 30.539,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10.5
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 1.0,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.029265496977745
    },
    {
      "label": "16",
      "R": 37.3663,
      "d": 1.0,
      "nd": 1.84666,
      "elemId": 9,
      "sd": 11.5
    },
    {
      "label": "17",
      "R": 26.4946,
      "d": 4.0,
      "nd": 1.48749,
      "elemId": 10,
      "sd": 11.5
    },
    {
      "label": "18",
      "R": -1075.5953,
      "d": 0.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.5
    },
    {
      "label": "19",
      "R": 32.6392,
      "d": 3.2918,
      "nd": 1.48749,
      "elemId": 11,
      "sd": 11.5
    },
    {
      "label": "20",
      "R": -111.6338,
      "d": 0.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.5
    },
    {
      "label": "21",
      "R": 25.7859,
      "d": 4.144,
      "nd": 1.497,
      "elemId": 12,
      "sd": 11.5
    },
    {
      "label": "22",
      "R": 3099.5581,
      "d": 1.0,
      "nd": 1.834,
      "elemId": 13,
      "sd": 11.5
    },
    {
      "label": "23",
      "R": 76.3793,
      "d": 2.7717,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.5
    },
    {
      "label": "24A",
      "R": -56.3646,
      "d": 0.2,
      "nd": 1.5361,
      "elemId": 14,
      "sd": 11.5
    },
    {
      "label": "25",
      "R": -56.3646,
      "d": 1.0,
      "nd": 1.7725,
      "elemId": 15,
      "sd": 11.5
    },
    {
      "label": "26",
      "R": 33.9463,
      "d": 2.2,
      "nd": 1.8081,
      "elemId": 16,
      "sd": 11.5
    },
    {
      "label": "27",
      "R": 68.76,
      "d": 7.717,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.5
    },
    {
      "label": "28A",
      "R": 46.2651,
      "d": 0.2,
      "nd": 1.5146,
      "elemId": 17,
      "sd": 11.8
    },
    {
      "label": "29",
      "R": 46.2651,
      "d": 4.0,
      "nd": 1.48749,
      "elemId": 18,
      "sd": 11.8
    },
    {
      "label": "30",
      "R": -30.1602,
      "d": 0.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.8
    },
    {
      "label": "31",
      "R": 146.4471,
      "d": 4.0,
      "nd": 1.48749,
      "elemId": 19,
      "sd": 12.5
    },
    {
      "label": "32",
      "R": -31.1609,
      "d": 1.0,
      "nd": 1.804,
      "elemId": 20,
      "sd": 12.5
    },
    {
      "label": "33",
      "R": 50.4511,
      "d": 1.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12.5
    },
    {
      "label": "34",
      "R": 92.7722,
      "d": 4.0,
      "nd": 1.48749,
      "elemId": 21,
      "sd": 12.5
    },
    {
      "label": "35",
      "R": -43.2518,
      "d": 38.685,
      "nd": 1,
      "elemId": 0,
      "sd": 12.5
    }
  ],
  "asph": {
    "6A": {
      "A4": 7.56725e-06,
      "A6": -7.65747e-09,
      "A8": -2.26456e-11,
      "A10": 1.23747e-13,
      "K": 0.0,
      "A12": 0,
      "A14": 0
    },
    "24A": {
      "A4": 7.89296e-06,
      "A6": 9.60742e-09,
      "A8": 3.69345e-11,
      "A10": -7.34306e-13,
      "K": 0.0,
      "A12": 0,
      "A14": 0
    },
    "28A": {
      "A4": -3.19107e-05,
      "A6": -5.55382e-09,
      "A8": -3.27936e-11,
      "A10": 3.69412e-13,
      "K": 0.0,
      "A12": 0,
      "A14": 0
    }
  },
  "var": {
    "5": [
      [
        2.058,
        2.058
      ],
      [
        8.7602,
        8.7602
      ],
      [
        15.1113,
        15.1113
      ],
      [
        21.2281,
        21.2281
      ],
      [
        27.2131,
        27.2131
      ],
      [
        33.142,
        33.142
      ],
      [
        39.047,
        39.047
      ],
      [
        44.7313,
        44.7313
      ],
      [
        50.2774,
        50.2774
      ],
      [
        55.5494,
        55.5494
      ],
      [
        60.4014,
        60.4014
      ],
      [
        64.722,
        64.722
      ],
      [
        68.462,
        68.462
      ]
    ],
    "14": [
      [
        30.539,
        30.539
      ],
      [
        25.9747,
        25.9747
      ],
      [
        22.108,
        22.108
      ],
      [
        18.854,
        18.854
      ],
      [
        16.1254,
        16.1254
      ],
      [
        13.8298,
        13.8298
      ],
      [
        11.868,
        11.868
      ],
      [
        10.1806,
        10.1806
      ],
      [
        8.6011,
        8.6011
      ],
      [
        7.0178,
        7.0178
      ],
      [
        5.3149,
        5.3149
      ],
      [
        3.3713,
        3.3713
      ],
      [
        1.055,
        1.055
      ]
    ],
    "27": [
      [
        7.717,
        7.717
      ],
      [
        7.0608,
        7.0608
      ],
      [
        6.3559,
        6.3559
      ],
      [
        5.6187,
        5.6187
      ],
      [
        4.876,
        4.876
      ],
      [
        4.1646,
        4.1646
      ],
      [
        3.529,
        3.529
      ],
      [
        3.0255,
        3.0255
      ],
      [
        2.6621,
        2.6621
      ],
      [
        2.4426,
        2.4426
      ],
      [
        2.3433,
        2.3433
      ],
      [
        2.321,
        2.321
      ],
      [
        2.329,
        2.329
      ]
    ],
    "35": [
      [
        38.685,
        38.685
      ],
      [
        43.8577,
        43.8577
      ],
      [
        49.5702,
        49.5702
      ],
      [
        55.7626,
        55.7626
      ],
      [
        62.3088,
        62.3088
      ],
      [
        69.0038,
        69.0038
      ],
      [
        75.562,
        75.562
      ],
      [
        81.4784,
        81.4784
      ],
      [
        86.6425,
        86.6425
      ],
      [
        90.8307,
        90.8307
      ],
      [
        93.9482,
        93.9482
      ],
      [
        96.0278,
        96.0278
      ],
      [
        97.163,
        97.163
      ]
    ]
  },
  "varLabels": [
    [
      "5",
      "D5"
    ],
    [
      "14",
      "D14"
    ],
    [
      "27",
      "D27"
    ],
    [
      "35",
      "BF"
    ]
  ],
  "zoomPositions": [
    18.4,
    23.049,
    28.874,
    36.169,
    45.308,
    56.757,
    71.099,
    88.486,
    110.126,
    137.059,
    170.578,
    212.295,
    264.21
  ],
  "publishedStations": {
    "zoom": [
      0,
      6,
      12
    ]
  },
  "zoomLabels": [
    "18 mm",
    "270 mm"
  ],
  "groups": [
    {
      "text": "LG1",
      "fromSurface": "1",
      "toSurface": "5"
    },
    {
      "text": "LG2",
      "fromSurface": "6A",
      "toSurface": "14"
    },
    {
      "text": "LG3",
      "fromSurface": "16",
      "toSurface": "27"
    },
    {
      "text": "LG4",
      "fromSurface": "28A",
      "toSurface": "35"
    }
  ],
  "doublets": [
    { "text": "C1", "fromSurface": "1", "toSurface": "3" },
    { "text": "C6", "fromSurface": "6A", "toSurface": "8" },
    { "text": "C16", "fromSurface": "16", "toSurface": "18" },
    { "text": "C21", "fromSurface": "21", "toSurface": "23" },
    { "text": "C24", "fromSurface": "24A", "toSurface": "27" },
    { "text": "C28", "fromSurface": "28A", "toSurface": "30" },
    { "text": "C31", "fromSurface": "31", "toSurface": "33" }
  ],
  "closeFocusM": 0.49,
  "focusDescription": "Infinity focus only. The patent focuses by moving the second group (LG2) toward the object, but it prints no near-focus spacings, so no focus movement is modeled: every zoom state stays at infinity focus. The 0.49 m end of the focus scale is Tamron's marketed minimum focus distance and does not move any group.",
  "nominalFno": [
    3.5,
    3.72,
    3.97,
    4.25,
    4.57,
    4.9,
    5.24,
    5.55,
    5.82,
    6.04,
    6.19,
    6.28,
    6.32
  ],
  "fstopSeries": [
    3.5,
    4,
    5.6,
    6.3,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "apertureBlades": 7,
  "yScFill": 0.3,
  "zoomApertureModel": "from-nominal-fno"
} satisfies LensDataInput;

export default LENS_DATA;
