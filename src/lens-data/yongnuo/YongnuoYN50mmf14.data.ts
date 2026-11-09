import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** CN 106249387 B, Example 2 (Shenzhen Yongnuo Photographic Equipment Co., Ltd.): f = 51.50 mm, F1.4, ω = 23.5°,
 * all spherical, 9 elements / 7 groups. Prescription Table 3 on PDF p. 10, focus Table 4 on p. 11, Fig. 3 section
 * and Fig. 4A aberrations on p. 17. No scale factor is applied; R, d, nd and νd follow the printed table. Row 9 is
 * the stop. Rows 18–19 are the printed 2 mm plate, kept as a rear plate with its printed 1 mm air gap to the image;
 * the table's final image row is misnumbered "12" and is not a surface. The engine EFL is 51.485 mm, 0.03 % below
 * the printed 51.50 mm; at infinity the paraxial focus falls 0.020 mm ahead of the printed image plane, which is kept.
 * Table 4 prints three states with only D(1), the gap after S17, changing: infinity, β = 0.05 with the object
 * 1036.73 mm from the first surface, and β = 0.15 at 350.08 mm. At those distances the model's magnification is
 * 0.0499 and 0.1502, and the paraxial focus falls 0.072 and 0.211 mm behind the printed plane; all kept as printed.
 * Fig. 4A prints Fno 1.4 and ω = 23.5°; the 23.5° chief ray lands at 21.63 mm, the full-frame corner. The stop
 * radius (17.54 mm) is derived from f/1.4 by the stop rule, not printed.
 * Semi-diameters are estimates guided by Fig. 3, which is drawn to scale (6.14 px/mm at the embedded 150 dpi; all 16
 * vertex crossings fall within about 1 px of the table), and set to pass the f/1.4 axial beam within the repo's
 * edge and gap rules, with one height on both faces of each element; the patent prints none. The S6–S7 air gap
 * (3.9 mm between R 33.66 and R 171.98 mm) leaves 0.15 mm at the 16.97 mm rim that the axial beam needs; Fig. 3
 * draws square-cut edges there, so checks.gapSagFrac is 0.962 instead of a taper. Fig. 3 draws L1 at about 19.7 mm
 * and L9 at about 16.5 mm, against the file's 21 and 14.72 mm.
 * Glass labels are catalog rows whose nd/νd equal the printed pairs; the production supplier is not known.
 * Probable match to the Yongnuo YN50mm F1.4 (Canon EF; Nikon F as YN50mm F1.4N E), announced in 2018: the
 * applicant is Yongnuo, and the lens is 9 elements / 7 groups, f/1.4, 0.15× maximum magnification. Example 1 of the
 * same patent (also 51.50 mm, F1.4, 9/7, β 0.15) fits the marketed specifications equally well; no Yongnuo section
 * drawing was found to separate them. Not a factory prescription.
 */
