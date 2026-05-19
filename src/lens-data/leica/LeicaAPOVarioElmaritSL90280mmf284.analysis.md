# Optical Analysis: Leica APO-Vario-Elmarit-SL 90–280 mm f/2.8–4

## Patent Reference and Production Identification

**Patent:** JP 2016-139125 A (Japan), "ズームレンズ系、交換レンズ装置及びカメラシステム" (Zoom lens system, interchangeable lens device and camera system).
**Applicant:** Panasonic IP Management Co., Ltd.
**Inventor:** Imaoka Takuya (今岡 卓也).
**Filed:** 2015-12-22 (priority: 2015-01-21, JP 2015-9845).
**Published:** 2016-08-04.
**Embodiment analyzed:** Numerical Example 1 (数値実施例1), corresponding to Embodiment 1 (実施の形態1).

The prescription is identified with the production Leica APO-Vario-Elmarit-SL 90–280 mm f/2.8–4 (order number 11 175) by the following convergent evidence:

1. **Element and group count.** The patent prescription contains 23 lens elements. When counted by air-separated sub-groups (including cemented sub-groups within the seven zoom groups), the total is 17 groups — matching the Leica specification of "23/17" (elements/groups).
2. **Focal length range.** The patent's wide-end EFL is 92.29 mm and the tele-end EFL is 272.90 mm. These correspond to the marketed 90–280 mm range after the usual rounding to marketing focal lengths.
3. **Aperture range.** The patent gives F/2.91 at wide, F/3.28 at mid, and F/4.11 at tele — matching the marketed f/2.8–4 variable aperture specification.
4. **Image circle.** The patent's maximum image height is 21.63 mm, yielding a diagonal of 43.26 mm — consistent with full-frame 135 format (43.3 mm diagonal).
5. **Dual internal focusing.** The patent describes two focus groups (G5 negative, G6 positive) moving in opposite directions during focusing, matching Leica's description of "double internal focusing, in which two lens elements move towards each other."
6. **Optical image stabilisation (OIS).** The patent designates sub-group G4C (L14 + L15 + L16) as the image-stabilisation group, moved perpendicular to the optical axis.
7. **Constant overall length.** The total optical track is 256.0 mm at all zoom positions, confirming the internal zoom architecture described in the Leica technical data sheet.
8. **Seven APD elements.** The patent prescription contains exactly 7 glasses with anomalous partial dispersion (3× S-FPL55, 1× S-FPL51, 2× 593/670-class phosphate crown, 1× S-FSL5), matching the Leica specification of "seven elements made from glasses with anomalous partial dispersion."
9. **No aspherical surfaces.** Example 1 is entirely spherical, consistent with the production lens name lacking the "ASPH" designation.
10. **Patent timing.** The priority date (January 2015) and the designer attribution "Stuible, 12.08.2015" visible in the Leica technical data sheet's MTF headers (project codename "LONGISLAND") place the design development squarely in the same period.

All ten criteria converge on a confident identification.


## Optical Architecture

The design is a seven-group internally-compensating zoom of the form positive–negative–positive–positive–negative–positive–negative (G1 through G7). The overall power distribution follows a modified telephoto zoom pattern where a large front collector (G1) and a negative variator (G2) handle the primary magnification change, a compensator (G3) corrects residual zoom aberrations, a large fixed central group (G4) contains the aperture stop, a correction sub-group, the OIS group, and a variable aperture stop, and two small rear focus groups (G5, G6) provide dual-element inner focusing, followed by a fixed negative field-flattening group (G7).

The design comprises 23 elements in 7 zoom groups, which decompose into 17 air-separated sub-groups:

| Zoom Group | Power | Elements | Air-Separated Sub-Groups | Zoom Behaviour |
|---|---|---|---|---|
| G1 | + (f = 172.5 mm) | L1, L2, L3 | 3 | Fixed |
| G2 | – (f = –59.9 mm) | L4, L5–L6, L7, L8–L9 | 4 | Moves image-side monotonically |
| G3 | + (f = 62.0 mm) | L10 | 1 | Moves object-side monotonically |
| G4 | + (f = 148.6 mm) | L11 … L18 | 5 (G4A–G4D + stops) | Fixed during zoom |
| G5 | – (f = –65.9 mm) | L19–L20 | 1 | Image-side convex trajectory (zoom); image-side (focus) |
| G6 | + (f = 61.8 mm) | L21 | 1 | Monotonically image-side (zoom); object-side (focus) |
| G7 | – (f = –90.2 mm) | L22, L23 | 2 | Fixed |

