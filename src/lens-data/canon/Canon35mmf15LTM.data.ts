import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Patent-derived research model of the Canon 35mm f/1.5.
 * Source numerical cells are unchanged except the explicitly declared uniform scale.
 * Glass labels name catalog rows matching the source nd/vd pairs, used for dispersion;
 * the 1950s production melts remain unidentified.
 * Semi-diameters are estimated from the cross-section figures of JP S39-8148 Y1 and
 * US 2,926,564 (scaled from vertex spacings) and floor-checked by real-ray trace; they,
 * the iris calibration and the terminal conjugate distance are reconstructions,
 * not measured factory dimensions. See paired analysis and audit.
 * The patent prints only the infinity prescription; focus is modeled as unit focus (back focus 20.143 → 21.458 mm at
 * Canon's 1 m minimum), as for Canon's other thread-mount rangefinder lenses.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "canon-35f15-ltm",
  "maker": "Canon",
  "name": "CANON 35mm f/1.5",
  "subtitle": "JP S39-8148 Y1, Sole example — Canon Camera Co., Inc.",
  "visible": true,
  "catalog": {
    "specs": [
      "8 ELEMENTS / 4 GROUPS",
      "DESIGN f = 35.05 mm",
      "DESIGN F/1.4",
      "ALL SPHERICAL"
    ],
    "elementCount": 8,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 35,
      "design": 35
    },
    "fNumber": {
      "marketing": 1.5,
      "design": 1.4
    },
    "lensMounts": [
      "leica-ltm"
    ],
    "imageFormat": "135-full-frame"
  },
  "source": {
    "patentNumber": "JP S39-8148 Y1",
    "example": { "label": "Sole example", "id": null },
    "patentYear": 1964,
    "authors": [
      "Jiro Mukai"
    ],
    "assignees": [
      "Canon Camera Co., Inc."
    ],
    "errata": [
      {
        "status": "unresolved",
        "note": "Both Japanese tables and US 2,926,564 Claim 2 print R11 = +2.149; the US description table prints −2.149. The model uses the printed positive value, which reproduces the nominal normalized f = 1 (calculated f ≈ 1.001349). The negative value gives f ≈ 1.669302, or 58.4256 mm at the same ×35 scale."
      },
      {
        "status": "unresolved",
        "note": "The patent specifies f/1.4 and a 63° full field; its plots extend to a 32° half field. The marketed lens is f/1.5 with a 64° full field. The positive-radius inequalities do not specify whether signed radii or magnitudes are intended, so the model follows the signed numerical table."
      }
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "diagramLabel": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.6398,
      "vd": 34.6,
      "indexReference": "d",
      "focalLengthMm": -108.399192,
      "glass": "E-FD7 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Negative front member of the first cemented doublet; catalog-equivalent glass, production melt unidentified."
    },
    {
      "id": 2,
      "name": "L2",
      "diagramLabel": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.691,
      "vd": 54.8,
      "indexReference": "d",
      "focalLengthMm": 32.562689,
      "glass": "K-LaK9 (SUMITA catalog equivalent; production supplier unspecified)",
      "role": "Positive rear member of the first cemented doublet; catalog-equivalent glass, production melt unidentified."
    },
    {
      "id": 3,
      "name": "L3",
      "diagramLabel": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.744,
      "vd": 44.9,
      "indexReference": "d",
      "focalLengthMm": 49.483499,
      "glass": "LAF2 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Positive front member of the second cemented doublet; catalog-equivalent glass, production melt unidentified."
    },
    {
      "id": 4,
      "name": "L4",
      "diagramLabel": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.64769,
      "vd": 33.9,
      "indexReference": "d",
      "focalLengthMm": -31.451035,
      "glass": "SF2 (Schott catalog equivalent; production supplier unspecified)",
      "role": "Negative rear member of the second cemented doublet, bordering the central diaphragm gap; catalog-equivalent glass, production melt unidentified."
    },
    {
      "id": 5,
      "name": "L5",
      "diagramLabel": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.6425,
      "vd": 58.09,
      "indexReference": "d",
      "focalLengthMm": 37.400408,
      "glass": "LAK6 (SUMITA catalog equivalent; production supplier unspecified)",
      "role": "Positive front member of the rear cemented triplet; catalog-equivalent glass, production melt unidentified."
    },
    {
      "id": 6,
      "name": "L6",
      "diagramLabel": "L6",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 1.5927,
      "vd": 35.4,
      "indexReference": "d",
      "focalLengthMm": -16.288861,
      "glass": "FF5 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Negative middle member of the rear cemented triplet; catalog-equivalent glass, production melt unidentified."
    },
    {
      "id": 7,
      "name": "L7",
      "diagramLabel": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.713,
      "vd": 53.89,
      "indexReference": "d",
      "focalLengthMm": 31.476193,
      "glass": "S-LAL8 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive rear member of the rear cemented triplet; catalog-equivalent glass, production melt unidentified."
    },
    {
      "id": 8,
      "name": "L8",
      "diagramLabel": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.72,
      "vd": 50.31,
      "indexReference": "d",
      "focalLengthMm": 41.086621,
      "glass": "K-LaK10 (SUMITA catalog equivalent; production supplier unspecified)",
      "role": "Positive biconvex rear singlet; catalog-equivalent glass, production melt unidentified."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 24.115,
      "d": 0.875,
      "sd": 14,
      "medium": 1
    },
    {
      "label": "2",
      "R": 17.64,
      "d": 6.125,
      "sd": 13.3,
      "medium": 2
    },
    {
      "label": "3",
      "R": 70.07,
      "d": 0.105,
      "sd": 13.3
    },
    {
      "label": "4",
      "R": 12.775,
      "d": 2.73,
      "sd": 10.5,
      "medium": 3
    },
    {
      "label": "5",
      "R": 17.78,
      "d": 0.875,
      "sd": 10.5,
      "medium": 4
    },
    {
      "label": "6",
      "R": 9.31,
      "d": 5.576899999999999,
      "sd": 8.2
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.4181
    },
    {
      "label": "7",
      "R": -12.915,
      "d": 1.925,
      "sd": 7.72,
      "medium": 5
    },
    {
      "label": "8",
      "R": -8.89,
      "d": 0.7000000000000001,
      "sd": 7.74,
      "medium": 6
    },
    {
      "label": "9",
      "R": -115.57000000000001,
      "d": 4.165,
      "sd": 10.1,
      "medium": 7
    },
    {
      "label": "10",
      "R": -19.075000000000003,
      "d": 0.035,
      "sd": 10.1
    },
    {
      "label": "11",
      "R": 75.215,
      "d": 3.5,
      "sd": 13.5,
      "medium": 8
    },
    {
      "label": "12",
      "R": -47.81,
      "sd": 13.5
    }
  ],
  "focus": {
    "closeFocusM": 1,
    "description": "Unit focus: the whole optical unit moves forward on the non-revolving helicoid, so only the back focus changes, from 20.143 mm at infinity to 21.458 mm at Canon's 1 m minimum (object to film), a 1.315 mm extension. The patent prints the infinity state only; the near state is a paraxial calculation."
  },
  "gaps": {
    "12": {
      "label": "BF",
      "values": [
        [
          20.143466182545065,
          21.458164
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 1.4,
    "fStops": [
      1.4,
      1.5,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
  },
  "groups": [
    {
      "text": "I",
      "fromSurface": "1",
      "toSurface": "3"
    },
    {
      "text": "II",
      "fromSurface": "4",
      "toSurface": "6"
    },
    {
      "text": "III",
      "fromSurface": "7",
      "toSurface": "10"
    },
    {
      "text": "IV",
      "fromSurface": "11",
      "toSurface": "12"
    }
  ],
  "doublets": [
    {
      "text": "L1 + L2",
      "fromSurface": "1",
      "toSurface": "3"
    },
    {
      "text": "L3 + L4",
      "fromSurface": "4",
      "toSurface": "6"
    },
    {
      "text": "L5 + L6 + L7",
      "fromSurface": "7",
      "toSurface": "10"
    }
  ],
  "layout": {
    "scFill": 0.5,
    "yScFill": 0.35
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
