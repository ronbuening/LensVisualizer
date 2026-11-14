import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 4,293,197 A (Kobayashi and Okudaira, Asahi Kogaku Kogyo), Example 1, associated with the SMC Pentax-M* 300mm
 * f/4 (1981). The association rests on construction (eight elements in seven groups), focal length, aperture, field
 * and timing, and on Asahi's section drawing of the A* 300mm f/4, which shares the M*'s published specifications.
 * This is a patent design, not a confirmed factory prescription; Fig. 1 serves Examples 1 to 3, so the example
 * itself is not proven.
 * Scale: the patent is normalized to f = 100. Every printed R and d is multiplied by exactly 3 for f = 300 mm
 * (computed EFL 300.21 mm, 100.07 at patent scale). All surfaces are spherical, so no coefficient transform applies.
 * Printed: R, d, N, ν, F/4, viewing angle ±4.5°, telephoto ratio 0.60 and the three condition values, which the
 * model reproduces to rounding (telephoto ratio 0.603). The patent prints no back focus.
 * Cemented doublet: the table lists r10 = r11 = 7.12 with d10 = 0; the model merges the two rows into the single
 * cemented surface 10/11, adding no air.
 * Image plane: the final gap is the computed paraxial back focus, 39.813 mm (13.271 at patent scale), so the image
 * lies 181.113 mm behind S1.
 * Stop: the patent says only that the diaphragm sits near the intermediate group and draws none. The model places it
 * 3.6 mm ahead of S9, 84.0 mm behind S1, splitting d8 into 41.28 + 3.6 mm; its radius is set by the paraxial
 * entrance pupil, F/N. Asahi's A* drawing shows the stop just ahead of the doublet.
 * Semi-diameters are inferred, none is printed. They are estimated from Fig. 1 (300 dpi; 6.14 px per model mm from
 * the S1 to S16 vertex span) and floor-checked by real-ray trace: 39, 37 and 31 mm for L1, L2 and L4; 34 mm for L3's
 * flat front, whose concave rear ends at 30.6 mm (29.7 mm axial beam) with a land out to the drawn 34 mm blank;
 * 12 mm for the doublet; 16 mm for L7; 18.3 and 19.3 mm for the two faces of L8. No rim cuts.
 * Glass labels are catalog rows equal to the printed N and ν; the production supplier is not known.
 * Field: the model keeps the patent's ±4.5°; Asahi lists an 8.3° angle of view for the retail lens.
 * Focus: the patent names no focusing group or motion and prints the infinity state only, so no gap varies. The
 * 4 m minimum focus is Asahi's retail figure and is not modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-m-star-300mm-f4",
  "maker": "Pentax",
  "name": "PENTAX SMC M* 300mm f/4",
  "subtitle": "US 4,293,197 A, Example 1 — construction correlation with the 1981 production lens",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 8,
    "groupCount": 7,
    "focalLengthMm": {
      "marketing": 300,
      "design": 300
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    },
    "specs": [
      "8 ELEMENTS / 7 GROUPS",
      "DESIGN f = 300 mm",
      "DESIGN F/4",
      "ALL SPHERICAL",
      "PATENT f = 100 SCALED × 3"
    ],
    "closeFocusM": {
      "marketing": 4
    }
  },
  "source": {
    "patentNumber": "US 4,293,197 A",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 1981,
    "authors": [
      "Koichi Kobayashi",
      "Sadao Okudaira"
    ],
    "assignees": [
      "Asahi Kogaku Kogyo Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.3,
      "focalLengthMm": 160.0851391151891,
      "glass": "K-PFK80 (SUMITA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "Asahi's lens booklet says the A* 300mm f/4, which shares this lens's 8-element, 7-group construction and specifications, uses special glass; the printed 1.49700 / 81.3 is a fluorophosphate crown of the anomalous-dispersion class, though neither source names this element.",
      "role": "Biconvex front collector in low-dispersion crown; the largest element and the first of the positive front group."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.3,
      "focalLengthMm": 196.60245436729716,
      "glass": "K-PFK80 (SUMITA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "Asahi's lens booklet says the A* 300mm f/4, which shares this lens's 8-element, 7-group construction and specifications, uses special glass; the printed 1.49700 / 81.3 is a fluorophosphate crown of the anomalous-dispersion class, though neither source names this element.",
      "role": "Positive meniscus, convex to the object, in the same low-dispersion crown; shares the front group's converging power."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.8061,
      "vd": 40.9,
      "focalLengthMm": -92.90055257987268,
      "glass": "J-LASF03 (HIKARI catalog equivalent; production supplier unspecified)",
      "role": "Nearly plano-concave negative of the front group; achromatizes the three crowns, and its shape factor is the patent's condition (1)."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.3,
      "focalLengthMm": 116.8214298453459,
      "glass": "K-PFK80 (SUMITA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "Asahi's lens booklet says the A* 300mm f/4, which shares this lens's 8-element, 7-group construction and specifications, uses special glass; the printed 1.49700 / 81.3 is a fluorophosphate crown of the anomalous-dispersion class, though neither source names this element.",
      "role": "Thick positive meniscus closing the front group, in the third low-dispersion crown; the strongest front element."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.79952,
      "vd": 42.2,
      "focalLengthMm": -17.292314045269563,
      "glass": "S-LAH52 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Biconcave front half of the negative cemented intermediate group; condition (2) bounds its front radius.",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.5927,
      "vd": 35.3,
      "focalLengthMm": 29.58629798681934,
      "glass": "S-FTM16 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Biconvex rear half of the cemented intermediate group; the doublet as a whole stays negative.",
      "cemented": "D1"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.883,
      "vd": 40.8,
      "focalLengthMm": -57.468858584925,
      "glass": "S-LAH58 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Negative meniscus, concave to the object; opens the weak rear group, and its rear radius enters condition (3)."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.69895,
      "vd": 30.1,
      "focalLengthMm": 57.03047809701486,
      "glass": "S-TIM35 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Biconvex rear element; with L7 forms the weak rear group that holds the telephoto ratio and corrects distortion."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 85.35,
      "d": 11.37,
      "sd": 39,
      "medium": 1
    },
    {
      "label": "2",
      "R": -1121.4,
      "d": 0.09,
      "sd": 39
    },
    {
      "label": "3",
      "R": 81.93,
      "d": 9.24,
      "sd": 37,
      "medium": 2
    },
    {
      "label": "4",
      "R": 488.28,
      "d": 5.64,
      "sd": 37
    },
    {
      "label": "5",
      "R": -1005.51,
      "d": 4.92,
      "sd": 34,
      "medium": 3
    },
    {
      "label": "6",
      "R": 81.09,
      "d": 0.09,
      "sd": 30.6,
      "rimExtensionSd": 34
    },
    {
      "label": "7",
      "R": 42.21,
      "d": 11.37,
      "sd": 31,
      "medium": 4
    },
    {
      "label": "8",
      "R": 140.79,
      "d": 41.28,
      "sd": 31
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.6
    },
    {
      "label": "9",
      "R": -41.91,
      "d": 3.33,
      "sd": 12,
      "medium": 5
    },
    {
      "label": "10/11",
      "R": 21.36,
      "d": 5.43,
      "sd": 12,
      "medium": 6
    },
    {
      "label": "12",
      "R": -88.68,
      "d": 35.13,
      "sd": 12
    },
    {
      "label": "13",
      "R": -46.26,
      "d": 2.28,
      "sd": 16,
      "medium": 7
    },
    {
      "label": "14",
      "R": -535.5,
      "d": 1.92,
      "sd": 16
    },
    {
      "label": "15",
      "R": 179.52,
      "d": 5.61,
      "sd": 18.3,
      "medium": 8
    },
    {
      "label": "16",
      "R": -50.58,
      "d": 39.81295531541666,
      "sd": 19.3
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "The patent names no focusing group or motion and prints the infinity state only, so the lens is modeled at infinity with no focus movement. Asahi's retail minimum focus of 4 m is not modeled."
  },
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
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
    "fullFieldDeg": 9,
    "maxTraceFieldDeg": 4.5
  },
  "layout": {
    "yScFill": 0.36
  },
  "groups": [
    {
      "text": "Front",
      "fromSurface": "1",
      "toSurface": "8"
    },
    {
      "text": "Intermediate",
      "fromSurface": "9",
      "toSurface": "12"
    },
    {
      "text": "Rear",
      "fromSurface": "13",
      "toSurface": "16"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "9",
      "toSurface": "12"
    }
  ]
} satisfies LensDataV2Input;
export default LENS_DATA;
