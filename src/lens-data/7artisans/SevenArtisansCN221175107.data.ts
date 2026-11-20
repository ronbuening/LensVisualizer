import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * CN 221175107 U, sole example, prescription on PDF page 6; dimensions are in millimetres at the printed scale.
 * Radii and internal spacings follow the table. The patent names the glasses; their catalog nd and Abbe numbers
 * replace the rounded table values. In particular, H-ZLaF92 on L4 and L6 has nd 2.00330 rather than the printed 2;
 * this substitution is recorded below. CDGM's H-F4 sheet gives 1.62005/36.35. Four named CDGM elements
 * (L1, L3, L4 and L6) have no published dispersion data; colour is approximated from nd/νd.
 * L5 and L7 resolve to CDGM H-ZF4A and H-ZF7LA, with the same constants as the patent's high-transmittance grades.
 * FCD1 resolves to Hoya as a spectral proxy; the patent describes domestic glass and does not establish Hoya as
 * its supplier.
 * The stop is inferred midway through the 3.13 mm L1-L2 gap, consistent with the patent's near-zero distortion.
 * Rims are estimated from Fig. 1 and checked by real-ray trace. The figure's glass thicknesses and surface sags give
 * 29.0 px/mm at 150 dpi, but its air gaps are not to scale, so it sets rim heights only. It draws L1 at 6.5 mm, L2 at
 * 5.2 mm, L3 and L4 at 6.5 mm, L5 and L6 at 8.2 mm and L7 at 10.2 mm. L1's rear curve ends at 5.3 mm and L7's front
 * curve at 7.7 mm, each followed by a flat land (rimExtensionSd 6.5 and 9.8 mm). With the printed 0.94 mm gap, S8
 * and S9 would meet at about 7.45 mm, so L5's rear face and L6 stop at 7.3 mm; checks.gapSagFrac 0.96 admits the
 * S8/S9 pair. L7 stays at 9.8 mm, within 4 % of the drawing.
 * The final air gap is the computed paraxial back focus, since the patent prints no image distance.
 * Nominal f = 40 mm and F/5.6 follow the text; the 3.50 mm entrance-pupil radius in Fig. 5 implies about F/5.69.
 * The prescription models infinity focus only; no finite-focus spacings or production mount are documented.
 */
const LENS_DATA = {
  schema: 2,
  key: "7artisans-40mm-f56-cn221175107",
  maker: "7Artisans",
  name: "7ARTISANS 40mm f/5.6 (CN 221175107 U Design)",
  subtitle: "CN 221175107 U, sole example — 7Artisans / Liu",
  visible: true,
  catalog: {
    imageFormat: "135-full-frame",
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: {
      design: 40,
    },
    fNumber: {
      design: 5.6,
    },
    specs: ["7 ELEMENTS / 5 GROUPS", "DESIGN f = 40 mm", "DESIGN F/5.6", "ALL SPHERICAL"],
  },
  source: {
    patentNumber: "CN 221175107 U",
    patentYear: 2024,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Changjia Liu"],
    assignees: ["Shenzhen 7Artisans Photoelectric Technology Co., Ltd."],
    sdSource: "figure-measured",
    errata: [
      {
        status: "corrected",
        surface: "6",
        field: "nd",
        printed: 2,
        applied: 2.0033,
        evidence: ["source-summary", "aberration-figure", "claims"],
        note: "The table rounds the index to 2, while claim 9 and paragraph 0036 name H-ZLaF92. Its CDGM catalog index is 2.00330 with Abbe number 28.32. Using the named glasses brings EFL from 40.43 to 39.84 mm against the stated 40 mm and reduces the distortion discrepancy with the patent plots.",
      },
      {
        status: "corrected",
        surface: "9",
        field: "nd",
        printed: 2,
        applied: 2.0033,
        evidence: ["source-summary", "aberration-figure", "claims"],
        note: "The table rounds the index to 2, while claim 9 and paragraph 0036 name H-ZLaF92. Its CDGM catalog index is 2.00330 with Abbe number 28.32. Using the named glasses brings EFL from 40.43 to 39.84 mm against the stated 40 mm and reduces the distortion discrepancy with the patent plots.",
      },
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 52.32,
      glass: "Unmatched (H-LaK53B, CDGM; nd 1.755 / νd 52.32)",
      role: "Positive front singlet",
      focalLengthMm: 59.84,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      glass: "FCD1 (Hoya)",
      cemented: "C1",
      role: "Positive member of the first cemented pair",
      focalLengthMm: 15.83,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.62005,
      vd: 36.35,
      glass: "Unmatched (H-F4, CDGM; nd 1.62005 / νd 36.35)",
      cemented: "C1",
      role: "Negative member of the first cemented pair",
      focalLengthMm: -10.2,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 2.0033,
      vd: 28.32,
      glass: "Unmatched (H-ZLaF92, CDGM; nd 2.0033 / νd 28.32)",
      cemented: "C2",
      role: "Positive member of the second cemented pair",
      focalLengthMm: 8.33,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.32,
      glass: "H-ZF4A (CDGM; the patent names the high-transmittance grade H-ZF4AGT, same constants)",
      cemented: "C2",
      role: "Negative member of the second cemented pair",
      focalLengthMm: -12.04,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 2.0033,
      vd: 28.32,
      glass: "Unmatched (H-ZLaF92, CDGM; nd 2.0033 / νd 28.32)",
      role: "Positive rear meniscus",
      focalLengthMm: 27.21,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.46,
      glass: "H-ZF7LA (CDGM; the patent names the high-transmittance grade H-ZF7LAGT, same constants)",
      role: "Negative rear meniscus",
      focalLengthMm: -27.09,
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 15.63,
      d: 2.43,
      sd: 6.5,
      medium: 1,
    },
    {
      label: "2",
      R: 22.3,
      d: 1.565,
      sd: 5.3,
      rimExtensionSd: 6.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.565,
    },
    {
      label: "3",
      R: 146.2,
      d: 6,
      sd: 5.2,
      medium: 2,
    },
    {
      label: "4",
      R: -8.2,
      d: 1,
      sd: 5.2,
      medium: 3,
    },
    {
      label: "5",
      R: 28.9,
      d: 0.1,
      sd: 6.5,
    },
    {
      label: "6",
      R: 32.6,
      d: 4.26,
      sd: 6.5,
      medium: 4,
    },
    {
      label: "7",
      R: -10.5,
      d: 2.6,
      sd: 6.5,
      medium: 5,
    },
    {
      label: "8",
      R: 58.77,
      d: 0.94,
      sd: 7.3,
    },
    {
      label: "9",
      R: -60,
      d: 2.73,
      sd: 7.3,
      medium: 6,
    },
    {
      label: "10",
      R: -19.19,
      d: 1.3,
      sd: 7.3,
    },
    {
      label: "11",
      R: -11.6,
      d: 3,
      sd: 7.7,
      rimExtensionSd: 9.8,
      medium: 7,
    },
    {
      label: "12",
      R: -27.63,
      d: 23.50776306,
      sd: 9.8,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description: "Infinity focus only; the patent gives no finite-focus spacings.",
  },
  aperture: {
    nominalFNumber: 5.6,
    fStops: [5.6, 8, 11, 16],
  },
  layout: {
    yScFill: 0.4,
  },
  checks: { gapSagFrac: 0.96 },
  groups: [],
  doublets: [
    {
      text: "C1",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "C2",
      fromSurface: "6",
      toSurface: "8",
    },
  ],
} satisfies LensDataV2Input;

export default LENS_DATA;
