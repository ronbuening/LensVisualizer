import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * Laowa 200mm f/2 AF FF, modeled from CN 120949408 A, Example 2 (Anhui Changgeng Optics; Figures 3 and 4).
 * Values are the patent's own, in millimetres at scale 1 (patent f = 194.5254 mm); all surfaces are spherical.
 * Radii, thicknesses, d-line indices, Abbe numbers, both focus states (infinity and a 4000 mm object) and the
 * 45.2069 mm image-side gap are as printed. The 2 mm plane plate is the patent's own rear filter and stays drawn.
 * The patent prints no clear apertures: every semi-diameter is inferred, and the stop radius follows from f/2.06.
 * Semi-diameters were compared with Figure 3, which is drawn to scale (6.834 px/mm at 300 dpi). The focusing lens
 * (19.3 mm) and the rear filter (16.4 mm) are read from it, and so are the flat lands the figure draws outside the
 * concave rear faces of L6 and L8 (caps end at 22.2 and 17.4 mm); the other rims agree within 8 %. The figure
 * also draws a land on the rear face of L4, with the cap ending near 31.6 mm. The model ends that cap at 33 mm
 * and draws the land out to the 40 mm block edge: a cap at 31.6 mm would remove up to 2.5 points of off-axis
 * illumination, and 33 mm removes none.
 * The patent names no glasses. Labels are catalogue rows that equal the printed nd and νd; the rest are unmatched
 * and traced from the printed nd and νd alone. The aperture range (f/2–22, 9 blades), the 1.5 m minimum focus,
 * the mounts and the special-glass positions are Laowa's published figures, not the patent's.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "laowa-200mm-f2-af-ff",
  "maker": "Laowa",
  "name": "LAOWA 200mm f/2 AF FF",
  "subtitle": "CN 120949408 A, Example 2 — construction-based product association",
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.92286,
      "vd": 20.88,
      "indexReference": "d",
      "focalLengthMm": 208.96,
      "glass": "E-FDS1 (HOYA, coordinate equivalent)",
      "role": "Front positive lens of fixed group G1 (G1a), in high-index dense flint; Laowa marks this position as ultra-high-refraction glass."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.4586,
      "vd": 90.19,
      "indexReference": "d",
      "focalLengthMm": 277.92,
      "glass": "FCD10A (HOYA, coordinate equivalent)",
      "apd": "inferred",
      "apdNote": "Laowa's construction diagram marks this position as anomalous-dispersion glass, and the patent's nd = 1.45860, νd = 90.19 is a fluorophosphate crown of that class. The patent prints no partial-dispersion data, so the tag is inferred from the maker's diagram and the glass class.",
      "role": "Weak positive lens of G1a in fluorophosphate crown, used mainly for colour correction."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "focalLengthMm": 111.75,
      "glass": "FCD1 (HOYA, coordinate equivalent)",
      "apd": "inferred",
      "apdNote": "Laowa's construction diagram marks this position as extra-low-dispersion glass, and the patent's nd = 1.49700, νd = 81.61 is a fluor-crown ED glass. The patent prints no partial-dispersion data, so the anomalous-dispersion tag is inferred from the glass class.",
      "role": "Positive ED front of cemented pair C1 (G1b); the patent's positive lens A.",
      "cemented": "C1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.89663,
      "vd": 22.56,
      "indexReference": "d",
      "focalLengthMm": -57.31,
      "glass": "Unmatched (dense flint, patent nd=1.89663, νd=22.56)",
      "role": "Negative flint rear of cemented pair C1 (G1b); the patent's negative lens B.",
      "cemented": "C1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.87022,
      "vd": 21.86,
      "indexReference": "d",
      "focalLengthMm": 75.15,
      "glass": "Unmatched (dense flint, patent nd=1.87022, νd=21.86)",
      "role": "Strongest positive lens of the system; front of fixed group G2 (G2a)."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 1.78225,
      "vd": 24.07,
      "indexReference": "d",
      "focalLengthMm": -63.36,
      "glass": "Unmatched (dense flint, patent nd=1.78225, νd=24.07)",
      "role": "Negative middle lens of G2 (G2b), closely spaced behind L5."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.72916,
      "vd": 54.67,
      "indexReference": "d",
      "focalLengthMm": 98.74,
      "glass": "TAC8 (HOYA, coordinate equivalent)",
      "role": "Positive crown at the rear of G2 (G2c), the last lens before the stop."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.61467,
      "vd": 62.96,
      "indexReference": "d",
      "focalLengthMm": -73.48,
      "glass": "Unmatched (low-dispersion crown, patent nd=1.61467, νd=62.96)",
      "role": "Focusing lens G3, the only moving element; it moves toward the image for closer subjects."
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "focalLengthMm": -247.91,
      "glass": "FCD1 (HOYA, coordinate equivalent)",
      "apd": "inferred",
      "apdNote": "Laowa's construction diagram marks this position as extra-low-dispersion glass, and the patent's nd = 1.49700, νd = 81.61 is a fluor-crown ED glass. The patent prints no partial-dispersion data, so the anomalous-dispersion tag is inferred from the glass class.",
      "role": "Thin, weak negative ED lens at the front of fixed rear group G4."
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "nd": 1.77236,
      "vd": 33.4,
      "indexReference": "d",
      "focalLengthMm": 33.04,
      "glass": "Unmatched (patent nd=1.77236, νd=33.40)",
      "role": "Positive front of cemented pair C2 in G4.",
      "cemented": "C2"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Biconcave Negative",
      "nd": 1.64378,
      "vd": 30.7,
      "indexReference": "d",
      "focalLengthMm": -52.56,
      "glass": "Unmatched (patent nd=1.64378, νd=30.70)",
      "role": "Negative rear of cemented pair C2 in G4, the last powered lens.",
      "cemented": "C2"
    },
    {
      "id": 12,
      "name": "Rear filter",
      "label": "Rear filter",
      "type": "Plane-Parallel Plate",
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "glass": "BSC7 (HOYA, coordinate equivalent)",
      "role": "The 2 mm plane plate printed in the patent table, 3 mm behind the last lens. The design is computed with it in place, so it is drawn and traced as part of the lens. It is not counted among the 11 elements."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 168.8618,
      "d": 7.75,
      "sd": 51,
      "medium": 1
    },
    {
      "label": "2",
      "R": 1328.2996,
      "d": 1.9605,
      "sd": 51
    },
    {
      "label": "3",
      "R": 102.227,
      "d": 9.7,
      "sd": 47,
      "medium": 2
    },
    {
      "label": "4",
      "R": 501.0536,
      "d": 6.1762,
      "sd": 47
    },
    {
      "label": "5",
      "R": 69.5912,
      "d": 17.0,
      "sd": 40,
      "medium": 3
    },
    {
      "label": "6",
      "R": -252.742,
      "d": 1.8,
      "sd": 40,
      "medium": 4
    },
    {
      "label": "7",
      "R": 64.722,
      "d": 35.2569,
      "sd": 33,
      "rimExtensionSd": 40
    },
    {
      "label": "8",
      "R": 79.8776,
      "d": 6.9842,
      "sd": 29,
      "medium": 5
    },
    {
      "label": "9",
      "R": -346.0254,
      "d": 0.15,
      "sd": 29
    },
    {
      "label": "10",
      "R": 151.5812,
      "d": 1.25,
      "sd": 27,
      "medium": 6
    },
    {
      "label": "11",
      "R": 37.2175,
      "d": 8.4354,
      "sd": 22.2,
      "rimExtensionSd": 27
    },
    {
      "label": "12",
      "R": 42.4578,
      "d": 4.8,
      "sd": 24,
      "medium": 7
    },
    {
      "label": "13",
      "R": 98.5474,
      "d": 5.5519,
      "sd": 24
    },
    {
      "label": "STO",
      "R": "flat"
    },
    {
      "label": "15",
      "R": 178.4986,
      "d": 1.0,
      "sd": 19.3,
      "medium": 8
    },
    {
      "label": "16",
      "R": 35.9698,
      "sd": 17.4,
      "rimExtensionSd": 19.3
    },
    {
      "label": "17",
      "R": 644.0417,
      "d": 1.0,
      "sd": 16,
      "medium": 9
    },
    {
      "label": "18",
      "R": 103.3711,
      "d": 2.0,
      "sd": 16
    },
    {
      "label": "19",
      "R": 81.4531,
      "d": 5.8,
      "sd": 16,
      "medium": 10
    },
    {
      "label": "20",
      "R": -36.0146,
      "d": 1.0,
      "sd": 16,
      "medium": 11
    },
    {
      "label": "21",
      "R": 566.4761,
      "d": 3.0,
      "sd": 16
    },
    {
      "label": "22",
      "R": "flat",
      "d": 2.0,
      "sd": 16.4,
      "medium": 12
    },
    {
      "label": "23",
      "R": "flat",
      "d": 45.2069,
      "sd": 16.4
    }
  ],
  "gaps": {
    "STO": {
      "label": "D14",
      "values": [
        [
          1.7,
          6.2603
        ]
      ]
    },
    "16": {
      "label": "D16",
      "values": [
        [
          30.4956,
          25.9353
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 2.06,
    "fStops": [
      2.06,
      2.8,
      4,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22,
    "blades": 9
  },
  "groups": [
    {
      "text": "G1 (+)",
      "fromSurface": "1",
      "toSurface": "7"
    },
    {
      "text": "G2 (+)",
      "fromSurface": "8",
      "toSurface": "13"
    },
    {
      "text": "G3 (FOCUS)",
      "fromSurface": "15",
      "toSurface": "16"
    },
    {
      "text": "G4 (+)",
      "fromSurface": "17",
      "toSurface": "21"
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "5",
      "toSurface": "7"
    },
    {
      "text": "C2",
      "fromSurface": "19",
      "toSurface": "21"
    }
  ],
  "layout": {
    "yScFill": 0.7
  },
  "focus": {
    "closeFocusM": 4.199386517866485,
    "keyframes": [
      0,
      1
    ],
    "published": [
      1
    ],
    "description": "Inner focus. The patent prints the gaps for infinity and for an object 4000 mm in front of the first surface, and no other state. The single negative lens L8 (G3) moves 4.56 mm toward the image for the near state; G1, G2, the stop and G4 are fixed and the overall length is constant. The 4.2 m near limit is that state's object-to-image distance, not the marketed 1.5 m minimum focus; the patent prints no closer state. Intermediate positions are linear interpolations, not a published cam."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 12.606
  },
  "checks": {
    "gapSagFrac": 0.9
  },
  "catalog": {
    "lensMounts": [
      "sony-fe",
      "nikon-z",
      "canon-ef"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 11,
    "groupCount": 9,
    "focalLengthMm": {
      "marketing": 200,
      "design": 194.5237291877607
    },
    "fNumber": {
      "marketing": 2,
      "design": 2.06
    },
    "closeFocusM": {
      "marketing": 1.5
    },
    "specs": [
      "11 ELEMENTS / 9 GROUPS",
      "2 ED / 1 ANOMALOUS-DISPERSION / 1 UHR ELEMENT",
      "ALL SPHERICAL",
      "F/2–22",
      "MIN. FOCUS 1.5 m"
    ]
  },
  "source": {
    "patentNumber": "CN 120949408 A",
    "authors": [
      "Dayong Li"
    ],
    "patentYear": 2025,
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "assignees": [
      "Anhui Changgeng Optics Technology Co., Ltd."
    ],
    "errata": [
      {
        "status": "unresolved",
        "note": "The Example 2 table prints an Abbe number of 62.96 for the focusing lens (surface 15), while the conditional-expression summary lists FocVd = 62.900 for the same example. The file keeps the table value."
      }
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
