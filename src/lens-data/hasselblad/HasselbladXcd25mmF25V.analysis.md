# HASSELBLAD XCD 25mm f/2.5 V

## Patent Reference and Design Identification

**Patent:** US 2024/0329362 A1  
**Application Number:** 18/615,065  
**Filed:** 25 March 2024  
**Published:** 3 October 2024  
**Priority:** 30 March 2023, JP 2023-054468  
**Inventor:** Emiri Suzuki  
**Applicant:** Panasonic Intellectual Property Management Co., Ltd.  
**Title:** Imaging optical system, image capture device, and camera system  
**Embodiment analyzed:** Example 2, Fig. 2A, Tables 2A–2D

The prescription is Example 2 of the cited patent, correlated with the Hasselblad XCD 2,5/25V.
The correlation is an optical identification hypothesis, not manufacturer confirmation of a factory prescription or optical supplier. [P]

The principal convergences are:

1. Both designs contain 13 physical lenses in 10 air-separated groups.
2. The patent has seven aspheric surfaces on L2, L6, L10 and L13. The manufacturer's four highlighted aspheric lenses occupy the same positions, and its stop lies between L8 and L9.
3. The manufacturer's three ED markings fall on L3, L8 and L11 when the diagram is counted from the object side. These labels do not establish a universal Abbe-number threshold; the patent's L11 has νd = 60.5.
4. The patent's infinity values are 25.0279 mm and f/2.57524, close to the marketed 25 mm and f/2.5, but preserved as distinct quantities.
5. The source near object distance is 135.0000 mm to the first vertex. Together with its 115.0000 mm first-vertex-to-image track, this gives 250 mm object-to-image distance, matching the manufacturer's stated minimum-focus reference.
6. Both use internal focusing. The patent moves its negative two-lens G2 imageward; Hasselblad describes a compact focusing group driven by a linear stepping motor. [P, M1–M3]

Hasselblad announced the lens on 7 May 2024. Its datasheet gives f/2.5–32, a 95° diagonal field, and maximum image scale 1:5.8. The patent's printed infinity full field is 97.1306°, and the computed near Gaussian magnification is approximately −0.167185, or 1:5.981. These differences are not removed by scaling or changing the source geometry. [P, M1, M3]

The 44×33-format model uses the X2D reference sensor dimensions of 43.8 × 32.9 mm; these specify the sampled format, not an independently measured production image-circle diameter. [M4]

## Optical Architecture

This is a positive–negative–positive, internally focused wide-angle system. G1 comprises a negative front subgroup G1a followed by a positive subgroup G1b. G2 lies immediately behind the stop and contains a positive lens followed by a stronger negative lens. G3 is fixed and positive overall. [P, Fig. 2A; ¶¶0060–0081]

The functional groups are distinct from the 10 air-separated manufacturing groups. Computed isolated group focal lengths include each group's native internal spacings and bonding layers:

| Group | Physical lenses | Computed group focal length | Motion |
|---|---|---:|---|
| G1a | L1–L4 | -30.574386 mm | Fixed |
| G1b | L5–L8 | +28.032553 mm | Fixed |
| G1 | L1–L8 | +22.771218 mm | Fixed |
| G2 | L9–L10 | -78.429586 mm | Imageward for near focus |
| G3 | L11–L13 | +86.772980 mm | Fixed |

The patent describes the negative–positive front arrangement as retro-focus type (¶0219). That local power arrangement should not be confused with a numerical claim that the complete lens's back focal distance exceeds its focal length: the computed infinity physical Gaussian BFD is 18.975552 mm, below the 25.028451 mm EFL. The modeled first-vertex-to-image track is 4.594767 times the EFL, so a telephoto-ratio description is also inappropriate.

Three printed 0.01000 mm bonding layers remain explicit optical media. Accordingly, the data contain 16 material entries but retain the patent's 13-lens count. They are not additional physical lenses. The final 1.80000 mm plane plate is retained separately as camera-side cover glass, followed by its native 1.00000 mm air gap. Its modeled paraxial focus shift is 0.613291139 mm; replacing it with empty space would change the optical model.

The patent relates the broad architecture to control of ray height and incidence at the front lens, and relates G2/G3 power balance to focus sensitivity, coma, field curvature and chromatic correction. Those statements concern the combined system, not a uniquely measured aberration contribution of each component. [P, ¶¶0199–0204]

## Element-by-Element Analysis

