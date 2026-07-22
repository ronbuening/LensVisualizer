## Patent Reference and Design Identification

**Patent:** US 5,899,585  
**Application Number:** 08/889,453  
**Priority:** JP 8-182041, July 11, 1996  
**Filed:** July 8, 1997  
**Granted:** May 4, 1999  
**Inventor:** Hideki Ogawa  
**Assignee:** Canon Inc. (source form: Canon Kabushiki Kaisha)  
**Title:** *Compact Wide-Angle Zoom Lens*  
**Embodiment analyzed:** Numerical Example 1

The prescription is correlated with the **CANON EF 28-80mm f/3.5-5.6 II**. The patent does not name the retail lens, and Canon does not publish a patent-to-product cross-reference, so the identification remains an author-established production correlation rather than a manufacturer-confirmed factory prescription.

1. Numerical Example 1 has ten elements in ten air-spaced groups, matching Canon's published 10/10 construction.
2. Its patent focal states are 28.98, 50.00, and 77.08 mm; independent paraxial calculation gives 28.968918, 49.959942, and 76.961180 mm, consistent with the marketed 28–80 mm range.
3. The patent states f/3.46, f/4.51, and f/5.88. The wide state agrees closely with the marketed f/3.5; the prescription's tele state is retained rather than forcing the rounded f/5.6 product marking.
4. Combining the computed EFLs with the patent half-fields gives image semi-heights of 21.628, 21.620, and 21.604 mm, consistent with the 21.63 mm half-diagonal of the 24 × 36 mm format.
5. The patent assigns focusing to the complete first unit, consistent with Canon's front-group focus description, and its 1996 priority date precedes the product's April 1999 market introduction.

| Quantity | Production / marketing value | Modeled value or status |
|---|---:|---:|
| Focal length | 28–80 mm | 28.968918 / 49.959942 / 76.961180 mm |
| Maximum aperture | f/3.5–5.6 | Patent states f/3.46 / 4.51 / 5.88 |
| Closest focus | 0.38 m | No finite-focus optical state reconstructed |
| Maximum magnification | 0.26× | Identification evidence only |
| Construction | 10 elements / 10 groups | 10 air-spaced elements; all spherical |
| Mount / format | Canon EF / 24 × 36 mm | `canon-ef` / `135-full-frame` |
| Linear scaling | — | None; `s = 1.000000` |

The product's f/5.6 marking is not imposed on the exact patent prescription. At the tele state, f/5.6 would require an approximately 8.9819 mm physical stop semi-diameter. Exact axial tracing places that ray outside the modeled stop and outside the 8.3 mm semi-diameters at surfaces 13 and 14. The data therefore retains the patent f/5.88 state while preserving f/3.5–5.6 as product metadata.

## Optical Architecture

The optical system is a **three-unit negative–positive–negative standard zoom**. The ten production groups are the ten individual air-spaced elements; L1, L2, and L3 are functional units at a different structural level.

| Functional unit | Elements | Computed focal length | Motion and principal function |
|---|---|---:|---|
| L1 | L11–L14 | −39.866182 mm | Reversing compensator and patent-specified focus unit |
| L2 | L21–L24 | +32.286533 mm | Monotonic objectward variator carrying the principal positive power |
| L3 | L31–L32 | −569.300696 mm | Stationary weak-negative field-correction unit |

L1 contains a weak positive meniscus, two negative elements, and a stronger positive rear meniscus, but remains net negative. L2 contains three positive elements surrounding a strong biconcave negative element and remains strongly positive. L3 is an air-spaced negative-positive pair whose component powers nearly cancel, leaving a weak net-negative unit. The aperture stop is the patent-published plane r11 between L21 and L22. No cemented interface, asphere, cover plate, inactive dummy surface, or flare-cutter plane is retained.

### Zoom kinematics

Coordinates below are measured relative to the fixed front surface of L3, with imageward positive.

| State | L1 front, surface 1 | L2 front, surface 9 | L3 front, surface 18 |
|---|---:|---:|---:|
| Wide | −76.66 mm | −24.35 mm | 0.00 mm |
| Middle | −70.33 mm | −39.29 mm | 0.00 mm |
| Tele | −79.29 mm | −58.55 mm | 0.00 mm |

