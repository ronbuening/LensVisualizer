import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** DD 77 830 sole table, printed at f = 100 and scaled 0.5× here; R, d, nd and νd are otherwise as printed.
 * The final gap is the printed back focus, s′ = 72.700 → 36.35 mm; the paraxial back focus is 36.38 mm.
 * The table is a rescaled design: 19 of its 21 R and d values are round millimetre figures × 1.9119 (f ≈ 52.30 mm).
 * Clear apertures and the iris opening are inferred. The patent prints no iris position; it sits at 55 % of the
 * central air space here, and the patent figure draws it at about 57 %.
 * Spherical surfaces only; nothing is re-optimized, and no focus motion is modeled.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-mc-pancolar-50mm-f18",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA MC PANCOLAR 50mm f/1.8",
  subtitle: "DD 77 830 — Sole example; six-element, five-group form of the 1978 catalogue",
  catalog: {
    lensMounts: ["m42"], // M42: 1978 catalogue "für PRAKTICA-Typen" and Kamerastore MC listings; MC in Exakta unconfirmed
    imageFormat: "135-full-frame",
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: {
      marketing: 50,
      design: 50.0,
    },
    fNumber: {
      marketing: 1.8,
      design: 1.8,
    },
    specs: ["6 ELEMENTS / 5 GROUPS", "DESIGN f = 100 mm (SCALED 0.5× TO 50 mm)", "DESIGN F/1.8", "ALL SPHERICAL"],
  },
  source: {
    patentNumber: "DD 77 830",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1970,
    authors: ["Wolf Dannberg", "Gerhard Risch"],
    assignees: [],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7234,
      vd: 38.0,
      indexReference: "d",
      glass: "BASF8 (SUMITA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 70.39438717915573,
      role: "Positive front meniscus collecting the full-aperture beam",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6779,
      vd: 55.5,
      indexReference: "d",
      glass: "LAC12 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 31.361969431236684,
      role: "Positive half of the cemented front inner group",
      cemented: "D2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.5995,
      vd: 35.2,
      indexReference: "d",
      glass: "Unmatched (patent nd=1.5995, νd=35.2; no catalog row at these coordinates)",
      focalLengthMm: -23.64434088503424,
      role: "Negative half of the cemented front inner group; its rear face bounds the central air space",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.2,
      indexReference: "d",
      glass: "SF5 (Schott catalog equivalent; production supplier unspecified)",
      focalLengthMm: -27.026340136532276,
      role: "Negative inner element behind the iris; its rear face is almost flat",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 55.5,
      indexReference: "d",
      glass: "LAC12 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 43.15961674465532,
      role: "Positive meniscus separated from L4 by the air space that makes the fifth group",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6779,
      vd: 55.5,
      indexReference: "d",
      glass: "LAC12 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 49.6308166102886,
      role: "Biconvex last element completing the rear positive power",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 35.848,
      d: 3.824,
      sd: 15.3,
      medium: 1,
    },
    {
      label: "2",
      R: 115.67,
      d: 0.0955,
      sd: 15.3,
    },
    {
      label: "3",
      R: 24.281,
      d: 6.3095,
      sd: 14.0,
      medium: 2,
    },
    {
      label: "4",
      R: -152.952,
      d: 1.434,
      sd: 13.0,
      medium: 3,
    },
    {
      label: "5",
      R: 15.6775,
      d: 4.731925,
      sd: 10.7,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.871575,
    },
    {
      label: "6",
      R: -18.1475,
      d: 1.5295,
      sd: 10.6,
      medium: 4,
    },
    {
      label: "7",
      R: -10299.7,
      d: 1.912,
      sd: 11.8,
    },
    {
      label: "8",
      R: -125.4685,
      d: 6.0225,
      sd: 11.8,
      medium: 5,
    },
    {
      label: "9",
      R: -24.1855,
      d: 0.0955,
      sd: 11.8,
    },
    {
      label: "10",
      R: 87.9475,
      d: 3.824,
      sd: 13.2,
      medium: 6,
    },
    {
      label: "11",
      R: -53.533,
      d: 36.35,
      sd: 13.2,
    },
  ],
  focus: {
    closeFocusM: 0.35,
    description:
      "The model does not move. The patent gives no focus travel; the 1978 catalogue gives a close focus of 0.35 m.",
  },
  aperture: {
    nominalFNumber: 1.8,
    fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "9" },
    { text: "G5", fromSurface: "10", toSurface: "11" },
  ],
  doublets: [{ text: "D2", fromSurface: "3", toSurface: "5" }],
  layout: {
    yScFill: 0.43,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
