# Canon EF 24–70mm f/2.8L USM — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2014-41222 A (特開2014-41222)  
**Application Number:** 特願2012-182852 (P2012-182852)  
**Filed:** 2012-08-22  
**Published:** 2014-03-06  
**Inventor:** Endo Hiroshi (遠藤 宏志)  
**Applicant:** Canon Inc. (キヤノン株式会社)  
**Title:** Zoom Lens (ズームレンズ)  
**Classification:** G02B 15/20; G02B 13/18  
**Claims:** 5  
**Worked examples:** 2  
**Example details:** 数値実施例1

The prescription transcribed here is Numerical Example 1 of JP 2014-41222 A. It is paired in this catalog with the Canon EF 24–70mm f/2.8L USM, the first-generation large-aperture EF standard zoom marketed in 2002. This is a correspondence by optical architecture and specification class, not a claim that the 2012 patent filing is the original 2002 production design file.

Convergent evidence linking Numerical Example 1 to the first-generation EF 24–70mm f/2.8L USM is as follows.

1. **Element and group count.** Numerical Example 1 contains 16 glass elements in 13 air-spaced groups, organized into six zoom-moving optical units. The Canon Camera Museum specification for the EF 24–70mm f/2.8L USM gives 16 elements in 13 groups, while the later Mark II lens is an 18-element / 13-group redesign.
2. **Aspherical and UD count.** The example has two aspherical glass surfaces, on the front element and the final rear element. It also has one low-dispersion glass coordinate at surface 22. Canon's own Mark II product page describes the predecessor EF 24–70mm f/2.8L USM as using two aspherical lens elements and one UD lens element.
3. **Focal length, format, and speed.** The patent example gives f = 24.90 / 35.13 / 68.14 mm, Fno = 2.92 / 2.92 / 2.91, and image height = 21.64 mm. The image height is the 135 full-frame semi-diagonal, and the design F-number corresponds to the marketed f/2.8 class.
4. **Field.** The patent half-angles are 40.98° / 31.63° / 17.62°, giving a full diagonal field of about 82.0° at the wide end and 35.2° at the long end. The production lens is specified in the same 84° to 34° class.
5. **Back focus and mount class.** The patent holds BF = 38.47 mm at all zoom positions, consistent with the long back-focus requirement of an EF-mount SLR standard zoom.
6. **Mechanical length behavior.** The patent's first-surface-to-image length is longest at wide angle, 199.13 mm at 24.90 mm and 166.55 mm at the long setting. That reverse-extension behavior matches the known mechanical character of the first-generation EF 24–70mm f/2.8L USM.
7. **Close focus class.** Canon specifies 0.38 m closest focusing distance and 0.29× maximum magnification for the production lens. The patent states that Numerical Example 1 focuses internally by translating the fifth group toward the image (¶0058), which is consistent with the production lens's close-focus class, though the patent does not publish a near-focus prescription.

Two limits are therefore kept explicit. First, the patent example reaches 68.14 mm, not a full 70 mm, and its endpoints are not a uniform rescaling of a 24–70 mm production lens. Second, the patent was filed in 2012, after the first-generation lens had already been in the market for roughly a decade. The example should be read as a Canon standard-zoom architecture used to demonstrate a glass-selection invention, not as a literal release-era production drawing.

## Optical Architecture

Numerical Example 1 is a six-unit retrofocus standard zoom with group powers, from object to image, of **negative – positive – negative – positive – negative – positive**. The patent states this power sequence directly in ¶0035, and the group-data table gives f1 = −36.22 mm, f2 = +32.42 mm, f3 = −43.69 mm, f4 = +38.40 mm, f5 = −34.82 mm, and f6 = +64.17 mm. A generic descriptive passage near ¶0025 is inconsistent with these signs; the numerical group-data table and the later example-specific text are controlling.

The design is a negative-lead, full-frame SLR zoom. At the wide end, the negative first group expands the field and preserves the 38.47 mm back focus needed for mirror clearance. The positive second group supplies most of the zooming action. The third group contains the flare-cutting sub-stop SSP and the aperture stop SP, both moving with the group during zooming. The fourth group is the principal rear positive relay and carries the strongest chromatic-correction doublet. The fifth group is the internal focus group. The sixth group is fixed relative to the image plane and carries the final aspherical field-correction surface.

