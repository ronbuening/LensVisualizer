# Canon EF 28–105mm f/4–5.6 — Patent Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2004/0223070 A1\
**Application Number:** 10/832,558\
**Priority:** May 6, 2003 (JP 2003-128264)\
**Filed:** April 26, 2004\
**Published:** November 11, 2004\
**Inventor:** Takashi Shirasuna\
**Assignee:** Canon Inc. (assigned to Canon Kabushiki Kaisha on the filing date)\
**Title:** _Zoom Lens System_\
**Example details:** Embodiment 4 (Figure 10; ¶0085)\
**Production correlation:** Canon EF 28–105mm f/4–5.6 and EF 28–105mm f/4–5.6 USM; their official block diagrams match Example 4 at published resolution, but literal production-prescription identity is not proved

Numerical Example 4 is the strongest documented production correlate for the Canon EF 28–105mm f/4–5.6 family. The evidence is convergent, but the document does not claim that every published radius, spacing, or glass is the factory prescription:

1. **Construction count.** Canon specifies ten elements in nine groups. Example 4 has ten material elements in nine air-spaced groups when its final plane-parallel plate is counted. The patent's five “lens units” are kinematic units, not the manufacturer's air-spaced-group count.
2. **Block topology.** Figure 10 shows a cemented front doublet, three separate elements in the negative second unit, two elements in the positive third unit, two elements in the positive fourth unit, and a final flat plate. Canon's official diagram has the same visible sequence and element silhouettes at its published resolution.
3. **Asphere placement.** Canon marks one aspherical element. Example 4 has one aspherical surface, surface 18, on the rear element of the fourth unit. Example 5 adds a powered aspherical fifth unit and is therefore excluded.
4. **Focal length and aperture.** The patent gives 28.90–101.35 mm and f/3.95–5.85. Canon markets the lens as 28–105mm f/4–5.6. Manufacturer values govern production metadata; patent values describe the numerical example.
5. **Image format.** The aberration figures use a 21.64 mm image height. The corresponding 43.28 mm image circle matches the diagonal of the 36 × 24 mm format. Using the independently calculated focal lengths gives full rectilinear fields of 73.638° at wide and 24.112° at telephoto, agreeing with the patent's 73.6° and 24.1°.
6. **Close-focus behavior.** Canon specifies 0.48 m minimum focus and 0.19× maximum magnification. A finite-conjugate solve at the patent's telephoto state, moving only L2 as required by ¶¶0042 and 0065, gives 0.18737× at 0.48 m.
7. **Sibling production variants.** Canon's downloaded non-USM and USM block-diagram files are byte-for-byte identical. Their autofocus drives differ—DC motor versus Micro USM II—but the published diagrams do not show an optical-layout difference. Identical diagrams alone do not prove identical unpublished prescription values.
8. **Timing limitation.** Canon lists September 2002 market introduction, while the patent claims May 2003 priority. The post-launch priority date prevents the patent timing from proving a direct production mapping. The count, topology, asphere placement, field, and close-focus result support a strong correlation, not certainty.

Examples 1 and 2 have nine elements and no fixed fifth-unit plate. Example 3 has a three-element fourth unit. Example 5 has a powered PMMA fifth unit and a second aspherical surface. Canon's earlier 28–105mm f/3.5–4.5 lenses use fifteen elements in twelve groups and do not match this prescription.

Two patent wording defects must be resolved from the numerical evidence:

- Paragraph 0039 calls L4 negative, but the abstract, claims, ¶0050, ¶0069, and the calculated focal length all establish positive L4 power. The independently calculated value is +35.564 mm.
- Paragraph 0062 describes the denominator of condition (3) as the second unit, but the printed expression and Table 1 are unequivocally $f_4/f_1$. The calculation follows the expression and correspondence table.

The aberration plots also label their operating apertures differently from the ¶0085 system-data row. The data now opens the iris to that source row’s f/3.95–5.85 endpoints, correcting the earlier marketed f/4–5.6 stop schedule. The middle f/5.0 value remains explicitly inferred. Manufacturer values remain production metadata.

## Optical Architecture

The prescription is a compact **positive–negative–positive–positive zoom** followed physically by a fixed, substantially powerless plate. It has four powered moving units and one fixed neutral unit:

