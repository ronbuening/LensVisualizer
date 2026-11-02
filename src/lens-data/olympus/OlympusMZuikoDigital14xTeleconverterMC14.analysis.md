## Patent Reference and Design Identification

**Patent:** US 2015/0226943 A1  
**Application Number:** 14/618,329  
**Filed:** 2015-02-10  
**Published:** 2015-08-13  
**Priority:** 2014-02-10 (JP2014-023339)  
**Inventors:** Yasuji Ogata, Yasuharu Yamada  
**Applicant:** Olympus Imaging Corp.  
**Title:** Teleconverter and image pickup system using the same  

This analysis describes the native detachable converter transcribed from Example 1 of US 2015/0226943 A1, selected for comparison with the Olympus M.Zuiko Digital 1.4× Teleconverter MC-14. The patent and the production product remain distinct authorities. Manufacturer confirmation that this example is the production prescription has not been found. The numerical master lens is an analytical fixture, not an identified production host. [1, cover; PDF p.26, printed p.11, ¶0412]

The convergent evidence is limited but concrete:

1. The native prescription contains 6 elements in 3 air-spaced groups: one singlet, a cemented triplet and a cemented doublet. The original manufacturer construction image shows the same topology. [1, FIG.2; 2]
2. The marketed multiplier is 1.4×, while the patent prints 1.414×. The model has not been scaled or optimized to erase that difference. [1, Example 1; 3–4]
3. The patent's priority precedes the Japanese release date of 2014-11-29; its publication follows the launch. Timing is consistent with a possible association but does not establish it. [1, cover; 4]
4. Micro Four Thirds fit and the manufacturer's restricted compatibility are consistent with a rear converter. Mount compatibility alone does not identify a host prescription. [3–4]

The manufacturer advertises one HR element and highlights the final element in its construction image. The highest native converter index is 1.84666. No universal numerical definition of HR has been demonstrated here, so that label is neither a catalog-glass identification nor evidence of a contradiction based on an assumed index threshold.

The October 2014 manual gives a diameter of 58.8 mm; the product-page record gives 59.8 mm. Both give a length of 14.7 mm and mass 105 g. These source-specific casing dimensions remain unresolved and do not set any optical aperture or scaling factor. The retained original manual and construction image were captured on 2026-10-10; the structured product-page recheck is dated 2026-10-12 and is not preserved original HTML. [2–4]

## Optical Architecture

The converter is a net-negative, sequential refracting system with a positive–negative–positive group sequence. Its computed isolated focal length is -46.693938848 mm and first-to-last refracting-vertex length is 24.17000 mm. The positive front singlet precedes the strongly negative triplet; the final doublet has positive net power. These group classifications follow matrix calculations, not the signs of isolated elements alone. [1, abstract; ¶¶0207–0215]

| Group | Native surfaces | Net focal length in air, mm | Net power, mm⁻¹ |
|---|---|---:|---:|
| G1 | 1–2 | +89.331883144 | +0.011194212 |
| G2 | 3–6 | -19.304996926 | -0.051800060 |
| G3 | 7–9 | +54.480960203 | +0.018355036 |

The patent explains the central positive element's index and power as part of the balance among overall negative power, Petzval sum and compactness. Its general preference for a biconvex first lens does not change Example 1: the actual first element is a positive meniscus. Design-intent statements below are attributed to the patent; no individual aberration contribution is inferred solely from a glass class or power sign. [1, ¶¶0151–0161, 0175–0179, 0192–0202]

Native labels 1–9 correspond to source surfaces 30–38, without rescaling. The downstream glass occupies each cemented interface. Source surfaces 39–40 are the camera-side plane-parallel member and remain a physical rear plate. The converter has no stop, moving group or aspheric surface. Source master surface 13 supplies the sole aperture stop when the systems are composed. No optional flare cutter, mechanical shoulder or artificial field-stop plane has been added. [1, ¶¶0407–0412, 0421–0423]

The isolated converter's collimated-input back focal distance is -50.708911903 mm from its last refracting vertex. Its principal planes are +10.710256460 mm from the first vertex and -4.014973054 mm from the last vertex. These signed negative-system cardinal quantities are not the image distance for its working virtual object. Positive-lens telephoto/retrofocus ratio labels are therefore not applied to the isolated converter.

## Element-by-Element Analysis

### L11 — Positive Meniscus concave toward the object

nd = 1.80518, νd = 25.46. Glass: FD60 (HOYA catalog equivalent; production supplier unspecified). f = +89.331883 mm (isolated element in air).

