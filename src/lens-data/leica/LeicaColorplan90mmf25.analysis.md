# Leitz Colorplan 90mm f/2.5 (5-element) — Optical Design Analysis

## Catalog spectral model

The catalog preserves the source index and Abbe coordinates. The following names select compatible dispersion curves for simulation; they do not identify the historical supplier, melt, or annealing state. Catalog compatibility includes tolerances and is not an exact material identification.

| Element record | Current spectral annotation |
|---|---|
| 1 | N-SSK5 catalog equivalent (Schott; SSK5-type extra-dense barium crown, patent coordinate 658508; production melt unspecified) |
| 2 | N-SSK5 catalog equivalent (Schott; SSK5-type extra-dense barium crown, patent coordinate 658508; production melt unspecified) |
| 3 | SF5 catalog equivalent (Schott; dense flint, patent coordinate 673322; production melt unspecified) |
| 4 | SF4 catalog equivalent (Schott; dense flint, patent coordinate 755275; production melt unspecified) |
| 5 | K-SK18 catalog equivalent (Sumita; SK18-type dense barium crown, patent coordinate 639555; production melt unspecified) |

Five of five element records have compatible catalog spectral proxies. The patent prints e-line labels; the existing documented d-line interpretation remains a hypothesis. No production melt is identified.


## Patent Reference and Design Identification

**Patent:** US 3,076,383
**Application Number:** Ser. No. 45,351
**Filed:** July 26, 1960
**Priority:** Germany, July 29, 1959
**Granted:** February 5, 1963
**Inventors:** Walter Mandler, Erich Wagner (Midland, Ontario)
**Assignee:** Ernst Leitz GmbH (printed: Ernst Leitz G.m.b.H., Optische Werke, Wetzlar, Germany)
**Title:** High Aperture Objective for Photography and Projection
**Classification:** U.S. Cl. 88-57; 2 claims; 2 worked examples
**Embodiment analyzed:** Example 1 (Table 1 / FIG. 1; the same data are repeated in Claim 1)

US 3,076,383 describes a Gauss-type objective in which a first positive lens and a cemented meniscus component concave to the diaphragm precede the stop, and a single meniscus concave to the diaphragm and a second positive lens follow it (col. 1, ll. 10–20). The patent identifies two shortcomings of the known construction: a maximum relative aperture of about 1:2.8, and, in the one known variant usable at 1:2, a large zonal aberration together with a last-lens-to-image distance so short that the type had been limited to long focal lengths (col. 1, ll. 21–31). Its stated object is to reduce that zonal aberration while increasing the distance from the last lens to the image plane (col. 1, ll. 32–35). Example 1 is normalised to f = 1.00 with a 27° image angle and relative aperture 1:2.5; Example 2 (Table 2 / FIG. 2) is a separate 1:2.0, 45° design and is not modelled here.

Example 1 is correlated with the original five-element Leitz Colorplan 1:2.5/90 mm slide-projection lens on the following convergent evidence:

1. **Designers and date.** M. Cavina attributes the Colorplan 90 mm f/2.5 to Walter Mandler and Erich Wagner at Leitz Canada, Midland, computed in 1959; the patent names the same inventors at Midland with a July 1959 German priority.
2. **Introduction.** Cavina gives a 1960 release for the Prado 250/500 projectors, consistent with the priority date.
3. **Construction.** The original all-metal version is reported as five elements in four groups (Cavina; Delta Lenses V1), matching Table 1 and FIG. 1.
4. **Focal length, aperture and field.** Scaled uniformly by s = 90, Example 1 has EFL 89.80 mm, and its printed 27° image angle gives a paraxial image diagonal of 43.12 mm, against 43.27 mm for the 24 × 36 mm slide format; the printed aperture is 1:2.5.
5. **Mechanism.** The production lens is reported to have a fixed aperture and no focusing helicoid, which is consistent with a single fixed-diaphragm prescription.

