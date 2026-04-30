# Glass Catalog Buildout

A focused follow-up to Phase 2 of the chromatic dispersion overhaul ([CHROMATIC_DISPERSION_NOTES.md](../CHROMATIC_DISPERSION_NOTES.md)). The chromatic ray-trace now consults a Sellmeier glass catalog at [src/optics/glassCatalog.ts](../src/optics/glassCatalog.ts) when an element's `glass` string resolves to a known entry; otherwise it falls back to dPgF-corrected indices, measured `nC`/`nF`/`ng` line indices, or the legacy Abbe approximation.

The catalog ships with **only 3 verified entries** at present (`N-BK7`, `S-BSL7`, `CaF2`). This document is the playbook for expanding it. The bottleneck is not infrastructure — the dispersion engine, resolver, validator, and tests are all in place — it is the careful sourcing of vendor-published Sellmeier coefficients.

## Why So Few Entries To Start With

The first cut of the catalog had nine entries. Six were wrong: when the Sellmeier coefficients were validated against the listed `nd` at 587.5618 nm via `assertCatalogConsistent`, four diverged by 5e-3 to 2e-2 — well outside any reasonable transcription tolerance. The values came from memory and were unreliable.

The conclusion drove the design: **every entry must round-trip through `assertCatalogConsistent` (tolerance 1e-4) before being committed.** This is enforced by the unit test `every entry's Sellmeier coefficients reproduce the listed nd within 1e-4` in [__tests__/dispersion.test.ts](../__tests__/dispersion.test.ts). A bad transcription fails CI.

## Prioritized Glasses to Add

Frequency derived from `glass:` declarations across all 123 lens data files (1413 declarations total). The top 50 covers the lion's share. Asterisks mark entries already in the catalog.

| Glass | Lens-element occurrences | Vendor | Notes |
|---|---|---|---|
| **S-FPL51** | 74 | Ohara | Highest priority — primary ED crown across most APO designs |
| S-LAH58 | 52 | Ohara | High-index lanthanum, ubiquitous |
| S-TIH53 | 31 | Ohara | High-dispersion flint |
| S-NPH2 | 31 | Ohara | Niobophosphate flint |
| S-TIH6 | 30 | Ohara | |
| S-LAH79 | 26 | Ohara | Voigtländer APO-Lanthar L2 |
| S-LAH55V | 26 | Ohara | Vacuum melt variant |
| ★ S-BSL7 | 22 | Ohara | (in catalog) |
| S-LAL18 | 21 | Ohara | |
| S-LAH65V | 20 | Ohara | Voigtländer APO-Lanthar L8 |
| SF6 | 19 | Schott | Legacy lead flint |
| S-FSL5 | 19 | Ohara | Fluor crown |
| S-TIH14 | 18 | Ohara | |
| S-PHM52 | 18 | Ohara | Phosphate crown with notable +ΔPgF |
| S-FPM2 | 17 | Ohara | Fluorophosphate ED |
| S-LAL14 | 16 | Ohara | |
| S-LAH66 | 15 | Ohara | |
| ★ N-BK7 | 14 | Schott | (in catalog) |
| FCD1 | 13 | Hoya | ED, FPL51-equivalent |
| S-BAL42 | 12 | Ohara | |
| S-FPL53 | 12 | Ohara | Super ED — defining glass for many APO triplets |
| S-LAH63 | 11 | Ohara | |
| S-LAM66 | 11 | Ohara | |
| S-LAH55 | 11 | Ohara | |
| S-TIM35 | 11 | Ohara | |
| S-LAH53 | 10 | Ohara | |
| S-FPL52 | 10 | Ohara | |
| S-TIM25 | 9 | Ohara | |
| S-FPM3 | 9 | Ohara | |
| S-BAL35 | 9 | Ohara | |
| S-TIM22 | 9 | Ohara | |
| **S-NBH5** | 9 | Ohara | KZFS-class, **APO-relevant** (negative ΔPgF, paired with FPL51 in Leica APO 35/2) |
| S-NPH1 | 8 | Ohara | |
| S-TIM2 | 8 | Ohara | |
| SF4 | 7 | Schott | |
| S-LAH65 | 7 | Ohara | |
| TAFD30 | 7 | Hoya | |
| S-LAH52 | 7 | Ohara | |
| S-NSL3 | 7 | Ohara | |
| S-TIM28 | 7 | Ohara | |
| S-LAM54 | 7 | Ohara | |
| FCD505 | 7 | Hoya | |
| S-NPH53 | 7 | Ohara | |
| S-BSM14 | 7 | Ohara | |
| SF1 | 6 | Schott | |
| N-LAK8 | 6 | Schott | |
| TAFD25 | 6 | Hoya | |
| S-LAH51 | 6 | Ohara | |
| BSC7 | 6 | Hoya | (currently aliased → S-BSL7) |
| **N-KZFS5** | (used in Leica APO designs) | Schott | KZFS family — **APO-relevant**, negative ΔPgF |
| **K-GFK68** | 1 (Voigtländer L4) | Sumita | Patent-listed, **APO-relevant** |

