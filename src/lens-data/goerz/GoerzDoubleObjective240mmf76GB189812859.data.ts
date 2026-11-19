/*
GOERZ VON HÖEGH FOUR-SINGLET OBJECTIVE f/7.6 (von Rohr 1899, Fig. 147)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 392, Fig. 147: "E. von Höegh: Objektiv mit acht reflektirenden Flächen". Quelle: E. von Höegh 9, which von Rohr's
bibliography (p. 415) lists under E. von Höegh and C. P. Goerz with the English patent number left blank and the
notice "A new Goerz lens", British Journal of Photography 45 (1898), No. 2000, pp. 570-571. The text dates the design
to an English patent of 1898 and a German application.

Printed by von Rohr: reduced to fD = 100 mm; computed for 1:7.6 and omega = 30 1/2 deg; r1 = r8 = 24.4,
r2 = r7 = 53.8, r3 = r6 = 36.6, r4 = r5 = 29.6; d1 = d4 = 2.0, d2 = d3 = 0.9; b1 = b4 = 0.7 (crown to flint),
b2 = b3 = 2.5 (flint to stop); nD L1 = L4 = 1.6112 (heaviest baryta crown, nu-bar 45.9), L2 = L3 = 1.5356
(borosilicate flint, nu-bar 39.1). Text results: spherical zones at most -0.1 mm with correction at about 1:10;
oblique pencils satisfactory to about 30 deg; astigmatism strictly corrected at 28 deg. Von Rohr marks no value as
assumed.

Model additions: radius signs from Fig. 147 (L1 and L4 biconvex, L2 and L3 biconcave, halves mirrored about the
stop); last gap = computed paraxial back focus 95.175. The rounded table gives EFL 100.82 (+0.82 %), inside the
half-digit rounding of the table. Clear radii 7.0 on every surface are kept from the package as heuristic values: the
f/7.6 axial beam and the chief ray at the printed 30.5 deg pass; Fig. 147 draws all four lenses at about 6.3 mm, below
the f/7.6 axial beam at the front lens (6.63 mm). Stop radius derived from 1:7.6; f-stop list added; field limited to
the printed omega. Element focal lengths are computed (thick, in air).

Indices are nD only (indexReference "D"): von Rohr's nu-bar is (nD - 1)/(nG' - nD), a photographic blue figure, not
an Abbe number, so the model is monochromatic and no catalog glass is substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "hoegh-four-singlet-1898-von-rohr-1899",
  maker: "Goerz",
  name: "GOERZ VON HÖEGH FOUR-SINGLET OBJECTIVE f/7.6 (von Rohr 1899, Fig. 147)",
  subtitle: "Two identical air-spaced crown and flint halves about a central stop; English patent of 1898",
  catalog: {
    specs: ["4 ELEMENTS / 4 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: { design: 100 },
    fNumber: { design: 7.6 },
  },
  source: {
    sdSource: "heuristic",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 392, Fig. 147",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=148",
      after: "E. von Höegh",
    },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Heaviest baryta crown",
      type: "Biconvex Positive",
      nd: 1.6112,
      indexReference: "D",
      focalLengthMm: 27.7,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Outer collective of the front half; high-index crown carrying the strongest surface, r1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Borosilicate flint",
      type: "Biconcave Negative",
      nd: 1.5356,
      indexReference: "D",
      focalLengthMm: -30.4,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Lower-index negative lens of the front half, behind a thin air meniscus; concave face toward the stop.",
    },
    {
      id: 3,
      name: "L3",
      label: "Borosilicate flint",
      type: "Biconcave Negative",
      nd: 1.5356,
      indexReference: "D",
      focalLengthMm: -30.4,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L2: negative flint of the rear half, concave face toward the stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Heaviest baryta crown",
      type: "Biconvex Positive",
      nd: 1.6112,
      indexReference: "D",
      focalLengthMm: 27.7,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L1: outer collective of the rear half.",
    },
  ],
  surfaces: [
    { label: "1", R: 24.4, d: 2, sd: 7, medium: 1 },
    { label: "2", R: -53.8, d: 0.7, sd: 7 },
    { label: "3", R: -36.6, d: 0.9, sd: 7, medium: 2 },
    { label: "4", R: 29.6, d: 2.5, sd: 7 },
    { label: "STO", R: "flat", d: 2.5 },
    { label: "5", R: -29.6, d: 0.9, sd: 7, medium: 3 },
    { label: "6", R: 36.6, d: 0.7, sd: 7 },
    { label: "7", R: 53.8, d: 2, sd: 7, medium: 4 },
    { label: "8", R: -24.4, d: 95.175, sd: 7 },
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity only; von Rohr computes the design for a distant object.",
  },
  aperture: { nominalFNumber: 7.6, fStops: [7.6, 8, 11, 16], maxFNumber: 16 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 30.5 },

  groups: [
    { text: "FRONT HALF", fromSurface: "1", toSurface: "4" },
    { text: "REAR HALF", fromSurface: "5", toSurface: "8" },
  ],

  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
