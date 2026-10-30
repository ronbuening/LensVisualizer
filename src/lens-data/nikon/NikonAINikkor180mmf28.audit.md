# Audit Log - Nikon AI Nikkor 180mm f/2.8

Patent: US 4,338,001, Embodiment 2

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass review

- Rechecked Embodiment 2 against the current data file. No data changes were made in this pass.
- Retained the front `Unmatched Nikon ED fluorophosphate` row with `apd: "inferred"`. The patent glass is an ED-class fluorophosphate by Abbe number, but the patent gives only `nd`/`vd` and no partial-dispersion constants.
- Retained `LAFN7 / E-LAF7 class` and `N-SSK5 / S-BSM25 class` as catalog-backed/class-level matches for the published values.
- Retained `KF3-class crown-flint` because no current coefficient-backed catalog entry was verified for the obsolete KF3-type row.
- Retained the rear `Unmatched (TAF/LaSF-class high-index flint...)` row. The stored `nd = 1.79668`, `vd = 45.4` is close to HOYA TAF2 / Hikari J-LASF017 class, but it does not round-trip as an exact public catalog match.

### Phase 2 - Geometry and SD review

- Confirmed the file is scaled from the patent's normalized `f = 100` prescription to 180 mm.
- The patent does not publish clear apertures. The stop location remains inferred from Fig. 1 in the long `d6` air space.
- Retained the existing semi-diameters. The 72 mm filter constraint, f/2.8 entrance pupil, large front ED element, and narrower stop region all remain proportionally rational for rendering.

### Phase 3 - Spectral / APD review

- No line-index table, partial-dispersion table, or aspherical data was found in the patent.
- The only APD status remains the inferred ED-class front element; no additional APD flags were added.

## 2026-07-30 SUMITA KF3 coefficient recovery

- Added SUMITA's discontinued-inclusive KF3 vendor polynomial at catalog code `515546`.
- Relabeled L4 to the KF3 optical equivalent at the exact stored `1.51454 / 54.6` coordinate.
- The production supplier remains unspecified, and no prescription geometry changed.

## 2026-10-30 — Fresh F-mount source, rim, and glass reinspection

- Directly inspected original `patents/US4338001.pdf`: common Figure 1 PDF p.2 at600 dpi (`/tmp/fb9-180-full600.png`), Embodiment 2 numerical table p.5, and paired Figure 3A–C aberration plots p.3 (F2.8, d/g lines). Every air face was reviewed. Figure 1 is the representative architecture for all three examples; its whole-track scale (~9.4 working px/mm / 4.7 native px/mm at300dpi) and first-element local thickness scale disagree substantially. It does not establish precise Embodiment 2 rim radii. No independent new concave-end land is resolved. Retained all geometry rather than forcing a scaled schematic fit.
- Freshly checked all **five physical n/ν pairs** against Embodiment 2 p.5: all retained. The table defines refractive index/Abbe number without a numeric wavelength; Figure 3’s d/g labels and the coordinates support the conventional stored d-line interpretation. No C/F/g table, θgF values, or source-named glass chemistry was found. Preserved qualified ED/APD inference from the correlated production design and high Abbe number, but removed the unsupported assertion of fluorophosphate composition. L1 remains unresolved at1.50032/81.9, no strict current-catalog match.
- The old unresolved L5 label suppressed an available coordinate-compatible curve. Replaced it with qualified **J-LASF017** (catalog1.79500/45.31 versus source1.79668/45.4), giving **4/5** coefficient curves alongside E-LAF7, N-SSK5 and KF3. Corrected every affected public glass paragraph/table to distinguish proxy coverage from unknown historical supplier/melt. No source coordinates, numerical dispersion overrides, R/d, inferred stop, or unit-focus normalization changed.
- Actual verification: focused surface and image-circle checks pass all three candidates, zero undersized/skipped. Aperture3/3 within3% with zero rim/iris/trace failures; field coverage3/3≥99%, zero unsolved/skipped. The 24mm final coupled values were independently rerun after the rejected10.7 trial. Native SVGs inspected at nine control states per lens (27 views), zero renderer trims; 24mm focus states repeat its source-only infinity prescription. Actual resolver and `assertCatalogConsistent` pass; full-catalog strict searches retain the three unresolved glasses. No engine, catalog, tolerances, shared tests, or root files changed.

## 2026-10-30 — Fresh glass-only follow-up

- US4338001.pdf Embodiment2 tablePDF5 and d/g Figure3 PDF3 re-viewed directly. All5 source n/ν pairs retained;4/5 current coefficient curves remain compatible, L1 at1.50032/81.9 remains unresolved. E-LAF7/N-SSK5/KF3/J-LASF017 are qualified proxies; no forced production or chemistry identity. No source C/F/g or θgF data is supplied; the existing ED/APD inference stays qualified.
- Actual current resolver/`assertCatalogConsistent` pass. Data and public analysis are byte-identical to fresh live copies; no source indices, dispersion fields, geometry, controls, labels or spectral overrides changed. This unchanged reinspection accompanies the separate Micro105 FF5 proxy correction.
