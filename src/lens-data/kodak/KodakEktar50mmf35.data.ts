import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * KODAK EKTAR 50mm f/3.5 — research correlation to US 2,165,328, Example 2.
 *
 * Source prescription: US 2,165,328, Fig. 2 / Example 2, published at f/3.5 and nominal F = 100 mm.
 * The patent does not name Ektar, Ektra, or Retina; the production correlation remains research-grade rather than
 * manufacturer-confirmed.
 *
 * Scaling: all patent prescription lengths are scaled uniformly by s = 0.5 from the published F = 100 mm normalization.
 * The resulting computed paraxial EFL is 51.601928432594 mm; it is not forced to the marketed 50 mm value.
 *
 * Stop: the patent gives no stop plane or diaphragm diameter. A model STO is inserted inside S2, splitting the scaled
 * 3.43 mm gap as 2.05 mm + 1.38 mm. The plane sits just behind element II's rim (R4 sag at the 6.7 mm rim is 1.96 mm),
 * so the diaphragm does not cut through the glass; R5's rim is 0.82 mm behind it. The stop radius is derived from the
 * design f-number (f/3.5). This reproduces the published relative aperture by construction and is not independent
 * evidence of the physical diaphragm diameter or exact production stop position.
 *
 * NOTE ON SEMI-DIAMETERS: no clear apertures are published. The element rims follow the to-scale Fig. 2 section
 * (axial scale ≈0.041 mm/px at 300 dpi from the first-to-last vertex span; averaged upper/lower rims): I ≈7.7 mm,
 * II ≈6.5 mm, III+IV ≈6.2 mm, rounded up just enough to pass the full f/3.5 axial beam (S1/S2 7.8, S3/S4 6.7,
 * S5–S7 6.4). The figure's ≈1.3 mm L1 edge thickness is reproduced at 7.8 mm. The 24×36 mm corner bundle is
 * vignetted (front and rear rims clip it), as in the drawing.
 *
 * Image plane: Example 2 gives no image-plane row. Surface 7 d uses the independently computed paraxial BFD after the
 * same 0.5 scale, measured from the R7 vertex.
 *
 * Focus: NO_INTERNAL_RECONSTRUCTION. The patent publishes no focus states or internal movement law. `closeFocusM` uses
 * the 3.5 ft normal-focus near limit documented for both reviewed Kodak 50 mm f/3.5 Ektar implementations; the optical
 * prescription remains the static infinity model and does not simulate close-focus motion.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-ektar-50f35",
  maker: "Kodak",
  name: "KODAK EKTAR 50mm f/3.5",
  subtitle: "US 2,165,328 — Example 2; 0.5× normalized research correlation",

  catalog: {
    imageFormat: "135-full-frame",
    specs: [
      "4 ELEMENTS / 3 GROUPS",
      "51.60 mm DESIGN / 50 mm MARKETED",
      "f/3.5 (MODELED STOP CALIBRATED)",
      "ALL-SPHERICAL",
    ],
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: { marketing: 50, design: 51.601928432594 },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  source: {
    patentNumber: "US 2,165,328",
    patentYear: 1939,
    authors: ["George H. Aklin", "Fred E. Altman"],
    assignees: ["Eastman Kodak Company"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element I",
      type: "Positive Meniscus",
      nd: 1.62,
      vd: 60.4,
      indexReference: "d",
      focalLengthMm: 26.130690801084,
      glass: "N-SK16 (SCHOTT catalog equivalent; patent 620/604; production supplier unspecified)",
      apd: false,
      role: "Front collective component; patent bending controls field and spherical-aberration balance.",
      diagramLabel: "I",
    },
    {
      id: 2,
      name: "L2",
      label: "Element II",
      type: "Biconcave Negative",
      nd: 1.605,
      vd: 38.2,
      indexReference: "d",
      focalLengthMm: -16.856434617477,
      glass: "F15 (HOYA catalog proxy; patent 605/382; production supplier unspecified)",
      apd: false,
      role: "Dispersive central component between the two positive components.",
      diagramLabel: "II",
    },
    {
      id: 3,
      name: "L3",
      label: "Element III",
      type: "Biconvex Positive",
      nd: 1.639,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: 16.028416256491,
      glass: "K-SK18 (SUMITA catalog equivalent; patent 639/555; production supplier unspecified)",
      apd: false,
      role: "Front crown element of the rear cemented collective component.",
      diagramLabel: "III",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element IV",
      type: "Negative Meniscus",
      nd: 1.523,
      vd: 58.4,
      indexReference: "d",
      focalLengthMm: -33.867812346582,
      glass: "C12 (HOYA catalog proxy; patent 523/584; production supplier unspecified)",
      apd: false,
      role: "Rear element of the cemented collective component; shares the R6 cemented interface with L3.",
      diagramLabel: "IV",
      cemented: "D1",
    },
  ],

  surfaces: [
    { label: "1", R: 13.75, d: 3.315, sd: 7.8, medium: 1 },
    { label: "2", R: 82.5, d: 2.225, sd: 7.8 },
    { label: "3", R: -58.5, d: 1.24, sd: 6.7, medium: 2 },
    { label: "4", R: 12.45, d: 2.05, sd: 6.7 },
    { label: "STO", R: "flat", d: 1.38 },
    { label: "5", R: 36.75, d: 3.98, sd: 6.4, medium: 3 },
    { label: "6", R: -13.6, d: 1.0, sd: 6.4, medium: 4 },
    { label: "7", R: -60.05, d: 41.781446018917, sd: 6.4 },
  ],

  focus: {
    closeFocusM: 1.0668,
    description:
      "NO_INTERNAL_RECONSTRUCTION — static infinity prescription only; 1.0668 m is the common documented 3.5 ft normal-focus near limit, not a modeled focus state.",
  },

  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "FRONT I", fromSurface: "1", toSurface: "2" },
    { text: "DISPERSIVE II", fromSurface: "3", toSurface: "4" },
    { text: "REAR III+IV", fromSurface: "5", toSurface: "7" },
  ],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  layout: { yScFill: 0.38 },
} satisfies LensDataV2Input;

export default LENS_DATA;
