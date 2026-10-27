import type { TeleconverterDataV2Input } from "../../types/lensDataV2.js";
/** US 2015/0226943 A1, Example 1 (FIG. 2). Six elements in three groups: G1 positive
 * meniscus, G2 negative cemented triplet, G3 positive cemented doublet; no aspherical
 * surfaces. Linking this example to the MC-14 rests on construction and specifications; Olympus has
 * not confirmed it as the production prescription.
 * Patent surfaces 30–38 are surfaces 1–9 here, at their printed scale;
 * the d-line indices and Abbe numbers are as printed. Patent surfaces 39–40 (4.0 mm
 * cover glass and 0.8 mm air) stay a camera-side rear plate. Virtual object: master
 * back focus in air 26.238 mm − master-to-converter gap 1.8574 mm = 24.3806 mm.
 * Glass: the patent prints only nd and νd and names no supplier; each label is the
 * catalog glass at those values.
 * Semi-diameters are estimated from FIG. 2 (scale from the 24.17 mm first-to-last
 * vertex span), keeping the slightly lower L22 rims at surfaces 4–5 that the figure
 * draws; they are not published clear apertures. A second measurement (2026-10-25)
 * agreed within 2 %; on the declared host and on an f/2.8 host the rims pass the
 * full axial beam and the image-corner chief ray (real-ray trace).
 * The patent's master zoom was used only to check this converter: its stop size and
 * intermediate zoom spacings there are calibrations, and its aspherical surface 15
 * turns over inside the axial beam, which limits conclusions drawn from that master.
 * No focus mechanism or extra field stop.
 * The converter mounts only on hosts that declare it (at present the M.Zuiko Digital
 * ED 90mm f/3.5 Macro IS PRO). Mismatches with the patent's printed values (condition
 * (9) wording, G3 focal length by 0.001 mm, paraxial field angles) and the maker's
 * 58.8 mm vs 59.8 mm diameter figures are recorded in the audit file.
 */
const TELECONVERTER_DATA = {
  schema: 2,
  key: "olympus-mzuiko-digital-14x-teleconverter-mc14",
  maker: "Olympus",
  name: "OLYMPUS M.ZUIKO DIGITAL 1.4x Teleconverter MC-14",
  subtitle: "US 2015/0226943 A1 — Example 1",

  catalog: {
    lensMounts: ["micro-four-thirds"],
    specs: ["6 ELEMENTS / 3 GROUPS", "1.4× REAR CONVERTER", "ALL SPHERICAL"],
    elementCount: 6,
    groupCount: 3,
  },

  source: {
    patentNumber: "US 2015/0226943 A1",
    example: { label: "Example 1", id: "1" },
    patentYear: 2015,
    authors: ["Yasuji Ogata", "Yasuharu Yamada"],
    assignees: ["Olympus Imaging Corporation"],
  },

  magnification: 1.4,
  masterImageDistanceMm: 24.3806,
  universal: false,
  minHostFNumber: 2.8,

  // Conservative release qualification policy, not a physical incompatibility claim.
  // Only the documented representative host has full design-plane MTF evidence.
  incompatibleLensKeys: [],

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.46,
      focalLengthMm: 89.33188314359161,
      glass: "FD60 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus forming the positive front unit G1, convex to the image; the patent bounds its image-side radius, where spherical aberration, coma and astigmatism readily arise, to lower sensitivity to manufacturing error",
    },
    {
      id: 2,
      name: "L21",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.57,
      focalLengthMm: -16.510512500429293,
      glass: "S-LAH65 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Biconcave front negative of the cemented triplet G2; with L23 it carries most of the converter's negative power, and cementing the three lenses reduces the effect of their mutual decentering",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L22",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.31,
      focalLengthMm: 15.845806001859685,
      glass: "S-FTM16 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Biconvex core of the G2 triplet and the converter's strongest positive lens; the patent keeps its index low (1.55–1.70) against the high-index negatives to correct the Petzval sum of the net-negative converter",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L23",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.71,
      focalLengthMm: -17.320551813426995,
      glass: "S-LAH55 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Biconcave rear negative of the G2 triplet; it shares most of the negative power with L21, and the patent bounds its share to limit both field curvature and distortion",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L31",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6134,
      vd: 44.27,
      focalLengthMm: 20.97033767581293,
      glass: "S-NBM51 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Biconvex positive of the cemented doublet G3, which gives the rear unit its positive power; the patent uses the Abbe-number difference across this pair (20.49 here) to limit chromatic aberration",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L32",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -28.828569125821513,
      glass: "S-TIH53 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Biconcave negative cemented behind L31, in the converter's highest-index and most dispersive glass; it sits where the MC-14 construction diagram marks its HR (high-refractive-index) element",
      cemented: "D1",
    },
  ],

  surfaces: [
    { label: "1", R: -290.3757, d: 2.64, sd: 10.6, medium: 1 },
    { label: "2", R: -57.8821, d: 1.04, sd: 10.6 },
    { label: "3", R: -324.6838, d: 1.1, sd: 10.1, medium: 2 },
    { label: "4", R: 13.8612, d: 8.79, sd: 9.8, medium: 3 },
    { label: "5", R: -22.2537, d: 1.1, sd: 9.8, medium: 4 },
    { label: "6", R: 42.2116, d: 0.25, sd: 10.1 },
    { label: "7", R: 20.6554, d: 8.15, sd: 11.0, medium: 5 },
    { label: "8", R: -28.9825, d: 1.1, sd: 11.0, medium: 6 },
    { label: "9", R: 157.3317, d: 11.8764, sd: 11.0 },
  ],

  rearPlates: [
    {
      label: "Patent cover glass",
      thicknessMm: 4,
      nd: 1.51633,
      vd: 64.14,
      gapAfterMm: 0.8,
      source: "US20150226943A1 Example1 surfaces39–40; camera-side optically equivalent cover/filter plate",
    },
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "2" },
    { text: "G2 (−)", fromSurface: "3", toSurface: "6" },
    { text: "G3 (+)", fromSurface: "7", toSurface: "9" },
  ],
  doublets: [
    { text: "T1", fromSurface: "3", toSurface: "6" },
    { text: "D1", fromSurface: "7", toSurface: "9" },
  ],
} satisfies TeleconverterDataV2Input;

export default TELECONVERTER_DATA;
