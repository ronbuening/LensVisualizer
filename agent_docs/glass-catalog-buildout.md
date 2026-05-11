# Glass Catalog Buildout

A focused follow-up to Phase 2 of the chromatic dispersion overhaul ([CHROMATIC_DISPERSION_NOTES.md](../CHROMATIC_DISPERSION_NOTES.md)). The chromatic ray-trace now consults a Sellmeier glass catalog at [src/optics/glassCatalog.ts](../src/optics/glassCatalog.ts) when an element's `glass` string resolves to a known entry; otherwise it falls back to dPgF-corrected indices, measured `nC`/`nF`/`ng` line indices, or the legacy Abbe approximation.

The catalog currently has **180 verified entries** (38 after Phase 2, +15 in Phase 3 Apr 2026, +12 in Phase 4 Apr 2026, +27 in Phase 5 May 2026, +19 in Phase 6 May 2026, +4 in Phase 7 May 2026, +14 in Phase 8 May 2026, +20 in Phase 9 May 2026, +20 in Phase 10 May 2026, +11 in Phase 11 May 2026). This document is the playbook for further expansion. The bottleneck is not infrastructure — the dispersion engine, resolver, validator, and tests are all in place — it is the careful sourcing of vendor-published dispersion coefficients.

## Why So Few Entries To Start With

The first cut of the catalog had nine entries. Six were wrong: when the Sellmeier coefficients were validated against the listed `nd` at 587.5618 nm via `assertCatalogConsistent`, four diverged by 5e-3 to 2e-2 — well outside any reasonable transcription tolerance. The values came from memory and were unreliable.

The conclusion drove the design: **every entry must round-trip through `assertCatalogConsistent` (tolerance 1e-4) before being committed.** This is enforced by the unit test `every entry's Sellmeier coefficients reproduce the listed nd within 1e-4` in [__tests__/dispersion.test.ts](../__tests__/dispersion.test.ts). A bad transcription fails CI.

## Prioritized Glasses to Add

Frequency derived from `glass:` declarations across all 123 lens data files (1413 declarations total). The top 50 covers the lion's share. Asterisks mark entries already in the catalog.

| Glass | Lens-element occurrences | Vendor | Notes |
|---|---|---|---|
| ★ **S-FPL51** | 74 | Ohara | Highest priority — primary ED crown across most APO designs |
| ★ S-LAH58 | 52 | Ohara | High-index lanthanum, ubiquitous |
| ★ S-TIH53 | 31 | Ohara | High-dispersion flint |
| ★ S-NPH2 | 31 | Ohara | Niobophosphate flint |
| ★ S-TIH6 | 30 | Ohara | |
| ★ S-LAH79 | 26 | Ohara | Voigtländer APO-Lanthar L2 |
| ★ S-LAH55V | 26 | Ohara | Vacuum melt variant |
| ★ S-BSL7 | 22 | Ohara | (in catalog) |
| ★ S-LAL18 | 21 | Ohara | |
| ★ S-LAH65V | 20 | Ohara | Voigtländer APO-Lanthar L8 |
| ★ SF6 | 19 | Schott | Legacy lead flint |
| ★ S-FSL5 | 19 | Ohara | Fluor crown |
| ★ S-TIH14 | 18 | Ohara | |
| ★ S-PHM52 | 18 | Ohara | Phosphate crown with notable +ΔPgF |
| ★ S-FPM2 | 17 | Ohara | Fluorophosphate ED |
| ★ S-LAL14 | 16 | Ohara | |
| ★ S-LAH66 | 15 | Ohara | |
| ★ N-BK7 | 14 | Schott | (in catalog) |
| ★ FCD1 | 13 | Hoya | ED, FPL51-equivalent |
| ★ S-BAL42 | 12 | Ohara | |
| ★ S-FPL53 | 12 | Ohara | Super ED — defining glass for many APO triplets |
| ★ S-LAH63 | 11 | Ohara | |
| ★ S-LAM66 | 11 | Ohara | |
| ★ S-LAH55 | 11 | Ohara | |
| ★ S-TIM35 | 11 | Ohara | |
| ★ S-LAH53 | 10 | Ohara | |
| ★ S-FPL52 | 10 | Ohara | |
| ★ S-TIM25 | 9 | Ohara | |
| ★ S-FPM3 | 9 | Ohara | |
| ★ S-BAL35 | 9 | Ohara | |
| ★ S-TIM22 | 9 | Ohara | |
| ★ **S-NBH5** | 9 | Ohara | KZFS-class, **APO-relevant** (negative ΔPgF, paired with FPL51 in Leica APO 35/2) |
| ★ S-NPH1 | 8 | Ohara | |
| ★ S-TIM2 | 8 | Ohara | |
| ★ SF4 | 7 | Schott | |
| ★ S-LAH65 | 7 | Ohara | |
| ★ TAFD30 | 7 | Hoya | |
| ★ S-LAH52 | 7 | Ohara | |
| ★ S-NSL3 | 7 | Ohara | |
| ★ S-TIM28 | 7 | Ohara | Phase 4 addition |
| ★ S-LAM54 | 7 | Ohara | |
| ★ FCD505 | 7 | Hoya | |
| ★ S-NPH53 | 7 | Ohara | |
| ★ S-BSM14 | 7 | Ohara | Phase 4 addition |
| ★ SF1 | 6 | Schott | |
| ★ N-LAK8 | 6 | Schott | |
| TAFD25 | 6 | Hoya | **Skip for now** — Hoya catalog TAFD25 is nd=1.90366/vd=31.32, while current lens annotations use several unrelated nd/vd regions; relabel per lens instead of adding a broad resolver target |
| ★ S-LAH51 | 6 | Ohara | |
| ★ BSC7 | 6 | Hoya | (aliased → S-BSL7) |
| ★ **N-KZFS5** | (used in Leica APO designs) | Schott | KZFS family — **APO-relevant**, negative ΔPgF |
| ★ **K-GFK68** | 1 (Voigtländer L4) | Sumita | Patent-listed, **APO-relevant** |

