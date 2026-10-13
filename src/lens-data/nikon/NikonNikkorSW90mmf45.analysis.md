# Nikon Nikkor-SW 90mm f/4.5 — US 4,176,915 Example 1

## Patent Reference and Design Identification

**Patent:** US 4,176,915
**Application Number:** 845,632
**Filed:** October 26, 1977
**Granted:** December 4, 1979
**Priority:** Japan 51-131221, November 2, 1976
**Inventor:** Ikuo Mori
**Assignee:** Nippon Kogaku K.K.
**Title:** Wide Angle Lens
**Embodiment analyzed:** Example 1 (also reprinted as the numerical data of claim 4)

US 4,176,915 describes a four-component wide-angle lens "suitable as the picture-taking lens in a large camera, for example, of 4″×5″ size" (col. 1, ll. 5–8). It publishes three worked examples normalized to f = 100: Examples 1 and 2 at an aperture ratio of 1:4.5 and Example 3 at 1:4.0 (col. 4). The prescription data file transcribes Example 1, scaled to Nikon's published 90.4 mm focal length; the lens is marketed under the nominal designation 90 mm.

The identification of Example 1 with the Nikkor-SW 90mm f/4.5S rests on convergent evidence rather than on a manufacturer statement naming the patent:

1. **Construction.** Nikon lists the lens as 7 elements in 4 groups, matching the patent's 1–3–2–1 component structure.
2. **Aperture.** Example 1 is published at 1:4.5, the marketed maximum aperture.
3. **Field.** Nikon gives 105° coverage and a 235 mm image circle at f/16. A rectilinear 235 mm circle at f = 90.4 mm subtends 104.9°. The patent's FIG. 2 plots Example 1's field aberrations to 52° half-field.
4. **Type.** Nikon's own design history identifies the SW 90mm f/4.5 as a "Wakimoto" lens, whose inner cemented group runs convex–concave–convex. That is the L2A–L2B–L2C triplet of this patent.
5. **Filter size.** The patent states a minimum filter diameter of 0.9f to 1.1f (col. 3, ll. 49–51), i.e. 81–99 mm at f = 90.4 mm. The production lens takes 82 mm attachments.
6. **Ownership.** The assignee, Nippon Kogaku K.K., is Nikon's former corporate name.
7. **Focal length.** Nikon's Japanese product page gives the focal length as 90.4 mm, while the English brochure uses the nominal 90 mm. The model follows the more precise manufacturer value.

The correlation has limits. Examples 1 and 2 are near-identical f/4.5 variants; the selection of Example 1 is a project choice, supported by the to-scale Fig. 1, whose drawn vertex positions fit Example 1's axial stations slightly better than Example 2's (RMS 0.21 against 0.24 units at f = 100) and much better than Example 3's (0.72). The normalized prescription also cannot distinguish focal lengths: the Nikkor-SW 75mm f/4.5S is likewise 7 elements in 4 groups at f/4.5 with 106° coverage.

## Optical Architecture

The lens has four air-separated components in a negative–positive–positive–negative power arrangement, with the diaphragm between the two positive components. In object-to-image order:

- **L1** is a single negative meniscus, convex to the object.
- **L2** is a cemented positive triplet: L2A biconvex, L2B biconcave, L2C a weak positive meniscus whose rear face is nearly flat.
- The **stop** lies in the air space d6.
- **L3** is a cemented positive doublet: L3A positive meniscus and L3B negative meniscus, both convex to the image.
- **L4** is a single negative meniscus, convex to the image.

All eleven surfaces are spherical. This is a member of the family the patent traces to L. Bertele (col. 1, ll. 9–16): concave outer components surrounding a convergent core, arranged about the stop.

The patent departs deliberately from symmetry. Standalone component focal lengths (thick lens in air) are:

| Component | Standalone f (mm) |
|---|---|
| L1 | −56.1 |
| L2 triplet | +39.7 |
| L3 doublet | +109.2 |
| L4 | −75.5 |
| Front half (L1 + L2) | +68.8 |
| Rear half (L3 + L4) | −226.1 |

A symmetric design would pair equal powers about the stop. Here the rear half is net negative and much weaker than the front, and the rear air space is shorter than the front one (d9/d2 = 0.618). The patent states that condition (1), d9 < d2, "destroys the symmetry of the lens" in order to reduce the effective diameter of L4. That diameter matters on a view camera because a bulky rear component strikes the bellows or vignettes under swing and tilt (col. 1, ll. 20–33; col. 2, ll. 51–60).

