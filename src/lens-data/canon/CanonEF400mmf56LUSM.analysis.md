# Canon EF400mm f/5.6L USM — calibrated source-iris native checkpoint

**Scoped native validation PASS. App/browser QA deferred, not passed.** The published physical iris is now represented by the ordinary imported model without an engine change. This is a production-correlated patent reconstruction, not authenticated factory Rx, measured factory f-number or camera performance.

## Aperture references — retain full precision

- Native `aperture.nominalFNumber` and first `fStop`: **5.744666578191286**. This is a ray-control calibration of the native paraxial aperture rule to source R13 physical **r15.650000000mm** (full31.30mm), not a revised patent specification.
- Existing `formatFNumber` returns **5.74**, also used by the aperture controls; round display only. Browser rendering/interaction has not been observed. The first quick-stop operation maps the native wide opening to the stored full-precision value.
- `catalog.fNumber.design` remains **5.80**, the patent's Example1-A reference.
- `catalog.fNumber.marketing` remains **5.6**, Canon's marketed reference.

The app control's f/5.74 label must be explained as calibration to the published wide-open iris in analysis/variables/integration notes. Do not relabel it as measured factory aperture, alter the metadata to imply f/5.74 was published, or round the stored control to5.74. No f-number independently measured on a factory lens is asserted.

The root solve uses the actual existing native `buildLens` and `stopSemiDiameterForFNumber` entry points. Final JSON import/build reads backr15.65 with zero numeric error against the same double-precision target. No STO.sd, fake zoom schedule, cam, folded path, embedded stop or engine feature was added. The earlier direct STO.sd schema probe and both former HOLDs remain unchanged as historical evidence.

## Source geometry and allowance

Standalone JP2019070689A Numerical Example1-A unconverted master only. B/C and finite focus are excluded. All signed radii, original physical gaps, source nd/Vd, element/cement order, source non-iris effective diameters and16planes are byte/semantically unchanged from the prior .922 input. Only native aperture-control metadata/first stop and explanatory subtitle/specs changed. R1/R12 remain nonrefracting air planes, R13 iris isz124.300mm fromR1, R15 cemented, R16 final powered surfacez132.300mm. First actual powered vertexR2 isz1.500mm. R16-to-image remains167.000mm; detectorz299.300mm, versus rounded printed299.31. The28.68 running datum is not used as BFD or diameter. No scale, nominal400/5.6 forcing, filter, source plane retune or optical refocus.

Native Gaussian EFL391.911348971mm and BFD167.021408352mm agree with the independent source calculation. +21.408352micrometres residual is retained at the literal plane. No best-focus shift was applied.

The single authorized lens-specific `checks.gapSagFrac=.922` remains; global90% default untouched. No geometry-preserving default-margin alternative was found: rim cuts/extensions would change an unsupported cap/land. The schema has no per-gap field. Original R5/R6 common radius31.085mm gives analytic minimum0.153740412735mm positive separation and92.11587627% center-gap intrusion.92.2% is sufficient, with1.6404micrometres margin to that allowance. All adjacent co-radial glass/air intervals remain positive in the independent4097point sweeps; native render trim0. This is design geometry, not a manufacturing tolerance or a global default exception.

R16 finished clear diameter is not printed. Native schema needs a radius: estimatedr14.810mm stays unchanged, matching R15's published junction radius. It is not claimed factory/measured. Largest admitted sampled R16 radius14.542911934mm leaves.267088066mm to that estimate. No source cap was reduced to obtain a pass. Finite sampling does not establish a finished bore or continuous-field physical guarantee.

## Sampled source-wide-open pupil and field

Helium-d587.5618nm, centered static infinity, source irisr15.65, literal detector.19field cases comprise17equally spaced angles from−3.16° to+3.16°, plus the two positive exact resolved MTF chart angles.812uniform stop-cell samples each,15,428native/independent comparisons per clean run. Every chief/pupil launch resolves. No failed, unaimed or unclassified ray remains. Independent sphere/Snell intersections agree within4.164e−13mm and image landings within2.993e−13mm. Explicit normal image-plane landing uses the public `skewImagePlaneIntercept`, not the final surface's raw coordinates.

Key sampled cases:

| Angle | Valid | Source-cap blocked | Failed/unaimed/unknown |
|---|---:|---:|---:|
|−3.16°|584|228|0|
|−1.58°|700|112|0|
|0°|812|0|0|
|+1.58°|700|112|0|
|+3.16°|584|228|0|

First losses are independently checked at source cap1/14/15. R1 is a nonpowered air datum with a tabulated effective diameter, retained as a model cap constraint, not a verified physical baffle. These stop-area admission counts are not radiometric relative illumination or measured factory vignetting. No suppressed losses or clear-aperture workaround. `NATIVE_RAYS.json` retains every sampled field, classifier, cap attribution, centroid/RMS/D80 and conditional geometric Fourier MTF. No unvignetted-full-field or broader field guarantee is made.

## MTF and unsupported chart scope

Native geometric and scalar diffraction estimates at5/10/20/40lp/mm converged foraxis,1.579675895° and resolved chartedge3.140929871°. Maximum grid128. All6outputs converge; design-plane appliedShiftMm=0 and imagePlaneInconsistent=false. Best axial shift+.002729981mm is a recorded diagnostic only. The scalar diffraction engine result is not a separate measured or independently reconstructed wavefront/OPD Fourier calculation.

Independent conditional geometric-pupil Fourier results at those same resolved angles agree with native geometric MTF within.007398305. Separate exact±3.16° geometric results are retained in the direct field sweep. Native full-frame MTF chart edge is3.140929871°, not3.16°; a greater-than1format fraction targeting the latter is rejected as invalid input, as recorded in FORMAT_EDGE_MTF_LIMIT.json. No request was silently relabeled, no chart/source bounds widened, and diffraction-inclusive native MTF at exactly3.16° is NOT claimed. No finite, moving optics, converter, other quick-stop, broadband or factory-performance qualification follows from this checkpoint.
