# Canon EF 28mm f/2.8 IS USM Audit

## 2026-10-30 — Original-PDF shape and glass review

Directly inspected `patents/JP2013054269A.pdf`, JP 2013-054269 A, published March 21, 2013, Makoto Nakahara / Canon Inc. SHA-256: `2d1b064b6dd2665d520a6d3dc1cb2710b48d366634e929ce7c1f153ce818e1b3`. Numerical Example 1 is ¶0054, PDF page 9: all source surfaces, nine index/Abbe pairs, effective diameters and S17 asphere coefficients. The source BF/track/image-height summary continues on PDF page 10. Paragraph 0052 on PDF page 9 explicitly defines nd/νd relative to the d-line; paragraph 0021 names d = 587.6 nm and g = 435.8 nm in the aberration plots. Figures 1–3 are on PDF page 13: optical section, normal aberrations and centered/0.5° stabilized transverse aberrations.

Original Figure 1 is an embedded 1068 × 646 JPEG at about 199 × 198 ppi. Figure 2 is 893 × 543 pixels near 200 ppi, and Figure 3 is 974 × 275 pixels at 200 ppi. Native extractions were inspected; upsampling is magnification only. The smaller 408 × 248 abstract image is not substituted for Figure 1. The numerical table is PDF text, rendered for visual verification without claiming a native bitmap resolution. Approximately 493 native pixels span the 55.81 mm first-to-last physical vertex distance, about 8.83 px/mm; practical outer-outline uncertainty is around ±0.8 mm after ink and schematic differences. Published effective diameters retain clear-cap authority. FS dummy/flare-cutter lines, stop symbols, brackets and leaders are excluded from optical-rim measurements.

All nine elements, all concave ends, both cemented interfaces S9/S15 and the S17A asphere were inspected. No hybrid/resin layer, separate cement medium, source filter or rear plate is tabulated. Source dummy surface 1 is explicitly inactive; source flare cutter 19 is co-located with the last refracting surface and has a larger aperture, so both remain omitted. Source R/d, all clear half-diameters, every asphere coefficient, stop authority and focus spacings are unchanged.

### Shape disposition

| Air-facing surface | Retained source clear sd | Added outer `rimExtensionSd` | Evidence / anchor                                                                |
| ------------------ | -----------------------: | ---------------------------: | -------------------------------------------------------------------------------- |
| S3                 |                18.075 mm |                    21.000 mm | Native rear vertical shoulder of front meniscus; source S2 cap anchor            |
| S7                 |                10.270 mm |                    11.720 mm | Native rear vertical shoulder of moving negative meniscus; source S6 cap anchor  |
| S14                |                 6.410 mm |                     7.590 mm | Native front shoulder of rear doublet; conservative source S15 bonded-cap anchor |

Three shoulders and zero inferred cuts are authored. No clear cap is overwritten by a blank height. The rear doublet's full schematic outer semi-height is approximately 9.4 mm. A front S14 outer trial at 9.4 mm passes numerical geometry, but is rejected as a full-blank reconstruction because the source's 7.59 mm curved bonded cap does not establish material outside that boundary. Filling the full square band would require an unsupported bonded land, an inflated optical interface or a material wing not resolved by the prescription. The final S14 outer anchor stops at 7.59 mm and explicitly does not claim complete mechanical-blank dimensions. No additional distinct land is resolved on continuous S10/S16/S17A outlines strongly enough to author it.

The pre-existing `gapSagFrac: 0.95` remains unchanged. It preserves the source S3/S4 caps and about 0.418374 mm physical rim clearance; this review adds no tolerance relaxation. The source LF negative-sign prose conflicts with the rounded prescription's weak positive pre-stop power, and some source track ratios include the inactive dummy. Those previously identified constraints remain qualified in the analysis; no optical number is changed to repair source prose.

### Every modeled medium

All nine d-line index/Abbe pairs match the original. The older neutral class strings already resolved to nine existing catalog entries. The new labels explicitly identify those same compatible spectral proxies, with historical glass unresolved; the selected curves are unchanged.

| Element | Source nd / νd | Retained compatible curve | Source identity |
| ------- | -------------: | ------------------------- | --------------- |
| L1      | 1.60311 / 60.6 | J-SK14 / Hikari           | Unresolved      |
| L2      | 1.77250 / 49.6 | J-LASF016 / Hikari        | Unresolved      |
| L3      | 1.48749 / 70.2 | S-FSL5 / Ohara            | Unresolved      |
| L4      | 1.91082 / 35.3 | H-ZLaF4LA / CDGM          | Unresolved      |
| L5      | 1.73800 / 32.3 | J-KZFH9 / Hikari          | Unresolved      |
| Gis     | 1.72916 / 54.7 | TAC8 / Hoya               | Unresolved      |
| L7      | 1.74000 / 28.3 | S-TIH3 / Ohara            | Unresolved      |
| L8      | 1.69680 / 55.5 | J-LAK14 / Hikari          | Unresolved      |
| L9      | 1.58313 / 59.4 | J-SK12 / Hikari           | Unresolved      |

