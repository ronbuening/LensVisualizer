import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "creighton-us2432387-example3-infinity-reference",
  maker: null,
  name: "CREIGHTON US2432387 EXAMPLE III / FIGURE 4 — f/1.9",
  subtitle:
    "Eastman Kodak patent-only · sodium-D infinity · estimated stop/rims",
  visible: false,
  source: {
    patentNumber: "US 2,432,387",
    patentYear: 1947,
    example: {
      label: "Example III",
      id: "3",
    },
    authors: ["Creighton"],
    assignees: ["Eastman Kodak"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 1.9,
    },
    elementCount: 4,
    groupCount: 4,
    specs: [
      "Literal ExampleIII/Figure4,4E/4G, four air-separated singlets; no cement or retail identity.",
      "Explicit sodium D589.2938nm indices/Abbe pairs, no exact catalog-glass or calibrated broadband claim.",
      "Source100mm f/1.9 BF63.9mm retained separately from literal EFL100.029572487/BFD64.003778675mm and Gaussian infinity detector; no fit.",
      "Stop split10.0/3.2mm afterR6,z46.6mm and all clear caps are estimates; no published physical iris size.",
      "Stock source/controlf1.9 infers iris radius17.666752560mm. Relayed16.42052mm seed is kept as a separate sensitivity, not forced; exact nominal marginal maps18.004105755mm.",
      "Chosen actual native field request+/-10deg only; source-family12–15deg statements/wider benches do not establish verified coverage.",
      "No image format/circle or baffles invented. Scoped reference-line geometric MTF only via supported native field fractions where needed; wider automatic drawer and Abbe-derived broadband outputs unqualified.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Singlet",
      nd: 1.588,
      vd: 53.4,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair, unmatched catalog glass; no measured spectral curve.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Singlet",
      nd: 1.611,
      vd: 57.2,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair, unmatched catalog glass; no measured spectral curve.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Singlet",
      nd: 1.72,
      vd: 29.3,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair, unmatched catalog glass; no measured spectral curve.",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Singlet",
      nd: 1.697,
      vd: 56.1,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair, unmatched catalog glass; no measured spectral curve.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 61.0,
      d: 12.3,
      sd: 31,
      medium: 1,
    },
    {
      label: "2",
      R: 576.0,
      d: 0.7,
      sd: 31,
    },
    {
      label: "3",
      R: 48.2,
      d: 10.6,
      sd: 29,
      medium: 2,
    },
    {
      label: "4",
      R: 63.5,
      d: 9.3,
      sd: 26,
    },
    {
      label: "5",
      R: -193.0,
      d: 3.7,
      sd: 23,
      medium: 3,
    },
    {
      label: "6",
      R: 35.7,
      d: 10,
      sd: 23,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.2,
    },
    {
      label: "7",
      R: 84.5,
      d: 23.2,
      sd: 27,
      medium: 4,
    },
    {
      label: "8",
      R: -63.0,
      d: 64.0037786754209,
      sd: 27,
    },
  ],
  aperture: {
    nominalFNumber: 1.9,
    fStops: [1.9, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 20,
    maxTraceFieldDeg: 10,
  },
  rays: {
    offAxisFieldFrac: 1,
  },
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Private Creighton/EastmanKodak US2432387 ExampleIII/Figure4 patent-only4E/4G, no cement. Literal sodium-D589.2938nm infinity reference. Source100/f1.9/BF63.9 retained separately from literal EFL100.029572487/BFD64.003778675mm detector, no rounding or fit. Stop split10/3.2 afterR6,z46.6mm, bore and caps estimated. Stock f1.9 gives inferred iris radius17.666752560mm; relayed16.42052mm seed and exact nominal marginal18.004105755mm are separate hypotheses/metrics, no source aperture claim. Chosen+/-10degree diagnostic only, no source-format or family12–15degree coverage extrapolation. Native API-scoped geometric reference-line MTF only; wider automatic drawer and Abbe-derived broadband outputs unqualified. No retail, finite, baffle, override or app/schema change. Original source visually verified externally, no local originalPDF/pixel/rehash or denied-route retry.",
  },
  groups: [
    {
      text: "G1 · L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 · L2",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "G3 · L3",
      fromSurface: "5",
      toSurface: "6",
    },
    {
      text: "G4 · L4",
      fromSurface: "7",
      toSurface: "8",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
