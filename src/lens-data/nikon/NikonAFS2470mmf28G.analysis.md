# Nikon AF-S NIKKOR 24-70mm f/2.8G ED — Optical Analysis

**Patent:** US 7,508,592 B2  
**Application Number:** 11/516,710  
**Filed:** September 7, 2006  
**Granted:** March 24, 2009  
**Priority:** JP 2005-282921, September 28, 2005  
**Inventor:** Hiroki Harada  
**Assignee:** Nikon Corporation  
**Title:** Zoom Lens System  
**Embodiment analyzed:** Example 2, Table 2, FIG. 3

## Patent Reference and Design Identification

US 7,508,592 B2 discloses a fast wide-angle standard zoom for a single-lens reflex camera. The patent's worked examples use a five-group negative-positive-negative-positive-positive layout and are directed at an 80°-plus maximum field, an approximately 2.7× zoom ratio, and an f-number around 2.8. Example 2 is the embodiment transcribed here.

The production match to the **AF-S NIKKOR 24-70mm f/2.8G ED** is based on convergent evidence rather than on a patent title naming the product.

1. **Element and group count.** Nikon's published construction is 15 elements in 11 groups. Example 2 resolves to the same production count when the second-group resin-on-glass asphere at surfaces 7-8-9 is treated as one hybrid lens element. The data file models the resin shell and glass body as separate optical media, so the renderer contains 16 media entries while the catalog-facing production count remains 15 elements.
2. **ED elements.** The prescription contains three low-dispersion elements at nd = 1.497820, νd = 82.56: L6, L12, and L14. Nikon publishes three ED elements.
3. **Aspherical surfaces.** Surfaces 2, 7, and 25 are aspherical. Nikon publishes three aspherical lens elements, including a large-diameter PGM element.
4. **Focal length and aperture.** The patent states f = 24.78 / 51.92 / 67.70 mm and FNO = 2.91. The production lens is marketed as 24-70 mm f/2.8.
5. **Image circle.** The aberration plots use image height Y = 21.60 mm, matching a 43.2 mm diagonal full-frame image circle.
6. **Focusing and stabilization.** The patent describes focusing by moving the front sub-group of G2 toward the image side and does not disclose a vibration-reduction group. Nikon's production lens is an internal-focus AF-S lens without VR; this distinguishes it from the later AF-S 24-70mm f/2.8E ED VR.

The other worked examples are close relatives, but Example 2 is the best match. Example 1 uses a νd = 91.2 positive element in the second group and a different fourth-group ED-like crown. Examples 3 and 4 alter the rear group construction; Example 4 also includes a first-group positive element with nd ≥ 1.9000. Example 2 does not satisfy that optional high-index first-group condition, because its first-group positive element is nd = 1.846660.

## Optical Architecture

The design is a five-group negative-lead standard zoom with group powers:

| Group | Composition | Paraxial focal length | Function |
|---|---:|---:|---|
| G1 | L1-L3 | −37.73 mm | Negative collector and wide-field front group |
| G2 | L4-L7 | +40.48 mm | Main positive variator and focus assembly |
| G2a | L4-L6 | +75.12 mm | Internal focus sub-group |
| G2b | L7 | +61.07 mm | Rear positive sub-group of G2 |
| G3 | L8-L10 | −40.77 mm | Negative variator; aperture stop on object side |
| G4 | L11-L13 | +59.79 mm | Retrofocus-type rear converger |
| G5 | L14-L15 | +334.86 mm | Weak fixed positive relay / field group |

During zooming from wide to telephoto, G1 first moves toward the image and then back toward the object; G2, G3, and G4 move toward the object; G5 is fixed. The infinity-focus variable gaps are:

| State | f | d6 | d12 | d14 | d20 | d25 |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 24.78 mm | 47.46 | 7.35 | 1.35 | 16.24 | 1.40 |
| Middle | 51.92 mm | 9.09 | 7.35 | 19.10 | 6.48 | 14.23 |
| Telephoto | 67.70 mm | 1.87 | 7.35 | 26.58 | 1.60 | 23.79 |

