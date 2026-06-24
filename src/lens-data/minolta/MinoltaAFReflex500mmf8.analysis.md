# Minolta AF Reflex 500mm f/8 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 4,951,078
**Application Number:** 352,170
**Filed:** May 15, 1989
**Granted:** August 21, 1990
**Priority:** May 16, 1988 (JP 63-118611 and JP 63-118612)
**Inventor:** Takashi Okada (Osaka, Japan)
**Assignee:** Minolta Camera Kabushiki Kaisha (Osaka, Japan)
**Title:** Camera System Including Catadioptric Lens and Catadioptric Lens System Used Therein
**Embodiment analyzed:** Embodiment 1, first approach, Table 1 — $f = 496.0$ mm, $F_{NO} = 7.0$

This prescription transcribes the first numerical embodiment of US 4,951,078. The patent is not merely a generic mirror-lens design; it is directed to making a catadioptric lens compatible with a phase-difference autofocus module by controlling the annular exit pupil so that the AF module's two sampled pupil regions receive light.

The identification with the Minolta AF Reflex 500mm f/8 / Sony 500mm F8 Reflex (SAL500F80) is supported by convergent evidence:

1. The assignee is Minolta Camera K.K., the lens is a catadioptric SLR lens, and the stated purpose is phase-difference AF compatibility for an annular-pupil lens.
2. Embodiment 1 gives $f = 496.0$ mm, within 0.8% of the marketed 500 mm focal length.
3. The patent design aperture is $F_{NO} = 7.0$ as an annular-pupil value; the production lens is marketed as a fixed f/8 mirror lens.
4. The prescription is a compact two-mirror Cassegrain-style catadioptric system with front correction, Mangin primary and secondary mirrors, a rear relay, and a required rear plane-parallel plug-in filter.
5. Sony's own product specification lists the production lens as 5 groups / 7 elements and explicitly notes that this count includes one filter element. Sony's operating instructions also state that the plug-in filters are components of the optical system and that either the normal filter or ND4X filter must be installed for photography.
6. Sony's production specifications list the same practical values expected for this lens family: fixed f/8, 4.0 m minimum focus, 0.13× maximum magnification, 5° angle of view on 35 mm format, 89 × 118 mm dimensions, and about 665 g mass.

A qualification is necessary on embodiment selection. The patent publishes three numerical embodiments under the first approach. All share the same layout and glass map; they differ mainly in pupil geometry and the annular f-number. Embodiment 1 is the first-listed example and gives the brightest design aperture ($F_{NO}=7.0$). Embodiments 2 and 3 give $F_{NO}=7.5$ and sit slightly closer to the marketed f/8 value. Public production literature does not publish the exact production prescription, so the link is strongest to the patent family and architecture, with Table 1 used here because it is the first full prescription.

## Optical Architecture

The design is an all-spherical catadioptric Cassegrain telephoto. It uses a weak positive full-aperture front corrector, a concave primary Mangin mirror, a convex secondary Mangin mirror, a compact refractive rear relay, a rear negative field corrector, and a plane-parallel plug-in filter. The production lens has no iris diaphragm; the working pupil is annular because the secondary mirror obstructs the central beam.

The physical front-to-rear order is not the same as the optical encounter order. The patent tabulates the surfaces in ray-transmission order, and the signed axial separations become negative while the beam travels back toward the object side between the two mirror reflections. The optical encounter order for Table 1 is:

1. r1–r2: front meniscus corrector, single pass.
2. r3 → r4 reflection → r5: primary Mangin mirror. r3 and r5 are the same physical front surface of the primary blank; r4 is the silvered rear surface.
3. r6 → r7 reflection → r8: secondary Mangin mirror. r6 and r8 are the same physical rear surface of the secondary; r7 is the silvered object-side surface.
4. r9–r12: rear cemented relay. The third member of this relay, r11–r12, is the clear central portion of the same physical glass blank as the primary mirror.
5. r13–r14: rear negative meniscus / field corrector.
6. r15–r16: plane-parallel plug-in filter.
7. Image plane behind the filter.

