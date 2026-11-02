# Audit Log - Minolta AF 35-105mm f/3.5-4.5 New (v2)

Patent: US 4,871,239, Example 3 / claim 29

## 2026-05-19 - Missing-Sellmeier queue audit

### Patent evidence

- Local patent file checked: `patents/US4871239.pdf`.
- Claim 29 table rows confirmed for the reviewed code-only elements:
  - L2/L5/L8: nd = 1.67000, vd = 57.07.
  - L3: nd = 1.69680, vd = 56.47.
  - L4: nd = 1.77250, vd = 49.77.
  - L10: nd = 1.80741, vd = 31.59.
  - L11: nd = 1.72000, vd = 42.02.
  - L12 thin layer: nd = 1.51790, vd = 52.31.
  - L13: nd = 1.80500, vd = 40.97.

### Catalog-search disposition

- Used the newly added CDGM `H-LAK12` as the coefficient-backed equivalent for L3's `697565` family.
- Added OHARA `S-LAM58` from the public OHARA datasheet; it is the exact coefficient-backed `720420` match for L11.
- No coefficient-backed public matches were found for `670571`, `773498`, `807316`, `518523`, or `805410`.

### Changes made

| Element(s) | Before | After | Disposition |
|---|---|---|---|
| L2, L5, L8 | `Unmatched 670/571 ...` | `670571 - ...` | Unresolved; explicit code retained. |
| L3 | `Unmatched 697/565 ...` | `H-LAK12 (CDGM equivalent; patent 697565)` | Coefficient-backed equivalent. |
| L4 | `Unmatched 773/498 ...` | `773498 - ...` | Unresolved; explicit code retained. |
| L10 | `Unmatched 807/316 ...` | `807316 - ...` | Unresolved; explicit code retained. |
| L11 | `Unmatched 720/420 ...` | `S-LAM58 (OHARA)` | Exact catalog match. |
| L12 | `Unmatched 518/523 ...` | `518523 - ...` | Unresolved hybrid/aspheric layer. |
| L13 | `Unmatched 805/410 ...` | `805410 - ...` | Unresolved; explicit code retained. |

### Analysis sync

- Updated element descriptions and the glass-identification table for the resolved and unresolved rows.

## 2026-06-24 - Folder-wide patent audit

### Patent evidence

- Rechecked local `patents/US4871239.pdf`, Example 3 / claim 29.
- The prior May glass audit remains valid, including the corrected d13 treatment, the thin rear aspheric layer, and the code/equivalent glass dispositions.

### Disposition

- No additional glass-label, APD, or high-index-status changes were needed.
- The patent gives no per-surface clear apertures. Existing SDs remain inferred from the zoom envelope, inserted stop, element edge thickness, and corrected spacing geometry, so no SD edits were made.

## 2026-07-29 - Repeated `670571` catalog-equivalent review

- Rechecked the Claim 29 rows for L2, L5, and L8 at `nd = 1.67000`, `vd = 57.07`; their stored radii,
  thicknesses, and optical coordinates still match the patent.
- Official OHARA all-products data publish discontinued S-LAL52 with coefficient-backed dispersion,
  `nd = 1.669999`, `vd = 57.327972`, and code `670573`.
- Relabeled the three explicit unresolved `670571` annotations to
  `S-LAL52 (OHARA catalog-equivalent to 670571; patent vendor unspecified)`. The exact d-line agreement
  and `+0.258` Abbe difference support the optical model, but do not prove that OHARA supplied the glass.
- Synchronized the analysis prose and table. No prescription geometry, APD status, or semi-diameter changed.


## 2026-10-27 — Rimmer localization audit (asphere data)

### Patent evidence and prescription check

