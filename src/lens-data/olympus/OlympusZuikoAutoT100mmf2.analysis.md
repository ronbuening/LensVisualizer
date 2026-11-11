## Patent Reference and Design Identification

**Patent:** US 4,435,049 A  
**Filed:** December 7, 1981  
**Granted:** March 6, 1984  
**Priority:** December 8, 1980, JP55-172099  
**Inventors:** Yoshiaki Horikawa; Toshihiro Imai  
**Assignee:** Olympus Optical Co., Ltd.  
**Title:** Telephoto lens system  
**Example details:** Embodiment 5, repeated in claim 8; normalized f=1, explicit uniform 100× modeling scale.

This hidden draft is a qualified representative of the Olympus Zuiko Auto-T 100mm f/2, not an exact factory prescription. The [complete patent](https://patentimages.storage.googleapis.com/d1/16/b1/339ccd5461a332/US4435049.pdf) supplies the literal radii, spacings and seven n/ν pairs.

1. The [Olympus OM-4 brochure](https://esif.world-traveller.org/om-sif/bodygroup/manuals/om_4_brochure.pdf), PDF39/printed38, confirms 100mm f/2, seven elements/six groups and 24° full field.
2. Olympus is the patent assignee and the disclosed F2 architecture agrees with these construction and aperture specifications.
3. A secondary Photons to Photos association identifies Embodiment 5. It is supporting identification evidence, not primary proof of a unique factory prescription. The inspected maker page contains no optical section.

The maker's 0.7m closest focus and physical specifications identify the commercial lens but do not supply a numerical focus law. The separate older 100mm f/2.8 model and its patent are not this lens.

## Optical Architecture

The system contains three positive front meniscus singlets, a negative meniscus, a rear cemented pair and a final positive singlet. Seven elements form six groups; source surface 10 is the cemented interface. The complete thirteen radii and twelve physical intervals are retained at 100× normalized scale. Computed EFL is 99.9945705375mm, not forcibly reset to 100mm. Powered track is 71.09mm. Computed paraxial image gap is 44.9089774108mm and is frozen before ray tests; it is not a printed source backfocus. Total image-plane coordinate is 115.9989774108mm.

Figure 1 is a common architectural drawing rather than a demonstrated exact Embodiment-5 engineering drawing. Its first/last vertex span, x=450 to784 pixels, is mapped to 71.09mm. The smaller top/bottom rim extents are rounded down to0.1mm for cap estimates. Approximately three pixels correspond to0.64mm, in addition to unknown schematic distortion. Glass outlines are not measured optical clear apertures.

No explicit iris is located in that drawing: the d8 leader denotes a gap, not an iris. A midpoint stop within the20.7mm central gap is an explicit authoring hypothesis, split10.35+10.35mm without changing the total. Iris size is derived by the native engine for F2. No rim or stop choice was fitted to ray outcomes.

## Element-by-Element Analysis

|Element|Source n|Source ν|Form|
|---|---:|---:|---|
|L1|1.6170|62.8|Positive front meniscus|
|L2|1.4970|81.6|Positive low-dispersion meniscus|
|L3|1.6425|58.4|Positive meniscus|
|L4|1.7618|26.5|Negative meniscus before the central gap|
|L5|1.5814|40.8|Negative component of the rear cemented pair|
|L6|1.7200|42.0|Positive partner of the rear cemented pair|
|L7|1.6968|55.5|Final positive singlet|

The patent distributes correction among the front positive components, the negative fourth component and the rear components. Isolated element powers below are paraxial computations in air, not the powers of the cemented elements in situ or a measured aberration budget.

|Element|Computed isolated-air focal length (mm)|
|---|---:|
|L1|126.655|
|L2|188.933|
|L3|263.592|
|L4|-46.152|
|L5|-37.883|
|L6|40.387|
|L7|98.812|

## Glass Identification

The source table identifies n and ν without an explicit reference wavelength. This draft uses a conventional helium d-line interpretation as a disclosed inference, not a published spectral fact. No catalog glass or actual factory melt is identified. Source n/ν values are retained exactly.

The patent discusses anomalous dispersion and its chromatic benefit. Abbe numbers alone cannot reproduce that anomalous partial dispersion: the draft lacks source partial-dispersion coefficients and cannot claim faithful chromatic performance. Engine dispersion estimates must remain qualified; no unprovided dispersion value is invented.

## Focus Mechanism

This is an infinity-only static reconstruction using the supported sentinel. It does not borrow floating-focus movement from another patent embodiment or fabricate travel from the retail0.7m specification. The single computed image gap is unchanged after tracing.

A small focused diagnostic uses25 pupil-grid samples plus a separate chief ray, duplicating the center: at0°,26 reach; at6°,23 reach and3 clip; at9°,19 reach,2 clip and5 are blocked during launch; at12°,16 reach,3 clip and7 are blocked during launch. All tested chief rays aim and reach. Launch blockage is distinguished from downstream clipping and is not labeled an aiming convergence failure. Counts are not illumination percentages or a full optical-performance validation.

Strict isolated TypeScript and native construction/geometry checks pass without overrides. Peripheral loss, stop-location uncertainty, inferred rims and incomplete anomalous dispersion remain material qualifications. Full integration, rendered-viewer and comprehensive optical acceptance gates are pending; this hidden draft is not a finished delivery.

## Aspherical Surfaces

All supplied surfaces are spherical. No asphere is supplied, inferred or fitted.
