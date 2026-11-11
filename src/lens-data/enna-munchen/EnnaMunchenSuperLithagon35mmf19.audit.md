# Bounded audit v2, 2026-11-11

Frozen engine e3434b282271fb499a0c1865061026f56b7202e8, existing toolchain only. No repository edits, dependency installation or heavyweight build.

Fresh checks: exact17R uniform scaling and16physical intervals (split recombined); elements/nV identical to v1; sourceF2, hidden flag; native buildLens geometry without overrides; small2D pupil tracing at0/16/24/32deg. Scripts and raw outputs included. The triad is an isolated hidden draft, not a deliverable. V1's stop claim withdrawn; v1 retained for audit.

Pending: independent review of inferred optical rim usability and stop uncertainty; required corpus/type/lint/test/build/rendered-viewer gates; aberration/MTF and robust field qualification. Severe edge-pupil loss remains and is not silently cured. No full validation, factory prescription, finite focus, archive completion or deployment claim.

Root-level handoff import normalized to ../types/lensDataV2.js per current handoff and template. Fresh transpile syntax and native buildLens tested from actual exported data; ROOT_HANDOFF_IMPORT_RECEIPT.json records scope/results. No optics or caps changed.

## Deployment validation (2026-11-11)

- Source: US 3,036,499 A (Google Patents PDF), kept as `patents/US3036499A.pdf`. All 17 R, 16 d and 9 nd/νd were read
  from the 300 dpi page image (the text layer drops "+" signs): an exact 0.35× transcription, no mismatches. EFL
  35.001 mm (100.003 at patent scale); design f/2.0, retail f/1.9 kept as `fNumber.marketing`.
- Index line: d (helium) confirmed; SF11, LaK9 and SK10 give the printed nd at 587.6 nm. DE 1,102,435 B (same family)
  shows R1 −250 / R3 −270 in Google's OCR; those are OCR sign errors (EFL 89.4 / 101.6), the US signs give 100.003.
- Product: Super-Lithagon 35mm f/1.9 (1958), 9 elements / 8 groups, Exakta and M42. The patent figure matches the
  element count, the cemented L7/L8 pair, plane R11 and R14 and the stop between L5 and L6. No public maker diagram found.
- Integration fix: `catalog.lensMounts` ["exakta", "m42"].
- Open for the cleanup pass: public wording (header, subtitle, specs, glass/type strings, focus description, analysis
  process prose and archive.org link), `EnnaMunchen…` file prefix; R1 is drawn near 19.5 mm against `sd` 17.4 (SD pass).
