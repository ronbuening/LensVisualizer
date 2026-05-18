# Optical Analysis: smc PENTAX-DA★ 50-135mm F2.8 ED [IF] SDM

## US Patent 7,289,274 B1 — Embodiment 5

---

## 1. Patent Reference and Design Identification

**Patent:** US 7,289,274 B1, "Telescopic Zoom Lens System"
**Inventor:** Masakazu Saori (Saitama, Japan)
**Assignee:** PENTAX Corporation, Tokyo, Japan
**Filed:** February 7, 2007 (US); Priority date February 10, 2006 (JP 2006-033506)
**Granted:** October 30, 2007

**Embodiment analyzed:** Numerical Example 5 (Table 5, Figs. 17–20E)

### Identification Evidence

The following convergent evidence links Embodiment 5 of this patent to the production smc PENTAX-DA★ 50-135mm F2.8 ED [IF] SDM:

1. **Element and group count.** The prescription contains 18 elements in 14 air-separated groups, matching the manufacturer specification exactly (Ricoh Imaging product page; B&H Photo listing).
2. **Focal length range.** The patent states $f = 51.50$–$131.00$ mm (zoom ratio 2.54). The marketed range is 50–135 mm. This is typical of Japanese patent practice, where the design focal length differs slightly from the rounded marketing value.
3. **Constant aperture.** $F/2.9$ at all zoom positions in the patent; the production lens is marketed as $F/2.8$. Japanese patent prescriptions routinely report the computed f-number to one decimal, and the difference ($F/2.9$ vs. $F/2.8$) falls within the rounding tolerance typical for marketed specifications.
4. **ED element count.** Three elements use glass with $\nu_d = 81.6$ (S-FPL51 class), matching the manufacturer's stated "three extra-low dispersion elements."
5. **Internal focusing (IF).** The focusing group is the rear sub-group of Group 1 (10R), consisting of two elements that move together while the front group (10F) and all other groups remain stationary during focus — matching the "IF" designation.
6. **Back focal distance.** $f_B = 39.70$ mm at all zoom positions, consistent with the Pentax K-mount flange distance of 45.46 mm and an APS-C image circle.
7. **Patent timing.** The US patent was filed February 7, 2007; the DA★ 50-135mm was announced the same year and the inventor Masakazu Saori is associated with multiple PENTAX zoom lens patents from this period.
8. **Zoom mechanism.** Groups 1 and 4 remain stationary while Groups 2 and 3 move — matching the patent's described "telescopic zoom" architecture and the lens's constant overall length during zooming.

No other Pentax lens from this period matches all eight criteria simultaneously.

---

## 2. Optical Architecture

The DA★ 50-135mm is a four-group telephoto zoom of the positive–negative–positive–positive power distribution type. Its architecture is summarized as follows:

| Group | Power | Elements | Sub-groups | Role |
|-------|-------|----------|------------|------|
| 1 (10) | Positive | 5 (in 2 sub-groups) | 10F (front, 3 elem.) + 10R (rear, 2 elem.) | Front collector; 10R = focusing group |
| 2 (20) | Negative | 4 | — | Variator (moves toward image on zoom-in) |
| 3 (30) | Positive | 3 | — | Compensator (moves image-ward then object-ward) |
| 4 (40) | Positive | 6 (in 2 sub-groups) | 40F (front, 3 elem.) + 40R (rear, 3 elem.) | Relay / field correction; contains fixed-aperture stop FS |

Two diaphragms are present: a **variable-aperture diaphragm (KS)** positioned 1.00 mm in front of surface 22 (the entrance to Group 4), and a **fixed-aperture diaphragm (FS)** positioned 3.50 mm behind surface 26 (between sub-groups 40F and 40R). The fixed stop FS acts as a field stop that shields off-axis ray bundles from the rear sub-group regardless of focal length.

### Zoom Mechanism

Upon zooming from the short focal length extremity (51.5 mm) to the long focal length extremity (131.0 mm), Groups 1 and 4 remain stationary, Group 2 moves monotonically toward the image, and Group 3 first moves toward the image and then reverses toward the object. The total track length is constant because the sum of the three variable air gaps is conserved at 34.52 mm across all zoom positions:

| Zoom Position | $d_9$ (G1–G2) | $d_{16}$ (G2–G3) | $d_{21}$ (G3–G4) | Sum |
|---------------|---------------|-------------------|-------------------|-----|
| Wide (51.5 mm) | 2.30 | 19.04 | 13.18 | 34.52 |
| Mid (85.0 mm) | 19.73 | 11.78 | 3.01 | 34.52 |
| Tele (131.0 mm) | 29.44 | 1.50 | 3.58 | 34.52 |

This constant-track design enables the lens's fully internal zoom mechanism, where the barrel length does not change during zooming — a key feature for weather sealing and handling balance.

### Computed Group Focal Lengths

The following were verified by ABCD matrix paraxial ray trace:

| Sub-system | Focal Length (mm) | Power |
|------------|-------------------|-------|
| Group 1 (full) | +92.2 | Positive |
| Sub-group 10F | +192.7 | Weakly positive |
| Sub-group 10R (focus) | +152.9 | Positive |
| Group 2 | −22.9 | Strongly negative |
| Group 3 | +71.1 | Positive |
| Group 4 (full) | +66.8 | Positive |
| Sub-group 40F | +108.6 | Positive |
| Sub-group 40R | +118.7 | Positive |

### Paraxial Verification

Computed EFL values at each zoom position (ABCD matrix trace including back focal distance):

| Position | Patent Stated $f$ | Computed EFL | Match |
|----------|-------------------|-------------|-------|
| Wide | 51.50 mm | 51.51 mm | ✓ |
| Mid | 85.00 mm | 85.01 mm | ✓ |
| Tele | 131.00 mm | 130.99 mm | ✓ |

The back focal distance is 39.70 mm at all zoom positions, confirming that Groups 1 and 4 are truly stationary and the image plane does not shift.

---

## 3. Element-by-Element Analysis

### Group 1 — Front Collector and Focus Unit

#### Sub-group 10F (fixed; surfaces 1–5; L1–L3)

**L1 — Negative Meniscus, convex to object (cemented with L2)**
$n_d = 1.74400$, $\nu_d = 44.8$. Glass: S-LAH66 (OHARA). $f = -164.4$ mm.

L1 forms the front half of a cemented doublet with L2. As a high-index lanthanum crown ($n_d = 1.744$), it provides a strongly curved front surface ($R_1 = 105.4$ mm) that gathers light from the large entrance pupil while the meniscus shape minimizes the angle of incidence and thus surface reflections. Its negative power partially offsets the positive power of L2, creating an achromatic pair that corrects axial chromatic aberration at the front of the system.

**L2 — Positive Meniscus, convex to object (cemented with L1)**
$n_d = 1.48749$, $\nu_d = 70.2$. Glass: S-FSL5 (OHARA) / FC5 (HOYA) class. $f = +163.6$ mm.

L2 is a low-dispersion fluorophosphate crown that partners with L1 to form a weakly positive achromatic doublet. The large Abbe number difference ($\Delta\nu_d = 70.2 - 44.8 = 25.4$) between L2 and L1 ensures effective achromatization. The cemented interface at $R_2 = 56.082$ mm carries most of the chromatic correction load while allowing both elements to share the same clear aperture.

**L3 — Positive Meniscus, convex to object (ED)**
$n_d = 1.49700$, $\nu_d = 81.6$. Glass: S-FPL51 (OHARA) / FCD1 (HOYA) — **Extra-low Dispersion**. $f = +184.2$ mm.

L3 is the first of three ED elements in the design. With $\nu_d = 81.6$, S-FPL51 is a fluorophosphate crown with anomalous partial dispersion that enables secondary spectrum correction beyond what ordinary achromatic pairs can achieve. The patent notes (in the claims) that only one positive element in Group 1 should use glass with $\nu_d \geq 80$ to avoid over-correcting lateral chromatic aberration and to limit the thermal sensitivity inherent to fluorophosphate glasses at large diameters (claims 4, 8). L3's meniscus shape with convex surface toward the object ($R_4 = 66.1$ mm, $R_5 = 230.2$ mm) contributes moderate positive power while keeping the marginal ray bending gentle.

#### Sub-group 10R — Focusing Group (surfaces 6–9; L4–L5)

