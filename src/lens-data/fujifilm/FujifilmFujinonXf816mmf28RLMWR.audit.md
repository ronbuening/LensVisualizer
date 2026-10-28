# Audit Log — Fujinon XF 8-16mm f/2.8 R LM WR

Patent figure: `US20190302431A1.pdf, p. 3 Fig. 2 (Example 1, wide/tele)` in local `patents/`.

## 2026-09-27 — Source figure, glass, and metadata audit

### Semi-diameters

The exact source section was inspected at 600 dpi. Optical curve endpoints, not rectangular blank shoulders, leaders, rays, or movement arrows, control the comparison. Values remain estimates rather than published clear apertures.

No SD change. Manual optical-rim review found no defensible large discrepancy; smaller differences are within figure/scale uncertainty. Automated outliers were leader/bracket ink or mechanical shoulders, so they were rejected. Cemented interfaces and stepped rims were inspected individually.

### Glass classification

Catalog curves are coordinate-compatible spectral proxies, not evidence of production suppliers or historical melts. Patent nd/vd values are unchanged.

| Element | nd / vd | Runtime catalog curve |
|---|---|---|
| L11 | 1.8515 / 40.78 | S-LAH89 |
| L12 | 1.69259 / 53.07 | Unresolved; patent-coordinate fallback |
| L13 | 1.85108 / 40.12 | Q-LASFH58S |
| L14 | 1.43875 / 94.66 | S-FPL55 |
| L15 | 1.95375 / 32.32 | S-LAH98 |
| L21 | 1.6935 / 53.18 | L-LAL13 |
| L22 | 1.755 / 52.32 | S-LAH97 |
| L23 | 1.59522 / 67.73 | S-FPM2 |
| L24 | 1.816 / 46.62 | S-LAH59 |
| L25 | 1.64769 / 33.79 | S-TIM22 |
| L31 | 1.816 / 46.62 | S-LAH59 |
| L32 | 1.59282 / 68.62 | FCD505 |
| L33 | 1.8515 / 40.78 | S-LAH89 |
| L34 | 1.43875 / 94.66 | S-FPL55 |
| L35 | 1.43875 / 94.66 | S-FPL55 |
| L41 | 1.85343 / 40.56 | Unresolved; patent-coordinate fallback |
| L42 | 1.883 / 40.76 | S-LAH58 |
| L43 | 1.497 / 81.54 | S-FPL51 |
| L44 | 1.883 / 39.22 | H-ZLaF68N |
| L51 | 1.94595 / 17.98 | FDS18 |

Removed catalog-derived authored nC/nF/ng values so the runtime resolver supplies qualified catalog dispersion rather than presenting it as measured patent evidence.

Converted every Table 1 theta_gF to the engine normal-line convention: dPgF = theta_gF − (0.6438 − 0.001682 × vd). This replaces catalog-derived deviations on L21/L44 and retains the published ratio on all 20 elements, including unresolved L12/L41. No APO or patent-explicit APD identity is inferred from the ratio alone.

### Rear plate

Table 1: restored 8.949 mm air + 2.850 mm PP (nd=1.51680, vd=64.20) + 1.000 mm air through rearPlates. The plate is traced but not drawn.

### Display and metadata

Normalized display capitalization and retained distinguishing product suffixes. Patent-to-production correlation remains qualified. Assignee spelling follows the existing catalog identity.

Cemented membership now explicitly accompanies the source interface topology so the Element Inspector identifies the connected doublets/triplet, not just the diagram bracket.

### Local-site re-review — 2026-09-27

Compared the rendered local-site diagram directly with the exact local patent figure cited above, including optical rims, element order, aspheric marks, cemented membership, labels, and glass colors. Existing SDs are retained: no further optical-rim discrepancy warrants enlarging apertures into source blank shoulders, bevels, or constrained aspheric rims.

Wide-to-tele remains 8.24 to 15.52 mm. Relative to fixed G5, G1 moves +16.782 mm imageward, while G2/G3/G4 move -9.763/-10.311/-5.810 mm objectward. Infinity-to-published-500 mm focus moves the entire G4 imageward +0.122 mm at wide and +0.299 mm at tele, preserving DD26+DD32 and the image plane. The displayed slider direction agrees with Fig. 2 and Table 2; no extrapolation to production MFD was introduced.

L14/L23/L32/L34/L35/L43 receive inferred APD colors and inspector notes from the published theta_gF ratios and compatible fluorophosphate curves. Published ratios remain authoritative; the tags do not claim the source explicitly calls these elements APD. L12 and L41 remain unresolved because the examined candidates conflict spectrally.

Validation: surface, image-circle, and traced field-coverage audits passed. The batch render sweep covered 918 zoom/focus states with zero hidden rim trim; catalog consistency and mismatch checks passed. Full typecheck, formatting, lint, 287 test files / 2,833 tests, and production build passed. The existing changelog is unchanged. Fuji capitalization and Minolta translated corporate-style aliases now have shared metadata regression guards; distinct historical entities remain separate.

## 2026-10-27 — Rimmer localization audit (asphere data)

