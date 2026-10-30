# Audit Log - Nikon AI Nikkor 28mm f/2.8S

Patent: US 5,917,663, Example 2

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed the semi-diameter reference-pass notes for this lens (the reference-pass guide has since been folded into `agent_docs/patent-figure-sd-audit-procedure.md`) and the local source mapping to US 5,917,663 Example 2.
- This lens was part of the successful reference pass: the rear group after the stop had already been narrowed so the stored clear apertures match the patent diagram and keep the CRC interval discussion honest.
- Current SDs preserve that refined shape: broad retrofocus front elements, a smaller stop, and a deliberately narrowed post-stop/rear group.
- No new SD values changed in this pass. L7/L8 glass remains explicitly documented as unresolved J-LAK02-class fallback material, independent of this SD audit.

## 2026-08-21 — Hikari catalog follow-up

- Added Hikari's first-party J-LAK02 curve and normalized L7/L8 to explicit J-LAK02 catalog-equivalent labels.
- The patent coordinates are unchanged and the production supplier remains unspecified.

## 2026-10-30 — Fresh shape and glass reinspection

The 2026-10-30 review directly inspected local `US5917663.pdf`: Example 2 Figure 3 on PDF page 4 at 600 dpi and its native 300 dpi raster, and Table 2 plus the d/g-line definitions on page 12. The r1–r17 vertex span gives approximately 22.8 native pixels per lens mm. The front common rim is corrected from the earlier 24.5 mm estimate to the figure's approximately 20.6 mm. L2's continuous front cap grows from 13.5 to the measured 17.3 mm body rim; its rear S4 retains clear SD 12.6 and gains a land to 17.3. Native S4 q≈0.77 ±0.005 (edge≈394 pixels); adopted q=0.728 is constrained by the unchanged 4.0 mm gap: the current 90% sag guard bounds the cap at 12.627835 mm, while a source-ratio trial at 13.2 fails with 4.19 mm intrusion versus 3.600 mm allowed. The larger outer rim leaves that clear-cap constraint intact. This source-backed front-height restoration also clears the former S3 format-corner clipping (13.7884 mm chief-ray height versus old SD13.5), raising corner coverage from 97.49% to 100%.

S6 receives an inferred concave-end cut at depth 5.31 mm, cap radius11.510191 and outer rim 13.2. Native q≈0.87 ±0.006 (edge≈302 pixels), adopted0.872. Every other face was checked. At S13/S14 the existing1.0 mm air gap bounds a common continuous cap at6.647698 mm under the unchanged 0.90 guard; no separately resolved land there justifies inventing an extension. All remaining radii, spacings, stop and approximate unit-extension controls are retained. This later stabilization patent remains a qualified production correlation, not the original 1981 lens patent.

All eight source nd/νd/ng triples are exact and preserved. The available N-BAF10, N-BK7 (twice), J-BASF6, S-BSM16, SF4 and J-LAK02 (twice) curves are explicitly qualified spectral proxies. The source publishes no C/F indices or measured partial-dispersion ratio. Current runtime resolution uses the catalog curves when only ng is supplied; ng-only does not override the traced g channel. The anchored catalog g residuals range from−0.00005342 to +0.00008856 against the source ng values. No C/F values or dPgF are synthesized to force that override, and no APD or supplier identity is inferred from the coordinates.

Surface/circle checks and the complete inferred-cut beam guard pass; the format corner reaches 100% and the axial aperture is iris-limited at f/2.89. Nine actual SVG states have eight finite paths and zero trim. At the approximate close conjugate D0=103.8544 mm the full 6.724495 mm iris passes 25/25 aimed axial samples. Source/catalog checks and shared glass suites pass (94 tests). The full adaptive beam search across focus in 0.05 steps and through field edges finds maximum S1/S2 reaches of 19.448601/18.453389 mm with all other new geometry and the old 24.5 mm front rim; those reaches are identical with the adopted 20.6 mm rim, leaving 1.151399/2.146611 mm clearance. The pre-review baseline reaches only 16.301121/15.109976 mm because its smaller S3 rim limits the beams. A separate grid of 21 focus values × 14 fields through 37.4383° × 97 pupil samples traces 28,518 identical physical rays against the pre-review baseline and final candidate: 22,113 transmitted rays retained, zero lost, 1,953 gained and 4,452 stopped in both. These are sample counts, not flux percentages.
