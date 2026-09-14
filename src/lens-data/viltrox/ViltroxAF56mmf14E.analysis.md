## Patent Reference and Design Identification

**Patent:** CN 211955965 U\
**Application Number:** 202020749926.1\
**Filed:** 2020-05-09\
**Granted:** 2020-11-17\
**Inventors:** 刘瑞军; 陈宝锋\
**Applicant:** 深圳市雷影光电科技有限公司\
**Title:** 内合焦式成像镜头 (internal-focusing imaging lens)\
**Embodiment analyzed:** Example 1

This analysis treats CN 211955965 U, Example 1, as the fixed production correlation for the VILTROX AF 56mm f/1.4 E. The patent itself does not name the Viltrox product, and the cited Viltrox material does not identify this patent; the production relationship is therefore a project correlation rather than a manufacturer-confirmed attribution.

Several independent characteristics converge on that correlation:

1. Example 1 contains ten refractive elements in nine physical groups. Viltrox specifies the AF 56mm F1.4 as a 10-element, 9-group lens.
2. The patent publishes a 55.90 mm infinity focal length, f/1.4 aberration plots, and a 14.1° half-field. Viltrox markets the E-mount production lens as a 56 mm f/1.4 APS-C prime.
3. The patent uses a single negative element, L31, as the entire internal-focus group. Viltrox specifies an internal-focus mechanism for the production lens.
4. Example 1 publishes a closest design state at 0.63 m. Viltrox markets the production lens with a 0.6 m minimum focus distance and 0.1× maximum magnification.
5. Viltrox states that the production optical formula contains one ED element. The patent prescription contains one exceptionally high-Abbe element, L41 (`nd = 1.50`, `νd = 81.59`), which the data model classifies at the 497816 ED coordinate class. This correspondence is consistent but is not an element-level identification published by Viltrox.

The selected Example 1 prescription is retained without uniform scaling. The data file therefore keeps the patent's 55.90 mm design focal length separate from the 56 mm marketed focal length.

## Optical Architecture

The lens is a four-functional-group, all-spherical internal-focus prime with power sequence **positive–positive–negative–positive**: G1, the aperture stop, G2, G3, and G4 from object to image. The patent describes this same group order in the claims and in ¶0057–0072, and Figure 1 on patent page 16 shows the negative G3 element translating toward the image during focusing.

The ten elements form nine physical groups because L21 and L22 are cemented. The independently computed effective focal lengths of the functional groups in the final data are approximately +114.93 mm for G1, +36.83 mm for G2, −35.13 mm for the single-element G3, and +44.95 mm for G4. These are isolated group focal lengths; they should not be confused with the standalone focal lengths of individual elements or with the complete system focal length.

G1 uses a negative–positive–positive–negative sequence. The patent states that this arrangement helps balance positive and negative spherical aberration while reducing the effective ray diameter entering the rear system (¶0025, ¶0058–0061). G2 then provides substantial positive power ahead of the focus element; the patent specifically associates its power range with spherical/coma correction and with reducing the beam diameter incident on G3 (¶0062–0064). G3 is deliberately reduced to one negative meniscus, minimizing the mass that must be translated. G4 returns the system to positive net power and contains the very-high-Abbe L41 together with the final negative meniscus L42.

The aperture-stop record requires one source correction. In the Example 1 numerical table, the powered row printed as `STP` has `R = +34.11 mm` and changes the refractive index from L21 glass to L22 glass, so it is physically the cemented L21→L22 boundary. Figure 1 instead places the iris in the preceding air space between L14 and L21. The data therefore maps the actual plane in that gap to the sole `STO` and retains the powered source row as surface 11. This is a correction of a patent table label, not a change to the prescription values.