const LENS_DATA = {
  "layout": {
    "yScFill": 0.4
  },
  "schema": 2,
  "key": "yongnuo-yn-50mm-f14",
  "maker": "Yongnuo",
  "name": "YONGNUO YN 50mm f/1.4",
  "subtitle": "CN 106249387 B, Example 2 \u2014 probable match to the 2018 production lens",
  "catalog": {
    "specs": [
      "9 ELEMENTS / 7 GROUPS",
      "DESIGN f = 51.50 mm",
      "DESIGN F/1.4",
      "ALL SPHERICAL"
    ],
    "elementCount": 9,
    "groupCount": 7,
    "focalLengthMm": {
      "marketing": 50,
      "design": 51.5
    },
    "fNumber": {
      "marketing": 1.4,
      "design": 1.4
    },
    "lensMounts": ["canon-ef", "nikon-f"],
    "imageFormat": "135-full-frame",
    "closeFocusM": {
      "marketing": 0.45
    }
  },
  "source": {
    "patentNumber": "CN 106249387 B",
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "patentYear": 2019,
    "authors": [
      "Yuanhua Ye"
    ],
    "assignees": [
      "Shenzhen Yongnuo Photographic Equipment Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.883,
      "vd": 40.81,
      "glass": "TAFD30 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Thick high-index positive meniscus, concave to the object; the front element of the positive first group (patent L11)."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.804,
      "vd": 46.59,
      "glass": "S-LAH65V (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive meniscus, convex to the object; the stronger of the two first-group positives (patent L12)."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.6889,
      "vd": 31.18,
      "glass": "E-FD8 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Biconcave negative lens of the negative second group, the only negative element ahead of the stop; its glass sets the patent's conditions (4) and (5) (patent L21)."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.9004,
      "vd": 37.37,
      "glass": "TAFD37 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Weak high-index biconvex lens just ahead of the stop, closing the second group (patent L22)."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 2.001,
      "vd": 29.13,
      "glass": "TAFD55 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Index-2.0 biconvex lens just behind the stop, leading the first cemented pair of the rear group (patent L31).",
      "cemented": "L5 / L6"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.62,
      "vd": 36.3,
      "glass": "E-F2 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Biconcave flint closing the first cemented pair; its rear face is the strong concave surface ahead of the second pair (patent L32).",
      "cemented": "L5 / L6"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.7292,
      "vd": 54.67,
      "glass": "TAC8 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Thick equi-convex lanthanum-crown lens leading the second cemented pair (patent L33).",
      "cemented": "L7 / L8"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconcave Negative",
      "nd": 1.7552,
      "vd": 27.55,
      "glass": "E-FD4 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Dense-flint biconcave lens closing the second cemented pair, the achromatizing partner of L7 (patent L34).",
      "cemented": "L7 / L8"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.883,
      "vd": 40.81,
      "glass": "TAFD30 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "High-index biconvex rear element, ahead of the 35.5 mm air gap to the cover glass (patent L35)."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": -152.17,
      "d": 10,
      "medium": 1,
      "sd": 21
    },
    {
      "label": "2",
      "R": -74.48,
      "d": 0.2,
      "sd": 21
    },
    {
      "label": "3",
      "R": 42.51,
      "d": 3.2,
      "medium": 2,
      "sd": 17.859
    },
    {
      "label": "4",
      "R": 85.58,
      "d": 5,
      "sd": 17.859
    },
    {
      "label": "5",
      "R": -62.28,
      "d": 2.5,
      "medium": 3,
      "sd": 17.23
    },
    {
      "label": "6",
      "R": 33.66,
      "d": 3.9,
      "sd": 17.23
    },
    {
      "label": "7",
      "R": 171.98,
      "d": 2.5,
      "medium": 4,
      "sd": 16.97
    },
    {
      "label": "8",
      "R": -304.23,
      "d": 2.5,
      "sd": 16.97
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 9.8
    },
    {
      "label": "10",
      "R": 93.19,
      "d": 10,
      "medium": 5,
      "sd": 21.652
    },
    {
      "label": "11",
      "R": -35.38,
      "d": 2.8,
      "medium": 6,
      "sd": 21.652
    },
    {
      "label": "12",
      "R": 32.56,
      "d": 1.7,
      "sd": 21.652
    },
    {
      "label": "13",
      "R": 34.49,
      "d": 12.2,
      "medium": 7,
      "sd": 17.216
    },
    {
      "label": "14",
      "R": -34.49,
      "d": 2.5,
      "medium": 8,
      "sd": 17.216
    },
    {
      "label": "15",
      "R": 39.22,
      "d": 1.5,
      "sd": 17.216
    },
    {
      "label": "16",
      "R": 72.15,
      "d": 4,
      "medium": 9,
      "sd": 14.722
    },
    {
      "label": "17",
      "R": -101.48,
      "sd": 14.722
    }
  ],
  "focus": {
    "closeFocusM": 0.4704347,
    "published": [
      1,
      2
    ],
    "keyframes": [
      0,
      0.33002003901636334,
      1
    ],
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 1036.73,
        "distanceReference": "first-surface",
        "source": "CN 106249387 B, Example 2 focus table (Table 4), PDF p. 11"
      },
      {
        "zoomStation": 0,
        "keyframe": 2,
        "objectDistanceMm": 350.08,
        "distanceReference": "first-surface",
        "source": "CN 106249387 B, Example 2 focus table (Table 4), PDF p. 11"
      }
    ],
    "description": "PUBLISHED unit focus: CN 106249387 B, Example 2 prints three states: infinity, β = 0.05 with the object 1036.73 mm in front of the first surface, and β = 0.15 at 350.08 mm. Only D(1), the air gap from the last lens surface to the cover glass, changes (35.52 → 38.01 → 43.05 mm), so the whole lens moves 7.54 mm toward the object while the cover glass and image plane stay fixed. The closest state is 470.4 mm object to image, against Yongnuo's 0.45 m minimum focus. At the printed close spacings the paraxial focus falls 0.07 and 0.21 mm behind the printed image plane, which is kept as printed. Intermediate positions interpolate D(1) linearly."
  },
  "gaps": {
    "17": {
      "label": "D(1)",
      "values": [
        [
          35.5194,
          38.0062,
          43.0547
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 1.4,
    "fStops": [
      1.4,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22,
    "blades": 7
  },
  "rearPlates": [
    {
      "label": "GL",
      "thicknessMm": 2,
      "nd": 1.5168,
      "vd": 64.2,
      "gapAfterMm": 1,
      "source": "CN 106249387 B literal rear plate"
    }
  ],
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 47
  },
  "doublets": [
    {
      "text": "L5 / L6",
      "fromSurface": "10",
      "toSurface": "12"
    },
    {
      "text": "L7 / L8",
      "fromSurface": "13",
      "toSurface": "15"
    }
  ],
  "checks": {
    "gapSagFrac": 0.962
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
