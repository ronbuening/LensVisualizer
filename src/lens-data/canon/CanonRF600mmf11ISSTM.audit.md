# Audit Log - CANON RF 600mm f/11 IS STM

Patent: JP 2020-173349 A, Numerical Example 1 / Figure 1

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 15, Figure 1, at 600 dpi with an explicit axis override to exclude the unit brackets and focus annotation.
- The calibrated scale was 160.70 µm/px. The front DO pair measures about 26.4 mm versus 29.0 mm, and the rear L3 group measures about 8.4 mm versus 8.2-8.3 mm, so both were retained.
- E3 measures 12.2 mm against the initial 16.5 mm model, and E4 is bracketed at about 10.9-12.7 mm against 15.8 mm. The high-resolution optical outlines support tightening E3 to 12.2 mm and E4 conservatively to 12.7 mm.

| Surfaces | Element |  Before |   After | Evidence                                                            |
| -------- | ------- | ------: | ------: | ------------------------------------------------------------------- |
| 4 / 5    | E3      | 16.5 mm | 12.2 mm | Figure 1 RIM and ENV agree at 12.2 mm                               |
| 6 / 7    | E4      | 15.8 mm | 12.7 mm | Figure 1 optical envelope; RIM under-reads the thin edge at 10.9 mm |

The pupil-calibrated stop remains 8.31053 mm. The revised prescription passes the surface validator and image-circle floor.

### Glass classification

- The patent publishes nd/νd coordinates but no vendor names or line indices. The ten elements therefore retain their six-digit patent coordinates and now identify the compatible catalog material used as each spectral proxy.
- Existing compatible full-coefficient catalog curves cover all 10/10 elements without relaxing the Δn ±0.003 / Δν ±2 guards; production suppliers remain explicitly unspecified.
- No new catalog row is supported or needed, and the lens has no coordinate mismatch.

### Identity and metadata

- Verified the display name `CANON RF 600mm f/11 IS STM` against Canon's product identity and the repository's spacing policy.
- Verified the front-page inventors 横谷 真樹 and 井野 友裕 and stored the family-publication romanizations Maki Yokoya and Tomohiro Ino.
- Normalized the front diffractive pair's diagram/cemented label to `DOE`, matching the patent terminology while retaining Canon's product-level `DO` wording in the analysis sources.
- Verified the Figure 1 focus arrow and paragraph 0036 against the runtime motion profile: only L2 moves, by -14.94 mm objectward; the lens has no zoom travel.

## 2026-10-30 — Reused August 20 source coverage; current runtime/metadata followup

- Reuse completed original source/figure/identity/glass coverage dated 2026-08-20, commit `cb6f5967935a`. No original PDF reopened, native resolution newly asserted, or fresh source-review count. Current canonical optics equal the reviewed prescription after only `focus.published` provenance. Later `source.example` metadata identifies the same Example 1. The prior 600 dpi figure description remains historical; it is not recast as a new native-resolution check.
- Sole data-field change: `catalog.focalLengthMm.design` 581.639114 → printed 581.65 mm, as already quoted by the completed source analysis from Numerical Example 1, PDF p. 9. Exact one-field text/tree proof and hashes are in scratch. All optics, clear caps, ten media, DOE terms, gap controls and iris rule unchanged. Ten same qualified curves; zero numeric line/partial overrides or APD claims.
- Retain the constrained infinity d5/d7 = 18.44/20.00 versus printed 16.25/22.19, with constant 38.44 sum and source near 3.50/34.94. These are disclosed model assumptions, not a uniquely verified source-table correction. Current EFL/BF 581.644302131/138.057271688 mm and iris 8.310620974 mm are distinguished from old calculations. Canonical ingest normalizes the old explicit STO.sd into the current derived rule; this is not raw stop-record identity.
- Standard surface/image-circle and one-station aperture/field checks pass. Working calls: 5/65 trace (infinity 11.390019988), 60 vignette beginning focus 0.078125 at S5 and later S4. Retained source-reviewed E3 clear 12.2 is not enlarged. Collimated control-grid axis/full-format counts are infinity 193/145, near 169/140 of 193; near-axis loss is at S4. This is collimated geometry, separate from finite illumination.
- DOE-aware matrices agree with public system matrix plus image transfer within 1.3e-11 over all 65 controls. Explicit Gaussian finite object-plane inverse solving gives 192/192 physically clear chiefs at 64 positive controls × three actual image targets. Pupils: 31,078 pass / 5,082 clip / 896 no-bracket continuations / zero unaimed. Source-near axis/half/full 169/169/141 of 193, with 0/0/14 unresolved marginal continuations. No failed marginal trace is presented as proof no physical ray exists.
- Near Gaussian total 4.494832203 m, magnification −0.141987065 versus display 4.5 m; display-plane residual −0.104002200 mm, infinity residual −0.002728312. Largest relative distance-label difference 3.763000% at focus 0.015625 (277.162559 m / 288 m). Source stations and illustrative intervals remain separate.
- Derived source-summary angle 2.130678368°: ordinary/vector chief both converge at infinity, |Y| 21.880490 mm. At near control ordinary gives |Y| 24.955335 mm and bounding-vector fails to bracket; the latter is an explicit diagnostic limit, not source-field validation. Finite edge results use actual inverse-solved 21.64 mm targets.
- All 65 states / 650 SVG element paths finite, closed, connected, zero hidden trim. Current SVG inspection checks path integrity/group movement; source comparison is reused at its actual date. No inferred cuts. Public analysis contains all scope/production qualifications.
