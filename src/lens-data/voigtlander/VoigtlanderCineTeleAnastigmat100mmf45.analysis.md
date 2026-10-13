## Patent Reference and Design Identification

**Patent:** DE 444150 C<br>
**Inventor:** Hans Deser<br>
**Applicant:** Voigtländer & Sohn AG, Braunschweig<br>
**Published:** 24 May 1927<br>
**Patent effective from:** 18 February 1925<br>
**Title:** Photographisches Fernobjektiv<br>
**Embodiment analyzed:** Example 2 (Beispiel 2), Figure 2 (Abb. 2)

The model transcribes Example 2 of the supplied German patent at its original scale.
The selected name, **VOIGTLÄNDER CINE-TELE-ANASTIGMAT 100mm f/4.5**, is a research correlation.
The patent identifies Voigtländer as applicant and specifies a 100 mm, f/4.5 example,
but it does not name that commercial lens or establish a factory prescription match.
No manufacturer source establishing the exact product's mount, image format, introduction date,
minimum focusing distance or mechanical focusing arrangement has been verified.
Those production fields are therefore left unspecified rather than inferred from the selected name.
The patent's effective date is retained under its own label, not asserted as a separately verified filing date.

The patent and Figure 2 establish four glass elements in three air-separated groups.
The first two elements are cemented; the remaining two are separate singlets.
All seven refracting surfaces are spherical or planar. No aspheric terms, cover plates,
finite-conjugate prescriptions or variable-spacing schedule are published. [1]

## Optical Architecture

The architecture consists of a positive front cemented doublet, a negative middle singlet,
and a positive rear singlet. The middle and rear singlets together form a negative functional pair.
At the retained source indices, the front doublet has a computed EFL of **+49.1420 mm**;
the rear pair, including its actual intervening air gap, has EFL **−75.3286 mm**.
These group focal lengths differ from both the system EFL and the standalone element focal lengths.

At the modeled infinite conjugate, the system's computed EFL is **100.069832 mm**.
The rear-vertex back focal distance is **63.715279 mm**; the first-to-last-vertex track is **27.750000 mm**.
The first vertex to the calculated paraxial image plane is **91.465279 mm**, giving **TL/EFL = 0.9140145**.
This satisfies the optical telephoto criterion, with all reference planes stated explicitly.
The rear principal plane lies **8.604553 mm ahead of the first vertex**,
in agreement with the patent's description of a rear principal point preceding the first surface.
The front principal plane lies **14.510261 mm ahead of the first vertex**.

The computed EFL exceeds the printed nominal 100 mm by **0.069832 mm**.
The prescription is not rescaled or adjusted to remove that small difference.
Its numerical radii, thicknesses and refractive indices remain those of Example 2. [1]

## Element-by-Element Analysis

### LI / L1 — Biconvex Positive

n_D = 1.6143, ν(source) = 56.4. Glass: **Unmatched vintage crown-type glass**; supplier unconfirmed.
Standalone air-surrounded focal length: **+26.4359 mm**.

LI supplies positive standalone power, but its rear face is cemented to LII.
The actual interface refracts from the lower-index LI glass into the higher-index LII glass;
it is not a glass-to-air boundary. The standalone focal length therefore does not describe
LI's contribution after cementing. The final model assigns that shared surface to LII's medium.

### LII / L2 — Plano-Concave Negative

n_D = 1.6462, ν(source) = 33.9. Glass: **Unmatched vintage flint-type glass**; supplier unconfirmed.
Standalone air-surrounded focal length: **−53.0795 mm**.

LII is the negative member of the front doublet, with a planar rear surface.
The lower Abbe value distinguishes it from LI's less dispersive crown-type material.
That pairing is consistent with chromatic compensation in a positive cemented group,
but the available two-coordinate glass data do not establish the actual secondary spectrum.
The computed net doublet power is positive despite LII's negative standalone power.

### LIII / L3 — Biconcave Negative

n_D = 1.5835, ν(source) = 41.9. Glass: **Unmatched vintage flint-type glass**; supplier unconfirmed.
Standalone air-surrounded focal length: **−28.7831 mm**.

The patent's central design distinction concerns this diverging element.
Its D-line index is below 1.59 and below that of the following positive element.
Its lower dispersion relative to the rear element corresponds to the larger published Abbe number.
The patent connects the chosen index and power distribution with less strongly curved surfaces,
reduced zonal deviation and lower distortion compared with the prior design it discusses.
Those are the patent's stated design objectives; no quantitative distortion or zonal-aberration
performance is independently established by the first-order verification. [1, pp. 1–2]

### LIV / L4 — Biconvex Positive

n_D = 1.6462, ν(source) = 33.9. Glass: **Unmatched vintage flint-type glass**; supplier unconfirmed.
Standalone air-surrounded focal length: **+55.3452 mm**.

LIV has a weakly curved positive front face and a more strongly curved negative-radius rear face.
Its positive standalone power does not reverse the negative net power of the complete rear pair.
The patent does not identify an internal focus role for this element; none is assigned in the model.

## Glass Identification and Spectral Limits

The table explicitly prints **n_D**, and the patent text refers to the D line.
The source's sodium-D indices are retained numerically rather than silently converted to
modern helium d-line coordinates. The source prints ν without defining its spectral pair.
Each element therefore carries an index-reference explanation and an unresolved glass label;
the application's approximate d-line treatment is not a claim that the vintage melts were measured at that line.

