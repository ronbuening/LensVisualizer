# Canon EF 70-200mm f/2.8L IS II USM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2009/0296231 A1  
**Application Number:** 12/470,062  
**Filed:** May 21, 2009  
**Published:** December 3, 2009  
**Priority:** JP 2008-142352, May 30, 2008  
**Inventor:** Takashi Shirasuna  
**Assignee:** Canon Kabushiki Kaisha  
**Title:** Zoom Lens and Image Pickup Apparatus Including the Same  
**Embodiment analyzed:** Numerical Embodiment 2 (¶0114)  
**Worked examples in patent:** 4

US 2009/0296231 A1 describes a zoom lens having, in order from the object side, a positive first lens unit, a negative second lens unit, and subsequent positive lens units. The first unit is subdivided into a fixed front subunit L1F and a rear subunit L1R that moves during focusing; in Embodiments 1 and 2, L1R also moves during zooming. The tabulated Numerical Embodiment 2 gives a 23-element, 19-group, all-spherical prescription covering $f = 72.14, 135.00, 193.97$ mm at FNO = 2.9, field angle $2\omega = 33.4^\circ, 18.2^\circ, 12.7^\circ$, and image height 21.6 mm.

The production identification rests on convergent evidence rather than on a direct product name in the patent. Canon's EF70-200mm f/2.8L IS II USM specification gives 23 elements in 19 groups, eight diaphragm blades, a 1.2 m closest focusing distance, 0.21× maximum magnification, 77 mm filter thread, and 88.8 × 199 mm barrel dimensions. Canon's own product note also states that the IS II design newly added one fluorite element and used five UD elements. Numerical Embodiment 2 contains exactly five nd = 1.49700, $\nu_d = 81.5$ UD-class elements and one nd = 1.43387, $\nu_d = 95.1$ fluorite element. Canon's EF70-200mm f/2.8L IS III USM page states that the later IS III version inherited the predecessor's 23/19 optical design with one fluorite and five UD elements, adding revised coatings rather than a new prescription.

The data file therefore treats Numerical Embodiment 2 as the patent prescription corresponding to the EF70-200mm f/2.8L IS II USM optical formula, and also relevant to the optically inherited EF70-200mm f/2.8L IS III USM formula. The file does not model coatings or IS decentering; it models the centered axial optical prescription.

## Optical Architecture

The prescription is a five-moving-subunit zoom layout when L1 is split as the patent does: positive L1F, positive L1R, negative L2, positive L3, and positive L4. In broader patent language it is a positive-negative-positive-positive four-unit zoom because L1F and L1R together form the first positive lens unit.

| Unit | Elements | Groups | Paraxial focal length | Function |
|---|---:|---:|---:|---|
| L1F | L1-L3 | 3 | +177.23 mm | Fixed front collector and front chromatic-correction station |
| L1R | L4-L5 | 2 | +142.00 mm | Moving rear first-unit subunit; focus group and zoom participant |
| L2 | L6-L9 | 3 | -25.70 mm | Negative variator |
| L3 | L10-L12 | 3 | +83.94 mm | Positive compensator, including the fluorite element |
| Stop | — | — | — | Aperture stop ahead of L4 |
| L4 | L13-L23 | 8 | +100.65 mm | Rear relay / image-forming group |

The patent calls the class a telephoto-type zoom, and in ordinary photographic use the product is a 70-200mm telephoto zoom. In strict optical-track terms, however, the tele end is not a compact telephoto construction: the first-surface-to-image track is about 238.9 mm at 193.97 mm EFL, giving TL/EFL ≈ 1.23. The design is better described as an internal-zoom EF-mount telephoto zoom whose long rear clearance and constant-length mechanics prevent a short telephoto ratio.

The L1+L2 composite remains negative across the zoom range. Independent paraxial tracing gives $f_{12w} = -60.41$ mm and $f_{12t} = -162.47$ mm, so the patent's conditional value $f_{12t}/f_{12w} = 2.69$ is a positive ratio because both quantities are negative. The earlier interpretation that L1+L2 becomes positive at the telephoto end is not supported by the prescription.

The design is all-spherical. No aspherical coefficient table appears in the numerical examples, and every tabulated surface in Numerical Embodiment 2 is spherical or the aperture stop.

## Element-by-Element Analysis

The patent gives refractive index and Abbe number, not manufacturer glass names. The names below are public OHARA catalog-equivalent matches to the patent's $(n_d, \nu_d)$ pairs. They should not be read as Canon procurement disclosures.

