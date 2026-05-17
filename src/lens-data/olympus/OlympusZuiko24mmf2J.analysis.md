# Olympus OM-System J. Zuiko Auto-W 24mm f/2 — US 3,830,559 Example 1

## Patent Reference and Design Identification

The relevant patent is **US 3,830,559, "Super-wide-angle lens systems for photographic cameras,"** filed by Masaki Matsubara for Olympus Optical Co., Ltd. The U.S. application was filed on 14 March 1973, claims Japanese priority of 29 March 1972 (No. 47-31302), and was granted on 20 August 1974. The patent describes a large-aperture retrofocus wide-angle lens for 35 mm single-lens reflex cameras with an aperture ratio on the order of **F/2.0**, a picture angle up to **84°**, and use of a conventional **55 mm** front filter.

This analysis uses **Example 1**, the FIG. 1 embodiment. The production lens is not named in the patent, so the match to the Olympus OM-System **J. Zuiko Auto-W 24mm f/2** is inferential rather than explicit. The identification rests on the following convergent evidence:

1. The patent Example 1 is a 10-element, six-component, retrofocus wide-angle design normalized to **f = 100**, **F/2.0**, and **84°**. The production 24 mm f/2 is listed in archival OM-system references as a **10-element, 8-group**, **84°**, **55 mm filter** lens with close-focus correction via floating elements.
2. Scaling the patent focal length from 100 to 24 mm gives a uniform scale factor of **0.24031**. The independently traced patent prescription gives **EFL = 99.871** in patent units, or **24.000 mm** after scaling — within ordinary patent-rounding error of a nominal 24 mm objective.
3. The patent's focus-compensation mechanism moves the fourth and fifth components together while keeping the sum of two adjacent air spaces constant. This corresponds to a floating-element close-focus correction mechanism, consistent with the production lens's archival description.
4. The patent was filed in 1973 and granted in 1974, matching the early OM-era timing reported for the J. Zuiko Auto-W 24 mm f/2.

No lens-specific designer interview was found in the available sources. First-party or first-party-derived evidence is limited to the patent and archived Olympus OM specification material.

## Optical Architecture

The design is a **large-aperture retrofocus wide-angle objective** for 35 mm SLR use. The prescription has **10 glass elements** arranged as **six patent components** corresponding to **eight air-separated groups** in conventional counting:

| Patent component | Elements | Groups | Net role |
|---|---:|---:|---|
| I | L1 | 1 | Positive front meniscus; distortion, coma, and lateral-color moderation |
| II | L2–L4 | 2–4 | Three close-spaced negative menisci; retrofocus expansion and field-shape control |
| III | L5–L6 | 5 (cemented) | Thick positive cemented doublet before the stop |
| IV | L7–L8 | 6 (cemented) | Negative cemented doublet after the stop; floating correction group component |
| V | L9 | 7 | Positive meniscus; spherical and chromatic correction; floating correction group component |
| VI | L10 | 8 | Final positive biconvex relay and field-side correction element |

The patent explicitly describes the system as retrofocus for a 35 mm SLR, where the front group must have strong refractive action to secure adequate back focus. Increasing the aperture to F/2.0 while covering an 84° field makes front-group spherical aberration and off-axis coma difficult to control. The patent solution avoids aspherical surfaces entirely: it relies on a power-distribution strategy using a positive meniscus first element, a compact negative-meniscus front component, two thick cemented rear components around the diaphragm, and a floating rear subassembly for close distances.

The independent paraxial trace confirms the retrofocus character. At the patent scale the effective focal length is **99.871**, while the back focal distance from the final surface is **156.264**. After scaling to a 24 mm lens, those become **24.000 mm** and **37.552 mm**. The ratio **BFD/EFL = 1.565** exceeds unity, confirming the design is retrofocus.

## Element-by-Element Analysis

The focal lengths below are **standalone in-air thin-lens values**, scaled to the nominal 24 mm production size. They are not the same as each element's in-situ contribution inside cemented groups. The distinction matters most for L5/L6 and L7/L8, where the cemented interfaces replace glass–air surfaces and materially change the power balance.

