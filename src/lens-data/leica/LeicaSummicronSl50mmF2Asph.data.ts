import type { LensDataInput } from "../../types/optics.js";

/**
 * LEICA SUMMICRON SL 50mm f/2 ASPH. — JP2022182997A Numerical Example 1.
 * Selected research correlation; manufacturer confirmation of prescription is absent.
 * Native millimetres and d-line indices; no marketed rescaling or source repairs.
 * Nine glass lenses/eight assemblies; ten model entries include published 0.01 mm adhesive.
 * Six aspheres on L6–L8. Source K is the standard 1+K conic convention.
 * PUBLISHED focus: G2/L7 moves imageward; literal d13/d15 endpoints retained.
 * The physical 2.1 mm cover plate is in rearPlates; last d=12.9 mm is the pre-plate gap.
 * Table 6 (6)/(11) and (12) header contradict their definitions; see sourceErrata.
 * Image gap 1.000 mm is preserved despite small paraxial defocus; no best-focus refit.
 * Stop SD is exact-ray calibrated to patent infinity F/1.86017; all other SDs are modeled estimates
 * informed by ray envelopes and source silhouettes, not published manufacturing apertures.
 * The modeled iris is 14.525024382 mm, traced from EFL/(2 Fno), not a paraxial stop radius.
 * Glass coordinate classes are candidates; unnamed materials remain Unmatched.
 */

