# NIKON AI-S ZOOM-NIKKOR 80-200mm f/2.8 ED

## Patent Reference and Design Identification

**Patent:** JPS58-54312A\
**Application Number:** S56-153206\
**Filed:** 1981-09-28\
**Published:** 1983-03-31\
**Inventor:** Yoshinori Hamanishi\
**Applicant:** Nippon Kogaku Kogyo K.K.\
**Title:** 4群構成大口径比ズームレンズ (*Four-group large-aperture-ratio zoom lens*)\
**Embodiment analyzed:** Example 2

The prescription is the second numerical example of JPS58-54312A. The patent publishes an 80–200 mm, f/2.8 four-group zoom with 15 glass elements in 11 air-separated components and assigns focusing to the first group [1, printed pp. 59–62]. The data file preserves that example without optical scaling.

The production correlation is treated as a convergent identification rather than as a manufacturer-confirmed patent mapping. The principal evidence is:

1. Nikon's official historical account states that the AI-S Zoom-Nikkor 80–200mm f/2.8 ED was designed by Yoshinori Hamanishi and released in 1982 [2]. Hamanishi is the inventor named on JPS58-54312A, filed in September 1981.
2. Nikon's archived instruction manual gives 80–200 mm focal length, constant f/2.8 maximum aperture, and a 15-element/11-group construction [3]. These match the selected Example 2 at the level of marketed specification and physical element/component count.
3. The patent's four principal groups have positive, negative, positive, and positive power, with the first group used for focusing [1]. The selected data model retains this architecture and the patent's three published infinity zoom states at 80, 140, and 200 mm.
4. Nikon's manual gives a 2.5 m minimum focusing distance [3]. That production value is used only as the external constraint for the disclosed close-focus reconstruction; it is not substituted for a patent-published finite-object table, because the patent provides none.

The published Japanese scan can make the two 1.45 mm cemented thicknesses after surfaces 8 and 13 appear as 14.5 mm. The final data retains 1.45 mm for both. The corresponding U.S. family publication, US4468097A, resolves both thicknesses as 1.45 mm [4]. Independent recomputation from the Japanese Example 2 table also reproduces the patent focal lengths and back focus with 1.45 mm and rejects 14.5 mm. No other prescription value is corrected.

## Optical Architecture

The design is a four-principal-group, positive/negative/positive/positive zoom. Its 15 physical glass elements form 11 air-separated optical components. Three of those components are cemented assemblies: the front doublet D1, the negative triplet T1, and the positive doublet D2. The remaining eight components are singlets.

Independent paraxial calculation of the final data gives the following group focal lengths at the 80 mm infinity state:

| Principal group | Surface span | Computed focal length |
|---|---|---:|
| G1 | 1–5 | +191.437161 mm |
| G2 | 6–11 | −60.081000 mm |
| G3 | 12–14 | +151.178370 mm |
| G4 | 15–26 | +114.873984 mm |

The first three groups form the zooming front system and are substantially afocal to the precision of the patent table; G4 acts as the positive master/relay group. This arrangement explains why the patent's G4 focal length is nearly invariant while the effective focal length of the complete lens changes from 80 to 200 mm [1, printed pp. 59–62]. The calculated G4 value, +114.873984 mm, reproduces the patent's `f4 = 114.874 mm`.

G1 is the positive front and focusing group. At infinity it stays fixed in the tabulated zoom coordinates. G2 is the negative variator and moves monotonically imageward as focal length increases. G3 is positive and acts as the compensating group: it moves imageward from 80 to 140 mm and then reverses objectward between 140 and 200 mm. G4 remains fixed to source-rounding precision. The non-monotonic G3 motion is preserved by the three zoom control points in the data file rather than replaced by a single linear end-to-end interpolation.

The modeled adjustable aperture stop lies in the patent's `d14` air space, immediately before G4, as shown in Figure 5 [1, printed p. 65]. The patent does not publish a numerical axial split or stop diameter. The data therefore places `STO` 2.000 mm before surface 15 and fixes it to G4. Its semi-diameter, 20.513214 mm, is an explicit modeling inference derived from the verified G4 focal length and f/2.8. This inferred plane is distinct from the small positive L9 component farther back in G4, to which the patent assigns a separate diaphragm-related function.

The clear semi-diameters are likewise modeling values rather than patent table entries. They were constrained by the patent section drawing, the production lens's 95 mm front attachment size [3], paraxial marginal/chief-ray requirements, and the current geometry limits. They should not be read as manufacturing drawings or measured production clear apertures.

