# MINOLTA MD ZOOM 75-150mm f/4 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP S56-150717 A (特開昭56-150717)
**Application Number:** 昭55-54976
**Filed:** 24 April 1980
**Published:** 21 November 1981
**Inventors:** Hisashi Tokumaru (得丸祥); Mitsuo Yasukuni (安国光雄)
**Applicant:** Minolta Camera Co., Ltd.
**Title:** ズームレンズ系 (Zoom lens system)
**Embodiment analyzed:** Example 1 (実施例1)

The implemented prescription is Example 1 of JP S56-150717 A. The patent gives a 77–146 mm zoom with a design F-number of 4.1, twelve elements in eight air-spaced groups, and a four-part power sequence consisting of a positive focusing group F, a negative variator V, a positive compensator C, and a master group M. The numerical prescription is printed on PDF pages 2–3 of the supplied publication; Figure 1 on PDF page 5 shows the same F/V/C/M layout. The final data file preserves that prescription without uniform scaling.

The production correlation is strong but is not a manufacturer-confirmed patent attribution. Minolta's *MD Zoom Lenses* manual lists a 75–150 mm f/4 MD Zoom with twelve elements in eight groups, a 1.2 m minimum focusing distance, a 49 mm filter thread, and 35 mm SLR coverage. Those production facts agree closely with Example 1's 77–146 mm, F/4.1 numerical design and its twelve-element/eight-group architecture. Figure 6 of the patent also uses an image height of Y′ = 21.6 mm, essentially the half-diagonal of the 35 mm frame. The patent itself does not name the commercial 75–150 mm lens, so the identification remains a documented correlation rather than a direct statement by Minolta.

One source inconsistency is retained rather than normalized away. The Example 1 variable-spacing table labels its middle zoom station as 101 mm, while Figure 6 labels the corresponding aberration plot `f=100.0`. The final prescription uses the numerical table's 101 mm station because the implemented paraxial model computes 101.031838 mm from those spacings. The 100.0 mm figure label remains a source discrepancy.

## Optical Architecture

Example 1 is a four-component zoom organized as positive F / negative V / positive C / positive master M. The twelve physical elements are distributed among eight air-spaced groups. All refracting surfaces are spherical; there are no aspherical or diffractive surfaces in the selected embodiment.

The front F component contains a positive singlet followed by a cemented positive-negative pair. Its standalone focal length is +114.942 mm. The V component contains a cemented pair followed by a negative singlet and has a standalone focal length of -40.000 mm. The two-element C component is net positive at +100.000 mm. The rear M component consists of a cemented pair, a positive singlet, and a rear negative meniscus; its standalone focal length is +89.708 mm. These figures are standalone group powers computed from the final prescription, not in-situ effective powers within the complete zoom.

Zooming is produced by the three published variable air gaps corresponding to source spacings d5, d10, and d13. In the implemented model, the required explicit aperture stop divides the source d13 gap, so `r13.d + STO.d` reproduces the source value at every station. Across the 77, 101, and 146 mm states, the negative variator moves toward the image as focal length increases. The compensator first moves imageward and then reverses between the middle and long stations. The master group remains effectively fixed within the rounding of the published spacing table. This reversing compensator motion is directly represented by piecewise interpolation between the three source stations rather than by a fitted continuous cam law.

The computed effective focal lengths from the final data are 77.001714 mm, 101.031838 mm, and 145.994509 mm. The patent does not publish a final image-plane spacing after surface `rg`; the model therefore uses a derived common `rg`-to-image distance of 42.100622 mm. The independently recomputed back focal distances from `rg` are 42.102060, 42.105566, and 42.094240 mm at the three source stations. The small residual spread is consistent with rounding in the published variable spacings.

The patent does not dimension or explicitly mark the aperture stop. The data file inserts one modeled stop 0.100 mm ahead of the master group's first surface `ra` as a disclosed implementation choice. Its 11.611329 mm semi-diameter is calibrated to reproduce F/4.1 at the 77 mm station. With that same physical stop, the modeled f-numbers are 4.100000, 4.100201, and 4.099552 at 77, 101, and 146 mm. This agreement verifies the internal consistency of the chosen stop model across the published zoom states; it is not independent evidence for the actual production diaphragm diameter or exact iris location.

