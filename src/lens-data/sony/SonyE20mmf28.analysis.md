## Patent Reference and Design Identification

**Patent:** US 2014/0204265 A1  
**Application Number:** 14/089,797  
**Priority:** JP 2013-007310, January 18, 2013  
**Filed:** November 26, 2013  
**Published:** July 24, 2014  
**Inventor:** Toshihiro Sunaga  
**Applicant / Assignee:** Sony Corporation  
**Title:** Image Pickup Lens and Image Pickup Apparatus  
**Embodiment analyzed:** Fourth Embodiment, Numerical Example 4, FIG. 10 and Tables 10–13

Numerical Example 4 is the strongest disclosed match to the Sony E 20mm f/2.8 (SEL20F28). The identification is convergent rather than explicit: the patent does not print the retail model number.

1. **Focal length and aperture.** The patent gives $f=20.42\ \text{mm}$ and $F\!no=2.89$; Sony markets the production lens as 20 mm f/2.8.
2. **Format and field.** The patent gives a maximum image height of 14.2 mm and a half-field angle of $35.98^\circ$, equivalent to a $71.96^\circ$ full field. Sony specifies APS-C coverage and a $70^\circ$ angle of view.
3. **Element and group count.** The embodiment contains six named lenses, L1–L6. Each named lens is air-separated from the next, so it is also a six-group physical prescription. Sony specifies 6 elements in 6 groups. The thin resin layer bonded to L1 is a material sub-element of L1 rather than an additional manufacturer-counted lens.
4. **Aspherical construction.** Five surfaces are aspherical: one on the L1 resin overlay, two on L3, and two on L5. They occur on three named lenses. Sony confirms that the production lens uses aspherical elements, although its public specification does not state the aspherical-surface count.
5. **Close-focus behavior.** The patent gives $\beta=-0.122$ at its short-distance state. Sony specifies 0.12× maximum magnification and a 0.20 m minimum focus distance.
6. **Rear focusing.** The patent moves the single-element fourth group for focusing, consistent with the compact, low-mass autofocus architecture described for the product.
7. **Timing.** Sony's support page dates the SEL20F28 operating instructions to April 21, 2013, three months after the patent's Japanese priority date. This timing is compatible with the identification, but it is supporting evidence rather than proof that the worked example is the production prescription.

The other worked examples are weaker matches. Numerical Example 2 has only five named lenses, and Numerical Example 3 has a 28.13 mm focal length. Numerical Example 1 is also near 20 mm and has six lenses, but it lacks the hybrid L1 resin asphere and places its aspheres on only L3 and L5. Among the four disclosed examples, Example 4 is the only one that combines the 20 mm class focal length, six named lenses, hybrid front asphere, five aspherical surfaces, and close-focus magnification associated with the SEL20F28. The patent-to-product identification remains an inference because neither the patent nor Sony's public specification publishes the full production prescription.

## Optical Architecture

The prescription is a compact asymmetric four-power-group wide-angle of positive–negative–positive–negative distribution:

| Power group | Contents | Computed focal length | Principal role |
|---|---|---:|---|
| G1 | L1 hybrid + L2 | +50.987 mm | Front collector and initial field bending |
| G2 | L3 + L4 | −112.362 mm | Weak net-negative diverging section and chromatic pair |
| G3 | L5 | +14.204 mm | Strong positive relay |
| G4 | L6 | −24.693 mm | Single-element rear-focus group |

The aperture stop lies between G1 and G2. The six named lenses are physically air-separated, although the patent organizes them into four functional power groups. The data file preserves both descriptions: `groupCount` follows Sony's 6-group production convention, while the diagram annotations show G1–G4.

The first surface to image-plane track is 36.930 mm. The last optical surface is 19.340 mm behind the first surface, leaving a computed infinity back focal distance of 17.576 mm from the final surface. These distances describe the optical prescription only; the patent does not provide a mechanical mounting datum, so the back focal distance cannot be equated directly with the 18 mm E-mount flange focal distance.

This design should not be classified as retrofocus under the strict back-focus criterion. Its $BFD/EFL=0.861$, so the back focal distance is shorter than the effective focal length. It is also not telephoto in the strict total-length sense: $TL/EFL=1.808$. The appropriate description is a compact asymmetric P–N–P–N rear-focus wide-angle.

## Element-by-Element Analysis

### L1 / L1r — Negative Meniscus with Bonded Resin Asphere (G1)