The attribution is a research correlation, not a manufacturer confirmation. No Leitz catalogue, data sheet or other primary literature was located; the marketed 90 mm and 1:2.5 values rest on the barrel engraving as reported by several independent third parties. The production glass set and exact prescription may differ from the patent example. Third-party sources disagree on some production facts: Delta Lenses dates the first version from 1958, which precedes the patent's 1959 priority, while Cavina gives a 1960 release; the analysis uses the 1959 design date and the c. 1960 introduction. Delta Lenses describes versions from 1967 onward as six elements in four groups, whereas Cavina treats the Colorplan as a five-element design through the 1990s. The correlation here is restricted to the original five-element version. The original production lens was marked Leitz Wetzlar; the display name now uses Leitz and identifies the five-element version.

## Optical Architecture

Example 1 is a five-element, four-group Gauss derivative with a positive–negative | stop | negative–positive arrangement of components:

- **L1:** positive meniscus convex to the long conjugate.
- **D1:** cemented meniscus component consisting of L2 (plano-convex) and L3 (plano-concave), cemented at a flat junction r4, with its concave face r5 toward the stop.
- **Stop:** the diaphragm D lies in the r5–r6 air space.
- **L4:** single negative meniscus, concave toward the stop.
- **L5:** biconvex positive lens.

Compared with the classical six-element double-Gauss, the rear meniscus is a single element rather than a cemented pair. The patent calls this construction known and locates the invention in the numerical relations between the outer radii, the concave radii and the ray heights behind the diaphragm (see Conditional Expressions).

The patent's conditions keep corresponding radii on either side of the stop within 0.1 f of each other, but the power distribution is not symmetric. Treated as thick systems in air, the front group (L1 + D1) has f = +164.6 mm and the rear group (L4 + L5) has f = +86.8 mm; the rear group alone carries 1.03 times the system power. The front group is weak because D1 is net negative (f = −215.0 mm). The two stop-facing concave surfaces are the strongest in the system: r5 has a surface power of −0.0341 mm⁻¹ and r6 −0.0306 mm⁻¹, against +0.0228 mm⁻¹ for r3, the strongest positive surface. The air space between r5 and r6 therefore acts as a strongly negative air lens enclosing the stop.

At infinity the model has EFL 89.80 mm and a paraxial back focal distance of 52.00 mm (BFD/EFL = 0.579). The r1-vertex-to-image length is 111.04 mm, so the design is neither telephoto nor retrofocus. The front principal plane lies 34.53 mm and the rear principal plane 21.24 mm behind r1. The principal planes are therefore crossed, with the rear plane 13.28 mm ahead of the front one, and both lie ahead of the stop, which is 36.71 mm behind r1.

The patent is written in photographic orientation, with the long conjugate at the left and the "image-receiving plane" at a9. In projection the slide occupies that plane and the light path is reversed. The data file keeps the patent orientation.

## Element-by-Element Analysis

Element focal lengths below are standalone thick-lens values in air. Aberration contributions quoted in this section are surface Seidel coefficients (S_I spherical aberration, S_II coma, C_L axial colour) computed from the final data at f/2.5 and 13.5° half-field. With the convention used in the verifier, a positive S_I or C_L contribution is undercorrecting. S_II depends on the stop position, which is itself a FIG. 1 estimate; the signs of the stop-dependent totals were checked across the full estimated stop range. These coefficients describe where the model's third-order aberrations arise, not the patent's own reasoning, which the patent does not give surface by surface.

### L1 — Positive Meniscus, convex to the long conjugate

nd = 1.658, νd = 50.8. Glass: N-SSK5 (Schott) catalog equivalent — SSK5-type extra-dense barium crown. f = +126.2 mm.

L1 is the weaker of the patent's two positive lenses (L1 and L5) and supplies about a quarter of the positive power ahead of the stop. Its front surface r1 contributes undercorrected spherical aberration (S_I = +0.155), while the weakly curved rear surface r2 contributes almost none. Together with r9, r1 forms the pair of "outer radii of the positive lenses" governed by the patent's first condition. The model follows the patent front optical rims at 25.0/24.5 mm; this is not a claim that the normalized patent model fits the reported 46 mm production barrel.

### D1 — Cemented meniscus component (L2 + L3), concave toward the stop

**L2 — Plano-Convex.** nd = 1.658, νd = 50.8. Glass: N-SSK5 (Schott) catalog equivalent — SSK5-type extra-dense barium crown. f = +43.9 mm.

**L3 — Plano-Concave.** nd = 1.673, νd = 32.2. Glass: SF5 (Schott) catalog equivalent — dense flint. f = −29.3 mm.