During zooming from wide to tele: G2 moves monotonically toward the image, G3 moves monotonically toward the object, G5 traces a convex (image-side convex) trajectory, and G6 moves monotonically toward the image. G1, G4, and G7 are fixed relative to the image plane. This arrangement maintains constant overall length (256.0 mm total track) — a defining feature of the production lens, which does not change external dimensions during zooming or focusing.

The aperture stop is located between sub-groups G4A and G4B within the central group G4, at approximately the 21st surface. A variable-diameter light stop (VA) is positioned between sub-groups G4C and G4D; this stop changes diameter during zooming to control off-axis flare at intermediate image heights across the zoom range (¶0098).

### Aspherical Surfaces

**Example 1 has no aspherical surfaces.** All 42 optical surfaces are spherical. This is consistent with the production lens name, which does not carry the "ASPH" designation used by Leica for aspherical designs. The patent includes other embodiments (Examples 4, 5, and 6) that employ aspherical surfaces, but these correspond to different lens designs (a 25–233 mm f/3.6–6.5 high-ratio zoom and a pair of 25–73 mm compact zooms, respectively — not the 90–280 mm).

The all-spherical construction across 23 elements is notable for a modern high-performance zoom. Chromatic and monochromatic aberration correction is achieved entirely through glass selection (7 APD elements), careful power distribution across the 7 groups, and the use of cemented doublets (six in total) to control individual aberration contributions. This makes the optical design manufacturing-intensive in terms of glass cost (super-ED fluorophosphates and the ultra-high-index S-LAH99 are among the most expensive optical materials) but avoids the tight tolerances and cost associated with aspherical surface fabrication at these aperture diameters.


## Element-by-Element Analysis

### G1 — Front Collector Group (Fixed, Positive, f = 172.5 mm)

G1 is the outermost group and remains fixed during both zooming and focusing. Its role is to gather the incoming light cone and provide a convergent beam to the variator. In this telephoto zoom, G1's relatively long focal length (172.5 mm) limits the power burden on the negative variator G2, which must handle a 2.96× zoom ratio.

#### L1 — Negative Meniscus, Convex to Object

$n_d$ = 1.90366, $\nu_d$ = 31.3. Glass: S-LAH95 (OHARA) — lanthanum dense flint. $f$ = –197.6 mm.

L1 is a strongly curved negative meniscus (R1 = +178.67, R2 = +88.73) with a very high refractive index. Positioned at the front of the objective, it acts as a field-correcting element: its negative power at high ray height counteracts the spherical aberration and coma that the subsequent positive elements (L2, L3) would otherwise introduce. The high-index lanthanum glass minimises the surface curvatures needed for the required power, reducing higher-order aberrations. S-LAH95 ($n_d$ = 1.90366) is the catalog match for this patent row.

#### L2 — Biconvex Positive (Super-ED)

$n_d$ = 1.43700, $\nu_d$ = 95.1. Glass: S-FPL55 (OHARA) — fluorophosphate super-ED crown. $f$ = +177.3 mm.

L2 is the first of three S-FPL55 elements in the design. With an Abbe number of 95.1, it contributes minimal chromatic dispersion while carrying substantial positive power. The L1–L2 pair (separated by a 1.02 mm air gap with matched junction radii of 88.73 mm) functions as a quasi-achromat: the negative flint L1 corrects the primary (C–F) chromatic aberration introduced by L2's positive power, while the anomalous partial dispersion of S-FPL55 addresses secondary spectrum. The air spacing between L1 and L2, rather than cementing, provides an additional degree of freedom for spherical aberration correction.

#### L3 — Biconvex Positive (Super-ED)

$n_d$ = 1.43700, $\nu_d$ = 95.1. Glass: S-FPL55 (OHARA) — fluorophosphate super-ED crown. $f$ = +192.2 mm.

L3 is a second S-FPL55 positive element separated from L2 by only 0.20 mm. Together, L2 and L3 carry the bulk of G1's positive power. Splitting this power across two air-spaced elements (rather than using a single thick positive) reduces the zone of spherical aberration — each element operates at a lower convergence angle, producing less high-order SA than a single thick element of equivalent power. Both elements share the same ultra-low-dispersion glass, reinforcing the apochromatic correction that defines the lens's "APO" designation.

---

### G2 — Variator Group (Negative, f = –59.9 mm)

