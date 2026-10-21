import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** JP2009058817A Example3, Sigma / Ai Hoshina.
 * Source equisolid projection; spherical13/9, source stop16, literal radii/materials.
 * Infinity-only. Gaussian BF adjustment +0.002868mm; no finite-focus production claim.
 * Inferred clear rims,71degree maximum rim-angle allowance for front rear surface.
 * Default90percent gap-sag allowance retained; no hidden trim.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "sigma-4-5mm-f2-8-ex-dc-circular-fisheye-hsm",
  "maker": "Sigma",
  "name": "SIGMA 4.5mm f/2.8 EX DC CIRCULAR FISHEYE HSM",
  "subtitle": "JP 2009-058817 A \u2014 Example 3; source equisolid projection",
  "catalog": {
    "lensMounts": [
      "sigma-sa",
      "canon-ef",
      "nikon-f",
      "pentax-k",
      "sony-a"
    ],
    "imageFormat": "aps-c",
    "elementCount": 13,
    "groupCount": 9,
    "focalLengthMm": {
      "marketing": 4.5,
      "design": 4.4463
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.9
    },
    "specs": [
      "13 ELEMENTS / 9 GROUPS",
      "EQUISOLID FISHEYE",
      "EXAMPLE 3"
    ]
  },
  "source": {
    "patentNumber": "JP 2009-058817 A",
    "patentYear": 2009,
    "authors": [
      "Ai Hoshina"
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
      "type": "Negative Meniscus",
      "nd": 1.8042,
      "vd": 46.5,
      "glass": "N-LASF44 (Schott equivalent)",
      "focalLengthMm": -23.367967
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.8042,
      "vd": 46.5,
      "glass": "N-LASF44 (Schott equivalent)",
      "focalLengthMm": -37.075277
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.8042,
      "vd": 46.5,
      "glass": "N-LASF44 (Schott equivalent)",
      "focalLengthMm": -43.381921
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.6727,
      "vd": 32.17,
      "glass": "E-FD5 (Hoya equivalent)",
      "focalLengthMm": 12.746252,
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.7725,
      "vd": 49.62,
      "glass": "N-LAF34 (Schott equivalent)",
      "focalLengthMm": -7.005525,
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.5481,
      "vd": 45.82,
      "glass": "E-FEL1 (Hoya equivalent)",
      "focalLengthMm": 11.394468,
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.62,
      "glass": "N-LAF34 (Schott equivalent)",
      "focalLengthMm": -23.669332,
      "cemented": "D2"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.62,
      "vd": 36.3,
      "glass": "E-F2 (Hoya equivalent)",
      "focalLengthMm": 9.663408,
      "cemented": "D3"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconcave Negative",
      "nd": 1.7725,
      "vd": 49.62,
      "glass": "N-LAF34 (Schott equivalent)",
      "focalLengthMm": -6.811078,
      "cemented": "D3"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "nd": 1.4875,
      "vd": 70.44,
      "glass": "H-QK3L (CDGM equivalent)",
      "focalLengthMm": 23.734468
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Biconcave Negative",
      "nd": 1.834,
      "vd": 37.35,
      "glass": "NBFD10 (Hoya equivalent)",
      "focalLengthMm": -13.645602,
      "cemented": "D4"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "glass": "FCD1 (Hoya equivalent)",
      "focalLengthMm": 21.068594,
      "cemented": "D4"
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "type": "Biconvex Positive",
      "nd": 1.4875,
      "vd": 70.44,
      "glass": "H-QK3L (CDGM equivalent)",
      "focalLengthMm": 29.673355
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 47.9,
      "sd": 21.5,
      "d": 1.57,
      "medium": 1
    },
    {
      "label": "2",
      "R": 13.3,
      "sd": 12.5,
      "d": 8.9003
    },
    {
      "label": "3",
      "R": 70.2924,
      "sd": 12.3,
      "d": 1,
      "medium": 2
    },
    {
      "label": "4",
      "R": 20.8029,
      "sd": 12.3,
      "d": 3.5279
    },
    {
      "label": "5",
      "R": -117.9734,
      "sd": 10.2,
      "d": 1,
      "medium": 3
    },
    {
      "label": "6",
      "R": 49.7243,
      "sd": 10.2,
      "d": 9.9659
    },
    {
      "label": "7",
      "R": 68.2353,
      "sd": 8.2,
      "d": 5.3065,
      "medium": 4
    },
    {
      "label": "8",
      "R": -9.5,
      "sd": 8.2,
      "d": 2,
      "medium": 5
    },
    {
      "label": "9",
      "R": 13.7294,
      "sd": 8.2,
      "d": 1.22
    },
    {
      "label": "10",
      "R": 10.9404,
      "sd": 8,
      "d": 7.7,
      "medium": 6
    },
    {
      "label": "11",
      "R": -10.9264,
      "sd": 8,
      "d": 5.8,
      "medium": 7
    },
    {
      "label": "12",
      "R": -33.4328,
      "sd": 8,
      "d": 3.4995
    },
    {
      "label": "13",
      "R": 17.0624,
      "sd": 5.5,
      "d": 3.5421,
      "medium": 8
    },
    {
      "label": "14",
      "R": -8.5,
      "sd": 5.5,
      "d": 1,
      "medium": 9
    },
    {
      "label": "15",
      "R": 14.5182,
      "sd": 5.5,
      "d": 3.4778
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 8.1141
    },
    {
      "label": "17",
      "R": 33.2812,
      "sd": 8.1,
      "d": 3.9322,
      "medium": 10
    },
    {
      "label": "18",
      "R": -17.0502,
      "sd": 8.1,
      "d": 0.15
    },
    {
      "label": "19",
      "R": -51.042,
      "sd": 8.1,
      "d": 1,
      "medium": 11
    },
    {
      "label": "20",
      "R": 14.7764,
      "sd": 8.1,
      "d": 4.3545,
      "medium": 12
    },
    {
      "label": "21",
      "R": -32.4221,
      "sd": 8.1,
      "d": 0.15
    },
    {
      "label": "22",
      "R": 23.5234,
      "sd": 8.5,
      "d": 3.7892,
      "medium": 13
    },
    {
      "label": "23",
      "R": -35.5854,
      "sd": 8.5
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000,
    "description": "Infinity-only source reconstruction. 1e15 is an infinity sentinel, not production minimum focus. Derived unit-focus trial had unresolved pupil behavior and is retained only as diagnostic evidence; manufacturer0.135m close focus is not modeled."
  },
  "gaps": {
    "23": {
      "label": "BF",
      "values": [
        [
          40.86276762628765,
          40.86276762628765
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 2.9,
    "fStops": [
      2.9,
      4,
      5.6,
      8,
      11,
      16,
      22
    ],
    "blades": 6,
    "maxFNumber": 22
  },
  "projection": {
    "kind": "fisheye-equisolid",
    "focalLengthMm": 4.4463,
    "fullFieldDeg": 180,
    "imageCircleMm": 12.576035524758984,
    "maxTraceFieldDeg": 90
  },
  "groups": [
    {
      "text": "G1 negative",
      "fromSurface": "1",
      "toSurface": "15"
    },
    {
      "text": "G2 positive",
      "fromSurface": "17",
      "toSurface": "23"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "7",
      "toSurface": "9"
    },
    {
      "text": "D2",
      "fromSurface": "10",
      "toSurface": "12"
    },
    {
      "text": "D3",
      "fromSurface": "13",
      "toSurface": "15"
    },
    {
      "text": "D4",
      "fromSurface": "19",
      "toSurface": "21"
    }
  ],
  "checks": {
    "maxRimAngleDeg": 71
  },
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
