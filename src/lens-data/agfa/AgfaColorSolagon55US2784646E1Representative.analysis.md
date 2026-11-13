# Agfa Color-Solagon 55 mm f/2: qualified patent-example reconstruction

DRAFT pending final independent review and backup. Not deployed or factory-validated.

US2784646 Example1 is modeled literally at55 times normalized scale. Explicit d-line587.6nm indices and Abbe values are retained without catalog substitution. Six elements/four components. The secondary historian associates the numerically identical reproduced DE1063824 table with Color-Solagon55/2; the original maker sales brochure confirms55/2 and six elements. This is a qualified named-family bridge, not proof of the retail numerical prescription, exact scale or complete German patent-family metadata. Existing50/2 uses a different patent. Bounded historical searches found no prior55 delivery, not exhaustive historical novelty.

EFL54.9985181967mm, calculated BFL39.8881649722mm, f/2. No optical fitting. Source supplies no cap dimensions or stop split. Initial body-common caps20/12.5/11.5/14.5mm were selected on a0.5mm geometry grid before ray tests at default90% limits. Deployment validation raises only S3/S4 from 12.5 to 12.9 mm, keeping both faces of L2 square; all other inferred rims remain as delivered. The initial vertex-midpoint iris failed full-cap clearance and is preserved. The alternative iris is the midpoint of the feasible full-cap interval,8.376374101204mm afterS5, leaving4.803825898796mm beforeS6. Independent clearance0.660540553mm each side does not establish manufactured shutter/mounting clearance.

## Performance limitations
Before the deployment rim correction, at the unchanged calculated image plane,812 equal-area aimed stop-lattice samples gave:
- Axis:772 image-plane arrivals,40 physical clips,0 failures.4.9261% sampled axial clipping.
-12.5degrees:598 arrivals,160 clips,54 noBracket failures.
-25degrees:294 arrivals,376 clips,142 noBracket failures.36.2069% arrivals, not certified50-degree coverage.

After the S3/S4 correction, the same 812-sample lattice gives 812 axial arrivals with 0 clips or failures; at 12.5°, 628 arrivals/142 clips/42 noBracket failures; at 25°, 322 arrivals/358 clips/132 noBracket failures. The 25° arrival fraction rises from 36.2069% to 39.6552%. No axial rim limit remains at f/2. The current aperture-miss classifier separately identifies all 132 remaining 25° noBracket results as blocked by the inferred caps; factory clear apertures remain unknown.

Uniform stop-lattice survival is not an entrance-pupil or energy-throughput estimate; pupil mapping Jacobians are not integrated. NoBracket means failed intersection solving, not proven physical obstruction. Failed/blocked samples are retained, not removed as outliers. Before the rim correction, RMS radii of surviving arrivals were0.028630/0.030991/0.043562mm; these are not whole-pupil image quality or MTF. Sparse26-ray checks missed the dense axial clipping. No retuning, refocus, measured illumination, measured glass curves, full spectral validation, near-focus reconstruction or exact factory performance is claimed.

Native construction, isolated TypeScript, source parity and independent body/air/full-cap iris checks are scoped pre-integration checks. Current-main/full-corpus app/build/browser/rendering/MTF checks remain integration-side and unperformed here. Hidden infinity-only representative; no release/deployment.
