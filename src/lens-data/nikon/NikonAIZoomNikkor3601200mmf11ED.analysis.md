## Patent Reference and Design Identification

**Patent:** US 3,743,384
**Filed:** December 16, 1971; priority December 24, 1970 (Japan 45/116646)
**Granted:** July 3, 1973
**Inventor:** Soichi Nakamura
**Assignee:** Nippon Kogaku K.K.
**Title:** Optical System for the Magnification Varying Portion of an Ultra-Telephoto Type Zoom Lens
**Embodiment analyzed:** Example I / Claim 4
**Certificate of Correction:** March 5, 1974

Example I of US 3,743,384 is the prescription transcribed here. The patent states a 35 mm still-camera zoom lens with $f = 360$-$1200$ mm, F/11 relative aperture, and telephoto ratio 0.61. The prescription contains 32 refracting surfaces defining 20 glass elements in 12 air-separated groups. Those values match the production Nikon AI Zoom-Nikkor 360-1200mm f/11 ED specification: 360-1200 mm, f/11, 20 elements in 12 groups, Nikon F mount, and 6 m minimum marked focusing distance.

The patent's Certificate of Correction is material. It corrects $r_{12}$ placement, $r_{28}$, $r_{29}$, $d_{29}$, and $r_{32}$ for Example I, along with several Example II errors. The rendered patent pages were checked directly rather than relying on OCR alone. Surface $r_{15}$ is used as $+444.7$ mm. The OCR text can misread this sign, but the rendered Example I table and Claim 4 table show the plus sign, and that value gives the biconcave L9 form required by the patent prose. It is not treated as an additional certificate-unlisted patent error.

## Optical Architecture

The lens is a positive-negative-positive-positive ultra-telephoto zoom. The first three groups form an afocal or near-afocal magnification-varying section: a convergent collector group $f_1$, a divergent variator group $f_2$, and a convergent compensator group $f_3$. The fourth group $f_4$ is a fixed positive telephoto relay that images the variator output onto the film plane.

The group powers computed from the corrected prescription are:

| Group | Elements | Role | Computed focal length |
|---|---:|---|---:|
| $f_1$ | 4 | Front convergent collector and chromatic corrector | +420.984 mm |
| $f_2$ | 5 | Divergent variator | -86.958 mm |
| $f_3$ | 4 | Convergent compensator | +190.541 mm |
| $f_4$ | 7 | Fixed telephoto relay | +538.098 mm |

The distinctive zoom feature is the non-U-turn compensator motion. Conventional positive-negative-positive afocal zooms often require a compensating group to reverse direction within the usable zoom range. Nakamura's power distribution places that reversal outside the operating range, so $f_2$ and $f_3$ both move rearward from the 360 mm position to the 1200 mm position. The patent emphasizes this as a mechanical simplification and a way to stabilize coma over zoom.

The three variable air spaces are:

| Gap | 360 mm position | 1200 mm position | Change |
|---|---:|---:|---:|
| $d_7$ ($f_1$ to $f_2$) | 11.258 mm | 211.258 mm | +200.000 mm |
| $d_{15}$ ($f_2$ to $f_3$) | 64.853 mm | 4.248 mm | -60.605 mm |
| $d_{21}$ ($f_3$ to $f_4$) | 143.138 mm | 3.744 mm | -139.394 mm |
| **Sum** | **219.249 mm** | **219.250 mm** | **+0.001 mm** |

The near-constant sum confirms an invariant mechanical optical length. The computed back focal distance is 235.20 mm at the 360 mm position and 235.36 mm at the long end. The 0.16 mm residual is consistent with rounded patent tabulation, so the data file keeps a fixed image plane rather than adding an artificial zooming back-focus variable.

