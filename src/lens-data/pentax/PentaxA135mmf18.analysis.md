# smc PENTAX-A★ 135mm F1.8 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 4,447,137 — "Large-Aperture Telephoto Lens"  
**Application Number:** 420,683  
**Filed:** September 21, 1982  
**Granted:** May 8, 1984  
**Priority:** January 23, 1982 (Japan, 57-9214)  
**Inventor:** Yasunori Arai  
**Assignee:** Asahi Kogaku Kogyo Kabushiki Kaisha  
**Embodiment analyzed:** Example 2 — f = 135 mm, FNO 1:1.8, 2ω = 18°

The transcribed prescription is Example 2 of US 4,447,137. The patent describes a large-aperture Ernostar-type telephoto objective with seven elements in six components, a cemented second component, and a fixed sixth component during focusing. Example 2 is the f/1.8 version of the two disclosed examples; Example 1 is the same design family at f/2.0.

The production identification is the smc PENTAX-A★ 135mm F1.8. The match rests on the full convergence of focal length, f-number, format, optical layout, focus scheme, and patent timing. Example 2 gives f = 135 mm, FNO 1:1.8, and 2ω = 18°. The element count is seven elements in six groups/components, with the second component cemented. The patent's focusing claim fixes the sixth component, L7, while the first through fifth components move. The production lens is the corresponding K-mount, 135-format, 7-element/6-group Pentax A★ 135 mm f/1.8 design.

Where a hard product specification is needed, the production specification governs. The patent evaluates aberrations at β = −1/10, with d11 = 20.42 mm for Example 2; that is an internal patent evaluation point, not necessarily the mechanical end of the production focusing helix. The production close-focus distance used in the data file is 1.2 m.

A transcription point is material. The Example 2 patent image reads d4 = 15.0 mm at the cemented L2-L3 interface after r4. Optical verification rejects d4 = 5.0 mm: that reading gives EFL ≈ 154.09 mm and f1,2,3 ≈ 0.505f, inconsistent with the patent's f = 135 mm and f1,2,3 = 0.476f. With d4 = 15.0 mm, the same prescription gives EFL = 134.9875 mm and f1,2,3 = 0.476f.

## Optical Architecture

The design is a large-aperture, long-focus objective in the Ernostar lineage rather than a strict short-track telephoto system. The patent itself frames the problem as an Ernostar-type telephoto lens whose spherical aberration, especially near the g-line, becomes overcorrected when the aperture is opened from the more ordinary f/2.8 region to f/1.8–f/2.0.

The front-to-rear component order is:

1. L1, a positive front collector.
2. L2-L3, a cemented negative-positive meniscus doublet with a hyperchromatic buried interface at r4.
3. L4, a strong negative meniscus with its concave side facing the image.
4. L5, a very weak meniscus with its concave side facing the object.
5. L6, a positive meniscus whose stronger curvature faces the object.
6. L7, a weak positive rear element held fixed during focusing.

The optical power distribution is a strong positive front collector/doublet pair, a strong negative L4, a large air space, and a positive rear relay/corrector section. The patent calls the lens telephoto, but the paraxial track is not sub-unity: EFL = 134.99 mm and the first-vertex-to-image distance is 143.46 mm, giving TL/EFL ≈ 1.063. The term is therefore best read in the historical photographic sense of a fast long-focus lens, not as a strict optical telephoto ratio.

The large d7 air interval between L4 and L5 is the architectural hinge. It separates the high-power front objective from the rear correction section and gives L5 room to work as a weak near-concentric higher-order aberration corrector. The patent does not disclose any aspherical surfaces; the design is all-spherical.

The patent does not tabulate the aperture stop as a numbered surface. Requirement (4) says the eighth surface r8 has a large radius of curvature concentric with the aperture, but applying that statement literally to the Example 2 vertex spacings places the r8 center 1.188 mm behind r6, inside L4. That is not a plausible physical iris plane. The data file therefore keeps STO in the d7 air interval, 8.50 mm behind r7, where the f/1.8 stop radius clears the rear-surface sag of L4. The d7 split is 8.50 mm before STO and 25.88 mm after it, preserving the patent total of 34.38 mm. STO semi-diameter is a paraxial f/1.8 entrance-pupil value; other clear apertures remain conservative visualization estimates.

