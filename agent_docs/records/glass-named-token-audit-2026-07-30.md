# Named Glass Token Audit — 2026-07-30

## Scope

This pass audited every catalog-style token reported by Sweep 2B of
`glass-coverage-opportunities.generated.md`. The stored patent coordinates remain authoritative. A vendor name was
accepted only when a first-party coefficient row reproduced the stored reference index and Abbe number inside the
runtime compatibility window.

## First-party coefficient additions

| Entry | Vendor source | Published coordinate | Use |
|---|---|---:|---|
| J-LAF04 | Hikari Optical Glass Catalog 2025-06 | 1.757000 / 47.86 | Olympus 24mm f/2 |
| S-BAL50 | OHARA all-products AGF 2026-07-01 | 1.559625 / 61.172671 | Canon EF 50mm f/1.0 |
| FCD600 | HOYA AGF 2026-07-07 | 1.59410 / 60.47 | Nikon Z 100-400mm |
| NBFD26 | HOYA AGF 2026-07-07 | 1.83401 / 25.97 | Laowa 58mm Macro |
| H-BaF6 | CDGM Optical Glass Data Sheet 2021-09 | 1.60801 / 46.20 | Enna Lithagon 24mm |
| H-K9L | CDGM Optical Glass Data Sheet 2021-09 | 1.51680 / 64.20 | Laowa 15mm Macro |
| H-ZF1 | CDGM Optical Glass Data Sheet 2021-09 | 1.64769 / 33.84 | Laowa 15mm Macro |
| H-LaF6LA | CDGM Optical Glass Data Sheet 2021-09 | 1.75700 / 47.71 | Fujifilm GF 20-35mm |

## Relabel policy

- Exact first-party names were retained when their coefficients reproduced the authored coordinates.
- When the patent supplied coordinates but no manufacturer, an existing compatible curve was labeled as a catalog
  equivalent with the production supplier unspecified.
- Incompatible official names were rejected rather than aliased. Six rows remain explicitly unmatched because no
  reviewed coefficient curve safely reproduces both coordinates.
- Duplicate code precedence remains stable: bare `517642` still resolves to N-BK7 and bare `648338` to S-TIM22,
  while explicit H-K9L and H-ZF1 names resolve to their CDGM entries.

## Outcome

- Catalog size: 434 → 442 entries.
- Sweep 2B named-token queue: 41 → 0 distinct tokens.
- Strict coverage: 4676 → 4715 of 5360 surfaces.
- Trusted coverage: 4688 → 4725 of 5360 surfaces.
- Fully strict lenses: 228 → 235.
- Fully trusted lenses: 233 → 239.
- Catalog-coordinate mismatches: 0.