The focal lengths below are standalone, thick-element values in air, recomputed from the implemented radii, thicknesses and native d-line indices. They are not in-situ powers in the surrounding media. The printed Table 2D values and their small numerical residuals remain distinguishable from these calculations. Glass names denote coordinate classes; their reference spectra are discussed separately.

### L1 — Negative Meniscus

nd = 1.72916, νd = 54.7. Glass: TAC8 (HOYA; coordinate equivalent; supplier unconfirmed). f = -43.418 mm.

The front surface is convex toward the object, but the stronger image-side curvature makes the isolated lens negative. It starts the negative G1a subgroup. The patent's front-group rationale concerns the ray-height and incidence burden on this first lens; the sign alone does not quantify its distortion or chromatic contribution. [P, Fig. 2A; ¶¶0199–0200]

### L2 — Negative Meniscus (2× Asph)

nd = 1.51633, νd = 64.1. Glass: S-BSL7 (OHARA; coordinate equivalent; supplier unconfirmed). f = -116.878 mm.

Both boundaries, 3A and 4A, are aspheric. The element remains negative in the vertex-based first-order calculation. Its full profiles therefore provide degrees of freedom beyond the negative paraxial contribution; the high-order terms must be evaluated together rather than assigning a correction from A4 alone. [P, Table 2B]

### L3 — Biconcave Negative

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA; coordinate equivalent; supplier unconfirmed). f = -65.174 mm.

This high-Abbe negative lens begins bonded group D1. Its νd satisfies the patent's G1a negative-lens dispersion condition, including the stricter preferred lower limits. The patent associates that condition with chromatic aberration of magnification; that motivation is not a proof of the realized residual. [P, ¶¶0226–0230]

### L4 — Positive Meniscus

nd = 1.80518, νd = 25.5. Glass: FD60 (HOYA; coordinate equivalent; supplier unconfirmed). f = +63.789 mm.

The much more dispersive positive meniscus completes D1 through the explicitly retained bonding medium. Although L3 and L4 have substantial isolated powers of opposite sign, the assembled D1 focal length is +3000.977319 mm. This nearly cancelling net power is obtained by tracing all four boundaries and the finite bond, not by adding the isolated focal lengths. D1 remains part of a negative G1a. [P, Tables 2A and 2D]

### L5 — Negative Meniscus

nd = 1.92286, νd = 20.9. Glass: E-FDS1 (HOYA; coordinate equivalent; supplier unconfirmed). f = -49.258 mm.

This negative meniscus begins the positive G1b subgroup. Its high index and low Abbe number contrast with the subsequent positive components. Such a contrast supplies a chromatic balancing opportunity, but no individual chromatic or Seidel coefficient is inferred from that contrast alone. [P, Tables 2A and 2D]

### L6 — Biconvex Positive (2× Asph)

nd = 1.81055, νd = 41.1. Glass: K-VC181 (SUMITA; coordinate equivalent; supplier unconfirmed). f = +38.380 mm.

Both surfaces, 11A and 12A, are aspheric. The element is positive and lies between the negative L5 and negative L7. The modeled clear aperture is limited before the rear asphere's slope reversal; this is an aperture-domain choice, not an alteration of its native polynomial. [P, Table 2B; modeled aperture evaluation]

### L7 — Negative Meniscus

nd = 1.80610, νd = 33.3. Glass: NBFD15 (HOYA; coordinate equivalent; supplier unconfirmed). f = -53.413 mm.

L7 is the negative, relatively dispersive member of D2. Its rear boundary is followed by the explicit bond and then L8, so its quoted isolated-in-air power should not be substituted for its actual interface powers in D2. [P, Table 2A]

### L8 — Biconvex Positive

nd = 1.55032, νd = 75.5. Glass: FCD705 (HOYA; coordinate equivalent; supplier unconfirmed). f = +22.853 mm.

This high-Abbe positive lens completes D2 and ends G1b immediately before the stop. The assembled D2 focal length is +37.791563 mm. Its dispersion satisfies the patent's G1b positive-lens condition, which the patent connects with axial chromatic correction. [P, ¶¶0231–0235]

### L9 — Biconvex Positive

nd = 1.98612, νd = 16.5. Glass: FDS16-W (HOYA; coordinate equivalent; supplier unconfirmed). f = +52.488 mm.

L9 is the positive component of the moving G2 pair. Its unusually high native index satisfies the condition nLp > 1.8, as well as the more restrictive preferred bounds. The patent's stated reason for this index condition is to avoid requiring excessive curvature and size in the positive focusing lens. [P, ¶¶0207–0211]

### L10 — Biconcave Negative (2× Asph)