**Phase 11 additions** (May 2026 — exact six-digit code-family backfill from the remaining unresolved report; all entries round-trip through `assertCatalogConsistent`):

| Glass | Vendor | Unlocks | Notes |
|---|---|---:|---|
| ★ TAFD65 | Hoya | 2 | Exact code-family target for `051269`; ultra-high-index dense flint in Canon RF 70-200 f/2.8 |
| ★ F5 | Schott | 2 | Legacy flint code `603380`; resolves Nikon Z 85mm f/1.8 code-only annotations |
| ★ E-FDS2 | Hoya | 1 | Exact code-family target for `003193`; ultra-high-index dense flint |
| ★ M-FCD500 | Hoya | 1 | ED fluorophosphate crown `553717` |
| ★ PBL25 | Ohara | 1 | Exact code-family target for `581408`; formula-3 Ohara entry |
| ★ E-F1 | Hoya | 1 | Dense flint `626357` |
| ★ LAC12 | Hoya | 1 | Lanthanum crown `678555`; historical LaK-style code match |
| ★ S-LAM59 | Ohara | 1 | Lanthanum crown `697485` |
| ★ N-KZFS8 | Schott | 1 | KZFS-class short flint `720347`; exact match for code-only Nikon annotation |
| ★ S-LAL10 | Ohara | 1 | Lanthanum light crown `720502` |
| ★ SF10 | Schott | 1 | Heavy flint `728284`; exact match for Nikon Z 24-70 f/2.8 patent-code label |

**Phase 10 additions** (May 2026 — research pass over the current unresolved-glass, catalog-mismatch, and six-digit code-family queues; all entries round-trip through `assertCatalogConsistent`):

