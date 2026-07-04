## Patent Reference and Design Identification

**Patent:** US 3,576,360  
**Filed:** November 19, 1968  
**Granted:** April 27, 1971  
**Priority:** November 25, 1967 (Japan 42/75342)  
**Inventor:** Yoshiyuki Shimizu  
**Assignee:** Nippon Kogaku K.K.  
**Title:** Wide Angle Photographic Objective of Large Aperture Ratio  
**Embodiment analyzed:** Embodiment 1 (FIG. 1, Claim 2)

US 3,576,360 publishes Embodiment 1 at normalized focal length $f = 100.00$, aperture ratio $F/1.4$, full field $2\omega = 62^\circ$, and back focus $S' = 106.44$. The data file scales all radii and axial thicknesses by $0.35$ to create a 35 mm catalog entry. No aspherical surfaces are present.

The identification with the Nikon AI Nikkor 35mm f/1.4S family is strong at the architectural level, but it should not be overstated as an exact AI-S production prescription. The convergent evidence is:

1. The patent design and the production lens both use a 35 mm-class $f/1.4$ retrofocus wide-angle layout.
2. Both have 9 glass elements in 7 air-spaced groups.
3. Both cover a $62^\circ$ full field on 135-format film.
4. Both use an all-spherical retrofocus construction with two front negative meniscus elements and three separated rear positive elements.
5. Nikon's historical account identifies Yoshiyuki Shimizu as the designer and describes the 35mm f/1.4 as a 9-element/7-group retrofocus lens with two cemented groups arranged across the diaphragm.

The important limitation is Nikon's own statement that, at the NEW-Nikkor transition, the basic lens construction remained unchanged but glass materials and lens curvatures were changed to improve open-aperture performance. The patent prescription is therefore a transcribed and verified Shimizu Embodiment 1 design scaled to 35 mm, not proof that the AI-S production lens retained every radius and glass exactly.

The patent abstract and claim language count the named components L1-L8 as eight lens groups. The data file's `groupCount: 7` follows the project convention of air-separated groups, because L3-L4 and L5a-L5b are cemented assemblies.

## Optical Architecture

The design is an inverted-telephoto, or retrofocus, wide-angle objective. Its seven air-separated groups have power distribution negative-negative-positive-negative-positive-positive-positive. The two front meniscus elements produce the negative front power required for a back focal distance longer than the system focal length. The rear assembly supplies the strong positive convergence and carries most of the correction burden.

The group layout is:

- **G1 / L1:** negative meniscus, convex toward the object.
- **G2 / L2:** negative meniscus, convex toward the object.
- **G3 / L3-L4:** positive cemented doublet, biconvex high-index positive element cemented to a low-index biconcave negative element.
- **G4 / L5a-L5b:** negative cemented doublet immediately behind the stop, with an overall biconcave form.
- **G5 / L6:** positive meniscus, concave toward the object.
- **G6 / L7:** positive meniscus, concave toward the object.
- **G7 / L8:** final positive biconvex element.

The aperture stop lies in the air space $d_7$ between L4 and L5. The patent says that this air space is inclusive of the stop but gives no numerical stop split. The data file inserts `STO` in this gap, preserving the patent's total $d_7$ thickness.

## Element-by-Element Analysis

The focal lengths below are standalone in-air element focal lengths after the $0.35\times$ scale to 35 mm. Cemented-group powers are also given where analytically useful; those are in-situ group values using the actual cemented thickness and glass transitions.

### L1 — Negative Meniscus, Convex to Object

$nd = 1.56883$, $\nu_d = 56.0$. Glass: S-BAL14 class (OHARA). $f = -100.5$ mm.

L1 is the first diverging element of the retrofocus front group. Its two positive radii form a negative meniscus convex toward the object. The steeper rear surface supplies the negative power while avoiding a single excessively strong front negative element.

The patent's first conditional expression requires $1.5f < -f_{L1} < 4.5f$. The computed normalized value is $-f_{L1} = 287.0$ at $f = 100$, comfortably within the allowed range.

### L2 — Negative Meniscus, Convex to Object

$nd = 1.54814$, $\nu_d = 45.9$. Glass: S-TIL1 (OHARA). $f = -102.4$ mm.

L2 completes the separated negative front group. The patent explains that splitting the front negative power across L1 and L2 prevents excessive positive spherical aberration and high-order disturbance while still obtaining a back focus longer than the focal length.

The second front-power condition requires $2f < -f_{L2} < 5.5f$. The computed normalized value is $-f_{L2} = 292.7$, again inside the allowed range.

### L3-L4 — Positive Cemented Doublet

**L3:** $nd = 1.80411$, $\nu_d = 46.4$. Glass: S-LAH65V class (OHARA). $f = 25.6$ mm.  
**L4:** $nd = 1.50137$, $\nu_d = 56.5$. Glass: unmatched K10 (SCHOTT legacy crown). $f = -62.4$ mm.  
**Cemented group:** $f = 38.5$ mm.

