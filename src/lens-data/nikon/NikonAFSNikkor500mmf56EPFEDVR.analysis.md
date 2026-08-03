# Nikon AF-S NIKKOR 500mm f/5.6E PF ED VR — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2018-017857 A\
**Application:** JP 2016-147248\
**Filed / priority:** July 27, 2016\
**Published:** February 1, 2018\
**Inventors:** Tetsushi Miwa; Hiroshi Yabumoto\
**Applicant:** Nikon Corporation\
**Title:** Optical system, optical instrument, and optical system manufacturing method\
**Embodiment analyzed:** Example 2 (第2実施例; Figures 3–4, Tables 5–8)

The data file transcribes the unscaled Example 2 prescription. Its identification with the production AF-S NIKKOR
500mm f/5.6E PF ED VR rests on several independent correspondences:

1. Both have 19 physical elements in 11 groups, one Phase Fresnel element, and three ED elements.
2. The patent's optical order matches Nikon's construction diagram: three large front elements, the fourth-position PF
   element, a small two-element negative focus group, and three ED elements in the rear relay/VR section.
3. Example 2 gives $f=489.70405$ mm, F/5.75019, a 5.02124° full field, and a 21.60 mm maximum image height. Those are
   the design values expected behind a marketed 500 mm f/5.6 full-frame lens with a published 5° field.
4. The close row uses an object distance of 2720 mm from surface 1. Adding the 279.324 mm optical track gives almost
   exactly Nikon's 3.0 m focal-plane minimum focus distance; its magnification is −0.18012 versus Nikon's 0.18×.
5. The patent includes a negative internal-focus group ahead of a transverse vibration-reduction group. Nikon describes
   the product as internally focusing and VR-equipped.
6. The July 2016 filing predates Nikon's August 2018 announcement by enough time to represent a production-era design.

The match is strong but not claimed as a factory prescription. The patent is preserved at 489.704 mm rather than scaled
to exactly 500 mm, and the source does not publish clear apertures. Semi-diameters are therefore model estimates checked
against Figure 3, the traced f-number pupil, physical edge thickness, and the 106 mm product barrel diameter.

The patent prints an unlabeled flat air-air plane as surface 20. It has no power and is drawn as a short internal bar,
but the source does not say whether it is a baffle, flare cutter, or bookkeeping plane. The runtime prescription omits
it instead of inventing a blocker and adds its 0.5 mm spacing to the surface-19 air gap. No filter or sensor cover plate
is present in Example 2.

## Optical Architecture

This is a compact positive-negative-negative telephoto system. The fixed positive first group G1 carries the bulk of
the 500 mm-class power. A weak negative cemented group G2 performs internal focusing. The rear group G3 is negative
overall and contains a three-element VR subgroup plus three cemented correction pairs.

The optical track is 279.324 mm, only 0.5704 times the patent focal length. That compression is the central architectural
achievement: the PF element supplies a weak positive power with reverse chromatic dispersion, allowing the refractive
groups to remain substantially shorter than a conventional 500 mm objective while retaining chromatic correction.

The physical design has 19 elements in 11 air-separated groups. The data model contains 21 medium entries because the
fourth physical element L14 consists of a glass substrate followed by two separately tabulated bonded PF materials.
Those thin media are required for the correct refractive transitions but do not inflate the product element count.

## Element-by-Element Analysis

### L11 — Front Positive Meniscus

nd = 1.48749, νd = 70.31. Glass: J-FK5 (Hikari) coordinate match. f = +275.70 mm.

L11 is the largest front collector. Its weak positive meniscus bends the parallel entrance bundle gradually, limiting
spherical aberration and edge thickness at the approximately 100 mm front clear diameter. The high Abbe number reduces
the longitudinal color introduced at this high marginal-ray-height location.

### L12 + L13 — Nearly Afocal Front Cemented Pair C11

L12: nd = 1.48749, νd = 70.31, J-FK5 coordinate match, f = +271.24 mm.\
L13: nd = 1.61266, νd = 44.46, unmatched 613445 anomalous-dispersion class, f = −192.76 mm.

The biconvex L12 and biconcave L13 pair has a computed combined focal length near +4389 mm. It therefore contributes
little net first-order power; its purpose is chromatic and higher-order balancing between the large front collector and
the PF assembly. The negative member's patent θgF = 0.5640 lies below the normal-line estimate for its Abbe number,
which provides a secondary-spectrum degree of freedom that an ordinary catalog flint substitution would not preserve.

