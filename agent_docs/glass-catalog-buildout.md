# Glass Catalog Buildout

Judge coverage by the share of surfaces with trusted chromatic data (reported in
`agent_docs/generated/glass-coverage-opportunities.generated.md`), not by absolute missing counts.

A focused follow-up to the chromatic dispersion overhaul. The chromatic ray-trace now consults a Sellmeier glass catalog
at [src/optics/glassCatalog.ts](../src/optics/glassCatalog.ts) when an element's `glass` string resolves to a known
entry after first honoring complete measured `nC`/`nF`/`ng` line-index data authored on the element. Catalog-backed
elements retain authored `dPgF` at the g-line so a patent's partial-dispersion evidence is not replaced by a generic
catalog equivalent. If neither path is available, the engine falls back to partial measured `nC`/`nF` line indices,
dPgF-corrected indices, or the legacy Abbe approximation. Current optics-engine boundaries are summarized in
[architecture/optics-engine.md](architecture/optics-engine.md).

This document is the playbook for expanding the catalog. The bottleneck is not infrastructure — the dispersion engine,
resolver, validator, generated reports, and tests are all in place — it is the careful sourcing of published dispersion
coefficients. `catalogSize()` in [src/optics/glassCatalog.ts](../src/optics/glassCatalog.ts) reports the current entry
count; do not hard-code it here.

## How the Catalog and Resolver Work

- Entries live in vendor shards under `src/optics/glassCatalogEntries/` (`ohara.ts`, `schott.ts`, `hoya.ts`,
  `hikari.ts`, `sumita.ts`, `cdgm.ts`, `nhg.ts`, `special.ts`).
  [src/optics/glassCatalogData.ts](../src/optics/glassCatalogData.ts) fixes their source order into the stable
  `RAW_CATALOG` aggregate, and [src/optics/glassCatalogAliases.ts](../src/optics/glassCatalogAliases.ts) holds the
  structured `ALIAS_RECORDS` from which `ALIASES` is derived.
- `resolveCompatibleGlass` in [src/optics/glassCatalog.ts](../src/optics/glassCatalog.ts) considers every name, alias,
  and duplicate six-digit-code candidate in an element's `glass` annotation and accepts only a row whose coordinates
  are compatible with the element's stored `nd` / `vd`: nd within `GLASS_ND_TOLERANCE` (±0.003) and νd within
  `GLASS_VD_TOLERANCE` (±2). Vendor context and coordinate residuals break ties; `explainCompatibleGlassResolution`
  reports the choice, and the ambiguity report lists every annotation with more than one compatible row.
- Authored patent evidence stays authoritative. Complete measured `nC` / `nF` / `ng` line indices bypass the catalog
  entirely, and a d-line element's authored `dPgF` remains authoritative at g even when a compatible catalog curve
  supplies C/d/F.
- `ElementData.indexReference` records whether an element's `nd` / `vd` slots hold ordinary d-line values or retained
  patent `ne` / `νe`. Native e-line rows are compared against catalog coefficients evaluated at C′/e/F′; six-digit
  codes stay d-line-only and are never applied to e-line rows.
- A catalog-equivalent label names the curve that reproduces the patent coordinate; it never asserts the production
  supplier. Explicit `Unmatched`, `Unknown`, `Proprietary`, and `Unidentified` annotations are self-recording review
  dispositions: they keep the element on the patent-derived fallback and out of the active work queues.
- `summarizeDispersionQuality(L)` in `src/optics/dispersion.ts` reports whether a lens traces on catalog Sellmeier
  data, measured line indices, or the Abbe approximation; the coverage reports below aggregate it.

## Generated Reports

The generated reports in [`generated/`](generated/) are the current work queues:

- [unresolved-glass.generated.md](generated/unresolved-glass.generated.md) — unresolved tokens that may need catalog entries, aliases, or patent backfills; regenerate with `npm test -- unresolvedGlassScan`.
- [catalog-mismatches.generated.md](generated/catalog-mismatches.generated.md) — labels that resolve to a catalog entry but disagree with stored `nd`; regenerate with `npm test -- catalogMismatchScan`.
- [glass-relabel-candidates.generated.md](generated/glass-relabel-candidates.generated.md) — candidate relabel targets for mismatches; regenerate with `npm test -- glassRelabelCandidatesScan`.
- [glass-relabel-by-lens.generated.md](generated/glass-relabel-by-lens.generated.md) — per-lens patent-audit work queue combining mismatches and candidates; regenerate with `npm test -- glassRelabelByLensScan`.
- [glass-ambiguities.generated.md](generated/glass-ambiguities.generated.md) — every element annotation with multiple coordinate-compatible catalog rows, including the selected row and exact resolver tie-break; regenerate with `npm test -- glassAmbiguityScan`.
- [six-digit-glass-codes.generated.md](generated/six-digit-glass-codes.generated.md) — lenses/elements whose `glass` annotation still has only a six-digit code rather than an actual glass type; regenerate with `npm test -- sixDigitGlassCodeScan`.
- [six-digit-glass-codes-missing-sellmeier.generated.md](generated/six-digit-glass-codes-missing-sellmeier.generated.md) — code-only elements that do not reach trusted catalog Sellmeier data, with an A-E impact-ranked active unreviewed queue that excludes sidecar hits and explicit dispositions; regenerated by the same `sixDigitGlassCodeScan`.
- [sellmeier-coverage.generated.md](generated/sellmeier-coverage.generated.md) — completeness-ranked lens coverage using trusted chromatic coverage while retaining strict catalog Sellmeier counts; regenerate with `npm test -- sellmeierCoverageScan`.
- [glass-coverage-opportunities.generated.md](generated/glass-coverage-opportunities.generated.md) — ranked three-sweep work queue that also records whether each relabel row has a matching untracked local patent PDF under `patents/`; regenerate with `npm test -- glassCoverageOpportunitiesScan`.

Regenerate all glass reports together with `npm run generate:glass-reports`.

The six-digit and glass-coverage-opportunities reports embed match statuses against the untracked local `patents/`
PDF inventory, so their scans skip the rewrite when that inventory is empty (fresh worktrees, CI). Regenerate those
three files only from a checkout where `patents/` is populated; elsewhere the checked-in reports stay as-is.

## Why So Few Entries To Start With

The first cut of the catalog had nine entries. Six were wrong: when the Sellmeier coefficients were validated against the listed `nd` at 587.5618 nm via `assertCatalogConsistent`, four diverged by 5e-3 to 2e-2 — well outside any reasonable transcription tolerance. The values came from memory and were unreliable.

The conclusion drove the design: **every entry must round-trip through `assertCatalogConsistent` before being
committed.** The validator requires normally ordered finite C/d/F/g indices, nd agreement within 1e-4, νd agreement
within 0.15, and a six-digit code consistent with the listed nd/νd when one is present. These checks are enforced in
[__tests__/src/optics/dispersion.test.ts](../__tests__/src/optics/dispersion.test.ts), so a bad transcription fails CI.

## Prioritizing What to Add

The original frequency-ranked priority table was a historical prioritization aid and has been removed; use the generated
reports above, starting with
[glass-coverage-opportunities.generated.md](generated/glass-coverage-opportunities.generated.md), for the current queue.

## Authoritative Sources Per Vendor

Use these in preference order. Always cite the source in the entry's `source` field.

