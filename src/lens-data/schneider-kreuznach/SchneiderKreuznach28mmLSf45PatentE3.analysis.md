## Patent Reference and Design Identification

**Patent:** JP 2006-300972 A, corroborated by JP 4717493 B2  
**Title:** Retrofocus type super-wide-angle lens  
**Inventor:** Hisataro Shimada (島田久太郎; romanized as in patent indexes)  
**Assignee:** Mamiya-OP Co., Ltd.  
**Filed:** 2005-04-15  
**Published:** 2006-11-02  
**Example details:** 実施例3, Tables 3A/3B on PDF pp. 10–11, Fig. 7 on p. 13; the grant prints the same prescription on its p. 10.

Example 3 is the probable basis of the **Schneider-Kreuznach 28mm LS f/4.5 Aspherical** sold for the Phase One / Mamiya 645AF system. The patent belongs to Mamiya-OP; the Schneider-Kreuznach name on the production lens does not make Schneider its optical designer. Three points tie the example to the product:

1. Phase One's 2021 flyer gives 14 elements in 10 groups, with four front negative menisci and four cemented pairs, as in Example 3.
2. The axial vertex positions in the flyer's section fit Example 3 to 0.10 mm RMS, against 1.81 mm for Example 2 and 2.81 mm for Example 1. The section also draws L13 with a flat front, matching Example 3's R23 = ∞.
3. The patent's aberration plots are for infinity and 0.35 m, the production lens's minimum focus, and its 102.4° field is close to the flyer's 102.7°.

This does not prove that the factory radii are identical, nor that the earlier focal-plane-shutter AF 28mm D shares this prescription.

The model keeps the patent's scale: f = 28.5 mm, F/4.6 and a 102.4° full field. The production figures (28 mm, f/4.5, 102.7°) are nominal, and no rescaling or image-plane adjustment is applied. The patent prints neither clear apertures nor an iris diameter, so both are inferred; the strong corner vignetting follows from those inferred rims and is not a measured property of the production lens.

## Optical Architecture

Example 3 is a two-group retrofocus design, negative GR1 then positive GR2, built for a back focus of at least twice the focal length (¶0008). Its 14 elements form 10 air-separated groups: four negative singlets, a positive/negative cemented pair, a smaller positive/negative pair before the stop, an isolated positive, a negative/positive pair, a positive meniscus, and a final positive/negative pair. The four front negative menisci share the strong divergence a retrofocus wide angle needs, which keeps each surface's aberrations down (¶0010); the rear positive assembly provides the long back focus. GR1 holds the first six elements; GR2 holds the remaining eight and the stop, which is surface 15, with d14 = 8.5441 mm and d15 = 2.2231 mm. The printed conditions give |Fgr1/F| = 4.05 and Fgr2/F = 1.89 (¶0052), inside the claimed ranges of 2.3–5.3 and 1.5–2.4.

Phase One's section adds a thin plate behind the last element that the patent does not list. Its glass, thickness and position are unknown, so it is not modeled. The section also highlights L2's front face in blue, but carries no legend, so it does not on its own show that the production lens has an asphere there.

## Element-by-Element Analysis

Each focal length below is for the element alone in air, from its two radii, thickness and printed index; for cemented elements it is a reference value, not the element's power in place. The patent names no glasses, so every element is listed as unmatched.

### L1 — Negative Meniscus

nd = 1.83481, νd = 42.7. Glass: Unmatched. f = −135.8976 mm.

Front negative meniscus, convex to the object so that the steep incoming field meets it near minimum deviation (¶0010). It takes the first share of GR1's divergence.

### L2 — Negative Meniscus (Aspheric)

nd = 1.43875, νd = 90.9. Glass: Unmatched. f = −70.9272 mm.

Second negative meniscus. Its convex object face carries the lens's only asphere, placed where the beams of different field angles are still narrow and well separated (¶0012). Its νd 90.9 glass is the Vn > 62 front negative of condition (5) (¶0052).

