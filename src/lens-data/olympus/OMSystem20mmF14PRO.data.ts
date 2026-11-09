import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** JP 2023-32222 A, Numerical Example 1 (Sigma Corporation; Jumpei Nakamoto, Takehisa Koyama): f = 20.27 mm,
 * F1.43, 2ω = 59.01°, Y = 11.15 mm, total length 80.26 mm; 11 elements / 10 groups, aspheres on S12, S19 and S20.
 * No scale factor is applied. R, d, nd and νd are as printed (d-line). The patent's sag equation is the standard
 * (1+K) form and every K is 0.
 * Production match: OM Digital Solutions' construction drawing for the M.Zuiko Digital ED 20mm F1.4 PRO (press
 * release of 4 November 2021, p. 2) matches Example 1 element by element: Super HR at L1/L4, ED at L2/L7/L8,
 * Super ED at L3, aspherical lenses L6/L10. Neither company has confirmed the attribution; Sigma is the applicant.
 * Stop: the printed S9 plane; its radius is derived from F1.43 (the patent prints no iris diameter).
 * Rear plate: the optical filter FL (S23–S24, 4.14 mm) is in rearPlates with the printed 15 mm gap ahead of it and
 * BF 1.3929 behind it. The computed paraxial back focus is 1.3933 mm; the printed BF is kept.
 * Focus: the printed infinity and 0.025× states (d16, d18) are kept. A third state at OM's 0.25 m minimum focus is
 * derived, not printed: L9 alone moves (the patent's focusing group) to d16 3.019 / d18 4.461 mm, solved paraxially for
 * 250 mm object to image on the fixed image plane, which gives −0.109× (OM: 0.11×).
 * Semi-diameters are not printed; they are estimated from Figure 1 (printed page 25), read at 787 dpi: 28.30 px/mm
 * along the axis from the S1–S22 vertex span, 28.95 px/mm across it from arc fits to S4, S10 and S18 and the stop
 * tick, and floor-checked by real-ray trace at all three focus states. Figure lands: L2's rear face ends at the
 * figure's 10.6 mm and its land runs out to the 13.8 mm edge; L3's rear land runs to 10.9 mm. Inferred
 * cuts on S10, S18 and S22 sit at the figure's cap end where the wide-open beams allow (S10, q = 0.78) and just
 * outside the beams at every focus state elsewhere (S18 at 10.43 mm, S22 at 10.65 mm, against the figure's 9.4 and
 * 10.0 mm).
 * checks.gapSagFrac 1 admits L2's 10.6 mm rear face beside L3's 10.9 mm front rim (S4/S5); the faces come within
 * the gap but do not cross, and the figure draws the two elements touching.
 * Glass labels are catalog rows whose nd/νd equal the printed values; the production supplier is not known. */
const LENS_DATA = {
  "schema": 2,
  "key": "om-system-mzuiko-digital-ed-20mm-f14-pro",
  "maker": "Olympus",
  "name": "OM SYSTEM M.ZUIKO DIGITAL ED 20mm f/1.4 PRO",
  "subtitle": "JP 2023-32222 A, Example 1 \u2014 element-by-element match to the production lens",
  "catalog": {
    "lensMounts": [
      "micro-four-thirds"
    ],
    "imageFormat": "four-thirds",
    "imageCircleMm": 22.3,
    "elementCount": 11,
    "groupCount": 10,
    "closeFocusM": {
      "marketing": 0.25
    },
    "focalLengthMm": {
      "marketing": 20,
      "design": 20.27
    },
    "fNumber": {
      "marketing": 1.4,
      "design": 1.43
    },
    "specs": [
      "11 ELEMENTS / 10 GROUPS",
      "DESIGN f = 20.27 mm",
      "DESIGN F/1.43",
      "3 ASPHERICAL SURFACES / 2 ELEMENTS",
      "1 SUPER ED / 3 ED ELEMENTS"
    ]
  },
  "source": {
    "patentNumber": "JP 2023-32222 A",
    "example": {
      "label": "Numerical Example 1",
      "id": "1"
    },
    "patentYear": 2023,
    "authors": [
      "Jumpei Nakamoto",
      "Takehisa Koyama"
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
      "type": "Positive Meniscus",
      "nd": 2.00069,
      "vd": 25.46,
      "glass": "TAFD40 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 133.26695515786787,
      "role": "Weak positive front meniscus forming subgroup G1a; offsets the negative distortion and field curvature of the negative front group. A Super HR element in OM's drawing."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "glass": "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -42.43223721776146,
      "apd": "inferred",
      "apdNote": "OM's construction drawing marks this element ED, and its printed nd 1.49700 / νd 81.61 equals HOYA's FCD1 fluorophosphate crown.",
      "role": "First negative element of subgroup G1b, which supplies the front group's negative power and keeps its lateral colour low."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.437,
      "vd": 95.1,
      "glass": "FCD100 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -57.12516692804971,
      "apd": "inferred",
      "apdNote": "OM's construction drawing marks this element Super ED, and its printed nd 1.43700 / νd 95.10 equals HOYA's FCD100.",
      "role": "Second negative element of subgroup G1b, nested behind L2; its very low dispersion holds the subgroup's average Abbe number at 88.35."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 2.0509,
      "vd": 26.94,
      "glass": "TAFD65 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 54.47108789711136,
      "role": "Positive element forming subgroup G1c just ahead of the stop; lowers the axial beam height entering the iris. A Super HR element in OM's drawing."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.77047,
      "vd": 29.74,
      "glass": "NBFD29 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -15.790822014241082,
      "role": "Biconcave flint front member of the cemented doublet D1 that opens the positive second group behind the stop.",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive (1\u00d7 Asph)",
      "nd": 1.7645,
      "vd": 49.1,
      "glass": "L-LAH91 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 21.991339995336865,
      "role": "Biconvex rear member of D1 with an aspherical rear face (S12); corrects spherical aberration of the wide-open beam behind the stop.",
      "cemented": "D1"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.59282,
      "vd": 68.62,
      "glass": "FCD515 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 32.92398496136109,
      "apd": "inferred",
      "apdNote": "OM's construction drawing marks this element ED, and its printed nd 1.59282 / νd 68.62 matches HOYA's FCD515 phosphate crown.",
      "role": "Thick biconvex element carrying much of the second group's positive power with low-dispersion glass."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.59282,
      "vd": 68.62,
      "glass": "FCD515 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 37.119948233897844,
      "apd": "inferred",
      "apdNote": "OM's construction drawing marks this element ED, and its printed nd 1.59282 / νd 68.62 matches HOYA's FCD515 phosphate crown.",
      "role": "Biconvex rear element of the fixed positive second group, ahead of the focusing element."
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.73037,
      "vd": 32.23,
      "glass": "NBFD32 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -34.613382188315605,
      "role": "Thin negative meniscus forming the third group, the single-element focusing group that moves toward the image for close focus."
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconvex Positive (2\u00d7 Asph)",
      "nd": 1.8061,
      "vd": 40.73,
      "glass": "M-NBFD130 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 32.054909587411146,
      "role": "Double-aspherical positive element opening the fixed rear group, where the chief ray is high; corrects the astigmatism, lateral colour and distortion the focusing element introduces."
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Negative Meniscus",
      "nd": 1.48749,
      "vd": 70.44,
      "glass": "FC5 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -73.29568746826821,
      "role": "Weak negative meniscus closing the rear group, ahead of the camera-side filter."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 69.44,
      "d": 2.25,
      "sd": 16,
      "medium": 1
    },
    {
      "label": "2",
      "R": 142.53,
      "d": 0.4,
      "sd": 16
    },
    {
      "label": "3",
      "R": 33.58,
      "d": 1.2,
      "sd": 13.8,
      "medium": 2
    },
    {
      "label": "4",
      "R": 12.8,
      "d": 6.23,
      "sd": 10.6,
      "rimExtensionSd": 13.8
    },
    {
      "label": "5",
      "R": -100,
      "d": 1,
      "sd": 10.9,
      "medium": 3
    },
    {
      "label": "6",
      "R": 33.37,
      "d": 2,
      "sd": 10.2,
      "rimExtensionSd": 10.9
    },
    {
      "label": "7",
      "R": 75.33,
      "d": 2.35,
      "sd": 10.1,
      "medium": 4
    },
    {
      "label": "8",
      "R": -234.61,
      "d": 5.07,
      "sd": 10.1
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 4.31
    },
    {
      "label": "10",
      "R": -21.49,
      "d": 1,
      "sd": 12.5,
      "rimCutDepthMm": 2.34,
      "medium": 5
    },
    {
      "label": "11",
      "R": 28.61,
      "d": 5.8,
      "sd": 12.5,
      "medium": 6
    },
    {
      "label": "12A",
      "R": -37.19,
      "d": 0.25,
      "sd": 12.5,
      "asphere": {
        "K": 0,
        "A4": 3.3395e-05,
        "A6": 2.8273e-08,
        "A8": -7.132e-11,
        "A10": 1.473e-14,
        "A12": -6.1036e-16,
        "A14": 0,
        "A16": 0
      }
    },
    {
      "label": "13",
      "R": 186.84,
      "d": 7.25,
      "sd": 13.8,
      "medium": 7
    },
    {
      "label": "14",
      "R": -21.48,
      "d": 0.15,
      "sd": 13.8
    },
    {
      "label": "15",
      "R": 37.87,
      "d": 6.39,
      "sd": 13.5,
      "medium": 8
    },
    {
      "label": "16",
      "R": -49.23,
      "sd": 13.5
    },
    {
      "label": "17",
      "R": 41.69,
      "d": 0.8,
      "sd": 11.1,
      "medium": 9
    },
    {
      "label": "18",
      "R": 15.61,
      "sd": 11.1,
      "rimCutDepthMm": 4
    },
    {
      "label": "19A",
      "R": 35.41,
      "d": 4.65,
      "sd": 11.1,
      "medium": 10,
      "asphere": {
        "K": 0,
        "A4": 1.8844e-05,
        "A6": -1.2744e-08,
        "A8": 5.3154e-10,
        "A10": 9.6383e-13,
        "A12": -1.5147e-14,
        "A14": 1.8815e-17,
        "A16": 0
      }
    },
    {
      "label": "20A",
      "R": -90,
      "d": 0.15,
      "sd": 11.1,
      "asphere": {
        "K": 0,
        "A4": 1.6312e-05,
        "A6": -1.2038e-07,
        "A8": 1.8437e-09,
        "A10": -9.7269e-12,
        "A12": 3.5206e-14,
        "A14": -1.8061e-16,
        "A16": 4.7379e-19
      }
    },
    {
      "label": "21",
      "R": 30.44,
      "d": 1,
      "sd": 11.1,
      "medium": 11
    },
    {
      "label": "22",
      "R": 16.26,
      "d": 15,
      "sd": 11.1,
      "rimCutDepthMm": 3.97
    }
  ],
  "rearPlates": [
    {
      "label": "FL",
      "thicknessMm": 4.14,
      "nd": 1.51633,
      "vd": 64.14,
      "gapAfterMm": 1.3929,
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "source": "JP 2023-32222 A Example 1, surfaces 23\u201324, printed pages 13\u201314"
    }
  ],
  "gaps": {
    "16": {
      "label": "d16",
      "values": [
        [
          1.4,
          1.7647,
          3.019
        ]
      ]
    },
    "18": {
      "label": "d18",
      "values": [
        [
          6.08,
          5.7153,
          4.461
        ]
      ]
    }
  },
  "focus": {
    "closeFocusM": 0.25,
    "keyframes": [
      0,
      0.285732,
      1
    ],
    "published": [
      1
    ],
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 794.6816,
        "distanceReference": "first-surface",
        "source": "JP 2023-32222 A, Example 1, variable-spacing table (printed page 14): magnification 0.025, d0 = 794.6816 mm"
      }
    ],
    "description": "PUBLISHED inner focus: JP 2023-32222 A, Example 1 prints infinity and 0.025\u00d7 (d16 1.4000 \u2192 1.7647, d18 6.0800 \u2192 5.7153 mm, object 794.68 mm ahead of the first surface, 0.875 m object to image). Only the negative meniscus L9 (third group) moves toward the image; the other groups, the iris and the image plane stay fixed, and BF stays 1.3929 mm. The close end at OM's 0.25 m minimum focus is derived, not printed: L9 travels on to d16 3.019 / d18 4.461 mm (1.62 mm in all), solved for focus on the fixed image plane, which gives 0.109\u00d7 against OM's 0.11\u00d7. Positions between states interpolate the gaps linearly."
  },
  "aperture": {
    "nominalFNumber": 1.43,
    "fStops": [
      1.43,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ],
    "maxFNumber": 16,
    "blades": 9
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 59.01,
    "maxTraceFieldDeg": 29.505
  },
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "8"
    },
    {
      "text": "G2",
      "fromSurface": "10",
      "toSurface": "16"
    },
    {
      "text": "G3",
      "fromSurface": "17",
      "toSurface": "18"
    },
    {
      "text": "G4",
      "fromSurface": "19A",
      "toSurface": "22"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "10",
      "toSurface": "12A"
    }
  ],
  "checks": {
    "gapSagFrac": 1
  },
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
