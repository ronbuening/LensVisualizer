## Patent Reference and Design Identification

**Patent:** US 2,983,193
**Application Number:** US 776,901
**Filed:** November 28, 1958
**Granted:** May 9, 1961
**Inventor:** Willy Schade
**Assignee:** Eastman Kodak Company, Rochester, New York
**Title:** High Resolution Photographic Objectives
**Claims:** 1
**Embodiment analyzed:** Sole numerical example, Fig. 2, normalized at f = 100 mm and f/3.5

US 2,983,193 discloses a six-element, four-component M-type photographic objective. The patent describes the M-type as an objective with two positive outer components and two meniscus-shaped inner negative components, with the concave faces of the inner negative components directed toward each other and with the diaphragm normally in the central space. The stated design target is use at about f/5 to f/3.5 over a field of about 15° from the axis.

The numerical prescription used here is the sole worked example in Fig. 2 and in the repeated table in column 3 of the patent. That table is normalized to f = 100 mm and f/3.5. The patent adds that the lens was originally intended to be made at about 10 or 12 inches focal length, so the patent is not itself a 6-inch service drawing.

The data file therefore treats the Kodak Aero Ektar 6-inch f/3.5 identification as a scaled production correlation, not as a name printed in the patent. The optical layout, f/3.5 aperture, Eastman Kodak authorship, all-spherical construction, and Kodak M-351A catalog correlation support the identification, but the prescription source remains the patent table. The encoded `.data.ts` prescription uniformly scales the patent example by 1.523030854 so that the computed EFL becomes 152.58 mm.

The patent also reports a later test adjustment: increasing the central air space from 36.0 mm to 36.7 mm produced the best average result and was said to change the focal length to 100.34 mm. Because the patent does not print a complete revised table for this adjusted state, the data file uses the printed Fig. 2 table with $S_c = 36.0$ mm. A separate paraxial trace of the printed prescription with only $S_c$ changed to 36.7 mm gives EFL = 100.547 mm, so the patent's 100.34 mm statement likely reflects rounding, a further unpublished spacing adjustment, or test data rather than a simple single-gap substitution into the printed table.

## Optical Architecture

The objective is an all-spherical M-type, in the double-Gauss family. It has six glass elements in four air-spaced components: a positive front singlet, a front cemented positive/negative doublet, a rear cemented negative/positive doublet, and a positive rear singlet. The patent figure and table place the aperture stop in the long central air gap between the two cemented components.

The defining architectural feature is the unusually long central air space $S_c$. In the printed table $S_c = 36.0$ mm, or 0.360 times the normalized focal length. The patent identifies this long space, together with the relatively short central-space bounding radii $R_5$ and $R_6$, as beneficial for correcting oblique spherical aberration and higher-order coma.

The overall power distribution is asymmetric. Recomputed from the printed table, the front half through L3 has a standalone focal length of +198.22 mm in the normalized patent scale. The rear half from L4 through L6 is stronger at +97.40 mm. The rear cemented doublet L4/L5 is nearly afocal at about -9202 mm in the normalized scale, so most rear-half convergence comes from L6 rather than from the rear doublet.

In the printed f = 100 mm table, the axial track from $R_1$ to $R_{10}$ is 66.30 mm and the paraxial BFD from $R_{10}$ to focus is 61.42 mm. Scaled to the 6-inch data file, those become 100.98 mm and 93.55 mm respectively. BFD is long, but it does not exceed the optical length from first to last glass surface.

## Element-by-Element Analysis

### L1 — Positive Meniscus, front collector

nd = 1.74000, νd = 45.8. Glass: Unmatched Kodak proprietary high-index lanthanum-flint class, 740/458. f = +199.8 mm scaled (+131.17 mm normalized).

L1 is the front positive singlet. The patent radii are $R_1 = +47.74$ mm and $R_2 = +88.67$ mm in the normalized table. The stronger outside curvature faces the object side, matching the patent's general preference for the positive components to have their stronger curvatures turned outward.

The Abbe number places this glass in flint territory despite its high refractive index and probable lanthanum family. It should not be described as a crown merely because it is a positive element.

### L2 — Positive Meniscus, positive member of the front doublet

nd = 1.69300, νd = 56.2. Glass: Unmatched Kodak proprietary high-index crown / lanthanum-crown class, 693/562. f = +119.4 mm scaled (+78.41 mm normalized).

L2 is the lower-dispersion positive member of the front cemented doublet. Its front surface $R_3 = +28.61$ mm is one of the short outer radii used in the patent's shape conditions for the negative components. In isolation L2 is a strong positive element, but in the cemented component it is counterbalanced by L3.

### L3 — Negative Meniscus, negative member of the front doublet

nd = 1.68300, νd = 30.9. Glass: Unmatched Kodak proprietary dense-flint class, 683/309. f = -76.0 mm scaled (-49.92 mm normalized).

