# Audit Log — Canon Serenar 50mm f/1.8

Patent: US 2,681,594 C, Claim 3

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US2681594.pdf`.
- Claim 3 row confirmed L3 / surface 4 nd = 1.74000, vd = 28.2.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L3 / S4 | `NBFD3 (HOYA)` | `S-TIH3 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |

### Analysis sync

- Updated the L3 glass match and summary prose.

## 2026-05-31 — BAFD7 catalog side-effect cleanup

### Context

- The Sigma 20mm F1.4 patent audit added coefficient-backed modern HOYA `BAFD7` to the glass catalog.
- Modern HOYA `BAFD7` is nd = 1.70154, vd = 41.15 (code 702412), not this Serenar patent row's nd = 1.6261, vd = 39.1.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L2 / S3 | `BAFD7 (HOYA)` | `Unmatched vintage barium dense flint (626391; not modern HOYA BAFD7 702412)` | Prevents a stale modern-catalog resolution after the BAFD7 catalog addition. |

### Analysis sync

- Updated the L2 prose and glass summary to treat the row as a vintage 626/391 barium-dense-flint class, not a modern HOYA BAFD7 match.

## 2026-07-30 — Historical SK18 catalog-equivalent recovery

- Visually rechecked Claim 3 in local `patents/US2681594.pdf`; L5 and L6 are both `nd=1.6385`, `νd=55.5`.
- Relabeled both historical Schott SK18 annotations to coefficient-backed SUMITA K-SK18, whose official
  obsolete-inclusive row is `nd=1.63854`, `νd=55.5`, code `639555`.
- Each annotation explicitly identifies K-SK18 as a catalog equivalent and leaves the patent glass supplier
  unspecified.
- Synchronized the element analysis and glass summary; no prescription geometry or authored optical constants changed.

## 2026-08-07 — Near-complete glass opportunity

- Visually rechecked Claim 3 in local `patents/US2681594.pdf`; L2 is `nd=1.6261`, `νd=39.1`, code 626391.
- Relabeled L2 to coefficient-backed CDGM H-BaF8, whose public row is code 626391 (`nd=1.62604`, `νd=39.07`).
- The label explicitly treats H-BaF8 as a catalog equivalent and leaves the 1950 production supplier unspecified; modern HOYA BAFD7 remains rejected as the unrelated 702412 glass.
- Added legacy Schott K10 from its official datasheet (`nd=1.50137`, `νd=56.41`, code 501564), so the patent's rounded L4 coordinate now also has a coefficient-backed curve.
- Synchronized the analysis. No geometry or authored patent constants changed.

## 2026-09-23 — First-added diagram audit, lens 62

Source: local `patents/US2681594.pdf` (3-page 300 dpi scan). Page 1: the single cross-section figure; page 2: front
matter and description; page 3: the constructional-data table (col. 3) and claims, with the same table repeated in
claim 3 (col. 4). Both copies were read on the rendered page image and agree digit for digit.

### Re-verified and retained

- Front page: `US 2,681,594`, granted June 22, 1954, filed June 29, 1951 (Japan priority November 7, 1950), sole
  inventor Hiroshi Ito, assignor to "Canon Camera Company, Ltd." as printed; `patentAssignees` keeps the repo's
  canonical `Canon Camera Co., Inc.` (as for lens 60). One numerical example only.
- Prescription: every R sign, d, nd and νd equals the patent table × 55.725 (r₁ 0.5800 → 32.32 … r₁₀ −1.257 →
  −70.05; d₁ 0.095 → 5.294 … d₉ 0.070 → 3.901; the stop splits d₅ 0.132 → 3.678 + 3.678).
- Scale: the table is headed f = 1.00 but computes to paraxial EFL 0.8973 in both copies. A single-value search
  found only two changes that restore 1.00: r₁ ≈ 0.696 (not a digit-level misprint of 0.5800) and d₈ = 0.203 for
  0.003, which the figure contradicts (d₈ drawn as a hairline, far narrower than d₅). Recorded as a source
  inconsistency; the ×55.725 scale to the production 50 mm is retained. EFL 49.988 mm, BFD 25.418 mm against the
  stored 25.43 (defocus 0.012 mm). Element thick-lens focal lengths 60.79 / 27.78 / −16.15 / −27.06 / 26.06 /
  63.66 mm reproduce the stored `fl`; cemented groups −74.38 and +192.89 mm.
- Glass: all six labels resolve to catalog rows within 1e-4 in nd and 0.10 in νd (N-SK16 via the `SK16` label,
  H-BaF8, S-TIH3, K10, K-SK18 ×2). HOYA FD3 (1.74000/28.25) is marginally nearer L3 than S-TIH3 (28.30); both are
  compatible and the label was left. The patent names no glass; `apd: false` throughout is correct.
