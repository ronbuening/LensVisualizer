import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "brendel-us2672788-example2-infinity-reference",
  maker: null,
  name: "THEODOR BRENDEL US2672788 EXAMPLE II — f/2.5",
  subtitle:
    "Agfa asymmetric Gauss patent-only · helium-d infinity · estimated iris/rims",
  visible: false,
  source: {
    patentNumber: "US 2,672,788",
    example: {
      label: "Example II",
      id: "2",
    },
    authors: ["Theodor Brendel"],
    assignees: ["Agfa"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2.5,
    },
    elementCount: 5,
    groupCount: 4,
    specs: [
      "Literal Example II patent-only5E/4G asymmetric Gauss; no retail or finite-focus identity.",
      "R4 is a genuine plano cement between L2/L3; R8 is a separate plano air/glass front face of L5. Neither is the iris.",
      "All signed radii, axial spacings and explicit helium-d/Abbe pairs preserved. Reference587.5618nm, not sodiumD or calibrated broadband.",
      "Central13.870mm airgap and stop-in-gap drawing evidence are published; 7.68/6.19mm split,z26.253mm and all physical caps/iris are estimates.",
      "Stock source/control f/2.5 selected: inferred iris radius13.937449104mm; exact nominal marginal maps13.800673152mm; upstream13.99114mm estimate kept separate.",
      "Rounded working reference100mm from literal EFL100.000530154/BFD70.930726228mm; computed Gaussian infinity detector without fitting. No separately verified printed focal header claim.",
      "Chosen +/-10-degree diagnostic verified in actual desktop/mobile panel; upstream25/27.5deg benches are not55deg native coverage. No image format/circle assigned.",
      "Quantitative MTF is scoped helium-d only using native field fractions. Wider automatic drawer fields and generic chromatic displays are not qualified; no format invented to suppress them.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.62425,
      vd: 56.8,
      indexReference: "d",
      glass:
        "Unmatched literal helium-d index/Abbe pair; no exact catalog-glass or calibrated spectral curves.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.62425,
      vd: 56.8,
      indexReference: "d",
      glass:
        "Unmatched literal helium-d index/Abbe pair; no exact catalog-glass or calibrated spectral curves.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.62356,
      vd: 36.8,
      indexReference: "d",
      glass:
        "Unmatched literal helium-d index/Abbe pair; no exact catalog-glass or calibrated spectral curves.",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.62356,
      vd: 36.8,
      indexReference: "d",
      glass:
        "Unmatched literal helium-d index/Abbe pair; no exact catalog-glass or calibrated spectral curves.",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Source Spherical Element",
      nd: 1.62309,
      vd: 58.1,
      indexReference: "d",
      glass:
        "Unmatched literal helium-d index/Abbe pair; no exact catalog-glass or calibrated spectral curves.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 41.132,
      d: 4.972,
      sd: 22,
      medium: 1,
    },
    {
      label: "2",
      R: 101.677,
      d: 0.304,
      sd: 22,
    },
    {
      label: "3",
      R: 34.851,
      d: 11.392,
      sd: 20,
      medium: 2,
    },
    {
      label: "4",
      R: "flat",
      d: 1.905,
      sd: 19,
      medium: 3,
    },
    {
      label: "5",
      R: 21.425,
      d: 7.68,
      sd: 15,
    },
    {
      label: "STO",
      R: "flat",
      d: 6.19,
    },
    {
      label: "6",
      R: -25.708,
      d: 5.963,
      sd: 15,
      medium: 4,
    },
    {
      label: "7",
      R: -40.801,
      d: 0.304,
      sd: 19,
    },
    {
      label: "8",
      R: "flat",
      d: 7.945,
      sd: 20,
      medium: 5,
    },
    {
      label: "9",
      R: -42.546,
      d: 70.93072622762332,
      sd: 20,
    },
  ],
  aperture: {
    nominalFNumber: 2.5,
    fStops: [2.5, 2.8, 4, 5.6, 8, 11, 16, 22],
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
    closeFocusM: 1000000000000000,
    description:
      "Private literal Theodor Brendel/Agfa US2672788 Example II helium-d infinity patent reference; no retail, finite or calibrated broadband identity.5E/4G asymmetricGauss, R4plano cement and distinct R8plano air/glass preserved; stop-in-central13.870mm gap source drawing evidence only. Split7.68/6.19mm,z26.253mm is drawing-derived estimate, physical iris and caps unprinted. Stock source/controlf/2.5 derives iris radius13.937449104mm, exact nominal marginal13.800673152mm; preliminary13.99114mm estimate is separate. Literal EFL100.000530154/BFD70.930726228mm Gaussian infinity reference without source fitting, overrides, baffles or app/schema changes. Chosen +/-10degree diagnostic verified by native actual-angle proof; upstream wider benches are not native55degree coverage. No source format/imagecircle invented. Native scoped MTF recipe uses supported fieldFractions; automatic wider drawer outputs and Abbe-derived chromatic displays remain unqualified. Source original signed table/PDFpage4 visually verified in external custody only; no local originalPDF/hash/pixels or known denied request.",
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
      text: "G3 · L4",
      fromSurface: "6",
      toSurface: "7",
    },
    {
      text: "G4 · L5",
      fromSurface: "8",
      toSurface: "9",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
