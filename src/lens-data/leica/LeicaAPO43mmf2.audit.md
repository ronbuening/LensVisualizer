# Audit Log - Leica APO-Summicron 43mm f/2 ASPH. (Q3 43)

Patent: US 2024/0241349 A1, Example 1

## 2026-05-19 - Missing-Sellmeier queue audit

### Patent evidence

- Local patent file checked: `patents/US20240241349A1.pdf`.
- The local PDF is image-only; Table 1A was checked via local page render and public patent text.
- Example 1 / Table 1A rows confirmed:
  - surface 5 / L3: nd = 1.59282, vd = 68.6.
  - surface 9 / L5: nd = 1.58660, vd = 59.0.
  - surface 22 / L11: nd = 1.58660, vd = 59.0.

### Catalog-search disposition

- Matched L3 to existing coefficient-backed HOYA `FCD515` (`593686`).
- Added Sumita `K-SKLD200` from the official Sumita datasheet; it is the coefficient-backed `587590` match used for L5 and L11.

### Changes made

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L3 / S5 | `593/686 (PK crown, uncertain ID)` | `FCD515 (HOYA)` | Exact catalog match. |
| L5 / S9 | `587/590 (HOYA FDS family / PGM)` | `K-SKLD200 (Sumita)` | Exact catalog match. |
| L11 / S22 | `587/590 (HOYA FDS family / PGM)` | `K-SKLD200 (Sumita)` | Same glass as L5. |

### Analysis sync

