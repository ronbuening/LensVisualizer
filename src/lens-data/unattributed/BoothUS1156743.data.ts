import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "booth-us1156743-figure2-infinity-reference",
  maker: null,
  name: "BOOTH US1156743 FIG.2 — PATENT REFERENCE",
  subtitle:
    "12 source units at ×25 · nominal f/8 · D-line-only · chosen0–7° infinity diagnostic",
  visible: false,
  source: {
    patentNumber: "US 1,156,743",
    patentYear: 1915,
    example: {
      label: "Figure 2",
      id: "2",
    },
    authors: ["Lionel Barton Booth"],
    assignees: [],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 74.18610978208257,
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: {
      design: 300,
    },
    fNumber: {
      design: 8,
    },
    specs: [
      "4E/3G · FRONT CEMENTED POSITIVE PAIR / REAR AIR-SPACED MEMBER",
      "FIGURE2 ONLY; NO KINIC/RETAIL OR GB FAMILY IDENTITY",
      "12 ARBITRARY SOURCE UNITS AT UNIFORM25 WORKING MM/UNIT",
      "SOURCE NOMINAL300 f/8; LITERAL EFL302.098689 / CALCULATED BFD152.880940",
      "LITERAL nD ONLY; SOURCE F/Hγ RETAINED IN EVIDENCE, NO SYNTHESIZED DISPERSION",
      "ESTIMATED IRIS15/20.175 AND CLEAR RADII; NO BAFFLES",
      "NOMINAL f/8; MODELED FINITE ENTRANCE EQUIVALENT APPROX f/8.15745",
      "CHOSEN0–7° INFINITY DIAGNOSTIC ONLY; NO SOURCE FIELD/FINITE CLAIM",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.5899,
      indexReference: "D",
      glass:
        "Unmatched (literal historical nD only in model; printed F/Hgamma retained separately, no synthesized Cauchy/Abbe/g-line)",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.6259,
      indexReference: "D",
      glass:
        "Unmatched (literal historical nD only in model; printed F/Hgamma retained separately, no synthesized Cauchy/Abbe/g-line)",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.6129,
      indexReference: "D",
      glass:
        "Unmatched (literal historical nD only in model; printed F/Hgamma retained separately, no synthesized Cauchy/Abbe/g-line)",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.6119,
      indexReference: "D",
      glass:
        "Unmatched (literal historical nD only in model; printed F/Hgamma retained separately, no synthesized Cauchy/Abbe/g-line)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 54.55,
      d: 11.35,
      sd: 22.5,
      medium: 1,
    },
    {
      label: "2",
      R: -51.445,
      d: 2.925,
      sd: 22.5,
      medium: 2,
    },
    {
      label: "3",
      R: 652.75,
      d: 15,
      sd: 22.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 20.175,
    },
    {
      label: "4",
      R: 630.25,
      d: 6.2,
      sd: 19,
      medium: 3,
    },
    {
      label: "5",
      R: -42.3675,
      d: 1,
      sd: 19,
    },
    {
      label: "6",
      R: -36.525,
      d: 2.8375,
      sd: 19,
      medium: 4,
    },
    {
      label: "7",
      R: 55.1525,
      d: 152.8809402471815,
      sd: 19,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Patent-only BoothFigure2 D-line infinity reference. All original pages visually verified in independent scout custody; no local PDF/pixels, denied worker USPTO route not retried. Source12arbitraryunits uniformly represented25workingmm/unit, not source-unit identification. Literal optics retained, EFL302.098689/BFD152.880940 not fitted to300nominal. Estimated iris15/20.175 and clear radii;0–7degrees chosen diagnostic only. SourceF/Hgamma indices remain separate evidence, Hgamma is not mercury/Fraunhoferg; no fabricatedC/Abbe/dispersion. No Figure1/KINIC/retail, finite-focus or unverifiedGBfamily claim.",
  },
  aperture: {
    nominalFNumber: 8,
    fStops: [8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 14,
    maxTraceFieldDeg: 7,
  },
  groups: [
    {
      text: "G1 · L1–L2",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "G2 · L3",
      fromSurface: "4",
      toSurface: "5",
    },
    {
      text: "G3 · L4",
      fromSurface: "6",
      toSurface: "7",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
