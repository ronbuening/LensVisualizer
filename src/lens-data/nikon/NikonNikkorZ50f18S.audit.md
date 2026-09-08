# Audit Log — NIKON NIKKOR Z 50mm f/1.8 S

Patent: WO2019/220618 A1, Example 9

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L12 / S2 | `glass` | `946180 — ultra-high-index short flint (proprietary, patent nd=1.94595, νd=18.0)` | `FDS18 (HOYA, 946180)` | Google Patents text for WO2019/220618 A1 confirms the Example 9/Table 9 row at nd=1.94595 and νd=18.0; HOYA FDS18 is a coefficient-backed public match with code `946180`. The local PDF is present but image-only under `pdftotext`, so the searchable patent-family text was used to confirm the row. |
| L22 / S16 | `glass` | `774472 — lanthanum dense flint (proprietary, patent nd=1.77377, νd=47.2)` | `774472 — lanthanum dense flint (patent nd=1.77377, νd=47.2; no exact public catalog match)` | The patent text confirms nd=1.77377 and νd=47.2. Public catalog search found no coefficient-backed exact `774472` match. Removing the `proprietary` marker keeps the code future-upgradeable. |
| L31 / S20 | `glass` | `946180 — ultra-high-index short flint (proprietary, patent nd=1.94595, νd=18.0)` | `FDS18 (HOYA, 946180)` | Same confirmed nd/νd pair as L12; relabeled to the existing FDS18 catalog entry. |

### Catalog-search disposition

- Confirmed HOYA FDS18 through refractiveindex.info / HOYA Zemax data: code `946180`, nd=1.94595, νd=17.98, formula-3 coefficients.
- Searched public sources for `774472`; no coefficient-backed exact match was found.
- No catalog entries were added.

### Analysis sync

- Updated the ultra-high-index glass narrative and complete glass map to identify FDS18 / 946180.
- Updated L22 from `774/472` wording to unbroken `774472`.

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

## 2026-09-08 — First-hosted audit source preparation (lens 4, incomplete)

Primary source inspected directly: local `patents/WO2019220618A1.pdf` (203-page scanned WIPO publication). Title page confirms Saburo Masugi and Tomoyuki Sashima, WO 2019/220618 A1 (without a JP jurisdiction prefix), filed 2018-05-18, published 2019-11-21. Example 9 prose is PDF p50, Table 9 spans pp51–53, Figure 17 is p154. Scratch renders under `/tmp/z50-*` are not committed evidence assets.

- All stored surface radii, infinity thicknesses and glass nd/νd match Table 9 on pp51–52. Asphere coefficients at 6, 16 and 17 also match. Patent κ=1 is stored as standard K=0; recheck the original sag equation before final sign-off.
- Source D0 at close is 307.67 mm (object to first surface); TL is 92.330 mm, giving the current physical object-image distance 400.000 mm. D12=10.320→2.409, D19=6.356→14.267 and D26=1.000 at both stations. G2 moves 7.911 mm objectward with G1/G3 fixed, confirmed by ¶0124 and Figure 17.
- Source surface 13 is a dummy plane followed by 2.700 mm air. Current `STO→G2` label reports only D12 and is 2.7 mm short of the actual optical gap. Per the current data contract, merge the dummy plane's gap into STO: 13.020→5.109 mm, leaving group travel unchanged.
- Current surfaces 25–26 retain the sensor filter in conflict with the current data contract. Planned omission must replace rear gap with 10.5 + 1.6/1.5168 + 1 = 12.554852320675106 mm. Resulting air-equivalent track is 91.78485232067513 mm; preserve D0 by setting model closeFocusM to 0.39945485232067507, while explaining the physical source distance is 0.4 m. Table BFa=12.554 is independently rounded.
- Surface 6A has nd=1.56093 and a 0.100 mm layer; Table 9 also supplies νd=36.6, which is currently absent from runtime element metadata. It has elemId=0, so the renderer omits that outer asphere: `buildElementSpans()` starts L14 at surface 7 and ends at 8. A separate thin-layer element record, consistent with existing Sony hybrid models, can preserve both the layer's dispersion and rendered profile. Its polymer identity remains inferred, since Table 9 gives optical constants, not chemistry. Production 12-element count must remain separate from modeled media count.
- Figure 17 clearly includes the outer L14 asphere and the G2 objectward arrow. Exact rim measurement and live comparison remain pending; no SD change selected from this preliminary render.
- Structured inventor Sashima already matches the title page; header comment Koshima does not. `patentNumber` currently has an incorrect leading JP. The f-stop series starts at marketing f/1.8 despite model f/1.85; inspect the live aperture endpoints before choosing the correction.
- No production changes made for lens 4 yet. Browser access remains unavailable because the Mac is locked. This is source preparation, not a completed audit; live comparison, implementation and batch gates remain required.