The two halves are individually strong, but the cemented component is net negative (f = −215.0 mm). Its outer surface r3 is strongly convex (S_I = +0.123). The flat junction r4 is a crown-to-flint interface with an index step of only 0.015, so it adds little monochromatic aberration (S_I = −0.011) but contributes to axial colour (C_L = −0.031). The concave face r5 (R = 19.71 mm) is the most strongly powered surface in the lens. It supplies the second-largest overcorrecting spherical contribution (S_I = −0.206) and coma (S_II = −0.090) of opposite sign to the corresponding contribution of r6 on the other side of the stop.

Chromatically, L3 is the principal flint of the design: in the first-order axial-colour balance it supplies 86% of the flint contribution (C_L = −0.155 against +0.105 from L2). The patent's third condition governs r5 together with r6.

### L4 — Negative Meniscus, concave toward the stop

nd = 1.755, νd = 27.5. Glass: SF4 (Schott) catalog equivalent — dense flint. f = −132.9 mm.

L4 is only weakly negative as a whole, but its concave surface r6 (R = −24.65 mm) carries the largest single spherical-aberration contribution in the system (S_I = −0.441), and its rear surface r7 returns part of it (S_I = +0.094). Behind the stop, r6 produces coma (S_II = +0.232) opposite in sign to r5, and the two stop-facing surfaces together account for most of the system's negative Petzval contribution (see Aberration Correction Strategy). L4's net first-order axial-colour contribution is small (C_L = −0.026) because its two surfaces largely cancel. The paraxial marginal-ray height on r6 is 0.550 of its height on r1, which is the quantity limited by Claim 1. Cavina describes this element as a short flint; its printed coordinate 1.755/27.5 is an ordinary dense-flint (SF4-type) coordinate rather than a short-flint (KzF/KzFS) glass, and that characterisation is not adopted here.

### L5 — Biconvex Positive

nd = 1.639, νd = 55.5. Glass: K-SK18 (Sumita) catalog equivalent — SK18-type dense barium crown. f = +60.5 mm.

L5 is the stronger of the two air-spaced positive lenses (L2, cemented within D1, is stronger still). Nearly all its power is on the image-side surface r9 (R = −47.16 mm); the front surface r8 is almost flat (R = 204.03 mm) and contributes negligible spherical aberration. Surface r9 is the largest undercorrecting spherical source in the system (S_I = +0.327), which the stop-facing surfaces r5 and r6 balance. With νd = 55.5, L5 has the highest Abbe number in the lens.

## Glass Identification

The patent labels its index and dispersion columns as n_e and ν_e, and Claim 1 states that the data refer to the e-line (col. 2, ll. 14–15; col. 3, ll. 24–27). The printed pairs nevertheless coincide with d-line (nd/νd) coordinates of classic Schott types. For the equivalents used in the data file, each printed pair agrees with the catalogue nd to within 0.0005 and with νd to within 0.1. Read literally as e-line pairs, the nearest glass in the six catalogues searched (Schott, OHARA, HOYA, HIKARI, Sumita, CDGM) misses by 0.0020–0.0067 in index for every row. The five coordinates of Example 2 show the same pattern: every one lies closer to a d-line than to an e-line catalogue coordinate, and four lie within 0.0003 as d-line pairs.

The data file therefore stores the printed numbers unchanged as nd/νd with a d-line index reference. This is a documented, proposed correction of the patent's column label, not a change to any printed value, and it rests on catalogue evidence and on the index conventions of contemporaneous Leitz patents; the German priority document was not consulted. Those patents print the same SF4-type flint in both forms: US 2,975,673, by the same two inventors and labelled for the e-line, gives 1.76167 / 27.34, while US 2,995,980, labelled for the D line, gives 1.75520 / 27.5. Table 1's 1.755 / 27.5 for L4 corresponds to the d-line form. The monochromatic paraxial model is identical under either reading. Only the reference wavelength and the dispersion modelling depend on the choice.

