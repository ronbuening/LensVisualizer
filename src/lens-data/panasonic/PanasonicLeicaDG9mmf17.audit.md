# Audit Log — Panasonic Leica DG Summilux 9mm f/1.7 ASPH

Patent: US 2023/0367186 A1, Example 1

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / S3A | `glass` | `L-BSL7 (OHARA)` | `534556 — moldable crown` | Patent Table 1A lists nd=1.53380, vd=55.6; no unique public match found. |
| L4 / S7 | `glass` | `S-PHM52 (OHARA)` | `J-PSKH4 (Hikari)` | Patent Table 1A lists nd=1.59349, vd=67.0; Hikari catalog data matches. |
| L5 / S8 | `glass` | `S-TIM35 (OHARA)` | `S-FTM16 (OHARA)` | Patent Table 1A lists nd=1.59270, vd=35.4; OHARA S-FTM16 matches. |
| L9 / S15A | `glass` | `L-LAL13 (OHARA)` | `586595 — barium crown` | Patent Table 1A lists nd=1.58575, vd=59.5; no unique public match found. |
| L10 / S17 | `glass` | `S-NPH2 (OHARA)` | `FDS18 (HOYA)` | Patent Table 1A lists nd=1.94595, vd=18.0; FDS18 class match selected. |

### Phase 2 — Retained-information audit

- Confirmed flagged rows against local `patents/US20230367186A1.pdf`, Table 1A. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 4 — Analysis sync

- Updated affected element narratives, glass table, chromatic-correction prose, asphere list, and source note.

## 2026-06-24 - Systematic patent-table audit

### Patent evidence

- Rendered `patents/US20230367186A1.pdf` pages containing Example 1 Tables 1A-1C because the PDF is image-only.
- Confirmed the prescription, focus variables (`d19` 1.2010 -> 1.6129 and `d23` 5.1035 -> 4.6917), and aspherical data against the current data file.
- The patent table does not publish semi-diameters or effective diameters.

### Updates

| Area | Before | After | Disposition |
|---|---|---|---|
| L9 glass | `586595` patent-code barium crown | `P-SK57Q1 (Schott, 586595)` | Current catalog has a coefficient-backed Schott row for the code. |
| L2 glass | `534556` patent-code moldable crown | unchanged | No unique coefficient-backed public match found. |
| APD | S-FPL51 rows inferred | unchanged | Patent lists nd/vd only; APD remains catalog-inferred. |
| High-index status | L7 UHR, L10 high-index focus doublet row | unchanged | Patent nd values support the existing roles. |
| SDs | ray-trace-derived estimates | unchanged | No patent clear-aperture column; existing proportions match the patent drawing envelope. |

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked US 2023/0367186 A1 Example 1 surfaces 10 and 20; stored `R`, `d`, and the 1.75211/25.00 plus 1.62299/58.10 coordinates agree with Table 1.
- Surface 10: changed `S-TIH4` to code-first `752251` dense-flint wording because the exact FF8 coordinate does not prove the patent supplier.
- Surface 20: changed `S-PHM52Q` to exact-coordinate OHARA `S-BSM15`.
- Synchronized the analysis and removed the old phosphate-crown claim. No geometry changed.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Re-read US 2023/0367186 A1 Example 1 Table 1A (PDF p. 23): surface 25 d = 10.43000 to a cover glass (surfaces
  26–27, t = 4.20000, nd = 1.51680, νd = 64.2) followed by 1.00000 air to the image plane. The legacy folded last gap
  14.199 = 10.43 + 4.20/1.5168 + 1.00. Last surface `21` now stores the physical 10.43 mm (fixed; not a focus variable)
  and the plate is a `rearPlates` entry with `gapAfterMm: 1.0`; glass `N-BK7` (exact nd/νd class match).
- Plate check against HEAD: EFL identical at both focus keyframes; paraxial defocus changes by ≤ 1.3e-5 mm (rounding of
  the legacy folded 14.199). Physical track grows by 1.431 mm = 4.20 × (1 − 1/1.5168), matching the patent's printed
  total lens length 70.9975 mm. `closeFocusM` (0.095 m production spec) is unchanged.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 1C (PDF p. 24) prints f = 9.3466 mm, half view angle 49.8179° and image height 10.0000 mm, 92.4% of the Four
Thirds corner (10.82 mm), so Y is a design image circle. The stored surface 1 rim (10.3 mm) clipped the real chief ray
(solved through the stop centre) from 44.1° (8.38 mm, 84% of Y); at the patent ω that chief ray needs surface 1 ≥ 11.71
mm and clears every other rim. Fig. 1A (PDF p. 2, rendered at 400 dpi; 70.9975 mm total length = 1546 px, cross-checked
by the 4.20 mm cover glass = 91 px) draws the L1 front surface running straight into its edge at ≈ 308 px ≈ 14.2 mm,
and the rear surface ending at ≈ 238 px ≈ 11.0 mm behind a flat step. Surface 1 takes the drawn 14.2 mm, the larger of
figure and floor. The 2026-06-24 entry's statement that the existing proportions match the drawing envelope was wrong
for L1: the drawn front rim is 38% larger than the stored one. Surface 2 (R 11.495; drawn ≈ 11.0 vs 10.1 stored,
inside the ~15% noise band) is unchanged, because L1 is a strong meniscus and scaling surface 2 with surface 1 would
exceed its radius.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 10.3 | 14.2 | Fig. 1A L1 front rim ≈ 14.2 mm; traced floor at the patent ω is 11.71 mm |

The validator accepts the value and the image-circle floor still reports nothing undersized. The chief ray now reaches
Y at 49.81° with every rim clear, and with the drawn rim the analysis edge reaches the full Four Thirds corner (52.3° →
10.82 mm, 100%; surface 1 chief ray 12.34 mm there). No aspheric surface changed, and the analysis file quotes no
surface 1 value.
