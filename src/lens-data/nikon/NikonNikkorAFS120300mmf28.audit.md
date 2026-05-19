# Audit Log - NIKON AF-S NIKKOR 120-300mm f/2.8E FL ED SR VR

Patent: JP 2020-177057 A, Example 1

## 2026-05-19 - Glass relabel audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L25 / S12 | `glass` | `OHARA S-NBH52V` | `756247 - anomalous-dispersion niobium glass (patent nd=1.75575, vd=24.71, theta_gF=0.629)` | Example 1 row 12 gives nd=1.755750, vd=24.71, theta_gF=0.629. Nearby catalog dense flints lose the patent APD context, so a six-digit code annotation is safer. |
| L31 / S16 | `glass` | `OHARA S-LAM55` | `J-LASKH2 (Hikari)` | Example 1 row 16 gives nd=1.755000, vd=52.34; J-LASKH2 round-trips the stored pair. |
| L34 / S22 | `glass` | `OHARA S-NPH4` | `TAFD35 (HOYA)` | Example 1 row 22 gives nd=1.910820, vd=35.25; TAFD35 matches. |
| L51 / S29, L56 / S40 | `glass` | `OHARA S-NPH2` | `S-LAH99 / TAFD55 (001291, HRI)` | Example 1 rows 29 and 40 give nd=2.001000, vd=29.12; S-LAH99/TAFD55 match the HRI pair while S-NPH2 does not. |
| L52 / S32 | `glass` | `OHARA S-BAH28` | `S-LAL18 (OHARA)` | Example 1 row 32 gives nd=1.729160, vd=54.61; S-LAL18 matches the stored pair. |

### Phase 2 - Retained-information audit

- Checked the flagged rows against Example 1; stored nd/vd values match the patent table.
- Existing all-spherical and zoom/focus descriptions remain consistent with the patent.

### Phase 3 - Spectral / metadata enrichment

- Preserved the patent theta_gF annotation on L25 through the code-based label and existing `apdNote`.
- No new top-level metadata was needed.

### Phase 4 - Analysis sync

- Updated the analysis file's glass table and affected element narratives, including the L25 code fallback and G5 HRI labels.

### Verification

- `npm test -- glassRelabelByLensScan` passed; this lens no longer appears in the relabel queue.
- `npm run typecheck` passed.
- `npm run test` passed.