Under the project's strict first-order terminology, the modeled system is not classified as a telephoto optical form at any of the three tabulated states because total track divided by EFL remains greater than one. The commercial product category is therefore not used as the optical-form label here.

## Element-by-Element Analysis

### D1 — L1a Negative Meniscus + L1b Biconvex Positive

**L1a:** nd = 1.75520, νd = 27.6. Glass: SF4 catalog-equivalent coefficient proxy. f = −395.401 mm.\
**L1b:** nd = 1.50032, νd = 82.3. Glass: J-FKH1 catalog-equivalent coefficient proxy. f = +169.583 mm.

D1 is the cemented front component of G1. The first member is weakly negative by itself, while the second member is substantially positive. Their air-bounded cemented combination is net positive, with a computed component focal length of +298.793 mm. The combination therefore contributes positive power to G1 without requiring the high-dispersion first member to carry the whole converging function.

The very large Abbe-number difference between the two members is an important material degree of freedom. The νd = 82.3 coordinate is strongly low-dispersion. The production lens is explicitly designated ED, and the patent example contains exactly two occurrences of this distinct coordinate, at L1b and L2, so those two diagram positions are marked as an inferred ED/APD correlation. J-FKH1 remains only a coordinate-compatible spectral proxy: the assignment does not establish a historical production melt, and no secondary-spectrum or apochromatic claim follows from the coordinate alone.

### L2 — Positive Meniscus

**nd = 1.50032, νd = 82.3. Glass: J-FKH1 catalog-equivalent coefficient proxy. f = +524.324 mm.**

L2 is a weak positive meniscus separated from D1 by only 0.2 mm of air. It uses the same low-dispersion coordinate as L1b. Together D1 and L2 form the positive G1 focusing group, whose computed air-bounded focal length is +191.437 mm.

Because the patent assigns focusing to the whole first group, L2 moves with D1 in the finite-distance reconstruction. It is not modeled as a separate floating element.

### T1 — L3a Biconcave Negative + L3b Biconvex Positive + L3c Biconcave Negative

**L3a:** nd = 1.78797, νd = 47.5. Glass: TAF4 catalog-equivalent coefficient proxy. f = −80.713 mm.\
**L3b:** nd = 1.75520, νd = 27.6. Glass: SF4 catalog-equivalent coefficient proxy. f = +49.829 mm.\
**L3c:** nd = 1.58144, νd = 40.8. Glass: PBL25 catalog-equivalent coefficient proxy. f = −65.827 mm.

The three cemented members alternate negative, positive, and negative standalone power. Their combined air-bounded component focal length is −143.457 mm. The cemented triplet therefore supplies much of the negative power required by G2 while keeping three materially different glasses in a compact component.

This component should not be interpreted by simply adding its three standalone powers. The cemented interfaces alter the in-situ power, and the triplet's net behavior is the matrix-derived −143.457 mm value. Its motion as part of G2 changes the angular magnification of the substantially afocal front system and is the primary monotonic zoom motion in the tabulated prescription.

### L4 — Biconcave Negative

**nd = 1.58913, νd = 61.2. Glass: S-BAL35 catalog-equivalent coefficient proxy. f = −110.172 mm.**

L4 is the rear singlet of G2 and remains mechanically tied to the T1 triplet in the zoom model. Its standalone negative power supplements the triplet so that the complete G2 has a computed focal length of −60.081 mm.

The higher Abbe number of L4 relative to the three T1 glasses broadens the dispersion palette available within the negative variator. The patent's `nd`/`νd` coordinates support that statement; more specific chromatic performance cannot be assigned without spectral line data.

### D2 — L5a Biconvex Positive + L5b Negative Meniscus

**L5a:** nd = 1.67025, νd = 57.6. Glass: J-LAK02 catalog-equivalent coefficient proxy. f = +73.976 mm.\
**L5b:** nd = 1.80518, νd = 25.4. Glass: S-TIH6 catalog-equivalent coefficient proxy. f = −144.046 mm.

D2 is the entire G3 compensating group. Its positive front member and negative rear member form a net positive cemented component with computed focal length +151.178 mm. The large difference in dispersion coordinates, νd = 57.6 versus 25.4, gives this moving compensator both first-order power and chromatic leverage without adding an air-separated component.

