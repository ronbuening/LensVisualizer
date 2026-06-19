## Patent Reference and Design Identification

**Patent:** US 4,770,511
**Filed:** June 3, 1985
**Priority:** JP 59-124718, June 18, 1984
**Granted:** September 13, 1988
**Inventors:** Yasuo Yonezawa, Yasuhiro Aono, Tomowaki Takahashi
**Assignee:** Nippon Kogaku K.K. / Nikon Corporation
**Title:** Zoom Lens Capable of Accomplishing Macro-Photography
**Embodiment analyzed:** Example 2, Table 2 and FIG. 3; aberration diagrams FIGS. 6A-6E

This prescription is identified with the Nikon AI Zoom-Nikkor 35-200mm f/3.5-4.5S. The patent's second embodiment is a 35-200 mm-class, F/3.5-4.5, four-group positive-negative-positive-positive zoom. Its Table 2 prescription has 17 glass elements in 13 air-separated groups, uses no aspherical surfaces, and publishes the same 35-200 mm nominal range as the production lens. Nikon's own retrospective describes the AI Zoom-Nikkor 35-200mm f/3.5-4.5S as a positive-lead four-group zoom with a front focusing group, a concave second group, a convex aperture-bearing third group, and a convex master fourth group. The same article identifies Tomowaki Takahashi as the principal designer, gives the 1982-1984 development chronology, and states that the lens was released in December 1985.

Example 1 is excluded because it is a shorter 35-135 mm design. Example 3 is also a 35-200 mm design, but it has a different second-group construction and uses opposite third-group macro motion. Example 2 is the closest match to the published product architecture and to the 17-element construction.

The production lens and the patent example are not treated as mechanically identical in every respect. The data file transcribes the patent numerical prescription and its published telephoto-end macro state. Manufacturer-published production details are used for product identity and hard external specifications, while the internal prescription and macro conjugate are those of the patent embodiment.

## Optical Architecture

The lens is a positive-lead high-ratio zoom of the form $G_1^+ G_2^- G_3^+ G_4^+$. The four principal group focal lengths, recomputed from the patent prescription by paraxial y-nu tracing, are:

| Group | Computed focal length | Power | Function |
|---|---:|---|---|
| G1 | +77.09 mm | Positive | Front collector and normal focusing group |
| G2 | -15.41 mm | Negative | Principal variator |
| G3 | +45.23 mm | Positive | Compensator and aperture-bearing group |
| G4 | +76.97 mm | Positive | Master / relay group |

The patent's variable gaps at infinity are $d_5 = 1.266$, $d_{13} = 20.067$, and $d_{19} = 17.344$ mm at the wide end, and $d_5 = 35.760$, $d_{13} = 1.686$, and $d_{19} = 1.231$ mm at the telephoto end. The sum of those three intergroup gaps remains 38.677 mm at both endpoints, so the optical track from the front vertex through the last element is conserved during the published zoom motion. With G2 used as the kinematic reference, G1 and G4 move 34.494 mm toward the object side and G3 moves 18.381 mm toward the object side from wide to telephoto.

The patent does not assign a numerical stop surface in Table 2. FIG. 3 does not tabulate or label the diaphragm, while Nikon's production cross-section places the aperture at the front of G3. The data file therefore inserts a flat stop immediately before L7 and reserves 0.20 mm of the patent's $d_{13}$ gap as the stop-to-L7 spacing. This placement is an inferred renderer stop plane, not a claim that the patent table separately defines that exact diaphragm coordinate.

At the full 135-format image height of 21.6 mm, the computed paraxial half-field angles are 30.80° at the wide end and 6.33° at the telephoto end. These correspond to full fields of 61.61° and 12.65°, close to the production specification class of approximately 62° to 12°20'. The residual difference is expected because the patent's Gaussian focal lengths are 36.16 and 193.96 mm, while the marketed focal lengths are rounded to 35 and 200 mm.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex to object

nd = 1.80518, νd = 25.36. Glass: SF6 / S-TIH6 class dense flint. f = -134.6 mm.

L1 is the negative high-dispersion member of the front cemented achromat. Its positive radii, R1 = +158.96 mm and R2 = +64.18 mm, form a negative meniscus convex toward the object side. The high index allows appreciable negative power in a relatively thin element while pairing with the low-dispersion L2 crown for primary axial color correction.

### L2 — Biconvex Positive, cemented to L1

nd = 1.49782, νd = 82.28. Glass: FK / J-FKH1-class fluorophosphate crown. f = +89.3 mm.

