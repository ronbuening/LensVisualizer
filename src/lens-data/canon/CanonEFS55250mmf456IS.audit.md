# Audit Log — CANON EF-S 55-250mm f/4-5.6 IS

Patent: US 2008/0112063 A1, Numerical Embodiment 2, Figure 5

## 2026-08-25 — Screenshot, SD, movement, and glass audit

### Semi-diameters

- Rotated and measured Figure 5 at 600 dpi because Numerical Embodiment 2 does not publish clear apertures. The clean optical-rim pass produced a median figure/data scale of 1.040.
- Retained every SD. After normalization, the largest deviations were L11 at 0.81× and L36 at 1.17× the median shape; both stay inside the project's 25% change threshold. Every intermediate element is closer, and the supplied site render matches the stepped Figure 5 silhouette.
- The surface-domain and image-circle audits pass with no undersized surfaces.

### Movement, labels, and glass

- Added the source-backed focus role to positive L1 while retaining negative L2 as the lateral IS unit. The production display name correctly omits `STM`; this is the original 2007 EF-S 55-250mm f/4-5.6 IS design.
- Confirmed the published L2 zoom reversal: it is 4.900653 mm imageward at the middle state and returns to 0.089240 mm imageward at tele. L1 and L3 finish 40.665850 mm and 30.119282 mm objectward, respectively.
- Confirmed that only L1 focuses in the constrained 1.1 m reconstruction, moving 15.563067 mm objectward at wide and 16.393675 mm objectward at tele.
- Added CDGM H-ZLaF50E from the manufacturer's official coefficient table and pinned its published C/d/F/g line indices. L23 now resolves by its exact glass name, raising this lens from 10/12 to 11/12 strict Sellmeier coverage while retaining 12/12 trusted coverage. L22 remains a measured-line proxy with no asserted catalog identity.

## 2026-10-30 — original native-figure and spectral-override reopening

The actual 2026-08-25 record above is retained. This scoped review reopens resolved native cap differences
and unsupported catalog-derived per-lens spectral overrides. It reuses the unchanged earlier source-array and
production-correlation conclusions with their real date, without adding a reused lens entry or claiming a repeated
inspection as earlier work.

### Original evidence

- Exact local original: `patents/US20080112063A1.pdf`, SHA-256
  `51cb35f1b31319c734cc1a678aa4eafbc3a6e34be71919b193e952f364ded94c`. Front page independently confirms
  US 2008/0112063 A1, published May 15, 2008; Takahiro Hatada, Canon Kabushiki Kaisha; application 11/938,993 filed
  November 13, 2007, priority November 14, 2006.
- Selected Numerical Embodiment 2: PDF page 35 / printed page 5. Table starts lower-left, continues upper-right through
  surfaces 22/23, then prints f/d5/d10 rows at 56.9/160.8/241.3 mm. No d23/BF row is supplied; existing modeled BFD
  remains computed. Paragraph 0114 on PDF page 34 / printed 4 explicitly defines d-line index/Abbe coordinates.
- Figure 5: PDF page 9 / sheet 8. Matching Figures 6A/6B, pages 10/11, have Fno 4.16/5.88 and image height 13.66 mm.
  Figures 7A/7B, pages 12/13, are stabilization studies. The IP bar, IS arrows, brackets and leaders are excluded.
- Native pages are 2560×3300 one-bit at 300 ppi. Old 600 dpi inspection was 2x upsampling. Rotated section spans
  about 1,610 pixels across the literal 98.90013 mm first-to-final-surface stack, about 16.3 px/mm. Adopt practical
  ±0.8 mm height uncertainty for schematic ink; do not claim dimensioned clear apertures.

### Every element, concave end and interface

| Element | Source surfaces | Current clear caps mm | Native disposition                                          |
| ------- | --------------- | --------------------- | ----------------------------------------------------------- |
| L11     | 1/2             | 22.5/22.5             | Reduce previous 25/24.8 to native front blank               |
| L12     | 3/4             | 21/21                 | Reduce previous 21.6/21.8 to common source cemented blank   |
| L13     | 4/5             | 21/21                 | Reduce previous 21.8/21.6; preserve continuous bonded curve |
| L21     | 6/7             | 10.5/10.5             | Reduce previous 11.2/11.4 to native L2 blank                |
| L22     | 7/8             | 10.5/10.5             | Preserve bonded curve; restore full native rear curved cap  |
| L23     | 9/10            | 9.52/9.7              | Retain gap-limited caps, within native reading uncertainty  |
| L31     | 11/12           | 11.5/11.5             | Increase previous 10.7/10.7 to native pre-stop blank        |
| L32     | 13/14           | 11.5/11.5             | Increase previous 10.7/10.5 to native pre-stop blank        |
| L33     | 16/17           | 10/10                 | Restore full native weak rear curved cap                    |
| L34     | 18/19           | 9/9.2                 | Retain gap-limited front cap and native rear cap            |
| L35     | 20/21           | 7.2/7.1               | Retain native small rear negative meniscus                  |
| L36     | 22/23           | 9/9                   | Increase previous 7.4/7.4 to native final positive blank    |

