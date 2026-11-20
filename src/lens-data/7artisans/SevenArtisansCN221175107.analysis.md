# AstrHori 40mm f/5.6 M representative reconstruction

2026-11-15. User-authorized estimated stop placement. Qualified exploratory model, not a factory prescription. Hidden pending integration.

## Source and identity
[CN221175107U](https://patents.google.com/patent/CN221175107U/en), [original PDF](https://patentimages.storage.googleapis.com/a8/c9/ad/0a67407ffcaec7/CN221175107U.pdf). Table on PDF p6, diagram and analysis figures retained in evidence. Author Changjia Liu; assignee Shenzhen Seven Artisans Photoelectric Technology Co., Ltd. Published 2024-06-18. [Distributor](https://www.stkb.jp/shopdetail/000000002008/) identifies the AstrHori M-mount 40/5.6 as 7 elements /5 groups with five-blade iris. This supports a representative association, not factory identity. This is not a GFX lens.

The twelve refracting surfaces, seven printed nd/Vd pairs and all eleven internal spacings are literal. Two cemented pairs are retained. No glass catalog replacement, asphere or invented source value. The table takes precedence over more coarsely rounded indices in surrounding prose.

## Explicit estimates, not measurements
The patent supplies no stop plane, surface clear apertures or final image distance. Its Figure5 pupil radius is 3.5mm. Literal d-line EFL40.430566mm implies f/5.775795 at that pupil, rather than exactly marketing f/5.6. Preserve the source pupil, do not enlarge it to force the marketing number.

Estimate the iris midway in the 3.13mm air gap after L1: 1.565mm after source S2, z3.995mm from S1. Split that air gap without changing the optical prescription. This is a physically roomy front internal gap and a viable hypothesis, not a dimension read from the patent figure or distributor photograph. Figure1 is not uniformly scaled, so it cannot uniquely locate the iris. A five-blade polygon is not modeled; the native circular aperture approximation is used.

Inferred semi-diameters for source S1–12: 6.5,6.5,5.2,5.2,6.5,6.5,6.5,7,7,7,9.8,9.8mm. These are heuristic aperture envelopes consistent with native geometry and the tested beam, not source clear apertures. Rear cap trials with8.2mm violated the default gap-sag geometry gate; reduced inferred caps to7mm rather than relaxing the gate. The model consequently includes corner vignetting. No gap-sag override.

The omitted image gap is derived, not transcribed:23.834523458mm after S12. Start at the d-line paraxial image gap23.9483072mm and minimize axial transverse RMS over512 uniformly area-weighted entrance-pupil annuli;505 clear rays retained. The resulting shift is−0.113783742mm. RMS7.239116→2.008840µm; largest sampled radius13.134940→3.282236µm. This is an axial d-line best-RMS convention, not a factory flange position or a polychromatic/all-field optimum. Infinity-only supported; no finite-focus validation.

## Numerical results
Pinned engine70600ffc23af48a81994cf8fc834048fdf9d21a1, native literal d-line587.5618nm, physical image heights0,10.8165,16.22475,21.633mm, fixed derived image plane. Exact trace terminal rays are explicitly projected to image plane; raw trace.y is not treated as an image intercept.

Native geometry passes; native aperture audit is within3% and iris limited. Targeted strict TypeScript passes. Geometric and diffraction MTF each converge at all four field points through40lp/mm (max grid128). Diffraction30lp/mm sagittal/tangential:0mm .84652/.84652;10.8165mm .81999/.80036;16.22475mm .74182/.53860;21.633mm .76107/.46184. Corner sampling2266 valid/962 blocked, no failed rays; about29.8% blocked sampling cells. No claim of exact irradiance from that simple count. The literal representative model does not reproduce the patent's stated full-field >.7 value in tangential response. Preserve that mismatch, not a factory-performance claim.

Sensitivity: stop z3.495,3.995,4.495mm passes chiefs through28° without clipping at current heuristic caps. Front-stop hypotheses at−1,−.5,−.1mm clip at S10 at28°; rear-gap hypotheses have front clipping or failed extreme-field chief solve. These outcomes depend on inferred caps and do not establish a unique real stop position.

Predictions for non-destructive future checks, all z relative to sourceS1, positive imageward; small-angle exact-ray extrapolation approximates paraxial pupils. At stop z3.495/3.995/4.495mm, physical iris diameters6.40723/6.34873/6.29024mm; entrance pupil z2.73079/3.33308/3.94658mm and diameter7mm; exit pupil z10.50329/11.11154/11.71279mm, diameters7.08734/6.98203/6.87793mm. No actual sample measurement or mount-envelope validation is claimed.

## Integration still outstanding
Full-app regression, current-main compatibility, catalog dedup audit, compiled-viewer/browser QA, finite focus, polychromatic validation and independent pupil/iris measurements. Retain hidden status and explicit inferred-stop/derived-plane/representative qualifications. No publication, deployment or production readiness is asserted.
