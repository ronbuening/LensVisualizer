# Enna Tele-Sandmar 100 mm f/4.5 patent representative

## Patent Reference and Design Identification

**Patent:** US 2631497 A  
**Inventor:** Franz Schlegel  
**Assignee:** Harry J. Graw  
**Filed:** 21 February 1952  
**Granted:** 17 March 1953  
**Title:** Telephoto Objective  
**Example details:** Sole 100 mm f/4.5 numerical example and matching repeated claim.

The original patent does not name Enna or Tele-Sandmar. The original Geiss-America sales manual describes a German-made 100 mm f/4.5 Tele-Sandmar for the Argus C3, with stops from f/4.5 to f/22 and rangefinder coupling. Collector sources name Enna-Werk. The focal length, aperture and the C3's in-body shutter behind the lens support a strong but circumstantial association with the patent. No published production element count or cross-section was found, and the seller-hosted patent engraving could not be verified.

The manual carries a 1951 copyright and says "U.S. Patents Pending", preceding the patent application in 1952. This chronology does not prove all production versions had identical optics. The commercial literature and matching-focal patent example support a qualified representative, without proving exact factory melt, every production variant or a teardown-level identity. The manual is mirrored by a collectors group rather than held on a manufacturer-controlled site.

## Optical Architecture

Four elements form three air-separated optical groups: a cemented front doublet and two separate rear singlets. The patent's two groups are functional positive-front and negative-rear groups, not an assertion of two air-separated components.

The front group is positive and the rear group negative, giving a telephoto arrangement. The 29 mm inter-group interval is retained. The source addresses camera-wall or shutter apertures that can cause vignetting, but those housing components are not reconstructed, and its general anti-vignetting claims do not constitute validation of this model.

## Element-by-Element Analysis

### L1 and L2: positive front cemented doublet

L1: source nD = 1.62398, V = 47.0; unmatched source glass. L2: source nD = 1.74066, V = 27.2; unmatched source glass. L1 is biconvex and L2 biconcave, sharing S2. The source's relatively thick 10 mm positive element and 1.2 mm negative element are preserved, not thinned to fit a schematic.

The index/dispersion contrast is consistent with a positive cemented correction group, but no exact modern glass pair, isolated-element focal length or measured color correction is established.

### L3: rear negative meniscus

Source nD = 1.61008, V = 46.0; unmatched source glass. Both radii are negative; the stronger concave surface faces the object. Its 0.8 mm center thickness and both radii remain literal.

### L4: rear plano-convex positive singlet

Source nD = 1.72719, V = 28.0; unmatched source glass. The front surface is exactly flat in the source. Its 0.03 mm air separation from L3 is retained as air, not cemented or increased to ease geometry. The negative/positive rear pair forms the functional rear group.

## Glass Identification and Selection

The patent explicitly defines its index column as sodium D at 589.3 nm and identifies the dispersion numbers as Abbe numbers. All four elements use the sodium-D reference (`indexReference: "D"`); the sodium-D to helium-d index difference is about 1.2–2.3 × 10⁻⁴, larger than the patent's five-decimal print precision. No exact melt is identified. No full dispersion curves, anomalous partial dispersion or vendor catalog identities are established.

All four source index/Abbe pairs are preserved. The original example and repeated claim agree. No spectral or optical fitting was performed to improve focal length or ray success.

## Focus Mechanism

The representative is infinity-only. Literal paraxial calculation gives EFL 100.026642611 mm and BFL 39.071980372 mm. The image interval is calculated, not a tabulated source back gap.

The patent prose describes a BFL/f ratio substantially below 0.4 and of the order of 0.2; the numerical example gives approximately 0.39062. This tension is preserved. The model is not retuned to force a 20 mm back focus. No finite-focus motion, camera rangefinder coupling or retail minimum focus is certified.

## Stop and Aperture Qualifications

The source says the diaphragm or shutter is shown substantially midway between the second and third elements. The model realizes this as an exact 14.5/14.5 mm split of the 29 mm gap. That is a reasonable disclosed construction inference, not a published precise coordinate or mechanical tolerance.

Source clear apertures are absent. The inferred front-group semi-diameter is 15.5 mm and the rear-group semi-diameter 9 mm, selected separately as the largest half-millimeter grid values satisfying default 0.9 geometry limits. The figure is drawn to scale: its axial dimensions agree with the numerical example within 1 %, and its optical rims indicate semi-diameters of about 11.1 mm at the front and 6.4 mm at the rear. The retained model rims are larger; comparison and correction are open for the SD pass. These dimensions were not selected by optimizing ray results.

Full inferred-cap clearance from the stop plane is 12.786010 mm on the front side and 11.025989 mm on the rear side. Native f/4.5 pupil construction yields a physical iris radius of 6.738905554 mm, not a source hole diameter. The UI range through f/22 is authored convenience, not complete validation of a retail diaphragm range.

No source radius, spacing, plane surface or glass value is modified. No rim exception, spacer, aperture clipping surface or geometry-limit override is applied.

## Verification Summary

Native construction gives EFL 100.026642611 mm at f/4.5; strict isolated TypeScript and independent scoped source/geometry reviews accompany the handoff. Literal optical length is 42.73 mm and calculated image-plane coordinate 81.801980372 mm from the first vertex.

A sparse 25-pupil-point plus chief-ray diagnostic at five nominal 36 × 24 mm frame fractions gives 26 successful optical traversals through 0.85 field and 23 successful/3 clipped at the corner. The saved traces end at the rear optical surface, not at a separately tested image-plane landing. Counts are not throughput fractions, full pupil integration, MTF or certified commercial-format coverage. Clipping is retained rather than removed by changing source optics or inferred apertures.

The representative remains hidden. Full current-corpus/application tests, lint/format integration, build, browser and MTF checks are deferred, not passed. Scoped acceptance does not imply release or deployment.

## Sources

- [Original US2631497](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/2631497), complete three-page USPTO scan; example, claim, sodium-D definition and approximate stop statement on PDF page 3.
- [Geiss-America Tele-Sandmar sales manual](https://www.arguscg.org/manuals/sandmar/trutele.pdf), primary commercial literature mirrored by the Argus collectors group.
