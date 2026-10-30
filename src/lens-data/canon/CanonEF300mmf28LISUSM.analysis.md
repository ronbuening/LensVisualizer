# Canon EF 300mm f/2.8 L IS USM — Patent Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 6,115,188 A  
**Application number:** 09/172,164  
**Priority:** 16 October 1997; 1 December 1997; 11 September 1998 (Japan)  
**Filed:** 14 October 1998  
**Granted:** 5 September 2000; certificate of correction issued 29 May 2001  
**Inventors:** Akihiro Nishio; Hideki Ogawa; Makoto Misaka  
**Assignee:** Canon Kabushiki Kaisha  
**Title:** _Optical System and Optical Apparatus Having the Same_\
**Example details:** Example 1

The prescription analyzed here is the selected production correlation for the **CANON EF 300mm f/2.8 L IS USM**. The patent does not name that commercial lens, and Canon's product documentation does not identify a patent number, so the connection is a convergent optical and chronological correlation rather than a manufacturer-confirmed patent attribution.

1. **Focal length, aperture, and field.** Numerical Example 1 publishes `f = 293.58 mm`, `Fno = 2.9`, and `2ω = 8.4°`. Independent first-order tracing of the final data file gives an effective focal length of **293.599593947 mm**, closely corresponding to a marketed 300 mm f/2.8 full-frame telephoto.
2. **Element and group accounting.** The active refractive prescription before the rear filter contains **15 elements in 11 air-separated groups**. The patent then adds a plane-parallel rear filter as a sixteenth glass element and twelfth group. Catalog
   metadata now counts this complete selected-source 16/12 configuration. The first-embodiment text also permits a front protection plate. Canon specifies **17 elements in 13 groups** and explicitly states that the production lens's protection glass and rear filter are included in that count.
3. **Special-material pattern.** Example 1 has two identical low-index, high-Abbe elements at `n (source) = 1.496999, ν (source) = 81.5` and one element at `n (source) = 1.433870, ν (source) = 95.1`. Canon states that the production lens uses **two UD elements and one fluorite element**. The data file therefore correlates E1 and E2 with the two production UD elements and E4 with the production fluorite element, while retaining unresolved vendor identities because the patent itself gives only optical coordinates.
4. **Inner focusing.** The first embodiment specifies a negative second unit L2 that moves toward the image side as object distance decreases. That is the same basic focusing architecture represented by the production lens.
5. **Image stabilization.** The patent divides the positive third unit L3 into positive L31, negative L32, and positive L33 and moves L32 perpendicular to the optical axis for image stabilization. Canon identifies the production lens as an IS design.
6. **Chronology.** The Japanese priority filings precede Canon's July 1999 market introduction, while the U.S. grant follows it in September 2000.

The optical layout in patent Fig. 1 is particularly diagnostic: it shows positive L1, the compact negative focusing unit L2, aperture stop SP, the L31/L32/L33 subdivision of L3, the transverse-motion indication at L32, a rear filter FL, and image plane IP. The final data file follows this layout without importing surfaces from another numerical example.

The 2026-10-30 original-PDF review retains every source optical pair with an explicit unknown-reference qualification. All numerical index-dependent calculations below use approximate d-line tracing; the source defines Ni/νi without a spectral line.

## Optical Architecture

Example 1 is a **positive-negative-positive telephoto system** with inner focusing and a transversely movable stabilization subunit. The selected source model comprises **16 elements in 12 air-separated groups**, including required FL;
the powered section alone has 15 elements / 11 groups, all spherical. The principal functional power sequence is:

- **L1:** positive front unit, computed focal length **+160.127024189 mm**;
- **L2:** negative cemented focusing unit, **−115.733484682 mm**;
- **L31:** positive first subunit of L3, **+100.034014477 mm**;
- **L32:** negative image-stabilizing subunit, **−34.029226732 mm**;
- **L33:** positive rear subunit, **+52.269288112 mm**;
- **L3 as a whole:** positive, **+254.788655536 mm**.

