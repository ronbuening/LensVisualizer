import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — MINOLTA AF 400mm f/4.5 APO G                                 ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP1996-327896 A, Example 1 (特開平8-327896 A), Minolta Co., Ltd.    ║
 * ║ All-spherical positive / negative / positive inner-focus telephoto.        ║
 * ║ Patent model: 8 elements / 6 air-separated glass groups, 14 refracting    ║
 * ║ surfaces, followed by one aperture stop. No scale factor is applied.       ║
 * ║                                                                            ║
 * ║ Production correlation: Minolta manual 9222-2640-14 identifies the        ║
 * ║ AF 400mm F4.5 APO G as 9 elements / 7 groups, 3 m MFD, 0.15×, and        ║
 * ║ requiring an integral rear NORMAL filter. The filter is excluded here     ║
 * ║ under project rules. The manual does not state whether its 9/7 count       ║
 * ║ includes that filter, so the +1 element / +1 group difference is left      ║
 * ║ unreconciled rather than converted into an unsupported patent element.     ║
 * ║ The public name follows the manufacturer manual; it does not add HS.       ║
 * ║                                                                            ║
 * ║ Focus status: PUBLISHED. Gr2 (L4-L7, surfaces 7-12) moves imageward.      ║
 * ║ T6 = 29.311 → 43.262 mm; T12 = 21.978 → 8.028 mm at 3 m. The raw        ║
 * ║ source endpoints are preserved; their adjacent-gap sum differs by         ║
 * ║ 0.001 mm at close focus, consistent with the patent's 0.001 mm precision. ║
 * ║                                                                            ║
 * ║ The patent publishes the stop position after T14 but no stop diameter or  ║
 * ║ numerical image-plane spacing. STO.sd = 17.4853 mm is inferred from the   ║
 * ║ modeled EFL and F/4.59; STO.d = 160.515012 mm places the paraxial image   ║
 * ║ plane at the infinity-focus conjugate (r14→image BFD = 191.515012 mm).    ║
 * ║                                                                            ║
 * ║ Semi-diameters are modeling values, not patent table entries. They were   ║
 * ║ checked with exact meridional spherical rays at infinity and 3 m, using    ║
 * ║ the viewer defaults (0.60 field fraction, ±0.75 off-axis pupil samples),  ║
 * ║ then checked against edge thickness, rim slope, cross-gap intrusion,       ║
 * ║ the patent optical section, and the production lens's 109 mm outer        ║
 * ║ diameter. No layout control is used to conceal invalid geometry.           ║
 * ║                                                                            ║
 * ║ The patent publishes only nd and νd and names no glass vendor. Compatible ║
 * ║ catalog curves are used without asserting the production supplier; the     ║
 * ║ remaining proprietary coordinates stay explicitly unresolved.             ║
 * ║ No nC, nF, ng, or dPgF fields are fabricated; “APO” remains branding.     ║
 * ║                                                                            ║
 * ║ Patent condition (3) is sign-inconsistent across the printed source:      ║
 * ║ Table 1 gives r13 = -136.006 mm while Table 4 gives +0.435. The signed    ║
 * ║ radius is preserved; the condition check reports both signed and magnitude.║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "minolta-af-400mm-f45-apo-g",
  maker: "Minolta",
  name: "MINOLTA AF 400mm f/4.5 APO G",
  subtitle: "JP1996-327896 A Example 1 — published inner-focus 400 mm-class telephoto",
  specs: [
    "8-ELEMENT / 6-GROUP PATENT MODEL",
    "390 mm PATENT HEADER / 391.43 mm COMPUTED EFL",
    "F/4.59 DESIGN",
    "2ω = 6.4°",
    "PUBLISHED 3 m INNER FOCUS",
  ],

  focalLengthMarketing: 400,
  focalLengthDesign: 391.432898,
  apertureMarketing: 4.5,
  apertureDesign: 4.59,
  lensMounts: ["sony-a"],
  imageFormat: "135-full-frame",
  patentNumber: "JP1996-327896 A",
  patentAuthors: ["Yoshinobu Asakura"],
  patentAssignees: ["Minolta Co., Ltd."],
  patentYear: 1996,
  elementCount: 8,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.4931,
      vd: 83.6,
      fl: 214.144,
      glass: "493836 — Minolta AD/ED fluorophosphate class (catalog unresolved)",
      apd: "inferred",
      apdNote:
        "AD/APD status is inferred from the exact 493836 Minolta glass family; this patent publishes only nd and νd, so no numeric dPgF is borrowed.",
      role: "Fixed positive front group; first converging element.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.4931,
      vd: 83.6,
      fl: 219.75,
      glass: "493836 — Minolta AD/ED fluorophosphate class (catalog unresolved)",
      apd: "inferred",
      apdNote:
        "AD/APD status is inferred from the exact 493836 Minolta glass family; this patent publishes only nd and νd, so no numeric dPgF is borrowed.",
      role: "Fixed positive front group; shares the high-Abbe crown coordinate with L1.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.721,
      vd: 33.4,
      fl: -240.817,
      glass: "721334 — high-index medium-dispersion glass (catalog unresolved)",
      role: "Negative member completing the fixed positive Gr1 assembly.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Negative Meniscus (concave to image)",
      nd: 1.62004,
      vd: 36.3,
      fl: -271.004,
      glass: "E-F2 (HOYA catalog equivalent; patent 620363; production supplier unspecified)",
      cemented: "D1",
      role: "Front negative member of the first cemented pair in the moving Gr2 focus group.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Positive Meniscus (concave to image)",
      nd: 1.48749,
      vd: 70.2,
      fl: 224.071,
      glass: "S-FSL5 (OHARA catalog equivalent; patent 487702; production supplier unspecified)",
      cemented: "D1",
      role: "Positive partner cemented to L4; the L4+L5 pair is weakly positive in isolation.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.65844,
      vd: 50.9,
      fl: -60.264,
      glass: "N-SSK5 (SCHOTT catalog equivalent; patent 658509; production supplier unspecified)",
      cemented: "D2",
      role: "Strong negative member of the second cemented pair; dominates Gr2 negative power.",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Positive Meniscus (concave to image)",
      nd: 1.84566,
      vd: 23.8,
      fl: 135.182,
      glass:
        "J-SF03 / H-ZF52 / FDS90 catalog-equivalent dense-flint class (patent 846238; production supplier unspecified)",
      cemented: "D2",
      role: "Positive dense-flint partner cemented to L6 in the moving Gr2 focus group.",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 8",
      type: "Positive Meniscus (convex to image)",
      nd: 1.48749,
      vd: 70.2,
      fl: 312.414,
      glass: "S-FSL5 (OHARA catalog equivalent; patent 487702; production supplier unspecified)",
      role: "Fixed positive Gr3 meniscus behind the moving focus group.",
    },
  ],

  surfaces: [
    { label: "1", R: 151.078, d: 11.8, nd: 1.4931, elemId: 1, sd: 48.0 },
    { label: "2", R: -341.694, d: 0.4, nd: 1.0, elemId: 0, sd: 48.0 },
    { label: "3", R: 136.72, d: 10.5, nd: 1.4931, elemId: 2, sd: 45.8 },
    { label: "4", R: -509.108, d: 4.0, nd: 1.0, elemId: 0, sd: 45.8 },
    { label: "5", R: -301.849, d: 3.0, nd: 1.721, elemId: 3, sd: 42.0 },
    { label: "6", R: 410.451, d: 29.311, nd: 1.0, elemId: 0, sd: 42.0 },
    { label: "7", R: 68.576, d: 3.2, nd: 1.62004, elemId: 4, sd: 32.0 },
    { label: "8", R: 47.831, d: 7.2, nd: 1.48749, elemId: 5, sd: 32.0 },
    { label: "9", R: 80.893, d: 14.12, nd: 1.0, elemId: 0, sd: 30.0 },
    { label: "10", R: -1044.5, d: 3.0, nd: 1.65844, elemId: 6, sd: 24.5 },
    { label: "11", R: 41.294, d: 6.6, nd: 1.84566, elemId: 7, sd: 24.0 },
    { label: "12", R: 59.911, d: 21.978, nd: 1.0, elemId: 0, sd: 22.5 },
    { label: "13", R: -136.006, d: 4.5, nd: 1.48749, elemId: 8, sd: 22.0 },
    { label: "14", R: -72.625, d: 31.0, nd: 1.0, elemId: 0, sd: 22.0 },
    { label: "STO", R: 1e15, d: 160.515012, nd: 1.0, elemId: 0, sd: 17.4853 },
  ],

  asph: {},

  var: {
    "6": [29.311, 43.262],
    "12": [21.978, 8.028],
  },
  varLabels: [
    ["6", "T6"],
    ["12", "T12"],
  ],

  groups: [
    { text: "Gr1", fromSurface: "1", toSurface: "6" },
    { text: "Gr2 (FOCUS)", fromSurface: "7", toSurface: "12" },
    { text: "Gr3", fromSurface: "13", toSurface: "14" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],

  closeFocusM: 3.0,
  focusDescription:
    "PUBLISHED inner focus: Gr2 (L4-L7, surfaces 7-12) moves imageward from infinity to 3 m. " +
    "T6 changes 29.311→43.262 mm and T12 changes 21.978→8.028 mm. Raw patent endpoints are preserved; " +
    "their adjacent-gap sum differs by 0.001 mm at close focus because of source rounding.",

  nominalFno: 4.59,
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