G3 does not move monotonically across the zoom range. Its tabulated position advances imageward between 80 and 140 mm and then retreats objectward toward 200 mm. This reversal is a source-prescribed zoom characteristic, not an inferred focus motion.

### L6 — Positive Meniscus

**nd = 1.78797, νd = 47.5. Glass: TAF4 catalog-equivalent coefficient proxy. f = +69.087 mm.**

L6 begins G4 immediately behind the modeled adjustable stop. It is the strongest positive singlet in the rear group by standalone focal length and therefore supplies a large share of the converging action at the entrance to the master/relay section.

The stop placement is an inference from Figure 5, not a statement that the patent numerically locates the diaphragm exactly 2.000 mm ahead of L6. That split is chosen so the complete `d14` spacing remains exactly equal to the published value at every zoom state.

### L7 — Positive Meniscus

**nd = 1.78797, νd = 47.5. Glass: TAF4 catalog-equivalent coefficient proxy. f = +166.041 mm.**

L7 is a second positive meniscus using the same patent glass coordinate as L6. Its weaker standalone power continues the positive relay while allowing the curvature distribution of G4 to be shared across more than one strongly converging surface pair.

L6, L7, and L8 together form the G41 subassembly used explicitly in the patent's focal-length-ratio condition. Their computed combined focal length is +131.212 mm at source precision.

### L8 — Biconcave Negative

**nd = 1.75520, νd = 27.6. Glass: SF4 catalog-equivalent coefficient proxy. f = −67.539 mm.**

L8 is the negative member that closes the G41 subassembly. Its relatively strong negative standalone power counterbalances the two preceding positive menisci while leaving G41 net positive. This positive-positive-negative sequence gives the master group a more distributed power profile than a single high-power positive component would provide.

The material coordinate is the same 755276 class used in L1a and L3b. The repeated coordinate is treated as a glass class, not as proof that the same commercial melt or vendor was used in every position.

### L9 — Biconvex Positive

**nd = 1.63854, νd = 55.5. Glass: K-SK18 catalog-equivalent coefficient proxy. f = +218.428 mm.**

L9 is a comparatively weak positive singlet placed after a 19.0 mm air space. The patent discusses this added biconvex component in connection with the fourth-group diaphragm arrangement [1, printed pp. 60–62]. In the data model it remains an ordinary refracting element and is not substituted for the separately inferred adjustable `STO` plane.

Its weak positive power and small modeled diameter distinguish it from the stronger front portion of G4. The element is therefore best understood as a local relay/correction member within the master group rather than as the principal aperture-defining element of the LensVisualizer model.

### L10 — Negative Meniscus

**nd = 1.71300, νd = 54.0. Glass: J-LAK8 catalog-equivalent coefficient proxy. f = −71.736 mm.**

L10 introduces strong negative standalone power near the rear of G4. It follows the long 22.7 mm air space after L9 and begins the final negative-positive pair of the prescription.

Its placement allows the rear group to redistribute power before the image plane without changing the overall positive sign of G4. The data does not assign a named vendor glass because the patent gives only the optical coordinates.

### L11 — Biconvex Positive

**nd = 1.61293, νd = 37.0. Glass: E-F3 catalog-equivalent coefficient proxy. f = +100.103 mm.**

L11 is the final positive singlet. It follows L10 across a 0.2 mm air gap and restores positive power in the last component before the 40.639 mm published back focal distance.

The L10/L11 pair should again be distinguished from a cemented doublet: the 0.2 mm gap is real in the selected table, so the members are separate components. Their in-situ contribution is governed by the spacing and by the rest of G4, not by their standalone focal lengths alone.

## Glass Identification and Selection

The patent provides ten distinct d-line `nd`/`νd` coordinate pairs but no glass-maker names. The final data preserves those coordinates and uses modern catalog curves only as coordinate-compatible spectral proxies. No proxy name is presented as the production supplier or historical melt.