First-order properties of the scaled model at infinity:
- **Focal length and back focus.** EFL 90.401 mm; paraxial back focal distance 62.98 mm; vertex length Σd 85.01 mm; total track r1 to image 147.99 mm.
- **Type ratios.** TL/EFL is 1.637 and BFD/EFL is 0.697, so the lens is neither a telephoto nor a retrofocus.
- **Principal planes.** The front principal plane lies 23.24 mm behind r1. The rear principal plane lies 27.42 mm ahead of r11.
- **Pupils (paraxial).** The entrance pupil is 27.41 mm behind r1 and 20.09 mm in diameter. The exit pupil is 23.43 mm ahead of r11 and 19.20 mm in diameter, a pupil magnification of 0.956. These figures depend on the inferred stop described under Verification Summary.

The real chief ray shows how the outer menisci serve the field. At the 52.5° marketed half-field, L1 bends the chief ray to 25.5° inside the front air space. L2 then raises it to 58.4° in stop space, and it reaches the image at 53.9°. At 30° the corresponding angles are 15.8°, 30.1° and 31.1°.

L1 therefore presents the strongly positive triplet with chief rays far less steeply inclined than the field it accepts. The near-unit pupil magnification and the near-equality of object-space and image-space chief-ray angles are characteristic of the symmetric type. The lens is not telecentric, and its image-space chief-ray angles are steep.

## Element-by-Element Analysis

Element focal lengths below are standalone thick-lens values in air at f = 90.4 mm. Inside the cemented groups the in-situ behavior is governed by the junction powers, which are stated where relevant.

### L1 — Negative Meniscus, convex to object

nd = 1.57250, νd = 57.5. Glass: 573575 — barium crown, BaK1 class (N-BAK1 / H-BaK8 coordinate-exact). f = −56.1 mm.

L1 is the divergent first component required by claim 1. Its strongly curved concave rear face (r2) carries most of its power. This surface supplies one of the two largest negative Petzval contributions in the system (−0.0152 mm⁻¹), offsetting the positive core. L1 also roughly halves the chief-ray angle presented to L2.

At 1.59 mm (f = 90.4) it is thin. The patent's d2 is the reference against which both the L2A thickness (condition 2) and the rear air space (condition 1) are set.

### L2 — Cemented Positive Triplet (L2A–L2B–L2C)

**L2A — Biconvex Positive.** nd = 1.80218, νd = 44.4. Glass: 802444 — lanthanum dense flint, LaSF11 class (nearest NBFD14 HOYA, Δnd −0.0005; supplier unconfirmed). f = +23.1 mm.

**L2B — Biconcave Negative.** nd = 1.67163, νd = 38.8. Glass: 672388 — barium dense flint class (nearest S-NBH52V OHARA, Δnd +0.0014, Δνd −0.5; supplier unconfirmed). f = −24.9 mm.

**L2C — Positive Meniscus, convex to object.** nd = 1.52000, νd = 70.1. Glass: 520701 — phosphate crown class (nearest J-PKH1 HIKARI, Δnd −0.0014; supplier unconfirmed). f = +80.0 mm.

L2A is the most conspicuous element of the design. It is 24.62 mm thick, 0.272 of the focal length, and thicker than the L1–L2 air space as condition (2) requires. The patent assigns this thickness to correcting the meridional field curvature that condition (1) aggravates (col. 3, ll. 1–14). Its rear radius is shorter than its front radius (|r4| < r3, claim 3), which the patent links to spherical aberration and the lateral aberration of oblique rays (col. 3, ll. 25–34).

L2B and L2C are thin. Their role is set by the two cemented junctions:
- **r4 (L2A/L2B).** Condition (3), n2 > n3, makes this junction converging, as the patent states (col. 3, ll. 18–21). In the model its power is +0.00457 mm⁻¹. The patent credits it with correcting spherical aberration and distortion, and states that without it the attainable aperture would be about 1:8 (col. 3, ll. 21–25).
- **r5 (L2B/L2C).** This junction is diverging, at −0.00371 mm⁻¹.

L2C's rear face (r6 = 2192.78 mm) is nearly flat and faces the stop. The cemented triplet as a whole has a standalone focal length of +39.7 mm. Its convex–concave–convex order, with two positive elements to one negative, is what Nikon's design history identifies as the Wakimoto arrangement.

