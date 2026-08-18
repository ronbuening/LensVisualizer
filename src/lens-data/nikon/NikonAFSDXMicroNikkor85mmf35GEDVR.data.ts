import type { LensDataInput } from "../../types/optics.js";

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
 * ║  The current prime-lens var schema stores the published infinity and      ║
 * ║  β=-1.0 endpoint pairs. The patent's β=-0.5 station is retained and      ║
 * ║  independently checked in the audit/calculation artifacts; it is not      ║
 * ║  replaced by a reconstruction.                                             ║
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
 * ║    The patent publishes neither clear apertures nor stop diameter. SDs    ║
 * ║    are inferred from the FNO=3.6 stop solution, exact spherical-ray       ║
 * ║    envelopes, Figure-2 proportions, and geometry limits.                  ║
 * ║    Figure 2 keeps D1 below L11 and near L12, while D4 falls between      ║
 * ║    the neighboring G3 and G5 heights; surfaces 5–7 and 19–21 retain      ║
 * ║    those relative rim proportions.                                        ║
 * ║    stop sd = 8.6116527358 mm is the paraxial value implied by FNO 3.6.   ║
 * ║    The 1.300 mm air gap between surfaces 4 and 5 remains physically      ║
 * ║    positive at the shared authored rim under the default gap policy.      ║
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
  key: "nikon-af-s-dx-micro-nikkor-85mm-f35g-ed-vr",
  maker: "Nikon",
  name: "NIKON AF-S DX MICRO-NIKKOR 85mm f/3.5G ED VR",
  subtitle: "US 2009/0190220 A1 Example 1 — production correlation inferred; published focus endpoints",
  specs: [
    "14 ELEMENTS / 10 GROUPS",
    "85 mm",
    "f/3.5 MARKETED / FNO 3.6 DESIGN",
    "18°50′ DX",
    "1.0× • 1 ED • IF • VR",
  ],

  focalLengthMarketing: 85,
  focalLengthDesign: 85.0002530005274,
  apertureMarketing: 3.5,
  apertureDesign: 3.6,
  lensMounts: ["nikon-f"],
  imageFormat: "aps-c",
  patentNumber: "US 2009/0190220 A1",
  patentAuthors: ["Haruo Sato"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2009,
  elementCount: 14,
  groupCount: 10,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Biconvex Positive",
      nd: 1.772499,
      vd: 49.6,
      fl: 59.75416647196782,
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
      fl: 99.95488739612827,
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
      fl: -32.69097970543187,
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
      fl: 40.11579339630893,
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
      fl: -47.480309160994885,
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
      fl: -37.39541048846492,
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
      fl: 64.3150291932149,
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
      fl: 55.10715357347965,
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
      fl: -58.60784454820127,
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
      fl: 37.84138507455354,
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
      fl: -21.61237682577136,
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
      fl: 44.42584767430302,
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
      fl: -186.64816363005477,
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
      fl: 55.11212540465896,
      glass: "S-LAH51 (OHARA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Final positive element of fixed rear group G5.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 74.4986, d: 4.8, nd: 1.772499, elemId: 1, sd: 14.0 },
    { label: "2", R: -117.9415, d: 0.1, nd: 1.0, elemId: 0, sd: 13.8 },
    { label: "3", R: 44.3101, d: 3.0, nd: 1.696797, elemId: 2, sd: 13.0 },
    { label: "4", R: 118.411, d: 1.3, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "5", R: -190.2091, d: 1.3, nd: 1.717362, elemId: 3, sd: 13.25 },
    { label: "6", R: 26.8256, d: 4.5, nd: 1.699998, elemId: 4, sd: 13.0 },
    { label: "7", R: 558.6033, d: 2.49595, nd: 1.0, elemId: 0, sd: 12.7 },
    { label: "8", R: 179.5945, d: 1.3, nd: 1.5168, elemId: 5, sd: 10.3 },
    { label: "9", R: 21.535, d: 3.2, nd: 1.0, elemId: 0, sd: 9.4 },
    { label: "10", R: -39.8733, d: 1.3, nd: 1.5168, elemId: 6, sd: 8.5 },
    { label: "11", R: 37.9197, d: 1.8, nd: 1.84666, elemId: 7, sd: 8.9 },
    { label: "12", R: 122.172, d: 17.38925, nd: 1.0, elemId: 0, sd: 8.7 },
    { label: "STO", R: 1e15, d: 16.18097, nd: 1.0, elemId: 0, sd: 8.611652735835495 },
    { label: "14", R: 55.4457, d: 3.0, nd: 1.5168, elemId: 8, sd: 9.5 },
    { label: "15", R: -57.4772, d: 0.1, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "16", R: 42.8755, d: 1.3, nd: 1.755199, elemId: 9, sd: 9.4 },
    { label: "17", R: 21.4944, d: 4.4, nd: 1.49782, elemId: 10, sd: 9.2 },
    { label: "18", R: -142.0701, d: 4.99729, nd: 1.0, elemId: 0, sd: 9.1 },
    { label: "19", R: -133.7831, d: 1.3, nd: 1.834, elemId: 11, sd: 9.5 },
    { label: "20", R: 20.9234, d: 2.8, nd: 1.84666, elemId: 12, sd: 9.5 },
    { label: "21", R: 44.2606, d: 7.4995, nd: 1.0, elemId: 0, sd: 9.4 },
    { label: "22", R: -23.2425, d: 1.5, nd: 1.518229, elemId: 13, sd: 9.0 },
    { label: "23", R: -31.2679, d: 0.1, nd: 1.0, elemId: 0, sd: 9.4 },
    { label: "24", R: 88.0814, d: 3.5, nd: 1.785896, elemId: 14, sd: 9.7 },
    { label: "25", R: -83.7255, d: 41.97225, nd: 1.0, elemId: 0, sd: 9.8 },
  ],

  asph: {},

  /* Published Table 1 endpoints: infinity → β=-1.0. */
  var: {
    "7": [2.49595, 17.78094],
    "12": [17.38925, 2.10426],
    STO: [16.18097, 3.18873],
    "18": [4.99729, 17.98953],
  },

  varLabels: [
    ["7", "D7"],
    ["12", "D12"],
    ["STO", "D13"],
    ["18", "D18 / d34"],
  ],

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

  /* ── Focus configuration ── */
  closeFocusM: 0.26419491,
  focusDescription:
    "PUBLISHED dual-group internal focus: G2 moves toward the image while G3 moves toward the object; the data stores the patent infinity and beta=-1.0 endpoints, while the published beta=-0.5 station is retained in the audit. Patent beta=-1.0 normalizes to 0.26419491 m object-to-image distance; Nikon markets 0.286 m MFD from the focal plane.",

  /* ── Aperture configuration ── */
  nominalFno: 3.6,
  fstopSeries: [3.6, 4, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 9,
  maxFstop: 32,

  /* ── Geometry / layout ── */
  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
