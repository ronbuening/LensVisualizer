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
