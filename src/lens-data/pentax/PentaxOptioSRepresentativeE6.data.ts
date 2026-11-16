import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * Source: US 2003/0197949 A1 (Masaru Eguchi, PENTAX Corporation), Embodiment 6, Table 6 and Fig. 21.
 * Units are millimetres at the patent's own scale (factor 1); indices are d-line.
 * Printed zoom stations (f = 5.80 / 9.60 / 17.40 mm) are stations 0, 64 and 128 and are kept exactly as printed.
 * The patent's d4 runs from surface 4 to surface 5; here it is split into the variable gap after surface 4
 * (printed value minus 0.50) and the 0.50 mm stop-to-surface-5 distance the patent states.
 * Inferred, not printed: the 126 intermediate stations (d11 linear between printed values; d4 and d9 solved for the
 * station focal length and paraxial focus), their f-numbers (linear between printed values), and all semi-diameters.
 * The 2.00 mm plane-parallel plate (surfaces 12-13, printed fB = 0.00) is carried in rearPlates.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-optio-s-representative-e6",
  "maker": "Pentax",
  "name": "PENTAX Optio S 5.8–17.4mm f/2.7–5.3 (representative Embodiment 6)",
  "visible": false,
  "subtitle": "Representative patent with derived G1/G2 compensator; published nodes labeled; not factory cam",
  "source": {
    "patentNumber": "US 2003/0197949 A1",
    "example": {
      "label": "Embodiment 6",
      "id": "6"
    },
    "patentYear": 2003,
    "authors": [
      "Masaru Eguchi"
    ],
    "assignees": [
      "Pentax Corporation"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "nd": 1.883,
      "vd": 40.8,
      "glass": "Unmatched (nd=1.883, Vd=40.8)",
      "type": "Negative Meniscus"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "nd": 1.84666,
      "vd": 23.8,
      "glass": "Unmatched (nd=1.84666, Vd=23.8)",
      "type": "Positive Meniscus (2x Aspheric)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "nd": 1.58913,
      "vd": 61.2,
      "glass": "Unmatched (nd=1.58913, Vd=61.2)",
      "type": "Biconvex Positive (2x Aspheric)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "nd": 1.834,
      "vd": 37.2,
      "glass": "Unmatched (nd=1.834, Vd=37.2)",
      "type": "Positive Meniscus",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "nd": 1.84666,
      "vd": 23.8,
      "glass": "Unmatched (nd=1.84666, Vd=23.8)",
      "type": "Negative Meniscus",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "nd": 1.6516,
      "vd": 58.5,
      "glass": "Unmatched (nd=1.6516, Vd=58.5)",
      "type": "Biconvex Positive"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 1070.671,
      "d": 0.7,
      "sd": 5.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 7.32,
      "d": 1.5,
      "sd": 5.5
    },
    {
      "label": "3",
      "R": 15.066,
      "d": 1.8,
      "sd": 4.85,
      "medium": 2,
      "asphere": {
        "K": 0,
        "A4": -0.00035482,
        "A6": 0.0000087922,
        "A8": 1.3e-7
      }
    },
    {
      "label": "4",
      "R": 209.571,
      "sd": 4.85,
      "asphere": {
        "K": 0,
        "A4": -0.00056988,
        "A6": 0.000012255,
        "A8": -7.2152e-8
      }
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0.5
    },
    {
      "label": "5",
      "R": 6.208,
      "d": 1.8,
      "sd": 2.35,
      "medium": 3,
      "asphere": {
        "K": 0,
        "A4": -0.00055966,
        "A6": -0.0000051644,
        "A8": 6.3694e-7
      }
    },
    {
      "label": "6",
      "R": -16.525,
      "d": 0.2,
      "sd": 2.35,
      "asphere": {
        "K": 0,
        "A4": 0.00033682,
        "A6": -0.000013588,
        "A8": 0.0000018616
      }
    },
    {
      "label": "7",
      "R": 9.199,
      "d": 1.8,
      "sd": 2.15,
      "medium": 4
    },
    {
      "label": "8",
      "R": 48.765,
      "d": 1.8,
      "sd": 2.15,
      "medium": 5
    },
    {
      "label": "9",
      "R": 3.565,
      "sd": 2.15
    },
    {
      "label": "10",
      "R": 16.66,
      "d": 1.9,
      "sd": 4.2,
      "medium": 6
    },
    {
      "label": "11",
      "R": -15.068,
      "sd": 4.2
    }
  ],
  "rearPlates": [
    {
      "label": "CG",
      "thicknessMm": 2,
      "nd": 1.51633,
      "vd": 64.1,
      "gapAfterMm": 0,
      "source": "Table6 S12-S13, printed fB=0"
    }
  ],
  "aperture": {
    "fStops": [
      2.7,
      8,
      11,
      16
    ]
  },
  "focus": {
    "closeFocusM": 1000000000000000,
    "description": "Infinity only. Three exact patent stations; at the other rows the rear gap d11 is interpolated linearly between the printed values and d4, d9 are solved for the row focal length and paraxial focus on the printed image plane. No factory zoom cam or finite focus claim."
  },
  "groups": [
    {
      "text": "G1 (-)",
      "fromSurface": "1",
      "toSurface": "4"
    },
    {
      "text": "G2 (+)",
      "fromSurface": "5",
      "toSurface": "9"
    },
    {
      "text": "G3 (+)",
      "fromSurface": "10",
      "toSurface": "11"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "7",
      "toSurface": "9"
    }
  ],
  "catalog": {
    "elementCount": 6,
    "groupCount": 5,
    "lensMounts": [
      "fixed-lens-camera"
    ],
    "imageFormat": "1-2.55-inch-type",
    "focalLengthMm": {
      "marketing": [
        5.8,
        17.4
      ],
      "design": [
        5.8,
        17.4
      ]
    },
    "fNumber": {
      "marketing": 2.6,
      "design": 2.7
    },
    "specs": [
      "REPRESENTATIVE PATENT; NOT FACTORY-EXACT OPTIO S",
      "6 ELEMENTS / 5 AIR-SEPARATED GROUPS",
      "3 PUBLISHED + 126 DERIVED INFINITY STATIONS",
      "DERIVED G1/G2 CAM; CLEAR CAPS UNCHANGED"
    ]
  },
  "layout": {
    "yScFill": 0.4
  },
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 5.8,
        "nominalFNumber": 2.7,
        "label": "Source infinity 5.8 mm",
        "published": true,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 5.861022,
        "nominalFNumber": 2.7125,
        "label": "Calculated infinity 5.861022 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 5.920384,
        "nominalFNumber": 2.725,
        "label": "Calculated infinity 5.920384 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 5.979747,
        "nominalFNumber": 2.7375,
        "label": "Calculated infinity 5.979747 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.03911,
        "nominalFNumber": 2.75,
        "label": "Calculated infinity 6.03911 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.098472,
        "nominalFNumber": 2.7625,
        "label": "Calculated infinity 6.098472 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.157835,
        "nominalFNumber": 2.775,
        "label": "Calculated infinity 6.157835 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.217197,
        "nominalFNumber": 2.7875,
        "label": "Calculated infinity 6.217197 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.27656,
        "nominalFNumber": 2.8,
        "label": "Calculated infinity 6.27656 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.335922,
        "nominalFNumber": 2.8125,
        "label": "Calculated infinity 6.335922 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.395285,
        "nominalFNumber": 2.825,
        "label": "Calculated infinity 6.395285 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.454647,
        "nominalFNumber": 2.8375,
        "label": "Calculated infinity 6.454647 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.51401,
        "nominalFNumber": 2.85,
        "label": "Calculated infinity 6.51401 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.573373,
        "nominalFNumber": 2.8625,
        "label": "Calculated infinity 6.573373 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.632735,
        "nominalFNumber": 2.875,
        "label": "Calculated infinity 6.632735 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.692097,
        "nominalFNumber": 2.8875,
        "label": "Calculated infinity 6.692097 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.75146,
        "nominalFNumber": 2.9,
        "label": "Calculated infinity 6.75146 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.810823,
        "nominalFNumber": 2.9125,
        "label": "Calculated infinity 6.810823 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.870185,
        "nominalFNumber": 2.925,
        "label": "Calculated infinity 6.870185 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.929547,
        "nominalFNumber": 2.9375,
        "label": "Calculated infinity 6.929547 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.98891,
        "nominalFNumber": 2.95,
        "label": "Calculated infinity 6.98891 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.048272,
        "nominalFNumber": 2.9625,
        "label": "Calculated infinity 7.048272 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.107635,
        "nominalFNumber": 2.975,
        "label": "Calculated infinity 7.107635 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.166998,
        "nominalFNumber": 2.9875,
        "label": "Calculated infinity 7.166998 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.22636,
        "nominalFNumber": 3,
        "label": "Calculated infinity 7.22636 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.285723,
        "nominalFNumber": 3.0125,
        "label": "Calculated infinity 7.285723 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.345085,
        "nominalFNumber": 3.025,
        "label": "Calculated infinity 7.345085 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.404448,
        "nominalFNumber": 3.0375,
        "label": "Calculated infinity 7.404448 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.46381,
        "nominalFNumber": 3.05,
        "label": "Calculated infinity 7.46381 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.523173,
        "nominalFNumber": 3.0625,
        "label": "Calculated infinity 7.523173 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.582535,
        "nominalFNumber": 3.075,
        "label": "Calculated infinity 7.582535 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.641898,
        "nominalFNumber": 3.0875,
        "label": "Calculated infinity 7.641898 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.70126,
        "nominalFNumber": 3.1,
        "label": "Calculated infinity 7.70126 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.760623,
        "nominalFNumber": 3.1125,
        "label": "Calculated infinity 7.760623 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.819985,
        "nominalFNumber": 3.125,
        "label": "Calculated infinity 7.819985 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.879348,
        "nominalFNumber": 3.1375,
        "label": "Calculated infinity 7.879348 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.938711,
        "nominalFNumber": 3.15,
        "label": "Calculated infinity 7.938711 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.998073,
        "nominalFNumber": 3.1625,
        "label": "Calculated infinity 7.998073 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.057436,
        "nominalFNumber": 3.175,
        "label": "Calculated infinity 8.057436 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.116798,
        "nominalFNumber": 3.1875,
        "label": "Calculated infinity 8.116798 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.176161,
        "nominalFNumber": 3.2,
        "label": "Calculated infinity 8.176161 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.235523,
        "nominalFNumber": 3.2125,
        "label": "Calculated infinity 8.235523 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.294886,
        "nominalFNumber": 3.225,
        "label": "Calculated infinity 8.294886 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.354248,
        "nominalFNumber": 3.2375,
        "label": "Calculated infinity 8.354248 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.413611,
        "nominalFNumber": 3.25,
        "label": "Calculated infinity 8.413611 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.472974,
        "nominalFNumber": 3.2625,
        "label": "Calculated infinity 8.472974 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.532336,
        "nominalFNumber": 3.275,
        "label": "Calculated infinity 8.532336 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.591698,
        "nominalFNumber": 3.2875,
        "label": "Calculated infinity 8.591698 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.651061,
        "nominalFNumber": 3.3,
        "label": "Calculated infinity 8.651061 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.710424,
        "nominalFNumber": 3.3125,
        "label": "Calculated infinity 8.710424 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.769786,
        "nominalFNumber": 3.325,
        "label": "Calculated infinity 8.769786 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.829149,
        "nominalFNumber": 3.3375,
        "label": "Calculated infinity 8.829149 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.888511,
        "nominalFNumber": 3.35,
        "label": "Calculated infinity 8.888511 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.947874,
        "nominalFNumber": 3.3625,
        "label": "Calculated infinity 8.947874 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.007236,
        "nominalFNumber": 3.375,
        "label": "Calculated infinity 9.007236 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.066599,
        "nominalFNumber": 3.3875,
        "label": "Calculated infinity 9.066599 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.125961,
        "nominalFNumber": 3.4,
        "label": "Calculated infinity 9.125961 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.185324,
        "nominalFNumber": 3.4125,
        "label": "Calculated infinity 9.185324 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.244686,
        "nominalFNumber": 3.425,
        "label": "Calculated infinity 9.244686 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.304049,
        "nominalFNumber": 3.4375,
        "label": "Calculated infinity 9.304049 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.363412,
        "nominalFNumber": 3.45,
        "label": "Calculated infinity 9.363412 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.422774,
        "nominalFNumber": 3.4625,
        "label": "Calculated infinity 9.422774 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.482137,
        "nominalFNumber": 3.475,
        "label": "Calculated infinity 9.482137 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.541499,
        "nominalFNumber": 3.4875,
        "label": "Calculated infinity 9.541499 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.6,
        "nominalFNumber": 3.5,
        "label": "Source infinity 9.6 mm",
        "published": true,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.722623,
        "nominalFNumber": 3.528125,
        "label": "Calculated infinity 9.722623 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.844385,
        "nominalFNumber": 3.55625,
        "label": "Calculated infinity 9.844385 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.966147,
        "nominalFNumber": 3.584375,
        "label": "Calculated infinity 9.966147 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.087909,
        "nominalFNumber": 3.6125,
        "label": "Calculated infinity 10.087909 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.20967,
        "nominalFNumber": 3.640625,
        "label": "Calculated infinity 10.20967 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.331432,
        "nominalFNumber": 3.66875,
        "label": "Calculated infinity 10.331432 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.453195,
        "nominalFNumber": 3.696875,
        "label": "Calculated infinity 10.453195 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.574956,
        "nominalFNumber": 3.725,
        "label": "Calculated infinity 10.574956 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.696718,
        "nominalFNumber": 3.753125,
        "label": "Calculated infinity 10.696718 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.81848,
        "nominalFNumber": 3.78125,
        "label": "Calculated infinity 10.81848 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.940241,
        "nominalFNumber": 3.809375,
        "label": "Calculated infinity 10.940241 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.062003,
        "nominalFNumber": 3.8375,
        "label": "Calculated infinity 11.062003 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.183765,
        "nominalFNumber": 3.865625,
        "label": "Calculated infinity 11.183765 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.305527,
        "nominalFNumber": 3.89375,
        "label": "Calculated infinity 11.305527 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.427289,
        "nominalFNumber": 3.921875,
        "label": "Calculated infinity 11.427289 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.549051,
        "nominalFNumber": 3.95,
        "label": "Calculated infinity 11.549051 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.670812,
        "nominalFNumber": 3.978125,
        "label": "Calculated infinity 11.670812 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.792574,
        "nominalFNumber": 4.00625,
        "label": "Calculated infinity 11.792574 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.914336,
        "nominalFNumber": 4.034375,
        "label": "Calculated infinity 11.914336 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.036098,
        "nominalFNumber": 4.0625,
        "label": "Calculated infinity 12.036098 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.15786,
        "nominalFNumber": 4.090625,
        "label": "Calculated infinity 12.15786 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.279621,
        "nominalFNumber": 4.11875,
        "label": "Calculated infinity 12.279621 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.401383,
        "nominalFNumber": 4.146875,
        "label": "Calculated infinity 12.401383 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.523145,
        "nominalFNumber": 4.175,
        "label": "Calculated infinity 12.523145 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.644907,
        "nominalFNumber": 4.203125,
        "label": "Calculated infinity 12.644907 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.766669,
        "nominalFNumber": 4.23125,
        "label": "Calculated infinity 12.766669 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.888431,
        "nominalFNumber": 4.259375,
        "label": "Calculated infinity 12.888431 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.010192,
        "nominalFNumber": 4.2875,
        "label": "Calculated infinity 13.010192 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.131954,
        "nominalFNumber": 4.315625,
        "label": "Calculated infinity 13.131954 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.253716,
        "nominalFNumber": 4.34375,
        "label": "Calculated infinity 13.253716 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.375477,
        "nominalFNumber": 4.371875,
        "label": "Calculated infinity 13.375477 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.49724,
        "nominalFNumber": 4.4,
        "label": "Calculated infinity 13.49724 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.619001,
        "nominalFNumber": 4.428125,
        "label": "Calculated infinity 13.619001 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.740763,
        "nominalFNumber": 4.45625,
        "label": "Calculated infinity 13.740763 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.862525,
        "nominalFNumber": 4.484375,
        "label": "Calculated infinity 13.862525 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.984287,
        "nominalFNumber": 4.5125,
        "label": "Calculated infinity 13.984287 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.106049,
        "nominalFNumber": 4.540625,
        "label": "Calculated infinity 14.106049 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.227811,
        "nominalFNumber": 4.56875,
        "label": "Calculated infinity 14.227811 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.349573,
        "nominalFNumber": 4.596875,
        "label": "Calculated infinity 14.349573 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.471334,
        "nominalFNumber": 4.625,
        "label": "Calculated infinity 14.471334 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.593096,
        "nominalFNumber": 4.653125,
        "label": "Calculated infinity 14.593096 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.714858,
        "nominalFNumber": 4.68125,
        "label": "Calculated infinity 14.714858 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.836619,
        "nominalFNumber": 4.709375,
        "label": "Calculated infinity 14.836619 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.958382,
        "nominalFNumber": 4.7375,
        "label": "Calculated infinity 14.958382 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.080143,
        "nominalFNumber": 4.765625,
        "label": "Calculated infinity 15.080143 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.201905,
        "nominalFNumber": 4.79375,
        "label": "Calculated infinity 15.201905 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.323667,
        "nominalFNumber": 4.821875,
        "label": "Calculated infinity 15.323667 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.445428,
        "nominalFNumber": 4.85,
        "label": "Calculated infinity 15.445428 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.56719,
        "nominalFNumber": 4.878125,
        "label": "Calculated infinity 15.56719 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.688952,
        "nominalFNumber": 4.90625,
        "label": "Calculated infinity 15.688952 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.810715,
        "nominalFNumber": 4.934375,
        "label": "Calculated infinity 15.810715 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.932476,
        "nominalFNumber": 4.9625,
        "label": "Calculated infinity 15.932476 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.054237,
        "nominalFNumber": 4.990625,
        "label": "Calculated infinity 16.054237 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.176,
        "nominalFNumber": 5.01875,
        "label": "Calculated infinity 16.176 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.297761,
        "nominalFNumber": 5.046875,
        "label": "Calculated infinity 16.297761 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.419523,
        "nominalFNumber": 5.075,
        "label": "Calculated infinity 16.419523 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.541285,
        "nominalFNumber": 5.103125,
        "label": "Calculated infinity 16.541285 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.663047,
        "nominalFNumber": 5.13125,
        "label": "Calculated infinity 16.663047 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.784809,
        "nominalFNumber": 5.159375,
        "label": "Calculated infinity 16.784809 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.90657,
        "nominalFNumber": 5.1875,
        "label": "Calculated infinity 16.90657 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 17.028332,
        "nominalFNumber": 5.215625,
        "label": "Calculated infinity 17.028332 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 17.150094,
        "nominalFNumber": 5.24375,
        "label": "Calculated infinity 17.150094 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 17.271856,
        "nominalFNumber": 5.271875,
        "label": "Calculated infinity 17.271856 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 17.4,
        "nominalFNumber": 5.3,
        "label": "Source infinity 17.4 mm",
        "published": true,
        "publishedFocus": []
      }
    ],
    "step": 0.004
  },
  "gaps": {
    "4": {
      "label": "d4",
      "values": [
        [
          15.04,
          15.04
        ],
        [
          14.838822,
          14.838822
        ],
        [
          14.641678,
          14.641678
        ],
        [
          14.448451,
          14.448451
        ],
        [
          14.25902,
          14.25902
        ],
        [
          14.073277,
          14.073277
        ],
        [
          13.891115,
          13.891115
        ],
        [
          13.712434,
          13.712434
        ],
        [
          13.537131,
          13.537131
        ],
        [
          13.365113,
          13.365113
        ],
        [
          13.19629,
          13.19629
        ],
        [
          13.03057,
          13.03057
        ],
        [
          12.867871,
          12.867871
        ],
        [
          12.70811,
          12.70811
        ],
        [
          12.551209,
          12.551209
        ],
        [
          12.397094,
          12.397094
        ],
        [
          12.245687,
          12.245687
        ],
        [
          12.096919,
          12.096919
        ],
        [
          11.950722,
          11.950722
        ],
        [
          11.807032,
          11.807032
        ],
        [
          11.665781,
          11.665781
        ],
        [
          11.526909,
          11.526909
        ],
        [
          11.390356,
          11.390356
        ],
        [
          11.256068,
          11.256068
        ],
        [
          11.123984,
          11.123984
        ],
        [
          10.994053,
          10.994053
        ],
        [
          10.866222,
          10.866222
        ],
        [
          10.740442,
          10.740442
        ],
        [
          10.616661,
          10.616661
        ],
        [
          10.494834,
          10.494834
        ],
        [
          10.374914,
          10.374914
        ],
        [
          10.256859,
          10.256859
        ],
        [
          10.140622,
          10.140622
        ],
        [
          10.026163,
          10.026163
        ],
        [
          9.913443,
          9.913443
        ],
        [
          9.802422,
          9.802422
        ],
        [
          9.69306,
          9.69306
        ],
        [
          9.585321,
          9.585321
        ],
        [
          9.47917,
          9.47917
        ],
        [
          9.374574,
          9.374574
        ],
        [
          9.271494,
          9.271494
        ],
        [
          9.1699,
          9.1699
        ],
        [
          9.069761,
          9.069761
        ],
        [
          8.971046,
          8.971046
        ],
        [
          8.873723,
          8.873723
        ],
        [
          8.777763,
          8.777763
        ],
        [
          8.683139,
          8.683139
        ],
        [
          8.589824,
          8.589824
        ],
        [
          8.497788,
          8.497788
        ],
        [
          8.407006,
          8.407006
        ],
        [
          8.317453,
          8.317453
        ],
        [
          8.229106,
          8.229106
        ],
        [
          8.141938,
          8.141938
        ],
        [
          8.055926,
          8.055926
        ],
        [
          7.971048,
          7.971048
        ],
        [
          7.887283,
          7.887283
        ],
        [
          7.804606,
          7.804606
        ],
        [
          7.722998,
          7.722998
        ],
        [
          7.642438,
          7.642438
        ],
        [
          7.562907,
          7.562907
        ],
        [
          7.484383,
          7.484383
        ],
        [
          7.406849,
          7.406849
        ],
        [
          7.330285,
          7.330285
        ],
        [
          7.254676,
          7.254676
        ],
        [
          7.18,
          7.18
        ],
        [
          7.029054,
          7.029054
        ],
        [
          6.881842,
          6.881842
        ],
        [
          6.738229,
          6.738229
        ],
        [
          6.598081,
          6.598081
        ],
        [
          6.461276,
          6.461276
        ],
        [
          6.327696,
          6.327696
        ],
        [
          6.197228,
          6.197228
        ],
        [
          6.069764,
          6.069764
        ],
        [
          5.945202,
          5.945202
        ],
        [
          5.823444,
          5.823444
        ],
        [
          5.704398,
          5.704398
        ],
        [
          5.58797,
          5.58797
        ],
        [
          5.474078,
          5.474078
        ],
        [
          5.36264,
          5.36264
        ],
        [
          5.253577,
          5.253577
        ],
        [
          5.146813,
          5.146813
        ],
        [
          5.042276,
          5.042276
        ],
        [
          4.939898,
          4.939898
        ],
        [
          4.839614,
          4.839614
        ],
        [
          4.741358,
          4.741358
        ],
        [
          4.64507,
          4.64507
        ],
        [
          4.550692,
          4.550692
        ],
        [
          4.458168,
          4.458168
        ],
        [
          4.367442,
          4.367442
        ],
        [
          4.278463,
          4.278463
        ],
        [
          4.191181,
          4.191181
        ],
        [
          4.10555,
          4.10555
        ],
        [
          4.021521,
          4.021521
        ],
        [
          3.93905,
          3.93905
        ],
        [
          3.858094,
          3.858094
        ],
        [
          3.778613,
          3.778613
        ],
        [
          3.700565,
          3.700565
        ],
        [
          3.623913,
          3.623913
        ],
        [
          3.548619,
          3.548619
        ],
        [
          3.474649,
          3.474649
        ],
        [
          3.401966,
          3.401966
        ],
        [
          3.330538,
          3.330538
        ],
        [
          3.260332,
          3.260332
        ],
        [
          3.191319,
          3.191319
        ],
        [
          3.123466,
          3.123466
        ],
        [
          3.056745,
          3.056745
        ],
        [
          2.991129,
          2.991129
        ],
        [
          2.926591,
          2.926591
        ],
        [
          2.863102,
          2.863102
        ],
        [
          2.800639,
          2.800639
        ],
        [
          2.739176,
          2.739176
        ],
        [
          2.678691,
          2.678691
        ],
        [
          2.619159,
          2.619159
        ],
        [
          2.560557,
          2.560557
        ],
        [
          2.502866,
          2.502866
        ],
        [
          2.446064,
          2.446064
        ],
        [
          2.390129,
          2.390129
        ],
        [
          2.335043,
          2.335043
        ],
        [
          2.280786,
          2.280786
        ],
        [
          2.227341,
          2.227341
        ],
        [
          2.174688,
          2.174688
        ],
        [
          2.122809,
          2.122809
        ],
        [
          2.071689,
          2.071689
        ],
        [
          2.021311,
          2.021311
        ],
        [
          1.971659,
          1.971659
        ],
        [
          1.922716,
          1.922716
        ],
        [
          1.874468,
          1.874468
        ],
        [
          1.826902,
          1.826902
        ],
        [
          1.7799999999999998,
          1.7799999999999998
        ]
      ]
    },
    "9": {
      "label": "d9",
      "values": [
        [
          3.2,
          3.2
        ],
        [
          3.259032,
          3.259032
        ],
        [
          3.318035,
          3.318035
        ],
        [
          3.37701,
          3.37701
        ],
        [
          3.435955,
          3.435955
        ],
        [
          3.49487,
          3.49487
        ],
        [
          3.553756,
          3.553756
        ],
        [
          3.612615,
          3.612615
        ],
        [
          3.671443,
          3.671443
        ],
        [
          3.730242,
          3.730242
        ],
        [
          3.789013,
          3.789013
        ],
        [
          3.847753,
          3.847753
        ],
        [
          3.906465,
          3.906465
        ],
        [
          3.965148,
          3.965148
        ],
        [
          4.023801,
          4.023801
        ],
        [
          4.082427,
          4.082427
        ],
        [
          4.141023,
          4.141023
        ],
        [
          4.19959,
          4.19959
        ],
        [
          4.258128,
          4.258128
        ],
        [
          4.316638,
          4.316638
        ],
        [
          4.375118,
          4.375118
        ],
        [
          4.433569,
          4.433569
        ],
        [
          4.491992,
          4.491992
        ],
        [
          4.550387,
          4.550387
        ],
        [
          4.608752,
          4.608752
        ],
        [
          4.667088,
          4.667088
        ],
        [
          4.725395,
          4.725395
        ],
        [
          4.783675,
          4.783675
        ],
        [
          4.841925,
          4.841925
        ],
        [
          4.900146,
          4.900146
        ],
        [
          4.958339,
          4.958339
        ],
        [
          5.016504,
          5.016504
        ],
        [
          5.074639,
          5.074639
        ],
        [
          5.132746,
          5.132746
        ],
        [
          5.190824,
          5.190824
        ],
        [
          5.248875,
          5.248875
        ],
        [
          5.306897,
          5.306897
        ],
        [
          5.364889,
          5.364889
        ],
        [
          5.422853,
          5.422853
        ],
        [
          5.48079,
          5.48079
        ],
        [
          5.538698,
          5.538698
        ],
        [
          5.596576,
          5.596576
        ],
        [
          5.654427,
          5.654427
        ],
        [
          5.71225,
          5.71225
        ],
        [
          5.770044,
          5.770044
        ],
        [
          5.827809,
          5.827809
        ],
        [
          5.885546,
          5.885546
        ],
        [
          5.943256,
          5.943256
        ],
        [
          6.000937,
          6.000937
        ],
        [
          6.058589,
          6.058589
        ],
        [
          6.116213,
          6.116213
        ],
        [
          6.17381,
          6.17381
        ],
        [
          6.231377,
          6.231377
        ],
        [
          6.288917,
          6.288917
        ],
        [
          6.346428,
          6.346428
        ],
        [
          6.403912,
          6.403912
        ],
        [
          6.461367,
          6.461367
        ],
        [
          6.518794,
          6.518794
        ],
        [
          6.576193,
          6.576193
        ],
        [
          6.633565,
          6.633565
        ],
        [
          6.690908,
          6.690908
        ],
        [
          6.748222,
          6.748222
        ],
        [
          6.805509,
          6.805509
        ],
        [
          6.862769,
          6.862769
        ],
        [
          6.92,
          6.92
        ],
        [
          7.03681,
          7.03681
        ],
        [
          7.153515,
          7.153515
        ],
        [
          7.270117,
          7.270117
        ],
        [
          7.386612,
          7.386612
        ],
        [
          7.503003,
          7.503003
        ],
        [
          7.61929,
          7.61929
        ],
        [
          7.735474,
          7.735474
        ],
        [
          7.851552,
          7.851552
        ],
        [
          7.967526,
          7.967526
        ],
        [
          8.083397,
          8.083397
        ],
        [
          8.199165,
          8.199165
        ],
        [
          8.314828,
          8.314828
        ],
        [
          8.430388,
          8.430388
        ],
        [
          8.545845,
          8.545845
        ],
        [
          8.661199,
          8.661199
        ],
        [
          8.77645,
          8.77645
        ],
        [
          8.891597,
          8.891597
        ],
        [
          9.006642,
          9.006642
        ],
        [
          9.121585,
          9.121585
        ],
        [
          9.236425,
          9.236425
        ],
        [
          9.351163,
          9.351163
        ],
        [
          9.465798,
          9.465798
        ],
        [
          9.580332,
          9.580332
        ],
        [
          9.694764,
          9.694764
        ],
        [
          9.809093,
          9.809093
        ],
        [
          9.923321,
          9.923321
        ],
        [
          10.037449,
          10.037449
        ],
        [
          10.151474,
          10.151474
        ],
        [
          10.265398,
          10.265398
        ],
        [
          10.379221,
          10.379221
        ],
        [
          10.492943,
          10.492943
        ],
        [
          10.606565,
          10.606565
        ],
        [
          10.720085,
          10.720085
        ],
        [
          10.833505,
          10.833505
        ],
        [
          10.946825,
          10.946825
        ],
        [
          11.060044,
          11.060044
        ],
        [
          11.173163,
          11.173163
        ],
        [
          11.286182,
          11.286182
        ],
        [
          11.399102,
          11.399102
        ],
        [
          11.511921,
          11.511921
        ],
        [
          11.624641,
          11.624641
        ],
        [
          11.737261,
          11.737261
        ],
        [
          11.849782,
          11.849782
        ],
        [
          11.962204,
          11.962204
        ],
        [
          12.074526,
          12.074526
        ],
        [
          12.18675,
          12.18675
        ],
        [
          12.298875,
          12.298875
        ],
        [
          12.410901,
          12.410901
        ],
        [
          12.522828,
          12.522828
        ],
        [
          12.634657,
          12.634657
        ],
        [
          12.746389,
          12.746389
        ],
        [
          12.858021,
          12.858021
        ],
        [
          12.969555,
          12.969555
        ],
        [
          13.080992,
          13.080992
        ],
        [
          13.192331,
          13.192331
        ],
        [
          13.303572,
          13.303572
        ],
        [
          13.414715,
          13.414715
        ],
        [
          13.525762,
          13.525762
        ],
        [
          13.636711,
          13.636711
        ],
        [
          13.747562,
          13.747562
        ],
        [
          13.858317,
          13.858317
        ],
        [
          13.968975,
          13.968975
        ],
        [
          14.079536,
          14.079536
        ],
        [
          14.19,
          14.19
        ]
      ]
    },
    "11": {
      "label": "d11",
      "values": [
        [
          2.4,
          2.4
        ],
        [
          2.397969,
          2.397969
        ],
        [
          2.395938,
          2.395938
        ],
        [
          2.393906,
          2.393906
        ],
        [
          2.391875,
          2.391875
        ],
        [
          2.389844,
          2.389844
        ],
        [
          2.387813,
          2.387813
        ],
        [
          2.385781,
          2.385781
        ],
        [
          2.38375,
          2.38375
        ],
        [
          2.381719,
          2.381719
        ],
        [
          2.379687,
          2.379687
        ],
        [
          2.377656,
          2.377656
        ],
        [
          2.375625,
          2.375625
        ],
        [
          2.373594,
          2.373594
        ],
        [
          2.371563,
          2.371563
        ],
        [
          2.369531,
          2.369531
        ],
        [
          2.3675,
          2.3675
        ],
        [
          2.365469,
          2.365469
        ],
        [
          2.363438,
          2.363438
        ],
        [
          2.361406,
          2.361406
        ],
        [
          2.359375,
          2.359375
        ],
        [
          2.357344,
          2.357344
        ],
        [
          2.355313,
          2.355313
        ],
        [
          2.353281,
          2.353281
        ],
        [
          2.35125,
          2.35125
        ],
        [
          2.349219,
          2.349219
        ],
        [
          2.347188,
          2.347188
        ],
        [
          2.345156,
          2.345156
        ],
        [
          2.343125,
          2.343125
        ],
        [
          2.341094,
          2.341094
        ],
        [
          2.339063,
          2.339063
        ],
        [
          2.337031,
          2.337031
        ],
        [
          2.335,
          2.335
        ],
        [
          2.332969,
          2.332969
        ],
        [
          2.330938,
          2.330938
        ],
        [
          2.328906,
          2.328906
        ],
        [
          2.326875,
          2.326875
        ],
        [
          2.324844,
          2.324844
        ],
        [
          2.322813,
          2.322813
        ],
        [
          2.320781,
          2.320781
        ],
        [
          2.31875,
          2.31875
        ],
        [
          2.316719,
          2.316719
        ],
        [
          2.314688,
          2.314688
        ],
        [
          2.312656,
          2.312656
        ],
        [
          2.310625,
          2.310625
        ],
        [
          2.308594,
          2.308594
        ],
        [
          2.306563,
          2.306563
        ],
        [
          2.304531,
          2.304531
        ],
        [
          2.3025,
          2.3025
        ],
        [
          2.300469,
          2.300469
        ],
        [
          2.298438,
          2.298438
        ],
        [
          2.296406,
          2.296406
        ],
        [
          2.294375,
          2.294375
        ],
        [
          2.292344,
          2.292344
        ],
        [
          2.290313,
          2.290313
        ],
        [
          2.288281,
          2.288281
        ],
        [
          2.28625,
          2.28625
        ],
        [
          2.284219,
          2.284219
        ],
        [
          2.282188,
          2.282188
        ],
        [
          2.280156,
          2.280156
        ],
        [
          2.278125,
          2.278125
        ],
        [
          2.276094,
          2.276094
        ],
        [
          2.274063,
          2.274063
        ],
        [
          2.272031,
          2.272031
        ],
        [
          2.27,
          2.27
        ],
        [
          2.266094,
          2.266094
        ],
        [
          2.262188,
          2.262188
        ],
        [
          2.258281,
          2.258281
        ],
        [
          2.254375,
          2.254375
        ],
        [
          2.250469,
          2.250469
        ],
        [
          2.246563,
          2.246563
        ],
        [
          2.242656,
          2.242656
        ],
        [
          2.23875,
          2.23875
        ],
        [
          2.234844,
          2.234844
        ],
        [
          2.230938,
          2.230938
        ],
        [
          2.227031,
          2.227031
        ],
        [
          2.223125,
          2.223125
        ],
        [
          2.219219,
          2.219219
        ],
        [
          2.215313,
          2.215313
        ],
        [
          2.211406,
          2.211406
        ],
        [
          2.2075,
          2.2075
        ],
        [
          2.203594,
          2.203594
        ],
        [
          2.199688,
          2.199688
        ],
        [
          2.195781,
          2.195781
        ],
        [
          2.191875,
          2.191875
        ],
        [
          2.187969,
          2.187969
        ],
        [
          2.184063,
          2.184063
        ],
        [
          2.180156,
          2.180156
        ],
        [
          2.17625,
          2.17625
        ],
        [
          2.172344,
          2.172344
        ],
        [
          2.168438,
          2.168438
        ],
        [
          2.164531,
          2.164531
        ],
        [
          2.160625,
          2.160625
        ],
        [
          2.156719,
          2.156719
        ],
        [
          2.152813,
          2.152813
        ],
        [
          2.148906,
          2.148906
        ],
        [
          2.145,
          2.145
        ],
        [
          2.141094,
          2.141094
        ],
        [
          2.137188,
          2.137188
        ],
        [
          2.133281,
          2.133281
        ],
        [
          2.129375,
          2.129375
        ],
        [
          2.125469,
          2.125469
        ],
        [
          2.121563,
          2.121563
        ],
        [
          2.117656,
          2.117656
        ],
        [
          2.11375,
          2.11375
        ],
        [
          2.109844,
          2.109844
        ],
        [
          2.105938,
          2.105938
        ],
        [
          2.102031,
          2.102031
        ],
        [
          2.098125,
          2.098125
        ],
        [
          2.094219,
          2.094219
        ],
        [
          2.090313,
          2.090313
        ],
        [
          2.086406,
          2.086406
        ],
        [
          2.0825,
          2.0825
        ],
        [
          2.078594,
          2.078594
        ],
        [
          2.074688,
          2.074688
        ],
        [
          2.070781,
          2.070781
        ],
        [
          2.066875,
          2.066875
        ],
        [
          2.062969,
          2.062969
        ],
        [
          2.059063,
          2.059063
        ],
        [
          2.055156,
          2.055156
        ],
        [
          2.05125,
          2.05125
        ],
        [
          2.047344,
          2.047344
        ],
        [
          2.043438,
          2.043438
        ],
        [
          2.039531,
          2.039531
        ],
        [
          2.035625,
          2.035625
        ],
        [
          2.031719,
          2.031719
        ],
        [
          2.027813,
          2.027813
        ],
        [
          2.023906,
          2.023906
        ],
        [
          2.02,
          2.02
        ]
      ]
    }
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
