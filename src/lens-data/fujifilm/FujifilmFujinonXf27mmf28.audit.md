# FUJIFILM FUJINON XF 27mm f/2.8 — integration audit

## 2026-09-15 (UTC)

### Patent geometry

Source: local untracked `patents/US20160011404A1.pdf`, PDF page 4, Fig. 5; inspected at 600 dpi.

Retained all SDs. At 600 dpi and 16.43 µm/px, L11/L23/L31/L32 optical envelopes are approximately 6.1/6.2/8.8/10.8 mm, broadly consistent with the existing silhouette. Rays contaminate ENV and the thin cemented interfaces under-read in RIM. L23 retains its existing 5.06 mm front-rim slope constraint. No reliable >25% optical-rim discrepancy justifies changing the current geometry.

### Glass classification

The patent nd/νd coordinates are retained. The following existing catalog curves pass the shared coordinate guard; they are dispersion proxies, not evidence of a production supplier or historical melt. No complete per-element nC/nF/ng or unsupported partial-dispersion values were introduced. All 7 elements resolve; no additional catalog type is required.

| Element | Patent nd / νd | Runtime curve | Catalog minus patent nd / νd |
| --- | --- | --- | --- |
| L11 | 1.5927 / 35.3 | S-FTM16 | 0.000001 / 0.010 |
| L12 | 1.883 / 40.8 | S-LAH58 | -0.000003 / -0.035 |
| L21 | 1.5927 / 35.3 | S-FTM16 | 0.000001 / 0.010 |
| L22 | 1.72916 / 54.7 | TAC8 | 0.000000 / -0.030 |
| L23 | 1.58313 / 59.5 | M-BACD12 | 0.000000 / -0.040 |
| L31 | 1.80518 / 25.4 | S-TIH6 | 0.000001 / 0.025 |
| L32 | 1.90366 / 31.3 | J-LASFH13 | 0.000000 / -0.026 |

### Metadata

Display names follow the catalog's uppercase manufacturer/line convention. Canonical maker and assignee spelling and romanized inventor names are used while the analysis preserves source wording and qualified production correlations.

### Second figure, glass and live-diagram review

The second local-site comparison with Example 5 / Fig. 5 retains the SDs: the enlarged rear elements and smaller stop-side pair agree with the optical outline. Dashed rays and stepped mechanical rims are excluded. All seven inspector labels explicitly identify compatible catalog proxies where a generic code previously hid the selected curve. Standard/high-index colors remain appropriate without measured APD evidence. The focus control remains disabled; the description distinguishes the marketed 0.34 m limit from unavailable travel data.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- The plate comes from Table 9 on PDF p. 19, checked on a render. It is PP on surfaces 14–15: t = 2.80 mm, nd 1.51680, νd 64.2. The S13 gap to PP is printed as 6.00 mm. The table prints no Di after surface 15, so the 3.424008 mm gap from PP to the image is derived, not printed: printed air-equivalent BF 11.27 − 6.00 − 2.80/1.51680. The same note is in the header and in the plate's `source` string. The plate uses the N-BK7 glass label, which `resolveCompatibleGlass` accepts for 1.51680/64.2.
- The plate check against the folded HEAD model gives the same EFL (worst |Δ| 4.4e-7). Paraxial defocus is unchanged at −0.002434 mm because the derived trailing gap preserves the former 11.27 mm air-equivalent spacing exactly.
- The physical track grows by 0.954 mm, which equals 2.80 × (1 − 1/1.51680). It goes from 37.03 mm air-equivalent to 37.98 mm physical. The surface audit reports no validation errors, and the image-circle audit reports none undersized.


## 2026-10-27 — Rimmer localization audit (asphere data)

Source: local `patents/US20160011404A1.pdf`, Example 5. PDF p. 17, ¶¶0111–0120 (sag convention and units); p. 19, Table 9 (all prescription rows and f/BF/field/Fno), Table 10 (both full asphere columns), Table 11 (TL/Y); p. 20, Table 11 continued; p. 4, Figure 5 (section); p. 9, Figure 10 (Example 5 aberrations). Tables and figures were read as rendered images; Table 10 was additionally inspected at 400 dpi and the L23 shoulder at 600 dpi.

