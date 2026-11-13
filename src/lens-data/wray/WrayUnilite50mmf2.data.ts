import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,499,264 A, Table B / Fig. 2, repeated in claim 5; Charles Gorrie Wynne,
 * assigned to Wray (Optical Works) Limited. Five spherical elements in four groups;
 * L2 and L3 share the cemented S4 interface. Table A / Fig. 1 is the other embodiment.
 * SCALE: normalized f = 1 lengths multiplied uniformly by 50 to millimetres, including
 * radii, thicknesses, zero vertex gaps, inferred rims, split stop gaps, paraxial back
 * focus and isolated-element focal lengths. Indices, Abbe numbers and angles unchanged.
 * GLASS: three-decimal mean indices traced with an assumed d-line reference. L1
 * and L4 have catalog equivalents, L3 and L5 catalog spectral proxies; no historical
 * glass supplier or melt is identified.
 * FIELD: the 23.7° half-field reaches the 24 x 36 mm corner of the Wrayflex Ia and II;
 * the Wrayflex Guide's rounder 46° figure falls just short of it.
 * STOP: no iris is marked in the patent figure. Its plane is inferred as the midpoint
 * between the S5 and S6 optical rims along the axis; d5 remains the printed total gap.
 * The engine derives the iris radius from f/2. Optical rims are estimated from Fig. 2,
 * checked against vertex spans and curved faces, and clear the axial f/2 beam.
 * S5/S6 retain 8.0/8.1 mm optical caps; opaque lands extend their drawn rims to
 * 10.8/10.9 mm, matching the square shoulders without increasing clear aperture.
 * IMAGE PLANE: the final interval is the calculated paraxial back focal distance,
 * not a patent dimension. Infinity prescription only; retail 3-foot focus is metadata.
 * The public Unilite sections agree with Fig. 2; this is not a certified factory prescription.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "wray-unilite-50mm-f2",
  "maker": "Wray",
  "name": "WRAY UNILITE 50mm f/2",
  "subtitle": "US 2,499,264 A, Table B — Wray Unilite of the Wrayflex",
  "visible": true,
  "catalog": {
    "specs": [
      "5 ELEMENTS / 4 GROUPS",
      "ALL SPHERICAL",
      "f/2–22",
      "0.91 m MFD"
    ],
    "elementCount": 5,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 50,
      "design": 50
    },
    "fNumber": {
      "marketing": 2,
      "design": 2
    },
    "lensMounts": ["wrayflex"],
    "imageFormat": "135-full-frame",
    "closeFocusM": {
      "marketing": 0.914
    }
  },
  "source": {
    "patentNumber": "US 2,499,264 A",
    "patentYear": 1950,
    "example": {
      "label": "Table B",
      "id": "B"
    },
    "authors": [
      "Charles Gorrie Wynne"
    ],
    "assignees": [
      "Wray Optical Works Limited"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "role": "Front positive collecting element",
      "nd": 1.691,
      "vd": 54.8,
      "indexReference": "d",
      "glass": "N-LAK9 (Schott catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 56.882895
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "role": "Positive front member of the cemented doublet",
      "nd": 1.613,
      "vd": 57.6,
      "indexReference": "d",
      "glass": "Unmatched (nD 1.613 / V 57.6)",
      "cemented": "C1",
      "focalLengthMm": 32.106119
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "role": "Thin negative rear member of the cemented doublet",
      "nd": 1.7,
      "vd": 30.3,
      "indexReference": "d",
      "glass": "S-TIM35 (spectral proxy; patent nD 1.700 / V 30.3; supplier and melt unspecified)",
      "cemented": "C1",
      "focalLengthMm": -21.576906
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "role": "Negative element behind the iris",
      "nd": 1.613,
      "vd": 36.9,
      "indexReference": "d",
      "glass": "F3 (Sumita catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -81.418342
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "role": "Thick positive rear collecting element",
      "nd": 1.621,
      "vd": 60.3,
      "indexReference": "d",
      "glass": "N-SK16 (spectral proxy; patent nD 1.621 / V 60.3; supplier and melt unspecified)",
      "focalLengthMm": 39.614175
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 26.865,
      "d": 5.83,
      "sd": 17.6,
      "medium": 1
    },
    {
      "label": "2",
      "R": 77.35,
      "d": 0,
      "sd": 17.6
    },
    {
      "label": "3",
      "R": 12.525,
      "d": 5.245,
      "sd": 10.8,
      "medium": 2
    },
    {
      "label": "4",
      "R": 28.965,
      "d": 0.76,
      "sd": 10.8,
      "medium": 3
    },
    {
      "label": "5",
      "R": 9.82,
      "d": 7.195279,
      "sd": 8.0,
      "rimExtensionSd": 10.8
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 6.744721
    },
    {
      "label": "6",
      "R": -10.765,
      "d": 4.56,
      "sd": 8.1,
      "rimExtensionSd": 10.9,
      "medium": 4
    },
    {
      "label": "7",
      "R": -15.935,
      "d": 0,
      "sd": 10.9
    },
    {
      "label": "8",
      "R": 149.5,
      "d": 7.1,
      "sd": 14.6,
      "medium": 5
    },
    {
      "label": "9",
      "R": -28.91,
      "d": 22.168895,
      "sd": 14.6
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the production lens uses a helical focusing mount."
  },
  "aperture": {
    "nominalFNumber": 2,
    "fStops": [
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
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 47.4,
    "maxTraceFieldDeg": 23.7
  },
  "layout": {
    "yScFill": 0.7
  },
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "3",
      "toSurface": "5"
    }
  ]
} satisfies LensDataV2Input;
export default LENS_DATA;
