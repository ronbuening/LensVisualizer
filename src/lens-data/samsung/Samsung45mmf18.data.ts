import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                   LENS DATA — SAMSUNG 45mm f/1.8                          ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2013/0314588 A1, Example 1 (Yong-su Kim / Samsung).      ║
 * ║  Unscaled positive-negative-positive inner-focus design.                    ║
 * ║  7 elements / 6 air-separated groups, all spherical.                        ║
 * ║  Focus status: PUBLISHED. The single negative G2 element moves imageward;   ║
 * ║  D1 changes 2.99→7.01 mm and D2 changes 6.81→2.78 mm. The 0.01 mm         ║
 * ║  D1+D2 difference is retained as source rounding.                           ║
 * ║                                                                              ║
 * ║  SOURCE AND MODELING NOTES                                                   ║
 * ║  • No uniform scale is applied. Marketed 45 mm/f1.8 and the computed       ║
 * ║    46.307118574 mm/f1.84 design values remain separate.                    ║
 * ║  • Patent filter 400 (surfaces 15–16) is excluded. Its paraxial effect is   ║
 * ║    preserved by the 23.446003732 mm air-equivalent surface-14→IMG gap.     ║
 * ║  • The patent publishes no clear apertures. Surface semi-diameters were     ║
 * ║    inferred from the f/1.84 stop, viewer ray samples at both focus states, ║
 * ║    and the published 14.25 mm field and Fig. 1 as boundary references.     ║
 * ║    The physical stop radius 9.468059698 mm is likewise inferred.            ║
 * ║  • Patent ¶0046 incorrectly calls L3 negative. The numerical prescription, ║
 * ║    Fig. 1, and claim 10 establish a positive meniscus; raw R/d/nd values    ║
 * ║    are unchanged.                                                            ║
 * ║  • The normalized S14→IMG spacing exceeds the computed d-line BFL by      ║
 * ║    0.026539705 mm; this source-precision residual is retained.                ║
 * ║  • The published close row is preserved even though D0=407.1 mm leaves a   ║
 * ║    1.687756085 mm paraxial image-plane B residual after normalization.       ║
 * ║  • The patent supplies nd and νd only. nC, nF, ng, and dPgF are omitted     ║
 * ║    rather than inferred from non-unique glass-class matches. Compatible      ║
 * ║    catalog curves do not identify Samsung's production supplier.             ║
 * ║  • A 2026-08-04 Figure 1 audit found all hand-read rims within the           ║
 * ║    repository's 25% change threshold, so inferred SDs remain unchanged.      ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "samsung-nx-45mm-f18",
  maker: "Samsung",
  name: "SAMSUNG 45mm f/1.8",
  subtitle: "US 2013/0314588 A1 Example 1 — production correlation to the Samsung 45mm f/1.8",
  specs: [
    "7 ELEMENTS / 6 GROUPS",
    "45mm f/1.8 (MARKETED)",
    "46.307mm f/1.84 (DESIGN)",
    "2ω = 35.1°",
    "PUBLISHED INNER FOCUS",
  ],

  focalLengthMarketing: 45,
  focalLengthDesign: 46.307118574,
  apertureMarketing: 1.8,
  apertureDesign: 1.84,
  lensMounts: ["samsung-nx"],
  imageFormat: "aps-c",
  patentNumber: "US 2013/0314588 A1",
  patentAuthors: ["Yong-su Kim"],
  patentAssignees: ["Samsung Electronics Co., Ltd."],
  patentYear: 2013,
  elementCount: 7,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.87387,
      vd: 28.7,
      fl: -46.67423,
      glass: "Unmatched (874287; nd=1.87387, νd=28.7)",
      apd: false,
      cemented: "C1",
      role: "Object-side negative meniscus of the cemented front pair.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7139,
      vd: 53.2,
      fl: 29.404758,
      glass: "MP-LAC8-30 catalog equivalent; production supplier unspecified",
      apd: false,
      cemented: "C1",
      role: "Positive constituent of the cemented front pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.79824,
      vd: 45.1,
      fl: 63.339369,
      glass: "Q-LASFPH3S catalog equivalent; production supplier unspecified",
      apd: false,
      role: "Air-spaced positive meniscus completing G1; the patent prose misstates its sign.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4 / Focus",
      type: "Biconcave Negative",
      nd: 1.61799,
      vd: 63.4,
      fl: -31.692127,
      glass: "S-PHM52 catalog equivalent; production supplier unspecified",
      apd: false,
      role: "Single-element negative G2 focus group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      fl: 24.023495,
      glass: "S-LAH55 catalog equivalent; production supplier unspecified",
      apd: false,
      role: "Front positive collector of G3.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: 45.43415,
      glass: "S-LAH55 catalog equivalent; production supplier unspecified",
      apd: false,
      role: "Second positive element of G3.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.76495,
      vd: 24.9,
      fl: -20.219016,
      glass: "Unmatched (765249; nd=1.76495, νd=24.9)",
      apd: false,
      role: "Rear negative element of G3.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 27.807, d: 1.3, nd: 1.87387, elemId: 1, sd: 15.2 },
    { label: "2", R: 16.174, d: 5.49, nd: 1.7139, elemId: 2, sd: 14.0 },
    { label: "3", R: 60.506, d: 0.1, nd: 1.0, elemId: 0, sd: 13.2 },
    { label: "4", R: 33.39, d: 2.87, nd: 1.79824, elemId: 3, sd: 13.0 },
    { label: "5", R: 94.571, d: 2.99, nd: 1.0, elemId: 0, sd: 12.6 },
    { label: "6", R: -156.34, d: 1.2, nd: 1.61799, elemId: 4, sd: 10.7 },
    { label: "7", R: 22.456, d: 6.81, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "STO", R: 1e15, d: 12.88, nd: 1.0, elemId: 0, sd: 9.468059698334283 },
    { label: "9", R: 34.75, d: 4.41, nd: 1.83481, elemId: 5, sd: 11.2 },
    { label: "10", R: -44.687, d: 0.5, nd: 1.0, elemId: 0, sd: 11.2 },
    { label: "11", R: 33.66, d: 2.94, nd: 1.83481, elemId: 6, sd: 11.1 },
    { label: "12", R: 287.183, d: 1.34, nd: 1.0, elemId: 0, sd: 10.2 },
    { label: "13", R: -43.649, d: 1.2, nd: 1.76495, elemId: 7, sd: 9.45 },
    { label: "14", R: 24.24, d: 23.446003731564687, nd: 1.0, elemId: 0, sd: 9.3 },
  ],

  asph: {},

  /* ── Published focus movement ── */
  var: {
    "5": [2.99, 7.01],
    "7": [6.81, 2.78],
  },
  varLabels: [
    ["5", "D1"],
    ["7", "D2"],
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 FOCUS (−)", fromSurface: "6", toSurface: "7" },
    { text: "G3 (+)", fromSurface: "9", toSurface: "14" },
  ],
  doublets: [{ text: "C1", fromSurface: "1", toSurface: "3" }],

  closeFocusM: 0.45,
  focusDescription:
    "Focus status PUBLISHED: the single biconcave G2 element moves imageward while D1/D2 change from 2.99/6.81 mm to 7.01/2.78 mm. The source implies 4.02–4.03 mm of travel because the two-decimal gap sums differ by 0.01 mm. No reconstruction replaces the published close row; D0=407.1 mm is not an exact paraxial conjugate with the retained image plane.",

  nominalFno: 1.84,
  fstopSeries: [1.84, 2, 2.8, 4, 5.6, 8, 11, 16, 22],

  yScFill: 0.58,
} satisfies LensDataInput;

export default LENS_DATA;
