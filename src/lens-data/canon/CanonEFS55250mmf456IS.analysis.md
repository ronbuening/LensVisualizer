# CANON EF-S 55-250mm f/4-5.6 IS — Patent Analysis

## Patent Reference and Design Identification

**Patent:** US 2008/0112063 A1  
**Priority:** November 14, 2006 (JP 2006-307838)  
**Filed:** November 13, 2007  
**Published:** May 15, 2008  
**Inventor:** Takahiro Hatada  
**Assignee:** Canon Kabushiki Kaisha  
**Title:** *Zoom Lens and Image Pickup Apparatus Having the Same*  
**Embodiment analyzed:** Numerical Embodiment 2 / Example 2

The prescription modeled here is Numerical Embodiment 2 of US 2008/0112063 A1. The patent defines a three-unit positive-negative-positive zoom architecture for Embodiment 2, with the first and third units moving toward the object during zooming and the second unit following a reversing axial locus while also serving as the transversely shifted image-stabilizing unit (¶¶0078–0079, 0083, 0089). The numerical table on printed patent page 5 supplies 23 numbered surfaces including the aperture stop, two published variable-gap rows across three infinity-focus zoom nodes, and d-line refractive indices and Abbe numbers (¶0114). No aspherical coefficients or clear-aperture table are published for this example.

The selected production correlation is the original **Canon EF-S 55-250mm f/4-5.6 IS**. That correlation is fixed for this model, but it remains a source-based identification rather than a Canon statement that “Example 2” is the commercial prescription. Several independent points converge:

1. Canon specifies **12 elements in 10 groups**, exactly matching the element and air-separated-group count reconstructed from Example 2.
2. Canon specifies **one UD element**. The patent coordinate `nd = 1.49700, νd = 81.54` used by L13 exactly matches the OHARA S-FPL51 coordinate in the catalog audit, making L13 the strongest coordinate-based candidate for the marketed UD element. This is an inference; the patent does not name the glass vendor or the commercial UD designation.
3. The patent places the negative L2 unit in the image-stabilizing role. Canon's product documentation likewise identifies a compact IS unit in the optical system.
4. Canon publishes a **1.1 m** closest focusing distance and **0.31×** maximum magnification at the telephoto end. With the patent's L1-only focus mechanism and the final data-file geometry, the constrained 1.1 m reconstruction gives **0.310367×** paraxial magnification at telephoto.
5. The chronology is consistent: the patent claims November 2006 priority, was filed in November 2007, and Canon marketed the original lens in November 2007.
6. The patent design range computes to **56.898–241.316 mm**, while Canon markets **55–250 mm**. Because the required wide and tele scale factors differ materially, the final prescription is retained **unscaled** rather than forcing the patent endpoints onto the marketing labels.

Marketing and design values are therefore kept separate. The catalog name remains 55–250mm f/4–5.6, while the modeled design uses the patent focal-length nodes `56.9 / 160.8 / 241.3 mm` and the computed EFLs stated below. The patent publishes endpoint F-numbers of **4.16** and **5.88**, which are also kept separate from Canon's rounded f/4–5.6 designation.

## Optical Architecture

Example 2 contains **12 glass elements in 10 air-separated groups** and three functional zoom units. The first unit L1 is positive, the second unit L2 is negative, and the third unit L3 is positive. Two cemented pairs reduce the air-separated group count: L12/L13 in L1 and L21/L22 in L2. Every refracting surface is spherical.

Independent first-order computation from the final data arrays gives fixed-unit focal lengths of **+112.8998 mm for L1**, **−26.6790 mm for L2**, and **+40.4824 mm for L3**. These are unit properties, not marketing focal lengths and not the standalone focal lengths of individual elements.

L1 combines the large front positive element L11 with a cemented negative/positive pair. It is both a zooming unit and the focusing unit. The patent specifies that L1 moves toward the object from wide to tele (¶0078) and that axial L1 movement performs focusing (¶0081).