The structural point of the patent is the positive fifth group. A negative final group would magnify residual aberrations from G1-G4. By using a weak positive G5 with β5 below unity, the first four groups can have a longer combined focal length than the full system, reducing the aberration burden. The fourth and fifth groups also form a wide-field, eyepiece-like tail: G4 is a retrofocus-type negative-positive-positive sequence, while G5 is a telephoto-type positive-negative cemented pair.

A surface-by-surface Petzval sum Σφ/(n·n′) gives +3.477 × 10⁻³ mm⁻¹, equivalent to a Petzval radius of about −287.6 mm. This is a gently inward-curving field rather than a flat-field design by element powers alone; the rear symmetric tail and three aspheres supply much of the field correction.

## Element-by-Element Analysis

### G1 — Negative collector

#### L1 — Negative meniscus, convex to object, rear aspheric

nd = 1.744429, νd = 49.52. Glass: `744495` unmatched high-index lanthanum-crown class. f = −46.58 mm.

L1 is the large negative front meniscus. Its rear surface is aspheric and is the probable large-diameter molded asphere referenced in Nikon's product literature. Its task is to accept the wide chief rays and reduce the distortion and astigmatism that a negative-lead f/2.8 zoom would otherwise generate at the 24 mm end.

No exact public catalog match was found for the `744495` code. The closest public glasses are in high-index lanthanum crown or lanthanum flint-adjacent territory, but the element should remain labeled as an unmatched class glass rather than assigned to a specific catalog name.

#### L2 — Biconcave negative

nd = 1.618000, νd = 63.33. Glass: S-PHM52 (OHARA). f = −122.06 mm.

L2 supplies additional negative power in the first group while using a high-Abbe phosphate crown. Its low dispersion limits the chromatic cost of the negative front group.

#### L3 — Positive meniscus, convex to object

nd = 1.846660, νd = 23.78. Glass: S-TIH53 (OHARA). f = +205.38 mm.

L3 is a weak positive dense-flint corrector at the rear of G1. It partly achromatizes the two negative elements in front of it and begins re-collimating the ray bundle before the large G1-G2 air gap.

### G2a — Front positive focus sub-group

#### L4 — Hybrid biconvex positive asphere: resin shell plus glass body

Resin shell: nd = 1.553890, νd = 38.09. Glass: `553381` unmatched UV-cure resin. f ≈ +2488 mm.
Glass body: nd = 1.772499, νd = 49.60. Glass: S-LAH66 (OHARA). f = +74.87 mm.
Composite f = +72.73 mm.

The prescription lists a 0.10 mm low-index layer at surface 7 followed by a thicker high-index glass body at surfaces 8-9. This is best read as a hybrid aspherical element: a thin replicated resin surface on a spherical glass substrate. The resin shell has little standalone optical power; it is a figuring layer. The glass body carries nearly all of the element power.

The patent text describes the element as a double-convex positive lens with an aspherical object-side surface. The prescription, not the prose, is what establishes the hybrid construction.

#### L5-L6 — Cemented negative/positive achromat

L5: nd = 1.761821, νd = 26.52. Glass: S-TIH14 (OHARA). f = −53.98 mm.  
L6: nd = 1.497820, νd = 82.56. Glass: J-FKH1 (HIKARI). f = +55.52 mm.  
Cemented pair f ≈ −2204 mm.

The L5/L6 doublet is nearly afocal in isolation, but it is placed where the marginal ray height is high. L6 is the first ED crown in the system and is the positive second-group lens satisfying the patent's νd > 70 condition. The dense-flint/ED pairing controls longitudinal chromatic aberration while the nearby L4 asphere handles the spherical-aberration undercorrection that a low-index ED crown tends to introduce.

### G2b — Rear positive sub-group

#### L7 — Biconvex positive

nd = 1.882997, νd = 40.76. Glass: S-LAH58 (OHARA). f = +61.07 mm.