L11 is the isolated first group, a positive meniscus concave toward the object. Its rear radius and group power enter condition (5). The patent associates that constraint with balancing aberration correction and manufacturing sensitivity; the current calculations establish its geometry and first-order power, not an isolated manufacturing-tolerance budget. [1, ¶¶0180–0187; Example 1 surfaces 30–31]

### L21 — Biconcave Negative

nd = 1.80400, νd = 46.57. Glass: S-LAH65 (OHARA catalog equivalent; production supplier unspecified). f = -16.510513 mm (isolated element in air).

L21 is the front negative member of the central triplet. Together with L23 it supplies the central group's negative contribution around L22. Its shared interface refracts from L21 glass into L22 glass; treating that interface as two glass–air surfaces would misstate the actual group power. The listed focal length is instead the intentional isolated-element-in-air diagnostic. [1, ¶¶0200–0202, 0212–0215; surfaces 32–33]

### L22 — Biconvex Positive

nd = 1.59270, νd = 35.31. Glass: S-FTM16 (OHARA catalog equivalent; production supplier unspecified). f = +15.845806 mm (isolated element in air).

L22 is the thick positive core of the triplet. The patent identifies this member as carrying much of the converter's positive power and constrains its index, bending and relative focal length. Its lower index relative to the adjacent negative members supports the patent's Petzval-balancing rationale; the exact net sum is calculated separately below. The index contrast alone does not quantify spherical aberration or coma. [1, ¶¶0156–0161, 0188–0195; surfaces 33–34]

### L23 — Biconcave Negative

nd = 1.83481, νd = 42.71. Glass: S-LAH55 (OHARA catalog equivalent; production supplier unspecified). f = -17.320552 mm (isolated element in air).

L23 completes the triplet with negative isolated power. Its relative focal length is constrained by condition (7), which the patent discusses as a way to distribute negative power and balance field curvature and distortion. Those are source-stated motivations, not a numerical attribution of the current system's aberrations to this element. [1, ¶¶0196–0203; surfaces 34–35]

### L31 — Biconvex Positive

nd = 1.61340, νd = 44.27. Glass: S-NBM51 (OHARA catalog equivalent; production supplier unspecified). f = +20.970338 mm (isolated element in air).

L31 is the positive front member of the final cemented doublet. The doublet remains positive as a complete air-bounded group, despite the negative rear member. The patent's Abbe-number difference condition applies to this pair and supplies a documented chromatic design constraint. Actual chromatic performance still depends on unreported glass dispersion details. [1, ¶¶0165–0174; surfaces 36–37]

### L32 — Biconcave Negative

nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA catalog equivalent; production supplier unspecified). f = -28.828569 mm (isolated element in air).

L32 is the final negative member, cemented to L31. The manufacturer's construction diagram marks its final element HR, but that mark does not identify the production glass. Its lower Abbe number than L31 gives the stated pair difference; neither that difference nor the catalog dispersion establishes apochromatic performance. [1, ¶¶0165–0174; 2; surfaces 37–38]

All element focal lengths are recomputed from the actual parsed native radii, center thicknesses and d-line indices. They are not additive powers for the cemented or separated assembly. Labels, shapes and cemented relationships follow the data file; no resin layer or generic cement thickness is invented.

## Glass Identification and Selection

The patent publishes only nd and νd for each glass, with no supplier names, melt data or other line indices. Each element's label names the catalog glass at those two values. The label does not claim that glass as the production melt: a match on two values cannot identify a supplier or melt.

| Element | Patent nd | Patent νd | Catalog equivalent |
|---|---:|---:|---|
| L11 | 1.80518 | 25.46 | HOYA FD60 |
| L21 | 1.80400 | 46.57 | OHARA S-LAH65 |
| L22 | 1.59270 | 35.31 | OHARA S-FTM16 |
| L23 | 1.83481 | 42.71 | OHARA S-LAH55 |
| L31 | 1.61340 | 44.27 | OHARA S-NBM51 |
| L32 | 1.84666 | 23.78 | OHARA S-TIH53 |

The OHARA, HOYA, Schott, HIKARI, CDGM and Sumita catalogs were searched. Of the 16 distinct nd/νd pairs in the patent's master lens, converter and cover plate, 14 have exact catalog matches; the two without one belong to the master lens. Several converter pairs also match glasses from other makers, so each label gives one catalog equivalent, not a supplier. [5]

The d-line indices are the patent's. At the other reference lines (C ≈ 656.3 nm, F ≈ 486.1 nm, g ≈ 435.8 nm), each element follows its catalog glass's published dispersion formula. The chromatic traces therefore show the catalog glasses, not a reproduction of the patent's chromatic plots. No apochromatic or anomalous-dispersion performance is claimed.

