# Audit Log - Carl Zeiss Jena Pancolar 50mm f/2

Patent: GB 850,117, Claim 2
Catalog version: local working tree, 2026-05-19

## 2026-05-19 - Full patent audit and code-only source recheck

### Source Note

- The local GB patent PDF is image-only, so `pdftotext` produced a blank text file. This audit used the existing data transcription and public catalog searches for the two unresolved code families.

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1 | `glass` | `SSK / LaK (Jena in-house, 662/561)` | retained | Claim 2 uses nd=1.66200, vd=56.1. Public catalog searches did not find a coefficient-backed exact match for code 662561. |
| L2 / 3 | `glass` | `SSK / LaK (Jena in-house, 662/561)` | retained | Same crown glass as L1. |
| L3 / 4 | `glass` | `SF2 equivalent (Jena in-house, 672/323)` | `Dense flint (672/323, Jena in-house; no exact public catalog match)` | The old label falsely resolved to Schott SF2 in catalog mismatch reports. Public catalog searches did not find a coefficient-backed exact match for code 672323. |
| L4 / 6 | `glass` | `Special light flint (Jena in-house, 602/352)` | retained | Claim 2 uses nd=1.60156, vd=35.2. No coefficient-backed exact public match was found for code 602352. |
| L5 / 7 | `glass` | `SSK / LaK (Jena in-house, 662/561)` | retained | Same crown glass as L1. |
| L6 / 9 | `glass` | `SSK / LaK (Jena in-house, 662/561)` | retained | Same crown glass as L1. |

### Phase 2 - Retained-information audit

- Rechecked the current data file against the documented patent transcription and 0.5x scaling. Stored surface values and glass constants remain consistent with the Claim 2 layout notes.
- Confirmed the patent publishes no effective diameters or aspherical coefficients; semi-diameters and `asph: {}` remain project-authored.

### Phase 4 - Analysis sync

- Updated the Element III note to remove the overconfident SF2-equivalent wording and keep the 672/323 dense flint code unresolved.

## 2026-06-25 - Full-folder patent recheck

### Source Note

- Rechecked the local GB 850,117 PDF visually because the file is image-only. Claim 2 remains the source for the current data file.
- Confirmed the f=100 table values and the 0.5x scale used in the data file, including the inferred 65% stop split through the l2 air gap.

### Phase 1 - Glass / APD / high-index status

- Retained the unresolved Jena in-house code labels for 662/561, 672/323, and 602/352. The patent gives nd/vd pairs only, and no coefficient-backed public equivalents were identified.
- No APD metadata was added. No new line-index data is present in the patent.

### Phase 2 - SD review

- The patent drawing does not publish clear apertures. Existing SDs remain consistent with the drawing proportions and the rendered runtime layout.
- Temporary Zeiss Jena diagnostic test - passed; runtime trim diagnostics empty for this lens.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.5 → 0.551 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 10.1 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: derived unit-focus travel; 0.5 m is the old (production) value.
- `catalog.closeFocusM.marketing` 0.5 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.
