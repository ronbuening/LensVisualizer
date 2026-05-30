# Sigma APO Macro 150mm F2.8 EX DG OS HSM — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2012-63403 A (特開2012-63403)  
**Application Number:** JP 2010-205393  
**Filed:** 2010-09-14  
**Published:** 2012-03-29  
**Inventor:** Yukihiro Yamamoto (山本幸広)  
**Applicant:** Sigma Corporation (株式会社シグマ)  
**Title:** Inner-focus macro lens with image-stabilization function (防振機能を有するインナーフォーカス式マクロレンズ)  
**Embodiment analyzed:** Numerical Example 2 (数値実施例2, ¶0085–¶0089)

JP 2012-63403 A describes a life-size inner-focus macro lens with optical image stabilization. The claimed layout is, from object to image, six functional groups with powers **positive / negative / positive / negative / negative / positive**. During focusing from infinity to close range, L1 is fixed, L2 moves toward the image, L3 moves toward the object, and L5 moves laterally for image stabilization. The aperture stop, L4, L5, and L6 remain axially fixed.

Numerical Example 2 is the embodiment that best matches the production **Sigma APO Macro 150mm F2.8 EX DG OS HSM**. The identification rests on the following convergence of patent and manufacturer evidence:

1. The patent embodiment has **19 glass elements in 13 air-separated groups**, matching Sigma's published optical construction.
2. The patent includes three positive low-dispersion FCD1-class elements at $n_d = 1.49700, \nu_d = 81.61$, corresponding to the production lens's three SLD-class elements.
3. The infinity focal length is $f = 150.00$ mm in the patent table; the independent paraxial trace gives 149.992 mm.
4. The patent maximum image height is $Y = 21.63$ mm. With $f = 149.992$ mm, the full diagonal angle is $2\arctan(21.63/149.992) = 16.41^\circ$, matching Sigma's published 16.4° field.
5. The focus and stabilization architecture matches the production description: internal focusing, floating focus groups, and a laterally decentered optical stabilizer group.
6. The patent is corrected through $|\beta| = 1.0$, matching the production 1:1 maximum magnification.
7. A finite-conjugate paraxial trace at the $|\beta| = 1.0$ spacing gives an object distance of 186.18 mm in front of the first surface. Adding the fixed first-surface-to-image track of 192.49 mm gives 378.67 mm from object to image plane, matching Sigma's 38 cm minimum focusing distance.

Example 2 is preferable to the sibling examples because it is the only 19-element, 13-group embodiment at the nominal 150 mm focal length. Examples 1 and 3 share much of the construction but are shorter in focal length. Examples 4 and 5 are also nominally 150 mm, but they use simpler 18-element prescriptions and do not match the production optical construction as closely.

Manufacturer specifications used as hard production references are: 150 mm nominal focal length, F2.8 maximum aperture, F22 minimum aperture, 19 elements in 13 groups, full-frame DG coverage, 16.4° diagonal angle of view, nine rounded diaphragm blades, 38 cm minimum focusing distance, 1:1 maximum magnification, 72 mm filter, and Sigma SA / Canon EF / Nikon F / Sony A production mounts. The patent's $F2.92$ design aperture is therefore recorded as a design value, while the data file keeps F2.8 as the marketed aperture.

## Optical Architecture

The lens is a long-focus, full-frame macro design with floating internal focus and a dedicated optical-stabilization group. It should not be called a strict telephoto optical form on the basis of its prescription dimensions: the computed first-surface-to-image track at infinity is 192.49 mm against a 149.99 mm effective focal length, so $TL/EFL = 1.28$, not less than 1. The lens is a telephoto macro in photographic use and focal-length category, but not a compact telephoto-form objective by the usual optical-length criterion.

The six functional groups are:

