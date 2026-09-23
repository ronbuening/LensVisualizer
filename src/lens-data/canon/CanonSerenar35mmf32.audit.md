# Audit Log - Canon Serenar 35mm f/3.2

Patent: US 2,645,975, Example 1

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US2645975.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The Schott SK/LF labels remain appropriate for the vintage double-Gauss patent constants.
- No element requires high-index status; all stored nd values are below 1.8.

### Phase 2 - Retained-information audit

- The patent is normalized near f=1 and does not publish clear apertures or a separate stop surface. Existing SDs and central stop placement remain inferred from paraxial rays, field fraction, filter-thread constraints, and Fig. 1.
- Retained the existing scale factor to the 35 mm production focal length.

## 2026-09-23 — First-added diagram audit, lens 61

Source: local `patents/US2645975.pdf` (3-page 300 dpi scan). Page 1: the single figure (axial section with the stop S
drawn as iris bars); page 2: front matter and description; page 3: the constructional-data table (col. 3) and the same
table repeated in claim 5 (col. 4). Both copies were read on the rendered page image and agree.

### Re-verified and retained

- Front page: `US 2,645,975`, granted July 21, 1953, filed June 29, 1951 (Japan July 14, 1950), inventor Hiroshi Ito
  (Setagaya-ku, Tokyo), assignor to "Canon Camera Company, Ltd." as printed; `patentAssignees` keeps the repo's
  canonical `Canon Camera Co., Inc.` as for the 28 mm sibling. One illustrative embodiment only; no kind code on a
  1953 grant.
- Prescription: every R sign, d and nd/νd equals the patent table × 35.623 (r₁ 0.6248 → 22.257 … r₁₀ −0.7947 →
  −28.310; d₁ 0.0735 → 2.618 … d₉ 0.0642 → 2.287). The normalized table computes to EFL 0.9825, so the stored scale
  gives EFL 34.998 mm, BFD 24.998 mm against the stored 24.999 (defocus 0.001 mm). Element thick-lens focal lengths
  52.91 / 22.56 / −16.19 / −13.47 / 16.75 / 36.41 mm reproduce the stored `fl` values; doublets −112.9 and −172.4 mm.
- Field: the exact trace puts the chief ray on the 21.6 mm corner at ω = 32.0°, matching the patent's 64° including
  angle.
- Glass: L1 SK5, L2 SUMITA K-SK7, L6 Schott SK10 (catalog row N-SK10) are within 3e-5 in nd and 0.08 in νd. The patent
  names no glass or supplier; `apd: false` throughout is correct.
- Metadata: 6 elements / 4 groups, `lensMounts: ["leica-ltm"]`, `imageFormat: "135-full-frame"`, element `type`
  strings vs R signs, `groups` / `doublets` ranges, `varLabels`, `specs` checked and retained.

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| STO position (d split of d₅) | 2.543 / 2.543 (mid-gap, "inferred from Fig. 1") | 3.200 / 1.887 | The figure draws S at 0.63 of d₅ behind r₅ (bars at x ≈ 1240 px; r₅ vertex 1171, r₆ 1281 at 300 dpi). The figure is to scale: vertex crossings give 21.46 px/mm over r₁→r₁₀ and 21.6 over d₅. Sum now 5.087 = 0.1428 × 35.623 (was 5.086). |
| S5 / S6 `sd` | 7.0 / 6.5 | 5.3 / 5.4 | The figure ends r₅ and r₆ at 114 / 117 px (5.3 / 5.4 mm) and bevels out to the doublet rims. The concave faces close toward each other at the edge: at the old values their rims were 0.15 mm apart and r₅'s rim lay behind the mid-gap stop plane. Now r₅'s rim is 1.78 mm ahead of the stop and r₆'s 0.37 mm behind it (drawn 1.74 / 0.51 mm). The drawn sags of r₅/r₆ (≈1.55 / 1.35 mm) agree with the model's 1.42 / 1.52 mm to ≈0.15 mm, confirming the radial scale. |
| S1 / S2 `sd` | 11.5 / 10.5 | 10.0 / 10.0 | Figure L1 rim 221 / 205 px above / below the axis → 9.9 mm, drawn with a ≈1.1 mm edge (model edge at 9.5–10 mm: 1.1–0.9 mm). The old front rim was 16 % over the drawing, and the rear one was stepped. |
| S3 / S4 `sd` | 9.0 / 8.0 | 7.7 / 7.7 | Figure front-doublet rim 173 / 157 px → 7.7 mm, flat across r₃ and the r₄ junction. |
| S7 / S8 `sd` | 7.0 / 8.0 | 7.6 / 7.6 | Figure rear-doublet rim 167 / 160 px → 7.6 mm, flat across the r₇ junction and r₈. |
| S9 / S10 `sd` | 8.5 / 9.5 | 9.1 / 9.1 | Figure L6 is knife-edged at 199 / 193 px → 9.1 mm (model edge 0.41 mm there). |
| STO `sd` | 4.2 | 4.1 | Record of the engine iris radius at f/3.0 with the moved stop (4.07 mm); the engine overwrites it. |
| `nominalFno`, `fstopSeries`, `maxFstop` | 3.2; series from 3.2; default 16 | 3.0; series from 3; 22 | Patent F:3.0 (table heading and claim 5); f/3.2 stays in `apertureMarketing`. The series already ended at f/22. |
| `var["10"]` close | 26.268 | 26.316 | Derived, no patent close state: +1.317 mm puts the object 1.000 m from the image plane (the old value focused at 1.035 m). |
| L3 / L4 `glass` | LF5/LF7 (Schott) | FL4 (HOYA catalog equivalent) | The old label resolved to LF5 1.58144 / 40.85, which is not the patent's 1.5785 / 41.7. FL4 is 1.57845 / 41.71. |
| L5 `glass` | SK14 (Schott) | BACD14 (HOYA catalog equivalent) | The old label resolved to N-SK14 1.60311 / 60.60. BACD14 is 1.60311 / 60.69, matching the printed 60.7. |
| `subtitle`, header, `focusDescription`, STO comment | "Example 1"; paraxial-estimate SD note; stop "midpoint … inferred from Fig. 1 iris placement" | sole example (Fig. 1); figure-measured SD note; figure stop position; derived-close-focus note | As above. |