G2 moves monotonically toward the image during zooming from wide to tele. As the primary variator, its axial displacement is the largest of any group (approximately 52 mm of travel) and is responsible for the dominant share of the 2.96× magnification change. The group contains 6 elements in 4 air-separated sub-groups, with two cemented doublets.

#### L4 — Biconvex Positive

$n_d$ = 1.84666, $\nu_d$ = 23.8. Glass: S-TIH53 (OHARA) — titanium heavy flint. $f$ = +177.7 mm.

L4 is a weakly powered biconvex element (R1 = +293.1, R2 = –307.2) using a very high-dispersion titanium flint. In a negative group, a positive element of high dispersion acts as the flint component of an internal achromat: it generates chromatic aberration opposite in sign to that produced by the neighbouring negative elements, achieving colour correction within the variator. The near-symmetry of L4's radii minimises its coma contribution.

#### L5 + L6 — Cemented Doublet (Negative Meniscus + Positive Meniscus)

L5: $n_d$ = 1.59349, $\nu_d$ = 67.0. Glass: phosphate crown, 593/670 code (APD). $f_{\text{L5 standalone}}$ — weak negative.
L6: $n_d$ = 1.69895, $\nu_d$ = 30.0. Glass: S-TIM35 (OHARA) — titanium flint. Doublet $f$ = –304.2 mm.

The L5–L6 doublet is a weakly negative cemented pair. L5's phosphate crown glass (nd = 1.59349, νd = 67.0) is not matched to any standard OHARA catalog entry; the closest catalog equivalents are CDGM H-ZPK2A (exact match) and HOYA FCD515 (Δnd = 0.0007). This glass sits in the ED region of the glass map and exhibits positive anomalous partial dispersion (estimated ΔPgF ≈ +0.015), contributing to secondary-spectrum correction within the variator. The cemented interface with the high-dispersion S-TIM35 creates a colour-corrected sub-unit that maintains chromatic balance as G2 traverses its full zoom stroke.

#### L7 — Negative Meniscus, Convex to Object (APD)

$n_d$ = 1.59349, $\nu_d$ = 67.0. Glass: 593/670 phosphate crown (same as L5, APD). $f$ = –186.6 mm.

L7 uses the same APD phosphate crown as L5. Its nearly flat front surface (R1 = +2761) and moderately curved rear (R2 = +106.4) produce a weak negative meniscus that contributes modest negative power to the variator while maintaining chromatic neutrality. Positioned after the L5–L6 doublet and before the L8–L9 doublet, L7 acts as a spacing element that controls the Petzval contribution of G2 — its negative power partially offsets the positive Petzval contributions of G1 and G3.

#### L8 + L9 — Cemented Doublet (Biconcave + Positive Meniscus)

L8: $n_d$ = 1.72916, $\nu_d$ = 54.7. Glass: S-LAL18 (OHARA) — lanthanum crown. $f_{\text{L8}}$ — strong negative.
L9: $n_d$ = 1.78472, $\nu_d$ = 25.7. Glass: S-TIH23 (OHARA) — titanium heavy flint. Doublet $f$ = –68.0 mm.

The L8–L9 doublet is the strongest negative sub-unit in G2 and carries the bulk of the variator's negative power. L8's biconcave shape (R1 = –70.1, R2 = +76.0) provides strong diverging power, while L9's high-dispersion titanium flint corrects the resulting chromatic aberration. The lanthanum crown L8 paired with the titanium flint L9 creates a classic crown–flint achromat with complementary partial dispersion characteristics. This doublet is the primary element that varies the system magnification during zoom.

---

### G3 — Compensator Group (Positive, f = 62.0 mm)

G3 moves monotonically toward the object during zoom from wide to tele, compensating for the focal-plane shift introduced by G2's motion.

#### L10 — Biconvex Positive

$n_d$ = 1.83481, $\nu_d$ = 42.7. Glass: S-LAH55V (OHARA) — lanthanum dense flint. $f$ = +62.0 mm.

L10 is a single biconvex element carrying all of G3's positive power. Its high refractive index (1.835) permits the required +62 mm focal length with moderate surface curvatures (R1 = +70.9, R2 = –183.9), limiting higher-order aberrations despite the element's relatively thick profile (6.46 mm). The use of a single element for the compensator group minimises the mass of the moving unit, consistent with the patent's stated goal of compact zoom mechanisms (¶0096). S-LAH55V is an OHARA catalog variant of S-LAH55 with identical optical constants ($n_d$, $\nu_d$); the "V" suffix denotes a process or compositional variant rather than an optical change. (Only the OHARA "L-" prefix reliably indicates low-Tg PGM glass.)