### L1 — Negative Meniscus, convex to object

nd = 1.74950, $\nu_d$ = 35.3. Glass: S-NBH51 / S-LAM7 equivalent (OHARA catalog match). f = -251.9 mm.

The first element is a weak negative meniscus with both radii positive (R1 = +314.575 mm, R2 = +117.542 mm). It moderates the height and convergence of the beam entering the two UD positive elements that follow. Its high dispersion supplies the chromatic counterweight for the low-dispersion positive front elements.

### L2 — Positive UD Biconvex

nd = 1.49700, $\nu_d$ = 81.5. Glass: S-FPL51 equivalent (OHARA catalog match). f = +194.5 mm.

L2 is the first of five S-FPL51-class UD elements. Its biconvex form provides major positive power in L1F while limiting secondary spectrum. Together with L1 and L3 it forms a front achromatizing triplet rather than a simple positive collector.

### L3 — Positive UD Meniscus, convex to object

nd = 1.49700, $\nu_d$ = 81.5. Glass: S-FPL51 equivalent (OHARA catalog match). f = +226.7 mm.

L3 completes the fixed front subunit. The strong positive front curvature (R5 = +75.124 mm) adds convergence before the variable d6 gap into L1R. Its shared UD material with L2 gives the front subunit two low-dispersion positive members working against L1's flint dispersion.

### L4 — Negative Meniscus, convex to object

nd = 1.80518, $\nu_d$ = 25.4. Glass: S-TIH6 equivalent (OHARA catalog match). f = -384.0 mm.

L4 is the negative member of the moving L1R subunit. It is a weak negative meniscus in isolation, but its high index and very low Abbe number make it an efficient chromatic and spherical-aberration balancing element for L5.

### L5 — Positive UD PR Lens, nearly plano-convex

nd = 1.49700, $\nu_d$ = 81.5. Glass: S-FPL51 equivalent (OHARA catalog match). f = +102.0 mm.

L5 is the patent's PR lens: the positive lens in the rear subunit L1R. Its rear surface radius is essentially flat at R10 = +33115.608 mm. The patent identifies the PR lens as one of the two extraordinary-dispersion elements central to the invention, satisfying $\nu_d > 60$ and $\theta_{gF} > -0.0015\nu_d + 0.6425$.

Because L1R moves during focusing and, in Embodiment 2, during zooming, the PR lens provides a chromatic correction contribution that tracks focus state rather than remaining fixed in the front collector.

### L6 — Strong Biconcave Negative

nd = 1.80400, $\nu_d$ = 46.6. Glass: S-LAH65V equivalent (OHARA catalog match). f = -41.3 mm.

L6 begins the negative L2 variator. Its object-side surface is nearly flat relative to the image-side curvature, so most of the negative power occurs at R12 = +34.333 mm. The high index keeps this strong negative member from requiring still steeper curvature.

### L7-L8 — Cemented Variator Doublet; L7 is the N2 Lens

L7: nd = 1.49700, $\nu_d$ = 81.5. Glass: S-FPL51 equivalent (OHARA catalog match). f = -51.0 mm.  
L8: nd = 1.84666, $\nu_d$ = 23.9. Glass: S-TIH53-class equivalent (OHARA catalog match). f = +48.5 mm.

L7 is the patent's N2 lens, a negative extraordinary-dispersion element in the second lens unit. The patent's chromatic logic is specific: PR in L1R suppresses chromatic aberration at the telephoto side during close focusing, but this can overcorrect lateral color at the wide-angle side. N2 in L2 compensates because off-axis beams pass through L2 at higher height at the wide end and lower height at the tele end.

The cemented interface at R14 = +36.914 mm places a low-index UD crown against a dense high-dispersion positive element. The doublet is a compact high-leverage correction station inside the negative variator.

### L9 — Negative Singlet

nd = 1.69680, $\nu_d$ = 55.5. Glass: S-LAL14 equivalent (OHARA catalog match). f = -82.0 mm.

L9 is the final negative element of L2. Its rear surface is nearly flat (R17 = +3742.480 mm), leaving most of the power at the object-side surface. It helps shape the exiting beam from the variator before the long d17 gap to L3.

### L10 — Positive Compensator Element

nd = 1.67790, $\nu_d$ = 55.3. Glass: S-LAL12 equivalent (OHARA catalog match). f = +89.9 mm.

L10 is the first positive element of L3. It begins reconverging the beam after L2. Its moderate index and moderate dispersion make it a low-risk positive member ahead of the fluorite element.

