# Audit Log — Sony Sonnar T* FE 55mm F1.8 ZA

Patent: US 2015/0092100 A1, Example 1

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US20150092100A1.pdf`.
- Example 1 row confirmed L11 / surface 1 nd = 1.58144, vd = 40.9.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L11 / S1 | `S-TIM2 (OHARA)` | `E-FL5 (HOYA)` | Public HOYA catalog row matches the patent nd/vd pair. |

### Analysis sync

- Updated the L11 element paragraph and glass table.

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Rechecked local `patents/US20150092100A1.pdf` and the current analysis sidecar against the data file.
- Existing R/d/nd/vd, high-index/catalog labels, APD metadata, and estimated SD profile remain consistent with the patent-backed prescription and prior relabel pass.
- No APD, high-index, glass-label, spacing, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Table 1 on PDF page 26 (printed page 7) at 160 dpi: surface 13 d = 11.78; surfaces 14–15 are the
  optical member SG, 2.00 mm, nd 1.516798, νd 64.2; surface 15 → image is 1.00 mm. Table 2 varies only D7/D9, so the
  gap before SG is fixed through focus. 1.516798 / 64.2 is the N-BK7 class (`resolveCompatibleGlass` confirms).
- Surface 13 now stores the patent's 11.78 mm (was the air-equivalent 14.10), with `rearPlates` SG (N-BK7) and
  gapAfter 1.00 mm. Paraxial check against the previous data: EFL identical; defocus changes by 0.0014 mm at every
  focus keyframe (rounding in the old 14.10 vs 14.0986). Physical track grows by 0.68 mm and now matches the 79.35 mm
  total length quoted in the analysis. `closeFocusM` 0.5 m is the marketing MFD and is unchanged.

## 2026-09-25 — MTF image-plane census

Classification: small published-plane/paraxial mismatch, with no source-backed correction.

Visually checked local `patents/US20150092100A1.pdf`, PDF p. 26, Example 1 Tables 1–3 and paragraphs 100–104. All 13 active rows, seven nd/vd pairs, and all five conics and A4/A6/A8/A10 terms match. No scale is applied. Table 2 explicitly identifies infinity D7=2.81 and D9=13.67; beta=−0.033 uses 4.07/12.41. The separately documented extrapolated 0.5 m endpoint does not enter this census.

Table 1 ends with D13=11.78, SG S14–15 (2 mm, nd=1.516798, vd=64.2), and D15=1.00 to the image. These physical distances are already represented by `rearPlates`; there is no omitted gap or additional Bf row. Their reduced distance is 14.098567139 mm, versus independent paraxial BFL 14.137844961 mm. EFL 53.612457671 agrees with printed 53.61 to rounding.

Offset remains **+0.039277822 mm**, just above the 0.038074005 mm census limit. A reference-index, on-axis geometric MTF diagnostic (812 rays, pupil grid 32, 10/20/40 lp/mm) selects +0.021110798 mm, score 0.875358 → 0.988246. This is compatible with a small finite-aperture compromise, but the text does not define the listed plane as designer best focus and this diagnostic is not evidence of authorial intent. Keep all published values and record the residual; Section E row deleted. No user-visible data change or changelog entry.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.

## 2026-10-27 — Rimmer localization audit (asphere data)

Patent: `US20150092100A1.pdf`, Example 1; PDF p. 25 ¶0098–0099 (units and notation);
PDF p. 26 (printed p. 7), Tables 1–3 and the sag equation;
PDF p. 2, Fig. 1; PDF p. 8, Figs. 12–13. Reviewed the full table page at 220 dpi, Table 3 and Fig. 12 at 360 dpi,
and Fig. 1 optical rims at 600 dpi. Digit decisions use these images, not OCR.

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L32 / 12 | `sd` | 13.5 mm | 14.5 mm | Preserve Fig. 1's square rim with face 13. |
| L32 / 13 | `sd` | 13.5 mm | 14.5 mm | Source-field chief ray at 22.15° needs h ≈ 13.94 mm; floor + 0.5 mm (SD procedure Step 1), consistent with Fig. 1's L32 at about 14.5 mm on the lens's figure scale. |
| 8A | `sd` | 13.5 mm | 13.5 mm retained | Turnover ≈ 11.98 mm, but the printed f/1.86 beam needs h ≈ 12.37 mm here; the stated-beam exception forbids a cap. |
| 10A | `sd` | 16.5 mm | 16.5 mm retained | Authored rim remains below turnover ≈ 16.68 mm. |

### Source transcription and convention

Table 1 rows 1–15 match all R/d/nd/vd values, including the infinity D7/D9 = 2.81/13.67 mm and optical member SG
(11.78 mm preceding air, 2.00 mm glass, nd 1.516798 / νd 64.2, 1.00 mm trailing air). Table 2's second focus row
remains 4.07/12.41 mm at β = −0.033; the independently reconstructed 0.5 m endpoint is outside this design-focus audit.
Table 2 prints f = 53.61 mm, Fno = 1.86 and ω = 22.15°; traced EFL is 53.612458 mm. Physical front-to-image
length from the table is 79.35 mm; no separate numerical Bf or total-track summary is printed there.

Every Table 3 cell matches the stored value. In particular, row 8 prints A4 = −0.153071E−04, A6 = +0.595902E−07,
A8 = −0.103151E−09 and A10 = −0.118635E−12. Rows 6, 9, 10 and 11 were checked term by term as well. All conics
are zero; the printed `(1+κ)` convention matches K = 0 directly. Only powers 4, 6, 8 and 10 are published, and
no length scaling applies. No transcription or odd-term correction is indicated.

### Localization finding and aperture decision

The reproduced baseline first refuses RI at 13.41° (maxDev 0.1962). At that field the meridional pupil ray y = −1
crosses 8A at 13.09 mm and reaches the image 9.8985 mm from the chief-ray image. The adjacent y = −0.95 ray
crosses 8A at 12.47 mm, has a 4.0926 mm image error, and changes incidence on RP1a by about 11.3° relative to
the preceding ray. The plate stack matches Table 1; that jump is an observed downstream symptom, not evidence
of an omitted plate or wrong plate index. Higher fields include failing rays with no turnover crossing.

A proposed 8A rim of 11.9 mm satisfies surface geometry, but an isolated scratch-only aperture check gives
f/1.926691 instead of f/1.86, limited by 8A. The actual f/1.86 marginal ray needs 12.37 mm there. Do not apply
this cap or alter its coefficients to improve RI. The current inferred rim extends beyond turnover, but no
source-supported replacement has been isolated. The 8A departure stays −285.4 µm at the retained 13.5 mm rim.

The independent L32 correction removes the source-field chief-ray clip. At 22.15° the corrected model gives
Y = 21.6312 mm, agreeing with Fig. 12's 21.63 mm, whereas the previous rim limited the modeled field to 21.46°
and Y = 20.93 mm. Source Fig. 1 and a scratch rendering of the runtime surface profiles were compared: L32 keeps
a square rim and negative-meniscus shape. Other inferred rims have no established figure discrepancy requiring
an edit in this pass.

### Source-plot comparison and disposition

Fig. 12's spherical and astigmatism axes span ±0.5 mm; distortion spans ±5%. Its Fno label is 1.85, versus 1.86
in Table 2; retain the tabulated value. LSA remains −0.015/−0.024/−0.017/−0.010 mm relative to paraxial focus
at pupil fractions 1/0.85/0.7/0.5. The sampled close-ray T/S range is about −0.026 to +0.070 mm at the retained image
plane; distortion rises to +0.186% then reaches −0.799% at the format corner. Their scale and shape are consistent
with Fig. 12 at its readable resolution. The prior +0.039278 mm paraxial-plane residual is unchanged. None of
these isolates a printed-value error, so a single-slip coefficient search and `source.errata` entry are not justified.

After the L32 edit, surface validation accepts the prescription, the aperture remains iris-limited at f/1.86,
the image-circle floor reports no undersized surface, and the corner chief ray clears. The vignetting sweep now
uses half-field 22.16847°: RI is available at 0°, 2.77°, 5.54°, 8.31° and 11.08°, but remains refused as
`rays-not-localized` at 13.86°, 16.63°, 19.40° and 22.17° (maxDev 0.2675/0.2309/0.1933/0.1291).
The sampled angles changed because field clearance improved; these values are not comparisons at identical angles.

### Analysis sync and follow-up

Updated the data header and analysis with the L32 rims, the explicit 8A stated-beam exception, the source-plot
comparison and the unresolved outer-pupil limitation. No aspheric departure quoted at another height changes.
Coordinator follow-up: keep this localization problem open; investigate source clear-aperture information or an
independent full-pupil trace before changing coefficients, 8A's rim, or the source f-number. The L32 field-clearance
correction is complete. Repository gates and any queue edits remain with the coordinator.

Coordinator review: the failing outer-pupil rays break at 11A, not 8A. At 13.9° the lower-rim rays meet 11A at
15.3-16.6 mm, where its A6, A8 and A10 terms each reach ±0.5-0.9 mm and largely cancel, and leave it steeply enough
to strike surface 12 at 52-57°. 11A does not turn over inside its 16.5 mm rim, and FIG. 1 draws L31 about 10 % smaller
than the data, inside the figure's noise, so no rim change is supported. 8A's slope sign change at 11.98 mm is on a
nearly flat surface (−1° at its rim) and is not a turnover in the procedure's sense. Recorded as a model limitation.
