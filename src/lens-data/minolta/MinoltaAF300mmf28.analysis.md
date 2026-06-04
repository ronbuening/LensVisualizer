# Minolta AF APO TELE 300mm f/2.8

## Patent Reference and Design Identification

**Patent:** US 4,518,229  
**Filed:** April 5, 1982  
**Granted:** May 21, 1985  
**Priority:** April 6, 1981 (JP 56-52120)  
**Inventor:** Mitsuo Yasukuni  
**Assignee:** Minolta Camera Kabushiki Kaisha, Osaka, Japan  
**Title:** Telephoto Lens System  
**Embodiment analyzed:** Example 8 (Table 8, FIG. 22)

US 4,518,229 discloses a telephoto lens system with a fixed positive front group and a negative rear group divided into three subunits: a fixed positive first subunit, a movable negative second subunit, and a fixed positive third subunit. The movable negative subunit shifts toward the image side for close focusing. Example 8 is the embodiment transcribed here.

The patent does not name the commercial lens. Example 8 is nevertheless a close fit to the original Minolta AF APO TELE 300mm f/2.8 because it has the same class of focal length and aperture, the same rear-inner-focus architecture, and the same two large low-dispersion front positive elements implied by Minolta's APO/AD-glass description. The production lens is normally catalogued as 11 elements in 9 groups, while Example 8 contains 10 prescription elements in 8 air-separated groups. That difference is consistent with the production lens's rear drop-in / protective filter being counted in the commercial optical construction but absent from the patent prescription.

The patent itself gives $f = 295.0$ mm and FN = 2.9 for Example 8. The aberration figures for Example 8 are labelled F/2.8 and $y' = 21.6$ mm, matching 135-format coverage. The data file therefore records the marketed lens as 300mm f/2.8 but retains the patent design values as $f = 294.999$ mm and apertureDesign = 2.9.

## Optical Architecture

The design is a short telephoto system in the classical positive/negative sense. The fixed front group I has positive power and supplies the dominant convergence. The rear group II has net negative power and is divided into the fixed positive II-1, movable negative II-2, and fixed positive II-3 subunits described in the patent.

The verified effective focal length is 294.999 mm. The distance from the first optical surface to the infinity image plane is 273.499 mm, giving a telephoto ratio of 0.927. This is a genuine telephoto construction by the usual track-length criterion because the optical track is shorter than the effective focal length.

Group I contains three air-separated elements: two large biconvex positive low-dispersion crowns followed by a negative flint. Its verified focal length is +210.668 mm. This group carries most of the positive power and establishes the chromatic correction problem that the rear group must complete.

Rear group II has a verified standalone focal length of −802.037 mm. Subunit II-1 is weakly positive at +423.178 mm; its first surface is concave to the object side and is the surface governed by the patent's first conditional expression. Subunit II-2 is the moving negative focus group at −74.055 mm. Subunit II-3 is a final positive cemented doublet at +133.218 mm.

The patent does not publish a stop coordinate or clear semi-diameters. For the data file, the stop is inserted in the long $d_6 = 78.00$ mm air gap, 7.00 mm after surface 6 and 71.00 mm before surface 7. That preserves the patent axial spacing while keeping the inferred front clear aperture inside the production lens's 114 mm front-filter envelope. Semi-diameters are therefore inferred rather than patent-listed.

## Element-by-Element Analysis

### L1 — Biconvex Positive Front Crown

nd = 1.49520, νd = 79.74. Glass: unmatched fluorophosphate ED-class glass, code 495/797. f = +218.33 mm.

L1 is the first of the two large positive low-dispersion elements that form the front collector. The front surface has substantially stronger curvature than the rear surface, so most of the element's power is carried at the first surface. Its high Abbe number reduces the axial chromatic burden for a front element with large positive power.

The glass is not S-FPL51. Current OHARA S-FPL51 is code 497816 with nd = 1.49700 and νd = 81.54, whereas the patent gives nd = 1.49520 and νd = 79.74. The patent glass is therefore recorded as an unmatched fluorophosphate ED-class glass rather than assigned to a current catalog name.

### L2 — Biconvex Positive Second Crown

nd = 1.49520, νd = 79.74. Glass: unmatched fluorophosphate ED-class glass, code 495/797. f = +202.12 mm.

