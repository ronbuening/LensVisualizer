# Audit Log — NIKON NIKKOR-N 5cm f/1.1

Patent: US 2,828,671, single prescription

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Patent evidence

- Reviewed the actual local file `patents/US2828671.pdf`.
- The OCR text is messy but confirms the published glass rows used by the data file: 1.6073/59.5, 1.7700/47.9, 1.5927/35.4, 1.6483/33.8, 1.7170/47.9, 1.6259/35.6, and 1.6385/55.5.

### Glass corrections

| Element(s) | Before | After | Disposition |
|---|---|---|---|
| L1, L2 | `607/595` dense crown | `K-SK7 (Sumita, 607595)` | Existing coefficient-backed catalog entry. |
| L3 | `LaK/LaF... 770/479` | `770479 — lanthanum crown/flint patent glass...` | No exact public coefficient-backed match found; kept unresolved. |
| L4 | `593/354` light flint | `S-FTM16 (OHARA, 593353)` | Existing coefficient-backed catalog entry; within patent rounding. |
| L5 | `648/338` flint | `S-TIM22 (OHARA, 648338)` | Existing coefficient-backed catalog entry. |
| L6, L7 | `717/479` lanthanum crown | `S-LAM3 (OHARA, 717479)` | Existing coefficient-backed catalog entry. |
| L8 | `626/356` light flint | `E-F1 (HOYA, 626357)` | Existing coefficient-backed catalog entry; within patent rounding. |
| L9 | `639/555` dense crown | `K-SK18 (Sumita, 639555)` | Existing coefficient-backed catalog entry. |

### Catalog-search disposition

- Public catalog search found coefficient-backed matches for every six-digit row except `770479`.
- Updated the analysis notes and glass census to use catalog names where defensible and keep `770479` explicit for future upgrade.

## 2026-08-18 - L3 patent transcription correction

- Re-rendered `patents/US2828671.pdf` at high resolution because OCR reported L3 as `1.7700`. Direct visual checks
  of both the original prescription table and the independent claim table show `n3 = 1.7170`, `v3 = 47.9`.
- Corrected L3 and surface 5 from `1.7700` to `1.7170` and assigned the same S-LAM3 optical-equivalent curve already
  used for the identical L6/L7 patent row. With that index corrected, the patent's printed `r6 = 872.1` correctly
  reproduces the stated component power; restored surface 6 from the prior unsupported `122.5` substitution to
  `872.1` (production scale `436.05`). Recalculated the standalone L3/L4 focal lengths to 39.36/−29.26 mm.
- Updated the analysis and glass census accordingly. The production supplier remains unspecified.
- This section supersedes both the OCR-dependent `770479` statements in the 2026-05-20 entry and the earlier
  radius-correction rationale.

## 2026-09-21 — First-added diagram audit, lens 43

Source: local `patents/US2828671.pdf` (3 pages, 300 dpi bilevel scans). Page 1 = sole figure, page 2 = specification
and worked example table, page 3 = claims (Claim 3 repeats the table) and references. No web copy was needed.

### Re-verified and retained

- Front page: US 2,828,671 (pre-kind-code grant), Saburo Murakami, assignor to Nippon Kogaku K.K., filed 1957-01-03,
  Japanese priority 1956-04-10, patented 1958-04-01. `patentNumber`, `patentAuthors`, `patentAssignees`,
  `patentYear` and `subtitle` agree; there is only one example.
- Every table row was read from a 300 dpi crop of page 2 and cross-checked against Claim 3 on page 3: r₁…r₁₅, d₁…d₁₄,
  n₁…n₉ and ν₁…ν₉ all equal the stored values ÷ 0.5. The 2026-08-18 correction (n₃ = 1.7170, r₆ = +872.1) is
  confirmed on both pages. Claim 3 prints d₁ as "87" (dropped decimal point); the example table's 8.7 is used.
- One uniform scale s = 0.5 on every R and d. Paraxial EFL 99.85 (49.93 scaled) against the nominal f = 100;
  component focal lengths +447.8 / +338.9 / −823.6 / +2308.2 / +162.2 / +300.2 against the published
  +447.7 / +338.9 / −823.7 / +2309.5 / 162.2 / 300.2. Stored element `fl` values match thick-lens values.