---

### G4 — Central Fixed Group (Positive, f = 148.6 mm)

G4 is the most complex group in the design, containing 8 elements organised into four sub-groups (G4A through G4D), the main aperture stop, and a variable light stop (VA). The entire assembly is fixed during zoom. This group performs several simultaneous functions: it relays the image formed by the front groups, houses the aperture and OIS mechanisms, and provides the final monochromatic and chromatic correction before the image reaches the focus groups.

#### G4A — L11: Positive Meniscus, Convex to Object (Super-ED)

$n_d$ = 1.43700, $\nu_d$ = 95.1. Glass: S-FPL55 (OHARA) — fluorophosphate super-ED crown. $f$ = +170.8 mm.

L11 is the third S-FPL55 element. Positioned immediately ahead of the aperture stop, it controls lateral (transverse) chromatic aberration — a critical correction for a zoom lens, since lateral colour varies with zoom position. Using a super-ED glass at the stop ensures that the chief ray passes through a medium of near-zero dispersion, minimising lateral colour contributions regardless of field angle. L11's meniscus form (R1 = +44.71, R2 = +108.24) also contributes positive power to the relay while controlling the pupil location.

**Aperture Stop** — located in the 5.50 mm air gap between L11 and L12, at surface 21.

#### G4B — L12 + L13: Cemented Doublet (Biconvex + Biconcave)

L12: $n_d$ = 1.49700, $\nu_d$ = 81.6. Glass: S-FPL51 (OHARA) — fluorophosphate ED crown (APD, ΔPgF = +0.028). $f_{\text{L12}}$ — positive.
L13: $n_d$ = 2.00100, $\nu_d$ = 29.1. Glass: S-LAH99 (OHARA) — lanthanum dense flint (equivalent: HOYA TAFD55). Doublet $f$ = –32.9 mm.

The L12–L13 doublet pairs a low-index ED crown (S-FPL51, $\nu_d$ = 81.6) with one of the highest-index optical glasses in production (S-LAH99, $n_d$ = 2.001). The Abbe-number difference of 52.5 provides very strong primary chromatic correction, and L12's positive anomalous partial dispersion (ΔPgF = +0.028) shifts the secondary-spectrum correction beyond what a normal crown would achieve. S-LAH99 has near-normal partial dispersion (ΔPgF ≈ +0.004), so the secondary-spectrum correction in this doublet is driven primarily by L12's anomalous dispersion, not by opposing ΔPgF signs. The extraordinary refractive index of S-LAH99 ($n_d$ = 2.001) — the highest in the entire design — permits the cemented junction (R = –68.32) to have a large refractive-index step (Δn = 0.504), generating strong corrective power at the interface with minimal surface curvature.

The doublet's overall negative power (f = –32.9 mm) contributes to the Petzval correction of the system, offsetting the positive Petzval contributions of G4A and G4C.

#### G4C — OIS Sub-Group (L14 + L15 cemented, L16 separate)

L14: $n_d$ = 1.80610, $\nu_d$ = 33.3. Glass: NBFD15 (HOYA) — dense flint.
L15: $n_d$ = 1.48749, $\nu_d$ = 70.4. Glass: S-FSL5 (OHARA) — fluor-silicate crown (APD).
L14–L15 doublet $f$ = +102.3 mm.

L16: $n_d$ = 1.71300, $\nu_d$ = 53.9. Glass: S-LAL8 (OHARA) — lanthanum crown. $f$ = +84.2 mm.

G4C is the image-stabilisation group. It is moved perpendicular to the optical axis to compensate for camera shake (¶0026), providing up to 3.5 stops of stabilisation at the tele end according to the Leica specification. The sub-group comprises two optical sub-units: a cemented doublet (L14 + L15) followed by an air-spaced positive singlet (L16).

The L14–L15 doublet uses S-FSL5, a fluor-silicate crown with mild positive anomalous partial dispersion (ΔPgF = +0.002). This choice is critical: during OIS decentering, the IS group introduces asymmetric aberrations (decentering coma, decentering astigmatism). Using an APD glass in the IS group minimises the chromatic component of these decentering aberrations, maintaining colour purity even in the stabilised state. The patent's lateral aberration diagrams (Fig. 4) confirm that the decentered state (Dec = 0.900 mm at tele) maintains good symmetry between ±70% field heights.

