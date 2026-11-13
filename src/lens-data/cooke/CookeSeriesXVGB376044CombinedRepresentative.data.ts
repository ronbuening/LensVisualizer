import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * GB 376,044 A, sole example: the complete-lens table on p. 3 and drawing on p. 4.
 * All patent radii, thicknesses and airspaces are converted from inches to millimetres
 * by a uniform factor of 25.4; no further optical scaling or fitting is applied.
 * The stop at the midpoint of SII, all semi-diameters and the paraxial back focus
 * of 288.9792920995148 mm are inferred, not printed. L5/L6 use a common 22 mm
 * semi-diameter to follow the drawing; the other inferred rims are retained.
 * L5/L7/L8 indices and Abbe numbers are inferred from repeated Chance identifiers
 * in the table. Historical sodium-D indices are approximated as engine d-line values.
 * Only the combined infinity state is modeled; closeFocusM is a sentinel, not a
 * minimum focus distance, and separate-member operating modes are not modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "cooke-seriesxv-gb376044-combined-representative",
  "maker": "Cooke",
  "name": "Cooke Series XV 12.25-inch f/6.8 (combined patent representative)",
  "visible": false,
  "catalog": {
    "lensMounts": ["large-format-lens-board"],
    "imageFormat": "8x10",
    "elementCount": 8,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 311.15,
      "design": 313.56
    },
    "fNumber": {
      "marketing": 6.8,
      "design": 6.8
    }
  },
  "source": {
    "patentNumber": "GB 376,044 A",
    "example": { "label": "Sole example", "id": null },
    "patentYear": 1932,
    "authors": [
      "Horace William Lee"
    ],
    "assignees": [
      "Kapella Limited"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Spherical patent glass",
      "nd": 1.5472,
      "vd": 45.8,
      "indexReference": "d",
      "glass": "Source Chance458; historical D/engine d approximation, not measured melt"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.5186,
      "vd": 60.3,
      "indexReference": "d",
      "glass": "Source Chance9322; historical D/engine d approximation, not measured melt"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.6437,
      "vd": 48.3,
      "indexReference": "d",
      "glass": "Source not yet in catalogue; historical D/engine d approximation, not measured melt"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.529,
      "vd": 51.6,
      "indexReference": "d",
      "glass": "Source Chance7863; historical D/engine d approximation, not measured melt"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Spherical patent glass",
      "nd": 1.529,
      "vd": 51.6,
      "indexReference": "d",
      "glass": "Source Chance7863: blank nD/V matched to earlier identifier; historical D/engine d approximation, not measured melt"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Spherical patent glass",
      "nd": 1.6437,
      "vd": 48.3,
      "indexReference": "d",
      "glass": "Source not yet in catalogue; historical D/engine d approximation, not measured melt"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Spherical patent glass",
      "nd": 1.5186,
      "vd": 60.3,
      "indexReference": "d",
      "glass": "Source Chance9322: blank nD/V matched to earlier identifier; historical D/engine d approximation, not measured melt"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Spherical patent glass",
      "nd": 1.5472,
      "vd": 45.8,
      "indexReference": "d",
      "glass": "Source Chance458: blank nD/V matched to earlier identifier; historical D/engine d approximation, not measured melt"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 93.98,
      "d": 4.064,
      "sd": 30.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 39.116,
      "d": 9.652,
      "sd": 30.5,
      "medium": 2
    },
    {
      "label": "3",
      "R": 81.28,
      "d": 3.2004,
      "sd": 30.5
    },
    {
      "label": "4",
      "R": 79.9084,
      "d": 12.8778,
      "sd": 30.0,
      "medium": 3
    },
    {
      "label": "5",
      "R": -241.681,
      "d": 3.2258,
      "sd": 30.0,
      "medium": 4
    },
    {
      "label": "6",
      "R": 83.82,
      "d": 5.715,
      "sd": 30.0
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 5.715
    },
    {
      "label": "7",
      "R": -62.23,
      "d": 2.413,
      "sd": 22,
      "medium": 5
    },
    {
      "label": "8",
      "R": 180.0098,
      "d": 9.5758,
      "sd": 22,
      "medium": 6
    },
    {
      "label": "9",
      "R": -59.2074,
      "d": 2.413,
      "sd": 22
    },
    {
      "label": "10",
      "R": -60.198,
      "d": 7.1882,
      "sd": 22.5,
      "medium": 7
    },
    {
      "label": "11",
      "R": -29.21,
      "d": 3.048,
      "sd": 22.5,
      "medium": 8
    },
    {
      "label": "12",
      "R": -69.85,
      "d": 288.9792920995148,
      "sd": 22.5
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Only the complete lens at infinity is modeled; separate member operating modes are not modeled."
  },
  "aperture": {
    "nominalFNumber": 6.8,
    "fStops": [
      6.8,
      8,
      11,
      16,
      22,
      32
    ],
    "maxFNumber": 32
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 55,
    "maxTraceFieldDeg": 27.5
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
