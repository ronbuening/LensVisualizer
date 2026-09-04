## Patent Reference and Design Identification

**Patent:** US 4,260,223 A<br>
**Application Number:** US 06/067,141<br>
**Priority:** August 21, 1978<br>
**Filed:** August 16, 1979<br>
**Granted:** April 7, 1981<br>
**Inventor:** Yoshinari Hamanishi<br>
**Assignee:** Nippon Kogaku K.K.<br>
**Title:** *Lens system for photographing objects from infinity to a very short distance*<br>
**Embodiment analyzed:** Example 1 / first embodiment / Table 1 / Figs. 1A, 1B, 2A–2C

The selected prescription is the first embodiment of US 4,260,223 A. The patent identifies it as a modified Gaussian short-distance photographic lens composed of a positive forward group G1 and a positive rearward group G2 with the diaphragm between them. During focusing from infinity toward a short-distance object, both functional groups move toward the object while their separation increases; the diaphragm moves with G2. The numerical prescription is given in Table 1 and the corresponding infinity and close-focus layouts appear in Figs. 1A and 1B.

The job card fixes this embodiment as the production correlation for the NIKON AI MICRO-NIKKOR 55mm f/2.8. The correlation is convergent rather than a manufacturer statement that the patent table is the production prescription:

1. Example 1 contains six glass elements in five air-separated groups, matching Nikon's published 6-element/5-group construction.
2. The patent gives f/2.8 and a full field of 42.92°, while Nikon publishes f/2.8 and a 43° picture angle for the 35 mm-format production lens.
3. Uniform scaling by `s = 0.55` maps the patent's normalized `f = 100` design to a computed 54.998916492 mm EFL, which is kept separate from the marketed 55 mm focal length.
4. Nikon's technical retrospective describes the 55 mm f/2.8 as a Gauss-derived design using floating adjustment, and credits Hamanishi with its development. The patent likewise uses a modified Gaussian arrangement and a two-positive-group close-focus mechanism.
5. Nikon specifies 0.25 m minimum focus and 1:2 maximum reproduction ratio for the bare lens; these production values provide the constraints for the modeled close-focus endpoint described below.

The dimensional prescription is stored at 0.55× the patent scale. Radii, center thicknesses, air spaces, image-plane distances, stop position, semi-diameters, and reconstructed movements therefore scale by 0.55, while refractive indices and Abbe numbers remain unchanged. The design is entirely spherical, so there are no conic constants or aspheric polynomial coefficients to transform; the normal `A_p / s^(p-1)` scaling rule is not applicable because no `A_p` terms exist.

No cover plate, filter, inactive dummy surface, flare-cutter plane, or other optical plate occurs in the selected Example 1 prescription. Accordingly, no plate was removed from the sequential model and no air-equivalent rear-spacing correction was required. The image plane itself is not tabulated by the patent and is computed from conjugacy.

## Optical Architecture

The design is a modified Gaussian, or Gauss-derived macro lens. The patent's G1/G2 notation refers to two positive **functional moving groups**, whereas the data file's `groupCount: 5` records the five **air-separated glass groups**: L1, L2, L3, the cemented L4a/L4b pair, and L5. This distinction is important because the six physical elements are mechanically coordinated as two larger focusing groups.

G1 contains L1, L2, and L3. L1 and L2 are positive, while L3 is negative; their in-situ combination has a computed focal length of +114.844131 mm. G2 contains the cemented L4a/L4b pair followed by L5. The cemented pair is only weakly positive as a standalone compound component, with a computed focal length of +289.273482 mm, but G2 as assembled with L5 has a computed focal length of +63.689338 mm. These group focal lengths describe the assembled functional groups and must not be confused with the standalone focal lengths of the individual glass elements.

The patent's principal architectural choice is the increase of the diaphragm space at close focus while both positive groups move toward the object. The patent explains this as a means of reducing close-range aberration deterioration without adding an auxiliary correcting lens. Its first embodiment specifically adopts the modified Gaussian arrangement shown in Fig. 1, with the stop mechanically tied to the rear group.

The final model retains exactly one aperture stop. Its axial position is source-derived: after scaling, the stop remains 3.199900 mm objectward of surface 7. Its physical semi-diameter, 7.417014298 mm, is not published by the patent; it is a modeling inference chosen to reproduce the modeled f/2.8 entrance pupil. Likewise, all refracting-surface semi-diameters are modeling values rather than patent table values. They were constrained by the verified ray envelopes, element edge thickness, actual spherical rim slope, cross-gap sag clearance, and the patent optical-section silhouette.