The stop lies between L2 and L31, exactly where the patent's Example 1 table places R14. L1 provides the dominant front positive power and convergence; L2 is small enough to serve as the internal focusing unit; L31 further converges the beam before it reaches the compact L32 stabilization group; and L33 restores positive rear power after the negative IS subunit. This is the architecture emphasized by the patent as a way of combining a fast telephoto layout with a relatively small focusing unit and a small transversely movable stabilization unit.

The active infinity model has an effective focal length of **293.599593947 mm** and an air-equivalent first-surface-to-image track of **267.321078902 mm**, giving `TL/EFL = 0.910495397` (the physical track through the rear filter is **268.002104800 mm**, `TL/EFL = 0.912815`). It therefore satisfies the project definition of a telephoto design. The air-equivalent back focal distance is **68.641078902 mm**, or `BFD/EFL = 0.233791464`; the design is not retrofocus.

No uniform scaling is applied: `s = 1`. Radii, element thicknesses, and published air spaces remain in the patent's dimensional millimetres. The patent's plane-parallel filter R28–R29 (2.00 mm, `n (source) = 1.516330`, `ν (source) = 64.1`) is drawn in the data file as a plane-parallel plate element (surfaces 28–29), so every analysis traces it; its revised 25 mm inferred semi-diameter follows native Fig. 1 because the patent lists no numerical diameter. R27 keeps the printed D27 = 8.00 mm to the filter. The table prints D29 = 0.00 rather than a back focus, so the 59.3221048 mm filter-to-image air is the only derived rear distance; it places the image at the paraxial focus, reproducing the 68.641078902 mm air-equivalent R27-to-image spacing. The optional front protection plate described in the patent and present in the production lens is not numerically specified by Example 1 and is therefore not invented.

## Element-by-Element Analysis

### L1 — Positive Front Unit

L1 contains five air-separated elements and has a computed net focal length of **+160.127024189 mm**. The first two positive elements and E4 carry the unusually high Abbe numbers that distinguish the front unit, while E3 and E5 provide negative power and shape control within the overall positive group.

#### E1 — Biconvex Positive

`n (source) = 1.496999, ν (source) = 81.5.` Glass: **Unmatched (source n=1.496999, ν=81.5; spectral reference unspecified)**. Standalone `f = +193.47696 mm`.

E1 is the front collector and the largest modeled element. Its strong positive power begins the telephoto convergence while its high Abbe number limits the amount of dispersion introduced by that front-end power. The production correlation identifies this coordinate pair with one of Canon's two UD elements, but the patent does not name a glass manufacturer or proprietary material designation.

#### E2 — Positive Meniscus

`n (source) = 1.496999, ν (source) = 81.5.` Glass: **Unmatched (source n=1.496999, ν=81.5; spectral reference unspecified)**. Standalone `f = +218.62316 mm`.

E2 uses the same optical material coordinates as E1 but distributes its positive power in meniscus form. In combination, E1 and E2 establish a low-dispersion positive front section rather than concentrating all of L1's power in a single thick element. The identification with the second production UD element is a product-correlation inference, not a patent material name.

#### E3 — Biconcave Negative

`n (source) = 1.785896, ν (source) = 44.2.` Glass: **Unmatched (source n=1.785896, ν=44.2; spectral reference unspecified)**. Standalone `f = −114.74478 mm`.

E3 introduces substantial negative power within the otherwise positive L1. Its high refractive index allows that correction with moderate curvatures and thickness. In design terms, the negative element counterbalances the strong positive front pair and contributes to the control of spherical and chromatic residuals before the beam reaches the fluorite-correlated positive element.

#### E4 — Biconvex Positive

`n (source) = 1.433870, ν (source) = 95.1.` Glass: **Unmatched (production fluorite correlation; source n=1.43387, ν=95.1; spectral reference unspecified)**. Standalone `f = +158.49796 mm`.

E4 is the lowest-index and highest-Abbe element in the active prescription. Canon states that the production EF 300mm f/2.8L IS USM contains one fluorite element, and the Example 1 coordinate pair at E4 is the natural correlation. The former CaF2 curve is disabled because the source material reference wavelength is unspecified. The production association remains a qualified correlation, not proof of this source medium's historical chemistry or supplier.