L2 is a compact negative unit consisting of a cemented negative/positive pair followed by a separate negative element. The patent explicitly identifies this three-element arrangement and connects it with suppression of decentration aberration when L2 is shifted for image stabilization (¶0102). During zooming, L2 follows a locus convex toward the image side rather than moving monotonically (¶0079). The final three-node data preserve that reversal.

L3 is a six-element positive unit. Two positive elements precede the stop; the stop lies between L32 and L33, and four further elements follow it. The stop position itself is source-published: the numerical table places surface 15 as `Stop` with 1.56909 mm of air after surface 14 and 0.49801 mm before surface 16. Only the stop diameter is modeled.

The zoom motion is not reducible to a simple front-unit translation. With the image plane normalized to zero, computation from the final infinity spacings gives wide-to-tele motion of approximately **40.666 mm objectward for L1** and **30.119 mm objectward for L3**. L2 moves about **4.901 mm imageward** from wide to the published middle node and then about **4.811 mm objectward** to tele, leaving only a small net endpoint displacement. This non-monotonic behavior is important both to the optical model and to interpretation of the patent's movement conditions.

The patent describes the family as “telephoto type.” Under the project's stricter geometrical usage, which reserves “telephoto” for `track/EFL < 1`, the wide and middle states do not meet that criterion; the tele endpoint does. None of the three states is retrofocus under the project's `BFD > EFL` test.

## Element-by-Element Analysis

### L11 — Biconvex Positive

`nd = 1.51633, νd = 64.14. Glass: S-BSL7 (OHARA-equivalent; exact patent coordinate match). f = +142.8438 mm.`

L11 is the first and largest-diameter element of the system. Its two opposite-sign radii make it biconvex in the adopted object-left/image-right sign convention. Its positive standalone power forms the front collector of L1 and establishes part of the positive power that allows the front unit to serve both zoom and focus functions.

The S-BSL7 label is a catalog-equivalent assignment, not a patent-named material. The stored d-line coordinate matches the OHARA entry exactly; the additional C-, F-, and g-line data in the data file are catalog-derived.

### L12 — Negative Meniscus, Cemented D1 Front Member

`nd = 1.80100, νd = 34.97. Glass: S-LAM66 (OHARA-equivalent; exact patent coordinate match). f = −118.0213 mm.`

L12 is a negative meniscus and the front member of the first cemented pair. Its standalone power is negative, but it is not meaningful to treat that isolated value as its complete in-situ contribution: surface 4 is a true glass-to-glass junction into L13.

### L13 — Positive Meniscus, Cemented D1 Rear Member

`nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA-equivalent; exact patent coordinate match). f = +95.7634 mm.`

L13 is the positive, low-dispersion member of D1. The high Abbe number produces substantial dispersion contrast against L12 while the pair remains weakly positive as a cemented assembly. Independent computation of the complete L12/L13 cemented pair gives a net focal length of **+566.0875 mm**, whereas the full L1 unit is much stronger at **+112.8998 mm** because L11 and the internal separations also contribute.

Canon markets one UD element in the production lens. The exact S-FPL51 coordinate match makes L13 the strongest candidate for that element, but this is a correlation inference rather than a patent identification of a commercial glass.

### L21 — Biconcave Negative, Cemented D2 Front Member

`nd = 1.71300, νd = 53.87. Glass: S-LAL8 (OHARA-equivalent; exact patent coordinate match). f = −24.6432 mm.`

L21 is the strongest negative standalone element in the system. Its biconcave form begins the image-stabilizing L2 unit and is cemented directly to L22. The patent's discussion of L2 emphasizes the unit as a whole rather than assigning an independent aberration function to this surface pair.

### L22 — Positive Meniscus, Cemented D2 Rear Member

`nd = 1.84666, νd = 23.93. Glass: Unmatched (847239 high-index flint; nearest OHARA S-TIH53WN has νd = 23.86). f = +37.7908 mm.`

