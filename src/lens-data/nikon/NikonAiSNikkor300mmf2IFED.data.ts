import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON NIKKOR 300mm f/2S IF-ED                              ║
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
 * ║  Therefore source D13 is split into D13→STO = 26.888 mm at infinity and  ║
 * ║  STO→14 = 1.500 mm. At close focus D13→STO becomes 5.888 mm.             ║
 * ║  Stop SD 29.166667 mm is solved so the paraxial entrance pupil is         ║
 * ║  75.000168 mm at EFL 300.000672 mm, giving modeled f/2.000000.            ║
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
  key: "nikon-ais-nikkor-300mm-f2-if-ed",
  maker: "Nikon",
  name: "NIKON NIKKOR 300mm f/2S IF-ED",
  subtitle: "US 4,732,459 A — Example 4 / fourth embodiment",
  specs: ["11 ELEMENTS / 8 GROUPS", "f = 300.0007 mm", "F/2.0", "21.0 mm INTERNAL FOCUS TRAVEL"],

  focalLengthMarketing: 300,
  focalLengthDesign: 300.0006716325268,
  apertureMarketing: 2,
  apertureDesign: 2,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,732,459 A",
  patentAuthors: ["Kiyoshi Hayashi"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1988,
  elementCount: 11,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1 / ED",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.3,
      fl: 560.8003826612645,
      glass: "J-FKH1 catalog-equivalent coefficient proxy (patent 498823; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED classification is inferred from the production IF-ED identity and the example's three repeated 1.49782/82.3 low-dispersion positions; J-FKH1 remains only a coordinate-compatible proxy.",
      role: "Front positive collector in G1.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2 / ED",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.3,
      fl: 342.46095917151587,
      glass: "J-FKH1 catalog-equivalent coefficient proxy (patent 498823; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED classification is inferred from the production IF-ED identity and the example's three repeated 1.49782/82.3 low-dispersion positions; J-FKH1 remains only a coordinate-compatible proxy.",
      role: "Second positive collector in G1.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7495,
      vd: 35.2,
      fl: -332.2751095575821,
      glass: "J-LAF7 catalog-equivalent coefficient proxy (patent 750352; production supplier unspecified)",
      apd: false,
      role: "Negative correction element within G1.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4 / ED",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.3,
      fl: 513.5004025935488,
      glass: "J-FKH1 catalog-equivalent coefficient proxy (patent 498823; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED classification is inferred from the production IF-ED identity and the example's three repeated 1.49782/82.3 low-dispersion positions; J-FKH1 remains only a coordinate-compatible proxy.",
      role: "Rear positive meniscus of G1.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.79504,
      vd: 28.6,
      fl: 190.97682456386121,
      glass: "J-LAFH3 catalog-equivalent coefficient proxy (patent 795286; production supplier unspecified)",
      apd: false,
      role: "Positive component of the object-side cemented pair in focusing group G2.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.51454,
      vd: 54.6,
      fl: -145.9938994587604,
      glass: "KF3 catalog-equivalent coefficient proxy (patent 515546; production supplier unspecified)",
      apd: false,
      role: "Negative component of the G2 cemented achromat.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.4645,
      vd: 65.8,
      fl: -126.39973072204623,
      glass: "FK3 catalog-equivalent coefficient proxy (patent 465658; production supplier unspecified)",
      apd: false,
      role: "Image-side negative component of the translating G2 focus group.",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.1,
      fl: -150.19722418009317,
      glass: "S-TIM28 catalog-equivalent coefficient proxy (patent 689311; production supplier unspecified)",
      apd: false,
      role: "Negative first element of the front cemented pair in G3.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      diagramLabel: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 53.8,
      fl: 118.72476385742468,
      glass: "H-LaK6A catalog-equivalent coefficient proxy (patent 694538; production supplier unspecified)",
      apd: false,
      role: "Positive partner in the first G3 cemented pair.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      diagramLabel: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.1,
      fl: -500.9514400257162,
      glass: "S-TIM35 catalog-equivalent coefficient proxy (patent 699301; production supplier unspecified)",
      apd: false,
      role: "Negative meniscus of the rear G3 cemented pair.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.6,
      fl: 113.62156857935292,
      glass: "K-LaK14 catalog-equivalent coefficient proxy (patent 697556; production supplier unspecified)",
      apd: false,
      role: "Final positive element of G3.",
      cemented: "D3",
    },
  ],

  surfaces: [
    { label: "1", R: 443.373, d: 14.5, nd: 1.49782, elemId: 1, sd: 82.0 },
    { label: "2", R: -745.663, d: 0.5, nd: 1.0, elemId: 0, sd: 81.5 },
    { label: "3", R: 235.41, d: 21.0, nd: 1.49782, elemId: 2, sd: 81.5 },
    { label: "4", R: -599.816, d: 6.85, nd: 1.0, elemId: 0, sd: 80.5 },
    { label: "5", R: -527.848, d: 6.0, nd: 1.7495, elemId: 3, sd: 80.0 },
    { label: "6", R: 473.787, d: 1.7, nd: 1.0, elemId: 0, sd: 79.0 },
    { label: "7", R: 176.9, d: 15.0, nd: 1.49782, elemId: 4, sd: 78.5 },
    { label: "8", R: 558.189, d: 102.701, nd: 1.0, elemId: 0, sd: 78.0 },
    { label: "9", R: 749.672, d: 8.0, nd: 1.79504, elemId: 5, sd: 46.0 },
    { label: "10", R: -189.496, d: 3.65, nd: 1.51454, elemId: 6, sd: 46.0 },
    { label: "11", R: 125.271, d: 12.0, nd: 1.0, elemId: 0, sd: 45.0 },
    { label: "12", R: -148.765, d: 4.8, nd: 1.4645, elemId: 7, sd: 37.5 },
    { label: "13", R: 97.985, d: 26.888, nd: 1.0, elemId: 0, sd: 35.0 },
    // Stop station is a documented Stage-2 inference: fixed 1.500 mm ahead of G3 surface 14.
    { label: "STO", R: 1e15, d: 1.5, nd: 1.0, elemId: 0, sd: 29.16666716333662 },
    { label: "14", R: -1754.216, d: 1.5, nd: 1.68893, elemId: 8, sd: 31.5 },
    { label: "15", R: 110.0, d: 7.75, nd: 1.6935, elemId: 9, sd: 33.5 },
    { label: "16", R: -317.94, d: 2.0, nd: 1.0, elemId: 0, sd: 33.5 },
    { label: "17", R: 169.454, d: 2.4, nd: 1.69895, elemId: 10, sd: 33.0 },
    { label: "18", R: 113.525, d: 8.0, nd: 1.6968, elemId: 11, sd: 33.5 },
    { label: "19", R: -254.06, d: 112.223, nd: 1.0, elemId: 0, sd: 33.5 },
  ],

  asph: {},

  var: {
    "8": [102.701, 123.701],
    "13": [26.888, 5.888],
  },
  varLabels: [
    ["8", "G1→G2"],
    ["13", "G2→STO"],
  ],

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

  // Required UI field. This is the computed Example-4 close-state object-to-image-plane distance,
  // not a substituted manufacturer MFD (the patent itself publishes the 21 mm G2 travel, not MFD).
  closeFocusM: 4.097300490934653,
  focusDescription:
    "PUBLISHED internal focus: the complete negative G2 group translates 21.0 mm toward the image. Source D8 grows 102.701→123.701 mm while source D13 shrinks 28.388→7.388 mm; the inferred stop is fixed 1.500 mm ahead of G3, so authored D13→STO is 26.888→5.888 mm. Patent β=-0.089; direct paraxial trace gives β=-0.086422.",

  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  scFill: 0.58,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
