## Patent Reference and Design Identification

**Patent:** JP 2003-177313 A

**Application Number:** JP 2001-378795

**Filed:** 2001-12-12

**Published:** 2003-06-27

**Inventors:** Kouichi Ohshita; Mami Muratani

**Applicant:** Nikon Corporation

**Title:** 光学系 (Optical System)

**Embodiment analyzed:** Example 1

The prescription associated with **NIKON ZOOM-NIKKOR 8-24mm f/2.8-4.9 (Nikon COOLPIX 4300)** is transcribed from
Example 1, Table 1, with the arrangement shown in Figure 1. The Japanese publication is the numerical source throughout.
The related United States publication supplies the Latin-script inventor names, not a replacement prescription.
[P1, cover, pp.5–7 and Fig.1][P1]; [P2]

The patent concerns interference coatings that provide wavelength selection on existing lens surfaces. Its contribution
is not simply the negative-positive-positive zoom arrangement: it identifies lens faces whose curvature and ray angles
make them suitable locations for such a coating. Example 1 is the relevant optical realization. [P1, ¶0017–0029, ¶0034–0043][P1]

The production identification rests on convergent evidence rather than an explicit manufacturer-to-patent attribution:

1. Nikon specifies nine elements in eight groups for the production lens. The selected prescription has the same
   physical count, including one cemented pair. [M2, p.144][M2]; [P1, Table 1][P1]
2. Nikon's structural account gives a negative first group, positive second group and single positive rear group, with
   zooming assigned to the first two groups. The patent's Example 1 and Figure 1 have that arrangement. [M1, §V][M1]; [P1]
3. The manufacturer's range is 8–24 mm f/2.8–4.9. The patent instead specifies 8.24–23.3 mm at FNo 2.89–5.20.
   The differences are retained, not erased by scaling or by replacing the design's aperture values. [M2, p.144][M2]; [P1, Table 1][P1]
4. Filing predates the September 2002 product release. This is compatible timing, not proof that this numerical example
   was manufactured without modification. [P1, cover][P1]; [M1, §I][M1]

This is a strong research correlation, not manufacturer confirmation of the exact patent attribution. In particular,
matching the element count and group arrangement does not certify the production radii, glass melts, coating stack or
internal mechanical travel.

The production camera uses a 1/1.8-inch-type CCD. `imageFormat` records this class with nominal dimensions documented in LENS_MOUNT_FORMAT_OPTIONS.md. The patent’s image height remains a source quantity, not an independently measured sensor dimension. [M2, p.144][M2]; [P1, Table 1][P1]

## Optical Architecture

The system has nine physical glass elements in eight air-separated groups, organized into three functional groups.
G1 contains L1–L4, G2 contains L5–L8, and G3 contains L9. The cemented L6/L7 junction reduces the physical group count
without reducing the number of distinct glass elements. There are eighteen listed optical planes, including the stop.
[P1, ¶0034, Table 1 and Fig.1][P1]; [R1]

The following group powers are computed for each complete group in air, retaining its internal thicknesses, air gaps
and any cemented interface. They are not sums of the elements' isolated powers. [R1]

| Functional group | Elements | Standalone power (mm⁻¹) | Standalone focal length (mm) |
| --- | --- | --- | --- |
| G1 | L1-L4 | -0.053807890 | -18.584635 |
| G2 | L5-L8 | +0.067114800 | +14.899843 |
| G3 | L9 | +0.040826516 | +24.493885 |

The stop is between G1 and G2, with a fixed 0.7000 mm interval from the stop plane to L5. The negative first group and
positive second group form the moving zoom section; the final positive element remains fixed in the two published
infinity zoom configurations. [P1, Table 1][P1]

| Axial interval | Wide (mm) | Long (mm) |
| --- | --- | --- |
| D1: L4 rear to stop | 18.66993 | 2.42097 |
| D2: L8 rear to L9 front | 6.81587 | 22.95625 |
| Bf: L9 rear to image plane | 5.32665 | 5.32665 |

With the image plane fixed and imageward displacement positive, G1 moves 0.10858 mm imageward between the published
endpoints, while G2 moves 16.14038 mm objectward. G3 has no endpoint zoom displacement. These are net endpoint motions;
they do not establish whether an intervening group reverses direction. [R1, zoomMovement][R1]

