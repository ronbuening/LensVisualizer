# Audit Log - FUJINON XF23mmF1.4 R LM WR

Patent: US 2022/0276464 A1, Example 7

## 2026-06-15 - New-lens patent audit

### Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L11 / S1 | `glass` | `N-BAK2 / S-BAL12-class barium crown (vendor uncertain)` | `540597 - barium crown (N-BAK2 / S-BAL12 class; vendor uncertain)` | Patent Table 25 gives nd=1.53996, vd=59.73; the unbroken code preserves the patent pair without asserting a vendor catalog entry. |
| L26 / S21-S22 | `glass` | `M-NBFD130 (HOYA) moldable niobium dense flint` | `NBFD13 / M-NBFD130 (HOYA, 806407 code)` | Patent Table 25 gives nd=1.80610, vd=40.73; the local catalog has coefficient-backed HOYA NBFD13 for the 806407 code family. |

### Retained-information audit

- Surface radii, infinity spacings, nd/vd values, and focus variable gaps were checked against Tables 25-27.
- The file intentionally scales Example 7 by 0.973614465993 to the marketed 23 mm focal length.
- Patent surfaces 27-28 are sensor/cover material and remain folded into the air-equivalent final BFD.
- Semi-diameters remain ray-envelope estimates because the patent does not publish clear aperture diameters.

### Analysis sync

- Updated L11 and L26 glass language in the companion analysis to match the data file.

## 2026-07-30 - SUMITA BAK2 coefficient recovery

- SUMITA's discontinued-inclusive all-glass catalog publishes BAK2 at code `540597`, nd = 1.53996, νd = 59.7.
- Relabeled L11 / S1 from a code/class annotation to `BAK2` as an exact catalog equivalent; the production supplier remains unspecified.
- No prescription geometry or spectral-line metadata changed.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 7 Table 25 on PDF page 42 (rendered at 160 dpi): surface 26 d = 12.4725; surfaces 27–28 are the
  parallel-plate optical member PP, 2.8500 mm, nd 1.51680, νd 64.20; 28 → image is 0.2112 mm. These reproduce the
  legacy fold 12.4725 + 2.8500/1.51680 + 0.2112 = 14.562656 mm (14.178412 mm scaled). The gap is fixed during focus.
- Surface 26A now stores 12.143406 mm and `rearPlates` holds PP (N-BK7 class) at 2.774801 mm with gapAfter
  0.205627 mm, all lengths scaled by the file's 0.973614465993. Paraxial check against the previous data: EFL
  identical; defocus changes by at most 0.000001 mm (rounding) at infinity and close focus. Physical track grows by
  0.945 mm, the plate's t(1 − 1/n).

## 2026-10-08 - dPgF moved to the engine's normal line

- Patent formula: none. US 2022/0276464 A1 never mentions partial dispersion. ¶0098 (PDF page 36) defines the
  basic-lens-data columns as Sn, R, D, Nd and νd only; Example 7 Table 25 (PDF page 42, re-read on the rendered page)
  prints only those columns; and none of conditional expressions (1)–(11) in Table 49 (PDF page 48) uses a partial
  dispersion. There is no patent `θgF`, no patent deviation and no patent normal line to convert.
- With nothing printed, the value is catalog-derived. The label `FCD505 (HOYA)` resolves to the repo's HOYA FCD505
  curve, which gives PgF = (ng − nF)/(nF − nC) = 0.544337. Against the engine line
  0.6438 − 0.001682 × 68.62 = 0.528381 that is `dPgF = +0.015956`.
- The stored `+0.0194` was HOYA's catalog ΔPg,F for FCD505 (the HOYA AGF data file lists 1.94E−02), which HOYA states
  against its own normal line, not the engine's. HOYA's reference glasses C7 and F2 carry 0 in the obsolete-inclusive
  AGF, and the line through their two AGF curves is 0.64842 − 0.001802 × νd, on which FCD505's own AGF polynomial
  (PgF 0.544115) reads +0.0193. The repo curve PgF reads +0.019523 on `0.64833 − 0.0018 × νd`, so the old number sat
  on a non-engine line and the runtime PgF it produced (0.547781) was 0.003444 too high.
- Second-reader cross-check: the repo curve is a Sellmeier fit of HOYA's polynomial, so its PgF (0.544337) differs
  slightly from the polynomial's own (0.544115, engine-line +0.015734) and from HOYA's printed deviation converted
  from its line (`0.0194 + 0.64833 − 0.0018 × 68.62 = 0.544214`, engine-line +0.015833). All three agree within
  0.0003; the repo-curve value is the one stored, because that is the curve the engine evaluates for C, d and F.

| Element | νd | Source figure | Stored before | Stored after |
|---|---:|---|---:|---:|
| L21 | 68.62 | Patent prints none; repo HOYA FCD505 catalog curve PgF = 0.544337 | 0.0194 | 0.015956 |
| L25 | 68.62 | Patent prints none; repo HOYA FCD505 catalog curve PgF = 0.544337 | 0.0194 | 0.015956 |
| L31 | 68.62 | Patent prints none; repo HOYA FCD505 catalog curve PgF = 0.544337 | 0.0194 | 0.015956 |

- Each `apdNote` now says the value is catalog-derived and quotes the curve PgF, the runtime value and HOYA's own
  +0.0194; a header note in the data file states that `dPgF` is PgF minus the engine line and that the patent has no
  formula of its own. The analysis makes no statement about `dPgF` or partial dispersion, so it is unchanged.
- Left: no `dPgF` value. No `dPgF` was added to the twelve elements without one, and no element authors
  `nC`/`nF`/`ng`. No `nd`, `νd`, glass label, `apd` tag or surface changed. The `apd: "patent"` tag on L21, L25 and
  L31 was outside this pass and is kept, although the patent itself does not describe any glass as anomalous.

## 2026-10-08 - `apd` on the three FCD505 elements changed from "patent" to "inferred"

- Changed: L21, L25 and L31 carry `apd: "inferred"` instead of `apd: "patent"`.
- Why: `LENS_DATA_SPEC.md` reserves `"patent"` for a source that identifies the material as anomalous, and US 2022/0276464 A1
  does not. A text-layer search of all 51 pages of the local `patents/US20220276464A1.pdf` finds no "dispersion",
  "anomalous" or "abnormal"; the one "partial" hit is "partially not repeated". On the rendered PDF page 32 (printed
  page 4), ¶0069–¶0073 credit chromatic correction to positive/negative pairings and cemented lenses in the focus group,
  G1 and G3, and name no material. Example 7 Table 25 (PDF page 42) prints Nd and νd only, as the entry above records.
- What the tag does: it is a display label, not an engine input. Allowed values are `false`, `"patent"` and
  `"inferred"`. The element inspector prints "APD (PATENT)" or "APD (INFERRED)", and the diagram uses a separate fill
  and stroke for each. The three elements now read as inferred, like L13 and L17. The inference rests on the exact
  FCD505 coordinate (nd 1.59282 / νd 68.62) and Fujifilm's published three-ED count.
- Unchanged: `dPgF` (0.015956), every `apdNote`, glass label, `nd`, `νd`, surface and semi-diameter. The analysis does
  not state the tag, so it is unchanged.
