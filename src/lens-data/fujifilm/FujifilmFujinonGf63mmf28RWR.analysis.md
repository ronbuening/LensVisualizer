## Patent Reference and Design Identification

**Patent:** US 2017/0242219 A1\
**Application Number:** US 15/402,283\
**Priority:** 2016-02-18 (JP 2016-028609)\
**Filed:** 2017-01-10\
**Published:** 2017-08-24\
**Inventor:** Masato Kondo\
**Applicant / Assignee:** Fujifilm Corporation\
**Title:** *Imaging Lens and Imaging Apparatus*\
**Embodiment analyzed:** Example 1

This analysis treats Example 1 as the fixed patent correlation for the **FUJIFILM FUJINON GF 63mm f/2.8 R WR**. The patent does not name the commercial GF63mm lens, so the correlation is not presented as an explicit Fujifilm statement that Example 1 became the production lens. Instead, it rests on convergent agreement between the selected embodiment, Fujifilm's published product specifications, and the independently verified optical model.

1. Example 1 contains ten glass elements in eight air-separated physical groups, matching Fujifilm's published 10-element/8-group construction. Fujifilm also specifies one ED element for the production lens.
2. The patent prints $f=62.12$ mm and FNo. = 2.87 for Example 1 (Table 2). The companion data file independently computes an infinity-focus EFL of **62.1249820968 mm**, while the production lens is marketed as 63 mm f/2.8. The modeled values therefore remain separate from the rounded product designation.
3. The patent specifies a front-focus mechanism in which G1, the aperture stop, and G2 move integrally toward the object while G3 remains fixed with respect to the image plane (¶0054, ¶0091). That topology is the basis of the data file's focus model.
4. Fujifilm specifies a 0.50 m minimum focus distance and 0.17× maximum magnification. Constraining the patent mechanism to 0.50 m gives 12.9074477062 mm of front-assembly travel and predicts 0.1711945×; the reverse 0.17000× check predicts 502.459835 mm MFD. These are computed consistency checks, not manufacturer-published internal spacings.
5. The patent gives a maximum full field of 51.6°, while Fujifilm specifies a 46.9° production angle of view. The wider patent design field is compatible with, rather than identical to, the production capture field.
6. The patent priority date precedes the lens's official 2017-02-28 release date, while the US publication followed several months later.

The selected numerical example is all-spherical and is used without uniform scaling ($s=1.0$). No patent radius, center thickness, refractive index, or Abbe number is corrected in the data model.

## Optical Architecture

Example 1 is a three-functional-group, front-focus prime with the sequence **positive G1 — stop — positive G2 — positive G3**. The patent explicitly identifies G1 and G2 as positive and Example 1's G3 as positive (¶0051, ¶0091). This three-group functional description must be distinguished from the production count of eight air-separated physical groups: the ten physical elements include two cemented pairs, L21+L22 and L31+L32.

Independent paraxial calculation from the final TypeScript arrays gives the following standalone functional-group powers:

| Functional group | EFL (mm) | Power (mm⁻¹) | Interpretation |
|---|---:|---:|---|
| G1 | +188.6310364 | +0.00530135453 | Moderate positive front group |
| G2 | +63.5945099 | +0.01572462784 | Strongest positive functional group |
| G3 | +725.4111707 | +0.00137852854 | Weak positive fixed rear group |

The strongest group power is therefore concentrated in G2. G1 supplies positive front power but incorporates a strong negative L13 to moderate that group. G3 is only weakly positive as an assembly; its fixed position is part of the patent's strategy for limiting focus-induced aberration variation (¶0071).

The aperture stop lies between G1 and G2. The patent argues that this placement makes the system more symmetric than a stop positioned behind G2 and assists correction of several aberrations (¶0066). The stop's axial location is source-published, but its physical diameter is not; the modeled stop semi-diameter is reconstructed later from the patent f/2.87.

Under the project's explicit architecture definitions, the design is neither telephoto nor retrofocus. Using the air-equivalent track, $TL/EFL=1.43372063$, so $TL/EFL$ is not below unity. Likewise, $BFD/EFL=0.53055740$ and the back focal distance is shorter than the EFL, so the retrofocus criterion $BFD>EFL$ is not met.

The patent's optional plane-parallel optical member PP is excluded from the ordinary sequential prescription. Paragraph ¶0053 expressly permits omission of PP, which represents filters and/or protective cover glass. Its optical effect is retained by replacing the physical rear path with the verified air-equivalent S19→IMG spacing of **32.9608687764 mm**.