Comparison against six curated vendor subsets covered OHARA, HOYA, Schott, HIKARI, CDGM and Sumita.
These project catalog subsets are not a complete historical-glass census.
Direct primary checks used OHARA's S-BSM9 table and Schott's SF2 and LF5 tables. [2–4]
The other vendors' retained candidate rows were not all re-fetched from their original publishers.
OHARA S- and L-prefix families were kept distinct.

The candidate comparisons support broad crown/flint descriptions, not supplier or melt identification.
In particular, modern SF2 and LF5 are imperfect coordinate neighbors of the rear glasses;
the source D-line convention also prevents treating a modern d-line residual as an exact comparison.
No candidate's spectral coefficients or line indices have been substituted into the source elements.
No apochromatic, anomalous-partial-dispersion or verified secondary-spectrum claim is made.

The surface-by-surface Petzval sum, including the cemented interface, is
**+0.00200076309 mm⁻¹**, evaluated as Σφ/(n·n′) at the retained source indices.
This signed first-order term is not a prediction of a flat image field or a substitute for
an off-axis astigmatic-focus calculation.

## Focus Mechanism

The optical focus status is **NO_INTERNAL_RECONSTRUCTION**.
Only the fixed patent prescription at a calculated infinity image plane is represented.
No internal movement, unit-focus extension, finite-conjugate certification or production MFD is inferred.
The variable-spacing tables are empty.

The required closeFocusM field uses the established **1e15** finite infinity-only schema sentinel.
It is neither a measured distance nor a manufacturing specification.
With no variable-gap travel, the current application disables the focus control and labels its endpoint
“Not modeled.” The verified optical state remains infinity; forced nonzero programmatic focus states
are outside the modeled claim.

## Aperture and Geometric Reconstruction

Figure 2 and the Example 2 spacing table place the iris after the front doublet:
**b1 = 9.0 mm** precedes it and **b2 = 4.25 mm** follows it.
The axial stop placement is source-backed; its physical diameter is not. [1]

For compatibility with the current application's stop construction, the physical iris is calibrated
by exact Snell tracing of the nominal entrance-pupil radius **11.118870 mm**,
derived from the computed EFL and nominal f/4.5.
The resulting modeled physical stop semi-diameter is **8.223599 mm**.
A paraxial-only calibration would instead give **8.072798 mm**; the two methods must not be conflated.
The f/4.5 agreement is a calibration result, not independent evidence for a production diaphragm dimension.
With that exact-calibrated physical iris, the paraxial entrance-pupil definition instead yields **f/4.417481**.
The paraxial entrance-pupil position is **18.386804 mm after the first vertex**;
the exit-pupil position is **11.596483 mm before the last vertex**, with semi-diameter **8.524288 mm**.
These are calculated images of the modeled iris, not factory dimensions.

The remaining semi-diameters are inferred: **12.3 mm** throughout the front cemented group
and **11.1 mm** on the rear singlets, inferred from the equal-height optical rims in Abb. 2. They preserve the illustrated topology without claiming
the schematic is a scale drawing. The smallest modeled element thickness is **0.476899 mm**;
the largest actual spherical rim angle is **25.133179°**.
Spherical-domain, element-thickness, aperture-ratio and shared-air-gap checks pass.

Exact three-dimensional tracing tested **325 rays** at five illustrative field angles:
**−3°, −1.5°, 0°, +1.5°, +3°**, with a central ray and four circular pupil rings per field.
The sampled rays clear every modeled surface without a missed intersection or total internal reflection.
These checks establish finite sampled clearance, not a published image circle, exhaustive field coverage,
production render-trim validation or verified image quality.
A separate scalar-angle Snell implementation, using iterative sag intersections, additionally passes
**2,501 meridional rays** sampled every 0.1° over the same ±3° illustrative range and at 41 pupil heights.
This independent sampled check does not extend the claim to continuous coverage or establish image quality.
The f-stop quick-select values are visualization settings rather than documented mechanical detents.

## Patent Conditions and Verification Scope

The verified native-index prescription satisfies the relevant published conditions:

- LIII's index is below 1.59.
- The magnitude of LIII's standalone focal length exceeds one fifth of system EFL.
- LIV's positive standalone focal length exceeds three tenths of system EFL.
- The rear LIII–LIV functional pair has negative power.
- The rear principal plane precedes the first lens vertex.

Sequential height/reduced-angle tracing and independently implemented ABCD multiplication agree.
The same calculations are rerun from the final data file, alongside source mapping and exact sampled geometry.
No real LensVisualizer build, TypeScript project validation, production-render diagnostic or runtime glass-resolution
check is asserted by these portable computations. Those remain separate integration checks.

## Sources

1. **DE 444150 C**, *Photographisches Fernobjektiv*, supplied original two-page patent PDF.
   PDF p. 1: applicant, inventor footnote, dates and prior-art/design discussion.
   PDF p. 2: sign convention, Example 2 prescription, claim and Figure 2.
2. **OHARA**, [S-BSM glass types](https://oharacorp.com/glass-type/s-bsm/), S-BSM9 row.
   Direct current catalog comparison; no historical melt identity implied.
3. **SCHOTT**, [SF2 datasheet in Optical Glass Collection, May 2019](https://www.schott.com/en-gb/products/optical-glass/-/media/Project/OnEx/Products/O/optical-glass/Downloads/schott-optical-glass-collection-datasheets-english-may2019.pdf?rev=5358bb64e13a44f2b37f5065490509af),
   SF2 sheet dated 1 February 2014, including separate D- and d-line indices.
4. **SCHOTT**, [LF5 optical glass data](https://us.shop.schott.com/advanced-optics/en/Optical-Glass/LF5/c/glass-LF5),
   refractive-index and dispersion tables. Catalog sources checked 2 October 2026.