The most important structural correction in this review is the treatment of the primary mirror blank. The radii and axial stations of r3/r4/r5 and r11/r12 are not merely reused tooling values. They are the same physical primary blank used in two radial roles: an annular silvered shell for the primary Mangin reflection and a clear central plug that becomes the last member of the rear cemented relay after the secondary reflection. The data file therefore splits this one physical blank into complementary rendered regions: `M1F`/`M1R` for the annular mirror shell and `L5F`/`L5R` for the clear central plug. Their radial material bands do not overlap. This is a tracing and rendering split only; it is not an additional physical glass body.

The patent's bottom-line value $d=92.3$ in Table 1 is also not a paraxial back focal distance. It is the algebraic axial station of r16 relative to r1: the sum of the listed signed separations through d15 is exactly 92.3 mm. The patent does not tabulate the final image distance. Independent paraxial tracing places the paraxial focus 62.361 mm behind r16. Because the project data file excludes filters from the modeled surface array, the 2.0 mm filter is folded into the final air-equivalent distance from r14 to the image plane:

$$
2.7 + \frac{2.0}{1.5168} + 62.3611466 = 66.379712\ \text{mm}.
$$

This gives a modeled r14-to-image distance of 66.379712 mm and a filter-excluded, air-equivalent model distance from r1 to the image plane of 153.979712 mm. The physical station of the paraxial focus in the patent path is 154.661147 mm from r1, because the 2.0 mm filter remains physical glass rather than an air-equivalent gap.

The power distribution along the encounter path is positive front correction, strongly positive primary mirror, negative secondary mirror, positive rear relay, and negative field correction. The primary Mangin unit has an effective focal length of +110.34 mm; the secondary Mangin unit has an effective focal length of −37.00 mm and supplies the Cassegrain magnification that turns the short primary focus into a 496 mm effective focal length.

## Element-by-Element Analysis

### L1 — Front Meniscus Corrector (r1–r2)

$n_d = 1.51680$, $\nu_d = 64.20$. Glass: BSC7 / N-BK7 class borosilicate crown. Standalone $f = +626.17$ mm.

L1 is a weak positive meniscus convex toward the object. It is full-aperture and precedes both mirrors, so it corrects the entering bundles before the primary Mangin reflection. Its power is modest compared with the primary mirror unit but not negligible; its standalone focal length is about 1.26× the patent EFL.

The glass is ordinary BK7-family borosilicate crown. It is used here for normal dispersion, availability, and manufacturability rather than for anomalous partial-dispersion correction.

### M1 / L5 — Shared Primary Mangin Blank and Clear Central Relay Plug (r3/r4/r5 and r11/r12)

$n_d = 1.67000$, $\nu_d = 57.07$. Glass: `670571` lanthanum-crown-class glass. Primary Mangin unit $f = +110.34$ mm; clear central plug, considered as a refractive element in air, $f = -1636.42$ mm.

The annular outer part of this blank is the primary Mangin mirror. Light enters through r3, reflects from the silvered concave rear surface r4, and exits again through the same physical front face, listed as r5 on the return pass. The silvered r4 surface is the system's main converging mirror.

The central portion of the same blank remains clear and is encountered later as r11–r12, the third member of the rear relay. In the patent table it is assigned its own refractive-index entry, but the geometry proves the shared blank: r11 has the same radius and axial station as r3/r5, and r12 has the same radius and axial station as r4. The center thickness is 11.7 mm in both roles.

This dual radial use is analytically important. Treating r11–r12 as a separate, full-diameter lens would overstate the glass count and would make the rear relay physically collide with the annular primary. In the data file, M1 is the annular shell with an inner clear radius; L5 is the smaller central plug, with the same radii, glass, and axial stations.

The 1.67000 / 57.07 glass does not match a public catalog entry closely enough for a firm vendor assignment. The family identification as lanthanum crown is secure; the catalog name is withheld rather than forced.

### M2 — Secondary Mangin Mirror (r6 → r7 → r8)

$n_d = 1.51680$, $\nu_d = 64.20$. Glass: BSC7 / N-BK7 class borosilicate crown. Mangin unit $f = -37.00$ mm.

The secondary is a small convex Mangin mirror near the object side. After the primary reflection, the beam travels forward and enters the secondary through r6, reflects from r7, and exits again through r8, which is the same physical surface as r6.