The zoom kinematics from wide to tele are stated in ¶0033 and reproduced by the spacing table in ¶0065. L1 moves toward the image. L2, L3, L4, and L5 move toward the object. L6 remains fixed relative to the image plane. In spacing terms, d6 decreases from 55.36 to 3.78 mm, d13 increases from 2.90 to 20.41 mm, d20 decreases from 19.24 to 1.73 mm, d25 increases from 1.19 to 10.91 mm, and d29 increases from 3.99 to 13.28 mm.

The distinguishing feature is material selection rather than a novel zoom skeleton. The patent's background identifies earlier use of organic anomalous-dispersion material for color correction and notes that resin has much larger temperature-dependent refractive-index change than optical glass (¶0008–0012). The invention replaces that resin role with two glass elements satisfying the patent's high-index, high-dispersion, anomalous-partial-dispersion conditions.

## Element-by-Element Analysis

Standalone element focal lengths below are thick-lens values in air, computed from the patent radii, thicknesses, and d-line refractive indices. Surface numbers refer to Numerical Example 1. Signs follow the patent convention: R > 0 means the center of curvature lies to the image side.

### L11 — Negative Meniscus, convex to object (front asphere)

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (Ohara) (qualified catalog spectral proxy; source supplier/melt unspecified). f = −59.9 mm.

Surfaces 1A(R = 132.285)–2(R = 34.010). Both radii are positive, giving a negative meniscus turned convex to the object. The first surface is aspherical. This element establishes the retrofocus front and is the element called fG1 in conditional expression (13) (¶0051, ¶0057). S-LAH66 is better described here as a high-index lanthanum glass on the dense-flint side of the crown/flint boundary, not as a conventional crown, since νd = 49.6 lies just below 50.

### L12 — Biconcave Negative

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (Ohara) (qualified catalog spectral proxy; source supplier/melt unspecified). f = −57.5 mm.

Surfaces 3(R = −164.261)–4(R = 61.319). This biconcave negative singlet supplies much of the first group's diverging power. Its high index permits the front group to remain compact while avoiding still stronger surface curvatures.

### L13 — Positive Meniscus, convex to object (anomalous-dispersion glass)

nd = 1.84265, νd = 25.9, θgF = 0.60572. Glass: unmatched source-defined anomalous glass; supplier and chemistry unresolved. f = +115.4 mm.

Surfaces 5(R = 60.454)–6(R = 153.708). This is the image-side positive element of the negative first group described in ¶0039 and ¶0041. Its refractive power is weak, but its high dispersion and positive anomalous partial dispersion make it a lateral-color corrector in the retrofocus front group. Conditional expression (4) controls its strength relative to the first group.

### L21 + L22 — Cemented Doublet, negative meniscus + biconvex positive

**L21:** nd = 1.80518, νd = 25.4. Glass: S-TIH6 (Ohara) / SF6 class (qualified catalog spectral proxy; source supplier/melt unspecified). f = −67.0 mm.
**L22:** nd = 1.77250, νd = 49.6. Glass: S-LAH66 (Ohara) (qualified catalog spectral proxy; source supplier/melt unspecified). f = +48.2 mm.

Surfaces 7(R = 2038.158)–9(R = −120.819). The first surface is nearly plano, followed by the cemented interface at R = 52.562 and the rear biconvex exit surface. The pair is a net positive achromatizing component in the second group. The dense-flint negative member and high-index lanthanum positive member balance longitudinal color in the variator while retaining positive net power.

### L23 — Biconvex Positive

nd = 1.83481, νd = 42.7. Glass: S-LAH55V (Ohara) (qualified catalog spectral proxy; source supplier/melt unspecified). f = +100.3 mm.

Surfaces 10(R = 94.247)–11(R = −735.401). This is a moderate positive singlet with a weak rear surface. S-LAH55V is a dense lanthanum flint by Abbe number, used for compact positive power without excessive curvature.

### L24 — Positive Meniscus, convex to object

nd = 1.69680, νd = 55.5. Glass: S-LAL14 (Ohara) / N-LAK14 class (qualified catalog spectral proxy; source supplier/melt unspecified). f = +65.7 mm.

Surfaces 12(R = 44.815)–13(R = 2017.457). This rear element of the second group is a positive meniscus with a nearly flat rear surface. It completes the net +32.42 mm focal length of the principal variator.

