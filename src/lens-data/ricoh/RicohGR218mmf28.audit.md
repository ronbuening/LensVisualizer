# Audit Log - Ricoh GR 18.3mm f/2.8 (GR / GR II)

Patent: US 2013/0321936 A1

## 2026-06-23 - Local patent glass/APD and SD review

- Local patent source: `patents/US20130321936A1.pdf` (untracked local file), Example 3.
- Verified the Example 3 prescription table against the data file: f = 18.30 mm, F = 2.81, half-field = 38.2 deg. Surface radii, spacings, refractive indices, Abbe numbers, and the two aspherical surfaces S2/S13 match the file.
- Verified the cover-glass treatment: patent plate F is omitted from `surfaces`, and its air-equivalent optical path is folded into the last air gap.

| Element | Patent glass / Pg,F | Data-file disposition |
|---|---|---|
| L1 | HOYA M-FCD1 / 0.5388 | Labeled `FCD1 / M-FCD1`; `apd: "patent"`, `dPgF: +0.03218`. Confirmed strong positive APD and PGM status. |
| L2 | HOYA E-FD8 / 0.5989 | Retained E-FD8; `apd: "patent"`, `dPgF: +0.00751`. |
| L3 | HOYA FDS90 / 0.6191 | Labeled as the local S-TIH53/FDS90 class; `apd: "patent"`, `dPgF: +0.01530`. |
| L4, L5 | HOYA TAFD30 / 0.5654 | Retained TAFD30; backfilled `dPgF: -0.00977`, not APD. |
| L6 | HOYA E-FD8 / 0.5989 | Retained E-FD8; `apd: "patent"`, `dPgF: +0.00751`. |
| L7 | HOYA M-TAFD51 / 0.5642 | Labeled `821427 - HOYA M-TAFD51` as a future-upgrade code; backfilled `dPgF: -0.00776`, not APD; confirmed PGM status. |

- The patent does not publish semi-diameters. Existing SDs remain estimates. They were rechecked qualitatively against the patent drawing and prescription: the large front group, reduced stop, matched cemented doublet apertures, and slightly larger rear aspheric field-corrector apertures are consistent with the drawing and avoid irrational cross-gap proportions.
- Companion analysis was updated to describe the exact patent Pg,F values, dPgF derivation, APD status, and catalog-equivalent labels.

## 2026-09-23 — First-added diagram audit, lens 91

Source: local `patents/US20130321936A1.pdf` (300 dpi CCITT scan; Example 3 is on image-only pages without a text
layer). Front page p. 1; Example 3 table ¶[0136] p. 18 (sheet p. 7); aspheres and conditional values ¶[0137]–[0139]
p. 19; FIG. 3 p. 3 (sheet 2/10, axis horizontal, object at left); ¶[0045] (plate 0.5 mm from the image) and ¶[0115]
(focus by moving the whole lens or the sensor); Examples 2 and 4–8 on pp. 18–22 were checked for context.

### Retained after re-reading the source

- All 13 rows of R, D, Nd and νd, the stop position (surface 08, 1.50 / 1.00 mm), and both aspheres' K, A4, A6 and A10
  match Example 3. K uses the standard `1 + K` form (¶[0125]). There are no odd-order terms. The native scale is kept.
- Paraxial EFL 18.298 mm (patent 18.30). The stored back focus 14.179 = 12.756 + 1.40/1.51680 + 0.50 reproduces the
  paraxial focus to 0.0003 mm. Physical track 30.30 mm matches L/f = 1.656. Element `fl` values match thick-lens
  values to the stored precision.
- Example 3 attribution: it is the 18.30 mm, F2.81, 7/5 example with two aspheric elements. The patent does not name a
  production example, and Examples 1, 2, 4, 5 and 8 share the layout. The attribution is kept, and the analysis now
  says that it is an inference.
- `lensMounts: ["fixed-lens-camera"]`, `imageFormat: "aps-c"`, 7/5 counts, the 2ω ≈ 76.4° spec and `maxFstop` 16
  (production f/2.8–16) are retained.