## Element-by-Element Analysis

The focal lengths below are standalone thick-lens-in-air values calculated from the corrected Example 2 prescription. They are useful for element role and sign, but they are not substitutes for the in-situ powers of the assembled system.

### L1 — Positive meniscus front collector

nd = 1.62041, νd = 60.3. Glass: S-BSM16 / N-SK16 / BACD16 class dense barium crown. f ≈ +117.0 mm.

L1 is the principal front collector. Both radii are positive, r1 = 71.398 mm and r2 = 4020.868 mm, so the element is formally a positive meniscus, though the rear surface is nearly flat in comparison with the front. L1 is one of the two positive front-component glasses used in the patent's achromatic and Petzval condition.

### L2-L3 — Cemented doublet, hyperchromatic second component

L2: nd = 1.72342, νd = 37.9. Glass: S-BAH28 / BAFD8 class dense barium flint. f ≈ −119.2 mm.  
L3: nd = 1.69680, νd = 55.5. Glass: S-LAL14 / LAC14 class lanthanum crown. f ≈ +61.3 mm.

The second component is the defining chromatic element of the design. L2 is a negative meniscus with its concave side facing the image; L3 is a stronger positive meniscus cemented behind it. The pair has a net positive component focal length of approximately +148.3 mm, but the more important function is chromatic. The cemented surface r4 has small monochromatic power because n2 and n3 are close, while the Abbe-number difference is large.

For Example 2, |n2 − n3| = 0.02662 and ν3 − ν2 = 17.6. This satisfies the patent's hyperchromatic-surface requirement and gives the buried interface an independent chromatic correction role. The r4 radius is 31.309 mm, within the required interval 0.2f < r4 < 0.35f.

### L4 — Negative meniscus, third component

nd = 1.67270, νd = 32.1. Glass: S-TIM25 / N-SF5 / E-FD5 class dense flint. f ≈ −48.5 mm.

L4 is the strong negative third component. Its front surface is weak, r6 = 461.054 mm, and its rear surface is steep, r7 = 30.267 mm, giving the element substantial negative power with the concave side facing the image.

The patent's f1,2,3 condition refers to the composite focal length of the first three glass lenses, L1 through L3, not to L4. The corrected L1-L3 composite focal length is 64.206 mm, or 0.476f. L4 follows that front positive section and supplies the major negative power needed to complete the Ernostar-type front objective. If the L1-L3 composite is too short, the patent explains that the third component must carry excessive negative power and higher-order spherical aberration, coma, and distortion become difficult to correct.

### L5 — Weak meniscus, fourth component

nd = 1.70154, νd = 41.2. Glass: S-BAH27 / BAFD7 class dense barium flint. f ≈ +752 mm.

L5 is a weak positive meniscus immediately after the large air gap. Both radii are negative and close in magnitude, r8 = −41.362 mm and r9 = −40.027 mm, so the element presents its concave side to the object and carries very little paraxial power.

The patent assigns L5 to higher-order aberration correction rather than ordinary power distribution. The element satisfies |f5| > 4f, with |f5|/f ≈ 5.57, and its object-side radius satisfies 0.2f < −r8 < 0.4f. In this position, the near-concentric meniscus generates higher-order spherical aberration and coma of the sign needed to cancel residual errors left by the front objective.

### L6 — Positive meniscus, fifth component

nd = 1.72000, νd = 46.0. Glass: K-LaFn11 / H-LaF72 class lanthanum flint. f ≈ +195.7 mm.

L6 is a positive meniscus whose stronger curvature faces the object, as required by the patent. The object-side radius r10 = 71.985 mm lies inside the stated interval 0.35f < r10 < f. The patent identifies this radius condition as the distortion-control condition after spherical aberration and coma have been substantially corrected by the preceding components.

