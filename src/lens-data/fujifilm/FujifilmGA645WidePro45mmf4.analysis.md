# Fujifilm GA645W / GA645Wi Super EBC Fujinon 45 mm f/4 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 5,621,575 / US5621575A  
**Priority:** JP 7-085471, filed April 11, 1995  
**Filed (US):** March 6, 1996  
**Granted:** April 15, 1997  
**Inventor:** Nobuaki Toyama  
**Assignee:** Fuji Photo Optical Co., Ltd.  
**Title:** Wide Angle Lens System  
**Claims:** 2  
**Worked examples:** 6  
**Embodiment analyzed:** Embodiment 6, Table 6 and Fig. 11[^patent]

US 5,621,575 describes a compact wide-angle lens for lens-shutter cameras. The claimed form is a seven-element system: a front negative meniscus, a first cemented doublet, a second cemented doublet after the stop, a positive sixth lens, and a rear negative meniscus. The patent states that the design is intended to provide high resolving power and high contrast from distant subjects to close-up use while keeping distortion and other aberrations under control.[^patent]

Embodiment 6 is the best match to the production Fujifilm GA645W and GA645Wi Professional 45 mm f/4 lens. The identification rests on four converging points. First, the patent embodiment has seven elements in five air-spaced groups; Fujifilm's GA645/GA645W manual identifies the GA645W lens as a Super EBC Fujinon 1:4 f=45 mm lens with five components and seven elements.[^manual] Second, the patent normalizes the focal length to $f = 100.00$ mm; scaling by 0.45 gives a 45 mm production lens. Third, the patent gives $F_{no} = 4.08$ and $2\omega = 75.2^\circ$, matching the marketed f/4 class and 75 degree angle of view for the GA645W.[^manual] Fourth, the scaled image height at $\omega = 37.6^\circ$ is approximately 34.65 mm, essentially the half-diagonal of a 56 x 41.5 mm 645 frame.

The data file transcribes Embodiment 6 and applies a uniform scale factor of 0.45 to radii, axial spacings, back focal distance, and inferred semi-diameters. The patent does not publish clear apertures, so the semi-diameters in the data file are conservative renderer apertures rather than measured production clear apertures.

## Optical Architecture

The design is a compact quasi-symmetrical wide-angle lens with a central stop:

$$\text{G1}(-)\;—\;\text{G2}(+)\;—\;\text{STO}\;—\;\text{G3}(+)\;—\;\text{G4}(+)\;—\;\text{G5}(-)$$

It is not a retrofocus SLR wide angle. The scaled back focal distance is approximately 27.38 mm from the patent table, giving BFD/EFL $\approx 0.61$, not a long-back-focus retrofocus ratio. Its more important architectural feature is the central leaf-shutter stop placed between two cemented doublets, with strong rear-side correction by the L6-L7 pair.

The groups are:

| Group | Elements | Role |
|---|---:|---|
| G1 | L1 | Front negative meniscus; accepts the wide field and moderates ray angles before the positive core. |
| G2 | L2-L3 | Front cemented positive doublet; supplies moderate convergence and chromatic correction. |
| STO | — | Aperture stop / leaf-shutter position between the two doublets. |
| G3 | L4-L5 | Rear cemented positive doublet; main post-stop converging group. |
| G4 | L6 | Positive meniscus, convex to image; steepens the converging cone while controlling field curvature. |
| G5 | L7 | Rear negative meniscus, convex to image; principal field-flattening and distortion-correction element. |

Independent paraxial tracing of the rounded patent table gives EFL = 100.0668 mm and BFL = 60.9177 mm at patent scale. The patent lists $f = 100.00$ and the final table distance $d_{12} = 60.85$ mm; the difference is 0.0677 mm at patent scale and is attributable to normal patent-table rounding. At production scale, the computed EFL is 45.0301 mm and the table BFD is 27.3825 mm.

The patent's four conditional expressions are satisfied by Embodiment 6:

