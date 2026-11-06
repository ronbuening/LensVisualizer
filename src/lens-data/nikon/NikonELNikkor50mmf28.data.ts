import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * NIKON EL-NIKKOR 50mm f/2.8 (first version, 6 elements / 4 groups)
 *
 * Data source: US 2,906,174, sole numerical example (Zenji Wakimoto / Nippon Kogaku K.K.;
 * filed 31 July 1957, granted 29 September 1959), printed at f = 100.0, F/2.5. Nikon credits the
 * original EL-Nikkor 50mm f/2.8 to Wakimoto, and its published section shows the same 6/4 layout;
 * the example is a probable production correlation, not a confirmed factory prescription.
 *
 * NOTE ON SCALING:
 *   Every length (R, d, sd and the back focus) is the patent value x 0.5, taking the f = 100 design
 *   to the 50 mm production focal length. All surfaces are spherical, so nothing else is transformed.
 *   R, d, nd and vd are otherwise as printed; the description table and the claim table agree.
 *   Computed EFL 49.997 mm (patent f = 100.0 scaled to 50.0); computed F/2.500 at the design F/2.5.
 *
 * NOTE ON BACK FOCUS:
 *   The patent prints no back focus. The last gap is the paraxial back focus of the scaled table,
 *   so the image plane sits at the computed infinity focus.
 *
 * NOTE ON STOP POSITION:
 *   The patent gives only the air space l2 = 12.89 between L3 and L4 and places the diaphragm in it.
 *   Its figure draws the diaphragm about 65 % of the way from r5 to r6, so the scaled l2 = 6.445 mm
 *   is split 4.19 + 2.255 mm. The stop radius follows from the design F/2.5.
 *
 * NOTE ON SEMI-DIAMETERS:
 *   The patent prints no clear apertures. All rims are measured from the patent figure (its vertex
 *   spacing matches the table) and scaled x 0.5: L1 13.5; L2/L3 11.2, with the r5 curve ending at
 *   7.0 where the figure draws a flat land and bevel; L4 7.7 on both faces (square rim); L5/L6 7.25
 *   at r8 (land and bevel beyond it), 11.1 at r9 and r10. Every rim clears the axial F/2.5 beam;
 *   off-axis vignetting is kept as these rims give it.
 *
 * GLASSES: the printed d-line nd / vd pairs are kept as unmatched coordinates; the patent names no
 *   glass maker.
 *
 * FOCUS: the patent tabulates only the infinity state. As an enlarging lens it focuses as a unit;
 *   no finite conjugate is modeled.
 */

const LENS_DATA = {
  "schema": 2,
  "key": "nikon-el-nikkor-50mm-f28",
  "maker": "Nikon",
  "name": "NIKON EL-NIKKOR 50mm f/2.8",
  "subtitle": "US 2,906,174 — f = 100 design scaled 0.5×; probable first-version EL-Nikkor 50mm f/2.8",
  "catalog": {
    "lensMounts": ["enlarging-lens"],
    "imageFormat": "135-full-frame",
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 50,
      "design": 50
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.5
    },
    "specs": ["6 ELEMENTS / 4 GROUPS", "DESIGN f = 100 mm (SCALED 0.5× TO 50 mm)", "DESIGN F/2.5", "ALL SPHERICAL"]
  },
  "source": {
    "patentNumber": "US 2,906,174",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1959,
    "authors": ["Zenji Wakimoto"],
    "assignees": ["Nippon Kogaku K.K."]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.6172,
      "vd": 54.0,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 66.53598927179367,
      "role": "Component I: front positive meniscus, convex to the object and concave toward the stop; the first collector of the Gauss-type front pair."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.6228,
      "vd": 56.9,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 26.940079526917735,
      "role": "Positive front member of cemented component II; its strong front face carries most of the front pair's positive power.",
      "cemented": "CD1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.62045,
      "vd": 38.0,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -17.92581451681709,
      "role": "Flint negative member of component II, nearly plano-concave; its deep rear face, concave to the stop, is the main negative surface ahead of the diaphragm.",
      "cemented": "CD1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.62041,
      "vd": 60.3,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 43.48559946230376,
      "role": "Component III: thick positive meniscus concave to the stop; the patent credits its two faces with separating the sagittal and meridional fields to correct field curvature and astigmatism."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.54869,
      "vd": 45.4,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": -17.161952165452796,
      "role": "Negative front member of cemented component IV; its front face, concave to the stop, bounds the diverging air space after L4.",
      "cemented": "CD2"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.63854,
      "vd": 55.5,
      "indexReference": "d",
      "glass": "Unmatched (literal source d-line coordinates; supplier and full dispersion unproved)",
      "focalLengthMm": 20.79499678712583,
      "role": "Positive rear member of component IV and the strongest positive element; it closes the asymmetric wide-angle-type rear pair.",
      "cemented": "CD2"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 29.675,
      "d": 3.73,
      "sd": 13.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 101.85,
      "d": 0.29,
      "sd": 13.5
    },
    {
      "label": "3",
      "R": 17.345,
      "d": 6.05,
      "sd": 11.2,
      "medium": 2
    },
    {
      "label": "4",
      "R": -444.775,
      "d": 1.8,
      "sd": 11.2,
      "medium": 3
    },
    {
      "label": "5",
      "R": 11.425,
      "d": 4.19,
      "sd": 7.0
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.255
    },
    {
      "label": "6",
      "R": -35.37,
      "d": 5.765,
      "sd": 7.7,
      "medium": 4
    },
    {
      "label": "7",
      "R": -16.26,
      "d": 1.165,
      "sd": 7.7
    },
    {
      "label": "8",
      "R": -11.455,
      "d": 1.355,
      "sd": 7.25,
      "medium": 5
    },
    {
      "label": "9",
      "R": 55.135,
      "d": 7.125,
      "sd": 11.1,
      "medium": 6
    },
    {
      "label": "10",
      "R": -16.61,
      "d": 32.162715312221174,
      "sd": 11.1
    }
  ],
  // Enlarger use, following the Rogonar-S 50mm f/2.8 file: 0.055 m is the approximate negative-side conjugate at 10×,
  // not a camera minimum-focus distance. No gap varies, so it moves nothing and the focus control stays inactive.
  "focus": {
    "closeFocusM": 0.055,
    "description": "Unit focusing as an enlarging lens: the enlarger sets the distances to negative and easel. The patent tabulates only the infinity state and no internal variable air gap; the image plane is the computed paraxial focus."
  },
  "aperture": {
    "nominalFNumber": 2.5,
    "fStops": [2.5, 4, 5.6, 8, 11, 16],
    "maxFNumber": 16
  },
  "layout": {
    "yScFill": 0.78
  },
  "groups": [
    {
      "text": "Front I–II",
      "fromSurface": "1",
      "toSurface": "5"
    },
    {
      "text": "Rear III–IV",
      "fromSurface": "6",
      "toSurface": "10"
    }
  ],
  "doublets": [
    {
      "text": "CD1",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "CD2",
      "fromSurface": "8",
      "toSurface": "10"
    }
  ]
} satisfies LensDataV2Input;

export default LENS_DATA;
