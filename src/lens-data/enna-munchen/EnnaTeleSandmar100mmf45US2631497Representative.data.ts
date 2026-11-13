import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,631,497 A, sole numerical example and repeated claim 3 table (PDF page 3).
 * Native 100 mm f/4.5 prescription; scale factor 1, with dimensions already in mm
 * and no units conversion. All seven radii, six glass/air intervals and four
 * sodium-D index/Abbe pairs are retained as printed.
 * The stop's 14.5/14.5 mm split of the 29 mm gap is inferred from "substantially
 * midway". The 15.5 mm front and 9 mm rear semi-diameters are inferred geometry
 * limits, larger than the figure, and await the SD pass. The final image interval
 * is calculated back focus, not a printed source value. Only infinity is modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "enna-tele-sandmar100-us2631497-representative",
  "maker": "Enna München",
  "name": "Enna Tele-Sandmar 100mm f/4.5 (patent representative)",
  "visible": false,
  "catalog": {
    "imageFormat": "135-full-frame",
    "elementCount": 4,
    "groupCount": 3,
    "focalLengthMm": {
      "marketing": 100,
      "design": 100
    },
    "fNumber": {
      "marketing": 4.5,
      "design": 4.5
    }
  },
  "source": {
    "patentNumber": "US 2,631,497 A",
    "example": { "label": "Sole example", "id": null },
    "patentYear": 1953,
    "authors": [
      "Franz Schlegel"
    ],
    "assignees": [
      "Harry J. Graw"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Spherical patent glass",
      "nd": 1.62398,
      "vd": 47,
      "indexReference": "D",
      "glass": "Source sodiumD589.3nm; d-reference engine approximation, no exact melt"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.74066,
      "vd": 27.2,
      "indexReference": "D",
      "glass": "Source sodiumD589.3nm; d-reference engine approximation, no exact melt"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.61008,
      "vd": 46,
      "indexReference": "D",
      "glass": "Source sodiumD589.3nm; d-reference engine approximation, no exact melt"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.72719,
      "vd": 28,
      "indexReference": "D",
      "glass": "Source sodiumD589.3nm; d-reference engine approximation, no exact melt"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 24.01,
      "d": 10,
      "sd": 15.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": -40.877,
      "d": 1.2,
      "sd": 15.5,
      "medium": 2
    },
    {
      "label": "3",
      "R": 70.942,
      "d": 14.5,
      "sd": 15.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 14.5
    },
    {
      "label": "4",
      "R": -13.395,
      "d": 0.8,
      "sd": 9,
      "medium": 3
    },
    {
      "label": "5",
      "R": -97.629,
      "d": 0.03,
      "sd": 9
    },
    {
      "label": "6",
      "R": "flat",
      "d": 1.7,
      "sd": 9,
      "medium": 4
    },
    {
      "label": "7",
      "R": -27.623,
      "d": 39.07198037168,
      "sd": 9
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000,
    "description": "Only the infinity-focus prescription is modeled."
  },
  "aperture": {
    "nominalFNumber": 4.5,
    "fStops": [
      4.5,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
  },
  "projection": {
    "kind": "rectilinear"
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