nd = 1.68948, νd = 31.0. Glass: L-TIM28 (OHARA; coordinate equivalent; supplier unconfirmed). f = -30.696 mm.

Both boundaries, 20A and 21A, are aspheric. L10 is negative in isolation and makes the two-lens focus group negative overall. L9 and L10 move together with their internal air separation fixed. The native L-TIM28 coordinate must not be silently replaced by the distinct S-TIM28 coordinate. [P, Fig. 2A, Tables 2A–2C; C1]

### L11 — Biconvex Positive

nd = 1.59410, νd = 60.5. Glass: FCD600 (HOYA; coordinate equivalent; supplier unconfirmed). f = +37.965 mm.

The positive biconvex lens starts fixed G3. It is marked ED in the manufacturer's optical schematic, but the corresponding patent Abbe number is below those of L3 and L8. The marking is retained as a product correlation observation, not a claim that a single Abbe cutoff defines all ED glass. [P, Table 2A; M1]

### L12 — Biconcave Negative

nd = 1.85451, νd = 25.2. Glass: NBFD25 (HOYA; coordinate equivalent; supplier unconfirmed). f = -24.174 mm.

L12 is the last negative lens and the negative member of D3. Together with L13, its standalone focal-length ratio is the quantity used by patent condition (3). The patent discusses this ratio in relation to chromatic aberration of magnification, coma and sagittal coma flare; those are system-level design motivations. [P, ¶¶0212–0217]

### L13 — Biconvex Positive (1× Asph)

nd = 1.51633, νd = 64.1. Glass: S-BSL7 (OHARA; coordinate equivalent; supplier unconfirmed). f = +44.514 mm.

The final positive lens has an aspheric image-side surface, 27A. D3, including its finite bonding layer, is negative overall with focal length -60.805309 mm, whereas the complete G3 including L11 is positive. The distinction shows why the last doublet, the individual lenses and the full rear group must not be assigned the same power description. [P, Tables 2A–2D]

The three bonding media each retain nd = 1.56732 and νd = 42.8 over 0.01000 mm center thickness. A public LF6 coordinate resemblance does not establish that they are LF6 glass, a particular resin, or a known adhesive formulation. No catalog C/F/g spectrum is assigned to them. The media are required to reproduce the source interface powers, even though they do not increase the physical lens count.

## Glass Identification and Selection

The patent publishes d-line index and Abbe coordinates, not supplier or melt names. Official OHARA, HOYA, SCHOTT, HIKARI, CDGM and SUMITA catalogs were compared at the printed precision. Several suppliers share coordinates, and a rounded match does not determine an original manufacturer. [C1–C6]

Each lens is labelled with one coordinate-compatible catalog glass, the reference in the last column below, and the model takes that glass's catalog dispersion curve. Native nd and νd remain unchanged. These reference curves make the chromatic model reproducible, but they are not measurements of the patent glasses.

| Location | Native nd | Native νd | Coordinate class / disposition | Selected reference spectrum |
|---|---:|---:|---|---|
| L1 | 1.72916 | 54.7 | TAC8 / S-LAL18 / K-LaK18 coordinate class | HOYA:TAC8 |
| L2, L13 | 1.51633 | 64.1 | S-BSL7 / L-BSL7 / K-BK7 coordinate class | OHARA:S-BSL7 |
| L3 | 1.49700 | 81.6 | FCD1 / N-PK52A / H-FK61 coordinate class | HOYA:FCD1 |
| bond L3-L4, bond L7-L8, bond L12-L13 | 1.56732 | 42.8 | Literal patent bonding medium; LF6-coordinate catalog references only | None; literal bond and Abbe approximation |
| L4 | 1.80518 | 25.5 | FD60 / SF6 coordinate class | HOYA:FD60 |
| L5 | 1.92286 | 20.9 | E-FDS1 / N-SF66 / H-ZF62 coordinate class | HOYA:E-FDS1 |
| L6 | 1.81055 | 41.1 | K-VC181 coordinate class | SUMITA:K-VC181 |
| L7 | 1.80610 | 33.3 | NBFD15 / H-ZLAF56B / J-LASFH6 coordinate class | HOYA:NBFD15 |
| L8 | 1.55032 | 75.5 | FCD705 coordinate class | HOYA:FCD705 |
| L9 | 1.98612 | 16.5 | FDS16-W coordinate class | HOYA:FDS16-W |
| L10 | 1.68948 | 31.0 | L-TIM28 coordinate class | OHARA:L-TIM28 |
| L11 | 1.59410 | 60.5 | FCD600 coordinate class | HOYA:FCD600 |
| L12 | 1.85451 | 25.2 | NBFD25 coordinate class | HOYA:NBFD25 |
| rear cover plate | 1.51680 | 64.2 | BSC7 / H-K9L / N-BK7 coordinate class | HOYA:BSC7 |

