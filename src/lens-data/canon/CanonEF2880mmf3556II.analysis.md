## Patent Reference and Design Identification

**Patent:** US 5,899,585  
**Application:** 08/889,453  
**Priority:** JP 8-182041, July 11, 1996  
**Filed:** July 8, 1997  
**Granted:** May 4, 1999  
**Inventor:** Hideki Ogawa  
**Assignee:** Canon Kabushiki Kaisha  
**Title:** *Compact Wide-Angle Zoom Lens*  
**Embodiment:** Numerical Example 1

The selected prescription is correlated with the **CANON EF 28-80mm f/3.5-5.6 II**. The patent does not name the retail lens, so the correlation is author-established rather than a Canon-confirmed factory prescription. It is supported by the 10-element/10-group construction, 28.98–77.08 mm design range, 24 × 36 mm image circle, front-unit focus, late-1990s timing, and production specifications.

| Quantity | Production value | Modeled value or status |
|---|---:|---:|
| Focal length | 28–80 mm | 28.968918 / 49.959942 / 76.961180 mm |
| Maximum aperture | f/3.5–5.6 | Patent states f/3.46 / 4.51 / 5.88 |
| Closest focus | 0.38 m | No finite-focus prescription reconstructed |
| Maximum magnification | 0.26× | Identification evidence only |
| Mount / format | Canon EF / 24 × 36 mm | `canon-ef` / `135-full-frame` |
| Construction | 10 elements / 10 groups | 10 air-spaced elements; all spherical |
| Linear scaling | — | None; `s = 1.000000` |

The product's f/5.6 marking is not imposed on the exact patent prescription. A telephoto stop for f/5.6 would require an approximately 8.9819 mm physical semi-diameter and would clip the on-axis marginal bundle at surfaces 13 and 14, whose inferred semi-diameters are 8.3 mm. The model therefore retains the patent f/5.88 state while preserving f/3.5–5.6 as product metadata.

## Optical Architecture

The lens is a three-unit negative–positive–negative standard zoom. The ten production groups are the ten air-spaced elements; the three functional units are a separate analytical grouping.

| Unit | Elements | Computed focal length | Function |
|---|---|---:|---|
| L1 | L11–L14 | −39.866182 mm | Reversing compensator and patent-specified focus unit |
| L2 | L21–L24 | +32.286533 mm | Monotonic objectward variator |
| L3 | L31–L32 | −569.300696 mm | Stationary weak-negative field-correction unit |

The aperture stop is the patent-published plane r11 between L21 and L22. There are no cemented interfaces, aspheres, cover plates, inactive dummy surfaces, or flare-cutter planes in the stored optical stack.

### Zoom kinematics

Coordinates are relative to surface 18, with imageward positive.

| State | Surface 1 | Surface 9 | Surface 18 |
|---|---:|---:|---:|
| Wide | −76.66 mm | −24.35 mm | 0.00 mm |
| Middle | −70.33 mm | −39.29 mm | 0.00 mm |
| Tele | −79.29 mm | −58.55 mm | 0.00 mm |

L2 moves monotonically 34.20 mm objectward from wide to tele. L1 first moves 6.33 mm imageward and then 8.96 mm objectward, preserving the required reversal. The r1-to-r21 tracks are 82.67, 76.34, and 85.30 mm. With the inferred fixed rear spacing, r1-to-image tracks are 120.402911, 114.072911, and 123.032911 mm.

### Cardinal classification

The stored total-length/EFL ratios are 4.15628, 2.28329, and 1.59864. All exceed one, so the design is not telephoto at any state. At wide, BFD/EFL is 1.30253 and the system is negative-leading, supporting a retrofocus classification only at that endpoint. The middle and tele ratios are 0.75526 and 0.49028.

## Element-by-Element Analysis

Each focal length below is the thick element's standalone in-air value, not its in-situ contribution.

### L11 — Positive Meniscus