**L4 — Negative Meniscus, convex to object**
$n_d = 1.80518$, $\nu_d = 25.4$. Glass: S-TIH53 (OHARA) / TAFD25 (HOYA) class — dense flint. $f = -269.7$ mm.

L4 is the front element of the two-element focusing sub-group. It is a dense flint with high dispersion ($\nu_d = 25.4$), paired with the positive L5 to form a chromatically self-correcting focusing unit. The patent text (col. 6, lines 5–15) emphasizes that a two-element focusing group is superior to a single positive element because it can internally correct chromatic aberration, reducing focus-dependent chromatic shift across the zoom range. The meniscus shape (both surfaces convex to the object, $R_6 = 54.225$, $R_7 = 42.675$) keeps incident angles small and controls spherical aberration within the group.

**L5 — Positive Biconvex**
$n_d = 1.48749$, $\nu_d = 70.2$. Glass: S-FSL5 (OHARA) class. $f = +96.4$ mm.

L5 provides the net positive power of sub-group 10R ($f_{10R} = +152.9$ mm). Its biconvex shape ($R_8 = 48.3$ mm, $R_9 = -1617.7$ mm — nearly plano-convex) distributes the refraction across both surfaces. The crown glass ($\nu_d = 70.2$) achromatizes against L4's dense flint, so the focusing group produces minimal chromatic shift when it translates axially during focusing. Upon focusing from infinity to the minimum focus distance of 1.0 m, sub-group 10R moves from the image side toward the object side.

### Group 2 — Variator (surfaces 10–16; L6–L9)

**L6 — Negative Biconcave**
$n_d = 1.80400$, $\nu_d = 46.6$. Glass: S-LAH65V (OHARA) class. $f = -28.8$ mm.

L6 is the strongest individual element in the entire system. Its short focal length ($-28.8$ mm) drives the variator's powerfully diverging action. As Group 2 translates toward the image during zoom-in, L6's strong divergence progressively increases the system's effective focal length. The high-index lanthanum glass ($n_d = 1.804$) keeps the surface curvatures manageable ($R_{10} = -181.7$ mm, $R_{11} = +26.6$ mm) despite the extreme power.

**L7 — Negative Biconcave (cemented with L8)**
$n_d = 1.48749$, $\nu_d = 70.2$. Glass: S-FSL5 (OHARA) class. $f = -38.6$ mm.

**L8 — Positive Meniscus, convex to object (cemented with L7)**
$n_d = 1.84666$, $\nu_d = 23.8$. Glass: S-TIH53W (OHARA) / TAFD30 (HOYA) — very dense flint. $f = +39.2$ mm.

L7 and L8 form a cemented doublet with an unusual construction: the negative element (L7) uses a low-index crown ($n_d = 1.487$) while the positive element (L8) uses the highest-index glass in the entire design ($n_d = 1.847$). In a conventional achromatic doublet the crown is positive and the flint is negative; here the roles are reversed in terms of power sign but the chromatic correction logic holds because the Abbe number difference ($\Delta\nu_d = 70.2 - 23.8 = 46.4$) is very large. The cemented doublet's net power is nearly zero ($f \approx -2903$ mm — essentially afocal), meaning its primary function is chromatic correction rather than power contribution. The negative and positive powers of L7 and L8 nearly cancel, leaving a pair that corrects lateral chromatic aberration within the variator without materially altering the group's overall divergence — L6 and L9 carry the power load.

**L9 — Negative Meniscus, convex to image**
$n_d = 1.72916$, $\nu_d = 54.7$. Glass: S-LAL18 (OHARA) / LAC14 (HOYA) class. $f = -151.5$ mm.

L9 is a weakly negative meniscus ($R_{15} = -52.3$ mm, $R_{16} = -100.3$ mm) that acts as a field-flattening and coma-correction element at the rear of Group 2. Its concave-toward-object orientation ($R_{15}$ more strongly curved than $R_{16}$) generates negative field curvature contribution that partially compensates the under-corrected Petzval sum from the preceding strong negative elements.

### Group 3 — Compensator (surfaces 17–21; L10–L12)