L22 is a high-index, high-dispersion positive meniscus cemented to L21. The complete D2 pair remains negative: its independently computed cemented focal length is **−65.0135 mm**. This distinction matters because L22 is positive in isolation while the cemented pair and the complete L2 unit are both negative.

No exact coordinate match for `1.84666 / 23.93` was found in the six-vendor catalog audit. The data therefore retain an explicit `Unmatched` identity. Its stored `nC`, `nF`, and `ng` values are a modeled spectral proxy refit to the patent's `nd/νd`; `dPgF` is retained from the nearest S-TIH53WN family. Those fields support spectral modeling but do **not** establish that the patent glass is S-TIH53WN.

### L23 — Biconcave Negative

`nd = 1.80400, νd = 46.57. Glass: H-ZLaF50E (CDGM-equivalent; exact patent coordinate match). f = −46.7663 mm.`

L23 follows D2 as the separate rear negative element of L2. Together, D2 and L23 produce the fixed-unit focal length of **−26.6790 mm**. This is the unit that moves transversely for stabilization and slightly along the axis during zooming.

CDGM H-ZLaF50E is an exact current-catalog coordinate match at `nd = 1.80400, νd = 46.57`. The name is retained only as a catalog-equivalent annotation; the patent does not identify CDGM or any glass vendor.

### L31 — Biconvex Positive

`nd = 1.63854, νd = 55.38. Glass: S-BSM18 (OHARA-equivalent; exact patent coordinate match). f = +53.2389 mm.`

L31 begins the positive L3 unit. Its biconvex form and positive standalone power provide a substantial portion of the converging action ahead of the stop. L31 is air-separated from L32, so its isolated focal length and its in-situ behavior should not be conflated.

### L32 — Biconvex Positive

`nd = 1.60311, νd = 60.64. Glass: S-BSM14 (OHARA-equivalent; exact patent coordinate match). f = +65.0554 mm.`

L32 is the second positive element in L3 and lies immediately objectward of the aperture stop. Its position makes it part of the front-of-stop pupil-forming optics. The patent supplies the stop location but no physical aperture diameter.

### L33 — Positive Meniscus

`nd = 1.48749, νd = 70.23. Glass: S-FSL5 (OHARA-equivalent; exact patent coordinate match). f = +71.2769 mm.`

L33 is the first glass element after the stop. It is a low-index, relatively low-dispersion positive meniscus. In the complete L3 matrix, it participates in the positive relay immediately after the aperture but is not assigned a separate patent-stated aberration function.

### L34 — Biconcave Negative

`nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA-equivalent; exact patent coordinate match). f = −41.3072 mm.`

L34 is a high-index, high-dispersion negative element in the rear half of L3. Unlike L22, its patent coordinate is an exact match to the catalog S-TIH53 coordinate used in the data file. Its negative standalone power opposes the positive elements surrounding it, but the complete L3 unit remains strongly positive.

### L35 — Negative Meniscus

`nd = 1.83400, νd = 37.16. Glass: S-LAH60 (OHARA-equivalent; exact patent coordinate match). f = −45.4063 mm.`

L35 is a negative meniscus separated from L34 by the longest fixed air space inside L3. Its individual power is negative. The large axial spacing means its contribution to the rear-unit matrix cannot be inferred from standalone power alone.

### L36 — Biconvex Positive

`nd = 1.68893, νd = 31.07. Glass: S-TIM28 (OHARA-equivalent; exact patent coordinate match). f = +54.6002 mm.`

L36 is the final positive element before image space. Its biconvex form closes the alternating rear power sequence of L3. The final air space after its rear surface is not published numerically in Example 2; the data file therefore uses a computed paraxial BFD at each zoom node.

## Glass Identification and Selection

The patent provides only `nd` and `νd`; it does not identify manufacturers or commercial glass names. The final data file preserves those patent coordinates and treats glass names as catalog-equivalent annotations. Ten of the twelve element coordinates match current OHARA S-family entries exactly in `nd/νd`; L23 exactly matches current CDGM H-ZLaF50E; L22 remains unresolved.

