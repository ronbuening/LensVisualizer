## Patent Reference and Design Identification

**Patent:** JP 2001-330771 A  
**Application Number:** JP 2000-149429  
**Filed:** 2000-05-22  
**Published:** 2001-11-30  
**Inventors:** Shizuka Takemoto; Norikazu Yokoi  
**Applicant:** Sigma Corporation  
**Title:** Retrofocus Type Wide-Angle Lens  
**Embodiment analyzed:** Numerical Example 2

The model is a research correlation with the original SIGMA 24mm f/1.8 EX DG ASPHERICAL MACRO for 35 mm SLR cameras.
It is distinct from the later DG DN and Art lenses. The association is supported by the contemporaneous Sigma
September 2004 catalogue, rather than an assumption that every later product-page construction image is correct.
The manufacturer has not confirmed that the patent numbers are the unchanged factory prescription.

1. The catalogue's correctly labeled 24 mm section shows ten glass bodies in nine air-separated components,
   with two aspherical bodies in the same front/rear positions as patent Fig. 2.
2. The patent's f = 24.69 mm, Fno = 1.85 and full field 82.44° are close to, but distinct from,
   the marketed 24 mm, f/1.8 and 84.1°. The prescription is not rescaled to the marketed focal length.
3. Sigma describes floating focus, 0.18 m minimum object-to-image distance and maximum magnification 1:2.7.
   The patent describes two-group floating motion and illustrates approximately 1:2.6 close magnification.
   Similarity of those quantities is correlation evidence, not proof of an identical mechanism or formula.
4. The 2001 publication precedes the inspected 2004 catalogue. The catalogue lists Sigma SA, Canon EF,
   Nikon F, Pentax K and Minolta A versions; the application taxonomy uses sony-a for the last mount family.

Only the infinity configuration is implemented. The source omits its last-surface-to-image gap; the model uses the
explicitly adopted, calculated value 38.58 mm. The published near spacing remains documented below but is not active.
The original patent itself supplies the selected numerical and asphere tables on PDF page 5, printed page 4;
a prior assertion that those descriptive pages were absent was incorrect.

## Optical Architecture

The layout is retrofocus in the quantitative sense: the calculated infinity back focal distance exceeds the effective
focal length. It achieves this without a strongly negative net front group. Strong positive and negative subgroups
nearly balance before the stop, while the rear group supplies substantial positive power.

Ten glass bodies, two separately retained compound-asphere media films and one stop occupy 22 source rows.
The films are explicit optical media, not invented generic cement. They increase the material-entry count to twelve
without changing the manufacturer's ten-glass-body/nine-air-component count.

The patent divides the assembly into G1 before the diaphragm and G2 after it. G1 contains positive G1a,
negative G1b and positive G1c; G2 contains positive G2a, negative G2b and positive G2c.
The following powers are standalone group results in air, calculated from the native d-line prescription.
They are not each group's isolated aberration contribution in the assembled system.

| Group | Source surfaces | Standalone focal length (mm) |
| ----- | --------------- | ---------------------------: |
| G1a   | 1–2             |                  +197.734937 |
| G1b   | 3–7             |                   -19.957111 |
| G1c   | 8–11            |                   +46.497971 |
| G2a   | 13–15           |                   +35.023360 |
| G2b   | 16–18           |                   -28.201157 |
| G2c   | 19–22           |                   +35.212308 |

G1 as a whole has f = -298.269126 mm; G2 has f = +43.689362 mm.
The complete model gives EFL 24.689902525 mm and Gaussian BFD 38.579155506 mm.
The first-to-last refracting-vertex track is 85.83000 mm; first vertex to the adopted image
is 124.41000 mm. These are optical reference-plane distances, not barrel dimensions.

The principal planes lie 40.727597 mm imageward of the first vertex and
13.889253 mm imageward of the last vertex, respectively.
The surface-by-surface Petzval sum is 0.0042773117 mm⁻¹ under the adopted positive-imageward sign convention.
That paraxial sum is not a prediction of the finite-aperture tangential/sagittal field curves by itself.

## Element-by-Element Analysis

Individual focal lengths below are calculated for each material interval as a standalone lens in air.
For cemented or compound-asphere pieces, those powers must not be added as if the real shared interface were air.
Descriptions of likely optical roles are architectural interpretations unless a patent paragraph is identified.

### L1 — Positive Meniscus

nd = 1.72342, νd = 38.0. Glass: BAFD8 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +197.734937 mm.

The front positive meniscus is G1a. Its relatively weak positive standalone power is opposed by the following negative subgroup. Its large inferred front rim accommodates oblique fields; no physical clear diameter is published.

### L2 — Negative Meniscus

nd = 1.83400, νd = 37.3. Glass: NBFD10 (HOYA coordinate-equivalent class; supplier unconfirmed). f = -41.975595 mm.