L7 is a high-index positive singlet forming the rear sub-group of G2. The G2a-G2b air gap is the focus gap. At infinity, d12 is fixed at 7.35 mm across the zoom range; at close focus G2a moves imageward, reducing d12.

### G3 — Negative variator

The aperture stop is placed immediately in front of G3 and moves with G3 during zooming.

#### L8-L9 — Cemented positive/negative doublet

L8: nd = 1.846660, νd = 23.78. Glass: S-TIH53 (OHARA). f = +44.76 mm.  
L9: nd = 1.729157, νd = 54.68. Glass: S-LAL18 (OHARA). f = −30.08 mm.  
Cemented pair f = −93.05 mm.

This doublet leads the negative third group. The positive dense flint followed by a negative lanthanum crown gives G3 useful negative power while managing the chromatic effect of the variator.

#### L10 — Negative meniscus, concave to object

nd = 1.729157, νd = 54.68. Glass: S-LAL18 (OHARA). f = −74.89 mm.

L10 completes the positive-negative-negative sequence specified for the third group. It strengthens the negative variator while keeping the stop-side ray cone controlled.

### G4 — Positive retrofocus-type converger

#### L11-L12 — Cemented negative/positive ED doublet

L11: nd = 1.805181, νd = 25.42. Glass: S-TIH6 (OHARA). f = −69.57 mm.  
L12: nd = 1.497820, νd = 82.56. Glass: J-FKH1 (HIKARI). f = +39.87 mm.  
Cemented pair f = +85.49 mm.

This is the principal positive achromat in G4. The group begins with a negative dense flint and then uses an ED biconvex positive element, satisfying the patent's retrofocus-type fourth-group form: negative, positive, positive.

#### L13 — Weak biconvex positive, rear aspheric

nd = 1.516330, νd = 64.14. Glass: S-BSL7 (OHARA). f = +198.12 mm.

L13 is a weak positive borosilicate crown element. Its rear surface is aspheric and is the only asphere in G4/G5. The patent states that an aspheric positive lens in the fourth or fifth group should have positive refractive power that weakens from center to periphery, addressing peripheral coma, distortion, and spherical aberration.

### G5 — Fixed positive tail group

#### L14-L15 — Cemented positive/negative final group

L14: nd = 1.497820, νd = 82.56. Glass: J-FKH1 (HIKARI). f = +84.10 mm.  
L15: nd = 1.805181, νd = 25.42. Glass: S-TIH6 (OHARA). f = −106.31 mm.  
Cemented group f = +334.86 mm.

G5 is a weak positive cemented group and remains fixed during zooming. Its positive-then-negative sequence is the telephoto-type form described in the patent. The rear negative element helps correct wide-end distortion and reduces peripheral ray height, while the ED positive member helps keep longitudinal chromatic aberration stable near the image side.

## Glass Identification and Selection

Glass names were matched by nd/νd code against manufacturer data sheets. The patent itself gives nd and νd but does not name glass vendors. OHARA matches are exact or within rounding for most non-ED elements. The ED crown is matched to HIKARI J-FKH1, which agrees with the prescription code and is consistent with Nikon's access to Hikari Glass.

| Elements | nd | νd | Identification | Status |
|---|---:|---:|---|---|
| L1 | 1.744429 | 49.52 | `744495` unmatched high-index lanthanum-crown class | No exact public catalog match |
| L2 | 1.618000 | 63.33 | S-PHM52 (OHARA) | Exact |
| L3, L8 | 1.846660 | 23.78 | S-TIH53 (OHARA) | Exact |
| L4 resin | 1.553890 | 38.09 | `553381` unmatched UV-cure resin | Not catalog glass |
| L4 glass body | 1.772499 | 49.60 | S-LAH66 (OHARA) | Exact |
| L5 | 1.761821 | 26.52 | S-TIH14 (OHARA) | Exact |
| L6, L12, L14 | 1.497820 | 82.56 | J-FKH1 (HIKARI) | Exact within rounding |
| L7 | 1.882997 | 40.76 | S-LAH58 (OHARA) | Exact |
| L9, L10 | 1.729157 | 54.68 | S-LAL18 (OHARA) | Exact |
| L11, L15 | 1.805181 | 25.42 | S-TIH6 (OHARA) | Exact |
| L13 | 1.516330 | 64.14 | S-BSL7 (OHARA) | Exact |