| Condition | Patent range | Verified Embodiment 6 value | Comment |
|---|---:|---:|---|
| $f_1/f$ | $-1.95$ to $-1.05$ | $-1.8376$ | L1 has moderate negative power. |
| $f_{23}/f$ | $1.05$ to $3.60$ | $1.6006$ | Front doublet remains positive but not strongly convergent. |
| $f_{45}/f$ | $1.10$ to $2.16$ | $1.4106$ | Rear doublet supplies stronger convergence. |
| $(r_{11}+r_{10})/(r_{11}-r_{10})$ | $1.53$ to $4.95$ | $2.7303$ by magnitude | Direct signed evaluation is negative because both radii are negative; the patent reports the positive magnitude. |

The last condition requires care. With the standard sign convention, $r_{10}=-64.166$ and $r_{11}=-29.763$, so the literal signed ratio is $-2.7303$. The patent's tabulated value is 2.73, indicating that the condition is being applied as a positive shape magnitude for this negative-radius pair.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Convex to Object

$n_d = 1.48749$, $\nu_d = 70.40$. Glass: FC5 / N-FK5 class, code 487/704. $f = -183.76$ mm at patent scale, $-82.69$ mm scaled.

L1 is a low-index, low-dispersion front meniscus. It is the only low-index element in the design and functions as the front field-expanding element. Its negative power bends the entering off-axis bundles before they encounter the higher-index cemented positive group.

The strong curvature of surface 2 is the main source of L1's negative power. The data file uses reduced front-element semi-diameters because the patent supplies no clear apertures and the rear radius of L1 is small; the renderer aperture is therefore constrained by the spherical rim-height limit rather than by a full paraxial corner-ray envelope.

### L2 — Positive Element of the Front Cemented Doublet

$n_d = 1.80500$, $\nu_d = 39.60$. Glass: Hoya NBFD3 / S-LAH63-class high-index flint, code 805/396. $f = +52.58$ mm at patent scale, $+23.66$ mm scaled.

L2 is the principal positive member of the front doublet. Its high index supplies convergence with a moderate front curvature, while the rear cemented interface is very weak because the following L3 glass has a similar refractive index. This makes the front doublet unusual: it is chromatically active, but the buried interface has relatively little monochromatic power.

The prior draft treated this glass as unmatched and compared it mainly with OHARA S-LAH65. That was too weak. Hoya's cross-reference table lists NBFD3 at code 805/396 and gives OHARA S-LAH63 as the close cross-reference at 804/396.[^hoya] For a Fuji Photo Optical design, the Hoya code is the better primary annotation.

### L3 — Negative Dense Flint of the Front Cemented Doublet

$n_d = 1.78472$, $\nu_d = 25.70$. Glass: Hoya FD110 / N-SF11 / S-TIH11 class, code 785/257. $f = -66.34$ mm at patent scale, $-29.85$ mm scaled.

L3 supplies the negative and high-dispersion partner to L2. Its low Abbe number gives the first cemented doublet the dispersion leverage needed to control longitudinal chromatic aberration without forcing the buried junction to carry large optical power.

This element is not Hoya FD60 and not OHARA S-TIH53. Hoya's cross-reference table places code 785/257 at FD110, N-SF11, and S-TIH11.[^hoya] FD60 is an 805/255 glass and belongs to a different dense-flint region.

### L4 — Biconvex Positive Element of the Rear Cemented Doublet

$n_d = 1.77250$, $\nu_d = 49.60$. Glass: Hoya TAF1 / OHARA S-LAH66 / Schott N-LAF34 class, code 773/496. $f = +38.22$ mm at patent scale, $+17.20$ mm scaled.

L4 is the strongest positive element in the system and sits immediately behind the stop. Its rear surface is much more strongly curved than its front surface, concentrating positive power after the stop where it can correct the wide-angle bundle efficiently.

The glass classification in the prior draft needed correction. This is not LACL60, not TAC8, and not S-LAL59. Hoya's cross-reference table lists code 773/496 as TAF1 / N-LAF34 / S-LAH66.[^hoya] Since $\nu_d = 49.60$ is below the usual crown/flint boundary, this should be described as a high-index lanthanum flint or lanthanum-flint-class glass, not as a crown simply because it is a positive element.

