# Glass Catalog and Near/Close Candidate Audit — 2026-08-21

## Scope

This audit combines two follow-ups to the patent-backed glass coverage work:

1. add first-party Hikari and OHARA catalog rows that recur in unresolved patent prescriptions; and
2. review every unresolved surface that the existing catalog ranked as `near-exact` or `close` before this batch.

The candidate inventory contained **111 surfaces**: 88 `near-exact` and 23 `close`. Each decision retained the
patent-authored refractive index, Abbe number, index-reference line, and any authored partial-dispersion value. Catalog
curves were accepted only inside the existing `Δn <= 0.003` and `Δν <= 2` contract, with the local patent and the
first-party catalog used to distinguish a qualified spectral proxy from a production-material identity.

## First-party catalog additions

| Catalog row | Supplier source | Coordinate / code | Disposition |
|---|---|---|---|
| E-LAKH1 | Hikari 2023 catalog and 2022-07-01 AGF | 1.748099 / 52.304982, 748523 | Exact code-equivalent curve |
| J-PSK03 | Hikari 2023 catalog and 2022-07-01 AGF | 1.603000 / 65.441311, 603654 | Exact coordinate curve |
| J-SFH4 | Hikari 2023 catalog and 2022-07-01 AGF | 1.663820 / 27.346974, 664274 | Exact coordinate and high-partial-dispersion proxy for Nikon SR glass |
| J-LASFH13 | Hikari 2023 catalog and 2022-07-01 AGF | 1.903660 / 31.274235, 904313 | Exact coordinate curve |
| J-LAK02 | Hikari 2023 catalog and 2022-07-01 AGF | 1.670000 / 57.349561, 670574 | Exact coordinate curve |
| J-LASFH6 | Hikari 2023 catalog and 2022-07-01 AGF | 1.806100 / 33.344981, 806333 | Exact coordinate curve; explicit-name resolution only |
| J-SK11 | Hikari 2023 catalog and 2022-07-01 AGF | 1.563840 / 60.706839, 564607 | Exact coordinate curve; explicit-name resolution only |
| BAL7 | OHARA 2026-07-01 AGF | 1.588750 / 51.179278, 589512 | Exact code-equivalent curve |

Codes `806333` and `564607` already have established code-only precedence (`NBFD15` and `S-BAL41`). The new Hikari
rows therefore resolve by explicit name without changing existing code-only behavior.

The targeted pass also applies E-LAKH1 to five `748523` patent surfaces in the AF 85mm, AF 28mm, AF Micro
70–180mm, AF 20–35mm, and RU-W AF 20–35mm designs; BAL7 to the `589512` 360–1200mm surface; J-SFH4 as a
supplier-neutral SR spectral proxy in the Z 70–200mm and Z 135mm designs; and the exact S-TIM22 spelling in the
Z 28mm design. The Z 28mm review rejected two apparent spelling normalizations: its
`1.53172 / 48.78` and `1.80809 / 22.74` elements are represented by J-LLF6 and J-SFH1 proxies because current
S-TIL2 and S-TIH18 are different materials.

## Accepted original candidates — 46 surfaces

