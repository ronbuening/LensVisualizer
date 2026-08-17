# Audit Log — Tamron SP AF 28-75mm f/2.8 XR Di LD Aspherical [IF] MACRO (A09)

Patent: US 7,075,731 B2, Example 1, Figure 1

## 2026-08-17 — Patent-figure, display-name, movement, and glass review

### Semi-diameters

- Figure 1 was rendered from the local patent at 300 dpi. Its annotated group brackets were excluded from the outline judgment.
- The modeled front scale and rear-group taper agree with the physical outlines within the action threshold. No SD change was justified, and the image-circle audit is clean.

### Display name and glass

- The normalized `SP AF 28-75mm F/2.8 XR Di LD Aspherical [IF] MACRO` designation was already correct.
- Sixteen of 20 physical media resolve to verified curves. The four gaps are unidentified hybrid/aspheric layers, so no optical-glass catalog entries were fabricated.

### Movement and diagram labels

- Recomputed the three zoom stations and constrained close-focus states. G2 alone moves objectward toward G1 for closer focus, and the zoom gaps remain correctly ordered from wide to telephoto.
- Replaced long sign/focus prose with the patent's concise `G1`-`G4` labels.
- Added physical lens labels around all four hybrid layers (`4r`, `10r`, `15r`, and `16r`) so the SVG counts the source's 16 physical pieces instead of presenting 20 media IDs as lens numbers.

### Verification

- `npm run audit:image-circle -- src/lens-data/tamron/TamronSPA092875mmf28.data.ts` — zero undersized surfaces.
- `npm run generate:glass-reports` — passed.
