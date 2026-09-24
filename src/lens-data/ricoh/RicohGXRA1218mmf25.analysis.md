# Ricoh GR LENS A12 28mm f/2.5 — Optical Analysis

## 1. Patent and Design Identification

**Patent:** JP 2012-003015 A
**Application Number:** JP 2010-137492
**Filed:** 2010-06-16
**Published:** 2012-01-05
**Inventor:** Takashi Kubota (窪田 高士)
**Applicant:** Ricoh Co., Ltd.
**Title:** 結像レンズおよびカメラ装置および携帯情報端末装置 (Imaging lens, camera device and portable information terminal device)
**Embodiment analyzed:** Example 1 (実施例1): Table 1, aspherical data ¶0094–0095, focus gaps Table 2, Fig. 1, aberrations Fig. 2
**Production lens:** Ricoh GR LENS A12 28mm F2.5 camera unit for the GXR system

The GR LENS A12 28mm F2.5 is a sealed lens-and-sensor unit for Ricoh's GXR interchangeable-unit camera. It pairs an
18.3 mm lens with a 23.6 × 15.7 mm (APS-C) CMOS sensor. Ricoh's unit manual gives the aperture range as f/2.5–f/22,
the focus range as about 20 cm–∞ measured from the lens, a 40.5 mm filter thread, and the construction as "9 elements
in 6 groups (2 aspherical lens elements with 2 surfaces)". Ricoh's product page adds that the design uses a special
low-dispersion lens and a floating focus structure.

JP 2012-003015 A publishes seven numerical examples of one positive–positive two-group wide-angle design. All seven
have F = 18.3 mm, F/2.51–2.56, a half-field of about 38° and a 200 mm reference close distance (¶0049, ¶0155–0157). The
patent's examples are for a solid-state sensor with a 28.6 mm diagonal (¶0051). Example 1 is identified here as the
closest match to the production lens:

1. **Element and group count.** Example 1 is the only 9-element, 6-group example (¶0059). Examples 2, 3, 6 and 7 have
   8 elements, and Examples 4 and 5 have 10.
2. **Aspherical count.** Example 1 has one aspherical surface on each of two elements: the front of L2 (surface 3) and
   the front of L9 (surface 15). This matches Ricoh's "2 aspherical lens elements with 2 surfaces". Example 3, which
   this data file stored before the 2026-09-23 audit, has three aspherical surfaces (both sides of L1 and the rear of
   L8).
3. **Representative figure.** Fig. 1 (Example 1) is the drawing the patent selected for its abstract page (【選択図】図1).
4. **Focal length, aperture, focus.** F = 18.3 mm and Fno = 2.56 (¶0091) match the 18.3 mm f/2.5 unit. Floating focus
   by two groups and a 200 mm close distance match Ricoh's floating structure and the 20 cm minimum distance.

The identification is not exact. None of the seven examples combines the 9/6 construction with an element that
could be called a special low-dispersion glass. The lowest-dispersion glass in Example 1 is L1 at νd 58.6. Only the
10-element Examples 4 and 5 use a νd 81.5 fluor crown. The production prescription may therefore differ from Example 1
in glass choice, and the patent does not name the product. The match to Ricoh's element count, group count and
aspherical count is an inference.

## 2. Optical Architecture

Example 1 has a weak positive first group (L1–L4), the aperture stop, and a strong positive second group (L5–L9)
(¶0059, ¶0072):

| Group | Elements | Paraxial focal length | Content |
|---|---|---|---|
| Group 1 | L1, L2, L3+L4 | +942 mm (calculated) | negative meniscus, biconvex asphere, cemented doublet |
| Stop | — | — | surface 8; moves with Group 1 |
| Group 2 | L5+L6, L7+L8, L9 | +22.8 mm (calculated) | two cemented doublets, aspherical rear meniscus |

The six air-separated groups are L1, L2, L3+L4, L5+L6, L7+L8 and L9. Group 1 has almost no net power. Its negative
meniscus L1 and the positive L2 form a weak wide-angle front section. The cemented L3+L4 doublet faces the stop with a
convex rear surface, and the L5+L6 doublet faces it with a convex front surface (Claim 8). The patent contrasts this
positive-leading layout with a retrofocus design (¶0006). A retrofocus lens places the principal points behind the
glass and makes the power layout asymmetric, which makes coma, distortion and lateral color harder to correct. The
positive-leading layout keeps the power more symmetric about the stop, and the negative L1 keeps the field wide.

