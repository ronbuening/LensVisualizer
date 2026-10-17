import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║ This gives 2.4389475 mm before STO and 7.9395525 mm after STO. The stop    ║
 * ║ radius is derived from the design f-number (f/2.8).                        ║
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
  schema: 2,
  key: "fujifilm-fujinon-85mm-f4-sf-ebc",
  maker: "Fujifilm",
  name: "FUJIFILM EBC FUJINON 85mm f/4 SOFT-FOCUS",
  subtitle: "JP S55-560 A Example 1 — fixed embodiment; patent f/2.8 vs marketed f/4",

  catalog: {
    lensMounts: ["m42"],
    imageFormat: "135-full-frame",
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "85 mm MARKETED; 89.814 mm TRACED DESIGN",
      "f/4 MARKETED; f/2.8 PATENT EXAMPLE",
      "2ω = 28° (PATENT)",
      "ALL-SPHERICAL",
    ],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: { marketing: 85, design: 89.81416894444722 },
    fNumber: { marketing: 4, design: 2.8 },
  },

  source: {
    patentNumber: "JP S55-560 A",
    patentYear: 1980,
    // 高橋宗甫 is provisionally romanized as Soho Takahashi; see the analysis source note.
    authors: ["Ryoichi Doi", "Soho Takahashi"],
    assignees: ["Fuji Photo Optical Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "G1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      focalLengthMm: 107.38120953067548,
      glass: "603607 — SK14/BSM14/BACD14-class crown (vendor unresolved)",
      role: "Front positive meniscus; first positive collector in the patent four-element soft-focus form.",
      diagramLabel: "G1",
    },
    {
      id: 2,
      name: "G2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      focalLengthMm: 406.8862561112942,
      glass: "603607 — SK14/BSM14/BACD14-class crown (vendor unresolved)",
      role: "Weak positive meniscus ahead of the strong negative third element.",
      diagramLabel: "G2",
    },
    {
      id: 3,
      name: "G3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.76182,
      vd: 26.5,
      indexReference: "d",
      focalLengthMm: -74.81627570842029,
      glass: "762265 — SF14/TIH14/SFLD14-class dense flint (vendor unresolved)",
      role: "Strong negative meniscus immediately ahead of the aperture-stop interval.",
      diagramLabel: "G3",
    },
    {
      id: 4,
      name: "G4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      focalLengthMm: 74.62745621497336,
      glass: "603607 — SK14/BSM14/BACD14-class crown (vendor unresolved)",
      role: "Rear positive meniscus following the aperture stop.",
      diagramLabel: "G4",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 44.210964319151145, d: 6.545, sd: 24, medium: 1 },
    { label: "2", R: 131.55858226280762, d: 4.42, sd: 24 },
    { label: "3", R: 68.38844637541234, d: 8.5, sd: 21, medium: 2 },
    { label: "4", R: 90.37745879851143, d: 3.825, sd: 21 },
    { label: "5", R: 485.9919954259577, d: 25.5, sd: 17, medium: 3 },
    { label: "6", R: 49.85629655698281, d: 2.4389475, sd: 17 },
    { label: "STO", R: "flat", d: 7.9395525 },
    { label: "7", R: -855.1307847082494, d: 6.8, sd: 20, medium: 4 },
    { label: "8", R: -42.88597376387487, d: 46.401311100778706, sd: 20 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1,
    description:
      "Infinity prescription only. Example 1 publishes no focus spacing schedule. The manufacturer’s 1.0 m minimum focus distance is shown for reference; internal travel is not modeled.",
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16] },

  // Preserve the patent's explicit 2ω = 28° coverage despite the rounded table's
  // independently verified EFL mismatch against the printed f = 1.0 normalization.
  projection: { kind: "rectilinear", fullFieldDeg: 28, maxTraceFieldDeg: 14 },

  groups: [],
  doublets: [],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