At the level supported by `n (source)/ν (source)`, E4 supplies low-dispersion positive power in the front group. No apochromatic or quantified secondary-spectrum claim is made from this coordinate pair alone.

#### E5 — Negative Meniscus

`n (source) = 1.487490, ν (source) = 70.2.` Glass: **Unmatched (source n=1.48749, ν=70.2; spectral reference unspecified)**. Standalone `f = −466.48479 mm`.

E5 is a comparatively weak negative meniscus at the rear of L1. It moderates the converging bundle delivered to the focusing unit and provides another degree of freedom for balancing L1's residual aberrations without materially changing the overall positive sign of the group.

### L2 — Cemented Negative Inner-Focus Doublet

L2 is the sole axial focusing unit. E6 and E7 have opposite standalone powers, but the cemented doublet has a computed net focal length of **−115.733484682 mm**. The patent specifically uses a negative second unit for focusing and constrains the Abbe-number relation between its positive and negative members.

#### E6 — Biconvex Positive

`n (source) = 1.805181, ν (source) = 25.4.` Glass: **Unmatched (source n=1.805181, ν=25.4; spectral reference unspecified)**. Standalone `f = +125.83165 mm`.

E6 is the positive component of L2. Its relatively low Abbe number is deliberate in the context of the patent's condition (9), where the negative partner is required to have the larger Abbe number. This pairing is directed at controlling chromatic variation as the focusing unit translates.

#### E7 — Biconcave Negative

`n (source) = 1.834807, ν (source) = 42.7.` Glass: **Unmatched (source n=1.834807, ν=42.7; spectral reference unspecified)**. Standalone `f = −59.90749 mm`.

E7 provides the stronger negative standalone power and makes the cemented pair net negative. The Abbe-number difference is `42.7 − 25.4 = 17.3`, exactly reproducing the Example 1 value for patent condition (9). The cemented construction also avoids introducing a variable internal air gap into the moving focus unit.

### L31 — Positive Cemented Subunit Behind the Stop

The aperture stop is followed by the E8/E9 cemented pair. Although E8 is individually negative, the doublet is net positive with a computed focal length of **+100.034014477 mm**. The patent's design rationale places positive L31 ahead of the negative stabilization group so that the beam is further converged before entering L32.

#### E8 — Negative Meniscus

`n (source) = 1.846658, ν (source) = 23.9.` Glass: **Unmatched (source n=1.846658, ν=23.9; spectral reference unspecified)**. Standalone `f = −76.18700 mm`.

E8 is the negative component of L31. Its high index and low Abbe number provide a strong counter-term within a cemented pair that is positive overall.

#### E9 — Biconvex Positive

`n (source) = 1.719995, ν (source) = 50.2.` Glass: **Unmatched (source n=1.719995, ν=50.2; spectral reference unspecified)**. Standalone `f = +43.10923 mm`.

E9 supplies the stronger positive contribution and sets the sign of the L31 doublet. Its position immediately after the stop and ahead of L32 makes it part of the beam-convergence strategy used to keep the stabilization subunit compact.

### L32 — Negative Image-Stabilizing Subunit

L32 consists of the cemented E10/E11 pair, a strongly curved air gap, and E12. The E10/E11 cemented pair alone has a computed focal length of **−141.563772730 mm**; with E12 and the intervening air lens, the complete L32 subunit is substantially stronger at **−34.029226732 mm**. The patent moves this entire negative subunit perpendicular to the optical axis for image stabilization.

#### E10 — Biconvex Positive

`n (source) = 1.846658, ν (source) = 23.9.` Glass: **Unmatched (source n=1.846658, ν=23.9; spectral reference unspecified)**. Standalone `f = +66.28386 mm`.

E10 is the positive member of the first L32 cemented pair. Its positive power is outweighed by the negative E11 member, so the pair remains net negative. The element also begins the three-element positive-negative-negative arrangement described by the first-embodiment design rules for the stabilization subunit.

