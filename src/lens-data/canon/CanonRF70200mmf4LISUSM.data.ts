import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON RF 70-200mm f/4 L IS USM                              ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2021/0033835 A1, Numerical Example 1 (Makoto Nakahara).  ║
 * ║ Production correlation: Canon RF70-200mm F4 L IS USM.                   ║
 * ║ 16 elements / 11 air-separated optical groups; all spherical.           ║
 * ║                                                                            ║
 * ║ Published infinity zoom states: 72.27 / 135.02 / 193.89 mm.             ║
 * ║ Zoom gaps: 5, 11, 14, 17, 22, 25, 29.                                   ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. The patent gives focus         ║
 * ║ directions for L4 and L6 but no numerical close-focus spacing table;     ║
 * ║ therefore every authored var pair is infinity/infinity and focus motion  ║
 * ║ is not invented. Canon's 0.6 m MFD is retained only as product metadata. ║
 * ║                                                                            ║
 * ║ Surface 6 of the patent is an optically neutral air-air plane associated ║
 * ║ with the probable flare-cutting diaphragm FP. It is omitted from the     ║
 * ║ active sequential model. Its 1.55 mm following air space is merged into  ║
 * ║ patent d5, so authored gap 5 is 2.59 / 40.93 / 58.21 mm.                 ║
 * ║ Patent surface 12 is the sole aperture stop and is labeled STO.           ║
 * ║                                                                            ║
 * ║ The patent gives no stop diameter. The stop radius is derived from the     ║
 * ║ design f-number at each zoom station. The per-state iris radii inferred    ║
 * ║ from the paraxial entrance pupil are 9.2435 / 11.3557 / 12.6903 mm;    ║
 * ║ the current derived runtime iris uses those same radii.                  ║
 * ║ nominalFno carries the published design values 4.08 / 4.08 /                ║
 * ║ 4.12; marketed aperture remains f/4.                                       ║
 * ║                                                                            ║
 * ║ Semi-diameters are modeled inferences because Example 1 publishes none.   ║
 * ║ They retain source-supported beam constraints and the native Figure 1      ║
 * ║ silhouette (300 ppi); inferred caps/outer shoulders carry about ±0.8 mm.   ║
 * ║ Fifteen source-shaped caps and one resolved S26 shoulder were reviewed.  ║
 * ║ Five cemented pairs remain connected; D2 front is gap limited at 12.5.    ║
 * ║ Its interface/rear 12.6 caps clear the working probe without a new land.   ║
 * ║ retaining positive edge thickness. Geometry was checked using actual     ║
 * ║ spherical sag/slope, shared-band cross-gap clearance,                     ║
 * ║ and off-axis bundle clipping; no obsolete sd/|R| rule was used.           ║
 * ║                                                                            ║
 * ║ The patent summary (¶0005) and claim 17 print an impossible positive-     ║
 * ║ lower-bound Q inequality; body ¶0026 and claim 1 are coherent. No source  ║
 * ║ inequality is silently repaired; this does not alter the prescription.    ║
 * ║                                                                            ║
 * ║ No scaling is applied. No sensor cover glass, filter, folded path, dummy  ║
 * ║ optical plate, or mechanical part is included.                            ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer sources used for product metadata:
 * https://www.usa.canon.com/support/p/rf70-200mm-f4-l-is-usm
 * https://global.canon/en/c-museum/product/rf501.html
 * HOYA spectral proxy for source-illustrated NBFD13; selected-source partial retained:
 * https://www.hoya-opticalworld.com/english/datadownload/index.html
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf70-200mm-f4-l-is-usm",
  maker: "Canon",
  name: "CANON RF 70-200mm f/4 L IS USM",
  subtitle: "US 2021/0033835 A1 — Numerical Example 1 / production correlation",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "16 ELEMENTS / 11 GROUPS",
      "4 UD-CLASS ELEMENTS",
      "PATENT f = 72.27–193.89 mm",
      "PATENT F/4.08–4.12",
      "MFD 0.6 m (product)",
      "9-BLADE DIAPHRAGM",
    ],
    elementCount: 16,
    groupCount: 11,
    focalLengthMm: { marketing: [70, 200], design: [72.27, 193.89] },
    fNumber: {
      marketing: 4,
      design: 4.08, // wide/middle design value; tele 4.12 is carried by nominalFno below
    },
  },

  source: {
    patentNumber: "US 2021/0033835 A1",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 2021,
    authors: ["Makoto Nakahara"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Numerical Example1, PDF17/printed5, states overall lengths137.50/175.84/193.12 mm versus literal source-row tracks137.52/175.84/193.14. Table1, PDF20/printed8, states positive-front Abbe average75.89 versus75.85 from surface-row70.2/81.5. Printed rounding is an unproved explanation; no unique numerical source correction is established, and all R/d/nd/vd/stops/cams remain unchanged.",
      },
    ],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L1-1",
      type: "Positive Meniscus",
      nd: 1.48749,
      indexReference: "d",
      vd: 70.2,
      focalLengthMm: 211.780861,
      glass:
        "487702 — low-dispersion crown class (vendor unresolved); qualified spectral proxy only, historical supplier/composition unresolved",
      role: "Front positive collector in L1.",
    },
    {
      id: 2,
      name: "L12",
      label: "L1-2",
      type: "Negative Meniscus",
      nd: 1.6134,
      indexReference: "d",
      vd: 44.3,
      focalLengthMm: -116.9495,
      glass:
        "613443 — medium-dispersion class (vendor unresolved); qualified spectral proxy only, historical supplier/composition unresolved",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L1-3",
      type: "Positive Meniscus",
      nd: 1.497,
      indexReference: "d",
      vd: 81.5,
      focalLengthMm: 95.103345,
      glass:
        "497815 — UD-class low-dispersion glass (vendor unresolved); qualified spectral proxy only, historical supplier/composition unresolved",
      apd: "inferred",
      apdNote:
        "Production-correlated UD position; the patent publishes nd/νd only and does not identify a vendor or partial-dispersion curve.",
      role: "One of four 1.49700 / 81.5 elements correlating with Canon's four-UD production count.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L21",
      label: "L2-1",
      type: "Negative Meniscus",
      nd: 1.51633,
      indexReference: "d",
      vd: 64.1,
      focalLengthMm: -118.643135,
      glass:
        "516641 — crown class (vendor unresolved); qualified spectral proxy only, historical supplier/composition unresolved",
    },
    {
      id: 5,
      name: "L22",
      label: "L2-2",
      type: "Biconcave Negative",
      nd: 1.54072,
      indexReference: "d",
      vd: 47.2,
      focalLengthMm: -40.893237,
      glass:
        "541472 — flint class (vendor unresolved); qualified spectral proxy only, historical supplier/composition unresolved",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "L2-3",
      type: "Positive Meniscus",
      nd: 2.00069,
      indexReference: "d",
      vd: 25.5,
      focalLengthMm: 62.256614,
      glass:
        "001255 — high-index flint class (vendor unresolved); qualified spectral proxy only, historical supplier/composition unresolved",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L31",
      label: "L3-1",
      type: "Biconvex Positive",
      nd: 1.497,
      indexReference: "d",
      vd: 81.5,
      focalLengthMm: 49.467608,
      glass:
        "497815 — UD-class low-dispersion glass (vendor unresolved); qualified spectral proxy only, historical supplier/composition unresolved",
      apd: "inferred",
      apdNote:
        "Production-correlated UD position; the patent publishes nd/νd only and does not identify a vendor or partial-dispersion curve.",
      role: "Positive L3/Lp unit; one of the four 1.49700 / 81.5 elements.",
    },
    {
      id: 8,
      name: "L41",
      label: "L4-1",
      type: "Biconcave Negative",
      nd: 1.76385,
      indexReference: "d",
      vd: 48.5,
      focalLengthMm: -17.535654,
      glass:
        "764485 — high-index moderate-dispersion coordinate class (supplier/composition unresolved); qualified spectral proxy only, historical supplier/composition unresolved",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L42",
      label: "L4-2 / Gp",
      type: "Biconvex Positive",
      nd: 1.8061,
      indexReference: "d",
      vd: 40.7,
      focalLengthMm: 24.195613,
      glass: "NBFD13 (HOYA; source-illustrated compatible spectral proxy, historical supplier/melt unresolved)",
      apd: "patent",
      apdNote:
        "Selected Example1 Table1 (PDF20/printed8) publishes νdp40.73 and θgFp0.5671; surface table retains rounded νd40.7. Engine dPgF−0.0082426 derives from published θ and its linear normal convention. Source cubic-normal condition(1)−0.0046 is distinct. Paragraph0033 names NBFD13 as an example material, not verified historical supplier/melt.",
      role: "Patent positive lens Gp inside net-negative L4/Ln; chromatic-control element governed by conditions (1)–(4).",
      cemented: "D3",
      // Source Table 1, PDF20/printed8: selected Example1 theta_gF = 0.5671.
      // Engine linear normal at retained surface vd40.7 is0.5753426; delta=-0.0082426.
      // Source cubic-normal condition(1)=-0.0046 is a different definition, not this field.
      dPgF: -0.0082426,
    },
    {
      id: 10,
      name: "L51",
      label: "L5-1",
      type: "Negative Meniscus",
      nd: 2.0509,
      indexReference: "d",
      vd: 26.9,
      focalLengthMm: -36.677549,
      glass:
        "051269 — very-high-index flint class (vendor unresolved); qualified spectral proxy only, historical supplier/composition unresolved",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L52",
      label: "L5-2",
      type: "Biconvex Positive",
      nd: 1.497,
      indexReference: "d",
      vd: 81.5,
      focalLengthMm: 37.770901,
      glass:
        "497815 — UD-class low-dispersion glass (vendor unresolved); qualified spectral proxy only, historical supplier/composition unresolved",
      apd: "inferred",
      apdNote:
        "Production-correlated UD position; the patent publishes nd/νd only and does not identify a vendor or partial-dispersion curve.",
      role: "One of the four 1.49700 / 81.5 elements.",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L53",
      label: "L5-3",
      type: "Biconvex Positive",
      nd: 1.83481,
      indexReference: "d",
      vd: 42.7,
      focalLengthMm: 40.542379,
      glass:
        "835427 — high-index coordinate class (supplier/composition unresolved); qualified spectral proxy only, historical supplier/composition unresolved",
    },
    {
      id: 13,
      name: "L61",
      label: "L6-1",
      type: "Biconcave Negative",
      nd: 1.83481,
      indexReference: "d",
      vd: 42.7,
      focalLengthMm: -30.020722,
      glass:
        "835427 — high-index coordinate class (supplier/composition unresolved); qualified spectral proxy only, historical supplier/composition unresolved",
      cemented: "D5",
    },
    {
      id: 14,
      name: "L62",
      label: "L6-2",
      type: "Positive Meniscus",
      nd: 1.72825,
      indexReference: "d",
      vd: 28.5,
      focalLengthMm: 74.628967,
      glass:
        "728285 — dense-flint class (vendor unresolved); qualified spectral proxy only, historical supplier/composition unresolved",
      cemented: "D5",
    },
    {
      id: 15,
      name: "L71",
      label: "L7-1",
      type: "Negative Meniscus",
      nd: 1.497,
      indexReference: "d",
      vd: 81.5,
      focalLengthMm: -84.739762,
      glass:
        "497815 — UD-class low-dispersion glass (vendor unresolved); qualified spectral proxy only, historical supplier/composition unresolved",
      apd: "inferred",
      apdNote:
        "Production-correlated UD position; the patent publishes nd/νd only and does not identify a vendor or partial-dispersion curve.",
      role: "One of the four 1.49700 / 81.5 elements.",
    },
    {
      id: 16,
      name: "L72",
      label: "L7-2",
      type: "Biconvex Positive",
      nd: 1.85478,
      indexReference: "d",
      vd: 24.8,
      focalLengthMm: 121.787626,
      glass:
        "855248 — high-index flint class (vendor unresolved); qualified spectral proxy only, historical supplier/composition unresolved",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 90.644, d: 5.0, sd: 25.5, medium: 1 },
    { label: "2", R: 729.457, d: 0.15, sd: 25.5 },
    { label: "3", R: 118.536, d: 1.72, sd: 25.0, medium: 2 },
    { label: "4", R: 44.444, d: 7.63, sd: 25.0, medium: 3 },
    { label: "5", R: 701.885, sd: 25.0 },
    { label: "7", R: 61.503, d: 1.45, sd: 13.5, medium: 4 },
    { label: "8", R: 30.444, d: 4.9, sd: 13.5 },
    { label: "9", R: -46.693, d: 1.45, sd: 12.5, medium: 5 },
    { label: "10", R: 42.46, d: 2.4, sd: 12.6, medium: 6 },
    { label: "11", R: 129.562, sd: 12.6 },
    { label: "STO", R: "flat", d: 0.27 },
    { label: "13", R: 30.808, d: 5.46, sd: 13.8, medium: 7 },
    { label: "14", R: -114.56, sd: 13.8 },
    { label: "15", R: -34.891, d: 0.76, sd: 12.8, medium: 8 },
    { label: "16", R: 21.946, d: 5.06, sd: 12.8, medium: 9 },
    { label: "17", R: -157.249, sd: 12.8 },
    { label: "18", R: 215.866, d: 0.86, sd: 14.5, medium: 10 },
    { label: "19", R: 32.638, d: 6.46, sd: 14.5, medium: 11 },
    { label: "20", R: -41.283, d: 0.15, sd: 14.5 },
    { label: "21", R: 40.548, d: 4.63, sd: 17.0, medium: 12 },
    { label: "22", R: -194.106, sd: 16.5 },
    { label: "23", R: -110.386, d: 0.9, sd: 13.5, medium: 13 },
    { label: "24", R: 32.543, d: 3.04, sd: 13.5, medium: 14 },
    { label: "25", R: 77.918, sd: 13.5 },
    { label: "26", R: -27.078, d: 1.55, sd: 15.5, rimExtensionSd: 17.0, medium: 15 },
    { label: "27", R: -77.278, d: 0.15, sd: 17.0 },
    { label: "28", R: 133.694, d: 2.87, sd: 19.0, medium: 16 },
    { label: "29", R: -465.663, sd: 19.0 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 72.27, nominalFNumber: 4.08, label: "Wide" },
      { focalLengthMm: 135.02, nominalFNumber: 4.08 },
      { focalLengthMm: 193.89, nominalFNumber: 4.12, label: "Tele" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.6,
    description:
      "NO_INTERNAL_RECONSTRUCTION: Example 1 publishes infinity zoom spacings and focus directions only. L4 focuses objectward and L6 imageward, but no numerical close-focus gap table is published; the data therefore models only the published infinity zoom states. Canon's 0.6 m MFD and dual Nano USM focus/floating mechanism are product metadata, not reconstructed spacings.",
  },

  /* (moved from var) ── Zoom-only variable air spacings; close-focus pairs intentionally equal ── */
  gaps: {
    "5": {
      label: "D5 + FP",
      values: [
        [2.59, 2.59],
        [40.93, 40.93],
        [58.21, 58.21],
      ],
    },
    "11": {
      label: "D11",
      values: [
        [14.15, 14.15],
        [7.9, 7.9],
        [3.56, 3.56],
      ],
    },
    "14": {
      label: "D14",
      values: [
        [5.42, 5.42],
        [9.82, 9.82],
        [13.52, 13.52],
      ],
    },
    "17": {
      label: "D17",
      values: [
        [9.21, 9.21],
        [4.8, 4.8],
        [1.11, 1.11],
      ],
    },
    "22": {
      label: "D22",
      values: [
        [18.91, 18.91],
        [9.71, 9.71],
        [2.24, 2.24],
      ],
    },
    "25": {
      label: "D25",
      values: [
        [15.94, 15.94],
        [21.59, 21.59],
        [27.98, 27.98],
      ],
    },
    "29": {
      label: "SK / BF",
      values: [
        [14.44, 14.44],
        [24.23, 24.23],
        [29.66, 29.66],
      ],
    },
  },

  aperture: { fStops: [4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "5" },
    { text: "L2", fromSurface: "7", toSurface: "11" },
    { text: "L3 (Lp)", fromSurface: "STO", toSurface: "14" },
    { text: "L4 (Ln)", fromSurface: "15", toSurface: "17" },
    { text: "L5", fromSurface: "18", toSurface: "22" },
    { text: "L6", fromSurface: "23", toSurface: "25" },
    { text: "L7 (LRn)", fromSurface: "26", toSurface: "29" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
    { text: "D3", fromSurface: "15", toSurface: "17" },
    { text: "D4", fromSurface: "18", toSurface: "20" },
    { text: "D5", fromSurface: "23", toSurface: "25" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
