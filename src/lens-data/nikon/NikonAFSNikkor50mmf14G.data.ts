import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * NIKON AF-S NIKKOR 50mm f/1.4 G
 *
 * Source: JP 2015-041003 A (Nikon Corporation; inventor Haruo Sato; filed 2013-08-22, published 2015-03-02),
 * master lens Gm, Table 1 rows 1-17. The patent claims rear wide converters; Examples 1-3 attach three different
 * converters Gc to the same master lens Gm, whose rows Tables 2 and 3 and the grant JP 6413211 B2 repeat unchanged.
 * Only Gm is modeled. The converter, its dummy filter plate and the compound image plane are left out.
 *
 * Production correlation (inferred): the patent never names a product. Gm matches the AF-S NIKKOR 50mm f/1.4G
 * (announced 2008) in construction: 8 elements in 7 groups, all spherical, a design focal length of 51.6 mm at about
 * f/1.45, and an F-mount back focus. Nikon's optical section shows the same nested L2/L3 pair ahead of the stop, a
 * biconcave L4 with a stepped rim cemented to L5 across a nearly flat interface, and three rear singlets.
 *
 * Scale: none. The prescription is at patent scale; the lens group data print f(Gm) = 51.598 mm.
 *
 * Printed and derived values:
 *   - R, d, nd and νd of all 17 rows, including the stop row, are printed and unchanged. There are no aspheres.
 *   - Back focus 39.0174 mm is the paraxial image distance of Gm alone. The printed d17 = 3.0 mm is the gap from Gm
 *     to the converter, not a back focus. Spherical aberration is small (about -0.09 mm in the worst zone), so the
 *     paraxial plane is effectively best focus.
 *   - The patent prints no F-number for Gm. f/1.4505 is inferred as the compound F-number divided by the focal ratio
 *     (1.015 x 51.598 / 36.106 in Example 1; Examples 2 and 3 give 1.4501 and 1.4502).
 *   - The patent gives no field for Gm; the 135 full-frame format is the production lens's.
 *
 * Cement: rows 9-10 print a 0.0100 mm layer (nd 1.514, νd 42.83) between the two R = 154.1 faces of L4 and L5. It is
 * modeled as the thin cement element C1 with its printed thickness, nd and νd, so the first-order values are exact
 * and the colour analyses keep a dispersion for every medium. With equal radii on both faces the layer has no
 * meaningful power (f ≈ 1.36 x 10^7 mm). It is not counted in the 8 elements / 7 groups.
 *
 * Stop: printed as row 7, 6.822 mm behind S6 and 9.6123 mm ahead of S8 (18.402 mm behind S1). Its radius is derived
 * from f/1.4505.
 *
 * Semi-diameters: not printed. They follow the patent's Figure 1 outline within the real geometry. The figure draws
 * L3's front face meeting L2's rear face at the rim; the two faces touch at 15.9 mm, so S5 stops at 15.8 mm and
 * checks.gapSagFrac 0.99 admits that S4/S5 pair. S6 keeps a 13.7 mm optical cap with a vertical land to 15.8 mm, so
 * L3 stays square-cut as drawn, and S8 a 13.2 mm cap with a land to 16.2 mm, following the stepped rims the figure
 * draws. L5 is square-cut at 16.6 mm and stands just proud of L4 (16.2 mm), as the figure draws it.
 *
 * Focus: Nikon states that all lens groups move during focusing (unit focus). The patent prints infinity only. The
 * close state is a paraxial reconstruction at Nikon's 0.45 m minimum focus distance (object to image): the back
 * focus grows from 39.0174 mm to 46.6586 mm, a 7.641 mm extension at 0.148x. It is not a published state.
 *
 * Aperture: stops run to f/16, Nikon's minimum aperture; Nikon specifies 9 rounded blades.
 *
 * Glass: the patent prints nd/νd only. Each pair matches the named catalog glass within 2 x 10^-6 in nd and 0.01 in
 * νd; the production supplier is not stated.
 *
 * Source inconsistency: paragraph 0014 gives the master as 51.6 mm but divides 36.1 by 51.5 in its sample ratio
 * calculation; the table value 51.598 mm is used.
 */

