import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — FUJIFILM EBC FUJINON 85mm f/4 SOFT-FOCUS                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP S55-560 A, Example 1 (昭55-560), fixed by the job card.      ║
 * ║ Patent design: 4 elements / 4 groups, all spherical, f = 1.0, 1:2.8,     ║
 * ║ 2ω = 28°. The patent prescription is the numerical authority.             ║
 * ║                                                                            ║
 * ║ SCALE: source-preserving uniform scale s = 85 mm per patent-normalized     ║
 * ║ unit. All radii and axial distances are multiplied by 85. No aspheres are  ║
 * ║ present. The rounded source prescription independently traces to            ║
 * ║ EFL = 89.81416894444722 mm, not 85 mm; this discrepancy is retained.       ║
 * ║                                                                            ║
 * ║ STOP: Figure 1 shows F inside S3 but does not dimension the split. The      ║
 * ║ modeled stop is inferred at q = 0.235 of S3 from surface 6 toward surface  ║
 * ║ 7 from the rendered Figure 1 geometry.                                     ║
 * ║ This gives 2.4389475 mm before STO and 7.9395525 mm after STO. The stop     ║
 * ║ semi-diameter 9.089612803568102 mm makes the traced rounded prescription   ║
 * ║ f/2.8 using its independently computed EFL.                                ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS: the patent publishes none. Values are modeled from exact    ║
 * ║ ray envelopes, the Figure 1 section, and mechanical/geometry constraints:  ║
 * ║ G1 24 mm, G2 21 mm, G3 17 mm, G4 20 mm. They fully contain the modeled     ║
 * ║ f/2.8 pupil through the default 0.6×14° = 8.4° off-axis field.              ║
 * ║                                                                            ║
 * ║ FOCUS STATUS: NO_INTERNAL_RECONSTRUCTION. Example 1 publishes no focus      ║
 * ║ spacing table, object-distance table, or internal motion. The manufacturer  ║
 * ║ 1.0 m minimum-focus specification is retained only as product metadata;     ║
 * ║ no variable optical gap is invented.                                       ║
 * ║                                                                            ║
 * ║ PRODUCT METADATA: Fuji Photo Film AZ-1 system sales literature. The lens    ║
 * ║ table is archived at https://www.pacificrimcamera.com/rl/01692/01692.pdf   ║
 * ║ and OP1-111E (1977) mount/date context at                                  ║
 * ║ https://www.pacificrimcamera.com/rl/00921/00921.pdf                        ║
 * ║ Historical company English name: Fujifilm official history:                ║
 * ║ https://www.fujifilm.com/jp/en/about/corporate/history                     ║
 * ║                                                                            ║
 * ║ GLASS: the patent gives only d-line nd/νd. Vendor identity is not unique;  ║
 * ║ class/six-digit annotations are used and no nC/nF/ng/dPgF values are added.║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-fujinon-85mm-f4-sf-ebc",
  maker: "Fujifilm",
  name: "FUJIFILM EBC FUJINON 85mm f/4 SOFT-FOCUS",
  subtitle: "JP S55-560 A Example 1 — fixed embodiment; patent f/2.8 vs marketed f/4",
  specs: [
    "4 ELEMENTS / 4 GROUPS",
    "85 mm MARKETED; 89.814 mm TRACED DESIGN",
    "f/4 MARKETED; f/2.8 PATENT EXAMPLE",
    "2ω = 28° (PATENT)",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: 85,
  focalLengthDesign: 89.81416894444722,
  apertureMarketing: 4,
  apertureDesign: 2.8,
  lensMounts: ["m42"],
  imageFormat: "135-full-frame",
  patentNumber: "JP S55-560 A",
  // 高橋宗甫 is provisionally romanized as Soho Takahashi; see the analysis source note.
  patentAuthors: ["Ryoichi Doi", "Soho Takahashi"],
  patentAssignees: ["Fuji Photo Optical Co., Ltd."],
  patentYear: 1980,
  elementCount: 4,
  groupCount: 4,

  // Preserve the patent's explicit 2ω = 28° coverage despite the rounded table's
  // independently verified EFL mismatch against the printed f = 1.0 normalization.
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 28,
    maxTraceFieldDeg: 14,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "G1",
      diagramLabel: "G1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      fl: 107.38120953067548,
      glass: "603607 — SK14/BSM14/BACD14-class crown (vendor unresolved)",
      role: "Front positive meniscus; first positive collector in the patent four-element soft-focus form.",
    },
    {
      id: 2,
      name: "G2",
      diagramLabel: "G2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      fl: 406.8862561112942,
      glass: "603607 — SK14/BSM14/BACD14-class crown (vendor unresolved)",
      role: "Weak positive meniscus ahead of the strong negative third element.",
    },
    {
      id: 3,
      name: "G3",
      diagramLabel: "G3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.76182,
      vd: 26.5,
      indexReference: "d",
      fl: -74.81627570842029,
      glass: "762265 — SF14/TIH14/SFLD14-class dense flint (vendor unresolved)",
      role: "Strong negative meniscus immediately ahead of the aperture-stop interval.",
    },
    {
      id: 4,
      name: "G4",
      diagramLabel: "G4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      fl: 74.62745621497336,
      glass: "603607 — SK14/BSM14/BACD14-class crown (vendor unresolved)",
      role: "Rear positive meniscus following the aperture stop.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 44.210964319151145, d: 6.545, nd: 1.60311, elemId: 1, sd: 24 },
    { label: "2", R: 131.55858226280762, d: 4.42, nd: 1, elemId: 0, sd: 24 },
    { label: "3", R: 68.38844637541234, d: 8.5, nd: 1.60311, elemId: 2, sd: 21 },
    { label: "4", R: 90.37745879851143, d: 3.825, nd: 1, elemId: 0, sd: 21 },
    { label: "5", R: 485.9919954259577, d: 25.5, nd: 1.76182, elemId: 3, sd: 17 },
    { label: "6", R: 49.85629655698281, d: 2.4389475, nd: 1, elemId: 0, sd: 17 },
    { label: "STO", R: 1e15, d: 7.9395525, nd: 1, elemId: 0, sd: 9.089612803568102 },
    { label: "7", R: -855.1307847082494, d: 6.8, nd: 1.60311, elemId: 4, sd: 20 },
    { label: "8", R: -42.88597376387487, d: 46.401311100778706, nd: 1, elemId: 0, sd: 20 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [],
  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 1,
  focusDescription:
    "Infinity prescription only. Example 1 publishes no focus spacing schedule. The manufacturer’s 1.0 m minimum focus distance is shown for reference; internal travel is not modeled.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
