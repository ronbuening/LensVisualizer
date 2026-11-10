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
 * Elements are named LI–LIX as in Table I and Fig. 1.
 * Semi-diameters are not printed. They are estimated from Fig. 1 (sheet 1, PDF pp. 19–21; scale from the vertex span
 * and three arc fits) and checked against the light budget: LII, LIII and the cemented LVI–LVII sit above their drawn
 * rims only as far as needed to keep corner illumination within 3 points of the earlier estimates, with LII's front
 * face no taller than LIII (Fig. 1 draws LIII 2 mm taller; a lower LII costs more light). LI's front face keeps 20 mm
 * (the drawn 18.3 mm costs 10–11 points beyond 26°); its rear face sits at 18.7 mm, toward the drawn 16.0 mm but no
 * lower, since below it the engine half-field shrinks. LV follows the figure (11.6 / 11.2 mm); surface 9 also clears
 * the real-ray f/1.8 axial beam. LVII is square-cut at the cement's 12.2 mm and LVI keeps the drawn step below it at
 * its front face; LIX is square-cut at the drawn 13.7 mm, taller than LVIII as drawn. LIV and LVIII are within 9 % of
 * the figure.
 * Glass: nd and νd are printed d-line values; each pair matches a Schott catalog glass (SK14, SK16, LaK9, LF5, SF4),
 * modelled with the current N-SK14, N-SK16 and N-LAK9 rows where the old glass has been replaced.
 * Source inconsistency: the claims repeat Table I with r2 = 0.06827f; the main table's 0.6827f is used (source.errata).
 * This is the patented design, not a factory prescription: Marco Cavina reports a thicker LIII in production.
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
      name: "LI",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.68,
      focalLengthMm: -75.1,
      indexReference: "d",
      glass: "N-SK14 (Schott catalog equivalent; production supplier unspecified)",
      role: "Outer negative meniscus of the front portion",
    },
    {
      id: 2,
      name: "LII",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.29,
      focalLengthMm: -172.7,
      indexReference: "d",
      glass: "N-SK16 (Schott catalog equivalent; production supplier unspecified)",
      role: "Inner negative meniscus of the front portion",
    },
    {
      id: 3,
      name: "LIII",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.691,
      vd: 54.8,
      focalLengthMm: 33.8,
      indexReference: "d",
      glass: "N-LAK9 (Schott catalog equivalent; production supplier unspecified)",
      role: "Thick positive collector; first element of the main portion",
    },
    {
      id: 4,
      name: "LIV",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.29,
      focalLengthMm: 151,
      indexReference: "d",
      glass: "N-SK16 (Schott catalog equivalent; production supplier unspecified)",
      role: "Weak positive meniscus ahead of the iris; corrects lateral spherical aberration and coma",
    },
    {
      id: 5,
      name: "LV",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.8,
      focalLengthMm: -30.5,
      indexReference: "d",
      glass: "LF5 (Schott catalog equivalent; production supplier unspecified)",
      role: "Strongest negative element in the lens, just behind the iris",
    },
    {
      id: 6,
      name: "LVI",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.53,
      focalLengthMm: -38.2,
      indexReference: "d",
      glass: "SF4 (Schott catalog equivalent; production supplier unspecified)",
      role: "Negative flint of the cemented meniscus component",
      cemented: "C1",
    },
    {
      id: 7,
      name: "LVII",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.29,
      focalLengthMm: 31.9,
      indexReference: "d",
      glass: "N-SK16 (Schott catalog equivalent; production supplier unspecified)",
      role: "Positive crown of the cemented meniscus component",
      cemented: "C1",
    },
    {
      id: 8,
      name: "LVIII",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.29,
      focalLengthMm: 73.9,
      indexReference: "d",
      glass: "N-SK16 (Schott catalog equivalent; production supplier unspecified)",
      role: "Rear positive element, nearly plano-convex",
    },
    {
      id: 9,
      name: "LIX",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.29,
      focalLengthMm: 132.8,
      indexReference: "d",
      glass: "N-SK16 (Schott catalog equivalent; production supplier unspecified)",
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
      sd: 18.7,
    },
    {
      label: "3",
      R: 29.1655,
      d: 2.8875,
      sd: 15.7,
      medium: 2,
    },
    {
      label: "4",
      R: 22.057,
      d: 12.943,
      sd: 14.4,
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
      sd: 11.6,
      medium: 6,
    },
    {
      label: "12",
      R: 54.5825,
      d: 5.005,
      sd: 12.2,
      medium: 7,
    },
    {
      label: "13",
      R: -29.9005,
      d: 0.098,
      sd: 12.2,
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
      sd: 13.7,
      medium: 9,
    },
    {
      label: "17",
      R: -151.102,
      d: 36.9915,
      sd: 13.7,
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