Calculated from the stored prescription:

| Quantity | Value |
|---|---|
| EFL | 18.24 mm (patent F = 18.3 mm) |
| Design f-number | 2.56 (patent); iris radius 4.49 mm by real-ray trace |
| Half-field | 38.0° in Fig. 2; 38.5° reaches a 14.3 mm image height |
| Back focus | 17.05 mm physical (14.10 air + 2.5 mm plate + 0.448 air); 16.20 mm air-equivalent |
| Lens length, surface 1 to surface 16 | 32.66 mm |
| Total length, surface 1 to image | 49.71 mm physical, including the 2.5 mm patent plate |
| Total length / image diagonal | 1.74 (patent: "about 1.7", ¶0051) |
| Entrance pupil | 7.12 mm diameter, 8.3 mm behind surface 1 |
| Exit pupil | about 40 mm in front of the image (air-equivalent) |
| Petzval sum | +0.0070 mm⁻¹ (radius about 143 mm) |
| Distortion at ω = 38° | −1.5 % (real-ray trace; Fig. 2 shows about −1.6 %) |

## 3. Element-by-Element Analysis

Element focal lengths are thick-lens values in air, calculated from Table 1. Glass names are catalog equivalents
matched on nd/νd. The patent lists only nd and νd.

### L1 — Negative Meniscus, convex to object

nd = 1.6516, νd = 58.6. Glass: S-LAL7 (OHARA) equivalent — lanthanum crown. f = −25.2 mm.

Claim 1 requires Group 1 to begin with a negative meniscus that is convex toward the object. L1 (R 23.72 / 9.52) has a
deeply concave rear surface: its sag is about 3.5 mm at the 7.4 mm rim, compared with a 3.4 mm air space to L2. Fig. 1
shows L2 fitted into that hollow. Condition (2) fixes the L1/L2 power ratio. L1 has νd 58.6, the highest Abbe number in
this example, but it is an ordinary lanthanum crown and not a low-dispersion glass.

### L2 — Biconvex Positive, aspherical front surface

nd = 1.8061, νd = 40.4. Glass: 806404 lanthanum flint (catalog unresolved; nearest catalog glasses are HOYA NBFD13
1.80610/40.73 and OHARA S-LAH53 1.80610/40.93). f = +44.6 mm.

L2 (R +59.04 / −90.61) is the first positive member of the lens and carries one of its two aspherical surfaces. The
air space between L1 and L2 is condition (1)'s d₁₁₋₂ (3.4 mm). The air space from L2 to L3 is d₁₂₋₃ (1.1 mm). Both
L2 and L9, the two aspherical elements, use high-index lanthanum glasses with νd ≈ 40.4. This fits precision glass
molding, but the patent does not state how either element is made (inference).

### L3 — Biconcave Negative (cemented doublet D1)

nd = 1.6129, νd = 37.0. Glass: S-TIM3 (OHARA). f = −12.4 mm.

### L4 — Biconvex Positive (cemented doublet D1)

nd = 1.8348, νd = 42.7. Glass: S-LAH55V (OHARA) equivalent. f = +11.4 mm.

L3 and L4 form the image-side cemented lens of Group 1, which Claim 6 requires. The two elements have nearly equal
and opposite power, and the doublet as a whole is weak at +80.4 mm. Condition (3) compares it with the Group 2 front
doublet, giving f₁ₑ/f₂₁ = 3.25. Condition (4) compares the Nd·νd contrast of this pair with that of L5+L6. L4's rear
surface (R −29.58) is convex toward the stop and the adjacent L5 front surface (R +21.55) is convex toward it from the
other side. That ratio is condition (6).

### Aperture Stop

The stop is patent surface 8, 2.2 mm behind L4. It belongs mechanically to Group 1: D1, the stop-to-L5 gap, is the
spacing that changes between the two groups. Fig. 1 draws its opening at about 4.7 mm radius. The f/2.56 axial beam
needs 4.49 mm (real-ray trace), and the data file uses 4.5 mm.