### L3 — Cemented Positive Doublet (L3A–L3B)

**L3A — Positive Meniscus, convex to image.** nd = 1.60717, νd = 40.2. Glass: 607402 — barium dense flint, BaSF/BaFD3 class (BAFD3 HOYA coordinate-compatible, Δνd +0.16; supplier unconfirmed). f = +25.7 mm.

**L3B — Negative Meniscus, convex to image.** nd = 1.71736, νd = 29.5. Glass: SF1 class (717295; Hoya E-FD1 / Ohara S-TIH1 / Schott SF1 coordinate-exact). f = −43.1 mm.

The doublet sits directly behind the stop and is the rear counterpart of L2. It is much weaker, with a standalone focal length of +109.2 mm. Its junction r8 is diverging (−0.00743 mm⁻¹): the index rises into the dense flint L3B across a surface whose centre of curvature lies on the stop side. L3B is thick, at 15.65 mm, and its convex rear face r9 contributes +0.0102 mm⁻¹ to the Petzval sum.

Claim 1 calls the image-side element of this component a "positive meniscus lens element." The tabulated radii, thickness and index of Example 1 make L3B a negative meniscus. The table is printed twice (col. 4 and claim 4) with identical values and reproduces the published f and Bf. The description (col. 2) calls the element only a "meniscus." The data file therefore follows the table, and the claim wording is recorded as a source discrepancy. The patent also notes that L3 may be split into three elements or two separated elements (col. 3, ll. 55–60).

### L4 — Negative Meniscus, convex to image

nd = 1.73350, νd = 51.0. Glass: 734510 — lanthanum crown, LaKN12 class (LAKN12 SUMITA coordinate-compatible, Δνd +0.2; TAC4 HOYA alternate; supplier unconfirmed). f = −75.5 mm.

L4 is the rear divergent component and the object of condition (1). Moving it close to L3 (d9 = 9.97 mm against d2 = 16.15 mm at f = 90.4) keeps the rear clear aperture small. The patent quotes an effective diameter "of the order of 0.55 f" for this component (col. 3, ll. 51–53). The modeled r11 clear aperture, which must pass the 52.5° bundle at f/16, gives a rear clear diameter of 0.544f. Because the patent figure was used as a plausibility constraint when that aperture was modeled, the agreement is not independent evidence.

L4's concave front face r10 provides the largest single negative Petzval term (−0.0184 mm⁻¹). Its convex rear face r11 adds +0.0105 mm⁻¹.

## Glass Identification

The patent publishes only nd and νd at the d-line. Each glass was matched by an unseeded nearest-neighbour search over the current OHARA, HOYA, Schott, HIKARI, CDGM and Sumita catalogs. The distance metric is D = √(Δnd² + (Δνd/50)²); the class thresholds are Exact < 0.001, Close < 0.003 and Equivalent ≤ 0.015. No 1970s-era catalog was available. The 1976 melt therefore cannot be identified, and a coordinate match does not establish the supplier. The L2A, L3A and L4 rows name legacy types carried in the project's glass catalog (HOYA NBFD14 and BAFD3, Sumita LAKN12), chosen because they reproduce the patent nd within 0.0005; these are the dispersion curves the model uses. L2B and L2C have no close catalog partner: their nearest glasses differ by 0.0014 in nd and are used as approximations.

| Element | Code | nd / νd | Nearest current glass | D | Class | Role |
|---|---|---|---|---|---|---|
| L1 | 573575 | 1.57250 / 57.5 | H-BaK8 (CDGM); N-BAK1 (Schott) | 0.0003 | Exact | Barium crown, front divergent meniscus |
| L2A | 802444 | 1.80218 / 44.4 | NBFD14 (HOYA) | 0.0017 | Close | Lanthanum dense flint, thick positive core |
| L2B | 672388 | 1.67163 / 38.8 | S-NBH52V (OHARA) | 0.0110 | Equivalent | Barium dense flint, low-index partner at r4 |
| L2C | 520701 | 1.52000 / 70.1 | J-PKH1 (HIKARI) | 0.0044 | Equivalent | Phosphate crown, weak positive rear of L2 |
| L3A | 607402 | 1.60717 / 40.2 | BAFD3 (HOYA) | 0.0032 | Equivalent | Barium dense flint, positive meniscus; nd coincides, Δνd +0.16 |
| L3B | 717295 | 1.71736 / 29.5 | E-FD1 (HOYA) | 0.0000 | Exact | SF1-class dense flint, achromatizing partner |
| L4 | 734510 | 1.73350 / 51.0 | LAKN12 (Sumita, discontinued); TAC4 (HOYA) | 0.0044; 0.0012 | Equivalent; Close | Lanthanum crown, rear divergent meniscus; LAKN12 matches nd to 0.00001 |

