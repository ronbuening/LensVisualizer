# Audit Log — Canon EF 28–200mm f/3.5–5.6 USM

Patent: JP 2001-350095 A, Numerical Example 1

## 2026-10-30 — Original-PDF shape and glass review

### Exact selected source and native resolution

Read local `patents/JP2001350095A.pdf` anew. Numerical Example 1's 30-row prescription, 17 source material pairs,
four infinity-gap rows and two aspheres are on PDF p. 6 (printed p. 6, ¶0054). Paragraphs 0050–0053 on PDF p. 5
define the notation and sag expression; Table 1 on PDF p. 9 gives the conditional-expression results. The matching
section is Fig. 1(A/B/C), PDF p. 10. Fig. 5/9/13 depict sibling examples and were excluded. The header's publication,
inventor/applicant and filing/publication dates were checked against the original front page.

The source is a 1656 × 2339 native raster at 200 ppi. The Fig. 1 W/M/T crop is 540 × 580 native pixels. At wide,
approximately 256 pixels cover the 93.27 mm first-to-last vertex span, about 2.75 px/mm or 0.36 mm per native pixel.
Heavy ink and endpoint ambiguity warrant practical height uncertainty about ±1 mm. A three-times reading enlargement
was magnification only. Group brackets, zoom arrows, rays, SP and leader strokes were excluded from optical-rim
measurement. No numerical clear diameters are printed.

### Every-element shape disposition

Every element, concave end, four cemented interfaces and the separately modeled bonded layer were inspected against
native Fig. 1 and actual SVGs. The adopted caps remain inferred optical bounds, not published production apertures.

| Element / faces | Previous clear sd, mm | Adopted clear sd, mm | Disposition |
|---|---|---|---|
| C1 front pair, 1/2/3 | 31.5/30.8/30.4 | 30.5/30.5/30.5 | Connected native endpoints near 30.5; no opaque interface land. |
| L3, 4/5 | 29.6/27.8 | 27.8/27.8 | Smaller separate positive-meniscus rim. |
| Bonded layer, 6A/7 | 11.3/11.3 | 13.4/13.4 | Shared source component boundary; layer remains connected and positive. |
| L4 substrate, 7/8 | 11.3/10.7 | 13.4/10.7 | Rear clear cap retained; resolved S8 outer shoulder reaches 13.4. |
| L5, 9/10 | 9.7/9.8 | 9.7/9.8 | Unresolved small differences retained within native uncertainty. |
| L6, 11/12 | 9.8/9.6 | 9.8/9.6 | Source-compatible endpoints retained. |
| C2, 13/14/15 | 8.2/9.2/9.2 | 8.2/9.2/9.2 | Front cap remains constrained by D12; no uniform blank fill. |
| L9, 17/18 | 9.1/9.9 | 9.8/9.9 | Source front endpoint near 9.8 clears unintended intermediate axial clipping. |
| C3, 19/20/21 | 9.9/9.8/9.8 | 9.9/9.8/9.8 | Connected source component retained; no bonded land. |
| C4, 22/23/24 | 9.9/10.2/10.3 | 9/9/9 | Native compensator endpoints near 9. |
| L14, 25/26A | 12.6/13.2 | 11.4/11.4 | Source rear-asphere component rim near 11–11.5. |
| L15, 27/28 | 12.3/12 | 11.5/11.5 | Separate source positive singlet near 11.5. |
| L16, 29/30 | 10/11.3 | 10/11.3 | Front cap constrained by D28; rear source-compatible endpoint retained. |

Fourteen clear caps change. S8 gains `rimExtensionSd: 13.4` while preserving its 10.7 mm clear semi-diameter. The
initial 9.8 mm S8 cap trial also passes geometry, but the native endpoint does not resolve that difference well enough
to require shrinking an existing clear cap. No inferred cut is added. No R/d, asphere, gap, zoom/focus trajectory,
stop position/rule or aperture target is changed.

The thin layer has source center thickness 0.05 mm. A 13,401-point scan from axis to the shared 13.4 mm cap keeps it
positive throughout, with minimum thickness 0.019367 mm at the rim. The layer's own endpoint is not independently
resolved at this raster scale; adopting the shared component boundary avoids a disconnected wing. No opaque land is
placed at that bonded interface. The manufacturing process and chemistry remain unspecified.