L2 moves monotonically 34.20 mm objectward from wide to tele. L1 first moves 6.33 mm imageward and then 8.96 mm objectward, reproducing the patent's reversing locus. The r1-to-r21 tracks are 82.67, 76.34, and 85.30 mm. With the fixed inferred rear spacing, the r1-to-image tracks are 120.402911, 114.072911, and 123.032911 mm.

### Cardinal classification

The stored total-length-to-EFL ratios are 4.15628, 2.28329, and 1.59864. All exceed one, so the design is not telephoto at any modeled state. At wide, BFD/EFL is 1.30253 and the architecture is negative-leading, supporting a retrofocus classification only at that endpoint. The middle and tele BFD/EFL ratios are 0.75526 and 0.49028.

## Element-by-Element Analysis

Each focal length below is the independently calculated thick-element focal length **alone in air**. It is not the element's in-situ contribution within the complete zoom.

### L11 — Positive Meniscus

`nd = 1.51633, νd = 64.1. Glass: S-BSL7 (OHARA equivalent; vendor unspecified). Standalone f = +273.983442 mm.`

L11 is a weak positive front meniscus. Its modest standalone power shapes the entering bundle and supports the distortion-control role that the patent assigns to the first positive lens of L1.

### L12 — Negative Meniscus

`nd = 1.70154, νd = 41.2. Glass: S-BAH27 (OHARA equivalent; vendor unspecified). Standalone f = −36.355632 mm.`

L12 is the strongest negative member of L1 by standalone focal length. Its strongly concave image-side surface supplies a large part of the first unit's negative power in a compact axial space.

### L13 — Biconcave Negative

`nd = 1.62299, νd = 58.2. Glass: S-BSM15 (OHARA equivalent; vendor unspecified). Standalone f = −47.243800 mm.`

L13 shares the negative work of L1 across two surfaces. Its higher Abbe number than L12 and L14 broadens the first unit's ordinary chromatic balancing freedom without establishing an ED or apochromatic function.

### L14 — Positive Meniscus

`nd = 1.76182, νd = 26.5. Glass: S-TIH14 (OHARA equivalent; vendor unspecified). Standalone f = +50.374322 mm.`

L14 partially cancels the two negative elements while preserving L1's net-negative sign. Its high-index, high-dispersion class gives the four-element unit additional control over axial and chromatic balance during zooming and front-unit focus.

### L21 — Biconvex Positive

`nd = 1.63854, νd = 55.4. Glass: S-BSM18 (OHARA equivalent; vendor unspecified). Standalone f = +37.877067 mm.`

L21 is the leading positive member of L2 and lies immediately before the aperture-stop gap. It provides strong convergence at the entrance of the principal variator and materially influences entrance-pupil imaging.

### L22 — Positive Meniscus

`nd = 1.66672, νd = 48.3. Glass: S-BAH11 (OHARA equivalent; vendor unspecified). Standalone f = +52.725250 mm.`

L22 is the first refracting element behind the stop. It distributes the positive power of L2 and participates in the unit-level spherical-aberration variation described by the patent.

### L23 — Biconcave Negative

`nd = 1.78472, νd = 25.7. Glass: S-TIH11 (OHARA equivalent; vendor unspecified). Standalone f = −19.029663 mm.`

L23 is the strongest standalone element in the prescription. Its negative power counterbalances the three positive elements of L2, permitting the unit to remain strongly positive without concentrating all convergence in the surrounding surfaces.

### L24 — Biconvex Positive

`nd = 1.58144, νd = 40.8. Glass: S-TIL25 (OHARA equivalent; vendor unspecified). Standalone f = +31.621733 mm.`

L24 restores positive power after L23 and controls the vergence delivered to the stationary rear unit. It completes the verified +32.286533 mm net focal length of L2.

### L31 — Biconcave Negative