#### E11 — Biconcave Negative

`n (source) = 1.603112, ν (source) = 60.6.` Glass: **Unmatched (source n=1.603112, ν=60.6; spectral reference unspecified)**. Standalone `f = −43.96039 mm`.

E11 is the negative cemented partner to E10 and forms the object-side boundary of the patent's biconvex air lens. Its higher Abbe number contrasts with the low-Abbe positive E10, while its surface curvature participates directly in the air-lens condition used to control the behavior of the decentered L32 group.

#### E12 — Biconcave Negative

`n (source) = 1.772499, ν (source) = 49.6.` Glass: **Unmatched (source n=1.772499, ν=49.6; spectral reference unspecified)**. Standalone `f = −45.60909 mm`.

E12 is the second negative element of L32 and forms the image-side boundary of the biconvex air lens. Together with the E10/E11 pair, it produces the strongly negative L32 power required for high image-displacement sensitivity without making the movable assembly a large positive relay.

### L33 — Positive Rear Subunit

L33 combines the cemented E13/E14 pair with the final positive E15. The cemented pair is net positive at **+87.145117681 mm**, and the complete L33 subunit is **+52.269288112 mm**. This positive rear power follows the negative stabilization unit and completes the positive L3 group.

#### E13 — Biconvex Positive

`n (source) = 1.719995, ν (source) = 50.2.` Glass: **Unmatched (source n=1.719995, ν=50.2; spectral reference unspecified)**. Standalone `f = +37.81764 mm`.

E13 is the strong positive member at the front of L33. It uses the same optical coordinates as E9 and provides most of the positive power of the E13/E14 cemented pair.

#### E14 — Negative Meniscus

`n (source) = 1.834000, ν (source) = 37.2.` Glass: **Unmatched (source n=1.834, ν=37.2; spectral reference unspecified)**. Standalone `f = −64.09925 mm`.

E14 is the negative cemented partner to E13. Its negative power and lower Abbe number give the cemented pair additional control of residual aberrations while retaining positive net power.

#### E15 — Plano-Convex Positive

`n (source) = 1.696797, ν (source) = 55.5.` Glass: **Unmatched (source n=1.696797, ν=55.5; spectral reference unspecified)**. Standalone `f = +117.32398 mm`.

E15 is the final powered element and has a plane rear surface. It adds positive power to L33 and is followed by the printed 8.00 mm air gap to the patent's plane-parallel rear filter, which the data file draws as a plane-parallel plate element rather than as a powered lens element.

## Glass Identification and Selection

The exact original numerical introduction, PDF p. 68 (printed col. 12), defines Ni/νi as refractive index and Abbe number without identifying a material reference line. The complete first-embodiment prose, both source table pages and the appended certificate were inspected. No material d/e anchor, numeric reference wavelength, individual line indices, partial dispersion or APD evidence is supplied. Aberration-plot wavelength labels do not establish the prescription coordinates.

All 16 literal pairs are retained, including filter FL. Every medium now carries an explicit `Unmatched` disposition and `indexReferenceNote`; approximate d-line tracing remains the numerical convention. All 16 previously active catalog curves are disabled. No per-lens nC/nF/ng/dPgF field was present, and none is added. Historical wavelength identity, supplier, melt and chemistry remain unresolved. The prior catalog comparison is retained as identification history, not counted as a fresh spectral measurement.