### L31 — Biconcave Negative

nd = 1.88300, νd = 40.8. Glass: S-LAH58 (Ohara) (qualified catalog spectral proxy; source supplier/melt unspecified). f = −36.8 mm.

Surfaces 15(R = −118.448)–16(R = 44.969). The element sits immediately behind SSP, the flare-cutting sub-stop. Its very high index provides strong negative power in the stop group while keeping the surface curvatures moderate.

### L32 + L33 — Cemented Doublet, biconcave negative + biconvex positive

**L32:** nd = 1.72000, νd = 50.2. Glass: S-LAL10 (Ohara) (qualified catalog spectral proxy; source supplier/melt unspecified). f = −36.4 mm.
**L33:** nd = 1.80518, νd = 25.4. Glass: S-TIH6 (Ohara) / SF6 class (qualified catalog spectral proxy; source supplier/melt unspecified). f = +33.1 mm.

Surfaces 17(R = −123.350)–19(R = −122.441). This cemented pair lies immediately in front of the aperture stop. It is near-afocal as a standalone cemented component, but it balances chromatic and spherical aberration in the negative third group at a high-leverage stop-adjacent location.

### L41 + L42 — Cemented Doublet, anomalous negative + ED positive

**L41:** nd = 1.84265, νd = 25.9, θgF = 0.60572. Glass: unmatched source-defined anomalous glass; supplier and chemistry unresolved. f = −39.4 mm.
**L42:** nd = 1.49700, νd = 81.5, θgF = 0.53859. Glass: S-FPL51 (Ohara) / FCD1 class (qualified catalog spectral proxy; source supplier/melt unspecified). f = +35.9 mm.

Surfaces 21(R = 100.783)–23(R = −57.671). The negative anomalous flint is the most object-side element of the positive fourth group, as described in ¶0042. It is cemented to a strongly anomalous, low-dispersion positive glass; the chemical family is unspecified. The patent explicitly links this negative special-glass element to lateral chromatic-aberration correction through conditional expression (5) (¶0046). The ED element supplies the conventional low-dispersion partner needed for axial color and secondary spectrum.

### L43 — Biconvex Positive

nd = 1.52542, νd = 64.5. Glass: PC3 (HOYA compatible spectral proxy; source-published C/F/g indices authoritative; supplier, melt and chemistry unspecified). f = +44.6 mm.

Surfaces 24(R = 30.541)–25(R = −95.184). This element carries most of the remaining positive power of the fourth group. The existing HOYA PC3 curve is compatible with the published pair, but it is only a spectral proxy. Its coefficient-derived line indices are approximate; the source-published C/F/g indices retain runtime precedence.

### L51 — Plano-Convex Positive, convex to image

nd = 1.84666, νd = 23.8. Glass: S-TIH53 (Ohara) / SF57 class (qualified catalog spectral proxy; source supplier/melt unspecified). f = +56.6 mm.

Surfaces 26(R = 3554.746)–27(R = −48.578). The front surface is nearly plano and the rear surface is strongly convex toward the image. This element is part of the fifth group, which the patent identifies as the internal focusing group in ¶0058.

### L52 — Biconcave Negative

nd = 1.83400, νd = 37.2. Glass: S-LAH60 (Ohara) (qualified catalog spectral proxy; source supplier/melt unspecified). f = −21.2 mm.

Surfaces 28(R = −54.737)–29(R = 26.616). This is the dominant negative element of the focus group. Together with L51 it makes L5 a compact net negative unit, f5 = −34.82 mm.

### L6 — Biconvex Positive (rear asphere)

nd = 1.58313, νd = 59.4. Glass: S-BAL42 (Ohara) / D-ZK2 class (qualified catalog spectral proxy; source supplier/melt unspecified). f = +64.2 mm.

Surfaces 30(R = 51.549)–31A(R = −129.121). This final positive element is fixed relative to the image plane and has an aspherical image-side surface. Its role is field flattening, exit-pupil conditioning, and residual high-order aberration trimming after the zoom and focus groups.

## Glass Identification and Selection

The patent publishes nd, ng, nC, and nF for each glass in ¶0065. Fourteen of the sixteen modeled media have compatible catalog curves. The remaining unmatched coordinate class occupies L13 and L41, which share one source-defined anomalous glass. L43 uses the existing compatible PC3 curve. Compatible catalog names qualify spectral proxies and do not establish a Japanese supplier preference or historical vendor identity.

