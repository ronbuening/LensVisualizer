# Nikon Fuwatto Soft 90mm f/4.8 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 5,796,530
**Application Number:** US 08/694,403
**Filed:** August 12, 1996
**Granted:** August 18, 1998
**Priority:** JP 7-231948 (August 17, 1995)
**Inventor:** Kouichi Ohshita (rendered as Koichi Oshita in the US patent)
**Assignee:** Nikon Corporation, Tokyo, Japan
**Title:** Lens System with Switchable Soft Focus
**Embodiment analyzed:** Example Embodiment 2, second soft-focus configuration (Table 2, Figs. 7-12)

The Nikon Fuwatto Soft 90mm f/4.8 is the soft-focus state of the convertible Gugutto Macro / Fuwatto Soft unit from Nikon's 1995 Amusing Lenses / Fun Fun Lens Set. The production lens uses the same optical assembly as the Gugutto Macro 120mm f/4.5, but in a different configuration: the rear negative meniscus group is removed, and the cemented doublet is reversed so that the aperture stop is objectwise of the glass. The resulting optical prescription is a one-group, two-element, all-spherical cemented doublet.

US 5,796,530 presents four numerical examples of the same switchable architecture. Example Embodiment 2 is retained here as the closest match to the production lens for three reasons. First, the patent's second soft-focus state gives $f = 75.522$ mm at unit scale; scaling all lengths by $1.2$ gives $f = 90.627$ mm, matching the marketed 90 mm soft-focus state while also taking the sharp parent state from 100 mm to approximately 120 mm. Second, the patent's second soft-focus f-number is FN = 4.95, close to the marketed f/4.8 once the production stop size is allowed to differ slightly from the numerical example. Third, the inventor's Nikon historical account identifies the production lens as the same basic three-element convertible assembly: a cemented front doublet and a removable rear concave element.

The companion `.data.ts` file therefore transcribes only the production Fuwatto Soft state: aperture stop first, then the reversed cemented doublet, then the image plane. The complete sharp-focus Gugutto Macro arrangement is discussed below because it explains why the soft configuration exists, but the removed rear group is not part of the production Fuwatto prescription file.

## Optical Architecture

The patent's complete lens system is a positive-negative two-group telephoto-type parent design. In the sharp Gugutto Macro state, light passes through:

1. **G1:** a cemented positive meniscus doublet, composed of a biconvex crown element L11 and a biconcave high-index flint element L12;
2. **S:** a fixed aperture stop located behind G1;
3. **FS:** a fixed flare stop or baffle;
4. **G2:** a single negative meniscus rear corrector.

In that parent state, paraxial tracing of Example 2 gives $f = 100.0008$ mm and a back focal distance of $43.906$ mm at patent scale, matching the patent table. The front doublet alone has $f_1 = 75.5222$ mm, so the rear negative group lengthens the focal length by about 32.4% while shortening the total track. The patent telephoto ratio is TL = 0.924, and the computed value matches within rounding.

The Fuwatto Soft state is not that telephoto parent system. It is the reversed doublet alone. In the second soft-focus configuration, light first encounters the stop and then the glass surfaces in the reverse order from the sharp parent: original surface 3, original cemented surface 2, and original surface 1. The effective focal length remains $75.5222$ mm at patent scale because reversing a cemented group does not change its first-order power in air. After the $1.2\times$ production scaling, the data file computes $f = 90.6267$ mm.

This distinction is important. The sharp 120 mm parent is a modest telephoto construction. The Fuwatto Soft 90 mm state is better described as a reversed achromatic meniscus-like soft-focus doublet with a long back focal distance; it is not a telephoto lens by the usual first-order definition.

### Soft-Focus Configurations in the Patent

The patent describes two soft-focus states, both formed by retracting the second lens group from the optical axis.

