# Agfa Color-Solagon 55 mm f/2: qualified patent-example reconstruction

DRAFT pending final independent review and backup. Not deployed or factory-validated.

US2784646 Example1 is modeled literally at55 times normalized scale. Explicit d-line587.6nm indices and Abbe values are retained without catalog substitution. Six elements/four components. The secondary historian associates the numerically identical reproduced DE1063824 table with Color-Solagon55/2; the original maker sales brochure confirms55/2 and six elements. This is a qualified named-family bridge, not proof of the retail numerical prescription, exact scale or complete German patent-family metadata. Existing50/2 uses a different patent. Bounded historical searches found no prior55 delivery, not exhaustive historical novelty.

EFL54.9985181967mm, calculated BFL39.8881649722mm, f/2. No optical fitting. Source supplies no cap dimensions or stop split. Body-common caps20/12.5/11.5/14.5mm were selected on a0.5mm geometry grid before ray tests at default90% limits. The initial vertex-midpoint iris failed full-cap clearance and is preserved. The alternative iris is the midpoint of the feasible full-cap interval,8.376374101204mm afterS5, leaving4.803825898796mm beforeS6. Independent clearance0.660540553mm each side does not establish manufactured shutter/mounting clearance.

## Performance limitations
At the unchanged calculated image plane,812 equal-area aimed stop-lattice samples give:
- Axis:772 image-plane arrivals,40 physical clips,0 failures.4.9261% sampled axial clipping.
-12.5degrees:598 arrivals,160 clips,54 noBracket failures.
-25degrees:294 arrivals,376 clips,142 noBracket failures.36.2069% arrivals, not certified50-degree coverage.

Uniform stop-lattice survival is not an entrance-pupil or energy-throughput estimate; pupil mapping Jacobians are not integrated. NoBracket means failed intersection solving, not proven physical obstruction. Failed/blocked samples are retained, not removed as outliers. RMS radii of surviving arrivals are0.028630/0.030991/0.043562mm; these are not whole-pupil image quality or MTF. Sparse26-ray checks missed the dense axial clipping. No retuning, refocus, measured illumination, measured glass curves, full spectral validation, near-focus reconstruction or exact factory performance is claimed.

Native construction, isolated TypeScript, source parity and independent body/air/full-cap iris checks are scoped pre-integration checks. Current-main/full-corpus app/build/browser/rendering/MTF checks remain integration-side and unperformed here. Hidden infinity-only representative; no release/deployment.

## Reproduction
Run prepare.py, native.mjs, field.mjs and diagnostics.mjs against recovered LensVisualizer4caca439fdd7186caf6cf458b1c56e6e114b752b; sources and scripts are retained. Independent reviews separate failed midpoint from accepted geometry alternative. Source backup: https://drive.google.com/file/d/1EEgGxcxg2sDp4_VvPBCZgaW7Z1gr49Zf/view . Final data differs from pilot only in name/key; source optics unchanged.