**Glass substrate:** $n_d=1.567$, $\nu_d=42.84$. Glass: representative S-TIL26 (OHARA) catalog match; the patent does not name a vendor. Standalone $f=-26.220$ mm.  
**Resin layer:** $n_d=1.534$, $\nu_d=41.71$. Material: proprietary aspherical resin. Standalone $f=-173.921$ mm.  
**Combined hybrid:** $f=-22.744$ mm in air.

The patent describes L1 as a negative meniscus convex toward the object and explicitly states that an aspherical resin lens is provided on its image-side face (¶0150). The glass substrate has a weakly curved front face and a steep rear face. The 0.08 mm center-thickness resin layer follows that rear curvature and supplies the aspherical outer face at surface 3A.

The substrate and resin must not be treated as optically independent production lenses. Their standalone focal lengths are useful diagnostics, but the in-situ behavior is governed by the full glass–resin–air sequence. Although the resin layer has weak standalone power, it changes the hybrid focal length from −26.220 mm for the glass substrate alone to −22.744 mm for the composite. The internal glass–resin interface therefore is not optically negligible.

The hybrid construction is explicit; the manufacturing process is not. It is reasonable to interpret the layer as a molded composite asphere, but the patent does not establish a particular curing process.

### L2 — Positive Meniscus (G1)

$n_d=1.804$, $\nu_d=46.50$. Glass: representative S-LAH65VS (OHARA), 804/465 catalog-code match; vendor not stated by the patent. Standalone $f=+16.276$ mm.

L2 is the strong positive member of G1. Its object-side radius is +12.47 mm and its rear radius is +249.73 mm, producing a strongly curved entrance face and a nearly plano exit. It more than offsets the negative L1 hybrid, leaving G1 with a net focal length of +50.987 mm.

Despite the `LAH` family name, $\nu_d=46.50$ places this glass on the flint side of the practical crown/flint boundary. It should be described as a dense lanthanum flint, not a crown.

### L3 — Negative Meniscus, Both Surfaces Aspherical (G2)

$n_d=1.689$, $\nu_d=31.16$. Glass: representative E-FD8 (HOYA), 689/312 catalog-code match; vendor not stated by the patent. Standalone $f=-14.498$ mm.

L3 is the strong negative component of the otherwise weak net-negative G2. Both surfaces are aspherical, and the front surface has the steepest normalized curvature in the estimated prescription: $sd/|R|=0.880$. It therefore carries much of the monochromatic correction burden where the beam expands after the stop.

Surface 7A has $K=-0.6857$ under the patent's standard conic convention. This is a prolate ellipsoid, not an oblate ellipsoid. At the verified 5.3 mm semi-diameter, its sag is 0.4314 mm less negative than the same-radius sphere, substantially flattening the rim of the concave surface.

The element's high dispersion is paired with the lower-dispersion positive L4. That pairing supplies the most conventional achromatizing relationship in the design: negative high-dispersion power against positive lower-dispersion power.

### L4 — Positive Meniscus, Convex toward the Image (G2)

$n_d=1.729$, $\nu_d=54.67$. Glass: representative S-LAL18 (OHARA), 729/547 catalog-code match; vendor not stated by the patent. Standalone $f=+21.207$ mm.

L4 is a positive meniscus with both radii negative. Its rear face is more strongly curved than its front face, so it is convex toward the image, matching the patent's description (¶0151). It partially cancels L3's strong negative power, leaving G2 at only −112.362 mm.

L4 is the only named glass lens with $\nu_d>50$. Its lower dispersion makes it the principal crown-like partner in the G2 chromatic pair.

### L5 — Biconvex Positive, Both Surfaces Aspherical (G3)

$n_d=1.821$, $\nu_d=42.71$. Glass: representative M-TAFD51 (HOYA), 821/427 catalog-code match; vendor not stated by the patent. Standalone and group $f=+14.204$ mm.

L5 forms the entire third power group and is the strongest positive element in the system. Its nearly balanced +22.10 mm and −22.80 mm radii produce a compact biconvex relay. The patent specifically favors a positive aspherical lens in G3 because rays are sharply bent in this group (¶0096–0097).

Both surfaces are aspherical. Surface 11A has $K=-0.9098$, a prolate ellipsoid close to a paraboloid. At the verified 8.2 mm semi-diameter, its departure is −0.5169 mm relative to the same-radius sphere, markedly flattening the positive-sag rim. The M-TAFD51 match is consistent with a moldable high-index glass, but the patent does not state that the production element was made from that exact HOYA melt or by a particular molding process.

