# Enna Lithagon 35 mm: source f/2.5 representative

## Patent Reference and Design Identification

**Patent:** US 2983191 A  
**Inventor:** Johann Lautenbacher  
**Assignee:** Enna-Werk Optische Anstalt Dr. Appelt K.G.  
**Filed:** 15 February 1956  
**Granted:** 9 May 1961  
**Priority:** Germany, 19 February 1955  
**Example details:** Main numerical example, normalized f = 1, uniformly scaled by 35.

This is a qualified representative for the historical Lithagon 35 mm f/2.8 family, not an identified factory prescription. The patent example is f/2.5 with a 65° full field. The primary Enna sales brochure describes a 35 mm f/2.8 lens with a 64° field, six elements and an ordered section consistent with the patent's six-element/five-group design. These aperture and field differences remain explicit; the source is not stopped or relabeled to pretend numerical identity.

The brochure is manufacturer-authored content mirrored by a collector, not a present manufacturer-hosted page. It distinguishes standard and automatic pre-set products with different near-focus specifications. Its statement of matching quality/specification does not prove identical numerical production optics across all versions. Uniform 35 mm scaling is representative, not a measured retail focal length.

A secondary historical page associates the product with this design but has conflicting patent references: prose DE1102435 versus image caption DE1062028. The original US publication and primary ordered section are the principal evidence; the secondary citation is not silently harmonized. Existing Lithagon 35 mm f/3.5 and Super-Lithagon 35 mm f/1.9 are different prescriptions and not additional versions counted here.

## Optical Architecture

A large front negative meniscus precedes a modified triplet-like rear assembly across a substantial air gap. Two closely spaced positive singlets are followed by a biconcave negative singlet and a rear cemented negative/positive pair. Six elements form five groups; S10 is the cemented interface.

The front negative member provides the retrofocus arrangement required for a long rear image distance. The source explains constraints on front-group spacing, surface power and rear-group correction. Those design claims are source statements, not independently measured performance of this reconstruction.

## Element-by-Element Analysis

### L1: front negative meniscus

nd = 1.51821, νd = 65.2; the index exactly matches the helium-d catalog value of PK2. The meniscus is concave toward the rear assembly. Its large separation from L2 is retained exactly after uniform scaling. The source calls the indices mean refractive indices; exact helium-d catalog matches for five of the six elements establish the d reference.

### L2: positive singlet

nd = 1.74400, νd = 44.7; unmatched high-index source glass, using the d reference established by the other five elements. This positive element begins the rear assembly. Its small air separation from L3 is retained, not merged into a cemented interface.

### L3: positive meniscus

nd = 1.69347, νd = 53.5; the index exactly matches the helium-d catalog value of LaF2. The main example table prints 53.5, while the repeated claim table prints 53.7. This model uses the main example and records the conflict; no source-value correction or spectral fit is made. An original German scan has not resolved the discrepancy.

### L4: biconcave negative singlet

nd = 1.68893, νd = 31.1; the index exactly matches the helium-d catalog value of SF8. This negative element lies between positive portions of the rear assembly. The patent discusses a low-Abbe negative element in its correction scheme; no quantitative aberration allocation is independently established here.

### L5 and L6: rear cemented pair

L5: nd = 1.66680, νd = 33.1; the index exactly matches the helium-d catalog value of SF19. L6: nd = 1.69100, νd = 54.9; the index exactly matches the helium-d catalog value of LaK9. The negative/positive pair shares the source's S10 interface; no extra air layer is inserted. No modern melt or catalog identity is asserted.

Isolated-element focal lengths are not independently certified; all source radii and thicknesses are available in the typed prescription rather than inferred from product photographs.

## Glass Identification and Selection

The original publication identifies Abbe numbers and describes refractive indices as mean indices. Five of the six indices equal helium-d catalog values exactly: PK2 (L1), LaF2 (L3), SF8 (L4), SF19 (L5) and LaK9 (L6). This agreement establishes the d reference; it does not identify a historical supplier or melt. L2 remains unmatched. The source's 53.5/53.7 conflict is preserved, not hidden through rounding or optimization. No anomalous dispersion, full spectral melt, measured color correction or unique glass vendor is established.

## Focus Mechanism

The model preserves the source infinity prescription and printed BFL of 1.00950, scaled to 35.3325 mm. Literal paraxial computation gives 35.327695235 mm; the resulting +0.004804765 mm difference remains in the source image plane. No refocus or optical retuning removes it.

No finite-focus movement is reconstructed. The brochure gives about 1½ feet (approximately 0.46 m) for the standard-mount lens and 9 inches for the pre-set version. The standard-mount value is recorded as catalog.closeFocusM.marketing; the versions are not conflated. No manufacturing scale or focus travel is inferred from the nominal 35 mm label.

## Aperture and Iris Assumptions

The front element uses 19 mm semi-diameters and the rear assembly uses a common 9.5 mm. These arise from an explicit 2:1 schematic-height hypothesis followed by the largest half-millimeter rear-cap grid satisfying default 0.9 geometry limits. They are not calibrated clear-aperture measurements and were not selected by improving ray results.

Neither patent nor brochure supplies a reliable iris mark or coordinate. The model therefore places a hypothetical iris at the midpoint of the source l3 gap, between L3 and L4: 1.9775 mm on each side. Full inferred-cap clearances are 1.047761 mm and 0.576071 mm. Native f/2.5 pupil construction gives a physical iris radius of 7.246861836 mm, a model result rather than a source diameter.

The source f/2.5 design and marketed f/2.8 family are separately recorded. The stop range through f/22 follows brochure context, but complete performance at every setting is not verified. No source radius, thickness, index, spacer, rim extension or geometry-limit override is used to force acceptance.

## Verification Summary

Native construction gives EFL 34.996580090 mm at f/2.5. Strict isolated TypeScript and independent scoped source/geometry checks accompany the handoff. The printed source image plane is retained.

Two sparse diagnostics use 25 sampled pupil points plus the chief: nominal 36 × 24 mm frame angles and the explicit source 32.5° half-field. Each gives 26 successful optical traversals at axis, half and 0.7 field; 23 successful/3 clipped at 0.85 field; and 18 successful/8 clipped at the edge. Traces terminate at the last optical surface, not at a tested image-plane landing. Counts are not throughput fractions, full pupil integration, MTF or source-field coverage certification.

The representative remains hidden. Current-corpus compatibility, full-app tests, lint/format integration, build, browser and MTF checks are deferred, not passed. Independent acceptance is limited to the qualified pre-integration scope.

## Sources

- [Original US2983191](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/2983191), three-page USPTO scan, main example and repeated claim on PDF page 3.
- [Enna product brochure](http://www.ihagee.org/Lenzen/ODI3-EnnaLenzen.pdf), primary maker content on a collector mirror; both pages inspected.
- [Secondary retrofocus history](https://zeissikonveb.de/start/objektive/sonstige_objektive/retrofokus.html), qualified association with conflicting patent numbers retained.
- [Secondary product section](https://photobutmore.de/exakta/objektive/enna/lithagon2835-schnitt.jpg), contextual cross-check only; primary brochure preferred.
