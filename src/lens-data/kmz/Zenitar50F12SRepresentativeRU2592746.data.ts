import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * RU 2592746 C1, sole example (Table 2, printed p. 6). Inventor Vladimir Aleksandrovich Bogdankov; patent holder
 * OAO Krasnogorsk Plant named after S.A. Zverev (KMZ). Application 2015110965, filed 27 March 2015, published
 * 27 July 2016. The patent states a design for APS-C reflex cameras (25.5 x 18.6 mm), f' = 51.478 mm, relative
 * aperture 1:1.2, back focus S' = 39.777 mm and system length 119.577 mm. Eight spherical elements in seven groups;
 * elements 4 and 5 are cemented and the stop sits between elements 3 and 4.
 *
 * SCALE: none. R and d are as printed, in millimetres.
 *
 * GLASS: Table 2 prints glass names only (TK-21, LF-5, TF-10, TK-14), no indices. The stored values are LZOS
 * catalogue ne and ve (indexReference "e"); Table 1 gives 0.54607 um the weight 1. With them the paraxial EFL is
 * 51.4744 mm and the back focus 39.7777 mm against the printed 51.478 and 39.777 (d-line values give 51.492 and
 * 39.794).
 *
 * STOP AND F-NUMBER: the stop is Table 2 row 7 with a printed clear diameter of 25.1 mm. nominalFNumber is the
 * paraxial f-number that reproduces that 12.55 mm stop radius, f/1.3026; a real axial ray fills the stop at about
 * f/1.265. The patent's stated 1:1.2 and 41.05 mm entrance pupil are not reached by its own printed diameters: at
 * f/1.2 the axial beam is cut at surfaces 5, 6, 8, 9 and 16.
 *
 * SEMI-DIAMETERS: every sd is the printed clear diameter divided by two; none is inferred. Off-axis vignetting is
 * heavy and comes from those printed diameters.
 *
 * IMAGE PLANE: the last gap is the printed 39.777 mm. FOCUS: infinity only; the patent prints no close-focus
 * spacing. The maker's 0.45 m is catalog.closeFocusM.marketing.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "zenitar-50-f12-s-representative-ru2592746",
  "maker": "KMZ",
  "name": "Zenitar 50mm f/1.2 S \u2014 representative patent reconstruction",
  "visible": false,
  "elements": [
    {
      "id": 1,
      "name": "TK21 nominal LZOS",
      "type": "Lens",
      "nd": 1.659961,
      "vd": 50.81,
      "indexReference": "e",
      "glass": "TK21 nominal LZOS",
      "label": "Element 1"
    },
    {
      "id": 2,
      "name": "TK21 nominal LZOS",
      "type": "Lens",
      "nd": 1.659961,
      "vd": 50.81,
      "indexReference": "e",
      "glass": "TK21 nominal LZOS",
      "label": "Element 2"
    },
    {
      "id": 3,
      "name": "LF5 nominal LZOS",
      "type": "Lens",
      "nd": 1.578326,
      "vd": 41.05,
      "indexReference": "e",
      "glass": "LF5 nominal LZOS",
      "label": "Element 3"
    },
    {
      "id": 4,
      "name": "TF10 nominal LZOS",
      "type": "Lens",
      "nd": 1.813767,
      "vd": 25.17,
      "indexReference": "e",
      "glass": "TF10 nominal LZOS",
      "label": "Element 4"
    },
    {
      "id": 5,
      "name": "TK21 nominal LZOS",
      "type": "Lens",
      "nd": 1.659961,
      "vd": 50.81,
      "indexReference": "e",
      "glass": "TK21 nominal LZOS",
      "label": "Element 5"
    },
    {
      "id": 6,
      "name": "TK21 nominal LZOS",
      "type": "Lens",
      "nd": 1.659961,
      "vd": 50.81,
      "indexReference": "e",
      "glass": "TK21 nominal LZOS",
      "label": "Element 6"
    },
    {
      "id": 7,
      "name": "TK14 nominal LZOS",
      "type": "Lens",
      "nd": 1.615506,
      "vd": 60.34,
      "indexReference": "e",
      "glass": "TK14 nominal LZOS",
      "label": "Element 7"
    },
    {
      "id": 8,
      "name": "TK14 nominal LZOS",
      "type": "Lens",
      "nd": 1.615506,
      "vd": 60.34,
      "indexReference": "e",
      "glass": "TK14 nominal LZOS",
      "label": "Element 8"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 77.62,
      "d": 8.1,
      "sd": 27.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": "flat",
      "d": 0.4,
      "sd": 26.0
    },
    {
      "label": "3",
      "R": 39.72,
      "d": 8.7,
      "sd": 22.25,
      "medium": 2
    },
    {
      "label": "4",
      "R": 85.11,
      "d": 7.25,
      "sd": 19.9
    },
    {
      "label": "5",
      "R": 157.4,
      "d": 4.25,
      "sd": 15.4,
      "medium": 3
    },
    {
      "label": "6",
      "R": 18.7,
      "d": 10.2,
      "sd": 12.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 8
    },
    {
      "label": "8",
      "R": -18.45,
      "d": 2.5,
      "sd": 12.6,
      "medium": 4
    },
    {
      "label": "9",
      "R": -2443,
      "d": 7.85,
      "sd": 15.7,
      "medium": 5
    },
    {
      "label": "10",
      "R": -29.79,
      "d": 0.3,
      "sd": 16.9
    },
    {
      "label": "11",
      "R": -105.44,
      "d": 6.5,
      "sd": 18.25,
      "medium": 6
    },
    {
      "label": "12",
      "R": -42.46,
      "d": 0.4,
      "sd": 19.2
    },
    {
      "label": "13",
      "R": "flat",
      "d": 7.8,
      "sd": 19.8,
      "medium": 7
    },
    {
      "label": "14",
      "R": -45.19,
      "d": 1.9,
      "sd": 20.0
    },
    {
      "label": "15",
      "R": 58.34,
      "d": 5.65,
      "sd": 18.05,
      "medium": 8
    },
    {
      "label": "16",
      "R": "flat",
      "d": 39.777,
      "sd": 17.85
    }
  ],
  "layout": {
    "yScFill": 0.7
  },
  "aperture": {
    "nominalFNumber": 1.3025708965508993,
    "fStops": [
      1.3025708965508993,
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
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity only diagnostic"
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 32
  },
  "checks": {
    "gapSagFrac": 0.9
  },
  "catalog": {
    "lensMounts": [
      "canon-ef",
      "nikon-f"
    ],
    "imageFormat": "aps-c",
    "elementCount": 8,
    "groupCount": 7,
    "focalLengthMm": {
      "marketing": 50,
      "design": 51.4744
    },
    "fNumber": {
      "marketing": 1.2,
      "design": 1.3025708965508993
    },
    "closeFocusM": {
      "marketing": 0.45
    },
    "specs": [
      "REPRESENTATIVE NOT FACTORY EXACT",
      "LITERAL STOP / NOMINAL LZOS ne",
      "INFINITY ONLY",
      "STRONG FIELD CLIPPING"
    ]
  },
  "source": {
    "patentNumber": "RU 2592746 C1",
    "patentYear": 2016,
    "example": {
      "label": "Sole example",
      "id": null
    },
    "authors": [
      "Vladimir Aleksandrovich Bogdankov"
    ],
    "assignees": [
      "PJSC Krasnogorsky Zavod named after S. A. Zverev"
    ],
    "errata": [
      {
        "status": "unresolved",
        "note": "Printed pupil41.05mm and nominalf1.2 are not reproduced: literalstop25.1mm yields paraxialf1.30257, finite entrance40.70195mm. Catalogne/ve nominal not patent-era melt. Representative2013\u201314 product predates2015filing. No correction applied."
      }
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