L16 is a simple biconvex positive element that completes the IS sub-group's combined positive power. The patent notes that the IS group design — a cemented doublet of negative + positive followed by a positive singlet — allows "reduction of aberration generation during image stabilisation correction" (¶0099).

**Variable Aperture Stop (VA)** — located between G4C and G4D at surface 30. This stop changes diameter during zoom to control off-axis ray bundles at intermediate image heights (¶0098).

#### G4D — L17 + L18: Cemented Doublet (Biconcave + Biconvex)

L17: $n_d$ = 1.51823, $\nu_d$ = 59.0. Glass: S-NSL36 (OHARA) — new light silicate crown.
L18: $n_d$ = 1.62041, $\nu_d$ = 60.3. Glass: S-BSM28 (OHARA) — barium silicate crown. Doublet $f$ = +175.0 mm.

The G4D doublet has an unusual construction: both glass types have similar Abbe numbers (59.0 and 60.3), meaning the cemented junction contributes almost no chromatic correction. Instead, this doublet functions primarily as a monochromatic corrector — its biconcave + biconvex form creates a coma-correcting meniscus-like compound element. The junction Δn (0.102) is modest but sufficient to control sagittal coma and field curvature at the exit of the G4 complex. The positive overall power (+175 mm) contributes convergence for the relay.

---

### G5 — First Focus Group (Negative, f = –65.9 mm)

G5 moves during both zooming and focusing. During zoom from wide to tele, it traces an image-side convex trajectory. During focusing from infinity to close range, G5 moves toward the image.

#### L19 + L20 — Cemented Doublet (Positive Meniscus, Convex to Image + Biconcave)

L19: $n_d$ = 1.80518, $\nu_d$ = 25.5. Glass: S-TIH6 (OHARA) — titanium heavy flint.
L20: $n_d$ = 1.58144, $\nu_d$ = 40.9. Glass: E-FL5 (HOYA) — medium flint. Doublet $f$ = –65.9 mm.

G5 is a single cemented doublet carrying significant negative power. Both elements use flint-family glasses (νd < 50), which is unusual for a doublet — typically one would expect a crown–flint pair. The design choice reflects the constraint that G5 is a *focus* group and must maintain chromatic correction across the entire object-distance range. The high-dispersion L19 and moderate-dispersion L20 have sufficiently different partial dispersion characteristics to provide adequate chromatic balance during focus shifts.

The patent's conditional expression (3) stipulates νp2 < 30 for the most strongly positive element in the second focus group (G6), and the corresponding condition (4) requires νp1 < 30 for the most strongly positive element in the first focus group (¶0110–¶0114). For G5, the positive element L19 has νd = 25.5 < 30, satisfying condition (4) and confirming that high-dispersion glass in the focus groups is a deliberate design strategy for zoom-dependent colour correction.

---

### G6 — Second Focus Group (Positive, f = 61.8 mm)

G6 is a single positive element that moves during both zoom and focus. During focusing from infinity to close range, G6 moves toward the object — opposite to G5's direction. This opposing motion is the key feature of the "dual internal focusing" concept (Leica's "Dual Syncro Drive").

#### L21 — Biconvex Positive

$n_d$ = 1.84666, $\nu_d$ = 23.8. Glass: S-TIH53 (OHARA) — titanium heavy flint. $f$ = +61.8 mm.

L21 uses the same S-TIH53 glass as L4 in the variator. With νd = 23.8, it satisfies condition (3) (νp2 < 30). As a single positive element constituting the entire second focus group, L21's low mass enables the fast AF performance described in the Leica specification — the Dual Syncro Drive stepping motors need only accelerate a single lightweight element. The biconvex form (R1 = +143.6, R2 = –81.0) carries strong positive power in a compact package.

The opposing focus motions of G5 and G6 serve two purposes (¶0085–¶0087): first, the image-plane shifts from both groups add constructively, so each group needs less travel than a single-group inner-focus design would require; second, the field-curvature contributions of the negative G5 and positive G6 partially cancel, maintaining flat field performance across the entire focusing range and at all zoom positions.

---

### G7 — Rear Field-Flattening Group (Negative, f = –90.2 mm)

G7 is fixed during both zoom and focus. It provides the final correction of the image before the sensor plane.

#### L22 — Biconcave Negative

$n_d$ = 1.72342, $\nu_d$ = 38.0. Glass: S-BAH28 (OHARA) — barium heavy flint. $f$ = –38.4 mm.

