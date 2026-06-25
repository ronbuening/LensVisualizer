# Audit Log - Olympus Zuiko Auto-Fisheye 8mm f/2.8

Patent: DE 2157160 A1, Example 1 / first numerical prescription, Fig. 1.

## 2026-06-20 - Patent diagram and front SD review

### Phase 2 - Retained-information audit

| Surface | Field | Before | After | Justification |
|---|---|---:|---:|---|
| 1 | `sd` | 17.2 | 28.0 | DE 2157160 A1 does not tabulate clear apertures, but Fig. 1 shows L1's object-side face much taller than its rear face and taller than the following groups. Runtime diagnostics showed the configured 54 degree off-axis bundle first intersects surface 1 at about 27.4 mm radius; the prior 17.2 mm SD made every displayed off-axis ray ghost from surface 1. |

- Confirmed the `R`, `d`, `nd`, and `vd` values against the patent scan: the data file uses the normalized Example 1 values scaled by 8.000.
- Confirmed the patent does not publish semi-diameters, so the SD correction is an inferred clear-aperture/rendering fix, not a patent table transcription.
- Left surface 2 at 17.2 mm because its steep `R = 20.0848` rear surface is rim-slope constrained; enlarging it past roughly 18 mm is nonphysical under the project validator.

### Phase 4 - Analysis sync

- Updated the analysis note for L1 and the verification summary to document the inferred front-surface aperture.

### Verification

- `npm run typecheck` - passed.
- `npm run test` - passed: 182 test files, 2207 tests. The console prints expected error-boundary test errors.
- `prettier --check src/lens-data/olympus/OlympusZuikoAutoFisheye8mmf28.data.ts` - passed.
- Targeted 54 degree off-axis diagnostic after the SD change: chief-ray solve converged with bounding-sphere launch; pupil fractions -0.375, 0, and +0.375 traced through all surfaces without ghosts. Outer +/-0.75 rays vignette at surface 2, consistent with the retained L1 rear-surface rim constraint.

## 2026-06-24 - Olympus patent glass-code audit

### Patent evidence

- Reviewed local patent file `patents/DE_2157160_A1.pdf`; this scan is image-only under `pdftotext`, so the prior rendered-page/table review remains the controlling prescription check.
- Example 1 / Tabelle 1 supports the existing R/d/nd/vd prescription and does not publish a clear-aperture table.
- The prior front-surface SD fix remains in place; no additional SD changes were derived from the patent drawing.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L6 / S11 | `Unmatched (787/501 code; probable vintage high-index lanthanum flint)` | `787501 - vintage high-index lanthanum flint (probable; no exact public catalog match)` | Same optical assignment, normalized to the project six-digit code label convention. |
| L7 / S12 | `Unmatched (603/423 code; BaSF5-class barium dense flint)` | `603423 - BaSF5-class barium dense flint (no exact public catalog match)` | Same optical assignment, normalized to the project six-digit code label convention. |

### APD, high-index, and SD review

- No APD status changes: the patent table gives ordinary nd/vd values only.
- L6 remains a high-index rear transition element by patent nd = 1.7865, but no public exact catalog/Sellmeier row was found.
- No SD change in this pass: the existing front-surface correction still gives a rational fisheye front-aperture profile, and the rear groups retain the conservative inferred apertures.

### Analysis sync

- Updated the L6/L7 text and glass table to use the normalized six-digit code labels.
