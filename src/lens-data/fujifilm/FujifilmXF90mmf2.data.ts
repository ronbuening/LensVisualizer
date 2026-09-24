import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — FUJIFILM FUJINON XF 90mm f/2 R LM WR
 *
 * Data source: US 2016/0274335 A1, Example 1 (Tables 1–2, FIG. 1); inventor Daiki Kawamura, Fujifilm Corporation.
 * Three-group inner-focus medium telephoto for APS-C: G1 (+, 4 elements) / fixed stop / G2 (−, cemented doublet,
 * focus) / G3 (+, 5 elements). 11 elements / 8 groups, no aspherical surfaces. Patent f = 87.495, FNo. 2.06,
 * 2ω = 18.4°, Bf = 24.663 (air-converted); the prescription is stored at the patent's native scale and
 * reproduces f = 87.50 mm paraxially. Group focal lengths (calculated): G1 +70.38, G2 −48.07, G3 +57.50 mm.
 *
 * NOTE ON R1:
 *   The printed Table 1 reads R1 = 134.54219 (Table 12 repeats it for Example 6). Only the PDF's OCR text layer
 *   garbles the row to "134,542.19"; the stored value is the printed patent value, not a correction.
 *
 * NOTE ON FOCUS:
 *   Table 2 publishes two states: infinity (DD[8] 4.600, DD[11] 18.753) and "Proximal" (12.696 / 10.657,
 *   β = 0.14, FNo. 2.35, 2ω = 16.0°). The patent prints no object distance; the proximal gaps focus an object
 *   700 mm in front of surface 1 (calculated, β = −0.136), i.e. about 0.815 m object-to-image, so closeFocusM is
 *   that calculated conjugate. The production lens focuses to 0.6 m (0.2×); that travel is not published and is
 *   not modeled.
 *
 * NOTE ON SEMI-DIAMETERS:
 *   The patent lists no effective diameters. Values are estimates from a marginal + chief ray trace at f/2.06 and
 *   ω = 9.2° with mechanical clearance, bounded by the 62 mm filter thread, positive edge thickness and
 *   cemented-pair matching. Compared with FIG. 1 (drawn to scale, 0.0926 mm/px at 300 dpi) in the 2026-09-21
 *   audit: every rim is within about 11 % of the drawing (figure L11 24.5, L12 22.0, L13/L14 20.6, G2 14.3,
 *   L31 14.8, L32/L33 15.0, L34 16.5, L35 15.0 mm), so the estimates are retained. The STO value is the
 *   paraxial f/2.05 iris radius and matches the 14.2 mm stop symbol in FIG. 1; the engine derives the working
 *   iris from nominalFno.
 *
 * NOTE ON COVER GLASS:
 *   Table 1 ends with a parallel plate PP (surfaces 21–22, d = 2.850, nd = 1.51633, νd = 64.14, θgF = 0.53531)
 *   behind the printed 20.784 mm air gap. It is modeled in `rearPlates` (traced, not drawn); surface 20 keeps the
 *   physical d20 = 20.784 mm. Table 1 prints no d22, so the 1.999 mm of air behind the plate is derived from the
 *   patent's air-converted Bf = 24.663 mm (24.663 − 20.784 − 2.850/1.51633); FIG. 1 draws about 2.0 mm.
 *
 * NOTE ON PARTIAL DISPERSION:
 *   Table 1 prints θgF for every element. dPgF is calculated as θgF − (0.6438 − 0.001682·νd). The patent does
 *   not name glasses or call any element ED/anomalous; glass labels are catalog equivalents and apd flags
 *   are inferred.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-xf90f2",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 90mm f/2 R LM WR",
  subtitle: "US 2016/0274335 A1 EXAMPLE 1 — FUJIFILM / KAWAMURA",
  specs: [
    "11 ELEMENTS / 8 GROUPS",
    "f ≈ 87.5 mm (marketed 90 mm)",
    "F/2.06 (marketed F/2.0)",
    "2ω ≈ 18.4°",
    "3 ED ELEMENTS",
    "ALL SPHERICAL",
  ],

  focalLengthMarketing: 90,
  focalLengthDesign: 87.5,
  apertureMarketing: 2.0,
  apertureDesign: 2.06,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 2016/0274335 A1",
  patentAuthors: ["Daiki Kawamura"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2016,
  elementCount: 11,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.14,
      fl: 182.1,
      glass: "S-BSL7 (OHARA)",
      apd: false,
      dPgF: -0.00061,
      role: "Weak front positive — begins converging beam with low spherical contribution",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 114.9,
      glass: "FCD1 (HOYA)",
      apd: "inferred",
      dPgF: 0.03234,
      apdNote: "Patent θgF = 0.53887 → ΔθgF = +0.0323; fluorophosphate ED crown (catalog equivalent)",
      role: "Primary ED element — corrects longitudinal chromatic aberration in G1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.73,
      fl: 67.1,
      glass: "S-FPM2 (OHARA)",
      apd: "inferred",
      dPgF: 0.01438,
      apdNote: "Patent θgF = 0.54426 → ΔθgF = +0.0144; phosphate crown, moderate anomalous dispersion",
      cemented: "D1",
      role: "Strongest G1 positive — bulk of front group convergence; cemented to L14",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7495,
      vd: 35.33,
      fl: -58.8,
      glass: "S-NBH51 (OHARA)",
      apd: false,
      dPgF: -0.00248,
      cemented: "D1",
      role: "High-dispersion corrector — achromatizes G1 at cemented junction with L13",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 18.9,
      fl: 123.9,
      glass: "S-NPH2 (OHARA)",
      apd: false,
      dPgF: 0.03759,
      cemented: "D2",
      role: "Ultra-high-index focus group positive — achromatizes G2 with L22",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.63854,
      vd: 55.38,
      fl: -34.9,
      glass: "S-BSM18 (OHARA)",
      apd: false,
      dPgF: -0.00207,
      cemented: "D2",
      role: "Focus group negative — dominant diverging power of inner-focus G2",
    },
    {
      id: 7,
      name: "L31",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.59522,
      vd: 67.73,
      fl: 140.2,
      glass: "S-FPM2 (OHARA)",
      apd: "inferred",
      dPgF: 0.01438,
      apdNote: "Patent θgF = 0.54426 → ΔθgF = +0.0144; same glass row as L13",
      role: "Third ED element — corrects lateral color and secondary spectrum in rear group",
    },
    {
      id: 8,
      name: "L32",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      fl: 31.9,
      glass: "S-LAH55VS (OHARA)",
      apd: false,
      dPgF: -0.00708,
      cemented: "D3",
      role: "Strongest positive in entire lens — main relay element; cemented to L33",
    },
    {
      id: 9,
      name: "L33",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.1,
      fl: -27.9,
      glass: "S-TIM25 (OHARA)",
      apd: false,
      dPgF: 0.0091,
      cemented: "D3",
      role: "High-dispersion corrector — achromatizes G31 doublet with L32",
    },
    {
      id: 10,
      name: "L34",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.87,
      fl: 41.5,
      glass: "S-LAL8 (OHARA)",
      apd: false,
      dPgF: -0.00732,
      role: "G32 singlet — corrects field curvature and astigmatism at large off-axis offset",
    },
    {
      id: 11,
      name: "L35",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.43,
      fl: -72.4,
      glass: "S-NSL36 (OHARA; exact patent coordinate match)",
      apd: false,
      dPgF: 0.00088,
      role: "G33 rear negative — directs off-axis rays away from the axis and shortens total length (patent ¶0070)",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: Front objective (positive, f ≈ +70.4 mm) ──
    { label: "1", R: 134.54219, d: 4.55, nd: 1.51633, elemId: 1, sd: 27.0 }, // L11 front
    { label: "2", R: -308.4824, d: 0.52, nd: 1.0, elemId: 0, sd: 27.0 }, // L11 rear → air
    { label: "3", R: 57.11452, d: 6.05, nd: 1.497, elemId: 2, sd: 24.5 }, // L12 front (ED)
    { label: "4", R: 1e15, d: 0.18, nd: 1.0, elemId: 0, sd: 23.5 }, // L12 rear (flat) → air
    { label: "5", R: 54.95203, d: 7.01, nd: 1.59522, elemId: 3, sd: 22.5 }, // L13 front (cemented D1)
    { label: "6", R: -138.92, d: 3.0, nd: 1.7495, elemId: 4, sd: 22.5 }, // L13→L14 junction
    { label: "7", R: 65.12954, d: 8.05, nd: 1.0, elemId: 0, sd: 22.5 }, // L14 rear → air

    // ── Aperture stop (fixed between G1 and G2) ──
    { label: "STO", R: 1e15, d: 4.6, nd: 1.0, elemId: 0, sd: 14.2 },

    // ── G2: Inner-focus group (negative, f ≈ −48.1 mm) ──
    { label: "9", R: -99.96703, d: 2.61, nd: 1.92286, elemId: 5, sd: 14.5 }, // L21 front (cemented D2)
    { label: "10", R: -53.995, d: 1.49, nd: 1.63854, elemId: 6, sd: 14.5 }, // L21→L22 junction
    { label: "11", R: 38.38332, d: 18.753, nd: 1.0, elemId: 0, sd: 14.5 }, // L22 rear → air

    // ── G3: Rear relay (positive, f ≈ +57.5 mm) ──
    // Sub-group G31 (positive): L31 + [L32+L33 cemented]
    { label: "12", R: -299.93361, d: 2.8, nd: 1.59522, elemId: 7, sd: 16.5 }, // L31 front (ED)
    { label: "13", R: -65.51447, d: 0.25, nd: 1.0, elemId: 0, sd: 16.0 }, // L31 rear → air
    { label: "14", R: 65.03027, d: 6.51, nd: 1.83481, elemId: 8, sd: 16.0 }, // L32 front (cemented D3)
    { label: "15", R: -43.003, d: 1.35, nd: 1.6727, elemId: 9, sd: 16.0 }, // L32→L33 junction
    { label: "16", R: 33.7544, d: 9.18, nd: 1.0, elemId: 0, sd: 16.0 }, // L33 rear → air

    // Sub-group G32 (positive): L34
    { label: "17", R: 39.82254, d: 6.4, nd: 1.713, elemId: 10, sd: 16.0 }, // L34 front
    { label: "18", R: -107.03524, d: 5.75, nd: 1.0, elemId: 0, sd: 15.5 }, // L34 rear → air

    // Sub-group G33 (negative): L35
    { label: "19", R: -75.1706, d: 1.35, nd: 1.51742, elemId: 11, sd: 13.5 }, // L35 front
    { label: "20", R: 75.1706, d: 20.784, nd: 1.0, elemId: 0, sd: 13.5 }, // L35 rear → PP plate (patent d20)
  ],

  /* ── Parallel plate PP (patent surfaces 21–22): traced, not drawn ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.85,
      nd: 1.51633,
      vd: 64.14,
      glass: "S-BSL7 (OHARA)",
      dPgF: -0.00061,
      gapAfterMm: 1.999,
      source: "US 2016/0274335 A1, Example 1 Table 1 surfaces 21–22 (θgF 0.53531; air gap after derived from Bf 24.663)",
    },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (inner focus) ──
   *  Table 2: [infinity, proximal β = 0.14]. G2 moves 8.096 mm toward the image; DD[8] + DD[11] stays 23.353 mm.
   */
  var: {
    STO: [4.6, 12.696], // stop to G2 front
    "11": [18.753, 10.657], // G2 rear to G3 front
  },
  varLabels: [
    ["STO", "DD[8]"],
    ["11", "DD[11]"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "7" },
    { text: "G2 (−) ← Focus", fromSurface: "9", toSurface: "11" },
    { text: "G3 (+)", fromSurface: "12", toSurface: "20" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
  ],

  /* ── Focus configuration ── */
  // Calculated conjugate of the patent's proximal state (object 700 mm from surface 1 + 115.07 mm air-converted
  // track; the physical PP plate adds 0.97 mm, 0.816 m object-to-image physically).
  closeFocusM: 0.815,
  focusDescription:
    "Inner focus — only the G2 cemented doublet (L21+L22) moves, 8.1 mm toward the image from infinity to the patent's proximal state (β ≈ −0.14, about 0.82 m). Production MFD 0.6 m (0.2×) is beyond the published data and is not modeled.",

  /* ── Aperture configuration ── */
  nominalFno: 2.06,
  fstopSeries: [2.06, 2.8, 4, 5.6, 8, 11, 16],
  maxFstop: 16,

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