### L7 — Fixed positive rear element, sixth component

nd = 1.70000, νd = 48.1. Glass: J-LAF01 / H-LaF51 class lanthanum flint. f ≈ +424.9 mm.

L7 is the rearmost element and remains fixed relative to the image plane during focusing. Both surfaces have positive radii, r12 = 248.646 mm and r13 = 1506.638 mm, so it is a weak positive meniscus. Its power satisfies the patent's focusing condition, 0.25 < f/f7 < 0.45, with f/f7 ≈ 0.318. The weak positive rear element is not a large focusing group; its function is to stabilize aberration variation while the front five components extend forward.

## Glass Identification and Selection

The patent gives only nd and νd values, not catalog names. The glass labels below are therefore catalog-class identifications, matched against manufacturer-published catalog values where available and expressed conservatively when the exact historical supplier cannot be proved.

| Element | nd | νd | Code | Catalog-class identification | Role |
|---|---:|---:|---|---|---|
| L1 | 1.62041 | 60.3 | 620/603 | S-BSM16 / N-SK16 / BACD16 dense barium crown class | Positive front collector |
| L2 | 1.72342 | 37.9 | 723/379–380 | S-BAH28 / BAFD8 dense barium flint class | Negative doublet member |
| L3 | 1.69680 | 55.5 | 697/555 | S-LAL14 / LAC14 lanthanum crown class | Positive doublet member |
| L4 | 1.67270 | 32.1 | 673/321 | S-TIM25 / N-SF5 / E-FD5 dense flint class | Strong negative component |
| L5 | 1.70154 | 41.2 | 702/412 | S-BAH27 / BAFD7 dense barium flint class | Weak higher-order corrector |
| L6 | 1.72000 | 46.0 | 720/460 | K-LaFn11 / H-LaF72 lanthanum flint class | Distortion-control positive meniscus |
| L7 | 1.70000 | 48.1 | 700/481 | J-LAF01 / H-LaF51 lanthanum flint class | Fixed rear positive element |

The chromatic strategy does not depend on ED, fluorite, or aspherical surfaces. It depends instead on the L2-L3 cemented interface: nearly equal refractive indices suppress monochromatic interface power, while the large Abbe-number difference gives the buried surface useful chromatic leverage. This is the mechanism the patent calls a hyperchromatic surface.

The surface-by-surface Petzval sum of the assembled corrected Example 2 prescription is approximately 8.40 × 10−4 mm−1, corresponding to a Petzval radius of about 1.19 m in magnitude. That is a favorable figure for a 135 mm f/1.8 all-spherical design.

## Focus Mechanism

The focus mechanism is fixed-rear-element extension. The sixth component, L7, remains fixed relative to the image plane, while L1 through L6 move forward together. In prescription terms, the only changing separation is d11, the air gap between L6 and L7.

| State | d11 | Moving-group travel | Paraxial result |
|---|---:|---:|---|
| Infinity | 4.00 mm | 0.00 mm | EFL = 134.9875 mm, BFD = 40.7543 mm |
| Patent β = −1/10 evaluation | 20.42 mm | 16.42 mm | object ≈ 1518 mm before first vertex; β ≈ −0.098; subject-to-film ≈ 1.678 m |
| Production 1.2 m MFD representation in data file | 29.4035 mm | 25.4035 mm | β ≈ −0.152 at 1.2 m subject-to-film |

The patent text and figures use the β = −1/10 state to compare the invention's fixed-rear focusing against a less-corrected alternative at the same magnification. The data file also includes the manufacturer's 1.2 m close-focus specification. That row is not a patent-published prescription row; it is a paraxial extension of the same fixed-L7 focus law so the viewer's close-focus endpoint matches the production lens.

## Conditional Expressions

The patent states six conditions. The corrected Example 2 prescription satisfies all of them.