### L3 — Negative Meniscus

nd = 1.83481, νd = 42.7. Glass: Unmatched. f = −78.3741 mm.

Third negative meniscus, convex to the object, continuing the front divergence. Its inferred rear clear radius (15.45 mm) is limited by the air gap to L4.

### L4 — Negative Meniscus

nd = 1.80809, νd = 22.6. Glass: Unmatched. f = −124.3659 mm.

Fourth negative meniscus, turned concave to the object (¶0029); the patent notes that this orientation also helps correct lateral color (¶0013).

### L5 — Biconvex Positive

nd = 1.76182, νd = 26.5. Glass: Unmatched. f = +22.8209 mm.

Positive member of the cemented pair that ends GR1. The pair is positive overall, f = +46.86 mm.

### L6 — Negative Meniscus

nd = 1.80518, νd = 25.4. Glass: Unmatched. f = −43.1344 mm.

Negative meniscus cemented to L5. Their shared surface 10 is concave to the object and has negative power, the cemented-surface form the patent uses to correct lateral color (¶0009, ¶0013).

### L7 — Positive Meniscus

nd = 1.56732, νd = 42.7. Glass: Unmatched. f = +44.1484 mm.

Positive front member of the smaller cemented pair that opens GR2 ahead of the stop.

### L8 — Negative Meniscus

nd = 1.78800, νd = 47.4. Glass: Unmatched. f = −23.6222 mm.

Negative member of that pair, sharing surface 13; the pair is negative overall, f = −60.56 mm.

### L9 — Biconvex Positive

nd = 1.48749, νd = 70.1. Glass: Unmatched. f = +31.4880 mm.

Positive singlet directly behind the stop, one of the Vp > 62 positives of condition (4) (¶0052).

### L10 — Biconcave Negative

nd = 1.83481, νd = 42.7. Glass: Unmatched. f = −17.2749 mm.

High-index negative member of the cemented pair behind L9.

### L11 — Biconvex Positive

nd = 1.57099, νd = 50.7. Glass: Unmatched. f = +25.0994 mm.

Positive member of that pair, sharing surface 19; the pair is weakly negative, f = −135.40 mm.

### L12 — Positive Meniscus

nd = 1.43875, νd = 90.9. Glass: Unmatched. f = +78.5499 mm.

Rear positive meniscus with a weakly curved front face; its νd 90.9 glass gives Example 3's second Vp value (¶0052).

### L13 — Plano-Convex Positive

nd = 1.48749, νd = 70.1. Glass: Unmatched. f = +42.2364 mm.

Plano-convex positive member of the final pair; its flat front is surface 23. Like L9, it uses νd 70.1 glass, meeting Vp > 62.

### L14 — Negative Meniscus

nd = 1.83481, νd = 42.7. Glass: Unmatched. f = −36.3125 mm.

Negative member of the final pair, sharing surface 24; the pair is weakly negative, f = −239.01 mm.

## Glass Identification and Spectral Scope

The patent defines N(I) as the index after each surface at the **d line** and V(I) as its Abbe number (¶0032). It prints no wavelength value, glass names or partial-dispersion data, so the model uses the printed nd/νd exactly, with the conventional d-line wavelength of 587.5618 nm, which the patent does not state.

Conditions (4) and (5) govern the color correction (¶0022–0024): at least one positive lens behind the stop with Vp > 62, and at least one of the four front negative menisci with Vn > 62. The patent describes such glasses as having high partial dispersion, so that blue rays are deflected more strongly and lateral color is corrected efficiently. Example 3 meets both with L9 and L13 (νd 70.1) and L12 (νd 90.9) behind the stop, and L2 (νd 90.9) in front (¶0052). Because the model has only nd and νd, its color curves are Abbe-number estimates that cannot show that partial-dispersion effect; they are not measured data.

## Focus and Image Plane