**L10 — Positive Biconvex, symmetrical**
$n_d = 1.77250$, $\nu_d = 49.6$. Glass: S-LAH64 (OHARA) class. $f = +113.4$ mm.

L10 has a remarkable property: its front and rear radii are equal in magnitude and opposite in sign ($R_{17} = +174.749$ mm, $R_{18} = -174.749$ mm), making it a perfectly symmetrical biconvex element. Symmetrical biconvex elements produce zero coma and zero distortion at unity conjugate, and even off-conjugate they contribute very little to odd-order aberrations. The high-index lanthanum glass ($n_d = 1.773$) achieves the needed positive power with relatively gentle curvatures, keeping spherical aberration moderate. L10 provides the bulk of Group 3's collecting power and begins re-converging the beam after Group 2's strong divergence.

**L11 — Positive Meniscus, convex to image (ED; cemented with L12)**
$n_d = 1.49700$, $\nu_d = 81.6$. Glass: S-FPL51 (OHARA) / FCD1 (HOYA) — **Extra-low Dispersion**. $f = +58.8$ mm.

L11 is the second ED element in the design and a potent positive element ($f = +58.8$ mm). Its nearly flat front surface ($R_{19} = -4485.5$ mm) and strongly curved rear surface ($R_{20} = -29.0$ mm) create a meniscus with the convex face toward the image. The ED glass provides secondary spectrum correction within Group 3 and achromatizes against the dense flint L12 in the cemented pair.

**L12 — Negative Meniscus, convex to image (cemented with L11)**
$n_d = 1.80518$, $\nu_d = 25.4$. Glass: S-TIH53 (OHARA) — dense flint. $f = -88.7$ mm.

L12 partners with L11 in a strongly achromatizing cemented doublet ($\Delta\nu_d = 81.6 - 25.4 = 56.2$, the largest Abbe number difference of any cemented pair in the design). The doublet's net focal length is $+179.6$ mm (moderately positive), contributing convergent power to Group 3 while providing the design's most potent chromatic correction station. Because Group 3 translates during zooming, the correction it provides shifts in the optical path — requiring the fixed Groups 1 and 4 to carry independent chromatic correction as well.

### Group 4 — Relay and Field Correction (surfaces 22–32; L13–L18)

#### Sub-group 40F (surfaces 22–26; L13–L15)

**L13 — Positive Meniscus, convex to object**
$n_d = 1.77250$, $\nu_d = 49.6$. Glass: S-LAH64 (OHARA) class. $f = +105.9$ mm.

L13 uses the same glass as L10 (S-LAH64). Its meniscus shape ($R_{22} = 73.8$ mm, $R_{23} = 743.1$ mm — weakly curved rear) provides moderate positive power at the entrance to Group 4. Positioned just after the variable-aperture diaphragm KS, L13 sees the on-axis beam at near-maximum convergence and begins the relay toward the image plane.

**L14 — Positive Biconvex (ED; cemented with L15)**
$n_d = 1.49700$, $\nu_d = 81.6$. Glass: S-FPL51 (OHARA) / FCD1 (HOYA) — **Extra-low Dispersion**. $f = +37.6$ mm.

L14 is the third and final ED element and also the single most powerful positive element in the design ($f = +37.6$ mm). Its biconvex shape ($R_{24} = 22.1$ mm, $R_{25} = -105.6$ mm) concentrates strong convergent power just before the fixed field stop FS. Cemented with L15, it forms the most critical achromatic pair in the relay section, where the angular spread of the beam is largest and chromatic correction has the greatest leverage.

**L15 — Negative Biconcave (cemented with L14)**
$n_d = 1.65844$, $\nu_d = 50.9$. Glass: S-LAL12 (OHARA) / LAC12 (HOYA) class. $f = -30.1$ mm.

L15 achromatizes against L14 in the cemented doublet. Despite L14's strong positive power ($+37.6$ mm), the combined L14+L15 doublet is weakly negative ($f \approx -519$ mm) — meaning L15 over-corrects L14's convergence. This is intentional: the negative net power of the doublet contributes to Petzval sum correction (flattening the field), while the individual elements still provide the necessary chromatic correction via their large $\Delta\nu_d$. The actual convergent power for Group 4's 40F sub-group comes from the combination of the L13 singlet ahead of the doublet ($f_{40F} = +108.6$ mm overall).