Fifteen clear-cap changes and no separate outer shoulders preserve every R/d, medium pair, stop, target and cam. Both cemented
interfaces remain connected full curved caps. A short native interface stroke does not justify an opaque bonded
land, chemistry claim or unsupported block. No inferred concave cut, layer or resin wing is added. Native-detail crops reject the initial shoulder trials at 8/17: the short apparent vertical strokes are nearly
vertical weak spherical caps and adjacent-blank ink, without an independently resolved land. Restore full curved
clear 8 = 10.5 and 17 = 10; keep neighboring gap-limited 9 = 9.52 and 18 = 9.0. No rimExtensionSd remains.

Rejected clear trials retain geometric constraints: 8/9 = 10/10 gives combined sag 2.30 mm, beyond 2.090 mm permitted
in source gap 2.32179 mm; 18 = 9.5 with current 17 = 10 gives 0.56 mm, beyond 0.541 allowed in 0.60067 mm. Both fail
at every source station. No radius or spacing is tuned. Current minimum edge thickness is 0.695774 mm and largest
rim slope is 33.083475°. Render diagnostics show zero hidden trimming.

### Complete glass check

| Element | Printed nd / νd | Qualified curve disposition                            |
| ------- | --------------- | ------------------------------------------------------ |
| L11     | 1.51633 / 64.14 | S-BSL7 retained                                        |
| L12     | 1.80100 / 34.97 | S-LAM66 retained                                       |
| L13     | 1.49700 / 81.54 | S-FPL51 retained; UD correspondence inferred           |
| L21     | 1.71300 / 53.87 | S-LAL8 retained                                        |
| L22     | 1.84666 / 23.93 | Unmatched; old fitted line-index/partial proxy removed |
| L23     | 1.80400 / 46.57 | H-ZLaF50E retained                                     |
| L31     | 1.63854 / 55.38 | S-BSM18 retained                                       |
| L32     | 1.60311 / 60.64 | S-BSM14 retained                                       |
| L33     | 1.48749 / 70.23 | S-FSL5 retained                                        |
| L34     | 1.84666 / 23.78 | S-TIH53 retained                                       |
| L35     | 1.83400 / 37.16 | S-LAH60 retained                                       |
| L36     | 1.68893 / 31.07 | S-TIM28 retained                                       |

All twelve printed pairs and explicit d-line reference are unchanged. Remove 48 unsupported catalog-derived
per-lens overrides: 36 C/F/g indices and twelve dPgF values. This includes L22's ad hoc refit and borrowed S-TIH53WN
partial. Eleven compatible curves remain qualified spectral proxies; no named Sellmeier curve is disabled, but the
twelfth medium's custom spectral proxy is removed. Original plotted d/g/C aberrations do not publish numerical
line indices or partial dispersion. No APD measurement is published and no APO claim is made. Source filters, cover
plates and resin layers are absent. Historical supplier, melt, chemistry, cement and manufacturing method remain
unresolved. Labels, role text, per-element analysis and spectral narrative now agree.

### Source qualifications and runtime limits

- Catalog design endpoints quote printed 56.9/241.3, with computed 56.898033/241.315658 retained separately. All
  optical arrays, material pairs, nominal iris targets, gaps, focus cams and production correlation stay unchanged.
- Existing paragraph 0092 / Table 1 movement-definition contradiction is now an unresolved source.errata note.
  PDF page 33 / printed 3 defines maximum absolute excursion for reciprocation. Table 1, PDF page 36 / printed 6,
  gives −0.002, matching signed endpoint ratio −0.002194 instead of sampled maximum magnitude 0.120510. Retain the
  three printed zoom stations and their reversal; no isolated numeric error is established. Generic source-errata
  follow-up remains appropriate.
- Actual-geometry 65-position clone matches runtime z/sd exactly at focus 0/.5/1. Surface probe passes; image circle
  has zero undersized elements. All 65 aperture-census ratios are within 3%; all 65 infinity field chiefs reach at
  least 99%. Census derived/paraxial iris and admitted beam is separate from exact aimed nominal marginal rays.