In the **first soft-focus configuration**, G1 remains objectwise of the stop. The patent gives $f = 75.522$ mm, Bf = 68.547 mm, FN = 3.47, and $2\omega = 26.3^\circ$ at patent scale.

In the **second soft-focus configuration**, the order of the stop and G1 is reversed. The stop is objectwise, the reversed doublet follows it, and the patent gives $f = 75.522$ mm, Bf = 78.981 mm, FN = 4.95, and $2\omega = 27.0^\circ$ at patent scale. This is the state corresponding to the Fuwatto Soft 90mm f/4.8.

The f-number difference between the two soft configurations is a pupil-position effect. In the first soft state, the stop is viewed through G1. In the second soft state, the stop is in front of the glass and is seen directly from object space. The marketed f/4.8 value is therefore modeled by setting the production stop diameter from the 90 mm nominal focal length rather than retaining the exact patent stop diameter.

## Element-by-Element Analysis

### L12 — Biconcave Negative, front element in the Fuwatto state

$n_d = 1.80384$, $\nu_d = 33.89$. Glass: HIKARI E-LAFH2 class, historical/obsolete 804/339 lanthanum flint. Standalone $f \approx -50.6$ mm at patent scale, $f \approx -60.7$ mm at production scale.

L12 is the image-side element of the sharp-focus parent doublet, but it becomes the object-side glass element after the doublet is reversed for Fuwatto use. In the Fuwatto optical path, its first surface is the original rear surface of G1, scaled to $R = -94.951$ mm in the production data file, and its second surface is the cemented interface scaled to $R = +101.065$ mm.

The element is a high-index flint partner to the crown element L11. Its dispersion supplies the negative chromatic power needed to make the two-element group a usable achromat rather than a simple uncorrected singlet. The patent's conditional expression (4), $n_2 - n_1 > 0.05$, is strongly satisfied in Example 2: $1.80384 - 1.62280 = 0.18104$. That large index step also lets the cemented interface remain relatively gentle while still contributing meaningful aberration correction.

The older draft's identification of this glass as HIKARI E-FDS2 is not retained. E-FDS2 is a different very-high-index dense flint family and does not match the 804/339 index-Abbe pair. The stored optical constants instead match HIKARI E-LAFH2-class historical data. Because current public HIKARI catalogs no longer list that older E-series glass as a normal current product, the data file marks it explicitly as historical/obsolete rather than treating it as a readily resolvable current catalog glass.

### L11 — Biconvex Positive, rear element in the Fuwatto state

$n_d = 1.62280$, $\nu_d = 57.03$. Glass: OHARA S-BSM10 / 623570 barium borosilicate crown class. Standalone $f \approx +32.0$ mm at patent scale, $f \approx +38.4$ mm at production scale.

L11 is the main positive-power element. In the sharp parent configuration it is the object-side member of G1; in the Fuwatto state it becomes the image-side element of the reversed doublet. Its strongly convex original front surface becomes the final image-side surface of the soft-focus lens. This reversal is the key operation that changes the aberration balance without changing the group's first-order focal length.

The S-BSM10-class glass is a medium-index crown with $\nu_d \approx 57$. It gives the positive element enough index to keep the curvatures compact while preserving crown-like dispersion. Paired with L12, it forms a simple cemented achromat. The doublet's first-order chromatic residual remains small when the group is reversed because the group powers and glass dispersions are unchanged to first order; the sign and magnitude of higher-order aberrations, especially spherical aberration and off-axis behavior, do change with orientation.

The older draft's OHARA BSM71 identification is rejected. OHARA S-BSM71 has substantially different published constants from the prescription. The 1.62280 / 57.03 prescription is instead the 623570 family, for which OHARA S-BSM10 is the direct public catalog match.

### L2 — Removed negative meniscus corrector in the sharp parent design

$n_d = 1.51823$, $\nu_d = 58.90$. Glass: OHARA S-NSL3 / HOYA E-C3 class, 518590 borosilicate crown. Standalone $f \approx -277.0$ mm at patent scale, $f \approx -332.4$ mm at production scale.