#### Sub-group 40R — Field Correction Group (surfaces 27–32; L16–L18)

The fixed-aperture diaphragm FS separates 40F from 40R. By placing FS within the stationary Group 4, the patent ensures that off-axis ray bundles are consistently clipped regardless of the zoom position — improving off-axis performance uniformity across the zoom range.

**L16 — Positive Biconvex**
$n_d = 1.60562$, $\nu_d = 43.7$. Glass: S-BAM4 (OHARA) / BAC4 (HOYA) class. $f = +39.0$ mm.

L16 is a strong biconvex element ($R_{27} = 120.4$ mm, $R_{28} = -28.9$ mm) positioned behind the fixed field stop. It provides the primary image-forming power for the rear sub-group and directs the converging beam toward the sensor. The moderate-index barium crown glass ($n_d = 1.606$) offers a balance between refractive power and manufacturing ease.

**L17 — Negative Meniscus, convex to image**
$n_d = 1.80100$, $\nu_d = 35.0$. Glass: S-LAH59 (OHARA) class. $f = -42.2$ mm.

L17 is a high-index lanthanum glass with moderate dispersion. Its negative meniscus shape ($R_{29} = -22.3$ mm, $R_{30} = -67.0$ mm) curves away from the image, generating strong negative field curvature contribution. This element is the primary Petzval sum corrector for the rear section: its high index and negative power flatten the field. It also introduces negative distortion that partially compensates the pincushion tendency inherent to telephoto zoom designs.

**L18 — Positive Meniscus, convex to object**
$n_d = 1.48749$, $\nu_d = 70.2$. Glass: S-FSL5 (OHARA) class. $f = +202.0$ mm.

L18 is the final optical element before the image plane, functioning as a low-power field lens. Its weak positive meniscus shape ($R_{31} = 95.9$ mm, $R_{32} = 3646.8$ mm — nearly flat rear) telecentrizes the exit beam, adjusting the chief ray angle toward the sensor to improve illumination uniformity across the APS-C image circle. The low refractive index keeps the surface reflections minimal at the position closest to the sensor.

---

## 4. Glass Selection and Chromatic Strategy

### Glass Palette Summary

The design uses 11 distinct glass types across 18 elements:

| Glass (probable ID) | $n_d$ | $\nu_d$ | Class | Elements | Count |
|---------------------|-------|---------|-------|----------|-------|
| S-FPL51 (OHARA) | 1.49700 | 81.6 | ED fluorophosphate crown | L3, L11, L14 | 3 |
| S-FSL5 (OHARA) | 1.48749 | 70.2 | Fluorophosphate crown | L2, L5, L7, L18 | 4 |
| S-LAH66 (OHARA) | 1.74400 | 44.8 | Lanthanum crown | L1 | 1 |
| S-LAH64 (OHARA) | 1.77250 | 49.6 | Lanthanum crown | L10, L13 | 2 |
| S-LAH65V (OHARA) | 1.80400 | 46.6 | Lanthanum crown | L6 | 1 |
| S-LAH59 (OHARA) | 1.80100 | 35.0 | Dense lanthanum flint | L17 | 1 |
| S-TIH53 (OHARA) | 1.80518 | 25.4 | Dense flint | L4, L12 | 2 |
| S-TIH53W (OHARA) | 1.84666 | 23.8 | Very dense flint | L8 | 1 |
| S-LAL18 (OHARA) | 1.72916 | 54.7 | Lanthanum crown | L9 | 1 |
| S-LAL12 (OHARA) | 1.65844 | 50.9 | Lanthanum crown | L15 | 1 |
| S-BAM4 (OHARA) | 1.60562 | 43.7 | Barium crown | L16 | 1 |

Glass identifications are based on six-digit $n_d$/$\nu_d$ code matching against the OHARA, HOYA, and Schott catalogs. OHARA is the preferred vendor for a Pentax design of this era; HOYA equivalents exist for most entries (FCD1 for S-FPL51, FC5 for S-FSL5, TAFD25 for S-TIH53, etc.) but the patent does not specify a vendor. All glass assignments carry a confidence level of "probable" rather than "confirmed."

### Chromatic Correction Architecture