### L11 — Positive Fluorite Element

nd = 1.43387, $\nu_d$ = 95.1. Glass: CaF2 fluorite. f = +97.4 mm.

L11 is the sole fluorite element in Numerical Embodiment 2. It sits in the moving L3 compensator group, not in the fixed front collector. This position lets the fluorite contribution vary with the compensator motion across the zoom range. Canon's product description emphasizes that the IS II design newly incorporated a fluorite element in addition to five UD elements.

The air gap between L11 and L12 is only d21 = 0.09 mm. This is optically close to a cemented interface but remains an air space in the patent prescription. The data file preserves it as an air gap.

### L12 — Negative Meniscus

nd = 1.80100, $\nu_d$ = 35.0. Glass: S-LAM66 equivalent (OHARA catalog match). f = -107.0 mm.

L12 closes the L3 compensator. Its negative power and flint-like dispersion counterbalance the preceding L10/L11 positive pair. The element also helps set the pupil relationship into the aperture stop immediately behind L3.

### L13 — Positive Meniscus

nd = 1.80400, $\nu_d$ = 46.6. Glass: S-LAH65V equivalent (OHARA catalog match). f = +96.6 mm.

L13 is the first relay element after the aperture stop. Its high index allows useful positive power near the stop with controlled curvature. Elements near the stop are particularly effective for spherical aberration and axial color balancing.

### L14 — Weak Positive Meniscus

nd = 1.77250, $\nu_d$ = 49.6. Glass: S-LAH66 equivalent (OHARA catalog match). f = +166.4 mm.

L14 continues the relay convergence with relatively modest power. The small d26 gap from L13 and the d28 gap into the next doublet give the relay group additional degrees of freedom for balancing zonal spherical aberration.

### L15-L16 — Cemented Doublet, Negative Flint + Positive UD

L15: nd = 1.74000, $\nu_d$ = 28.3. Glass: S-TIH3 equivalent (OHARA catalog match). f = -50.8 mm.  
L16: nd = 1.49700, $\nu_d$ = 81.5. Glass: S-FPL51 equivalent (OHARA catalog match). f = +57.5 mm.

This L4 cemented doublet is a chromatic correction station in the relay unit. The Abbe contrast is large, and L16 is the fifth UD element in the prescription. The near balance between the standalone negative and positive powers indicates that chromatic correction is at least as important as net imaging power here.

### L17-L18 — Cemented Doublet, Positive Dense Flint + Negative Crown

L17: nd = 1.80518, $\nu_d$ = 25.4. Glass: S-TIH6 equivalent (OHARA catalog match). f = +66.6 mm.  
L18: nd = 1.58313, $\nu_d$ = 59.4. Glass: S-BAL42 equivalent (OHARA catalog match). f = -39.2 mm.

This doublet has net negative power because L18 is stronger than L17 in isolation. Its position in the rear relay makes it useful for field curvature and oblique aberration control, not just axial color.

### L19 — Negative Singlet

nd = 1.74400, $\nu_d$ = 44.8. Glass: S-LAM2 equivalent (OHARA catalog match). f = -89.6 mm.

L19 is a rear-relay negative singlet with most of its power at the object-side surface. It supplies negative contribution for field and pupil control before the final positive relay members.

### L20 — Positive Biconvex

nd = 1.80400, $\nu_d$ = 46.6. Glass: S-LAH65V equivalent (OHARA catalog match). f = +70.9 mm.

L20 is one of the stronger positive imaging elements in L4. Its use of the same S-LAH65V-class glass as L6 and L13 is consistent with a need for high index, moderate dispersion, and manageable curvature.

### L21-L22 — Cemented Doublet, Positive Crown + Negative High-Index Glass

L21: nd = 1.48749, $\nu_d$ = 70.2. Glass: S-FSL5 equivalent (OHARA catalog match). f = +52.5 mm.  
L22: nd = 1.83400, $\nu_d$ = 37.2. Glass: S-LAH60V equivalent (OHARA catalog match). f = -39.5 mm.

The last cemented doublet pairs a high-Abbe crown with a high-index negative member. It has significant power and also provides a late-stage chromatic and field correction station before the final singlet.

### L23 — Final Positive Meniscus

nd = 1.83400, $\nu_d$ = 37.2. Glass: S-LAH60V equivalent (OHARA catalog match). f = +131.8 mm.

L23 is the final optical element. Its positive meniscus form contributes final relay power and helps set the image-side ray geometry before the 54.1 mm air-equivalent back focus.

