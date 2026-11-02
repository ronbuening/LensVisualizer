/*
Carl Zeiss Jena Cardinar 100mm f/4, interchangeable telephoto for the Werra.
Source: Carl Zeiss Jena factory optical data sheet ("Optik-Daten"), Sach-Nr. 550513A (Opt.), Cardinar 4/100,
calculation of 14 June 1958, sheet dated 25 August 1958, format 24 x 36.

Every radius, thickness, index and Abbe number below is the sheet's own value, unscaled. The sheet's indices are melt
values, so they differ slightly from catalog values, and they are kept.

Radii are unsigned on the sheet. Signs come from its Sinnbild symbols and first-order closure: the model gives
f' 95.136, s' 38.315 and s 105.961 mm against the printed 95.13, 38.31 and 105.96. S6 is the only negative radius.

The last gap is the printed back focus s'0 = 38.31 mm. The stop sits at the printed "Blendenlage 9.2 + 8.2".

Patent DD 23 651 (Fincke, Zöllner) describes a related 100 mm f/3.5 design with different radii. It is not the source
of these numbers.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-cardinar-100mm-f4",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA CARDINAR 100mm f/4",
  subtitle: "Factory optical data sheet Sach-Nr. 550513A (Opt.), calculation of 14 June 1958; f' 95.13 mm, 1:4.",

  catalog: {
    lensMounts: ["werra"],
    imageFormat: "135-full-frame",
    specs: ["5 ELEMENTS / 4 GROUPS", "DESIGN f = 95.13 mm", "DESIGN F/4"],
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: { marketing: 100, design: 95.13 },
    fNumber: { marketing: 4, design: 4 },
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.589,
      vd: 61.1,
      focalLengthMm: 107.7,
      glass: "SK5 (Jena; catalog row SK5, Sumita)",
      role: "Front collector, the weaker half of the converging front pair.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.5889,
      vd: 58.5,
      focalLengthMm: 68.17,
      glass: "SK13 (Jena; catalog row BACD13, Hoya, the SK13-class counterpart)",
      role: "Thick meniscus and strongest positive element; brings the front pair to +43.7 mm.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.5102,
      vd: 63.4,
      focalLengthMm: 91.14,
      glass: "BK1 (Jena; catalog row BK1, Sumita)",
      role: "Low-index crown of doublet C1; its rear face forms the cemented interface with the flint.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6991,
      vd: 30.0,
      focalLengthMm: -21.78,
      glass: "SF15 (Jena; catalog row SF15, Sumita)",
      role: "Flint with a deep concave rear face; gives C1 its -30 mm power, the lens's telephoto action.",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.8072,
      vd: 25.3,
      focalLengthMm: 87.49,
      glass: "SF6 (Jena; catalog row SF6, Schott)",
      role: "Thin high-index positive behind the stop; it restores convergence at a small diameter.",
    },
  ],

  /*
   * Each sd is half the sheet's freier Ø. Lands run to the printed Linsen Ø (42, 35, 27, 27, 17 mm), except S4, which
   * stops at the printed facet Ø 26.8 mm, and S7. The 45° facet reaches its printed Ø 18 mm at S7's sag there, 2.13 mm,
   * but S7's land sits at the sag of its clear opening, 1.17 mm, and the cone is 9.96 mm high at that plane. The land
   * stops there, so its corner lies on the drawn facet. The straight edges drawn between those heights stand in for the
   * 40° and 45° facets of the sheet's 1:1 section. Lands add no traced aperture.
   *
   * S6 is a cemented interface and cannot carry a land, so its sd is the printed Linsen Ø 27 mm. Its printed freier Ø
   * 18.1 mm is the beam envelope there, not a limit: the peak footprint traces to 9.05 mm with this face open, and
   * vignetting is the same at either sd.
   */
  surfaces: [
    { label: "1", R: 45.925, d: 7.7, sd: 20.5, rimExtensionSd: 21, medium: 1 },
    { label: "2", R: 156.02, d: 3.2, sd: 19.3, rimExtensionSd: 21 },
    { label: "3", R: 33.03, d: 13.25, sd: 16.6, rimExtensionSd: 17.5, medium: 2 },
    { label: "4", R: 158.625, d: 0.2, sd: 12.2, rimExtensionSd: 13.4 },
    { label: "5", R: 143.24, d: 6.95, sd: 12, rimExtensionSd: 13.5, medium: 3 },
    { label: "6", R: -67.72, d: 3.85, sd: 13.5, medium: 4 },
    { label: "7", R: 20.098, d: 9.2, sd: 6.75, rimExtensionSd: 9.96 },
    { label: "STO", R: "flat", d: 8.2 },
    { label: "8", R: 51.53, d: 2.9, sd: 7.6, rimExtensionSd: 8.5, medium: 5 },
    { label: "9", R: 185.84, d: 38.31, sd: 8, rimExtensionSd: 8.5 },
  ],

  focus: {
    closeFocusM: 1.5,
    description:
      "Infinity prescription only. The sheet gives no focus travel, so the geometry is static. The 1.5 m close focus is the museum record's value.",
  },

  /*
   * Printed stop Ø: f/4 11.24, f/5.6 7.95, f/8 5.62, f/11 3.97, f/16 2.81, f/22 1.99, f/32 1.40 mm. An ordinary prime's
   * radius is derived from its f-number: 5.574 mm at f/4 against the printed 5.62 mm. The real marginal ray for the
   * printed entrance pupil Ø 23.77 mm reaches 5.604 mm at the stop.
   */
  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32 },

  doublets: [{ text: "C1", fromSurface: "5", toSurface: "7" }],

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
