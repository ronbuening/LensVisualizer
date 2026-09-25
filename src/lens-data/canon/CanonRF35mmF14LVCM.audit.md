# Audit Log - CANON RF 35mm f/1.4 L VCM

Patent: US 2024/0302626 A1, Numerical Example 2 / Figure 4

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 4, Figure 4, at 600 dpi with `audit:patent-figure`; the calibrated figure scale was 34.13 µm/px.
- The reliable optical-rim rows have a median figure/data ratio of 1.043. Every element is within 13.4% of the figure and the small offset is effectively uniform.
- Retained all surface and stop semi-diameters because no element exceeds the strong figure-evidence threshold. `audit:image-circle` reports zero undersized surfaces and `audit:surface` reports no geometry violations.

### Glass classification

- Confirmed all 14 elements retain coordinate-compatible catalog proxies and coefficient-backed dispersion.
- The patent does not identify production suppliers, so the proxy labels remain qualified and no new catalog row is justified.

### Identity and metadata

- Verified the display name `CANON RF 35mm f/1.4 L VCM` against Canon's `RF35mm F1.4 L VCM` product name and repository spacing conventions.
- Normalized the structured assignee to the repository-wide `Canon Inc.` spelling.

## 2026-08-20 - Screenshot, movement, and chromatic follow-up

- Rechecked Figure 4 at 600 dpi after reviewing the site screenshot. The median figure/data ratio remains 1.043 and all clean comparisons remain within 13.4%, so no additional SD adjustment was justified.
- Labeled patent units B2 and B4 as objectward focus units, matching the published direction. Example 2 supplies no numerical focus travel, so focus animation remains intentionally unavailable; the prime also exposes no zoom travel.
- Confirmed 14/14 strict Sellmeier coverage and zero catalog mismatches. Added inferred special-element tags to L8 and L10, matching Canon's two-UD production count without converting the coordinate proxies into supplier identities.

## 2026-09-25 — MTF image-plane census

Visually inspected `patents/US20240302626A1.pdf`, ¶0078–0083 and Numerical Example 2 Tables 3–4 on PDF pp. 15–17. All 25 powered radii, 14 nd/νd pairs, spacings and three K/A4–A14 sets match. Used Table 4’s higher-precision base radii 32.17448, 89.50277 and −56.11754 as already authored. Inactive flare cuts S10 and S19 combine air-only gaps to 3.800 and 0.758 mm. No scale, plate or published numerical close-focus row.

Source BF=15.444 is the final S28 distance; ¶0079 explicitly defines BF to the paraxial image plane in air-equivalent length. Independent trace gives EFL 33.942091880 versus 34.0, BFL 15.360904237 versus 15.444, and optical surface track 103.102 versus printed 103.101 mm. No single supported emendation reconciles the discrepancies.

For the under-0.1 mm best-focus check, reference-index geometric axial MTF (32 grid, 812 rays, 10/20/40 lp/mm) prefers −0.092714 mm shift, score 0.232316→0.991051. This reinforces that the authored plane is not the modeled axial optimum; it cannot establish the designer’s full-field merit function. The source’s explicit paraxial definition rules out asserting designer best focus as the cause.

**Cause/action:** source paraxial inconsistency; retain values. Offset **−0.083096 → −0.083096 mm**; Section E row deleted, no numerical change/changelog.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
