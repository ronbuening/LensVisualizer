## Patent Reference and Design Identification

**Patent:** DE 143889 C<br>
**Effective patent date:** 10 June 1902<br>
**Granted / issued:** 7 September 1903<br>
**Inventor / catalog attribution:** Carl August Hans Harting<br>
**Applicant / assignee:** Voigtländer & Sohn AG<br>
**Title:** *Chromatisch, sphärisch und astigmatisch korrigiertes Objektiv*<br>
**Embodiment analyzed:** The patent's single worked numerical example (job-card Example 1)

DE 143889 C is a supplement to German patent 124934 of 1 December 1900. The publication names Voigtländer & Sohn AG rather than printing an individual inventor, while the project catalog attributes the Heliar design lineage and this worked example to Carl August Hans Harting. The earlier design is described as symmetric in arrangement, dimensions, and the absolute and relative optical constants. The supplement retains symmetry in the broad arrangement and in the relative relationships of refractive power and dispersion, while allowing the dimensions and absolute optical constants of corresponding front and rear components to differ. The patent states that this additional freedom improves correction of astigmatism, image curvature, and off-axis spherical aberration or coma without surrendering the principal advantages of the earlier symmetric form [DE 143889 C, p. 1].

The project job card fixes the production correlation as the **Voigtländer Heliar f/4.5 – second asymmetric form**. The patent itself does not print the Heliar trade name, a production barrel, a mount, or a specific camera format. The correlation is therefore treated as the selected project identification rather than as a manufacturer-confirmed one-to-one production match. The generic `large-format-lens-board` catalog tag follows the plate-camera Heliar family rather than claiming a patent-specific barrel. The displayed 100 mm focal length is the patent example's published nominal scale; the independently computed design focal length is 99.858 mm.

## Optical Architecture

The prescription contains five elements in three air-spaced groups:

1. a front cemented doublet, `a1 + b1`;
2. a thin central negative singlet, `c`;
3. a rear cemented doublet, `b2 + a2`.

All eight refracting surfaces are spherical. The patent drawing places the aperture between the central singlet and the rear doublet, and the text confirms that the stop lies between the middle and last lens [DE 143889 C, pp. 1-2 and drawing sheet]. The final data model contains exactly one `STO` in that air space.

The system has a positive-negative-positive group-power sequence. The front doublet is the weaker positive group, with a computed cemented-group EFL of +81.073 mm. The central singlet has a standalone EFL of -31.901 mm. The rear doublet is substantially stronger, with a computed cemented-group EFL of +39.720 mm. For a unit-height collimated paraxial ray, the front group begins convergence, the central negative singlet reverses it, and the rear group restores the final net convergence. This in-situ behavior is distinct from the standalone focal length of any individual element.

The defining architectural feature is the deliberate inequality of the two outer cemented groups. They retain the same broad flint/crown organization but differ in curvature, thickness, glass coordinates, and net power. The rear positive group has approximately twice the power of the front positive group. This is the numerical expression of the patent's relaxation of absolute symmetry.

## Element-by-Element Analysis

### D1 - `a1 + b1`: front cemented doublet

**`a1` - Negative Meniscus.** `nd = 1.54990` as a retained historical sodium-D coordinate; `νd` is unavailable. Glass: `Unmatched (DE143889C a1; historical nD/nG′ pair only)`. Standalone `f = -63.688 mm`.

The patent classifies `a1` as flint. It is the negative component of the front cemented pair. Its two positive radii form a meniscus whose stronger rear curvature gives negative standalone power. Within the cemented pair, that negative contribution moderates the stronger positive action of `b1` and supplies the flint side of the patent's chromatic correction strategy.

**`b1` - Positive Meniscus.** `nd = 1.61294` as a retained historical sodium-D coordinate; `νd` is unavailable. Glass: `Unmatched (DE143889C b1; historical nD/nG′ pair only)`. Standalone `f = +34.874 mm`.

The patent classifies `b1` as crown. It provides the dominant positive power in D1. The cemented interface avoids an air gap between the opposing flint and crown contributions, and the pair acts as a weak positive front collector rather than as two independent thin lenses. Its computed net EFL is +81.073 mm, which must not be confused with either element's standalone focal length.