| # | Condition | Corrected Example 2 value | Status |
|---|---|---:|---|
| (1) | 1.60 < (n1+n3)/2; 50 < (ν1+ν3)/2 | 1.6586; 57.9 | satisfied |
| (2) | \|n2−n3\| < 0.1; ν3−ν2 > 10; 0.2f < r4 < 0.35f | 0.02662; 17.6; r4 = 31.309 mm | satisfied |
| (3) | 0.35f < f1,2,3 < 0.55f | 64.206 mm = 0.476f | satisfied |
| (4) | \|f5\| > 4f; 0.2f < −r8 < 0.4f | 752.36 mm = 5.57f; −r8 = 41.362 mm | satisfied |
| (5) | 0.35f < r10 < f | r10 = 71.985 mm | satisfied |
| (6) | 0.25 < f/f7 < 0.45 | 0.318 | satisfied |

The printed form of condition (1) is internally inconsistent in the patent: one displayed expression appears to use n2, while the accompanying explanation identifies the positive lenses in the front components, i.e. L1 and L3. The Abbe-number half of the same condition already uses ν1 and ν3. The physically consistent reading is therefore (n1+n3)/2. The literal (n1+n2)/2 reading would also satisfy the lower bound, so the conformance result does not depend on that typesetting ambiguity.

## Design Heritage and Context

The design is a late all-spherical fast telephoto formulation rather than an exotic-glass or aspherical solution. The patent addresses the f/1.8 problem with two structural devices: the hyperchromatic buried surface in the L2-L3 doublet for short-wavelength spherical-aberration control, and the near-concentric weak L5 corrector for higher-order spherical aberration and coma after the front objective.

The fixed-rear-element focus scheme is equally central. Rather than moving the entire lens as a rigid unit, the prescription holds L7 fixed and advances L1 through L6. This keeps the rear weak positive element in a stable relationship with the image plane and reduces aberration variation at short distances.

## Verification Summary

The final prescription was re-run from the patent values with a paraxial y-nu matrix trace, standalone thick-lens calculations, Petzval summation, and finite-conjugate focusing checks.

| Quantity | Patent / source value | Independently verified value |
|---|---:|---:|
| Effective focal length | 135 mm | 134.9875 mm |
| Front-vertex-to-image track | not tabulated | 143.4643 mm |
| Back focal distance from r13 | not tabulated | 40.7543 mm |
| TL/EFL | not tabulated | 1.063 |
| f1,2,3 | 0.476f | 64.206 mm = 0.476f |
| f5 | 5.57f | 752.36 mm = 5.57f |
| f/f7 | 0.318 | 0.318 |
| Patent d11 at β = −1/10 | 20.42 mm | β ≈ −0.098 |
| Production close focus | 1.2 m | d11 ≈ 29.4035 mm, β ≈ −0.152 |
| Petzval sum | not tabulated | 8.40 × 10−4 mm−1 |

The corrected d4 = 15.0 mm reading is required for consistency. A 5.0 mm reading returns the wrong focal length and the wrong f1,2,3 ratio, so it is not used. The aperture stop is not patent-published as a numbered surface; the data file places it in the d7 air interval with clearance from L4, and the remaining semi-diameters are conservative visualization estimates rather than claimed prescription data.

## Sources and References

- US Patent 4,447,137, "Large-Aperture Telephoto Lens," Yasunori Arai, Asahi Kogaku Kogyo Kabushiki Kaisha, granted May 8, 1984. Primary source for the optical prescription, conditional expressions, focusing claim, and aberration-comparison figures.
- Pentax A-series and K-mount lens reference specifications for the smc PENTAX-A★ 135mm F1.8: 7 elements / 6 groups, K mount, 1.2 m minimum focus, 77 mm filter, 9 aperture blades, 865 g, 1984–1989 production range.
- OHARA, HOYA, Schott, Sumita, CDGM, and Hikari optical-glass catalog data for nd/νd class matching. Catalog names in this analysis are class identifications unless the patent itself supplies the name; US 4,447,137 provides only nd and νd.
