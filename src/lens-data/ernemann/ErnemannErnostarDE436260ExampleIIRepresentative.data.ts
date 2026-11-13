import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * DE 436,260 C, Example II, page 2 and Abb. 2 on page 4 of the complete four-page patent.
 * The patent states f = 100 mm, f/1.8 and an approximately 50-degree field. This is the
 * patent's f = 100 normalisation, not a commercial 10 cm f/1.8 prescription: the f/1.8
 * Ernostar lenses were sold at 8.5, 10.5, 12.5 and 16.5 cm. Scale factor 1; all printed
 * radii, thicknesses and gaps are retained in millimetres, with no units conversion.
 * The printed nD and nu pairs are represented as nd and conventional Vd; the spectral
 * convention is qualified in the analysis. No inventor is printed; Ludwig Bertele is
 * retained as a historical attribution, not a name transcribed from this patent.
 * The stop position is printed (5.87 + 6.62 = 12.49 mm); its radius is derived for f/1.8.
 * All optical semi-diameters are inferred. Surface 7 is raised from 17.5 to 18.4 mm to
 * pass the stated axial beam; the other rims are retained. The final 56.83526107 mm gap
 * is calculated paraxial back focus, not a printed value. Only infinity is modeled;
 * closeFocusM = 1e15 is a placeholder, and the aperture range through f/22 is authored.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "ernemann-ernostar-de436260-eii-representative",
  "maker": "Ernemann",
  "name": "ERNEMANN ERNOSTAR f/1.8 (DE 436,260 Example II Design)",
  "visible": false,
  "catalog": {
    "lensMounts": ["fixed-lens-camera"],
    "imageFormat": "645",
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 100,
      "design": 100
    },
    "fNumber": {
      "marketing": 1.8,
      "design": 1.8
    }
  },
  "source": {
    "patentNumber": "DE 436,260 C",
    "patentYear": 1926,
    "example": {
      "id": "2",
      "label": "Example II"
    },
    "authors": [
      "Ludwig Bertele"
    ],
    "assignees": [
      "Ernemann-Werke AG"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Spherical patent glass",
      "nd": 1.5638,
      "vd": 60.75,
      "indexReference": "d",
      "glass": "Patent nu interpreted as conventional Vd; formula not explicit in DE reproduction; no glass identity"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.6053,
      "vd": 59.4,
      "indexReference": "d",
      "glass": "Patent nu interpreted as conventional Vd; formula not explicit in DE reproduction; no glass identity"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.6485,
      "vd": 33.8,
      "indexReference": "d",
      "glass": "Patent nu interpreted as conventional Vd; formula not explicit in DE reproduction; no glass identity"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.627,
      "vd": 39,
      "indexReference": "d",
      "glass": "Patent nu interpreted as conventional Vd; formula not explicit in DE reproduction; no glass identity"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Spherical patent glass",
      "nd": 1.6223,
      "vd": 36,
      "indexReference": "d",
      "glass": "Patent nu interpreted as conventional Vd; formula not explicit in DE reproduction; no glass identity"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Spherical patent glass",
      "nd": 1.622,
      "vd": 53.15,
      "indexReference": "d",
      "glass": "Patent nu interpreted as conventional Vd; formula not explicit in DE reproduction; no glass identity"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 50.2,
      "d": 7.26,
      "sd": 28.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 181.5,
      "d": 0.53,
      "sd": 28.0
    },
    {
      "label": "3",
      "R": 45.4,
      "d": 11.74,
      "sd": 25.0,
      "medium": 2
    },
    {
      "label": "4",
      "R": -106.8,
      "d": 6.94,
      "sd": 25.0,
      "medium": 3
    },
    {
      "label": "5",
      "R": -41.6,
      "d": 1.07,
      "sd": 25.0,
      "medium": 4
    },
    {
      "label": "6",
      "R": 92,
      "d": 4.46,
      "sd": 25.0
    },
    {
      "label": "7",
      "R": -179,
      "d": 1.07,
      "sd": 18.4,
      "medium": 5
    },
    {
      "label": "8",
      "R": 30.4,
      "d": 5.87,
      "sd": 17.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 6.62
    },
    {
      "label": "9",
      "R": 85.4,
      "d": 5.34,
      "sd": 20.0,
      "medium": 6
    },
    {
      "label": "10",
      "R": -85.4,
      "d": 56.83526107,
      "sd": 20.0
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Only the infinity prescription is modeled because the patent provides no focusing data."
  },
  "aperture": {
    "nominalFNumber": 1.8,
    "fStops": [
      1.8,
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
    "fullFieldDeg": 50,
    "maxTraceFieldDeg": 25
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