Optically, M2 is the diverging Cassegrain secondary. It increases the effective focal length and returns the beam through the primary center toward the rear relay. It also creates the central obstruction that forces the exit pupil into an annulus.

### Rear Cemented Relay — L3/L4/L5 (r9–r12)

The rear relay is a cemented triplet with net $f = +120.71$ mm. Its third member is the clear central plug of the primary blank described above.

| Member | Surfaces | $n_d$ | $\nu_d$ | Glass identification | Standalone focal length | Role |
|---|---:|---:|---:|---|---:|---|
| L3 | r9–r10 | 1.71300 | 53.93 | LAC8 / N-LAK8 class lanthanum crown | +33.08 mm | Strong positive relay element |
| L4 | r10–r11 | 1.51680 | 64.20 | BSC7 / N-BK7 class borosilicate crown | −48.72 mm | Negative middle relay member |
| L5 | r11-r12 | 1.67000 | 57.07 | `670571` lanthanum-crown class | -1636.42 mm | Nearly afocal central plug and aberration spacer |

The steep cemented interface at r10 is the strongest refractive surface in the relay. L3 supplies most of the relay's positive power, L4 counterbalances it and helps control aberration, and L5 contributes little standalone power but is part of the rear correction because it is traversed after the secondary reflection.

Because most of the system's axial power is reflective, this cemented group is not a conventional primary achromat. Its more important role is the correction of residual monochromatic aberrations, Petzval curvature, and the folded beam geometry that must pass through the primary center.

### L6 — Rear Negative Meniscus / Field Corrector (r13–r14)

$n_d = 1.67000$, $\nu_d = 57.07$. Glass: `670571` lanthanum-crown-class glass, same family as the primary blank. Standalone $f = -97.15$ mm.

L6 is the rear negative meniscus. Its front surface r13 is the strongest negative Petzval contributor in the refractive portion of the lens. The element counterbalances the positive relay and helps keep the 35 mm image field acceptably flat for a long catadioptric objective.

The analysis does not assign a specific vendor catalog name because the patent value remains offset from checked public catalog rows.

### Rear Plug-in Filter — r15–r16

$n_d = 1.51680$, $\nu_d = 64.20$. Glass: BSC7 / N-BK7 class plane-parallel filter glass. Optical power: zero.

The patent includes a 2.0 mm plane-parallel plate after r14. Sony's production instructions identify the plug-in filters as components of the optical system and require either the normal filter or the ND4X filter to be installed while shooting. Sony's specifications also state that the 5-group / 7-element count includes one filter element.

The project data file does not model filter surfaces, following the lens-data rule that filters are excluded from the `surfaces` array. The filter is instead folded into the final air-equivalent distance from r14 to the image plane. The analysis still describes it because it is present in the patent and in the manufacturer's published construction count. In physical terms, the formula is six non-filter glass bodies plus one required plug-in filter; the data file's separate M1 and L5 entries are the complementary radial split of one shared primary blank.

## Glass Identification and Selection

The patent supplies only $n_d$ and $\nu_d$ values, not manufacturer glass names. The following identifications were checked by six-digit glass code and by catalog proximity against public manufacturer catalogs and cross-reference tables.

| Patent glass | Code | Where used | Catalog interpretation | Comment |
|---|---:|---|---|---|
| 1.51680 / 64.20 | 517/642 | L1, M2, L4, filter | Hoya BSC7 / Schott N-BK7 / CDGM H-K9L class | Standard borosilicate crown; exact code match to Hoya BSC7 and CDGM H-K9L, near-identical N-BK7 family. |
| 1.67000 / 57.07 | 670571 | M1/L5, L6 | Lanthanum crown; exact public catalog assignment withheld. | Family secure, exact vendor assignment withheld. |
| 1.71300 / 53.93 | 713/539 | L3 | Hoya LAC8 / Schott N-LAK8 / Ohara S-LAL8 / Sumita K-LaK8 class | Lanthanum crown positive relay glass. |

No ED, fluorite, or anomalous-partial-dispersion glass is present. That is expected for a mirror-dominant telephoto: most axial color is avoided by reflection rather than by a complex refractive achromat. The refractive glass selection mainly corrects residual aberrations and the Petzval balance left by the mirrors.

