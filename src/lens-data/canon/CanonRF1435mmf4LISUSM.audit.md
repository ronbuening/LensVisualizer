# Canon RF 14–35mm f/4 L IS USM — original-patent audit

## 2026-10-30 — shape, complete glass and all-state review

### Original and numerical scope

- Exact local original: `patents/US20220171174A1.pdf`, SHA-256
  `959245a4f8571ab6273dc26915276b3db92c789c1c4ca575112bc6f08930afdb`.
  First page confirms US 2022/0171174 A1, Takahiro Hatada / Canon, application 17/535,432 filed November 24, 2021,
  priority December 1, 2020, publication June 2, 2022.
- Numerical Example 3: PDF page 22 / printed 8 gives all 29 surface rows, 16 media and the first four asphere tables.
  PDF page 23 / printed 9 continues the two rear aspheres, full summary, five three-station gap rows and group data.
  Paragraphs 0061–0063, PDF page 19 / printed 5 define nd/νd coordinates, air-equivalent BF and standard (1+K) conic.
- Figure 7, PDF page 8 / sheet 7, is the selected wide section. Figures 8A/B, page 9 / sheet 8, are wide/tele
  aberrations; Figures 9A/B, page 10 / sheet 9, are 0.3° stabilization studies. This is the centered configuration;
  no calibrated transverse IS state is modeled.
- Native pages: 2560×3300 one-bit at 300 ppi. A 600 ppi view only doubles native ink. Vertical front-cap calibration
  is about 16.2 px/mm, axial stack about 15.6 px/mm; drawing is schematic. Adopt practical ±0.6 mm height uncertainty.
  Every clear sd remains the printed effective diameter divided by two.

### Every element, concave end and bonded interface

| Element | Source surfaces | Clear caps mm | Printed nd / νd | Current qualified curve |
| ------- | --------------- | ------------- | --------------- | ----------------------- |
| E1      | 1/2             | 21.91/16.105  | 1.77250 / 49.6  | J-LASF016               |
| E2      | 3A/4A           | 15.825/13.23  | 1.58313 / 59.4  | J-SK12                  |
| E3      | 5/6             | 13.095/12.985 | 1.49700 / 81.5  | H-FK61                  |
| E4      | 7/8             | 13.09/12.8    | 1.83400 / 37.2  | J-LASF010               |
| E5      | 10/11           | 9.355/9.185   | 1.95375 / 32.3  | J-LASFH21               |
| E6      | 11/12           | 9.185/9.23    | 1.63980 / 34.5  | S-TIM27                 |
| E7      | 13/14           | 9.405/9.045   | 1.91082 / 35.3  | H-ZLaF4LA               |
| E8      | 14/15           | 9.045/9.08    | 1.51633 / 64.1  | S-BSL7                  |
| E9      | 16/17           | 9.015/9.045   | 1.72047 / 34.7  | N-KZFS8                 |
| E10     | 17/18           | 9.045/8.98    | 2.00069 / 25.5  | J-LASFH17               |
| E11     | 19/20           | 9.13/8.82     | 1.80400 / 46.5  | TAF3D                   |
| E12     | 20/21           | 8.82/8.93     | 1.49700 / 81.5  | H-FK61                  |
| E13     | 22A/23A         | 9.635/10.005  | 1.49700 / 81.5  | H-FK61                  |
| E14     | 24/25           | 9.66/9.445    | 1.80400 / 46.5  | TAF3D                   |
| E15     | 26A/27A         | 10.55/11.105  | 1.85400 / 40.4  | L-LAH85V                |
| E16     | 28/29           | 19.06/19.425  | 1.48749 / 70.2  | S-FSL5                  |

Native S2 has a long vertical blank stroke beyond its existing cap: adopt outer 21.91 over clear 16.105. Native S4A
similarly has outer 15.825 beyond clear 13.23. Their vertical step heights agree with source-cap-anchored values within
reading uncertainty. Use rimExtensionSd only on those two air boundaries; source clear apertures are unchanged.
No other separate outer shoulder is resolved. All four cemented interfaces and all six aspheres retain continuous
curved caps, without opaque lands or equal-height inventions. No inferred concave cut, bonded layer, resin wing,
mechanical flange or new blocker is authored. Leaders, brackets, IS arrows and IP bar are excluded.

