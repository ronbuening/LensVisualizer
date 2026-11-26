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
 * 39.794). TK21, TK14 and TF10 trace on the LZOS catalogue rows. LF5 traces on CDGM QF3, whose nd and vd equal the LZOS
 * LF5 values (1.57502 / 41.31); the supplier is not known.
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
  "key": "kmz-zenitar-50mm-f12-s",
  "maker": "KMZ",
  "name": "KMZ ZENITAR 50mm f/1.2 S",
  "subtitle": "RU 2592746 C1, sole example — Zenitar 50mm f/1.2 S production match",
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "type": "Plano-Convex Positive",
      "nd": 1.659961,
      "vd": 50.81,
      "indexReference": "e",
      "focalLengthMm": 117.61,
      "glass": "TK21 (LZOS)",
      "label": "Element 1",
      "role": "Front collector of component I; convex to the object, plane rear face"
    },
    {
      "id": 2,
      "name": "L2",
      "type": "Positive Meniscus",
      "nd": 1.659961,
      "vd": 50.81,
      "indexReference": "e",
      "focalLengthMm": 104.86,
      "glass": "TK21 (LZOS)",
      "label": "Element 2",
      "role": "Positive meniscus of component I, convex to the object"
    },
    {
      "id": 3,
      "name": "L3",
      "type": "Negative Meniscus",
      "nd": 1.578326,
      "vd": 41.05,
      "indexReference": "e",
      "focalLengthMm": -37.11,
      "glass": "QF3 (CDGM; equivalent of GOST LF5; supplier unconfirmed)",
      "label": "Element 3",
      "role": "Negative meniscus ahead of the stop, convex to the object; its steep rear surface faces the stop"
    },
    {
      "id": 4,
      "name": "L4",
      "type": "Negative Meniscus",
      "nd": 1.813767,
      "vd": 25.17,
      "indexReference": "e",
      "focalLengthMm": -22.86,
      "glass": "TF10 (LZOS)",
      "label": "Element 4",
      "role": "Dense-flint negative meniscus behind the stop, concave to the object; front member of the cemented doublet",
      "cemented": "C1"
    },
    {
      "id": 5,
      "name": "L5",
      "type": "Positive Meniscus",
      "nd": 1.659961,
      "vd": 50.81,
      "indexReference": "e",
      "focalLengthMm": 45.64,
      "glass": "TK21 (LZOS)",
      "label": "Element 5",
      "role": "Positive crown meniscus, concave to the object; rear member of the cemented doublet",
      "cemented": "C1"
    },
    {
      "id": 6,
      "name": "L6",
      "type": "Positive Meniscus",
      "nd": 1.659961,
      "vd": 50.81,
      "indexReference": "e",
      "focalLengthMm": 103.47,
      "glass": "TK21 (LZOS)",
      "label": "Element 6",
      "role": "Positive meniscus of component II, concave to the object"
    },
    {
      "id": 7,
      "name": "L7",
      "type": "Plano-Convex Positive",
      "nd": 1.615506,
      "vd": 60.34,
      "indexReference": "e",
      "focalLengthMm": 73.42,
      "glass": "TK14 (LZOS)",
      "label": "Element 7",
      "role": "Plano-convex positive with its curved face to the image; the element the patent adds to component II"
    },
    {
      "id": 8,
      "name": "L8",
      "type": "Plano-Convex Positive",
      "nd": 1.615506,
      "vd": 60.34,
      "indexReference": "e",
      "focalLengthMm": 94.78,
      "glass": "TK14 (LZOS)",
      "label": "Element 8",
      "role": "Last element, convex to the object with a plane rear face"
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
  "groups": [
    { "text": "I", "fromSurface": "1", "toSurface": "6" },
    { "text": "II", "fromSurface": "8", "toSurface": "16" }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "8",
      "toSurface": "10"
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
    "maxFNumber": 16,
    "blades": 9
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity focus only; the patent prints one infinity state and no moving group or close-focus spacing. The production lens focuses to 0.45 m."
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
      "8 ELEMENTS / 7 GROUPS",
      "DESIGN f = 51.48 mm",
      "F/1.3 AT THE PRINTED STOP · MARKED F/1.2",
      "ALL SPHERICAL",
      "MINIMUM FOCUS 0.45 m"
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
        "note": "The patent states a relative aperture of 1:1.2 and an entrance pupil of 41.05 mm, but its own Table 2 does not pass that beam. The printed 25.1 mm stop gives a paraxial f/1.3026, and a real axial ray fills it at about f/1.265 (entrance pupil 40.70 mm); at f/1.2 the axial beam is cut at surfaces 5, 6, 8, 9 and 16. The model keeps the printed stop and clear diameters, and no value is corrected."
      }
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
