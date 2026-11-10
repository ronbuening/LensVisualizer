## Patent Reference and Design Identification

**Patent:** JP 1970-039874 B (JPS45-39874)
**Application Number:** 42-46505
**Filed:** 1967-07-19
**Published:** 1970-12-15
**Inventor:** Toshinobu Ogura
**Applicant:** Minolta Camera Co., Ltd.
**Example details:** Entire numerical table on original PDF page 4, printed column 7; lengths multiplied by exactly 35.

This is an qualified representative optical model with explicitly inferred mechanical apertures. It does not establish the production prescription of every MC W Rokkor-HH or Rokkor-X revision.

The probable MC W Rokkor-X family association rests on converging evidence:

1. The manufacturer XG-7 accessories brochure, PDF page 18 / printed page 30, specifies 35 mm, f/1.8, 64° and eight elements in six groups.
2. The section has a front cemented doublet, four single elements and a rear cemented doublet, agreeing with the selected example.
3. The normalized patent station is f = 1, f/1.8, full field 64°, with back focus 1.05. The maker focal length supplies the disclosed 35× scale, not a patent-printed 35 mm dimension.

The patent's full table controls the model. US 3,606,524 belongs to a different invention and supplies no missing values here. Earlier source-only notes held the material reference unresolved; the present model explicitly assumes the d-reference as a modeling convention, without upgrading that assumption to source evidence.

## Optical Architecture

The eight-element, six-group design is a retrofocus wide-angle system. The normalized back focus exceeds its focal length. The front doublet has opposing element powers, followed by a thick positive lens, positive meniscus, central negative lens, positive meniscus and rear doublet.

The four-element rear section surrounds an inferred stop region. The actual stop coordinate and diameter are not published. This candidate places the stop halfway through the unchanged air interval dB4 between source surfaces 7 and 8. It is a hypothesis to test, not a measured feature of Figure 3.

Every refracting face is spherical. The fourteen physical surface radii, thirteen internal intervals and eight N/V pairs are transcribed without adjustment. Two cemented interfaces reduce the number of groups from eight to six.

## Element-by-Element Analysis

### L1: Biconvex Positive

Assumed nd = 1.72000, νd = 50.3. Glass: Unmatched (published N/V; d-reference assumed). Isolated thick-element f = +66.157 mm.

The first component of the front doublet has positive isolated power. Its weak front face and strongly curved cemented rear interface distribute power across the paired glasses. The isolated focal length is calculated in air for interpretation, not the element's in-system contribution.

### L2: Biconcave Negative

Assumed nd = 1.61760, νd = 52.7. Glass: Unmatched (published N/V; d-reference assumed). Isolated thick-element f = -25.309 mm.

The negative component closes the front doublet. Its strongly curved rear face contributes to the divergent front assembly appropriate to retrofocus clearance. The isolated focal length is calculated in air for interpretation, not the element's in-system contribution.

### L3: Biconvex Positive

Assumed nd = 1.67750, νd = 55.4. Glass: Unmatched (published N/V; d-reference assumed). Isolated thick-element f = +38.454 mm.

The thick positive single follows the large front airspace. It supplies converging power; the thickness is a literal source dimension, not a layout correction. The isolated focal length is calculated in air for interpretation, not the element's in-system contribution.

### L4: Positive Meniscus

Assumed nd = 1.67750, νd = 55.4. Glass: Unmatched (published N/V; d-reference assumed). Isolated thick-element f = +88.084 mm.

This positive meniscus follows the narrow dB2 gap. Its edge thickness limits admissible caps; a visual or nominal aperture guess alone is insufficient. The isolated focal length is calculated in air for interpretation, not the element's in-system contribution.

### L5: Biconcave Negative

Assumed nd = 1.64770, νd = 33.9. Glass: Unmatched (published N/V; d-reference assumed). Isolated thick-element f = -28.445 mm.

The central biconcave component provides negative power. Mechanical shoulders visible in the maker section do not establish exact optical caps and are not invented in the model. The isolated focal length is calculated in air for interpretation, not the element's in-system contribution.

### L6: Positive Meniscus

Assumed nd = 1.70800, νd = 53.3. Glass: Unmatched (published N/V; d-reference assumed). Isolated thick-element f = +60.283 mm.

The rear positive meniscus supplies converging power. Its concave surfaces and small following airgap require independent edge and clearance checks. The isolated focal length is calculated in air for interpretation, not the element's in-system contribution.

### L7: Negative Meniscus

Assumed nd = 1.75570, νd = 27.2. Glass: Unmatched (published N/V; d-reference assumed). Isolated thick-element f = -59.911 mm.

The first component of the rear cemented doublet has negative isolated power. Its high index and lower Abbe number contrast with the following positive component. The isolated focal length is calculated in air for interpretation, not the element's in-system contribution.

### L8: Biconvex Positive

Assumed nd = 1.70800, νd = 53.3. Glass: Unmatched (published N/V; d-reference assumed). Isolated thick-element f = +33.782 mm.

The positive final component closes the rear doublet. The published final back focus is retained as a separate source-derived image interval. The isolated focal length is calculated in air for interpretation, not the element's in-system contribution.

## Glass Identification and Selection

The source table uses plain N and V. Neither the inspected original nor a verified counterpart supplies an explicit wavelength definition. The patent's d/g aberration curves establish plotted lines, not N = nd or V = νd. Each element therefore explicitly uses the assumed d-reference; no catalog glass name or dispersion coefficients have been fitted.

