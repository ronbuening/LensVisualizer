import type { TeleconverterDataInput } from "../../types/teleconverter.js";

/**
 * JP 2021-189311 A (Konica Minolta, Inc. and Nikon Corporation), Example 1: converter Tables 3-5 and Figure 3,
 * patent surfaces 1-12. Detachable converter only: six elements in four groups, L11 + CL2 (L12-L13) +
 * CL1 (L14-L15) + L16, matching Nikon's published 6 elements / 4 groups with one aspherical element and its
 * lens-construction drawing. The production correlation is not manufacturer-confirmed; Examples 2-5 share the
 * same 1.4x layout. The converter has no stop and no moving group; the host supplies aperture, focus and zoom.
 *
 * CEMENT LAYERS: Table 4 prints a 0.01 mm medium (nd 1.51400, vd 42.83) between equal radii at surfaces 4-5 and
 * 8-9. Both are modeled as printed (C1, C2), which gives eight element entries for six lens elements. The layer
 * entries carry no `cemented` tag, so the inspector counts D1 and D2 as two-element doublets.
 *
 * ASPHERE: surface 10 (stored as 10A, the rear of L15). The patent's equation (AS) uses the (1 + K) form, so
 * K = 30 is the repo's conic constant directly; A4-A10 as printed, no higher terms.
 *
 * GEOMETRY: the patent's master lens (Tables 1-2: f = 293.80 mm, F/2.88, back focus 106.97 mm) sits 78.83 mm
 * ahead of the converter (Table 3). Master surface 19 prints nd 1.58600 (vd 69.89), which gives a 268.18 mm
 * master and a combined back focus of -5.49 mm, incompatible with the stated values. Master surface 15 prints
 * nd 1.51860 for the same vd 69.89; with that index at surface 19 the master traces to f = 293.799 mm and back focus
 * 106.961 mm, so the virtual object lies 106.961 - 78.83 = 28.131 mm behind the first vertex
 * (masterImageDistanceMm; the printed 106.97 mm would give 28.14 mm). The last d = 11.42 mm is the printed
 * combined back focus; the paraxial focus lies at 11.385 mm. Combined f = 414.30 mm against the printed
 * 414.47 mm; converter f = -149.41 mm and lateral magnification 1.410 (Table 3: 1.41) as printed.
 *
 * SEMI-DIAMETERS: the patent publishes no clear apertures. Rims of 14 / 17 / 21 mm for L11-CL2 / CL1 / L16 pass
 * the f/2.88 axial beam of the patent's master and follow the relative element heights of Figure 3.
 * minHostFno 2.8 admits the f/2.8 hosts Nikon lists; the catalog Z 70-200mm f/2.8 VR S (F/2.86) traces with no
 * axial clipping.
 *
 * GLASS: nd/vd are patent values. Labels name coordinate-equal catalog glasses, which supply the dispersion
 * curve; they are not identified production melts. The cement layers have no catalog match.
 */

