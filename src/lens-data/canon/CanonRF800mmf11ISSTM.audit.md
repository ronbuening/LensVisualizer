# Audit Log - CANON RF 800mm f/11 IS STM

Patent: JP 2020-173349 A, Numerical Example 2 / Figure 2

## 2026-10-01 - Focus-element rim correction

Remeasured the exact local `patents/JP2020173349A.pdf`, PDF page 15, Figure 2(A), at 600 dpi. The glass-only crop was `0.51,0.56,0.78,0.635`, with optical-axis override `0.5944` (row 4170). The detected glass span was 2651–3761 pixels, corresponding to 226.75 mm and 0.20428 mm/pixel. The image plane, group brackets, focus arrow, and DOE/stop leaders were excluded from the optical-rim reading.

| Surfaces | Element | Before | After | Evidence |
|---|---|---:|---:|---|
| 8 / 9 | E5 focus element | 16.1 mm | 12.3 mm | ENV and RIM both approximately 12.26 mm; visual confirmation of roughly 120-pixel optical diameter |

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

| Surfaces | Element | Before | After | Evidence |
|---|---|---:|---:|---|
| 8 / 9 | E5 focus element | 13.5 mm | 16.1 mm | Figure 2 clean ENV/RIM row at about 16.14 mm |

The revised prescription passes the surface validator and image-circle floor.

### Glass classification

- Numerical Example 2 publishes only nd/νd coordinates, so the eleven elements retain their six-digit patent coordinates and now identify the compatible catalog material used as each spectral proxy.
- Existing compatible full-coefficient catalog curves cover all 11/11 elements within the coordinate guards. Production suppliers remain explicitly unspecified; no catalog addition is justified.

### Identity and metadata

- Verified the display name `CANON RF 800mm f/11 IS STM` against Canon's product identity and the repository's spacing policy.
- Corrected the first inventor from the transcription error `橋谷 真樹` to the front-page spelling `横谷 真樹`, then stored the family-publication romanizations Maki Yokoya and Tomohiro Ino for repository metadata parity.
- Normalized the front diffractive pair's diagram/cemented label to `DOE` and the site spec to `S4 DIFFRACTIVE PHASE SURFACE`.
- Verified the Figure 2 focus arrow and paragraph 0036 against the runtime motion profile: only L2 moves, by -17.177214630 mm objectward; the lens has no zoom travel.