L22 is a strongly negative biconcave element. Its primary role is Petzval correction — the negative power reduces the system's Petzval sum, flattening the image field at the sensor plane. The barium heavy flint glass (S-BAH28) provides moderate dispersion and a relatively high refractive index, permitting strong negative power with tolerable surface curvatures.

#### L23 — Plano-Convex Positive

$n_d$ = 1.62041, $\nu_d$ = 60.3. Glass: S-BSM28 (OHARA) — barium silicate crown. $f$ = +73.0 mm.

L23 is a thick plano-convex element (R1 = +45.27, R2 = flat) that serves as a positive field lens. Positioned immediately ahead of the image plane with a back focal distance of 31.02 mm, it controls telecentricity — bending the off-axis ray bundles toward perpendicularity with the sensor, which is essential for uniform illumination across the field of a mirrorless camera sensor. The flat rear surface simplifies manufacturing and provides a clean reference surface for the rear seal.

The L22–L23 pair (negative biconcave + positive plano-convex) functions as a quasi-inverted telephoto rear unit, simultaneously correcting field curvature and astigmatism while establishing the correct exit-pupil position for the L-mount sensor.


## Glass Identification and Selection

The design employs 15 distinct glass types across 23 elements. All glasses are identified from the OHARA catalog except one (593/670 code, used in L5 and L7), which is discussed separately below.

| Element(s) | Glass | nd | νd | Family | APD |
|---|---|---|---|---|---|
| L1 | S-LAH95 (OHARA) | 1.90366 | 31.3 | Lanthanum dense flint | — |
| L2, L3, L11 | S-FPL55 (OHARA) | 1.43700 | 95.1 | Fluorophosphate super-ED | ΔPgF = +0.046 |
| L4, L21 | S-TIH53 (OHARA) | 1.84666 | 23.8 | Titanium heavy flint | — |
| L5, L7 | 593/670 code | 1.59349 | 67.0 | Phosphate crown (ED class) | ΔPgF ≈ +0.015 (est) |
| L6 | S-TIM35 (OHARA) | 1.69895 | 30.0 | Titanium flint | — |
| L8 | S-LAL18 (OHARA) | 1.72916 | 54.7 | Lanthanum crown | — |
| L9 | S-TIH23 (OHARA) | 1.78472 | 25.7 | Titanium heavy flint | — |
| L10 | S-LAH55V (OHARA) | 1.83481 | 42.7 | Lanthanum dense flint | — |
| L12 | S-FPL51 (OHARA) | 1.49700 | 81.6 | Fluorophosphate ED crown | ΔPgF = +0.028 |
| L13 | S-LAH99 (OHARA) | 2.00100 | 29.1 | Lanthanum dense flint | ΔPgF ≈ +0.004 |
| L14 | NBFD15 (HOYA) | 1.80610 | 33.3 | Dense flint | — |
| L15 | S-FSL5 (OHARA) | 1.48749 | 70.4 | Fluor-silicate crown | ΔPgF = +0.002 |
| L16 | S-LAL8 (OHARA) | 1.71300 | 53.9 | Lanthanum crown | — |
| L17 | S-NSL36 (OHARA) | 1.51823 | 59.0 | New light silicate crown | — |
| L18, L23 | S-BSM28 (OHARA) | 1.62041 | 60.3 | Barium silicate crown | — |
| L19 | S-TIH6 (OHARA) | 1.80518 | 25.5 | Titanium heavy flint | — |
| L20 | E-FL5 (HOYA) | 1.58144 | 40.9 | Medium flint | — |
| L22 | S-BAH28 (OHARA) | 1.72342 | 38.0 | Barium heavy flint | — |

### S-LAH99 (L13) — Ultra-High-Index Lanthanum Dense Flint

The L13 glass at nd = 2.00100, νd = 29.1 matches OHARA S-LAH99 (glass code 001/291), confirmed via the OHARA May 2023 pocket catalog cross-reference. The equivalent designations are HOYA TAFD55 and HIKARI J-LASFH16. S-LAH99 is a lanthanum dense flint with near-normal partial dispersion (ΔPgF ≈ +0.004). It is not counted among the design's seven APD elements. Its role is purely as a high-index flint partner for the S-FPL51 crown in the G4B achromatic doublet, where the extreme refractive-index step (Δn = 0.504) across the cemented junction generates strong corrective power.

### The 593/670 Glass (L5, L7)

