import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Lens Patent — Industar - ITMO2013 Variant2 source model — 2 Data
 * Source: Ivanov, ITMO 2013, Appendix 1.2 Variant 2, p.51; schematic p.50.
 * https://books.ifmo.ru/file/pdf/1465.pdf
 * Four elements / three groups. A source-book model, not a confirmed
 * production Industar-50/50-2 prescription or a patent embodiment.
 *
 * Published radii, thicknesses and clear diameters retained without scaling.
 * Source r2 = infinity is encoded as flat. Non-stop semi-diameters are the published clear diameters divided by two.
 * The 5.05 mm gap after surface 4 is split 2.30 + 2.75 mm around STO.
 * Published diaphragm diameter is 11.8 mm; the real-ray modeled f-number
 * preserves that physical aperture in the application's stop constructor.
 * It is not the separate paraxial pupil f-number (about 3.53038).
 * The blank final source spacing is filled with calculated d-line paraxial
 * BFD, 43.5326120215 mm; no published image distance has been changed.
 *
 * PG&F 2010 named-grade nd/vd/ng rows are explicit modern catalog proxies.
 * Book indices/wavelengths and historic glass melts are unconfirmed.
 * indexReference = d (587.56 nm). LF5 uses the coordinate-exact QF3 spectral proxy.
 * TK14/OF1 retain supplier-listed ng and Abbe fallback; no complete curves are established.
 * KMZ maker grouping follows the documented Industar-50 design association.
 * The exact source model is not a verified factory prescription; mount, image format and patent remain unset.
 *
 * NO_INTERNAL_RECONSTRUCTION: fixed infinity only, no var/finite conjugates.
 * closeFocusM = 0 is an explicit unavailable placeholder for the required numeric field,
 * not a physical zero-distance MFD; the empty var keeps focus motion disabled.
 * See the source references and sibling audit for bounds and qualifications.
 */

const LENS_DATA = {
  schema: 2,
  key: "industar-itmo2013-v2",
  maker: "KMZ",
  name: "KMZ INDUSTAR 52.39mm f/3.56 (ITMO 2013 Variant 2)",
  subtitle: "Ivanov / ITMO 2013, Appendix 1.2 Variant 2, pp.50–51; qualified catalog-glass model",

  catalog: {
    specs: ["4 ELEMENTS / 3 GROUPS", "52.3909 mm MODEL EFL", "11.8 mm PUBLISHED DIAPHRAGM", "FIXED INFINITY MODEL"],
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: { design: 52.390881393 },
    fNumber: { design: 3.5647432498262934 },
  },

  // Non-patent book prescription: no patent number or named patent parties.
  source: { authors: [], assignees: [] },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex",
      nd: 1.61309,
      vd: 60.58,
      indexReference: "d",
      focalLengthMm: 27.891500432,
      glass: "Unmatched (TK14; PG&F 2010 d-line proxy; historic melt unconfirmed)",
      ng: 1.62561,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.57502,
      vd: 41.31,
      indexReference: "d",
      focalLengthMm: -17.521390717,
      glass: "LF5 (PG&F coordinate); QF3 (CDGM spectral proxy; historic melt unconfirmed)",
      ng: 1.59281,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.52949,
      vd: 51.81,
      indexReference: "d",
      focalLengthMm: -29.647366552,
      glass: "SBF2 (HOYA) class (OF1 / KzF2-type special flint, 529516; spectral proxy, historic melt unconfirmed)",
      cemented: "D1",
      ng: 1.54225,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.61309,
      vd: 60.58,
      indexReference: "d",
      focalLengthMm: 15.684475563,
      glass: "Unmatched (TK14; PG&F 2010 d-line proxy; historic melt unconfirmed)",
      cemented: "D1",
      ng: 1.62561,
    },
  ],

  surfaces: [
    { label: "1", R: 17.1, d: 2.7, sd: 8.0, medium: 1 },
    { label: "2", R: "flat", d: 4.16, sd: 8.0 },
    { label: "3", R: -33.57, d: 1.05, sd: 7.0, medium: 2 },
    { label: "4", R: 14.56, d: 2.3, sd: 7.0 },
    // Ivanov, ITMO 2013, Appendix 1.2 Variant 2 prescription table, p. 51 prints diaphragm diameter 11.8 mm.
    // Radius derived from the design f-number.
    { label: "STO", R: "flat", d: 2.75 },
    { label: "5", R: 346.7, d: 1.2, sd: 7.0, medium: 3 },
    { label: "6", R: 15.0, d: 4.7, sd: 7.0, medium: 4 },
    { label: "7", R: -23.6, d: 43.53261202145573, sd: 7.0 },
  ],

  focus: {
    closeFocusM: 0,
    description:
      "Fixed infinity source model. No finite-focus motion or production minimum focus distance is established.",
  },

  aperture: { nominalFNumber: 3.5647432498262934, fStops: [3.5647432498262934, 4, 5.6, 8, 11, 16] },

  groups: [],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
