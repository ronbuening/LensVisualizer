/*
CARL ZEISS JENA ANASTIGMAT-SATZLINSE f/14.4 (von Rohr 1899, Fig. 137)

Source: Moritz von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899),
p. 374, Fig. 137: "P. Rudolph: Anastigmat-Satzlinse". The caption's "Quelle: P. Rudolph. 1." is read as Rudolph's
bibliography entry 6 (British patent 4692 of 22 April 1893, "auf Ser. VI", cited at pp. 373/374): entry 1 is the 1890
Anastigmat patent, which predates this design. Designed by Rudolph at the Zeiss works at the end of 1891 (p. 377).

Printed by von Rohr: reduced to fD = 100 mm; computed for 1:14.4 and omega = 34 deg; front stop b1 = 1.0;
r1 = 14.2, r2 = 5.5, r3 = 20.7, r4 = 12.6 (magnitudes); d1 = 1.7, d2 = 0.5, d3 = 1.4; nD L1 = 1.52246,
L2 = 1.56724 (footnote: misprint in the British Journal of Photography corrected), L3 = 1.61120. Glass names and
von Rohr's barred nu on p. 373: ordinary silicate crown 46.4, baryta light flint 41.5, heaviest baryta crown 44.8.
Von Rohr marks no value as assumed. Text checks (p. 374): zonal residual about -1.1 mm at about 1:12.5 with the
margin corrected; astigmatic difference about 4.8 mm at 34 deg.

Model additions: radius signs read from Fig. 137 (r1 and r2 concave toward the stop, r3 weakly convex toward it,
r4 convex toward the image); last gap = computed paraxial back focus 109.430; clear radius 4.0 on all four faces,
kept from the package and confirmed by Fig. 137 (3.92 mm at the vertex-spacing scale, one scan pixel = 0.15 mm);
stop radius derived from 1:14.4; f-stop list; field limited to the printed omega. Element focal lengths are
computed (thick, in air).

Indices are nD only (indexReference "D"): von Rohr's barred nu is (nD - 1)/(nG' - nD), a photographic blue figure,
not an Abbe number, so the model is monochromatic and no catalog glass is substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-anastigmat-satzlinse-1891-von-rohr-1899",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA ANASTIGMAT-SATZLINSE f/14.4 (von Rohr 1899, Fig. 137)",
  subtitle: "Rudolph's cemented landscape lens of late 1891, the Series VI type",  catalog: {
    specs: ["3 ELEMENTS / 1 GROUP", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 3,
    groupCount: 1,
    focalLengthMm: { design: 100 },
    fNumber: { design: 14.4 },
  },
  source: {
    sdSource: "figure-measured",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 374, Fig. 137",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=130",
      after: "P. Rudolph",
    },
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Ordinary silicate crown",
      type: "Positive Meniscus",
      nd: 1.52246,
      indexReference: "D",
      focalLengthMm: 16.1,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Front meniscus concave to the stop; lowest-index member, paired with L2 in old-achromat order.",
      cemented: "T1",
    },
    {
      id: 2,
      name: "L2",
      label: "Baryta light flint",
      type: "Biconcave Negative",
      nd: 1.56724,
      indexReference: "D",
      focalLengthMm: -7.6,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Thin negative middle lens shared by both cemented interfaces; strongly curved front junction r2.",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "Heaviest baryta crown",
      type: "Biconvex Positive",
      nd: 1.6112,
      indexReference: "D",
      focalLengthMm: 13.0,
      glass: "Unmatched (historical nD only, no dispersion published)",
      role: "Rear collective lens of the highest index, paired with L2 in new-achromat order.",
      cemented: "T1",
    },
  ],
  surfaces: [
    { label: "STO", R: "flat", d: 1 },
    { label: "1", R: -14.2, d: 1.7, sd: 4, medium: 1 },
    { label: "2", R: -5.5, d: 0.5, sd: 4, medium: 2 },
    { label: "3", R: 20.7, d: 1.4, sd: 4, medium: 3 },
    { label: "4", R: -12.6, d: 109.43, sd: 4 },
  ],
  focus: { closeFocusM: 1e15, description: "Infinity only; von Rohr gives the lens for a distant object." },
  aperture: { nominalFNumber: 14.4, fStops: [14.4, 16, 22], maxFNumber: 22 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 34 },
  groups: [{ text: "CEMENTED TRIPLET", fromSurface: "1", toSurface: "4" }],
  doublets: [{ text: "T1", fromSurface: "1", toSurface: "4" }],
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
