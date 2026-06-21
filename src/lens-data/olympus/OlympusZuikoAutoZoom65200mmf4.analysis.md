## Patent Reference and Design Identification

**Patent:** US 4,568,150  
**Application Number:** US 594,317  
**Title:** Zoom Lens System  
**Filed:** March 28, 1984; priority JP 58-61566, April 9, 1983  
**Granted:** February 4, 1986  
**Inventors:** Kazuo Ikari; Tooru Fujii  
**Assignee:** Olympus Optical Co., Ltd., Tokyo, Japan  
**Classification:** G02B 9/64; G02B 15/22  
**Claims:** 9  
**Worked examples:** 6  
**Embodiment analyzed:** Embodiment 4, claim 7

US 4,568,150 discloses a four-group zoom lens in which Groups I, II, and III form a varifocal subsystem and Group IV is a relay lens. The patent presents two structural variants. Embodiments 1 and 2 correspond to FIG. 1 and use 13 elements in 10 air-separated groups. Embodiments 3 through 6 correspond to FIG. 2 and use 14 elements in 11 air-separated groups. Embodiment 4 is the prescription reproduced here.

The production identification to the Olympus OM-System Zuiko Auto-Zoom 65-200 mm f/4 rests on convergent evidence rather than a model name in the patent. Embodiment 4 has 14 elements in 11 air-separated groups, matching the published construction of the production lens. Its patent focal lengths are 66.923, 113.941, and 194.149 mm, which correspond to the marketed 65-200 mm range after ordinary product rounding. The data-file stop placement computes to approximately F/4.24, close to the marketed constant f/4 aperture; this is an inferred aperture, not an explicit patent table value. The image height implied by the wide-end half field is 21.6 mm, matching the 35 mm full-frame diagonal semi-field. The patent also identifies Group I as the focusing group, consistent with a manual front-group focus mechanism.

The exact choice among Embodiments 3-6 cannot be proven from surviving public product specifications alone, because all four FIG. 2 embodiments share the same broad layout and zoom range. Embodiment 4 is nevertheless a defensible production match and is the embodiment explicitly claimed in claim 7.

## Optical Architecture

The design is a mechanically compensated four-group telephoto-range zoom of positive-negative-positive-positive power distribution. Groups I, II, and III constitute the varifocal subsystem; Group IV is a fixed relay lens. The prescription has 14 spherical glass elements in 11 air-separated groups and no aspherical surfaces. At the long end the vertex-to-vertex track divided by EFL is about 0.754, so the tele position is a true telephoto configuration; at the short end the lens is better described as a telephoto-range zoom rather than a strict telephoto ratio.

Group I has positive refractive power and is the focusing group. It contains a cemented doublet followed by a positive singlet. In the infinity-focus zoom table, the gap after Group I, D1, increases from 2.128 mm at the wide position to 37.471 mm at the tele position.

Group II is the negative variator. It contains a negative cemented doublet, an air-spaced negative singlet, and a positive singlet. The gap after Group II, D2, decreases from 36.355 mm to 0.976 mm as focal length increases, giving the principal zoom magnification change.

Group III is the positive compensator. It is a cemented achromatic doublet. Its following gap, D3, is non-monotonic: 10.982 mm at wide, 1.800 mm at the intermediate position, and 11.017 mm at tele. This reversal is characteristic of cam-compensated zooms where a compensator group corrects focus shift introduced by the variator.

Group IV is the fixed relay lens and contains the stop at its front. It is divided into four components: IVa, an air-spaced positive-negative pair that is positive as a whole; IVb, a positive singlet; IVc, a negative meniscus convex toward the image side; and IVd, a final positive singlet. The patent's central contribution is this relay topology. IVb reduces ray height at the negative meniscus IVc to suppress coma, while IVd is placed behind IVc to reduce positive distortion at the long-focal-length end.

The zoom is constant in axial track at infinity focus. The sum D1 + D2 + D3 is 49.465 mm at all three zoom positions, within the patent's rounding. The vertex-to-vertex optical length is 146.324 mm, and the computed back focal distance is effectively constant at 43.656-43.658 mm.

## Element-by-Element Analysis

### L1 - Negative Meniscus, convex to object

nd = 1.78472, νd = 25.68. Glass: S-TIH11 (OHARA; N-SF11 class). f = -142.2 mm.

L1 is the dense-flint front element of the Group I cemented doublet. Its high refractive index and low Abbe number provide the negative dispersive power needed to achromatize the positive barium-crown element L2. In standalone in-air terms it is a negative meniscus, but in the cemented pair its effect must be read through the L1-L2 interface rather than as an isolated thin element.

