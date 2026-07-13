# Olympus H.Zuiko Auto-W 24mm f/2.8 — US 3,994,574 Design Analysis

## Patent Reference and Design Identification

**Patent:** US 3,994,574\
**Application Number:** 618,672\
**Filed:** October 1, 1975\
**Priority:** March 19, 1973 (Japan 48-31704)\
**Granted:** November 30, 1976\
**Inventor:** Jihei Nakagawa\
**Assignee:** Olympus Optical Co., Ltd.\
**Title:** Wide-Angle Photographic Lens System\
**Embodiment analyzed:** Embodiment 2

US 3,994,574 describes a seven-component, eight-element wide-angle objective in which the first four components have negative combined focal power. The patent gives five numerical embodiments. Embodiment 1 corresponds to Fig. 1; Embodiments 2–5 correspond to Fig. 2. Aberration plots are published for Embodiments 1 and 2, both at f/2.8 and a 42.5° half-field. The complete Embodiment 2 prescription appears on PDF page 6 (printed patent pp. 3–4) and is repeated in claim 3 on PDF pages 7–8.

Embodiment 2 is used here as a representative patent prescription for the Olympus H.Zuiko Auto-W 24mm f/2.8. The association is supported by convergent, but not conclusive, evidence:

1. Olympus identifies the production lens as a 24mm f/2.8 with eight elements in seven groups, an 84° diagonal field, and a 0.25 m minimum focusing distance.
2. Patent Embodiment 2 has eight elements in seven components, is normalized to $f=1.0$, and is accompanied by f/2.8 aberration plots extending to 42.5°.
3. Scaling the prescription by 24 gives an independently traced EFL of 23.99995 mm. A rectilinear paraxial reference for the 43.27 mm diagonal of 135 format is 84.06°.
4. The patent assignee is Olympus Optical Co., Ltd., and its March 1973 Japanese priority date is compatible with the early OM-system design period.

The identification should not be overstated. Olympus did not publish a production surface prescription, and Embodiments 2–5 share the same broad architecture. The paired data file therefore represents **US 3,994,574 Embodiment 2 scaled to 24 mm**, not a demonstrated micrometer-for-micrometer transcription of every production variant.

## Optical Architecture

The prescription is an inverse-telephoto, or retrofocus, wide-angle design. Its computed back focal distance is 36.7486 mm against an EFL of 23.99995 mm, so $BFD/EFL=1.5312>1$. The front-to-rear power sequence is:

**positive – negative – negative – positive | stop | cemented negative – positive – positive**

The first four components form a net negative front group with $f_{1234}=-50.7857$ mm. The rear three components form a net positive group with $f_R=+24.7969$ mm. This negative-front/positive-rear division supplies the extended back focus required by an SLR wide-angle while preserving a compact optical stack.

The front group itself is not uniformly negative. L1+L2 form a strong negative subgroup with $f=-33.3944$ mm, while L3+L4 form a weak positive subgroup with $f=+130.5611$ mm. Behind the stop, the cemented doublet has net $f=-78.9704$ mm, followed by a strongly positive L6+L7 pair with $f=+19.2642$ mm.

The glass-and-air track from the first vertex to the last glass surface is 36.8784 mm. Adding the computed infinity BFD gives a front-vertex-to-image distance of 73.6270 mm. These are optical prescription distances and should not be confused with the manufacturer's barrel-length specification.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object

**nd = 1.69680, νd = 55.6. Glass: current OHARA S-LAL14 equivalent. Standalone focal length: +104.616 mm.**

L1 is a weak positive meniscus. It begins the patent's deliberately reversed chromatic pairing: a relatively low-dispersion positive component immediately precedes a more dispersive negative component. Its low power limits spherical-aberration generation at the large front-ray heights while allowing L2 to supply most of the local negative power.

The current S-LAL14 catalog match is exact in $n_d$ and within 0.07 in $\nu_d$ after the patent's one-decimal rounding. Because the patent predates OHARA's modern S-series eco nomenclature, the match is treated as an optical equivalent rather than proof of the production melt name.

### L2 — Negative Meniscus, Convex to Object

**nd = 1.61290, νd = 37.0. Glass: current OHARA S-TIM3 equivalent. Standalone focal length: −24.425 mm.**

L2 is the strongest negative standalone element in the front group. The L1–L2 vertex gap is only 0.0984 mm after scaling. The patent specifically requires this spacing to be extremely small so that the two components operate at nearly the same principal-ray height and their opposite powers and dispersions can correct lateral chromatic aberration efficiently (US 3,994,574, cols. 1–2).

The closest current catalog match is OHARA S-TIM3: $n_d=1.61293$, $\nu_d=37.00$. It is a flint by dispersion, regardless of the TIM family designation.

### L3 — Negative Meniscus, Convex to Object

**nd = 1.63850, νd = 55.4. Glass: current OHARA S-BSM18 equivalent. Standalone focal length: −30.870 mm.**

L3 is a negative meniscus made from crown-range glass. Its dispersion is much lower than L2's even though both elements are negative. This is intentional: the patent assigns the third and fourth components a separate Abbe-number pairing from the first and second components.