## Element-by-Element Analysis

### L11 — Positive Meniscus

**nd = 1.95375, νd = 32.32. Glass: 954323 — high-index flint class. f = +61.911840 mm.**

L11 is the front positive meniscus and the strongest positive component within G1 on a standalone-element basis. The patent makes the most object-side element positive to reduce total optical length (¶0055). It also describes the three-element G1 arrangement as two positive lenses followed by a negative lens so the positive power can be distributed rather than concentrated in a single extreme surface pair, easing spherical-aberration correction (¶0064).

Its high index and comparatively low Abbe number make L11 a compact power-bearing element, but the final data deliberately stops at a class-level glass label. The patent does not identify a supplier or publish line-index data for this element.

### L12 — Positive Meniscus

**nd = 1.48749, νd = 70.24. Glass: 487702 — low-dispersion crown class. f = +53.685298 mm.**

L12 is the second positive meniscus of G1. It has the highest Abbe number in the front group and therefore provides a low-dispersion positive component adjacent to the much more dispersive negative L13. The patent specifically identifies the second lens from the image side in G1 as a positive meniscus and associates that form with correction of astigmatism, field curvature, and chromatic aberration (¶0063).

The air gap between the rear of L12 and the front of L13 is itself a patent-controlled optical feature; its curvature ratio is treated separately below under the air-lens discussion.

### L13 — Negative Meniscus

**nd = 1.69895, νd = 30.13. Glass: 699301 — dense-flint class. f = −26.776688 mm.**

L13 is the strong negative rear meniscus of G1. Its standalone power is substantially more negative than either L11 or L12 is positive, but those powers do not add directly because element separations and principal-plane locations matter. The complete G1 remains moderately positive at +188.6310364 mm EFL.

The patent states that the image-side lens of G1 is preferably a negative meniscus and associates it with control of spherical aberration, field curvature, and astigmatism (¶0062). It also assigns the negative member of the three-lens G1 a chromatic-correction role (¶0064). The large Abbe contrast between L12 (70.24) and L13 (30.13) is quantified by patent condition (3).

### L21 — Positive Meniscus, Cemented to L22

**nd = 1.59282, νd = 68.62. Glass: 593686 — FCD505-class ED crown (supplier unproven). f = +139.997886 mm.**

L21 begins G2 and is cemented directly to L22. The patent describes the closest-to-object member of G2 as a meniscus concave toward the object and relates that geometry to spherical-aberration, field-curvature, and astigmatism correction (¶0067). Example 1 uses the more specific cemented form described in ¶0070: a positive meniscus followed by a negative meniscus.

The final data associates L21 with the production lens's single ED position. That is a modeling inference, not a patent supplier statement: Fujifilm publishes one ED element for the GF63mm, and the stored 1.59282/68.62 coordinate is FCD505-class. The class annotation therefore remains explicitly supplier-unproven, and no anomalous-partial-dispersion claim is made from the label alone.

### L22 — Negative Meniscus, Cemented to L21

**nd = 1.59270, νd = 35.31. Glass: 593353 — flint class. f = −44.014190 mm.**

L22 is the negative partner of the first G2 cemented pair. Although L21 is positive as a standalone element, the verified **cemented L21+L22 pair has a net EFL of −59.7209456 mm**. This distinction matters: standalone element power, cemented-pair power, and the in-situ power of the full G2 are not interchangeable quantities.

The patent identifies the second element from the object side in G2 as a meniscus form useful for suppressing astigmatism while maintaining angle of view (¶0068). The strong Abbe contrast between L21 (68.62) and L22 (35.31) also makes this interface the clearest dispersion-balancing cemented pair in the prescription, without implying apochromatic correction.

### L23 — Positive Meniscus

**nd = 1.78800, νd = 47.37. Glass: 788474 — lanthanum high-index class. f = +86.630579 mm.**

L23 is the first of two air-spaced positive menisci following the negative L21+L22 cemented pair. The patent's preferred four-element G2 form places two positive menisci after that cemented pair (¶0070). L23 therefore begins the recovery from the pair's negative net power toward the strongly positive G2 assembly.

Its high index allows substantial positive power without requiring an exceptionally short standalone focal length. The class label is intentionally generic because the stored d-line coordinate can be matched by catalog families without establishing a patent-specified supplier.

### L24 — Positive Meniscus

**nd = 1.81600, νd = 46.62. Glass: 816466 — lanthanum high-index class. f = +59.211458 mm.**