| Medium | Source n | Source ν | Disposition                        |
| ------ | -------: | -------: | ---------------------------------- |
| E1     | 1.496999 |     81.5 | Unmatched; source line unspecified |
| E2     | 1.496999 |     81.5 | Unmatched; source line unspecified |
| E3     | 1.785896 |     44.2 | Unmatched; source line unspecified |
| E4     | 1.433870 |     95.1 | Unmatched; source line unspecified |
| E5     | 1.487490 |     70.2 | Unmatched; source line unspecified |
| E6     | 1.805181 |     25.4 | Unmatched; source line unspecified |
| E7     | 1.834807 |     42.7 | Unmatched; source line unspecified |
| E8     | 1.846658 |     23.9 | Unmatched; source line unspecified |
| E9     | 1.719995 |     50.2 | Unmatched; source line unspecified |
| E10    | 1.846658 |     23.9 | Unmatched; source line unspecified |
| E11    | 1.603112 |     60.6 | Unmatched; source line unspecified |
| E12    | 1.772499 |     49.6 | Unmatched; source line unspecified |
| E13    | 1.719995 |     50.2 | Unmatched; source line unspecified |
| E14    | 1.834000 |     37.2 | Unmatched; source line unspecified |
| E15    | 1.696797 |     55.5 | Unmatched; source line unspecified |
| FL     | 1.516330 |     64.1 | Unmatched; source line unspecified |

The production fluorite/UD statements remain product-correlation evidence. They support the earlier association of E1/E2 with the two production UD elements and E4 with the production fluorite element, but do not identify this patent's reference wavelength, historical crystal, melt or supplier. In particular, the CaF2 curve is not active. No apochromatic or quantitative secondary-spectrum claim follows from the anonymous source pairs.

## Focus Mechanism

The lens uses **inner focusing by axial translation of the negative L2 cemented doublet**. The patent states the direction of travel: L2 moves toward the image side as the object distance decreases. It does not publish an Example 1 close-focus spacing table, object distance, or numerical focus travel.

The final data file therefore uses a **CONSTRAINED_RECONSTRUCTION**, not a published close-focus state. Canon's marketed **2.5 m** closest focusing distance is used as the external calibration constraint while preserving the patent mechanism as a rigid translation of L2. The two adjacent gaps vary in equal and opposite directions:

| State               | D10 before L2 (mm) | D13 after L2 (mm) | D10 + D13 (mm) |
| ------------------- | -----------------: | ----------------: | -------------: |
| Infinity            |       26.710000000 |      40.400000000 |   67.110000000 |
| Reconstructed 2.5 m |       41.453206096 |      25.656793904 |   67.110000000 |

The implied imageward L2 travel is **14.743206096 mm**. A fresh finite-conjugate trace of the data-file close state gives paraxial magnification **−0.135694645**, or `|m| = 0.135695`. Canon markets maximum magnification as **0.13×**. The two production values are therefore not imposed simultaneously as exact constraints; the data file is calibrated to MFD and retains the 0.13× value only as a rounded commercial cross-check. The travel was solved on the air-equivalent track; with the rear filter traced physically, the same object lies 2.500681 m from the image plane, within the rounding of Canon's 2.5 m figure.

The production identity includes USM, and Canon describes high-speed autofocus for the commercial lens. The patent Example 1, however, specifies the optical motion rather than a particular production focus motor. USM is therefore product metadata, not a prescription-derived optical fact.

## Chromatic Correction Strategy

The production-to-patent correlation is unusually strong in the front-group material pattern. Canon specifies two UD elements and one fluorite element. Example 1 places two identical `n (source) = 1.496999, ν (source) = 81.5` positive elements at E1 and E2 and a `n (source) = 1.433870, ν (source) = 95.1` positive element at E4. These three elements carry substantial positive power in L1, where axial color generated by the large front aperture is most consequential.

Within the focusing unit, the patent makes chromatic behavior during focus a separate design condition. E6 is positive with `ν (source) = 25.4`, while E7 is negative with `ν (source) = 42.7`; their difference is **17.3**, matching patent condition (9). The patent explicitly associates this Abbe-number separation with control of chromatic-aberration variation during focusing.

The rear groups continue to pair positive and negative elements with different Abbe numbers in cemented combinations, notably E8/E9, E10/E11, and E13/E14. This distribution supports a multi-group chromatic balancing strategy at the `n (source)/ν (source)` level. Because the source does not provide line indices or anomalous partial-dispersion deviations, the analysis stops at that level and does not infer an APO designation or a quantified secondary-spectrum residual.

## Air Lens