L2 is not present in the Fuwatto Soft data file. It belongs to the sharp-focus Gugutto Macro parent configuration and explains the switchable design. In the parent lens, L2 is a weak negative meniscus placed behind the stop, with a steep object-side surface. It lengthens the focal length from the G1-alone value of 75.522 mm to approximately 100 mm at patent scale, and it strongly reduces the Petzval curvature left by the front doublet.

A surface-by-surface Petzval calculation gives $P = 0.008697\ \mathrm{mm}^{-1}$ for G1 alone at patent scale. With L2 present, the complete sharp parent drops to $P = 0.001702\ \mathrm{mm}^{-1}$. That is an approximate 80% reduction in the Petzval sum, and it supports the patent's description of the rear negative meniscus as a field flattener.

The older draft's HOYA BSC3 identification is also not retained. BSC3 is not the 518590 glass represented by the prescription. The public catalog match is the S-NSL3 / E-C3 class.

## Glass Identification / Selection

| Element | Patent role | $n_d$ | $\nu_d$ | Corrected glass identification | Use in Fuwatto data file |
|---|---:|---:|---:|---|---|
| L12 | Negative flint member of G1 | 1.80384 | 33.89 | HIKARI E-LAFH2 class, historical/obsolete 804/339 lanthanum flint | Yes, front element after reversal |
| L11 | Positive crown member of G1 | 1.62280 | 57.03 | OHARA S-BSM10 / 623570 barium crown class | Yes, rear element after reversal |
| L2 | Rear negative corrector in sharp parent | 1.51823 | 58.90 | OHARA S-NSL3 / HOYA E-C3 class, 518590 borosilicate crown | No; removed for Fuwatto Soft |

The glass palette is deliberately conservative. The Fuwatto optical path contains only the cemented crown/flint doublet, so it preserves ordinary primary achromatization while leaving a large spherical-aberration residual. There is no ED glass, no anomalous-partial-dispersion correction, and no aspherical surface.

The corrected glass identifications matter because the earlier labels implied different catalog glasses. The numerical prescription is unambiguous: L11 is a 623570 crown, L12 is an 804339 high-index flint, and L2 is a 518590 crown. Those code families are also consistent with the patent's conditional expressions governing the refractive-index step and the coma/lateral-color balance of the doublet.

## Focus Mechanism

Focusing is by unit extension. The patent's lens-barrel embodiment uses a focusing ring, cam tube, and cam pin to move the inner portion of the barrel back and forth along the optical axis. There is no internal focusing group and no floating correction.

The patent does not publish close-focus spacing tables. It gives only the infinity-focus prescription. For the data file, the close-focus state is therefore computed rather than transcribed: the scaled Fuwatto prescription is refocused by increasing the final back-focus gap until the system focuses at the production minimum focus distance of 0.40 m. The resulting final gap is 144.302 mm, compared with 94.777 mm at infinity.

| State in data file | Final gap from last glass surface to image plane |
|---|---:|
| Infinity | 94.777 mm |
| 0.40 m close focus | 144.302 mm |

This long extension is plausible for the production soft state because the manual identifies the Fuwatto Soft as a close-focusing 90 mm soft-focus configuration, not as a conventional internally focusing lens.

## Aspherical Surfaces

The design has no aspherical surfaces. All refracting surfaces in both the sharp parent configuration and the Fuwatto Soft configuration are spherical. This is consistent with the inexpensive educational design brief and with the one-group, two-element production soft-focus prescription.

## Aberration Correction Strategy

The design's central idea is not to vary the amount of spherical aberration by moving groups in a high-precision compensating mechanism. Instead, it provides two physically distinct optical states. With G2 installed, the lens works as the sharp 120 mm Gugutto Macro. With G2 removed and the doublet reversed, the same front group becomes the 90 mm Fuwatto Soft.

