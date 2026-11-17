# Zeiss / Willy Merté US1485515 sole example

## Identity and scope
Hidden patent-only **monochromatic sodium-D reference**, not a 120mm retail Tele-Tessar. Patent normalized focal length100 is interpreted as100mm for this reference. November2 association33 was a probable 25cm Tele-Tessar production-family association supported by Zeiss1927 booklet; not factory-exact radii/glasses. The separate120mm calculation is not demonstrated here. This is a prior known discovery newly represented, not a new patent family.

## Literal primary source
https://patentimages.storage.googleapis.com/49/24/7e/fc27a28e511908/US1485515.pdf#page=2
US1485515, March4,1924, Willy Merté/Carl Zeiss; sole drawing PDFp1 and table PDFp2. Original explicitly identifies GB145548; German priority date differs by one day between US/GB and DE documents, retained rather than silently repaired.

R1–R7 +18.091,-38.834,-36.679,+38.740,-10.396,-9.426,-17.130. dI–IV3.329,.83,1.89,.75; air b1=.130,b2=5.66,b3=18.25. b2/b3 straddle the explicitly drawn iris. Four elements, three physical groups; rear cemented interface is literal.

nD=[1.59234,1.59704,1.62410,1.49900]; nG′=[1.60464,1.61718,1.64732,1.50840]. These are indices, **not Abbe numbers**. Native elements retain actual nD and `indexReference:D`, omit vd. Runtime constant-index fallback used exclusively as sodium-D reconstruction; nG′ is preserved here, not fitted or converted. Do not interpret constant index as measured achromatic performance. Native C/d/F MTF correctly reports spectral-data-unavailable; reference589.2938nm remains available.

## Modeled choices
No source dimensions changed. Computed EFL99.9765434843mm is −.0234565% from rounded100; computed BFD49.6286724892mm. Source f/6.3; native paraxial pupil radius7.9346463083mm and stop radius6.4085691826mm. Stop axial coordinate9.949mm is literal, diameter estimated from nominal aperture. Surface semi-diameters8.3,8.1,8.1,8.1,5.2,5.2,5.2mm are engineering estimates, not source dimensions. Infinity-only1e15 sentinel with no finite-focus motion. No asserted format, image circle or coverage.

## Validation and limitations
Fresh native canonical validation, strict focused TypeScript, geometry/render diagnostics, iris-clearance and exact meridional trace tests pass on pinned3fd318c3e82cdbc3e5d3a1ed7bd5abbf4e99bfc2. All renderer trim amounts zero. Iris clearance5.12625395mm before and16.85604510mm after at nominal opening. Nine-point pupil samples at0,5,10 and default11.0033degree half-fields retained in JSON. Axial fractions through±.9 pass; exactly±1 clip at iris due pupil aberration/nominal paraxial-pupil mapping. Do not claim full unvignettedf6.3 throughput. Off-axis clipping is retained, not repaired. Default viewer field is not source-supported coverage. Independent paraxial and near-axis spherical Snell agree. MTF support checked only; no converged MTF curves or color validation. Full-app regression/current-main compatibility/compiled-viewer-browser QA pending integration.
