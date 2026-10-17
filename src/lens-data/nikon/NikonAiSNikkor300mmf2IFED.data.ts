import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AI NIKKOR 300mm f/2 S IF-ED                              ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,732,459 A, Example 4 (Kiyoshi Hayashi / Nippon Kogaku) ║
 * ║  Native-scale 300 mm f/2 positive-negative-positive internal-focus design.║
 * ║  11 elements / 8 air-separated groups; all spherical.                    ║
 * ║  Focus status: PUBLISHED. G2 translates 21.0 mm toward the image;         ║
 * ║  source gaps D8/D13 change 102.701→123.701 and 28.388→7.388 mm.          ║
 * ║                                                                            ║
 * ║  STOP MODEL: The patent does not tabulate an exact stop station or        ║
 * ║  diameter; its prose places the diaphragm near G3. For a renderable model ║
 * ║  the stop is inferred 1.500 mm in front of surface 14 and fixed to G3.    ║
 * ║  Therefore source D13 is split into D13→STO = 26.888 mm at infinity and   ║
 * ║  STO→14 = 1.500 mm. At close focus D13→STO becomes 5.888 mm. The stop     ║
 * ║  radius is derived from the design f-number, f/2. The former paraxial     ║
 * ║  calibration used a 75.000168 mm entrance-pupil radius at                 ║
 * ║  EFL 300.000672 mm, giving modeled f/2.000000.                            ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: Not published. SDs are modeling values derived from the  ║
 * ║  f/2 marginal-ray envelope, the patent's y'=26 mm aberration field,       ║
 * ║  135-format field checks, edge-thickness/rim-slope/cross-gap constraints, ║
 * ║  and the production barrel scale. The wide-open off-axis bundle is        ║
 * ║  intentionally front-group vignetted; no cemented interface is used as a  ║
 * ║  hidden aperture.                                                         ║
 * ║                                                                            ║
 * ║  GLASS: Patent nd/νd coordinates are preserved. Catalog names are used    ║
 * ║  only as explicitly qualified, supplier-neutral spectral proxies; no      ║
 * ║  production supplier is asserted. The patent publishes no per-element     ║
 * ║  nC/nF/ng/dPgF, so none are invented here.                                ║
 * ║                                                                            ║
 * ║  SOURCE CONTRADICTION: Patent close-focus β=-0.089 is preserved in audit; ║
 * ║  direct trace of the published 21 mm focus state gives β=-0.086422.       ║
 * ║  No prescription value is silently corrected.                             ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-ais-nikkor-300mm-f2-if-ed",
  maker: "Nikon",
  name: "NIKON AI NIKKOR 300mm f/2 S IF-ED",
  subtitle: "US 4,732,459 A — Example 4 / fourth embodiment",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["11 ELEMENTS / 8 GROUPS", "f = 300.0007 mm", "F/2.0", "21.0 mm INTERNAL FOCUS TRAVEL"],
    elementCount: 11,
    groupCount: 8,
    focalLengthMm: { marketing: 300, design: 300.0006716325268 },
    fNumber: { marketing: 2, design: 2 },
  },

  source: {
    patentNumber: "US 4,732,459 A",
    patentYear: 1988,
    authors: ["Kiyoshi Hayashi"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.3,
      focalLengthMm: 560.8003826612645,
      glass: "J-FKH1 catalog-equivalent coefficient proxy (patent 498823; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED classification is inferred from the production IF-ED identity and the example's three repeated 1.49782/82.3 low-dispersion positions; J-FKH1 remains only a coordinate-compatible proxy.",
      role: "Front positive collector in G1.",
      diagramLabel: "L1 / ED",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.3,
      focalLengthMm: 342.46095917151587,
      glass: "J-FKH1 catalog-equivalent coefficient proxy (patent 498823; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED classification is inferred from the production IF-ED identity and the example's three repeated 1.49782/82.3 low-dispersion positions; J-FKH1 remains only a coordinate-compatible proxy.",
      role: "Second positive collector in G1.",
      diagramLabel: "L2 / ED",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7495,
      vd: 35.2,
      focalLengthMm: -332.2751095575821,
      glass: "J-LAF7 catalog-equivalent coefficient proxy (patent 750352; production supplier unspecified)",
      apd: false,
      role: "Negative correction element within G1.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.3,
      focalLengthMm: 513.5004025935488,
      glass: "J-FKH1 catalog-equivalent coefficient proxy (patent 498823; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED classification is inferred from the production IF-ED identity and the example's three repeated 1.49782/82.3 low-dispersion positions; J-FKH1 remains only a coordinate-compatible proxy.",
      role: "Rear positive meniscus of G1.",
      diagramLabel: "L4 / ED",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.79504,
      vd: 28.6,
      focalLengthMm: 190.97682456386121,
      glass: "J-LAFH3 catalog-equivalent coefficient proxy (patent 795286; production supplier unspecified)",
      apd: false,
      role: "Positive component of the object-side cemented pair in focusing group G2.",
      diagramLabel: "L5",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.51454,
      vd: 54.6,
      focalLengthMm: -145.9938994587604,
      glass: "KF3 catalog-equivalent coefficient proxy (patent 515546; production supplier unspecified)",
      apd: false,
      role: "Negative component of the G2 cemented achromat.",
      diagramLabel: "L6",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.4645,
      vd: 65.8,
      focalLengthMm: -126.39973072204623,
      glass: "FK3 catalog-equivalent coefficient proxy (patent 465658; production supplier unspecified)",
      apd: false,
      role: "Image-side negative component of the translating G2 focus group.",
      diagramLabel: "L7",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.1,
      focalLengthMm: -150.19722418009317,
      glass: "S-TIM28 catalog-equivalent coefficient proxy (patent 689311; production supplier unspecified)",
      apd: false,
      role: "Negative first element of the front cemented pair in G3.",
      diagramLabel: "L8",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 53.8,
      focalLengthMm: 118.72476385742468,
      glass: "H-LaK6A catalog-equivalent coefficient proxy (patent 694538; production supplier unspecified)",
      apd: false,
      role: "Positive partner in the first G3 cemented pair.",
      diagramLabel: "L9",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.1,
      focalLengthMm: -500.9514400257162,
      glass: "S-TIM35 catalog-equivalent coefficient proxy (patent 699301; production supplier unspecified)",
      apd: false,
      role: "Negative meniscus of the rear G3 cemented pair.",
      diagramLabel: "L10",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.6,
      focalLengthMm: 113.62156857935292,
      glass: "K-LaK14 catalog-equivalent coefficient proxy (patent 697556; production supplier unspecified)",
      apd: false,
      role: "Final positive element of G3.",
      diagramLabel: "L11",
      cemented: "D3",
    },
  ],

  surfaces: [
    { label: "1", R: 443.373, d: 14.5, sd: 82.0, medium: 1 },
    { label: "2", R: -745.663, d: 0.5, sd: 81.5 },
    { label: "3", R: 235.41, d: 21.0, sd: 81.5, medium: 2 },
    { label: "4", R: -599.816, d: 6.85, sd: 80.5 },
    { label: "5", R: -527.848, d: 6.0, sd: 80.0, medium: 3 },
    { label: "6", R: 473.787, d: 1.7, sd: 79.0 },
    { label: "7", R: 176.9, d: 15.0, sd: 78.5, medium: 4 },
    { label: "8", R: 558.189, sd: 78.0 },
    { label: "9", R: 749.672, d: 8.0, sd: 46.0, medium: 5 },
    { label: "10", R: -189.496, d: 3.65, sd: 46.0, medium: 6 },
    { label: "11", R: 125.271, d: 12.0, sd: 45.0 },
    { label: "12", R: -148.765, d: 4.8, sd: 37.5, medium: 7 },
    { label: "13", R: 97.985, sd: 35.0 },
    // Stop station is a documented Stage-2 inference: fixed 1.500 mm ahead of G3 surface 14.
    { label: "STO", R: "flat", d: 1.5 },
    { label: "14", R: -1754.216, d: 1.5, sd: 31.5, medium: 8 },
    { label: "15", R: 110.0, d: 7.75, sd: 33.5, medium: 9 },
    { label: "16", R: -317.94, d: 2.0, sd: 33.5 },
    { label: "17", R: 169.454, d: 2.4, sd: 33.0, medium: 10 },
    { label: "18", R: 113.525, d: 8.0, sd: 33.5, medium: 11 },
    { label: "19", R: -254.06, d: 112.223, sd: 33.5 },
  ],

  // Required UI field. This is the computed Example-4 close-state object-to-image-plane distance,
  // not a substituted manufacturer MFD (the patent itself publishes the 21 mm G2 travel, not MFD).
  focus: {
    closeFocusM: 4.097300490934653,
    description:
      "PUBLISHED internal focus: the complete negative G2 group translates 21.0 mm toward the image. Source D8 grows 102.701→123.701 mm while source D13 shrinks 28.388→7.388 mm; the inferred stop is fixed 1.500 mm ahead of G3, so authored D13→STO is 26.888→5.888 mm. Patent β=-0.089; direct paraxial trace gives β=-0.086422.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { "8": { label: "G1→G2", values: [[102.701, 123.701]] }, "13": { label: "G2→STO", values: [[26.888, 5.888]] } },

  aperture: { nominalFNumber: 2.0, fStops: [2, 2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "G1 (+) / FIXED", fromSurface: "1", toSurface: "8" },
    { text: "G2 (−) / FOCUS → IMG", fromSurface: "9", toSurface: "13" },
    { text: "G3 (+) / FIXED", fromSurface: "14", toSurface: "19" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
    { text: "D3", fromSurface: "17", toSurface: "19" },
  ],

  layout: { scFill: 0.58, yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