| Element(s)    |      nd |   νd |                     θgF / ΔPgF | Glass assignment                                          | Role                                                                           |
| ------------- | ------: | ---: | -----------------------------: | --------------------------------------------------------- | ------------------------------------------------------------------------------ |
| L11, L12, L22 | 1.77250 | 49.6 |   patent line indices supplied | S-LAH66 (Ohara)                                           | High-index lanthanum glass, dense-flint side; front group and variator doublet |
| L13, L41      | 1.84265 | 25.9 | θgF = 0.60572; ΔPgF ≈ +0.00548 | Unmatched patent-defined high-index anomalous short flint | Claimed special glass; front positive and rear negative chromatic correctors   |
| L21, L33      | 1.80518 | 25.4 |   patent line indices supplied | S-TIH6 (Ohara) / SF6 class                                | Dense flint in cemented achromatizing pairs                                    |
| L23           | 1.83481 | 42.7 |   patent line indices supplied | S-LAH55V (Ohara)                                          | Dense lanthanum flint in variator                                              |
| L24           | 1.69680 | 55.5 |   patent line indices supplied | S-LAL14 (Ohara) / N-LAK14 class                           | Lanthanum crown positive variator element                                      |
| L31           | 1.88300 | 40.8 |   patent line indices supplied | S-LAH58 (Ohara)                                           | High-index lanthanum flint stop-group negative                                 |
| L32           | 1.72000 | 50.2 |   patent line indices supplied | S-LAL10 (Ohara)                                           | Lanthanum crown-side member in stop-group doublet                              |
| L42           | 1.49700 | 81.5 | θgF = 0.53859; ΔPgF ≈ +0.03187 | S-FPL51 (Ohara) / FCD1 class                              | Low-dispersion positive element; chemistry unspecified                         |
| L43           | 1.52542 | 64.5 |   patent line indices supplied | PC3 (HOYA qualified proxy)                                | Rear positive-power element                                                    |
| L51           | 1.84666 | 23.8 |   patent line indices supplied | S-TIH53 (Ohara) / SF57 class                              | Dense flint in focus group                                                     |
| L52           | 1.83400 | 37.2 |   patent line indices supplied | S-LAH60 (Ohara)                                           | High-index lanthanum flint focus-group negative                                |
| L6            | 1.58313 | 59.4 |   patent line indices supplied | S-BAL42 (Ohara) / D-ZK2 class                             | Final aspherical barium-crown field element                                    |

The original publishes all sixteen `nd/ng/nC/nF` rows on PDF page 11, in addition to the index/Abbe prescription on pages 9–10. Paragraph 0062 on page 9 explicitly defines the d-line reference. All forty-eight C/F/g values are retained as genuine published evidence, including the otherwise unmatched media; none is removed as a catalog override. The source-derived θgF and ΔPgF values are calculations from those printed rows. The fourteen compatible catalog curves are qualified spectral proxies; complete published line-index data remain authoritative. They do not identify historical supplier, melt or chemistry. L13 and L41 remain catalog-unmatched despite their published spectral coordinates. The class and chemistry descriptions in the table are catalog interpretations, not source material identifications.

The previous draft overused the term “crown” for S-LAH-family glasses. That is too loose here. By the usual practical boundary, νd values below about 50 belong to flint territory, even when the family name includes lanthanum. S-LAH66 at νd = 49.6 is borderline but still on the dense-flint side; S-LAH55V, S-LAH58, and S-LAH60 are unambiguously flints.

The special νd = 25.9 glass is not assigned a catalog name. Its published indices satisfy the patent's claimed material conditions, but public catalog matches are not close enough for a catalog assignment. L43 has a compatible PC3 proxy, with approximate catalog Abbe and partial-dispersion agreement rather than an identified historical material.

## Original-figure heights and retained geometry

The matching wide-infinity section is Figure 1 on PDF page 14. It embeds a 1072 × 512 JPEG at approximately 200 ppi; a larger crop only magnifies those pixels. About 772 native pixels over the 160.66 mm first-to-last-vertex span gives approximately 4.80 px/mm. Stroke/JPEG ambiguity is about ±1–2 native pixels, with practical semi-height uncertainty around ±0.5 mm. The source tables publish no clear diameters. Leaders, zoom arrows, group brackets and the long SSP/SP callout strokes are excluded from rim measurement.