| Surface / location | Field | Before | After | Evidence |
| --- | --- | --- | --- | --- |
| `8A` | `sd` | 5.06 mm | 4.91 mm | First slope zero of the verbatim polynomial is 4.9167786 mm; round down at 0.01 mm precision per the turnover rule. |
| Data header | SD explanation | Reduced clearance / slope threshold at 5.06 mm | Turnover cap, on-axis beam clearance, and remaining outer-field RI refusal | Distinguishes inferred rims from patent dimensions. |
| Data header | Asphere evidence | Conic conversion only | Both A3–A20 blocks rechecked against Table 10 | No printed prescription value changes. |
| Analysis | `8A` rim departure and angle | −0.0282005 mm / +62.159° at 5.06 mm | −0.2064826 mm / −2.530° at 4.91 mm | Exact sag/slope calculation and surface scan at the new rim. |
| Analysis | Stop explanation | Authored `STO.sd = 3.818045612 mm` | Runtime-derived 3.911979582 mm; no authored stop SD | Current runtime pupil calculation; source still supplies Fno, not a stop diameter. No aperture data was changed. |
| Analysis | Field claims | Earlier chief-ray height 14.19113 mm and limited meridional containment | Current helper height 14.175 mm and explicit full-pupil localization limitation | Current helper and vignetting-tab results, not a production-lens measurement. |

### Prescription and rim findings

Every Table 9 R/d/nd/vd entry, including PP rows 14–15, agrees with the file. Every sign, mantissa and exponent in Table 10 A3–A20 agrees for both S8 and S9. Paragraph 0115 uses `sqrt(1 − Kp C² h²)`; therefore printed Kp = 0 becomes project K = −1 on both surfaces. The table is in mm and the prescription is unscaled, so no coefficient rescaling is needed. No transcription error, missing odd term, refit, or established source erratum was found.

The baseline reproduces refusal from 19.3° and the AOI jump near h = 4.9 mm on `8A`. Its old rim crosses the 4.91678 mm turnover; `9A` remains below its separate 6.31390 mm turnover. The source does not publish effective diameters. Figure 5 shows a stop-side shoulder/mechanical extension on L23, so its outer square envelope is not taken as an optical radius; the unequal optical face rims remain unequal. A computed before/after optical outline was compared with the 600 dpi L23 crop: the front-face trim is small (0.15 mm) and retains the meniscus arrangement. No unrelated surface was resized.

The stated on-axis f/2.88 marginal ray crosses `8A` at approximately 3.20 mm, comfortably inside the cap. Substituting 4.91 mm is accepted by the surface validator before editing; the stored model remains accepted afterwards. The aperture check admits the stated on-axis beam and the image-circle floor remains satisfied.

### Source-plot comparison and remaining localization

The unchanged prescription gives EFL 27.813969 mm, Gaussian air-equivalent BF 11.272434 mm, and air-equivalent TL 37.030000 mm, agreeing with Tables 9/11 at printed precision. Full-pupil d-line LSA is +0.062 mm (0.85/0.70/0.50 pupil: +0.008/+0.010/+0.011 mm); Figure 10A has ±0.2 mm axes and a small positive d-line rim shift. At 27.6°, the close-ray tangential/sagittal shifts are +0.057/+0.046 mm and distortion is −2.592%. Figure 10B/C uses ±0.2 mm / ±3% axes and shows the corresponding small astigmatic excursions and negative edge distortion. This is a scale/trend comparison, not a claim that every point of the printed curves was reproduced. In particular, close-ray/chief-ray checks do not validate the high-pupil outer-field rays.

After the cap, maximum referred deviations at 19.3°/22.1°/24.8°/27.6° fall from 0.4157/0.6970/0.6782/0.5925 to 0.1799/0.1689/0.1710/0.1768. All remain above 0.05, so the vignetting tab still refuses RI at those fields; RI remains available through sampled 16.6°. The surviving near-rim zone is still poorly localized: at 19.32°, pupil fraction −0.95 reaches `8A` at h ≈ 4.89 mm and has 5.289 mm transverse error relative to the chief ray. The triage diagnostic fan traces through rims, so its post-cap past-turnover rows are diagnostic continuations, not evidence that those rays transmit through the capped model; the vignetting results include clipping.

The turnover cap is the supported correction. The remaining outer-field localization cause is not isolated by source evidence; a smaller fitted rim or edited coefficient is not justified. No `source.errata` entry was added because the printed first-order/on-axis/chief-ray results do not establish a contradictory source value. The actual fitted optical domain is unpublished.

### Coordinator follow-up

Keep this lens in the unresolved localization queue. The cap improves but does not restore outer-field RI; further source/family-publication or pupil-domain evidence is needed before another prescription/rim change. Broad repository gates and commits remain with the coordinator under the assignment's restrictions. The full per-field before/after values and scratch evidence are in this run's `report.md`.
