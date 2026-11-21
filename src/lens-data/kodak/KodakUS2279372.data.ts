import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "herzberger-kodak-us2279372-example6-infinity-reference",
  maker: null,
  name: "HERZBERGER US2279372 EX.VI — PATENT REFERENCE",
  subtitle:
    "100mm nominal f/3.5 · literal nD · chosen 0–13° infinity diagnostic",
  visible: false,
  source: {
    patentNumber: "US 2,279,372",
    example: {
      label: "Example VI",
      id: "6",
    },
    authors: ["Max Herzberger"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 46.521325385128854,
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 3.5,
    },
    specs: [
      "3E/3G · LITERAL EXAMPLE VI · D-LINE INFINITY ONLY",
      "SOURCE NOMINAL 100 / BFD78.5; LITERAL EFL100.753 / BFD79.4143",
      "NO ROUNDING-CORNER FIT OR SOURCE DIMENSION REPLACEMENT",
      "ESTIMATED MIDPOINT IRIS / SIZE / CLEAR RADII",
      "NOMINAL f/3.5; FINITE ENTRANCE EQUIVALENT APPROX f/3.54823",
      "26° SOURCE COVERING POWER IS AMBIGUOUS; CHOSEN 0–13° ONLY",
      "NO RETAIL, FINITE, BROADBAND OR FULL-PUPIL COVERAGE CLAIM",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.616,
      vd: 55.1,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no verified catalog or calibrated dispersion)",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.649,
      vd: 33.8,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no verified catalog or calibrated dispersion)",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.616,
      vd: 55.1,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no verified catalog or calibrated dispersion)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 32.1,
      d: 6.7,
      sd: 18,
      medium: 1,
    },
    {
      label: "2",
      R: 241,
      d: 9.4,
      sd: 18,
    },
    {
      label: "3",
      R: -71.4,
      d: 2.2,
      sd: 19,
      medium: 2,
    },
    {
      label: "4",
      R: 31.6,
      d: 3.75,
      sd: 14,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.75,
    },
    {
      label: "5",
      R: 82.8,
      d: 7.1,
      sd: 18,
      medium: 3,
    },
    {
      label: "6",
      R: -51,
      d: 79.41431821933085,
      sd: 18,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Patent-only Example VI D-line infinity reference. Source original p3 verified by independent scout; no local PDF or source pixels. Literal numbers preserved, EFL100.752999/BFD79.414318 differ from source100/78.5; no rounding-corner fitting. Estimated midpoint rear-gap iris3.75/3.75, physical size and rims; ordinary native nominal aperture convention. Chosen0–13° diagnostic only; source26° covering power is ambiguous, no half-field/format inference. No finite, retail or calibrated broadband claim.",
  },
  aperture: {
    nominalFNumber: 3.5,
    fStops: [3.5, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 26,
    maxTraceFieldDeg: 13,
  },
  groups: [
    {
      text: "Front singlet",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Middle singlet",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Rear singlet",
      fromSurface: "5",
      toSurface: "6",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
