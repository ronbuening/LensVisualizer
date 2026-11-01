import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * Carl Zeiss Sonnar 150mm f/4 for Hasselblad, from US 2,720,140 (Günther Lange, Carl Zeiss, Heidenheim; filed 14 July
 * 1954, granted 11 October 1955), Example III, Fig. 3, repeated in claim 4. The design is associated with the production
 * lens; it is not a confirmed factory prescription.
 *
 * Printed: radii, thicknesses and air spaces normalized to f = 1, nd at the d-line, V, f/4, image angle ±14°. All lengths
 * are scaled ×151.2, the focal length Zeiss prints for the lens; the model gives EFL 151.199 mm.
 * Not printed: back focus, stop position, clear apertures. The last gap is the computed paraxial back focus, 81.019 mm.
 * The stop sits 60 % of the way through l2 (z 47.99 mm); Fig. 3 draws it at 60.2 % (z 48.07 mm). The Zeiss sheet pupils
 * imply 51–55 %, and the figure is kept.
 * Semi-diameters are estimated from Fig. 3 at 11.05 px/mm along the axis and floor-checked by real-ray trace: S1/S2 22.6,
 * S3/S4 19.2, S6 15.1, S7 16.5, S8 19.7. Arc fits of S1, S3, S5 and S7 give 10.65 px/mm across the axis, which leaves
 * S1/S2, S3/S4, S7 and S8 up to 3.3 % under the figure, inside the reading noise. S5 is 12.771 mm, inside the figure's
 * 12.1–12.9 mm band; the f/4 axial ray reaches 12.59 mm there, the tightest margin in the lens. The figure's flat lands are
 * drawn with rimExtensionSd, which leaves the clear apertures unchanged: S5 out to the 19.2 mm rim, S6 out to 16.5 mm, where
 * L4 is cut square. The figure's chamfers are not drawn: L3 keeps a square corner, and a cemented face takes no land, so one
 * straight edge joins the S7 and S8 rims.
 * closeFocusM is the retail 1.4 m. The patent prints no focus data, so the geometry stays at infinity.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "zeiss-sonnar-150f4-hasselblad",
  "maker": "Carl Zeiss Oberkochen",
  "name": "CARL ZEISS SONNAR 150mm f/4 (Hasselblad)",
  "subtitle": "US 2,720,140, Example III — close relative of the Hasselblad production lens, not proven identical",
  "visible": true,
  "catalog": {
    "lensMounts": [
      "hasselblad-v"
    ],
    "imageFormat": "6x6",
    "elementCount": 5,
    "groupCount": 3,
    "focalLengthMm": {
      "marketing": 150,
      "design": 151.2
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    },
    "specs": [
      "5 ELEMENTS / 3 GROUPS",
      "DESIGN f = 151.2 mm",
      "DESIGN F/4",
      "ALL SPHERICAL"
    ]
  },
  "source": {
    "patentNumber": "US 2,720,140",
    "example": {
      "label": "Example III",
      "id": "3"
    },
    "patentYear": 1955,
    "authors": [
      "Günther Lange"
    ],
    "assignees": [
      "Carl-Zeiss-Stiftung"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.66672,
      "vd": 48.4,
      "indexReference": "d",
      "glass": "BAF11 (SUMITA, coordinate equivalent)",
      "focalLengthMm": 160.7683381134462,
      "role": "Uncemented positive meniscus forming the front component"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.62041,
      "vd": 60.3,
      "indexReference": "d",
      "glass": "SK16 (SCHOTT, coordinate equivalent)",
      "focalLengthMm": 52.04265732894149,
      "cemented": "C1",
      "role": "Positive member of the cemented middle component"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.72342,
      "vd": 38.0,
      "indexReference": "d",
      "glass": "S-BAH28 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -31.802792588468563,
      "cemented": "C1",
      "role": "Negative member of the middle component, concave toward the stop"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.70154,
      "vd": 41.1,
      "indexReference": "d",
      "glass": "BASF7 (SUMITA, coordinate equivalent)",
      "focalLengthMm": 35.591093796342406,
      "cemented": "C2",
      "role": "Positive member of the cemented rear component"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.6014,
      "vd": 38.3,
      "indexReference": "d",
      "glass": "F5 coordinate proxy (source nd=1.60140, νd=38.3; production glass unspecified)",
      "focalLengthMm": -46.9440448270829,
      "cemented": "C2",
      "role": "Larger negative meniscus closing the rear component"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 74.8187496,
      "d": 10.975608,
      "sd": 22.6,
      "medium": 1
    },
    {
      "label": "2",
      "R": 233.219952,
      "d": 0.24948,
      "sd": 22.6
    },
    {
      "label": "3",
      "R": 34.3967904,
      "d": 15.963696,
      "sd": 19.2,
      "medium": 2
    },
    {
      "label": "4",
      "R": -433.024704,
      "d": 2.24532,
      "sd": 19.2,
      "medium": 3
    },
    {
      "label": "5",
      "R": 24.3506088,
      "d": 18.5576832,
      "sd": 12.771,
      "rimExtensionSd": 19.2
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 12.3717888
    },
    {
      "label": "6",
      "R": 529.674768,
      "d": 10.975608,
      "sd": 15.1,
      "rimExtensionSd": 16.5,
      "medium": 4
    },
    {
      "label": "7",
      "R": -25.97994,
      "d": 10.476648,
      "sd": 16.5,
      "medium": 5
    },
    {
      "label": "8",
      "R": -374.986584,
      "d": 81.01943388646856,
      "sd": 19.7
    }
  ],
  "focus": {
    "closeFocusM": 1.4,
    "description": "The model stays at infinity. The patent prints no focus data, so no focus motion is modeled, and 1.4 m is the retail minimum focus distance, not a modeled state. The image plane is the computed paraxial focus, 81.02 mm behind the last surface; the patent prints no back focus. The patent's 14° half field reaches 37.91 mm on the image plane. The 39.6 mm corner of the 6x6 format lies at 14.59°, just beyond the printed field."
  },
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
      4,
      5.6,
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
    "fullFieldDeg": 28,
    "maxTraceFieldDeg": 14
  },
  "groups": [
    {
      "text": "FRONT",
      "fromSurface": "1",
      "toSurface": "2"
    },
    {
      "text": "MIDDLE",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "REAR",
      "fromSurface": "6",
      "toSurface": "8"
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "C2",
      "fromSurface": "6",
      "toSurface": "8"
    }
  ],
  "layout": {
    "yScFill": 0.38
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