The three ED elements (L3, L11, L14) are distributed strategically — one in each of the three positive-power regions of the design:

- **L3 in Group 1 (10F):** Corrects axial chromatic aberration for the front collector, which sees the full beam diameter. The patent restricts Group 1 to a single ED element (claims 4, 8) because multiple large-diameter ED elements would increase thermal sensitivity (fluorophosphate glasses have larger thermal expansion coefficients than conventional optical glasses).
- **L11 in Group 3:** Corrects chromatic aberration within the moving compensator group. This is critical because Group 3's axial position varies with zoom, and any residual chromatic error in this group would manifest differently at each focal length.
- **L14 in Group 4 (40F):** Corrects chromatic aberration in the relay group near the image plane, where it has maximum leverage on lateral chromatic aberration across the field.

Each ED element is paired with a dense flint partner to form a high-$\Delta\nu$ achromatic doublet: L3 is air-spaced near L1 ($\Delta\nu = 36.8$); L11 is cemented with L12 ($\Delta\nu = 56.2$); L14 is cemented with L15 ($\Delta\nu = 30.7$). The L11+L12 pair has the most extreme dispersion difference and carries the heaviest chromatic correction load.

The most-used glass is S-FSL5 ($n_d = 1.487$, $\nu_d = 70.2$), appearing in four elements. This fluorophosphate crown sits between conventional crowns ($\nu_d \approx 60$) and ED glasses ($\nu_d > 80$) on the dispersion spectrum and provides a versatile low-cost achromatizing partner.

---

## 5. Aspherical Surfaces

**This design contains no aspherical surfaces.** All 32 optical surfaces are spherical.

This is confirmed by three independent lines of evidence:

1. **Patent data.** The patent does not list any aspherical coefficient tables for any of the five embodiments. No surface labels carry an "A" suffix or any aspherical annotation.
2. **Manufacturer designation.** The official Ricoh Imaging product name — "smc PENTAX-DA★ 50-135mmF2.8 ED [IF] SDM" — does not include the "AL" (Aspherical Lens) suffix that Pentax uses for lenses with aspherical elements. For comparison, the companion lens smc PENTAX-DA★ 16-50mm F2.8 ED **AL** [IF] SDM does carry the "AL" designation and its patent includes aspherical surfaces.
3. **Aberration correction strategy.** The design relies entirely on glass selection (three ED elements, high-index lanthanum glasses) and element count (18 elements) to achieve its aberration correction goals. This is consistent with a telephoto zoom design philosophy where the long back focal distance and moderate field angle do not demand the strong astigmatism and distortion correction that aspherical surfaces typically provide in wide-angle designs.

Some third-party sources (notably Amazon product listings and one user manual database) erroneously attribute aspherical elements to this lens, likely due to confusion with the companion DA★ 16-50mm.

---

## 6. Focus Mechanism

### Architecture

The lens uses **internal focusing (IF)** via the rear sub-group of Group 1 (sub-group 10R), consisting of elements L4 and L5. Upon focusing from infinity to the minimum object distance of 1.0 m, 10R translates axially from the image side toward the object side. All other groups remain stationary during focus.

This architecture provides several advantages described in the patent (col. 5, lines 30–65):

- The focusing group is lightweight (only 2 elements), enabling the SDM ultrasonic motor to drive fast autofocus.
- The front sub-group 10F and the entire barrel remain stationary, so the overall lens length never changes — important for weather sealing and handling balance.
- The focus travel is the same at all focal lengths (unlike variator-based focusing), simplifying the AF control system.
- The two-element focusing group is self-correcting for chromatic aberration (col. 6, lines 5–15): L4's dense flint ($\nu_d = 25.4$) and L5's crown ($\nu_d = 70.2$) form an achromatic pair that minimizes focus-dependent chromatic shift.

### Focus Travel and Close-Focus Data

The patent provides variable air gap data ($d_9$, $d_{16}$, $d_{21}$) at three zoom positions but only at infinity focus. No close-focus air gap table is published for Embodiment 5 (or for any of the five embodiments). The close-focus gaps were therefore computed by paraxial ray trace (y-nu method), solving for the axial translation of sub-group 10R that places the image of a 1.0 m MFD object at the fixed sensor plane ($f_B = 39.70$ mm behind the last surface).