## Glass Identification and Selection

Because the patent gives refractive index and Abbe number rather than manufacturer glass names, the glass labels here are catalog-equivalent identifications derived by direct numerical matching against the OHARA catalog table. Several tempting family-name matches are not supported by the public catalog values: for example, the 1.80518 / 25.4 pair matches S-TIH6, the 1.67790 / 55.3 pair matches S-LAL12, and the 1.83400 / 37.2 pair matches S-LAH60V. These are public catalog equivalents, not Canon material disclosures.

| Element(s) | Patent nd / $\nu_d$ | Corrected public catalog match | Role |
|---|---:|---|---|
| L1 | 1.74950 / 35.3 | S-NBH51 / S-LAM7 class | Front high-dispersion negative partner |
| L2, L3, L5, L7, L16 | 1.49700 / 81.5 | S-FPL51 class | UD / extraordinary-dispersion correction |
| L4, L17 | 1.80518 / 25.4 | S-TIH6 class | Dense titanium flint correction |
| L6, L13, L20 | 1.80400 / 46.6 | S-LAH65V class | High-index moderate-dispersion workhorse |
| L8 | 1.84666 / 23.9 | S-TIH53 class | Dense positive flint in L2 doublet |
| L9 | 1.69680 / 55.5 | S-LAL14 class | Variator negative singlet |
| L10 | 1.67790 / 55.3 | S-LAL12 class | Positive L3 compensator member |
| L11 | 1.43387 / 95.1 | CaF2 fluorite | Low-dispersion secondary-spectrum correction |
| L12 | 1.80100 / 35.0 | S-LAM66 class | Negative L3 flint partner |
| L14 | 1.77250 / 49.6 | S-LAH66 class | Relay positive member |
| L15 | 1.74000 / 28.3 | S-TIH3 class | Negative member of relay doublet |
| L18 | 1.58313 / 59.4 | S-BAL42 class | Negative crown member of relay doublet |
| L19 | 1.74400 / 44.8 | S-LAM2 class | Rear-relay negative singlet |
| L21 | 1.48749 / 70.2 | S-FSL5 class | High-Abbe crown in final doublet |
| L22, L23 | 1.83400 / 37.2 | S-LAH60V class | Final high-index negative/positive members |

The chromatic strategy is distributed. The five S-FPL51-class UD elements are not concentrated in one location: two are in L1F, one is the PR lens in L1R, one is the N2 lens in L2, and one is in L4. Fluorite is located in L3. This places low-dispersion correction in every major functional region of the zoom rather than relying on a single front ED group.

## Focus Mechanism

The patent's first lens unit is split into L1F and L1R. L1F remains fixed during focusing, while L1R moves along the optical axis. In Embodiments 1 and 2, L1R also moves during zooming from wide to tele, increasing the d6 interval between L1F and L1R. The patent states that this reduces the beam height passing through L1R at the telephoto end, reducing the effective diameter and focus drive load.

The source patent does not tabulate close-focus spacing values for Numerical Embodiment 2. It provides aberration plots at infinity and at an object distance of 1.5 m, while Canon's production specification gives a 1.2 m closest focusing distance. The data file therefore uses the production close-focus metadata for catalog display but does not invent close-focus d6/d10 values. All `var` entries are infinity-focus zoom spacings with identical close values.

| Gap | Function | Wide | Mid | Tele |
|---|---|---:|---:|---:|
| d6 | L1F to L1R | 10.68 | 26.38 | 33.38 |
| d10 | L1R to L2 | 1.58 | 13.38 | 17.34 |

## Aspherical Surfaces

Numerical Embodiment 2 contains no aspherical surfaces. The source table contains only spherical radii and one aperture stop surface. The data file therefore sets `asph: {}`.

## Zoom Mechanism

The zoom is internal in the prescription: the sum of d1 through d42 remains 184.75-184.76 mm at the three tabulated positions, with the small variation attributable to rounding in the printed table. The 54.1 mm back focal distance is separate from that first-surface-to-last-surface length.

The variable gaps are:

| Gap | Wide | Mid | Tele | Interpretation |
|---|---:|---:|---:|---|
| d6 | 10.68 | 26.38 | 33.38 | L1R moves toward the image relative to fixed L1F |
| d10 | 1.58 | 13.38 | 17.34 | L2 separates from L1R as zoom proceeds |
| d17 | 28.81 | 14.37 | 1.08 | L2 approaches L3 monotonically |
| d23 | 18.32 | 5.25 | 7.59 | L3-to-stop spacing is non-monotonic; L3 follows the compensator cam locus |

