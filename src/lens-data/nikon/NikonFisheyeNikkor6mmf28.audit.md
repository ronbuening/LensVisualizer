# Audit Log — Nikon Fisheye-Nikkor 6mm f/2.8

Patent: US 3,737,214, Example I

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L7 / S15 | `glass` | `Unmatched crown (534/554; no current HIKARI catalog match)` | `534554 — crown glass (patent nd=1.53375, νd=55.4; no current HIKARI catalog match)` | Local patent `patents/US3737214.pdf`, Example I row for R15 lists nd=1.53375 and νd=55.4. The stored values match. |

### Catalog-search disposition

- Searched public catalog/refractiveindex.info-style sources for `534554` and the exact 1.53375 / 55.4 pair.
- No coefficient-backed match was found in current public Hikari/OHARA/HOYA/Schott-style data. The label now uses an unbroken code instead of a slash.

### Analysis sync

- Updated the L7 text and glass table from `534/554` to `534554`.

## 2026-08-21 — Near/close glass-candidate review

- Rechecked US 3,737,214 and assigned NBFD2 as a supplier-neutral spectral proxy for L10's `796408` class.
- The patent coordinate remains unchanged; no supplier identity is asserted.

## 2026-10-30 — Fresh figure, sign erratum, physical filter and glass review

Directly inspected `US3737214.pdf` PDF page 2 Figure 1 at 600 dpi and native 300 ppi, page 3 Figures 2A–2C, page 7 the complete Example I table and helium-d definition, and page 8 claim convention. All 23 radii/signs, 22 physical spacings and 13 media were rechecked. The literal table matches the old powered transcription, but its printed R18=−45 conflicts with Figure 1's object-convex R18. Independent matrices typed from the source give EFL37.413238/BFL273.214284 with the minus sign and EFL6.299886/BFL37.657615 with +45, against stated6.3/37.657. Figure2A independently supports the correction: exact axial Snell focus departures at h=.001–1.125 are −.151..+.247mm with +45 versus +235.6..+395.0mm with −45, while the source plot spans ±.5mm. Figures2B/C identify the same f6.3/110° example; claims repeat R1–R9 but do not repeat R18. Added a disclosed `source.errata` sign correction, supported by source summary and aberration figure. No other powered R/d or source glass coordinate changes.

Figure1's iris marker is behind R17, not ahead of the filter. The 600dpi local vertex positions are about316/438px for R17/R18 and371px for the stop, yielding roughly .45 of the13mm air interval; adopted6.0/7.0mm split carries about±.3mm uncertainty. Stopz=148.0mm and the unchanged nominal-F-number rule derives iris7.523328mm. This is a source-supported reconstruction, not a source-tabulated mechanical coordinate. R18 changes L9 to biconvex positive, standalone f22.065037mm; its complete D2 is positive f66.186468mm. Corrected rear group EFL32.879622mm and Petzval−.005742535/mm replace prior literal-sign diagnostics.

Required filter R11/R12 is restored with physical25mm air/1.8mm glass/2.8mm air. Its source nd1.51823 has no published Abbe number: no value is copied from L9 and no catalog identity is forced. The runtime includes13 glass entries; catalog counts retain12 powered elements/9 groups. Eleven powered media have qualified available curves, while L7(1.53375/55.4) and the nd-only filter remain unresolved. All12 powered nd/vd and filternd are retained. No C/F/g or partial-dispersion data are supplied or invented; J-SF2 and NBFD2 near-proxy residuals remain explicit.

L2/L3 rear lands preserve clear caps28/15.2 and extend to existing50/28mm body rims. Published rear effective radii30.5/16.5 remain beyond the present spherical guard. Full L1 land to its published106.5mm front rim requires rearcap≥51.071832 versus guard47.25; retained46.7 gives negative edge−11.825mm, so that land is rejected. Every other exposed and cemented face remains source constrained. The previous literal-sign investigation's temporary rear8.1/8.4 raises are unnecessary after correction and removed; original rear8mm rims pass the actual iris beam.

Surface/canonical/inferred-cut and image-circle checks pass. Aperture is iris-limited f2.841874 within the existing3%band; the CLI's coarse --raise iris scan still flags an untraceable bracket, whereas dense actual iris aiming traces25/25 axial samples. Nine actual SVG states were viewed, all finite/zero trim. Projection-aware25-sample fields through75° improve versus the literal-sign baseline; generic chief bracketing still fails85°–110°, so full220° transmission is not asserted. The retained .162mm unit-focus estimate gives a derived .400874m endpoint, not a source-published .25m state. All25 axial samples pass at that estimated endpoint. Golden-value probes use the identical shared-test calls and are persisted in `/tmp/f6fish28-golden-corrected.json`; shared tests are not edited here. Exact source correction/stop exceptions are separately provided to the coordinator.
