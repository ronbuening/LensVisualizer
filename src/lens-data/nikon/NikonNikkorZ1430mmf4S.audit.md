# Audit Log — Nikon NIKKOR Z 14-30mm f/4 S

Patent: JP 2019-008031 A, Example 1 (Uehara / Nikon)
Catalog version: 8178e13

---

## 2026-05-02 — Patent audit and glass-label cleanup

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L11 / S1 | `glass` | `S-BAM4 (OHARA)` | `694533 — high-index crown (patent nd=1.69370, νd=53.32)` | Patent Table 1 row 1 gives nd=1.69370, νd=53.32. Catalog S-BAM4 is nd=1.60562, so the old label forced a wrong Sellmeier match. No catalog entry within tolerance; use the patent-derived 6-digit code. |
| L12 / S3 | `glass` | `S-BAM4 (OHARA)` | `694533 — high-index crown (patent nd=1.69370, νd=53.32)` | Same patent glass as L11, Table 1 row 3. |
| L14 / S7 | `glass` | `S-TIH53 (OHARA)` | `903357 — dense flint (patent nd=1.90265, νd=35.73)` | Patent Table 1 row 7 gives nd=1.90265, νd=35.73. Catalog S-TIH53 is nd=1.84666 and does not match. |
| L21 / S9 | `glass` | `S-PHM52 (OHARA)` | `S-FPM2 class (OHARA; patent nd=1.59349, νd=67.00)` | Patent Table 1 row 9 gives nd=1.59349, νd=67.00. Current catalog S-PHM52 is nd=1.61800; S-FPM2 is the nearest catalog class in the generated candidate scan. |
| L23 / S12 | `glass` | `S-BAL42 (OHARA)` | `S-BAL14 (OHARA)` | Patent Table 1 row 12 gives nd=1.56883, νd=56.00. S-BAL14 catalog nd=1.56883 and is the generated candidate; S-BAL42 is nd=1.58313. |
| L41 / S22 | `glass` | `S-LAH51 (OHARA)` | `795453 — high-index lanthanum (patent nd=1.79500, νd=45.31)` | Patent Table 1 row 22 gives nd=1.79500, νd=45.31. Catalog S-LAH51 is nd=1.78590, outside the current mismatch tolerance. No catalog entry within tolerance. |
| L52 / S26 | `glass` | `Lanthanum flint (catalog uncertain; near S-LAH64)` | `765468 — lanthanum flint (patent nd=1.76546, νd=46.75)` | Patent Table 1 row 26 gives nd=1.76546, νd=46.75. Catalog S-LAH64 is nd=1.78800, so the old hint caused a false resolver match. No catalog entry within tolerance. |

Confirmed without data-file changes:

| Element / surface | Glass annotation | Patent value | Status |
|---|---|---|---|
| L13 / S5, L33 / S18, L34 / S20, L51 / S24 | `S-FPL51 family (OHARA)` | nd=1.49782, νd=82.57 | ED family label retained; catalog value is close and the structured `dPgF` remains an inferred family estimate, not patent data. |
| L22 / S11 | `S-LAH58 (OHARA)` | nd=1.88300, νd=40.66 | Retained; earlier follow-up had already corrected this from S-LAH66/S-LAH79-class labels. |
| L31 / S15 | `S-LAH59 (OHARA)` | nd=1.81600, νd=46.59 | Retained; earlier follow-up had already corrected this from S-LAH63. |
| L32 / S16 | `S-BSL7 (OHARA)` | nd=1.51612, νd=64.08 | Retained; BK7-class match is within tolerance. |

### Phase 2 — Retained-information audit

- Patent convention confirmed from ¶0076: positive radius means curvature center on the image side; the data file uses the same sign convention.
- All 27 surface radii, axial thicknesses, and d-line indices match JP 2019-008031 A Table 1 rows 1-27. The stop row is surface 14, with flat aperture `R = ∞` and variable spacing D2.
- Variable spacing table confirmed: D1, D2, D3, D4, Bf, and total length match the patent's wide/middle/tele values. Data-file `d` values use the wide-column infinity values.
- Overall patent summary confirmed: f=14.420/20.000/29.101, FNO=4.00/4.00/4.00, omega=57.68/46.85/35.27 degrees, Y=21.70, and group focal lengths f1=-23.297, f2=48.882, f3=26.663, f4=-37.580, f5=-1392.883.
- Aspherical surfaces 2, 4, 17, and 26 match Table 1 exactly for κ, A4, A6, A8, A10, and A12. Patent ¶0078 defines the sag equation directly with κ in the square-root term; the existing data convention remains unchanged.
- Element shape/group prose confirmed against ¶0088-¶0093: G1(-), G2(+), G3(+), G4(-), G5(-); G4 is the focusing group; G2 and G5 share the same zoom trajectory.
- Patent does not provide semi-diameters. Existing `sd` values remain author estimates documented in the file header and analysis methodology.

### Phase 3 — Spectral / metadata enrichment

- JP 2019-008031 A Table 1 provides only nd and νd for Example 1; it does not publish nC, nF, ng, PgF, or dPgF line-index data. No patent-sourced spectral fields were added.
- Existing top-level metadata was already present and confirmed: `subtitle`, `patentYear`, `focalLengthDesign`, `apertureDesign`, `elementCount`, `groupCount`, and `focusDescription`.
- Existing inferred `dPgF` fields on the four S-FPL51-family ED elements were retained as family estimates. They are not patent-sourced values.

### Phase 4 — Analysis sync

- Updated `NikonNikkorZ1430mmf4S.analysis.md` element narratives for L11, L12, L14, L21, L22, L23, L31, L41, and L52 to match the corrected data-file labels.
- Updated the glass-selection section to distinguish catalog-resolved glasses from patent-code-only glasses.
- Removed the remaining "apochromatic correction pair" wording because the patent does not publish measured partial-dispersion or line-index data for this example.

### Verification

- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` before edits — passed; lens appeared in the generated mismatch reports for the corrected labels above.
- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` after edits — passed; NikonNikkorZ1430mmf4S no longer appears in either generated mismatch report.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed.
- `npm run test` — passed, 116 files / 1507 tests.

### Outstanding follow-ups

- Consider adding catalog entries only if public Sellmeier sources are found for patent codes 694533, 903357, 795453, and 765468. Until then these labels intentionally fall back to Abbe approximation using the patent's stored nd/νd.
