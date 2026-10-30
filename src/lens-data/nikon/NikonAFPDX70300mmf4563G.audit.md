# Audit Log — Nikon AF-P DX NIKKOR 70-300mm f/4.5-6.3G ED VR

Patent: US 2021/0026133 A1, Example 4 (Table 4)  
Catalog version: local working tree, 2026-05-19

## 2026-05-19 — Six-digit glass-code backfill review

### Patent evidence

Reviewed `patents/US20210026133A1.pdf`, Example 4 / Table 4. The relevant glass rows are:

| Element / surface      | Patent nd | Patent νd | Patent PgF / θgF | Disposition                                                                      |
| ---------------------- | --------: | --------: | ---------------: | -------------------------------------------------------------------------------- |
| L11 / S1               |   1.51680 |     63.88 |            0.536 | No exact public coefficient-backed match; retained `517639` code.                |
| L12 / S3               |   1.61155 |     31.26 |            0.618 | No exact public coefficient-backed match; retained `612313` code and patent θgF. |
| L13 / S4               |   1.51742 |     52.20 |            0.558 | Relabeled to HOYA E-CF6 / `517522`.                                              |
| L21 / S6               |   1.69680 |     55.52 |            0.543 | Relabeled to OHARA S-LAL14 / `697555`.                                           |
| L22 / S7               |   1.80809 |     22.74 |            0.629 | Added Hikari J-SFH1 / `808227`.                                                  |
| L23 / S9 and L42 / S14 |   1.85026 |     32.35 |            0.595 | Added Hikari J-LASF021 / `850324`.                                               |
| L31 / S11              |   1.58913 |     61.22 |            0.540 | Relabeled to OHARA S-BAL35 / `589612`.                                           |
| L41 / S13              |   1.49700 |     81.73 |            0.537 | Added Hikari J-FK01A / `497817`.                                                 |
| L43 / S16              |   1.48749 |     70.31 |            0.529 | Added Hikari J-FK5 / `487703`.                                                   |
| L44 / S19              |   1.80100 |     34.92 |            0.585 | Added Hikari J-LAF016 / `801349`.                                                |
| L45 / S20              |   1.70000 |     48.11 |            0.560 | Added Hikari J-LAF01 / `700481`.                                                 |
| L46 / S22              |   1.60342 |     38.03 |            0.583 | Relabeled to Schott F5 / `603380`.                                               |
| L47 / S24              |   1.77250 |     49.62 |            0.552 | Relabeled to OHARA S-LAH66 / `773496`.                                           |

### Catalog-search disposition

- Searched the Nikon/Hikari 2023 optical glass catalog, Hikari individual datasheets, public OHARA/SCHOTT/HOYA catalog data, and refractiveindex.info-backed entries.
- Added coefficient-backed Hikari entries for J-FK5, J-FK01A, J-SFH1, J-LAF01, J-LAF016, and J-LASF021 in `glassCatalogData.ts`.
- L11 / `517639` and L12 / `612313` remain unresolved after public catalog search. Their labels now preserve unbroken six-digit codes for future auto-upgrade.

### Changes made

- Updated all catalog-backed glass labels in `NikonAFPDX70300mmf4563G.data.ts`.
- Updated `NikonAFPDX70300mmf4563G.analysis.md` so the element narratives and glass budget reflect the new catalog identifications.

## 2026-10-29 — Fresh figure, concave-end and glass reinspection

Directly inspected original `patents/US20210026133A1.pdf`: Figure 7 on PDF page 10 at 600 dpi, Table 4 on page 34, and the line/partial-dispersion definitions on pages 25 and 28 (paragraphs 33–37, 78). `pdfimages -list` identifies a 300 ppi source raster; the 600 dpi render adds no native evidence. Source Figure 7 is the infinity wide configuration, with roughly 18.3 native px/mm from its first-to-last-vertex span.

Every air/glass face and four cemented interfaces was inspected. None shows a resolved short vertical cap-to-rim land. In particular S6/S9 near-flat concave fronts and S24 on the final negative meniscus meet their exterior edges without such a break. Horizontal connecting edges, bracket strokes and leaders are excluded. No speculative extra trim or opaque height extension is added. Continuous inferred rims S10/S15/S16/S17 instead rise 10.8/11.4/11.4/10.8 → 11.1/11.5/11.5/11.3 mm, the minimal one-decimal heights proposed by `audit:aperture --raise`. These <5% changes preserve the source’s continuous caps and introduce no land. The proposal lists no square-rim companion change for these existing unequal-face outlines. Canonical checks pass without changing policy.