| Data-file glass label | nd | νd | Elements |
|---|---:|---:|---|
| SF4 coefficient proxy (patent 755276) | 1.75520 | 27.6 | L1a, L3b, L8 |
| J-FKH1 coefficient proxy (patent 500823) | 1.50032 | 82.3 | L1b, L2 |
| TAF4 coefficient proxy (patent 788475) | 1.78797 | 47.5 | L3a, L6, L7 |
| PBL25 coefficient proxy (patent 581408) | 1.58144 | 40.8 | L3c |
| S-BAL35 coefficient proxy (patent 589612) | 1.58913 | 61.2 | L4 |
| J-LAK02 coefficient proxy (patent 670576) | 1.67025 | 57.6 | L5a |
| S-TIH6 coefficient proxy (patent 805254) | 1.80518 | 25.4 | L5b |
| K-SK18 coefficient proxy (patent 639555) | 1.63854 | 55.5 | L9 |
| J-LAK8 coefficient proxy (patent 713540) | 1.71300 | 54.0 | L10 |
| E-F3 coefficient proxy (patent 613370) | 1.61293 | 37.0 | L11 |

The most conspicuous low-dispersion coordinates are the two G1 members at `nd = 1.50032`, `νd = 82.3`. Nikon identifies the production lens as an ED lens [2][3], and these are the example's only two occurrences of that coordinate. The viewer therefore uses an explicitly **inferred** element-level ED/APD correlation at L1b and L2. J-FKH1 supplies coefficient-backed tracing within the catalog compatibility guard without asserting that Nikon used that supplier or melt in production.

No element in the final data carries patent-published `nC`, `nF`, `ng`, or `dPgF`. Coefficient-backed tracing now covers all fifteen elements through supplier-neutral proxies, but the analysis does not describe the design as apochromatic and does not assign anomalous partial dispersion to any element.

## Focus Mechanism

The patent assigns focusing to G1, the complete positive first group [1]. It does not publish a finite-object spacing table. The data therefore records the focus status as **CONSTRAINED_RECONSTRUCTION** rather than presenting close-focus spacings as source facts.

Nikon's production manual gives a minimum focusing distance of 2.5 m and describes focus/zoom operation by a single control ring [3]. The optical reconstruction uses only the 2.5 m distance as a boundary condition. At each of the three zoom positions, the complete G1 is translated objectward while G2, G3, G4, and the image plane remain fixed relative to one another. The solution is obtained by enforcing the paraxial finite-conjugate imaging condition at an object plane 2.5 m from the image plane.

| Zoom | d5 at infinity | d5 at reconstructed 2.5 m | G1 objectward travel |
|---:|---:|---:|---:|
| 80 mm | 4.2245 mm | 22.068842 mm | 17.844342 mm |
| 140 mm | 51.0442 mm | 68.889674 mm | 17.845474 mm |
| 200 mm | 69.7720 mm | 87.617985 mm | 17.845985 mm |

The small variation in solved travel among the three states is consistent with the finite precision of the patent's tabulated zoom spacings. The corresponding finite-conjugate matrix residuals are below `1.5 × 10⁻¹²` in the independent calculation. Those close-focus gaps and travels are model results, not values published by Nikon or the patent.

No separate floating component is introduced, and no production magnification claim is derived from the reconstructed paraxial state.

## Chromatic Correction Strategy

The design distributes a wide range of Abbe numbers through all four principal groups rather than confining dispersion contrast to a single rear corrector. G1 combines νd = 27.6 with two νd = 82.3 members; G2 uses 47.5, 27.6, 40.8, and 61.2; G3 pairs 57.6 with 25.4; and G4 spans 27.6–55.5 among its distinct coordinates. This distribution gives the design several first-order chromatic balancing degrees of freedom while the zoom groups move.

The two νd = 82.3 elements in G1 are the design's lowest-dispersion coordinates. Their count and placement provide the basis for the inferred element-level mapping to the production lens's ED designation. The selected patent does not publish the spectral line indices needed to calculate partial-dispersion behavior from first principles. For that reason, the analysis confines itself to the published `nd`/`νd` structure and does not infer APO correction, fluorite-equivalent behavior, or a production glass family.

The cemented assemblies also matter to the chromatic strategy because their internal interfaces couple glasses with substantially different dispersions without adding air spacing. D1 combines νd = 27.6 and 82.3; T1 combines 47.5, 27.6, and 40.8; D2 combines 57.6 and 25.4. The exact chromatic residuals of those combinations require wavelength-dependent indices beyond the patent data retained here.

## Conditional Expressions

JPS58-54312A states four principal conditions for the four-group large-aperture zoom and gives two additional limits in the discussion of the modified fourth group [1, printed pp. 59–61]. The patent defines each meniscus shape factor from its object- and image-side radii as

$$
q = \frac{r_t + r_s}{r_t - r_s}.
$$

Independent evaluation from the selected Example 2 radii, spacings, and group matrices gives:

