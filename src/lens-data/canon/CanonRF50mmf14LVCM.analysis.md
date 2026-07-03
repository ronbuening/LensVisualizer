## Patent Reference and Design Identification

**Patent:** US 2025/0251576 A1  
**Application Number:** 18/969,340  
**Filed:** December 5, 2024  
**Published:** August 7, 2025  
**Priority:** JP 2024-016858, filed February 7, 2024  
**Inventor:** Tomohiro Ino  
**Applicant:** Canon Kabushiki Kaisha  
**Title:** Optical System and Image Pickup Apparatus  
**Embodiment analyzed:** Numerical Example 1

Numerical Example 1 is a strong production candidate for the Canon RF 50mm f/1.4 L VCM. The identification is patent-derived rather than a manufacturer-published production prescription, but the convergence is unusually tight.

1. The example gives `f = 48.50 mm`, `Fno = 1.46`, image height `21.64 mm`, half angle of view `24.04°`, and closest object distance `-400 mm` measured from the image plane. These values correspond closely to a marketed 50 mm f/1.4 full-frame lens with a 0.40 m minimum focus distance.
2. Canon's public specification gives 14 elements in 11 groups. The prescription has 15 material entries because the thin resin cap and glass substrate at surfaces 3-5 form a bonded hybrid-composite element. The patent's definition of “lens” expressly includes a joined lens made from different materials, including a layer of organic material such as resin on glass, so the bonded pair is counted as one lens element in the production-style count (¶0024).
3. Canon's public specification lists 2 aspherical elements and 1 UD element. The patent example has three aspherical surfaces on two counted elements: one resin aspherical surface in the front group and a double-sided glass-molded asphere in the rear group. It also contains one S-FPL51/FCD1-class fluorophosphate element at `nd = 1.49700`, `νd = 81.7`.
4. Canon lists a Nano USM plus VCM autofocus drive system. The patent discloses two independently moving focus lens units, L2 and L4/Lr1, while the other lens units remain fixed relative to the image plane (¶0019). The patent does not assign either optical unit to a specific actuator.
5. The patent half-field is `24.04°`, or `48.08°` full diagonal. Canon publishes an approximately 46° diagonal photographic angle of view. The difference is compatible with production rounding, distortion, and the distinction between paraxial patent half-field and published photographic angle of view.
6. The priority date and filing date precede public availability of the production lens, and the publication is assigned to Canon Kabushiki Kaisha.

## Optical Architecture

The design is a fast normal-lens Gauss derivative for a short-flange mirrorless system. It is not a telephoto design in the strict optical sense: total track divided by EFL is about `117.51 / 48.50 = 2.42`. It is also not retrofocus: `SK / f = 14.66 / 48.50 = 0.302`, so the back focal distance is substantially shorter than the focal length.

The optical power sequence is `+ / + / - / stop / + / -` across five lens units:

- **L1**, positive, surfaces 1-10, forms the main front collector and contains the hybrid-composite resin asphere.
- **L2**, positive, surfaces 11-12, is the first moving focus unit.
- **L3**, negative, surfaces 13-14, sits immediately in front of the aperture stop and helps balance the front group's residual aberrations.
- **L4 / Lr1**, positive, surfaces 16-22, is the second moving focus unit and contains the UD element plus the double-sided glass-molded asphere.
- **L5 / Lr2**, negative, surfaces 23-27, is fixed near the image side and provides the weak negative tail power needed for field correction and short mirrorless back focus.

The aperture stop is placed between L3 and L4 in Examples 1-3 (¶0030). This central placement keeps the prescription closer to a symmetric Gaussian form than a conventional SLR retrofocus 50 mm lens; the rear group is nevertheless substantially developed to support the RF mount back-focus requirement, close focusing, focus-breathing control, and f/1.4 correction.

Independent paraxial tracing gives the following unit focal lengths at infinity focus:

| Unit | Surfaces | Focal length |
|---|---:|---:|
| L1 | 1-10 | +53.015 mm |
| L2 | 11-12 | +124.708 mm |
| L3 | 13-14 | -49.725 mm |
| L4 / Lr1 | 16-22 | +38.048 mm |
| L5 / Lr2 | 23-27 | -96.431 mm |
| Front group Lf | 1-14 | +96.267 mm |
| Rear group Lr | 16-27 | +56.589 mm |

## Element-by-Element Analysis

### E1 — Positive Meniscus, convex to object

`nd = 1.92286`, `νd = 20.9`. Glass: E-FDS1 / M-FDS1 class, HOYA code 923-209. `f = +144.31 mm`.