The first-order quantities below come from the actual transcribed surfaces, independently evaluated by sequential
height/reduced-angle propagation and an ABCD matrix product. BFD is measured from L9's rear vertex to Gaussian focus.
The authored rear spacing is instead the patent's last-vertex-to-image-plane distance. Track uses the first vertex and
that retained image plane, not the camera housing or mount. Numerical digits describe computational reproducibility,
not manufacturing accuracy. [P1, Table 1][P1]; [R1]

| Quantity; infinity endpoint prescription | Wide | Long |
| --- | --- | --- |
| Computed EFL (mm) | 8.239898 | 23.299954 |
| Computed Gaussian BFD (mm) | 5.326479 | 5.326246 |
| Authored rear spacing (mm) | 5.32665 | 5.32665 |
| Gaussian BFD minus authored spacing (µm) | -0.171112 | -0.403966 |
| First vertex to authored image plane (mm) | 52.21245 | 52.10387 |
| Track / EFL | 6.336541 | 2.236222 |
| Gaussian BFD / EFL | 0.646425 | 0.228595 |

The printed image plane is retained despite the small Gaussian-focus residuals. A source-precision sensitivity check,
perturbing printed radii, fixed spacings and d-line indices by half of their last displayed decimal, gives first-order BFD
envelopes larger than the 0.171 µm wide and 0.404 µm long residuals. The residuals are therefore consistent with the
precision of the printed prescription, although this does not recover Nikon's unrounded design. A calculation at the
retained plane and one at Gaussian best focus still describe distinct reference planes. [R1, firstOrder and BFD comparisons][R1]

Neither endpoint is telephoto under the track/EFL criterion, and neither is retrofocus under the BFD/EFL criterion.
Here “long” or “tele” denotes a zoom endpoint, not one of those architectural classifications. [R1, classification][R1]

Only the endpoint spacings are published. Linear interpolation is not a published cam law and does not reconstruct
continuous parfocal zooming. At the midpoint of the authored interpolation, the computed EFL is 13.798288 mm and
Gaussian focus is 2.444301 mm ahead of the authored image plane. Intermediate spacing configurations therefore illustrate
movement between the source states; they must not be presented as verified production imaging states. [R1, interpolationDiagnostics][R1]

