# Audit Log - SIGMA 30mm f/1.4 DC HSM | Art

Patent: JP 2014-142520 A, Numerical Example 1 / FIG. 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2014142520A.pdf`. Numerical Example 1 is illustrated by FIG. 1 on PDF page 18.
- The patent does not publish clear-aperture semi-diameters. The data file's SDs remain inferred from paraxial on-axis marginal rays plus full-field chief rays, then checked for edge thickness, SD ratios, rim limits, and signed cross-gap sag clearance.
- FIG. 1 is faint in the local PDF, but it shows G1 and G2 as broadly similar-height groups with a smaller internal stop. Current SDs match that silhouette: front and rear element surfaces sit mostly between 14.0 and 16.0 mm, with an 11.4428784521 mm stop.
- No SD values changed.

## 2026-10-30 — Fresh original-source shape and glass reinspection

- Original `patents/JP2014142520A.pdf`: Example1 media PDF8–9; d-line587.56nm convention ¶0046/PDF7; focus/aspheres PDF9; Fig.1/PDF18 rendered at600dpi and native. All18 refracting faces, the full cemented interface and both aspheres were inspected. PDF figure strokes are missing; downloading the SAME original publication yields the identical PDF hash `e102687aba320312cf5a38425b2c9f036c9907a764c1131a3fc3c4cc2f9d8f1f`, not a different embodiment.
- Supplementary exact-publication [native Fig.1 PNG](https://patentimages.storage.googleapis.com/27/8e/6a/2fe7894dddf48a/2014142520-4.png) recovers the dotted curves (685×378px). Matching Fig.2 infinity F1.46/ω25.32 and Fig.4 close F1.52/ω25.05 identify Example1. Native vertices x≈71–449,66.601mm →5.68px/mm. Enlargements add no native precision. Original-image URLs/hashes and PDF comparison are recorded in `/tmp/ftb3/source-supplements.json`; localPDF remains the numerical source.
- Source front outer≈15.5mm: grow continuous S1 cap15→15.5 and outer S2 to15.5 with an inferred depth4.82/cap14.492197. Measured S2 q≈0.86 (edge88nativepx, ±0.0211); the literal smaller cap fails. The adopted cap is outward for full beams: reach14.439436 +0.05 <14.492197, land1.007803mm.
- S10 measured q≈0.873 (cap half-span65.5/edge75nativepx, ±0.0250); adopt depth1.70/cap12.184178 on retained outer14. Full reach11.957946 +0.05 clears it. S12 measured q≈0.787 (cap66.5/edge84.5nativepx, ±0.0212); adopt depth4.48/cap11.849148, outer15; reach11.441040 +0.05 clears. S13's continuous cemented interface grows14.2→15 to complete the source common-height doublet with S14's retained15; no opaque interface land or detached material. Both new lands exceed0.1mm.
- Reject the S4 land: source q≈0.87±0.0243 (edge77nativepx); after the final front opening beams require cap≥14.406592. The first0.01mm passing depth3.14 gives cap14.413947 on outer14.5, leaving only0.086053mm. No arbitrary outer growth to manufacture a land. Other surfaces, both15.5mm asphere caps and all their source coefficients retained; weak/continuous ends do not independently support another land.
- Fresh glass: all9 source nd/νd pairs exact and all9 resolve to compatible current coefficient curves. No source C/F/g, θgF, ΔPgF or anomalous-material condition is printed. No spectral override/APD badge invented. Glass annotations and public prose now qualify supplier/melt/molding-grade uncertainty; L4 resolves to E-FD4 despite the E-FD4L reference label. Canonical Hiroki Uehara spelling synchronized in subtitle/public analysis. No source R/d, asphere coefficients, glass coordinates, stop, focus/aperture controls, tolerances or certifications changed.
- Finite guard supplement: temporary copies test source600mm image-plane state plus the existing derived300mm endpoint (not source-published); no authored finite certification added. Full inferred-cut guard passes with both, stepped focus and all fields. Source600mm keyframe and derived production-MFD limitation remain explicit.
- Validation: surface/full cuts, image-circle0undersized, ≥99%field, aperture within3%/no rim limiter; catalogue consistency and3existing glass suites/94tests pass. Actual9state SVGs viewed: connected doublet and lands, max automatic trim0. Same65×65 pupil disk ×5source-field fractions ×3focus states:38,417retained,0lost,600gained,9,118blocked both; samples, not flux. Source/control invariants pass. Public prose synchronized; scratch evidence only `/tmp/ftb3/`.