## Focus Mechanism

The patent publishes the infinity prescription only. It does not include a close-focus prescription, variable-spacing table, or moving-group disclosure. The data file therefore does not model focus travel.

The production specifications give a 4.0 m minimum focus distance and 0.13× maximum magnification. Sony's operating instructions state that AF uses the camera's autofocus system, that cameras with wide focus frames should use a central local or spot focus frame, and that the lens has no aperture adjustment. Those production facts are retained as metadata, but no specific optical group motion is asserted from the patent.

| Quantity | Production value | Treatment in data file |
|---|---:|---|
| Minimum focus distance | 4.0 m | Stored as `closeFocusM` |
| Maximum magnification | 0.13× | Reported in analysis only |
| Aperture | f/8 fixed | Stored as `nominalFno: 8`, `fstopSeries: [8]` |
| Close-focus optical spacings | Not published | Not modeled |

## Conditional Expressions

The first approach defines bounds on the annular exit pupil so that a phase-difference AF module receives light through both sampled pupil regions. The patent states four conditions:

| Condition | Bound | Embodiment 1 value | Result |
|---|---:|---:|---|
| (1) $F_{NO}(OUT)$ | $5.5 \leq F_{NO}(OUT) \leq 7.5$ | 6.59 | Satisfied |
| (2) $F_{NO}(IN)$ | $15 \leq F_{NO}(IN) \leq 20$ | 18.20 | Satisfied |
| (3) $P_U(OUT)$ | $100\ \mathrm{mm} \leq P_U(OUT) \leq 150\ \mathrm{mm}$ | 129 mm | Satisfied |
| (4) $P_U(IN)$ | $100\ \mathrm{mm} \leq P_U(IN) \leq 150\ \mathrm{mm}$ | 143 mm | Satisfied |

The annular f-number check reproduces the patent aperture value. Using $f = 496.0$ mm,

$$
R_{out}=\frac{496.0}{2\cdot 6.59}=37.6328\ \mathrm{mm},\quad
R_{in}=\frac{496.0}{2\cdot 18.20}=13.6264\ \mathrm{mm}.
$$

The area-equivalent f-number is therefore

$$
F_{eq}=\frac{496.0}{2\sqrt{37.6328^2-13.6264^2}}=7.066.
$$

This agrees with the patent's $F_{NO}=7.0$ after rounding. It also shows that the Table 1 value "inside effective diameter on r2 = 13.5" behaves numerically as a semi-diameter or pupil radius. The patent prose calls it a diameter, but the f-number relation identifies the usable modeling quantity as approximately 13.5 mm radius.

## Folded and Mirror Path Verification

The data file uses `opticalPath.surfaceOrder` because the default front-to-rear sequential model cannot trace this lens. The rendered physical order is front-to-rear, while the ray encounter order repeats mirror-front surfaces and skips central relay surfaces during the annular primary leg.

Modeled encounter order in the data file:

`1 → 2 → STO → OBS → M1F → M1R → M1F → SEC_R → SEC_M → SEC_R → 9 → 10 → L5F → L5R → 13 → 14 → IMG`

Key modeling points:

- `M1F`/`M1R` model the annular primary shell. `M1R` is a second-surface mirror with matching `innerSd` on the shell surfaces.
- `L5F`/`L5R` model the clear central plug of the same physical blank. Their semi-diameter is smaller than the primary shell's inner clear radius.
- `OBS` is a synthetic central blocker representing the unusable central aperture caused by the secondary obstruction. It is kept separate from the stop because `innerSd` on a stop would pass the central hole rather than block it.
- `STO` is a fixed synthetic aperture derived from $F_{NO}(OUT)$ rather than an iris diaphragm.
- `SEC_R → SEC_M → SEC_R` models the secondary Mangin path from the rear side of the substrate to the silvered object-side surface and back out again.
- r15–r16 are excluded from the data file as filter surfaces; their optical path is folded into the r14-to-image distance.

The patent figure supports this interpretation: Figure 10 labels r3/r4 on the primary mirror shell, r11/r12 in the central region of that same large blank, and r15/r16 as the rear plane-parallel filter.

## Verification Summary

