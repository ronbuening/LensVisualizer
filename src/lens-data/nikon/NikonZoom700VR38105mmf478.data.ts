import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 5,530,593, Embodiment 1 (Table 1, Figure 3): a patent design associated with the Nikon Zoom 700 VR, also sold
 * as the Zoom-Touch 105 VR, not a confirmed factory prescription. Nikon does not link the patent to the camera.
 * Kept at the patent's scale, f = 39-102 mm, F/4.08-8.05, H = 21.6 mm, with no scaling to the marketed 38-105mm f/4-7.8.
 * 12 spherical elements in 10 groups: G1 three singlets; G2 is GF (cemented L4 + L5, then L6), the stop and GR
 * (cemented L7 + L8, then L9); G3 three singlets. GF and GR move together in this embodiment.
 * R, d, nd and νd are printed values. The stop is printed as surface 12, 2.00 mm from S11 and S13.
 * d6, d17 and B.f are printed at f = 38.9998, 69.9996 and 101.9998 mm and are kept. The eight stations marked
 * published: false are inferred: d6 and d17 follow monotone curves in log f, geometric steps in f, and G3 is solved
 * to hold the paraxial image on the image plane. They model the cam; they are not Nikon's.
 * Aperture: the printed ends imply stop radii of 4.990 and 4.988 mm, so one constant iris of about 4.99 mm is used,
 * sized at F/4.08. The middle f/6.403 and the inferred f-numbers are computed from it, not printed. f/16 is a model
 * control, not a sourced camera value.
 * Table 1 prints wide 2ω = 58.20°, but the model gives 57.19° at H = 21.6 mm and Embodiments 2-5 agree with their own
 * tables within 0.04°, so 58.20 is probably a misprint of 57.20. The printed KT/Z = 0.363 also looks misprinted
 * (model 0.670).
 * The patent prints no clear apertures: sd values follow Figure 3, which is isotropic within about 3 %, with flat
 * lands on S2, S20 and S22 as drawn. Cemented faces take no land, so the L4 and L8 edges slant where the figure steps.
 * S21 stays 0.2 mm under the drawing to keep the air gap to S22 open, and S22 sits 0.2 mm over it to clear the image
 * circle.
 * Focus is static at infinity: the patent moves G3 toward the image but prints no close state, and closeFocusM rests
 * on a single hobby reference page. GR is centered, with no decentering modeled. The fixed flare stopper SF has no
 * data and is not modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "nikon-zoom-700-vr-38-105mm-f4-78",
  "maker": "Nikon",
  "name": "NIKON 38-105mm f/4-7.8 (Nikon Zoom 700 VR)",
  "subtitle": "US 5,530,593, Embodiment 1 — design 39-102 mm F/4.08-8.05 for the marketed 38-105 mm f/4-7.8",
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
      "12 ELEMENTS / 10 GROUPS",
      "DESIGN f = 39-102 mm",
      "DESIGN F/4.08-8.05",
      "ALL SPHERICAL"
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
      "glass": "E-LAFH2 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -32.49834248292522,
      "role": "Negative front element of G1"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.6172,
      "vd": 54.0,
      "indexReference": "d",
      "glass": "K-SSK1 (SUMITA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 32.48607565003863,
      "role": "Main positive element of G1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.62041,
      "vd": 60.1,
      "indexReference": "d",
      "glass": "J-SK16 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 80.10450061692084,
      "role": "Rear positive meniscus of G1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.80411,
      "vd": 46.5,
      "indexReference": "d",
      "glass": "TAF3D (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -10.454554158658768,
      "role": "Negative front of doublet C1 in GF",
      "cemented": "C1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.74,
      "vd": 28.2,
      "indexReference": "d",
      "glass": "FD3 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 16.11894297452266,
      "role": "Positive rear of doublet C1 in GF",
      "cemented": "C1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "nd": 1.5168,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "N-BK7 (Schott catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 38.35191832239908,
      "role": "Positive meniscus closing GF ahead of the stop"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.5186,
      "vd": 69.9,
      "indexReference": "d",
      "glass": "J-PKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 34.673115378631344,
      "role": "Thick positive front of doublet C2, first element of stabilizing group GR",
      "cemented": "C2"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.86074,
      "vd": 23.0,
      "indexReference": "d",
      "glass": "J-SFH2 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -35.7685112984275,
      "role": "Flint rear of doublet C2, the color partner in GR",
      "cemented": "C2"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.5186,
      "vd": 69.9,
      "indexReference": "d",
      "glass": "J-PKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 37.37215087052252,
      "role": "Positive rear element of stabilizing group GR"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Positive Meniscus",
      "nd": 1.7552,
      "vd": 27.6,
      "indexReference": "d",
      "glass": "SF4 (Schott catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 39.827842884483545,
      "role": "Positive meniscus at the front of negative group G3"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Negative Meniscus",
      "nd": 1.84042,
      "vd": 43.3,
      "indexReference": "d",
      "glass": "Unmatched (840433 lanthanum flint; no public catalog row)",
      "focalLengthMm": -24.835845391431647,
      "role": "Strongest negative element of G3"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Negative Meniscus",
      "nd": 1.6968,
      "vd": 55.6,
      "indexReference": "d",
      "glass": "S-LAL14 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -38.630349638329314,
      "role": "Negative rear meniscus of G3, the largest element"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": -114.155,
      "d": 1.5,
      "medium": 1,
      "sd": 12.8
    },
    {
      "label": "2",
      "R": 34.074,
      "d": 1.0,
      "sd": 11.8,
      "rimExtensionSd": 12.8
    },
    {
      "label": "3",
      "R": 34.383,
      "d": 5.3,
      "medium": 2,
      "sd": 11.7
    },
    {
      "label": "4",
      "R": -45.27,
      "d": 0.1,
      "sd": 11.7
    },
    {
      "label": "5",
      "R": 30.065,
      "d": 2.6,
      "medium": 3,
      "sd": 9.9
    },
    {
      "label": "6",
      "R": 73.586,
      "sd": 9.9
    },
    {
      "label": "7",
      "R": -22.875,
      "d": 1.1,
      "medium": 4,
      "sd": 7.4
    },
    {
      "label": "8",
      "R": 13.576,
      "d": 3.1,
      "medium": 5,
      "sd": 6.6
    },
    {
      "label": "9",
      "R": -88.72,
      "d": 0.8,
      "sd": 6.6
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
      "sd": 5.6
    },
    {
      "label": "14",
      "R": -9.069,
      "d": 1.4,
      "medium": 8,
      "sd": 5.6
    },
    {
      "label": "15",
      "R": -13.774,
      "d": 0.1,
      "sd": 6.1
    },
    {
      "label": "16",
      "R": 70.726,
      "d": 2.7,
      "medium": 9,
      "sd": 6.1
    },
    {
      "label": "17",
      "R": -26.349,
      "sd": 6.1
    },
    {
      "label": "18",
      "R": -47.072,
      "d": 3.4,
      "medium": 10,
      "sd": 9.9
    },
    {
      "label": "19",
      "R": -18.922,
      "d": 2.2,
      "sd": 9.9
    },
    {
      "label": "20",
      "R": -17.796,
      "d": 1.3,
      "medium": 11,
      "sd": 9.7,
      "rimExtensionSd": 11.0
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
      "sd": 11.3,
      "rimExtensionSd": 13.4
    },
    {
      "label": "23",
      "R": -46.779,
      "sd": 13.4
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
        "focalLengthMm": 42.9934,
        "nominalFNumber": 4.42,
        "label": "Inferred 43 mm",
        "published": false
      },
      {
        "focalLengthMm": 47.3958,
        "nominalFNumber": 4.7773,
        "label": "Inferred 47 mm",
        "published": false
      },
      {
        "focalLengthMm": 52.249,
        "nominalFNumber": 5.1531,
        "label": "Inferred 52 mm",
        "published": false
      },
      {
        "focalLengthMm": 57.5994,
        "nominalFNumber": 5.5486,
        "label": "Inferred 58 mm",
        "published": false
      },
      {
        "focalLengthMm": 63.4975,
        "nominalFNumber": 5.9649,
        "label": "Inferred 63 mm",
        "published": false
      },
      {
        "focalLengthMm": 69.9996,
        "nominalFNumber": 6.403246164317329,
        "label": "Middle (derived aperture)",
        "published": true
      },
      {
        "focalLengthMm": 76.9083,
        "nominalFNumber": 6.8358,
        "label": "Inferred 77 mm",
        "published": false
      },
      {
        "focalLengthMm": 84.4981,
        "nominalFNumber": 7.2621,
        "label": "Inferred 84 mm",
        "published": false
      },
      {
        "focalLengthMm": 92.8371,
        "nominalFNumber": 7.6714,
        "label": "Inferred 93 mm",
        "published": false
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
          4.2055,
          4.2055
        ],
        [
          5.2868,
          5.2868
        ],
        [
          6.454,
          6.454
        ],
        [
          7.6883,
          7.6883
        ],
        [
          8.9749,
          8.9749
        ],
        [
          10.3035,
          10.3035
        ],
        [
          11.6944,
          11.6944
        ],
        [
          13.2751,
          13.2751
        ],
        [
          15.0558,
          15.0558
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
          13.5168,
          13.5168
        ],
        [
          12.109,
          12.109
        ],
        [
          10.792,
          10.792
        ],
        [
          9.5532,
          9.5532
        ],
        [
          8.3822,
          8.3822
        ],
        [
          7.2691,
          7.2691
        ],
        [
          6.2377,
          6.2377
        ],
        [
          5.2268,
          5.2268
        ],
        [
          4.2202,
          4.2202
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
          12.0927,
          12.0927
        ],
        [
          15.4155,
          15.4155
        ],
        [
          18.958,
          18.958
        ],
        [
          22.7381,
          22.7381
        ],
        [
          26.774,
          26.774
        ],
        [
          31.0851,
          31.0851
        ],
        [
          35.4471,
          35.4471
        ],
        [
          39.9124,
          39.9124
        ],
        [
          44.4253,
          44.4253
        ],
        [
          48.8923,
          48.8923
        ]
      ]
    }
  },
  "focus": {
    "closeFocusM": 0.75,
    "description": "The patent moves G3 toward the image to focus but prints no close state, so this model holds infinity focus at every zoom position and no group moves with focus. The 0.75 m closest distance rests on a single hobby reference page."
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
  "groups": [
    {
      "text": "G1 (+)",
      "fromSurface": "1",
      "toSurface": "6"
    },
    {
      "text": "G2 (+) / GF + GR",
      "fromSurface": "7",
      "toSurface": "17"
    },
    {
      "text": "G3 (−)",
      "fromSurface": "18",
      "toSurface": "23"
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "7",
      "toSurface": "9"
    },
    {
      "text": "C2",
      "fromSurface": "13",
      "toSurface": "15"
    }
  ],
  "layout": {
    "yScFill": 0.76
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