- F = 1.1 and the 46° field are the only general data published; `nominalFno` 1.1 retained. `maxFstop` 16 retained:
  secondary sources disagree (f/16 and f/22) and the patent is silent. `closeFocusM` 0.9 (3 ft rangefinder
  coupling limit) retained.
- Element `type` strings agree with the R signs; `cemented`, `groups` and `doublets` ranges are correct.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| Last gap (surface 15 `d`, `var` infinity) | 22.79 | 23.05 | The patent publishes no back focus. 22.79 was the paraxial BFD of the superseded n₃ = 1.77 / r₆ = 122.5 prescription (45.578 × 0.5) and survived the 2026-08-18 fix; the analysis mislabelled it "published image spacing". The corrected table gives BFD 46.108 (23.054 scaled). Calculated value. |
| Close-focus gap (`var` "15") | 25.735 | 26.14 | Calculated unit-focus extension 3.09 mm for a 0.9 m object-to-image distance (paraxial conjugate solve; resulting object-to-image 899 mm, m = −0.062). No patent focus data. |
| Stop split inside d₇ = 12.6 | 6.3 / 6.3 | 7.5 / 5.1 | Not tabulated. Figure: iris bar centre at 0.48 of the r₇–r₈ vertex distance, but the figure's r₇/r₈ clear semi-diameters (10.9 / 11.3 mm scaled) and iris opening (11.9 mm) cannot pass F/1.1. Exact trace: the F/1.1 marginal ray leaves r₇ at h = 13.73, z = 7.23 and meets r₈ at h = 13.62, z = 7.68 (z from the r₇ vertex). At z = 6.3 the r₇ glass already reaches inward to h = 13.04, so a mid-gap stop plane lies inside L4 for the outer pupil zones and the sequential trace would have to step backwards. The stop is therefore placed inside the 7.23–7.68 window. Calculated placement. |
| STO `sd` | 13.9 | 13.7 | Record of the paraxial F/1.1 iris radius at the new plane (13.68). |
| sd 5 / 6 (L3, L4 front) | 14.95 / 18.5 | 20.2 / 20.2 | F/1.1 axial marginal heights 19.85 / 19.13: the old values clipped the axial beam to about f/1.5. Figure rim 18.3 mm is also below the beam. 20.2 keeps a 0.95 mm L3 edge. |
| sd 7 / 8 | 13.3 / 13.35 | 13.8 / 13.7 | Axial marginal 13.73 / 13.62. Larger values make the two concave rims overlap axially (rims at z = 7.33 and 7.61 with these values). |
| sd 9 / 10 (Component IV) | 13.35 / 14.35 | 18.0 / 18.0 | Axial marginal 15.30 / 15.91 (old values clipped). Figure rim 222 px = 18.0 mm. |
| sd 11 / 12 (L7) | 14.3 / 13.0 | 17.8 / 17.8 | Old values blocked the full-field chief ray (13.9 / 14.7 needed) and clipped the axial beam (14.55 / 13.74). Figure rim 220 px = 17.8 mm. |
| sd 13 / 14 / 15 (Component VI) | 12.9 / 12.4 / 11.2 | 18.1 / 18.1 / 18.1 | Old values blocked the full-field chief ray (15.4 / 15.8 / 16.0) and clipped the axial beam. Figure rim 224 px = 18.1 mm; L9 keeps a 1.0 mm edge. |
| `lensMounts` | `["nikon-s"]` | `["nikon-s", "leica-ltm"]` | Nikon's own lens history lists S and L (M39 screw) versions; both ids exist in `lensTaxonomy.ts`. |
| Glass labels L1, L2, L4, L8, L9 | `K-SK7 (Sumita, 607595)` etc. | `… catalog equivalent (patent NNNVVV; production supplier unspecified)` | The patent names no glass or supplier. Same catalog entries still resolve (Δnd ≤ 4e-5, Δνd ≤ 0.14). Patent six-digit codes are 593354 and 626356 for L4 and L8. |
| Glass label L5 | `S-TIM22 (OHARA, 648338)` | `S-TIM22 (OHARA) nearest catalog neighbour …` | Patent 1.6483 / 33.8; S-TIM22 is 1.64769 / 33.79 (Δnd = −6.1e-4, an SF2-type glass). The pair coincides with the legacy SF12 coordinate (1.64831 / 33.84), absent from the catalog. Stored nd/νd stay at the patent values. |
| Header | "SD estimated via marginal + chief ray trace … stop at midpoint" | Scale, back-focus, stop and semi-diameter notes rewritten | Matches the findings above. |