The chromatic design is a distributed ED/flint strategy rather than an apochromat claim. Each ED element is cemented to or positioned with a dense-flint partner in a converging group: L6 with S-TIH14 in G2a, L12 with S-TIH6 in G4, and L14 with S-TIH6 in G5. The patent's condition (4) applies specifically to the high-Abbe positive lens in G2; in Example 2 that lens is L6. The data file now carries HIKARI J-FKH1 catalog spectral fields for these ED elements (nC = 1.495980, nF = 1.502009, ng = 1.505256, ΔPgF = +0.0327). Those spectral fields come from the glass catalog after the J-FKH1 identification; they are not published in the patent itself.

## Focus Mechanism

Focusing is internal. The front sub-group of the second group, G2a, moves toward the image side for closer objects. G2b and all other groups remain fixed for focus at a given zoom setting.

The patent tabulates only infinity-focus zoom spacings. Nikon specifies a closest focusing distance of 0.38 m in the 35-50 mm focal-length range and a maximum reproduction ratio of 1/3.7. The data file therefore uses a constrained paraxial focus model rather than a patent-published close-focus table: d6 is increased and d12 is decreased by equal amounts until an axial object at 0.38 m from the image plane images onto the fixed image plane. The same endpoint is supplied at all three patent zoom positions for renderer continuity, but those close-focus spacings are model values, not patent-published prescription values.

| State | d6 infinity | d6 modeled close | d12 infinity | d12 modeled close |
|---|---:|---:|---:|---:|
| Wide | 47.46 | 54.445 | 7.35 | 0.365 |
| Middle | 9.09 | 15.049 | 7.35 | 1.391 |
| Telephoto | 1.87 | 8.270 | 7.35 | 0.950 |

This preserves the total distance from G1 to G2b at each zoom position, which is the expected consequence of moving only G2a internally.

## Aspherical Surfaces

Example 2 has three aspherical surfaces: surface 2 on L1, surface 7 on the resin layer of L4, and surface 25 on L13.

The patent's aspheric sag equation is written in the form:

\[
X(y) = \frac{y^2/r}{1 + \sqrt{1 - K_\text{pat}(y^2/r^2)}} + C_4y^4 + C_6y^6 + C_8y^8 + C_{10}y^{10} + C_{12}y^{12}
\]

The renderer uses the standard even-asphere convention:

\[
Z(h) = \frac{h^2/R}{1 + \sqrt{1 - (1 + K_\text{std})(h/R)^2}} + A_4h^4 + A_6h^6 + \cdots
\]

Therefore the data file stores **Kstd = Kpat − 1**. The coefficients below reproduce the patent values and show both conic conventions.

| Surface | Element | Kpat | Kstd stored | A4 | A6 | A8 | A10 | A12 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| 2 | L1 rear | −0.1438 | −1.1438 | 3.8749e−6 | −2.2610e−10 | 6.0954e−12 | −8.9785e−15 | 6.529e−18 |
| 7 | L4 resin front | −0.4588 | −1.4588 | −2.4347e−7 | −1.2907e−10 | 1.7953e−12 | −1.9730e−15 | 0 |
| 25 | L13 rear | 13.3795 | 12.3795 | 3.3574e−6 | 3.1407e−9 | −8.1398e−12 | 1.4058e−14 | 0 |

Surface 2 is the large front-group correction surface. Surface 7 is a replicated-resin hybrid asphere. Surface 25 is the rear-group asphere that weakens positive power toward the periphery, matching the patent's description of the fourth/fifth-group aspheric correction mechanism.

## Conditional Expressions

The patent gives five conditional expressions. The values below were recomputed from the Example 2 prescription using a paraxial y-nu trace.

