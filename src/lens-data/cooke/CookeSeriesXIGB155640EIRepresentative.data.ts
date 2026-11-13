import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * GB 155,640 A, Example I (printed page 2; Figure 1), Taylor, Taylor & Hobson Limited
 * and Horace William Lee. The patent states an equivalent focal length of 1 unit,
 * aperture f/3 and full field of 45 degrees.
 *
 * SCALE AND UNITS: retain the uniform x100 normalisation: 1 patent unit becomes
 * 100 mm. All radii, thicknesses, air gaps and printed diameters use that conversion;
 * semi-diameters are half the converted diameters. No 100 mm Series XI was sold;
 * the documented retail focal lengths were 5 in and 6 1/4 in, at f/3.5.
 * This model is the normalised patent design, not a retail focal-length prescription.
 *
 * INFERRED VALUES: the stop is placed midway through the 10.76 mm rear air gap,
 * 5.38 mm from each adjacent vertex; its opening is derived for f/3. The rims are
 * not inferred: the printed diameters give semi-diameters of 17, 15 and 15 mm.
 * The final 85.3257513035 mm gap is calculated paraxial back focus, not printed.
 * The 82.84 mm image circle is derived from the stated 45-degree field at the
 * nominal 100 mm scale; it does not certify edge illumination or image quality.
 * The printed sodium D-line index is approximated by engine d; Nu is interpreted
 * as conventional Vd. Only infinity focus is represented.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "cooke-seriesxi-gb155640-ei-representative",
  "maker": "Cooke",
  "name": "COOKE SERIES XI f/3 (GB 155,640 Example I Design)",
  "visible": false,
  "catalog": {
    "lensMounts": ["large-format-lens-board"],
    "imageCircleMm": 82.84,
    "elementCount": 3,
    "groupCount": 3,
    "focalLengthMm": {
      "design": 100
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3
    }
  },
  "source": {
    "patentNumber": "GB 155,640 A",
    "example": { "label": "Example I", "id": "1" },
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
      "R": 40.13,
      "d": 6,
      "sd": 17,
      "medium": 1
    },
    {
      "label": "2",
      "R": -537,
      "d": 10,
      "sd": 17
    },
    {
      "label": "3",
      "R": -47.02,
      "d": 1,
      "sd": 15,
      "medium": 2
    },
    {
      "label": "4",
      "R": 40.01,
      "d": 5.38,
      "sd": 15
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 5.38
    },
    {
      "label": "5",
      "R": 234.5,
      "d": 6,
      "sd": 15,
      "medium": 3
    },
    {
      "label": "6",
      "R": -37.94,
      "d": 85.3257513035,
      "sd": 15
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000,
    "description": "This normalised patent model represents infinity focus only."
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