The computed infinity total track divided by EFL is 1.316780131, so the design does not satisfy the project's `TL/EFL < 1` telephoto criterion. Its BFD/EFL is 0.771949398, so it also does not satisfy the `BFD > EFL` retrofocus criterion. "Modified Gaussian" is therefore the appropriate architectural description.

## Element-by-Element Analysis

The focal lengths in this section are standalone element focal lengths in air, as stored in the final data file and independently recomputed from its surface arrays. They are not the in-situ powers of G1 or G2. The L4 compound focal length and the two functional-group focal lengths are stated separately where relevant.

### L1 — Biconvex Positive

`nd = 1.77279, νd = 49.4. Glass: 773494 — M-TAF1 (HOYA) coordinate-compatible spectral proxy; production supplier unresolved. f = +61.196440 mm.`

L1 is the first positive member of G1. The patent describes the first lens as positive with its more strongly curved surface facing the object. In the scaled prescription it supplies substantial positive standalone power at the front of the system, but it operates as part of the three-element G1 rather than as an isolated objective.

The high refractive index allows the required positive power to be obtained without assigning all of the forward-group power to surface curvature alone. The exact supplier and melt are not identified by the patent, so the stored glass label remains a coordinate/class description rather than a catalog attribution.

### L2 — Positive Meniscus

`nd = 1.71300, νd = 53.9. Glass: 713539 — lanthanum-crown coordinate class (supplier unresolved). f = +59.909762 mm.`

L2 is an air-spaced positive meniscus with its convex surface toward the object, matching the patent's description of the second member of G1. Its standalone power is close to that of L1, so the first two elements form a strongly positive front pair before the negative L3 member reduces the net power of the assembled forward group.

The relatively high `νd = 53.9` distinguishes L2 from the lower-Abbe negative L3 behind it. That dispersion contrast is consistent with ordinary achromatizing balance within G1, but the source does not provide line indices or partial-dispersion data sufficient for an anomalous-dispersion or apochromatic claim.

### L3 — Negative Meniscus

`nd = 1.61293, νd = 36.9. Glass: 613369 — flint coordinate class (supplier unresolved). f = -32.135825 mm.`

L3 is the negative rear element of G1 and, as the patent specifies, is a negative meniscus whose convex surface faces the object. Its standalone negative focal length has a smaller magnitude than the focal lengths of L1 or L2, so it provides strong negative power within the otherwise positive forward group.

The assembled G1 remains positive at +114.844131 mm. The negative L3 therefore does not form a negative functional group; instead, it moderates the power distribution established by L1 and L2 and provides an additional degree of freedom for balancing spherical aberration, field curvature, and close-range behavior. This interpretation is consistent with the patent's discussion of limiting forward-group power and average refractive index.

### L4a / L4b — Cemented Negative-Positive Pair

`L4a: nd = 1.69895, νd = 30.0. Glass: 699300 — dense-flint coordinate class (supplier unresolved). f = -29.664241 mm.`<br>
`L4b: nd = 1.74443, νd = 49.4. Glass: 744494 — M-NBF1 (HOYA) coordinate-compatible spectral proxy; production supplier unresolved. f = +31.330906 mm.`

L4 is the cemented meniscus component at the front of G2. The data model represents the cemented interface directly: surface 8 transitions from L4a into downstream element L4b, with no synthetic cement layer. The two members have large and nearly opposed standalone powers, yet the actual cemented pair is only weakly positive, with a computed compound focal length of +289.273482 mm.

That distinction is optically significant. L4a and L4b should not be interpreted as independent air-spaced lenses whose powers simply add. Their shared interface and index transition produce the much weaker net compound power stated above. The large difference in Abbe number between the negative and positive members is consistent with a conventional achromatizing role, while the near-cancellation of first-order power leaves the rear group free to use the pair for aberration balancing without making it the principal positive power source.

No production supplier identity is asserted for either member. The M-NBF1 curve is a coordinate-compatible spectral proxy rather than a claim about the historical glass manufacturer.

### L5 — Biconvex Positive

`nd = 1.79668, νd = 45.4. Glass: 797454 — J-LASF017 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved. f = +94.616866 mm.`

L5 is the final positive element of G2. Its standalone power is weaker than either individual member of the cemented L4 pair, but because L4a and L4b largely cancel one another, L5 is a major contributor to the positive power of the assembled rear group.

