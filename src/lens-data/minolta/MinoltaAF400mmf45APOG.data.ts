import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — MINOLTA AF 400mm f/4.5 APO G                                 ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 1996-327896 A, Example 1 (特開平8-327896 A), Minolta Co., Ltd.    ║
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
 * ║ numerical image-plane spacing. The stop radius is derived from the design ║
 * ║ f-number, F/4.59; STO.d = 160.515012 mm places the paraxial image plane   ║
 * ║ at the infinity-focus conjugate (r14→image BFD = 191.515012 mm).          ║
 * ║                                                                            ║
 * ║ Semi-diameters are modeling values, not patent table entries. They were   ║
 * ║ checked with exact meridional spherical rays at infinity and 3 m, using    ║
 * ║ the viewer defaults (0.60 field fraction, ±0.75 off-axis pupil samples),  ║
 * ║ then checked against edge thickness, rim slope, cross-gap intrusion,       ║
 * ║ the patent optical section, and the production lens's 109 mm outer        ║
 * ║ diameter. No layout control is used to conceal invalid geometry.           ║
 * ║                                                                            ║
 * ║ The patent publishes only nd and νd and names no glass vendor. Compatible ║
 * ║ catalog curves are used without asserting the production supplier; rows    ║
 * ║ outside the compatibility guard stay explicitly unmatched.                 ║
 * ║ No nC, nF, ng, or dPgF fields are fabricated; “APO” remains branding.     ║
 * ║                                                                            ║
 * ║ Patent condition (3) is sign-inconsistent across the printed source:      ║
 * ║ Table 1 gives r13 = -136.006 mm while Table 4 gives +0.435. The signed    ║
 * ║ radius is preserved; the condition check reports both signed and magnitude.║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "minolta-af-400mm-f45-apo-g",
  maker: "Minolta",
  name: "MINOLTA AF 400mm f/4.5 APO G",
  subtitle: "JP 1996-327896 A Example 1 — published inner-focus 400 mm-class telephoto",

  catalog: {
    lensMounts: ["sony-a"],
    imageFormat: "135-full-frame",
    specs: [
      "8-ELEMENT / 6-GROUP PATENT MODEL",
      "390 mm PATENT HEADER / 391.43 mm COMPUTED EFL",
      "F/4.59 DESIGN",
      "2ω = 6.4°",
      "PUBLISHED 3 m INNER FOCUS",
    ],
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: { marketing: 400, design: 391.432898 },
    fNumber: { marketing: 4.5, design: 4.59 },
  },

  source: {
    patentNumber: "JP 1996-327896 A",
    patentYear: 1996,
    authors: ["Yoshinobu Asakura"],
    assignees: ["Minolta Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.4931,
      vd: 83.6,
      focalLengthMm: 214.144,
      glass: "Unmatched (493836 Minolta AD/ED fluorophosphate; no compatible public coefficient row)",
      apd: "inferred",
      apdNote:
        "AD/APD status is inferred from the exact 493836 Minolta glass family; this patent publishes only nd and νd, so no numeric dPgF is borrowed.",
      role: "Fixed positive front group; first converging element.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.4931,
      vd: 83.6,
      focalLengthMm: 219.75,
      glass: "Unmatched (493836 Minolta AD/ED fluorophosphate; no compatible public coefficient row)",
      apd: "inferred",
      apdNote:
        "AD/APD status is inferred from the exact 493836 Minolta glass family; this patent publishes only nd and νd, so no numeric dPgF is borrowed.",
      role: "Fixed positive front group; shares the high-Abbe crown coordinate with L1.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.721,
      vd: 33.4,
      focalLengthMm: -240.817,
      glass: "N-KZFS8 (SCHOTT catalog equivalent; patent 721334; production supplier unspecified)",
      role: "Negative member completing the fixed positive Gr1 assembly.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus (concave to image)",
      nd: 1.62004,
      vd: 36.3,
      focalLengthMm: -271.004,
      glass: "E-F2 (HOYA catalog equivalent; patent 620363; production supplier unspecified)",
      role: "Front negative member of the first cemented pair in the moving Gr2 focus group.",
      diagramLabel: "L4",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus (concave to image)",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 224.071,
      glass: "S-FSL5 (OHARA catalog equivalent; patent 487702; production supplier unspecified)",
      role: "Positive partner cemented to L4; the L4+L5 pair is weakly positive in isolation.",
      diagramLabel: "L5",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.65844,
      vd: 50.9,
      focalLengthMm: -60.264,
      glass: "N-SSK5 (SCHOTT catalog equivalent; patent 658509; production supplier unspecified)",
      role: "Strong negative member of the second cemented pair; dominates Gr2 negative power.",
      diagramLabel: "L6",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus (concave to image)",
      nd: 1.84566,
      vd: 23.8,
      focalLengthMm: 135.182,
      glass:
        "J-SF03 / H-ZF52 / FDS90 catalog-equivalent dense-flint class (patent 846238; production supplier unspecified)",
      role: "Positive dense-flint partner cemented to L6 in the moving Gr2 focus group.",
      diagramLabel: "L7",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus (convex to image)",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 312.414,
      glass: "S-FSL5 (OHARA catalog equivalent; patent 487702; production supplier unspecified)",
      role: "Fixed positive Gr3 meniscus behind the moving focus group.",
      diagramLabel: "L8",
    },
  ],

  surfaces: [
    { label: "1", R: 151.078, d: 11.8, sd: 48.0, medium: 1 },
    { label: "2", R: -341.694, d: 0.4, sd: 48.0 },
    { label: "3", R: 136.72, d: 10.5, sd: 45.8, medium: 2 },
    { label: "4", R: -509.108, d: 4.0, sd: 45.8 },
    { label: "5", R: -301.849, d: 3.0, sd: 42.0, medium: 3 },
    { label: "6", R: 410.451, sd: 42.0 },
    { label: "7", R: 68.576, d: 3.2, sd: 32.0, medium: 4 },
    { label: "8", R: 47.831, d: 7.2, sd: 32.0, medium: 5 },
    { label: "9", R: 80.893, d: 14.12, sd: 30.0 },
    { label: "10", R: -1044.5, d: 3.0, sd: 24.5, medium: 6 },
    { label: "11", R: 41.294, d: 6.6, sd: 24.0, medium: 7 },
    { label: "12", R: 59.911, sd: 22.5 },
    { label: "13", R: -136.006, d: 4.5, sd: 22.0, medium: 8 },
    { label: "14", R: -72.625, d: 31.0, sd: 22.0 },
    { label: "STO", R: "flat", d: 160.515012 },
  ],

  focus: {
    closeFocusM: 3.0,
    description:
      "PUBLISHED inner focus: Gr2 (L4-L7, surfaces 7-12) moves imageward from infinity to 3 m. " +
      "T6 changes 29.311→43.262 mm and T12 changes 21.978→8.028 mm. Raw patent endpoints are preserved; " +
      "their adjacent-gap sum differs by 0.001 mm at close focus because of source rounding.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { "6": { label: "T6", values: [[29.311, 43.262]] }, "12": { label: "T12", values: [[21.978, 8.028]] } },

  aperture: { nominalFNumber: 4.59, fStops: [4.5, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32 },

  groups: [
    { text: "Gr1", fromSurface: "1", toSurface: "6" },
    { text: "Gr2 (FOCUS)", fromSurface: "7", toSurface: "12" },
    { text: "Gr3", fromSurface: "13", toSurface: "14" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],

  layout: { yScFill: 0.44 },
} satisfies LensDataV2Input;

export default LENS_DATA;
