# Richter US1892162 three-lens photographic objective, 1932

Hidden patent-only reference: NOT a confirmed production lens. 3 elements / 3 groups, source 100 mm f/4.5. Author Robert Richter; assignee Carl Zeiss Jena from original patent heading, not modern database assignee normalization. Numerical source is sole example.

Primary: https://patentimages.storage.googleapis.com/bd/a7/2a/37490e0040406b/US1892162.pdf
Record: https://patents.google.com/patent/US1892162A/en

Visually checked signed radii, thicknesses, nD and V on both plate and text-page scans. OCR mistakes not used. Literal R = +23.25, infinity, -78.6, +22.85, +205, -59.96 mm; thickness/air = 4.5,3.7,1.3,10,2.5 mm. nD = 1.6227/1.6128/1.6423; V=56.9/37/48. Source diameters23.4/20.8/20.0mm retained, not invented clear-aperture guarantees. Supported uppercase D reference589.2938nm. Approximate V-based dispersion, no exact glass match.

Fresh independent ABCD gives EFL100.000439907571mm and BFD82.234027373462mm; source EFL difference+0.000440%. Literal optics unchanged. Source gives no iris coordinate: iris estimated midway in10mm final air gap,5mm behindR4. Infinity-only computed BFD, no close-focus model. Patent claims approximately focal-length picture diagonal; this is not demonstrated modern full-field performance.

Fresh narrow checks: native schema/canonical ingestion, render geometry, positive iris clearance3.11847mm before/5mm after, and central90% axial pupil trace pass without gap-sag overrides. Independent spherical Snell agrees with native sampled axial intercepts within1e-8mm. Axial201-ray sweep:4 outer-edge rays clipped; 10degree sample3/9 clipped,20degree sample5/9 clipped. Keep source rims; these are documented aperture/vignetting limitations, not numerical failures silently repaired. Native MTF support probe only: reference/CdF available; NOT converged MTF validation or measured production performance. C/d/F uses estimated dispersion and design plane. Full-app regression/current-main integration/browser/compiled-viewer QA remains integration work. tsc, ESLint and prettier pass for authored data file.

Dedup against3400 retained source files (parent current-main pin3fd318c3e82cdbc3e5d3a1ed7bd5abbf4e99bfc2) found neither number/application nor joint prescription fingerprint. Compared with28 delivered historical configurations and two held. Google record lists only US family member; foreign alias completeness is not proved.

Reproduce: against pinned source engine with installed dependencies, run python preflight.py and generate.py; copy validate.mjs into engine root, run node --import ./scripts/ts-js-specifier-hook-register.mjs validate.mjs; then python independent.py. Generator expects engine/src/lens-data/zeiss and compatible source tree. No commit, publication, upload or deployment performed.
