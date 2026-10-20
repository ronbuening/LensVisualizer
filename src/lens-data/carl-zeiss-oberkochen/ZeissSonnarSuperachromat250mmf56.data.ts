import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — CARL ZEISS SONNAR SUPERACHROMAT 250mm f/5.6 (Hasselblad V)
 *
 * Data source: US 3,883,229 Example II (printed "Example II"; repeated in claim 7),
 * Fritz Determann and Heinz Zajadatz / Carl-Zeiss-Stiftung; priority DE 2208163 (1972-02-22).
 * Four-part telephoto (+ − + −): T1 = L1 + L2, T2 = L3, T3 = L4 + L5, T4 = L6.
 * 6 elements / 6 groups, all air-spaced, all spherical. L2 is calcium fluoride (patent "Fluorspar").
 * Focus: unit focusing (whole optical unit on the Hasselblad V helicoid), reconstructed; the patent
 *   gives only the infinity state.
 *
 * PRODUCT CORRELATION: research correlation to the Zeiss Sonnar Superachromat 5.6/250 for Hasselblad V
 *   (C 1972, CF, CFE). The 2002 Zeiss CFE data sheet matches element/group count, f-number, the crystal
 *   element and total track, but lists BFD 117.0 mm and vertex length 103.9 mm against this model's
 *   122.76 mm and 98.41 mm. No primary source states that Example II is the production prescription, and
 *   no source compares the C, CF and CFE optics directly; CF and CFE are both listed as 6 elements / 6 groups.
 *
 * NOTE ON SCALING: the patent is normalized to f = 1.0. Every R and d is the printed value × 249.2
 *   exactly (manufacturer design focal length 249.2 mm). Modeled EFL = 249.21 mm. No aspheres.
 * NOTE ON INDICES: the patent prints glass names, P** = (nF − ni)/(nF − nC), P* = (nF − nt)/(nF − nC)
 *   and thick-lens element power × structural length, but no nd or νd. nd values are back-solved from
 *   the published powers and rounded to 5 decimals; νd and dPgF are catalog values (Schott 2008 AGF data,
 *   incl. obsolete glasses; normal line P_g,F = 0.6438 − 0.001682·νd). Glass labels are class-level.
 * NOTE ON SOURCE DISCREPANCIES: R3 is .17249 in the description table and .17248 in claim 7 (description
 *   adopted; first-order indistinguishable once L2's index is fixed by its published power). L1 power is
 *   −.563798 in the description and −.56798 in claim 7 (claim dropped a digit; description used).
 * NOTE ON STOP POSITION: not published numerically. Placed in d10 at 0.81 of the gap from R10, measured
 *   from the iris in Fig. 2 (about ±0.05). STO.sd is the real marginal-ray height at the stop for an
 *   entrance pupil of Ø 44.58 mm (EFL / 5.59), calibrated to the Zeiss data-sheet pupil Ø 44.6 mm. This
 *   is calibration to a published aperture, not a measured diaphragm diameter.
 * NOTE ON SEMI-DIAMETERS: none published. Modeled from exact ray envelopes at infinity and 3.0 m:
 *   full on-axis pupil and the full-field (9.03°, 6×6 diagonal) chief ray, +8% clearance, rounded up
 *   to 0.1 mm, one SD per element. L6 (behind the stop) also covers, +3%, every sampled 60%/100% field ray
 *   transmitted by the front apertures and the stop. Off-axis bundles are vignetted at R1. L2 (22.2) is
 *   lowered to its Fig. 2 proportion: the figure draws it no taller than L3, with a flat ~1.9 mm edge land
 *   (model edge 1.76 mm; 4% over its axial marginal ray).
 * NOTE ON FOCUS: the patent publishes only the infinity state. The close state moves the whole unit:
 *   only the back focus changes, solved paraxially for the manufacturer's 3.0 m object-to-film minimum
 *   (model scale 1:9.62 vs 1:9.6 published). Beyond-infinity helicoid travel is not modeled.
 *
 * Optical design only: glass surfaces, stop and the variable back focus. No filters or mechanics.
 */

const LENS_DATA = {
  schema: 2,
  key: "zeiss-sonnar-superachromat-250f56",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS SONNAR SUPERACHROMAT 250mm f/5.6 (Hasselblad V)",
  subtitle: "US 3,883,229, Example II — research correlation to the C, CF and CFE versions",

  catalog: {
    lensMounts: ["hasselblad-v"],
    imageFormat: "6x6",
    specs: ["6 ELEMENTS / 6 GROUPS", "DESIGN f = 249.20 mm", "DESIGN F/5.6", "ALL SPHERICAL", "1 CaF₂ CRYSTAL ELEMENT"],
    elementCount: 6,
    groupCount: 6,
    focalLengthMm: { marketing: 250, design: 249.21 },
    fNumber: { marketing: 5.6, design: 5.59 },
  },

  source: {
    patentNumber: "US 3,883,229",
    patentYear: 1975,
    authors: ["Fritz Determann", "Heinz Zajadatz"],
    assignees: ["Carl-Zeiss-Stiftung"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.73499,
      vd: 41.59,
      indexReference: "d",
      focalLengthMm: -392.3,
      glass: 'LaFN8 class (Schott, obsolete, 735416; patent "LaFN 8")',
      apd: false,
      role: "Weak negative front meniscus of part T1 (patent glass range 1, power characteristic A).",
      dPgF: -0.0029,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.43388,
      vd: 95.0,
      indexReference: "d",
      focalLengthMm: 66.7,
      glass: 'CaF2 (calcium fluoride crystal; patent "Fluorspar")',
      apd: "patent",
      apdNote:
        "The patent names the material \"Fluorspar\" and selects its glasses by partial dispersion; catalog ΔPgF = +0.0552, printed i- and t-line partial dispersions P** = −1.7237, P* = 1.7873.",
      role: "Strong positive crystal element of part T1 (glass range 2, characteristic B); main converging power of the front group.",
      dPgF: 0.0552,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.68247,
      vd: 48.2,
      indexReference: "d",
      focalLengthMm: -89.8,
      glass: 'LaF20 class (Schott, obsolete, 682482; patent "LaF 20") ≈ LAFL20 (Hoya)',
      apd: false,
      role: "Diverging element that forms part T2 on its own (patent glass range 3, characteristic C).",
      dPgF: -0.0021,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.62097,
      vd: 35.88,
      indexReference: "d",
      focalLengthMm: 148.3,
      glass: 'FN11 class (Schott, obsolete, 621362; patent "F 11") ≈ TIM11 (OHARA)',
      apd: false,
      role: "First positive member of part T3 (glass range 4, power D1), concave to the object.",
      dPgF: 0.006,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.68248,
      vd: 48.2,
      indexReference: "d",
      focalLengthMm: 245.2,
      glass: 'LaF20 class (Schott, obsolete, 682482; patent "LaF 20") ≈ LAFL20 (Hoya)',
      apd: false,
      role: "Second positive member of part T3 (glass range 3, power D2), convex to the object.",
      dPgF: -0.0021,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.56445,
      vd: 43.75,
      indexReference: "d",
      focalLengthMm: -73.7,
      glass: 'LF8 class (Schott, obsolete, 564438; patent "LF 8")',
      apd: false,
      role: "Rear negative part T4 behind the iris (glass range 5, characteristic E).",
      dPgF: -0.0006,
    },
  ],

  surfaces: [
    { label: "1", R: 51.086, d: 4.5386796, sd: 24.1, medium: 1 }, // L1 front
    { label: "2", R: 41.763428, d: 1.695806, sd: 24.1 }, // L1 rear
    { label: "3", R: 42.984508, d: 11.0226144, sd: 22.2, medium: 2 }, // L2 front (description R3 .17249)
    { label: "4", R: -81.545716, d: 1.9950952, sd: 22.2 }, // L2 rear
    { label: "5", R: -73.733296, d: 3.341772, sd: 22.2, medium: 3 }, // L3 front
    { label: "6", R: 369.633376, d: 34.5144492, sd: 22.2 }, // L3 rear
    { label: "7", R: -452.018896, d: 7.6808424, sd: 20.1, medium: 4 }, // L4 front
    { label: "8", R: -76.99034, d: 3.1421628, sd: 20.1 }, // L4 rear
    { label: "9", R: 129.240104, d: 8.1797408, sd: 18.7, medium: 5 }, // L5 front
    { label: "10", R: 552.929944, d: 16.40229, sd: 18.7 }, // L5 rear; d10 split at the Fig. 2 iris (0.81)
    { label: "STO", R: "flat", d: 3.8474528 }, // aperture stop (inferred position)
    { label: "11", R: -52.202416, d: 2.0449352, sd: 12.9, medium: 6 }, // L6 front
    { label: "12", R: 207.79542, sd: 12.9 }, // L6 rear; d = paraxial BFD at infinity
  ],

  focus: {
    closeFocusM: 3.0,
    description:
      "Unit focusing: the whole optical unit moves forward on the Hasselblad V helicoid, so only the back focus changes. The patent gives only the infinity state. The close state is derived for the marketed 3.0 m object-to-film minimum, which needs 25.9 mm of extension and gives 1:9.62 (Zeiss: 1:9.6).",
  },

  gaps: {
    "12": { label: "BF", values: [[122.758, 148.665]] }, // unit focus: back focus at infinity and at 3.0 m object-to-film (solved)
  },

  aperture: { nominalFNumber: 5.59, fStops: [5.6, 8, 11, 16, 22, 32, 45], maxFNumber: 45 },

  groups: [
    { text: "T1", fromSurface: "1", toSurface: "4" },
    { text: "T2", fromSurface: "5", toSurface: "6" },
    { text: "T3", fromSurface: "7", toSurface: "10" },
    { text: "T4", fromSurface: "11", toSurface: "12" },
  ],
  doublets: [],

  layout: { scFill: 0.6, yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
