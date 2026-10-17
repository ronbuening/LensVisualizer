import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S DX MICRO-NIKKOR 85mm f/3.5 G ED VR             ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Patent source: US 2009/0190220 A1, Example 1 (Haruo Sato / Nikon).     ║
 * ║  Production correlation is inferred, not stated by the patent.           ║
 * ║  14 elements / 10 construction groups; 5 patent power groups G1–G5.     ║
 * ║  All 25 prescription surfaces are spherical; surface 13 is the STO.     ║
 * ║                                                                            ║
 * ║  Focus status: PUBLISHED. G2 moves imageward and G3 objectward.          ║
 * ║  The infinity, β=-0.5, and β=-1.0 rows are exact focus keyframes; no      ║
 * ║  source state is replaced by a reconstruction.                             ║
 * ║                                                                            ║
 * ║  PRODUCT / MODEL SEPARATION:                                               ║
 * ║    Nikon markets 85 mm, f/3.5, DX, 1.0×, MFD 0.286 m.                   ║
 * ║    The modeled patent design is EFL 85.000253 mm, FNO 3.6.               ║
 * ║    Patent β=-1.0 normalizes to 0.26419491 m object-to-image distance;     ║
 * ║    closeFocusM therefore follows the optical model, not the marketed MFD. ║
 * ║                                                                            ║
 * ║  SCALING: none (s = 1.0).                                                  ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS / STOP:                                                    ║
 * ║    The patent publishes neither clear apertures nor stop diameter. SDs are ║
 * ║    inferred from the FNO=3.6 stop solution, exact spherical-ray envelopes, ║
 * ║    Figure-2 proportions, and geometry limits. Figure 2 keeps D1 below L11  ║
 * ║    and near L12, while D4 falls between the neighboring G3 and G5 heights; ║
 * ║    surfaces 5–7 and 19–21 retain those relative rim proportions. The stop  ║
 * ║    radius is derived from the design f-number, FNO 3.6. The 1.300 mm air   ║
 * ║    gap between surfaces 4 and 5 remains physically positive at the shared  ║
 * ║    authored rim under the default gap policy.                              ║
 * ║                                                                            ║
 * ║  GLASS / SPECTRAL DATA:                                                    ║
 * ║    Table 1 publishes nd/νd only and no vendor/melt identities. Glass      ║
 * ║    labels below are vendor-neutral classes/equivalences from the Stage 1  ║
 * ║    audit. nC, nF, ng, and dPgF are intentionally not synthesized.        ║
 * ║                                                                            ║
 * ║  Excludes sensor cover glass, filters, dummy planes, and mechanics.       ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer references used for product-only metadata:
 * https://www.nikonusa.com/p/af-s-dx-micro-nikkor-85mm-f35g-ed-vr/2190/overview
 * https://www.nikonusa.com/press-room/nikons-new-af-s-dx-85mm-f-35
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-af-s-dx-micro-nikkor-85mm-f35g-ed-vr",
  maker: "Nikon",
  name: "NIKON AF-S DX MICRO-NIKKOR 85mm f/3.5 G ED VR",
  subtitle: "US 2009/0190220 A1 Example 1 — production correlation inferred; published focus keyframes",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "aps-c",
    specs: [
      "14 ELEMENTS / 10 GROUPS",
      "85 mm",
      "f/3.5 MARKETED / FNO 3.6 DESIGN",
      "18°50′ DX",
      "1.0× • 1 ED • IF • VR",
    ],
    elementCount: 14,
    groupCount: 10,
    focalLengthMm: { marketing: 85, design: 85.0002530005274 },
    fNumber: { marketing: 3.5, design: 3.6 },
  },

  source: {
    patentNumber: "US 2009/0190220 A1",
    patentYear: 2009,
    authors: ["Haruo Sato"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Biconvex Positive",
      nd: 1.772499,
      vd: 49.6,
      focalLengthMm: 59.75416647196782,
      glass: "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Front positive element of fixed patent power group G1.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Positive Meniscus",
      nd: 1.696797,
      vd: 55.53,
      focalLengthMm: 99.95488739612827,
      glass: "S-LAL14 (OHARA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Second positive component of fixed G1.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.717362,
      vd: 29.52,
      focalLengthMm: -32.69097970543187,
      glass: "S-TIH1 (OHARA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Negative member of the cemented negative component in G1.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Positive Meniscus",
      nd: 1.699998,
      vd: 48.08,
      focalLengthMm: 40.11579339630893,
      glass: "J-LAF01 (HIKARI catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Positive member of the cemented negative component in G1.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L21",
      label: "L21",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.12,
      focalLengthMm: -47.480309160994885,
      glass: "N-BK7 (SCHOTT catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Leading negative lens of focusing group G2.",
    },
    {
      id: 6,
      name: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.12,
      focalLengthMm: -37.39541048846492,
      glass: "N-BK7 (SCHOTT catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Negative member of the cemented component in focusing group G2.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L23",
      label: "L23",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 64.3150291932149,
      glass: "J-SF03 (HIKARI catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Positive member of the cemented negative component in G2.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.12,
      focalLengthMm: 55.10715357347965,
      glass: "N-BK7 (SCHOTT catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Leading positive lens of focusing group G3.",
    },
    {
      id: 9,
      name: "L32",
      label: "L32",
      type: "Negative Meniscus",
      nd: 1.755199,
      vd: 27.51,
      focalLengthMm: -58.60784454820127,
      glass: "E-FD4 (HOYA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Negative member of the cemented positive component in G3.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L33",
      label: "L33",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.56,
      focalLengthMm: 37.84138507455354,
      glass: "J-FKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote: "Nikon specifies one production ED element; the patent publishes nd/vd only.",
      role: "Extreme-low-dispersion member of G3; correlation to the production ED element is inferred.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L41",
      label: "L41",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.16,
      focalLengthMm: -21.61237682577136,
      glass: "S-LAH60 (OHARA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Negative member of the transverse vibration-proof group G4.",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L42",
      label: "L42",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 44.42584767430302,
      glass: "J-SF03 (HIKARI catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Positive member of the cemented vibration-proof group G4.",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L51",
      label: "L51",
      type: "Negative Meniscus",
      nd: 1.518229,
      vd: 58.9,
      focalLengthMm: -186.64816363005477,
      glass: "S-NSL3 (OHARA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Negative meniscus of the fixed rear group G5.",
    },
    {
      id: 14,
      name: "L52",
      label: "L52",
      type: "Biconvex Positive",
      nd: 1.785896,
      vd: 44.2,
      focalLengthMm: 55.11212540465896,
      glass: "S-LAH51 (OHARA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Final positive element of fixed rear group G5.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 74.4986, d: 4.8, sd: 14.0, medium: 1 },
    { label: "2", R: -117.9415, d: 0.1, sd: 13.8 },
    { label: "3", R: 44.3101, d: 3.0, sd: 13.0, medium: 2 },
    { label: "4", R: 118.411, d: 1.3, sd: 13.0 },
    { label: "5", R: -190.2091, d: 1.3, sd: 13.25, medium: 3 },
    { label: "6", R: 26.8256, d: 4.5, sd: 13.0, medium: 4 },
    { label: "7", R: 558.6033, sd: 12.7 },
    { label: "8", R: 179.5945, d: 1.3, sd: 10.3, medium: 5 },
    { label: "9", R: 21.535, d: 3.2, sd: 9.4 },
    { label: "10", R: -39.8733, d: 1.3, sd: 8.5, medium: 6 },
    { label: "11", R: 37.9197, d: 1.8, sd: 8.9, medium: 7 },
    { label: "12", R: 122.172, sd: 8.7 },
    { label: "STO", R: "flat" },
    { label: "14", R: 55.4457, d: 3.0, sd: 9.5, medium: 8 },
    { label: "15", R: -57.4772, d: 0.1, sd: 9.5 },
    { label: "16", R: 42.8755, d: 1.3, sd: 9.4, medium: 9 },
    { label: "17", R: 21.4944, d: 4.4, sd: 9.2, medium: 10 },
    { label: "18", R: -142.0701, sd: 9.1 },
    { label: "19", R: -133.7831, d: 1.3, sd: 9.5, medium: 11 },
    { label: "20", R: 20.9234, d: 2.8, sd: 9.5, medium: 12 },
    { label: "21", R: 44.2606, d: 7.4995, sd: 9.4 },
    { label: "22", R: -23.2425, d: 1.5, sd: 9.0, medium: 13 },
    { label: "23", R: -31.2679, d: 0.1, sd: 9.4 },
    { label: "24", R: 88.0814, d: 3.5, sd: 9.7, medium: 14 },
    { label: "25", R: -83.7255, d: 41.97225, sd: 9.8 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.26419491,
    /* Published Table 1 keyframes: infinity → β=-0.5 → β=-1.0. */
    keyframes: [0, 0.7833746615766991, 1],
    description:
      "PUBLISHED dual-group internal focus: G2 moves toward the image while G3 moves toward the object; the infinity, beta=-0.5, and beta=-1.0 patent rows are exact focus keyframes. Patent beta=-1.0 normalizes to 0.26419491 m object-to-image distance; Nikon markets 0.286 m MFD from the focal plane.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    "7": { label: "D7", values: [[2.49595, 10.52739, 17.78094]] },
    "12": { label: "D12", values: [[17.38925, 9.35781, 2.10426]] },
    STO: { label: "D13", values: [[16.18097, 9.51488, 3.18873]] },
    "18": { label: "D18 / d34", values: [[4.99729, 11.66338, 17.98953]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 3.6, fStops: [3.6, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  groups: [
    { text: "G1 (+) FIXED", fromSurface: "1", toSurface: "7" },
    { text: "G2 (-) FOCUS", fromSurface: "8", toSurface: "12" },
    { text: "G3 (+) FOCUS", fromSurface: "14", toSurface: "18" },
    { text: "G4 (-) VR", fromSurface: "19", toSurface: "21" },
    { text: "G5 (+) FIXED", fromSurface: "22", toSurface: "25" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
  ],

  /* ── Geometry / layout ── */
  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