### `c`: central biconcave negative singlet

**`c` - Biconcave Negative.** `nd = 1.53644` as a retained historical sodium-D coordinate; `νd` is unavailable. Glass: `Unmatched (DE143889C c; historical nD/nG′ pair only)`. Standalone `f = -31.901 mm`.

The central element is a thin, strongly negative singlet. It separates the unequal positive cemented groups and reverses the convergence produced by D1 before the ray bundle reaches the rear doublet. This central negative action is essential to the three-group power distribution; it is not merely a field-flattening plate or a weak separator.

The patent identifies the central lens as flint and requires its refractive and dispersive relationships to remain consistent with the inherited design principle, while allowing its absolute glass coordinates and dimensions to depart from strict symmetry [DE 143889 C, pp. 1-2]. No modern catalog identity can be assigned from the available source coordinates.

### D2 - `b2 + a2`: rear cemented doublet

**`b2` - Biconvex Positive.** `nd = 1.61294` as a retained historical sodium-D coordinate; `νd` is unavailable. Glass: `Unmatched (DE143889C b2; historical nD/nG′ pair only)`. Standalone `f = +24.954 mm`.

The patent classifies `b2` as crown. It is the strongest positive element in the prescription and supplies most of the rear group's converging action. Its biconvex form differs markedly from the positive meniscus used for `b1`, demonstrating that the two nominally corresponding crown components are not dimensionally symmetric.

**`a2` - Negative Meniscus.** `nd = 1.57073` as a retained historical sodium-D coordinate; `νd` is unavailable. Glass: `Unmatched (DE143889C a2; historical nD/nG′ pair only)`. Standalone `f = -66.355 mm`.

The patent classifies `a2` as flint. It completes the rear cemented pair and offsets part of `b2`'s strong positive power while providing the flint contribution to the rear chromatic pairing. The combined D2 group remains strongly positive, with a computed net EFL of +39.720 mm. Its in-situ role is to restore convergence after the central negative singlet and establish the final system power.

## Glass Identification and Selection

The patent supplies sodium-D indices and a second coordinate printed as `nG′`, together with broad crown/flint classifications. The prime mark is part of the historical G′-line notation; it is not the numeral 1. The source does not supply `νd`, C- or F-line indices, the schema's modern mercury-g index, anomalous partial-dispersion data, Sellmeier coefficients, vendor names, or six-digit glass codes. The data file therefore retains the five source `nD` values directly in `nd` and preserves the printed `nG′` values only as comments and source metadata.

| Element | Patent class | Retained source `nD` | Printed `nG′` | Data-file glass annotation |
|---|---|---:|---:|---|
| `a1` | Flint | 1.54990 | 1.56547 | Unmatched historical pair |
| `b1` | Crown | 1.61294 | 1.62686 | Unmatched historical pair |
| `c` | Flint | 1.53644 | 1.54988 | Unmatched historical pair |
| `b2` | Crown | 1.61294 | 1.62640 | Unmatched historical pair |
| `a2` | Flint | 1.57073 | 1.58866 | Unmatched historical pair |

The equal `nD` values of `b1` and `b2` do not justify merging their identities: the patent prints different `nG′` coordinates for them. Those values are retained without correction. Because G′ is not the schema's modern mercury-g reference, the values are not copied into `ng`; no `nC`, `nF`, `dPgF`, or `νd` value is authored. The prescription therefore supports neither a modern named-glass claim nor an apochromatic or anomalous-dispersion claim.

The chromatic interpretation is limited to what the patent establishes: the outer systems pair flint and crown components, and the central lens is a flint. The exact partial-dispersion behavior and secondary-spectrum correction cannot be reconstructed from the published coordinates alone.

## Focus Mechanism

The data file has the status `NO_INTERNAL_RECONSTRUCTION`. DE 143889 C publishes only an infinity prescription. It gives no minimum focusing distance, object-distance table, magnification, moving-group description, focus travel, or variable-spacing law. The final model therefore contains no variable optical gaps and no close-focus state.

The schema-required `closeFocusM: 1.0` value is only a UI placeholder. It is not a patent value, a production specification, or a modeled focusing condition. No internal, rear, floating, or unit-focus mechanism is inferred from it.

