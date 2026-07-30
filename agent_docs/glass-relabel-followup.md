# Glass Relabel Follow-up Queue

A focused per-lens worklist for the remaining catalog mismatches surfaced by the dispersion cascade. Companion to:

- [catalog-mismatches.generated.md](generated/catalog-mismatches.generated.md) — the auto-generated raw mismatch list (regenerate with `npm test -- catalogMismatchScan`).
- [glass-relabel-candidates.generated.md](generated/glass-relabel-candidates.generated.md) — the auto-generated candidate report grouping mismatches by `(stored nd, stored vd)` and showing each group's catalog candidates within tolerance (regenerate with `npm test -- glassRelabelCandidatesScan`).
- [glass-relabel-by-lens.generated.md](generated/glass-relabel-by-lens.generated.md) — the auto-generated per-lens work queue that combines mismatch rows and candidate suggestions for patent-audit passes (regenerate with `npm test -- glassRelabelByLensScan`).
- [glass-ambiguities.generated.md](generated/glass-ambiguities.generated.md) — the auto-generated audit of annotations with multiple coordinate-compatible catalog rows, including the selected row and runtime tie-break explanation (regenerate with `npm test -- glassAmbiguityScan`).
- [unresolved-glass.generated.md](generated/unresolved-glass.generated.md) — the auto-generated unresolved-token report for glass strings that never resolve through `resolveGlass` (regenerate with `npm test -- unresolvedGlassScan`).
- [glass-catalog-buildout.md](glass-catalog-buildout.md) — Sellmeier sourcing playbook (where to find vendor data, the round-trip test, etc.).
- [proprietary-glass-backfill.md](proprietary-glass-backfill.md) — workflow for patent-sourced `nC`/`nF`/`ng` line indices on truly proprietary glasses.

Regenerate all glass reports together with `npm run generate:glass-reports`.

## How this queue is structured

The candidate scan splits mismatches into two buckets:

1. **Has at least one candidate within tolerance** — the (nd, vd) pair matches some catalog entry; relabel is mechanical.
2. **No candidate within tolerance** — the (nd, vd) pair doesn't match any catalog entry; needs patent verification or the glass is genuinely proprietary.