L2 is the low-dispersion positive crown partner in the front achromat. Its very high Abbe number places it in the ED / fluorophosphate crown region rather than in ordinary crown glass. The L1/L2 pair has a computed cemented-group focal length of +258.9 mm, so it supplies only moderate net power while strongly reducing longitudinal chromatic aberration at the front of the system.

### L3 — Positive Meniscus, convex to object

nd = 1.67003, νd = 47.05. Glass: BAF10-class barium flint. f = +109.7 mm.

L3 is the air-spaced positive element that completes G1. Its meniscus form adds collecting power without making the front group excessively strong. Its moderate dispersion also keeps the front group from relying solely on the L1/L2 cemented pair for color balancing. Normal focusing is performed by translating the whole G1 assembly.

### L4 — Negative Meniscus, convex to object

nd = 1.90265, νd = 35.76. Glass: Hikari J-LASFH9A class. f = -32.0 mm.

L4 is the first element of G2 and begins the strong negative variator. The refractive index above 1.90 is a significant design choice: it gives a compact high-power negative element without extreme surface curvature. The element also contributes a large negative Petzval component, counterbalancing the many positive elements elsewhere in the zoom.

### L5 — Cemented positive-negative doublet

L5a: nd = 1.80518, νd = 25.36. Glass: SF6 / S-TIH6 class dense flint. f = +33.7 mm.
L5b: nd = 1.80411, νd = 46.43. Glass: LAH65V-class lanthanum flint, near-match. f = -31.5 mm.
Cemented doublet focal length: approximately -658.9 mm.

The L5 doublet is almost afocal as a component. It therefore functions less as a power element and more as a chromatic and aberrational corrector within G2. The high-index materials allow the designer to introduce strong refracting interfaces while keeping net power small.

The exact L5b glass is not assigned to a single catalog name. The stored code 804/464 lies close to OHARA S-LAH65V / LAH65V-class lanthanum flints, but the match is not exact enough to state an unqualified catalog identity.

### L6 — Cemented negative-positive doublet

L6a: nd = 1.71300, νd = 53.97. Glass: J-LAK8 / LAK8 class. f = -19.4 mm.
L6b: nd = 1.86074, νd = 23.00. Glass: J-SFH2-class very dense flint. f = +38.1 mm.
Cemented doublet focal length: approximately -39.9 mm.

L6 carries most of the negative power of the second group. L6a is the strong negative component, while L6b supplies the dense-flint chromatic counterweight. As a cemented meniscus doublet concave toward the object, it drives the wide-to-telephoto magnification change and strongly affects astigmatism in close-focus macro operation.

### L7 — Positive Meniscus, concave to object

nd = 1.51680, νd = 64.12. Glass: BK7 / J-BK7A / S-BSL7 class. f = +82.9 mm.

L7 begins G3 after the large variable G2-G3 spacing. Its radii, R14 = -486.79 mm and R15 = -39.43 mm, give a positive meniscus concave toward the object side. In context it acts as a field-lens component, reshaping oblique bundles between the variator and the stop-bearing compensator group.

### L8 — Biconvex Positive

nd = 1.51860, νd = 70.08. Glass: PKH1-class low-dispersion phosphate crown. f = +49.6 mm.

L8 is the main positive power element of G3. Its low dispersion helps keep the compensator group from adding unnecessary axial color, especially near the stop region where the paraxial axial bundle is narrow. In the data file the inferred stop plane is placed immediately ahead of L7, at the front of the aperture-bearing third group suggested by the production cross-section.

### L9 — Negative Meniscus, concave to object

nd = 1.86074, νd = 23.00. Glass: J-SFH2-class very dense flint. f = -91.5 mm.

L9 is a weak negative post-stop element. The correct rear radius for the patent Table 2 prescription is R19 = -121.84 mm; this value is important because OCR extractions can misread it as -21.84 or -12.84. L9 supplies negative Petzval contribution and dispersion balancing behind the positive L8 element. The complete G3 focal length is +45.23 mm.

### L10 — Biconvex Positive

nd = 1.51680, νd = 64.12. Glass: BK7 / J-BK7A / S-BSL7 class. f = +86.7 mm.

L10 starts the master group. It is a moderate positive biconvex relay element that receives the beam after the G3-G4 variable gap. Its ordinary borosilicate crown glass is appropriate for a positive relay element whose chromatic burden is not exceptional.

### L11 — Positive Meniscus, convex to object

nd = 1.62041, νd = 60.29. Glass: S-BSM16 / J-SK16 / N-SK16 class dense crown. f = +130.1 mm.