const lens = {
  schema: 2,
  key: "nikon-af-s-nikkor-50mm-f14g",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 50mm f/1.4 G",
  subtitle: "JP 2015-041003 A, master lens Gm — inferred AF-S NIKKOR 50mm f/1.4G correlation",
  visible: true,
  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["8 ELEMENTS / 7 GROUPS", "DESIGN f = 51.6 mm", "DESIGN F/1.45", "ALL SPHERICAL"],
    elementCount: 8,
    groupCount: 7,
    focalLengthMm: { marketing: 50, design: 51.598 },
    fNumber: { marketing: 1.4, design: 1.4505 },
  },
  source: {
    patentNumber: "JP 2015-041003 A",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 2015,
    authors: ["Haruo Sato"],
    assignees: ["Nikon Corporation"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.804,
      vd: 46.57,
      focalLengthMm: 62.917,
      glass: "S-LAH65 (OHARA)",
      apd: false,
      role: "Front positive meniscus, convex to the object; first collector of the front group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.903658,
      vd: 31.31,
      focalLengthMm: 86.719,
      glass: "TAFD25 (HOYA)",
      apd: false,
      role: "High-index positive meniscus nested against L3 ahead of the stop.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.53,
      focalLengthMm: -36.724,
      glass: "E-FD4 (HOYA)",
      apd: false,
      role: "Pre-stop negative meniscus; its deep concave rear face faces the stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.53,
      focalLengthMm: -22.106,
      glass: "E-FD4 (HOYA)",
      apd: false,
      role: "Post-stop biconcave flint with a stepped rim; negative member of the cemented pair.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "C1",
      label: "Cement layer",
      type: "Cement Layer",
      nd: 1.514,
      vd: 42.83,
      glass: "Unmatched (patent cement layer; nd=1.51400, νd=42.83)",
      role: "Printed 0.0100 mm cement layer between L4 and L5; not counted as a lens element.",
      diagramLabel: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.834807,
      vd: 42.71,
      focalLengthMm: 37.008,
      glass: "S-LAH55 (OHARA)",
      apd: false,
      role: "Positive lanthanum member of the cemented pair, joined to L4 across a nearly flat interface.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.834807,
      vd: 42.71,
      focalLengthMm: 85.44,
      glass: "S-LAH55 (OHARA)",
      apd: false,
      role: "First rear positive meniscus, concave to the stop.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.816,
      vd: 46.62,
      focalLengthMm: 111.065,
      glass: "S-LAH59 (OHARA)",
      apd: false,
      role: "Second rear positive meniscus, concave to the stop; shares the rear convergence.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.729157,
      vd: 54.68,
      focalLengthMm: 110.413,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Final weak biconvex element; lowest index and highest Abbe number in the lens.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 42.627,
      d: 4.52,
      sd: 18.8,
      medium: 1,
    },
    {
      label: "2",
      R: 258.15,
      d: 0.15,
      sd: 18.8,
    },
    {
      label: "3",
      R: 26.811,
      d: 4.15,
      sd: 16.9,
      medium: 2,
    },
    {
      label: "4",
      R: 37.76,
      d: 1.51,
      sd: 16.9,
    },
    {
      label: "5",
      R: 64.144,
      d: 1.25,
      sd: 15.8,
      medium: 3,
    },
    {
      label: "6",
      R: 19.2,
      d: 6.822,
      sd: 13.7,
      rimExtensionSd: 15.8,
    },
    {
      label: "STO",
      R: "flat",
      d: 9.6123,
    },
    {
      label: "8",
      R: -18.804,
      d: 1.55,
      sd: 13.2,
      rimExtensionSd: 16.2,
      medium: 4,
    },
    // Printed 0.0100 mm cement layer (nd 1.514, νd 42.83) between the two R = 154.1 faces.
    {
      label: "9",
      R: 154.1,
      d: 0.01,
      sd: 16.2,
      medium: 9,
    },
    {
      label: "10",
      R: 154.1,
      d: 5.4,
      sd: 16.6,
      medium: 5,
    },
    {
      label: "11",
      R: -38.026,
      d: 0.71,
      sd: 16.6,
    },
    {
      label: "12",
      R: -43.029,
      d: 3.53,
      sd: 16.4,
      medium: 6,
    },
    {
      label: "13",
      R: -27.84,
      d: 0.18,
      sd: 16.4,
    },
    {
      label: "14",
      R: -151.43,
      d: 2.26,
      sd: 16.2,
      medium: 7,
    },
    {
      label: "15",
      R: -57.077,
      d: 0.1,
      sd: 16.2,
    },
    {
      label: "16",
      R: 100.548,
      d: 2.33,
      sd: 16.0,
      medium: 8,
    },
    // Last gap: paraxial back focus of Gm; the printed d17 = 3.0 mm is the gap to the converter.
    {
      label: "17",
      R: -400,
      sd: 16.0,
    },
  ],
  focus: {
    closeFocusM: 0.45,
    description:
      "Unit focus: Nikon states that all lens groups move during focusing, so the whole optical unit travels toward the object and only the back focus changes. The patent prints the master lens at infinity only. The close state is a paraxial reconstruction at Nikon's 0.45 m minimum focus distance: the back focus grows from 39.02 mm to 46.66 mm, a 7.64 mm extension at about 0.148× magnification.",
  },
  gaps: {
    "17": { label: "BF", values: [[39.017401057819434, 46.6586109679]] },
  },
  aperture: {
    nominalFNumber: 1.4505060100814267,
    fStops: [1.4505060100814267, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
    blades: 9,
    bladeRoundedness: 0.7,
  },
  groups: [
    {
      text: "Gm (+) / UNIT FOCUS → OBJ",
      fromSurface: "1",
      toSurface: "17",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "8",
      toSurface: "11",
    },
  ],
  checks: {
    gapSagFrac: 0.99,
  },
  layout: {
    yScFill: 0.3,
  },
} satisfies LensDataV2Input;
export default lens;