- Source: local `patents/US4871239.pdf`, Example 3, Table 3 (PDF page 48, columns 19-20), repeated in claim 29 (PDF page 59, columns 41-42). These are PDF page numbers, including the drawing sheets.
- Read the rendered pages at 220 dpi and the Table 3 coefficient block at 400 dpi. The sag equations on PDF pages 43 and 47 (columns 9 and 18) use a spherical base plus radial powers `A_i Y^i`. Thus A4/A6/A8/A10/A12 mean powers 4/6/8/10/12, K = 0, with no rescaling of this millimetre prescription. No odd terms are printed for this example.
- Checked every radius r1-r23, fixed spacing d1-d22, each zoom gap d5/d13/d18, and N1-N13 / vd1-vd13 against the rendered Table 3 and claim 29. They match the authored numbers except for the already documented wide d13 reconstruction and the model's inserted stop/computed image distances. No new R/d/nd/vd mismatch was found. Stored numerical precision omits only trailing zeros.
- The existing d13 reconstruction is retained: printed 5.505 mm gives Gaussian EFL 74.636 mm; 15.505 mm total r13-r14 spacing gives 35.9978 mm against the source's 36.0 mm. With the inferred stop 1 mm before r14, the authored first gap segment remains 14.505 mm. The final printed `d = 66.067` is a construction-length entry; it is not a measured image-side back focus.
- All five printed aspheric coefficients are negative: A4 = -0.66020e-4, A6 = -0.52200e-7, A8 = -0.64384e-8, A10 = -0.11612e-9, A12 = -0.84797e-12. Both printed copies agree with the file. This is not an asphere transcription or coefficient-order error.

### Changes made

| File / field | Before | After | Reason |
|---|---|---|---|
| Data header | No Rimmer/source-contradiction note | Documents printed A10, positive-sign candidate and absence of a turnover | Qualify the retained surface |
| `source.errata` | Absent | One `unresolved` entry describing r21 A10 and the numerical source contradiction | Disclose unresolved source fidelity beside optical analyses |
| Analysis / asphere interpretation | Negative terms described as weakening the peripheral surface effect | Negative departure strengthens the negative surface power; published aberration agreement is unconfirmed | Correct the sign interpretation |
| Analysis / asphere evidence | Coefficient table only | Adds equation check, rim departure/slope, bounded sign search and Table 21 comparison | Preserve source and diagnostic evidence |
| Analysis / first-order summary | Unqualified paraxial re-trace introduction | Explicitly limits EFL/BFL agreement to first-order results | Prevent paraxial agreement from implying localized rays |
| Audit sidecar | Earlier glass-only review history | Appends this audit and follow-ups | Record the decision |

No numerical surface, coefficient, aperture, gap, glass, focus or zoom value changed.

### Finding and bounded source-errata search

Triage and failing-field ray details reproduce the baseline's smooth high-order error at 21A. At 17.33° wide, the meridional pupil ray y = -0.95 meets 21A at height 8.16 mm and approximately 61° incidence, giving image error -9.290 mm; the neighboring -0.90 ray meets it at 7.86 mm / 54° and gives -6.378 mm. There is no detected turnover crossing. These are diagnostic ghost-path details; the vignetting probe separately applies its own transmission sampling.

A bounded scratch-copy search tried sign, ×10, /10 and zero for each coefficient, all pairwise coefficient swaps, a whole coefficient-row shift in either direction, and every sign combination. Swaps/row shifts and several combinations were refused by the existing ingest/geometry checks; they were not forced through. Among the buildable variants, A10 sign alone is the only one whose LSA samples all lie inside ±0.5 mm across all three stations. No coefficient was fitted.

| Zoom station | Stored LSA at pupil 1 / 0.85 / 0.7 / 0.5 (mm) | Positive-A10 scratch candidate (mm) |
|---|---|---|
| Wide | +1.656 / +0.104 / -0.240 / -0.200 | -0.216 / -0.325 / -0.323 / -0.205 |
| Mid | +3.261 / +0.611 / -0.044 / -0.122 | +0.011 / -0.145 / -0.191 / -0.131 |
| Tele | +10.734 / +2.339 / +0.427 / +0.005 | -0.095 / +0.051 / -0.004 / -0.022 |

The d-line curves in Figs. 27a/28a/29a (PDF page 15, drawing sheet 14) have horizontal axes -0.5 to +0.5 mm. The stored marginal-ray shifts conflict with their scale; the positive-A10 candidate has the appropriate scale and broad curve behavior. The source plots themselves label wide f = 35 and tele f = 102.5, whereas Table 3 states 36 and 102; the stored apertures also use marketing f/3.5 and f/4.5 instead of printed f/3.6 and f/4.65. This is a scale/shape comparison, not an assertion of exact curve identity.