The patent states that G2 corrects negative spherical aberration left by G1. Removing G2 therefore releases a large residual spherical aberration. The result is a soft-focus image with a resolved core surrounded by a diffuse halo. This is the same basic rendering principle as older soft-focus meniscus and diffusion-control lenses, but implemented through a detachable rear group rather than a continuously adjustable soft-focus mechanism.

The conditional expressions in Example 2 quantify the balance:

| Expression | Meaning | Example 2 value | Patent range / condition |
|---|---|---:|---:|
| (1) $f_1/f$ | Relative power of the front group | 0.755 | 0.70-0.85 |
| (2) $r_4/f$ | Object-side curvature of the rear negative meniscus | -0.0979 | -0.15 to -0.09 |
| (3) $|f\sqrt{n_2-n_1}/r_3|$ | Astigmatism / meridional field balance | 0.5377 | 0-0.55 |
| (4) $n_2-n_1$ | Index step at the cemented interface | 0.1810 | greater than 0.05 |
| (5) $|n_1-0.4n_2-40/\nu_1+23/\nu_2|$ | Coma and lateral-color balance | 0.8785 | 0.85-0.95 |

The values sit close to several limits, especially expression (3). That is expected for a two-element soft-focus group derived from a corrected three-element parent: there is little unused aberration-correction freedom.

## Design Heritage and Context

Nikon's historical account describes the lens set as an attempt to let users experience simple optical construction directly. The Gugutto Macro / Fuwatto Soft module is the most mechanically instructive member of the set because the user can reconfigure it by removing the rear group and reversing the doublet.

The soft-focus state also connects deliberately to older unhooded-meniscus soft-focus practice. The production manual describes a user-cut paper stop for reducing the soft effect, and the inventor's Nikon account recommends a roughly 15 mm opening, about f/6, when the full-aperture flare is excessive. In modern data-file terms, this is simply an aperture change: stopping down blocks the outer marginal rays that carry much of the spherical-aberration halo.

## Verification Summary

Independent paraxial tracing of Example Embodiment 2 gives the following results at patent scale:

| Parameter | Patent | Computed | Difference |
|---|---:|---:|---:|
| Sharp parent EFL | 100.000 mm | 100.0008 mm | +0.0008 mm |
| Sharp parent BFD | 43.905 mm | 43.9060 mm | +0.0010 mm |
| G1-alone EFL | 75.522 mm | 75.5222 mm | +0.0002 mm |
| Second soft-state BFD | 78.981 mm | 78.9814 mm | +0.0004 mm |
| $f_1/f$ | 0.755 | 0.7552 | +0.0002 |
| Telephoto ratio of sharp parent | 0.924 | 0.9240 | within rounding |

For the production Fuwatto data file, all radii and thicknesses are scaled by $1.2$. The computed Fuwatto EFL is 90.6267 mm and the infinity final gap is 94.7771 mm. The wide-open stop semi-diameter is set to 9.44 mm to model the marketed 90 mm f/4.8 aperture rather than the slightly smaller stop implied by the patent's FN = 4.95 numerical example.

## Sources

1. US Patent 5,796,530, Koichi Oshita, "Lens System with Switchable Soft Focus," assigned to Nikon Corporation, granted August 18, 1998.
2. Nikon, NIKKOR — The Thousand and One Nights No. 52, "Nikon Fun Fun LensSet, Part 1 (Gugutto Macro / Fuwatto Soft)," by Kouichi Ohshita.
3. Nikon, instruction manual for ニコンおもしろレンズ工房, production specification table and reconfiguration instructions.
4. OHARA Optical Glass Catalog, S-BSM10 and S-NSL3 entries.
5. HOYA optical-glass code cross-reference, E-C3 / S-NSL3 / 518590 family and E-FDS2 mismatch.
6. HIKARI Optical Glass Catalog / historical data references for E-LAFH2-class glass.
