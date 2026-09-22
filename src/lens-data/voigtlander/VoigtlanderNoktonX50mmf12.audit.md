# Audit Log — Voigtlander Nokton 50mm f/1.2 X-Mount

Patent: JP 2025-58577 A, Example 1

## 2026-09-21 — First-added diagram audit, lens 59

Source: `patents/JP2025058577A.pdf` (JP 2025-58577 A, 公開特許公報, published 2025-04-09). Pages used: 1 (front
page), 8–11 (Example 1 text, ¶0045–¶0051), 9 (Table 1, raster at 300 dpi), 12 (Table 2, Example 2 cross-check), 16
(FIG. 1 cross-section, measured at 400 dpi; FIG. 2 ray sketch).

### Re-verified and retained

- Front page: 特開2025-58577 (P2025-58577A), applicant 株式会社コシナ (Cosina Co., Ltd.), inventor 柴田 裕輝 (Yuki
  Shibata), filed 2023-09-28 (特願2023-168590), Article 30(2) grace-period declaration citing Cosina's website disclosure
  of 2023-09-10. `patentAuthors`, `patentAssignees`, `patentYear` and the subtitle's "Example 1" all confirmed.
- Table 1 (Example 1): all 18 rows of R, D, nd, νd match the stored surfaces digit for digit, including STO at
  D = 1.15 after the 7.54 mm gap behind surface 10; R18 = −300.00 with D = ZD18. General data f = 48.5 mm, F1.23,
  ω = 16.28°; focus table ZD0 = ∞ / 369.5, ZD18 = 12.57 / 19.36. No asphere in Example 1 (the Example 2 coefficients
  quoted in the analysis — K = 0, A4 = −2.11597E−06, A6 = −1.16190E−09, A8 = −1.93368E−12 — were checked against Table 2
  and are correct). Prescription is at patent scale; no scale factor.
- Paraxial results: EFL 48.476 (patent 48.50), BF 12.557 (12.57), TTL 64.99 (65.00); every element `fl` matches the
  thick-lens value to 0.1 mm; G1 301.5 (patent 302.45), G2 46.2, G3 69.2, Gr 29.39 (patent 29.39). At the tabulated
  close state (object 369.5 mm from S1) the paraxial back focus is 19.34 mm against ZD18 = 19.36.
- Patent marginal-ray radii Hh = 19.75 mm (i=1) and Hs = 10.54 mm (i=10) are reproduced by the exact f/1.23 trace
  (19.71 / 10.52 mm) — the aperture model and scale are consistent with ¶0048.
- Glass: all nine labels resolve to catalog Sellmeier entries within Δνd ≤ 0.06 of the patent pair (S-LAL18 ×3, S-TIH13,
  S-TIH14, S-NPH1, TAFD37A ×2, S-NBH5). Patent prints no glass names, θgF or ΔPgF.
- Metadata: 9 elements / 8 groups, `fujifilm-x`, `aps-c`, element types vs R signs, J21 cement, group ranges, `BF`
  var label, `maxFstop` 16 (production minimum aperture) — all correct.

### Changes

| Field / surface | Before | After | Evidence |
|---|---|---|---|
| `patentNumber` | `JP 2025-058577 A` | `JP 2025-58577 A` | Front page prints 特開2025-58577 / "JP 2025-58577 A"; now identical to the subtitle and the analysis metadata block. |
| `sd` S6 | 15.5 | 18.5 | Clipped the f/1.23 axial ray (16.07 mm needed). FIG. 1 draws the L13 curves out to a 18.5 mm rim on both sides (345 px at 18.64 px/mm). |
| `sd` S7 | 13.5 | 15.8 | Clipped the axial ray (14.41 mm needed). FIG. 1 draws the S7 curve out to the L14 rim at 15.8 mm (294 px). |
| `sd` S8 | 13.0 | 13.3 | Axial ray needs 13.01 mm (marginal clip). FIG. 1 shows the S8 curve meeting a flat annulus at ≈12.7–13.25 mm (flat runs to the 15.8 mm blank rim); value set at the curve end, not the blank. |
| `sd` S9 | 12.0 | 13.5 | Clipped the axial ray (12.21 mm needed). FIG. 1 draws the S9 curve out to the L15 rim at 13.5 mm (251 px). |
| `sd` STO | 10.5 | 10.7 | Record of the engine-derived f/1.23 iris radius (10.655 mm); FIG. 1 draws the stop opening at ≈10.6 mm (198 px) 1.15 mm ahead of S12. The engine overwrites this value from `nominalFno`. |
| `nominalFno` | 1.2 | 1.23 | Patent F = 1.23 (Table 1, ¶0049); marketing f/1.2 stays in `apertureMarketing`. Engine stop radius 10.92 → 10.66 mm. |
| `fstopSeries[0]` | 1.2 | 1.23 | Series must start at the reachable open value. |
| `closeFocusM` | 0.39 | 0.44 | Patent close state: ZD0 369.5 + track 52.42 + ZD18 19.36 = 441.3 mm object-to-image. The old 0.39 was ZD0 + ZD18 with the lens track omitted; production spec is 0.45 m. |
| `focusDescription` | one sentence | adds the patent state and the 0.45 m production figure | as above |
| L22 / L31 `apdNote` | "HOYA TAFD designation = anomalous dispersion; Cosina confirms 2 APD elements" | catalog-equivalent wording; APD attribution rests on Cosina's product literature | Hoya "TAFD" = tantalum dense flint, not an anomalous-dispersion series; catalog PgF 0.5767 is ≈0.004 below the normal line. `apd: "inferred"` retained. |
| L32 `glass` | `S-NBH5 (OHARA) / N-KZFS5 (Schott) / E-ADF50 class` | `S-NBH5 (OHARA)` | Compound label resolved to N-KZFS5 (Δνd 0.02); S-NBH5 is the exact 1.65412/39.68 catalog match. |
| Header notes | paraxial-estimate SD note | figure-audit SD note, focus and aperture facts | this pass |