A handful of high-impact glasses (N-KZFS5, K-GFK68) appear infrequently but matter disproportionately for the marquee APO test cases the chromatic upgrade was designed to fix. Prioritize those alongside the high-frequency entries.

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

PgF is **not** published in the rii.info YAML (only `dPgF` is). Compute PgF for the catalog entry from the Schott normal-line baseline plus dPgF: `PgF ≈ 0.6438 − 0.001682·vd + dPgF`. The catalog's PgF field is decorative — the dispersion engine derives V-channel partial dispersion from the lens-data element's `dPgF`, not from the catalog. If you need vendor-direct PgF (rare), pull from the OHARA/Schott PDF datasheet instead.

The 1e-4 round-trip test will catch any transcription error — never relax the tolerance, fix the source.

## How to Add an Entry — Step by Step

1. **Find the glass in the source vendor's catalog** (PDF, datasheet, or downloaded Excel). Confirm the formula form is the standard six-coefficient Sellmeier:
   $$n^2(\lambda) = 1 + \frac{B_1 \lambda^2}{\lambda^2 - C_1} + \frac{B_2 \lambda^2}{\lambda^2 - C_2} + \frac{B_3 \lambda^2}{\lambda^2 - C_3}$$
   with λ in **micrometres** and C in **micrometres²**. Reject any other formula until you have explicitly converted it.

2. **Transcribe** the six coefficients verbatim into a new entry in `RAW_CATALOG` in [src/optics/glassCatalog.ts](../src/optics/glassCatalog.ts). Keep all digits the source publishes — typically 8–10 significant figures.

3. **Fill in `nd` and `vd`** from the same vendor's published table (not from the lens data file). Provide `PgF` if listed and `code6` if it's a Schott-style 6-digit code.

4. **Cite the source** in the `source` field with enough detail to find it again ("Schott N-FK5 datasheet, Schott AG public, accessed YYYY-MM-DD" or "Ohara optical glass catalog 2024 v3, page N-LAK glasses").

5. **Run the consistency test:**
   ```bash
   npm test -- dispersion.test.ts
   ```
   The first test (`every entry's Sellmeier coefficients reproduce the listed nd within 1e-4`) fails immediately on a bad transcription, naming the offending glass and the diff. Tighten the value or fix the source — never relax the tolerance.

6. **If the glass has a common informal alias** (`BSC7` for `S-BSL7`, `BK7` for `N-BK7`) add it to the `ALIASES` map.

7. **If you've added enough entries** that the LCA readout for the target lens has visibly changed, update [CHROMATIC_DISPERSION_NOTES.md](../CHROMATIC_DISPERSION_NOTES.md) with the new state and add a changelog entry per [agent_docs/changelog.md](changelog.md).

## Pitfalls and Edge Cases

- **Ohara's older "Dispersion Equation"** uses A0..A5 in a different functional form (a polynomial in λ², not a sum of Sellmeier terms). Their modern datasheets publish the standard Sellmeier — confirm you have the right one. The standard form has six numbers, three of which (C1..C3) carry units of μm².
- **λ units.** Some sources tabulate in nm rather than μm. The standard is μm; the catalog evaluator (`evaluateSellmeier`) converts the input nm to μm internally. If a source gives C values around `1e6`, that's in nm² and must be divided by `1e6` before insertion.
- **CaF2 and other crystals** sometimes use a different Sellmeier formulation (e.g. Daimon & Masumura). Convert to the standard form or note the deviation and provide a custom evaluator.
- **Anisotropic crystals** (sapphire, lithium niobate) have wavelength-dependent indices that differ along ordinary vs. extraordinary axes. None are present in the current lens data; this concern is forward-looking only.
- **Vacuum-melt variants** (suffix V or VS, e.g. S-LAH55V, S-LAH55VS) have slightly different coefficients from their non-V forms. Treat as distinct entries.
- **Discontinued glasses** (e.g. some "BAL" and old "F"-series Schott) may not appear in current PDFs. Use the last historical Schott catalog (search "Schott Optical Glass 2014" or earlier) — the coefficients of discontinued glasses are still physical fact.

## When to Stop

The catalog never needs to be exhaustive. Diminishing returns kick in after the top 30 entries — beyond that, each new glass affects fewer than 10 elements across the entire lens library. Stop adding new entries when:

1. The headline regression cases (Voigtländer APO-Lanthar 50/2, Leica APO 35/2 / 43/2) hit Sellmeier on every glass surface.
2. `summarizeDispersionQuality(L)` returns `"sellmeier"` (not `"abbe"`) for the great majority of catalog lenses.
3. Remaining unmatched glasses are genuinely proprietary (Sumita unidentified, "anomalous high-index flint" without a catalog name) — those are Phase 4 territory and should be backfilled per-lens with patent-published `nC`/`nF`/`ng`.
