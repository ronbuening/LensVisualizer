import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JPS50132921A sole prescription; early diamond-grip ML35 only, factory numbers unproved.
 * Uniform scale 0.35. Stop assumed strictly inside d7:9.56+9.56 native,3.346+3.346 mm.
 * Seidel coefficient-reference mismatch remains; stop is NOT moved after L5.
 * Printed BF 108.7 retained (38.045 mm). Reconstructed unit focus 0.3 m,41 keyframes.
 * Finite MTF not source-certified. Engineering rims; source R/d/nd/Vd unchanged; no sag override.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "yashica-ml-35mm-f28-early",
  "maker": "Yashica",
  "name": "YASHICA ML 35mm f/2.8 (early diamond-grip)",
  "subtitle": "JP S50-132921 A Sole numerical prescription, original page3 — qualified reconstruction",
  "catalog": {
    "imageFormat": "135-full-frame",
    "elementCount": 7,
    "groupCount": 6,
    "focalLengthMm": {
      "marketing": 35,
      "design": 35
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "specs": [
      "7 ELEMENTS / 6 GROUPS",
      "QUALIFIED PATENT-DERIVED RECONSTRUCTION",
      "FACTORY IDENTITY NOT PROVEN"
    ],
    "lensMounts": [
      "contax-yashica"
    ]
  },
  "source": {
    "patentNumber": "JP S50-132921 A",
    example: {"label": "Sole example", "id": null},
    "patentYear": 1975,
    "authors": [
      "Yoshisato Fujioka"
    ],
    "assignees": [
      "Yashica Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Meniscus Negative",
      "nd": 1.59181,
      "vd": 58.3,
      "indexReference": "d",
      "glass": "Unmatched (source index/Abbe pair; spectral surrogate, not factory melt)",
      "apd": false,
      "focalLengthMm": -57.414183670484995,
      "role": "Source-prescribed spherical component; isolated-in-air focal power is a diagnostic, not its in-system contribution."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.56384,
      "vd": 60.8,
      "indexReference": "d",
      "glass": "Unmatched (source index/Abbe pair; spectral surrogate, not factory melt)",
      "apd": false,
      "focalLengthMm": -29.472214517159177,
      "cemented": "D1",
      "role": "Source-prescribed spherical component; isolated-in-air focal power is a diagnostic, not its in-system contribution."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.713,
      "vd": 53.9,
      "indexReference": "d",
      "glass": "Unmatched (source index/Abbe pair; spectral surrogate, not factory melt)",
      "apd": false,
      "focalLengthMm": 28.01260195110375,
      "cemented": "D1",
      "role": "Source-prescribed spherical component; isolated-in-air focal power is a diagnostic, not its in-system contribution."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.6935,
      "vd": 53.4,
      "indexReference": "d",
      "glass": "Unmatched (source index/Abbe pair; spectral surrogate, not factory melt)",
      "apd": false,
      "focalLengthMm": 30.05868108792665,
      "role": "Source-prescribed spherical component; isolated-in-air focal power is a diagnostic, not its in-system contribution."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.71736,
      "vd": 29.5,
      "indexReference": "d",
      "glass": "Unmatched (source index/Abbe pair; spectral surrogate, not factory melt)",
      "apd": false,
      "focalLengthMm": -19.459840068215335,
      "role": "Source-prescribed spherical component; isolated-in-air focal power is a diagnostic, not its in-system contribution."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Meniscus Positive",
      "nd": 1.713,
      "vd": 53.9,
      "indexReference": "d",
      "glass": "Unmatched (source index/Abbe pair; spectral surrogate, not factory melt)",
      "apd": false,
      "focalLengthMm": 33.98728015658522,
      "role": "Source-prescribed spherical component; isolated-in-air focal power is a diagnostic, not its in-system contribution."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Meniscus Positive",
      "nd": 1.64085,
      "vd": 56.8,
      "indexReference": "d",
      "glass": "Unmatched (source index/Abbe pair; spectral surrogate, not factory melt)",
      "apd": false,
      "focalLengthMm": 58.83662858155777,
      "role": "Source-prescribed spherical component; isolated-in-air focal power is a diagnostic, not its in-system contribution."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 28.708049999999997,
      "d": 2.639,
      "sd": 11.81569,
      "medium": 1
    },
    {
      "label": "2",
      "R": 15.028999999999998,
      "d": 5.914999999999999,
      "sd": 11.81569
    },
    {
      "label": "3",
      "R": -60.833499999999994,
      "d": 2.1209999999999996,
      "sd": 10.10047,
      "medium": 2
    },
    {
      "label": "4",
      "R": 23.1504,
      "d": 9.936499999999999,
      "sd": 10.10047,
      "medium": 3
    },
    {
      "label": "5",
      "R": -119.52395,
      "d": 1.4629999999999999,
      "sd": 10.10047
    },
    {
      "label": "6",
      "R": 26.664399999999997,
      "d": 4.850999999999999,
      "sd": 9.0919,
      "medium": 4
    },
    {
      "label": "7",
      "R": -88.4093,
      "d": 3.346,
      "sd": 9.0919
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.346
    },
    {
      "label": "8",
      "R": -20.428449999999998,
      "d": 0.847,
      "sd": 7.57464,
      "medium": 5
    },
    {
      "label": "9",
      "R": 44.84865,
      "d": 2.359,
      "sd": 7.57464
    },
    {
      "label": "10",
      "R": -58.969049999999996,
      "d": 2.681,
      "sd": 8.5978,
      "medium": 6
    },
    {
      "label": "11",
      "R": -17.5,
      "d": 0.098,
      "sd": 8.5978
    },
    {
      "label": "12",
      "R": -1025.15735,
      "d": 2.8770000000000002,
      "sd": 9.39327,
      "medium": 7
    },
    {
      "label": "13",
      "R": -36.4077,
      "sd": 9.39327
    }
  ],
  "focus": {
    "closeFocusM": 0.3,
    "keyframes": [
      0,
      0.025,
      0.05,
      0.075,
      0.1,
      0.125,
      0.15,
      0.175,
      0.2,
      0.225,
      0.25,
      0.275,
      0.3,
      0.325,
      0.35,
      0.375,
      0.4,
      0.425,
      0.45,
      0.475,
      0.5,
      0.525,
      0.55,
      0.575,
      0.6,
      0.625,
      0.65,
      0.675,
      0.7,
      0.725,
      0.75,
      0.775,
      0.8,
      0.825,
      0.85,
      0.875,
      0.9,
      0.925,
      0.95,
      0.975,
      1
    ],
    "description": "Reconstructed unit focus to 0.3 m image-plane distance. Gaussian extension sampled in inverse distance, preserving the source infinity-plane residual. Not a recovered factory motion law; finite MTF is not source-certified."
  },
  "gaps": {
    "13": {
      "label": "BF",
      "values": [
        [
          38.045,
          38.14782374246634,
          38.252141424804464,
          38.35799152741056,
          38.46541400659795,
          38.574450371045245,
          38.68514376328018,
          38.79753904660453,
          38.91168289790511,
          39.02762390683415,
          39.145412681902016,
          39.265101964062126,
          39.386746748442036,
          39.51040441493342,
          39.63613486843123,
          39.76400068959505,
          39.894067297100506,
          40.02640312245431,
          40.16107979856575,
          40.298172363403054,
          40.43775948021586,
          40.579923675977895,
          40.72475159990219,
          40.872334304104996,
          41.02276754875062,
          41.17615213430932,
          41.33259426387936,
          41.49220593894053,
          41.65510539232476,
          41.82141756272382,
          41.9912746156468,
          42.16481651643687,
          42.34219166177084,
          42.523557577013705,
          42.70908168791745,
          42.89894217646703,
          43.093328932229994,
          43.29244461240951,
          43.49650582599604,
          43.705744460038844,
          43.92040916921235
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 2.8,
    "fStops": [
      2.8,
      4,
      5.6,
      8,
      11,
      16,
      22,
      32
    ],
    "maxFNumber": 32
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 64
  },
  "layout": {
    "scFill": 0.65,
    "yScFill": 0.3
  },
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "3",
      "toSurface": "5"
    }
  ]
} satisfies LensDataV2Input;

export default LENS_DATA;