The glass at nd = 1.59349, νd = 67.0 does not match any entry in the current OHARA public catalog (May 2023 edition). The nearest OHARA match is S-PHM53 (nd = 1.60300, νd = 65.44), which differs by Δnd = 0.0095 — well outside transcription tolerance. An exact match exists in the CDGM catalog as H-ZPK2A (nd = 1.59349, νd = 67.00), and HOYA FCD515 (nd = 1.59282, νd = 68.62) is close but not exact. Given that Panasonic patents typically employ OHARA glass, this entry may represent a proprietary specification, a glass that has since been discontinued from the OHARA public catalog, or a specification equivalent supplied from an alternative vendor. The glass is classified here by its six-digit code (593/670) and its position on the glass map identifies it as a phosphate crown in the ED region, with moderate positive anomalous partial dispersion.

### Chromatic Correction Strategy

The "APO" designation requires correction of both primary chromatic aberration (C–F line) and secondary spectrum (the residual longitudinal colour after achromatisation). The design achieves this through three mechanisms distributed across the zoom range:

1. **Front group secondary-spectrum correction (G1).** The L1 (S-LAH95 flint, νd = 31.3) + L2/L3 (S-FPL55 super-ED, νd = 95.1) combination corrects secondary spectrum in the front collector. The ΔPgF of S-FPL55 (+0.046) is far from the normal line, enabling secondary-spectrum correction that a conventional crown–flint pair cannot achieve.

2. **Stop-region chromatic correction (G4B).** The L12 (S-FPL51) + L13 (S-LAH99) cemented doublet exploits the extreme Abbe-number contrast between a low-dispersion ED crown (νd = 81.6) and an ultra-high-index dense flint (νd = 29.1, nd = 2.001) to achieve strong primary achromatisation. The secondary-spectrum correction is carried by L12's positive anomalous partial dispersion (ΔPgF = +0.028); S-LAH99 has near-normal partial dispersion (ΔPgF ≈ +0.004), so the correction mechanism is single-sided APD rather than an opposing-sign pair. The junction's large Δn (0.504) generates strong corrective power with a single cemented interface.

3. **Variator-distributed ED elements (G2).** L5 and L7 (593/670 phosphate crown) maintain chromatic balance within the variator across the full zoom stroke. Because G2 moves during zoom, its chromatic contribution changes with focal length; using APD glass in G2 prevents zoom-dependent secondary spectrum from degrading the apochromatic correction established by G1 and G4.


## Focus Mechanism

The lens employs dual inner focusing with two independently moving groups: G5 (negative, L19–L20 cemented doublet) and G6 (positive, L21 singlet). During focusing from infinity to close range, G5 moves toward the image and G6 moves toward the object — the two groups approach each other. This opposing motion is described by Leica as "Dual Syncro Drive" (DSD).

Three air gaps change during focus: d33 (G4 rear to G5 front), d36 (G5 rear to G6 front), and d38 (G6 rear to G7 front). The sum d33 + d36 + d38 is conserved at 40.247 mm at all zoom positions and all focus distances, confirmed computationally to within 0.1 μm.

### Focus Travel Summary

| Zoom Position | f (mm) | G5 Travel (→image) | G6 Travel (→object) | Object Distance |
|---|---|---|---|---|
| Wide | 92.3 | +1.80 mm | +1.18 mm | 1200 mm |
| Mid | 158.7 | +5.77 mm | +2.75 mm | 1200 mm |
| Tele | 272.9 | +17.07 mm | +5.62 mm | 1200 mm |

The focus travel increases dramatically at the tele end (17 mm for G5 vs 1.8 mm at wide), reflecting the increased sensitivity of a longer focal length to object distance. This is consistent with the production lens's position-dependent minimum focus distance: 0.6 m at 90 mm and 1.4 m at 280 mm. The patent's close-focus distance of 1200 mm at all zoom positions corresponds to a conservative intermediate specification.

The patent's conditional expression (5) (¶0116) — mf2w/mf1w > mf2t/mf1t — governs the ratio of the two focus groups' travel as a function of zoom position. At wide, the ratio of G6 to G5 travel is 1.18/1.80 = 0.66; at tele, it is 5.62/17.07 = 0.33. The decreasing ratio ensures that spherical aberration variation during focus is balanced across the zoom range.

### Why Dual Focusing Groups?

The patent identifies three advantages of the dual-focus architecture (¶0085–¶0090):

1. **Reduced travel.** With two groups sharing the focusing burden, each moves less than a single-group design would require, reducing the total volume of the zoom mechanism.
2. **Field curvature cancellation.** The negative G5 and positive G6 generate field-curvature shifts of opposite sign during focus, enabling flat-field performance from infinity to MFD at all zoom positions.
3. **Compact actuators.** The cemented doublet (G5) and single element (G6) are both lightweight enough for the fast stepping-motor AF drive that Leica describes.


