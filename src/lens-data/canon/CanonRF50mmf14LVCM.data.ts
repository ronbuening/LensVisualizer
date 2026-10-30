import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon RF 50mm f/1.4 L VCM — US20250251576A1, Numerical Example 1.
 * Original shape/glass review: 2026-10-30; earlier 2026-07-04 audit preserved.
 * Production identity/counts are a qualified correlation, not a source disclosure.
 *
 * Source PDF p16 supplies literal R/d, fifteen nd/vd pairs, three aspheres and
 * infinity/−400 mm focus gaps. These and the primary iris/cams remain unchanged.
 * Paragraphs 0061–0063 (p15) define d 587.6/F 486.1/C 656.3 nm; paragraph 0070
 * defines plot g 435.8 nm. No numerical line indices/partials are published:
 * all 24 catalog-derived C/F/g fields were removed. Fourteen unchanged compatible
 * curves are approximate spectral proxies; the resin remains unidentified.
 * Resin on glass is explicit in paragraphs 0024–0025 (p12), but curing process,
 * glass molding, supplier, melt and chemistry are not established by that evidence.
 *
 * Native Figure 1 (p2) is 2560×3300 at about 300 ppi, axial scale≈14.58 px/mm;
 * optical endpoints≈±.14–.21 mm plus schematic error. Source-outline caps replace
 * older filter-thread-constrained heights and eliminate near S14/S16 hidden trim.
 * Hybrid 3A/4 is coextensive at 21.7 with positive thickness and no resin wing.
 * S5 clear18.2/outer21.7 and S6 clear18.2/outer20.2 preserve resolved shoulders;
 * their clear caps remain constrained by the 9.65 mm gap/.90 sag guard. Tail S26
 * stays16; native18.7 clear/outer trials fail that guard. Source R/d is not fitted.
 * D2 common14.8 is a beam-supported floor above native≈14.4: the literal source
 * −400 mm state requires S18 radius14.79147. S27=16.1 clears the source infinity
 * 24.04° chief at16.09795, with a tight .00205 mm sampled margin. Both are inferred
 * floors, not dimensioned source rims or production measurements.
 *
 * No inferred rim cuts. All 65 focus positions have finite connected SVG bodies,
 * no hidden trim and clear sampled axial/chief rays. Published∞/−400 mm launches,
 * collimated geometry sweeps and Gaussian interval supplements remain distinct.
 * Finite fields are paraxial object-field probes, not inverse-solved sensor corners.
 * Source overall117.49 versus literal sum117.51 remains unresolved in source.errata.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf-50mm-f14-l-vcm",
  maker: "Canon",
  name: "CANON RF 50mm f/1.4 L VCM",
  subtitle: "US 2025/0251576 A1 Example 1 — Canon / Tomohiro Ino",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "14 elements / 11 groups (15 material entries incl. resin cap)",
      "f = 48.50 mm patent / 50 mm marketed",
      "F/1.46 design / f/1.4 marketed",
      "2ω = 48.08° patent diagonal",
      "3 aspherical surfaces on 2 counted aspherical elements",
    ],
    elementCount: 14,
    groupCount: 11,
    focalLengthMm: { marketing: 50, design: 48.5 },
    fNumber: { marketing: 1.4, design: 1.46 },
  },

  source: {
    patentNumber: "US 2025/0251576 A1",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 2025,
    authors: ["Tomohiro Ino"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Numerical Example 1 (PDF p16) gives overall length 117.49 mm, while the literal surface/gap sum is 117.51 mm at both published focus endpoints. Paragraph 0065 defines the total including back focus. Preserve every printed R/d/asphere/source pair; no unique correction is established.",
      },
    ],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.92286,
      indexReference: "d",
      indexReferenceNote:
        "US20250251576A1 paragraphs 0061–0063 PDF p15 define nd/vd at d 587.6 nm, F 486.1 nm and C 656.3 nm. Numerical Example 1 PDF p16 publishes only nd/vd; no numerical line indices or partial dispersion.",
      vd: 20.9,
      focalLengthMm: 144.31,
      glass: "E-FDS1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "High-index low-Abbe front collector; catalog-compatible coordinate proxy, chemistry unidentified.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2 resin cap",
      type: "Aspherical Resin Layer",
      nd: 1.53352,
      indexReference: "d",
      indexReferenceNote:
        "US20250251576A1 paragraphs 0061–0063 PDF p15 define nd/vd at d 587.6 nm, F 486.1 nm and C 656.3 nm. Numerical Example 1 PDF p16 publishes only nd/vd; no numerical line indices or partial dispersion.",
      vd: 52.8,
      focalLengthMm: 2076.28,
      glass: "Optical resin (source-listed nd/vd; chemistry and curing process unspecified)",
      role: "Source resin layer bonded to the glass substrate (paragraph 0025); counted with E3 as one physical composite.",
      cemented: "H1",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 2 glass substrate",
      type: "Negative Meniscus",
      nd: 1.65412,
      indexReference: "d",
      indexReferenceNote:
        "US20250251576A1 paragraphs 0061–0063 PDF p15 define nd/vd at d 587.6 nm, F 486.1 nm and C 656.3 nm. Numerical Example 1 PDF p16 publishes only nd/vd; no numerical line indices or partial dispersion.",
      vd: 39.7,
      focalLengthMm: -73.87,
      glass: "S-NBH5 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative glass substrate of the source resin composite; chemistry unidentified.",
      cemented: "H1",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 3 front",
      type: "Biconcave Negative",
      nd: 1.77047,
      indexReference: "d",
      indexReferenceNote:
        "US20250251576A1 paragraphs 0061–0063 PDF p15 define nd/vd at d 587.6 nm, F 486.1 nm and C 656.3 nm. Numerical Example 1 PDF p16 publishes only nd/vd; no numerical line indices or partial dispersion.",
      vd: 29.7,
      focalLengthMm: -26.94,
      glass: "NBFD29 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative half of the first cemented doublet; material family unidentified.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 3 rear",
      type: "Biconvex Positive",
      nd: 1.76385,
      indexReference: "d",
      indexReferenceNote:
        "US20250251576A1 paragraphs 0061–0063 PDF p15 define nd/vd at d 587.6 nm, F 486.1 nm and C 656.3 nm. Numerical Example 1 PDF p16 publishes only nd/vd; no numerical line indices or partial dispersion.",
      vd: 48.5,
      focalLengthMm: 32.89,
      glass: "S-LAH96 (OHARA catalog equivalent; production supplier unspecified)",
      role: "High-index positive half of the first cemented doublet; composition unidentified.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.91082,
      indexReference: "d",
      indexReferenceNote:
        "US20250251576A1 paragraphs 0061–0063 PDF p15 define nd/vd at d 587.6 nm, F 486.1 nm and C 656.3 nm. Numerical Example 1 PDF p16 publishes only nd/vd; no numerical line indices or partial dispersion.",
      vd: 35.2,
      focalLengthMm: 43.09,
      glass: "TAFD35 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Strong positive high-index element completing L1.",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 5 / L2 focus unit",
      type: "Positive Meniscus",
      nd: 1.90043,
      indexReference: "d",
      indexReferenceNote:
        "US20250251576A1 paragraphs 0061–0063 PDF p15 define nd/vd at d 587.6 nm, F 486.1 nm and C 656.3 nm. Numerical Example 1 PDF p16 publishes only nd/vd; no numerical line indices or partial dispersion.",
      vd: 37.4,
      focalLengthMm: 124.71,
      glass: "TAFD37A (HOYA catalog equivalent; production supplier unspecified)",
      role: "Weak positive first moving focus unit.",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 6 / L3",
      type: "Plano-Concave Negative",
      nd: 1.77047,
      indexReference: "d",
      indexReferenceNote:
        "US20250251576A1 paragraphs 0061–0063 PDF p15 define nd/vd at d 587.6 nm, F 486.1 nm and C 656.3 nm. Numerical Example 1 PDF p16 publishes only nd/vd; no numerical line indices or partial dispersion.",
      vd: 29.7,
      focalLengthMm: -49.73,
      glass: "NBFD29 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative pre-stop unit, fixed relative to the image plane.",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 7 front",
      type: "Positive Meniscus",
      nd: 1.59522,
      indexReference: "d",
      indexReferenceNote:
        "US20250251576A1 paragraphs 0061–0063 PDF p15 define nd/vd at d 587.6 nm, F 486.1 nm and C 656.3 nm. Numerical Example 1 PDF p16 publishes only nd/vd; no numerical line indices or partial dispersion.",
      vd: 67.7,
      focalLengthMm: 99.43,
      glass: "S-FPM2 (OHARA catalog equivalent; production supplier unspecified)",
      role: "High-Abbe positive partner of the rear cemented doublet; chemistry unidentified.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 7 rear",
      type: "Negative Meniscus",
      nd: 1.73037,
      indexReference: "d",
      indexReferenceNote:
        "US20250251576A1 paragraphs 0061–0063 PDF p15 define nd/vd at d 587.6 nm, F 486.1 nm and C 656.3 nm. Numerical Example 1 PDF p16 publishes only nd/vd; no numerical line indices or partial dispersion.",
      vd: 32.2,
      focalLengthMm: -32.65,
      glass: "NBFD32 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative half of the L4 cemented doublet; material family unidentified.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 8 / high-Abbe",
      type: "Biconvex Positive",
      nd: 1.497,
      indexReference: "d",
      indexReferenceNote:
        "US20250251576A1 paragraphs 0061–0063 PDF p15 define nd/vd at d 587.6 nm, F 486.1 nm and C 656.3 nm. Numerical Example 1 PDF p16 publishes only nd/vd; no numerical line indices or partial dispersion.",
      vd: 81.7,
      focalLengthMm: 44.33,
      glass: "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "High-Abbe positive element in L4/Lr1; production UD correlation is inferred, chemistry unidentified.",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 9 / double asphere",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.804,
      indexReference: "d",
      indexReferenceNote:
        "US20250251576A1 paragraphs 0061–0063 PDF p15 define nd/vd at d 587.6 nm, F 486.1 nm and C 656.3 nm. Numerical Example 1 PDF p16 publishes only nd/vd; no numerical line indices or partial dispersion.",
      vd: 46.5,
      focalLengthMm: 52.09,
      glass: "S-LAH65VS (OHARA catalog equivalent; production supplier unspecified)",
      role: "High-index glass with two aspherical surfaces; source does not establish molding process or chemistry.",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 10 front",
      type: "Plano-Convex Positive",
      nd: 2.001,
      indexReference: "d",
      indexReferenceNote:
        "US20250251576A1 paragraphs 0061–0063 PDF p15 define nd/vd at d 587.6 nm, F 486.1 nm and C 656.3 nm. Numerical Example 1 PDF p16 publishes only nd/vd; no numerical line indices or partial dispersion.",
      vd: 29.1,
      focalLengthMm: 46.55,
      glass: "S-LAH99 (OHARA catalog equivalent; production supplier unspecified)",
      role: "High-index positive front half of the rear fixed doublet; composition unidentified.",
      cemented: "D3",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 10 rear",
      type: "Biconcave Negative",
      nd: 1.58144,
      indexReference: "d",
      indexReferenceNote:
        "US20250251576A1 paragraphs 0061–0063 PDF p15 define nd/vd at d 587.6 nm, F 486.1 nm and C 656.3 nm. Numerical Example 1 PDF p16 publishes only nd/vd; no numerical line indices or partial dispersion.",
      vd: 40.8,
      focalLengthMm: -39.88,
      glass: "S-TIL25 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative half of the rear fixed doublet; material family unidentified.",
      cemented: "D3",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.72825,
      indexReference: "d",
      indexReferenceNote:
        "US20250251576A1 paragraphs 0061–0063 PDF p15 define nd/vd at d 587.6 nm, F 486.1 nm and C 656.3 nm. Numerical Example 1 PDF p16 publishes only nd/vd; no numerical line indices or partial dispersion.",
      vd: 28.5,
      focalLengthMm: -146.02,
      glass: "S-TIH10 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Weak negative image-side element; composition unidentified.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 57.769, d: 3.57, sd: 23.0, medium: 1 },
    { label: "2", R: 99.001, d: 2.01, sd: 23.0 },
    {
      label: "3A",
      R: 174.69,
      d: 0.11,
      sd: 21.7,
      medium: 2,
      asphere: { K: 0, A4: -3.43375e-7, A6: -2.73639e-9, A8: 6.57484e-12, A10: -1.50535e-14, A12: 9.835e-18 },
    },
    { label: "4", R: 207.351, d: 1.35, sd: 21.7, medium: 3 },
    { label: "5", R: 39.088, d: 9.65, sd: 18.2, rimExtensionSd: 21.7 },
    { label: "6", R: -41.799, d: 1.35, sd: 18.2, rimExtensionSd: 20.2, medium: 4 },
    { label: "7", R: 41.799, d: 10.34, sd: 20.2, medium: 5 },
    { label: "8", R: -56.227, d: 0.15, sd: 20.2 },
    { label: "9", R: 55.362, d: 7.44, sd: 21.2, medium: 6 },
    { label: "10", R: -126.226, sd: 21.2 },
    { label: "11", R: 41.162, d: 3.03, sd: 17.7, medium: 7 },
    { label: "12", R: 62.716, sd: 17.7 },
    { label: "13", R: "flat", d: 1.2, sd: 16.2, medium: 8 },
    { label: "14", R: 38.312, d: 4.28, sd: 16.2 },
    { label: "STO", R: "flat" },
    { label: "16", R: -22.567, d: 3.89, sd: 14.8, medium: 9 },
    { label: "17", R: -17.388, d: 1.2, sd: 14.8, medium: 10 },
    { label: "18", R: -66.069, d: 0.16, sd: 14.8 },
    { label: "19", R: 65.372, d: 8.43, sd: 16.9, medium: 11 },
    { label: "20", R: -31.807, d: 0.37, sd: 16.9 },
    {
      label: "21A",
      R: 195.76,
      d: 6.1,
      sd: 18.4,
      medium: 12,
      asphere: { K: 0, A4: -3.27084e-6, A6: 6.2245e-10, A8: 1.62557e-11, A10: -9.43111e-14, A12: 1.12652e-16 },
    },
    {
      label: "22A",
      R: -52.537,
      sd: 18.4,
      asphere: { K: 0, A4: 6.07848e-6, A6: -7.76772e-9, A8: 6.38476e-11, A10: -1.90658e-13, A12: 1.91577e-16 },
    },
    { label: "23", R: "flat", d: 5.16, sd: 18.7, medium: 13 },
    { label: "24", R: -46.593, d: 1.2, sd: 18.7, medium: 14 },
    { label: "25", R: 46.593, d: 9.09, sd: 18.7 },
    { label: "26", R: -31.535, d: 1.0, sd: 16.0, medium: 15 },
    { label: "27", R: -45.428, d: 14.66, sd: 16.1 },
  ],

  focus: {
    closeFocusM: 0.4,
    description: "Floating inner focus: L2 moves objectward by 2.30 mm and L4/Lr1 by 4.40 mm from infinity to 0.40 m.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: {
    "10": { label: "D10 L1-L2", values: [[3.76, 1.46]] },
    "12": { label: "D12 L2-L3", values: [[3.66, 5.96]] },
    STO: { label: "D15 SP-L4", values: [[11.67, 7.27]] },
    "22A": { label: "D22 L4-L5", values: [[2.68, 7.08]] },
  },

  aperture: { nominalFNumber: 1.46, fStops: [1.46, 2, 2.8, 4, 5.6, 8, 11, 16], maxFNumber: 16 },

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "10" },
    { text: "L2", fromSurface: "11", toSurface: "12" },
    { text: "L3", fromSurface: "13", toSurface: "14" },
    { text: "L4 / Lr1", fromSurface: "16", toSurface: "22A" },
    { text: "L5 / Lr2", fromSurface: "23", toSurface: "27" },
  ],
  doublets: [
    { text: "H1", fromSurface: "3A", toSurface: "5" },
    { text: "D1", fromSurface: "6", toSurface: "8" },
    { text: "D2", fromSurface: "16", toSurface: "18" },
    { text: "D3", fromSurface: "23", toSurface: "25" },
  ],

  layout: { scFill: 0.54, yScFill: 0.62 },
} satisfies LensDataV2Input;

export default LENS_DATA;
