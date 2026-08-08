# Audit Log — NIKON ZOOM-NIKKOR AUTO 80-200mm f/4.5

Patent: US 3,615,125, Example 1 / Figure 1.

## 2026-07-26 — Figure-matched SDs, glass coverage, identity, and focus review

### Patent and identity evidence

- Reviewed the local publication `patents/US3615125.pdf`.
- Measured the optical section in Figure 1 on PDF page 1.
- Nikon's official historical title is **ZOOM-NIKKOR Auto 80-200mm f/4.5**. The existing display name already matched
  the project's normalized capitalization and required no change.

### Semi-diameter audit

The patent has no clear-aperture table. Figure measurements were checked at all three modeled zoom states. The front
group, compensator, `STO`, and surfaces 8–9 were retained where the existing silhouette or curvature clearance already
constrained them.

| Surfaces | Before `sd` (mm) | After `sd` (mm) | Disposition |
|---|---|---|---|
| 1–5 | 26.0, 25.5, 24.0, 24.0, 24.0 | unchanged | Already matched the 52 mm front envelope. |
| 6–10 | 13.5 throughout | 16.0, 16.0, 13.5, 13.5, 16.0 | Matched the variator envelope while preserving the validator-safe 8–9 gap. |
| 11–13 | 13.5 throughout | unchanged | Already matched the compensator silhouette. |
| 14–18 | 14.0, 13.8, 13.0, 13.0, 13.0 | 13.5 throughout | Normalized the relay-front envelope to Figure 1. |
| 19–25 | 12.5, 12.5, 13.5, 13.5, 13.5, 14.0, 14.0 | 15.2 throughout | Matched the larger relay-rear silhouette. |

### Glass audit

| Element | Before | After | Disposition |
|---|---|---|---|
| L14 | `699300 - SF15 class` | `SF15 (Sumita coefficient-backed equivalent), 699300` | Added the exact-code SF15 polynomial from Sumita's official all-glass catalog. |
| L15 | `702411 - BASF7 class` | `BASF7 (Sumita coefficient-backed equivalent), 702411` | Added the exact-code BASF7 polynomial from the same catalog. |

Code `614563` (L2) remains unresolved because no defensible public coefficient set was found. The
new equivalents are wavelength-tracing matches, not claims about Nikon's historical melt supplier.

### Focus audit

US 3,615,125 publishes infinity-focus zoom kinematics but no close-focus prescription, moving focus group, or mechanical
constraint that distinguishes unit, front-group, internal, or floating focus. The production 1.8 m endpoint remains
catalog metadata and close focus remains unmodeled, as disclosed in the data and analysis.

### Verification

- `npm run audit:surface -- src/lens-data/nikon/NikonAutoZoomNikkor80200mmf45.data.ts` — passed.
- `npm test -- elementRenderDiagnostics.test.ts` — passed, including hidden-trim and cross-gap checks.
- `npm run generate:glass-reports` — passed; coverage increased from 11/15 to 13/15 trusted and Sellmeier.
- `npm run typecheck`, `npm run format:check`, and `npm run lint` — passed; lint reports three unrelated existing
  warnings and no errors.
- `npm run test` — passed, 207 files / 2440 tests.
- `npm run build` — passed, including prerender and sitemap generation for 947 routes.

## 2026-07-29 — S-APL1 catalog backfill

- Replaced L5's provisional vendor-unresolved `517696` wording with `S-APL1 (OHARA; 517696)`.
- The official OHARA 2026-07-01 all-products catalog supplies formula-3 coefficients and the exact 1.517277 / 69.563 coordinate.
- Synchronized the element analysis and glass table; code `614563` remains the only unresolved row from the prior glass audit.

## 2026-08-07 — BACD6 catalog recovery

- Visually rechecked Example 1 in local `patents/US3615125.pdf`; L2 remains `1.61375 / 56.3`, rounded code 614563.
- HOYA's 2026-07-07 catalog publishes BACD6 at `1.613753 / 56.377856`, inside both runtime tolerances, with a vendor polynomial.
- Relabeled L2 as a BACD6 catalog equivalent while leaving Nikon's production supplier unspecified. No geometry changed.