The 5.52 mm air space between the rear surface of E11 and the front surface of E12 is not merely a clearance gap. The patent explicitly treats the opposing R20 and R21 surfaces as a **biconvex air lens** embedded between the surrounding glasses of L32.

Using the Example 1 indices and radii, the independently computed air-lens focal length is **−36.320670695 mm**. The full L32 subunit has focal length **−34.029226732 mm**, so `fair/f32 = 1.067337527`, reproducing the patent's Table 1 value 1.067 to rounding. The air-lens shape factor is **0.349510687**, likewise reproducing the printed 0.350 value.

This strongly curved air interface pair is central to the patent's stabilization strategy. It provides substantial optical leverage inside the moving L32 assembly without adding another glass element, while the patent's conditions constrain both its strength relative to L32 and its shape.

## Image Stabilization

Image stabilization is performed by **transverse displacement of L32**, the negative subunit formed by E10, E11, E12, and their internal air lens. The patent's first embodiment states that L32 moves perpendicular to the optical axis to displace the image formed on the focal plane. Its surrounding positive subunits L31 and L33 are part of the power arrangement used to obtain useful image-displacement sensitivity from a comparatively small moving unit.

The centered prescription is the state authored and checked in the data file. The source lists a 0.3° displaced-image aberration condition (Fig. 19, with the description on PDF p. 64, col. 4); that is an image-angle condition, not a physical L32 actuator stroke. No numerical lateral travel or separate decentered stabilization state is encoded, because the final data file contains no source-backed transverse motion value to transcribe. The `L32 IS` group annotation identifies the physical subunit; it should not be read as a claim that the current prescription file simulates the production IS actuator stroke.

The optical sign pattern is important. L31 first converges the beam, L32 is strongly negative, and L33 restores positive rear power. The patent's design discussion links this arrangement to reducing the diameter of the stabilization subunit while maintaining image-displacement sensitivity and controlling decentering aberrations.

## Conditional Expressions

The first embodiment defines nine principal design conditions and then gives preferred narrower ranges. Recalculation from the final data-file prescription shows that all nine computed values lie within the preferred ranges.

| Condition      |              Patent Table 1 | Computed from final data | Preferred range | Result                      |
| -------------- | --------------------------: | -----------------------: | --------------: | --------------------------- | --------- | ---- |
| (1) `fair/f32` |                       1.067 |                 1.067338 |         0.7–1.2 | Pass                        |
| (2) `          | (Rair1+Rair2)/(Rair1−Rair2) |                        ` |           0.350 | 0.349511                    | 0.15–0.6  | Pass |
| (3) `f1/f`     |                       0.545 |                 0.545393 |         0.4–0.7 | Pass                        |
| (4) `          |                        f2/f |                        ` |           0.394 | 0.394188                    | 0.25–0.6  | Pass |
| (5) `f/f3`     |                   **0.828** |             **1.152326** |         0.1–1.2 | Pass range; source mismatch |
| (6) `f31/f`    |                       0.341 |                 0.340716 |       0.15–0.45 | Pass                        |
| (7) `          |                       f32/f |                        ` |           0.116 | 0.115904                    | 0.06–0.14 | Pass |
| (8) `f33/f`    |                       0.178 |                 0.178029 |       0.11–0.23 | Pass                        |
| (9) `νn−νp`    |                        17.3 |                17.300000 |            8–27 | Pass                        |

Condition (5) is a direct patent-source inconsistency. The printed equation (PDF p. 67, col. 9; narrower range on PDF p. 68, col. 12) uses `f/f3`, and Table 1 (PDF p. 72, col. 19) gives **0.828** for Example 1. Recomputing L3 from R15–R27 gives `f3 = +254.788655536 mm`; with the verified system focal length, `f/f3 = 1.1523260065`. The other eight Table 1 factors reproduce to the patent's rounding, and the complete system focal length also reproduces. The patent's 2001 Certificate of Correction (PDF pp. 82–83) does not amend this factor or an Example 1 prescription value. The discrepancy is now formalized as unresolved `source.errata`; the cause remains unidentified.

