import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * Source: KR 10-2213072 B1, Example 2, Tables 4–6; both printed focus states.
 * Scale factor 1: source radii, thicknesses and gaps are already in mm; no units conversion.
 * The iris is derived from the f-number; source back-focus gaps are unchanged.
 * Clear rims are estimated from Figure 3 (Example 2), checked at both printed focus states.
 * Near-state axial ray floors retain S3/S4 at 26.3/25.6 mm, S5/S6 at 24.1/21.0 mm
 * and square L4 at 20.2 mm. Figure-drawn rear-face lands on S4/S6/S10 extend to
 * 26.3/24.1/18.0 mm; they do not enlarge the optical caps. The hybrid layer keeps L8's rims.
 * The camera-side 2.5 mm filter stays drawn because its trailing gap D4 varies from
 * 0.507836 to 0.687847 mm with focus; the rear-plate format supports only a fixed trailing gap.
 * No physical gaps are redistributed.
 * Actual Image follows D4; D5 after Image stays metadata and is not propagated.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "samyang-af-85mm-f14-ef",
  "maker": "Samyang",
  "name": "SAMYANG AF 85mm f/1.4 EF / F",
  "subtitle": "KR 10-2213072 B1, Example 2 — the 9/7 construction of the EF and Nikon F versions",
  "visible": true,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "type": "Positive Meniscus",
      "nd": 1.7725,
      "vd": 49.62,
      "indexReference": "d",
      "label": "Element 1",
      "glass": "TAF1 (HOYA)",
      "role": "Positive meniscus opening the fixed front group."
    },
    {
      "id": 2,
      "name": "L2",
      "type": "Positive Meniscus",
      "nd": 1.7433,
      "vd": 49.22,
      "indexReference": "d",
      "label": "Element 2",
      "glass": "NBF1 (HOYA)",
      "role": "Second positive meniscus in the fixed front group."
    },
    {
      "id": 3,
      "name": "L3",
      "type": "Negative Meniscus",
      "nd": 1.72825,
      "vd": 28.32,
      "indexReference": "d",
      "label": "Element 3",
      "glass": "E-FD10 (HOYA)",
      "role": "Negative meniscus between the front positive elements."
    },
    {
      "id": 4,
      "name": "L4",
      "type": "Positive Meniscus",
      "nd": 1.7725,
      "vd": 49.62,
      "indexReference": "d",
      "label": "Element 4",
      "glass": "TAF1 (HOYA)",
      "role": "Positive meniscus closing the fixed front group."
    },
    {
      "id": 5,
      "name": "L5",
      "type": "Negative Meniscus",
      "nd": 1.8061,
      "vd": 33.27,
      "indexReference": "d",
      "label": "Element 5",
      "glass": "NBFD15 (HOYA)",
      "role": "Single negative element moving toward the image for close focus."
    },
    {
      "id": 6,
      "name": "L6",
      "type": "Biconcave Negative",
      "nd": 1.54814,
      "vd": 45.82,
      "indexReference": "d",
      "label": "Element 6",
      "glass": "E-FEL1 (HOYA)",
      "role": "Negative member of the first rear cemented doublet.",
      "cemented": "C1"
    },
    {
      "id": 7,
      "name": "L7",
      "type": "Biconvex Positive",
      "nd": 1.7859,
      "vd": 43.93,
      "indexReference": "d",
      "label": "Element 7",
      "glass": "NBFD11 (HOYA)",
      "role": "Positive member of the first rear cemented doublet.",
      "cemented": "C1"
    },
    {
      "id": 8,
      "name": "Hybrid layer on L8",
      "type": "Positive Meniscus",
      "nd": 1.517,
      "vd": 52,
      "indexReference": "d",
      "label": "Element 8",
      "glass": "Unmatched resin (nd 1.517 / νd 52)",
      "role": "Thin hybrid layer forming the aspherical front surface of L8."
    },
    {
      "id": 9,
      "name": "L8",
      "type": "Biconvex Positive",
      "nd": 1.7725,
      "vd": 49.62,
      "indexReference": "d",
      "label": "Element 9",
      "glass": "TAF1 (HOYA)",
      "role": "Positive L8 substrate beneath the hybrid layer, cemented to L9.",
      "cemented": "C2"
    },
    {
      "id": 10,
      "name": "L9",
      "type": "Negative Meniscus",
      "nd": 1.64769,
      "vd": 33.84,
      "indexReference": "d",
      "label": "Element 10",
      "glass": "E-FD2 (HOYA)",
      "role": "Negative L9 member of the last rear cemented doublet.",
      "cemented": "C2"
    },
    {
      "id": 11,
      "name": "Published rear filter",
      "type": "Plane-Parallel Plate",
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "label": "Published rear filter",
      "glass": "BSC7 (HOYA)",
      "role": "Camera-side filter with a focus-dependent gap to the image plane."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 73.203,
      "d": 8.141,
      "sd": 30,
      "medium": 1
    },
    {
      "label": "2",
      "R": 3101.022,
      "d": 0.4,
      "sd": 30
    },
    {
      "label": "3",
      "R": 41.863,
      "d": 7.398,
      "sd": 26.3,
      "medium": 2
    },
    {
      "label": "4",
      "R": 101.422,
      "d": 4.5,
      "sd": 25.6,
      "rimExtensionSd": 26.3
    },
    {
      "label": "5",
      "R": 312.179,
      "d": 1.8,
      "sd": 24.1,
      "medium": 3
    },
    {
      "label": "6",
      "R": 35.337,
      "d": 7,
      "sd": 21,
      "rimExtensionSd": 24.1
    },
    {
      "label": "7",
      "R": 52.741,
      "d": 5,
      "sd": 20.2,
      "medium": 4
    },
    {
      "label": "8",
      "R": 426.864,
      "sd": 20.2
    },
    {
      "label": "9",
      "R": 551.865,
      "d": 1.8,
      "sd": 18,
      "medium": 5
    },
    {
      "label": "10",
      "R": 32.423,
      "sd": 16,
      "rimExtensionSd": 18
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 6.487
    },
    {
      "label": "12",
      "R": -39.898,
      "d": 1.8,
      "sd": 18,
      "medium": 6
    },
    {
      "label": "13",
      "R": 32.185,
      "d": 8.833,
      "sd": 18,
      "medium": 7
    },
    {
      "label": "14",
      "R": -52.239,
      "d": 0.465,
      "sd": 18
    },
    {
      "label": "15",
      "R": 159.245,
      "d": 0.13,
      "sd": 18,
      "medium": 8,
      "asphere": {
        "K": -1,
        "A4": -3.2762714e-06,
        "A6": -1.057203e-08,
        "A8": 5.094887e-11,
        "A10": -1.935791e-13,
        "A12": 2.319653e-16
      }
    },
    {
      "label": "16",
      "R": 273.038,
      "d": 4.568,
      "sd": 18,
      "medium": 9
    },
    {
      "label": "17",
      "R": -72.483,
      "d": 1.8,
      "sd": 18,
      "medium": 10
    },
    {
      "label": "18",
      "R": -300.832,
      "sd": 18
    },
    {
      "label": "19",
      "R": "flat",
      "d": 2.5,
      "sd": 24,
      "medium": 11
    },
    {
      "label": "20",
      "R": "flat",
      "sd": 24
    }
  ],
  "doublets": [
    { "text": "C1", "fromSurface": "12", "toSurface": "14" },
    { "text": "C2", "fromSurface": "16", "toSurface": "18" }
  ],
  "gaps": {
    "8": {
      "label": "D1",
      "values": [
        [
          1.6125,
          6.541152
        ]
      ]
    },
    "10": {
      "label": "D2",
      "values": [
        [
          10.4271,
          5.498448
        ]
      ]
    },
    "18": {
      "label": "D3",
      "values": [
        [
          37.3,
          37.3
        ]
      ]
    },
    "20": {
      "label": "D4",
      "values": [
        [
          0.507836,
          0.687847
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 1.479,
    "fStops": [
      1.479,
      16
    ]
  },
  "layout": {
    "yScFill": 0.7
  },
  "focus": {
    "closeFocusM": 0.926326,
    "keyframes": [
      0,
      1
    ],
    "step": 1,
    "published": [
      1
    ],
    "description": "PUBLISHED two focus states. L5 moves 4.928652 mm toward the image for close focus. The printed near object distance is 813.676935 mm before the first surface, or 0.926326 m from object to image; the maker states a 0.9 m minimum. The camera-side filter stays drawn because the gap after it changes with focus. The image plane follows D4; D5 is printed after Image and is not included in the image distance."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 28.478
  },
  "checks": {
    "gapSagFrac": 0.9
  },
  "catalog": {
    "lensMounts": [
      "canon-ef",
      "nikon-f"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 9,
    "groupCount": 7,
    "focalLengthMm": {
      "marketing": 85,
      "design": 84.54865074703312
    },
    "fNumber": {
      "marketing": 1.4,
      "design": 1.479
    },
    "closeFocusM": {
      "marketing": 0.9
    },
    "specs": [
      "9 ELEMENTS / 7 GROUPS",
      "1 HYBRID ASPHERICAL ELEMENT",
      "F/1.4–16",
      "MINIMUM FOCUS 0.9 m"
    ]
  },
  "source": {
    "patentNumber": "KR 10-2213072 B1",
    "authors": ["Jae Myung Ryu", "Hae Jin Lee", "Jeong Du Lee"],
    "patentYear": 2021,
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "assignees": [
      "Samyang Optics Co., Ltd."
    ],
    "errata": [
      {
        "status": "unresolved",
        "note": "D5 is printed after Image: −0.005027/−0.133249 mm is retained as source metadata and excluded from the image distance. The image plane follows D4; the purpose of D5 remains unresolved."
      },
      {
        "status": "unresolved",
        "note": "Table 6 gives a focal length of 84.499585 mm, Table 10 gives 84.548355 mm, and the prose gives 84.54 mm. The calculated 84.548650747 mm is retained without rescaling."
      },
      {
        "status": "unresolved",
        "note": "The near object distance D0 of 813.676935 mm plus the image track of 112.649447 mm gives 926.326382 mm from object to image, differing from the source's 0.9 m heading. The source states near f/1.584; the physical iris remains fixed at the size derived from infinity f/1.479."
      },
      {
        "status": "unresolved",
        "note": "The maker's catalogue supports a design-family association with Example 2 without establishing the exact factory prescription. Clear rims are inferred from the optical geometry rather than measured production dimensions."
      }
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