All numerical checks below were recomputed from Table 1 using a paraxial $y$–$n u$ trace with signed refractive index through reflections.

| Quantity | Patent / source value | Recomputed value | Comment |
|---|---:|---:|---|
| Patent EFL | 496.0 mm | 495.9725 mm | Confirms prescription transcription and mirror signs. |
| Marketing focal length | 500 mm | scale factor 1.0081 from patent EFL | Manufacturer value retained for catalog metadata. |
| Patent annular f-number | 7.0 | 7.066 area-equivalent | From $F_{NO}(OUT)$ and $F_{NO}(IN)$. |
| Marketed aperture | f/8 fixed | — | Manufacturer value retained as `nominalFno`. |
| Table 1 bottom value $d$ | 92.3 mm | 92.3 mm physical station of r16 | Sum of d1 through d15, not BFD. |
| BFD after r16 | not tabulated | 62.3611 mm | Paraxial image distance behind the filter. |
| Data-file r14-to-image distance | not tabulated | 66.3797 mm | Includes air-equivalent filter path. |
| Petzval sum | not tabulated | $+9.95398\times10^{-4}\ \mathrm{mm^{-1}}$ | Surface-by-surface $\phi/(n n')$ with signed indices. |
| Petzval radius | not tabulated | 1004.62 mm | Approximately 2.03× patent EFL. |
| Primary Mangin focal length | not tabulated | +110.34 mm | r3 → r4 reflection → r5. |
| Secondary Mangin focal length | not tabulated | −37.00 mm | r6 → r7 reflection → r8. |
| Rear cemented relay focal length | not tabulated | +120.71 mm | r9–r12, including clear central plug. |
| Physical element count | 5 groups / 7 elements incl. filter | six non-filter bodies + required filter | Data array splits the shared primary blank for tracing, while filter surfaces are folded out. |

The previous interpretation that the patent's 92.3 mm value was a final image distance was not retained. The signed-distance sum verifies that it is the axial station of the last filter surface, while the paraxial focus is a separate computed quantity.

## Design Heritage and Context

US 4,951,078 is primarily an AF-compatibility patent, not simply an optical prescription patent. Its central problem is that a catadioptric lens has an annular exit pupil, while a phase-difference AF module needs light through two separated pupil regions. The first approach solves the problem by choosing inner and outer pupil dimensions that avoid cutting off the AF incident pupils. The later approaches in the same patent use differently shaped reflective or shielding regions, and a dichroic mirror approach that transmits infrared light for focus detection while reflecting visible light for exposure.

The production Minolta/Sony lens implements the practical fixed-aperture reflex-lens concept represented by the first approach: compact 500 mm focal length, annular pupil, fixed f/8 exposure setting, and camera-body-driven autofocus operation constrained to the central AF sampling geometry.

## Sources and References

- US Patent 4,951,078, Takashi Okada, Minolta Camera Kabushiki Kaisha, "Camera System Including Catadioptric Lens and Catadioptric Lens System Used Therein," filed May 15, 1989; granted August 21, 1990. Table 1, Figures 4, 6, 9, 10, claims 1–3 and 17.
- Sony UK Support, "SAL500F80 Specifications," 500mm F8 Reflex. Product specifications list 5 groups / 7 elements with one filter element included; 89 × 118 mm dimensions; fixed f/8; 4.0 m minimum focus; 0.13× maximum magnification; 5° 35 mm-format angle of view; 665 g mass.
- Sony Corporation, "SAL500F80 500mm F8 Reflex Operating Instructions," 2-685-148-11(1). The manual identifies the plug-in filter, states that the lens has no aperture adjustment, and requires either the normal filter or ND4X filter to be installed.
- HOYA Corporation USA Optics Division, "Optical Glass" catalog. Used for BSC7 designation, six-digit glass code convention, and optical-glass property definitions.
- HOYA Group Optics Division, "Glass Cross Reference Index." Used for cross-vendor code checks: BSC7 / N-BK7 / H-K9L at 517/642 and LAC8 / N-LAK8 / S-LAL8 / K-LaK8 class at 713/539.
- Public Hikari / Nikon lanthanum-crown catalog data were checked only to reject a forced exact vendor assignment for the patent's 1.67000 / 57.07 glass.
