## Patent Reference and Design Identification

**Patent:** US 2016/0341934 A1
**Application Number:** US 14/939,948
**Filed:** November 12, 2015
**Priority:** US 62/165,082, filed May 21, 2015
**Published:** November 24, 2016
**Inventor:** Romeo I. Mercado
**Applicant:** Apple Inc.
**Title:** CAMERA LENS SYSTEM
**Embodiment analyzed:** Example 11 (Example-H), Tables 11A–11B; aberration plots in Figures 25–26

The implemented prescription is the unscaled Example 11 design from US 2016/0341934 A1. Table 11A publishes a nominal
focal length of 4.10 mm, f/1.80, a 37.0° half field, and a 5.40 mm total track length. The final parsed model gives a
d-line paraxial effective focal length of 4.104338729 mm and a physical L1-front-to-image track of 5.397300 mm, both
within the precision of the printed source values. The patent defines total track length from the object-side vertex of
the first lens component to the image plane and defines focal length as effective focal length rather than front or rear
focal length (US 2016/0341934 A1, ¶¶0086, 0093–0095, 0260; Table 11A).

The association with the iPhone 7 wide camera is a research correlation rather than a manufacturer-confirmed patent
identification. Apple announced the iPhone 7 on September 7, 2016 and described its 12 MP wide camera as using optical
image stabilization, an f/1.8 aperture, and a six-element lens; Apple also states that the iPhone 7 Plus used the same
wide-angle camera. Apple's technical specification further lists a hybrid IR filter and autofocus with Focus Pixels.
Those product facts converge with Example 11's six refracting elements, f/1.80 prescription, source-listed IR filter,
4.10 mm design focal length, and 74° full field, but no Apple product document cited here identifies US 2016/0341934 A1
or Example 11 as the production prescription. The data therefore retains `lensMounts: ["fixed-lens-camera"]` and does
not assert a production sensor-format identifier or rescale the patent design.

The patent also discusses compact-camera applications around a 1/3-inch, 6.15 mm diagonal sensor and a roughly 6.2 mm
image circle, but that is a patent application context rather than evidence for the iPhone 7's production active sensor
dimensions (US 2016/0341934 A1, ¶0088). No production sensor size is inferred from it.

## Optical Architecture

Example 11 is a six-element, six-group, air-spaced refractive system. The implemented power sequence is positive,
negative, negative, positive, negative, negative. There are no cemented interfaces. All twelve refracting surfaces are
aspherical. The aperture stop is on the object side of the first element in the patent family drawing and description
(US 2016/0341934 A1, Fig. 10; ¶0192), and the source prescription carries a separate rear IR-filter plate before the
image plane.

The source stop bookkeeping is not a physical folded path. Table 11A lists a +0.3553 mm plane, the stop with a
−0.3553 mm distance, and a zero-distance dummy surface; ¶0259 identifies surface 3 as a dummy. Their signed axial loop
sums to zero. The LensVisualizer model therefore uses one ordinary `STO`, co-located immediately objectward of L1, and
removes the dummy/bookkeeping planes. Its semi-diameter, 1.140094091 mm, is calibrated from the final d-line EFL and the
published f/1.8 entrance-pupil relation. The resulting 2.280188183 mm modeled entrance-pupil diameter reproduces f/1.8
by construction and is not independent evidence of the manufactured diaphragm diameter (US 2016/0341934 A1, ¶¶0095,
0259, 0261).

The computed lens-only d-line back focal length from the L6 rear vertex is 0.651712192 mm. With the source 0.1500 mm,
nd = 1.516 rear IR plate included at its physical location, the paraxial focus lies 0.702767601 mm behind the L6 rear
vertex. The source image plane is 0.005667601 mm in front of that d-line paraxial focus. This small residual is retained
rather than forced to zero because the source combines rounded d-line refractive coordinates with a design/component
reference at 555 nm.

