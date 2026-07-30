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

## 2026-05-19 — Six-digit glass-code backfill review

Reviewed `patents/JP2020177057A.pdf`, Example 1. The L25 / surface 12 row gives nd=1.755750, νd=24.71, and θgF=0.629. Public Nikon/Hikari catalog data now provides an exact coefficient-backed match: Hikari J-SFH5, d-code `756247`, nd=1.755750, νd=24.71, PgF≈0.6291.

Changes made:

- Added Hikari J-SFH5 to `glassCatalogData.ts`.
- Relabeled L25 in `NikonNikkorAFS120300mmf28.data.ts` to `J-SFH5 (Hikari) — anomalous-dispersion niobium flint (756247)`.
- Updated `NikonNikkorAFS120300mmf28.analysis.md` so the G2 secondary-spectrum discussion no longer treats L25 as an unresolved code fallback.

## 2026-05-31 — M-TAFD305 catalog side-effect cleanup

### Context

- The Sigma patent audit added coefficient-backed HOYA `M-TAFD305` to the glass catalog.
- `M-TAFD305` is the 851/401 moldable-glass row. These Nikon rows are 871/407 and match HOYA `TAFD32`.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L26 / S14 | `HOYA M-TAFD305 type (1871/407)` | `TAFD32 (HOYA, 871407)` | Exact catalog match for nd = 1.870705, vd = 40.73. |
| L53 / S34 | `HOYA M-TAFD305 type (1871/407)` | `TAFD32 (HOYA, 871407)` | Same patent glass as L26. |

### Analysis sync

- Updated the glass table and shared L26/L53 note to remove the stale M-TAFD305 identification.

## 2026-07-29 - Glass classification follow-up

- Corrected L22 from the false HOYA E-ADF10 annotation to OHARA S-TIH1.
- The stored `nd=1.71736`, `vd=29.53`, and coordinate `717295` match S-TIH1 exactly; E-ADF10 is
  `1.61310 / 44.36` (`613444`).
- Synchronized the analysis. No prescription values changed.

## 2026-07-29 - Remaining catalog-mismatch audit

JP 2020-177057 A Example 1 was rechecked at surfaces 6, 9, 11, 24, 36, and 42; each stored `R`, `d`, `nd`, and `νd` agrees with the patent table.

| Surface | Before | After | Patent coordinate / disposition |
|---|---|---|---|
| 6 | `S-LAM52 (≈N-KZFS8)` | `N-KZFS8` | 1.720467 / 34.71 with θgF=0.583; exact KZFS/APD match. |
| 9 | `S-TIM35` | `697555` unresolved lanthanum crown | 1.69680 / 55.52; nearby vendors differ and the patent names none. |
| 11, 24, 42 | `S-LAH52` | `S-LAH65` | Exact OHARA 1.80400 / 46.60 coordinate. |
| 36 | `S-LAH63Q type` | `S-TIH6` | Exact OHARA 1.80518 / 25.41 coordinate. |

- Synchronized all affected analysis claims. No prescription geometry changed.

## 2026-07-29 - Incompatible named-label audit

- Rechecked JP 2020-177057 A Example 1, Table 1, surface 45: `R=-70.85350`, `d=2.000`,
  `nd=1.900430`, and `νd=37.38` match the stored L59 prescription.
- Replaced `OHARA S-LAH75` with `TAFD37A (HOYA catalog-equivalent; patent vendor unspecified)`.
  Current OHARA S-LAH75 is 1.873996 / 35.26 and is incompatible; HOYA TAFD37A exactly matches the
  patent coordinate (900374).
- Synchronized the L59 glass table and element narrative. No prescription geometry changed.
