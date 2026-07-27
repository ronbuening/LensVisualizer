# NIKON NIKKOR-S AUTO 5cm f/2

## Patent Reference and Design Identification

**Patent:** JP 1964-025754 (特公昭39-25754)
**Application Number:** 特願昭34-3734
**Filed:** 1959-02-10
**Published:** 1964-11-14
**Inventor:** Saburo Murakami
**Applicant:** Nippon Kogaku Kogyo Kabushiki Kaisha
**Title:** Photographic lens (写真レンズ)
**Embodiment analyzed:** Embodiment 1

The data file transcribes the patent's sole worked prescription, which is normalized to $f=100$, $F/2$, and a full
field of $46°$ (patent pp. 2–3). The prescription has seven elements in five air-separated groups, with cemented
interfaces at surfaces 6 and 9. Figure 1 on patent page 4 shows the same topology and places the diaphragm within the
large central air gap.

This analysis treats Embodiment 1 as the production correlation for the NIKKOR-S Auto 5cm f/2. Nikon's historical
account independently identifies that production lens as the first normal lens for the Nikon F, released in June 1959,
and describes it as a seven-element design formed by adding a weak concave front element to a Gaussian core. Those
identity, timing, focal-length, aperture, and topology correspondences support the correlation, but Nikon does not
publish the patent's exact radii, spacings, or glass melts.

The authored model applies a uniform scale factor of $s=0.5$ to the patent-normalized prescription, producing the stated
5 cm design. All radii, thicknesses, semi-diameters, stop coordinates, and image-plane distances are scaled. The design
is entirely spherical, so there are no aspheric coefficients to transform.

## Optical Architecture

The optical system is a weak negative-front extension of a Gaussian core. In front-to-rear order, its five groups are:

1. an extremely weak negative meniscus;
2. a positive meniscus;
3. a cemented positive/negative pair with weak negative net power;
4. a cemented negative/positive pair with very weak negative net power; and
5. a rear biconvex positive element.

The patent and Nikon's historical article use “retrofocus” or “so-called retrofocus” in the period sense: the weak
negative front element helps obtain the back focus required by an SLR mirror. Under the strict numerical definition used here, however, the design is not retrofocus because its computed back focal distance is less than its effective
focal length. It is also not telephoto because the total track exceeds the effective focal length.

The standalone L1 focal length is approximately $-5607.536\ \mathrm{mm}$, showing that the front element contributes
almost no net system power. The L2–L7 Gaussian core alone has a computed equivalent focal length of
$+49.592\ \mathrm{mm}$, while the complete system is $+50.006\ \mathrm{mm}$. L1 therefore acts mainly through principal-
plane and ray-height redistribution rather than by materially changing total focal power.

The two cemented pairs must not be interpreted by adding the standalone powers of their members. In their actual
boundary media, D1 (L3+L4) has a net focal length of $-125.446\ \mathrm{mm}$ and D2 (L5+L6) has a net focal length of
$-420.085\ \mathrm{mm}$. Their in-situ effects depend on their separation from the positive groups and from the central
stop, rather than on isolated thick-lens power alone.

## Element-by-Element Analysis

### L1 — Negative Meniscus

$ n_d = 1.6127$, $\nu_d = 58.6$. Glass: 613586 — SK4 class, catalog equivalent; vendor unconfirmed.
Standalone focal length: $-5607.536\ \mathrm{mm}$.

L1 is a very weak concave meniscus ahead of the Gaussian core. Its large, similarly signed radii leave little standalone
power, but its position changes the incident ray heights and shifts the system's principal-plane geometry. This is the
architectural addition that permits the 50 mm SLR design to obtain the required back focus without converting the core
into a longer 55–58 mm normal lens.

### L2 — Positive Meniscus

$ n_d = 1.6141$, $\nu_d = 55.1$. Glass: 614551 — SK9 / S-BSM9 / H-ZK8 class, catalog equivalent; vendor
unconfirmed. Standalone focal length: $+66.909\ \mathrm{mm}$.

L2 is the first materially positive element. It collects the beam after L1 and begins the main convergence of the
Gaussian core. Its moderate crown-class dispersion also places it on the low-dispersion side of the front-half
achromatizing balance.

### D1 — L3/L4 Cemented Pair

#### L3 — Positive Meniscus

$ n_d = 1.6141$, $\nu_d = 55.1$. Glass: 614551 — SK9 / S-BSM9 / H-ZK8 class, catalog equivalent; vendor
unconfirmed. Standalone focal length: $+65.570\ \mathrm{mm}$.

L3 repeats the L2 glass class but operates at substantially stronger curvature. It is the positive crown member of the
front cemented pair and supplies positive power before the strongly curved surface facing the stop.

#### L4 — Negative Meniscus

$ n_d = 1.6483$, $\nu_d = 33.8$. Glass: 648338 — SF2 class, catalog equivalent; vendor unconfirmed. Standalone
focal length: $-37.651\ \mathrm{mm}$.

