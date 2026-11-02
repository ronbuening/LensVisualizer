# Audit Log - CANON RF 800mm f/11 IS STM

Patent: JP 2020-173349 A, Numerical Example 2 / Figure 2

## 2026-10-01 - Focus-element rim correction

Remeasured the exact local `patents/JP2020173349A.pdf`, PDF page 15, Figure 2(A), at 600 dpi. The glass-only crop was `0.51,0.56,0.78,0.635`, with optical-axis override `0.5944` (row 4170). The detected glass span was 2651–3761 pixels, corresponding to 226.75 mm and 0.20428 mm/pixel. The image plane, group brackets, focus arrow, and DOE/stop leaders were excluded from the optical-rim reading.

| Surfaces | Element          |  Before |   After | Evidence                                                                                           |
| -------- | ---------------- | ------: | ------: | -------------------------------------------------------------------------------------------------- |
| 8 / 9    | E5 focus element | 16.1 mm | 12.3 mm | ENV and RIM both approximately 12.26 mm; visual confirmation of roughly 120-pixel optical diameter |

This supersedes the August audit's 16.14 mm reading. The previous radius exceeded the fresh figure estimate by approximately 31%; the revised radius agrees within rounding. The patent does not publish effective diameters, so 12.3 mm remains an estimate, not a source-tabulated clear aperture.

The other front elements differ from the drawing by roughly 14–21% in semi-diameter, below the strong-evidence threshold; the DOE front member also has an ambiguous automated rim reading. Their existing ray-envelope estimates were retained. Rear cemented-pair and stepped-rim review found no new basis for changing the closely spaced rear surfaces or pupil-calibrated stop.

The infinity-focus reconstruction was retained. An independent sequential paraxial calculation with the published indices and DOE power gives EFL 725.598539 mm and BFD 124.357517 mm for the printed 35.90/21.43 mm gaps, versus EFL 776.370000 mm and BFD 138.317904 mm for the reconstructed 38.427214630/18.902785370 mm gaps. The latter agrees with the patent's 776.37 mm EFL and rounded 138.30 mm BF. Moving E5 back to the printed position would therefore lose cardinal-data agreement.

Before/after comparison across five focus positions and three field positions used 401 meridional pupil samples and a separate 317-point circular skew-pupil grid per RGB channel. Aperture-survival counts, focal lengths, fixed F/11.31, and render diagnostics were identical. The correction improves figure fidelity without establishing improved aberration, MTF, or production-lens accuracy. The narrow-view label crowding is a shared diagram-layout limitation; the lens's `yScFill` override does not affect the enabled uniform-scale renderer.

Verification: `audit:surface`, `audit:image-circle`, and `audit:field-coverage` pass, with full-frame corner coverage preserved and no renderer trims at the sampled focus states. Live infinity and close-focus diagrams show the corrected E5 rim and retained objectward translation. Typecheck, formatting, lint, the full test suite, build, and diff whitespace checks pass.

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 15, Figure 2, at 600 dpi with an explicit optical-axis override and a crop excluding the image plane.
- The compact figure is crossed by DOE, stop, focus, and group annotations, so several automated ENV/RIM rows are contaminated or under-read. High-resolution inspection shows the modeled front-element, DOE-pair, focus-element, and rear-group height order matches Figure 2.
- The clean E5 row measures about 16.14 mm against the initial 13.5 mm model. Surfaces 8/9 were increased to 16.1 mm to follow the patent rim more closely; all contaminated rows and the pupil-calibrated stop were retained.

| Surfaces | Element          |  Before |   After | Evidence                                     |
| -------- | ---------------- | ------: | ------: | -------------------------------------------- |
| 8 / 9    | E5 focus element | 13.5 mm | 16.1 mm | Figure 2 clean ENV/RIM row at about 16.14 mm |

The revised prescription passes the surface validator and image-circle floor.

### Glass classification

- Numerical Example 2 publishes only nd/νd coordinates, so the eleven elements retain their six-digit patent coordinates and now identify the compatible catalog material used as each spectral proxy.
- Existing compatible full-coefficient catalog curves cover all 11/11 elements within the coordinate guards. Production suppliers remain explicitly unspecified; no catalog addition is justified.

