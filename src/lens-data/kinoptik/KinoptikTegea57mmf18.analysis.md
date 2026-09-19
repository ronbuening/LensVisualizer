## Patent Reference and Design Identification

**Patent:** US 3,037,426\
**Application Number:** U.S. Ser. No. 46,918\
**Priority:** September 27, 1957 (France)\
**Filed:** August 2, 1960\
**Granted:** June 5, 1962\
**Inventor:** Edgard Hugues\
**Assignee:** Les Appareils de Precision Kinoptik\
**Title:** *Photographic Objectives Having a Large Angular Field*\
**Embodiment analyzed:** Example 1 / Table 1 / FIG. 1

The prescription transcribes the first numerical embodiment of Hugues's large-angular-field objective. The patent describes three successive dioptric systems: a negative first system with a paraboloidal surface, a positive second system, and a positive four-element third system. For Example 1 it publishes a 5.8 mm focal length, f/1.8 aperture, 103° total object field, and 17.95 mm distance from the last objective surface to the image plane. Table 1 supplies the complete six-element, all-air-spaced numerical prescription and the diaphragm position. [US 3,037,426, printed pp. 1–3; Table 1 on printed p. 3 / PDF p. 5.]

The production identification is a strong research correlation, not manufacturer-confirmed patent-to-product attribution. The convergent evidence is:

1. The patent is assigned to Kinoptik and Example 1 is a 5.8 mm, f/1.8 extreme-wide-angle design with six air-spaced elements and a long back focal distance.
2. A Kinoptik-origin brochure identifies the **KINOPTIK 5.7mm f/1.8 TEGEA** for 16 mm, gives a 97° angle of view, an f/1.8–f/16 aperture range, and an 18 mm optical back focus. The verified patent model gives a paraxial back focal distance of 17.9476 mm from the final glass surface.
3. An ARRIFLEX 16 BL catalog independently lists the Kinoptik Tegea 5.7 mm Extreme Wide Angle Lens f/1.8, T2.
4. A Kinoptik-origin 1975 catalog lists the 5.7 mm f/1.8 TEGEA as a 16 mm lens.

No located manufacturer source states that US 3,037,426 Example 1 is the production Tegea prescription. The patent's 5.8 mm design value and 103° object field therefore remain distinct from the marketed 5.7 mm designation and 97° 16 mm angle of view. No scale factor is applied to the patent prescription.

## Optical Architecture

The implemented model is a six-element, six-air-spaced-group retrofocus objective organized into the patent's three functional systems I, II, and III. The computed design EFL is 5.7973 mm, while the paraxial back focal distance is 17.9476 mm from the rear vertex of L6. Their ratio is 3.0959, so the design satisfies the project definition of retrofocus, `BFD > EFL`. The first-surface-to-image-plane track is 165.4376 mm; it is not a telephoto configuration under the project's `TL/EFL < 1` criterion.

System I is the single negative plano-parabolic L1. The patent explicitly assigns this front system the task of correcting distortion over an unusually large object field, stating that its index and curvature can be paired to control the distortion form. [US 3,037,426, printed p. 2 / PDF p. 4.]

System II is the single positive L2. The patent states that its curvature is preferably chosen to keep field curvature low and that its dispersive power is chosen so that chromatic aberration associated with image magnification is approximately corrected. Systems I and II are described as an afocal telescope of magnitude 1/3.92. The verified Table 1 model gives angular magnification 0.255174, compared with the published 1/3.92 = 0.255102. [US 3,037,426, printed p. 2 / PDF p. 4.]

System III comprises L3 through L6 and forms the image of a remote object at the focal plane. The patent attributes correction of spherical aberration, coma, astigmatism, and chromatic aberrations to the optical and geometric characteristics of this rear system as a whole; the source does not assign those corrections uniquely to individual rear elements. [US 3,037,426, printed p. 2 / PDF p. 4.]

