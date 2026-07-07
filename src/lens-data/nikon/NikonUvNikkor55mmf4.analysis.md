## Patent Reference and Design Identification

**Patent:** JP S42-9417 / JPB 1967009417 (特公 昭42-9417)
**Application Number:** 昭39-11182
**Filed:** February 29, 1964
**Published:** May 13, 1967
**Inventor:** Wakimoto Zenji (脇本善司)
**Applicant:** Nippon Kogaku Kogyo K.K. (日本光学工業株式会社)
**Title:** Lens for Ultraviolet Photography (紫外線撮影用レンズ)
**Embodiment analyzed:** Sole numerical example

The patent contains one worked prescription. It is normalized to $f = 100$, uses 365 nm as the reference wavelength, and gives $F = 4$ with full field angle $2\alpha = 43°$. The same numerical prescription is repeated in the claim on page 3. No alternate examples are supplied.

This embodiment is identified with the historical UV-Nikkor Auto 55mm f/4 on convergent, but not perfectly complete, evidence:

1. The patent prescription is a 3-element, 3-group, all-spherical triplet. The 1968 *Nikon F / Nikkormat Handbook of Photography* scan for the UV Nikkor 1:4 f=55mm likewise lists “3 groups of 3 elements.”
2. The patent aperture is f/4 and the published handbook scan gives aperture range f/4-f/32.
3. The patent full field is 43°, matching the handbook scan’s diagonal angle of view of 43°.
4. Scaling the patent prescription by 0.55 gives a computed focal length of 55.028 mm from the rounded patent table.
5. The patent is explicitly an ultraviolet photographic lens corrected over 300-400 nm, and the handbook scan gives “wavelength for color balance compensation: 300nm-400nm.”
6. The patent applicant is Nippon Kogaku, and the inventor, Wakimoto Zenji, is directly associated with Nikon’s high-resolution and specialty optical designs.

The production status of the UV-Nikkor Auto 55mm f/4 is less certain than the optical match. Contemporary handbook material labels the lens “Disc.” and presents photographs, dimensions, specifications, an optical diagram, and depth-of-field tables. Later secondary discussion includes a reported Nikon Museum reply stating that the 55mm f/4 UV-Nikkor was not commercially available and was made for NASA. The data file therefore treats the optical formula as a historical Nikon F-mount UV-Nikkor Auto 55mm f/4 prescription, but not as a normal catalog production lens with a well-documented public sales history.

This lens must also be separated from the later UV-Nikkor / UV-Micro-Nikkor 105mm f/4.5 family. The 105mm lens uses a six-element quartz/fluorite architecture and a much broader corrected spectral range; it is not a scaled continuation of the three-singlet 55mm design.

## Optical Architecture

The optical system is a classical Cooke-triplet derivative: three air-separated singlets in a positive-negative-positive sequence. The patent text describes the front and rear elements as biconvex and the central element as biconcave. The prescription confirms that geometry: L1 has $r_1 = +35.56$ and $r_2 = -327.04$, L2 has $r_3 = -41.20$ and $r_4 = +37.61$, and L3 has $r_5 = +167.79$ and $r_6 = -33.89$ at patent scale.

The design’s distinguishing feature is not the triplet form itself, but the restricted ultraviolet glass palette. The patent states that glasses transparent enough for 300 nm photography are scarce and limits the usable range to approximately $1.50 < n_d < 1.55$ with Abbe numbers between about 45 and 65. The two positive elements use a high-Abbe crown-class glass, while the single negative element uses a lower-Abbe light-flint class glass. That gives only a modest dispersion spread by ordinary visible-light standards, so the design relies on triplet spacing, thin elements, and the f/4 aperture rather than on high-index flints or cemented achromats.

The patent drawing places the diaphragm in the air gap between L2 and L3. The numerical table does not assign a surface number or exact axial position to the stop. In the data file, the stop is inferred from Figure 1 and placed 25% of the way through the $d_4$ air gap after surface r4. This placement does not affect EFL or BFD, but it does affect the drawn entrance-pupil geometry and the inferred clear apertures.

## Element-by-Element Analysis

### L1 — Biconvex Positive Front Crown

n(365 nm) = 1.537, νd = 64.0. Glass: UV crown, BK7 / S-BSL7 class, catalog-residual match rather than exact catalog glass. f = +60.020 at patent scale, +33.011 mm after 0.55 scaling.

L1 is a strongly asymmetric positive element. Its steep first surface carries most of the element power, while the rear surface is very weak. At the 55mm scale the center thickness is only 2.7995 mm, so the drawn semi-diameter cannot be expanded to pass the full f/4, 21.5° off-axis bundle without making the element surfaces intersect at the rim. The data file therefore uses physically constrained semi-diameters just below 9 mm, with full-field vignetting accepted as a realistic consequence of the thin triplet package.

Optically, L1 provides the front collecting power and establishes the entrance geometry for the triplet. Its crown-class dispersion keeps the positive element from introducing excessive ultraviolet longitudinal color, while its outward-facing strong curvature follows the ordinary triplet strategy of placing the strongest positive curvatures toward the conjugate planes.