- **L1, positive front unit:** a cemented positive/negative doublet. It moves strongly toward the object during zooming.
- **L2, negative variator and focus unit:** two negative elements followed by one positive element. It supplies most of the magnification change and is the sole focusing unit.
- **Aperture stop:** 0.40 mm ahead of L3. Its distance to L3 is fixed, so it follows the L3 carrier in the numerical model.
- **L3, positive compensator:** one positive and one negative element. It moves objectward and helps hold the image plane during zooming.
- **L4, positive rear variator/relay:** a positive element followed by a negative resin-class aspherical element. It moves objectward while its distance from the fixed plate increases.
- **L5, fixed neutral plate:** a 1.00 mm plane-parallel element with essentially zero paraxial power.

The manufacturer construction is ten elements in nine air-spaced groups. The companion data file now models all ten source elements, including the fixed protective L5 plate. Paragraphs 0069–0071 identify it as part of the lens assembly protecting the exposed rear resin member. It is drawn at the physical source position, with its printed 1.00 mm thickness and 1.516330/64.1 material. The older air-equivalent fold is removed; this is a source-preserving model correction, distinct from the outline estimates. The metadata remains ten elements in nine groups.

With L5's front surface as the fixed reference, the wide-to-telephoto unit motions are:

| Reference surface | Wide position | Middle position | Telephoto position | Wide-to-tele motion |
| ----------------- | ------------: | --------------: | -----------------: | ------------------: |
| L1 front, R1      |     −70.77 mm |       −80.15 mm |         −102.08 mm |           −31.31 mm |
| L2 front, R4      |     −58.15 mm |       −57.50 mm |          −59.49 mm |            −1.34 mm |
| Stop              |     −27.44 mm |       −35.78 mm |          −45.39 mm |           −17.95 mm |
| L3 front, R11     |     −27.04 mm |       −35.38 mm |          −44.99 mm |           −17.95 mm |
| L4 front, R15     |     −15.95 mm |       −28.27 mm |          −40.36 mm |           −24.41 mm |
| L5 front, R19     |       0.00 mm |         0.00 mm |            0.00 mm |             0.00 mm |

Negative motion is objectward. L2 moves 0.65 mm imageward between the wide and middle states, then reverses and moves objectward toward telephoto. This reproduces the patent's image-side-convex L2 zoom track (¶0040).

At the wide end, BFD after the physical plate is 38.386 mm and EFL is 28.907 mm, giving BFD/EFL = 1.328. The wide state therefore meets the strict retrofocus criterion BFD > EFL. At telephoto, the first-vertex-to-image distance is 141.453 mm for a 101.323 mm EFL, giving TL/EFL = 1.396; the full system is not a strict compact telephoto design.

## Element-by-Element Analysis

The standalone focal lengths below are thick-lens, in-air values at the d line. For the cemented front doublet, those standalone values are not interchangeable with each component's in-situ action inside the cemented assembly.

### L11 / E1 — Biconvex Positive, front member of L1

**nd = 1.696797, νd = 55.5. Glass: S-LAL14 (OHARA catalog equivalent; qualified spectral proxy; historical supplier unconfirmed). f = +59.618 mm.**

R1 = +55.383 mm and R2 = −157.062 mm establish a biconvex form. This is the positive first member required by ¶0047 and claim 2. The moderate index and relatively high Abbe number provide the main positive power of L1 without requiring extreme outer curvature.

### L12 / E2 — Biconcave Negative, rear member of L1

**nd = 1.846660, νd = 23.9. Glass: PBH53/PBH53W (OHARA historical catalog equivalent; qualified spectral proxy; historical supplier unconfirmed). f = −140.767 mm.**

The shared R2 surface is negative and R3 is positive, so the element is biconcave. It is the high-index, high-dispersion negative partner in the only cemented group. The printed 1.846660/23.9 pair coincides with OHARA's historical 847-239 PBH53/PBH53W entry. Because the patent does not name a vendor, this is a catalog equivalence rather than a proved material identity; the later S-TIH53 family is not substituted because its published Abbe value differs.

The cemented L1 net focal length is **+99.120 mm**. It is calculated with the actual refractive transition from 1.696797 to 1.846660 at R2, not by treating the two members as air-spaced thin lenses.

### L21 / E3 — Negative Meniscus

**nd = 1.743198, νd = 49.3. Glass: S-LAM60 (OHARA catalog equivalent; qualified spectral proxy; historical supplier unconfirmed). f = −21.554 mm.**

Both radii are positive, but the much stronger rear curvature makes the element negative. It begins the high-power negative L2 variator. Because νd is below 50, it is properly classified as a lanthanum flint rather than a crown.