L4 is the negative, more dispersive member of D1. The patent expressly constrains both its index and Abbe number
($1.60<n_4<1.70$ and $28<\nu_4<38$), indicating that its refractive and dispersive contrast with L3 is a deliberate
part of the correction. Although the two standalone elements have opposing powers, the actual cemented pair is only
weakly negative, with a verified net focal length of $-125.446\ \mathrm{mm}$.

### D2 — L5/L6 Cemented Pair

#### L5 — Negative Meniscus

$ n_d = 1.7408$, $\nu_d = 27.7$. Glass: 741278 — SF13 / S-TIH13 class, catalog equivalent; vendor unconfirmed.
Standalone focal length: $-25.510\ \mathrm{mm}$.

L5 is the strongest negative standalone element and lies immediately behind the stop. Its high index and low Abbe
number make it the principal flint-class member of the rear half. The sharply curved front surface forms the opposing
half of the central negative air space with surface 7.

#### L6 — Positive Meniscus

$ n_d = 1.7440$, $\nu_d = 44.9$. Glass: 744449 — LAF2 / S-LAM2 class, catalog equivalent; vendor unconfirmed.
Standalone focal length: $+32.410\ \mathrm{mm}$.

L6 is a high-index, higher-Abbe positive member cemented to L5. The patent requires $n_6>n_5$, $n_6>1.72$, and
$40<\nu_6<52$. This unusual pairing gives nearly equal index across the cemented boundary but a substantial dispersion
difference. The pair's verified net focal length is only $-420.085\ \mathrm{mm}$, so D2 acts as a weakly negative
compound group despite the much stronger standalone powers of its members.

### L7 — Biconvex Positive

$ n_d = 1.7440$, $\nu_d = 44.9$. Glass: 744449 — LAF2 / S-LAM2 class, catalog equivalent; vendor unconfirmed.
Standalone focal length: $+57.691\ \mathrm{mm}$.

L7 is the final positive element and shares L6's high-index lanthanum-crown-class position. It completes the rear half of
the Gaussian core, restores positive convergence after D2, and brings the paraxial image to the computed rear focal
plane.

## Glass Identification and Selection

The patent supplies only $n_d$ and $\nu_d$; it does not name manufacturers, catalog products, or production melts. The
data file therefore uses class-level identities and six-digit glass codes. These labels are catalog-derived
approximations, not assertions about Nippon Kogaku's actual procurement.

| Stored class and code | Patent $n_d$ / $\nu_d$ | Elements | Catalog interpretation |
|---|---:|---|---|
| 613586 — SK4 class | 1.6127 / 58.6 | L1 | Strong class match to historical SK4-family crown positions |
| 614551 — SK9 / S-BSM9 / H-ZK8 class | 1.6141 / 55.1 | L2, L3 | Strong class match; vendor unresolved |
| 648338 — SF2 class | 1.6483 / 33.8 | L4 | Strong flint-class match; patent index is slightly above common catalog anchors |
| 741278 — SF13 / S-TIH13 class | 1.7408 / 27.7 | L5 | Strong dense-flint match; some catalogs encode the rounded Abbe digits as 741277 |
| 744449 — LAF2 / S-LAM2 class | 1.7440 / 44.9 | L6, L7 | Exact or near-exact class-position match across several catalogs |

No element carries $n_C$, $n_F$, $n_g$, or $\Delta P_{gF}$ in the source or data file. Consequently, the model supports
$d$-line and Abbe-level chromatic interpretation only. It does not support a claim of apochromatic correction,
anomalous partial dispersion, or a production-specific Sellmeier model.

## Focus Mechanism

The patent publishes one infinity prescription and gives no object-distance table, magnification state, variable spacing,
or internal focusing law. Nikon's historical material nevertheless places the production lens among the early Nikkor
Auto lenses using linear-helicoid unit focusing, so a rigid-unit movement can be inferred without inventing an internal
or floating group.

The sequential model represents unit focus by varying only the final BF gap. A finite-conjugate paraxial solve increases
that gap from $37.562469\ \mathrm{mm}$ at infinity to $42.591706\ \mathrm{mm}$ at the manufacturer-derived
$0.6\ \mathrm{m}$ endpoint, an inferred extension of $5.029237\ \mathrm{mm}$. This is explicitly an inferred first-order
focus state, not a patent-published close-focus prescription or verification of close-range aberrations.

## Conditional Expressions

The patent's claim text gives dimensional and glass inequalities for the worked design (patent pp. 1–3). All conditions
are satisfied by Embodiment 1:

| Patent condition | Evaluated value | Result |
|---|---:|---|
| $4f<r_2<8f$ | $r_2/f=5.98$ | Pass |
| $0.30f<r_5<0.45f$ | $r_5/f=0.3672$ | Pass |
| $0.20f<r_7<0.35f$ | $r_7/f=0.2636$ | Pass |
| $0.20f<|r_8|<0.35f$ | $|r_8|/f=0.2670$ | Pass |
| $0.25f<|r_{10}|<0.40f$ | $|r_{10}|/f=0.3333$ | Pass |
| $0.2f<\sum d_1\ldots d_6<0.3f$ | $0.2620f$ | Pass |
| $0.15f<d_7<0.25f$ | $0.1800f$ | Pass |
| $n_4>n_3$ and $1.60<n_4<1.70$ | $1.6483>1.6141$ | Pass |
| $28<\nu_4<38$ | $33.8$ | Pass |
| $n_6>n_5$ and $n_6>1.72$ | $1.7440>1.7408$ | Pass |
| $40<\nu_6<52$ | $44.9$ | Pass |

## Verification Summary

Independent sequential height/reduced-angle tracing and an ABCD matrix accumulation were applied to the final surface
array. The two methods agree, and the matrix determinant is unity to numerical precision.

| Quantity | Verified model result |
|---|---:|
| Effective focal length | $50.005583\ \mathrm{mm}$ |
| Marketing focal length | $50\ \mathrm{mm}$ |
| Back focal distance from surface 12 | $37.562469\ \mathrm{mm}$ |
| Vertex length, surface 1 to surface 12 | $30.500000\ \mathrm{mm}$ |
| Total track to the paraxial image plane | $68.062469\ \mathrm{mm}$ |
| $\mathrm{BFD}/\mathrm{EFL}$ | $0.751165$ |
| $\mathrm{TL}/\mathrm{EFL}$ | $1.361097$ |
| Modeled wide-open f-number | $2.000000000002$ |
| Petzval sum | $+0.003982520\ \mathrm{mm}^{-1}$ |
| Petzval radius | $+251.097323\ \mathrm{mm}$ |

The patent does not locate the stop numerically. The data model places `STO` at the midpoint of the scaled
$9.0\ \mathrm{mm}$ central gap, leaving $4.5\ \mathrm{mm}$ on each side, and solves a physical stop semi-diameter of
$8.941685\ \mathrm{mm}$ to reproduce $f/2$. This station and diameter are modeling inferences, not patent values.

The patent also publishes no semi-diameters. The stored clear apertures were measured from patent Figure 1, rounded to
0.1 mm, and checked against exact marginal and off-axis tracing. Surface 8 is reduced by a further 0.6 mm from its direct
figure estimate so the strongly opposed stop-side surfaces remain visibly separated in the SVG renderer. Local checks
found positive edge thickness and endpoint separation for every element, acceptable actual rim slopes, no shared-gap
intrusion or hidden material trim, and containment of the defined ray sets.

No cover plate, filter, inactive dummy plane, flare cutter, or mechanical component was removed or folded into the model.
The active prescription consists only of the twelve refracting surfaces, the inferred stop plane, and the computed rear
image distance. The all-spherical prescription requires no conic conversion or asphere-coefficient scaling.

The patent's printed final, unnamed Seidel column contains an internal arithmetic discrepancy: the twelve displayed rows
sum to $+0.0595$, while the printed total is $+0.0545$. The discrepancy is retained as a source limitation; no
prescription radius, spacing, index, or Abbe value was altered to force agreement.

## Design Heritage and Context

The design occupies a specific transitional position in Nikon's early SLR system. The Nikon F required enough rear
clearance for a quick-return mirror, while a conventional 50 mm Gaussian design of the period did not readily provide
that distance at $f/2$. Embodiment 1 preserves a near-50 mm Gaussian core and adds the very weak L1 meniscus to alter
back-focus geometry.

Nikon records the NIKKOR-S Auto 5cm f/2 as entering sale with the Nikon F in June 1959. The later NIKKOR-H Auto 50mm
f/2, released in January 1964, returned to a four-group, six-element orthodox Gaussian configuration after advances in
optical design made the extra front element unnecessary. The patent-backed model therefore represents the earlier
five-group, seven-element solution rather than the later 50 mm f/2 formula.

## Sources

- JP 1964-025754 (特公昭39-25754), *Photographic lens*, Embodiment 1, original patent publication.
- [Nikon, “NIKKOR — The Thousand and One Nights No.2”](https://imaging.nikon.com/imaging/information/story/0002/).
- [Nikon, “Debut of Nikon F — Camera Chronicle”](https://imaging.nikon.com/imaging/information/chronicle/history-f/).
- [OHARA optical-glass product and catalog resources](https://www.ohara-inc.co.jp/en/product/).
- [HIKARI optical-glass catalog](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx).
- [CDGM optical-glass database](https://www.cdgmgd.com/database/toWebDatabase.htm?url=database).
- [SCHOTT optical-glass downloads](https://www.schott.com/en-gb/products/optical-glass-p1000267/downloads).