### L1 — Positive Meniscus Front Element

**nd = 1.757, νd = 47.9. Glass: J-LAF04 class (HIKARI), 757479. f ≈ +80.7 mm.**

L1 is the positive meniscus at the front of the retrofocus system. The patent assigns it two functions: correction of distortion and coma, and the use of a suitable Abbe number to reduce magnification chromatic aberration. In a wide-angle retrofocus lens this first element also limits how severely the negative front group must bend oblique bundles.

The glass is high-index and moderately dispersive. Its patent index pair, **nd = 1.757, νd = 47.9**, matches the HIKARI J-LAF04 catalog pair **nd = 1.75700, νd = 47.86** almost exactly. The Abbe number is below 50, placing this in the lanthanum flint class rather than crown.

Optically, L1 partly preconditions the rays before they enter the three negative menisci, reducing the burden on L2–L4 while helping hold the front element diameter to the patent's stated 55 mm filter target.

### L2 — First Negative Meniscus of the Retrofocus Expander

**nd = 1.620, νd = 60.3. Glass: N-SK16 class (SCHOTT) / S-BSM16 (OHARA), 620603. f ≈ −44.5 mm.**

L2 begins the negative-power section that creates the long back focus. Its patent glass pair is very close to the standard **620603** code. SCHOTT N-SK16 is published at **nd = 1.62041, νd = 60.32**, and equivalents exist in the OHARA S-BSM16 and HIKARI J-SK16 families.

The high Abbe number keeps this strongly negative front element from adding avoidable lateral color. In a retrofocus front group, negative power at oblique incidence makes lateral color and astigmatism difficult to separate; using relatively low-dispersion dense crown glass is a conventional but important control choice. L2's radius pair is a weak-front/strong-rear meniscus form, spreading negative power without making the first air gap excessively large.

### L3 — Second Negative Meniscus of the Retrofocus Expander

**nd = 1.620, νd = 60.3. Glass: N-SK16 class (SCHOTT) / S-BSM16 (OHARA), 620603. f ≈ −38.6 mm.**

L3 repeats the dense-crown negative meniscus strategy of L2. The design does not concentrate the entire front negative power in one element; it divides the work across three menisci with short but finite air spaces. This is consistent with the patent's statement that the second component's internal air spaces are kept short to control front diameter while maintaining curvature-of-field correction.

L3 is the strongest of the three negative menisci by standalone focal length. Its position between L2 and L4 makes it a principal contributor to the retrofocus expansion, while the shared glass with L2 keeps the chromatic behavior of the front negative component relatively coherent.

### L4 — Third Negative Meniscus of the Retrofocus Expander

**nd = 1.670, νd = 57.3. Glass: S-LAL52 class (OHARA) / E-LAK02 (HIKARI), 670573. f ≈ −64.8 mm.**

L4 completes the front negative component. Its glass code is **670573**, corresponding to OHARA S-LAL52 in older OHARA catalog data and to HIKARI E-LAK02/J-LAK02-family equivalents. This is a higher-index, still fairly low-dispersion lanthanum crown-class glass.

Compared with L2 and L3, L4 is weaker as a standalone negative lens. Its role is less to supply raw negative power and more to finish the front group while transitioning toward the large positive cemented doublet L5/L6. The thick-lens ABCD trace of the front group composed of L1–L4 gives a net focal length of **f ≈ −21.3 mm** at production scale, confirming a strongly negative front section.

### L5 — High-Index Element in the Positive Cemented Doublet

**nd = 1.773, νd = 49.6. Glass: S-LAH66 class (OHARA), 773496. Standalone f ≈ −42.4 mm.**

L5 is the first member of the cemented doublet immediately in front of the diaphragm. As a standalone air-spaced element it traces negative, but that standalone value is not its operating role inside the cemented doublet. In the actual component, L5 is bonded to the much thicker L6, and the internal interface is a refractive boundary between **nd = 1.773** and **nd = 1.596** glass.

The patent calls L5/L6 a **positive doublet** with a large combined axial thickness. The thick-lens ABCD trace gives the L5/L6 component an effective focal length of **+34.1 mm** at production scale. It is therefore a positive power block even though the front member alone would not be.