The physical track divided by the computed EFL is 1.315023, so the design is not classified as telephoto under the project
criterion `TL/EFL < 1`. The physical BFD with the rear plate divided by EFL is 0.171226, and the BFD is much shorter than
the EFL; it is therefore not classified as retrofocus under the criterion `BFD > EFL`. The final surface-by-surface
Petzval calculation, using `φ/(n·n′)` at each refracting surface, sums to +0.039236154 mm⁻¹.

## Element-by-Element Analysis

### L1 — Biconvex Positive, two aspherical surfaces

**nd = 1.545, νd = 55.9. Material: Unmatched patent-specified plastic. Source f = +3.42 mm at 555 nm; isolated d-line EFL = +3.43101 mm.**

L1 is the first and one of the two positive-power components. Its isolated d-line power is +0.291460 mm⁻¹. Because the
normalized stop is immediately in front of L1, this element receives the entrance-pupil bundle without intervening powered
optics. Both surfaces, 4A and 5A, are aspherical. The analysis does not assign a specific aberration to L1 independently;
the patent describes the radii, powers, aspheres, and spacings as a jointly optimized system (¶0264).

### L2 — Negative Meniscus, two aspherical surfaces

**nd = 1.651, νd = 21.5. Material: Unmatched patent-specified plastic. Source f = −7.39 mm at 555 nm; isolated d-line EFL = −7.44602 mm.**

L2 is a negative meniscus immediately behind the narrow L1–L2 air gap. Its isolated d-line power is −0.134300 mm⁻¹.
Its lower Abbe number distinguishes it from the higher-νd plastic used in L1, L4, and L5. The patent explicitly discusses
using substantially lower-Abbe plastic in negative components as part of the system's visible-spectrum chromatic strategy
(¶0263), but the prescription does not provide line indices or partial-dispersion data for this plastic. No anomalous-
dispersion or apochromatic behavior is therefore attributed to L2.

### L3 — Negative Meniscus, two aspherical surfaces

**nd = 1.651, νd = 21.5. Material: Unmatched patent-specified plastic. Source f = −21.98 mm at 555 nm; isolated d-line EFL = −22.15874 mm.**

L3 uses the same published plastic coordinates as L2 but is substantially weaker in isolated first-order power at
−0.045129 mm⁻¹. It remains a separate air-spaced group. Surfaces 8A and 9A are aspherical. The weaker standalone power
must not be confused with a statement about its in-situ contribution to any one aberration; the patent treats the complete
six-component system as the design unit.

### L4 — Positive Meniscus, two aspherical surfaces

**nd = 1.545, νd = 55.9. Material: Unmatched patent-specified plastic. Source f = +3.18 mm at 555 nm; isolated d-line EFL = +3.19509 mm.**

L4 is the second positive component and has the strongest isolated d-line power in the prescription,
+0.312980 mm⁻¹. The Figure 10 family description identifies the fourth component as a positive meniscus with a concave
object-side surface (US 2016/0341934 A1, ¶0194), consistent with the signed radii retained in Example 11. Both 10A and
11A are aspherical.

### L5 — Negative Meniscus, two aspherical surfaces

**nd = 1.545, νd = 55.9. Material: Unmatched patent-specified plastic. Source f = −7.94 mm at 555 nm; isolated d-line EFL = −7.95615 mm.**

L5 uses the same higher-Abbe plastic coordinates as L1 and L4 but has negative isolated power,
−0.125689 mm⁻¹. This is a useful caution against treating glass class alone as a proxy for optical role: the sign and
strength follow the complete geometry. The element's two surfaces, 12A and 13A, carry some of the largest modeled
aspheric departures in the system.

### L6 — Biconcave Negative, two aspherical surfaces

**nd = 1.661, νd = 20.4. Material: Unmatched patent-specified plastic. Source f = −4.55 mm at 555 nm; isolated d-line EFL = −4.59619 mm.**

