/*
GOERZ DOUBLE OBJECTIVE 240mm f/7.6 (GB 1898/12,859, sole example)

Source: British patent No. 12,859 of A.D. 1898, Carl Paul Goerz and Emil von Hoegh, Friedenau near Berlin, "Improved
Double Objective for Photographic and the like purposes", application 8 June 1898, complete specification accepted
6 August 1898; read on the page images of the Espacenet original document (GB189812859A, five pages). The patent
prints one numerical example, without a number, on page 2: "The constructional elements of a double objective of this
kind". It is the English patent of 1898 that von Rohr cites for his Fig. 147 without a number.

Printed by the patent, for one half (the "single system" of Fig. 1, biconcave lens L1 on the stop side): R1 = 71.973,
R2 = 88.944, R3 = 130.924, R4 = 59.309; d1 = 2.246 (thickness of L1), d2 = 1.813 (air space), d3 = 4.934
(thickness of L2); Δ = 12.043 (air space between both single systems); nD L1 = 1.5356, L2 = 1.6112; relative
dispersion (nD - 1)/(nC - nF) L1 = 50.8, L2 = 58.6; focal length 240 mm, effective aperture 32 mm, effective angle of
the image over 80°. The radii are printed unsigned. Signs follow the claim and Figs. 1 and 3: L1 biconcave, L2
biconvex, the two halves mirrored about the stop with the biconcave lenses inside. The front half here is the
patent's half reversed (L2 outside), so the file's surfaces 1-4 are the patent's R4-R1 and 5-8 its R1-R4.

Native patent scale; no scaling. The example traces to EFL 243.032 mm (+1.26 % on the stated 240). The f-number,
7.6, is the traced EFL over the 32 mm effective aperture (the patent prints no ratio). Von Rohr 1899, p. 392, Fig. 147
("E. von Höegh: Objektiv mit acht reflektirenden Flächen") prints this example divided by about 2.432, his own
reduction to f = 100, and rounded to 0.1 mm, listed from the front: his r1-r4 are R4, R3, R2, R1.

Model additions: the stop, centred in Δ (6.0215 + 6.0215; Fig. 3 draws the diaphragm there); the last gap, the
computed paraxial back focus 229.115 mm; the f-stop list; the field limit 40°, half the printed "over 80°"; element
focal lengths, computed thick in air. Clear radii 17.8 mm on every surface from Fig. 3, measured on the rear half,
which is drawn close to the printed axial spacings; the front half is drawn about 0.82-0.87 of its size, although the
table defines two equal halves.

Indices: sodium D (indexReference "D"), the patent's "refractive index for line D", with its relative dispersion
across C and F stored as νD. Neither pair matches a catalog glass at d; no catalog glass is substituted. The glass
names in the labels are von Rohr's (p. 392); the patent names none.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "goerz-double-objective-240mm-f76-gb189812859",
  maker: "Goerz",
  name: "GOERZ DOUBLE OBJECTIVE 240mm f/7.6 (GB 1898/12,859 Design)",
  subtitle: "GB 1898/12,859 — von Höegh's four air-spaced lenses, two crown–flint halves about a central stop",
  catalog: {
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "f = 240 mm PATENT / 243.03 mm TRACED",
      "f/7.6 (32 mm EFFECTIVE APERTURE)",
      "2ω > 80° (PATENT)",
      "nD / νD",
      "ALL-SPHERICAL",
    ],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: { design: 240 },
    fNumber: { design: 7.6 },
  },
  source: {
    patentNumber: "GB 1898/12,859",
    example: { label: "Sole example", id: null },
    patentYear: 1898,
    authors: ["Carl Paul Goerz", "Emil von Höegh"],
    assignees: [],
    sdSource: "figure-measured",
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Heaviest baryta crown",
      type: "Biconvex Positive",
      nd: 1.6112,
      vd: 58.6,
      indexReference: "D",
      focalLengthMm: 67.5,
      glass: "Unmatched (GB 1898/12,859 nD/νD only)",
      role: "Outer collective of the front half (the patent's L2, reversed); high-index crown carrying the strongest surface.",
    },
    {
      id: 2,
      name: "L2",
      label: "Borosilicate flint",
      type: "Biconcave Negative",
      nd: 1.5356,
      vd: 50.8,
      indexReference: "D",
      focalLengthMm: -73.9,
      glass: "Unmatched (GB 1898/12,859 nD/νD only)",
      role: "Low-index biconcave lens of the front half (the patent's L1), behind the air lens; concave toward the stop.",
    },
    {
      id: 3,
      name: "L3",
      label: "Borosilicate flint",
      type: "Biconcave Negative",
      nd: 1.5356,
      vd: 50.8,
      indexReference: "D",
      focalLengthMm: -73.9,
      glass: "Unmatched (GB 1898/12,859 nD/νD only)",
      role: "The patent's L1 in the rear half: low-index biconcave lens next to the stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Heaviest baryta crown",
      type: "Biconvex Positive",
      nd: 1.6112,
      vd: 58.6,
      indexReference: "D",
      focalLengthMm: 67.5,
      glass: "Unmatched (GB 1898/12,859 nD/νD only)",
      role: "The patent's L2 in the rear half: outer high-index collective.",
    },
  ],
  surfaces: [
    { label: "1", R: 59.309, d: 4.934, sd: 17.8, medium: 1 }, // R4; sd from Fig. 3 (rear half)
    { label: "2", R: -130.924, d: 1.813, sd: 17.8 }, // R3
    { label: "3", R: -88.944, d: 2.246, sd: 17.8, medium: 2 }, // R2
    { label: "4", R: 71.973, d: 6.0215, sd: 17.8 }, // R1; Δ = 12.043 split at the centre
    { label: "STO", R: "flat", d: 6.0215 },
    { label: "5", R: -71.973, d: 2.246, sd: 17.8, medium: 3 }, // R1
    { label: "6", R: 88.944, d: 1.813, sd: 17.8 }, // R2
    { label: "7", R: 130.924, d: 4.934, sd: 17.8, medium: 4 }, // R3
    { label: "8", R: -59.309, d: 229.115, sd: 17.8 }, // R4; computed paraxial back focus
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only patent example; the patent gives no close-focus data.",
  },
  aperture: { nominalFNumber: 7.6, fStops: [7.6, 11, 16, 22], maxFNumber: 22 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 40 },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "4" },
    { text: "REAR", fromSurface: "5", toSurface: "8" },
  ],

  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
