# Audit Log - Nikon NIKKOR Z DX 50-250mm f/4.5-6.3 VR

Patent: JP WO2020/105107 A1, Example 1

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L11 / 1 | `glass` | `J-BK7A (Hikari)` | `N-BK7 / S-BSL7 / J-BK7A class` | Example 1 publishes BK7-class `nd`/`vd`; N-BK7/S-BSL7 are resolver-backed equivalents. |
| L12 / 3 | `glass` | `J-F5 (Hikari)` | `F5 (Schott) / S-TIM5 / J-F5 class` | The patent row matches the F5/S-TIM5 dense-flint class. |
| L21 / 6 | `glass` | `J-LASF016 (Hikari)` | `E-LASF016 (Hikari) / J-LASF016 class` | The patent row matches the project catalog's E-LASF016 class. |
| L22 / 8 | `glass` | `J-LASF03 (Hikari)` | `H-ZLAF52A (CDGM) / J-LASF03 class` | H-ZLAF52A provides a resolver-backed equivalent for this lanthanum-flint class. |
| L31 / 11 | `apd` | `false` | `"inferred"` | J-FK01A is the sole ED-class element, but the patent gives no partial-dispersion table. |
| L33 / 14 | `glass` | `J-K3 (Hikari)` | `E-C3 (HOYA) / S-NSL3 / J-K3 class` | The patent row matches the C3/NSL3 crown class. |
| L34 / 17 | `glass` | `J-LASFH24 (Hikari)` | `902253 - high-index dense flint (J-LASFH24 class; no exact public catalog match)` | The rounded code preserves the patent glass properties; no coefficient-backed exact public catalog match was verified. |
| L35 / 19 | `glass` | `J-LAF2 (Hikari)` | `S-LAM2 (OHARA) / J-LAF2 class` | S-LAM2 is the resolver-backed equivalent for this lanthanum-flint class. |
| L41 / 23 | `glass` | `J-SF6 (Hikari)` | `H-ZF7LA (CDGM) / S-TIH6 / J-SF6 class` | H-ZF7LA/S-TIH6 are resolver-backed dense-flint equivalents. |
| L42 / 24 | `glass` | `J-LASF03 (Hikari)` | `H-ZLAF52A (CDGM) / J-LASF03 class` | Same patent glass class as L22. |
| L51 / 26 | `glass` | `J-SK5 (Hikari)` | `N-SK5 / S-BAL35 / J-SK5 class` | N-SK5/S-BAL35 are resolver-backed equivalents for the patent crown class. |

- Retained `J-FK5`, `J-LASF021`, `J-LASF017`, `946180`, and `911353` rows as already documented by the data file. The two numbered high-index rows remain vendor-unspecified property classes rather than false exact catalog identities.

### Phase 2 - Geometry and SD review

- Rechecked the Example 1 surface table and variable gaps. The design is all-spherical in the patent data used here.
- The patent does not publish clear apertures. Retained the existing SDs as visualization estimates constrained by the 62 mm filter class, DX image field, f-number, and zoom group proportions.
- The SD progression remains rational: large positive front group, narrow internal stop region, and modest rear-group clearances across the telephoto zoom train.

### Phase 3 - Spectral / APD review

- The patent provides only `nd` and `vd`; no line-index table or partial-dispersion table was found.
- L31 APD is marked inferred from the ED fluorophosphate class. No other APD flags were added.

### Phase 4 - Analysis sync

- Updated `NikonZDX50250mmf4564VR.analysis.md` to reflect the resolver-backed glass relabels, the retained high-index property-class rows, and the inferred APD status of L31.

### Verification

- Pending full Nikon batch verification.
