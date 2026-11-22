import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 4,396,255 A, Embodiment 1; a probable match to the Zuiko Auto-S 40mm f/2.
 * Embodiments 1 and 2 both fit the maker's section; neither is established as the factory prescription.
 * All printed lengths are scaled ×40 from f = 1 to 40 mm. Radii, thicknesses, glass pairs and BF are printed;
 * helium-d is the assumed spectral reference. All surfaces are spherical, with no cemented interfaces.
 * The stop is inferred at the midpoint of the central gap, z = 14.18 mm; its radius is derived for f/2.
 * Semi-diameters are estimated from Fig. 1 after ×40 scaling, and ray-floor checked.
 * Bevels are excluded from optical caps; the near-touching L4/L5 retain their engine f/2 floors and 0.95 gap budget.
 * The printed-BF image coordinate is 65.48 mm; the paraxial image coordinate is 65.412061 mm.
 * Infinity focus only; 1e15 m is a placeholder, not the production lens's 0.3 m close-focus distance.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "olympus-zuiko-auto-s-40mm-f2",
  "maker": "Olympus",
  "name": "OLYMPUS ZUIKO AUTO-S 40mm f/2",
  "subtitle": "US 4,396,255 A, Embodiment 1 — probable production match",
  "visible": true,
  "layout": {
    "yScFill": 0.35
  },
  "checks": {
    "gapSagFrac": 0.95
  },
  "catalog": {
    "imageFormat": "135-full-frame",
    "specs": [
      "6 ELEMENTS / 6 GROUPS",
      "DESIGN f = 40 mm",
      "ALL SPHERICAL",
      "f/2–16",
      "0.3 m CLOSE FOCUS"
    ],
    "elementCount": 6,
    "groupCount": 6,
    "focalLengthMm": {
      "marketing": 40,
      "design": 40
    },
    "fNumber": {
      "marketing": 2,
      "design": 2
    },
    "closeFocusM": {
      "marketing": 0.3
    },
    "lensMounts": [
      "olympus-om"
    ]
  },
  "source": {
    "patentNumber": "US 4,396,255 A",
    "example": {
      "label": "Embodiment 1",
      "id": "1"
    },
    "patentYear": 1983,
    "authors": [
      "Toshihiro Imai"
    ],
    "assignees": [
      "Olympus Optical Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "role": "Positive front element",
      "type": "Positive Meniscus",
      "nd": 1.72,
      "vd": 50.25,
      "indexReference": "d",
      "indexReferenceNote": "Assumed helium-d convention; source n/v definitions do not establish numerical reference wavelength.",
      "glass": "LAC10 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 74.9443503139604
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "role": "Negative element between the front positive menisci",
      "type": "Negative Meniscus",
      "nd": 1.60729,
      "vd": 49.29,
      "indexReference": "d",
      "indexReferenceNote": "Assumed helium-d convention; source n/v definitions do not establish numerical reference wavelength.",
      "glass": "BAF5 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -53.31075145322826
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "role": "Positive meniscus immediately before the stop",
      "type": "Positive Meniscus",
      "nd": 1.6825,
      "vd": 44.65,
      "indexReference": "d",
      "indexReferenceNote": "Assumed helium-d convention; source n/v definitions do not establish numerical reference wavelength.",
      "glass": "BAF22 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 83.25382431728805
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "role": "Negative meniscus immediately behind the stop",
      "type": "Negative Meniscus",
      "nd": 1.76182,
      "vd": 26.55,
      "indexReference": "d",
      "indexReferenceNote": "Assumed helium-d convention; source n/v definitions do not establish numerical reference wavelength.",
      "glass": "FD140 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -19.817297049460652
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "role": "Positive rear meniscus separated from Element 4 by a narrow air gap",
      "type": "Positive Meniscus",
      "nd": 1.726,
      "vd": 53.56,
      "indexReference": "d",
      "indexReferenceNote": "Assumed helium-d convention; source n/v definitions do not establish numerical reference wavelength.",
      "glass": "LAL60 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 27.83198457974555
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "role": "Final positive element",
      "type": "Biconvex Positive",
      "nd": 1.757,
      "vd": 47.87,
      "indexReference": "d",
      "indexReferenceNote": "Assumed helium-d convention; source n/v definitions do not establish numerical reference wavelength.",
      "glass": "S-LAM54 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 37.703909506822335
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 42.88,
      "d": 2.8000000000000003,
      "sd": 13.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 203.12,
      "d": 0.08,
      "sd": 13.5
    },
    {
      "label": "3",
      "R": 18.560000000000002,
      "d": 1.32,
      "sd": 11.2,
      "medium": 2
    },
    {
      "label": "4",
      "R": 11.479999999999999,
      "d": 1.7199999999999998,
      "sd": 10
    },
    {
      "label": "5",
      "R": 12.24,
      "d": 3.5599999999999996,
      "sd": 9.5,
      "medium": 3
    },
    {
      "label": "6",
      "R": 13.759999999999998,
      "d": 4.699999999999999,
      "sd": 9.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 4.699999999999999
    },
    {
      "label": "7",
      "R": -13.08,
      "d": 0.96,
      "sd": 9,
      "medium": 4
    },
    {
      "label": "8",
      "R": -101,
      "d": 0.32,
      "sd": 9
    },
    {
      "label": "9",
      "R": -57.839999999999996,
      "d": 4.640000000000001,
      "sd": 9.7,
      "medium": 5
    },
    {
      "label": "10",
      "R": -15.48,
      "d": 0.08,
      "sd": 9.7
    },
    {
      "label": "11",
      "R": 199.04,
      "d": 3.88,
      "sd": 13.5,
      "medium": 6
    },
    {
      "label": "12",
      "R": -33.04,
      "d": 36.72,
      "sd": 13.5
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the patent supplies no finite-focus prescription. The production lens uses a straight helicoid and focuses to 0.3 m, as documented in the Olympus handbook."
  },
  "gaps": {},
  "aperture": {
    "nominalFNumber": 2,
    "fStops": [
      2,
      2.8,
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
    "fullFieldDeg": 56,
    "maxTraceFieldDeg": 28
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