The cover plate's class remains separate from the similar L2/L13 crown coordinate. The plate uses its source nd and νd and a compatible runtime catalog class; the 13 lenses use the catalog dispersion curves of their reference glasses. The bonds use the lower-information Abbe approximation.

OHARA S- and L-prefix products are not interchangeable. In particular, the source's L-TIM28-like coordinate is materially different from S-TIM28. For L3, HOYA FCD1 is a selected reference; the current precise S-FPL51 Abbe value falls outside the source's rounded νd = 81.6 cell and is not silently substituted. For L12, the NBFD25 reference is checked through its coefficient-derived dispersion rather than relying only on an ambiguous rounded catalog boundary.

No apochromatic-performance claim is made. Coordinate matching and catalog reference curves do not establish the source's true secondary spectrum, melt variation or production performance. The refractive-index and dispersion contrasts are consistent with the patent's stated chromatic design conditions, but the realized correction requires a validated spectral ray calculation with appropriate source data.

## Focus Mechanism

The source mechanism is internal focusing by G2 only. G1 and G3 are fixed relative to the physical image plane, apart from the rounding closure in the printed gap values. G2 comprises L9 and L10 and moves imageward as focus changes from infinity to the near endpoint. [P, ¶¶0080–0081]

| Source spacing | Infinity | Near |
|---|---:|---:|
| d17, stop to G2 | 3.4763 mm | 8.4436 mm |
| d21, G2 to G3 | 10.7609 mm | 5.7937 mm |

The two differences are +4.9673 mm and −4.9672 mm. Their 0.0001 mm closure discrepancy is retained. The nominal physical first-vertex-to-image track is 115 mm; summing the implemented source thicknesses gives 114.9999 mm at infinity and 115.0000 mm at near. No gap has been adjusted to force exact closure.

The near source object is 135.0000 mm in front of the first vertex, or 250.0000 mm from the physical image plane. This is distinct from front-element working distance and from an arbitrary focus-slider label. The native near row reports 24.1041 mm and f/2.68882; these source-state values are distinct from the marketed aperture and from the infinity stop calibration. Only the published near state is a source-backed finite conjugate. Intermediate positions linearly interpolate the two source gaps; distances shown between them are estimates, not a recovered focus cam.

The patent tabulates no intermediate focus position. With linear interpolation of the two gaps, the midpoint of the G2 travel is paraxially conjugate to an object about 0.40 m from the image plane, so focus distances displayed between infinity and 0.25 m are approximate. The source endpoints, the internal motion and the image plane are kept as printed rather than replaced by a reconstructed focus path.

At the native source planes the calculated first-order focus residuals are −0.020348 mm at infinity and +0.070242 mm at near, where positive means that the Gaussian focus is imageward of the physical image plane. The printed cardinal summaries themselves imply nonzero residuals, so the model preserves these source states. Gaussian focus and a finite-aperture aberration-balanced image plane are different quantities; these residuals alone are not a production-performance measurement.

Hasselblad specifies a linear stepping motor and an internal focusing group. The source supports the optical group movement, but neither that statement nor the marketed minimum distance supplies an additional intermediate focus law. [M1–M3]

## Aspherical Surfaces

The source uses

