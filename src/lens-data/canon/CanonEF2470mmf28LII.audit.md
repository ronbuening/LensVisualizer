# Audit Log - Canon EF 24-70mm f/2.8L II USM

Patent: US 8,736,971 B2, Numerical Example 3

## 2026-05-31 - Catalog-mismatch review

### Phase 1 - Glass corrections

| Element / surface | Before | After | Justification |
|---|---|---|---|
| L7 / S11 | `S-TIM2 (OHARA; titanium flint)` | `S-FTM16 (OHARA; titanium flint, code 593353)` | Patent Numerical Example 3 row 11 gives nd=1.59270, vd=35.3. S-TIM2 resolves to nd=1.62004; S-FTM16 round-trips the patent row. |
| L13 / S23 | `S-NBH5 (OHARA; niobium flint / KZFS-family equivalent)` | `N-KZFS8 (Schott; S-NBH8-equivalent KZFS-family glass, code 720347)` | Patent row 23 gives nd=1.72047, vd=34.7. S-NBH5 resolves to nd=1.65412; N-KZFS8 is an exact catalog-backed match. |

No new catalog entries were needed. Both replacement glasses were already present in the catalog with verified coefficients.

### Phase 2 - Retained-information audit

- Patent Fig. 3 was checked against the stored SD profile. The data-file SDs remain presentation estimates because the patent does not publish clear apertures; the broad front unit, compact second unit, stop-adjacent middle groups, and rear relay proportions match the figure.

### Phase 4 - Analysis sync

- Updated the analysis element text, glass table, chromatic-strategy paragraph, and source note for S-FTM16 and N-KZFS8 / S-NBH8.

## 2026-10-30 — Original-PDF shape and glass review

### Exact selected example and native evidence

Read the local `patents/US8736971.pdf` anew. Numerical Example 3's 33-row prescription is on PDF pp. 19–20
(printed cols. 12–13); all 18 source media, four aspheres and three variable-gap rows were compared directly with
the native pages. The corresponding section is Fig. 5 on PDF p. 8 (sheet 7), not the Fig. 3 cited by the older
2026-05-31 note. Fig. 3 belongs to another configuration and cannot supply this review's corresponding-section
reference. The source radii, fixed spacings, published infinity gaps, 24 listed asphere values and existing focus/
zoom/stop controls remain unchanged.

The figure is a 2560 × 3300 native raster at 300 ppi. The optical crop is 1100 × 650 native pixels; its roughly
1046-pixel first-to-last vertex span over 116.47 mm gives about 9 px/mm. One native pixel is about 0.11 mm;
endpoint/ink ambiguity and schematic blank margins warrant practical height uncertainty around ±0.5 mm. No
upsampling is counted as resolution. The lp leader, SP stroke, group brackets and zoom arrows are excluded from
rim measurement; lower endpoints were used where leaders cross the upper outline.

### Inferred caps, rear shoulder and retained constraints

There is no effective-diameter column. All caps remain inferred optical bounds, not published production clear
apertures. Every element, concave end and all five cemented interfaces were inspected against native Fig. 5 and
actual SVG geometry. The revised heights follow visible optical endpoints rather than the previous 82 mm filter/
ray-envelope sizing.