The front asphere now reaches 29.2 mm, and its rear clear cap is 24.0 mm with a separately resolved outer shoulder at 29.2 mm. The second element's rear clear cap remains 22.5 mm while its resolved shoulder extends to 23.8 mm. Other adopted clear heights follow the source outlines: S6 22.5 mm; G2 S7–S13 18.8 mm; S15 and the S17–S19 stop-group doublet 13.0 mm; G4 S21–S25 13.4 mm; focus group S26–S29 12.6 mm; and both final-element faces 18.5 mm. Every element, concave end and all three cemented interfaces were inspected. No hybrid/resin layer, separate cement medium, filter or camera-side plate is tabulated.

Two literal source-height trials fail the existing air-gap guard: S3 at 23.8 mm makes S2→S3 intrusion 11.45 mm against 10.818 mm allowed, while S16 at 13.0 mm makes S16→S17 intrusion 2.61 mm against 2.205 mm allowed. Existing curved caps 23.0 and 11.8 mm remain, with the residual schematic mismatch explicit. No new shoulder is invented on S16 merely to disguise that constraint. All source R/d and both aspheres remain unchanged; no opaque cemented-interface land, inferred concave cut or tolerance relaxation is introduced.

SSP has no printed clear diameter. Its inferred radius changes only from 12.4 to 12.5 mm, the marginal-beam minimum rounded up, removing the small tele-infinity clip. This does not measure the long callout as an optical rim, move the flare stop, or change the independent aperture-stop authority. Source F-numbers are 2.92/2.92/2.91; the existing scalar 2.92 remains an explicit 0.34% tele approximation rather than a physical source iris schedule.

Actual SVGs at wide, middle and tele were compared with the native section. The sampled zoom/focus geometries have finite, connected paths and no hidden renderer trimming. The source-height changes redistribute off-axis vignetting rather than clearing every pupil ray: with 193 circular-pupil samples at infinity, corner passing counts change 108→93 wide, 93→129 middle and 83→119 tele. All sampled corner chiefs still reach the full-frame corner; that is distinct from full-pupil illumination and from production correlation.

## Focus Mechanism

Numerical Example 1 focuses internally by moving the fifth group toward the image when focusing from infinity to close distance (¶0058). The patent states the reason explicitly: moving the smaller fifth group enables faster autofocus and a more compact mechanism than focusing by the large first group.

The patent publishes only infinity-focus spacings. Therefore the `.data.ts` companion keeps the patent's zoom spacings as the infinity state and adds a modeled close-focus state by translating L5 imageward while conserving d25 + d29 at each zoom position. The close state is paraxially solved to Canon's 0.38 m official closest focusing distance, measured from the image plane. These close-focus spacings should be read as a visualization and paraxial consistency model, not as patent-published mechanical travel.

| Zoom position | d25 infinity | d25 close model | d29 infinity | d29 close model | L5 imageward travel |
| ------------- | -----------: | --------------: | -----------: | --------------: | ------------------: |
| 24.90 mm      |         1.19 |          2.3838 |         3.99 |          2.7962 |              1.1938 |
| 35.13 mm      |         3.58 |          5.6647 |         9.73 |          7.6453 |              2.0847 |
| 68.14 mm      |        10.91 |         18.3469 |        13.28 |          5.8431 |              7.4369 |

Three published infinity stations supply the quantitative source configurations. Intermediate zoom positions interpolate the gaps and are illustrative rather than focus-preserving. In a 65-position first-order sweep, normalized zoom 0.796875 has actual paraxial EFL 48.68070 mm versus displayed 54.72969 mm, with BF 29.56846 mm against the retained 38.47 mm image gap (−8.90154 mm defocus). The three source stations instead give BF 38.46387/38.45092/38.45450 mm from the rounded arrays. The source supplies no intermediate cam or finite-focus table that would establish a replacement trajectory.

All sixty-five sampled infinity aperture and corner-field checks pass their existing census thresholds. With the source-based heights and the narrow SSP clearance correction, all 441 real working marginal-ray cases across twenty-one zoom positions, three focus positions and seven aperture settings trace; the baseline had three wide-open cases clipped at SSP or S19. These sampled centered-runtime checks do not certify continuous focus, illumination at all off-axis pupil coordinates or historical production performance.

