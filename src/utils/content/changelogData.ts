/**
 * changelogData — manually curated list of user-facing site changes.
 *
 * Entries are ordered newest-first. UpdatesPage groups them by date
 * automatically. Add new entries at the top of the CHANGELOG array when
 * merging a user-facing PR; see agent_docs/changelog.md for the full
 * maintenance guide.
 */

export type ChangelogEntryType = "feature" | "fix" | "lens" | "improvement" | "article";

export interface ChangelogEntry {
  /** ISO date string (YYYY-MM-DD) matching the PR merge date */
  date: string;
  /** Category tag for badge display */
  type: ChangelogEntryType;
  /** User-facing one-liner in past tense, e.g. "Added X" or "Fixed Y" */
  summary: string;
  /** Lens route links rendered inline where their text appears in the summary */
  links?: ChangelogEntryLensLink[];
}

export interface ChangelogEntryLensLink {
  lensKey: string;
  text: string;
}

function lensLink(lensKey: string, text: string): ChangelogEntryLensLink {
  return { lensKey, text };
}

export const CHANGELOG: ChangelogEntry[] = [
  // ── 2026-06-08 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-08",
    type: "lens",
    summary: "Added Panasonic DG Nocticron 42.5mm f/1.2, DG Summilux 12mm f/1.4, and Lumix G 14mm f/2.5 II",
    links: [
      lensLink("panasonic-dg-nocticron-42mm-f12", "DG Nocticron 42.5mm f/1.2"),
      lensLink("panasonic-dg-summilux-12mm-f14", "DG Summilux 12mm f/1.4"),
      lensLink("panasonic-g-14mm-f25-ii", "Lumix G 14mm f/2.5 II"),
    ],
  },
  // ── 2026-06-07 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-07",
    type: "feature",
    summary: "Added mount reference diagrams for the 300-lens catalog milestone",
  },
  {
    date: "2026-06-07",
    type: "lens",
    summary: "Added Olympus Zuiko Digital ED 12-60mm f/2.8-4.0 SWD, 14-35mm f/2.0 SWD, and 150mm f/2.0",
    links: [
      lensLink("olympus-zuiko-digital-ed-12-60mm-f28-4-swd", "Zuiko Digital ED 12-60mm f/2.8-4.0 SWD"),
      lensLink("olympus-zuiko-digital-ed-14-35mm-f2-swd", "14-35mm f/2.0 SWD"),
      lensLink("olympus-zuiko-digital-ed-150mm-f2", "150mm f/2.0"),
    ],
  },
  // ── 2026-06-06 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-06",
    type: "lens",
    summary: "Added Sigma 24mm F1.4 DG DN Art, 28-45mm F1.8 DG DN Art, and 60mm F2.8 DN Art",
    links: [
      lensLink("sigma-24mm-f14-art-dn", "24mm F1.4 DG DN Art"),
      lensLink("sigma-28-45mm-f18-dg-dn", "28-45mm F1.8 DG DN Art"),
      lensLink("sigma-60mm-f28-dn", "60mm F2.8 DN Art"),
    ],
  },
  // ── 2026-06-05 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-05",
    type: "fix",
    summary: "Fixed annular stop rendering for centrally obstructed reflex lenses",
  },
  {
    date: "2026-06-05",
    type: "fix",
    summary: "Fixed chromatic ray tracing through folded Mangin mirror lenses",
  },
  {
    date: "2026-06-05",
    type: "lens",
    summary: "Added Olympus M.Zuiko 12mm f/2.0, 17mm f/2.8, and 14-42mm f/3.5-5.6 II R",
    links: [
      lensLink("olympus-mzuiko-12mm-f2", "M.Zuiko 12mm f/2.0"),
      lensLink("olympus-mzuiko-17mm-f28", "17mm f/2.8"),
      lensLink("olympus-mzuiko-14-42-3556-ii", "14-42mm f/3.5-5.6 II R"),
    ],
  },
  {
    date: "2026-06-05",
    type: "fix",
    summary: "Fixed focusing on Nikon Reflex-Nikkor 500mm f/8 New",
    links: [lensLink("nikon-reflex-nikkor-500mm-f8-new", "Reflex-Nikkor 500mm f/8 New")],
  },
  // ── 2026-06-04 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-04",
    type: "lens",
    summary: "Added Nikon Reflex-Nikkor·C 500mm f/8, Reflex-Nikkor 500mm f/8 New, and Reflex-Nikkor 1000mm f/11",
    links: [
      lensLink("nikon-reflex-nikkor-c-500mm-f8", "Reflex-Nikkor·C 500mm f/8"),
      lensLink("nikon-reflex-nikkor-500mm-f8-new", "Reflex-Nikkor 500mm f/8 New"),
      lensLink("nikon-reflex-nikkor-1000mm-f11", "Reflex-Nikkor 1000mm f/11"),
    ],
  },
  {
    date: "2026-06-04",
    type: "improvement",
    summary: "Improved folded mirror-lens validation, ray sampling, and annular mirror rendering",
  },
  {
    date: "2026-06-04",
    type: "lens",
    summary: "Added three Leica lenses: Elmarit-TL 18mm f/2.8 ASPH, Elmarit-M 135mm f/2.8, and Elmar-M 135mm f/4",
    links: [
      lensLink("leica-elmarit-tl-18mm-f28", "Elmarit-TL 18mm f/2.8 ASPH"),
      lensLink("leica-elmarit-m-135mm-f28", "Elmarit-M 135mm f/2.8"),
      lensLink("leica-elmar-m-135mm-f4", "Elmar-M 135mm f/4"),
    ],
  },
  // ── 2026-06-03 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-03",
    type: "lens",
    summary: "Added Fujifilm GF 35-70mm f/4.5-5.6, GF 45-100mm f/4, and GF 100-200mm f/5.6",
    links: [
      lensLink("fujifilm-gf-35-70mm-f45-56-wr", "GF 35-70mm f/4.5-5.6"),
      lensLink("fujifilm-gf-45-100mm-f4-patent-example-1", "GF 45-100mm f/4"),
      lensLink("fujifilm-gf-100-200mm-f56", "GF 100-200mm f/5.6"),
    ],
  },
  // ── 2026-06-02 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-02",
    type: "lens",
    summary: "Added Nikon AI Nikkor 35mm f/2, AI Nikkor 45mm f/2.8P, and AI-S Nikkor 50mm f/1.2",
    links: [
      lensLink("nikon-ai-nikkor-35mm-f2", "AI Nikkor 35mm f/2"),
      lensLink("nikon-ai-nikkor-45mm-f28-p", "AI Nikkor 45mm f/2.8P"),
      lensLink("nikon-ais-nikkor-50mm-f12", "AI-S Nikkor 50mm f/1.2"),
    ],
  },
  // ── 2026-06-01 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-01",
    type: "lens",
    summary: "Added Nikon AF-S 24-70mm f/2.8G, AF-S 24-120mm f/4G VR, and AF-S 70-200mm f/2.8G VR II",
    links: [
      lensLink("nikon-afs-24-70mm-f28g", "AF-S 24-70mm f/2.8G"),
      lensLink("nikon-afs-24-120mm-f4g", "AF-S 24-120mm f/4G VR"),
      lensLink("nikon-af-s-70-200mm-f28g-vr-ii", "AF-S 70-200mm f/2.8G VR II"),
    ],
  },
  // ── 2026-05-31 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-31",
    type: "improvement",
    summary: "Improved desktop viewer stability during focus, zoom, and aberration analysis",
  },
  {
    date: "2026-05-31",
    type: "lens",
    summary: "Added Sigma 14-24mm F2.8 DG HSM Art, 20mm F1.4 DG HSM Art, and 105mm F1.4 DG HSM Art",
    links: [
      lensLink("sigma-14-24mm-f28-dg-hsm-art", "14-24mm F2.8 DG HSM Art"),
      lensLink("sigma-20mm-f14-dg-hsm-art", "20mm F1.4 DG HSM Art"),
      lensLink("sigma-105mm-f14-dg-hsm-art", "105mm F1.4 DG HSM Art"),
    ],
  },
  // ── 2026-05-30 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-30",
    type: "feature",
    summary: "Added chromatic analysis charts for LCA, lateral color, and field-focus color",
  },
  {
    date: "2026-05-30",
    type: "fix",
    summary: "Fixed LCA and TCA displays to use matching charts with violet-channel traces",
  },
  {
    date: "2026-05-30",
    type: "lens",
    summary: "Added Sigma APO Macro 105mm, APO Macro 150mm, and APO Macro 180mm F2.8 EX DG OS HSM",
    links: [
      lensLink("sigma-apo-macro-105mm-f28-os-hsm", "APO Macro 105mm"),
      lensLink("sigma-apo-macro-150mm-f28-os-hsm", "APO Macro 150mm"),
      lensLink("sigma-apo-macro-180mm-f28-os-hsm", "APO Macro 180mm F2.8 EX DG OS HSM"),
    ],
  },
  // ── 2026-05-29 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-29",
    type: "improvement",
    summary: "Focus slider now displays as disabled for lenses without focusing data",
  },
  {
    date: "2026-05-29",
    type: "lens",
    summary: "Added Sony FE 28-70mm OSS, FE 70-200mm F2.8 GM OSS, and FE 70-200mm F4 G OSS",
    links: [
      lensLink("sony-fe-28-70-f35-56-oss", "FE 28-70mm OSS"),
      lensLink("sony-fe-70-200-f28-gm-oss", "FE 70-200mm F2.8 GM OSS"),
      lensLink("sony-fe-70-200mm-f4-g-oss", "FE 70-200mm F4 G OSS"),
    ],
  },
  // ── 2026-05-28 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-28",
    type: "lens",
    summary: "Added Sony E 18-55mm OSS, E 30mm Macro, and E 35mm OSS",
    links: [
      lensLink("sony-e-18-55mm-f35-56-oss", "E 18-55mm OSS"),
      lensLink("sony-sel30mmf35", "E 30mm Macro"),
      lensLink("sony-e-35mm-f18-oss", "E 35mm OSS"),
    ],
  },
  // ── 2026-05-27 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-27",
    type: "lens",
    summary: "Added Leica Summicron-R 50mm f/2, Elmarit-R 35mm f/2.8, and Macro-Elmarit-R 60mm f/2.8",
    links: [
      lensLink("leica-summicron-r-50mm-f2", "Summicron-R 50mm f/2"),
      lensLink("leica-elmarit-r-35mm-f28", "Elmarit-R 35mm f/2.8"),
      lensLink("leica-macro-elmarit-r-60mm-f28", "Macro-Elmarit-R 60mm f/2.8"),
    ],
  },
  {
    date: "2026-05-27",
    type: "improvement",
    summary: "Modernized the optics engine for state-aware ray tracing and analysis",
  },
  {
    date: "2026-05-27",
    type: "feature",
    summary: "Added optical summary and bokeh tabs to the analysis drawer",
  },
  {
    date: "2026-05-27",
    type: "fix",
    summary: "Removed the duplicate beta bokeh panel from the diagram overlay controls",
  },
  {
    date: "2026-05-27",
    type: "improvement",
    summary: "Improved fisheye bokeh and folded-mirror pupil analysis",
  },
  // ── 2026-05-26 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-26",
    type: "feature",
    summary: "Added hidden mirror and folded-path optics fixtures with accurate folded ray tracing",
  },
  {
    date: "2026-05-26",
    type: "lens",
    summary: "Added Minolta AF 35-70mm f/4, APO Tele 200mm f/2.8, and APO Tele 300mm f/2.8",
    links: [
      lensLink("minolta-af-35-70-f4", "AF 35-70mm f/4"),
      lensLink("minolta-af-200mm-f28", "APO Tele 200mm f/2.8"),
      lensLink("minolta-af-300mm-f28", "APO Tele 300mm f/2.8"),
    ],
  },
  // ── 2026-05-25 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-25",
    type: "lens",
    summary: "Added Nikon AF-P DX 18-55mm VR, AF-S DX 55-200mm VR II, and AF-S DX 55-300mm VR",
    links: [
      lensLink("nikon-afp-dx-18-55mm-f35-56g-vr", "AF-P DX 18-55mm VR"),
      lensLink("nikon-af-s-dx-55-200-f4-5-6g-ed-vr-ii", "AF-S DX 55-200mm VR II"),
      lensLink("nikon-af-s-dx-55-300mm-f45-56g-ed-vr", "AF-S DX 55-300mm VR"),
    ],
  },
  // ── 2026-05-24 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-24",
    type: "lens",
    summary: "Added Canon EF-S 10-22mm, EF-S 18-55mm IS, and EF-S 55-250mm IS STM",
    links: [
      lensLink("canon-efs-10-22mm-f35-45-usm", "EF-S 10-22mm"),
      lensLink("canon-efs-18-55mm-f35-56-is", "EF-S 18-55mm IS"),
      lensLink("canon-ef-s-55-250mm-f4-5-6-is-stm", "EF-S 55-250mm IS STM"),
    ],
  },
  // ── 2026-05-23 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-23",
    type: "lens",
    summary: "Added Pentax-A 645 45mm f/2.8, Pentax-FA 645 120mm f/4 Macro, and Pentax 67 100mm f/4 Macro",
    links: [
      lensLink("pentax-645-a-45mm-f28", "Pentax-A 645 45mm f/2.8"),
      lensLink("pentax-645-fa-120mm-f4-macro", "Pentax-FA 645 120mm f/4 Macro"),
      lensLink("pentax-smc-67-100mm-f4", "Pentax 67 100mm f/4 Macro"),
    ],
  },
  {
    date: "2026-05-23",
    type: "improvement",
    summary: "Completed the transition to the updated exact surface ray tracing method",
  },
  // ── 2026-05-22 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-22",
    type: "lens",
    summary:
      "Added Sony FE 14mm f/1.8 GM, FE 16-35mm f/2.8 GM II, FE 28mm F2, Zeiss B-Distagon 35mm f/4, Distagon 28mm f/2, Jena Biogon 3.5cm f/2.8, Touit 50mm Macro, and ZX1 Distagon 35mm f/2",
    links: [
      lensLink("sony-fe-14mm-f18-gm", "Sony FE 14mm f/1.8 GM"),
      lensLink("sony-fe-16-35mm-f28-gm-ii", "FE 16-35mm f/2.8 GM II"),
      lensLink("sony-fe-28mm-f2", "FE 28mm F2"),
      lensLink("zeiss-distagon-35mm-f4-contarex", "Zeiss B-Distagon 35mm f/4"),
      lensLink("zeiss-distagon-28mm-f2", "Distagon 28mm f/2"),
      lensLink("zeiss-biogon-35mm-f28-prewar", "Jena Biogon 3.5cm f/2.8"),
      lensLink("zeiss-touit-50mm-f28-macro", "Touit 50mm Macro"),
      lensLink("zeiss-zx1-distagon-35mm-f2", "ZX1 Distagon 35mm f/2"),
    ],
  },
  // ── 2026-05-21 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-21",
    type: "lens",
    summary: "Added Zeiss Hologon 15mm f/8 with its stop modeled inside the central element",
    links: [lensLink("zeiss-hologon-15f8", "Hologon 15mm f/8")],
  },
  {
    date: "2026-05-21",
    type: "lens",
    summary:
      "Added Canon EF 8-15mm f/4L Fisheye, 24-70mm f/2.8L II, 70-200mm f/2.8L IS II, 70-300mm f/4-5.6L, 100mm f/2.8L Macro IS, and 200mm f/2L IS",
    links: [
      lensLink("canon-ef-8-15mm-f4l-fisheye-usm", "EF 8-15mm f/4L Fisheye"),
      lensLink("canon-ef-24-70-f28l-ii", "24-70mm f/2.8L II"),
      lensLink("canon-ef-70-200mm-f28l-is-ii-usm", "70-200mm f/2.8L IS II"),
      lensLink("canon-ef-70-300mm-f4-5.6l-is-usm", "70-300mm f/4-5.6L"),
      lensLink("canon-ef-100mm-f28l-is-macro", "100mm f/2.8L Macro IS"),
      lensLink("canon-ef-200mm-f2l-is-usm", "200mm f/2L IS"),
    ],
  },
  {
    date: "2026-05-21",
    type: "improvement",
    summary: "Improved fisheye zoom projection analysis across the zoom range",
  },
  // ── 2026-05-20 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-20",
    type: "improvement",
    summary:
      "Nikon Fisheye-Nikkor 6mm f/2.8 and Fisheye-Nikkor 6mm f/5.6 now show their full 110° patent-declared half-field",
    links: [
      lensLink("nikon-fisheye-nikkor-6mm-f28", "Fisheye-Nikkor 6mm f/2.8"),
      lensLink("nikon-fisheye-nikkor-6mm-f56", "Fisheye-Nikkor 6mm f/5.6"),
    ],
  },
  {
    date: "2026-05-20",
    type: "improvement",
    summary: "Distortion field grid now fills in for fisheye lenses where it previously left corners blank",
  },
  {
    date: "2026-05-20",
    type: "lens",
    summary:
      "Added Nikon 1 10mm f/2.8 and 32mm f/1.2; AF-S 20mm f/1.8G, 24mm f/1.4G, and 28-300mm VR; AI 28mm f/3.5 and 180mm f/2.8 ED; Fisheye-Nikkor 6mm f/2.8 and Fisheye-Nikkor 6mm f/5.6; Fuwatto Soft 90mm, Gugutto Macro 120mm, and Gyogyotto 20mm",
    links: [
      lensLink("nikon-1-nikkor-10mm-f28", "Nikon 1 10mm f/2.8"),
      lensLink("nikon-1-nikkor-32mm-f12", "32mm f/1.2"),
      lensLink("nikon-nikkor-afs-20mm-f18g", "AF-S 20mm f/1.8G"),
      lensLink("nikon-nikkor-afs-24mm-f14g", "24mm f/1.4G"),
      lensLink("nikon-nikkor-afs-28-300mm-f35-56g-ed-vr", "28-300mm VR"),
      lensLink("nikon-ai-28mm-f35", "AI 28mm f/3.5"),
      lensLink("nikon-ai-nikkor-180mm-f28-ed", "180mm f/2.8 ED"),
      lensLink("nikon-fisheye-nikkor-6mm-f28", "Fisheye-Nikkor 6mm f/2.8"),
      lensLink("nikon-fisheye-nikkor-6mm-f56", "Fisheye-Nikkor 6mm f/5.6"),
      lensLink("nikon-fuwatto-soft-90mm-f48", "Fuwatto Soft 90mm"),
      lensLink("nikon-gugotto-120mm-f45", "Gugutto Macro 120mm"),
      lensLink("nikon-gyogyotto-20mm-f8", "Gyogyotto 20mm"),
    ],
  },
  // ── 2026-05-19 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-19",
    type: "improvement",
    summary: "Expanded Sellmeier coverage to 247 vendor-verified glass entries",
  },
  {
    date: "2026-05-19",
    type: "fix",
    summary: "Audited 52 lens prescriptions and corrected glass labels across the catalog",
  },
  {
    date: "2026-05-19",
    type: "lens",
    summary: "Added Fujifilm GF 20-35mm f/4, 23mm f/4, 30mm f/5.6 T/S, 32-64mm f/4, 45mm f/2.8, and 55mm f/1.7",
    links: [
      lensLink("fujifilm-gf-20-35mm-f4-r-wr", "GF 20-35mm f/4"),
      lensLink("fujifilm-gf-23mm-f4", "23mm f/4"),
      lensLink("fujifilm-gf-30mm-f56-ts", "30mm f/5.6 T/S"),
      lensLink("fujifilm-gf-32-64mm-f4-r-lm-wr", "32-64mm f/4"),
      lensLink("fujifilm-gf-45mm-f28-r-wr", "45mm f/2.8"),
      lensLink("fujifilm-gf55mm-f17-r-wr", "55mm f/1.7"),
    ],
  },
  // ── 2026-05-18 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-18",
    type: "lens",
    summary:
      "Added Fujifilm X70 18.5mm f/2.8, X100 23mm f/2, X100V 23mm f/2, GFX100RF 35mm f/4, GA645W 45mm f/4, and GA645 60mm f/4",
    links: [
      lensLink("fujifilm-x70-18mm-f28", "X70 18.5mm f/2.8"),
      lensLink("fujifilm-x100-23f2", "X100 23mm f/2"),
      lensLink("fujifilm-x100v-23f2", "X100V 23mm f/2"),
      lensLink("fujifilm-gfx100rf-35mm-f4", "GFX100RF 35mm f/4"),
      lensLink("fujifilm-ga645widepro-45mm-f4", "GA645W 45mm f/4"),
      lensLink("fujifilm-ga645-pro-60mm-f4", "GA645 60mm f/4"),
    ],
  },
  // ── 2026-05-17 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-17",
    type: "lens",
    summary:
      "Added Olympus M.Zuiko 17mm f/1.8, M.Zuiko 12-100mm f/4 IS PRO, OM 16mm f/3.5 Fisheye, OM 24mm f/2, E.Zuiko 135mm f/3.5, and XA 35mm f/2.8",
    links: [
      lensLink("olympus-mzuiko-17mm-f18", "M.Zuiko 17mm f/1.8"),
      lensLink("olympus-mzuiko-12100mm-f4-is-pro", "M.Zuiko 12-100mm f/4 IS PRO"),
      lensLink("olympus-zuiko-16mmf35-fisheye", "OM 16mm f/3.5 Fisheye"),
      lensLink("olympus-zuiko-24f2-j", "OM 24mm f/2"),
      lensLink("olympus-zuiko-135-f35", "E.Zuiko 135mm f/3.5"),
      lensLink("olympus-xa-zuiko-35-f28", "XA 35mm f/2.8"),
    ],
  },
  // ── 2026-05-16 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-16",
    type: "lens",
    summary:
      "Added Sony FE 24-70mm f/2.8 GM II, FE 28-70mm F2 GM, and FE 70-200mm F2.8 GM II; Schneider Apo-Symmar 5.6/100, Super-Symmar XL 5.6/110, and Super-Angulon 75mm f/5.6",
    links: [
      lensLink("sony-fe-24-70mm-f28-gm-ii", "Sony FE 24-70mm f/2.8 GM II"),
      lensLink("sony-fe-28-70mm-f2-gm", "FE 28-70mm F2 GM"),
      lensLink("sony-fe-70-200mm-f28-gm-ii", "FE 70-200mm F2.8 GM II"),
      lensLink("schneider-apo-symmar-100-f56", "Apo-Symmar 5.6/100"),
      lensLink("schneider-super-symmar-xl-110-f56", "Super-Symmar XL 5.6/110"),
      lensLink("schneider-super-angulon-75-f56", "Super-Angulon 75mm f/5.6"),
    ],
  },
  // ── 2026-05-15 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-15",
    type: "improvement",
    summary: "Improved patent-focused search metadata, sitemap links, and social previews",
  },
  {
    date: "2026-05-15",
    type: "lens",
    summary:
      "Added Laowa 12mm f/2.8 Zero-D, 15mm f/2 Zero-D, 15mm f/4 Macro, 24mm f/14 Probe, 58mm f/2.8 APO, and 65mm f/2.8 APO",
    links: [
      lensLink("laowa-12mm-f28-zero-d", "12mm f/2.8 Zero-D"),
      lensLink("laowa-15mm-f2-zero-d", "15mm f/2 Zero-D"),
      lensLink("laowa-15f4-macro", "15mm f/4 Macro"),
      lensLink("laowa-24f14-probe", "24mm f/14 Probe"),
      lensLink("laowa-58mm-f28-2x-macro-apo", "58mm f/2.8 APO"),
      lensLink("laowa-65mm-f28-macro-apo", "65mm f/2.8 APO"),
    ],
  },
  // ── 2026-05-14 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-14",
    type: "improvement",
    summary: "Added experimental exact surface tracing for opt-in lens diagnostics",
  },
  {
    date: "2026-05-14",
    type: "lens",
    summary: "Added three new Minolta lenses: AF 100mm f/2.8 Macro, AF 35-105mm f/3.5-4.5, and AF 70-200mm f/2.8 APO",
    links: [
      lensLink("minolta-af-100mm-f28-macro", "AF 100mm f/2.8 Macro"),
      lensLink("minolta-af-35-105mm-f3-5-4-5-v2", "AF 35-105mm f/3.5-4.5"),
      lensLink("minolta-af-70-200mm-f28-apo-g-d-ssm", "AF 70-200mm f/2.8 APO"),
    ],
  },
  {
    date: "2026-05-14",
    type: "fix",
    summary: "Fixed lens mount titling for C/Y mount",
  },
  // ── 2026-05-13 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-13",
    type: "lens",
    summary:
      "Added Canon EF-M 22mm f/2, EF-M 28mm Macro, EF-M 32mm f/1.4, EF-S 10-18mm, EF-S 17-55mm f/2.8, and EF-S 24mm f/2.8",
    links: [
      lensLink("canon-efm-22mm-f2-stm", "EF-M 22mm f/2"),
      lensLink("canon-efm-28mm-f35-macro-is-stm", "EF-M 28mm Macro"),
      lensLink("canon-ef-m-32mm-f14-stm", "EF-M 32mm f/1.4"),
      lensLink("canon-efs-10-18-f4556-is-stm", "EF-S 10-18mm"),
      lensLink("canon-efs-17-55-f2.8-is", "EF-S 17-55mm f/2.8"),
      lensLink("canon-efs-24-f28-stm", "EF-S 24mm f/2.8"),
    ],
  },
  {
    date: "2026-05-13",
    type: "improvement",
    summary: "Added Canon EF-S as a distinct lens-library mount filter",
  },
  // ── 2026-05-12 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-12",
    type: "feature",
    summary: "Added a lens-group motion chart for focus and zoom movement",
  },
  {
    date: "2026-05-12",
    type: "lens",
    summary:
      "Added Nikon Z DX 16-50mm VR, Z DX 18-140mm VR, Z DX 50-250mm VR, AF-P DX 10-20mm VR, AF-P DX 70-300mm VR, and AF-P 70-300mm VR",
    links: [
      lensLink("nikon-z-dx-16-50-f3563-vr", "Z DX 16-50mm VR"),
      lensLink("nikon-z-dx-18-140-f35-63-vr", "Z DX 18-140mm VR"),
      lensLink("nikon-z-dx-50-250mm-f45-63-vr", "Z DX 50-250mm VR"),
      lensLink("nikon-af-p-dx-10-20mm-f45-56g-vr", "AF-P DX 10-20mm VR"),
      lensLink("nikon-afp-dx-70-300-f4563g", "AF-P DX 70-300mm VR"),
      lensLink("nikon-af-p-70-300-f45-56e-ed-vr", "AF-P 70-300mm VR"),
    ],
  },
  // ── 2026-05-11 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-11",
    type: "improvement",
    summary: "Expanded the Sellmeier glass catalog to 180 verified entries",
  },
  {
    date: "2026-05-11",
    type: "fix",
    summary: "Conducted three glass audits across different lens models",
  },
  {
    date: "2026-05-11",
    type: "lens",
    summary:
      "Added Hasselblad HC 3.5/50, HC 4/210, HC 4.5/300, Leica SL 90-280mm f/2.8-4, Sigma 85mm F1.4 DG HSM Art, and Sigma dp0 Quattro 14mm f/4",
    links: [
      lensLink("hasselblad-hc-50-f35", "HC 3.5/50"),
      lensLink("hasselblad-hc-210-f4", "HC 4/210"),
      lensLink("hasselblad-hc-300-f4p5", "HC 4.5/300"),
      lensLink("leica-apo-vario-elmarit-sl-90-280-f28-4", "Leica SL 90-280mm f/2.8-4"),
      lensLink("sigma-85f14-art", "Sigma 85mm F1.4 DG HSM Art"),
      lensLink("sigma-dp0-quattro-14-f4", "Sigma dp0 Quattro 14mm f/4"),
    ],
  },
  // ── 2026-05-10 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-10",
    type: "fix",
    summary: "Conducted five glass audits across different lens models",
  },
  {
    date: "2026-05-10",
    type: "lens",
    summary:
      "Added Panasonic Leica DG 9mm f/1.7, DG 15mm f/1.7, DG 25mm f/1.4, Olympus M.Zuiko 12-40mm f/2.8 PRO, M.Zuiko 40-150mm f/2.8 PRO, and Leica APO-Macro-Elmarit-TL 60mm f/2.8",
    links: [
      lensLink("panasonic-leica-dg-9f17", "Panasonic Leica DG 9mm f/1.7"),
      lensLink("panasonic-leica-dg-15f17", "DG 15mm f/1.7"),
      lensLink("panasonic-leica-dg-25f14", "DG 25mm f/1.4"),
      lensLink("olympus-mzuiko-12-40-f28-pro", "Olympus M.Zuiko 12-40mm f/2.8 PRO"),
      lensLink("olympus-mzuiko-40-150-f28-pro", "M.Zuiko 40-150mm f/2.8 PRO"),
      lensLink("leica-apo-macro-elmarit-tl-60-f28", "Leica APO-Macro-Elmarit-TL 60mm f/2.8"),
    ],
  },
  // ── 2026-05-09 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-09",
    type: "improvement",
    summary: "Expanded the Sellmeier glass catalog to 129 verified entries",
  },
  {
    date: "2026-05-09",
    type: "lens",
    summary:
      "Added Hasselblad XCD 65mm f/2.8, XCD 90mm f/2.5, XCD 120mm Macro, HC 80mm f/2.8, HC 120mm Macro, and HC 150mm f/3.2",
    links: [
      lensLink("hasselblad-xcd-65-f28", "XCD 65mm f/2.8"),
      lensLink("hasselblad-xcd-90-f25-v", "XCD 90mm f/2.5"),
      lensLink("hasselblad-xcd-120-f35-macro", "XCD 120mm Macro"),
      lensLink("hasselblad-hc-80-f28", "HC 80mm f/2.8"),
      lensLink("hasselblad-hc-macro-4-120", "HC 120mm Macro"),
      lensLink("hasselblad-hc-150-f32", "HC 150mm f/3.2"),
    ],
  },
  // ── 2026-05-08 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-08",
    type: "lens",
    summary:
      "Added three Fujifilm lenses: GF110mm f/2 R, GF80mm f/1.7 R, and GF120mm f/4 R LM OIS WR Macro; and three Sony lenses: FE 20-70mm f/4.0G, Planar FE 50mm f/1.4, and Planar T* 50mm f/1.4 ZA",
    links: [
      lensLink("fujifilm-gf-110mm-f2", "GF110mm f/2 R"),
      lensLink("fujifilm-gf80-f17", "GF80mm f/1.7 R"),
      lensLink("gf-120f4-macro", "GF120mm f/4 R LM OIS WR Macro"),
      lensLink("sony-fe-20-70mm-f4-g", "FE 20-70mm f/4.0G"),
      lensLink("sony-planar-fe-50f14-za", "Planar FE 50mm f/1.4"),
      lensLink("sony-planar-t-50f14-za", "Planar T* 50mm f/1.4 ZA"),
    ],
  },
  // ── 2026-05-07 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-07",
    type: "improvement",
    summary: "Limited field-based analysis views to each lens image-format diagonal",
  },
  {
    date: "2026-05-07",
    type: "feature",
    summary: "Added lens mount and image-format filters to the lens library",
  },
  {
    date: "2026-05-07",
    type: "lens",
    summary: "Added Panasonic S 20-60mm f/3.5-5.6, Pentax-110 24mm f/2.8, and Pentax-110 50mm f/2.8",
    links: [
      lensLink("lumix-s-20-60-f35-56", "Panasonic S 20-60mm f/3.5-5.6"),
      lensLink("pentax-110-24f28", "Pentax-110 24mm f/2.8"),
      lensLink("pentax110-50f28", "Pentax-110 50mm f/2.8"),
    ],
  },
  // ── 2026-05-06 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-06",
    type: "fix",
    summary: "Fixed soft-focus control in aberration, bokeh, pupil, and LCA views",
  },
  {
    date: "2026-05-06",
    type: "lens",
    summary: "Added three Pentax lenses: DA 16-50mm f/2.8, DA 50-135mm f/2.8, and F 85mm f/2.8 Soft",
    links: [
      lensLink("pentax-da-16-50-f28", "DA 16-50mm f/2.8"),
      lensLink("pentax-da-50-135-f28", "DA 50-135mm f/2.8"),
      lensLink("pentax-f-85-f28-soft", "F 85mm f/2.8 Soft"),
    ],
  },
  {
    date: "2026-05-06",
    type: "lens",
    summary:
      "Added Sigma 40mm f/1.4 DG DN Art, Voigtlander Macro Apo-Lanthar 125mm f/2.5, and Apo-Lanthar 180mm f/4 SL Close Focus",
    links: [
      lensLink("sigma-art-40-f14", "Sigma 40mm f/1.4 DG DN Art"),
      lensLink("voigtlander-macro-apo-lanthar-125-f25", "Macro Apo-Lanthar 125mm f/2.5"),
      lensLink("voigtlander-apo-lanthar-180-f4", "Apo-Lanthar 180mm f/4 SL Close Focus"),
    ],
  },
  // ── 2026-05-05 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-05",
    type: "fix",
    summary: "Fixed LCA inset values when chromatic color channels are toggled",
  },
  {
    date: "2026-05-05",
    type: "feature",
    summary: "Added aberration control variable support for lenses with separate soft-focus rings",
  },
  {
    date: "2026-05-05",
    type: "lens",
    summary:
      "Added Canon EF 40mm f/2.8, 100mm f/2.8 L Macro IS USM, Minolta Rokkor MD 45mm f/2, Rokkor MD 50mm f/1.4, and Varisoft 85mm f/2.8",
    links: [
      lensLink("canon-ef-40-f28-stm", "Canon EF 40mm f/2.8"),
      lensLink("canon-ef-100mm-f28l-macro-is", "100mm f/2.8 L Macro IS USM"),
      lensLink("minolta-md-rokkor-45f2", "Rokkor MD 45mm f/2"),
      lensLink("minolta-md-rokkor-50f14", "Rokkor MD 50mm f/1.4"),
      lensLink("varisoft-rokkor-85f28", "Varisoft 85mm f/2.8"),
    ],
  },
  // ── 2026-05-04 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-04",
    type: "improvement",
    summary: "Expanded Sellmeier coverage for moldable Ohara glasses and Hoya TAFD40",
  },
  {
    date: "2026-05-04",
    type: "improvement",
    summary: "Expanded the glass catalog to 111 verified entries with priority ED and high-index glasses",
  },
  {
    date: "2026-05-04",
    type: "improvement",
    summary:
      "Conducted glass audit across an additional five lens files, improved SD estimates for Nikkor Z 24-70mm f/4 S",
  },
  {
    date: "2026-05-04",
    type: "lens",
    summary: "Added Panasonic S 35mm f/1.8, S Pro 50mm f/1.4, and Pentax FA 31mm f/1.8 AL Limited",
    links: [
      lensLink("panasonic-lumix-s-35-f18", "Panasonic S 35mm f/1.8"),
      lensLink("panasonic-lumix-s-pro-50-f14", "S Pro 50mm f/1.4"),
      lensLink("pentax-fa-31-f18-al-ltd", "Pentax FA 31mm f/1.8 AL Limited"),
    ],
  },
  {
    date: "2026-05-04",
    type: "lens",
    summary:
      "Added Sigma 50mm f/1.4 DG DN Art, Sigma 30mm f/2.8 for DP2 Merrill, and Vivitar Series 1 70-210mm f/2.8-4",
    links: [
      lensLink("sigma-50f14-dgdn-art", "Sigma 50mm f/1.4 DG DN Art"),
      lensLink("sigma-dp2m-30f28", "Sigma 30mm f/2.8 for DP2 Merrill"),
      lensLink("vivitar-s1-70-210-f28-4", "Vivitar Series 1 70-210mm f/2.8-4"),
    ],
  },
  // ── 2026-05-03 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-03",
    type: "lens",
    summary: "Added Sony E 24mm f/1.8 ZA, FE 35mm f/1.8 ZA, and FE 55mm f/1.8 ZA",
    links: [
      lensLink("sonnar-e-24f18-za", "Sony E 24mm f/1.8 ZA"),
      lensLink("sony-sonnar-fe-35-f28-za", "FE 35mm f/1.8 ZA"),
      lensLink("sony-sonnar-fe-55f18-za", "FE 55mm f/1.8 ZA"),
    ],
  },
  // ── 2026-05-02 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-02",
    type: "lens",
    summary: "Added Sony FE 85mm f/1.4 GM II and FE 135mm f/1.8 GM",
    links: [
      lensLink("sony-fe-85-f14-gm-ii", "FE 85mm f/1.4 GM II"),
      lensLink("sony-fe-135-f18-gm", "FE 135mm f/1.8 GM"),
    ],
  },
  // ── 2026-05-01 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-01",
    type: "article",
    summary:
      "Added beginner primers on cardinal points (F, H, N) and lens dimensions (EFL, BFD, FFD, hiatus, total track)",
  },
  {
    date: "2026-05-01",
    type: "lens",
    summary: "Added Sigma 35mm f/1.4 DG DN Art and 85mm f/1.4 DG DN Art",
    links: [
      lensLink("sigma-35-f14-dgdn-art", "35mm f/1.4 DG DN Art"),
      lensLink("sigma-art-85mm-f14-dgdn", "85mm f/1.4 DG DN Art"),
    ],
  },
  {
    date: "2026-05-01",
    type: "improvement",
    summary:
      "Expanded Sellmeier glass catalog from 65 to 92 entries, covering all Ohara and Schott glasses with 2+ element occurrences — more lenses now use full Sellmeier chromatic dispersion",
  },
  // ── 2026-04-30 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-30",
    type: "improvement",
    summary:
      "Expanded glass catalog to 53 vendor-verified Sellmeier entries (adding 15 Ohara dense-flint, ED, crown, and lanthanum glasses) and corrected 50+ glass misidentifications across 25 lens files — 696 surfaces now use full Sellmeier dispersion, up from 564",
  },
  {
    date: "2026-04-30",
    type: "lens",
    summary: "Added Canon FD 50mm f/1.2, and lenses for the Nikon 35Ti, Sigma DP2X, and DP3 Merrill compact cameras",
    links: [
      lensLink("canon-fd-50f1p2-l", "Canon FD 50mm f/1.2"),
      lensLink("nikon-35ti-35f28", "Nikon 35Ti"),
      lensLink("sigma-dp2x-24mmf28", "Sigma DP2X"),
      lensLink("sigma-dp3m-50f28", "DP3 Merrill"),
    ],
  },
  // ── 2026-04-29 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-29",
    type: "article",
    summary:
      "Added From Achromat to APO: Chromatic Correction, Optical Glass, and the Evolution of Color-Corrected Lenses",
  },
  {
    date: "2026-04-29",
    type: "feature",
    summary: "Added cardinal element and first-order distance overlays to lens diagrams",
  },
  {
    date: "2026-04-29",
    type: "lens",
    summary: "Added Zeiss Tessar 50mm f/3.5, Jena Tessar 50mm f/2.8, and Sony FE 90mm f/2.8 Macro G OSS",
    links: [
      lensLink("carl-zeiss-tessar-50f35", "Zeiss Tessar 50mm f/3.5"),
      lensLink("czj-tessar-50-f28", "Jena Tessar 50mm f/2.8"),
      lensLink("sony-fe-90mm-f2p8-macro", "Sony FE 90mm f/2.8 Macro G OSS"),
    ],
  },
  // ── 2026-04-28 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-28",
    type: "improvement",
    summary:
      "Improved chromatic ray tracing with ray-density controls, off-axis color fans, and LCA readouts for clipped marginal rays",
  },
  {
    date: "2026-04-28",
    type: "feature",
    summary: "Added basic tilt and shift controls for supported Nikon perspective-control lenses",
  },
  {
    date: "2026-04-28",
    type: "lens",
    summary:
      "Added Fujifilm XF 18mm f/2 R and XF 23mm f/1.4 R, Zeiss Olympia-Sonnar 180mm f/2.8, and Pro-Tessar 35mm f/3.2",
    links: [
      lensLink("fujifilm-xf18f2r", "XF 18mm f/2 R"),
      lensLink("fujinon-xf-23mm-f14-r", "XF 23mm f/1.4 R"),
      lensLink("zeiss-olympia-sonnar-180f28-contarex", "Olympia-Sonnar 180mm f/2.8"),
      lensLink("zeiss-pro-tessar-35f32", "Pro-Tessar 35mm f/3.2"),
    ],
  },
  // ── 2026-04-27 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-27",
    type: "lens",
    summary:
      "Added Olympus Zuiko Auto-W 21mm f/2, Auto-Macro 50mm f/2, Auto-Macro 90mm f/2, and Nikon Nikkor-S Auto 50mm f/1.4",
    links: [
      lensLink("olympus-zuiko-auto-w-21mm-f2", "Zuiko Auto-W 21mm f/2"),
      lensLink("olympus-zuiko-auto-macro-50f2", "Auto-Macro 50mm f/2"),
      lensLink("olympus-zuiko-auto-macro-90f2", "Auto-Macro 90mm f/2"),
      lensLink("nikkor-s-auto-50mm-f14", "Nikkor-S Auto 50mm f/1.4"),
    ],
  },
  // ── 2026-04-26 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-26",
    type: "improvement",
    summary: "Split Carl Zeiss into separate Jena and Oberkochen maker pages reflecting the postwar division",
  },
  {
    date: "2026-04-26",
    type: "improvement",
    summary: "Added maker pages for Konica, Minolta, Pentax, Schneider Kreuznach, Sigma, and Sony",
  },
  {
    date: "2026-04-26",
    type: "lens",
    summary:
      "Added three Carl Zeiss lenses: Contarex Planar 55mm f/1.4, Jena Pancolar 50mm f/2, and Planar T* 50mm f/1.4",
    links: [
      lensLink("carl-zeiss-contarex-planar-55f14", "Contarex Planar 55mm f/1.4"),
      lensLink("carl-zeiss-jena-pancolar-50f2", "Jena Pancolar 50mm f/2"),
      lensLink("zeiss-planar-t-50f14", "Planar T* 50mm f/1.4"),
    ],
  },
  {
    date: "2026-04-26",
    type: "lens",
    summary: "Added Olympus Zuiko Auto-T 85mm f/2 with floating rear-group focusing",
    links: [lensLink("olympus-zuiko-85mm-f2", "Zuiko Auto-T 85mm f/2")],
  },
  {
    date: "2026-04-26",
    type: "feature",
    summary:
      "Added shareable URLs for selected elements, overlays (glass map, LCA, Petzval), bokeh preview, and analysis tabs",
  },
  // ── 2026-04-25 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-25",
    type: "fix",
    summary: "Improves accuracy of Canon RF and EF lens diagrams",
  },
  {
    date: "2026-04-25",
    type: "feature",
    summary:
      "Added aspheric deviation inspector: compare any aspheric surface to its spherical equivalent with zoom, exaggeration, and click-to-measure Δsag",
  },
  {
    date: "2026-04-25",
    type: "lens",
    summary:
      "Added three Nikon Perspective Control lenses: PC NIKKOR 19mm f/4E ED, PC NIKKOR 24mm f/3.5D ED, and PC NIKKOR 45mm f/2.8D ED",
    links: [
      lensLink("nikon-pc-nikkor-19mm-f4e-ed", "PC NIKKOR 19mm f/4E ED"),
      lensLink("nikon-pc-e-nikkor-24-f35d-ed", "PC NIKKOR 24mm f/3.5D ED"),
      lensLink("nikon-pce-micro-nikkor-45f28d", "PC NIKKOR 45mm f/2.8D ED"),
    ],
  },
  // ── 2026-04-24 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-24",
    type: "improvement",
    summary: "Added an Olympus maker page with company history",
  },
  {
    date: "2026-04-24",
    type: "lens",
    summary: "Added Olympus Zuiko Auto-S 50mm f/1.2, G.Zuiko Auto-S 50mm f/1.4, and G.Zuiko Auto-S 55mm f/1.2",
    links: [
      lensLink("olympus-zuiko-auto-s-50f12", "Zuiko Auto-S 50mm f/1.2"),
      lensLink("olympus-zuiko-auto-s-50f14", "G.Zuiko Auto-S 50mm f/1.4"),
      lensLink("olympus-zuiko-auto-s-55-f12", "G.Zuiko Auto-S 55mm f/1.2"),
    ],
  },
  // ── 2026-04-23 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-23",
    type: "improvement",
    summary: "Improved slider performance — analysis tabs and bokeh now update only after dragging stops",
  },
  {
    date: "2026-04-23",
    type: "lens",
    summary:
      "Added Nikon AF-S 24-70mm f/2.8E ED VR, Nikon AF-S 70-200mm f/2.8E FL ED VR, and Nikon AF-S 80-400mm f/4.5-5.6E ED VR",
    links: [
      lensLink("nikkor-afs-24-70-f28e-vr", "Nikon AF-S 24-70mm f/2.8E ED VR"),
      lensLink("nikon-afs-70-200-f28e-fl", "Nikon AF-S 70-200mm f/2.8E FL ED VR"),
      lensLink("nikon-afs-80-400-f45-56g", "Nikon AF-S 80-400mm f/4.5-5.6E ED VR"),
    ],
  },
  {
    date: "2026-04-23",
    type: "lens",
    summary: "Added Canon RF 24-105mm f/2.8 L, Zeiss Biogon 21mm, and Distagon 35mm",
    links: [
      lensLink("canon-rf24-105f28z", "Canon RF 24-105mm f/2.8 L"),
      lensLink("zeiss-biogon-21-f45", "Zeiss Biogon 21mm"),
      lensLink("zeiss-distagon-35f14", "Distagon 35mm"),
    ],
  },
  // ── 2026-04-22 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-22",
    type: "lens",
    summary: "Added Canon RF 50mm f/1.2 L, RF 85mm f/1.2 L, and Voigtländer Nokton 35mm f/1.2",
    links: [
      lensLink("canon-rf-50-f12-l", "RF 50mm f/1.2 L"),
      lensLink("canon-rf-85f12l", "RF 85mm f/1.2 L"),
      lensLink("voigtlander-nokton-35-f12", "Nokton 35mm f/1.2"),
    ],
  },
  // ── 2026-04-21 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-21",
    type: "article",
    summary: "Added Pupil Geometry article series covering entrance pupil, exit pupil, telecentricity, and more",
  },
  {
    date: "2026-04-21",
    type: "improvement",
    summary:
      "Improved element outline rendering, added a 10% boundary-gap clearance margin, and audited production semi-diameters",
  },
  {
    date: "2026-04-21",
    type: "fix",
    summary: "Fixed Canon RF 24-105mm f/4 L close-focus behavior",
    links: [lensLink("canon-rf-24-105-f4-l", "Canon RF 24-105mm f/4 L")],
  },
  {
    date: "2026-04-21",
    type: "lens",
    summary: "Added Canon RF 24-105mm f/4 L, Nikon Z 40mm f/2, Ricoh GR/GR2 18.3mm f/2.8, and GR Lens A12 28mm f/2.5",
    links: [
      lensLink("canon-rf-24-105-f4-l", "Canon RF 24-105mm f/4 L"),
      lensLink("nikkor-z-40f2", "Nikon Z 40mm f/2"),
      lensLink("ricoh-gr-18p3-f2p8", "Ricoh GR/GR2 18.3mm f/2.8"),
      lensLink("ricoh-gxr-a12-18f25", "GR Lens A12 28mm f/2.5"),
    ],
  },
  // ── 2026-04-20 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-20",
    type: "lens",
    summary: "Added Canon EF 50mm f/1.0L USM and Canon RF 85mm f/2 Macro IS STM",
    links: [
      lensLink("canon-ef-50f10l", "Canon EF 50mm f/1.0L USM"),
      lensLink("canon-rf-85f2-macro", "Canon RF 85mm f/2 Macro IS STM"),
    ],
  },
  // ── 2026-04-19 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-19",
    type: "lens",
    summary: "Added Fujifilm XF 35mm f/1.4 R and XF 60mm f/2.4 R Macro",
    links: [
      lensLink("fujifilm-xf35-f14-r", "XF 35mm f/1.4 R"),
      lensLink("fujifilm-xf60-f24-r-macro", "XF 60mm f/2.4 R Macro"),
    ],
  },
  // ── 2026-04-18 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-18",
    type: "improvement",
    summary: "Improved entrance and exit pupil overlay and button readability",
  },
  {
    date: "2026-04-18",
    type: "lens",
    summary: "Added Leica Elmarit-R 28mm f/2.8 and Leica Elmarit 90mm f/2.8",
    links: [lensLink("elmarit-r-28f28", "Elmarit-R 28mm f/2.8"), lensLink("leica-elmarit-90f28", "Elmarit 90mm f/2.8")],
  },
  // ── 2026-04-17 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-17",
    type: "feature",
    summary: "Added Pupils analysis tab showing entrance and exit pupil position shift across the field",
  },
  {
    date: "2026-04-17",
    type: "feature",
    summary: "Added entrance and exit pupil overlay toggle to the diagram controls",
  },
  {
    date: "2026-04-17",
    type: "lens",
    summary:
      "Added Canon RF 24-50mm f/4-6.3 IS STM, Nikon L35AF 35mm f/2.8, Nikon Nikkor Z 24-50mm f/4-6.3, and Nikon Nikkor Z 35mm f/1.2 S",
    links: [
      lensLink("canon-rf-24-50-f45-63", "Canon RF 24-50mm f/4-6.3 IS STM"),
      lensLink("nikon-l35af-35f28", "Nikon L35AF 35mm f/2.8"),
      lensLink("nikkor-z-24-50-f4-63", "Nikon Nikkor Z 24-50mm f/4-6.3"),
      lensLink("nikon-nikkor-z-35f12s", "Nikon Nikkor Z 35mm f/1.2 S"),
    ],
  },
  // ── 2026-04-16 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-16",
    type: "improvement",
    summary: "Improved bokeh, spherical aberration, and coma analysis accuracy and displays",
  },
  {
    date: "2026-04-16",
    type: "improvement",
    summary: "New logo and social media card",
  },
  {
    date: "2026-04-16",
    type: "lens",
    summary:
      "Added Fujifilm XF 16-55mm f/2.8 R LM WR, XF 16-80mm f/2.8 R OIS WR, XF 50-140mm f/2.8 R LM OIS WR, and XF 200mm f/2 R LM OIS WR",
    links: [
      lensLink("fuji-xf-16-55-f28", "XF 16-55mm f/2.8 R LM WR"),
      lensLink("fujifilm-xf-16-80-f4", "XF 16-80mm f/2.8 R OIS WR"),
      lensLink("fuji-xf-50140mm-f28", "XF 50-140mm f/2.8 R LM OIS WR"),
      lensLink("fujifilm-xf-200-f2", "XF 200mm f/2 R LM OIS WR"),
    ],
  },
  // ── 2026-04-15 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-15",
    type: "fix",
    summary: "Fixed semi-diameter shaping and rear-group clearance in the Canon RF 28-70mm F2 L USM",
    links: [lensLink("canon-rf-28-70-f2", "Canon RF 28-70mm F2 L USM")],
  },
  {
    date: "2026-04-15",
    type: "lens",
    summary: "Added Canon RF 28-70mm F2 L, RF 28-70mm f/2.8 IS, RF 24-240mm f/4-6.3, and Nikon Z 24-120mm f/4 S",
    links: [
      lensLink("canon-rf-28-70-f2", "Canon RF 28-70mm F2 L"),
      lensLink("canon-rf-28-70-f28-is-stm", "RF 28-70mm f/2.8 IS"),
      lensLink("canon-rf24-240-f4-63", "RF 24-240mm f/4-6.3"),
      lensLink("nikkor-z-24-120f4", "Nikon Z 24-120mm f/4 S"),
    ],
  },
  // ── 2026-04-14 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-14",
    type: "article",
    summary:
      "Published the Focusing Architectures series: a landing page, seven primers on focusing strategies, and a full monograph with a hovering table of contents",
  },
  {
    date: "2026-04-14",
    type: "lens",
    summary: "Added Nikon Z 14-30mm f/4 S, 24-70mm f/4 S, and 24-200mm f/4-6.3 VR",
    links: [
      lensLink("nikkor-z-14-30f4s", "Nikon Z 14-30mm f/4 S"),
      lensLink("nikon-z-24-70f4s", "24-70mm f/4 S"),
      lensLink("nikkor-z-24-200-f4-63-vr", "24-200mm f/4-6.3 VR"),
    ],
  },
  // ── 2026-04-13 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-13",
    type: "lens",
    summary: "Enabled Nikon AF-S 14-24mm f/2.8G ED and AF-S 16-35mm f/4G ED VR with accurate front group proportions",
    links: [
      lensLink("nikkor-afs-14-24f28", "Nikon AF-S 14-24mm f/2.8G ED"),
      lensLink("nikkor-afs-16-35f4-vr", "AF-S 16-35mm f/4G ED VR"),
    ],
  },
  {
    date: "2026-04-13",
    type: "improvement",
    summary: "Improved element rendering for wide-angle retrofocus designs with per-surface semi-diameters",
  },
  {
    date: "2026-04-13",
    type: "improvement",
    summary: "Improved vignetting and distortion accuracy for extreme wide-angle lenses (>40° half-field)",
  },
  {
    date: "2026-04-13",
    type: "fix",
    summary: "Corrected the 200-500mm optical aperture range",
    links: [lensLink("nikkor-afs-200-500f56e", "200-500mm")],
  },
  {
    date: "2026-04-13",
    type: "lens",
    summary: "Added two Nikon AF-S zooms: 120-300mm f/2.8E FL ED SR VR and 200-500mm f/5.6E ED VR",
    links: [
      lensLink("nikkor-afs-120-300f28e", "120-300mm f/2.8E FL ED SR VR"),
      lensLink("nikkor-afs-200-500f56e", "200-500mm f/5.6E ED VR"),
    ],
  },
  // ── 2026-04-12 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-12",
    type: "fix",
    summary: "Improved distortion and spherical aberration accuracy near the edges of the image circle",
  },
  // ── 2026-04-11 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-11",
    type: "lens",
    summary: "Added Canon Serenar 28mm f/3.5, Serenar 35mm f/3.2, Serenar 50mm f/1.8, and Serenar 85mm f/1.5",
    links: [
      lensLink("canon-serenar-28f35", "Canon Serenar 28mm f/3.5"),
      lensLink("canon-serenar-35f32", "Serenar 35mm f/3.2"),
      lensLink("canon-serenar-50f18", "Serenar 50mm f/1.8"),
      lensLink("canon-serenar-85f15", "Serenar 85mm f/1.5"),
    ],
  },
  // ── 2026-04-10 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-10",
    type: "feature",
    summary: "Added lens library custom filters with typeable min/max ranges and maker selection",
  },
  {
    date: "2026-04-10",
    type: "lens",
    summary: "Added Nikon Nikkor-N Auto 28mm f/2, Voigtländer Nokton 50mm f/1.2 X-Mount, and Nikon 28Ti 28mm f/2.8",
    links: [
      lensLink("nikkor-n-28f2", "Nikon Nikkor-N Auto 28mm f/2"),
      lensLink("voigtlander-nokton-x-50f12", "Voigtländer Nokton 50mm f/1.2 X-Mount"),
      lensLink("nikon-28ti-28f28", "Nikon 28Ti 28mm f/2.8"),
    ],
  },
  // ── 2026-04-09 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-09",
    type: "lens",
    summary:
      "Added five Leica lenses: Summilux 28mm f/1.7 ASPH (Q-series), APO-Summicron 43mm f/2 ASPH (Q3 43), ELCAN 50mm f/2, APO-Summicron-M 35mm f/2 ASPH, and Summicron-M 50mm f/2 V5",
    links: [
      lensLink("leica-summilux-28f17", "Summilux 28mm f/1.7 ASPH"),
      lensLink("leica-apo-summicron-43f2", "APO-Summicron 43mm f/2 ASPH"),
      lensLink("leica-elcan-50f2", "ELCAN 50mm f/2"),
      lensLink("leica-apo-summicron-m-35f2", "APO-Summicron-M 35mm f/2 ASPH"),
      lensLink("leica-summicron-m-50f2-v5", "Summicron-M 50mm f/2"),
    ],
  },
  // ── 2026-04-08 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-08",
    type: "improvement",
    summary:
      "Implemented uniform aspect ratio scaling — eliminates lens shape distortion from independent horizontal/vertical zoom",
  },
  {
    date: "2026-04-08",
    type: "lens",
    summary: "Calibrated Voigtländer Ultron 28/2 semi-diameters to Cosina's published cross-section diagram",
    links: [lensLink("ultron-28f2-asph", "Voigtländer Ultron 28/2")],
  },
  {
    date: "2026-04-08",
    type: "lens",
    summary: "Added Vivitar Series 1 35–85mm f/2.8 VMC, Fujifilm XF 90mm f/2 R LM WR, and Fujinon XF 56mm F1.2 R",
    links: [
      lensLink("vivitar-s1-35-85-f28", "Vivitar Series 1 35–85mm f/2.8 VMC"),
      lensLink("fujifilm-xf90f2", "Fujifilm XF 90mm f/2 R LM WR"),
      lensLink("fujinon-xf56f12r", "Fujinon XF 56mm F1.2 R"),
    ],
  },
  // ── 2026-04-07 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-07",
    type: "lens",
    summary:
      "Added Canon FD 35mm f/2 S.S.C., Nikon AI Nikkor 135mm f/2, Nikon AI Nikkor 135mm f/2.8, and Vivitar Series 1 200mm f/3.0 — four Sonnar-based and retrofocus designs",
    links: [
      lensLink("canon-fd-35-f2", "Canon FD 35mm f/2 S.S.C."),
      lensLink("nikon-ai-nikkor-135f2", "Nikon AI Nikkor 135mm f/2"),
      lensLink("nikon-ai-nikkor-135f28", "Nikon AI Nikkor 135mm f/2.8"),
      lensLink("vivitar-series1-200f3", "Vivitar Series 1 200mm f/3.0"),
    ],
  },
  // ── 2026-04-01 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-01",
    type: "lens",
    summary: "Added Canon New FD 50mm f/1.2 and Voigtländer Nokton 50mm f/1.2 X-Mount",
    links: [
      lensLink("canon-fdn-50f12", "Canon New FD 50mm f/1.2"),
      lensLink("voigtlander-nokton-x-50f12", "Voigtländer Nokton 50mm f/1.2 X-Mount"),
    ],
  },
  // ── 2026-03-31 ──────────────────────────────────────────────────────────
  {
    date: "2026-03-31",
    type: "lens",
    summary: "Added Nikon NIKKOR Z 35mm f/1.8 S and NIKKOR-N 5cm f/1.1",
    links: [lensLink("nikkor-z-35f18s", "NIKKOR Z 35mm f/1.8 S"), lensLink("nikon-5cm-f11", "NIKKOR-N 5cm f/1.1")],
  },
  // ── 2026-03-30 ──────────────────────────────────────────────────────────
  {
    date: "2026-03-30",
    type: "fix",
    summary: "Corrected field curvature direction labels and Petzval shift sign",
  },
  {
    date: "2026-03-30",
    type: "improvement",
    summary: "Standardized analysis terminology to parabasal/real-ray and fixed coma axis orientation",
  },
  {
    date: "2026-03-30",
    type: "lens",
    summary: "Added Nikon NIKKOR Z 14-24mm f/2.8 S and Canon RF 15-35mm f/2.8 L IS USM",
    links: [
      lensLink("nikon-z-14-24f28-s", "NIKKOR Z 14-24mm f/2.8 S"),
      lensLink("canon-rf-15-35-f28", "Canon RF 15-35mm f/2.8 L IS USM"),
    ],
  },
  // ── 2026-03-29 ──────────────────────────────────────────────────────────
  {
    date: "2026-03-29",
    type: "fix",
    summary: "Fixed article navigation so pages open at the top instead of preserving prior scroll",
  },
  {
    date: "2026-03-29",
    type: "article",
    summary: "Added Heliar History article",
  },
  {
    date: "2026-03-29",
    type: "feature",
    summary: "Added zoom and pan controls for infinite-resolution diagram inspection",
  },
  // ── 2026-03-28 ──────────────────────────────────────────────────────────
  {
    date: "2026-03-28",
    type: "feature",
    summary: "Added chromatic field curvature chart with per-wavelength R/G/B focus traces",
  },
  {
    date: "2026-03-28",
    type: "feature",
    summary: "Added sagittal coma section with x-intercept fan chart to aberrations drawer",
  },
  {
    date: "2026-03-28",
    type: "fix",
    summary: "Fixed center-field curvature baseline to use real traced focus instead of nominal image plane",
  },
  {
    date: "2026-03-28",
    type: "feature",
    summary: "Added real sagittal ray analysis across aberration views",
  },
  {
    date: "2026-03-28",
    type: "feature",
    summary: "Added field curvature and astigmatic difference analysis",
  },

  // ── 2026-03-27 ──────────────────────────────────────────────────────────
  {
    date: "2026-03-27",
    type: "improvement",
    summary: "Strengthened SEO metadata, sitemap freshness, and social card data",
  },
  {
    date: "2026-03-27",
    type: "lens",
    summary: "Added Fujifilm as a maker — XF 80mm f/2.8 Macro OIS WR and XF 50mm f/1.0 R WR",
    links: [
      lensLink("fujifilm-xf80-f28-macro", "XF 80mm f/2.8 Macro OIS WR"),
      lensLink("fujifilm-xf50-f1", "XF 50mm f/1.0 R WR"),
    ],
  },
  {
    date: "2026-03-27",
    type: "lens",
    summary: "Added Canon RF 24-70mm f/2.8L IS and RF 70-200mm f/2.8 L IS zooms",
    links: [
      lensLink("canon-rf-24-70-f28", "RF 24-70mm f/2.8L IS"),
      lensLink("canon-rf-70-200-f28", "RF 70-200mm f/2.8 L IS"),
    ],
  },
  {
    date: "2026-03-27",
    type: "lens",
    summary: "Added Nikon AF-S Micro NIKKOR 105mm f/2.8G IF-ED",
    links: [lensLink("nikon-afs-105f28-vr-micro", "AF-S Micro NIKKOR 105mm f/2.8G IF-ED")],
  },
  {
    date: "2026-03-27",
    type: "feature",
    summary: "Added coma analysis with 2D point-cloud preview to aberrations drawer",
  },
  {
    date: "2026-03-27",
    type: "feature",
    summary: "Added meridional coma field footprint analysis to aberrations drawer",
  },
  {
    date: "2026-03-27",
    type: "feature",
    summary: "Separated distortion analysis into its own dedicated drawer tab",
  },
  {
    date: "2026-03-27",
    type: "feature",
    summary: "Added vignetting and relative illumination analysis tab",
  },
  {
    date: "2026-03-27",
    type: "feature",
    summary: "Added longitudinal spherical aberration profile chart",
  },
  {
    date: "2026-03-27",
    type: "feature",
    summary: "Introduced analysis drawer — slide-out panel for optical aberration analysis",
  },
  {
    date: "2026-03-27",
    type: "feature",
    summary: "Added spherical aberration computation engine with real-ray tracing",
  },
  {
    date: "2026-03-27",
    type: "improvement",
    summary: "Made analysis drawer tab rail scrollable on narrow screens",
  },
  {
    date: "2026-03-27",
    type: "improvement",
    summary: "Relocated analysis button to lower-left corner of lens diagram",
  },
  {
    date: "2026-03-27",
    type: "fix",
    summary: "Fixed optical surface overlap in Canon RF lenses",
  },
  {
    date: "2026-03-27",
    type: "fix",
    summary: "Fixed geometry validation errors in Nikon AF-S 105mm f/2.8G",
    links: [lensLink("nikon-afs-105f28-vr-micro", "Nikon AF-S 105mm f/2.8G")],
  },
  {
    date: "2026-03-27",
    type: "fix",
    summary: "Stabilized spherical aberration real-ray chart rendering",
  },
  {
    date: "2026-03-27",
    type: "fix",
    summary: "Fixed distortion calculation to correctly project chief ray to image plane",
  },
  {
    date: "2026-03-27",
    type: "fix",
    summary: "Corrected semi-diameter values across the Nikon Z lens lineup",
  },

  // ── 2026-03-26 ──────────────────────────────────────────────────────────
  {
    date: "2026-03-26",
    type: "feature",
    summary: "Added support for variable-aperture zoom lenses (e.g. f/4.5–5.6)",
  },
  {
    date: "2026-03-26",
    type: "lens",
    summary:
      "Added Canon RF 100mm Macro, RF 135mm f/1.8 L, Nikon Z 100-400mm, Ricoh GR IIIx 26.1mm, and Voigtländer Ultron 28mm f/2",
    links: [
      lensLink("canon-rf100f28-macro", "Canon RF 100mm Macro"),
      lensLink("canon-rf-135f18", "RF 135mm f/1.8 L"),
      lensLink("nikkor-z-100-400-f4556", "Nikon Z 100-400mm"),
      lensLink("ricoh-gr3x-26f28", "Ricoh GR IIIx 26.1mm"),
      lensLink("ultron-28f2-asph", "Voigtländer Ultron 28mm f/2"),
    ],
  },
  {
    date: "2026-03-26",
    type: "fix",
    summary: "Fixed glass interpenetration in Nikon Z lenses at close-focus distances",
  },
];
