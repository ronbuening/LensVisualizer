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

## Deployment validation (2026-11-10)

Independent check against the patent scan (no text layer; Embodiment 1 on p. 7, claim 2 on p. 8): all 8 R, 7 d and
4 nd/νd values equal the printed values ×0.35; no mismatches. EFL 35.008 (patent f = 100 → 100.02 at patent scale), F/3.5,
conditional values reproduce (f/f123 1.589 vs printed 1.590). Olympus's XA2 service manual (D.Zuiko 35 mm 1:3.5, 4/4, front-cell
focus) supports the attribution; E1's scaled d6 (5.77 mm) is the closest of the five embodiments to the manual's 5.754 mm.

Applied: `catalog.lensMounts: ["fixed-lens-camera"]` (missing).

Open: L4 rims (s7/s8 sd 5) are drawn smaller than in the patent figure and the service diagram (≈6.2/6.6 passes
`audit:surface`); field coverage 80 % because L1 rear / L2 front cross at r ≈ 5.7 mm (as on the live Olympus XA entry); all
four glasses match catalog rows exactly (S-LAL10, S-TIH11, S-BAH27, S-LAH51) but are labelled `Unmatched`; public wording
(subtitle, specs, `focus.description`) and the package-process prose in this log and the analysis need a cleanup pass.