### L22 / E4 — Biconcave Negative

**nd = 1.712995, νd = 53.9. Glass: S-LAL8 (OHARA catalog equivalent; qualified spectral proxy; historical supplier unconfirmed). f = −27.862 mm.**

R6 = −57.982 mm and R7 = +30.458 mm establish a biconcave negative form. It is separated from E5 by a real 0.12 mm air gap; the two elements are not cemented.

### L23 / E5 — Positive Meniscus

**nd = 1.846660, νd = 23.9. Glass: PBH53/PBH53W (OHARA historical catalog equivalent; qualified spectral proxy; historical supplier unconfirmed). f = +29.526 mm.**

Both radii are positive. The strongly curved front and nearly flat rear surface give positive power. Its high dispersion opposes the two negative L2 components as part of the unit's chromatic balance. The complete L2 focal length is **−20.752 mm**.

### L31 / E6 — Biconvex Positive

**nd = 1.696797, νd = 55.5. Glass: S-LAL14 (OHARA catalog equivalent; qualified spectral proxy; historical supplier unconfirmed). f = +33.789 mm.**

R11 = +36.033 mm and R12 = −66.055 mm establish a biconvex positive element. It supplies most of the positive power in the L3 compensator immediately behind the stop.

### L32 / E7 — Negative Meniscus

**nd = 1.846660, νd = 23.9. Glass: PBH53/PBH53W (OHARA historical catalog equivalent; qualified spectral proxy; historical supplier unconfirmed). f = −45.392 mm.**

Both radii are negative, giving a negative meniscus. It is air-spaced 0.42 mm from E6 and serves as the chromatic partner specified in ¶0049. The complete L3 focal length is **+119.131 mm**.

### L41 / E8 — Biconvex Positive, low-dispersion member of L4

**nd = 1.487490, νd = 70.2. Glass: S-FSL5 (OHARA catalog equivalent; qualified spectral proxy; historical supplier unconfirmed). f = +29.598 mm.**

R15 = +18.494 mm and R16 = −61.289 mm establish a biconvex form. This element supplies most of L4's positive power. S-FSL5 is the lowest-dispersion powered glass in the design, but neither Canon nor the patent identifies it as a special UD element; the prescription supports a conventional well-corrected achromat, not an apochromatic claim.

### L42 / E9 — Negative Meniscus with rear asphere

**nd = 1.583060, νd = 30.2. Material: POLYCARB qualified numerical polymer proxy; selected-source composition and supplier unspecified. f = −117.512 mm.**

Both base radii are negative, making E9 a negative meniscus. Surface 18 is the sole asphere. No public OHARA, HOYA, SCHOTT, HIKARI, CDGM, or Sumita optical-glass entry closely matches the printed pair. Paragraph 0052 states that Examples 1 and 2 use polycarbonate, and those examples use the same 1.583060/30.2 pair; that correspondence supports a cross-example hypothesis but does not identify Example 4 chemistry. The 2026-10-31 follow-up enables the published MISC POLYCARB curve as a numerical spectral proxy, with catalog Δnd +0.002409922 and Δνd −0.290815018 inside existing compatibility windows. This does not transfer a material identity from Examples 1/2 to Example 4.

The complete L4 focal length is **+35.564 mm**. Paragraph 0051 explains that changing the L3–L4 spacing makes off-axis bundles encounter the asphere at different heights across the zoom range, allowing one molded surface to contribute over multiple focal lengths.

### L51 / E10 — Fixed plane-parallel protective plate

**nd = 1.516330, νd = 64.1. Glass: BK7-class crown; S-BSL7 is one catalog equivalent, vendor indeterminate. f = ∞.**

The patent gives two plane surfaces and 1.00 mm center thickness. The plate has no paraxial power, but it changes optical path length and the numerical back focus. Paragraphs 0069–0071 describe it as fixed and substantially powerless, with a protective role when a rear resin asphere would otherwise be exposed. The companion data file includes it as a drawn Plane-Parallel Plate with physical D18, 1.00 mm thickness and a derived Gaussian gap after R20. It is a lens-owned protective unit, not an invented sensor stack.

## Glass Identification and Selection

