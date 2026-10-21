import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * DE3026282A1/C2, sole example. All literal radii, e-line glass coordinates,
 * thicknesses and gaps retained at conditional nominal 90/100 scale 0.9.
 * Probable 1982 Geronar-WA correlation, not an unchanged factory prescription.
 * Both tables repeat d3 for the fourth thickness; both drawings identify d4.
 * Source central 6.11+7.29 split is assigned front-to-back using both diagrams.
 * Numerical iris opening and clear apertures are inferred, not factory dimensions.
 * Source at least 85-degree field is explicitly tested; manufacturer 80/85-degree
 * and 155/170-mm circle specifications belong to f/11 and f/22 respectively.
 * NO_INTERNAL_RECONSTRUCTION. The required closeFocusM=10 UI placeholder is
 * nonphysical, NOT a sourced MFD; no finite focus states or motion are claimed.
 */
const LENS_DATA = {
  schema: 2,
  key: "rodenstock-geronar-wa-90mm-f8",
  maker: "Rodenstock",
  name: "RODENSTOCK GERONAR-WA 90mm f/8",
  subtitle: "DE3026282A1/C2 sole example; qualified probable 1982 production correlation",
  visible: false,
  catalog: {
    lensMounts: ["large-format-lens-board"],
    imageFormat: "4x5",
    elementCount: 4,
    groupCount: 4,
    specs: [
      "Qualified probable 1982 Geronar-WA correlation; not an authenticated factory prescription",
      "Four air-spaced menisci, positive-negative-negative-positive",
      "Maker 80° / 155 mm circle at f/11; 85° / 170 mm at f/22, not wide-open illumination claims",
      "Infinity-only; no recovered focus law or product MFD",
    ],
    focalLengthMm: {
      marketing: 90,
      design: 90,
    },
    fNumber: {
      marketing: 8,
      design: 8,
    },
  },
  source: {
    patentNumber: "DE 3026282 C2",
    patentYear: 1982,
    authors: ["Josef Weiß"],
    assignees: ["Optische Werke G. Rodenstock"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6207,
      vd: 49.47,
      indexReference: "e",
      glass: "Unidentified historical melt; catalog equivalents not adopted",
      role: "Positive front meniscus, convex toward the object; outer lower-dispersion collector.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7918,
      vd: 25.87,
      indexReference: "e",
      glass: "Unidentified historical melt; catalog equivalents not adopted",
      role: "Negative front inner meniscus, concave toward the central iris; high-index high-dispersion material.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7918,
      vd: 25.87,
      indexReference: "e",
      glass: "Unidentified historical melt; catalog equivalents not adopted",
      role: "Negative rear inner meniscus, concave toward the central iris; the same printed glass coordinates as L2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.6251,
      vd: 52.86,
      indexReference: "e",
      glass: "Unidentified historical melt; catalog equivalents not adopted",
      role: "Positive rear meniscus, convex toward the image; fourth thickness is printed with repeated d3 label, physically d4 in both drawings.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 26.631,
      d: 8.802,
      sd: 17.5,
      medium: 1,
    },
    {
      label: "2",
      R: 68.607,
      d: 0.099,
      sd: 17.5,
    },
    {
      label: "3",
      R: 27.414,
      d: 3.6,
      sd: 12.5,
      medium: 2,
    },
    {
      label: "4",
      R: 17.865000000000002,
      d: 5.4990000000000006,
      sd: 8.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 6.561,
    },
    {
      label: "5",
      R: -17.361,
      d: 2.331,
      sd: 9.6,
      medium: 3,
    },
    {
      label: "6",
      R: -24.786,
      d: 0.099,
      sd: 13,
    },
    {
      label: "7",
      R: -86.058,
      d: 9.189000000000002,
      sd: 18,
      medium: 4,
    },
    {
      label: "8",
      R: -25.506,
      d: 72.73122109844566,
      sd: 18,
    },
  ],
  focus: {
    // Required UI compatibility placeholder only; not a physical MFD.
    closeFocusM: 10,
    description:
      "NO_INTERNAL_RECONSTRUCTION. closeFocusM=10 m is a nonphysical required UI placeholder, NOT a sourced MFD or certified focus distance. No finite optical state or movement law is authored; keep hidden until integration can avoid presenting this placeholder as a product specification.",
  },
  aperture: {
    nominalFNumber: 8,
    fStops: [8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  layout: {
    yScFill: 0.7,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