Patent: US 2019/0302431 A1, Example 1. PDF page numbers count the cover as page 1. Sag convention: PDF p. 34 (printed p. 9), paragraphs 0097-0102. Prescription and summary: PDF p. 35 (printed p. 10), Tables 1-2. Coefficients: PDF pp. 35-36 (printed pp. 10-11), Table 3 and continuation. Section and aberration figures: PDF pp. 3 and 14, Figs. 2 and 13.

### Retained-information audit

| Surface / block | Source rows checked | Finding |
|---|---|---|
| 3A, 4A, 5A, 6A | Table 3, KA and A3-A20, PDF p. 35 | Every sign, mantissa, exponent and radial power agrees. |
| 11A, 12A, 27A, 28A | Table 3, KA and A3-A16, PDF p. 35; A17-A20, PDF p. 36 | Every sign, mantissa, exponent and radial power agrees; 27A A9 really is -6.1219487e-10. |
| All eight aspheres | KA=1; A3=0; nonzero A4-A20 | Existing K=0 conversion, omitted zero A3, retained odd powers and scale factor 1 are correct. |
| Surfaces 1-36 | Table 1 R/D/Nd/vd, including stop 10 and PP 35-36 | No transcription mismatch; PP remains in rearPlates. |
| DD[9], DD[18], DD[26], DD[32] | All four Table 2 state columns | All spacings agree. |
| Field limit | Table 2 2omega=125.8/82.4 degrees at infinity; Fig. 13 omega=62.9/41.2 degrees | Runtime edges 62.81/41.15 degrees are inside the source fields. No image-height column supplies a narrower field. |

### Edits

| File / field | Before | After | Evidence / reason |
|---|---|---|---|
| Data header, localization note | No Rimmer qualification | Records unavailable outer Wide RI and unresolved L41 outer-zone behavior | Sweep and per-ray diagnostics; printed tables retained. |
| Analysis, extreme-field qualification | Describes vignetting and lack of full-pupil clearance | Also identifies non-localized transmitted rays and unavailable RI | Clipping alone does not explain the refusal. |
| Analysis, outer-field localization section | Absent | Source comparison, L41 ray heights/errors, zoom limitations and retained-value decision | Tables 1-3; Figs. 2 and 13. |
| Optical prescription, SDs and source.errata | Existing printed values and inferred rims; no errata | Unchanged | No transcription error, qualifying turnover, or isolated source contradiction. |

### Finding and evidence

Verdict: model-limitation, unresolved outer-field marginal-ray localization. At Wide infinity, the last three sweep fields (56.8/59.8/62.8 degrees) retain maximum referred deviations 0.1068/0.1568/0.1859 radians and unavailable RI. At field 59.67 degrees, pupil y=-0.50/-0.60/-0.65 reaches 27A at 9.95/10.42/10.67 mm and 28A at 10.03/10.51/10.79 mm, with image-plane error +0.108/+1.904/+8.435 mm relative to the chief. This localizes the rapid growth to L41's outer zones without a past-turnover crossing; it does not establish a wrong coefficient.

The asphere rim/first-turnover heights in mm are 3A 21.8/23.31, 4A 16.1/18.00 and 5A 16.1/18.63. No turnover was found in the diagnostic scan for 6A, 11A, 12A, 27A or 28A. Surface 27A steepens from -16.4 degrees at h=10.2 mm to -25.5 degrees at h=10.8 mm; its retained rim angle is -42.6 degrees at h=11.2 mm. None qualifies for the turnover-cap rule. The Fig. 2 optical endpoints, excluding rectangular shoulders and labels, do not justify a greater-than-about-25-percent resize; Table 1 publishes no effective diameters. The on-axis stated aperture remains supported.

The source figures broadly agree with the unchanged print: Fig. 13 uses spherical-aberration axes of +/-400 micrometers, astigmatism +/-800 micrometers, and distortion +/-20 percent. Marginal-pupil LSA is +0.011 mm Wide and +0.033 mm Tele. Edge distortion is -11.612% Wide / +4.539% Tele; edge tangential/sagittal focus shifts are +0.139/+0.111 mm and +0.062/+0.117 mm respectively. Computed infinity focal lengths 8.2361/15.5142 mm remain close to Table 2's rounded 8.238/15.516 mm. No source contradiction isolates a single-slip coefficient correction; no coefficient search based solely on better RI was used.

The interpolated midpoint has an unavailable outer 52.9-degree sample (maxDev 0.1185); Tele supplies RI through the runtime 41.1-degree edge (maxDev 0.0102). No zoom spacing was changed. The existing surface and image-circle constraints remain satisfied.

### Follow-ups

Retain the refusal of RI for non-localized fields. Numerical clear apertures are absent, so possible additional clipping or outer-zone polynomial validity remains unproved. A further independent trace or additional source aperture evidence is needed before changing coefficients or rims. No source.errata entry was added because the inspected summary and aberration figures do not establish a contradiction in the printed values. The coordinator may queue this as unresolved model/clear-aperture behavior; this pass does not edit a shared queue.