L2 repeats the same low-dispersion glass as L1 and supplies slightly stronger standalone positive power. Splitting the front positive power across L1 and L2 reduces the burden on any single refracting surface, which is important in a 300mm f/2.8-class lens where marginal-ray heights in the front group are large.

The thin 0.42 mm air gap between L1 and L2 functions mainly as a manufacturing and aberration-tuning separation. In the data file, the front-group semi-diameters were constrained by the 114 mm front filter and by ray clearance at the marketed f/2.8 aperture.

### L3 — Biconcave Negative Front Flint

nd = 1.68150, νd = 36.64. Glass: unmatched dense flint class, code 682/366. f = −183.98 mm.

L3 is the front group's negative chromatic partner. It offsets part of the positive power of L1 and L2 while providing the lower Abbe number needed to balance primary axial color. Its rear surface faces the long air space before the rear group and contributes significantly to the surface-by-surface Petzval balance.

The glass was left as unmatched. Its refractive index and Abbe number place it in a dense flint or lanthanum-flint region, but no current OHARA, HOYA, Schott, HIKARI, CDGM, or Sumita catalog match should be asserted without a direct catalog match.

### L4 — Negative Meniscus, Concave to Object

nd = 1.65446, νd = 33.86. Glass: 654339 dense flint class; public Hikari SF9 coefficients now provide the code match. f = −520.27 mm.

L4 opens rear subunit II-1. The object-side surface is concave and is the surface singled out in the patent's claims and conditional expressions. In paraxial power it is not strong as an element, but as a surface it supplies the specified concave leading correction used to control the residual negative spherical aberration and off-axis flare described in the patent.

The computed ratio $|\phi'_{II-1}| / \phi_I$ is 1.04683. This satisfies both the broad patent range and the preferred lower bound above 1.0.

### L5 — Positive Meniscus

nd = 1.60311, νd = 60.74. Glass: S-BSM14 class (OHARA), close vintage 603/607 match. f = +235.41 mm.

L5 supplies the positive component of subunit II-1 and brings the subunit's verified focal length to +423.178 mm. The glass is a close match to current OHARA S-BSM14 in refractive index and code, but the patent Abbe number differs by about 0.10 from the current catalog value. It is therefore identified as S-BSM14 class rather than an exact modern catalog identity.

### L6 — Positive Meniscus, First Component of Moving Doublet

nd = 1.71736, νd = 29.42. Glass: S-TIH1 class (OHARA), close vintage 717/295 match. f = +96.15 mm standalone; L6+L7 cemented doublet f = −2117.01 mm.

L6 is the dense-flint member of the cemented doublet at the front of the moving focus subunit. It has a weakly curved front surface and a much stronger cemented interface at surface 12. The current OHARA S-TIH1 catalog gives the same d-line index but a slightly different Abbe number, so this is again a close class match rather than an exact modern-catalog assertion.

The cemented L6+L7 pair is nearly afocal in paraxial power. Its importance is therefore not its net power but its chromatic and aberrational correction inside the moving negative subunit.

### L7 — Biconcave Negative, Second Component of Moving Doublet

nd = 1.60311, νd = 60.74. Glass: S-BSM14 class (OHARA), close vintage 603/607 match. f = −92.00 mm standalone.

L7 is cemented to L6 and supplies the opposing crown component of the L6+L7 pair. Its standalone negative power is largely cancelled by L6's positive power, leaving a very weak negative cemented doublet. This pairing is a local chromatic correction stage ahead of the stronger negative L8 element.

### L8 — Biconcave Negative Moving Singlet

nd = 1.67000, νd = 57.07. Glass: unmatched high-index crown / lanthanum-crown class, code 670/571. f = −76.94 mm.

L8 is the principal negative-power element of the moving II-2 subunit. It dominates the subunit's net focal length of −74.055 mm. Its rear surface is the strongest negative Petzval contributor in the system, with a surface-by-surface Petzval term of −0.00601 mm⁻¹.

The glass has a high refractive index and moderate Abbe number, consistent with a high-index crown or lanthanum-crown class. It remains unmatched because no authoritative catalog identity has been verified.

### L9 — Biconvex Positive, First Component of Final Doublet

nd = 1.60311, νd = 60.74. Glass: S-BSM14 class (OHARA), close vintage 603/607 match. f = +67.23 mm standalone; L9+L10 cemented doublet f = +133.22 mm.