L31 and L32 differ in Abbe number by 20.49, satisfying the published doublet constraint. The patent links a cemented pair's dispersion contrast to chromatic correction, but a full aberration calculation would be needed for a performance claim beyond that design rationale. [1, ¶¶0165–0174]

## Focus Mechanism

The detachable converter is static. Its data file contains no focus or zoom law. The patent master provides wide and tele infinity-focus prescriptions; it does not supply a determined finite-focus sequence, production close-focus travel, actuator identity or stabilization mechanism for this selected converter/master combination, so no internal focus movement is reconstructed. General movable-master discussion does not determine an otherwise unpublished focus mechanism. [1, ¶0435]

The following axial differences are endpoint displacements of representative source-master vertices, measured from the first vertex with positive direction toward the image. They are not focus travel, and two endpoints cannot establish reversals between them.

| Master surface | WE position, mm | TE position, mm | TE minus WE, mm |
|---|---:|---:|---:|
| 1 | +0.000000 | +0.000000 | +0.000000 |
| 6 | +18.454050 | +70.110640 | +51.656590 |
| 13 | +86.727410 | +86.727370 | -0.000040 |
| 14 | +88.427410 | +88.427370 | -0.000040 |
| 22 | +115.477410 | +116.171480 | +0.694070 |
| 25 | +135.619450 | +135.320490 | -0.298960 |
| 27 | +139.570500 | +139.570520 | +0.000020 |
| 29 | +150.660500 | +150.660520 | +0.000020 |

Straight interpolation of the tabulated gaps is used only as a runtime diagnostic at normalized zoom positions 0, 0.25, 0.5, 0.75 and 1. It is not a reconstructed physical zoom/focus cam. The direct prescription focal length differs from the runtime's interpolated focal metadata between endpoints, and the fixed image plane is not kept at Gaussian focus. No zero-defocus continuum requirement or additional corrective motion is invented.

| Branch | Zoom | Direct matrix EFL, mm | Runtime metadata EFL, mm | Authored image defocus, mm |
|---|---:|---:|---:|---:|
| source_master | 0.00 | 40.809626 | 40.809626 | -0.000225 |
| source_master | 0.25 | 55.212700 | 67.357089 | -3.073711 |
| source_master | 0.50 | 76.807300 | 93.904551 | -5.810914 |
| source_master | 0.75 | 108.174392 | 120.452014 | -6.253280 |
| source_master | 1.00 | 146.999477 | 146.999477 | -0.000204 |
| source_native | 0.00 | 57.703445 | 57.703445 | -0.000405 |
| source_native | 0.25 | 86.080416 | 95.240634 | -6.775818 |
| source_native | 0.50 | 131.792798 | 132.777823 | -14.098354 |
| source_native | 0.75 | 188.682439 | 170.315012 | -15.422321 |
| source_native | 1.00 | 207.852201 | 207.852201 | -0.000363 |

## Aspherical Surfaces in the Analytical Master

The native converter is entirely spherical. Four aspheres occur only in the unchanged analytical source master, on source surfaces 14, 15, 24 and 27. Surfaces 14 and 15 bound the same master element. Their presence in the calculation must not be reported as converter aspheres.

The patent uses z(h) = (h²/R)/(1 + √(1 − (1 + K)(h/R)²)) + A4 h⁴ + A6 h⁶ + A8 h⁸ + A10 h¹⁰. Its K maps unchanged to the model convention; K = 0 is the spherical base. Dimensions are mm, with Ap in mm^(1−p). The scale factor is 1, so no coefficient rescaling is performed. No manufacturing process is inferred from the polynomial alone. [1, PDF p.25, ¶¶0410–0411; PDF p.26, aspherical surface data]

| Master surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 14 | 0.0000 | -2.0856e-06 | +7.5646e-09 | +8.5023e-11 | -3.0217e-13 |
| 15 | 0.0000 | +1.4855e-05 | +9.4303e-09 | +1.0450e-10 | -3.4344e-13 |
| 24 | -0.6116 | +3.8316e-06 | +9.5787e-09 | -2.1039e-11 | +0.0000e+00 |
| 27 | -0.0172 | -3.6348e-06 | -4.7277e-09 | +1.3666e-12 | +0.0000e+00 |

Signed departures below are measured from each surface's base sphere at the stated inferred fixture rim, not at a published physical clear aperture. They include the conic contribution where K is nonzero.