L3 is a strong high-index positive biconvex element. Its Abbe number places it in dense lanthanum flint territory, not in an ordinary crown category. L4 is a low-index, lower-power biconcave negative element cemented to L3. The group remains net positive.

The patent assigns two explicit correction roles to this group. First, $0.5f < R_5 < 2f$ controls the positive front surface of L3 for spherical-aberration compensation. Second, $n_3 - n_4 > 0.1$ with $R_6 < 0$ uses the concave-toward-object cemented interface to generate positive distortion, compensating the negative distortion from the front meniscus pair.

### L5a-L5b — Negative Cemented Doublet Behind the Stop

**L5a:** $nd = 1.80411$, $\nu_d = 46.4$. Glass: S-LAH65V class (OHARA). $f = 63.4$ mm.  
**L5b:** $nd = 1.78470$, $\nu_d = 26.1$. Glass: SF56A (SCHOTT). $f = -21.3$ mm.  
**Cemented group:** $f = -28.9$ mm.

The L5 component is the cemented doublet described in Claim 1. Its outside surfaces form a biconcave group behind the stop, and the group has net negative power. The cemented surface is concave toward the object in Embodiment 1.

L5a is not a crown element in the ordinary sense; with $\nu_d = 46.4$ it is better described as high-index lanthanum dense flint class. L5b is a true dense flint with $\nu_d = 26.1$, and it provides the main dispersion contrast within the post-stop cemented group.

### L6 — Positive Meniscus, Concave to Object

$nd = 1.77250$, $\nu_d = 49.5$. Glass: S-LAH66 (OHARA). $f = 53.8$ mm.

L6 begins the separated rear positive group. Both surfaces are negative radii, so the element is a positive meniscus concave toward the object. The stronger rear curvature supplies the positive power.

The patent notes that this orientation reduces the tendency toward negative distortion relative to the amount of positive power and also contributes to increasing back focus.

### L7 — Positive Meniscus, Concave to Object

$nd = 1.77250$, $\nu_d = 49.5$. Glass: S-LAH66 (OHARA). $f = 72.3$ mm.

L7 uses the same high-index glass as L6. Its front surface is nearly flat compared with the rest of the rear group, while the rear surface supplies most of its positive power. The patent's division of the rear positive power into L7 and L8 helps maintain spherical-aberration correction rather than forcing one stronger rear lens.

### L8 — Final Biconvex Positive Element

$nd = 1.71300$, $\nu_d = 53.9$. Glass: S-LAL8 (OHARA). $f = 73.6$ mm.

L8 is the final biconvex converging element. It supplies the last positive power and establishes the final image-space geometry. Its rear surface is concave toward the object, matching the patent's claim language for the rear surfaces of L7 and L8.

## Glass Identification and Selection

The patent gives refractive indices and Abbe numbers but does not name catalog glasses. The identifications below are catalog-equivalent matches against current OHARA and SCHOTT data. Because the production Nikon lens went through later material and curvature changes, these names should be read as matches to the patent's optical constants, not as verified production glass inventory.

| Element | Patent $nd$ | Patent $\nu_d$ | Catalog match | Catalog $nd$ / $\nu_d$ | Comment |
|---|---:|---:|---|---:|---|
| L1 | 1.56883 | 56.0 | S-BAL14 (OHARA) | 1.56883 / 56.36 | Close barium crown match; patent Abbe is lower by 0.36. |
| L2 | 1.54814 | 45.9 | S-TIL1 (OHARA) | 1.54814 / 45.79 | Close light-flint match. |
| L3 | 1.80411 | 46.4 | S-LAH65V class (OHARA) | 1.80400 / 46.58 | High-index lanthanum dense flint class. |
| L4 | 1.50137 | 56.5 | Unmatched K10 (SCHOTT legacy crown) | 1.50137 / 56.41 | Historical Schott classification retained; no coefficient-backed catalog row is currently available in the project. |
| L5a | 1.80411 | 46.4 | S-LAH65V class (OHARA) | 1.80400 / 46.58 | Same patent glass as L3. |
| L5b | 1.78470 | 26.1 | SF56A (SCHOTT) | 1.78470 / 26.08 | Dense flint, effectively exact. |
| L6 | 1.77250 | 49.5 | S-LAH66 (OHARA) | 1.77250 / 49.60 | Close high-index lanthanum glass match. |
| L7 | 1.77250 | 49.5 | S-LAH66 (OHARA) | 1.77250 / 49.60 | Same glass as L6. |
| L8 | 1.71300 | 53.9 | S-LAL8 (OHARA) | 1.71300 / 53.87 | Close lanthanum crown match. |

The design relies on high refractive indices rather than anomalous partial dispersion. Four elements have $nd > 1.77$, keeping surface curvatures within a practical range for a fast 35 mm retrofocus design. Only L5b is a low-Abbe dense flint in the strict sense; it supplies the strongest chromatic leverage.

## Focus Mechanism

The patent provides only the infinity-focus prescription. It does not publish a finite-distance variable-spacing table. The production Nikon lens, however, uses Close-Range Correction (CRC), a floating correction system, and Nikon's published close-focus specification is 0.3 m.