| Element | Patent `nd / νd` | Data-file glass label | Provenance |
|---|---|---|---|
| L11 | 1.51633 / 64.14 | S-BSL7 | Exact OHARA-equivalent coordinate |
| L12 | 1.80100 / 34.97 | S-LAM66 | Exact OHARA-equivalent coordinate |
| L13 | 1.49700 / 81.54 | S-FPL51 | Exact OHARA-equivalent coordinate; UD-class candidate |
| L21 | 1.71300 / 53.87 | S-LAL8 | Exact OHARA-equivalent coordinate |
| L22 | 1.84666 / 23.93 | Unmatched 847239 high-index flint | No exact six-vendor catalog match; modeled spectral proxy |
| L23 | 1.80400 / 46.57 | H-ZLaF50E | Exact CDGM-equivalent coordinate |
| L31 | 1.63854 / 55.38 | S-BSM18 | Exact OHARA-equivalent coordinate |
| L32 | 1.60311 / 60.64 | S-BSM14 | Exact OHARA-equivalent coordinate |
| L33 | 1.48749 / 70.23 | S-FSL5 | Exact OHARA-equivalent coordinate |
| L34 | 1.84666 / 23.78 | S-TIH53 | Exact OHARA-equivalent coordinate |
| L35 | 1.83400 / 37.16 | S-LAH60 | Exact OHARA-equivalent coordinate |
| L36 | 1.68893 / 31.07 | S-TIM28 | Exact OHARA-equivalent coordinate |

The stored `nC`, `nF`, `ng`, and `dPgF` fields are not patent data. For the named equivalents they come from the catalog audit; for L22 they are explicitly modeled as a proxy. The presence of these line data permits more detailed dispersion modeling than bare Abbe numbers, but it does not justify labeling the complete lens apochromatic. No APO claim is made here.

The clearest chromatic pairing is D1. L12 combines `νd = 34.97` with L13 at `νd = 81.54`, giving a large dispersion contrast inside a weakly positive cemented pair. This is consistent with Canon's statement that the production optical system contains one UD element, but the patent itself does not assign the commercial UD designation.

## Focus Mechanism

The patent specifies axial movement of L1 for focusing (¶0081) but does not publish a finite-object spacing table for Example 2. The final data therefore uses the focus status **`CONSTRAINED_RECONSTRUCTION`** rather than presenting close-focus positions as source rows.

The reconstruction combines two source constraints: L1 alone translates axially, and Canon specifies a closest focusing distance of **1.1 m**. Canon documentation measures lens minimum focusing distance from the camera's focal-plane mark to the subject. For each of the three zoom nodes, L2 and L3 remain at their infinity zoom positions, the image plane remains fixed, and a single L1 translation is solved so that the object-to-image paraxial matrix satisfies the conjugate condition.

| Zoom node | Infinity `d5` (mm) | Reconstructed close `d5` (mm) | L1 translation | `|m|` at 1.1 m |
|---|---:|---:|---:|---:|
| Wide | 7.19326 | 22.756327 | 15.563067 mm objectward | 0.069471× |
| Middle | 42.37555 | 58.548635 | 16.173085 mm objectward | 0.204106× |
| Tele | 47.94835 | 64.342025 | 16.393675 mm objectward | 0.310367× |

The telephoto reconstruction reproduces Canon's rounded **0.31×** maximum magnification closely. That agreement supports the selected correlation and focus interpretation, but it does not convert the reconstructed close-focus spacings into patent-published values.

The last gap after surface 23 is zoom-dependent but not focus-dependent in this model. This follows from keeping L2, L3, and the image plane fixed during the L1-only focus solve.

## Chromatic Correction Strategy

The design's chromatic strategy is most evident in the glass contrasts rather than in any aspherical correction, because Example 2 is entirely spherical. The first unit places the high-Abbe L13 directly behind the lower-Abbe L12 in a cemented pair, while L2 and the rear part of L3 use several high-index, lower-Abbe materials to distribute power without relying on a single high-curvature material family.