| Coordinate | Classic type | Data-file equivalent | Elements | Role |
|---|---|---|---|---|
| 1.658 / 50.8 | SSK5 | N-SSK5 (Schott) | L1, L2 | Extra-dense barium crown; front positive lenses |
| 1.673 / 32.2 | SF5 | SF5 (Schott) | L3 | Dense flint; negative half of D1, principal flint |
| 1.755 / 27.5 | SF4 | SF4 (Schott) | L4 | Dense flint; rear negative meniscus |
| 1.639 / 55.5 | SK18 | K-SK18 (Sumita) | L5 | Dense barium crown; rear positive lens |

The names are coordinate-compatible catalogue equivalents, not identifications of the 1959 melts. N-SSK5 and K-SK18 stand in for the classic (pre-N) SSK5 and SK18, which are absent from the runtime catalogue. The palette is a conventional crown/flint arrangement with high-index crowns (nd 1.639–1.658) and two dense flints of increasing index toward the rear.

The patent publishes no line indices or partial dispersions, and the data file carries no nC, nF, ng or ΔPgF values. The chromatic figures in this document are therefore limited to a first-order model in which each glass is represented by nF − nC = (nd − 1)/νd. In that model the three crown elements contribute C_L = +0.188 and the two flints −0.181, so the net is only 3.4% of the crown contribution. The resulting paraxial axial colour is −0.16 mm (F focus nearer the lens than C). Lateral colour at 13.5° is 0.015 mm, or 0.07% of the image height. Spherochromatism, zonal colour balance and secondary spectrum cannot be established from these data, and no apochromatic or anomalous-dispersion property is claimed.

## Focus Mechanism

The lens has no internal focusing. As reported for the production lens, it has neither iris nor helicoid; it is focused by translating the whole lens in the projector mount, or in an adapter when used for photography. The data file models this as unit focus in which only the r9-to-image gap varies. The focus status is CONSTRAINED RECONSTRUCTION: internal spacings remain fixed, while the image gap is solved for a modeled finite conjugate.

| State | Object-to-image distance | r9-to-image gap | Extension | Magnification |
|---|---|---|---|---|
| Infinity | ∞ | 52.00 mm | — | 0 |
| Modelled near endpoint | 1.0 m | 61.79 mm | 9.79 mm | −0.109 |

The 1.0 m endpoint is a modelling choice made to exercise the viewer's focus control, not a manufacturer minimum distance; the projector or adapter sets the actual range. The close gap is the paraxial unit-focus conjugate of the fixed prescription.

## Aberration Correction Strategy

The patent states only aims and conditions, not a surface-by-surface mechanism. The following observations are computed from the final model and are offered as interpretation of the example, not as the inventors' stated rationale.

**Spherical aberration.** The undercorrecting contributions (S_I total +0.701, dominated by r9, r1 and r3) are opposed almost entirely by the two stop-facing concave surfaces, r5 and r6, which supply 98% of the overcorrecting total. The net third-order sum is 6% of the positive contributions and corresponds to a third-order longitudinal aberration of −0.53 mm at full aperture. Higher-order terms of the opposite sign bring the exact full-aperture marginal ray to −0.157 mm. The exact monochromatic profile is undercorrected at every zone, reaching its extreme of −0.198 mm at 0.84 of the aperture:

| Pupil fraction | 0.50 | 0.71 | 0.84 | 1.00 |
|---|---|---|---|---|
| Exact LSA (mm) | −0.112 | −0.180 | −0.198 | −0.157 |

This zonal residual, of roughly 0.04 mm relative to the margin, is the kind of aberration the patent sought to reduce. The patent gives no prescription for the prior-art objectives, so no quantitative comparison with them is possible here.

**Petzval sum and field.** The Petzval sum is 0.00239 mm⁻¹, a Petzval radius of −419 mm (about −4.7 f). The negative surface terms cancel 94% of the positive ones, and r5 and r6 alone provide 93% of the negative terms. At 13.5° the Petzval surface lies 0.555 mm from the paraxial image plane, toward the lens. The exact tangential and sagittal image shells, traced by the Coddington equations along real chief rays, both lie between that surface and the image plane:

| Half-field | Tangential | Sagittal | Distortion |
|---|---|---|---|
| 8.1° | −0.081 mm | −0.139 mm | −0.05% |
| 9.55° | −0.117 mm | −0.186 mm | −0.08% |
| 13.5° | −0.274 mm | −0.314 mm | −0.26% |

