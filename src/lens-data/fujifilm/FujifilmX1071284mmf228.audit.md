# Audit Log — FUJIFILM SUPER EBC FUJINON 7.1-28.4mm f/2-2.8 (Fujifilm X10)

Patent: US 2014/0133036 A1, Example 1 (Figure 1; wide position)

## 2026-07-24 — Patent-figure, glass, and metadata audit

The wide-position Figure 1 section was registered to the prescription's glass vertex span. The original G1 blank was visibly oversized relative to both the patent drawing and the rest of the zoom:

| Surfaces | Before `sd` | After `sd` | Figure/data rim ratio after |
|---|---:|---:|---:|
| S1 (L11 front) | 12.3 | 8.8 | 0.970 |
| S2 (cemented interface) | 11.8 | 8.6 | 0.993 |
| S3 (L12 rear) | 11.2 | 8.5 | 0.994 |

The final surface validator reports no edge-thickness, rim-slope, gap-intrusion, asphere-domain, or ray-containment errors. The image-circle proxy is not applicable because the project taxonomy has no 2/3-inch sensor-format id; the exact-trace containment checks remain clean.

The display name was corrected to the product branding order `FUJIFILM SUPER EBC FUJINON 7.1-28.4mm f/2-2.8 (Fujifilm X10)`.

### Glass disposition

Nine of eleven elements already resolve to coefficient-backed catalog positions. Generic “catalog unresolved” labels were replaced with the actual matches: FDS18, S-LAH55, S-LAH58, S-BAL42, N-SF66, S-TIM35, and S-FSL5, alongside the existing FCD515 and S-FPL51 assignments. These are catalog-coordinate equivalents, not claims about Fujifilm's production melt supplier. L31 and L34 remain unmatched at `nd = 1.803603`, `νd = 40.28`.

No radius, thickness, index, asphere coefficient, zoom spacing, focus state, stop size, element count, or group count was changed.

## 2026-09-23 — Plane-parallel member PP modeled as `rearPlates`

- Replaced the air-equivalent rear gap at surface 21 with the physical rear stack from US 2014/0133036 A1 as read on
  Google Patents (no local PDF): Table 1 surfaces 22–23 give PP t = 2.14 mm, nd 1.516798, νd 64.20, and Table 3 gives
  DD21 = 4.10 / 5.55 / 4.65 mm and DD23 = 0.61 / 0.61 / 0.63 mm. `rearPlates` holds one fixed trailing gap (0.61 mm),
  so the extra 0.02 mm at tele is carried in DD21 (stored 4.10 / 5.55 / 4.67 mm); the physical surface-21-to-image
  distance is unchanged and the plate sits 0.02 mm farther back at tele. Glass label N-BK7 (catalog-compatible with
  1.516798 / 64.20; the patent names no glass).
- Paraxial check against the previous data: EFL identical and defocus unchanged at all three zoom states (the legacy
  fold used the exact DD21 + 2.14/1.516798 + DD23). Physical track grows by 0.729 mm, the plate's t(1 − 1/n).
