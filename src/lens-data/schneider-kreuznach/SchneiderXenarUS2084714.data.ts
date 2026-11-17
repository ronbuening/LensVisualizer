import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Albrecht Wilhelm Tronnier, US 2,084,714 A, "Unsymmetrical Photographic Objective" (Jos. Schneider & Co.,
 * Optotechnische Gesellschaft; filed October 25, 1935, German priority August 26, 1935; granted June 22, 1937).
 *
 * Source: the patent's single numerical example, printed for focal length 1 with radii, thicknesses, air spaces,
 * refractive indices for the "yellow ray" (stored as the sodium D line) and Abbe numbers. Every radius and spacing is
 * multiplied by 200 to give the 200 mm focal length the patent names for its drawing. The printed table computes to
 * f = 1.00109 (EFL 200.22 mm at this scale), within the rounding of its four-decimal values.
 *
 * Inferred, not printed:
 * - Stop: the table names the second air space (13.10 mm) as the diaphragm space but gives no position inside it. The
 *   stop is placed 9.84 mm behind R4 and 3.26 mm ahead of R5, the position at which a real chief ray crossing the stop
 *   centre at 23° leaves the lens at the patent's stated 19°38′44.6″.
 * - Rims: a common 31 mm semi-diameter on every glass surface; this clears the full f/3.5 axial beam. It is not read
 *   from the figure, which draws the front element larger than the other three.
 * - Back focus: the computed paraxial back focal distance, 163.95 mm from R7. The patent prints none.
 */
const LENS_DATA = {
  schema: 2,
  key: "schneider-kreuznach-xenar-200mm-f35-us2084714",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH XENAR 200mm f/3.5 (US 2,084,714 Design)",
  subtitle: "US 2,084,714 A, sole example \u2014 Tessar-type Xenar design",
  visible: true,
  catalog: {
    specs: [
      "4 ELEMENTS / 3 GROUPS",
      "ALL SPHERICAL",
      "DESIGN f = 200 mm",
      "DESIGN F/3.5",
      "FIELD OVER 50\u00b0"
    ],
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: {
      design: 200.22
    },
    fNumber: {
      design: 3.5
    }
  },
  source: {
    patentNumber: "US 2,084,714 A",
    example: {
      label: "Sole example",
      id: null
    },
    patentYear: 1937,
    authors: [
      "Albrecht Wilhelm Tronnier"
    ],
    assignees: [
      "Jos. Schneider & Co., Optotechnische Gesellschaft"
    ],
    sdSource: "heuristic"
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      role: "Front positive collector; strong front surface, almost flat rear",
      nd: 1.6202,
      vd: 60,
      glass: "Unmatched (nD 1.6202 / V 60.0; no glass name printed)",
      indexReference: "D",
      indexReferenceNote: "The patent gives indices for the yellow ray without naming the line; they are traced as sodium D-line values, the usual convention for a German glass table of 1935."
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      role: "Negative flint ahead of the stop; main negative power of the front pair",
      nd: 1.5785,
      vd: 42.3,
      glass: "Unmatched (nD 1.5785 / V 42.3; no glass name printed)",
      indexReference: "D",
      indexReferenceNote: "The patent gives indices for the yellow ray without naming the line; they are traced as sodium D-line values, the usual convention for a German glass table of 1935."
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      role: "Negative front member of the cemented rear pair; almost flat front surface",
      nd: 1.5315,
      vd: 49.1,
      glass: "Unmatched (nD 1.5315 / V 49.1; no glass name printed)",
      indexReference: "D",
      indexReferenceNote: "The patent gives indices for the yellow ray without naming the line; they are traced as sodium D-line values, the usual convention for a German glass table of 1935.",
      cemented: "C1"
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      role: "Strong positive rear member of the cemented rear pair",
      nd: 1.6202,
      vd: 60,
      glass: "Unmatched (nD 1.6202 / V 60.0; no glass name printed)",
      indexReference: "D",
      indexReferenceNote: "The patent gives indices for the yellow ray without naming the line; they are traced as sodium D-line values, the usual convention for a German glass table of 1935.",
      cemented: "C1"
    }
  ],
  surfaces: [
    {
      label: "1",
      R: 64.84,
      d: 11.98,
      sd: 31,
      medium: 1
    },
    {
      label: "2",
      R: -1159.6,
      d: 13.1,
      sd: 31
    },
    {
      label: "3",
      R: -117,
      d: 5.76,
      sd: 31,
      medium: 2
    },
    {
      label: "4",
      R: 55.22,
      d: 9.84,
      sd: 31
    },
    {
      label: "STO",
      R: "flat",
      d: 3.26
    },
    {
      label: "5",
      R: -1159.6,
      d: 4.3,
      sd: 31,
      medium: 3
    },
    {
      label: "6",
      R: 52.36,
      d: 17.58,
      sd: 31,
      medium: 4
    },
    {
      label: "7",
      R: -84.72,
      d: 163.94874503753675,
      sd: 31
    }
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data."
  },
  aperture: {
    nominalFNumber: 3.5,
    fStops: [
      3.5,
      4,
      5.6,
      8,
      11,
      16,
      22
    ]
  },
  groups: [],
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
