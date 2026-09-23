# Audit Log - Canon Serenar 85mm f/1.5

Patent: US 2,645,973, Example 1
Catalog version: local working tree, 2026-05-19

## 2026-05-19 - Full patent audit and glass relabel

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / 3 | `glass` | `SK family (639/555, unconfirmed)` | `K-SK18 (Sumita)` | Patent Example 1 lists nd=1.6385, vd=55.5. Sumita K-SK18 publishes code 639555, nd=1.63854, vd=55.5 with public coefficients. |
| L4 / 5 | `glass` | `SF8 (Schott)` | `S-TIM28 (OHARA)` | Patent Example 1 lists nd=1.6889, vd=31.1. OHARA S-TIM28 publishes code 689311 and matches within patent rounding; current Schott N-SF8 has code 689313 and a different Abbe value. |
| L7 / 11 | `glass` | `SK family (639/555, unconfirmed)` | `K-SK18 (Sumita)` | The rear collector repeats the same nd/vd pair as L2; same public catalog match. |

### Phase 2 - Retained-information audit

- Checked Example 1 normalized surface rows against the data file after the documented 85x scale factor. Stored radii, thicknesses, glass constants, and back focus match the patent table except for the intentional widened `d2` clearance note already documented in the file.
- Confirmed the patent publishes no effective diameters or aspherical coefficients; semi-diameters and `asph: {}` remain project-authored.
- Confirmed the stop split remains an inferred layout choice because the patent does not specify the iris location inside the air gap.

### Phase 3 - Spectral / metadata enrichment

- Added Sumita K-SK18 to the glass catalog from refractiveindex.info's Sumita Zemax data, unlocking Sellmeier/polynomial dispersion for the repeated 639555 row.

### Phase 4 - Analysis sync

- Updated the L2/L7 prose, L4 glass note, glass summary table, and source note for the public coefficient-backed matches.

## 2026-08-18 - Remaining Example 1 coefficient backfill

- Visually rechecked the Example 1 table on rendered page 3 of `patents/US2645973.pdf`; it confirms L5 at
  `1.5317 / 48.9` and L6 at `1.6584 / 50.8`.
- Assigned S-TIL6 and BACED5 as coefficient-backed optical equivalents, with the production supplier unspecified.
  The BACED5 coordinate also corrects the prior unsupported KzFS2 family description and its APD implication.
- No patent constants or geometry changed.

## 2026-09-23 — First-added diagram audit, lens 63

Source: local `patents/US2645973.pdf` (4-page 300 dpi scan). Page 1: Figs. 1 and 2 (Examples 1 and 2); page 2: front
matter and description; page 3: the Example 1 constructional-data table (column 3) and the same data repeated in
claim 4; page 4: claims 5–7. Both copies of the Example 1 table were read on the rendered page image.

### Re-verified and retained

- Front page: `US 2,645,973`, granted July 21, 1953, filed June 29, 1951 (Japan January 31, 1951), inventor Hiroshi
  Ito (Setagaya-ku, Tokyo), assignor to "Canon Camera Company, Ltd." as printed. `patentAssignees` keeps the repo's
  canonical `Canon Camera Co., Inc.`. Example 1 is the Fig. 1 embodiment (f = 1.00, F/1.5, 30° including field).
- Prescription: every R sign, d, nd and νd equals the column-3 table × 85 (r₁ 0.822 → 69.87 … r₁₁ −0.846 → −71.91;
  d₁ 0.105 → 8.925 … d₁₀ 0.060 → 5.1; d₆ 0.190 split 8.075 + 8.075 around the stop). Sign convention (page 3,
  col. 3): plus = convex toward the object, matching the file. Claim 4 prints d₁ = 0.104 instead of 0.105; the file
  keeps the description table (the difference moves EFL/BFD by 0.03 mm). Paraxial EFL of the table is 1.0001 →
  85.005 mm; `focalLengthDesign: 85.0` retained. Element thick-lens focal lengths 122.25 / 118.44 / 94.65 / −27.26 /
  −31.95 / 33.46 / 72.73 mm and groups II / III −106.4 / +499.9 mm reproduce the stored `fl` values and §4.