| Functional group | Surfaces | Elements | Power | Paraxial focal length | Motion / role |
|---|---:|---:|---:|---:|---|
| L1 | 1–8 | 5 | + | +75.33 mm | Fixed front collector and primary axial-color corrector |
| L2 | 9–15 | 4 | − | −54.60 mm | First focus group; moves toward the image |
| Stop | STO | — | — | — | Fixed aperture stop |
| L3 | 17–21 | 3 | + | +46.55 mm | Second focus group; moves toward the object |
| L4 | 22–23 | 1 | − | −134.51 mm | Fixed pre-stabilizer ray-angle conditioner |
| L5 | 24–28 | 3 | − | −34.65 mm | Fixed axially; laterally decentered for optical stabilization |
| L6 | 29–33 | 3 | + | +53.34 mm | Fixed rear relay and back-focus group |

The mechanically important choice is L4, the weak negative group immediately in front of L5. The patent devotes its explanatory Figures 36–39 and ¶0034–¶0038 to this placement. Without this negative conditioner, increasing the stabilization coefficient would force stronger power in the decentering group, increase ray heights behind the stabilizer, and make decentering coma and field curvature harder to correct. L4 relaxes the incidence angle into L5 while letting the rear section retain a high stabilization coefficient.

The front three functional groups form the main imaging core. The rear three groups are not a simple telephoto compressor; they are a fixed relay/stabilizer assembly that provides back focus, stabilization leverage, and field correction while keeping the moving OS unit compact.

## Element-by-Element Analysis

### L11 — Biconvex positive front collector

$n_d = 1.65844, \nu_d = 50.85$. Glass: **BACED5 (Hoya)**. Standalone in-air focal length: +153.29 mm.

The first element is a moderate-index barium dense crown. Its relatively gentle front curvature starts the convergence without making the first surface excessively strong. It also keeps the front element physically plausible within the 72 mm filter envelope.

### L12 + L13 — Front SLD / dense-flint achromat

**L12:** $n_d = 1.49700, \nu_d = 81.61$. Glass: **FCD1 (Hoya)**, SLD/ED fluorocrown. Standalone focal length: +119.36 mm.  
**L13:** $n_d = 1.80518, \nu_d = 25.46$. Glass: **FD60 (Hoya)**, dense flint. Standalone focal length: −145.71 mm.

This cemented doublet is the first major chromatic-correction unit. L12 is the first of the three FCD1 low-dispersion elements. Hoya's current catalog gives FCD1 a strong positive partial-dispersion deviation, $\Delta P_{g,F} \approx +0.0374$, making it an effective secondary-spectrum corrector when paired with a dense flint.

L13 provides the compact dispersive counter-power. The rear surface is plane in the patent table, so this element is effectively plano-concave, despite its inclusion in a strongly powered cemented pair.

### L14 + L15 — Second front SLD / high-index negative doublet

**L14:** $n_d = 1.49700, \nu_d = 81.61$. Glass: **FCD1 (Hoya)**. Standalone focal length: +73.63 mm.  
**L15:** $n_d = 1.77250, \nu_d = 49.62$. Glass: **TAF1 (Hoya)**. Standalone focal length: −110.35 mm.

The second cemented doublet is the strongest positive assembly in L1. It repeats the low-dispersion positive / high-index negative strategy, but the negative element is TAF1 rather than FD60. TAF1's high index lets the cemented interface remain less extreme while still balancing the front group's power and Petzval contribution.

Together, L12 and L14 are the front group's two anomalous-dispersion positive lenses. This directly follows the patent's recommendation that some positive lenses in L1 use anomalous-partial-dispersion, low-dispersion media for axial and lateral color correction (¶0071).

### L21 — Negative meniscus, first focusing group

$n_d = 1.72916, \nu_d = 54.67$. Glass: **TAC8 (Hoya)**. Standalone focal length: −97.03 mm.

L21 begins the negative L2 focusing group. Its convex-object meniscus shape accepts the converging beam from L1 while introducing the negative power needed for the large internal focusing stroke.

### L22 + L23 — Reversed achromat in the first focusing group