The data file therefore preserves the published prescription and the independently computed **1.152326** result rather than altering a radius, thickness, index, or group boundary to force the printed 0.828. The computed value still falls inside both the broad and preferred condition-(5) ranges.

## Verification Summary

The final data file was independently recomputed from its actual TypeScript arrays using sequential height/reduced-angle tracing and an ABCD matrix chain. The two first-order implementations agree to **2.84×10⁻14** maximum absolute matrix residual, and the active system matrix determinant is **1.0000000000000004**.

| Quantity                                    |  Source / model value |                          Independent result | Interpretation                                          |
| ------------------------------------------- | --------------------: | ------------------------------------------: | ------------------------------------------------------- |
| Published focal length                      |             293.58 mm |                            293.599593947 mm | +0.019594 mm residual                                   |
| Modeled wide-open f-number                  |                   2.9 |                               2.90000000007 | Stop-constrained reconstruction                         |
| Full field                                  |                  8.4° | 21.560606438 mm semi-image height from 4.2° | Consistency check only                                  |
| Air-equivalent back focal distance          |                     — |                             68.641078902 mm | 8.00 mm + filter + 59.3221048 mm, filter reduced to air |
| Air-equivalent first-surface-to-image track |                     — |                            267.321078902 mm | `TL/EFL = 0.910495397`; physical 268.002104800 mm       |
| Active Petzval sum                          |                     — |                     +0.000263395169635 mm⁻¹ | Surface-by-surface `φ/(n·n′)` sum                       |
| Reconstructed close-focus magnification     | Canon: 0.13× marketed |                                0.135694645× | MFD-constrained model cross-check                       |

The stop position is published at R14, but its diameter is not. The unchanged derived radius is 17.662797 mm; project paraxial f-number is 2.9 and the independent real collimated input-diameter ratio is 2.969079. Source Fno is preserved as the model target without claiming a physical iris diameter. The source itself defines Fno by an effective axial input beam (PDF p. 63, col. 2); the runtime convention difference is reported rather than fitted away.

The new original-figure pass revises 23 inferred clear caps and adds three resolved outer shoulders. All 201 sampled focus states have 16 finite, closed, connected paths with zero hidden renderer trimming. Three actual focus SVGs were compared directly with native Fig. 1. Infinity surface, aperture, image-circle and at least 99% corner-coverage checks pass with clear chief rays. The centered model has no encoded lateral IS state; production stabilization travel, moved-state clearance and attached-converter behavior are not established by this source review.

A separate actual-conjugate probe uses 101 focus controls, three fields and 97 pupil samples (29,391 rays). It has zero seed/aiming failures and all chiefs clear. The infinity/source axial bundle clears; the outer axial ring clips at unchanged S5 = 41.7 mm in 28/101 controls, focus 0.73–1.00. At the reconstructed close endpoint it reaches 42.346190 mm there. The baseline has the same restriction. A 42.5 mm S5 restoration violates the existing thin-gap guard, so no source R/d, focus trajectory, iris or tolerance is tuned to clear an unpublished finite-focus reconstruction. Finite fields use the Gaussian image magnification and are not a source-certified production field map. The close conjugate remains 2500.681026 mm from the physical image plane, rather than an exact published 2.5 m state.

All 2,251 off-axis noBracket entries occur before S1. Independent unrestricted-sphere intersections put every one outside the modeled first cap; zero are unexplained inside-cap misses. Other off-axis clipping remains sampled vignetting. These probes distinguish source infinity support from reconstructed close-focus clearance and do not certify production illumination or a continuous pupil.

The rear filter is the only published Example 1 glass element that is not a powered lens element. Its 2.00 mm thickness at `n (source) = 1.516330`, `ν (source) = 64.1` is drawn as a plane-parallel plate element behind the printed 8.00 mm gap and traced by every analysis; it is not counted in `elementCount`. The derived 59.3221048 mm filter-to-image air preserves the paraxial image plane. The front protection glass is not numerically specified in Example 1 and is omitted rather than guessed.

