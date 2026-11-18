/*
STEINHEIL PERISKOP f/40 (von Rohr 1899, Fig. 109)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 288, Fig. 109: "A. Steinheil: Periskop". Quelle: J. M. Eder 1. 146, that is Eder's Die photographischen Objektive
(Halle, 1891), p. 146. Tafel III redraws the lens at natural size as No. 109 with the astigmatism curve 109b.

Printed by von Rohr: reduced to fD = 100 mm; relative aperture 1:40, computed for omega = 46 deg; r1 = r4 = 17.5,
r2 = r3 = 20.8; d1 = d2 = 1.3; b1 = b2 = 6.3 (lens to stop on each side); nD L1 = L2 = 1.5233. No glass name in the
table; the text calls the lenses simple crown-glass menisci without chromatic correction. Von Rohr marks no value as
assumed: by his notes on the plates he traced Eder's two-decimal data (r 17.53 / 20.76, d 1.26, gap 12.56) and only
then reduced and rounded them.

Model additions: radius signs from Fig. 109 and Tafel III (two menisci convex outward, concave toward the central
stop). Last gap = computed paraxial back focus 90.948. The rounded table gives EFL 98.697 (-1.3 %), inside the
half-digit rounding of r1 (17.54 alone gives 99.94). Clear radii 6.28 on all four surfaces: half of the 12.56 mm
lens diameter Eder prints with his data; Fig. 109 and Tafel III measure the lenses at 6.1-6.4 mm, so the drawings
confirm the value. The chief ray passes these rims up to 42.3 deg; the printed 46 deg would need 6.93 mm, which
neither drawing shows, so the field is capped at 42 deg. Stop radius derived from 1:40; f-stop list added. Element
focal lengths are computed (thick, in air).

Indices are nD only (indexReference "D"): von Rohr prints no dispersion, so the model is monochromatic and no catalog
glass is substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "steinheil-periskop-1865-von-rohr-1899",
  maker: null,
  name: "STEINHEIL PERISKOP f/40 (von Rohr 1899, Fig. 109)",
  subtitle: "Two identical uncorrected crown menisci about a central stop; English patent of 1865",
  visible: false,

  catalog: {
    specs: ["2 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 2,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 40 },
  },
  source: {
    sdSource: "figure-measured",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 288, Fig. 109",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=44",
      after: "J. M. Eder",
    },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Crown",
      type: "Positive Meniscus",
      nd: 1.5233,
      indexReference: "D",
      focalLengthMm: 185.7,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Front meniscus, convex toward the object and concave toward the stop; weak collective lens.",
    },
    {
      id: 2,
      name: "L2",
      label: "Crown",
      type: "Positive Meniscus",
      nd: 1.5233,
      indexReference: "D",
      focalLengthMm: 185.7,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Mirror of L1 behind the stop: concave toward the stop, convex toward the image.",
    },
  ],
  surfaces: [
    { label: "1", R: 17.5, d: 1.3, sd: 6.28, medium: 1 },
    { label: "2", R: 20.8, d: 6.3, sd: 6.28 },
    { label: "STO", R: "flat", d: 6.3 },
    { label: "3", R: -20.8, d: 1.3, sd: 6.28, medium: 2 },
    { label: "4", R: -17.5, d: 90.948, sd: 6.28 },
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity only; von Rohr computes the lens for a distant object.",
  },
  aperture: { nominalFNumber: 40, fStops: [40, 45, 56, 64], maxFNumber: 64 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 42 },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "2" },
    { text: "REAR", fromSurface: "3", toSurface: "4" },
  ],

  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