**L22:** $n_d = 1.84666, \nu_d = 23.78$. Glass: **FDS90 (Hoya)**. Standalone focal length: +76.12 mm.  
**L23:** $n_d = 1.48749, \nu_d = 70.44$. Glass: **FC5 (Hoya)**. Standalone focal length: −103.34 mm.

This is a reversed achromat: a positive dense flint cemented to a negative low-dispersion crown. In a moving negative group, this construction helps the group carry strong negative net power without allowing its own chromatic residuals to vary excessively during focus.

The patent's condition (9), $0.25 < |f_2/f| < 0.50$, is aimed at the balance between focus travel and aberration variation. Example 2 gives $|f_2/f| = 0.364$, keeping L2 strong enough for internal focusing but not so strong that coma variation becomes unmanageable.

### L24 — Biconcave negative, rear of L2

$n_d = 1.72916, \nu_d = 54.67$. Glass: **TAC8 (Hoya)**. Standalone focal length: −93.11 mm.

L24 closes the negative focus group. Its high-index crown glass gives useful negative power while keeping curvature and field contribution under control. L2 as a whole has $f_2 = -54.60$ mm.

### L31 — Biconvex positive, second focusing group

$n_d = 1.72916, \nu_d = 54.67$. Glass: **TAC8 (Hoya)**. Standalone focal length: +59.84 mm.

L31 is the first element behind the stop. It starts the positive L3 group and helps re-converge the beam after the negative L2 group. During close focusing, L3 moves toward the object, opposite to L2's image-ward motion.

### L32 + L33 — Rear focus-group SLD achromat

**L32:** $n_d = 1.49700, \nu_d = 81.61$. Glass: **FCD1 (Hoya)**. Standalone focal length: +60.96 mm.  
**L33:** $n_d = 1.80518, \nu_d = 25.46$. Glass: **FD60 (Hoya)**. Standalone focal length: −82.41 mm.

This doublet is the third major chromatic-correction unit and contains the third FCD1 element. The patent specifically recommends anomalous-partial-dispersion, low-dispersion media in a positive lens of L3 to correct axial color at all shooting distances and lateral color at infinity (¶0070).

The symmetric radii on L32 ($R = \pm 59.6187$ mm) make it a clean biconvex SLD crown. The dense-flint L33 supplies the dispersive counter-power while preserving the positive net power of L3.

### L41 — Fixed biconcave negative pre-stabilizer group

$n_d = 1.68893, \nu_d = 31.16$. Glass: **E-FD8 (Hoya)**. Standalone focal length: −134.51 mm.

L41 is optically weak compared with L5, but it is structurally central to the patent. It corresponds to the negative group Lc in Figure 39 and ¶0037: a fixed negative group immediately in front of the decentering stabilizer group. Its purpose is not simply to add negative power, but to reduce the marginal-ray incidence angle into L5 so that decentering coma, astigmatism, and field curvature remain correctable during stabilization.

### L51 + L52 — Stabilizer-group reversed achromat

**L51:** $n_d = 1.80518, \nu_d = 25.46$. Glass: **FD60 (Hoya)**. Standalone focal length: +51.85 mm.  
**L52:** $n_d = 1.72916, \nu_d = 54.67$. Glass: **TAC8 (Hoya)**. Standalone focal length: −30.07 mm.

L51 and L52 form the cemented doublet at the front of the image-stabilization group. Like the L2 doublet, it is a reversed achromat with a positive flint and a negative crown. Because the whole L5 group decenters, residual lateral color in this group would be especially visible during stabilization. The internal chromatic correction of the group is therefore a necessary design choice, not an incidental one.

### L53 — Negative singlet completing the stabilizer group

$n_d = 1.71300, \nu_d = 53.94$. Glass: **LAC8 (Hoya)**. Standalone focal length: −66.14 mm.

L53 completes the compact negative stabilizer group. L5's group focal length is −34.65 mm. The group is held fixed axially during focus and moves only perpendicular to the optical axis for stabilization.