- Claim 6 values (Group II thickness 0.295f, r₅ power −0.093, r₈ power 0.221) and the |r₇|/f = 0.310 condition
  recomputed; §8 retained.
- Aperture: `nominalFno` 1.5, `fstopSeries` 1.5 → 16, `maxFstop` default 16 (production minimum f/16).
- Glass: L1, L2, L4–L7 labels resolve to catalog rows within 4.2e-5 in nd and 0.08 in νd of the patent pair.
  The patent names no glass and gives no partial-dispersion data; `apd: false` throughout is correct.
- Metadata: 7 elements / 4 groups, `lensMounts: ["leica-ltm"]`, `imageFormat: "135-full-frame"`, element `type`
  strings vs R signs, `groups` / `doublets` ranges, `varLabels`, `specs` (2ω = 30° is the patent's including field).

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| S2 `d` (d₂) | 0.50 (widened) | 0.17 | Patent d₂ = 0.002 × 85. The "cross-gap sag" rationale was wrong: r₂ (+807.5) and r₃ (+37.4) both recede toward the image and r₃ recedes faster, so the gap opens outward. The widening had moved EFL to 85.164 and BFD to 44.633. |
| S12 `d` / `var["12"]` | 44.63 / [44.63, 52.56] | 44.79 / [44.79, 53.37] | Infinity BFD of the patent table is 44.793 mm (defocus now −0.003 mm). Close keyframe derived (no patent close state): +8.58 mm places the object 1.000 m from the image plane; the old 52.56 focused 1.072 m. |
| S1 / S2 `sd` | 27.0 / 27.0 | 29.0 / 29.0 | Exact trace at f/1.5: the axial marginal ray (entrance-pupil radius 28.34) crosses S1 at 28.34 and S2 at 27.77 — both clipped. Fig. 1 draws L1 at ≈ 31 mm; 29.0 keeps it inside the production 58 mm filter / 62.5 mm barrel (the old "max glass OD ≈ 54 mm" bound could not pass f/1.5). |
| S3 / S4 / S5 `sd` | 27.0 / 24.0 / 20.0 | 26.5 / 26.5 / 26.5 | S4 clipped the marginal ray (24.46 needed). Fig. 1 draws one flat rim across r₃, r₄ and r₅ at ≈ 26.7 mm (232 px), then a bevel down to r₆; the old 20.0 at r₅ was 25 % under the figure. |
| S8 (r₇) `sd` | 15.0 | 15.6 | Marginal ray 15.17 clipped. Fig. 1 draws r₇ at ≈ 13 mm with a bevel to the doublet rim; that is below the f/1.5 marginal ray, so the trace floor + 3 % governs. |
| S9 / S10 `sd` | 16.0 / 16.5 | 17.8 / 17.8 | Marginal ray 16.98 / 17.21 clipped. Fig. 1 flat doublet rim ≈ 17.8 mm (154–155 px). L6 edge 0.86 mm. |
| S11 / S12 `sd` | 16.5 / 16.0 | 18.2 / 18.2 | Marginal ray 16.73 / 16.52 clipped. Fig. 1 L7 ≈ 18.3 mm (158–160 px). L7 edge 1.46 mm. |
| L3 `glass` | "BK7 (Schott, ≈)" | "S-BSL7 (OHARA)" | Patent 1.5163 / 64.0; S-BSL7 1.51633 / 64.14 matches, N-BK7 (1.5168) is 5e-4 off in nd, beyond rounding. |
| `subtitle` | "…Example 1 — Hiroshi Ito / Canon" | "…Example 1 (Fig. 1) — Hiroshi Ito / Canon" | Names the figure. |
| `focusDescription` | "…moves forward." | adds that the 1 m keyframe is a derived extension | Labels the derived value. |
| header / STO comment | stop "inferred from Fig. 1 iris placement"; d₂ widening; filter-bound SDs | stop neither tabulated nor drawn; patent d₂; trace + Fig. 1 SD basis; close-focus note | Fig. 1 shows glass only — no iris. |

Figure measurement (Fig. 1, page 1 at 300 dpi): axis row 1150; vertex columns from the d-dimension extension lines
r₁ 861, r₂ 944, r₃ 955, r₄ 1012, r₅ 1156, r₆ 1174, r₇ 1308, r₈ 1323, r₉ 1396, r₁₀ 1408, r₁₁ 1456. Glass and large
air thicknesses give 670–900 px/f (the thin d₂, d₇, d₉ are exaggerated); the sum of the non-thin spacings gives
≈ 8.7 px/mm (±5 %). Rims (px above / below axis): L1 279 / 263, r₃–r₅ flat 236 / 229, r₆ corner ≈ 130 / 137,
r₇ corner ≈ 113 / 112, L5–L6 flat 154 / 155, L7 158 / 160. The drawn r₁ and r₇ sags agree with the tabulated radii
at those heights; r₃ and r₉ are drawn flatter, so only the rim heights and the axial scale were used.

### Checks on the result

- Surface validator clean; image-circle floor 0 undersized.
- Exact trace at f/1.5, Y = 21.6 mm (ω = 14.3°) and at the patent ω = 15°: no CLIPS-AXIAL or BLOCKS-CHIEF at any
  surface. Axial margins 2.3 % (S1), 4.4 % (S2), 4.5 % (S3), 2.8 % (r₇), 3.4 % (S10), 8–10 % at L7. Rear surfaces
  vignette 9–49 % of the one-sided full-field bundle (ordinary for an f/1.5 Gauss); the lower-rim full-field ray
  cannot reach the stop edge at all past r₆ — a property of the prescription, unchanged by the SDs.
- Engine build: EFL 85.005 mm, FOPEN 1.5, stop radius 15.36 mm, half-field 22.5° (was 20.9°), max sd 29.0, no throw.
- Close keyframe: last gap 53.37 mm focuses an object 880.8 mm from S1 = 999.8 mm from the image plane, m = −0.101.
- Glass: all seven labels now resolve compatibly (L3 Δnd 3e-5, Δνd 0.14).
- Prettier clean on all three files.
- Live view (own browser tab, 1400×900): production baseline shows L1 no taller than the triplet front, the triplet
  tapering smoothly to a small L4, and a small rear doublet/L7. The local page after the edit shows L1 as the tallest
  element, the triplet's flat rim with L4's bevel down to r₆ and L5's bevel up to the doublet rim as in Fig. 1,
  off-axis rays at 13.5° passing with ordinary vignetting, and the 1.00 m keyframe converging on the image plane.

### Analysis sync

- §3: added the claim-4 d₁ = 0.104 conflict note. §5 L2: r₃ is joint third-strongest with r₉. §5 L3 and §6 table:
  S-BSL7 catalog equivalent (the old "Δnd = +0.5×10⁻⁴" was wrong by 10×). §9: r₅/r₆ wording corrected.
- §7: stop is neither tabulated nor drawn; the 1 m focus is a derived 8.58 mm extension.
- §11: d₂ widening note replaced by the patent-value note; SD bullet rewritten around the exact trace and Fig. 1.

### Open limitations

- Semi-diameters remain estimates: the patent publishes none, and Fig. 1 is schematic in its thin gaps and in the
  drawn r₃/r₉ sags. L1 (29.0) is deliberately below the figure's ≈ 31 mm; r₇ (15.6) above the figure's ≈ 13 mm.
- Stop position (mid-d₆) and iris diameter are model choices.
- Source conflict: claim 4 prints d₁ = 0.104 against the description table's 0.105 (file follows the table).
- Production details in the analysis (June 1952 launch, unit counts, 20 blades, 58 mm filter, 730 g, 62.5 × 82.8 mm)
  are not in the patent and were not re-verified here.