| Glass | Vendor | Unlocks / focus | Notes |
|---|---|---:|---|
| ★ FDS18 | Hoya | 4 | Exact code-family target for `946180`; Hoya formula-3 data is a better d-code match than the Phase 9 CDGM `H-ZF88` 946179 entry |
| ★ NBFD3 | Hoya | 9 | High-frequency named token; catalog guard still rejects existing annotations whose stored nd/vd do not match the real Hoya glass |
| ★ NBFD11 | Hoya | 2 | NBFD family coverage for modern high-index groups |
| ★ TAFD25 | Hoya | 7 | Sourceable HOYA TAFD-class glass; broad resolver hits remain protected by the nd consistency guard |
| ★ TAF5 | Hoya | 3 | Completes a common high-index lanthanum/tantalum family token |
| ★ E-FD4 | Hoya | 2 | Dense flint formula-3 entry from the HOYA Zemax catalog |
| ★ E-FD5 | Hoya | 3 | Dense flint formula-3 entry; common equivalent-family reference in recent analyses |
| ★ E-FL5 | Hoya | 2 | Medium flint code-family coverage for `581409` annotations |
| ★ S-BAL2 | Ohara | 3 | Frequently cited barium light crown in Leica/Olympus-style prescriptions |
| ★ S-LAM55 | Ohara | 3 | Lanthanum crown; adds exact vendor constants for current named-token labels |
| ★ S-TIH10 | Ohara | 3 | Dense flint `728285`; high-priority unresolved named token |
| ★ S-BSM28 | Ohara | 2 | Barium crown `618498`; helps surface relabel candidates |
| ★ S-BSM71 | Ohara | 2 | Barium crown `649530`; nearby S-BSM family annotations now have a direct catalog target |
| ★ S-LAL13 | Ohara | 2 | Lanthanum light crown `694532` |
| ★ S-LAM3 | Ohara | 2 | Exact code-family target for `717479` |
| ★ S-LAM52 | Ohara | 2 | Lanthanum crown `720437` |
| ★ J-PKH1 | Hikari | 2 | Exact Hikari code-family target for `519699`; uses published power-series coefficients |
| ★ Q-SK52S | Hikari | 2 | Exact code-family target for `583595`; useful for older Nikon-style code-only prescriptions |
| ★ J-LASKH2 | Hikari | 2 | Exact code-family target for `755523`; Hikari power-series entry |
| ★ J-LASF014 | Hikari | 2 | Exact code-family target for `788474`; Hikari power-series entry |

**Phase 9 additions** (May 2026 — named-token coverage plus six-digit code-family backfill; all entries round-trip through `assertCatalogConsistent`):

| Glass | Vendor | Unlocks | Notes |
|---|---|---:|---|
| ★ S-BSM16 | Ohara | 4 | Clean named-token match for nd≈1.62041 / νd≈60.29 annotations |
| ★ S-TIH13 | Ohara | 3 | Dense flint; new broad hits are now visible in mismatch reports when existing annotations were only approximate |
| ★ S-NBH53V | Ohara | 3 | Vacuum-melt NBH variant |
| ★ S-TIH23 | Ohara | 3 | Dense flint 785/263 |
| ★ N-SK5 | Schott | 3 | Legacy `SK5` alias added |
| ★ N-BAF10 | Schott | 2 | Barium flint 670/471 |
| ★ N-LAF34 | Schott | 2 | High-index lanthanum 773/496 |
| ★ N-LAK14 | Schott | 2 | Lanthanum crown 697/554 |
| ★ E-FD2 | Hoya | 3 | Formula-3 dense flint 648/338 |
| ★ E-FD8 | Hoya | 2 | Formula-3 dense flint 689/312 |
| ★ TAFD35 | Hoya | 3 | Code-family 911353; resolves Nikon high-index lanthanum dense-flint annotations |
| ★ LAC13 | Hoya | 4 | Code-family 694533; discontinued special glass but Hoya AGF data is public |
| ★ S-LAH96 | Ohara | 4 | Code-family 764485; high-index lanthanum glass matching the patent nd/vd cluster |
| ★ H-ZF88 | CDGM | 2 | Named 946/180-class dense flint; official CDGM d-code is 946179, so code-only 946180 labels remain unresolved |
| ★ J-PSKH1 | Hikari | 10 | Code-family 593679; Hikari power-series entry, not a standard six-term polynomial |
| ★ J-PSKH4 | Hikari | 6 | Code-family 593670; Hikari power-series entry |
| ★ J-KZFH9 | Hikari | 4 | Code-family 738323; sourced from Hikari 2023 catalog |
| ★ J-LAK10 | Hikari | 3 | Code-family 720503; Hikari power-series entry |
| ★ J-LASFH9 | Hikari | 3 | Code-family 903357; older Hikari type now superseded by J-LASFH9A, but the 2012 catalog gives the exact d-code |
| ★ J-LASFH15 | Hikari | 2 | Code-family 950294; high-index dense flint |

Phase 9 deliberately left several high-frequency names unresolved because their public catalog constants did not match all current lens annotations' nd/vd clusters closely enough for an immediate broad resolver target. Phase 10 added many of those real vendor entries after confirming the dispersion cascade's nd guard rejects bad annotations before Sellmeier is used. Remaining code-family research is still led by `744495`, `051269`, and a misleading `159319` token that appears to be shorthand for `1.59319/67.90` rather than a true six-digit d-code.

**Phase 8 additions** (May 2026 — clean named tokens from the unresolved-glass report; ambiguous high-frequency tokens such as NBFD3, S-NPH7, and TAFD25 remain deferred for per-lens patent relabeling):

