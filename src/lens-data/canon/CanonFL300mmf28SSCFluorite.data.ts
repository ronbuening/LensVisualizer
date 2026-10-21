import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Literal Example1 ×3 geometric engineering scale, not fitted factory prescription.
 * All five powered elements/four groups retained; no guessed window or rear filter.
 * Stop in D6 at inferred 75% split, drawn toward rear but not numerically specified.
 * Native d-line coordinates remain literal; CaF2 spectral proxy explicitly disclosed.
 * Body/claim coefficient discrepancies do not change R/D/N/V.
 * NO_INTERNAL_RECONSTRUCTION: infinity-only; source printed BF×3 retained.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-fl-300mm-f28-ssc-fluorite",
  maker: "Canon",
  name: "CANON FL 300mm f/2.8 S.S.C. FLUORITE",
  subtitle: "US3868174A Example 1, conditional ×3 powered baseline; omitted unspecified filter and window",
  visible: false,
  layout: {
    yScFill: 0.85,
  },
  catalog: {
    lensMounts: ["canon-fl"],
    imageFormat: "135-full-frame",
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: {
      marketing: 300,
      design: 300,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    specs: [
      "PATENT-ONLY 5 ELEMENTS / 4 GROUPS",
      "EXPLICIT FLUORSPAR FRONT SINGLET",
      "CONDITIONAL ×3 SCALE",
      "UNSPECIFIED FACTORY FILTER OMITTED",
    ],
  },
  source: {
    patentNumber: "US 3,868,174 A",
    patentYear: 1975,
    authors: ["Hideo Yakota"],
    assignees: ["Canon Kobushiki Kaisha"],
    errata: [
      {
        status: "unresolved",
        note: "Claim3 coefficient row2/P .4078 differs from body .4708, and claim total/II +.1038 differs from body −.1038. R/D/N/V prescriptions agree; coefficient conflicts do not alter source optical cells.",
      },
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive (Fluorspar)",
      nd: 1.43387,
      vd: 95.1,
      indexReference: "d",
      glass: "Fluorspar (explicit source material); CaF2 catalog dispersion proxy, native nd and νd retained",
      role: "Front biconvex fluorspar singlet, source claim1; threefold geometric engineering scale only.",
      apd: "patent",
      apdNote:
        "Patent explicitly specifies fluorspar and reduced secondary color; full source dispersion is not tabulated. The compatible CaF2 room-temperature catalog model is an explicit spectral surrogate, not measured factory material.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.7859,
      vd: 44.2,
      indexReference: "d",
      glass: "Unidentified historical melt (source nd 1.7859, νd 44.2; catalog substitutes not adopted)",
      role: "Literal source coordinate; no factory melt or complete dispersion identity recovered.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.1,
      indexReference: "d",
      glass: "Unidentified historical melt (source nd 1.48749, νd 70.1; catalog substitutes not adopted)",
      role: "Literal source coordinate; no factory melt or complete dispersion identity recovered.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      glass: "Unidentified historical melt (source nd 1.51633, νd 64.1; catalog substitutes not adopted)",
      role: "Literal source coordinate; no factory melt or complete dispersion identity recovered.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.72151,
      vd: 29.2,
      indexReference: "d",
      glass: "Unidentified historical melt (source nd 1.72151, νd 29.2; catalog substitutes not adopted)",
      role: "Literal source coordinate; no factory melt or complete dispersion identity recovered.",
      cemented: "D1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 121.758,
      d: 22.4934,
      sd: 55,
      medium: 1,
    },
    {
      label: "2",
      R: -192.786,
      d: 15.1896,
      sd: 55,
    },
    {
      label: "3",
      R: -144.6156,
      d: 5.3787,
      sd: 50,
      medium: 2,
    },
    {
      label: "4",
      R: 808.3907999999999,
      d: 10.404,
      sd: 50,
    },
    {
      label: "5",
      R: 114.29820000000001,
      d: 16.7088,
      sd: 50,
      medium: 3,
    },
    {
      label: "6",
      R: -524.3616000000001,
      d: 92.55127499999999,
      sd: 50,
    },
    {
      label: "STO",
      R: "flat",
      d: 30.850424999999998,
    },
    {
      label: "7",
      R: -47.8584,
      d: 2.0808,
      sd: 18,
      medium: 4,
    },
    {
      label: "8",
      R: -189.3528,
      d: 3.7451999999999996,
      sd: 18,
      medium: 5,
    },
    {
      label: "9",
      R: -104.46629999999999,
      d: 71.19,
      sd: 18,
    },
  ],
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
    blades: 12,
  },
  focus: {
    closeFocusM: 3.5,
    keyframes: [0, 1],
    description:
      "NO_INTERNAL_RECONSTRUCTION: primary infinity-only. Manufacturer 3.5 m MFD is metadata, not a patent movement law. No gaps or finite conjugates authored.",
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