The first element is a high-index, low-Abbe dense flint positive meniscus. Its main role is to begin convergence at a large front aperture without forcing the first surface into an extreme curvature. The low Abbe number gives a strong chromatic contribution that must be balanced by later flints and the rear fluorophosphate elements.

The glass identity is best treated as a HOYA code match rather than as a named-glass certainty. The patent publishes only `nd` and `νd`; the 923-209 code matches HOYA E-FDS1 / M-FDS1 class. Equivalent six-digit code matches do not prove identical melt composition.

### E2 + E3 — Hybrid-Composite Negative Meniscus with Resin Asphere

E2 resin cap: `nd = 1.53352`, `νd = 52.8`. Glass: UV-cured optical resin, patent-listed optical constants. Resin cap standalone `f ≈ +2076 mm`; this value is not analytically meaningful by itself because the cap is a thin bonded surface layer.

E3 glass substrate: `nd = 1.65412`, `νd = 39.7`. Glass: S-NBH5 / N-KZFS5 class, code 654-397. Standalone glass body `f = -73.87 mm`; bonded composite `f = -76.65 mm`.

This is the patent's front hybrid-composite asphere. Surface 3A is the molded resin surface, and surface 4 is the resin-to-glass junction. The patent specifically describes Examples 1-4 as having a second lens in which a resin layer is provided on the object-side surface of a single lens and the object-side resin surface is aspheric (¶0025).

Optically, this element supplies the first strong negative correction after E1. Its placement early in L1 gives the aspherical surface large marginal and off-axis ray heights, making it efficient for spherical aberration, astigmatism, and distortion correction without using a large polished glass asphere in the front group (¶0034).

### E4 + E5 — Cemented Doublet

E4: `nd = 1.77047`, `νd = 29.7`. Glass: NBFD29, HOYA code 770-297. `f = -26.94 mm`.

E5: `nd = 1.76385`, `νd = 48.5`. Glass: S-LAH96, OHARA code 764-485. `f = +32.89 mm`.

The cemented pair has `f = -299.71 mm`, so it is weakly negative as a group despite having two individually strong components. The near-index match suppresses excessive interface power at the cemented junction, while the Abbe-number difference gives the doublet useful chromatic correction inside L1.

E5 should not be described as an ordinary crown merely because it is a positive lanthanum glass. With `νd = 48.5`, it lies on the flint side of the usual crown/flint boundary. The useful distinction here is high-index lanthanum glass paired against a lower-Abbe dense flint.

### E6 — Biconvex Positive

`nd = 1.91082`, `νd = 35.2`. Glass: TAFD35, HOYA code 911-353. `f = +43.09 mm`.

E6 is the strongest positive element in L1 and supplies much of the front unit's convergence. Its high refractive index keeps the element's curvature and diameter within practical limits while allowing L1 to remain strongly positive. The tradeoff is chromatic: another moderate-low Abbe high-index element is added to a system that must later be balanced by fluorophosphate and dense-flint pairings.

### E7 / L2 — Positive Meniscus, First Moving Focus Unit

`nd = 1.90043`, `νd = 37.4`. Glass: TAFD37A, HOYA code 900-374. `f = +124.71 mm`.

L2 is a weak positive moving focus unit. It shifts objectward by 2.30 mm from infinity to the patent close-focus state. Because its standalone power is moderate, it can contribute focus correction without producing a large aberrational swing by itself. The patent identifies L2 in Examples 1 and 2 as the first focus lens unit and states that it moves toward the object side during focusing from infinity to close distance (¶0026).

The patent identifies L2 as a moving focus lens unit, but it does not specify whether L2 or L4 is driven by the Nano USM or by the VCM. The production dual-actuator statement should therefore be connected only to the two moving optical units, not mapped to either unit as a fact.

### E8 / L3 — Plano-Concave Negative Unit

`nd = 1.77047`, `νd = 29.7`. Glass: NBFD29, HOYA code 770-297. `f = -49.73 mm`.

L3 is a fixed negative pre-stop element. The object-side surface is plane and the image-side surface is concave, giving the unit a simple plano-concave negative form. Its negative power before the stop offsets the front collector and helps place the stop near the optical center of the system.

The patent states that L3, which is fixed during focusing, can correct longitudinal chromatic aberration and spherical aberration and suppress an increase in the weight of the focus lens unit (¶0032).

### E9 + E10 — L4 Front Cemented Doublet

E9: `nd = 1.59522`, `νd = 67.7`. Glass: S-FPM2, OHARA code 595-677. `f = +99.43 mm`.

