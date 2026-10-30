# Audit Log — Canon EF 28–90mm f/4–5.6 II USM

Patent: JP 2009-282554 A, Numerical Example 6

## 2026-10-30 — Original-PDF shape and glass review

### Exact original and native evidence

Read local `patents/JP2009282554A.pdf` anew. Numerical Example 6's prescription, 10 media, four variable-gap rows and
sole asphere are on PDF p. 15 (printed p. 15, ¶0043). Paragraphs 0035–0037 on PDF p. 9 define Ni/νi and the sag
expression; Table 1 on PDF p. 17 gives Example 6 conditions. The corresponding optical section is Fig. 21, PDF p. 28,
a single wide-angle view. Fig. 22/23, PDF p. 29, and Fig. 24, PDF p. 30, give the matching wide/mid/tele aberrations.
Sibling figure blocks were excluded from shape measurement.

Native Fig. 21 is a 993 × 775 embedded raster at approximately 199 ppi. About 566 native pixels span the 83.65 mm
first-to-last vertex distance, 6.77 px/mm or about 0.15 mm per native pixel. Practical height uncertainty is ±0.5 mm
because line thickness and schematic endpoint ambiguity exceed a single pixel. Magnification adds no native source
resolution. FC/SP/IP strokes, rays, brackets and leaders are excluded from optical-rim measurements. No numerical
clear diameters are printed.

### Every-element shape disposition

Every element, concave end and both cemented interfaces were compared with native Fig. 21 and actual SVGs. All caps
remain inferred optical bounds, not published production clear apertures.

| Element / faces | Previous clear sd, mm | Adopted clear sd, mm | Disposition |
|---|---|---|---|
| E1, 1/2 | 17.2/14.7 | 19.2/14.7 | Native front endpoint near 19.2; rear clear cap retained and outer shoulder reaches 19.2. |
| E2, 3/4 | 15.2/15 | 15/15 | Independently visible roughly 15 mm component; clears S2 shoulder guard. |
| E3, 5/6 | 14/14 | 14.5/14.5 | Separate positive meniscus near 14.5. |
| E4, 7/8 | 12.4/12.4 | 10/10 | Source front variator singlet near 10. |
| J2, 9/10/11 | 12/10.78/10.78 | 10/10/10 | Connected source doublet near 10; no opaque bonded land. |
| J3, 13/14/15 | 8.4/8.6/8.6 | 7.3/7.3/7.3 | Separate source compensator near 7.3. |
| E9, 16/17A | 10.8/10.82 | 10/10 | Source negative asphere near 10. |
| E10, 18/19 | 10.82/11.3 | 10/10 | Source positive rear member near 10. |

There are 16 clear-cap revisions and one resolved shoulder. S2 uses `rimExtensionSd: 19.2`, preserving clear sd 14.7.
The flat land extends beyond its 18.35 mm sphere radius, without extrapolating the optical cap outside the spherical
domain. Source-connected cemented endpoints are not an unsupported compound-blank fill. There is no hybrid layer,
opaque interface land, disconnected resin wing or inferred cut.

Rejected trials retain the existing guards: restoring S2 clear cap to 15.3 mm gives 9.03 mm combined sag against
8.631 mm allowed across source D2 = 9.59. The old S3 = 15.2 with the new shoulder gives 8.649 against 8.631 allowed;
independent native S3 endpoints support the adopted 15.0. A uniform 11.3 mm rear blank gives 0.43 against 0.360 mm
allowed across D17 = 0.40; source-sized 10 mm caps preserve that constraint. No source R/d or asphere was tuned to fit
a drawing, and no tolerance was relaxed.

All 19 modeled R/d rows, the four printed asphere coefficients and existing zoom/focus gap trajectories remain
unchanged. Source row 20 is explicitly an inactive flare cutter and remains omitted. Raw D19 = 0/13.06/36.80 mm ends
at that plane; the existing independently solved BF values imply roughly 38.72–38.74 mm FC-to-image distance. That
variation remains reconstruction uncertainty, not a printed fixed rear gap. No source filter, rear plate or numerical
cement is present.

### Literal material pairs and spectral qualifications

