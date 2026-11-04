import type { LensDataV2Input } from "../../types/lensDataV2.js";

// Vivitar Series 1 90mm f/2.5 VMC Macro (made for Vivitar by Tokina)
// US Patent 3,942,875, Table VII (FIG. 10) — Ellis I. Betensky / Ponder & Best, Inc.
// Patent granted March 9, 1976 (filed May 9, 1974). Table VII is the last of the patent's five embodiments:
// "a 90mm EFL f/1.9 macro lens scaled for a 24 x 36mm image frame". All R, d, Nd and Vd values are the printed
// ones; the patent prints indices to three decimals and gives no partial dispersions.
//
// SCALE: patent values are already at production scale and are stored unscaled (mm). The stored prescription
// computes to f = 90.013 mm (patent: 90 mm). The last gap is the printed BFL, 40.50 mm; the paraxial BFD of the
// stored prescription is 40.54 mm, a +0.04 mm residual that is kept rather than refocused.
//
// SOURCE CONFLICT — corrector power: the patent text gives the L7/L8 corrector EFL as +1250 mm (ratio 13.89 to
// the lens EFL). The printed radii compute to -1283 mm; the magnitude agrees, the sign does not. The overall EFL
// and BFL reproduce the patent, so no radius is changed.
//
// APERTURE: the patent states f/1.9 (catalog.fNumber.design). The production lens is f/2.5, and the inferred clear
// apertures below do not pass the full f/1.9 axial beam at surfaces 5 and 8-11 or inside the lands on surfaces 6
// and 7; surface 5 cannot be enlarged because L2 and L3 nearly touch at that height. The stop radius is therefore
// derived from f/2.5 (aperture.nominalFNumber), as for other lenses that open only to their marketed aperture.
//
// FOCUS: L1-L6 and the stop move objectward as one unit; the L7/L8 corrector stays fixed to the film plane. The
// patent prints D11 = 0.3 (infinity) and 44.76 mm, "for focusing from infinity to 404.6mm", with a magnification
// of 0.5. In the stored prescription the 44.76 mm state is conjugate to an object 240.76 mm from R1, 404.9 mm from
// the film, at m = -0.499 (a rounding difference from the patent's 404.6 mm). Intermediate focus positions
// interpolate D11 linearly; the patent gives no intermediate rows. Vivitar's minimum focus is about 0.39 m (1:2).
//
// STOP: the patent marks the aperture stop A in the 12.635 mm R6-R7 airspace but gives no station. It is placed at
// the midpoint (6.3175 + 6.3175 mm, inferred) and moves with the front unit.
//
// NOTE ON SEMI-DIAMETERS: the patent publishes no clear apertures. All semi-diameters are inferred from FIG. 10,
// measured at its axial scale (9.57 px/mm), and floor-checked by real-ray trace; they are not factory clear
// apertures. L2 and L6-L8 are at their drawn heights and L4/L5 (17.0 mm, drawn 17.7) are kept; L1 (drawn 23.3 mm)
// is held at 24.8 mm so the corner light stays within 3 points of the package rims. Surface 5 stays at 17.5 mm
// (drawn 18.3) so that L2 and L3 do not overlap at the rim, and L3 is square-cut at that height. FIG. 10 draws flat
// lands on L3's rear (R6) and L4's front (R7) beside the stop: rim cuts at 4.20 and 3.98 mm (cut radii 15.02 and
// 14.41 mm, q = 0.858 and 0.848). The corner bundle at f/2.5 is mechanically vignetted by about 3 %.
//
const LENS_DATA = {
  schema: 2,
  key: "vivitar-series1-90f25-macro",
  maker: "Vivitar",
  name: "VIVITAR SERIES 1 90mm f/2.5 MACRO",
  subtitle: "US 3,942,875 Table VII (FIG. 10) — Betensky / Ponder & Best",
  catalog: {
    lensMounts: ["canon-fd", "m42", "minolta-sr", "nikon-f", "olympus-om", "pentax-k"],
    imageFormat: "135-full-frame",
    specs: [
      "8 ELEMENTS / 7 GROUPS",
      "DESIGN f = 90 mm",
      "DESIGN F/1.9",
      "ALL SPHERICAL",
      "1:2 MACRO, FIXED REAR CORRECTOR",
    ],
    elementCount: 8,
    groupCount: 7,
    focalLengthMm: {
      marketing: 90,
      design: 90,
    },
    fNumber: {
      marketing: 2.5,
      design: 1.9,
    },
    closeFocusM: { marketing: 0.39 },
  },
  source: {
    patentNumber: "US 3,942,875",
    example: {
      label: "Table VII",
      id: "7",
    },
    patentYear: 1976,
    authors: ["Ellis I. Betensky"],
    assignees: ["Ponder & Best, Inc."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.678,
      vd: 55.5,
      indexReference: "d",
      glass: "LAC12 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Front positive element of Group I; moves with the focusing front unit.",
      focalLengthMm: 126.62241887905604,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.678,
      vd: 55.5,
      indexReference: "d",
      glass: "LAC12 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Thick positive meniscus of Group I, convex to the object; the stronger of the two Group I elements.",
      focalLengthMm: 99.95999655427742,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.673,
      vd: 32.2,
      indexReference: "d",
      glass: "SF5 (SCHOTT catalog equivalent; production supplier unspecified)",
      role: "Group II negative meniscus just ahead of the stop; its strongly curved rear surface carries the group's power.",
      focalLengthMm: -46.51951935690573,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.575,
      vd: 41.5,
      indexReference: "d",
      glass: "S-TIL27 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative front half of the cemented doublet behind the stop (Group III).",
      focalLengthMm: -35.114801649775245,
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.691,
      vd: 54.7,
      indexReference: "d",
      glass: "N-LAK9 (SCHOTT catalog equivalent; production supplier unspecified)",
      role: "Positive rear half of the cemented doublet behind the stop (Group III).",
      focalLengthMm: 38.63982976362425,
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.678,
      vd: 55.5,
      indexReference: "d",
      glass: "LAC12 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Rear positive element of Group III and the last element of the focusing front unit.",
      focalLengthMm: 88.21571413745495,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.517,
      vd: 64.2,
      indexReference: "d",
      glass: "N-BK7 (SCHOTT catalog equivalent; production supplier unspecified)",
      role: "Thick positive meniscus of the rear corrector, concave to the object; fixed to the film plane.",
      focalLengthMm: 149.8516772857798,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.517,
      vd: 64.2,
      indexReference: "d",
      glass: "N-BK7 (SCHOTT catalog equivalent; production supplier unspecified)",
      role: "Negative meniscus of the rear corrector, concave to the object; with L7 it gives the corrector nearly zero net power.",
      focalLengthMm: -130.35516189007419,
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 85.85,
      d: 5,
      sd: 24.8,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 0.234,
      sd: 24.8,
    },
    {
      label: "3",
      R: 42.15,
      d: 14.847,
      sd: 22.3,
      medium: 2,
    },
    {
      label: "4",
      R: 95.62,
      d: 1.4,
      sd: 22.3,
    },
    {
      label: "5",
      R: 406.87,
      d: 4.2,
      sd: 17.5,
      medium: 3,
    },
    {
      label: "6",
      R: 28.95,
      d: 6.3175,
      sd: 17.5,
      rimCutDepthMm: 4.2,
    },
    {
      label: "STO",
      R: "flat",
      d: 6.3175,
    },
    {
      label: "7",
      R: -28.07,
      d: 3,
      sd: 17,
      rimCutDepthMm: 3.98,
      medium: 4,
    },
    {
      label: "8",
      R: 74.74,
      d: 7,
      sd: 17,
      medium: 5,
    },
    {
      label: "9",
      R: -39.95,
      d: 0.234,
      sd: 17,
    },
    {
      label: "10",
      R: 200.43,
      d: 3.605,
      sd: 17.5,
      medium: 6,
    },
    {
      label: "11",
      R: -84.63,
      sd: 17.5,
    },
    {
      label: "12",
      R: -279.43,
      d: 15.192,
      sd: 18.3,
      medium: 7,
    },
    {
      label: "13",
      R: -61.78,
      d: 7.954,
      sd: 18.3,
    },
    {
      label: "14",
      R: -48.45,
      d: 3.6,
      sd: 18.4,
      medium: 8,
    },
    {
      label: "15",
      R: -176.73,
      d: 40.5,
      sd: 18.4,
    },
  ],
  focus: {
    closeFocusM: 0.4049171664448818,
    keyframes: [0, 1],
    description:
      "PUBLISHED front-unit focus: L1–L6 and the stop move 44.46 mm objectward while the rear corrector L7/L8 stays fixed to the film plane. The single variable gap D11 is printed as 0.30 mm at infinity and 44.76 mm at the patent's close state, which the patent gives as 404.6 mm at 0.5×; the stored prescription places that state 404.9 mm from the film at −0.499×, a rounding difference. Intermediate positions interpolate D11 linearly. Vivitar's minimum focus is about 0.39 m (1:2).",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 240.7561664448818,
        distanceReference: "first-surface",
        source:
          "US 3,942,875 Table VII printed close-focus gap (D11 = 44.76 mm); object distance from R1 calculated from it. The patent states 404.6 mm at 0.5×.",
      },
    ],
    published: [1],
  },
  gaps: {
    "11": {
      label: "D11",
      values: [[0.3, 44.76]],
    },
  },
  aperture: {
    nominalFNumber: 2.5,
    fStops: [2.5, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  groups: [
    {
      text: "OBJECTIVE (L1–L6)",
      fromSurface: "1",
      toSurface: "11",
    },
    {
      text: "CORRECTOR (L7–L8)",
      fromSurface: "12",
      toSurface: "15",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "7",
      toSurface: "9",
    },
  ],
  layout: {
    yScFill: 0.78,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
