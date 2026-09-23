# Audit Log — Canon EF 50mm f/1.0L USM

Patent: US 4,717,245, Example 2 (Canon / Sadatoshi Takahashi, Jan 5, 1988)

---

## 2026-04-30 — Glass relabel (L1 S-BSL7 → S-BSM14; L2 S-BSM14 → S-LAL14)

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / surface 1 | `glass` | `S-BSL7 (OHARA)` | `S-BSM14 (OHARA)` | S-BSL7 is a BK7-class crown (nd=1.5163); stored nd=1.60311 matches S-BSM14 exactly (Δnd<1e-5). Confirmed by catalog-mismatches.generated.md surface 1 entry and glassRelabelCandidatesScan candidate report. |
| L2 / surface 3 | `glass` | `S-BSM14 (OHARA)` | `S-LAL14 (OHARA)` | S-BSM14 has nd=1.6031, not 1.6968; stored nd=1.69680 matches S-LAL14 exactly (Δnd<1e-5). Confirmed by catalog-mismatches.generated.md surface 3 entry and glassRelabelCandidatesScan candidate report. |

Other glass annotations verified correct or not in catalog:

- L3, L5: `S-NSL5 (OHARA)` (nd=1.51742, vd=52.4) — family identification plausible; S-NSL5 not in project catalog, falls back to Abbe approximation. Not flagged by mismatch scan.
- L4, L7, L9, L10: `S-LAH58 (OHARA)` (nd=1.883, vd=40.8) — catalog entry present, Sellmeier Δnd < 1e-5. No change.
- L6: `S-TIH53 (OHARA)` (nd=1.84666, vd=23.9) — catalog entry present, Sellmeier Δnd < 1e-5. No change.
- L8: `S-TIH6 (OHARA)` (nd=1.80518, vd=25.4) — catalog entry present, Sellmeier Δnd < 1e-5. No change.
- L11: `S-BAL50 (OHARA catalog equivalent; production supplier unspecified)` (nd=1.55963, vd=61.2) — coefficient-backed 560612 row added in the named-token audit.

### Phase 2 — Retained-information audit

All surface radii and thicknesses back-calculated from the scaled data file and verified against US 4,717,245 Example 2 patent table. Scale factor 0.50008 applied uniformly (f=100→50 mm). Key verifications:

- R1–R19, D1–D19: all within ±0.001 mm of scaled patent value after accounting for OCR errors in the provided scan (R2 OCR read as 254.83; correct value 1254.83; D2 read as 0.9; correct 0.19; R3 read as 68.21; correct 168.21; R20 read as 42.39; correct 142.39; R21 read as 96.53; correct 961.53).
- Aspherical surface 5A (patent R5): R_eff=65.353 mm confirmed as 1/(2A)×scale = 1/(2×3.826e-3)×0.50008 = 65.35. Converted coefficients A4–A10 verified algebraically against patent B–E (R=∞ form). All within 1e-11 of calculated values.
- Aspherical surface 14A (patent R15): R_eff=−65.013 mm confirmed as 1/(2×(−3.846e-3))×0.50008 = −65.03. Converted coefficients verified similarly.
- Stop placement: D9=D10=17.88 (unscaled) = 8.941 mm (scaled); stop equidistant from L5 rear and L6 front. ✓
- ElemId assignments: cemented junction surfaces carry rear element's elemId (surface 6 → L4, id=4; surface 11 → L7, id=7). ✓
- Patent design conditions (1)–(5): all confirmed satisfied by Example 2 values (documented in analysis §7).

### Phase 3 — Spectral / metadata enrichment

Patent US 4,717,245 provides nd and vd only — no line indices (nC, nF, ng) or partial dispersion values are tabulated. No spectral enrichment is possible from this patent alone.

Existing metadata confirmed complete: subtitle, patentYear, focalLengthDesign, apertureDesign, elementCount, groupCount, maker, focusDescription all present.

### Phase 4 — Analysis sync

Updated [CanonEF50mmf1L.analysis.md](CanonEF50mmf1L.analysis.md):
- §4.1 glass table L1 row: "S-BSL7 (OHARA) / N-SK16 (SCHOTT)" + "Borosilicate crown" → "S-BSM14 (OHARA)" + "Borosilicate medium crown".
- §4.1 glass table L2 row: "S-BSM14 (OHARA) / S-BAH28 (OHARA)" + "Barium dense crown" → "S-LAL14 (OHARA)" + "Lanthanum crown". Six-digit code corrected 1696/555 → 1697/555 to match S-LAL14 code6="697555".
- §5 L1 section: glass line updated from "S-BSL7 type" to "S-BSM14 (OHARA)".
- §5 L2 section: glass line updated from "S-BSM14 type" to "S-LAL14 (OHARA)".
- §4.2 rationale: "barium dense crown (L2)" → "lanthanum crown (L2)".

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Re-opened `patents/US4717245.pdf` and confirmed Example 2 rows for the repeated nd=1.51742, vd=52.4 glass.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L3 / S5 | `S-NSL5 (OHARA)` | `S-NSL36 (OHARA)` | Stored nd/vd matches the coefficient-backed OHARA S-NSL36 catalog row. |
| L5 / S9 | `S-NSL5 (OHARA)` | `S-NSL36 (OHARA)` | Same repeated patent glass as L3. |