L24 is the rear positive meniscus of G2 and is the stronger of the two air-spaced positive G2 singlets. Together, L23 and L24 overcome the negative power of the front cemented pair so that the complete G2 has an EFL of +63.5945099 mm.

The spacing after L24 is the only focus-variable interval in the LensVisualizer representation. This does not mean L24 alone moves: the patent requires all of G1, the stop, and G2 to translate rigidly together, and the changing D14 gap is the relative-coordinate expression of that motion against fixed G3.

### L31 — Biconvex Positive, Cemented to L32

**nd = 1.69680, νd = 55.53. Glass: 697555 — lanthanum crown class. f = +50.448806 mm.**

L31 is a strong biconvex positive element at the front of fixed G3 and is cemented to L32. The patent allows the object-side member of G3 to be positive and the following element to be negative (¶0072), matching the sign sequence used here.

The L31+L32 cemented pair remains positive despite the negative L32: its verified cemented EFL is **+176.6174859 mm**. This is much weaker than L31's +50.448806 mm standalone power, showing how the negative partner materially reduces the pair's net convergence.

### L32 — Plano-Concave Negative, Cemented to L31

**nd = 1.60342, νd = 38.03. Glass: 603380 — F5/TIM5 flint class. f = −69.619834 mm.**

L32 supplies the negative component of the fixed rear cemented pair. Its plano rear surface has zero paraxial surface power at S17, so its refractive contribution is concentrated at the cemented interface with L31. The 55.53/38.03 Abbe contrast across the pair provides another conventional dispersion-balancing opportunity, but no partial-dispersion behavior is asserted because the data contains no authored $n_C$, $n_F$, $n_g$, or $dP_{gF}$ values.

### L33 — Negative Meniscus

**nd = 1.51633, νd = 64.14. Glass: 516641 — crown class. f = −222.939993 mm.**

L33 is the weak negative rear meniscus and the final glass element. Its negative power tempers the positive L31+L32 cemented pair so that the complete fixed G3 is only weakly positive, with an EFL of +725.4111707 mm.

Because G3 remains stationary during focusing, L33's relationship to the image plane is fixed in the patent mechanism. The changing close-focus geometry occurs ahead of G3 rather than through an independently moving rear element.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers; it does not name glass suppliers or provide per-element C-, F-, or g-line indices. The final data therefore uses six-digit coordinate codes and class labels rather than converting coordinate matches into unsupported supplier identities.

| Element | Data-file glass annotation | nd | νd | Identification status |
|---|---|---:|---:|---|
| L11 | 954323 — high-index flint class | 1.95375 | 32.32 | Class/code only |
| L12 | 487702 — low-dispersion crown class | 1.48749 | 70.24 | Class/code only |
| L13 | 699301 — dense-flint class | 1.69895 | 30.13 | Class/code only |
| L21 | 593686 — FCD505-class ED crown (supplier unproven) | 1.59282 | 68.62 | ED class inference; supplier unproven |
| L22 | 593353 — flint class | 1.59270 | 35.31 | Class/code only |
| L23 | 788474 — lanthanum high-index class | 1.78800 | 47.37 | Class/code only |
| L24 | 816466 — lanthanum high-index class | 1.81600 | 46.62 | Class/code only |
| L31 | 697555 — lanthanum crown class | 1.69680 | 55.53 | Class/code only |
| L32 | 603380 — F5/TIM5 flint class | 1.60342 | 38.03 | Class/code only |
| L33 | 516641 — crown class | 1.51633 | 64.14 | Class/code only |

The six-digit labels are consistent with the stored $n_d/\nu_d$ coordinates. Several coordinates admit multiple catalog equivalents, which is precisely why the data avoids assigning a vendor where the patent is silent. L21 is the one deliberate class-level exception: HOYA publishes FCD505 at the 593-686 coordinate, and Fujifilm specifies one ED element in the production GF63mm. The data consequently uses “FCD505-class ED crown” while retaining the explicit qualifier “supplier unproven.”

No element carries authored $n_C$, $n_F$, $n_g$, or $dP_{gF}$ data. The analysis therefore does not claim apochromatic correction, anomalous partial dispersion, or a specific secondary-spectrum behavior from the class labels alone.

## Focus Mechanism

The patent describes a **front-focus** system rather than a floating system. G1, the aperture stop, and G2 move integrally toward the object as focus is brought closer; G3 remains stationary relative to the image plane (¶0054, ¶0091). The patent emphasizes the mechanical simplicity of this single moving assembly compared with a floating arrangement.

