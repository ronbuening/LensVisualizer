## Patent Reference and Design Identification

**Patent:** JP 2025-162727 A  
**Application Number:** JP 2024-066116  
**Filed:** 2024-04-16  
**Published:** 2025-10-28  
**Inventor:** Daichi Tanoue  
**Applicant:** Sigma Corporation  
**Title:** Imaging Optical System  
**Embodiment analyzed:** Numerical Example 1

The data file transcribes Numerical Example 1 of JP 2025-162727 A in its native millimetre scale. The numerical tables occur on PDF pages 13–14, corresponding to printed pages 12–13; the additional first PDF page is the Patent Abstracts of Japan cover. Figure 1 is on PDF page 22. No other example or family publication supplies numerical values.

The selected construction is correlated with the Sigma 200mm F2 DG OS | Sports. The correlation is supported by the following converging observations:

1. Both have 19 glass elements in 14 air-separated groups.
2. Sigma's construction diagram marks L2 and L4 as its two FLD elements and L7 and L18 as its two SLD elements. In the example these positions carry the 1.43700/95.10 fluorophosphate-like coordinate (L2, L4) and low-dispersion crown coordinates 1.59410/60.47 (L7) and 1.57144/71.61 (L18). The positional match does not identify the supplier of any source glass.
3. Native infinity design values of approximately 194.30 mm and f/2.07 are close to the marketed 200 mm and f/2, while remaining distinct quantities.
4. The published finite configuration is at 1.7 m, matching the manufacturer's minimum focusing-distance specification. Its calculated magnification of -0.131309 is consistent with the marketed approximately 1:7.6 reproduction ratio.
5. The patent contains a transversely movable stabilization group, and the production lens has optical stabilization. The 2024 filing precedes the product's 2025 release year.

This is a construction correlation, not manufacturer confirmation that every factory radius, spacing, material or aperture is unchanged. The model is unscaled. The 212.0003 mm source vertex-to-image track is not the same reference distance as Sigma's 201.0 mm L-Mount or 203.0 mm Sony E front-to-mount barrel length. The production lens is full-frame and offered in L-Mount and Sony E-mount. [1, 2]

The model uses a fixed iris and inferred semi-diameters. The patent's near-focus f/2.25 is not reproduced, and the resulting near-focus vignetting is retained rather than fitted away.

## Optical Architecture

The all-spherical construction has positive–negative–positive functional-group powers. G1 comprises L1–L7, G2 is the single negative focusing element L8, and G3 comprises L9–L19 together with the aperture and stabilization assembly. These three functional groups should not be confused with the 14 air-separated construction groups. Five pairs are cemented: L3–L4, L6–L7, L9–L10, L11–L12 and L14–L15. [1, ¶0056–0058]

The calculated infinity effective focal length is 194.3041 mm. At the published near setting it is 153.3590 mm. G1 has a standalone composite focal length of +124.5461 mm, G2 −108.9661 mm, and G3 +1807.6981 mm. The weak net power of G3 results from substantial positive and negative subassembly powers; its near-cancellation makes its focal length sensitive to the rounded prescription inputs.

The source prints +1807.38 mm for G3. That value is not reproduced exactly: the rounded surface table gives +1807.6981 mm. Explicit half-last-digit perturbation of the tabulated radii, thicknesses and indices gives a 1.7638 mm root-sum-square sensitivity estimate, larger than the 0.3181 mm difference. This supports a source-precision explanation; it is not a correction to the source table or a claim that the printed number was numerically matched.

G1 is subdivided into 1a, L1–L2, and 1b, L3–L7. Their composite focal lengths are +167.6949 and +323.7439 mm. The 32.0000 mm air interval separating them is the largest interval within G1. The patent connects the positive front section and this separation with reduction of ray heights and the dimensions of the following assembly. This stated design rationale does not establish a unique aberration contribution for each surface. [1, ¶0013–0015, ¶0023–0024]

The aperture lies at source surface 18, after the L9–L10 cemented pair. The negative stabilization group Gos, L11–L13, has composite focal length −52.9178 mm; the following group Gr, L14–L19, has +51.7997 mm. Their powers differ from the very weak net power of the complete G3 assembly. [1, ¶0058]