| Surface | Inferred rim, mm | Sag, mm | Sphere departure, µm | Signed rim slope dz/dh |
|---|---:|---:|---:|---:|
| 14A | 13.300 | +2.451656607 | +7.522036 | +0.390370662 |
| 15A | 13.300 | -0.374259739 | +559.842970 | +0.038997797 |
| 24A | 8.700 | +1.876890678 | -29.988881 | +0.445569854 |
| 27A | 12.500 | +2.490719904 | -107.976344 | +0.397337623 |

At the inferred rim, surface 14 lies slightly imageward of its base sphere, while surface 15 has a much larger positive departure. Surfaces 24 and 27 have negative departures from their base spheres. These are profile descriptions; they do not isolate each surface's aberration contribution.

For source S15, R = −95.1515 mm and the first positive nonzero derivative root is 11.924689068260 mm. The source nominal axial rays intersect it at radii 12.178195260414 mm WE and 12.216783956532 mm TE. Both exceed the root. Its unchanged inferred rim is 13.3 mm. The raw no-slope-reversal cap criterion remains FAIL.

The applicable interpretation accepts only this unchanged analytical fixture under the user's narrow procedural exception approved on 2026-10-12. That decision permits no source correction, physical-aperture reduction, native-schema override, real-host enrollment or waiver of other geometry checks. In particular, slope reversal alone does not prove physical impossibility: the minimum radicand over the whole S15 radial interval is 0.980462364462, so its specified positive-root sag branch is finite, smooth and single-valued. The measured turnover is preserved, not converted into a numerical PASS.

A separate earlier focused calculation corroborated the turnover and source beam. The full independent source-first audit subsequently froze fresh inputs, code and results before candidate disclosure, then reconciled the actual native payload and application execution. The historical focused check is not substituted for that audit. Unperformed repository integration and complete viewer-page checks remain pending.

## Conditional Expressions and Aberration Rationale

The following table reproduces the Example 1 expressions and their printed values. Computed values use the final parsed native prescription or its unchanged source-model comparison. Here f is the negative focal length of the complete converter; f1 is the front-group focal length; D is its powered vertex span. Curvatures and isolated-element focal lengths retain their original signs. [1, PDF pp.18–24 and p.28, ¶0420]

| Condition | Expression | Computed | Printed |
|---|---|---:|---:|
| 1-2 | abs(f)/D | +1.931896518 | 1.932 |
| 2-2 | (r22f+r22r)/(r22f-r22r) | -0.232383310 | -0.232 |
| 3-2 | n2p | +1.592700000 | 1.5927 |
| 4-1 | deltaV | +20.490000000 | 20.49 |
| 5-1 | r1r/f1 | -0.647944474 | -0.648 |
| 6-1 | f22/abs(f) | +0.339354666 | 0.339 |
| 7-1 | f23/f | +0.370937904 | 0.371 |
| 8-1 | n1p | +1.805180000 | 1.805 |
| 9-1 | r1r/f | +1.239606284 | 1.240 |
| 10-1 | r22r/f | +0.476586481 | 0.477 |
| 11-1 | r22r/r22f | -1.605467059 | -1.605 |

All table-form expressions satisfy each applicable published strict bound listed below, including the progressively narrower preferred intervals. These are descriptive design constraints; passing them is not a measured image-quality rating.

| Expression family | Published strict intervals |
|---|---|
| 1 | 1-1: 1 < value < 9; 1-2: 1.5 < value < 5; 1-3: 1.6 < value < 4; 1-4: 1.8 < value < 3 |
| 2 | 2-1: -1 < value < -0.04; 2-2: -0.5 < value < -0.08; 2-3: -0.4 < value < -0.1; 2-4: -0.3 < value < -0.15 |
| 3 | 3-1: 1.55 < value < 1.7; 3-2: 1.55 < value < 1.65; 3-3: 1.59 < value < 1.64 |
| 4 | 4-1: 5 < value < 70; 4-2: 10 < value < 60; 4-3: 10 < value < 50; 4-4: 10 < value < 40 |
| 5 | 5-1: -5 < value < -0.59; 5-2: -3 < value < -0.61; 5-3: -2 < value < -0.62; 5-4: -1 < value < -0.63 |
| 6 | 6-1: 0.32 < value < 3; 6-2: 0.327 < value < 2; 6-3: 0.33 < value < 1 |
| 7 | 7-1: 0.33 < value < 0.47; 7-2: 0.33 < value < 0.44; 7-3: 0.33 < value < 0.43 |
| 8 | 8-1: 1.585 < value < 1.83; 8-2: 1.59 < value < 1.82; 8-3: 1.59 < value < 1.81 |
| 9 | 9-1: 0.75 < value < 3; 9-2: 0.9 < value < 2; 9-3: 0.9 < value < 1.6 |
| 10 | 10-1: 0.41 < value < 0.62; 10-2: 0.44 < value < 0.6; 10-3: 0.45 < value < 0.59; 10-4: 0.46 < value < 0.58 |
| 11 | 11-1: -2 < value < -1.18; 11-2: -1.85 < value < -1.3; 11-3: -1.7 < value < -1.4 |