No clear-aperture semi-diameters are published. The front-group and variator semi-diameters in the data file are modeled values chosen from exact spherical ray envelopes; the compensator and master-group values (r11–rg) are estimated from the Fig. 1 silhouette, which is drawn at the tele spacing: 12.4 mm for the C doublet and the M cemented pair, 12.8 mm for L11, and 13.2 mm for L12. The full set is checked against edge thickness, rim slope, gap intrusion, and the F/4.1 axial beam at all three zoom states. They should therefore be read as a valid LensVisualizer geometry model rather than measured production clear apertures.

## Element-by-Element Analysis

### L1 — Biconvex Positive Singlet

**nd = 1.51680, νd = 64.1. Glass: 517641 crown / BK7-family class. Standalone f = +140.625 mm.**

L1 is the leading positive singlet of the focusing component F. Its relatively low index and high Abbe number place it in a conventional crown-glass region. In the final model it contributes positive standalone power ahead of the cemented L2/L3 pair. The glass label is deliberately class-level: the patent publishes only the d-line index and Abbe number and does not identify a supplier or melt.

### L2/L3 — Cemented Pair F23

**L2:** nd = 1.51680, νd = 64.1. Glass: 517641 crown / BK7-family class. Standalone f = +136.045 mm.  
**L3:** nd = 1.80518, νd = 25.5. Glass: 805255 dense flint / SF6-family class. Standalone f = -165.927 mm.

L2 and L3 form the rear cemented pair of the F component. L2 is positive and L3 negative; the pair's standalone net focal length is +678.857 mm, much weaker than either constituent considered alone. The large Abbe-number contrast between the crown-like L2 and dense-flint-class L3 provides a conventional positive/negative dispersion pairing, but the source supplies no line indices or partial-dispersion data from which secondary-spectrum behavior could be quantified.

Together, L1 and F23 produce a positive front component with +114.942 mm standalone focal length. The patent identifies this complete front component as the focusing group, although Example 1 gives no finite-focus movement table.

### L4/L5 — Cemented Variator Pair V45

**L4:** nd = 1.80518, νd = 25.5. Glass: 805255 dense flint / SF6-family class. Standalone f = +54.903 mm.  
**L5:** nd = 1.62135, νd = 61.3. Glass: Unmatched (621613 crown class; catalog unresolved). Standalone f = -42.487 mm.

The first part of the negative variator is an unusual power pairing in which the higher-index, low-Abbe L4 is positive while the lower-index, high-Abbe L5 is negative. The cemented pair remains weakly negative overall, with a standalone focal length of -194.883 mm. That net sign is the relevant result for the subassembly; the much stronger positive and negative standalone element powers should not be confused with its in-situ contribution inside the moving variator.

The L5 coordinate has no defensible exact match in the authoritative catalog set recorded for this dossier, so it remains an unmatched coordinate class rather than being assigned a modern vendor glass.

### L6 — Biconcave Negative Singlet

**nd = 1.74950, νd = 50.1. Glass: Unmatched (750501 high-index crown class; catalog unresolved). Standalone f = -50.796 mm.**

L6 is the rear negative singlet of the V component. In combination with V45 it brings the complete variator to a standalone focal length of approximately -40.000 mm. Its glass coordinate is intentionally unresolved: an exact-index modern candidate with very different dispersion demonstrates why index-only matching would be misleading.

The published zoom spacings place this negative component progressively farther from the front group as focal length increases. That movement, rather than a change of optical power, supplies the principal variator action represented in the model.

### L7/L8 — Cemented Compensator C78

**L7:** nd = 1.58913, νd = 61.1. Glass: 589611 crown class (L-BAL35 / N-SK5 / K-SKLD5 coordinate family). Standalone f = +44.783 mm.  
**L8:** nd = 1.74000, νd = 28.3. Glass: 740283 dense flint / S-TIH3 / H-ZF5 class. Standalone f = -81.008 mm.

L7 and L8 form the entire positive compensator component C. The pair's standalone focal length is +100.000 mm. The d-line coordinates are compatible with the L-BAL35 / SK5-like crown coordinate family for L7 and with several 1.740/28.3 dense-flint catalog families for L8, but the patent does not identify the actual suppliers.