The Petzval sum was recomputed surface-by-surface using $\Phi/(n n')$, not by a thin-element approximation. The relay group contributes a positive Petzval sum of +0.001623 mm^-1. The complete system Petzval sum is -0.000715 mm^-1, giving a Petzval radius of roughly -1400 mm. That is consistent with the patent's stated goal: a telephoto relay with positive Petzval contribution offsets the negative Petzval tendency of a compact ultra-telephoto variator.

## Element-by-Element Analysis

### Group f1 — Convergent front group

The first group has four elements in three air-spaced components. It combines a large positive low-dispersion singlet with a positive-negative-positive chromatic corrector. The patent calls the three-lens corrector an apochromat, but it does not publish partial-dispersion ratios or spectral-line indices. The analysis therefore treats “apochromat” as the patent's architectural term, not as a quantitatively verified modern APO claim.

#### L1 — Biconvex Positive

nd = 1.48606, νd = 81.5. Glass: unmatched special low-dispersion glass (486/815; patent quartzite/ED-type). f = +517.1 mm.

L1 supplies much of the front group's positive collection power. Its biconvex form is also part of the patent's aberration-balancing strategy for close focus and spherical aberration stability, although the patent does not publish the close-focus prescription.

#### L2 — Biconvex Positive

nd = 1.48606, νd = 81.5. Glass: unmatched special low-dispersion glass (486/815; patent quartzite/ED-type). f = +395.9 mm.

L2 is the front positive member of the chromatic-correction subassembly. It is separated from L3 by a 1.0 mm air gap in Example I, consistent with the patent's allowance that the large-diameter triplet members may be separated by air rather than fully cemented.

#### L3 — Biconcave Negative

nd = 1.74400, νd = 44.9. Glass: LaF2 / N-LAF2 class. f = -272.7 mm.

L3 is the high-index negative member of the front corrector. It satisfies the first-group index condition by having a higher refractive index than both adjacent positive members. Its high index permits strong negative power without excessive curvature.

#### L4 — Positive Meniscus, convex to object

nd = 1.58913, νd = 61.2. Glass: N-SK5 / S-BAL35 class (589/612), not BaLF4. f = +658.2 mm.

L4 is cemented to L3 at $r_6 = +298.2$ and completes the front chromatic corrector. Current Schott/OHARA cross-reference data place N-BALF4 around code 580/537, while the patent glass here is 589/612. The closest catalog family in the authoritative comparison tables is the SK5 / S-BAL35 class.

The standalone focal length of the L2-L3-L4 subassembly is +2409.4 mm. It is therefore a weak positive corrector, not the main power source of the front group.

### Group f2 — Divergent variator group

The second group is the principal magnification-changing group. It contains three components: a negative cemented doublet, a hyperchromatic cemented doublet, and a biconcave singlet. Its computed focal length is -86.958 mm, matching the patent's -86.956 mm value.

#### L5-L6 — Cemented Doublet, Negative

L5: nd = 1.75520, νd = 27.5. Glass: SF4 / N-SF4. f = +165.3 mm.
L6: nd = 1.58913, νd = 61.2. Glass: N-SK5 / S-BAL35 class (589/612). f = -123.7 mm.
Net: f = -499.3 mm.

The cemented interface is concave toward the object, as required by the patent. The high-index flint positive L5 and lower-index crown negative L6 produce a weak negative cemented component. This component is less powerful than the complete $f_2$ group because the group's strong net divergence depends on separated-component spacing as well as individual surface power.

#### L7-L8 — Cemented Doublet, Negative; hyperchromatic component

L7: nd = 1.48606, νd = 81.5. Glass: unmatched special low-dispersion glass (486/815; patent quartzite/ED-type). f = -142.1 mm.
L8: nd = 1.58875, νd = 51.2. Glass: barium-crown 589/512 class, historical BAL7-class but not resolved to a current recommended-catalog entry. f = +394.7 mm.
Net: f = -220.9 mm.

The patent identifies this as a hyperchromatic achromatic composite when stronger achromatism of the divergent group is needed. Its negative member uses the same high-Abbe special glass as the front group, making it a chromatic counterweight to the collector rather than a conventional crown-positive/flint-negative achromat.

#### L9 — Biconcave Negative

nd = 1.51680, νd = 64.2. Glass: N-BK7 / S-BSL7 class. f = -216.5 mm.

L9 is the third component of the variator group. The correct prescription uses $r_{14} = -149.8$ and $r_{15} = +444.7$, making the element biconcave as described in the patent. The plus sign at $r_{15}$ was verified against the rendered patent table and the paraxial group focal length.

### Group f3 — Convergent compensator group

The third group moves rearward with the variator to preserve the image plane. It contains two positive cemented doublets and has computed focal length +190.541 mm.

#### L10-L11 — Cemented Doublet, Positive

L10: nd = 1.62041, νd = 60.3. Glass: N-SK16 / S-BSM16 class. f = +226.0 mm.
L11: nd = 1.61293, νd = 36.9. Glass: unmatched flint (613/369; catalog identity uncertain). f = -651.0 mm.
Net: f = +348.8 mm.

The component is a positive meniscus system concave toward the object. The patent states that this shape controls astigmatism and coma at intermediate focal lengths, where this type of zoom is otherwise prone to imbalance.

#### L12-L13 — Cemented Doublet, Positive

L12: nd = 1.48606, νd = 81.5. Glass: unmatched special low-dispersion glass (486/815; patent quartzite/ED-type). f = +217.3 mm.
L13: nd = 1.75520, νd = 27.5. Glass: SF4 / N-SF4. f = -457.7 mm.
Net: f = +415.8 mm.

The cemented interface is concave toward the object, and the index relation is $n_{32F} < n_{32R}$, with 1.48606 before the interface and 1.75520 behind it. This arrangement gives positive power while deliberately over-correcting chromatism relative to the highly corrected first group.

### Group f4 — Fixed telephoto relay

The relay group has seven elements in four air-separated components. Its computed focal length is +538.098 mm. It is not a simple field lens; it is a telephoto-type relay with its own positive Petzval contribution and a negative rear component that extends back focus.

#### L14 — Biconvex Positive

nd = 1.51454, νd = 54.6. Glass: unmatched crown (515/546; catalog identity uncertain). f = +420.1 mm.

L14 is the relay entrance singlet. It contributes moderate positive power ahead of the near-afocal chromatic-correction triplet.

#### L15-L16-L17 — Cemented Triplet, near-afocal

L15: nd = 1.48606, νd = 81.5. Glass: unmatched special low-dispersion glass (486/815; patent quartzite/ED-type). f = +167.4 mm.
L16: nd = 1.74400, νd = 44.9. Glass: LaF2 / N-LAF2 class. f = -101.8 mm.
L17: nd = 1.63930, νd = 45.0. Glass: unmatched barium flint (639/450; catalog identity uncertain). f = +290.1 mm.
Net: f ≈ -37,500 mm.

The triplet is essentially neutral in first-order power. Its role is chromatic correction within the relay beam rather than focal-length generation. That is why the standalone net focal length is tens of meters while the individual surfaces remain strongly curved.

#### L18 — Biconvex Positive

nd = 1.50137, νd = 56.5. Glass: unmatched light crown (501/565; catalog identity uncertain). f = +384.5 mm.

L18 is a symmetric biconvex singlet preceding the relay's rear negative doublet. The long 139.4 mm air gap before L18 and the negative rear doublet together create the telephoto relay geometry.

#### L19-L20 — Cemented Doublet, Negative

L19: nd = 1.74443, νd = 49.4. Glass: unmatched high-index crown/flint boundary glass (744/494; catalog identity uncertain). f = -68.7 mm.
L20: nd = 1.60342, νd = 38.0. Glass: F5 / S-TIM5 class. f = +101.5 mm.
Net: f = -223.0 mm.

This rear doublet is the relay's negative telephoto component. It provides the back-focus extension that allows the total axial length, including back focus, to be approximately 0.61 times the long-end focal length.

## Glass Identification and Selection

The prescription uses thirteen distinct nd/νd pairs across twenty elements. The glass labels use current Schott/OHARA/Hoya comparison tables where they match the six-digit glass code and use explicit “unmatched” labels where a current public catalog match was not confirmed.

| Glass / class | nd | νd | Elements | Identification status |
|---|---:|---:|---|---|
| Special low-dispersion 486/815 | 1.48606 | 81.5 | L1, L2, L7, L12, L15 | Unmatched; patent describes quartzite or other special partial-dispersion glass |
| LaF2 / N-LAF2 class | 1.74400 | 44.9 | L3, L16 | Catalog class match by code |
| N-SK5 / S-BAL35 class | 1.58913 | 61.2 | L4, L6 | Code fits SK5/S-BAL35 family, not BaLF4 |
| SF4 / N-SF4 | 1.75520 | 27.5 | L5, L13 | Catalog match by code |
| Barium crown 589/512 | 1.58875 | 51.2 | L8 | Historical BAL7-class; not resolved to a current recommended public entry |
| N-BK7 / S-BSL7 class | 1.51680 | 64.2 | L9 | Catalog class match by code |
| N-SK16 / S-BSM16 class | 1.62041 | 60.3 | L10 | Catalog class match by code |
| Flint 613/369 | 1.61293 | 36.9 | L11 | Unmatched in checked current recommended tables |
| Crown 515/546 | 1.51454 | 54.6 | L14 | Unmatched in checked current recommended tables |
| Barium flint 639/450 | 1.63930 | 45.0 | L17 | Unmatched in checked current recommended tables |
| Light crown 501/565 | 1.50137 | 56.5 | L18 | Unmatched in checked current recommended tables |
| High-index 744/494 | 1.74443 | 49.4 | L19 | Unmatched in checked current recommended tables |
| F5 / S-TIM5 class | 1.60342 | 38.0 | L20 | Catalog class match by code |

The five 486/815 elements are the principal low-dispersion material choice in the patent. The patent text predates modern public ED marketing terminology and does not name a catalog glass. Because no matching current OHARA, Hoya, Schott, Hikari, CDGM, or Sumita catalog entry was confirmed, the data file does not assign a modern FK or FPL trade name to these elements.

The 589/612 glass is not BaLF4. In Schott comparison data, N-BALF4 is approximately 580/537, whereas the patent's 589/612 pair aligns with the SK5 / BAL35 family.

## Focus Mechanism

### Zoom mechanism

The data file models the three patent-published zoom spacings only: $d_7$, $d_{15}$, and $d_{21}$. Groups $f_1$ and $f_4$ remain fixed; groups $f_2$ and $f_3$ move rearward from short to long focal length. The aperture stop is not specified in the patent table, so the data file places an inferred stop in the $d_{21}$ air space immediately behind surface 21. The stop placement preserves the total $d_{21}$ values at both zoom endpoints.

### Focus

US 3,743,384 does not disclose close-focus group spacings. The production AI lens scale is documented from 6 m to infinity, but the prescription here is an infinity-position zoom prescription. The data file therefore records `closeFocusM: 6` as production metadata and intentionally omits focus-variable spacings rather than inventing a focus travel model.

The 1982 Ai-S ED-IF revision should not be conflated with the earlier AI version in the filename. The Ai-S lens incorporated internal focusing; the patent itself does not supply the close-focus optical prescription for either mechanical version.

## Conditional Expressions

The patent's first three conditions define the Gauss-area power distribution. With $M = 1200/360 = 3.333$ and $l = 200$ mm, the corrected prescription satisfies the stated bounds.

| Condition | Computed bounds | Computed group value | Result |
|---|---:|---:|---|
| (1) $[(M+1)/(M-1)]l < f_1 < 1.2[(M+1)/(M-1)]l$ | 371.4 to 445.7 mm | +420.984 mm | Satisfied |
| (2) $0.8l/(1-M) < f_2 < 1.1l/(1-M)$ | -94.3 to -68.6 mm | -86.958 mm | Satisfied |
| (3) $2l/(M-1) < f_3 < 3.0l/(M-1)$ | 171.4 to 257.1 mm | +190.541 mm | Satisfied |

The refractive-index conditions are also satisfied by the corrected prescription:

| Condition | Requirement | Prescription values | Result |
|---|---|---|---|
| (4) | Middle lens of the first-group triplet has higher index than both flanking lenses | 1.48606 < 1.74400 and 1.58913 < 1.74400 | Satisfied |
| (5) | First component of second group uses a higher-index preceding lens than following lens | 1.75520 > 1.58913 | Satisfied |
| (6) | Rear component of third group has lower index before the interface than behind it | 1.48606 < 1.75520 | Satisfied |

The formula for condition (5) is poorly captured in OCR and in some text extractions. The patent abstract, prose, and Example I values all require the preceding L5 member to have the greater refractive index.

## Chromatic Correction Strategy

The chromatic correction strategy is distributed across the variator and relay rather than concentrated in one front achromat. The front group uses a high-Abbe positive element followed by a three-glass positive-negative-positive corrector. The second group uses a hyperchromatic negative doublet with a low-dispersion negative member. The third group uses over-corrected positive doublets to balance the highly corrected front group. The relay includes a near-afocal three-glass corrector so that the relay does not reintroduce large secondary spectrum.

The patent expressly links compactness, Petzval tolerance, and the use of special partial-dispersion material. It also claims a still-camera zoom lens requiring no infrared calibration. The present data file cannot independently model that spectral claim because the patent does not publish C-, F-, g-line indices or partial-dispersion deviations for the special 486/815 glass.

## Verification Summary

All first-order quantities were recomputed from the corrected prescription using an independent Python paraxial y-ν ray trace. The Petzval calculation uses the surface expression $\Phi/(n n')$.

| Quantity | Computed | Patent / source value | Difference |
|---|---:|---:|---:|
| EFL at 360 mm setting | 360.041 mm | 360 mm | +0.011% |
| EFL at 1200 mm setting | 1188.412 mm | 1200 mm nominal | -0.966% |
| BFD at 360 mm setting | 235.201 mm | not stated | — |
| BFD at 1200 mm setting | 235.361 mm | not stated | — |
| $f_1$ | +420.984 mm | +420.955 mm | +0.007% |
| $f_2$ | -86.958 mm | -86.956 mm | +0.002% |
| $f_3$ | +190.541 mm | +190.565 mm | -0.013% |
| $f_4$ | +538.098 mm | +537.805 mm | +0.054% |
| Surface-by-surface Petzval sum | -0.000715 mm^-1 | not stated | — |
| Long-end telephoto ratio, including BFD | 0.609 | 0.61 | matches |

The 1188.4 mm computed long-end EFL is retained as the design value in the data file, while the marketed and patent nominal focal-length field remains 1200 mm. The group focal lengths agree with the patent values closely enough to confirm the prescription, including the certificate corrections.

The inferred stop was sized to give an f/11 entrance pupil at both endpoints. Placing the stop 0.5 mm behind surface 21 requires a stop semi-diameter of approximately 24.45 mm. This is an inferred modeling convenience, not a patent-published diaphragm position.

Semi-diameters were estimated because the patent provides no clear-aperture table. The estimates were checked for edge thickness, cross-gap sag intrusion, and renderer rim slope constraints at both zoom endpoints. The front group was capped by the physical 122 mm attachment scale and by edge-thickness limits; full-field paraxial corner bundles therefore vignette in the model, which is preferable to impossible front element geometry.

## Design Heritage and Context

This prescription belongs to Nikon's early ED ultra-telephoto zoom period. It pairs an unusually long 3.33× focal-length range with a constant f/11 aperture and a telephoto ratio near 0.61. The design is materially different from ordinary photographic zooms of the era because the magnification-changing section is nearly afocal and the fixed relay is itself a telephoto lens.

The production AI lens was a special-order Nikon F-mount lens with a single focusing/zooming control, 122 mm front attachment size, and approximately 7.1 kg mass in the AI version. The later Ai-S ED-IF version retained the 360-1200mm f/11, 20-element/12-group specification but added Ai-S coupling and internal-focusing production features.

## Sources

1. US Patent 3,743,384, Soichi Nakamura, “Optical System for the Magnification Varying Portion of an Ultra-Telephoto Type Zoom Lens,” granted July 3, 1973; Certificate of Correction dated March 5, 1974.
2. MIR / Photography in Malaysia, archival Nikon manual/specification scans for the Zoom-Nikkor 360-1200mm f/11 ED, including AI and Ai-S specification tables.
3. Schott, _Optical Glass_ catalog, comparison table of Schott, Hoya, and OHARA glass codes.
4. OHARA Inc., “Comparative Table of Recommended Glasses,” current public cross-reference table.
5. Hoya, “Glass Cross Reference Index,” manufacturer note on six-digit optical glass codes.