The patent does not publish a close-focus spacing table, so the close state in the data is a **CONSTRAINED_RECONSTRUCTION** rather than a source-published state. The mechanism has one degree of freedom because all internal spacings from G1 through G2 remain fixed; only the separation between moving G2 and fixed G3 changes in relative coordinates.

| Focus state | D14, G2→G3 (mm) | Front-assembly travel (mm) | Constraint / result |
|---|---:|---:|---|
| Infinity | 1.2600000000 | 0 | Patent Table 1 infinity state |
| 0.50 m | 14.1674477062 | 12.9074477062 objectward | Reconstructed from manufacturer MFD |

At the reconstructed 0.50 m state, the exact paraxial conjugate gives a transverse magnification of −0.1711945, or 0.1711945× in magnitude. Fujifilm specifies 0.17× maximum magnification. As a reverse check, solving for exactly 0.17000× yields a predicted MFD of 502.459835 mm. The agreement supports the constrained model but does not convert the reconstructed D14 value into a patent-published spacing.

## Chromatic Correction Strategy

The patent's chromatic strategy is visible at the Abbe-number level even though the data does not contain full line-index information. In G1, L12 has $\nu_d=70.24$ while the following negative L13 has $\nu_d=30.13$. Their difference is **40.11**, exactly the quantity used in conditional expression (3). The patent states that this condition is intended to control chromatic aberration and gives the preferred interval $28<\nu_{1Y}-\nu_{1Z}<42$ (¶0083–¶0084).

G2 adds a second strong dispersion contrast at the L21+L22 cemented interface: 68.62 versus 35.31. L21 is the production ED position in the data model, while L22 provides the negative high-dispersion partner. This is sufficient to describe the pair as dispersion-balancing at the ordinary achromatic level; it is not sufficient to characterize secondary spectrum or APO behavior.

The fixed L31+L32 pair likewise combines $\nu_d=55.53$ and 38.03. That contrast is consistent with chromatic balancing in the rear group, but the patent does not assign a separate conditional expression to it, and the data does not support a stronger spectral claim.

## Air Lens and Stop Strategy

The patent explicitly treats the air space between L12 and L13 as an optical “air lens.” Conditional expression (1) uses the rear radius of L12 and the front radius of L13. For Example 1 the verified ratio is

$$
R_{1Yr}/R_{1Zf}=111.0969/92.4044=1.20229015,
$$

which reproduces Table 17's 1.20 after rounding. The patent explains that the resulting meniscus-shaped air lens is used to assist field-curvature correction (¶0059–¶0061).

The aperture stop itself is source-positioned between G1 and G2, but its clear diameter is not published. The data therefore reconstructs the stop semi-diameter as **7.8158748586 mm** from the patent f/2.87. The resulting entrance-pupil diameter is **21.6463352254 mm**, and the modeled f-number recomputes to 2.870000. These dimensions are modeling results, not patent mechanical dimensions.

The remaining lens-surface semi-diameters are also inferred rather than source-published. They are sized from on-axis marginal rays and exact production-field bundles with clearance, then checked against edge thickness, actual rim slope, cross-gap intrusion, and ray containment. They should therefore be read as validated modeling apertures, not as measured barrel or polished-blank diameters.

## Conditional Expressions

Example 1 satisfies all seven principal patent conditions and all of the tighter preferred ranges. The values below are recomputed from the final data arrays rather than copied from Table 17.

| Condition | Preferred patent range | Computed | Table 17 | Status |
|---|---|---:|---:|---|
| (1) $R_{1Yr}/R_{1Zf}$ | $1.05<x<1.7$ | 1.20229015 | 1.20 | Pass |
| (2) $|f/f_3|$ | $x<0.35$ | 0.08564106 | 0.086 | Pass |
| (3) $\nu_{1Y}-\nu_{1Z}$ | $28<x<42$ | 40.11 | 40.11 | Pass |
| (4) $f/f_2$ | $0.5<x<1.2$ | 0.97689222 | 0.98 | Pass |
| (5) $f/f_1$ | $0.3<x<0.7$ | 0.32934656 | 0.33 | Pass |
| (6) $R_{21f}/f_2$ | $-0.4<x<-0.15$ | −0.28585644 | −0.29 | Pass |
| (7) $B_f/f$ | $0.3<x<0.6$ | 0.53055740 | 0.531 | Pass |