The compensator is the reversing moving component. Its axial position advances from the short to the middle station and then retreats before the long station. That reversal is explicitly bracketed by the three published spacing states and is therefore preserved without extrapolating a more detailed mechanical cam profile.

### L9/L10 — Cemented Master Pair M910

**L9:** nd = 1.65844, νd = 50.9. Glass: 658509 dense crown / N-SSK5 class. Standalone f = +34.710 mm.  
**L10:** nd = 1.80741, νd = 31.6. Glass: Unmatched (807316 lanthanum dense flint; coordinate of discontinued Schott LaSF8). Standalone f = -49.501 mm.

M910 is the front cemented pair of the master component. Its standalone net focal length is +96.670 mm. This pair is also the part of the design explicitly constrained by the patent's conditional expressions. The calculation uses the complete cemented pair and the two exterior surface powers defined by the patent; it does not substitute the standalone focal lengths of L9 or L10 for those condition variables.

L9's coordinate closely matches the N-SSK5 class, whereas L10 remains unresolved at vendor level. Both labels therefore remain descriptions of coordinate families rather than assertions about Minolta's actual glass supplier.

### L11 — Biconvex Positive Singlet

**nd = 1.67270, νd = 32.2. Glass: 673322 dense flint / SF5 class. Standalone f = +80.761 mm.**

L11 is the second positive contribution within the master component, separated from M910 by a 22.00 mm air space. Its coordinate lies on the SF5-family region represented in multiple authoritative catalogs. The patent gives no supplier, so the data retains the family-class interpretation rather than a vendor-specific claim.

### L12 — Rear Negative Meniscus

**nd = 1.67100, νd = 51.8. Glass: 671518 crown class (H-LaK67 coordinate equivalent, Δnd −0.0010). Standalone f = -58.472 mm.**

L12 is the final optical element and is a negative meniscus with both centers of curvature on the object side. It follows a 12.00 mm air space after L11 and completes the positive master component. The complete M group retains +89.708 mm standalone focal length despite the negative power of L12.

The patent provides no rear cover plate or filter after L12. The model therefore ends with surface `rg` followed directly by the derived air distance to the image plane.

## Glass Identification and Selection

The prescription contains ten distinct d-line `(nd, νd)` coordinates. The patent provides no glass trade names, line indices, partial-dispersion ratios, or supplier identities. Catalog matching in this dossier therefore distinguishes coordinate-family evidence from actual material identification.

| Coordinate / class | Elements | Status | Interpretation |
|---|---|---|---|
| 1.51680 / 64.1 — 517641 crown / BK7 family | L1, L2 | Class | Coordinate-compatible with BK7-family glasses; supplier not established. |
| 1.80518 / 25.5 — 805255 dense flint / SF6 family | L3, L4 | Class | Multiple catalogs contain close or exact coordinate equivalents. |
| 1.62135 / 61.3 — 621613 crown | L5 | Unmatched | No defensible exact public-catalog identity established. |
| 1.74950 / 50.1 — 750501 high-index crown | L6 | Unmatched | Index alone would produce a misleading modern match because dispersion differs strongly. |
| 1.58913 / 61.1 — 589611 crown / SK5 family | L7 | Class | Coordinate-compatible SK5-family assignment. |
| 1.74000 / 28.3 — 740283 dense flint | L8 | Class | Coordinate-exact equivalents exist in more than one vendor family. |
| 1.65844 / 50.9 — 658509 dense crown / N-SSK5 class | L9 | Class | Near-exact N-SSK5-family coordinate match. |
| 1.80741 / 31.6 — 807316 lanthanum dense flint | L10 | Unmatched | Coordinate of the discontinued Schott LaSF8; no public dispersion coefficients were located, so the element stays on the patent νd. |
| 1.67270 / 32.2 — 673322 dense flint / SF5 class | L11 | Class | Coordinate-exact SF5-family matches exist. |
| 1.67100 / 51.8 — 671518 crown | L12 | H-LaK67 (CDGM) coordinate equivalent | 1.67000 / 51.76: Δnd −0.0010, Δνd −0.04; a catalog equivalent for dispersion, not a supplier identification. |