### L14 + GDa + GDb — Bonded Phase Fresnel Element PF

L14 substrate: nd = 1.51680, νd = 64.13, J-BK7A class.\
GDa: nd = 1.52780, νd = 33.41, unmatched bonded PF material A, thickness 0.2 mm.\
GDb: nd = 1.55710, νd = 49.74, unmatched bonded PF material B, thickness 0.3 mm.\
Composite refractive-plus-phase f = +347.19 mm; refractive-only f = +357.40 mm.

The substrate is a positive meniscus. Its two bonded materials share the 159.3794 mm base radius, so their conventional
surface powers are small. Surface 8 adds the separately authored radial phase gradient. Nikon's product literature says
newly developed PF materials were used to suppress PF flare; because no public catalog identity is established, the
data retains both as `Unmatched` rather than substituting visually similar optical glasses.

### L15 + L16 — Rear G1 Cemented Pair C12

L15: nd = 1.88300, νd = 40.66, S-LAH58 class, f = +503.34 mm.\
L16: nd = 1.48749, νd = 70.31, J-FK5 coordinate match, f = +121.24 mm.

This high-index/low-dispersion positive pair closes G1. L16 supplies the stronger convergence, while L15's high index
shapes the ray bundle without demanding a steep outer surface. The complete fixed group computes to +158.739 mm,
matching the patent's rounded +158.7 mm group focal length.

### L21 + L22 — Negative Internal-Focus Group G2

L21: nd = 1.64769, νd = 33.73, S-TIM22/SF2 class, f = +359.22 mm.\
L22: nd = 1.71999, νd = 50.27, J-LAK10 (Hikari), f = −87.82 mm.

The weak positive meniscus and stronger biconcave member form a −166.460 mm cemented group, matching the patent's
−166.5 mm. Moving a small negative group changes conjugate with much less travel and mass than moving the large front
assembly. G2 travels toward the image as focus moves from infinity to 3.0 m.

### L31 + L32 — Front Rear-Relay Pair C31

L31: nd = 1.81600, νd = 46.59, TAF5/S-LAH59 class, f = −71.67 mm.\
L32: nd = 1.51823, νd = 58.82, J-K3 (Hikari), f = +49.69 mm.

This pair sits immediately behind the stop and is weakly negative as a cemented unit. Its negative-positive ordering
widens the ray bundle into the VR section and begins the rear group's chromatic correction without making the physical
stop excessively large.

### L33 + L34 + L35 — Vibration-Reduction Subgroup

L33: nd = 1.62004, νd = 36.40, F2 class, f = +86.82 mm.\
L34: nd = 1.49782, νd = 82.57, J-FKH1 ED, f = −49.15 mm.\
L35: nd = 1.59319, νd = 67.90, J-PSKH1 ED, f = −62.04 mm.

L33/L34 form a weak negative cemented pair; L35 follows as a negative meniscus. Together they form the transversely
movable VR subgroup identified in the patent diagram. Two of the production lens's three highlighted ED elements are
here. Their high Abbe numbers reduce color introduced when the group is decentered for stabilization.

The current LensVisualizer movement model does not decenter optical surfaces for full aberration analysis. The
centered prescription is exact for the nominal state; the VR identity is documented rather than simulated as a user
control.

### L36 + L37 — First Rear Correction Pair CL31

L36: nd = 1.57501, νd = 41.51, S-TIL27 (OHARA), f = +54.90 mm.\
L37: nd = 1.49782, νd = 82.57, J-FKH1 ED, f = −61.79 mm.

This net-positive pair is the third production-highlighted ED location. Pairing positive ordinary-dispersion L36 with
negative high-νd L37 is unusual compared with a classical positive-crown/negative-flint achromat; it is part of the
rear relay's distributed secondary-spectrum correction rather than a standalone achromat.

### L38 + L39 — Second Rear Correction Pair CL32

L38: nd = 1.81600, νd = 46.59, TAF5/S-LAH59 class, f = −41.26 mm.\
L39: nd = 1.61266, νd = 44.46, unmatched 613445 class, f = +45.13 mm.

The pair is net negative (−55.39 mm). Its similar Abbe numbers show that its main role is monochromatic power and
field shaping; the opposing patent partial-dispersion deviations still allow some secondary-spectrum tuning.

