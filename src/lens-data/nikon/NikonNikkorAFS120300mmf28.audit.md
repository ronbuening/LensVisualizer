# Audit Log - NIKON AF-S NIKKOR 120-300mm f/2.8E FL ED SR VR

Patent: JP 2020-177057 A, Example 1

## 2026-05-19 - Glass relabel audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L25 / S12 | `glass` | `OHARA S-NBH52V` | `756247 - anomalous-dispersion niobium glass (patent nd=1.75575, vd=24.71, theta_gF=0.629)` | Example 1 row 12 gives nd=1.755750, vd=24.71, theta_gF=0.629. Nearby catalog dense flints lose the patent APD context, so a six-digit code annotation is safer. |
| L31 / S16 | `glass` | `OHARA S-LAM55` | `J-LASKH2 (Hikari)` | Example 1 row 16 gives nd=1.755000, vd=52.34; J-LASKH2 round-trips the stored pair. |
| L34 / S22 | `glass` | `OHARA S-NPH4` | `TAFD35 (HOYA)` | Example 1 row 22 gives nd=1.910820, vd=35.25; TAFD35 matches. |
| L51 / S29, L56 / S40 | `glass` | `OHARA S-NPH2` | `S-LAH99 / TAFD55 (001291, HRI)` | Example 1 rows 29 and 40 give nd=2.001000, vd=29.12; S-LAH99/TAFD55 match the HRI pair while S-NPH2 does not. |
| L52 / S32 | `glass` | `OHARA S-BAH28` | `S-LAL18 (OHARA)` | Example 1 row 32 gives nd=1.729160, vd=54.61; S-LAL18 matches the stored pair. |

### Phase 2 - Retained-information audit

- Checked the flagged rows against Example 1; stored nd/vd values match the patent table.
- Existing all-spherical and zoom/focus descriptions remain consistent with the patent.

### Phase 3 - Spectral / metadata enrichment

- Preserved the patent theta_gF annotation on L25 through the code-based label and existing `apdNote`.
- No new top-level metadata was needed.

### Phase 4 - Analysis sync

- Updated the analysis file's glass table and affected element narratives, including the L25 code fallback and G5 HRI labels.

## 2026-05-19 — Six-digit glass-code backfill review

Reviewed `patents/JP2020177057A.pdf`, Example 1. The L25 / surface 12 row gives nd=1.755750, νd=24.71, and θgF=0.629. Public Nikon/Hikari catalog data now provides an exact coefficient-backed match: Hikari J-SFH5, d-code `756247`, nd=1.755750, νd=24.71, PgF≈0.6291.

Changes made:

- Added Hikari J-SFH5 to `glassCatalogData.ts`.
- Relabeled L25 in `NikonNikkorAFS120300mmf28.data.ts` to `J-SFH5 (Hikari) — anomalous-dispersion niobium flint (756247)`.
- Updated `NikonNikkorAFS120300mmf28.analysis.md` so the G2 secondary-spectrum discussion no longer treats L25 as an unresolved code fallback.

## 2026-05-31 — M-TAFD305 catalog side-effect cleanup

### Context

- The Sigma patent audit added coefficient-backed HOYA `M-TAFD305` to the glass catalog.
- `M-TAFD305` is the 851/401 moldable-glass row. These Nikon rows are 871/407 and match HOYA `TAFD32`.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L26 / S14 | `HOYA M-TAFD305 type (1871/407)` | `TAFD32 (HOYA, 871407)` | Exact catalog match for nd = 1.870705, vd = 40.73. |
| L53 / S34 | `HOYA M-TAFD305 type (1871/407)` | `TAFD32 (HOYA, 871407)` | Same patent glass as L26. |

### Analysis sync

- Updated the glass table and shared L26/L53 note to remove the stale M-TAFD305 identification.

## 2026-07-29 - Glass classification follow-up

- Corrected L22 from the false HOYA E-ADF10 annotation to OHARA S-TIH1.
- The stored `nd=1.71736`, `vd=29.53`, and coordinate `717295` match S-TIH1 exactly; E-ADF10 is
  `1.61310 / 44.36` (`613444`).
- Synchronized the analysis. No prescription values changed.

## 2026-07-29 - Remaining catalog-mismatch audit

JP 2020-177057 A Example 1 was rechecked at surfaces 6, 9, 11, 24, 36, and 42; each stored `R`, `d`, `nd`, and `νd` agrees with the patent table.

| Surface | Before | After | Patent coordinate / disposition |
|---|---|---|---|
| 6 | `S-LAM52 (≈N-KZFS8)` | `N-KZFS8` | 1.720467 / 34.71 with θgF=0.583; exact KZFS/APD match. |
| 9 | `S-TIM35` | `697555` unresolved lanthanum crown | 1.69680 / 55.52; nearby vendors differ and the patent names none. |
| 11, 24, 42 | `S-LAH52` | `S-LAH65` | Exact OHARA 1.80400 / 46.60 coordinate. |
| 36 | `S-LAH63Q type` | `S-TIH6` | Exact OHARA 1.80518 / 25.41 coordinate. |

