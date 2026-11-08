## Patent Reference and Design Identification

**Patent:** [US 2,701,982](https://patentimages.storage.googleapis.com/2f/75/dd/b76ccb73bc0f44/US2701982.pdf)  
**Application Number:** US serial 367,003  
**Filed:** July 9, 1953  
**Granted:** February 15, 1955  
**Priority:** France, March 26, 1953  
**Inventor:** Pierre Angénieux  
**Assignee:** No organization is named in the original patent.  
**Title:** Large Aperture Six Component Optical Objective  
**Example details:** Unnumbered numerical table on PDF page 2, repeated in claim 4 on PDF page 3; sectional drawing on PDF page 1. All source radii and axial distances are uniformly scaled by 0.25.

**P. ANGÉNIEUX M1 FAMILY 25mm f/1 (conditional patent model)** is a private research representation, not an identified factory prescription. Its connection to the marketed M1 remains conditional. The source contains one unnumbered numerical example; the repeated claim table does not constitute another example.

The evidence has three distinct roles:

1. The original US patent supplies the numerical prescription: eight elements in six groups, normalized focal length 100, relative aperture 1:1 and back focal length 56.
2. Grenier's 1960 commercial catalog, page 60, lists an Angénieux M1 at 25 mm f/0.95. It establishes a marketed product, but contains no optical section identifying this numerical table.
3. The M42 Mount Spiral M1 article explicitly associates US2701982 with that product. This is secondary attribution, not independent primary proof of the production prescription. The manufacturer's space-history account supplies historical context rather than factory optical dimensions.

At the retained scale, the design focal length is 25 mm and the computed effective focal length is 24.9849355674 mm. **The modeled aperture remains source f/1.** The marketed f/0.95 is a separate product fact and is not used to enlarge the modeled pupil. Exact production correspondence cannot be inferred from nominal focal length, speed, element count or the secondary attribution alone.

## Optical Architecture

The design is a modified Gaussian objective. The patent describes it as a Gauss-type arrangement in which each outer lens is subdivided into two lenses, enabling a larger aperture while maintaining correction of spherical aberration (PDF page 2, column 1). The numerical example has two positive front singlets, two central cemented components and two positive rear singlets.

The groups are L1, L2, L3–L4, L5–L6, L7 and L8. The cemented boundaries are source surfaces 6 and 9. Fourteen refracting surfaces are spherical; the inserted flat stop plane is not an additional powered surface or glass element. No aspherical terms, sensor plate, optional filter or mechanical barrel geometry has been added.

The two cemented components face one another across the central airspace. Their strongly curved inner faces and dispersive negative members provide the central Gaussian structure; this role is an interpretation of the tabulated geometry, not a separate assertion of measured aberration correction. The patent specifically identifies a dispersive flint and a collective crown in each central component (PDF page 2, column 1 and claim 3).

All source radii and axial distances, including the stated image distance, are scaled uniformly by 0.25. Refractive indices and Abbe numbers are unchanged. No radius, thickness, glass coordinate or image-plane position is optimized to improve a computed image.

## Element-by-Element Analysis

The following coordinates retain the patent's notation **n_D and ν**. The source explicitly names the D line, whereas the calculation engine uses its helium-d reference convention at 587.5618 nm. The stored values are not converted between those conventions. All listed glasses are **Unmatched**, with estimated Abbe dispersion and no identified catalog or production glass.

The focal lengths below are **isolated thick-element diagnostics in air**, calculated from each element's two radii, center thickness and unchanged source index. They are not installed component powers: in particular, the cemented L3/L4 and L5/L6 elements do not have air on both sides in the assembled objective. The diagnostic uses Φ = (n − 1)[1/R₁ − 1/R₂ + (n − 1)t/(nR₁R₂)] and f = 1/Φ at the model's 0.25 scale.

### L1: Positive Meniscus

n_D = 1.6751; ν = 32.3; glass: Unmatched, Abbe dispersion estimate; isolated in-air f = +85.077 mm.

Surfaces 1–2 form a weakly positive front collector with both centers of curvature toward the image. The patent calls the first component convergent. Its relatively dispersive coordinate is retained as printed; no vendor identity or specific aberration contribution is assigned from that coordinate alone.

### L2: Positive Meniscus

n_D = 1.6689; ν = 46.7; glass: Unmatched, Abbe dispersion estimate; isolated in-air f = +67.712 mm.

Surfaces 3–4 form the second positive front component. The patent explicitly describes this component as a convergent meniscus with both faces convex toward the front. Its separation from L1 is a literal source airspace, not a reconstructed focus gap.

### L3: Positive Meniscus in the Front Cemented Component

n_D = 1.6913; ν = 53.8; glass: Unmatched, Abbe dispersion estimate; isolated in-air f = +21.398 mm.

Surfaces 5–6 bound the collective member of the front cemented pair. Its rear boundary is the weakly curved cemented interface with L4. The contrast between this higher-Abbe member and the more dispersive L4 is consistent with the patent's stated crown/flint pairing; that interpretation does not identify a particular glass composition or supplier.

### L4: Negative Meniscus in the Front Cemented Component

n_D = 1.6751; ν = 32.3; glass: Unmatched, Abbe dispersion estimate; isolated in-air f = −12.154 mm.

Surfaces 6–7 bound the thin, strongly negative member nearest the stop on the front side. Its rear concave face forms one boundary of the central airspace. L4 shares the printed index/Abbe coordinate of L1, but this coincidence does not prove an identical production melt.

### L5: Biconcave Negative Member in the Rear Cemented Component

n_D = 1.6992; ν = 30.2; glass: Unmatched, Abbe dispersion estimate; isolated in-air f = −11.892 mm.

Surfaces 8–9 form the negative, relatively dispersive member immediately behind the stop. Its front face bounds the rear side of the central airspace; its rear face is cemented to L6. Its in-air focal length is diagnostic only and must not replace the actual refractive-index step at that cemented boundary.

### L6: Biconvex Positive Member in the Rear Cemented Component

n_D = 1.6204; ν = 60.2; glass: Unmatched, Abbe dispersion estimate; isolated in-air f = +18.158 mm.

Surfaces 9–10 form the thicker collective partner of L5. The higher Abbe number supplies the lower-dispersion member of this pair. The rear component is not an exact mirror of the front one: the source assigns different glass coordinates, curvatures and thicknesses to the two sides.

### L7: Biconvex Positive Rear Singlet

n_D = 1.6913; ν = 53.8; glass: Unmatched, Abbe dispersion estimate; isolated in-air f = +37.886 mm.

Surfaces 11–12 form the first of the two separated positive rear components. The source's stated index condition for the fifth component is satisfied by its printed n_D greater than 1.63. The element contributes to the rear collecting system; a separately measured field-flattening or chromatic role is not established.

### L8: Biconvex Positive Rear Singlet

n_D = 1.6913; ν = 53.8; glass: Unmatched, Abbe dispersion estimate; isolated in-air f = +34.354 mm.

Surfaces 13–14 form the final positive component. Its source index likewise exceeds 1.63, and it repeats the L3/L7 glass coordinate. The retained final image-space distance follows the patent's stated back focal length rather than a best-focus adjustment.

## Glass Identification and Spectral Limits

Five distinct source index/Abbe pairs occur across the eight elements: L1/L4 share 1.6751/32.3; L2 uses 1.6689/46.7; L3/L7/L8 share 1.6913/53.8; L5 uses 1.6992/30.2; and L6 uses 1.6204/60.2. These are published coordinates, not catalog identifications.

The patent says “refractive index for the D line” (PDF page 2, column 2). It does not give a numerical reference wavelength or wavelength-dependent indices. The model preserves these source values while using the engine's d-line convention at 587.5618 nm. That convention is an explicit approximation, not evidence that the source specified the helium d line or that a numerical D-to-d conversion was performed.

**All eight wavelength-dependent glass dispersions are estimated from the retained index and Abbe value.** No catalog Sellmeier curve, measured partial dispersion, anomalous-dispersion coefficient, supplier or production melt is asserted. The central crown/flint pairing is source-supported design intent; the available data do not establish apochromatism or measured secondary-spectrum correction.

The reference-index and estimated-photopic calculations must therefore remain distinct. Agreement between two implementations at the unchanged reference indices validates numerical ray propagation under that convention, not the physical dispersion of the manufactured M1.

## Focus Mechanism

The model contains a single fixed source prescription and no finite-focus travel schedule. All six groups remain fixed. No unit-focus, internal-focus, floating-element or actuator motion is inferred from the product's focusing capability.

The source's normalized back focal length 56 becomes 14 mm. The paraxial Gaussian result is 13.9942746904 mm, leaving a 0.0057253096 mm difference from the printed image distance. The model retains the printed boundary; no best-focus shift is applied to the reported MTF results.

The finite close-focus placeholder used by the schema is not a physical minimum focus distance. The viewer should identify this as infinity-only, with finite-focus travel not modeled. The commercial catalog's product focus information does not supply a patent-derived moving-group schedule.

## Stop, Clear Apertures and Filled Geometry

The drawing places the diaphragm in central airspace e₇ between surfaces 7 and 8, but neither its numerical axial split nor its diameter is tabulated. The adopted stop is 60% of the way through that gap from surface 7. The drawing measurement was approximately 0.58848, with an estimated 0.56–0.62 interval; the adopted 0.60 is an explicitly inferred frozen hypothesis, not an optimized factory dimension.

At the 0.25 scale, the central source gap is 7.665 mm, split into 4.599 mm before the stop and 3.066 mm after it. Its f/1 physical stop radius is computed as approximately 7.12604 mm from the unchanged reference prescription. Surface clear apertures and straight bevels remain inferred geometry. They must not be described as dimensions printed in the patent.

The earlier feasibility rendering used a default 90% cap safeguard that shortened the displayed central tips while the ray tracer retained larger authored clear apertures. That earlier rendered non-overlap check did not prove clearance of the full ray-bearing solids. The qualified model instead retains the full caps and uses a 94% gap-sag allowance, the smallest whole-percent stage passing for the frozen geometry after testing 90%, 91%, 92%, 93% and 94%.

The full-cap intrusion is 93.7944986% of the central gap, leaving 0.4756517 mm positive shared-cap air clearance. Even the zero-rounding-margin beam-floor caps at the adopted stop require more than 93%. No tested alternative in the measured stop interval preserves the source f/1 beam at the default 90% allowance. Some changed stop/cap hypotheses can reach a 93% stage, but they are different geometries and were not adopted as performance-fitted replacements.

All eight untrimmed closed element polygons pass the retained finite-area and self-intersection checks; all 28 element pairs have no positive overlap above the audit tolerance. The iris intersects no glass, with minimum full-solid clearance approximately 0.1265705 mm. Independent exact spherical-cap and straight-bevel material-path tests support this modeled solid convention, not undocumented factory edge machining.

## Verification Summary

The following results belong to the frozen private numerical and geometric validation checkpoint. They are not a production-lens measurement, an exact factory-identification result or a substitute for separate application acceptance.

- The unchanged source prescription computes EFL 24.9849355674 mm and Gaussian BFL 13.9942746904 mm at the 0.25 scale. Source f/1 and the printed 14 mm image distance are retained.
- The adopted 16 mm cinema format has a 12.7 mm diagonal and 6.35 mm corner. This is a diagnostic field assumption, not a patent-published usable image circle or a confirmed M1 performance boundary.
- Eighteen native MTF cases cover f/1 through f/16 at both reference-index and estimated-photopic settings. Eleven true image-height fractions per case give 198 fields, each converged through 50 lp/mm at the 10, 30 and 50 lp/mm samples, with maximum grid 256. Every applied focus shift is zero.
- These MTF grids record no failed, unaimed or unresolved in-beam rays and no unknown flux. The convergence result applies to the adopted model and sampling tolerance, not to the accuracy of the source-to-product attribution.
- A separate 75-case reference-index pupil sweep covers five apertures, three grid sizes and five angle fractions. Its angle fractions are not the MTF matrix's image-height fractions. At f/1 and grid 128, the sampled geometric transmitted fraction falls from 1.0000 on axis to 0.52606 at the diagnostic edge; edge clipping is retained, not hidden by enlarged apertures. These are pupil diagnostics, not irradiance, T-stop or product transmission measurements.
- An independently implemented reference-index tracer tested 1,685 vector launches, including deliberately outside-stop controls. All 995 transmitted rays agreed with native paths to within 1.60 × 10⁻¹³ mm in shared position and had no wrong-material intervals in the independent full-solid audit.
- Native `noBracket` results on 192 already physically rejected analytic extensions remain recorded. They are outside-cap controls or continuations after an aperture clip, not converted into optical successes. No unexplained native failures were found in that audit.
- Six cases exercised the pre-existing production worker's message protocol in a Node VM and exactly matched the fresh native numerical results. This was not an actual browser Worker test. The private numerical checkpoint also included strict standalone compilation, but did not by itself constitute application registration, a whole-application build, SSR or browser acceptance.

Independent ray/material agreement and native scalar-diffraction convergence are different claims. No independent diffraction/MTF implementation, measured production-lens MTF, factory glass identification or confirmed product field is supplied. Exact M1 correspondence, stop location, clear apertures, bevels and spectral dispersion retain the qualifications stated above.

## Sources and Evidence

1. [US 2,701,982, original three-page patent](https://patentimages.storage.googleapis.com/2f/75/dd/b76ccb73bc0f44/US2701982.pdf): the drawing, literal numerical prescription, inventor, dates, D-line statement and sole-example determination. The numerical table is on PDF page 2 and repeated in claim 4 on page 3. Original PDF SHA-256: `4d77506b226df82d14000a4473ab00357ce6ba65ff8e4170a668d320f55a0675`.
2. [Grenier 1960 catalog, page 60](https://collection.click-clack.fr/media/posts/895/1960-Grenier-7.jpg), hosted in the [Click-Clack Angénieux historical collection](https://collection.click-clack.fr/angenieux-histoire-et-publicites/): contemporary reseller evidence for the M1 25 mm f/0.95 product, not an optical-section identification.
3. [M42 Mount Spiral, Angénieux articles](https://spiral-m42.blogspot.com/search/label/Angenieux): the M1 article dated January 4, 2023 explicitly cites US2701982. Its attribution is secondary evidence; no third-party numerical geometry is used.
4. [Angénieux space history](https://www.angenieux.com/our-story/angenieux-space/): manufacturer historical context for 25 mm f/0.95 lenses, not the numerical source for this model.
5. The accompanying private research checkpoint retains the original source table, inferred-geometry measurements, staged gap allowance checks, full-solid audits, 198-field MTF matrix, 75-case pupil sweep, independent launches and material-path results. These reproducible numerical records support the limited validation claims above; they do not upgrade secondary product attribution to factory identity.