L3 is the high-dispersion negative member cemented to L2 at $R_4 = +54.46$ mm. Its rear surface $R_5 = +20.42$ mm bounds the front side of the central air space and supplies a strong negative contribution. The L2/L3 cemented component has a combined focal length of -344.9 mm scaled (-226.48 mm normalized), so the net component is only weakly negative after the opposing powers are combined.

The dispersion contrast between L2 (νd = 56.2) and L3 (νd = 30.9) is the principal front-half axial color correction pair.

### L4 — Negative Meniscus, negative member of the rear doublet

nd = 1.66700, νd = 32.2. Glass: Unmatched Kodak proprietary dense-flint class, 667/322. f = -55.4 mm scaled (-36.38 mm normalized).

L4 is the rear-side counterpart to L3. Its front surface $R_6 = -23.85$ mm bounds the central air space on the image side. The $R_5/R_6$ pair is the central air-lens geometry singled out by the patent.

The cemented surface $R_7 = -1432$ mm is very nearly plane at the normalized scale. The patent explicitly states that an infinite radius for either cemented surface is considered a plane surface within the scope of the invention, so the weak $R_7$ curvature is intentional rather than a transcription anomaly.

### L5 — Positive Meniscus, positive member of the rear doublet

nd = 1.74000, νd = 43.9. Glass: Unmatched Kodak proprietary lanthanum-flint class, 740/439. f = +63.1 mm scaled (+41.40 mm normalized).

L5 is the positive member cemented behind L4. Its rear surface $R_8 = -30.05$ mm supplies most of the element's positive power. In the complete L4/L5 rear cemented component, the two elements almost cancel: the component focal length computes to about -14014 mm scaled (-9202 mm normalized). This near-afocal behavior means the rear doublet primarily adjusts chromatic balance, field curvature, and off-axis aberration residuals rather than supplying the lens' main convergence.

Because νd = 43.9 is below 50, L5 is best classified as a lanthanum flint or flint-like high-index positive glass, not as a crown.

### L6 — Positive Meniscus, rear collector

nd = 1.74000, νd = 46.4. Glass: Unmatched Kodak proprietary high-index lanthanum-flint class, 740/464. f = +166.4 mm scaled (+109.27 mm normalized).

L6 is the rear positive singlet. Its front surface $R_9 = -1012$ mm is very weak, while its rear surface $R_{10} = -75.03$ mm carries most of the element's optical power. Since the L4/L5 doublet is nearly afocal, L6 supplies most of the rear-half convergence.

## Glass Identification

The patent gives only refractive index for the D line and conventional dispersive index V. It does not name glass vendors or catalog designations for the individual elements. Public catalog matching from nd/νd alone is not adequate here: none of the six glasses is identified by the patent as Schott, Bausch & Lomb, OHARA, Hoya, Hikari, CDGM, or Sumita, and the nd/νd pairs do not justify exact catalog assignments.

The data file therefore uses explicit `Unmatched (...)` annotations instead of vendor-specific equivalents. This is a deliberate data-quality choice. It prevents the viewer from implying a Sellmeier catalog match that the patent does not support.

| Element | nd | νd | Code | Classification | Role |
|---|---:|---:|---:|---|---|
| L1 | 1.740 | 45.8 | 740/458 | high-index lanthanum-flint class | front collector |
| L2 | 1.693 | 56.2 | 693/562 | high-index crown / lanthanum-crown class | positive member, front achromat |
| L3 | 1.683 | 30.9 | 683/309 | dense-flint class | negative member, front achromat |
| L4 | 1.667 | 32.2 | 667/322 | dense-flint class | rear negative member |
| L5 | 1.740 | 43.9 | 740/439 | lanthanum-flint class | positive member, rear doublet |
| L6 | 1.740 | 46.4 | 740/464 | high-index lanthanum-flint class | rear collector |

The chromatic balance condition in the patent is satisfied directly from the printed V values: the four positive elements L1, L2, L5, and L6 sum to 192.3, the two negative elements L3 and L4 sum to 63.1, and the ratio is 3.0475.

## Focus Mechanism

The patent does not specify an internal focus group, floating group, helicoid travel, or finite-distance prescription. This is a fixed-unit aerial-objective prescription. In service, focus would be set by placing or shimming the whole objective relative to the film plane rather than by changing the internal air spaces.

The `.data.ts` file includes a single variable back-focus gap for viewer operation only. It models unit-focus extension from infinity BFD = 93.5504 mm to 95.8949 mm at a nominal 10 m object distance. This is not a patent-published close-focus specification.

## Data-File Scaling and Semi-Diameter Construction

The `.data.ts` file is a uniformly scaled version of the printed patent table. The scale factor is 152.58 / 100.181818 = 1.523030854, where 100.181818 mm is the independently computed normalized EFL of the printed table. All radii, axial thicknesses, air spaces, and the inferred BFD are multiplied by this same factor.