- Synchronized all affected analysis claims. No prescription geometry changed.

## 2026-07-29 - Incompatible named-label audit

- Rechecked JP 2020-177057 A Example 1, Table 1, surface 45: `R=-70.85350`, `d=2.000`,
  `nd=1.900430`, and `νd=37.38` match the stored L59 prescription.
- Replaced `OHARA S-LAH75` with `TAFD37A (HOYA catalog-equivalent; patent vendor unspecified)`.
  Current OHARA S-LAH75 is 1.873996 / 35.26 and is incompatible; HOYA TAFD37A exactly matches the
  patent coordinate (900374).
- Synchronized the L59 glass table and element narrative. No prescription geometry changed.

## 2026-09-23 — First-added diagram audit, lens 64

Source: `patents/JP2020177057A.pdf` (JP 2020-177057 A). Pages used: p. 1 (bibliographic front page), pp. 12–15
(Example 1 text ¶0048–¶0068, Table 1 general data, lens data, zoom variable gaps, group focal lengths and
condition values), p. 34 (FIG. 1, wide and tele cross-sections, native 616 × 839 px raster at 198 dpi). The JPO text
layer is born-digital; every value was confirmed on the rendered page.

### Re-verified and retained

- Front page: applicant Nikon Corporation; inventors 山下 雅史 (Masashi Yamashita) and 武 俊典 (Toshinori Take);
  published 2020-10-29; filed 2019-04-16. `subtitle` names Example 1 correctly.
- All 46 surface rows (R, d, nd, νd, stop at surface 31, flat dummy surface 39) match Table 1 exactly. No
  aspheres (claim 18 / ¶0043). θgF 0.583 (L21) and 0.629 (L25) match.
- Zoom gaps D1–D4 at 123.6 / 200 / 291 mm match the variable-gap table. Computed EFL is 123.597 / 199.997 / 290.997 mm,
  BFD matches BF 54.819 within 0.002 mm, and TL is 341.224 mm at every station. Thick-lens element focal lengths
  match the stored `fl` values to 0.1 mm.
- Group motion matches ¶0056 and FIG. 1: G1, G3 and G5 are fixed. G2 moves monotonically image-side by 61.357 mm.
  G4 moves object-side from wide to mid and then back image-side (D3 21.244 → 17.600 → 18.669). D1 + D2 = 68.030
  and D3 + D4 = 27.211 at every station. The group brackets, D1–D4 `varLabels` and "Wide"/"Tele" slider labels are
  correct.
- Focus: ¶0057 says G4 moves object-side, and the FIG. 1 focus arrow agrees. The patent has no close-focus table.
  The stored close gaps are calculated values, and a trace shows they focus at 2000 mm object-to-image at all three
  stations (m = −0.068 / −0.110 / −0.168). They are retained and now labelled "calculated".
- Aperture: F.NO is 2.91 at all stations. The stop and everything behind it are fixed, so a single iris gives F/2.91
  everywhere: real-ray stop radius 17.149 / 17.151 / 17.154 mm. No published diameters exist, so no
  `zoomStopSemiDiameters` / `zoomApertureModel` is needed. The engine's zoom f-numbers are 2.91 at every station.