L9 supplies the strong positive power of the final subunit II-3. Its cemented rear interface is the strongest curvature in the design and drives much of the final reconvergence of the beam after the negative moving group.

### L10 — Negative Meniscus, Final Flint Component

nd = 1.65446, νd = 33.86. Glass: 654339 dense flint class; public Hikari SF9 coefficients now provide the code match. f = −137.58 mm.

L10 is the negative flint component cemented to L9. It tempers L9's positive power and supplies chromatic correction for the final positive doublet. The exit surface at R18 = −79.965 has a verified refractive power of +0.008184 mm⁻¹ and is used in condition (3) against the power of moving subunit II-2.

## Glass Identification and Selection

The patent gives refractive index and Abbe number but no manufacturer glass names. The data file therefore distinguishes close catalog-class matches from unmatched glasses.

|    Code | Patent nd | Patent νd | Identification used                                           | Elements   |
| ------: | --------: | --------: | ------------------------------------------------------------- | ---------- |
| 495/797 |   1.49520 |     79.74 | Unmatched fluorophosphate ED-class glass; not current S-FPL51 | L1, L2     |
| 682/366 |   1.68150 |     36.64 | Unmatched dense flint class                                   | L3         |
| 654339  |   1.65446 |     33.86 | Hikari SF9 public code match; production vendor not asserted  | L4, L10    |
| 603/607 |   1.60311 |     60.74 | S-BSM14 class, close OHARA vintage match                      | L5, L7, L9 |
| 717/294 |   1.71736 |     29.42 | S-TIH1 class, close OHARA vintage match                       | L6         |
| 670/571 |   1.67000 |     57.07 | Unmatched high-index crown / lanthanum-crown class            | L8         |

The two front positive glasses are the key chromatic correction elements. Minolta/Konica Minolta literature describes AD, or anomalous-dispersion, glass in this lens, but the patent does not publish partial-dispersion ratios, C/F/g-line indices, or ΔPgF values. The analysis therefore treats anomalous partial dispersion as a production-literature inference rather than a patent-quantified value.

The current OHARA S-FPL51 entry is not a match to the patent's 495/797 glass. S-FPL51 is code 497816, nd = 1.49700, νd = 81.54. Assigning the front elements to S-FPL51 would therefore be a catalog mismatch.

## Focus Mechanism

The lens uses inner focusing by translating subunit II-2, made up of L6, L7, and L8. The front group I, subunit II-1, and subunit II-3 remain fixed. Patent Table 9 gives an 11.760 mm image-side movement of II-2 for the Example 8 close-focus condition at 3 m.

| Gap              |  Infinity | Patent 3 m state |     Change |
| ---------------- | --------: | ---------------: | ---------: |
| d10, before II-2 |  3.000 mm |        14.760 mm | +11.760 mm |
| d15, after II-2  | 22.000 mm |        10.240 mm | −11.760 mm |
| d10 + d15        | 25.000 mm |        25.000 mm |   0.000 mm |

The image plane remains fixed in an actual camera. A finite-conjugate paraxial check confirms that the 11.760 mm group motion focuses an object approximately 3 m from the image plane onto the original infinity image plane. A separate collimated-input diagnostic after moving II-2 gives an equivalent EFL of 266.346 mm and a collimated BFL of 73.985 mm, but that is not the physical close-focus image-plane spacing.

The production lens is catalogued with a 2.5 m minimum focus distance and 1:7.14 maximum magnification. That production endpoint is not tabulated in the patent; the data file's focus slider endpoint uses the patent's documented 3 m state rather than extrapolating the additional travel.

## Aspherical Surfaces

The design is entirely spherical. US 4,518,229 publishes no aspherical coefficients for Example 8, and every surface in the transcribed prescription is spherical. The data file therefore has `asph: {}`.

## Conditional Expressions

The patent states conditions governing the concave leading surface of II-1, the power of II-3, the relationship between the exit surface of II-3 and moving subunit II-2, the weak net power through II-2, and the spacing between front and rear groups. Example 8 satisfies all of the checked conditions.

