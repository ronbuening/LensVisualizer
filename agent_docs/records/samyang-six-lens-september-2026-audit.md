# Samyang six-lens audit — 2026-09-09

## Scope and root cause

Integrated the six supplied AF 14mm f/2.8 FE, AF 24mm f/1.8 FE, AF 24mm f/2.8 FE,
AF 35mm f/2.8 FE, AF 50mm f/1.4 FE, and XP 35mm f/1.2 data/analysis pairs.
The organizer placed them under `src/lens-data/samyang/`. The supplied README catalog-count update belongs to this batch.

The initial suite had 2 failures out of 2,776 tests: Korean-only inventor names violated the shared
romanized-metadata contract, and KR publications exposed the missing South Korea jurisdiction label.
Canonicalized inventor spelling/order and assignee metadata, formatted the XP patent identifier, and normalized
new decimal-aperture keys. Product display names were already correct and were retained, including the original
AF 50mm generation and the XP lens's lack of an FE designation. Final lint also caught two overprecise literals;
shortened them to the identical IEEE-754 runtime values without changing optics.

## Patent geometry

Inspected the exact six local PDFs at 600 dpi and rendered the final shapes using the project's SVG engine.
Per-lens `.audit.md` files record pages, optical-rim measurements, before/after values, and rejected trials.
Changed AF 14mm surfaces 21A–25, AF 24mm f/2.8 surfaces 14–15, and XP 35mm surfaces 13–15.
Retained stops and source prescription/focus values. The other three lenses needed no defensible SD change.

Gap checks rejected larger AF 24mm L21 and AF 50mm L4 candidates. Exact-ray comparisons rejected smaller XP
rear-element radii. The retained changes add no clipping over the sampled published/intermediate focus states
and on-axis/default off-axis fans. Existing full-edge clipping and the XP rear asphere's turnover limitation
are documented, not represented as repaired. All six final infinity SVGs have zero render trimming.

## Dispersion

Added CDGM H-LaF7 from https://www.cdgmgd.com/webapp/pdf/H-LaF7.pdf, with independent published C/d/F/g
regression anchors. Assigned seven additional compatible existing curves: P-LASF47, S-BAL35, J-BK7A,
S-TIM35, K-VC80(M), E-FD8, and L-LAH85V. Production supplier identities remain unspecified, and all patent
indices/Abbe values remain authoritative. No spectral indices or APD tags were invented.

Batch strict coverage rises from 42/60 to 50/60. Global strict/trusted coverage is 7419/7968 and 7434/7968,
with zero catalog-coordinate mismatches. The AF 35mm's seven mixed-coordinate source pairs, AF 50mm L3/L7,
and AF 14mm L7 remain explicitly unresolved. Catalog count: 559 entries.

## Verification and delivery

- Initial tests: 296 files passed, 2 failed; 2,774 tests passed, 2 failed.
- Final tests: all 298 files / 2,777 tests passed.
- Typecheck, format check, lint, and glass-report generation passed.
- All six `audit:surface` and `audit:image-circle` checks passed.
- Build passed: 1,276 prerendered pages; sitemap and RSS feeds generated.
- Retained one new lens changelog entry dated `2026-09-09`, checked against UTC time
  (`2026-09-09T13:28:23Z`) before authoring.
- Temporary scripts/renders stayed in `/tmp`; patent PDFs remain ignored and are not committed.
- Visual verification used the actual SVG shape engine offline, not a live browser session.


## Live-site follow-up — 2026-09-09

Revisited all six routes in the local Vite site through the in-app browser. Compared rendered optical rims
against the same exact 600 dpi patent figures (AF 14 Fig. 1; AF 24/1.8 Fig. 1; AF 24/2.8 Fig. 1;
AF 35 Fig. 7; AF 50 Fig. 1; XP Fig. 5). No further SD change was justified: the remaining small
shape differences are within figure precision or are the previously documented ray/gap constraints.
Stops, asphere markers, cemented spans, element types, Abbe labels, and product display names were reviewed.

Verified infinity-to-near slider direction on every lens. AF 14, AF 35, and AF 50 focus imageward;
both AF 24 lenses focus objectward; XP G23/G33 focus objectward with G33 traveling farther.
All six are primes and have no optical zoom schedule. XP's motion chart correctly orders source start/end
states, but its retained image-reference normalization adds a common −0.043978 mm shift. Its focus
text now distinguishes that shift from mechanical motion and reports the relative 5.795765/6.962361 mm
travel. No source spacing or reconstruction was changed.

Changed AF 35 functional-group labels to G14/G24/G34 and XP labels to G13/G23/G33 to match their
selected patent embodiments. XP cemented pairs now use C1/C2 so that they do not duplicate its D1/D2 air-gap
labels. AF 50's visible description states the reconstructed status in readable prose.

Inspected the manufacturer's actual color construction drawings in the browser:

- AF 14: <https://www.lksamyang.com/upload/editor/1586076857> — ED at elements 4/14.
- AF 24/1.8: <https://www.lksamyang.com/upload/editor/1630727300> — ED at elements 5/10.
- XP: <https://www.lksamyang.com/upload/editor/1568170384> — ED at element 2, resolving the earlier ambiguity.

Added five inferred ED/APD display tags, with provenance notes. Manufacturer HR positions already receive
the generic high-index color from their patent indices. These tags are product-correlation inferences;
they do not assert patent-measured anomalous partial dispersion or a production supplier. No spectral
values or dispersion coefficients were invented. Re-scanning the full current catalog found no additional
compatible curves for AF 14 L7 or AF 50 L3/L7. AF 35's mixed source coordinates still preclude a defensible
catalog assignment, even where a nearby d-line pair passes the loose coordinate guard. Batch coverage
remains 50/60; no new catalog type is supported by the additional evidence.

The existing changelog entry is unchanged, as requested. No temporary per-lens tests or patent files are staged.


Final follow-up verification: all 298 test files / 2,777 tests passed; typecheck, formatting, lint,
and the 1,276-route production build passed. All six surface and image-circle audits passed. The live
inspector displayed the new inferred provenance and compatible Sellmeier source, and final browser
renders showed the corrected colors/group labels. Temporary source-state movement calculations confirmed
monotonic travel at every published keyframe (including AF 14's 0.000001 mm printed-rounding residual).