This negative meniscus begins G1b. The high index permits strong refraction without an especially thick body. Together with the following negative hybrid component it forms the principal divergent portion of G1.

### R1 — Hybrid resin negative meniscus

nd = 1.51840, νd = 52.1. Glass: Unmatched (hybrid optical resin; spectrum unpublished). f = -630.244284 mm.

The first 0.2000 mm film lies between s5A and s6, in front of L3. The aspherical boundary is the air-to-film entrance s5A; the film-to-glass interface s6 is spherical. Its refractive effect is retained even though its standalone power is weak.

### L3 — Negative Meniscus

nd = 1.78590, νd = 44.1. Glass: NBFD11 (HOYA coordinate-equivalent class; supplier unconfirmed). f = -49.352254 mm.

The negative substrate completes the first hybrid assembly. Its actual optical entrance medium is R1, not air. L2 and this assembly together give the strong negative G1b subgroup. The model does not identify a particular resin formulation or manufacturing process beyond the compound-layer construction inferred from the source.

### L4 — Biconvex Positive

nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA coordinate-equivalent class; supplier unconfirmed). f = +100.772651 mm.

This thick positive lens starts G1c. The patent explains that the central thickness of the positive front subgroup helps control negative distortion and field curvature (¶0011). That group-level statement does not isolate the contribution of L4 alone.

### L5 — Positive Meniscus

nd = 1.83400, νd = 37.3. Glass: NBFD10 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +86.490026 mm.

The positive meniscus completes G1c immediately before the variable intergroup gap and stop. It shares the same native glass coordinates as L2 but has opposite standalone power, illustrating why index and Abbe number do not by themselves determine optical role.

### L6 — Biconvex Positive

nd = 1.71300, νd = 54.1. Glass: LAC8 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +37.895602 mm.

The strongly positive rear-group front lens forms G2a together with R2. The patent relates G2a power to required rear-group diameters and manufacturing sensitivity (¶0012). The compound component bends the expanded beam inward after the diaphragm.

### R2 — Hybrid resin positive meniscus

nd = 1.51840, νd = 52.1. Glass: Unmatched (hybrid optical resin; spectrum unpublished). f = +437.572470 mm.

The second 0.2000 mm film lies between s14 and s15A, behind L6. Its outer resin-to-air surface s15A is aspherical, while the substrate-to-resin interface s14 remains spherical. This reverses the layer orientation relative to R1.

### L7 — Positive Meniscus

nd = 1.69680, νd = 55.6. Glass: K-LaK14 (SUMITA coordinate-equivalent class; supplier unconfirmed). f = +62.572881 mm.

The positive meniscus is the first member of the rear cemented doublet G2b. Its higher Abbe number contrasts with the following strong negative flint. The actual cemented net power is negative despite this component being positive alone.

### L8 — Biconcave Negative

nd = 1.75520, νd = 27.5. Glass: S-TIH4 (OHARA coordinate-equivalent class; supplier unconfirmed). f = -20.205857 mm.

The biconcave flint is the strong negative member of G2b. The positive crown/negative flint pairing offers chromatic balancing at group level; the patent does not provide sufficient spectral performance evidence to call the design apochromatic.

### L9 — Positive Meniscus

nd = 1.71300, νd = 54.1. Glass: LAC8 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +89.218592 mm.

This weakly curved positive meniscus starts G2c. Its strongly curved rear face and the next positive lens provide the final positive subgroup. The narrow s18–s19 air band is the critical aperture/geometry constraint, handled explicitly rather than by changing radii or spacings.

### L10 — Biconvex Positive

nd = 1.60625, νd = 63.1. Glass: Unmatched (native 1.60625/63.1; no compatible catalog coordinate). f = +56.543777 mm.

The final biconvex element completes G2c. Its native index/Abbe coordinates lack a sufficiently close audited catalogue match, so the model retains an unmatched label and Abbe approximation. No unsupported partial-dispersion properties are assigned.

The retained compound components are R1+L3, L6+R2 and L7+L8. Their calculated standalone net focal lengths
are, respectively, -45.714611 mm, +35.023360 mm, -28.201157 mm. The thin-layer powers are not omitted from those calculations.

## Glass Identification and Spectral Limits

The patent explicitly defines n as d-line index in ¶0016. Nine distinct native index/Abbe pairs were compared
against retained authoritative OHARA, HOYA, Schott, HIKARI, CDGM and Sumita catalogue material.
The selected labels identify coordinate-equivalent classes, not proven suppliers or production melts.
No supplier is inferred from the Sigma brand.