### L5 — Biconvex Positive (cemented doublet D2)

nd = 1.8348, νd = 42.7. Glass: S-LAH55V (OHARA) equivalent. f = +10.5 mm.

### L6 — Biconcave Negative (cemented doublet D2)

nd = 1.5750, νd = 41.5. Glass: S-TIL27 (OHARA). f = −16.2 mm.

L5+L6 (+24.7 mm) is the strongest group in the lens and is Claim 6's object-side cemented lens of Group 2. At 4.3 mm,
L5 is the thickest element. The pair is unusual because the flint has almost the same Abbe number as the crown (41.5
vs 42.7). The index step at the junction (1.835 → 1.575) therefore acts mainly as a monochromatic correction surface,
and the pair is only weakly achromatic. Most of the color correction in Group 2 comes from L7. Condition (4) expresses
this balance, (Nd₄νd₄ − Nd₃νd₃)/(Nd₅νd₅ − Nd₆νd₆) = 1.44, within its 0.7–1.6 range.

### L7 — Biconcave Negative (cemented doublet D3)

nd = 1.8467, νd = 23.8. Glass: S-TIH53 (OHARA) equivalent — dense flint. f = −12.5 mm.

### L8 — Biconvex Positive (cemented doublet D3)

nd = 1.8348, νd = 42.7. Glass: S-LAH55V (OHARA) equivalent. f = +15.0 mm.

The second Group 2 doublet has almost no net power (−216 mm), but its two elements are individually strong and very
different in dispersion. It is the lens's main achromatizing element pair: the dense flint L7 (νd 23.8) against the
lanthanum crown L8. The pair corrects axial and lateral color without much effect on focal length. Its concave front
surface (R −16.16) also returns negative Petzval contribution close to the image. In Fig. 1 this doublet has the
largest diameter in Group 2, about 9.1 mm radius.

### L9 — Positive Meniscus, convex to image, aspherical front surface

nd = 1.8540, νd = 40.4. Glass: L-LAH85V (OHARA) equivalent — a low-Tg glass for molded aspheres. f = +63.3 mm.

L9 is the weak last element (R −181.46 / −41.88), described in ¶0059 as a meniscus convex toward the image. Its rear
radius is R₂ₑ in condition (5), |R₁₁/R₂ₑ| = 0.57. The aspherical front surface is the lens's main off-axis corrector.
The full-field bundle reaches about 8.9 mm here, and the chief ray about 6.9 mm.

## 4. Glass Identification

| Glass (catalog equivalent) | nd | νd | Elements | Role |
|---|---|---|---|---|
| S-LAL7 (OHARA) | 1.6516 | 58.6 | L1 | front negative meniscus |
| 806404 (unresolved) | 1.8061 | 40.4 | L2 | aspherical positive |
| S-TIM3 (OHARA) | 1.6129 | 37.0 | L3 | flint in Group 1 doublet |
| S-LAH55V (OHARA) | 1.8348 | 42.7 | L4, L5, L8 | positive power in all three doublets |
| S-TIL27 (OHARA) | 1.5750 | 41.5 | L6 | low-index partner of L5 |
| S-TIH53 (OHARA) | 1.8467 | 23.8 | L7 | dense flint, main color corrector |
| L-LAH85V (OHARA) | 1.8540 | 40.4 | L9 | aspherical rear meniscus |

The patent names no glasses and gives no partial-dispersion data. Every label above is a catalog equivalent chosen
because its nd/νd matches the table row. The OHARA labels are coordinate matches, not evidence of the supplier.
L2's 1.8061/40.4 pair has no exact catalog match and uses the six-digit code form, so its dispersion is modeled from the
Abbe number. No element is anomalous-dispersion, so all `apd` flags are false. The positive power is carried mostly by
one glass: S-LAH55V-type lanthanum crown in three of the nine elements. Color is corrected mainly by the high-dispersion
flint L7 in the rear doublet.

## 5. Focus Mechanism

Focusing is floating: Group 1 (L1–L4 with the stop) and Group 2 (L5–L9) both move toward the object, by different
amounts (Claim 1, ¶0059, ¶0082). The patent tabulates two states (Table 2):

