# Audit Log - Canon Serenar 28mm f/3.5

Patent: US 2,645,974

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US2645974.pdf`; local text confirms the repeated nd=1.62040, vd=60.30 rows.
- Updated both `SK14 (Schott)` rows to `N-SK16 (Schott)`.

## 2026-07-29 - Dispersion-coordinate follow-up

- Corrected L2 from `SK16 (Schott)` to `E-BAF8 (HOYA)`. E-BAF8 matches the patent's 1.62370 / 47.00 coordinate; N-SK16 has the same index region but νd = 60.32.
- Synchronized the L2 analysis text and glass table. The separate BaF3 row remains in the generated review queue because it has no exact catalog candidate.

## 2026-07-29 - Remaining unmatched-glass disposition

- Rechecked the worked prescription in local `patents/US2645974.pdf`; S6 remains 1.57850 / 41.70 and its R/d
  row is unchanged.
- S6 `BaF3 (Schott)` -> explicit unmatched 579417 vintage barium flint. The current public BaF3 row does not
  reproduce both patent coordinates, so the analysis now uses BaF3 only as a family comparison.

## 2026-07-30 - E-F8 catalog-equivalent recovery

- Rechecked the worked prescription on rendered US 2,645,974 page 3. L3 remains `nd=1.5955`, `νd=39.2`;
  the patent does not name a production glass vendor.
- Relabeled the unsupported `F7 (Schott)` claim to HOYA `E-F8` as a catalog equivalent. The official
  coefficient-backed row is `1.59551 / 39.22` with code `596392`, matching the patent's printed precision.
- Synchronized the L3 narrative and glass table. No prescription geometry changed.

## 2026-08-11 — Phase 92 HOYA FL4 recovery

- Visually rechecked US 2,645,974's worked prescription on rendered PDF page 3: L4 is `1.5785 / 41.7`.
- HOYA's official obsolete-inclusive catalog contains FL4 at `1.578447 / 41.707529` (code `578417`), compatible
  with the patent's rounded `579417` coordinate.
- Relabeled L4 as a supplier-neutral FL4 optical equivalent and synchronized the glass table. No prescription
  geometry changed.

## 2026-09-21 — First-added diagram audit, lens 60

Source: local `patents/US2645974.pdf` (3-page 300 dpi scan). Page 1: Fig. 1 cross-section and Figs. 2–4 aberration
plots; page 2: front matter and the constructional-data table (columns 1–2, lines 36–54); page 3: sign convention,
claims, and the same table repeated in claim 5. Both copies of the table were read on the rendered page image and
agree.

### Re-verified and retained

- Front page: `US 2,645,974`, granted July 21, 1953, inventor Hiroshi Ito (Setagaya-ku, Tokyo), assignor to
  "Canon Camera Company, Ltd." as printed. `patentAssignees` keeps the repo's canonical entity name
  `Canon Camera Co., Inc.` (the corporate-history table notes the grants render the suffix differently). The
  patent has a single illustrative embodiment (Fig. 1); no kind code is printed on a 1953 grant.
- Prescription: every R sign, every d, and every nd/νd row equals the patent table × 27.8688 (r₁ 0.603 → 16.805 …
  r₁₀ −0.866 → −24.134; d₁ 0.068 → 1.895 … d₉ 0.090 → 2.508; the stop splits d₅ 0.100 → 1.394 + 1.394). Sign
  convention per page 3 col. 1: minus = concave to the object side, matching the file. Paraxial EFL of the
  normalized table is 1.0046, so ×27.8688 gives 27.997 mm; `focalLengthDesign: 28.0` retained. BFD 22.297 mm
  against the stored 22.30 (defocus 0.003 mm). Element thick-lens focal lengths 38.36 / 18.42 / −13.61 / −11.21 /
  13.02 / 38.90 mm reproduce the stored `fl` values.
- Stop: the patent neither tabulates nor draws an iris (Fig. 1 shows glass only). Mid-d₅ placement retained; the
  authored STO sd 3.15 implies f/3.47 and the engine derives a 3.12 mm iris from `nominalFno: 3.5`.
- Glass: all six labels resolve to catalog rows within 1e-4 in nd and 0.05 in νd of the patent pair (S-BAL41,
  E-BAF8, E-F8, FL4, N-SK16 ×2). The patent names no glass or supplier; `apd: false` throughout is correct.
- Metadata: `elementCount` 6, `groupCount` 4, `lensMounts: ["leica-ltm"]`, `imageFormat: "135-full-frame"`,
  element `type` strings vs R signs, `groups` / `doublets` ranges, `varLabels`, `specs` (2ω = 75° is the patent's
  "including field") all checked and retained.

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| S1 / S2 `sd` | 5.3 / 4.3 | 5.7 / 5.4 | Exact trace: chief ray to Y = 21.6 mm (ω = 38.0°) crosses S1 at 5.38 and S2 at 4.69 mm — both were blocked. Fig. 1 draws L1's rim flat at ≈1.21× the doublet rim. The old "d₂ sag intrusion" limit was wrong: r₂ and r₃ both recede toward the image and r₃ recedes faster, so the gap opens outward. |
| S3 / S4 / S5 `sd` | 4.3 / 3.8 / 3.5 | 4.6 / 4.0 / 3.6 | Chief ray passes (3.98 at S3); +7 % so the outer elements keep Fig. 1's proportions (doublet is the reference height). d₅ closes outward (r₅/r₆ meet at ≈5.0 mm), so the stop-facing rims stay small. |
| S6 / S7 / S8 `sd` | 3.5 / 3.8 / 4.3 | 3.7 / 4.2 / 4.9 | Chief ray at S8 = 4.23 mm passed with 2 % margin; Fig. 1 draws L4–L5 ≈1.08× the front doublet. |
| S9 / S10 `sd` | 4.5 / 5.3 | 7.5 / 7.5 | Chief ray crosses S9 at 5.16 and S10 at 6.02 mm — both were blocked. Fig. 1 draws L6 ≈1.64× the doublet rim (top rim 219 px, bottom 221 px vs. 132–136 px for L2–L3 at 300 dpi), the largest element by a wide margin. |
| `var["10"]` | [22.3, 23.11] | [22.3, 23.13] | Derived, no patent close state: +0.83 mm puts the object 1.002 m from the image plane (old value: 1.026 m; it had measured 1 m from the front principal plane). |
| `maxFstop` | (default 16) | 22 | `fstopSeries` already ended at f/22, the production lens's minimum aperture as recorded in the analysis. |
| `subtitle` | "US 2,645,974 — HIROSHI ITO / CANON" | "US 2,645,974 sole example (Fig. 1) — HIROSHI ITO / CANON" | Names the embodiment. |
| `focusDescription` | "…rigid unit." | adds "the 1 m keyframe is a derived extension (patent publishes no close state)" | Labels the derived value. |
| header notes | d₂-intrusion SD rationale; stop "consistent with Fig. 1" | trace + Fig. 1-proportion rationale; stop "not tabulated, not drawn"; close-focus note | As above. |

Figure measurement: axis at row 1243 (300 dpi); vertex columns from the d-dimension lines r₁ 712, r₂ 758, r₃ 767,
r₄ 825, r₅ 840, r₆ 923, r₇ 940, r₈ 1027, r₉ 1039, r₁₀ 1099. Axial scale is not uniform (glass thicknesses 590–700
px/f, d₅ 830 px/f, d₂/d₈ 1800–3000 px/f) and the sag drawn on r₁ implies ≈1010 px/f, under which L1 would be 4.5 mm
and could not pass the patent's own 75° field — so only the rim-height ratios were used. Rims (px above / below
axis): L1 161 / 164, L2–L3 136 / 132, L4–L5 144 / 146, L6 219 / 221.

### Checks on the result

- Surface validator clean; image-circle floor: 0 undersized (it was also silent before — its bound is conservative
  and did not see the chief-ray blocking that the exact trace found).
- Exact trace at Y = 21.6 mm, f/3.5: no CLIPS-AXIAL or BLOCKS-CHIEF at any surface; chief-ray margins 6 % (S1),
  15 % (S2), 16 % (S3, S8), 25 % (S10); remaining flags are ordinary edge vignetting (7–90 % of the one-sided bundle
  height, most at S1/S2/S3/S8).
- Engine build: EFL 27.997 mm, FOPEN 3.5, half-field 38.5° (was 33.7°; the patent's 75° field and the 135 diagonal
  37.7° are now inside it), max sd 7.5, maxFstop 22, no throw.
- Close keyframe: last gap 23.127 mm focuses an object 964 mm from S1 = 1002 mm from the image plane, m = −0.030.
- Prettier clean on the data file.
- Live view (own browser tab, 1400×900): production baseline shows L6 barely taller than the doublets and off-axis
  rays at 20.2°; the local page after the edit shows L1 : doublets : L6 in Fig. 1's proportions, off-axis rays at
  23.1° passing through the upper half of L6, and the 1.00 m keyframe with BF 23.13 mm converging on the image plane.

### Analysis sync

- Metadata block: added the embodiment line and the as-printed assignee wording.
- §2.1: stop is neither tabulated nor drawn. §2.4: EFL 1.0046, scale wording.
- §3.4: L4 line and paragraph now say HOYA FL4 catalog equivalent (was still "unmatched vintage barium flint").
- §3.5, §3.6, §4: "Schott SK14" → N-SK16 catalog equivalent (the May relabel had not reached the prose); "four
  distinct glass types" → five (§3.6, §4, §11); §4 table now lists the catalog rows actually used and drops the
  unsupported "match the Schott catalog exactly" claim.
- §8: extension recomputed for 1 m from the film plane (0.83 mm), labelled derived.
- §10: rewritten around the exact-trace floor and Fig. 1 proportions; the d₂-intrusion argument removed.

### Open limitations

- Semi-diameters remain estimates: the patent publishes none and Fig. 1 is schematic. The absolute sizes are set by
  ray passage plus margin; only the proportions come from the drawing.
- Stop position (mid-d₅) and the iris diameter are model choices, not patent values.
- Production details in the analysis (f/22 minimum, 34 mm Series VI filters, 6 blades, dimensions, weight) are not
  in the patent and were not re-verified here.
- Production glass supplier unknown; all labels are catalog equivalents of the printed nd/νd.