The data file's S-FPL51-equivalent L13 has the strongest claim to correspondence with Canon's marketed UD element. That identification is based on the exact `nd/νd` coordinate and the one-UD-element production specification; the patent does not name OHARA or designate L13 as “UD.”

The line-index data in the final model are sufficient to avoid a purely Abbe-only dispersion model for the named equivalent glasses. L22 remains the exception: its spectral fields are a deliberately disclosed proxy. Consequently, the analysis does not infer apochromatic correction, secondary-spectrum performance, or anomalous-dispersion behavior beyond what the catalog fields directly support.

## Conditional Expressions

The patent uses four dimensionless conditions to constrain the zoom-unit powers and movements (¶¶0090, 0103, 0107). Recalculation from the final data arrays gives the following values:

| Condition | Patent range | Computed value | Result |
|---|---|---:|---|
| `(1)` `0.60 < m3/m1 < 0.90` | 0.60–0.90 | 0.740653 | Pass |
| `(2)` `0.080 < |f2|/ft < 0.120` | 0.080–0.120 | 0.110556 | Pass |
| `(3)` `0.30 < f1/ft < 0.60` | 0.30–0.60 | 0.467851 | Pass |
| `(4)` `−0.150 < m2/m1 < 0.150` | −0.150–0.150 | see below | Source-definition conflict |

Conditions (1)–(3) reproduce the rounded Example 2 entries in Patent Table 1 (`0.74`, `0.111`, and `0.47`).

Condition (4) exposes a direct source inconsistency. Paragraph 0092 states that, when a unit reciprocates, “maximum moving distance” is the maximum absolute axial excursion. Example 2's L2 reverses at the middle node. The signed wide-to-tele endpoint displacement gives `m2/m1 = −0.002194`, reproducing Table 1's printed `−0.002`. The sampled maximum L2 excursion, however, is 4.900653 mm from the wide state, giving a magnitude ratio of **0.120510** relative to L1's wide-to-tele movement.

The two interpretations have different consequences. The Table-1-style endpoint value satisfies both the broad ±0.150 range and the preferred ±0.100 range in ¶0112. The sampled maximum-excursion magnitude satisfies the broad range but not the preferred range. The final model retains the published three-node L2 trajectory and does not alter it to reconcile the prose definition with Table 1.

## Image Stabilization

Image stabilization is integral to the architecture rather than a separate rear compensator. Patent ¶0083 specifies that L2 moves with a component perpendicular to the optical axis to displace the image and counteract camera vibration. Paragraph 0102 describes L2 as a cemented negative/positive pair followed by a negative element, which is exactly the construction preserved in the data file.

The centered prescription gives L2 a computed fixed-unit focal length of **−26.6790 mm**. D2 by itself is also negative at **−65.0135 mm**, even though its L22 member is positive in isolation. This is why standalone element powers should not be used as a substitute for the cemented-pair or complete-unit behavior.

The current data file models the centered optical prescription and the axial zoom/focus states. It does not author a transverse IS displacement amount, because Example 2 does not provide a production IS travel to be used as a viewer state. The patent's stabilization mechanism is therefore described here as source architecture rather than represented by an invented decentered state.

## Aperture and Clear-Aperture Modeling

The **stop position is published**, but the **stop diameter is not**. The patent gives endpoint F-numbers of **4.16** and **5.88**. Inverse pupil calculation from the final prescription implies physical stop radii of approximately **9.83856 mm** at wide and **9.35547 mm** at tele. A single unchanged stop radius would not reproduce both published endpoint F-numbers.

The required middle zoom node has no patent-published F-number. The final data therefore uses **5.129132** as a disclosed linear interpolation of the two published endpoint F-numbers in the patent focal-length coordinate. Its corresponding inferred stop radius is approximately **9.38616 mm**. This is a viewer/modeling choice, not a source value.

