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

## 2026-07-30 - Remaining 902253 source audit

- Rechecked L34 at `nd = 1.90200`, `vd = 25.3` against the expanded current and discontinued-inclusive catalogs.
- No coefficient-backed public row is inside the runtime d-line safety window; the historical J-LASFH24 family
  comparison does not establish an exact dispersion curve.
- Reworded L34 as explicit unmatched `902253`; no prescription, zoom, focus, or semi-diameter values changed.

## 2026-08-03 - J-LASFH24 catalog recovery

- Nikon/Hikari's first-party 2023-09-01 optical-glass workbook supplies the previously unavailable J-LASFH24
  power-series row, whose `1.90200 / 25.26` coordinate and `902253` code match L34.
- Reclassified L34 as a Hikari catalog equivalent while leaving the production supplier unspecified. No prescription,
  zoom, focus, or semi-diameter values changed.
- The lens now has strict and trusted catalog dispersion on all 16 glass elements.

## 2026-10-27 — Rim-cut figure review

Figures 1A (wide) and 1C (tele) (PDF p. 42, native 300 ppi raster, about 4.4 px/mm) were read element by element for
flat lands square to the axis at the rims of concave faces, the shape `rimCutDepthMm` draws. Fig. 1A was read on its
lower half (no leader lines); Fig. 1C has no leader lines and was read on both halves. The figure draws no land, so no
cut was authored and the data file is unchanged.

| Surface | Figure rim (cap end ÷ element edge) | Cut depth | Cut radius | sd | sag(sd) | Largest stated axial ray |
|---|---|---|---|---|---|---|
| 5 (L13 rear, R 450.0) | 1.00, no land | — | — | 21.5 | 0.51 mm | 18.02 mm |
| 7 (L21 rear, R 44.56) | 1.00, no land | — | — | 9.8 | 1.09 mm | 7.86 mm |
| 8 (L22 front, R −40.08) | 1.00, no land | — | — | 9.8 | −1.22 mm | 7.84 mm |
| 18 (L34 rear, R 30.67) | 1.00, no land | — | — | 9.0 | 1.35 mm | 8.62 mm |
| 22 (L36 rear, R 115.6) | 1.00, no land | — | — | 10.8 | 0.51 mm | 8.32 mm |
| 25 (L42 rear, R 21.42) | 1.00, no land | — | — | 9.6 | 2.27 mm | 6.27 mm |
| 26 (L51 front, R −51.00) | 1.00, no land | — | — | 12.0 | −1.43 mm | 3.27 mm |
| 28 (L52 front, R −24.80) | 1.00, no land | — | — | 12.0 | −3.10 mm | 3.07 mm |

- Each concave face follows its sphere to within 1 px out to the element's edge line in both panels. Surfaces 2 and 15
  are near-flat (sag at sd 0.001 mm) and have nothing to cut.
- The step at the rim of L13's rear face is the flange of the larger L12 (the cemented junction 4 continues past L13's
  edge to L12's), not a land on surface 5.
- Faces 7 and 8 are drawn as full spheres out to an edge of about 13 mm, where they cross each other inside the
  2.60 mm gap (Fig. 1A at about 10 mm, Fig. 1C at about 9.5 mm from the axis), so the figure is schematic there. The
  diagram draws L21's edge as a slope from the front face's 12.0 mm to the rear face's 9.8 mm. The figure draws no land
  that would support raising 7 to 12.0 mm with a cut at 9.8 mm, and at 12.0 mm surface 7's rim would lie behind
  surface 8's rim, so both rims stay.
- The last 4–5 px of surface 28 (L52 front) run nearly parallel to the edge stroke, but within 1 px of the sphere:
  below what the figure resolves, so it is not read as a land.
- No cap reaches the stop plane: the stop's neighbours are the near-flat surface 15 (2.00 mm clearance at every zoom
  and focus state) and the convex front face 17.
- Aperture audit unchanged: all three stations trace within 3 % of the stated f/4.5, f/5.1 and f/6.3, with no rim,
  trace, iris or failed rows. Side vignetting is unchanged because nothing was cut.

## 2026-10-29 — Surface-height and concave-rim reinspection

Reopened `patents/JPWO2020105107A1.pdf`, Example 1, Figure 1A (wide) and Figure 1C (tele), PDF p. 42, and inspected every element at 600 dpi on the halves without leader lines. The figure gives about 4.4 native px/mm. No face shows a resolved square land: the curved profiles meet their element edges continuously, and the short final stroke on 28 remains within the native pixel uncertainty of the sphere. The larger L12 flange is at cemented junction 4. The schematic crossing of the full curves on opposing faces 7 and 8 is not evidence for an opaque land; extending those old clear caps to the drawn outer edges would still put the facing rims across one another.

No geometry changed. `audit:surface` passes; `audit:image-circle` reports 0 undersized and 0 skipped. Existing optical apertures and the documented schematic-figure limitation were retained.
