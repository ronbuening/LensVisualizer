import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║      LENS DATA — Nikon Fisheye-Nikkor 6mm f/2.8                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,737,214, Example I, Yoshiyuki Shimizu /         ║
 * ║  Nippon Kogaku K.K.                                                ║
 * ║                                                                    ║
 * ║  12 powered elements / 9 groups, plus the source internal filter.       ║
 * ║  R11/R12 retain their physical 1.8 mm glass thickness, with 25 mm air    ║
 * ║  before and 2.8 mm after. The inferred STO remains 12 mm after R10.    ║
 * ║  Filter nd=1.51823 is published; its Abbe number is not. The filter's   ║
 * ║  constant-index spectrum is a disclosed missing-dispersion limitation. ║
 * ║                                                                        ║
 * ║  Focus: production unit focus. The patent publishes no close-focus ║
 * ║  prescription, so the focus variable is a small last-gap extension ║
 * ║  estimated from the 6.3 mm fisheye projection constant at 0.25 m.  ║
 * ║                                                                    ║
 * ║  Stop: Figure 1 places the undimensioned iris behind R17, within the     ║
 * ║  13 mm R17→R18 air gap. Native-raster measurement gives about .45 of     ║
 * ║  that interval; this model adopts 6 mm before / 7 mm after the iris      ║
 * ║  (roughly ±.3 mm positional uncertainty). Its radius is derived at f2.8. ║
 * ║                                                                        ║
 * ║  Semi-diameters: patent-listed full effective diameters are used   ║
 * ║  where renderer-safe. The rear faces of L1-L3 are reduced from     ║
 * ║  the patent effective diameters to satisfy the spherical rim-slope ║
 * ║  renderer limit; rear group SDs are conservative estimates from    ║
 * ║  Fig. 1 proportions and edge/gap-sag checks.                       ║
 * ║  SOURCE ERRATUM: Table R18=-45 conflicts with Figure 1's convex face,  ║
 * ║  the stated f6.3/B.f37.657 and Figure2A's ±.5 mm spherical focus scale.  ║
 * ║  Applied R18=+45 gives EFL6.299886/BFL37.657615; the printed sign gives ║
 * ║  37.413238/273.214284. See source.errata and audit for independent proof.║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * 2026-10-30: Fresh original figure/media-table review; exposed lands and
 * source-filter restoration are documented in the audit sidecar.
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-fisheye-nikkor-6mm-f28",
  maker: "Nikon",
  name: "NIKON FISHEYE-NIKKOR 6mm f/2.8",
  subtitle: "US 3,737,214 Example I — Nippon Kogaku / Shimizu",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["12 powered elements / 9 groups + internal filter", "6 mm circular fisheye", "F/2.8", "220° angle of field", "All-spherical"],
    elementCount: 12,
    groupCount: 9,
    focalLengthMm: { marketing: 6, design: 6.3 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 3,737,214",
    example: { label: "Example I", id: "1" },
    patentYear: 1973,
    authors: ["Yoshiyuki Shimizu"],
    assignees: ["Nippon Kogaku K.K."],
    errata: [{
      status: "corrected",
      surface: "18",
      field: "R",
      printed: -45.0,
      applied: 45.0,
      evidence: ["source-summary", "aberration-figure"],
      note: "Example I prints R18=-45, but Figure 1 draws a convex object-side R18. The positive sign gives EFL6.299886/BFL37.657615 against stated6.3/37.657 and agrees with Figure2A's near-zero spherical focus; the printed sign gives37.413238/273.214284. The correction is a disclosed source sign erratum, not a manufacturer-confirmed production prescription.",
    }],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: -164.5,
      glass: "J-BK7A (catalog-compatible spectral proxy; production supplier unresolved)",
      role: "Large front dome; first stage of the graduated negative fisheye front group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: -106.9,
      glass: "J-BK7A (catalog-compatible spectral proxy; production supplier unresolved)",
      role: "Second negative meniscus; continues progressive inward bending of high-angle rays.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: -37.6,
      glass: "J-BK7A (catalog-compatible spectral proxy; production supplier unresolved)",
      role: "Strongest of the three leading BK7 menisci; completes the primary negative front conversion.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: -25.6,
      glass: "J-SK16 (catalog-compatible spectral proxy; production supplier unresolved)",
      role: "Dense-crown negative element; low-dispersion partner for the adjacent SF10 positive element.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.72825,
      vd: 28.3,
      focalLengthMm: 42.9,
      glass: "J-SF10 (catalog-compatible spectral proxy; production supplier unresolved)",
      role: "Dense-flint positive element; partially achromatizes and moderates the L4 front-group power.",
    },
    {
      id: 13,
      name: "Filter",
      label: "Source internal filter",
      type: "Plane-Parallel Plate",
      nd: 1.51823,
      indexReference: "d",
      glass: "Unmatched (source filter nd=1.51823; Abbe number not published)",
      role: "Required internal filter, source R11/R12; constant-index spectral model because filter dispersion is unpublished.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Weak Biconvex Positive",
      nd: 1.64831,
      vd: 33.8,
      focalLengthMm: 172.1,
      glass: "J-SF2 (catalog-compatible spectral proxy; production supplier unresolved)",
      role: "Weak positive lead element of the rearward relay group.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.53375,
      vd: 55.4,
      focalLengthMm: 35.6,
      glass: "534554 — crown glass (patent nd=1.53375, νd=55.4; no current HIKARI catalog match)",
      role: "Positive crown component of the first rear cemented doublet.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.5,
      focalLengthMm: -59.6,
      glass: "J-LASF016 (catalog-compatible spectral proxy; production supplier unresolved)",
      role: "High-index lanthanum-flint component of the positive first rear doublet.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 59.0,
      focalLengthMm: 22.065037,
      glass: "J-K3 (catalog-compatible spectral proxy; production supplier unresolved)",
      role: "Positive crown component of the middle rear doublet.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.79631,
      vd: 40.8,
      focalLengthMm: -31.5,
      glass: "NBFD2 (catalog-compatible spectral proxy; production supplier unresolved)",
      role: "High-index negative partner in the positive middle rear doublet.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      focalLengthMm: -36.9,
      glass: "J-SF1 (catalog-compatible spectral proxy; production supplier unresolved)",
      role: "Dense-flint leading element of the final positive achromat.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: 29.3,
      glass: "J-BK7A (catalog-compatible spectral proxy; production supplier unresolved)",
      role: "Final BK7 crown element; completes the rear relay and presents a low-index last air interface.",
      cemented: "D3",
    },
  ],

  surfaces: [
    { label: "1", R: 143.47, d: 7.0, sd: 106.5, medium: 1 },
    { label: "2", R: 52.5, d: 28.0, sd: 46.7 },
    { label: "3", R: 76.4, d: 3.8, sd: 50.0, medium: 2 },
    { label: "4", R: 31.521, d: 21.8, sd: 28.0, rimExtensionSd: 50.0 },
    { label: "5", R: 150.0, d: 3.0, sd: 28.0, medium: 3 },
    { label: "6", R: 17.1, d: 16.5, sd: 15.2, rimExtensionSd: 28.0 },
    { label: "7", R: -60.0, d: 7.0, sd: 14.2, medium: 4 },
    { label: "8", R: 22.625, d: 0.6, sd: 14.0 },
    { label: "9", R: 23.9, d: 12.6, sd: 14.0, medium: 5 },
    { label: "10", R: 78.988, d: 25.0, sd: 16.0 },
    { label: "11", R: "flat", d: 1.8, sd: 9.5, medium: 13 },
    { label: "12", R: "flat", d: 2.8, sd: 9.5 },
    { label: "13", R: 278.333, d: 3.0, sd: 9.0, medium: 6 },
    { label: "14", R: -185.42, d: 0.1, sd: 9.0 },
    { label: "15", R: 52.03, d: 7.0, sd: 9.5, medium: 7 },
    { label: "16", R: -28.5, d: 2.0, sd: 9.5, medium: 8 },
    { label: "17", R: -77.0, d: 6.0, sd: 9.0 },
    { label: "STO", R: "flat", d: 7.0 }, // inferred from Figure 1 within source d17=13
    { label: "18", R: 45.0, d: 8.0, sd: 9.0, medium: 9 },
    { label: "19", R: -14.4, d: 0.6, sd: 8.2, medium: 10 },
    { label: "20", R: -34.5, d: 0.1, sd: 8.0 },
    { label: "21", R: -110.0, d: 1.0, sd: 8.0, medium: 11 },
    { label: "22", R: 35.0, d: 3.5, sd: 8.0, medium: 12 },
    { label: "23", R: -25.763, sd: 8.0 },
  ],

  focus: {
    closeFocusM: 0.25,
    description: "Unit focus; entire optical assembly translates relative to the film plane.",
  },

  gaps: { "23": { label: "BF", values: [[37.657, 37.819]] } },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  projection: {
    kind: "fisheye-equidistant",
    focalLengthMm: 6.3,
    fullFieldDeg: 220,
    imageCircleMm: 23,
    maxTraceFieldDeg: 110,
  },

  groups: [
    { text: "FORWARD", fromSurface: "1", toSurface: "10" },
    { text: "REARWARD", fromSurface: "13", toSurface: "23" },
  ],
  doublets: [
    { text: "D1", fromSurface: "15", toSurface: "17" },
    { text: "D2", fromSurface: "18", toSurface: "20" },
    { text: "D3", fromSurface: "21", toSurface: "23" },
  ],

  layout: { scFill: 0.72, yScFill: 0.82, maxAspectRatio: 2.0 },
} satisfies LensDataV2Input;

export default LENS_DATA;