### L61 — Positive front element of the rear relay

$n_d = 1.80611, \nu_d = 40.73$. Glass: **M-NBFD130 / 806-407 Hoya match**. Standalone focal length: +47.87 mm.

The first surface of L61 is convex toward the object, exactly as recommended by ¶0072. Its purpose is to reduce off-axis ray height after the strong negative L5 group, helping control rear barrel diameter and peripheral illumination.

The patent lists $n_d = 1.80611$, while current Hoya catalog data for M-NBFD130 gives $n_d = 1.80610, \nu_d = 40.73$. The one-unit difference in the fifth decimal place is within ordinary catalog/patent rounding and is a stronger match than nearby alternatives.

### L62 + L63 — Rear cemented relay doublet

**L62:** $n_d = 1.75520, \nu_d = 27.53$. Glass: **E-FD4 (Hoya)**. Standalone focal length: −38.23 mm.  
**L63:** $n_d = 1.83400, \nu_d = 37.35$. Glass: **NBFD10 (Hoya)**. Standalone focal length: +41.92 mm.

The closing doublet balances the residual color and field aberrations of the relay section while delivering the final converging cone to the image plane. Its use of dense flint and dense niobium-flint glass keeps the relay compact and helps set the exit geometry.

## Glass Identification and Selection

All patent $(n_d, \nu_d)$ pairs were matched against the current Hoya optical-glass catalog. The Hoya table is a particularly good fit: every glass used in Numerical Example 2 has an exact or near-exact Hoya catalog match, including the FCD1, FD60, TAC8, FDS90, LAC8, E-FD4, and NBFD-family glasses. The data file therefore uses Hoya catalog names and transcribes Hoya C/F/g-line indices and $\Delta P_{g,F}$ values for chromatic modeling.

| Patent $n_d, \nu_d$ | Catalog match | $\Delta P_{g,F}$ | Elements | Function |
|---:|---|---:|---|---|
| 1.49700, 81.61 | FCD1 (Hoya) | +0.0374 | L12, L14, L32 | SLD/ED anomalous-dispersion positive crowns |
| 1.48749, 70.44 | FC5 (Hoya) | +0.0090 | L23 | Low-dispersion crown in L2 reversed achromat |
| 1.65844, 50.85 | BACED5 (Hoya) | +0.0008 | L11 | Moderate-index front crown |
| 1.72916, 54.67 | TAC8 (Hoya) | −0.0046 | L21, L24, L31, L52 | High-index crown / negative group workhorse |
| 1.71300, 53.94 | LAC8 (Hoya) | −0.0071 | L53 | Negative crown in OS group |
| 1.77250, 49.62 | TAF1 (Hoya) | −0.0086 | L15 | High-index front-group negative partner |
| 1.80611, 40.73 | M-NBFD130 class (Hoya) | −0.0056 | L61 | Positive rear-relay high-index element |
| 1.83400, 37.35 | NBFD10 (Hoya) | −0.0021 | L63 | Positive rear-relay dense-flint element |
| 1.68893, 31.16 | E-FD8 (Hoya) | +0.0067 | L41 | Fixed pre-OS negative conditioner |
| 1.75520, 27.53 | E-FD4 (Hoya) | +0.0103 | L62 | Rear-relay negative dense flint |
| 1.80518, 25.46 | FD60 (Hoya) | +0.0132 | L13, L33, L51 | Dense-flint achromatizing partners |
| 1.84666, 23.78 | FDS90 (Hoya) | +0.0137 | L22 | High-dispersion positive flint in L2 |

The chromatic strategy is straightforward but well distributed. FCD1 appears twice in the fixed front group and once in the moving rear focus group. This matches the patent's text: L1 should contain anomalous low-dispersion positive lenses for color correction across the focusing range (¶0071), and L3 should contain such a positive lens to maintain axial and lateral color correction as focus changes (¶0070).