| Entries | Native nd / νd | Adopted class    | Catalogue nd / νd    | Qualification                              |
| ------- | -------------- | ---------------- | -------------------- | ------------------------------------------ |
| R1, R2  | 1.51840 / 52.1 | Unmatched        | —                    | Native Abbe fallback; no supplied spectrum |
| L10     | 1.60625 / 63.1 | Unmatched        | —                    | Native Abbe fallback; no supplied spectrum |
| L7      | 1.69680 / 55.6 | K-LaK14 (SUMITA) | 1.6968 / 55.6        | Equivalent spectrum; native pair retained  |
| L6, L9  | 1.71300 / 54.1 | LAC8 (HOYA)      | 1.713 / 53.94        | Equivalent spectrum; native pair retained  |
| L1      | 1.72342 / 38.0 | BAFD8 (HOYA)     | 1.72342 / 37.99      | Equivalent spectrum; native pair retained  |
| L8      | 1.75520 / 27.5 | S-TIH4 (OHARA)   | 1.755199 / 27.512089 | Equivalent spectrum; native pair retained  |
| L3      | 1.78590 / 44.1 | NBFD11 (HOYA)    | 1.7859 / 43.94       | Equivalent spectrum; native pair retained  |
| L4      | 1.80518 / 25.4 | S-TIH6 (OHARA)   | 1.805181 / 25.425363 | Equivalent spectrum; native pair retained  |
| L2, L5  | 1.83400 / 37.3 | NBFD10 (HOYA)    | 1.834 / 37.34        | Equivalent spectrum; native pair retained  |

Catalogue-derived C/F/g indices and a numerical partial-dispersion offset are stored directly on the nine glass entries
with supported proxies. Native nd/νd remain unchanged. Small catalogue/source Abbe residuals are retained, including
NBFD11 and LAC8; they are not represented as exact rounding matches. OHARA S-prefix identities are preserved.
The runtime uses explicit spectral indices before its catalogue resolver. Thus BAFD8 can use the retained HOYA
coefficient-derived spectrum even though that label is absent from the current runtime catalogue.

Both resin films remain unmatched, despite the numerical proximity of some glass catalogues; a resin cannot be
identified as that glass from nd/νd. The final glass also remains unmatched. Its nearest audited LBC3N coordinate
has νd 63.72 rather than the source's 63.1, which is not treated as a proven match.
These approximations limit chromatic conclusions, particularly secondary spectrum. No APO claim is made.

## Focus Mechanism and Implemented Scope

The patent describes both G1 and G2 moving toward the object while their separation decreases (¶0005–0010).
The source table publishes d11 = 5.96 mm at infinity and 2.30 mm at OBJ = 50. The stop-to-G2 gap remains
4.69 mm. Sigma's catalogue independently calls the production design a floating-focus lens.

The implemented disposition is NO_INTERNAL_RECONSTRUCTION: infinity only. No var schedule or finiteConjugates entry
is present. The 0.18 m production minimum-focus metadata does not cause the optical train to move.
The source's near prescription is retained in the evidence rather than silently erased or converted into a certified state.

A separate, unreleased first-order calculation assumes that OBJ = 50 means 50 mm from the object to the first vertex.
Under that assumption, the source near spacing yields EFL 24.862310738 mm, image distance 48.134601016 mm,
magnification −0.383318827 and object-to-image distance 180.304601016 mm.
Relative to a common Gaussian image plane, G1/G2 would move objectward by 5.895445510/9.555445510 mm,
a ratio 0.616972333. The reference-plane assumption and active near image reconstruction require separate approval;
these numbers do not describe an implemented close endpoint. The prior 48.14 mm note is retained as an approximate
historical value, not a printed patent distance or a precisely reproduced rounded result.

At infinity the adopted image distance is 38.58 mm. Its +0.000844494 mm residual relative to the native Gaussian image
is preserved; the plane is not optimized for a chosen finite-aperture aberration metric.

## Aspherical Surfaces

The source equation in ¶0017 is

X(H) = (H²/R) / [1 + √(1 − A(H/R)²)] + A2 H² + A4 H⁴ + A6 H⁶ + A8 H⁸ + A10 H¹⁰.

The usual conic constant is K = A − 1. Both selected surfaces have A = 1.0 and A2 = 0, hence K = 0 exactly.
All distances are modeled in millimetres; coefficient Ap has units mm^(1−p). No scaling, sign reversal or coefficient
reassignment is applied. The source polynomial contains only even radial powers.

| Coefficient | s5A, front of R1 | s15A, rear of R2 |
| ----------- | ---------------: | ---------------: |
| K           |                0 |                0 |
| A4          |     +0.38440E−05 |     +0.13754E−04 |
| A6          |     +0.10581E−07 |     −0.36849E−08 |
| A8          |     −0.99037E−11 |     +0.26087E−11 |
| A10         |     +0.50550E−13 |     +0.39670E−14 |

