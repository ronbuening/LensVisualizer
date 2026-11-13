import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * Source: CN 119667909 A, Example 1, Tables 1–2 and Figure 1.
 * Scale factor 1: source radii, thicknesses and gaps are already in millimetres;
 * no units conversion is applied. Even-asphere coefficients retain source mm units.
 * Rims are inferred from Figure 1; the native iris is inferred paraxially from
 * the source entrance-pupil radius 34.309 mm (modeled f/1.233195, printed f/1.25).
 * The final gap is the calculated lens-only paraxial back focus, 19.813299312 mm,
 * rather than the printed 20.300 mm. Two-decimal nd precision and a non-unique
 * misprint scan support retaining this interpretation, not a proven correction
 * or exact filter conversion. No filter prescription or finite-focus state is supplied.
 * Hidden representative model; no exact retail optical prescription is claimed.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "songraw-af-85f12-ms",
  "maker": "SongRaw",
  "name": "SONGRAW AF 85mm f/1.2 MS",
  "visible": false,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "type": "Lens",
      "nd": 1.85,
      "vd": 23.8,
      "indexReference": "d",
      "label": "Element 1",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    },
    {
      "id": 2,
      "name": "L2",
      "type": "Lens",
      "nd": 1.59,
      "vd": 68.3,
      "indexReference": "d",
      "label": "Element 2",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    },
    {
      "id": 3,
      "name": "L3",
      "type": "Lens",
      "nd": 1.59,
      "vd": 68.3,
      "indexReference": "d",
      "label": "Element 3",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    },
    {
      "id": 4,
      "name": "L4",
      "type": "Lens",
      "nd": 1.85,
      "vd": 25.2,
      "indexReference": "d",
      "label": "Element 4",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    },
    {
      "id": 5,
      "name": "L5",
      "type": "Lens",
      "nd": 1.59,
      "vd": 68.3,
      "indexReference": "d",
      "label": "Element 5",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    },
    {
      "id": 6,
      "name": "L6",
      "type": "Lens",
      "nd": 2,
      "vd": 25.5,
      "indexReference": "d",
      "label": "Element 6",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    },
    {
      "id": 7,
      "name": "L7",
      "type": "Lens",
      "nd": 1.92,
      "vd": 20.9,
      "indexReference": "d",
      "label": "Element 7",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    },
    {
      "id": 8,
      "name": "L8",
      "type": "Lens",
      "nd": 1.7,
      "vd": 55.5,
      "indexReference": "d",
      "label": "Element 8",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    },
    {
      "id": 9,
      "name": "L9",
      "type": "Lens",
      "nd": 1.59,
      "vd": 68.3,
      "indexReference": "d",
      "label": "Element 9",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    },
    {
      "id": 10,
      "name": "L10",
      "type": "Lens",
      "nd": 1.77,
      "vd": 29.7,
      "indexReference": "d",
      "label": "Element 10",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    },
    {
      "id": 11,
      "name": "L11",
      "type": "Lens",
      "nd": 1.73,
      "vd": 54.7,
      "indexReference": "d",
      "label": "Element 11",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    },
    {
      "id": 12,
      "name": "L12",
      "type": "Lens",
      "nd": 1.73,
      "vd": 54.7,
      "indexReference": "d",
      "label": "Element 12",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    },
    {
      "id": 13,
      "name": "L13",
      "type": "Lens",
      "nd": 1.77,
      "vd": 29.7,
      "indexReference": "d",
      "label": "Element 13",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    },
    {
      "id": 14,
      "name": "L14",
      "type": "Lens",
      "nd": 2,
      "vd": 29.1,
      "indexReference": "d",
      "label": "Element 14",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    },
    {
      "id": 15,
      "name": "L15",
      "type": "Lens",
      "nd": 1.62,
      "vd": 36.3,
      "indexReference": "d",
      "label": "Element 15",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    },
    {
      "id": 16,
      "name": "L16",
      "type": "Lens",
      "nd": 2,
      "vd": 25.5,
      "indexReference": "d",
      "label": "Element 16",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    },
    {
      "id": 17,
      "name": "L17",
      "type": "Lens",
      "nd": 1.49,
      "vd": 70.4,
      "indexReference": "d",
      "label": "Element 17",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    },
    {
      "id": 18,
      "name": "L18",
      "type": "Lens",
      "nd": 1.81,
      "vd": 40.7,
      "indexReference": "d",
      "label": "Element 18",
      "glass": "Unmatched literal Nd/Vd; approximate dispersion"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 76.011,
      "d": 10.3,
      "sd": 42,
      "medium": 1
    },
    {
      "label": "2",
      "R": 215.365,
      "d": 0.15,
      "sd": 42
    },
    {
      "label": "3",
      "R": 61.477,
      "d": 5.6,
      "sd": 36,
      "medium": 2
    },
    {
      "label": "4",
      "R": 78.556,
      "d": 0.15,
      "sd": 36
    },
    {
      "label": "5",
      "R": 47.222,
      "d": 8.2,
      "sd": 31,
      "medium": 3
    },
    {
      "label": "6",
      "R": 82.8,
      "d": 1.5,
      "sd": 31,
      "medium": 4
    },
    {
      "label": "7",
      "R": 35.941,
      "d": 3.946,
      "sd": 24.17
    },
    {
      "label": "8",
      "R": 53.336,
      "d": 9.5,
      "sd": 24.17,
      "medium": 5
    },
    {
      "label": "9",
      "R": -174.338,
      "d": 1.5,
      "sd": 24.5,
      "medium": 6
    },
    {
      "label": "10",
      "R": 568.322,
      "d": 2.138,
      "sd": 24.5
    },
    {
      "label": "11",
      "R": -1204.786,
      "d": 3.4,
      "sd": 22.3,
      "medium": 7
    },
    {
      "label": "12",
      "R": -163.974,
      "d": 1,
      "sd": 22.3,
      "medium": 8
    },
    {
      "label": "13",
      "R": 46.971,
      "d": 21.473,
      "sd": 22.3
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.489
    },
    {
      "label": "15",
      "R": 533.957,
      "d": 7.5,
      "sd": 18.7,
      "medium": 9
    },
    {
      "label": "16",
      "R": -35.626,
      "d": 2,
      "sd": 18.7,
      "medium": 10
    },
    {
      "label": "17",
      "R": 35.626,
      "d": 8.6,
      "sd": 18.7,
      "medium": 11
    },
    {
      "label": "18",
      "R": -135.604,
      "d": 0.15,
      "sd": 18.7
    },
    {
      "label": "19",
      "R": 46.752,
      "d": 6.5,
      "sd": 18.4,
      "medium": 12
    },
    {
      "label": "20",
      "R": -181.209,
      "d": 1.5,
      "sd": 18.4,
      "medium": 13
    },
    {
      "label": "21",
      "R": 50.08,
      "d": 0.893,
      "sd": 18.4
    },
    {
      "label": "22",
      "R": 62.431,
      "d": 6.7,
      "sd": 17.5,
      "medium": 14
    },
    {
      "label": "23",
      "R": -71.562,
      "d": 1.5,
      "sd": 17.5,
      "medium": 15
    },
    {
      "label": "24",
      "R": 46.084,
      "d": 0.903,
      "sd": 17.5
    },
    {
      "label": "25",
      "R": 56.199,
      "d": 6.4,
      "sd": 17.4,
      "medium": 16
    },
    {
      "label": "26",
      "R": -97.979,
      "d": 4,
      "sd": 17.4,
      "medium": 17
    },
    {
      "label": "27",
      "R": 43.506,
      "d": 5.208,
      "sd": 16.16
    },
    {
      "label": "28",
      "R": -119.605,
      "d": 2.5,
      "sd": 16.16,
      "medium": 18,
      "asphere": {
        "K": 0,
        "A4": -9.74182e-06,
        "A6": 1.27066e-08,
        "A8": -9.6825e-12,
        "A10": -8.09107e-15,
        "A12": 5.01459e-17
      }
    },
    {
      "label": "29",
      "R": -500,
      "d": 19.813299312326787,
      "sd": 17.2,
      "asphere": {
        "K": 0,
        "A4": -5.08406e-06,
        "A6": 1.21233e-08,
        "A8": 7.62564e-12,
        "A10": -3.92426e-14,
        "A12": 7.66722e-17
      }
    }
  ],
  "aperture": {
    "nominalFNumber": 1.233195000482106,
    "fStops": [
      1.233195000482106
    ]
  },
  "layout": {
    "yScFill": 0.7
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity only. G2 internal-focus direction is described but no finite station or motion law is supplied."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 29.147116523239816
  },
  "checks": {
    "gapSagFrac": 0.9
  },
  "subtitle": "CN 119667909 A \u2014 qualified lens-only computed-focus interpretation",
  "catalog": {
    "lensMounts": [
      "sony-fe",
      "nikon-z"
    ],
    "imageFormat": "135-full-frame",
    "imageCircleMm": 44,
    "elementCount": 18,
    "groupCount": 10,
    "focalLengthMm": {
      "marketing": 85,
      "design": 84.61937454308114
    },
    "fNumber": {
      "marketing": 1.2,
      "design": 1.233195000482106
    },
    "closeFocusM": {
      "marketing": 0.85
    },
    "specs": [
      "18 ELEMENTS / 10 GROUPS",
      "SOURCE PUPIL RADIUS34.309mm",
      "LENS-ONLY INFINITY INTERPRETATION"
    ]
  },
  "source": {
    "patentNumber": "CN 119667909 A",
    "patentYear": 2025,
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "authors": [
      "Yuwen Chang"
    ],
    "assignees": [
      "Shenzhen Songruo Photography Equipment Co., Ltd."
    ],
    "errata": [
      {
        "status": "unresolved",
        "note": "Printed S29\u2192IMG 20.300 mm is 0.486701 mm longer than the retained lens-only paraxial focus 19.813299312326787 mm. Two-decimal nd precision limits the back-focus accuracy; the 2,570-case single-value scan found no unique misprint. The final gap follows the YN 40 paraxial-focus precedent, not a proven source correction or exact filter conversion."
      },
      {
        "status": "unresolved",
        "note": "Original pupil radius34.309mm and literalEFL84.6193745 imply f1.233195 rather than statedf1.25. Source radius controls iris; no silent f-number normalization. Original Nd/Vd coarse and unmatched."
      },
      {
        "status": "unresolved",
        "note": "FT appears in source figure but no thickness/index prescription exists. It is explicitly omitted. TableS2=215.365,S10=568.322,S28=-119.605 retained against slight prose differences; U223827884 numericaltables identical."
      }
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
