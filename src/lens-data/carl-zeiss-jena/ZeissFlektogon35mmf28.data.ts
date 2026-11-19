import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — CARL ZEISS JENA FLEKTOGON 35mm f/2.8
 * Data source: US 2,793,565 A (Harry Zöllner and Rudolf Solisch, VEB Carl Zeiss Jena), First embodiment (Fig. 1).
 * DD 10604 and DE 953 471 print the same two numerical examples.
 * 6 elements / 5 groups, all spherical; the rear face of element II is plane. Elements carry the patent's
 * lens numerals I–VI; III and IV form the cemented member C1.
 * The model is the patent design of the Flektogon 2.8/35, not the factory prescription: the production
 * glasses differ from the patent's.
 *
 * SCALING: the patent normalizes both embodiments to f = 100. Every radius and axial spacing is scaled
 * ×0.35 for the 35 mm lens; indices and Abbe numbers are unchanged and no row is retuned. Traced EFL
 * 34.965 mm (99.90 at patent scale); the scaled construction length 47.061 mm equals the printed L = 134.46.
 *
 * STOP: the patent splits the diaphragm space between r7 and r8 into b1 = 7.55 and b2 = 8.09; the scaled
 * split (2.6425 + 2.8315 mm) is used as printed. The patent gives no f-number, field or iris diameter:
 * f/2.8 and the 62° diagonal field are from the 1957 Carl Zeiss Jena catalogue, and the stop radius is
 * derived from f/2.8. The iris plane sits 0.002 mm behind the rim of the deeply concave surface 7, whose
 * 5.79 mm clear radius trims the paraxially sized f/2.8 beam slightly (traced equivalent f/2.807).
 *
 * SEMI-DIAMETERS: not published. Estimated from Fig. 1 (≈5.6 px per patent unit at 300 dpi, from the r1
 * arc and the r1–r11 span; the rear group is drawn axially stretched), floor-checked by real-ray trace and
 * held to the modelled corner light. Element I's front rim is as drawn (17 mm); its rear face ends at a bevel
 * the figure draws at about 15 mm, kept at 15.8 mm, the smallest rim that leaves the engine's 29.7° field
 * estimate unchanged (the corner chief ray crosses it at 14.7 mm). Element II and the cemented pair are drawn
 * square-cut at about 8.7 and 7.1 mm; they keep 9.7 and 7.7 mm, the smallest values that cost no more than
 * 3 points of illumination at any field. Element V is square at 6.4 mm, just above the axial f/2.8 beam
 * (the figure draws 6.0 mm); surface 7 and element VI are kept. Not measured factory rims. Default geometry
 * checks (no gap-sag or rim-angle override).
 *
 * BACK FOCUS: not printed. The last gap is the computed paraxial back focus, 34.559 mm, slightly shorter
 * than the focal length; the 1957 catalogue describes the production lens's back focus as slightly longer.
 *
 * GLASS: the patent prints d-line nd and ν only. Element IV matches the BaSF2-class row J-BASF2 (Hikari);
 * the other elements have no exact catalog row and keep the printed values (Abbe-only dispersion).
 *
 * FOCUS: one infinity prescription; the patent gives no focus movement. The production lens focuses to
 * 0.36 m.
 */