- Real-ray field check: ω = 9.79° / 6.04° / 4.15° lands on Y = 21.63 mm (patent 2ω 19.57 / 12.08 / 8.29°).

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| S10 (L23 rear) sd | 23.9 | 24.8 | Axial f/2.91 marginal 24.72 mm (clipped before) |
| S13 (L25 rear) sd | 22.5 | 23.2 | Axial marginal 23.12 mm (clipped before) |
| S14 / S15 (L26) sd | 23.5 / 23.5 | 23.8 / 23.8 | S15 axial marginal 23.61 mm (clipped before); FIG. 1 ≈ 25 mm |
| S16–S23 (G3) sd | 23.5, 23.5, 23.5, 19.0, 16.0, 13.0, 13.5, 13.5 | 24.6, 24.6, 24.5, 24.4, 24.4, 24.3, 24.3, 24.3 | Axial marginal 24.0–24.3 mm at every G3 surface; the old values clipped it by up to 11 mm of radius. FIG. 1 draws all four G3 elements at ≈ 25.7–26.2 mm |
| S40 / S41 (L56) sd | 16.0 / 15.5 | 20.5 / 20.5 | FIG. 1 rim 20.5 mm (400 dpi profile, 87 px × 0.2355 mm/px) |
| S42–S44 (L57/L58) sd | 15.5 / 14.5 / 13.0 | 20.0 / 19.8 / 19.8 | FIG. 1 doublet rim ≈ 20.5 mm. L58 edge thickness is 0.97 mm at 19.8 mm |
| S45 / S46 (L59) sd | 10.5 / 10.0 | 18.4 / 18.4 | S46 blocked the full-field chief ray (10.07 mm). FIG. 1 rim 18.4 mm; the computed 5.2 mm edge thickness matches the drawn 5.2 mm rim |
| STO sd | 16.7 | 17.2 | Records the real-ray F/2.91 iris, 17.15 mm. The engine had fallen back to 16.65 mm while G3 clipped |
| `gapSagFrac` | default 0.90 | 0.97 | L23/L24 (3.124 mm), L32/L33 (1.626 mm) and L33/L34 (1.061 mm) rims come within ≈ 0.1 mm at the axial clear aperture (worst 0.964 of gap). FIG. 1 draws these rim-to-rim, and the patent spacings are unchanged |
| `fstopSeries` / `maxFstop` | starts 2.8 (unreachable); max 16 default | starts 2.91; `maxFstop: 22` | Nominal F/2.91; production minimum aperture f/22 |
| L11 glass | OHARA S-LAH93 (1.90525/35.04) | J-LASFH9 (Hikari) | Patent 1.90265/35.77; Δνd 0.04 |
| L12 glass | S-FPL51 type (1.497/81.55) | J-FKH1 (Hikari) | Exact 1.49782/82.57 |
| L23 glass | 697555 vendor unresolved | J-LAK14 (Hikari) | Exact 1.69680/55.52 |
| L24, L41, L57 glass | S-LAH65 "exact" (46.57) | J-LASF015 (Hikari) | Exact 1.80400/46.60 |
| L33 glass | N-KZFS5 / OHARA S-LAM61 | N-KZFS5 (OHARA S-NBH5 same coordinate) | S-LAM61 is a different glass |
| L42 glass | OHARA S-FPM2 (1.59522/67.74) | J-PSKH4 (Hikari) | Exact 1.59349/67.00 |
| L43 glass | OHARA S-TIH53W (23.78) | J-SF03 (Hikari) | Δνd 0.02 |
| L52 glass | S-LAL18 (54.68) | J-LAK18 (Hikari) | Exact 1.72916/54.61 |
| L55 glass | OHARA S-BSL7 (1.51633) | J-BK7A (Hikari) | 1.51680/64.13 |
| L58 glass | S-FSL5 / N-FK5 family | J-FK5 (Hikari) | 1.48749/70.32 |
| L13, L32 `apd` | "patent" | "inferred" | The patent does not call these fluorite; the CaF₂ identity rests on the coordinate |
| L21 / L25 `dPgF` | — | −0.0024 / +0.027 | Derived from the patent θgF against 0.6438 − 0.001682·νd |
| Analysis §4.4 / §5.3 / §6 | L33 named leading SR candidate because KZFS glasses show enhanced short-wavelength refraction | L25 named most consistent candidate | KZFS short flints lie below the normal line. L25 is above it (+0.027), and ¶0032 names its anomalous dispersion. This is still an inference |
| Analysis §10.2 / §10.6 | SD method and stop narrative described the old paraxial + 8 % estimate and the G3 compromise | Rewritten for the trace + FIG. 1 basis and the fixed-iris aperture model | — |

G1 (54 mm vs FIG. 1 ≈ 50–52 mm), L21, L22, L24, G4 and L51–L55 lie within ≈ 5–8 % of FIG. 1. They pass the axial
beam and are retained.

### Checks on the result

- The surface validator reports no errors and the image-circle floor reports none undersized. The formatter check
  passes on all three files. Every glass label resolves to a catalog glass matching the patent pair (largest
  residual Δνd 0.04 on L11).
- The exact trace at f/2.91 and Y = 21.63 mm over all three stations, at infinity and at the close keyframe, has no
  axial clipping and no chief-ray blocking. The wide-end corner bundle is still partly vignetted in G1–G3, which is
  ordinary for this type.
- Engine: stop 17.149 mm, zoom f-numbers 2.91 / 2.91 / 2.91. The vignetting-limited half-field at the wide end rose
  from 9.17° (limited by the undersized G3) to 11.02° (limited by L21); the patent's ω is 9.785°.
- Live view: production was the baseline, and the local page was checked at 123.6 / 200 / 291 mm, at infinity and at
  2.0 m, with the off-axis toggle on. G3 now renders as a uniform block like FIG. 1, and the G5 rear elements match the
  drawing's proportions. G2 closes onto G3 at tele as in the FIG. 1 (T) panel, and G4 moves object-side on close
  focus. The aperture slider runs from f/2.91 to f/22.

### Open limitations

- Close-focus gaps are calculated for the production 2.0 m MFD, not published. At tele they give m = 0.168×,
  against Nikon's quoted 0.16×.
- The VR sub-group within G5 (¶0058) is not identified by the patent. L54 + L55 remains an inference.
- The SR element identification is inferential. L25 is the most consistent candidate.
- The rendered G2/G3 rim clearances (≈ 0.1 mm) rely on `gapSagFrac: 0.97`.
