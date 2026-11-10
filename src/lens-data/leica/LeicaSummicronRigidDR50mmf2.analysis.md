## Patent Reference and Design Identification

**Patent:** DE 939956 B
**Filed:** 31 August 1954
**Granted:** 9 February 1956; printed specification issued 8 March 1956
**Inventors:** Otto Zimmermann; Gustav Kleineberg
**Assignee:** Ernst Leitz GmbH
**Title:** Photographisches Objektiv
**Example details:** Sole unnumbered table on original page 2, repeated in claim 1. All lengths are uniformly scaled ×0.5.

This is a qualified reconstruction of the complete patent example, associated with the rigid and Dual-Range Summicron 50mm f/2 family. It is not an exact manufactured prescription. The two retail variants count as one optical family.

The association rests on three independent kinds of correspondence:

1. The patent is a seven-element, six-group Gaussian lens with a split front collector and a rear cemented meniscus pair.
2. The 1960 Leitz List 11-34/Engl. names Summicron f/2 50mm and shows the matching architecture, seven elements and a 45° angle of view.
3. October 1961 dealer pages B7/B8 explicitly give seven elements and six components for both rigid and Dual-Range variants.

The maker brochure identifies SOSIC, SOMNI and SOSTA variants. The selected catalog mount describes the rigid/DR Leica M use, not a claim that all related screw-mount variants are identical.

The patent does not name Summicron or give a 50mm prescription. Its printed focal length is 100 without an explicit physical unit. Assigning a half-scale model in millimetres is a stated hypothesis, not a normalization to exact 50mm. The independently calculated EFL is 50.02660183mm.

The 1961 dealer source is a later authorized Hove facsimile. Its original October 1961 page headers and permission page are retained in the evidence packet. Its facsimile production date is not established.

## Optical Architecture

The complete system has seven spherical glass elements and six air-spaced groups. Thirteen refracting interfaces become fourteen authored surfaces when the inferred flat iris is inserted.

The front half contains four separated elements. The rear half comprises a cemented pair and a final positive singlet. The large central gap contains the diaphragm.

The prescription maintains the very narrow air spaces around the front menisci and before the final singlet. They must not be merged into cemented boundaries or enlarged to avoid geometry problems.

The positive sign of source r7 = +145.08 is confirmed in both the body table and the repeated claim table. It is not an inferred correction.

## Element-by-Element Analysis

The isolated-air focal lengths in the data describe individual thick elements. In particular, these are not an allocation of in-system power to the members of the cemented pair.

### L1: Front Biconvex Collector

nd = 1.69100, νd = 54.9. Glass: Unmatched patent coordinates.

The strongly convex front surface and weakly convex rear surface supply positive power. The physical thickness is 5.20mm in the half-scale model.

### L2: Biconcave Negative Element

nd = 1.62237, νd = 36.1. Glass: Unmatched patent coordinates.

The split collector includes this air-separated negative component. Its higher dispersion provides an opposite-sign chromatic contribution. A 0.096mm axial air gap separates it from L3.

### L3: Positive Meniscus

nd = 1.69100, νd = 54.9. Glass: Unmatched patent coordinates.

Its front radius is much shorter than its rear radius, producing positive power. A 0.2575mm gap follows it. The curved boundaries make this small gap an important static geometry constraint.

### L4: Negative Meniscus Before the Iris

nd = 1.60140, νd = 38.3. Glass: Unmatched patent coordinates.

Both radii are positive. The shorter rear radius produces negative power. The rear surface is deeply curved, making stop placement and admitted pupil clearance necessary native checks.

### L5 and L6: Rear Cemented Pair

L5: nd = 1.58144, νd = 40.8. Glass: Unmatched patent coordinates.

L6: nd = 1.69100, νd = 54.9. Glass: Unmatched patent coordinates.

L5 is biconcave when considered alone in air; L6 is biconvex. They share the source r10 interface. No artificial air gap is inserted at the bond. Their combined negative meniscus role follows the patent's Gaussian layout; the isolated-element powers are not the cemented-group power.

### L7: Final Positive Singlet

nd = 1.69100, νd = 54.9. Glass: Unmatched patent coordinates.

The weakly convex front surface and stronger convex rear surface supply positive power. A 0.096mm air space separates this singlet from the cemented pair.

## Glass Identification and Selection

The same 1.69100 / 54.9 coordinates recur in L1, L3, L6 and L7. The other three glasses have lower indices and higher dispersion.

The original heading explicitly uses lowercase nd and v. It does not independently state a numerical wavelength or an Abbe-number formula. The model uses the supported d convention without silently substituting sodium-D or mercury-e indices.