All fourteen nd/νd pairs and their d-line convention are retained. Thirteen compatible catalog curves remain selected, with supplier/melt identity qualified; L11 now correctly describes its available J-BK7-compatible curve rather than an obsolete unresolved status. L12 remains unresolved. Table 4 actually publishes θgF for every element; these were previously omitted from runtime dispersion. Preserve all fourteen through `ΔPgF = θgF − (0.6438 − 0.001682νd)`:

| Element | Retained source nd / νd | Source θgF | Added engine ΔPgF | Compatible spectral curve |
| ------- | ----------------------: | ---------: | ----------------: | ------------------------- |
| L11     |         1.51680 / 63.88 |      0.536 |       -0.00035384 | J-BK7                     |
| L12     |         1.61155 / 31.26 |      0.618 |       +0.02677932 | Unresolved source glass   |
| L13     |         1.51742 / 52.20 |      0.558 |       +0.00200040 | E-CF6                     |
| L21     |         1.69680 / 55.52 |      0.543 |       -0.00741536 | S-LAL14                   |
| L22     |         1.80809 / 22.74 |      0.629 |       +0.02344868 | J-SFH1                    |
| L23     |         1.85026 / 32.35 |      0.595 |       +0.00561270 | J-LASF021                 |
| L31     |         1.58913 / 61.22 |      0.540 |       -0.00082796 | S-BAL35                   |
| L41     |         1.49700 / 81.73 |      0.537 |       +0.03066986 | J-FK01A                   |
| L42     |         1.85026 / 32.35 |      0.595 |       +0.00561270 | J-LASF021                 |
| L43     |         1.48749 / 70.31 |      0.529 |       +0.00346142 | J-FK5                     |
| L44     |         1.80100 / 34.92 |      0.585 |       -0.00006456 | J-LAF016                  |
| L45     |         1.70000 / 48.11 |      0.560 |       -0.00287898 | J-LAF01                   |
| L46     |         1.60342 / 38.03 |      0.583 |       +0.00316646 | F5                        |
| L47     |         1.77250 / 49.62 |      0.552 |       -0.00833916 | S-LAH66                   |

The converted digits are arithmetic precision from θgF rounded to three decimals, not an eight-place source measurement. Source θgF controls g while the compatible catalog curve supplies C/d/F. A temporary runtime check reproduces each printed ratio to numerical precision. L12’s PgF changes from the unsourced normal-line 0.59122068 to the printed 0.618. Its `apd: "patent"` is retained because paragraphs 33–37 explicitly discuss the specified material anomaly and paragraph 119 maps the specified lens to L12. Other published ratios alone do not upgrade their APD tags. No individual line indices are printed or invented.

Focused `audit:surface` and `audit:image-circle` pass. Actual SVG paths at focus/zoom 0, 0.5 and 1 are finite with zero hidden trimming; rendered montages were inspected. The shared dispersion and glass-resolution parity suites pass (2 files / 93 tests). A temporary source-coordinate/resolver check confirms all 45 media in this triad, 44 compatible catalog curves and the one deliberately unresolved L12; `assertCatalogConsistent` passes. No R/d, aspheric coefficient, gap, focus, zoom or iris control was changed. The final aperture audit passes wide and middle within 3%, removing the baseline S17 wide clip. Only S8 tele remains: effective f/6.73 versus nominal 6.3. The complete `--raise` proposal needs S8 10.8898075 and S9 10.8924860 mm, rounded to 10.9. Testing both at 10.9 rejects the pair at every zoom: sag intrusion 2.0813621 mm exceeds the actual 2.038 mm gap by 0.0433621 mm, as well as the default 1.8342 mm intrusion allowance. Solving their literal spherical profiles gives contact radius 10.7868941 mm and default 90% policy radius 10.2379567 mm. Thus even removing the policy margin could not admit the nominal beam. Both caps stay 10.2 mm; the source figure has no resolved flat land there, and a cut short of their required optical radii cannot pass the beam. Source R/d, nominal/iris controls and tolerances are unchanged. The printed telephoto f-number is 6.494; this physical bound does not establish an error in the source prescription or a production identity.