L3 is spaced 3.5688 mm behind L2. The larger separation reduces its principal-ray height relative to L1–L2 and gives the designer additional leverage over distortion, astigmatism, and residual lateral color.

### L4 — Positive Meniscus, Convex to Object

**nd = 1.80520, νd = 25.4. Glass: current OHARA S-TIH6 equivalent. Standalone focal length: +26.350 mm.**

L4 is a thick, strongly positive meniscus with a 13.2312 mm center thickness. It uses dense flint despite its positive power, satisfying the patent's requirement that the fourth component have $\nu_d$ between 20 and 30. This high-dispersion positive element is central to the patent's reversal of conventional front-group glass selection.

The rear radius is very weak, so most of L4's refractive action occurs at its front surface. Its thickness and location immediately before the stop also give it substantial influence over higher-order spherical aberration and oblique-ray behavior.

### L5a + L5b — Cemented Negative Doublet

**L5a:** **nd = 1.72920, νd = 54.7. Glass: current OHARA S-LAL18 equivalent. Standalone-in-air focal length: +27.764 mm.**\
**L5b:** **nd = 1.80520, νd = 25.4. Glass: current OHARA S-TIH6 equivalent. Standalone-in-air focal length: −20.017 mm.**\
**Cemented assembly:** **net focal length: −78.970 mm.**

The fifth component is a cemented negative doublet: a biconvex crown element cemented to a biconcave dense-flint element. The large dispersion difference across the cemented interface gives the design a strong achromatizing degree of freedom without adding another air-glass pair.

The individual focal lengths above are **standalone values in air**. They do not describe the in-situ action of either half while cemented. The physically meaningful first-order value for the assembled component is the traced net focal length of −78.970 mm.

### L6 — Positive Meniscus, Concave to Object

**nd = 1.69680, νd = 55.6. Glass: current OHARA S-LAL14 equivalent. Standalone focal length: +33.730 mm.**

L6 begins the final positive relay. Its object-side concavity and steep rear surface produce strong positive power while shaping the rear pupil and the balance between astigmatism and field curvature.

In the surface-by-surface Petzval calculation, L6's rear surface is the largest single positive contributor. That contribution partly cancels the strong negative terms generated by the rear surfaces of L2 and L3.

### L7 — Positive Meniscus, Concave to Object

**nd = 1.69680, νd = 55.6. Glass: current OHARA S-LAL14 equivalent. Standalone focal length: +43.563 mm.**

L7 is the final positive meniscus. Together with L6 it forms a +19.264 mm rear pair that brings the beam to focus and establishes the 36.7486 mm back focal distance.

Its steep rear surface is another major positive Petzval contributor. The pair is best described as a converging rear relay with field-curvature influence rather than as a dedicated field flattener; the patent does not assign it that narrower function.

## Glass Identification and Selection

The patent publishes only $n_d$ and $\nu_d$. Each pair was compared directly with current manufacturer data. All five distinct pairs have close or exact matches in OHARA's current catalog.

| Used in | Patent $n_d$ / $\nu_d$ | Current catalog equivalent | Catalog $n_d$ / $\nu_d$ | Residual | Optical class |
|---|---:|---|---:|---:|---|
| L1, L6, L7 | 1.69680 / 55.6 | S-LAL14 (OHARA), code 697555 | 1.69680 / 55.53 | Δnd = 0.00000; Δνd = −0.07 | Lanthanum crown |
| L2 | 1.61290 / 37.0 | S-TIM3 (OHARA), code 613370 | 1.61293 / 37.00 | Δnd = +0.00003; Δνd = 0.00 | Flint |
| L3 | 1.63850 / 55.4 | S-BSM18 (OHARA), code 639554 | 1.63854 / 55.38 | Δnd = +0.00004; Δνd = −0.02 | Barium crown |
| L4, L5b | 1.80520 / 25.4 | S-TIH6 (OHARA), code 805254 | 1.80518 / 25.42 | Δnd = −0.00002; Δνd = +0.02 | Dense flint |
| L5a | 1.72920 / 54.7 | S-LAL18 (OHARA), code 729547 | 1.72916 / 54.68 | Δnd = −0.00004; Δνd = −0.02 | Lanthanum crown |

The S-prefix denotes OHARA's modern environmentally considerate glass series and should not be projected backward as the literal trade name of a 1973 design. The data file uses these current equivalents because they reproduce the patent's first-order optical constants and provide authoritative $n_C$, $n_F$, and $n_g$ values for spectral tracing. Those line indices come from the current equivalent catalogs, not from the patent. The resulting spectral model is therefore an equivalent-glass reconstruction, not a chemical identification of the original production melts.

## Focus Mechanism

The patent gives only the infinity prescription and no moving-group table. The paired data file therefore uses a non-patent unit-focus model: the complete optical system translates toward the object while the image plane remains fixed, represented as an increase in the last air gap.

The production specification of 0.25 m minimum focus is used as the close-focus endpoint. Solving the thick-lens conjugate with the marked object distance measured from the image plane gives:

| State | Last-surface BFD | Unit extension | Paraxial magnification |
|---|---:|---:|---:|
| Infinity | 36.7486 mm | 0.0000 mm | 0 |
| 0.25 m | 40.0500 mm | +3.3014 mm | −0.13756 (magnitude about 1:7.27) |

With unit focusing, the optical assembly moves objectward. In lens coordinates, the distance from the final surface to the fixed image plane therefore increases.

The 1:7.27 figure is a paraxial result of the adopted unit-focus model, not a manufacturer-published reproduction ratio. A production lens can differ because of focus calibration, distortion, and the exact reference convention used for the marked distance.

## Chromatic Correction Strategy

The patent's central claim is not merely the use of a negative front group, but the glass pairing that becomes possible when the first four components have negative combined focal length. The patent argues that the intermediate image is then relayed by the positive rear group with negative magnification, reversing the sign logic used for lateral-color correction in conventional retrofocus designs (US 3,994,574, cols. 1–2).

The broad conditions are:

1. $f_{1234}<0$
2. $59>\nu_1>45$ and $45>\nu_2>30$
3. $63>\nu_3>45$ and $30>\nu_4>20$

The preferred ranges narrow these to $58>\nu_1>45$, $45>\nu_2>33$, $61>\nu_3>45$, and $28>\nu_4>25$.

| Quantity | Embodiment 2 | Requirement | Result |
|---|---:|---:|---|
| $f_{1234}$ | −2.11607 computed; −2.115 patent | $<0$ | Satisfied |
| $\nu_1$ | 55.6 | 45–58 preferred | Satisfied |
| $\nu_2$ | 37.0 | 33–45 preferred | Satisfied |
| $\nu_3$ | 55.4 | 45–61 preferred | Satisfied |
| $\nu_4$ | 25.4 | 25–28 preferred | Satisfied |

The L1–L2 air gap is 0.0041 normalized, or 0.0984 mm at 24 mm scale. This directly supports the patent's statement that the first positive and second negative components must be extremely closely spaced for the reversed dispersion pairing to work effectively.

## Verification Summary

A fresh, independent reduced-angle ABCD trace of the rounded prescription gives:

| Quantity | Computed | Patent value | Difference |
|---|---:|---:|---:|
| System EFL, normalized | 0.9999979 | 1.0000 | −0.0000021 |
| BFD, normalized | 1.5311908 | 1.5313 | −0.0001092 |
| Front-group focal length, normalized | −2.1160720 | −2.115 | −0.0010720 |

At 24× scale:

| Quantity | Verified value |
|---|---:|
| EFL | 23.99995 mm |
| BFD | 36.74858 mm |
| $BFD/EFL$ | 1.53119 |
| Front-group EFL | −50.78573 mm |
| Rear-group EFL | +24.79689 mm |
| Front vertex to last surface | 36.87840 mm |
| Front vertex to image at infinity | 73.62698 mm |
| Petzval sum | +0.00447641 mm⁻¹ |
| Petzval radius under this sign convention | +223.393 mm |
| Paraxial 135-format diagonal field | 84.062° full |
| Rectilinear reference image height at 42.5° | 21.9919 mm |

The Petzval value uses the required surface-by-surface expression

$$
P=\sum_i \frac{\phi_i}{n_i n'_i}, \qquad \phi_i=\frac{n'_i-n_i}{R_i}.
$$

It is not an element-level thin-lens approximation.

The patent does not provide clear semi-diameters or a numerical stop position. In the data file, the stop is placed at the midpoint of the 1.9104 mm L4–L5 air gap. A 5.84979 mm stop radius produces an 8.57141 mm paraxial entrance-pupil diameter and f/2.8. Semi-diameters were first inferred from marginal and chief rays, then proportioned against FIG. 2. This preserves its narrower L5 doublet and the renewed rearward flare through L6 and L7. The final values pass the renderer's rim-slope, positive-edge-thickness, cross-gap, hidden-trim, and default ray-envelope checks.

## Sources

- Nakagawa, Jihei. **US 3,994,574, “Wide-Angle Photographic Lens System.”** Granted November 30, 1976. Embodiment 2 prescription on PDF page 6, repeated in claim 3 on PDF pages 7–8; layout in Fig. 2; aberration curves in Figs. 4A–4D.
- Olympus. **OM System Zuiko lens catalog.** Production 24mm f/2.8 specifications: 8 elements / 7 groups, 84° field, 0.25 m minimum focus, 31 mm length, 49 mm filter, 185 g. Archived scan: https://lens-club.ru/public/files/pdfs/6ff2d93af1f50f490de646806bc8e9dd.pdf
- OHARA Corporation. **S-LAL14 optical-glass data:** https://oharacorp.com/glass/s-lal14/
- OHARA Corporation. **S-TIM3 optical-glass data:** https://oharacorp.com/glass/s-tim3/
- OHARA Corporation. **S-BSM18 optical-glass data:** https://oharacorp.com/glass/s-bsm18/
- OHARA Corporation. **S-TIH6 optical-glass data:** https://oharacorp.com/glass/s-tih6/
- OHARA Corporation. **S-LAL18 optical-glass data:** https://oharacorp.com/glass/s-lal18/