### L2 - Plano-Convex Positive, cemented to L1

nd = 1.62299, νd = 58.14. Glass: S-BSM15 (OHARA). f = +93.8 mm.

L2 supplies the main positive power of the front cemented pair. Its flat rear surface simplifies the transition to the short 0.150 mm air gap before L3. The L1-L2 doublet is only weakly positive as a standalone group, with f = +283.0 mm, so the doublet functions more as a chromatic and aberration-corrected collector than as the entire focusing-group power.

### L3 - Plano-Convex Positive

nd = 1.62299, νd = 58.14. Glass: S-BSM15 (OHARA). f = +141.3 mm.

L3 is the rear positive singlet of Group I. It uses the same barium-crown glass as L2 and brings Group I as a whole to f = +95.8 mm. The repeated S-BSM15 choice keeps the front group conventional and avoids unnecessary glass diversity in a moving focusing group.

### L4 - Biconcave Negative, cemented to L5

nd = 1.74320, νd = 49.31. Glass: S-LAM60 (OHARA; patent νd = 49.31). f = -29.0 mm.

L4 is the strongly negative leading element of the variator. Its biconcave geometry provides most of the divergent power in the front half of Group II. The glass sits in dense lanthanum-flint territory by Abbe number, despite the moderate dispersion compared with S-TIH11.

### L5 - Positive Meniscus, cemented to L4

nd = 1.78472, νd = 25.68. Glass: S-TIH11 (OHARA; N-SF11 class). f = +83.9 mm.

L5 is a dense-flint positive meniscus cemented to L4. The L4-L5 cemented pair has f = -41.8 mm, so the pair remains strongly negative. Its glass contrast is smaller than a conventional crown-flint achromat, but the large Abbe-number difference between S-LAM60 and S-TIH11 still contributes chromatic correction within the variator.

### L6 - Biconcave Negative

nd = 1.77250, νd = 49.66. Glass: S-LAH66 class (OHARA; patent νd = 49.66). f = -44.0 mm.

L6 is an air-spaced negative singlet in Group II. It supplements the divergent power of the cemented doublet and helps establish the large magnification swing of the zoom. Current OHARA S-LAH66-family data give nd = 1.77250 with a slightly different catalog Abbe value, so the patent value is treated as an older melt or rounding variant of the S-LAH66 class rather than a distinct modern catalog glass. In the data file, the L6 clear aperture is limited by the very short 0.640 mm airspace before L7; its semi-diameter is therefore set by signed sagittal-clearance constraints, not by a published patent aperture.

### L7 - Biconvex Positive

nd = 1.78472, νd = 25.68. Glass: S-TIH11 (OHARA; N-SF11 class). f = +67.7 mm.

L7 is the positive rear element of Group II. It partly cancels the divergence introduced by L4-L6, moderating the exit ray angle before Group III. This positive dense-flint element also limits the Petzval contribution that a lower-index positive element would have added at the rear of the variator.

### L8 - Biconvex Positive, cemented to L9

nd = 1.51112, νd = 60.48. Glass: 511605 crown class (CDGM H-K6 / legacy NSL7 class). f = +48.3 mm.

L8 is the crown element of the Group III compensator doublet. Its low index and relatively high Abbe number pair with the dense-flint L9 to form an independently corrected positive achromat. The stored nd/νd pair matches the 511605 crown family closely; it is best treated as a class/equivalent identification rather than a unique modern OHARA catalog glass.

### L9 - Negative Meniscus, convex to image, cemented to L8

nd = 1.78472, νd = 25.68. Glass: S-TIH11 (OHARA; N-SF11 class). f = -97.4 mm.

L9 is the dense-flint correcting element of Group III. The L8-L9 doublet has f = +97.3 mm and acts as the compensator group. The strong index and dispersion contrast between L8 and L9 gives this group a more conventional crown-flint achromatic structure than the flint-flint variator doublet.

### L10 - Plano-Convex Positive, relay component IVa front element

nd = 1.50048, νd = 65.99. Glass: 500660 crown class (CDGM H-K2 / legacy BSL4 class). f = +52.9 mm.

L10 sits immediately behind the aperture stop and supplies the strongest positive power in the relay. It begins the positive-negative IVa component that the patent requires to remain positive as a whole. Its low index and high Abbe number keep the front relay element chromatically mild despite its strong curvature.

### L11 - Biconcave Negative, relay component IVa rear element

nd = 1.80610, νd = 40.95. Glass: S-LAH53 class (OHARA; patent νd = 40.95). f = -96.5 mm.

