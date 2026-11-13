import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** CN 110146970 B, Example 1 (Shenzhen Yongnuo Electric Appliance Co., Ltd.): f = 84.67 mm, all spherical,
 * 9 elements / 8 groups. Prescription on PDF p. 9, focus table on p. 10, Fig. 1 section, Figs. 2A–2B aberrations.
 * No scale factor is applied. R, d, nd and νd (d-line, ¶0117) follow the printed table without alteration.
 * Source S10 is the stop; S19–S20 are the printed 2.2 mm cover glass, kept as a rear plate with its printed 1 mm
 * air gap to the image. The engine EFL is 84.747 mm, 0.09 % above the printed 84.67 mm (Examples 2 and 3 show
 * the same offset); the printed image plane sits 0.018 mm behind the paraxial focus at infinity and is kept.
 * Fig. 2A prints a 23.5425 mm entrance-pupil radius, which sets the nominal f-number 84.747 / 47.085 = 1.7999;
 * the stop radius (14.04 mm) is derived by the stop rule, not printed. Fig. 2B prints a 13.669° half-field,
 * which reaches about 21.0 mm image height (97 % of the full-frame corner).
 * Semi-diameters are estimated from Fig. 1, which is drawn to scale (17.23 px/mm at 300 dpi from the vertex
 * spacing; the L11 front arc confirms the same vertical scale), and floor-checked by real-ray trace; the patent
 * prints none. Fig. 1 reads L11 29.8, L12 24.1, L13 front 22.1, L14 18.0, L21 16.0, L31 14.7, L32 12.9, L33 11.6
 * and L34 14.0 mm. L11 is held at 29 mm, the radius of Yongnuo's 58 mm filter thread. L13's front is 22.1 mm,
 * stepping down to the 19 mm cemented interface; Fig. 1 draws a flat flange and a square step there, which the
 * diagram can only draw as a taper (no land is allowed on a cemented face). L14 is square-cut at 19 mm because
 * the wide-open axial beam at the printed 697 mm close state reaches 18.8 mm at the interface. L12 (24 mm), L21
 * (17), L31 (15), L32 (12.9), L33 (12) and L34 (14) follow the figure within reading error. Every element except
 * L13 keeps one height on both faces.
 * Glass labels are catalog rows whose nd/νd equal the printed pairs; the production supplier is not known.
 * Probable match to the YN85mm F1.8S DF DSM (Sony E, 2020): ¶0110 names an 85mm F1.8 mirrorless lens, and
 * Yongnuo's 9/8 construction drawing shows the same element sequence, the ED element at L14 and the single
 * focusing lens ahead of the stop. The drawing does not separate Example 1 from Examples 2–3, and its shaded
 * high-index position (L31) is not Example 1's highest-index glass. Not a factory prescription.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "yongnuo-yn-85mm-f18s-df-dsm",
  "maker": "Yongnuo",
  "name": "YONGNUO YN 85mm f/1.8 S DF DSM",
  "subtitle": "CN 110146970 B, Example 1 \u2014 probable match to the 2020 production lens",
  "catalog": {
    "lensMounts": [
      "sony-fe"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "9 ELEMENTS / 8 GROUPS",
      "DESIGN f = 84.67 mm",
      "DESIGN F/1.8",
      "ALL SPHERICAL",
      "1 ED ELEMENT"
    ],
    "elementCount": 9,
    "groupCount": 8,
    "closeFocusM": {
      "marketing": 0.8
    },
    "focalLengthMm": {
      "marketing": 85,
      "design": 84.67
    },
    "fNumber": {
      "marketing": 1.8,
      "design": 1.7998650289768992
    }
  },
  "source": {
    "patentNumber": "CN 110146970 B",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 2023,
    "authors": [
      "Yuanhua Ye",
      "Yongsheng Zhuang",
      "Jiannan Zhuang",
      "Qiyun Zhu"
    ],
    "assignees": [
      "Shenzhen Yongnuo Electric Appliance Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L11",
      "diagramLabel": "L11",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.8213,
      "vd": 42.73,
      "focalLengthMm": 87.11796126315882,
      "glass": "MP-TAFD51-50 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "High-index positive meniscus front element, convex to the object; the main collector of the fixed first group."
    },
    {
      "id": 2,
      "name": "L12",
      "diagramLabel": "L12",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.53775,
      "vd": 74.7,
      "focalLengthMm": 98.06865524256378,
      "glass": "S-FPM3 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Low-dispersion crown positive meniscus, convex to the object; shares the first group's convergence with L11."
    },
    {
      "id": 3,
      "name": "L13",
      "diagramLabel": "L13",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.8061,
      "vd": 33.27,
      "focalLengthMm": -36.25875717344259,
      "glass": "NBFD15 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "High-index flint negative meniscus, nearly flat in front, leading the cemented doublet; the flint partner of the ED element L14.",
      "cemented": "L13 / L14"
    },
    {
      "id": 4,
      "name": "L14",
      "diagramLabel": "L14",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "focalLengthMm": 71.00434147564626,
      "glass": "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "Yongnuo's construction drawing marks this position as the ED element, and the printed nd/νd equal the FCD1 / S-FPL51 fluorophosphate class.",
      "role": "ED positive meniscus closing the cemented doublet; corrects the first group's axial colour against L13.",
      "cemented": "L13 / L14"
    },
    {
      "id": 5,
      "name": "L21",
      "diagramLabel": "L21",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.6127,
      "vd": 58.7169,
      "focalLengthMm": -72.33828431763945,
      "glass": "BSM4 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Thin, nearly plano-concave focusing element (the whole second group); moves 14.5 mm toward the image for close focus."
    },
    {
      "id": 6,
      "name": "L31",
      "diagramLabel": "L31",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "nd": 1.7865,
      "vd": 50,
      "focalLengthMm": 47.10658519312321,
      "glass": "YGH52 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "High-index, nearly plano-convex element just behind the stop; the strongest positive element of the rear group."
    },
    {
      "id": 7,
      "name": "L32",
      "diagramLabel": "L32",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.5955,
      "vd": 38.77,
      "focalLengthMm": -313.3207348906547,
      "glass": "PBM18Y (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Weak negative meniscus, convex to the object, 0.15 mm behind L31; the meniscus of the patent's condition (6)."
    },
    {
      "id": 8,
      "name": "L33",
      "diagramLabel": "L33",
      "label": "Element 8",
      "type": "Positive Meniscus",
      "nd": 1.7555,
      "vd": 25.07,
      "focalLengthMm": 307.76387161566765,
      "glass": "TPH55 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Weak dense-flint positive meniscus, concave to the object; trims the colour of the rear group."
    },
    {
      "id": 9,
      "name": "L34",
      "diagramLabel": "L34",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.72825,
      "vd": 28.41,
      "focalLengthMm": -82.38258015860343,
      "glass": "SF10 (SCHOTT catalog equivalent; production supplier unspecified)",
      "role": "Negative meniscus, concave to the object, 15 mm behind L33; the last lens, flattening the field ahead of the 17.9 mm back focus."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 58.558,
      "d": 9.48,
      "sd": 29,
      "medium": 1
    },
    {
      "label": "2",
      "R": 298.95,
      "d": 0.394,
      "sd": 29
    },
    {
      "label": "3",
      "R": 41.031,
      "d": 8.337,
      "sd": 24,
      "medium": 2
    },
    {
      "label": "4",
      "R": 171.722,
      "d": 1.17,
      "sd": 24
    },
    {
      "label": "5",
      "R": 412.741,
      "d": 1.5,
      "sd": 22.1,
      "medium": 3
    },
    {
      "label": "6",
      "R": 27.251,
      "d": 8.09,
      "sd": 19,
      "medium": 4
    },
    {
      "label": "7",
      "R": 107.846,
      "sd": 19
    },
    {
      "label": "8",
      "R": -442.29,
      "d": 1.4,
      "sd": 17,
      "medium": 5
    },
    {
      "label": "9",
      "R": 49.317,
      "sd": 17
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.26
    },
    {
      "label": "11",
      "R": 36.369,
      "d": 4.83,
      "sd": 15,
      "medium": 6
    },
    {
      "label": "12",
      "R": 1864.782,
      "d": 0.15,
      "sd": 15
    },
    {
      "label": "13",
      "R": 24.546,
      "d": 1.55,
      "sd": 12.9,
      "medium": 7
    },
    {
      "label": "14",
      "R": 21.181,
      "d": 5.47,
      "sd": 12.9
    },
    {
      "label": "15",
      "R": -122.605,
      "d": 3.17,
      "sd": 12,
      "medium": 8
    },
    {
      "label": "16",
      "R": -81.169,
      "d": 15,
      "sd": 12
    },
    {
      "label": "17",
      "R": -22.324,
      "d": 1.448,
      "sd": 14,
      "medium": 9
    },
    {
      "label": "18",
      "R": -36.525,
      "d": 14.718,
      "sd": 14
    }
  ],
  "focus": {
    "closeFocusM": 0.800397,
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 697,
        "distanceReference": "first-surface",
        "source": "CN 110146970 B, Example 1 focus table, PDF p. 10"
      }
    ],
    "description": "PUBLISHED inner focus: CN 110146970 B, Example 1 prints D(1) and D(2) at infinity and at 0.8 m (D(1) 2.95 → 17.45 mm, D(2) 17.28 → 2.78 mm), with the object 697 mm in front of the first surface (800.4 mm object to image, Yongnuo's 0.8 m minimum focus). The single negative element L21 moves 14.5 mm toward the image; the first group, the stop, the rear group and the image plane stay fixed. At the printed close spacings the paraxial focus falls 0.18 mm behind the printed image plane, which is kept as printed. Intermediate positions interpolate the gaps linearly.",
    "published": [
      1
    ]
  },
  "gaps": {
    "7": {
      "label": "D(1)",
      "values": [
        [
          2.95,
          17.45
        ]
      ]
    },
    "9": {
      "label": "D(2)",
      "values": [
        [
          17.28,
          2.78
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 1.7998650289768992,
    "fStops": [
      1.8,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ],
    "blades": 7
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 27.338
  },
  "rearPlates": [
    {
      "label": "GL",
      "thicknessMm": 2.2,
      "nd": 1.5168,
      "vd": 64.2,
      "gapAfterMm": 1,
      "glass": "H-K9L (CDGM catalog equivalent; cover-glass material not named by the patent)",
      "source": "CN 110146970 B Example 1, surfaces 19\u201320, PDF p. 9"
    }
  ],
  "groups": [
    {
      "text": "GR1",
      "fromSurface": "1",
      "toSurface": "7"
    },
    {
      "text": "GR2 FOCUS",
      "fromSurface": "8",
      "toSurface": "9"
    },
    {
      "text": "GR3",
      "fromSurface": "11",
      "toSurface": "18"
    }
  ],
  "doublets": [
    {
      "text": "L13 / L14",
      "fromSurface": "5",
      "toSurface": "7"
    }
  ],
  "layout": {
    "scFill": 0.55,
    "yScFill": 0.3
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