Condition (9) has a source wording discrepancy. The prose uses r1r/f1, giving -0.647944474; the table uses r1r/f, giving +1.239606284, consistent with the printed 1.240. The negative literal-prose result fails its positive bounds. Both readings remain in the record; the prescription has not been changed to reconcile them. [1, PDF p.23, ¶¶0337–0344; p.28]

The converter's surface-by-surface Petzval sum is -0.002218909263 mm⁻¹, computed as Σ[(n′−n)/(R n n′)]. It is a first-order curvature contribution, not a measured astigmatic field surface. Plane plate surfaces add zero to this sum.

| Native surface | Patent surface | Surface Petzval contribution, mm⁻¹ |
|---|---|---:|
| 1 | 30 | -0.001536074204 |
| 2 | 31 | +0.007705985481 |
| 3 | 32 | -0.001372647095 |
| 4 | 33 | -0.005305522417 |
| 5 | 34 | -0.003722934712 |
| 6 | 35 | -0.010778658942 |
| 7 | 36 | +0.018406368369 |
| 8 | 37 | -0.002701316255 |
| 9 | 38 | -0.002914109487 |

The complete source system has Petzval sum -0.000726199904 mm⁻¹ at both published endpoints. The patent discusses index allocation, central-element bending and shared negative power as ways to balance field curvature and other aberrations. The calculations support the stated power/Petzval structure; they do not attribute a measured coma or distortion term to one element. Patent FIG.9 contains the Example 1 aberration plots, but no unsupported numerical reconstruction of those plots is asserted. [1, ¶¶0156–0161, 0184–0202, 0417–0419]

## Reference Planes Plates Pupils and Source Verification

The native virtual-object distance is 24.3806 mm behind the converter's first vertex, obtained from the printed master air-equivalent BF 26.238 mm minus the printed junction 1.8574 mm. Its authored last gap is 11.8764 mm before the cover plate. The plate is 4.0 mm thick at nd = 1.51633, νd = 64.14, followed by 0.8 mm of air. Its physical presence is emitted exactly once in the composition.

Because the physical master tail converts to 26.237948203887 mm in air, native composition has junction 1.857348203887 mm. This differs from the printed junction by approximately 51.796113 nm. A separate diagnostic using the exact printed junction reproduces the source EFL/BFD. No source spacing or native reference was adjusted to remove that rounding-level distinction.

For the native converter's stated virtual object, the paraxial image lies 15.314302856 mm behind the last powered vertex, with lateral magnification 1.413956852. The authored air-equivalent image distance is 15.314348204 mm; their residual is -0.000045347707 mm. These are the proper native consistency quantities rather than the negative collimated-input BFD.

| Source branch and state | EFL, mm | Air BFD, mm | First vertex to paraxial image, mm | TL/EFL |
|---|---:|---:|---:|---:|
| master WE | 40.809626225 | 26.238173699 | 176.898673699 | 4.334729084 |
| combined WE | 57.703354120 | 15.314650131 | 192.002550131 | 3.327407099 |
| master TE | 146.999476642 | 26.238152212 | 176.898672212 | 1.203396612 |
| combined TE | 207.851875196 | 15.314607171 | 192.002527171 | 0.923746909 |

Only the source combined TE state has TL/EFL below unity; the combined WE state and both master endpoints do not. No isolated-converter telephoto classification is inferred from a ratio involving its negative focal length. None of these positive source endpoints has BFD greater than EFL, so no retrofocus classification is implied by that criterion.

Pupil positions below are paraxial source-model quantities. Entrance positions are relative to the first master vertex, and exit positions are relative to the branch's last powered vertex; negative exit values lie objectward of that vertex. The physical source iris diameter is unpublished, so pupil scale factors are determined while absolute stop sizes are calibrated rather than independently verified.