The glass is a dense lanthanum flint-class material; OHARA S-LAH66 is listed as **nd = 1.77250, νd = 49.60**, a close catalog match. Its high index allows strong bending at relatively compact curvature, while its νd near 50 helps the cemented pair manage axial and lateral color in combination with L6.

### L6 — Thick Flint Member of the Positive Cemented Doublet

**nd = 1.596, νd = 39.2. Glass: S-TIM8 class (OHARA), 596392. Standalone f ≈ +18.4 mm.**

L6 is unusually thick in the normalized patent table: **d₁₀ = 46.94** at the f = 100 scale, or **11.28 mm** after scaling to a 24 mm lens. It is the dominant positive member of the L5/L6 cemented doublet and sits directly ahead of the stop gap.

The glass pair **1.596 / 39.2** matches OHARA S-TIM8, published at **nd = 1.59551, νd = 39.24**. This is a more dispersive flint-type glass than L5. The L5/L6 combination therefore functions as a strongly shaped achromatizing doublet, not merely as a positive relay lens.

Because the diaphragm follows this component, L6's rear surface and the succeeding air gap influence the marginal ray height at the stop. The large thickness also lets the design use internal translation through glass rather than extreme surface curvature alone.

### L7 — First Member of the Negative Cemented Doublet Behind the Stop

**nd = 1.773, νd = 49.6. Glass: S-LAH66 class (OHARA), 773496. Standalone f ≈ +18.3 mm.**

L7 begins the cemented doublet just behind the stop. Standalone, it is strongly positive — a meniscus with both radii negative (concave to the object). In situ, it is bonded to L8 at the important cemented surface **R₁₃ = −51.983** (patent scale). The patent emphasizes this cemented surface: it is given strong positive refractive action to correct sagittal coma and spherical aberration generated by the large aperture.

The reuse of the S-LAH66-class glass at L7 is not accidental. It gives high refractive index on the incident side of R₁₃, enabling useful positive cemented-interface power when transitioning into L8's lower-index, more dispersive glass. The sign and magnitude of R₁₃ make this interface one of the main high-leverage aberration-correction surfaces in the design.

### L8 — High-Dispersion Member of the Negative Cemented Doublet

**nd = 1.689, νd = 31.1. Glass: S-TIM28 class (OHARA), 689311. Standalone f ≈ −14.8 mm.**

L8 is the negative member of the L7/L8 doublet — a biconcave element with R₁₃ < 0 and R₁₄ > 0. Its patent glass pair matches OHARA S-TIM28 closely; OHARA lists **nd = 1.68893, νd = 31.07**. This is a high-dispersion flint component paired against the high-index lower-dispersion L7 member.

The thick-lens ABCD trace of the whole L7/L8 component gives **f ≈ −75.3 mm**, confirming it is a net negative cemented component. The patent's condition on **|R₁₃|/f** constrains the doublet's internal cemented surface because too much power there worsens higher-order spherical aberration, while too little leaves sagittal coma and spherical aberration insufficiently corrected.

L8 is also part of the moving close-focus correction unit. Because it sits just behind the stop and shares the R₁₃ interface, small axial movement has strong leverage over oblique aberrations.

### L9 — Positive Meniscus Floating Partner

**nd = 1.697, νd = 55.6. Glass: S-LAL14 class (OHARA) / N-LAK14 (SCHOTT), 697556. f ≈ +44.4 mm.**

L9 is a positive meniscus following the negative L7/L8 doublet. It is the fifth component in the patent and moves in unison with the fourth component during close-focus correction. Like L7, it has both radii negative — a meniscus concave to the object.

The glass pair **1.697 / 55.6** matches OHARA S-LAL14 closely; OHARA lists **nd = 1.69680, νd = 55.53**. This is a high-index lanthanum crown-class glass. It helps restore convergence after the negative L7/L8 doublet without adding high dispersion at the rear of the lens.

The patent states that components V and VI help correct spherical aberration and chromatic aberration. In L9's case, the close-focus movement is the key addition: the element is not merely a fixed positive relay member but part of an aberration-compensating floating section.

