## Patent Reference and Design Identification

**Patent:** US 3545845 A, Compact wide angle objective lens system with long back focal length
**Application Number:** US743854A
**Filed:** 1968-07-10; Japanese priority 1967-07-24
**Granted:** 1970-12-08
**Inventor:** Yasuo Takahashi
**Applicant:** Asahi Kogaku Kogyo Co., Ltd.
**Example details:** Sole Table I and Figure 1. Nine physical glass elements in eight air-separated groups.

Private numerical reconstruction for the M42 Super-Takumar 24mm f/3.5 variant. The parent independently registered its 9/8 section against the manufacturer-authored Pentax SL manual, printed p21. That comparison is a cross-workspace witness: the actual overlay/manual crop is not locally in custody here. No new local overlay RMS or factory-exact prescription claim is made. This is distinct from the K-mount 24mm f/2.8. Photons to Photos' differently labeled smc reference is documentary context and did not supply model values.

Original four-page US PDF was acquired and visually inspected locally. Both original Table I printings agree; notably source d7 is 11.0 and r15 is -124.5. Original shared r12/r13=-116.0 is one actual cemented interface. No invented adhesive layer.

The source states nominal f=100, f/3.5. Its literal d-line numbers independently compute EFL98.5649413980 source units. A single uniform dimensional multiplier **0.2434942856921586** makes the literal computed EFL24.000000mm. Every radius, thickness, air gap and stop offset receives that same scale; indices do not change. This is normalization, not a fit of individual optical parameters. The simpler nominal100-to24 multiplier0.24 would yield23.655585936mm and is not the chosen model.

The source prints no terminal image spacing. The model therefore explicitly uses a **derived paraxial infinity BFD36.013662460745mm**, detector z89.217163884482mm, without an additional defocus optimization. This plane is not factory film/register metrology. The table and scale remain separately preserved in LITERAL.json.

## Optical Architecture

A negative front meniscus precedes a positive lens, another negative meniscus, a thick weak meniscus, a positive biconvex element, a positive/negative cemented doublet, a rear positive meniscus and a positive plano-convex final element. The long-back-focus architecture is retained literally, including the close0.5-source-unit air gaps. There is no filter/cover plate in Table I, and none is added.

The original explicitly places the diaphragm4 source units behind its tenth face, within the5-unit gap. The operational model retains that position: split0.973977142769/0.243494285692mm. Iris radius and all optical clear rims are estimates, not factory mechanical aperture dimensions.

## Element-by-Element Analysis

| Element | Source nd/Vd | Topology |
|---|---|---|
| E1 |1.51633/64.1|Front negative meniscus|
| E2 |1.83630/30.4|Positive element|
| E3 |1.62041/60.3|Negative meniscus|
| E4 |1.51633/64.1|Thick weak meniscus|
| E5 |1.55690/48.5|Positive biconvex|
| E6 |1.56883/56.0|Positive doublet member|
| E7 |1.69895/30.0|Negative member cemented to E6|
| E8 |1.58487/53.0|Rear positive meniscus|
| E9 |1.56732/42.8|Plano-convex final element|

## Glass Identification and Selection

Printed nd/Vd pairs are used directly. No stock-glass names, material equivalence, dispersion or broadband color performance is inferred. The patent identifies d-line aberration plots. Runtime calculations use helium d587.5618nm; only that monochromatic convention is tested.

## Focus Mechanism

Only a stationary infinity configuration is represented. No unit-focus travel, close distance, floating group, or finite mode is sourced or qualified.

## Scoped Numerical Validation and Limits

Default native import/serialization and full authored geometry pass, with zero render trim and no override. At f/3.5-control and f/8-control, all1173 samples per field at -5,-2.5,0,+2.5,+5degrees reach the fixed derived plane, with no cap loss or unexplained failure. Independent spherical Snell intersections and native intersections agree within2.03e-13mm. Caps are conservative estimates from actual scoped rays, and do not constitute full factory rims or84degree coverage.

The two native calculated physical iris radii are5.661753179393mm and2.477017015984mm. Independent real axial entrance ratios are approximately f/3.585618 andf/8.034978 respectively. Thus the f-number controls are explicit paraxial model controls, not exact physical factory iris measurements.

Native geometric and scalar sheared-pupil diffraction MTF converge at0,approximately2.50314 and4.99972degrees,5/10/20/40lp/mm, no focus shift and zero unknown flux. Independent geometric Fourier pupil-grid64/96 checks differ from native by at most0.003494 and between grids by0.001940. These are simulations of the normalized prescription, not measured production performance. Existing targeted Builder, diagram geometry and MTF tests:201 pass.

**HOLD:** Actual desktop/mobile Builder import/render/control/export/reload QA is not completed. The parent's registered production overlay/manual artifact still needs exact custody transfer for the complete QA handoff. No full field, finite, broadband, measured product performance or factory-exact claim. No delivery or release.

## Sources

- Original US publication: https://patentimages.storage.googleapis.com/8b/19/a1/7cd0d9bad46a68/US3545845.pdf
- Structured cross-reference: https://patents.google.com/patent/US3545845A/en
- Parent-witness production manual: https://www.cameramanuals.org/pentax_pdf/pentax_sl.pdf, printed p21. Local retrieval rate-limited; no retry or local custody claim.