Upon focusing from infinity to a close object, sub-group 10R moves from the image side toward the object side (col. 5, lines 28–30). This **decreases** the 10F–10R air gap ($d_5$) and **increases** the 10R–G2 gap ($d_9$); the sum $d_5 + d_9$ is conserved at each zoom position because both gaps lie within the stationary Group 1. The computed focus travel is $\approx 13.53$ mm, nearly constant across all zoom positions — as expected for a focusing group within a stationary lens group.

| Zoom Position | $d_5$ (∞) | $d_5$ (1.0 m) | $d_9$ (∞) | $d_9$ (1.0 m) | $d_5 + d_9$ | Focus Travel |
|---------------|-----------|---------------|-----------|---------------|-------------|-------------|
| Wide (51.5 mm) | 15.23 | 1.70 | 2.30 | 15.83 | 17.53 | 13.53 mm |
| Mid (85.0 mm) | 15.23 | 1.69 | 19.73 | 33.27 | 34.96 | 13.54 mm |
| Tele (131.0 mm) | 15.23 | 1.68 | 29.44 | 42.99 | 44.67 | 13.55 mm |

The computed magnification at the telephoto extremity and MFD = 1.0 m is $\beta = -0.170$, matching the manufacturer's stated maximum magnification of 0.17× (Ricoh Imaging specifications). This cross-check between the computed close-focus configuration and the production specification provides additional confidence in the embodiment identification.

The focus travel is constant across all focal lengths because the focusing group is in the stationary Group 1 — unlike variator-based designs where focus travel varies with zoom position.

### Focal Length of the Focusing Group

The computed focal length of sub-group 10R is $f_{10R} = +152.9$ mm. The patent's Table 6 reports $\text{Cond.}(1) = 2.97$ for Embodiment 5. This ratio is $f_{10R} / f_w = 152.9 / 51.5 = 2.97$, satisfying the corrected condition $2.7 < f_{1R}/f_w < 3.5$ (see note below).

**Note on the patent text:** The patent defines Condition (1) using "$f_t$" (the long focal length extremity) in the denominator (col. 5, line 25; Claims 1 and 6). However, the numerical values in Table 6 for all five embodiments are consistent only when $f_w$ (the short focal length extremity) is used as the denominator. Cross-referencing computed $f_{1R}$ values against Table 6 for all five embodiments confirms this:

| Embodiment | $f_{1R}$ (mm) | $f_w$ (mm) | $f_t$ (mm) | $f_{1R}/f_t$ | $f_{1R}/f_w$ | Table 6 | Matches $f_t$? | Matches $f_w$? |
|------------|---------------|------------|------------|---------------|---------------|---------|----------------|----------------|
| 1 | 151.6 | 51.50 | 146.00 | 1.04 | 2.94 | 2.94 | No | **Yes** |
| 2 | 160.9 | 51.50 | 145.50 | 1.11 | 3.12 | 3.12 | No | **Yes** |
| 3 | 161.9 | 51.50 | 131.00 | 1.24 | 3.14 | 3.14 | No | **Yes** |
| 4 | 161.0 | 51.50 | 131.00 | 1.23 | 3.13 | 3.13 | No | **Yes** |
| 5 | 152.9 | 51.50 | 131.00 | 1.17 | 2.97 | 2.97 | No | **Yes** |

All $f_{1R}/f_t$ values fall between 1.04 and 1.24 — well below the stated lower bound of 2.7. All $f_{1R}/f_w$ values fall between 2.94 and 3.14, satisfying the stated bounds and matching Table 6 to two decimal places. Conditions (2) and (3) both use $f_w$ in the patent text and their Table 6 values are computationally verified, confirming that the error is isolated to Condition (1). The condition should read $2.7 < f_{1R}/f_w < 3.5$.

---

## 7. Petzval Sum and Field Curvature

The surface-by-surface Petzval sum, computed as $\sum \frac{\phi_i}{n_{\text{before}} \cdot n_{\text{after}}}$ for each refracting surface, yields:

$$\text{Petzval sum} = 0.001821 \text{ mm}^{-1}$$
$$\text{Petzval radius} = 549 \text{ mm}$$