const TELECONVERTER_DATA = {
  "key": "nikon-z-tc-1-4x",
  "name": "NIKON Z TELECONVERTER TC-1.4x",
  "maker": "Nikon",
  "subtitle": "JP 2021-189311 A, Example 1 \u2014 production correlation",
  "specs": [
    "6 ELEMENTS / 4 GROUPS",
    "1.4\u00d7 REAR CONVERTER",
    "1 ASPHERICAL SURFACE / 1 ELEMENT"
  ],
  "lensMounts": [
    "nikon-z"
  ],
  "magnification": 1.4,
  "minHostFno": 2.8, // f/2.8 hosts on Nikon's compatibility list; rims pass the patent master's f/2.88 beam
  "masterImageDistanceMm": 28.131364558659428,
  "patentNumber": "JP 2021-189311 A",
  "patentAuthors": [
    "Katsuhiro Takamoto",
    "Yasushi Yamamoto",
    "Hiroshi Yabumoto"
  ],
  "patentAssignees": [
    "Konica Minolta, Inc.",
    "Nikon Corporation"
  ],
  "patentYear": 2021,
  "elementCount": 6,
  "groupCount": 4,
  "elements": [
    {
      "id": 1,
      "name": "L11",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.71736,
      "vd": 29.5,
      "glass": "E-FD1L class (coordinate candidate; supplier unconfirmed)",
      "fl": 48.24180454053939,
      "role": "Positive front singlet with a nearly flat object side; its power is set by the patent's condition (6-1) to balance spherical aberration against astigmatism"
    },
    {
      "id": 2,
      "name": "L12",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.883,
      "vd": 40.8,
      "glass": "TAFD30 class (coordinate candidate; supplier unconfirmed)",
      "fl": -15.596119813553997,
      "role": "High-index biconcave front member of the negative cemented doublet CL2, the converter's strongest single element",
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "C2",
      "label": "L12–L13 cement layer",
      "type": "Optical Cement Layer",
      "nd": 1.514,
      "vd": 42.83,
      "glass": "Optical cement (patent nd=1.51400, vd=42.83)",
      "role": "Cement layer of the L12–L13 doublet D1: the 0.01 mm layer printed in the patent prescription; not counted as a lens element"
    },
    {
      "id": 4,
      "name": "L13",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.68893,
      "vd": 31.16,
      "glass": "E-FD8 class (coordinate candidate; supplier unconfirmed)",
      "fl": 31.361929490327856,
      "role": "Biconvex positive rear member of CL2; offsets part of L12's power, leaving the doublet at f = −33.46 mm",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L14",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 2.001,
      "vd": 29.13,
      "glass": "TAFD55 class (coordinate candidate; supplier unconfirmed)",
      "fl": -34.29144798608921,
      "role": "Highest-index element: biconcave front member of the negative cemented doublet CL1",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "C1",
      "label": "L14–L15 cement layer",
      "type": "Optical Cement Layer",
      "nd": 1.514,
      "vd": 42.83,
      "glass": "Optical cement (patent nd=1.51400, vd=42.83)",
      "role": "Cement layer of the L14–L15 doublet D2: the 0.01 mm layer printed in the patent prescription; not counted as a lens element"
    },
    {
      "id": 7,
      "name": "L15",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.58313,
      "vd": 59.5,
      "glass": "M-BACD12 class (coordinate candidate; supplier unconfirmed)",
      "fl": 193.76762139034875,
      "role": "Weak positive rear member of CL1 and the converter's only aspherical element (image-side surface)",
      "cemented": "D2"
    },
    {
      "id": 8,
      "name": "L16",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.5168,
      "vd": 64.2,
      "glass": "BSC7 class (coordinate candidate; supplier unconfirmed)",
      "fl": 52.29314917547124,
      "role": "Largest element: positive rear singlet whose power the patent's claim 1 bounds relative to the whole converter (fL/ft = −0.35)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 280.638,
      "d": 4.4,
      "nd": 1.71736,
      "elemId": 1,
      "sd": 14
    },
    {
      "label": "2",
      "R": -39.216,
      "d": 2.94,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14
    },
    {
      "label": "3",
      "R": -29.864,
      "d": 1.3,
      "nd": 1.883,
      "elemId": 2,
      "sd": 14
    },
    {
      "label": "4",
      "R": 26.078,
      "d": 0.01,
      "nd": 1.514,
      "elemId": 3,
      "sd": 14
    },
    {
      "label": "5",
      "R": 26.078,
      "d": 7.24,
      "nd": 1.68893,
      "elemId": 4,
      "sd": 14
    },
    {
      "label": "6",
      "R": -111.73,
      "d": 3.7,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14
    },
    {
      "label": "7",
      "R": -45.931,
      "d": 1.4,
      "nd": 2.001,
      "elemId": 5,
      "sd": 17
    },
    {
      "label": "8",
      "R": 137.925,
      "d": 0.01,
      "nd": 1.514,
      "elemId": 6,
      "sd": 17
    },
    {
      "label": "9",
      "R": 137.925,
      "d": 3.99,
      "nd": 1.58313,
      "elemId": 7,
      "sd": 17
    },
    {
      "label": "10A",
      "R": -618.383,
      "d": 0.3,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17
    },
    {
      "label": "11",
      "R": 254.263,
      "d": 9.9,
      "nd": 1.5168,
      "elemId": 8,
      "sd": 21
    },
    {
      "label": "12",
      "R": -29.838,
      "d": 11.42,
      "nd": 1.0,
      "elemId": 0,
      "sd": 21
    }
  ],
  "asph": {
    "10A": {
      "K": 30.0,
      "A4": -4.72819e-06,
      "A6": 4.56226e-09,
      "A8": -1.48932e-11,
      "A10": 1.09243e-14,
      "A12": 0.0,
      "A14": 0.0
    }
  },
  "groups": [
    {
      "text": "L11 (+)",
      "fromSurface": "1",
      "toSurface": "2"
    },
    {
      "text": "CL2 (−)",
      "fromSurface": "3",
      "toSurface": "6"
    },
    {
      "text": "CL1 (−)",
      "fromSurface": "7",
      "toSurface": "10A"
    },
    {
      "text": "L16 (+)",
      "fromSurface": "11",
      "toSurface": "12"
    }
  ],
  "doublets": [
    {
      "text": "D1: L12 + L13",
      "fromSurface": "3",
      "toSurface": "6"
    },
    {
      "text": "D2: L14 + L15",
      "fromSurface": "7",
      "toSurface": "10A"
    }
  ]
} satisfies TeleconverterDataInput;

export default TELECONVERTER_DATA;