| Faces | Previous clear sd, mm | Adopted clear sd, mm | Disposition |
|---|---|---|---|
| 1/2/3 | 41.0/34.2/34.0 | 34.2/34.2/34.0 | First cap now matches the connected front-doublet outline, about 34.1–34.3. Existing interface and rear cap retained. |
| 4/5 | 31.3/31.0 | 29.5/29.5 | Positive singlet about 29.3–29.6. |
| 6A/7 | 14.5/12.2 | 16.8/12.2 | Front optical rim about 16.8; resolved rear shoulder extends 7 to 16.8 using `rimExtensionSd`. Clear concave cap stays 12.2. |
| 8/9/10 | 12.2/13.4/13.4 | 12.0/12.0/12.0 | Connected source doublet endpoints about 12.0. |
| 11/12 | 13.2/10.8 | 10.8/10.8 | lp singlet about 10.8. |
| 13/14/15 | 10.8/13.5/14.5 | 12.5/12.5/12.5 | Connected rear Unit-2 doublet about 12.4–12.6. |
| 18/19/20 | 13.1/16.3/16.3 | 15.0/15.0/15.0 | Stop-side doublet about 14.9–15.1; front cap now admits the source tele axial beam. |
| 21/22A/23/24 | 15.8/14.1/14.1/16.8 | 15.0/14.1/14.1/15.0 | Outside faces follow the roughly 15 mm figure height; facing concave caps remain gap-constrained. |
| 25/26/27/28 | 17.7/17.7/17.0/17.0 | 15.5/15.5/15.5/15.5 | Two positive singlets terminate at independently visible roughly 15.5 mm rims. |
| 29A/30A | 17.5/14.2 | 14.8/14.2 | Front follows the source roughly 14.8 mm rim; rear retained by gap constraint. |
| 31/32/33 | 14.2/16.5/16.5 | 14.2/15.0/15.0 | Final doublet rear/interface follow the roughly 15 mm outline; front retained by gap constraint. |

There are 23 clear-cap corrections and one rear shoulder. Surface 7's 16.8 mm outer land exceeds its spherical
radius 16.535 mm, but its optical cap remains 12.2 mm inside that domain; the shoulder is flat and the actual path
is finite and connected. No optical sphere is extrapolated, and no opaque bonded land or resin wing is added.
The connected equal-height source doublet endpoints are distinct from an unsupported compound-blank fill.

Rejected full-blank trials: raising both 22A/23 caps to 15 mm gives 4.75 mm combined sag against the existing
4.203 mm allowance across D22 = 4.67. Raising 30A/31 to 15 gives 2.82 against 2.484 mm allowed across D30 = 2.76.
The literal source R/d and aspheres are preserved; the smaller caps remain rather than inventing lands, changing
the polynomial or relaxing the guards. The source has no hybrid layer, numerical cement, filter or rear plate.
There is no inferred cut.

### Source spectral values and proxy qualification

The numerical-example introduction on PDF p. 18 (printed cols. 9–10) explicitly identifies the d-line reference.
PDF p. 16 prints rounded g/F/d/C wavelengths 436/486/588/656 nm and defines νd and θgF; the native label is nC,
not the OCR's nG at 656 nm. All 18 literal index/Abbe pairs remain unchanged. All 18 compatible shared catalog
curves also remain selected, with labels qualified as spectral proxies rather than historical supplier/melt/chemistry
identifications. No individual material nC/nF/ng value is printed or authored.

The genuine source partials are retained: Table 1, Example 3, on PDF p. 20 prints +0.014 for the negative L5 and
−0.009 for positive L6. Conditional Expressions (3)/(4), PDF pp. 16–17, define the same deviation convention used
by `dPgF`, namely θgF − (0.6438 − 0.001682νd). These two values and patent APD tags are source-supported, not
catalog-derived overrides. APD notes now cite Table 1 and the normal line explicitly. The source's PBM2/NSL7
normal-line examples do not identify the suppliers of the modeled media.

L16's M-TAFD305 curve remains only an approximate compatible proxy: catalog nd 1.851348122 versus source
1.85006 (offset +0.001288122), νd 40.104483 versus 40.2. Its historical material, supplier and forming process
remain unresolved. Two aspheres and a moldable-family catalog row do not establish production molding. The analysis
removes the unsupported forming-process inference and identifies all 18 active curves consistently. Production
Super UD/UD counts remain correlation evidence, separate from source chemistry and the two published partials.

Table 1(1) prints 6.49, while the source's own Unit-1/Unit-2 focal lengths 105.87/−16.39 give about 6.46. The cause
is unresolved; no rounding explanation is asserted as fact. `source.errata` records the contradiction without changing
source rows or controls. The coordinator owns its shared Section G queue entry.

### Actual rendering and sampled control-state behavior