At the inferred modeled radii 17 mm and 15 mm, the axial departures from the respective spherical bases are
+0.609277024 mm and +0.663296321 mm. Those are calculated model departures, not manufacturer clear-aperture measurements.
The different signs of the base curvatures mean that a positive polynomial departure does not have the same geometric
interpretation on the two surfaces. The patent discusses the aspheric shape in relation to spherical aberration and
astigmatism (¶0013); no single coefficient is assigned an independently measured aberration contribution.

## Conditional Expressions

| Source condition     | Calculated infinity value | Disposition                                                         |
| -------------------- | ------------------------: | ------------------------------------------------------------------- |
| 0 < abs(f/f1) < 0.25 |               0.082777265 | Inequality passes; printed 0.08 reproduced within 0.005             |
| −0.25 < f/f1 < 0     |              −0.082777265 | Inequality passes; printed −0.08 reproduced within 0.005            |
| 0.6 < D1c/f < 0.8    |               0.726612832 | Inequality passes; printed 0.72 is outside ±0.005 rounding interval |
| 1.15 < f2/f2a < 1.40 |               1.247434897 | Inequality passes; printed 1.25 reproduced within 0.005             |

The printed D1c/f value is not silently repaired. Using the hypothetical near EFL would give 0.721574120, but the
condition table does not expressly assign that state, so this is a possible explanation rather than an established correction.
The movement-ratio condition 0.5 < Δd1/Δd2 < 0.75 is reproduced by the unreleased close hypothesis, not by active focus motion.
The printed asphere-departure/Hmax values cannot be independently reproduced without a source-backed Hmax.
The chosen modeled radii do not supply missing historical evidence for those source conditions.

## Aperture, Geometry and Verification Limits

The source publishes neither physical clear radii nor a stop diameter. Modeled radii are inferred from Fig. 2 proportions
and constrained by exact ray and positive-clearance calculations; they are not dimensioned measurements of the patent figure.
The real current-project aperture calibration traces the native F1.85 entrance radius 6.672946628 mm to a physical iris
radius 13.512993540 mm. The paraxial-only stop estimate is 12.378810993 mm. These are different calibration methods;
the smaller radius is not a published alternative diaphragm.

The critical shared air band s18–s19 has an axial gap of 1.82 mm. Passing the exact native axial marginal ray requires
heights 11.343020980/11.354183435 mm there. Default 90% gap-sag allowance limits the shared radius to 11.188980100 mm,
which clips the full axial bundle. No default-compatible pair of rims can contain both necessary marginal heights.

The chosen inferred radii, rounded upward at 0.01 mm precision, are 11.35/11.36 mm. They require 92.652788567% shared-band
intrusion: the actual validator rejects 92.65% and accepts the local setting 92.66%. Positive physical clearance remains
0.133719248 mm. Both resin thickness minima remain positive, actual rim slopes satisfy the standard bound, and the actual
render diagnostics report zero hidden trim. This is a narrowly necessary per-lens allowance, not an engine change or
permission to allow physical overlap.

The complete sampled native axial bundle passes. Exact rays also verify a converged chief at the physical full-frame
corner radius 21.633307653 mm, requiring 41.787111879° in this model. This separately solved angle is not confused with
the source's 41.22° half-field or a paraxial sensor-angle proxy.

Across 13,878 ray samples, all aims converge and no unexplained numerical failure is recorded. Half- and quarter-radius
pupil bundles pass at all tested field fractions, including the solved sensor-corner field. Full-radius off-axis bundles
have geometric clipping; complete full-field/full-pupil containment therefore remains a failed comparison, not a success.
Sample counts are not area-weighted throughput or measured production vignetting. Five default off-axis display-fan
samples at 0.6 of the native half-field pass. No finite-focus image quality is certified.

## Sources

1. [Japan Patent Office, JP2001330771A, original DPMA-served publication](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2001330771A).
   PDF1: bibliographic wrapper; PDF3–4/printed2–3: claims, mechanism, d-line convention and equation;
   PDF5/printed4: Numerical Example2, prescription, aspheres, focus table and conditions;
   PDF7/printed6: Fig.2; PDF8–9: source aberration plots. The original publication remains byte-exact in the dossier.
2. [Sigma, September2004 lens catalogue, retained manufacturer document](https://w5.fuji.com.tw/pdf/SIGMA-lens-English.pdf).
   PDF5: exact 24mm EX DG ASPHERICAL MACRO product, construction and floating-focus account;
   PDF12: 10/9 construction, SLR mounts, 84.1° field, nine blades, 0.18m MOD and 1:2.7 magnification.
3. [HOYA optical glass catalogue](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf),
   [OHARA catalogue](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip),
   and retained HIKARI, Schott, Sumita and CDGM authoritative catalogues identified with exact URLs/hashes in evidence.
   The per-coordinate candidate lists and used dispersion coefficients are preserved for numerical replay.
