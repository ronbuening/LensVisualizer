# SamyangXP35mmf12 audit

## 2026-09-09 — patent rims, metadata, and dispersion

Source: exact local `patents/KR102077265B1.pdf, PDF page 20, Figure 5, Example 3`. Inspected at 600 dpi; axial screening scale approximately 74.38 µm/pixel. Optical curve endpoints, not mechanical flanges or leader lines, determine the comparison. Native prescription scale and the calibrated stop are retained.

| Surface      | Before (mm)        | After (mm)         | Evidence                                                              |
| ------------ | ------------------ | ------------------ | --------------------------------------------------------------------- |
| 13 / 14 / 15 | 23.5 / 20.6 / 20.0 | 26.8 / 26.8 / 26.0 | Central cemented doublet rim about 27 mm; preserve slight rear taper. |

L9 uses E-FD8 and L12 L-LAH85V, improving coverage from 10/12 to 12/12. Smaller rear radii at 21/22A/23A introduce additional default off-axis clipping, so 21.3/22.0/22.5 mm are retained. The 22A polynomial turns near 19.85 mm; reducing it below that point also loses the existing sampled fan clearance. This source/model limitation is recorded rather than changing coefficients or stop size. Existing aspheric departure statements therefore remain valid.

Display name reviewed against the authored manufacturer references and the existing Samyang naming convention: retained the correct AF/XP, focal length, f-number, and FE designation. Canonicalized decimal-aperture keys and patent/inventor metadata without renaming the marketed product.

Validation: `audit:surface` and `audit:image-circle` pass. The project's SVG shape builder was rendered and visually compared with the patent; no surface trimming occurs at infinity. For changed prescriptions, temporary exact-ray comparisons sampled published focus rows plus 0.25/0.5/0.75, on-axis pupil fractions ±1/±0.75/0 and ±0.60 half-field pupil fractions ±0.75/±0.375/0. The retained changes introduce no additional clipping relative to the supplied data. Existing full-edge clipping is not claimed to be repaired. No per-lens snapshot test was retained.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent 23A gap with the patent's physical rear stack (`patents/KR102077265B1.pdf`, PDF pp. 14–15,
  Tables 7 and 9, confirmed on the rendered page): D3 = 35.985595 / 42.958030 mm, plate 2.500 mm, nd 1.51680, νd 64.20,
  D4 = 0.528568 / 0.562472 mm (infinity / close). One `gapAfterMm` = 0.528568 is kept and the +0.033904 mm close-state
  D4 change is carried in the 23A close gap (42.991934 mm), so the printed 23A→IMG path is unchanged. `D5` stays
  unpropagated as before. Glass N-BK7 (catalog-compatible with 1.51680 / 64.20).
- Paraxial check against the previous data: EFL identical and defocus unchanged at both focus keyframes (worst
  difference 6e-15 mm). Physical track grows by 2.5(1 − 1/1.5168) = 0.851793 mm; `closeFocusM` moves from 0.339890654
  to 0.340742447 m so the patent D0 = 175.678043 mm is preserved against the physical image plane.

## 2026-10-30 — Reused source coverage, label/runtime follow-up

September 9 original shape/glass and September 23 physical rear-plate reviews above are reused with actual dates preserved; no fresh PDF inspection occurs. Root canonical proof against 84580191e excludes only later source.example/focus.published provenance. Starting raw SHA256 09d4da7be5cfe89f9c7ca99b1bbccd73b18e012366d55acb78c5123c329c5c77; label-only candidate SHA256 f85f919bbe3fa0cb61457e187ff50687cd73d5f314bfaa34c825eccb5fa642ee. Exactly L7.glass and rearPlates[0].glass qualify chemistry/vendor; all other parsed fields and all 13 curve IDs remain equal. No source/geometry/numeric/control change and no extra fresh count.

Current nominal 1.254 iris 17.217014505 mm retains S17A clipping: 65/65 wide working rays vignetted; the 8 menu presets (begin 1.4) trace 520/520 working results. audit:aperture reports inferred S17A 14.9→15.3 mm (+2.7%), not full-iris clearance. 65 collimated axial grids transmit 10,985/12,545; actual Gaussian grids 2,925/3,185 axial and 195/195 chiefs clear, 0 aim failures. Retain these source/model/asphere limits without cap/iris tuning.

Explicit published D0=175.678043 mm near plane is separate from Gaussian near 175.652936 mm. Source physical object-to-image 340.742447 mm versus Gaussian 340.717340 mm remains qualified. Inverse actual sensor heights 0/10.825/21.65 mm give 3/3 clear chiefs, pupil 169/162/106 of 193, 113 clips/29 failed corner intersections or TIR/0 unaimed. Gaussian field-grid fractions are paraxial object probes, not those inverse sensor corners; intermediate states are illustrative.

Source infinity 32.027° vector chief reaches 21.703893 mm clear; centered generic field 100%. All 780 SVG paths at 65 focus states finite/closed/connected, 0 hidden trim. Surface/image-circle/field audits pass; the aperture deficit remains explicit. Qualified source fidelity, runtime clearance and production correlation are separate conclusions.

## 2026-10-31 — Scoped positive catalog-source follow-up

Preserve actual September 9 shape/glass and September 23 rear-plate review dates. Narrow source material confirmation only: KR102077265B1 Example 3 PDF page 14 Table 7, S22/L12 prints 1.85343/40.54; ¶0085 page 11 uses nd/vd notation and ¶0094 page 12 gives C656.2725/d587.5618/F486.1327 nm ray-fan references. Vector table/text were rendered and read directly. No L12 C/F/g indices or partial value is published or added.

Existing700-entry scan confirms no closer already-present row than L-LAH85V. Its evaluated residuals are nd +0.00057016/νd −0.161632. New D-ZLAF85LS-25 in the [official CDGM September 2026 AGF](https://www.cdgmgd.com/downloadFile.htm?uid=3f4d14c82d2c11eeb5ac000c29c8de8c), row 11573, improves them to +0.00000996/+0.017917; PgF 0.568644 has no source comparison. The literal formula 2 coefficients use λµm, n²=1+ΣBiλ²/(λ²−Ci), range 0.365–2.325 µm, and pass the unchanged catalog validator. Source GC `anneal rate:25℃/h` describes only the catalog state. A qualified proxy label does not claim that anneal schedule or the historical supplier/melt/chemistry for Samyang.

Only L12's glass label and explicit d-reference annotations change in data. All numeric prescription/material/spectral values, APD tags, rims, aspheres, iris/focus controls and rear-plate fields remain identical; all other curve choices stay fixed. The label now selects the closer state-specific curve, with authored d preserved and only estimated L12 C/F/g changed. Existing aperture/asphere/finite/off-axis limitations and the prior complete-review count remain unchanged. No duplicate generic glass or per-lens spectral override is introduced.
