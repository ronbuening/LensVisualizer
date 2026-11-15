import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 4,134,645 A (Sugiyama, Kubota and Adachi, Asahi Kogaku Kogyo), Example 1 (PDF p. 6, repeated in claim 1;
 * section in Fig. 1, aberration plots in Fig. 2), a probable match to the smc Pentax-M 120mm f/2.8 (1977). The match
 * rests on construction (five single elements in five groups, all spherical), f/2.8, a ±10.2° field that reaches the
 * corner of the 35 mm frame at 120 mm, and timing; Examples 2 and 3 of the patent fit the Pentax-M 135mm f/3.5 and
 * 150mm f/3.5, and the PhotonsToPhotos Optical Bench Hub lists Example 1 as this lens. The patent names no product,
 * so this is a patent design, not a confirmed factory prescription.
 * Scale: the patent is normalized to F = 100. Every printed R and d and the printed back focus are multiplied by
 * exactly 1.2 for f = 120 mm (computed EFL 119.081 mm, see the erratum). All surfaces are spherical, so no
 * coefficient transform applies.
 * Printed: R, d, n, Abbe number, f/2.8, half-field 10.2°, back focus 35.52 (42.624 mm here), F1.2.3 = 77.97,
 * F1.2.3.4 = 52.73 and a Petzval sum of 0.170. The model reproduces F1.2.3 (77.975 at F = 100) but not F1.2.3.4.
 * Source erratum (unresolved): the printed table traces to f = 99.23, back focus 35.21 and F1.2.3.4 = 52.54 at
 * F = 100, against the stated 100, 35.52 and 52.73. Reading r8 as 53.39 instead of the printed 53.93 reproduces all
 * three, but the claims and the Japanese original JP S53-27421 A also print 53.93, so the printed value is kept.
 * Image plane: the final gap keeps the printed back focus, 42.624 mm. The paraxial back focus is 42.249 mm, so the
 * printed plane lies 0.375 mm behind paraxial focus; it is not refocused.
 * Stop: the patent neither prints nor draws one. It sits in the long air space d6, 20.608 mm behind S6 (17.17 at
 * F = 100), which splits d6 into 20.608 + 14.000 mm. There a Coddington trace reproduces the astigmatism curves of
 * Fig. 2 (ΔS −0.214, ΔM −0.152 at 10.2° against the plotted −0.198 and −0.146 at F = 100); with the stop 5 mm behind
 * S6 the meridional field turns back to +0.30 at the edge. Its radius is set by the paraxial entrance pupil, F/N.
 * Semi-diameters are inferred, none is printed: 22 mm on the three front elements and 11.5 mm on the rear pair, the
 * heights of Fig. 1 read at the scale of its S1 to S10 vertex span (the rear pair is drawn about half as tall); at
 * these rims the drawn edge thicknesses of L2 and L4 match the prescription. Every rim passes the f/2.8 axial beam
 * and the chief ray to the 21.6 mm corner.
 * Glass: all five n/ν pairs equal catalog d-line rows at the printed precision, so the table is read as d-line.
 * Focus: the patent names no focusing group or motion and prints the infinity state only, so no gap varies. The
 * 1.2 m minimum focus is Pentax's retail figure and is not modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-m-120mm-f28",
  "maker": "Pentax",
  "name": "PENTAX SMC M 120mm f/2.8",
  "subtitle": "US 4,134,645 A, Example 1 — probable match to the 1977 production lens",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 5,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 120,
      "design": 120
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "closeFocusM": {
      "marketing": 1.2
    },
    "specs": [
      "5 ELEMENTS / 5 GROUPS",
      "DESIGN f = 120 mm",
      "DESIGN F/2.8",
      "ALL SPHERICAL",
      "PATENT f = 100 SCALED × 1.2"
    ]
  },
  "source": {
    "patentNumber": "US 4,134,645 A",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 1979,
    "authors": [
      "Takahiro Sugiyama",
      "Toshifumi Kubota",
      "Rensuke Adachi"
    ],
    "assignees": [
      "Asahi Kogaku Kogyo Co., Ltd."
    ],
    "errata": [
      {
        "status": "unresolved",
        "note": "Example 1 traces to f = 99.23, back focus 35.21 and F1.2.3.4 = 52.54 at the patent's F = 100 scale, against the stated 100, 35.52 and 52.73. Reading r8 as 53.39 instead of the printed 53.93 reproduces all three, but the claims and the Japanese original JP S53-27421 A also print 53.93, so the printed value is kept."
      }
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.51821,
      "vd": 65,
      "focalLengthMm": 121.41112278125732,
      "glass": "BSL22 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive crown meniscus, convex to the object; the first of the three closely spaced front elements."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.80518,
      "vd": 25.4,
      "focalLengthMm": -109.01326128236924,
      "glass": "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Dense-flint biconcave negative between the two front positives; achromatizes the front group (condition (4), ν2 < 28)."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.55963,
      "vd": 61.2,
      "focalLengthMm": 84.52659386822948,
      "glass": "S-BAL50 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Strongest positive element, a crown meniscus convex to the object; completes the front group ahead of the long air space."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.80518,
      "vd": 25.4,
      "focalLengthMm": 99.99213993087761,
      "glass": "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Dense-flint positive meniscus behind the long air space; the patent gives it a low Abbe number to correct lateral color."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.8061,
      "vd": 40.9,
      "focalLengthMm": -49.05058562397137,
      "glass": "S-LAH53 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Negative meniscus concave to the object; the telephoto rear negative, whose index above 1.62 keeps the Petzval sum from falling."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 46.776,
      "d": 5.832,
      "sd": 22,
      "medium": 1
    },
    {
      "label": "2",
      "R": 174.576,
      "d": 3.828,
      "sd": 22
    },
    {
      "label": "3",
      "R": -135.264,
      "d": 2.016,
      "sd": 22,
      "medium": 2
    },
    {
      "label": "4",
      "R": 251.676,
      "d": 0.096,
      "sd": 22
    },
    {
      "label": "5",
      "R": 37.128,
      "d": 6.972,
      "sd": 22,
      "medium": 3
    },
    {
      "label": "6",
      "R": 160.968,
      "d": 20.608,
      "sd": 22
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 14
    },
    {
      "label": "7",
      "R": 36.732,
      "d": 3.456,
      "sd": 11.5,
      "medium": 4
    },
    {
      "label": "8",
      "R": 64.716,
      "d": 5.832,
      "sd": 11.5
    },
    {
      "label": "9",
      "R": -24.648,
      "d": 1.512,
      "sd": 11.5,
      "medium": 5
    },
    {
      "label": "10",
      "R": -67.236,
      "d": 42.624,
      "sd": 11.5
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "The patent names no focusing group or motion and prints the infinity state only, with its back focus of 35.52 at F = 100 (42.624 mm here), so the lens is modeled at infinity with no focus movement. Pentax's retail minimum focus of 1.2 m is not modeled."
  },
  "aperture": {
    "nominalFNumber": 2.8,
    "fStops": [
      2.8,
      4,
      5.6,
      8,
      11,
      16,
      22,
      32
    ],
    "maxFNumber": 32,
    "blades": 8
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 20.4,
    "maxTraceFieldDeg": 10.2
  },
  "groups": [
    {
      "text": "Front",
      "fromSurface": "1",
      "toSurface": "6"
    },
    {
      "text": "Rear",
      "fromSurface": "7",
      "toSurface": "10"
    }
  ],
  "layout": {
    "yScFill": 0.36
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
