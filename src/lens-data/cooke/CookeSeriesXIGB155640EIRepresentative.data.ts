import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * GB 155,640 A, Example I (printed page 2; Figure 1), Taylor, Taylor & Hobson Limited
 * and Horace William Lee. The patent states an equivalent focal length of 1 unit,
 * aperture f/3 and full field of 45 degrees.
 *
 * SCALE AND UNITS: uniform ×158.75 conversion: 1 patent unit becomes 158.75 mm
 * (6¼ in), applying ×1.5875 to the previous millimetre prescription. Every radius,
 * thickness, air gap, semi-diameter and image circle uses the same linear factor.
 * Cooke's Compendium reports the patent inscription on 5 in and 6¼ in Series XI
 * lenses. The Science Museum's quarter-plate Thornton-Pickard Junior Special has
 * a Series XI 6¼ in f/3.5–16. Example I's 45-degree field supports that association;
 * its patent f/3 opening is retained separately from the retail f/3.5 rating.
 * The product-to-example association does not establish an exact factory prescription.
 *
 * INFERRED VALUES: the stop is midway through the 17.0815 mm rear air gap,
 * 8.54075 mm from each adjacent vertex; its opening is derived for f/3. The rims
 * are not inferred: printed diameters give semi-diameters 26.9875, 23.8125 and
 * 23.8125 mm. The final 135.45463 mm gap is calculated paraxial back focus,
 * not printed. Catalog design focal length is computed paraxial EFL, rounded to
 * two decimals. The 131.5085 mm image circle scales the previous field-derived
 * circle; it does not certify edge illumination or image quality.
 * The printed sodium D-line index is approximated by engine d; Nu is interpreted
 * as conventional Vd. Only infinity focus is represented.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "cooke-seriesxi-gb155640-ei-representative",
  "maker": "Cooke",
  "name": "COOKE SERIES XI 6¼ in f/3.5",
  "visible": false,
  "catalog": {
    "lensMounts": [
      "large-format-lens-board"
    ],
    "imageCircleMm": 131.5085,
    "elementCount": 3,
    "groupCount": 3,
    "focalLengthMm": {
      "marketing": 158.75,
      "design": 158.53
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3
    }
  },
  "source": {
    "patentNumber": "GB 155,640 A",
    "example": {
      "label": "Example I",
      "id": "1"
    },
    "patentYear": 1920,
    "authors": [
      "Horace William Lee"
    ],
    "assignees": [
      "Taylor, Taylor & Hobson Limited"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Spherical patent glass",
      "nd": 1.613,
      "vd": 58.5,
      "indexReference": "d",
      "glass": "Source Parra-Mantois 6540; conventional Vd interpretation, historical D/engine d approximation; no measured melt curve"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.621,
      "vd": 36.2,
      "indexReference": "d",
      "glass": "Source Chance 361; conventional Vd interpretation, historical D/engine d approximation; no measured melt curve"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.613,
      "vd": 58.5,
      "indexReference": "d",
      "glass": "Source Parra-Mantois 6540; conventional Vd interpretation, historical D/engine d approximation; no measured melt curve"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 63.706375,
      "d": 9.525,
      "sd": 26.9875,
      "medium": 1
    },
    {
      "label": "2",
      "R": -852.4875,
      "d": 15.875,
      "sd": 26.9875
    },
    {
      "label": "3",
      "R": -74.64425,
      "d": 1.5875,
      "sd": 23.8125,
      "medium": 2
    },
    {
      "label": "4",
      "R": 63.515875,
      "d": 8.54075,
      "sd": 23.8125
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 8.54075
    },
    {
      "label": "5",
      "R": 372.26875,
      "d": 9.525,
      "sd": 23.8125,
      "medium": 3
    },
    {
      "label": "6",
      "R": -60.22975,
      "d": 135.45463,
      "sd": 23.8125
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000,
    "description": "This 6¼ in patent reconstruction represents infinity focus only."
  },
  "aperture": {
    "nominalFNumber": 3,
    "fStops": [
      3,
      3.5,
      4,
      5.6,
      8,
      11,
      16
    ],
    "maxFNumber": 16
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 45,
    "maxTraceFieldDeg": 22.5
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
