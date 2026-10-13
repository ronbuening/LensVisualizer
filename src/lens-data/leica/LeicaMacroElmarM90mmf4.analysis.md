## Patent Reference and Design Identification

**Patent:** DE 2 246 966 A1\
**Application Number:** P 22 46 966.5\
**Filed:** 25 September 1972\
**Published:** 11 April 1974\
**Inventors:** Georg Knetsch; Walter Watz\
**Applicant:** Ernst Leitz GmbH\
**Title:** *Viergliedriges Teleobjektiv*\
**Embodiment analyzed:** Example 1 / claim 3

The implemented prescription is the first numerical example in claim 3 of DE 2 246 966 A1. The patent gives a normalized
focal length of `f = 1.0`, relative aperture `1:4`, image angle `±13.5°`, and rear intercept `s′ = 0.5102 f`. Its table
contains eight spherical refracting surfaces forming four air-separated singlets. Claim 3 depends on claim 1, not claim 2;
therefore the claim-2-only thickness and narrower stop-space conditions do not govern this example. The prescription is
transcribed from PDF page 6 (printed page -5-), with the stop ordering confirmed by Fig. 1 on PDF page 7.

The association with the Leica Macro-Elmar-M 90 mm f/4 is a research correlation rather than a manufacturer-confirmed
patent attribution. Leica's current technical specification gives a 90 mm f/4 Leica M lens for the 24 × 36 mm format with
a 27° diagonal field and a 4-element / 4-group optical construction. Those values converge directly with the patent's
scaled focal length, f/4 aperture, full `27°` field, and four-singlet architecture. Leica's 2016 M-System catalog,
however, lists Macro-Elmar-M 90 mm f/4 generations dated 2003 and 2014, decades after the 1972 filing, and no Leica primary
source located for this dossier explicitly assigns DE 2 246 966 A1 to either production generation. Leica's current official
product page does, however, publish an optical cross-section with the same three-elements-before-stop / separated rear-meniscus
architecture, adding direct structural support without establishing patent attribution. The data file therefore retains the
correlation as inferred.

The patent prescription is normalized to `f = 1`. The implemented model applies a uniform scale factor of `90.0` to all
lengths without renormalizing the rounded source table to exactly 90 mm. Recalculation from the final data gives an
effective focal length of **89.957712 mm**. The 90 mm figure remains the marketed focal length; the smaller value is the
computed design focal length of the scaled patent table.

## Optical Architecture

The lens is a four-singlet telephoto form with a **positive-positive-negative-positive** standalone power sequence. Three
singlets lie before the stop, followed by a large stop-containing air space and a separated positive rear meniscus. All
eight powered surfaces are spherical. The patent itself describes the general arrangement as two positive members before
a negative member, followed at substantial distance behind the stop by a positive meniscus concave toward the image plane.

The verified standalone powers show that the first two positive menisci form a strong front positive pair with a combined
sub-prescription EFL of **25.715 mm**. Adding the third, negative singlet reduces the pre-stop assembly power substantially,
to an EFL of **132.116 mm**. The rear positive singlet then contributes additional positive power after the stop. This
power cancellation and redistribution are properties of the implemented prescription; they should not be read as a claim
that any one member independently corrects a particular aberration.

The paraxial first-surface-to-image track is **82.8399 mm** for the computed **89.9577 mm** EFL, giving
`TL/EFL = 0.920876`. Because this ratio is below unity, the modeled state satisfies the project's quantitative criterion
for the term *telephoto*. The rear paraxial focal distance is **45.8499 mm** from surface 8. The authored image-plane gap
remains the separately scaled patent value, **45.918 mm**, so the small source-rounding difference is preserved rather than
hidden by retuning the prescription.

The patent does not dimension the aperture-stop station within the `d6` air space. Fig. 1 places the stop between surfaces
6 and 7; the implemented model therefore splits the scaled `22.887 mm` gap at an inferred station, **7.459 mm** after
surface 6 and **15.428 mm** before surface 7. The stop semi-diameter is likewise modeled rather than published. It was
calibrated through the computed entrance pupil so the paraxial model returns **f/4.00000000007**. That agreement is a
calibration result and is not independent evidence for the physical diaphragm diameter of either the patent prototype or
the production lens.

