import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 3,958,865 A (Sakai, Fuji Photo Optical), sole example, Table I / Figure 1 (1976).
 * Nine spherical elements / eight groups; L6-L7 share cemented surface 12.
 * All source radii and axial intervals are multiplied by exactly 24, following
 * the patent's practical 24 mm application. No prescription retuning is applied.
 * The printed BFL 1.560 becomes 37.44 mm: the retained image plane is z=75.84 mm.
 * Literal source indices give EFL=23.9998523881 mm, BFL=37.4335134734 mm;
 * this 0.00649 mm focus residual is retained, not corrected in the last gap.
 *
 * SOURCE: original PDF, 384661 bytes, SHA-256
 * 01061d9a76a1d481c8f4500b44b974bbb986a0cf61738e08ce8863a5c85ec42f;
 * Table I (page 4) and Figure 1 (page 2) checked directly against it.
 *
 * REFERENCE LINE: the text says "refractive indices for the sodium d-line", but
 * all nine N/ν pairs reproduce catalog helium-d coordinates within the spec
 * window (|Δn| ≤ 6e-5, |Δν| ≤ 0.15) and none reproduces a sodium-D or e-line
 * coordinate. By that numerical line test the table is d-line, so
 * indexReference is the default.
 * Glass: HOYA catalog equivalents for L1-L8 (one vendor covers them all) and
 * OHARA S-BSL7 for L9, whose 1.51633/64.0 is not in the HOYA catalog rows here.
 * They are spectral proxies; the patent names no supplier or melt.
 *
 * STOP: Figure 1 places it in source d10, after L5, closer to L5 than L6.
 * The inferred split is 0.80 + 1.84 mm (about 30% into the gap; the figure reads
 * about 27%), retaining the full source interval. Its radius is derived from
 * source F/2.8 by the shared paraxial pupil rule; no iris diameter is published.
 * RIMS: all clear semi-diameters are inferred. L1's 15 mm radius follows the
 * source's approximate 30 mm effective front diameter (Figure 1 reads 15.2 mm).
 * L8 (surfaces 14/15) is raised from 6.5 to 6.6 mm, the height of the stated
 * f/2.8 on-axis ray; every other rim is within the Figure 1 reading's noise band
 * and unchanged. Figure 1's stepped and chamfered corners are blank, not glass.
 * The 44 mm filter diameter is not an iris. No hidden trims or rim cuts.
 *
 * IDENTITY: Fuji's Fujica AZ-1 manual lists the EBC FUJINON W 1:2.8 24mm as
 * 8 components / 9 elements, 84°, f/16, 0.3 m minimum focus and 49 mm filter,
 * matching this design's construction, field and aperture. The correlation is
 * probable, not an established factory prescription. US 4,158,482 is the later
 * EBC X-FUJINON W 24mm f/2.8 DM, a separate design.
 * FOCUS: NO_INTERNAL_RECONSTRUCTION. The patent gives no finite-conjugate
 * spacing; the 0.3 m maker MFD is recorded but no focus motion is invented.
 */