| Lens / local patent publication | Surfaces | Catalog disposition | Count |
|---|---|---|---:|
| Contarex Planar 55mm — DE 1,170,157 B | L3 | LF7 class → J-LF7 proxy | 1 |
| Pro-Tessar 35mm — DE 1,089,183 | L1/L6, L2/L3, L5 | LaF2 → N-LAF2; PK1 → PC1; LaK10 → J-LAK10 | 5 |
| Biogon 21mm — US 2,721,499 | L3 | 721503 LaK10 class → J-LAK10 | 1 |
| Fujinon XF 50mm — US 2021/0231927 A1 | L1b/L1c, L1f | 593686 ED → J-PSKH1; NPH → S-NPH4 | 3 |
| Leica Elmarit 28mm / Elmarit-R 35mm / Summicron-R 50mm | L6, L2, L2 | LaF10 → S-BAH28; BaSF6/ZBaF17 → J-BASF6, all evaluated on the patent's e line | 3 |
| AI Nikkor 28mm — US 5,917,663 | L7/L8 | J-LAK02 catalog-equivalent spectral proxies | 2 |
| AI-S Nikkor 50mm — US 4,621,909 | L2 | 796410 class → NBFD2 | 1 |
| Fisheye-Nikkor 6mm — US 3,737,214 | L10 | 796408 class → NBFD2 | 1 |
| Nikkor 105mm — WO 2019/116563 A1 | L33 | J-SF1 proxy; patent `dPgF` retained | 1 |
| AF-S 28–300mm — US 2010/0220400 A1 | L11/L53, L13, L51 | J-LASFH13, J-PSK03, and J-SK11 | 4 |
| AF-S 180–400mm TC-in — WO 2019/131993 A1 | existing J-LASFH6 label | Explicit Hikari curve now resolves | 1 |
| RU-W AF Nikkor 13mm — US 5,579,169 | existing J-LAK02 element, L8 | J-LAK02 and J-PKH1 proxies | 2 |
| Reflex-Nikkor 500mm — US 4,666,259 A | L23 | 796410 class → NBFD2 | 1 |
| Nikkor Z 28mm — WO 2022/071249 A1 | L11, L23, L41 | J-LLF6, J-SFH1, and exact S-TIM22 | 3 |
| Nikkor Z 135mm — WO 2024/147268 A1 | L5/L9, L11/L12/L13/L16 | NBFD25, S-LAH63Q, S-LAH55VS, NBFD30, J-LASF09A | 6 |
| Nikkor Z 58mm — WO 2019/229849 A1 | L1/L2/L6/L7/L9/L13 | J-LASFH9, J-KZFH4, J-PSKH1 ×2, J-KZFH1, J-KZFH9 | 6 |
| Maksutov-Cassegrain reference fixture | meniscus | N-BK7 reference crown | 1 |
| Grandagon-N 75mm — DE 26 35 415 B1 | L1/L3/L5/L6 | K5 ×2, E-BAF8, S-TIH18, evaluated on the patent's e line | 4 |
| **Total** |  |  | **46** |

Where a patent authored `dPgF`, the value remains authoritative even when the catalog curve supplies wavelength
indices. No accepted row asserts that the catalog supplier manufactured the production lens unless the source itself
establishes that identity.

## Retained unresolved candidates — 65 surfaces

