/*
GOERZ DOPPEL-ANASTIGMAT SERIES III 240mm f/7.7 (DE 74437 C, sole numerical example)

Source: Kaiserliches Patentamt, Patentschrift Nr. 74437 (Klasse 57: Photographie), C. P. Goerz in Schöneberg bei
Berlin, "Sphärisch, chromatisch und astigmatisch corrigirtes Objectiv", patented from 20 December 1892, issued
4 April 1894 (Espacenet original-document scan, read on the page images). The patent names no inventor; the design is
Emil von Höegh's. It prints one numerical example, without a number, on page 2 and draws it in Fig. 3 "in
natürlicher Grösse" (at natural size) in its barrel.

Printed by the patent: R1 = R8 = 45,835, R2 = R7 = 54,324, R3 = R6 = 19,853, R4 = R5 = 49,088; d1 = d6 = 7,334,
d2 = d5 = 1,833, d3 = d4 = 4,584, Luftabstand 11,00 mm; nD / nG′ 1,61310 / 1,62683 (L1, L6), 1,56804 / 1,58182
(L2, L5), 1,51497 / 1,52663 (L3, L4); f = 240 mm; free lens opening 36 mm; largest effective aperture 30 mm (1:8);
axial foci for central, F:12 and F:8 rays in D and G′ (central FD = 223,275, FG′ = 223,065). The radii are printed
unsigned. Signs follow the claim (a negative lens enclosed by two positive lenses of higher and lower index), the
text's Fig. 1 cell (crown a, flint b, crown a¹) and Fig. 3: L1 biconvex (r1 > 0, r2 < 0), L2 biconcave (r3 > 0),
L3 a meniscus concave toward the stop (r4 > 0); the rear cell mirrors the front.

Native patent scale; no scaling. The example traces to EFL 240.242 mm (+0.10 % on the stated 240) and a paraxial
back focus of 223.265 mm against the printed central-ray focus of 223.275 mm; the paraxial D-to-G′ focus shift,
-0.212 mm, matches the printed -0.210. Von Rohr 1899, p. 376, Fig. 138 ("E. von Höegh: Doppel-Anastigmat") prints
this example divided by 2.4 and rounded to 0.1 mm; every entry agrees except r2 = r7, which the patent's 54.324
reduces to 22.6 where von Rohr prints 22.7.

Production identity: the example is catalogue No. 4, the 240 mm size, of the Series III Doppel-Anastigmat, which Goerz
rated 1:7.7 (von Rohr 1899). A surviving Series III No. 4, 240 mm, serial 16411 (about 1893), has an iris
whose Goerz scale starts at 6, i.e. f/8, the patent's largest effective aperture (earlyphotography.co.uk, entry L186,
which cites DRP 74437 for the type). No Goerz catalogue prints a prescription, so the match rests on the shared focal
length and aperture and on the series' patent. `fNumber.marketing` is the series rating, `design` the patent's 1:8.
No `imageFormat`: that record lists the lens for whole-plate (6.5 x 8.5 in), which has no canonical format id.

Model additions: the stop, centred in the 11.00 mm air space (5.5 + 5.5; Fig. 3 draws the stop plate there), its
radius derived from 1:8; the last gap, the computed paraxial back focus; the f-stop list; the field limit 36 deg,
von Rohr's computed half-field (the patent computes astigmatism with a 30 deg chief ray and prints no field angle);
element focal lengths, computed thick in air. Clear radii from Fig. 3, which is drawn to scale (vertex length
866.8 px at 600 dpi for 38.502 mm): the outer surfaces 18.0, the text's 36 mm free opening, which the drawn glass
(36.96 mm diameter, a narrow barrel bead over the rim) confirms; the inner surfaces 14.7, the drawn inner lips of
both cells (14.73 mm), just inside the 15.10 mm knife edge of the inner menisci.

Indices: sodium D (indexReference "D"), the patent's "Linie D des Sonnenspectrums". The second index is for the
hydrogen line printed "H8" with the column head nG′, i.e. G′ = Hγ (about 434.0 nm), the line of the printed FG′ foci.
G′ is not the schema's mercury g line and the patent prints no nC or nF, so nG′ is kept in comments only and the
model traces at nD alone. No catalog glass is substituted. The glass names in the labels are von Rohr's (p. 375);
the patent names only crown and flint.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "goerz-doppel-anastigmat-series-iii-240mm-f77",
  maker: "Goerz",
  name: "GOERZ DOPPEL-ANASTIGMAT SERIES III 240mm f/7.7",
  subtitle: "DE 74437 C — the patent's sole numerical example, drawn at natural size in Fig. 3",
  catalog: {
    lensMounts: ["large-format-lens-board"],
    specs: [
      "6 ELEMENTS / 2 GROUPS",
      "f = 240 mm PATENT / 240.24 mm TRACED",
      "f/8 PATENT / f/7.7 MARKETED",
      "2ω = 72° (VON ROHR)",
      "nD ONLY",
      "ALL-SPHERICAL",
    ],
    elementCount: 6,
    groupCount: 2,
    focalLengthMm: { marketing: 240, design: 240 },
    fNumber: { marketing: 7.7, design: 8 },
  },
  source: {
    patentNumber: "DE 74437 C",
    example: { label: "Sole example", id: null },
    patentYear: 1894,
    authors: [],
    assignees: ["C. P. Goerz"],
    sdSource: "figure-measured",
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Heavy barium silicate crown",
      type: "Biconvex Positive",
      nd: 1.6131,
      indexReference: "D",
      focalLengthMm: 41.7,
      glass: "Unmatched (DE 74437 C nD/nG′ only, no nC or nF published)",
      role: "Outer high-index crown of the front triplet; its rear face r2 is the weak collective cemented surface.",
      cemented: "T1",
      // Patent nG′ = 1.62683 (G′ = Hγ, not the schema's mercury g, so not stored as ng).
    },
    {
      id: 2,
      name: "L2",
      label: "Baryta light flint",
      type: "Biconcave Negative",
      nd: 1.56804,
      indexReference: "D",
      focalLengthMm: -25.4,
      glass: "Unmatched (DE 74437 C nD/nG′ only, no nC or nF published)",
      role: "Enclosed negative flint of intermediate index; its rear face r3 is the strong dispersive cemented surface.",
      cemented: "T1",
      // Patent nG′ = 1.58182.
    },
    {
      id: 3,
      name: "L3",
      label: "Soft silicate crown",
      type: "Positive Meniscus",
      nd: 1.51497,
      indexReference: "D",
      focalLengthMm: 61.5,
      glass: "Unmatched (DE 74437 C nD/nG′ only, no nC or nF published)",
      role: "Low-index crown meniscus next to the stop, concave toward it; runs to a knife edge at 15.1 mm.",
      cemented: "T1",
      // Patent nG′ = 1.52663.
    },
    {
      id: 4,
      name: "L4",
      label: "Soft silicate crown",
      type: "Positive Meniscus",
      nd: 1.51497,
      indexReference: "D",
      focalLengthMm: 61.5,
      glass: "Unmatched (DE 74437 C nD/nG′ only, no nC or nF published)",
      role: "Mirror of L3 in the rear triplet: low-index crown meniscus concave toward the stop.",
      cemented: "T2",
      // Patent nG′ = 1.52663.
    },
    {
      id: 5,
      name: "L5",
      label: "Baryta light flint",
      type: "Biconcave Negative",
      nd: 1.56804,
      indexReference: "D",
      focalLengthMm: -25.4,
      glass: "Unmatched (DE 74437 C nD/nG′ only, no nC or nF published)",
      role: "Mirror of L2: enclosed negative flint of the rear triplet.",
      cemented: "T2",
      // Patent nG′ = 1.58182.
    },
    {
      id: 6,
      name: "L6",
      label: "Heavy barium silicate crown",
      type: "Biconvex Positive",
      nd: 1.6131,
      indexReference: "D",
      focalLengthMm: 41.7,
      glass: "Unmatched (DE 74437 C nD/nG′ only, no nC or nF published)",
      role: "Mirror of L1: outer high-index crown of the rear triplet.",
      cemented: "T2",
      // Patent nG′ = 1.62683.
    },
  ],
  surfaces: [
    { label: "1", R: 45.835, d: 7.334, sd: 18, medium: 1 }, // R1; outer sd = 36 mm free opening / 2
    { label: "2", R: -54.324, d: 1.833, sd: 18, medium: 2 }, // R2
    { label: "3", R: 19.853, d: 4.584, sd: 14.7, medium: 3 }, // R3; inner sd = Fig. 3 cell lip
    { label: "4", R: 49.088, d: 5.5, sd: 14.7 }, // R4; Luftabstand 11.00 split at the centre
    { label: "STO", R: "flat", d: 5.5 },
    { label: "5", R: -49.088, d: 4.584, sd: 14.7, medium: 4 }, // R5
    { label: "6", R: -19.853, d: 1.833, sd: 14.7, medium: 5 }, // R6
    { label: "7", R: 54.324, d: 7.334, sd: 18, medium: 6 }, // R7
    { label: "8", R: -45.835, d: 223.265, sd: 18 }, // R8; computed paraxial back focus (printed FD 223.275)
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity only; the patent gives no close-focus data.",
  },
  aperture: { nominalFNumber: 8, fStops: [8, 11, 16, 22], maxFNumber: 22 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 36 },

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