The data file does not label the lens as apochromatic merely from Abbe numbers. It includes Hoya line indices and $\Delta P_{g,F}$ values because secondary-spectrum correction depends on partial dispersion, not just $n_d$ and $\nu_d$.

## Focus Mechanism

The focus system is a dual floating internal-focus design. L2 is a negative group that moves toward the image, while L3 is a positive group that moves toward the object. L1, the aperture stop, L4, L5, and L6 remain fixed relative to the image plane.

| Variable gap | Infinity | $|\beta|=0.5$ | $|\beta|=1.0$ | Interpretation |
|---|---:|---:|---:|---|
| d8, L1→L2 | 2.4200 | 10.5359 | 20.1009 | L2 moves image-ward |
| d15, L2→stop | 24.6600 | 16.5441 | 6.9791 | L2 moves image-ward |
| d16, stop→L3 | 22.5200 | 12.0489 | 2.5000 | L3 moves object-ward |
| d21, L3→L4 | 2.5500 | 13.0211 | 22.5700 | L3 moves object-ward |

L3's total close-focus travel is 20.02 mm. Dividing by the infinity focal length gives $|\Delta x_3/f| = 0.133$, matching the patent's condition (5) value of 0.13.

The trace also confirms the breathing behavior expected from this kind of internal-focus macro. The patent's effective focal length changes from 150.00 mm at infinity to 106.51 mm at $|\beta| = 0.5$ and 78.23 mm at $|\beta| = 1.0$. This is not a transcription error; it is the normal consequence of using floating internal focus rather than unit extension for a life-size macro lens.

## Aspherical Surfaces

The design is entirely spherical. Numerical Example 2 gives spherical radii, thicknesses, refractive indices, and Abbe numbers only. The patent provides no aspherical coefficient table and flags no aspherical surface. Surface 5 is plane; all other optical surfaces are spherical.

The absence of aspheres matters. Sigma obtained the correction with a high element count, multiple cemented achromats, and heavy use of high-index glasses rather than by placing one or more molded aspheres in the system. This also avoids adding aspheric decenter sensitivity to the stabilization group.

## Image Stabilization

The stabilization group is L5, surfaces 24–28. It is axially fixed during focus but translated perpendicular to the optical axis. The patent defines the stabilization coefficient as

$$k = (1 - \beta_{os})\,\beta_r,$$

where $\beta_{os}$ is the lateral magnification of the decentered stabilizer group and $\beta_r$ is the lateral magnification of the optical system behind it (¶0045). In this embodiment, the system behind L5 is L6.

Independent conjugate-plane matrix decomposition gives:

| Quantity | Recomputed value |
|---|---:|
| $\beta_5$ for L5 | −10.1469 |
| $\beta_6$ for L6 | −0.1579 |
| $(1-\beta_5)\beta_6$ | −1.760 |
| $|k|$ | 1.760 |

This matches the patent's condition (4) value of 1.76. The high coefficient means a small lateral movement of L5 produces a larger image displacement, reducing the travel required from the OS actuator. Conditions (1)–(4) are primarily about preserving that high coefficient without allowing the decentering group to become too strong or too large.

## Conditional Expressions

All eleven conditional expressions for Example 2 were recomputed from the transcribed prescription. Group focal lengths were computed from isolated paraxial subsystem traces. The stabilizer magnification term was computed by decomposing the finite conjugates of L5 and L6 inside the full infinity-focus system.