The patent also places a plane-parallel filter plate GL behind L42 and explicitly states that the plate may be converted to air (¶0073). The published physical S20-to-image path is 16.67 mm: 13.67 mm of air, 2.00 mm of glass at `nd = 1.52`, and 1.00 mm of air. LensVisualizer excludes that filter and preserves its optical thickness by replacing the path with a 15.985789 mm air-equivalent spacing from surface 20 to the image plane. No sensor cover, filter, dummy plane, folded path, or other non-lens optical component remains in the active prescription.

The design is not described here as telephoto or retrofocus. In the normalized active model, total track divided by computed EFL is about 1.52, and the normalized rear spacing is far shorter than the EFL, so neither project criterion is satisfied.

## Element-by-Element Analysis

### L11 — Negative Meniscus

`nd = 1.65, νd = 33.84. Glass: 648338 class (vendor unresolved). f = −216.46 mm.`

L11 is a weak negative front meniscus and the first member of G1. Its standalone power is modest compared with the following positive elements. In the G1 sequence it establishes the initial negative component of the patent's negative–positive–positive–negative arrangement rather than serving as the principal power-producing element.

The patent describes L11 as the negative first lens, curved toward the image side (claim 1; ¶0058). Its role is therefore best understood in conjunction with the complete G1 power balance rather than as an isolated aberration corrector.

### L12 — Biconvex Positive

`nd = 1.73, νd = 54.68. Glass: 729547 class (vendor unresolved). f = +50.08 mm.`

L12 supplies strong positive standalone power near the front of G1. Its moderate/high Abbe number contrasts with the more dispersive members around it, giving the front group both power and dispersion diversity without requiring an aspherical surface.

The patent identifies L12 as the biconvex positive second lens (claim 1; ¶0058). Together with L13 it forms the positive core of G1.

### L13 — Positive Meniscus

`nd = 1.88, νd = 39.22. Glass: TAFD33 (catalog-equivalent spectral proxy; supplier unresolved). f = +51.24 mm.`

L13 is a dense positive meniscus with nearly the same standalone focal length as L12 but substantially higher refractive index and lower Abbe number. It adds positive power while changing the bending and chromatic balance available within G1.

Because the patent provides only rounded d-line coordinates, the 883392 designation is a catalog-coordinate class rather than a vendor-glass identification.

### L14 — Negative Meniscus

`nd = 1.72, νd = 29.51. Glass: 717295 class (vendor unresolved). f = −27.66 mm.`

L14 is the strongest negative standalone element in G1 and sits immediately ahead of the aperture stop. It closes the front group's negative–positive–positive–negative sequence and moderates the converging bundle produced by L12 and L13 before the stop.

The low `νd` of 29.51 gives L14 strong dispersion relative to the positive elements around it. The patent's group-level discussion attributes the overall G1 arrangement, rather than L14 alone, to balancing spherical aberration and controlling the beam passed to the rear system (¶0025, ¶0061).

### L21 + L22 — Cemented Doublet J1

**L21:** `nd = 1.70, νd = 30.05. Glass: 699301 class (vendor unresolved). f = −19.50 mm.`\
**L22:** `nd = 1.88, νd = 39.23. Glass: TAFD33 (catalog-equivalent spectral proxy; supplier unresolved). f = +20.38 mm.`

The two components have strong, nearly opposed standalone powers, but the cemented pair as a unit is only weakly positive, with an independently computed net focal length of approximately +246.47 mm. This distinction is important: neither the negative L21 nor positive L22 standalone focal length describes the behavior of the bonded unit.

The powered L21→L22 interface is surface 11 in the data, even though the patent numerical table prints `STP` on that row. The downstream L22 refractive index and element identity are assigned to the cemented boundary in accordance with the physical medium transition.

Within G2, the doublet operates in situ with L23. The complete G2 group is much stronger than the cemented pair by itself, computing to about +36.83 mm. The patent connects the G2 power range with spherical/coma correction and with narrowing the beam before it reaches the lightweight G3 focusing lens (¶0062–0064).

### L23 — Biconvex Positive

`nd = 1.91, νd = 35.26. Glass: 911353 class (vendor unresolved). f = +48.30 mm.`