| Gap | ∞ | 200 mm | Change |
|---|---|---|---|
| D1 (stop → L5) | 4.46 | 3.85 | −0.61 |
| D2 (L9 → cover plate), patent | 14.10 | 15.78 | +1.68 |

Because D2 is measured to the fixed plate, Group 2 advances 1.68 mm. Group 1 advances 1.68 − 0.61 = 1.07 mm (derived).
Group 2 therefore moves farther than Group 1, and the gap between the groups closes. Condition (7) limits the ratio of
the two gap changes, log|(D1∞ − D1ₜ)/(D2∞ − D2ₜ)| = log(0.61/1.68) = −0.44. According to ¶0035–0037, a smaller Group 1
motion (below the lower limit) makes the lens sensitive to assembly error. A larger motion (above the upper limit)
lengthens focus travel and slows focusing.

The 200 mm "reference shortest distance" is the closest distance at which design performance is held (¶0024). Tracing
the tabulated gaps places the object 198 mm in front of surface 1, which is the 200 mm value to within the rounding of
D1 and D2. The physical object-to-image distance is then about 249 mm (198.1 mm plus the 50.78 mm track through the plate),
which the data file uses as `closeFocusM` (0.249). The
magnification at that distance is −0.092 (calculated). This agrees with Ricoh's "approx. 20 cm – ∞ (from lens)". The
patent publishes no intermediate focus state, so the app interpolates the two tabulated gap sets.

**Back-focus convention.** Table 1 ends with a 2.5 mm plate (nd 1.5168), representing the cover glass and filters
(¶0056–0057), with νd 64.2, followed by "—" for the plate-to-image distance. The data file models the plate
physically through `rearPlates` (N-BK7 class): it is traced by every analysis but not drawn, and D2 keeps the patent's
14.10 / 15.78 mm gap to the plate. The plate's air-equivalent thickness is 2.5/1.5168 = 1.648 mm, and D2 + 1.648 =
15.748 mm is 0.448 mm short of the paraxial image, so the unlisted plate-to-image distance is taken as 0.448 mm in both
states (derived, not printed). With that distance the image plane lies on the paraxial focus to within 0.001 mm, as in
the earlier air-equivalent model. The plate adds no power but contributes its own spherical aberration, astigmatism and
axial colour in the converging beam, which the design was corrected to include.

## 6. Aspherical Surfaces

The patent's sag formula (¶0089) is

X = (H²/R) / [1 + √(1 − k(H/R)²)] + C4·H⁴ + C6·H⁶ + C8·H⁸ + …

Here k takes the place of (1 + K) in the standard form, so the data file stores K = k − 1. There are no odd-order
terms.

| Surface | R | k (patent) | K (stored) | C4 | C6 | C8 | C10 |
|---|---|---|---|---|---|---|---|
| 3 (L2 front) | +59.04 | 16.511 | 15.511 | 1.057E-05 | −8.295E-07 | 3.194E-08 | −4.098E-10 |
| 15 (L9 front) | −181.46 | 0.000 | −1 | −9.157E-05 | 1.096E-06 | −5.305E-08 | 1.237E-09 |

| Surface | C12 | C14 | C16 | C18 |
|---|---|---|---|---|
| 3 | −1.550E-12 | 7.232E-14 | −6.999E-16 | −5.662E-18 |
| 15 | −1.839E-11 | 1.517E-13 | −5.705E-16 | 3.284E-19 |

**Surface 3.** The strongly oblate base (K = 15.5) and the polynomial terms largely cancel. The departure from the
base sphere stays within +21 µm and −13 µm out to the 7.5 mm rim. At the axial marginal height (3.9 mm) it is only
about 3 µm. The surface therefore acts on the oblique bundles, which fill L2 out to about 7 mm, rather than on axial
spherical aberration. Its likely targets are coma and astigmatism of the wide field (interpretation).