`nd = 1.63854, νd = 55.4. Glass: S-BSM18 (OHARA equivalent; vendor unspecified). Standalone f = −56.675582 mm.`

L31 supplies the negative component of the stationary rear unit. The patent assigns L3 to residual field-curvature correction after the first two units produce opposing field tendencies.

### L32 — Positive Meniscus

`nd = 1.66672, νd = 48.3. Glass: S-BAH11 (OHARA equivalent; vendor unspecified). Standalone f = +67.550745 mm.`

L32 is separated from L31 by the patent-published 1.94 mm air gap. The pair is not a cemented doublet; the separation is part of the patent's strategy for shifting the unit principal point and retaining a weak net power.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number. The stored names are current OHARA catalog equivalents, not claims that Canon used OHARA or those exact historical trade names. Independent catalog searching found a unique near-exact OHARA match for each of the eight distinct `(nd, νd)` pairs. The maximum d-line residual is `4 × 10⁻6`, and the patent-to-catalog Abbe residual is no greater than 0.05 after accounting for the patent's one-decimal values.

| Catalog equivalent | `nd` / `νd` in prescription | `nC` / `nF` / `ng` stored | `dPgF` | Elements |
|---|---:|---:|---:|---|
| S-BSL7 | 1.51633 / 64.1 | 1.513855 / 1.521905 / 1.526214 | −0.000637017 | L11 |
| S-BAH27 | 1.70154 / 41.2 | 1.696503 / 1.713515 / 1.723323 | +0.002099891 | L12 |
| S-BSM15 | 1.62299 / 58.2 | 1.619739 / 1.630450 / 1.636296 | −0.000180836 | L13 |
| S-TIH14 | 1.76182 / 26.5 | 1.753567 / 1.782296 / 1.799923 | +0.014367850 | L14 |
| S-BSM18 | 1.63854 / 55.4 | 1.635051 / 1.646582 / 1.652906 | −0.002216186 | L21, L31 |
| S-BAH11 | 1.66672 / 48.3 | 1.662589 / 1.676386 / 1.684125 | −0.001606720 | L22, L32 |
| S-TIH11 | 1.78472 / 25.7 | 1.775965 / 1.806519 / 1.825344 | +0.015516035 | L23 |
| S-TIL25 | 1.58144 / 40.8 | 1.577216 / 1.591486 / 1.599726 | +0.002176679 | L24 |

The line indices reproduce the selected catalog entries at the stored precision, and the corresponding Sellmeier coefficients reproduce the catalog d-line indices to substantially better than `1 × 10⁻6`. The palette provides ordinary achromatizing degrees of freedom. No element is established as ED, fluorite, KZFS-class, or proprietary anomalous-dispersion glass, so the design is not characterized as apochromatic.

## Focus Mechanism

The patent assigns focusing to the complete first unit L1 while L2 and L3 retain their zoom-state positions. Canon describes the production lens as front-group focusing; the mechanical rotation is a means of producing the axial optical motion.

The patent publishes no finite-focus D8 or D17 values, no worked object distance, and no close-focus magnification state. The data therefore uses **`NO_INTERNAL_RECONSTRUCTION`**. `closeFocusM: 0.38` records Canon's rounded production MFD only and does not validate a particular L1 displacement.

| Zoom state | D8 infinity / close control | D17 infinity / close control |
|---|---:|---:|
| Wide | 32.88 / 32.88 mm | 3.01 / 3.01 mm |
| Middle | 11.61 / 11.61 mm | 17.95 / 17.95 mm |
| Tele | 1.31 / 1.31 mm | 37.21 / 37.21 mm |

The identical pairs deliberately keep the focus control optically neutral. No focus travel or finite-focus magnification is claimed.

## Conditional Expressions

All five patent conditions are satisfied. The ratios using `fT` use the patent's printed tele focal length of 77.08 mm, matching the convention of Table 1.

