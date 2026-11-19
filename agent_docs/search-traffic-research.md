# Search Traffic: Research Direction

What to investigate next, drawn from the Bing Webmaster and Google Search Console exports of 2026-11-17/18. Nothing
here is committed work: each item needs the research named before it becomes a queue row or a
`FEATURE_ADDITION_PLAN.md` entry. Quick fixes are in `agent_docs/search-traffic-actions.md`; article plans are in
`agent_docs/article-preplanning.md`. Delete an item when it is promoted or rejected, and record a rejection in
`agent_docs/decisions.md`.

## Principle

Traffic arrives where no one else publishes a diagram. Pages for current Canon RF, Nikon Z and Sony lenses collect
impressions and no clicks; pages for discontinued, medium-format, large-format and specialist lenses collect clicks at
10–60 %. Prefer the lens with no competing diagram over the lens with the most owners.

## Lens sourcing

Each row needs a patent or maker prescription search before it enters the catalog. "In catalog" was checked by
filename only on 2026-11-17, so confirm before starting.

| Priority | Family                                             | Evidence                                                                    | In catalog now             |
| -------- | -------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------- |
| 1        | Nikkor-W / Nikkor-SW large format                  | "apo symmar 100mm vs nikkor-w 100mm" (2 clicks), "nikkor sw 120" comparison | none found                 |
| 1        | Fujinon W / A / C / SW large format                | Fujinon SW 65 and Fujinar 210 pages already draw queries                    | none found by those names  |
| 1        | Mamiya RB67 Sekor C and K/L                        | RB67 mount page 15 impressions; "rb67 lens lineups", "rb67 portrait lens"   | none found                 |
| 1        | Schneider Symmar, Super-Angulon, Xenon variants    | Apo-Symmar 100 at 19 % CTR; nine Symmar and Super-Angulon queries           | 3 Symmar                   |
| 2        | Mamiya 645 including Sekor C 80mm f/4 Macro        | 645 mount page 13 impressions; Sekor AF 55mm at 62 % CTR                    | partial                    |
| 2        | Pentax 67                                          | SMC 67 100mm f/4 Macro: 18 impressions across nine query spellings          | 1                          |
| 2        | Hasselblad HC, starting with HC 210mm f/4          | "hasselblad hc 210/4" twice; HC Macro 120 has 11 impressions                | no HC 210                  |
| 2        | Premium compacts: Olympus mju II, Fuji Klasse, Contax T, Fuji TX 45mm | Ricoh GR and Hexar pages convert at 40–67 %               | none found                 |
| 2        | Zeiss Biogon 21mm f/4.5 and Contarex Distagon 18mm | Pre-war Biogon 35 at 44 % CTR; Contarex mount page at position 2.3          | none found                 |
| 3        | Konica AR, Yashica ML, Minolta MD and AF           | Eight Konica pages with impressions; Minolta AF 35mm f/1.4 and MD 50mm f/1.7 asked for | several, gaps remain |
| 3        | Schacht, Enna, Kinoptik, SOM Berthiot, Meyer       | Travenar 135 at 43 %, Lithagon 24 at 40 %, Kinoptik maker page at 40 %      | no Berthiot or Primoplan   |
| 3        | Long telephotos and mirror lenses                  | 360-1200mm at 31 %, Telyt-S 800 at 43 %; "olympus reflex 500mm cross section" | no Zuiko Reflex 500      |

Single asks with no family behind them: Canon FL 85-300mm f/5, M.Zuiko 20mm f/1.4 Pro, Rodenstock Rogonar-S 50mm
f/2.8 (check the existing Rogonar entry), Leicina Vario 7.5-35mm.

## Mount diagrams

Mount pages hold the best click rates on the site. Queries name four mounts with no spec: Nikonos, D-mount,
Praktina, ARRI LPL. Research task for each: find a dimensioned source good enough for `src/mounts/MOUNT_SVG_SPEC.md`.

Content questions to answer per mount page, each seen in queries:

- Which lenses were made for it ("rb67 lens lineups", "list of voigtländer ltm m39 mount lenses", "which lenses fit an
  agfa ambi silette"). The catalog only lists lenses with a prescription; decide whether an unlinked reference list of
  the full lineup is worth maintaining.
- How to tell variants apart ("contax yashica mm how to recognize", "l39 vs m39 lens mount", "agfa lenses: difference
  between silette and flex mounts").
- What it adapts to ("can lenses for agfa ambi silette be used on colorflex", "mamiya645 lens α7r4").

## Feature investigations

Ordered by evidence. Each needs a feasibility read of the code before it is written up as a feature.

1. **Specification block on lens pages.** Queries ask for elements and groups, weight, close-focus distance, blade
   count, filter size, image circle, angle of view and designer. Find out which of these are already in catalog data,
   which the prescription can compute, and which need a sourced field.
2. **Static diagram image per lens.** "Cross section", "lens diagram" and "optical diagram" are image searches. Test
   whether the prerendered inline SVG is indexed as an image at all, then weigh an exported SVG or PNG with alt text
   and an image sitemap.
3. **Prerendered MTF, distortion and vignetting charts.** Queries: "super symmar hm mtf", "apo sironar w mtf",
   "rodenstock rodagon 80 f 4 distortion profile", "pro-tessar 35mm vignetting chart". These analyses run from slider
   state, so the question is whether one default-state chart can be prerendered without breaking that rule, and
   whether `MTF_ACCURACY_PLAN.md` allows publishing MTF as crawlable content yet.
4. **Comparison landing pages.** Queries compare siblings and generations: Canon EF 600mm f/4 against New FD 600mm
   f/4.5, Zoom-Nikkor 80-200mm f/4 AI-S against f/4.5 AI, Ricoh GR against GR II. Check what the compare route
   prerenders today and how pairs would be chosen without creating thousands of thin pages.
5. **Patent-number landing.** Raw numbers are searched and convert: "2021-076829", "us2824495a", "de2921411a1",
   "3862794". Check whether the patents index exposes each number as crawlable text linked to its lens.
6. **Prescription export.** "yashica ml 300mm f5.6 zemax file" produced a click. Weigh a per-lens download against
   the lens builder's existing export.
7. **Maker facts.** "who made yashica lenses" (2 clicks), "what japanese lens manufacturer made miranda lenses",
   "laowa country of origin", "how long has sigma been producing lenses". Two or three sourced facts per maker page
   would answer these.
8. **Designer pages.** Author pages rank at positions 1–3 for designer names (Haruo Sato, Masato Katayose, Hisashi
   Uno). "lenses that haruo sato designed" got a click. Thin author pages are `noindex` by standing decision; look at
   whether a lens count threshold already promotes the useful ones.

## Open questions

- **Why Google ranks so far below Bing.** Needs the exclusion exports and URL Inspection details still listed as
  missing in `agent_docs/seo-optimization-plan.md`. Until then, do not attribute the gap to content.
- **Export window.** Neither export states its date range. Record it next time so periods can be compared.
- **Impressions on the lens index.** Google shows 612 impressions and 1 click for the lens index. Pull the query list
  for that page alone to see what it is being shown for.
- **Maker-story index pages.** The Nikon Thousand and One Nights index has 41 impressions and no clicks; searchers
  want Nikon's own page. Check whether the per-tale links to catalog lenses earn anything before adding more indexes.

## Reading the next export

Compare on three numbers per page type (lens, article, mount, maker, format): impressions, click rate and median
position. Ignore queries that are plainly unrelated to optics; several dozen appear at one or two impressions each.
