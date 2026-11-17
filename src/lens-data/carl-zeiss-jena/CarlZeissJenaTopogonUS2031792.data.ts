import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Robert Richter (Carl Zeiss, Jena), US 2,031,792 A, "Anastigmatic objective for photography and projection":
 * filed 25 July 1934 (German priority 26 July 1933), granted 25 February 1936. This is the patent of the Zeiss
 * Topogon. The file transcribes the first constructional example (Figure 1): a symmetrical objective of four single
 * menisci, all concave toward the diaphragm, with fD = 66.0 mm, f/6.3 and a 100° angle of view.
 *
 * Scale: the patent's own millimetres; nothing is scaled or converted. The table prints radii as magnitudes; the
 * signs follow Figure 1 and the text (every concave surface faces the diaphragm). Indices and dispersions are the
 * printed nD (sodium D line) and ν values.
 *
 * Inferred, not printed:
 * - Stop: the diaphragm drawn in Figure 1 at the middle of the 12.98 mm central air space (6.49 mm each side).
 * - Back focus: the computed paraxial value, 51.94 mm; the patent prints none.
 * - Rims: S1/S8 10.45 mm and S3/S6 7.4 mm are the least clear apertures that pass the 50° chief ray of the
 *   patent's 100° field (both are below the Figure 1 drawing); S2/S7 10 mm and S4/S5 6.5 mm are estimates.
 *   The steep 68° rim slope of S1/S8 needs the raised rim-angle check.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-topogon-66mm-f63-us2031792",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA TOPOGON 66mm f/6.3 (US 2,031,792 Design)",
  subtitle: "1933 PRIORITY / 1936 GRANT \u2014 FIGURE 1",
  visible: true,
  catalog: {
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "PATENT ONLY; NO RETAIL MATCH",
      "ESTIMATED STOP AND RIMS",
      "INFINITY ONLY"
    ],
    elementCount: 4,
    groupCount: 4,
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
      nd: 1.6201,
      vd: 60.4,
      indexReference: "D",
      indexReferenceNote: "Literal sodium D index and dispersion reciprocal V in patent table."
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7172,
      vd: 29.5,
      indexReference: "D",
      indexReferenceNote: "Literal sodium D index and dispersion reciprocal V in patent table."
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7172,
      vd: 29.5,
      indexReference: "D",
      indexReferenceNote: "Literal sodium D index and dispersion reciprocal V in patent table."
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.6201,
      vd: 60.4,
      indexReference: "D",
      indexReferenceNote: "Literal sodium D index and dispersion reciprocal V in patent table."
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
      sd: 10
    },
    {
      label: "3",
      R: 9.094,
      d: 0.5,
      sd: 7.4,
      medium: 2
    },
    {
      label: "4",
      R: 7.35,
      d: 6.49,
      sd: 6.5
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
      sd: 6.5,
      medium: 3
    },
    {
      label: "6",
      R: -9.094,
      d: 0.02,
      sd: 7.4
    },
    {
      label: "7",
      R: -16.55,
      d: 4.44,
      sd: 10,
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
    closeFocusM: 1000000000000000.0,
    description: "Infinity-only literal Figure 1 patent reference; no exact production identity."
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