## Aspherical Surfaces

The design has two aspherical surfaces: surface 1A on the object-side face of L11 and surface 31A on the image-side face of L6. The patent's equation in ¶0063 is the standard even-order conic form:

$$
x = \frac{h^2/R}{1 + \sqrt{1 - (1+k)(h/R)^2}} + C_4 h^4 + C_6 h^6 + C_8 h^8 + C_{10}h^{10} + C_{12}h^{12}.
$$

Here k is the standard conic constant; k = 0 is spherical. Both patent aspheres have k = 0, so their asphericity is entirely polynomial departure from a spherical base.

| Surface | Element / face  |   k |           A4 |           A6 |           A8 |          A10 |          A12 |
| ------- | --------------- | --: | -----------: | -----------: | -----------: | -----------: | -----------: |
| 1A      | L11 object face |   0 | +1.19505e-06 | +4.93803e-10 | −1.21623e-12 | +1.13356e-15 | −3.85068e-19 |
| 31A     | L6 image face   |   0 | +2.65122e-07 | −9.50226e-09 | +6.16123e-11 | −1.95942e-13 | +2.35213e-16 |

At the semi-diameters used in the companion data file, surface 1A has a polynomial departure of +0.8950 mm at h = 29.2 mm. Surface 31A has polynomial departure of -0.0466 mm at h = 18.5 mm. The front asphere therefore carries the stronger wide-angle distortion and oblique-aberration correction burden, while the rear asphere is a lower-amplitude field and high-order residual trim.

## Chromatic Correction Strategy

The patent is primarily a chromatic-correction material invention. Its background states that compact zoom lenses have difficulty controlling axial and lateral color over the full imaging wavelength range and that prior use of organic anomalous-dispersion material caused environmental and manufacturing problems because resin has much larger dn/dT than glass (¶0007–0013).

The invention requires glass satisfying the following material conditions (¶0014 and Claim 1):

- 0.838 < θgF − (3.0e−4 · νd² − 1.84e−2 · νd) < 0.884
- 15 < νd < 27
- 1.7 < nd

The special glass used in L13 and L41 has nd = 1.84265, νd = 25.9, and θgF = 0.60572, so condition (1) evaluates to 0.88103. It is a high-index, high-dispersion, anomalous short flint. The invention uses it in two different signs: as a weak positive element in the negative first group and as a negative element in the positive fourth group. That placement lets the design attack lateral chromatic aberration at both the retrofocus front and the rear relay.

The L41/L42 doublet is the strongest chromatic node. L41 supplies high dispersion and mild positive anomalous partial dispersion; L42 supplies low dispersion and strong positive anomalous partial dispersion as a low-dispersion positive glass. The pair is not an apochromatic claim, but the patent-published line indices support a secondary-spectrum correction strategy beyond a simple two-glass achromat.

## Conditional Expressions

The patent states thirteen conditional expressions and tabulates their values for both examples in Table 1. Two typographic issues are preserved in the patent text: condition (3) sometimes renders as “7 < nd,” but Claim 1 and the tabulated values require “1.7 < nd”; condition (7) renders as “2 < ... < 0.35,” but the table and both examples require a lower bound of 0.2. The computed values below use the corrected, internally consistent forms.

|   # | Expression                                      | Quantity      | Computed | Patent Table 1 |
| --: | ----------------------------------------------- | ------------- | -------: | -------------: |
|   1 | 0.838 < θgF − (3.0e−4·νd² − 1.84e−2·νd) < 0.884 | special glass |    0.881 |          0.881 |
|   2 | 15 < νd < 27                                    | special glass |    25.90 |           25.9 |
|   3 | 1.7 < nd                                        | special glass |    1.843 |          1.843 |
|   4 | −3.5 < fFP/f1 < −1.5                            | L13 vs. L1    |   −3.188 |         −3.187 |
|   5 | −2 < fRN/fb < −0.8                              | L41 vs. L4    |   −1.026 |         −1.026 |
|   6 | 0.6 < (D1w − D1t)/ft < 0.8                      | d6 swing      |    0.757 |          0.757 |
|   7 | 0.2 < (Db−1w − Db−1t)/ft < 0.35                 | d20 swing     |    0.257 |          0.257 |
|   8 | −1.05 < f1/√(fw·ft) < −0.85                     | L1            |   −0.879 |         −0.879 |
|   9 | 0.75 < fBF/√(fw·ft) < 1.45                      | L2            |    0.787 |          0.787 |
|  10 | −2.5 < fSP/√(fw·ft) < −0.9                      | L3            |   −1.061 |         −1.061 |
|  11 | 0.9 < fb/√(fw·ft) < 2.1                         | L4            |    0.932 |          0.932 |
|  12 | 0.22 < BFw/Lw < 0.38                            | wide BF ratio |    0.239 |          0.239 |
|  13 | −0.95 < fG1/ft < −0.8                           | L11           |   −0.879 |         −0.879 |

