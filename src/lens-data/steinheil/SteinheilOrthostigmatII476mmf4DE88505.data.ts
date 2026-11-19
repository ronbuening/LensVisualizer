/*
STEINHEIL ORTHOSTIGMAT TYPE II 476mm f/4 (DE 88505 C, second numerical example)

Source: Kaiserliches Patentamt, Patentschrift Nr. 88505 (Klasse 57), Dr. Rudolf Steinheil in München, "Objectiv für
photographische Zwecke", patented from 28 November 1893, issued 4 September 1896; transcribed from the second
edition of 12 September 1899 (DEPATISnet DE000000088505A, read on the page image). The patent prints two numerical
examples without numbers; this file is the second, on page 2: "während bei einer Brennweite von 476 mm und einem
Oeffnungsverhältniss 1:4 die Elemente ... die folgenden sind". The first (493 mm, 1:6,2, other glasses) is a separate
prescription.

Printed by the patent: X0 = 59,5; R0 = R14 = +229 mm, R2 = R12 = ±562,95, R4 = R10 = ±142,03, R6 = R8 = -490,196;
D1 = D13 = 20, D3 = D11 = 25, D5 = D9 = 4, Abstand D7 = 50; nD/nF 1,62356/1,63498 (D1, D13), 1,50786/1,51351
(D3, D11), 1,60304/1,61428 (D5, D9); f = 476 mm, 1:4. The patent's even R indices are surfaces 1-8 here (R0 -> 1,
R2 -> 2, ..., R14 -> 8), its odd D indices the gaps. Signs: the patent marks the outer faces +, the faces toward the
lens centre -, and the cemented faces ±; read with the claim (positive lens enclosed by a biconvex and a biconcave
lens) and the drawing, the front cell is r1 > 0, r2 < 0, r3 < 0, r4 > 0, mirrored behind the centre.

Native patent scale; no scaling. The example traces to EFL 478.384 mm (+0.50 % on the stated 476). X0 = 59.5 mm is
the incidence height of the computed marginal ray: 1:4 at 476 mm, 1:4.02 at the traced focal length, which the stop
uses. Von Rohr 1899, p. 383, Fig. 142 ("R. Steinheil: Orthostigmat. Typus II.") prints this example reduced to
fD = 100 and computed for 1:4.02 and omega = 29 deg: one reduction factor with f between 478.50 and 478.58 mm gives
every value of his table after rounding to 0.1 mm; the traced 478.384 mm misses r2 and r4 by 0.08 and 0.07 mm.

Model additions: the stop, centred in D7 (25 + 25 mm; the patent gives no stop position, von Rohr's b1 = b2 and the
symmetry place it there), its radius derived from 1:4.02; the last gap, the computed paraxial back focus 412.923 mm;
the f-stop list; the field limit 29 deg, von Rohr's computed half-field (the patent prints none); element focal
lengths, computed thick in air. Clear radii: 65 mm on every surface, measured from the patent drawing (right section
of the drawing sheet, page 5 of the scan: square-ended cells 525 px (front) and 521 px (rear) in semi-width for a
1189 px vertex length of 148 mm). The drawing's spacings are to scale and its faces r1 and r3 come within about
20 % of the printed curves, but r2 and the inner faces r4/r5 are drawn about twice as deep, so it gives the rims but
not the curves.

Indices: sodium D (indexReference "D"). The patent prints nF beside each nD but no nC, so no Abbe number can be
formed; nF is kept as printed and the engine, which needs nC or a nu value for chromatic tiers, traces at nD alone.
No catalog glass is substituted. The glass names in the labels are von Rohr's (p. 383); the patent names none.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "steinheil-orthostigmat-ii-476mm-f4-de88505",
  maker: "Steinheil",
  name: "STEINHEIL ORTHOSTIGMAT TYPE II 476mm f/4 (DE 88505 Design)",
  subtitle: "DE 88505 C — the second of the patent's two unnumbered examples; the fast portrait form",
  catalog: {
    specs: [
      "6 ELEMENTS / 2 GROUPS",
      "f = 476 mm PATENT / 478.38 mm TRACED",
      "f/4 PATENT / f/4.02 FROM X0 = 59.5 mm",
      "2ω = 58° (VON ROHR)",
      "nD / nF ONLY",
      "ALL-SPHERICAL",
    ],
    elementCount: 6,
    groupCount: 2,
    focalLengthMm: { design: 476 },
    fNumber: { design: 4 },
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
      label: "Baryta flint",
      type: "Biconvex Positive",
      nd: 1.62356,
      indexReference: "D",
      focalLengthMm: 263.6,
      glass: "Unmatched (DE 88505 C nD/nF only, no nC published)",
      role: "Outer biconvex collective of the front triplet, a flint of higher index than the crown it encloses.",
      cemented: "T1",
      nF: 1.63498,
    },
    {
      id: 2,
      name: "L2",
      label: "Borosilicate crown",
      type: "Positive Meniscus",
      nd: 1.50786,
      indexReference: "D",
      focalLengthMm: 366.7,
      glass: "Unmatched (DE 88505 C nD/nF only, no nC published)",
      role: "Low-index positive lens enclosed by L1 and L3, convex toward the stop; the patent's enclosed lens.",
      cemented: "T1",
      nF: 1.51351,
    },
    {
      id: 3,
      name: "L3",
      label: "Ordinary light flint",
      type: "Biconcave Negative",
      nd: 1.60304,
      indexReference: "D",
      focalLengthMm: -182.2,
      glass: "Unmatched (DE 88505 C nD/nF only, no nC published)",
      role: "Thin biconcave flint next to the stop; its junction r3 with L2 is the deepest curve of the cell.",
      cemented: "T1",
      nF: 1.61428,
    },
    {
      id: 4,
      name: "L4",
      label: "Ordinary light flint",
      type: "Biconcave Negative",
      nd: 1.60304,
      indexReference: "D",
      focalLengthMm: -182.2,
      glass: "Unmatched (DE 88505 C nD/nF only, no nC published)",
      role: "Mirror of L3 in the rear triplet: thin biconcave flint next to the stop.",
      cemented: "T2",
      nF: 1.61428,
    },
    {
      id: 5,
      name: "L5",
      label: "Borosilicate crown",
      type: "Positive Meniscus",
      nd: 1.50786,
      indexReference: "D",
      focalLengthMm: 366.7,
      glass: "Unmatched (DE 88505 C nD/nF only, no nC published)",
      role: "Mirror of L2: low-index positive lens of the rear triplet, convex toward the stop.",
      cemented: "T2",
      nF: 1.51351,
    },
    {
      id: 6,
      name: "L6",
      label: "Baryta flint",
      type: "Biconvex Positive",
      nd: 1.62356,
      indexReference: "D",
      focalLengthMm: 263.6,
      glass: "Unmatched (DE 88505 C nD/nF only, no nC published)",
      role: "Mirror of L1: outer biconvex collective of the rear triplet.",
      cemented: "T2",
      nF: 1.63498,
    },
  ],
  surfaces: [
    { label: "1", R: 229, d: 20, sd: 65, medium: 1 }, // R0
    { label: "2", R: -562.95, d: 25, sd: 65, medium: 2 }, // R2
    { label: "3", R: -142.03, d: 4, sd: 65, medium: 3 }, // R4
    { label: "4", R: 490.196, d: 25, sd: 65 }, // R6; D7 = 50 split at the centre
    { label: "STO", R: "flat", d: 25 },
    { label: "5", R: -490.196, d: 4, sd: 65, medium: 4 }, // R8
    { label: "6", R: 142.03, d: 25, sd: 65, medium: 5 }, // R10
    { label: "7", R: 562.95, d: 20, sd: 65, medium: 6 }, // R12
    { label: "8", R: -229, d: 412.923, sd: 65 }, // R14; computed paraxial back focus
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only patent example; the patent gives no close-focus data.",
  },
  // X0 = 59.5 mm at the traced EFL 478.384 mm: 478.384 / 119 = 4.020.
  aperture: { nominalFNumber: 4.02, fStops: [4.02, 4.5, 5.6, 8, 11, 16], maxFNumber: 16 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 29 },

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