Nine actual SVG views cover three published zooms at infinity, middle and close focus. The final silhouette was
compared directly with native Fig. 5. All 1,365 sampled states (65 zoom × 21 focus) have 18 finite, connected,
closed element paths with zero hidden renderer trimming. A dense diagnostic copy reproduces the runtime geometry
exactly; all 65 zooms pass the surface/aperture checks and reach at least 99% of the full-frame corner with clear
chief rays and no unsolved field. The old S18 cap limited tele to about f/3.10 (+6.6%); its revised source-supported
cap clears that unintended clipping, without changing the source F2.91 rule. Actual derived iris radii are
9.518562/10.587874/12.940031 mm, not the stale authored/real-ray values previously quoted in the analysis. No
physical iris schedule is inferred from those model values.

The 65-position infinity census retains up to −1.187079 mm interpolation defocus near t = 0.765625: computed BF
54.304796 versus image gap 55.491875 mm. The three source stations remain the quantitative anchors; no source-
unsupported cam is fitted. The finite-focus model still reconstructs the maker's 0.38 m target rather than a source
focus-spacing table.

A separate 21 × 21 zoom/focus grid checks 1,323 center/half/full nominal-field bundles with 97 sampled pupil rays
each (128,331 rays). Every axial sample and chief clears; zero seed failures or unaimed samples remain. Ordinary
off-axis vignetting persists. Three hundred two marginal full-field samples in 91 bundles return `noBracket`: 281
before the first surface and 21 after source 24, before the next element. These ray-entry/intersection misses prevent
continuous-pupil clearance certification; they are not hidden by enlarging source-inferred rims. The previous caps
give 1,418 such misses and retain axial/chief restrictions. The nominal finite field uses the reconstructed paraxial
conjugate and is not a certified production field map.

Source fidelity, sampled runtime clearance and production correlation remain separate conclusions. No original is
missing or unusable; the retained source and runtime limitations above remain explicit.


## 2026-10-31 — Full-source spectral proxy comparison

Exact local original US 8,736,971 B2, Numerical Example 3. PDF p18 (printed cols9–10) defines the numerical d-line reference. PDF p16/col6 names rounded g436/F486/d588/C656nm, defines θgF=(ng−nF)/(nF−nC), and prints condition(3) using θgF−(0.6438−0.001682νd). PDF p17/col8 uses the same line in condition(4). Table1, PDF p20/col13, prints Example 3 +0.014 and−0.009. These are genuine source deviations, not published absolute per-medium C/F/g indices. The source row 8 on PDF p19/col12 assigns E5 nd1.59522/νd67.7; preserve those coordinates and both authored source partials. Native Figure 5 on PDF p8/sheet7 was inspected for this independent negative element and the following cemented interface; the extracted source page is2560×3300 at 300 ppi. The completed 2026-10-30 shape review and actual older dates remain reused.

Retain S-FPM2 rather than J-PSKH1. The central θ reconstructed from printed +0.014 and67.7 is0.5439286; the deviation is printed to only three decimals, with a half-rounding interval of0.0005 before ν rounding. S-FPM2 catalog θ0.544235896 and J-PSKH1 θ0.543997267 are both within that published deviation precision. J-PSKH1's smaller ratio residual therefore is not independent evidence of a better source material. It would worsen nd offset from−0.000000411 to−0.002029990 and source-implied F−C span error from−0.052808% to−0.635407%. The curve's current-temperature/source-grade identity is not established by the patent.

The actual engine already reconstructs g from the preserved source partial, retaining θ0.5439286 with either compatible catalog curve; only the borrowed C/F span would change. A raw catalog θ ranking would therefore worsen the authoritative span without improving the traced partial. No label, pair, source deviation, APD tag, R/d, asphere, cap, stop or control is changed. Rounded source wavelengths remain named Fraunhofer-line references, not fabricated exact per-lens wavelength measurements.

This is a scoped catalog-assignment follow-up. The selected original reference/spectral pages were freshly rendered for numerical reading and native figure pixels inspected for the relevant body/interface only. The prior whole-lens shape pass is reused with its actual date. Source R/d, caps, aspheres, stops, gaps, zoom/focus controls, source spectral values, source errata, field/interpolation limits and production-correlation qualifications are preserved. No source-medium identity or new whole-review count is claimed.