A separate calculation against Table 21 (PDF page 55, column 34, Emb. 3) supports the same A10 sign. With Co = -1/25.806 and N' - N = 0.5179, the printed normalized shape parameter is `(abs(X) - abs(X0)) / (Co (N' - N))`:

| Height (mm) | Table 21 | Stored / printed A10 | Positive-A10 candidate |
|---|---|---|---|
| 6 | -4.6657 | -5.3654 | -4.6657 |
| 7 | -9.0043 | -12.2731 | -9.0043 |
| 8 | -16.2293 | -28.6549 | -16.2295 |
| 9 | -28.5338 | -68.8838 | -28.5344 |

The last decimals differ slightly, consistent with the rounded printed coefficients. Table 21's height-1 entry also prints +0.0033 where both versions calculate about -0.0033; no separate correction to that table is asserted here.

The aberration tools show the same qualitative difference off axis: at the current full-format edge, stored wide T/S shifts are +40.639 / +1.907 mm, while the positive-A10 scratch copy gives -1.228 / -0.261 mm. Mid values change from +4.209 / +0.160 to -1.108 / -0.346 mm; tele from +0.932 / -0.194 to -0.261 / -0.315 mm. Wide distortion changes from -2.925% to -4.792%, mid from +1.508% to +1.245%, and tele from +3.246% to +3.205%, consistent in direction and scale with Figs. 27b-c/28b-c/29b-c. Edge fields are independently solved to the format corner for each variant, so these are not identical-angle samples. All these plots count as the one `aberration-figure` evidence kind.

**Disposition: errata-unresolved.** Table 21 is an independent quantitative surface-shape summary, but the policy's defined `source-summary` kind explicitly lists f/F-number/field/image height/back focus/length, not surface sag. The claimed shape inequality is satisfied by both signs and therefore cannot be used as an independent `claims` discriminator. Claim 29 repeats the negative sign, not the candidate sign. Related Japanese-publication pages were located through the US priority links, but no rendered matching prescription with the candidate sign was obtained. No second listed evidence kind is confirmed; retain A10 = -0.11612e-9 and expose the contradiction. This does not establish that the print is optically correct.

### Rims and optical rechecks

- Figure 3 (PDF page 3, drawing sheet 2) shows a large front group, compact variator/rear units and a square-cut rear component. Only optical rims were compared; labels, group brackets and motion arrows were excluded. No robust discrepancy greater than about 25% was established, and the patent publishes no per-surface effective diameter. Existing inferred SDs remain estimates.
- The 21A scan at its unchanged 9.0 mm rim gives departure -1382.4 µm, sag -3.0027 mm, slope -1.599 (-58.0°), with no turnover within the authored rim. No turnover cap is justified.
- Stored geometry satisfies the surface validator. The image-circle floor is satisfied, and the chief ray reaches the full-format corner at every authored zoom station. Those checks do not validate localization or RI.
- Aperture census retains a surface-14 restriction at tele: stored f/4.5 traces to about f/4.745. Wide traces to f/3.555 for stored f/3.5; mid is f/4.2. The stored endpoint apertures are faster than the source's f/3.6 and f/4.65. Queue the rim/aperture decision with the unresolved prescription and inferred stop; this audit does not enlarge a rim to conceal the source contradiction.
- Vignetting re-probes at zoomT 0, 0.5 and 1 are numerically identical before/after the documentation-only edits. At wide RI is refused from 14.4° (maxDev 0.0793) through 31.8° (0.1384). At mid it is refused from 11.2° through 19.6°; at tele from 9.7° through 11.6°. The failure reason remains `rays-not-localized`.

### Follow-ups for the coordinator

- Queue the A10 contradiction in `agent_docs/sd-audit-queue.md` Section G. Obtain a rendered matching Japanese priority/family table, or make an explicit policy ruling on whether Table 21's quantitative shape summary qualifies as an independent kind before applying the positive sign.
- If the candidate sign becomes authorized by source evidence, apply it with the four required errata records, then recheck SDs, aperture and RI across zoom; do not use a rim reduction to force RI availability.
- Queue the surface-14 tele aperture restriction in Section I, accounting for the source-versus-marketing F-number endpoints and inferred stop. Shared queue files are outside this assignment's edit scope.
- The coordinator owns full repository gates and any commits. No git commands, broad test suites, generators, lint, formatting or build were run in this assignment.

## 2026-10-28 — stated-beam raise held for Section H

After #933's paraxial stop rule, `npm run audit:aperture -- --raise` lists 14: 8.3 → 8.7 and 15: 8.4 → 8.6 mm, flagged
"nominalFno faster than design". The stations carry the marketed f/3.5, f/4.2 and f/4.5 against the 3.6 design value,
which is the `sd-audit-queue.md` Section H row. Section I raises wait for the source's design f-number at every
station, so the rims are unchanged. Rerun the raise once that row is closed.
