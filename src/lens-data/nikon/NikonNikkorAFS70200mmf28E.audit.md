# Audit Log - Nikon AF-S NIKKOR 70-200mm f/2.8E FL ED VR

Patent: WO 2019/097669 A1, Example 1 (Ito / Nikon)
Catalog version: 952b877

## 2026-05-10 - Patent audit and glass relabel cleanup

### Source Note

- The user-provided PDF at `/Users/ronbuening/Downloads/WO2019097669A1.pdf` is raster/image-only and has no extractable text layer.
- The audit used the attached PDF as the source document and Google Patents' searchable WO2019097669A1 transcription to inspect Example 1, Table 1.

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L11 / S1 | `glass` | `S-LAH79 (OHARA)` | `950294 - ultra-high-index dense flint (patent nd=1.95000, vd=29.37)` | Patent Table 1 row 1 lists nd=1.950000, vd=29.37. Catalog S-LAH79 is nd=2.00330, so the prior label resolved to the wrong Sellmeier data. |
| L21 / S6 | `glass` | `S-LAM51 (OHARA)` | `720503 - lanthanum crown (patent nd=1.71999, vd=50.27)` | Patent Table 1 row 6 lists nd=1.719990, vd=50.27. Catalog S-LAM51 is nd=1.70000, so the prior label resolved incorrectly. |
| L32 / S17 | `glass` | `K-VC89 (Sumita) / J-PSKH1 (HIKARI)` | `593679 - fluorophosphate crown (patent nd=1.59319, vd=67.90)` | Patent Table 1 row 17 lists nd=1.593190, vd=67.90. Catalog K-VC89 is nd=1.80998 and does not match. |
| L32 / S17 | `apd` / `apdNote` | `inferred`, `ED glass, anomalous partial dispersion` | `false`, removed note | The patent publishes only nd/vd for this glass and no dPgF or line indices, so the audit keeps the ED inference in prose but removes the UI APD badge. |
| L35 / S23 | `glass` | `LaH family (no exact catalog match)` | `903357 - high-index lanthanum flint (patent nd=1.90265, vd=35.73)` | Patent Table 1 row 23 lists nd=1.902650, vd=35.73. A six-digit code label keeps the existing Abbe fallback and future-proofs a catalog upgrade. |
| L42 / S28 | `glass` | `S-LAH79 (OHARA)` | `950294 - ultra-high-index dense flint (patent nd=1.95000, vd=29.37)` | Same patent constants as L11; same false S-LAH79 resolver issue. |
| L43 / S29 | `glass` | `K-VC89 (Sumita) / J-PSKH1 (HIKARI)` | `593679 - fluorophosphate crown (patent nd=1.59319, vd=67.90)` | Same patent constants as L32; same false K-VC89 resolver issue. |
| L43 / S29 | `apd` / `apdNote` | `inferred`, `ED glass` | `false`, removed note | Same partial-dispersion-data limitation as L32. |
| L53 / S34 | `glass` | `S-LAM51 (OHARA)` | `720503 - lanthanum crown (patent nd=1.71999, vd=50.27)` | Same patent constants as L21; same false S-LAM51 resolver issue. |
| L55 / S38 | `glass` | `K-VC89 (Sumita) / J-PSKH1 (HIKARI)` | `593679 - fluorophosphate crown (patent nd=1.59319, vd=67.90)` | Same patent constants as L32; same false K-VC89 resolver issue. |
| L55 / S38 | `apd` / `apdNote` | `inferred`, `ED glass` | `false`, removed note | Same partial-dispersion-data limitation as L32. |
| L56 / S40 | `glass` | `S-LAM51 (OHARA)` | `720503 - lanthanum crown (patent nd=1.71999, vd=50.27)` | Same patent constants as L21; same false S-LAM51 resolver issue. |

### Phase 2 - Retained-information audit

- Corrected L12 `type` from `Plano-Convex Positive` to `Biconvex Positive`; the Example 1 prose describes L12 as biconvex, with the patent table showing a very weak rear radius of R=-998.249 mm.
- Confirmed all surface radii, axial thicknesses, nd values, and element vd values against Example 1 Table 1 rows 1-41.
- Retained surface 36 as `R: 1e15`: the table prints `0.000`, but Example 1 prose explicitly describes L54 as plano-concave, matching an infinite front radius.
- Confirmed variable gaps D1-D4 for W/M/T at infinity and finite distance against the Table 1 variable-spacing block.
- Confirmed group focal lengths f1=143.951, f2=-45.574, f3=94.464, f4=58.195, and f5=-109.088.
- Confirmed no aspherical surfaces for Example 1; `asph: {}` remains correct.
- Semi-diameters remain project-estimated layout values because the patent does not publish clear apertures.

### Phase 3 - Spectral / metadata enrichment

- The patent does not publish nC, nF, ng, PgF, or dPgF values, so no spectral fields were added.
- Existing metadata already records the patent year, design focal lengths, design aperture, element count, group count, mount, format, maker, and focus description.
- Regenerated unresolved-glass tracking now records codes 950294, 720503, 593679, and 903357 for this lens.

### Phase 4 - Analysis sync

- Updated `NikonNikkorAFS70200mmf28E.analysis.md` glass table and element-by-element narrative to use the audited code labels.
- Removed unsupported K-VC89/Sumita and S-LAM51/S-LAH79 exact-match claims.
- Rephrased the 593679 elements as ED candidates backed by nd/vd and Nikon's production ED count, not as catalog-backed APD glasses.
- Updated L12 prose to match the patent's biconvex description while noting the nearly plano rear radius.

### Verification

- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` - passed before edits.
- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` - passed after edits; this lens no longer appears in catalog mismatch or relabel-candidate reports.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed (120 files, 1566 tests; expected error-boundary console errors were emitted by tests).
