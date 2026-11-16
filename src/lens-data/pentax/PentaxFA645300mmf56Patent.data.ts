/**
 * Literal US20020041452A1 Table 1, unscaled. Clear SDs are heuristic, not measured.
 * Refinement audit 2026-11-16 retains every R/d/nd/Vd/stop/SD and source image plane.
 * Partial-dispersion constraints on L3/L4 do not establish full spectral dispersion.
 * Patent field is 6.7 degrees half-angle; the 645 format corner exceeds it slightly.
 */
import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "layout": {
    "yScFill": 0.42
  },
  "schema": 2,
  "key": "pentax-fa645-300mm-f56-patent-e1",
  "maker": "Pentax",
  "name": "PENTAX FA645 300mm f/5.6 PATENT MODEL",
  "subtitle": "US20020041452A1 Embodiment 1; infinity-only representative, factory prescription unverified",
  "catalog": {
    "lensMounts": [
      "pentax-645"
    ],
    "imageFormat": "645",
    "elementCount": 7,
    "groupCount": 7,
    "focalLengthMm": {
      "marketing": 300,
      "design": 292.35
    },
    "fNumber": {
      "marketing": 5.6,
      "design": 5.7
    },
    "specs": [
      "7 ELEMENTS / 7 GROUPS",
      "REPRESENTATIVE PATENT MODEL",
      "INFINITY ONLY"
    ]
  },
  "source": {
    "patentNumber": "US 2002/0041452 A1",
    "example": {
      "label": "Embodiment 1",
      "id": "1"
    },
    "patentYear": 2002,
    "authors": [
      "Hiroyasu Ozaki"
    ],
    "assignees": [
      "Asahi Kogaku Kogyo K.K."
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Patent singlet",
      "nd": 1.48749,
      "vd": 70.2,
      "glass": "Unmatched (literal patent nd/Vd)",
      "role": "Literal source; dispersion approximated from nd/Vd, not exact identified catalog melt."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Patent singlet",
      "nd": 1.497,
      "vd": 81.6,
      "glass": "Unmatched (literal patent nd/Vd)",
      "role": "Literal source; dispersion approximated from nd/Vd, not exact identified catalog melt."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Patent singlet",
      "nd": 1.66998,
      "vd": 39.3,
      "glass": "Unmatched (literal patent nd/Vd)",
      "role": "Literal source; dispersion approximated from nd/Vd, not exact identified catalog melt.",
      "dPgF": -0.0002974,
      "apdNote": "Literal source PgF 0.5774; deviation converted to engine normal line, not a catalog glass identity."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Patent singlet",
      "nd": 1.65412,
      "vd": 39.7,
      "glass": "Unmatched (literal patent nd/Vd)",
      "role": "Literal source; dispersion approximated from nd/Vd, not exact identified catalog melt.",
      "dPgF": -0.0067246,
      "apdNote": "Literal source PgF 0.5703; deviation converted to engine normal line, not a catalog glass identity."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Patent singlet",
      "nd": 1.80518,
      "vd": 25.4,
      "glass": "Unmatched (literal patent nd/Vd)",
      "role": "Literal source; dispersion approximated from nd/Vd, not exact identified catalog melt."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Patent singlet",
      "nd": 1.56732,
      "vd": 42.8,
      "glass": "Unmatched (literal patent nd/Vd)",
      "role": "Literal source; dispersion approximated from nd/Vd, not exact identified catalog melt."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Patent singlet",
      "nd": 1.834,
      "vd": 37.2,
      "glass": "Unmatched (literal patent nd/Vd)",
      "role": "Literal source; dispersion approximated from nd/Vd, not exact identified catalog melt."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 100.7,
      "d": 7.85,
      "sd": 31,
      "medium": 1
    },
    {
      "label": "2",
      "R": -249.207,
      "d": 0.3,
      "sd": 31
    },
    {
      "label": "3",
      "R": 65.656,
      "d": 8.22,
      "sd": 30,
      "medium": 2
    },
    {
      "label": "4",
      "R": -4951.776,
      "d": 0.99,
      "sd": 30
    },
    {
      "label": "5",
      "R": -355.189,
      "d": 3.1,
      "sd": 26,
      "medium": 3
    },
    {
      "label": "6",
      "R": 85.68,
      "d": 30.51,
      "sd": 26
    },
    {
      "label": "7",
      "R": 535.1,
      "d": 2.6,
      "sd": 22,
      "medium": 4
    },
    {
      "label": "8",
      "R": 50.46,
      "d": 9.63,
      "sd": 22
    },
    {
      "label": "9",
      "R": 58,
      "d": 3.81,
      "sd": 21,
      "medium": 5
    },
    {
      "label": "10",
      "R": 95,
      "d": 20.25,
      "sd": 21
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.5
    },
    {
      "label": "11",
      "R": 2639.805,
      "d": 4.44,
      "sd": 19,
      "medium": 6
    },
    {
      "label": "12",
      "R": -75.123,
      "d": 33.84,
      "sd": 19
    },
    {
      "label": "13",
      "R": -54.636,
      "d": 2.3,
      "sd": 22,
      "medium": 7
    },
    {
      "label": "14",
      "R": -118.5,
      "d": 116.66,
      "sd": 22
    }
  ],
  "focus": {
    "closeFocusM": 2.2,
    "description": "Infinity-only source station: fixed stop, source middle-group motion direction but no tabulated finite station. Required 2.2 m metadata is not a solved focus distance and does not enable finite focusing."
  },
  "aperture": {
    "nominalFNumber": 5.7,
    "fStops": [
      5.7,
      8,
      11,
      16,
      22,
      32,
      45
    ],
    "maxFNumber": 45
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