### L5 — Biconcave Negative Element of the Rear Cemented Doublet

$n_d = 1.58144$, $\nu_d = 40.80$. Glass: Hoya E-FL5 / OHARA S-TIL25 class, code approximately 581/408. $f = -47.82$ mm at patent scale, $-21.52$ mm scaled.

L5 offsets L4's strong positive power and completes the rear achromat. The index difference across the L4-L5 cemented interface is substantial, so the junction is no longer a nearly buried surface. It carries meaningful power and helps tune spherical aberration, coma, and chromatic correction behind the stop.

The prior draft's FF5 annotation was incorrect. Hoya FF5 is code 593/354, while the patent value is 1.58144 / 40.80. Hoya's table maps the nearby 581/409 region to E-FL5 and S-TIL25-type equivalents.[^hoya]

### L6 — Positive Meniscus, Convex to Image

$n_d = 1.77250$, $\nu_d = 49.60$. Glass: Hoya TAF1 / OHARA S-LAH66 / Schott N-LAF34 class, code 773/496. $f = +102.81$ mm at patent scale, $+46.27$ mm scaled.

L6 repeats the L4 glass and is a positive meniscus with both radii negative. Its rear surface is much stronger than its front surface, so the element contributes positive power while keeping the meniscus form bent toward the image side.

Its field-curvature role is visible in the Petzval terms. Surface 9 contributes a small negative Petzval term, while surface 10 contributes a larger positive term. The net contribution is positive but moderate, preparing the bundle for cancellation by the rear negative meniscus.

### L7 — Negative Meniscus, Convex to Image

$n_d = 1.58144$, $\nu_d = 40.80$. Glass: Hoya E-FL5 / OHARA S-TIL25 class, code approximately 581/408. $f = -122.30$ mm at patent scale, $-55.04$ mm scaled.

L7 is the rear field-flattening element. Its front surface is strongly curved and generates the largest single negative Petzval contribution in the design. This is the main counterweight to the positive Petzval contributions from L2, L4, and L6.

The L6-L7 pair is therefore not merely a rear relay. It is a field-curvature and distortion-control couple. The relatively large air space between surfaces 10 and 11 lets the chief ray height change substantially before the rear negative element, increasing L7's leverage on field curvature and astigmatism.

## Glass Identification and Selection

The corrected glass palette has five distinct glasses across seven elements. Two glasses are repeated: the TAF1 / S-LAH66-class glass in L4 and L6, and the E-FL5 / S-TIL25-class glass in L5 and L7.

| Patent code | $n_d$ | $\nu_d$ | Corrected catalog class | Elements | Prior-draft issue corrected |
|---:|---:|---:|---|---|---|
| 487/704 | 1.48749 | 70.40 | Hoya FC5 / Schott N-FK5 class; OHARA S-FSL5 is a close modern neighbor | L1 | Prior OHARA-only treatment was too loose because current S-FSL5 is 487/702. |
| 805/396 | 1.80500 | 39.60 | Hoya NBFD3; S-LAH63-class cross-reference | L2 | Not unmatched; not S-LAH65 as the best label. |
| 785/257 | 1.78472 | 25.70 | Hoya FD110 / N-SF11 / S-TIH11 class | L3 | Not FD60 / S-TIH53. |
| 773/496 | 1.77250 | 49.60 | Hoya TAF1 / N-LAF34 / S-LAH66 class | L4, L6 | Not LACL60 / TAC8 / S-LAL59. |
| 581/408 | 1.58144 | 40.80 | Hoya E-FL5 / S-TIL25 class | L5, L7 | Not FF5. |

The Hoya cross-reference table notes that six-digit glass codes are based on refractive index and Abbe number and that cross-referenced compositions are not necessarily identical.[^hoya] The data file therefore uses class-style annotations where the patent gives only $n_d$ and $\nu_d$. It does not claim melt-level identity.

The design uses ordinary high-index and flint glasses rather than ED or anomalous partial-dispersion glasses. The chromatic strategy is classical: two cemented doublets divide the color-correction burden. The front doublet pairs L2 at $\nu_d = 39.60$ with L3 at $\nu_d = 25.70$; the rear doublet pairs L4 at $\nu_d = 49.60$ with L5 at $\nu_d = 40.80$. Because both positive partners have high refractive index, the required curvatures are kept moderate for an all-spherical f/4 wide-angle design.

