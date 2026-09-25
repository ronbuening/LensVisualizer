# Audit Log — SchneiderVariogon18840

Patent: US 3,442,573, Example 1; local US3442573.pdf, Figure 1, PDF p. 1

## 2026-09-20 — Patent figure, glass, and display metadata review

| Surfaces | Before (mm) | After (mm) | Evidence |
|---|---|---|---|
| 6 / 7 | 8.0 / 7.3 | 11.2 / 10.2 | Optical rim approximately 11.5 mm at 32.75 µm/px; retained front/rear proportion |
| 8 / 9 | 7.0 / 7.0 | 8.5 / 8.5 | Drawn rim approximately 9.8 mm; capped below it by 7→8 gap clearance |

The 600 dpi crop measured roughly 700 pixels across L4 and 600 across L5/L6. Leader lines contaminate the automated envelope and several RIM samples, so those outliers were rejected. The smaller surface-10 rim remains required at the tele endpoint. Other rims remain within drawing uncertainty or existing clearance constraints.

L8 now uses the existing S-BSM22 curve: 1.622296 / 53.169067 versus patent 1.62230 / 53.14. All 13 modeled media, including the prism, resolve to compatible catalog curves. The curve is a supplier-neutral proxy.

Normalized the abbreviated assignee to Jos. Schneider & Co., Optische Werke, resolving the pretest metadata failure. Display name now consistently includes SCHNEIDER-KREUZNACH.

The companion analysis reflects these dispositions. Marketed names remain distinct from patent design values and qualified production correlations.

## 2026-09-20 — Live diagram, travel, and coverage follow-up

Retained the first-pass optical SDs against US3442573 Figure 1 and the live wide/mid/tele diagram. The s10/s11 tele gap still limits enlargement. Corrected L2 to biconcave; authored L1–L12/P diagram labels. Added source-backed Super-8 format (7.08 mm frame diagonal). Verified the reversing III compensator and disabled unmodeled focus. All 13 media retain compatible spectral coverage.

Assignee audit: source-era Schneider names are consolidated as `Jos. Schneider & Co., Optische Werke`; the later GmbH & Co. KG remains distinct. Sony Group Corporation is retained for these source-era filings, separately from older Sony Corporation patents. No additional duplicate assignee spelling was found.

## 2026-09-24 — Semi-diameters raised to the traced format corner

US 3,442,573 designs for the 4.22 × 5.69 mm 8 mm frame (abstract; col. 1), a 3.542 mm half-diagonal, and col. 2 says
these frames are fully illuminated even at the minimum focal length. At the wide station the real chief ray (solved
through the stop centre) reaches that corner at 23.77°, but the estimated 5.10 mm rim of surface 10 clipped it from
17.8°, leaving the analysis field at 73% of the corner; the middle and tele stations already reached it. The corner chief
ray crosses surface 10 at 6.94 mm; the new value is that floor + ~3% (small format), rounded up. Surface 11 carries at
most 2.20 mm of corner chief ray at any station and keeps 5.10 mm: it bounds the radial band that the tele-end
d10 = 1.78 mm gap check shares with surface 10, so that check is unchanged. Surface 9, surface 10's partner in L6, is a
cemented junction already at 8.5 mm and is unchanged. No figure measurement was used; the new value stays below the
~9.8 mm L5/L6 rim drawn in Fig. 1 (2026-09-20 entry).

| Surface | Before | After | Justification |
|---|---|---|---|
| 10 | 5.1 | 7.2 | wide-end corner chief ray 6.94 mm + ~3% clearance |

The validator accepts the new value, all three stations now reach 100% of the corner with every rim clear, and the
image-circle floor still reports nothing undersized. At 0.6 field the outer wide-end pupil rays now clip at surface 11
rather than surface 10; the analysis paragraph on modeled vignetting was updated to match. Surface 10 is spherical, so no
aspheric departure changed.

## 2026-09-25 — MTF image-plane census

Visually inspected `patents/US3442573.pdf`, Table I and adjacent first-example discussion on PDF p. 4 (columns 3–4), and repeated claim table p. 5. All 24 optical radii including two prism planes, all spacings and thirteen nd/νd pairs agree. No scale or aspheres. The internal reflex prism P is explicitly 9.00 mm / 1.51680 / 64.20; it precedes the rear powered group and correctly remains an internal optical element, not rearPlates. No terminal plate. Stop splits source d16=3.50 as 1.70+1.80.

All infinity zoom rows match: d5=.47/18.13/27.28, d10=27.74/8.34/1.78, d12=1.69/3.43/.84; their sum is 29.90. The prose explicitly supplies back focal length 13.1 and explains constancy using Gaussian formulae. Independent wide EFL=8.260539039 versus printed minimum 8, BFL=13.162519312 versus 13.1, surface track=84.60 exactly as printed. No supported single misprint explains both focal quantities.

Small-offset best-focus check: reference-index axial geometric MTF (32 grid, 812 rays, 10/20/40 lp/mm) prefers +0.014733 mm, score .826494→.860534. The authored plane is closer to the finite-aperture optimum than paraxial focus, but neither the patent nor that one-field diagnostic proves intentional designer best-focus placement.

**Cause/action:** source first-order/image-distance discrepancy with uncertain rounding/design origin; retain printed BF. Offset **+0.062519 → +0.062519 mm**; Section E row deleted, no numerical change/changelog.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
