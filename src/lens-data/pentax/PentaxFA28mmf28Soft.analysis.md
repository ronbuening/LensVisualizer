# smc Pentax-FA 28mm F2.8 Soft — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 5,822,132  
**Application Number:** 08/772,251  
**Filed:** December 23, 1996  
**Priority:** Japanese Application HEI 07-351074, December 25, 1995  
**Granted:** October 13, 1998  
**Inventor:** Jun Hirakawa  
**Assignee:** Asahi Kogaku Kogyo Kabushiki Kaisha (Pentax) — corrected by the Certificate of Correction; the printed cover sheet gives the shorter “Asahi Kogaku Kabushiki Kaisha” form.  
**Title:** Soft Focus Lens  
**Embodiment analyzed:** First Embodiment — TABLE 1, FIG. 1

The patent describes four numerical embodiments of a wide-angle soft-focus lens built on a retrofocus chassis. The First Embodiment is transcribed here. The prescription is normalized to a whole-system focal length of $f = 100.00$; the production 28 mm representation uses a uniform scale factor of $0.28$ for radii, axial spacings, and inferred semi-diameters.

The identification of this embodiment with the production **smc Pentax-FA 28mm F2.8 Soft** rests on convergent evidence rather than on a published production prescription. Example 1 is a five-element, five-group, all-spherical design, and Ricoh’s archived product specification also gives five elements in five groups. Example 1 is $F.No. = 1:2.9$, while the production lens is published as 28 mm F2.8. Example 1 gives a half angle of view of $37.9^\circ$; the production lens is published as a 75° diagonal-field full-frame lens. The aberration strategy also matches the product description: the soft effect is aperture-controlled, with softness decreasing as the lens is stopped down to F4.

Examples 3 and 4 are slower and narrower ($F.No. = 1:3.6$, $\omega = 34.2^\circ$ / $34.0^\circ$), and Example 3 has only four elements. They are not plausible matches for the 28 mm F2.8 production lens. Example 2 remains a close sibling: it also has five elements, five groups, $F.No. = 1:2.9$, and $\omega = 37.9^\circ$, but differs in glass choices and in the tabulated $f/f_F$ and $SAU/f$. Public product literature does not disclose enough internal prescription data to distinguish Example 1 from Example 2 definitively. This file uses Example 1 and records Example 2 only as a near sibling.

## Optical Architecture

The design is a **retrofocus soft-focus prime**: a negative front group $G_F$ followed by a positive rear group $G_R$, with the diaphragm positioned inside the rear group. The patent states the same basic structure in the abstract and in the detailed description. The negative/positive group order gives the back focus needed for a 35 mm SLR wide-angle lens, while the rear group carries the intentionally retained spherical aberration that produces the soft-focus effect.

The front group contains a very weak positive element followed by a strong negative meniscus. The rear group contains a strong positive biconvex element, the stop, a biconcave dense flint, and a rear positive element. In power sequence, the elements read as **(+ weak)(−)(+)(−)(+)**; in group terms, the design is **negative / positive**.

The important architectural choice is the treatment of oblique aberrations. The patent explains that a negative meniscus in the front group, convex toward the object, can reduce coma and astigmatism when its centers of curvature are arranged toward the diaphragm. It also explains that the high-power convex surface on the positive element in front of the diaphragm generates the spherical aberration needed for the soft effect, while its near-concentric relationship to the stop suppresses other aberrations. The design therefore retains a large monochromatic aberration without letting off-axis aberrations dominate the wide field.

The group boundary is the largest air space in the system. In Example 1 this is the 69.55 normalized gap after surface 4, scaled to 19.474 mm in the production-size data file.

## Element-by-Element Analysis

Focal lengths below are standalone thick-lens-in-air values. Scaled production-size values are given first; normalized patent values follow in parentheses.

### E1 — Near-Plano Weak Positive

nd = 1.58913, νd = 61.2. Glass: N-SK5 / SK5-class crown. f = +339.3 mm (+1212 normalized).

The first element is a very weak biconvex positive lens. Both radii are extremely long compared with the system focal length, so it contributes little direct power. Its function is better read as an entrance refraction ahead of the negative meniscus than as a primary aberration-correcting element. The patent describes this kind of element as an optional low-positive-power lens placed object-side of the negative meniscus.

### E2 — Negative Meniscus, Convex to Object

nd = 1.62041, νd = 60.3. Glass: S-BSM16 / N-SK16-class dense barium crown. f = −29.34 mm (−104.8 normalized).

The second element supplies most of the front group’s negative power. Both radii are positive, so the element is a negative meniscus with its convex face toward the object, exactly the form described in the patent’s front-group discussion and claim language. The high Abbe number keeps this large negative power from adding excessive lateral color.

### E3 — Biconvex Positive Spherical-Aberration Generator

nd = 1.77250, νd = 49.6. Glass: S-LAH66 / N-LAF34-class high-index lanthanum glass. f = +21.85 mm (+78.0 normalized).