## Element-by-Element Analysis

Because the patent table is explicitly headed `n_e` and `ν_e`, the element values below are reported as **nₑ** and **νₑ**.
The data schema stores them in its historical `nd` / `vd` fields with `indexReference: "e"`; they are not d-line values.
The listed focal lengths are verified standalone thick-lens values from the final scaled prescription, not in-situ group
focal lengths.

### L1 — Positive Meniscus

**nₑ = 1.64304, νₑ = 59.85. Glass model: N-LAK21 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = +46.794 mm.**

L1 is the first of the two positive pre-stop members specified by the patent. Its positive standalone power is the second
largest positive contribution among the four singlets. Together with L2 it forms the strong front positive pair; the pair's
verified sub-prescription EFL is 25.715 mm. No cemented interface is present, and the 0.072 mm modeled air gap to L2 is the
uniformly scaled form of the patent's very small `0.0008 f` spacing.

The adopted N-LAK21 name is a catalog-coordinate model, not a source identification. SCHOTT N-LAK21 reproduces the
patent's native e-line index exactly and differs by only 0.01 in νₑ. The line-index and partial-dispersion fields carried in
the data file are catalog properties of that adopted model and must not be attributed to the patent or to a known Leitz
melt.

### L2 — Positive Meniscus

**nₑ = 1.64304, νₑ = 59.85. Glass model: N-LAK21 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = +55.184 mm.**

L2 repeats the same published e-line glass coordinates as L1 but has different curvatures and thickness, so its standalone
power is lower. The patent's claim-1 condition requires the positive-lens indices to exceed 1.64; the retained value
1.64304 satisfies that condition. L1 and L2 remain separate air-spaced singlets rather than a cemented pair.

The element's optical role is best stated structurally: it completes the strong front positive pair before the negative
third element. The verifier does not assign a unique aberration term to L2, and the analysis therefore does not infer one
from its glass class or power sign alone.

### L3 — Negative Meniscus

**nₑ = 1.75458, νₑ = 34.72. Glass model: LAFN7 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = −22.541 mm.**

L3 is the sole negative singlet and the strongest standalone element by absolute optical power. Its inclusion changes the
front two-element sub-prescription from +0.038888 mm⁻¹ to a three-element pre-stop power of +0.007569 mm⁻¹. This verified
change quantifies the strong cancellation of the front positive pair without assigning an unsupported aberration-control
function to the element.

The patent requires the negative-lens index to exceed 1.75; the retained `nₑ = 1.75458` satisfies that condition. SCHOTT
LAFN7 is an exact native-e coordinate match for both index and Abbe number in the recorded catalog evidence. As with the
other catalog models, this does not establish historical supplier identity.

### L4 — Positive Meniscus