No catalog glass name, historical supplier, melt identity or modern Sellmeier fit is claimed. Abbe-based dispersion can support a qualified simulation, not proof of exact secondary spectrum or apochromatic behavior.

## Focus Mechanism

Only the infinity prescription is modeled. All published internal thicknesses and air spaces remain fixed.

The patent discusses image quality for infinity and close objects below one metre. It does not publish a numerical movement schedule, conjugate table or continuous floating law.

The maker brochure describes the retail normal and near ranges, including the Dual-Range finder attachment. Those descriptions do not supply the missing optical movement law. The finder accessory is not inserted as an additional main-lens element, and no 48cm simulation is claimed.

## Stop, Clear Apertures and Image Plane

The source constrains the stop to the gap between the menisci but supplies neither an exact axial coordinate nor a diameter. The current midpoint hypothesis places it at z = 21.2485mm, within the half-scale permitted region 16.7085–25.7885mm. The split gaps sum exactly to 9.08mm.

Clear semi-diameters are construction hypotheses, not patent measurements. Initial generous caps were reduced only at the narrow L3–L4 gap to pass an independent 90% gap-sag static calculation. All rejected first guesses remain in the external static report.

The paraxial entrance-pupil convention is EPD = EFL / N. At f/2 the midpoint hypothesis gives an inferred paraxial stop radius of approximately 8.14086mm. This is not a measured iris radius.

The BFL is derived as 30.73780956mm, and the resulting image-plane coordinate is 66.02730956mm. Neither is printed in the patent. The final zero interval in the literal transcription is an endpoint marker, not a source BFL.

The maker's full 45° field is supporting product context, not a literal patent field or a verified full-aperture coverage result.

## Verification Status

This qualified source reconstruction has completed standalone integration with explicit numerical limitations (QUALIFIED_SOURCE_RECONSTRUCTION_STANDALONE_INTEGRATION_COMPLETE). The preserved final-visible gates, 23-file/1,609-test focused regression, build, SEO audit, exact data/analysis readback, raw rebuild verification and guarded three-file installer checks passed; the entire repository test suite was not run. These receipts describe the original standalone files, not validation of this later documentation correction or a combined package. All thirteen radii, twelve physical intervals and seven glass coordinate pairs round-trip to the literal source after reversing the uniform scale and recombining the stop gap.

Independent paraxial matrix calculations reproduce the recovered EFL/BFL. Independent spherical edge, rim and air-gap calculations pass for the current caps at the unchanged default 90% gap-sag allowance.

The first native pilot found slight real clipping at inferred faces6/7. Those caps were raised only from10.05/10.05mm to10.075/10.060mm, retaining the source prescription and the default90% gap-sag limit. The refined native build passes with zero hidden trim, iris clearance and an iris-limited exact on-axis aperture boundary at f/2 and f/2.8. All first failures remain in checkpoint evidence.

Reference-wavelength587.5618nm MTF was evaluated at f/2 with a64-grid cap. The actual fields were0°,11.2499997° and22.4999993°, the latter two derived from the maker45° full-field hypothesis. All axial geometric/diffraction curves converge. A subsequent 128-grid source-plane refinement converges at the midpoint through 40 lp/mm. The edge remains unconverged overall, with continuous convergence through 20 lp/mm. Geometric sagittal 30/40 lp/mm and diffraction sagittal 30 lp/mm exceed the unchanged 0.01 tolerance; all tangential samples pass. A separately labeled best-axial diagnostic applies−0.134990722mm to the evaluation plane only: its diffraction midpoint converges, but the edge remains unconverged. No failed rays were recorded. The authored paraxial image plane is unchanged; these are not measured production-lens curves.

Photopic calculation is technically supported only with estimated normal-line dispersion for all seven nd/νd glasses; it was not run. No exact factory broadband or secondary-spectrum accuracy is claimed. Integration scope is recorded separately in the delivery gate report. Required focus metadata carries a1m normal-range label with an explicit unmodeled-conjugate disclaimer; no focus movement was added.

## Sources

- [Whole DE939956B official specification](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=DE000000939956B&xxxfull=1)
- [DPMA bibliographic record](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=bibdat&docid=DE000000939956B)
- [Leitz 1960 List 11-34/Engl.](https://www.pacificrimcamera.com/rl/00372/00372.pdf), page 4 and imprint.
- [Dealer catalog facsimile](https://www.pacificrimcamera.com/rl/03496/03496.pdf), permission page and October 1961 B7/B8.