L23 is the highest-index element in the selected prescription and the final positive element of G2. It supplies much of the positive power that turns the weakly positive L21–L22 cemented pair into a strongly positive functional group.

Viltrox describes the production 56 mm f/1.4 formula as containing one high-refractive-index element, but the manufacturer does not publish an element-by-element mapping. L23 is therefore a plausible correspondence because of its `nd = 1.91`, not a confirmed production-material identification.

### L31 — Negative Meniscus, Internal-Focus Element

`nd = 1.73, νd = 54.67. Glass: 729547 class (vendor unresolved). f = −35.13 mm.`

L31 is both the entire G3 group and the only element translated for focus. The patent constrains its d-line index and Abbe number to `1.70 ≤ Nd3 ≤ 1.90` and `50 ≤ Vd3 ≤ 85`, stating that this choice helps control chromatic spherical-aberration variation during focusing (claim 4; ¶0065–0068).

The Example 1 prescription gives `νd = 54.67`; Table 9 prints 54.66 for the same condition. The data retains the prescription value, treating the one-hundredth difference as a source-summary inconsistency rather than silently altering the element.

### L41 — Biconvex Positive, 497816 ED Class

`nd = 1.50, νd = 81.59. Glass: J-FK01A (catalog-equivalent spectral proxy; supplier unresolved). f = +31.22 mm.`

L41 is a strongly positive biconvex element with by far the highest Abbe number in the design. Viltrox states that the production formula contains one ED element, and the 497816 coordinate class is consistent with that description. The manufacturer does not identify the production ED element by position, so the L41 correspondence remains an inference from the patent coordinates and the selected production correlation.

A patent prose error must be distinguished from the numerical design. Paragraph 0025 describes the ninth lens as weak negative, but claim 1, ¶0069, Figure 1, and the Example 1 radii all show L41 as positive. Independent standalone-power calculation gives +31.22 mm. L42, not L41, is the negative element of G4.

### L42 — Negative Meniscus

`nd = 1.57, νd = 42.81. Glass: 567428 class (vendor unresolved). f = −81.00 mm.`

L42 is the weak negative rear meniscus that completes the otherwise positive G4. Its shape is explicitly constrained by the patent through `(Ra + Rb) / (Ra − Rb)`, with the Example 1 radii producing −2.456. The patent associates the G4 power and L42 shape conditions with field-curvature correction and rear-group control (¶0069–0072).

The final element therefore serves as a negative compensating member within a positive rear group rather than as an independently negative rear group.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. Catalog curves below are coordinate-compatible spectral proxies, not identifications of the production supplier or melt. The authored patent indices remain unchanged; no catalog-derived `nC`, `nF`, `ng`, or `dPgF` values are stored as if they were measured source data. The runtime compatibility guard checks the evaluated catalog index within ±0.003 and Abbe number within ±2.

| Element | Patent nd / νd | Runtime catalog curve |
| --- | --- | --- |
| L11 | 1.65 / 33.84 | H-ZF1 |
| L12 | 1.73 / 54.68 | TAC8 |
| L13 | 1.88 / 39.22 | TAFD33 |
| L14 | 1.72 / 29.51 | S-TIH1 |
| L21 | 1.7 / 30.05 | E-FD15 |
| L22 | 1.88 / 39.23 | TAFD33 |
| L23 | 1.91 / 35.26 | TAFD35 |
| L31 | 1.73 / 54.67 | TAC8 |
| L41 | 1.5 / 81.59 | J-FK01A |
| L42 | 1.57 / 42.81 | S-TIL26 |

10/10 elements resolve to catalog dispersion. Explicitly unmatched elements retain the patent-derived Abbe fallback. No APO or patent-backed anomalous-partial-dispersion claim follows from the proxy assignments.

TAFD33 supplies the L13/L22 spectral proxy with Δnd ≈ +0.001 and Δνd ≈ +0.92/+0.91. The nominally closer 883392 curve evaluates just beyond the index guard against the rounded patent nd=1.88 and is not forced through it.

