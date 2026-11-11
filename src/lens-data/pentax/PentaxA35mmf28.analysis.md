## Patent Reference and Design Identification

**Patent:** JP S50-138824 A  
**Filed:** April 24, 1974  
**Published:** November 6, 1975  
**Inventor:** Yasuo Takahashi  
**Applicant:** Asahi Optical Co., Ltd.  
**Title:** Wide-angle lens  
**Example details:** Sole numerical example (実施例), original PDF2/printed116; Figure1 on PDF3. All lengths scaled uniformly0.35 from source f=100.

This hidden, qualified reconstruction represents the SMC Pentax-A35mm f/2.8 family, not a proven factory prescription. The complete Japanese publication was recovered through [J-PlatPat](https://www.j-platpat.inpit.go.jp/) by publication number; [publication identity](https://patents.google.com/patent/JPS50138824A/en) is also indexed publicly.

1. The [Pentax A-lens maker manual](https://www.cameramanuals.org/lenses/pentax_smc_a_lenses.pdf), PDF39/printed36, directly names the A35mm f/2.8 and shows six separate elements with the distinctive negative front component, positive middle components and negative fourth element.
2. Maker specifications give six elements/six groups, f/2.8 and63° full field. These agree with the general source configuration and aperture; source plots use64° full field.
3. The maker section supports a probable production association, not unique numerical factory identity. No continuity between the older M35 and A35 is assumed.

The Japanese table explicitly prints negative R7 and R9. The related US3963325 scanned tables print positive signs, inconsistent with the illustrated negative fourth element and resulting in a very different numerical system. This model transcribes the whole Japanese example; it is not a repaired or mixed US table. The ancillary printed relation F1=-100.46=F/−0.922 remains inconsistent and is not used to alter radii or glass values.

## Optical Architecture

The six spherical air-spaced singlets form a retrofocus wide-angle system. The first meniscus is negative; L2 and L3 are positive; L4 is biconcave negative; L5 is a positive meniscus, convex toward the image; L6 is positive. A nearly plane but finite source radius14544.54 is retained literally, not replaced by a plane.

Uniform0.35 scaling gives computed EFL35.0838985903mm, not a forced nominal35mm. Powered track is41.902mm. The image gap37.4706038533mm is computed once from the literal paraxial system and frozen before ray testing; it is not a printed backfocus. The resulting image coordinate is79.3726038533mm.

Source Figure1's first/last vertices x=600/875 pixels map to the41.902mm track. Smaller top/bottom rim extents are rounded down to0.1mm; the first element's concave rear face excludes its bevel. Approximately three pixels correspond to0.46mm, plus unknown schematic distortion. These are inferred caps, not measured optical apertures.

The named maker section places the diaphragm between L3 and L4; neither source gives a numerical iris coordinate or clear opening. The model assumes the midpoint of that8.74-native-unit gap, splitting it into4.37+4.37 before0.35 scaling. This is an explicitly inferred station, not a published patent distance. The native engine derives iris size for F2.8. No cap or stop was fitted to ray outcomes.

## Element-by-Element Analysis

|Element|Literal n|Literal ν|Form|
|---|---:|---:|---|
|L1|1.51633|64.1|Negative front meniscus|
|L2|1.80610|40.8|Positive singlet with nearly plane rear surface|
|L3|1.75700|47.9|Positive singlet|
|L4|1.80518|25.4|Biconcave negative singlet; both Japanese signs preserved|
|L5|1.75700|47.9|Positive meniscus, image-side convex|
|L6|1.74320|49.4|Positive rear singlet|

|Element|Computed isolated-air focal length (mm)|
|---|---:|
|L1|-37.950|
|L2|56.146|
|L3|26.523|
|L4|-18.071|
|L5|40.993|
|L6|78.920|

These are isolated-in-air paraxial estimates from the source curvatures and center thicknesses, not measured individual aberration contributions.

## Glass Identification

Japanese text specifies d-line and the plots distinguish d and g. This draft deliberately interprets the Japanese reference as helium d. The related US wording says sodium d, so the family-level spectral convention is not unambiguous. This is a source-bound modeling choice, not a solved translation discrepancy or numerical sodium-to-helium conversion. All refractive indices and Abbe numbers remain literal.

No glass catalog identity, factory melt or partial-dispersion data is supplied. Chromatic behavior beyond the source n/ν pairs is estimated by the engine and cannot establish factory chromatic fidelity.

## Focus Mechanism

This reconstruction is static infinity-only using the supported sentinel. No finite-distance cam or unit-focus travel is invented. The computed image gap is not refitted after tracing. Original source32° half-field is distinct from the maker31.5° retail half-field used for the advertised operating envelope.

The small diagnostic uses25 pupil-grid samples plus a separate chief ray, duplicating the center. At0°,26 reach; at16°,23 reach and3 clip; at24°,16 reach and10 clip; at31.5°,12 reach and14 clip. All tested chief rays aim and reach, with no blocked or unaimed samples in this grid. Substantial edge loss remains a qualification. These counts are not illumination percentages or full MTF validation.

Strict isolated TypeScript and native construction/geometry checks pass without overrides. These focused checks do not establish full corpus integration, compiled viewer acceptance, comprehensive pupil/field behavior or chromatic accuracy. The draft remains hidden and is not a finished delivery.

## Aspherical Surfaces

All twelve refracting faces are spherical. No asphere is supplied or invented.