E10: `nd = 1.73037`, `νd = 32.2`. Glass: NBFD32, HOYA code 730-322. `f = -32.65 mm`.

The cemented pair has `f = -44.21 mm`, making it a negative doublet at the front of the positive L4/Lr1 unit. The fluorophosphate crown plus dense-flint pairing gives a large Abbe-number separation close to the stop, which is favorable for longitudinal chromatic correction and for suppressing secondary-spectrum residuals when paired with E11.

The patent describes the first rear lens unit Lr1 in Examples 1-3 as including a cemented lens plus positive lenses, and notes that placing a cemented lens closest to the object side in Lr1 helps reduce longitudinal chromatic aberration while suppressing focus-unit weight increase (¶0036-¶0037).

### E11 — Biconvex Positive UD Element

`nd = 1.49700`, `νd = 81.7`. Glass: S-FPL51 / FCD1 class, code 497-816. `f = +44.33 mm`.

E11 is the patent example's UD-class element. The OHARA S-FPL51 and HOYA FCD1 code family matches the patent's `nd` and `νd` closely. Its high Abbe number reduces primary chromatic error, and its fluorophosphate dispersion behavior works with E9 and E10 to limit secondary color.

The element is placed in L4/Lr1, behind the stop and ahead of the double-sided asphere. This location lets it act on both axial color and oblique bundles without requiring a large front UD element.

### E12 — Biconvex Positive Double-Sided Glass-Molded Asphere

`nd = 1.80400`, `νd = 46.5`. Glass: S-LAH65VS, OHARA code 804-465, Low-Tg / precision-molding class. `f = +52.09 mm`.

E12 is the patent example's rear glass-molded aspherical element. Both surfaces, 21A and 22A, are aspherical. The glass identity supports this interpretation: S-LAH65VS is a high-index moldable lanthanum glass. With `νd = 46.5`, it should be described as a low-Abbe high-index lanthanum glass rather than a conventional crown.

The double-sided asphere is placed in the positive rear moving unit, where it can correct residual spherical aberration from the f/1.4 aperture and field-dependent aberrations left by the front group. The element is also part of the moving L4/Lr1 unit, so its corrections follow the rear focus group during close focusing.

### E13 + E14 — L5 Front Cemented Doublet

E13: `nd = 2.00100`, `νd = 29.1`. Glass: S-LAH99, OHARA code 001-291. `f = +46.55 mm`.

E14: `nd = 1.58144`, `νd = 40.8`. Glass: S-TIL25, OHARA code 581-407. `f = -39.88 mm`.

The cemented pair has `f = -295.07 mm`, so it is weakly negative overall. The index contrast at the cemented interface is very large, about `Δnd = 0.42`. This provides useful interface power and field correction while keeping the physical element group compact.

The first surface of E13 is flat. This is a notable construction choice in a very high-index positive element because E13's useful positive power is concentrated at the cemented interface rather than at an exposed front surface.

### E15 — Negative Meniscus Field-Flattening Tail

`nd = 1.72825`, `νd = 28.5`. Glass: S-TIH10 / N-SF10 class, code 728-285. `f = -146.02 mm`.

The final element is a weak negative meniscus near the image side. Its primary role is field flattening and residual distortion/lateral-color correction rather than focus power. The patent states that this second rear lens unit Lr2 is closest to the image plane and is effective in correcting Petzval sum and facilitating curvature-of-field correction (¶0035).

The back focal distance after this surface is `14.66 mm`, which is short relative to the focal length and consistent with a mirrorless RF-mount design. It should not be characterized as a long SLR-style clearance distance.

## Glass Identification and Selection

The patent publishes refractive index and Abbe number, not manufacturer glass names. The identifications below are catalog-code matches or close catalog matches against HOYA and OHARA data. Equivalent cross-reference entries should not be treated as proof of identical composition.