L11 adds weak positive power after L10. The relatively high index for a crown glass reduces surface curvature for the required relay power. The long 7.00 mm air gap after L11 gives the fourth group room for the negative L12 correction stage.

### L12 — Biconcave Negative

nd = 1.79631, νd = 40.98. Glass: unmatched lanthanum-flint-region glass, code 796/410. f = -33.0 mm.

L12 is the strongest negative element in the master group. It is the fourth group's principal field-curvature and chromatic correction element, balancing the positive power of L10, L11, L13, and the rear doublet. No exact modern public catalog match has been assigned to nd = 1.79631 and νd = 40.98; it is therefore left as an unmatched 796/410 glass rather than forced into a close but incorrect catalog designation.

### L13 — Positive Meniscus, concave to object

nd = 1.51680, νd = 64.12. Glass: BK7 / J-BK7A / S-BSL7 class. f = +109.2 mm.

L13 supplies weak positive power behind the biconcave L12. Its concave-to-object meniscus shape helps distribute the rear-group power without excessive marginal ray bending at a single surface.

### L14 — Cemented positive-negative rear doublet

L14a: nd = 1.51835, νd = 60.34. Glass: unmatched crown glass, code 518/603. f = +38.3 mm.
L14b: nd = 1.78797, νd = 47.53. Glass: LAH64-class lanthanum flint, near-match. f = -74.3 mm.
Cemented doublet focal length: approximately +79.2 mm.

The rear cemented doublet closes the system with net positive power while correcting lateral color and off-axis aberrations near the image side. As with L12, L14a is left as an unmatched catalog entry because no exact public catalog match was verified. L14b lies in the LAH64-class lanthanum flint region but is labeled as a near-match rather than a precise manufacturer assignment.

## Glass Identification and Selection

The patent supplies only nd and νd values, not named glass codes. The following identifications therefore use catalog matching by d-line index and Abbe number. Exact or very close matches are identified by class; mismatched or uncertain entries are deliberately left as near-match or unmatched.

| Element(s) | nd | νd | Identification used | Confidence |
|---|---:|---:|---|---|
| L1, L5a | 1.80518 | 25.36 | SF6 / S-TIH6 class dense flint | High class confidence |
| L2 | 1.49782 | 82.28 | FK / J-FKH1-class fluorophosphate crown | High class confidence |
| L3 | 1.67003 | 47.05 | BAF10-class barium flint | Near-match |
| L4 | 1.90265 | 35.76 | Hikari J-LASFH9A class | High |
| L5b | 1.80411 | 46.43 | LAH65V-class lanthanum flint | Near-match |
| L6a | 1.71300 | 53.97 | J-LAK8 / LAK8 class | High |
| L6b, L9 | 1.86074 | 23.00 | J-SFH2-class very dense flint | High class confidence |
| L7, L10, L13 | 1.51680 | 64.12 | BK7 / J-BK7A / S-BSL7 class | High |
| L8 | 1.51860 | 70.08 | PKH1-class phosphate crown | High class confidence |
| L11 | 1.62041 | 60.29 | S-BSM16 / J-SK16 / N-SK16 class | High |
| L12 | 1.79631 | 40.98 | Unmatched 796/410 lanthanum-flint-region glass | Unmatched |
| L14a | 1.51835 | 60.34 | Unmatched 518/603 crown glass | Unmatched |
| L14b | 1.78797 | 47.53 | LAH64-class lanthanum flint | Near-match |

The chromatic strategy is concentrated in three regions. The front L1/L2 cemented doublet pairs a dense flint with a fluorophosphate crown, giving a large Abbe separation at the first collector group. G2 uses two cemented doublets to control lateral color while the variator introduces large magnification change. G3 and G4 then use dense flint / low-dispersion crown pairings to flatten the field and keep axial color manageable across a 5.7x zoom ratio.

No anomalous partial-dispersion claims are made for the uncertain lanthanum flint matches, because the patent does not publish partial-dispersion data and exact catalog identities were not established for all melts.

## Focus Mechanism

Normal production focusing is front-group focusing. Nikon's retrospective states that internal-focus cams for zoom lenses had not yet been developed for this design generation, so focusing had to be performed with the first group in front of the variator.

The patent's macro-photography system is a separate telephoto-end close-focus mechanism. Starting from the telephoto position, Example 2 moves G2 by 17.0 mm toward the object side, moves G3 by 6.65 mm toward the object side, and moves G1 by 7.5 mm toward the image side. The published macro state is β = -0.25.