| Branch and state | Entrance pupil position, mm | Entrance diameter / stop diameter | Exit pupil position, mm | Exit diameter / stop diameter |
|---|---:|---:|---:|---:|
| master WE | +65.160084552 | 0.596945971 | -96.047120685 | 1.788737623 |
| combined WE | +65.160084552 | 0.596945971 | -36.670266929 | 0.537788267 |
| master TE | +175.189819555 | 2.150337363 | -96.300613602 | 1.792521257 |
| combined TE | +175.189819555 | 2.150337363 | -36.693143289 | 0.538047631 |

The source master table rounds its endpoint F-numbers to 2.88, while FIG.8 prints WE F/2.877 and TE F/2.880. The mandatory beam floor uses those figure values. The combined table prints F/4.07; the marketed compatible-host class is f/2.8, and the native minimum-host limit is 2.8. These quantities have different purposes and are not silently substituted for one another.

The actual runtime's calibrated source-stop radii and pupil helpers differ from simply assigning a paraxial iris. Source nominal incoming axial radius means computed master EFL/(2N); independently stop-aimed tests solve a different launch problem. Agreement with the F-number used to calibrate an inferred stop is not independent evidence of a published diaphragm diameter.

| Source endpoint | Nominal incoming radius, mm | Runtime stop radius, mm | Runtime entrance-pupil helper radius, mm |
|---|---:|---:|---:|
| WE | 7.092392462 | 11.911710046 | 7.110647319 |
| TE | 25.520742472 | 11.909201471 | 25.608800891 |

Five strict printed-value observations remain outside their stated display-precision comparisons. They are not relabeled as exact reproductions:

| Comparison | Calculated minus printed | Original comparison tolerance | Units |
|---|---:|---:|---|
| master-WE-rectilinear-paraxial-field | -0.591249659131 | 0.005 | deg |
| combined-WE-rectilinear-paraxial-field | -0.389497909322 | 0.005 | deg |
| master-TE-rectilinear-paraxial-field | +0.119409415048 | 0.005 | deg |
| converter-G3 | -0.001039796749 | 0.0005 | mm |
| condition9-literal-prose-vs-printed | -1.887944473609 | 0.0005 | dimensionless |

The three field entries compare a rectilinear paraxial atan(image height/EFL) estimate with finite-field published values and are not exact distortion tests. The G3 focal-length discrepancy is separately compatible with displayed-input rounding sensitivity; it is not an exactly reproduced printed value. The remaining entry is the condition (9) wording conflict. No comparison tolerance or prescription value was changed to hide these observations.

## Apertures Geometry and Exact Ray Coverage

Converter semi-diameters are inferred from the original FIG.2 optical rim endpoints, not supplied clear apertures or mechanical casing dimensions. The sequence is:

| Native surface | Inferred semi-diameter, mm |
|---|---:|
| 1 | 10.6 |
| 2 | 10.6 |
| 3 | 10.1 |
| 4 | 9.8 |
| 5 | 9.8 |
| 6 | 10.1 |
| 7 | 11.0 |
| 8 | 11.0 |
| 9 | 11.0 |

The smaller intermediate triplet rims are retained. The renderer joins the optical endpoints using its actual curved surfaces and standard rim segments; it does not reconstruct the patent drawing's square mechanical shelves. No cap was enlarged or reduced during analysis.

Across all 20 sampled branch/station combinations, the sampled minimum element thickness is 1.000000000 mm, maximum true rim-slope angle 44.992117521°, minimum conic radicand 0.500137575214, and maximum shared-band gap-intrusion fraction 0.851840033283. Edge/gap scans use 1,001 radial samples each; finite sampling is not a rigorous continuum proof of every geometric inequality. The actual project validators also run. The gap-sag allowance remains the default 0.90, with no override, and maximum actual hidden render trim is 0.0 mm.

Source master, native-composed and exact-junction branches transmit all 401/401 nominal axial launches and 101/101 independently physical-stop-aimed axial rays at each published endpoint. The actual current-stop-aimed source beams also clear at every sampled intermediate station. Nominal metadata beams at intermediate states can clip the stop because linearly interpolated focal metadata is not a physical aperture law.

Chief rays to image heights 0, 5.41, +10.82 and −10.82 mm transmit in every sampled branch/station. The largest absolute target residual is 0.000092451317 mm. Chief coverage does not establish transmission of every field-marginal ray. Default native viewer rays clear; some intermediate bare-master off-axis default rays clip and remain reported.

At an artificial host F/2.8, the WE full-master nominal axial test transmits 399/401, with two genuine clips at master S22; its independently stop-aimed counterpart transmits 99/101 with two clips there. TE clears both axial ensembles. The historical converter-only F/2.8 test disabled analytical-host aperture gates. Its published endpoints are complete, but the artificial intermediate nominal-metadata beams contain six failures at zoom 0.25 and eighteen at zoom 0.50, all before the converter at master S18. Surviving-ray envelopes alone do not establish full-denominator clearance. Those failures remain in the original ledger.

