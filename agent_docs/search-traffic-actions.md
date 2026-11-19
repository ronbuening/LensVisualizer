# Search Traffic: Immediate Actions

Open work drawn from the Bing Webmaster and Google Search Console exports of 2026-11-17/18 (the exports do not state
their date range). Delete each row when it ships. Longer-horizon work is in `agent_docs/search-traffic-research.md`;
new articles are in `agent_docs/article-preplanning.md`. Run `npm run seo:audit` after any change here
(`agent_docs/seo-optimization-plan.md`).

## What the exports say

- Bing supplies almost all non-brand traffic. Typical Bing position is 3–7; Google ranks the same articles at 20–90
  and 26 of its 35 clicks are the homepage on brand queries.
- Articles collect the most impressions and the fewest clicks: telecentricity 251 impressions / 6 clicks,
  aperture-stop-in-practice 118 / 1, lens-dimensions-primer 74 / 1, achromat-apochromat 67 / 0 on Bing and 126 / 0 on
  Google.
- Mount pages and niche lens pages convert best: Agfa Ambi Silette 43 %, Mamiya Sekor AF 55mm 62 %, pre-war Biogon
  35mm 44 %, Zoom-Nikkor 360-1200mm 31 %, Contax/Yashica 8 %, Leica LTM 4 %.

## Checked on the live site, no action needed

Checked 2026-11-17. Do not reopen these without new evidence.

- Non-trailing-slash URLs return 308 to the slash form.
- Lens URLs with `?from=lenses&returnTo=/lenses` return 200 with a canonical tag pointing at the clean URL.
- `https://www.` returns 301 to the apex host. The accented Angénieux maker URL returns 301 to `/makers/angenieux/`.
- The homepage and lens-index titles already say "Interactive Lens Cross-Section Visualizer" and "Lens Patent
  Cross-Section Library". Their low click rate is a ranking and query-mix matter, not a wording gap.

## Actions

### 1. Lens page snippet

Every lens page shares this pattern, so one change reaches the whole catalog.

- The title prints the catalog name in capitals ("MAMIYA SEKOR AF 55mm f/2.8 — Optical Cross-Section & Ray Tracing").
  Print it in the same case the page heading uses.
- The description prints raw design values ("7 ELEMENTS / 6 GROUPS, f = 54.99997 mm (DESIGN)"). Round the focal
  length to one decimal and use sentence case.
- Searchers say "diagram", "optical design", "elements groups" and "patent" far more often than "ray tracing".
  Lead the description with elements and groups, the patent number and the word "diagram".

### 2. Answer-first openings on existing articles

Searchers ask questions; the articles open with context. Add a two-to-three sentence plain answer directly under the
title and make at least one heading match the question wording. No new article is needed for these.

| Article slug                | Question to answer in the opening                                    | Bing impressions |
| --------------------------- | -------------------------------------------------------------------- | ---------------- |
| telecentricity              | What does telecentric mean?                                          | 251              |
| aperture-stop-in-practice   | Is the aperture stop the same thing as the entrance pupil?           | 118              |
| lens-dimensions-primer      | What are back focal distance, flange distance and total track length | 74               |
| achromat-apochromat         | What is the difference between an achromat and an apochromat?        | 67               |
| entrance-pupil              | What is the entrance pupil of a lens, and where is it?               | 49               |
| corner-illumination         | Why are the corners of a photo darker than the centre?               | 14               |
| working-f-number            | How does the f-number change at macro distances?                     | 9                |

Article titles end in "— Surface & Stop" while every other page type ends in "| Surface & Stop". Use one form.

### 3. Mount page title and first paragraph

Mount titles read "Leica LTM / M39 Lens Diagrams". Queries ask for the mount itself: "olympus om mount technical
drawings", "flange of hasselblad xcd mount", "leica m flange distance", "sigma sa mount", "mamiya rb67 lens mount".

- Put "mount" and the flange distance in the title and description.
- State flange distance and throat diameter in the first visible paragraph. Confirm first whether the page already
  prints them from the mount spec, and reuse that value.

### 4. Format page description

Queries: "4x5 actual exposed area of film in mm", "4x5 diagonal", "what is a normal lens on a 5x7 camera", "44x33
sensor compared to fullframe", "mamiya rb 67 frame size". Put frame dimensions in millimetres, the diagonal and the
normal focal length in the description and the first paragraph.

### 5. Small crawl items

- `/search/` is in the sitemap and indexable, and Bing shows it (4 impressions). Decide whether it should carry
  `noindex,follow` and leave the sitemap. The standing rule against mass `noindex` in
  `agent_docs/seo-optimization-plan.md` does not cover a single utility page, but the decision is still Ron's.
- Both engines list `?from=lenses&returnTo=/lenses` variants. The canonical is correct, so this costs crawl budget
  only. Find where crawlable links emit those parameters and decide whether the prerendered `href` can omit them.
- `http://www.surfaceandstop.com/` (plain HTTP on the www host) returns 404. Google holds it with 3 impressions. Fix
  in Cloudflare, not in the repository.

### 6. Tick the supplied inputs

The Performance exports are now in hand. The exclusion exports, URL Inspection details, Core Web Vitals and PageSpeed
reports listed in `agent_docs/seo-optimization-plan.md` are still missing; the Google ranking gap cannot be diagnosed
without them.
