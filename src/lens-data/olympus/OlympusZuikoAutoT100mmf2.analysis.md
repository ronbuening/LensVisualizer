## Patent Reference and Design Identification

**Patent:** US 4,435,049 A  
**Filed:** December 7, 1981  
**Granted:** March 6, 1984  
**Priority:** December 8, 1980, JP55-172099  
**Inventors:** Yoshiaki Horikawa; Toshihiro Imai  
**Assignee:** Olympus Optical Co., Ltd.  
**Title:** Telephoto lens system  
**Example details:** Embodiment 5, repeated in claim 8; normalized to f = 1 and scaled uniformly ×100.

The model is a patent design associated with the Olympus Zuiko Auto-T 100mm f/2, not a confirmed factory prescription. The [complete patent](https://patentimages.storage.googleapis.com/d1/16/b1/339ccd5461a332/US4435049.pdf) supplies the radii, spacings and seven n/ν pairs.

1. The lens table of the [Olympus OM-4 brochure](https://esif.world-traveller.org/om-sif/bodygroup/manuals/om_4_brochure.pdf) (printed page 38) lists the 100mm F2 with seven elements in six groups, a 24° angle of view, F2–22, 0.7 m minimum focus, 520 g and a 55 mm filter.
2. Olympus is the patent assignee, and the patent's F/2 seven-element, six-group telephoto matches that construction. The [MIR Zuiko 100mm page](http://www.mir.com.my/rb/photography/hardwares/classics/olympusom1n2/shared/zuiko/htmls/100mm.htm) reproduces a sectional drawing with the same sequence: three positive menisci, a negative meniscus, a long central gap, a cemented biconcave–biconvex pair and a biconvex singlet. MIR places the lens in the high-end Zuiko series introduced in 1982–84, after the patent's 1980 priority.
3. The match holds at the level of the patent family. All five embodiments are seven-element, six-group designs with similar track and back focus. Embodiment 5 follows a secondary Photons to Photos association; no Olympus source names an embodiment, so the choice is unconfirmed.

The older five-element 100mm f/2.8 is a separate design.

## Optical Architecture

The system contains three positive front menisci, a negative meniscus, a rear cemented pair and a final positive singlet: seven elements in six groups, with patent surface 10 as the cemented interface. The patent divides it at the 20.70 mm central gap into a front group, L1–L4 (composite focal length f1234 = 1.86f, condition 1), and a rear group, L5–L7; the diagram labels them FRONT and REAR. The computed EFL is 99.995 mm and is not rescaled to 100 mm. The track from the first to the last surface is 71.09 mm. The patent prints no back focus; the paraxial image gap of 44.909 mm puts the image plane 115.999 mm behind the first surface, a telephoto ratio of 1.16.

Fig. 1 is a single drawing for all five embodiments, not a scale drawing of Embodiment 5. The semi-diameters are read from it with its first-to-last vertex span set to the 71.09 mm track, taking the smaller of the upper and lower extents and rounding down to 0.1 mm. The outlines are schematic glass edges, not measured clear apertures. Fig. 1 ends the concave rear faces of L3 and L4 and the concave front face of L5 short of their element edges with flat lands, and the model draws them at the same share of the edge; they lie outside the traced wide-open beams.

The drawing marks no iris; the leader at d8 labels the gap. The stop is placed at the midpoint of the 20.70 mm central gap (10.35 + 10.35 mm), and its radius is set by F/2. Neither the rims nor the stop were adjusted to ray-trace results.

## Element-by-Element Analysis

|Element|nd|νd|Shape|Glass (catalog equivalent)|f (mm)|
|---|---:|---:|---|---|---:|
|L1|1.6170|62.8|Positive Meniscus|S-PHM51 (OHARA)|+126.7|
|L2|1.4970|81.6|Positive Meniscus|FCD1 (HOYA)|+188.9|
|L3|1.6425|58.4|Positive Meniscus|S-BSM36 (OHARA)|+263.6|
|L4|1.7618|26.5|Negative Meniscus|S-TIH14 (OHARA)|−46.2|
|L5|1.5814|40.8|Biconcave Negative|PBL25 (OHARA)|−37.9|
|L6|1.7200|42.0|Biconvex Positive|S-LAM58 (OHARA)|+40.4|
|L7|1.6968|55.5|Biconvex Positive|S-LAL14 (OHARA)|+98.8|

Focal lengths are paraxial values for each element alone in air; L5 and L6 together form a weak positive doublet (f ≈ 946 mm, f56/f = 9.46).

The patent spreads the front power over three menisci. High-index L1 and L3 (condition 2) keep their curvatures shallow, and the anomalous-dispersion L2 (condition 3) corrects colour from the middle position, where it adds the least spherical aberration and coma. The thick, weak L3 (d5 = 0.117f, f3/f = 2.64; conditions 5 and 8) controls spherical aberration, astigmatic difference and sagittal coma flare. The dense-flint L4 (condition 7) corrects the spherical aberration of the three positive menisci, and the thick L5–L6 pair (condition 6) balances upper and lower coma.

## Glass Identification

The patent prints n and ν without naming a spectral line. All seven pairs match catalog rows at the d line (within 0.0001 in nd and 0.05 in νd), so they are read as d-line values. The labels are catalog equivalents, not confirmed production glasses; the older lead-glass PBL25 is used for L5, where it ties with S-TIL25.

The patent names the second component an anomalous-dispersion glass; its 1.497/81.6 is the FCD1 / FK01 fluorophosphate class. No partial-dispersion data are printed, so L2 traces on the FCD1 catalog curve. With these catalog curves the paraxial g-line focus lies 0.09 mm behind the d-line focus, as the patent's Fig. 6 spherical-aberration plot draws it. MIR reports ED glass in the front of the production lens; Olympus's tables do not mark it.

## Focus Mechanism

The model is fixed at infinity. The patent tabulates only the infinity state and describes no focusing motion. Olympus lists a 0.7 m minimum focus; MIR gives 1:5 at that distance and describes floating rear elements for close-range correction. The OM-4 brochure's lens table marks its automatic close-distance correction on several lenses but not on the 100mm F2, so floating focus is unverified and no close-range state is modelled. The stop position and rims are inferred, and at full aperture the rims vignette the 12° field corners.

## Aspherical Surfaces

All surfaces are spherical.
