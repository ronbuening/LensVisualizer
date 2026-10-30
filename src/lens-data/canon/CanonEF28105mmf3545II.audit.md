# Audit Log — Canon EF 28–105mm f/3.5–4.5 II USM

Patent: JP 2002-365547 A, Numerical Example 1

## 2026-10-30 — Original-PDF shape and glass review

### Exact source and native evidence

Read the local `patents/JP_2002365547_A.pdf` anew. Numerical Example 1's 28-row prescription is on PDF p. 8
(printed p. 8, ¶0059). All radii, fixed spacings, four variable-gap rows and 15 material pairs were checked directly
against the native page. Paragraph 0058 on PDF p. 7 explicitly defines ni/νi relative to the d-line. The corresponding
optical section is Fig. 1(A/B/C), PDF p. 12; other figure blocks on the same sheet are different examples.
The original source R/d, spherical forms, stop position/rule and zoom/focus trajectories remain unchanged. The
independently solved BF and L2-only finite-focus anchors remain reconstructions, not printed close-focus rows.

The source is a native 1656 × 2339 raster at 200 ppi. The optical Fig. 1A crop is only 285 × 180 native pixels;
approximately 264 pixels cover the 79.52 mm first-to-last vertex span, or about 3.3 px/mm. One native pixel is
about 0.30 mm. Practical endpoint uncertainty is ±0.8 mm after heavy ink and schematic blank ambiguities.
A six-times reading enlargement was inspected as magnification only. Leaders, rays, brackets and SP strokes are
excluded from optical-rim measurement. The patent prints no numerical clear diameters.

### Every-element disposition and retained constraints

Every element, concave end and all three cemented interfaces were compared with Fig. 1 and actual SVGs. Source
heights are approximate optical endpoints, not proof of production clear apertures.

| Element faces | Previous clear sd, mm | Adopted clear sd, mm | Disposition |
|---|---|---|---|
| 1/2/3, front cemented pair | 28.4/27/24.5 | 25/25/25 | Connected native endpoints near 25; no opaque interface land. |
| 4/5, L1c | 23.5/23.5 | 22.5/22.5 | Independently visible smaller positive-meniscus rim. |
| 6/7, L2a | 13.4/9.4 | 13.4/9.4 | Clear caps retained; resolved S7 rear shoulder uses outer 13.4. |
| 8/9, L2b | 10.8/10.8 | 9.8/9.8 | Source endpoints about 9.8–10; removes old envelope oversizing. |
| 10/11, L2c | 10.5/7.8 | 10.5/7.8 | Retained; rear cap constrained by D11. |
| 12/13, L2d | 9/9 | 9/9 | Native differences unresolved at this raster scale. |
| 15/16/17, L3 cemented pair | 8.8/8.8/9.6 | 8.8/8.8/9.6 | Connected optical caps retained; no unsupported interface fill. |
| 18/19, L3c | 10/10.3 | 9.5/9.5 | Native endpoints near 9.5. |
| 20/21/22, L4 cemented pair | 9.2/9.4/10.7 | 9.2/9.4/9.5 | Rear follows source; facing/bonded caps retained. |
| 23/24, L5a | 11.7/11.9 | 11.2/11.2 | Source endpoints about 11–11.5. |
| 25/26, L5b | 12.8/13.5 | 11.5/11.5 | Separate source rim about 11.5. |
| 27/28, L5c | 10.4/11.5 | 10.4/11.5 | Front constrained by D26; rear source height retained. |

There are 14 clear-cap revisions and one outer shoulder. `rimExtensionSd: 13.4` on S7 preserves its 9.4 mm
clear cap. The flat shoulder extends beyond radius 12.967 without extrapolating a spherical optical surface.
No inferred cut, unsupported equal-height compound blank, resin wing or opaque bonded land is added. The source
has no hybrid layer, numerical cement, filter or rear plate.

