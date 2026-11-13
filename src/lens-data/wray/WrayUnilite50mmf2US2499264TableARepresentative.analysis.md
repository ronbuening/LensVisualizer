# Wray Unilite 5cm f/2: qualified Table B reconstruction

## Patent Reference and Design Identification

**Patent:** US 2,499,264 A\
**Inventor:** Charles Gorrie Wynne\
**Assignee:** Wray (Optical Works) Limited\
**Filed:** 7 February 1945\
**Granted:** 28 February 1950\
**Priority:** United Kingdom, 25 February 1944\
**Example details:** Table B / Figure 2, repeated in claim 5; normalized lengths multiplied by 50.

The patent prints the assignee as Wray (Optical Works) Limited; the structured metadata retains that legal name. The current main-checkout validator rejects its parentheses, so the optical checks below used a scratch copy with that metadata alone normalized to Wray Optical Works Limited.

This model represents Table B, the patent’s Figure 2 embodiment. Both the klassik-cameras Unilite section and the oldlens.com redraw match Figure 2, including the thick biconvex rear element and its strongly curved back face. The validator measured rear/front axial thickness ratios of approximately 1.29 in the public diagram, 1.22 in Table B and 0.53 in Table A; the other component proportions also favor Table B. Table A / Figure 1 is the patent’s other embodiment, not part of this prescription. This supports the example choice without certifying exact factory radii or glass. The normalized lengths are multiplied by 50 for the nominal 50 mm design. The oldlens front-ring photograph reads “50mm”; the requested metric display name uses its equivalent 5cm, with marketing/design focal lengths both 50 mm, rather than claiming a 2-inch engraving.

The patent supplies a five-element, four-component f/2 design assigned to Wray. A contemporary Focal Press Wrayflex Guide describes a 2-inch/5-cm f/2 Unilite and gives a 46° diagonal field, f/22 minimum aperture and 3-foot close focus. That guide is a secondary publication, not a manufacturer-authored manual. A collector-hosted historical section associates the still-camera Unilite family with this patent; its original publication provenance is not independently established. These provide a family bridge and, together with the two Figure 2 sections, support the Table B selection; they do not establish exact production radii or glass.

## Optical Architecture

Five spherical elements form four components: a front positive singlet, a cemented positive/negative doublet, a rear negative meniscus and a thick biconvex positive rear singlet. The cemented interface is S4. The distinct boundaries S2/S3 and S7/S8 have zero axial air spacing, as printed. Their different curvatures create positive off-axis air separation; they must not be collapsed into cemented interfaces or separated by invented spacers.

The iris lies in the central air gap, but its precise location is not dimensioned. The authored location is the midpoint of the geometrically clear interval for the inferred surface apertures, not an optimized or source-proven position. At the authored S5/S6 optical rims this is 7.195279 mm behind the S5 vertex; the remaining interval is 6.744721 mm, preserving Table B’s 13.94 mm central air gap.

## Element-by-Element Analysis

### L1: front positive meniscus

Assumed nd = 1.691, νd = 54.8; unmatched source mean-index glass; isolated-element f = +56.88 mm. The positive meniscus contributes front collecting power. Table B uses a higher-index glass here than Table A. The mean index is not explicitly tied to the d line in the patent, so the nd notation is a disclosed engine convention rather than a source statement. The isolated-element value is the paraxial thick-lens power in air, not its contribution in the assembled objective.

### L2 and L3: cemented doublet

L2: assumed nd = 1.613, νd = 57.6; unmatched source mean-index glass; isolated f = +32.11 mm. L3: assumed nd = 1.700, νd = 30.3; unmatched higher-index, lower-Abbe glass; isolated f = −21.58 mm. Both are menisci; L2 is positive and the thin cemented L3 is negative. Their center thicknesses are 5.245 mm and 0.760 mm. They share S4. Their positive/negative power pairing and differing dispersion provide a plausible chromatic-balancing mechanism, not proof of production color correction or glass catalog identity.

### L4: rear negative meniscus

Assumed nd = 1.613, νd = 36.9; unmatched source mean-index glass; isolated f = −81.42 mm. Its strongly curved surfaces contribute negative power behind the stop. Its center thickness is 4.560 mm. No quantitative aberration allocation is claimed.

### L5: thick biconvex rear positive element

Assumed nd = 1.621, νd = 60.3; unmatched source mean-index glass; isolated f = +39.61 mm. The 7.100 mm thick biconvex element has a weakly curved front face (R8 = +149.500 mm) and a strongly curved rear face (R9 = −28.910 mm). Its thickness relative to L1, and its curved rear outline, are the clearest Figure 2 matches in both public Unilite sections. Its front boundary is distinct from L4 despite zero axial separation at the vertex.

