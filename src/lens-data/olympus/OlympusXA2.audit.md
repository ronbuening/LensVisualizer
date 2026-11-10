# Olympus XA2 source and model audit

Whole US 4,303,313 A Embodiment 1, conditional 0.35 scaling. Exact baseline 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2253 real commits. Original patent table and front matter visually inspected. Original custody is referenced in SOURCE_HANDOFF.txt, not reuploaded.

## Source invariants

Eight radii, seven internal intervals and four n/v pairs reproduce the whole embodiment. Splitting d6 around the inferred midpoint stop preserves the total. No plane, radii, glass, gaps or coefficients were optimized. Native image coordinate remains the derived collimated 34.8457532438685 mm. No exact factory prescription or finite motion is asserted.

## Explicit qualifications

Assumed helium-d convention is not a source-proven reference wavelength. All four materials remain unmatched with estimated dispersion. Source-plane softness and strong vignetting are retained. Numerical convergence does not imply good optical performance. The source31.5-degree field diagnostic uses an in-memory44.1mm reference circle only; authored full-frame metadata remains unchanged. Actual full-frame corner31.086275 degrees was separately evaluated. Best-axial shift -0.2958726867mm is diagnostic-only and is not authored.

Manufacturer instructions recommend close-zone coverage1–1.5m. Minimum recommended1m is catalog-only; service1.2m and2.7m are selector stations, not measured optical finite states. Runtime1e9m is a required schema sentinel and generic fallback label, not a validated endpoint. No variable gaps.

## Validation history

Initial static-only checkpoint v1 omitted required layout.yScFill, caught by native H0 ingest. H0 failure retained. Non-optical layout.yScFill0.35 completes the schema. Native geometry, iris clearance, zero trim and official aperture pass. All source-angle and catalog-corner reference MTF fields converge through sampled40lp/mm at grids<=128, with poor contrast at the unchanged plane. Mapping fraction>1 failure was preserved and resolved with diagnostic-only normalization, not a catalog change.

## Integration status

The standalone validation record lists the exact regression/build gates and outcomes. Local visible registration is not publication. No commit, push, deployment or public sharing performed. Guarded installer must refuse wrong baseline, shallow/2253-history mismatch, dirty target and collisions; no overwrite or deletion of existing files.
