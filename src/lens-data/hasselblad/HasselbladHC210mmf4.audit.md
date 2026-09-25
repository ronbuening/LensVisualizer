# Audit Log - HASSELBLAD HC 4/210

Patent: US 6,445,511 B1, Embodiment 3 / Table 3

## 2026-05-19 - Glass relabel audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 / S4 | `glass` | `S-NBM51 (OHARA)` | `S-NBH5 (OHARA)` | Table 3 row 4 lists nd=1.65412, vd=39.7; S-NBH5 is the closer OHARA-family match. |
| L4 / S6 | `glass` | `S-TIM2 (OHARA)` | `E-FL5 (HOYA)` | Table 3 row 6 lists nd=1.58144, vd=40.7; E-FL5 round-trips the stored pair. |
| L5 / S8, L9 / S15 | `glass` | `S-TIH53 (OHARA)` | `S-TIH6 (OHARA)` | Table 3 rows 8 and 15 list nd=1.80518, vd=25.4; S-TIH6 matches the patent pair better than S-TIH53. |
| L7 / S12 | `glass` | `S-TIH11 (OHARA)` | `SF1 (Schott)` | Table 3 row 12 lists nd=1.71736, vd=29.5; SF1 matches the stored pair. |
| L10 / S16 | `glass` | `S-TIH14 (OHARA)` | `740283 - titanium flint (patent nd=1.74000, vd=28.3)` | Table 3 row 16 gives nd=1.74000, vd=28.3. No current catalog entry round-trips cleanly, so the six-digit code avoids a false catalog snap. |

### Phase 2 - Retained-information audit

- Checked the flagged row constants against scaled Embodiment 3 / Table 3; stored nd/vd values match the patent.
- Existing radius/thickness scaling notes and focus-gap conservation remain consistent with the patent table.

### Phase 3 - Spectral / metadata enrichment

- No additional spectral line-index data was available in Table 3.
- Existing metadata already records patent year, scaled prescription context, focus behavior, and element/group counts.

### Phase 4 - Analysis sync

- Updated the analysis file's element descriptions and glass identification table.

## 2026-05-19 - Missing-Sellmeier queue follow-up

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L10 / S16 | `glass` | `740283 - titanium flint (patent nd=1.74000, vd=28.3)` | `S-TIH3 (OHARA)` | Patent Embodiment 3 / Table 3 row 16 gives nd=1.74000 and vd=28.3. OHARA S-TIH3 is a coefficient-backed 740283 code-family match. |

### Phase 2 - Patent evidence

- Local patent file: `patents/US6445511.pdf` is present but gitignored; rechecked it via local text extraction and cross-checked the public Google Patents HTML.
- Reconfirmed Embodiment 3 / Table 3 surface 16 for L10: nd=1.74000, vd=28.3.
- No radius, spacing, scaled prescription, focus, stop, mount, or format edits made.

### Phase 3 - Catalog-search disposition

- Added OHARA S-TIH3 to `glassCatalogData.ts` from the public OHARA Zemax / refractiveindex.info coefficient row.
- This supersedes the earlier same-day unresolved 740283 disposition.

### Phase 4 - Analysis sync

- Updated the L10 narrative and glass-identification table to identify OHARA S-TIH3.

## 2026-06-24 - APD, high-index, and SD audit

- Rechecked `patents/US6445511.pdf`, Embodiment 3 / Table 3 and Figure 1, against the current data file.
- Confirmed L2 `S-FPL51 (OHARA) / FCD1 (HOYA)` is already marked as inferred APD, and no additional patent line-index data is available for a `patent` APD upgrade.
- Confirmed the high-index elements remain L5, L6, L8, and L9 (nd >= 1.8), all ordinary high-index correction glasses rather than APD elements.
- Rendered and reviewed the patent drawing. The stored SDs match the long telephoto proportions: dominant fixed front group, compact moving G2 doublet, and smaller rear relay group. No SD edits were made.
- Verification: `npm run generate:glass-reports`, `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`, and `git diff --check` passed.

## 2026-09-25 — MTF image-plane census

Visually inspected `patents/US6445511.pdf`, Embodiment 3 Table 3, PDF p. 10 (column 6). Every radius, distance and ten nd/νd pairs was compared. All-spherical, no rear plate. Source dimensions are normalized to f=1 and authored scale is ×210.07; the former data rounded each scaled radius and distance to 0.01 mm, losing source precision. D4=0.01516×210.07=3.1846612 had become 3.19; D13=0.03463×210.07=7.2747241 had become 7.28.

Restored all R/d products to seven decimal places, not only the two incorrect roundings. Infinity D7/D10=0.05212/0.10896 become 10.9488484/22.8892272; the second station 0.11679/0.04429 becomes 24.5330753/9.3050003. Both gap sums are 33.8380756. Source D17=0.45940 becomes 96.506158 mm. All indices/Abbe values and inferred semi-diameters are unchanged. The patent labels the second station “8.5 m” even with f=1 normalization; removed the unsupported assertion that its object distance is unequivocally 8.5 normalized units.

Independent native trace gives EFL 0.999672803206 and BFL 0.459008318086; scaled EFL 210.001265769 and BFL 96.423877380. This leaves −0.082280620 mm defocus instead of −0.204236100, below the 0.188019776 mm limit. The small native residual remains a source precision/image-distance limitation; no dimension was tuned.

**Cause/action:** scaling precision loss/transcription; restore full scaled source dimensions. Offset **−0.204236 → −0.082281 mm**; Section E row deleted. Changelog records the user-visible focus correction.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