## Focus Mechanism

The focus model is fully **PUBLISHED** rather than reconstructed. The patent states that G3 moves toward the image while G1, G2, and G4 remain fixed relative to the image plane (claim 1; ¶0057). Example 1 provides both variable gaps at infinity and at the closest published design state:

| Focus state | D1 after L23 | D2 after L31 | D1 + D2 |
|---|---:|---:|---:|
| Infinity | 1.00 mm | 7.86 mm | 8.86 mm |
| 0.63 m | 5.01 mm | 3.85 mm | 8.86 mm |

D1 increases by 4.01 mm while D2 decreases by exactly 4.01 mm. The constant sum proves that L31 translates 4.01 mm toward the image without requiring any inferred internal motion.

Using the rounded refractive indices actually stored in the data, the independently computed first-order EFL changes from 56.2346 mm at infinity to 53.3112 mm at the published close state, a reduction of about 5.20%. The patent's own focal-length row changes from 55.90 mm to 52.89 mm. The offset between the raw-array and patent focal lengths is consistent with the patent's coarse two-decimal refractive-index presentation; no radius or spacing is altered to force agreement.

With the final image plane held fixed at the published close spacing state, the rounded-index paraxial model gives an object conjugate about 625.4 mm in front of surface 1 and lateral magnification about −0.0877. This independently supports using the patent's rounded 0.63 m value as a first-surface-referenced close-distance check and is also consistent in scale with Viltrox's marketed 0.1× maximum magnification.

The 0.63 m value remains the modeled close endpoint because it is the patent's published spacing state. Viltrox markets the production lens at 0.6 m minimum focus distance and specifies an STM plus lead-screw drive. Those manufacturer specifications are retained as product context and are not used to interpolate a new patent focus position.

## Chromatic Correction Strategy

The patent distributes dispersion contrast throughout the lens rather than relying on a named proprietary glass set. G1 combines moderate- and low-Abbe glasses across alternating power signs, while the cemented L21–L22 pair places two relatively high-dispersion glasses at a shared interface. L31 uses a moderate/high-Abbe coordinate within the patent's explicit G3 dispersion bounds, and the patent attributes that choice to controlling chromatic spherical-aberration changes during focus (¶0065–0068).

At the rear, L41 is the conspicuous very-high-Abbe element (`νd = 81.59`) and is consistent with Viltrox's statement that the production formula contains one ED element. The data supports describing L41 as an ED **class** element; it does not support a unique vendor-glass identification, an anomalous-partial-dispersion value, or an APO designation.

## Conditional Expressions

CN 211955965 U states six design conditions. The table compares the patent's Example 1 summary with values recomputed from the final active data arrays. All final-array values remain within the claimed bounds.

| Condition | Claimed range | Patent Example 1 | Final active-model value |
|---|---:|---:|---:|
| `TL / F1` | 0.6–0.9 | 0.75 | 0.74223 |
| `F2 / F` | 0.6–0.7 | 0.65 | 0.65486 |
| `F4 / F` | 0.7–0.85 | 0.81 | 0.79932 |
| `Nd3` | 1.70–1.90 | 1.73 | 1.73 |
| `Vd3` | 50–85 | 54.66 | 54.67 |
| `(Ra + Rb) / (Ra − Rb)` | −4.5 to −1 | −2.46 | −2.456 |

The small differences between the source summary and active-model ratios are not treated as prescription errors. The Example 1 table rounds every glass index to two decimals, while the active model also omits GL and normalizes the rear path to an air-equivalent image spacing. An independent catalog-coordinate sensitivity array that rounds back to the published glass rows reproduces the patent's `F4/F ≈ 0.81` and `F2/F ≈ 0.65` summaries; it is used only as a precision check, not as replacement prescription data. The `Vd3` difference is the direct 54.67-versus-54.66 inconsistency between the Example 1 prescription and Table 9.

## Verification Summary