`nd = 1.51633, νd = 64.1. Glass: S-BSL7 (OHARA equivalent; vendor unspecified). Standalone f = +273.983442 mm.`

A weak positive front meniscus that moderates distortion and entry-bundle bending within net-negative L1.

### L12 — Negative Meniscus

`nd = 1.70154, νd = 41.2. Glass: S-BAH27 (OHARA equivalent; vendor unspecified). Standalone f = −36.355632 mm.`

The strongest negative member of L1 by standalone focal length and a principal source of first-unit negative power.

### L13 — Biconcave Negative

`nd = 1.62299, νd = 58.2. Glass: S-BSM15 (OHARA equivalent; vendor unspecified). Standalone f = −47.243800 mm.`

A lower-dispersion negative element that shares first-unit power and chromatic correction.

### L14 — Positive Meniscus

`nd = 1.76182, νd = 26.5. Glass: S-TIH14 (OHARA equivalent; vendor unspecified). Standalone f = +50.374322 mm.`

A high-dispersion positive meniscus completing the aberration balance of net-negative L1.

### L21 — Biconvex Positive

`nd = 1.63854, νd = 55.4. Glass: S-BSM18 (OHARA equivalent; vendor unspecified). Standalone f = +37.877067 mm.`

The leading positive member of L2 and a major contributor to the variator's net positive power.

### L22 — Positive Meniscus

`nd = 1.66672, νd = 48.3. Glass: S-BAH11 (OHARA equivalent; vendor unspecified). Standalone f = +52.725250 mm.`

A positive meniscus immediately behind the stop, contributing converging power and spherical correction.

### L23 — Biconcave Negative

`nd = 1.78472, νd = 25.7. Glass: S-TIH11 (OHARA equivalent; vendor unspecified). Standalone f = −19.029663 mm.`

The strongest standalone element in L2, balancing three positive members and their chromatic power.

### L24 — Biconvex Positive

`nd = 1.58144, νd = 40.8. Glass: S-TIL25 (OHARA equivalent; vendor unspecified). Standalone f = +31.621733 mm.`

The rear positive member completing the net-positive variator.

### L31 — Biconcave Negative

`nd = 1.63854, νd = 55.4. Glass: S-BSM18 (OHARA equivalent; vendor unspecified). Standalone f = −56.675582 mm.`

The negative front member of the stationary rear field-correction unit.

### L32 — Positive Meniscus

`nd = 1.66672, νd = 48.3. Glass: S-BAH11 (OHARA equivalent; vendor unspecified). Standalone f = +67.550745 mm.`

The positive rear member of L3. Its 1.94 mm air separation from L31 is source-published and must not be described as a cemented doublet.

## Glass Identification and Selection

The patent publishes only `nd` and `νd`. The names below are current OHARA catalog equivalents, not claims about Canon's historical supplier. Current catalog line indices were independently checked, and `dPgF` was recomputed using the project's Schott normal-line convention.

| Equivalent | `nd` / `νd` | `nC` / `nF` / `ng` | `dPgF` | Elements |
|---|---:|---:|---:|---|
| S-BSL7 | 1.51633 / 64.1 | 1.513855 / 1.521905 / 1.526214 | −0.000637017 | L11 |
| S-BAH27 | 1.70154 / 41.2 | 1.696503 / 1.713515 / 1.723323 | +0.002099891 | L12 |
| S-BSM15 | 1.62299 / 58.2 | 1.619739 / 1.630450 / 1.636296 | −0.000180836 | L13 |
| S-TIH14 | 1.76182 / 26.5 | 1.753567 / 1.782296 / 1.799923 | +0.014367850 | L14 |
| S-BSM18 | 1.63854 / 55.4 | 1.635051 / 1.646582 / 1.652906 | −0.002216186 | L21, L31 |
| S-BAH11 | 1.66672 / 48.3 | 1.662589 / 1.676386 / 1.684125 | −0.001606720 | L22, L32 |
| S-TIH11 | 1.78472 / 25.7 | 1.775965 / 1.806519 / 1.825344 | +0.015516035 | L23 |
| S-TIL25 | 1.58144 / 40.8 | 1.577216 / 1.591486 / 1.599726 | +0.002176679 | L24 |