### L2 — Biconcave Negative Central Flint

n(365 nm) = 1.56818, νd = 47.0. Glass: UV light flint, J-LLF2 / S-TIL2 class, catalog-residual match rather than exact catalog glass. f = -34.371 at patent scale, -18.904 mm after 0.55 scaling.

L2 is the sole negative element and supplies the system’s dispersion differential. The element is thin: 1.48 at patent scale, or 0.814 mm after scaling. That is consistent with the patent’s discussion that the concave element should be kept thin because the higher-index, lower-Abbe glass is the most difficult member of the system from a UV-transmission standpoint.

Its two concave surfaces also make the dominant negative Petzval contribution. In a normal visible-light triplet this role could be carried by a stronger flint glass, but this patent cannot use that route because dense flints and many high-index glasses absorb too strongly in the near ultraviolet.

### L3 — Biconvex Positive Rear Crown

n(365 nm) = 1.537, νd = 64.0. Glass: UV crown, BK7 / S-BSL7 class, catalog-residual match rather than exact catalog glass. f = +52.955 at patent scale, +29.125 mm after 0.55 scaling.

L3 is the rear positive element. Its first surface is weak and its final surface is steep, making it the reversed counterpart to L1. The strong final curvature helps set the long back focal distance, which is required for use on the Nikon F SLR mount.

At the 55mm scale L3 is 2.7005 mm thick. The data file uses an approximately 8.3-8.5 mm semi-diameter pair, leaving a small but positive edge thickness for the scaled patent surfaces. This is near the practical lower edge-thickness limit, but it is preferable to an optically oversized rear element that would be physically impossible with the published curvature and thickness.

## Glass Identification and Selection

The patent gives refractive indices at 365 nm, not at the d line. It also gives νd values for glass selection. This creates a distinction between the optical prescription and modern catalog labels: the prescription must trace with n(365), while ordinary catalog names are defined by nd and νd.

| Element | Patent n(365 nm) | Patent νd | Nearest catalog class | Catalog nd / νd | Catalog n(365 nm) | Comment |
|---|---:|---:|---|---:|---:|---|
| L1, L3 | 1.53700 | 64.0 | OHARA S-BSL7 / Schott N-BK7 class | 1.51633 / 64.14 for S-BSL7 | 1.53578 | Good Abbe and i-line index match; stored data uses patent n(365), not catalog nd. |
| L2 | 1.56818 | 47.0 | HIKARI J-LLF2 / OHARA S-TIL2 class | 1.54072 / 46.97 for J-LLF2 | 1.57075 | Good Abbe match but a larger i-line residual; likely a special UV-transparent melt or historical equivalent, not a literal modern catalog stock glass. |

The crown identification is comparatively strong. OHARA’s S-BSL7 data sheet gives nd = 1.516330, νd = 64.14, and $n_i$ at 365.015 nm = 1.53578, only about 0.0012 below the patent value. Its published internal-transmission table also shows meaningful transmission at 300 nm for 10 mm thickness, which is consistent with the patent’s use of a thin all-glass UV design.

The negative element is less secure as a literal catalog identification. HIKARI J-LLF2 gives nd = 1.540720, νd = 46.97, and $n_i$ = 1.570753, about 0.0026 above the patent value. That is still a plausible index/dispersion class match, but the modern J-LLF2 data sheet shows poor 10 mm internal transmission below roughly 340-350 nm. The patent’s element is very thin, and the patent explicitly requires selecting glasses with the highest available UV transmission, so the safer conclusion is “LLF2/S-TIL2 class, probably special or historical UV-selected melt,” not a hard identification as modern stock J-LLF2 or S-TIL2.

For this reason, the data file labels the glasses as `Unmatched ... class` and stores the patent’s n(365) values in the single-index `nd` fields. This is intentional. Replacing those fields with catalog nd values would destroy the patent EFL verification.

## Focus Mechanism

The patent does not describe a mechanical focusing system. The optical design is a fixed three-singlet unit, so the data file models focus by changing only the final back-focus gap.

The handbook scan’s small specification block is difficult to read, but the larger depth-of-field table and photographed distance scale are internally consistent with a minimum marked distance of 0.6 m / 2 ft. The data file therefore uses `closeFocusM: 0.6`.

At infinity, the scaled patent table gives BFD = 47.0465 mm from r6 to the image plane. Solving the thick-lens conjugates for a 0.6 m object distance measured from the image plane gives a close-focus BFD of 53.2874 mm. The corresponding paraxial magnification is approximately 0.113×, or about 1:8.8, consistent with the handbook depth-of-field table’s close-range reduction ratio near 1:9.

| State | Object distance from image plane | BFD | Paraxial magnification |
|---|---:|---:|---:|
| Infinity | ∞ | 47.0465 mm | 0 |
| Close focus | 0.6 m | 53.2874 mm | 0.113× |

## Chromatic Correction Strategy

The design is corrected for ultraviolet photography rather than for the usual visible C-F range. The patent text states that the lens is achromatized over the 300-400 nm ultraviolet region and uses 365 nm as the reference wavelength. Figure 3 plots focal shift against wavelength and marks ultraviolet mercury lines including 313, 334, and 365 nm.

