## Patent Reference and Design Identification

**Patent:** US 3,796,481
**Filed:** April 28, 1972
**Granted:** March 12, 1974
**Priority:** Japan, May 1, 1971; additional January 14, 1972 priority
**Inventor:** Toru Fujii
**Assignee:** Olympus Optical Co., Ltd.
**Title:** Varifocal Lens Systems
**Example details:** Example 4, physical PDF page 12; repeated Claim 4, physical page 15. This file freezes the 153 mm infinity endpoint at native scale.

This is a qualified patent reconstruction associated with the Olympus Zuiko Auto-Zoom 75-150mm f/4. It is not a verified factory prescription.

1. The original identifies Olympus and Fujii and gives f/4, 76.5-153 mm and fifteen elements in eleven air-separated components.
2. The marketed lens has the corresponding 75-150 mm range, f/4 aperture and 15/11 construction in the secondary historical specification linked below.
3. The timing and optical architecture support a probable association; no factory document was recovered linking this exact numerical table to the marketed lens.

The delivered pair contains two fixed endpoint configurations, representing one lens candidate. Both remain hidden.
The paired wide endpoint can be inspected independently or in the comparison view. No interpolated zoom law is authored.

## Optical Architecture

Fifteen spherical elements form eleven air-separated components in four optical units with positive, negative, positive and positive powers.
The first unit is the front collector, the second is the negative variator, the third compensates zoom-induced image movement,
and the fourth is the positive master unit. Four cemented interfaces lie at source surfaces 4, 7, 14 and 21.
The physical component count is eleven; the four motion/power units are not four cemented groups.

The endpoint spacings are D1/D2/D3 = 2.086/25.371/6.707 mm at 76.5 mm and 26.433/1.024/6.707 mm at 153 mm.
Only those tabulated states are modeled. Linear interpolation between them would not establish the unprinted compensator/cam law.

## Element-by-Element Analysis

### L1: Positive meniscus

L1: nd = 1.51633, νd = 64.15. Glass: unmatched patent pair; supplier and melt unknown.

Front collector of the positive first optical unit.

### L2 and L3: Cemented negative/positive pair

L2: nd = 1.74077, νd = 27.79. Glass: unmatched patent pair; supplier and melt unknown.
L3: nd = 1.51821, νd = 65.04. Glass: unmatched patent pair; supplier and melt unknown.

Completes the positive first unit. The shared interface is source surface 4.

### L4 and L5: Cemented variator doublet

L4: nd = 1.61800, νd = 63.38. Glass: unmatched patent pair; supplier and melt unknown.
L5: nd = 1.78470, νd = 26.22. Glass: unmatched patent pair; supplier and melt unknown.

The negative/positive pair begins the negative second optical unit. The 1.96/2.96 mm conflict belongs to L5.

### L6: Biconcave negative singlet

L6: nd = 1.57250, νd = 57.65. Glass: unmatched patent pair; supplier and melt unknown.

Air-separated negative component in the second optical unit.

### L7: Biconcave negative singlet

L7: nd = 1.61800, νd = 63.38. Glass: unmatched patent pair; supplier and melt unknown.

Completes the second optical unit; its deep front surface faces the preceding concave surface.

### L8 and L9: Cemented compensator

L8: nd = 1.74077, νd = 27.79. Glass: unmatched patent pair; supplier and melt unknown.
L9: nd = 1.62230, νd = 53.2. Glass: unmatched patent pair; supplier and melt unknown.

Negative/positive pair in the third optical unit, which compensates image-plane motion during zooming.

### L10: Positive meniscus

L10: nd = 1.50378, νd = 66.81. Glass: unmatched patent pair; supplier and melt unknown.

First member of the fixed positive master unit, following the inferred diaphragm.

### L11: Positive meniscus

L11: nd = 1.50048, νd = 65.99. Glass: unmatched patent pair; supplier and melt unknown.

Second positive master-unit singlet.

### L12 and L13: Cemented middle pair

L12: nd = 1.50378, νd = 66.81. Glass: unmatched patent pair; supplier and melt unknown.
L13: nd = 1.74400, νd = 44.78. Glass: unmatched patent pair; supplier and melt unknown.

Positive/negative pair in the master unit; the following source air interval is 26 mm.

### L14: Biconvex positive singlet

L14: nd = 1.60717, νd = 40.34. Glass: unmatched patent pair; supplier and melt unknown.

Positive member of the rear air-separated pair.

### L15: Biconcave negative singlet

L15: nd = 1.66755, νd = 41.93. Glass: unmatched patent pair; supplier and melt unknown.

Rear negative member of the master unit. The final image distance is calculated, not printed.