Rejected trials retain the original guards: S11 = 9 mm gives 0.76 mm combined sag against 0.567 mm allowed across
D11 = 0.63; S27 = 11.5 gives 3.46 against 2.754 allowed across D26 = 3.06. The initial S7 land with old S8 = 10.8
gives 4.835 against 4.707 allowed across D7 = 5.23. Native S8/9 endpoints independently support the adopted 9.8;
no R/d or tolerance was tuned to obtain the fit. Small endpoint mismatches remain within ±0.8 mm uncertainty.

### Source aperture correction, distinct from rim changes

Fig. 2 and Fig. 3 on PDF p. 13 explicitly print Fno 3.63 at 28.90 mm and 4.08 at 50 mm; Fig. 4 on PDF p. 14 prints
4.67 at 101.37 mm. The former live targets 3.5/4.0/4.5 reflected retail markings, whereas the catalog design aperture
already used 3.63. Live station targets and aperture choices now use 3.63/4.08/4.67 with the existing derived rule.
This is a source-supported authoring correction, not a source erratum. Stop position/rule and R/d are unchanged.

Derived iris radii are 7.407355/7.680888/7.750409 mm; project paraxial f-numbers are 3.63/4.08/4.67. Independent real
collimated input-diameter ratios are 3.679842/4.149700/4.755128. With old targets they were paraxial 3.5/4/4.5 versus
real 3.551634/4.071211/4.591801. No physical iris schedule is established by either convention. Marketing f/3.5–4.5
remains separate from the source model.

### Glass review and production limits

All 15 printed index/Abbe pairs are unchanged. The d-line definition is explicit in ¶0058, although no numeric
wavelength is printed. There are no individual line indices, partial-dispersion values or APD evidence. Every one
of the 15 existing compatible catalog curves remains selected as a qualified spectral proxy; no per-lens spectral
override is present. Labels and the element analysis now state that historical supplier and melt are unspecified.
The historical PBH53/PBH53W coordinate does not prove a historical OHARA supplier or chemical formulation.

The source has no separately modeled bonded resin, source filter or rear plate to resolve. Existing maker/retail
association research and publication contradictions remain in the analysis with their prior qualifications. The
filing postdates the II retail lens and sibling examples have similar topology; this review does not establish a
factory prescription or production supplier. No source citation from the earlier identification analysis is counted
as a fresh external inspection.

### Actual rendering and sampled runtime behavior

Nine actual SVGs at three source zooms and infinity/middle/close focus were compared directly with native Fig. 1.
All 1,365 states (65 zoom × 21 focus) have 15 finite, closed, connected paths and zero hidden renderer trimming.
A geometry-identical 65-position diagnostic has zero surface-position or stop-radius difference. All 65 stations
pass the existing 3% aperture criterion and reach at least 99% corner coverage with clear chief rays and no
unsolved field or undersized image circle. No validation tolerance was changed.

The interpolated cam remains illustrative: at t = 0.828125 infinity BF is 50.541377 versus image gap 49.537541 mm,
+1.003836 mm defocus, with actual EFL 79.296226 mm. Only the three published infinity stations are quantitative
source anchors. The 500 mm finite-focus anchors are reconstructed. An actual-conjugate trial yields virtual
objects at seven sampled intermediate zooms (0.60–0.90) and focus 0.05; it is rejected as a positive-object
clearance probe there, rather than silently counting its 21 field-seed failures as successful rays.

A separate positive-object probe uses 500/focus mm object-to-image distance at finite focus and the shared
infinity chief/field solve. Across 441 controls, three fields and 97 pupil points (128,331 rays), every axial bundle
is 97/97 clear, all chiefs clear, and there are no seed failures or unaimed rays. All 2,355 full-field marginal
noBracket entries occur before S1. Independent unrestricted-sphere intersections place every one outside the
adopted 25 mm cap; zero are unexplained inside-cap misses. They are ordinary bounded first-aperture misses,
alongside off-axis clipping. This is sampled rim clearance, not proof of continuous focus accuracy or production
illumination. No source-unsupported cam, optical rim inflation or inferred cut was used to remove those limits.