The 9.55° row is 0.707 of the 13.5° half-field angle. Field positions are measured from the paraxial infinity image plane; the modelled stop was used for all off-axis traces.

**Coma and distortion.** Coma is balanced largely across the stop: r5 and r6 contribute S_II of opposite sign (−0.090 and +0.232), and the system total (−0.0034) is small by comparison. The total keeps its sign but ranges from −0.0014 to −0.0055 over the uncertainty in the stop position. Distortion is slight barrel, reaching −0.26% at the patent's full 13.5° half-field.

## Conditional Expressions

The patent's conditions are stated as fractions of the focal length. Claim 1 carries all four; the specification adds two preferred upper limits (col. 1, ll. 36–58). Values below use the printed normalisation (f = 1.00). Normalising instead by the computed EFL changes them by less than 0.003 and alters no conclusion.

| Condition | Quantity | Requirement | Example 1 |
|---|---|---|---|
| PC1 | \|r1\| + \|r9\|; difference | ≥ 1.00; ≤ 0.10 | 1.128; 0.080 |
| PC2 | \|r3\| + \|r7\|; difference | ≥ 0.70 (preferred ≤ 2.00); ≤ 0.10 | 0.7289; 0.0867 |
| PC3 | \|r5\| + \|r6\|; difference | ≥ 0.45 (preferred ≤ 1.00); ≤ 0.10 | 0.4929; 0.0549 |
| PC4 | Marginal-ray height on the concave surface of the single meniscus / height on r1 | 0.5–0.6 | 0.550 (paraxial) |

The first three conditions constrain corresponding outer and concave radii on either side of the stop to near-equal magnitudes, which is the formal content of the design's near-symmetry about the diaphragm. Paraxially, the height ratio also lies within 0.5–0.6 on every surface behind the stop (0.550–0.593).

Two readings of PC4 must be distinguished:

- **Claim 1 wording** limits only the concave surface of the single meniscus, r6. That surface satisfies the condition both paraxially and for the real f/2.5 marginal ray (0.561).
- **Specification wording** (col. 1, ll. 49–53) refers to the lenses following the diaphragm generally. This broader form holds paraxially but not for real full-aperture rays. At f/2.5 the exact ratios on r7, r8 and r9 are 0.615, 0.613 and 0.606.

The patent specifies no aperture height for the condition, and the claim itself is satisfied.

## Verification Summary

The data file is a uniform scaling by s = 90 of the Table 1 prescription. It is all-spherical, so no coefficient conversion is involved. Every computed value in this document was recomputed from the final data file. First-order quantities were reproduced by two independent paraxial methods (y–nu trace and ABCD matrices), and exact values by meridional ray tracing, with two separately implemented tracers cross-checked on the axial marginal ray. The third-order sums were checked against exact small-aperture and small-field traces for spherical aberration, coma, distortion and field curvature. The primary-colour sums were checked against finite-difference paraxial traces.

| Quantity | Patent | Model | Note |
|---|---|---|---|
| Focal length | 1.00 (= 90 mm at s = 90) | 89.80 mm (0.99779 normalised) | −0.22%; within the ±0.0078 worst-case bound implied by the table's rounding |
| Back distance a9 | 0.5790 (52.11 mm) | 52.00 mm paraxial BFD (0.5791 of EFL) | the data gap is the computed BFD; the 0.105 mm difference is source precision |
| Relative aperture | 1:2.5 | f/2.5 | calibration: the entrance-pupil diameter (35.92 mm) is set from the printed value |
| Image angle | 27° | 13.5° half-field; 43.12 mm diagonal | 24 × 36 mm diagonal is 43.27 mm |

The following are modelling inferences rather than patent data:

- **r8 transcription.** Table 1 prints r8 as "+2,267" and Claim 1 as "+2.267"; the comma is read as a decimal point.
- **Stop.** The patent does not tabulate the stop position. The modelled stop is placed 9.26 mm behind r5, following the diaphragm drawn in FIG. 1. Its semi-diameter (10.746 mm) is the real f/2.5 marginal-ray height at that plane. It is therefore a calibration, not independent evidence of the diaphragm size.
- **Entrance pupil.** The entrance pupil lies 49.13 mm behind r1.
- **Semi-diameters.** The patent does not publish semi-diameters. They are inferred from the optical rims of FIG. 1, scaled by the axial vertex span. The patent silhouette takes precedence over the earlier ray-envelope estimate and reported production barrel diameter.
- **Vignetting.** Full-aperture off-axis bundles are vignetted in the model, as expected for the fixed-diaphragm production barrel.
- **Omitted elements.** No cover glass, filter or plate appears in the source, and none is modelled.