## Glass Identification and Dispersion

All fifteen d-line refractive-index/Abbe pairs retain the selected source reading. No supplier, melt, exact catalog glass,
anomalous partial dispersion or measured spectral line indices are asserted. The deliberately unmatched labels use
the engine's approximate Abbe dispersion tier. Reference d-line calculations are the principal diagnostics; factory
color correction, coatings, absorption, polarization and photographic transmission remain unverified.

## Focus Mechanism

Only the published infinity endpoint is modeled. There are no variable focus gaps, close-focus keyframes or finite-conjugate claims.
The schema requires closeFocusM = 1; that value is an explicit placeholder and does not move the optics or assert a product specification.
The historical product specification gives a 1.6 m minimum, but no corresponding optical state is reconstructed.
The terminal gap is the independently calculated d-line paraxial back focus, approximately 44.392669315 mm. It is not a source dimension.

## Printed Source Conflict and Chosen Interpretation

The original US Example 4 page 12 visibly prints dB2 = 1.96 mm. Repeated Claim 4 page 15 visibly prints 2.96 mm.
This is a real printed contradiction, not merely an OCR loss. The model explicitly selects the claim/family-consistent 2.96 mm reading.
The German text also supports 2.96, and this reading reproduces the printed second-unit focal length of -34.432 mm.
The other unit focal lengths calculate to 100.0223, 88.1451 and 95.3691 mm, close to the printed 100.023, 88.145 and 95.369 mm.
The rounded prescription does not reproduce every printed summary digit exactly; no source value is fitted to force agreement.
These facts justify an identified interpretation, not proof of factory truth. The source.errata record exposes the choice.

The literal 1.96 mm interpretation is retained separately as diagnostic JSON. With the delivered 15 mm variator caps it
fails the standard positive-edge gate: L5 crosses at its rim by about 0.293 mm. A controlled comparison narrows surfaces
6/7/8 to a common 13 mm radius in both interpretations; it retains the two readings and every other source value.
Those diagnostic caps and each calculated paraxial plane are disclosed rather than substituted into the delivered model.

## Aperture Inference and Validation Scope

The patent gives no numerical stop location, physical iris opening or clear semi-diameters. An added STO is therefore
a model surface at the midpoint of D3, splitting its unchanged 6.707 mm into 3.3535 + 3.3535 mm.
It is an inferred air-space location ahead of the master unit, not a transcribed patent stop row.
The standard f/4 engine rule derives a physical stop radius near 11.9213 mm at both endpoints. No blade count is invented.

All clear apertures are inferred. The 22.5 mm front radius is below the secondary product's 49 mm filter-thread radius,
leaving a nominal 2 mm radial allowance; this is a plausibility bound, not a measured clear aperture.
Inner component radii follow the qualitative Figure 2 proportions and are limited by the unchanged default geometry gates.
The source-surface semi-diameters, in order, are:
22.5, 22.5, 21.3, 21.3, 21.3, 15, 15, 15, 13, 13, 13, 13, 13.5, 13.5, 13.5, 13.5, 13.5, 14.5, 14.5, 14, 14, 12, 14.8, 14.8, 15.2, 15.2 mm.
No gap-sag, rim-angle or hidden-render-trim allowance is relaxed. These are inspectable model apertures, not manufacturing specifications.

Native aperture audits reproduce f/4, and full-format chief rays clear the model. A chief-ray pass does not certify a full pupil.
The separate evidence records full pupil survival, RMS spots, physical blocking, focus diagnostics and numerical MTF convergence.
All requested samples are retained; spot RMS includes every transmitted ray, while blocked and unresolved samples stay counted.
Pupil survival is geometric and excludes coatings; it is not photographic relative illumination.
The engine's MTF uses a scalar sheared traced-pupil estimate and is not a factory measurement or polarization-aware wave-optics validation.

The raw diagram half-angle can exceed the image-format corner. Native-format diagnostics use the exact MTF image-height
coordinates and returned field angles; the earlier wider raw-angle runs are retained explicitly as overscan diagnostics.
The report also records bounded stop-location sensitivity and stopped-down behavior without replacing the midpoint model.

## Sources

- [US original and indexed text](https://patents.google.com/patent/US3796481A/en)
- [Original US PDF](https://patentimages.storage.googleapis.com/28/87/55/7399f7e80b9bf5/US3796481.pdf)
- [German family publication](https://patents.google.com/patent/DE2221118A1/en)
- [Secondary historical product specification](https://www.mir.com.my/rb/photography/hardwares/classics/olympusom1n2/shared/zuiko/htmls/75150mm.htm)
