import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,983,191 A, sole example (PDF page 3), Johann Lautenbacher, Enna-Werk.
 * Lithagon 2,8/35: patent design f/2.5, marketed lens f/2.8.
 * Scale factor 35: multiply the source's normalized f = 1 radii, thicknesses,
 * air gaps and back focus by 35 to convert them to millimetres; n and ν are unchanged.
 * The unmarked stop is inferred at the l3 midpoint, splitting its 3.955 mm gap
 * into 1.9775 mm on each side; its opening is derived from the design f/2.5.
 * Semi-diameters are inferred from the sole figure's proportions, not published
 * clear apertures: L1 16/14.2 mm, L2 9.5 mm, L3 8.5 mm, L4 7.9 mm and C1 9.3 mm.
 * The schematic drawing exaggerates some axial thicknesses; L1's unequal faces
 * approximate its beveled outline. L2, L1's rear face and C1 retain extra aperture
 * to keep geometric transmission within 3 percentage points of the starting rims.
 * All rims clear the f/2.5 axial beam and full-frame chief ray. No lands are added.
 * Back focus is not inferred: the final gap
 * retains the printed s′ = 1.00950 scaled to 35.3325 mm.
 * The indices agree with helium-d catalog values. Glass labels name catalog
 * equivalents within the printed index/Abbe tolerances, not a supplier or melt.
 * Only the infinity prescription is modeled; the standard-mount brochure's
 * approximate 0.46 m close focus is catalog information, not modeled focus travel.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "enna-munchen-lithagon-35mm-f28",
  "maker": "Enna München",
  "name": "ENNA MÜNCHEN LITHAGON 35mm f/2.8",
  "subtitle": "US 2,983,191 A, sole example — Lithagon 2,8/35",
  "visible": true,
  "catalog": {
    "specs": ["6 ELEMENTS / 5 GROUPS", "ALL SPHERICAL", "DESIGN F/2.5", "f/2.8–22"],
    "lensMounts": ["exakta", "m42"],
    "imageFormat": "135-full-frame",
    "closeFocusM": {
      "marketing": 0.46
    },
    "elementCount": 6,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 35,
      "design": 35
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.5
    }
  },
  "source": {
    "patentNumber": "US 2,983,191 A",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1961,
    "authors": [
      "Johann Lautenbacher"
    ],
    "assignees": [
      "Enna-Werk Optische Anstalt Dr. Appelt K.G."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "role": "Front negative element of the long-back-focus retrofocus layout.",
      "nd": 1.51821,
      "vd": 65.2,
      "indexReference": "d",
      "glass": "PC2 (Hoya catalog equivalent)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "role": "Front positive singlet of the rear assembly.",
      "nd": 1.744,
      "vd": 44.7,
      "indexReference": "d",
      "glass": "S-LAM2 (Ohara catalog equivalent)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "role": "Positive singlet immediately before the iris.",
      "nd": 1.69347,
      "vd": 53.5,
      "indexReference": "d",
      "glass": "H-LaK6A (CDGM catalog equivalent)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "role": "High-dispersion negative singlet behind the iris.",
      "nd": 1.68893,
      "vd": 31.1,
      "indexReference": "d",
      "glass": "PBM28 (Ohara catalog equivalent)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "role": "Negative front member of the rear cemented doublet.",
      "cemented": "C1",
      "nd": 1.6668,
      "vd": 33.1,
      "indexReference": "d",
      "glass": "PBM39 (Ohara catalog equivalent)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "role": "Positive rear member of the rear cemented doublet.",
      "cemented": "C1",
      "nd": 1.691,
      "vd": 54.9,
      "indexReference": "d",
      "glass": "J-LAK9 (Hikari catalog equivalent)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 101.5,
      "d": 1.4,
      "sd": 16.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 27.615,
      "d": 15.4,
      "sd": 14.2
    },
    {
      "label": "3",
      "R": 32.55,
      "d": 2.45,
      "sd": 9.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": -206.5,
      "d": 0.07,
      "sd": 9.5
    },
    {
      "label": "5",
      "R": 21.4725,
      "d": 2.03,
      "sd": 8.5,
      "medium": 3
    },
    {
      "label": "6",
      "R": 49.0,
      "d": 1.9775,
      "sd": 8.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.9775
    },
    {
      "label": "7",
      "R": -32.9,
      "d": 1.925,
      "sd": 7.9,
      "medium": 4
    },
    {
      "label": "8",
      "R": 18.305,
      "d": 2.87,
      "sd": 7.9
    },
    {
      "label": "9",
      "R": 134.75,
      "d": 2.45,
      "sd": 9.3,
      "medium": 5
    },
    {
      "label": "10",
      "R": 49.0,
      "d": 4.2,
      "sd": 9.3,
      "medium": 6
    },
    {
      "label": "11",
      "R": -18.515,
      "d": 35.3325,
      "sd": 9.3
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the patent gives no finite-focus spacings."
  },
  "aperture": {
    "nominalFNumber": 2.5,
    "fStops": [
      2.5,
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
    "fullFieldDeg": 65,
    "maxTraceFieldDeg": 32.5
  },
  "doublets": [{ "text": "C1", "fromSurface": "9", "toSurface": "11" }],
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