### Schott — most accessible
1. **Schott Optical Glass Datasheet** — per-glass PDFs at [https://www.schott.com/en-gb/products/optical-glass](https://www.schott.com/en-gb/products/optical-glass). Each PDF lists the Sellmeier B1..B3 / C1..C3 plus the full nd, vd, and PgF.
2. **Schott catalogue Excel/CSV download** — same site, full catalog as a single file.
3. RefractiveIndex.INFO mirrors Schott data when the per-glass page exists.

### Ohara — primary vendor for this codebase
1. **Ohara Optical Glass Catalog** — full PDF catalogue at [https://www.oharacorp.com/](https://www.oharacorp.com/) (look under Resources/Downloads for the latest). Each glass's datasheet page lists the dispersion equation coefficients.
2. **Ohara per-glass datasheets** — the same site offers individual datasheets that list "Dispersion Equation Constants" (note: Ohara's are sometimes presented as "Schott-form" Sellmeier with B/C as in the standard formula, sometimes as Ohara's older form using A0..A5 — make sure you transcribe the standard six-coefficient form).
3. RefractiveIndex.INFO has many Ohara entries but coverage is uneven.

### Hoya
1. **Hoya Optical Glass Catalog** — at [https://www.hoya-opticalworld.com/english/datadownload/](https://www.hoya-opticalworld.com/english/datadownload/). Provides Sellmeier coefficients alongside the index/Abbe table.
2. Per-glass PDFs.

### Hikari / Nikon
1. **Nikon/Hikari optical glass catalog** — Nikon publishes current Hikari glass catalogs at [https://www.nikon.com/business/components/lineup/materials/optical-glass/](https://www.nikon.com/business/components/lineup/materials/optical-glass/). The PDF lists nd, νd, line indices, relative partial dispersions, six-digit d/e codes, and formula-3 power-series constants.
2. **Historical Hikari catalogs** — useful for discontinued types such as J-LASFH9 where the current catalog only lists the replacement J-LASFH9A. Prefer a vendor PDF when a d-code is absent from the refractiveindex.info YAML.
3. RefractiveIndex.INFO mirrors many Nikon/Hikari AGF entries, but some newer or discontinued pages are missing. Cross-check the vendor PDF before concluding no data exists.

### Sumita
1. **Sumita Optical Glass Catalog** — [https://www.sumita-opt.co.jp/en/products/optical-glass/](https://www.sumita-opt.co.jp/en/products/optical-glass/). Their PDF catalog includes Sellmeier constants for each K-prefix glass.

### CDGM
1. **CDGM Glass Catalog** — [http://www.cdgmgd.com/](http://www.cdgmgd.com/). Available as a PDF; English versions are slightly behind the Chinese release.

### Cross-reference (when a glass has multiple equivalents)
- Many Hoya/Ohara/Schott/CDGM glasses are catalog equivalents (e.g. N-BK7 ≈ S-BSL7 ≈ BSC7 ≈ H-K9L). Always source coefficients from the **vendor whose name the lens data uses**, even when an equivalent exists. Different vendors publish slightly different Sellmeier fits to nominally-equivalent melts.

### Refractiveindex.INFO — fast access to AGF data

Refractiveindex.INFO mirrors the vendor-published AGF (Zemax catalog) files, which is convenient when the vendor's own download portal is awkward or behind a registration wall. The site's per-glass UI URLs (`?shelf=glass&book=...&page=...`) render via JavaScript and are not fetchable headlessly. The underlying data files **are** fetchable:

- **Catalog index** (lists every glass and its data path):
  `https://refractiveindex.info/database/catalog-nk.yml`
- **Per-glass spec file** (Sellmeier coefficients, nd, vd, ΔPgF, glass_code):
  `https://refractiveindex.info/database/data/specs/<vendor>/optical/<NAME>.yml`
  - Ohara: `specs/ohara/optical/S-PHM52.yml`, etc.
  - Schott: `specs/schott/optical/N-BK7.yml`
  - Hoya: `specs/hoya/optical/FCD1.yml`
  - Sumita: `specs/sumita/optical/K-GFK68.yml`
  - To find the right path for a glass not listed above, grep the catalog index: `curl -sL https://refractiveindex.info/database/catalog-nk.yml | grep -A1 "PAGE: <NAME>"`.

The YAML's `DATA[].coefficients` field for `type: formula 2` (Sellmeier-1, Zemax form) is laid out as **seven** numbers: `K B1 C1 B2 C2 B3 C3`. K is the additive constant in `n² = K + Σ Bᵢλ²/(λ²−Cᵢ)`; for the standard Sellmeier-1 form K=0 (verify before transcribing). Then map straight into the catalog entry's `B: [B1, B2, B3]` and `C: [C1, C2, C3]` arrays.

For `type: formula 3` (Zemax polynomial / power series), do **not** force the values into `B`/`C`. If the exponents are exactly `0, 2, -2, -4, -6, -8`, store the six terms in `polynomial: [a0, a1, a2, a3, a4, a5]` where `n² = a0 + a1·λ² + a2·λ⁻² + a3·λ⁻⁴ + a4·λ⁻⁶ + a5·λ⁻⁸`. If the source uses explicit exponents outside that fixed shorthand, such as Hikari entries with `λ⁴`, `λ⁻¹⁰`, or `λ⁻¹²`, store them in `powerSeries: [[coefficient, exponent], ...]` exactly as published. The d-line consistency test covers both forms.

PgF is **not** published in the rii.info YAML (only `dPgF` is). Compute PgF for the catalog entry from the Schott normal-line baseline plus dPgF: `PgF ≈ 0.6438 − 0.001682·vd + dPgF`. The catalog's PgF field is decorative — the dispersion engine derives V-channel partial dispersion from the lens-data element's `dPgF`, not from the catalog. If you need vendor-direct PgF (rare), pull from the OHARA/Schott PDF datasheet instead.

The 1e-4 round-trip test will catch any transcription error — never relax the tolerance, fix the source.

## How to Add an Entry — Step by Step

1. **Find the glass in the source vendor's catalog** (PDF, datasheet, or downloaded Excel). Confirm whether the formula is standard six-coefficient Sellmeier:
   $$n^2(\lambda) = 1 + \frac{B_1 \lambda^2}{\lambda^2 - C_1} + \frac{B_2 \lambda^2}{\lambda^2 - C_2} + \frac{B_3 \lambda^2}{\lambda^2 - C_3}$$
   with λ in **micrometres** and C in **micrometres²**, or Zemax formula 3 polynomial as described above. Reject any other formula until you have explicitly converted it.

2. **Transcribe** the coefficients verbatim into the appropriate vendor shard under `src/optics/glassCatalogEntries/`
   (`ohara.ts`, `schott.ts`, `hoya.ts`, etc.). Keep all digits the source publishes — typically 8–10 significant
   figures. Then add the glass name to the source-order list in [src/optics/glassCatalogData.ts](../src/optics/glassCatalogData.ts)
   at the intended catalog position so `RAW_CATALOG` remains the stable aggregate.

3. **Fill in `nd` and `vd`** from the same vendor's published table (not from the lens data file). Provide `PgF` if listed and `code6` if it's a Schott-style 6-digit code.

4. **Cite the source** in the `source` field with enough detail to find it again ("Schott N-FK5 datasheet, Schott AG public, accessed YYYY-MM-DD" or "Ohara optical glass catalog 2024 v3, page N-LAK glasses").

5. **Run the consistency test:**
   ```bash
   npm test -- dispersion.test.ts
   ```
   The catalog-integrity test fails immediately on invalid spectral ordering, an nd/νd coefficient round-trip error,
   or a six-digit code that does not encode the listed coordinates. Fix the transcription or source — never relax the
   tolerance to admit a bad row.

6. **If the glass has a common informal alias** (`BSC7` for `S-BSL7`, `BK7` for `N-BK7`) add a structured entry to
   `ALIAS_RECORDS` in [src/optics/glassCatalogAliases.ts](../src/optics/glassCatalogAliases.ts), including the alias
   `kind` and a short note explaining why the alias is safe. `ALIASES` is derived from those records.

7. **If you've added enough entries** that the LCA readout for the target lens has visibly changed, regenerate the glass
   reports and add a changelog entry per [agent_docs/changelog.md](changelog.md).

## Pitfalls and Edge Cases

- **Ohara's older "Dispersion Equation"** uses A0..A5 in a different functional form (a polynomial in λ², not a sum of Sellmeier terms). Their modern datasheets publish the standard Sellmeier — confirm you have the right one. The standard form has six numbers, three of which (C1..C3) carry units of μm².
- **λ units.** Some sources tabulate in nm rather than μm. The standard is μm; the catalog evaluator (`evaluateSellmeier`) converts the input nm to μm internally. If a source gives C values around `1e6`, that's in nm² and must be divided by `1e6` before insertion.
- **CaF2 and other crystals** sometimes use a different Sellmeier formulation (e.g. Daimon & Masumura). Convert to the standard form or note the deviation and provide a custom evaluator.
- **Anisotropic crystals** (sapphire, lithium niobate) have wavelength-dependent indices that differ along ordinary vs. extraordinary axes. None are present in the current lens data; this concern is forward-looking only.
- **Vacuum-melt variants** (suffix V or VS, e.g. S-LAH55V, S-LAH55VS) have slightly different coefficients from their non-V forms. Treat as distinct entries.
- **Discontinued glasses** (e.g. some "BAL" and old "F"-series Schott) may not appear in current PDFs. Use the last historical Schott catalog (search "Schott Optical Glass 2014" or earlier) — the coefficients of discontinued glasses are still physical fact.
- **Six-digit codes are not vendor names.** They encode rounded nd/νd and can describe equivalent glasses from multiple makers. Prefer a vendor-canonical name when the lens annotation includes one; for code-only patent labels, only add a `code6` mapping when the sourced catalog constants match the stored patent nd/vd cluster closely.
- **Not every six-digit-looking token is a glass code.** Strings like `159319/6790` may be compact nd/vd shorthand (`1.59319 / 67.90`) rather than a d-code. Relabel those annotations before adding catalog aliases.
- **Reference-line mixing.** A vendor's e-line index can superficially match a patent d-line coordinate (and vice versa). Compare like with like; never substitute a curve whose match only holds across reference systems.
- **Partial-dispersion sign conflicts.** When a vendor's published ΔPgF has the opposite sign from the patent's `dPgF` / θgF evidence, the curve is the wrong glass family even if nd/νd fall inside the compatibility window. Leave the row explicitly unmatched.
- **Variants sharing a six-digit code.** Suffix variants (`S-NBH53` vs `S-NBH53V`, `H-K9L` vs `H-K9LGT`, molding-state `(M)` grades) are distinct rows even when they share a code and coefficients. For a molding-state row, omit a reused base-glass product code so the bare code stays bound to its established coordinate.
- **Internally inconsistent vendor records.** If a record's nominal `nd` disagrees with the value its own polynomial evaluates to, do not add it until another source resolves the discrepancy.
- **Do not invent evidence.** Never add a nominal resin, a duplicate six-digit curve, or a patent `dPgF` value to close a coverage gap; unpublished bonded/compound layers stay on the fallback path.

## When to Stop

The catalog never needs to be exhaustive. Diminishing returns kick in after the top 30 entries — beyond that, each new glass affects fewer than 10 elements across the entire lens library. Stop adding new entries when:

1. The headline regression cases (Voigtländer APO-Lanthar 50/2, Leica APO 35/2 / 43/2) hit Sellmeier on every glass surface.
2. `summarizeDispersionQuality(L)` returns `"sellmeier"` (not `"abbe"`) for the great majority of catalog lenses.
3. Remaining unmatched glasses are genuinely proprietary (Sumita unidentified, "anomalous high-index flint" without a catalog name), or are catalog names used inconsistently across multiple nd/vd regions (notably NBFD3 and TAFD25), or are absent from the rii.info 2017 archive — those should be resolved per lens or backfilled with patent-published `nC`/`nF`/`ng`.

For per-lens audits that consume the catalog (relabeling, mismatch resolution, `dPgF`/line-index enrichment), follow [lens-patent-audit.md](lens-patent-audit.md).
