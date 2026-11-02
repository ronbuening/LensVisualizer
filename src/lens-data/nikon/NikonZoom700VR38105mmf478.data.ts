import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** US5530593A first embodiment, Table1/Figure3; Grade B probable camera-lens family.
 * Literal39-102mm F4.08-8.05 distinct from marketed38-105mmf4-7.8. Twelve elements/ten groups.
 * Explicit source stop S12. One fixed-iris hypothesis consistent with rounded endpoint FNos;
 * middleFNo6.4032461643 is derived, not printed. Printed BF/gaps retained, no refocus.
 * Clear SDs are inferred from paraxial pupil/chief floors and figure topology. Initial S21
 * cap rejected for gap intrusion;11mm geometry branch frozen before tracing. Clipping retained.
 * Canonical infinity-only; service VR/focus topology does not establish motion laws.
 * Native scalar diffraction estimate, not independent phase or factory validation.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "nikon-zoom-700-vr-38-105mm-f4-78",
  "maker": "Nikon",
  "name": "NIKON 38-105mm f/4-7.8 (Nikon Zoom 700 VR)",
  "subtitle": "US 5,530,593 first embodiment; Grade B probable camera-lens family, literal 39-102mm reconstruction",
  "catalog": {
    "lensMounts": [
      "fixed-lens-camera"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 12,
    "groupCount": 10,
    "focalLengthMm": {
      "marketing": [
        38,
        105
      ],
      "design": [
        39,
        102
      ]
    },
    "fNumber": {
      "marketing": 4,
      "design": 4.08
    },
    "specs": [
      "Literal39–102mm F4.08–8.05; retail38–105mm f4–7.8",
      "Middle FNo6.403246 is derived",
      "Infinity-only; GradeB probable family",
      "Clear apertures inferred; constant maximum iris opening assumed across zoom; clipping retained"
    ]
  },
  "source": {
    "patentNumber": "US 5,530,593",
    "example": {
      "label": "Embodiment 1",
      "id": "1"
    },
    "patentYear": 1996,
    "authors": [
      "Atsushi Shibayama",
      "Susumu Sato"
    ],
    "assignees": [
      "Nikon Corporation"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconcave Negative",
      "nd": 1.80384,
      "vd": 33.9,
      "indexReference": "d",
      "glass": "Unmatched (literal patent d-line nd/vd; supplier and full dispersion unresolved)",
      "focalLengthMm": -32.49834248292522,
      "role": "Zoom group G1"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.6172,
      "vd": 54.0,
      "indexReference": "d",
      "glass": "Unmatched (literal patent d-line nd/vd; supplier and full dispersion unresolved)",
      "focalLengthMm": 32.48607565003863,
      "role": "Zoom group G1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.62041,
      "vd": 60.1,
      "indexReference": "d",
      "glass": "Unmatched (literal patent d-line nd/vd; supplier and full dispersion unresolved)",
      "focalLengthMm": 80.10450061692084,
      "role": "Zoom group G1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.80411,
      "vd": 46.5,
      "indexReference": "d",
      "glass": "Unmatched (literal patent d-line nd/vd; supplier and full dispersion unresolved)",
      "focalLengthMm": -10.454554158658768,
      "role": "Front subgroup G2F",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.74,
      "vd": 28.2,
      "indexReference": "d",
      "glass": "Unmatched (literal patent d-line nd/vd; supplier and full dispersion unresolved)",
      "focalLengthMm": 16.11894297452266,
      "role": "Front subgroup G2F",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "nd": 1.5168,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "Unmatched (literal patent d-line nd/vd; supplier and full dispersion unresolved)",
      "focalLengthMm": 38.35191832239908,
      "role": "Front subgroup G2F"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.5186,
      "vd": 69.9,
      "indexReference": "d",
      "glass": "Unmatched (literal patent d-line nd/vd; supplier and full dispersion unresolved)",
      "focalLengthMm": 34.673115378631344,
      "role": "Centered stabilizing subgroup G2R",
      "cemented": "D2"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.86074,
      "vd": 23.0,
      "indexReference": "d",
      "glass": "Unmatched (literal patent d-line nd/vd; supplier and full dispersion unresolved)",
      "focalLengthMm": -35.7685112984275,
      "role": "Centered stabilizing subgroup G2R",
      "cemented": "D2"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.5186,
      "vd": 69.9,
      "indexReference": "d",
      "glass": "Unmatched (literal patent d-line nd/vd; supplier and full dispersion unresolved)",
      "focalLengthMm": 37.37215087052252,
      "role": "Centered stabilizing subgroup G2R"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Positive Meniscus",
      "nd": 1.7552,
      "vd": 27.6,
      "indexReference": "d",
      "glass": "Unmatched (literal patent d-line nd/vd; supplier and full dispersion unresolved)",
      "focalLengthMm": 39.827842884483545,
      "role": "Rear group G3, infinity-only focus state"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Negative Meniscus",
      "nd": 1.84042,
      "vd": 43.3,
      "indexReference": "d",
      "glass": "Unmatched (literal patent d-line nd/vd; supplier and full dispersion unresolved)",
      "focalLengthMm": -24.835845391431647,
      "role": "Rear group G3, infinity-only focus state"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Negative Meniscus",
      "nd": 1.6968,
      "vd": 55.6,
      "indexReference": "d",
      "glass": "Unmatched (literal patent d-line nd/vd; supplier and full dispersion unresolved)",
      "focalLengthMm": -38.630349638329314,
      "role": "Rear group G3, infinity-only focus state"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": -114.155,
      "d": 1.5,
      "medium": 1,
      "sd": 9.0
    },
    {
      "label": "2",
      "R": 34.074,
      "d": 1.0,
      "sd": 9.0
    },
    {
      "label": "3",
      "R": 34.383,
      "d": 5.3,
      "medium": 2,
      "sd": 8.5
    },
    {
      "label": "4",
      "R": -45.27,
      "d": 0.1,
      "sd": 8.0
    },
    {
      "label": "5",
      "R": 30.065,
      "d": 2.6,
      "medium": 3,
      "sd": 8.0
    },
    {
      "label": "6",
      "R": 73.586,
      "sd": 7.5
    },
    {
      "label": "7",
      "R": -22.875,
      "d": 1.1,
      "medium": 4,
      "sd": 5.5
    },
    {
      "label": "8",
      "R": 13.576,
      "d": 3.1,
      "medium": 5,
      "sd": 5.5
    },
    {
      "label": "9",
      "R": -88.72,
      "d": 0.8,
      "sd": 6.0
    },
    {
      "label": "10",
      "R": -491.918,
      "d": 2.0,
      "medium": 6,
      "sd": 6.0
    },
    {
      "label": "11",
      "R": -19.079,
      "d": 2.0,
      "sd": 6.0
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.0
    },
    {
      "label": "13",
      "R": -14.37,
      "d": 5.7,
      "medium": 7,
      "sd": 5.5
    },
    {
      "label": "14",
      "R": -9.069,
      "d": 1.4,
      "medium": 8,
      "sd": 6.0
    },
    {
      "label": "15",
      "R": -13.774,
      "d": 0.1,
      "sd": 6.5
    },
    {
      "label": "16",
      "R": 70.726,
      "d": 2.7,
      "medium": 9,
      "sd": 6.5
    },
    {
      "label": "17",
      "R": -26.349,
      "sd": 6.0
    },
    {
      "label": "18",
      "R": -47.072,
      "d": 3.4,
      "medium": 10,
      "sd": 10.5
    },
    {
      "label": "19",
      "R": -18.922,
      "d": 2.2,
      "sd": 11.5
    },
    {
      "label": "20",
      "R": -17.796,
      "d": 1.3,
      "medium": 11,
      "sd": 11.5
    },
    {
      "label": "21",
      "R": -124.763,
      "d": 4.0,
      "sd": 11.0
    },
    {
      "label": "22",
      "R": -16.876,
      "d": 1.4,
      "medium": 12,
      "sd": 14.0
    },
    {
      "label": "23",
      "R": -46.779,
      "sd": 15.0
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 38.9998,
        "nominalFNumber": 4.08,
        "label": "Wide",
        "published": true
      },
      {
        "focalLengthMm": 69.9996,
        "nominalFNumber": 6.403246164317329,
        "label": "Middle (derived aperture)",
        "published": true
      },
      {
        "focalLengthMm": 101.9998,
        "nominalFNumber": 8.05,
        "label": "Tele",
        "published": true
      }
    ],
    "apertureModel": "fixed-iris"
  },
  "gaps": {
    "6": {
      "label": "D6",
      "values": [
        [
          3.2347,
          3.2347
        ],
        [
          10.3035,
          10.3035
        ],
        [
          17.0677,
          17.0677
        ]
      ]
    },
    "17": {
      "label": "D17",
      "values": [
        [
          15.0298,
          15.0298
        ],
        [
          7.2691,
          7.2691
        ],
        [
          3.1954,
          3.1954
        ]
      ]
    },
    "23": {
      "label": "BF",
      "values": [
        [
          8.9728,
          8.9728
        ],
        [
          31.0851,
          31.0851
        ],
        [
          48.8923,
          48.8923
        ]
      ]
    }
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Only the published infinity zoom prescriptions are modeled. The service manual identifies a rear focusing group and VR subgroup; no finite conjugate, focusing cam or decentering law is certified."
  },
  "aperture": {
    "fStops": [
      4.08,
      5.6,
      8.05,
      11,
      16
    ],
    "maxFNumber": 16
  },
  "layout": {
    "yScFill": 0.76
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
