## Patent Reference and Design Identification

**Patent:** US 4,258,980  
**Filed:** November 26, 1979  
**Granted:** March 31, 1981  
**Inventor:** Jacob Moskovich  
**Assignee:** Vivitar Corporation  
**Title:** Retrofocus lens  
**Example details:** Table 1, normalized unity focal length, scaled uniformly by 24 mm; Figure 1 is schematic.

This is a representative patent model associated with the Vivitar 24mm f/2 Compact, not a verified factory prescription. The Vivitar product brochure (PDF page 11, visually inspected) lists eight elements in eight groups, f/2 and an 84° field, agreeing with Table 1. Photons to Photos indexes the same association, which is secondary discovery evidence rather than proof. The patent assignee is not evidence of the lens's contract manufacturer. Mount variants are not asserted.

All printed radii, thicknesses, air spaces and refractive data are retained. The patent normalizes focal length to unity; every axial length and radius is multiplied by exactly 24. The independent paraxial EFL is 24.007580925 mm, not retuned to exactly 24 mm. The literal 1.59×24 = 38.16 mm image gap is retained despite an independently computed paraxial BFL of 38.325581792 mm. That 0.165581792 mm discrepancy is not silently repaired.

## Optical Architecture

Eight spherical, air-spaced elements form a negative front group L1–L3 and a positive rear group L4–L8. The iris lies between L4 and L5. This retrofocus arrangement provides back clearance substantially exceeding the focal length. Table 1 gives normalized group focal lengths −0.79 and +0.99. These are optical groupings, not cemented groups.

## Element-by-Element Analysis

### L1: Positive Meniscus

nd = 1.697, νd = 55.5. Glass: unmatched coordinate class; supplier unknown. f = +127.332994 mm.

Weak positive collector ahead of the negative front group. Standalone thick-element power is calculated from the literal prescription; the brief functional description is interpretation, not a measured aberration allocation.

### L2: Negative Meniscus

nd = 1.697, νd = 55.5. Glass: unmatched coordinate class; supplier unknown. f = -30.248592 mm.

Strong negative meniscus in the retrofocus front group. Standalone thick-element power is calculated from the literal prescription; the brief functional description is interpretation, not a measured aberration allocation.

### L3: Negative Meniscus

nd = 1.603, νd = 60.7. Glass: unmatched coordinate class; supplier unknown. f = -41.968903 mm.

Second negative meniscus completing the front group. Standalone thick-element power is calculated from the literal prescription; the brief functional description is interpretation, not a measured aberration allocation.

### L4: Biconvex Positive

nd = 1.717, νd = 29.5. Glass: unmatched coordinate class; supplier unknown. f = +31.591273 mm.

Positive high-index element ahead of the iris. Standalone thick-element power is calculated from the literal prescription; the brief functional description is interpretation, not a measured aberration allocation.

### L5: Plano-convex Positive

nd = 1.603, νd = 60.7. Glass: unmatched coordinate class; supplier unknown. f = +31.800995 mm.

Positive crown immediately behind the iris. Standalone thick-element power is calculated from the literal prescription; the brief functional description is interpretation, not a measured aberration allocation.

### L6: Biconcave Negative

nd = 1.805, νd = 25.5. Glass: unmatched coordinate class; supplier unknown. f = -17.331699 mm.

Dense-flint negative element within the rear group. Standalone thick-element power is calculated from the literal prescription; the brief functional description is interpretation, not a measured aberration allocation.

### L7: Positive Meniscus

nd = 1.640, νd = 60.2. Glass: unmatched coordinate class; supplier unknown. f = +38.469982 mm.

Positive rear meniscus. Standalone thick-element power is calculated from the literal prescription; the brief functional description is interpretation, not a measured aberration allocation.

### L8: Biconvex Positive

nd = 1.640, νd = 60.2. Glass: unmatched coordinate class; supplier unknown. f = +39.888336 mm.

Positive final element of the rear group. Standalone thick-element power is calculated from the literal prescription; the brief functional description is interpretation, not a measured aberration allocation.

## Glass Identification

The five distinct nd/νd pairs are 1.697/55.5, 1.603/60.7, 1.717/29.5, 1.805/25.5 and 1.640/60.2 (five distinct pairs across eight elements). They are preserved to printed precision without assigning a modern supplier glass. No line indices, partial-dispersion ratios, coatings or melt identities are supplied; no APO designation or precise spectral equivalence is claimed.

## Focus Mechanism

Only the Table 1 infinity prescription is modeled, using the supported infinity-only sentinel and no variable gaps. The patent describes differential motion of the rear four elements and supplies Table 7 at 1:10, but that finite-conjugate state has not been implemented or validated here. The brochure's 0.3 m retail minimum is not a modeled endpoint. No unit-focus reconstruction or false close-focus claim is introduced.

## Stop and Clear Apertures

Figure 1 identifies the iris between L4 and L5. The exact station is unprinted: the 3.72 mm airspace is split into two inferred 1.86 mm distances. The runtime derives iris radius from f/2; this calibration is not independent verification of f-number.

Clear apertures are unprinted and heuristic. Figure 1 guides broad proportions, not precise metrology. L2's front clear semi-diameter is 14 mm; its curved rear cap ends at 11.4 mm, with a vertical opaque extension to 14 mm following the schematic flat outer land. Other paired rims are 18.4, 7.8, 10, 10.5, 9.2, 9.2 and 12.5 mm for L1,L3–L8. No optical radius, axial gap, index or glass thickness was altered. The native geometry validator passes its default 90% gap-sag limit; no allowance override is used.

## Verification Summary

Fresh native construction and geometry checks pass on the pinned 70600ffc source snapshot. The native aperture census traces approximately f/2.0154, 0.77% slower than nominal and within its 3% tolerance; the first marginal limitation is at surface 14. After recognizing L2's unequal clear cap/outer land, the native field audit reaches the 35mm-format corner (at least 99% coverage). The earlier equal 11.4 mm L2 rim trial reached only 86.5% and is superseded, not a source change.

This is a qualified data handoff, not integration approval. Full-corpus typecheck/lint/tests, current-main reconciliation, production render-trim diagnostics and compiled-viewer/browser QA are pending. Source rounding, inferred apertures and iris station limit quantitative image-quality claims. No measured MTF match is claimed.

## Sources

- [US 4,258,980, Table 1 and Figure 1](https://patents.google.com/patent/US4258980)
- [Original USPTO grant PDF](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/4258980)
- [Vivitar product brochure, 24mm f/2 Compact specification](https://cameramanuals.org/lenses/vivitar_products.pdf)
- [Photons to Photos Optical Bench hub, secondary association](https://photonstophotos.net/GeneralTopics/Lenses/OpticalBench/OpticalBenchHub.htm)