Unchanged after measurement (within ~8 % of FIG. 1, inside the noise band): S1 21.0 (figure 21.3), S2 20.0 (21.3),
S3 20.0 (20.2), S4 18.5 (20.2), S5 18.5 (18.5), S10 11.5 (curve end ≈11.0, blank 13.5), S12–S14 11.0 (11.9), S15–S16
11.5 (10.9), S17–S18 11.0 (11.6).

### Checks on the result

- Surface validator: no errors with the new set; image-circle floor: 0 undersized.
- Exact trace at f/1.23, Y = 14.2 mm: no surface clips the axial ray and no surface blocks the full-field chief ray at
  infinity (ω = 16.28°) or at the close state (ω = 13.45° reaches Y). Rear-group side vignetting of the full-field
  bundle 12–46 %, ordinary. The tool cannot find the lower full-field rim ray (it would have to pass S10, R = 14.26, at
  a height where it fails) — a property of the prescription, not of the `sd` set.
- Engine build: FOPEN 1.23, stop radius 10.655 mm, EFL 48.476, `closeFocusM` 0.44, no throw.
- Prettier clean on the data file.
- Live check (own browser tab, 1400×900): production baseline showed the stepped L13 and undersized L14/L15, focus
  "39 cm", f/1.2 with stop ø 21.84 mm. Local page after the edits: JP 2025-58577 A, f/1.23 with stop ø 21.31 mm, focus
  endpoint "44 cm" with BF 19.36 mm at the close state, L13/L14/L15 now reproduce FIG. 1's stepped silhouette, and the
  off-axis toggle renders both states with the 11.4° bundle clearing every element.

### Analysis sync

- Metadata block: inventor normalized to "Yuki Shibata (柴田 裕輝)", title added, embodiment line names Table 1 / FIG. 1.
- §1: MFD 0.39 m → 0.45 m (manufacturer) with the patent state cross-referenced; "Shokuhin Patent Act" → Patent Act
  Article 30(2); identification criteria versus Examples 2 and 3 stated.
- §4: TAFD37A section rewritten (TAFD = tantalum dense flint; TAFD37 vs TAFD37A; APD attribution inferred from
  manufacturer literature, ΔPgF ≈ −0.004); L32 section relabelled to S-NBH5 with N-KZFS5 as equivalent; summary updated.
- §5: Hh/Hs described as marginal-ray radii rather than element semi-diameters; stop paragraph adds the f/1.23 iris and
  FIG. 1 opening; new "Semi-diameters and the FIG. 1 silhouette" subsection documents the sd method and changes.
- §6: close-focus arithmetic corrected (441.3 mm object-to-image, 0.44 m endpoint, 0.45 m production spec).

### Open limitations

- The patent publishes no effective diameters; all `sd` remain estimates (ray-clearance plus FIG. 1 rims).
- Cosina's "two anomalous-partial-dispersion elements" statement and the production MFD of 0.45 m are manufacturer
  figures not verifiable from the patent; the APD flags on L22/L31/L32 stay `inferred`.
- Only one finite focus state is published; no intermediate `focusPositions` are authored.

## 2026-06-23 — Full Voigtländer local-patent sweep

- Local patent source: `patents/JP2025058577A.pdf` (untracked local file).
- Rechecked Example 1, Table 1. The stored R, d, nd, and vd values match the patent table.
- Confirmed the patent-provided ray-height anchors Hh=19.75 mm at surface 1 and Hs=10.54 mm at surface 10. Existing display SDs of 21.0 mm and 11.5 mm retain roughly 6–9% clearance, so no SD reduction was made.
- Updated L32 from `E-ADF50 (HOYA)` / APD false to `S-NBH5 (OHARA) / N-KZFS5 (Schott) / E-ADF50 class` with inferred APD. This is an exact `654397` catalog-class match; the patent lists nd/vd only, so the APD note remains catalog-inferred rather than patent-stated.
- The patent does not print dPgF or full semidiameter columns.

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/JP2025058577A.pdf`.
- Example 1 rows confirmed L14 nd = 1.74077, vd = 27.74 and L15 nd = 1.76182, vd = 26.58.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L14 / S7 | `S-TIH14 (OHARA)` | `S-TIH13 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |
| L15 / S9 | `S-TIH18 (OHARA)` | `S-TIH14 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |

### Analysis sync

- Updated the L14/L15 glass sections and summary text.