L6 is the final refracting element and has isolated d-line power of −0.217571 mm⁻¹. Its rear surface 15A is followed by
0.4500 mm of air, then the source-listed 0.1500 mm IR filter and 0.0971 mm of trailing air to the image plane. The final
surface is strongly aspherical in the implemented model; its modeled-rim polynomial departure from the conic base is
−1.69009 mm at the inferred 2.75 mm semi-diameter. That number characterizes the modeled prescription geometry only; the
patent does not publish a clear aperture for the surface.

## Glass Identification and Selection

The six powered elements are explicitly identified by the patent as plastic. For that reason, optical-glass catalog names
are not substituted merely because an nd/νd coordinate resembles a commercial glass. The implemented labels remain
`Unmatched (...)` and preserve the source material classification.

| Material coordinate | Elements | Patent material | Model identification | Spectral support |
|---|---|---|---|---|
| nd 1.545 / νd 55.9 | L1, L4, L5 | Plastic | Unmatched; six-digit coordinate class 545559 | nd/νd only |
| nd 1.651 / νd 21.5 | L2, L3 | Plastic | Unmatched; six-digit coordinate class 651215 | nd/νd only |
| nd 1.661 / νd 20.4 | L6 | Plastic | Unmatched; six-digit coordinate class 661204 | nd/νd only |

The source IR filter is a separate plane-parallel glass plate at nd = 1.516 and νd = 64.1. Its supplier is not published.
Catalog comparison places that rounded coordinate in a BK7-family crown-glass region, so the data uses the class-level
label `516641/517642 BK7-family crown-glass class (supplier unresolved)` rather than a vendor identity. The plate is modeled
through `rearPlates`; it is not counted as a seventh lens element.

Neither the plastic elements nor the rear filter has source-published nC, nF, ng, or dPgF values. The data consequently
contains no authored anomalous-partial-dispersion fields and does not support an APO or anomalous-dispersion claim. The
patent states that the example systems cover 470–650 nm and that material choice, powers, radii, aspheres, and spacings are
used together to control monochromatic and chromatic aberrations (¶¶0262–0264); that system-level statement is not treated
as line-by-line dispersion data for the modeled materials.

## Focus Mechanism

The implemented focus status is `NO_INTERNAL_RECONSTRUCTION`. Example 11 supplies one infinity prescription and no
finite-distance spacing table. The patent states generically that some embodiments may focus from more than 20 m to less
than 100 mm by moving the lens system and/or the photosensor (¶0098), while Apple documents autofocus with Focus Pixels for
the iPhone 7. Neither source identifies a unique moving group, travel, or spacing law for Example 11 or for the production
module.

Accordingly, the data contains no focus `var` entries and preserves the published infinity geometry. The required
`closeFocusM: 0.1` field is a non-operative UI boundary proxy derived from the patent's generic sub-100-mm statement. It is
not a claim that Example 11 or the iPhone 7 production camera has a 0.10 m minimum focus distance, and it is not used to
reconstruct internal motion.

## Aspherical Surfaces

Every refracting surface from 4A through 15A is aspherical. The patent gives the standard conic-plus-even-polynomial sag
form

`Z = c r² / [1 + sqrt(1 − (1 + K)c²r²)] + A r⁴ + B r⁶ + C r⁸ + D r¹⁰ + E r¹² + F r¹⁴ + G r¹⁶`,

