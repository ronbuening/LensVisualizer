# Minolta AF 100–400 APO model audit

Date: 2026-11-10. Engine baseline: retained main 420b475. Scope: one V2 zoom, no source retuning, no external publication.

## Admission and duplicate scope

Probable named-family product correlation is supported by maker provenance, named 14/11 product baseline, 3+2+6+3 mechanical topology, two front high-Abbe elements, focal/aperture program and broad maker section. The source is not proven factory-exact. The original hold and all uncertainty remain disclosed. No Minolta 100–400 .data.ts was found among surviving local recovery builds or retained current main. Prior radius fingerprint screening covered 1095 baseline files, 1051 literal-radius-parsable files, with no 25-radius hit within 0.5%; expression-valued radii were not evaluated. This is bounded duplicate screening, not exhaustive private completion inventory.

## Source integrity

JPH0886961A Example 2, original PDF pages 3–4, supplies 25 radii, 14 d-line glass pairs and three zoom configurations. The complete original's SHA-256 is e467fc7f8745f9374d2d7a3942134a0ff502c3637ef6b84a3ed862e777f9eecd. It is numerically identical to JPH0886962A Example 3 / US5633759A Example 2/Table 2. Cemented interfaces are source surfaces 2, 17 and 24. Source image height is 21.6 mm. No source scaling, substitutions, aspheres, rear plates or unprinted optical elements.

Source discrepancies remain unresolved: printed wide BF 37.697 versus scalar/native 37.749942357 mm, and printed summed tracks differ by 0.001–0.002 mm from summed displayed intervals. The terminal image interval is unprinted; model BF is derived. Both are recorded in source.errata, header and analysis.

## Assumptions

- Stop: 2.000 mm before source surface 10, attached to Gr3. Split d9 exactly; no borrowed iris from a neighboring patent. Radius from source nominal f-number, never an invented published diameter.
- Rims: fixed, inferred component semi-diameters 34 / 34 / 22 / 22 / 18 / 17 / 16 / 15 / 15 / 16 / 13.5 mm. Shared cemented boundaries retained. No per-lens geometry override, rim cut or extension.
- Cam: 33 controls, only source indices 0/16/32 published. Interpolate image-anchored Gr1/Gr2/Gr4 positions separately across W–M and M–T; solve Gr3 for paraxial focus. This removes artificial Gr2 reversals found in the rejected raw-gap/BF-refocus interpolation. No claim of recovered factory cam.
- Focus: Gr1-only objectward motion to 2 m, independently paraxially solved at each control. Nine focus controls per zoom row resolve infinity and eight inferred finite distances. No finite source rows, publishedFocus or conjugates are invented. Retail 0.25× remains context, not model certification.
- Glass: unmatched d-line index/Abbe pairs. No anomalous partial-dispersion, fluorite or exact material claims.

## Bounded native results

- Ingest/canonical geometry: zero errors.
- Aperture: 33/33 controls within 3% of stated f-number, no rim/trace/iris failures.
- Grid: 129 zoom samples × 17 focus coordinates; zero hidden render trim and minimum sampled iris air clearance 1.38089 mm.
- Maximum sampled infinity interpolation defocus: 0.049645 mm. Finite interpolation defocus: 0.120120 mm. Maximum finite distance-label discrepancy: 1.4721%. Maximum 2 m endpoint-distance residual: 0.00099952 m.
- Direct source contract: 125 numerical assertions pass. Source rows are only zoom controls 0/16/32; all finite controls are unpublished. Exact finite-object traces at 16 reconstructed states pass 25/25 axial pupil samples, without certification.
- Twelve exact optical samples include the source rows and halfway-between-control states at zoomT 0.015625, 0.515625 and 0.984375. All produce finite spherical-aberration results and converged chief rays at 21.6 mm image height.
- Twenty-five pupil samples at on-axis/half-field pass throughout the 12 states. Full-field survival is 18–25/25; ordinary edge clipping retained at long focal lengths.
- Native rendered silhouettes inspected. Mechanical units and movement directions agree with the modeled source interpretation; Gr3F/Gr3R do not receive independent brackets.
- The target .data.ts passes a standalone strict TypeScript check, file-scoped ESLint and explicit Prettier validation.
- Focus labels do not certify finite MTF. Full-suite integration, catalog metadata generation and user delivery are outside this per-model check.

## Evidence artifacts

The accompanying local validation folder retains control_points.json, authored_model.json, native_check.json/log, aperture_final.json/log, native_silhouettes.svg/png, the derivation script and bounded native check scripts. Source custody remains with the original recovery package. These are review artifacts, not extra catalog models.

## Deployment validation (2026-11-10)

Independent check against the JP scan (pp. 3–4) and US 5,633,759 Table 2 (p. 21): 25 R, 21 fixed d, 3 variable gaps × 3
states, 14 nd/νd pairs and three cemented pairs; no mismatches, and the two tables agree. EFL 102.55 / 200.04 / 390.08,
F 4.60 / 6.30 / 6.62 and Σd reproduce; slider defocus ≤ 0.050 mm. The wide BF difference (derived 37.750 vs printed LB
37.697) survives a single-slip search; the LB column is not a strict paraxial value in this patent (Examples 1 and 3 differ
by −1.59 and −0.019), so the derived BF stays. Example 2 is the only 14/11 example; its two νd 83.58 elements match
Minolta's two AD elements; association strong.

Applied: patent number to house form `JP H08-086961 A`; PDFs filed as `JPH08086961A.pdf` and `US5633759A.pdf`.

Open: public wording (subtitle "probable … family correlation", specs, header), private-archive links and engine-hash
text in the analysis; optional maker minimum aperture f/32.