All thirteen conditions are satisfied by the transcribed prescription. The computations also confirm that d20 is the L3–L4 separation, represented in the data file as the distance after the aperture stop surface labeled `STO`.

## Verification Summary

An independent d-line paraxial reconstruction of Numerical Example 1 reproduces the patent's published values. The effective focal lengths compute as 24.897 / 35.118 / 68.121 mm, matching the patent's 24.90 / 35.13 / 68.14 mm to rounding precision. The six group focal lengths compute as −36.214, +32.417, −43.692, +38.395, −34.820, and +64.172 mm, matching the group-data table within a few micrometers to a few hundredths of a millimeter depending on rounding.

The total first-surface-to-image lengths from the table compute as 199.13 / 183.52 / 166.56 mm from the rounded spacings. The patent prints 199.13 / 183.51 / 166.55 mm; the 0.01 mm differences at middle and tele are rounding artifacts. Back focus remains 38.47 mm at all three zoom positions.

The surface-by-surface Petzval sum, using Σφ/(n·n′), is +4.344e−3 mm−1, corresponding to a Petzval radius of about 230 mm. That is a modest positive Petzval residual for a 21.64 mm semi-image height. The rear asphere and alternating positive/negative group powers are therefore important to maintaining usable field flatness, but the design is not Petzval-neutral.

No sensor cover glass or external filter is tabulated in the selected source prescription, so none is invented or removed. It includes SSP as a neutral flat flare-stop surface and labels the aperture stop as `STO` to satisfy the LensVisualizer data convention. Semi-diameters are estimated, not patent-published, and were checked against edge thickness, signed cross-gap sag clearance, and an element front/rear semi-diameter ratio limit.

## Design Heritage and Context

The EF 24–70mm f/2.8L USM succeeded the EF 28–70mm f/2.8L USM by extending the wide end to 24 mm while keeping the professional f/2.8 standard-zoom class. Canon's product page lists the first-generation lens as 16 elements in 13 groups, 0.38 m closest focusing distance, 0.29× maximum magnification, a 77 mm filter thread, and a 950 g mass. The later EF 24–70mm f/2.8L II USM is a separate 18-element redesign with three aspherical elements and additional UD/Super UD material.

In that context, JP 2014-41222 A is best treated as a later Canon filing that reuses a first-generation-class 24–70mm standard-zoom architecture to demonstrate a glass-based alternative to organic anomalous-dispersion correction. It records Canon's material strategy in a full-frame SLR zoom class, not merely a lens-block diagram for a production product already on the market.

## Sources and References

- JP 2014-41222 A (特開2014-41222), original local `patents/JP2014041222A.pdf`: Numerical Example 1 ¶0065 on PDF pages 9–11; spectral reference ¶0062 on page 9; all d/g/C/F rows on page 11; Figure 1 wide-infinity section on page 14. Canon Inc., inventor Endo Hiroshi; filed 2012-08-22, published 2014-03-06. Primary source for the prescription, line indices, aspherical coefficients, conditional expressions, group focal lengths, zoom spacings, focus mechanism statement, and aberration plots.
- Canon Camera Museum, “EF24-70mm f/2.8L USM.” Manufacturer source for marketed date, 16-element / 13-group construction, 0.38 m closest focusing distance, 0.29× maximum magnification, 77 mm filter diameter, dimensions, and mass.
- Canon Camera Museum, “EF24-70mm f/2.8L II USM.” Manufacturer source for the successor design and for Canon's statement that the predecessor used two aspherical lens elements and one UD lens element.
- Public Ohara, Hoya, Schott, Hikari, CDGM, and Sumita optical-glass catalogs. Used for nd/νd glass matching; the patent's own nC, nF, and ng values are used for partial-dispersion calculations where available.

