## Patent Reference and Design Identification

**Patent:** [JP S60-181715 A](https://patents.google.com/patent/JPS60181715A/en), Example 1.

**Inventor:** 小山武久 (Takehisa Koyama, romanization).

**Assignee:** Sigma Corporation.

**Filed:** 1984-02-29. **Published:** 1985-09-17.

This hidden research model transcribes whole Example 1 of [JP S60-181715 A](https://patents.google.com/patent/JPS60181715A/en), a retrofocus wide-angle design by 小山武久 (Takehisa Koyama, romanization), assigned to Sigma Corporation. Filed 1984-02-29, published 1985-09-17. The source table is PDF3/printed75 and its section is Figure 1 on PDF4/printed76. The d-line definition is explicit on PDF2/printed74.

The association with the 1985 Sigma NON VIGNETTING, later H.L. Wide 28mm F2.8, is probable and nonunique. Sigma's maker history connects the names and unusual high peripheral illumination design purpose. The maker booklet lists 8 elements/7 groups, 75° and 22 cm minimum focus, but supplies no independent optical section. The WIDEMAX section in the maker history belongs to another lens. This is not a proven factory Example 1, nor a claim to reproduce 95% illumination marketing.

E1 is the first complete representative, selected without fitting to nominal 28 mm or ranking examples by focal length. E2 is retained separately for comparison, never mixed into E1. The table prints neither absolute focal length nor units, terminal BFL or object conjugate. Treating the literal lengths as mm and evaluating collimated light are disclosed product-consistent modeling assumptions. Under them, two independent matrix formulations yield EFL 28.337698345 mm, BFL 38.851409062 mm and image plane 87.421409062 mm. The image plane is derived, not printed. Source full field is 75.2°, distinct from retail 75°.

## Optical Structure

Eight spherical elements in seven air-separated groups include a rear cemented L5–L6 doublet. Fifteen refracting surfaces and the row-9 flat AIR reference plane make sixteen source rows. That plane is the stop at z = 28.60 mm, not a glass plate. Source distances on either side are both 2.00 mm. No glass, gap or curvature is modified. No rear cover plate is invented.

## Element-by-Element Analysis

The element focal lengths shown by the model are isolated-in-air thick-lens diagnostics, not individual contributions in the assembled system, especially at the cemented junction.

- L1: positive meniscus; nd = 1.77250, νd = 49.6. Unmatched glass. Weak positive front element.
- L2: negative meniscus; nd = 1.51742, νd = 52.2. Unmatched glass. Contributes the front negative retrofocus section.
- L3: negative meniscus; nd = 1.51680, νd = 64.2. Unmatched glass. Continues the front divergent section.
- L4: positive meniscus; nd = 1.78472, νd = 25.7. Unmatched glass. Thick positive element immediately ahead of the stop.
- L5: biconvex positive; nd = 1.78590, νd = 43.9. Unmatched glass. First member of the rear doublet.
- L6: biconcave negative; nd = 1.76182, νd = 26.6. Unmatched glass. Cemented to L5 at source R11.
- L7: positive meniscus; nd = 1.77250, νd = 49.6. Unmatched glass. Rear convergent member.
- L8: biconvex positive; nd = 1.77250, νd = 49.6. Unmatched glass. Final positive element.

These are qualitative interpretations of geometry and first-order isolated power, not recovered claims about each element's aberration correction.

## Glass Identification and Selection

The source's nd and νd values are retained with explicit d-line reference. No catalog glass identification is asserted; partial dispersion, full spectral curves, coatings and transmission are missing. Chromatic estimates from software defaults or surrogate catalog curves would not establish the real production lens's dispersion or polychromatic MTF. No copied catalog nC, nF, ng or anomalous-dispersion values are supplied.

## Focusing Mechanism

Only a static infinity interpretation is authored. No moving gaps or finite-focus prescription is recovered. The 22 cm maker specification is catalog context only. A required schema close-distance scalar of 1e9 m is an infinity-like sentinel, not a validated finite station; generic UI focus labels or fallback motion must not be interpreted as factory mechanics.

## Apertures and Validation Scope

Clear rims and physical diaphragm diameter are not printed. Figure 1 shows a broad front element, narrower front menisci and stop region, and a widening rear group. Authored clear semi-diameters are conservative engineering hypotheses informed by that envelope and bounded by exact spherical static geometry, not pixel-calibrated factory apertures. The row-specific values and full static checks accompany the rebuild. At the historical static stage, the native aperture solver had not yet inferred the paraxial f/2.8 stop. The subsequent native pilot results below supersede that pending status; no physical diaphragm radius is claimed as a source value.

No gap-sag or rim-angle override is authored. Static checks do not establish exact-ray aperture clearance, field coverage, vignetting, image quality, physical diaphragm size, 95% illumination or finite focus. Native pilot results are recorded below. Broadband runs, full suite and build remain pending. This hidden checkpoint is not ready for installation or delivery as a validated lens.

## Sources

- [Primary patent](https://patents.google.com/patent/JPS60181715A/en), full five-page PDF preserved with SHA256 24ddbf9915198e4693b825fff7bde343859183a97a0dd3d91ab1b9bc3e1f7554.
- [Sigma lens booklet](https://www.cameramanuals.org/booklets/sigma_lens_booklet.pdf), PDF38/printed36.
- [Sigma maker history](https://www.sigma-global.com/en/our-community/sein/ohsone/28mm_1/).
- [Original private evidence archive](https://drive.google.com/file/d/1VsR81pB_JsY8Fq4rnLM0W6lxyLWOar3v/view), retained unchanged; SHA256 d9c705686965bf8d67748b02e7b8373ef1d85b9ef9e3974fb91b441953b7899d.

## Bounded Native Pilot

The unchanged E1 data passed native geometry and showed zero hidden trim on all eight elements. The inferred paraxial f/2.8 stop radius is 6.895843529 mm, with 1.9762 mm and 2.0000 mm clearance to its neighboring surfaces. The official aperture census traced f/2.799999997, limited by STO, and the sampled full on-axis pupil passed. These are computational results under engineered clear-rim assumptions, not measurements of the physical lens.

At the unchanged derived collimated plane 87.421409062 mm, reference d-line geometric and diffraction MTF converge through 40 lp/mm at 0°, 18.8° and source 37.6°, with grids 64/64/128. The distinct declared full-frame format corner (rounded taxonomy radius 21.65 mm) is 37.761115482°: diffraction converges through 40 lp/mm, but geometric sampling at grid 128 converges only through 30 lp/mm and remains unconverged at 40 (maximum delta 0.01509). That failure is retained; the field is not silently clamped to the patent angle.

The 16×16 source-angle pupil diagnostic has 140 valid and 68 blocked samples, with zero failed or unaimed samples. This is neither a calibrated illumination fraction nor evidence for the maker's 95% illumination claim. Native spectral support permits normal-line estimates for all eight nd/νd-only glasses; no broadband run or production-dispersion validation has been performed. No source, clear-rim, plane, or focus change was made after the static checkpoint to obtain these results. Full tests, lint/build and clean install verification remain pending.

Field-label correction: the repository taxonomy diagonal is rounded to43.3 mm, so radius21.65 mm is the declared-format test. The exact36×24 mm physical corner radius hypot(18,12)=21.633307652784mm was subsequently tested in the additive v3 check below. The earlier declared-corner results remain unchanged.

## Exact Physical Format Corner: Additive v3

The distinct exact 36×24 mm physical corner radius 21.633307652784 mm maps to 37.741276019°; the actual sampled angle is 37.741275892°. At the unchanged derived plane and inferred rims, geometric reference MTF at grid128 converges through30 lp/mm but remains unconverged at40 (maximum delta0.0124233121). Diffraction reference MTF at grid128 converges through40 lp/mm (maximum delta0.0031091969). Frequencies were0/10/20/30/40 lp/mm, with the same criteria as the prior declared-format check. This is a distinct previously unrun field, not a retry of the failed declared-corner40 result. No source, rim, plane or criterion was changed. Hidden visibility is retained. Full tests/build/broadband and installation validation remain pending.
