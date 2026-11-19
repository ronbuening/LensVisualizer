/*
CARL ZEISS JENA ANASTIGMAT-SATZLINSE 500mm f/13 (CH 6329, Example 2)

Source: Eidgenössisches Amt für geistiges Eigentum, Patentschrift Nr. 6329 (Klasse 49), Dr. Paul Rudolph in Jena,
"Dreifache Linse für photographische Objektive", filed 15 February 1893, published 15 August 1893; read on the page
images of the Espacenet original document (CH6329A, four pages). The patent prints two numbered examples in units of
the focal length; this file is "Beispiel 2", the lens whose middle member is a dispersing lens, "in Fig. 2 dargestellt
für die Brennweite 500 mm". Beispiel 1 (a collective middle lens, other glasses) is a separate prescription. The
patent is the Swiss filing of the cemented single lenses von Rohr cites as Rudolph's British patent 4692 of 1893; the
British specification itself was not retrieved.

Printed by the patent (Beispiel 2): r1 = -0.1423, r2 = -0.0547, r3 = +0.2073, r4 = -0.1260; d1 = 0.0167,
d2 = 0.0052, d3 = 0.0139, b = 0.0104 (Blendenabstand); nD / nG1 1.52246 / 1.53373 (L1), 1.56724 / 1.58092 (L2),
1.61120 / 1.62483 (L3); "Größte wirksame Öffnung 0.077 (Öffnungsverhältnis 1 : 13)"; "Gesichtsfeldwinkel zirka 90°".
The radii are signed; the signs agree with Fig. 2 (stop in front, the group concave toward it).

Scaling: every length x 500, the focal length the patent states for the example and its figure. The table traces to
EFL 500.251 mm (+0.05 %). Von Rohr 1899, p. 374, Fig. 137 ("P. Rudolph: Anastigmat-Satzlinse") prints this example
x 100 rounded to 0.1 mm with the same three nD values (his L2 index footnoted as a misprint corrected in the British
Journal of Photography; the patent prints his corrected value).

Model additions: the last gap, the computed paraxial back focus 546.460 mm; the f-stop list; infinity focus only;
element focal lengths, computed thick in air. Field limit 45 deg, half the printed field angle. Clear radii 22.5 mm on
all four faces from Fig. 2, which draws the cemented lens square-ended at about 0.048 f (24 mm) in semi-height, with
L1 and L3 running out at the rim. At the printed radii L1 reaches a knife edge at 22.68 mm and L3 at 23.03 mm, so the
drawn height cannot be reached; 22.5 mm keeps an L1 edge of 0.20 mm.

Indices: sodium D (indexReference "D"), "die Fraunhofersche Linie D". The second index is for "die Linie H1 γ des
Wasserstoffspectrums" (Hγ, about 434.0 nm), not the schema's mercury g line, and the patent prints no nC or nF, so
nG1 is kept in comments only and the model traces at nD alone. No catalog glass is substituted. The glass names in
the labels are von Rohr's (p. 373); the patent names none.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-anastigmat-satzlinse-500mm-f13-ch6329",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA ANASTIGMAT-SATZLINSE 500mm f/13 (CH 6329 Design)",
  subtitle: "CH 6329 — Rudolph's cemented triple single lens with a negative middle member, the Series VI type",
  catalog: {
    specs: [
      "3 ELEMENTS / 1 GROUP",
      "f = 500 mm PATENT / 500.25 mm TRACED",
      "f/13",
      "2ω ≈ 90° (PATENT)",
      "nD ONLY",
      "ALL-SPHERICAL",
    ],
    elementCount: 3,
    groupCount: 1,
    focalLengthMm: { design: 500 },
    fNumber: { design: 13 },
  },
  source: {
    patentNumber: "CH 6329",
    example: { label: "Example 2", id: "2" },
    patentYear: 1893,
    authors: ["Paul Rudolph"],
    assignees: [],
    sdSource: "figure-measured",
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Ordinary silicate crown",
      type: "Positive Meniscus",
      nd: 1.52246,
      indexReference: "D",
      focalLengthMm: 79.8,
      glass: "Unmatched (CH 6329 nD/nG₁ only, no nC or nF published)",
      role: "Front meniscus concave to the stop; the lowest-index member, paired with L2 in old-achromat order.",
      cemented: "T1",
      // Patent nG₁ = 1.53373 (G₁ = Hγ, not the schema's mercury g, so not stored as ng).
    },
    {
      id: 2,
      name: "L2",
      label: "Baryta light flint",
      type: "Biconcave Negative",
      nd: 1.56724,
      indexReference: "D",
      focalLengthMm: -37.9,
      glass: "Unmatched (CH 6329 nD/nG₁ only, no nC or nF published)",
      role: "Thin negative middle lens shared by both cemented interfaces; strongly curved front junction r2.",
      cemented: "T1",
      // Patent nG₁ = 1.58092.
    },
    {
      id: 3,
      name: "L3",
      label: "Heaviest baryta crown",
      type: "Biconvex Positive",
      nd: 1.6112,
      indexReference: "D",
      focalLengthMm: 65.1,
      glass: "Unmatched (CH 6329 nD/nG₁ only, no nC or nF published)",
      role: "Rear collective lens of the highest index, paired with L2 in new-achromat order.",
      cemented: "T1",
      // Patent nG₁ = 1.62483.
    },
  ],
  surfaces: [
    { label: "STO", R: "flat", d: 5.2 }, // b = 0.0104
    { label: "1", R: -71.15, d: 8.35, sd: 22.5, medium: 1 }, // r1 = -0.1423; sd from Fig. 2, inside the L1 knife edge
    { label: "2", R: -27.35, d: 2.6, sd: 22.5, medium: 2 }, // r2 = -0.0547
    { label: "3", R: 103.65, d: 6.95, sd: 22.5, medium: 3 }, // r3 = +0.2073
    { label: "4", R: -63, d: 546.46, sd: 22.5 }, // r4 = -0.1260; computed paraxial back focus
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only patent example; the patent gives no close-focus data.",
  },
  aperture: { nominalFNumber: 13, fStops: [13, 16, 22], maxFNumber: 22 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 45 },

  groups: [{ text: "CEMENTED TRIPLET", fromSurface: "1", toSurface: "4" }],
  doublets: [{ text: "T1", fromSurface: "1", toSurface: "4" }],

  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