Together, the weakly positive cemented L4 component, L5, and their separation produce G2's computed +63.689338 mm in-situ focal length. This comparatively stronger rear-group power is consistent with the patent's discussion of using the rear group to support a large aperture while keeping the forward-group power within the stated conditions.

## Glass Identification and Selection

The patent publishes refractive-index and Abbe-number coordinates but does not identify glass suppliers or catalog names. The values align with conventional d-line catalog coordinates, so the data file uses the project-default d-line `nd/νd` representation. It retains the patent coordinates and uses compatible catalog curves as spectral proxies without promoting them to production glass identities.

| Element | nd | νd | Stored glass annotation |
|---|---:|---:|---|
| L1 | 1.77279 | 49.4 | 773494 — M-TAF1 spectral proxy; supplier unresolved |
| L2 | 1.71300 | 53.9 | 713539 — lanthanum-crown coordinate class (supplier unresolved) |
| L3 | 1.61293 | 36.9 | 613369 — F3 spectral proxy; supplier unresolved |
| L4a | 1.69895 | 30.0 | 699300 — dense-flint coordinate class (supplier unresolved) |
| L4b | 1.74443 | 49.4 | 744494 — M-NBF1 spectral proxy; supplier unresolved |
| L5 | 1.79668 | 45.4 | 797454 — J-LASF017 spectral proxy; supplier unresolved |

The six-digit strings are used as refractive-coordinate identifiers rather than supplier claims. Independent round-trip checks reproduce all six codes from the stored `nd/νd` pairs.

No element carries source-authored `nC`, `nF`, `ng`, or `dPgF`, because the patent does not publish those per-glass data. The C-line and g-line aberration plots in Fig. 2 do not supply element-level spectral indices. The qualified catalog curves support Sellmeier tracing, but they do not support claims of APO correction, anomalous partial dispersion, or historical production-glass identity.

## Focus Mechanism

The production lens is described by Nikon as using Close-Range Correction / floating adjustment, while the patent describes the underlying optical motion in terms of G1, G2, and the diaphragm space. From infinity toward close focus, both positive functional groups move objectward, but G1 moves slightly farther than G2. The resulting increase in intergroup spacing is the floating degree of freedom. The diaphragm remains fixed relative to G2.

The patent itself publishes two endpoint states for Example 1: infinity and `β = -1.0`. At the latter, its normalized intergroup spacing is `d6 = 29.773` and the object is `d0 = 164.194` from the first lens surface. That is a 1:1 design endpoint. It is not used as the bare production lens's close-focus state because Nikon specifies a 1:2 maximum reproduction ratio at 0.25 m without the PK-13 extension ring.

The data file therefore uses `CONSTRAINED_RECONSTRUCTION` for the production 1:2 endpoint. The reconstruction preserves the patent's single internal degree of freedom, keeps the diaphragm rigidly attached to G2, enforces both groups moving objectward with increasing separation, and solves the full object-to-film distance to Nikon's 0.25 m value. It is a model-derived intermediate state, not a patent-published spacing row.

| Quantity | Infinity | Reconstructed 1:2 close state |
|---|---:|---:|
| Surface 6 → STO | 4.115650 mm | 5.574172 mm |
| STO → surface 7 | 3.199900 mm | 3.199900 mm |
| Total patent `d6` equivalent | 7.315550 mm | 8.774072 mm |
| Surface 11 → image plane | 42.456380 mm | 69.922557 mm |

In fixed-film physical coordinates, the solved endpoint corresponds to G1 moving objectward by 28.924699 mm and G2/stop moving objectward by 27.466177 mm. Their differential travel increases the intergroup gap by 1.458522 mm. The final conjugate calculation gives an object-to-film distance of 250.000000001 mm and magnification of -0.499999999998.

The data file expresses the same motion in a lens-relative sequential coordinate system. Surface 6 carries the changing front-group-to-stop spacing, while surface 11 carries the changing rear-group-to-image spacing. The apparently increasing back-focus value in that representation is therefore not a claim that the physical rear group moves away from the object; it is the coordinate-equivalent representation of both groups moving objectward against a fixed film plane.

## Conditional Expressions

US 4,260,223 establishes four conditions for the two-positive-group short-distance design. Here `f` is the total system focal length, `f1` and `f2` are the forward- and rear-group focal lengths, `N1` is the patent-defined average refractive index of the forward group, and `r1` and `r2` are the two radii of L1. Recalculation from the final scaled arrays gives:

| Patent condition | Computed value | Result |
|---|---:|---|
| `1.6 < f1/f < 2.4` | 2.088116 | Pass |
| `1.5 < f1/f2 < 2.5` | 1.803192 | Pass |
| `1.68 < N1 < 1.78` | 1.699573 | Pass |
| `0.7 < (r2 + r1)/(r2 - r1) < 0.97` | 0.842886 | Pass |

The patent associates the first two conditions with power distribution between the forward and rear groups and with preserving brightness, back focus, and close-range correction. It associates the refractive-index and first-element-shape conditions with control of high-order spherical aberration, Petzval balance, and close-range distortion. Example 1 satisfies all four conditions after uniform scaling because the relevant dimensionless ratios and refractive indices are unchanged by scale.

## Verification Summary

Independent recomputation from the actual final TypeScript surface arrays gives an infinity EFL of 54.998916492 mm and BFD of 42.456380475 mm. The surface-1-to-image total track is 72.421480475 mm. The paraxial half-field height at the patent's 42.92° full field is 21.620307245 mm, consistent with the intended 35 mm-format image diagonal after scaling.

The inferred stop semi-diameter produces an entrance-pupil diameter of 19.642470176 mm and a modeled f-number of 2.79999999997. This agreement verifies the modeled stop aperture; it does not convert the inferred stop diameter into a patent-published value.

The reconstructed production close state gives EFL 55.608783310 mm, 250.000000001 mm object-to-image distance, and -0.499999999998 magnification. The focal-length change is a consequence of the floating spacing and is not substituted for the marketed 55 mm nominal focal length.

Surface-by-surface Petzval computation using `φ/(n·n′)` gives a scaled sum of +0.003089347446 mm⁻¹, corresponding to a radius magnitude of 323.692954 mm. The sequential reduced-angle trace and independent ABCD matrix agree to numerical precision, and both defined focus states preserve unit matrix determinant.

The semi-diameter model passes the applicable edge-thickness, actual spherical rim-slope, and shared-gap intrusion checks at infinity and reconstructed 1:2 focus. The L3 and cemented-L4 rims were enlarged after a direct Fig. 1A comparison to better reproduce the patent silhouette without changing any prescription coordinate or introducing a new traced-ray clip. A separate exact spherical/Snell ray proxy traced 22 representative on- and off-axis rays through both states; the minimum sampled clearance to an authored aperture was 1.260892 mm at the stop. These values verify the current modeling apertures but remain authoring inferences because the patent does not tabulate clear diameters.

One source contradiction is retained explicitly. Table 1 prints the rear functional-group focal length as `f2 = 115.797` in normalized units, while claim 8 prints `115.777` for the same example. Independent group-matrix calculation gives 115.798796 normalized, supporting Table 1; the claim value is therefore treated as a source error rather than silently propagated. The printed G1 focal length of 208.824 differs from the prescription-derived 208.807510 by an amount consistent with the three-decimal prescription rounding.

## Sources and References

1. Yoshinari Hamanishi, **US 4,260,223 A**, *Lens system for photographing objects from infinity to a very short distance*, Nippon Kogaku K.K., filed August 16, 1979, granted April 7, 1981. Example 1, Table 1, Figs. 1A–2C, and the design discussion in cols. 2–6. The supplied patent PDF is the numerical authority for the prescription.
2. Nikon USA, **Micro-Nikkor 55mm f/2.8** product specifications: <https://www.nikonusa.com/p/micro-nikkor-55mm-f28/1442/overview>. Used for marketed focal length, aperture, Nikon F mount, 35 mm/FX format, 6-element/5-group construction, 43° picture angle, and 0.25 m minimum focus.
3. Nikon, **Micro-Nikkor 55mm f/2.8 Instruction Manual**: <https://www.nikonusa.com/pdf/manuals/archive/Micro-Nikkor%2055mm%20f-2.8.pdf>. Used for the modified Gauss description, floating system, dual-helical focusing, bare-lens 1:2 endpoint, and extension-ring 1:1 capability.
4. Haruo Sato, Nikon **NIKKOR — The Thousand and One Nights No. 26: Ai Micro Nikkor 55mm f/2.8 (Latter Part)**: <https://imaging.nikon.com/imaging/information/story/0026/>. Used for Nikon's historical description of the Gaussian architecture, floating adjustment, and Hamanishi's development role. Nikon's English retrospective renders his given name as “Yoshinori”; the structured patent metadata retains “Yoshinari” as printed in the US patent record.