- Updated glass-selection, APD, and aspheric-manufacturing notes for FCD515 and K-SKLD200.

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/US20240241349A1.pdf`.
- The local PDF is image-only; Example 1 / Table 1A was checked by rendering the local page.
- Rows confirmed:
  - S3 / L2: nd = 2.00069, vd = 25.5.
  - S6 / L4: nd = 1.76182, vd = 26.6.
  - S11 / L7: nd = 1.95375, vd = 32.3.
  - S16A / L10: nd = 1.55332, vd = 71.7.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L2 / S3 | `S-NPH4 (OHARA)` | `TAFD40 (HOYA)` | Exact nd/vd catalog match. |
| L4 / S6 | `S-TIH6 (OHARA)` | `S-TIH14 (OHARA)` | Exact nd/vd catalog match. |
| L7 / S11 | `S-LAH99 / TAFD33 (OHARA)` | `S-LAH98 (OHARA)` | Exact nd/vd catalog match. |
| L10 / S16A | `S-FPM3 / L-FPM3 (OHARA)` | `M-FCD500 (HOYA)` | Exact nd/vd catalog match. |

### Catalog-search disposition

- Checked public OHARA/HOYA catalog data and existing coefficient-backed catalog entries.
- No new catalog entries were required.

### Analysis sync

- Updated the glass-selection table, element notes, and index-range summary.

## 2026-06-24 - Folder audit recheck

- Re-rendered local image-only patent `patents/US20240241349A1.pdf` and checked Example 1 / Table 1A on the rendered page.
- Current glass assignments remain supported by the table rows and the previous May 2026 catalog audit. No code-only or unresolved Leica APO 43 glass remains in the generated missing-Sellmeier queues.
- Rechecked APD/high-index status: FCD515 and M-FCD500 remain the APD contributors; TAFD40, S-LAH98, and S-NPH53/TAFD30 remain high-index or ultra-high-index assignments supported by their patent nd/vd values.
- The patent defines numerical tables as radius, spacing, nd, vd, and aspheric coefficients only; no clear-aperture or semi-diameter table was found. Existing SDs remain ray/drawing estimates.

## 2026-09-21 — First-added diagram audit, lens 52

### Source

- `patents/US20240241349A1.pdf` (image-only, 39 pages, 300 dpi CCITT). Pages used: 1 (front page), 2 (FIG. 1A),
  21 (§0038–0051 lens description, focus and OIS), 28 (Inequalities (7)–(9)), 30–32 (§0205 aspheric equation,
  Tables 1A–1E), 37 (Table 1 inequality values), 38 (claims with BF / TL / Y definitions).
- Front page: US 2024/0241349 A1, published Jul. 18, 2024; inventors Takehiro NISHIOKA (Nara) and Yoshiaki KURIOKA
  (Osaka); applicant Panasonic Intellectual Property Management Co., Ltd.; priority JP 2022-142614 (Sep. 8, 2022).
  `patentNumber`, `patentAuthors`, `patentAssignees`, `patentYear` and the Example 1 `subtitle` all match; retained.

### Re-verified and retained

- Table 1A, every row: all 23 lens-surface radii, thicknesses, nd and νd match the file (signs included). The
  three 0.01 mm cement layers (nd 1.56732 / 42.8 at patent surfaces 6, 13, 17) remain folded into L3, L6 and L8
  centre thicknesses (6.61, 1.41, 3.11). Stop at patent surface 11 between L5 (d10 = 1.3423) and L6 (d11); matches.
- Table 1B: all seven aspheric surfaces (patent 9, 10, 12, 20, 21, 22, 23 = file 8A, 9A, 10A, 16A, 17A, 18A, 19A),
  K and A4–A14 verbatim including signs and exponents; the patent's Equation (1) uses the standard conic form, so the
  stored K values (−0.420325 on 10A, −0.275865 on 18A, 0 elsewhere) need no conversion. No odd-order terms.
- Table 1C infinity column: f = 41.7102, FNO 2.06002, ω = 27.4964°, Y = 20.0, TL = 68.3749, BF = 0 after the
  1.0 mm air behind the plate. Paraxial recomputation of the full patent table (cement layers and plate included)
  gives f = 41.7110 / 39.5116 / 36.8287 at the three states against 41.7102 / 39.5110 / 36.8281 published.
- Table 1D single-lens focal lengths reproduce the stored `fl` values to 0.1 mm (probe: L1 −35.61 … L11 −31.16);
  Table 1E group focal lengths 51.98 / 94.91 / −154.71 / 39.97 / −31.16 reproduce the traced cemented-group values.
- Glass: all eleven labels resolve to catalog entries compatible with the patent nd/νd (Δnd ≤ 5.5e-4, Δνd ≤ 0.08).
  L8 `S-LAH95 (OHARA)` is an exact 904313 match; the analysis still said S-NPH53 / TAFD30 and was corrected. L6's
  `S-TIM28 / L-TIM28` label stays as a class label (patent 1.68948/31.0 vs S-TIM28 1.68893/31.08; nothing closer in
  the catalog). The patent's only dispersion statements are Abbe-number inequalities (7) νd4G > 62 and (8)
  νd5G > 50; it never calls any element anomalous-dispersion, so `apd: "inferred"` on L3 and L10 is retained and no
  θgF data is available to add.
- Metadata: 11 elements / 8 groups, `fixed-lens-camera`, `135-full-frame`, 43 mm / f2 marketing, 41.71 / 2.06 design,
  element `type` strings agree with the R signs and §0044–0048 prose, `groups` / `doublets` spans, OIS on L5 (§0051).

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| Rear gap `19A.d` | 6.0 (geometric incl. 1.40 mm plate) | 5.523 (3.60 + 1.40/1.5168 + 1.00 air-equivalent) | Repo convention for omitted plates; probe defocus went from +0.466 mm to −0.011 mm and the traced field for Y = 20 from 27.13° to 27.47° (patent 27.50°). |
| `nominalFno` / `fstopSeries` / `maxFstop` | 2.0 / [2, …] / default | 2.06 / [2.06, 2.8, 4, 5.6, 8, 11, 16] / 16 | Table 1C FNO 2.06002; derived stop radius 8.40 mm; production minimum aperture f/16. |
| `focusPositions` / `var` | two rows (∞, close) | three rows; middle at 0.428571 (0.6 m ÷ 1.4 m) with d11 7.6379, d15 3.2604, d19 3.3774, d21 6.4569 | Table 1C middle column; d0 1331.625 + TL 68.3749 = 1400.0 mm, close d0 531.6251 + TL = 600.0 mm (so `closeFocusM` 0.6 is the patent state, retained). |
| `varLabels` 17A | "BF" | "D21" | 17A is the G4→G5 gap (patent d21); BF is the fixed rear gap. |
| L11 `fl` | −31.1 | −31.2 | Table 1D −31.1560. |
| `sd` 1 / 2 | 10.9 / 11.1 | 14.9 / 14.9 | FIG. 1A rim 207 px = 14.9 mm both sides, flat edge spanning the computed rim positions 988–1077 px. |
| `sd` 3 / 4 | 11.3 / 11.3 | 14.0 / 14.0 | FIG. 1A rim 195 px. |
| `sd` 5 / 6 / 7 | 11.2 / 9.8 / 9.6 | 11.3 / 10.4 / 10.4 | FIG. 1A: L3 edge 155–158 px (11.3 mm), L4 edge 144 px (10.35 mm); junction takes the smaller member. Removes the f/2 axial clip at surface 6. |
| `sd` 8A / 9A | 9.4 / 9.1 | 9.8 / 9.8 | FIG. 1A rim 136–138 px. |
| `sd` 10A / 11 / 12 | 7.1 / 7.0 / 6.9 | 9.2 / 9.5 / 9.8 | FIG. 1A: L6 edge 126–130 px (9.2), L7 edge 134–138 px (9.8). Old values blocked the Y = 20 chief ray at 12. |
| `sd` 13 / 14 / 15 | 8.1 / 9.1 / 9.4 | 11.2 / 12.2 / 12.2 | FIG. 1A: L8 front corner 150–158 px, doublet edge 170–172 px (12.2). Old values blocked the chief ray at 13 and 15. |
| `sd` 16A / 17A | 11.9 / 14.2 | 14.5 / 15.3 | FIG. 1A edge 212–214 px (15.3) on both surfaces; 16A capped at 14.5 because its polynomial sag turns over near h ≈ 14.6 mm. Old 16A blocked the chief ray. |
| `sd` 18A / 19A | 15.3 / 16.2 | 15.8 / 18.3 | FIG. 1A: front curve ends at 216–220 px (15.8) then a flat annulus to the 254–258 px (18.3) rim shared by the rear surface. Old 19A blocked the chief ray (17.3 mm). |
| Header notes | paraxial-estimate SD note; "6.00 mm folded into BFD" | figure-measured SD note, image-height note, air-equivalent plate note, focus-state note | This audit. |

Figure scale: 13.92 px/mm at 300 dpi from the 868 px S1→S23 vertex span (62.3749 mm); every vertex crossing
reproduces the Table 1A spacings within 2 px. The drawing is to design scale — the stop symbol starts at 117 px =
8.41 mm (real-ray f/2.06 stop radius 8.40 mm) and the plate is drawn to ±281 px = 20.2 mm ≈ Y. Upper and lower
silhouettes agreed within 2 px on every element used.

### Checks on the result

- Surface validator: no errors; image-circle floor: 0 undersized; prettier clean.
- Real-ray clearance at f/2.06, Y = 20 mm: no axial clip and no chief-ray block at infinity (ω = 27.47°) or at
  the 0.6 m state (ω = 27.81°); the remaining flags are ordinary side vignetting (largest 59 % at surfaces 11–12).
- Engine: EFL 41.716, FOPEN 2.06, stop radius 8.40, paraxial half-field estimate 26.3°, Petzval sum +0.00098,
  maxSD 18.3. Middle keyframe EFL 39.516 focusing 1.41 m object-to-image; close keyframe EFL 36.833.
- Aspheric departures at the new rims: 8A −258, 9A −235, 10A −182 (conic +9), 16A −218 at 14.5, 17A +852,
  18A +4480 (conic +1487, polynomial +2993), 19A −725 µm; no turnover below any stored sd.
- Analysis synced: spec table (aperture, TL, close-focus state, image-height / distortion note), L8 glass, cement and
  cover-glass paragraphs, all quoted departures, L6 label wording, focus-state paragraph, BFD and doublet-count
  statements in §8, footer.

### Open limitations

- Semi-diameters remain measurements of a 300 dpi raster figure (±0.1 mm), not published effective diameters.
- The −7.9 % corner distortion implied by Y = 20.0 at ω = 27.50° is derived, not published; the app's full-frame
  format still nominally spans 21.6 mm, which this lens covers only after in-camera correction.
- The 0.27 m macro mode (mechanical extension, f/2.8 limit) is outside the patent and is not modelled.
- L6's 1.68948 / 31.0 glass has no exact catalog coordinate; the S-TIM28 class label carries Δnd = 5.5e-4.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Re-rendered Table 1A on PDF page 31 (printed page 13) at 250 dpi: surface 23 d = 3.60000; surfaces 24–25 are the
  parallel plate P (labelled in FIG. 1A), 1.40000 mm, nd 1.51680, νd 64.2; surface 25 → 26 is 1.00000 mm air and
  Table 1C BF = 0. The fixed rear gap is the same in all three focus states.
- Surface 19A now stores the patent's 3.60 mm, with `rearPlates` P (N-BK7, the 1.51680 / 64.2 coordinate;
  `resolveCompatibleGlass` confirms it) and gapAfter 1.00 mm. Paraxial check against the previous data: EFL identical
  at all three focus keyframes; defocus changes by ≤ 5e-6 mm (the old 5.523 rounded 5.52300). Physical track grows by
  0.477 mm to the patent's TL = 68.3749 mm including the plate.