Example 1 is entirely spherical. No aspherical coefficients, conic convention, or coefficient scaling is applicable. No formal Certificate of Correction changes an Example 1 numerical prescription value. The parsed patent text contains OCR artifacts such as `1.43387O`, `1.487.490`, `1834.807`, `S.52`, and `1.7724.99`; the rendered Example 1 table resolves these respectively as `1.433870`, `1.487490`, `1.834807`, `5.52`, and `1.772499`. These are transcription corrections, not changes to the patent prescription.

## Original-Figure Shape Review — 2026-10-30

The exact local original is `patents/US6115188.pdf`. Numerical Example 1 spans PDF pp. 68–69 (cols. 12–13); its corresponding Fig. 1 is on PDF p. 3, sheet 1. Fig. 2 on the same sheet is a different example and was excluded. The native sheet is 2320 × 3408 pixels at 300 ppi; the selected optical crop was rotated 90° without resampling. About 1117 native pixels span the 208.68 mm first-to-filter vertex distance, approximately 5.35 px/mm. One pixel is 0.19 mm; practical endpoint uncertainty is about ±0.8 mm. Leaders, group brackets, SP strokes and LF/LT arrows are excluded from rim measurements. The source prints no numerical clear diameters.

All 15 powered elements, four cemented interfaces, concave ends and source filter FL were inspected. Inferred caps now follow approximately 51.5 mm for E1, 44 for E2, retained 41.7/42 for gap-constrained E3, 39 for E4, 33.5/30 for E5, 24.5 for the L2 doublet, 17.5 for L31, roughly 17 for the L32 outer rims, 19 for the L33 doublet, 21 for the final plano-convex member and 25 for FL. S10 keeps its 30 mm optical cap and adds `rimExtensionSd: 33.5`. S20/S21 retain clear 15.85 mm caps and use opposed `rimExtensionSd: 17` shoulders. These are air-facing resolved shoulders; no opaque bonded land or unsupported compound blank is added. No inferred cut is introduced.

The pre-existing `gapSagFrac: 0.96` remains unchanged. At S4–S5 the modeled physical residual gap is 0.170987 mm; at the opposed S20–S21 shoulders it is 0.246289 mm. Raising S5 to 42.5 gives 4.05 mm combined sag against 3.907 mm allowed across D4 = 4.07. Restoring full S20/S21 caps to 17 gives 6.10 against 5.299 allowed across D20 = 5.52 and even exceeds the physical gap. The smaller caps remain, and the finite-focus S5 clipping is disclosed. The 0.96 allowance predates this review; it is not increased or presented as a source-published margin. Source R/d, stops and focus controls are preserved, with source fidelity, sampled clearance and production correlation kept separate. See the [audit sidecar](./CanonEF300mmf28LISUSM.audit.md).

## Sources

1. **U.S. Patent 6,115,188**, Akihiro Nishio, Hideki Ogawa, and Makoto Misaka, _Optical System and Optical Apparatus Having the Same_, granted 5 September 2000. Relevant material: Fig. 1; first-embodiment description; Numerical Example 1; Table 1; Certificate of Correction dated 29 May 2001.
2. **Canon Camera Museum — EF300mm f/2.8L IS USM.** Canon's official product record supplies the July 1999 market date, 17-element/13-group production count, eight diaphragm blades, f/32 minimum aperture, 2.5 m closest focusing distance, 0.13× maximum magnification, and the statement that the lens uses one fluorite element and two UD elements and includes protection glass and a rear filter in the element count. <https://global.canon/en/c-museum/product/ef352.html>
3. **Canon Global — fluorite lens history.** Canon's official fluorite chronology lists the EF300mm f/2.8L IS USM with a July 1999 release and one fluorite element. <https://global.canon/en/news/2020/20200702.html>
4. **Optical-glass catalogs used for class-level cross-checking:** official OHARA, HOYA, HIKARI, SCHOTT, SUMITA, and CDGM catalog data. Because the patent does not name a vendor, these comparisons support class labels and residual checks rather than vendor-specific identity claims.