### Remaining disposition

- L11 now uses the coefficient-backed S-BAL50 catalog equivalent; the production supplier remains unspecified.

## 2026-09-23 — First-added diagram audit, lens 87

### Source

- `patents/US4717245.pdf` (US 4,717,245, Takahashi / Canon Kabushiki Kaisha, granted Jan. 5, 1988; certificate of
  correction Feb. 7, 1989). Pages used: front page, sheet 1 (FIGS. 1–3, FIG. 2 measured at 300 dpi), columns 3–4
  (conditions 1–5, focusing text), columns 5–6 (Numerical Examples 1–3, read from the rendered page image, not the OCR
  layer), certificate page.

### Re-verified and retained

- Embodiment: Numerical Example 2 (F = 100, FNO 1:1.0, 2ω = 45.2°) is the only example with 11 elements / 9 groups
  (Example 1 is 10/8 with one front lens; Example 3 is 11/8 with a cemented triplet behind the stop), matching the
  production 11/9 construction with aspheres on elements 3 and 8.
- Prescription: all 21 R rows, 20 d rows and 11 nd/νd pairs match the rendered table after the uniform ×0.50008 scale
  (stored values within ±0.001 mm). Stop is patent surface R10 with D9 = D10 = 17.88 (8.941 mm each stored). Stored
  labels count the stop separately (stored 10–20 = patent R11–R21; 5A = R5, 14A = R15); documented in the header.
- Scale: the patent is normalized to F = 100, so the uniform production scale is correct. Paraxial EFL is 49.9999 mm
  (99.98 at F = 100), BFD 37.226 mm, infinity defocus −0.0002 mm. Front group (L1–L5) 342.86 and rear group (L6–L11)
  72.56 at F = 100 reproduce the analysis.
- Aspheres: both are R = ∞ with an A·H² term; the osculating-sphere conversion (R = 1/(2A), K = 0, A4 = B − A³,
  A6 = C − 2A⁵, A8 = D − 5A⁷, A10 = E − 14A⁹) and every sign/exponent of A–E were re-derived from the page.
- Element focal lengths: every stored `fl` agrees with the thick-lens value to 0.05 mm; element `type` strings agree
  with the R signs.
- Aperture: `nominalFno` 1.0, `fstopSeries` 1.0–16 and default `maxFstop` 16 match the patent and the production
  f/16 minimum. The traced f/1.0 stop radius is 16.86 mm; the stored STO record 17.4 mm matches FIG. 2's drawn stop
  opening (≈17.3 mm).
- Metadata: `patentNumber`, inventor, assignee (repo convention "Canon Inc." for Canon Kabushiki Kaisha), year 1988,
  subtitle, 11/9 counts, `lensMounts` `canon-ef`, `imageFormat` `135-full-frame`, `closeFocusM` 0.6 (production MFD;
  the patent gives no close state).
- Glass nd/νd equal the patent rows for all 11 elements; conditions (1)–(5) re-checked against the rendered column 3
  and the certificate of correction.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| sd 3 / 4 (L2) | 24.4 / 23.8 | 26.4 / 26.0 | f/1.0 axial marginal 24.49 / 24.10 clipped; FIG. 2 rim ≈26.6 |