## Design Heritage and Context

US 3,076,383 belongs to the Gauss-type work of Walter Mandler and Erich Wagner at Leitz Canada in Midland at the end of the 1950s. A contemporaneous patent by the same inventors, US 2,975,673 (German priority August 30, 1958; assigned to Ernst Leitz Canada Ltd.), describes a different seven-element f/1.4 Gauss variant aimed at the sagittal field zone. The Colorplan patent instead works within the five-element form in which the rear meniscus is a single lens, a form it treats as already known. Against the 1:2.8 limit it attributes to the known construction, its examples reach 1:2.5 (Example 1) and 1:2.0 (Example 2) with a longer back distance. The only reference cited on the patent's face is US 2,818,776 (Hayes et al., January 7, 1958); its content was not reviewed for this analysis.

Cavina reports that the Colorplan served as the standard lens of Leitz slide projectors from 1960 into the 1990s. He also reports that the first Elmarit-R 90 mm f/2.8 of 1964 uses a conceptually identical optical scheme, and that the original project included a companion 50 mm f/2.8. These are secondary-source statements that were not verified against Leitz patents for those lenses. The Elmarit-R should not be confused with the rangefinder Elmarit 90 mm f/2.8 of 1959, a separate five-element triplet derivative that secondary sources associate with the Zimmermann and Knetsch triplet patent US 2,995,980. Later Colorplan variants — the CF (curved-field) version of the early 1980s and the Super-Colorplan — are distinct recomputations outside the scope of this example.

## Sources

- W. Mandler and E. Wagner, *High Aperture Objective for Photography and Projection*, US Patent 3,076,383, granted February 5, 1963; filed July 26, 1960, Ser. No. 45,351; priority Germany, July 29, 1959; assigned to Ernst Leitz G.m.b.H., Wetzlar. Column 1: invention statement, prior art and conditions. Column 2: symbol definitions, Table 1 and Table 2. Column 3: Claim 1 with Example 1 data. Column 4: Claim 2 and the cited reference.
- W. Mandler and E. Wagner, *High Aperture Photographic Objective*, US Patent 2,975,673, granted March 21, 1961; assigned to Ernst Leitz Canada Ltd.; indices given for the e-line. https://patents.google.com/patent/US2975673A/en
- M. Cavina, "Leitz Colorplan 90mm f/2,5 Made in Germany e Made in Portugal: analisi di due gemelli che pari non sono," August 8, 2009. http://www.marcocavina.com/articoli_fotografici/Leitz_Colorplan_90_Germany_Portugal/00_pag.htm
- Delta Lenses, "Leitz Colorplan 90/2.5 [V1]" and "Leica Projector Lenses (The Colorplan Story)." https://deltalenses.com/product/leitz-wetzlar-colorplan-p-1-90-2-5/ ; https://deltalenses.com/leica-projector-lenses/
- O. Zimmermann and G. Knetsch, *Triplet Objective for Optical Apparatus*, US Patent 2,995,980, granted August 15, 1961; assigned to Ernst Leitz G.m.b.H., Wetzlar. Refractive indices given for the D line. https://patents.google.com/patent/US2995980A/en
- allphotolenses.com, "Leitz Wetzlar Colorplan 90 mm f/2.5." https://allphotolenses.com/lenses/item/c_4127.html
- Leica Wiki (L-Camera-Forum), "Otto Zimmermann" and "Walter Mandler" patent lists. https://wiki.l-camera-forum.com/leica-wiki.en/index.php/Otto_Zimmermann ; https://wiki.l-camera-forum.com/leica-wiki.en/index.php/Walter_Mandler
- Glass catalogues: SCHOTT, OHARA, HOYA, HIKARI, Sumita and CDGM data as bundled in the opticalglass Python package, version 2.0.2.