The patent connects these conditions to different design pressures: the L12–L13 air-lens curvature ratio to field curvature; weak G3 power to Petzval and focus stability; the G1 Abbe contrast to chromatic correction; G1 and G2 powers to compactness without excessive spherical aberration or astigmatism; the front G2 radius ratio to spherical-aberration balance; and $B_f/f$ to maintaining usable back focus without unnecessarily increasing total length (¶0059–¶0061, ¶0082–¶0088).

Table 17 also gives $TL/IH=3.07$ for Example 1. The patent does not separately publish exact $IH$, so no exact image height is reconstructed from that rounded ratio in the data or this analysis.

## Verification Summary

The final TypeScript prescription independently reproduces the central first-order quantities of patent Table 2:

| Quantity | Computed from final data | Patent Table 2 |
|---|---:|---:|
| EFL | 62.1249820968 mm | 62.12 mm |
| BFL from S19 | 32.9610018622 mm | 32.96 mm |
| PP-normalized S19→IMG | 32.9608687764 mm | 32.96 mm air-conversion Bf |
| Modeled f-number | 2.870000 | 2.87 |

Independent reduced-angle sequential tracing and ABCD multiplication agree to numerical precision. The verified Petzval sum, computed surface by surface as $\phi/(n n')$, is **+0.00186745094084 mm⁻¹**, with inverse magnitude 535.489302 mm. The weak-power condition $|f/f_3|=0.08564106$ is consistent with the patent's stated aim of suppressing Petzval contribution and focus-related aberration variation (¶0082).

The model uses no uniform scaling: $s=1.0$. Example 1 is all-spherical, so `asph: {}` is intentional and there are no conic constants or polynomial coefficients to transform. No source prescription value is silently corrected.

The rear PP plate is the only omitted optical member. Its source path is 30.0000 mm of air, 3.2500 mm of $n_d=1.51680$ plate, and 0.8182 mm of air. Converting the plate thickness to air gives 32.9608687764 mm, which is the authored final spacing and reproduces the patent Bf at printed precision.

The aperture and lens semi-diameters are modeling inferences because the patent publishes none. The stop semi-diameter is reconstructed from f/2.87. Lens rims are estimated from the 600 dpi Figure 1 using the 56.11 mm glass span (33.38 µm/px). The current SDs follow the optical boundaries, including the shorter L13 rear curve and the stepped rear doublet, without reproducing mechanical flanges. Surface-clearance and image-circle bounds pass. These inferred apertures do not promise unvignetted full-pupil transmission across the patent's 25.8° half-field.

L21 uses inferred-APD coloring: the compatible FCD505 catalog curve gives approximately +0.01597 deviation from the normal partial-dispersion line. This supports a qualified dispersion classification, not a historical supplier identity or a patent-published partial dispersion.

## Sources

- US 2017/0242219 A1, Masato Kondo, *Imaging Lens and Imaging Apparatus*, published 2017-08-24. Primary prescription: Example 1, Tables 1–2 and 17; focus and design discussion: ¶0051–¶0096. https://patents.google.com/patent/US20170242219A1/en
- FUJIFILM, **FUJINON GF63mmF2.8 R WR** official product page. Product construction and one-ED specification. https://www.fujifilm-x.com/global/products/lenses/gf63mmf28-r-wr/
- FUJIFILM, **GF63mmF2.8 R WR Owner's Manual**, specifications: 63 mm, 46.9°, f/2.8–f/32, 9 blades, 0.5 m–∞, 0.17×. https://dl.fujifilm-x.com/support/manual/lenses/lens_gf63mmf28_r_wr_manual_01.pdf
- FUJIFILM Mall Japan, **GF63mmF2.8 R WR**, official release date 2017-02-28 and product specifications. https://mall-jp.fujifilm.com/shop/g/g16536647/
- HOYA Optics Division, **FCD505** historical glass notice and 2019 data update. These support the 593-686/FCD505 class coordinate but do not establish the supplier of the production element. https://www.hoya-opticalworld.com/english/news/past01.html and https://www.hoya-opticalworld.com/english/datadownload/data_up2019.html

### Patent-rim and glass audit (2026-09-11 UTC)

Figure 1 (PDF p.2) was inspected at 600 dpi. The 56.11 mm glass span gives 33.38 µm/px. The initial screening retained the ray-envelope estimates; the subsequent direct viewer comparison refined individual optical rims as recorded in the sibling audit. All ten elements already resolve to compatible catalog dispersion.
