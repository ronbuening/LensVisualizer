# Audit Log - Sigma 105 mm F1.4 DG HSM | Art

Patent: JP 2019-144477 A, Numerical Example 1

## 2026-05-31 - Sigma last-commit patent glass audit

### Patent evidence

- Reviewed ignored local file `patents/JP2019144477A.pdf`.
- Example 1 table lists 17 glass elements with `nd`, `vd`, and `PgF`; the LPF/cover plate row remains excluded by project convention.
- Figure 1 shows a very large fixed G1 collector, a smaller moving G2, and a compact final asphere behind the rear doublets.

### Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L10 / S17 | `glass` | `PCD40 (Hoya, SLD class)` | `PCD40 (HOYA, SLD class)` | Added coefficient-backed HOYA `PCD40` catalog entry for patent nd/vd = 1.61997 / 63.88. |
| L17 / S29A | `glass` | `M-TAFD305 class (Hoya, soft match; patent nd=1.84915)` | unchanged label, now catalog-backed soft match | Added HOYA `M-TAFD305`; catalog nd = 1.85135 remains a soft class match to patent nd = 1.84915. |

### Spectral corrections

- Converted every `dPgF` field from the patent's condition-expression delta convention to the project engine convention, `PgF - (0.6438 - 0.001682 * vd)`.
- Updated each `apdNote` to cite the patent `PgF` and the project-normal `dPgF` value.

### Cross-section review

| Surface | Field | Before | After | Justification |
|---|---|---:|---:|---|
| 29A | `sd` | 19.5 | 18.4 | Patent Figure 1 shows the final asphere slightly smaller than the preceding rear doublet cluster. |
| 30A | `sd` | 19.5 | 18.4 | Same element as S29A; preserves a matched rendered aperture. |

### Analysis sync

- Added a note that the analysis uses the patent's anomalous-dispersion convention, while data-file `dPgF` uses the project normal-line convention consumed by the engine.
- Updated the L17 uncertainty note to reflect that `M-TAFD305` is now present in the project catalog but remains a soft match.

## 2026-05-31 - APD display-key correction

### Patent evidence

- Rechecked ignored local file `patents/JP2019144477A.pdf`.
- The patent publishes `PgF` for every element, but its anomalous-dispersion conditions single out special correction roles rather than making every glass a diagram-highlight APD glass.

### Display-key corrections

- Retained `dPgF` on all 17 elements for chromatic tracing.
- Kept `apd: "patent"` only on the visually keyed special-dispersion elements: FLD L2, L3, L5; condition-8/9 high-index APD flint L9; and SLD L10, L11.
- Changed L1, L4, L6, L7, L8, L12, L13, L14, L15, L16, and L17 to `apd: false`.
- Removed `apdNote` from the non-keyed elements so the inspector no longer labels ordinary crown, lanthanum, flint, or aspherical partners as APD elements.

### Analysis sync

- Added a display-key note distinguishing retained patent partial-dispersion data from the narrower visual APD key.

## 2026-07-29 - E-ADF10 catalog coverage

- Added discontinued HOYA E-ADF10 from the manufacturer's 2026-07-07 Zemax catalog, including its published
  formula-3 polynomial.
- L4's exact `nd=1.61310`, `vd=44.36`, code `613444` coordinate now resolves to catalog dispersion.
- No lens-data or prescription values changed.

## 2026-09-23 — Cover plate modeled as `rearPlates`

- Replaced the air-equivalent 30A gap with the patent's physical rear stack (Numerical Example 1 text layer):
  d30 = 37.5626 / 50.4932 mm (infinity / close), then `rearPlates` 1.4500 mm, nd 1.52301, νd 58.59, θgF 0.5449
  (dPgF −0.00035 against the project normal line; C12 (HOYA) coordinate-compatible spectral proxy), and BF 1.0000 mm.
- Paraxial check against the previous data: EFL identical; defocus changes by 0.00004 mm at both focus keyframes
  (rounding in the old 39.5147 / 52.4453). Physical track grows by 0.498 mm and matches the patent's 171.92 mm.

## 2026-10-30 — Fresh F-mount all-face and glass review

- Directly inspected original `patents/JP2019144477A.pdf`, Numerical Example 1: Figure 1 (PDF p. 28) at native resolution and a fresh 600 dpi crop, every prescription/plate/partial-dispersion row (p. 12), focus/asphere continuation (p. 13), and line definitions/anomalous-material conditions (pp. 6–10, ¶0020/0067). Every convex/concave face, cemented boundary and the physical camera-side plate was reviewed.
- Add source-supported concave rear lands via inferred cuts: S8 depth 13.14 mm, cap 33.595462 mm, outer 40; S14 depth 6.11, cap 28.018800, outer 31; S21 depth 6.00, cap 17.467215, outer 22.5. Native Figure 1 is about 400 ppi, 4.80 native px/mm from its 131.912 mm first/last lens-vertex span. Measured cap/edge shares are approximately S8 q=0.84±0.0092 (edge 199 px), S14 q=0.87±0.0117 (159 px), S21 q=0.776±0.0153 (116 px), where the range applies one native pixel at both endpoints. Source strokes are unambiguous; these axial depths are inferred, not printed machining dimensions.
- S14's literal q candidate (5.64 mm depth, 26.968782 mm cap) fails the unchanged full-beam rule. Its adopted cut moves outward: fresh reach 27.926018 plus margin 0.084056 is below cap 28.018800. S8 reach 32.870280 plus margin 0.100786 clears33.595462; S21 reach 16.977505 plus0.052402 clears17.467215. The shared guard sweeps interpolated focus and the source close keyframe. A separate temporary source-point run adds the printed d0 = 826.8724 mm at that close endpoint and also passes, with S21 reach 16.977504 mm; this diagnostic does not add finite-conjugate certification to the authored file. S21 stays before its actual7.5444 mm stop gap; no iris relocation or source flag is added. All other faces retain their caps; no further resolved flat land justifies another cut/extension.
- All **17 physical lens media plus one rear plate** retain the exact source d-line nd/νd pairs and all 18 actual PgF values. Four-decimal PgF precision is ±0.00005 before conversion to `.6438−.001682νd`; every stored dPgF reconstructs the printed value at that precision, including the plate's rounded−0.00035. No C/F/g indices are published. All 18 media resolve compatibly. M-TAFD305 remains a loose spectral proxy for L17 1.84915/40.00 (catalog 1.85135/40.10), without production/melt identification; unsupported molded-melt/vendor speculation was removed from public prose. Source anomaly conditions and the narrower six-element APD key remain; actual partial ratios do not make every ordinary partner a display-key APD element.
- Canonical/surface/full-cut checks pass with no unlaunched fields; image-circle reports no undersized surface; direct field coverage and aperture census pass. Nine actual SVG states were generated/rasterized/viewed with connected cemented outlines and zero hidden trim. Source R/d/aspheres, plate gaps, source indices/partials, stop, all controls and tolerances are unchanged. All new caps clear the pre-cut complete wide-open beams, so the cuts retain those beams rather than fitting the figure at their expense. Catalog consistency/resolver coverage and focused shared glass tests were checked; full integration gates belong to the parent batch.