L11 is the negative member of the air-spaced IVa component. It is high-index lanthanum flint and balances the strong convergence from L10. The stored nd/νd pair is best described as S-LAH53 class: current S-LAH53 and S-LAH53V catalog entries sit very close to the patent value, while the patent itself gives only numerical nd/νd and no vendor glass name.

### L12 - Biconvex Positive, relay component IVb

nd = 1.51742, νd = 52.41. Glass: S-NSL36 (OHARA; patent νd = 52.41). f = +75.8 mm.

L12 is the positive singlet that distinguishes the relay from the simpler prior art discussed in the patent. Its role is not merely to add positive power; by converging the beam before L13, it lowers ray height at the strong negative meniscus and reduces coma.

### L13 - Negative Meniscus, convex to image, relay component IVc

nd = 1.77250, νd = 49.66. Glass: S-LAH66 class (OHARA; patent νd = 49.66). f = -33.9 mm.

L13 is the negative meniscus component IVc and is the surface-shape element governed by condition (3). Its shape factor is 1.6308 for Embodiment 4, inside the required 1.0-3.0 interval. The patent identifies this shape as important for balancing curvature of field between the short and long focal-length ends.

### L14 - Biconvex Positive, relay component IVd

nd = 1.51112, νd = 60.48. Glass: 511605 crown class (CDGM H-K6 / legacy NSL7 class). f = +120.1 mm.

L14 is the final positive element of the relay lens. The patent places it behind IVc to counter the positive distortion that would otherwise remain at the telephoto end. The 8.5646 mm air gap between L13 and L14 is the distance D used in condition (4).

## Glass Identification and Selection

The prescription uses eight glass families across fourteen elements. Several identifications are exact or near-exact matches to current OHARA entries, while the two low-index crown glasses are better treated as class/equivalent matches because the patent gives only nd/νd values and no manufacturer glass names.

| Glass / class | nd | νd | Elements | Identification note |
|---|---:|---:|---|---|
| S-TIH11 (OHARA; N-SF11 class) | 1.78472 | 25.68 | L1, L5, L7, L9 | Exact current OHARA nd/νd match; dense flint |
| S-BSM15 (OHARA) | 1.62299 | 58.14 | L2, L3 | Current OHARA S-BSM15 has the same nd with catalog νd close to the patent value |
| S-LAM60 (OHARA) | 1.74320 | 49.31 | L4 | Current catalog value is close; patent value treated as legacy/rounding variant |
| S-LAH66 class (OHARA) | 1.77250 | 49.66 | L6, L13 | Same nd as the modern S-LAH66 family; patent νd is slightly higher than current catalog values |
| 511605 crown class | 1.51112 | 60.48 | L8, L14 | CDGM H-K6 / legacy NSL7 / Schott K7 class |
| 500660 crown class | 1.50048 | 65.99 | L10 | CDGM H-K2 / legacy BSL4 / Schott BK4 class |
| S-LAH53 class (OHARA) | 1.80610 | 40.95 | L11 | S-LAH53-family lanthanum flint; patent value is numerical, not vendor-named |
| S-NSL36 (OHARA) | 1.51742 | 52.41 | L12 | Same nd as current OHARA S-NSL36; patent νd is a close legacy value |

The chromatic structure is conventional for a pre-ED telephoto zoom. The principal achromatic pairs are L1-L2 in the focusing group and L8-L9 in the compensator group. The variator doublet L4-L5 is less conventional because both elements fall on the flint side of the usual νd = 50 boundary, but the Abbe contrast remains large enough to contribute useful correction. No ED, fluorite, anomalous-partial-dispersion, or aspherical element is indicated by the patent table.

## Focus Mechanism

The patent identifies Group I as the focusing group and assigns it positive refractive power. The production lens is a manual-focus OM telephoto zoom; the optical prescription in US 4,568,150 publishes only infinity-focus zoom spacings and does not give a close-focus compensation table.

Accordingly, the data file models the infinity-focus zoom only. The `var` table repeats each zoom spacing as identical infinity/close pairs so that D1, D2, and D3 interpolate correctly through the zoom range without inventing unsupported close-focus group travel. The production close-focus distance is recorded as metadata, but the rendered prescription should not be read as a close-focus optical model.

| Gap | Surface | Wide | Mid | Tele | Motion |
|---|---:|---:|---:|---:|---|
| D1 | d5 | 2.128 | 24.404 | 37.471 | Increases toward tele |
| D2 | d12 | 36.355 | 23.260 | 0.976 | Decreases toward tele |
| D3 | d15 | 10.982 | 1.800 | 11.017 | Reverses after mid |

