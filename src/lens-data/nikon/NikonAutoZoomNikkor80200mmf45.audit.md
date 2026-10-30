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

## 2026-07-29 — S-APL1 catalog backfill

- Replaced L5's provisional vendor-unresolved `517696` wording with `S-APL1 (OHARA; 517696)`.
- The official OHARA 2026-07-01 all-products catalog supplies formula-3 coefficients and the exact 1.517277 / 69.563 coordinate.
- Synchronized the element analysis and glass table; code `614563` remains the only unresolved row from the prior glass audit.

## 2026-08-07 — BACD6 catalog recovery

- Visually rechecked Example 1 in local `patents/US3615125.pdf`; L2 remains `1.61375 / 56.3`, rounded code 614563.
- HOYA's 2026-07-07 catalog publishes BACD6 at `1.613753 / 56.377856`, inside both runtime tolerances, with a vendor polynomial.
- Relabeled L2 as a BACD6 catalog equivalent while leaving Nikon's production supplier unspecified. No geometry changed.

## 2026-10-30 — Fresh source outline and glass review

- Directly inspected original `patents/US3615125.pdf`: Figure 1 on PDF p. 1 at 600 dpi, all fifteen Example 1 media and explicit d-line definitions on p. 4, matching f/4.5 plots on p. 1, and the claim repetition on pp. 5–6. The previously documented R5/R15 source-normalization choices are confirmed and retained; no powered radius/gap is changed. All source nd/νd and infinity-only zoom/focus limitations remain intact.
- Inspected every air-facing and cemented face. Source first-to-last vertex span gives approximately 7.2 native px/mm (300 dpi scan, 600 dpi inspection); relative front and relay heights independently agree. Restore continuous S2 25.5→26.0 mm; cemented front-doublet S3/S4/S5 24.0→25.0 mm; relay-rear S19–S25 15.2→16.0 mm. The larger continuous caps preserve connected compound outlines. No separate concave end land is resolved, so no inferred cut or opaque replacement is authored.
- Full source-height S8/S9 16.0 mm trial fails the unchanged gap: 5.56 mm combined sag versus 3.960 mm allowed across 4.400 mm. Those caps remain 13.5 mm. Source schematic spacing is not forced into overlapping glass, and no source flags or clearance tolerances are changed. Other source-visible caps remain as qualified inferred apertures.
- All fifteen d-line pairs retain current compatible coefficient coverage. Replaced misleading generic unresolved/class labels with qualified names for the actual existing resolved curves, including SF56A for L11; all selected coefficients are unchanged. N-SF8 νd 31.31 versus source 31.1, BACD6 56.377856 versus 56.3 and LLF1 45.75 versus 45.9 remain nonidentical proxies. Corrected the stale public BACD6 unresolved paragraph. S-APL1 coordinate compatibility does not establish production identity or APD; no numerical partial dispersion or extra line anchors are published/added.
- Focused surface/image-circle checks and all three f/4.5 aperture stations pass; catalog consistency passes. Field coverage remains limited: approximately 83%/84%/73% of target image height wide/mid/tele, versus 83%/81%/70% before. Public text records the current chief-ray diagnostic and removes obsolete extreme-field throughput percentages. Nine actual SVG zoom/focus states were viewed with no automatic rim trim. No unpublished finite-focus mechanism is invented.
