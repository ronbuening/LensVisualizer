# Nikon AF-S NIKKOR 180-400mm f/4E TC1.4 FL ED VR Audit

Patent: WO 2019/131993 A1, Example 2 / Figure 10 / Tables 12–14

## 2026-08-03 - Integration, Figure, and Glass Audit

### Prescription and Display Name

- Checked the new prescription and analysis against the retained local patent, including Example 2, Figure 10, and
  Tables 12–14.
- Confirmed the display name against Nikon's product page. `NIKON` remains the repository's maker prefix and
  `AF-S NIKKOR 180-400mm f/4E TC1.4 FL ED VR` is Nikon's product spelling, so no display-name correction was needed.

### Semi-Diameters

- Rendered PDF page 91 at 300 dpi, rotated it to the optical-axis orientation, and audited the Figure 10 optical section.
- The active figure and modeled prescription have a median figure/data scale ratio of 0.999.
- Refined the clearly oversized L14/L15 and L16/L17 outlines:

| Surfaces | Before (mm) | After (mm) |
|---|---:|---:|
| 7 | 42.0 | 35.6 |
| 8–9 | 35.71 | 33.4 |
| 11 | 37.0 | 31.1 |
| 12 | 36.5 | 31.1 |
| 13 | 34.0 | 31.1 |

- The revised values retain the same sampled on-axis ray-fan pass pattern across all three zoom positions at infinity
  and reconstructed close focus.
- `audit:image-circle` reports no undersized surfaces, and `audit:surface` passes the asphere-domain, edge,
  slope, and cross-gap checks.

### Glass Classification and Dispersion

| Element | Classification | Disposition |
|---|---|---|
| L17 | `J-KZFH4 (Hikari)` | Added the exact first-party Nikon/Hikari power-series row to the runtime catalog. |
| L44 | `J-SFH1 catalog equivalent` | Compatible existing public curve; production supplier remains unspecified. |
| L45 | `S-LAM2 catalog equivalent` | Near-exact existing public curve; production supplier remains unspecified. |
| L410 | `FDS24 (HOYA)` | Exact existing catalog coordinate and coefficient row. |

- Strict and trusted chromatic coverage rise from 16/26 to 20/26 elements.
- The six remaining code-only or unmatched classes lack a defensible first-party coefficient match and remain on the
  explicit Abbe fallback.
- The analysis glass table and affected element narratives were synchronized with the data file.

### Verification

- `npm run test -- dispersion.test.ts`
- `npm run generate:glass-reports`
- Full repository gates are recorded in the integration commit.