Because the source provides only `nd` and `νd`, the data file does not invent `nC`, `nF`, `ng`, or `dPgF`. Consequently, the model supports first-order dispersion estimates but not a source-grounded claim of anomalous partial dispersion or apochromatic correction. Where a modern catalog glass happens to share the same coordinate, that coincidence is treated as class evidence unless the historical supplier is independently documented.

## Focus Mechanism

The patent identifies the positive front component F as the focusing group. Minolta's production manual describes the 75–150 mm f/4 as using a one-touch grip that slides for zooming and rotates for focusing, and it gives a minimum focusing distance of 1.2 m.

Example 1, however, publishes only infinity-focus zoom spacings. It gives no finite-focus displacement of F, no corresponding change in the F-to-V air gap, and no focal-length-dependent close-focus compensation law. The final data therefore uses `NO_INTERNAL_RECONSTRUCTION`. The three zoom positions are modeled at infinity only, and each variable-gap focus pair repeats the same spacing at both endpoints.

The 1.2 m minimum focusing distance remains production metadata because the schema requires a close-focus value, but it is not used to manufacture an internal optical state. In particular, no claimed close-focus EFL, magnification, breathing value, or finite-conjugate aberration result can be derived from this model.

## Conditional Expressions

The patent gives four conditions governing the master component. Recomputed from the final parsed prescription, all four are satisfied:

| Condition | Final-model value | Patent requirement |
|---|---:|---|
| `f_ab / f_M` | 1.077602 | `0.9 < x < 1.35` |
| `n_b - n_a` | 0.148970 | `0.05 < x < 0.25` |
| `|φ_c| / φ_a` | 0.452331 | `0.25 < x < 0.7`, with `φ_c < 0` |
| `d_e / f_M` | 0.133767 | `0.07 < x < 0.25` |

Here `f_M` is the standalone focal length of the complete master group, `f_ab` is the standalone focal length of the front cemented pair M910, and `φ_a` and `φ_c` are the two exterior surface powers of that pair as defined by the patent. The conditions are evaluated from the final data rather than copied from the earlier extraction results.

## Verification Summary

Independent reduced-angle and standard-angle ABCD calculations agree to floating-point precision at all three published zoom stations. The final-model EFLs are 77.001714, 101.031838, and 145.994509 mm. The back focal distance measured from the last lens vertex `rg` is approximately 42.10 mm at all three stations, while the data file uses the common derived image spacing 42.100622 mm.

The surface-by-surface Petzval sum, computed as `φ/(n·n′)` at every refracting surface, is 0.001329365 mm⁻¹, corresponding to a reciprocal magnitude of 752.239 mm. Because the zoom changes only air spacings, this Petzval sum is invariant across the published zoom states.

The modeled semi-diameter set passes the portable geometry checks applied to the three published states and representative intermediate zoom samples. The minimum calculated element edge thickness is 1.287763 mm (L4), and the maximum spherical rim-slope angle is 36.17° at rf after the figure-based enlargement of L12; the F/4.1 axial marginal ray clears every surface at all three published states. These are validation results for the authored model, not measurements of the production barrel or a substitute for LensVisualizer's production render diagnostics.

## Sources

1. Japan Patent Office, **JP S56-150717 A**, “ズームレンズ系” (Zoom lens system), published 21 November 1981. Example 1 prescription: supplied PDF pp. 2–3; optical layout: Figure 1, p. 5; aberration plots and `Y′ = 21.6`: Figure 6, p. 6; conditional expressions: pp. 1–2. Convenience family/index page: <https://patents.google.com/patent/JPS56150717A/en>.
2. Minolta Camera Co., Ltd., **Minolta MD Zoom Lenses owner's manual** (1985), production specifications and one-touch zoom/focus operation for the 75–150 mm f/4 MD Zoom. Archived copy recorded in the dossier: <https://manuals.plus/m/540c39fa1e885dc79fc174e827a42f8cfa39b959cc8ef98ddcf78fdc7c166c11>.
3. Current authoritative optical-glass catalog families recorded in the dossier: SCHOTT, OHARA, HOYA, HIKARI, CDGM, and SUMITA. Catalog-coordinate matches are used only as class/equivalence evidence unless otherwise stated.
