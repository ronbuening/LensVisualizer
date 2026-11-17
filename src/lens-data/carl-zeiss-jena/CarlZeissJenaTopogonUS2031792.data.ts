import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Robert Richter (Carl Zeiss, Jena), US 2,031,792 A, "Anastigmatic objective for photography and projection":
 * filed 25 July 1934 (German priority 26 July 1933), granted 25 February 1936. This is the patent of the Zeiss
 * Topogon. The file transcribes the first constructional example (Figure 1): a symmetrical objective of four single
 * menisci, all concave toward the diaphragm, with fD = 66.0 mm, f/6.3 and a 100° angle of view.
 *
 * Scale: the patent's own millimetres; nothing is scaled or converted. The table prints radii as magnitudes; the
 * signs follow Figure 1 and the text (every concave surface faces the diaphragm). Indices and dispersions are the
 * printed nD (sodium D line) and ν values. The inner flint (1.7172 / 29.5) matches Schott SF1 at the D line
 * (1.71715 / 29.50). The outer crown (1.6201 / 60.4) has no catalogue row within 0.0001; the nearest, N-SK16, has
 * nD 1.62032.
 *
 * Field: the patent's 100° angle of view is declared as the full field (50° half-field). The 161 mm image circle
 * is the traced chief-ray height at 50° (80.67 mm), rounded down; the patent states the angle, not a diameter.
 *
 * Inferred, not printed:
 * - Stop: the diaphragm drawn in Figure 1 at the middle of the 12.98 mm central air space (6.49 mm each side).
 * - Back focus: the computed paraxial value, 51.94 mm; the patent prints none.
 * - Rims, measured from Figure 1, which is drawn to scale (65.2 px/mm at 600 dpi, axial spans within 1 %):
 *   - L1/L4: drawn to a knife edge at about 10.9 mm. Both faces are 10.45 mm, the most the 69° rim-angle check
 *     allows on S1/S8, and enough to pass the 50° chief ray (10.42 mm there).
 *   - L2/L3: drawn to about 8.0 mm on the convex face and 6.9–7.0 mm on the concave face. Modelled at 8.0 and
 *     6.8 mm, the latter the most the same check allows.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-topogon-66mm-f63-us2031792",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA TOPOGON 66mm f/6.3 (US 2,031,792 Design)",
  subtitle: "US 2,031,792 A, Figure 1 \u2014 Topogon wide-angle design",
  visible: true,
  catalog: {
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "DESIGN f = 66.0 mm",
      "DESIGN F/6.3",
      "ALL SPHERICAL",
      "100\u00b0 FIELD"
    ],
    elementCount: 4,
    groupCount: 4,
    imageCircleMm: 161,
    focalLengthMm: {
      design: 66.04
    },
    fNumber: {
      design: 6.3
    }
  },
  source: {
    patentNumber: "US 2,031,792 A",
    example: {
      label: "Figure 1",
      id: "1"
    },
    patentYear: 1936,
    authors: [
      "Robert Richter"
    ],
    assignees: [
      "Carl-Zeiss-Stiftung"
    ],
    sdSource: "heuristic"
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      role: "Thick front collective shell, concave toward the stop; with L4 it carries all the positive power.",
      glass: "Unmatched (nD 1.6201 / V 60.4)",
      nd: 1.6201,
      vd: 60.4,
      indexReference: "D"
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      role: "Thin high-index flint shell just ahead of the stop; its concave face sets the wide central air space.",
      glass: "SF1 (Schott)",
      nd: 1.7172,
      vd: 29.5,
      indexReference: "D"
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      role: "Thin high-index flint shell just behind the stop, the mirror image of L2.",
      glass: "SF1 (Schott)",
      nd: 1.7172,
      vd: 29.5,
      indexReference: "D"
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      role: "Thick rear collective shell, the mirror image of L1.",
      glass: "Unmatched (nD 1.6201 / V 60.4)",
      nd: 1.6201,
      vd: 60.4,
      indexReference: "D"
    }
  ],
  surfaces: [
    {
      label: "1",
      R: 11.25,
      d: 4.44,
      sd: 10.45,
      medium: 1
    },
    {
      label: "2",
      R: 16.55,
      d: 0.02,
      sd: 10.45
    },
    {
      label: "3",
      R: 9.094,
      d: 0.5,
      sd: 8,
      medium: 2
    },
    {
      label: "4",
      R: 7.35,
      d: 6.49,
      sd: 6.8
    },
    {
      label: "STO",
      R: "flat",
      d: 6.49
    },
    {
      label: "5",
      R: -7.35,
      d: 0.5,
      sd: 6.8,
      medium: 3
    },
    {
      label: "6",
      R: -9.094,
      d: 0.02,
      sd: 8
    },
    {
      label: "7",
      R: -16.55,
      d: 4.44,
      sd: 10.45,
      medium: 4
    },
    {
      label: "8",
      R: -11.25,
      d: 51.94152153724732,
      sd: 10.45
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
  groups: [],
  doublets: [],
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 100,
    maxTraceFieldDeg: 50
  },
  checks: {
    maxRimAngleDeg: 69
  },
  layout: {
    yScFill: 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
