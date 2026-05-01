# Audit Log — Canon RF 135mm f/1.8 L IS USM

Patent: US 2023/0213745 A1, Example 4 (Nakada / Canon)

---

## 2026-04-30 — Glass relabel: three misidentified glass families

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L4 (element 4) | `glass` | `"S-TIH6 (OHARA)"` | `"770297 — S-TIH18 family (OHARA)"` | S-TIH6 catalog nd = 1.805181 vs patent nd = 1.77047; Δnd = 0.035, far outside 1e-4 tolerance. Consistent with CanonRF2870mmf28 annotation for same nd/νd pair. |
| L4 (element 4) | `apdNote` | `"Titanium flint — anomalous partial dispersion above the normal line…"` | `"S-TIH18-class titanium flint — anomalous partial dispersion above the normal line…"` | Updated glass family reference; APD inference retained (TIH-series are anomalous-dispersion flints). |
| L6 (element 6) | `glass` | `"S-TIH6 (OHARA)"` | `"770297 — S-TIH18 family (OHARA)"` | Same justification as L4. |
| L6 (element 6) | `apdNote` | `"Titanium flint — anomalous dispersion complementary to UD."` | `"S-TIH18-class titanium flint — anomalous dispersion complementary to UD."` | Updated glass family reference. |
| L8 (element 8) | `glass` | `"S-NPH2 (OHARA)"` | `"N-SF66 / E-FDS1 (Schott/Ohara, 923/209)"` | S-NPH2 catalog νd = 18.90 vs patent νd = 20.9; resolving to S-NPH2 Sellmeier was using wrong dispersion. N-SF66 (Schott) has nd = 1.92286, νd = 20.88 — correct match. 6-digit code 923/209 consistent with CanonRF24240mmf463 and NikonNikkorZ70200f28 annotations. |
| L10 (element 10) | `glass` | `"S-NPH2 (OHARA)"` | `"N-SF66 / E-FDS1 (Schott/Ohara, 923/209)"` | Same justification as L8. |
| L11 (element 11) | `glass` | `"S-LAH58 (OHARA)"` | `"911/353 — S-LAH58 family (OHARA)"` | Catalog S-LAH58 nd = 1.882997 vs patent nd = 1.91082; Δnd = 0.028, far outside 1e-4 tolerance. 6-digit code 911/353 consistent with FujifilmXF200mmf2R annotation "S-LAH58 family (OHARA, 911 353)" for the same nd/νd pair. No catalog entry within tolerance for nd = 1.91082, νd = 35.3. |

**Glasses confirmed correct (no change):**

| Element | Glass annotation | Catalog match | Status |
|---|---|---|---|
| L1, L13 | `S-TIH53 (OHARA)` | nd = 1.84666, νd = 23.78 | ✓ within tolerance |
| L2, L3, L5 | `Canon UD fluorophosphate (≈ S-FPL51)` | S-FPL51 nd = 1.496999, νd = 81.55 | ✓ within tolerance |
| L7 | `S-PHM52 (OHARA)` | nd = 1.618, νd = 63.33 | ✓ within tolerance |
| L9 | `S-LAH65V (OHARA)` | nd = 1.803999, νd = 46.58 | ✓ within tolerance |
| L12 | `S-BSM14 / N-SK14 (OHARA / Schott)` | S-BSM14 nd = 1.603112, νd = 60.64 | ✓ within tolerance |
| L16 | `SF6 equivalent (Schott)` | SF6 nd = 1.80518, νd = 25.43 | ✓ within tolerance |
| L17 | `S-BAL35 / N-SK5 (OHARA / Schott)` | S-BAL35 nd = 1.58913, νd = 61.14 | ✓ within tolerance |

**Glasses not in catalog (no match exists; resolver returns null → Abbe approx used):**

| Element | Glass annotation | Note |
|---|---|---|
| L14 | `S-NPH7 (OHARA)` | S-NPH7 not in catalog; Abbe approx with nd = 2.00069, νd = 25.5 is used. |
| L15 | `S-LAL8 (OHARA)` | S-LAL8 not in catalog; Abbe approx with nd = 1.65844, νd = 50.9 is used. |

### Phase 2 — Retained-information audit

All surface data verified against patent US 2023/0213745 A1, Numerical Example 4 (¶0053):