The patent prose gives System II a focal length of +84.2 mm, but the Table 1 prescription computes to +85.0063 mm. That difference exceeds the source-precision sensitivity bound. The Table 1 values are retained because they simultaneously reproduce the near-afocal I+II pair, the whole-lens EFL, and the published back focal distance. The discrepancy is therefore preserved rather than silently corrected.

## Element-by-Element Analysis

The focal lengths below are standalone air-to-air element powers computed from the verified final prescription. They are not a decomposition of each element's in-situ aberration contribution.

### L1 — Plano-Concave Negative, rear paraboloid

**nd = 1.69153, νd = 54. Glass: N-LAK9-class (coordinate-compatible spectral proxy; supplier unproven). Standalone air-to-air EFL: −21.6910 mm.**

L1 is System I and is the only aspherical element in the selected embodiment. Its front face is plane and its rear face is the published paraboloid. The patent identifies this negative front system as the principal distortion-control system for the very large angular field. The final model preserves the patent coordinates directly; the production 5.7 mm name is not used to rescale them.

The glass label is a coordinate/class identification, not a supplier claim. Current catalog comparisons place the source coordinate near lanthanum-crown families, but the patent does not identify a vendor or melt.

### L2 — Biconvex Positive

**nd = 1.68129, νd = 32. Glass: Unmatched (681320-class; no compatible catalog curve). Standalone air-to-air EFL: +85.0063 mm.**

L2 is System II. In the patent's description, its curvature is associated with low field curvature and its dispersive power with approximate correction of chromatic aberration related to image magnification. Together with L1 it forms the nearly afocal front telescope.

The +85.0063 mm value is computed from Table 1 and is intentionally not changed to the +84.2 mm prose value. No exact current-catalog glass identity is defensible from the stored `nd`/`νd` coordinate alone.

### L3 — Biconvex Positive

**nd = 1.62025, νd = 60. Glass: N-SK16-class (coordinate-compatible spectral proxy; supplier unproven). Standalone air-to-air EFL: +19.9844 mm.**

L3 is the first element of System III. It is a strong positive element following the long L2-to-L3 air space. The patent treats L3–L6 collectively as the rear imaging and aberration-correction system; no element-specific aberration assignment is made here beyond the verified power and geometry.

### L4 — Biconcave Negative

**nd = 1.73150, νd = 28. Glass: Unmatched (732280-class; no compatible catalog curve). Standalone air-to-air EFL: −10.7749 mm.**

L4 is the strong negative member of System III and lies immediately ahead of the diaphragm. Its rear surface is followed by 1.40 mm of air to the stop. The relatively high index and low Abbe number are source coordinates; they do not by themselves establish a particular modern catalog glass or a unique chromatic role.

### L5 — Positive Meniscus

**nd = 1.62025, νd = 60. Glass: N-SK16-class (coordinate-compatible spectral proxy; supplier unproven). Standalone air-to-air EFL: +20.1901 mm.**

L5 follows the stop after a 1.29 mm air space. Its positive meniscus form is preserved directly from the numerical prescription. It uses the same source glass coordinate as L3 and L6.

### L6 — Biconvex Positive

**nd = 1.62025, νd = 60. Glass: N-SK16-class (coordinate-compatible spectral proxy; supplier unproven). Standalone air-to-air EFL: +36.0156 mm.**

L6 is the final positive element. The patent prose calls it a "biconvex meniscus," but Table 1 gives equal-magnitude, opposite-sign radii (+44.46/−44.46 mm), which define a symmetric biconvex numerical form. The implemented model follows the numerical table and preserves the prose/table shape discrepancy explicitly. The rear vertex of L6 is the reference plane for the patent's 17.95 mm image-space distance and for the verified 17.9476 mm paraxial back focal distance.

As a complete four-element unit, System III computes to +22.7193 mm, consistent with the patent's printed +22.79 mm within the source-precision bound.

## Glass Identification and Selection

