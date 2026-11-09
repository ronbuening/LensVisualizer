import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** US 12,066,598 B2, Numerical Example 3 (Canon Inc.; Yuki Shinzato; priority JP 2021-019102, February 9, 2021):
 * f = 24.72 mm, F1.85, ω = 41.2°, image height 19.34 mm, overall length 81.00 mm, BF 11.00 mm; 11 elements /
 * 9 groups, one aspherical surface (S17). No scale factor is applied. Production correlation: Canon RF 24mm
 * f/1.8 Macro IS STM (August 2022), whose published construction diagram matches this example element by element.
 * R, d, nd, νd and the S17 coefficients follow the printed table without alteration; the grant and the application
 * US 2022/0252840 A1 print identical values. The table lists no cover glass or filter, so there are no rear plates.
 * Every refracting semi-diameter is half the printed effective diameter. Fig. 5 (22.80 px/mm on both axes at 300 dpi)
 * draws each element square-edged, about 5 % larger in radius than those diameters, with a flat land beyond the
 * smaller face. Those lands are drawn with rimExtensionSd out to the larger printed face of the same element or
 * doublet (S2 16.5, S7 9.715, S11 9.75, S14 12.035, S16 12.775, S20 16.73 mm); they do not change the trace.
 * The stop (S8) prints a 17.43 mm diameter, which agrees with F1.85 at real-ray height: an f/1.85 marginal ray
 * entering at EFL / 2N = 6.68 mm crosses S8 at 8.72 mm. The iris follows the stop rule for an ordinary prime and is
 * derived paraxially from F1.85 instead (radius 8.467 mm, about 3 % smaller).
 * Only d17 is printed variable (2.56 mm at infinity, 15.56 mm close); S1–S17 move toward the object. The patent
 * prints no close object distance; the printed close spacing focuses at 136.0 mm object to image at −0.51×.
 * The terminal gap is the printed BF 11.00 mm (paraxial back focus 11.0023 mm), not refocused.
 * The 19.34 mm image height is short of the 21.63 mm full-frame corner: the design leaves −10.6 % distortion at
 * full field for in-camera correction (¶0086–¶0087, Table 1), so imageCircleMm is 38.68 mm.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "canon-rf-24mm-f18-macro-is-stm",
  "maker": "Canon",
  "name": "CANON RF 24mm f/1.8 Macro IS STM",
  "subtitle": "US 12,066,598 B2, Example 3 \u2014 construction match to the production lens",
  "catalog": {
    "lensMounts": [
      "canon-rf"
    ],
    "imageFormat": "135-full-frame",
    "imageCircleMm": 38.68,
    "elementCount": 11,
    "groupCount": 9,
    "closeFocusM": {
      "marketing": 0.14
    },
    "focalLengthMm": {
      "marketing": 24,
      "design": 24.72
    },
    "fNumber": {
      "marketing": 1.8,
      "design": 1.85
    },
    "specs": [
      "11 ELEMENTS / 9 GROUPS",
      "DESIGN f = 24.72 mm",
      "DESIGN F/1.85",
      "1 ASPHERICAL SURFACE / 1 ELEMENT",
      "FRONT-GROUP FOCUS; 0.5× MAX"
    ]
  },
  "source": {
    "patentNumber": "US 12,066,598 B2",
    "example": {
      "label": "Numerical Example 3",
      "id": "3"
    },
    "patentYear": 2024,
    "authors": [
      "Yuki Shinzato"
    ],
    "assignees": [
      "Canon Inc."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -34.08,
      "role": "Negative front meniscus, concave to the image, forming the whole first unit; widens the field and moves the entrance pupil forward (¶0036)."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.91082,
      "vd": 35.3,
      "glass": "TAFD35 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 27.61,
      "role": "High-index biconvex lens opening the second unit; reconverges the beam after the 15.32 mm first air space."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.90043,
      "vd": 37.4,
      "glass": "TAFD37A (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 24.97,
      "role": "High-index positive member of the cemented doublet ahead of the stop.",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.72825,
      "vd": 28.5,
      "glass": "S-TIH10 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -22.58,
      "role": "Dense-flint negative member of the doublet ahead of the stop; achromatizes it, and its index step below L3 helps lower the Petzval sum (¶0049).",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5 — IS",
      "type": "Biconvex Positive",
      "nd": 1.6779,
      "vd": 55.3,
      "glass": "S-LAL12 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 81.14,
      "role": "Image-stabilizing lens just behind the stop (Fig. 5, IS); shifts across the axis to correct camera shake (¶0031, ¶0085)."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.85478,
      "vd": 24.8,
      "glass": "S-NBH56 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -15.2,
      "role": "Strong biconcave flint member of the cemented doublet behind the IS lens; its deeply curved front face (R −15.958) supplies the doublet's negative power.",
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.5,
      "glass": "S-FPL51 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 41.73,
      "apd": "inferred",
      "apdNote": "Canon's construction diagram marks this position as the lens's UD element, and its nd 1.49700 / νd 81.5 is a fluorophosphate UD-class glass (S-FPL51 catalog PgF 0.5375).",
      "role": "UD positive member of the doublet behind the stop; its Abbe spread against L6 (νd 81.5 against 24.8) corrects colour, including secondary spectrum (¶0050).",
      "cemented": "D2"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.91082,
      "vd": 35.3,
      "glass": "TAFD35 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 26.28,
      "role": "High-index biconvex lens carrying much of the positive power behind the stop."
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Positive Meniscus",
      "nd": 1.5311,
      "vd": 55.9,
      "glass": "E48R (ZEON polymer catalog equivalent; production material unspecified)",
      "focalLengthMm": 215.73,
      "role": "Plastic-molded aspherical meniscus, last element of the focusing group; its aspherical rear face (S17) corrects field curvature (¶0084)."
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Positive Meniscus",
      "nd": 1.72916,
      "vd": 54.7,
      "glass": "S-LAL18 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 143.27,
      "role": "Weak positive meniscus behind the variable gap d17; stays fixed during focusing."
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Negative Meniscus",
      "nd": 1.51742,
      "vd": 52.4,
      "glass": "S-NSL36 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -104.12,
      "role": "Fixed negative rear meniscus, concave to the object, forming the third unit; flattens the field (¶0038)."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 352.223,
      "d": 1.57,
      "sd": 16.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 16.734,
      "d": 15.32,
      "sd": 12.845,
      "rimExtensionSd": 16.5
    },
    {
      "label": "3",
      "R": 32.834,
      "d": 3.88,
      "sd": 10.27,
      "medium": 2
    },
    {
      "label": "4",
      "R": -101.361,
      "d": 2.45,
      "sd": 10.195
    },
    {
      "label": "5",
      "R": -173.026,
      "d": 3.85,
      "sd": 9.715,
      "medium": 3
    },
    {
      "label": "6",
      "R": -20.106,
      "d": 1,
      "sd": 9.605,
      "medium": 4
    },
    {
      "label": "7",
      "R": 92.116,
      "d": 2.92,
      "sd": 9.095,
      "rimExtensionSd": 9.715
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.4
    },
    {
      "label": "9",
      "R": 70.143,
      "d": 1.65,
      "sd": 8.12,
      "medium": 5
    },
    {
      "label": "10",
      "R": -252.397,
      "d": 3.51,
      "sd": 7.975
    },
    {
      "label": "11",
      "R": -15.958,
      "d": 1,
      "sd": 7.515,
      "rimExtensionSd": 9.75,
      "medium": 6
    },
    {
      "label": "12",
      "R": 71.9,
      "d": 3.99,
      "sd": 9.75,
      "medium": 7
    },
    {
      "label": "13",
      "R": -28.609,
      "d": 0.15,
      "sd": 9.495
    },
    {
      "label": "14",
      "R": 162.276,
      "d": 5.15,
      "sd": 11.4,
      "rimExtensionSd": 12.035,
      "medium": 8
    },
    {
      "label": "15",
      "R": -27.659,
      "d": 0.15,
      "sd": 12.035
    },
    {
      "label": "16",
      "R": -83.02,
      "d": 2.5,
      "sd": 12.4,
      "rimExtensionSd": 12.775,
      "medium": 9
    },
    {
      "label": "17A",
      "R": -48.642,
      "sd": 12.775,
      "asphere": {
        "K": 0,
        "A4": 1.70126e-05,
        "A6": -2.50325e-09,
        "A8": 1.03885e-10,
        "A10": -5.41918e-13,
        "A12": 1.15952e-15
      }
    },
    {
      "label": "18",
      "R": -79.703,
      "d": 2.09,
      "sd": 14.3,
      "medium": 10
    },
    {
      "label": "19",
      "R": -45.71,
      "d": 10.3,
      "sd": 14.5
    },
    {
      "label": "20",
      "R": -24.031,
      "d": 2.55,
      "sd": 15.205,
      "rimExtensionSd": 16.73,
      "medium": 11
    },
    {
      "label": "21",
      "R": -44.953,
      "d": 11,
      "sd": 16.73
    }
  ],
  "gaps": {
    "17A": {
      "label": "d17",
      "values": [
        [
          2.56,
          15.56
        ]
      ]
    }
  },
  "focus": {
    "closeFocusM": 0.1360021203856951,
    "published": [
      1
    ],
    "description": "PUBLISHED front-group focus: US 12,066,598 B2, Example 3 prints d17 at infinity and at close range (2.56 → 15.56 mm). Surfaces 1–17 (L1–L9, with the iris and the IS lens) move 13.00 mm toward the object as one unit; L10, L11 and the image plane stay fixed. The patent prints no close object distance or magnification: with the image plane at the printed 11.00 mm back focus, the close spacing focuses at 136.0 mm object to image at −0.51×, in line with Canon's 0.14 m minimum focus and 0.5× maximum magnification. Intermediate positions interpolate d17 linearly."
  },
  "aperture": {
    "nominalFNumber": 1.85,
    "fStops": [
      1.85,
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
    "blades": 9
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 82.4,
    "maxTraceFieldDeg": 41.2
  },
  "layout": {
    "yScFill": 0.4
  },
  "groups": [
    {
      "text": "Focus group",
      "fromSurface": "1",
      "toSurface": "17A"
    },
    {
      "text": "Fixed",
      "fromSurface": "18",
      "toSurface": "21"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "5",
      "toSurface": "7"
    },
    {
      "text": "D2",
      "fromSurface": "11",
      "toSurface": "13"
    }
  ]
} satisfies LensDataV2Input;
export default LENS_DATA;
