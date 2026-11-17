# Booth patent-only monochromatic reconstruction audit

Date: 2026-11-16. Private handoff scope only. No publication, commit or deployment.

## Source and identity

US1421156A original scanned PDF, SHA256 `9fd30e0029723146f18a74a8647c0ec55a93e35a8c48d9c48632a8c9a6837da7`. Visual transcription from PDF page 2, not OCR. F=6¼; scale ×16 gives nominal100mm. Unnumbered sole example. Inventor Lionel Barton Booth; no organizational assignee established. Manufacturer is null; hidden file. No Pentac claim.

Dedup: original research searched pinned main entire src including analysis/catalog bodies for patent numbers (formatted and compact), Pentac and Kinic. Booth number absent; Pentac only incidental in Heliar prose. Private-note literal query for1421156 and Pentac returned no files. Historical alias/delivery completeness beyond that search is not asserted.

## Fresh checks

Baseline engine/source: main `3fd318c3e82cdbc3e5d3a1ed7bd5abbf4e99bfc2`, extracted into isolated booth_build. Dependencies reused read-only from an earlier installed checkout; no shared source changed. Final file has no synthetic Abbe or external glass proxy. Source sodiumD convention is native.

1. `evidence/final-check.mjs`: literal radii/diameters, hidden diagnostic status, canonical V2 validator, paraxial EFL agreement, ten exact native axial rays, expected spectral blocker. PASS.
2. `evidence/independent.py`: independent paraxial matrix, exact spherical intersections/vector Snell rays, positive dense-sampled edge/gap clearance; independent/native axial image intercept differences below1e-8mm. PASS.
3. `evidence/compare.mjs`: two patent-permitted stop-gap midpoints, Gaussian and optimized image planes,5field angles,709 pupil samples per field. Both geometrically valid. Rear midpoint selected; off-axis sample clipping disclosed, all physical apertures unchanged.
4. Native `scripts/audit-aperture.mjs`: final file, one station within3% of f3, no rim/trace/iris failure. PASS.
5. Targeted TypeScript check: final data file against pinned types with `tsc --noEmit --skipLibCheck --target ES2022 --module nodenext --moduleResolution nodenext`. PASS, empty log. Not full-app typecheck.

## Explicit model assumptions and limitations

- Native D-only constant-index diagnostic, no polychromatic performance claim. Original nGprime retained separately, not authored as ng or an Abbe fit. Native spectralMTF blocker remains intentional.
- Rear stop midpoint is inferred, not specified; source permits either gap. The f3 clear aperture is not misused as physical iris diameter.
- Gaussian BFD83.72402687989012mm and selected best-focus BFD83.23666687989012mm are distinct computed values. No glass/surface adjustment.
-20degree full field is diagnostic only, not a marketed coverage/format claim.
- Sampled rear-stop acceptance at10degree field685/709; no claim of full unvignetted coverage. Sampling statistics are not measured brightness.
- Fixed infinity model, no finite-focus travel, no mount or camera format invented.
- Full browser/compiled viewer QA, full aggregate regression, current integration-branch compatibility beyond the pinned-main isolated import/types/validator remain pending. Hidden qualified reconstruction, not an ordinary finished color lens.

## Evidence directory

`source.json`, original PDF, `stop-comparison.json`, `final-check.json`, `independent.json`, aperture report, source/validation scripts and run instructions. Earlier exploratory scripts are excluded from the handoff to prevent stale-failure logs being mistaken for final evidence.