Patent refractive indices and Abbe numbers are preserved. Named catalog glasses below are coordinate-compatible spectral proxies, not identifications of the production supplier or historical melt. The runtime compatibility guards are unchanged; no catalog-derived line indices are copied into the prescription.

| Element | Patent nd | Patent νd | Runtime glass annotation |
|---|---:|---:|---|
| L1 | 1.69153 | 54.00 | N-LAK9-class (coordinate-compatible spectral proxy; supplier unproven) |
| L2 | 1.68129 | 32.00 | Unmatched (681320-class; no compatible catalog curve) |
| L3 | 1.62025 | 60.00 | N-SK16-class (coordinate-compatible spectral proxy; supplier unproven) |
| L4 | 1.73150 | 28.00 | Unmatched (732280-class; no compatible catalog curve) |
| L5 | 1.62025 | 60.00 | N-SK16-class (coordinate-compatible spectral proxy; supplier unproven) |
| L6 | 1.62025 | 60.00 | N-SK16-class (coordinate-compatible spectral proxy; supplier unproven) |

No patent C/F/g line indices or partial-dispersion measurements are supplied for these elements. Unresolved rows retain the Abbe fallback; compatible rows use the catalog curve. None of these assignments establishes apochromatic performance.

## Focus Mechanism

The optical focus status is **NO_INTERNAL_RECONSTRUCTION**. The patent gives a remote-object state and a focal plane but no variable-spacing table, focus travel, or internal focusing law. The data file therefore contains no `var` gaps and no reconstructed optical close-focus state.

The Kinoptik-origin brochure specifies fixed focus, from infinity to the front element. No moving groups are modeled. The required `closeFocusM` uses the same non-operative infinity sentinel as the Super-Tegea; the secondary 19-inch listing no longer overrides the manufacturer description.

## Aspherical Surfaces

Surface **2A**, the rear face of L1, is the sole asphere. Table 1 describes it as a "parabola of parameter equal to 15." The model maps this to the standard LensVisualizer rotational conic with `R = +15 mm` and `K = -1`, with all polynomial coefficients zero:

\[
z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}.
\]

For `K = -1`, this reduces exactly to the paraboloid `z = h²/(2R)`. The mapping was verified by first-order closure against the published L1 focal length and the full-system EFL/back-focus values; it is not an arbitrary fit.

The patent does not publish a clear semi-diameter for this surface. The data file therefore uses a modeled 26 mm semi-diameter, derived within the verified geometry model rather than from Table 1. No polynomial aspheric departure coefficients are present, and no scaling transform is applied.

## Conditional Expressions

Claims 1–3 impose the applicable numerical and structural conditions for Example 1. Claim 1 bounds the three system focal lengths, both large inter-system air spaces, and the diaphragm location relative to System III; Claim 2 bounds the System II/System I focal-length ratio; Claim 3 specifies the single plano-parabolic first system. Using the verified final prescription, all of these applicable conditions pass. Claim 4 instead describes the alternative two-lens first system and is not applicable to FIG. 1.

| Patent condition | Final-model result |
| --- | --- |
| `2f < |f1| < 4.5f` | PASS |
| `8f < f2 < 25f` | PASS |
| `3f < f3 < 6.5f` | PASS |
| `5f < gap(I–II) < 20f` | PASS |
| `4f < gap(II–III) < 16f` | PASS |
| `z(front III) − f < z(STO) < z(rear III) + f` (Claim 1) | PASS — `129.5327 < 143.1500 < 153.2873 mm` |
| `2 < f2/|f1| < 6` | PASS |
| `System I is a single plano-parabolic lens` (Claim 3) | PASS |

These passes use the Table 1-derived +85.0063 mm System II focal length. They do not erase the separate +84.2 mm prose discrepancy. The diaphragm-location result uses the source System III front and rear vertices and the computed design EFL. [US 3,037,426, claims 1–3, printed pp. 4–5 / PDF pp. 5–6.]

