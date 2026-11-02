import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** Fresh F-mount source/rim/glass review: 2026-10-30. Exact source anchors, rounded source partial data and constrained geometry decisions are recorded in the audit sidecar. */
/** JP 2009-058817 A, Example 3 (Sigma Corporation; inventor Ai Hoshina), Fig. 7.
 * Equisolid projection, y = 2f sin(ω/2), as stated in ¶0028; 2ω = 180°.
 * 13 all-spherical elements in 9 groups; the stop is source surface 16. Radii, thicknesses,
 * nd and νd are the printed values, and the back focus is the printed BF = 40.8599 mm
 * (paraxial BFD 40.8628 mm; the 0.003 mm difference is left as printed).
 * The patent tabulates the infinity state only; no focus movement is modelled.
 * Semi-diameters are not printed: they are read from Fig. 7 and Sigma's section drawing; the
 * cemented pair before the stop (surfaces 13-15) is square-cut at 5.0 mm as Fig. 7 draws it.
 * The rear of L1 (surface 2, R 13.3 mm) runs to 12.5 mm as both drawings show, a 70.0° rim
 * slope, so checks.maxRimAngleDeg is 71; the default 90% gap-sag limit is kept.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "sigma-4-5mm-f2-8-ex-dc-circular-fisheye-hsm",
  "maker": "Sigma",
  "name": "SIGMA 4.5mm f/2.8 EX DC CIRCULAR FISHEYE HSM",
  "subtitle": "JP 2009-058817 A, Example 3 \u2014 strong production correlation; not manufacturer-confirmed",
  "catalog": {
    "lensMounts": [
      "sigma-sa",
      "canon-ef",
      "nikon-f",
      "pentax-k",
      "sony-a"
    ],
    "imageFormat": "aps-c",
    "elementCount": 13,
    "groupCount": 9,
    "focalLengthMm": {
      "marketing": 4.5,
      "design": 4.4463
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.9
    },
    "specs": [
      "13 ELEMENTS / 9 GROUPS",
      "DESIGN f = 4.45 mm",
      "DESIGN F/2.9",
      "ALL SPHERICAL",
      "EQUISOLID PROJECTION"
    ]
  },
  "source": {
    "patentNumber": "JP 2009-058817 A",
    "example": { "label": "Example 3", "id": "3" },
    "patentYear": 2009,
    "authors": [
      "Ai Hoshina"
    ],
    "assignees": [
      "Sigma Corporation"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "role": "Lm: large front negative meniscus of G1, convex to the object; gathers the 180° field",
      "type": "Negative Meniscus",
      "nd": 1.8042,
      "vd": 46.5,
      "glass": "N-LASF44 (Schott equivalent)",
      "focalLengthMm": -23.367967
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "role": "Second negative meniscus of G1, convex to the object",
      "type": "Negative Meniscus",
      "nd": 1.8042,
      "vd": 46.5,
      "glass": "N-LASF44 (Schott equivalent)",
      "focalLengthMm": -37.075277
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "role": "Third negative singlet of G1, biconcave",
      "type": "Biconcave Negative",
      "nd": 1.8042,
      "vd": 46.5,
      "glass": "N-LASF44 (Schott equivalent)",
      "focalLengthMm": -43.381921
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "role": "G1 biconvex element, cemented to L5 (D1)",
      "type": "Biconvex Positive",
      "nd": 1.6727,
      "vd": 32.17,
      "glass": "E-FD5 (Hoya equivalent)",
      "focalLengthMm": 12.746252,
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "role": "G1 biconcave element, cemented to L4 (D1)",
      "type": "Biconcave Negative",
      "nd": 1.7725,
      "vd": 49.62,
      "glass": "N-LAF34 (Schott equivalent)",
      "focalLengthMm": -7.005525,
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "role": "G1 biconvex element, cemented to L7 (D2)",
      "type": "Biconvex Positive",
      "nd": 1.5481,
      "vd": 45.82,
      "glass": "E-FEL1 (Hoya equivalent)",
      "focalLengthMm": 11.394468,
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "role": "G1 negative meniscus, convex to the image, cemented to L6 (D2)",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.62,
      "glass": "N-LAF34 (Schott equivalent)",
      "focalLengthMm": -23.669332,
      "cemented": "D2"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "role": "G1 biconvex element of the pair ahead of the stop, cemented to L9 (D3)",
      "type": "Biconvex Positive",
      "nd": 1.62,
      "vd": 36.3,
      "glass": "E-F2 (Hoya equivalent)",
      "focalLengthMm": 9.663408,
      "cemented": "D3"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "role": "G1 biconcave element, cemented to L8 (D3); last element before the stop",
      "type": "Biconcave Negative",
      "nd": 1.7725,
      "vd": 49.62,
      "glass": "N-LAF34 (Schott equivalent)",
      "focalLengthMm": -6.811078,
      "cemented": "D3"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "role": "First positive singlet of G2, behind the stop",
      "type": "Biconvex Positive",
      "nd": 1.4875,
      "vd": 70.44,
      "glass": "H-QK3L (CDGM equivalent)",
      "focalLengthMm": 23.734468
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "role": "G2 biconcave flint, cemented to L12 (D4)",
      "type": "Biconcave Negative",
      "nd": 1.834,
      "vd": 37.35,
      "glass": "NBFD10 (Hoya equivalent)",
      "focalLengthMm": -13.645602,
      "cemented": "D4"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "role": "LP: low-dispersion positive element of G2, cemented to L11 (D4); corrects lateral and axial colour",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "glass": "FCD1 (Hoya equivalent; qualified spectral proxy, production melt unspecified)",
      "dPgF": 0.03216802,
      "apd": "patent",
      "apdNote": "Element LP of claim 2: conditions (3) and (4) require νd > 62.5 and PgF above 0.6675 − 0.002νd, and PDF10 Table1 prints PgF=0.5387 (four decimals) for Example3. Source paragraph0023 explicitly calls for low-dispersion, high-partial-ratio glass in LP. Engine dPgF=0.5387-(0.6438-0.001682*81.61)=0.03216802 is derived from that rounded ratio, not extra source precision; supplier/melt remains unknown.",
      "focalLengthMm": 21.068594,
      "cemented": "D4"
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "role": "Rear positive singlet of G2",
      "type": "Biconvex Positive",
      "nd": 1.4875,
      "vd": 70.44,
      "glass": "H-QK3L (CDGM equivalent)",
      "focalLengthMm": 29.673355
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 47.9,
      "sd": 21.5,
      "d": 1.57,
      "medium": 1
    },
    {
      "label": "2",
      "R": 13.3,
      rimExtensionSd: 21.5, sd: 12.5,
      "d": 8.9003
    },
    {
      "label": "3",
      "R": 70.2924,
      "sd": 12.3,
      "d": 1,
      "medium": 2
    },
    {
      "label": "4",
      "R": 20.8029,
      "sd": 12.3,
      "d": 3.5279
    },
    {
      "label": "5",
      "R": -117.9734,
      "sd": 10.2,
      "d": 1,
      "medium": 3
    },
    {
      "label": "6",
      "R": 49.7243,
      "sd": 10.2,
      "d": 9.9659
    },
    {
      "label": "7",
      "R": 68.2353,
      "sd": 7.6,
      "d": 5.3065,
      "medium": 4
    },
    {
      "label": "8",
      "R": -9.5,
      "sd": 7.6,
      "d": 2,
      "medium": 5
    },
    {
      "label": "9",
      "R": 13.7294,
      "sd": 7.6,
      "d": 1.22
    },
    {
      "label": "10",
      "R": 10.9404,
      "sd": 6.9,
      "d": 7.7,
      "medium": 6
    },
    {
      "label": "11",
      "R": -10.9264,
      "sd": 6.9,
      "d": 5.8,
      "medium": 7
    },
    {
      "label": "12",
      "R": -33.4328,
      "sd": 6.9,
      "d": 3.4995
    },
    {
      "label": "13",
      "R": 17.0624,
      "sd": 5,
      "d": 3.5421,
      "medium": 8
    },
    {
      "label": "14",
      "R": -8.5,
      "sd": 5,
      "d": 1,
      "medium": 9
    },
    {
      "label": "15",
      "R": 14.5182,
      "sd": 5,
      "d": 3.4778
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 8.1141
    },
    {
      "label": "17",
      "R": 33.2812,
      "sd": 8.1,
      "d": 3.9322,
      "medium": 10
    },
    {
      "label": "18",
      "R": -17.0502,
      "sd": 8.1,
      "d": 0.15
    },
    {
      "label": "19",
      "R": -51.042,
      "sd": 8.1,
      "d": 1,
      "medium": 11
    },
    {
      "label": "20",
      "R": 14.7764,
      "sd": 8.1,
      "d": 4.3545,
      "medium": 12
    },
    {
      "label": "21",
      "R": -32.4221,
      "sd": 8.1,
      "d": 0.15
    },
    {
      "label": "22",
      "R": 23.5234,
      "sd": 8.5,
      "d": 3.7892,
      "medium": 13
    },
    {
      "label": "23",
      "R": -35.5854,
      "sd": 8.5
    }
  ],
  "focus": {
    "closeFocusM": 0.135,
    "description": "Patent infinity state only; the production lens focuses to 13.5 cm. The patent gives no near-focus spacings, so no focus movement is modelled."
  },
  "gaps": {
    "23": {
      "label": "BF",
      "values": [
        [
          40.8599,
          40.8599
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 2.9,
    "fStops": [
      2.9,
      4,
      5.6,
      8,
      11,
      16,
      22
    ],
    "blades": 6,
    "maxFNumber": 22
  },
  "projection": {
    "kind": "fisheye-equisolid",
    "focalLengthMm": 4.4463,
    "fullFieldDeg": 180,
    "imageCircleMm": 12.576035524758984,
    "maxTraceFieldDeg": 90
  },
  "groups": [
    {
      "text": "G1 negative",
      "fromSurface": "1",
      "toSurface": "15"
    },
    {
      "text": "G2 positive",
      "fromSurface": "17",
      "toSurface": "23"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "7",
      "toSurface": "9"
    },
    {
      "text": "D2",
      "fromSurface": "10",
      "toSurface": "12"
    },
    {
      "text": "D3",
      "fromSurface": "13",
      "toSurface": "15"
    },
    {
      "text": "D4",
      "fromSurface": "19",
      "toSurface": "21"
    }
  ],
  "checks": {
    "maxRimAngleDeg": 71
  },
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
