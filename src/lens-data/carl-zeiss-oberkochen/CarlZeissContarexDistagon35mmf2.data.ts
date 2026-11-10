import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * CARL ZEISS CONTAREX DISTAGON 35mm f/2 — GB 1,066,527 A, Table I (Carl-Zeiss-Stiftung; Erhard Glatzel, named as
 * inventor on the DE 1,447,288 family member). Nine elements in eight groups, all spherical.
 *
 * Scaling: Table I is printed at f = 1. Every radius, thickness and the back focus are multiplied by exactly 35; the
 * paraxial EFL at this scale is 35.001 mm. Nothing is refitted to the marketed lens.
 * Aperture and field: the patent states 1:1.8 and ±31°; the lens was sold as f/2 with a 63° field. The model keeps
 * the patent's f/1.8 (catalog.fNumber.marketing carries f/2).
 * Image plane: at the printed back focus s' = 1.0569f (36.9915 mm); the paraxial back focus is 36.994 mm.
 * Stop: Fig. 1 draws the iris in the air space d8 but no position is printed; it sits at the midpoint of d8, and the
 * two halves sum to the printed d8.
 * Semi-diameters are not printed. They are estimated from Fig. 1 (sheet 1, PDF pp. 19–21; scale from the vertex span
 * and three arc fits) and checked against the light budget: L2, L3 and the cemented L6–L7 sit above their drawn
 * rims only as far as needed to keep corner illumination within 3 points of the earlier estimates, and L1 keeps
 * 20 mm (the drawn 18.3 mm costs 11 points at 26°). L5 follows the figure (11.6 / 11.2 mm); surface 9 also clears
 * the real-ray f/1.8 axial beam. L4, L8 and L9 agree with the figure within 9 % and are unchanged.
 * Glass: nd and νd are printed d-line values; each pair matches a Schott catalog glass (SK14, SK16, LaK9, LF5, SF4).
 * Source inconsistency: the claims repeat Table I with r2 = 0.06827f; the main table's 0.6827f is used (source.errata).
 * This is the patented design, not a factory prescription: Marco Cavina reports a thicker L3 in production.
 * Focus: infinity prescription only.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-contarex-distagon-35f2",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS CONTAREX DISTAGON 35mm f/2",
  subtitle: "GB 1,066,527 A, Table I — strong production correlation; patented at f/1.8",
  visible: true,
  catalog: {
    lensMounts: ["zeiss-contarex"],
    imageFormat: "135-full-frame",
    specs: [
      "9 ELEMENTS / 8 GROUPS",
      "DESIGN f = 35.00 mm",
      "DESIGN F/1.8",
      "ALL SPHERICAL",
    ],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: {
      marketing: 35,
      design: 35,
    },
    fNumber: {
      marketing: 2,
      design: 1.8,
    },
    closeFocusM: {
      marketing: 0.23,
    },
  },
  source: {
    patentNumber: "GB 1,066,527 A",
    example: {
      label: "Table I",
      id: "1",
    },
    patentYear: 1967,
    authors: ["Erhard Glatzel"],
    assignees: ["Carl-Zeiss-Stiftung"],
    errata: [
      {
        status: "unresolved",
        note: "The claims repeat Table I with r2 = 0.06827f; the main table prints 0.6827f, which this file uses. Both tables' Δn/r entry for r2 (−0.88338/f), the printed back focus and the DE 1,447,288 family member agree with 0.6827f; 0.06827f would give f = 0.37.",
      },
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.68,
      indexReference: "d",
      glass: "SK14 (Schott; now N-SK14)",
      role: "Outer negative meniscus of the front portion",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      glass: "SK16 (Schott; now N-SK16)",
      role: "Inner negative meniscus of the front portion",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.691,
      vd: 54.8,
      indexReference: "d",
      glass: "LaK9 (Schott; now N-LAK9)",
      role: "Thick positive collector; first element of the main portion",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      glass: "SK16 (Schott; now N-SK16)",
      role: "Weak positive meniscus ahead of the iris; corrects lateral spherical aberration and coma",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.8,
      indexReference: "d",
      glass: "LF5 (Schott)",
      role: "Strongest negative element in the lens, just behind the iris",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.53,
      indexReference: "d",
      glass: "SF4 (Schott)",
      role: "Negative flint of the cemented meniscus component",
      cemented: "C1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      glass: "SK16 (Schott; now N-SK16)",
      role: "Positive crown of the cemented meniscus component",
      cemented: "C1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      glass: "SK16 (Schott; now N-SK16)",
      role: "Rear positive element, nearly plano-convex",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      glass: "SK16 (Schott; now N-SK16)",
      role: "Last positive element ahead of the long back focus",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 52.4755,
      d: 2.408,
      sd: 20,
      medium: 1,
    },
    {
      label: "2",
      R: 23.8945,
      d: 13.0165,
      sd: 20,
    },
    {
      label: "3",
      R: 29.1655,
      d: 2.8875,
      sd: 16.2,
      medium: 2,
    },
    {
      label: "4",
      R: 22.057,
      d: 12.943,
      sd: 14.9,
    },
    {
      label: "5",
      R: 37.9575,
      d: 8.6625,
      sd: 15.7,
      medium: 3,
    },
    {
      label: "6",
      R: -55.1985,
      d: 0.098,
      sd: 15.7,
    },
    {
      label: "7",
      R: 31.192,
      d: 3.3705,
      sd: 14,
      medium: 4,
    },
    {
      label: "8",
      R: 44.828,
      d: 3.2725,
      sd: 14,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.2725,
    },
    {
      label: "9",
      R: -48.0235,
      d: 1.4455,
      sd: 11.6,
      medium: 5,
    },
    {
      label: "10",
      R: 28.4095,
      d: 3.948,
      sd: 11.2,
    },
    {
      label: "11",
      R: -61.873,
      d: 1.3475,
      sd: 12.1,
      medium: 6,
    },
    {
      label: "12",
      R: 54.5825,
      d: 5.005,
      sd: 12.7,
      medium: 7,
    },
    {
      label: "13",
      R: -29.9005,
      d: 0.098,
      sd: 12,
    },
    {
      label: "14",
      R: 520.2855,
      d: 3.465,
      sd: 13,
      medium: 8,
    },
    {
      label: "15",
      R: -50.183,
      d: 0.098,
      sd: 13,
    },
    {
      label: "16",
      R: 179.55,
      d: 3.3705,
      sd: 13,
      medium: 9,
    },
    {
      label: "17",
      R: -151.102,
      d: 36.9915,
      sd: 13,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only. The patent prints only the infinity prescription, so focus travel is not modeled. Zeiss Ikon gives a closest focus of 9 in (0.23 m) from the film plane.",
  },
  gaps: {},
  aperture: {
    nominalFNumber: 1.8,
    fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16],
  },
  doublets: [
    {
      text: "C1",
      fromSurface: "11",
      toSurface: "13",
    },
  ],
  layout: {
    scFill: 0.55,
    yScFill: 0.35,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