const LENS_DATA = {
  schema: 2,
  key: "fujifilm-ebc-fujinon-w-24mm-f28-m42",
  maker: "Fujifilm",
  name: "FUJIFILM EBC FUJINON W 24mm f/2.8",
  subtitle: "US 3,958,865 A — Table I; probable production design of the M42 EBC Fujinon W 24mm f/2.8",

  catalog: {
    lensMounts: ["m42"],
    imageFormat: "135-full-frame",
    specs: [
      "9 ELEMENTS / 8 GROUPS",
      "f = 24 mm (PATENT f = 1 ×24)",
      "F/2.8",
      "2ω = 84°",
      "ALL-SPHERICAL",
      "BACK FOCUS 37.44 mm (1.56 f)",
      "INFERRED STOP / CLEAR APERTURES",
    ],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: { marketing: 24, design: 24 },
    fNumber: { marketing: 2.8, design: 2.8 },
    closeFocusM: { marketing: 0.3 },
  },

  source: {
    patentNumber: "US 3,958,865 A",
    example: { label: "Sole example", id: null },
    patentYear: 1976,
    authors: ["Yutaka Sakai"],
    assignees: ["Fuji Photo Optical Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front positive meniscus",
      type: "Positive Meniscus",
      nd: 1.60717,
      vd: 40.2,
      focalLengthMm: 107.2092789,
      glass: "BAFD3 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus, convex to the object, ahead of the two negative front elements.",
    },
    {
      id: 2,
      name: "L2",
      label: "First negative meniscus",
      type: "Negative Meniscus",
      nd: 1.6935,
      vd: 53.4,
      focalLengthMm: -43.2314011,
      glass: "LAC13 (HOYA catalog equivalent; production supplier unspecified)",
      role: "First diverging member of the front negative component; convex toward the object.",
    },
    {
      id: 3,
      name: "L3",
      label: "Second negative meniscus",
      type: "Negative Meniscus",
      nd: 1.6935,
      vd: 53.4,
      focalLengthMm: -27.3717509,
      glass: "LAC13 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Second, stronger diverging member; same glass coordinates as L2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Rear-convex positive meniscus",
      type: "Positive Meniscus (convex to rear)",
      nd: 1.64769,
      vd: 33.9,
      focalLengthMm: 174.9579459,
      glass: "E-FD2 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Weak positive meniscus beginning the rear positive component; its front radius places the entrance pupil forward.",
    },
    {
      id: 5,
      name: "L5",
      label: "Biconvex positive lens",
      type: "Biconvex Positive",
      nd: 1.72825,
      vd: 28.3,
      focalLengthMm: 31.6569055,
      glass: "E-FD10 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Strong positive element immediately ahead of the stop.",
    },
    {
      id: 6,
      name: "L6",
      label: "Biconcave negative, cemented",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.5,
      focalLengthMm: -15.5986241,
      glass: "FD140 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative member of the cemented negative component, joined to L7 at surface 12.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Positive meniscus, cemented",
      type: "Positive Meniscus",
      nd: 1.77252,
      vd: 49.6,
      focalLengthMm: 33.7862795,
      glass: "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus convex to the front, cemented behind L6.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Rear-convex positive meniscus",
      type: "Positive Meniscus (convex to rear)",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 37.224099,
      glass: "BACD16 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus convex to the image, ahead of the final positive element.",
    },
    {
      id: 9,
      name: "L9",
      label: "Final biconvex positive lens",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.0,
      focalLengthMm: 34.3856384,
      glass: "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Final positive element ahead of the long SLR back-focus space.",
    },
  ],

  surfaces: [
    { label: "1", R: 36.72456, d: 2.88, sd: 15, medium: 1 },
    { label: "2", R: 81.768, d: 0.24, sd: 15 },
    { label: "3", R: 13.33344, d: 1.2, sd: 9.5, medium: 2 },
    { label: "4", R: 8.88888, d: 4.32, sd: 7.8 },
    { label: "5", R: 32.43744, d: 0.96, sd: 7.5, medium: 3 },
    { label: "6", R: 11.8296, d: 3.84, sd: 7.5 },
    { label: "7", R: -79.99992, d: 4.8, sd: 7, medium: 4 },
    { label: "8", R: -48.0, d: 0.24, sd: 7 },
    { label: "9", R: 28.6104, d: 5.76, sd: 7, medium: 5 },
    { label: "10", R: -108.64008, d: 0.8, sd: 7 },
    // Figure 1 iris inferred at about 30% of source d10; total gap remains 2.64 mm.
    { label: "STO", R: "flat", d: 1.84 },
    { label: "11", R: -47.05608, d: 1.2, sd: 6.5, medium: 6 },
    { label: "12", R: 16.07352, d: 2.88, sd: 6.5, medium: 7 },
    { label: "13", R: 38.57232, d: 1.44, sd: 6.5 },
    // L8 raised to the stated f/2.8 on-axis ray height (was 6.5 mm on both faces).
    { label: "14", R: -46.08552, d: 2.4, sd: 6.6, medium: 8 },
    { label: "15", R: -15.69144, d: 0.24, sd: 6.6 },
    { label: "16", R: 199.61568, d: 3.36, sd: 8.5, medium: 9 },
    { label: "17", R: -19.37592, d: 37.44, sd: 8.5 },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "NO_INTERNAL_RECONSTRUCTION: infinity prescription only; maker MFD is 0.3 m (Fujica AZ-1 manual), but the patent gives no focus spacing.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16] },
  projection: { kind: "rectilinear", fullFieldDeg: 84 },

  groups: [
    { text: "FRONT (−)", fromSurface: "1", toSurface: "6" },
    { text: "REAR (+)", fromSurface: "7", toSurface: "17" },
  ],
  doublets: [{ text: "D1", fromSurface: "11", toSurface: "13" }],
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