The maximum catalog-to-prescription d-line residual is `4 × 10⁻6`; the maximum Abbe residual is 0.05. No ED, fluorite, KZFS-class, or proprietary anomalous-dispersion material is established, so no apochromatic claim is made.

## Focus Mechanism

The patent assigns focus to complete unit L1, but publishes no finite-focus gaps. The data therefore uses **`NO_INTERNAL_RECONSTRUCTION`**. `closeFocusM: 0.38` records the rounded production MFD only; it does not validate a focus displacement. Infinity and close-control pairs remain identical for D8 and D17, so the control is optically neutral and no undisclosed close-focus state is created.

## Conditional Expressions

| Patent condition | Independent value | Bound | Verdict |
|---|---:|---:|---|
| `β2W × β2T` | 1.080883430 | 0.8–1.2 | Pass |
| `|f1| / fT` | 0.517205271 | 0.45–0.59 | Pass |
| `f2 / fT` | 0.418870435 | 0.37–0.43 | Pass |
| `f2 / |f3|` | 0.056712618 | 0.02–0.085 | Pass |
| `d31 / fT` | 0.025168656 | 0.0025–0.0625 | Pass |

The reconstructed second-unit magnifications are `β2W = −0.637802861` and `β2T = −1.694698308`. All five conditions agree with the intended numerical example.

## Verification Summary

| Quantity | Wide | Middle | Tele |
|---|---:|---:|---:|
| Computed EFL | 28.968918 mm | 49.959942 mm | 76.961180 mm |
| Patent state | 28.98 mm | 50.00 mm | 77.08 mm |
| Gaussian BFD | 37.724482 mm | 37.701927 mm | 37.625185 mm |
| Stored fixed BFD | 37.732911 mm | 37.732911 mm | 37.732911 mm |
| First principal plane from r1 | +40.443899 mm | +36.128819 mm | +28.570781 mm |
| Second principal plane from r21 | +8.755564 mm | −12.258015 mm | −39.335995 mm |
| Entrance-pupil semi-diameter | 4.186260 mm | 5.538796 mm | 6.544318 mm |
| Physical stop semi-diameter | 8.582619 mm | 8.582622 mm | 8.554149 mm |

The patent omits r21-to-image distance. A common-image-plane least-squares recovery gives 37.732910705 mm, stored as 37.732911 mm, while leaving the published D8 and D17 values unchanged. The surface-by-surface Petzval sum is `+0.001397834967 mm⁻¹`, with reciprocal radius `+715.392034 mm`.

The inferred clear apertures satisfy the project geometry checks: minimum edge thickness 0.328266 mm at L32, maximum actual rim angle 53.8627° at surface 4, and minimum 90%-gap margin 0.012219 mm at the surface 13–14 gap. Exact representative on-axis and 60%-field bundles pass at every zoom state. Full-field edge-pupil clipping remains ordinary mechanical vignetting. There are no aspheric departures or positive-`K` limits to evaluate.

## Sources

1. **US Patent 5,899,585**, Hideki Ogawa, *Compact Wide-Angle Zoom Lens*. Numerical Example 1 is on PDF page 9; the condition table is on PDF page 10.
2. **Canon Camera Museum**, “EF28-80mm f/3.5-5.6 II,” for production construction, dimensions, focus distance, magnification, filter size, release timing, and lead-free-glass statement.
3. **Canon U.S.A. support**, “EF 28-80mm f/3.5-5.6 II,” for the front-group rotating focus and micromotor description.
4. **OHARA Optical Glass Catalog**, current manufacturer catalog and datasheets, for equivalent-glass line indices, Abbe numbers, and Sellmeier data.