| Patent condition | Independent value | Patent Table 1 | Bound | Verdict |
|---|---:|---:|---:|---|
| `β2W × β2T` | 1.080883430 | 1.083 | 0.8–1.2 | Pass |
| `|f1| / fT` | 0.517205271 | 0.517 | 0.45–0.59 | Pass |
| `f2 / fT` | 0.418870435 | 0.419 | 0.37–0.43 | Pass |
| `f2 / |f3|` | 0.056712618 | 0.057 | 0.02–0.085 | Pass |
| `d31 / fT` | 0.025168656 | 0.0252 | 0.0025–0.0625 | Pass |

The independently reconstructed second-unit magnifications are `β2W = −0.637802861` and `β2T = −1.694698308`. Their product and all four focal-length/separation ratios agree with the intended numerical example within the patent's rounding.

## Verification Summary

| Quantity | Wide | Middle | Tele |
|---|---:|---:|---:|
| Computed EFL | 28.968918 mm | 49.959942 mm | 76.961180 mm |
| Patent focal-state label | 28.98 mm | 50.00 mm | 77.08 mm |
| Gaussian BFD from surface 21 | 37.724482 mm | 37.701927 mm | 37.625185 mm |
| Stored fixed BFD | 37.732911 mm | 37.732911 mm | 37.732911 mm |
| First principal plane from surface 1 | +40.443899 mm | +36.128819 mm | +28.570781 mm |
| Second principal plane from surface 21 | +8.755564 mm | −12.258015 mm | −39.335995 mm |
| r1-to-r21 track | 82.670000 mm | 76.340000 mm | 85.300000 mm |
| Entrance-pupil semi-diameter | 4.186260 mm | 5.538796 mm | 6.544318 mm |
| Effective physical stop semi-diameter | 8.582619 mm | 8.582622 mm | 8.554149 mm |
| Exit-pupil coordinate from surface 21 | −20.377477 mm | −36.025287 mm | −55.014518 mm |
| Modeled wide-open f-number | 3.46 | 4.51 | 5.88 |

The patent omits the r21-to-image spacing. Its two-decimal zoom gaps yield Gaussian BFD estimates spanning 0.099297 mm even though L3 is stationary. A common-image-plane least-squares recovery gives 37.732910717 mm, stored as 37.732911 mm, while the data retains the printed D8 and D17 values. The stored plane is therefore 0.008429, 0.030984, and 0.107726 mm imageward of the raw Gaussian focus at wide, middle, and tele. This is a disclosed modeling inference, not a correction to the patent table.

The surface-by-surface Petzval sum, using `φ/(n·n′)` at every refracting surface, is `+0.001397834967 mm⁻¹`; its reciprocal radius is `+715.392034 mm`. The inferred apertures give a minimum element edge thickness of 0.149982 mm at L21, a maximum actual spherical rim angle of 53.8627° at surface 4, and a minimum 90%-gap margin of 0.012219 mm between surfaces 13 and 14. No hidden surface trim is required.

Independent exact tracing confirms that representative on-axis and 60%-field bundles pass at wide, middle, and tele, and that the full-field chief ray reaches the image plane at all three states. Some full-field edge-pupil rays are mechanically vignetted, consistent with the deliberately inferred clear apertures. No aspheric departure, conic-height limit, cover glass, cement layer, stabilization state, or finite-focus state applies.

## Sources

1. **US Patent 5,899,585**, Hideki Ogawa, *Compact Wide-Angle Zoom Lens*, granted May 4, 1999. Numerical Example 1 is on PDF page 9; Table 1 is on PDF page 10.
2. **Canon Camera Museum**, [EF28-80mm f/3.5-5.6 II](https://global.canon/en/c-museum/product/ef347.html). Production construction, market date, MFD, magnification, aperture blades, filter size, dimensions, drive description, and lead-free-glass statement.
3. **Canon U.S.A. Support**, [EF 28-80mm f/3.5-5.6 II](https://www.usa.canon.com/support/p/ef-28-80mm-f-3-5-5-6-ii). Front-group rotating focus and micromotor description.
4. **OHARA**, [Optical Glass Catalog](https://www.ohara-inc.co.jp/en/product/optical-glass/). Current catalog identities, line indices, Abbe values, and dispersion coefficients. Catalog equivalence does not establish Canon's historical supplier.
