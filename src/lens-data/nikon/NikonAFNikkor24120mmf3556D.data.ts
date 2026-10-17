import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AI AF ZOOM-NIKKOR 24-120mm f/3.5-5.6 D IF             ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 5,734,508 A, Working Example 1 (Haruo Sato / Nikon).          ║
 * ║ Production correlation: Nikon AI AF Zoom-Nikkor 24-120mm f/3.5-5.6 D    ║
 * ║ (IF). Patent dimensions are retained at scale 1.0.                       ║
 * ║                                                                            ║
 * ║ Architecture: positive-negative-positive-positive four-moving-group      ║
 * ║ zoom. The patent's G3 is split into independently moving G3F and G3R.    ║
 * ║ Production count is 15 elements / 11 air-spaced groups. The elements     ║
 * ║ array contains 16 refractive material bodies because the deposited       ║
 * ║ aspheric resin and its glass substrate are modeled separately; together  ║
 * ║ they are the production lens element L21.                                ║
 * ║                                                                            ║
 * ║ Zoom gaps: d16, d26, d31, and Bf (surface 38). The stop travels with     ║
 * ║ G3F because its 1.00 mm spacing to surface 27 is fixed. Only the three    ║
 * ║ patent-tabulated zoom states are modeled; no continuous cam-law claim is  ║
 * ║ made because the patent text is internally inconsistent about G3R motion. ║
 * ║                                                                            ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. Infinity spacings are patent-   ║
 * ║ published. The close-focus endpoint is code-solved for Nikon's 0.5 m     ║
 * ║ minimum focus distance measured from the image plane, with G2 as the      ║
 * ║ sole focus group, d16 + d26 conserved, and d31/Bf fixed at each zoom      ║
 * ║ state. The reconstructed telephoto magnification is approximately        ║
 * ║ -0.21756 (about 1:4.60), versus Nikon's rounded 1:4.8 specification.      ║
 * ║                                                                            ║
 * ║ F-number correction: Table 1's wide-angle F/2.6 is a source error. The     ║
 * ║ Working Example 1 aberration sheets establish F/3.60, F/4.68, F/5.90. The  ║
 * ║ patent prints no stop diameter. One fixed iris of 8.1162 mm radius is      ║
 * ║ traced, set by a real marginal ray at F/3.60 in the wide state and held    ║
 * ║ through the zoom, where it traces f/4.66 at 50 mm and f/5.89 at 116.5 mm.  ║
 * ║                                                                            ║
 * ║ Aspheres: patent EQ. 3 has k multiplying the height term directly, with    ║
 * ║ no (1 + k) factor, so its k = 1 is a sphere and K = k - 1. Surfaces 17A    ║
 * ║ and 34A print k = 0.0000, entered as K = -1 (paraboloid base); C4-C10 are  ║
 * ║ entered as printed. The traced d-line spherical aberration follows         ║
 * ║ FIGS. 3A(I)-3C(I) at all three zoom states.                                ║
 * ║                                                                            ║
 * ║ Semi-diameters: surfaces 17A and 34A use the patent clear diameters       ║
 * ║ phi1 = 27.3 mm and phi2 = 15.6 mm. Other values were derived from exact  ║
 * ║ d-line sequential ray envelopes over all defined zoom/focus endpoints    ║
 * ║ (full on-axis aperture and 60% field with 75% pupil sampling), compared   ║
 * ║ with Fig. 2, and checked for edge thickness, actual rim slope, conic      ║
 * ║ limits, shared-band cross-gap intrusion, and render-trim geometry.        ║
 * ║ The 2026-07-29 figure pass enlarged G1, L22/L23, and the final cemented   ║
 * ║ pair; apparent housing edges that failed those checks were not copied.    ║
 * ║ Surface 34A remains the source-published vignetting boundary.             ║
 * ║                                                                            ║
 * ║ Spectral limitation: the patent publishes nd and vd only. nC, nF, ng,    ║
 * ║ and dPgF are therefore intentionally absent; no APO or anomalous-partial- ║
 * ║ dispersion claim is encoded.                                              ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-ai-af-zoom-nikkor-24-120-f35-56d",
  maker: "Nikon",
  name: "NIKON AI AF ZOOM-NIKKOR 24-120mm f/3.5-5.6 D IF",
  subtitle: "US 5,734,508 A WORKING EXAMPLE 1 — PRODUCTION-CORRELATED, SCALE 1.0",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "15 ELEMENTS / 11 GROUPS",
      "DESIGN f = 24.701-116.518 mm",
      "F/3.60-5.90",
      "2 ASPHERICAL ELEMENTS",
      "G2 INTERNAL FOCUS",
    ],
    elementCount: 15,
    groupCount: 11,
    focalLengthMm: { marketing: [24, 120], design: [24.701065, 116.517708] },
    fNumber: { marketing: 3.5, design: 3.6 },
  },

  source: {
    patentNumber: "US 5,734,508 A",
    patentYear: 1998,
    authors: ["Haruo Sato"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1 — L11",
      type: "Negative Meniscus",
      nd: 1.86074,
      vd: 23.0,
      focalLengthMm: -123.129151,
      glass: "J-SFH2 (Hikari; patent code 861230)",
      role: "Negative front component of the weak-positive G1 cemented pair.",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2 — L12",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: 98.256075,
      glass: "LAC8 (coordinate equivalent; patent code 713539)",
      role: "Positive partner of C1; offsets L11 while retaining a weak positive cemented net.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3 — L13",
      type: "Positive Meniscus",
      nd: 1.77279,
      vd: 49.5,
      focalLengthMm: 101.136205,
      glass: "773495 — lanthanum crown / TAF class (vendor unresolved)",
      role: "Second positive collector in G1.",
    },
    {
      id: 4,
      name: "L21r",
      label: "Element 4a — L21 Aspheric Resin",
      type: "Hybrid Aspheric Resin Layer",
      nd: 1.49521,
      vd: 56.3,
      focalLengthMm: -382.757914,
      glass: "Unmatched (hybrid aspheric resin, nd=1.49521, vd=56.3)",
      role: "Deposited 0.03 mm aspheric layer on the L21 glass substrate.",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L21g",
      label: "Element 4b — L21 Glass Substrate",
      type: "Negative Meniscus",
      nd: 1.84042,
      vd: 43.4,
      focalLengthMm: -18.834706,
      glass: "Unmatched (840434 high-index glass)",
      role: "Primary negative power of the hybrid L21 focus/zoom element.",
      cemented: "H1",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 5 — L22",
      type: "Biconcave Negative",
      nd: 1.84042,
      vd: 43.4,
      focalLengthMm: -16.254156,
      glass: "Unmatched (840434 high-index glass)",
      role: "Strong negative member of G2 and the front component of C2.",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 6 — L23",
      type: "Positive Meniscus",
      nd: 1.68893,
      vd: 31.1,
      focalLengthMm: 59.63473,
      glass: "689311 — high-dispersion flint class (vendor unresolved)",
      role: "Positive cemented partner used to moderate G2 aberrations.",
      cemented: "C2",
    },
    {
      id: 8,
      name: "L24",
      label: "Element 7 — L24",
      type: "Biconvex Positive",
      nd: 1.7552,
      vd: 27.6,
      focalLengthMm: 18.572686,
      glass: "755276 — SF4 class (vendor unresolved)",
      role: "Biconvex positive lens associated with patent condition (8).",
    },
    {
      id: 9,
      name: "L25",
      label: "Element 8 — L25",
      type: "Negative Meniscus",
      nd: 1.77279,
      vd: 49.5,
      focalLengthMm: -33.392855,
      glass: "773495 — lanthanum crown / TAF class (vendor unresolved)",
      role: "Rear negative member of G2.",
    },
    {
      id: 10,
      name: "L3F1",
      label: "Element 9 — L3F1",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.1,
      focalLengthMm: 37.2394,
      glass: "517641 — BK7 class (vendor unresolved)",
      role: "Positive front element of G3F immediately behind the traveling stop.",
    },
    {
      id: 11,
      name: "L3F2",
      label: "Element 10 — L3F2",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.1,
      focalLengthMm: 21.536693,
      glass: "517641 — BK7 class (vendor unresolved)",
      role: "Positive component of the weak-negative G3F cemented pair.",
      cemented: "C3",
    },
    {
      id: 12,
      name: "L3F3",
      label: "Element 11 — L3F3",
      type: "Biconcave Negative",
      nd: 1.79631,
      vd: 40.9,
      focalLengthMm: -17.966261,
      glass: "NBFD2 (HOYA catalog equivalent; production supplier unspecified; patent 796409)",
      role: "Negative cemented partner that controls the net power of C3.",
      cemented: "C3",
    },
    {
      id: 13,
      name: "L3R1",
      label: "Element 12 — L3R1",
      type: "Biconvex Positive",
      nd: 1.65844,
      vd: 50.8,
      focalLengthMm: 23.473405,
      glass: "J-SSK5 (Hikari; patent code 658508)",
      role: "Positive lead element of G3R and the lens used in patent condition (9).",
    },
    {
      id: 14,
      name: "L3R2",
      label: "Element 13 — L3R2",
      type: "Negative Meniscus (1x Asph)",
      nd: 1.79668,
      vd: 45.4,
      focalLengthMm: -60.366703,
      glass: "795454 — LaSF class (catalog-near; vendor unresolved)",
      role: "Aspheric negative meniscus for spherical-aberration and coma correction in G3R.",
    },
    {
      id: 15,
      name: "L3R3",
      label: "Element 14 — L3R3",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.4,
      focalLengthMm: -18.604546,
      glass: "NBFD10 (HOYA catalog equivalent; production supplier unspecified; patent 834374)",
      role: "Negative front component of the final Petzval-balancing cemented pair.",
      cemented: "C4",
    },
    {
      id: 16,
      name: "L3R4",
      label: "Element 15 — L3R4",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 58.9,
      focalLengthMm: 25.81633,
      glass: "J-K3 (Hikari; patent code 518589)",
      role: "Positive rear component of C4 and the final refractive element.",
      cemented: "C4",
    },
  ],

  /* (moved from asph)
   * Conic convention: patent EQ. 3 (col. 15) prints the conic root as [1 + (1 - k·y²)^(1/2)], with k multiplying the
   * height term directly and no (1 + k) factor, so the patent's k = 1 is a sphere and K here is k - 1. Both surfaces
   * print k = 0.0000, which is K = -1 (paraboloid base). C4-C10 are entered as printed; C10 of surface 34 is positive.
   */
  surfaces: [
    { label: "12", R: 176.802, d: 1.8, sd: 34.0, medium: 1 },
    { label: "13", R: 65.95, d: 8.3, sd: 34.0, medium: 2 },
    { label: "14", R: 1066.144, d: 0.1, sd: 28.0 },
    { label: "15", R: 51.972, d: 6.1, sd: 28.0, medium: 3 },
    { label: "16", R: 147.189, sd: 28.0 },
    {
      label: "17A",
      R: 245.722,
      d: 0.03,
      sd: 13.65,
      medium: 4,
      asphere: { K: -1, A4: 1.5685e-5, A6: -2.039e-8, A8: 2.6186e-11, A10: 8.5042e-14 },
    },
    { label: "18", R: 107.0, d: 1.77, sd: 13.65, medium: 5 },
    { label: "19", R: 13.685, d: 6.05, sd: 10.5 },
    { label: "20", R: -29.385, d: 1.6, sd: 9.4, medium: 6 },
    { label: "21", R: 26.162, d: 2.3, sd: 11.5, medium: 7 },
    { label: "22", R: 69.447, d: 0.1, sd: 11.5 },
    { label: "23", R: 32.815, d: 5.6, sd: 11.5, medium: 8 },
    { label: "24", R: -22.698, d: 0.8, sd: 11.0 },
    { label: "25", R: -18.278, d: 1.6, sd: 8.5, medium: 9 },
    { label: "26", R: -65.05, sd: 8.2 },
    { label: "STO", R: "flat", d: 1.0 },
    { label: "27", R: 37.92, d: 3.3, sd: 9.0, medium: 10 },
    { label: "28", R: -37.92, d: 0.2, sd: 9.0 },
    { label: "29", R: 21.224, d: 5.8, sd: 9.0, medium: 11 },
    { label: "30", R: -21.224, d: 1.8, sd: 8.7, medium: 12 },
    { label: "31", R: 45.547, sd: 8.4 },
    { label: "32", R: 29.885, d: 5.0, sd: 9.0, medium: 13 },
    { label: "33", R: -29.885, d: 0.1, sd: 9.0 },
    {
      label: "34A",
      R: 62.246,
      d: 1.8,
      sd: 7.8,
      medium: 14,
      asphere: { K: -1, A4: -3.4324e-5, A6: -7.4054e-8, A8: -3.4715e-10, A10: 1.0897e-12 },
    },
    { label: "35", R: 26.783, d: 1.8, sd: 7.8 },
    { label: "36", R: -83.063, d: 1.7, sd: 11.0, medium: 15 },
    { label: "37", R: 19.258, d: 5.0, sd: 11.0, medium: 16 },
    { label: "38", R: -39.94, sd: 11.0 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 24.7, nominalFNumber: 3.6, label: "24 mm" },
      { focalLengthMm: 50.0, nominalFNumber: 4.68 },
      { focalLengthMm: 116.5, nominalFNumber: 5.9, label: "120 mm" },
    ],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.5,
    description:
      "CONSTRAINED_RECONSTRUCTION: patent-published infinity zoom states with a code-solved 0.5 m endpoint. Only G2 moves for focus; d16 + d26 is conserved while d31 and Bf remain fixed at each zoom position. The telephoto endpoint traces to approximately 0.21756x (about 1:4.60), rather than the rounded marketed 1:4.8.",
  },

  gaps: {
    "16": {
      label: "D16",
      values: [
        [1.967, 1.13863326642],
        [17.5864, 16.150845686],
        [36.3302, 32.8224716646],
      ],
    },
    "26": {
      label: "D26",
      values: [
        [14.0919, 14.9202667336],
        [6.7887, 8.22425431403],
        [0.9512, 4.45892833541],
      ],
    },
    "31": {
      label: "D31",
      values: [
        [5.7066, 5.7066],
        [2.2679, 2.2679],
        [0.7991, 0.7991],
      ],
    },
    "38": {
      label: "BF",
      values: [
        [39.3381, 39.3381],
        [56.9369, 56.9369],
        [76.0792, 76.0792],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "G1 (+)", fromSurface: "12", toSurface: "16" },
    { text: "G2 (-)", fromSurface: "17A", toSurface: "26" },
    { text: "G3F (+)", fromSurface: "27", toSurface: "31" },
    { text: "G3R (+)", fromSurface: "32", toSurface: "38" },
  ],
  doublets: [
    { text: "C1", fromSurface: "12", toSurface: "14" },
    { text: "H1", fromSurface: "17A", toSurface: "19" },
    { text: "C2", fromSurface: "20", toSurface: "22" },
    { text: "C3", fromSurface: "29", toSurface: "31" },
    { text: "C4", fromSurface: "36", toSurface: "38" },
  ],

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