The full diagnostic denominator ledger follows. Attempted = constructed + unsolved; constructed = transmitted + clipped + failed. “Unsolved” means that a finite launch was not obtained by the bounded aiming method. “Failed” includes intersection, numerical, incomplete-path or TIR outcomes recorded by the tracer. Neither is counted as transmission or automatically reclassified as physical clipping.

An additional independent converter-only check constructs each incident wavefront from the unchanged master prescription at its actual Gaussian focal length, using entrance-beam radius f/(2 × 2.8). It covers the two published endpoints and the three declared diagnostic interpolations without asserting a physical cam. All 2,005 rays (401 at each state) transmit through the actual converter and physical plate with every native converter rim enabled; minimum converter clearance is 5.036137 mm. Independent vector-Snell and production-runtime image intercepts differ by at most 8.030e-14 mm. Whole-master aperture transmission is a separate question, and no production host is qualified by this conditional incident-wavefront test.

| Branch | Zoom | Attempted | Constructed | Unsolved | Transmitted | Clipped | Failed |
|---|---:|---:|---:|---:|---:|---:|---:|
| source_master | 0.00 | 1505 | 1495 | 10 | 1331 | 164 | 0 |
| source_master | 0.25 | 1481 | 1481 | 0 | 1249 | 232 | 0 |
| source_master | 0.50 | 1481 | 1481 | 0 | 1234 | 247 | 0 |
| source_master | 0.75 | 1481 | 1471 | 10 | 1234 | 235 | 2 |
| source_master | 1.00 | 1505 | 1481 | 24 | 1289 | 174 | 18 |
| source_native | 0.00 | 1747 | 1747 | 0 | 1622 | 125 | 0 |
| source_native | 0.25 | 1723 | 1723 | 0 | 1519 | 204 | 0 |
| source_native | 0.50 | 1723 | 1723 | 0 | 1509 | 214 | 0 |
| source_native | 0.75 | 1723 | 1723 | 0 | 1535 | 188 | 0 |
| source_native | 1.00 | 1747 | 1733 | 14 | 1589 | 134 | 10 |
| source_exact_junction | 0.00 | 1505 | 1505 | 0 | 1391 | 114 | 0 |
| source_exact_junction | 0.25 | 1481 | 1481 | 0 | 1277 | 204 | 0 |
| source_exact_junction | 0.50 | 1481 | 1481 | 0 | 1267 | 214 | 0 |
| source_exact_junction | 0.75 | 1481 | 1481 | 0 | 1293 | 188 | 0 |
| source_exact_junction | 1.00 | 1505 | 1491 | 14 | 1347 | 134 | 10 |
| fastest_f28 | 0.00 | 1906 | 1906 | 0 | 1752 | 154 | 0 |
| fastest_f28 | 0.25 | 1882 | 1882 | 0 | 1638 | 238 | 6 |
| fastest_f28 | 0.50 | 1882 | 1882 | 0 | 1604 | 260 | 18 |
| fastest_f28 | 0.75 | 1882 | 1882 | 0 | 1642 | 240 | 0 |
| fastest_f28 | 1.00 | 1906 | 1892 | 14 | 1708 | 174 | 10 |
| Total | — | 33027 | 32941 | 86 | 29030 | 3837 | 74 |

These totals combine overlapping axial, field-disk, stopped-down, spectral and stress ensembles, so their transmission fraction is not a radiometric throughput or measured vignetting percentage. Viewer central-chief-plus-offset disks and individually stop-aimed disks are kept distinct; f/4 and f/8 native field disks are separate diagnostics. All launch attempts and outcomes are retained in the accompanying results.

The pinned runtime has a documented grazing-chord limitation: a pair of valid sphere roots can fall between its bracket samples. [6] A separate complete-sphere quadratic audit, evaluated at high precision, checks all 74 failed rays and 86 failing aiming iterates in this dossier. No recorded packet hides a forward intersection on the physical near-vertex cap. The old S18 diagnostic roots are backward and outside the rim; the first-surface failed-ray roots are outside the rim. This does not solve the unresolved aiming problems, certify polynomial-asphere root completeness, establish catalog-wide incidence or fix the engine. The frozen independent tracer uses Newton/sag intersections; its agreement alone was not treated as a complete root proof.