## Conditional Expressions

The patent defines four relay-lens conditions. Embodiment 4 satisfies all four.

**Condition (1):** $0.3 < f_{4a} / f_4 < 3.0$

$$f_{4a} / f_4 = 102.258 / 117.565 = 0.8698$$

This keeps relay component IVa strong enough for compactness without making spherical aberration excessive.

**Condition (2):** $0.03 < |f_{4c} / f_{4bcd}| < 0.3$

$$f_{4c} / f_{4bcd} = -33.862 / -271.117 = 0.1249$$

This constrains the negative IVc component relative to the IVb-IVc-IVd subsystem. The value remains well inside the patent's interval.

**Condition (3):** $1.0 < \left| (r_{4c1} + r_{4c2}) / (r_{4c1} - r_{4c2}) \right| < 3.0$

$$\left|\frac{-19.6359 + (-81.8964)}{-19.6359 - (-81.8964)}\right| = 1.6308$$

This is the meniscus shape factor of L13. The patent links this condition to field-curvature control.

**Condition (4):** $0.01 < D / f_W < 0.3$

$$D / f_W = 8.5646 / 66.923 = 0.1280$$

This distance is the airspace between IVc and IVd. Larger spacing improves distortion correction but increases the final positive element diameter.

## Verification Summary

The prescription was re-transcribed directly from claim 7 and verified by an independent paraxial y-ν ray trace. Surface powers were computed as $(n' - n) / R$, ray angles were propagated as reduced angles, and Petzval curvature was computed surface-by-surface as $\Phi/(n n')$.

| Zoom position | Patent f (mm) | Computed EFL (mm) | Residual |
|---|---:|---:|---:|
| Wide | 66.923 | 66.9219 | -0.0011 mm |
| Mid | 113.941 | 113.9409 | -0.0001 mm |
| Tele | 194.149 | 194.1451 | -0.0039 mm |

Computed group and component focal lengths also reproduce the patent values to the expected rounding precision: Group IV f = +117.564 mm, IVa f = +102.258 mm, IVc f = -33.862 mm, and IVbcd f = -271.121 mm. The computed back focal distance is 43.656-43.658 mm across the three zoom positions.

The stop semi-diameter used in the data file is 13.724 mm. With the front zoom groups' pupil magnification, this yields an inferred design aperture of approximately F/4.24 at all three zoom positions. The marketed f/4 aperture is stored separately as the nominal f-number.

The Petzval sum is +0.0008982 mm^-1, corresponding to a Petzval radius of approximately 1113 mm. This is a mildly positive Petzval sum for a conventional all-spherical telephoto zoom. The semi-diameters in the data file are estimated because the patent does not publish clear apertures; they were checked against edge thickness, surface-slope, element-ratio, and cross-gap sag constraints rather than asserted as measured production clear apertures. The limiting inferred-aperture case is the L6-to-L7 airspace: the rear L6 semi-diameter is constrained by the 0.640 mm d10 gap so that signed sag intrusion remains below 90% of the gap.

## Design Heritage and Context

The patent distinguishes the design from earlier four-group zooms with simpler relay lenses. One cited prior arrangement used a positive-negative component, a widely spaced biconvex lens, and a rear negative meniscus; the patent argues that this left positive distortion insufficiently corrected at the long end. Another used a positive-negative component, a negative meniscus, and a positive lens; the patent argues that the insufficient converging action before the negative meniscus produced excessive coma.

US 4,568,150 addresses those problems by placing a positive IVb element before the negative IVc meniscus and a positive IVd element after it. The resulting relay remains simple by modern standards, but the additional positive singlet before IVc is analytically important: it lowers ray height at the high-power negative meniscus rather than relying solely on glass choice or final-element correction.

## Sources

- US 4,568,150, "Zoom Lens System," Kazuo Ikari and Tooru Fujii, Olympus Optical Co., Ltd.; filed March 28, 1984; granted February 4, 1986.
- Olympus OM-System product literature for the Zuiko Auto-Zoom 65-200 mm f/4 production specifications.
- OHARA optical glass catalog and datasheets for S-TIH11, S-BSM15, S-LAM60, S-LAH53, S-LAH66, and S-NSL36.
- CDGM catalog data for H-K2 and H-K6, used as class/equivalent references for the two low-index crown glasses.
- Schott and HOYA cross-reference tables, used only as class references where the patent gives nd/νd values but not a glass manufacturer name.