- The D1 (5.0 mm), D2 (4.7 mm), L6 rear (4.3 mm), L7 front (5.5 mm) and L1 front (7.0 mm) rims are retained. FIG. 3
  reads 5.35, 5.2, 5.2, 5.9 and 6.8 mm (scale 31.36 px/mm from the 490.5 px / 15.64 mm vertex span). The D2 value is
  within 11 %. At 5.2 mm L5 would reach a knife edge, and the L6–L7 air lens physically closes at about 4.6 mm.

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| 2A `A8` | −2.19205e-7 | +2.19205e-7 | ¶[0137] prints A8 = 2.19205×10⁻⁷ with no minus sign; the A6 and A10 minus signs on the same line are clear. An independent real-ray trace gives longitudinal SA at f/2.81 of −0.69 mm with the old sign and −0.003 mm with the printed sign. With the printed sign, full-field distortion is −1.5 % (patent ≤ 2.0 %), tangential focus stays within 0.065 mm of the image to 38.2°, and ω for Y′ = 14.2 mm is 38.05° (patent 38.2°; old sign 37.82°). |
| 2A `sd` | 6.1 | 5.8 | With the corrected asphere, the slope at 6.1 mm is 63.6° and the sag becomes vertical at about 6.5 mm. The full-field bundle needs 5.42 mm. FIG. 3 has L1's rear curve meeting L2 at 5.7 mm. At 5.8 mm the slope is 48°. |
| 3, 4 `sd` | 5.0 / 5.0 | 4.8 / 4.8 | After the A8 correction, the validator fails the 2A→3 air gap (1.73 mm of sag against the 1.611 mm allowance at 5.0 mm). The surfaces would meet at about 5.05 mm. FIG. 3 draws 5.75 mm, but its air-lens outline does not follow the tabulated sags. The corner bundle is now vignetted about 22 % on one side at L2. |
| 13A `sd` | 5.8 | 5.5 | The sag turns over at 5.58 mm, so the old rim was past the turnover. The full-field bundle needs 5.08 mm. |
| STO `sd` | 3.55 | 3.65 | This is the real-ray f/2.81 iris radius that the engine derives (3.653). 3.55 was a paraxial f/2.80 value. |
| `nominalFno`, `fstopSeries` | 2.8; starts 2.8 | 2.81; starts 2.81 | Example 3 is F = 2.81. `maxFstop: 16` is now explicit. |
| `closeFocusM`, `var["13A"]` | 0.10 m; [14.179, 18.28] | 0.30 m; [14.179, 15.481] | The patent tabulates no finite focus. The 0.10 m macro endpoint was not a patent state, and its thin-lens extension actually focused at 127 mm object-to-image. The close value is now a calculated paraxial unit-focus extension of 1.302 mm, which gives 300.0 mm object-to-image at m = −0.071 (production normal-mode MFD). Focus direction: whole lens toward the object. |
| `projection` | absent | rectilinear, 76.4° / 38.2° | The engine's rim-limited half-field was 47.6° (49.2° before the rim changes), well past Y′ = 14.2 mm. The patent gives ω = 38.2°. |
| `patentAssignees` | ["Ricoh Co., Ltd."] | [] | The front page names inventor Kazuyasu Ohashi as applicant and prints no assignee (LENS_DATA_SPEC: inventor-applicant publications use []). |
| L2 `type` | Negative Meniscus | Biconcave Negative | R3 = −23.543 and R4 = +200.425. |
| L1 `apd` | "patent" | "inferred" | The patent lists Pg,F but never calls an element anomalous-dispersion. M-FCD1 is a fluorophosphate ED glass (dPgF +0.032). |
| L2, L3, L6 `apd` | "patent" | false | E-FD8 and FDS90 are dense flints (dPgF +0.0075 / +0.0153); their position is ordinary for flints. The `dPgF` values are kept. |
| L1, L3, L7 `glass` | compound "FCD1 / M-FCD1 …", "S-TIH53 / FDS90 class …", "821427 - HOYA M-TAFD51 …" | "M-FCD1 (HOYA)", "FDS90 (HOYA)", "M-TAFD51 (HOYA)" | These are the patent's glass names, and each resolves exactly (Δnd ≤ 3.2e-6). |
| Header and analysis | — | synced | Asphere note, SD basis, focus, assignee, L2 shape, the S2 asphere description (it was described as hyperboloidal and reversing sign; it is an oblate base that steepens toward the rim), §13 SD table (it listed stale values 7.5 / 6.5 / 5.5), glass/APD wording and the Example 3 attribution. |

### Checks on the result

- Surface validator is clean, and the image-circle floor check reports nothing undersized. No surface clips the f/2.81
  axial beam (3.25–3.78 mm needed). The chief ray at 38.05° passes every rim. The corner bundle is vignetted 22 %
  per side at S3, 18 % at S4, 9 % at S5 and 10 % at S11.
- Asphere values for the analysis: 2A +35 µm at the 3.26 mm marginal height, +230 µm at 4.9 mm and +558 µm at the
  5.8 mm rim (slope 48°). 13A is +455 µm at the 5.5 mm rim; its sag is −0.686 mm against −1.141 mm for the sphere.
- Engine: EFL 18.30 mm, FOPEN 2.81, half-field 38.2°, stop radius 3.653 mm, Petzval sum 0.00468 mm⁻¹.
- Live, headless: production (steep front-group rims, f/2.8, 10 cm focus scale) was compared with local infinity and
  30 cm close focus. The local silhouette follows FIG. 3: L1 has a nearly flat front and a deep concave rear, then
  come L2, the two cemented doublets and the L7 meniscus. The whole lens advances 1.30 mm at 30 cm. Off-axis rays
  were not checked interactively.

### Open limitations

- No semi-diameters, clear apertures or iris diameters are published. All rims are estimates. FIG. 3's air-lens
  outlines (L1/L2 and L6/L7) are schematic and do not follow the tabulated sags.
- The close-focus state is calculated, not published. The GR's 0.10 m macro range is not modeled. The repo reads
  `closeFocusM` as object-to-image; the basis of the production 0.30 m figure is not given in the patent.
- The S13 A6 value is printed without its decimal point ("418583×10⁻⁶"). It is read as 4.18583e-6.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Re-read Example 3 ¶[0136] on PDF p. 18 (sheet p. 7): surface 13 D = 12.756; surface 14 is a plate ("FILTER",
  patent plate F), 1.40 mm, nd 1.51680, νd 64.20, with no Pg,F; surface 15's D is blank. The 0.50 mm gap to the
  image comes from ¶[0045] ("approximately 0.5 mm"), as the fold already used. Glass: HOYA BSC7, the catalog class
  for 1.51680 / 64.2, to match the lens's HOYA element labels. The patent prints no glass name.
- S13 and `var["13A"]` now store the physical gap, [12.756, 14.058] (infinity, calculated 0.30 m close). Plate F
  follows in `rearPlates` with 0.50 mm after it. Paraxial check against the previous data: EFL identical; defocus
  changes by 4 × 10⁻⁶ mm (rounding in the old 14.179).
- Physical track grows by 0.477 mm to 30.30 mm, the patent's L (L/f = 1.656). `closeFocusM` stays at the production
  0.30 m, and the 1.302 mm extension is unchanged. Measured over the physical track, that extension focuses at about
  300.5 mm object-to-image.