| Element | Patent `nd / νd` | Catalog identification | Status | Role |
|---|---:|---|---|---|
| E1 | 1.92286 / 20.9 | HOYA E-FDS1 / M-FDS1 class, 923-209 | Code match | Front dense flint collector |
| E2 | 1.53352 / 52.8 | UV-cured resin | Patent material only | Hybrid aspherical cap |
| E3 | 1.65412 / 39.7 | OHARA S-NBH5 / Schott N-KZFS5 class, 654-397 | Code match | KZFS/NBH negative substrate |
| E4, E8 | 1.77047 / 29.7 | HOYA NBFD29, 770-297 | Code match | Dense flint negative elements |
| E5 | 1.76385 / 48.5 | OHARA S-LAH96, 764-485 | Exact code match | High-index lanthanum glass in D1 |
| E6 | 1.91082 / 35.2 | HOYA TAFD35, 911-353 | Code match | Strong positive high-index element |
| E7 | 1.90043 / 37.4 | HOYA TAFD37A, 900-374 | Code match | Weak positive focus element |
| E9 | 1.59522 / 67.7 | OHARA S-FPM2, 595-677 | Exact code match | Fluorophosphate crown in rear doublet |
| E10 | 1.73037 / 32.2 | HOYA NBFD32, 730-322 | Code match | Dense flint in rear doublet |
| E11 | 1.49700 / 81.7 | OHARA S-FPL51 / HOYA FCD1 class, 497-816 | Close code match | UD fluorophosphate positive element |
| E12 | 1.80400 / 46.5 | OHARA S-LAH65VS, 804-465 | Exact code match | Moldable high-index aspherical element |
| E13 | 2.00100 / 29.1 | OHARA S-LAH99, 001-291 | Exact code match | Ultra-high-index rear positive element |
| E14 | 1.58144 / 40.8 | OHARA S-TIL25, 581-407 | Exact code match | Light flint rear negative element |
| E15 | 1.72825 / 28.5 | OHARA S-TIH10 / Schott N-SF10 class, 728-285 | Close code match | Dense-flint field flattener |

The palette is dominated by high-index glasses. Only E9 and E11 are high-Abbe fluorophosphate materials. Most remaining glass entries are dense flints or low-Abbe high-index lanthanum glasses. This is consistent with a design strategy that controls Petzval curvature, surface slopes, and f/1.4 spherical aberration with high index while using a limited number of high-Abbe materials for chromatic correction.

## Focus Mechanism

The patent focus system is a two-unit floating inner-focus arrangement. L2 and L4/Lr1 move objectward during focusing; L1, L3, the stop, and L5/Lr2 remain fixed relative to the image plane (¶0019). The total lens length is preserved because each moving unit's bounding gaps sum to a constant value.

| Gap | Location | Infinity | Close-focus state | Change |
|---|---|---:|---:|---:|
| d10 | L1 to L2 | 3.76 mm | 1.46 mm | -2.30 mm |
| d12 | L2 to L3 | 3.66 mm | 5.96 mm | +2.30 mm |
| d15 | Stop to L4/Lr1 | 11.67 mm | 7.27 mm | -4.40 mm |
| d22 | L4/Lr1 to L5/Lr2 | 2.68 mm | 7.08 mm | +4.40 mm |

The patent close-focus object position is `-400 mm` from the image plane (¶0068). With the patent's total track of about `117.51 mm`, this corresponds to an object about `282.49 mm` in front of the first surface. Direct paraxial propagation from that object plane to the fixed image plane gives `m = -0.155`, consistent with Canon's published `0.15x` maximum magnification after rounding and real-lens finite-aperture effects.

The computed Gaussian EFL changes from `48.499 mm` at infinity to `44.135 mm` at the close-focus spacing. This focal-length shortening is typical of compact internal-focus normal lenses.

## Aspherical Surfaces

The patent's aspheric equation is the standard even-polynomial sag form (¶0066-¶0067):

$$
x = \frac{h^2/R}{1 + \sqrt{1 - (1 + K)(h/R)^2}} + A_4h^4 + A_6h^6 + A_8h^8 + A_{10}h^{10} + A_{12}h^{12}
$$

The patent convention uses `K = 0` for a spherical base. No nonzero conic constants are used in Numerical Example 1.

| Surface | Element | K | A4 | A6 | A8 | A10 | A12 |
|---|---|---:|---:|---:|---:|---:|---:|
| 3A | Resin cap E2 | 0 | -3.43375e-7 | -2.73639e-9 | +6.57484e-12 | -1.50535e-14 | +9.83500e-18 |
| 21A | E12 front | 0 | -3.27084e-6 | +6.22450e-10 | +1.62557e-11 | -9.43111e-14 | +1.12652e-16 |
| 22A | E12 rear | 0 | +6.07848e-6 | -7.76772e-9 | +6.38476e-11 | -1.90658e-13 | +1.91577e-16 |

At the inferred clear semi-diameters used in the data file, the polynomial departures from the spherical base are:

| Surface | Inferred semi-diameter | Polynomial departure |
|---|---:|---:|
| 3A | 24.0 mm | -0.508 mm |
| 21A | 20.8 mm | -0.683 mm |
| 22A | 20.6 mm | +1.067 mm |