Several unsuccessful aims have diagnostic out-of-rim Newton iterates, but that does not identify a successfully constructed blocked physical ray. Aiming solutions remain unresolved even where the recorded failing iterate is geometrically classified. This distinction prevents a numerical solver limitation from being disguised as either clearance or known vignetting.

## Compatibility and Model Limits

The converter is offered on the OM SYSTEM M.Zuiko Digital ED 90mm f/3.5 Macro IS PRO, which OM SYSTEM lists as compatible with the MC-14. Infinity-focus MTF evidence on that pairing supports this. The M.Zuiko 40–150mm f/2.8 PRO is also on the maker's compatibility list, but it is not enabled here until it has been qualified separately. Other Micro Four Thirds lenses do not declare the converter. That is a review policy, not a claim that they cannot mount it, and any new host needs its own review. The patent's master lens serves only to check the converter's calculations; it does not qualify any catalog lens.

The model therefore follows Example 1 within two stated limits: the semi-diameters are estimated from FIG. 2, and dispersion away from the d line comes from the catalog equivalents. It does not establish that Olympus used this prescription, a production host prescription, finite-focus performance, a physical zoom cam, complete chromatic image quality or the transmission of every off-axis ray. In the patent's master lens, aspherical surface 15 turns over inside the axial beam. That was accepted only for the unchanged master used in the calculations, and every other geometry check still applies. The audit file keeps the original failed comparisons and the unresolved ray-aiming cases.

## Sources and References

1. Ogata, Yasuji, and Yasuharu Yamada. “Teleconverter and image pickup system using the same.” Olympus Imaging Corp., US 2015/0226943 A1, published 2015-08-13. [Original patent PDF](https://patentimages.storage.googleapis.com/00/ce/f9/6fefdaa0f48407/US20150226943A1.pdf). Cover for bibliographic data; FIGS.1–3 for geometry; FIGS.8–9 for master/Example 1 plots; PDF p.25/printed p.10 for conventions; PDF p.26/printed p.11 for master and Example 1 prescriptions; PDF p.28/printed p.13 for conditions and figure definitions. Paragraph locators are cited above.
2. OM SYSTEM/Olympus. [Original MC-14 construction image](https://jp.omsystem.com/content/000022827.jpg), retained original bytes captured 2026-10-10. Topology/HR-highlight evidence only.
3. Olympus. [M.Zuiko Digital MC-14 instruction manual](https://download.omsystem.com/pages/inst/mzdmc14/manual_mzdmc14.pdf), specifications as of October 2014, PDF p.4/printed p.6 EN. Retained original bytes captured 2026-10-10.
4. OM SYSTEM. [MC-14 product specifications](https://jp.omsystem.com/product/lens/mc14/index.html), structured web record rechecked 2026-10-12; original 2026-10-10 retrieval summary also retained. The web records are not archived HTML. Manufacturer compatibility remains restricted to supported lenses.
5. Original manufacturer optical-glass catalogs listed below, retained with their original retrieval dates of 2026-10-11 and per-file hashes in the evidence. All were reparsed for the coordinate audit. Catalog matches and line-index proxies do not establish patent supplier identity.

- [ohara_all_20260701.zip](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip).

- [ohara_s_5d.xlsx](https://oharacorp.com/wp-content/uploads/catalogs/ohara-20260402-5.xlsx).

- [ohara_l_5d.xlsx](https://oharacorp.com/wp-content/uploads/catalogs/ohara-20250312-L5.xlsx).

- [hoya_include_obsolete.agf](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf).

- [hoya.xlsx](https://www.hoya-opticalworld.com/common/xls/HOYA20260601.xlsx).

- [hikari.xlsx](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx).

- [schott.zip](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?v=3b65e351&download=true).

- [schott.xlsx](https://media.schott.com/api/public/content/7f5a58f7fa754445abab44cafc76acb3?v=a102056c&download=true).

- [sumita_download.zip](https://www.sumita-opt.co.jp/en/wp/wp-content/themes/sumita-opt-en-v2026/download-files.php).

- [CDGM202609.xlsx](https://www.cdgmgd.com/downloadFile.htm?uid=d5ilBXjFgXCK9VxoDmb).

- [CDGM-ZEMAX202609.AGF](https://www.cdgmgd.com/downloadFile.htm?uid=pvntrGdxCC64MZei1SX).

6. LensVisualizer issue 779, “Intersection solvers miss a grazing chord shorter than one bracket-scan step,” opened 2026-10-12. Primary issue capture retained at 2026-10-12 12:55:39 UTC; no engine patch or branch switch applied. https://github.com/ronbuening/LensVisualizer/issues/779
