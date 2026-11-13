import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 2,502,509 A, Example II: normalized f = 1, relative aperture f/1.86.
 * Patent dimensionless R and d are converted to millimetres at x75 (x3 from
 * the delivered x25 model); every authored optical length is scaled together.
 * Indices, Abbe numbers and field angles are unchanged. The clear rims and iris
 * position are inferred, not printed; the terminal image distance is calculated
 * paraxial back focus, not a source measurement. L4 rims and the iris split are
 * adjusted only as documented in the rescale audit; the source air gap is kept.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "cooke-speed-panchro-series-ii-75mm-f2",
  "maker": "Cooke",
  "name": "COOKE SPEED PANCHRO SERIES II 75mm f/2",
  "visible": true,
  "catalog": {
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 75,
      "design": 75.0
    },
    "fNumber": {
      "marketing": 2,
      "design": 1.86
    },
    "imageFormat": "35mm-cinema"
  },
  "source": {
    "patentNumber": "US 2,502,509 A",
    "patentYear": 1950,
    "authors": [
      "Gordon Henry Cook"
    ],
    "assignees": [
      "Taylor, Taylor & Hobson Limited"
    ],
    "example": {
      "label": "Example II",
      "id": "2"
    }
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Spherical patent glass",
      "nd": 1.6909,
      "vd": 54.9,
      "indexReference": "D",
      "glass": "Source Chance Bros unspecified; historicalD/engine d approximation, not measured melt"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.6909,
      "vd": 54.9,
      "indexReference": "D",
      "glass": "Source Chance Bros unspecified; historicalD/engine d approximation, not measured melt",
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.6227,
      "vd": 36,
      "indexReference": "D",
      "glass": "Source Chance Bros unspecified; historicalD/engine d approximation, not measured melt",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.6535,
      "vd": 33.5,
      "indexReference": "D",
      "glass": "Source Chance Bros unspecified; historicalD/engine d approximation, not measured melt"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Spherical patent glass",
      "nd": 1.6909,
      "vd": 54.9,
      "indexReference": "D",
      "glass": "Source Chance Bros unspecified; historicalD/engine d approximation, not measured melt",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Spherical patent glass",
      "nd": 1.589,
      "vd": 61.4,
      "indexReference": "D",
      "glass": "Source Chance Bros unspecified; historicalD/engine d approximation, not measured melt",
      "cemented": "D2"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 56.79,
      "d": 7.44,
      "sd": 30.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 212.535,
      "d": 0.15,
      "sd": 30.0
    },
    {
      "label": "3",
      "R": 36.2925,
      "d": 10.0425,
      "sd": 22.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": -212.535,
      "d": 3.72,
      "sd": 22.5,
      "medium": 3
    },
    {
      "label": "5",
      "R": 56.79,
      "d": 2.9775,
      "sd": 22.5
    },
    {
      "label": "6",
      "R": -212.535,
      "d": 2.9775,
      "sd": 14.3,
      "medium": 4
    },
    {
      "label": "7",
      "R": 23.7825,
      "d": 4.779414,
      "sd": 14.3
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 4.145586
    },
    {
      "label": "8",
      "R": 68.2425,
      "d": 11.16,
      "sd": 15.0,
      "medium": 5
    },
    {
      "label": "9",
      "R": -20.865,
      "d": 3.5325,
      "sd": 15.0,
      "medium": 6
    },
    {
      "label": "10",
      "R": -82.8675,
      "d": 42.716158,
      "sd": 15.0
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: infinity scaled normalized EII representative only"
  },
  "aperture": {
    "nominalFNumber": 1.86,
    "fStops": [
      1.86,
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
    "fullFieldDeg": 40,
    "maxTraceFieldDeg": 20
  },
  "layout": {
    "yScFill": 0.7
  },
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "D2",
      "fromSurface": "8",
      "toSurface": "10"
    }
  ]
} satisfies LensDataV2Input;

export default LENS_DATA;
