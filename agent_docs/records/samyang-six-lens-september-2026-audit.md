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
