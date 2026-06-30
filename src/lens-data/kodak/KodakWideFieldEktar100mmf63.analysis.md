# Kodak Wide Field Ektar 100mm f/6.3 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2,518,719  
**Application Number:** US646687A  
**Filed:** February 9, 1946  
**Granted:** August 15, 1950  
**Inventor:** Max Reiss  
**Assignee:** Eastman Kodak Company, Rochester, New York  
**Title:** Wide-Angle Camera Objective  
**Embodiment analyzed:** Example 2 / Fig. 2

US 2,518,719 describes a wide-angle photographic objective consisting of two simple negative meniscus components placed between two positive meniscus components. All four components are concave toward the central airspace. The patent states that the objective is intended to correct coma, distortion, and image curvature over an angular field of ±40° or more, with spherical aberration reduced over an aperture of about f/6.3.

The prescription transcribed here is Example 2. The patent gives Example 2 at EF = 100 mm and aperture f/6.3, with four simple meniscus elements in four air-spaced groups. The production-name assignment to the Kodak Wide Field Ektar 100mm f/6.3 is a plausible working identification based on focal length, aperture, element count, design type, and Kodak's later published Wide Field Ektar product table. It is not a direct name match in the patent: US 2,518,719 does not identify a commercial Wide Field Ektar model, and it does not state which worked example became which commercial focal length.

Kodak's professional-lens publication lists a 100mm f/6.3 Wide Field Ektar and recommends it for 4 × 5 without swings and 3¼ × 4¼ with swings. That same publication states 75° coverage at f/6.3 and 80° coverage at apertures smaller than f/11. These manufacturer-published values are used for production context, while the optical prescription remains the patent's Example 2.

Example 2 is preferable to Example 1 for this file because it is the embodiment reproduced in Claim 6 and because it uses the 1.620/60.3, 1.621/36.2, 1.605/38.0, 1.620/60.3 glass sequence. Example 3 is an f/8 embodiment and therefore does not match the f/6.3 production designation.

The prescription is not scaled. The patent normalization already states EF = 100 mm, and the nominal production focal length is 100 mm. The computed paraxial EFL from the rounded prescription is 100.086 mm, so the residual difference is within the precision of the patent table.

A transcription issue exists at R7. The Fig. 2 drawing table lists R7 = -63.4, but the repeated text table gives R7 = -68.4, Claim 6 gives the normalized value R7 = 0.68F, and the patent's own surface-power table gives P7/P = -0.91. A direct paraxial check confirms that R7 = -68.4 is the consistent value: it gives EFL = 100.086 mm, BFD = 89.010 mm, and P7/P = -0.907. Using R7 = -63.4 instead gives EFL = 106.042 mm and BFD = 94.467 mm, contradicting the patent's EF = 100 mm and BF = 88.9 mm context. The data file therefore uses R7 = -68.4.

## Optical Architecture

The design is a Topogon-family, quasi-symmetric, positive-negative-negative-positive wide-angle objective. It has 4 elements in 4 air-spaced groups. All surfaces are spherical.

From front to rear, the groups are:

1. Lens I: positive meniscus, convex to object.
2. Lens II: negative meniscus, convex to object.
3. Aperture stop in the central airspace between Lens II and Lens III.
4. Lens III: negative meniscus, concave to object.
5. Lens IV: positive meniscus, concave to object.

The numerical prescription has a short glass-to-glass axial length of 25.26 mm. The computed back focal distance is 89.01 mm, giving a front-vertex-to-image distance of 114.27 mm. This is not a telephoto design by the usual TL/EFL criterion; the total track from the first vertex to the paraxial image plane is longer than the focal length. It is also not a retrofocus wide-angle in the modern SLR sense, because the back focal distance is shorter than the focal length.

The chief design idea is the use of a nearly symmetric meniscus core to control the odd-order aberrations expected in a wide-angle objective, with a controlled departure from strict symmetry to improve coma correction for distant objects. The patent explicitly describes this asymmetry as making the fifth surface weaker than the fourth and the seventh surface weaker than the second.

Using the surface-by-surface Petzval formula, Σ[Φ/(n·n′)], Example 2 gives a Petzval sum of +0.0022637 mm^-1, corresponding to a Petzval radius of about 442 mm. That is weak Petzval curvature for a 100 mm objective and is consistent with the patent's stated emphasis on image-curvature correction.

## Element-by-Element Analysis

### Lens I — Positive Meniscus, Convex to Object

nd = 1.62000, νd = 60.3. Glass: N-SK16 class (Schott nearest modern catalog equivalent). f = +70.9 mm.

Lens I is the front positive collector. Both of its surfaces are convex to the front under the patent's sign convention: R1 = +24.6 mm and R2 = +51.6 mm. Because the first surface is more strongly curved than the second, the element has positive power.