### Checks on the result

- Surface validator clean; image-circle floor 0 undersized.
- Exact trace at Y = 21.6 mm, f/3.0: no CLIPS-AXIAL or BLOCKS-CHIEF at any surface. The S1 chief-ray margin is 7.6 %
  (9.29 mm vs 10.0), and every other surface has more. The corner bundle is trimmed on one side by L1–L2 (75–83 % of
  that side's extent at S1–S3) and on the other by L6 (25–28 %); the old mid-gap stop and oversized rims gave a
  similar total width.
- Engine build: EFL 34.998 mm, FOPEN 3.0, iris radius 4.07 mm, half-field 34.8° (patent ω = 32° inside it), max sd
  10.0, maxFstop 22, no throw. Authored STO sd implies f/2.98.
- Close keyframe: last gap 26.316 mm focuses an object 952.8 mm from S1 = 1000.1 mm from the image plane, m = −0.038.
- Glass check: all six labels resolve within 5.3e-5 in nd and 0.08 in νd of the patent pair.
- Prettier clean on the data and analysis files.
- Live view (local, completed by the coordinator after the per-lens pass): the rendered element heights are 235 : 181 : 214 px
  for L1 : the doublets : L6, matching the 10.0 : 7.7 : 9.1 mm rims; the aperture control runs f/3.0 to f/22 with f/3.2
  as the marketed label; focus runs ∞ to 1.00 m; no console errors. Screenshots were unavailable (browser pane hidden),
  so the check read the rendered SVG geometry.

### Analysis sync

- Metadata block and §4 heading: sole embodiment instead of "Example 1".
- §2 and §4.1: the stop is drawn in the figure at 0.63 of d₅, now used; new paragraph on figure-measured rims and
  corner vignetting.
- §4: f/3.0 → f/3.2 is about a fifth of a stop, not "half-stop"; the diagram now opens to f/3.0. §4.1: removed the
  "computed EFL ~34.4 mm / 64.5°" statement (the scaled EFL is 35.0 mm); field checked by exact trace.
- §5: glass table rebuilt on the catalog rows actually used (FL4, BACD14, N-SK10 row for SK10); LF5/LF7 kept only
  as a family comparison. §6 L3/L4/L5 glass rows updated.
- §8: close-focus extension recomputed for 1 m from the image plane (1.32 mm, labelled derived).

### Open limitations

- Semi-diameters are measurements of the patent figure, not patent values. The figure is to scale axially, and its
  radial scale is confirmed by the r₅ / r₆ sags, but it is still a drawing.
- The stop position comes from the drawing and the iris diameter from `nominalFno`; neither is tabulated.
- Production details in the analysis (≈7,719 made, 34 mm filter, 6 blades, 165 g, June 1951 release, f/22 minimum)
  are not in the patent and were not re-verified here.
- Production glass supplier unknown; all labels are catalog equivalents of the printed nd/νd.