### Implementation and resumed live review

- Production inspected at infinity and close focus after manual unlock. Confirmed missing surface-6 asphere, incorrect JP-prefixed link, abbreviated gap readout and f/1.9 display for the f/1.85 prescription.
- Added L14a as explicit modeled medium (id 13), preserving nd=1.56093, νd=36.6, 0.100 mm thickness and the existing aspheric coefficients. Its polymer identity remains unspecified. Production count remains 12; the bonded layer is explained separately. Runtime layer dispersion now uses source Abbe data instead of an unowned-medium fallback.
- Applied dummy-plane merge and air-equivalent filter omission as described above, without changing patent G2 motion. Corrected author spelling in comments/analysis and WO publication link. Clarified supplier-equivalent FDS18 labels and removed unsupported manufacturing certainty for the thin layer.
- Corrected shared aperture formatting to preserve hundredths (f/1.85 and f/1.03 instead of f/1.9 and f/1.0); whole-number stops keep existing compact formatting. Minimum slider label uses the same formatter. NIKKOR's first stop button now agrees with its f/1.85 model aperture.
- Local infinity and close views confirm the restored outer asphere, corrected WO link, f/1.85 display and actual STO→G2 gaps 13.02/5.11 mm. Targeted surface probe passes; no hidden trimming at focus 0, 0.5 or 1. Regression tests authored; tests and full gates deferred to batch boundary per user instruction.
- Remaining review: exact high-DPI rim comparison and source sag-equation page; inspect intermediate focus/aperture and motion chart after final adjustments. This lens is not yet marked complete.

- Figure 17 re-rendered at 600 dpi. The approximately 3487 px first-to-last vertex separation represents 79.230 mm, about 0.02272 mm/px. L21 optical front rim is ~10.9 mm (shoulder ~12.2 mm); L22 rims ~13.9 mm. Revised surfaces 14/15 from 13/13 to 11.5/12.3 mm and 16A/17A from 16/16 to 14.5/14.5 mm, retaining modest allowance above drawn optical rims. Targeted surface and image-circle probes pass (0 undersized). Other rim estimates remain within the existing modest ray-envelope allowances.
- Updated midpoint/f16 live view shows the narrower focusing group without overlap. Motion chart confirms only G2 moves, maximum travel 7.91 mm; G1/G3 remain fixed. f/1.85 endpoint and f/16 maximum are readable.
- Source limitation to resolve before final batch sign-off: ¶0061 on PDF pp19–20 refers to equation (A), but the equation itself is absent from the inspected PDF pages and Google Patents transcription. Existing κ=1→K=0 convention is retained; coefficients are visually verified. Find a family/source copy showing equation (A), or explicitly retain this as an unresolved source limitation rather than claim the equation was reverified.


### Batch follow-up

Source follow-up: national grant JP7131609B2 (Google Patents original, stored locally) pp11–12 also omits equation (A). Existing conic conversion is retained as an explicitly unresolved interpretation in the public analysis. This limitation remains in the follow-up ledger.
