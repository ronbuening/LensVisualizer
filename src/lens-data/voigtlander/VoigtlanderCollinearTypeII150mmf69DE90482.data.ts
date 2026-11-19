/*
VOIGTLÄNDER COLLINEAR TYPE II 150mm f/6.9 (DE 90482 C, sole example)

Source: Kaiserliches Patentamt, Patentschrift Nr. 90482 (Klasse 57), Voigtländer & Sohn in Braunschweig,
"Photographisches Objektiv", patented from 22 May 1895, issued 29 January 1897 (scan stamped "Gelöscht"); read on
the page images of the Espacenet original document. The patent prints one numerical example, without a number:
"Bei einer Brennweite von 150 mm und einer Oeffnung von 28 mm hat es folgende Elemente". It names no inventor; von
Rohr (1899) credits the design to David Kaempfer and calls it the Collinear, Typus II. Voigtländer never introduced
it: the Collinear sold as Series II (1:6.3) was the Type I design of Steinheil's patent 88 505.

Printed by the patent: r1 = 49,4 mm, r2 = 16,7, r3 = 21,95, r4 = 62,2; d1 = 2 mm, d2 = 2,7, d3 = 4,6; "Abstand der
beiden Hälften" D = 10 mm; L1 nD 1,5682 / nF 1,57637, L2 1,5262 / 1,53347, L3 1,6112 / 1,61873; f = 150 mm,
Oeffnung 28 mm. The radii carry no signs; the drawing (page 3) shows each half as three menisci concave toward the
centre and the rear half mirrored (L3, L2, L1 from the centre out), so r1-r4 > 0 and the rear half negative.

Native patent scale; no scaling. The example traces to EFL 151.362 mm (+0.91 % on the stated 150). Von Rohr 1899,
p. 385, Fig. 144 ("D. Kaempfer: Collinear, Typus II") prints this example reduced to f = 100: every value of his
table is reproduced by one reduction factor 100/f with f between 151.30 and 151.52 mm, not by 150.

Model additions: the stop, centred in D (5 + 5 mm; the patent draws none, von Rohr's b1 = b2 = 3.3 and the symmetry
place it there), its radius derived from 1:6.9, von Rohr's computation aperture (the patent prints no f-number; its
28 mm "Oeffnung" is the lens diameter, see below); the last gap, the computed paraxial back focus 139.199 mm; the
f-stop list; the field limit 30.5 deg, von Rohr's half-field (the patent prints none); element focal lengths,
computed thick in air.

Rims: 14.0 mm on every surface, the printed 28 mm opening read as the lens diameter. The drawing is close to scale
along the axis (1750 px at 600 dpi for the 28.6 mm vertex length) and draws both halves square-ended at a semi-width
of 902 px (14.7 mm on that scale), with L2 running out to an edge at the rim; with the printed radii L2 reaches its
edge at 14.2 mm. Von Rohr's Fig. 144 draws the cells at the reduced 28 mm and a narrower 1:6.9 entrance beam. Read as
an entrance pupil instead (1:5.4), the opening would leave the marginal ray overcorrected by +9.5 mm.

Indices: sodium D (indexReference "D"). The patent prints nF beside each nD but no nC, so no Abbe number can be
formed; nF is kept as printed and the engine, which needs nC or a nu value for chromatic tiers, traces at nD alone.
No catalog glass is substituted. The glass names in the labels are von Rohr's (p. 386); the patent names none.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "voigtlander-collinear-ii-150mm-f69-de90482",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER COLLINEAR TYPE II 150mm f/6.9 (DE 90482 Design)",
  subtitle: "DE 90482 C — Kaempfer's three-meniscus Collinear Type II; never introduced, not the Series II Collinear",
  visible: false,

  catalog: {
    specs: [
      "6 ELEMENTS / 2 GROUPS",
      "f = 150 mm PATENT / 151.36 mm TRACED",
      "f/6.9 (VON ROHR)",
      "2ω = 61° (VON ROHR)",
      "nD / nF ONLY",
      "ALL-SPHERICAL",
    ],
    elementCount: 6,
    groupCount: 2,
    focalLengthMm: { design: 150 },
    fNumber: { design: 6.9 },
  },
  source: {
    patentNumber: "DE 90482 C",
    example: { label: "Sole example", id: null },
    patentYear: 1897,
    authors: [],
    assignees: ["Voigtländer & Sohn"],
    sdSource: "figure-measured",
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Baryta light flint",
      type: "Negative Meniscus",
      nd: 1.5682,
      indexReference: "D",
      focalLengthMm: -45.4,
      glass: "Unmatched (DE 90482 C nD/nF only, no nC published)",
      role: "Outer negative meniscus of the front half, concave toward the stop; the cell's most dispersive glass.",
      cemented: "T1",
      nF: 1.57637,
    },
    {
      id: 2,
      name: "L2",
      label: "High-dispersion crown",
      type: "Positive Meniscus",
      nd: 1.5262,
      indexReference: "D",
      focalLengthMm: 112.7,
      glass: "Unmatched (DE 90482 C nD/nF only, no nC published)",
      role: "Low-index positive middle meniscus enclosed by L1 and L3; runs out to an edge at the 28 mm rim.",
      cemented: "T1",
      nF: 1.53347,
    },
    {
      id: 3,
      name: "L3",
      label: "Heaviest baryta crown",
      type: "Positive Meniscus",
      nd: 1.6112,
      indexReference: "D",
      focalLengthMm: 53.2,
      glass: "Unmatched (DE 90482 C nD/nF only, no nC published)",
      role: "High-index positive meniscus next to the stop; carries most of the half's collective power.",
      cemented: "T1",
      nF: 1.61873,
    },
    {
      id: 4,
      name: "L4",
      label: "Heaviest baryta crown",
      type: "Positive Meniscus",
      nd: 1.6112,
      indexReference: "D",
      focalLengthMm: 53.2,
      glass: "Unmatched (DE 90482 C nD/nF only, no nC published)",
      role: "Mirror of L3 (the patent's rear L3): high-index positive meniscus next to the stop.",
      cemented: "T2",
      nF: 1.61873,
    },
    {
      id: 5,
      name: "L5",
      label: "High-dispersion crown",
      type: "Positive Meniscus",
      nd: 1.5262,
      indexReference: "D",
      focalLengthMm: 112.7,
      glass: "Unmatched (DE 90482 C nD/nF only, no nC published)",
      role: "Mirror of L2 (the patent's rear L2): low-index positive middle meniscus of the rear half.",
      cemented: "T2",
      nF: 1.53347,
    },
    {
      id: 6,
      name: "L6",
      label: "Baryta light flint",
      type: "Negative Meniscus",
      nd: 1.5682,
      indexReference: "D",
      focalLengthMm: -45.4,
      glass: "Unmatched (DE 90482 C nD/nF only, no nC published)",
      role: "Mirror of L1 (the patent's rear L1): outer negative meniscus of the rear half.",
      cemented: "T2",
      nF: 1.57637,
    },
  ],
  surfaces: [
    { label: "1", R: 49.4, d: 2, sd: 14, medium: 1 },
    { label: "2", R: 16.7, d: 2.7, sd: 14, medium: 2 },
    { label: "3", R: 21.95, d: 4.6, sd: 14, medium: 3 },
    { label: "4", R: 62.2, d: 5, sd: 14 }, // D = 10 split at the centre
    { label: "STO", R: "flat", d: 5 },
    { label: "5", R: -62.2, d: 4.6, sd: 14, medium: 4 },
    { label: "6", R: -21.95, d: 2.7, sd: 14, medium: 5 },
    { label: "7", R: -16.7, d: 2, sd: 14, medium: 6 },
    { label: "8", R: -49.4, d: 139.199, sd: 14 }, // computed paraxial back focus
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only patent example; the patent gives no close-focus data.",
  },
  aperture: { nominalFNumber: 6.9, fStops: [6.9, 8, 11, 16], maxFNumber: 16 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 30.5 },

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