| # | Expression | Patent value | Recomputed | Status |
|---|---|---:|---:|---|
| (1) | 0.6 < β5 < 0.9 | 0.82 | 0.8219 | Satisfied |
| (2) | S45w / fw < −0.15 | −0.50 | −0.4990 | Satisfied |
| (3) | −1.8 < f1·FNOt / ft < −1.0 | −1.62 | −1.6218 | Satisfied |
| (4) | 70 < νd | 82.6 | 82.56 | Satisfied |
| (5) | 1.1 < f2a / f2b < 1.5 | 1.23 | 1.2300 | Satisfied |

For condition (1), β5 is the lateral magnification of G5 at the wide end. It is equivalent here to the ratio between the full-system focal length and the combined focal length of G1-G4 at the wide setting. For condition (2), S45w is the position of the primary principal point of G5 measured from the secondary principal point of G4. For condition (5), f2a = +75.12 mm and f2b = +61.07 mm.

Claim 14, which requires a first-group positive lens with nd ≥ 1.9000, is not satisfied by Example 2. It is an optional dependent-claim feature corresponding to another embodiment, not a property of this prescription.

## Verification Summary

The prescription was re-entered from Example 2 and independently traced. The paraxial trace gives:

| State | Patent f | Recomputed EFL | Computed BFD from last surface |
|---|---:|---:|---:|
| Wide | 24.78 | 24.7816 | 41.8794 |
| Middle | 51.92 | 51.9949 | 41.8381 |
| Telephoto | 67.70 | 67.6927 | 41.9064 |

The wide and telephoto focal lengths reproduce the patent to rounding. The middle focal length differs by 0.075 mm, consistent with the variable gaps being tabulated to two decimals. The back focal distance is effectively invariant; the residual ±0.04 mm variation is also a table-rounding artifact. The data file uses the wide-end computed BFD, 41.87943175 mm, as the fixed air-equivalent image distance.

Semi-diameters are inferred rather than patent-published. They were constrained by paraxial ray envelopes, surface slope, conic-domain limits, element edge thickness, and cross-gap sag intrusion. They should be read as renderer clear apertures, not as Nikon mechanical drawings.

## Design Heritage and Context

The AF-S NIKKOR 24-70mm f/2.8G ED was Nikon's first-generation professional 24-70mm f/2.8 standard zoom for the FX digital SLR era. It succeeded the AF-S 28-70mm f/2.8D by extending the wide end to 24 mm while retaining a constant f/2.8 nominal aperture. The patent positions the design against earlier negative-lead fast zooms that could not simultaneously provide an 80°-plus field, a roughly 2.7× zoom range, and f/2.8-class speed.

The defining design answer is not merely the use of ED or aspherical elements. It is the positive fixed fifth group, the paired retrofocus/telephoto character of G4 and G5, and the split second group that allows internal focusing without moving the entire positive variator.

## Sources

- US 7,508,592 B2, *Zoom Lens System*, Hiroki Harada / Nikon Corporation. Example 2, Table 2 and FIG. 3.
- Nikon Imaging, **AF-S NIKKOR 24-70mm f/2.8G ED (2.9x)** product page: focal length, f/2.8 maximum aperture, full-frame coverage, 15 elements / 11 groups, 3 ED elements, 3 aspherical lenses, IF/SWM focusing, 0.38 m closest focusing distance at 35-50 mm, 1/3.7 maximum reproduction ratio, 77 mm filter, and 9 rounded diaphragm blades. https://imaging.nikon.com/imaging/lineup/lens/f-mount/zoom/normalzoom/af-s_zoom24-70mmf_28g/
- OHARA product data sheets for S-PHM52, S-TIH53, S-LAH66, S-TIH14, S-LAH58, S-LAL18, S-TIH6, and S-BSL7.
- HIKARI GLASS product data sheet for J-FKH1, including nC, nF, ng, and ΔPgF values used for the ED elements in the data file.
- Independent paraxial y-nu ray trace and surface-by-surface Petzval calculation from the Example 2 prescription.