- Metadata: `elementCount` 6, `groupCount` 4, `lensMounts: ["leica-ltm"]`, `imageFormat: "135-full-frame"`,
  `nominalFno` 1.8 (patent F:1.8), `specs` (2ω = 46° is the patent's "including field"), element `type` strings vs
  R signs, `groups` / `doublets` ranges and `varLabels` all checked and retained. `maxFstop` default 16 matches the
  production minimum aperture recorded in the analysis.

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| S4 `sd` | 10.6 | 13.2 | Exact trace: the f/1.8 axial marginal ray reaches 10.95 mm at the cemented junction — it was clipped. The figure draws doublet II with one flat rim across both components, so the junction takes S3's 13.2. |
| S7 / S8 `sd` | 8.7 / 8.4 | 11.4 / 11.4 | Figure rim of doublet III is 0.74× L1 (189 / 182 px above / below axis vs L1 252 px) → 11.4 mm at L1 = 15.5. The 12° oblique bundle already spans 11.6 mm at S8; the old S8 passed the full-field chief ray (8.30 mm) by 1 %. |
| S9 / S10 `sd` | 8.3 / 7.8 | 12.8 / 12.8 | Full-field chief ray (ω = 23.7°, Y = 21.6 mm) crosses S9 at 9.27 and S10 at 10.13 mm — both were blocked. The figure draws L6 at 0.83× L1 (206 / 210 px), taller than doublet III, nearly knife-edged; edge thickness now 1.85 mm. |
| STO `sd` | 8.4 | 8.5 | Record of the f/1.8 iris radius the engine derives (8.47 mm). |
| `var["10"]` | [25.43, 28.06] | [25.43, 28.2] | Derived (no patent close state): +2.77 mm focuses an object 1001 mm from the image plane, m = −0.055; the old value focused at 1049 mm. |
| `subtitle` | "US 2,681,594 Claim 3 — …" | "US 2,681,594 sole example (claim 3) — …" | Names the embodiment; there is no "Example 1" in the patent. |
| `focusDescription` | "…moves axially." | adds that the 1 m keyframe is a derived extension | Labels the derived value. |
| header notes | "EFL scaled", SDs "marginal trace + 40 mm filter, 1.25 ratio" | EFL inconsistency explained; SD, stop and close-focus notes | As above. |

Retained with evidence: S1 15.5 (axial 13.89, figure-scale estimate 16.7, within 8 %); S2 14.3 (figure draws L1 with
a knife edge, S2 ≈ S1, 8 % off — left); S3 13.2 (figure ratio 0.84× L1 = 13.0); S5 9.8 and S6 8.7, which the
figure draws as optical surfaces ending inside a bevel at 142 and 130 px (≈ 8.7 and 8.0 mm at the L1 scale, below
the 8.55 / 8.13 mm marginal ray, so the traced values govern).

Figure measurement (page 1, 300 dpi, axis row 1675): vertex columns from the d-dimension lines r₁ 866, r₂ 938,
r₃ 956, r₄ 1066, r₅ ≈1100, r₆ 1221, r₇ 1259, r₈ 1381, r₁₀ ≈1448. The axial drawing scale is not uniform (glass
thicknesses 0.074 mm/px, d₅ 0.061 mm/px, first-to-last vertex 0.0665 mm/px), so only rim-height ratios were used;
at the overall 0.0665 mm/px the rims would be 16.7 / 14.0 / 12.4 / 13.8 mm, i.e. the adopted set is the same shape
about 7 % smaller.

### Checks on the result

- Surface validator clean; image-circle floor: 0 undersized (also silent before, although the exact trace found the
  S4 clip and the S9/S10 chief-ray blocks).
- Exact trace at Y = 21.6 mm, f/1.8: no CLIPS-AXIAL or BLOCKS-CHIEF at any surface; chief-ray margins 38 % (S9),
  26 % (S10), 37 % (S8).
- Engine build: EFL 49.988 mm, FOPEN 1.8, STO 8.468 mm, half-field 26.0° (was 18.6°, below the patent's 23°), max
  sd 15.5, no throw.
- Close keyframe: last gap 28.20 mm focuses an object 935 mm from S1 = 1001 mm from the image plane, m = −0.055.
- Prettier clean on the data file.
- Live view: production baseline (own tab, 1400×900) shows doublet III and L6 drawn at about half L1's height. The
  local page after the edit rendered without console errors at infinity, at the 1.00 m keyframe and with off-axis
  rays on; element outline heights measured from the rendered SVG are 287 / 245 / 211 / 237 px, i.e. 1 : 0.85 : 0.74
  : 0.83 against the figure's 1 : 0.84 : 0.74 : 0.83. Screenshots of the local page were unavailable (browser pane
  not displayed), so the post-edit check used the SVG geometry.

### Analysis sync

- Metadata block and §1: embodiment is the sole example printed in the description and repeated in claim 3.
- §2: stop neither tabulated nor drawn; EFL paragraph rewritten (rounding cannot explain 10 %; misprint search);
  new "Semi-diameters" subsection.
- §3: aperture-stop paragraph; group focal lengths −74.4 / +192.9 mm; L3 catalog νd 28.30; claim 1 bounds on r₄
  and r₇ added next to the claim 2 ratio.
- §5: derived 2.77 mm extension for 1 m. §7: all six glasses now coefficient-backed (the paragraph still called L2
  unmatched after the August H-BaF8 relabel); catalog list in the closing note updated.

### Open limitations

- The table's f = 1.00 heading is inconsistent with its own data (EFL 0.8973); the diagram's scale is set by the
  production focal length, not by the patent heading.
- Semi-diameters remain estimates: the patent publishes none and the figure is schematic; only proportions come from
  the drawing.
- Stop position (mid-d₅) and iris diameter are model choices.
- Production facts in the analysis (f/16, 10 blades, 1.0 m MFD, 40 mm filter, dimensions, weight, production
  volume, designer biography) are not in the patent and were not re-verified.