### Identity and metadata

- Verified the display name `CANON RF 800mm f/11 IS STM` against Canon's product identity and the repository's spacing policy.
- Corrected the first inventor from the transcription error `橋谷 真樹` to the front-page spelling `横谷 真樹`, then stored the family-publication romanizations Maki Yokoya and Tomohiro Ino for repository metadata parity.
- Normalized the front diffractive pair's diagram/cemented label to `DOE` and the site spec to `S4 DIFFRACTIVE PHASE SURFACE`.
- Verified the Figure 2 focus arrow and paragraph 0036 against the runtime motion profile: only L2 moves, by -17.177214630 mm objectward; the lens has no zoom travel.

## 2026-10-30 — Reused source coverage; current runtime followup only

- Reuse actual August 20, 2026 glass/figure review and October 1, 2026 direct-original rim/concave/rear/cemented/SVG review. No new original PDF inspection or native measurement. The October 1 fee638fc0 canonical prescription equals current after only focus.published provenance metadata. Reviewed raw SHA-256 b8de1cf4fcc9094df086abed528c3bac1d406b22a143f2ca52e8b8c0fff78ecb; current data 709dbd4c63ab0eef7b3fede6f0dfdab6b209c5be88a5c8d697e9d896bb55e4ab remains byte-identical. Fresh review count 0; reused entry count 1.
- Preserve every optical field/control. Current infinity d7/d9=38.42721463001324/18.90278536998676 is a mechanism/focal-summary constrained reconstruction, not a uniquely verified source-table correction. Original reported 35.90/21.43, constant 57.33 sum and retained near 21.25/36.08 are distinguished in analysis. Exact fitted decimals are model precision, not additional printed digits.
- Current 11/11 curves resolve with unchanged identities; no authored source line/partial overrides or APD claims. Supplier, melt and chemistry remain unproved. DOE order/reference/five coefficients unchanged. No data change or fresh spectral-source claim.
- Current derived iris 8.324063162 mm replaces stale 8.323960831 prose. Current EFL 776.377288519/BF 138.319902907 mm are separated from published 776.37/138.30 and earlier calculations. Standard surface/image-circle/aperture/field checks pass at the single infinity station. Of 65 working controls, 49 trace (infinity 11.397541878) and 16 S8 vignettes occur at focus≥.765625; close exact working value unavailable. No inferred cap or iris is enlarged to certify these controls.
- Collimated control-grid axis/full-format counts are infinity 193/134 and near 169/132 of 193. Near-axis clip is at front cap. This launch domain is not finite-object illumination.
- DOE-aware finite matrix agrees with computeSystemMatrix plus image transfer at all 65 controls within 3.5e-13. 64 positive controls ×3 actual image-height targets: 192/192 chief roots converge and clear; 31914 pass/1648 clip/3494 no-bracket/0 unaimed pupil samples. Near axis/half/full 169/169/138 of 193 with 0/12/41 failed marginal continuations. Retained source geometry limits are disclosed, without treating a failed marginal trace as proof no physical ray exists.
- Near Gaussian total 6.013994418 m/magnification −.137531054 versus display 6.0 m; finite display-plane residual +.265688033 mm, infinity +.019902907. Max relative distance-label discrepancy 1.101980% at focus.015625 (Gaussian 388.231601 m/display 384 m). These are current-code results, not new source stations or production-cam proof.
- Public ordinary 1.6 degree chief converges at infinity, |Y| 21.923010 mm; current format 21.65 mm solves at 1.580517 degrees. Separate bounding-sphere vector solve fails to bracket at both endpoint controls; no invalid vector height or relaxed guard is presented as success. Its failure is a model/launch limitation, not a source blocker or proof no ray exists.
- All 65 states/715 SVG element paths finite/closed/connected, zero hidden trim. Actual current SVGs inspected for path integrity/group movement only; original comparison reused with actual dates. No inferred cuts or source exemptions. Source/model/production conclusions remain separate. Scratch runtime/proof files remain untracked.