Rejected full-blank trials: S13 = 9.2 mm gives 1.17 mm combined sag against 0.954 mm allowed across source D12 = 1.06;
S29 = 11.3 gives 2.59 against 2.070 mm allowed across D28 = 2.3. Their smaller clear caps remain. Source geometry is
preserved and no guard or tolerance is relaxed to fit a drawing. There is no source filter, rear plate or numerical
cement medium.

### Existing radius corrections independently formalized

Native Example 1 prints R12 = +45.611, R18 = +29.422, R23 = +15.708 and R26 = +20.778 mm. Existing modeled values
−45.611/−29.422/−15.708/−20.778 are retained, with inline/header notes and four structured corrected `source.errata`
entries. Printed negative signs at R20/R28/R29 are retained. This review makes no numeric radius correction.

All 16 combinations of the four missing minus signs were checked independently. Only the complete restored block
reproduces the source's 28.92/80/193.14 mm summaries and five Table 1 ratios; maximum ratio residual is 0.000398.
Literal printed rows yield EFL −2.985733/−5.309944/−10.170225 mm. Corrected rows yield 28.896161/79.937822/192.911008.
The next closest sign combination still has about 60% maximum focal residual. Source-summary evidence isolates the
block as a unit. Independently, Claim 5 on PDF p. 2 rejects the printed group ratios and accepts the restored
0.470214/−0.074926/0.127378/−0.213602/0.253030. Claims corroborate the complete block rather than isolating each cell.

### All-media spectral review

All 17 literal index/Abbe pairs are unchanged, including the bonded layer. Paragraph 0050 defines ni/νi but never
identifies their spectral line. The intro, claims and numerical tables provide no d/e material reference or numeric
wavelength. The d/g labels on the aberration plots do not define the table coordinates. Under the data specification's
unknown-reference rule, all 17 entries carry `Unmatched` and `indexReferenceNote`, explicitly retaining approximate
d-line tracing without asserting historical line identity.

Sixteen active compatible catalog curves are disabled; the layer was already unresolved. All 64 catalog-derived
per-lens nC/nF/ng/dPgF overrides are removed. The source prints no individual line indices or partial dispersion and
supplies no APD evidence. Labels and analysis now agree with the source uncertainty. Coordinate proximity does not
verify wavelength, supplier, melt or historical chemistry; no catalog candidate is counted as an identified material.

### Actual render and sampled controls

Nine actual SVG views at three published zooms and infinity/middle/close focus were compared with native Fig. 1.
All 1,365 states (65 zoom × 21 focus) have 17 finite, closed, connected element paths and zero hidden renderer trimming.
The geometry-identical diagnostic reproduces surface positions and stop radii exactly. All 65 zooms pass the surface
and existing 3% aperture checks, with stop-limited axial aperture throughout. The old S17 cap restricted 17 intermediate
positions by up to +2.333156% and clipped the outer pupil ring in 90 sampled axial bundles; the source-sized 9.8 cap
clears that unintended restriction. All 65 fields reach at least 99% corner coverage with clear chiefs and no unsolved
field or undersized image circle.

Actual derived iris radii are 8.437157/8.233896/8.169032 mm. Project paraxial f-numbers are 3.63/5.06/5.88, while
independent real collimated input-diameter ratios are 3.682585/5.153861/5.988473. No physical iris schedule is inferred.
All runtime values retain the source spectral-reference uncertainty.

The 65-position infinity census retains +6.264025 mm maximum interpolation defocus at t = 0.8125: BF 63.596146 versus
image gap 57.332122 mm, with computed EFL 144.681129. The three source stations remain quantitative anchors; the
intermediate cam and finite-focus trajectory are illustrative. The three reconstructed close anchors target a 450 mm
object-to-image distance, not a source finite-spacing table.

A positive-object rim probe samples 441 controls × three fields × 97 pupil points, 128,331 rays. It uses 450/focus mm
object-to-image distance at finite focus and the shared field/chief solver at infinity. All axial bundles are 97/97
clear and all chiefs clear, with zero seed failures or unaimed rays. All 2,908 full-field marginal noBracket entries
occur before S1 and independently intersect the unrestricted first sphere outside its adopted 30.5 mm cap; zero are
unexplained inside-cap misses. Other off-axis clipping remains sampled vignetting. This does not certify intermediate
focus accuracy, continuous illumination or production behavior. Source fidelity, runtime clearance and the retained
retail correlation remain separate conclusions.