| # | Expression | Patent value | Recomputed value | Status |
|---:|---|---:|---:|---|
| (1) | $|f_3/f_4|$ | 0.35 | 0.346 | Matches |
| (2) | $|f_5/f_{456}|$ | 0.51 | 0.509 | Matches |
| (3) | $|f_6/f_{456}|$ | 0.78 | 0.784 | Matches |
| (4) | $|(1-\beta_5)\beta_6|$ | 1.76 | 1.760 | Matches |
| (5) | $|\Delta x_3/f|$ | 0.13 | 0.133 | Matches |
| (6) | $P1\nu$ | 71.36 | 71.36 | Matches |
| (7) | $P3\nu$ | 68.14 | 68.14 | Matches |
| (8) | $f_1/f$ | 0.50 | 0.502 | Matches |
| (9) | $|f_2/f|$ | 0.36 | 0.364 | Matches |
| (10) | $f_3/f$ | 0.31 | 0.310 | Matches |
| (11) | $|f_{456}/f|$ | 0.45 | 0.454 | Matches |

## Verification Summary

A fresh paraxial trace was run from the patent prescription rather than relying on the earlier analysis. The following values were reproduced:

| Quantity | Recomputed value | Patent / production reference |
|---|---:|---:|
| Infinity EFL | 149.992 mm | 150.00 mm |
| Infinity BFL | 54.0199 mm | Recomputed from prescription; patent lists Bf symbolically |
| First surface to image plane | 192.49 mm | Derived |
| Track / EFL | 1.283 | Derived; not a strict telephoto-form ratio |
| Diagonal field | 16.41° | Sigma 16.4° |
| Design entrance-pupil radius | 25.685 mm | $149.992/(2\times2.92)$ |
| Design stop semi-diameter | 16.70 mm | From paraxial stop imaging |
| Object-to-image distance at 1:1 | 378.67 mm | Sigma 38 cm MFD |
| Petzval sum | $+8.3778\times10^{-4}\ \text{mm}^{-1}$ | Derived |
| Petzval radius | −1193.6 mm | Derived |

The data file uses the patent's spherical prescription without scaling. Because the patent does not publish semi-diameters, the data file's semi-diameters are inferred renderer apertures. They were generated from the F2.92 marginal ray and then locally reduced where the project validation constraints required positive edge thickness, surface-radius limits, and cross-gap sag clearance. They should not be read as manufacturer-published mechanical clear apertures.

## Design Heritage and Context

This lens follows Sigma's earlier non-stabilized 150 mm F2.8 macro but adds optical stabilization while retaining 1:1 macro capability. The patent's problem statement is specifically about the difficulty of stabilizing a macro lens near life size: for the same hand-shake angle, image blur is larger near $|\beta| = 1.0$ than at infinity, so the stabilizer must deliver a larger image displacement per unit group travel.

The solution is not merely to decenter a strong rear group. Sigma inserts L4, a fixed weak negative group, immediately ahead of the stabilizer group. That added group lets L5 maintain a high stabilization coefficient without driving ray heights and decentering aberrations out of control. The optical interest of the design is therefore concentrated in the rear half of the lens: L4 conditions the beam, L5 decenters, and L6 relays the corrected image to a long enough back focus for SLR mounts.

## Sources and References

- JP 2012-63403 A, Sigma Corporation, "防振機能を有するインナーフォーカス式マクロレンズ," Numerical Example 2, ¶0085–¶0089. Prescription, variable spacing, group focal lengths, and conditional-expression values.
- JP 2012-63403 A, ¶0012–¶0019 and ¶0034–¶0072. Six-group layout, focus motion, stabilizer motion, L4/L5 rationale, chromatic glass recommendations, and fixed rear group behavior.
- Sigma Corporation, "APO MACRO 150mm F2.8 EX DG OS HSM," official product page. Used for production hard specifications: full-frame DG coverage, 19 elements / 13 groups, 16.4° angle of view, 9 rounded blades, F22 minimum aperture, 38 cm MFD, 1:1 maximum magnification, 72 mm filter size, dimensions, weight, and listed mounts.
- HOYA Group Optics Division, HOYA optical-glass data download, HOYA20260401.xlsx. Used for catalog glass matching, C/F/g-line indices, and $\Delta P_{g,F}$ values.
- HOYA Group Optics Division, technical information on glass type naming and six-digit glass codes. Used to verify Hoya family names and refractive-index/Abbe-number code interpretation.