The first element of the rear group is a thick biconvex positive lens. Its object-side surface, surface 5, is the convex surface with the largest positive power on the object side of the diaphragm. Example 1 gives $r_m = 84.27$ normalized, so $r_m/f = 0.843$.

This surface is the deliberate spherical-aberration generator. The high index allows substantial positive power at a manageable curvature, while the stop-side placement is part of the patent’s strategy for keeping coma, astigmatism, and field curvature controlled while spherical aberration remains large.

### E4 — Biconcave Negative Dense Flint

nd = 1.78470, νd = 26.2. Glass: J-SFS3 / SF56A-class dense short flint. f = −17.74 mm (−63.3 normalized).

The fourth element is the only high-dispersion element in the prescription. It sits just behind the stop and provides the main chromatic counterweight to the lanthanum positive elements on either side. The patent describes the rear group generically as including a negative lens and a positive lens behind the diaphragm; the chromatic role follows from the glass selection.

The patent’s $n_d = 1.78470$ and $ν_d = 26.2$ are closest to Hikari J-SFS3 among the catalog values checked; Schott SF56A is also a near-equivalent in the same dense-short-flint region. This is a class identification, not a claim that the original production melt was supplied by either vendor.

### E5 — Near-Plano-Convex Positive

nd = 1.77250, νd = 49.6. Glass: S-LAH66 / N-LAF34-class high-index lanthanum glass. f = +21.50 mm (+76.8 normalized).

The rear element is nearly plano-convex, with a very weak front surface and a strong rear surface convex toward the image. It completes the rear group’s positive power and works with E4 as the post-stop negative/positive pair. Sharing the E3 lanthanum glass keeps the glass palette compact and leaves the dense flint as the main dispersion-balancing element.

## Glass Identification and Selection

The patent gives only $n_d$ and $ν_d$, not manufacturer glass names. The identifications below use catalog matches to those two numbers and are therefore class/equivalent labels rather than assertions about the actual factory glass.

| Element | Patent $n_d$ / $ν_d$ | Catalog match or class | Role |
|---|---:|---|---|
| E1 | 1.58913 / 61.2 | N-SK5 / SK5-class crown | Weak positive entrance crown |
| E2 | 1.62041 / 60.3 | S-BSM16 / N-SK16-class crown | Front negative-meniscus crown |
| E3 | 1.77250 / 49.6 | S-LAH66 / N-LAF34-class lanthanum glass | High-index positive, SA generator |
| E4 | 1.78470 / 26.2 | J-SFS3 / SF56A dense short-flint class | Chromatic balancing negative |
| E5 | 1.77250 / 49.6 | S-LAH66 / N-LAF34-class lanthanum glass | Rear positive |

No element is an ED, fluorite, or anomalous-partial-dispersion glass in the usual photographic sense. The correction scheme is ordinary achromatization by separated positive high-index elements and a single dense flint. That is consistent with the patent’s aim: preserve a controlled monochromatic spherical aberration while preventing color and off-axis aberrations from overwhelming the soft-focus image.

## Focus Mechanism

US 5,822,132 publishes only the infinity prescription. It gives no close-focus prescription, no variable air-spacing table, and no explicit moving group. The data file therefore models close focus as **inferred unit focus**, not as a patent-stated mechanism.

Ricoh’s archived production specification gives a minimum focus distance of 0.25 m and a maximum magnification of 0.18×. Under a unit-focus model, the close-focus extension is approximately $m \cdot f = 0.18 \times 28 = 5.04$ mm. The data file implements that as a final back-focus gap change from 35.63 mm at infinity to 40.67 mm at close focus.

The Ricoh archive discusses floating focus generally on the same page and explicitly attributes FREE rear-group separation to the FA Soft 85mm F2.8, but it does not make the same specific statement for the FA Soft 28mm F2.8. The 28 mm lens should therefore not be described as a documented floating-focus design from the available sources.

## Spherical-Aberration / Soft-Focus Strategy

The lens is defined by a retained aberration. The patent states:

$$\frac{SAU}{f} < -0.10 \quad (1)$$

For Example 1, TABLE 5 gives $SAU/f = -0.22$. The sign is the patent’s convention; the accompanying text states that the condition leaves positive spherical aberration, producing the soft-focus effect and natural background blur. The finite-ray spherical aberration value is taken from the patent and is not replaced by a paraxial calculation.

The production control is aperture-based. Ricoh states that from full aperture to F4 the lens uses manual stop-down metering and the amount of softness decreases as the aperture is stopped down. From F4 onward it behaves like an ordinary lens with automatic aperture and open-aperture metering. F4 is therefore the transition point between the soft-control range and normal automatic-aperture operation.

## Conditional Expressions

The patent states six relevant design conditions. Example 1 satisfies all of them.

| # | Published form | Computed or patent value for Example 1 | Patent TABLE 5 | Satisfied |
|---|---|---:|---:|---|
| (1) | $SAU/f < -0.10$ | finite-ray, patent-listed | −0.22 | yes |
| (2) | $f/f_F < -0.5$ | −0.8636 | −0.864 | yes |
| (3) | $-2.0 < f/f_F$ | −0.8636 | −0.864 | yes |
| (4) | $0.50 < r_m/f < 10.00$ | 0.8427 | 0.84 | yes |
| (5) | $FNO. < 4$ | 1:2.9 | 1:2.9 | yes |
| (6) | $\omega > 30^\circ$ | 37.9° | 37.9° | yes |

