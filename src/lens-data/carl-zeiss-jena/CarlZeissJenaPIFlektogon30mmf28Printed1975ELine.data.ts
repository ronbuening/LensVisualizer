/*
Carl Zeiss Jena PI-Flektogon 30mm f/2.8 — Printed 1975 Prescription (e-line reconstruction)
Controlling source: manufacturer optical sheet dated 1975-09-23, calculated 1975-08-04.
DD301976A7 Table 3 / Fig. 2 equivalence and exact production reconstruction are UNVERIFIED.
This is a monochromatic n_e reconstruction, not the sheet's original "gerechnet für C′" state.
Two unknown-index 0.01 mm cement layers are collapsed to direct-contact glass interfaces;
printed composite thicknesses 0.80 and 5.40 mm are preserved. No modern glasses or dispersion
are invented. vd and spectral fields deliberately omitted; Unmatched labels prevent catalog substitution.
The handwritten overlay is separate and unmodeled. All source freier Ø clear diameters are retained.
Front STO at z=0, diameter 10.60 mm interprets "Lage der EP=0". This is not patent stop evidence.
Exit-pupil diameter remains 27.047283 versus printed 27.42 mm (−1.36%), unresolved.
NO_INTERNAL_RECONSTRUCTION: empty var and authorized closeFocusM=1e15 UI sentinel are not a sourced MFD.
No scaling, aspheres or rear plates. No fabricated patent metadata, mount or image-format assignment.
The display title identifies the restricted reconstruction rather than asserting production equivalence.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-pi-flektogon-30mm-f28-printed-1975-eline",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA PI-FLEKTOGON 30mm f/2.8 (1975 e-line reconstruction)",
  subtitle:
    "Printed 1975 manufacturer sheet; monochromatic e-line/direct-contact research model. DD301976A7 Table 3 / Fig. 2 equivalence unverified.",

  catalog: {
    imageCircleMm: 29.5,
    specs: ["7 ELEMENTS / 5 GROUPS", "1975 PRINTED PRESCRIPTION", "MONOCHROMATIC E-LINE RECONSTRUCTION"],
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: { marketing: 30, design: 30.02 },
    fNumber: { marketing: 2.8, design: 2.831614089284163 },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Part 001.00",
      type: "Negative Meniscus",
      nd: 1.60994,
      indexReference: "e",
      focalLengthMm: -111.64985853181416,
      glass: "Unmatched (Carl Zeiss Jena historical SK 609/564 (SK2); source n_e only)",
      role: "Standalone in-air power sign; individual aberration contribution not established.",
    },
    {
      id: 2,
      name: "L2",
      label: "Part 002.00",
      type: "Biconvex Positive",
      nd: 1.73516,
      indexReference: "e",
      focalLengthMm: 10.333574485455628,
      glass: "Unmatched (Carl Zeiss Jena historical LaF 735/461; source n_e only)",
      role: "Standalone in-air power sign; individual aberration contribution not established.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Part 003.00",
      type: "Biconcave Negative",
      nd: 1.53187,
      indexReference: "e",
      focalLengthMm: -13.41911023243654,
      glass: "Unmatched (Carl Zeiss Jena historical KzF 531/515 (KzF2); source n_e only)",
      role: "Standalone in-air power sign; individual aberration contribution not established.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Part 004.00",
      type: "Biconcave Negative",
      nd: 1.7343,
      indexReference: "e",
      focalLengthMm: -10.431370404163577,
      glass: "Unmatched (Carl Zeiss Jena historical SF 734/281 (SF10); source n_e only)",
      role: "Standalone in-air power sign; individual aberration contribution not established.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Part 005.00",
      type: "Biconvex Positive",
      nd: 1.62287,
      indexReference: "e",
      focalLengthMm: 16.904292020698083,
      glass: "Unmatched (Carl Zeiss Jena historical SK 622/600 (SK16); source n_e only)",
      role: "Standalone in-air power sign; individual aberration contribution not established.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Part 006.00",
      type: "Positive Meniscus",
      nd: 1.6664,
      indexReference: "e",
      focalLengthMm: 50.14990189929062,
      glass: "Unmatched (Carl Zeiss Jena historical SK 666/561 (SK24); source n_e only)",
      role: "Standalone in-air power sign; individual aberration contribution not established.",
    },
    {
      id: 7,
      name: "L7",
      label: "Part 007.00",
      type: "Biconvex Positive",
      nd: 1.62541,
      indexReference: "e",
      focalLengthMm: 81.50604894041481,
      glass: "Unmatched (Carl Zeiss Jena historical SK 625/566 (SK10); source n_e only)",
      role: "Standalone in-air power sign; individual aberration contribution not established.",
    },
  ],

  surfaces: [
    { label: "STO", R: "flat", d: 0.0 },
    { label: "1", R: 12.408, d: 1.4, sd: 5.3, medium: 1 },
    { label: "2", R: 10.047, d: 1.32, sd: 5.05 },
    { label: "3", R: 14.412, d: 3.5, sd: 5.1, medium: 2 },
    { label: "4", R: -14.412, d: 0.8, sd: 4.9, medium: 3 },
    { label: "5", R: 14.412, d: 4.2, sd: 5.2 },
    { label: "6", R: -8.631, d: 0.8, sd: 5.7, medium: 4 },
    { label: "7", R: 70.74, d: 5.4, sd: 7.75, medium: 5 },
    { label: "8", R: -12.008, d: 0.1, sd: 8.65 },
    { label: "9", R: -83.088, d: 3.5, sd: 10.3, medium: 6 },
    { label: "10", R: -24.235, d: 0.1, sd: 10.85 },
    { label: "11", R: 101.33, d: 3.2, sd: 11.7, medium: 7 },
    { label: "12", R: -101.33, d: 26.831280852256565, sd: 11.9 },
  ],

  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Infinity prescription only. The source does not specify a minimum focus distance or lens travel, so finite focusing is not modeled.",
  },

  aperture: { nominalFNumber: 2.831614089284163, fStops: [2.831614089284163, 4, 5.6, 8, 11, 16] },

  projection: { kind: "rectilinear", fullFieldDeg: 54, maxTraceFieldDeg: 27 },

  groups: [],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  layout: { yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