| Gap | Wide infinity | Tele infinity | Patent macro state |
|---|---:|---:|---:|
| d5 | 1.266 mm | 35.760 mm | 11.260 mm |
| d13 | 20.067 mm | 1.686 mm | 12.036 mm |
| d19 | 17.344 mm | 1.231 mm | 7.881 mm |

For the data file, the telephoto infinity back focal distance is retained at the macro endpoint. With the macro intergroup gaps and telephoto image distance, a finite-conjugate paraxial trace gives an object distance of 244.93 mm from the first surface and transverse magnification of -0.2509. This verifies the patent's β = -0.25 macro state. The patent's printed “Do=0.244 mm” line is interpreted as 0.244 m in context, because the surrounding examples and summary discuss sub-0.3 m photography.

## Conditional Expressions

The patent defines the macro movement condition:

$$-0.5 < X_3 / X_2 < 0.5$$

where $X_2$ is the second-group macro movement from the telephoto position toward the object side, and $X_3$ is the third-group movement measured in the same sign convention.

For Example 2, the patent table gives $X_2 = -17.0$ mm and $X_3 = -6.65$ mm, so:

$$X_3 / X_2 = 0.391$$

The value is inside the allowed interval. The sign convention in the patent's numerical table uses negative motion for the object-side movement used in Example 2; the ratio is therefore positive.

## Verification Summary

Independent paraxial traces of the corrected Table 2 prescription produced the following values:

| Quantity | Patent value | Computed value | Comment |
|---|---:|---:|---|
| Wide EFL | 36.16 mm | 36.23 mm | +0.19% |
| Tele EFL | 193.96 mm | 194.85 mm | +0.46% |
| Wide BFD | not separately listed | 54.37 mm | Data file d30 at 35 mm |
| Tele BFD | not separately listed | 95.91 mm | Data file d30 at 200 mm |
| Macro object distance | 0.244 m | 0.2449 m | With tele image distance retained |
| Macro magnification | -0.25 | -0.2509 | Verified finite-conjugate trace |
| $d_5+d_{13}+d_{19}$, wide | — | 38.677 mm | Constant zoom track |
| $d_5+d_{13}+d_{19}$, tele | — | 38.677 mm | Constant zoom track |
| $X_3/X_2$ | 0.391 | 0.39118 | Satisfies condition |
| Petzval sum | — | +0.002333 mm^-1 | Signed Petzval radius -428.6 mm |

The Petzval computation used the surface-by-surface expression $\sum \Phi/(n n')$, not an element-level thin-lens approximation. The positive Petzval sum corresponds to a signed Petzval radius of approximately -428.6 mm under the usual image-space sign convention; the magnitude is 428.6 mm. The data file uses patent Table 2 focal-length column labels, $f=36.16$ and $f=193.96$ mm, as the two zoom positions; the separately listed design focal lengths are the recomputed paraxial EFLs.

The data file uses conservative inferred semi-diameters because the patent does not publish clear apertures. The selected semi-diameters satisfy the renderer's rim and cross-gap clearance rules and preserve element edge thicknesses above the adopted minimum.

## Design Heritage and Context

Nikon described the AI Zoom-Nikkor 35-200mm f/3.5-4.5S as its first high-power zoom lens and as a design made under the production limitations of the early 1980s. The design had to use all-spherical surfaces because mass-producible aspherical lens technology was not yet available to Nikon for this purpose, and it had to use front-group focusing because the later internal-focus cam approach was not yet developed for this lens class.

Those constraints explain the high element count in the fourth group and the elaborate cemented-corrector structure in G2. The lens is not a telephoto design in the strict optical sense at the wide end; the wide-end back focal distance is longer than the focal length, while the telephoto-end total track remains long. It is more accurately described as a positive-lead high-power zoom rather than as a telephoto zoom formula.

## Sources

- US Patent 4,770,511, “Zoom Lens Capable of Accomplishing Macro-Photography,” granted September 13, 1988.
- Nikon Corporation, “NIKKOR — The Thousand and One Nights No. 47: The Ai Zoom Nikkor 35-200mm F3.5-4.5S.”
- Hikari Glass Co., Ltd., optical glass data sheets for J-LASFH9A, J-FKH1, J-LAK8, J-SFH2, J-PKH1, J-BK7A, and J-SK16 classes.
- OHARA Corporation optical glass catalog entries for S-TIH6, S-BSL7, S-BSM16, and LAH-class comparison glasses.
- SCHOTT AG optical glass catalog entries for N-BK7 and N-SK16 comparison glasses.