Figure measurement (page 1, 300 dpi, upper clean side, axis at y = 1838 px): vertex crossings S1 865.5, S11 1449,
S12 1516.5 px give 6.18 px per patent mm (12.35 px/mm at production scale). Rims: L1 279 px (22.6 mm), L2 251 px
(20.3 mm), III cylinder 226 px (18.3 mm), IV 222 px, V 220 px, VI 224 px. L4 rear flat annulus spans 133–191 px,
L5 front flat 138–206 px, iris bars 147–237 px. S7 / S8 vertex crossings 1139.5 / 1293 px; iris bar centre 1213 px
on the axis after correcting the 0.4° page tilt.

Left unchanged: sd 1–4 (24.5 / 24.0 / 24.0 / 22.75). They are the axial marginal heights (22.69 / 22.44 / 21.95 /
21.53) plus 8–10 %. The figure rims are 8 % (L1) and 12–18 % (L2) smaller, but the drawn L2 rim is below the F/1.1
beam, so the drawing cannot be taken literally there.

### Analysis sync

- Removed the unsupported "published image spacing" rows and sentence; BFL, total track (162.8 / 81.40), EP diameter
  (90.8 / 45.4) and flange protrusion (11.8 mm) recomputed.
- Stop-position paragraph and the production-scale table row rewritten for the calculated 7.5 / 5.1 split.
- Glass bullets and both glass tables now lead with the patent pair and code, with catalog names as equivalents;
  wrong family tags corrected (L4 was called LLF, L5 "F", L8 "LF", 717479 "LaK"); the SK4 remark on L1 replaced by
  the matching SK7 coordinate.
- Focus section now states the calculated 3.09 mm extension; a semi-diameter paragraph was added to §10.

### Checks on the result

- Repo surface validator: no validation errors. Image-circle floor: 0 undersized.
- Paraxial: EFL 49.927, BFD 23.054, last gap 23.05 (defocus −0.004), F-number from the authored stop 1.098; close
  focus key focuses at 899 mm object-to-image.
- Independent exact meridional trace (analytic sphere intersections): F/1.1 axial marginal ray passes every surface
  (largest incidence 54°, at r₈); full-field (Y = 21.6, ω = 24.4°) chief ray heights ≤ 18.4 front / ≤ 16.0 rear, all
  inside the new sd. Meridional pupil transmission 80 % at Y = 12, 51 % at Y = 18, 24 % at Y = 21.6.
- Engine-derived half-field estimate rose from 17.9° to 25.0°; stop radius 13.68; EFL unchanged (the shared EFL
  regression value 49.926581 still holds).
- Glass resolution: all nine labels resolve to a compatible catalog entry.
- Live view (local dev page): infinity, closest focus and the off-axis fan were inspected. The silhouette now matches
  the patent figure's proportions (chamfer-like L4 rear and L5 front edges, iris between the two rims, large rear
  components); the production page still shows the old undersized L3 and rear groups with the on-axis fan clipped.

### Open limitations

- The engine's surface-intersection solver fails on r₇ (R = 16.65) for on-axis pupil zones ≥ 0.94 (about f/1.17 and
  faster): the ray's height on the r₇ vertex plane exceeds |R|, the Newton seed evaluates outside the sphere's
  domain, and the ray is reported as clipped (`noConvergedIntersection`). The default diagram fan (≤ 0.83) is
  unaffected; full-pupil analysis samples lose the outermost zones. This is an engine issue, not a data issue.
- Stop position, back focus, close-focus extension and every semi-diameter are calculated or figure-derived; the
  patent tabulates none of them. The 0.28 mm axial air between the r₇ and r₈ rims at F/1.1 shows the tabulated
  example leaves essentially no room for a real iris at full aperture; the production lens may differ.
- Minimum aperture (f/16 vs f/22) is unresolved between secondary sources.
- L5 has no exact catalog glass (SF12-type 648338).

Coordinator addendum, batch gate: the render diagnostics sweep trimmed the drawn r₇/r₈ rims by 0.48 / 0.38 mm
under the default 0.90 gap-sag fraction, because the F/1.1 rims leave only 0.28 mm (2.2 %) of the 12.6 mm iris gap.
`gapSagFrac: 0.98` is set so the validator and renderer accept the traced clearance; no rim value changed.