For surfaces 3A and 21A, which have positive base radii, the negative departure shifts the rim objectward relative to the spherical base. For surface 22A, which has a negative base radius, the positive departure shifts the rim imageward relative to the spherical base and reduces the effective concavity of the rear surface at the edge. These signs are important; reading the coefficients without the surface-radius convention can invert the optical interpretation.

## Conditional Expressions

The patent states 15 conditional expressions for the preferred range of the design (¶0041-¶0043) and tabulates the values for each numerical example in Table 1 (¶0069). The computed values below use the Example 1 prescription at infinity focus and the patent focal length `f = 48.50 mm`.

| # | Expression | Patent Table 1 | Computed | Result |
|---|---|---:|---:|---|
| 1 | `f1 / f` | 2.975 | 2.975 | Satisfied |
| 2 | `LD1 / f` | 0.041 | 0.041 | Satisfied |
| 3 | `SK / f` | 0.302 | 0.302 | Satisfied |
| 4 | `νd1` | 20.881 | 20.9 | Satisfied |
| 5 | `T1 / f` | 0.742 | 0.742 | Satisfied |
| 6 | `T2 / f` | 0.063 | 0.062 | Satisfied |
| 7 | `Tr1 / f` | 0.415 | 0.415 | Satisfied |
| 8 | `Tr2 / f` | 0.339 | 0.339 | Satisfied |
| 9 | `fLf / f` | 1.984 | 1.985 | Satisfied |
| 10 | `fLr / f` | 1.167 | 1.167 | Satisfied |
| 11 | `fLf / fLr` | 1.701 | 1.701 | Satisfied |
| 12 | `fL1 / f` | 1.093 | 1.093 | Satisfied |
| 13 | `|fL2| / f` | 2.571 | 2.571 | Satisfied |
| 14 | `fLr1 / f` | 0.785 | 0.785 | Satisfied |
| 15 | `fLr2 / f` | -1.988 | -1.988 | Satisfied |

The small differences in rows 4, 6, and 9 are rounding artifacts. Row 4 uses the patent's more precise Abbe number in Table 1, while the prescription table prints `νd = 20.9`.

## Verification Summary

All load-bearing quantitative values were rechecked by independent paraxial matrix tracing using the patent surface table, the variable gap table, and the patent refractive indices.

| Quantity | Computed | Patent / source value | Difference |
|---|---:|---:|---:|
| Infinity EFL | 48.499 mm | 48.50 mm | -0.001 mm |
| Back focal distance SK | 14.660 mm | 14.66 mm | 0.000 mm |
| Total track, first surface to image | 117.51 mm | 117.49 mm | +0.02 mm |
| Patent image height from `f tan(24.04°)` | 21.634 mm | 21.64 mm | -0.006 mm |
| L1 focal length | 53.015 mm | 53.02 mm | -0.005 mm |
| L2 focal length | 124.708 mm | 124.70 mm | +0.008 mm |
| L3 focal length | -49.725 mm | -49.73 mm | +0.005 mm |
| L4 / Lr1 focal length | 38.048 mm | 38.05 mm | -0.002 mm |
| L5 / Lr2 focal length | -96.431 mm | -96.43 mm | -0.001 mm |
| Close-focus EFL | 44.135 mm | Not tabulated | — |
| Close-focus paraxial magnification | -0.155 | Canon publishes 0.15x | Rounded agreement |

The Petzval sum was recomputed surface by surface as `Σ φ / (n n')`, not by summing thin-lens element powers. The result is `0.001970 mm^-1`, corresponding to a Petzval radius of about `507.5 mm`, or about `10.5×` the infinity EFL. This is consistent with a strongly corrected normal lens rather than a simple double-Gauss derivative.

## Sources

- US 2025/0251576 A1, Canon Kabushiki Kaisha, “Optical System and Image Pickup Apparatus,” Numerical Example 1.
- Canon RF 50mm f/1.4 L VCM official product specifications, including 50 mm f/1.4 marketing specification, RF mount, two aspherical elements, one UD element, Nano USM plus VCM drive, 0.40 m closest focusing distance, 0.15x maximum magnification, 46° diagonal angle of view, and 67 mm filter size.
- OHARA optical glass catalog and cross-reference data for S-NBH5, S-LAH96, S-FPM2, S-FPL51, S-LAH65VS, S-LAH99, S-TIL25, and S-TIH10.
- HOYA optical glass cross-reference data for E-FDS1 / M-FDS1, NBFD29, TAFD35, TAFD37A, NBFD32, and FCD1 class equivalents.
