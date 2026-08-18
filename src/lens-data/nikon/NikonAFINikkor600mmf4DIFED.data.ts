import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF-I NIKKOR 600mm f/4 D IF-ED                          ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JPH04238311A, Example 5 (Nikon Corporation / Susumu Sato).  ║
 * ║ Production correlation: Nikon AF-I Nikkor 600mm f/4D IF-ED.               ║
 * ║ 9 active glass elements / 7 air-separated groups; all spherical.           ║
 * ║                                                                            ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION.                                  ║
 * ║ The patent publishes infinity and β=-0.13 states for translation of the    ║
 * ║ negative G2 group. The UI close endpoint instead uses a one-DOF solution   ║
 * ║ constrained to that mechanism at Nikon's 6.0 m image-plane-referenced MFD: ║
 * ║ d11 = 18.4700148248 mm, d16 = 6.6187851752 mm. The invariant               ║
 * ║ d11 + d16 = 25.0888 mm is preserved.                                      ║
 * ║                                                                            ║
 * ║ Source corrections:                                                        ║
 * ║ - The focus table's d20 = 93.3069 mm is a source error; independent focus  ║
 * ║   tracing requires 135.3064576 mm, consistent with corrected 135.3069 mm. ║
 * ║ - Example-5 f1 = 197.75 and Φ = 109.8 are stale copy-through values; they  ║
 * ║   are not used in this prescription.                                       ║
 * ║                                                                            ║
 * ║ Omitted plates: patent surfaces 1-2 and 19-20 are fixed plane plates /     ║
 * ║ filters and are excluded. Their optical translation is normalized to air.  ║
 * ║ The rear plate is folded into the STO-to-image spacing.                    ║
 * ║                                                                            ║
 * ║ Stop placement: the patent numerically gives 65.20 mm from surface 18 to   ║
 * ║ the rear filter but does not tabulate S. Figure 9 places S between G3 and  ║
 * ║ F. A local pixel calibration against that 65.20 mm interval gives          ║
 * ║ surface18→STO ≈ 22.3 mm. The physical STO semi-diameter is then inferred   ║
 * ║ from the modeled f/4.11 entrance pupil: 21.8399187185 mm.                  ║
 * ║                                                                            ║
 * ║ Semi-diameters: not tabulated by the patent. Values are inferred from the  ║
 * ║ f/4.11 marginal ray, 60% field ray containment, Figure-9 proportions,      ║
 * ║ edge-thickness limits, rim slope, cross-gap clearance, and focus endpoints.║
 * ║                                                                            ║
 * ║ Spectral data: the patent publishes only nd/νd. nC, nF, ng, and dPgF are   ║
 * ║ intentionally not authored because exact historical glass identities and   ║
 * ║ line-index/partial-dispersion data are not source-defensible.              ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-af-i-nikkor-600mm-f4d-if-ed",
  maker: "Nikon",
  name: "NIKON AF-I NIKKOR 600mm f/4 D IF-ED",
  subtitle: "JPH04238311A Example 5 — constrained 6 m production-focus reconstruction",
  specs: [
    "9 ELEMENTS / 7 GROUPS",
    "MARKETED 600mm f/4",
    "DESIGN f = 587.9998 mm",
    "DESIGN F/4.11",
    "2ω ≈ 4.208°",
    "INNER FOCUS",
    "ALL SPHERICAL",
  ],

  focalLengthMarketing: 600,
  focalLengthDesign: 587.9997827153087,
  apertureMarketing: 4,
  apertureDesign: 4.11,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JPH04238311A",
  patentAuthors: ["Susumu Sato"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 1992,
  elementCount: 9,
  groupCount: 7,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "G11 Element 1",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      fl: 365.4359029248421,
      glass: "498826 — ED/fluorophosphate-crown class; HIKARI J-FKH1 coordinate match",
      role: "First positive collector in G11.",
    },
    {
      id: 2,
      name: "L12",
      label: "G11 Element 2",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      fl: 324.5108131104215,
      glass: "498826 — ED/fluorophosphate-crown class; HIKARI J-FKH1 coordinate match",
      role: "Second positive collector in G11.",
    },
    {
      id: 3,
      name: "L13",
      label: "G11 Element 3",
      type: "Biconcave Negative",
      nd: 1.75692,
      vd: 31.7,
      fl: -386.8776830008698,
      glass: "Unmatched (nd=1.75692, νd=31.7)",
      role: "Negative corrector completing the front G11 subgroup.",
    },
    {
      id: 4,
      name: "L14",
      label: "G12 Negative Member",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 54,
      fl: -141.36497376349675,
      glass: "713540 — LAK8-class lanthanum crown",
      cemented: "G12",
      role: "Negative-power front member of the weak positive G12 cemented pair.",
    },
    {
      id: 5,
      name: "L15",
      label: "G12 Positive Member",
      type: "Positive Meniscus",
      nd: 1.59319,
      vd: 67.9,
      fl: 120.23059517463462,
      glass: "593679 — PSKH/low-dispersion crown class; HIKARI J-PSKH1 coordinate match",
      cemented: "G12",
      role: "Positive rear member of the G12 cemented pair.",
    },
    {
      id: 6,
      name: "L21",
      label: "G2 Cemented Pair Front",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: 151.91731684889567,
      glass: "805254 — SF6/TIH6-class dense flint",
      cemented: "G2a",
      role: "Front member of the negative inner-focus G2 cemented pair.",
    },
    {
      id: 7,
      name: "L22",
      label: "G2 Cemented Pair Rear",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 54,
      fl: -80.85716359442007,
      glass: "713540 — LAK8-class lanthanum crown",
      cemented: "G2a",
      role: "Negative rear member of the G2 cemented pair.",
    },
    {
      id: 8,
      name: "L23",
      label: "G2 Separated Negative",
      type: "Biconcave Negative",
      nd: 1.6935,
      vd: 53.8,
      fl: -172.9338659086472,
      glass: "694538 — LAC13/LAK13-class; exact historical melt unresolved",
      role: "Separated negative member completing the translating G2 focus group.",
    },
    {
      id: 9,
      name: "L31",
      label: "G3 Element",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      fl: 204.0001522615934,
      glass: "498826 — ED/fluorophosphate-crown class; HIKARI J-FKH1 coordinate match",
      role: "Fixed positive rear group G3.",
    },
  ],

  surfaces: [
    { label: "3", R: 201.438, d: 18, nd: 1.49782, elemId: 1, sd: 79 },
    { label: "4", R: -1821.902, d: 0.9, nd: 1, elemId: 0, sd: 78.5 },
    { label: "5", R: 201.189, d: 19, nd: 1.49782, elemId: 2, sd: 76.5 },
    { label: "6", R: -794.165, d: 6.6, nd: 1, elemId: 0, sd: 75 },
    { label: "7", R: -627.182, d: 7, nd: 1.75692, elemId: 3, sd: 70.5 },
    { label: "8", R: 551.955, d: 103.43, nd: 1, elemId: 0, sd: 69 },
    { label: "9", R: 101.17, d: 5, nd: 1.713, elemId: 4, sd: 39.5 },
    { label: "10", R: 49.452, d: 13, nd: 1.59319, elemId: 5, sd: 38.5 },
    { label: "11", R: 145.498, d: 7.2137, nd: 1, elemId: 0, sd: 36.5 },
    { label: "12", R: -90000, d: 7, nd: 1.80518, elemId: 6, sd: 30 },
    { label: "13", R: -122.159, d: 3.3, nd: 1.713, elemId: 7, sd: 29.5 },
    { label: "14", R: 110.402, d: 6.9, nd: 1, elemId: 0, sd: 29 },
    { label: "15", R: -1527.933, d: 3.3, nd: 1.6935, elemId: 8, sd: 27.5 },
    { label: "16", R: 130.26, d: 17.8751, nd: 1, elemId: 0, sd: 27 },
    { label: "17", R: 218.27, d: 7, nd: 1.49782, elemId: 9, sd: 27 },
    { label: "18", R: -187.896, d: 22.3, nd: 1, elemId: 0, sd: 26.5 },
    { label: "STO", R: 1e15, d: 179.5254654008439, nd: 1, elemId: 0, sd: 21.83991871847553 },
  ],

  asph: {},

  var: {
    "11": [7.2137, 18.47001482476355],
    "16": [17.8751, 6.61878517523645],
  },
  varLabels: [
    ["11", "D11"],
    ["16", "D16"],
  ],

  groups: [
    { text: "G1", fromSurface: "3", toSurface: "11" },
    { text: "G2", fromSurface: "12", toSurface: "16" },
    { text: "G3", fromSurface: "17", toSurface: "18" },
  ],
  doublets: [
    { text: "G12", fromSurface: "9", toSurface: "11" },
    { text: "G2a", fromSurface: "12", toSurface: "14" },
  ],

  closeFocusM: 6,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: negative G2 translates imageward by 11.2563148248 mm from infinity to the Nikon 6.0 m MFD, with d11+d16 fixed at 25.0888 mm; the patent-published β=-0.13 state is retained only in the audit.",

  nominalFno: 4.11,
  fstopSeries: [4.11, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
