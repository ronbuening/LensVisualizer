# Audit Log - Nikon NIKKOR Z 58mm f/0.95 S Noct

Patent: WO2019/229849 A1

## 2026-06-04 - Sweep 1 local patent relabel

- Local patent source: `patents/WO2019229849A1.pdf` (untracked local file).
- The local PDF is image-based under `pdftotext -layout`; matching rows were cross-checked against Google Patents OCR for the same WO publication.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L21 / row 7 | 1.84850 / 43.79 | `Lanthanum dense flint (near E-LASF013 / H-ZLaF68C)` | `J-LASFH22 (Hikari, patent nd/vd match)` | Hikari J-LASFH22 clears the prior unresolved near-match. |
| L32 / row 24 | 1.69895 / 30.13 | `Dense flint (near S-NBH52V)` | `E-FD15 (HOYA, patent nd/vd match)` | HOYA E-FD15 round-trips the stored patent pair. |
| L34 / row 27 | 1.765538 / 46.76 | `Lanthanum crown (no confirmed catalog match; near TAFD5F)` | `Q-LASFPH2S (Hikari, patent nd/vd match)` | Nikon/Hikari Q-LASFPH2S clears the prior unmatched label. |

## 2026-05-20 - Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain a WO2019/229849 A1 PDF.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - First-10 mismatch queue recheck

- Rechecked the local untracked `patents/` folder for WO2019/229849 A1 / `229849`; no matching local PDF is present.
- No glass or SD changes made. Patent figure/table review remains blocked until the source PDF or a verified local family equivalent is added.

## 2026-08-21 — Near/close glass-candidate review

- Rechecked the now-present local `patents/WO2019229849A1.pdf` and its authored glass/partial-dispersion table.
- Assigned supplier-neutral proxies to six elements: J-LASFH9, J-KZFH4, J-PSKH1 ×2, J-KZFH1, and J-KZFH9.
- Patent-authored `dPgF` values are retained; the prior missing-source note above records the earlier repository state.

## 2026-09-08 — Source audit; live review pending

Original WO2019229849A1, Example1: cover p.1, equation p.20, table pp.21–23 and Figure1 p.46 (600dpi). Verified all source lens radii/thicknesses/glasses, three standard K=0 conics and fourteen nonzero asphere coefficients. Corrected analysis inventor to Hiroki Harada from the original cover.

- Removed legacy filter rows29–30; final equivalent gap14.5+1.6/1.5168+1=16.5548523206751mm agrees with rounded source BF16.55. Seventeen elements retained.
- Refined figure optical rims, excluding shoulders. Facing S3/S4 retain28.7mm due to source/clearance conflict at29.2mm; documented follow-up. No hidden renderer trimming at0/.5/1.
- Source f59.62/f0.98/full39.96 controls, isolated element powers and qualified catalog/process claims synchronized. Preserved five source PgF rows via exact runtime-normal-line deviations; near-normal L24/L29 no longer APD-badged.
- Source D22=2.68→21.29 and GF/stop objectward18.61mm, GR fixed, retained. Independent matrix beta−.1942594 gives equivalent-model near0.499367498m; source physical path would give0.499912645m.
- Three regressions and surface/image-circle checks pass. Production/local browser checks remain pending because the Mac is locked. Not marked complete; batch21–30 gates/commit pending.

## 2026-09-09 — Live verification completed

Production baseline and local infinity, near, midpoint, f16 and movement chart verified. Near50cm/D22=21.29/EFL62.75mm; midpoint100cm/D22=11.98/EFL61.14mm; f16 stop2.93mm. GF travels18.61mm objectward, GR fixed; excluded filter absent. Earlier lock blocker resolved. Full batch validation passed2877 tests, typecheck, format, lint, glass checks and build; included in batch21–30.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Table 1 (PDF p.22, printed p.20) rows 28–30: S28 d = 14.50, FL 1.60 mm nd 1.516800 νd 64.14, then 1.00 mm to I; BF
  17.10, air-equivalent BF 16.55; FL is labeled in Figure 1 (p.46). S28 now stores the physical 14.5 mm (fixed; GR does
  not move) and FL is a `rearPlates` entry with glass J-BK7A (Hikari, 1.51680/64.13; compatible with the stored pair).
- Paraxial check against the previous data: EFL identical and defocus unchanged at infinity and near (the old fold was
  exact). Physical track grows by 1.6(1 − 1/1.5168) = 0.545 mm, so `closeFocusM` moves from the filter-omitted
  0.499367 m to the physical object-to-image 0.499913 m.

## 2026-10-27 — Rim-cut figure review

Figure 1 (PDF p. 46, native 300 ppi CCITT raster, axis vertical, object at the bottom) was read element by element
on both halves for flat lands square to the axis at the rims of concave faces, the shape `rimCutDepthMm` draws. Scale
13.12 px/mm from the 143.65 mm S1–S28A vertex span.

| Surface | Figure land (cap end ÷ element edge) | Cut depth | Cut radius | sd (was) | Largest stated axial ray |
|---|---|---|---|---|---|
| 3 (L12 rear, R 50.252) | 0.88 | 9.01 mm | 28.71 mm | 33 (28.7) | 28.30 mm |
| 4 (L13 front, R −60.72) | 0.89 | 7.22 mm | 28.72 mm | 33 (28.7) | 28.63 mm |
| 13 (L24 rear, R 47.074) | 0.84 | 7.19 mm | 25.00 mm | 29.5 (25) | 24.25 mm |
| 22 (L29 rear, R 55.51) | 0.86 | 3.54 mm | 19.51 mm | 22.8 (19.5) | 17.59 mm |

