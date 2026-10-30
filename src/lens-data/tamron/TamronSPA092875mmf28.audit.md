# Audit Log — Tamron SP AF 28-75mm f/2.8 XR Di LD Aspherical [IF] MACRO (A09)

Patent: US 7,075,731 B1, Example 1, Figure 1

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

## 2026-10-30 — Original figure, concave ends and fresh glass

- Reopened original `patents/US7075731.pdf`, sole exemplary prescription: Fig.1 PDF2; complete table, aspheres and explicit d-line587.6nm definition PDF9/printedcols7–8. Actual publication is B1; the old audit's B2 heading was a typo. Original SHA-256: `3d2de746f46d14176d8d2a8185d5a0c1b84a9d8c742e26bfb396f886cf60d485`.
- All20 modeled source pairs checked, including four0.2mm1.53610/41.2 layers. Existing disclosed source Abbe errata146.6→46.6 atS8 and141.2→41.2 atS34 remain; no new R/d/coordinate/control/tolerance correction. Sixteen compatible coefficient curves resolve; four layers remain unresolved. Their resin chemistry/cure is unconfirmed, so labels/types now qualify modeled resin. No source partial/C/F/g values are printed.
- Fig.1 draws H1 broader than the previous10.7mm body, with an independent rear shoulder. Source body is roughly15–16mm by the source axial ruler/front reference; the adopted14mm is a constrained inference rather than a literal dimension. S7A/S8 continuous caps now share14; S9 has clear10.6 and outer14. Its first10.2 cap failed the full inferred-trim guard (reach10.502192 plus0.05 required), so the adopted cap is10.6. A second independent S14 air-face land keeps11.5 clear and reaches12.8, with its shared S15 grown continuously to12.8. No opaque land is placed on a cemented surface.
- Strict equivalent numeric cuts, after all edits, pass the full wide-open sweep: S9 reach10.502192mm at wide/close43.1362°, S14 reach10.518478mm at tele/infinity9.5045°, both with0.05mm required margin and no untraced field. No source-depth exemption. Numerical layer/neighbor constraints prevent claiming the full schematic body.
- Canonical/surface, centered-format chief and aperture checks pass at all three zoom stations. Nine actual SVG states show finite paths and zero hidden trim; sampled stop lattice retains8414, loses0 and gains380 rays, not flux. Source close-focus reconstruction and computed rear image spacing remain qualified.