**nₑ = 1.79180, νₑ = 25.87. Glass model: SF56A (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = +154.324 mm.**

L4 is the separated positive member behind the stop. Its standalone positive power is modest compared with the first three
singlets, but its location after the long stop-containing air space makes it a distinct rear part of the architecture. The
patent specifically requires the positive lens behind the stop to have an Abbe number below 33; the retained
`νₑ = 25.87` satisfies that condition.

The catalog evidence identifies SCHOTT SF56A as an exact native-e coordinate match. The runtime resolves dispersion from the shared catalog; those coefficients are not patent-published material data and do not justify an
APO or anomalous-dispersion performance claim for the historical design.

## Glass Identification and Selection

DE 2 246 966 A1 publishes refractive indices and Abbe numbers but no manufacturer glass names. The final model therefore
preserves the patent's native e-line coordinates and uses SCHOTT names only as coordinate-compatible catalog models. This
choice gives the runtime model explicit spectral proxies while keeping supplier identity uncertain.

| Element | Patent index / Abbe | Reference | Runtime spectral model | Index residual / Abbe residual |
|---|---|---|---|---|
| L1 | 1.64304 / 59.85 | e-line | N-LAK21; supplier-neutral proxy | -0.000003 / 0.008 |
| L2 | 1.64304 / 59.85 | e-line | N-LAK21; supplier-neutral proxy | -0.000003 / 0.008 |
| L3 | 1.75458 / 34.72 | e-line | LAFN7; supplier-neutral proxy | 0.000003 / -0.003 |
| L4 | 1.79180 / 25.87 | e-line | SF56A; supplier-neutral proxy | -0.000001 / 0.003 |

Catalog-derived `nC`, `nF`, `ng`, and `dPgF` overrides have been removed from the elements.
The shared catalog now supplies all four elements' dispersion, including the newly added, vendor-sourced N-LAK21 curve. The patent itself supplies only `nₑ` and `νₑ`, and
no claim is made that Ernst Leitz GmbH used these exact SCHOTT melts.

## Focus Mechanism

The modeled focus status is **NO_INTERNAL_RECONSTRUCTION**. DE 2 246 966 A1 supplies only one static prescription and does
not publish a finite-conjugate spacing table, a focusing-group movement law, or close-focus optical states. Consequently,
the data file contains no focus-variable gaps and does not invent internal motion.

Leica's tabulated technical specification publishes a production focusing range of **0.8 m to infinity** for the
Macro-Elmar-M 90 mm f/4 without the Macro-Adapter. Current Leica product-page prose instead states 0.77 m; the data retains
0.8 m because it is the value in the tabulated technical specification and the 2016 M-System catalog. Neither figure is used
to solve or imply a specific internal focus mechanism for the patent model. The analysis therefore does not label the design as unit-focus,
inner-focus, rear-focus, or floating-focus without supporting source evidence.

## Patent Conditions and Modeling Limits

Example 1 inherits claim 1. The verified prescription satisfies the applicable conditions: four singlets; all eight radii
positive under the patent-consistent imageward-positive convention; positive-lens indices greater than 1.64; negative-lens
index greater than 1.75; rear positive-lens `νₑ < 33`; and a stop-containing `d6` space within the claim-1 interval
`0.25 f` to `0.37 f`. The extra claim-2 requirements are not applied because claim 3 does not depend on claim 2.

The prescription is all-spherical, so there is no asphere equation, conic conversion, or coefficient scaling to report.
The patent publishes no semi-diameters. The data file's clear apertures are therefore modeled values derived from ray
coverage and then checked with portable edge-thickness, actual spherical rim-slope, spherical-domain, cross-gap, and exact
finite-sample ray tests. Those checks establish the stated model geometry but do not substitute for the LensVisualizer
production renderer or its trim diagnostics.

For off-axis containment, the portable verifier tested the full pupil at 0° and ±8.1° and central-half-pupil samples at
the published ±13.5° edge field. Those are finite samples, not a proof over the complete field-pupil continuum. They also do not establish production-render
trim behavior.

## Sources

1. Deutsches Patentamt, **DE 2 246 966 A1**, *Viergliedriges Teleobjektiv*, filed 25 September 1972, published
   11 April 1974. Example 1 prescription: PDF p. 6 (printed p. -5-); claim-1 conditions: PDF pp. 3 and 5; definition of
   `s′`: PDF p. 4; optical section and stop placement: Fig. 1, PDF p. 7.
2. Leica Camera AG, **Macro-Elmar-M 90 f/4 — Technical Specification and current product overview**:
   https://leica-camera.com/en-US/photography/lenses/m/macro-elmar-m-90mm-f4-black/technical-specification ;
   https://leica-camera.com/en-US/photography/lenses/m/macro-elmar-m-90mm-f4-black
3. Leica Camera AG, **Leica M-System Catalog 2016**, including the 2003 and 2014 Macro-Elmar-M 90 mm f/4 entries:
   https://leica-camera.com/sites/default/files/pm-53754-161213_M-Katalog_2016_us_rz_low_0.pdf
4. SCHOTT, **N-LAK21 optical-glass datasheet**:
   https://media.schott.com/api/public/content/87e20c19a5f54094834a2034a70537ee?v=9b52b1d3
5. SCHOTT, **LAFN7 optical-glass datasheet**:
   https://media.schott.com/api/public/content/c842d31345bc40ae86b67732d6eb4eea?v=02357659
6. SCHOTT, **SF56A optical-glass datasheet**:
   https://media.schott.com/api/public/content/7428154cd0e04bd5a0cff3defb79443c?v=d460f7da