Example 2 likewise publishes no clear-aperture or semi-diameter table. Every authored surface `sd` is therefore an inference based on the paraxial marginal/chief-ray envelope, the 13.66 mm image height shown in the aberration figures, inferred pupil geometry, the proportions of Fig. 5, and geometric validation. These values should not be read as Canon mechanical clear apertures.

The final semi-diameter set was checked across all three zoom nodes at infinity and at the reconstructed close-focus states. The minimum computed glass edge thickness is **0.3801 mm**, the largest spherical rim-slope angle is **36.35°**, and the tightest shared-band cross-gap margin is **0.00718 mm** at the surface 8→9 gap in the wide/infinity state. These are validation results for the authored model, not patent dimensions.

## Verification Summary

The final TypeScript arrays were reloaded and recomputed rather than relying on a copied prescription table. Sequential reduced-angle `y–ν` tracing and an independently accumulated ABCD matrix agree to floating-point precision at the three infinity zoom nodes.

| Zoom node | Patent focal length (mm) | Computed EFL (mm) | Computed BFD (mm) |
|---|---:|---:|---:|
| Wide | 56.9 | 56.898033 | 52.453130 |
| Middle | 160.8 | 160.860375 | 67.883937 |
| Tele | 241.3 | 241.315658 | 82.572412 |

The patent prints surface 23's following distance as `Variable` but omits the corresponding d23 values for Example 2. The BFD values above are therefore paraxially computed and authored as the rear gap to the fixed image plane; they are not transcribed source rows.

Using the patent's maximum image height of **13.66 mm**, the computed wide EFL gives a paraxial half-field of **13.49999°**, matching the 13.5° label in Fig. 6A. The tele EFL gives **3.23985°**, consistent with the 3.2° label in Fig. 6B at the figure's displayed precision.

Petzval curvature was independently summed surface by surface using `φ/(n·n′)`, giving **+0.000951095 mm⁻¹** for the complete design. This result is a paraxial diagnostic and should not be confused with a measured production field-curvature specification.

No uniform scale factor is applied. Consequently, no dimensional scaling correction is present anywhere in the prescription. Example 2 has no aspherical surfaces, so asphere-convention conversion and coefficient scaling are not applicable.

No sensor cover glass, filter, inactive dummy plane, flare-cutter plane, folded path, or mechanical component appears in the active Example 2 sequence, and none is added to the model. There is therefore no omitted plate requiring an air-equivalent rear-spacing correction.

The numerical prescription itself was not “corrected” to repair a patent value. OCR-corrupted tokens from the image-based PDF were resolved by visual inspection of the rendered numerical table and the printed values were retained. The principal unresolved source issue is the condition-(4) movement-definition contradiction described above.

## Sources and References

1. Takahiro Hatada, **US 2008/0112063 A1**, *Zoom Lens and Image Pickup Apparatus Having the Same*, Canon Kabushiki Kaisha, published May 15, 2008. Numerical Embodiment 2; especially ¶¶0066, 0069, 0078–0083, 0089–0115 and printed patent page 5.
2. Canon Camera Museum, **EF-S55-250mm f/4-5.6 IS** — official production specifications and release timing: https://global.canon/en/c-museum/product/ef396.html
3. Canon Camera Museum, **EF-S55-250mm f/4-5.6 IS II** — confirms the successor retained the original optical system: https://global.canon/en/c-museum/product/ef414.html
4. Canon, **EOS camera manual — minimum focusing distance convention** — focal-plane mark to subject: https://cam.start.canon/en/C002/manual/html/UG-02_BasicShooting_0080.html
5. OHARA Corporation optical-glass catalog/data sheets, used for equivalent-coordinate and line-index assignments. S-TIH53WN reference: https://oharacorp.com/glass/s-tih53wn/
6. CDGM Glass Co., Ltd., **H-ZLaF50E** optical-glass datasheet and database entry, used for the exact-coordinate L23 catalog equivalence: https://www.cdgmgd.com/webapp/pdf/H-ZLaF50E.pdf