The correction mechanism remains recognizably triplet-like: two high-Abbe positive crown elements bracket a lower-Abbe negative element. The difference is that the glass set is compressed. A conventional visible-light triplet can use dense flints and wider index spreads; this design cannot. The negative element’s Abbe number of 47 is only moderately low, and the positive elements’ Abbe number of 64 is only moderately high. The patent compensates by using thin elements, spacing the negative component near the stop, and accepting f/4 rather than a faster aperture.

Visible-light performance should not be inferred from the UV correction target. A lens corrected for 300-400 nm can show substantial visible chromatic focus shift. That is design intent, not a defect, because the intended use is ultraviolet imaging with appropriate filtration.

## Verification Summary

Independent paraxial tracing was performed from the patent prescription with the published 365 nm indices.

| Quantity | Patent / source value | Computed at patent scale | Computed after ×0.55 scaling |
|---|---:|---:|---:|
| EFL | f = 100 | 100.05095 | 55.02802 mm |
| BFD | not tabulated | 85.53913 | 47.04652 mm |
| Glass + air length r1-r6 | table sum | 29.26000 | 16.09300 mm |
| Total track to infinity image | derived | 114.79913 | 63.13952 mm |
| Front focal distance from r1 | derived | -82.58015 | -45.41908 mm |
| H from front vertex | derived | +17.47081 | +9.60894 mm |
| H′ from rear vertex | derived | -14.51182 | -7.98150 mm |

Element standalone thick-lens focal lengths at 365 nm are:

| Element | Patent scale | 55mm scale |
|---|---:|---:|
| L1 | +60.020 | +33.011 mm |
| L2 | -34.371 | -18.904 mm |
| L3 | +52.955 | +29.125 mm |

The surface-by-surface Petzval sum, computed as $\sum \varphi_i/(n_i n_i')$, is +0.004857 at patent scale, giving a Petzval radius of approximately -205.9 patent units, or -113.2 mm after scaling.

| Surface | Radius | Contribution |
|---|---:|---:|
| r1 | +35.56 | +0.009825 |
| r2 | -327.04 | +0.001068 |
| r3 | -41.20 | -0.008794 |
| r4 | +37.61 | -0.009634 |
| r5 | +167.79 | +0.002082 |
| r6 | -33.89 | +0.010309 |
| Total | — | +0.004857 |

The patent tabulates the Seidel coefficients in combined form. Solving the tabulated astigmatism/Petzval pair gives:

| Coefficient | Value |
|---|---:|
| ΣI | +1.6876 |
| ΣII | +0.0966 |
| ΣIII | +0.3342 |
| ΣIV | +0.0310 |
| ΣV | -0.0620 |

The computed optical data file reproduces the patent EFL and BFD at 365 nm. The only intentional deviations from the literal prescription are the inserted inferred stop surface, the Fig. 1-matched inferred semi-diameters, and the unit-focus close-focus BFD derived from the historical 0.6 m distance scale.

## Design Heritage and Context

This patent adapts the Cooke triplet to a specialized ultraviolet-photography problem. Its contribution is not a new element count or new symmetry class, but the demonstration that a full-frame f/4 UV lens corrected over 300-400 nm can be made from carefully selected optical glasses rather than quartz/fluorite crystalline elements.

That choice has clear tradeoffs. The design is simple, compact, and compatible with an SLR back-focus requirement after scaling, but it is constrained to the near ultraviolet and uses very thin elements. Later Nikon UV lenses moved toward quartz and fluorite to broaden the spectral range, especially toward shorter UV wavelengths and into visible/near-IR focus compatibility. The 55mm f/4 triplet is therefore best understood as a narrow-band near-UV photographic lens, not as a predecessor with the same optical objective as the later UV-Nikkor 105mm f/4.5.

## Sources

- JP S42-9417 / JPB 1967009417, “紫外線撮影用レンズ” (Lens for Ultraviolet Photography), Nippon Kogaku Kogyo K.K., published May 13, 1967. Primary source for prescription, field angle, reference wavelength, UV correction range, and Seidel coefficients.
- Cooper, J. and Abbott, W., *The Handbook of Photography (Nikon F, Nikkormat)*, 1st ed., 1968. Scans hosted by MIR, “55mm f/4.0-32 UV-Nikkor Auto,” used for the 55mm f/4 product identification, 3/3 construction, angle of view, filter size, weight, distance scale, and depth-of-field table.
- OHARA S-BSL7 data sheet, OHARA 25-04. Used for nd, νd, 365.015 nm refractive index, and transmission comparison for the UV crown-class elements.
- HIKARI J-LLF2 data sheet, Hikari Glass Co., Ltd. Used for nd, νd, 365.015 nm refractive index, and transmission comparison for the UV light-flint-class central element.
- UltravioletPhotography.com forum thread, “UV Nikkor 55mm,” used only as secondary context for the reported Nikon Museum statement on the lens’s limited/non-commercial status.
