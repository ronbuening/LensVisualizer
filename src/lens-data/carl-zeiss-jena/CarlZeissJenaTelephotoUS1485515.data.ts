import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,485,515 A (Willy Merté, assigned to the firm of Carl Zeiss, Jena; granted 1924), sole numerical example:
 * a four-element telephoto objective, f/6.3.
 * Radii, thicknesses, air spaces and sodium-D indices are transcribed as printed for focal length 100 and read as
 * millimetres.
 * The patent prints nD and nG′ indices but no Abbe numbers, so no νd is authored and the model is monochromatic.
 * The diaphragm position is printed: the air space is given as b2 = 5.66 behind r4 and b3 = 18.25 ahead of r5.
 * Inferred: the stop diameter (from f/6.3), all clear semi-diameters, and the back focus (computed paraxial value).
 * Semi-diameters are taken from the drawing, which is to scale axially. The rear member is set to the drawn heights:
 * r5 6.2, bevelled up to r6 and r7 at 7.1. The front member is drawn at about 7.1, with r4 bevelled to about 6.2, but
 * that is smaller than the f/6.3 axial beam (7.93 at r1), so it stays just above that beam. Lens I is square-cut at
 * 8.1, and r4 is at 7.4, the beam height rounded up.
 * Elements carry the patent's lens numerals I–IV; the brackets follow its "front member" and "back member".
 * Infinity focus only; the patent gives no close-focus data.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-telephoto-100mm-f63-us1485515",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA TELEPHOTO 100mm f/6.3 (US 1,485,515 Design)",
  subtitle: "US 1,485,515 A, sole example \u2014 Mert\u00e9 telephoto objective",
  visible: true,
  catalog: {
    specs: [
      "4 ELEMENTS / 3 GROUPS",
      "ALL SPHERICAL",
      "DESIGN F/6.3",
      "TELEPHOTO RATIO 0.80"
    ],
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: {
      design: 99.98
    },
    fNumber: {
      design: 6.3
    }
  },
  source: {
    patentNumber: "US 1,485,515 A",
    example: {
      label: "Sole example",
      id: null
    },
    patentYear: 1924,
    authors: [
      "Willy Mert\u00e9"
    ],
    assignees: [
      "Carl-Zeiss-Stiftung"
    ],
    sdSource: "heuristic"
  },
  elements: [
    {
      id: 1,
      name: "I",
      label: "Element I",
      diagramLabel: "I",
      type: "Biconvex Positive",
      nd: 1.59234,
      indexReference: "D",
      glass: "Unmatched (nD 1.59234, nG′ 1.60464; no Abbe number printed)",
      focalLengthMm: 21.3,
      role: "Front biconvex collective lens of the positive front member"
    },
    {
      id: 2,
      name: "II",
      label: "Element II",
      diagramLabel: "II",
      type: "Biconcave Negative",
      nd: 1.59704,
      indexReference: "D",
      glass: "Unmatched (nD 1.59704, nG′ 1.61718; no Abbe number printed)",
      focalLengthMm: -31.43,
      role: "Biconcave dispersive lens of the front member, behind a thin air lens"
    },
    {
      id: 3,
      name: "III",
      label: "Element III",
      diagramLabel: "III",
      type: "Positive Meniscus",
      nd: 1.6241,
      indexReference: "D",
      glass: "Unmatched (nD 1.62410, nG′ 1.64732; no Abbe number printed)",
      focalLengthMm: 92.56,
      role: "Positive front lens of the cemented negative rear member",
      cemented: "C1"
    },
    {
      id: 4,
      name: "IV",
      label: "Element IV",
      diagramLabel: "IV",
      type: "Negative Meniscus",
      nd: 1.499,
      indexReference: "D",
      glass: "Unmatched (nD 1.49900, nG′ 1.50840; no Abbe number printed)",
      focalLengthMm: -43.41,
      role: "Negative rear lens of the cemented negative rear member",
      cemented: "C1"
    }
  ],
  surfaces: [
    {
      label: "1",
      R: 18.091,
      d: 3.329,
      sd: 8.1,
      medium: 1
    },
    {
      label: "2",
      R: -38.834,
      d: 0.13,
      sd: 8.1
    },
    {
      label: "3",
      R: -36.679,
      d: 0.83,
      sd: 8.1,
      medium: 2
    },
    {
      label: "4",
      R: 38.74,
      d: 5.66,
      sd: 7.4
    },
    {
      label: "STO",
      R: "flat",
      d: 18.25
    },
    {
      label: "5",
      R: -10.396,
      d: 1.89,
      sd: 6.2,
      medium: 3
    },
    {
      label: "6",
      R: -9.426,
      d: 0.75,
      sd: 7.1,
      medium: 4
    },
    {
      label: "7",
      R: -17.13,
      d: 49.6286724892259,
      sd: 7.1
    }
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data."
  },
  aperture: {
    nominalFNumber: 6.3,
    fStops: [
      6.3,
      8,
      11,
      16,
      22
    ]
  },
  groups: [
    {
      text: "FRONT (+)",
      fromSurface: "1",
      toSurface: "4"
    },
    {
      text: "BACK (−)",
      fromSurface: "5",
      toSurface: "7"
    }
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "5",
      toSurface: "7"
    }
  ],
  layout: {
    yScFill: 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
