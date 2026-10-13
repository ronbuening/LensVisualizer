# Audit Log — Leica ELCAN 50mm f/2

Patent: US 3,649,104, Example 3

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US3649104.pdf`.
- Example 3 row confirmed L3 / surface 5 nd = 1.7471, vd = 27.4.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L3 / S5 | `≈SF4 (dense flint)` | `747274 - dense flint...` | No exact public coefficient-backed match found; retained as unbroken six-digit code for future upgrade. |

### Analysis sync

- Updated the L3 glass paragraph and table row to describe the code-backed unresolved glass.

## 2026-06-24 — Folder audit recheck

- Rechecked local `patents/US3649104.pdf` OCR for Example 3.
- Retained L3 as `747274 - dense flint...`; the patent row is nd=1.7471, vd=27.4 and still has no verified coefficient-backed public match.
- Rechecked APD/high-index status: no anomalous partial-dispersion data are published, and all elements remain non-APD. L4 remains a high-index lanthanum-flint class assignment supported by the patent nd/vd row.
- No patent clear-aperture or semi-diameter table was found. Existing SDs remain renderer-safe estimates matched to the patent drawing proportions and f/2 ray geometry.

## 2026-09-21 — First-added diagram audit, lens 54

Source: local `patents/US3649104.pdf` (10-page scan, 300 dpi CCITT; OCR text layer unreliable for digits and
subscripts). Pages used: 1 (front page, Fig. 1 duplicate), 2 (Fig. 1 = Example 1 section, Fig. 2 = Example 19),
3 (description ¶ "n_e and ν_e designate…", Example 3 table), 6 (claim 3, which repeats the Example 3 table). Every
number below was read from the rendered page image, not from the text layer.

### Re-verified and retained

- Front page: US 3,649,104, inventors Garry Edwards; Walter Mandler; Erich Wagner (all of Midland, Ontario), assignee
  Ernst Leitz GmbH, Wetzlar; filed July 30, 1970; granted March 14, 1972; priority P 19 39 099.9 of Aug. 1, 1969.
  `patentNumber`, `patentAuthors`, `patentAssignees`, `patentYear`, `subtitle` all agree.
- Example 3 (relative aperture f:2, field angle 45°): r₁ 37.8820, r₂ 190.3362, r₃ 32.1397, r₄ 49.9450, r₅ 200.4813,
  r₆ 23.4264, r₇ 95.2488, r₈ −424.3870; a₁ 10.3776, a₂ 0.1922, a₃ 5.9575, a₄ 3.2670, a₅ 1.5374, a₆ 21.9082, a₇ 11.5306;
  glasses 1.6940/54.5, 1.6734/46.8, 1.7471/27.4, 1.7546/34.7; s′ 50.5074; φ₁₁ 1.832, φ₂₁ 2.095, φ₂₂ −1.348,
  φ₃₂ −3.189. Claim 3 prints the identical table (a₃ = 5.9575 there too; the previously logged 5.9375 was OCR noise).
- Scale: patent normalized to f = 100 (trace of the table: EFL 100.002, BFD 50.510). All R and d are stored ×0.5;
  every row re-multiplied and matches. Stored EFL 50.001, BFD 25.255, TL 52.640. Element thick-lens focal lengths
  33.15 / 59.00 / −17.82 / 52.04 mm agree with the stored `fl` values.
- Metadata: 4 elements / 4 groups, `nominalFno` 2, `fstopSeries` starts at 2, `maxFstop` default 16, mounts
  `leica-m`, format `135-full-frame`, element `type` strings agree with the R signs, no aspheres, no cemented groups.
- Image-circle floor: no undersized surface before or after the edit.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| Reference line | treated as d-line; no `indexReference` | `indexReference: "e"` on all four elements; nd/vd slots unchanged (native n_e/ν_e) | Description p. 3 states "n_e and ν_e designate the refractive index and the Abbe number"; table heads read n_e / ν_e (600 dpi crop). |
| L1 glass | `LaK9 (Schott / Leitz)` — no catalog match at d-line (Abbe fallback) | `N-LAK9 (Schott; legacy LaK9 — e-line match …)` | N-LAK9 curve at C′/e/F′: n_e 1.69401, ν_e 54.48 vs patent 1.6940/54.5 (Δn 1.3e-5, Δν −0.02). |
| L2 glass | `≈BaF10 (Leitz proprietary)` — unresolved by design | `N-BAF10 (Schott; legacy BaF10 — e-line match …)` | N-BAF10: n_e 1.67341, ν_e 46.83 vs 1.6734/46.8 (Δn 1.1e-5, Δν +0.03). |
| L3 glass | `747274 - dense flint …` (d-line code built from e-line numbers; no match) | `E-FD13 (Hoya; SF13-class dense flint — e-line proxy …; supplier unconfirmed)` | E-FD13: n_e 1.74707, ν_e 27.54 vs 1.7471/27.4 (Δn −3.4e-5, Δν +0.14); S-TIH13 equivalent. No Schott SF13 curve in the catalog. |
| L4 glass | `Unmatched lanthanum flint (… outside LAFN7 compatibility)` | `LAFN7 (Schott — e-line match …)` | LAFN7: n_e 1.75458, ν_e 34.72 vs 1.7546/34.7 (Δn −1.7e-5, Δν +0.02). The old verdict compared e-line with d-line. |
| Stop position | mid-a₄ (0.8168 + 0.8168 mm between L2 and L3); header claimed it was read from Fig. 1 | in a₆, 6.0 mm behind r₆ (d₆ 6.0, STO d 4.9541; a₄ restored to a single 1.6335 mm gap) | Neither figure draws an iris and the table omits it. Geometry: L2 rear sag 2.09 mm at h = 10 exceeds a₄ = 1.63 mm, so the L2 rim passes the L3 vertex plane at h ≈ 8.9 mm and the residual L2–L3 gap is 0.11 mm at the 9.8 mm f/2 bundle radius — no room for a diaphragm. a₆ is 10.95 mm long; the L3 rear rim sits 5.30 mm behind r₆ at sd 9.8, so 6.0 mm clears it. Assumption, recorded as such. |
| STO sd | 9.1 (implied f/2.36 through the paraxial map; engine overrode it to 10.75) | 7.85 | Engine-derived f/2 iris radius at the new plane is 7.852 (real ray from EP radius 12.5). |
| sd r₂ | 11.0 | 12.5 | Axial f/2 marginal ray height at r₂ is 12.09 mm (`CLIPS-AXIAL`); L1 front stays 13.0 (marginal 12.50). Edge thickness of L1 at 12.5: 1.30 mm. |
| sd r₅ / r₆ | 9.5 / 9.5 | 9.8 / 9.8 | Axial marginal at r₅ is 9.73 mm (`CLIPS-AXIAL`); r₆ rim slope sin = 0.837 at 9.8. |
| `gapSagFrac` | default 0.90 | 0.95 | With the stop out of a₄ the validator checks the real L2–L3 gap: sag intrusion at h = 9.8 is 1.523 mm of 1.6335 (93.2 %); 0.95 admits it. Precedent: Nikon N 5cm f/1.1 (0.98). |
| Close-focus BF | 28.77 (object-to-image 0.816 m; 0.762 m had been applied as the object-to-front-vertex distance) | 29.06 | Unit-focus extension 3.805 mm puts the object-to-image distance at 0.762 m (magnification −0.076), matching the repo convention for `closeFocusM`. Calculated; the patent has no close state. |
| Header | Fig. 1 iris claim, "filter thread" SD constraint | rewritten: scaling, e-line, SD basis, stop assumption, focus | — |

### Semi-diameter evidence

- Fig. 1 is the Example 1 section (r₁ 41.155 …), not Example 3, and is not to scale transversely: vertex-to-vertex
  span 982 px for 56.61 units (17.35 px/unit) while all four rims measure 353–362 px, i.e. 10.2–10.4 mm at the
  50 mm scale — below the 12.5 mm entrance-pupil radius an f/2 lens needs. The figure was therefore used only for
  qualitative shape (equal rims, L2/L3 rims converging) and not for any `sd` value.
- Real-ray trace at f/2, Y = 21.6 mm (ω = 23.37°) with the new set: axial marginal 12.50 / 12.09 / 10.49 / 9.81 /
  9.73 / 8.15 / 7.85 (stop) / 7.23 / 6.57; full-field chief 10.89 / 9.69 / 7.93 / 6.50 / 5.04 / 4.19 / 0 / 4.12 /
  5.93; corner bundle reaches 13.23 at r₇ and 13.93 at r₈ against 12.5 (8 % / 18 % one-sided vignetting, normal).
  No `CLIPS-AXIAL` or `BLOCKS-CHIEF` flags remain. Unchanged rims: r₁ 13.0, r₃ 11.0, r₄ 10.0, r₇ 12.5, r₈ 12.5.
- The scratch trace's lower-rim search reports "no-ray-found" for the corner bundle at both stop placements (a
  bracket-search limitation on rays that miss r₁); a direct fan trace confirms the same 248 surviving corner rays
  through the stored rims with either stop position, so the corner illumination is set by the element rims, not by
  the iris.

### Checks on the result

- Surface validator: no errors. Image-circle floor: 0 undersized. Engine build: EFL 50.001, FOPEN 2.00, derived stop
  radius 7.852, vignetting-limited half-field 27.5° (was 24.5°), Petzval sum unchanged.
- Glass resolver at the e-line: all four elements resolve as compatible (N-LAK9, N-BAF10, E-FD13, LAFN7); the
  chromatic model moves from Abbe fallback to catalog curves on every surface.
- Focus probe: close keyframe focuses at object-to-image 761.6 mm, magnification −0.0761; infinity defocus 0.000.
- Prettier: all three files pass.
- Live view (own tab, 1400×900): production baseline shows the iris drawn through the L2 rim region and the L1 rear
  rim stepped inward; local build after the edit shows the iris behind L3, L1 rear at full height, L2/L3 rims
  converging, on-axis f/2 fan and 16.5° off-axis fan passing, close-focus state at 76 cm with BF 29.06. No console
  errors.

### Open limitations

- Stop position is an assumption (anywhere in a₆ is consistent with the patent); the iris blade count and the
  0.762 m close-focus figure are production claims not verifiable from the patent.
- L3 is a coordinate-compatible proxy (Hoya E-FD13 for the SF13 type); a Schott SF13 curve, if sourced, would be
  the era-correct label.
- All `sd` values remain ray-trace estimates; the patent publishes no clear apertures and the figure is schematic.
- The patent's 45° field is 0.9° short of the 135 diagonal; the model traces to the format corner regardless.