For a telephoto zoom covering an APS-C image circle (half-diagonal $\approx 14.1$ mm), this Petzval radius represents a moderate residual. The uncorrected sagittal field curvature at the corner of the APS-C frame would be approximately $\frac{h^2}{2 R_P} = \frac{14.1^2}{2 \times 549} \approx 0.18$ mm. In practice, the designer compensates much of this Petzval curvature with deliberate introduction of astigmatism (balancing sagittal and tangential surfaces) and the negative field-curvature contributions of L9, L15, and L17. The patent's aberration diagrams for Embodiment 5 (Figs. 18D and 20D) show that the residual astigmatism at the maximum field angle is contained within approximately $\pm 0.5$ mm, confirming effective field correction for the APS-C format.

The moderately positive Petzval sum is primarily contributed by the strong positive elements in Groups 3 and 4 (L11, L14, L16), partially compensated by the high-index negative elements L6, L15, and L17.

---

## 8. Conditional Expressions

The patent specifies three conditional inequalities. All three are satisfied by Embodiment 5:

| Condition | Expression | Embodiment 5 Value | Satisfied? |
|-----------|------------|-------------------|------------|
| (1) | $2.7 < f_{1R}/f_w < 3.5$* | 2.97 | ✓ |
| (2) | $1.8 < f_{4R}/f_w < 3.6$ | 2.30 | ✓ |
| (3) | $1.6 < f_1/f_w < 2.5$ | 1.79 | ✓ |

\* The patent text writes $f_t$ in the denominator, but as discussed in §6, the Table 6 values correspond to $f_w$.

**Condition (1)** governs the power of the focusing group. Too weak (exceeding 3.5) means excessive focus travel and large focus-dependent off-axis aberrations; too strong (below 2.7) makes spherical aberration and coma correction within 10R difficult.

**Condition (2)** governs the power of the rear sub-group of Group 4. Too weak means insufficient distortion correction; too strong causes spherical aberration and coma.

**Condition (3)** governs the overall power of Group 1. Too weak means insufficient lateral chromatic aberration correction; too strong means difficult spherical and axial chromatic correction.

---

## 9. Design Heritage and Context

The DA★ 50-135mm F2.8 was announced alongside the DA★ 16-50mm F2.8 ED AL [IF] SDM as the first pair of weatherproof K-mount lenses and the first Pentax lenses to incorporate the SDM (Supersonic Direct-drive Motor) autofocus system. Together, the two lenses provided a professional-grade 16–135mm (24.5–207mm equivalent) zoom range for Pentax's APS-C DSLR system.

The four-group positive–negative–positive–positive zoom architecture with stationary first and fourth groups is a well-established telephoto zoom topology, with antecedents in the prior art cited by the patent (JP 2000-019398, JP 2002-006215, JP 2003-090958, among others). The DA★ 50-135mm's contribution relative to these predecessors is the optimization of this architecture for APS-C digital SLR use, specifically: the constant overall length (enabled by stationary Groups 1 and 4 plus internal zooming via Groups 2 and 3), the compact focusing mechanism within Group 1, and the combination of three ED elements in an all-spherical design that achieves competitive chromatic performance without the manufacturing complexity of aspherical surfaces.

The lens remained in Pentax's product lineup from 2007 until its discontinuation in 2023 — a 16-year production run that speaks to the robustness of the optical design.

---

## 10. Sources

1. US Patent 7,289,274 B1, "Telescopic Zoom Lens System," Masakazu Saori, PENTAX Corporation, granted October 30, 2007.
2. Ricoh Imaging official product page: smc PENTAX-DA★ 50-135mmF2.8 ED [IF] SDM.
3. Ricoh Imaging Star Lens Lineup page (confirms 18 elements / 14 groups, three ED glass elements, no AL designation).
4. OHARA optical glass catalog (S-FPL51, S-FSL5, S-LAH66, S-LAH64, S-LAH65V, S-TIH53, S-TIH53W, S-LAL18, S-LAL12, S-BAM4, S-LAH59).
5. HOYA optical glass catalog (FCD1, FC5, TAFD25, TAFD30, NBFD10, LAC14, LAC12, BAC4, NBFD15).