The patent publishes only $n_d$ and $ν_d$; paragraph 0079 explicitly identifies the d-line reference. It publishes no per-element C/F/g indices, partial-dispersion value or APD evidence. The 24 former catalog-derived C/F/g copies on eight glasses are removed; no printed spectral value is discarded. All ten media now have compatible catalog curves used as qualified spectral proxies after the 2026-10-31 POLYCARB follow-up. The selected rear medium retains unspecified chemistry. The source does not identify historical suppliers or chemistry. The labels below are therefore catalog equivalents selected by numerical matching, with OHARA favored because one coherent OHARA palette reproduces the printed pairs. They must not be read as vendor identities proved by the patent.

| Patent pair     | Catalog equivalent used             | Used at      | Identification status                                         | Optical role                          |
| --------------- | ----------------------------------- | ------------ | ------------------------------------------------------------- | ------------------------------------- |
| 1.696797 / 55.5 | S-LAL14 (OHARA)                     | E1, E6       | Printed pair coincides with catalog                           | Positive lanthanum crown in L1 and L3 |
| 1.846660 / 23.9 | PBH53/PBH53W (OHARA historical)     | E2, E5, E7   | Printed pair coincides with historical 847-239 entry          | Dense-flint chromatic partner         |
| 1.743198 / 49.3 | S-LAM60 (OHARA)                     | E3           | Printed pair coincides with catalog                           | High-index negative L2 member         |
| 1.712995 / 53.9 | S-LAL8 (OHARA)                      | E4           | Printed pair coincides with catalog                           | Negative L2 member                    |
| 1.487490 / 70.2 | S-FSL5 (OHARA)                      | E8           | Printed pair coincides with catalog                           | Low-dispersion positive L4 member     |
| 1.583060 / 30.2 | POLYCARB numerical polymer proxy    | E9           | Published curve; source composition unspecified; Δnd +0.00241 | Aspherical element                    |
| 1.516330 / 64.1 | BK7 class; S-BSL7 is one equivalent | Physical E10 | Common non-unique pair; vendor indeterminate                  | Neutral protective plate              |

The principal chromatic pairings are repeated S-LAL14/PBH53-equivalent combinations in L1 and L3, a mixed two-negative/one-positive palette in L2, and an S-FSL5-equivalent crown opposed by the low-Abbe resin element in L4. Compatible catalog curves supply qualified spectral proxies beyond the patent’s nd/νd pairs; no catalog C/F/g copies are authored as per-lens source values. The evidence does not support an apochromatic claim.

## Focus Mechanism

Focusing is by axial translation of L2 alone (¶¶0042 and 0065; claim 4). L1, the stop/L3 carrier, L4, L5, and the image plane remain fixed at each zoom setting. This is an internal-focus arrangement.

The patent publishes infinity zoom spacings but no finite-focus table. Canon publishes 0.48 m minimum focus and 0.19× maximum magnification. Treating 0.48 m as the object-to-image-plane distance and solving the Gaussian imaging condition with only rigid L2 motion gives:

| Zoom state | L2 shift from infinity | D3 at 0.48 m | D9 at 0.48 m | Paraxial magnification |
| ---------- | ---------------------: | -----------: | -----------: | ---------------------: |
| 28.90 mm   |    2.329 mm objectward |  1.060567 mm | 21.559433 mm |             −0.068131× |
| 50.07 mm   |    3.117 mm objectward | 10.303131 mm | 13.356869 mm |             −0.112516× |
| 101.35 mm  |    6.424 mm objectward | 26.935539 mm |  9.044461 mm |         **−0.187375×** |

D3 decreases and D9 increases by the same amount, preserving the rigid L2 cell. The telephoto magnitude rounds to Canon's 0.19× figure. These values are the physical-prescription production cross-check; they are not patent-tabulated focus prescriptions. The restored physical model uses these independently derived physical-prescription endpoints. They supersede the slightly different earlier folded-model endpoints and remain an inferred three-station approximation.

## Aspherical Surfaces

Surface 18, the rear surface of E9, is the only asphere. The patent defines sag in the direction of light propagation as

$$
X(Y)=\frac{(1/R)Y^2}{1+\sqrt{1-(1+K)(Y/R)^2}}+BY^4+CY^6+DY^8+EY^{10}.
$$

This is the standard conic convention: $K=0$ is a spherical conic base and $K=-1$ is parabolic. No shift such as $K=\kappa-1$ is required. The polynomial contains even powers only.