### L6 — Biconcave Negative Rear-Focus Element (G4)

$n_d=1.847$, $\nu_d=23.78$. Glass: representative S-TIH53 (OHARA), 847/238 catalog-code match; vendor not stated by the patent. Standalone and group $f=-24.693$ mm.

L6 is a biconcave negative element and the entire fourth group. The patent makes G4 the focusing group and prefers that it consist essentially of one negative lens to reduce moving mass (¶0098–0099). Its computed ratio is $f/f_4=-0.827$, comfortably inside the patent requirement $f/f_4<-0.35$.

The glass has the highest index and lowest Abbe number in the prescription. Its negative power contributes both to the rear-focus sensitivity and to the surface-by-surface Petzval balance. It should not be described as an ED or anomalous-dispersion glass; the published $n_d/\nu_d$ data do not support that claim.

## Glass Identification and Selection

The patent supplies refractive indices and Abbe numbers but does not name manufacturers or catalog melts. The following assignments are catalog-code matches, not proof of the production procurement source.

| Material | Patent $n_d$ | Patent $\nu_d$ | Probable catalog identification | Assessment |
|---|---:|---:|---|---|
| L1 substrate | 1.567 | 42.84 | S-TIL26 (OHARA), 567/428 | Close catalog-code match |
| L1 resin | 1.534 | 41.71 | Proprietary resin | No authoritative glass-catalog assignment |
| L2 | 1.804 | 46.50 | S-LAH65VS (OHARA), 804/465 | Close catalog-code match; `VS` is closer than S-LAH65V |
| L3 | 1.689 | 31.16 | E-FD8 class (HOYA), 689/312 | Catalog-code match; vendor not established by patent |
| L4 | 1.729 | 54.67 | S-LAL18 (OHARA), 729/547 | Close catalog-code match |
| L5 | 1.821 | 42.71 | M-TAFD51 (HOYA), 821/427 | Exact catalog-code and rounded optical-constant match |
| L6 | 1.847 | 23.78 | S-TIH53 (OHARA), 847/238 | Close catalog-code match |

Five of the six named glass lenses have $\nu_d<50$; only L4 lies on the crown side of that practical boundary. The design therefore relies heavily on high-index flints to obtain strong power in thin elements. Chromatic correction comes from the distribution of positive and negative powers and, most clearly, from the L3/L4 high-dispersion-negative / lower-dispersion-positive pairing. The aspherical surfaces primarily correct monochromatic aberrations and should not be credited with replacing dispersion-based color correction.

No ED, fluorite, or explicitly anomalous-partial-dispersion glass is identified. The data file therefore uses $n_d$ and $\nu_d$ without unsupported $\Delta P_{g,F}$ values or apochromatic claims. The official HOYA M-TAFD51 polynomial now gives catalog dispersion to every named glass in the prescription; only the proprietary bonded resin remains on the measured-$n_d/\nu_d$ fallback.

## Focus Mechanism

The lens uses rear focus. G1–G3 remain fixed while G4, consisting only of L6, translates along the optical axis (¶0068, ¶0153). The patent's two variable gaps are:

| State | D12: L5–L6 gap | D14: L6–image gap | Sum | Patent $\beta$ |
|---|---:|---:|---:|---:|
| Infinity | 1.20 mm | 17.59 mm | 18.79 mm | 0.000 |
| Short distance | 2.41 mm | 16.38 mm | 18.79 mm | −0.122 |

The invariant 18.79 mm sum confirms a pure 1.21 mm imageward translation of G4 with a fixed image plane. Sony specifies 0.20 m minimum focus and 0.12× maximum magnification for the production lens.

Tables 10 and 12 contain an unresolved finite-conjugate inconsistency. A first-order trace of the published short-distance gaps produces $m=-0.11168$ at approximately 213.58 mm measured from the image plane, rather than the tabulated $\beta=-0.122$. Holding D12 + D14 at 18.79 mm and solving for $m=-0.122$ requires D12 = 2.528 mm and D14 = 16.262 mm, giving an object distance of approximately 198.08 mm from the image plane. The difference is too large to describe as ordinary two-decimal rounding of D12 alone. It may reflect additional unreported precision, a table error, or a different finite-conjugate convention; the patent does not resolve it. The data file therefore preserves the explicitly published 2.41 mm and 16.38 mm spacings and records the discrepancy instead of substituting fitted values.