## Glass Identification and Selection

Only the printed mean indices and Abbe numbers are used. No modern catalog glass, melt, partial dispersion or measured spectral correction is established. The engine treats the supplied mean indices as d-line indices; this is an assumption and limits chromatic claims. Table B gives five different index/Abbe pairs: L1 1.691/54.8, L2 1.613/57.6, L3 1.700/30.3, L4 1.613/36.9 and L5 1.621/60.3. L2 and L4 share an index but not an Abbe number. All surfaces are spherical.

## Focus Mechanism

The reconstruction is infinity-only. No finite-focus law, motion or travel has been authored. The commercial 3-foot claim is not validated by this model. The terminal image interval is calculated from the literal paraxial prescription (22.168895344 mm, stored as 22.168895 mm), not transcribed from a published BFL. No source radius, spacing or index was adjusted to set that plane.

## Inferred Apertures and Stop

Surface semi-diameters inferred from Figure 2 are 17.6 mm at S1/S2, 10.8 mm at S3/S4, 8.0 mm at S5, 8.1 mm at S6, 10.9 mm at S7, and 14.6 mm at S8/S9. The smaller S5/S6 optical rims exclude the square mechanical extensions in the drawing. The figure supplies proportions, not certified factory clear apertures. The aperture audit requests no increases for the axial f/2 beam.

The iris is the midpoint between the S5 and S6 optical rim positions along the axis. It leaves approximately 3.070224 mm clearance on each side and preserves the printed 13.940 mm gap. Native f/2 pupil construction derives an iris semi-diameter of 7.082180 mm. Neither this radius nor its axial location is a source dimension. The earlier Table A stop-clearance trial is historical and does not describe this Table B model. The UI stop range to f/22 follows secondary product context, not validation at every setting.

## Verification Summary

The Table B optical checks used an otherwise identical visible scratch copy with only the assignee punctuation normalized, because the required literal legal name is currently refused by the main-checkout validator. Native construction gives EFL 49.998145399 mm at f/2, BFD 22.168895344 mm and total track 59.603895 mm. The normalized model gives EFL 0.999962908; multiplication by 50 reproduces the millimetre model and leaves f/2 unchanged. Every stored optical length was checked by script against the normalized value, within six-decimal print rounding. No source curvature, thickness or index was optimized.

Surface validation passes; the axial aperture is iris-limited at f/2 with no rim raises, and the image-circle floor audit finds no undersized surfaces. Explicit signed-sag samples confirm nonnegative separation at both zero-vertex air gaps. Longitudinal spherical aberration at pupil fractions 1.0 / 0.85 / 0.7 / 0.5 is +0.231 / −0.160 / −0.229 / −0.162 mm relative to the near-axis crossing.

The guide’s 46° diagonal field remains the declared 23° half-field on the requested 24 × 36 mm format. The field audit reaches image height 20.944480 mm, 96.741% of the 21.65 mm nominal corner; the corner chief ray itself is clear at 23.735870°. The declared field, rather than a chief-ray rim limit, explains the shortfall. These are Table B results and replace the old Table A pupil-sample counts. Full-aperture corner quality, throughput and MTF are not certified. The auxiliary clearap helper failed to obtain the axial stop ray and its upper/lower bundle rays, so it supplies no additional full-bundle clearance claim.

The file remains hidden. Full application tests, lint/build, browser rendering and deployment checks are deferred. The required legal-name validation conflict remains open; the scratch optical passes do not establish that the delivered file passes ingest.

## Sources

- [US 2499264 A](https://patents.google.com/patent/US2499264A/en), original USPTO four-page scan inspected; Table B, Figure 2 and claim 5. Table A/Figure 1 is the other embodiment.
- [Focal Press Wrayflex Guide](https://www.cameramanuals.org/pdf_files/wrayflex.pdf), cover and Unilite description. Contemporary secondary source, not Wray-authored documentation.
- [Collector-hosted Wrayflex history](https://www.klassik-cameras.de/Wrayflex.html), qualified family context; exact factory prescription not established.

- [Unilite section at klassik-cameras](https://www.klassik-cameras.de/wray-unilite2.jpg), Figure 2 proportions.
- [Unilite at oldlens.com](https://oldlens.com/unilite50f20.html), Figure 2 redraw and [front-ring photograph](https://oldlens.com/R1040320b.jpg) engraved “50mm”; the metric engraving determines the 5cm display choice.