## Verification Summary

The final data revision was recomputed directly from the parsed `.data.ts`, not from a separate intended prescription. Sequential height/reduced-angle tracing and an independently implemented ordinary-slope ABCD calculation agree to numerical precision.

| Quantity | Verified final-model value | Source/comparison status |
| --- | ---: | --- |
| Design EFL | 5.7973 mm | agrees with patent 5.8 mm |
| Paraxial BFD, L6 rear vertex to focus | 17.9476 mm | agrees with patent 17.95 mm |
| BFD / EFL | 3.0959 | retrofocus by project definition |
| Modeled maximum aperture | f/1.8000 | calibrated to published f/1.8 |
| System I EFL | −21.6910 mm | agrees with patent −21.69 mm |
| System II EFL | +85.0063 mm | differs from prose +84.2 mm; Table 1 retained |
| System III EFL | +22.7193 mm | consistent with patent +22.79 mm within source precision |

The physical diaphragm diameter is not published. The modeled stop semi-diameter, 4.872463417 mm, is calibrated from the published f/1.8 and the verified entrance-pupil magnification; reproducing f/1.8 is therefore a calibration condition, not an independent measurement of the historical iris.

The patent likewise publishes no clear semi-diameters. All data-file `sd` values are modeling inferences based on the source field, exact meridional ray tracing, FIG. 1 proportions, and the current edge-thickness/rim-slope/gap-clearance policy. The exact field check retains the chief ray at the published 103° full field while permitting large-field pupil vignetting; the model does not claim that the complete f/1.8 stop bundle is unvignetted at the extreme field edge.

The surface-by-surface Petzval sum from the final model is +0.005139 mm⁻¹. This is a first-order computed quantity, not a direct statement of final off-axis image quality. Repository surface validation passes; compatible glass labels are resolved through the runtime catalog.

## Sources / References

1. Edgard Hugues, **US Patent 3,037,426, "Photographic Objectives Having a Large Angular Field"**, granted June 5, 1962. Example 1 and Table 1: printed pp. 2–3 (PDF pp. 4–5); claims 1–4: printed pp. 4–5 (PDF pp. 5–6). Primary prescription source.
2. **KINOPTIK professional lens brochure — 5.7 mm f/1.8 TEGEA**, Kinoptik-origin scan hosted by Pacific Rim Camera: https://www.pacificrimcamera.com/rl/00030/00030.pdf . Product identity, 16 mm coverage, marketed angle of view, aperture range, optical back focus, and mechanical forms.
3. **ARRIFLEX 16 BL catalog**, Arnold & Richter / ARRIFLEX, scan hosted by Pacific Rim Camera: https://www.pacificrimcamera.com/rl/01128/01128.pdf . Independent system-catalog listing of the Kinoptik Tegea 5.7 mm f/1.8, T2.
4. **KINOPTIK price catalog, January 1, 1975**, manufacturer-origin scan hosted by Scribd: https://www.scribd.com/document/966475319/Kinoptik-1 . Historical listing of the 5.7 mm f/1.8 TEGEA as 16 mm only.
5. **CineD Lens Database**, Kinoptik Tegea 5.7 mm listing: https://www.cined.com/lens-database/?lens=spherical-primes . Secondary listing; its close-focus value is superseded by the manufacturer fixed-focus specification.
6. Official optical-glass catalog resources consulted for coordinate comparison: SCHOTT, OHARA, HOYA, HIKARI GLASS, SUMITA OPTICAL GLASS, and CDGM. Their candidate matches support the class-level annotations only; none establishes the historical Tegea glass supplier.

## Image coverage

The [manufacturer brochure, page 4](https://www.pacificrimcamera.com/rl/00030/00030.pdf) specifies standard 16 mm cinema coverage. The authored 10.26 × 7.49 mm format requires a 12.70 mm diagonal; this is not a measured maximum image circle or a Super 16 claim.
