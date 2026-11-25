# EF24–85 recovery B — intended-aperture simulation, not factory aperture authentication

The frozen494-payload result is untouched. Recovery B preserves every signed R, spacing schedule, medium nd/Vd, the .05mm hybrid layer and all R6 coefficients. Only explicitly estimated clear caps and estimated aperture controls differ. Native import/validation/build, canonical JSON/TS parity, zero-trim readback and TypeScript pass at pinned43b9506233f55afcc8ec05344fa7e9a68a759616. No engine/default change or per-model allowance is used.

## What actually restricted the first result

**There was no demonstrated optical requirement that only SP r2.8 could work.** The initial r7 model already passed native geometry. The smaller opening was a conservative qualification choice prompted by unknown factory apertures/rims and the native fixed-f-number stop-down semantics, not a rejection of r7 by the signed Rx. The old R6cap10 was an estimated diagnostic cap, not the signed asphere's domain boundary. It removed many wide-field rays before an intended-aperture model had been assessed. This recovery corrects that interpretation, while retaining the original checkpoint as evidence.

Independent signed-profile audit finds the R6/R7 layer remains positive through r14: global minimum0.0459623mm, outer layer approximately0.15mm. At r13 outer thickness is0.081603mm and the R5→R6 wide air is2.541607mm. These geometry facts permit a larger simulation cap; they do NOT measure the factory rim. The source polynomial, signs, conic convention and gaps are unchanged.

The 90%air-closure radial limits are R8→R9 r9.290531mm and R28→R29 r11.070457mm. The true zero-clearance boundaries are9.691854/11.592128mm; at the authorized97%ceiling they are9.575508/11.439636mm. Full unchecked wide footprints demand aboutR8r10.09/R9r9.68 and R28r12.10/R29r11.57. Thus one cannot simply claim the whole nominal wide pupil clears by enlarging all caps: the signed neighboring gaps constrain the common clear domain. No97%relaxation is needed for the useful inner-field scope, so none was applied.

Front doublet R2→R3 zero-thickness bound isr28.17869mm; the third glass R4→R5 limit is25.80732mm. Unchecked tele footprints can exceed these common-radius bounds. These are geometry limits, not factory aperture measurements; unpassed full-pupil rays are not an instruction to override the validator.

## Recovery caps and native model

B's estimated row radii are [27,27,27,24.5,24.5,14,14,9.25,9.6,9.6,9.6,9.6,9.6,SP,8.7,8.7,8.7,9.8,9.8,MP,9.5,9.3,8.3,10,12,12,12,11,11,12]mm. They follow independent ray footprints subject to positive signed geometry; they are not measured OEM blanks or inferred factory vignetting. The limiting native air pair isR8→R9 at89.042126%closure, positive minimum0.585150mm. The source resin remains positive. All native surface/profile trim amounts arezero.

The main R14SP is a fixed **estimated r7.0mm** across the three printed optical anchors. R20 remains a distinct moving MP, **estimated r6.55mm**. Native full-SP control numbers are3.2543508878/4.0560801557/4.5928749202; these label the paraxial main-stop rule, not the effective two-stop pupil or factory maximum-aperture measurements. Independent real axial pupil tracing with both apertures yields effective f/3.584261/4.300432/4.669029. Endpoints are close to the source's3.58–4.68, without forcing retail3.5–4.5. Middle maximum aperture is not established. Native ordinary fixed-f-number stop-down behavior is still not claimed equivalent to the factory cam; the separately tested f/8 cases are independent static diagnostics.

No source aperture diameter was recovered. The readable Canon C21-9921/9922 service parts list identifies YG2-0300-000 POWER DIAPHRAGM ASS'Y separately from YA2-2839-000 RING,FLARE and its shafts/springs. Parent independently inspected the exploded p4 drawing; worker independently read the public parts-list text. This corroborates separate components, but supplies neither optical openings nor travel. It does not justify reassigning MP to SP or moving either patent plane. No original source PDF/OEM/overlay byte custody is claimed in this folder.

Service reference: https://cfargo.com/pdf/Canon/EF%2024-85%203.5-4.5%20USM%20%26%20MS.pdf . Original patent/OEM source custody remains with parent as documented in the preserved first checkpoint.

## Observed usable scope and remaining limits

Three literal source anchors only, unchanged derived Gaussian infinity layouts and one camera-anchored image z112.057297mm. First vertices0/−14.655056/−25.717934mm; printed gaps unchanged. No best-focus adjustment, finite-focus cam, extra zoom station or spectral claim. Native zoom step remains.5. Source endpoint±41.05°/±14.75° and estimated middle±21.036968° are all retained as diagnostics.

A single bounded B sweep uses812uniform stop-area samples at9signed fields per anchor:21,924rays. No failed, unaimed or unexplained losses. Native/independent sphere-asphere/Snell paths agree at the reported numerical tolerance; an unchecked footprint is explicitly not a passed physical aperture or continuous-pupil guarantee.

At axis/half-source-field/edge, clear counts out of812are W680/666/316, M732/678/490, T812/684/254. Axis W/M loss is primarily the separate MP limiting the larger main-stop pupil; it is expected in this two-opening surrogate and not evidence of an aiming failure. Source endpoint losses and footprint limits remain explicit. These counts are not measured relative illumination.

Geometric D80axis/half-field/edge inµm is W21.39/18.51/361.09, M11.68/18.59/81.36, T19.52/21.81/41.14. The exact wide corner remains badly aberrated and clipped. This is not a full-field production pass. No effort was spent forcing exact-wide-edge wave MTF to pass.

All36targeted native geometric/scalar-diffraction MTF results converge (grid cap128), at axis and reported central/moderate angles, for intended full-SP and separate nativef8static cases. At20lp/mm, full-SP scalar sagittal/tangential values are W.738/.738onaxis and.721/.832at21.879°, M.840/.840onaxis and.706/.763at10.958°, T.759/.759onaxis and.796/.728at7.432°. These make a materially usable **conditional central/moderate intended-aperture simulation**, not a measured factory result. Diffraction MTF uses the existing engine implementation; independent ray-characteristic MTF remains geometric only. Conditional contrast after clipping is not illumination.

The remaining blockers are actual SP/MP openings and their control law, finished rims, factory illumination, full-edge performance and browser QA. This bounded assessment does not rerun the former full workflow or claim a new full certification, delivery readiness, factory-exact Rx, app pass or release. No ZIP, upload, public/repository change or delivery was performed. The original494-file result and prior candidates stay untouched;7a.m.Eastern is not automatic delivery authorization.