## Aperture, Field, and Modeling Inferences

The patent states that the opening may be 23 mm for the 100 mm example and that the usable image diameter is 92 mm, corresponding to an object-side field angle of about 50°. It also fixes the stop only to the air space between the middle and rear lenses [DE 143889 C, p. 2].

The exact stop coordinate is not published. The data model places it 1.70 mm after surface 5 and 4.07 mm before surface 6, preserving the patent's total 5.77 mm air space. This is a figure-guided, geometry-constrained inference. The physical stop semi-diameter, 9.4018 mm, is solved so that the paraxial entrance-pupil diameter is 23.000 mm. Under that explicit interpretation, the modeled maximum aperture is f/4.34166. The Heliar f/4.5 designation remains separate and is not used to alter the prescription.

The patent publishes no clear apertures. Every surface semi-diameter in the data file is inferred from the modeled pupil, the 92 mm image diameter, exact meridional ray containment, and a 600 dpi audit of the drawing sheet. The front group uses a 12.7 mm envelope, the central group 12.5 mm, and the rear group 11.5 mm, following the drawing's near-equal group heights while respecting the rear positive element's edge-thickness ceiling. Positive edge thickness, actual spherical rim slope, shared-gap clearance, and the viewer's default exact-ray bundles were rechecked. None is presented as a patent or production barrel dimension.

No sensor cover glass, filter, dummy plane, flare cutter, or mechanical surface is present in the patent prescription or added to the model. No uniform scaling was applied, and there are no aspherical coefficients to transform.

## Verification Summary

The following quantities are computed from the final TypeScript arrays rather than copied from the patent table:

| Quantity | Computed result | Source comparison or interpretation |
|---|---:|---|
| Effective focal length | 99.8582 mm | Consistent with the patent's nominal 100 mm |
| Back focal distance from surface 8 | 88.2482 mm | Computed; the patent omits image distance |
| Full field for a 92 mm image diameter | 49.4666° | Consistent with the patent's “about 50°” |
| Entrance-pupil diameter | 23.0000 mm | Follows the stated aperture interpretation |
| Modeled f-number | 4.34166 | Kept separate from the f/4.5 designation |
| Petzval sum | +0.00240844 mm⁻¹ | Surface-by-surface first-order result |
| Signed Petzval radius | -415.206 mm | Project sign convention; not a measured field curve |

The ABCD matrix and an independent reduced-angle sequential trace agree to numerical precision, with determinant unity. The first-to-last refracting-vertex track is 29.520 mm, and the first surface to the infinity image plane is 117.768 mm. The latter exceeds the EFL, so the prescription is not telephoto under the project's `total track / EFL < 1` definition; its BFD is also shorter than the EFL, so it is not retrofocus.

The inferred geometry passes the applicable local checks for positive edge thickness, actual rim slope, shared-band gap intrusion, and surface-domain validity. These results validate the authored visualization geometry; they do not convert the inferred apertures into source dimensions.

## Design Heritage and Context

DE 143889 C presents the design as an extension of the more strictly symmetric system in DE 124934. Its contribution is not the abandonment of symmetry as an organizing idea, but the separation of two kinds of symmetry: the broad arrangement and relative refractive/dispersion relationships are retained, while corresponding dimensions and absolute optical constants may differ. The numerical example uses that freedom to make the rear positive cemented group much stronger than the front group.

This architecture explains the designation “second asymmetric form” used by the job card. The patent's own claim is narrower and more formal: the middle system remains symmetric in itself and relative to the outer systems, while the outer systems remain symmetric in arrangement and relative refractive/dispersion relationships but asymmetric in dimensions and absolute optical constants [DE 143889 C, claim, p. 2].

## Sources

1. Kaiserliches Patentamt, **DE 143889 C**, Voigtländer & Sohn AG, *Chromatisch, sphärisch und astigmatisch korrigiertes Objektiv*, issued 7 September 1903. Prescription and glass coordinates appear on page 2; the optical section is on the drawing sheet.
2. `VoigtlanderHeliarF45SecondAsymmetric.txt`, Lens Patent Job Card fixing the project correlation and embodiment.