The source prints no individual C/F/g indices, relative partial dispersions or APD evidence. No per-lens spectral override exists to remove, and no genuine source value is removed. Compatible curves supply qualified spectral estimates; their catalog partial behavior does not prove the historical medium. In particular, a KZFH proxy does not establish source anomalous dispersion, and a crown proxy cannot establish molding chemistry or process. Existing `apd: false` remains the absence of a source APD designation rather than proof of an exactly normal melt. No supplier, melt, resin/cement formulation or production manufacturing route is identified. Per-element prose, table and labels now agree with nine qualified active curves.

### Stop, focus, IS and actual renderer verification

Surface, image-circle, infinity aperture-census and corner-field checks pass. The iris stays derived from the source f/2.86 convention, radius 6.436622 mm. The table's generic 13.11 mm effective-diameter row is retained as source envelope evidence rather than asserted as an independently established physical iris radius. Aperture-census beam clearance is separate from actual marginal-ray working f-number. The latter is 2.907917 at infinity, 3.045075 at focus 0.5 and 3.184428 at the constrained 0.23 m endpoint. The finite-conjugate values are not compared as if the source f/2.86 were a published finite-focus working-number schedule.

All 126 real working-ray calls across 21 focus positions and six apertures trace, with baseline/candidate results identical. An aimed 193-point circular-pupil probe at axial, half-field and corner fields across those 21 focus states also gives identical passing counts at all 63 fields. Every axial sample passes, all chiefs are aimed/valid, and corner counts remain 103/193 at infinity and 113/193 close. Off-axis vignetting remains rather than a claim of full-pupil illumination.

The actual SVGs at infinity, mid and close focus were compared with Figure 1. Twenty-one focus states produce 189 finite, singly connected, closed element paths with zero hidden renderer trimming, and corner aiming reaches about 21.65 mm. No inferred cut requires an exemption or cut-beam probe. Source only publishes infinity spacings; rigid-group focus constrained to the product MFD remains a reconstruction, not a measured source cam. Figure 3's 0.5° stabilized state was directly inspected, but no millimetre Gis travel is published and no IS-decenter control is modeled. Centered runtime checks do not certify that lateral state. Source fidelity, sampled runtime clearance and production correlation remain separate conclusions.

## Runtime Launch Qualification - 2026-10-30

This is a runtime-only supplement to the dated source/shape/glass review above. No original PDF was reinspected for this supplement; source review dates, prescription values, controls and review counts remain unchanged. Earlier pupil/chief grids labeled near or close sampled **collimated rays through focus-adjusted geometry**. Those labels identify the control geometry, not finite-object illumination. Independently computed finite paraxial residuals and exact-working-f-number probes remain separate; the latter use the runtime distance-label object plane.

The explicit finite-object supplement samples 20 positive focus positions. The complete current ABCD matrix, including any rear plates, supplies the real Gaussian object plane. A paraxial entrance-stop seed and inverse chief solve target actual image heights 0, 10.8250 and 21.6500 mm; paraxial object-height scaling alone is not accepted as the actual image-edge solve. Geometric roots are solved before current-aperture classification. The 21.6500 mm edge is the viewer format corner, which may exceed the selected source's image height; these probes do not establish production illumination or source support for an inferred continuous cam.

Of 20 positive-real-object geometries, 60/60 target chiefs converge: 60 clear the current caps and 0 clip. Across the converged fields, 193 current-iris samples per field give 9,092 passed, 2,488 clipped, 0 failed and 0 unaimed rays. Minimum sampled axial transmission is 193/193. No clear aperture, R/d, stop, cam, tolerance or source field is altered to clear those diagnostics.

Selected current close geometries, with Gaussian conjugates and their exact aimed bundle counts:

| Zoom control | Aberration control | Gaussian object-to-image (m) | Distance label (m) | Axis / half / edge passing of 193 | Chief result          |
| -----------: | -----------------: | ---------------------------: | -----------------: | --------------------------------- | --------------------- |
|            0 |                  0 |                  0.230000000 |           0.230000 | 193 / 154 / 113                   | clear / clear / clear |

The largest sampled relative difference between a positive Gaussian object-to-image conjugate and its distance label is 40.175193% at zoom 0, focus 0.05, aberration control 0: Gaussian 2.751941102 m versus label 4.600000000 m. This is a first-order conjugate/control distinction, not a new production-distance measurement. Nominal infinity controls remain in their separate collimated checks; their small rounding residual is not converted into a finite-source claim.