- Source iris radii remain 9.838562/9.386156/9.355475 mm. Exact working values 4.220536/5.209748/5.986376 differ from
  nominal 4.16/5.129132/5.88. Dense exact-working results: 42 traced, 23 vignetted at 18; traced ratios all within 3%,
  worst +1.809112%. Do not describe aperture-census pass as full exact-pupil clearance.
- Working grid 21 zoom × 21 focus × seven presets = 3,087 calls/version. Baseline: 2,694 traced / 134 vignetted /
  259 unavailable. Current: 2,670 / 158 / 259. Native smaller front caps add 24 finite marginal vignettes. The same
  37 early-focus/intermediate-zoom combinations have unavailable field launches (`object-inside-lens` API reason),
  not a claim about a physically internal subject. No guard, tolerance or cam is relaxed.
- Current-state iris pupil grid: 65 zoom × five focus × four fields = 1,300 fields/version, 193 samples each. All
  source infinity axial fields have 193/193. Source close axial 193/169/121 totals remain unchanged. Infinity
  corners improve 104/106/112 → 131/127/130; reconstructed close corners 92/80/103 → 120/88/104. Existing clipping,
  changed front limiters and unavailable earlier-focus launches remain explicit; sampled model counts do not prove
  production illumination or transverse-IS clearance.
- First order: 1,365 actual zoom/focus states. Infinity/source-zoom reconstructed close endpoints residuals below
  1.2×10⁻12 mm. Worst infinity +4.564456 mm at zoom .34375 (computed EFL 117.566318 versus displayed 128.331250);
  worst finite −6.475718 mm at tele/focus .55, displayed 2.0 m. Only three source infinity zoom nodes exist; no
  finite prescription or intermediate cam is supplied. Intervals remain illustrative.
- Actual SVGs compared with native Figure 5: 1,365 states, 16,380 finite closed connected paths, zero trim. Centered
  tracing does not certify unavailable decentered IS behavior. Source fidelity, runtime clearance and production
  correlation are separate conclusions. Coordinator owns shared regeneration and full validation gates.

## Runtime Launch Qualification - 2026-10-30

This is a runtime-only supplement to the dated source/shape/glass review above. No original PDF was reinspected for this supplement; source review dates, prescription values, controls and review counts remain unchanged. Earlier pupil/chief grids labeled near or close sampled **collimated rays through focus-adjusted geometry**. Those labels identify the control geometry, not finite-object illumination. Independently computed finite paraxial residuals and exact-working-f-number probes remain separate; the latter use the runtime distance-label object plane.

The explicit finite-object supplement samples 20 positive focus positions at nine zoom positions. The complete current ABCD matrix, including any rear plates, supplies the real Gaussian object plane. A paraxial entrance-stop seed and inverse chief solve target actual image heights 0, 7.0875 and 14.1750 mm; paraxial object-height scaling alone is not accepted as the actual image-edge solve. Geometric roots are solved before current-aperture classification. The 14.1750 mm edge is the viewer format corner, which may exceed the selected source's image height; these probes do not establish production illumination or source support for an inferred continuous cam.

Of 165 positive-real-object geometries, 495/495 target chiefs converge: 495 clear the current caps and 0 clip. A further 15 sampled control geometries have no positive real Gaussian object, first at zoom 0.125, focus 0.05 (object-to-first-surface -3417.942526 mm); finite-object bundles are not asserted for them. Across the converged fields, 193 current-iris samples per field give 77,459 passed, 15,269 clipped, 2,807 failed and 0 unaimed rays. Minimum sampled axial transmission is 169/193. Failed traces are retained numerical/path outcomes, separately from clipping: `noBracket @ ?` (2807). No clear aperture, R/d, stop, cam, tolerance or source field is altered to clear those diagnostics.

Selected current close geometries, with Gaussian conjugates and their exact aimed bundle counts:

| Zoom control | Aberration control | Gaussian object-to-image (m) | Distance label (m) | Axis / half / edge passing of 193 | Chief result          |
| -----------: | -----------------: | ---------------------------: | -----------------: | --------------------------------- | --------------------- |
|            0 |                  0 |                  1.100000000 |           1.100000 | 193 / 179 / 120                   | clear / clear / clear |
|          0.5 |                  0 |                  1.100000000 |           1.100000 | 193 / 161 / 93                    | clear / clear / clear |
|            1 |                  0 |                  1.100000000 |           1.100000 | 169 / 151 / 111                   | clear / clear / clear |

The largest sampled relative difference between a positive Gaussian object-to-image conjugate and its distance label is 1001.010987% at zoom 0.25, focus 0.35, aberration control 0: Gaussian 34.603202438 m versus label 3.142857143 m. This is a first-order conjugate/control distinction, not a new production-distance measurement. Nominal infinity controls remain in their separate collimated checks; their small rounding residual is not converted into a finite-source claim.
