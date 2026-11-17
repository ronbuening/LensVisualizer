# Bennett US2231699 Figure 1 audit — 2026-11-16

Freshly transcribed and checked in a pinned-main isolated copy (3fd318c3e82cdbc3e5d3a1ed7bd5abbf4e99bfc2). No integration, publication, commit or deployment. Parent asked for a hidden patent-only build; 1939 filing / 1941 grant is explicit. GitHub compare against main during this pass returned identical (ahead0/behind0). Existing notes had identified the source, but no previous build was found in the checked main or note search.

## Literal source

Original PDF drawing 1 and specification Figure 1 table visually checked. R=[29.18,-47.45,flat,-16.45,52.50,-33.58]; glass thickness=[7.3,2.1,2.9,5.5]; air gap=39.5. nD/V=[1.498/67.0,1.664/35.9,1.516/64.1,1.639/55.5]. No silent data correction. Source certificate changes prose 1 to .1, not these numbers. Figure 2 is not mixed into this file.

## Inferences

- Stop halfway through air gap: 19.75 mm from rear of front doublet. Patent does not depict/locate the diaphragm.
- Front/rear rim semi-diameters13.5/10 mm are heuristic, not measured from a dimensioned drawing. No factory mount/image-format fields.
- Native paraxial-derived iris from design f/3.8:8.236726769 mm. Axial pupil edges clip at the iris, so no fully transmitted-f/3.8 claim.
- Image BFD33.452186952 mm calculated at D, not specified or empirically optimized.
- Glass dispersion is native Abbe estimate, not named vendor equivalence. V=67 low-dispersion glass has no partial dispersion; C/d/F MTF blocked by native support guard.

## Fresh scoped evidence

- Independent first-order matrix EFL100.058343719 / BFD33.452186952; determinant unity. Independent exact spherical near-axis rays converge to this BFD. Reproduce with `python independent.py`.
- Native `validateCanonicalLens(ingestLens(data))` returns no errors. Render cap trim count above0.25mm is zero. Sampled iris clearances19.75 mm before and17.53934 mm after.
- 36 meridional samples (nine pupil fractions at four fields): axial7/9,5deg7/9,10deg3/9,default estimated12.55047deg1/9 unvignetted. Retain clipping and outer noBracket failures in validation.json; no ray-performance pass claimed beyond central90% axial sample.
- Focused file TypeScript check, ESLint and Prettier passed. No per-lens test added to corpus.

## Pending integration work

Full-app/corpus checks, browser/compiled-viewer QA, dimensional production identity and more source evidence for stop/rims. No verified Drive backup in this worker; root handles upload/readback before clearing copies. Hidden qualified reference, not production readiness.