Two selection rules govern the palette.

- **Index rule (condition 3).** n2 > n3 places a higher-index positive element in front of a lower-index negative element, so the first junction of the triplet converges.
- **Abbe-number ordering.** The patent asks for νd2 > νd3 < νd4 and νd5 > νd6 to correct axial and lateral color (col. 3, ll. 34–41). Example 1 satisfies both: 44.4 > 38.8 < 70.1 and 40.2 > 29.5.

Both strong positive elements, L2A and L3A, are flint-class glasses (νd < 50); each is cemented to a negative partner of lower νd, and the high-νd crown L2C completes the triplet. No partial-dispersion data are published. All chromatic statements in this analysis are therefore limited to primary (F–C) color.

## Focus Mechanism

The lens has no internal focusing motion. On a view camera the whole lens is translated by the bellows, so only the distance from the rear vertex to the image plane changes. The patent publishes only the infinity state, and Nikon publishes no minimum focus distance for this lens.

The data file adds a single close state at 1.0 m object-to-image distance as a modeling choice, solved from the exact paraxial conjugate of the model:

| Quantity | Infinity | 1.0 m object-to-image (modeled) |
|---|---|---|
| r11 to image (mm) | 62.9794 | 73.5341 |
| Bellows extension (mm) | 0 | 10.55 |
| Object distance from r1 (mm) | ∞ | 841.4 |
| Lateral magnification | 0 | m = −0.117 |

Nikon gives a flange focal distance of 97.4 mm. Measured from the model's infinity image plane, the lens-board flange lies 34.42 mm ahead of the rear vertex, or 2.44 mm behind the inferred stop. That placement is consistent with the diaphragm sitting in a Copal No. 0 shutter at the board, but it is a plausibility check, not a constraint on the model.

## Aberration Correction Strategy

**Field curvature.** The Petzval sum of the model, computed surface by surface, is 7.81 × 10⁻⁵ mm⁻¹. That is a Petzval radius of about 12,800 mm, ≈ 141.7 f, so the Petzval field is essentially flat. The flattening comes from the outer menisci:
- **Negative terms.** The concave faces r2 and r10 contribute −0.0152 and −0.0184 mm⁻¹.
- **Positive terms.** These come chiefly from r3 (+0.0137 mm⁻¹), r9 (+0.0102 mm⁻¹) and r11 (+0.0105 mm⁻¹).

**Astigmatism.** The residual field curvature is astigmatic. The patent identifies the meridional field as the quantity that condition (1) aggravates and condition (2) restores.

**Spherical aberration.** A real-ray trace of the model at f/4.5 gives a zonal undercorrection that reaches −0.47 mm at 0.83 of the aperture radius. It returns to +0.16 mm at full aperture, a balanced, slightly overcorrected marginal zone.

**Distortion.** Real chief-ray distortion stays small for a 105° field. It reaches −0.72% near 43° and crosses zero at 51.9°. The patent states that condition (3) also assists distortion correction (col. 3, l. 25).

**Color.** First-order color from the published nd/νd values gives:
- an axial F–C focus difference of −0.32 mm (F focusing short);
- lateral F–C color no larger than 0.027 mm in image height out to 52.5°.

Sato lists small lateral color among the imaging characteristics of the Nikkor-O 2.1cm f/4, the first lens of the Wakimoto type. Secondary spectrum cannot be evaluated from the published data.

**Vignetting.** The coverage figures imply strong mechanical vignetting at full aperture: Nikon specifies 80° coverage at f/4.5 against 105° at f/16. A meridional real-ray trace with the modeled clear apertures transmits about 93% of the full-aperture bundle at 20°, 83% at 31.5°, 75% at 40°, 38% at 50° and 24% at 52.5°. At f/16 about 84% of the meridional bundle reaches the 117.5 mm corner, the remainder being cut by the rim of L1's deep rear surface, and at f/22 about 96%. These fractions depend on the inferred semi-diameters and exclude sagittal rays, so they indicate the trend rather than production values.