Conditions (2) and (3) set the front group’s negative power range. Too little negative power narrows the field; too much overcorrects field curvature. Condition (4) sets the strong object-side convex surface in the rear group within the range needed to generate the soft effect without making the rest of the correction unmanageable.

## Verification Summary

A separate paraxial y–ν trace of the transcribed TABLE 1 prescription reproduces the patent values. The computation used the patent’s radius sign convention, $n_d$ values, and normalized $f = 100$ scale.

| Quantity | Independent computation | Patent | Agreement |
|---|---:|---:|---|
| System EFL, normalized | 100.002 | 100.00 | within 0.002 |
| Back focus $f_B$, normalized | 127.225 | 127.25 | within 0.03 |
| Front-group focal length $f_F$, normalized | −115.798 | −115.765 | within 0.04 |
| Rear-group focal length, normalized | +93.147 | — | computed only |
| $f/f_F$ | −0.8636 | −0.864 | within rounding |
| $r_m/f$ | 0.8427 | 0.84 | within rounding |
| Petzval sum $P \cdot f$ | +0.0934 | — | computed only |

The scaled production-size computed EFL is 28.0006 mm. The final-surface back focal distance from the patent table is 35.63 mm after scaling; the paraxial trace computes 35.623 mm from the rounded prescription. The surface-by-surface Petzval calculation used $\sum \phi/(n n')$, not an element-level thin-lens approximation.

## Data File Implementation Notes

The patent does not publish semi-diameters. The data file therefore uses inferred clear apertures constrained by four checks: spherical rim height below $sd/|R| = 0.90$, front/rear semi-diameter ratio no greater than 1.25 for each element, positive element edge thickness, and cross-gap sag intrusion no greater than 90% of each air gap. Surface 4 is the limiting curvature surface at $sd/|R| \approx 0.890$. The tightest non-stop air-gap clearance is the surface 8 to surface 9 gap at about 88% of the allowed 0.6412 mm scaled gap.

The patent does not split the stop gap numerically. The data file places `STO` inside the 18.08 normalized air gap after surface 6 by splitting the gap as 14.00 + 4.08 before scaling. This agrees with FIG. 1 and preserves the total patent spacing. The stop semi-diameter is set to 6.4 mm; in the adopted stop placement this gives an entrance-pupil semi-diameter of about 5.00 mm and an effective f-number of about f/2.80 at the scaled EFL.

## Manufacturer Specifications vs. Patent

Where the manufacturer and the patent differ, the manufacturer’s production specifications govern hard product metadata.

| Specification | Patent Example 1, scaled | Ricoh archived production specification | Adopted in data file |
|---|---:|---:|---:|
| Focal length | 28.0 mm | 28 mm | 28 mm |
| Maximum aperture | F.No. 1:2.9 | F2.8 | f/2.8 nominal |
| Diagonal field | 75.8° from $2\omega$ | 75° | 75° production metadata |
| Elements / groups | 5 / 5 | 5 / 5 | 5 / 5 |
| Minimum focus | not published | 0.25 m | 0.25 m |
| Maximum magnification | not published | 0.18× | 0.18× |
| Diaphragm blades | not published | 8 | 8 |
| Minimum aperture | not published | f/22 | f/22 |
| Filter thread | not published | 49 mm | metadata only; no filter modeled |

## Design Heritage and Context

The patent’s motivation is explicit: conventional soft-focus interchangeable lenses were associated with narrower-view portrait use, so the invention aims to provide a soft-focus lens suitable for landscape photography. The resulting design is not a portrait soft lens scaled down mechanically; it is a retrofocus wide-angle layout that uses a negative front group to obtain the field and back focus while controlling oblique aberrations around a deliberately soft spherical-aberration core.

The smc Pentax-FA 28mm F2.8 Soft is the production lens that fits that technical pattern: a full-frame 28 mm soft-focus lens whose aperture ring is the practical softness control.

## Sources and References

- US Patent 5,822,132, “Soft Focus Lens,” Jun Hirakawa, Asahi Kogaku Kogyo K.K.; filed 1996-12-23, granted 1998-10-13. Prescription and conditions from TABLE 1 and TABLE 5; assignee correction from the Certificate of Correction.
- Ricoh Imaging, “ソフトレンズ・マクロレンズ,” Beautiful Photo-life archive. Production specifications and aperture/softness-operation description for smc PENTAX-FA Soft 28mm F2.8. https://www.ricoh-imaging.co.jp/japan/photo-life/archives/lens/001/index.html
- SCHOTT Optical Glass Datasheets: N-SK5, N-SK16, N-LAF34, SF56A.
- OHARA S-BSM16 and S-LAH66 catalog pages and datasheets.
- Hikari / Nikon J-series optical glass catalog: J-SFS3.