| Lens | Surfaces | Count | Why no curve was assigned |
|---|---|---:|---|
| Agfa Color-Telinear 90mm | L5 | 1 | Historical BAM5 family label does not uniquely identify BAF5 |
| Canon 50mm f/1.2 | L1/L6/L7 | 3 | Five supplier candidates share the 694535 neighborhood |
| Canon EF 24mm f/1.4 L II | E2/E4/E9/E13 | 4 | Moldable-crown, ED, and dense-lanthanum coordinates remain multi-supplier; ED partial-dispersion evidence is non-unique |
| Carl Zeiss Jena Pancolar 50mm | L3 | 1 | Jena in-house 672323 coordinate has several current dense-flint neighbors |
| Carl Zeiss Jena Sonnar 50mm | L5/L6 | 2 | Vintage light-flint and SSK51 classes have several equivalent modern curves |
| Pro-Tessar 35mm | L7 | 1 | LLF7 label conflicts with the stored 1.54869 / 45.4 coordinate |
| Biogon 21mm | L8 | 1 | 642581 LaK/SK crown has three plausible supplier families |
| Fujifilm X100V 23mm | L23 | 1 | Precision-molded high-index coordinate has five close candidates |
| Fujinon XF 50mm | L1e/L1g/L2a/L2c/L2e | 5 | Remaining LaK, NPH, NbF, and TiF families are non-unique |
| Kodak Enlarging Ektar 100mm | L4 | 1 | Vintage light-flint class has four plausible descendants |
| Leica Elmar-M 135mm | L1/L5 | 2 | Patent e-line values do not establish unique d-line catalog identities |
| Leica Elmarit 28mm | L3/L4/L7 | 3 | LaF21 and 813252 e-line/high-index rows remain non-unique |
| Leica Elmarit-M 135mm | L1/L2/L5 | 3 | Proprietary/e-line SK16 and SF8 classes remain multi-supplier |
| Leica Elmarit-R 35mm | L3/L6/L7 | 3 | BaF/BaF13/LAK9 e-line families remain non-unique |
| Leica Macro-Elmarit-R 60mm | L1/L3 | 2 | LAF2 and dense-flint e-line families remain non-unique |
| Leica Summicron-R 50mm | L5/L6 | 2 | LaF21 e-line class does not establish a supplier curve |
| Minolta AF 35–105mm v2 | L4/L12 | 2 | Dense-lanthanum boundary and thin resin layer have multiple candidates |
| Nikon AF-S 58mm design candidate | Ldn | 1 | KZFS2-type coordinate has two close but distinct catalog curves |
| Nikon AF-S 14–24mm | L5/L13 | 2 | Best nd/vd and best authored-partial-dispersion candidates disagree |
| Nikon AF-S 28–300mm | L21 | 1 | J-LASFH2 neighborhood remains a three-way supplier ambiguity |
| Nikon Z 24–50mm | L1a | 1 | 696555 barium-crown coordinate has five close candidates |
| Nikon Z 35mm f/1.2 | L44 | 1 | 624584 crown has four plausible catalog families |
| Nikon Z 40mm | L21 | 1 | Patent 1.75520 / 27.57 does not match current PBM18Y; prior supplier label rejected |
| Ultra-Micro-Nikkor 29.5mm | L2/L4/L5/L7 | 4 | Historical e-line F5/SF8/LAK9 families do not identify d-line curves |
| Nikon Z 85mm | L12 | 1 | No matching local patent PDF; FCD705 remains only a candidate |
| Panasonic Leica 15mm | L3/L7 | 2 | No matching local patent PDF; high-index candidates remain non-unique |
| Panasonic 24–105mm | L8 | 1 | 688311 class has five equivalent dense-flint candidates |
| Grandagon-N 65mm | L4/L5/L6 | 3 | Patent e-line BaK/BaF/SK families remain non-unique |
| Grandagon-N 75mm | L2 | 1 | Legacy dense-flint e-line coordinate has five plausible curves |
| Samyang 18mm | L81 | 1 | No matching local patent PDF; lanthanum-flint class remains non-unique |
| Samyang 35–150mm | L21 | 1 | No matching local patent PDF; proprietary crown class remains non-unique |
| Sigma DP2x 24mm | L5 | 1 | S-TIH/FD family has five interchangeable candidates |
| Sony FE 14mm | L2/L13/L14 | 3 | Patent e-line values do not establish unique d-line catalog identities |
| Voigtländer Ultron 50mm | L4/L5/L6 | 3 | No matching local patent PDF; historical BaF/LaK/LaF families remain non-unique |
| **Total** |  | **65** | |

## Guardrails and result interpretation

- No patent refractive index, Abbe number, partial-dispersion value, radius, thickness, semi-diameter, movement, or
  aperture datum was changed.
- The catalog tolerances were not relaxed. A numerical near-match alone is not treated as a material identity.
- Supplier-neutral `catalog spectral proxy` labels distinguish chromatic modeling from production-glass attribution.
- The Z 40mm correction intentionally reduces false confidence: its old PBM18Y label was incompatible with OHARA's
  published PBM18Y coordinate and now remains unresolved.
- Generated coverage counts measure modeled spectral curves, not proof of the production supplier.

## Verified outcome

- Strict Sellmeier coverage: **6419 / 6940 (92.5%)**, up from 6364 / 6940 (91.7%).
- Trusted chromatic coverage: **6433 / 6940 (92.7%)**, up from 6378 / 6940 (91.9%).
- Net improvement: **55 surfaces** in both strict and trusted coverage.
- Native e-line catalog coverage: **37 / 75** surfaces.
- Catalog mismatch scan: **0 mismatches** across 6419 resolved surfaces.
- Six-digit review queue: **0 active unreviewed elements**; retained rows have an explicit disposition or audit hit.
- Passed `npm run generate:glass-reports`, `npm run typecheck`, `npm run format:check`, `npm run lint`,
  `npm run test` (259 files, 2522 tests), and `npm run build` (1152 prerendered routes).