### L310 + L311 — Final Correction Pair CL33

L310: nd = 1.58144, νd = 40.98, E-FL5 class, f = +1847.11 mm.\
L311: nd = 1.80809, νd = 22.74, J-SFH1 (Hikari), f = −47.15 mm.

The very weak positive L310 and strong high-dispersion negative L311 form a net-positive pair in the assembled relay.
L311's θgF = 0.6288 is strongly above the normal-line estimate, giving the designer a final secondary-spectrum control
near the image side. The rear surface then leaves a 64.397 mm air-equivalent back-focus gap.

## Glass Identification and Selection

The patent publishes nd, νd, and θgF but not vendor names. Catalog labels below indicate exact or close coordinate
classes, not proof of Nikon's melt supplier. The two PF media and the repeated 613445 coordinate remain explicitly
unmatched.

| Patent coordinate (nd / νd / θgF) | Elements | Data-file classification |
|---|---|---|
| 1.487490 / 70.31 / 0.5291 | L11, L12, L16 | J-FK5 coordinate match (Hikari) |
| 1.612660 / 44.46 / 0.5640 | L13, L39 | Unmatched 613445 anomalous-dispersion class |
| 1.516800 / 64.13 / 0.5356 | L14 substrate | J-BK7A class |
| 1.527800 / 33.41 / 0.6329 | GDa | Unmatched bonded PF material A |
| 1.557100 / 49.74 / 0.5625 | GDb | Unmatched bonded PF material B |
| 1.883000 / 40.66 / 0.5669 | L15 | S-LAH58 / TAFD30 class |
| 1.647690 / 33.73 / 0.5931 | L21 | S-TIM22 / SF2 class |
| 1.719990 / 50.27 / 0.5527 | L22 | J-LAK10 coordinate match |
| 1.816000 / 46.59 / 0.5567 | L31, L38 | TAF5 / S-LAH59 class |
| 1.518230 / 58.82 / 0.5449 | L32 | J-K3 coordinate match |
| 1.620040 / 36.40 / 0.5878 | L33 | F2 class |
| 1.497820 / 82.57 / 0.5386 | L34, L37 | J-FKH1 coordinate match — ED |
| 1.593190 / 67.90 / 0.5440 | L35 | J-PSKH1 coordinate match — ED |
| 1.575010 / 41.51 / 0.5765 | L36 | S-TIL27 coordinate match |
| 1.581440 / 40.98 / 0.5763 | L310 | E-FL5 class |
| 1.808090 / 22.74 / 0.6288 | L311 | J-SFH1 coordinate match |

Every element retains the patent's θgF as structured ΔPgF data. Catalog-compatible entries use the catalog Sellmeier
curve for C/d/F/g tracing; unmatched entries fall back to the patent nd/νd/θgF approximation. The weakest-link spectral
quality is therefore Abbe-plus-partial-dispersion, not a measured full dispersion curve.

## Focus Mechanism

G1 and G3 remain fixed while negative G2 translates toward the image. The patent publishes three focus states:

| State | Object distance from S1 | Magnification β | D1 after G1 | D2 after G2 | BF after S34 |
|---|---:|---:|---:|---:|---:|
| Infinity | ∞ | — | 22.24696 mm | 32.25305 mm | 64.39657 mm |
| Intermediate | 14704.229 mm | −0.03333 | 25.12411 mm | 29.35590 mm | 64.40466 mm |
| Near | 2720.000 mm | −0.18012 | 39.16215 mm | 15.39786 mm | 64.43514 mm |

The runtime focus slider interpolates the infinity and near endpoints. G2 moves 16.91519 mm image-ward. The adjacent
gap sum changes by 0.06000 mm and BF changes by 0.03857 mm, so the tabulated optimization is not a perfectly rigid
single translation. Those small source changes are preserved instead of silently forced into constant track.

## Diffractive Phase Surface

Surface 8 is spherical in geometry and carries the optical-path polynomial

$$
W(h)=C_2h^2+C_4h^4,
$$

with $C_2=-4.25304\times10^{-5}\ \mathrm{mm}^{-1}$,
$C_4=3.00000\times10^{-10}\ \mathrm{mm}^{-3}$, reference wavelength 587.6 nm, and diffraction order +1. It is not an
asphere: its sag, normal, rim slope, and drawn outline remain those of the 159.3794 mm spherical interface.