const LENS_DATA = {
  schema: 2,
  key: "zeiss-flektogon-35mm-f28",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA FLEKTOGON 35mm f/2.8",
  subtitle: "US 2,793,565 A, Embodiment 1 — ×0.35 patent design of the Flektogon 2.8/35; production glasses differ",
  visible: true,
  catalog: {
    lensMounts: ["m42", "exakta", "praktina"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 5 GROUPS", "DESIGN f = 35.00 mm (×0.35)", "F/2.8", "2ω = 62°", "ALL SPHERICAL"],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: {
      marketing: 35,
      design: 35,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    closeFocusM: {
      marketing: 0.36,
    },
  },
  source: {
    patentNumber: "US 2,793,565 A",
    example: {
      label: "Embodiment 1",
      id: "1",
    },
    patentYear: 1957,
    authors: ["Harry Zöllner", "Rudolf Solisch"],
    assignees: ["VEB Carl Zeiss Jena"],
  },
  elements: [
    {
      id: 1,
      name: "I",
      label: "Element I",
      diagramLabel: "I",
      type: "Negative Meniscus",
      role: "Front diverging meniscus set far ahead of the Gauss-type rear part; lengthens the back focus.",
      nd: 1.6224,
      vd: 60.3,
      indexReference: "d",
      indexReferenceNote: "The patent states d-line indices.",
      glass: "Unmatched (crown; patent nd = 1.6224, νd = 60.3)",
      focalLengthMm: -87.44789295299776,
    },
    {
      id: 2,
      name: "II",
      label: "Element II",
      diagramLabel: "II",
      type: "Plano-convex Positive",
      role: "Flint collective lens at the front of the rear part.",
      nd: 1.6051,
      vd: 42.2,
      indexReference: "d",
      indexReferenceNote: "The patent states d-line indices.",
      glass: "Unmatched (flint; patent nd = 1.6051, νd = 42.2)",
      focalLengthMm: 43.861345232193024,
    },
    {
      id: 3,
      name: "III",
      label: "Element III",
      diagramLabel: "III",
      type: "Positive Meniscus",
      role: "Positive front component of the cemented meniscus ahead of the stop.",
      nd: 1.6583,
      vd: 51,
      indexReference: "d",
      indexReferenceNote: "The patent states d-line indices.",
      glass: "Unmatched (dense crown; patent nd = 1.6583, νd = 51.0)",
      focalLengthMm: 19.277144634498597,
      cemented: "C1",
    },
    {
      id: 4,
      name: "IV",
      label: "Element IV",
      diagramLabel: "IV",
      type: "Negative Meniscus",
      role: "Negative rear component of the cemented meniscus; its concave rear face meets the stop.",
      nd: 1.6645,
      vd: 35.9,
      indexReference: "d",
      indexReferenceNote: "The patent states d-line indices.",
      glass: "BaSF2-class dense barium flint (catalog row J-BASF2, Hikari)",
      focalLengthMm: -13.401263761907405,
      cemented: "C1",
    },
    {
      id: 5,
      name: "V",
      label: "Element V",
      diagramLabel: "V",
      type: "Negative Meniscus",
      role: "High-index negative meniscus behind the stop, concave toward it.",
      nd: 1.7588,
      vd: 26.7,
      indexReference: "d",
      indexReferenceNote: "The patent states d-line indices.",
      glass: "Unmatched (dense flint; patent nd = 1.7588, νd = 26.7)",
      focalLengthMm: -41.30076998957303,
    },
    {
      id: 6,
      name: "VI",
      label: "Element VI",
      diagramLabel: "VI",
      type: "Positive Meniscus",
      role: "Rear collective meniscus closing the Gauss-type rear part.",
      nd: 1.6224,
      vd: 60.3,
      indexReference: "d",
      indexReferenceNote: "The patent states d-line indices.",
      glass: "Unmatched (crown; patent nd = 1.6224, νd = 60.3)",
      focalLengthMm: 23.552103188320075,
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 39.697,
      d: 2.359,
      sd: 17,
      medium: 1,
    },
    {
      label: "2",
      R: 22.4315,
      d: 25.4905,
      sd: 15.8,
    },
    {
      label: "3",
      R: 26.5405,
      d: 2.8315,
      sd: 9.7,
      medium: 2,
    },
    {
      label: "4",
      R: "flat",
      d: 1.8865,
      sd: 9.7,
    },
    {
      label: "5",
      R: 10.668,
      d: 3.3985,
      sd: 7.7,
      medium: 3,
    },
    {
      label: "6",
      R: 58.4815,
      d: 1.134,
      sd: 7.7,
      medium: 4,
    },
    {
      label: "7",
      R: 7.6685,
      d: 2.6425,
      sd: 5.79,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.8315,
    },
    {
      label: "8",
      R: -8.89,
      d: 1.134,
      sd: 6.4,
      medium: 5,
    },
    {
      label: "9",
      R: -13.0935,
      d: 0.0945,
      sd: 6.4,
    },
    {
      label: "10",
      R: -83.139,
      d: 3.2585,
      sd: 7,
      medium: 6,
    },
    {
      label: "11",
      R: -12.649,
      d: 34.55906720080986,
      sd: 7,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only; the patent gives no focus movement. The production lens focuses to 0.36 m.",
  },
  gaps: {},
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  doublets: [{ text: "C1", fromSurface: "5", toSurface: "7" }],
  layout: {
    yScFill: 0.35,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
