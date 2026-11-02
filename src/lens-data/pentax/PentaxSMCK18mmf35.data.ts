import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 3,841,736 (Asahi Kogaku Kogyo; Takahashi and Okudaira), second embodiment, Table III and Fig. 3: F = 100, 1:3.5,
 * half field 51°, back focus FB = 199.7. All surfaces are spherical, and no R, d, nd or νd has been adjusted.
 *
 * The patent names no product and gives its dimensions as relative values. All radii and spacings are the printed values
 * × 0.18; that scale is inferred from the marketed focal length. nd and νd are as printed. The association with the
 * SMC Pentax 18mm f/3.5 is at family level: the patent's Japanese priority is May 1972, the lens reached retail in 1975,
 * and no Takumar 18mm f/3.5 was found. It is not a confirmed factory prescription.
 *
 * Pentax's table prints 11 groups, 12 elements, and catalog.elementCount and groupCount carry that count, but the model
 * draws 11 elements in 10 groups. Pentax's count includes a filter plate: its section drawing shows a thin plate right
 * after L5, and its brochure gives the lens four built-in filters and a rear gelatin holder. The patent lists no plate,
 * its printed back focus excludes one (Table III computes to FB = 199.71), and the plate's thickness and index are
 * unknown, so it stays out of the prescription. Pentax's drawing otherwise has the model's order and shapes. L1 to L6, L10
 * and L11 fit Table III; its cemented L7/L8 is thinner, and its L9 is about twice as thick with a stepped rim.
 *
 * The image plane is the printed FB × 0.18: 35.946 mm behind r21, 92.25 mm from the first vertex. The paraxial focus is
 * 35.948 mm.
 *
 * Column 2 of the patent puts the diaphragm between L6 and L7 and prints no position. Table IV, whose caption misnames
 * Table I, recomputes from Table III with the pupil 5.36 behind r12 at F = 100, so the stop sits 0.965 mm after r12. Its
 * radius follows from F/3.5.
 *
 * All `sd` values are estimates read from Fig. 3 by fitting Table III's arcs (vertical scale 1.04 × axial), each height
 * being half the drawn span across the axis. L1 to L3 follow the figure within 0.5 mm; from L4 back the rims stand 0.8 to
 * 2 mm above it to keep corner light, which is 52.5 % at 51°.
 *
 * The patent's 51° half field lands at 21.15 mm, so the model covers 98 % of the 21.65 mm full-frame corner. `projection`
 * declares that field because the paraxial chief-ray estimate undercounts it. Pentax quotes 100°.
 *
 * Focus is static at infinity. The patent prints no close-focus spacings; closeFocusM is the 0.25 m in Pentax's table.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-smc-18mm-f35",
  "maker": "Pentax",
  "name": "PENTAX SMC PENTAX 18mm f/3.5",
  "subtitle": "US 3,841,736, Table III — f = 100, 1:3.5 design of Fig. 3 scaled 0.18× to 18 mm; production association",
  "catalog": {
    "imageFormat": "135-full-frame",
    "specs": [
      "12 ELEMENTS / 11 GROUPS",
      "DESIGN f = 100 (NORMALIZED; SCALED 0.18× TO 18 mm)",
      "DESIGN F/3.5",
      "ALL SPHERICAL",
      "FILTER PLATE NOT MODELED"
    ],
    "elementCount": 12,
    "groupCount": 11,
    "focalLengthMm": {
      "marketing": 18,
      "design": 18.0
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.5
    },
    "lensMounts": [
      "pentax-k"
    ]
  },
  "source": {
    "patentNumber": "US 3,841,736",
    "example": {
      "label": "Table III",
      "id": "3"
    },
    "patentYear": 1974,
    "authors": [
      "Yasuo Takahashi",
      "Sadao Okudaira"
    ],
    "assignees": [
      "Asahi Kogaku Kogyo Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.64,
      "vd": 60.2,
      "indexReference": "d",
      "glass": "LACL60 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -46.388,
      "role": "Large front meniscus; opens the negative group that gives the long back focus and reduces the field angle reaching L5"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Plano-Convex",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 109.022,
      "role": "Thick positive inside the negative group; the patent has it hold back negative distortion and chromatic aberration"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.64,
      "vd": 60.2,
      "indexReference": "d",
      "glass": "LACL60 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -26.522,
      "role": "Strongest negative lens of the front group; steeply curved rear face r6"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -38.563,
      "role": "Last negative meniscus of the front group; brings L1 to L4 to −10.08 mm"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.64,
      "vd": 60.2,
      "indexReference": "d",
      "glass": "LACL60 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 72.069,
      "role": "Thin, weak positive opening the positive section; Pentax's drawing puts a filter plate right behind it"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.62588,
      "vd": 35.7,
      "indexReference": "d",
      "glass": "F1 (SUMITA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 18.675,
      "role": "Thick positive ahead of the stop; brings L1 to L6 to +20.50 mm"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 18.131,
      "role": "Positive half of doublet C1, just behind the stop; low-index side of the r14 junction",
      "cemented": "D1"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconcave Negative",
      "nd": 1.834,
      "vd": 37.2,
      "indexReference": "d",
      "glass": "S-LAH60 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -10.12,
      "role": "High-index negative half of C1; the 0.318 index step at r14 is the patent's spherical-aberration correction",
      "cemented": "D1"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Positive Meniscus",
      "nd": 1.48749,
      "vd": 70.1,
      "indexReference": "d",
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 28.045,
      "role": "Low-dispersion positive with a nearly flat front; rear face r17 carries much of the rear section's load"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Negative Meniscus",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "glass": "SF6 (Schott catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -44.132,
      "role": "Thin dense-flint meniscus; the patent sets rear face r19 to correct coma of low rays"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Biconvex Positive",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 33.947,
      "role": "Last element; rear face r21 shares the rear section's load with r17"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 41.3136,
      "d": 1.5552000000000001,
      "sd": 18.6,
      "medium": 1
    },
    {
      "label": "2",
      "R": 17.0208,
      "d": 8.5626,
      "sd": 14.3
    },
    {
      "label": "3",
      "R": "flat",
      "d": 7.1802,
      "sd": 14.1,
      "medium": 2
    },
    {
      "label": "4",
      "R": -56.2914,
      "d": 0.2916,
      "sd": 14.1
    },
    {
      "label": "5",
      "R": 27.0216,
      "d": 1.7315999999999998,
      "sd": 9.4,
      "medium": 3
    },
    {
      "label": "6",
      "R": 10.1646,
      "d": 3.4038,
      "sd": 7.65
    },
    {
      "label": "7",
      "R": 30.2076,
      "d": 1.7315999999999998,
      "sd": 7.5,
      "medium": 4
    },
    {
      "label": "8",
      "R": 11.7666,
      "d": 2.9195999999999995,
      "sd": 6.9
    },
    {
      "label": "9",
      "R": 60.03,
      "d": 1.7315999999999998,
      "sd": 6.95,
      "medium": 5
    },
    {
      "label": "10",
      "R": -196.8696,
      "d": 3.8916,
      "sd": 6.95
    },
    {
      "label": "11",
      "R": 32.598,
      "d": 4.571999999999999,
      "sd": 7.1,
      "medium": 6
    },
    {
      "label": "12",
      "R": -17.238599999999998,
      "d": 0.965,
      "sd": 7.1
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.8574
    },
    {
      "label": "13",
      "R": 76.3686,
      "d": 4.183199999999999,
      "sd": 6.7,
      "medium": 7
    },
    {
      "label": "14",
      "R": -10.4706,
      "d": 1.152,
      "sd": 6.7,
      "medium": 8
    },
    {
      "label": "15",
      "R": 45.6966,
      "d": 1.4597999999999998,
      "sd": 6.7
    },
    {
      "label": "16",
      "R": -270.486,
      "d": 2.6262,
      "sd": 7.15,
      "medium": 9
    },
    {
      "label": "17",
      "R": -13.0554,
      "d": 0.09720000000000001,
      "sd": 7.35
    },
    {
      "label": "18",
      "R": 58.377599999999994,
      "d": 1.0404,
      "sd": 8,
      "medium": 10
    },
    {
      "label": "19",
      "R": 21.9132,
      "d": 1.9458,
      "sd": 8
    },
    {
      "label": "20",
      "R": 187.76520000000002,
      "d": 3.4056,
      "sd": 8.7,
      "medium": 11
    },
    {
      "label": "21",
      "R": -19.213199999999997,
      "d": 35.946,
      "sd": 8.7
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "13",
      "toSurface": "15"
    }
  ],
  "focus": {
    "closeFocusM": 0.25,
    "description": "The model stays at infinity focus because the patent prints no close-focus spacings; the production lens focuses to 0.25 m."
  },
  "aperture": {
    "nominalFNumber": 3.5,
    "fStops": [
      3.5,
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
    "fullFieldDeg": 102,
    "maxTraceFieldDeg": 51
  },
  "layout": {
    "yScFill": 0.34
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
