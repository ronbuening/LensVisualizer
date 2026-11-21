import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "tronnier-us2673491-figure2-infinity-reference",
  maker: null,
  name: "TRONNIER US2673491 FIGURE 2 — 150mm f/2",
  subtitle:
    "Voigtländer patent-only · explicit helium-d infinity · estimated clear apertures",
  visible: false,
  source: {
    patentNumber: "US 2,673,491",
    patentYear: 1954,
    example: {
      label: "Figure 2",
      id: "2",
    },
    authors: ["Tronnier"],
    assignees: ["Voigtländer"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 150,
    },
    fNumber: {
      design: 2,
    },
    elementCount: 6,
    groupCount: 4,
    specs: [
      "Literal Fig.2 patent-only 6E/4G; two cemented inner doublets at R4/R7, no altered SIGGRAPH prescription or commercial Ultron/Septon identity.",
      "Explicit helium-d source indices, reference587.5618nm; not sodium D or calibrated broadband glass.",
      "Published stop split16.3965/14.2215mm, z49.929mm, preserved. Physical diameter and all face caps estimated.",
      "Stock source/control f/2 gives inferred iris radius25.894351772mm; exact nominal marginal maps25.566177950mm; preliminary26.50057mm estimate retained separately.",
      "Printed150mm/BF107.154mm; literal149.998784560/107.155573064mm, no fitting.",
      "Printed60-degree full illumination is separate from the chosen/natively realizable diagnostic field, with real vignetting and potential TIR at extreme fields.",
      "No invented physical format, finite-focus state, baffle, optical retuning or app change.",
      "Without an authored format, automatic native MTF extends beyond the verified +/-10-degree scope. Only scoped native field-fraction results in companion evidence are qualified; wider automatic drawer results are exploratory.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.67125,
      vd: 47.1,
      indexReference: "d",
      glass:
        "Unmatched explicit helium-d source index and Abbe value; no exact catalog-glass or calibrated broadband claim.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.67125,
      vd: 47.1,
      indexReference: "d",
      glass:
        "Unmatched explicit helium-d source index and Abbe value; no exact catalog-glass or calibrated broadband claim.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.69842,
      vd: 30.1,
      indexReference: "d",
      glass:
        "Unmatched explicit helium-d source index and Abbe value; no exact catalog-glass or calibrated broadband claim.",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.60266,
      vd: 38.4,
      indexReference: "d",
      glass:
        "Unmatched explicit helium-d source index and Abbe value; no exact catalog-glass or calibrated broadband claim.",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Source Spherical Element",
      nd: 1.65953,
      vd: 57,
      indexReference: "d",
      glass:
        "Unmatched explicit helium-d source index and Abbe value; no exact catalog-glass or calibrated broadband claim.",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Source Spherical Element",
      nd: 1.7174,
      vd: 48.1,
      indexReference: "d",
      glass:
        "Unmatched explicit helium-d source index and Abbe value; no exact catalog-glass or calibrated broadband claim.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 88.425,
      d: 11.274,
      sd: 43,
      medium: 1,
    },
    {
      label: "2",
      R: 254.4855,
      d: 0.354,
      sd: 43,
    },
    {
      label: "3",
      R: 57.831,
      d: 12.0795,
      sd: 37,
      medium: 2,
    },
    {
      label: "4",
      R: 122.3055,
      d: 9.825,
      sd: 35,
      medium: 3,
    },
    {
      label: "5",
      R: 38.253,
      d: 16.3965,
      sd: 30,
    },
    {
      label: "STO",
      R: "flat",
      d: 14.2215,
    },
    {
      label: "6",
      R: -43.488,
      d: 3.543,
      sd: 28,
      medium: 4,
    },
    {
      label: "7",
      R: 122.3055,
      d: 18.201,
      sd: 33,
      medium: 5,
    },
    {
      label: "8",
      R: -61.1565,
      d: 0.564,
      sd: 34,
    },
    {
      label: "9",
      R: 1311.273,
      d: 9.6645,
      sd: 35,
      medium: 6,
    },
    {
      label: "10",
      R: -119.1885,
      d: 107.15557306360085,
      sd: 35,
    },
  ],
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 60,
    maxTraceFieldDeg: 10,
  },
  rays: {
    offAxisFieldFrac: 1,
  },
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Private literal Tronnier/Voigtländer US2673491 Figure2 helium-d infinity patent reference; no commercial Ultron/Septon, altered SIGGRAPH, finite or calibrated broadband identity. Exact source 150mm nominalf/2, two cemented inner doublets and all spacings/materials preserved. Stop station49.929mm and16.3965/14.2215mm split published; diameter and caps inferred. Stock f/2 control iris radius25.894351772mm, exact nominal marginal estimate25.566177950mm; upstream preliminary26.50057mm iris not forced into prescription. Source full60degree illumination is not verified full-pupil coverage or production quality. Native actual field must be measured and conservatively scoped; no source format assigned. Gaussian detectorBF107.155573mm separately from printed107.154mm. External source visual/hash custody only; no originalPDF locally fetched/rehash/pixels or known denied source request. No source fitting, override, baffle or engine/schema change. Automatic native MTF modeled-edge range is wider than the +/-10-degree qualified diagram/optical scope because no format is assigned. Use the companion native field-fraction recipe for scoped MTF; wider drawer results are exploratory, not validated coverage or production performance.",
  },
  groups: [
    {
      text: "G1 · L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 · L2 + L3",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "G3 · L4 + L5",
      fromSurface: "6",
      toSurface: "8",
    },
    {
      text: "G4 · L6",
      fromSurface: "9",
      toSurface: "10",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
