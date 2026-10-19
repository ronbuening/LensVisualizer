import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** US 3,134,841 A sole numerical table (Helmut Knutti, Carl Zeiss).
 * The table is normalized to f = 1 and is scaled ×500 to the 500 mm focal length the patent states. No radius or
 * glass is fitted.
 * The printed 159.5 + 5 mm split of the long air gap around the diaphragm is kept. The iris radius is derived from f/8.
 * Back focus is the Gaussian 171.363385 mm, not the printed 171.4 mm (−0.037 mm).
 * Focus is a derived unit extension to the maker's 8.5 m object-to-image distance, not a recovered factory cam.
 * Semi-diameters estimated from the patent figure (p. 1, 0.250 mm/px at 300 dpi): LI 39.4, front doublet 37.3,
 * rear doublet 12.0 mm; floor-checked by real-ray trace (f/8 axial beam clears); no gap-sag override.
 * Probable production lens: the historical Hasselblad C version, Cat. No. 10 46 03, not every later 500 mm revision.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "carl-zeiss-tele-tessar-500mm-f8-c",
  "maker": "Carl Zeiss Oberkochen",
  "name": "CARL ZEISS TELE-TESSAR 500mm f/8 C",
  "subtitle": "US 3,134,841 A \u2014 sole example; probable Hasselblad C version (Cat. No. 10 46 03)",
  "catalog": {
    "lensMounts": [
      "hasselblad-v"
    ],
    "imageFormat": "6x6",
    "elementCount": 5,
    "groupCount": 3,
    "focalLengthMm": {
      "marketing": 500,
      "design": 500.09370477474863
    },
    "fNumber": {
      "marketing": 8,
      "design": 8
    },
    "specs": [
      "5 ELEMENTS / 3 GROUPS",
      "DESIGN f = 500.09 mm",
      "DESIGN F/8",
      "ALL SPHERICAL"
    ]
  },
  "source": {
    "patentNumber": "US 3,134,841 A",
    "patentYear": 1964,
    "authors": [
      "Helmut Knutti"
    ],
    "assignees": [
      "Carl-Zeiss-Stiftung"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "LI",
      "label": "Element 1",
      "diagramLabel": "LI",
      "type": "Biconvex Positive",
      "nd": 1.51009,
      "vd": 63.37,
      "glass": "BK1 (Schott legacy type; SUMITA catalog curve)",
      "focalLengthMm": 406.344974
    },
    {
      "id": 2,
      "name": "LII",
      "label": "Element 2",
      "diagramLabel": "LII",
      "type": "Biconvex Positive",
      "nd": 1.51821,
      "vd": 65.18,
      "glass": "PC2 (Hoya equivalent)",
      "focalLengthMm": 290.052308,
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "LIII",
      "label": "Element 3",
      "diagramLabel": "LIII",
      "type": "Biconcave Negative",
      "nd": 1.7552,
      "vd": 27.53,
      "glass": "E-FD4 (Hoya equivalent)",
      "focalLengthMm": -377.008997,
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "LIV",
      "label": "Element 4",
      "diagramLabel": "LIV",
      "type": "Biconvex Positive",
      "nd": 1.62004,
      "vd": 36.34,
      "glass": "F2 (Schott equivalent)",
      "focalLengthMm": 140.387089,
      "cemented": "D2"
    },
    {
      "id": 5,
      "name": "LV",
      "label": "Element 5",
      "diagramLabel": "LV",
      "type": "Biconcave Negative",
      "nd": 1.62041,
      "vd": 60.29,
      "glass": "S-BSM16 (Ohara equivalent)",
      "focalLengthMm": -86.717835,
      "cemented": "D2"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 258.52000000000004,
      "sd": 39.4,
      "d": 12,
      "medium": 1
    },
    {
      "label": "2",
      "R": -1029.1999999999998,
      "sd": 39.4,
      "d": 0.2
    },
    {
      "label": "3",
      "R": 185.67000000000002,
      "sd": 37.3,
      "d": 12,
      "medium": 2
    },
    {
      "label": "4",
      "R": -771.79,
      "sd": 37.3,
      "d": 8,
      "medium": 3
    },
    {
      "label": "5",
      "R": 453.16,
      "sd": 37.3,
      "d": 159.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 5
    },
    {
      "label": "6",
      "R": 122.32,
      "sd": 12,
      "d": 3.5,
      "medium": 4
    },
    {
      "label": "7",
      "R": -298.54,
      "sd": 12,
      "d": 3,
      "medium": 5
    },
    {
      "label": "8",
      "R": 65.88,
      "sd": 12
    }
  ],
  "focus": {
    "closeFocusM": 8.5,
    "keyframes": [
      0,
      0.0625,
      0.125,
      0.1875,
      0.25,
      0.3125,
      0.375,
      0.4375,
      0.5,
      0.5625,
      0.625,
      0.6875,
      0.75,
      0.8125,
      0.875,
      0.9375,
      1
    ],
    "description": "The whole lens moves forward as a unit. The back gap grows from 171.36 mm at infinity to 206.21 mm at the maker's 8.5 m minimum distance, measured from object to image. This extension is derived: the patent prints no finite-distance state, and the factory focusing mechanism is not modelled. The infinity back focus is the Gaussian value; the patent prints 171.4 mm."
  },
  "gaps": {
    "8": {
      "label": "BF",
      "values": [
        [
          171.36338452322235,
          173.21991896835542,
          175.1124610146502,
          177.04223596535408,
          179.01053115593703,
          181.01870020567935,
          183.06816764120748,
          185.16043393191163,
          187.2970809822941,
          189.47977813218262,
          191.7102887225248,
          193.99047729231904,
          196.3223174813251,
          198.7079007237582,
          201.1494458304846,
          203.64930957163756,
          206.2099983884669
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 8,
    "fStops": [
      8,
      11,
      16,
      22,
      32,
      45,
      64
    ],
    "maxFNumber": 64
  },
  "groups": [
    {
      "text": "FRONT",
      "fromSurface": "1",
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
      "text": "D1",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "D2",
      "fromSurface": "6",
      "toSurface": "8"
    }
  ],
  "layout": {
    "yScFill": 0.3
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