The active prescription contains exactly ten elements, nine physical groups, twenty modeled surfaces including one `STO`, and no aspheres. The complete infinity-state sequential y–ν trace and an independent ABCD construction agree to machine precision. From the final rounded-index arrays, the infinity EFL is 56.234583 mm; the front and rear principal planes lie 44.8146 mm and 29.5815 mm, respectively, from surface 1. The Gaussian back focal distance is 16.4961 mm behind surface 20, whereas the source-constrained normalized image plane is 15.985789 mm behind that surface. The 0.5103 mm residual is retained as a source-precision effect rather than used to alter the published prescription. The surface-by-surface Petzval sum, using `φ/(n·n′)`, is +0.003489611 mm⁻¹.

The patent states f/1.4 but does not publish a physical stop diameter. The data therefore uses an **inferred** stop semi-diameter of 12.5889997 mm. A higher-precision catalog-coordinate sensitivity array that rounds to the patent's printed `nd`/`νd` rows gives EFL 55.9033 mm and independently reproduces f/1.4 at that same stop size. With the rounded indices actually retained in the data, the physical stop gives the modeled `nominalFno = 1.4120949`; the marketed and patent design aperture remain separately recorded as f/1.4.

The patent likewise does not publish clear-aperture semi-diameters. The authored semi-diameters are modeling inferences derived from the final spherical geometry and checked at both published focus states for edge thickness, actual rim slope, cross-gap intrusion, and on/off-axis ray containment. For the close-state ray check, the patent's 0.63 m distance is applied from surface 1, consistent with the independently recovered 625.4 mm paraxial conjugate. They are not claimed as factory lens diameters. The closest modeled rim-band clearance occurs across the 0.97 mm S2–S3 air gap, where the selected clear apertures leave approximately 0.0082 mm axial clearance at the shared radial band; the data's non-default gap allowance reflects this source-geometry constraint rather than a layout adjustment.

No uniform scaling is applied, and there are no aspheric coefficients to transform. The GL filter omission is the only rear-path normalization: its 2.00 mm, `nd = 1.52` optical thickness is folded into the 15.985789 mm air-equivalent S20-to-image spacing. The patent's mislabeled powered `STP` row and the ¶0025 L41 power-sign statement are retained as documented source errors rather than silently changing the numerical design.

### Patent-figure SD review (2026-09-10 UTC)

Reviewed the local `patents/CN211955965U.pdf`, PDF page 16, Figure 1, at 600 dpi. The existing SDs were retained: direct optical-rim inspection did not establish a figure discrepancy large enough to override the ray-clearance and physical-geometry constraints. Labels, group brackets, and focus arrows were excluded from the comparison. All semi-diameters remain modeling inferences. Surface and image-circle audits were run for this prescription.

## Sources and References

1. **CN 211955965 U**, *内合焦式成像镜头*, Example 1, especially claims 1–5; ¶0025; ¶0057–0073; Tables 1–2 and 9; Figure 1 on patent page 16.
2. **Viltrox — AF 56mm F1.4 APS-C Lens for Sony E-Mount:** https://viltrox.com/products/viltrox-autofocus-56mm-f1-4-e-mount-prime-lens
3. **Viltrox — AF 56/1.4 E support page:** https://viltrox.com/pages/af56-1-4e
4. **OHARA optical-glass catalog:** https://oharacorp.com/glass-catalog/
5. **HOYA optical-glass data:** https://www.hoya-opticalworld.com/english/datadownload/index.html
6. **SCHOTT Advanced Optics glass search:** https://www.us.schott.com/shop/advanced-optics/en/search/
7. **HIKARI optical-glass catalog:** https://www.hikari-g.co.jp/optical_glass/catalog/
8. **CDGM optical-glass data:** https://www.cdgmgd.com/go.htm?k=High_Transmittance_Optical_Glass&url=goods
9. **Sumita optical-glass data:** https://www.sumita-opt.co.jp/en/download/