The d23 reversal is consistent with the patent description that L3 moves along a locus convex to the image side. The data file uses three `zoomPositions` matching the patent's EFLs: 72.14, 135.00, and 193.97 mm.

## Chromatic Correction Strategy

The patent's principal claim is not a simple use of UD glass, but a paired placement of extraordinary-dispersion material in the focusing and variator sections. It defines the Abbe number and partial dispersion ratio as:

$$\nu_d = \frac{n_d - 1}{n_F - n_C}$$

$$\theta_{gF} = \frac{n_g - n_F}{n_F - n_C}$$

For the PR and N2 material, the patent requires $\nu_d > 60$ and $\theta_{gF} > -0.0015\nu_d + 0.6425$. For the S-FPL51-class material in Numerical Embodiment 2, $\nu_d = 81.5$ and $\theta_{gF} = 0.539$, while the threshold is about 0.520.

The patent's logic is zoom-dependent. PR in L1R suppresses chromatic aberration that becomes conspicuous on the telephoto side during finite-distance focusing. N2 in L2 counteracts wide-angle lateral color overcorrection because off-axis beams pass through L2 at greater height at the wide end than at the tele end. Fluorite in L3 adds another low-dispersion correction station in the moving compensator.

## Image Stabilization

US 2009/0296231 A1 is not an image-stabilizer mechanism patent. The centered prescription does not identify a decenterable IS group or give decentering parameters. Canon's product page for the IS II lens states that the production lens has image stabilization equivalent to approximately four shutter-speed stops, and its block diagram identifies UD lenses, a fluorite lens, and an IS unit. The data file models only the centered axial prescription; it does not model lateral IS group shift.

## Data-File Semi-Diameters

The patent does not publish clear-aperture semi-diameters. The data file uses inferred semi-diameters from a paraxial on-axis marginal ray and full-field chief ray envelope, then reduces several neighboring surface diameters where the renderer's cross-gap sag policy would otherwise show surface overlap. This is most relevant at the very thin d21 = 0.09 mm air space between L11 and L12 and at several tightly spaced positive-positive or positive-negative air gaps in the front and variator sections.

These semi-diameters are therefore drawing and ray-containment estimates, not manufacturer mechanical clear-aperture disclosures. The prescription radii, thicknesses, refractive indices, Abbe numbers, stop position, variable gaps, and back focus remain direct transcriptions of the patent table.

## Verification Summary

Independent paraxial tracing of the transcribed prescription gives the following values:

| Quantity | Computed | Patent table |
|---|---:|---:|
| EFL, wide | 72.1378 mm | 72.14 mm |
| EFL, mid | 134.9808 mm | 135.00 mm |
| EFL, tele | 193.9725 mm | 193.97 mm |
| Back focal distance from final surface | 54.05-54.06 mm | 54.1 mm |
| First surface to last surface | 184.75-184.76 mm | 184.7 mm |
| Full field angle $2\omega$, wide | 33.4° | 33.4° |
| Full field angle $2\omega$, tele | 12.7° | 12.7° |
| Stop semi-diameter for FNO 2.9 | 17.31 mm | inferred from FNO |

The corrected group focal lengths also match the continuation of the patent table for Numerical Embodiment 2: L1F +177.23 mm, L1R +142.00 mm, L2 -25.70 mm, L3 +83.94 mm, and L4 +100.65 mm.

The conditional expression values for Embodiment 2 are reproduced by the prescription and the patent table: (1) 81.5, (2) 0.520 < 0.539, (3) 1.23, (4) 1.99, (5) 1.15, (6) 0.36, (7) 2.23, (8) 2.69, and (10) 0.80.

## Sources

1. US 2009/0296231 A1, "Zoom Lens and Image Pickup Apparatus Including the Same," Takashi Shirasuna / Canon Kabushiki Kaisha, published December 3, 2009.
2. Canon Camera Museum, "EF70-200mm f/2.8L IS II USM," https://global.canon/en/c-museum/product/ef406.html.
3. Canon Camera Museum, "EF70-200mm f/2.8L IS III USM," https://global.canon/en/c-museum/product/ef469.html.
4. OHARA INC., "Glass Type," https://www.ohara-inc.co.jp/en/product/01000/.
5. OHARA Corporation, "S-FPL51," https://oharacorp.com/glass/s-fpl51/.