The patent establishes the moving group and the reason for low moving mass. It does not identify a stepping motor or other specific actuator, so no motor type is assigned.

## Aspherical Surfaces

The patent defines each asphere by

$$
 z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10},
$$

where $c=1/R$. This is the standard conic convention: $K=0$ is spherical and $K=-1$ is parabolic (¶0105–0108). No conversion of the tabulated $K$ values is required.

| Surface | Element | $K$ | $A_4$ | $A_6$ | $A_8$ | $A_{10}$ |
|---|---|---:|---:|---:|---:|---:|
| 3A | L1 resin rear | 0.0000 | −3.8544×10⁻⁵ | −9.2082×10⁻⁷ | +8.5792×10⁻⁹ | −4.6597×10⁻¹¹ |
| 7A | L3 front | −0.6857 | −5.3036×10⁻⁴ | +2.5638×10⁻⁵ | +9.0164×10⁻⁸ | −2.5389×10⁻⁸ |
| 8A | L3 rear | 0.0000 | −6.8401×10⁻⁴ | +4.1185×10⁻⁵ | −8.6459×10⁻⁷ | +6.1843×10⁻⁹ |
| 11A | L5 front | −0.9098 | −2.1495×10⁻⁴ | +1.8334×10⁻⁶ | +2.0282×10⁻⁹ | −6.7158×10⁻¹¹ |
| 12A | L5 rear | 0.0000 | +3.4624×10⁻⁵ | −1.7483×10⁻⁶ | +3.5493×10⁻⁸ | −1.8422×10⁻¹⁰ |

Aspherical departures were recomputed at the estimated semi-diameters stored in the data file. Departure is $z_{asph}-z_{sphere}$ for a sphere having the same vertex radius.

| Surface | Verified semi-diameter | Departure from same-radius sphere | Interpretation at the rim |
|---|---:|---:|---|
| 3A | 5.0 mm | −0.0356 mm | Slightly reduced positive sag |
| 7A | 5.3 mm | +0.4314 mm | Concave surface made substantially less negative / flatter |
| 8A | 5.7 mm | −0.0491 mm | Slightly deeper negative sag |
| 11A | 8.2 mm | −0.5169 mm | Strongly reduced positive sag / flatter |
| 12A | 8.2 mm | +0.0974 mm | Slightly reduced negative sag / flatter |

Surface 3A is explicitly a bonded resin asphere. L3 and L5 are aspherical glass lenses, but the patent does not specify whether they are polished or precision molded. Their catalog matches make molding plausible, not proven.

## Conditional Expressions

The computed first-order values reproduce Table 13 within the precision of the rounded prescription.

| Expression | Patent condition | Computed value | Patent table | Result |
|---|---|---:|---:|---|
| (1) $f/f_4$ | $< -0.35$ | −0.8270 | −0.83 | Satisfied |
| (2) $f/f_3$ | $0.8 < f/f_3 < 4.0$ | +1.4377 | +1.4 | Satisfied |
| (2)' $f/f_3$ | $1.0 < f/f_3 < 2.5$ | +1.4377 | — | Satisfied |
| (3) $f/f_2$ | $-1.20 < f/f_2 < -0.03$ | −0.1817 | −0.18 | Satisfied |
| (3)' $f/f_2$ | $-0.8 < f/f_2 < -0.05$ | −0.1817 | — | Satisfied |
| (4) $f/f_1$ | $0.3 < f/f_1 < 1.0$ | +0.4005 | +0.4 | Satisfied |

The strong negative G4 keeps focus travel short; the strong positive G3 reduces the ray angle presented to G4; the weak net-negative G2 expands and redirects the field; and the modest net-positive G1 initiates the field bending without excessive field curvature. These functions follow the patent's explanations in ¶0069–0097.

## Verification Summary

All prescription-derived values below were recomputed from the Table 10 radii, thicknesses, and indices with an independent $y$–$\nu$ paraxial matrix trace.

