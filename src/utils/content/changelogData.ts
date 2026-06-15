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
}

export const CHANGELOG: ChangelogEntry[] = [
  // ── 2026-06-15 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-15",
    type: "improvement",
    summary: "Normalized lens display names across the catalog",
  },
  {
    date: "2026-06-15",
    type: "lens",
    summary: "Added Fujifilm XF 23mm F1.4 LM WR, F2, and F2.8 lenses",
  },
  // ── 2026-06-14 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-14",
    type: "lens",
    summary: "Added Fujifilm XF 16-55mm II, XF 33mm F1.4, and XF 56mm F1.2 R WR",
  },
  // ── 2026-06-13 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-13",
    type: "lens",
    summary: "Added Sigma 10-18mm F2.8 DC DN, 16mm F1.4 DC DN, and DP1x 16.6mm",
  },
  // ── 2026-06-12 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-12",
    type: "lens",
    summary: "Added three Sigma lenses: 35mm F1.4, 45mm F2.8, and 50mm F1.4",
  },
  // ── 2026-06-11 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-11",
    type: "lens",
    summary: "Added Sigma 17-40mm, 23mm, and 30mm lenses",
  },
  // ── 2026-06-10 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-10",
    type: "lens",
    summary: "Added Canon EF 20-35mm, EF 24-70mm, and Serenar 100mm lenses",
  },
  // ── 2026-06-09 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-09",
    type: "lens",
    summary: "Added six Pentax Limited and D FA prime lenses",
  },
  {
    date: "2026-06-09",
    type: "lens",
    summary: "Added Minolta AF 28mm f/2, 28-75mm f/2.8, and Reflex 500mm f/8",
  },
  {
    date: "2026-06-09",
    type: "fix",
    summary: "Fixed axial image-plane markers for zoomed and focused ray tracing",
  },
  // ── 2026-06-08 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-08",
    type: "improvement",
    summary: "Improved chromatic overlay labels for LoCA and off-axis fan diagnostics",
  },
  {
    date: "2026-06-08",
    type: "improvement",
    summary: "Improved glass matching and chromatic quality indicators",
  },
  {
    date: "2026-06-08",
    type: "lens",
    summary: "Added Panasonic Nocticron 42.5mm, Summilux 12mm, and G 14mm lenses",
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
    summary: "Added three Olympus lenses",
  },
  // ── 2026-06-06 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-06",
    type: "lens",
    summary: "Added three Sigma mirrorless lenses: 24mm F1.4, 28-45mm F1.8, and 60mm F2.8",
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
    summary:
      "Added three Olympus Micro Four Thirds lenses: M.Zuiko Digital 12mm f/2.0, M.Zuiko Digital 17mm f/2.8, and M.Zuiko Digital 14-42mm f/3.5-5.6 II R",
  },
  {
    date: "2026-06-05",
    type: "fix",
    summary: "Fixed a bug in focusing Nikon Reflex-Nikkor 500mm f/8 (New)",
  },
  // ── 2026-06-04 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-04",
    type: "lens",
    summary:
      "Added three Nikon reflex lenses: Reflex-Nikkor·C 500mm f/8, Reflex-Nikkor 500mm f/8 New, and Reflex-Nikkor 1000mm f/11",
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
  },
  // ── 2026-06-03 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-03",
    type: "lens",
    summary: "Added three Fujifilm GFX medium-format zoom lenses",
  },
  // ── 2026-06-02 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-02",
    type: "lens",
    summary: "Added three Nikon AI F-mount lenses",
  },
  // ── 2026-06-01 ──────────────────────────────────────────────────────────
  {
    date: "2026-06-01",
    type: "lens",
    summary: "Added three Nikon AF-S F-mount zoom lenses",
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
    summary: "Added three new Sigma lenses",
  },
  // ── 2026-05-30 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-30",
    type: "feature",
    summary: "Added chromatic analysis charts for LoCA, lateral color/TCA, and field-focus color",
  },
  {
    date: "2026-05-30",
    type: "fix",
    summary: "Fixed LoCA and off-axis fan-spread displays to use matching charts with violet-channel traces",
  },
  {
    date: "2026-05-30",
    type: "lens",
    summary: "Added three Sigma macro lenses",
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
    summary: "Added three Sony FE zooms: 28-70mm OSS and 70-200mm F2.8 GM/F4 G",
  },
  // ── 2026-05-28 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-28",
    type: "lens",
    summary: "Added three Sony E-mount APS-C lenses: 18-55mm, 30mm Macro, and 35mm OSS",
  },
  // ── 2026-05-27 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-27",
    type: "lens",
    summary: "Added three Leica R-mount lenses",
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
    summary: "Added three Minolta AF lenses, a 35-70mm f/4 zoom and APO telephotos",
  },
  // ── 2026-05-25 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-25",
    type: "lens",
    summary: "Added three Nikon APS-C format lenses for F mount",
  },
  // ── 2026-05-24 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-24",
    type: "lens",
    summary: "Added three Canon APS-C format lenses for EF mount",
  },
  // ── 2026-05-23 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-23",
    type: "lens",
    summary: "Added three Pentax medium-format lenses for 645 and 67 systems",
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
    summary: "Added eight Sony and Zeiss lenses, from FE primes to Distagons, Touit Macro, and Biogon",
  },
  // ── 2026-05-21 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-21",
    type: "lens",
    summary: "Added the Carl Zeiss Hologon 15 mm f/8 with its stop modeled inside the central element",
  },
  {
    date: "2026-05-21",
    type: "lens",
    summary: "Added six Canon EF L-series lenses from fisheye zoom to macro and telephoto",
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
    summary: "Nikon Fisheye-Nikkor 6mm lenses now show their full 110° patent-declared half-field",
  },
  {
    date: "2026-05-20",
    type: "improvement",
    summary: "Distortion field grid now fills in for fisheye lenses where it previously left corners blank",
  },
  {
    date: "2026-05-20",
    type: "lens",
    summary: "Added 12 Nikon lenses, from 1 NIKKOR primes to fisheyes and FX classics",
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
    summary: "Added six Fujifilm GF medium-format lenses",
  },
  // ── 2026-05-18 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-18",
    type: "lens",
    summary: "Added six new lenses for fixed-lens Fujifilm Cameras",
  },
  // ── 2026-05-17 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-17",
    type: "lens",
    summary: "Added six new Olympus lenses",
  },
  // ── 2026-05-16 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-16",
    type: "lens",
    summary: "Added three Sony GM zooms and three Schneider large-format lenses",
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
    summary: "Added six Laowa lenses: 12mm, 15mm, 15mm Macro, 24mm Probe, 58mm Macro APO, and 65mm Macro APO",
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
    summary: "Added six Canon APS-C lenses across EF-M and EF-S systems",
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
      "Adds six new Nikon lenses: Z DX 16-50mm f/3.5-6.3 VR, Z DX 18-14mm f/3.5-6.3 VR, Z DX 50-140mm f/3.5-6.3 VR, AF-P DX 10-20mm f/5.6-6.3G VR, AF-P DX 70-300mm f/4.5-6.3G ED VR, and AF-P 70-300mm f/4.5-5.6E ED VR",
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
    summary: "Added six new lenses: three Hasselblad lenses, two Olympus M. Zuiko lenses, and one Leica SL lens",
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
    summary: "Added six new lenses: three Panasonic Leica lenses, two Olympus M. Zuiko lenses, and one Leica TL lens",
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
      "Added six new Hasselblad lenses: XCD 65mm f/2.8, XCD 90mm f/2.5, XCD 120mm f/3.2, HC 80mm f/2.8, HC 120mm f/4.0, and HC 150mm f/3.2",
  },
  // ── 2026-05-08 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-08",
    type: "lens",
    summary:
      "Added three Fujifilm lenses: GF110mm f/2 R, GF80mm f/1.7 R, and GF120mm f/4 R LM OIS WR Macro; and three Sony lenses: FE 20-70mm f/4.0G, Planar FE 50mm f/1.4, and Planar T* 50mm f/1.4 ZA",
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
    summary: "Added Panasonic S 20-60mm f/3.5-5.6 and two Pentax 110 lenses: 24mm f/2.8 and 50mm f/2.8",
  },
  // ── 2026-05-06 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-06",
    type: "fix",
    summary: "Fixed soft-focus control in aberration, bokeh, pupil, and LoCA views",
  },
  {
    date: "2026-05-06",
    type: "lens",
    summary: "Added three Pentax lenses: DA 16-50mm f/2.8, DA 50-135mm f/2.8, and F 85mm f/2.8 Soft",
  },
  {
    date: "2026-05-06",
    type: "lens",
    summary:
      "Added Sigma 40mm f/1.4 DG DN Art, Voigtlander Macro Apo-Lanthar 125mm f/2.5, and Apo-Lanthar 180mm f/4 SL Close Focus",
  },
  // ── 2026-05-05 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-05",
    type: "fix",
    summary: "Fixed LoCA inset values when chromatic color channels are toggled",
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
  },
  {
    date: "2026-05-04",
    type: "lens",
    summary:
      "Added Sigma 50mm f/1.4 DG DN Art, Sigma 30mm f/2.8 for DP2 Merrill, and Vivitar Series 1 70-210mm f/2.8-4",
  },
  // ── 2026-05-03 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-03",
    type: "lens",
    summary: "Added Sony E 24mm f/1.8 ZA, FE 35mm f/1.8 ZA, and FE 55mm f/1.8 ZA",
  },
  // ── 2026-05-02 ──────────────────────────────────────────────────────────
  {
    date: "2026-05-02",
    type: "lens",
    summary: "Added Sony FE 85mm f/1.4 GM II and FE 135mm f/1.8 GM",
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
    summary:
      "Added Carl Zeiss Jena Tessar 50mm f/3.5, Carl Zeiss Oberkochen Tessar 50mm f/2.8, and Sony FE 90mm f/2.8 Macro G OSS",
  },
  // ── 2026-04-28 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-28",
    type: "improvement",
    summary:
      "Improved chromatic ray tracing with ray-density controls, off-axis color fans, and LoCA readouts for clipped marginal rays",
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
      "Added Fujifilm Fujinon XF 18mm f/2 R and XF 23mm f/1.4 R and Carl Zeiss Olympa-Sonnar 180mm f/2.8 and Pro-Tessar 35mm f/3.2",
  },
  // ── 2026-04-27 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-27",
    type: "lens",
    summary:
      "Added three Olympus OM lenses: Zuiko Auto-W 21mm f/2, Auto-Macro 50mm f/2, and Auto-Macro 90mm f/2 and Nikon Nikkor-S Auto 50mm f/1.4",
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
  },
  {
    date: "2026-04-26",
    type: "lens",
    summary: "Added Olympus Zuiko Auto-T 85mm f/2 with floating rear-group focusing",
  },
  {
    date: "2026-04-26",
    type: "feature",
    summary:
      "Added shareable URLs for selected elements, overlays (glass map, chromatic, Petzval), bokeh preview, and analysis tabs",
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
    summary: "Added three Olympus fast normals: Zuiko 50mm f/1.2, 50mm f/1.4, and 55mm f/1.2",
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
  },
  {
    date: "2026-04-23",
    type: "lens",
    summary: "Added Canon RF 24-105mm f/2.8 L, Zeiss Biogon 21mm, and Distagon 35mm",
  },
  // ── 2026-04-22 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-22",
    type: "lens",
    summary: "Added Canon RF f/1.2 primes and Voigtländer Nokton 35mm f/1.2",
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
  },
  {
    date: "2026-04-21",
    type: "lens",
    summary: "Added Canon RF 24-105mm f/4 L, Nikon Z 40mm f/2, and two Ricoh GR lenses",
  },
  // ── 2026-04-20 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-20",
    type: "lens",
    summary: "Added Canon EF 50mm f/1.0L USM and Canon RF 85mm f/2 Macro IS STM",
  },
  // ── 2026-04-19 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-19",
    type: "lens",
    summary: "Added Fujifilm XF 35mm f/1.4 R and XF 60mm f/2.4 R Macro",
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
  },
  // ── 2026-04-15 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-15",
    type: "fix",
    summary: "Fixed semi-diameter shaping and rear-group clearance in the Canon RF 28-70mm F2 L USM",
  },
  {
    date: "2026-04-15",
    type: "lens",
    summary:
      "Added Canon RF 28-70mm F2 L USM, Canon RF 28-70mm f/2.8 IS STM, Canon RF 24-240mm f/4-6.3 IS USM, and Canon RF 24-70mm F2.8 L IS USM",
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
  },
  // ── 2026-04-13 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-13",
    type: "lens",
    summary: "Enabled Nikon AF-S 14-24mm f/2.8G ED and AF-S 16-35mm f/4G ED VR with accurate front group proportions",
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
  },
  {
    date: "2026-04-13",
    type: "lens",
    summary: "Added two Nikon AF-S zooms: 120-300mm f/2.8E FL ED SR VR and 200-500mm f/5.6E ED VR",
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
    summary:
      "Added four new lenses: Canon Serenar 28mm f/3.5, Canon Serenar 35mm f/3.2, Canon Serenar 50mm f/1.8, and Canon Serenar 85mm f/1.5",
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
    summary:
      "Added three lenses: Nikon Nikkor-N Auto 28mm f/2, Voigtländer Nokton 50mm f/1.2 (X-mount), and Nikon 28mm f/2.8 (28Ti)",
  },
  // ── 2026-04-09 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-09",
    type: "lens",
    summary:
      "Added five Leica lenses: Summilux 28mm f/1.7 ASPH (Q-series), APO-Summicron 43mm f/2 ASPH (Q3 43), ELCAN 50mm f/2, APO-Summicron-M 35mm f/2 ASPH, and Summicron-M 50mm f/2 V5",
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
  },
  {
    date: "2026-04-08",
    type: "lens",
    summary: "Added Vivitar Series 1 35–85mm f/2.8 VMC, Fujifilm XF 90mm f/2 R LM WR, and Fujinon XF 56mm F1.2 R",
  },
  // ── 2026-04-07 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-07",
    type: "lens",
    summary:
      "Added Canon FD 35mm f/2 S.S.C., Nikon AI Nikkor 135mm f/2, Nikon AI Nikkor 135mm f/2.8, and Vivitar Series 1 200mm f/3.0 — four Sonnar-based and retrofocus designs",
  },
  // ── 2026-04-01 ──────────────────────────────────────────────────────────
  {
    date: "2026-04-01",
    type: "lens",
    summary: "Added CANON new FD 50mm f/1.2 and VOIGTLANDER 50mm f/1.2 for X-Mount",
  },
  // ── 2026-03-30 ──────────────────────────────────────────────────────────
  {
    date: "2026-03-31",
    type: "lens",
    summary: "Added Nikon NIKKOR Z 35mm f/1.8 S and NIKKOR-N 5cm f/1.1",
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
  },
  {
    date: "2026-03-27",
    type: "lens",
    summary: "Added Canon standard and telephoto zoom lenses",
  },
  {
    date: "2026-03-27",
    type: "lens",
    summary: "Added Nikon AF-S Micro NIKKOR 105mm f/2.8G IF-ED",
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
    type: "fix",
    summary: "Fixed glass interpenetration in Nikon Z lenses at close-focus distances",
  },
];