## Focus Mechanism

The patent gives a fixed infinity-focus prescription and does not publish variable spacings for close focus. Fujifilm's manual specifies a 0.7 m minimum focusing distance and a hybrid active/passive autofocus system for the GA645W.[^manual] Since no internal variable group is disclosed in the patent, the data file models close focus as unit focusing: the complete optical assembly translates objectward and the final back-focus gap increases.

This corrects a mechanical sign error in the earlier draft. For a unit-focusing lens, close focus requires more lens-to-film extension, not less. At production scale, the patent table BFD is 27.3825 mm at infinity. Solving the paraxial imaging condition for a 700 mm subject distance measured from the film plane gives an extension of 3.444 mm and a close-focus BFD of 30.8265 mm. The corresponding paraxial magnification is approximately $-0.0758$, or about 1:13.2.

| Focus state | BFD in data file | Modeled extension | Approx. magnification |
|---|---:|---:|---:|
| Infinity | 27.3825 mm | 0.0000 mm | 0 |
| 0.7 m | 30.8265 mm | 3.4440 mm | $-0.0758$ |

This is a modeling choice for visualization, not a patent-published close-focus prescription. No floating or internal-focus aberration compensation can be inferred from US 5,621,575.

## Aspherical Surfaces

The design is entirely spherical. Embodiment 6 lists twelve numbered optical surfaces and no aspherical coefficients. The patent drawings and tables likewise do not identify aspherical surfaces. The data file therefore sets `asph: {}`.

## Verification Summary

The re-review used a surface-by-surface ABCD paraxial trace with the patent's signed radii and refractive indices.

| Quantity | Patent-scale result | Production-scale result | Comment |
|---|---:|---:|---|
| EFL from rounded table | 100.0668 mm | 45.0301 mm | Matches patent $f = 100.00$ within rounding. |
| BFL from rounded table | 60.9177 mm | 27.4130 mm | Patent table lists 60.85 mm / 27.3825 mm. |
| Patent-table BFD | 60.8500 mm | 27.3825 mm | Used as the data-file infinity film-plane gap. |
| Half-field image height | 77.010 mm at f=100 | 34.655 mm at f=45 | Consistent with 645 half-diagonal. |
| Petzval sum | 0.0008244 1/mm | 0.0018320 1/mm | Surface-by-surface $\Phi/(n n')$ calculation. |
| Petzval radius | -1213.05 mm | -545.87 mm | Negative sign by the convention used here. |

The Petzval sum was recalculated surface by surface using $\Phi/(n n')$, with $\Phi=(n'-n)/R$ at each interface. This matters for this lens because both cemented interfaces have non-negligible index changes and cannot be reduced safely to thin element-level estimates.

The data file was formatted with Prettier using the project `.prettierrc.json` settings.

## Sources

[^patent]: US 5,621,575, Nobuaki Toyama, Fuji Photo Optical Co., Ltd., “Wide Angle Lens System,” granted April 15, 1997. Transcribed source: uploaded `US5621575.pdf`; Embodiment 6 is Table 6 and Fig. 11.

[^manual]: Fujifilm, *GA645 / GA645W Owner's Manual*, specifications section. The manual states that bracketed specifications are for the GA645W and lists the 45 mm f/4 lens as 5 components / 7 elements, 75 degree angle of view, 0.7 m minimum focusing distance, and 52 mm filter diameter.

[^hoya]: Hoya Group Optics Division, “Glass Cross Reference Index.” The table gives six-digit glass codes and cross-references among Hoya, Schott, OHARA, Hikari, Sumita, and CDGM; it also cautions that cross-referenced glass compositions are not necessarily identical.

[^ohara]: OHARA, *Optical Glass Pocket Catalog* and comparative glass tables, used to verify S-FSL5, S-LAH63/S-LAH66, and S-TIL25-class entries against the Hoya code mappings.