- The figure draws each of these elements' edge at its partner face's height (L12 33.0 mm, L13 32.8, L24 29.5, L29
  22.7; partners S2, S5, S12, S21) and ends the cap at 29.0, 29.2, 24.9 and 19.6 mm. The 2026-09-08 audit had put
  these four sds at the cap ends as "mechanical shoulders". Each sd rose to its partner's and the cut sat at the
  former sd (depth rounded up). Only 13 keeps its cut (beam rule below): its clear radius goes from the old 25.0 mm
  rim to the 25.0046 mm cut radius, where the beams reach 22.8430 mm. 3, 4 and 22 are back at their old rims, uncut.
- The S3/S4 cuts would have settled the follow-up from 2026-09-08, with lands on the drawn 33 mm edges
  18.12 − 9.01 − 7.22 = 1.89 mm apart (the figure shows about 1 mm) and no air-gap intrusion. The beam rule dropped
  both cuts, so that follow-up stays open.
- Surface 15 (L25 front) ends at its 24.8 mm edge with at most a 2 px sag step (q ≈ 0.98), below what the figure
  resolves; no cut. Surfaces 25 (L32 rear) and 28A (L34 rear) run to their element edges; no cut.
- No cap crosses the stop plane: the land on 13 sits 1.51 mm ahead of it and the cap of 15 clears it by 2.00 mm at
  both focus ends (GF and the stop move together).
- The aperture audit is unchanged (f/0.98 within 3 %, no rim, trace, iris or failed rows), and the engine half-field
  stays 25.17°. The cut on 13 clears every traced ray of the wide-open beams by its margin and clips none of them;
  the cuts on 3, 4 and 22 stood inside the beams and were dropped (beam rule below).

## 2026-10-27 — Rim-cut beam rule

An inferred rim cut must clear every traced ray of the wide-open beams by the larger of 0.05 mm and 0.3 % of its
radius, at every field, zoom and focus state, traced through the lens without its inferred cuts (`validateRimCutBeams`,
set in the #928 review). The beams are traced on the paraxial stop of #933 (EPD = F/N) with the rule's current search,
which follows each beam to the field where it vanishes, seeds from the stop and refines near cuts on the full
measurement. Traced against that rule, with all four faces at their figure-review `sd` and depth, these cuts from the
figure review above were changed:

- Surface 3: the cut sat at the old 28.7 mm rim (cut radius 28.7117 mm), and the beams reach 30.0197 mm there
  (focusT 0.05, 5.97°), so the land stopped the rays that rim stops. The sd returns to 28.7 mm with no cut, and the
  face draws as it did before the figure review.
- Surface 4: the cut sat at the old 28.7 mm rim (cut radius 28.7170 mm), and the beams reach 30.0304 mm there
  (focusT 0.05, 5.97°), so the land stopped the rays that rim stops. The sd returns to 28.7 mm with no cut, and the
  face draws as it did before the figure review.
- Surface 22: the cut sat at the old 19.5 mm rim (cut radius 19.5059 mm), and the beams reach 20.7868 mm there (at
  the 0.5 m close focus, 13.90°), so the land stopped the rays that rim stops. The sd returns to 19.5 mm with no cut,
  and the face draws as it did before the figure review.

Surface 13 keeps its cut. Its cut radius is 25.0046 mm, and the beams of the lens as it now stands reach 22.8430 mm
there (at infinity, 2.49°), a clearance of 2.1616 mm against a 0.0750 mm margin, 2.0866 mm spare. The surface audit
and the beam rule pass.

Figure scale and land length: the figure review's 13.12 native px per lens mm comes from the 143.65 mm S1–S28A vertex
span. One native pixel at the cap end and at the edge moves q by ±(1 + q) / (edge px).

- 13: figure q 0.844 (cap end 24.9 mm, edge 29.5 mm) at a 387.0 px edge, range 0.839–0.849. The cut sits at the old
  25.0 mm rim, 0.848 of `sd`. Land 4.4954 mm, over the 0.1 mm minimum.

## 2026-10-29 — Patent figure and rim extensions

Re-read original `patents/WO2019229849A1.pdf`, PDF p. 46, Figure 1 / Example 1, as a 600 dpi crop rotated onto the optical axis. Checked every face and both halves. The 143.65 mm first-to-last-lens vertex span gives 13.12 native px/mm (26.24 px/mm at 600 dpi); FL and leaders were excluded.

| Surface | Clear `sd` (unchanged) | New `rimExtensionSd` | Direct figure evidence |
|---|---|---|---|
| 3 | 28.7 mm | 33 mm | L12 concave rear cap stops short of its 33 mm cemented rim |
| 4 | 28.7 mm | 33 mm | L13 concave front cap stops short of its 33 mm cemented rim |
| 22 | 19.5 mm | 22.8 mm | L29 concave rear cap stops short of its 22.8 mm cemented rim |

These restore the three visible lands removed by the earlier inferred-cut beam rule while retaining exactly the prior optical caps. S3/S4 no longer require continuing the spheres to the taller drawn rims, resolving the 2026-09-08 outline follow-up. The existing safe S13 cut stays at 7.19 mm; S15 has no resolved land beyond line width, and S25/S28A run to their edges. No additional concave cut is supported. No prescription, glass, stop or clear aperture changes.

Verification: before/after `audit:surface` clean; `audit:image-circle` 0 undersized / 0 skipped. Full catalog and rendered-view checks are recorded in the delivery report.
