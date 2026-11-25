## Patent Reference and Design Identification

**Patent:** [US4176914A](https://patents.justia.com/patent/4176914), Compact retrofocus wide angle objective  
**Inventor:** Kazuo Fujibayashi  
**Assignee:** Canon Kabushiki Kaisha  
**Priority:** May 26, 1977, JP52-61467  
**Filed:** May 17, 1978  
**Granted:** December 4, 1979  
**Example details:** Sole US embodiment, Figure1 / Table1. Uniform ×0.28 scaling from printed f=100. Original signed table and claim facsimile both show R4 **+54.902**; +34.902 is an OCR error, not a substituted prescription.

This is a strong production-correlated patent reconstruction of the **June1979 Canon New FD28mm f/2.8**, not an authenticated factory prescription. The [Canon Museum](https://global.canon/en/c-museum/product/nfd203.html) identifies the retail variant: seven elements/seven groups, five blades, 0.3m minimum focus,52mm filter and40mm length. The manufacturer [FD Lens Instructions](https://flynngraphics.ca/wp-content/uploads/2016/07/FD-Lens-Instructions-for-Web.pdf), local PDFp8 / printed28–29, independently lists the New FD28/2.8 row and75degree field. It is specification/mechanism evidence, not measured optical geometry.

The [MIR exact-model cutaway](https://www.mir.com.my/rb/photography/companies/canon/fdresources/fdlenses/28mmf28optic.gif), in its [product context](https://www.mir.com.my/rb/photography/companies/canon/fdresources/fdlenses/28mm.htm), is independent mechanical artwork, **with unknown original print attribution**. It is not called a Canon OEM print. The [Yossyheim specimen teardown](https://yossyheim.com/canon-new-fd-28mm-f2-8-repair) corroborates glass adjacent to the iris and removable cells, not calibrated radii, thicknesses or factory apertures.

Twelve readable MIR vertices fit the complete signed source stack under one isotropic scale/translation: RMS0.80043px, max1.81152px over100.6px. No local stretching, group warp or separate axial/radial scaling is used. The older modeled Kawamura US4046459 Example2 refits at about4.42px RMS and fails the thick rear biconcave component: new L5 thickness4.4212mm versus old0.9828mm. Its curvature vector is also materially different. The new patent explicitly places its iris betweenL3/L4; the older native iris estimate lies betweenL4/L5, and is not mistaken for measured factory evidence. The old S.C. model remains unchanged.

The later Japan-only [JPS5489630A](https://patents.google.com/patent/JPS5489630A/ja) / [JPS6033251B2](https://patents.google.com/patent/JPS6033251B2/en) repeats these numerical data as Example1, with additional variants. Its priority1977-12-26 differs from the US priority1977-05-26: it is corroborative numerical equivalence, **not asserted to be the same formal priority family**. The localized S4→S5 air gap discriminates the alternatives more strongly than overall shape alone: observed20.0px, Ex1 model19.53px, Ex2 26.16px, Ex3 14.16px. Their global RMS values are0.800/2.412/2.158px respectively. Only the US Table1 / repeated Example1 prescription is modeled.

## Optical Architecture

Seven spherical singlets, no cements, plate or baffle. Every signed radius, center thickness, separation, refractive index and Abbe number comes directly from Table1. The first two components are negative menisci, L3 nearly plano-convex positive, L4 biconvex, L5 thick biconcave, L6/L7 rearward-convex positive menisci. Weak R6−7813.7 is retained rather than flattened.

The table specifies f100/F2.8/76degree full field and a literal b.f127.3. At one ×0.28 normalization, R1–R14 track is39.1776mm and final air is **35.644mm**, giving a flat image coordinate **z74.8216mm**. Independent first order gives EFL**28.014477527mm** and BFD**35.630817850mm**. Thus the printed detector is13.18215µm behind paraxial focus. That discrepancy is retained; no hidden refocus or fitted optical value is used. The retail75degree field is distinguished from the patent76degree specification, and both edges are diagnosed separately.

The source locates the iris in the L3/L4 air interval but gives no axial split or physical diameter. A MIR/source-figure estimate places it at normalizedz74, or **z20.72mm**, with plausible diagram uncertainty roughlyz72–77 source units. This splits the exact R6/R7 interval into4.1468mm and1.4140mm. It is an estimate, not a manufacturer datum. Native f/2.8 control radius is6.977099231mm; exact marginal entrance radius4.825846802mm gives EFL/diameter2.90255. The native paraxial label and real marginal-pupil ratio are disclosed separately, not reinterpreted as factory measurements.

Inner optical rims are estimated within the schematic envelope and positive spherical-gap limits. Initial conservative caps and their clipping results remain in baseline-v1. Final R7/R8 radii7.4mm lie within the approximate19px schematic edge; obscured R12 radius7.0mm corresponds to17.7px against an approximate16px visible arc bound, within an explicitly assumed2px retainer/raster uncertainty. These are uncertain inner clear-aperture estimates, not measured full glass diameters or factory illumination. Physical separation is independently positive (minimum0.175936mm), maximum gap intrusion87.6554%, under the default90% guard. No sag allowance, global edit, baffle workaround or render trim is used.

## Element-by-Element Analysis

| Element | Faces | Source index | Source Abbe | Layout |
| --- | --- | --- | --- | --- |
| L1 | R1–R2 |1.60311|60.7|Negative front meniscus|
| L2 | R3–R4 |1.60311|60.7|Negative meniscus|
| L3 | R5–R6 |1.69895|30.1|Positive, weak rear curvature|
| L4 | R7–R8 |1.77250|49.6|Biconvex positive|
| L5 | R9–R10 |1.80518|25.4|Thick biconcave negative|
| L6 | R11–R12 |1.71300|53.9|Positive rearward-convex meniscus|
| L7 | R13–R14 |1.77250|49.6|Positive rearward-convex meniscus|

## Glass Identification and Selection

The source prose explicitly calls the reference the **sodium D line**, despite table headings Nd/νd. Every printed index/Abbe pair is preserved with native `indexReference: "D"`. Qualified numerical results use the engine's sodium-D center589.2938nm, not helium-d587.5618nm. No supplier, melt, formulation or validated broadband dispersion is inferred. Existing native interpolation outside this reference is not qualified spectral evidence.

## Focus Mechanism

Only the literal source infinity prescription is modeled. No numerical finite rows or factory cam are provided by the source. Retail0.3m minimum focus and teardown mechanics remain documentary; no solved finite positions are presented as patent measurements. The required native close-focus field uses a distant1e15m sentinel with no variable gaps; it is not a qualified finite setting. Application integration should retain this limitation.

## Aspherical Surfaces

None. All14 optical interfaces remain signed spheres. The estimated iris is a separate planar stop.

## Validation and Limits

At fresh main/spec pin `980bd6f7fd5d27ba5f1d9a68e8c344a4123d67f2`, all1,215 native catalog modules were checked for supplied identifiers and globally scaled14-radius equivalence. No duplicate was found. Explicit comparison of the existing Kawamura S.C. model is retained in `OLD_MODEL_COMPARISON.json`; negative name search alone is not the dedup basis. Earlier sealed Canon models, Nikon HOLD evidence and the six-lens package are separately protected.

Actual JSON import, native validator/build, JSON re-export and exported TypeScript reimport pass. Type checking and241 existing focused builder/untrusted/construction tests pass. Independent/native exact-sphere intersections agree within9.1e−13mm. Uniform stop-cell geometric MTF at5/10/20/40lp/mm on64/96 grids agrees within0.003882, grid differences below0.002684. Native scalar sheared-pupil diffraction is separately labeled and converged, without refocus; it is neither measured factory MTF nor an independently verified full-wave calculation. Two fresh-process/directory runs must match final output bytes before sealing.

For each sampled field,812 uniform stop-cell disk rays,360 rim rays and center were tested. All1,173 reach the unchanged printed plane without clipping or unresolved traces at f/2.8 for−3/0/+3degrees, f/4 at sampled fields through±20degrees, and f/8 through±30degrees. This is sampled, estimated-rim sodium-D infinity scope, not proof of every intervening field or factory throughput. The default native off-axis fraction3/38 selects3degrees. Spot statistics combining cell and rim samples are diagnostic, not flux-weighted image or illumination metrics.

Full-field behavior remains unqualified. At retail+37.5degrees, valid/blocked/unresolved counts are311/401/461 at f/2.8,686/212/275 at f/4, and922/251/0 at f/8. At the patent+38degree edge they are299/405/469,668/222/283 and888/285/0 respectively; both signs are retained in the evidence. Mathematical root/aim failures are not renamed as factory vignetting, and the surviving small pupil is not reported as full-pupil image quality. No full-field, finite, broadband, coating, tolerance or factory-illumination claim follows.

Desktop/mobile browser QA and application fine-tuning are deferred to integration, not passed. No previous model was replaced or modified; no user ZIP or upload is created in this task.
