# Nikon AF-S NIKKOR 24mm f/1.4G ED Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/US8416512.pdf`, Example 3 and FIGS. 3, 7, 11A-11C, and 19A-21I.

### Prescription, Focus, And Aspheres

- The data file remains aligned to Example 3: `f = 24.68 mm`, `FNO = 1.43`, `2ω = 83.64°`, and the positive/positive two-group rear-focus architecture.
- The explicit patent cement media at surfaces 14/15 and 19/20 remain modeled as 0.010 mm optical layers with `nd=1.51400`, `νd=42.83`. They are patent prescription rows, not catalog glasses.
- The two aspheres remain surface 4A on L12 and surface 21A on L24b. The stored conic conversion (`K = epsilon - 1`) and polynomial coefficients remain consistent with the analysis.
- Focus remains Gr2 translation toward the object side, with `d8` decreasing and final BF increasing by the same travel.

### Glass And APD

- No data changes were made. The existing glass labels already encode the prior patent-code review and avoid over-specific catalog claims where the public coefficient set is missing.
- L21 and L25 remain `apd: "inferred"` because the patent gives `nd`/`νd` and Nikon's two-ED production count, but does not publish partial-dispersion or line-index rows. Their `dPgF`, `nC`, `nF`, and `ng` values are catalog-surrogate helper data.
- L23a (`606637 phosphate-crown class`) remains an Abbe-only catalog gap rather than being forced to a non-exact public glass.
- The two cement rows remain Abbe-only by design.

### Semi-Diameters

- US 8,416,512 does not publish per-surface clear apertures or effective diameters for Example 3.
- Current SDs remain documented renderer estimates. They make rational sense against FIG. 3: broad front Gr1A apertures, large front asphere, stop at `sd = 13.2 mm`, similar post-stop L24 block apertures, and a controlled final relay diameter.
- No SD values were changed in this pass.


## 2026-10-30 — Fresh patent shape and glass reinspection

Directly inspected US8416512 Figure 3/PDF4, including both cemented blocks, and all 14 modeled media rows (12 glass plus 2 cement) in Example 3/PDF35. The material definition/PDF33 specifies the d line at 587.56 nm. The figure's native raster is 300 ppi; the 600 dpi rendering is a 2× enlargement. Its peripheral shoulders are beveled/angled; no independent vertical flat land is resolved, so those profiles are retained and no rimCutDepthMm/rimExtensionSd is added. Continuous paired clear rims rise at S8=18.5, S12=17.5, S14–16=16.8, S21A=16.5, S23=17.5 and S25=16.8 mm. Every remaining convex/concave face and compound boundary was checked; no speculative end trimming is added.

All 14 nd/vd pairs match the source. Twelve catalog curve selections remain unchanged and both cement layers remain intentional unresolved fallbacks. Two dPgF and six C/F/g per-lens helper values on media 5/13 were catalog-derived, not source-published, and are removed; their two spectral responses now consistently use the same qualified catalog curves as other lenses. No actual source partial/line datum is discarded. The two ED-position flags remain explicitly inferred; neither coordinate agreement nor a selected curve proves production supplier or partial dispersion. Source R/d/aspheric coefficients/material pairs, stop/focus controls and tolerances remain unchanged.

The public S21A departure and rim slope now use its adopted 16.5 mm cap: +1.4436 mm and 1.6280°; S4A remains −2.5048 mm at 19 mm. Surface, image-circle, nominal aperture and full-field checks pass (≥99% field coverage). All nine actual SVG states were inspected: finite continuous outlines and zero hidden trim. The shared glass suites pass 2 files/93 tests; source/curve invariants and duplicate-key checks pass.

## 2026-11-14 — Source-certified finite conjugates

Patent: US 8,416,512 B2, Example 3, Variable Distances, POS2 column.

| Zoom / keyframe | Field | Before | After | Source and axial residual |
| --- | --- | --- | --- | --- |
| 0 / 1 | `focus.conjugates` | Absent | 717.21 mm, `first-surface` | PDF p. 35, Example 3, Variable Distances, POS2 column: d0 = 717.21; +0.001780192 mm (+0.724153 depths of focus), `consistent`. |

- State 0/1: d8=4.145 mm; BF=38.690 mm. The patent does not explicitly define the distance reference; the conjugate check discriminates the declared reference from the alternate. Alternate-reference residual: +0.182492509 mm (+73.869209 depths of focus).

The printed POS3 d0=112.5 mm (PDF p. 35, Example 3) is not declared at state 0/2: its unchanged d8=0.561 mm and BF=42.274 mm give +0.153589689 mm (+56.548855 depths of focus), beyond the 25-depth limit.