with `c = 1/R` and `K` explicitly defined as the conic constant (US 2016/0341934 A1, ¶¶0252–0256). Therefore the patent
`K` maps directly to the model `K`; no offset conversion is applied. The patent's A–G coefficients map to A4–A16. No
uniform scale factor is applied, so the published coefficient magnitudes are retained without rescaling. Blank coefficient
cells in Table 11B contribute zero; where the data explicitly stores a zero coefficient, that is a representation of the
blank source term rather than a newly fitted value.

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 | A16 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 4A | -4.9853396e-1 | +2.82308e-3 | +2.06461e-2 | -3.25751e-2 | +2.56978e-2 | -9.43970e-3 | 0 | — |
| 5A | 0 | -5.16994e-2 | +1.21884e-1 | -1.31873e-1 | +5.76987e-2 | -9.67450e-3 | 0 | — |
| 6A | 0 | -1.12242e-1 | +1.88446e-1 | -1.72552e-1 | +6.02977e-2 | +4.60642e-3 | -4.14886e-3 | — |
| 7A | -7.58419032 | -6.26311e-2 | +1.14977e-1 | -1.43652e-1 | +8.14989e-2 | -2.32324e-2 | -9.08662e-4 | — |
| 8A | 0 | -1.55420e-1 | +5.64168e-3 | -4.57010e-2 | +1.61679e-2 | -1.15846e-2 | +7.82347e-3 | — |
| 9A | 0 | -1.27643e-1 | +1.22788e-2 | +1.04252e-2 | -9.08795e-3 | +5.90465e-3 | +1.12693e-4 | — |
| 10A | 0 | -9.74211e-3 | -3.57423e-2 | +5.50779e-2 | -2.62557e-2 | +5.42419e-3 | -3.53494e-4 | -2.05792e-5 |
| 11A | -9.6894194e-1 | +3.93878e-2 | -1.99585e-2 | +1.40677e-2 | -3.37607e-3 | +3.47830e-4 | -2.92323e-5 | +1.64755e-6 |
| 12A | -8.3078060e-1 | -1.74274e-1 | +4.74876e-2 | -8.97572e-3 | +6.61592e-4 | +2.91223e-5 | -4.36144e-6 | — |
| 13A | -2.85391957 | -8.35047e-2 | +2.27336e-2 | -4.97627e-3 | +5.07058e-4 | -1.04243e-5 | -1.86859e-6 | — |
| 14A | 0 | -5.81719e-2 | +1.67041e-2 | -1.88551e-3 | +6.12528e-5 | 0 | 0 | — |
| 15A | +3.0802964e-1 | -9.77084e-2 | +2.15146e-2 | -2.29345e-3 | +9.18160e-5 | -9.45631e-7 | 0 | — |

Because Example 11 publishes no semi-diameters, the data uses modeled clear apertures. The verifier evaluates each asphere
at those modeled rims and checks edge thickness, actual aspheric rim slope, conic domain, shared-gap intrusion, default
on-axis and off-axis bundles, and the 37° chief ray. The most restrictive modeled rim slope is 62.4487° at 13A against the
64.2° chat-preflight limit. Surface 15A, the only positive-K surface, remains inside its mathematical conic domain at the
modeled 2.75 mm semi-diameter.

The polynomial departure from the conic base at the modeled rim is a geometric diagnostic, not a source-published clear-
aperture specification and not an assignment of individual aberration correction. Representative values are −0.00655 mm
at 4A, −0.33980 mm at 8A, +0.37522 mm at 11A, −1.67066 mm at 12A, −1.38120 mm at 13A, and −1.69009 mm at 15A. The large
rear-surface departures are therefore properties of the implemented model at inferred apertures, not measurements of the
production lens edges.

## Sources / References

1. Romeo I. Mercado, **“Camera Lens System,” US 2016/0341934 A1**, published November 24, 2016. Primary prescription:
   Example 11 / Example-H, Tables 11A–11B; conditions in Table 20B; asphere convention in ¶¶0252–0256; stop/dummy
   numbering in ¶0259; TTL and pupil definitions in ¶¶0260–0261; spectral/material discussion in ¶¶0262–0264; focus
   statement in ¶0098; Figure 10 family geometry in ¶¶0192–0194.
2. Apple, **“Apple introduces iPhone 7 & iPhone 7 Plus,”** September 7, 2016,
   <https://www.apple.com/newsroom/2016/09/apple-introduces-iphone-7-iphone-7-plus/>.
3. Apple Support, **“iPhone 7 — Technical Specifications,”** camera specifications,
   <https://support.apple.com/en-gb/111943>.
4. Authoritative optical-glass catalogs checked for the rear-filter coordinate during source audit: OHARA, HOYA,
   SCHOTT, HIKARI, CDGM, and SUMITA. Those comparisons support only a BK7-family class description; they do not establish
   a supplier for the patent filter.
