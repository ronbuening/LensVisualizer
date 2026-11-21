import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "philip-taylor-us2582362-iris-reference",
  maker: null,
  name: "PHILIP H. TAYLOR US2582362 \u2014 HISTORICAL f/4.9 IRIS REFERENCE",
  subtitle:
    "Source iris \u00d829.718mm \u00b7 separate calibrated Builder control f/4.823134919 \u00b7 D-only infinity",
  visible: false,
  source: {
    patentNumber: "US 2,582,362",
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Philip H. Taylor"],
    assignees: [],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 31.44494130695838,
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: {
      design: 179.55514,
    },
    specs: [
      "Patent-only photographic triplet; literal inches converted uniformly by 25.4 to mm. No retail or application identity.",
      "Historical source f/4.9 is retained as a label; the saved software iris-calibration control is f/4.823134919231473.",
      "Published iris diameter 29.718 mm at R2 + 17.84604 mm, z = 22.92604 mm. The calibrated control reproduces this hardware after import and reload.",
      "catalog.fNumber.design = 4.9 retains the source label; aperture.nominalFNumber = 4.823134919231473 calibrates the exact published iris. No retail aperture is assigned.",
      "Printed EFL/BFD 179.55514/143.63446 mm; literal sodium-D calculation 179.553284/143.637469 mm. No optical fitting.",
      "Exact published C/D/F indices retained. Quantitative image metrics qualified only at sodium D; no measured g or calibrated continuous dispersion claim.",
      "Source overall clear diameter 36.8808 mm; assigning semidiameter 18.4404 mm to each face is a conservative modeling estimate, not measured per-face rims.",
      "Source 10-degree full field; verified diagnostic half-fields through 5 degrees with explicit rim clipping. No finite state or full-pupil edge claim.",
    ],
    fNumber: {
      design: 4.9,
    },
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.517,
      vd: 64.5,
      indexReference: "D",
      nC: 1.51462,
      nF: 1.52264,
      glass:
        "Unmatched source C/sodium-D/F indices and Abbe value; no exact catalog-glass or measured g identification.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.617,
      vd: 36.6,
      indexReference: "D",
      nC: 1.61216,
      nF: 1.62901,
      glass:
        "Unmatched source C/sodium-D/F indices and Abbe value; no exact catalog-glass or measured g identification.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.5725,
      vd: 57.8,
      indexReference: "D",
      nC: 1.5696,
      nF: 1.5795,
      glass:
        "Unmatched source C/sodium-D/F indices and Abbe value; no exact catalog-glass or measured g identification.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 56.44642,
      d: 5.08,
      sd: 18.4404,
      medium: 1,
    },
    {
      label: "2",
      R: -1177.72434,
      d: 17.84604,
      sd: 18.4404,
    },
    {
      label: "STO",
      R: "flat",
      d: 11.24458,
    },
    {
      label: "3",
      R: -57.65545999999999,
      d: 2.54,
      sd: 18.4404,
      medium: 2,
    },
    {
      label: "4",
      R: 51.88965999999999,
      d: 16.06804,
      sd: 18.4404,
    },
    {
      label: "5",
      R: 180.54828,
      d: 7.619999999999999,
      sd: 18.4404,
      medium: 3,
    },
    {
      label: "6",
      R: -50.546,
      d: 143.6374689300742,
      sd: 18.4404,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Private patent-only infinity reconstruction of Philip H. Taylor US2582362. The historical f/4.9 label and calibrated software control f/4.823134919231473 are distinct: the latter reproduces the published iris diameter 29.718 mm at z 22.92604 mm, including after native import and reload. Numeric catalog design f/4.9 and separate calibrated aperture control are explicitly retained; marketing aperture is not assigned; no false fixed-stop flag or fake optic. Literal inches converted by 25.4; original source dimensions and C/D/F/V values preserved. Sodium-D image metrics only; exact C/F endpoint comparisons are separate, and unmeasured g/intermediate dispersion is not qualified. Source overall clear diameter is published; per-face caps are estimates. Verified +/-5-degree diagnostic scope includes real edge clipping. Gaussian detector BFD 143.637469 mm is calculated, distinct from printed 143.63446 mm. Original facsimile is in independent external custody only; no local PDF or pixel verification. No retail identity, finite state, throughput or factory rim claim.",
  },
  aperture: {
    nominalFNumber: 4.823134919231473,
    fStops: [4.823134919231473, 4.9, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 10,
    maxTraceFieldDeg: 5,
  },
  rays: {
    offAxisFieldFrac: 1,
  },
  groups: [
    {
      text: "G1 \u00b7 L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 \u00b7 L2",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "G3 \u00b7 L3",
      fromSurface: "5",
      toSurface: "6",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