**Surface 15.** The paraboloidal base differs from the sphere by less than 1 µm at this weak radius, so the
correction comes from the polynomial. The departure is about −10 µm at the axial marginal height (3.4 mm), −208 µm at
the full-field chief-ray height (6.9 mm) and −683 µm at the top of the full-field bundle (8.9 mm). At the 9.9 mm rim it
reaches −1.26 mm. The added negative sag deepens the concave front of L9 toward the edge, so the effect increases with
field height. That pattern points to control of astigmatism, field curvature and distortion near the image
(interpretation). Fig. 2 shows sagittal and meridional field curves within about ±0.1 mm across the field, and
distortion of about −1.6 % at 38°.

The conic convention was also checked numerically. Reading k as K changes surface 3's sag by only about 2.5 µm and
surface 15's by about 0.2 µm at the rims. The −1.5 % distortion and the small on-axis spherical aberration
reproduce Fig. 2 under the printed formula.

## 7. Conditional Expressions

| Condition | Expression | Range | Example 1 (patent) | Recomputed |
|---|---|---|---|---|
| (1) | d₁₂₋₃ / d₁₁₋₂ | 0.0 – 1.0 | 0.32 | 0.324 |
| (2) | f₁₁ / f₁₂ | −1.0 – −0.1 | −0.57 | −0.565 |
| (3) | f₁ₑ / f₂₁ | 2.0 – 7.9 | 3.24 | 3.248 |
| (4) | (Nd₄νd₄ − Nd₃νd₃) / (Nd₅νd₅ − Nd₆νd₆) | 0.7 – 1.6 | 1.44 | 1.438 |
| (5) | \|R₁₁ / R₂ₑ\| | 0.4 – 2.1 | 0.57 | 0.566 |
| (6) | \|R₁ₑ / R₂₁\| | 1.2 – 2.6 | 1.37 | 1.373 |
| (7) | Log\|(D1∞ − D1ₜ)/(D2∞ − D2ₜ)\| | −15 – −0.05 | −0.44 | −0.440 |

All seven recomputed values agree with the patent's printed values (¶0098), which cross-checks the Table 1
transcription. Two wording points were found in the patent text. First, Claim 2 prints the range of (2) with its limits
reversed ("−0.1 < f₁₁/f₁₂ < −1.0"). Second, the printed value of (6) is obtained with R₁ₑ = L4's image-side radius
(29.58) and R₂₁ = L5's object-side radius (21.55). These are the two surfaces facing the stop, as in Claim 8. The
literal claim text instead names the other side of each cemented lens.

## 8. Semi-Diameters

The patent does not list effective diameters. The data file's rims were measured from Fig. 1 at 400 dpi. The lens
portion of Fig. 1 is drawn to scale, and the vertex crossings give 16.8 px/mm with every axial spacing within about
0.15 mm. The plate is drawn nearer than D2 and was not used. The measured rims are about 9.4 mm for L1 and 7.4–7.5 mm
for L2. L3/L4 measure 7.0/6.5 mm, and the L5+L6 doublet about 7.6 mm. The L7+L8 doublet measures 9.1 mm and L9 9.9 mm.

An exact real-ray trace at f/2.56 with a 14.3 mm image height shows that no surface clips the axial beam or blocks the
full-field chief ray. Only L5 cuts the corner bundle, by a few percent. L3's front rim is 6.7 mm rather than the
figure's 7.0 mm. At 7.0 mm, the concave front of L3 would cross L2's rear surface inside the 1.1 mm air space. Fig. 1
draws these two elements touching at the rim. Two other pairs come close: L1–L2, with about 0.33 mm of clearance at the 7.4 mm rim, and L6–L7, where the
clearance is about 0.07 mm at the L6 rim. For these near-contact gaps the data file uses `gapSagFrac: 0.98` instead of
shrinking the figure rims.

## Sources

- JP 2012-003015 A (Ricoh Co., Ltd.; inventor Takashi Kubota), published 2012-01-05: claims, ¶0024, ¶0034–0037,
  ¶0049–0059, ¶0089–0098, ¶0155–0157, Tables 1–2, Figs. 1–2.
- Ricoh, *GR LENS A12 28mm F2.5 Instruction Manual*, specifications page (focal length, f/2.5–f/22, focus range,
  construction, filter diameter).
- Ricoh Imaging, GXR camera unit product page for the GR LENS A12 28mm F2.5 (special low-dispersion lens, floating
  lens structure, 20 cm minimum shooting distance).
