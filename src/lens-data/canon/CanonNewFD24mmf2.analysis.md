## Patent Reference and Design Identification

**Patent:** [US4188092A](https://patents.google.com/patent/US4188092A/en), Retrofocus type wide-angle objective lens  
**Inventor:** Kikuo Momiyama  
**Assignee:** Canon Kabushiki Kaisha  
**Priority:** April 5, 1977, JP52/38690  
**Filed:** March 31, 1978  
**Granted:** February 12, 1980  
**Example details:** Example 1 / Figure 1; original PDF page 12, columns5–6 including R20 continuation. Uniform scale24mm from the source's f=1 normalization.

This is a production-correlated reconstruction of the **June1979 Canon New FD24mm f/2**, not a factory-authenticated prescription or the distinct f/2.8 S.S.C. The [Canon Museum](https://global.canon/en/c-museum/product/nfd200.html) identifies the June1979 retail model with11 elements/9 groups and0.3m minimum focus. The manufacturer [FD Lens Instructions](https://flynngraphics.ca/wp-content/uploads/2016/07/FD-Lens-Instructions-for-Web.pdf), local PDF page8 / printed28–29, explicitly lists New FD24mmf/2,84degrees,9groups/11elements,0.3m and double-helicoid focusing with Canon Floating System. That manual supports identity/specifications/mechanism, not measured optical geometry. Its weight310g differs from the Museum's285g; no optical-change explanation is inferred.

The [MIR exact-model mechanical cutaway](https://mir.com.my/rb/photography/companies/canon/fdresources/fdlenses/24mmf2optic.jpg), in its [24mm page context](https://mir.com.my/rb/photography/companies/canon/fdresources/fdlenses/24mm.htm), is independent of the patent drawing. Its original print attribution is unknown; it is **not described as a Canon OEM print**. The entire ordered stack fits one isotropic transform:20 axial vertices, scale68.332524pixels per normalized source focal unit, shift6.744640pixels, RMS1.050834pixels/max2.697258pixels across155pixels. Pick uncertainty is approximately1–3native pixels. Signed spherical contours and element ordering also agree over visible optical portions. No per-group warp, separate axial/radial scaling or Rx fitting is used.

Example3's axial RMS1.548345pixels is only slightly worse, within raster uncertainty. The stronger discriminator is topology: the independently inspected rear crop shows a seam **inside the biconcave component**, matching Example1's R15 glass/glass junction. Example3 exits that component to air atR15 and instead cements the following positive component atR17. Thus Example1 is the better production-correlated example; small RMS superiority alone is not treated as decisive. Low-resolution shading, bevels and unresolved peripheral shapes prevent factory-exact claims.

## Optical Architecture

Eleven spherical elements in nine air-separated groups. R10 joinsE5/E6; R15 joinsE8/E9 inside the rear biconcave component. Both shared interfaces remain single optical surfaces with the correct following material. No plate or baffle is invented.

The source explicitly gives f24mm/F2/half-field42degrees and converts its table to f=1. All20 signed radii and19 separations are multiplied uniformly by24; no source index or Abbe value is changed. R1–R20 track is53.9904mm. In particular, faint signs are confirmed from original pixels: R10−2.9555f, R11−6.9175f, R13−.9078f, R14−1.1481f, R15−.7869f, R17−4.8410f, R18−.9381f, R20−2.0774f.

Terminal image distance is not printed. From the literal d-line prescription, independent ABCD yields EFL**23.992642534mm** and Gaussian infinity BFD**36.053364622mm**, placing the model's flat image at **z90.043764622mm** fromR1. Exact near-axis Snell rays independently approach this plane. These are explicitly **derived infinity coordinates**, not source-measured or factory image dimensions. No best-focus shift is applied in reported MTF; spherical aberration at larger pupils remains visible.

The diaphragm is explicitly drawn betweenR11/R12 but no numeric split/radius is given. The model estimates the midpoint of the exact1.9584mm air interval:0.9792mm on each side, STOz35.8032mm. Native paraxial f/2,f/4,f/8 controls give physical radii9.148829539,4.574414770,2.287207385mm. The exact axial marginal entrance radius at the f/2 control is5.440412224mm, yielding EFL/diameter2.205039; native paraxial aperture labels and real marginal-pupil ratios are distinct conventions, not factory measurements.

Unpublished optical caps are conservative **inner aperture estimates**, bounded by the MIR schematic and true source geometry. The initial R4cap12mm guess physically crossedR5 by0.346413mm and was rejected; it is preserved in baseline-v1. A valid inner estimate11.3mm is above the qualified ray footprints and retains positive clearance, rather than changing any printed prescription. Rear caps are similarly inner optical estimates, not claims about full factory glass rims or illumination. No geometry guard or gap-sag override is used. Dense co-radial separation remains positive (minimum0.1464mm); maximum intrusion is87.776956%, below the default90% limit. Render trimming is zero.

## Element-by-Element Analysis

| Element | Source faces | n_d | V_d | Layout |
| --- | --- | --- | --- | --- |
| E1 | R1–R2 |1.58913|61.1|Positive meniscus|
| E2 | R3–R4 |1.68893|31.1|Negative meniscus|
| E3 | R5–R6 |1.59551|39.2|Positive meniscus|
| E4 | R7–R8 |1.58913|61.1|Negative meniscus|
| E5 | R9–R10 |1.80518|25.4|Central cemented front|
| E6 | R10–R11 |1.62041|60.3|Central cemented rear|
| E7 | R12–R13 |1.80400|46.6|Positive rear component|
| E8 | R14–R15 |1.69680|55.5|Front of bonded biconcave component|
| E9 | R15–R16 |1.80518|25.4|Rear of bonded biconcave component|
| E10 | R17–R18 |1.69680|55.5|Positive meniscus|
| E11 | R19–R20 |1.77250|49.6|Positive final component|

## Glass Identification and Selection

Every d-line index and Abbe number is literal source data. No manufacturer glass identity, melt, coating or chemical formulation is established. Qualified calculations use helium-d587.5618nm only. Native Abbe-based dispersion remains unvalidated outside that wavelength.

## Focus Mechanism

Only static infinity is represented. The patent describes expanding theR6–R7 interval while advancing the whole system for close objects, but Example1 prints no numerical finite-focus state or floating cam. Manufacturer0.3m is a retail specification, not a modeled endpoint. The mandatory native focus field uses a distant1e15m sentinel and no variable gaps; this must not be presented as a validated finite setting. No solved/interpolated focus curve is supplied. Integration may refine supported focus presentation separately.

## Aspherical Surfaces

None. All20 source interfaces are spherical, plus the separately estimated planar iris. No polynomial, conic or alternative tracing branch is introduced.

## Validation and Scope

Main/spec pin: `980bd6f7fd5d27ba5f1d9a68e8c344a4123d67f2`. Exact source aliases and all1,215 catalog modules were checked numerically, including uniformly scaled20-radius sequences: no equivalent. Nineteen retained private native JSON copies from the prior six pack and New FD28 checkpoint also showed no numerical duplicate. The shared-family New FD28/2 is explicitly distinct (Example2,19interfaces/10elements, different rear topology) and unchanged. The public indexed catalog search and upstream handoff report no exact product. A direct live `/lenses/` HTML snapshot was denied HTTP403; no bytes or exhaustive live-snapshot custody are claimed, and no retry was made.

Actual builder JSON import, validation/build, JSON re-export and exported TypeScript reimport pass. Type checking passes; existing focused builder/untrusted/construction suites pass241 tests. Two clean fresh-directory/process runs must reproduce the native and optical outputs byte-for-byte before sealing.

A 32×32 uniform stop-cell disk(812rays),360rim rays and center were traced at each reported field. All1,173 samples clear the model's estimated caps and reach the fixed derived image plane at f/2 for−3/0/+3degrees; f/4 at sampled fields through±30degrees; and f/8 at sampled fields through±35degrees. These are sampled numerical scopes, not a continuum or full-frame factory-illumination guarantee. The default ray fraction3/42 selects the qualified3-degree central view.

Native/independent exact sphere intersections agree within1.33e−13mm. Independent geometric MTF on64/96stop-cell pupils agrees within0.003904 at5/10/20/40lp/mm, grid differences below0.003721. Native diffraction results are separately labeled scalar sheared-pupil estimates from traced rays, numerically converged without refocus; they are not an independently established full-wave solution or measured production-lens MTF. `RAY_AUDIT.json`'s spot statistics combine cell/rim samples and are diagnostic, not flux-weighted image or illumination measurements.

The exact published **±42-degree edge is not qualified**. At+42degrees, f/2 yields38valid/291cap-blocked/844unresolved samples; f/4 yields158valid/684blocked/331unresolved; f/8 yields173valid/917blocked/83unresolved. Negative-edge numerical categories differ slightly; both signs are retained. Root/aim failures are not renamed as factory vignetting, and small residual-subpupil D80 is not reported as full-pupil quality. No unqualified edge MTF, full-aperture/full-field production equivalence, finite-focus performance or broadband coverage is claimed.

Desktop/mobile browser QA and application fine-tuning are deferred to integration, not passed. Manufacturing tolerances, full rims, coatings, flare and factory aperture behavior remain unverified. Prior frozen artifacts and the original six-lens ZIP are protected and unchanged.