$$z(h)=\frac{h^2/r}{1+\sqrt{1-(1+\kappa)(h/r)^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}.$$

Here h and z are in millimetres. The implemented conic constant is K = κ, with no subtract-one conversion. A coefficient of order p has units mm^(1−p). Scale is unity. All printed coefficient precision is retained; the schema's unused A14 terms are explicitly zero. No odd-order term is published. [P, equation (1), ¶0260; Table 2B]

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 3A | 0.00000E+00 | 9.54293E-06 | -1.64489E-07 | 3.04689E-10 | -5.63399E-13 | 0.00000E+00 |
| 4A | -1.10056E+00 | 4.20301E-05 | -1.90745E-07 | 4.02908E-10 | -1.26027E-12 | 6.23089E-16 |
| 11A | 0.00000E+00 | 1.90760E-05 | 4.03766E-08 | 2.02660E-11 | -4.20963E-13 | 1.91389E-16 |
| 12A | 0.00000E+00 | 2.54671E-05 | 6.21091E-08 | 1.85956E-11 | 7.07399E-13 | -3.75896E-15 |
| 20A | 0.00000E+00 | 1.23340E-05 | -1.71693E-07 | 1.40130E-09 | -4.63411E-12 | 0.00000E+00 |
| 21A | 0.00000E+00 | 1.83635E-05 | -1.65064E-07 | 1.26600E-09 | -3.91893E-12 | 0.00000E+00 |
| 27A | 0.00000E+00 | 1.81562E-05 | 8.31766E-11 | 1.93659E-11 | -2.45165E-14 | 0.00000E+00 |

The following evaluations use the modeled clear radii, not published aperture dimensions. “Polynomial departure” is the sum of the A terms relative to the native conic base; it is not always departure from a real spherical surface at that radius.

| Surface | Modeled SD | Polynomial departure from native conic | Rim slope magnitude |
|---|---:|---:|---:|
| 3A | 16.2 mm | -1571.990250 µm | 39.370368° |
| 4A | 16.2 mm | -7.098215 µm | 31.922811° |
| 11A | 11.7 mm | +449.176028 µm | 16.794618° |
| 12A | 11.7 mm | +652.343774 µm | 0.307039° |
| 20A | 10.0 mm | +45.435900 µm | 10.026976° |
| 21A | 10.0 mm | +105.981700 µm | 18.376144° |
| 27A | 17.3 mm | +1725.073096 µm | 0.535714° |

- 3A: the combined higher-order polynomial produces a negative peripheral departure despite the positive A4 term; the entire polynomial determines its rim shape.
- 4A: the K = −1.10056 base conic supplies much of the shape change. At the modeled radius, comparison with the same-radius sphere is outside that sphere's real aperture domain, so no spherical-departure value is asserted there.
- 11A: the positive peripheral polynomial displacement increases the imageward sag of the front surface of L6.
- 12A: positive displacement reduces the magnitude of its negative base sag and substantially flattens the edge. The modeled rim stops before the slope reversal.
- 20A: the polynomial reduces the negative front-surface sag of L10 at its modeled edge.
- 21A: the polynomial increases the positive rear-surface sag of L10 at its modeled edge.
- 27A: the positive displacement reduces the magnitude of the final negative-radius surface's sag; the modeled rim remains before its slope reversal.

These are geometric profile interpretations, not isolated aberration allocations. The cited source does not establish molding or polishing methods for these particular elements. The thin bonding layers do not coincide with the listed aspheric boundaries and are not relabeled as fabricated hybrid-asphere resin layers.

## Conditional Expressions

The patent gives the following base preferred conditions and additional narrower preferences. Its language presents design conditions and advantages rather than a claim that every possible embodiment must satisfy every narrower alternative. All seven base conditions and all 22 listed narrower clauses are satisfied by this implementation. [P, ¶¶0198–0241; printed p. 20, Table 1]

| Condition | Meaning / applicable witness | Recomputed value | Source base bounds |
|---|---|---:|---|
| (1) | abs(f3/f2) for G3 and G2 | 1.106380701 | 0.8 < value < 3.0 |
| (2) | nLp of L9 | 1.98612 | value > 1.8 |
| (3) | abs(fen/fep) for L12 and L13 | 0.543065730 | 0.15 < value < 1.0 |
| (4) | f1b/f at infinity | 1.120027458 | 0.7 < value < 2.0 |
| (5) | νd of a negative G1a lens | L2: 64.1; L3: 81.6 | At least one > 60 |
| (6) | νd of a positive G1b lens | L8: 75.5 | At least one > 60 |
| (7) | Physical BF/Y | 0.690760000 | 0.5 < value < 1.0 |

The BF in condition (7) is the physical separation from the last lens surface to the source image plane, including the camera-side plate and gaps, rather than the Gaussian focal-plane intercept or the air-equivalent rear distance. For the Abbe conditions, a qualifying lens is sufficient; the source does not require every lens in the subgroup to exceed the threshold.

## Computed First-Order Values and Model Limits

The following values are computed from the final source-preserving prescription with the physical cover plate included. H and H′ are measured imageward from the first vertex; exit-pupil positions are signed from the physical image plane.

| Quantity | Infinity source configuration | Near source configuration |
|---|---:|---:|
| Computed EFL | 25.028451 mm | 24.104555 mm |
| Physical first-vertex-to-image track | 114.9999000 mm | 115.0000000 mm |
| Front principal plane H | 34.604844 mm | 33.283328 mm |
| Rear principal plane H′ | 89.951101 mm | 86.935762 mm |
| Entrance pupil from first vertex | 21.338158 mm | 21.338158 mm |
| Exit pupil from physical image plane | -53.279650 mm | -51.744139 mm |
| Physical last-lens-to-image separation | 18.9959000 mm | 18.9959000 mm |
| Gaussian defocus from physical image | -0.020347648 mm | 0.070241800 mm |

The surface-by-surface Petzval sum is 0.002148758771 mm⁻¹, using each interface contribution (n′−n)/(rnn′), including the bonding interfaces. It is invariant under the modeled air-gap motion. That scalar does not determine the complete astigmatic field surface or establish flat-field performance.

The infinity entrance pupil is 93.661742 mm in front of the image plane, consistent in rounded scale with the manufacturer's 94 mm value; the manufacturer's focus condition for that value is unspecified. No independent manufacturer exit-pupil value was established. [M1]

The inferred exact physical iris radius is 9.6912241752 mm. It is calibrated from nominal f/2.57524 and the computed EFL, not a recovered diaphragm measurement. The patent supplies no clear semi-diameter table. The modeled apertures are therefore constrained estimates informed by Fig. 2A, full on-axis iris rays, field coverage and geometry. Inferred apertures affect modeled vignetting and should not be mistaken for a measured production pupil.

The full-aperture on-axis bundle and the chief rays to the 27.5 mm image height and to the 43.8 × 32.9 mm format corner clear the modeled apertures at both published focus states. In the traced field bundles, off-axis marginal rays are vignetted at lens rims. These include the front rims of L4 and L8, which Fig. 2A draws smaller than the lenses they are cemented to; no traced ray is stopped at the joint of D3.

Interpreting the printed semi-fields as incoming chief-ray directions gives image heights 27.514281 mm and 27.435667 mm at the two source configurations, rather than exactly 27.500000 mm. The source glossary does not explicitly define the finite angular reference, so object-point angles referenced to the first vertex are separately distinguished. The prescription and image plane are left as printed; these angular and height residuals are not adjusted away.

The native prescriptions, calibration assumptions, modeled clear apertures, catalog-reference spectra and estimated intermediate focus labels bound the interpretation of all rendered rays and derived optical quantities. Finite state and pupil sampling is not proof of continuous-state clearance or measured production performance.

## Sources

[P] [US 2024/0329362 A1](https://patents.google.com/patent/US20240329362A1/en), Emiri Suzuki, Panasonic Intellectual Property Management Co., Ltd. The unchanged original PDF is the transcription authority: PDF p. 1 for metadata; p. 4 for Fig. 2A; p. 5 for Fig. 2B; pp. 20–21 for the second embodiment; pp. 26–28 for conditions; p. 30, ¶0260 and equation (1), for conventions; pp. 31–32, Tables 2A–2D, for Example 2; p. 37, Table 1, for condition values.

[M1] Hasselblad, [XCD 2,5/25V datasheet](https://cdn.hasselblad.com/f/77891/x/728bd53bda/xcd_25v_lens_datasheet_en.pdf), optical construction and technical data, p. 1.

[M2] Hasselblad, [XCD 2,5/25V product page](https://www.hasselblad.com/x-system/lenses/xcd-25v/), focusing mechanism and optical construction.

[M3] Hasselblad, [“Hasselblad Introduces the XCD 2,5/25V”](https://www.hasselblad.com/press/press-releases/2024/hasselblad-introduces-the-xcd-2-5-25v/), 7 May 2024.

[M4] Hasselblad, [X2D 100C datasheet](https://cdn.hasselblad.com/f/77891/x/38effba8fe/x2d_100c_datasheet_en.pdf), sensor dimensions and system compatibility.

[C1] OHARA, [OHARA 260701 catalog, with S- and L-prefix distinctions](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip).

[C2] HOYA, [HOYA 20260707 optical-glass AGF, including obsolete entries](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf).

[C3] SCHOTT, [preferred and special optical-glass catalog, June 2025](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?v=3b65e351&download=true).

[C4] HIKARI, [official optical-glass catalog workbook](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx).

[C5] CDGM, [official Zemax-format glass catalog](https://www.cdgmgd.com/downloadFile.htm?uid=pvntrGdxCC64MZei1SX).

[C6] SUMITA, [official optical-glass download, AGF and Ver. 14.02 workbook](https://www.sumita-opt.co.jp/en/wp/wp-content/themes/sumita-opt-en-v2026/download-files.php).