The front surface contributes P1/P = +2.52, while the rear surface partially offsets it at P2/P = -1.20. This distributes positive power without making the first component a simple high-power singlet. The high Abbe number of the barium-crown-class glass gives the front half a low-dispersion positive member to pair against the flint negative member in Lens II.

### Lens II — Negative Meniscus, Convex to Object

nd = 1.62100, νd = 36.2. Glass: F2 class (Schott nearest modern catalog equivalent). f = -90.4 mm.

Lens II is the front negative component of the central pair. It is convex to the front on both surfaces, with R3 = +22.0 mm and R4 = +15.2 mm. The rear surface is substantially stronger, so the element is negative.

The R4 surface carries the strongest individual surface power in the design, P4/P = -4.09. This is a major source of the negative Petzval contribution needed to flatten the field. The refractive index of this element, nd = 1.621, is fractionally higher than that of the two positive components, satisfying the patent's preferred condition that at least one negative element have a higher index than the positives.

### Lens III — Negative Meniscus, Concave to Object

nd = 1.60500, νd = 38.0. Glass: F5 class (Schott nearest modern catalog equivalent). f = -60.7 mm.

Lens III is the rear negative component. It is concave to the front on both surfaces, with R5 = -16.8 mm and R6 = -32.4 mm. It is stronger than Lens II as a standalone element, with f = -60.7 mm versus -90.4 mm for Lens II.

The patent's intentional asymmetry is visible here. The fifth surface is weaker than the fourth by the patent's own criterion: |P5/P4| = 0.881. This remains inside the specified range of 0.6 to 0.98. The use of F5-class glass rather than the same F2-class glass used in Lens II gives the rear half a slightly different chromatic and monochromatic balance while preserving the broad symmetry of the four-meniscus layout.

### Lens IV — Positive Meniscus, Concave to Object

nd = 1.62000, νd = 60.3. Glass: N-SK16 class (Schott nearest modern catalog equivalent). f = +47.0 mm.

Lens IV is the rear positive collector. Both surfaces are concave to the front, with R7 = -68.4 mm and R8 = -20.9 mm. The rear surface is much stronger, producing a net positive meniscus.

The R7 surface is deliberately weak relative to R2. The verified ratio |P7/P2| = 0.754 lies inside the patent's preferred 0.6 to 0.9 range. The final R8 surface contributes P8/P = +2.97, providing the last major converging contribution before the long back focal space.

## Glass Identification and Selection

The patent supplies only refractive index and Abbe number values, not proprietary Kodak melt names. Modern Schott catalog names are therefore used as nearest public catalog equivalents, not as proof that Eastman Kodak used Schott glass.

| Lens | Patent nd | Patent νd | Nearest modern catalog equivalent | Catalog nd / νd | Difference | Optical role |
|---|---:|---:|---|---:|---:|---|
| I, IV | 1.620 | 60.3 | N-SK16 (Schott) | 1.62041 / 60.32 | Δnd +0.00041, Δνd +0.02 | Barium-crown-class positive pair |
| II | 1.621 | 36.2 | F2 (Schott) | 1.62004 / 36.37 | Δnd -0.00096, Δνd +0.17 | Light flint, front negative |
| III | 1.605 | 38.0 | F5 (Schott) | 1.60342 / 38.03 | Δnd -0.00158, Δνd +0.03 | Light flint, rear negative |

All three matches fall within ordinary transcription tolerance for a vintage patent rounded to three decimals in nd and one decimal in νd. The crown-flint pairing is conventional rather than apochromatic. The patent does not publish partial-dispersion data and does not claim anomalous partial dispersion or ED-type behavior, so the chromatic interpretation should remain at the achromat level.

## Focus Mechanism

The patent gives only infinity-focus prescriptions. It does not describe a helicoid, rail movement, internal focusing, floating correction, or close-focus variable spacing.

The data file models focus as unit focus by varying only the final back focal distance. This is an implementation model rather than a patent-published focusing mechanism. At infinity, the computed paraxial BFD is 89.0096 mm. For the data file's nominal 1.0 m close-focus endpoint, measured from the first vertex for the paraxial model, the back focal distance is 99.9604 mm.

The practical close-focus limit of a large-format lens mounted in a shutter depends on the camera bellows or focusing rail, not on a built-in lens mechanism. The 1.0 m value is therefore only a viewer endpoint for the focus slider.

## Conditional Expressions

The patent defines the invention by both radius ranges and surface-power ranges. Example 2 satisfies the radius and spacing conditions in Claim 1 when F is taken as the computed EFL of 100.086 mm.