### L10 — Final Positive Biconvex Element

**nd = 1.697, νd = 55.6. Glass: S-LAL14 class (OHARA) / N-LAK14 (SCHOTT), 697556. f ≈ +49.0 mm.**

L10 is the final positive element. It is biconvex (R₁₇ > 0, R₁₈ < 0) and remains fixed relative to the image-side gap while the L7/L8 + L9 floating assembly shifts in front of it.

Its shared S-LAL14-class glass with L9 keeps the rear pair relatively low in dispersion compared with L8. As the final relay element, L10 helps set the rear convergence and flatten the final image-side behavior after the stop-adjacent cemented doublets have done the heavier aberration work.

## Glass Identification and Selection

The patent gives only refractive index and Abbe number, not commercial glass names. The identifications below are therefore **catalog-equivalent matches**, not proof of the exact melt supplier Olympus used. The matching method uses six-digit glass codes, where the first three digits encode nd × 1000 (rounded) and the last three encode νd × 10 (rounded).

| Element(s) | Patent nd / νd | Code | Catalog-equivalent identification | Confidence | Optical use |
|---|---:|---|---|---|---|
| L1 | 1.757 / 47.9 | 757479 | J-LAF04 class (HIKARI) | High | High-index front meniscus; distortion/coma/lateral-color |
| L2, L3 | 1.620 / 60.3 | 620603 | N-SK16 (SCHOTT) / S-BSM16 (OHARA) | High | Low-dispersion negative menisci in front retrofocus section |
| L4 | 1.670 / 57.3 | 670573 | S-LAL52 (OHARA) / E-LAK02 (HIKARI) | Moderate–high | Higher-index final negative meniscus in front group |
| L5, L7 | 1.773 / 49.6 | 773496 | S-LAH66 class (OHARA) | High | Dense LaF-class glass in cemented correction doublets |
| L6 | 1.596 / 39.2 | 596392 | S-TIM8 class (OHARA) | High | Thick lower-index flint in positive cemented doublet |
| L8 | 1.689 / 31.1 | 689311 | S-TIM28 (OHARA) / N-SF8 class (SCHOTT) | High | High-dispersion negative member of post-stop cemented doublet |
| L9, L10 | 1.697 / 55.6 | 697556 | S-LAL14 (OHARA) / N-LAK14 (SCHOTT) | High | Rear positive meniscus and final biconvex element |

The glass palette is conventional for a high-speed early-1970s wide-angle: dense crowns and lanthanum crowns in the front and rear positive positions, paired with flints in the cemented groups. There is no ED or fluorite-class glass in the patent data. Chromatic correction is achieved by ordinary achromatizing pairings and by distributing power over many spherical elements.

## Focus Mechanism

The patent specifies the close-focus correction group clearly: **component IV and component V move together**. In element labels, that is the cemented doublet **L7/L8** plus the following positive meniscus **L9**. The patent states that the air gap between components III and IV (d₁₁) and the air gap between L9 and L10 (d₁₆) are varied so that their sum remains constant.

For Example 1 at β = 1/40, the patent gives:

| Gap | Infinity (patent) | Close (patent) | Infinity (24 mm) | Close (24 mm) |
|---|---:|---:|---:|---:|
| d₁₁, after L6 / before L7 | 9.80 | 6.65 | 2.355 mm | 1.598 mm |
| d₁₆, after L9 / before L10 | 0.82 | 3.97 | 0.197 mm | 0.954 mm |
| d₁₁ + d₁₆ | 10.62 | 10.62 | 2.552 mm | 2.552 mm |

The constant sum confirms that IV+V translates as a rigid floating subassembly. The production lens has a minimum focus distance of **0.25 m** per archival OM specifications, with helicoid unit focus plus internal floating correction. The complete production focusing scheme therefore combines helicoid barrel extension (changing the BFD) with the internal floating subassembly (changing d₁₁ and d₁₆ in complementary fashion).