| Glass | Vendor | Occurrences before add | Notes |
|---|---|---:|---|
| ★ S-LAH93 | Ohara | 5 | High-index lanthanum; resolves repeated modern mirrorless annotations |
| ★ S-TIH11 | Ohara | 5 | Dense flint; several annotations also mention Schott SF10/N-SF10-class equivalents |
| ★ S-TIL25 | Ohara | 5 | Lightweight flint; some current labels are now visible mismatch/relabel candidates |
| ★ FC5 | Hoya | 4 | Fluor crown; legacy/SLD-style low-dispersion coverage |
| ★ S-BAH27 | Ohara | 4 | Barium crown |
| ★ S-NBH52V | Ohara | 4 | Vacuum-melt NBH variant; distinct from S-NBH52 |
| ★ S-TIH53W | Ohara | 4 | Improved-transmittance W variant sharing optical constants with S-TIH53 |
| ★ E-FD15 | Hoya | 5 | Formula-3 polynomial dense flint; broad resolver hits now need relabel review |
| ★ N-FK5 | Schott | 3 | Legacy FK5 alias added; fluorcrown counterpart to Hoya FC5 |
| ★ S-BAH28 | Ohara | 3 | Barium crown |
| ★ S-LAL59 | Ohara | 3 | Lanthanum light crown |
| ★ S-TIL27 | Ohara | 3 | Lightweight flint; some current labels are now visible mismatch/relabel candidates |
| ★ S-TIL6 | Ohara | 3 | Lightweight flint |
| ★ TAFD5F | Hoya | 3 | Formula-3 polynomial high-index lanthanum/tantalum flint |

**Phase 7 additions** (May 2026 — first pass from the latest unresolved-token priority list):

| Glass | Vendor | Occurrences | Notes |
|---|---|---|---|
| ★ S-LAH63Q | Ohara | 4 | Q/thermal variant; distinct coefficients from S-LAH63; matches low-Tg asphere annotations |
| ★ S-LAH65VS | Ohara | 3 | VS vacuum-melt variant; distinct from S-LAH65V |
| ★ S-NBM51 | Ohara | 3 | KZFS-class short flint; added after removing one incorrect Nikon S-NBM51 label whose nd/vd did not match |
| ★ TAFD40 | Hoya | 3 | Formula-3 polynomial entry; supports nd≈2.00069 high-index APD surfaces |

**Phase 5 additions** (sourced from survey of unresolved glasses across all lens files, May 2026 — all from Ohara or Schott Zemax catalog via refractiveindex.info):

| Glass | Vendor | Occurrences | Notes |
|---|---|---|---|
| ★ S-TIH18 | Ohara | 5 | Dense flint 722/292 |
| ★ S-LAM51 | Ohara | 5 | Lanthanum crown |
| ★ S-BAM4 | Ohara | 5 | Barium flint |
| ★ S-BAL14 | Ohara | 5 | Barium light crown |
| ★ S-NBH56 | Ohara | 4 | NBH dense flint |
| ★ S-NBH55 | Ohara | 4 | NBH dense flint 800/298 |
| ★ S-LAH89 | Ohara | 4 | LAH family 852/408 |
| ★ S-LAH60 | Ohara | 4 | LAH family 834/372 |
| ★ S-LAH55VS | Ohara | 4 | VS vacuum-melt variant of S-LAH55V |
| ★ S-NBH8 | Ohara | 3 | NBH dense flint |
| ★ S-TIM5 | Ohara | 3 | Dense flint |
| ★ S-LAL8 | Ohara | 3 | Lanthanum light crown |
| ★ S-NSL5 | Ohara | 3 | Light crown |
| ★ N-SK14 | Schott | 3 | Lanthanum crown 603/606; alias SK14 added |
| ★ S-TIM27 | Ohara | 2 | Dense flint |
| ★ S-TIH4 | Ohara | 2 | Dense flint |
| ★ S-NPH4 | Ohara | 2 | Ultra-high-index dense flint |
| ★ S-LAH64 | Ohara | 2 | LAH family |
| ★ S-LAH60V | Ohara | 2 | Vacuum-melt variant of S-LAH60 |
| ★ S-LAH97 | Ohara | 2 | LAH family |
| ★ S-LAL9 | Ohara | 2 | Lanthanum light crown |
| ★ S-NBH51 | Ohara | 2 | NBH dense flint |
| ★ S-NBH52 | Ohara | 2 | NBH dense flint |
| ★ S-BSM18 | Ohara | 2 | Barium crown |
| ★ S-BSM81 | Ohara | 2 | Barium crown |
| ★ S-LAM2 | Ohara | 2 | Lanthanum crown |
| ★ N-SK10 | Schott | 2 | Barium crown; alias SK10 added |
| NBFD3 | Hoya | 8 | **Skip for direct add** — Hoya catalog NBFD3 is nd=1.80450/vd=39.63, but current annotations span several nd/vd regions; relabel or mark unmatched per lens first |
| ★ TAFD40 | Hoya | 3 | Added in Phase 7 as formula-3 polynomial |
| S-TIF6 | Ohara | 2 | **Skip** — not in refractiveindex.info 2017 catalog |
| S-NPH7 | Ohara | 6 | **Skip for direct add** — public Ohara tables list S-NPH7 as nd=1.77830/vd=23.91, but current annotations use high-index nd≈2.0 values; needs per-lens relabeling |
| N-SK18 | Schott | 2 | **Skip** — not in refractiveindex.info 2017 catalog |