| Condition | Patent range | Example 2 value | Ratio to EFL | Result |
|---|---:|---:|---:|---|
| R1 | 0.21F to 0.40F | 24.6 mm | 0.246F | Pass |
| R2 | 0.45F to 0.64F | 51.6 mm | 0.516F | Pass |
| R3 | 0.18F to 0.28F | 22.0 mm | 0.220F | Pass |
| R4 | 0.12F to 0.18F | 15.2 mm | 0.152F | Pass |
| R5 | 0.155F to 0.25F | 16.8 mm | 0.168F | Pass |
| R6 | 0.26F to 0.35F | 32.4 mm | 0.324F | Pass |
| R7 | 0.56F to 0.90F | 68.4 mm | 0.683F | Pass |
| R8 | 0.205F to 0.35F | 20.9 mm | 0.209F | Pass |
| t1 | 0.04F to 0.16F | 4.89 mm | 0.049F | Pass |
| t2 | 0.013F to 0.026F | 2.20 mm | 0.022F | Pass |
| t3 | 0.013F to 0.026F | 2.04 mm | 0.020F | Pass |
| t4 | 0.04F to 0.16F | 4.07 mm | 0.041F | Pass |
| s1 | 0.002F to 0.012F | 0.65 mm | 0.006F | Pass |
| s2 | 0.09F to 0.17F | 10.60 mm | 0.106F | Pass |
| s3 | 0.002F to 0.012F | 0.81 mm | 0.008F | Pass |

The asymmetry conditions also pass:

| Condition | Patent range | Example 2 value | Result |
|---|---:|---:|---|
| |R5|/|R4| | 1.02 to 1.65 | 1.105 | Pass |
| |R7|/|R2| | 1.10 to 1.70 | 1.326 | Pass |
| |P5|/|P4| | 0.60 to 0.98 | 0.881 | Pass |
| |P7|/|P2| | 0.60 to 0.90 | 0.754 | Pass |

## Data-File Implementation Notes

The aperture stop is not given as an exact axial coordinate in the patent table. The patent states that, in Examples 1 and 2, the diaphragm is closer to the front component than to the rear but not more than twice as close. The data file therefore splits the 10.60 mm central airspace as 4.00 mm from R4 to the stop and 6.60 mm from the stop to R5. This satisfies the patent's qualitative placement statement. The stop semi-diameter is 6.6845 mm, chosen by paraxial trace to give f/6.3 for EFL = 100.086 mm.

The patent does not publish semi-diameters. The data file uses conservative inferred semi-diameters constrained by the on-axis f/6.3 marginal bundle, Kodak's published 75°/80° coverage context, element edge thickness, rim slope, and cross-gap sag intrusion. The opposed surfaces around the central stop, R4 and R5, are capped at 11.35 mm so their combined sag remains inside the viewer's 90% clearance budget for the 10.60 mm patent airspace. The rear positive meniscus is the limiting rear element; its surfaces are kept at 13.2 mm semi-diameter to preserve approximately 0.66 mm of axial edge thickness. These semi-diameters should be treated as visualization apertures, not measured mechanical clear apertures and not a guarantee of full-aperture unvignetted 4 × 5 coverage.

The last surface's BFD is set to the computed paraxial focus distance, 89.0096 mm, rather than the rounded patent value of 88.9 mm. This keeps the infinity image plane exactly at paraxial focus while remaining within the patent's rounding precision.

## Verification Summary

Independent paraxial tracing gives the following values for the Example 2 prescription with R7 = -68.4:

| Quantity | Patent / expected | Computed |
|---|---:|---:|
| EFL | 100 mm | 100.086 mm |
| BFD | 88.9 mm rounded | 89.0096 mm |
| Surface 1 power | +2.52P | +2.5225P |
| Surface 2 power | -1.20P | -1.2026P |
| Surface 3 power | +2.82P | +2.8252P |
| Surface 4 power | -4.10P | -4.0891P |
| Surface 5 power | -3.60P | -3.6043P |
| Surface 6 power | +1.87P | +1.8689P |
| Surface 7 power | -0.91P | -0.9072P |
| Surface 8 power | +2.95P | +2.9691P |
| Petzval sum | not directly tabulated | +0.0022637 mm^-1 |

The remaining deviations are explainable by the patent's rounded radii, thicknesses, and indices.

## Design Heritage and Context

US 2,518,719 is an Eastman Kodak refinement of the four-meniscus wide-angle objective family associated with the Topogon type. The patent cites Robert Richter's US 2,031,792 and Durrand's US 2,383,115 as prior art.

The Reiss patent's contribution is not merely the presentation of one prescription. It defines a design space by radius, power, thickness, spacing, index, and asymmetry conditions. Example 2 is a useful embodiment because it shows the controlled asymmetry in both geometry and glass selection while preserving the basic positive-negative-negative-positive meniscus architecture.

## Sources

- US 2,518,719, Max Reiss, "Wide-Angle Camera Objective," Eastman Kodak Company. Filed February 9, 1946; granted August 15, 1950. Primary source for prescription, claims, and design rationale.
- Eastman Kodak Company, "Kodak Lenses for Professional Photography," pp. 8-10. Used for production Wide Field Ektar naming, coverage, and recommended film-size context.
- SCHOTT Technical Information TIE-19, "Temperature Coefficient of the Refractive Index." Used only to verify nearest modern catalog nd/νd values for N-SK16, F2, and F5.
