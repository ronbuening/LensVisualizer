import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Source: GB 198,958 A, Example I (first numerical table, printed p. 2; Fig. 1).
 * Native nominal 12-inch f/6 design; scale factor 1, with no production rescaling.
 * All source lengths in inches are converted to millimetres by multiplying by 25.4;
 * refractive indices and Abbe numbers are unchanged.
 * The stop position at the midpoint of the 2.73-inch air gap is inferred, and its
 * radius is derived from f/6. Rims are not inferred: the printed group diameters
 * 2.05 and 1.5 inches give semi-diameters 26.035 and 19.05 mm. The final back focus
 * is calculated (151.80322609880798 mm), not tabulated. The 15-degree half-field
 * is a modeling limit chosen to trace the assigned 4x5 format, not a patent field.
 * Infinity only; no focusing data are tabulated. Historical nD is approximated by
 * the engine's d line; the glass identifiers do not establish measured dispersion.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "cooke-series-viii-telephoto-gb198958",
  "maker": "Cooke",
  "name": "COOKE SERIES VIII TELEPHOTO (GB 198,958 Example I Design)",
  "visible": true,
  "catalog": {
    "lensMounts": ["large-format-lens-board"],
    "imageFormat": "4x5",
    "elementCount": 4,
    "groupCount": 2,
    "focalLengthMm": {
      "design": 304.8
    },
    "fNumber": {
      "marketing": 5.6,
      "design": 6
    }
  },
  "source": {
    "patentNumber": "GB 198,958 A",
    "example": {
      "label": "Example I",
      "id": "1"
    },
    "patentYear": 1923,
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
      "nd": 1.5744,
      "vd": 57.7,
      "indexReference": "d",
      "glass": "Chance9002; conventional Vd interpretation, historical D/engine d approximation, no melt equivalence"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.6515,
      "vd": 33.4,
      "indexReference": "d",
      "glass": "Parra-Mantois6661; conventional Vd interpretation, historical D/engine d approximation, no melt equivalence"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.5732,
      "vd": 51.9,
      "indexReference": "d",
      "glass": "Parra-Mantois6062; conventional Vd interpretation, historical D/engine d approximation, no melt equivalence"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.6117,
      "vd": 37.4,
      "indexReference": "d",
      "glass": "Parra-Mantois6695 sourceEI, vs6675 sourceEII; conventional Vd interpretation, historical D/engine d approximation, no melt equivalence"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 54.61,
      "d": 10.668,
      "sd": 26.035,
      "medium": 1
    },
    {
      "label": "2",
      "R": -157.988,
      "d": 3.048,
      "sd": 26.035,
      "medium": 2
    },
    {
      "label": "3",
      "R": 143.51,
      "d": 34.671,
      "sd": 26.035
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 34.671
    },
    {
      "label": "4",
      "R": -34.29,
      "d": 2.032,
      "sd": 19.05,
      "medium": 3
    },
    {
      "label": "5",
      "R": "flat",
      "d": 5.08,
      "sd": 19.05,
      "medium": 4
    },
    {
      "label": "6",
      "R": -54.102,
      "d": 151.80322609880798,
      "sd": 19.05
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity only; the patent tabulates no focusing data, so no focus movement is modeled."
  },
  "aperture": {
    "nominalFNumber": 6,
    "fStops": [
      6,
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
    "fullFieldDeg": 30,
    "maxTraceFieldDeg": 15
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
