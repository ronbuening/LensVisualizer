/*
STEINHEIL ORTHOSTIGMAT TYPE II 493mm f/6.2 (DE 88505 C, first numerical example)

Source: Kaiserliches Patentamt, Patentschrift Nr. 88505 (Klasse 57), Dr. Rudolf Steinheil in München, "Objectiv für
photographische Zwecke", patented from 28 November 1893, issued 4 September 1896; transcribed from the second
edition of 12 September 1899 (DEPATISnet DE000000088505A, read on the page image). The patent prints two numerical
examples without numbers; this file is the first, on page 1: "Bei einer Brennweite von 493 mm ... vom
Oeffnungsverhältniss 1:6,2". The second (476 mm, 1:4, other glasses) is a separate prescription.

Printed by the patent: R0 = R14 = +173,0 mm, R2 = R12 = ±139,66, R4 = R10 = ±77,805, R6 = R8 = -202,47;
D1 = D13 = 20 mm, D3 = D11 = 25, D5 = D9 = 4, Abstand D7 = 50; nD/nF 1,61003/1,61759 (D1, D13), 1,51874/1,52561
(D3, D11), 1,56370/1,57160 (D5, D9); f = 493 mm, 1:6,2. The patent's even R indices are surfaces 1-8 here (R0 -> 1,
R2 -> 2, ..., R14 -> 8), its odd D indices the gaps. Signs: the patent marks the outer faces +, the faces toward the
lens centre -, and the cemented faces ±; read with the claim (positive lens enclosed by a biconvex and a biconcave
lens) and the drawing, the front cell is r1 > 0, r2 < 0, r3 < 0, r4 > 0, mirrored behind the centre.

Native patent scale; no scaling. The example traces to EFL 494.149 mm (+0.23 % on the stated 493). Von Rohr 1899,
p. 383, Fig. 143 ("R. Steinheil: Orthostigmat. Typus II.") prints this example reduced to f = 100: every value of his
table is reproduced by one reduction factor 100/f with f between 493.6 and 493.8 mm.

Model additions: the stop, centred in D7 (25 + 25 mm; the patent gives no stop position, von Rohr and the symmetry
place it there), its radius derived from 1:6.2; the last gap, the computed paraxial back focus 424.962 mm; the
f-stop list; the field limit 28 deg, von Rohr's computed half-field (the patent prints none); element focal lengths,
computed thick in air. Clear radii: 52 mm on every surface, measured from the patent drawing (left section of the
drawing sheet, square-ended cells drawn 419 px in semi-width for a 1190 px vertex length of 148 mm).

Indices: sodium D (indexReference "D"). The patent prints nF beside each nD but no nC, so no Abbe number can be
formed; nF is kept as printed and the engine, which needs nC or a nu value for chromatic tiers, traces at nD alone.
No catalog glass is substituted. The glass names in the labels are von Rohr's (p. 384); the patent names none.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "steinheil-orthostigmat-ii-493mm-f62-de88505",
  maker: "Steinheil",
  name: "STEINHEIL ORTHOSTIGMAT TYPE II 493mm f/6.2 (DE 88505 Design)",
  subtitle: "DE 88505 C — the first of the patent's two unnumbered examples; the slower universal form",
  catalog: {
    specs: [
      "6 ELEMENTS / 2 GROUPS",
      "f = 493 mm PATENT / 494.15 mm TRACED",
      "f/6.2",
      "2ω = 56° (VON ROHR)",
      "nD / nF ONLY",
      "ALL-SPHERICAL",
    ],
    elementCount: 6,
    groupCount: 2,
    focalLengthMm: { design: 493 },
    fNumber: { design: 6.2 },
  },
  source: {
    patentNumber: "DE 88505 C",
    patentYear: 1896,
    authors: ["Rudolf Steinheil"],
    assignees: [],
    sdSource: "figure-measured",
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Heaviest baryta crown",
      type: "Biconvex Positive",
      nd: 1.61003,
      indexReference: "D",
      focalLengthMm: 129.8,
      glass: "Unmatched (DE 88505 C nD/nF only, no nC published)",
      role: "Outer high-index collective of the front triplet; its rear face r2 is the collective cemented surface.",
      cemented: "T1",
      nF: 1.61759,
    },
    {
      id: 2,
      name: "L2",
      label: "High-dispersion crown",
      type: "Positive Meniscus",
      nd: 1.51874,
      indexReference: "D",
      focalLengthMm: 297.6,
      glass: "Unmatched (DE 88505 C nD/nF only, no nC published)",
      role: "Low-index positive lens enclosed by L1 and L3, convex toward the stop; the patent's enclosed lens.",
      cemented: "T1",
      nF: 1.52561,
    },
    {
      id: 3,
      name: "L3",
      label: "Baryta light flint",
      type: "Biconcave Negative",
      nd: 1.5637,
      indexReference: "D",
      focalLengthMm: -99.2,
      glass: "Unmatched (DE 88505 C nD/nF only, no nC published)",
      role: "Medium-index biconcave lens next to the stop; its front face r3 is the dispersive cemented surface.",
      cemented: "T1",
      nF: 1.5716,
    },
    {
      id: 4,
      name: "L4",
      label: "Baryta light flint",
      type: "Biconcave Negative",
      nd: 1.5637,
      indexReference: "D",
      focalLengthMm: -99.2,
      glass: "Unmatched (DE 88505 C nD/nF only, no nC published)",
      role: "Mirror of L3 in the rear triplet: biconcave lens next to the stop.",
      cemented: "T2",
      nF: 1.5716,
    },
    {
      id: 5,
      name: "L5",
      label: "High-dispersion crown",
      type: "Positive Meniscus",
      nd: 1.51874,
      indexReference: "D",
      focalLengthMm: 297.6,
      glass: "Unmatched (DE 88505 C nD/nF only, no nC published)",
      role: "Mirror of L2: low-index positive lens of the rear triplet, convex toward the stop.",
      cemented: "T2",
      nF: 1.52561,
    },
    {
      id: 6,
      name: "L6",
      label: "Heaviest baryta crown",
      type: "Biconvex Positive",
      nd: 1.61003,
      indexReference: "D",
      focalLengthMm: 129.8,
      glass: "Unmatched (DE 88505 C nD/nF only, no nC published)",
      role: "Mirror of L1: outer high-index collective of the rear triplet.",
      cemented: "T2",
      nF: 1.61759,
    },
  ],
  surfaces: [
    { label: "1", R: 173, d: 20, sd: 52, medium: 1 }, // R0
    { label: "2", R: -139.66, d: 25, sd: 52, medium: 2 }, // R2
    { label: "3", R: -77.805, d: 4, sd: 52, medium: 3 }, // R4
    { label: "4", R: 202.47, d: 25, sd: 52 }, // R6; D7 = 50 split at the centre
    { label: "STO", R: "flat", d: 25 },
    { label: "5", R: -202.47, d: 4, sd: 52, medium: 4 }, // R8
    { label: "6", R: 77.805, d: 25, sd: 52, medium: 5 }, // R10
    { label: "7", R: 139.66, d: 20, sd: 52, medium: 6 }, // R12
    { label: "8", R: -173, d: 424.962, sd: 52 }, // R14; computed paraxial back focus
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only patent example; the patent gives no close-focus data.",
  },
  aperture: { nominalFNumber: 6.2, fStops: [6.2, 8, 11, 16], maxFNumber: 16 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 28 },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "4" },
    { text: "REAR", fromSurface: "5", toSurface: "8" },
  ],
  doublets: [
    { text: "T1", fromSurface: "1", toSurface: "4" },
    { text: "T2", fromSurface: "5", toSurface: "8" },
  ],

  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