For the refracting surfaces, the Petzval contribution is calculated as $\Phi_i/(n_i n'_i)$, where
$\Phi_i=(n'_i-n_i)/R_i$. The complete sum is +0.009360472318 mm⁻¹. The actual glass-to-glass indices are used at the
cemented interface. This invariant is not a measurement of the final tangential and sagittal image surfaces and does
not, by itself, establish a flat field or a particular astigmatism correction. [R1, petzvalBySurface][R1]

There is no scaling of the prescription. Lens semi-diameters are half the published effective diameters; the inferred
stop size is treated separately below. No separate filter plate, sensor cover plate, inactive plane or mechanical
component is added, and no air-equivalent rear-spacing substitution is made. The thin-film concept is not represented
by a fabricated refractive layer. [P1, Table 1][P1]

The numerical geometry checks use those apertures and the authored states. Sampled meridional Snell traces provide a
limited ray-clearance check, including intermediate interpolation samples; they do not establish full-field, full-pupil
or skew-ray performance. No production-render trimming result or physical barrel clearance is implied. [R1, geometry][R1]

## Element-by-Element Analysis

All quoted element focal lengths are isolated thick-element values in air, calculated from the published vertex radii,
center thickness and d-line index. For a cemented element, this intentionally differs from its behavior with the adjoining
glass in place. Refractive index and Abbe coordinates retain the patent's d-line reference; the data's `indexReference`
is `d`. Shape labels follow the signed radii rather than an assumed design family. [P1, Table 1][P1]; [R1]

### L1 — Biconvex Positive

nd = 1.64000, νd = 60.21. Glass: 640602 class. f = +67.871200 mm.

L1 is the positive entrance component of the net-negative first group. Its opposite-sign radii identify a biconvex
form rather than a meniscus. The subsequent negative components therefore determine the group's overall sign despite
its positive lead element. The patent describes this arrangement explicitly; assigning L1 a unique coma or spherical-aberration contribution would require more than its isolated focal length. [P1, p.5, ¶0034; Table 1][P1]

Its front and rear faces do not satisfy the patent's chief-ray angular condition together with the other coating
requirements. The design consequently does not select the first element merely because its external faces are readily
accessible. The coating decision depends on the ray geometry within the complete system. [P1, p.6, correspondence table][P1]

### L2 — Negative Meniscus

nd = 1.83500, νd = 42.97. Glass: TAFD5 — coordinate-compatible spectral proxy (supplier unresolved). f = -11.727000 mm.

Both surfaces have positive radii, with the rear surface more strongly curved. The resulting negative meniscus
supplies the larger-magnitude negative isolated power within G1. This is a statement about the thick element surrounded
by air, not a decomposition of the assembled group's aberrations. Its high refractive index is retained exactly as
published, without substituting the nearby coordinates of a modern catalog candidate. [P1, Table 1][P1]; [R1]

Although its rear-face ray-angle entries satisfy the angular inequalities, that face fails the diameter-to-radius
condition. That distinction is important: a surface can have sufficiently small tabulated ray angles and still be an
unsuitable coating site under the patent's combined criteria. [P1, p.6, correspondence table][P1]

### L3 — Biconcave Negative

nd = 1.51680, νd = 64.20. Glass: 517642 class (BK7 family). f = -39.999168 mm.

The biconcave L3 supplies the second negative component of G1. Its lower refractive index and higher Abbe number
than the neighboring positive L4 establish a different primary-dispersion coordinate; they do not by themselves prove a
particular secondary-spectrum balance. No partial-dispersion data accompanies this element in the selected prescription.
[P1, Table 1][P1]

L3 is especially important to the actual patent disclosure. Both faces meet the listed coating conditions, and ¶0039
favors its rear face within the first group. Paragraph 0043 then states that Example 1 uses an interference coating on
L3R2, corresponding to modeled surface 6. This is an explicit selection within the patent embodiment, not evidence that
every candidate face is coated or that the production camera uses that same coated face. [P1, pp.6–7, ¶0038–0043][P1]

### L4 — Positive Meniscus

nd = 1.84666, νd = 23.78. Glass: 847238 class (SF57 / S-TIH53 / FDS90 / H-ZF52 family). f = +26.881268 mm.

L4 is the positive meniscus completing G1. It has the same published material coordinates as L7 but a different
shape and position. This shared glass coordinate does not make their optical roles interchangeable: L4 is an air-spaced
positive element, whereas L7 is the negative member of a cemented pair. [P1, Table 1 and Fig.1][P1]

Its rear face borders D1, the gap that contracts as the lens moves toward the long endpoint. L4R2 meets all three coating
conditions; L4R1 does not meet the diameter-to-radius condition. The patent therefore distinguishes the two faces of the
same element instead of treating a glass type as the criterion for coating suitability. [P1, p.6, correspondence table][P1]

### L5 — Biconvex Positive (1x Asph)

nd = 1.60602, νd = 57.44. Glass: BACD2 — coordinate-compatible spectral proxy (supplier unresolved). f = +17.495567 mm.

L5 begins the positive second group immediately behind the stop. Its front surface, labeled 10A in the data,
is the only geometric asphere in the selected example. The rear surface is spherical. The asphere changes the finite-height shape while retaining the published vertex radius and the element's paraxial power. [P1, pp.5–6, ¶0036 and Table 1][P1]; [R1]

Both L5 faces qualify as interference-coating candidates in the correspondence table. If the coating is placed in G2,
¶0040 prefers the rear face on the stated geometric and chief-ray criteria. That preference is distinct from the
aspheric correction on the front face and from the coating actually selected for Example 1. The prescription does not
identify an asphere manufacturing method. [P1, p.6, ¶0040; p.7, ¶0043][P1]

### L6 — Positive Meniscus

nd = 1.67790, νd = 55.52. Glass: 678555 class. f = +16.051973 mm.

The quoted positive focal length is for L6 isolated in air. In the assembled lens, its rear boundary is not a
glass-to-air surface: it joins L7 directly. Surface 13 consequently carries L7's refractive index and element identifier.
The actual interface power depends on the difference between the two glass indices, rather than on either index's
difference from air. [P1, Table 1][P1]; [R1]

The cemented pair is identified as D1 in the element annotations. That annotation is unrelated to the patent's D1
variable air spacing before the stop. The shared label does not signify a moving cement layer or an additional optical
component. No synthetic cement medium is inserted into the prescription.

### L7 — Negative Meniscus

nd = 1.84666, νd = 23.78. Glass: 847238 class (SF57 / S-TIH53 / FDS90 / H-ZF52 family). f = -9.138246 mm.

L7 completes the cemented pair and supplies negative isolated power. Its stronger rear curvature distinguishes
its meniscus from the positive L6. Accounting for the actual shared interface and both center thicknesses, L6/L7 has a
net focal length of -46.621029 mm. The compound is therefore negative even though the complete G2 assembly is positive.
Adding the isolated element powers is not a substitute for tracing the cemented assembly. [P1, Table 1][P1]; [R1]

The interface has no air-side B or C entry in the patent's correspondence table. Those dashes are not zero-angle
measurements. The exposed rear face also fails the combined coating requirements, so the compound's material contrast
should not be confused with a preferred thin-film-filter location. [P1, p.6, correspondence table][P1]

### L8 — Weak Biconvex Positive

nd = 1.64000, νd = 60.21. Glass: 640602 class. f = +56.527424 mm.

L8 is the weak positive component ending G2. Its front face is weakly curved but not planar; the finite source
radius is retained. The rear face opens into D2, which expands toward the long endpoint. Together with L5 and the
negative cemented compound, it contributes to the second group's positive net power. [P1, Table 1 and Fig.1][P1]; [R1]

L8 shares its glass coordinates with L1. Neither that identity nor the sign of its power establishes a separate
field-flattening or chromatic-correction function. Both of its faces exceed the published chief-ray angular limit,
which excludes them from the six faces meeting all of the coating conditions. [P1, p.6, correspondence table][P1]

### L9 — Biconvex Positive

nd = 1.48749, νd = 70.45. Glass: 487705 / FC5-class. f = +24.493885 mm.

L9 alone forms positive G3. It remains at the same image-referenced axial position in the published infinity
zoom endpoints because its thickness and rear spacing are unchanged. This fixed endpoint position does not imply that
it remains stationary during production focusing. [P1, Table 1 and Fig.1][P1]; [R1]

Nikon attributes CCD-oriented pupil placement and compensation of spherical aberration from the preceding groups to
the production rear group. Those are manufacturer explanations of the architecture, not independently isolated
aberration contributions established by this paraxial model. [M1, §V][M1]

The patent identifies L9R2 as another suitable interference-coating surface. Its discussion connects the rear optical
geometry with a longer exit-pupil distance for a microlens-equipped sensor; it does not establish exact telecentricity.
[P1, p.6, ¶0041][P1]

## Glass Identification and Selection

Seven distinct nd/νd coordinates serve the nine elements. The identification strings below reproduce the data file;
class and family wording is intentional. None of these labels establishes the supplier or production melt.
[P1, Table 1][P1]; [R1, element and glass-coordinate checks][R1]

| Elements | nd | νd | Authored glass identification |
| --- | --- | --- | --- |
| L1, L8 | 1.64000 | 60.21 | 640602 class |
| L2 | 1.83500 | 42.97 | TAFD5 — coordinate-compatible spectral proxy (supplier unresolved) |
| L3 | 1.51680 | 64.20 | 517642 class (BK7 family) |
| L4, L7 | 1.84666 | 23.78 | 847238 class (SF57 / S-TIH53 / FDS90 / H-ZF52 family) |
| L5 | 1.60602 | 57.44 | BACD2 — coordinate-compatible spectral proxy (supplier unresolved) |
| L6 | 1.67790 | 55.52 | 678555 class |
| L9 | 1.48749 | 70.45 | 487705 / FC5-class |

OHARA's catalog provides a coordinate-compatible S-TIH53 candidate for L4/L7: nd = 1.84666 and νd = 23.78, with zero
residual at the printed precision. Its S-LAH55V entry is near L2's coordinates, at nd = 1.83481 and νd = 42.73; candidate minus
patent residuals are −0.00019 and −0.24. Neither comparison proves material identity. L2 uses the existing TAFD5 curve as a coordinate-compatible spectral proxy; this does not identify the production supplier. [C1, printed pp.40 and 48; PDF pp.42 and 50][C1]; [R1, catalogComparisons][R1]

The catalog's cross-reference tables also provide family context for the crown and dense-flint labels. Such tables do
not establish identical dispersion curves or retrospectively identify Nikon's supplier. S- and L-prefixed OHARA families
are not interchangeable names, and the aspheric shape of L5 does not identify a molding-glass family.
[C1, comparative tables, printed pp.12–15][C1]

The repeated coordinates link L1 with L8 and L4 with L7, while L6 and L7 retain distinct media at their cemented boundary.
These relationships support comparisons of primary dispersion, but not assignment of a unique chromatic-correction
contribution to any element. L5 uses the coefficient-backed HOYA BACD2 curve as a qualified spectral proxy (Δnd = +0.001365, Δνd = −0.72), within the shared compatibility guard; its production glass remains unidentified.
[P1, Table 1][P1]

There are no authored `nC`, `nF`, `ng` or `dPgF` values. Any catalog dispersion curve selected from a class-compatible
label is an equivalent-material proxy, not a measured property of the patent melt. Where no defensible catalog curve
resolves, Abbe-only dispersion is correspondingly limited. No APO or anomalous-partial-dispersion performance is claimed,
and the wavelength-selective coating is not evidence of apochromatic refractive correction.

## Focus Mechanism

For the production camera, Nikon identifies rear-group focusing by G3 using a stepping motor and electronic cam.
The manufacturer reports macro working distances of 0.04 m at the wide end and 0.30 m at the long end, measured from
the lens. These are not object-to-image distances. [M1, §V][M1]; [M2, p.144][M2]

The patent's selected numerical example publishes infinity zoom endpoints but no finite-conjugate G3 positions. The
model status is therefore `NO_INTERNAL_RECONSTRUCTION`. The known identity of the moving group is not a numerical focus
law: no missing displacement is inferred from the production working distances alone. The rear group's invariant
position in the endpoint table applies to zoom at infinity, not to all production focusing operations. [P1, Table 1][P1]

Every authored focus vector repeats its infinity spacing. `finiteConjugates` is absent. The required `closeFocusM`
scalar is retained only as a descriptive wide-end working-distance label; it is not a certified optical conjugate.
`zoomCloseFocusM` is omitted because converting the manufacturer's lens-referenced distances into image-referenced
endpoints would require information not established by these sources.

Finite-distance magnification, focus breathing, effective aperture at macro distances and close-focus image quality
are consequently not predictions supported by this prescription. In particular, moving a focus control without changing
the optical spacings does not reproduce the manufacturer's macro mechanism.

## Aspherical Surface

L5's object-side face is source surface 10, represented as `10A`. The patent uses the following equation, with radial
height $h$ and sag $z$ measured in millimeters: [P1, p.5, ¶0036; p.6, Table 1][P1]

$$
z(h)=\frac{h^2/R}{1+\sqrt{1-K_{\mathrm{pat}}(h/R)^2}}
+C_4h^4+C_6h^6+C_8h^8+C_{10}h^{10}.
$$

Its tabulated $K_{\mathrm{pat}}=1.6443$ is not the standard conic constant. The implemented denominator is
$1+\sqrt{1-(1+K)(h/R)^2}$, so $K=K_{\mathrm{pat}}-1=0.6443$. The vertex radius remains 15.6122 mm. The published
polynomial values are copied without rescaling; $A_p=C_p$ in this unscaled model. [P1, ¶0036 and Table 1][P1]; [R1]

| Coefficient | Value in mm^(1−p) |
| --- | --- |
| A4 | `-1.04300e-04` |
| A6 | `3.26660e-07` |
| A8 | `-6.34410e-08` |
| A10 | `1.02560e-09` |

The source's quadratic polynomial term is zero. The data's zero A12 and A14 values are required schema padding, not
additional published nonzero terms. No odd-order term or diffractive phase polynomial is introduced.
[P1, Table 1, aspherical coefficients][P1]

At the source-backed semi-diameter of 3.50 mm, the aspheric sag is 0.384583274 mm; the same-radius sphere has a sag of
0.397378646 mm. The resulting departure is -12.795372 µm. The comparison includes the conic contribution as well as all
published nonzero polynomial terms. It is not simply the fourth-order term evaluated at the rim. [R1, asphere][R1]

The smaller peripheral sag and shallower computed rim slope describe the local geometric change from that sphere.
They do not isolate an entire-system spherical-aberration contribution or prove a manufacturing process. The real conic
domain and the applicable conic-height and rim-slope limits are satisfied at the authored aperture. [R1, geometry][R1]

## Aperture and Pupil Model

The patent labels the stop as S in Figure 1 and lists its effective diameter as 6.70 mm. The data use the single label
`STO` and represent the source's flat-radius notation by a numerically flat surface. The published effective diameter is
not automatically promoted to an independently measured physical iris diameter. [P1, Table 1 and Fig.1][P1]

The selected `from-nominal-fno` model infers a physical iris at each published zoom endpoint from that station's
source f-number and the paraxial pupil transfer. The relation is $N=f'/D_{\mathrm{EP}}$, with $D_{\mathrm{EP}}$ the
entrance-pupil diameter. The resulting comparison is: [R1, firstOrder and aperture][R1]

| Quantity | Wide | Long |
| --- | --- | --- |
| Calibrated model f-number | 2.89 | 5.20 |
| Inferred stop diameter (mm) | 6.668499 | 6.562240 |
| Entrance-pupil diameter (mm) | 2.851176 | 4.480760 |
| F-number with fixed 6.70 mm stop | 2.876412 | 5.093082 |

Agreement with the source f-numbers is calibration, not independent verification of unpublished diaphragm dimensions.
The fixed-stop row is a separate hypothetical calculation using the published effective diameter as a physical iris.
Its disagreement remains visible; the model does not claim to have explained the patent's aperture convention.

The entrance pupil is the image of the stop through the front optical group, not the opening itself. The larger
entrance-pupil diameter at the long endpoint therefore need not correspond to a larger physical iris. The calculated
endpoint iris schedule and its interpolation describe the chosen model, not a published mechanical schedule. [R1]

The production manual separately specifies an exposure diaphragm with two steps, including f/2.8 and f/7.6 at the wide
end. The data's aperture quick-select values and maximum control value do not reconstruct that production exposure
mechanism. They delimit the modeled aperture range; the iris inferred from the source endpoint f-numbers should not be
read as a parts specification. [M2, p.145][M2]

## Interference-Coating Conditions

The patent seeks wavelength selection without adding a separate filter substrate to the lens train. It explains that
an interference coating's spectral behavior depends on ray incidence and that excessive curvature or angular variation
can produce spatially varying transmission. Its conditions select suitable existing lens faces rather than establish
a general image-quality score for the zoom. [P1, pp.4–5, ¶0017–0029][P1]

The conditions are

$$
0<|\phi/R|<0.8,\qquad 0^\circ\leq |B|<13^\circ,\qquad 0^\circ\leq |C|<18^\circ.
$$

Here $\phi$ is the effective **diameter**, not semi-diameter and not the surface power used in the Petzval sum. $B$ is
the chief-ray angle to the optical axis on the air side of the surface; $C$ is the corresponding on-axis marginal-ray
angle. These angles are not defined as angles to the local surface normal. The curvature condition separately addresses
the surface shape. [P1, ¶0021–0029][P1]

The correspondence table reports the larger angular value from the wide and long endpoints. The following six faces
meet all three inequalities. The diameter/radius column is recomputed from the actual model apertures and radii; the
angle columns retain the patent's source angle maxima. [P1, p.6, correspondence table and ¶0038][P1]; [R1]

| Patent face | Model surface | Computed φ / abs(R) | Published max abs(B) (°) | Published max abs(C) (°) |
| --- | --- | --- | --- | --- |
| L3 R1 | 5 | 0.114436 | 9.468 | 9.432 |
| L3 R2 | 6 | 0.427915 | 6.238 | 13.618 |
| L4 R2 | 8 | 0.308314 | 12.745 | 6.931 |
| L5 R1 | 10A | 0.448367 | 12.745 | 6.931 |
| L5 R2 | 11 | 0.218316 | 11.922 | 6.752 |
| L9 R2 | 18 | 0.515709 | 7.246 | 10.001 |

Those angle maxima are not independently reproduced as the patent's particular ray set. Their transcribed values are
inequality-checked, whereas the separate Snell containment samples serve a different purpose. Passing those samples does
not turn the published B/C values into independently calculated results.

Paragraphs 0039–0041 discuss preferred candidate locations in the different groups. Paragraph 0043 is more specific:
Example 1 applies the interference coating to L3R2, model surface 6. The eligible-face list must therefore not be read as
six simultaneously coated faces. The patent also discusses spectral-filter alternatives, but no numerical multilayer
stack is supplied for reproduction here. [P1, pp.6–7, ¶0038–0043][P1]

The model retains the underlying refractive surface and its glass-to-air transition. It does not predict wavelength-dependent coating transmission, angular passband shift, coating losses or a production sensor-stack response. This
limitation is separate from the absence of exact glass dispersion data and from the unconfirmed production attribution.

## Sources

[P1] Japan Patent Office, **JP 2003-177313 A**, *光学系*, published 2003-06-27. Original supplied publication,
`JP_2003177313_A.pdf`. Cover: bibliographic data. Pages 4–5: ¶0017–0036, coating conditions and asphere convention.
Page 6: Table 1, Example 1 prescription, coefficient table, endpoint spacings and condition correspondence.
Pages 6–7: ¶0038–0043, eligible and selected coating faces. Page 12: Figure 1.

[P2] **US 2005/0030636 A1**, *Optical system with wavelength selecting device*, bibliographic record. Used for the Latin-script forms of the inventor
names only; no numerical example from this family publication replaces the Japanese source.

[M1] Nikon Imaging, Kouichi Ohshita, *NIKKOR — The Thousand and One Nights*, No.22, “COOLPIX 4300.”
Sections I and V: release timing, group arrangement and production focusing. Accessed 2026-10-01.

[M2] Nikon, *The Nikon Guide to Digital Photography with the COOLPIX 4300*, specifications, printed pp.144–145
(PDF p.73). Production focal length, aperture, element/group count, sensor type and lens-referenced focusing distances.
Accessed 2026-10-01.

[C1] OHARA, *Optical Glass Pocket Catalog*, May 2023. Comparative tables, printed pp.12–15; S-TIH53, printed p.40
(PDF p.42); S-LAH55V, printed p.48 (PDF p.50). These are candidate/class comparisons, not production-supplier evidence.
Accessed 2026-10-01.

[R1] Companion numerical record, `NikonZoomNikkor824mmf2849Coolpix4300.results.json`, calculated from the associated
`.data.ts` by `NikonZoomNikkor824mmf2849Coolpix4300.verify.py`. Relevant sections are `implementedModel.firstOrder`,
`elementStandalonePowers`, `cementedL6L7Net`, `functionalGroups`, `petzvalBySurface`, `zoomMovement`, `asphere`, `geometry`,
and `authoringFacts`. The calculations distinguish raw source comparisons from the implemented aperture and state model.

[P1]: JP_2003177313_A.pdf
[P2]: https://patents.google.com/patent/US20050030636A1/en
[M1]: https://imaging.nikon.com/imaging/information/story/0022/index.html
[M2]: https://cdn-10.nikon-cdn.com/pdf/manuals/coolpix/CP4300man.pdf
[C1]: https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf
[R1]: NikonZoomNikkor824mmf2849Coolpix4300.results.json


## Integration audit

The October 2, 2026 UTC audit reviewed the exact local patent figure, checked optical rims against edge and gap constraints, and reviewed compatible catalog dispersion. The sibling audit log records retained dimensions, changes and unresolved source limits. Catalog curves are qualified spectral proxies, with production supplier/melt identity unconfirmed.