- **Radii (R):** All 30 surfaces confirmed exactly against patent table. ✓
- **Thicknesses (d):** Sum check: known d values + d6 + d7 = LD − BF = 148.55 − 14.42 = 134.13 mm. Known sum (excluding d6, d7) = 128.65 mm → d6 + d7 = 5.48. Data file: 3.59 + 1.89 = 5.48 ✓. All other d values confirmed individually.
- **nd values:** All 30 surfaces confirmed. ✓
- **vd values (element entries):** All 17 elements confirmed against patent table. ✓
- **Variable spacings:** d11 (STO) = 2.45 / 20.66, d13 = 24.03 / 5.82 — confirmed against patent variable-spacing table. ✓
- **elemId assignments:** All cemented junctions carry the rear element's elemId per LENS_DATA_SPEC pairing rules. Air gaps carry elemId = 0. Verified all 30 surfaces. ✓
- **Overall summary stats:** f = 130.95, FNO = 1.86, ω = 9.38°, image height = 21.64 mm, LD = 148.55 mm, BF = 14.42 mm — all match patent Table 1, Example 4. ✓
- **No aspherical surfaces** — confirmed; no asph table in Example 4; `asph: {}` correct. ✓

### Phase 3 — Spectral / metadata enrichment

Patent US 2023/0213745 A1 does not publish per-element line indices (nC, nF, ng) or partial dispersion (PgF) data. No spectral enrichment possible from this patent.

Metadata fields all present and confirmed:
- `subtitle`, `patentYear` (2023), `focalLengthMarketing` (135), `focalLengthDesign` (130.95), `apertureMarketing` (1.8), `apertureDesign` (1.86), `elementCount` (17), `groupCount` (12), `closeFocusM` (0.7), `focusDescription` ✓

### Phase 4 — Analysis sync

Updated `CanonRF135f18.analysis.md` to match Phase 1 glass relabels:

- §4.1 L3+L4 narrative: "OHARA S-TIH6" → "OHARA S-TIH18 family, 6-digit code 770/297".
- §4.1 L5+L6 narrative: same change.
- §4.2 glass strategy: "S-TIH6 (nd = 1.77047, νd = 29.7)" → "S-TIH18 family (nd = 1.77047, νd = 29.7; 6-digit code 770/297)".
- §7.1 D3 description: "OHARA S-NPH2 / Schott N-SF66" → "Schott N-SF66 / Ohara E-FDS1, 6-digit code 923/209"; removed "S-NPH2" from reference.
- §7.1 D3 role: "S-NPH2 (extremely high-index, nd ≈ 1.923)" → "N-SF66 (extremely high-index, nd ≈ 1.923, νd ≈ 20.9)".
- §7.2 L10 description: "S-NPH2, same glass as L8" → "N-SF66 / E-FDS1 class (same glass as L8)".
- §7.2 L11 description: "OHARA S-LAH58" → "OHARA S-LAH58 family, 6-digit code 911/353; catalog S-LAH58 is nd = 1.883 and does not match".
- §8 glass palette table: three rows updated (S-TIH6 → S-TIH18 family 770/297; S-NPH2/N-SF66 → N-SF66/E-FDS1 923/209; S-LAH58 → S-LAH58 family 911/353).
- §10 chromatic strategy: "S-TIH6 titanium flint" → "S-TIH18-class titanium flint (nd = 1.77047, νd = 29.7)".
- §12 design summary: same change.

No APO language added or removed — no dPgF or line-index data available from this patent.

### Verification

- `npm run typecheck` — passed (0 errors). ✓
- `npm run test` — 116 test files, 1504 tests, all passed. ✓

### Outstanding follow-ups

- **S-NPH7** (L14, nd = 2.00069, νd = 25.5) and **S-LAL8** (L15, nd = 1.65844, νd = 50.9) are not in the glass catalog. Both fall back to Abbe approximation. Consider adding to catalog if confirmed to appear in other lenses.
- **S-TIH18 / 770297 glass:** Also appears in CanonRF2870mmf28. Not yet in catalog. Sellmeier data would allow Abbe → Sellmeier upgrade for both lenses.
- **N-SF66 / E-FDS1 (923/209):** Appears in multiple Canon and Nikon files. Schott N-SF66 Sellmeier is publicly available. Adding it to the catalog would upgrade L8 and L10 from Abbe approx to full Sellmeier.
- **S-LAH58 family (911/353):** Appears in FujifilmXF200mmf2R and other lenses. Hoya TAFD35 (referenced in FujifilmXF50140mmf28R) may be the same glass. Sourcing Sellmeier for 911/353 glass would unlock a catalog entry.