All 10 source media were checked directly. Nine Abbe values had been replaced with catalog decimals. Restored source
values are E1/E2 58.16→58.2, E3/E5/E8 23.78→23.8, E4 41.24→41.2, E6 60.64→60.6, E7 31.07→31.1 and E10 64.14→64.1.
E9 remains 30.2; every source refractive index is unchanged. These are authoring corrections to literal source pairs,
not source errata. No geometry or focal-length adjustment follows from substituting catalog Abbe values.

Paragraph 0035 defines Ni/νi without a reference line. The d/g labels on the aberration plots identify plotted
wavelengths, not the material table coordinates. All 10 media now carry `Unmatched` and `indexReferenceNote`, with
explicit approximate d-line tracing. Nine previously active catalog curves are disabled. All 36 catalog-derived
per-lens nC/nF/ng/dPgF values are removed; the original publishes no individual line indices, partial dispersion or
APD evidence. The historical line identity, supplier, melt and chemistry remain unresolved.

Paragraph 0034 and Claim 8 teach a plastic asphere in Group 4, but do not identify a formulation or forming process
for this numerical medium. E9 retains that source option without claiming a proprietary polymer identity or production
molding. The data labels and public analysis now agree with the source qualifications.

### Source aperture targets and unresolved precision

The prescription headline on PDF p. 15 prints f/3.83–5.88. Fig. 22 prints wide f/3.84, Fig. 23 mid f/4.45, and Fig. 24
tele f/5.88. The model uses the prescription headline at wide: former live 4/4.451141943/5.6 targets become
3.83/4.45/5.88, with design metadata and aperture choices synchronized. Retail f/4–5.6 remains separate. The stop
position/derived rule is unchanged; no physical iris schedule is inferred. The headline/plot 3.83/3.84 discrepancy is
recorded as unresolved `source.errata`, without asserting its cause.

Table 1 gives ν2p−ν2n = 36.860 and ν3n−ν3p = 7.290, whereas literal source rows give 36.8 and 7.3. The extra precision
basis is unpublished. The source values are retained, with an unresolved erratum instead of catalog decimals fitted
to those cells. Rounding is a possible explanation, not an established cause. The broad claimed ranges remain
satisfied. The coordinator owns both shared Section G source-discrepancy entries.

### Actual rendering and sampled controls

Nine actual SVGs cover all three source zooms at infinity/middle/close focus and were compared with native Fig. 21.
All 1,365 states (65 zoom × 21 focus) have 10 finite, closed, connected paths and zero hidden renderer trimming. A
geometry-identical diagnostic reproduces surface positions and stop radii exactly. All 65 zooms pass the existing 3%
aperture criterion and at least 99% corner coverage, with clear chiefs, no unsolved fields or undersized image circle.

Derived iris radii are 6.928875/6.901771/6.898557 mm. Project paraxial targets 3.83/4.45/5.88 differ from independent
real collimated input-diameter ratios 3.867915/4.508114/5.956444. The former fixed-6.900 mm fit is not a source
mechanical iris or the active schedule. All runtime numbers retain the spectral-reference uncertainty.

A positive-object probe samples 441 controls × three fields × 97 pupil points, 128,331 rays, using 380/focus mm
object-to-image distance at finite focus and the shared field/chief solver at infinity. Every axial bundle is 97/97
clear, all chiefs clear, with no seed or aiming failure. Nine full-field marginal noBracket entries occur after S6 at
tele focus 0.30–0.70. Independent unrestricted-sphere intersections meet S7 at heights 14.035596–14.042157 mm, outside
its 10 mm cap; none is an unexplained inside-cap failure. Other off-axis clipping remains sampled vignetting.

The infinity census retains −4.720239 mm maximum interpolated defocus at zoom t = 0.78125: BF 60.429677 versus image
gap 65.149916 mm, computed EFL 64.831256. Only the three published infinity stations are quantitative anchors. Existing
380 mm close-focus anchors and intermediate trajectories remain reconstructions; the physical-rim probe does not
certify intermediate focus accuracy, continuous illumination or production behavior. The retail correlation remains
qualified and separate from source fidelity and sampled clearance.