const LENS_DATA = {
  "key": "leica-summicron-sl-50mm-f2-asph",
  "maker": "Leica",
  "name": "LEICA SUMMICRON SL 50mm f/2 ASPH.",
  "sourceErrata": [
    {
      "status": "unresolved",
      "note": "Table 6 condition (6) prints 10.42 versus defined glass-thickness ratio 5.2215; (11) prints 2.92 versus 1.0981304. Condition (12) table header is inverse to prose/value. Prescription preserved."
    },
    {
      "status": "unresolved",
      "note": "Published 1.000 mm image gap after cover plate retained; source paraxial image is 1.008296 mm at infinity and 1.042092 mm near. Literal near track is 100.9999 mm versus 101.0000 summary."
    }
  ],
  "subtitle": "JP2022182997A NUMERICAL EXAMPLE 1 — SELECTED PRODUCTION CORRELATION",
  "specs": [
    "9 GLASS LENSES / 8 GROUPS",
    "1 EXPLICIT ADHESIVE INTERVAL",
    "f ≈ 48.254 mm",
    "F/1.86017",
    "6 ASPHERICAL SURFACES"
  ],
  "focalLengthMarketing": 50,
  "focalLengthDesign": 48.2535,
  "apertureMarketing": 2,
  "apertureDesign": 1.86017,
  "lensMounts": [
    "l-mount"
  ],
  "imageFormat": "135-full-frame",
  "patentNumber": "JP 2022-182997 A",
  "patentAuthors": [
    "Yasuto Suzuki",
    "Yoshiaki Kurioka",
    "Shunichiro Yoshinaga"
  ],
  "patentAssignees": [
    "Panasonic Intellectual Property Management Co., Ltd."
  ],
  "patentYear": 2022,
  "elementCount": 9,
  "groupCount": 8,
  "nominalFno": 1.86017,
  "closeFocusM": 0.45,
  "fstopSeries": [
    1.86017,
    2.8,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "yScFill": 0.55,
  "focusDescription": "PUBLISHED: G2 is negative L7, translating imageward by 4.8163 mm between infinity and the d0=349 mm source state (about 0.450 m object to image). G1, STO and G3 remain fixed apart from the 0.0001 mm printed gap-sum rounding. Linear intermediate gaps are modeled interpolation, not published focus law.",
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "diagramLabel": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.85996,
      "vd": 30.5,
      "indexReference": "d",
      "fl": 72.171779,
      "glass": "Unmatched (patent nd=1.85996, νd=30.5; supplier unconfirmed)",
      "role": "Published fixed element; power quoted standalone in air"
    },
    {
      "id": 2,
      "name": "L2",
      "diagramLabel": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.497,
      "vd": 81.6,
      "indexReference": "d",
      "fl": -64.363612,
      "glass": "FCD1 / N-PK52A class (coordinate candidate; supplier unconfirmed)",
      "role": "Published fixed element; power quoted standalone in air"
    },
    {
      "id": 3,
      "name": "L3",
      "diagramLabel": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.65794,
      "vd": 31.1,
      "indexReference": "d",
      "fl": -19.938207,
      "glass": "Unmatched (patent nd=1.65794, νd=31.1; supplier unconfirmed)",
      "role": "Published fixed element; power quoted standalone in air",
      "cemented": "D1"
    },
    {
      "id": 10,
      "name": "Adhesive",
      "diagramLabel": "C",
      "label": "L3–L4 adhesive",
      "type": "Thin Adhesive Bond",
      "nd": 1.56732,
      "vd": 42.8,
      "indexReference": "d",
      "fl": 359130.48989,
      "glass": "Unmatched (published adhesive interval; resin chemistry and supplier unconfirmed)",
      "cemented": "D1",
      "role": "Published 0.01 mm bond; explicit modeling interval, excluded from nine-glass physical count"
    },
    {
      "id": 4,
      "name": "L4",
      "diagramLabel": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.59269,
      "vd": 65.3,
      "indexReference": "d",
      "fl": 32.037905,
      "glass": "Unmatched (patent nd=1.59269, νd=65.3; supplier unconfirmed)",
      "role": "Published fixed element; power quoted standalone in air",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "diagramLabel": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.59282,
      "vd": 68.6,
      "indexReference": "d",
      "fl": 41.473622,
      "glass": "FCD515 / FCD505 class (coordinate candidate; supplier unconfirmed)",
      "role": "Published fixed element; power quoted standalone in air"
    },
    {
      "id": 6,
      "name": "L6",
      "diagramLabel": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.5157,
      "vd": 55.8,
      "indexReference": "d",
      "fl": 68.13275,
      "glass": "Unmatched (patent nd=1.51570, νd=55.8; supplier unconfirmed)",
      "role": "Published fixed element; power quoted standalone in air"
    },
    {
      "id": 7,
      "name": "L7",
      "diagramLabel": "L7",
      "label": "Element 7",
      "type": "Neg. Meniscus (2× Asph)",
      "nd": 1.51607,
      "vd": 56.3,
      "indexReference": "d",
      "fl": -67.785796,
      "glass": "Unmatched (patent nd=1.51607, νd=56.3; supplier unconfirmed)",
      "role": "Published moving negative focus element; power quoted standalone in air"
    },
    {
      "id": 8,
      "name": "L8",
      "diagramLabel": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.5157,
      "vd": 55.8,
      "indexReference": "d",
      "fl": 60.621063,
      "glass": "Unmatched (patent nd=1.51570, νd=55.8; supplier unconfirmed)",
      "role": "Published fixed element; power quoted standalone in air"
    },
    {
      "id": 9,
      "name": "L9",
      "diagramLabel": "L9",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.54157,
      "vd": 51.7,
      "indexReference": "d",
      "fl": -59.424811,
      "glass": "Unmatched (patent nd=1.54157, νd=51.7; supplier unconfirmed)",
      "role": "Published fixed element; power quoted standalone in air"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 38.4274,
      "d": 5.523,
      "nd": 1.85996,
      "elemId": 1,
      "sd": 21
    },
    {
      "label": "2",
      "R": 94.1939,
      "d": 0.3,
      "nd": 1,
      "elemId": 0,
      "sd": 21
    },
    {
      "label": "3",
      "R": 43.2106,
      "d": 1.2,
      "nd": 1.497,
      "elemId": 2,
      "sd": 18
    },
    {
      "label": "4",
      "R": 18.2117,
      "d": 15.5101,
      "nd": 1,
      "elemId": 0,
      "sd": 15.5
    },
    {
      "label": "5",
      "R": -25.8213,
      "d": 1.2,
      "nd": 1.65794,
      "elemId": 3,
      "sd": 15.5
    },
    {
      "label": "6",
      "R": 27.1566,
      "d": 0.01,
      "nd": 1.56732,
      "elemId": 10,
      "sd": 15.5
    },
    {
      "label": "7",
      "R": 27.1566,
      "d": 7.53,
      "nd": 1.59269,
      "elemId": 4,
      "sd": 15.5
    },
    {
      "label": "8",
      "R": -56.6176,
      "d": 0.738,
      "nd": 1,
      "elemId": 0,
      "sd": 15.5
    },
    {
      "label": "STO",
      "R": 1000000000000000,
      "d": 2.87,
      "nd": 1,
      "elemId": 0,
      "sd": 14.525024382474049
    },
    {
      "label": "10",
      "R": 48.0849,
      "d": 8.0445,
      "nd": 1.59282,
      "elemId": 5,
      "sd": 17.5
    },
    {
      "label": "11",
      "R": -47.1784,
      "d": 0.3,
      "nd": 1,
      "elemId": 0,
      "sd": 17.5
    },
    {
      "label": "12A",
      "R": 72.8346,
      "d": 5.1115,
      "nd": 1.5157,
      "elemId": 6,
      "sd": 16.5
    },
    {
      "label": "13A",
      "R": -66.2629,
      "d": 1.8,
      "nd": 1,
      "elemId": 0,
      "sd": 16.5
    },
    {
      "label": "14A",
      "R": 33.7007,
      "d": 2,
      "nd": 1.51607,
      "elemId": 7,
      "sd": 15
    },
    {
      "label": "15A",
      "R": 16.818,
      "d": 12.8959,
      "nd": 1,
      "elemId": 0,
      "sd": 15
    },
    {
      "label": "16A",
      "R": 286.1473,
      "d": 6.2658,
      "nd": 1.5157,
      "elemId": 8,
      "sd": 16
    },
    {
      "label": "17A",
      "R": -34.8352,
      "d": 12.5012,
      "nd": 1,
      "elemId": 0,
      "sd": 16
    },
    {
      "label": "18",
      "R": -20.1245,
      "d": 1.2,
      "nd": 1.54157,
      "elemId": 9,
      "sd": 17.5
    },
    {
      "label": "19",
      "R": -54.8364,
      "d": 12.9,
      "nd": 1,
      "elemId": 0,
      "sd": 17.5
    }
  ],
  "rearPlates": [
    {
      "label": "CG",
      "thicknessMm": 2.1,
      "nd": 1.5168,
      "vd": 64.2,
      "gapAfterMm": 1,
      "indexReference": "d",
      "glass": "N-BK7 / BSC7 class (coordinate candidate; supplier unconfirmed)",
      "source": "JP2022182997A Numerical Example 1, Table 1A surfaces 20–21; physical gaps retained"
    }
  ],
  "asph": {
    "12A": {
      "K": 0,
      "A4": -4.36516e-06,
      "A6": 4.2794e-09,
      "A8": -1.3168e-11,
      "A10": -1.14476e-15,
      "A12": 0,
      "A14": 0
    },
    "13A": {
      "K": 0,
      "A4": 8.55335e-06,
      "A6": -3.38027e-09,
      "A8": 0,
      "A10": 0,
      "A12": 0,
      "A14": 0
    },
    "14A": {
      "K": 0,
      "A4": -3.20814e-05,
      "A6": 3.0404e-08,
      "A8": -9.83934e-12,
      "A10": 0,
      "A12": 0,
      "A14": 0
    },
    "15A": {
      "K": -1.42129,
      "A4": -2.12498e-08,
      "A6": 8.60734e-09,
      "A8": 2.95476e-11,
      "A10": 0,
      "A12": 0,
      "A14": 0
    },
    "16A": {
      "K": 0,
      "A4": 3.3529e-05,
      "A6": -1.49631e-08,
      "A8": -2.39445e-12,
      "A10": 0,
      "A12": 0,
      "A14": 0
    },
    "17A": {
      "K": 0,
      "A4": 1.74131e-05,
      "A6": -1.58208e-08,
      "A8": 3.47625e-11,
      "A10": -1.23868e-13,
      "A12": 0,
      "A14": 0
    }
  },
  "var": {
    "13A": [
      1.8,
      6.6163
    ],
    "15A": [
      12.8959,
      8.0795
    ]
  },
  "varLabels": [
    [
      "13A",
      "d13"
    ],
    [
      "15A",
      "d15"
    ]
  ],
  "publishedStations": {
    "focus": [
      1
    ]
  },
  "finiteConjugates": [
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 349,
      "distanceReference": "first-surface",
      "source": "JP2022182997A Numerical Example 1, Table 1C d0/d13/d15; printed image gap retained with residual paraxial defocus"
    }
  ],
  "groups": [
    {
      "text": "G1 (+)",
      "fromSurface": "1",
      "toSurface": "13A"
    },
    {
      "text": "G2 (−), FOCUS",
      "fromSurface": "14A",
      "toSurface": "15A"
    },
    {
      "text": "G3 (+)",
      "fromSurface": "16A",
      "toSurface": "19"
    }
  ],
  "doublets": [
    {
      "text": "D1: L3 + L4 + adhesive",
      "fromSurface": "5",
      "toSurface": "8"
    }
  ]
} satisfies LensDataInput;

export default LENS_DATA;
