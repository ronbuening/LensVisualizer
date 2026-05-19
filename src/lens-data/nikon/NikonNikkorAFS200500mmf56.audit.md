# Audit Log — Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR

Patent: JP 2014-209144 A, Example 2

## 2026-05-19 — Patent glass audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / S1 | `glass` | `NBFD11 (HOYA)` | `S-LAH65 (OHARA)` | Patent ¶0043 row 1 gives nd=1.80400, νd=46.60. Catalog NBFD11 is nd=1.78590; S-LAH65 round-trips the patent nd and is within 0.03 Abbe units. |
| L2 / S2 | `glass` | `FPL51 variant [ED]` | `498826 — ED fluorophosphate crown (patent nd=1.49782, νd=82.57)` | Patent ¶0043 row 2 gives nd=1.49782, νd=82.57. No current catalog entry exactly round-trips this melt; code annotation preserves the patent pair and avoids a spurious S-FPL51 catalog hit. |
| L3 / S4 | `glass` | `FPL51 variant [ED]` | `498826 — ED fluorophosphate crown (patent nd=1.49782, νd=82.57)` | Patent ¶0043 row 4 gives the same nd/νd pair as L2; same code-based treatment. |
| L4 / S6 | `glass` | `S-TIM27 (OHARA)` | `S-TIM5 (OHARA)` | Patent ¶0043 row 6 gives nd=1.60342, νd=38.01. S-TIM27 is nd=1.63980; S-TIM5 matches the patent pair within catalog precision. |
| L6 / S9 | `glass` | `S-NSL3 (OHARA)` | `517522 — crown (patent nd=1.51742, νd=52.15)` | Patent ¶0043 row 9 gives nd=1.51742, νd=52.15. S-NSL3 has a much higher νd; no current catalog entry round-trips both values closely. |
| L8 / S12 | `glass` | `S-NBH51 (OHARA)` | `S-LAM60 (OHARA)` | Patent ¶0043 row 12 gives nd=1.74330, νd=49.22. S-NBH51 is nd=1.74950 and νd=35.33; S-LAM60 is the closest catalog match and clears the mismatch scan. |
| L9 / S14 | `glass` | `S-BAL35 (OHARA)` | `N-SK2 (Schott)` | Patent ¶0043 row 14 gives nd=1.60738, νd=56.82. S-BAL35 is nd=1.58913; N-SK2 matches nd exactly and νd within 0.17. |
| L10 / S15 | `glass` | `S-BAH28 (OHARA)` | `658509 — lanthanum crown (patent nd=1.65844, νd=50.85)` | Patent ¶0043 row 15 gives nd=1.65844, νd=50.85. No current catalog candidate is within tolerance, so the code annotation prevents a false S-BAH28 Sellmeier match. |
| L15 / S23 | `glass` | `S-NBH51 (OHARA)` | `S-LAM60 (OHARA)` | Patent ¶0043 row 23 repeats the L8 nd/νd pair; same S-LAM60 catalog resolution. |
| L18 / S29 | `glass` | `S-TIM2 (OHARA)` | `E-FL5 (HOYA)` | Patent ¶0043 row 29 gives nd=1.58144, νd=40.89. S-TIM2 is nd=1.62004; E-FL5 matches the patent pair. |

### Phase 2 — Retained-information audit

- Surface radii, center thicknesses, glass nd values, and air gaps S1-S32 were checked against patent ¶0043; no prescription numeric edits were needed.
- Infinity zoom variable gaps D5, D16, D19, D24, D25, D28 and constant bf were checked against patent ¶0044; existing `var` infinity entries match.
- Close-focus gaps for 2.2 m were checked against patent ¶0045; existing close-focus entries match.
- Patent Example 2 contains no aspherical coefficient table; `asph: {}` remains correct.
- Semi-diameters remain geometric estimates because the patent table provides no semi-diameter column.

### Phase 3 — Spectral / metadata enrichment

- No nC/nF/ng/Pg,F or dPgF table is present in JP 2014-209144 A Example 2, so no spectral line indices were added.
- Existing metadata already records the patent, design focal range, optical f-number range, 19 elements / 12 groups, 2014 publication year, Nikon maker, full-frame format, and internal-focus description.

### Phase 4 — Analysis sync

- Updated the analysis glass table and element narratives for L1, L2, L3, L4, L6, L8, L9, L10, L11, L15, L18, and L19 so prose matches the data file.

### Verification

- `npm test -- catalogMismatchScan glassRelabelCandidatesScan unresolvedGlassScan` — passed. This lens no longer appears in the catalog-mismatch or relabel-candidate reports; the unresolved report intentionally lists L2/L3 `498826`, L6 `517522`, and L10 `658509` code annotations.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed.
- `npm run test` — passed.

## 2026-05-19 — Six-digit glass-code backfill review

Reviewed `patents/JP2014209144A.pdf`, Example 2. The relevant rows remain row 2 and row 4 (nd=1.49782, νd=82.57) plus row 15 (nd=1.65844, νd=50.85).

Catalog disposition:

- Hikari/Nikon J-FKH1 is an exact coefficient-backed match for the `498826` ED fluorophosphate row.
- Schott N-SSK5 is a coefficient-backed extra-dense crown with code `658509.371` and matches the patent nd with only a small Abbe rounding difference.
- L6 / `517522` was already code-resolvable to HOYA E-CF6 in the project catalog.

Changes made:

- Added Hikari J-FKH1 and Schott N-SSK5 to `glassCatalogData.ts`.
- Relabeled L2/L3 to J-FKH1 and L10 to N-SSK5 in `NikonNikkorAFS200500mmf56.data.ts`.
- Updated `NikonNikkorAFS200500mmf56.analysis.md` so the front ED elements and L2C doublet no longer read as unresolved code fallbacks.