## Runtime Launch Qualification - 2026-10-30

This is a runtime-only supplement to the dated source/shape/glass review above. No original PDF was reinspected for this supplement; source review dates, prescription values, controls and review counts remain unchanged. Earlier pupil/chief grids labeled near or close sampled **collimated rays through focus-adjusted geometry**. Those labels identify the control geometry, not finite-object illumination. Independently computed finite paraxial residuals and exact-working-f-number probes remain separate; the latter use the runtime distance-label object plane.

The explicit finite-object supplement samples 20 positive focus positions at nine zoom positions. The complete current ABCD matrix, including any rear plates, supplies the real Gaussian object plane. A paraxial entrance-stop seed and inverse chief solve target actual image heights 0, 10.8250 and 21.6500 mm; paraxial object-height scaling alone is not accepted as the actual image-edge solve. Geometric roots are solved before current-aperture classification. The 21.6500 mm edge is the viewer format corner, which may exceed the selected source's image height; these probes do not establish production illumination or source support for an inferred continuous cam.

Of 180 positive-real-object geometries, 540/540 target chiefs converge: 540 clear the current caps and 0 clip. Across the converged fields, 193 current-iris samples per field give 91,621 passed, 12,583 clipped, 16 failed and 0 unaimed rays. Minimum sampled axial transmission is 193/193. Failed traces are retained numerical/path outcomes, separately from clipping: `noBracket @ ?` (16). No clear aperture, R/d, stop, cam, tolerance or source field is altered to clear those diagnostics.

Selected current close geometries, with Gaussian conjugates and their exact aimed bundle counts:

| Zoom control | Aberration control | Gaussian object-to-image (m) | Distance label (m) | Axis / half / edge passing of 193 | Chief result          |
| -----------: | -----------------: | ---------------------------: | -----------------: | --------------------------------- | --------------------- |
|            0 |                  0 |                  0.380000000 |           0.380000 | 193 / 188 / 100                   | clear / clear / clear |
|          0.5 |                  0 |                  0.380000000 |           0.380000 | 193 / 185 / 131                   | clear / clear / clear |
|            1 |                  0 |                  0.380000000 |           0.380000 | 193 / 170 / 137                   | clear / clear / clear |

The largest sampled relative difference between a positive Gaussian object-to-image conjugate and its distance label is 94.916571% at zoom 0.75, focus 0.05, aberration control 0: Gaussian 0.386340607 m versus label 7.600000000 m. This is a first-order conjugate/control distinction, not a new production-distance measurement. Nominal infinity controls remain in their separate collimated checks; their small rounding residual is not converted into a finite-source claim.

## Scoped Catalog Follow-up — 2026-10-31

The original Numerical Example 1 material table (JP2014041222A, PDF pages 9–11, ¶0062/¶0065) confirms L43/id13, source surface 24, at nd 1.52542/νd 64.5 with C/F/g 1.52291/1.53105/1.53541. Its printed-line PgF is 0.53562654. All 48 genuine source C/F/g values remain unchanged, including both unmatched special-glass elements. This does not reopen the 2026-10-30 shape review.

The existing PC3 catalog row documents the [HOYA catalog download source](https://www.hoya-opticalworld.com/english/datadownload/) (`HOYA20260707_include_obsolete.agf`). Its evaluated nd 1.52542005/νd 64.619542 gives residuals +0.00000005/+0.119542. Evaluated C/F/g residuals are +0.00001073/+0.00000171/−0.00001074 and PgF 0.53468967 differs by −0.00093687. These are approximate catalog values, not replacements for the printed lines. Complete source indices take precedence, so this label change leaves the traced source channels unchanged.

The current HOYA portal, AGF and attempted PC3 PDF endpoints timed out during this follow-up; current primary coefficient retrieval is not claimed. The row's existing documented manufacturer provenance is retained. Downloaded OHARA, Nikon/Hikari and SUMITA catalogs supplied no better source-backed replacement under the source's full line constraints. L43 receives a qualified existing PC3 label; historical supplier, melt and chemistry remain unknown.