## Conditional Expressions

Values are those of Example 1 at f = 100 (col. 4). Ratios are unchanged by scaling.

| Expression | Source | Example 1 | Satisfied |
|---|---|---|---|
| (1) d9 < d2 | col. 2 | 11.03 < 17.86 (ratio 0.618) | Yes |
| (2) d3 > d2 | col. 2 | 27.23 > 17.86 (ratio 1.525) | Yes |
| (3) n2 > n3 | col. 2 | 1.80218 > 1.67163 | Yes |
| \|r4\| < r3 | col. 3, claim 3 | 31.610 < 35.943 | Yes |
| νd2 > νd3 < νd4 | col. 3 | 44.4 > 38.8 < 70.1 | Yes |
| νd5 > νd6 | col. 3 | 40.2 > 29.5 | Yes |

## Verification Summary

**Scaling.** Every radius, thickness and air space of Example 1 was multiplied by s = 0.9040227 (90.4 mm divided by the computed f = 100 focal length) and rounded to 0.0001 mm. The target is Nikon's published focal length rather than the nominal 90 mm designation. No aspherical coefficients required transformation.

**Source and model comparisons.**
- **f = 100 source model.** It gives EFL 99.9975 and BFD 69.6647, against the printed f = 100 and Bf = 69.673. Both residuals lie within the bounds set by the printed precision. Σd reproduces exactly.
- **Image plane.** The scaled model places it at its own paraxial focus (62.9794 mm). The patent's Bf scales to 62.9860 mm; the 0.007 mm difference is within source rounding.
- **Cross-checks.** A sequential paraxial trace and an independent ABCD matrix product agree to better than 10⁻⁹ mm.

**Inferred and modeled quantities.**
- **Stop position.** The patent places the diaphragm in d6 without dimensioning it. The stop was placed 0.611 of the way through d6 from r6, measured from the to-scale Fig. 1. That value comes from a least-squares fit of all drawn vertex positions. A local measurement against the drawn r6 and r7 outlines, in both the front-page drawing and Sheet 1, gives 0.58 instead. The spread corresponds to an uncertainty of roughly ±0.04 of d6 (about ±0.13 mm).
- **Stop diameter.** Its semi-diameter is calibrated so that the paraxial entrance pupil gives f/4.5. The agreement with the published 1:4.5 is therefore a calibration, not independent evidence of the diaphragm size.
- **Semi-diameters.** The patent publishes none. The clear apertures of L1, L2, L3B's rear face and L4's front face are read from the to-scale Fig. 1 and verified by real-ray trace; the stop-adjacent L3A surfaces and the L4 rear face keep ray-derived values that the figure confirms within about 2%. L1's rear surface is held at 0.9 of its radius, the steepest rim the model allows.

**Comparison with FIG. 2.** The model's aberrations were compared with readings taken from the patent's FIG. 2. The comparison uses the patent's f = 100 units for spherical aberration and field curves, and percent for distortion. FIG. 2 does not label its astigmatism curves; the computed curves identify the solid line as sagittal and the dashed line as meridional.

| Quantity (f = 100 units, distortion in %) | Model | FIG. 2 reading |
|---|---|---|
| Spherical aberration, F/6.3 zone | −0.44 | −0.39 |
| Distortion at 30° / 40° / 50° / 52° | −0.44 / −0.69 / −0.36 / +0.02 | −0.38 / −0.66 / −0.22 / +0.26 |
| Sagittal field at 30° / 40° / 50° / 52° | −0.53 / −1.03 / −0.61 / +0.09 | −0.46 / −0.87 / −0.45 / +0.15 |
| Meridional field at 30° / 40° / 50° / 52° | −0.56 / −0.59 / −0.73 / −1.72 | −0.46 / −0.42 / −0.47 / −0.92 |

Where the model and the figure agree:
- the sign pattern and general shape of each curve; at 30–50° the field-curve residuals are at most 0.26 units and the distortion residuals at most 0.14 percentage points;
- the zonal spherical undercorrection;
- the shallow negative distortion turning positive near the field edge;
- the sagittal field reversing sign at 52°.