The first-vertex-to-image track divided by infinity EFL is approximately 1.091. Accordingly, the long focal length and product designation alone do not justify a compact telephoto-ratio claim for this numerical model. Infinity paraxial back focal distance is 22.4472 mm from the final vertex, close to the tabulated physical image interval of 22.4456 mm. At finite conjugates the published image interval is preserved; it is not replaced by the infinite-conjugate back focal distance of that changed group configuration.

## Element-by-Element Analysis

The focal lengths below are standalone thick-element focal lengths in air, computed from each element's two radii, thickness and index. In cemented pairs they are descriptive isolated-element powers, not the power of the actual shared interface or a uniquely separable in-situ aberration contribution. Glass names are the catalog rows whose nd, νd and PgF match the source values. They are coordinate equivalents; no supplier or melt identity is established.

### L1 — Biconvex Positive

nd = 1.48749, νd = 70.44. Glass: FC5 (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = +413.31 mm.

L1 is the first positive element of group 1a. Its weakly curved image-side surface has a radius much larger in magnitude than the front radius, so the source prescription gives a biconvex form with a shallow rear surface. Together with L2 it provides the positive front section described in ¶0056.

The relatively large Abbe number is a source material property. The patent's group-level account associates the front positive section with convergence and a smaller following group; the present model does not isolate L1's individual chromatic or spherical-aberration correction.

### L2 — Positive Meniscus

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = +279.71 mm.

L2 is a positive meniscus, convex toward the object, and the second element of 1a. Its 95.10 Abbe number and low index form one of the two conspicuous very-low-dispersion coordinates in the example.

The 32 mm air interval follows L2. This spatial separation belongs to the patent's explicit group-size argument. The FLD correlation is consistent with the production description, but the numerical pair alone does not prove a commercial glass name or a particular melt.

### L3 — Negative Meniscus

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = -171.81 mm.

L3 is the object-side negative meniscus of the L3–L4 cemented pair. It is the patent's L1na: the first negative element in G1 and the first element of subgroup 1b. The source specifically constrains its index, Abbe number and front-radius-to-entrance-pupil ratio. [1, ¶0012–0015, ¶0027, ¶0034–0038]

The actual L3→L4 boundary refracts from the L3 material into L4, not into air. The isolated negative focal length therefore must not be used as a direct statement about that shared interface's in-situ power.

### L4 — Positive Meniscus

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = +106.31 mm.

L4 is the positive meniscus cemented to L3. It uses the same native 1.43700/95.10 coordinate as L2, supplying the second very-low-dispersion positive element in G1.

The patent discusses pairing positive and negative glass with controlled partial-dispersion differences in G1. The absolute PgF values retained for L3 and L4 support examination of that stated material strategy, but they do not constitute a complete measured dispersion curve or demonstrate apochromatic production performance. [1, ¶0015]

### L5 — Biconcave Negative

nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = -145.51 mm.

L5 is the separate biconcave negative element identified as L1nb. Its high index, low Abbe number and bounded source-defined anomalous partial dispersion are the principal material conditions of the patent. It is not the same element as the earlier meniscus L1na. [1, ¶0012, ¶0015–0021]

The S7→S8 air interval immediately before L5 is consequential for the inferred near aperture. At near focus, a marginal ray filling the fixed iris would need larger rims on the two facing surfaces than this 3.02 mm interval allows. The model therefore keeps ordinary clipping at the front of L5 rather than altering the source gap or fitting an undocumented iris schedule.

### L6 — Negative Meniscus

nd = 1.75500, νd = 52.32. Glass: TAC6 (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = -118.96 mm.

L6 is the negative object-side meniscus of the L6–L7 cemented pair. It follows the separate negative L5 within subgroup 1b and precedes the positive partner L7. [1, ¶0056]

Its crown-class numerical coordinate differs substantially from L5's higher-dispersion flint coordinate. That contrast documents the material palette; it does not, by itself, assign a unique aberration correction to L6.

### L7 — Biconvex Positive

nd = 1.59410, νd = 60.47. Glass: FCD600 (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = +67.87 mm.

L7 is the biconvex positive partner of L6 and the final element of G1. Sigma's construction diagram marks this position as one of the two SLD elements. Its low-dispersion coordinate and the source absolute PgF 0.5552 are preserved; the data file converts the latter to dPgF against the Schott-style normal line.

The variable interval after L7 is d12. Its growth during close focusing is the object-side indication that L8 moves toward the image. L7 itself remains fixed in the source mechanism.

### L8 — Negative Meniscus

nd = 1.51823, νd = 58.96. Glass: E-C3 (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = -108.97 mm.

L8 is the single negative meniscus constituting G2. The patent states that only this group moves axially during focusing from infinity toward a nearby object. Its positive front and smaller positive rear radii produce negative net element power. [1, ¶0057]

The source specifies the two bounding air gaps, d12 and d14, at both endpoints. These define its imageward movement without requiring an invented motion law. Intermediate application values are linear spacing interpolation, not independently published finite-conjugate configurations.

### L9 — Biconvex Positive

nd = 1.85883, νd = 30.00. Glass: NBFD30 (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = +37.51 mm.

L9 is the biconvex positive front member of the L9–L10 cemented pair, beginning G3. The aperture follows that pair after the source air interval. [1, ¶0058]

The pair's location before the iris makes it part of the front optics that determine pupil magnification. The current model's entrance-pupil behavior is calculated through all pre-stop surfaces rather than assigned from L9's isolated positive power.

### L10 — Biconcave Negative

nd = 1.80440, νd = 39.58. Glass: S-LAH63Q (OHARA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = -41.56 mm.

L10 is the biconcave negative rear member of the pre-stop cemented pair. Its source coordinate is preserved exactly. The closest checked HOYA catalog coordinate (NBFD3) is near, rather than identical, and differs in PgF. OHARA S-LAH63Q matches the nd/νd pair exactly, and its catalog PgF 0.5762 equals the source value. The data file therefore names S-LAH63Q as the coordinate equivalent. This does not identify the production supplier or melt. [3, 4]

The shared L9→L10 boundary is represented once with the downstream medium. No synthetic cement layer or artificial air spacing is inserted. L10 is not part of the transversely moving Gos group.

### L11 — Biconvex Positive

nd = 1.98612, νd = 16.48. Glass: FDS16-W (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = +72.83 mm.

L11 is the positive front member of the L11–L12 cemented pair and the first element of Gos. Its index is high and its Abbe number low, as directly tabulated. This glass coordinate also occurs at L19.

Despite the isolated positive power of L11, Gos as a complete three-element assembly has negative composite power. Stabilization is attributed to the transversely moving assembly described by the patent, not to this element in isolation. [1, ¶0058]

### L12 — Biconcave Negative

nd = 1.71300, νd = 53.94. Glass: LAC8 (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = -52.55 mm.

L12 is the biconcave negative partner of L11. Its higher Abbe number contrasts with the strongly dispersive L11 material, but no separate numerical aberration allocation is inferred solely from that contrast.

The model retains the cemented interface and source thickness. Gos includes this pair together with the following separate L13; the aperture lies before the assembly.

### L13 — Biconcave Negative

nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = -71.69 mm.

L13 is the separate biconcave negative element completing Gos. It repeats L5's native glass coordinate while occupying a different optical position. [1, ¶0058]

Its inferred front clear radius was constrained by the S21→S22 air-gap geometry. This is a modeled aperture choice with ordinary off-axis clipping, not a published clear diameter. Transverse stabilization motion is not modeled; the prescription is centered.

### L14 — Biconvex Positive

nd = 1.77250, νd = 49.63. Glass: TAF1 (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = +25.94 mm.

L14 is the positive biconvex front member of the L14–L15 cemented pair and the first element of Gr. The source describes the rear assembly as the pair followed by L16–L19. [1, ¶0058]

Its positive standalone power must be distinguished from the net positive power of Gr and the weak positive power of all of G3. The model gives those group quantities from their complete sequential matrices.

### L15 — Negative Meniscus

nd = 2.00069, νd = 25.46. Glass: TAFD40 (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = -35.93 mm.

L15 is the negative meniscus cemented to L14, with its concave side toward the object. It has the highest refractive index in this selected example.

Several HOYA variants share its nd/νd coordinate. The data file names TAFD40 because its catalog PgF 0.6136 equals the source value. That is a coordinate equivalent and does not identify the production supplier. The actual cemented-boundary calculation uses the transition from L14's index to L15's index.

### L16 — Biconvex Positive

nd = 1.77047, νd = 29.74. Glass: NBFD29 (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = +50.79 mm.

L16 is a separate biconvex positive element in Gr. It follows the L14–L15 pair across an air interval and precedes the thin air interval before L17.

The centered prescription and calculated isolated focal length establish its converging character. Neither a specific field-curvature contribution nor a uniquely assigned chromatic role is claimed without a corresponding aberration calculation.

### L17 — Positive Meniscus

nd = 1.56732, νd = 42.84. Glass: E-FL6 (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = +110.66 mm.

L17 is a positive meniscus, concave toward the object. Its two negative radii have unequal magnitude, giving positive standalone power. It is separated from both neighbors by air. [1, ¶0058]

The model retains the two thin 0.15 mm adjacent air intervals exactly; no spacing is added to separate the drawing.

### L18 — Biconcave Negative

nd = 1.57144, νd = 71.61. Glass: FCD615 (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = -60.03 mm.

L18 is the biconcave low-dispersion negative element before the final lens. Its high Abbe number is a source fact and its positive absolute PgF departure is retained numerically.

Sigma's construction diagram marks this position as the second SLD element. The patent itself does not designate L18 as anomalous-dispersion glass, and no particular aberration balance is attributed to it here beyond its position, shape and computed power.

### L19 — Negative Meniscus

nd = 1.98612, νd = 16.48. Glass: FDS16-W (HOYA; nd/νd/PgF coordinate match; production supplier unconfirmed). f = -73.70 mm.

L19 is the final negative meniscus, concave toward the object, using the same tabulated coordinate as L11. It terminates the refracting prescription before the physical image interval. [1, ¶0058]

Its inferred radius is constrained by the S32→S33 gap. No rear cover plate or lens-holder filter occurs in Example 1, so none is added to the model. The final vertex and image plane remain the source reference surfaces; the marketed external filter thread is not an extra optical element.

## Glass Identification and Selection

The patent reports d-line index and Abbe number, with d at 587.56 nm, together with absolute partial-dispersion ratio PgF. All 19 element entries retain these native coordinates. The 16 distinct pairs were compared with the complete HOYA optical-glass catalog dated 2026-07-07, including obsolete entries. An independent OHARA coordinate check supplements it; Schott, HIKARI, CDGM and Sumita were not independently checked. Each element is labelled with the catalog row whose nd, νd and PgF all match the printed values. Where several processing variants share one nd/νd pair, the printed PgF selects the row. [1, ¶0081; 3, 4]

| Source nd / νd | Source PgF | Elements | Labelled catalog row | Catalog PgF |
|---|---|---|---|---|
| 1.43700 / 95.10 | 0.5336 | L2, L4 | HOYA FCD100 | 0.5336 |
| 1.48749 / 70.44 | 0.5306 | L1 | HOYA FC5 | 0.5306 |
| 1.51823 / 58.96 | 0.5442 | L8 | HOYA E-C3 | 0.5442 |
| 1.56732 / 42.84 | 0.5744 | L17 | HOYA E-FL6 | 0.5744 |
| 1.57144 / 71.61 | 0.5419 | L18 | HOYA FCD615 | 0.5419 |
| 1.59410 / 60.47 | 0.5552 | L7 | HOYA FCD600 | 0.5552 |
| 1.71300 / 53.94 | 0.5442 | L12 | HOYA LAC8 | 0.5442 |
| 1.72916 / 54.67 | 0.5453 | L3 | HOYA TAC8 | 0.5453 |
| 1.75500 / 52.32 | 0.5473 | L6 | HOYA TAC6 | 0.5474 |
| 1.77047 / 29.74 | 0.5951 | L16 | HOYA NBFD29 | 0.5951 |
| 1.77250 / 49.63 | 0.5504 | L14 | HOYA TAF1 | 0.5504 |
| 1.80440 / 39.58 | 0.5762 | L10 | OHARA S-LAH63Q | 0.5762 |
| 1.85451 / 25.15 | 0.6103 | L5, L13 | HOYA NBFD25 | 0.6103 |
| 1.85883 / 30.00 | 0.5979 | L9 | HOYA NBFD30 | 0.5979 |
| 1.98612 / 16.48 | 0.6656 | L11, L19 | HOYA FDS16-W | 0.6656 |
| 2.00069 / 25.46 | 0.6136 | L15 | HOYA TAFD40 | 0.6136 |

Catalog PgF values are computed from each row's dispersion formula at the g, F and C lines. All 16 rows reproduce the printed nd, νd and PgF within the source's rounding. The model therefore traces every element on these catalog dispersion curves, while the authored nd, νd and dPgF stay at the source values. For L10, HOYA's nearest row, NBFD3, differs by +0.00010 in index, +0.06 in Abbe number and about −0.0048 in PgF, so the OHARA row is used instead.

These are coordinate equivalents, not supplier identifications. A three-coordinate match narrows the material class but does not show which manufacturer or melt Sigma used. Same-coordinate glasses from other makers were not exhaustively checked. [3, 4]

The patent defines its own deviation as PgF + 0.0018νd − 0.64833. The data file's dPgF field instead uses the normal line 0.6438 − 0.001682νd. Each dPgF value is therefore PgF minus the latter baseline. The original absolute ratios and patent-specific deviations remain distinct. No nC, nF or ng line indices are fabricated from the ratio. Partial-dispersion support improves the model's available material information, but it is not a complete measured spectral prescription and does not establish APO performance.

## Focus Mechanism

Only G2, the single element L8, moves axially toward the image for near focus. The two source configurations are retained as published. Their gaps are:

| Interval after source surface | Infinity | 1700 mm object-to-image |
|---|---:|---:|
| d12 | 3.4000 mm | 17.9678 mm |
| d14 | 20.9224 mm | 6.3545 mm |
| Final image interval BF | 22.4456 mm | 22.4457 mm |

The increase of d12 gives 14.5678 mm imageward travel. The d14 decrease differs by 0.0001 mm, and the final interval grows by the same amount; the tabulated total track is preserved to source precision. The near object is 1488.0000 mm before the first vertex and approximately 1700 mm before the image plane. Its calculated transverse magnification is -0.131309. The finite-conjugate transfer residual at the published image plane is 0.01398555 mm in the matrix B coefficient. [1, ¶0057 and Example 1 spacing table]

The model uses the published near state as its close-focus endpoint. Intermediate spacings are interpolated, not a verified production focus law or additional source-defined object distances. Sigma identifies an HLA linear autofocus actuator for the production lens; that mechanical fact does not supply any missing numerical trajectory. [2]

The physical iris remains fixed with focus. No iris closure toward the patent's near f/2.25, change of nominal f-number or fitted clear rim is applied. Focal-length breathing, the near-focus entrance-pupil readout and the near-focus aperture clipping are separate effects.

## Conditional Expressions

The source's Table 1 conditions are evaluated at the specified source definitions. L1na is L3 and L1nb is L5. In particular, the patent's ΔPgF condition uses its own normal line, not the converted dPgF in the data file. [1, PDF p.21 / printed p.20]

| Condition | Calculated source-table value | Constraint |
|---|---:|---|
| n(L1nb) | 1.854510 | > 1.73 |
| νd(L1nb) | 25.150000 | < 35 |
| patent ΔPgF(L1nb) | 0.007240 | < 0.013 |
| D1/f | 0.164690 | > 0.08 |
| f1a/f | 0.863054 | 0.4 < ratio < 1.7 |
| R1na/EPD | 0.668554 | 0.3 < ratio < 1.2 |
| n(L1na) | 1.729160 | 1.65 < index < 1.80 |
| νd(L1na) | 54.670000 | > 40 |
| fGos/fGr | -1.021585 | −1.5 < ratio < −0.7 |

All nine inequalities are satisfied at the printed reference definitions. The entrance-pupil diameter used in R1na/EPD is the nominal infinity value obtained from design EFL and the source f/2.07 calibration target. Its agreement is not independent measurement of a physical iris diameter. The source's rounded condition values and the unrounded computations are retained separately.

The surface-by-surface Petzval sum is approximately 0.000019473 mm⁻¹. It is the sum of φ/(n·n′) over the source interfaces, not a measured field-curvature curve or proof that astigmatic image surfaces coincide. No quantitative aberration or MTF performance is inferred solely from this small sum.

## Image Stabilization

Gos consists of the L11–L12 cemented pair and separate L13. The patent describes motion with a component perpendicular to the optical axis to reduce image displacement from shake; Figure 1 identifies this group separately from the axial focusing element. [1, ¶0058]

The model is centered and contains the source axial prescription only. It does not simulate decentered stabilization positions, actuator control, dynamic tracking or a measured stabilization advantage. Sigma's production optical-stabilization feature supports the construction correlation but is not a measured property of the centered numerical model. [2]

## Model Scope and Limitations

The patent does not print the iris diameter. The model sets the iris radius to 16.5386 mm by tracing an exact infinity ray entering at height EFL/(2×2.07) to the stop plane; the resulting image-space sine-cone f-number is approximately 2.0698. The iris then stays at that size at every focus distance.

At the 1.7 m near state, a ray filling that iris would reach surfaces 7 and 8 at 31.44 and 31.40 mm, beyond the 30.3 mm rim of surface 8 that the 3.02 mm air interval between L4 and L5 allows. That ray is vignetted at surface 8, and the widest transmitted on-axis cone corresponds to about f/2.14. The patent's near f/2.25 is therefore not reproduced, and vignetting by the inferred rims does not account for it completely. These limits depend on inferred clear apertures and are not measured production values.

Corner chief rays reach the source image height of 21.63 mm at both focus states. At infinity the corresponding field angle is 6.2226°. At the near state the chief ray enters at 4.8187°, consistent with the patent's rounded half-field of 4.82°, while the object point lies 6.1517° off axis as seen from the first vertex; the patent does not state which reference it uses. Off-axis bundles are partly vignetted, and no full-pupil throughput, MTF or production image-quality claim is made.

The viewer's entrance-pupil readout grows from about 48.50 mm at infinity to 62.02 mm at near focus because it scales the fixed iris by the front group's current pupil magnification. With that pupil, the outer pair of the default axial ray fan is clipped by the first-group rims over roughly the last 40 % of the focus travel, and at close focus those rays stop at the front element. Rays aimed from the near object point through the same fraction of the iris pass the whole prescription. The viewer's near-focus effective f-number of about 2.83 is an approximate magnification correction, not a physical sine-cone value or a reproduction of f/2.25.

There are no aspherical surfaces, rear camera plates, required lens-holder filters or converter elements in the selected source model. The manufacturer's external filter-thread dimension is not inserted as an optical plate. The lens is represented at source scale, and no missing source quantity is replaced by marketing values.

## Sources

1. Sigma Corporation, Daichi Tanoue. [JP 2025-162727 A, Imaging Optical System](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2025162727A), published 2025-10-28. Numerical Example 1: PDF pp.13–14 / printed pp.12–13; conventions ¶0081–0089; construction ¶0056–0058; conditions ¶0012–0050 and Table 1, PDF p.21; Figure 1, PDF p.22. The original PDF accompanies the prescription.
2. Sigma. [200mm F2 DG OS | Sports, official product specifications and construction](https://www.sigma-global.com/en/lenses/s025_200_2/), accessed 2026-10-04. Product identity, mounts, format, construction count, marketed focal length/aperture, MFD, reproduction ratio, release-year edition and HLA/OS features.
3. HOYA. [Optical Glass Catalog 20260707, including obsolete entries](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), primary manufacturer catalog checked against the source coordinates. Candidate matches do not establish supplier identity.
4. OHARA. [Glass Type, official optical-glass coordinate tables](https://www.ohara-inc.co.jp/en/product/01000/), independently checked 2026-10-04. S-LAH63Q nd=1.80440, νd=39.58; current S-FPL53 nd=1.43875, νd=94.93 is not an exact match to the source 1.43700/95.10 pair. Catalog coordinates are not supplier identification.