| Quantity | Recomputed | Patent / source | Assessment |
|---|---:|---:|---|
| Effective focal length | 20.42057 mm | 20.42 mm | Agreement to rounding |
| Infinity BFD from surface 14 | 17.57602 mm | 17.59 mm | Agreement to rounding |
| G1 focal length | +50.98674 mm | +51.0 mm | Agreement to rounding |
| G2 focal length | −112.36183 mm | −112.60 mm | 0.21% difference from rounded table |
| G3 focal length | +14.20387 mm | +14.2 mm | Agreement to rounding |
| G4 focal length | −24.69291 mm | −24.70 mm | Agreement to rounding |
| Surface-by-surface Petzval sum | +0.00723772 mm⁻¹ | Not tabulated | $R_P=-138.17$ mm under the stated sign convention |
| Design entrance-pupil semi-diameter | 3.53297 mm | Derived from f/2.89 | — |
| Physical stop semi-diameter | 3.49086 mm | Derived through G1 | — |
| Paraxial half-field at $y=14.2$ mm | 34.8139° | 35.98° | Difference consistent with the negative distortion shown in FIG. 11 |

The Petzval sum uses the required surface formula

$$
P=\sum_i \frac{\phi_i}{n_i n_i'}, \qquad \phi_i=\frac{n_i'-n_i}{R_i},
$$

not a thin-element approximation.

The patent omits clear semi-diameters. The data-file values began with combined on-axis marginal rays and off-axis chief/marginal rays at 60% of the patent half-field, using the f/2.89 stop. The rear groups were then enlarged to reproduce the stepped silhouette in patent FIG. 10. The resulting geometry checks are:

| Check | Verified result | Limit |
|---|---:|---:|
| Maximum $sd/|R|$ | 0.880 | < 0.90 |
| Maximum same-element SD ratio | 1.203 | ≤ 1.25 |
| Minimum non-resin edge thickness | 0.857 mm | > 0.5 mm |
| Bonded resin rim thickness | 0.202 mm | Thin hybrid-layer exception |
| Maximum signed cross-gap sag intrusion | 0.087 of gap | ≤ 0.90 |
| Maximum rim angle | 55.18° | < 64.2° |
| Infinity-state ray-envelope clearance at the default 60% field | Non-negative at every stored surface | Required |

The short-distance magnification discrepancy described in the focus section is the only material first-order inconsistency found in Example 4. It is disclosed rather than hidden, and the explicit patent spacings remain authoritative in the data file.

## Design Context

Sony specifies the SEL20F28 as an APS-C E-mount 20 mm f/2.8 lens with 6 elements in 6 groups, a 70° field, 0.20 m minimum focus, 0.12× maximum magnification, seven aperture blades, 20.4 mm barrel length, and 69 g mass. Those production specifications take precedence over patent-derived values for the marketed lens.

The optical design is notably compact without meeting the strict retrofocus definition. Its compactness comes from a short 19.34 mm first-to-last-surface stack, high-index glass, a hybrid front asphere, four aspherical glass surfaces on L3 and L5, and a single lightweight rear-focus element. The patent's January 2013 priority and Sony's April 2013 operating-instructions date are temporally compatible with the proposed identification, but they do not independently establish prescription identity.

## Sources

- US 2014/0204265 A1, *Image Pickup Lens and Image Pickup Apparatus*, Toshihiro Sunaga / Sony Corporation, especially ¶0066–0099, ¶0101–0108, ¶0149–0164, FIGS. 10–12, and Tables 10–13.
- [Sony SEL20F28 official specifications](https://www.sony.com/en-cd/electronics/camera-lenses/sel20f28/specifications).
- [Sony E 20mm F2.8 product page](https://www.sony.com/lr/electronics/camera-lenses/sel20f28).
- [Sony SEL20F28 manuals and 2013 operating-instructions date](https://www.sony.com/electronics/support/product/sel20f28/manuals).
- [OHARA S-TIL26 catalog entry](https://oharacorp.com/glass/s-til26/).
- [OHARA S-LAH65VS catalog entry](https://oharacorp.com/glass/s-lah65vs/).
- [OHARA S-LAL18 catalog entry](https://oharacorp.com/glass/s-lal18/).
- [OHARA S-TIH53 catalog entry](https://oharacorp.com/glass/s-tih53/).
- [HOYA optical-glass cross-reference index](https://www.hoyaoptics.eu/glass-cross-reference-index).
- [HOYA glass-molded-lens material list](https://www.hoyaoptics.eu/glass-molded-lenses-gmo).
- [HOYA official optical-glass data downloads](https://www.hoya-opticalworld.com/english/datadownload/), including the July 7, 2026 Zemax catalog used for M-TAFD51 dispersion.