The patent does not publish clear semi-diameters. The data file therefore uses inferred semi-diameters from a paraxial 14.7° semi-field ray envelope, with the stop placed at the midpoint of the central 36.0 mm air space. The stop semi-diameter is 14.455 mm in the scaled file, which gives f/3.5 through the computed entrance-pupil magnification of the front subsystem.

The final semi-diameter set was checked against four constraints: all traced full-field marginal rays clear the apertures; surface semi-diameters stay below the practical spherical rim limit; front/rear semi-diameter ratios of individual elements remain within the project limit; and computed edge thicknesses remain positive. The thinnest edge thickness in the scaled file is 1.96 mm at L5.

## Conditional Expressions

The printed example satisfies the patent's stated conditions when evaluated on the normalized f = 100 mm table.

| Condition | Patent range | Printed-table value | Result |
|---|---:|---:|---|
| Central air space | moderate feature: $S_c > 0.25f$; high-degree feature: $S_c > 0.32f$; useful range to about $0.42f$ | $S_c/f = 0.360$ | satisfied |
| Rear surface of front component | $0.5f < R_2 < 1.25f$ | $R_2/f = 0.8867$ | satisfied |
| Front surface of rear positive component | $2f < |R_9| < 20f$ | $|R_9|/f = 10.12$ | satisfied |
| Central-space front bounding radius | $R_5 < 0.7S_c$ | $R_5/S_c = 0.567$ | satisfied |
| Central-space rear bounding radius | $|R_6| < 0.85S_c$ | $|R_6|/S_c = 0.663$ | satisfied |
| V-number balance | $2.5 < ΣV_{pos}/ΣV_{neg} < 3.8$ | 3.0475 | satisfied |
| Negative component shape, form 1 | $0.20f \le R_5 \le 0.216f$; $0.23f \le |R_6| \le 0.27f$ | $R_5/f = 0.2042$; $|R_6|/f = 0.2385$ | satisfied |
| Negative component shape, form 2 | $0.285f \le R_3 \le 0.32f$; $0.29f \le |R_8| \le 0.33f$ | $R_3/f = 0.2861$; $|R_8|/f = 0.3005$ | satisfied |
| Positive-element refractive indices | $1.63 \le n_d \le 1.85$ | 1.693 and 1.740 | satisfied |
| Negative-element refractive indices | $1.62 \le n_d \le 1.80$ | 1.667 and 1.683 | satisfied |
| Cemented-surface radii | numerically greater than $0.4f$ | $|R_4|/f = 0.5446$; $|R_7|/f = 14.32$ | satisfied |

## Verification Summary

Paraxial verification was rerun directly from the patent table. The y-ν propagation and ABCD matrix methods agree. Values below use the printed $S_c = 36.0$ mm prescription unless otherwise noted.

| Quantity | Normalized patent table | 6-inch scaled data file |
|---|---:|---:|
| EFL | 100.1818 mm | 152.5800 mm |
| BFD from $R_{10}$ | 61.4239 mm | 93.5504 mm |
| FFD from $R_1$ | 46.0623 mm | 70.1544 mm |
| $R_1$ to $R_{10}$ axial track | 66.3000 mm | 100.9769 mm |
| First surface to image | 127.7239 mm | 194.5273 mm |
| Petzval sum | 0.00108775 mm⁻¹ | 0.00071420 mm⁻¹ |
| Petzval radius | 919.33 mm | 1400.18 mm |
| EFL with only $S_c$ changed to 36.7 mm | 100.5470 mm | not encoded |

The computed normalized EFL is 0.18% longer than the patent's rounded f = 100 mm design scale. This is within the expected tolerance for a printed patent table rounded to two or three significant decimals.

The strict optical classification is neither telephoto nor retrofocus. In the scaled file, first-surface-to-image distance is 194.53 mm, longer than the 152.58 mm EFL, so the total-length/EFL ratio is greater than 1. BFD/EFL is 0.613, so the design also does not meet the retrofocus condition of BFD greater than EFL.

## Design Heritage and Context

Schade's patent is directed less at maximum aperture than at image evaluation for medium-to-low-contrast aerial subjects. The specification distinguishes practical recognizable detail, or acutance, from the older star-test concept of limiting resolution. The long central air gap is the principal design move: it gives up compactness in exchange for additional control of oblique spherical aberration and higher-order coma over the selected semi-field.

The design remains a conventional refractive, all-spherical, fixed-unit objective. Its novelty lies in the proportions and residual-aberration balance of the M-type layout rather than in aspherical surfaces, internal focusing, or a telephoto/retrofocus architecture.

## Sources

- US 2,983,193 — Willy Schade, "High Resolution Photographic Objectives," filed November 28, 1958, granted May 9, 1961, Eastman Kodak Company.
- Kodak Sales Service Pamphlet U-10, "Kodak Ektar Lenses," Eastman Kodak Company, Apparatus and Optical Division, cited as secondary production-identification context. It is not the numerical prescription source for the `.data.ts` file.
