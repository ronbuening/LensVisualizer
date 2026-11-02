import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * Olympus Zuiko Auto-T 400mm f/6.3, from US 3,864,027 (Kenichi Harada, Olympus Optical), Example 1:
 * Table 1, repeated in claim 2; section in Fig. 1. Five air-spaced spherical singlets; surface 6 is flat.
 *
 * Scale: every length is the patent's f = 1 value times 400. The patent prints no length in millimetres
 * and names no production lens; the 400 mm scale is inferred (see the analysis). This is a patent design
 * associated with the product, not a confirmed factory prescription.
 *
 * Field: Table 1 prints 2ω = 6°10′ (half-field 3°05′); the abstract says 6°11′. Table 1 is kept.
 *
 * Image plane: computed. The patent prints t = B/f = 0.75 and no back focus. The last gap is the paraxial
 * back focus, 96.6325 mm (front vertex to image 300.36 mm), the origin of the curves in Figs. 4a-4d.
 *
 * Stop: inferred. The patent prints no position. Fig. 1 marks it at 0.683 of d6 and the traced field
 * curves match Fig. 4c for 0.67 to 0.69; it sits at 0.68, splitting 142.404 mm into 96.83472 + 45.56928 mm.
 * Its radius follows from paraxial entrance-pupil diameter = F/N at infinity.
 *
 * Semi-diameters: inferred from the Fig. 1 outline, not factory clear apertures. L1 is 1.08 times the
 * F/6.3 entrance-pupil radius; the others take the drawn height ratios 0.875 and 0.531. L5 is square-edged
 * as drawn, so both of its faces share one height.
 *
 * Glass: the patent prints n and ν without a line and names FK5, LaF7, F16, LAK04 and F5. The values are
 * read as d-line; the labels are catalog equivalents, supplier not established.
 *
 * Focus: unit focus, inferred. The patent prints no focus travel. Its Fig. 5 curves at 1/10× are reproduced
 * by extending the whole lens; the near gap is solved for 5.0 m object to image, the catalogue minimum focus.
 * The catalogue's straight helicoid fits this but does not say which elements move.
 *
 * Construction: one 1973 catalogue page prints 6 elements in 5 groups but draws five separate elements,
 * which this model matches; other listings say 5 elements in 5 groups. The model has five. No redesign
 * is claimed.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "olympus-zuiko-auto-t-400f63",
  "maker": "Olympus",
  "name": "OLYMPUS ZUIKO AUTO-T 400mm f/6.3",
  "subtitle": "US 3,864,027, Example 1 — telephoto design matched to the 1973 catalogue section",
  "visible": true,
  "catalog": {
    "lensMounts": [
      "olympus-om"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "5 ELEMENTS / 5 GROUPS",
      "DESIGN f = 400 mm",
      "DESIGN F/6.3",
      "ALL SPHERICAL",
      "TELEPHOTO RATIO 0.75"
    ],
    "elementCount": 5,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 400,
      "design": 400
    },
    "fNumber": {
      "marketing": 6.3,
      "design": 6.3
    }
  },
  "source": {
    "patentNumber": "US 3,864,027",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 1975,
    "authors": [
      "Kenichi Harada"
    ],
    "assignees": [
      "Olympus Optical Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.1,
      "indexReference": "d",
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 120.1030150490764,
      "role": "Positive crown; the front group's only positive element"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.7495,
      "vd": 35.2,
      "indexReference": "d",
      "glass": "J-LAF7 (HIKARI, coordinate equivalent)",
      "focalLengthMm": -243.2357245579875,
      "role": "High-index negative meniscus; the patent's spherical-aberration corrector"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Plano-Concave Negative",
      "nd": 1.5927,
      "vd": 35.6,
      "indexReference": "d",
      "glass": "FF5 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -1163.502615151004,
      "role": "Weak negative with a flat rear face; governs close-range field curvature"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.651,
      "vd": 56.2,
      "indexReference": "d",
      "glass": "S-LAL54Q (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -77.55105582604429,
      "role": "Strong negative behind the stop; supplies the rear group's telephoto power"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.60342,
      "vd": 38.0,
      "indexReference": "d",
      "glass": "F5 (SCHOTT, coordinate equivalent)",
      "focalLengthMm": 134.82261689482894,
      "role": "Positive flint paired with L4; leaves the rear group net negative"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 88.82,
      "d": 11.984,
      "sd": 34.285714285714285,
      "medium": 1
    },
    {
      "label": "2",
      "R": -164.196,
      "d": 10.772,
      "sd": 34.285714285714285
    },
    {
      "label": "3",
      "R": -127.756,
      "d": 7.456,
      "sd": 30.0,
      "medium": 2
    },
    {
      "label": "4",
      "R": -437.64,
      "d": 2.024,
      "sd": 30.0
    },
    {
      "label": "5",
      "R": -689.608,
      "d": 8.488,
      "sd": 30.0,
      "medium": 3
    },
    {
      "label": "6",
      "R": "flat",
      "d": 96.83472,
      "sd": 30.0
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 45.56928
    },
    {
      "label": "7",
      "R": -51.62,
      "d": 3.668,
      "sd": 18.205714285714286,
      "medium": 4
    },
    {
      "label": "8",
      "R": 2361.968,
      "d": 11.712,
      "sd": 18.205714285714286
    },
    {
      "label": "9",
      "R": 507.02,
      "d": 5.22,
      "sd": 18.205714285714286,
      "medium": 5
    },
    {
      "label": "10",
      "R": -96.528,
      "sd": 18.205714285714286
    }
  ],
  "focus": {
    "closeFocusM": 5,
    "description": "Unit focus: the whole lens moves forward and only the back focus changes, by 39.99 mm at the 5 m minimum focus. The patent prints no focus travel; the motion is inferred from its Fig. 5 curves at 1/10× magnification, which extending Example 1 as a unit reproduces. At the 400 mm scale that magnification falls at 5.0 m object to image, the catalogue minimum focus. The same catalogue lists a straight helicoid for focusing, which fits unit movement without proving it. The infinity back focus is the computed paraxial value; the patent prints none."
  },
  "gaps": {
    "10": {
      "label": "BF",
      "values": [
        [
          96.6325,
          136.619
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 6.3,
    "fStops": [
      6.3,
      8,
      11,
      16,
      22,
      32
    ],
    "maxFNumber": 32
  },
  "groups": [
    {
      "text": "F (+)",
      "fromSurface": "1",
      "toSurface": "6"
    },
    {
      "text": "R (−)",
      "fromSurface": "7",
      "toSurface": "10"
    }
  ],
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 6.166666666666667,
    "maxTraceFieldDeg": 3.0833333333333335
  },
  "layout": {
    "yScFill": 0.38
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