| Parameter       |  Surface 18 value |
| --------------- | ----------------: |
| Base radius $R$ |        −47.017 mm |
| $K$             |      −2.18133e+00 |
| $A_4$           | +5.67081e−05 mm⁻³ |
| $A_6$           | +3.13412e−07 mm⁻⁵ |
| $A_8$           | −4.03611e−10 mm⁻⁷ |
| $A_{10}$        | +2.29649e−12 mm⁻⁹ |

Because $K<-1$, the base conic is hyperbolic in this convention. At the current 9.0 mm semi-diameter, the full aspheric sag is −0.323010 mm, compared with −0.869429 mm for the same-radius sphere, a +0.546419 mm departure. The adopted cap follows the native outline without adjusting coefficients. The semi-diameter is an engineering estimate because the patent gives no clear-aperture column; the departure is not presented as a production-lens edge measurement.

## Zoom Kinematics

The patent's infinity-focus variable spacings are:

| State     | Focal length | D3, L1–L2 | D9, L2–stop | D14, L3–L4 | D18, L4–L5 |
| --------- | -----------: | --------: | ----------: | ---------: | ---------: |
| Wide      |     28.90 mm |   3.39 mm |    19.23 mm |    7.25 mm |    0.83 mm |
| Middle    |     50.07 mm |  13.42 mm |    10.24 mm |    3.27 mm |   13.15 mm |
| Telephoto |    101.35 mm |  33.36 mm |     2.62 mm |    0.79 mm |   25.24 mm |

D3 and D18 increase, while D9 and D14 decrease. L1, L3, and L4 move toward the object. L2 follows a reversing track, first slightly imageward and then objectward. The fixed L5 plate provides the mechanical and optical axial reference.

Canon publishes marketed f/4 and f/5.6 endpoints. The data now uses the numerical example’s f/3.95 and f/5.85 design endpoints for the actual iris, with f/5.0 retained as an explicit inferred intermediate control value at 50.07 mm. The marketed telephoto aperture is slightly faster than the patent example, which is another reason not to treat Example 4 as a proved factory prescription.

## Conditional Expressions

The patent states:

$$0.1 < \frac{f_4}{f_3} < 0.9, \qquad 0.25 < \frac{f_4}{f_3} < 0.5\ \text{(preferred)},$$

$$2.0 < \frac{f_1}{f_w} < 5.0, \qquad 3.0 < \frac{f_1}{f_w} < 4.0\ \text{(preferred)},$$

$$0.15 < \frac{f_4}{f_1} < 0.8, \qquad 0.25 < \frac{f_4}{f_1} < 0.5\ \text{(preferred)}.$$

Using independently calculated $f_1=+99.1203$ mm, $f_3=+119.1309$ mm, and $f_4=+35.5640$ mm, with the patent's published wide-end value $f_w=28.90$ mm for condition (2):

| Expression | Calculated | Patent Table 1 | Difference | Result                                |
| ---------- | ---------: | -------------: | ---------: | ------------------------------------- |
| $f_4/f_3$  |   0.298528 |          0.298 |  +0.000528 | Passes principal and preferred ranges |
| $f_1/f_w$  |   3.429770 |          3.430 |  −0.000230 | Passes principal and preferred ranges |
| $f_4/f_1$  |   0.358796 |          0.359 |  −0.000204 | Passes principal and preferred ranges |

The latter two values round conventionally to the patent table. The printed prescription gives $f_4/f_3=0.298528$, which would ordinarily round to 0.299 rather than 0.298; this discrepancy must not be described as ordinary three-decimal rounding. Perturbing the printed radii, thicknesses, and indices within half a unit of their last published digits gives a verified range of approximately 0.298353–0.298709, so hidden design precision or truncation can account for the table entry. The discrepancy does not affect compliance with either inequality.

## Independent Paraxial Verification

The patent's sign convention is established by claim 2: the first component is biconvex and the second biconcave, corresponding to $(+,-)$ and $(-,+)$ radii. The prescription is dimensional in millimeters, not normalized to $f=100$; no scale factor is applied.

The verification uses reduced-angle vectors $[y,q]^T$ with $q=nu$:

$$
S=\begin{bmatrix}1&0\\-(n'-n)/R&1\end{bmatrix},\qquad
T=\begin{bmatrix}1&t/n\\0&1\end{bmatrix}.
$$

For $M=\begin{bmatrix}A&B\\C&D\end{bmatrix}$ in air, EFL $=-1/C$ and BFD $=-A/C$.

| State     | Patent focal length | Calculated EFL |     Residual | BFD after R20 | R1-to-R20 track | R1-to-image track |
| --------- | ------------------: | -------------: | -----------: | ------------: | --------------: | ----------------: |
| Wide      |           28.900 mm |   28.906826 mm | +0.006826 mm |  38.386495 mm |       71.770 mm |     110.156495 mm |
| Middle    |           50.070 mm |   50.082446 mm | +0.012446 mm |  38.392790 mm |       81.150 mm |     119.542790 mm |
| Telephoto |          101.350 mm |  101.323296 mm | −0.026704 mm |  38.373018 mm |      103.080 mm |     141.453018 mm |

The ABCD matrices from immediately before R1 to immediately after R20 are:

```text
Wide:   [[ 1.32793879, 48.87970580],
         [-0.03459391, -0.52031008]]
Middle: [[ 0.76659174, 55.92126340],
         [-0.01996708, -0.15208109]]
Tele:   [[ 0.37871862, 87.37884789],
         [-0.00986940,  0.36339200]]
```

Higher-order aspheric terms do not change paraxial power; surface 18 uses its base radius in the first-order trace.

### Unit and standalone element focal lengths

| Unit or element | Focal length |
| --------------- | -----------: |
| L1 cemented net |   +99.120 mm |
| L2 complete     |   −20.752 mm |
| L3 complete     |  +119.131 mm |
| L4 complete     |   +35.564 mm |
| E1 standalone   |   +59.618 mm |
| E2 standalone   |  −140.767 mm |
| E3 standalone   |   −21.554 mm |
| E4 standalone   |   −27.862 mm |
| E5 standalone   |   +29.526 mm |
| E6 standalone   |   +33.789 mm |
| E7 standalone   |   −45.392 mm |
| E8 standalone   |   +29.598 mm |
| E9 standalone   |  −117.512 mm |
| L5 plate        |            ∞ |

### Surface-by-surface Petzval sum

The Petzval calculation uses the surface expression

$$P_i=\frac{\phi_i}{n_i n_i'},\qquad \phi_i=\frac{n_i'-n_i}{R_i},$$

rather than an element-level thin-lens shortcut.

|       Surface | Petzval contribution (mm⁻¹) |
| ------------: | --------------------------: |
|             1 |               +7.414808e−03 |
|             2 |               −3.045134e−04 |
|             3 |               −9.229536e−04 |
|             4 |               +2.082174e−03 |
|             5 |               −2.878159e−02 |
|             6 |               −7.178558e−03 |
|             7 |               −1.366561e−02 |
|             8 |               +1.918494e−02 |
|             9 |               −9.031188e−04 |
|      10, stop |                           0 |
|            11 |               +1.139662e−02 |
|            12 |               +6.216854e−03 |
|            13 |               −1.372495e−02 |
|            14 |               +1.770747e−03 |
|            15 |               +1.772070e−02 |
|            16 |               +5.347233e−03 |
|            17 |               −1.339804e−02 |
|            18 |               +7.833592e−03 |
| 19–20, planes |                           0 |
|     **Total** |      **+8.834213e−05 mm⁻¹** |

The reciprocal scale is +11.320 m in this sign convention. The near cancellation is a surface-by-surface result.

## Data-File Implementation and Semi-Diameter Verification

### Physical L5 restoration and inferred focus

The selected source explicitly includes L5 as the lens’s fixed protective fifth unit. Its two plane surfaces are now
modeled at the physical D18 = 0.83 / 13.15 / 25.24 mm positions, with 1.00 mm thickness and nd/νd = 1.516330/64.1.
The gap after R20 is derived from the printed prescription’s Gaussian back focus, not represented as a published row:

| Zoom z | Physical D18 (mm) | Derived gap after R20 (mm) | Inferred L2 close shift (mm) |
| ------ | ----------------: | -------------------------: | ---------------------------: |
| 0      |              0.83 |               38.386495160 |                  2.329433150 |
| 0.5    |             13.15 |               38.392789514 |                  3.116868704 |
| 1      |             25.24 |               38.373018403 |                  6.424461448 |

Restoring the physical plate lengthens the geometric first-surface-to-image distance by 0.340513 mm relative to the
former air-equivalent fold while preserving the paraxial reduced translation. Each discrete close endpoint is re-solved
for 480 mm object-to-image distance; the original D3/D9 infinity values are unchanged. These inferred controls are not
patent or production cam measurements. At intermediate zoom, the close setting’s actual paraxial object-to-image
distance ranges from about 362.313 to 480 mm; the interpolation does not guarantee constant production MFD.

### Native outlines and retained constraints — 2026-10-30

Native Figure 10 is contained in a 2560 × 3300 raster. Its lens crop was inspected without upsampling; PDF placement
reports about 310 × 282 dpi. Local lens geometry gives approximately 12 native pixels/mm. Inferred glass heights
carry about ±0.5 mm reading/schematic uncertainty. The first cemented unit’s 21.5 mm clear heights follow the native
common endpoints and remove unintended finite corner-chief clipping. S5 now has a resolved outer shoulder at 13.6 mm,
retaining its 10.8 mm optical cap. L2 and L4 heights are corrected toward the native outline; no opaque land is added
at the bonded S2 interface. The small S13/S14 raise to 7.07 mm clears the strict source axial aperture check while
retaining the native pair’s common height. The 10.3 mm S6/S7 trial exceeded the unchanged S5–S6 gap guard, so 10.1 mm
is retained. Source radii, thicknesses, asphere and unit motions are preserved.

L5’s source does not publish a diameter. Its adopted 14.5 mm semi-diameter follows the sampled envelope of rays
that reach the image format or display field across 65 zoom × 21 focus states: maximum plate radius 13.452205 mm,
plus 5%, rounded up to 0.5 mm. The plate is consequently taller than the schematic wide-end outline. That is a
qualified beam-clear estimate, not a printed mechanical dimension.

### Runtime range and source-angle qualification

All 1365 zoom/focus states have ten connected finite closed element paths and zero hidden renderer trim. All samples
are aimed, all sampled chiefs clear and all 49 axial pupil rays pass at each state. At source zoom stations, the
49-point axial / 0.6-field / corner survivors are 49/39/19, 49/48/35 and 49/46/29 at infinity; the inferred close
states give 49/39/19, 49/46/40 and 49/46/24 (current-state iris follow-up below). Peripheral vignetting remains explicit, including occasional bonded-interface
clips. This sampled clearance is not a complete peripheral transmission proof. No inferred cut is present.

A 65-position infinity aperture/first-order census stays within numerical tolerance of the stated iris schedule, but
maximum absolute paraxial defocus is −1.185700 mm at z = 0.28125. The published stations have derived Gaussian image
gaps; their intervals are illustrative and do not preserve focus. All sampled format-corner chiefs clear. Separately,
the printed source half-angles map to about 20.485 mm (94.7% of format half-diagonal) at 36.8° wide and 22.509 mm
(104.0%) at 12.05° tele. These real-ray source-angle heights are distinct from the source’s paraxial field arithmetic
and the runtime’s automatically solved format corner. No radius, asphere or image gap is tuned to remove that distinction.
Source fidelity, sampled runtime clearance and post-launch production correlation remain separate conclusions.

## Sources

1. Takashi Shirasuna, _Zoom Lens System_, US 2004/0223070 A1, published November 11, 2004. Figures 10–12; ¶¶0039–0055, 0061–0071, 0079–0081, 0085, 0087; claims 1–8.
2. Canon Camera Museum, [EF28-105mm f/4-5.6](https://global.canon/en/c-museum/product/ef368.html): official product name, September 2002 launch, 10-element/9-group construction, 0.48 m minimum focus, 0.19× magnification, filter size, diaphragm count, drive description, and optical block diagram.
3. Canon Camera Museum, [EF28-105mm f/4-5.6 USM](https://global.canon/en/c-museum/product/ef369.html): official Micro USM II variant and matching optical block diagram.
4. OHARA Corporation, [Optical Glass Pocket Catalog](https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf): current S-LAL14, S-LAM60, S-LAL8, S-FSL5, and S-BSL7 d-line and spectral data.
5. OHARA Corporation, [_Optical Glass_ catalog 02-06](https://wp.optics.arizona.edu/optomech/wp-content/uploads/sites/53/2016/10/Ohara_Glass_Catalog.pdf), archival catalog mirror: historical PBH53/PBH53W 847-239 d-line and spectral data.

## 2026-10-30 — Current-state iris runtime follow-up

This is a runtime-only correction using the unchanged prescription and controls. It does not repeat the original-PDF shape/glass inspection or change its date. The earlier full-pupil helper used the base wide-state `lens.stop.physicalSemiDiameter`. The corrected helper uses the current prepared state's STO semi-diameter, so variable-iris zooms receive their actual aperture. The separate 65-position aperture/chief/first-order census already used the actual state iris and is unchanged. Prior full-pupil counts are superseded here.

All 66,885/66,885 axial samples and all 4,095 sampled chiefs clear with the actual state iris. Peripheral counts in the table remain partial transmission rather than a full-beam guarantee. The current-iris useful-bundle plate envelope reaches 13.478941 mm, below the retained inferred 14.5 mm plate SD; no source plate dimension is newly claimed.

| Zoom z | Focus state    | Axial / 0.6-field / corner survivors (of 49) |
| ------ | -------------- | -------------------------------------------- |
| 0      | Infinity       | 49 / 39 / 19                                 |
| 0      | Inferred close | 49 / 39 / 19                                 |
| 0.5    | Infinity       | 49 / 48 / 35                                 |
| 0.5    | Inferred close | 49 / 46 / 40                                 |
| 1      | Infinity       | 49 / 46 / 29                                 |
| 1      | Inferred close | 49 / 46 / 24                                 |

The 65-zoom × 21-focus census evaluates 1,365 states and 200,655 pupil launches. Every sample is aimed and all 4,095 chiefs clear. Element paths remain finite, closed and connected, with zero hidden renderer trimming. Source-station shapes, inferred cuts (none), material evidence, all source R/d, image planes, aperture schedule, controls and existing guards are unchanged. These are sampled runtime results, separate from source fidelity and production correlation.

## 2026-10-30 — Source-Stated Catalog Design Metadata

This metadata-only follow-up preserves the original review date and source inspection. The catalog design focal range is 28.9–101.35 mm, taken directly from Numerical Example4, paragraph0085, PDF p19 / printed7: focal-length stations28.90/50.07/101.35. The prior computed model EFL range 28.906826–101.323296 mm remains a calculated result, separately qualified in this analysis; it is not a printed source target.

All R/d, media, spectral values, stops, apertures, gaps, focus/zoom controls, source-errata dispositions and retained limitations are unchanged. This correction adds no fresh shape/glass review and makes no claim to resolve an authored reconstruction or production correlation.

## 2026-10-31 — Published POLYCARB numerical proxy follow-up

US 2004/0223070 A1, Numerical Example 4, PDF page 19 / printed 7, paragraph 0085 R17/L42; paragraph 0079 defines the d-line reference. The source pair, geometry and original review dates are unchanged; this is catalog-source work, not a repeat shape inspection. Paragraph 0052 names polycarbonate for Examples 1/2, not selected Example 4. Neither the numerical match nor the qualified POLYCARB curve converts that cross-example hypothesis into source-established chemistry.

The permission-bearing [RadiantZemax MISC.AGF archival copy](https://github.com/uasal/zmx2yaml/blob/36f3cd24da467375821b0a66698274fd84e19f6d/AGF_files/misc.agf) publishes a replayable POLYCARB Schott polynomial, cited to _Handbook of Optics Vol. II_. The [official Ansys source table](https://ansyshelp.ansys.com/public/Views/Secured/Zemax/v251/en/OpticStudio_User_Guide/OpticStudio_Help/topics/Glass_Catalog_Sources.html) independently confirms that attribution. This is a published numerical material curve, not a direct material-manufacturer fetch or proof of the selected patent medium's chemistry, formulation, supplier or Canon process. The handbook coefficient table was not directly inspected; its chapter/page is not invented.

The native row uses $n^2=a_0+a_1\lambda^2+a_2\lambda^{-2}+a_3\lambda^{-4}+a_4\lambda^{-6}+a_5\lambda^{-8}$, with wavelength in µm, reference temperature 20 °C and valid range 0.365–1.014 µm. At C/d/F/g it evaluates 1.579863774 / 1.585469922 / 1.599438695 / 1.611520588; computed νd is 29.909184982. Its own-row residuals, −0.00000007757 in nd and −0.00000001834 in νd, pass strict 0.00003/0.11 guards. All 1,001 sampled wavelengths are finite and normally dispersive. Relative to the source 1.583060/30.2 pair, the comparatively large nd difference +0.002409922 and νd difference −0.290815018 fit the existing ±0.003/±2 compatibility windows. The runtime retains the authored source index; the curve supplies only qualified spectral variation. No per-lens C/F/g indices, partials, coefficients or new APD badge are authored.

L42 / E9 now uses this qualified curve; current spectral coverage is 10/10 media. All source pairs, published values, source errata, aperture/focus/zoom controls, physical gaps and shape conclusions remain unchanged.
