import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * KONICA HEXANON AR 57mm f/1.2, from JP S47-19025 Y1, the sole numerical example (examined utility model; application
 * 実願昭43-45827 filed 1968-06-03, published 1972-06-29; inventor Saburo Kinoshita; applicant Konishiroku Photo
 * Industry Co., Ltd.). Seven spherical elements in six groups, L4 and L5 cemented; the table is on printed page 241
 * and the section is Fig. 1.
 *
 * Association: the patent names no product. Konica's 57mm f/1.2 Hexanon AR has the same seven elements in six groups,
 * the same aperture and a 42° angle of view against the patent's "41° or more", and collector sources place its
 * release in the late 1960s or about 1970, after the 1968 filing. This is a probable production correlation, not a
 * confirmed factory prescription.
 *
 * Scale: the patent normalizes the example to f = 1, and its printed radii trace to EFL 0.999873. Every R, d, sd and
 * the back focus is multiplied by s = 57.0072 (57 / 0.999873, rounded to four decimals), which gives EFL 56.99998 mm.
 * R and d are the exact products. Indices and Abbe numbers are unchanged; there are no aspheres.
 *
 * Image plane: the patent prints no back focus. The last gap is the paraxial back focus of the printed prescription,
 * 0.596782 at f = 1 and 34.02086 mm at this scale (rounded to 0.00001 mm).
 *
 * Stop: the text places the diaphragm between L3 and L4 (第3レンズと第4レンズの中間) but prints no position or
 * diameter, and Fig. 1 draws none. The model splits t6 = 0.285 (16.2471 mm) at its midpoint, 8.1235 + 8.1235 mm; the
 * position is inferred. The radius follows from the design F/1.2. The Seidel table's stop at the first surface is a
 * calculation convention, not the iris.
 *
 * Semi-diameters: not printed, so all are inferred from Fig. 1 (printed page 244). Its scan carries 1117 px per f-unit
 * along the axis, where the vertex crossings agree with the prescription within about 3 px, and 1094 px per f-unit
 * across it, from circle fits to r3, r6 and r7 and from the axial positions of the r6 and r7 cap ends. Half the drawn
 * diameters are, in f-units, L1 0.440, L2 front 0.379 and rear 0.363, L3 front 0.340, the r6 cap 0.272 with its land
 * to 0.291, the r7 cap 0.261 with its land to 0.283, L4/L5 0.320, L6 0.307 and L7 0.302. The model's rims stand a
 * uniform 3-5% above these, which keeps the drawn proportions: L1 26.13 mm, L2 22.63 mm front and 21.6 mm rear (the
 * drawn rear-to-front ratio, so L2 keeps its small step), the cemented pair 18.81 mm, L6 18.38 mm and L7 17.96 mm.
 * L3's front face is 19.0 mm, just above the 18.99 mm height of the F/1.2 axial beam; it and L2's rear face would
 * touch at 19.13 mm across their 1.14 mm air gap, and Fig. 1 draws them meeting, so gapSagFrac is 0.99 for that pair
 * (intrusion 0.985 of the gap at 19.0 mm, 0.017 mm of air at the rim). Fig. 1 ends both concave faces around the stop
 * in short flat lands: L3's rear cap ends at 15.8 mm, just ahead of the stop plane, with a land to 17.3 mm, and L4's
 * front cap ends at 15.6 mm with a land to 16.9 mm (rimExtensionSd; the lands stop no ray).
 *
 * Focus: the patent prints the infinity state only. closeFocusM is the production 0.45 m; the geometry is static.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "konica-hexanon-ar-57mm-f12",
  "maker": "Konica",
  "name": "KONICA HEXANON AR 57mm f/1.2",
  "subtitle": "JP S47-19025 Y1, Sole example — probable production correlation, f = 1 scaled to 57 mm",
  "catalog": {
    "lensMounts": [
      "konica-ar"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "7 ELEMENTS / 6 GROUPS",
      "DESIGN f = 57.00 mm",
      "DESIGN F/1.2",
      "ALL SPHERICAL"
    ],
    "elementCount": 7,
    "groupCount": 6,
    "focalLengthMm": {
      "marketing": 57,
      "design": 57
    },
    "fNumber": {
      "marketing": 1.2,
      "design": 1.2
    }
  },
  "source": {
    "patentNumber": "JP S47-19025 Y1",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1972,
    "authors": [
      "Saburo Kinoshita"
    ],
    "assignees": [
      "Konishiroku Photo Industry Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.7739,
      "vd": 50.6,
      "indexReference": "d",
      "glass": "LASKN3 (SUMITA; coordinate equivalent, supplier unconfirmed)",
      "focalLengthMm": 91.95,
      "role": "Front positive collector with a nearly flat rear face; the first of the two positive menisci convex to the object, a slight air gap ahead of L2."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.789,
      "vd": 42.7,
      "indexReference": "d",
      "glass": "NBFD1 (HOYA; coordinate equivalent, supplier unconfirmed)",
      "focalLengthMm": 61.86,
      "role": "Main positive power of the front group; its rear face nearly meets L3 at the rim across a 1.14 mm air gap."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.74,
      "vd": 28.2,
      "indexReference": "d",
      "glass": "FD3 (HOYA; coordinate equivalent, supplier unconfirmed)",
      "focalLengthMm": -34.56,
      "role": "Front-group negative meniscus; its steep concave rear face toward the stop is held in a narrow range to limit coma flare."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.74077,
      "vd": 27.7,
      "indexReference": "d",
      "glass": "E-FD13 (HOYA; coordinate equivalent, supplier unconfirmed)",
      "focalLengthMm": -22.13,
      "role": "Negative flint of the rear cemented doublet; its concave front face mirrors L3's across the stop space.",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.8306,
      "vd": 36.5,
      "indexReference": "d",
      "glass": "Unmatched (patent nd 1.83060 / νd 36.5; supplier not disclosed)",
      "focalLengthMm": 26.09,
      "role": "High-index positive of the cemented doublet; its strong convex rear face corrects higher-order spherical aberration.",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "nd": 1.72916,
      "vd": 54.8,
      "indexReference": "d",
      "glass": "TAC8 (HOYA; coordinate equivalent, supplier unconfirmed)",
      "focalLengthMm": 149.66,
      "role": "Weak positive meniscus convex to the image; first of the two rear high-index crowns that hold down the Petzval sum."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.755,
      "vd": 52.4,
      "indexReference": "d",
      "glass": "TAC6 (HOYA; coordinate equivalent, supplier unconfirmed)",
      "focalLengthMm": 90.76,
      "role": "Last positive element, stronger face to the object; second of the two rear high-index crowns."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 68.40864,
      "d": 5.415684,
      "sd": 26.13,
      "medium": 1
    },
    {
      "label": "2",
      "R": 1709.4749064,
      "d": 0.09691224,
      "sd": 26.13
    },
    {
      "label": "3",
      "R": 28.20716256,
      "d": 9.406188,
      "sd": 22.63,
      "medium": 2
    },
    {
      "label": "4",
      "R": 57.0072,
      "d": 1.140144,
      "sd": 21.6
    },
    {
      "label": "5",
      "R": 85.56210648,
      "d": 2.280288,
      "sd": 19.0,
      "medium": 3
    },
    {
      "label": "6",
      "R": 19.4679588,
      "d": 8.123526,
      "sd": 15.8,
      "rimExtensionSd": 17.3
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 8.123526
    },
    {
      "label": "7",
      "R": -23.7149952,
      "d": 1.710216,
      "sd": 15.6,
      "rimExtensionSd": 16.9,
      "medium": 4
    },
    {
      "label": "8",
      "R": 54.73831344,
      "d": 10.261296,
      "sd": 18.81,
      "medium": 5
    },
    {
      "label": "9",
      "R": -32.82474576,
      "d": 0.09691224,
      "sd": 18.81
    },
    {
      "label": "10",
      "R": -675.5923272,
      "d": 2.565324,
      "sd": 18.38,
      "medium": 6
    },
    {
      "label": "11",
      "R": -94.10178504,
      "d": 0.09691224,
      "sd": 18.38
    },
    {
      "label": "12",
      "R": 81.520296,
      "d": 2.85036,
      "sd": 17.96,
      "medium": 7
    },
    {
      "label": "13",
      "R": -423.28986144,
      "d": 34.02086,
      "sd": 17.96
    }
  ],
  "focus": {
    "closeFocusM": 0.45,
    "description": "The patent prints the infinity state only, so the geometry is static and no focus motion is modeled. The 0.45 m close-focus distance is the production lens's published figure, not a patent state. The image plane is the paraxial back focus of the scaled prescription, 34.02 mm behind the last surface, since the patent prints none. Semi-diameters are inferred from the patent figure; the stop position between L3 and L4 is inferred and its radius follows from F/1.2."
  },
  "aperture": {
    "nominalFNumber": 1.2,
    "fStops": [
      1.2,
      1.4,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ],
    "maxFNumber": 16
  },
  "layout": {
    "yScFill": 0.78
  },
  "checks": {
    "gapSagFrac": 0.99
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 41
  },
  "groups": [
    {
      "text": "FRONT",
      "fromSurface": "1",
      "toSurface": "6"
    },
    {
      "text": "REAR",
      "fromSurface": "7",
      "toSurface": "13"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "7",
      "toSurface": "9"
    }
  ]
} satisfies LensDataV2Input;

export default LENS_DATA;