The largest disagreement is the meridional hook at 52°. It is very sensitive to the stop position. Scanning the stop through d6 against the FIG. 2 field-curve readings gives the lowest RMS residual at a fraction of 0.65, close to the 0.611 measured from Fig. 1. This corroborates the stop inference but does not establish it.

**Unvalidated items.** The data file has not yet been run through the LensVisualizer renderer or validator.

**Text discrepancies in the patent.**
- **L3B sign.** Claim 1's "positive meniscus" wording for L3B conflicts with the table, as described above.
- **Figure numbering.** The text cites "FIGS. 3 and 4" for the aberrations of Examples 1 and 3 (col. 3, ll. 61–64). The drawings are numbered FIGS. 2 and 3: FIG. 2 is plotted at F/4.5 for Example 1, and FIG. 3 at F/4 for Example 3.

## Design Heritage and Context

The patent positions the design within the symmetric wide-angle tradition it attributes to L. Bertele (col. 1, ll. 14–16). In that tradition, two concave outer components surround a positive core and the stop. Sato describes the cemented inner groups of the Biogon as concave–convex–concave.

Haruo Sato's account of Nikon design history credits Zenji Wakimoto of Nippon Kogaku with a variant in which each inner cemented group runs convex–concave–convex. Sato argues that a majority of positive elements lowers the aberration contributed by the surfaces and favors a larger aperture. Sato describes this variant first in the Nikkor-O 2.1cm f/4 of 1959. He names the Nikkor-SW 65mm f/4, 75mm f/4.5 and 90mm f/4.5 large-format lenses as "Wakimoto" lenses.

US 4,176,915 keeps the Wakimoto triplet ahead of the stop but reduces the rear to a cemented doublet and a single meniscus. Its contribution is the asymmetric arrangement aimed at view-camera use:
- the shortened rear air space (condition 1), which shrinks the rear diameter for swing and tilt;
- the thick L2A (condition 2), which restores the meridional field;
- the index step at r4 (condition 3), without which the patent puts the attainable aperture at about 1:8.

Example 3 extends the same arrangement to 1:4.0. Nikon's 2002–2004 catalog lists the slower Nikkor-SW 90mm f/8S separately, as 8 elements in 4 groups.

## Sources

1. Ikuo Mori (inventor), Nippon Kogaku K.K. (assignee). *Wide Angle Lens.* US Patent 4,176,915, granted December 4, 1979; filed October 26, 1977 (Appl. No. 845,632); priority JP 51-131221, November 2, 1976. Locations cited:
   - front page abstract and Fig. 1 (PDF p. 1);
   - Fig. 1 (Sheet 1, p. 2);
   - FIG. 2, Example 1 aberrations (Sheet 2, p. 3);
   - FIG. 3 (Sheet 3, p. 4);
   - cols. 1–2, background and conditions (p. 5);
   - cols. 3–4, condition rationale and Examples 1–3 (p. 6);
   - cols. 5–6, claims 1–6 (p. 7).
2. Nikon Corporation. *Nikon Large Format Lenses* (Nikkor SW, W, AM, T and M series brochure), Code No. 8CE60100 (0401/C)K, © 2002–2004. Copy hosted at https://www.kennethleegallery.com/pdf/Nikkor_LargeFormatLenses.pdf (retrieved October 1, 2026). Nikkor-SW 90mm f/4.5S specifications:
   - nominal focal length, construction, maximum and minimum aperture;
   - covering power and image circle;
   - shutter, attachment size and flange focal distance.
3. Nikon Corporation / Nikon Imaging Japan. 「ニッコールSW 90mmF4.5S（シャッターNo.0付）」 product page (discontinued products), https://www.nikon-image.com/products/nikkor/other_lens/sw_90mmf45s/ (retrieved October 1, 2026). Focal length 90.4 mm; construction 4 groups / 7 elements; minimum aperture f/64; coverage and image circle at f/4.5 and f/16; flange focal distance 97.4 mm.
4. Haruo Sato. "NIKKOR – The Thousand and One Nights No. 1: NIKKOR-O 2.1cm F4." Nikon Corporation. https://imaging.nikon.com/imaging/information/story/0001/ (retrieved October 1, 2026).
5. Current optical-glass catalogs used for glass matching: OHARA (2025-03), HOYA (2026-04), Schott (2025), HIKARI, CDGM (2024-09) and Sumita (v14.01.03), as distributed with the `opticalglass` 2.0.2 Python package.