| Patent condition | Example 2 value | Required interval | Result |
|---|---:|---|---|
| `Nb − Na` | −0.032770 | `−0.3 < x < 0.3` | Pass |
| `qa = q7` | −2.285453 | `−3.0 < x < −0.5` | Pass |
| `qb = q8` | +0.303683 | `−0.5 < x < 1.0` | Pass |
| `f41 / f4` | 1.142223 | `0.8 < x < 1.2` | Pass |
| `qc = q9` | +0.070266 | `−0.5 < x < 0.5` | Pass |
| `d20 / d22` | 0.837004 | `0.3 < x < 2.0` | Pass |

The computed G4 and G41 focal lengths are +114.873984 mm and +131.211756 mm, reproducing the patent's rounded `f4 = 114.874 mm` and `f41 = 131.212 mm`. The inequalities therefore remain satisfied without altering the selected example.

## Verification Summary

Sequential reduced-angle tracing and an independent ABCD calculation of the final authored prescription reproduce the three patent focal-length states and the 40.639 mm back focus to source precision:

| Zoom state | Computed EFL | Computed BFD | Modeled wide-open F/# |
|---:|---:|---:|---:|
| 80 mm | 80.000066 mm | 40.638655 mm | 2.7999997 |
| 140 mm | 139.999863 mm | 40.638543 mm | 2.7999967 |
| 200 mm | 199.999861 mm | 40.638618 mm | 2.7999987 |

The stop result depends on the disclosed model rather than a patent stop coordinate. With `STO` 2.000 mm before surface 15 and semi-diameter 20.513214 mm, the entrance-pupil semi-diameters become 14.285728, 25.000005, and 35.714277 mm at 80, 140, and 200 mm. These reproduce the numerical example's constant f/2.8 to better than `4 × 10⁻⁶` in f-number.

The surface-by-surface Petzval sum, using `φ/(n·n′)`, is `+0.000881944275488 mm⁻¹`, corresponding to a reciprocal signed radius of about 1133.858 mm. The inserted flat air stop contributes zero to this sum.

The semi-diameter model passes the independent geometry checks used during data construction: minimum element edge thickness is 0.560071 mm, maximum actual spherical rim angle is 55.1193°, and the largest positive shared-gap sag intrusion is 0.864798 of the available gap. A 600 dpi follow-up against Figure 5 retained the final optical-rim envelope; surface leaders and the G4 braces were excluded from the comparison. At the representative 0.60-field/0.83-pupil diagnostic, 80 and 140 mm remain within the authored apertures; at 200 mm the first clipping occurs at the exterior of G1 rather than at a cemented interface. These are validation properties of the visualization model, not patent-published mechanical dimensions or vignetting measurements.

No sensor cover glass, filter, inactive dummy refracting plane, or mechanical part is included in the sequential optical model, and no omitted plate requires an air-equivalent rear-spacing correction. No scale factor is applied. All prescription dimensions remain at the published scale. All surfaces are spherical, so no conic convention or aspheric coefficient transformation is applicable.

## Sources and References

1. **JPS58-54312A**, Nippon Kogaku Kogyo K.K., Yoshinori Hamanishi, published 1983-03-31. Selected source: Example 2; numerical tables on printed pp. 61–62; optical sections in Figures 1 and 5 on printed pp. 63 and 65. Supplied patent PDF is the prescription authority.
2. **Nikon, “NIKKOR — The Thousand and One Nights No. 67.”** Nikon states that the 80–200mm f/2.8 line began with the AI-S Zoom-Nikkor 80–200mm f/2.8 ED designed by Yoshinori Hamanishi and released in 1982. https://imaging.nikon.com/imaging/information/story/0067/
3. **Nikon, *Zoom-Nikkor ED 80–200mm f/2.8* instruction manual.** The archived specifications give 80–200 mm, f/2.8, 15 elements in 11 groups, 30°10′–12°20′ picture angle, 2.5 m minimum focus, 95 mm attachments, and Nikon bayonet mount. https://cdn-10.nikon-cdn.com/pdf/manuals/archive/Zoom-Nikkor%20ED%2080-200mm%20f-2.8.pdf
4. **US4468097A**, *Four-group great aperture ratio zoom lens*, U.S. family publication of JPS58-54312A. Used only to resolve the ambiguous 1.45 mm thickness readings in the Japanese scan. https://patents.google.com/patent/US4468097A/en