The data file models this combined mechanism with four variable gaps: the two halves of the d₁₁ air space (split by the stop), d₁₆, and the BFD. The close-focus spacings at MFD = 0.25 m are extrapolated from the patent's floating mechanism with the BFD extension solved paraxially.

## Aspherical Surfaces

No aspherical surface is disclosed in Example 1. The prescription table lists only spherical radii **R₁–R₁₈**, refractive indices, Abbe numbers, axial thicknesses, and air spaces. There is no aspheric equation, conic constant, polynomial coefficient table, or surface marked as aspherical.

The design should therefore be treated as **all-spherical**. Its correction strategy is based on: a front positive meniscus moderation of distortion, coma, and lateral color; three negative menisci for retrofocus expansion; two thick cemented doublets around the stop with a strongly refractive cemented interface at R₁₃; and a floating L7/L8 + L9 close-focus correction unit.

## Conditional Expressions and Paraxial Verification

The patent's FIG. 1 / Example 1 embodiment is governed by five principal constraints. The independent paraxial trace used the patent sign convention, surface-by-surface ABCD refraction, and the scanned Example 1 prescription. Values are normalized to **f = 100**.

The patent notation **Σfᵢ** for condition 1 denotes the combined thick-lens focal length of the second component (the group of negative menisci L2–L4 as a subsystem), not the arithmetic sum of individual element focal lengths. The independently computed component-II focal length of **−61.96** agrees with the patent's stated value of **−63.21** to within scanned-table uncertainty, confirming both the identification and the convention.

| Quantity | Patent condition | Computed value | Result |
|---|---|---:|---|
| Component II focal length magnitude, \|f_II\|/f | 0.45–0.75 | 0.620 | Pass |
| (d₉ + d₁₀)/f | 0.30–0.80 | 0.531 | Pass |
| \|R₁₃\|/f | 0.33–0.85 | 0.520 | Pass |
| (d₁₂ + d₁₃)/f | 0.22–0.70 | 0.494 | Pass |
| (d₆ + d₈)/f | 0.15–0.35 | 0.262 | Pass |

The trace also gives:

| Property | Patent scale | 24 mm scale |
|---|---:|---:|
| Effective focal length | 99.871 | 24.000 mm |
| Back focal distance (from R₁₈) | 156.264 | 37.552 mm |
| BFD/EFL | 1.565 | 1.565 |
| Diagonal angle of view (36 × 24 mm) | — | 84.1° |

## Design Heritage and Context

The Olympus J. Zuiko Auto-W 24 mm f/2 was, at the time of its introduction, one of the fastest 24 mm lenses available for SLR use. The "J" prefix in Olympus naming convention indicates a 10-element design. The patent's emphasis on maintaining a compact form factor — front diameter compatible with a 55 mm filter despite f/2 aperture and 84° field — reflects the OM system's design philosophy of compact, well-corrected optics.

The six-component architecture with three front negative menisci is a distinctive approach to the retrofocus wide-angle problem. More common designs of this era used two negative front elements; the three-meniscus arrangement distributes the negative power more gradually, which helps control higher-order aberrations at the expense of a slightly longer optical track.

## Sources

- US 3,830,559, "Super-wide-angle lens systems for photographic cameras," inventor Masaki Matsubara, assignee Olympus Optical Co., Ltd.; filed 14 March 1973, priority 29 March 1972, granted 20 August 1974.
- MIR / Photography in Malaysia, "Zuiko ultra-wideangle lenses — 24mm f/2.0, 24mm f/2.8," archival OM-system specification page. Lists the older version as J Zuiko AUTO-W 24mm f/2.0 with 10 elements in 8 groups, 84° diagonal angle, 0.25 m MFD, f/2–f/16 aperture range, 55 mm filter, and 48 mm length. https://www.mir.com.my/rb/photography/hardwares/classics/olympusom1n2/shared/zuiko/htmls/24mm.htm
- OHARA Corporation optical glass catalog data (S-LAH66, S-TIM8, S-TIM28, S-LAL14, S-LAL52).
- SCHOTT Advanced Optics catalog data (N-SK16).
- HIKARI Glass Co., Ltd., Optical Glass Catalog (J-LAF04, E-LAK02).