The data file therefore models focusing as a single unit-extension variable at the final back-focus gap. This is a viewer approximation, not a production CRC model. Solving the paraxial finite-object problem for a 0.3 m object distance from the image plane gives the following data-file values:

| Quantity | Infinity | Close-focus approximation |
|---|---:|---:|
| Final back-focus gap | 37.25416 mm | 43.34829 mm |
| Added extension | 0.00000 mm | 6.09413 mm |
| Object distance from first surface | infinity | 190.25 mm |

## Conditional Expressions

The patent states the following conditions. All are satisfied by Embodiment 1 as transcribed.

| Condition | Computed normalized value | Result |
|---|---:|---|
| $1.5f < -f_{L1} < 4.5f$ | 287.045 | Satisfied |
| $2f < -f_{L2} < 5.5f$ | 292.661 | Satisfied |
| $0.25f < d_2+d_4 < 0.7f$ | 36.666 | Satisfied |
| $0.5f < R_5 < 2f$ | 107.778 | Satisfied |
| $n_3-n_4 > 0.1$ and $R_6 < 0$ | 0.30274; $R_6=-116.667$ | Satisfied |

## Verification Summary

The prescription was re-entered from the patent table and checked with an independent Python paraxial $y, n u$ ray trace. The same script computed standalone element powers, cemented-group powers, front/rear group powers, Petzval sum, stop sizing, and the finite-object unit-extension approximation used in the data file.

| Quantity | Patent scale | 35 mm scaled data |
|---|---:|---:|
| Effective focal length | 100.000966 | 35.000338 mm |
| Back focal distance | 106.440460 | 37.254161 mm |
| Total track, first surface to image | 296.160 | 103.656 mm |
| Front group focal length, L1-L2 | -141.072 | -49.375 mm |
| Rear assembly focal length, L3-L8 | 111.561 | 39.046 mm |
| Petzval sum | 0.00210726 | 0.00602073 mm^-1 |
| Petzval radius | 474.55 | 166.09 mm |
| Half-field image height at $31^\circ$ | 60.09 | 21.03 mm |

The computed infinity ray intercept at the image plane is less than $5 \times 10^{-6}$ patent units, consistent with numerical focus at the stated back focus. The small difference between the patent's rounded $S'=106.44$ and the ray-traced $106.44046$ comes from the published radii/thickness precision.

## Implementation Notes for the Data File

The data file follows the LensVisualizer sequential refractive convention: each surface stores the refractive index of the medium following the surface, and cemented interfaces carry the downstream element's ID. The final surface's `d` value is the back focal distance to the image plane. The patent's primed cemented surface $R_8'$ is labeled `8P` in the data file.

The stop placement is inferred, not published numerically. The split used is 5.000 patent units from R7 to the stop and 17.222 patent units from the stop to R8, preserving the patent's $d_7 = 22.222$ total air space.

Semi-diameters are likewise inferred. The strongest constraints were the 52 mm attachment-size envelope, the very steep R2 rim limit, and cross-gap sag intrusion at the R2-R3 and R9-R10 air gaps. The resulting values are rendering clear apertures for analysis and visualization, not measured Nikon production clear apertures.

## Design Heritage and Context

Nikon's historical account states that the 35mm f/1.4 went on sale in 1971 with CRC and Nikon's first multi-layer coating treatment. The same account describes the 9-element/7-group retrofocus construction and emphasizes two front concave elements, corresponding to the patent's front negative menisci, three separated rear converging elements, and two cemented groups across the diaphragm.

The strongest supported historical statement is that the basic construction remained in later variants, while Nikon changed glass material and lens curvature at the NEW-Nikkor transition.

## Sources

- US 3,576,360, "Wide Angle Photographic Objective of Large Aperture Ratio," Yoshiyuki Shimizu, Nippon Kogaku K.K., granted April 27, 1971; Embodiment 1 / FIG. 1 / Claim 2.
- Nikon Imaging, ["NIKKOR - The Thousand and One Nights No.27: Ai Nikkor 35mm F1.4S"](https://imaging.nikon.com/imaging/information/story/0027/).
- Nikon USA, [Nikkor lens brochure, Nikkor 35mm f/1.4 specifications](https://www.nikonusa.com/fileuploads/pdfs/Nikkor%20lens%20Broch_061017.pdf).
- OHARA Corporation datasheets: [S-BAL14](https://oharacorp.com/glass/s-bal14/), [S-TIL1](https://oharacorp.com/glass/s-til1/), [S-LAH65V](https://oharacorp.com/glass/s-lah65v/), [S-LAH66](https://oharacorp.com/glass/s-lah66/), [S-LAL8](https://oharacorp.com/glass/s-lal8/).
- SCHOTT datasheets: [K10](https://media.schott.com/api/public/content/54e8399a2f2e4922a6137cc456562948?v=295af8a2), [SF56A](https://media.schott.com/api/public/content/7428154cd0e04bd5a0cff3defb79443c?v=d460f7da).