The model is **infinity only**. The patent focuses by holding GR1 still and moving GR2, stop included, toward the object (¶0014, ¶0028), and it plots aberrations at infinity and 0.35 m (¶0053), the production lens's minimum focus. It prints no near-state spacings and does not say where 0.35 m is measured from, so close focus is not modeled.

Table 3A leaves D25 blank; ¶0032 defines the separately printed FB as the back focus. With no rear plate listed, the model takes **FB = 63.9 mm as the air gap from the last surface to the image**; 63.9 is not printed in the D25 column. The 117.6806 mm from S1 to S25 then puts the image 181.5806 mm from S1. Traced from the printed data, the model's EFL is 28.4792 mm and its paraxial back focus 63.9209 mm, against the printed 28.5 and 63.9 mm; the 0.021 mm differences are left in place rather than refocused.

## Aspheric Surface

Only S3, the convex front face of L2, is aspheric. The patent's sag equation is

$$
X=\frac{Y^2/R}{1+\sqrt{1-A_0(Y/R)^2}}+A_2Y^2+A_4Y^4+A_6Y^6+A_8Y^8+A_{10}Y^{10}
$$

in which A0 = 1 is a sphere, so the conventional conic constant is K = A0 − 1. Table 3B prints A0 = .16235900E+02 (K = 15.2359), A2 = 0, A4 = .73817775E−05, A6 = −.41918163E−08, A8 = .30834735E−11 and A10 = −.24494941E−15. With A2 = 0, the 125 mm base radius sets the paraxial curvature.

A0 > 1 is condition (3): the base is an oblate ellipsoid with the optical axis as its short axis, so its radius of curvature shrinks toward the edge, which corrects the negative distortion of the front menisci (¶0011, ¶0021). On these menisci the convex face has the longer base radius, so an asphere there needs less sag and slope than one on the concave face and is easier to make (¶0011, ¶0025). The oblate base is defined only out to Y = R/√A0 ≈ 31.0 mm; the inferred 29.5 mm clear radius of S3 stays inside that limit.

## Aperture and Clear Radii

The patent prints neither an iris diameter nor clear apertures. The model sizes the iris from the printed F/4.6: radius 7.058 mm, giving a paraxial entrance-pupil radius of 3.096 mm.

The clear radii follow the element outlines in Fig. 7, with two set by geometry. S6, the rear face of L3, was first estimated at 18.5 mm but would then cross the front face of L4, so the default limit on sag intrusion into an air gap holds it to 15.45 mm. S2, the rear face of L1, was raised from 28 to 28.7 mm, the smallest value that passes the chief ray at the 645 corner; Fig. 7 draws it at about 31–33 mm, so the modeled rim stays inside the drawn size.

## Model Scope and Limitations

The printed 51.2° half-field lands at 34.876 mm image height, essentially the 34.85 mm half-diagonal of the 645 format, so the model covers the full frame. Wide open, its geometric transmission relative to the axis stays above 99 % out to 31°, then falls to about 90 % at 40°, 80 % at 45.5° and 32 % at the 51.2° corner. Because every rim is inferred, that fall-off, and any vignetting or MTF result near the corner, describes this model rather than the production lens.

The model is a single infinity state at the patent's scale, with Abbe-number dispersion and without the thin rear plate shown in Phase One's section. Its aberration and MTF results describe Example 3 as printed, not measurements of the production 28mm LS.

## Primary Sources

- [JP 2006-300972 A](https://patents.google.com/patent/JP2006300972A/ja), Example 3: Tables 3A/3B, the aspheric equation and Fig. 7.
- [JP 4717493 B2](https://patents.google.com/patent/JP4717493B2/ja), the granted patent; its p. 10 prints the same Example 3 prescription.
- [Phase One, Schneider-Kreuznach 28mm LS f/4.5 flyer (2021)](https://www.phaseone.com/wp-content/uploads/2024/01/28mm_lens_flyer_A4_2021.pdf), product specifications and the lens section on p. 2; evidence for the product match, not for exact production radii.