Published pairs are retained exactly. Higher-dispersion members in the negative central and rear components offer an interpretation of the chromatic balancing architecture, but neither apochromatism nor a specific partial-dispersion performance is established. Later C/d/F calculations would be conditional on the assumed reference and the engine's supported index/Abbe dispersion approximation. The patent g-line curve cannot be reproduced faithfully from these two scalar glass values alone.

## Focus Mechanism

The patent discusses infinity and near objects but supplies no complete finite-distance motion law for this station. The maker's 0.3 m close-focus rating is a product specification, not a patent conjugate. The model has no variable gaps or fitted focusing movement. Its required runtime 1000 m value is an unvalidated schema placeholder, not a solved finite conjugate. The no-moving-gap focus adapter returns null and the UI may retain fallback slider labels; such labels do not validate finite performance. The independently verified 0.3 m maker rating appears only as catalog marketing metadata.

The source image plane is (1.9838 + 1.05) × 35 = 106.183 mm from the first vertex. The literal paraxial calculation gives EFL 35.000249716 mm and back focus 36.752442037 mm, placing calculated infinity focus about 0.002442 mm beyond the retained plane. No gap is changed to eliminate that rounding difference.

## Aspherical Surfaces

None are specified. No aspherical, conic, rear-plate or mechanical correction has been introduced.

## Aperture Hypotheses and Validation Limits

All clear semi-diameters are inferred. The patent's general front-diameter guidance of approximately 1.0–1.1f supports the order of magnitude of a 36 mm front diameter at the nominal scale, but it is not a per-face aperture table. The 55 mm filter thread is not used as an optical clear diameter.

The initial caps and their failed checks are preserved in static_report.json. Their surface-9 airgap and rear-element overlap failures motivated smaller caps, leaving every R, d and N/V unchanged. The revised static candidate passes sampled adjacent-face separation, an independent 80% static criterion for airgap intrusion (stricter than the unchanged runtime default of 90%), and preliminary spherical rim checks. No gap-sag override is used.

The H0 native candidate passed geometry and zero trim but clipped the admitted axial beam at S8, giving census f/1.86737. H1 increases only the inferred S8 cap from 11 to 11.50796 mm; S9 remains 11 mm. The original Figure 3 shows shouldered/chamfered central-element edges, supporting a plausible independent clear rim, but not a numerical asymmetry. The increase rounds the traced admitted height upward by 0.000001296 mm; this is numerical clearance, not a manufacturing tolerance.

H1 passes native build, zero trim for all eight elements, and iris clearances of 1.56768 and 2.08379 mm. The official aperture census is iris-limited at f/1.799999998. The repository convention is paraxial entrance pupil diameter F/N and its iris-admitted/full-beam census; a nonlinear EFL/entrance-ray-diameter ratio is a separate diagnostic. Bounded 16-cell throughput at source angles 0°, 16°, 24° and 32° is 100%, 94.23%, 72.12% and 32.69%, with no failed or unaimed samples. Edge vignetting remains part of the inferred model, not a source-certified measurement.

## Reference MTF and Numerical Limits

The corrected native reference run targets source angles 0°, 16° and 32° by converting native chief-ray heights to format-radius fractions. Returned angles are 0°, 15.99990194° and 31.99999889°. It uses the assumed d-line reference at 587.5618 nm, source image plane 106.183 mm, and sampled frequencies 0, 10, 20, 30 and 40 lp/mm, refining to grid 128.

At the authored source plane, geometric and diffraction estimates converge through sampled 40 lp/mm on axis and at half-field, but only through 30 lp/mm at the full source field. The 40 lp/mm edge samples remain unconverged and must not be presented as qualified values. There are no failed or unaimed rays or unresolved flux in the returned field records.

The separately labeled best-axial diagnostic shifts the analysis plane by -0.12512807 mm without changing the authored prescription. Its geometric edge converges through 30 lp/mm and its diffraction edge through 10 lp/mm; center and half-field converge through 40. A best-focus calculation is not permission to replace the printed back focus.

Earlier image-height-fraction diagnostics sampled actual angles 0°, 17.30827638° and 32.11122666°, rather than exact source angles. Those results remain separately retained: source-plane geometric edge through 30 and diffraction edge through 40; best-axial geometric edge through 20 and diffraction edge through 10. They do not supersede the corrected source-angle limits.

Native support permits C/d/F and photopic estimates using normal-line estimated dispersion for all eight glasses, but neither has been computed here. Their availability does not establish factory-accurate dispersion or resolve the source's unspecified N/V reference. All results describe an inferred representative model, not measured production MTF. Metadata, type, formatting and lint checks passed, as did the unchanged one-worker focused regression of 23 files and 1,609 tests. Local build, SEO audit and guarded installation smoke checks passed. This is focused-suite coverage, not a whole-repository test-suite pass.

## References

- [Original J-PlatPat publication](https://www.j-platpat.inpit.go.jp/c1801/PU/JP-S45-039874/12/ja), whole Example 3, PDF page 4; original source retained with this checkpoint.
- [Minolta XG-7 accessories brochure](https://cameramanuals.org/minolta_pdf/minolta_xg-7-accessories.pdf), PDF page 18 / printed page 30.
