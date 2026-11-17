# Scoped audit2026-11-16

# Leitz / Max Berek US1899934 Figure1
Hidden patent-only reference, six elements / four groups, f/2. No Summar, Hektor or other exact retail/factory match claimed. Separate from held US1939098. Figure2 f/1.3 is NOT built or counted. Primary https://patents.google.com/patent/US1899934A/en ; original https://patentimages.storage.googleapis.com/pdfs/US1899934.pdf . Source PDF2 numerical table and PDF1 drawing visually inspected in this build. German filing1931-06-06, US1932-07-20, grant1933-03-07. Handwritten GB381135 on scan is a candidate alias only, not independently confirmed equivalence.

## Literal data and estimated dimensions
R=[51.193,148.90,132,-153.6,-57.46,-30.55,39.40,120.90,33.558,-63.51]. Axial glass/air after=[9.07,1,8.06,5.72,9.07,5.04,7.56,4.03,12.09]. The5.04 value is visually confirmed. Glass nD/V=[1.6185/60.5,1.6185/60.5,1.6890/31.2,1.6034/38,1.6034/38,1.6580/51.4]. R6 and R9 are cemented interfaces. No rescaling or silent source repair.

EFL99.99753316176 and computed BFD69.65283913736 in native millimetre interpretation. Near100 normalization is an inference, not an expressly printed focal value or model-to-product scaling. Literal printed aperture f/2 retained.

No numerical iris location or clear rims recovered. Estimated iris6.5mm behindR7 /1.06mm beforeR8 within unchanged7.56gap; midpoint3.78 trial intersected adjacent glass at full iris stroke and was rejected. Semi-diameters R1…R10=[26,26,25,25,23,23,23,21.5,21.5,21.5]mm. Rear22mm trial gave−0.060mm edge glass and was rejected;21.5mm clears. All are modeling estimates, not factory metrology. No gap/sag overrides. Native physical iris radius17.96978294mm, entrance radius24.99938329mm; minimum full-stroke iris clearances2.16346961mm before /1.06mm after.

## Fresh scoped checks
Independent reduced-angle matrix and vector-Snell spherical trace reproduce first-order values and seven native image intercepts within1.5e−14mm. Native final-file canonical/geometry/render/iris tests pass;181 axial samples±90% pupil pass. Native endpoints±100% clip at the modeled iris, so no full nominal pupil guarantee. Native sparse field counts0/5/10/20/default27.274degrees=7/9,7/9,6/9,4/9,2/9. The default viewer field is NOT source or verified coverage. TypeScript, eslint and prettier scoped checks pass. MTF reference/CdF support checked only, no converged MTF or measured-production comparison; secondary spectrum estimated from nD/V. Full-app/current-main integration and compiled viewer/browser QA pending. Infinity-only convention, computed paraxial plane, no invented close-focus system.

## Dedup and reproducibility
Boundary-aware exact US1899934/1,899,934 and candidate GB381135/381,135 search across pinned current-main full source and shared *.data.ts returns no implemented model. Bare substrings produced unrelated Olympus numerical tails; these are false positives, not matches. Pinned main3fd318c3e82cdbc3e5d3a1ed7bd5abbf4e99bfc2 last parent-verified current. Family-equivalent completeness remains unproven; do not promote handwritten alias. No prior known qualified package for this patent. No commit, publish, deploy, upload or handoff edit.

Run generate.py and independent.py; place validate-berek.mjs at matching checkout root, run node --import ./scripts/ts-js-specifier-hook-register.mjs validate-berek.mjs. Dense final-probe.mjs contains original absolute workspace module paths; adapt on relocation. Runtime/toolchain intentionally excluded. Native scripts use existing unchanged engine. Isolated tsc invocation is --noEmit --strict --skipLibCheck --target ES2023 --module ESNext --moduleResolution bundler src/lens-data/leitz/Berek1933Patent.data.ts.