**Phase 4 additions not in the original table** (sourced from survey of 127 lens files, Apr 2026):

| Glass | Vendor | Notes |
|---|---|---|
| ★ N-SK16 | Schott | ~20 surfaces; aliases SK16 → N-SK16, BACD5 → N-SK16 |
| ★ SF2 | Schott | ~5–7 surfaces; legacy lead flint |
| ★ SF57 | Schott | alias SF57/N-SF57 → S-TIH53; ~11 surfaces |
| ★ TAFD37A | Hoya | 2 surfaces in Voigtländer Nokton X 50mm; Sellmeier-1 fit to formula-3 polynomial |
| ★ TAFD37 | Hoya | future coverage; distinct Sellmeier from TAFD37A |
| ★ TAFD33 | Hoya | 2 surfaces in Ricoh GR III 28mm |
| ★ F2 | Schott | future coverage — legacy lead flint for pre-1990 designs |
| ★ N-SK11 | Schott | future coverage — barium crown for Zeiss zoom designs |
| ★ N-FK51A | Schott | future coverage — fluorcrown, APO-relevant (+ΔPgF) |
| ★ N-KZFS4 | Schott | future coverage — KZFS family, APO-relevant (negative ΔPgF) |
| ★ N-LAK22 | Schott | future coverage — lanthanum crown for compact zooms |
| S-LAH99 | Ohara | **Deferred** — not in rii.info 2017 catalog; requires direct Ohara source; unlocks ~2 surfaces in LeicaAPO43 |

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

2. **Transcribe** the coefficients verbatim into a new entry in `RAW_CATALOG` in [src/optics/glassCatalogData.ts](../src/optics/glassCatalogData.ts). Keep all digits the source publishes — typically 8–10 significant figures.

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
- **Six-digit codes are not vendor names.** They encode rounded nd/νd and can describe equivalent glasses from multiple makers. Prefer a vendor-canonical name when the lens annotation includes one; for code-only patent labels, only add a `code6` mapping when the sourced catalog constants match the stored patent nd/vd cluster closely.
- **Not every six-digit-looking token is a glass code.** Strings like `159319/6790` may be compact nd/vd shorthand (`1.59319 / 67.90`) rather than a d-code. Relabel those annotations before adding catalog aliases.

## When to Stop

The catalog never needs to be exhaustive. Diminishing returns kick in after the top 30 entries — beyond that, each new glass affects fewer than 10 elements across the entire lens library. Stop adding new entries when:

1. The headline regression cases (Voigtländer APO-Lanthar 50/2, Leica APO 35/2 / 43/2) hit Sellmeier on every glass surface.
2. `summarizeDispersionQuality(L)` returns `"sellmeier"` (not `"abbe"`) for the great majority of catalog lenses.
3. Remaining unmatched glasses are genuinely proprietary (Sumita unidentified, "anomalous high-index flint" without a catalog name), or are catalog names used inconsistently across multiple nd/vd regions (notably NBFD3, TAFD25, and the current S-NPH7 annotations), or are absent from the rii.info 2017 archive — those should be resolved per lens or backfilled with patent-published `nC`/`nF`/`ng`.

For per-lens audits that consume the catalog (relabeling, mismatch resolution, `dPgF`/line-index enrichment), follow [lens-patent-audit.md](lens-patent-audit.md).
