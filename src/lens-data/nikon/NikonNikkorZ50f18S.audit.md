# Audit Log — NIKON NIKKOR Z 50mm f/1.8 S

Patent: WO2019/220618 A1, Example 9

## 2026-05-04 — Glass relabel + patent prescription audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L11 / S1 | `glass` | `S-TIH6 class (dense flint)` | `S-TIM25 class (dense flint; patent nd=1.67270, νd=32.2)` | Patent Table 9 row 1 gives nd=1.67270, νd=32.2. Public S-TIH6 is nd=1.80518; S-TIM25 matches nd and is the correct dense-flint class. |
| L12 / S2 | `glass` | `S-NPH2 / E-FDS2 (ultra-high-index short flint, nd = 1.946)` | `946180 — ultra-high-index short flint (proprietary, patent nd=1.94595, νd=18.0)` | Patent Table 9 row 2 gives nd=1.94595, νd=18.0. Public S-NPH2 is nd=1.92286, so a code-based proprietary label avoids a false catalog match. |
| L15 / S9 | `glass` | `S-FPM2 / FCD1 class (ED glass, anomalous partial dispersion)` | `S-FPM2 / FCD505 class (ED fluorophosphate; patent nd=1.59319, νd=67.9)` | Patent Table 9 row 9 gives nd=1.59319, νd=67.9. The previous FCD1 reference describes the νd≈82 ED family, not this moderate-ED fluorophosphate. |
| L16 / S10 | `glass` | `S-TIH14 class (dense flint)` | `S-TIM22 class (dense flint; patent nd=1.64769, νd=33.7)` | Patent Table 9 row 10 gives nd=1.64769, νd=33.7. Public S-TIH14 is nd=1.76182; S-TIM22 matches nd and the Abbe value within patent precision. |
| L21 / S14 | `glass` | `S-TIH14 class (dense flint)` | `S-TIM22 class (dense flint; patent nd=1.64769, νd=33.7)` | Patent Table 9 row 14 uses the same nd/vd pair as L16. |
| L22 / S16 | `glass` | `S-LAH60 class (lanthanum dense flint, nd = 1.774)` | `774472 — lanthanum dense flint (proprietary, patent nd=1.77377, νd=47.2)` | Patent Table 9 row 16 gives nd=1.77377, νd=47.2. Public S-LAH60 is nd=1.83400, so a code-based proprietary label avoids a false catalog match. |
| L23 / S18 | `type`, `role`, `apdNote` | Super-ED / S-FPL53-FCD100 wording | ED fluorophosphate / S-FPL51-FCD1 wording | Patent Table 9 row 18 gives nd=1.49782, νd=82.6. This is close to S-FPL51/FCD1 class, not S-FPL53/FCD100 (νd≈95). |
| L31 / S20 | `glass` | `S-NPH2 (ultra-high-index short flint, nd = 1.946)` | `946180 — ultra-high-index short flint (proprietary, patent nd=1.94595, νd=18.0)` | Patent Table 9 row 20 uses the same nd/vd pair as L12. |
| L32 / S21 | `glass` | `S-TIH14 class (dense flint)` | `S-TIM22 class (dense flint; patent nd=1.64769, νd=33.7)` | Patent Table 9 row 21 uses the same nd/vd pair as L16. |
| L33 / S23 | `glass` | `S-TIH14 class (dense flint)` | `S-TIM22 class (dense flint; patent nd=1.64769, νd=33.7)` | Patent Table 9 row 23 uses the same nd/vd pair as L16. |

### Phase 2 — Retained-information audit

- Confirmed surfaces 1–26 against Patent Table 9: `R`, infinity-position `d`, `nd`, `elemId` pairing, aperture stop placement, virtual surface 13, filter plate, and final D26/BF handling are retained.
- Confirmed variable focus gaps against Table 9: D12 = 10.320 → 2.409, D19 = 6.356 → 14.267, D26 = 1.000 → 1.000.
- Confirmed aspherical surfaces 6, 16, and 17 against Table 9; coefficients A4–A10 match, and the project stores patent κ=1 as standard `K: 0`.
- Patent Table 9 does not publish semi-diameters; existing `sd` values were retained as diagram/validation estimates.

### Phase 3 — Spectral / metadata enrichment

- No patent-published `dPgF`, `nC`, `nF`, or `ng` values were found in Example 9; no structured spectral fields were added.
- Existing metadata (`subtitle`, `patentYear`, `focalLengthDesign`, `apertureDesign`, `elementCount`, `groupCount`, and focus description) already matched the patent and was retained.

### Phase 4 — Analysis sync

- Updated `NikonNikkorZ50f18S.analysis.md` glass narrative and complete glass map for the corrected S-TIM25, S-TIM22, 946/180, 774/472, S-FPM2/FCD505, and S-FPL51/FCD1 classifications.
- Removed unsupported S-FPL53/FCD100 and “Super ED” wording for L23.

### Verification

- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` — passed; this lens no longer appears in either generated report.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed.
- `npm run test` — passed (116 files, 1507 tests; expected error-boundary console traces emitted by tests).