| Condition |                              Expression | Patent range | Verified value | Result |
| --------- | --------------------------------------: | -----------: | -------------: | ------ |
| (1)       |     $\lvert\phi'_{II-1}\rvert / \phi_I$ |      0.6–2.5 |        1.04683 | Pass   |
| (1′)      |     $\lvert\phi'_{II-1}\rvert / \phi_I$ |      1.0–2.5 |        1.04683 | Pass   |
| (2)       |                              $F_{II-3}$ |    0.2f–0.7f |     133.218 mm | Pass   |
| (2′)      |                              $F_{II-3}$ |  0.25f–0.65f |     133.218 mm | Pass   |
| (3)       | $\phi''_{II-3}/\lvert\phi_{II-2}\rvert$ |      0.3–0.7 |        0.60609 | Pass   |
| (3′)      | $\phi''_{II-3}/\lvert\phi_{II-2}\rvert$ |    0.31–0.68 |        0.60609 | Pass   |
| (4)       |          $\lvert F_{I+II-1+II-2}\rvert$ |       > 2.5f |    1342.604 mm | Pass   |
| (5)       |                                 $D/F_I$ |      0.4–0.7 |        0.54655 | Pass   |

Condition (1) is the patent's central architectural condition. It constrains the object-side concave surface of II-1 relative to the front group power so that the rear group can correct the front group's residual spherical aberration without imposing excessive coma and off-axis flare correction on the remaining rear elements.

## Verification Summary

All numerical values below were recomputed from the patent prescription by paraxial y–n ray tracing and ABCD matrices. The Petzval value uses the surface-by-surface expression $\sum \phi/(n n')$, not a thin-element approximation.

| Quantity                                      |   Verified value |
| --------------------------------------------- | ---------------: |
| Effective focal length, infinity              |    294.998985 mm |
| Back focal length, infinity                   |    103.708841 mm |
| First surface to infinity image plane         |    273.498841 mm |
| Telephoto ratio                               |          0.92712 |
| Group I focal length                          |   +210.667807 mm |
| Rear group II focal length                    |   −802.036999 mm |
| Subunit II-1 focal length                     |   +423.178151 mm |
| Subunit II-2 focal length                     |    −74.055110 mm |
| Subunit II-3 focal length                     |   +133.217558 mm |
| L6+L7 cemented doublet focal length           |  −2117.013293 mm |
| L9+L10 cemented doublet focal length          |   +133.217558 mm |
| Petzval sum                                   | +0.00100054 mm⁻¹ |
| Petzval radius                                |       999.456 mm |
| Half field from y′ = 21.6 mm and computed EFL |          4.1878° |
| Full diagonal field from same                 |          8.3755° |

Semi-diameters in the data file are inferred, not patent-listed. The selected values clear the f/2.8 marginal ray envelope, respect the front-filter envelope, keep common-aperture edge thickness above 1.8 mm for every element, and satisfy the signed 90% cross-gap sag-intrusion criterion.

## Design Heritage and Context

The Minolta AF APO TELE 300mm f/2.8 was an A-mount autofocus super-telephoto lens introduced in 1985. Its production specification is 11 elements in 9 groups, 2.5 m minimum focus distance, 1:7.14 maximum magnification, 9 aperture blades, internal focusing, 238.5 mm length, 128 mm maximum diameter, and 2480 g weight. The 1988 HS-APO G version is described as using the same optical design with faster gearing.

Later Minolta/Konica Minolta and Sony 300mm f/2.8 SSM lenses used a substantially different optical formula and should not be conflated with this prescription.

## Sources

- US Patent 4,518,229, Mitsuo Yasukuni / Minolta Camera Kabushiki Kaisha, “Telephoto Lens System,” granted May 21, 1985.
- Michael Hohner, “Lens tech data for Minolta AF 300/2.8 APO,” https://www.mhohner.de/sony-minolta/onelens/af300f28.
- Michael Hohner, “Lens tech data for Minolta AF 300/2.8 HS-APO G,” https://www.mhohner.de/sony-minolta/onelens/af300f28g.
- Imaging Resource lens listing quoting Konica Minolta lens literature for AD glass and inner autofocus element, https://www.imaging-resource.com/lenses/konica-minolta-300mm-f-2-8-apo-g-af/.
- OHARA Corporation, S-FPL51 catalog page, https://oharacorp.com/glass/s-fpl51/.
- OHARA Corporation, S-BSM14 catalog page, https://oharacorp.com/glass/s-bsm14/.
- OHARA Corporation, S-TIH1 catalog page, https://oharacorp.com/glass/s-tih1/.