## Image Stabilisation

The OIS group is sub-group G4C, comprising the cemented doublet L14 + L15 and the singlet L16, with a combined positive focal length of approximately +60 mm. During image stabilisation, G4C is displaced perpendicular to the optical axis by a linear motor. The maximum decentering at the tele end is 0.900 mm (¶0132), corresponding to a stabilisation correction angle that provides 3.5 stops of shake reduction per CIPA standards (from the Leica data sheet).

The choice of a three-element IS group (cemented doublet + singlet) rather than a simpler one- or two-element group reflects the need to maintain aberration correction during decentering. The patent's lateral-aberration plots (Fig. 4) compare the basic (unshifted) state with the Dec = 0.900 mm state at the tele end, showing that decentering coma and decentering astigmatism remain small — the aberration curves at ±70% field height maintain good symmetry and low curvature even in the shifted state.


## Petzval Sum and Field Curvature

The surface-by-surface Petzval sum of the entire system is +0.001119 mm⁻¹, corresponding to a Petzval radius of approximately 894 mm. This is a well-controlled value for a 2.96× telephoto zoom; the backward-curving field is typical of positive-power systems and is corrected by the negative rear group G7 and the counterbalancing field contributions of the cemented doublets in G4.

The dominant positive Petzval contributions come from the three S-FPL55 elements (L2, L3, L11), whose low refractive index (1.437) magnifies their Petzval contribution for a given power level — the Petzval sum of a surface is $\phi / (n \cdot n')$, so low-index glasses contribute more per unit of power. This is a fundamental trade-off of super-ED glass designs: excellent chromatic correction comes at the cost of increased Petzval curvature, which must be compensated by negative-power elements elsewhere in the system. The L12–L13 doublet (f = –32.9 mm), L22 (f = –38.4 mm), and the overall negative power of G2 (f = –59.9 mm) provide the necessary counterbalance.


## Verification Summary

| Parameter | Patent Value | Computed Value | Δ |
|---|---|---|---|
| EFL wide | 92.2864 mm | 92.2857 mm | 0.0007 mm |
| EFL mid | 158.6671 mm | 158.6656 mm | 0.0015 mm |
| EFL tele | 272.9028 mm | 272.9017 mm | 0.0011 mm |
| G1 focal length | 172.453 mm | 172.454 mm | 0.001 mm |
| G2 focal length | –59.932 mm | –59.932 mm | < 0.001 mm |
| G3 focal length | 62.007 mm | 62.007 mm | < 0.001 mm |
| G4 focal length | 148.565 mm | 148.562 mm | 0.003 mm |
| G5 focal length | –65.941 mm | –65.941 mm | < 0.001 mm |
| G6 focal length | 61.755 mm | 61.756 mm | 0.001 mm |
| G7 focal length | –90.175 mm | –90.174 mm | 0.001 mm |
| Total track | 256.0 mm (all positions) | 256.0 mm | < 0.001 mm |
| Focus gap conservation | 40.247 mm | 40.247 mm | < 0.001 mm |
| Zoom ratio | 2.95713 | 2.95712 | 0.00001 |

All paraxial values verified via independent ABCD matrix trace against the patent's stated values.


## Sources

1. JP 2016-139125 A, "ズームレンズ系、交換レンズ装置及びカメラシステム," Panasonic IP Management, published 2016-08-04. Inventor: Imaoka Takuya.
2. Leica Camera AG, "APO-Vario-Elmarit-SL 90–280 mm f/2.8–4 Technical Data Sheet" (Datenblatt), order no. 11 175, July 2016. Project codename LONGISLAND, designer Stuible. URL: https://leica-camera.com/sites/default/files/pm-55506-Datenblatt_APO-Vario-Elmarit-SL_90-280_en.pdf
3. OHARA Inc., "Optical Glass Pocket Catalog" (May 2023 edition). Used for glass identification of all OHARA-attributed entries.
4. Leica Camera AG, product page for APO-Vario-Elmarit-SL 90–280 f/2.8–4. Specifications: 23/17 elements/groups, 7 APD elements, 0.6–1.4 m MFD, OIS 3.5 stops, 238 mm length, 1710 g. URL: https://leica-camera.com/en-US/photography/lenses/sl/apo-vario-elmarit-sl-90-280mm-f2-8-4-black