The paraxial phase power is

$$
\phi_D(\lambda,m)=-2C_2m\frac{\lambda}{\lambda_0}.
$$

At the design wavelength this gives $f_{PF}=11756.30$ mm. Removing only this phase interaction while retaining all
three PF-stack media changes the computed EFL from 489.709 mm to 538.941 mm. The phase surface therefore supplies
49.231 mm of the system's focal-length correction and must be part of both first-order and exact tracing.

At the inferred axial marginal-ray height of 34.926 mm, the unwrapped optical path is −0.051434 mm and its reduced-angle
kick is −0.0029197. The quartic term contributes less than 1% of the signed path there but is retained exactly.

LensVisualizer geometrically traces the single authored diffraction order and its wavelength-scaled direction change.
It does not predict groove efficiency, energy in unwanted orders, PF flare, interference, diffraction-limited PSF/MTF,
or coating losses. Those require manufacturing data that neither the patent table nor Nikon's public specification
provides.

## Chromatic Correction Strategy

The PF surface's positive power grows with wavelength, opposing the usual refractive trend. This is the main axial-color
lever. It is supplemented by three rear ED elements (L34, L35, and L37) and by the patent's deliberate θgF choices in
the negative relay elements. The phase term and glass indices are evaluated independently at C, d, F, and g; replacing
the phase surface with a wavelength-independent thin lens would reverse this balance.

The model should not be called apochromatic from the available data. Several catalog curves are exact class matches,
but the two proprietary bonded materials and 613445 glass remain approximations outside their published nd/νd/θgF
coordinates.

## Image Stabilization

The patent identifies the L33–L35 block within G3 as the anti-vibration group. It moves with a component perpendicular
to the optical axis to compensate image motion. Nikon specifies 4 stops of VR and NORMAL/SPORT modes for the product,
but the patent example does not publish a decenter distance or actuator law. The centered optical state is modeled;
no unsupported transverse travel is invented.

## Conditional Expressions and Source Contradictions

Most patent conditions recompute within the stated rounding. Several printed Example 2 Table 8 values do not:

| Expression | Printed | Recomputed from the prescription | Assessment |
|---|---:|---:|---|
| f / fpf | 0.038 | 0.041655 | Direct numerical contradiction; both source inputs support recomputation |
| TL / f | 0.582 | 0.570394 | Recomputed value agrees with the patent's separate 0.57 entry |
| f1 / f | 0.315 | 0.324073 | Beyond ordinary three-decimal rounding |
| f1 / fpf | 0.012 | 0.013499 | Beyond ordinary three-decimal rounding |
| νd3p | 33.72 | 33.73 | Table-to-table 0.01 inconsistency |

Condition (2-6) is printed as 0.042 although the exact inputs give 0.638693; the same apparent typo recurs in sibling
examples. The data file preserves the prescription rather than altering radii or glass to force these condition rows.

## Verification Summary

An independent reduced-angle trace and an independently accumulated ABCD matrix agree at binary precision. With the
phase surface active they give EFL 489.709445 mm, BFD 64.398175 mm, and track 279.32418 mm, versus patent values
489.70405 mm, 64.39657 mm, and 279.32422 mm. The residuals are consistent with four-decimal source radii and gaps.

The three group focal lengths compute to +158.739 mm, −166.460 mm, and −108.483 mm against printed +158.7, −166.5,
and −108.5 mm. The reconstructed entrance-pupil semi-diameter is 42.582 mm, the physical stop semi-diameter is
11.610 mm, and the resulting f-number is exactly 5.75019 at source precision.

Production tests additionally pin the phase-on and phase-off focal lengths, all focus endpoints, the physical
19-element count versus 21 modeled media, and parity between the compatibility and prepared exact tracers at every
displayed chromatic channel.

## Sources

- [JP2018017857A — Google Patents](https://patents.google.com/patent/JP2018017857A/en), bibliographic record and
  searchable family text. Numeric transcription was checked against the original Japanese PDF, especially pages 20–22
  and Figure 3.
- [Nikon global product page](https://imaging.nikon.com/imaging/lineup/lens/f-mount/singlefocal/telephoto/af-s_500mmf_56e_pf_ed_vr/),
  construction, full-frame field, 19/11 count, special-element count, MFD, magnification, diaphragm, and VR details.