Rejected cap inflation: S2 clear 21.91 exceeds spherical R 18.113 and fails at a 90° rim; S4A clear 15.825 gives actual
aspheric rim slope 78.2°, beyond 64.2°. Adopted shoulders preserve their source optical caps. Genuine source A14 terms
on 3A/4A remain despite the generic equation stopping at A12; all six full coefficient arrays are unchanged.

Existing `checks.gapSagFrac: 0.93` is preserved, never added or relaxed. Published 4A→5 shared-band intrusion is
10.022449 mm / 10.87 mm, leaving 0.847551 mm physical clearance while exceeding the generic 90% margin. This is an
existing explicit source-cap validation qualification, not a cut exemption. No R/d, medium, stop, nominal aperture,
gap, cam or coefficient is tuned to pass or fit the figure.

### Complete glass and source qualifications

All sixteen source pairs and nd/νd notation remain unchanged. Sixteen compatible curves remain qualified spectral
proxies, never proof of historical supplier, melt, chemistry, cement or manufacturing. No individual C/F/g indices,
partial-dispersion/APD measurements or per-lens spectral overrides are published or authored. Three existing
production-correlated UD/APD inferences on E3/E12/E13 remain explicitly inferred, not source measurements. The
public analysis's old statement that no APD badge exists is synchronized with those existing flags. E9 receives no
source APD claim merely from its N-KZFS8-compatible coordinate. Source filters, cover plates and hybrid layers are
absent; all modeled media are included. Catalog design endpoints now quote printed 14.42/33.95 rather than computed
14.418880/33.959239.

The wide field-label issue remains unresolved in source.errata. Original table 53.26° versus Fig. 8A 56.3° do not
establish a unique convention or isolated coefficient error. Public bounding-sphere vector chiefs at infinity
converge through 29 surfaces without clipping: absolute image height 17.494158 at 53.26°, 19.321012 at 56.3°, versus
source 21.64. Middle 41.34° gives 21.337918; tele 32.5° gives 21.633027. Vector and automatic image-height results agree
within 2×10⁻8 mm. The larger runtime full-frame 21.65 mm corner requires 59.576284° at wide and is clipped by printed
26A/27A caps; actual edge 20.966640 mm is 96.8436%. Preserve projection defaults and every source cap. Source infinity
angle labels do not certify finite coverage or decentered IS behavior.

### Actual runtime and rendered comparison

- Geometry-identical 65-position clone: exact z/sd match at focus 0/.5/1. Surface probe passes; image-circle audit has
  zero undersized elements. All 65 aperture-census ratios within 3%, using existing derived/paraxial iris and admitted
  beam criterion. No tolerance change.
- Exact aimed-rim working f/# is separate: 4.097865/4.152033/4.287376 versus nominal 4.08/4.08/4.12. Thirteen of 65
  exact ratios exceed 3%, worst tele +4.062534%; all trace. Iris radii 5.657815/7.003855/8.635139 stay derived under
  current authority; generic source stop half-diameter 9.015 is envelope evidence, not a physical iris schedule.
- Field census: 62/65 at least 99%, three widest 96.84–98.95% limited by retained 26A/27A. No cap inflation. Working
  grid 21 zoom × 21 focus × 6 presets = 2,646 calls/version, all traced before/after.
- Current-state iris full pupils: 65 zoom × 5 focus × 4 fields = 1,300 fields/version, 193 positions each. All axial
  fields 193/193. Corner counts unchanged: source infinity 41/148/150, reconstructed close 7/144/153. Heavy wide-corner
  vignetting remains explicit; the shoulders change outline only, without certifying production illumination.
- First order: 65 zoom × 21 focus = 1,365 actual states. Source infinity residuals +.000534/+.010928/+.044273 mm;
  reconstructed .20 m source-zoom close endpoints focus numerically. Worst infinity −1.566540 mm at zoom .28125
  (EFL 18.885625 versus displayed 20.045); worst finite −2.888986 mm at zoom .875/focus .6, displayed .333333 m. Source
  supplies only three infinity rows; intermediate cam/focus positions remain illustrative, without retuning.
- Actual SVGs versus native Figure 7: 1,365 states / 21,840 finite, closed, connected paths; hidden trim 0. Source
  fidelity, sampled runtime clearance and production correlation are separate conclusions. Coordinator owns shared
  reports and full validation/publication gates.