This file tracks the second bucket plus any cases from the first bucket that need authorial judgment (multiple candidates, or relabeling would change the lens-data file's narrative — e.g. the analysis.md companion file says "S-LAH79" and the candidate suggestion would invalidate that).

## Current Status (July 2026, current catalog)

- Catalog: **416 verified entries** in `src/optics/glassCatalogData.ts`.
- `catalog-mismatches.generated.md` and `glass-relabel-by-lens.generated.md` report **0** remaining
  dispersion-coordinate mismatches across **0** lens files.
- `sellmeier-coverage.generated.md` reports **488** lenses, **5360** non-air surfaces, **4626** strict catalog
  Sellmeier surfaces (**86.3%**), and **4639** trusted chromatic surfaces (**86.5%**).
- **213** lenses are fully covered by strict Sellmeier data and **218** are fully covered by trusted chromatic data.
- `unresolvedGlassScan` reports **445** non-explicit-unmatched annotations and **195** distinct unresolved glass-like
  tokens. The total includes honest proprietary and family-level annotations as well as actionable named tokens.
- The Phase 2/3 resolved tables below are historical audit trail. Use the generated reports above for the current queue before starting new relabel work; for patent-by-patent execution, start from [glass-relabel-by-lens.generated.md](generated/glass-relabel-by-lens.generated.md).

## Resolved Phase 51 — July 2026 source-backed legacy catalog tranche

SUMITA SK3 and CDGM H-ZBaF4 were transcribed from first-party coefficient sources, expanding the catalog from 414 to
416 entries. SK3 safely resolves the matching Rodenstock Grandagon-N 75mm and 90mm elements as catalog equivalents
while leaving the historical production supplier unspecified. The two rows add two strict Sellmeier surfaces and one
net trusted surface because the 75mm element already stored measured C/F/g line indices.

CDGM H-ZBaF4 was not forced onto Canon's nearby `1.66565 / 35.6` elements. Its official datasheet publishes code
`664355`, `PgF = 0.5895`, and `ΔPgF = +0.0042`; Canon RF 20mm G10 instead has patent `θgF = 0.5824` and
`ΔθgF ≈ -0.0026`. G10/G16 are now explicitly unmatched so the runtime retains the patent fallback. Canon RF 50mm
code `666356` was likewise reviewed and retained: its code, index, and patent-family `ΔθgF = -0.0018` all reject the
CDGM row. Strict coverage rose from 4624 to 4626 and trusted coverage from 4638 to 4639.

## Resolved Phase 50 — July 2026 exact catalog-equivalent recovery

Four patent-coordinate groups were rechecked against rendered local patent tables and newly available catalog rows.
Nikon AF-S 200-500mm E14 now uses discontinued HOYA NBFD10 for the exact `1.83400 / 37.34`, code `834373`
coordinate, completing the lens's strict and trusted coverage. Nikon Z DX 16-50mm L21 uses HOYA M-NBFD10 for its
exact `1.83441 / 37.28` variant. Laowa 24mm Probe L1/L25 use HOYA TAFD5F for `1.83481 / 42.72`, replacing an
unsupported CDGM H-ZLaF4A supplier claim, and Canon Serenar 28mm L3 uses HOYA E-F8 for its printed
`1.5955 / 39.2` coordinate instead of the unsupported Schott F7 attribution.

All four annotations describe catalog equivalents and leave the production supplier unspecified. The pass added four
net strict and trusted surfaces because Nikon Z DX L21's unbroken code already resolved through the duplicate-code
resolver. Strict coverage rose from 4620 to 4624 surfaces, trusted coverage from 4634 to 4638, and one additional lens
became fully covered in each measure.

## Resolved Phase 49 — July 2026 high-frequency code-family review

Six recurring coordinate families were audited against their local patent rows and the full coefficient-backed
catalog. Nikon `797454` (`1.79668 / 45.37–45.4`) now uses Hikari J-LASF017 as a catalog equivalent across six
elements in five files. Canon/Olympus `773497` (`1.77250 / 49.66–49.7`) now uses Schott N-LAF34 across five
elements in three files, and three vintage Zeiss `672472` elements (`1.6716 / 47.2`) now use Schott N-BAF10. Each
annotation leaves the production supplier unidentified and stays inside the resolver's coordinate safety window.

Three other families remain explicitly unmatched after the same review: Olympus `504668` (`1.50378 / 66.8`),
Nikon `748523` (`1.74810 / 52.30`), and Sony `961323` (`1.96073 / 32.3`). Their nearest public coefficient rows
miss the d-line tolerance, so no supplier or partial-dispersion identity was inferred. The generated review sidecar
now marks every representative row complete.

This pass added fourteen strict and trusted surfaces without adding catalog entries. Strict coverage rose from 4606
to 4620 surfaces, trusted coverage from 4620 to 4634, and one additional lens became fully covered in each measure.

## Resolved Phase 48 — July 2026 unsafe named-token cleanup

The four `S-NPH7` annotations were audited independently. Canon RF 135mm L14 now uses TAFD40 for the exact 001255
coordinate; Canon RF 50mm G3 uses S-LAH99 for 001291, with its patent-derived PgF also favoring the OHARA row over
the same-coordinate HOYA alternative; and Panasonic 20-60mm L11 uses historical PBH21 for 923209. Sony 28-70mm
L71 remains explicitly unmatched at `2.00009 / 16.5` because no public coefficient row reproduces that extreme
coordinate.

The two plain `H-LAF3` annotations split the same way: Laowa 15mm L7b now uses exact-coordinate N-LASF44 (804465),
while Nikon 24-200mm L61 remains explicitly unmatched because the nearest public row does not reproduce both patent
coordinates closely enough. Canon RF 20mm G4 now uses exact-coordinate N-LAK33B (755523), and Laowa 58mm L4 uses
exact-coordinate TAC8 (729547), removing both unsupported `H-LAK53A` supplier claims. Every catalog relabel is
described as an equivalent with the production supplier left unidentified.

This pass added six strict and six trusted surfaces without adding catalog entries. Strict coverage rose from 4600
to 4606 surfaces, trusted coverage from 4614 to 4620, and one additional lens became fully covered in each measure.

## Resolved Phase 47 — July 2026 legacy-name recovery

Two Canon Serenar historical `SK18` elements now use coefficient-backed SUMITA K-SK18 as a catalog equivalent, and
the Carl Zeiss Tessar 50mm f/3.5 plus Olympus Zuiko Auto-Zoom 85-250mm f/5 each use coefficient-backed HOYA E-F8
for their exact `1.59551 / 39.2` F8-class coordinate. All four annotations leave the original supplier unspecified.
The Nikon Ultra-Micro 29.5mm F8-class row remains unresolved because it stores an e-line index; it now carries an
explicit `Unmatched` marker to prevent accidental d-line resolution.

## Resolved Phase 46 — July 2026 high-frequency code-family review

The five Minolta lenses using `670571` now resolve ten elements through coefficient-backed discontinued OHARA
S-LAL52. The vendor row reproduces the patent d-line index and differs by only `+0.258` in Abbe number; every
annotation calls it a catalog equivalent and leaves the production supplier unspecified.

The next two families were source-reviewed but deliberately not relabeled. Six Nikon files use `796409`
(`1.79631 / 40.90`), for which official OHARA, HOYA, Hikari, and Sumita coefficient catalogs contain no exact row.
Two Minolta files use proprietary `493836` fluorophosphate glass (`1.49310 / 83.55–83.58`); the 200mm patent provides
`theta_gF = 0.539`, already captured as `dPgF`, but neither patent establishes a public catalog identity. Their
generated-report sidecar rows now record the completed review so future passes do not reopen them without new sources.

## Resolved Phase 45 — July 2026 resolver hardening and sourced coverage

The runtime resolver now examines every explicit name, alias, and six-digit-code candidate in a glass annotation
instead of rejecting the annotation solely because its first token is incompatible. Duplicate-code rows are
disambiguated using vendor context and the authored nd/νd coordinates while the legacy single-result resolver remains
deterministic for existing callers.

Seven exact vendor rows were added from first-party coefficient sources, and OHARA S-BSL7's coefficients/code were
corrected. These changes added nine strict Sellmeier surfaces and seven trusted chromatic surfaces, completed three
additional strict lenses and two additional trusted lenses, and left the mismatch queue at zero. The separate
code-only queue now contains 307 missing-Sellmeier elements. The named-token queue is reported more precisely as 76
unresolved elements producing 78 token occurrences across 66 distinct tokens; the old 84 figure counted token
occurrences as though they were elements.

## Resolved Phase 44 — July 2026 complete mismatch audit

All 69 surfaces in the regenerated mismatch queue were rechecked against local patent prescriptions and available
vendor catalog data. No catalog rows were added: the 407-entry catalog already contained the defensible exact
matches. The audit increased strict Sellmeier coverage from 4535 to 4572 surfaces and trusted coverage from 4551 to
4588 surfaces while eliminating every unsafe catalog resolution.

| Disposition | Surfaces | Result |
|---|---:|---|
| Catalog-resolved relabel, including safe code aliases | 37 | Correct vendor/catalog rows now supply spectral coefficients; examples include S-LAH60, S-NSL36, S-TIM25, J-LAF016, S-LAH65, historical PBH21, and exact code aliases. |
| Code-first, unresolved | 5 | Patent coordinates are preserved without a production-supplier claim or a borrowed spectral model. |
| Explicit `Unmatched` | 27 | E-line-authored, coarsely rounded, vintage, proprietary, or otherwise non-unique rows now stay on the Abbe fallback rather than borrowing a false catalog spectrum. |
| **Total** | **69** | **0 remaining mismatch surfaces across 0 lenses.** |

Every changed lens has a synchronized `*.analysis.md` sidecar and dated `*.audit.md` entry recording the surface,
old/new label, patent example or table, and retained R/d/nd/νd evidence. No prescription geometry changed.

Remaining work is no longer a mismatch blocker. The separate coverage reports still contain honest code-only and
unresolved-token opportunities, which require new coefficient sources or patent line-index evidence rather than
relabeling guesses. Use the Current Status and Phase 45 sections above for current counts.

## Resolved Phase 43 — July 2026 catalog expansion and stricter matching

The official HOYA/OHARA all-products catalogs supplied 33 additional coefficient-backed rows. Exact-coordinate
relabels then corrected historical PBH21 rows previously called modern S-NPH2, plus L-LAH90, TAFD40L-W, S-NPH1,
S-BSM15, S-TIM6, and L-LAL13 assignments. With those rows available, runtime matching tightened to nd ±0.003 and
νd ±2 without losing aggregate coverage: strict Sellmeier coverage rose from 4499 to 4535 surfaces.

| Lens file(s) | Surface(s) | Old annotation | New annotation | Justification |
|---|---|---|---|---|
| Canon RF 15-35, RF 28-70 STM, RF 85/1.2, RF 85/2; Nikon Z 16-50, 24-50, 24-120, 24-200, 85/1.8; Panasonic S Pro 50/1.4; Sigma 40/1.4; Sony E 18-55, FE 85 GM II, FE 90 Macro | 16 elements | `S-NPH2` at 1.92286 / 20.88–20.90 | historical `PBH21` | PBH21 is the exact 923209 row; modern S-NPH2 has νd ≈ 18.90. |
| Nikon AF-S 28mm f/1.4 E | L26 | `S-LAH60V` | `L-LAH90` | Exact 1.83220 / 40.10 OHARA row. |
| Sony FE 24-70mm f/2.8 GM II | L24 | `S-LAH79` | `TAFD40L-W` | Exact 2.00069 / 25.46 HOYA row. |
| Fujifilm XF 23mm f/1.4 R | L123, L25 | `S-TIH6` | `S-NPH1` | Exact 1.80809 / 22.76 OHARA row. |
| Nikon Nikkor-N Auto 28mm f/2 | L1, L3 | `SK16` | `S-BSM15` | Exact 1.62299 / 58.17 OHARA row; the old SK16 assignment was a different coordinate. |
| Canon FD 50mm f/1.2 L | L3 | `S-TIM27` | `S-TIM6` | Exact 1.63636 / 35.39 OHARA row. |
| Nikon Z 35mm f/1.8 S | L23 | probable `L-LAL14` | `L-LAL13` | Exact 1.69350 / 53.19 low-Tg OHARA row. |

## Resolved Phase 42 — July 2026 dispersion-aware follow-up

| Lens file(s) | Surface(s) | Old annotation | New annotation | Justification |
|---|---|---|---|---|
| Fujifilm XF 50mm f/1.0 | L1a | `S-FPM3` | `S-TIL2` | Exact 1.54072 / 47.23 OHARA coordinate; S-FPM3 has νd = 74.70. |
| Sigma 40mm f/1.4 Art | L6, L16 | `M-FCD500`; `S-NBH56` | `FCD705`; `M-TAFD305` | Both replacements exactly match the authored nd/νd pairs and retain the source-family/manufacturing context. |
| Canon Serenar 28mm f/3.5 | L2 | `SK16` | `E-BAF8` | Exact 1.62370 / 47.00 coordinate; N-SK16 is a same-index but much lower-dispersion crown. |
| Canon RF 24-240mm | L12 | `S-LAM3 type (720/437)` | `S-LAM52` | Exact embedded-code and 1.72000 / 43.69 coordinate match. |
| Olympus Zuiko Auto-Macro 50mm f/2 | L2 | `S-LAL59 (729/547)` | `S-LAL18` | Exact embedded-code and 1.72916 / 54.68 coordinate match. |
| Fujifilm GF 80mm f/1.7; GF 120mm f/4 Macro | L11; L23 | `S-NBH55`; `S-LAH52Q` | `S-LAH52Q`; `S-NBH55` | Corrects a swapped pair of near-equal-index OHARA glasses whose Abbe numbers differ by more than 12. |

The runtime and generated reports require both nd and νd compatibility before catalog Sellmeier
data is trusted. This exposed 40 previously hidden same-index dispersion mismatches; the exact low-ambiguity rows above
were corrected, while the remaining cases stay on the Abbe fallback and in the generated relabel queue. Phase 43
subsequently tightened the window from nd ±0.005 / νd ±3 to nd ±0.003 / νd ±2.

## Resolved Phase 41 — July 2026 mismatch and coverage follow-up

| Lens file(s) | Surface(s) | Old annotation | New annotation | Justification |
|---|---|---|---|---|
| [HasselbladHC120mmf4Macro.data.ts](../src/lens-data/hasselblad/HasselbladHC120mmf4Macro.data.ts) | L8 | `NBFD10 (HOYA)` | `S-LAH63 (OHARA coordinate match)` | Removes a false catalog match; S-LAH63 exactly matches the stored 1.80440 / 39.6 coordinate. |
| [NikonUltraMicroNikkor295mmf12.data.ts](../src/lens-data/nikon/NikonUltraMicroNikkor295mmf12.data.ts) | L4 | `SF8 class...` | `Unmatched SF8-class...` | The patent stores an e-line index; explicit unmatched status prevents comparison to and application of a d-line catalog row. |
| Nikon AF Micro 200mm and AF Zoom-Micro 70–180mm | L1, L7; L15 | unresolved `804339` descriptions | `E-LAFH2 (Hikari; patent code 804339)` | Exact Hikari code and 1.80384 / 33.89 coordinate. |
| Nikon AF Zoom-Micro 70–180mm, AF 28–80mm, AF 28mm f/1.4D, and R-UW Micro 50mm | five elements at 1.86074 / 23.0–23.01 | unresolved/code-only dense-flint descriptions | `J-SFH2 (Hikari)` | Current J-SFH2 retains the exact index; code and rounded Abbe number differ by only the final digit. |
| Canon RF 50mm f/1.4, Fujifilm XF 23mm f/2.8, Sigma 17–40mm f/1.8 | three NBFD32 elements | named but unresolved NBFD32 | catalog-backed `NBFD32` | Official HOYA formula-3 coefficients, code 730322, and exact 1.73037 / 32.23 coordinate. |
| Nikon AF-S 200–500mm, Nikon AF-S 120–300mm, Sigma 85mm Art | three stale E-ADF10 guesses | `E-ADF10` | E-FD2, S-TIH1, S-NBM51 respectively | Each replacement matches the stored six-digit coordinate exactly; actual E-ADF10 is the distinct 613444 row. |
| Sigma 105mm f/1.4 Art | L4 | named but unresolved `E-ADF10` | catalog-backed `E-ADF10` | Official HOYA obsolete-glass AGF polynomial at exact 1.61310 / 44.36 and code 613444. |

## Resolved Phase 3 — high-confidence relabels (audit trail)

| Lens file | Surface(s) | Old annotation | New annotation | Justification |
|---|---|---|---|---|
| [NikonNikkorAFS2470mmf28E.data.ts](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) | nd=1.90366 | `S-LAH79 (OHARA)` | `S-LAH95 (OHARA)` | Code 904/313 = S-LAH95; stored nd matches exactly. |
| [NikonNikkorAFS2470mmf28E.data.ts](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) | nd=1.7725 | `S-LAH52 (OHARA)` | `S-LAH66 (OHARA)` | S-LAH52 has nd=1.800; stored nd=1.7725 matches S-LAH66 (1.7725) exactly. |
| [NikonNikkorAFS2470mmf28E.data.ts](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) | nd=1.816 | `S-LAH66 (OHARA)` | `S-LAH59 (OHARA)` | S-LAH59 has nd=1.816; stored matches exactly. |
| [NikonNikkorAFS2470mmf28E.data.ts](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) | nd=1.603 | `S-PHM52 (OHARA)` | `S-PHM53 (OHARA)` | S-PHM53 has nd=1.603001; Δnd=0, Δvd=0.04 — perfect match. |
| [NikonNikkorAFS2470mmf28E.data.ts](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) | nd=1.83481 | `S-LAH63 (OHARA)` | `S-LAH55 (OHARA)` | S-LAH55 nd=1.834807; stored matches. Default non-V. |
| [FujifilmXF56mmf12.data.ts](../src/lens-data/fujifilm/FujifilmXF56mmf12.data.ts) | L7, L15, L17 (nd=1.883) | `S-LAH66 (OHARA)` | `S-LAH58 (OHARA)` | S-LAH66 nd=1.772; stored nd=1.883 matches S-LAH58 (1.883) exactly. |
| [NikonNikkorAFS1424mmf28.data.ts](../src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts) | nd=1.8044 | `S-LAH66 (OHARA)` | `S-LAH63 (OHARA)` | S-LAH63 nd=1.8044; exact match. |
| [NikonNikkorAFS1424mmf28.data.ts](../src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts) | nd=1.772789 | `S-LAH59 (OHARA)` | `S-LAH66 (OHARA)` | S-LAH66 nd=1.7725; Δnd=0.0003. |
| [NikonNikkorAFS1424mmf28.data.ts](../src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts) | nd=1.8061 | `S-LAH58 (OHARA)` | `S-LAH53 (OHARA)` | S-LAH53 nd=1.806098; Δnd=0.0001. |
| [CanonRF24105mmf4L.data.ts](../src/lens-data/canon/CanonRF24105mmf4L.data.ts) | L12, L31 (nd=1.804) | `S-LAL18 (OHARA)` | `S-LAH65V (OHARA)` | S-LAH65V nd=1.804; exact match. S-LAL18 nd=1.729 (wrong). |
| [CanonRF24105mmf4L.data.ts](../src/lens-data/canon/CanonRF24105mmf4L.data.ts) | nd=2.00069 | `S-NPH53 (OHARA)` / later `S-LAH79 (OHARA)` | `TAFD40 (HOYA)` | 2026-05 audit found the patent row lists nd=2.00069, vd=25.5; TAFD40 now round-trips exactly, while S-LAH79 does not. |
| [NikonZ28f28.data.ts](../src/lens-data/nikon/NikonZ28f28.data.ts) | L3, L11, L16 (nd=1.804) | `S-LAH55V (OHARA)` | `S-LAH65V (OHARA)` | S-LAH55V nd=1.835; stored nd=1.804 matches S-LAH65V exactly. |
| [NikonZ28f28.data.ts](../src/lens-data/nikon/NikonZ28f28.data.ts) | nd≈1.808 | `S-NPH 1 (OHARA)` | `S-NPH1 (OHARA)` | Space in name prevented catalog resolution; fixed. |
| [NikonZ28f28.data.ts](../src/lens-data/nikon/NikonZ28f28.data.ts) | nd≈1.762 | `S-TIH 14 (OHARA)` | `S-TIH14 (OHARA)` | Same — space in name fix. |
| [CanonRF2450mmf463.data.ts](../src/lens-data/canon/CanonRF2450mmf463.data.ts) | 699/301 | `S-TIH6 (OHARA 699/301)` | `S-TIM35 (OHARA 699/301)` | Code 699301 = S-TIM35; stored nd=1.699 matches. |
| [CanonRF2450mmf463.data.ts](../src/lens-data/canon/CanonRF2450mmf463.data.ts) | 904/313 | `S-LAH55V (OHARA 904/313)` | `S-LAH95 (OHARA 904/313)` | Code 904313 = S-LAH95. |
| [CanonRF2450mmf463.data.ts](../src/lens-data/canon/CanonRF2450mmf463.data.ts) | 847/239 | `S-TIH53 (OHARA 847/239)` | `S-NPH53 (OHARA 847/239)` | Code 847239 = S-NPH53 (847238 = S-TIH53). |
| [CanonRF2450mmf463.data.ts](../src/lens-data/canon/CanonRF2450mmf463.data.ts) | 773/496 | `S-LAH53 (OHARA 773/496)` | `S-LAH66 (OHARA 773/496)` | Code 773496 = S-LAH66. |
| [CanonRF24240mmf463.data.ts](../src/lens-data/canon/CanonRF24240mmf463.data.ts) | 903/313 | `S-LAH79 type (903/313)` | `S-LAH95 type (903/313)` | Code matches S-LAH95. |
| [CanonRF24240mmf463.data.ts](../src/lens-data/canon/CanonRF24240mmf463.data.ts) | 773/496 | `S-LAL54 type (773/496)` | `S-LAH66 type (773/496)` | No S-LAL54 exists; code matches S-LAH66. |
| Multiple (9 files) | nd=1.90366 | various → `S-LAH79/S-LAH65V/S-NPH53/S-LAH58` | `S-LAH95 (OHARA)` | CanonRF24240, FujifilmXF1655, NikonAFS200500, NikonNikkorPCE19, NikonNikkorZ24120, NikonNikkor85f14G, NikonNikkorAFS80400, LeicaAPO43mmf2. |
| [NikonAF28f14D.data.ts](../src/lens-data/nikon/NikonAF28f14D.data.ts) | L2, L12 (nd=1.77279) | `LaM type (near S-LAM66)` | `S-LAH66 (OHARA)` | S-LAH66 nd=1.7725; Δnd=0.0003. |
| [NikonAF28f14D.data.ts](../src/lens-data/nikon/NikonAF28f14D.data.ts) | L5, L10 (nd=1.80411) | `LaH type (near S-LAH55)` | `S-LAH65V (OHARA)` | S-LAH65V nd=1.804; Δnd=0.0001. |
| Various (S-LAH66) | multiple | `S-LAH55V/S-LAM66/S-LAH59/S-LAH53/S-LAM66/S-LAH53` | `S-LAH66 (OHARA)` | CanonRF2870mmf2L, NikonAFS28f14E, Leica28mmf17, RicohGR428, NikonNikkorZ24120, NikonNikkorPCE19, NikonNikkorAFS2470mmf28E, OlympusZuikoAutoS50. |
| Various (S-LAH58) | nd=1.883 | `S-LAH66 (OHARA)` / `S-LAH79 (OHARA)` | `S-LAH58 (OHARA)` | NikonNikkorZ1430mmf4S, LeicaAPO35mmf2. |
| [CanonRF85mmf2Macro.data.ts](../src/lens-data/canon/CanonRF85mmf2Macro.data.ts) | nd=1.804 | `TAFD30 (HOYA)` | `S-LAH65V (OHARA)` | nd=1.804 matches S-LAH65V exactly; TAFD30 nd=1.883. |
| [NikonPCENikkor24mmf35DED.data.ts](../src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts) | L1, L16 (nd=1.804) | `S-LAH58 (OHARA)` | `S-LAH65V (OHARA)` | S-LAH58 nd=1.883; stored nd=1.804 matches S-LAH65V. |
| [NikonZ26f28.data.ts](../src/lens-data/nikon/NikonZ26f28.data.ts) | nd=1.816 | `S-LAL18 (OHARA)` | `S-LAH59 (OHARA)` | S-LAH59 nd=1.816; exact match. |
| [NikonNikkorZ1430mmf4S.data.ts](../src/lens-data/nikon/NikonNikkorZ1430mmf4S.data.ts) | nd=1.816 | `S-LAH63 (OHARA)` | `S-LAH59 (OHARA)` | S-LAH63 nd=1.804; stored nd=1.816 matches S-LAH59. |
| [OlympusZuikoAutoS50mmf12.data.ts](../src/lens-data/olympus/OlympusZuikoAutoS50mmf12.data.ts) | nd=1.83481 | `S-LAH58 (OHARA) / TAFD5 (HOYA)` | `S-LAH55 (OHARA) / TAFD5 (HOYA)` | Stored nd matches S-LAH55; default non-V. |
| [OlympusZuikoAutoS50mmf12.data.ts](../src/lens-data/olympus/OlympusZuikoAutoS50mmf12.data.ts) | nd=1.7725 | `S-LAH51 (OHARA) / TAF1 (HOYA)` | `S-LAH66 (OHARA) / TAF1 (HOYA)` | TAF1 = nd=1.7725; matches S-LAH66. S-LAH51 nd=1.786 (wrong). |
| [NikonNikkorZ100400f4556.data.ts](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) | nd=1.8044 | `S-LAH55V (OHARA)` | `S-LAH63 (OHARA)` | S-LAH63 nd=1.8044; exact match. |
| [NikonNikkorZ100400f4556.data.ts](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) | nd=1.8061 | `S-LAH55 (OHARA) †` | `S-LAH53 (OHARA)` | S-LAH53 nd=1.806098; Δnd=0.0001. |
| [NikonNikkorAFS200500mmf56.data.ts](../src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts) | nd=1.83481 | `S-LAH58 (OHARA)` | `S-LAH55 (OHARA)` | Stored nd=1.835 matches S-LAH55; default non-V. |
| [NikonNikkorZ70200f28.data.ts](../src/lens-data/nikon/NikonNikkorZ70200f28.data.ts) | 6 surfaces (nd=1.498) | `S-FPL52 — ED (498-826)` | `S-FPL51 — ED (498-826)` | Code 498826 ≈ S-FPL51/FCD1 territory; stored nd=1.498, S-FPL52 catalog nd=1.456. |
| [NikonZ1424f28S.data.ts](../src/lens-data/nikon/NikonZ1424f28S.data.ts) | 4 surfaces (nd=1.498) | `S-FPL52 (OHARA) — ED` | `S-FPL51 (OHARA) — ED` | Same as above. |

## Resolved Phase 2 — high-confidence relabels (audit trail)

| Lens file | Surface | Old annotation | New annotation | Justification |
|---|---|---|---|---|
| [NikonNikkorAFS2470mmf28E.data.ts](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) | L44 | `S-FPL53 (OHARA) — Super ED` | `S-FPL51 (OHARA) — ED` | Stored nd=1.49782, vd=82.6 matches S-FPL51 (1.497, 81.55) to Δnd=0.0008, Δvd=1.05; S-FPL53 has vd=94.95 (off by 12+ Abbe units). |
| [NikonNikkorZ100400f4556.data.ts](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) | 5 surfaces | `S-FPL53 (OHARA)` | `S-FPL51 (OHARA)` | All 5 surfaces have nd=1.49782, vd=81.10 — matches S-FPL51 to Δvd<0.5. |
| [NikonNikkorZ24120mmf4S.data.ts](../src/lens-data/nikon/NikonNikkorZ24120mmf4S.data.ts) | 3 surfaces | `S-FPL53 (OHARA)` | `S-FPL51 (OHARA)` | All 3 surfaces have nd=1.49782, vd=82.57 — matches S-FPL51 to Δvd~1.0. |
| [NikonNikkorZ50f18S.data.ts](../src/lens-data/nikon/NikonNikkorZ50f18S.data.ts) | L23 | `S-FPL53 / FCD100 class (super-ED…)` | `S-FPL51 / FCD1 class (ED fluorophosphate, νd = 82.6)` | Same — stored vd=82.6 matches FPL51/FCD1, not FPL53/FCD100. |
| [CanonRF2470f28.data.ts](../src/lens-data/canon/CanonRF2470f28.data.ts) | L4, L11 | `S-LAL14 (OHARA)` | `S-LAL18 (OHARA)` | Stored nd=1.72916, vd=54.7 matches S-LAL18 (1.72916, 54.68) exactly; S-LAL14 has vd=55.53. |
| [NikonAFS28f14E.data.ts](../src/lens-data/nikon/NikonAFS28f14E.data.ts) | L21 | `S-LAL14 (OHARA)` | `S-LAL18 (OHARA)` | Same as above. |
| [NikonNikkor85f14G.data.ts](../src/lens-data/nikon/NikonNikkor85f14G.data.ts) | L7 | `S-LAL14 (OHARA)` | `S-LAL18 (OHARA)` | Same as above. |
| [NikonAFS28f14E.data.ts](../src/lens-data/nikon/NikonAFS28f14E.data.ts) | L12 | `S-BAL42 (OHARA)` | `N-LAK8 (Schott)` | Stored nd=1.713, vd=53.9 matches N-LAK8 (1.713, 53.83) exactly; S-BAL42 has nd=1.583. |
| [NikonZ26f28.data.ts](../src/lens-data/nikon/NikonZ26f28.data.ts) | L7 | `S-TIH6 (OHARA)` | `SF4 (Schott)` | Stored nd=1.7552, vd=27.6 matches SF4 (1.7552, 27.58) exactly; S-TIH6 has nd=1.805. |

## Pending — actionable relabels (single catalog candidate, vd matches)

None remain in the current mismatch queue. If a future report introduces rows, run
[glass-relabel-candidates.generated.md](generated/glass-relabel-candidates.generated.md) and tackle candidates one
lens at a time, cross-checking the analysis sidecar and patent narrative.

Non-trivial cases worth special note:

- **S-LAH55 vs S-LAH55V** (e.g. nd=1.83481, vd=42.7): both round-trip the same nd; choice changes secondary-spectrum behavior. Default to S-LAH55 (non-V) when the patent doesn't specify a vacuum-melt variant.
- **S-LAH58 vs TAFD30** (e.g. nd=1.88300, vd=40.8): identical published nd/vd; pick by family hint in the original annotation (OHARA vs HOYA).
- **FCD1 vs S-FPL51** (e.g. nd=1.49700, vd=81.55): catalog-equivalent ED glasses; pick by vendor consistency with rest of the lens.
- **S-LAM66 → S-LAH66** suggestions (e.g. nd=1.77279, vd=49.4 in NikonAF28f14D): the analysis text references "near OHARA S-LAM66" but the (nd, vd) pair matches S-LAH66 exactly. Update the analysis narrative alongside the data file when relabeling.

## Pending — patent verification needed (no catalog candidate within tolerance)

None remain in the current mismatch queue. For any future (nd, vd) group without a candidate inside the
Δnd=0.003 / Δvd=2.0 window, the right resolution is to:

1. Open the lens patent prescription tables.
2. Identify the correct glass at the cited surface (often listed by code or by vendor part number).
3. If the correct glass is in our catalog, relabel.
4. If the correct glass is NOT in our catalog, decide whether to:
   - Add it (only if it's used across multiple lens files — see [glass-catalog-buildout.md](glass-catalog-buildout.md)).
   - Mark the annotation as `Unmatched (...reason)` so the resolver stops trying. The dispersion cascade will use the Abbe approximation.

The `Unmatched (…)` form is preferred for genuinely-proprietary glass (Sumita custom melts, vintage Leitz, designer-attributed approximations). It is honest about the data quality and surfaces in the LCA badge as "Abbe approx".

### Historical high-frequency patterns (groups, not individual surfaces)

These patterns explain why many mismatches exist, but they are not the current worklist. Several once-missing glasses
have since been added to the catalog; rerun the generated reports and trust the report row for the current candidate
state.

| Pattern | Surfaces | Notes |
|---|---|---|
| `S-LAH79` mislabel with stored nd≈1.90366 / vd≈31.3 | ~10 | Real S-LAH79 is 2.003/28.3. Stored values point to a nearby high-index lanthanum family; current reports may now surface catalogued candidates, but the patent should settle the label. |
| `S-LAH79` mislabel with stored nd≈1.95375 / vd≈32.3 | ~13 | Same family; possibly OHARA S-LAH98 / S-NBH52 / E-FDS3. Check the current candidate report before deciding whether to relabel or mark unmatched. |
| `S-NPH2` mislabel with stored nd≈2.001 / vd≈29.1 | ~5 | Real S-NPH2 is 1.923/18.9. Stored values closer to S-LAH79 (2.003/28.3) — already in catalog (Δnd ≈ 0.003 — borderline tolerance). |
| `S-NPH2` mislabel with stored nd≈2.05090 / vd≈26.9 | ~2 | Above S-LAH79's nd; could be OHARA S-NBH56 / E-FDS4 (newer ultra-high-index flints, not in catalog). |
| `S-LAH58` mislabel with stored nd≈1.91082 / vd≈35.2 | ~6 | Real S-LAH58 is 1.883/40.8. Stored values match S-LAH59 / S-LAH60 / S-LAH63V (none in catalog). |
| `S-LAH66` mislabel with stored nd≈1.85150 / vd≈40.8 | 3 | (CanonRF2870mmf28 surface 8 etc.) Real S-LAH66 is 1.7725/49.6. Stored matches S-LAH51 (1.787) or S-LAH52 (1.797) — neither in catalog within tolerance. |
| `S-PHM52` mislabel with stored nd≈1.60-1.603 / vd≈55-67 | ~3 | Real S-PHM52 is 1.618/63.3. Closer matches: OHARA L-PHM52 (lead-free variant of S-PHM52, slightly different nd) — not in catalog. |
| `S-BAL42` mislabel with stored nd≈1.531-1.589 (varies) | ~4 | Real S-BAL42 is 1.583/59.4. Each surface is a different glass; needs per-lens patent lookup. |
| `S-BSL7` mislabel with stored nd≈1.60311 or 1.63854 | 3 | Real S-BSL7 is 1.516/64.1. Stored values are unrelated; the original annotations are clearly wrong. Likely barium crowns; needs per-lens lookup. |
| `S-FPM2` mislabel (FujifilmXF80f28 surface 23) with stored nd=1.53775, vd=74.7 | 1 | Real S-FPM2 is 1.595/67.7. Stored values fit a long-Abbe fluorophosphate not in catalog (possibly S-FPL55 or HIKARI E-F2). |
| `S-LAH63` mislabel (NikonNikkorZ100400 surface 45 etc.) | 2 | Real S-LAH63 is 1.804/39.6. Stored 1.738/49.3 matches S-LAH71 / S-LAH72 (not in catalog). |
| `SF4` / `SF6` mislabel (NikonNikkorSAuto50mmf14, LeicaElcan50mmf2) | ~3 | Vintage lead flints; the "≈SF4" / "SF4 / PBM5" notation in the original lens-data is explicit speculation. Best resolution: relabel as `Unmatched (≈SF4 family, vintage lead flint, no exact catalog match)`. |
| `BSC7 (HOYA)` in OlympusZuikoAutoMacro90mmf2 surface 17 (stored nd=1.65160) | 1 | BSC7 is BK7-equivalent (nd=1.516); stored 1.652 matches S-NBH5 (1.654) very closely. The annotation is wrong; relabel candidate `S-NBH5 (OHARA, vd~39.7)` if the patent supports KZFS-class. |

## Workflow for a single follow-up

Follow the four-phase procedure in [lens-patent-audit.md](lens-patent-audit.md). It covers patent sourcing, glass relabeling, retained-information audit, dPgF/line-index enrichment, analysis-file sync, and the per-lens `*.audit.md` log convention. When the audit completes, move the row from this followup file to its "Resolved this session" table.

## Why this is per-lens authoring work, not a one-shot migration

The original annotations were authored by reading patent prescriptions or the lens vendor's published data. Most mismatches reflect a **mismatch between the author's named-glass guess and the actual published nd/vd** — usually because the author picked the closest *named* OHARA glass when the actual glass was an older/newer variant or a different vendor's equivalent. Resolving each requires:

- The original patent (often in Japanese; J-PlatPat is the authoritative source for JP).
- Cross-vendor glass lookup tables (Schott ↔ Ohara ↔ Hoya equivalents).
- Judgment about whether the analysis.md narrative needs updating alongside the data file.

This is exactly the work that the `glass:` annotation field was designed to capture — and the catalog cascade now exposes when the field doesn't match the stored prescription. The right cadence is one lens at a time, ideally as part of authoring or revisiting each lens.