| sd 6 / 7 (L4) | 21.1 / 21.1 | 22.2 / 20.8 | axial 21.51 clipped at 6; FIG. 2 draws L4 ≈22.0 with L3 flange 23.4 |
| sd 8 (L5 front) | 19.2 | 21.2 | axial 20.50 clipped; FIG. 2 ≈21.4 |
| sd 11 / 12 (L6/L7) | 17.4 / 19.8 | 20.6 / 21.1 | axial 20.03 / 20.94 clipped; FIG. 2 ≈20.8 / 21.6 |
| sd 13 / 14A (L8) | 20.2 / 21.3 | 21.6 / 23.8 | axial 20.94 / 23.47 clipped; FIG. 2 ≈21.7 / 23.7 |
| sd 15 / 16 (L9) | 21.4 / 22.1 | 25.8 / 25.6 | axial 24.56 / 24.92 clipped; FIG. 2 ≈26.0 / 25.5 |
| sd 17 / 18 (L10) | 22.1 / 21.6 | 26.0 / 26.0 | axial 25.06 / 25.07 clipped; FIG. 2 ≈26.0 |
| sd 19 / 20 (L11) | 21.2 / 19.4 | 22.6 / 22.6 | axial 21.81 / 21.28 clipped and 21.6 mm chief ray (21.45) blocked; FIG. 2 ≈22.6 / 22.8 |
| `gapSagFrac` | default 0.90 | 0.97 | claim-6 air spaces L4–L5 (D7) and L7–L8 (D13) close toward the rim; at the axial marginal height only ≈0.1 mm of air remains, and FIG. 2 draws those rims touching |
| 5A A4–A10 | 7.356e-8, 1.508e-9, −2.16e-12, 2.323e-15 | 7.3596e-8, 1.5082e-9, −2.1608e-12, 2.3245e-15 | same conversion carried to 5 significant figures; sag error at 23.8 mm falls from 0.07 µm to 0.01 µm |
| 14A A4–A10 | 7.233e-7, 2.749e-9, −4.206e-12, 2.735e-15 | 7.2364e-7, 2.7505e-9, −4.2075e-12, 2.7366e-15 | same; sag error at 23.8 mm falls from 0.34 µm to 0.02 µm |
| Focus model | L10–L11 gap 0.48 → 10.39 (L11 fixed, L1–L10 extend) | back gap 37.226 → 42.18 (unit extension) | L11-fixed split had no patent or documented production source (invented internal travel; it also changed EFL to 52.5 mm at close). The patent's stated preferred method is moving the entire lens system; 42.18 mm is calculated for a 600 mm object-to-image distance |
| L1 glass label | S-BSM14 (OHARA) | BACD14 (HOYA catalog equivalent) | BACD14 603607 reproduces νd 60.7; S-BSM14 is 60.64 |
| L6 glass label | S-TIH53 (OHARA) | PBH53 (OHARA catalog equivalent) | PBH53 847239 reproduces νd 23.9 (23.89); S-TIH53 is 23.78 |
| Other glass labels | bare OHARA names | "(OHARA catalog equivalent)" | patent names no glass maker |
| L11 role | "fixed element in the floating focus mechanism" | neutral role text | fixed-L11 claim unsourced |
| Header notes | thin-lens close-focus, 0.60 field-fraction SD method | FIG. 2 + f/1.0 trace SD basis, calculated unit-focus note, label mapping | matches the new data |

Analysis sync: group table relabelled with the patent's G1–G10 units; claim-6 air spaces renamed (G6–G7, meniscus
air lenses, nearly closed at f/1.0); R15 orientation corrected to convex toward the image; asphere departure table
recomputed at the 23.8 mm clear aperture (R5 +0.211 mm steeper, R15 +0.458 mm flatter — the earlier table used a
12.5 mm production height and read R5's sign backwards); stop radius corrected to 33.7 (F = 100) / 16.9 mm; rear
vertex position relative to the EF flange corrected to "behind"; glass table codes and equivalents corrected (removed
non-matching K10 and N-SK5, S-LAH59 and TAFD5); unsourced "L11 fixed" floating claim and glass-hardness speculation
removed; focus section rewritten for the calculated unit extension.

### Checks on the result

- Surface validator clean; image-circle floor passes.
- Exact f/1.0 trace (Y = 21.6 mm): no axial clipping and no chief-ray blocking at infinity or at the 0.6 m state;
  ω at Y = 21.6 mm is 23.7° (the patent's 22.6° half-field corresponds to a slightly smaller image height).
- Close state: unit extension 4.95 mm, object-to-image 599.97 mm, paraxial magnification −0.099 (Canon quotes 0.11×
  for the floating production lens).
- Glass: all 11 labels resolve to coefficient-backed catalog rows with Δnd ≤ 5e-6 and Δνd ≤ 0.03.
- Engine build: EFL 50.00 mm, f/1.0, half-field 23.5°.
- Live headless render: silhouette now follows FIG. 2 (rear group L9/L10 as tall as L2, L6–L8 wider than the stop);
  the whole block moves forward at close focus with the image plane fixed.

### Open limitations

- Semi-diameters are figure-measured and trace-floored estimates; the patent publishes no effective diameters.
- Production floating-group displacements remain unknown; the close state is a calculated unit extension.
- The two claim-6 air spaces leave only about 0.1 mm of air at the f/1.0 marginal height, so the diagram shows those
  element rims almost touching (gapSagFrac 0.97).
